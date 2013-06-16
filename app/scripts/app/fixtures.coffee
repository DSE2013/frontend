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
    name: "AKH Wien",
    time_slot_ids: []
  }, {
    id: 2,
    name: "LKH Klosterneuburg",
    time_slot_ids: []
  }, {
    id: 3,
    name: "Barmherzige Brüder Wien",
    time_slot_ids: []
  }, {
    id: 4,
    name: "LKH Tulln",
    time_slot_ids: []
  }
]

Hospitality.Operation.FIXTURES = [
  {
    id: 1,
    operationType: 1
    timeSlot: 1
    patient: 5
    doctor: 1
  }, {
    id: 2,
    operationType: 1
    timeSlot: null
    patient: 6
    doctor: 1
  }, {
    id: 3,
    operationType: 2
    timeSlot: 2
    patient: 5
    doctor: 3
  }, {
    id: 4,
    operationType: 3
    timeSlot: null
    patient: 7
    doctor: 2
  }, {
    id: 5,
    operationType: 4
    timeSlot: null
    patient: 8
    doctor: 2
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
    hospital: 2
    operationType: 2
    operation: 3
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
    name: "Neurochirurgie"
    length: 300
    time_slots: []
    operations: []
  }, {
    id: 5
    name: "Kardiologie"
    length: 60
    time_slots: []
    operations: []
  }
]

Hospitality.Doctor.FIXTURES = [{
    id: 1
    user: '25298040074072600546865492040'
  }, {
    id: 2
    user: '25297434067534855771376292409'
  }, {
    id: 3
    user: '25298040498347714242185179209'
  }, {
    id: 4
    user: '25298040996409804232343072842'
  }
]

Hospitality.Patient.FIXTURES = [{
    id: '25298103430098671547270070075',
    user: 5,
    ssn: "1111050505"
  }, {
    id: '25298103688353088579203792700',
    user: 6,
    ssn: "1111060605"
  }, {
    id: '25298103909714017463718412093',
    user: 7,
    ssn: "1111070707"
  }, {
    id: '25298104094181458200813928254',
    user: 8,
    ssn: "1111080808"
  }, {
    id: '25298104333989131159038099263',
    user: 9,
    ssn: "1111090909"
  }, {
    id: '25298104518456571896133615424',
    user: 10,
    ssn: "1111101010"
  }
]

Hospitality.HospitalEmployee.FIXTURES = [
  {
    id: 11
    user: '25298101050468686038737911607'
    hospital: 1
  }, {
    id: 12
    user_id: '25298101806785193060829527864'
    hospital: 2
  }, {
    id: 13
    user: '25298102231060306756149215033'
    hospital: 3
  }, {
    id: 14
    user: '25298102378634259345825627962'
    hospital: 4
  }
]

Hospitality.User.FIXTURES = [
  {
    id: '25298040074072600546865492040',
    name: "Dr. Aufmesser",
    email: 'aufmesser@doctors.com',
    passwort: '1234',
    role: 'doctor'
  }, {
    id: '25297434067534855771376292409',
    name: "Dr. Gott",
    email: 'gott@doctors.com',
    passwort: '1234',
    role: 'doctor'
  }, {
    id: '25298040498347714242185179209',
    name: "Dr. Gunst-Fehler",
    email: 'gunst-fehler@doctors.com',
    passwort: '1234',
    role: 'doctor'
  }, {
    id: '25298040996409804232343072842',
    name: "Dr. Augenblick",
    email: 'augenblick@doctors.com',
    passwort: '1234',
    role: 'doctor'
  }, {
    id: '25298103430098671547270070075',
    name: "Hr. Franz Meier",
    email: 'meier@patients.com',
    passwort: '1234',
    role: 'patient'
  }, {
    id: '25298103688353088579203792700',
    name: "Fr. Hermine Müller",
    email: 'mueller@patients.com',
    passwort: '1234',
    role: 'patient'
  }, {
    id: '25298103909714017463718412093',
    name: "Hr. Markus Moser",
    email: 'moser@patients.com',
    passwort: '1234',
    role: 'patient'
  }, {
    id: '25298104094181458200813928254',
    name: "Fr. Beatrix Bauer",
    email: 'bauer@patients.com',
    passwort: '1234',
    role: 'patient'
  }, {
    id: '25298104333989131159038099263',
    name: "Hr. Ben Bäcker",
    email: 'baecker@patients.com',
    passwort: '1234',
    role: 'patient'
  }, {
    id: '25298104518456571896133615424',
    name: "Fr. Gloria Fasching",
    email: 'fasching@patients.com',
    passwort: '1234',
    role: 'patient'
  }, {
    id: '25298101050468686038737911607',
    name: "AKH Wien",
    email: 'akh@hospitals.com',
    passwort: '1234',
    role: 'hospital_employee'
  }, {
    id: '25298101806785193060829527864',
    name: "LKH Klosterneuburg",
    email: 'lkh@hospitals.com',
    passwort: '1234',
    role: 'hospital_employee'
  }, {
    id: '25298102231060306756149215033',
    name: "Barmherzige Brüder",
    email: 'bbw@hospitals.com',
    passwort: '1234',
    role: 'hospital_employee'
  }, {
    id: '25298102378634259345825627962',
    name: "LKH Tulln",
    email: 'tulln@hospitals.com',
    passwort: '1234',
    role: 'hospital_employee'
  }
]
