# require ''

@Hospitality.User = DS.Model.extend
	name:		DS.attr 'string'
	ssn:		DS.attr 'string'
	email: 	DS.attr 'string'
	token: 	DS.attr 'string'
	type:		DS.attr 'string'