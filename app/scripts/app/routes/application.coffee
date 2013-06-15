Hospitality.ApplicationRoute = Ember.Route.extend
	events:
		closeModal: ->
			$('#hospitality-modal').modal('hide')