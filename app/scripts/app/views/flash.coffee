@Hospitality.reopen
	FlashView: Hospitality.View.extend
		classNames: ['flash']
		tagName: 'ul'
		templateName: 'layouts/flash'

	FlashItemView: Hospitality.View.extend
		tagName: 'li'
		classNameBindings: ['type']

		type: (-> @get('flash.type') || 'broadcast').property('flash.type')

		close: ->
			@get('controller').close @get('flash')