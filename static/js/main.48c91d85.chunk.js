(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[5],{24:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var c=n(60),a=(n(82),n(85),n(86),c.a.initializeApp({apiKey:"AIzaSyB4j1J1g2w7gbgBGYGBAmwdrE7KZl8VYmc",authDomain:"remindme-de28f.firebaseapp.com",projectId:"remindme-de28f",storageBucket:"remindme-de28f.appspot.com",messagingSenderId:"867482925737",appId:"1:867482925737:web:3b54553b906253df3407b8"})),r=a.auth(),i=(a.firestore(),a.storage())},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return O}));var c=n(23),a=n.n(c),r=n(31),i=n(26),s=n(1),o=n.n(s),u=n(36),d=n(41),l=n(24),j=n(2),b=o.a.createContext({}),h=function(e){var t=e.children,n=Object(u.b)(),c=Object(s.useState)(null),o=Object(i.a)(c,2),h=o[0],O=o[1],f=Object(s.useState)(!0),p=Object(i.a)(f,2),m=p[0],x=p[1];Object(s.useEffect)((function(){return l.a.onAuthStateChanged((function(e){O(e),x(!1)}))}),[]);var E=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l.a.signOut());case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(c=l.a.currentUser)){e.next=3;break}return e.abrupt("return",c.updateProfile({displayName:t,photoURL:n}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),g=function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=l.a.currentUser)){e.next=3;break}return e.abrupt("return",n.updatePassword(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y={dispatch:n,createUserWithEmailAndPassword:function(e,t){return l.a.createUserWithEmailAndPassword(e,t)},signOut:E,updateUserEmail:function(){var e=Object(r.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=l.a.currentUser)){e.next=3;break}return e.abrupt("return",n.updateEmail(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),updateUserPassword:g,updateUserProfile:v,sendPasswordResetEmail:function(e){return l.a.sendPasswordResetEmail(e)},signInWithEmailAndPassword:function(e,t){return l.a.signInWithEmailAndPassword(e,t)},user:h};return Object(j.jsx)(b.Provider,{value:y,children:m?Object(j.jsx)(d.a,{}):t})},O=function(){return Object(s.useContext)(b)}},4:function(e,t,n){"use strict";n.d(t,"D",(function(){return c})),n.d(t,"E",(function(){return a})),n.d(t,"O",(function(){return r})),n.d(t,"bb",(function(){return i})),n.d(t,"P",(function(){return s})),n.d(t,"m",(function(){return o})),n.d(t,"z",(function(){return u})),n.d(t,"cb",(function(){return d})),n.d(t,"H",(function(){return l})),n.d(t,"f",(function(){return j})),n.d(t,"V",(function(){return b})),n.d(t,"s",(function(){return h})),n.d(t,"A",(function(){return O})),n.d(t,"a",(function(){return f})),n.d(t,"n",(function(){return p})),n.d(t,"Q",(function(){return m})),n.d(t,"B",(function(){return x})),n.d(t,"b",(function(){return E})),n.d(t,"o",(function(){return v})),n.d(t,"R",(function(){return g})),n.d(t,"I",(function(){return y})),n.d(t,"g",(function(){return w})),n.d(t,"t",(function(){return N})),n.d(t,"W",(function(){return T})),n.d(t,"F",(function(){return D})),n.d(t,"d",(function(){return A})),n.d(t,"q",(function(){return _})),n.d(t,"T",(function(){return I})),n.d(t,"l",(function(){return P})),n.d(t,"N",(function(){return S})),n.d(t,"ab",(function(){return L})),n.d(t,"y",(function(){return R})),n.d(t,"K",(function(){return U})),n.d(t,"i",(function(){return k})),n.d(t,"v",(function(){return G})),n.d(t,"Y",(function(){return C})),n.d(t,"G",(function(){return V})),n.d(t,"U",(function(){return B})),n.d(t,"r",(function(){return z})),n.d(t,"e",(function(){return F})),n.d(t,"C",(function(){return H})),n.d(t,"c",(function(){return J})),n.d(t,"S",(function(){return W})),n.d(t,"p",(function(){return K})),n.d(t,"L",(function(){return M})),n.d(t,"j",(function(){return Q})),n.d(t,"w",(function(){return Y})),n.d(t,"J",(function(){return q})),n.d(t,"h",(function(){return Z})),n.d(t,"X",(function(){return X})),n.d(t,"u",(function(){return $})),n.d(t,"M",(function(){return ee})),n.d(t,"k",(function(){return te})),n.d(t,"Z",(function(){return ne})),n.d(t,"x",(function(){return ce}));var c="GET_LAST_SEARCHED_DEFINITION",a="GET_LAST_VERB_CONJUAGATED",r="GET_USER_PROFILE",i="UPDATE_USER_PROFILE",s="GET_VERBS",o="ADD_VERB",u="DELETE_VERB",d="UPDATE_VERB",l="GET_NOUNS",j="ADD_NOUN",b="UPDATE_NOUN",h="DELETE_NOUN",O="GET_ADJECTIVES",f="ADD_ADJECTIVE",p="DELETE_ADJECTIVE",m="UPDATE_ADJECTIVE",x="GET_ADVERBS",E="ADD_ADVERB",v="DELETE_ADVERB",g="UPDATE_ADVERB",y="GET_PHRASALVERBS",w="ADD_PHRASALVERB",N="DELETE_PHRASALVERB",T="UPDATE_PHRASALVERB",D="GET_LINKERS",A="ADD_LINKER",_="DELETE_LINKER",I="UPDATE_LINKER",P="ADD_TOPIC",S="GET_TOPICS",L="UPDATE_TOPIC",R="DELETE_TOPIC",U="GET_TENSES",k="ADD_TENSE",G="DELETE_TENSE",C="UPDATE_TENSE",V="GET_NOTES",B="UPDATE_NOTE",z="DELETE_NOTE",F="ADD_NOTE",H="GET_IDIOMS",J="ADD_IDIOM",W="UPDATE_IDIOM",K="DELETE_IDIOM",M="GET_THINGS",Q="ADD_THING",Y="DELETE_THING",q="GET_QA",Z="ADD_QA",X="UPDATE_QA",$="DELETE_QA",ee="GET_TODOS",te="ADD_TODO",ne="UPDATE_TODO",ce="DELETE_TODO"},41:function(e,t,n){"use strict";var c=n(1),a=n.n(c),r=n(63),i=n(87),s=n(59),o=n(10),u=n.n(o),d=n(55),l=n(2);t.a=function(){return Object(l.jsxs)(a.a.Fragment,{children:[Object(l.jsx)("div",{className:"status-bar bg-primary text-light py-1",children:Object(l.jsxs)("div",{className:"container d-flex justify-content-between align-items-center h-100",children:[Object(l.jsx)(u.a,{style:{width:"200px"}}),Object(l.jsx)(u.a,{style:{width:"60px"}})]})}),Object(l.jsx)("header",{className:"header shadow-sm bg-white",children:Object(l.jsxs)(r.a,{className:"h-100 w-100 d-flex flex-row justify-content-between align-items-center",children:[Object(l.jsx)(u.a,{width:55,height:35}),Object(l.jsx)(u.a,{width:55,height:35}),Object(l.jsx)(u.a,{width:55,height:35}),Object(l.jsx)(u.a,{width:55,height:35})]})}),Object(l.jsx)(r.a,{children:Object(l.jsxs)(i.a,{children:[Object(l.jsxs)(s.a,{className:"display-xs-none rounded mt-3 mb-3 border py-3 bg-light",sm:4,children:[Object(l.jsx)(u.a,{}),Object(l.jsx)("div",{className:"py-2 px-3 mx-2 d-flex flex-column",children:Object(l.jsx)(u.a,{className:"w-100 mx-3",count:6})}),Object(l.jsx)("div",{className:"py-2",children:Object(l.jsx)(u.a,{count:2})}),Object(l.jsx)("div",{className:"py2",children:Object(l.jsx)(u.a,{count:2})})]}),Object(l.jsx)(s.a,{className:"mb-3 mt-3",children:Object(l.jsx)(d.a,{})})]})})]})}},55:function(e,t,n){"use strict";var c=n(1),a=n.n(c),r=n(10),i=n.n(r),s=n(2);t.a=function(){return Object(s.jsxs)(a.a.Fragment,{children:[Object(s.jsxs)("div",{className:"bg-light border rounded p-3 mb-3",children:[Object(s.jsx)("p",{children:Object(s.jsx)(i.a,{count:2})}),Object(s.jsx)("div",{className:"text-right",children:Object(s.jsx)(i.a,{style:{width:"100px",height:"30px"}})})]}),Object(s.jsx)(i.a,{style:{height:"30px"}}),Object(s.jsxs)("div",{className:"mt-3 bg-light border rounded p-3",children:[Object(s.jsx)(i.a,{}),Object(s.jsx)("p",{children:Object(s.jsx)(i.a,{count:3,className:"w-25 ml-2"})}),Object(s.jsxs)("p",{children:[Object(s.jsx)(i.a,{className:"w-50"}),Object(s.jsx)(i.a,{className:"w-75"}),Object(s.jsx)(i.a,{className:"w-100"})]}),Object(s.jsxs)("div",{className:"text-right",children:[Object(s.jsx)(i.a,{className:"mr-2",style:{width:"100px",height:"30px"}}),Object(s.jsx)(i.a,{style:{width:"100px",height:"30px"}})]})]})]})}},70:function(e,t,n){},74:function(e,t,n){},77:function(e,t,n){},84:function(e,t,n){"use strict";n.r(t);var c=n(21),a=n.n(c),r=(n(70),n(1)),i=n.n(r),s=n(63),o=n(107),u=n(108),d=n(109),l=n(110),j=n(111),b=n(26),h=n(89),O=n(90),f=n(102),p=n(103),m=n(92),x=n(93),E=n(94),v=n(95),g=n(96),y=n(97),w=n(98),N=n(99),T=n(100),D=n(101),A=n(112),_=n(2),I=[{id:Object(A.a)(),title:"Words Managment",icon:Object(_.jsx)(m.a,{}),subItems:[{id:Object(A.a)(),title:"Verbs",path:"/home/words/verbs"},{id:Object(A.a)(),title:"Nouns",path:"/home/words/nouns"},{id:Object(A.a)(),title:"Adjectives",path:"/home/words/adjectives"},{id:Object(A.a)(),title:"Adverbs",path:"/home/words/adverbs"},{id:Object(A.a)(),title:"English Linkers",path:"/home/words/linkers"},{id:Object(A.a)(),title:"Phrasal Verbs",path:"/home/words/phrasal-verbs"}]},{id:Object(A.a)(),title:"Phrases & Idioms",icon:Object(_.jsx)(x.a,{}),path:"/home/idioms"},{id:Object(A.a)(),title:"Things In The Pic",icon:Object(_.jsx)(E.a,{}),subItems:[{id:Object(A.a)(),title:"List of things",path:"/home/things/list"},{id:Object(A.a)(),title:"Create New",path:"/home/things/new"}]},{id:Object(A.a)(),title:"English Topics",icon:Object(_.jsx)(v.a,{}),path:"/home/topics"},{id:Object(A.a)(),title:"English Grammar Notes",icon:Object(_.jsx)(g.a,{}),path:"/home/notes"},{id:Object(A.a)(),title:"English Tenses Practise",icon:Object(_.jsx)(y.a,{}),path:"/home/tenses"},{id:Object(A.a)(),title:"Q&A",icon:Object(_.jsx)(w.a,{}),path:"/home/QA"},{id:Object(A.a)(),title:"Definition & Synonyms",icon:Object(_.jsx)(N.a,{}),path:"/home/word-definition"},{id:Object(A.a)(),title:"Conjugation & Grammar",icon:Object(_.jsx)(T.a,{}),path:"/home/grammar-search"},{id:Object(A.a)(),title:"Settings",icon:Object(_.jsx)(D.a,{}),subItems:[{id:Object(A.a)(),title:"Voice Assistance",path:"/home/voice-assistance"},{id:Object(A.a)(),title:"Notification",path:"/word"},{id:Object(A.a)(),title:"Account Setting",path:"/word"}]}],P=n(18),S=(n(74),function(){var e=Object(r.useState)(0),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(_.jsx)("nav",{className:"sidenav-items",children:I.map((function(e,t){return Object(_.jsx)(L,{navItem:e,isOpen:t===n,setIsOpen:function(){return function(e){try{c(e!==n?e:null)}catch(t){throw t}}(t)}},e.id)}))})}),L=i.a.memo((function(e){var t=e.isOpen,n=e.setIsOpen,c=e.navItem;return Object(_.jsx)("ul",{className:"nav-item",onClick:n,children:Object(_.jsxs)("li",{children:[Object(_.jsxs)("div",{className:"d-flex flex-row justify-content-between",children:[Object(_.jsxs)("div",{children:[Object(_.jsx)("span",{className:"text-left",children:c.icon}),c.path?Object(_.jsx)(P.b,{className:"px-3",to:c.path,children:c.title}):Object(_.jsx)("span",{className:"px-3",children:c.title})]}),c.subItems&&Object(_.jsx)("span",{children:t?Object(_.jsx)(f.a,{}):Object(_.jsx)(p.a,{})})]}),c.subItems&&Object(_.jsx)(h.a,{in:t,children:Object(_.jsx)("ul",{className:"sub-items",children:c.subItems.map((function(e){return Object(_.jsx)(O.a,{in:t,children:Object(_.jsx)("li",{children:Object(_.jsx)(P.b,{to:e.path,onClick:function(e){return e.stopPropagation()},children:e.title})})},e.id)}))})})]})})})),R=(n(77),function(e){var t=e.isOpen,n=e.onCloseCallback,c=document.getElementById("portal"),s=Object(r.useRef)(),o=Object(r.useRef)();return t?a.a.createPortal(Object(_.jsxs)(i.a.Fragment,{children:[Object(_.jsx)("div",{className:"sidenav-overlay-container fadeIn",ref:o,onClick:function(e){try{e.preventDefault(),s.current.classList.replace("slideInLeft","slideOut"),o.current.classList.replace("fadeIn","fadeOut"),setTimeout((function(){n()}),300)}catch(t){throw t}}}),Object(_.jsx)("div",{className:"sidenavContainer shadow-sm slideInLeft",ref:s,children:Object(_.jsx)(S,{})})]}),c):null}),U=n(104),k=n(105),G=n(106),C=function(){return Object(_.jsx)("div",{className:"status-bar bg-primary text-light py-1",children:Object(_.jsxs)("div",{className:"container d-flex justify-content-between align-items-center h-100",children:[Object(_.jsx)("span",{children:"Welcome Nidhal Bettaibi"}),Object(_.jsxs)("div",{children:[Object(_.jsx)("a",{href:"https://www.facebook.com/",className:"icons mr-2 text-white",children:Object(_.jsx)(U.a,{})}),Object(_.jsx)("a",{href:"https://github.com/bettaibi",className:"icons mr-2 text-white",children:Object(_.jsx)(k.a,{})}),Object(_.jsx)("a",{href:"https://www.linkedin.com/in/nidhal-bettaibi-39b3a0b2/",className:"icons text-white",children:Object(_.jsx)(G.a,{})})]})]})})},V=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(r.useState)(e),n=Object(b.a)(t,2),c=n[0],a=n[1];return{isOpen:c,toggle:function(){try{a((function(e){return!e}))}catch(e){throw e}}}}(),t=e.isOpen,n=e.toggle;function c(){n()}return Object(_.jsxs)(i.a.Fragment,{children:[Object(_.jsx)(R,{isOpen:t,onCloseCallback:function(){return c()}}),Object(_.jsx)(C,{}),Object(_.jsx)("header",{className:"header shadow-sm bg-white",children:Object(_.jsx)(s.a,{className:"h-100",children:Object(_.jsxs)("div",{className:"h-100 d-flex flex-row justify-content-between align-items-center",children:[Object(_.jsxs)(P.b,{to:"/home",className:"d-flex flex-column align-items-center btn-icon",children:[Object(_.jsx)(o.a,{size:"18"}),Object(_.jsx)("span",{className:"fs-14",children:"Progress"})]}),Object(_.jsxs)(P.b,{to:"/home/todos",className:"d-flex flex-column align-items-center btn-icon",children:[Object(_.jsx)(u.a,{size:"18"}),Object(_.jsx)("span",{className:"fs-14",children:"Todos"})]}),Object(_.jsxs)(P.b,{to:"/home/games",className:"d-flex flex-column align-items-center btn-icon",children:[Object(_.jsx)(d.a,{size:"18"}),Object(_.jsx)("span",{className:"fs-14",children:"Games"})]}),Object(_.jsxs)(P.b,{to:"/home/profile",className:"d-flex flex-column align-items-center btn-icon",children:[Object(_.jsx)(l.a,{size:"18"}),Object(_.jsx)("span",{className:"fs-14",children:"Profile"})]}),Object(_.jsxs)("button",{className:"d-flex flex-column align-items-center d-md-none btn-icon",onClick:c,children:[Object(_.jsx)(j.a,{size:"18"}),Object(_.jsx)("span",{className:"fs-14",children:"Menu"})]})]})})})]})},B=n(87),z=n(59),F=n(11),H=n(35),J=n(20),W=n(62),K=function(e){var t=e.path,n=e.children,c=Object(W.a)(e,["path","children"]),a=Object(H.b)().user;return Object(_.jsx)(F.b,Object(J.a)(Object(J.a)({path:t},c),{},{children:a?n:Object(_.jsx)(F.a,{to:"/signin"})}))},M=n(41),Q=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(22)]).then(n.bind(null,367))})),Y=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(24)]).then(n.bind(null,362))})),q=Object(r.lazy)((function(){return n.e(30).then(n.bind(null,363))}));function Z(){return Object(_.jsxs)(i.a.Fragment,{children:[Object(_.jsx)(V,{}),Object(_.jsx)(s.a,{children:Object(_.jsxs)(B.a,{children:[Object(_.jsx)(z.a,{className:"display-xs-none rounded mt-3 mb-3 border rounded bg-light",sm:4,style:{position:"sticky",top:"66px",zIndex:999,height:"fit-content",padding:0},children:Object(_.jsx)(S,{})}),Object(_.jsx)(z.a,{className:"mb-3 mt-3",children:Object(_.jsx)(q,{})})]})})]})}var X=function(){return Object(_.jsx)(P.a,{children:Object(_.jsx)(H.a,{children:Object(_.jsx)(r.Suspense,{fallback:Object(_.jsx)(M.a,{}),children:Object(_.jsx)("div",{className:"main-container",children:Object(_.jsxs)(F.d,{children:[Object(_.jsx)(F.b,{path:"/",exact:!0,children:Object(_.jsx)(F.a,{to:"/home"})}),Object(_.jsx)(K,{path:"/home",children:Object(_.jsx)(Z,{})}),Object(_.jsx)(F.b,{path:"/signin",component:Q}),Object(_.jsx)(F.b,{path:"/signup",component:Y})]})})})})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=n(4),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.E:return Object(J.a)({},t.payload);default:return e}},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.D:return Object(J.a)({},t.payload);default:return e}},ne={email:"",uid:"",displayName:"",photoURL:""},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.O:return Object(J.a)({},e);case $.bb:return Object(J.a)({},t.payload);default:return e}},ae=n(5),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.P:return Object(ae.a)(t.payload);case $.m:return[t.payload].concat(Object(ae.a)(e));case $.z:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.cb:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.H:return Object(ae.a)(t.payload);case $.f:return[t.payload].concat(Object(ae.a)(e));case $.s:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.V:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.A:return Object(ae.a)(t.payload);case $.a:return[t.payload].concat(Object(ae.a)(e));case $.n:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.Q:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.B:return Object(ae.a)(t.payload);case $.b:return[t.payload].concat(Object(ae.a)(e));case $.o:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.R:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.I:return Object(ae.a)(t.payload);case $.g:return[t.payload].concat(Object(ae.a)(e));case $.t:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.W:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.F:return Object(ae.a)(t.payload);case $.d:return[t.payload].concat(Object(ae.a)(e));case $.q:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.T:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.N:return Object(ae.a)(t.payload);case $.l:return[t.payload].concat(Object(ae.a)(e));case $.y:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.ab:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.G:return Object(ae.a)(t.payload);case $.e:return[t.payload].concat(Object(ae.a)(e));case $.r:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.U:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.C:return Object(ae.a)(t.payload);case $.c:return[t.payload].concat(Object(ae.a)(e));case $.p:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.S:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.L:return Object(ae.a)(t.payload);case $.j:return[t.payload].concat(Object(ae.a)(e));case $.w:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));default:return e}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.K:return Object(ae.a)(t.payload);case $.i:return[t.payload].concat(Object(ae.a)(e));case $.v:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.Y:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.J:return Object(ae.a)(t.payload);case $.h:return[t.payload].concat(Object(ae.a)(e));case $.u:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.X:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $.M:return Object(ae.a)(t.payload);case $.k:return[t.payload].concat(Object(ae.a)(e));case $.x:return Object(ae.a)(e.filter((function(e){return e.id!==t.id})));case $.Z:return Object(ae.a)(e.map((function(e){return e.id!==t.id?e:t.payload})));default:return e}},me=n(29),xe=Object(me.b)({definitions:te,conjugations:ee,user:ce,verbs:re,nouns:ie,adjectives:se,adverbs:oe,phrasalVerbs:ue,linkers:de,topics:le,notes:je,idioms:be,things:he,tenses:Oe,questionAndAnswers:fe,todos:pe}),Ee=n(36),ve=Object(me.c)(xe);a.a.render(Object(_.jsx)(Ee.a,{store:ve,children:Object(_.jsx)(X,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[84,6,7]]]);
//# sourceMappingURL=main.48c91d85.chunk.js.map