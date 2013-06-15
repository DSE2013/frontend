Hospitality.NewTimeSlotController = Ember.ObjectController.extend Hospitality.ModalFunctionality,
	needs: ['modal']

	ssn: '123406060'

	slotDate: null
	length: 0

	operationLengths: [
		{ name: "60 Minuten", length: 60 },
		{ name: "120 Minuten", length: 120 },
		{ name: "180 Minuten", length: 180 },
		{ name: "240 Minuten", length: 240 },
	]

	operationTypes: ( ->
		Hospitality.OperationType.find()
	).property()

	slotStartDate: ( ->
		if @get('slotDate') and @get('slotStartTime')
			Date.parse("#{@get('slotDate')} #{@get('slotStartTime')}")
	).property('slotDate', 'slotStartTime')

	slotEndDate: ( ->
		date = @get('slotStartDate')

		if date and @get('slotLength.length') > 0
			new Date(date + @get('slotLength.length') * 60000)
		else
			''
	).property('slotStartDate', 'slotLength')

	validRequest: ( ->
		@get('slotDate') is null or @get('slotStartTime') is null or @get('operationType') is null or @get('model') is null or @get('slotLength') is null
	).property('slotDate', 'slotStartTime', 'operationType', 'model', 'slotLength')

	createTimeSlot: ->
		ts = Hospitality.TimeSlot.createRecord({
			start: new Date(@get('slotStartDate'))
			end: @get('slotEndDate')
			hospital: @get('model')
			operationType: @get('operationType')
  	})
		ts.save()
		@send('closeModal')