(ns app.core
  (:require [react :as r]
            [react-native :as rn]
            ["expo" :as expo]
            [uix.core :refer [$ defui] :as uix]
            ["@react-three/fiber/native" :as r3f]
            ["@react-three/drei/native" :as r3d]
            ["@react-spring/three" :as rs]
            [refx.alpha :as rfx]
            [app.merge :as m]
            ["../js/test" :as t]
            ["../js/meshes" :as meshes]))
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
          :can-remove? false
          :swap {:can-swap? false
                 :tile-1-pos nil}
          :base-probabilities {2 90
                               4 6
                               :freeze 0
                               :remove 0
                               :swap 0
                               :random 0}
          :fixed-probabilities {2 1}
          :fixed-randomness? false
          :fixed-random-moves-left 0}
     :fx [[:dispatch [:add-random-tile]]
          [:dispatch [:add-random-tile]]]}))

(defn tiles-by-probabilities [probabilities]
  (mapcat (fn [[k v]] (repeat v k)) probabilities))

(rfx/reg-event-db
  :add-random-tile
  (fn [db _]
    (let [tile-list (flatten (:board db))
          empty-slots (filter #(zero? (:tileval %)) tile-list)]
      (if (seq empty-slots)
        (let [picked-tile (rand-nth empty-slots)
              rowcoord (:pos-y picked-tile)
              colcoord (:pos-x picked-tile)
              possible-tiles (tiles-by-probabilities (if (:fixed-randomness? db)
                                                       (:fixed-probabilities db)
                                                       (:base-probabilities db)))
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
          (update :frozen-moves-left dec)
          ;undo the movecount increase lmao
          (update :movecount dec)))
    db))
(defn update-random-db [db]
  (if (:fixed-randomness? db)
    (let [should-be-fixed-after? (> (:fixed-random-moves-left db) 1)]
      (-> db
          (assoc :fixed-randomness? should-be-fixed-after?)
          (update :fixed-random-moves-left dec)))
    db))

(defn add-tile-if-not-frozen [effects frozen?] 
  (if (or frozen? (zero? (count effects)))
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
                    update-frozen-db
                    update-random-db)]
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
  :random-sauce
  (fn [db [_ [pos-x pos-y]]]
    (-> db
        (remove-tile pos-x pos-y)
        (assoc :fixed-randomness? true)
        (assoc :fixed-random-moves-left 5))))

(rfx/reg-event-db
  :swap-sauce
  (fn [db [_ [pos-x pos-y]]]
    (-> db
        (remove-tile pos-x pos-y)
        (assoc-in [:swap :can-swap?] true))))

(defn handle-swap [db pos-x pos-y]
  (let [tile-1-coords (-> db :swap :tile-1-pos)]
    (if (some? tile-1-coords)
      (let [[t1x t1y] tile-1-coords
            tile-1 (get-in db [:board t1y t1x])
            tile-2 (get-in db [:board pos-y pos-x])
            moved-tile-1 (-> tile-1
                             (assoc :pos-x pos-x)
                             (assoc :pos-y pos-y))
            moved-tile-2 (-> tile-2
                             (assoc :pos-x t1x)
                             (assoc :pos-y t1y))]
        (-> db
            (assoc-in [:board t1y t1x] moved-tile-2)
            (assoc-in [:board pos-y pos-x] moved-tile-1)
            (assoc-in [:swap :tile-1-pos] nil)
            (assoc-in [:swap :can-swap?] false)))
      (-> db
          (assoc-in [:swap :tile-1-pos] [pos-x pos-y])))))

(rfx/reg-event-db
  :clicked
  (fn [db [_ [pos-x pos-y]]]
    (let [can-remove? (:can-remove? db)
          can-swap? (-> db :swap :can-swap?)
          tileval (get-in db [:board pos-y pos-x :tileval])]
      (js/console.log (clj->js tileval))
      (cond 
        can-remove? (case tileval
                      0 db
                      :remove db
                      :freeze db
                      :random db
                      :swap db
                      (-> db
                           (remove-tile pos-x pos-y)
                           (assoc :can-remove? false)))
        can-swap? (handle-swap db pos-x pos-y)
        :else db))))

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

(def AnimatedModel (rs/animated meshes/Model))
(defui tile [{:keys [tileinfo key]}]
  (let [scale 1.3
        pos-x (:pos-x tileinfo)
        pos-y (:pos-y tileinfo)
        tileval (:tileval tileinfo)
        springs (rs/useSpring #js {:position #js [(* scale (- (- (:pos-x tileinfo) 0) 1.5))
                                                  (* scale (- (- 3 (:pos-y tileinfo)) 1.5))
                                                  0]
                                   :config #js {:mass 1
                                                :tension 1000
                                                :friction 30}})
        #_#_transition (rs/useTransition (:tileval tileinfo))
        transition (rs/useTransition (:tileval tileinfo)
                                     #js {:from #js {:scale 0.5}
                                          :enter #js {:scale 1}
                                          #_#_:leave #js {:scale 0.5}
                                          :config #js {:mass 1
                                                       :tension 600
                                                       :friction 30}})]
    (transition (fn [scale _]
                  ($ AnimatedModel #js {:key key
                                        :position (.-position springs)
                                        :scale (.-scale scale)
                                        :rotation #js [(/ 3.14159 2) 0 0]
                                        :onClick (fn [_]
                                                   (case tileval
                                                     :freeze (rfx/dispatch [:freeze [pos-x pos-y]])
                                                     :remove (rfx/dispatch [:remove-sauce [pos-x pos-y]])
                                                     :swap   (rfx/dispatch [:swap-sauce [pos-x pos-y]])
                                                     :random (rfx/dispatch [:random-sauce [pos-x pos-y]])
                                                     (rfx/dispatch [:clicked [pos-x pos-y]])))
                                        :val tileval})))) 
  #_(let [scale 1.2
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
                                                      :swap   (rfx/dispatch [:swap-sauce [pos-x pos-y]])
                                                      :random (rfx/dispatch [:random-sauce [pos-x pos-y]])
                                                      (rfx/dispatch [:clicked [pos-x pos-y]])))}
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
                                                                :freeze "#0000ff"
                                                                :remove "#ff0000"
                                                                :swap   "#ffff00"
                                                                :random "#00ff00"} tileval)}))))))

