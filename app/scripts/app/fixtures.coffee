Hospitality.Notification.FIXTURES = [
  {
    id: 1
    title: "Hello A"
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."
  }
  {
    id: 2
    title: "Hello B"
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."
  }
  {
    id: 3
    title: "Hello C"
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."
  }
  {
    id: 4
    title: "Hello D"
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."
  }
  {
    id: 5
    title: "Hello E"
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."
  }
  {
    id: 6
    title: "Hello F"
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."
  }
  {
    id: 7
    title: "Hello G"
    message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."
  }
]

Hospitality.Hospital.FIXTURES = [
  {
    id: 1,
    name: "Donauspital",
    latitude: 16.123,
    longitude: 48.12,
    time_slot_ids: []
  }
]

Hospitality.TimeSlot.FIXTURES = [
  {
    id: 1
    start: "2013-05-26 14:00Z"
    end: "2013-05-26 16:00Z"
    hospital: 1
    operationType: 1
    operation: null
  }, {
    id: 2
    start: "2013-05-26 16:00Z"
    end: "2013-05-26 18:00Z"
    hospital: 1
    operationType: 2
    operation: 1
  }
]

Hospitality.Operation.FIXTURES = [
  {
    id: 1,
    operationType: 1
    time_slot: 2
    surgeon: 1
  }
]

Hospitality.OperationType.FIXTURES = [
  {
    id: 1
    name: "Augenheilkunde"
    length: 240
    time_slots: []
    operations: []
  }, {
    id: 2,
    name: "Orthopädie"
    length: 120
    time_slots: []
    operations: []
  }, {
    id: 3
    name: "HNO"
    length: 180
    time_slots: []
    operations: []
  }, {
    id: 4
    name: "Kardiologie"
    length: 60
    time_slots: []
    operations: []
  }
  {
    id: 5
    name: "Neurochirurgie"
    length: 300
    time_slots: []
    operations: []
  }
]

Hospitality.User.FIXTURES = [
  id: 1,
  name: "Dr. Aufmesser"
]
