Hospitality.TimeSlotsRoute = Ember.Route.extend
	model: ->
		Hospitality.TimeSlot.find()