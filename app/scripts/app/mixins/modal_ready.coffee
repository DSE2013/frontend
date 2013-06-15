Hospitality.ModalReady = Ember.Mixin.create
	setupController: (controller, model) ->
		route = @
		if model.then
			model.then (m) ->
				controller.set('model', m)
				route.modelReady(controller, m) if (route.modelReady)
		else
			controller.set('model', model)
			route.modelReady(controller, model) if (route.modelReady)
