Hospitality.Router.map ->
  @resource 'reservations', ->
    @route 'new'

  @resource 'time_slots', ->
    @route 'new'

  @resource 'notifications'
