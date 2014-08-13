(ns shakespeare-survey.routes.home
  (:require [shakespeare-survey.db.core :as db]
            [shakespeare-survey.layout :as layout]
            [shakespeare-survey.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn]]
            [clojure.pprint :refer [pprint]]))

(defn home-page []
  (layout/render "home.html"))

(defn about-page []
  (layout/render "about.html"))

(defn save-document [doc]
  (pprint doc)
  {:status "ok"})

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page)))
