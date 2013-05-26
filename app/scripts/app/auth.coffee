@Hospitality.Auth = Ember.Object.extend
	state: 'signed-out'
	receivingEnd: "#{location.protocol}//#{location.host}"

	init: ->
		window.addEventListener 'message', (e) =>
			@receiveMessage e

	signOut: ->
		Hospitality.storage.removeItem 'hospitality.user'
		Hospitality.storage.removeItem 'hospitality.token'
		Hospitality.sessionStorage.clear()

		@set 'state', 'logged-out'
		@set 'user', undefined

		if user is Hospitality.__container__.lookup('controller:currentUser').get('content')
			if user.get('stateManager.currentPath') is 'rootState.loaded.updated.uncommitted'
				user.send 'rollback'
			user.unloadRecord()
		Hospitality.__container__.lookup('controller:currentUser').set('content', null)

		if router is Hospitality.__container__.lookup('router:main')
			router.send 'afterSignOut'

	signIn: (data) ->
		if data
			@autoSignIn(data)
		else
			@set 'state', 'signing-in'
			url = "#{@endpoint}/auth/post_message?origin=#{@receivingEnd}"
			$('<iframe id="auth-frame" />').hide().appendTo('body').attr('src', url)

	autoSignIn: (data) ->
		data ||= @userDataFrom(Hospitality.sessionStorage) || @userDataFrom(Hospitality.storage)
		@setData data if data

	userDataFrom: (storage) ->
		userJSON = storage.getItem 'hospitality.user'
		user = JSON.parse user if userJSON?
		user = user.user if user?.user
		token = storage.getItem 'hospitality.token'
		if user and token and @validateUser(user)
			{ user: user, token: token }
		else
			storage.removeItem 'hospitality.user'
			storage.removeItem 'hospitality.token'
			null

	validateUser: (user) ->
		@validateHas 'id', user and @validateHas 'login', user and @validateHas 'token', user and @validateHas 'correct_scopes', user and user.correct_scopes

	validateHas: (field, user) ->
		if user[field] then true else false

	setData: (data) ->
		@storeData data, Hospitality.sessionStorage
		@storeData data, Hospitality.storage unless @userDataFrom Hospitality.storage
		user = @loadUser data.user
		# TODO: We should not use __container__ directly, ho to do it better?
		#				A good answer seems to do auth in context of controller
		Hospitality.__container__.lookup('controller:currentUser').set('content', user)

		@set 'state', 'signed-in'

		Hospitality.trigger 'user:signed_in', data.user
		if router = Hospitality.__container__.lookup 'router:main'
			path = @readAfterSignInPath()
			Ember.run.next =>
				router.send('afterSignIn', path)
				@refreshUserData data.user

	refreshUserData: (user) ->
		Hospitality.ajax.get "/users/#{user.id}", (data) =>
			Hospitality.store.loadIncomplete Hospitality.User, data.user

			if @signedIn()
				data.user.token = user.token
				@storeData data, Hospitality.sessionStorage
				@storeData data, Hospitality.storage

	signedIn: ->
		@get 'state' is 'signed-in'

	storeData: (data, storage) ->
		storage.setItem 'hospitality.token', data.token if data.token
		storage.setItem 'hospitality.user', JSON.stringify(data.user)

	loadUser: (user) ->
		store = @app.store
		store.load Hospitality.User, user.id, user
		user = store.find Hospitality.User, user.id
		user.get 'permissions'
		user

	storeAfterSignInPath: (path) ->
		Hospitality.sessionStorage.setItem 'hospitality.after_signin_path', path

	readAfterSignInPath: ->
		path = Hospitality.sessionStorage.getItem 'hospitality.after_signin_path'
		Hospitality.sessionStorage.removeItem 'hospitality.after_signin_path'
		path

	receiveMessage: (event) ->
		if event.origin is @expectedOrigin()
			if event.data is 'redirect'
				window.location = "#{@endpoint}/auth/handshake?redirect_uri=#{location}"
			else if event.data.user?
				event.data.user.token = evetn.data.hospitality_token if event.data.hospitality_token
				@setData event.data

	expectedOrigin: ->
		if @endpoint[0] is '/' then @receivingEnd else @endpoint