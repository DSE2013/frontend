Ember.View.reopen
	init: ->
		@container ||= Hospitality.__container__
		@_super.apply this, arguments

@Hospitality.reopen
	View: Ember.View.extend
		popup: (name) ->
			@popupCloseAll()
			name = event?.target?.name || name
			$("##{name}").toggleClass 'display'
		popupClose: ->
			$(event.target).closest('.popup').removeClass 'display'
		popupCloseAll: ->
			if view = Hospitality.View.currentPopupView
				view.destroy()
				Hospitality.View.currentPopupView = null

			$('.popup').removeClass 'display'

require 'views/application'
require 'views/flash'
require 'views/top'