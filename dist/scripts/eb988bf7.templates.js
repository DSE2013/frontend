Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Hospitality")}function g(a,b){b.buffer.push("Time Slots")}function h(a,b){var d,e,f,g,h="";return b.buffer.push("\n				<li>"),f={},g={hash:{},inverse:q.noop,fn:q.program(6,i,b),contexts:[a],types:["ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"reservations",g):r.call(a,"linkTo","reservations",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n			"),h}function i(a,b){b.buffer.push("Reservations")}function j(a,b){var d,e,f,g,h="";return b.buffer.push('\n				<li class="divider-vertical"></li>\n			  <li>'),f={},g={hash:{},inverse:q.noop,fn:q.program(9,k,b),contexts:[a],types:["ID"],hashTypes:f,data:b},d=c.linkTo,e=d?d.call(a,"notifications",g):r.call(a,"linkTo","notifications",g),(e||0===e)&&b.buffer.push(e),b.buffer.push("</li>\n		  "),h}function k(a,b){b.buffer.push("Notifications")}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var l,m,n,o,p="",q=this,r=c.helperMissing,s=this.escapeExpression;return e.buffer.push('<div class="navbar">\n	<div class="navbar-inner">\n		'),n={"class":"STRING"},o={hash:{"class":"brand"},inverse:q.noop,fn:q.program(1,f,e),contexts:[b],types:["ID"],hashTypes:n,data:e},l=c.linkTo,m=l?l.call(b,"index",o):r.call(b,"linkTo","index",o),(m||0===m)&&e.buffer.push(m),e.buffer.push('\n\n		<ul class="nav">\n			<li>'),n={},o={hash:{},inverse:q.noop,fn:q.program(3,g,e),contexts:[b],types:["ID"],hashTypes:n,data:e},l=c.linkTo,m=l?l.call(b,"time_slots",o):r.call(b,"linkTo","time_slots",o),(m||0===m)&&e.buffer.push(m),e.buffer.push('</li>\n		  <li class="divider"></li>\n\n			'),n={},m=c["if"].call(b,"Hospitality.Auth.user.canSeeReservations",{hash:{},inverse:q.noop,fn:q.program(5,h,e),contexts:[b],types:["ID"],hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n\n			"),n={},m=c["if"].call(b,"Hospitality.Auth.signedIn",{hash:{},inverse:q.noop,fn:q.program(8,j,e),contexts:[b],types:["ID"],hashTypes:n,data:e}),(m||0===m)&&e.buffer.push(m),e.buffer.push("\n		</ul>\n\n		"),n={},e.buffer.push(s(c.view.call(b,"Hospitality.AuthView",{hash:{},contexts:[b],types:["ID"],hashTypes:n,data:e}))),e.buffer.push('\n	</div>\n</div>\n\n<div id="main" class="container">\n	'),n={},e.buffer.push(s(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashTypes:n,data:e}))),e.buffer.push("\n</div>\n\n"),n={},o={hash:{},contexts:[b],types:["ID"],hashTypes:n,data:e},e.buffer.push(s((l=c.render,l?l.call(b,"modal",o):r.call(b,"render","modal",o)))),p}),Ember.TEMPLATES.auth=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push("\n	"),d={},b.buffer.push(j(c.view.call(a,"Hospitality.AuthSignOutView",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n"),e}function g(a,b){var d,e="";return b.buffer.push("\n	"),d={},b.buffer.push(j(c.view.call(a,"Hospitality.AuthSignInView",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var h,i,j=this.escapeExpression,k=this;i={},h=c["if"].call(b,"Hospitality.Auth.signedIn",{hash:{},inverse:k.program(3,g,e),fn:k.program(1,f,e),contexts:[b],types:["ID"],hashTypes:i,data:e}),h||0===h?e.buffer.push(h):e.buffer.push("")}),Ember.TEMPLATES["auth/sign-in"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<form class="navbar-form pull-right">\n	'),f={valueBinding:"ID","class":"STRING",placeholder:"STRING"},e.buffer.push(h(c.view.call(b,"Ember.TextField",{hash:{valueBinding:"view.email","class":"span3",placeholder:"E-Mail"},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push("\n	"),f={type:"STRING",valueBinding:"ID","class":"STRING",placeholder:"STRING"},e.buffer.push(h(c.view.call(b,"Ember.TextField",{hash:{type:"password",valueBinding:"view.password","class":"span2",placeholder:"Passwort"},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push('\n\n	<button class="btn">Einloggen</button>\n</form>'),g}),Ember.TEMPLATES["auth/sign-out"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g="",h=this.escapeExpression;return e.buffer.push('<form class="navbar-form pull-right">\n	<button class="btn">Ausloggen</button>\n</form>\n<p style="padding: 0 25px" class="navbar-text pull-right">'),f={},e.buffer.push(h(c._triageMustache.call(b,"Hospitality.Auth.user.name",{hash:{},contexts:[b],types:["ID"],hashTypes:f,data:e}))),e.buffer.push("</p>"),g}),Ember.TEMPLATES["modal/modal"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n	<div class="alert alert-error">\n		<button class="close" data-dismiss="alert">×</button>\n		'),d={},b.buffer.push(l(c._triageMustache.call(a,"",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n	</div>\n"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j,k="",l=this.escapeExpression,m=c.helperMissing,n=this;return e.buffer.push('<div class="modal-header">\n	<a class="close" '),i={},e.buffer.push(l(c.action.call(b,"closeModal",{hash:{},contexts:[b],types:["ID"],hashTypes:i,data:e}))),e.buffer.push('><i class="icon-remove icon"></i></a>\n	<h3>'),i={},e.buffer.push(l(c._triageMustache.call(b,"title",{hash:{},contexts:[b],types:["ID"],hashTypes:i,data:e}))),e.buffer.push("</h3>\n</div>\n\n"),i={},j={hash:{},contexts:[b],types:["ID"],hashTypes:i,data:e},e.buffer.push(l((g=c.outlet,g?g.call(b,"modalBody",j):m.call(b,"outlet","modalBody",j)))),e.buffer.push("\n\n"),i={},h=c.each.call(b,"errors",{hash:{},inverse:n.noop,fn:n.program(1,f,e),contexts:[b],types:["ID"],hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),k}),Ember.TEMPLATES["modal/new_reservation"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n		<div class="span6">\n			<label for="operation_type">Operationstyp</label>\n			'),d={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},b.buffer.push(k(c.view.call(a,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.operationTypes",optionLabelPath:"content.name",optionValuePath:"content",prompt:"Wählen Sie einen OP-Typ:",selectionBinding:"controller.operationType"},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n    </div>\n	"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i,j="",k=this.escapeExpression,l=this,m=c.helperMissing;return e.buffer.push('<div class="row-fluid">\n	<div class="span6">\n		<label for="">Sozialversicherungsnummer</label>\n		'),h={valueBinding:"ID"},e.buffer.push(k(c.view.call(b,"Ember.TextField",{hash:{valueBinding:"controller.ssn"},contexts:[b],types:["ID"],hashTypes:h,data:e}))),e.buffer.push('\n		<i class="icon icon-spinner hide icon-spin" id="search-spinner"></i>\n	</div>\n	'),h={},g=c["if"].call(b,"controller.patient",{hash:{},inverse:l.noop,fn:l.program(1,f,e),contexts:[b],types:["ID"],hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push('\n</div>\n\n	<div class="row-fluid">\n		<div class="span6">\n			<p>\n				<strong>Name:</strong> '),h={},e.buffer.push(k(c._triageMustache.call(b,"controller.patient.user.name",{hash:{},contexts:[b],types:["ID"],hashTypes:h,data:e}))),e.buffer.push("\n			</p>\n			<p>\n				<strong>SSN:</strong> "),h={},i={hash:{},contexts:[b],types:["ID"],hashTypes:h,data:e},e.buffer.push(k((g=c.formatSSN,g?g.call(b,"controller.patient.ssn",i):m.call(b,"formatSSN","controller.patient.ssn",i)))),e.buffer.push('\n			</p>\n		</div>\n		<div class="span6">\n			<p>\n				<strong>Arzt:</strong> '),h={},i={hash:{},contexts:[b],types:["ID"],hashTypes:h,data:e},e.buffer.push(k((g=c.formatSSN,g?g.call(b,"model.user.name",i):m.call(b,"formatSSN","model.user.name",i)))),e.buffer.push("\n			</p>\n			<p>\n				<strong>OP-Typ:</strong> "),h={},i={hash:{},contexts:[b],types:["ID"],hashTypes:h,data:e},e.buffer.push(k((g=c.formatSSN,g?g.call(b,"controller.operationType.name",i):m.call(b,"formatSSN","controller.operationType.name",i)))),e.buffer.push("\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row-fluid\">\n	</div>\n\n	<button class='btn pull-right' "),h={},e.buffer.push(k(c.action.call(b,"createReservation",{hash:{},contexts:[b],types:["ID"],hashTypes:h,data:e}))),e.buffer.push(" "),h={disabled:"ID"},e.buffer.push(k(c.bindAttr.call(b,{hash:{disabled:"controller.validRequest"},contexts:[],types:[],hashTypes:h,data:e}))),e.buffer.push(">Operation reservieren</button>\n\n</div>"),j}),Ember.TEMPLATES["modal/new_time_slot"]=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var f,g,h,i="",j=this.escapeExpression,k=c.helperMissing;return e.buffer.push('<div class="row-fluid">\n	<div class="span6">\n		<label for="">Datum</label>\n		'),g={type:"ID","class":"STRING",valueBinding:"ID"},e.buffer.push(j(c.view.call(b,"Ember.TextField",{hash:{type:"date","class":"input-block-level",valueBinding:"controller.slotDate"},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push('\n	</div>\n	<div class="span3">\n		<label for="">Beginn</label>\n		'),g={type:"ID","class":"STRING",valueBinding:"ID"},e.buffer.push(j(c.view.call(b,"Ember.TextField",{hash:{type:"time","class":"input-block-level",valueBinding:"controller.slotStartTime"},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push('\n	</div>\n</div>\n<div class="row-fluid">\n	<div class="span5">\n		<label for="">OP-Länge</label>\n		'),g={"class":"STRING",viewName:"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(j(c.view.call(b,"Ember.Select",{hash:{"class":"input-block-level",viewName:"select",contentBinding:"controller.operationLengths",optionLabelPath:"content.name",optionValuePath:"content.length",prompt:"Wählen Sie eine OP-Länge",selectionBinding:"controller.slotLength"},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push('\n	</div>\n	<div class="span7">\n		<label for="">OP-Typ</label>\n			'),g={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(j(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.operationTypes",optionLabelPath:"content.name",optionValuePath:"content",prompt:"Wählen Sie einen OP-Typ",selectionBinding:"model.operationType"},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push('\n	</div>\n</div>\n\n	<div class="row-fluid">\n		<div class="span12"><h4>Zusammenfassung</h4></div>\n	</div>\n	<div class="row-fluid">\n		<div class="span6">\n			<p>\n				<strong>Datum:</strong> '),g={},h={hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e},e.buffer.push(j((f=c.dateOnly,f?f.call(b,"controller.slotStartDate",h):k.call(b,"dateOnly","controller.slotStartDate",h)))),e.buffer.push('\n			</p>\n		</div>\n		<div class="span3">\n			<p>\n				<strong>Start:</strong> '),g={},h={hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e},e.buffer.push(j((f=c.timeOnly,f?f.call(b,"controller.slotStartDate",h):k.call(b,"timeOnly","controller.slotStartDate",h)))),e.buffer.push("\n			</p>\n		</div>\n		<div>\n			<p>\n				<strong>Ende:</strong> "),g={},h={hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e},e.buffer.push(j((f=c.timeOnly,f?f.call(b,"controller.slotEndDate",h):k.call(b,"timeOnly","controller.slotEndDate",h)))),e.buffer.push('\n			</p>\n		</div>\n	</div>\n	<div class="row-fluid">\n		<div class="span6">\n			<p>\n				<strong>Krankenhaus:</strong> '),g={},e.buffer.push(j(c._triageMustache.call(b,"model.name",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push('\n			</p>\n		</div>\n		<div class="span6">\n			<p>\n				<strong>OP-Typ:</strong> '),g={},e.buffer.push(j(c._triageMustache.call(b,"controller.operationType.name",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push("\n			</p>\n		</div>\n	</div>\n\n	<div class=\"row-fluid\">\n	</div>\n\n	<button class='btn pull-right' "),g={},e.buffer.push(j(c.action.call(b,"createTimeSlot",{hash:{},contexts:[b],types:["ID"],hashTypes:g,data:e}))),e.buffer.push(" "),g={disabled:"ID"},e.buffer.push(j(c.bindAttr.call(b,{hash:{disabled:"controller.validRequest"},contexts:[],types:[],hashTypes:g,data:e}))),e.buffer.push(">OP-Slot erstellen</button>\n\n</div>"),i}),Ember.TEMPLATES.notifications=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n    <div class="notification well">\n      <h2>'),d={},b.buffer.push(j(c._triageMustache.call(a,"title",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</h2>\n      <p>"),d={},b.buffer.push(j(c._triageMustache.call(a,"message",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("</p>\n    </div>\n  "),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var g,h,i="",j=this.escapeExpression,k=this;return e.buffer.push('<h1>\n	Notifications\n</h1>\n\n<div class="notifications">\n  '),h={},g=c.each.call(b,"controller",{hash:{},inverse:k.noop,fn:k.program(1,f,e),contexts:[b],types:["ID"],hashTypes:h,data:e}),(g||0===g)&&e.buffer.push(g),e.buffer.push("\n</div>\n"),i}),Ember.TEMPLATES.reservations=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n		<button class="btn pull-right" '),d={},b.buffer.push(w(c.action.call(a,"newReservation",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push(">Neue Reservierung</button>\n	"),e}function g(a,b){var d,e="";return b.buffer.push("\n				<label>Patient</label>\n				"),d={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},b.buffer.push(w(c.view.call(a,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.patients",optionLabelPath:"content.user.name",optionValuePath:"content",prompt:"-",selectionBinding:"controller.filterPatient"},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n			"),e}function h(a,b){var d,e="";return b.buffer.push("\n				<label>Arzt</label>\n				"),d={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},b.buffer.push(w(c.view.call(a,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.doctors",optionLabelPath:"content.user.name",optionValuePath:"content",prompt:"-",selectionBinding:"controller.filterDoctor"},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n			"),e}function i(a,b){b.buffer.push("\n						Patient\n					")}function j(a,b){b.buffer.push("\n						Arzt\n					")}function k(a,b){var d,e,f="";return b.buffer.push("\n			<tr "),e={"class":"STRING"},b.buffer.push(w(c.bindAttr.call(a,{hash:{"class":"timeSlot:reserved:free"},contexts:[],types:[],hashTypes:e,data:b}))),b.buffer.push(' style="height: 40px">\n				<td class="status"><i '),e={"class":"STRING"},b.buffer.push(w(c.bindAttr.call(a,{hash:{"class":"timeSlot:icon-time:icon-leaf"},contexts:[],types:[],hashTypes:e,data:b}))),b.buffer.push('</td>\n\n				<td class="date">\n					'),e={},d=c["if"].call(a,"timeSlot",{hash:{},inverse:y.program(14,m,b),fn:y.program(12,l,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n				</td>\n				<td class="start">\n					'),e={},d=c["if"].call(a,"timeSlot",{hash:{},inverse:y.program(14,m,b),fn:y.program(16,n,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n				</td>\n				<td class="end">\n					'),e={},d=c["if"].call(a,"timeSlot",{hash:{},inverse:y.program(14,m,b),fn:y.program(18,o,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n				</td>\n				<td class="surgeon">\n					'),e={},d=c["if"].call(a,"Hospitality.Auth.user.isDoctor",{hash:{},inverse:y.program(22,q,b),fn:y.program(20,p,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n				</td>\n				<td class="type">\n					'),e={},b.buffer.push(w(c._triageMustache.call(a,"operationType.name",{hash:{},contexts:[a],types:["ID"],hashTypes:e,data:b}))),b.buffer.push('\n				</td>\n				<td class="hospital">\n					'),e={},d=c["if"].call(a,"timeSlot",{hash:{},inverse:y.program(14,m,b),fn:y.program(24,r,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n				</td>\n				<td style="text-align: right; padding-right: 25px">\n					'),e={},d=c["if"].call(a,"Hospitality.Auth.user.isDoctor",{hash:{},inverse:y.noop,fn:y.program(26,s,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n				</td>\n			</tr>\n		"),f}function l(a,b){var d,e,f,g="";return b.buffer.push("\n						"),e={},f={hash:{},contexts:[a],types:["ID"],hashTypes:e,data:b},b.buffer.push(w((d=c.dateOnly,d?d.call(a,"timeSlot.start",f):x.call(a,"dateOnly","timeSlot.start",f)))),b.buffer.push("\n					"),g}function m(a,b){b.buffer.push("\n						-\n					")}function n(a,b){var d,e,f,g="";return b.buffer.push("\n						"),e={},f={hash:{},contexts:[a],types:["ID"],hashTypes:e,data:b},b.buffer.push(w((d=c.timeOnly,d?d.call(a,"timeSlot.start",f):x.call(a,"timeOnly","timeSlot.start",f)))),b.buffer.push("\n					"),g}function o(a,b){var d,e,f,g="";return b.buffer.push("\n						"),e={},f={hash:{},contexts:[a],types:["ID"],hashTypes:e,data:b},b.buffer.push(w((d=c.timeOnly,d?d.call(a,"timeSlot.end",f):x.call(a,"timeOnly","timeSlot.end",f)))),b.buffer.push("\n					"),g}function p(a,b){var d,e="";return b.buffer.push("\n						"),d={},b.buffer.push(w(c._triageMustache.call(a,"patient.user.name",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n					"),e}function q(a,b){var d,e="";return b.buffer.push("\n						"),d={},b.buffer.push(w(c._triageMustache.call(a,"doctor.user.name",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n					"),e}function r(a,b){var d,e="";return b.buffer.push("\n						"),d={},b.buffer.push(w(c._triageMustache.call(a,"timeSlot.hospital.name",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push("\n					"),e}function s(a,b){var d,e="";return b.buffer.push('\n						<button class="btn btn-small" '),d={},b.buffer.push(w(c.action.call(a,"deleteReservation","",{hash:{},contexts:[a,a],types:["ID","ID"],hashTypes:d,data:b}))),b.buffer.push(">Stornieren</button>\n					"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var t,u,v="",w=this.escapeExpression,x=c.helperMissing,y=this;return e.buffer.push("<h2>\n	Reservierungen\n\n	"),u={},t=c["if"].call(b,"Hospitality.Auth.user.isDoctor",{hash:{},inverse:y.noop,fn:y.program(1,f,e),contexts:[b],types:["ID"],hashTypes:u,data:e}),(t||0===t)&&e.buffer.push(t),e.buffer.push('\n</h2>\n\n<div>\n	<h3>Filter</h3>\n	<div class="row">\n		<div class="span3">\n	    <label>Datum</label>\n      '),u={type:"STRING","class":"STRING",valueBinding:"ID"},e.buffer.push(w(c.view.call(b,"Ember.TextField",{hash:{type:"date","class":"input-block-level",valueBinding:"controller.filterDate"},contexts:[b],types:["ID"],hashTypes:u,data:e}))),e.buffer.push('\n		</div>\n		<div class="span2">\n	    <label>Von</label>\n	    '),u={type:"STRING","class":"STRING",valueBinding:"ID"},e.buffer.push(w(c.view.call(b,"Ember.TextField",{hash:{type:"time","class":"input-block-level",valueBinding:"controller.filterStart"},contexts:[b],types:["ID"],hashTypes:u,data:e}))),e.buffer.push('\n		</div>\n		<div class="span2">\n	    <label>Bis</label>\n	    '),u={type:"STRING","class":"STRING",valueBinding:"ID"},e.buffer.push(w(c.view.call(b,"Ember.TextField",{hash:{type:"time","class":"input-block-level",valueBinding:"controller.filterEnd"},contexts:[b],types:["ID"],hashTypes:u,data:e}))),e.buffer.push('\n		</div>\n	</div>\n	<div class="row">\n		<div class="span3">\n			<label>Status</label>\n			'),u={viewName:"STRING","class":"STRING",contentBinding:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(w(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.statuses",prompt:"-",selectionBinding:"controller.filterStatus"},contexts:[b],types:["ID"],hashTypes:u,data:e}))),e.buffer.push('\n		</div>\n		<div class="span3">\n			'),u={},t=c["if"].call(b,"Hospitality.Auth.user.isDoctor",{hash:{},inverse:y.program(5,h,e),fn:y.program(3,g,e),contexts:[b],types:["ID"],hashTypes:u,data:e}),(t||0===t)&&e.buffer.push(t),e.buffer.push('\n		</div>\n		<div class="span3">\n			<label>OP-Typ</label>\n			'),u={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(w(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.operationTypes",optionLabelPath:"content.name",optionValuePath:"content",prompt:"-",selectionBinding:"controller.filterOperationType"},contexts:[b],types:["ID"],hashTypes:u,data:e}))),e.buffer.push('\n		</div>\n		<div class="span3">\n			<label>Krankenhaus</label>\n			'),u={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(w(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.hospitals",optionLabelPath:"content.name",optionValuePath:"content",prompt:"-",selectionBinding:"controller.filterHospital"},contexts:[b],types:["ID"],hashTypes:u,data:e}))),e.buffer.push('\n		</div>\n	</div>\n</div>\n\n<table class="time_slot_list">\n	<thead>\n		<tr>\n			<th class="status">S</th>\n			<th class="date">Datum</th>\n			<th class="start">Von</th>\n			<th class="end">Bis</th>\n			<th class="surgeon">\n					'),u={},t=c["if"].call(b,"Hospitality.Auth.user.isDoctor",{hash:{},inverse:y.program(9,j,e),fn:y.program(7,i,e),contexts:[b],types:["ID"],hashTypes:u,data:e}),(t||0===t)&&e.buffer.push(t),e.buffer.push('</th>\n			<th class="type">OP Typ</th>\n			<th class="hospital">Krankenhaus</th>\n			<th class="actions"></th>\n		</tr>\n	</thead>\n	<tbody>\n		'),u={},t=c.each.call(b,"controller.filteredReservations",{hash:{},inverse:y.noop,fn:y.program(11,k,e),contexts:[b],types:["ID"],hashTypes:u,data:e}),(t||0===t)&&e.buffer.push(t),e.buffer.push("\n	</tbody>\n</table>\n"),v}),Ember.TEMPLATES.time_slots=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e="";return b.buffer.push('\n		<button class="btn pull-right" '),d={},b.buffer.push(n(c.action.call(a,"newTimeSlot",{hash:{},contexts:[a],types:["ID"],hashTypes:d,data:b}))),b.buffer.push(">Neuer OP-Slot</button>\n	"),e}function g(a,b){b.buffer.push('\n				<th class="patient">Patient</th>\n				<th class="actions"></th>\n			')}function h(a,b){var d,e,f,g,h="";return b.buffer.push('\n			<tr style="height: 40px" '),f={"class":"STRING"},b.buffer.push(n(c.bindAttr.call(a,{hash:{"class":"operation:reserved:free"},contexts:[],types:[],hashTypes:f,data:b}))),b.buffer.push('>\n				<td class="status"><i '),f={"class":"STRING"},b.buffer.push(n(c.bindAttr.call(a,{hash:{"class":"operation:icon-time:icon-leaf"},contexts:[],types:[],hashTypes:f,data:b}))),b.buffer.push('</td>\n				<td class="date">'),f={},g={hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b},b.buffer.push(n((d=c.dateOnly,d?d.call(a,"start",g):p.call(a,"dateOnly","start",g)))),b.buffer.push('</td>\n				<td class="start">'),f={},g={hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b},b.buffer.push(n((d=c.timeOnly,d?d.call(a,"start",g):p.call(a,"timeOnly","start",g)))),b.buffer.push('</td>\n				<td class="end">'),f={},g={hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b},b.buffer.push(n((d=c.timeOnly,d?d.call(a,"end",g):p.call(a,"timeOnly","end",g)))),b.buffer.push('</td>\n				<td class="type">'),f={},b.buffer.push(n(c._triageMustache.call(a,"operationType.name",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push('</td>\n				<td class="hospital">'),f={},b.buffer.push(n(c._triageMustache.call(a,"hospital.name",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push('</td>\n				<td class="surgeon">'),f={},b.buffer.push(n(c._triageMustache.call(a,"operation.doctor.user.name",{hash:{},contexts:[a],types:["ID"],hashTypes:f,data:b}))),b.buffer.push("</td>\n				"),f={},e=c["if"].call(a,"Hospitality.Auth.user.isHospitalEmployee",{hash:{},inverse:o.noop,fn:o.program(6,i,b),contexts:[a],types:["ID"],hashTypes:f,data:b}),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n			</tr>\n		"),h}function i(a,b){var d,e,f="";return b.buffer.push('\n					<td class="patient">'),e={},b.buffer.push(n(c._triageMustache.call(a,"operation.patient.user.name",{hash:{},contexts:[a],types:["ID"],hashTypes:e,data:b}))),b.buffer.push('</td>\n					<td style="text-align: right; padding-right: 25px">\n						'),e={},d=c.unless.call(a,"operation",{hash:{},inverse:o.noop,fn:o.program(7,j,b),contexts:[a],types:["ID"],hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n					</td>\n				"),f}function j(a,b){var d,e="";return b.buffer.push('\n							<button class="btn btn-small" '),d={},b.buffer.push(n(c.action.call(a,"deleteTimeSlot","",{hash:{},contexts:[a,a],types:["ID","ID"],hashTypes:d,data:b}))),b.buffer.push(">Stornieren</button>\n						"),e}this.compilerInfo=[2,">= 1.0.0-rc.3"],c=c||Ember.Handlebars.helpers,e=e||{};var k,l,m="",n=this.escapeExpression,o=this,p=c.helperMissing;return e.buffer.push("<h2>\n	Time Slots\n\n	"),l={},k=c["if"].call(b,"Hospitality.Auth.user.isHospitalEmployee",{hash:{},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashTypes:l,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push('\n</h2>\n\n<div>\n	<h3>Filter</h3>\n	<div class="row">\n		<div class="span3">\n	    <label>Datum</label>\n      '),l={type:"STRING","class":"STRING",valueBinding:"ID"},e.buffer.push(n(c.view.call(b,"Ember.TextField",{hash:{type:"date","class":"input-block-level",valueBinding:"controller.filterDate"},contexts:[b],types:["ID"],hashTypes:l,data:e}))),e.buffer.push('\n		</div>\n		<div class="span2">\n	    <label>Von</label>\n	    '),l={type:"STRING","class":"STRING",valueBinding:"ID"},e.buffer.push(n(c.view.call(b,"Ember.TextField",{hash:{type:"time","class":"input-block-level",valueBinding:"controller.filterStart"},contexts:[b],types:["ID"],hashTypes:l,data:e}))),e.buffer.push('\n		</div>\n		<div class="span2">\n	    <label>Bis</label>\n	    '),l={type:"STRING","class":"STRING",valueBinding:"ID"},e.buffer.push(n(c.view.call(b,"Ember.TextField",{hash:{type:"time","class":"input-block-level",valueBinding:"controller.filterEnd"},contexts:[b],types:["ID"],hashTypes:l,data:e}))),e.buffer.push('\n		</div>\n	</div>\n	<div class="row">\n		<div class="span3">\n			<label>Status</label>\n			'),l={viewName:"STRING","class":"STRING",contentBinding:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(n(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.statuses",prompt:"-",selectionBinding:"controller.filterStatus"},contexts:[b],types:["ID"],hashTypes:l,data:e}))),e.buffer.push('\n		</div>\n		<div class="span3">\n			<label>OP-Typ</label>\n			'),l={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(n(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.operationTypes",optionLabelPath:"content.name",optionValuePath:"content",prompt:"-",selectionBinding:"controller.filterOperationType"},contexts:[b],types:["ID"],hashTypes:l,data:e}))),e.buffer.push('\n		</div>\n		<div class="span3">\n			<label>Krankenhaus</label>\n			'),l={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(n(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.hospitals",optionLabelPath:"content.name",optionValuePath:"content",prompt:"-",selectionBinding:"controller.filterHospital"},contexts:[b],types:["ID"],hashTypes:l,data:e}))),e.buffer.push('\n		</div>\n		<div class="span3">\n			<label>Arzt</label>\n			'),l={viewName:"STRING","class":"STRING",contentBinding:"STRING",optionLabelPath:"STRING",optionValuePath:"STRING",prompt:"STRING",selectionBinding:"STRING"},e.buffer.push(n(c.view.call(b,"Ember.Select",{hash:{viewName:"select","class":"input-block-level",contentBinding:"controller.doctors",optionLabelPath:"content.user.name",optionValuePath:"content",prompt:"-",selectionBinding:"controller.filterDoctor"},contexts:[b],types:["ID"],hashTypes:l,data:e}))),e.buffer.push('\n		</div>\n	</div>\n</div>\n\n<table class="time_slot_list">\n	<thead>\n		<tr>\n			<th class="status">S</th>\n			<th class="date">Datum</th>\n			<th class="start">Von</th>\n			<th class="end">Bis</th>\n			<th class="type">OP Typ</th>\n			<th class="hospital">Krankenhaus</th>\n			<th class="surgeon">Arzt</th>\n			'),l={},k=c["if"].call(b,"Hospitality.Auth.user.isHospitalEmployee",{hash:{},inverse:o.noop,fn:o.program(3,g,e),contexts:[b],types:["ID"],hashTypes:l,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n		</tr>\n	</thead>\n	<tbody>\n		"),l={},k=c.each.call(b,"controller.filteredTimeSlots",{hash:{},inverse:o.noop,fn:o.program(5,h,e),contexts:[b],types:["ID"],hashTypes:l,data:e}),(k||0===k)&&e.buffer.push(k),e.buffer.push("\n	</tbody>\n</table>\n"),m});