Hospitality.NotificationsRoute = Ember.Route.extend
  model: ->
    Hospitality.Notification.find()