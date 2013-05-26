Ember.Handlebars.registerBoundHelper 'dateOnly', (date) ->
	new Handlebars.SafeString moment(date).format('DD.MM.YYYY')

Ember.Handlebars.registerBoundHelper 'timeOnly', (date) ->
	new Handlebars.SafeString moment(date).format('HH:mm')
