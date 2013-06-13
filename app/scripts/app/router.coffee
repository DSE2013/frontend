Hospitality.Router.map ->
  @resource 'public', ->
    @route 'time_slots'

  @resource 'patient', ->
    @route 'reservations'
    @resource 'notifications'

  @resource 'surgeon', ->
    @route 'operations'
    @route 'reservations'
    @resource 'notifications'

  @resource 'hospital', ->
    @route 'time_slots'
    @resource 'notifications'
