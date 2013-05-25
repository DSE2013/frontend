App.Operation = DS.Model.extend({
  operationType: DS.belongsTo('App.OperationType'),
  timeSlot: DS.belongsTo('App.TimeSlot')
});