@Hospitality.Operation = DS.Model.extend
  operationType: 	DS.belongsTo('Hospitality.OperationType')
  timeSlot:			 	DS.belongsTo('Hospitality.TimeSlot')
  patient: 				DS.belongsTo('Hospitality.Patient')
  doctor: 				DS.belongsTo('Hospitality.Doctor')

  isAssigned: ( ->
  	@get('time') isnt null
  ).property('timeSlot')