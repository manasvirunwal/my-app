(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(6),r=n.n(a),s=(n(12),n(7)),u=n(5),o=(n(13),n(14),n(0));var j=function(e){var t=e.itemList,n=e.updateItemList;return Object(o.jsx)("div",{children:t.map((function(e){return Object(o.jsxs)("div",{className:"Item",children:[Object(o.jsx)("p",{children:e.item}),Object(o.jsx)("button",{onClick:function(){return function(e){var c=t.filter((function(t){return t.key!==e}));n(c)}(e.key)},children:"-"})]},e.key)}))})};var d=function(){var e=Object(c.useState)(null),t=Object(u.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),r=Object(u.a)(a,2),d=r[0],l=r[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsx)("header",{className:"App-header",children:Object(o.jsxs)("div",{className:"Wrapper",children:[Object(o.jsxs)("div",{className:"Input-wrapper",children:[Object(o.jsx)("input",{placeholder:"Add item to-do",value:n,onChange:function(e){i(e.target.value)}}),Object(o.jsx)("button",{onClick:function(){l([].concat(Object(s.a)(d),[{item:n,key:Date.now()}])),i("")},children:"+"})]}),Object(o.jsx)(j,{itemList:d,updateItemList:l})]})})})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),a(e),r(e)}))};r.a.render(Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),l()}},[[16,1,2]]]);
//# sourceMappingURL=main.fffa0884.chunk.js.map