@Hospitality.OperationType = DS.Model.extend
  name: 			DS.attr 'string'
  length: 		DS.attr 'number'
  timeSlots: 	DS.hasMany 'Hospitality.TimeSlot'
  operations:   DS.hasMany 'Hospitality.Operation'
