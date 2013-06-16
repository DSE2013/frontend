@Hospitality.ReservationsController = Ember.ArrayController.extend Hospitality.ModalFunctionality,

	hospitals: ( ->
		Hospitality.Hospital.find()
	).property()

	doctors: ( ->
		@get('content').mapProperty('doctor').uniq()
	).property('@each')

	patients: ( ->
		@get('content').mapProperty('patient').uniq()
	).property('@each')

	operationTypes: ( ->
		Hospitality.OperationType.find()
	).property()

	statuses: [ 'Angefragt', 'Reserviert' ]

	filteredReservations: ( ->
		c = @get('content')

		console.log c

		if @get('filterDate')
			c = c.filter (item) =>
				return false unless item.get('timeSlot')
				moment(item.get('timeSlot.start')).format('YYYY-MM-DD') is @get('filterDate')

		if @get('filterStart')
			c = c.filter (item) =>
				return false unless item.get('timeSlot')
				console.log @get('filterStart')
				console.log moment(item.get('start')).format('HH:mm')
				moment(item.get('timeSlot.start')).format('HH:mm') is @get('filterStart')

		if @get('filterEnd')
			c = c.filter (item) =>
				return false unless item.get('timeSlot')
				moment(item.get('timeSlot.end')).format('HH:mm') is @get('filterEnd')


		if @get('filterStatus')
			c = c.filter (item) =>
				if @get('filterStatus') is 'Reserviert'
					item.get('timeSlot') isnt null
				else
					item.get('timeSlot') is null

		c = c.filterProperty('timeSlot.hospital', @get('filterHospital')) if @get('filterHospital')
		c = c.filterProperty('operationType', @get('filterOperationType')) if @get('filterOperationType')
		c = c.filterProperty('patient', @get('filterPatient')) if @get('filterPatient')
		c = c.filterProperty('doctor', @get('filterDoctor')) if @get('filterDoctor')

		c
	).property('@each', 'filterDate', 'filterStart', 'filterEnd', 'filterHospital', 'filterDoctor', 'filterPatient', 'filterOperationType', 'filterStatus')

	deleteReservation: (reservation) ->
		reservation.deleteRecord()