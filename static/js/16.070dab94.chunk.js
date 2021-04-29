(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[16],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(26),a=n(1),c=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return{show:n,handleToggle:function(){c((function(e){return!e}))},handleShow:function(){c(!0)},handleHide:function(){c(!1)}}}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));n(1);var r=n(21),a=n.n(r),c=n(194),s=n(2),i=function(e){var t=e.children,n=e.show,r=document.getElementById("portal");return n?a.a.createPortal(Object(s.jsx)("div",{className:"z-9999 full-page-container",onClick:function(e){e.stopPropagation()},style:{backgroundColor:"#fafafa"},children:Object(s.jsx)("div",{className:"overflow-auto",children:t})}),r):null},l=function(e){var t=e.title,n=e.handleToggle;return Object(s.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center justify-content-between sticky-top bg-light",children:[Object(s.jsx)("h6",{className:"m-0",children:t}),Object(s.jsxs)("div",{className:"text-right",children:[Object(s.jsx)(c.a,{variant:"secondary",className:"mr-2",size:"sm",onClick:n,children:"Close"}),Object(s.jsx)(c.a,{variant:"primary",size:"sm",type:"submit",children:"Save"})]})]})}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(20),a=n(26),c=n(1),s=n(21),i=n.n(s),l=n(361),o=n(2),u=function(e){var t=e.isShown,n=e.message,r=e.type,a=e.title,c=document.getElementById("portal");return i.a.createPortal(Object(o.jsxs)(l.a,{className:"m-3 fixed-top",show:t,variant:r,style:{zIndex:9999999999},children:[Object(o.jsx)("h5",{children:a}),Object(o.jsx)("p",{className:"m-0",children:n})]}),c)},d=function(){var e=Object(c.useState)({title:"",isShown:!1,message:"",type:"success"}),t=Object(a.a)(e,2),n=t[0],s=t[1];return{showMsg:function(e,t,a){s({isShown:!0,message:t,title:e,type:a||"success"}),setTimeout((function(){s(Object(r.a)(Object(r.a)({},n),{},{isShown:!1}))}),3e3)},Snackbar:Object(c.useCallback)((function(){return Object(o.jsx)(u,{message:n.message,isShown:n.isShown,type:n.type,title:n.title})}),[n])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var r=n(365),a=n(2),c=function(e){var t=e.show,n=e.handleClose,c=e.centered,s=e.size,i=e.children,l=e.headerText;return Object(a.jsxs)(r.a,{show:t,onHide:n,centered:c,size:s,children:[l&&Object(a.jsx)(r.a.Header,{closeButton:!0,children:Object(a.jsx)("h6",{className:"m-0 align-self-center",children:l})}),Object(a.jsx)(r.a.Body,{children:i})]})}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(26),a=n(1),c=n(116),s=n(194),i=n(364),l=n(113),o=n(2),u=function(e){var t=Object(l.a)(),n=t.handleToggle,u=t.show,d=t.handleHide,b=Object(a.useState)(!1),j=Object(r.a)(b,2),f=j[0],h=j[1];Object(a.useEffect)((function(){return function(){h(!1)}}),[]);var p=e.message,O=e.onConfirmClick;return{ConfirmDialog:Object(a.useCallback)((function(){return Object(o.jsxs)(c.a,{show:u,centered:!0,size:"sm",handleClose:d,children:[Object(o.jsx)("h6",{children:"Confirm"}),Object(o.jsx)("p",{children:p}),Object(o.jsxs)("div",{className:"text-right",children:[Object(o.jsx)(s.a,{className:"mr-2",variant:"secondary",onClick:d,size:"sm",children:"Close"}),Object(o.jsx)(s.a,{variant:"primary",size:"sm",onClick:O,disabled:f,children:f?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(o.jsx)("span",{className:"ml-2",children:"Loading..."})]}):"Confirm"})]})]})}),[u,p,O,d,f]),toggleConfirmMessage:function(){n()},setIsloading:h}}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return r}));var r={};n.r(r),n.d(r,"USERS",(function(){return b})),n.d(r,"VERBS",(function(){return j})),n.d(r,"ADJECTIVES",(function(){return f})),n.d(r,"ADVERBS",(function(){return h})),n.d(r,"NOUNS",(function(){return p})),n.d(r,"PHRASALVERBS",(function(){return O})),n.d(r,"LINKERS",(function(){return m})),n.d(r,"TOPICS",(function(){return v})),n.d(r,"THINGS",(function(){return x})),n.d(r,"NOTES",(function(){return g})),n.d(r,"IDIOMS",(function(){return y})),n.d(r,"TENSES",(function(){return w})),n.d(r,"GAMES",(function(){return C})),n.d(r,"QA",(function(){return S})),n.d(r,"TODOS",(function(){return N}));var a=n(20),c=n(23),s=n.n(c),i=n(31),l=new(n(131).a)("remindMe");l.config.debug=!1;var o=l,u=function(e,t,n){return{message:t,success:e,data:n}},d=function(e){function t(){return(t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).add(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been added",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to create"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(i.a)(s.a.mark((function t(n,r){var c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n.label.trim().toLowerCase(),t.next=4,o.collection(e).doc({label:c}).get();case 4:if(!t.sent){t.next=7;break}return t.abrupt("return",u(!1,"The word ".concat(c," already exsist!")));case 7:return t.next=9,o.collection(e).add(Object(a.a)(Object(a.a)({},n),{},{label:c}),r);case 9:return i=t.sent,t.abrupt("return",u(!0,"New record has been added",i));case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to persist a new Word"));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function r(){return(r=Object(i.a)(s.a.mark((function t(n,r){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:r}).update(Object(a.a)(Object(a.a)({},n),{},{label:n.label.trim().toLowerCase()}));case 3:return c=t.sent,t.abrupt("return",u(!0,"New record has been updated",c));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to update"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function c(){return(c=Object(i.a)(s.a.mark((function t(n,r){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:r}).set(n);case 3:return a=t.sent,t.abrupt("return",u(!0,"New record has been overwrited",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to overwrite"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(){return(l=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:n}).delete();case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been removed",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).delete();case 3:return t.abrupt("return",u(!0,"The whole collection has been removed"));case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).set(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"Init the whole collection",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function j(){return(j=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).get();case 3:return n=t.sent,t.abrupt("return",u(!0,"list of data",n));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(){return(f=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:n}).get();case 3:return r=t.sent,t.abrupt("return",u(!0,"find a document",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return{save:function(e){return t.apply(this,arguments)},saveByKey:function(e,t){return n.apply(this,arguments)},findOneAndUpdate:function(e,t){return r.apply(this,arguments)},setById:function(e,t){return c.apply(this,arguments)},findOneAndDelete:function(e){return l.apply(this,arguments)},drop:function(){return d.apply(this,arguments)},init:function(e){return b.apply(this,arguments)},find:function(){return j.apply(this,arguments)},findOne:function(e){return f.apply(this,arguments)}}},b="USERS",j="VERBS",f="ADJECTIVES",h="ADVERBS",p="NOUNS",O="PHRASALVERBS",m="LINKERS",v="TOPICS",x="THINGS",g="NOTES",y="IDIOMS",w="TENSES",C="GAMES",S="QA",N="TODOS"},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(5),a=n(26),c=n(1),s=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),s=n[0];return{setTerm:n[1],filterHandler:function(){return""===s?Object(r.a)(e):Object(r.a)(e.filter((function(e){return e.label.toLowerCase().includes(s.toLowerCase())})))}}}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return C}));var r=n(1),a=n.n(r),c=n(7),s=n(9),i=n(19),l=n.n(i),o=n(132),u=n(28),d=a.a.createContext(null),b=a.a.createContext(null);b.displayName="AccordionContext";var j=b;var f=a.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"button":n,l=e.children,o=e.eventKey,u=e.onClick,b=Object(s.a)(e,["as","children","eventKey","onClick"]),f=function(e,t){var n=Object(r.useContext)(j),a=Object(r.useContext)(d);return function(r){a&&a(e===n?null:e,r),t&&t(r)}}(o,u);return"button"===i&&(b.type="button"),a.a.createElement(i,Object(c.a)({ref:t,onClick:f},b),l)})),h=n(89),p=a.a.forwardRef((function(e,t){var n=e.children,i=e.eventKey,l=Object(s.a)(e,["children","eventKey"]),o=Object(r.useContext)(j);return a.a.createElement(d.Provider,{value:null},a.a.createElement(h.a,Object(c.a)({ref:t,in:o===i},l),a.a.createElement("div",null,a.a.Children.only(n))))}));p.displayName="AccordionCollapse";var O=p,m=a.a.forwardRef((function(e,t){var n=Object(o.a)(e,{activeKey:"onSelect"}),r=n.as,i=void 0===r?"div":r,b=n.activeKey,f=n.bsPrefix,h=n.children,p=n.className,O=n.onSelect,m=Object(s.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),v=l()(p,Object(u.a)(f,"accordion"));return a.a.createElement(j.Provider,{value:b||null},a.a.createElement(d.Provider,{value:O||null},a.a.createElement(i,Object(c.a)({ref:t},m,{className:v}),h)))}));m.displayName="Accordion",m.Toggle=f,m.Collapse=O;var v=m,x=n(133),g=n(103),y=n(2),w=function(e){var t=e.children;return Object(y.jsx)(v,{defaultActiveKey:"ev0",className:"mt-3",children:t})},C=function(e){var t=e.children,n=e.eventKey,r=e.headerText;return Object(y.jsxs)(x.a,{children:[Object(y.jsxs)(v.Toggle,{className:"bg-light d-flex flex-row justify-content-between",as:x.a.Header,eventKey:n,children:[Object(y.jsx)("p",{className:"m-0 first-letter-capitalize",children:r}),Object(y.jsx)(g.a,{})]}),Object(y.jsx)(v.Collapse,{eventKey:n,children:Object(y.jsx)(x.a.Body,{children:t})})]})}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(5),a=n(26),c=n(1),s=n.n(c),i=n(7),l=n(9),o=n(19),u=n.n(o),d=n(28),b=n(128),j=s.a.forwardRef((function(e,t){var n=e.active,r=e.disabled,a=e.className,c=e.style,o=e.activeLabel,d=e.children,j=Object(l.a)(e,["active","disabled","className","style","activeLabel","children"]),f=n||r?"span":b.a;return s.a.createElement("li",{ref:t,style:c,className:u()(a,"page-item",{active:n,disabled:r})},s.a.createElement(f,Object(i.a)({className:"page-link",disabled:r},j),d,n&&o&&s.a.createElement("span",{className:"sr-only"},o)))}));j.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},j.displayName="PageItem";var f=j;function h(e,t,n){function r(e){var r=e.children,a=Object(l.a)(e,["children"]);return s.a.createElement(j,a,s.a.createElement("span",{"aria-hidden":"true"},r||t),s.a.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),r.displayName=e,r}var p=h("First","\xab"),O=h("Prev","\u2039","Previous"),m=h("Ellipsis","\u2026","More"),v=h("Next","\u203a"),x=h("Last","\xbb"),g=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,c=e.size,o=Object(l.a)(e,["bsPrefix","className","children","size"]),b=Object(d.a)(n,"pagination");return s.a.createElement("ul",Object(i.a)({ref:t},o,{className:u()(r,b,c&&b+"-"+c)}),a)}));g.First=p,g.Prev=O,g.Ellipsis=m,g.Item=f,g.Next=v,g.Last=x;var y=g,w=n(2),C=function(e,t){var n=Object(c.useState)(0),s=Object(a.a)(n,2),i=s[0],l=s[1],o=i*t,u=e.slice(o,o+t),d=e.length,b=Math.ceil(d/t),j=function(){i<b-1&&l((function(e){return e+1}))},f=function(){i>0&&l((function(e){return e-1}))},h=function(){l(0)},p=function(){l(b-1)};return{list:u,CustomPagination:function(){return Object(w.jsxs)(y,{children:[Object(w.jsx)(y.First,{disabled:0===i,onClick:h}),Object(w.jsx)(y.Prev,{disabled:0===i,onClick:f}),Object(r.a)(Array(b)).map((function(e,t){return Object(w.jsx)(y.Item,{active:i===t,onClick:function(){return function(e){l(e)}(t)},children:t+1},"slice"+t)})),Object(w.jsx)(y.Next,{disabled:i===b-1,onClick:j}),Object(w.jsx)(y.Last,{disabled:i===b-1,onClick:p})]})}}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(5),a=n(1),c=n.n(a),s=n(366),i=n(124),l=n(123),o=n(122),u=n(2),d=function(e){var t=e.dataSource,n=e.children,a=Object(o.a)(Object(r.a)(t)),d=a.setTerm,b=a.filterHandler,j=Object(i.a)(b(),5),f=j.CustomPagination,h=j.list;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(s.a,{children:Object(u.jsx)(s.a.Control,{type:"search",placeholder:"Are you looking for a word? filter here!",onChange:function(e){d(e.target.value)}})}),Object(u.jsx)(l.b,{children:Object(u.jsx)(c.a.Fragment,{children:h.map((function(e,t){return Object(u.jsx)(l.a,{eventKey:"ev"+t,headerText:e.label,children:n(e)},e.id)}))})}),h.length>0&&Object(u.jsx)("div",{className:"d-flex justify-content-end mt-3",children:Object(u.jsx)(f,{})})]})}},129:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n.n(r),c=n(114),s=n(194),i=n(113),l=n(2),o=function(e){var t=e.title,n=e.definition,r=e.children,o=Object(i.a)(),u=o.handleToggle,d=o.show;return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsxs)("div",{className:"border rounded p-3 bg-light mb-3",children:[Object(l.jsx)("p",{children:n}),Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)(s.a,{variant:"primary",size:"sm",onClick:u,children:t})})]}),Object(l.jsx)(c.a,{show:d,children:r(u)})]})}},133:function(e,t,n){"use strict";var r=n(7),a=n(9),c=n(19),s=n.n(c),i=n(1),l=n.n(i),o=n(28),u=n(126),d=n(127),b=l.a.createContext(null);b.displayName="CardContext";var j=b,f=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(a.a)(e,["bsPrefix","className","variant","as"]),j=Object(o.a)(n,"card-img");return l.a.createElement(d,Object(r.a)({ref:t,className:s()(i?j+"-"+i:j,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var h=f,p=Object(d.a)("h5"),O=Object(d.a)("h6"),m=Object(u.a)("card-body"),v=Object(u.a)("card-title",{Component:p}),x=Object(u.a)("card-subtitle",{Component:O}),g=Object(u.a)("card-link",{Component:"a"}),y=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),S=Object(u.a)("card-img-overlay"),N=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,h=e.children,p=e.as,O=void 0===p?"div":p,v=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(o.a)(n,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return l.a.createElement(j.Provider,{value:g},l.a.createElement(O,Object(r.a)({ref:t},v,{className:s()(c,x,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?l.a.createElement(m,null,h):h))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=h,N.Title=v,N.Subtitle=x,N.Body=m,N.Link=g,N.Text=y,N.Header=w,N.Footer=C,N.ImgOverlay=S;t.a=N},347:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n.n(r),c=n(31),s=n(1),i=n.n(s),l=n(194),o=n(36),u=n(120),d=n(114),b=n(113),j=n(4),f=function(e,t){return{type:j.Y,payload:t,id:e}},h=function(e){return{type:j.v,id:e}},p=n(125),O=n(129),m=n(20),v=n(366),x=n(63),g=n(117),y=n(118),w=n(35),C=n(115),S=n(2),N=y.b().shape({label:y.d().required("This field is required"),sentences:y.a().of(y.b().shape({sentence:y.d().required()}))}),E=function(e){var t=e.handleToogle,n=e.word,r=e.findOneAndUpdate,s=Object(w.b)().dispatch,l=Object(C.a)(),o=l.Snackbar,u=l.showMsg,b=function(){var e=Object(c.a)(a.a.mark((function e(t){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=n.id||"",e.next=4,r(t,c);case 4:(i=e.sent).success?(u("Word updated",i.message),s(f(c,t))):u("Failed to update",i.message,"danger"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),j=Object(m.a)({},n);return Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(g.b,{initialValues:j,onSubmit:function(e){return b(e)},validationSchema:N,children:function(e){var n=e.handleChange,r=e.handleBlur,a=e.handleSubmit,c=e.touched,s=e.errors,l=e.values;return Object(S.jsxs)(v.a,{onSubmit:a,children:[Object(S.jsx)(d.b,{handleToggle:t,title:"Edit Sentences"}),Object(S.jsxs)(x.a,{className:"py-3",children:[Object(S.jsxs)(v.a.Group,{children:[Object(S.jsx)(v.a.Label,{children:"Base Sentence"}),Object(S.jsx)(v.a.Control,{autoComplete:"off",size:"sm",placeholder:"Enter the base sentence",name:"label",onChange:n,onBlur:r,value:l.label,isInvalid:c.label&&!!s.label}),Object(S.jsx)(v.a.Control.Feedback,{type:"invalid",children:s.label})]}),Object(S.jsx)("div",{className:"p-3 bg-light border rounded",children:Object(S.jsx)(g.a,{name:"sentences",children:function(){return Object(S.jsx)(i.a.Fragment,{children:l.sentences.length>0&&l.sentences.map((function(e,t){return Object(S.jsxs)(v.a.Group,{children:[Object(S.jsx)(v.a.Label,{children:e.tense}),Object(S.jsx)(v.a.Control,{autoComplete:"off",size:"sm",placeholder:"Switch the base sentense to the ".concat(e.tense," tense"),name:"sentences.".concat(t,".sentence"),onChange:n,onBlur:r,value:l.sentences[t].sentence,isInvalid:c.sentences&&!!s.sentences}),Object(S.jsx)(v.a.Control.Feedback,{type:"invalid",children:"This field is required"})]},"tesen"+t)}))})}})})]})]})}}),Object(S.jsx)(o,{})]})},k=n(112),P={label:"",sentences:[{tense:"Present Simple",sentence:""},{tense:"Present Progressive",sentence:""},{tense:"Present Perfect",sentence:""},{tense:"Present Perfect Prgressive",sentence:""},{tense:"Past Simple",sentence:""},{tense:"Past Progressive",sentence:""},{tense:"Past Perfect",sentence:""},{tense:"Past Perfect Prgressive",sentence:""},{tense:"Future Simple",sentence:""},{tense:"Future Progressive",sentence:""},{tense:"Future Perfect",sentence:""},{tense:"Future Perfect Prgressive",sentence:""}]},T=y.b().shape({label:y.d().required("This field is required"),sentences:y.a().of(y.b().shape({sentence:y.d().required()}))}),F=function(e){var t=e.handleToogle,n=e.saveByKey,r=Object(w.b)().dispatch,s=Object(C.a)(),l=s.Snackbar,o=s.showMsg,u=function(){var e=Object(c.a)(a.a.mark((function e(t,c){var s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Object(k.a)(),e.next=4,n(Object(m.a)(Object(m.a)({},t),{},{id:s}),s);case 4:(i=e.sent).success?(o("created",i.message),r((a=Object(m.a)(Object(m.a)({},t),{},{id:s}),{type:j.i,payload:a})),c()):o("Failed to Created",i.message,"warning"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var a}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(g.b,{initialValues:P,onSubmit:function(e,t){var n=t.resetForm;return u(e,n)},validationSchema:T,children:function(e){var n=e.handleChange,r=e.handleBlur,a=e.handleSubmit,c=e.touched,s=e.errors,l=e.values;return Object(S.jsxs)(v.a,{onSubmit:a,children:[Object(S.jsx)(d.b,{handleToggle:t,title:"build Sentences"}),Object(S.jsxs)(x.a,{className:"py-3",children:[Object(S.jsxs)(v.a.Group,{children:[Object(S.jsx)(v.a.Label,{children:"Base Sentence"}),Object(S.jsx)(v.a.Control,{autoComplete:"off",size:"sm",placeholder:"Enter the base sentence",name:"label",onChange:n,onBlur:r,value:l.label,isInvalid:c.label&&!!s.label}),Object(S.jsx)(v.a.Control.Feedback,{type:"invalid",children:s.label})]}),Object(S.jsx)("div",{className:"p-3 bg-light border rounded",children:Object(S.jsx)(g.a,{name:"sentences",children:function(){return Object(S.jsx)(i.a.Fragment,{children:l.sentences.length>0&&l.sentences.map((function(e,t){return Object(S.jsxs)(v.a.Group,{children:[Object(S.jsx)(v.a.Label,{children:e.tense}),Object(S.jsx)(v.a.Control,{autoComplete:"off",size:"sm",placeholder:"Switch the base sentense to the ".concat(e.tense," tense"),name:"sentences.".concat(t,".sentence"),onChange:n,onBlur:r,value:l.sentences[t].sentence,isInvalid:c.sentences&&!!s.sentences}),Object(S.jsx)(v.a.Control.Feedback,{type:"invalid",children:"This field is required"})]},"tesen"+t)}))})}})})]})]})}}),Object(S.jsx)(l,{})]})},A=n(121),I=function(e){var t=e.word,n=e.findOneAndUpdate,r=e.findOneAndDelete;return Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(B,{word:t}),Object(S.jsxs)("div",{className:"text-right",children:[Object(S.jsx)(z,{word:t,findOneAndUpdate:n}),Object(S.jsx)(L,{word:t,findOneAndDelete:r})]})]})},B=function(e){var t=e.word;return Object(S.jsx)(i.a.Fragment,{children:(null===t||void 0===t?void 0:t.sentences)&&Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)("h6",{children:"All Sentences"}),t.sentences.map((function(e,n){return Object(S.jsxs)("details",{children:[Object(S.jsx)("summary",{style:{outline:"none"},children:e.tense}),Object(S.jsxs)("p",{className:"text-secondary mb-2",children:['"',e.sentence,'"']})]},t.id+"details"+n)}))]})})},z=function(e){var t=e.word,n=e.findOneAndUpdate,r=Object(b.a)(),a=r.handleToggle,c=r.show;return Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(l.a,{className:"mr-2",variant:"primary",size:"sm",onClick:a,children:"Update"}),Object(S.jsx)(d.a,{show:c,children:Object(S.jsx)(E,{word:t,handleToogle:a,findOneAndUpdate:n})})]})},L=function(e){var t=e.word,n=e.findOneAndDelete,r=Object(w.b)().dispatch,s=Object(u.a)({message:"Are you sure you want to remove? This cannot be undone.",onConfirmClick:function(){return b.apply(this,arguments)}}),o=s.ConfirmDialog,d=s.toggleConfirmMessage;function b(){return(b=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(t.id||"");case 3:e.sent.success&&(d(),setTimeout((function(){r(h(t.id||""))}),0)),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(l.a,{variant:"danger",size:"sm",onClick:function(){d()},children:"Remove"}),Object(S.jsx)(o,{})]})};t.default=function(){var e=Object(o.c)((function(e){return e.tenses})),t=Object(w.b)().dispatch,n=Object(A.b)(A.a.TENSES),r=n.find,a=n.findOneAndUpdate,c=n.findOneAndDelete,l=n.saveByKey;return Object(s.useEffect)((function(){r().then((function(e){var n;e.success?t((n=e.data,{type:j.K,payload:n})):console.log(e.message)})).catch((function(e){return console.error(e)}))}),[]),Object(S.jsxs)(i.a.Fragment,{children:[Object(S.jsx)(O.a,{title:"Add sentences",definition:"\r Master English tenses by adding a sentence and convert it each time to a new tense.\r ",children:function(e){return Object(S.jsx)(F,{handleToogle:e,saveByKey:l})}}),Object(S.jsx)(p.a,{dataSource:e,children:function(e){return Object(S.jsx)(I,{word:e,findOneAndUpdate:a,findOneAndDelete:c})}})]})}}}]);
//# sourceMappingURL=16.070dab94.chunk.js.map