(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[30],{403:function(e,t,r){"use strict";r.r(t);var n=r(24),a=r.n(n),c=r(31),s=r(18),i=r(1),o=r.n(i),d=r(36),l=r(409),j=r(406),b=r(7),u=r(9),h=r(20),x=r.n(h),m=r(28),O=o.a.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.striped,c=e.bordered,s=e.borderless,i=e.hover,d=e.size,l=e.variant,j=e.responsive,h=Object(u.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(m.a)(r,"table"),p=x()(n,O,l&&O+"-"+l,d&&O+"-"+d,a&&O+"-striped",c&&O+"-bordered",s&&O+"-borderless",i&&O+"-hover"),v=o.a.createElement("table",Object(b.a)({},h,{className:p,ref:t}));if(j){var f=O+"-responsive";return"string"===typeof j&&(f=f+"-"+j),o.a.createElement("div",{className:f},v)}return v})),p=r(119),v=r(4),f=r(10),g=r.n(f),y=r(120),N=r(211),w=r.n(N),q=r(2),S=y.b().shape({query:y.d().required("Enter a Verb to get its conjugations").max(25,"Too much letters!")}),k=function(e){var t=e.payload,r=e.str,n=e.color,a=e.variant;return Object(q.jsxs)(o.a.Fragment,{children:[Object(q.jsxs)(j.a,{className:"p-2 mb-3 mt-0 fw-600",variant:a,children:[" ",r," "]}),Object(q.jsx)("div",{className:"d-grid-2",children:t.map((function(e,t){return Object(q.jsxs)(O,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:Object(q.jsx)("span",{children:"#"})}),Object(q.jsx)("th",{className:"fw-500 pl-2 "+n,children:Object(q.jsx)("span",{children:e.heading})})]})}),Object(q.jsx)("tbody",{children:e.forms.map((function(e,t){return Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{className:"text-secondary text-capitalize fw-600",style:{width:"60px"},children:e[0]}),Object(q.jsx)("td",{className:"pl-2",children:e[1]})]},r+t)}))})]},r+"con_table"+t)}))})]})},_=function(){var e=[12321,9955,77878,22125],t=Object(i.useState)(!1),r=Object(s.a)(t,2),n=r[0],a=r[1];return Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)").matches;a(e)}),[]),Object(q.jsxs)(f.SkeletonTheme,{color:n?"#474c52":"",highlightColor:n?"#444":"",children:[Object(q.jsxs)("div",{className:"text-center border rounded mb-3 mt-3 p-3 bg-light",children:[Object(q.jsxs)("span",{style:{marginRight:"1rem"},children:[" ",Object(q.jsx)(g.a,{})]}),Object(q.jsxs)("span",{children:[" ",Object(q.jsx)(g.a,{})," "]})]}),Object(q.jsxs)("div",{className:"bg-light rounded border px-3 pt-3",children:[Object(q.jsx)(g.a,{}),Object(q.jsx)("div",{className:"d-grid-2 mt-3",children:e.map((function(t){return Object(q.jsxs)(O,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(q.jsx)("thead",{children:Object(q.jsxs)("tr",{children:[Object(q.jsx)("th",{children:Object(q.jsx)(g.a,{})}),Object(q.jsx)("th",{children:Object(q.jsx)(g.a,{})})]})}),Object(q.jsx)("tbody",{children:e.map((function(e,t){return Object(q.jsxs)("tr",{children:[Object(q.jsx)("td",{children:Object(q.jsx)(g.a,{})}),Object(q.jsx)("td",{className:"ml-1",children:Object(q.jsx)(g.a,{})})]},e+t)}))})]},"con_table"+t)}))})]})]})},C=function(){var e=Object(d.c)((function(e){return e.conjugations})),t=Object(i.useState)(!1),r=Object(s.a)(t,2),n=r[0],o=r[1],l=Object(i.useState)(!1),j=Object(s.a)(l,2),b=j[0],u=j[1],h=Object(d.b)(),x=function(){var e=Object(c.a)(a.a.mark((function e(t){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.get("".concat("https://lt-nlgservice.herokuapp.com/rest/english/conjugate","?verb=").concat(t));case 3:return r=e.sent,e.next=6,r.data;case 6:return e.abrupt("return",e.sent);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return{data:e,isLoading:n,isError:b,grammarSearch:function(e){o(!0),x(e).then((function(e){var t;"OK"===e.result?(h((t=e,{type:v.E,payload:t})),o(!1),b&&u(!1)):(o(!1),u(!0))})).catch((function(e){o(!1),u(!0)}))}}};t.default=function(){var e=C(),t=e.data,r=e.isLoading,n=e.isError,a=e.grammarSearch,c=t?{query:t.conjugated_forms[0][1]}:{query:""};return Object(q.jsxs)("div",{children:[Object(q.jsx)(p.b,{initialValues:c,validationSchema:S,onSubmit:function(e){return function(e){a(e.query)}(e)},children:function(e){var t=e.handleBlur,r=e.handleChange,n=e.handleSubmit,a=e.values,c=e.touched,s=e.errors;return Object(q.jsxs)(l.a,{noValidate:!0,onSubmit:n,children:[Object(q.jsx)(l.a.Control,{name:"query",value:a.query,onChange:r,onBlur:t,isInvalid:c.query&&!!s.query,placeholder:"Tap a verb and press enter",required:!0,type:"search",autoComplete:"off"}),Object(q.jsx)(l.a.Control.Feedback,{type:"invalid",children:s.query})]})}}),r&&Object(q.jsx)(_,{}),n&&Object(q.jsx)(j.a,{className:"mt-3",variant:"danger",children:"Oops, we could not find the verb that you have been looking for, please check your internet connection and try again."}),t&&!r&&Object(q.jsxs)(q.Fragment,{children:[Object(q.jsx)("div",{className:"d-flex flex-row bg-light align-items-center justify-content-center flex-wrap border rounded my-3 p-3",children:t.conjugated_forms.map((function(e,t){return Object(q.jsxs)("div",{className:"mx-2",children:[Object(q.jsxs)("span",{className:"text-secondary",children:[e[0],": "]}),Object(q.jsx)("span",{className:"text-secondary fw-600",children:e[1]})]},"form"+t)}))}),Object(q.jsxs)("div",{className:"bg-light pt-3 px-3 border rounded",children:[Object(q.jsx)(k,{payload:t.conjugation_tables.indicative,str:"Indicative",color:"text-success",variant:"success"}),Object(q.jsx)(k,{payload:t.conjugation_tables.conditional,str:"Conditional",color:"text-info",variant:"info"}),Object(q.jsx)(k,{payload:t.conjugation_tables.passive,str:"Passive",color:"text-danger",variant:"danger"})]})]})]})}}}]);
//# sourceMappingURL=30.be1b3141.chunk.js.map