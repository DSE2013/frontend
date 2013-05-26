Hospitality.FlashController = Ember.ArrayController.extend
	needs: ['currentUser']
	currentUserBinding: 'controllers.currentUser'
	broadcastBinding: 'controllers.broadcasts'

	init: ->
		@_super.apply this, arguments
		@set 'flashes', Ember.A()

	content: (->
		@get('unseenBroadcasts').concat(@get('flashes'))
	).property('unseenBroadcasts.length', 'flashes.length')

	unseenBroadcasts: (->
		@get('broadcasts').filterProperty('isSeen', false)
	).property('broadcasts.isLoaded', 'broadcasts.length')

	broadcasts: (->
		if @get('currentUser') then Hospitality.Broadcast.find() else Ember.A()
	).property('currentUser')

	loadFlashes: (messages) ->
		for message in messages
			type = Ember.keys(message)[0]
			message = { type: type, message: message[type] }
			@get('flashes').pushObject message
			Ember.run.later(this, ->
				@get('flashes').removeObject(message)
			, 15000)

	close: (message) ->
		if message instanceof Hospitality.Broadcast
			message.setSeen()
			@notifyPropertyChange 'unseenBroadcasts'
		else
			@get('flashes').removeObject message