(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{604:function(t,e,n){"use strict";n.r(e);var r=n(2),c=(n(28),n(53),n(21),n(62)),o={name:"refund",auth:!1,data:function(){return{title:"",content:""}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.app,t.query,t.params,e.prev=1,e.next=4,Object(c.b)("/api/refund-policy");case 4:return(n=e.sent).data.attributes.content=n.data.attributes.content.replace(/\<img src\=\"/gi,'<img srcset="https://admin.spyx.com'),e.abrupt("return",{title:n.data.attributes.name,content:n.data.attributes.content});case 9:e.prev=9,e.t0=e.catch(1),console.log("接口异常");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()}},l=n(3),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"privacy"},[n("div",{staticClass:"container-large"},[n("div",{staticClass:"privacy-body"},[n("h2",[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"privacy-body-text",domProps:{innerHTML:t._s(t.content)}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);