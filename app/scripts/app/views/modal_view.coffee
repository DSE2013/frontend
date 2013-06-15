Hospitality.ModalView = Ember.View.extend
	elementId: 'hospitality-modal'
	templateName: 'modal/modal'
	classNameBindings: [ ':modal', ':hide', ':fade', 'controller.modalClass' ]