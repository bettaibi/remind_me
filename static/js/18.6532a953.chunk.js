(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[18],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(26),a=n(1),c=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return{show:n,handleToggle:function(){c((function(e){return!e}))},handleShow:function(){c(!0)},handleHide:function(){c(!1)}}}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(20),a=n(26),c=n(1),i=n(21),s=n.n(i),o=n(361),l=n(2),u=function(e){var t=e.isShown,n=e.message,r=e.type,a=e.title,c=document.getElementById("portal");return s.a.createPortal(Object(l.jsxs)(o.a,{className:"m-3 fixed-top",show:t,variant:r,style:{zIndex:9999999999},children:[Object(l.jsx)("h5",{children:a}),Object(l.jsx)("p",{className:"m-0",children:n})]}),c)},d=function(){var e=Object(c.useState)({title:"",isShown:!1,message:"",type:"success"}),t=Object(a.a)(e,2),n=t[0],i=t[1];return{showMsg:function(e,t,a){i({isShown:!0,message:t,title:e,type:a||"success"}),setTimeout((function(){i(Object(r.a)(Object(r.a)({},n),{},{isShown:!1}))}),3e3)},Snackbar:Object(c.useCallback)((function(){return Object(l.jsx)(u,{message:n.message,isShown:n.isShown,type:n.type,title:n.title})}),[n])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var r=n(365),a=n(2),c=function(e){var t=e.show,n=e.handleClose,c=e.centered,i=e.size,s=e.children,o=e.headerText;return Object(a.jsxs)(r.a,{show:t,onHide:n,centered:c,size:i,children:[o&&Object(a.jsx)(r.a.Header,{closeButton:!0,children:Object(a.jsx)("h6",{className:"m-0 align-self-center",children:o})}),Object(a.jsx)(r.a.Body,{children:s})]})}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(26),a=n(1),c=n(116),i=n(194),s=n(364),o=n(113),l=n(2),u=function(e){var t=Object(o.a)(),n=t.handleToggle,u=t.show,d=t.handleHide,b=Object(a.useState)(!1),j=Object(r.a)(b,2),f=j[0],h=j[1];Object(a.useEffect)((function(){return function(){h(!1)}}),[]);var p=e.message,m=e.onConfirmClick;return{ConfirmDialog:Object(a.useCallback)((function(){return Object(l.jsxs)(c.a,{show:u,centered:!0,size:"sm",handleClose:d,children:[Object(l.jsx)("h6",{children:"Confirm"}),Object(l.jsx)("p",{children:p}),Object(l.jsxs)("div",{className:"text-right",children:[Object(l.jsx)(i.a,{className:"mr-2",variant:"secondary",onClick:d,size:"sm",children:"Close"}),Object(l.jsx)(i.a,{variant:"primary",size:"sm",onClick:m,disabled:f,children:f?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(l.jsx)("span",{className:"ml-2",children:"Loading..."})]}):"Confirm"})]})]})}),[u,p,m,d,f]),toggleConfirmMessage:function(){n()},setIsloading:h}}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return r}));var r={};n.r(r),n.d(r,"USERS",(function(){return b})),n.d(r,"VERBS",(function(){return j})),n.d(r,"ADJECTIVES",(function(){return f})),n.d(r,"ADVERBS",(function(){return h})),n.d(r,"NOUNS",(function(){return p})),n.d(r,"PHRASALVERBS",(function(){return m})),n.d(r,"LINKERS",(function(){return O})),n.d(r,"TOPICS",(function(){return v})),n.d(r,"THINGS",(function(){return x})),n.d(r,"NOTES",(function(){return y})),n.d(r,"IDIOMS",(function(){return g})),n.d(r,"TENSES",(function(){return w})),n.d(r,"GAMES",(function(){return C})),n.d(r,"QA",(function(){return S})),n.d(r,"TODOS",(function(){return N}));var a=n(20),c=n(23),i=n.n(c),s=n(31),o=new(n(131).a)("remindMe");o.config.debug=!1;var l=o,u=function(e,t,n){return{message:t,success:e,data:n}},d=function(e){function t(){return(t=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).add(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been added",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to create"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(s.a)(i.a.mark((function t(n,r){var c,s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n.label.trim().toLowerCase(),t.next=4,l.collection(e).doc({label:c}).get();case 4:if(!t.sent){t.next=7;break}return t.abrupt("return",u(!1,"The word ".concat(c," already exsist!")));case 7:return t.next=9,l.collection(e).add(Object(a.a)(Object(a.a)({},n),{},{label:c}),r);case 9:return s=t.sent,t.abrupt("return",u(!0,"New record has been added",s));case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to persist a new Word"));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function r(){return(r=Object(s.a)(i.a.mark((function t(n,r){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:r}).update(Object(a.a)(Object(a.a)({},n),{},{label:n.label.trim().toLowerCase()}));case 3:return c=t.sent,t.abrupt("return",u(!0,"New record has been updated",c));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to update"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function c(){return(c=Object(s.a)(i.a.mark((function t(n,r){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:r}).set(n);case 3:return a=t.sent,t.abrupt("return",u(!0,"New record has been overwrited",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to overwrite"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function o(){return(o=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:n}).delete();case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been removed",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(s.a)(i.a.mark((function t(){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).delete();case 3:return t.abrupt("return",u(!0,"The whole collection has been removed"));case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).set(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"Init the whole collection",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function j(){return(j=Object(s.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).get();case 3:return n=t.sent,t.abrupt("return",u(!0,"list of data",n));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(){return(f=Object(s.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l.collection(e).doc({id:n}).get();case 3:return r=t.sent,t.abrupt("return",u(!0,"find a document",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return{save:function(e){return t.apply(this,arguments)},saveByKey:function(e,t){return n.apply(this,arguments)},findOneAndUpdate:function(e,t){return r.apply(this,arguments)},setById:function(e,t){return c.apply(this,arguments)},findOneAndDelete:function(e){return o.apply(this,arguments)},drop:function(){return d.apply(this,arguments)},init:function(e){return b.apply(this,arguments)},find:function(){return j.apply(this,arguments)},findOne:function(e){return f.apply(this,arguments)}}},b="USERS",j="VERBS",f="ADJECTIVES",h="ADVERBS",p="NOUNS",m="PHRASALVERBS",O="LINKERS",v="TOPICS",x="THINGS",y="NOTES",g="IDIOMS",w="TENSES",C="GAMES",S="QA",N="TODOS"},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(5),a=n(26),c=n(1),i=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),i=n[0];return{setTerm:n[1],filterHandler:function(){return""===i?Object(r.a)(e):Object(r.a)(e.filter((function(e){return e.label.toLowerCase().includes(i.toLowerCase())})))}}}},123:function(e,t,n){"use strict";n.d(t,"b",(function(){return w})),n.d(t,"a",(function(){return C}));var r=n(1),a=n.n(r),c=n(7),i=n(9),s=n(19),o=n.n(s),l=n(132),u=n(28),d=a.a.createContext(null),b=a.a.createContext(null);b.displayName="AccordionContext";var j=b;var f=a.a.forwardRef((function(e,t){var n=e.as,s=void 0===n?"button":n,o=e.children,l=e.eventKey,u=e.onClick,b=Object(i.a)(e,["as","children","eventKey","onClick"]),f=function(e,t){var n=Object(r.useContext)(j),a=Object(r.useContext)(d);return function(r){a&&a(e===n?null:e,r),t&&t(r)}}(l,u);return"button"===s&&(b.type="button"),a.a.createElement(s,Object(c.a)({ref:t,onClick:f},b),o)})),h=n(89),p=a.a.forwardRef((function(e,t){var n=e.children,s=e.eventKey,o=Object(i.a)(e,["children","eventKey"]),l=Object(r.useContext)(j);return a.a.createElement(d.Provider,{value:null},a.a.createElement(h.a,Object(c.a)({ref:t,in:l===s},o),a.a.createElement("div",null,a.a.Children.only(n))))}));p.displayName="AccordionCollapse";var m=p,O=a.a.forwardRef((function(e,t){var n=Object(l.a)(e,{activeKey:"onSelect"}),r=n.as,s=void 0===r?"div":r,b=n.activeKey,f=n.bsPrefix,h=n.children,p=n.className,m=n.onSelect,O=Object(i.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),v=o()(p,Object(u.a)(f,"accordion"));return a.a.createElement(j.Provider,{value:b||null},a.a.createElement(d.Provider,{value:m||null},a.a.createElement(s,Object(c.a)({ref:t},O,{className:v}),h)))}));O.displayName="Accordion",O.Toggle=f,O.Collapse=m;var v=O,x=n(133),y=n(103),g=n(2),w=function(e){var t=e.children;return Object(g.jsx)(v,{defaultActiveKey:"ev0",className:"mt-3",children:t})},C=function(e){var t=e.children,n=e.eventKey,r=e.headerText;return Object(g.jsxs)(x.a,{children:[Object(g.jsxs)(v.Toggle,{className:"bg-light d-flex flex-row justify-content-between",as:x.a.Header,eventKey:n,children:[Object(g.jsx)("p",{className:"m-0 first-letter-capitalize",children:r}),Object(g.jsx)(y.a,{})]}),Object(g.jsx)(v.Collapse,{eventKey:n,children:Object(g.jsx)(x.a.Body,{children:t})})]})}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n(26),a=n(1),c=n.n(a),i=n(7),s=n(9),o=n(19),l=n.n(o),u=n(28),d=n(128),b=c.a.forwardRef((function(e,t){var n=e.active,r=e.disabled,a=e.className,o=e.style,u=e.activeLabel,b=e.children,j=Object(s.a)(e,["active","disabled","className","style","activeLabel","children"]),f=n||r?"span":d.a;return c.a.createElement("li",{ref:t,style:o,className:l()(a,"page-item",{active:n,disabled:r})},c.a.createElement(f,Object(i.a)({className:"page-link",disabled:r},j),b,n&&u&&c.a.createElement("span",{className:"sr-only"},u)))}));b.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},b.displayName="PageItem";var j=b;function f(e,t,n){function r(e){var r=e.children,a=Object(s.a)(e,["children"]);return c.a.createElement(b,a,c.a.createElement("span",{"aria-hidden":"true"},r||t),c.a.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),r.displayName=e,r}var h=f("First","\xab"),p=f("Prev","\u2039","Previous"),m=f("Ellipsis","\u2026","More"),O=f("Next","\u203a"),v=f("Last","\xbb"),x=c.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,o=e.size,d=Object(s.a)(e,["bsPrefix","className","children","size"]),b=Object(u.a)(n,"pagination");return c.a.createElement("ul",Object(i.a)({ref:t},d,{className:l()(r,b,o&&b+"-"+o)}),a)}));x.First=h,x.Prev=p,x.Ellipsis=m,x.Item=j,x.Next=O,x.Last=v;var y=x,g=n(2),w=function(e,t){var n=Object(a.useState)(0),c=Object(r.a)(n,2),i=c[0],s=c[1],o=i*t,l=e.slice(o,o+t),u=e.length,d=Math.ceil(u/t),b=function(){i<d-1&&s((function(e){return e+1}))},j=function(){i>0&&s((function(e){return e-1}))},f=function(){s(0)},h=function(){s(d-1)},p=function(e){s(e)};return{list:l,CustomPagination:function(){return Object(g.jsxs)(y,{children:[Object(g.jsx)(y.First,{disabled:0===i,onClick:f}),Object(g.jsx)(y.Prev,{disabled:0===i,onClick:j}),i<d-1&&Object(g.jsx)(y.Item,{active:!0,onClick:function(){return p(i)},children:i+1}),i<d-2&&Object(g.jsx)(y.Item,{onClick:function(){return p(i+1)},children:i+2}),d>4&&Object(g.jsx)(y.Ellipsis,{disabled:!0}),Object(g.jsx)(y.Item,{active:i===d-1,onClick:function(){return p(d-1)},children:d}),Object(g.jsx)(y.Next,{disabled:i===d-1,onClick:b}),Object(g.jsx)(y.Last,{disabled:i===d-1,onClick:h})]})}}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(5),a=n(1),c=n.n(a),i=n(366),s=n(124),o=n(123),l=n(122),u=n(2),d=function(e){var t=e.dataSource,n=e.children,a=Object(l.a)(Object(r.a)(t)),d=a.setTerm,b=a.filterHandler,j=Object(s.a)(b(),6),f=j.CustomPagination,h=j.list;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(i.a,{children:Object(u.jsx)(i.a.Control,{type:"search",placeholder:"Are you looking for a word? filter here!",onChange:function(e){d(e.target.value)}})}),Object(u.jsx)(o.b,{children:Object(u.jsx)(c.a.Fragment,{children:h.map((function(e,t){return Object(u.jsx)(o.a,{eventKey:"ev"+t,headerText:e.label,children:n(e)},e.id)}))})}),h.length>0&&Object(u.jsx)("div",{className:"d-flex justify-content-end mt-3",children:Object(u.jsx)(f,{})})]})}},133:function(e,t,n){"use strict";var r=n(7),a=n(9),c=n(19),i=n.n(c),s=n(1),o=n.n(s),l=n(28),u=n(126),d=n(127),b=o.a.createContext(null);b.displayName="CardContext";var j=b,f=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,b=Object(a.a)(e,["bsPrefix","className","variant","as"]),j=Object(l.a)(n,"card-img");return o.a.createElement(d,Object(r.a)({ref:t,className:i()(s?j+"-"+s:j,c)},b))}));f.displayName="CardImg",f.defaultProps={variant:null};var h=f,p=Object(d.a)("h5"),m=Object(d.a)("h6"),O=Object(u.a)("card-body"),v=Object(u.a)("card-title",{Component:p}),x=Object(u.a)("card-subtitle",{Component:m}),y=Object(u.a)("card-link",{Component:"a"}),g=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),S=Object(u.a)("card-img-overlay"),N=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.bg,d=e.text,b=e.border,f=e.body,h=e.children,p=e.as,m=void 0===p?"div":p,v=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(n,"card"),y=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(j.Provider,{value:y},o.a.createElement(m,Object(r.a)({ref:t},v,{className:i()(c,x,u&&"bg-"+u,d&&"text-"+d,b&&"border-"+b)}),f?o.a.createElement(O,null,h):h))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=h,N.Title=v,N.Subtitle=x,N.Body=O,N.Link=y,N.Text=g,N.Header=w,N.Footer=C,N.ImgOverlay=S;t.a=N},140:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(3),i=n.n(c);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=Object(r.forwardRef)((function(e,t){var n=e.color,r=e.size,c=o(e,["color","size"]);return a.a.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n},c),a.a.createElement("path",{d:"M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"}),a.a.createElement("path",{d:"M7.066 4.76A1.665 1.665 0 0 0 4 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112zm4 0A1.665 1.665 0 0 0 8 5.668a1.667 1.667 0 0 0 2.561 1.406c-.131.389-.375.804-.777 1.22a.417.417 0 1 0 .6.58c1.486-1.54 1.293-3.214.682-4.112z"}))}));l.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},l.defaultProps={color:"currentColor",size:"1em"},t.a=l},350:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n.n(r),c=n(31),i=n(1),s=n.n(i),o=n(194),l=n(120),u=n(20),d=n(117),b=n(118),j=n(366),f=n(112),h=n(35),p=n(4),m=function(e){return{type:p.p,id:e}},O=n(2),v={label:"",explication:""},x=b.b().shape({label:b.d().required("This field is required"),explication:b.d().required("This field is required")}),y=function(e){var t=e.handleToogle,n=e.saveByKey,r=e.showMsg,i=Object(h.b)().dispatch,s=function(){var e=Object(c.a)(a.a.mark((function e(c,s){var o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=Object(f.a)(),e.next=4,n(Object(u.a)(Object(u.a)({},c),{},{id:o}),o);case 4:(l=e.sent).success?(r("Idiom created",l.message),i((a=Object(u.a)(Object(u.a)({},c),{},{id:o}),{type:p.c,payload:a})),setTimeout((function(){t()}),0),s()):r("Failed to Created",l.message,"warning"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var a}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(O.jsx)(d.b,{initialValues:v,onSubmit:function(e,t){var n=t.resetForm;return s(e,n)},validationSchema:x,children:function(e){var n=e.handleBlur,r=e.handleChange,a=e.handleSubmit,c=e.errors,i=e.touched,s=e.values;return Object(O.jsxs)(j.a,{onSubmit:a,children:[Object(O.jsxs)(j.a.Group,{children:[Object(O.jsx)(j.a.Label,{children:"Phrase / Idiom"}),Object(O.jsx)(j.a.Control,{spellCheck:"true",placeholder:"Write something...",autoComplete:"off",name:"label",size:"sm",onChange:r,onBlur:n,value:s.label,isInvalid:i.label&&!!c.label}),Object(O.jsx)(j.a.Control.Feedback,{type:"invalid",children:c.label})]}),Object(O.jsxs)(j.a.Group,{children:[Object(O.jsx)(j.a.Label,{children:"Explication / Meaning"}),Object(O.jsx)(j.a.Control,{spellCheck:"true",as:"textarea",placeholder:"let me explain",size:"sm",autoComplete:"off",name:"explication",onChange:r,onBlur:n,value:s.explication,isInvalid:i.explication&&!!c.explication}),Object(O.jsx)(j.a.Control.Feedback,{type:"invalid",children:c.explication})]}),Object(O.jsxs)("div",{className:"text-right",children:[Object(O.jsx)(o.a,{variant:"secondary",size:"sm",onClick:t,children:"Close"}),Object(O.jsx)(o.a,{variant:"primary",className:"ml-2",size:"sm",type:"submit",children:"Save"})]})]})}})},g=n(125),w=b.b().shape({label:b.d().required("This field is required"),explication:b.d().required("This field is required")}),C=function(e){var t=e.handleToogle,n=e.word,r=e.findOneAndUpdate,i=e.showMsg,s=Object(h.b)().dispatch,l=function(){var e=Object(c.a)(a.a.mark((function e(c){var o,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,o=n.id||"",e.next=4,r(c,o);case 4:(l=e.sent).success?(i("Idiom updated",l.message),s((a=o,u=c,{type:p.S,payload:u,id:a})),setTimeout((function(){t()}),0)):i("Failed to update",l.message,"danger"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var a,u}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),b=Object(u.a)({},n);return Object(O.jsx)(d.b,{initialValues:b,onSubmit:function(e){return l(e)},validationSchema:w,children:function(e){var n=e.handleBlur,r=e.handleChange,a=e.handleSubmit,c=e.errors,i=e.touched,s=e.values;return Object(O.jsxs)(j.a,{onSubmit:a,children:[Object(O.jsxs)(j.a.Group,{children:[Object(O.jsx)(j.a.Label,{children:"Phrase / Idiom"}),Object(O.jsx)(j.a.Control,{spellCheck:"true",placeholder:"Write something...",autoComplete:"off",name:"label",size:"sm",onChange:r,onBlur:n,value:s.label,isInvalid:i.label&&!!c.label}),Object(O.jsx)(j.a.Control.Feedback,{type:"invalid",children:c.label})]}),Object(O.jsxs)(j.a.Group,{children:[Object(O.jsx)(j.a.Label,{children:"Explication / Meaning"}),Object(O.jsx)(j.a.Control,{spellCheck:"true",as:"textarea",placeholder:"let me explain",size:"sm",autoComplete:"off",name:"explication",onChange:r,onBlur:n,value:s.explication,isInvalid:i.explication&&!!c.explication}),Object(O.jsx)(j.a.Control.Feedback,{type:"invalid",children:c.explication})]}),Object(O.jsxs)("div",{className:"text-right",children:[Object(O.jsx)(o.a,{variant:"secondary",size:"sm",onClick:t,children:"Close"}),Object(O.jsx)(o.a,{variant:"primary",className:"ml-2",size:"sm",type:"submit",children:"Save"})]})]})}})},S=n(113),N=n(116),k=n(36),E=n(121),T=n(115),I=n(140),A=function(e){var t=e.word,n=e.findOneAndUpdate,r=e.findOneAndDelete;return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(P,{word:t}),Object(O.jsxs)("div",{className:"text-right",children:[Object(O.jsx)(z,{word:t,findOneAndUpdate:n}),Object(O.jsx)(B,{word:t,findOneAndDelete:r})]})]})},P=function(e){var t=e.word;return Object(O.jsxs)("p",{className:"text-secondary",children:[Object(O.jsx)("span",{className:"mr-3",children:Object(O.jsx)(I.a,{size:"22"})}),t.explication]})},z=function(e){var t=e.word,n=e.findOneAndUpdate,r=Object(S.a)(),a=r.show,c=r.handleHide,i=r.handleShow,l=Object(T.a)(),u=l.Snackbar,d=l.showMsg;return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(o.a,{className:"mr-2",variant:"primary",size:"sm",onClick:i,children:"Update"}),Object(O.jsx)(N.a,{show:a,headerText:"Edit Idiom",handleClose:c,centered:!1,children:Object(O.jsx)(C,{word:t,handleToogle:c,findOneAndUpdate:n,showMsg:d})}),Object(O.jsx)(u,{})]})},F=function(e){var t=e.saveByKey,n=Object(S.a)(),r=n.show,a=n.handleHide,c=n.handleShow,i=Object(T.a)(),l=i.Snackbar,u=i.showMsg;return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsxs)("div",{className:"border rounded p-3 bg-light mb-3",children:[Object(O.jsx)("p",{children:"Idioms are words or phrases that aren't meant to be taken literally."}),Object(O.jsx)("div",{className:"text-right",children:Object(O.jsx)(o.a,{variant:"primary",size:"sm",onClick:c,children:"New Idiom"})})]}),Object(O.jsx)(N.a,{show:r,headerText:"New Idiom",handleClose:a,centered:!1,children:Object(O.jsx)(y,{handleToogle:a,saveByKey:t,showMsg:u})}),Object(O.jsx)(l,{})]})},B=function(e){var t=e.word,n=e.findOneAndDelete,r=Object(h.b)().dispatch,i=Object(l.a)({message:"Are you sure you want to remove this Idiom? This cannot be undone.",onConfirmClick:function(){return b.apply(this,arguments)}}),u=i.ConfirmDialog,d=i.toggleConfirmMessage;function b(){return(b=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(t.id||"");case 3:e.sent.success&&(d(),setTimeout((function(){r(m(t.id||""))}),0)),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(o.a,{variant:"danger",size:"sm",onClick:function(){d()},children:"Remove"}),Object(O.jsx)(u,{})]})};t.default=function(){var e=Object(k.c)((function(e){return e.idioms})),t=Object(h.b)().dispatch,n=Object(E.b)(E.a.IDIOMS),r=n.find,a=n.findOneAndUpdate,c=n.findOneAndDelete,o=n.saveByKey;return Object(i.useEffect)((function(){r().then((function(e){var n;e.success?t((n=e.data,{type:p.C,payload:n})):console.log(e.message)})).catch((function(e){return console.error(e)}))}),[]),Object(O.jsxs)(s.a.Fragment,{children:[Object(O.jsx)(F,{saveByKey:o}),Object(O.jsx)(g.a,{dataSource:e,children:function(e){return Object(O.jsx)(A,{word:e,findOneAndUpdate:a,findOneAndDelete:c})}})]})}}}]);
//# sourceMappingURL=18.6532a953.chunk.js.map