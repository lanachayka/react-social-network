(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[5],{228:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"a",(function(){return j})),a.d(t,"c",(function(){return l}));var s=a(3),n=a(233),c=(a(0),a(229)),r=a.n(c),i=a(105),o=a(2),u=function(e){var t=e.meta,a=t.touched,s=t.error,n=e.children,c=a&&s;return Object(o.jsxs)("div",{className:"".concat(r.a.formControl," ").concat(c&&r.a.error),children:[n,c&&Object(o.jsx)("div",{children:Object(o.jsx)("span",{children:s})})]})},d=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return Object(o.jsx)(u,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("textarea",Object(s.a)(Object(s.a)({},t),a))}))},j=function(e){var t=e.input,a=(e.meta,Object(n.a)(e,["input","meta"]));return Object(o.jsx)(u,Object(s.a)(Object(s.a)({},e),{},{children:Object(o.jsx)("input",Object(s.a)(Object(s.a)({},t),a))}))};function l(e,t,a,n){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(s.a)({className:u,name:t,component:n,placeholder:e,validate:a},c))," ",r]})}},229:function(e,t,a){e.exports={formControl:"FormsControls_formControl__M0W-4",error:"FormsControls_error__2fNsK"}},230:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return n}));var s=function(e){return e?void 0:"Field is required"},n=function(e){return function(t){return t&&t.length>e?"Max length is ".concat(e," symbols"):void 0}}},240:function(e,t,a){"use strict";var s=a(3),n=a(233),c=(a(0),a(8)),r=a(18),i=a(2),o=function(e){return{isAuth:e.auth.isAuth}};t.a=function(e){return Object(r.b)(o,{})((function(t){var a=t.isAuth,r=Object(n.a)(t,["isAuth"]);return a?Object(i.jsx)(e,Object(s.a)({},r)):Object(i.jsx)(c.a,{to:"/login"})}))}},258:function(e,t,a){e.exports={dialog:"Dialog_dialog__24Zhq",active:"Dialog_active__XkXzf",user:"Dialog_user__35ZuG",img:"Dialog_img__37Hiv"}},259:function(e,t,a){e.exports={message:"Message_message__2Wplz"}},260:function(e,t,a){e.exports={add:"AddMessageForm_add__1hf1H",textArea:"AddMessageForm_textArea__LHXOn",btn:"AddMessageForm_btn__1DGDz"}},304:function(e,t,a){e.exports={dialogs:"Dialogs_dialogs__37K0U",dialogsItems:"Dialogs_dialogsItems__2XYIc"}},323:function(e,t,a){"use strict";a.r(t);a(0);var s=a(17),n=a(258),c=a.n(n),r=a(2),i=function(e){var t=e.id,a=e.userName,n=e.photo;return Object(r.jsx)(s.b,{to:"/dialogs/".concat(t),activeClassName:c.a.active,className:c.a.dialog,children:Object(r.jsxs)("div",{className:c.a.user,children:[Object(r.jsx)("img",{className:c.a.img,src:n,alt:"Avatar example"}),a]})})},o=a(259),u=a.n(o),d=function(e){var t=e.message;return Object(r.jsx)("div",{className:u.a.message,children:t})},j=a(260),l=a.n(j),m=a(106),b=a(230),g=a(228),O=Object(b.a)(50),f=Object(m.a)({form:"message"})((function(e){return Object(r.jsxs)("form",{className:l.a.add,onSubmit:e.handleSubmit,children:[Object(g.c)("Your message...","newMessage",[b.b,O],g.b,{},"",l.a.textArea),Object(r.jsx)("button",{className:l.a.btn,children:"Send message"})]})})),h=a(304),_=a.n(h),x=a(18),v=a(74),p=function(e){return e.messages.dialogsData},N=function(e){return e.messages.messagesData},A=a(26),D=a(240);t.default=Object(A.d)(D.a)((function(){var e=Object(x.d)(p),t=Object(x.d)(N),a=Object(x.c)();return Object(r.jsxs)("div",{className:_.a.dialogs,children:[Object(r.jsx)("div",{className:_.a.dialogsItems,children:e.map((function(e){return Object(r.jsx)(i,{id:e.id,userName:e.userName,photo:e.photo},e.id)}))}),Object(r.jsxs)("div",{className:_.a.messages,children:[t.map((function(e){return Object(r.jsx)(d,{message:e.message},e.id)})),Object(r.jsx)(f,{onSubmit:function(e){a(v.a.sendMessage(e.newMessage))}})]})]})}))}}]);
//# sourceMappingURL=5.7a6d419a.chunk.js.map