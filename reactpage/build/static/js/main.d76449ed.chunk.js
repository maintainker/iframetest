(this.webpackJsonpreactpage=this.webpackJsonpreactpage||[]).push([[0],{13:function(e,a,t){e.exports=t(22)},18:function(e,a,t){},19:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(9),l=t.n(r),i=(t(18),t(6)),o=t(2),s=(t(19),function(e){var a=e.changeBasket,t=e.poster,r=Object(n.useCallback)((function(e){a("add",e)}),[a]),l=Object(n.useCallback)((function(e){a("remove",e)}),[a]),i=function(){return t.map((function(e){return c.a.createElement("div",{className:"poster",key:e.idx},c.a.createElement("img",{src:"./img/poster".concat(e.idx+1,".png"),alt:"poster".concat(e.idx+1)}),e.count>0?c.a.createElement("div",{className:"mover basket"},c.a.createElement("div",{className:"mover_circle"},c.a.createElement("span",null,"$",e.price)),c.a.createElement("div",{className:"count"},c.a.createElement("div",{className:"minus"},"-"),c.a.createElement("div",{className:"plus"},"+"),c.a.createElement("div",{className:"countNum"},c.a.createElement("span",null,e.count))),c.a.createElement("div",{className:"mover_left",onClick:function(){return l(e.idx)}}),c.a.createElement("div",{className:"mover_right",onClick:function(){return r(e.idx)}})):c.a.createElement("div",{className:"mover",onClick:function(){return r(e.idx)}},c.a.createElement("div",{className:"mover_circle"},c.a.createElement("span",null,"$",e.price))))}))};return c.a.createElement("div",null,c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"NSHC Poster mall"),c.a.createElement("ul",null,c.a.createElement("li",{className:"tit"},"Individual Posters"),c.a.createElement("li",null,"All posters are available and can be purchased as individuals or sets.",c.a.createElement("br",null)," Please email info@nshs.net for more information.",c.a.createElement("br",null),"refer to https://posterworks.piscatello.com/#shop"))),c.a.createElement("div",{className:"postersFrame"},c.a.createElement(i,null)))}),m=t(3),u=function(e){for(var a=e.poster,t=0,n=0;n<a.length;n++)0!==a[n].count&&(t+=a[n].count);return c.a.createElement("div",{className:"carthead"},c.a.createElement("span",null,"shop(",t,")"))},d=function(e){var a=e.poster,t=function(){var e=a.map((function(e){return e.count>0?c.a.createElement("li",{className:"list",key:e.idx},c.a.createElement("div",{className:"author"},e.name),c.a.createElement("div",{className:"counter"},"x",e.count),c.a.createElement("div",{className:"price"},"$",e.price)):""}));return e};return c.a.createElement("div",{className:"basket"},c.a.createElement(t,null))},p=function(e){for(var a,t,n=e.poster,r=e.changeFin,l=0,i=0;i<n.length;i++)l+=n[i].count*n[i].price;return a=l+.01*(t=Math.round(8.875*l))+14.5,c.a.createElement("div",{className:"cal"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("div",null,"shipping (international) :"),c.a.createElement("div",null,"$14.50")),c.a.createElement("li",null,c.a.createElement("div",null,"Tax (8.875%) :"),c.a.createElement("div",null,"$",.01*t)),c.a.createElement("li",{className:"total"},c.a.createElement("div",null,"TOTAL : "),c.a.createElement("div",null,"$",a))),c.a.createElement("a",{className:"finish",href:"javascript:",onClick:function(){return r()}},"PayPal \uacb0\uc81c"))},v=t(4);function E(){var e=Object(m.a)(["\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        background-color: rgba(0,0,0,0.7);\n        animation: "," 0.5s ease-in-out;\n        div{\n            width: 369px;\n            height: 611px;\n            position : absolute;\n            top:50%;\n            left:50%; \n            transform: translate(-50%,-50%);\n            iframe {\n                width:100%;\n                height:100%;\n            }\n        }\n    "]);return E=function(){return e},e}function f(){var e=Object(m.a)(["\n        0% {top:100%;}\n        100% {top:0;}\n    "]);return f=function(){return e},e}var h=function(e){var a=e.poster,t=Object(n.useState)(!1),r=Object(o.a)(t,2),l=r[0],i=r[1],s=Object(v.b)(f()),m=v.a.section(E(),s),h=Object(n.useCallback)((function(){i(!l),console.log(l)}),[l]);return c.a.createElement("div",{className:"cart"},c.a.createElement(u,{poster:a}),c.a.createElement(d,{poster:a}),c.a.createElement(p,{poster:a,changeFin:h}),l?c.a.createElement(m,null,c.a.createElement("div",null,c.a.createElement("iframe",{src:"./popup.html"}))):c.a.createElement(c.a.Fragment,null))};var b=function(){var e=Object(n.useState)([{idx:0,name:"Milton Glaser",price:275,count:1},{idx:1,name:"Glen Cummings",price:150,count:0},{idx:2,name:"Jessica Walsh",price:150,count:0},{idx:3,name:"Jake Barton",price:175,count:0},{idx:4,name:"Julia Hoffmann",price:150,count:0},{idx:5,name:"Jessica Hische",price:150,count:0},{idx:6,name:"Matteo Bologna",price:115,count:0},{idx:7,name:"David Gibson",price:175,count:0},{idx:8,name:"David Carson",price:225,count:0},{idx:9,name:"Stefan Sagmeister",price:150,count:0},{idx:10,name:"Paula Scher",price:150,count:0},{idx:11,name:"Paula Scher",price:150,count:0}]),a=Object(o.a)(e,2),t=a[0],r=a[1],l=Object(n.useCallback)((function(e,a){var n,c=[];if("add"===e){for(var l=0;l<t.length;l++)t[l].idx===a?(n=Object(i.a)({},t[l],{count:t[l].count+1}),c=c.concat(n)):c=c.concat(t[l]);r(c)}else if("remove"===e){for(var o=0;o<t.length;o++)t[o].idx===a?(n=Object(i.a)({},t[o],{count:t[o].count-1}),c=c.concat(n)):c=c.concat(t[o]);r(c)}console.log(t)}),[t]);return c.a.createElement("div",null,c.a.createElement(s,{changeBasket:l,poster:t}),c.a.createElement(h,{poster:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[13,1,2]]]);
//# sourceMappingURL=main.d76449ed.chunk.js.map