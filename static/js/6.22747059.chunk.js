(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[6],{295:function(t,e,n){"use strict";n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return b}));var r=n(8),o=n(300),c=(n(0),n(296)),i=n.n(c),s=n(163),a=n(7),u=function(t){var e=t.meta,n=e.touched,r=e.error,o=t.children,c=n&&r;return Object(a.jsxs)("div",{className:"".concat(i.a.formControl," ").concat(c&&i.a.error),children:[o,c&&Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:r})})]})},l=function(t){var e=t.input,n=(t.meta,Object(o.a)(t,["input","meta"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},t),{},{children:Object(a.jsx)("textarea",Object(r.a)(Object(r.a)({},e),n))}))},j=function(t){var e=t.input,n=(t.meta,Object(o.a)(t,["input","meta"]));return Object(a.jsx)(u,Object(r.a)(Object(r.a)({},t),{},{children:Object(a.jsx)("input",Object(r.a)(Object(r.a)({},e),n))}))};function b(t,e,n,o){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.a,Object(r.a)({className:u,name:e,component:o,placeholder:t,validate:n},c))," ",i]})}},296:function(t,e,n){t.exports={formControl:"FormsControls_formControl__M0W-4",error:"FormsControls_error__2fNsK"}},297:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=function(t){return t?void 0:"Field is required"},o=function(t){return function(e){return e&&e.length>t?"Max length is ".concat(t," symbols"):void 0}}},302:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(107);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(a){o=!0,c=a}finally{try{r||null==s.return||s.return()}finally{if(o)throw c}}return n}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},307:function(t,e,n){"use strict";var r=n(8),o=n(300),c=(n(0),n(16)),i=n(69),s=n(7),a=function(t){return{isAuth:t.auth.isAuth}};e.a=function(t){return Object(i.b)(a,{})((function(e){var n=e.isAuth,i=Object(o.a)(e,["isAuth"]);return n?Object(s.jsx)(t,Object(r.a)({},i)):Object(s.jsx)(c.a,{to:"/login"})}))}},321:function(t,e,n){t.exports={avatar:"ProfileInfo_avatar__v0QMI",contact:"ProfileInfo_contact__1cK74"}},372:function(t,e,n){t.exports={post:"Post_post__1xeZn",item:"Post_item__1qbBJ",photo:"Post_photo__1kzoD",btn:"Post_btn__2wcP5"}},373:function(t,e,n){t.exports={myposts:"MyPosts_myposts__2869F",title:"MyPosts_title__1V49T",textArea:"MyPosts_textArea__2qX7E",btn:"MyPosts_btn__1CtxC",form:"MyPosts_form__2K55A"}},387:function(t,e,n){"use strict";n.r(e);var r=n(8);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t){return(a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(t,e){return!e||"object"!==a(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function l(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=s(t);if(e){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var j=n(0),b=n.n(j),f=n(16),d=n(372),p=n.n(d),h=n(7),O=function(t){var e=t.message,n=t.likeCount;return Object(h.jsxs)("div",{className:p.a.post,children:[Object(h.jsxs)("div",{className:p.a.item,children:[Object(h.jsx)("img",{className:p.a.photo,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar example"}),Object(h.jsx)("p",{children:e})]}),Object(h.jsxs)("button",{className:p.a.btn,children:["Like ",n]})]})},m=n(164),x=n(297),v=n(295),y=Object(m.a)({form:"profile-add-post"})((function(t){return Object(h.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(h.jsx)("div",{children:Object(v.c)("Your post","newPost",[x.b],v.a)}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Add post"})})]})})),_=n(69),g=function(t){return t.profile.postsData},k=function(t){return t.profile.status},P=function(t){return t.profile.profile},S=n(105),w=n(373),A=n.n(w),N=function(){var t=Object(_.d)(g),e=Object(_.c)();return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:A.a.myposts,children:[Object(h.jsx)("h2",{className:A.a.title,children:"MY POSTS"}),Object(h.jsx)(y,{onSubmit:function(t){e(S.a.addPost(t.newPost))}})]}),Object(h.jsx)("div",{className:A.a.posts,children:t.map((function(t){return Object(h.jsx)(O,{message:t.message,likeCount:t.likeCount},t.id)}))})]})},C=n(11),M=n.n(C),I=n(26),F=n(302),D=n(98),E=function(){var t=Object(_.d)(k),e=Object(j.useState)(!1),n=Object(F.a)(e,2),r=n[0],o=n[1],c=Object(j.useState)(t),i=Object(F.a)(c,2),s=i[0],a=i[1],u=Object(_.c)();return Object(j.useEffect)((function(){a(t)}),[t]),Object(h.jsx)(h.Fragment,{children:r?Object(h.jsx)("input",{autoFocus:!0,defaultValue:s,onBlur:function(){o(!1),u(Object(S.g)(s))},onChange:function(t){a(t.target.value)}}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("b",{children:"Status"}),": ",Object(h.jsx)("span",{onDoubleClick:function(){o(!0)},children:t||"----------"})]})})},T=n(321),J=n.n(T),R=n(296),q=n.n(R),U=Object(m.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,n=t.profile,r=t.error;return Object(h.jsx)("form",{onSubmit:e,children:Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Save"})}),r&&Object(h.jsx)("div",{className:q.a.formSummaryError,children:r}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full Name"}),": ",Object(v.c)("Full Name","fullName",[],v.a)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",Object(v.c)("","lookingForAJob",[],v.a,{type:"checkbox"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skils"}),": ",Object(v.c)("My professional skils","lookingForAJobDescription",[],v.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",Object(v.c)("About me","aboutMe",[],v.b)]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),": ",Object.keys(n.contacts).map((function(t){return Object(h.jsxs)("div",{className:J.a.contact,children:[Object(h.jsx)("b",{children:t}),": ",Object(v.c)(t,"contacts.".concat(t),[],v.a)]},t)}))]})]})})})),V=function(t){var e=t.profile,n=t.isOwner,r=t.goToEditMode;return Object(h.jsxs)("div",{children:[n&&Object(h.jsx)("div",{children:Object(h.jsx)("button",{onClick:r,children:"Edit"})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Full Name"}),": ",e.fullName]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"My professional skils"}),": ",e.lookingForAJobDescription]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(h.jsx)(z,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},z=function(t){var e=t.contactTitle,n=t.contactValue;return Object(h.jsxs)("div",{className:J.a.contact,children:[Object(h.jsx)("b",{children:e}),": ",n]})},K=function(t){var e=t.isOwner,n=Object(j.useState)(!1),r=Object(F.a)(n,2),o=r[0],c=r[1],i=Object(_.d)(P),s=Object(_.c)();if(!i)return Object(h.jsx)(D.a,{});var a=function(){var t=Object(I.a)(M.a.mark((function t(e){return M.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(Object(S.f)(e));case 2:c(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=i.photos.large||i.photos.small;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:J.a.avatar,src:u||"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar"}),e&&Object(h.jsx)("input",{type:"file",onChange:function(t){t.target.files.lenght&&s(Object(S.e)(t.target.files[0]))}}),o?Object(h.jsx)(U,{initialValues:i,profile:i,onSubmit:a}):Object(h.jsx)(V,{profile:i,isOwner:e,goToEditMode:function(){return c(!0)}}),Object(h.jsx)(E,{})]})})},L=function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)(K,{isOwner:t.isOwner}),Object(h.jsx)(N,{})]})},B=n(54),Y=n(307),Q=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}(u,t);var e,n,s,a=l(u);function u(){return o(this,u),a.apply(this,arguments)}return e=u,(n=[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getProfileInfo(t),this.props.getProfileStatus(t)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsx)(L,Object(r.a)(Object(r.a)({},this.props),{},{isOwner:!this.props.match.params.userId}))})}}])&&c(e.prototype,n),s&&c(e,s),u}(b.a.Component);e.default=Object(B.d)(Object(_.b)((function(t){return{authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getProfileInfo:S.c,getProfileStatus:S.d}),f.h,Y.a)(Q)}}]);
//# sourceMappingURL=6.22747059.chunk.js.map