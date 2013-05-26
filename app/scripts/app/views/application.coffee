@Hospitality.reopen
	ApplicationView: Hospitality.View.extend
		templateName: (-> @get 'controller.templateName').property('controller.templateName')
		classNames: ['application']

		templateNameDidChange: (-> @rerender()).observes('templateName')

		click: (event) ->
			# TODO: this solves the case of closing menus and popups, but I would like
			#				to rewrite it later, not sure how yet, but tis does not seem
			#				optimal.
			targetAndParents = $(event.target).parents().andSelf()

			unless targetAndParents.hasClass 'open-popup' and targetAndParents.hasClass 'popup'
				@popupCloseAll()

			# TODO: I need to add a second check to this conditional, because for some
			#				reason event.stopPropagation() in menu() in XXX does not prevent
			#				calling the following code
			unless targetAndParents.hasClass 'menu' and targetAndParents.is '#tools > a'
				$('.menu').removeClass 'display'