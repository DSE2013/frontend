@Hospitality.reopen
	TopView: Hospitality.View.extend
		templateName: 'layouts/top'

		tabBinding: 'controller.tab'
		userBinding: 'controller.user'

		userName: (-> @get('user.name') || @get('user.login')).property('user.login', 'user.name')

		classHome: (->
			'active' if @get('tab') is 'home'
		).property('tab')

		classHospitals: (->
			classes = ['hospitals']
			console.log @get('tab')
			classes.push 'active' if @get('tab') is 'hospitals'
			classes.join ' '
		).property('tab')

		classProfile: (->
			classes = ['profile menu']
			classes.push 'active' if @get('tab') is 'profile'
			classes.push Hospitality.get('authState')
			classes.join ' '
		).property('tab', 'Hospitality.authState')