(ns shakespeare-survey.routes.surveys
  (:require [shakespeare-survey.db.core :as db]
            [shakespeare-survey.layout :as layout]
            [shakespeare-survey.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn redirect]]
            [clojure.pprint :refer [pprint]]))

(defn surveys-create []
  (let [id (:id (db/create-survey {:year 2014}))]
    (redirect (clojure.string/join "/"
                                   ["/surveys" id "edit"]))))

(defn surveys-edit [id]
  (layout/render "surveys/edit.html"
                 { :survey (db/get-survey (read-string id)) }))

(defroutes surveys-routes
  (POST "/surveys" [] (surveys-create))
  (GET "/surveys/:id/edit" [id] (surveys-edit id)))
