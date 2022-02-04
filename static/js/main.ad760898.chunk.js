(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"ContactList_list__qSV-M",btn:"ContactList_btn__3AcNl",span:"ContactList_span__ZV9Mw"}},17:function(t,e,n){},60:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"filterContacts",(function(){return j}));var a={};n.r(a),n.d(a,"getContacts",(function(){return O}));var c={};n.r(c),n.d(c,"fetchContacts",(function(){return F})),n.d(c,"addContact",(function(){return V})),n.d(c,"deleteContact",(function(){return M}));var u=n(0),s=n.n(u),i=n(15),o=n.n(i),l=n(6),b=n(5),f=n(2),p=n(30),d=n(7),j=Object(b.b)("filter"),O=function(t){return t.contacts.entities},m=n(4),h=n.n(m),v=n(8),x=n(11),C=n.n(x);function y(){return _.apply(this,arguments)}function _(){return(_=Object(v.a)(h.a.mark((function t(){var e,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.get("/contacts");case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return w.apply(this,arguments)}function w(){return(w=Object(v.a)(h.a.mark((function t(e){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.post("/contacts",e);case 2:return n=t.sent,r=n.data,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(h.a.mark((function t(e){var n,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.a.delete("/contacts/".concat(e));case 2:return n=t.sent,r=n.data.id,t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}C.a.defaults.baseURL="https://61fbf9393f1e34001792c75a.mockapi.io";var S,L,A,F=Object(b.c)("fetchContactsSuccess",function(){var t=Object(v.a)(h.a.mark((function t(e,n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,y();case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),V=Object(b.c)("contacts/addContact",function(){var t=Object(v.a)(h.a.mark((function t(e,n){var r,a,c,u,s;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.name,a=e.number,c=n.rejectWithValue,t.prev=2,u={name:r,phone:a},t.next=6,g(u);case 6:return s=t.sent,t.abrupt("return",s);case 10:return t.prev=10,t.t0=t.catch(2),t.abrupt("return",c(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,n){return t.apply(this,arguments)}}()),M=Object(b.c)("contacts/deleteContact",function(){var t=Object(v.a)(h.a.mark((function t(e,n){var r,a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,N(e);case 4:return a=t.sent,t.abrupt("return",a);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r(t.t0));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),T=Object(b.d)([],(S={},Object(f.a)(S,F.fulfilled,(function(t,e){return e.payload})),Object(f.a)(S,V.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(p.a)(t),[n])})),Object(f.a)(S,M.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),S)),J=Object(b.d)(!1,(L={},Object(f.a)(L,F.pending,(function(){return!0})),Object(f.a)(L,F.fulfilled,(function(){return!1})),Object(f.a)(L,F.rejected,(function(){return!1})),Object(f.a)(L,V.pending,(function(){return!0})),Object(f.a)(L,V.fulfilled,(function(){return!1})),Object(f.a)(L,V.rejected,(function(){return!1})),Object(f.a)(L,M.pending,(function(){return!0})),Object(f.a)(L,M.fulfilled,(function(){return!1})),Object(f.a)(L,M.rejected,(function(){return!1})),L)),Z=Object(b.d)(null,(A={},Object(f.a)(A,F.rejected,(function(t,e){return e.payload})),Object(f.a)(A,F.pending,(function(){return null})),Object(f.a)(A,V.rejected,(function(t,e){return e.payload})),Object(f.a)(A,V.fulfilled,(function(){return null})),Object(f.a)(A,M.rejected,(function(t,e){return e.payload})),Object(f.a)(A,M.fulfilled,(function(){return null})),A)),q=Object(b.d)("",Object(f.a)({},r.filterContacts,(function(t,e){return e.payload}))),z=Object(d.b)({entities:T,isLoading:J,error:Z,filter:q}),E=Object(b.a)({reducer:{contacts:z}}),P=(n(60),n(20)),W=n(9),D=n.n(W),G=n(1),B=function(t){var e=t.onSubmit,n=Object(u.useState)(""),r=Object(P.a)(n,2),a=r[0],c=r[1],s=Object(u.useState)(""),i=Object(P.a)(s,2),o=i[0],l=i[1],b=function(t){"name"===t.currentTarget.name&&c(t.currentTarget.value),"number"===t.currentTarget.name&&l(t.currentTarget.value)};return Object(G.jsxs)("form",{className:D.a["contact-form"],onSubmit:function(t){t.preventDefault(),e({name:a,number:o}),c(""),l("")},children:[Object(G.jsxs)("label",{className:D.a.label,children:["Name",Object(G.jsx)("input",{className:D.a.input,type:"text",name:"name",placeholder:"Enter name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer etc...",required:!0,value:a,onChange:b})]}),Object(G.jsxs)("label",{className:D.a.label,children:["Number",Object(G.jsx)("input",{className:D.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"123-45-67",required:!0,value:o,onChange:b})]}),Object(G.jsx)("button",{className:D.a.submit,type:"submit",children:"Add contact"})]})},I=n(17),R=n.n(I),U=function(){var t=Object(l.c)((function(t){return t.contacts.filter})),e=Object(l.b)();return Object(G.jsx)("div",{className:R.a.filter,children:Object(G.jsxs)("label",{className:R.a.label,children:["Find contacts by name",Object(G.jsx)("input",{className:R.a.input,type:"text",value:t,onChange:function(t){e(r.filterContacts(t.target.value))}})]})})},Y=n(12),$=n.n(Y),H=function(){var t=Object(l.b)(),e=Object(l.c)(a.getContacts);Object(u.useEffect)((function(){return t(c.fetchContacts())}),[t]);var n=Object(l.c)((function(t){var n=t.contacts.filter.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(n)}))}));return Object(G.jsx)("ul",{className:$.a.list,children:n.map((function(e){return Object(G.jsxs)("li",{className:$.a.item,children:[Object(G.jsxs)("span",{className:$.a.span,children:[e.name,": ",e.phone]}),Object(G.jsx)("button",{className:$.a.btn,type:"button",id:e.id,onClick:function(){t(c.deleteContact(e.id))},children:"Delete"})]},e.id)}))})};n(62);function K(){var t=Object(l.b)();return Object(G.jsxs)("main",{className:"main",children:[Object(G.jsx)("h1",{className:"title",children:"Phonebook"}),Object(G.jsx)(B,{onSubmit:function(e,n){return t(c.addContact(e,n))}}),Object(G.jsx)("h2",{className:"title",children:"Contacts"}),Object(G.jsx)(U,{}),Object(G.jsx)(H,{})]})}o.a.render(Object(G.jsx)(s.a.StrictMode,{children:Object(G.jsx)(l.a,{store:E,children:Object(G.jsx)(K,{})})}),document.getElementById("root"))},9:function(t,e,n){t.exports={"contact-form":"ContactForm_contact-form__2TGrv",label:"ContactForm_label__O4VuG",input:"ContactForm_input__3aaJY",submit:"ContactForm_submit__34MPm"}}},[[63,1,2]]]);
//# sourceMappingURL=main.ad760898.chunk.js.map