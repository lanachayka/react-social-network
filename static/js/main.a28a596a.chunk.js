(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{10:function(e,t,n){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}},139:function(e,t,n){},22:function(e,t,n){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu",loginBlock:"Header_loginBlock__29PXN",login:"Header_login__1HUgF",wrapper:"Header_wrapper__u1Ixr",btn:"Header_btn__2eD-s"}},224:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(48),c=n.n(a),i=(n(139),n(36)),o=n(37),u=n(47),l=n(46),p=n(8),f=n(17),d=n(23),h=n(3),j=n(27),b={initialized:!1},O=function(){return{type:"app/INITIALIZED_SUCCESS"}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"app/INITIALIZED_SUCCESS":return Object(h.a)(Object(h.a)({},e),{},{initialized:!0});default:return e}},g=n(20),v=n(65),S=n(75),_={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return e},E=n(82),w=n(87),U=n(83),C=Object(g.c)({profile:v.b,messages:S.b,navbar:x,findUsers:E.b,auth:j.a,form:U.a,app:m}),y=Object(g.e)(C,Object(g.a)(w.a)),N=(n(224),n(2));function T(e){return function(t){return Object(N.jsx)(s.a.Suspense,{fallback:Object(N.jsx)("div",{children:"Loading..."}),children:Object(N.jsx)(e,Object(h.a)({},t))})}}var I=n(29),P=n.n(I),k=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)("h3",{className:P.a.title,children:"FRIENDS"}),e.friends.map((function(e){return Object(N.jsx)("div",{className:P.a.friends,children:Object(N.jsxs)("div",{className:P.a.friend,children:[Object(N.jsx)("img",{className:P.a.img,src:e.photo,alt:"Avatar example"}),Object(N.jsx)("p",{className:P.a.text,children:e.name})]})},e.id)}))]})},A=Object(d.b)((function(e){return{friends:e.navbar.friends}}))(k),F=n(10),L=n.n(F),D=n.p+"static/media/search_white.66ea5ec3.svg",R=function(){return Object(N.jsxs)("nav",{className:L.a.nav,children:[Object(N.jsx)(f.b,{to:"/profile",activeClassName:L.a.active,className:L.a.item,children:"PROFILE"}),Object(N.jsx)(f.b,{to:"/dialogs",activeClassName:L.a.active,className:L.a.item,children:"MESSAGES"}),Object(N.jsx)(f.b,{to:"/news",activeClassName:L.a.active,className:L.a.item,children:"NEWS"}),Object(N.jsx)(f.b,{to:"/music",activeClassName:L.a.active,className:L.a.item,children:"MUSIC"}),Object(N.jsx)(f.b,{to:"/users",activeClassName:L.a.active,className:L.a.item,children:Object(N.jsxs)("div",{className:L.a.icon,children:[Object(N.jsx)("img",{src:D,alt:"serach icon"}),"USERS"]})}),Object(N.jsx)("br",{}),Object(N.jsx)(f.b,{to:"/settings",activeClassName:L.a.active,className:L.a.item,children:"SETTINGS"}),Object(N.jsx)(A,{})]})},H=n.p+"static/media/logo.6ce24c58.svg",z=n(22),G=n.n(z),M=function(e){var t=e.isAuth,n=e.login,r=e.logout;return Object(N.jsxs)("header",{className:G.a.header,children:[Object(N.jsx)("img",{className:G.a.logo,src:H,alt:"logo"}),Object(N.jsx)("div",{className:G.a.loginBlock,children:t?Object(N.jsxs)("div",{className:G.a.wrapper,children:[Object(N.jsx)("p",{className:G.a.login,children:n}),Object(N.jsx)("button",{className:G.a.btn,onClick:r,children:"LogOut"})]}):Object(N.jsx)(f.b,{className:G.a.login,to:"./login",children:"Login"})})]})},q=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(N.jsx)(M,Object(h.a)({},this.props))}}]),n}(r.Component),W=Object(g.d)(Object(d.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:j.d}))(q),B=n(55),J=s.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,315))})),V=s.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,313))})),Z=s.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,309))})),Q=s.a.lazy((function(){return n.e(9).then(n.bind(null,310))})),Y=s.a.lazy((function(){return n.e(8).then(n.bind(null,311))})),K=s.a.lazy((function(){return n.e(10).then(n.bind(null,312))})),X=s.a.lazy((function(){return n.e(6).then(n.bind(null,314))})),$=T(J),ee=T(V),te=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).catchAllUnhandledErrors=function(e){},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(N.jsxs)("div",{className:"app-wrapper",children:[Object(N.jsx)(W,{}),Object(N.jsx)(R,{}),Object(N.jsx)("div",{className:"app-wrapper-content",children:Object(N.jsx)(s.a.Suspense,{fallback:B.a,children:Object(N.jsxs)(p.d,{children:[Object(N.jsx)(p.b,{exact:!0,path:"/",render:function(){return Object(N.jsx)(p.a,{to:"/profile"})}}),Object(N.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(N.jsx)(ee,{})}}),Object(N.jsx)(p.b,{path:"/dialogs",render:function(){return Object(N.jsx)($,{})}}),Object(N.jsx)(p.b,{path:"/news",render:function(){return Object(N.jsx)(Q,{})}}),Object(N.jsx)(p.b,{path:"/music",render:function(){return Object(N.jsx)(Y,{})}}),Object(N.jsx)(p.b,{path:"/users",render:function(){return Object(N.jsx)(X,{pageTitle:"React Social Network Users"})}}),Object(N.jsx)(p.b,{path:"/settings",render:function(){return Object(N.jsx)(K,{})}}),Object(N.jsx)(p.b,{path:"/login",render:function(){return Object(N.jsx)(Z,{})}})]})})})]}):Object(N.jsx)(B.a,{})}}]),n}(r.Component),ne=Object(g.d)(p.g,Object(d.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){e(Object(j.b)()).then((function(){return e(O())}))}}}))(te),re=function(){return Object(N.jsx)(f.a,{children:Object(N.jsx)(d.a,{store:y,children:Object(N.jsx)(ne,{})})})};c.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(re,{})}),document.getElementById("root"))},27:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return g}));var r=n(5),s=n.n(r),a=n(9),c=n(3),i=n(7),o=n(30),u=function(){return i.c.get("security/get-captcha-url").then((function(e){return e.data}))},l=function(){return i.c.get("auth/me").then((function(e){return e.data}))},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return i.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},f=function(){return i.c.delete("auth/login").then((function(e){return e.data}))},d={id:null,email:null,login:null,isAuth:!1,captchaUrl:null},h=function(e,t,n,r){return{type:"auth/SET_AUTH_USER_DATA",payload:{id:e,email:t,login:n,isAuth:r}}},j=function(e){return{type:"auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},b=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){var n,r,a,c,o;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:(n=e.sent).resultCode===i.b.Succsess&&(r=n.data,a=r.id,c=r.email,o=r.login,t(h(a,c,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(e,t,n,r){return function(){var c=Object(a.a)(s.a.mark((function a(c){var u,l;return s.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,p(e,t,n,r);case 2:(u=s.sent).resultCode===i.b.Succsess?c(b()):(u.resultCode===i.a.CaptchaIsRequired&&c(m()),l=u.messages.length>0?u.messages[0]:"Some error",c(Object(o.a)("login",{_error:l})));case 4:case"end":return s.stop()}}),a)})));return function(e){return c.apply(this,arguments)}}()},m=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:n=e.sent,t(j(n.url));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(){return function(){var e=Object(a.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:e.sent.resultCode===i.b.Succsess&&t(h(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_AUTH_USER_DATA":case"auth/GET_CAPTCHA_URL_SUCCESS":return Object(c.a)(Object(c.a)({},e),t.payload);default:return e}}},29:function(e,t,n){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},55:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/loader.9c48f460.gif",s=n(2);t.a=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:r,alt:"Loading",style:{marginLeft:"200px"}})})}},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"c",(function(){return O})),n.d(t,"d",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return S}));var r=n(5),s=n.n(r),a=n(9),c=n(28),i=n(3),o=n(7),u=function(e){return o.c.get("profile/".concat(e)).then((function(e){return e.data}))},l=function(e){return o.c.get("profile/status/".concat(e)).then((function(e){return e.data}))},p=function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},d=function(e){return o.c.put("profile",e).then((function(e){return e.data}))},h=n(30),j={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],profile:null,status:""},b={addPost:function(e){return{type:"profile/ADD_POST",newPostText:e}},deletePost:function(e){return{type:"profile/DELETE_POST",postId:e}},setUserProfile:function(e){return{type:"profile/SET_USER_PROFILE",profile:e}},setProfileStatus:function(e){return{type:"profile/SET_PROFILE_STATUS",status:e}},savePhotoSuccess:function(e){return{type:"profile/SAVE_PHOTO_SUCCESS",photos:e}}},O=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u(e);case 2:r=t.sent,n(b.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(b.setProfileStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:t.sent.resultCode===o.b.Succsess&&n(b.setProfileStatus(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:(r=t.sent).resultCode===o.b.Succsess&&n(b.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n,r){var a,c;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.id,t.next=3,d(e);case 3:if((c=t.sent).resultCode!==o.b.Succsess){t.next=8;break}n(O(a)),t.next=10;break;case 8:return n(Object(h.a)("edit-profile",{_error:c.messages[0]})),t.abrupt("return",Promise.reject(c.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"profile/ADD_POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:[].concat(Object(c.a)(e.postsData),[{id:e.postsData[e.postsData.length-1].id+1,message:t.newPostText,likeCount:0}])});case"profile/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{postsData:e.postsData.filter((function(e){return e.id!==t.postId}))});case"profile/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"profile/SET_PROFILE_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"profile/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},7:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return s}));var r,s,a=n(85),c=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f406f314-0e27-4ae0-9815-6188b0f3b0b0"}});!function(e){e[e.Succsess=0]="Succsess",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(s||(s={}))},75:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(28),s=n(3),a={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},c={sendMessage:function(e){return{type:"messages/SEND-MESSAGE",newMessage:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"messages/SEND-MESSAGE":return Object(s.a)(Object(s.a)({},e),{},{messagesData:[].concat(Object(r.a)(e.messagesData),[{id:e.messagesData[e.messagesData.length-1].id+1,message:t.newMessage}])});default:return e}}},82:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return j})),n.d(t,"e",(function(){return b}));var r=n(5),s=n.n(r),a=n(9),c=n(28),i=n(3),o=n(7),u={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return o.c.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return o.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return o.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},l=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},p={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},f={followSuccess:function(e){return{type:"findUsers/FOLLOW_SUCCESS",userId:e}},unfollowSuccess:function(e){return{type:"findUsers/UNFOLLOW_SUCCESS",userId:e}},setUsers:function(e){return{type:"findUsers/SET_USERS",users:e}},setCurrentPage:function(e){return{type:"findUsers/SET_CURRENT_PAGE",pageNumber:e}},setTotalUsersCount:function(e){return{type:"findUsers/SET_TOTAL_USERS_COUNT",count:e}},setIsFetching:function(e){return{type:"findUsers/SET_IS_FETCHING",isFetching:e}},setFollowingProgress:function(e,t){return{type:"findUsers/SET_FOLLOWING_PROGRESS",isFollowing:e,userId:t}}},d=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(f.setIsFetching(!0)),r(f.setCurrentPage(e)),n.next=4,u.getUsers(e,t);case 4:a=n.sent,r(f.setIsFetching(!1)),r(f.setUsers(a.items)),r(f.setTotalUsersCount(a.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},h=function(){var e=Object(a.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(f.setFollowingProgress(!0,r)),e.next=3,n(r);case 3:e.sent.resultCode===o.b.Succsess&&t(a(r)),t(f.setFollowingProgress(!1,r));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,s){return e.apply(this,arguments)}}(),j=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,u.follow.bind(u),e,f.followSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(n,u.unfollow.bind(u),e,f.unfollowSuccess);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"findUsers/FOLLOW_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!0})});case"findUsers/UNFOLLOW_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{users:l(e.users,t.userId,"id",{followed:!1})});case"findUsers/SET_USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"findUsers/SET_CURRENT_PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.pageNumber});case"findUsers/SET_TOTAL_USERS_COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case"findUsers/SET_IS_FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case"findUsers/SET_FOLLOWING_PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}}},[[229,2,3]]]);
//# sourceMappingURL=main.a28a596a.chunk.js.map