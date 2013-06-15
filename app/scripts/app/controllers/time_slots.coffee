@Hospitality.TimeSlotsController = Ember.ArrayController.extend Hospitality.ModalFunctionality,
  filterHospital: null
  filterDoctor: null
  filterOperationType: null

  filteredTimeSlots: ( ->
    c = @get('content')

    c = c.filterProperty('hospital') if @filterHospital
    c = c.filterProperty('operation.doctor', @filterDoctor) if @filterDoctor
    c = c.filterProperty('operationType', @filterOperationType) if @filterOperationType

    c
  ).property('@each')

  deleteTimeSlot: (slot) ->
    slot.deleteRecord()