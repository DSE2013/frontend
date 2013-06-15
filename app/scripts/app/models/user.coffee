@Hospitality.User = DS.Model.extend
	name:		DS.attr 'string'
	ssn:		DS.attr 'string'
	email: 	DS.attr 'string'
	token: 	DS.attr 'string'
	type:		DS.attr 'string'
	role:		DS.attr 'string'

	isSurgeon: ->
		@get('role') is 'surgeon'

	isPatieng: ->
		@get('role') is 'patient'

	isHospitalEmployee: ->
		@get('role') is 'hospital_employee'