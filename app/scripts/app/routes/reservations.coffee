@Hospitality.ReservationsRoute = Hospitality.Route.extend
	model: ->
		Hospitality.Operation.find()

	events:
		newReservation: ->
			doctors = Hospitality.Doctor.find({ user: Hospitality.Auth.get('user.id') })
			doctors.on 'didLoad', =>
				doctor = doctors.get('firstObject')
				Hospitality.Route.showModal @, 'newReservation', doctor
