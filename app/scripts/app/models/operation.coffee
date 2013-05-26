@Hospitality.Operation = DS.Model.extend
  operationType: DS.belongsTo('Hospitality.OperationType')
  timeSlot: DS.belongsTo('Hospitality.TimeSlot')
  patient: DS.belongsTo('Hospitality.User')
  surgeon: DS.belongsTo('Hospitality.User')