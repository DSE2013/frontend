Hospitality.TimeSlotsRoute = Ember.Route.extend
	model: ->
		Hospitality.TimeSlot.find()

	renderTemplate: ->
		$('body').attr('id', 'home')

		@render 'top', outlet: 'top'
		@render 'time_slots/index'