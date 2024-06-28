(ns tfa.core
  (:require ["three" :as three]
            [odoyle.rules :as o]))

(defn init []
  (println "Hello"))

(def scene (three/Scene.))
(def camera (three/PerspectiveCamera. 75 (/ js/window.innerWidth js/window.innerHeight) 0.1 1000))
(def renderer (three/WebGLRenderer.))

(. renderer setSize js/window.innerWidth js/window.innerHeight)
(let [body (. js/document -body)]
  (. body appendChild (. renderer -domElement)))

(def geometry (three/BoxGeometry. 1 1 1))
(def material (three/MeshBasicMaterial. #js {:color 0x00ff00}))
(def cube (three/Mesh. geometry material))
(. scene add cube)
(set! (.. camera -position -z) 5)

(def rules
  (o/ruleset
    {::tick-frame
     [:what
      [::time ::dt dt]]}))

(defn draw []
  (. renderer render scene camera))

