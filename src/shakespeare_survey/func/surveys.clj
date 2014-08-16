(ns shakespeare-survey.func.surveys
  (:require [clj-time.core :as t]
            [shakespeare-survey.db.core :as db]
            [taoensso.timbre :as timbre]))

(defn build-initial-survey []
  { :year (t/year (t/now)) })

(defn update-survey [id params]
  (let [survey (db/get-survey id)]
    (let [updated-survey (merge survey params)]
      (db/update-survey id
                        (:year updated-survey)
                        (:live_theater_frequency updated-survey)
                        (:live_shakespeare_perfs updated-survey)))))
