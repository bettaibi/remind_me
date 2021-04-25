(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[20],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(26),a=n(1),c=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return{show:n,handleToggle:function(){c((function(e){return!e}))},handleShow:function(){c(!0)},handleHide:function(){c(!1)}}}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(20),a=n(26),c=n(1),s=n(21),i=n.n(s),o=n(361),l=n(2),u=function(e){var t=e.isShown,n=e.message,r=e.type,a=e.title,c=document.getElementById("portal");return i.a.createPortal(Object(l.jsxs)(o.a,{className:"m-3 fixed-top",show:t,variant:r,style:{zIndex:9999999999},children:[Object(l.jsx)("h5",{children:a}),Object(l.jsx)("p",{className:"m-0",children:n})]}),c)},d=function(){var e=Object(c.useState)({title:"",isShown:!1,message:"",type:"success"}),t=Object(a.a)(e,2),n=t[0],s=t[1];return{showMsg:function(e,t,a){s({isShown:!0,message:t,title:e,type:a||"success"}),setTimeout((function(){s(Object(r.a)(Object(r.a)({},n),{},{isShown:!1}))}),3e3)},Snackbar:Object(c.useCallback)((function(){return Object(l.jsx)(u,{message:n.message,isShown:n.isShown,type:n.type,title:n.title})}),[n])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var r=n(365),a=n(2),c=function(e){var t=e.show,n=e.handleClose,c=e.centered,s=e.size,i=e.children,o=e.headerText;return Object(a.jsxs)(r.a,{show:t,onHide:n,centered:c,size:s,children:[o&&Object(a.jsx)(r.a.Header,{closeButton:!0,children:Object(a.jsx)("h6",{className:"m-0 align-self-center",children:o})}),Object(a.jsx)(r.a.Body,{children:i})]})}},119:function(e,t,n){"use strict";var r=n(26),a=n(1);function c(){var e=localStorage.getItem("a_voice");return"string"===typeof e?parseInt(e):0}t.a=function(){var e=Object(a.useRef)(window.speechSynthesis),t=Object(a.useState)(c),n=Object(r.a)(t,2),s=n[0],i=n[1],o=Object(a.useState)([]),l=Object(r.a)(o,2),u=l[0],d=l[1];Object(a.useEffect)((function(){var t=setTimeout((function(){var t=e.current.getVoices().filter((function(e){return e.lang.includes("en")}));d(t)}),2e3);return function(){clearTimeout(t)}}),[]);return{currentVoice:s,setAssistantVoice:function(){localStorage.setItem("a_voice",s.toString())},voiceHandler:function(t){var n=new SpeechSynthesisUtterance(t);s&&(n.voice=u[s]),e.current.speak(n)},changeAssistantVoice:function(e){i(e)},voices:u}}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(26),a=n(1),c=n(116),s=n(194),i=n(364),o=n(113),l=n(2),u=function(e){var t=Object(o.a)(),n=t.handleToggle,u=t.show,d=t.handleHide,b=Object(a.useState)(!1),h=Object(r.a)(b,2),f=h[0],p=h[1];Object(a.useEffect)((function(){return function(){p(!1)}}),[]);var j=e.message,O=e.onConfirmClick;return{ConfirmDialog:Object(a.useCallback)((function(){return Object(l.jsxs)(c.a,{show:u,centered:!0,size:"sm",handleClose:d,children:[Object(l.jsx)("h6",{children:"Confirm"}),Object(l.jsx)("p",{children:j}),Object(l.jsxs)("div",{className:"text-right",children:[Object(l.jsx)(s.a,{className:"mr-2",variant:"secondary",onClick:d,size:"sm",children:"Close"}),Object(l.jsx)(s.a,{variant:"primary",size:"sm",onClick:O,disabled:f,children:f?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(l.jsx)("span",{className:"ml-2",children:"Loading..."})]}):"Confirm"})]})]})}),[u,j,O,d,f]),toggleConfirmMessage:function(){n()},setIsloading:p}}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return r}));var r={};n.r(r),n.d(r,"USERS",(function(){return b})),n.d(r,"VERBS",(function(){return h})),n.d(r,"ADJECTIVES",(function(){return f})),n.d(r,"ADVERBS",(function(){return p})),n.d(r,"NOUNS",(function(){return j})),n.d(r,"PHRASALVERBS",(function(){return O})),n.d(r,"LINKERS",(function(){return v})),n.d(r,"TOPICS",(function(){return m})),n.d(r,"THINGS",(function(){return x})),n.d(r,"NOTES",(function(){return y})),n.d(r,"IDIOMS",(function(){return g})),n.d(r,"TENSES",(function(){return w})),n.d(r,"GAMES",(function(){return C})),n.d(r,"QA",(function(){return S})),n.d(r,"TODOS",(function(){return N}));var a=n(20),c=n(23),s=n.n(c),i=n(31),o=new(n(131).a)("remindMe");o.config.debug=!1;var l=o,u=function(e,t,n){return{message:t,success:e,data:n}},d=function(e){function t(){return(t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).add(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been added",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to create"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(i.a)(s.a.mark((function t(n,r){var c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n.label.trim().toLowerCase(),t.next=4,l.collection(e).doc({label:c}).get();case 4:if(!t.sent){t.next=7;break}return t.abrupt("return",u(!1,"The word ".concat(c," already exsist!")));case 7:return t.next=9,l.collection(e).add(Object(a.a)(Object(a.a)({},n),{},{label:c}),r);case 9:return i=t.sent,t.abrupt("return",u(!0,"New record has been added",i));case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to persist a new Word"));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function r(){return(r=Object(i.a)(s.a.mark((function t(n,r){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:r}).update(Object(a.a)(Object(a.a)({},n),{},{label:n.label.trim().toLowerCase()}));case 3:return c=t.sent,t.abrupt("return",u(!0,"New record has been updated",c));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to update"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function c(){return(c=Object(i.a)(s.a.mark((function t(n,r){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:r}).set(n);case 3:return a=t.sent,t.abrupt("return",u(!0,"New record has been overwrited",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to overwrite"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:n}).delete();case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been removed",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).delete();case 3:return t.abrupt("return",u(!0,"The whole collection has been removed"));case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).set(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"Init the whole collection",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).get();case 3:return n=t.sent,t.abrupt("return",u(!0,"list of data",n));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:n}).get();case 3:return r=t.sent,t.abrupt("return",u(!0,"find a document",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return{save:function(e){return t.apply(this,arguments)},saveByKey:function(e,t){return n.apply(this,arguments)},findOneAndUpdate:function(e,t){return r.apply(this,arguments)},setById:function(e,t){return c.apply(this,arguments)},findOneAndDelete:function(e){return o.apply(this,arguments)},drop:function(){return d.apply(this,arguments)},init:function(e){return b.apply(this,arguments)},find:function(){return h.apply(this,arguments)},findOne:function(e){return f.apply(this,arguments)}}},b="USERS",h="VERBS",f="ADJECTIVES",p="ADVERBS",j="NOUNS",O="PHRASALVERBS",v="LINKERS",m="TOPICS",x="THINGS",y="NOTES",g="IDIOMS",w="TENSES",C="GAMES",S="QA",N="TODOS"},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return C}));var r=n(1),a=n.n(r),c=n(7),s=n(9),i=n(19),o=n.n(i),l=n(132),u=n(28),d=a.a.createContext(null),b=a.a.createContext(null);b.displayName="AccordionContext";var h=b;var f=a.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"button":n,o=e.children,l=e.eventKey,u=e.onClick,b=Object(s.a)(e,["as","children","eventKey","onClick"]),f=function(e,t){var n=Object(r.useContext)(h),a=Object(r.useContext)(d);return function(r){a&&a(e===n?null:e,r),t&&t(r)}}(l,u);return"button"===i&&(b.type="button"),a.a.createElement(i,Object(c.a)({ref:t,onClick:f},b),o)})),p=n(89),j=a.a.forwardRef((function(e,t){var n=e.children,i=e.eventKey,o=Object(s.a)(e,["children","eventKey"]),l=Object(r.useContext)(h);return a.a.createElement(d.Provider,{value:null},a.a.createElement(p.a,Object(c.a)({ref:t,in:l===i},o),a.a.createElement("div",null,a.a.Children.only(n))))}));j.displayName="AccordionCollapse";var O=j,v=a.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),r=n.as,i=void 0===r?"div":r,b=n.activeKey,f=n.bsPrefix,p=n.children,j=n.className,O=n.onSelect,v=Object(s.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),m=o()(j,Object(u.a)(f,"accordion"));return a.a.createElement(h.Provider,{value:b||null},a.a.createElement(d.Provider,{value:O||null},a.a.createElement(i,Object(c.a)({ref:t},v,{className:m}),p)))}));v.displayName="Accordion",v.Toggle=f,v.Collapse=O;var m=v,x=n(133),y=n(103),g=n(2),w=function(e){var t=e.children;return Object(g.jsx)(m,{defaultActiveKey:"ev0",className:"mt-3",children:t})},C=function(e){var t=e.children,n=e.eventKey,r=e.headerText;return Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(m.Toggle,{className:"bg-light d-flex flex-row justify-content-between",as:x.a.Header,eventKey:n,children:[Object(g.jsx)("p",{className:"m-0 text-capitalize",children:r}),Object(g.jsx)(y.a,{})]}),Object(g.jsx)(m.Collapse,{eventKey:n,children:Object(g.jsx)(x.a.Body,{children:t})})]})}},133:function(e,t,n){"use strict";var r=n(7),a=n(9),c=n(19),s=n.n(c),i=n(1),o=n.n(i),l=n(28),u=n(126),d=n(127),b=o.a.createContext(null);b.displayName="CardContext";var h=b,f=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(a.a)(e,["bsPrefix","className","variant","as"]),h=Object(l.a)(n,"card-img");return o.a.createElement(d,Object(r.a)({ref:t,className:s()(i?h+"-"+i:h,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var p=f,j=Object(d.a)("h5"),O=Object(d.a)("h6"),v=Object(u.a)("card-body"),m=Object(u.a)("card-title",{Component:j}),x=Object(u.a)("card-subtitle",{Component:O}),y=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),S=Object(u.a)("card-img-overlay"),N=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,p=e.children,j=e.as,O=void 0===j?"div":j,m=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(n,"card"),y=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(h.Provider,{value:y},o.a.createElement(O,Object(r.a)({ref:t},m,{className:s()(c,x,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?o.a.createElement(v,null,p):p))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=p,N.Title=m,N.Subtitle=x,N.Body=v,N.Link=y,N.Text=g,N.Header=w,N.Footer=C,N.ImgOverlay=S;t.a=N},138:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(3),s=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=e.size,c=o(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n},c),a.a.createElement("path",{d:"M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"}),a.a.createElement("path",{d:"M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"}),a.a.createElement("path",{d:"M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39L6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.defaultProps={color:"currentColor",size:"1em"},t.a=l},357:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n.n(r),c=n(31),s=n(1),i=n.n(s),o=n(194),l=n(36),u=n(121),d=n(120),b=n(116),h=n(115),f=n(113),p=n(35),j=n(4),O=function(e){return{type:j.x,id:e}},v=n(20),m=n(117),x=n(118),y=n(366),g=n(2),w=x.b().shape({label:x.d().required("This field is required")}),C=function(e){var t=e.handleToogle,n=e.findOneAndUpdate,r=e.showMsg,s=e.word,i=Object(p.b)().dispatch,l=Object(v.a)({},s),u=function(){var e=Object(c.a)(a.a.mark((function e(c){var o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=s.id||"",e.next=4,n(c,o);case 4:(l=e.sent).success?(r("Todo updated",l.message),i((a=o,u=c,{type:j.Z,payload:u,id:a})),setTimeout((function(){t()}),0)):r("Failed to update",l.message,"danger"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var a,u}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsx)(m.b,{initialValues:l,onSubmit:function(e){return u(e)},validationSchema:w,children:function(e){var n=e.handleBlur,r=e.handleChange,a=e.handleSubmit,c=e.errors,s=e.touched,i=e.values;return Object(g.jsxs)(y.a,{onSubmit:a,children:[Object(g.jsxs)(y.a.Group,{children:[Object(g.jsx)(y.a.Label,{children:"label"}),Object(g.jsx)(y.a.Control,{spellCheck:"true",placeholder:"Write something...",autoComplete:"off",name:"label",size:"sm",onChange:r,onBlur:n,value:i.label,isInvalid:s.label&&!!c.label}),Object(g.jsx)(y.a.Control.Feedback,{type:"invalid",children:c.label})]}),Object(g.jsxs)(y.a.Group,{children:[Object(g.jsx)(y.a.Label,{children:"Description"}),Object(g.jsx)(y.a.Control,{as:"textarea",spellCheck:"true",placeholder:"let me explain",size:"sm",autoComplete:"off",name:"description",onChange:r,onBlur:n,value:i.description})]}),Object(g.jsxs)("div",{className:"text-right",children:[Object(g.jsx)(o.a,{variant:"secondary",size:"sm",onClick:t,children:"Close"}),Object(g.jsx)(o.a,{variant:"primary",className:"ml-2",size:"sm",type:"submit",children:"Save"})]})]})}})},S=n(112),N={label:"",description:""},k=x.b().shape({label:x.d().required("This field is required")}),T=function(e){var t=e.handleToogle,n=e.saveByKey,r=e.showMsg,s=Object(p.b)().dispatch,i=function(){var e=Object(c.a)(a.a.mark((function e(c,i){var o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=Object(S.a)(),e.next=4,n(Object(v.a)(Object(v.a)({},c),{},{id:o}),o);case 4:(l=e.sent).success?(r("Todo created",l.message),s((a=Object(v.a)(Object(v.a)({},c),{},{id:o}),{type:j.k,payload:a})),setTimeout((function(){t()}),0),i()):r("Failed to Created",l.message,"warning"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var a}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(g.jsx)(m.b,{initialValues:N,onSubmit:function(e,t){var n=t.resetForm;return i(e,n)},validationSchema:k,children:function(e){var n=e.handleBlur,r=e.handleChange,a=e.handleSubmit,c=e.errors,s=e.touched,i=e.values;return Object(g.jsxs)(y.a,{onSubmit:a,children:[Object(g.jsxs)(y.a.Group,{children:[Object(g.jsx)(y.a.Label,{children:"label"}),Object(g.jsx)(y.a.Control,{spellCheck:"true",placeholder:"Write something...",autoComplete:"off",name:"label",size:"sm",onChange:r,onBlur:n,value:i.label,isInvalid:s.label&&!!c.label}),Object(g.jsx)(y.a.Control.Feedback,{type:"invalid",children:c.label})]}),Object(g.jsxs)(y.a.Group,{children:[Object(g.jsx)(y.a.Label,{children:"Description"}),Object(g.jsx)(y.a.Control,{spellCheck:"true",as:"textarea",placeholder:"let me explain",size:"sm",autoComplete:"off",name:"description",onChange:r,onBlur:n,value:i.description})]}),Object(g.jsxs)("div",{className:"text-right",children:[Object(g.jsx)(o.a,{variant:"secondary",size:"sm",onClick:t,children:"Close"}),Object(g.jsx)(o.a,{variant:"primary",className:"ml-2",size:"sm",type:"submit",children:"Save"})]})]})}})},A=n(122),E=n(138),z=n(119),I=function(e){var t=e.word,n=e.findOneAndUpdate,r=e.findOneAndDelete,a=Object(z.a)().voiceHandler;return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)("p",{className:"text-secondary",children:null===t||void 0===t?void 0:t.description}),Object(g.jsxs)("div",{className:"text-right mt-3",children:[Object(g.jsx)(D,{word:t,findOneAndUpdate:n}),Object(g.jsx)(P,{word:t,findOneAndDelete:r}),Object(g.jsxs)("button",{className:"btn btn-outline-secondary btn-sm ml-2",onClick:function(){try{a(t.label)}catch(e){throw e}},children:[Object(g.jsx)("span",{className:"mr-1",children:"Spell"}),Object(g.jsx)(E.a,{size:"18"})]})]})]})},B=function(e){var t=e.saveByKey,n=Object(f.a)(),r=n.show,a=n.handleHide,c=n.handleShow,s=Object(h.a)(),l=s.Snackbar,u=s.showMsg;return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)("div",{className:"text-right mb-3",children:Object(g.jsx)(o.a,{onClick:c,size:"sm",children:"ADD A NEW TODO"})}),Object(g.jsx)(b.a,{show:r,headerText:"New TODO",handleClose:a,centered:!1,children:Object(g.jsx)(T,{handleToogle:a,saveByKey:t,showMsg:u})}),Object(g.jsx)(l,{})]})},D=function(e){var t=e.word,n=e.findOneAndUpdate,r=Object(f.a)(),a=r.show,c=r.handleHide,s=r.handleShow,l=Object(h.a)(),u=l.Snackbar,d=l.showMsg;return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)(o.a,{className:"mr-2",variant:"primary",size:"sm",onClick:s,children:"Update"}),Object(g.jsx)(b.a,{show:a,headerText:"Edit TODO",handleClose:c,centered:!1,children:Object(g.jsx)(C,{word:t,handleToogle:c,findOneAndUpdate:n,showMsg:d})}),Object(g.jsx)(u,{})]})},P=function(e){var t=e.word,n=e.findOneAndDelete,r=Object(p.b)().dispatch,s=Object(d.a)({message:"Are you sure you want to remove this Idiom? This cannot be undone.",onConfirmClick:function(){return b.apply(this,arguments)}}),l=s.ConfirmDialog,u=s.toggleConfirmMessage;function b(){return(b=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(t.id||"");case 3:e.sent.success&&(u(),setTimeout((function(){r(O(t.id||""))}),0)),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)(o.a,{variant:"danger",size:"sm",onClick:function(){u()},children:"Remove"}),Object(g.jsx)(l,{})]})};t.default=function(){var e=Object(l.c)((function(e){return e.todos})),t=Object(p.b)().dispatch,n=Object(u.b)(u.a.TODOS),r=n.find,a=n.findOneAndUpdate,c=n.findOneAndDelete,o=n.saveByKey;return Object(s.useEffect)((function(){r().then((function(e){var n;e.success?t((n=e.data,{type:j.M,payload:n})):console.log(e.message)})).catch((function(e){return console.error(e)}))}),[]),Object(g.jsxs)(i.a.Fragment,{children:[Object(g.jsx)(B,{saveByKey:o}),Object(g.jsx)(A.b,{children:e.map((function(e,t){return Object(g.jsx)(A.a,{eventKey:"ev"+t,headerText:e.label,children:Object(g.jsx)(I,{word:e,findOneAndUpdate:a,findOneAndDelete:c})},e.id)}))})]})}}}]);
//# sourceMappingURL=20.36f75425.chunk.js.map