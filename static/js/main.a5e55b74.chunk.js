(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(t,e,n){t.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}},138:function(t,e,n){},139:function(t,e,n){},21:function(t,e,n){t.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu",loginBlock:"Header_loginBlock__29PXN",login:"Header_login__1HUgF",wrapper:"Header_wrapper__u1Ixr",btn:"Header_btn__2eD-s"}},228:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(48),c=n.n(s),i=(n(138),n(36)),o=n(37),u=n(47),l=n(46),p=n(7),f=n(17),d=(n(139),n(22)),h=n(29),j=n.n(h),b=n(2);var m=Object(d.b)((function(t){return{friends:t.navbar.friends}}))((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:j.a.title,children:"FRIENDS"}),t.friends.map((function(t){return Object(b.jsx)("div",{className:j.a.friends,children:Object(b.jsxs)("div",{className:j.a.friend,children:[Object(b.jsx)("img",{className:j.a.img,src:t.photo,alt:"Avatar example"}),Object(b.jsx)("p",{className:j.a.text,children:t.name})]})},t.id)}))]})})),O=n(10),g=n.n(O),v=n.p+"static/media/search_white.66ea5ec3.svg";function x(t){return Object(b.jsxs)("nav",{className:g.a.nav,children:[Object(b.jsx)(f.b,{to:"/profile",activeClassName:g.a.active,className:g.a.item,children:"PROFILE"}),Object(b.jsx)(f.b,{to:"/dialogs",activeClassName:g.a.active,className:g.a.item,children:"MESSAGES"}),Object(b.jsx)(f.b,{to:"/news",activeClassName:g.a.active,className:g.a.item,children:"NEWS"}),Object(b.jsx)(f.b,{to:"/music",activeClassName:g.a.active,className:g.a.item,children:"MUSIC"}),Object(b.jsx)(f.b,{to:"/users",activeClassName:g.a.active,className:g.a.item,children:Object(b.jsxs)("div",{className:g.a.icon,children:[Object(b.jsx)("img",{src:v,alt:"serach icon"}),"USERS"]})}),Object(b.jsx)("br",{}),Object(b.jsx)(f.b,{to:"/settings",activeClassName:g.a.active,className:g.a.item,children:"SETTINGS"}),Object(b.jsx)(m,{})]})}var _=n(3),w=n.p+"static/media/logo.6ce24c58.svg",S=n(21),y=n.n(S);function N(t){return Object(b.jsxs)("header",{className:y.a.header,children:[Object(b.jsx)("img",{className:y.a.logo,src:w,alt:"logo"}),Object(b.jsx)("div",{className:y.a.loginBlock,children:t.isAuth?Object(b.jsxs)("div",{className:y.a.wrapper,children:[Object(b.jsx)("p",{className:y.a.login,children:t.login}),Object(b.jsx)("button",{className:y.a.btn,onClick:t.logout,children:"LogOut"})]}):Object(b.jsx)(f.b,{className:y.a.login,to:"./login",children:"Login"})})]})}var C=n(27),E=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(N,Object(_.a)({},this.props))}}]),n}(r.Component),k=Object(d.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logout:C.d})(E),U="app/INITIALIZED_SUCCESS",I={initialized:!1},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case U:return Object(_.a)(Object(_.a)({},t),{},{initialized:!0});default:return t}},P=n(26),D=n(55),A=n(60),F=n(75),L={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},R=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return t},z=n(82),H=n(86),M=n(81),q=Object(P.c)({profile:A.b,messages:F.a,navbar:R,findUsers:z.a,auth:C.a,form:M.a,app:T}),G=Object(P.e)(q,Object(P.a)(H.a)),B=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,316))})),W=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,314))})),J=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,310))})),Q=a.a.lazy((function(){return n.e(9).then(n.bind(null,311))})),V=a.a.lazy((function(){return n.e(8).then(n.bind(null,312))})),Y=a.a.lazy((function(){return n.e(10).then(n.bind(null,313))})),Z=a.a.lazy((function(){return n.e(7).then(n.bind(null,315))})),K=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(i.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(k,{}),Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"app-wrapper-content",children:Object(b.jsxs)(a.a.Suspense,{fallback:D.a,children:[Object(b.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(W,{})}}),Object(b.jsx)(p.b,{path:"/dialogs",render:function(){return Object(b.jsx)(B,{})}}),Object(b.jsx)(p.b,{path:"/news",render:function(){return Object(b.jsx)(Q,{})}}),Object(b.jsx)(p.b,{path:"/music",render:function(){return Object(b.jsx)(V,{})}}),Object(b.jsx)(p.b,{path:"/users",render:function(){return Object(b.jsx)(Z,{})}}),Object(b.jsx)(p.b,{path:"/settings",render:function(){return Object(b.jsx)(Y,{})}}),Object(b.jsx)(p.b,{path:"/login",render:function(){return Object(b.jsx)(J,{})}})]})})]}):Object(b.jsx)(D.a,{})}}]),n}(r.Component),X=Object(P.d)(Object(d.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){t(Object(C.b)()).then((function(){return t({type:U})}))}}}))(K),$=function(){return Object(b.jsx)(f.a,{children:Object(b.jsx)(d.a,{store:G,children:Object(b.jsx)(X,{})})})};c.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root"))},27:function(t,e,n){"use strict";n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return j})),n.d(e,"d",(function(){return m}));var r=n(5),a=n.n(r),s=n(9),c=n(3),i=n(30),o=n(8),u="auth/SET_AUTH_USER_DATA",l="auth/GET_CAPTCHA_URL_SUCCESS",p={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},f=function(t,e,n,r){return{type:u,payload:{userId:t,email:e,login:n,isAuth:r}}},d=function(t){return{type:l,payload:{captchaUrl:t}}},h=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){var n,r,s,c,i;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.me();case 2:0===(n=t.sent).resultCode&&(r=n.data,s=r.id,c=r.email,i=r.login,e(f(s,c,i,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(t,e,n,r){return function(){var c=Object(s.a)(a.a.mark((function s(c){var u,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.login(t,e,n,r);case 2:0===(u=a.sent).data.resultCode?c(h()):(10===u.data.resultCode&&c(b()),l=u.data.messages.length>0?u.data.messages[0]:"Some error",c(Object(i.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),s)})));return function(t){return c.apply(this,arguments)}}()},b=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getCaptchaUrl();case 2:n=t.sent,r=n.data.url,e(d(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.logout();case 2:0===t.sent.data.resultCode&&e(f(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:case l:return Object(c.a)(Object(c.a)({},t),e.payload);default:return t}}},29:function(t,e,n){t.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(0);var r=n.p+"static/media/loader.9c48f460.gif",a=n(2);function s(t){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"Loading",style:{marginLeft:"200px"}})})}},60:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return O})),n.d(e,"d",(function(){return g})),n.d(e,"g",(function(){return v})),n.d(e,"e",(function(){return x})),n.d(e,"f",(function(){return _}));var r=n(5),a=n.n(r),s=n(9),c=n(28),i=n(3),o=n(8),u=n(30),l="profile/ADD_POST",p="profile/DELETE_POST",f="profile/SET_USER_PROFILE",d="profile/SET_PROFILE_STATUS",h="profile/SAVE_PHOTO_SUCCESS",j={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],profile:null,status:""},b=function(t){return{type:l,newPostText:t}},m=function(t){return{type:d,status:t}},O=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getProfileInfo(t);case 2:r=e.sent,n({type:f,profile:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getStatus(t);case 2:r=e.sent,n(m(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(m(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.savePhoto(t);case 2:0===(r=e.sent).data.resultCode&&n((a=r.data.data.photos,{type:h,photos:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},_=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n,r){var s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r().auth.id,e.next=3,o.b.saveProfile(t);case 3:if(0!==(c=e.sent).data.resultCode){e.next=8;break}n(O(s)),e.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.data.messages[0]})),e.abrupt("return",Promise.reject(c.data.messages[0]));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(i.a)(Object(i.a)({},t),{},{postsData:[].concat(Object(c.a)(t.postsData),[{id:t.postsData[t.postsData.length-1].id+1,message:e.newPostText,likeCount:0}])});case p:return Object(i.a)(Object(i.a)({},t),{},{postsData:t.postsData.filter((function(t){return t.id!==e.postId}))});case f:return Object(i.a)(Object(i.a)({},t),{},{profile:e.profile});case d:return Object(i.a)(Object(i.a)({},t),{},{status:e.status});case h:return Object(i.a)(Object(i.a)({},t),{},{profile:Object(i.a)(Object(i.a)({},t.profile),{},{photos:e.photos})});default:return t}}},75:function(t,e,n){"use strict";n.d(e,"b",(function(){return i}));var r=n(28),a=n(3),s="messages/SEND-MESSAGE",c={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(a.a)(Object(a.a)({},t),{},{messagesData:[].concat(Object(r.a)(t.messagesData),[{id:t.messagesData[t.messagesData.length-1].id+1,message:e.newMessage}])});default:return t}};var i=function(t){return{type:s,newMessage:t}}},8:function(t,e,n){"use strict";n.d(e,"d",(function(){return s})),n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return o}));var r=n(84),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f406f314-0e27-4ae0-9815-6188b0f3b0b0"}}),s={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},follow:function(t){return a.post("follow/".concat(t)).then((function(t){return t.data}))},unfollow:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))}},c={getProfileInfo:function(t){return a.get("profile/".concat(t)).then((function(t){return t.data}))},getStatus:function(t){return a.get("profile/status/".concat(t)).then((function(t){return t.data}))},updateStatus:function(t){return a.put("profile/status",{status:t})},savePhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(t){return a.put("profile",t)}},i={me:function(){return a.get("auth/me").then((function(t){return t.data}))},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:t,password:e,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},82:function(t,e,n){"use strict";n.d(e,"d",(function(){return v})),n.d(e,"c",(function(){return w})),n.d(e,"b",(function(){return y})),n.d(e,"e",(function(){return N}));var r=n(5),a=n.n(r),s=n(9),c=n(28),i=n(3),o=n(8),u=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(i.a)(Object(i.a)({},t),r):t}))},l="findUsers/FOLLOW_SUCCESS",p="findUsers/UNFOLLOW_SUCCESS",f="findUsers/SET_USERS",d="findUsers/SET_CURRENT_PAGE",h="findUsers/SET_TOTAL_USERS_COUNT",j="findUsers/SET_IS_FETCHING",b="findUsers/SET_FOLLOWING_PROGRESS",m={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},O=function(t){return{type:l,userId:t}},g=function(t){return{type:p,userId:t}},v=function(t){return{type:d,pageNumber:t}},x=function(t){return{type:j,isFetching:t}},_=function(t,e){return{type:b,isFollowing:t,userId:e}},w=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(v(t)),n.next=4,o.d.getUsers(t,e);case 4:s=n.sent,r(x(!1)),r((c=s.items,{type:f,users:c})),r((a=s.totalCount,{type:h,count:a}));case 8:case"end":return n.stop()}var a,c}),n)})));return function(t){return n.apply(this,arguments)}}()},S=function(){var t=Object(s.a)(a.a.mark((function t(e,n,r,s){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_(!0,r)),t.next=3,n(r);case 3:0===t.sent.resultCode&&e(s(r)),e(_(!1,r));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),y=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n,o.d.follow.bind(o.d),t,O);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n,o.d.unfollow.bind(o.d),t,g);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(i.a)(Object(i.a)({},t),{},{users:u(t.users,e.userId,"id",{followed:!0})});case p:return Object(i.a)(Object(i.a)({},t),{},{users:u(t.users,e.userId,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},t),{},{users:e.users});case d:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.pageNumber});case h:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.count});case j:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});case b:return Object(i.a)(Object(i.a)({},t),{},{followingInProgress:e.isFollowing?[].concat(Object(c.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!==e.userId}))});default:return t}}}},[[228,2,3]]]);
//# sourceMappingURL=main.a5e55b74.chunk.js.map