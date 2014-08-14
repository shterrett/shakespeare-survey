(ns shakespeare-survey.routes.home
  (:require [shakespeare-survey.layout :as layout]
            [shakespeare-survey.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn redirect]]
            [clojure.pprint :refer [pprint]]))

(defn home-page []
  (layout/render "home.html"))

(defn about-page []
  (layout/render "about.html"))

(defroutes home-routes
  (GET "/" [] (home-page))
  (GET "/about" [] (about-page)))
