(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(e,t,n){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}},139:function(e,t,n){},21:function(e,t,n){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu",loginBlock:"Header_loginBlock__29PXN",login:"Header_login__1HUgF",wrapper:"Header_wrapper__u1Ixr",btn:"Header_btn__2eD-s"}},224:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),s=n(48),c=n.n(s),o=(n(139),n(36)),i=n(37),u=n(47),l=n(46),f=n(8),p=n(17),d=n(22),h=n(3),j=n(27),b={initialized:!1},O=function(){return{type:"app/INITIALIZED_SUCCESS"}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},g=n(26),v=n(60),S=n(75),_={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return e},E=n(83),w=n(87),U=n(82),C=Object(g.c)({profile:v.b,messages:S.b,navbar:x,findUsers:E.b,auth:j.a,form:U.a,app:m}),y=Object(g.e)(C,Object(g.a)(w.a)),N=(n(224),n(29)),T=n.n(N),P=n(2),I=function(e){return Object(P.jsxs)("div",{children:[Object(P.jsx)("h3",{className:T.a.title,children:"FRIENDS"}),e.friends.map((function(e){return Object(P.jsx)("div",{className:T.a.friends,children:Object(P.jsxs)("div",{className:T.a.friend,children:[Object(P.jsx)("img",{className:T.a.img,src:e.photo,alt:"Avatar example"}),Object(P.jsx)("p",{className:T.a.text,children:e.name})]})},e.id)}))]})},k=Object(d.b)((function(e){return{friends:e.navbar.friends}}))(I),A=n(10),F=n.n(A),L=n.p+"static/media/search_white.66ea5ec3.svg",D=function(){return Object(P.jsxs)("nav",{className:F.a.nav,children:[Object(P.jsx)(p.b,{to:"/profile",activeClassName:F.a.active,className:F.a.item,children:"PROFILE"}),Object(P.jsx)(p.b,{to:"/dialogs",activeClassName:F.a.active,className:F.a.item,children:"MESSAGES"}),Object(P.jsx)(p.b,{to:"/news",activeClassName:F.a.active,className:F.a.item,children:"NEWS"}),Object(P.jsx)(p.b,{to:"/music",activeClassName:F.a.active,className:F.a.item,children:"MUSIC"}),Object(P.jsx)(p.b,{to:"/users",activeClassName:F.a.active,className:F.a.item,children:Object(P.jsxs)("div",{className:F.a.icon,children:[Object(P.jsx)("img",{src:L,alt:"serach icon"}),"USERS"]})}),Object(P.jsx)("br",{}),Object(P.jsx)(p.b,{to:"/settings",activeClassName:F.a.active,className:F.a.item,children:"SETTINGS"}),Object(P.jsx)(k,{})]})},R=n.p+"static/media/logo.6ce24c58.svg",H=n(21),z=n.n(H),G=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(P.jsxs)("header",{className:z.a.header,children:[Object(P.jsx)("img",{className:z.a.logo,src:R,alt:"logo"}),Object(P.jsx)("div",{className:z.a.loginBlock,children:t?Object(P.jsxs)("div",{className:z.a.wrapper,children:[Object(P.jsx)("p",{className:z.a.login,children:n}),Object(P.jsx)("button",{className:z.a.btn,onClick:r,children:"LogOut"})]}):Object(P.jsx)(p.b,{className:z.a.login,to:"./login",children:"Login"})})]})},M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){return Object(o.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(P.jsx)(G,Object(h.a)({},this.props))}}]),n}(r.Component),q=Object(d.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:j.d})(M),W=n(55),B=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,314))})),J=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,312))})),V=a.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,308))})),Z=a.a.lazy((function(){return n.e(9).then(n.bind(null,309))})),Q=a.a.lazy((function(){return n.e(8).then(n.bind(null,310))})),Y=a.a.lazy((function(){return n.e(10).then(n.bind(null,311))})),K=a.a.lazy((function(){return n.e(6).then(n.bind(null,313))})),X=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e,t){},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(P.jsxs)("div",{className:"app-wrapper",children:[Object(P.jsx)(q,{}),Object(P.jsx)(D,{}),Object(P.jsx)("div",{className:"app-wrapper-content",children:Object(P.jsx)(a.a.Suspense,{fallback:W.a,children:Object(P.jsxs)(f.d,{children:[Object(P.jsx)(f.b,{exact:!0,path:"/",render:function(){return Object(P.jsx)(f.a,{to:"/profile"})}}),Object(P.jsx)(f.b,{path:"/profile/:userId?",render:function(){return Object(P.jsx)(J,{})}}),Object(P.jsx)(f.b,{path:"/dialogs",render:function(){return Object(P.jsx)(B,{})}}),Object(P.jsx)(f.b,{path:"/news",render:function(){return Object(P.jsx)(Z,{})}}),Object(P.jsx)(f.b,{path:"/music",render:function(){return Object(P.jsx)(Q,{})}}),Object(P.jsx)(f.b,{path:"/users",render:function(){return Object(P.jsx)(K,{pageTitle:"React Social Network Users"})}}),Object(P.jsx)(f.b,{path:"/settings",render:function(){return Object(P.jsx)(Y,{})}}),Object(P.jsx)(f.b,{path:"/login",render:function(){return Object(P.jsx)(V,{})}})]})})})]}):Object(P.jsx)(W.a,{})}}]),n}(r.Component),$=Object(g.d)(f.g,Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(j.b)()).then((function(){return e(O())}))}}}))(X),ee=function(){return Object(P.jsx)(p.a,{children:Object(P.jsx)(d.a,{store:y,children:Object(P.jsx)($,{})})})};c.a.render(Object(P.jsx)(a.a.StrictMode,{children:Object(P.jsx)(ee,{})}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return j}));var r=n(5),a=n.n(r),s=n(9),c=n(3),o=n(7),i=n(30),u={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},l=function(e,t,n,r){return{type:"auth/SET_AUTH_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},f=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},p=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n,r,s,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.me();case 2:(n=e.sent).resultCode===o.b.Succsess&&(r=n.data,s=r.id,c=r.email,i=r.login,t(l(s,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},d=function(e,t,n,r){return function(){var c=Object(s.a)(a.a.mark((function s(c){var u,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.c.login(e,t,n,r);case 2:(u=a.sent).resultCode===o.b.Succsess?c(p()):(u.resultCode===o.a.CaptchaIsRequired&&c(h()),l=u.messages.length>0?u.messages[0]:"Some error",c(Object(i.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),s)})));return function(e){return c.apply(this,arguments)}}()},h=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.e.getCaptchaUrl();case 2:n=e.sent,t(f(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(){return function(){var e=Object(s.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.c.logout();case 2:e.sent.resultCode===o.b.Succsess&&t(l(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},29:function(e,t,n){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},55:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.9c48f460.gif",a=n(2);t.a=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"Loading",style:{marginLeft:"200px"}})})}},60:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return h})),n.d(t,"e",(function(){return j})),n.d(t,"f",(function(){return b}));var r=n(5),a=n.n(r),s=n(9),c=n(28),o=n(3),i=n(7),u=n(30),l={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],profile:null,status:""},f={addPost:function(e){return{type:"profile/ADD_POST",newPostText:e}},deletePost:function(e){return{type:"profile/DELETE_POST",postId:e}},setUserProfile:function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},setProfileStatus:function(e){return{type:"profile/SET_PROFILE_STATUS",status:e}},savePhotoSuccess:function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photos:e}}},p=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfileInfo(e);case 2:r=t.sent,n(f.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getStatus(e);case 2:r=t.sent,n(f.setProfileStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.updateStatus(e);case 2:0===t.sent.resultCode&&n(f.setProfileStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.savePhoto(e);case 2:0===(r=t.sent).resultCode&&n(f.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n,r){var s,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.id,t.next=3,i.d.saveProfile(e);case 3:if(0!==(c=t.sent).resultCode){t.next=8;break}n(p(s)),t.next=10;break;case 8:return n(Object(u.a)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD_POST":return Object(o.a)(Object(o.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{id:e.postsData[e.postsData.length-1].id+1,message:t.newPostText,likeCount:0}])});case"profile/DELETE_POST":return Object(o.a)(Object(o.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"profile/SET_PROFILE_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case"profile/SAVE_PHOTO_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a})),n.d(t,"f",(function(){return i})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"e",(function(){return f}));var r,a,s=n(85),c=n.n(s);!function(e){e[e.Succsess=0]="Succsess",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(a||(a={}));var o=c.a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f406f314-0e27-4ae0-9815-6188b0f3b0b0"}}),i={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return o.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return o.delete("follow/".concat(e)).then((function(e){return e.data}))}},u={getProfileInfo:function(e){return o.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return o.get("profile/status/".concat(e)).then((function(e){return e.data}))},updateStatus:function(e){return o.put("profile/status",{status:e}).then((function(e){return e.data}))},savePhoto:function(e){var t=new FormData;return t.append("image",e),o.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},saveProfile:function(e){return o.put("profile",e).then((function(e){return e.data}))}},l={me:function(){return o.get("auth/me").then((function(e){return e.data}))},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return o.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},logout:function(){return o.delete("auth/login").then((function(e){return e.data}))}},f={getCaptchaUrl:function(){return o.get("security/get-captcha-url").then((function(e){return e.data}))}}},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(28),a=n(3),s={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},c={sendMessage:function(e){return{type:"messages/SEND-MESSAGE",newMessage:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"messages/SEND-MESSAGE":return Object(a.a)(Object(a.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:e.messagesData[e.messagesData.length-1].id+1,message:t.newMessage}])});default:return e}}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return j}));var r=n(5),a=n.n(r),s=n(9),c=n(28),o=n(3),i=n(7),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},l={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f={followSuccess:function(e){return{type:"findUsers/FOLLOW_SUCCESS",userId:e}},unfollowSuccess:function(e){return{type:"findUsers/UNFOLLOW_SUCCESS",userId:e}},setUsers:function(e){return{type:"findUsers/SET_USERS",users:e}},setCurrentPage:function(e){return{type:"findUsers/SET_CURRENT_PAGE",pageNumber:e}},setTotalUsersCount:function(e){return{type:"findUsers/SET_TOTAL_USERS_COUNT",count:e}},setIsFetching:function(e){return{type:"findUsers/SET_IS_FETCHING",isFetching:e}},setFollowingProgress:function(e,t){return{type:"findUsers/SET_FOLLOWING_PROGRESS",isFollowing:e,userId:t}}},p=function(e,t){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(f.setIsFetching(!0)),r(f.setCurrentPage(e)),n.next=4,i.f.getUsers(e,t);case 4:s=n.sent,r(f.setIsFetching(!1)),r(f.setUsers(s.items)),r(f.setTotalUsersCount(s.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},d=function(){var e=Object(s.a)(a.a.mark((function e(t,n,r,s){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f.setFollowingProgress(!0,r)),e.next=3,n(r);case 3:e.sent.resultCode===i.b.Succsess&&t(s(r)),t(f.setFollowingProgress(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),h=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(n,i.f.follow.bind(i.f),e,f.followSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(s.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(n,i.f.unfollow.bind(i.f),e,f.unfollowSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"findUsers/FOLLOW_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case"findUsers/UNFOLLOW_SUCCESS":return Object(o.a)(Object(o.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case"findUsers/SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:t.users});case"findUsers/SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.pageNumber});case"findUsers/SET_TOTAL_USERS_COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.count});case"findUsers/SET_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case"findUsers/SET_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}}},[[229,2,3]]]);
//# sourceMappingURL=main.fd412905.chunk.js.map