App.OperationType = DS.Model.extend
  name: DS.attr('string')
  length: DS.attr('number')
  timeSlots: DS.hasMany('App.TimeSlot')
  operations: DS.hasMany('App.Operation')