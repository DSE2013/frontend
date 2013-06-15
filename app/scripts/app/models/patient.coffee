@Hospitality.Patient = DS.Model.extend
	ssn:		DS.attr 'string'

	user: 	DS.belongsTo('Hospitality.User')

	name: ( ->
		@get('user.name')
	).property('user.name')