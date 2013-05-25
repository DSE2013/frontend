App = window.App = Ember.Application.create()

App.Router.map ->

class App.Store extends DS.Store
  revision: 12

DS.RESTAdapter.reopen
  namespace: 'api'

# Order and include as you please.
require 'routes/*'
require 'controllers/*'
require 'models/*'
require 'views/*'