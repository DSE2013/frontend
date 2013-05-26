Hospitality.HospitalsRoute = Ember.Route.extend Hospitality.DontSetupModelForControllerMixin,
	renderTemplate: ->
		@render 'hospitals'

	setupController: (controller, model) ->
		model = Hospitality.Hospital.find(model.id) if model and !model.get
		controller.set('hospital', model)