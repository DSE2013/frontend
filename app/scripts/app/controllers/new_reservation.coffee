Hospitality.NewReservationController = Ember.ObjectController.extend Hospitality.ModalFunctionality,
	needs: ['modal']

	ssn: '123406060'
	patient: null

	operationTypes: ( ->
		Hospitality.OperationType.find()
	).property()

	lookUpPatient: ( ->
		ssn = @get('ssn')

		# Valid Social Security Numbers have exactly 10 digits
		return if ssn.length isnt 10

		$('#search-spinner').show()

		patients = Hospitality.Patient.find({ ssn: ssn })
		patients.on 'didLoad', =>
			@set('patient', patients.get('firstObject'))
			$('#search-spinner').hide()
	).observes('ssn')

	validRequest: ( ->
		@get('patient') is null or @get('operationType') is null or @get('model') is null
	).property('patient', 'operationType', 'model')

	createReservation: ->
		op = Hospitality.Operation.createRecord
			patient: @get('patient')
			doctor: @get('doctor')
			operationType: @get('operationType')
		op.save()
		@send('closeModal')