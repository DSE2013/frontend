Hospitality.Location = Ember.HistoryLocation.extend
	getURL: ->
		location = @get 'location'
		location.pathname + location.hash



Hospitality.DontSetupModelForControllerMixin = Ember.Mixin.create
	setup: (context) ->
		isTop = undefined
		unless @_redirected
			isTop = true
			@_redirected = []

		@_checkingRedirect = true
		depth = ++@_redirectDepth

		if context is `undefined`
			@redirect()
		else
			@redirect context

		@_redirectDepth--
		@_checkingRedirect = false

		redirected = @_redirected
		@_redirected = null if isTop

		return false if redirected[depth]

		controller = @controllerFor(@routeName, context)

		@setupController controller, context
		@renderTemplate controller, context

Ember.Router.reopen
	# location: (if testMode? then Ember.NoneLocation.create() else Hospitality.Location.create())

	handleURL: (url) ->
		Hospitality.autoSignIn() unless Hospitality.__container__.lookup('controller:currentUser').get('content')

		url = url.replace /#.*?$/, ''

		try
			@_super url
		catch e
			@_super '/not-found' if e.message.match /No route matched the URL/

# TODO: Don't reopen Ember.Route to add events, there should be a better way
Ember.Route.reopen
	events:
		afterSignIn: (path) ->
			@afterSignIn path

		afterSignOut: ->
			@afterSignOut()

	afterSignIn: (path) ->
		@routeTo path

	afterSignOut: ->
		@routeTo '/'

	routeTo: (path) ->
		return unless path
		@router.handleURL path
		@router.location.setURL path

	signedIn: ->
		@controllerFor('currentUser').get('content')

	redirect: ->
		Hospitality.autoSignIn() unless @signedIn()

		if @get 'needsAuth'
			@authorize @router.location.getURL()
		else
			@_super.apply this, arguments

	authorize: (url) ->
		Hospitality.storeAfterSignInPath url
		@transitionTo 'auth'

##
# Router

Hospitality.Router.map ->
	@resource 'time_slots'

##
# Routes

require 'routes/*'