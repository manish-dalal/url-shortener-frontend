(this["webpackJsonpurl-shortener-frontend"]=this["webpackJsonpurl-shortener-frontend"]||[]).push([[0],{41:function(e,t,a){e.exports=a.p+"static/media/logo.79d44bd4.png"},46:function(e,t,a){e.exports=a(86)},52:function(e,t,a){},53:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(16),o=a.n(c),l=a(17),i=(a(51),a(52),a(12)),s=(a(53),a(14)),u=a(100),m=a(94),d=a(95),p=a(96),h=a(97),f=a(99),g=a(98),v=a(88),E=a(89),b=a(90),O=a(91),k=a(92),w=a(93),j=a(41),y=a.n(j);function x(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),c=a[0],o=a[1];return r.a.createElement("div",{className:"header"},r.a.createElement(v.a,{color:"light",light:!0,expand:"md"},r.a.createElement(E.a,null,r.a.createElement("img",{src:y.a,className:"image",alt:"logo",onClick:function(){e.history.push("/")}})),r.a.createElement(b.a,{onClick:function(){return o(!c)}}),r.a.createElement(O.a,{isOpen:c,navbar:!0},r.a.createElement(k.a,{className:"mr-auto",navbar:!0}),r.a.createElement(w.a,null,"URL Shortener"))))}var N=Object(i.g)((function(e){return r.a.createElement(x,e)})),S=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/,C=function(e){return S.test(e)},T=a(22),R=a.n(T),_=a(43),H=a(23),I=a(44),L=a.n(I),U=function(e){var t=e.method,a=void 0===t?"get":t,n=e.reqUrl,r=void 0===n?"":n,c=e.data,o=void 0===c?{}:c,l=e.headers,i=void 0===l?{"content-type":"application/json",Accept:"application/json"}:l,s=localStorage.getItem("ipToken");return s||(s="token"+(new Date).getTime().toString(36),localStorage.setItem("ipToken",s)),i=Object(H.a)({},i,{ipToken:s}),new Promise(function(){var e=Object(_.a)(R.a.mark((function e(t,n){var c,l;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c="".concat("https://t-url.glitch.me").concat(r),l={method:a,url:c,data:o,headers:i},"get"===a.toLowerCase()&&delete l.data,L()(Object(H.a)({},l)).then((function(e){t(e)})).catch((function(e){n(e)}));case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())};function B(){return r.a.createElement("svg",{style:{margin:"auto",background:"rgba(241, 242, 243, 0)",display:"block"},width:"30px",height:"30px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},r.a.createElement("circle",{cx:50,cy:50,fill:"none",stroke:"#1d0e0b",strokeWidth:10,r:35,strokeDasharray:"164.93361431346415 56.97787143782138",transform:"rotate(41.5375 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})))}function P(){var e=Object(n.useState)(-1),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),l=Object(s.a)(o,2),i=l[0],v=l[1],E=Object(n.useState)(""),b=Object(s.a)(E,2),O=b[0],k=b[1],w=Object(n.useState)(!1),j=Object(s.a)(w,2),y=j[0],x=j[1],S=Object(n.useState)(""),T=Object(s.a)(S,2),R=T[0],_=T[1],H=Object(n.useRef)(null);return r.a.createElement("div",{className:"Home flex_col"},r.a.createElement(N,null),r.a.createElement("div",{className:"body flex_col center"},r.a.createElement(u.a,{color:"danger",isOpen:!!O.length,toggle:function(){k("")},className:"warning-alert"},O),r.a.createElement(u.a,{color:"success",isOpen:!!R.length,toggle:function(){_("")},className:"warning-alert"},r.a.createElement("h5",null,R),r.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},i)),r.a.createElement("div",{className:"inputcontainer"},r.a.createElement("div",{className:"center time_box"},r.a.createElement(m.a,{className:"time_box_label"},"URL expiry time"),r.a.createElement(d.a,null,r.a.createElement(p.a,{type:"select",name:"expireTime",value:a,onChange:function(e){return c(e.target.value)}},r.a.createElement("option",{value:1},"1 Hour"),r.a.createElement("option",{value:6},"6 Hours"),r.a.createElement("option",{value:12},"12 Hours"),r.a.createElement("option",{value:24},"24 Hours"),r.a.createElement("option",{value:-1},"Never")))),r.a.createElement(h.a,{size:"lg"},r.a.createElement(p.a,{value:i,name:"url",innerRef:H,onChange:function(e){k(""),_(""),v(e.target.value)}}),r.a.createElement(f.a,{addonType:"append"},r.a.createElement(g.a,{className:"Input-btn",outline:!0,color:"primary",onClick:function(){_(""),C(i)?i.includes("https://t-url.glitch.me")?k("URL is already shorten"):(x(!0),k(""),U({method:"POST",data:{url:i,expireTime:60*a*60}}).then((function(e){var t=e.data.hash,a=void 0===t?"":t;v("".concat("https://t-url.glitch.me","/").concat(a)),x(!1)})).catch((function(e){var t=e.response.data.message,a=void 0===t?"":t;x(!1),k(a)}))):k("Please enter valid url")},disabled:y},y?r.a.createElement(B,null):"Shorten"),r.a.createElement(g.a,{className:"Input-btn",outline:!0,color:"success",onClick:function(e){k(""),H.current.select(),document.execCommand("copy"),e.target.focus(),_("Copied!")},disabled:!i.includes("https://t-url.glitch.me")},"Copy"))))))}var W=function(){return r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",component:P}),r.a.createElement(i.a,{to:"/"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,{basename:"url-shortener-frontend/"},r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.e2cf8e10.chunk.js.map