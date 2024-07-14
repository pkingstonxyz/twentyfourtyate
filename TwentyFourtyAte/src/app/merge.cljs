(ns app.merge
  (:require [cljs.core.match :refer-macros [match]]))

(defn can-merge [a b]
  (and (number? a) (number? b) (= a b)))

(defn generate-row-moves [[c0 c1 c2 c3] row]
  (match [(:tileval c0) (:tileval c1) (:tileval c2) (:tileval c3)]
         [0 0 0 0] nil
         ; 1 tile
         [a 0 0 0] nil
         [0 a 0 0] {:from [row 1] :to [row 0] :merged false}
         [0 0 a 0] {:from [row 2] :to [row 0] :merged false}
         [0 0 0 a] {:from [row 3] :to [row 0] :merged false}
         ; 2 tiles
         [a b 0 0] (cond (can-merge a b) {:from [row 1] :to [row 0] :merged true}
                         :else   nil)
         [a 0 b 0] (cond (can-merge a b) {:from [row 2] :to [row 0] :merged true}
                         :else   {:from [row 2] :to [row 1] :merged false})
         [a 0 0 b] (cond (can-merge a b) {:from [row 3] :to [row 0] :merged true}
                         :else   {:from [row 3] :to [row 1] :merged false})
         [0 a b 0] (cond (can-merge a b) [{:from [row 1] :to [row 0] :merged false}
                                          {:from [row 2] :to [row 0] :merged true}]
                         :else   [{:from [row 1] :to [row 0] :merged false} 
                                  {:from [row 2] :to [row 1] :merged false}])
         [0 a 0 b] (cond (can-merge a b) [{:from [row 1] :to [row 0] :merged false}
                                          {:from [row 3] :to [row 0] :merged true}]
                         :else   [{:from [row 1] :to [row 0] :merged false}
                                  {:from [row 3] :to [row 1] :merged false}])
         [0 0 a b] (cond (can-merge a b) [{:from [row 2] :to [row 0] :merged false}
                                          {:from [row 3] :to [row 0] :merged true}]
                         :else   [{:from [row 2] :to [row 0] :merged false}
                                  {:from [row 3] :to [row 1] :merged false}])
         ; 3 tiles
         [a b c 0] (cond (can-merge a b) [{:from [row 1] :to [row 0] :merged true}
                                          {:from [row 2] :to [row 1] :merged false}]
                         (can-merge b c) [{:from [row 2] :to [row 1] :merged true}]
                         :else nil)
         [a b 0 c] (cond (can-merge a b) [{:from [row 1] :to [row 0] :merged true}
                                          {:from [row 3] :to [row 1] :merged false}]
                         (can-merge b c) {:from [row 3] :to [row 1] :merged true}
                         :else {:from [row 3] :to [row 2] :merged false})
         [a 0 b c] (cond (can-merge a b) [{:from [row 2] :to [row 0] :merged true}
                                          {:from [row 3] :to [row 1] :merged false}]
                         (can-merge b c) [{:from [row 2] :to [row 1] :merged false}
                                          {:from [row 3] :to [row 1] :merged true}]
                         :else [{:from [row 2] :to [row 1] :merged false}
                                {:from [row 3] :to [row 2] :merged false}]) 
         [0 a b c] (cond (can-merge a b) [{:from [row 1] :to [row 0] :merged false}
                                          {:from [row 2] :to [row 0] :merged true}
                                          {:from [row 3] :to [row 1] :merged false}]
                         (can-merge b c) [{:from [row 1] :to [row 0] :merged false}
                                          {:from [row 2] :to [row 1] :merged false}
                                          {:from [row 3] :to [row 1] :merged true}]
                         :else [{:from [row 1] :to [row 0] :merged false}
                                {:from [row 2] :to [row 1] :merged false}
                                {:from [row 3] :to [row 2] :merged false}])
         ; 4 tiles
         [a b c d] (cond (can-merge a b)
                         (cond (can-merge c d) [{:from [row 1] :to [row 0] :merged true}
                                                {:from [row 2] :to [row 1] :merged false}
                                                {:from [row 3] :to [row 1] :merged true}]
                               :else [{:from [row 1] :to [row 0] :merged true}
                                      {:from [row 2] :to [row 1] :merged false}
                                      {:from [row 3] :to [row 2] :merged false}])
                         (can-merge b c) [{:from [row 2] :to [row 1] :merged true}
                                          {:from [row 3] :to [row 2] :merged false}]
                         (can-merge c d) {:from [row 3] :to [row 2] :merged true}
                         :else nil)))

(defn sub3 [n] (- 3 n))
(defn fix-right [transform]
  (-> transform
      (update-in [:from 1] sub3)
      (update-in [:to 1] sub3)))
(defn fix-up [transform]
  (let [[fr fc] (:from transform)
        [tr tc] (:to transform)]
    (-> transform
        (assoc :from [fc fr])
        (assoc :to [tc tr]))))
    
(defn transpose [m]
  (apply mapv vector m))

(transpose [[1 1 0 0] 
            [2 2 0 0] 
            [3 3 0 0] 
            [4 4 0 0]])

(defn generate-board-moves [board direction]
    (case direction
             :left (flatten (filter identity (map-indexed (fn [idx row] (generate-row-moves row idx)) board)))
             :right (map fix-right (flatten (filter identity (map-indexed (fn [idx row] (generate-row-moves row idx)) (map reverse board)))))
             :up (map fix-up (flatten (filter identity (map-indexed (fn [idx row] (generate-row-moves row idx)) (transpose board)))))
             :down (map fix-up (map fix-right (flatten (filter identity (map-indexed (fn [idx row] (generate-row-moves row idx)) (map reverse (transpose board)))))))))
