var express = require("express")
  , redirect = require("express-redirect");

var app = express();
redirect(app);

var redirects = {
  "/": "https://maori.geek.nz/",
  "/podcasts": "https://maori.geek.nz/podcasts-752bae5290c1",
  "/keystone-metrics-in-devops-the-30-day-project-coinbase" : "https://maori.geek.nz/keystone-metrics-in-devops-the-30-day-project-coinbase-b6c4e0109016",
  "/self-service-devops" : "https://maori.geek.nz/self-service-devops-coinbase-c7e185734adc",
  "/why-are-ultrasound-machines-so-expensive" : "https://maori.geek.nz/why-are-ultrasound-machines-so-expensive-623ce91d8402",
  "/9-things-that-recommender-systems-should-do" : "https://maori.geek.nz/9-things-that-recommender-systems-should-do-f6ad251ef77a",
  "/what-we-learnt-living-in-airbnbs-for-6-months" : "https://maori.geek.nz/what-we-learned-living-in-airbnbs-for-6-months-4fd8c2047ca0",
  "/new-version-of-hapiger-recommender-system" : "https://maori.geek.nz/new-version-of-hapiger-recommender-system-b6eba1b71dc",
  "/3-optimisations-that-improve-recommender-systems" : "https://maori.geek.nz/3-optimisations-that-improve-recommendations-973106aab54f",
  "/an-experiment-educational-video" : "https://maori.geek.nz/an-experiment-educational-video-what-is-a-variable-1492ec5d9c61",
  "/coreos-manage-etchosts" : "https://maori.geek.nz/coreos-fleet-service-to-manage-etc-hosts-e5b7ad039ae0",
  "/testing_microservices_with_travis_ci_and_pmux" : "https://maori.geek.nz/testing-microservices-with-pmux-and-travisci-8d3c42ce995c",
  "/deeply_dysfunctional_fear" : "https://maori.geek.nz/the-dysfunctional-fear-of-code-96291e70e2b8",
  "/embeeded_node_js_on_the_tessel_building_a_modular_security_camera" : "https://maori.geek.nz/embeeded-javascript-on-the-tessel-building-a-modular-security-camera-a4c1c9d31c11",
  "/testing_out_the_tessel_with_project_1_twitter_to_morse_code" : "https://maori.geek.nz/embedded-javascript-on-the-tessel-twitter-to-morse-code-d0088eb21456",
  "/list_of_recommender_systems" : "https://maori.geek.nz/list-of-recommender-systems-4526f7c68964",
  "/boot_2_docker_how_to_set_up_postgres_elasticsearch_and_redis_on_mac_os_x" : "https://maori.geek.nz/boot-2-docker-how-to-set-up-postgres-elasticsearch-and-redis-on-mac-os-x-34d4c9a9fa1b",
  "/hapiger_recommendations_made_easy" : "https://maori.geek.nz/hapiger-recommendations-made-easy-12019fec50cf",
  "/accepts_nested_attributes_for_creating_new_records_gotcha" : "https://maori.geek.nz/accepts-nested-attributes-for-is-creating-new-records-gotcha-b060665f43ed",
  "/scalable_architecture_dr_con_docker_registrator_consul_nginx" : "https://maori.geek.nz/scalable-architecture-dr-con-docker-registrator-consul-consul-template-and-nginx-8da2820d02f9",
  "/big_data_quantity_has_a_quality_all_its_own" : "https://maori.geek.nz/big-data-quantity-has-a-quality-all-its-own-581591039e8",
  "/yeah_nah_movie_recommender_service" : "https://maori.geek.nz/yeah-nah-movie-recommender-service-382cb04499d4",
  "/how_ger_generates_recommendations_the_anatomy_of_a_recommendations_engine" : "https://maori.geek.nz/gers-anatomy-how-to-generate-good-enough-recommendations-2ad21ed58f6f",
  "/a_search_box_is_a_single_question_survey_what_do_you_want" : "https://maori.geek.nz/a-search-box-is-a-single-question-survey-what-do-you-want-3f423c43961b",
  "/introduction_to_testing_node_js_with_mocha_chai_and_sinon" : "https://maori.geek.nz/testing-javascript-with-mocha-chai-and-sinon-b45f672fe897",
  "/javascript_how_to_check_undefined" : "https://maori.geek.nz/javascript-how-to-check-undefined-7ad748c800dc",
  "/javascript_how_to_call_a_function" : "https://maori.geek.nz/javascript-how-to-call-a-function-51ba26d41e2c",
  "/seo_experiment_how_to" : "https://maori.geek.nz/scishows-interesting-experiment-for-javascript-how-to-2504f5f6b222",
  "/docker_web_services_with_consul" : "https://maori.geek.nz/docker-web-services-with-consul-137390c95679",
  "/replacing_an_attribute_with_one_to_many_relationships_in_rails" : "https://maori.geek.nz/replacing-an-attribute-with-a-one-to-many-relationship-in-rails-dc91cc42f4b0",
  "/the_smallest_docker_web_service_that_could" : "https://maori.geek.nz/the-smallest-docker-web-service-that-could-412ce93fccdd",
  "/streaming_directly_into_postgres_with_hapi_js_and_pg_copy_stream" : "https://maori.geek.nz/streaming-directly-into-postgres-with-hapi-js-and-pg-copy-stream-5dd8b8884d9",
  "/postgres_upsert_update_or_insert_in_ger_using_knex_js" : "https://maori.geek.nz/postgres-upsert-update-or-insert-in-ger-using-knex-js-d7013f8b7640",
  "/good_enough_recomendations_with_ger" : "https://maori.geek.nz/good-enough-recommendations-with-ger-d98bf9d92c03",
  "/waterfall_to_agile_an_introduction_to_the_waterfall_scrum_and_kanban_software_method_ologies" : "https://maori.geek.nz/waterfall-to-agile-an-introduction-to-the-waterfall-scrum-and-kanban-software-method-ologies-7c446f5cc671",
  "/vagrant_with_docker_how_to_set_up_postgres_elasticsearch_and_redis_on_mac_os_x" : "https://maori.geek.nz/vagrant-with-docker-how-to-set-up-postgres-elasticsearch-and-redis-on-mac-os-x-9712be13dfdc",
  "/tips_tricks_and_tools_for_creating_and_working_with_maps_in_d3_js" : "https://maori.geek.nz/d3-js-tips-tricks-and-tools-for-creating-and-working-with-maps-60fbac74eee0",
  "/marketing_by_being_useful_how_you_can_be_yousful_with_youtility" : "https://maori.geek.nz/marketing-by-being-useful-how-you-can-be-yousful-with-youtility-c867d09c6904",
  "/publish_subscribe_with_redis_using_ruby" : "https://maori.geek.nz/become-a-publisher-with-redis-and-ruby-b7fec545ceb4",
  "/enterprise_software_and_building_infinite_staircases" : "https://maori.geek.nz/enterprise-software-and-building-infinite-staircases-26335e19b9f",
  "/scroll_elasticsearch_using_promises_and_node_js" : "https://maori.geek.nz/scrolling-elasticsearch-using-node-js-and-promises-172b3644bdb6",
  "/an_introduction_to_d3_js_and_more_visualisation_fun" : "https://maori.geek.nz/d3-js-tutorial-using-html-scales-and-chili-peppers-9a81b601067",
  "/testing_your_code_is_doing_science" : "https://maori.geek.nz/lessons-from-science-on-how-to-test-your-code-fbba799fb4af",
  "/using_q_and_jquery_promises_to_compose_complex_animations" : "https://maori.geek.nz/using-q-and-jquery-promises-to-compose-complex-animations-d058204ae293",
  "/when_to_be_a_software_architect" : "https://maori.geek.nz/when-to-be-a-software-architect-c662bbacc58f",
  "/why_should_you_use_coffeescript_instead_of_javascript" : "https://maori.geek.nz/why-should-you-use-coffeescript-instead-of-javascript-29d9129054d3",
  "/the_difference_between_rich_and_poor_schools_in_new_zealand" : "https://maori.geek.nz/the-difference-between-rich-and-poor-schools-in-new-zealand-fa8bbe85ea63",
  "/what_is_ruby_it_is_fun_and_makes_you_happy" : "https://maori.geek.nz/what-is-ruby-it-is-fun-and-makes-you-happy-337b6f10fa40",
  "/graham_s_ph_d_thesis_a_study_of_software_component_system_evolution" : "https://maori.geek.nz/grahams-ph-d-thesis-a-study-of-software-component-system-evolution-6b73df28d89c",
  "/testing_promises_in_node_js_with_mocha_chai_and_sinon" : "https://maori.geek.nz/testing-promises-in-node-js-with-mocha-chai-and-sinon-6147054599fa",
  "/book_edward_r_tufte_envisioning_information" : "https://maori.geek.nz/envisioning-information-with-edward-r-tufte-144129ac53e8",
  "/i_promise_this_will_be_short" : "https://maori.geek.nz/jquery-promises-and-deferreds-i-promise-this-will-be-short-d10275f82717",
  "/rpython_compiling_python_to_c_for_the_speed" : "https://maori.geek.nz/rpython-compiling-python-to-c-for-the-speed-5411d57a5316",
  "/rpython_is_not_a_language_an_introduction_to_the_rpython_language" : "https://maori.geek.nz/rpython-is-not-a-language-an-introduction-to-the-rpython-language-9f48c7a3047",
  "/mahara_on_heroku" : "https://maori.geek.nz/how-to-deploy-mahara-on-heroku-3b7ecb9800d1",
  "/d3_js_geo_fun" : "https://maori.geek.nz/drawing-maps-with-d3-js-and-other-geographical-fun-3a6eedeb8e3"
}

for (var key in redirects) {
  app.redirect(key, redirects[key])
  app.redirect("/post" + key, redirects[key])
}

app.redirect("/:post", "https://maori.geek.nz/:post")

port = process.env.PORT || 8080
console.log("PORT " + port)

app.listen(port)
