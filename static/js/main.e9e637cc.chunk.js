(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(e,t,n){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}},136:function(e,t,n){},22:function(e,t,n){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu",loginBlock:"Header_loginBlock__29PXN",login:"Header_login__1HUgF",wrapper:"Header_wrapper__u1Ixr",btn:"Header_btn__2eD-s"}},221:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(44),c=n.n(s),i=(n(136),n(8)),o=n(17),u=n(18),f=n(3),p=n(27),l={initialized:!1},d=function(){return{type:"app/INITIALIZED_SUCCESS"}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(f.a)(Object(f.a)({},e),{},{initialized:!0});default:return e}},b=n(26),j=n(57),O=n(74),m={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m;return e},_=n(64),S=n(84),v=n(80),x=Object(b.c)({profile:j.b,messages:O.b,navbar:g,findUsers:_.a,auth:p.a,form:v.a,app:h}),E=Object(b.e)(x,Object(b.a)(S.a)),w=function(e){return e.app.initialized},U=(n(221),n(222),function(e){return e.navbar.friends}),N=n(29),T=n.n(N),y=n(2),C=function(){var e=Object(u.d)(U);return Object(y.jsxs)("div",{children:[Object(y.jsx)("h3",{className:T.a.title,children:"FRIENDS"}),e.map((function(e){return Object(y.jsx)("div",{className:T.a.friends,children:Object(y.jsxs)("div",{className:T.a.friend,children:[Object(y.jsx)("img",{className:T.a.img,src:e.photo,alt:"Avatar example"}),Object(y.jsx)("p",{className:T.a.text,children:e.name})]})},e.id)}))]})},I=n(10),P=n.n(I),k=n.p+"static/media/search_white.66ea5ec3.svg",R=function(){return Object(y.jsxs)("nav",{className:P.a.nav,children:[Object(y.jsx)(o.b,{to:"/profile",activeClassName:P.a.active,className:P.a.item,children:"PROFILE"}),Object(y.jsx)(o.b,{to:"/dialogs",activeClassName:P.a.active,className:P.a.item,children:"MESSAGES"}),Object(y.jsx)(o.b,{to:"/news",activeClassName:P.a.active,className:P.a.item,children:"NEWS"}),Object(y.jsx)(o.b,{to:"/music",activeClassName:P.a.active,className:P.a.item,children:"MUSIC"}),Object(y.jsx)(o.b,{to:"/users",activeClassName:P.a.active,className:P.a.item,children:Object(y.jsxs)("div",{className:P.a.icon,children:[Object(y.jsx)("img",{src:k,alt:"serach icon"}),"USERS"]})}),Object(y.jsx)("br",{}),Object(y.jsx)(o.b,{to:"/settings",activeClassName:P.a.active,className:P.a.item,children:"SETTINGS"}),Object(y.jsx)(C,{})]})},A=n.p+"static/media/logo.6ce24c58.svg",L=n(22),D=n.n(L),F=n(52),H=function(){var e=Object(u.c)(),t=Object(u.d)(F.c),n=Object(u.d)(F.b);return Object(y.jsxs)("header",{className:D.a.header,children:[Object(y.jsx)("img",{className:D.a.logo,src:A,alt:"logo"}),Object(y.jsx)("div",{className:D.a.loginBlock,children:n?Object(y.jsxs)("div",{className:D.a.wrapper,children:[Object(y.jsx)("p",{className:D.a.login,children:t}),Object(y.jsx)("button",{className:D.a.btn,onClick:e(p.d),children:"LogOut"})]}):Object(y.jsx)(o.b,{className:D.a.login,to:"./login",children:"Login"})})]})},G=n(51),M=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,324))})),q=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,322))})),z=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,325))})),W=a.a.lazy((function(){return n.e(10).then(n.bind(null,319))})),B=a.a.lazy((function(){return n.e(9).then(n.bind(null,320))})),J=a.a.lazy((function(){return n.e(11).then(n.bind(null,321))})),V=a.a.lazy((function(){return Promise.all([n.e(4),n.e(8)]).then(n.bind(null,323))})),Z=Object(b.d)(i.h)((function(){var e=Object(u.c)();return Object(r.useEffect)((function(){e((function(e){e(Object(p.b)()).then((function(){return e(d())}))}))}),[]),Object(u.d)(w)?Object(y.jsxs)("div",{className:"app-wrapper",children:[Object(y.jsx)(H,{}),Object(y.jsx)(R,{}),Object(y.jsx)("div",{className:"app-wrapper-content",children:Object(y.jsx)(a.a.Suspense,{fallback:G.a,children:Object(y.jsxs)(i.d,{children:[Object(y.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(y.jsx)(i.a,{to:"/profile"})}}),Object(y.jsx)(i.b,{path:"/profile/:userId?",render:function(){return Object(y.jsx)(q,{})}}),Object(y.jsx)(i.b,{path:"/dialogs",render:function(){return Object(y.jsx)(M,{})}}),Object(y.jsx)(i.b,{path:"/news",render:function(){return Object(y.jsx)(W,{})}}),Object(y.jsx)(i.b,{path:"/music",render:function(){return Object(y.jsx)(B,{})}}),Object(y.jsx)(i.b,{path:"/users",render:function(){return Object(y.jsx)(V,{pageTitle:"React Social Network Users"})}}),Object(y.jsx)(i.b,{path:"/settings",render:function(){return Object(y.jsx)(J,{})}}),Object(y.jsx)(i.b,{path:"/login",render:function(){return Object(y.jsx)(z,{})}})]})})})]}):Object(y.jsx)(G.a,{})})),Q=function(){return Object(y.jsx)(o.a,{children:Object(y.jsx)(u.a,{store:E,children:Object(y.jsx)(Z,{})})})};c.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(Q,{})}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(5),a=n.n(r),s=n(9),c=n(3),i=n(7),o=n(30),u=function(){return i.c.get("security/get-captcha-url").then((function(e){return e.data}))},f=function(){return i.c.get("auth/me").then((function(e){return e.data}))},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},l=function(){return i.c.delete("auth/login").then((function(e){return e.data}))},d={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},h=function(e,t,n,r){return{type:"auth/SET_AUTH_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},b=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},j=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:(n=e.sent).resultCode===i.b.Succsess&&(r=n.data,s=r.id,c=r.email,o=r.login,t(h(s,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e,t,n,r){return function(){var c=Object(s.a)(a.a.mark((function s(c){var u,f;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,p(e,t,n,r);case 2:(u=a.sent).resultCode===i.b.Succsess?c(j()):(u.resultCode===i.a.CaptchaIsRequired&&c(m()),f=u.messages.length>0?u.messages[0]:"Some error",c(Object(o.a)("login",{_error:f})));case 4:case"end":return a.stop()}}),s)})));return function(e){return c.apply(this,arguments)}}()},m=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n=e.sent,t(b(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:e.sent.resultCode===i.b.Succsess&&t(h(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},29:function(e,t,n){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},51:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.9c48f460.gif",a=n(2);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"Loading",style:{marginLeft:"200px"}})})}},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return s}));var r=function(e){return e.auth.isAuth},a=function(e){return e.auth.login},s=function(e){return e.auth.captchaUrl}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return S}));var r=n(5),a=n.n(r),s=n(9),c=n(28),i=n(3),o=n(7),u=function(e){return o.c.get("profile/".concat(e)).then((function(e){return e.data}))},f=function(e){return o.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},p=function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},l=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},d=function(e){return o.c.put("profile",e).then((function(e){return e.data}))},h=n(30),b={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],profile:null,status:""},j={addPost:function(e){return{type:"profile/ADD_POST",newPostText:e}},deletePost:function(e){return{type:"profile/DELETE_POST",postId:e}},setUserProfile:function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},setProfileStatus:function(e){return{type:"profile/SET_PROFILE_STATUS",status:e}},savePhotoSuccess:function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photos:e}}},O=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:r=t.sent,n(j.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n(j.setProfileStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:t.sent.resultCode===o.b.Succsess&&n(j.setProfileStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:(r=t.sent).resultCode===o.b.Succsess&&n(j.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.id,t.next=3,d(e);case 3:if((c=t.sent).resultCode!==o.b.Succsess){t.next=8;break}n(O(s)),t.next=10;break;case 8:return n(Object(h.a)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD_POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{id:e.postsData[e.postsData.length-1].id+1,message:t.newPostText,likeCount:0}])});case"profile/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET_PROFILE_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},64:function(e,t,n){"use strict";n.d(t,"c",(function(){return _})),n.d(t,"b",(function(){return v})),n.d(t,"d",(function(){return x}));var r=n(5),a=n.n(r),s=n(9),c=n(28),i=n(3),o=n(7),u={getUsers:function(){return o.c.get("").then((function(e){return e.data}))},follow:function(e){return o.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return o.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},f=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},p={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},l=function(e){return{type:"findUsers/FOLLOW_SUCCESS",userId:e}},d=function(e){return{type:"findUsers/UNFOLLOW_SUCCESS",userId:e}},h=function(e){return{type:"findUsers/SET_USERS",users:e}},b=function(e){return{type:"findUsers/SET_CURRENT_PAGE",pageNumber:e}},j=function(e){return{type:"findUsers/SET_TOTAL_USERS_COUNT",count:e}},O=function(e){return{type:"findUsers/SET_IS_FETCHING",isFetching:e}},m=function(e,t){return{type:"findUsers/SET_FOLLOWING_PROGRESS",isFollowing:e,userId:t}},g=function(e){return{type:"findUsers/SET_FILTER",payload:e}},_=function(e,t,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var c;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s(O(!0)),s(b(e)),s(g(n)),r.next=5,u.getUsers(e,t,n.term,n.friend);case 5:c=r.sent,s(O(!1)),s(h(c.items)),s(j(c.totalCount));case 9:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},S=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(m(!0,r)),e.next=3,n(r);case 3:e.sent.resultCode===o.b.Succsess&&t(s(r)),t(m(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(n,u.follow.bind(u),e,l);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(n,u.unfollow.bind(u),e,d);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"findUsers/FOLLOW_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:f(e.users,t.userId,"id",{followed:!0})});case"findUsers/UNFOLLOW_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:f(e.users,t.userId,"id",{followed:!1})});case"findUsers/SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"findUsers/SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.pageNumber});case"findUsers/SET_TOTAL_USERS_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case"findUsers/SET_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"findUsers/SET_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});case"findUsers/SET_FILTER":return Object(i.a)(Object(i.a)({},e),{},{filter:t.payload});default:return e}}},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r,a,s=n(82),c=n.n(s).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f406f314-0e27-4ae0-9815-6188b0f3b0b0"}});!function(e){e[e.Succsess=0]="Succsess",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}))},74:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(28),a=n(3),s={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},c={sendMessage:function(e){return{type:"messages/SEND-MESSAGE",newMessage:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"messages/SEND-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:e.messagesData[e.messagesData.length-1].id+1,message:t.newMessage}])});default:return e}}}},[[227,2,3]]]);
//# sourceMappingURL=main.e9e637cc.chunk.js.map