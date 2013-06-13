Hospitality.ReservationsRoute = Ember.Route.extend
  model: ->
    Hospitality.TimeSlot.find()