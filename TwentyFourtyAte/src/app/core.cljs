(ns app.core
  (:require [react :as r]
            [react-native :as rn]
            ["expo" :as expo]
            [uix.core :refer [$ defui] :as uix]
            ["@react-three/fiber/native" :as r3f]
            ["@react-three/drei/native" :as r3d]
            ["@react-spring/three" :as rs]
            [refx.alpha :as rfx]
            [app.merge :as m]))

(defn init-board []
  (vec (for [i (range 4)] (vec (for [j (range 4)] {:tileval 0 :tilekey (+ (* 4 i) j) :pos-x j :pos-y i})))))

(rfx/reg-event-fx
  :initialize
  (fn [_ _]
    {:db {:board (init-board)
          :keynum 16
          :movecount 0
          :score 0
          :frozen? false
          :frozen-moves-left 0
          :can-remove? false}
     :fx [[:dispatch [:add-random-tile]]
          [:dispatch [:add-random-tile]]]}))

(defn tiles-by-probabilities [probabilities]
  (mapcat (fn [[k v]] (repeat v k)) probabilities))

(def possible-tiles
  (tiles-by-probabilities {2 90
                           4 8
                           :freeze 1
                           :remove 1}))
(rfx/reg-event-db
  :add-random-tile
  (fn [db _]
    (let [tile-list (flatten (:board db))
          empty-slots (filter #(zero? (:tileval %)) tile-list)]
      (if (seq empty-slots)
        (let [picked-tile (rand-nth empty-slots)
              rowcoord (:pos-y picked-tile)
              colcoord (:pos-x picked-tile)
              newtileval (rand-nth possible-tiles)
              newkey (:keynum db)]
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
              newkeyfrom (db :keynum)
              newdb (-> db
                             (assoc-in [:board torow tocol] reposed-from)
                             (assoc-in [:board fromrow fromcol :tileval] 0)
                             (assoc-in [:board fromrow fromcol :tilekey] newkeyfrom)
                             (update-in [:keynum] inc))]
        (if merged
          (-> newdb
              (assoc-in [:board torow tocol :tileval] (* 2 oldval))
              (update :score #(+ % (* 2 oldval))))
          newdb))))
 
(defn update-frozen-db [db]
  (if (:frozen? db)
    (let [should-be-frozen-after? (> (:frozen-moves-left db) 1)]
      (-> db
          (assoc :frozen? should-be-frozen-after?)
          (update :frozen-moves-left dec)))
    db))

(defn add-tile-if-not-frozen [effects frozen?] 
  (if frozen? 
    effects
    (conj effects [:dispatch [:add-random-tile]])))

(rfx/reg-event-fx
  :move
  (fn [{:keys [db] :as cofx} [_ dir]]
    (let [moves (m/generate-board-moves (:board db) dir)
          slides (if (seq moves)
                   (mapv (fn [movedata] [:dispatch [:slide movedata]]) moves)
                   [])
          effects (-> slides
                      (add-tile-if-not-frozen (:frozen? db)))
          #_#_effects (conj slides [:dispatch [:add-random-tile]])
          newdb (-> db
                    (update :movecount inc)
                    update-frozen-db)]
      {:db newdb
       :fx effects}))) 

(defn remove-tile [db pos-x pos-y]
  (let [newkey (:keynum db)]
    (-> db
        (assoc-in [:board pos-y pos-x :tileval] 0)
        (assoc-in [:board pos-y pos-x :tilekey] newkey)
        (update :keynum inc))))

(rfx/reg-event-db
  :freeze
  (fn [db [_ [pos-x pos-y]]]
      (-> db
          (remove-tile pos-x pos-y)
          (assoc :frozen? true)
          (assoc :frozen-moves-left 2))))

(rfx/reg-event-db
  :remove-sauce
  (fn [db [_ [pos-x pos-y]]]
    (-> db
        (remove-tile pos-x pos-y)
        (assoc :can-remove? true))))

(rfx/reg-event-db
  :remove
  (fn [db [_ [pos-x pos-y]]]
    (let [newkey (:keynum db)
          can-remove? (:can-remove? db)]
      (if can-remove?
        (-> db
                   (assoc-in [:board pos-y pos-x :tileval] 0)
                   (assoc-in [:board pos-y pos-x :tilekey] newkey)
                   (update :keynum inc)
                   (assoc :can-remove? false))
        db))))

(rfx/reg-sub
  :board
  (fn [db _]
    (:board db)))

(rfx/reg-sub
  :movecount
  (fn [db _]
    (:movecount db)))

(rfx/reg-sub
  :score
  (fn [db _]
    (:score db)))

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
                                                :tension 1000
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
                                       :scale (.-scale scale)
                                       :onClick (fn [_]
                                                  (case tileval
                                                    :freeze (rfx/dispatch [:freeze [pos-x pos-y]])
                                                    :remove (rfx/dispatch [:remove-sauce [pos-x pos-y]])
                                                    (rfx/dispatch [:remove [pos-x pos-y]])))}
                                                    
                                                    
                           ($ :boxGeometry)
                           ($ :meshStandardMaterial {:color ({0    "#ffffff"
                                                              2    "#c86a6d"
                                                              4    "#cc6b3e"
                                                              8    "#e19c3d"
                                                              16   "#b7a852"
                                                              32   "#9cb36b"
                                                              64   "#89a990"
                                                              128  "#709997"
                                                              256  "#6494aa"
                                                              512  "#967fad"
                                                              1024 "#c769b0"
                                                              2048 "#000000"
                                                              :freeze "#ccccff"
                                                              :remove "#ff0000"} tileval)}))))))

(defui totalMoves []
  (let [movecount (rfx/use-sub [:movecount])]
    ($ rn/Text {:style {:font-size 60}}
       (str "Moves: " movecount))))

(defui score-board []
  (let [score (rfx/use-sub [:score])]
    ($ rn/Text {:style {:font-size 60}}
       (str "Score: " score))))

(defui ui []
  ($ rn/View {:style {:position "absolute"
                      :top 0
                      :left 0
                      :width "100%"
                      :height "100%"}}
     ($ rn/StatusBar)
     ($ rn/View {:style {:margin-top 10
                         :margin-left 10
                         :margin-right 10
                         :height "20%"}}
        ($ rn/View {:style {:flex 1
                            :flexDirection "column"
                            :justifyContent "center"
                            :alignItems "center"}}
           ($ totalMoves)
           ($ score-board)))))
        

(defui reset-button []
  ($ :mesh {:onClick (fn [_]
                       (rfx/dispatch [:initialize]))
            :position #js [0 -3.5 0]}
     ($ :boxGeometry)
     ($ :meshStandardMaterial {:color "#22aa22"}))) 
       
(defui board []
  (let [board (rfx/use-sub [:board])
        tiles (->> board
                    flatten
                    #_(filter #(not (zero? (:tileval %)))))]
    (for [tileinfo tiles]
      ($ tile {:key (:tilekey tileinfo) :tileinfo tileinfo}))))

(defui root []
  ($ swipe-detector
    ($ r3f/Canvas #_{:frameloop "demand"}
        ($ :ambientLight {:intensity 3})
        ($ r3d/PerspectiveCamera {:makeDefault true 
                                  :rotation #js [0 0 0]
                                  :position #js [0 0 12]})
        ($ board)
        ($ reset-button))
    ($ ui)))
        

(defn ^:export init []
  (rfx/dispatch-sync [:initialize])
  (expo/registerRootComponent root))
