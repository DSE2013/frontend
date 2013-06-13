Hospitality.IndexRoute = Ember.Route.extend
	redirect: ->
		@transitionTo 'public.time_slots'
