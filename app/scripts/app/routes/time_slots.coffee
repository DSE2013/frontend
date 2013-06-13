Hospitality.PublicTimeSlotsRoute = Ember.Route.extend
  model: ->
    Hospitality.TimeSlot.find()
