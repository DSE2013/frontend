!function(){!function(){!function(){window.HospitalityApp||(window.HospitalityApp=Ember.Application.extend(Ember.Evented,{LOG_TRANSITIONS:!0,setup:function(){return this.store=Hospitality.Store.create()},currentDate:function(){return new Date}}))}.call(this)}(),function(){window.ENV||(window.ENV={}),window.ENV.RAISE_ON_DEPRECATION=!0,window.Hospitality=HospitalityApp.create(),Hospitality.deferReadiness(),$.extend(Hospitality,{run:function(){return Hospitality.advanceReadiness()},config:{api_endpoint:$('meta[rel="hospitality.api_endpoint"]').attr("href")}})}(),function(){!function(){Hospitality.ModalFunctionality=Ember.Mixin.create({needs:["modal"],flash:function(a,b){return this.set("flashMessage",Ember.Object.create({message:a,messageClass:b}))}})}.call(this)}(),function(){!function(){Hospitality.ModalReady=Ember.Mixin.create({setupController:function(a,b){var c;return c=this,b.then?b.then(function(b){return a.set("model",b),c.modelReady?c.modelReady(a,b):void 0}):(a.set("model",b),c.modelReady?c.modelReady(a,b):void 0)}})}.call(this)}(),function(){!function(){Hospitality.Auth=Ember.Auth.create({baseUrl:"http://dse2013-auth-server.herokuapp.com",signInEndPoint:"/sign_in",signOutEndPoint:"/sign_out",tokenKey:"auth_token",tokenIdKey:"user_id",sessionAdapter:"cookie",userModel:"Hospitality.User",modules:["rememberable","authRedirectable"],rememberable:{tokenKey:"remember_token",period:7,autoRecall:!0},authRedirectable:{route:"sign-in"}}),Hospitality.Auth.on("signOutComplete",function(){return window.location.reload()})}.call(this)}(),function(){!function(){Hospitality.Store=DS.Store.extend({revision:12,adapter:DS.FixtureAdapter.extend({queryFixtures:function(a){return a}})})}.call(this)}(),function(){!function(){Hospitality.Router.map(function(){return this.resource("reservations",function(){return this.route("new")}),this.resource("time_slots",function(){return this.route("new")}),this.resource("notifications")})}.call(this)}(),function(){!function(){Hospitality.ApplicationRoute=Ember.Route.extend({events:{closeModal:function(){return $("#hospitality-modal").modal("hide")}}})}.call(this)}(),function(){!function(){Hospitality.Route=Ember.Route.extend(),Hospitality.Route.reopenClass({buildRoutes:function(a){var b;return b=Hospitality.routeBuilder,Hospitality.routeBuilder=function(){return b&&b.call(this),a.call(this)}},showModal:function(a,b,c){var d;return a.controllerFor("modal").set("modalClass",null),a.render(b,{into:"modal",outlet:"modalBody"}),d=a.controllerFor(b),d?(c&&d.set("model",c),d.set("flashMessage",null)):void 0}})}.call(this)}(),function(){!function(){Hospitality.IndexRoute=Ember.Route.extend({redirect:function(){return this.transitionTo("time_slots")}})}.call(this)}(),function(){!function(){Hospitality.NotificationsRoute=Ember.Route.extend({model:function(){return Hospitality.Notification.find()}})}.call(this)}(),function(){!function(){this.Hospitality.ReservationsRoute=Hospitality.Route.extend({model:function(){return Hospitality.Operation.find()},events:{newReservation:function(){var a,b=this;return a=Hospitality.Doctor.find({user:Hospitality.Auth.get("user.id")}),a.on("didLoad",function(){var c;return c=a.get("firstObject"),Hospitality.Route.showModal(b,"newReservation",c)})}}})}.call(this)}(),function(){!function(){this.Hospitality.TimeSlotsRoute=Hospitality.Route.extend({model:function(){return Hospitality.TimeSlot.find()},events:{newTimeSlot:function(){var a,b=this;return a=Hospitality.HospitalEmployee.find({user:Hospitality.Auth.get("user.id")}),a.on("didLoad",function(){var c;return c=a.get("firstObject").get("hospital"),Hospitality.Route.showModal(b,"newTimeSlot",c)})}}})}.call(this)}(),function(){!function(){Hospitality.ApplicationController=Ember.Controller.extend()}.call(this)}(),function(){!function(){Hospitality.ModalController=Ember.Controller.extend()}.call(this)}(),function(){!function(){Hospitality.NewReservationController=Ember.ObjectController.extend(Hospitality.ModalFunctionality,{needs:["modal"],ssn:"123406060",patient:null,operationTypes:function(){return Hospitality.OperationType.find()}.property(),lookUpPatient:function(){var a,b,c=this;return b=this.get("ssn"),10===b.length?($("#search-spinner").show(),a=Hospitality.Patient.find({ssn:b}),a.on("didLoad",function(){return c.set("patient",a.get("firstObject")),$("#search-spinner").hide()})):void 0}.observes("ssn"),validRequest:function(){return null===this.get("patient")||null===this.get("operationType")||null===this.get("model")}.property("patient","operationType","model"),createReservation:function(){var a;return a=Hospitality.Operation.createRecord({patient:this.get("patient"),doctor:this.get("doctor"),operationType:this.get("operationType")}),a.save(),this.send("closeModal")}})}.call(this)}(),function(){!function(){Hospitality.NewTimeSlotController=Ember.ObjectController.extend(Hospitality.ModalFunctionality,{needs:["modal"],ssn:"123406060",slotDate:null,length:0,operationLengths:[{name:"60 Minuten",length:60},{name:"120 Minuten",length:120},{name:"180 Minuten",length:180},{name:"240 Minuten",length:240}],operationTypes:function(){return Hospitality.OperationType.find()}.property(),slotStartDate:function(){return this.get("slotDate")&&this.get("slotStartTime")?Date.parse(""+this.get("slotDate")+" "+this.get("slotStartTime")):void 0}.property("slotDate","slotStartTime"),slotEndDate:function(){var a;return a=this.get("slotStartDate"),a&&this.get("slotLength.length")>0?new Date(a+6e4*this.get("slotLength.length")):""}.property("slotStartDate","slotLength"),validRequest:function(){return null===this.get("slotDate")||null===this.get("slotStartTime")||null===this.get("operationType")||null===this.get("model")||null===this.get("slotLength")}.property("slotDate","slotStartTime","operationType","model","slotLength"),createTimeSlot:function(){var a;return a=Hospitality.TimeSlot.createRecord({start:new Date(this.get("slotStartDate")),end:this.get("slotEndDate"),hospital:this.get("model"),operationType:this.get("operationType")}),a.save(),this.send("closeModal")}})}.call(this)}(),function(){!function(){Hospitality.NotificationsController=Ember.ArrayController.extend()}.call(this)}(),function(){!function(){this.Hospitality.ReservationsController=Ember.ArrayController.extend(Hospitality.ModalFunctionality,{hospitals:function(){return Hospitality.Hospital.find()}.property(),doctors:function(){return this.get("content").mapProperty("doctor").uniq()}.property("@each"),patients:function(){return this.get("content").mapProperty("patient").uniq()}.property("@each"),operationTypes:function(){return Hospitality.OperationType.find()}.property(),statuses:["Angefragt","Reserviert"],filteredReservations:function(){var a,b=this;return a=this.get("content"),console.log(a),this.get("filterDate")&&(a=a.filter(function(a){return a.get("timeSlot")?moment(a.get("timeSlot.start")).format("YYYY-MM-DD")===b.get("filterDate"):!1})),this.get("filterStart")&&(a=a.filter(function(a){return a.get("timeSlot")?(console.log(b.get("filterStart")),console.log(moment(a.get("start")).format("HH:mm")),moment(a.get("timeSlot.start")).format("HH:mm")===b.get("filterStart")):!1})),this.get("filterEnd")&&(a=a.filter(function(a){return a.get("timeSlot")?moment(a.get("timeSlot.end")).format("HH:mm")===b.get("filterEnd"):!1})),this.get("filterStatus")&&(a=a.filter(function(a){return"Reserviert"===b.get("filterStatus")?null!==a.get("timeSlot"):null===a.get("timeSlot")})),this.get("filterHospital")&&(a=a.filterProperty("timeSlot.hospital",this.get("filterHospital"))),this.get("filterOperationType")&&(a=a.filterProperty("operationType",this.get("filterOperationType"))),this.get("filterPatient")&&(a=a.filterProperty("patient",this.get("filterPatient"))),this.get("filterDoctor")&&(a=a.filterProperty("doctor",this.get("filterDoctor"))),a}.property("@each","filterDate","filterStart","filterEnd","filterHospital","filterDoctor","filterPatient","filterOperationType","filterStatus"),deleteReservation:function(a){return a.deleteRecord()}})}.call(this)}(),function(){!function(){this.Hospitality.TimeSlotsController=Ember.ArrayController.extend(Hospitality.ModalFunctionality,{filterHospital:null,filterDoctor:null,filterOperationType:null,hospitals:function(){return Hospitality.Hospital.find()}.property(),doctors:function(){return Hospitality.Doctor.find()}.property(),operationTypes:function(){return Hospitality.OperationType.find()}.property(),statuses:["Frei","Reserviert"],filteredTimeSlots:function(){var a,b=this;return a=this.get("content"),this.get("filterDate")&&(a=a.filter(function(a){return moment(a.get("start")).format("YYYY-MM-DD")===b.get("filterDate")})),this.get("filterStart")&&(a=a.filter(function(a){return console.log(b.get("filterStart")),console.log(moment(a.get("start")).format("HH:mm")),moment(a.get("start")).format("HH:mm")===b.get("filterStart")})),this.get("filterEnd")&&(a=a.filter(function(a){return moment(a.get("end")).format("HH:mm")===b.get("filterEnd")})),this.get("filterStatus")&&(a=a.filter(function(a){return"Frei"===b.get("filterStatus")?null===a.get("operation"):null!==a.get("operation")})),this.get("filterHospital")&&(a=a.filterProperty("hospital",this.get("filterHospital"))),this.get("filterOperationType")&&(a=a.filterProperty("operationType",this.get("filterOperationType"))),this.get("filterDoctor")&&(a=a.filterProperty("operation.doctor",this.get("filterDoctor"))),a}.property("@each","filterDate","filterStart","filterEnd","filterHospital","filterDoctor","filterOperationType","filterStatus"),deleteTimeSlot:function(a){return a.deleteRecord()}})}.call(this)}(),function(){!function(){Ember.Handlebars.registerBoundHelper("dateOnly",function(a){return a?new Handlebars.SafeString(moment(a).format("DD.MM.YYYY")):void 0}),Ember.Handlebars.registerBoundHelper("timeOnly",function(a){return a?new Handlebars.SafeString(moment(a).format("HH:mm")):void 0}),Ember.Handlebars.registerBoundHelper("formatSSN",function(a){return a&&10===a.length?a.replace(/\s/g,"").replace(/(\d{4})(\d{2})(\d{2})(\d{2})/g,"$1 $2 $3 $4"):a})}.call(this)}(),function(){!function(){this.Hospitality.Doctor=DS.Model.extend({user:DS.belongsTo("Hospitality.User"),name:function(){return this.get("user.name")}.property("user.name")})}.call(this)}(),function(){!function(){this.Hospitality.Hospital=DS.Model.extend({name:DS.attr("string"),latitude:DS.attr("number"),longitude:DS.attr("number"),timeSlots:DS.hasMany("Hospitality.TimeSlot"),coordinates:function(){return[this.get("latitude"),this.get("longitude")]}.property("latitude","longitude")})}.call(this)}(),function(){!function(){this.Hospitality.HospitalEmployee=DS.Model.extend({user:DS.belongsTo("Hospitality.User"),hospital:DS.belongsTo("Hospitality.Hospital"),name:function(){return this.get("user.name")}.property("user.name")})}.call(this)}(),function(){!function(){this.Hospitality.Notification=DS.Model.extend({title:DS.attr("string"),message:DS.attr("string")})}.call(this)}(),function(){!function(){this.Hospitality.Operation=DS.Model.extend({operationType:DS.belongsTo("Hospitality.OperationType"),timeSlot:DS.belongsTo("Hospitality.TimeSlot"),patient:DS.belongsTo("Hospitality.Patient"),doctor:DS.belongsTo("Hospitality.Doctor"),isAssigned:function(){return null!==this.get("time")}.property("timeSlot")})}.call(this)}(),function(){!function(){this.Hospitality.OperationType=DS.Model.extend({name:DS.attr("string"),length:DS.attr("number"),timeSlots:DS.hasMany("Hospitality.TimeSlot"),operations:DS.hasMany("Hospitality.Operation")})}.call(this)}(),function(){!function(){this.Hospitality.Patient=DS.Model.extend({ssn:DS.attr("string"),user:DS.belongsTo("Hospitality.User"),name:function(){return this.get("user.name")}.property("user.name")})}.call(this)}(),function(){!function(){this.Hospitality.Reservation=DS.Model.extend({title:DS.attr("string"),message:DS.attr("string")})}.call(this)}(),function(){!function(){this.Hospitality.TimeSlot=DS.Model.extend({start:DS.attr("date"),end:DS.attr("date"),hospital:DS.belongsTo("Hospitality.Hospital"),operation:DS.belongsTo("Hospitality.Operation"),operationType:DS.belongsTo("Hospitality.OperationType")})}.call(this)}(),function(){!function(){this.Hospitality.User=DS.Model.extend({name:DS.attr("string"),email:DS.attr("string"),token:DS.attr("string"),role:DS.attr("string"),isDoctor:function(){return"doctor"===this.get("role")}.property("role"),isPatient:function(){return"patient"===this.get("role")}.property("role"),isHospitalEmployee:function(){return"hospital_employee"===this.get("role")}.property("role"),canSeeReservations:function(){return this.get("isPatient")||this.get("isDoctor")}.property("role")})}.call(this)}(),function(){!function(){this.Hospitality.AuthView=Ember.View.extend({templateName:"auth"})}.call(this)}(),function(){!function(){Hospitality.AuthSignInView=Ember.View.extend({templateName:"auth/sign-in",email:null,password:null,submit:function(a){return console.log("Logging in"),a.preventDefault(),a.stopPropagation(),Hospitality.Auth.signIn({data:{email:this.get("email"),password:this.get("password")}})}})}.call(this)}(),function(){!function(){this.Hospitality.AuthSignOutView=Ember.View.extend({templateName:"auth/sign-out",submit:function(a){return a.preventDefault(),a.stopPropagation(),Hospitality.Auth.signOut()}})}.call(this)}(),function(){!function(){Hospitality.ModalBodyView=Ember.View.extend({classNames:["modal-body"],didInsertElement:function(){var a,b=this;return $("#hospitality-modal").modal("show"),$("#modal-alert").hide(),Ember.run.schedule("afterRender",function(){return b.$("form input:first").focus()}),a=this.get("title"),a?this.set("controller.controllers.modal.title",a):void 0},displayErrors:function(a,b){return this.set("parentView.parentView.modalErrorsView.errors",a),"function"==typeof b?b():void 0},flashMessageChanged:function(){var a,b,c;return b=this.get("controller.flashMessage"),b?(c=b.get("messageClass")||"success",a=$("#modal-alert").hide().removeClass("alert-error","alert-success"),a.addClass("alert alert-"+c).html(b.get("message")),a.fadeIn()):void 0}.observes("controller.flashMessage")})}.call(this)}(),function(){!function(){Hospitality.ModalView=Ember.View.extend({elementId:"hospitality-modal",templateName:"modal/modal",classNameBindings:[":modal",":hide",":fade","controller.modalClass"]})}.call(this)}(),function(){!function(){Hospitality.NewReservationView=Hospitality.ModalBodyView.extend({templateName:"modal/new_reservation",title:"Neue Reservierung vornehmen"})}.call(this)}(),function(){!function(){Hospitality.NewTimeSlotView=Hospitality.ModalBodyView.extend({templateName:"modal/new_time_slot",title:"Neuen OP-Slot eintragen"})}.call(this)}(),function(){!function(){Hospitality.Notification.FIXTURES=[{id:1,title:"Hello A",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."},{id:2,title:"Hello B",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."},{id:3,title:"Hello C",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."},{id:4,title:"Hello D",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."},{id:5,title:"Hello E",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."},{id:6,title:"Hello F",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."},{id:7,title:"Hello G",message:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, reprehenderit, fuga, amet sint eum dolores iure quo laudantium eius animi dolore iste nobis fugiat. Mollitia, iure quasi quaerat sed repudiandae."}],Hospitality.Hospital.FIXTURES=[{id:1,name:"AKH Wien",time_slot_ids:[]},{id:2,name:"LKH Klosterneuburg",time_slot_ids:[]},{id:3,name:"Barmherzige Brüder Wien",time_slot_ids:[]},{id:4,name:"LKH Tulln",time_slot_ids:[]}],Hospitality.Operation.FIXTURES=[{id:1,operationType:1,timeSlot:1,patient:5,doctor:1},{id:2,operationType:1,timeSlot:null,patient:6,doctor:1},{id:3,operationType:2,timeSlot:2,patient:5,doctor:3},{id:4,operationType:3,timeSlot:null,patient:7,doctor:2},{id:5,operationType:4,timeSlot:null,patient:8,doctor:2}],Hospitality.TimeSlot.FIXTURES=[{id:1,start:"2013-05-26 14:00Z",end:"2013-05-26 16:00Z",hospital:1,operationType:1,operation:null},{id:2,start:"2013-05-26 16:00Z",end:"2013-05-26 18:00Z",hospital:2,operationType:2,operation:3}],Hospitality.OperationType.FIXTURES=[{id:1,name:"Augenheilkunde",length:240,time_slots:[],operations:[]},{id:2,name:"Orthopädie",length:120,time_slots:[],operations:[]},{id:3,name:"HNO",length:180,time_slots:[],operations:[]},{id:4,name:"Neurochirurgie",length:300,time_slots:[],operations:[]},{id:5,name:"Kardiologie",length:60,time_slots:[],operations:[]}],Hospitality.Doctor.FIXTURES=[{id:1,user:1},{id:2,user:2},{id:3,user:3},{id:4,user:4}],Hospitality.Patient.FIXTURES=[{id:5,user:5,ssn:"1111050505"},{id:6,user:6,ssn:"1111060605"},{id:7,user:7,ssn:"1111070707"},{id:8,user:8,ssn:"1111080808"},{id:9,user:9,ssn:"1111090909"},{id:10,user:10,ssn:"1111101010"}],Hospitality.HospitalEmployee.FIXTURES=[{id:11,user:11,hospital:1},{id:12,user_id:12,hospital:2},{id:13,user:13,hospital:3},{id:14,user:14,hospital:4}],Hospitality.User.FIXTURES=[{id:1,name:"Dr. Aufmesser",email:"aufmesser@doctors.com",passwort:"1234",role:"doctor"},{id:2,name:"Dr. Gott",email:"gott@doctors.com",passwort:"1234",role:"doctor"},{id:3,name:"Dr. Gunst-Fehler",email:"gunst-fehler@doctors.com",passwort:"1234",role:"doctor"},{id:4,name:"Dr. Augenblick",email:"augenblick@doctors.com",passwort:"1234",role:"doctor"},{id:5,name:"Hr. Franz Meier",email:"meier@patients.com",passwort:"1234",role:"patient"},{id:6,name:"Fr. Hermine Müller",email:"mueller@patients.com",passwort:"1234",role:"patient"},{id:7,name:"Hr. Markus Moser",email:"moser@patients.com",passwort:"1234",role:"patient"},{id:8,name:"Fr. Beatrix Bauer",email:"bauer@patients.com",passwort:"1234",role:"patient"},{id:9,name:"Hr. Ben Bäcker",email:"baecker@patients.com",passwort:"1234",role:"patient"},{id:10,name:"Fr. Gloria Fasching",email:"fasching@patients.com",passwort:"1234",role:"patient"},{id:11,name:"AKH Wien Schwester",email:"akh@hospitals.com",passwort:"1234",role:"hospital_employee"},{id:12,name:"LKH Klosterneuburg Büro",email:"lkh@hospitals.com",passwort:"1234",role:"hospital_employee"},{id:13,name:"Barmherzige Brüder OP-Organisation",email:"bbw@hospitals.com",passwort:"1234",role:"hospital_employee"},{id:14,name:"LKH Tulln Verwaltung",email:"tulln@hospitals.com",passwort:"1234",role:"hospital_employee"}]}.call(this)}(),function(){Hospitality.setup()}.call(this)}();