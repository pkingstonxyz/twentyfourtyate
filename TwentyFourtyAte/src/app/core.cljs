(ns app.core
  (:require [react-native :as rn]
            ["expo" :as expo]
            [uix.core :refer [$ defui] :as uix]
            ["@react-three/fiber/native" :as r3f]
            ["@react-three/drei" :as r3d]
            ["@react-spring/native" :as rs]
            [refx.alpha :as rfx]
            [app.merge :as m]))

(defn init-board []
  (vec (for [i (range 4)] (vec (for [j (range 4)] {:val 0 :key (+ (* 4 i) j) :pos-x j :pos-y i})))))

(rfx/reg-event-db
  :initialize
  (fn [_ _]
    {:board (init-board)
     :keynum 16}))

(rfx/reg-event-db
  :add-random-tile
  (fn [db _]
    (let [tile-list (flatten (:board db))
          indexed-list (map-indexed (fn [idx itm] [idx itm]) tile-list)
          empty-slots (filter (fn [idx itm]
                                (not= (:val itm) 0)) indexed-list)
          [picked-idx empty-tile] (rand-nth empty-slots)
          [rowcoord colcoord] [(quot picked-idx 4) (mod picked-idx 4)]
          newval (rand-nth [2 2 2 2 2 2 2 2 2 4])
          newkey (:keynum db)]
      (-> db
          (assoc-in [:board rowcoord colcoord :val] newval)
          (assoc-in [:board rowcoord colcoord :key] newkey)
          (update-in [:keynum] inc)))))
 
(rfx/reg-event-fx
  :move
  (fn [{:keys [db] :as cofx} [_ dir]]
    (let [moves (m/generate-board-moves (:board db) dir)]
      (js/console.log (clj->js (:board db)))
      {:db db
       :fx [[:dispatch [:add-random-tile]]]})))

(rfx/reg-sub
  :board
  (fn [db _]
    (:board db)))
(rfx/reg-sub
  :animation-controller
  (fn [db [_ idx]]
    (get-in db [:animation-controllers idx])))

(defui cube [{:keys [idx]}]
  (let [api (rfx/use-sub [:animation-controller idx])
        spring (rs/useSpring #js {:ref api
                                  :x 0})]
    ($ :mesh {:position-x spring}
      ($ :boxGeometry {:args #js [1 1 1]})
      ($ :meshStandardMaterial {:color "orange"}))))


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

(defn tile [tileinfo]
  ($ :mesh {:key (:key tileinfo)
            :position #js [(- (:pos-x tileinfo) 1)
                           (- (:pos-y tileinfo) 1)
                           0]}
     ($ :boxGeometry)
     ($ :meshStandardMaterial {:color "orange"})))

(defui board []
  (let [board (rfx/use-sub [:board])]
    (->> board
        flatten
        (filter #(not (zero? (:val %))))
        (map tile)))) 

(defui root []
  ($ swipe-detector
     ($ r3f/Canvas
        ($ :ambientLight {:intensity 1.57})
        ($ r3d/PerspectiveCamera {:makeDefault true 
                                  :rotation #js [0 0 0]
                                  :position #js [0 0 15]})
        #_($ :mesh
             ($ :boxGeometry {:args #js [1 1 1]})
             ($ :meshStandardMaterial {:color "orange"}))
        ($ board))))

(defn ^:export init []
  (rfx/dispatch-sync [:initialize])
  (expo/registerRootComponent root))
