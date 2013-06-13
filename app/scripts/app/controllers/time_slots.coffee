Hospitality.PublicTimeSlotsController = Ember.ArrayController.extend({
  filterHospital: 0
  filterSurgeon: 0

  filteredTimeSlots: ( ->
    c = @get('content')

    c = c.filterProperty('hospital.id') if @filterHospital > 0
    c = c.filterProperty('operation.surgeon.id', @filterSurgeon) if @filterSurgeon > 0

    c
  ).property('@each')
})
