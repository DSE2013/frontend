App.TimeSlot = DS.Model.extend({
  start: DS.attr('date'),
  end: DS.attr('date'),
  hospital: DS.belongsTo('App.Hospital')
});