(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[1],{138:function(t,e,n){},139:function(t,e,n){},21:function(t,e,n){t.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu",loginBlock:"Header_loginBlock__29PXN",login:"Header_login__1HUgF",wrapper:"Header_wrapper__u1Ixr",btn:"Header_btn__2eD-s"}},228:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),s=n(47),i=n.n(s),c=(n(138),n(35)),o=n(36),u=n(46),l=n(45),p=n(7),d=n(17),f=(n(139),n(22)),h=n(29),j=n.n(h),b=n(2);var m=Object(f.b)((function(t){return{friends:t.navbar.friends}}))((function(t){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:j.a.title,children:"FRIENDS"}),t.friends.map((function(t){return Object(b.jsx)("div",{className:j.a.friends,children:Object(b.jsxs)("div",{className:j.a.friend,children:[Object(b.jsx)("img",{className:j.a.img,src:t.photo,alt:"Avatar example"}),Object(b.jsx)("p",{className:j.a.text,children:t.name})]})},t.id)}))]})})),O=n(9),g=n.n(O),v=n.p+"static/media/search_white.66ea5ec3.svg";function x(t){return Object(b.jsxs)("nav",{className:g.a.nav,children:[Object(b.jsx)(d.b,{to:"/profile",activeClassName:g.a.active,className:g.a.item,children:"PROFILE"}),Object(b.jsx)(d.b,{to:"/dialogs",activeClassName:g.a.active,className:g.a.item,children:"MESSAGES"}),Object(b.jsx)(d.b,{to:"/news",activeClassName:g.a.active,className:g.a.item,children:"NEWS"}),Object(b.jsx)(d.b,{to:"/music",activeClassName:g.a.active,className:g.a.item,children:"MUSIC"}),Object(b.jsx)(d.b,{to:"/users",activeClassName:g.a.active,className:g.a.item,children:Object(b.jsxs)("div",{className:g.a.icon,children:[Object(b.jsx)("img",{src:v,alt:"serach icon"}),"USERS"]})}),Object(b.jsx)("br",{}),Object(b.jsx)(d.b,{to:"/settings",activeClassName:g.a.active,className:g.a.item,children:"SETTINGS"}),Object(b.jsx)(m,{})]})}var _=n(3),w=n.p+"static/media/logo.6ce24c58.svg",S=n(21),y=n.n(S);function N(t){return Object(b.jsxs)("header",{className:y.a.header,children:[Object(b.jsx)("img",{className:y.a.logo,src:w,alt:"logo"}),Object(b.jsx)("div",{className:y.a.loginBlock,children:t.isAuth?Object(b.jsxs)("div",{className:y.a.wrapper,children:[Object(b.jsx)("p",{className:y.a.login,children:t.login}),Object(b.jsx)("button",{className:y.a.btn,onClick:t.logout,children:"LogOut"})]}):Object(b.jsx)(d.b,{className:y.a.login,to:"./login",children:"Login"})})]})}var E=n(27),k=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(N,Object(_.a)({},this.props))}}]),n}(r.Component),C=Object(f.b)((function(t){return{isAuth:t.auth.isAuth,login:t.auth.login}}),{logout:E.d})(k),I="app/INITIALIZED_SUCCESS",U={initialized:!1},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case I:return Object(_.a)(Object(_.a)({},t),{},{initialized:!0});default:return t}},D=n(26),P=n(55),A=n(60),F=n(75),L={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},z=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L;return t},R=n(82),H=n(86),M=n(81),q=Object(D.c)({profile:A.b,messages:F.a,navbar:z,findUsers:R.a,auth:E.a,form:M.a,app:T}),G=Object(D.e)(q,Object(D.a)(H.a)),B=a.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,316))})),W=a.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,315))})),J=a.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,310))})),Q=a.a.lazy((function(){return n.e(9).then(n.bind(null,311))})),V=a.a.lazy((function(){return n.e(8).then(n.bind(null,312))})),Y=a.a.lazy((function(){return n.e(10).then(n.bind(null,313))})),Z=a.a.lazy((function(){return n.e(7).then(n.bind(null,314))})),K=function(t){Object(u.a)(n,t);var e=Object(l.a)(n);function n(t){return Object(c.a)(this,n),e.call(this,t)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(C,{}),Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"app-wrapper-content",children:Object(b.jsxs)(a.a.Suspense,{fallback:P.a,children:[Object(b.jsx)(p.b,{path:"/profile/:userId?",render:function(){return Object(b.jsx)(W,{})}}),Object(b.jsx)(p.b,{path:"/dialogs",render:function(){return Object(b.jsx)(B,{})}}),Object(b.jsx)(p.b,{path:"/news",render:function(){return Object(b.jsx)(Q,{})}}),Object(b.jsx)(p.b,{path:"/music",render:function(){return Object(b.jsx)(V,{})}}),Object(b.jsx)(p.b,{path:"/users",render:function(){return Object(b.jsx)(Z,{})}}),Object(b.jsx)(p.b,{path:"/settings",render:function(){return Object(b.jsx)(Y,{})}}),Object(b.jsx)(p.b,{path:"/login",render:function(){return Object(b.jsx)(J,{})}})]})})]}):Object(b.jsx)(P.a,{})}}]),n}(r.Component),X=Object(D.d)(Object(f.b)((function(t){return{initialized:t.app.initialized}}),{initializeApp:function(){return function(t){t(Object(E.b)()).then((function(){return t({type:I})}))}}}))(K),$=function(){return Object(b.jsx)(d.a,{children:Object(b.jsx)(f.a,{store:G,children:Object(b.jsx)(X,{})})})};i.a.render(Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)($,{})}),document.getElementById("root"))},27:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return h}));var r=n(6),a=n.n(r),s=n(11),i=n(3),c=n(48),o=n(8),u="auth/SET_AUTH_USER_DATA",l={id:null,email:null,login:null,isAuth:!1},p=function(t,e,n,r){return{type:u,payload:{userId:t,email:e,login:n,isAuth:r}}},d=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){var n,r,s,i,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.me();case 2:0===(n=t.sent).resultCode&&(r=n.data,s=r.id,i=r.email,c=r.login,e(p(s,i,c,!0)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},f=function(t,e,n){return function(){var r=Object(s.a)(a.a.mark((function r(s){var i,u;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,o.a.login(t,e,n);case 2:0===(i=r.sent).data.resultCode?s(d()):(u=i.data.messages.length>0?i.data.messages[0]:"Some error",s(Object(c.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()},h=function(){return function(){var t=Object(s.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.logout();case 2:0===t.sent.data.resultCode&&e(p(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(i.a)(Object(i.a)({},t),e.payload);default:return t}}},29:function(t,e,n){t.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},55:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));n(0);var r=n.p+"static/media/loader.9c48f460.gif",a=n(2);function s(t){return Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:r,alt:"Loading",style:{marginLeft:"200px"}})})}},60:function(t,e,n){"use strict";n.d(e,"a",(function(){return j})),n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return O})),n.d(e,"f",(function(){return g})),n.d(e,"e",(function(){return v}));var r=n(6),a=n.n(r),s=n(11),i=n(28),c=n(3),o=n(8),u="profile/ADD_POST",l="profile/DELETE_POST",p="profile/SET_USER_PROFILE",d="profile/SET_PROFILE_STATUS",f="profile/SAVE_PHOTO_SUCCESS",h={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],profile:null,status:""},j=function(t){return{type:u,newPostText:t}},b=function(t){return{type:d,status:t}},m=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getProfileInfo(t);case 2:r=e.sent,n({type:p,profile:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.getStatus(t);case 2:r=e.sent,n(b(r));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(b(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},v=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.savePhoto(t);case 2:0===(r=e.sent).data.resultCode&&n((a=r.data.data.photos,{type:f,photos:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()};e.b=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case u:return Object(c.a)(Object(c.a)({},t),{},{postsData:[].concat(Object(i.a)(t.postsData),[{id:t.postsData[t.postsData.length-1].id+1,message:e.newPostText,likeCount:0}])});case l:return Object(c.a)(Object(c.a)({},t),{},{postsData:t.postsData.filter((function(t){return t.id!==e.postId}))});case p:return Object(c.a)(Object(c.a)({},t),{},{profile:e.profile});case d:return Object(c.a)(Object(c.a)({},t),{},{status:e.status});case f:return Object(c.a)(Object(c.a)({},t),{},{profile:Object(c.a)(Object(c.a)({},t.profile),{},{photos:e.photos})});default:return t}}},75:function(t,e,n){"use strict";n.d(e,"b",(function(){return c}));var r=n(28),a=n(3),s="messages/SEND-MESSAGE",i={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(a.a)(Object(a.a)({},t),{},{messagesData:[].concat(Object(r.a)(t.messagesData),[{id:t.messagesData[t.messagesData.length-1].id+1,message:e.newMessage}])});default:return t}};var c=function(t){return{type:s,newMessage:t}}},8:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return c}));var r=n(84),a=n.n(r).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f406f314-0e27-4ae0-9815-6188b0f3b0b0"}}),s={getUsers:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))},follow:function(t){return a.post("follow/".concat(t)).then((function(t){return t.data}))},unfollow:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))}},i={getProfileInfo:function(t){return a.get("profile/".concat(t)).then((function(t){return t.data}))},getStatus:function(t){return a.get("profile/status/".concat(t)).then((function(t){return t.data}))},updateStatus:function(t){return a.put("profile/status",{status:t})},savePhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})}},c={me:function(){return a.get("auth/me").then((function(t){return t.data}))},login:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:t,password:e,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},82:function(t,e,n){"use strict";n.d(e,"d",(function(){return v})),n.d(e,"c",(function(){return w})),n.d(e,"b",(function(){return y})),n.d(e,"e",(function(){return N}));var r=n(6),a=n.n(r),s=n(11),i=n(28),c=n(3),o=n(8),u=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(c.a)(Object(c.a)({},t),r):t}))},l="findUsers/FOLLOW_SUCCESS",p="findUsers/UNFOLLOW_SUCCESS",d="findUsers/SET_USERS",f="findUsers/SET_CURRENT_PAGE",h="findUsers/SET_TOTAL_USERS_COUNT",j="findUsers/SET_IS_FETCHING",b="findUsers/SET_FOLLOWING_PROGRESS",m={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},O=function(t){return{type:l,userId:t}},g=function(t){return{type:p,userId:t}},v=function(t){return{type:f,pageNumber:t}},x=function(t){return{type:j,isFetching:t}},_=function(t,e){return{type:b,isFollowing:t,userId:e}},w=function(t,e){return function(){var n=Object(s.a)(a.a.mark((function n(r){var s;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(x(!0)),r(v(t)),n.next=4,o.c.getUsers(t,e);case 4:s=n.sent,r(x(!1)),r((i=s.items,{type:d,users:i})),r((a=s.totalCount,{type:h,count:a}));case 8:case"end":return n.stop()}var a,i}),n)})));return function(t){return n.apply(this,arguments)}}()},S=function(){var t=Object(s.a)(a.a.mark((function t(e,n,r,s){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_(!0,r)),t.next=3,n(r);case 3:0===t.sent.resultCode&&e(s(r)),e(_(!1,r));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),y=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n,o.c.follow.bind(o.c),t,O);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(t){return function(){var e=Object(s.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(n,o.c.unfollow.bind(o.c),t,g);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};e.a=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case l:return Object(c.a)(Object(c.a)({},t),{},{users:u(t.users,e.userId,"id",{followed:!0})});case p:return Object(c.a)(Object(c.a)({},t),{},{users:u(t.users,e.userId,"id",{followed:!1})});case d:return Object(c.a)(Object(c.a)({},t),{},{users:e.users});case f:return Object(c.a)(Object(c.a)({},t),{},{currentPage:e.pageNumber});case h:return Object(c.a)(Object(c.a)({},t),{},{totalUsersCount:e.count});case j:return Object(c.a)(Object(c.a)({},t),{},{isFetching:e.isFetching});case b:return Object(c.a)(Object(c.a)({},t),{},{followingInProgress:e.isFollowing?[].concat(Object(i.a)(t.followingInProgress),[e.userId]):t.followingInProgress.filter((function(t){return t!==e.userId}))});default:return t}}},9:function(t,e,n){t.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}}},[[228,2,3]]]);
//# sourceMappingURL=main.a52e7ce0.chunk.js.map