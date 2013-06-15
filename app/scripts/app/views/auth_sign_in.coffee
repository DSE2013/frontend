Hospitality.AuthSignInView = Ember.View.extend
	templateName: 'auth/sign-in'

	email: 		null
	password: null

	submit: (e, view) ->
		console.log 'Logging in'
		e.preventDefault()
		e.stopPropagation()

		Hospitality.Auth.signIn
			data:
				email: 		@get 'email'
				password: @get 'password'