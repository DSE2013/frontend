Hospitality.Store = DS.Store.extend {
  # adapter: DS.FixtureAdapter.extend
  # 	queryFixtures: (fixtures, query, type) ->
  # 		return fixtures
}


DS.RESTAdapter.reopen
		url: 'http://dse2013-api.cloudfoundry.com'
