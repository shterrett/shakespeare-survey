(ns shakespeare-survey.routes.surveys
  (:require [shakespeare-survey.db.core :as db]
            [shakespeare-survey.func.surveys :as surveys]
            [shakespeare-survey.layout :as layout]
            [shakespeare-survey.routes.builder :as builder]
            [shakespeare-survey.util :as util]
            [compojure.core :refer :all]
            [noir.response :refer [edn redirect]]
            [clojure.pprint :refer [pprint]]))

(defn surveys-create []
  (let [id (:id (db/create-survey (surveys/build-initial-survey)))]
    (redirect (builder/build-path ["surveys" id "edit"]))))

(defn surveys-edit [id]
  (layout/render "surveys/edit.html"
                 { :survey (db/get-survey id) }))

(defn surveys-update [id params]
  (surveys/update-survey id params)
  (layout/render "surveys/complete.html"
                 { :params params }))

(defroutes surveys-routes
  (POST "/surveys" [] (surveys-create))
  (GET "/surveys/:id/edit" [id] (surveys-edit id))
  (PUT "/surveys/:id" [id & params] (surveys-update id params)))
