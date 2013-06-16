@Hospitality.TimeSlotsController = Ember.ArrayController.extend Hospitality.ModalFunctionality,
  filterHospital: null
  filterDoctor: null
  filterOperationType: null

  hospitals: ( ->
    Hospitality.Hospital.find()
  ).property()

  doctors: ( ->
    Hospitality.Doctor.find()
  ).property()

  operationTypes: ( ->
    Hospitality.OperationType.find()
  ).property()

  statuses: [ 'Frei', 'Reserviert' ]


  filteredTimeSlots: ( ->
    c = @get('content')

    if @get('filterDate')
      c = c.filter (item) =>
        moment(item.get('start')).format('YYYY-MM-DD') is @get('filterDate')

    if @get('filterStart')
      c = c.filter (item) =>
        console.log @get('filterStart')
        console.log moment(item.get('start')).format('HH:mm')
        moment(item.get('start')).format('HH:mm') is @get('filterStart')

    if @get('filterEnd')
      c = c.filter (item) =>
        moment(item.get('end')).format('HH:mm') is @get('filterEnd')


    if @get('filterStatus')
      c = c.filter (item) =>
        if @get('filterStatus') is 'Frei'
          item.get('operation') is null
        else
          item.get('operation') isnt null

    c = c.filterProperty('hospital', @get('filterHospital')) if @get('filterHospital')
    c = c.filterProperty('operationType', @get('filterOperationType')) if @get('filterOperationType')
    c = c.filterProperty('operation.doctor', @get('filterDoctor')) if @get('filterDoctor')

    c
  ).property('@each', 'filterDate', 'filterStart', 'filterEnd', 'filterHospital', 'filterDoctor', 'filterOperationType', 'filterStatus')

  deleteTimeSlot: (slot) ->
    slot.deleteRecord()