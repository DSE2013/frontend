Hospitality.Controller = Ember.Controller.extend()

Hospitality.TopController = Ember.Controller.extend
	needs: ['currentUser']
	userBinding: 'controllers.currentUser'

Hospitality.AuthLayoutController = Ember.Controller.extend()
Hospitality.IndexController = Ember.Controller.extend()
Hospitality.CurrentUserController = Ember.ObjectController.extend()

require 'controllers/*'