Hospitality.IndexRoute = Ember.Route.extend
	redirect: ->
		@transitionTo 'time_slots'