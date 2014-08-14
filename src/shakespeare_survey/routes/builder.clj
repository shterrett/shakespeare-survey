(ns shakespeare-survey.routes.builder
  (:require [clojure.string :as str]))

(defn build-path [components]
  (str/join "/" (cons "" components)))
