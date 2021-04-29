(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[8],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(26),r=n(1),c=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return{show:n,handleToggle:function(){c((function(e){return!e}))},handleShow:function(){c(!0)},handleHide:function(){c(!1)}}}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));n(1);var a=n(21),r=n.n(a),c=n(194),s=n(2),i=function(e){var t=e.children,n=e.show,a=document.getElementById("portal");return n?r.a.createPortal(Object(s.jsx)("div",{className:"z-9999 full-page-container",onClick:function(e){e.stopPropagation()},style:{backgroundColor:"#fafafa"},children:Object(s.jsx)("div",{className:"overflow-auto",children:t})}),a):null},o=function(e){var t=e.title,n=e.handleToggle;return Object(s.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center justify-content-between sticky-top bg-light",children:[Object(s.jsx)("h6",{className:"m-0",children:t}),Object(s.jsxs)("div",{className:"text-right",children:[Object(s.jsx)(c.a,{variant:"secondary",className:"mr-2",size:"sm",onClick:n,children:"Close"}),Object(s.jsx)(c.a,{variant:"primary",size:"sm",type:"submit",children:"Save"})]})]})}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(20),r=n(26),c=n(1),s=n(21),i=n.n(s),o=n(361),l=n(2),u=function(e){var t=e.isShown,n=e.message,a=e.type,r=e.title,c=document.getElementById("portal");return i.a.createPortal(Object(l.jsxs)(o.a,{className:"m-3 fixed-top",show:t,variant:a,style:{zIndex:9999999999},children:[Object(l.jsx)("h5",{children:r}),Object(l.jsx)("p",{className:"m-0",children:n})]}),c)},d=function(){var e=Object(c.useState)({title:"",isShown:!1,message:"",type:"success"}),t=Object(r.a)(e,2),n=t[0],s=t[1];return{showMsg:function(e,t,r){s({isShown:!0,message:t,title:e,type:r||"success"}),setTimeout((function(){s(Object(a.a)(Object(a.a)({},n),{},{isShown:!1}))}),3e3)},Snackbar:Object(c.useCallback)((function(){return Object(l.jsx)(u,{message:n.message,isShown:n.isShown,type:n.type,title:n.title})}),[n])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var a=n(365),r=n(2),c=function(e){var t=e.show,n=e.handleClose,c=e.centered,s=e.size,i=e.children,o=e.headerText;return Object(r.jsxs)(a.a,{show:t,onHide:n,centered:c,size:s,children:[o&&Object(r.jsx)(a.a.Header,{closeButton:!0,children:Object(r.jsx)("h6",{className:"m-0 align-self-center",children:o})}),Object(r.jsx)(a.a.Body,{children:i})]})}},119:function(e,t,n){"use strict";var a=n(26),r=n(1);function c(){var e=localStorage.getItem("a_voice");return"string"===typeof e?parseInt(e):0}t.a=function(){var e=Object(r.useRef)(window.speechSynthesis),t=Object(r.useState)(c),n=Object(a.a)(t,2),s=n[0],i=n[1],o=Object(r.useState)([]),l=Object(a.a)(o,2),u=l[0],d=l[1];Object(r.useEffect)((function(){var t=setTimeout((function(){var t=e.current.getVoices().filter((function(e){return e.lang.includes("en")}));d(t)}),2e3);return function(){clearTimeout(t)}}),[]);return{currentVoice:s,setAssistantVoice:function(){localStorage.setItem("a_voice",s.toString())},voiceHandler:function(t){var n=new SpeechSynthesisUtterance(t);s&&(n.voice=u[s]),e.current.speak(n)},changeAssistantVoice:function(e){i(e)},voices:u}}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(26),r=n(1),c=n(116),s=n(194),i=n(364),o=n(113),l=n(2),u=function(e){var t=Object(o.a)(),n=t.handleToggle,u=t.show,d=t.handleHide,b=Object(r.useState)(!1),j=Object(a.a)(b,2),f=j[0],h=j[1];Object(r.useEffect)((function(){return function(){h(!1)}}),[]);var p=e.message,m=e.onConfirmClick;return{ConfirmDialog:Object(r.useCallback)((function(){return Object(l.jsxs)(c.a,{show:u,centered:!0,size:"sm",handleClose:d,children:[Object(l.jsx)("h6",{children:"Confirm"}),Object(l.jsx)("p",{children:p}),Object(l.jsxs)("div",{className:"text-right",children:[Object(l.jsx)(s.a,{className:"mr-2",variant:"secondary",onClick:d,size:"sm",children:"Close"}),Object(l.jsx)(s.a,{variant:"primary",size:"sm",onClick:m,disabled:f,children:f?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(l.jsx)("span",{className:"ml-2",children:"Loading..."})]}):"Confirm"})]})]})}),[u,p,m,d,f]),toggleConfirmMessage:function(){n()},setIsloading:h}}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return a}));var a={};n.r(a),n.d(a,"USERS",(function(){return b})),n.d(a,"VERBS",(function(){return j})),n.d(a,"ADJECTIVES",(function(){return f})),n.d(a,"ADVERBS",(function(){return h})),n.d(a,"NOUNS",(function(){return p})),n.d(a,"PHRASALVERBS",(function(){return m})),n.d(a,"LINKERS",(function(){return v})),n.d(a,"TOPICS",(function(){return O})),n.d(a,"THINGS",(function(){return x})),n.d(a,"NOTES",(function(){return g})),n.d(a,"IDIOMS",(function(){return y})),n.d(a,"TENSES",(function(){return w})),n.d(a,"GAMES",(function(){return C})),n.d(a,"QA",(function(){return N})),n.d(a,"TODOS",(function(){return S}));var r=n(20),c=n(23),s=n.n(c),i=n(31),o=new(n(131).a)("remindMe");o.config.debug=!1;var l=o,u=function(e,t,n){return{message:t,success:e,data:n}},d=function(e){function t(){return(t=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).add(n);case 3:return a=t.sent,t.abrupt("return",u(!0,"New record has been added",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to create"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(i.a)(s.a.mark((function t(n,a){var c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n.label.trim().toLowerCase(),t.next=4,l.collection(e).doc({label:c}).get();case 4:if(!t.sent){t.next=7;break}return t.abrupt("return",u(!1,"The word ".concat(c," already exsist!")));case 7:return t.next=9,l.collection(e).add(Object(r.a)(Object(r.a)({},n),{},{label:c}),a);case 9:return i=t.sent,t.abrupt("return",u(!0,"New record has been added",i));case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to persist a new Word"));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function a(){return(a=Object(i.a)(s.a.mark((function t(n,a){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:a}).update(Object(r.a)(Object(r.a)({},n),{},{label:n.label.trim().toLowerCase()}));case 3:return c=t.sent,t.abrupt("return",u(!0,"New record has been updated",c));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to update"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function c(){return(c=Object(i.a)(s.a.mark((function t(n,a){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:a}).set(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been overwrited",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to overwrite"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:n}).delete();case 3:return a=t.sent,t.abrupt("return",u(!0,"New record has been removed",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).delete();case 3:return t.abrupt("return",u(!0,"The whole collection has been removed"));case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).set(n);case 3:return a=t.sent,t.abrupt("return",u(!0,"Init the whole collection",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function j(){return(j=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).get();case 3:return n=t.sent,t.abrupt("return",u(!0,"list of data",n));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function t(n){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:n}).get();case 3:return a=t.sent,t.abrupt("return",u(!0,"find a document",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return{save:function(e){return t.apply(this,arguments)},saveByKey:function(e,t){return n.apply(this,arguments)},findOneAndUpdate:function(e,t){return a.apply(this,arguments)},setById:function(e,t){return c.apply(this,arguments)},findOneAndDelete:function(e){return o.apply(this,arguments)},drop:function(){return d.apply(this,arguments)},init:function(e){return b.apply(this,arguments)},find:function(){return j.apply(this,arguments)},findOne:function(e){return f.apply(this,arguments)}}},b="USERS",j="VERBS",f="ADJECTIVES",h="ADVERBS",p="NOUNS",m="PHRASALVERBS",v="LINKERS",O="TOPICS",x="THINGS",g="NOTES",y="IDIOMS",w="TENSES",C="GAMES",N="QA",S="TODOS"},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(5),r=n(26),c=n(1),s=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0];return{setTerm:n[1],filterHandler:function(){return""===s?Object(a.a)(e):Object(a.a)(e.filter((function(e){return e.label.toLowerCase().includes(s.toLowerCase())})))}}}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return C}));var a=n(1),r=n.n(a),c=n(7),s=n(9),i=n(19),o=n.n(i),l=n(132),u=n(28),d=r.a.createContext(null),b=r.a.createContext(null);b.displayName="AccordionContext";var j=b;var f=r.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"button":n,o=e.children,l=e.eventKey,u=e.onClick,b=Object(s.a)(e,["as","children","eventKey","onClick"]),f=function(e,t){var n=Object(a.useContext)(j),r=Object(a.useContext)(d);return function(a){r&&r(e===n?null:e,a),t&&t(a)}}(l,u);return"button"===i&&(b.type="button"),r.a.createElement(i,Object(c.a)({ref:t,onClick:f},b),o)})),h=n(89),p=r.a.forwardRef((function(e,t){var n=e.children,i=e.eventKey,o=Object(s.a)(e,["children","eventKey"]),l=Object(a.useContext)(j);return r.a.createElement(d.Provider,{value:null},r.a.createElement(h.a,Object(c.a)({ref:t,in:l===i},o),r.a.createElement("div",null,r.a.Children.only(n))))}));p.displayName="AccordionCollapse";var m=p,v=r.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),a=n.as,i=void 0===a?"div":a,b=n.activeKey,f=n.bsPrefix,h=n.children,p=n.className,m=n.onSelect,v=Object(s.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),O=o()(p,Object(u.a)(f,"accordion"));return r.a.createElement(j.Provider,{value:b||null},r.a.createElement(d.Provider,{value:m||null},r.a.createElement(i,Object(c.a)({ref:t},v,{className:O}),h)))}));v.displayName="Accordion",v.Toggle=f,v.Collapse=m;var O=v,x=n(133),g=n(103),y=n(2),w=function(e){var t=e.children;return Object(y.jsx)(O,{defaultActiveKey:"ev0",className:"mt-3",children:t})},C=function(e){var t=e.children,n=e.eventKey,a=e.headerText;return Object(y.jsxs)(x.a,{children:[Object(y.jsxs)(O.Toggle,{className:"bg-light d-flex flex-row justify-content-between",as:x.a.Header,eventKey:n,children:[Object(y.jsx)("p",{className:"m-0 first-letter-capitalize",children:a}),Object(y.jsx)(g.a,{})]}),Object(y.jsx)(O.Collapse,{eventKey:n,children:Object(y.jsx)(x.a.Body,{children:t})})]})}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var a=n(5),r=n(26),c=n(1),s=n.n(c),i=n(7),o=n(9),l=n(19),u=n.n(l),d=n(28),b=n(128),j=s.a.forwardRef((function(e,t){var n=e.active,a=e.disabled,r=e.className,c=e.style,l=e.activeLabel,d=e.children,j=Object(o.a)(e,["active","disabled","className","style","activeLabel","children"]),f=n||a?"span":b.a;return s.a.createElement("li",{ref:t,style:c,className:u()(r,"page-item",{active:n,disabled:a})},s.a.createElement(f,Object(i.a)({className:"page-link",disabled:a},j),d,n&&l&&s.a.createElement("span",{className:"sr-only"},l)))}));j.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},j.displayName="PageItem";var f=j;function h(e,t,n){function a(e){var a=e.children,r=Object(o.a)(e,["children"]);return s.a.createElement(j,r,s.a.createElement("span",{"aria-hidden":"true"},a||t),s.a.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),a.displayName=e,a}var p=h("First","\xab"),m=h("Prev","\u2039","Previous"),v=h("Ellipsis","\u2026","More"),O=h("Next","\u203a"),x=h("Last","\xbb"),g=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=e.children,c=e.size,l=Object(o.a)(e,["bsPrefix","className","children","size"]),b=Object(d.a)(n,"pagination");return s.a.createElement("ul",Object(i.a)({ref:t},l,{className:u()(a,b,c&&b+"-"+c)}),r)}));g.First=p,g.Prev=m,g.Ellipsis=v,g.Item=f,g.Next=O,g.Last=x;var y=g,w=n(2),C=function(e,t){var n=Object(c.useState)(0),s=Object(r.a)(n,2),i=s[0],o=s[1],l=i*t,u=e.slice(l,l+t),d=e.length,b=Math.ceil(d/t),j=function(){i<b-1&&o((function(e){return e+1}))},f=function(){i>0&&o((function(e){return e-1}))},h=function(){o(0)},p=function(){o(b-1)};return{list:u,CustomPagination:function(){return Object(w.jsxs)(y,{children:[Object(w.jsx)(y.First,{disabled:0===i,onClick:h}),Object(w.jsx)(y.Prev,{disabled:0===i,onClick:f}),Object(a.a)(Array(b)).map((function(e,t){return Object(w.jsx)(y.Item,{active:i===t,onClick:function(){return function(e){o(e)}(t)},children:t+1},"slice"+t)})),Object(w.jsx)(y.Next,{disabled:i===b-1,onClick:j}),Object(w.jsx)(y.Last,{disabled:i===b-1,onClick:p})]})}}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(5),r=n(1),c=n.n(r),s=n(366),i=n(124),o=n(123),l=n(122),u=n(2),d=function(e){var t=e.dataSource,n=e.children,r=Object(l.a)(Object(a.a)(t)),d=r.setTerm,b=r.filterHandler,j=Object(i.a)(b(),5),f=j.CustomPagination,h=j.list;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(s.a,{children:Object(u.jsx)(s.a.Control,{type:"search",placeholder:"Are you looking for a word? filter here!",onChange:function(e){d(e.target.value)}})}),Object(u.jsx)(o.b,{children:Object(u.jsx)(c.a.Fragment,{children:h.map((function(e,t){return Object(u.jsx)(o.a,{eventKey:"ev"+t,headerText:e.label,children:n(e)},e.id)}))})}),h.length>0&&Object(u.jsx)("div",{className:"d-flex justify-content-end mt-3",children:Object(u.jsx)(f,{})})]})}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(1),r=n.n(a),c=n(114),s=n(194),i=n(113),o=n(2),l=function(e){var t=e.title,n=e.definition,a=e.children,l=Object(i.a)(),u=l.handleToggle,d=l.show;return Object(o.jsxs)(r.a.Fragment,{children:[Object(o.jsxs)("div",{className:"border rounded p-3 bg-light mb-3",children:[Object(o.jsx)("p",{children:n}),Object(o.jsx)("div",{className:"text-right",children:Object(o.jsx)(s.a,{variant:"primary",size:"sm",onClick:u,children:t})})]}),Object(o.jsx)(c.a,{show:d,children:a(u)})]})}},133:function(e,t,n){"use strict";var a=n(7),r=n(9),c=n(19),s=n.n(c),i=n(1),o=n.n(i),l=n(28),u=n(126),d=n(127),b=o.a.createContext(null);b.displayName="CardContext";var j=b,f=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(r.a)(e,["bsPrefix","className","variant","as"]),j=Object(l.a)(n,"card-img");return o.a.createElement(d,Object(a.a)({ref:t,className:s()(i?j+"-"+i:j,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var h=f,p=Object(d.a)("h5"),m=Object(d.a)("h6"),v=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:p}),x=Object(u.a)("card-subtitle",{Component:m}),g=Object(u.a)("card-link",{Component:"a"}),y=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),N=Object(u.a)("card-img-overlay"),S=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,h=e.children,p=e.as,m=void 0===p?"div":p,O=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(n,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(j.Provider,{value:g},o.a.createElement(m,Object(a.a)({ref:t},O,{className:s()(c,x,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?o.a.createElement(v,null,h):h))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=h,S.Title=O,S.Subtitle=x,S.Body=v,S.Link=g,S.Text=y,S.Header=w,S.Footer=C,S.ImgOverlay=N;t.a=S},138:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(3),s=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.size,c=o(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},c),r.a.createElement("path",{d:"M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"}),r.a.createElement("path",{d:"M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"}),r.a.createElement("path",{d:"M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39L6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.defaultProps={color:"currentColor",size:"1em"},t.a=l},140:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(3),s=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.size,c=o(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},c),r.a.createElement("path",{d:"M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),r.a.createElement("path",{d:"M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.defaultProps={color:"currentColor",size:"1em"},t.a=l},166:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(3),s=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.size,c=o(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},c),r.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),r.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.defaultProps={color:"currentColor",size:"1em"},t.a=l},348:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),c=n(31),s=n(1),i=n.n(s),o=n(194),l=n(36),u=n(120),d=n(114),b=n(113),j=n(4),f=function(e,t){return{type:j.ab,payload:t,id:e}},h=function(e){return{type:j.y,id:e}},p=n(125),m=n(129),v=n(20),O=n(115),x=n(119),g=n(35),y=n(117),w=n(366),C=n(63),N=n(138),S=n(166),k=n(118),E=n(2),z=k.b().shape({label:k.d().required("Subject is required"),vocabs:k.a().of(k.b().shape({name:k.d().required("Name is required"),example:k.d().required("An Example is required")}))}),T=function(e){var t=e.handleToogle,n=e.word,a=e.findOneAndUpdate,s=Object(g.b)().dispatch,l=Object(x.a)().voiceHandler,u=Object(O.a)(),b=u.Snackbar,j=u.showMsg,h=function(e){e&&l(e)},p=function(){var e=Object(c.a)(r.a.mark((function e(t){var c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=n.id||"",e.next=4,a(t,c);case 4:(i=e.sent).success?(j("Word updated",i.message),s(f(c,t))):j("Failed to update",i.message,"danger"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),m=Object(v.a)({},n);return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)(y.b,{initialValues:m,onSubmit:function(e){return p(e)},validationSchema:z,children:function(e){var n=e.handleSubmit,a=e.handleChange,r=e.handleBlur,c=e.values,s=(e.isValid,e.touched),l=e.errors;return Object(E.jsxs)(w.a,{onSubmit:n,children:[Object(E.jsx)(d.b,{handleToggle:t,title:"Edit Topic"}),Object(E.jsxs)(C.a,{className:"py-3",children:[Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Subject"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return h(c.label)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{spellCheck:"true",autoComplete:"off",placeholder:"What's the name of the topic would you like talking about",name:"label",onChange:a,onBlur:r,value:c.label,size:"sm",isInvalid:s.label&&!!l.label}),Object(E.jsx)(w.a.Control.Feedback,{type:"invalid",children:l.label})]}),Object(E.jsx)(y.a,{name:"vocabs",children:function(e){var t=e.remove,n=e.push;return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(E.jsx)("h6",{className:"m-0",children:"RELATED WORDS"}),Object(E.jsx)("div",{children:Object(E.jsx)(o.a,{size:"sm",variant:"success",className:"mr-2",onClick:function(){return n({name:"",translation:"",utility:""})},children:"New Word"})})]}),c.vocabs.length>0&&c.vocabs.map((function(e,n){return Object(E.jsxs)("div",{className:"bg-light border rounded pt-3 px-3 mt-3",children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsxs)("h6",{className:"m-0",children:["Word ",n+1]}),Object(E.jsx)(o.a,{size:"sm",variant:"danger",onClick:function(){return t(n)},className:"rounded-circle d-flex align-items-center align-self-end",style:{width:"32px",height:"32px"},children:Object(E.jsx)(S.a,{})})]}),Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Name"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return h(c.vocabs[n].name)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{autoComplete:"off",size:"sm",placeholder:"vocabs n\xb0 ".concat(n+1),name:"vocabs.".concat(n,".name"),onChange:a,onBlur:r,value:c.vocabs[n].name,isInvalid:s.vocabs&&!!l.vocabs}),Object(E.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Name is required"})]}),Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Example"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return h(c.vocabs[n].example)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{autoComplete:"off",size:"sm",placeholder:"give an example using the above word",name:"vocabs.".concat(n,".example"),onChange:a,onBlur:r,value:c.vocabs[n].example,isInvalid:s.vocabs&&!!l.vocabs}),Object(E.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Example is required"})]}),Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Definition"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return h(c.vocabs[n].definition)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{autoComplete:"off",size:"sm",as:"textarea",placeholder:"Is That thing useful?",name:"vocabs.".concat(n,".definition"),onChange:a,onBlur:r,value:c.vocabs[n].definition})]})]},n+"thin"+n)}))]})}})]})]})}}),Object(E.jsx)(b,{})]})},A=n(112),P={label:"",vocabs:[{name:"",definition:"",example:""}]},I=k.b().shape({label:k.d().required("Subject is required"),vocabs:k.a().of(k.b().shape({name:k.d().required("Name is required"),example:k.d().required("An Example is required")}))}),F=function(e){var t=e.handleToogle,n=e.saveByKey,a=Object(g.b)().dispatch,s=Object(x.a)().voiceHandler,l=Object(O.a)(),u=l.Snackbar,b=l.showMsg,f=function(e){e&&s(e)},h=function(){var e=Object(c.a)(r.a.mark((function e(t,c){var s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Object(A.a)(),e.next=4,n(Object(v.a)(Object(v.a)({},t),{},{id:s}),s);case 4:(i=e.sent).success?(b("created",i.message),a((r=Object(v.a)(Object(v.a)({},t),{},{id:s}),{type:j.l,payload:r})),c()):b("Failed to Created",i.message,"warning"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var r}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)(y.b,{initialValues:P,onSubmit:function(e,t){var n=t.resetForm;return h(e,n)},validationSchema:I,children:function(e){var n=e.handleSubmit,a=e.handleChange,r=e.handleBlur,c=e.values,s=(e.isValid,e.touched),l=e.errors;return Object(E.jsxs)(w.a,{onSubmit:n,children:[Object(E.jsx)(d.b,{handleToggle:t,title:"New Topic"}),Object(E.jsxs)(C.a,{className:"py-3",children:[Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Subject"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return f(c.label)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{spellCheck:"true",autoComplete:"off",placeholder:"What's the name of the topic would you like talking about",name:"label",onChange:a,onBlur:r,value:c.label,size:"sm",isInvalid:s.label&&!!l.label}),Object(E.jsx)(w.a.Control.Feedback,{type:"invalid",children:l.label})]}),Object(E.jsx)(y.a,{name:"vocabs",children:function(e){var t=e.remove,n=e.push;return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(E.jsx)("h6",{className:"m-0",children:"RELATED WORDS"}),Object(E.jsx)("div",{children:Object(E.jsx)(o.a,{size:"sm",variant:"success",className:"mr-2",onClick:function(){return n({name:"",translation:"",utility:""})},children:"New Word"})})]}),c.vocabs.length>0&&c.vocabs.map((function(e,n){return Object(E.jsxs)("div",{className:"bg-light border rounded pt-3 px-3 mt-3",children:[Object(E.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(E.jsxs)("h6",{className:"m-0",children:["Word ",n+1]}),Object(E.jsx)(o.a,{size:"sm",variant:"danger",onClick:function(){return t(n)},className:"rounded-circle d-flex align-items-center align-self-end",style:{width:"32px",height:"32px"},children:Object(E.jsx)(S.a,{})})]}),Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Name"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return f(c.vocabs[n].name)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{autoComplete:"off",size:"sm",placeholder:"vocabs n\xb0 ".concat(n+1),name:"vocabs.".concat(n,".name"),onChange:a,onBlur:r,value:c.vocabs[n].name,isInvalid:s.vocabs&&!!l.vocabs}),Object(E.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Name is required"})]}),Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Example"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return f(c.vocabs[n].example)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{autoComplete:"off",size:"sm",placeholder:"give an example using the above word",name:"vocabs.".concat(n,".example"),onChange:a,onBlur:r,value:c.vocabs[n].example,isInvalid:s.vocabs&&!!l.vocabs}),Object(E.jsx)(w.a.Control.Feedback,{type:"invalid",children:"Example is required"})]}),Object(E.jsxs)(w.a.Group,{children:[Object(E.jsxs)(w.a.Label,{children:[Object(E.jsx)("span",{children:"Definition"}),Object(E.jsx)("span",{className:"ml-2 icons",onClick:function(){return f(c.vocabs[n].definition)},children:Object(E.jsx)(N.a,{size:"20"})})]}),Object(E.jsx)(w.a.Control,{autoComplete:"off",size:"sm",as:"textarea",placeholder:"Is That thing useful?",name:"vocabs.".concat(n,".definition"),onChange:a,onBlur:r,value:c.vocabs[n].definition})]})]},n+"thin"+n)}))]})}})]})]})}}),Object(E.jsx)(u,{})]})},L=n(121),B=n(140),R=function(e){var t=e.word,n=e.findOneAndUpdate,a=e.findOneAndDelete;return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)(V,{word:t}),Object(E.jsxs)("div",{className:"text-right mt-3",children:[Object(E.jsx)(H,{word:t,findOneAndUpdate:n}),Object(E.jsx)(M,{word:t,findOneAndDelete:a})]})]})},V=function(e){var t=e.word;return Object(E.jsx)(i.a.Fragment,{children:(null===t||void 0===t?void 0:t.vocabs)&&Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)("h6",{children:"Related Vocabulary"}),t.vocabs.map((function(e,n){return Object(E.jsxs)("details",{children:[Object(E.jsx)("summary",{style:{outline:"none"},children:e.name}),Object(E.jsxs)("div",{className:"ml-3",children:[e.definition&&Object(E.jsxs)("p",{className:"text-secondary",children:['"',e.definition,'"']}),Object(E.jsxs)("p",{children:[Object(E.jsx)("span",{className:"mr-2",children:Object(E.jsx)(B.a,{})}),e.example]})]})]},t.id+"details"+n)}))]})})},H=function(e){var t=e.word,n=e.findOneAndUpdate,a=Object(b.a)(),r=a.handleToggle,c=a.show;return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)(o.a,{className:"mr-2",variant:"primary",size:"sm",onClick:r,children:"Update"}),Object(E.jsx)(d.a,{show:c,children:Object(E.jsx)(T,{word:t,handleToogle:r,findOneAndUpdate:n})})]})},M=function(e){var t=e.word,n=e.findOneAndDelete,a=Object(g.b)().dispatch,s=Object(u.a)({message:"Are you sure you want to remove this topic? This cannot be undone.",onConfirmClick:function(){return b.apply(this,arguments)}}),l=s.ConfirmDialog,d=s.toggleConfirmMessage;function b(){return(b=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(t.id||"");case 3:e.sent.success&&(d(),setTimeout((function(){a(h(t.id||""))}),0)),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)(o.a,{variant:"danger",size:"sm",onClick:function(){d()},children:"Remove"}),Object(E.jsx)(l,{})]})};t.default=function(){var e=Object(l.c)((function(e){return e.topics})),t=Object(g.b)().dispatch,n=Object(L.b)(L.a.TOPICS),a=n.find,r=n.findOneAndUpdate,c=n.findOneAndDelete,o=n.saveByKey;return Object(s.useEffect)((function(){a().then((function(e){var n;e.success?t((n=e.data,{type:j.N,payload:n})):console.log(e.message)})).catch((function(e){return console.error(e)}))}),[]),Object(E.jsxs)(i.a.Fragment,{children:[Object(E.jsx)(m.a,{title:"New Topic",definition:"\r Hey dude, What's the topic of today ?\r ",children:function(e){return Object(E.jsx)(F,{handleToogle:e,saveByKey:o})}}),Object(E.jsx)(p.a,{dataSource:e,children:function(e){return Object(E.jsx)(R,{word:e,findOneAndUpdate:r,findOneAndDelete:c})}})]})}}}]);
//# sourceMappingURL=8.6621fc78.chunk.js.map