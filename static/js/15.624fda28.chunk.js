(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[15],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(26),a=n(1),c=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return{show:n,handleToggle:function(){c((function(e){return!e}))},handleShow:function(){c(!0)},handleHide:function(){c(!1)}}}},114:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return l}));n(1);var r=n(21),a=n.n(r),c=n(194),s=n(2),i=function(e){var t=e.children,n=e.show,r=document.getElementById("portal");return n?a.a.createPortal(Object(s.jsx)("div",{className:"z-9999 full-page-container",onClick:function(e){e.stopPropagation()},style:{backgroundColor:"#fafafa"},children:Object(s.jsx)("div",{className:"overflow-auto",children:t})}),r):null},l=function(e){var t=e.title,n=e.handleToggle;return Object(s.jsxs)("div",{className:"p-3 border-bottom d-flex align-items-center justify-content-between sticky-top bg-light",children:[Object(s.jsx)("h6",{className:"m-0",children:t}),Object(s.jsxs)("div",{className:"text-right",children:[Object(s.jsx)(c.a,{variant:"secondary",className:"mr-2",size:"sm",onClick:n,children:"Close"}),Object(s.jsx)(c.a,{variant:"primary",size:"sm",type:"submit",children:"Save"})]})]})}},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(20),a=n(26),c=n(1),s=n(21),i=n.n(s),l=n(361),o=n(2),u=function(e){var t=e.isShown,n=e.message,r=e.type,a=e.title,c=document.getElementById("portal");return i.a.createPortal(Object(o.jsxs)(l.a,{className:"m-3 fixed-top",show:t,variant:r,style:{zIndex:9999999999},children:[Object(o.jsx)("h5",{children:a}),Object(o.jsx)("p",{className:"m-0",children:n})]}),c)},d=function(){var e=Object(c.useState)({title:"",isShown:!1,message:"",type:"success"}),t=Object(a.a)(e,2),n=t[0],s=t[1];return{showMsg:function(e,t,a){s({isShown:!0,message:t,title:e,type:a||"success"}),setTimeout((function(){s(Object(r.a)(Object(r.a)({},n),{},{isShown:!1}))}),3e3)},Snackbar:Object(c.useCallback)((function(){return Object(o.jsx)(u,{message:n.message,isShown:n.isShown,type:n.type,title:n.title})}),[n])}}},116:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n(1);var r=n(365),a=n(2),c=function(e){var t=e.show,n=e.handleClose,c=e.centered,s=e.size,i=e.children,l=e.headerText;return Object(a.jsxs)(r.a,{show:t,onHide:n,centered:c,size:s,children:[l&&Object(a.jsx)(r.a.Header,{closeButton:!0,children:Object(a.jsx)("h6",{className:"m-0 align-self-center",children:l})}),Object(a.jsx)(r.a.Body,{children:i})]})}},120:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(26),a=n(1),c=n(116),s=n(194),i=n(364),l=n(113),o=n(2),u=function(e){var t=Object(l.a)(),n=t.handleToggle,u=t.show,d=t.handleHide,j=Object(a.useState)(!1),b=Object(r.a)(j,2),h=b[0],f=b[1];Object(a.useEffect)((function(){return function(){f(!1)}}),[]);var p=e.message,m=e.onConfirmClick;return{ConfirmDialog:Object(a.useCallback)((function(){return Object(o.jsxs)(c.a,{show:u,centered:!0,size:"sm",handleClose:d,children:[Object(o.jsx)("h6",{children:"Confirm"}),Object(o.jsx)("p",{children:p}),Object(o.jsxs)("div",{className:"text-right",children:[Object(o.jsx)(s.a,{className:"mr-2",variant:"secondary",onClick:d,size:"sm",children:"Close"}),Object(o.jsx)(s.a,{variant:"primary",size:"sm",onClick:m,disabled:h,children:h?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),Object(o.jsx)("span",{className:"ml-2",children:"Loading..."})]}):"Confirm"})]})]})}),[u,p,m,d,h]),toggleConfirmMessage:function(){n()},setIsloading:f}}},121:function(e,t,n){"use strict";n.d(t,"b",(function(){return d})),n.d(t,"a",(function(){return r}));var r={};n.r(r),n.d(r,"USERS",(function(){return j})),n.d(r,"VERBS",(function(){return b})),n.d(r,"ADJECTIVES",(function(){return h})),n.d(r,"ADVERBS",(function(){return f})),n.d(r,"NOUNS",(function(){return p})),n.d(r,"PHRASALVERBS",(function(){return m})),n.d(r,"LINKERS",(function(){return x})),n.d(r,"TOPICS",(function(){return O})),n.d(r,"THINGS",(function(){return v})),n.d(r,"NOTES",(function(){return g})),n.d(r,"IDIOMS",(function(){return w})),n.d(r,"TENSES",(function(){return y})),n.d(r,"GAMES",(function(){return C})),n.d(r,"QA",(function(){return N})),n.d(r,"TODOS",(function(){return k}));var a=n(20),c=n(23),s=n.n(c),i=n(31),l=new(n(131).a)("remindMe");l.config.debug=!1;var o=l,u=function(e,t,n){return{message:t,success:e,data:n}},d=function(e){function t(){return(t=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).add(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been added",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to create"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function n(){return(n=Object(i.a)(s.a.mark((function t(n,r){var c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c=n.label.trim().toLowerCase(),t.next=4,o.collection(e).doc({label:c}).get();case 4:if(!t.sent){t.next=7;break}return t.abrupt("return",u(!1,"The word ".concat(c," already exsist!")));case 7:return t.next=9,o.collection(e).add(Object(a.a)(Object(a.a)({},n),{},{label:c}),r);case 9:return i=t.sent,t.abrupt("return",u(!0,"New record has been added",i));case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to persist a new Word"));case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function r(){return(r=Object(i.a)(s.a.mark((function t(n,r){var c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:r}).update(Object(a.a)(Object(a.a)({},n),{},{label:n.label.trim().toLowerCase()}));case 3:return c=t.sent,t.abrupt("return",u(!0,"New record has been updated",c));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to update"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function c(){return(c=Object(i.a)(s.a.mark((function t(n,r){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:r}).set(n);case 3:return a=t.sent,t.abrupt("return",u(!0,"New record has been overwrited",a));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to overwrite"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function l(){return(l=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:n}).delete();case 3:return r=t.sent,t.abrupt("return",u(!0,"New record has been removed",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(){return(d=Object(i.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).delete();case 3:return t.abrupt("return",u(!0,"The whole collection has been removed"));case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function j(){return(j=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).set(n);case 3:return r=t.sent,t.abrupt("return",u(!0,"Init the whole collection",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to remove"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function b(){return(b=Object(i.a)(s.a.mark((function t(){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).get();case 3:return n=t.sent,t.abrupt("return",u(!0,"list of data",n));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(){return(h=Object(i.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.collection(e).doc({id:n}).get();case 3:return r=t.sent,t.abrupt("return",u(!0,"find a document",r));case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",u(!1,"Failed to get"));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}return{save:function(e){return t.apply(this,arguments)},saveByKey:function(e,t){return n.apply(this,arguments)},findOneAndUpdate:function(e,t){return r.apply(this,arguments)},setById:function(e,t){return c.apply(this,arguments)},findOneAndDelete:function(e){return l.apply(this,arguments)},drop:function(){return d.apply(this,arguments)},init:function(e){return j.apply(this,arguments)},find:function(){return b.apply(this,arguments)},findOne:function(e){return h.apply(this,arguments)}}},j="USERS",b="VERBS",h="ADJECTIVES",f="ADVERBS",p="NOUNS",m="PHRASALVERBS",x="LINKERS",O="TOPICS",v="THINGS",g="NOTES",w="IDIOMS",y="TENSES",C="GAMES",N="QA",k="TODOS"},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return y})),n.d(t,"a",(function(){return C}));var r=n(1),a=n.n(r),c=n(7),s=n(9),i=n(19),l=n.n(i),o=n(132),u=n(28),d=a.a.createContext(null),j=a.a.createContext(null);j.displayName="AccordionContext";var b=j;var h=a.a.forwardRef((function(e,t){var n=e.as,i=void 0===n?"button":n,l=e.children,o=e.eventKey,u=e.onClick,j=Object(s.a)(e,["as","children","eventKey","onClick"]),h=function(e,t){var n=Object(r.useContext)(b),a=Object(r.useContext)(d);return function(r){a&&a(e===n?null:e,r),t&&t(r)}}(o,u);return"button"===i&&(j.type="button"),a.a.createElement(i,Object(c.a)({ref:t,onClick:h},j),l)})),f=n(89),p=a.a.forwardRef((function(e,t){var n=e.children,i=e.eventKey,l=Object(s.a)(e,["children","eventKey"]),o=Object(r.useContext)(b);return a.a.createElement(d.Provider,{value:null},a.a.createElement(f.a,Object(c.a)({ref:t,in:o===i},l),a.a.createElement("div",null,a.a.Children.only(n))))}));p.displayName="AccordionCollapse";var m=p,x=a.a.forwardRef((function(e,t){var n=Object(o.a)(e,{activeKey:"onSelect"}),r=n.as,i=void 0===r?"div":r,j=n.activeKey,h=n.bsPrefix,f=n.children,p=n.className,m=n.onSelect,x=Object(s.a)(n,["as","activeKey","bsPrefix","children","className","onSelect"]),O=l()(p,Object(u.a)(h,"accordion"));return a.a.createElement(b.Provider,{value:j||null},a.a.createElement(d.Provider,{value:m||null},a.a.createElement(i,Object(c.a)({ref:t},x,{className:O}),f)))}));x.displayName="Accordion",x.Toggle=h,x.Collapse=m;var O=x,v=n(133),g=n(103),w=n(2),y=function(e){var t=e.children;return Object(w.jsx)(O,{defaultActiveKey:"ev0",className:"mt-3",children:t})},C=function(e){var t=e.children,n=e.eventKey,r=e.headerText;return Object(w.jsxs)(v.a,{children:[Object(w.jsxs)(O.Toggle,{className:"bg-light d-flex flex-row justify-content-between",as:v.a.Header,eventKey:n,children:[Object(w.jsx)("p",{className:"m-0 text-capitalize",children:r}),Object(w.jsx)(g.a,{})]}),Object(w.jsx)(O.Collapse,{eventKey:n,children:Object(w.jsx)(v.a.Body,{children:t})})]})}},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(5),a=n(26),c=n(1),s=function(e){var t=Object(c.useState)(""),n=Object(a.a)(t,2),s=n[0];return{setTerm:n[1],filterHandler:function(){return""===s?Object(r.a)(e):Object(r.a)(e.filter((function(e){return e.label.toLowerCase().includes(s.toLowerCase())})))}}}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return C}));var r=n(5),a=n(26),c=n(1),s=n.n(c),i=n(7),l=n(9),o=n(19),u=n.n(o),d=n(28),j=n(129),b=s.a.forwardRef((function(e,t){var n=e.active,r=e.disabled,a=e.className,c=e.style,o=e.activeLabel,d=e.children,b=Object(l.a)(e,["active","disabled","className","style","activeLabel","children"]),h=n||r?"span":j.a;return s.a.createElement("li",{ref:t,style:c,className:u()(a,"page-item",{active:n,disabled:r})},s.a.createElement(h,Object(i.a)({className:"page-link",disabled:r},b),d,n&&o&&s.a.createElement("span",{className:"sr-only"},o)))}));b.defaultProps={active:!1,disabled:!1,activeLabel:"(current)"},b.displayName="PageItem";var h=b;function f(e,t,n){function r(e){var r=e.children,a=Object(l.a)(e,["children"]);return s.a.createElement(b,a,s.a.createElement("span",{"aria-hidden":"true"},r||t),s.a.createElement("span",{className:"sr-only"},n))}return void 0===n&&(n=e),r.displayName=e,r}var p=f("First","\xab"),m=f("Prev","\u2039","Previous"),x=f("Ellipsis","\u2026","More"),O=f("Next","\u203a"),v=f("Last","\xbb"),g=s.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,c=e.size,o=Object(l.a)(e,["bsPrefix","className","children","size"]),j=Object(d.a)(n,"pagination");return s.a.createElement("ul",Object(i.a)({ref:t},o,{className:u()(r,j,c&&j+"-"+c)}),a)}));g.First=p,g.Prev=m,g.Ellipsis=x,g.Item=h,g.Next=O,g.Last=v;var w=g,y=n(2),C=function(e,t){var n=Object(c.useState)(0),s=Object(a.a)(n,2),i=s[0],l=s[1],o=i*t,u=e.slice(o,o+t),d=e.length,j=Math.ceil(d/t),b=function(){i<j-1&&l((function(e){return e+1}))},h=function(){i>0&&l((function(e){return e-1}))},f=function(){l(0)},p=function(){l(j-1)};return{list:u,CustomPagination:function(){return Object(y.jsxs)(w,{children:[Object(y.jsx)(w.First,{disabled:0===i,onClick:f}),Object(y.jsx)(w.Prev,{disabled:0===i,onClick:h}),Object(r.a)(Array(j)).map((function(e,t){return Object(y.jsx)(w.Item,{active:i===t,onClick:function(){return function(e){l(e)}(t)},children:t+1},"slice"+t)})),Object(y.jsx)(w.Next,{disabled:i===j-1,onClick:b}),Object(y.jsx)(w.Last,{disabled:i===j-1,onClick:p})]})}}}},125:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(5),a=n(1),c=n.n(a),s=n(366),i=n(124),l=n(122),o=n(123),u=n(2),d=function(e){var t=e.dataSource,n=e.children,a=Object(o.a)(Object(r.a)(t)),d=a.setTerm,j=a.filterHandler,b=Object(i.a)(j(),5),h=b.CustomPagination,f=b.list;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(s.a,{children:Object(u.jsx)(s.a.Control,{type:"search",placeholder:"Are you looking for a word? filter here!",onChange:function(e){d(e.target.value)}})}),Object(u.jsx)(l.b,{children:Object(u.jsx)(c.a.Fragment,{children:f.map((function(e,t){return Object(u.jsx)(l.a,{eventKey:"ev"+t,headerText:e.label,children:n(e)},e.id)}))})}),f.length>0&&Object(u.jsx)("div",{className:"d-flex justify-content-end mt-3",children:Object(u.jsx)(h,{})})]})}},128:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(1),a=n.n(r),c=n(114),s=n(194),i=n(113),l=n(2),o=function(e){var t=e.title,n=e.definition,r=e.children,o=Object(i.a)(),u=o.handleToggle,d=o.show;return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsxs)("div",{className:"border rounded p-3 bg-light mb-3",children:[Object(l.jsx)("p",{children:n}),Object(l.jsx)("div",{className:"text-right",children:Object(l.jsx)(s.a,{variant:"primary",size:"sm",onClick:u,children:t})})]}),Object(l.jsx)(c.a,{show:d,children:r(u)})]})}},133:function(e,t,n){"use strict";var r=n(7),a=n(9),c=n(19),s=n.n(c),i=n(1),l=n.n(i),o=n(28),u=n(126),d=n(127),j=l.a.createContext(null);j.displayName="CardContext";var b=j,h=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,i=e.variant,u=e.as,d=void 0===u?"img":u,j=Object(a.a)(e,["bsPrefix","className","variant","as"]),b=Object(o.a)(n,"card-img");return l.a.createElement(d,Object(r.a)({ref:t,className:s()(i?b+"-"+i:b,c)},j))}));h.displayName="CardImg",h.defaultProps={variant:null};var f=h,p=Object(d.a)("h5"),m=Object(d.a)("h6"),x=Object(u.a)("card-body"),O=Object(u.a)("card-title",{Component:p}),v=Object(u.a)("card-subtitle",{Component:m}),g=Object(u.a)("card-link",{Component:"a"}),w=Object(u.a)("card-text",{Component:"p"}),y=Object(u.a)("card-header"),C=Object(u.a)("card-footer"),N=Object(u.a)("card-img-overlay"),k=l.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,u=e.bg,d=e.text,j=e.border,h=e.body,f=e.children,p=e.as,m=void 0===p?"div":p,O=Object(a.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(o.a)(n,"card"),g=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return l.a.createElement(b.Provider,{value:g},l.a.createElement(m,Object(r.a)({ref:t},O,{className:s()(c,v,u&&"bg-"+u,d&&"text-"+d,j&&"border-"+j)}),h?l.a.createElement(x,null,f):f))}));k.displayName="Card",k.defaultProps={body:!1},k.Img=f,k.Title=O,k.Subtitle=v,k.Body=x,k.Link=g,k.Text=w,k.Header=y,k.Footer=C,k.ImgOverlay=N;t.a=k},166:function(e,t,n){"use strict";var r=n(1),a=n.n(r),c=n(3),s=n.n(c);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=Object(r.forwardRef)((function(e,t){var n=e.color,r=e.size,c=l(e,["color","size"]);return a.a.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:r,height:r,fill:n},c),a.a.createElement("path",{d:"M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"}),a.a.createElement("path",{fillRule:"evenodd",d:"M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"}))}));o.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},o.defaultProps={color:"currentColor",size:"1em"},t.a=o},349:function(e,t,n){"use strict";n.r(t);var r=n(23),a=n.n(r),c=n(31),s=n(1),i=n.n(s),l=n(194),o=n(36),u=n(120),d=n(114),j=n(113),b=n(4),h=function(e,t){return{type:b.U,payload:t,id:e}},f=function(e){return{type:b.r,id:e}},p=n(125),m=n(128),x=n(20),O=n(366),v=n(63),g=n(117),w=n(166),y=n(118),C=n(35),N=n(115),k=n(2),S=y.b().shape({label:y.d().required("This Field is required"),note:y.d().required("This Field is required"),question:y.d().required("This Field is required"),examples:y.a().of(y.b().shape({sentence:y.d().required("This Field is required"),answers:y.a().of(y.d())}))}),E=function(e){var t=e.handleToogle,n=e.word,r=e.findOneAndUpdate,s=Object(C.b)().dispatch,o=Object(N.a)(),u=o.Snackbar,j=o.showMsg,b=function(){var e=Object(c.a)(a.a.mark((function e(t){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c=n.id||"",e.next=4,r(t,c);case 4:(i=e.sent).success?(j("Word updated",i.message),s(h(c,t))):j("Failed to update",i.message,"danger"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),f=Object(x.a)({},n);return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(g.b,{initialValues:f,onSubmit:function(e){return b(e)},validationSchema:S,children:function(e){var n=e.handleBlur,r=e.handleChange,a=e.handleSubmit,c=e.touched,s=e.errors,o=e.values;return Object(k.jsxs)(O.a,{onSubmit:a,children:[Object(k.jsx)(d.b,{handleToggle:t,title:"Edit Note"}),Object(k.jsxs)(v.a,{className:"py-3",children:[Object(k.jsxs)(O.a.Group,{children:[Object(k.jsx)(O.a.Label,{children:"Title"}),Object(k.jsx)(O.a.Control,{autoComplete:"off",size:"sm",placeholder:"Enter a title",name:"label",onChange:r,onBlur:n,value:o.label,isInvalid:c.label&&!!s.label}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:s.label})]}),Object(k.jsxs)(O.a.Group,{children:[Object(k.jsx)(O.a.Label,{children:"Note"}),Object(k.jsx)(O.a.Control,{as:"textarea",autoComplete:"off",size:"sm",placeholder:"your notes here..",name:"note",onChange:r,onBlur:n,value:o.note,isInvalid:c.note&&!!s.note}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:s.note})]}),Object(k.jsxs)(O.a.Group,{children:[Object(k.jsxs)(O.a.Label,{children:["Question (",Object(k.jsx)("small",{children:"A general question which adapts with the case of the note"}),")"]}),Object(k.jsx)(O.a.Control,{autoComplete:"off",size:"sm",placeholder:"add a question",name:"question",onChange:r,onBlur:n,value:o.question,isInvalid:c.question&&!!s.question}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:s.question})]}),Object(k.jsx)(g.a,{name:"examples",children:function(e){var t=e.push,a=e.remove;return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(k.jsx)("h6",{className:"m-0",children:"Examples"}),Object(k.jsx)(l.a,{size:"sm",variant:"success",onClick:function(){return t({sentence:"",answers:[""]})},children:"New Example"})]}),o.examples.length>0&&o.examples.map((function(e,t){return Object(k.jsxs)("div",{className:"rounded border bg-light p-3 mt-3",children:[Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(k.jsxs)("h6",{className:"m-0",children:["Example ",t+1,":"]}),Object(k.jsx)(l.a,{size:"sm",variant:"danger",onClick:function(){return a(t)},className:"rounded-circle d-flex align-items-center align-self-end",style:{width:"32px",height:"32px"},children:Object(k.jsx)(w.a,{})})]}),Object(k.jsxs)(O.a.Group,{children:[Object(k.jsxs)(O.a.Label,{children:["case ",t+1," (A sentence / A particular Question)"]}),Object(k.jsx)(O.a.Control,{autoComplete:"off",size:"sm",placeholder:"Question example",name:"examples.".concat(t,".sentence"),onChange:r,onBlur:n,value:o.examples[t].sentence,isInvalid:c.examples&&!!s.examples}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:"This Field is required"})]}),Object(k.jsx)(g.a,{name:"examples.".concat(t,".answers"),children:function(e){return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(k.jsx)("h6",{className:"m-0",children:"Possible Answers"}),Object(k.jsx)(l.a,{size:"sm",variant:"info",onClick:function(){return e.push("")},children:"New Answer"})]}),o.examples[t].answers.length>0&&o.examples[t].answers.map((function(a,c){return Object(k.jsxs)(O.a.Group,{children:[Object(k.jsxs)(O.a.Label,{children:[Object(k.jsxs)("span",{children:["Answer ",c+1,":"]}),Object(k.jsx)("span",{className:"text-secondary ml-2 icons",onClick:function(){return e.remove(c)},children:Object(k.jsx)(w.a,{})})]}),Object(k.jsx)(O.a.Control,{autoComplete:"off",size:"sm",placeholder:"Enter your answer",name:"examples.".concat(t,".answers.").concat(c),onChange:r,onBlur:n,value:o.examples[t].answers[c]})]},"answer"+t+c)}))]})}})]},"ex"+t)}))]})}})]})]})}}),Object(k.jsx)(u,{})]})},T=n(112),F={label:"",note:"",question:"",examples:[{sentence:"",answers:[""]}]},A=y.b().shape({label:y.d().required("This Field is required"),note:y.d().required("This Field is required"),question:y.d().required("This Field is required"),examples:y.a().of(y.b().shape({sentence:y.d().required("This Field is required"),answers:y.a().of(y.d())}))}),z=function(e){var t=e.handleToogle,n=e.saveByKey,r=Object(C.b)().dispatch,s=Object(N.a)(),o=s.Snackbar,u=s.showMsg,j=function(){var e=Object(c.a)(a.a.mark((function e(t,c){var s,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s=Object(T.a)(),e.next=4,n(Object(x.a)(Object(x.a)({},t),{},{id:s}),s);case 4:(i=e.sent).success?(u("created",i.message),r((a=Object(x.a)(Object(x.a)({},t),{},{id:s}),{type:b.e,payload:a})),c()):u("Failed to Created",i.message,"warning"),e.next=11;break;case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}var a}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(g.b,{initialValues:F,onSubmit:function(e,t){var n=t.resetForm;return j(e,n)},validationSchema:A,children:function(e){var n=e.handleBlur,r=e.handleChange,a=e.handleSubmit,c=e.touched,s=e.errors,o=e.values;return Object(k.jsxs)(O.a,{onSubmit:a,children:[Object(k.jsx)(d.b,{handleToggle:t,title:"New Note"}),Object(k.jsxs)(v.a,{className:"py-3",children:[Object(k.jsxs)(O.a.Group,{children:[Object(k.jsx)(O.a.Label,{children:"Title"}),Object(k.jsx)(O.a.Control,{spellCheck:"true",autoComplete:"off",size:"sm",placeholder:"Enter a title",name:"label",onChange:r,onBlur:n,value:o.label,isInvalid:c.label&&!!s.label}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:s.label})]}),Object(k.jsxs)(O.a.Group,{children:[Object(k.jsx)(O.a.Label,{children:"Note"}),Object(k.jsx)(O.a.Control,{as:"textarea",spellCheck:"true",autoComplete:"off",size:"sm",placeholder:"your notes here..",name:"note",onChange:r,onBlur:n,value:o.note,isInvalid:c.note&&!!s.note}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:s.note})]}),Object(k.jsxs)(O.a.Group,{children:[Object(k.jsxs)(O.a.Label,{children:["Question (",Object(k.jsx)("small",{children:"A general question which adapts with the case of the note"}),")"]}),Object(k.jsx)(O.a.Control,{spellCheck:"true",autoComplete:"off",size:"sm",placeholder:"add a question",name:"question",onChange:r,onBlur:n,value:o.question,isInvalid:c.question&&!!s.question}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:s.question})]}),Object(k.jsx)(g.a,{name:"examples",children:function(e){var t=e.push,a=e.remove;return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(k.jsx)("h6",{className:"m-0",children:"Examples"}),Object(k.jsx)(l.a,{size:"sm",variant:"success",onClick:function(){return t({sentence:"",answers:[""]})},children:"New Example"})]}),o.examples.length>0&&o.examples.map((function(e,t){return Object(k.jsxs)("div",{className:"rounded border bg-light p-3 mt-3",children:[Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(k.jsxs)("h6",{className:"m-0",children:["Example ",t+1,":"]}),Object(k.jsx)(l.a,{size:"sm",variant:"danger",onClick:function(){return a(t)},className:"rounded-circle d-flex align-items-center align-self-end",style:{width:"32px",height:"32px"},children:Object(k.jsx)(w.a,{})})]}),Object(k.jsxs)(O.a.Group,{children:[Object(k.jsxs)(O.a.Label,{children:["case ",t+1," (A sentence / A particular Question)"]}),Object(k.jsx)(O.a.Control,{autoComplete:"off",size:"sm",placeholder:"Question example",name:"examples.".concat(t,".sentence"),onChange:r,onBlur:n,value:o.examples[t].sentence,isInvalid:c.examples&&!!s.examples}),Object(k.jsx)(O.a.Control.Feedback,{type:"invalid",children:"This Field is required"})]}),Object(k.jsx)(g.a,{name:"examples.".concat(t,".answers"),children:function(e){return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsxs)("div",{className:"d-flex flex-row justify-content-between align-items-center",children:[Object(k.jsx)("h6",{className:"m-0",children:"Possible Answers"}),Object(k.jsx)(l.a,{size:"sm",variant:"info",onClick:function(){return e.push("")},children:"New Answer"})]}),o.examples[t].answers.length>0&&o.examples[t].answers.map((function(a,c){return Object(k.jsxs)(O.a.Group,{children:[Object(k.jsxs)(O.a.Label,{children:[Object(k.jsxs)("span",{children:["Answer ",c+1,":"]}),Object(k.jsx)("span",{className:"text-secondary ml-2 icons",onClick:function(){return e.remove(c)},children:Object(k.jsx)(w.a,{})})]}),Object(k.jsx)(O.a.Control,{autoComplete:"off",size:"sm",placeholder:"Enter your answer",name:"examples.".concat(t,".answers.").concat(c),onChange:r,onBlur:n,value:o.examples[t].answers[c]})]},"answer"+t+c)}))]})}})]},"ex"+t)}))]})}})]})]})}}),Object(k.jsx)(o,{})]})},P=n(121),q=function(e){var t=e.word,n=e.findOneAndUpdate,r=e.findOneAndDelete;return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(I,{word:t}),Object(k.jsxs)("div",{className:"text-right",children:[Object(k.jsx)(B,{word:t,findOneAndUpdate:n}),Object(k.jsx)(L,{word:t,findOneAndDelete:r})]})]})},I=function(e){var t=e.word;return Object(k.jsxs)("p",{className:"text-secondary",children:['"',t.note,'"']})},B=function(e){var t=e.word,n=e.findOneAndUpdate,r=Object(j.a)(),a=r.handleToggle,c=r.show;return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(l.a,{className:"mr-2",variant:"primary",size:"sm",onClick:a,children:"Details"}),Object(k.jsx)(d.a,{show:c,children:Object(k.jsx)(E,{word:t,handleToogle:a,findOneAndUpdate:n})})]})},L=function(e){var t=e.word,n=e.findOneAndDelete,r=Object(C.b)().dispatch,s=Object(u.a)({message:"Are you sure you want to remove this Note? This cannot be undone.",onConfirmClick:function(){return j.apply(this,arguments)}}),o=s.ConfirmDialog,d=s.toggleConfirmMessage;function j(){return(j=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n(t.id||"");case 3:e.sent.success&&(d(),setTimeout((function(){r(f(t.id||""))}),0)),e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(l.a,{variant:"danger",size:"sm",onClick:function(){d()},children:"Remove"}),Object(k.jsx)(o,{})]})};t.default=function(){var e=Object(o.c)((function(e){return e.notes})),t=Object(C.b)().dispatch,n=Object(P.b)(P.a.NOTES),r=n.find,a=n.findOneAndUpdate,c=n.findOneAndDelete,l=n.saveByKey;return Object(s.useEffect)((function(){r().then((function(e){var n;e.success?t((n=e.data,{type:b.G,payload:n})):console.log(e.message)})).catch((function(e){return console.error(e)}))}),[]),Object(k.jsxs)(i.a.Fragment,{children:[Object(k.jsx)(m.a,{title:"New Note",definition:"\r You will find all your Grammar Notes below.\r Would you like to create a new Grammar Note?\r ",children:function(e){return Object(k.jsx)(z,{handleToogle:e,saveByKey:l})}}),Object(k.jsx)(p.a,{dataSource:e,children:function(e){return Object(k.jsx)(q,{word:e,findOneAndUpdate:a,findOneAndDelete:c})}})]})}}}]);
//# sourceMappingURL=15.624fda28.chunk.js.map