(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,function(e,t,s){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",title:"Navbar_title__1PCwW"}},,,function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__37K0U",dialogsItems:"Dialogs_dialogsItems__2XYIc",add:"Dialogs_add__Gvkj9",textArea:"Dialogs_textArea__pcLzF",btn:"Dialogs_btn__34GFz"}},function(e,t,s){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},function(e,t,s){e.exports={myposts:"MyPosts_myposts__2869F",title:"MyPosts_title__1V49T",textArea:"MyPosts_textArea__2qX7E",btn:"MyPosts_btn__1CtxC"}},function(e,t,s){e.exports={info:"ProfileInfo_info__1iMuy",description:"ProfileInfo_description__2Vn_M",avatar:"ProfileInfo_avatar__v0QMI",title:"ProfileInfo_title__cSU_W",text:"ProfileInfo_text__riMmS"}},,function(e,t,s){e.exports={dialog:"Dialog_dialog__24Zhq",active:"Dialog_active__XkXzf",user:"Dialog_user__35ZuG",img:"Dialog_img__37Hiv"}},function(e,t,s){e.exports={post:"Post_post__1xeZn",item:"Post_item__1qbBJ",photo:"Post_photo__1kzoD",btn:"Post_btn__2wcP5"}},,,,,function(e,t,s){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu"}},,,function(e,t,s){e.exports={message:"Message_message__2Wplz"}},,,,,function(e,t,s){},function(e,t,s){},,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){"use strict";s.r(t);var a=s(1),i=s.n(a),o=s(22),c=s.n(o),n=(s(29),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,45)).then((function(t){var s=t.getCLS,a=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;s(e),a(e),i(e),o(e),c(e)}))}),r="ADD-POST",p="UPDATE-NEW-POST-TEXT",l="SEND-MESSAGE",d="UPDATE-NEW-MESSAGE",h={_state:{profile:{postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],newPostText:""},messages:{messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],newMessageText:"",dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},navbar:{friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]}},_callSubscriber:function(){console.log("State changed")},getState:function(){return this._state},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){switch(e.type){case r:var t={id:this._state.profile.postsData[this._state.profile.postsData.length-1]+1,message:this._state.profile.newPostText,likeCount:0};this._state.profile.postsData.push(t),this._state.profile.newPostText="",this._callSubscriber(this._state);break;case p:this._state.profile.newPostText=e.newText,this._callSubscriber(this._state);break;case l:var s={id:this._state.messages.messagesData[this._state.messages.messagesData.length-1]+1,message:this._state.messages.newMessageText};this._state.messages.messagesData.push(s),this._state.messages.newMessageText="",this._callSubscriber(this._state);break;case d:this._state.messages.newMessageText=e.newMessage,this._callSubscriber(this._state)}}},m=s(8),u=s(2),j=(s(30),s(15)),_=s.n(j),b=s(0);function g(e){return Object(b.jsx)(m.b,{to:"/dialogs/".concat(e.id),activeClassName:_.a.active,className:_.a.dialog,children:Object(b.jsxs)("div",{className:_.a.user,children:[Object(b.jsx)("img",{className:_.a.img,src:e.photo}),e.userName]})})}var x=s(10),f=s.n(x),v=s(24),O=s.n(v);function N(e){return Object(b.jsx)("div",{className:O.a.message,children:e.message})}function S(e){var t=i.a.createRef();return Object(b.jsxs)("div",{className:f.a.dialogs,children:[Object(b.jsx)("div",{className:f.a.dialogsItems,children:e.dialogs.dialogsData.map((function(e){return Object(b.jsx)(g,{id:e.id,userName:e.userName,photo:e.photo},e.id)}))}),Object(b.jsxs)("div",{className:f.a.messages,children:[e.dialogs.messagesData.map((function(e){return Object(b.jsx)(N,{message:e.message},e.id)})),Object(b.jsxs)("div",{className:f.a.add,children:[Object(b.jsx)("textarea",{value:e.dialogs.newMessageText,onChange:function(){var s=t.current.value;e.dispatch({type:d,newMessage:s})},ref:t,className:f.a.textArea,placeholder:"Your message..."}),Object(b.jsx)("button",{onClick:function(){e.dispatch({type:l})},className:f.a.btn,children:"Send message"})]})]})]})}var D=s.p+"static/media/logo.6ce24c58.svg",P=s(21),k=s.n(P);function M(){return Object(b.jsx)("header",{className:k.a.header,children:Object(b.jsx)("img",{className:k.a.logo,src:D})})}var w=s(11),T=s.n(w);function y(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{className:T.a.title,children:"FRIENDS"}),e.friends.map((function(e){return Object(b.jsx)("div",{className:T.a.friends,children:Object(b.jsxs)("div",{className:T.a.friend,children:[Object(b.jsx)("img",{className:T.a.img,src:e.photo}),Object(b.jsx)("p",{className:T.a.text,children:e.name})]})},e.id)}))]})}var C=s(7),E=s.n(C);function A(e){return Object(b.jsxs)("nav",{className:E.a.nav,children:[Object(b.jsx)(m.b,{to:"/profile",activeClassName:E.a.active,className:E.a.item,children:"PROFILE"}),Object(b.jsx)(m.b,{to:"/dialogs",activeClassName:E.a.active,className:E.a.item,children:"MESSAGES"}),Object(b.jsx)(m.b,{to:"/news",activeClassName:E.a.active,className:E.a.item,children:"NEWS"}),Object(b.jsx)(m.b,{to:"/music",activeClassName:E.a.active,className:E.a.item,children:"MUSIC"}),Object(b.jsx)("br",{}),Object(b.jsx)(m.b,{to:"/settings",activeClassName:E.a.active,className:E.a.item,children:"SETTINGS"}),Object(b.jsx)(y,{friends:e.friends})]})}s(40);var I=s(12),q=s.n(I),F=s(16),G=s.n(F);function H(e){return Object(b.jsxs)("div",{className:G.a.post,children:[Object(b.jsxs)("div",{className:G.a.item,children:[Object(b.jsx)("img",{className:G.a.photo,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}),Object(b.jsx)("p",{children:e.message})]}),Object(b.jsxs)("button",{className:G.a.btn,children:["Like ",e.likeCount]})]})}function R(e){var t=i.a.createRef();return Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:q.a.myposts,children:[Object(b.jsx)("h2",{className:q.a.title,children:"MY POSTS"}),Object(b.jsx)("textarea",{onChange:function(){var s=t.current.value;e.dispatch({type:p,newText:s})},ref:t,className:q.a.textArea,placeholder:"Start your story...",value:e.newPostText}),Object(b.jsx)("button",{onClick:function(){e.dispatch({type:r})},className:q.a.btn,children:"Add post"})]}),Object(b.jsx)("div",{className:q.a.posts,children:e.postsData.map((function(e){return Object(b.jsx)(H,{message:e.message,likeCount:e.likeCount},e.id)}))})]})}var U=s(13),W=s.n(U);function z(){return Object(b.jsxs)("div",{className:W.a.info,children:[Object(b.jsx)("img",{className:W.a.avatar,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}),Object(b.jsxs)("div",{className:W.a.description,children:[Object(b.jsx)("h1",{className:W.a.title,children:"USER NAME"}),Object(b.jsx)("p",{className:W.a.text,children:"About Me"})]})]})}function L(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)(z,{}),Object(b.jsx)(R,{postsData:e.profile.postsData,dispatch:e.dispatch,newPostText:e.profile.newPostText})]})}s(41);function X(){return Object(b.jsx)("div",{children:"News"})}s(42);function B(){return Object(b.jsx)("div",{children:"Music"})}s(43);function J(){return Object(b.jsx)("div",{children:"Settings"})}var Y=function(e){return Object(b.jsx)(m.a,{children:Object(b.jsxs)("div",{className:"app-wrapper",children:[Object(b.jsx)(M,{}),Object(b.jsx)(A,{friends:e.state.navbar.friends}),Object(b.jsxs)("div",{className:"app-wrapper-content",children:[Object(b.jsx)(u.a,{path:"/profile",render:function(){return Object(b.jsx)(L,{profile:e.state.profile,dispatch:e.dispatch})}}),Object(b.jsx)(u.a,{path:"/dialogs",render:function(){return Object(b.jsx)(S,{dialogs:e.state.messages,dispatch:e.dispatch})}}),Object(b.jsx)(u.a,{path:"/news",render:function(){return Object(b.jsx)(X,{})}}),Object(b.jsx)(u.a,{path:"/music",render:function(){return Object(b.jsx)(B,{})}}),Object(b.jsx)(u.a,{path:"/settings",render:function(){return Object(b.jsx)(J,{})}})]})]})})},Z=function(e){c.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(Y,{state:e,dispatch:h.dispatch.bind(h)})}),document.getElementById("root"))};Z(h.getState()),h.subscribe(Z),n()}],[[44,1,2]]]);
//# sourceMappingURL=main.fac867a4.chunk.js.map