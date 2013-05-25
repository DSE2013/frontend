App.Hospital = DS.Model.extend
  name: DS.attr('string')
  latitude: DS.attr('number')
  longitude: DS.attr('number')
  timeSlots: DS.hasMany('App.TimeSlot')

  coordinates: (->
    [ @get('latitude'), @get('longitude') ]
  ).property('latitude', 'longitude')