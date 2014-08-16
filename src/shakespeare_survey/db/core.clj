(ns shakespeare-survey.db.core
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [shakespeare-survey.db.schema :as schema]))

(defn cast-int-safe [val]
  (if (string? val) (read-string val)
    val))

(defdb db schema/db-spec)

(defentity surveys)

(defn create-survey [survey]
  (insert surveys
          (values survey)))

(defn update-survey [id
                     year
                     live-theater-frequency
                     live-shakespeare-perfs]
  (update surveys
  (set-fields {:year year
               :live_theater_frequency (cast-int-safe live-theater-frequency)
               :live_shakespeare_perfs (cast-int-safe live-shakespeare-perfs)})
  (where {:id (cast-int-safe id)})))

(defn get-survey [id]
  (first (select surveys
                 (where {:id (cast-int-safe id)})
                 (limit 1))))
