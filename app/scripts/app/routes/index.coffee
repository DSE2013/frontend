Hospitality.IndexRoute = Ember.Route.extend
	renderTemplate: ->
		$('body').attr('id', 'home')

		@render 'top', outlet: 'top'
		@render 'flash', outlet: 'flash'

	setupController: (controller) ->
		@container.lookup('controller:application').connectLayout 'application'