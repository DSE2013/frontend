@Hospitality.AuthSignOutView = Ember.View.extend
	templateName: 'auth/sign-out'

	submit: (e, view) ->
		e.preventDefault()
		e.stopPropagation()

		Hospitality.Auth.signOut()