(ns shakespeare-survey.func.surveys
  (:require [clj-time.core :as t]
            [shakespeare-survey.db.core :as db]
            [shakespeare-survey.routes.builder :as builder]
            [taoensso.timbre :as timbre]))

(defn build-initial-survey []
  { :year (t/year (t/now)) })

(def survey-params
  [:year
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
   :additional_comments])

(def survey-data-options
  { :marketing-avenue ["Newspaper"
                       "Magazine"
                       "Radio"
                       "TV"
                       "MBTA ad"
                       "Poster"
                       "Social Media"
                       "CSC Website"
                       "CSC E-blast"
                       "Word of Mouth"]
    :transportation ["Walk"
                     "Bike"
                     "Car"
                     "Taxi/Car Service"
                     "Public Transit (T or bus)"]
   :age-group [{ :id 1 :range "Under 18" }
               { :id 2 :range "18-24" }
               { :id 3 :range "25-34" }
               { :id 4 :range "35-44" }
               { :id 5 :range "45-54" }
               { :id 6 :range "65-74" }
               { :id 7 :range "75 and up" }]
    :gender ["male"
             "female"
             "other"]
    :children [{ :display "Yes, and one or more is with me at this performance"
                 :value "attending" }
               { :display "Yes, but I did not bring them"
                 :value "not-attending" }
               { :display "No"
                 :value "no" }]
    :education [{ :display "High School/GED"
                  :value "high-school" }
                { :display "2 year college (Associates)"
                  :value "associates" }
                { :display "4 year college (BA/BS)"
                  :value "bachelors" }
                { :display "Master's Degree"
                  :value "masters" }
                { :display "Doctoral or Professional Degree"
                  :value "doctoral-professional" }
                { :display "I'd prefer not to say"
                  :value "no-response" }]
    :ethnicity [{ :display "African American/Black"
                  :value "african-american" }
                { :display "American Indian"
                  :value "american-indian" }
                { :display "Asian"
                  :value "asian" }
                { :display "Native Hawaiian/Pacific Islander"
                  :value "hawaiian-pacific" }
                { :display "Hispanic/Latino"
                  :value "hispanic-latino" }
                { :display "White (non-Hispanic)"
                  :value "white"}
                { :display "Two or more races"
                  :value "multi" }
                { :display "I'd prefer not to say"
                  :value "no-response" }]})


(defn update-survey [id params]
  (let [survey (db/get-survey id)]
    (let [updated-survey (merge survey
                                (builder/allowed-params survey-params
                                                        params))]
      (db/update-survey updated-survey))))
