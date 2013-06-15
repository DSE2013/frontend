@Hospitality.User = DS.Model.extend
	name:		DS.attr 'string'
	email: 	DS.attr 'string'
	token: 	DS.attr 'string'
	role:		DS.attr 'string'

	isDoctor: (->
		@get('role') is 'doctor'
	).property('role')

	isPatient: (->
		@get('role') is 'patient'
	).property('role')

	isHospitalEmployee: (->
		@get('role') is 'hospital_employee'
	).property('role')

	canSeeReservations: ( ->
		@get('isPatient') or @get('isDoctor')
	).property('role')