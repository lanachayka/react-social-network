(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,s){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",title:"Navbar_title__1PCwW"}},,,function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__37K0U",dialogsItems:"Dialogs_dialogsItems__2XYIc",add:"Dialogs_add__Gvkj9",textArea:"Dialogs_textArea__pcLzF",btn:"Dialogs_btn__34GFz"}},function(e,t,s){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},function(e,t,s){e.exports={myposts:"MyPosts_myposts__2869F",title:"MyPosts_title__1V49T",textArea:"MyPosts_textArea__2qX7E",btn:"MyPosts_btn__1CtxC"}},function(e,t,s){e.exports={info:"ProfileInfo_info__1iMuy",description:"ProfileInfo_description__2Vn_M",avatar:"ProfileInfo_avatar__v0QMI",title:"ProfileInfo_title__cSU_W",text:"ProfileInfo_text__riMmS"}},,function(e,t,s){e.exports={dialog:"Dialog_dialog__24Zhq",active:"Dialog_active__XkXzf",user:"Dialog_user__35ZuG",img:"Dialog_img__37Hiv"}},function(e,t,s){e.exports={post:"Post_post__1xeZn",item:"Post_item__1qbBJ",photo:"Post_photo__1kzoD",btn:"Post_btn__2wcP5"}},,,,,function(e,t,s){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu"}},,,function(e,t,s){e.exports={message:"Message_message__2Wplz"}},,,,,function(e,t,s){},function(e,t,s){},,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),o=s.n(a),i=s(22),c=s.n(i),n=(s(29),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,a=t.getFID,o=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),o(e),i(e),c(e)}))}),r={profile:{postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],newPostText:""},messages:{messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},navbar:{friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]}},d=function(e){console.log("State changed")},p=function(){var e={id:r.profile.postsData[r.profile.postsData.length-1]+1,message:r.profile.newPostText,likeCount:0};r.profile.postsData.push(e),r.profile.newPostText="",d(r)},l=function(e){r.profile.newPostText=e,d(r)},j=r,m=s(8),u=s(2),h=(s(30),s(15)),_=s.n(h),x=s(0);function f(e){return Object(x.jsx)(m.b,{to:"/dialogs/".concat(e.id),activeClassName:_.a.active,className:_.a.dialog,children:Object(x.jsxs)("div",{className:_.a.user,children:[Object(x.jsx)("img",{className:_.a.img,src:e.photo}),e.userName]})})}var b=s(10),g=s.n(b),v=s(24),N=s.n(v);function O(e){return Object(x.jsx)("div",{className:N.a.message,children:e.message})}function P(e){var t=o.a.createRef();return Object(x.jsxs)("div",{className:g.a.dialogs,children:[Object(x.jsx)("div",{className:g.a.dialogsItems,children:e.dialogs.dialogsData.map((function(e){return Object(x.jsx)(f,{id:e.id,userName:e.userName,photo:e.photo},e.id)}))}),Object(x.jsxs)("div",{className:g.a.messages,children:[e.dialogs.messagesData.map((function(e){return Object(x.jsx)(O,{message:e.message},e.id)})),Object(x.jsxs)("div",{className:g.a.add,children:[Object(x.jsx)("textarea",{ref:t,className:g.a.textArea,placeholder:"Your message..."}),Object(x.jsx)("button",{onClick:function(){alert(t.current.value)},className:g.a.btn,children:"Sent message"})]})]})]})}var k=s.p+"static/media/logo.6ce24c58.svg",D=s(21),w=s.n(D);function S(){return Object(x.jsx)("header",{className:w.a.header,children:Object(x.jsx)("img",{className:w.a.logo,src:k})})}var C=s(11),M=s.n(C);function T(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{className:M.a.title,children:"FRIENDS"}),e.friends.map((function(e){return Object(x.jsx)("div",{className:M.a.friends,children:Object(x.jsxs)("div",{className:M.a.friend,children:[Object(x.jsx)("img",{className:M.a.img,src:e.photo}),Object(x.jsx)("p",{className:M.a.text,children:e.name})]})},e.id)}))]})}var y=s(7),I=s.n(y);function q(e){return Object(x.jsxs)("nav",{className:I.a.nav,children:[Object(x.jsx)(m.b,{to:"/profile",activeClassName:I.a.active,className:I.a.item,children:"PROFILE"}),Object(x.jsx)(m.b,{to:"/dialogs",activeClassName:I.a.active,className:I.a.item,children:"MESSAGES"}),Object(x.jsx)(m.b,{to:"/news",activeClassName:I.a.active,className:I.a.item,children:"NEWS"}),Object(x.jsx)(m.b,{to:"/music",activeClassName:I.a.active,className:I.a.item,children:"MUSIC"}),Object(x.jsx)("br",{}),Object(x.jsx)(m.b,{to:"/settings",activeClassName:I.a.active,className:I.a.item,children:"SETTINGS"}),Object(x.jsx)(T,{friends:e.friends})]})}s(40);var F=s(12),A=s.n(F),E=s(16),H=s.n(E);function R(e){return Object(x.jsxs)("div",{className:H.a.post,children:[Object(x.jsxs)("div",{className:H.a.item,children:[Object(x.jsx)("img",{className:H.a.photo,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}),Object(x.jsx)("p",{children:e.message})]}),Object(x.jsxs)("button",{className:H.a.btn,children:["Like ",e.likeCount]})]})}function z(e){var t=o.a.createRef();return Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:A.a.myposts,children:[Object(x.jsx)("h2",{className:A.a.title,children:"MY POSTS"}),Object(x.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewPostText(s)},ref:t,className:A.a.textArea,placeholder:"Start your story...",value:e.newPostText}),Object(x.jsx)("button",{onClick:function(){e.addPost()},className:A.a.btn,children:"Add post"})]}),Object(x.jsx)("div",{className:A.a.posts,children:e.postsData.map((function(e){return Object(x.jsx)(R,{message:e.message,likeCount:e.likeCount},e.id)}))})]})}var G=s(13),L=s.n(G);function B(){return Object(x.jsxs)("div",{className:L.a.info,children:[Object(x.jsx)("img",{className:L.a.avatar,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}),Object(x.jsxs)("div",{className:L.a.description,children:[Object(x.jsx)("h1",{className:L.a.title,children:"USER NAME"}),Object(x.jsx)("p",{className:L.a.text,children:"About Me"})]})]})}function J(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(B,{}),Object(x.jsx)(z,{postsData:e.profile.postsData,addPost:e.addPost,updateNewPostText:e.updateNewPostText,newPostText:e.profile.newPostText})]})}s(41);function U(){return Object(x.jsx)("div",{children:"News"})}s(42);function W(){return Object(x.jsx)("div",{children:"Music"})}s(43);function X(){return Object(x.jsx)("div",{children:"Settings"})}var Y=function(e){return Object(x.jsx)(m.a,{children:Object(x.jsxs)("div",{className:"app-wrapper",children:[Object(x.jsx)(S,{}),Object(x.jsx)(q,{friends:e.state.navbar.friends}),Object(x.jsxs)("div",{className:"app-wrapper-content",children:[Object(x.jsx)(u.a,{path:"/profile",render:function(){return Object(x.jsx)(J,{profile:e.state.profile,addPost:e.addPost,updateNewPostText:e.updateNewPostText})}}),Object(x.jsx)(u.a,{path:"/dialogs",render:function(){return Object(x.jsx)(P,{dialogs:e.state.messages})}}),Object(x.jsx)(u.a,{path:"/news",render:function(){return Object(x.jsx)(U,{})}}),Object(x.jsx)(u.a,{path:"/music",render:function(){return Object(x.jsx)(W,{})}}),Object(x.jsx)(u.a,{path:"/settings",render:function(){return Object(x.jsx)(X,{})}})]})]})})},Z=function(e){c.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(Y,{state:e,addPost:p,updateNewPostText:l})}),document.getElementById("root"))};Z(j),d=Z,n()}],[[44,1,2]]]);
//# sourceMappingURL=main.0a1cac56.chunk.js.map