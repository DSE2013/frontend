Hospitality.Auth = Ember.Auth.create
	baseUrl: 'http://localhost:9001'
	signInEndPoint: '/sign_in'
	signOutEndPoint: '/sign_out'

	tokenKey: 'auth_token'
	tokenIdKey: 'user_id'

	sessionAdapter: 'cookie'

	userModel: 'Hospitality.User'

	modules: ['rememberable', 'authRedirectable']

	rememberable:
		tokenKey: 'remember_token'
		period: 7
		autoRecall: true

	authRedirectable:
    route: 'sign-in'


Hospitality.Auth.on 'authAccess', ->
	logAccess()