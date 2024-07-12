(ns app.core
  (:require [react-native :as rn]
            ["expo" :as expo]
            [uix.core :refer [$ defui] :as uix]
            ["@react-three/fiber/native" :as r3f]
            ["@react-three/drei" :as r3d]
            ["@react-spring/three" :as rs]
            [refx.alpha :as rfx]
            [app.merge :as m]))

(defn init-board []
  (vec (for [i (range 4)] (vec (for [j (range 4)] {:tileval 0 :tilekey (+ (* 4 i) j) :pos-x j :pos-y i})))))

(rfx/reg-event-db
  :initialize
  (fn [_ _]
    {:board (init-board)
     :keynum 16}))

(rfx/reg-event-db
  :add-random-tile
  (fn [db _]
    (let [tile-list (flatten (:board db))
          empty-slots (filter #(zero? (:tileval %)) tile-list)]
      (if (seq empty-slots)
        (let [picked-tile (rand-nth empty-slots)
                    rowcoord (:pos-y picked-tile)
                    colcoord (:pos-x picked-tile)
                    newtileval (rand-nth [2 2 2 2 2 2 2 2 2 4])
                    newkey (:keynum db)]
          #_(js/console.log "new: " #js [rowcoord colcoord])
          (-> db
                 (assoc-in [:board rowcoord colcoord :tileval] newtileval)
                 (assoc-in [:board rowcoord colcoord :tilekey] newkey)
                 (update-in [:keynum] inc)))
        db))))

(rfx/reg-event-db
  :slide
  (fn [db [_ {:keys [from to merged]}]] 
      (let [[fromrow fromcol] from
              [torow tocol]     to
              fromtile  (get-in db [:board fromrow fromcol])
              oldval (:tileval fromtile)
              reposed-from (-> fromtile
                               (assoc :pos-x tocol)
                               (assoc :pos-y torow))
              newkey (db :keynum)
              newdb (-> db
                             (assoc-in [:board torow tocol] reposed-from)
                             (assoc-in [:board fromrow fromcol :tileval] 0)
                             (assoc-in [:board fromrow fromcol :tilekey] newkey)
                             (update-in [:keynum] inc))]
        (if merged
          (-> newdb
              (assoc-in [:board torow tocol :tileval] (* 2 oldval)))
          newdb))))

 
(rfx/reg-event-fx
  :move
  (fn [{:keys [db] :as cofx} [_ dir]]
    (let [moves (m/generate-board-moves (:board db) dir)
          slides (if (seq moves)
                   (mapv (fn [movedata] [:dispatch [:slide movedata]]) moves)
                   [])
          effects (conj slides [:dispatch [:add-random-tile]])]
      #_(js/console.log (clj->js moves))
      {:db db
       :fx #_slides effects}))) 

(rfx/reg-sub
  :board
  (fn [db _]
    (:board db)))



(defui swipe-detector [{:keys [children]}]
  (let [[x set-x!] (uix/use-state 0.0) 
        [y set-y!] (uix/use-state 0.0)]
    ($ rn/View {:style {:width "100%"
                        :height "100%"}
                :on-touch-start (fn [^js e]
                                  (let [event (.-nativeEvent e)
                                        new-x (.-pageX event)
                                        new-y (.-pageY event)]
                                    (set-x! new-x)
                                    (set-y! new-y)))
                :on-touch-end (fn [^js e]
                                (let [dx (- (.. e -nativeEvent -pageX) x)
                                      dy (- (.. e -nativeEvent -pageY) y)
                                      adx (js/Math.abs dx)
                                      ady (js/Math.abs dy)
                                      xthresh 50
                                      ythresh 50]
                                  #_(js/console.log "dx: " dx ", dy: " dy)
                                  (if (or (> adx xthresh) (> ady ythresh))
                                    (if (> adx ady)
                                        ;horizontal swipes
                                        (if (pos? dx)
                                           ;right
                                           (rfx/dispatch [:move :right])
                                           ;left
                                           (rfx/dispatch [:move :left]))
                                        ;vertical swipes
                                        (if (pos? dy)
                                          ;down
                                          (rfx/dispatch [:move :down])
                                          ;up
                                          (rfx/dispatch [:move :up]))))))}
       children)))

(defui tile [{:keys [tileinfo key]}]
  (let [scale 1.2
        pos-x (:pos-x tileinfo)
        pos-y (:pos-y tileinfo)
        tileval (:tileval tileinfo)
        springs (rs/useSpring #js {:position #js [(* scale (- (- (:pos-x tileinfo) 0) 1.5))
                                                  (* scale (- (- 3 (:pos-y tileinfo)) 1.5))
                                                  0]
                                   :config #js {:mass 1
                                                :tension 600
                                                :friction 30}})
        transition (rs/useTransition (:tileval tileinfo)
                                     #js {:from #js {:scale 0.5}
                                          :enter #js {:scale 1}
                                          :leave #js {:scale 0}
                                          :config #js {:mass 1
                                                       :tension 600
                                                       :friction 30}})]
    (transition (fn [scale item]
                  ($ rs/animated.mesh {:key key
                                       :position (.-position springs)
                                       :scale (.-scale scale)} 
                           ($ :boxGeometry)
                           ($ :meshStandardMaterial {:color ({2    "#f18c55"
                                                              4    "#de7033"
                                                              8    "#ca5310"
                                                              16   "#ad3c0e"
                                                              32   "#9e310d"
                                                              64   "#8f250c"
                                                              128  "#691e06"
                                                              256  "#441e15"
                                                              512  "#311e1d"
                                                              1024 "#1e1e24"
                                                              2048 "#000000"} tileval)}))))))

(defui board []
  (let [board (rfx/use-sub [:board])
        tiles (->> board
                    flatten
                    (filter #(not (zero? (:tileval %)))))]
    (for [tileinfo tiles]
      ($ tile {:key (:tilekey tileinfo) :tileinfo tileinfo}))))

(defui root []
  ($ swipe-detector
     ($ r3f/Canvas #_{:frameloop "demand"}
        ($ :ambientLight {:intensity 1.57})
        ($ r3d/PerspectiveCamera {:makeDefault true 
                                  :rotation #js [0 0 0]
                                  :position #js [0 0 12]})
        #_($ :mesh
             ($ :boxGeometry {:args #js [1 1 1]})
             ($ :meshStandardMaterial {:color "orange"}))
        ($ board))))

(defn ^:export init []
  (rfx/dispatch-sync [:initialize])
  (rfx/dispatch-sync [:add-random-tile])
  (rfx/dispatch-sync [:add-random-tile])
  (expo/registerRootComponent root))
