@Hospitality.Doctor = DS.Model.extend
	user:		DS.belongsTo('Hospitality.User')

	name: ( ->
		@get('user.name')
	).property('user.name')