(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[23],{506:function(e,t,n){"use strict";n.r(t);var c=n(3),a=n.n(c),s=n(6),r=n(57),i=n(0),l=n(8),o=n(70),u=n.n(o),j=n(509),d=n(510),p=n(5);t.default=function(){var e=Object(i.useState)(),t=Object(r.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(),f=Object(r.a)(o,2),x=f[0],m=f[1],h=Object(i.useState)(),b=Object(r.a)(h,2),O=b[0],v=b[1],y=Object(i.useState)(0),w=Object(r.a)(y,2),g=w[0],N=w[1],k=Object(i.useState)([].reverse()),S=Object(r.a)(k,2),T=(S[0],S[1]),C=Object(i.useState)([]),M=Object(r.a)(C,2),A=M[0],E=M[1],B=Object(i.useState)([]),z=Object(r.a)(B,2),I=z[0],U=(z[1],Object(l.f)());console.log(I),Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.connect("/");case 2:(t=e.sent).on("visitor enters",(function(e){return N({data:e})})),t.on("visitor exits",(function(e){return N({data:e})}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.connect("/");case 2:e.sent.on("file",(function(e){return T({data:e})}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.connect("/");case 2:e.sent.on("stats",(function(e){return E(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(i.useEffect)((function(){function e(){return(e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/auth/token",{method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){if(console.log(e),!1!==e.auth)return console.log("logged in");U.push("/login")}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var F=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/data/getallopen",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),ContentType:"application/json"}}).then((function(e){return e.json()})).then((function(e){m(e.result)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/data/getallcompleted",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),ContentType:"application/json"}}).then((function(e){return e.json()})).then((function(e){v(e.result)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(s.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/v1/data/unallocatedTickets",{method:"get",headers:{Authorization:"Bearer "+localStorage.getItem("jwt"),ContentType:"application/json"}}).then((function(e){return e.json()})).then((function(e){c(e.result)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){F(),J(),D()}),[]),Object(p.jsx)("div",{children:Object(p.jsx)("main",{className:"relative z-0 overflow-y-auto focus:outline-none",tabindex:"0",children:Object(p.jsxs)("div",{className:"py-6",children:[Object(p.jsx)("div",{className:"max-w-7xl mx-auto sm:px-6 md:px-8",children:Object(p.jsx)("h1",{className:"text-2xl font-semibold text-gray-900 ml-3",children:"Dashboard"})}),Object(p.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 md:px-8",children:[Object(p.jsx)("div",{className:"py-4",children:Object(p.jsxs)("div",{className:"flex flex-col px-2 py-2 m-4 justify-items-center lg:flex-row",children:[Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Closed Tickets",value:O})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Open Tickets",value:x})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Unissued Tickets",value:n})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Online Users",value:g.data})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"System OS",value:A.system})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Cpu Count",value:A.cpu})})})]})}),Object(p.jsx)("div",{className:"flex py-1 px-2",children:Object(p.jsx)("div",{className:"flex",children:Object(p.jsx)("div",{className:"flex-col",children:Object(p.jsxs)("div",{className:"flex flex-col px-2 py-2 m-4 justify-items-center lg:flex-row",children:[Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Cpu Load Average 5mins %",value:A.loadAverage})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Uptime",value:A.uptime})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Free Memory MB",value:A.freeMem})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Free Memory %",value:A.freeMemPercentage})})}),Object(p.jsx)("div",{className:"ml-1 mt-2",children:Object(p.jsx)(j.a,{children:Object(p.jsx)(d.a,{title:"Total Memory MB",value:A.totalMem})})})]})})})})]})]})})})}}}]);
//# sourceMappingURL=23.2bc54d32.chunk.js.map