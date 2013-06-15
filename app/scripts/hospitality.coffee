require 'app'

window.ENV ||= {}
window.ENV.RAISE_ON_DEPRECATION = true

window.Hospitality = HospitalityApp.create()

Hospitality.deferReadiness()

$.extend Hospitality,
	run: -> Hospitality.advanceReadiness()

	config:
		api_endpoint: $('meta[rel="hospitality.api_endpoint"]').attr('href')

require 'mixins/*'

require 'auth'
require 'store'
require 'router'
require 'routes/*'
require 'controllers/*'
require 'helpers/*'
require 'models/*'
require 'views/*'
require 'fixtures'

Hospitality.setup()
