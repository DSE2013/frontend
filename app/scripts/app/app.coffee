unless window.HospitalityApp
	window.HospitalityApp = Ember.Application.extend Ember.Evented,
		LOG_TRANSITIONS: true

		authStateBinding: 'auth.state'
		signedIn: (-> @get('authState') == 'signed-in').property('authState')

		setup: ->
			@store = Hospitality.Store.create()

			@set 'auth', Hospitality.Auth.create
				app: this
				endpoint: Hospitality.config.api_endpoint

		reset: ->
			@_super.apply this, arguments
			@setup()

		lookup: ->
			@__container__.lookup.apply @__container__, arguments

		storeAfterSignInPath: (path) ->
			@get('auth').storeAfterSignInPath path

		autoSignIn: (path) ->
			@get('auth').autoSignIn()

		signIn: ->
			@get('auth').signIn()

		signOut: ->
			@get('auth').signOut()

		receive: ->
			@store.receive.apply @store, arguments

		currentDate: ->
			new Date()