(defui totalMoves []
  (let [movecount (rfx/use-sub [:movecount])]
    ($ rn/Text {:style {:font-size 60}}
       (str "Moves: " movecount))))

(defui score-board []
  (let [score (rfx/use-sub [:score])]
    ($ rn/Text {:style {:font-size 60}}
       (str "Score: " score))))

(defui ui []
  ($ rn/View #js {:style #js {:position "absolute"
                              :top 0
                              :left 0
                              :width "100%"
                              :height "100%"}}
     ($ rn/StatusBar)
     ($ rn/View #js {:style #js {:margin-top 10
                                  :margin-left 10
                                  :margin-right 10
                                  :height "20%"}}
        ($ rn/View #js {:style #js {:flex 1
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
     ($ :meshStandardMaterial #js {:color "#22aa22"}))) 


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
          ($ :ambientLight #js {:intensity 2})
          ($ :pointLight #js {:position #js [0 0 12]
                              :intensity 100})
          ($ r3d/PerspectiveCamera #js {:makeDefault true 
                                        :rotation #js [0 0 0]
                                        :position #js [0 0 12]})
          ($ r/Suspense
             ($ board))
          ($ reset-button)
          #_($ r/Suspense
               ($ meshes/Model 
                  #js {:position #js [0 0 1]
                       :rotation #js [(/ 3.1415 2) 0 0]
                       :val 32})))
                
      ($ ui)))
        

(defn ^:export init []
  (rfx/dispatch-sync [:initialize])
  (expo/registerRootComponent root))
