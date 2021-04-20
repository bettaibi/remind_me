(this.webpackJsonpremind_me=this.webpackJsonpremind_me||[]).push([[23],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var r=t(20),n=t(26),s=t(1),i=t(21),c=t.n(i),o=t(361),l=t(2),d=function(e){var a=e.isShown,t=e.message,r=e.type,n=e.title,s=document.getElementById("portal");return c.a.createPortal(Object(l.jsxs)(o.a,{className:"m-3 fixed-top",show:a,variant:r,style:{zIndex:9999999999},children:[Object(l.jsx)("h5",{children:n}),Object(l.jsx)("p",{className:"m-0",children:t})]}),s)},u=function(){var e=Object(s.useState)({title:"",isShown:!1,message:"",type:"success"}),a=Object(n.a)(e,2),t=a[0],i=a[1];return{showMsg:function(e,a,n){i({isShown:!0,message:a,title:e,type:n||"success"}),setTimeout((function(){i(Object(r.a)(Object(r.a)({},t),{},{isShown:!1}))}),3e3)},Snackbar:Object(s.useCallback)((function(){return Object(l.jsx)(d,{message:t.message,isShown:t.isShown,type:t.type,title:t.title})}),[t])}}},122:function(e,a,t){"use strict";t.d(a,"b",(function(){return C})),t.d(a,"a",(function(){return g}));var r=t(1),n=t.n(r),s=t(7),i=t(9),c=t(19),o=t.n(c),l=t(132),d=t(28),u=n.a.createContext(null),b=n.a.createContext(null);b.displayName="AccordionContext";var j=b;var m=n.a.forwardRef((function(e,a){var t=e.as,c=void 0===t?"button":t,o=e.children,l=e.eventKey,d=e.onClick,b=Object(i.a)(e,["as","children","eventKey","onClick"]),m=function(e,a){var t=Object(r.useContext)(j),n=Object(r.useContext)(u);return function(r){n&&n(e===t?null:e,r),a&&a(r)}}(l,d);return"button"===c&&(b.type="button"),n.a.createElement(c,Object(s.a)({ref:a,onClick:m},b),o)})),h=t(89),p=n.a.forwardRef((function(e,a){var t=e.children,c=e.eventKey,o=Object(i.a)(e,["children","eventKey"]),l=Object(r.useContext)(j);return n.a.createElement(u.Provider,{value:null},n.a.createElement(h.a,Object(s.a)({ref:a,in:l===c},o),n.a.createElement("div",null,n.a.Children.only(t))))}));p.displayName="AccordionCollapse";var v=p,f=n.a.forwardRef((function(e,a){var t=Object(l.a)(e,{activeKey:"onSelect"}),r=t.as,c=void 0===r?"div":r,b=t.activeKey,m=t.bsPrefix,h=t.children,p=t.className,v=t.onSelect,f=Object(i.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),O=o()(p,Object(d.a)(m,"accordion"));return n.a.createElement(j.Provider,{value:b||null},n.a.createElement(u.Provider,{value:v||null},n.a.createElement(c,Object(s.a)({ref:a},f,{className:O}),h)))}));f.displayName="Accordion",f.Toggle=m,f.Collapse=v;var O=f,x=t(133),w=t(103),y=t(2),C=function(e){var a=e.children;return Object(y.jsx)(O,{defaultActiveKey:"ev0",className:"mt-3",children:a})},g=function(e){var a=e.children,t=e.eventKey,r=e.headerText;return Object(y.jsxs)(x.a,{children:[Object(y.jsxs)(O.Toggle,{className:"bg-light d-flex flex-row justify-content-between",as:x.a.Header,eventKey:t,children:[Object(y.jsx)("p",{className:"m-0",children:r}),Object(y.jsx)(w.a,{})]}),Object(y.jsx)(O.Collapse,{eventKey:t,children:Object(y.jsx)(x.a.Body,{children:a})})]})}},133:function(e,a,t){"use strict";var r=t(7),n=t(9),s=t(19),i=t.n(s),c=t(1),o=t.n(c),l=t(28),d=t(126),u=t(127),b=o.a.createContext(null);b.displayName="CardContext";var j=b,m=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,c=e.variant,d=e.as,u=void 0===d?"img":d,b=Object(n.a)(e,["bsPrefix","className","variant","as"]),j=Object(l.a)(t,"card-img");return o.a.createElement(u,Object(r.a)({ref:a,className:i()(c?j+"-"+c:j,s)},b))}));m.displayName="CardImg",m.defaultProps={variant:null};var h=m,p=Object(u.a)("h5"),v=Object(u.a)("h6"),f=Object(d.a)("card-body"),O=Object(d.a)("card-title",{Component:p}),x=Object(d.a)("card-subtitle",{Component:v}),w=Object(d.a)("card-link",{Component:"a"}),y=Object(d.a)("card-text",{Component:"p"}),C=Object(d.a)("card-header"),g=Object(d.a)("card-footer"),P=Object(d.a)("card-img-overlay"),N=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.className,d=e.bg,u=e.text,b=e.border,m=e.body,h=e.children,p=e.as,v=void 0===p?"div":p,O=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),x=Object(l.a)(t,"card"),w=Object(c.useMemo)((function(){return{cardHeaderBsPrefix:x+"-header"}}),[x]);return o.a.createElement(j.Provider,{value:w},o.a.createElement(v,Object(r.a)({ref:a},O,{className:i()(s,x,d&&"bg-"+d,u&&"text-"+u,b&&"border-"+b)}),m?o.a.createElement(f,null,h):h))}));N.displayName="Card",N.defaultProps={body:!1},N.Img=h,N.Title=O,N.Subtitle=x,N.Body=f,N.Link=w,N.Text=y,N.Header=C,N.Footer=g,N.ImgOverlay=P;a.a=N},194:function(e,a,t){"use strict";var r=t(7),n=t(9),s=t(19),i=t.n(s),c=t(1),o=t.n(c),l=t(28),d=t(129),u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,s=e.variant,c=e.size,u=e.active,b=e.className,j=e.block,m=e.type,h=e.as,p=Object(n.a)(e,["bsPrefix","variant","size","active","className","block","type","as"]),v=Object(l.a)(t,"btn"),f=i()(b,v,u&&"active",s&&v+"-"+s,j&&v+"-block",c&&v+"-"+c);if(p.href)return o.a.createElement(d.a,Object(r.a)({},p,{as:h,ref:a,className:i()(f,p.disabled&&"disabled")}));a&&(p.ref=a),m?p.type=m:h||(p.type="button");var O=h||"button";return o.a.createElement(O,Object(r.a)({},p,{className:f}))}));u.displayName="Button",u.defaultProps={variant:"primary",active:!1,disabled:!1},a.a=u},345:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),s=t(194),i=t(366),c=t(117),o=t(122),l=t(118),d=t(115),u=t(35),b=t(2),j=l.b().shape({displayName:l.d().required("Name is required"),photoUrl:l.d().required("Photo url is required")}),m=l.b().shape({newEmail:l.d().email("Invalid Email").required("Email is required")}),h=l.b().shape({password:l.d().required("Password is required").min(6,"Password must have at least 6 letters"),newPassword:l.d().required("New Password is required").min(6,"Password must have at least 6 letters"),passwordConfirmation:l.d().required("The Confirmation is required").min(6,"Password must have at least 6 letters").oneOf([l.c("newPassword")],"Password must much")}),p=function(e){var a=e.updateUserProfile,t=e.user,r=t?t.email:"Email not provided",o=Object(d.a)(),l=o.Snackbar,u=o.showMsg,m={displayName:t?t.displayName:"",photoUrl:t?t.photoURL:""};return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(c.b,{initialValues:m,onSubmit:function(e){return function(e){a(e.displayName,e.photoUrl).then((function(){u("Profile updated","your profile has been updated")})).catch((function(e){u("Failed to",e.message,"warning")}))}(e)},validationSchema:j,children:function(e){var a=e.handleBlur,t=e.handleSubmit,n=e.handleChange,c=e.touched,o=e.errors,l=e.values;return Object(b.jsxs)(i.a,{onSubmit:t,children:[Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Email"}),Object(b.jsx)(i.a.Control,{size:"sm",value:r,disabled:!0})]}),Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Name"}),Object(b.jsx)(i.a.Control,{size:"sm",autoComplete:"off",type:"text",placeholder:"Enter your name",name:"displayName",value:l.displayName,onChange:n,onBlur:a,isInvalid:c.displayName&&!!o.displayName}),Object(b.jsx)(i.a.Control.Feedback,{type:"invalid",children:o.displayName})]}),Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Photo Url"}),Object(b.jsx)(i.a.Control,{size:"sm",autoComplete:"off",type:"text",placeholder:"place here your photo url",name:"photoUrl",value:l.photoUrl,onChange:n,onBlur:a,isInvalid:c.photoUrl&&!!o.photoUrl}),Object(b.jsx)(i.a.Control.Feedback,{type:"invalid",children:o.photoUrl})]}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsx)(s.a,{type:"submit",variant:"primary",size:"sm",children:"Save"})})]})}}),Object(b.jsx)(l,{})]})},v=function(e){var a=e.updateUserEmail,t=e.user,r=Object(d.a)(),o=r.Snackbar,l=r.showMsg,u=t?t.email:"Email not provided";return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(c.b,{initialValues:{newEmail:""},onSubmit:function(e){return function(e){a(e.newEmail).then((function(){l("Email updated","your email has been updated")})).catch((function(e){l("Failed to updated",e.message,"warning")}))}(e)},validationSchema:m,children:function(e){var a=e.handleBlur,t=e.handleSubmit,r=e.handleChange,n=e.touched,c=e.errors,o=e.values;return Object(b.jsxs)(i.a,{onSubmit:t,children:[Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Current Email"}),Object(b.jsx)(i.a.Control,{size:"sm",value:u,disabled:!0})]}),Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"New Email"}),Object(b.jsx)(i.a.Control,{size:"sm",autoComplete:"off",type:"email",placeholder:"New email...",name:"newEmail",value:o.newEmail,onChange:r,onBlur:a,isInvalid:n.newEmail&&!!c.newEmail}),Object(b.jsx)(i.a.Control.Feedback,{type:"invalid",children:c.newEmail})]}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsx)(s.a,{type:"submit",variant:"primary",size:"sm",children:"Save"})})]})}}),Object(b.jsx)(o,{})]})},f=function(e){var a=e.updateUserPassword,t=Object(d.a)(),r=t.Snackbar,o=t.showMsg;return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsx)(c.b,{initialValues:{password:"",newPassword:"",passwordConfirmation:""},onSubmit:function(e){return function(e){a(e.newPassword).then((function(){o("Password updated","your password has been updated")})).catch((function(e){o("Failed to",e.message,"warning")}))}(e)},validationSchema:h,children:function(e){var a=e.handleBlur,t=e.handleSubmit,r=e.handleChange,n=e.touched,c=e.errors,o=e.values;return Object(b.jsxs)(i.a,{onSubmit:t,children:[Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Password"}),Object(b.jsx)(i.a.Control,{size:"sm",autoComplete:"off",type:"password",placeholder:"Current password...",name:"password",value:o.password,onChange:r,onBlur:a,isInvalid:n.password&&!!c.password}),Object(b.jsx)(i.a.Control.Feedback,{type:"invalid",children:c.password})]}),Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"New Password"}),Object(b.jsx)(i.a.Control,{size:"sm",autoComplete:"off",type:"password",placeholder:"New password...",name:"newPassword",value:o.newPassword,onChange:r,onBlur:a,isInvalid:n.newPassword&&!!c.newPassword}),Object(b.jsx)(i.a.Control.Feedback,{type:"invalid",children:c.newPassword})]}),Object(b.jsxs)(i.a.Group,{children:[Object(b.jsx)(i.a.Label,{children:"Password Confirmation"}),Object(b.jsx)(i.a.Control,{size:"sm",autoComplete:"off",type:"password",placeholder:"Confirm your password...",name:"passwordConfirmation",value:o.passwordConfirmation,onChange:r,onBlur:a,isInvalid:n.passwordConfirmation&&!!c.passwordConfirmation}),Object(b.jsx)(i.a.Control.Feedback,{type:"invalid",children:c.passwordConfirmation})]}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsx)(s.a,{type:"submit",variant:"primary",size:"sm",children:"Save"})})]})}}),Object(b.jsx)(r,{})]})};a.default=function(){var e=Object(u.b)(),a=e.signOut,t=e.updateUserEmail,r=e.updateUserPassword,i=e.updateUserProfile,c=e.user;return Object(b.jsxs)(n.a.Fragment,{children:[Object(b.jsxs)("div",{className:"border rounded p-3 bg-light",children:[Object(b.jsx)("h6",{children:"Account Setting"}),Object(b.jsx)("div",{className:"text-right",children:Object(b.jsx)(s.a,{variant:"danger",size:"sm",onClick:function(){a().then((function(){window.location.reload()})).catch((function(e){return console.log(e)}))},children:"Signout"})})]}),Object(b.jsxs)(o.b,{children:[Object(b.jsx)(o.a,{eventKey:"update_profile",headerText:"Profile Details",children:Object(b.jsx)(p,{updateUserProfile:i,user:c})}),Object(b.jsx)(o.a,{eventKey:"ev0",headerText:"Email Setting",children:Object(b.jsx)(v,{updateUserEmail:t,user:c})}),Object(b.jsx)(o.a,{eventKey:"update_password",headerText:"Password Setting",children:Object(b.jsx)(f,{updateUserPassword:r})})]})]})}}}]);
//# sourceMappingURL=23.cfa48e21.chunk.js.map