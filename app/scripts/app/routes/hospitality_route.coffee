Hospitality.Route = Ember.Route.extend()

Hospitality.Route.reopenClass
	buildRoutes: (builder) ->
		oldBuilder = Hospitality.routeBuilder

		Hospitality.routeBuilder = ->
			oldBuilder.call(@) if oldBuilder
			builder.call(@)

	showModal: (router, name, model) ->
		router.controllerFor('modal').set('modalClass', null)
		router.render name, { into: 'modal', outlet: 'modalBody' }
		controller = router.controllerFor(name)
		if controller
			controller.set('model', model) if model
			controller.set('flashMessage', null)