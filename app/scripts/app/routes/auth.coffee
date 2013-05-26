Hospitality.AuthRoute = Ember.Route.extend
	renderTemplate: ->
		$('body').attr('id', 'auth')

		@render 'top', outlet: 'top'
		@render 'auth.signin'

	setupController: (controller) ->
		@container.lookup('controller::application').connectLayout 'simple'