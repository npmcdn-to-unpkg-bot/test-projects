define(["app","text!templates/header.html","models/UserModel"],function(e,t,n){var r=Backbone.View.extend({template:_.template(t),initialize:function(){_.bindAll(this)},events:{},render:function(){return this.$el.html(this.template({logged_in:e.session.get("logged_in")})),this}});return r});