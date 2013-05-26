@Hospitality.TimeSlot = DS.Model.extend
  start: 					DS.attr 'date'
  end: 						DS.attr 'date'
  hospital: 			DS.belongsTo 'Hospitality.Hospital'
  operation: 			DS.belongsTo 'Hospitality.Operation'
  operationType: 	DS.belongsTo 'Hospitality.OperationType'