Hospitality.Store = DS.Store.extend
  revision: 12
  adapter: DS.FixtureAdapter.extend
  	queryFixtures: (fixtures, query, type) ->
  		return fixtures
	# adapter: DS.RESTAdapter.create
	# 	url: Hospitality.config.api_endpoint
