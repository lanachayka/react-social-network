(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__37K0U",dialogsItems:"Dialogs_dialogsItems__2XYIc",add:"Dialogs_add__Gvkj9",textArea:"Dialogs_textArea__pcLzF",btn:"Dialogs_btn__34GFz"}},15:function(e,t,s){e.exports={user:"FindUsers_user__2rFKQ",container:"FindUsers_container__qEu8S",info:"FindUsers_info__3_NER",photo:"FindUsers_photo__1Bosl",btn:"FindUsers_btn__nze1L"}},17:function(e,t,s){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},18:function(e,t,s){e.exports={myposts:"MyPosts_myposts__2869F",title:"MyPosts_title__1V49T",textArea:"MyPosts_textArea__2qX7E",btn:"MyPosts_btn__1CtxC"}},19:function(e,t,s){e.exports={info:"ProfileInfo_info__1iMuy",description:"ProfileInfo_description__2Vn_M",avatar:"ProfileInfo_avatar__v0QMI",title:"ProfileInfo_title__cSU_W",text:"ProfileInfo_text__riMmS"}},21:function(e,t,s){e.exports={post:"Post_post__1xeZn",item:"Post_item__1qbBJ",photo:"Post_photo__1kzoD",btn:"Post_btn__2wcP5"}},22:function(e,t,s){e.exports={dialog:"Dialog_dialog__24Zhq",active:"Dialog_active__XkXzf",user:"Dialog_user__35ZuG",img:"Dialog_img__37Hiv"}},28:function(e,t,s){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu"}},41:function(e,t,s){e.exports={message:"Message_message__2Wplz"}},5:function(e,t,s){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}},51:function(e,t,s){},52:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),i=s(25),o=s.n(i),c=(s(51),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,86)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),i(e),o(e)}))}),r=s(31),l=s(13),u=s(4),d="ADD-POST",p="UPDATE-NEW-POST-TEXT",j={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],newPostText:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{postsData:[].concat(Object(l.a)(e.postsData),[{id:e.postsData[e.postsData.length-1].id+1,message:e.newPostText,likeCount:0}]),newPostText:""});case p:return Object(u.a)(Object(u.a)({},e),{},{newPostText:t.newText});default:return e}},h="SEND-MESSAGE",b="UPDATE-NEW-MESSAGE",f={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],newMessageText:"",dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{messagesData:[].concat(Object(l.a)(e.messagesData),[{id:e.messagesData[e.messagesData.length-1].id+1,message:e.newMessageText}]),newMessageText:""});case b:return Object(u.a)(Object(u.a)({},e),{},{newMessageText:t.newMessage});default:return e}},x={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return e},g="FOLLOW",v="UNFOLLOW",N="SET-USERS",w={users:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!0}):e}))});case v:return Object(u.a)(Object(u.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(u.a)(Object(u.a)({},e),{},{followed:!1}):e}))});case N:return Object(u.a)(Object(u.a)({},e),{},{users:[].concat(Object(l.a)(e.users),Object(l.a)(t.users))});default:return e}},M=Object(r.a)({profile:m,messages:_,navbar:O,findUsers:D}),S=Object(r.b)(M),P=s(11),k=s(3),T=(s(52),s.p+"static/media/logo.6ce24c58.svg"),y=s(28),C=s.n(y),E=s(1);function F(){return Object(E.jsx)("header",{className:C.a.header,children:Object(E.jsx)("img",{className:C.a.logo,src:T,alt:"logo"})})}var A=s(12),I=s(17),U=s.n(I);var q=Object(A.b)((function(e){return{friends:e.navbar.friends}}),(function(e){return{}}))((function(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)("h3",{className:U.a.title,children:"FRIENDS"}),e.friends.map((function(e){return Object(E.jsx)("div",{className:U.a.friends,children:Object(E.jsxs)("div",{className:U.a.friend,children:[Object(E.jsx)("img",{className:U.a.img,src:e.photo,alt:"Avatar example"}),Object(E.jsx)("p",{className:U.a.text,children:e.name})]})},e.id)}))]})})),L=s(5),R=s.n(L),W=s.p+"static/media/search_white.66ea5ec3.svg";function G(e){return Object(E.jsxs)("nav",{className:R.a.nav,children:[Object(E.jsx)(P.b,{to:"/profile",activeClassName:R.a.active,className:R.a.item,children:"PROFILE"}),Object(E.jsx)(P.b,{to:"/dialogs",activeClassName:R.a.active,className:R.a.item,children:"MESSAGES"}),Object(E.jsx)(P.b,{to:"/news",activeClassName:R.a.active,className:R.a.item,children:"NEWS"}),Object(E.jsx)(P.b,{to:"/music",activeClassName:R.a.active,className:R.a.item,children:"MUSIC"}),Object(E.jsx)(P.b,{to:"/users",activeClassName:R.a.active,className:R.a.item,children:Object(E.jsxs)("div",{className:R.a.icon,children:[Object(E.jsx)("img",{src:W,alt:"serach icon"}),"USERS"]})}),Object(E.jsx)("br",{}),Object(E.jsx)(P.b,{to:"/settings",activeClassName:R.a.active,className:R.a.item,children:"SETTINGS"}),Object(E.jsx)(q,{})]})}s(63);var z=s(18),H=s.n(z),B=s(21),X=s.n(B);function J(e){return Object(E.jsxs)("div",{className:X.a.post,children:[Object(E.jsxs)("div",{className:X.a.item,children:[Object(E.jsx)("img",{className:X.a.photo,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar example"}),Object(E.jsx)("p",{children:e.message})]}),Object(E.jsxs)("button",{className:X.a.btn,children:["Like ",e.likeCount]})]})}var Q=Object(A.b)((function(e){return{postsData:e.profile.postsData,newPostText:e.profile.newPostText}}),(function(e){return{addPost:function(){e({type:d})},updateNewPostText:function(t){e({type:p,newText:t})}}}))((function(e){var t=n.a.createRef();return Object(E.jsxs)("div",{children:[Object(E.jsxs)("div",{className:H.a.myposts,children:[Object(E.jsx)("h2",{className:H.a.title,children:"MY POSTS"}),Object(E.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewPostText(s)},ref:t,className:H.a.textArea,placeholder:"Start your story...",value:e.newPostText}),Object(E.jsx)("button",{onClick:function(){e.addPost()},className:H.a.btn,children:"Add post"})]}),Object(E.jsx)("div",{className:H.a.posts,children:e.postsData.map((function(e){return Object(E.jsx)(J,{message:e.message,likeCount:e.likeCount},e.id)}))})]})})),Y=s(19),Z=s.n(Y);function V(){return Object(E.jsxs)("div",{className:Z.a.info,children:[Object(E.jsx)("img",{className:Z.a.avatar,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar example"}),Object(E.jsxs)("div",{className:Z.a.description,children:[Object(E.jsx)("h1",{className:Z.a.title,children:"USER NAME"}),Object(E.jsx)("p",{className:Z.a.text,children:"About Me"})]})]})}function K(e){return Object(E.jsxs)("div",{children:[Object(E.jsx)(V,{}),Object(E.jsx)(Q,{})]})}s(64);function $(){return Object(E.jsx)("div",{children:"News"})}s(65);function ee(){return Object(E.jsx)("div",{children:"Music"})}s(66);function te(){return Object(E.jsx)("div",{children:"Settings"})}var se=s(22),ae=s.n(se);function ne(e){return Object(E.jsx)(P.b,{to:"/dialogs/".concat(e.id),activeClassName:ae.a.active,className:ae.a.dialog,children:Object(E.jsxs)("div",{className:ae.a.user,children:[Object(E.jsx)("img",{className:ae.a.img,src:e.photo,alt:"Avatar example"}),e.userName]})})}var ie=s(14),oe=s.n(ie),ce=s(41),re=s.n(ce);function le(e){return Object(E.jsx)("div",{className:re.a.message,children:e.message})}var ue=Object(A.b)((function(e){return{dialogsData:e.messages.dialogsData,messagesData:e.messages.messagesData,newMessageText:e.messages.newMessageText}}),(function(e){return{sendMessage:function(){e({type:h})},updateNewMessage:function(t){e({type:b,newMessage:t})}}}))((function(e){var t=n.a.createRef();return Object(E.jsxs)("div",{className:oe.a.dialogs,children:[Object(E.jsx)("div",{className:oe.a.dialogsItems,children:e.dialogsData.map((function(e){return Object(E.jsx)(ne,{id:e.id,userName:e.userName,photo:e.photo},e.id)}))}),Object(E.jsxs)("div",{className:oe.a.messages,children:[e.messagesData.map((function(e){return Object(E.jsx)(le,{message:e.message},e.id)})),Object(E.jsxs)("div",{className:oe.a.add,children:[Object(E.jsx)("textarea",{value:e.newMessageText,onChange:function(){var s=t.current.value;e.updateNewMessage(s)},ref:t,className:oe.a.textArea,placeholder:"Your message..."}),Object(E.jsx)("button",{onClick:function(){e.sendMessage()},className:oe.a.btn,children:"Send message"})]})]})]})})),de=s(42),pe=s(43),je=s(46),me=s(45),he=s(44),be=s.n(he),fe=s(15),_e=s.n(fe),xe=s.p+"static/media/user.181d3cde.jpg",Oe=function(e){Object(je.a)(s,e);var t=Object(me.a)(s);function s(e){return Object(de.a)(this,s),t.call(this,e)}return Object(pe.a)(s,[{key:"componentDidMount",value:function(){var e=this;0===this.props.users.length&&be.a.get("https://social-network.samuraijs.com/api/1.0/users").then((function(t){return e.props.setUsers(t.data.items)}))}},{key:"render",value:function(){var e=this;return Object(E.jsx)("div",{children:this.props.users.map((function(t){return Object(E.jsxs)("div",{className:_e.a.user,children:[Object(E.jsxs)("div",{className:_e.a.container,children:[Object(E.jsx)("img",{className:_e.a.photo,src:null!==t.photos.small?t.photos.small:xe,alt:t.name}),t.followed?Object(E.jsx)("button",{onClick:function(){return e.props.unfollow(t.id)},className:_e.a.btn,children:"UNFOLLOW"}):Object(E.jsx)("button",{onClick:function(){return e.props.follow(t.id)},className:_e.a.btn,children:"FOLLOW"})]}),Object(E.jsxs)("div",{className:_e.a.info,children:[Object(E.jsx)("h3",{children:t.name}),Object(E.jsx)("p",{children:t.status})]})]},t.id)}))})}}]),s}(a.Component),ge=Object(A.b)((function(e){return{users:e.findUsers.users}}),(function(e){return{follow:function(t){e({type:g,userId:t})},unfollow:function(t){e({type:v,userId:t})},setUsers:function(t){e(function(e){return{type:N,users:e}}(t))}}}))(Oe),ve=function(e){return Object(E.jsx)(P.a,{children:Object(E.jsxs)("div",{className:"app-wrapper",children:[Object(E.jsx)(F,{}),Object(E.jsx)(G,{}),Object(E.jsxs)("div",{className:"app-wrapper-content",children:[Object(E.jsx)(k.a,{path:"/profile",render:function(){return Object(E.jsx)(K,{})}}),Object(E.jsx)(k.a,{path:"/dialogs",render:function(){return Object(E.jsx)(ue,{})}}),Object(E.jsx)(k.a,{path:"/news",render:function(){return Object(E.jsx)($,{})}}),Object(E.jsx)(k.a,{path:"/music",render:function(){return Object(E.jsx)(ee,{})}}),Object(E.jsx)(k.a,{path:"/users",render:function(){return Object(E.jsx)(ge,{})}}),Object(E.jsx)(k.a,{path:"/settings",render:function(){return Object(E.jsx)(te,{})}})]})]})})};o.a.render(Object(E.jsx)(n.a.StrictMode,{children:Object(E.jsx)(A.a,{store:S,children:Object(E.jsx)(ve,{})})}),document.getElementById("root")),c()}},[[85,1,2]]]);
//# sourceMappingURL=main.a217ffc0.chunk.js.map