({waitSeconds:2e4,catchError:!0,paths:{jquery:"../assets/lib/jquery.min",underscore:"../assets/lib/underscore",backbone:"../assets/lib/backbone","bootstrap.min":"../assets/vendor/bootstrap/js/bootstrap.min",async:"../assets/plugins/async",text:"../assets/lib/text"},shim:{underscore:{exports:"_"},backbone:{deps:["underscore"],exports:"Backbone"},"bootstrap.min":["jquery"]},throwWhen:{optimize:!0},mainConfigFile:"loader.js",dir:"../appmin",removeCombined:!0,findNestedDependencies:!0,keepBuildDir:!1,modules:[{name:"config",include:["jquery","underscore","backbone","bootstrap.min","async","text"]},{name:"routers/BaseRouter",include:["app","views/HeaderView","views/FooterView"],exclude:["config"]},{name:"routers/AppRouter",exclude:["config","routers/BaseRouter"]},{name:"routers/SubRouter",exclude:["config","routers/BaseRouter"]}]});