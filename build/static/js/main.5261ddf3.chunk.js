(this.webpackJsonpuntitled=this.webpackJsonpuntitled||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=(n(12),n(2)),u=n.n(s),l=n(6),i=n(5),m=n(1),d=function(e){return fetch(e).then((function(e){return e.json()}))},f=function(e){var t=e.users;return r.a.createElement("div",{className:"col"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id},"".concat(e.firstName," ").concat(e.lastName))}))))},b=function(e){var t=e.months,n=function(e){switch(!0){case e<=2:return"bg-secondary text-white";case e<=6:return"bg-primary text-white";case e<=10:return"bg-success text-white";default:return"bg-danger text-white"}},c=Object(a.useState)([]),o=Object(m.a)(c,2),s=o[0],u=o[1],l=Object(a.useState)(!1),i=Object(m.a)(l,2),d=i[0],b=i[1],h=function(e){var n=t.find((function(t){return t.id===+e.target.id}));u(n.users[0]),b(!0)};return r.a.createElement("div",{className:"row content"},r.a.createElement("div",{className:"col month"},r.a.createElement("ul",null,t.map((function(e){return r.a.createElement("li",{key:e.id,id:e.id,className:n(e.count),onMouseEnter:h},e.name)})))),d?r.a.createElement(f,{users:s}):r.a.createElement("p",{className:"col"},r.a.createElement("span",{role:"img","aria-label":"finger"},"\ud83d\udc48")," Move mouse on month ",r.a.createElement("br",null)," to see users"))};n(14);var h=function(){var e=[{name:"Jan"},{name:"Feb"},{name:"Mar"},{name:"Apr"},{name:"May"},{name:"Jun"},{name:"Jul"},{name:"Aug"},{name:"Sep"},{name:"Oct"},{name:"Nov"},{name:"Dec"}],t=Object(a.useState)([]),n=Object(m.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(!1),f=Object(m.a)(s,2),h=f[0],p=f[1],E=Object(a.useState)(!1),g=Object(m.a)(E,2),v=g[0],w=g[1];return r.a.createElement("div",{className:"App"},v?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{months:c})):r.a.createElement("button",{type:"button",disabled:h,onClick:function(){var t,n,a;return u.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return p(!0),r.t0=u.a,r.t1=Promise,r.next=5,u.a.awrap(d("https://yalantis-react-school.herokuapp.com/api/task0/users"));case 5:return r.t2=r.sent,r.t3=function(){return w(!0)},r.t4=r.t1.all.call(r.t1,r.t2).finally(r.t3),r.next=10,r.t0.awrap.call(r.t0,r.t4);case 10:for(t=r.sent,p(!1),n=function(n){var a=[];a.push(Object(i.a)(t).filter((function(e){return new Date(e.dob).getMonth()===n}))),e[n]=Object(l.a)({},e[n],{id:n,users:a,count:a[0].length})},a=0;a<12;a++)n(a);o(e);case 15:case"end":return r.stop()}}))},className:"btn btn-dark"},h?r.a.createElement(r.a.Fragment,null,"Loading..."):r.a.createElement(r.a.Fragment,null,"Load Users")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.5261ddf3.chunk.js.map