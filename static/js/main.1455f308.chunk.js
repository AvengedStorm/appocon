(this.webpackJsonpappocon=this.webpackJsonpappocon||[]).push([[0],{27:function(e,t,n){},28:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(21),i=n.n(c),d=(n(27),n(8)),r=n(2),h=(n(28),n(14)),l=n(10),j=n(12),o=n(13),b=n(4),p=n(16),u=n(15),O=n(0),m=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={savedContacts:[{firstName:"",lastName:"",phoneNumber:""}]},a.handleNameChange=a.handleNameChange.bind(Object(b.a)(a)),a.handleLastNameChange=a.handleLastNameChange.bind(Object(b.a)(a)),a.handlePNumberChange=a.handlePNumberChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.renderContacts=a.renderContacts.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleNameChange",value:function(e){this.setState({firstName:e.target.value})}},{key:"handleLastNameChange",value:function(e){this.setState({lastName:e.target.value})}},{key:"handlePNumberChange",value:function(e){this.setState({phoneNumber:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={firstName:this.state.firstName,lastName:this.state.lastName,phoneNumber:this.state.phoneNumber};this.setState(Object(l.a)(Object(l.a)({},this.state),{},{savedContacts:[].concat(Object(h.a)(this.state.savedContacts),[t])})),this.setState({firstName:"",lastName:"",phoneNumber:""})}},{key:"renderContacts",value:function(){return this.state.savedContacts.map((function(e,t){var n=e.firstName,a=e.lastName,s=e.phoneNumber;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:n}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:s})]})}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Contacts Page:"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("h2",{children:"Contact:"}),Object(O.jsx)("label",{htmlFor:"firstName",children:"First Name: "}),Object(O.jsx)("input",{id:"firstName",name:"firstName",type:"text",value:this.state.firstName,onChange:this.handleNameChange,placeholder:"Contact's first name"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"lastName",children:"Last Name: "}),Object(O.jsx)("input",{id:"lastName",name:"lastName",type:"lastName",value:this.state.lastName,onChange:this.handleLastNameChange,placeholder:"Contact's last name"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"phoneNumber",children:"Phone Number: "}),Object(O.jsx)("input",{id:"phoneNumber",name:"phoneNumber",type:"text",value:this.state.phoneNumber,onChange:this.handlePNumberChange,placeholder:"Contact's phone"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:this.handleSubmit,children:"Save data!"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Contacts Table"}),Object(O.jsxs)("table",{id:"contacts",children:[Object(O.jsx)("thead",{style:{fontWeight:"bold"},children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"FIRST NAME"}),Object(O.jsx)("td",{children:"LAST NAME"}),Object(O.jsx)("td",{children:"PHONE NUMBER"})]})}),Object(O.jsx)("tbody",{children:this.renderContacts()})]})]})]})}}]),n}(s.a.Component),x=function(e){Object(p.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={savedAppo:[{title:"",description:"",address:"",date:""}]},a.handleTitleChange=a.handleTitleChange.bind(Object(b.a)(a)),a.handledescriptionChange=a.handledescriptionChange.bind(Object(b.a)(a)),a.handleAddressChange=a.handleAddressChange.bind(Object(b.a)(a)),a.handleDateChange=a.handleDateChange.bind(Object(b.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.renderContacts=a.renderAppos.bind(Object(b.a)(a)),a}return Object(o.a)(n,[{key:"handleTitleChange",value:function(e){this.setState({title:e.target.value})}},{key:"handledescriptionChange",value:function(e){this.setState({description:e.target.value})}},{key:"handleAddressChange",value:function(e){this.setState({address:e.target.value})}},{key:"handleDateChange",value:function(e){this.setState({date:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:this.state.title,description:this.state.description,address:this.state.address,date:this.state.date};this.setState(Object(l.a)(Object(l.a)({},this.state),{},{savedAppo:[].concat(Object(h.a)(this.state.savedAppo),[t])})),this.setState({title:"",description:"",address:"",date:""})}},{key:"renderAppos",value:function(){return this.state.savedAppo.map((function(e,t){var n=e.title,a=e.description,s=e.address,c=e.date;return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:n}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:s}),Object(O.jsx)("td",{children:c})]})}))}},{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Appointments Page:"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("h2",{children:"Appointment:"}),Object(O.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(O.jsx)("input",{id:"title",name:"title",type:"text",value:this.state.title,onChange:this.handleTitleChange,placeholder:"Appointment's title"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"description",children:"Description: "}),Object(O.jsx)("input",{id:"description",name:"description",type:"description",value:this.state.description,onChange:this.handledescriptionChange,placeholder:"Appointment's description"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"address",children:"Address: "}),Object(O.jsx)("input",{id:"address",name:"address",type:"text",value:this.state.address,onChange:this.handleAddressChange,placeholder:"Appointment's address"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{htmlFor:"date",children:"Date: "}),Object(O.jsx)("input",{id:"date",name:"date",type:"date-picker",value:this.state.date,onChange:this.handleDateChange,placeholder:"Appointment's date"}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{onClick:this.handleSubmit,children:"Save Appointment!"})]})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Appointments Table:"}),Object(O.jsxs)("table",{id:"appo",children:[Object(O.jsx)("thead",{style:{fontWeight:"bold"},children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:"TITLE"}),Object(O.jsx)("td",{children:"DESCRIPTION"}),Object(O.jsx)("td",{children:"ADDRESS"}),Object(O.jsx)("td",{children:"Date"})]})}),Object(O.jsx)("tbody",{children:this.renderAppos()})]})]})]})}}]),n}(s.a.Component);var v=function(){var e={color:"white",textDecoration:"none"};return Object(O.jsx)("div",{className:"Nav",children:Object(O.jsxs)("nav",{children:[Object(O.jsx)(d.b,{style:e,to:"/",children:Object(O.jsx)("h3",{className:"nav",children:"AppoCon"})}),Object(O.jsxs)("ul",{className:"nav-links",children:[Object(O.jsx)(d.b,{style:e,to:"/containers/ContactsPage",children:Object(O.jsx)("li",{className:"nav",children:"Contacts"})}),Object(O.jsx)(d.b,{style:e,to:"/containers/AppointmentsPage",children:Object(O.jsx)("li",{className:"nav",children:"Appointments"})})]})]})})};var C=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Welcome to AppoCon!"}),Object(O.jsx)("div",{children:Object(O.jsxs)("h2",{style:{fontWeight:"normal"},children:["At this site you can save your own contacts and own appointments for later use!",Object(O.jsx)("br",{}),"for your own convenience you can go to your desired place through the navigation bar."]})})]})},g=function(){return Object(O.jsx)(d.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{}),Object(O.jsxs)("switch",{children:[Object(O.jsx)(r.a,{path:"/containers/ContactsPage",component:m}),Object(O.jsx)(r.a,{path:"/containers/AppointmentsPage",component:x}),Object(O.jsx)(r.a,{path:"/",exact:!0,component:C})]})]})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),c(e),i(e)}))};i.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.1455f308.chunk.js.map