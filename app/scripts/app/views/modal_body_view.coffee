Hospitality.ModalBodyView = Ember.View.extend
	classNames: ['modal-body']

	didInsertElement: ->
		$('#hospitality-modal').modal('show')
		$('#modal-alert').hide()

		Ember.run.schedule 'afterRender', =>
			@.$('form input:first').focus()

		title = @get('title')
		@set('controller.controllers.modal.title', title) if title

	displayErrors: (errors, callback) ->
		@set('parentView.parentView.modalErrorsView.errors', errors)
		callback() if typeof callback is 'function'

	flashMessageChanged: ( ->
		flashMessage = @get('controller.flashMessage')
		if flashMessage
			messageClass = flashMessage.get('messageClass') || 'success'
			$alert = $('#modal-alert').hide().removeClass('alert-error', 'alert-success')
			$alert.addClass('alert alert-' + messageClass).html(flashMessage.get('message'))
			$alert.fadeIn()
	).observes('controller.flashMessage')