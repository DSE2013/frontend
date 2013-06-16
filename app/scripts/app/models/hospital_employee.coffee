@Hospitality.HospitalEmployee = DS.Model.extend
	user:				DS.belongsTo('Hospitality.User')
	hospital:		DS.belongsTo('Hospitality.Hospital')

	name: ( ->
		@get('user.name')
	).property('user.name')