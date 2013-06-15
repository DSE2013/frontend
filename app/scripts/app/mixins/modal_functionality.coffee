Hospitality.ModalFunctionality = Ember.Mixin.create
	needs: ['modal']

	flash: (msg, msgClass) ->
		@set 'flashMessage', Ember.Object.create
			message: msg
			messageClass: msgClass
