(ns shakespeare-survey.func.surveys
  (:require [clj-time.core :as t]))

(defn build-initial-survey []
  { :year (t/year (t/now)) })
