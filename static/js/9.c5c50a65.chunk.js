(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[9],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(26),r=n(1),c=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1];return{show:n,handleToggle:function(){c((function(e){return!e}))},handleShow:function(){c(!0)},handleHide:function(){c(!1)}}}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));n(1);var a=n(21),r=n.n(a),c=n(194),s=n(2),i=function(e){var t=e.children,n=e.show,a=document.getElementById("portal");return n?r.a.createPortal(Object(s.jsx)("div",{className:"z-9999 full-page-container",onClick:function(e){e.stopPropagation()},style:{backgroundColor:"#fafafa"},children:Object(s.jsx)("div",{className:"overflow-auto",children:t})}),a):null},l=function(e){var t=e.title,n=e.handleToggle;return Object(s.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center justify-content-between sticky-top bg-light",children:[Object(s.jsx)("h6",{className:"m-0",children:t}),Object(s.jsxs)("div",{className:"text-right",children:[Object(s.jsx)(c.a,{variant:"secondary",className:"mr-2",size:"sm",onClick:n,children:"Close"}),Object(s.jsx)(c.a,{variant:"primary",size:"sm",type:"submit",children:"Save"})]})]})}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(20),r=n(26),c=n(1),s=n(21),i=n.n(s),l=n(361),o=n(2),d=function(e){var t=e.isShown,n=e.message,a=e.type,r=e.title,c=document.getElementById("portal");return i.a.createPortal(Object(o.jsxs)(l.a,{className:"m-3 fixed-top",show:t,variant:a,style:{zIndex:9999999999},children:[Object(o.jsx)("h5",{children:r}),Object(o.jsx)("p",{className:"m-0",children:n})]}),c)},u=function(){var e=Object(c.useState)({title:"",isShown:!1,message:"",type:"success"}),t=Object(r.a)(e,2),n=t[0],s=t[1];return{showMsg:function(e,t,r){s({isShown:!0,message:t,title:e,type:r||"success"}),setTimeout((function(){s(Object(a.a)(Object(a.a)({},n),{},{isShown:!1}))}),3e3)},Snackbar:Object(c.useCallback)((function(){return Object(o.jsx)(d,{message:n.message,isShown:n.isShown,type:n.type,title:n.title})}),[n])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var a=n(365),r=n(2),c=function(e){var t=e.show,n=e.handleClose,c=e.centered,s=e.size,i=e.children,l=e.headerText;return Object(r.jsxs)(a.a,{show:t,onHide:n,centered:c,size:s,children:[l&&Object(r.jsx)(a.a.Header,{closeButton:!0,children:Object(r.jsx)("h6",{className:"m-0 align-self-center",children:l})}),Object(r.jsx)(a.a.Body,{children:i})]})}},119:function(e,t,n){"use strict";var a=n(26),r=n(1);function c(){var e=localStorage.getItem("a_voice");return"string"===typeof e?parseInt(e):0}t.a=function(){var e=Object(r.useRef)(window.speechSynthesis),t=Object(r.useState)(c),n=Object(a.a)(t,2),s=n[0],i=n[1],l=Object(r.useState)([]),o=Object(a.a)(l,2),d=o[0],u=o[1];Object(r.useEffect)((function(){var t=setTimeout((function(){var t=e.current.getVoices().filter((function(e){return e.lang.includes("en")}));u(t)}),2e3);return function(){clearTimeout(t)}}),[]);return{currentVoice:s,setAssistantVoice:function(){localStorage.setItem("a_voice",s.toString())},voiceHandler:function(t){var n=new SpeechSynthesisUtterance(t);s&&(n.voice=d[s]),e.current.speak(n)},changeAssistantVoice:function(e){i(e)},voices:d}}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n(26),r=n(1),c=n(116),s=n(194),i=n(364),l=n(113),o=n(2),d=function(e){var t=Object(l.a)(),n=t.handleToggle,d=t.show,u=t.handleHide,j=Object(r.useState)(!1),b=Object(a.a)(j,2),p=b[0],h=b[1];Object(r.useEffect)((function(){return function(){h(!1)}}),[]);var f=e.message,m=e.onConfirmClick;return{ConfirmDialog:Object(r.useCallback)((function(){return Object(o.jsxs)(c.a,{show:d,centered:!0,size:"sm",handleClose:u,children:[Object(o.jsx)("h6",{children:"Confirm"}),Object(o.jsx)("p",{children:f}),Object(o.jsxs)("div",{className:"text-right",children:[Object(o.jsx)(s.a,{className:"mr-2",variant:"secondary",onClick:u,size:"sm",children:"Close"}),Object(o.jsx)(s.a,{variant:"primary",size:"sm",onClick:m,disabled:p,children:p?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(o.jsx)("span",{className:"ml-2",children:"Loading..."})]}):"Confirm"})]})]})}),[d,f,m,u,p]),toggleConfirmMessage:function(){n()},setIsloading:h}}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return a}));var a={};n.r(a),n.d(a,"USERS",(function(){return u})),n.d(a,"VERBS",(function(){return j})),n.d(a,"ADJECTIVES",(function(){return b})),n.d(a,"ADVERBS",(function(){return p})),n.d(a,"NOUNS",(function(){return h})),n.d(a,"PHRASALVERBS",(function(){return f})),n.d(a,"LINKERS",(function(){return m})),n.d(a,"TOPICS",(function(){return O})),n.d(a,"THINGS",(function(){return v})),n.d(a,"NOTES",(function(){return x})),n.d(a,"IDIOMS",(function(){return y})),n.d(a,"TENSES",(function(){return g})),n.d(a,"GAMES",(function(){return C})),n.d(a,"QA",(function(){return w})),n.d(a,"TODOS",(function(){return N}));var r=n(23),c=n.n(r),s=n(31),i=new(n(131).a)("remindMe");i.config.debug=!1;var l=i,o=function(e,t,n){return{message:t,success:e,data:n}},d=function(e){function t(){return(t=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).add(n);case 3:return a=t.sent,t.abrupt("return",o(!0,"New record has been added",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to create"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(s.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).add(n,a);case 3:return r=t.sent,t.abrupt("return",o(!0,"New record has been added",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to create"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function a(){return(a=Object(s.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:a}).update(n);case 3:return r=t.sent,t.abrupt("return",o(!0,"New record has been updated",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to update"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function r(){return(r=Object(s.a)(c.a.mark((function t(n,a){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:a}).set(n);case 3:return r=t.sent,t.abrupt("return",o(!0,"New record has been overwrited",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to overwrite"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function i(){return(i=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:n}).delete();case 3:return a=t.sent,t.abrupt("return",o(!0,"New record has been removed",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(s.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).delete();case 3:return t.abrupt("return",o(!0,"The whole collection has been removed"));case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to remove"));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function u(){return(u=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).set(n);case 3:return a=t.sent,t.abrupt("return",o(!0,"Init the whole collection",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function j(){return(j=Object(s.a)(c.a.mark((function t(){var n;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).get();case 3:return n=t.sent,t.abrupt("return",o(!0,"list of data",n));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function b(){return(b=Object(s.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc(n).get();case 3:return a=t.sent,t.abrupt("return",o(!0,"find a document",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",o(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return{save:function(e){return t.apply(this,arguments)},saveByKey:function(e,t){return n.apply(this,arguments)},findOneAndUpdate:function(e,t){return a.apply(this,arguments)},setById:function(e,t){return r.apply(this,arguments)},findOneAndDelete:function(e){return i.apply(this,arguments)},drop:function(){return d.apply(this,arguments)},init:function(e){return u.apply(this,arguments)},find:function(){return j.apply(this,arguments)},findOne:function(e){return b.apply(this,arguments)}}},u="USERS",j="VERBS",b="ADJECTIVES",p="ADVERBS",h="NOUNS",f="PHRASALVERBS",m="LINKERS",O="TOPICS",v="THINGS",x="NOTES",y="IDIOMS",g="TENSES",C="GAMES",w="QA",N="TODOS"},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return C})),n.d(t,"a",(function(){return w}));var a=n(1),r=n.n(a),c=n(7),s=n(9),i=n(19),l=n.n(i),o=n(132),d=n(28),u=r.a.createContext(null),j=r.a.createContext(null);j.displayName="AccordionContext";var b=j;var p=r.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"button":n,l=e.children,o=e.eventKey,d=e.onClick,j=Object(s.a)(e,["as","children","eventKey","onClick"]),p=function(e,t){var n=Object(a.useContext)(b),r=Object(a.useContext)(u);return function(a){r&&r(e===n?null:e,a),t&&t(a)}}(o,d);return"button"===i&&(j.type="button"),r.a.createElement(i,Object(c.a)({ref:t,onClick:p},j),l)})),h=n(89),f=r.a.forwardRef((function(e,t){var n=e.children,i=e.eventKey,l=Object(s.a)(e,["children","eventKey"]),o=Object(a.useContext)(b);return r.a.createElement(u.Provider,{value:null},r.a.createElement(h.a,Object(c.a)({ref:t,in:o===i},l),r.a.createElement("div",null,r.a.Children.only(n))))}));f.displayName="AccordionCollapse";var m=f,O=r.a.forwardRef((function(e,t){var n=Object(o.a)(e,{activeKey:"onSelect"}),a=n.as,i=void 0===a?"div":a,j=n.activeKey,p=n.bsPrefix,h=n.children,f=n.className,m=n.onSelect,O=Object(s.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),v=l()(f,Object(d.a)(p,"accordion"));return r.a.createElement(b.Provider,{value:j||null},r.a.createElement(u.Provider,{value:m||null},r.a.createElement(i,Object(c.a)({ref:t},O,{className:v}),h)))}));O.displayName="Accordion",O.Toggle=p,O.Collapse=m;var v=O,x=n(133),y=n(103),g=n(2),C=function(e){var t=e.children;return Object(g.jsx)(v,{defaultActiveKey:"ev0",className:"mt-3",children:t})},w=function(e){var t=e.children,n=e.eventKey,a=e.headerText;return Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(v.Toggle,{className:"bg-light d-flex flex-row justify-content-between",as:x.a.Header,eventKey:n,children:[Object(g.jsx)("p",{className:"m-0",children:a}),Object(g.jsx)(y.a,{})]}),Object(g.jsx)(v.Collapse,{eventKey:n,children:Object(g.jsx)(x.a.Body,{children:t})})]})}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(5),r=n(26),c=n(1),s=function(e){var t=Object(c.useState)(""),n=Object(r.a)(t,2),s=n[0];return{setTerm:n[1],filterHandler:function(){return""===s?Object(a.a)(e):Object(a.a)(e.filter((function(e){return e.label.toLowerCase().includes(s.toLowerCase())})))}}}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(5),r=n(26),c=n(1),s=n.n(c),i=n(7),l=n(9),o=n(19),d=n.n(o),u=n(28),j=n(129),b=s.a.forwardRef((function(e,t){var n=e.active,a=e.disabled,r=e.className,c=e.style,o=e.activeLabel,u=e.children,b=Object(l.a)(e,["active","disabled","className","style","activeLabel","children"]),p=n||a?"span":j.a;return s.a.createElement("li",{ref:t,style:c,className:d()(r,"page-item",{active:n,disabled:a})},s.a.createElement(p,Object(i.a)({className:"page-link",disabled:a},b),u,n&&o&&s.a.createElement("span",{className:"sr-only"},o)))}));b.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},b.displayName="PageItem";var p=b;function h(e,t,n){function a(e){var a=e.children,r=Object(l.a)(e,["children"]);return s.a.createElement(b,r,s.a.createElement("span",{"aria-hidden":"true"},a||t),s.a.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),a.displayName=e,a}var f=h("First","\xab"),m=h("Prev","\u2039","Previous"),O=h("Ellipsis","\u2026","More"),v=h("Next","\u203a"),x=h("Last","\xbb"),y=s.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,r=e.children,c=e.size,o=Object(l.a)(e,["bsPrefix","className","children","size"]),j=Object(u.a)(n,"pagination");return s.a.createElement("ul",Object(i.a)({ref:t},o,{className:d()(a,j,c&&j+"-"+c)}),r)}));y.First=f,y.Prev=m,y.Ellipsis=O,y.Item=p,y.Next=v,y.Last=x;var g=y,C=n(2),w=function(e,t){var n=Object(c.useState)(0),s=Object(r.a)(n,2),i=s[0],l=s[1],o=i*t,d=e.slice(o,o+t),u=e.length,j=Math.ceil(u/t),b=function(){i<j-1&&l((function(e){return e+1}))},p=function(){i>0&&l((function(e){return e-1}))},h=function(){l(0)},f=function(){l(j-1)};return{list:d,CustomPagination:function(){return Object(C.jsxs)(g,{children:[Object(C.jsx)(g.First,{disabled:0===i,onClick:h}),Object(C.jsx)(g.Prev,{disabled:0===i,onClick:p}),Object(a.a)(Array(j)).map((function(e,t){return Object(C.jsx)(g.Item,{active:i===t,onClick:function(){return function(e){l(e)}(t)},children:t+1},"slice"+t)})),Object(C.jsx)(g.Next,{disabled:i===j-1,onClick:b}),Object(C.jsx)(g.Last,{disabled:i===j-1,onClick:f})]})}}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(5),r=n(1),c=n.n(r),s=n(366),i=n(124),l=n(122),o=n(123),d=n(2),u=function(e){var t=e.dataSource,n=e.children,r=Object(o.a)(Object(a.a)(t)),u=r.setTerm,j=r.filterHandler,b=Object(i.a)(j(),5),p=b.CustomPagination,h=b.list;return Object(d.jsxs)(c.a.Fragment,{children:[Object(d.jsx)(s.a,{children:Object(d.jsx)(s.a.Control,{type:"search",placeholder:"Are you looking for a word? filter here!",onChange:function(e){u(e.target.value)}})}),Object(d.jsx)(l.b,{children:Object(d.jsx)(c.a.Fragment,{children:h.map((function(e,t){return Object(d.jsx)(l.a,{eventKey:"ev"+t,headerText:e.label,children:n(e)},e.id)}))})}),h.length>0&&Object(d.jsx)("div",{className:"d-flex justify-content-end mt-3",children:Object(d.jsx)(p,{})})]})}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n(1),r=n.n(a),c=n(114),s=n(194),i=n(113),l=n(2),o=function(e){var t=e.title,n=e.definition,a=e.children,o=Object(i.a)(),d=o.handleToggle,u=o.show;return Object(l.jsxs)(r.a.Fragment,{children:[Object(l.jsxs)("div",{className:"border rounded p-3 bg-light mb-3",children:[Object(l.jsx)("p",{children:n}),Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)(s.a,{variant:"primary",size:"sm",onClick:d,children:t})})]}),Object(l.jsx)(c.a,{show:u,children:a(d)})]})}},133:function(e,t,n){"use strict";var a=n(7),r=n(9),c=n(19),s=n.n(c),i=n(1),l=n.n(i),o=n(28),d=n(126),u=n(127),j=l.a.createContext(null);j.displayName="CardContext";var b=j,p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.variant,d=e.as,u=void 0===d?"img":d,j=Object(r.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(n,"card-img");return l.a.createElement(u,Object(a.a)({ref:t,className:s()(i?b+"-"+i:b,c)},j))}));p.displayName="CardImg",p.defaultProps={variant:null};var h=p,f=Object(u.a)("h5"),m=Object(u.a)("h6"),O=Object(d.a)("card-body"),v=Object(d.a)("card-title",{Component:f}),x=Object(d.a)("card-subtitle",{Component:m}),y=Object(d.a)("card-link",{Component:"a"}),g=Object(d.a)("card-text",{Component:"p"}),C=Object(d.a)("card-header"),w=Object(d.a)("card-footer"),N=Object(d.a)("card-img-overlay"),S=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,d=e.bg,u=e.text,j=e.border,p=e.body,h=e.children,f=e.as,m=void 0===f?"div":f,v=Object(r.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(o.a)(n,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return l.a.createElement(b.Provider,{value:y},l.a.createElement(m,Object(a.a)({ref:t},v,{className:s()(c,x,d&&"bg-"+d,u&&"text-"+u,j&&"border-"+j)}),p?l.a.createElement(O,null,h):h))}));S.displayName="Card",S.defaultProps={body:!1},S.Img=h,S.Title=v,S.Subtitle=x,S.Body=O,S.Link=y,S.Text=g,S.Header=C,S.Footer=w,S.ImgOverlay=N;t.a=S},135:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(7),s=n(9),i=n(19),l=n.n(i),o=n(28),d=r.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.variant,i=e.pill,d=e.className,u=e.as,j=void 0===u?"span":u,b=Object(s.a)(e,["bsPrefix","variant","pill","className","as"]),p=Object(o.a)(n,"badge");return r.a.createElement(j,Object(c.a)({ref:t},b,{className:l()(d,p,i&&p+"-pill",a&&p+"-"+a)}))}));d.displayName="Badge",d.defaultProps={pill:!1};var u=d,j=n(139),b=n(140),p=n(119),h=n(2);t.a=function(e){var t=e.word,n=Object(p.a)().voiceHandler;return Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsxs)("div",{className:"d-flex flex-row justify-content-between mb-1",children:[Object(h.jsx)("span",{className:"fw-500",children:"Word"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("span",{className:"mr-2 text-muted",children:["/ ",t.spelling," /"]}),Object(h.jsx)("span",{className:"text-muted icons",onClick:function(){n(t.label)},children:Object(h.jsx)(j.a,{size:"20"})})]})]}),Object(h.jsx)("div",{className:"mb-2",children:Object(h.jsxs)("span",{className:"text-secondary",children:[t.label," ",(null===t||void 0===t?void 0:t.category)?"("+t.category+")":"",(null===t||void 0===t?void 0:t.comparative)?", "+t.comparative:"",(null===t||void 0===t?void 0:t.superlative)?", "+t.superlative:"",(null===t||void 0===t?void 0:t.past)?", "+t.past:"",(null===t||void 0===t?void 0:t.pastParticipal)?", "+t.pastParticipal:""]})}),Object(h.jsx)("h6",{className:"text-dark",children:"Definition"}),Object(h.jsx)("p",{className:"text-secondary mb-2",children:t.definition}),Object(h.jsx)("h6",{children:"Examples"}),t.examples.map((function(e,n){return Object(h.jsxs)("p",{className:"text-secondary mb-2",children:[Object(h.jsx)("span",{className:"mr-2",children:Object(h.jsx)(b.a,{})}),e]},t.id+"exmp"+n)})),(null===t||void 0===t?void 0:t.synonyms)&&""!==t.synonyms[0]&&Object(h.jsxs)(r.a.Fragment,{children:[Object(h.jsx)("h6",{children:"Synonyms"}),Object(h.jsx)("div",{className:"d-flex flex-row flex-wrap",children:t.synonyms.map((function(e,n){return Object(h.jsx)(u,{className:"px-3 py-1 mr-2",variant:"info",children:e},t.id+"synonym"+n)}))})]})]})}},139:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(3),s=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.size,c=l(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},c),r.a.createElement("path",{d:"M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"}),r.a.createElement("path",{d:"M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"}),r.a.createElement("path",{d:"M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39L6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.defaultProps={color:"currentColor",size:"1em"},t.a=o},140:function(e,t,n){"use strict";var a=n(1),r=n.n(a),c=n(3),s=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=Object(a.forwardRef)((function(e,t){var n=e.color,a=e.size,c=l(e,["color","size"]);return r.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:a,height:a,fill:n},c),r.a.createElement("path",{d:"M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),r.a.createElement("path",{d:"M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.defaultProps={color:"currentColor",size:"1em"},t.a=o},354:function(e,t,n){"use strict";n.r(t);var a=n(23),r=n.n(a),c=n(31),s=n(1),i=n.n(s),l=n(194),o=n(120),d=n(20),u=n(114),j=n(117),b=n(118),p=n(366),h=n(63),f=n(59),m=n(139),O=n(119),v=n(35),x=n(115),y=n(112),g=n(4),C=function(e,t){return{type:g.Q,payload:t,id:e}},w=function(e){return{type:g.n,id:e}},N=n(2),S={label:"",definition:"",examples:["","",""],synonyms:["",""],translation:"",spelling:"",comparative:"",superlative:""},k=b.b().shape({label:b.d().required("This field is required").min(2,"too short").max(40,"too much"),definition:b.d().required("This field is required"),translation:b.d().required("This field is required"),examples:b.a().of(b.d().required()),synonyms:b.a().of(b.d()),spelling:b.d().required("This is a required field"),comparative:b.d().required("This field is required"),superlative:b.d().required("This field is required")}),E=function(e){var t=e.handleToogle,n=e.saveByKey,a=Object(v.b)().dispatch,s=Object(O.a)().voiceHandler,l=Object(x.a)(),o=l.Snackbar,b=l.showMsg,C=function(e){e&&s(e)},w=function(){var e=Object(c.a)(r.a.mark((function e(t,c){var s,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Object(y.a)(),e.next=4,n(Object(d.a)(Object(d.a)({},t),{},{id:s}),s);case 4:(i=e.sent).success?(b("created",i.message),a((r=Object(d.a)(Object(d.a)({},t),{},{id:s}),{type:g.a,payload:r})),c()):b("Failed to Created","Failed to persist","danger"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var r}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(j.b,{initialValues:S,onSubmit:function(e,t){var n=t.resetForm;return w(e,n)},validationSchema:k,children:function(e){var n=e.handleBlur,a=e.handleChange,r=e.handleSubmit,c=e.errors,s=e.touched,l=e.values;return Object(N.jsxs)(p.a,{onSubmit:r,children:[Object(N.jsx)(u.b,{handleToggle:t,title:"New Adjective"}),Object(N.jsxs)(h.a,{className:"py-3",children:[Object(N.jsxs)(p.a.Group,{children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Label"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return C(l.label)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"a word",autoComplete:"off",name:"label",size:"sm",onChange:a,onBlur:n,value:l.label,isInvalid:s.label&&!!c.label}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.label})]}),Object(N.jsxs)(p.a.Row,{children:[Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Comparative Form"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return C(l.comparative)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"Enter the comparative form",autoComplete:"off",name:"comparative",size:"sm",onChange:a,onBlur:n,value:l.comparative,isInvalid:s.comparative&&!!c.comparative}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.comparative})]}),Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Superlative Form"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return C(l.superlative)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"Enter the superlative form",autoComplete:"off",name:"superlative",size:"sm",onChange:a,onBlur:n,value:l.superlative,isInvalid:s.superlative&&!!c.superlative}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.superlative})]})]}),Object(N.jsxs)(p.a.Row,{children:[Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsx)(p.a.Label,{children:"Arabic Translation"}),Object(N.jsx)(p.a.Control,{placeholder:"translate to arabic",autoComplete:"off",name:"translation",size:"sm",onChange:a,onBlur:n,value:l.translation,isInvalid:s.translation&&!!c.translation}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.translation})]}),Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Spelling"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return C(l.spelling)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"Spelling",autoComplete:"off",name:"spelling",size:"sm",onChange:a,onBlur:n,value:l.spelling,isInvalid:s.spelling&&!!c.spelling}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.spelling})]})]}),Object(N.jsx)(j.a,{name:"synonyms",children:function(){return Object(N.jsx)(i.a.Fragment,{children:l.synonyms.length>0&&Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("h6",{children:"Synonyms"}),Object(N.jsx)("small",{className:"text-secondary",children:"Enter two synonyms related to inserted word (this section is optional). "})]}),Object(N.jsx)(p.a.Row,{children:l.synonyms.map((function(e,t){return Object(N.jsxs)(p.a.Group,{as:f.a,xs:"6",children:[Object(N.jsxs)(p.a.Label,{children:["Synonym ",t+1,": "]}),Object(N.jsx)(p.a.Control,{placeholder:"synonym",size:"sm",autoComplete:"off",name:"synonyms.".concat(t),onChange:a,onBlur:n,value:l.synonyms[t]})]},"syno"+t)}))})]})})}}),Object(N.jsxs)(p.a.Group,{children:[Object(N.jsx)(p.a.Label,{children:"Definition / Meaning"}),Object(N.jsx)(p.a.Control,{as:"textarea",placeholder:"word definition",size:"sm",autoComplete:"off",name:"definition",onChange:a,onBlur:n,value:l.definition,isInvalid:s.definition&&!!c.definition}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.definition})]}),Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("h6",{children:"Examples"}),Object(N.jsx)("small",{className:"text-secondary",children:"Enter three sentences using the word that you would learn"})]}),Object(N.jsx)(j.a,{name:"examples",children:function(){return Object(N.jsx)("div",{children:l.examples&&l.examples.length>0&&l.examples.map((function(e,t){return Object(N.jsxs)(p.a.Group,{children:[Object(N.jsxs)(p.a.Label,{children:["Sentence ",t+1,": "]}),Object(N.jsx)(p.a.Control,{name:"examples.".concat(t),as:"textarea",placeholder:"We are about writing sentence number "+(t+1),size:"sm",autoComplete:"off",onChange:a,onBlur:n,value:l.examples[t],isInvalid:s.examples&&!!c.examples}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Sentence N\xb0 ".concat(t+1," is required")})]},"exp"+t)}))})}})]})]})}}),Object(N.jsx)(o,{})]})},z=n(128),T=n(125),A=b.b().shape({label:b.d().required("This field is required").min(2,"too short").max(40,"too much"),definition:b.d().required("This field is required"),translation:b.d().required("This field is required"),examples:b.a().of(b.d().required()),synonyms:b.a().of(b.d()),spelling:b.d().required("This is a required field"),comparative:b.d().required("This field is required"),superlative:b.d().required("This field is required")}),F=function(e){var t=e.handleToogle,n=e.word,a=e.findOneAndUpdate,s=Object(v.b)().dispatch,l=Object(O.a)().voiceHandler,o=Object(x.a)(),b=o.Snackbar,y=o.showMsg,g=function(e){e&&l(e)},w=function(){var e=Object(c.a)(r.a.mark((function e(t){var c,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=n.id||"",e.next=4,a(t,c);case 4:(i=e.sent).success?(y("Word updated",i.message),s(C(c,t))):y("Failed to update",i.message,"danger"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),S=Object(d.a)({},n);return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(j.b,{initialValues:S,onSubmit:function(e){return w(e)},validationSchema:A,children:function(e){var n=e.handleBlur,a=e.handleChange,r=e.handleSubmit,c=e.errors,s=e.touched,l=e.values;return Object(N.jsxs)(p.a,{onSubmit:r,children:[Object(N.jsx)(u.b,{handleToggle:t,title:"Edit Adjective"}),Object(N.jsxs)(h.a,{className:"py-3",children:[Object(N.jsxs)(p.a.Group,{children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Label"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return g(l.label)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"a word",autoComplete:"off",name:"label",size:"sm",onChange:a,onBlur:n,value:l.label,isInvalid:s.label&&!!c.label}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.label})]}),Object(N.jsxs)(p.a.Row,{children:[Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Comparative Form"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return g(l.comparative)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"Enter the comparative form",autoComplete:"off",name:"comparative",size:"sm",onChange:a,onBlur:n,value:l.comparative,isInvalid:s.comparative&&!!c.comparative}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.comparative})]}),Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Superlative Form"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return g(l.superlative)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"Enter the superlative form",autoComplete:"off",name:"superlative",size:"sm",onChange:a,onBlur:n,value:l.superlative,isInvalid:s.superlative&&!!c.superlative}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.superlative})]})]}),Object(N.jsxs)(p.a.Row,{children:[Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsx)(p.a.Label,{children:"Arabic Translation"}),Object(N.jsx)(p.a.Control,{placeholder:"translate to arabic",autoComplete:"off",name:"translation",size:"sm",onChange:a,onBlur:n,value:l.translation,isInvalid:s.translation&&!!c.translation}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.translation})]}),Object(N.jsxs)(p.a.Group,{as:f.a,children:[Object(N.jsxs)(p.a.Label,{children:[Object(N.jsx)("span",{children:"Spelling"}),Object(N.jsx)("span",{className:"ml-2 icons",onClick:function(){return g(l.spelling)},children:Object(N.jsx)(m.a,{size:"20"})})]}),Object(N.jsx)(p.a.Control,{placeholder:"Spelling",autoComplete:"off",name:"spelling",size:"sm",onChange:a,onBlur:n,value:l.spelling,isInvalid:s.spelling&&!!c.spelling}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.spelling})]})]}),Object(N.jsx)(j.a,{name:"synonyms",children:function(){return Object(N.jsx)(i.a.Fragment,{children:l.synonyms.length>0&&Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("h6",{children:"Synonyms"}),Object(N.jsx)("small",{className:"text-secondary",children:"Enter two synonyms related to inserted word (this section is optional). "})]}),Object(N.jsx)(p.a.Row,{children:l.synonyms.map((function(e,t){return Object(N.jsxs)(p.a.Group,{as:f.a,xs:"6",children:[Object(N.jsxs)(p.a.Label,{children:["Synonym ",t+1,": "]}),Object(N.jsx)(p.a.Control,{placeholder:"synonym",size:"sm",autoComplete:"off",name:"synonyms.".concat(t),onChange:a,onBlur:n,value:l.synonyms[t]})]},"syno"+t)}))})]})})}}),Object(N.jsxs)(p.a.Group,{children:[Object(N.jsx)(p.a.Label,{children:"Definition / Meaning"}),Object(N.jsx)(p.a.Control,{as:"textarea",placeholder:"word definition",size:"sm",autoComplete:"off",name:"definition",onChange:a,onBlur:n,value:l.definition,isInvalid:s.definition&&!!c.definition}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:c.definition})]}),Object(N.jsxs)("div",{className:"mb-2",children:[Object(N.jsx)("h6",{children:"Examples"}),Object(N.jsx)("small",{className:"text-secondary",children:"Enter three sentences using the word that you would learn"})]}),Object(N.jsx)(j.a,{name:"examples",children:function(){return Object(N.jsx)("div",{children:l.examples&&l.examples.length>0&&l.examples.map((function(e,t){return Object(N.jsxs)(p.a.Group,{children:[Object(N.jsxs)(p.a.Label,{children:["Sentence ",t+1,": "]}),Object(N.jsx)(p.a.Control,{name:"examples.".concat(t),as:"textarea",placeholder:"We are about writing sentence number "+(t+1),size:"sm",autoComplete:"off",onChange:a,onBlur:n,value:l.examples[t],isInvalid:s.examples&&!!c.examples}),Object(N.jsx)(p.a.Control.Feedback,{type:"invalid",children:"Sentence N\xb0 ".concat(t+1," is required")})]},"exp"+t)}))})}})]})]})}}),Object(N.jsx)(b,{})]})},I=n(113),P=n(36),B=n(121),L=n(135),R=function(e){var t=e.word,n=e.findOneAndUpdate,a=e.findOneAndDelete;return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(L.a,{word:t}),Object(N.jsxs)("div",{className:"text-right",children:[Object(N.jsx)(q,{word:t,findOneAndUpdate:n}),Object(N.jsx)(M,{word:t,findOneAndDelete:a})]})]})},q=function(e){var t=e.word,n=e.findOneAndUpdate,a=Object(I.a)(),r=a.handleToggle,c=a.show;return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(l.a,{className:"mr-2",variant:"primary",size:"sm",onClick:r,children:"Update"}),Object(N.jsx)(u.a,{show:c,children:Object(N.jsx)(F,{word:t,handleToogle:r,findOneAndUpdate:n})})]})},M=function(e){var t=e.word,n=e.findOneAndDelete,a=Object(v.b)().dispatch,s=Object(o.a)({message:"Are you sure you want to remove this word? This cannot be undone.",onConfirmClick:function(){return j.apply(this,arguments)}}),d=s.ConfirmDialog,u=s.toggleConfirmMessage;function j(){return(j=Object(c.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(t.id||"");case 3:e.sent.success&&(u(),setTimeout((function(){a(w(t.id||""))}),0)),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(l.a,{variant:"danger",size:"sm",onClick:function(){u()},children:"Remove"}),Object(N.jsx)(d,{})]})};t.default=function(){var e=Object(P.c)((function(e){return e.adjectives})),t=Object(v.b)().dispatch,n=Object(B.b)(B.a.ADJECTIVES),a=n.find,r=n.findOneAndUpdate,c=n.findOneAndDelete,l=n.saveByKey;return Object(s.useEffect)((function(){a().then((function(e){var n;e.success?t((n=e.data,{type:g.A,payload:n})):console.log(e.message)})).catch((function(e){return console.error(e)}))}),[]),Object(N.jsxs)(i.a.Fragment,{children:[Object(N.jsx)(z.a,{title:"New Adjective",definition:"\r A noun is a word used to identify any of a class of people, places or things.\r ",children:function(e){return Object(N.jsx)(E,{handleToogle:e,saveByKey:l})}}),Object(N.jsx)(T.a,{dataSource:e,children:function(e){return Object(N.jsx)(R,{word:e,findOneAndUpdate:r,findOneAndDelete:c})}})]})}}}]);
//# sourceMappingURL=9.c5c50a65.chunk.js.map