(ns shakespeare-survey.db.core
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [shakespeare-survey.db.schema :as schema]))

(defdb db schema/db-spec)

(defentity surveys)

(defn create-survey [survey]
  (insert surveys
          (values survey)))

(defn update-survey [id first-name last-name email]
  (update surveys
  (set-fields {:first_name first-name
               :last_name last-name
               :email email})
  (where {:id id})))

(defn get-survey [id]
  (first (select surveys
                 (where {:id id})
                 (limit 1))))
