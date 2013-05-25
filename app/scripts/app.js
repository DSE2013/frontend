/*global window,Ember */

var App = window.App = Ember.Application.create();

App.Router.map(function () {
  // put your routes here
});

App.Store = DS.Store.extend({
  revision: 12
});

DS.RESTAdapter.reopen({
  namespace: 'api'
});

/* Order and include as you please. */
require('app/scripts/routes/*');
require('app/scripts/controllers/*');
require('app/scripts/models/*');
require('app/scripts/views/*');