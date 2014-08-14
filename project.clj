(defproject
  shakespeare-survey
  "0.1.0-SNAPSHOT"
  :description
  "FIXME: write description"
  :ring
  {:handler shakespeare-survey.handler/app,
   :init shakespeare-survey.handler/init,
   :destroy shakespeare-survey.handler/destroy}
  :ragtime
  {:migrations ragtime.sql.files/migrations,
   :database
   "jdbc:postgresql://localhost/shakespeare_survey"}
  :cljsbuild
  {:builds
   [{:source-paths ["src-cljs"],
     :id "dev",
     :compiler
     {:output-dir "resources/public/js/",
      :optimizations :none,
      :output-to "resources/public/js/app.js",
      :source-map true,
      :pretty-print true}}
    {:source-paths ["src-cljs"],
     :id "release",
     :compiler
     {:closure-warnings {:non-standard-jsdoc :off},
      :optimizations :advanced,
      :output-to "resources/public/js/app.js",
      :output-wrapper false,
      :pretty-print false}}]}
  :plugins
  [[lein-ring "0.8.10"]
   [lein-environ "0.5.0"]
   [lein-cljsbuild "1.0.3"]
   [ragtime/ragtime.lein "0.3.6"]]
  :url
  "http://example.com/FIXME"
  :profiles
  {:uberjar {:aot :all},
   :production
   {:ring
    {:open-browser? false, :stacktraces? false, :auto-reload? false}},
   :dev
   {:dependencies
    [[ring-mock "0.1.5"]
     [ring/ring-devel "1.3.0"]
     [pjstadig/humane-test-output "0.6.0"]],
    :injections
    [(require 'pjstadig.humane-test-output)
     (pjstadig.humane-test-output/activate!)],
    :env {:dev true}}}
  :jvm-opts
  ["-server"]
  :dependencies
  [[clj-time "0.8.0"]
   [cljs-ajax "0.2.6"]
   [selmer "0.6.9"]
   [log4j
    "1.2.17"
    :exclusions
    [javax.mail/mail
     javax.jms/jms
     com.sun.jdmk/jmxtools
     com.sun.jmx/jmxri]]
   [reagent "0.4.2"]
   [com.taoensso/timbre "3.2.1"]
   [markdown-clj "0.9.47"]
   [noir-exception "0.2.2"]
   [org.clojure/clojurescript "0.0-2280"]
   [im.chit/cronj "1.0.1"]
   [environ "0.5.0"]
   [korma "0.3.3"]
   [secretary "1.2.0"]
   [org.clojure/clojure "1.6.0"]
   [ring-server "0.3.1"]
   [postgresql/postgresql "9.1-901-1.jdbc4"]
   [com.taoensso/tower "2.0.2"]
   [ragtime "0.3.6"]
   [lib-noir "0.8.4"]]
  :repl-options
  {:init-ns shakespeare-survey.repl}
  :min-lein-version "2.0.0")
