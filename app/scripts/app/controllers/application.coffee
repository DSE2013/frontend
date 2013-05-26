Hospitality.ApplicationController = Ember.Controller.extend
	templateName: 'layouts/application'

	connectLayout: (name) ->
		name = "layouts/#{name}"
		unless @get('templateName') is name
			@set 'templateName', name