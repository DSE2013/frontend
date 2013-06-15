@Hospitality.ReservationsController = Ember.ArrayController.extend Hospitality.ModalFunctionality,
	deleteReservation: (reservation) ->
		reservation.deleteRecord()