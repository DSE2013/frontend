@Hospitality.TimeSlotsRoute = Hospitality.Route.extend
	model: ->
		Hospitality.TimeSlot.find()

	events:
		newTimeSlot: ->
			employees = Hospitality.HospitalEmployee.find({ user: Hospitality.Auth.get('user.id') })
			employees.on 'didLoad', =>
				hospital = employees.get('firstObject').get('hospital')
				Hospitality.Route.showModal @, 'newTimeSlot', hospital