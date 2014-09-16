(ns shakespeare-survey.db.core
  (:use korma.core
        [korma.db :only (defdb)])
  (:require [clojure.string :as string])
  (:require [shakespeare-survey.db.schema :as schema]))

(defn cast-int-safe [val]
  (if (and (string? val) (not (string/blank? val)))
    (read-string val)
    0))

(defn cast-bool-safe [val]
  (if (or (= val "true") (= val "false"))
    (read-string val)
    false))

(defdb db schema/db-spec)

(defentity surveys)

(defn create-survey [survey]
  (insert surveys
          (values survey)))

(defn update-survey [{:keys [:id
                             :year
                             :live_theater_frequency
                             :live_shakespeare_perfs
                             :other_arts_orgs
                             :marketing_avenue
                             :arts_websites
                             :attend_if_not_free
                             :attended_previously
                             :years_attended_previously
                             :greenshow
                             :other_csc_events
                             :transportation
                             :age_group
                             :gender
                             :attendees
                             :income
                             :ethnicity
                             :residental_zipcode
                             :work_zipcode
                             :additional_comments]}]
  (update surveys
    (set-fields {:year year
                 :live_theater_frequency (cast-int-safe live_theater_frequency)
                 :live_shakespeare_perfs (cast-int-safe live_shakespeare_perfs)
                 :other_arts_orgs (cast-bool-safe other_arts_orgs)
                 :marketing_avenue marketing_avenue
                 :arts_websites arts_websites
                 :attend_if_not_free (cast-bool-safe attend_if_not_free)
                 :attended_previously (cast-bool-safe attended_previously)
                 :years_attended_previously (cast-int-safe years_attended_previously)
                 :greenshow (cast-bool-safe greenshow)
                 :other_csc_events other_csc_events
                 :transportation transportation
                 :age_group (cast-int-safe age_group)
                 :gender gender
                 :attendees (cast-int-safe attendees)
                 :income (cast-int-safe income)
                 :ethnicity ethnicity
                 :residental_zipcode (cast-int-safe residental_zipcode)
                 :work_zipcode (cast-int-safe work_zipcode)
                 :additional_comments additional_comments})
    (where {:id (cast-safe id)})))

(defn get-survey [id]
  (first (select surveys
                 (where {:id (cast-safe id)})
                 (limit 1))))
