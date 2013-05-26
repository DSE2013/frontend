require 'app'

window.ENV ||= {}
window.ENV.RAISE_ON_DEPRECATION = true

unless window.history.state
	window.history.state = {}
	oldPushState = window.history.pushState
	window.history.pushState = (state, title, href) ->
		window.history.state = state
		oldPushState.apply this, arguments

	oldReplaceState = window.history.replaceState
	window.history.replaceState = (state, title, href) ->
		window.history.state = state
		oldReplaceState.apply this, arguments

Storage = Ember.Object.extend
	init: -> @set 'storage', {}
	key: (key) -> "__#{key.replace '.', '__'}"
	getItem: (k) -> @get "storage.#{@key k}"
	setItem: (k,v) -> @set "storage.#{@key k}", v
	removeItem: (k) -> @setItem k, null
	clear: -> @set 'storage', {}

window.Hospitality = HospitalityApp.create()

Hospitality.deferReadiness()

$.extend Hospitality,
	run: -> Hospitality.advanceReadiness()

	config:
		api_endpoint: $('meta[rel="hospitality.api_endpoint"]').attr('href')

	storage: (->
		storage = null

		try
			storage = window.localStorage || throw 'no storage'
		catch e
			storage = Storage.create()

		storage
	)()

	sessionStorage: (->
		storage = null

		try
			# Firefox will not throw an error on access for sessionStorage, you need
			# to actually get something from the session
			sessionStorage.setItem 'test'
			storage = sessionStorage
		catch e
			storage = Storage.create()
	)()

require 'lib/hospitality/ajax'
require 'routes'
require 'auth'
require 'controllers'
require 'helpers'
require 'models'
# require 'pusher'
# require 'slider'
require 'store'
# require 'tailing'
# require 'templates'
require 'views'

Hospitality.setup()