unless window.HospitalityApp
	window.HospitalityApp = Ember.Application.extend Ember.Evented,
		LOG_TRANSITIONS: true

		setup: ->
			@store = Hospitality.Store.create()

		currentDate: ->
			new Date()