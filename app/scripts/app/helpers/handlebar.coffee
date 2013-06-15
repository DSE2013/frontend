Ember.Handlebars.registerBoundHelper 'dateOnly', (date) ->
	new Handlebars.SafeString moment(date).format('DD.MM.YYYY') if date

Ember.Handlebars.registerBoundHelper 'timeOnly', (date) ->
	new Handlebars.SafeString moment(date).format('HH:mm') if date

Ember.Handlebars.registerBoundHelper 'formatSSN', (ssn) ->
	return ssn if !ssn or ssn.length isnt 10
	ssn.replace(/\s/g, '').replace(/(\d{4})(\d{2})(\d{2})(\d{2})/g, "$1 $2 $3 $4")
