(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[4],{230:function(t,e,s){"use strict";s.d(e,"b",(function(){return l})),s.d(e,"a",(function(){return j})),s.d(e,"c",(function(){return b}));var n=s(3),r=s(241),o=(s(0),s(231)),c=s.n(o),i=s(108),a=s(2),u=function(t){var e=t.meta,s=e.touched,n=e.error,r=t.children,o=s&&n;return Object(a.jsxs)("div",{className:"".concat(c.a.formControl," ").concat(o&&c.a.error),children:[r,o&&Object(a.jsx)("div",{children:Object(a.jsx)("span",{children:n})})]})},l=function(t){var e=t.input,s=(t.meta,Object(r.a)(t,["input","meta"]));return Object(a.jsx)(u,Object(n.a)(Object(n.a)({},t),{},{children:Object(a.jsx)("textarea",Object(n.a)(Object(n.a)({},e),s))}))},j=function(t){var e=t.input,s=(t.meta,Object(r.a)(t,["input","meta"]));return Object(a.jsx)(u,Object(n.a)(Object(n.a)({},t),{},{children:Object(a.jsx)("input",Object(n.a)(Object(n.a)({},e),s))}))};function b(t,e,s,r){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"",u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";return Object(a.jsxs)("div",{children:[Object(a.jsx)(i.a,Object(n.a)({className:u,name:e,component:r,placeholder:t,validate:s},o))," ",c]})}},231:function(t,e,s){t.exports={formControl:"FormsControls_formControl__M0W-4",error:"FormsControls_error__2fNsK"}},232:function(t,e,s){"use strict";s.d(e,"b",(function(){return n})),s.d(e,"a",(function(){return r}));var n=function(t){return t?void 0:"Field is required"},r=function(t){return function(e){return e&&e.length>t?"Max length is ".concat(t," symbols"):void 0}}},235:function(t,e,s){"use strict";s.d(e,"a",(function(){return r}));var n=s(60);function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var s=[],n=!0,r=!1,o=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(s.push(c.value),!e||s.length!==e);n=!0);}catch(a){r=!0,o=a}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return s}}(t,e)||Object(n.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},240:function(t,e,s){"use strict";var n=s(3),r=(s(0),s(8)),o=s(22),c=s(2);e.a=function(t){return Object(o.b)((function(t){return{isAuth:t.auth.isAuth}}))((function(e){return e.isAuth?Object(c.jsx)(t,Object(n.a)({},e)):Object(c.jsx)(r.a,{to:"/login"})}))}},254:function(t,e,s){t.exports={avatar:"ProfileInfo_avatar__v0QMI",contact:"ProfileInfo_contact__1cK74"}},302:function(t,e,s){t.exports={myposts:"MyPosts_myposts__2869F",title:"MyPosts_title__1V49T",textArea:"MyPosts_textArea__2qX7E",btn:"MyPosts_btn__1CtxC",form:"MyPosts_form__2K55A"}},303:function(t,e,s){t.exports={post:"Post_post__1xeZn",item:"Post_item__1qbBJ",photo:"Post_photo__1kzoD",btn:"Post_btn__2wcP5"}},312:function(t,e,s){"use strict";s.r(e);var n=s(3),r=s(36),o=s(37),c=s(47),i=s(46),a=s(0),u=s.n(a),l=s(65),j=s(109),b=s(232),d=s(230),f=s(2),h=Object(j.a)({form:"profile-add-post"})((function(t){return Object(f.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(f.jsx)("div",{children:Object(d.c)("Your post","newPost",[b.b],d.a)}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Add post"})})]})})),p=s(302),O=s.n(p),m=s(303),x=s.n(m),v=function(t){var e=t.message,s=t.likeCount;return Object(f.jsxs)("div",{className:x.a.post,children:[Object(f.jsxs)("div",{className:x.a.item,children:[Object(f.jsx)("img",{className:x.a.photo,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar example"}),Object(f.jsx)("p",{children:e})]}),Object(f.jsxs)("button",{className:x.a.btn,children:["Like ",s]})]})},P=function(t){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{className:O.a.myposts,children:[Object(f.jsx)("h2",{className:O.a.title,children:"MY POSTS"}),Object(f.jsx)(h,{onSubmit:function(e){t.addPost(e.newPost)}})]}),Object(f.jsx)("div",{className:O.a.posts,children:t.postsData.map((function(t){return Object(f.jsx)(v,{message:t.message,likeCount:t.likeCount},t.id)}))})]})},y=s(22),_=Object(y.b)((function(t){return{postsData:t.profile.postsData}}),{addPost:l.a.addPost})(P),g=s(5),k=s.n(g),S=s(9),A=s(235),N=s(254),C=s.n(N),M=s(55),w=function(t){var e=Object(a.useState)(!1),s=Object(A.a)(e,2),n=s[0],r=s[1],o=Object(a.useState)(t.status),c=Object(A.a)(o,2),i=c[0],u=c[1];return Object(a.useEffect)((function(){u(t.status)}),[t.status]),Object(f.jsx)(f.Fragment,{children:n?Object(f.jsx)("input",{autoFocus:!0,defaultValue:i,onBlur:function(){r(!1),t.updateProfileStatus(i)},onChange:function(t){u(t.target.value)}}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("b",{children:"Status"}),": ",Object(f.jsx)("span",{onDoubleClick:function(){r(!0),console.log(t.status)},children:t.status||"----------"})]})})},I=s(231),F=s.n(I),D=Object(j.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,n=t.error;return Object(f.jsx)("form",{onSubmit:e,children:Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("button",{children:"Save"})}),n&&Object(f.jsx)("div",{className:F.a.formSummaryError,children:n}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Full Name"}),": ",Object(d.c)("Full Name","fullName",[],d.a)]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Looking for a job"}),": ",Object(d.c)("","lookingForAJob",[],d.a,{type:"checkbox"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"My professional skils"}),": ",Object(d.c)("My professional skils","lookingForAJobDescription",[],d.b)]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"About me"}),": ",Object(d.c)("About me","aboutMe",[],d.b)]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(f.jsxs)("div",{className:C.a.contact,children:[Object(f.jsx)("b",{children:t}),": ",Object(d.c)(t,"contacts.".concat(t),[],d.a)]},t)}))]})]})})})),J=function(t){var e=t.profile,s=t.isOwner,n=t.goToEditMode;return Object(f.jsxs)("div",{children:[s&&Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:n,children:"Edit"})}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Full Name"}),": ",e.fullName]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"My professional skils"}),": ",e.lookingForAJobDescription]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(f.jsx)(E,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},E=function(t){var e=t.contactTitle,s=t.contactValue;return Object(f.jsxs)("div",{className:C.a.contact,children:[Object(f.jsx)("b",{children:e}),": ",s]})},T=function(t){var e=t.profile,s=t.updateProfileStatus,n=t.status,r=t.isOwner,o=t.savePhoto,c=t.saveProfile,i=Object(a.useState)(!1),u=Object(A.a)(i,2),l=u[0],j=u[1];if(!e)return Object(f.jsx)(M.a,{});var b=function(){var t=Object(S.a)(k.a.mark((function t(e){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c(e);case 2:j(!1);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),d=e.photos.large||e.photos.small;return Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{className:C.a.avatar,src:d||"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar"}),r&&Object(f.jsx)("input",{type:"file",onChange:function(t){t.target.files.lenght&&o(t.target.files[0])}}),l?Object(f.jsx)(D,{initialValues:e,profile:e,onSubmit:b}):Object(f.jsx)(J,{profile:e,isOwner:r,goToEditMode:function(){return j(!0)}}),Object(f.jsx)(w,{updateProfileStatus:s,status:n})]})})},U=function(t){return Object(f.jsxs)("div",{children:[Object(f.jsx)(T,{profile:t.profile,status:t.status,updateProfileStatus:t.updateProfileStatus,isOwner:t.isOwner,savePhoto:t.savePhoto,saveProfile:t.saveProfile}),Object(f.jsx)(_,{})]})},q=s(8),V=s(240),z=s(26),K=function(t){Object(c.a)(s,t);var e=Object(i.a)(s);function s(){return Object(r.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getProfileInfo(t),this.props.getProfileStatus(t)):console.error("ID should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)(U,Object(n.a)(Object(n.a)({},this.props),{},{profile:this.props.profile,isOwner:!this.props.match.params.userId,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile}))})}}]),s}(u.a.Component);e.default=Object(z.d)(Object(y.b)((function(t){return{profile:t.profile.profile,status:t.profile.status,authorizedUserId:t.auth.id,isAuth:t.auth.isAuth}}),{getProfileInfo:l.c,getProfileStatus:l.d,updateProfileStatus:l.g,savePhoto:l.e,saveProfile:l.f}),q.g,V.a)(K)}}]);
//# sourceMappingURL=4.8d8e8f7c.chunk.js.map