(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,s){e.exports={user:"FindUsers_user__2rFKQ",container:"FindUsers_container__qEu8S",info:"FindUsers_info__3_NER",photo:"FindUsers_photo__1Bosl",btn:"FindUsers_btn__nze1L",buttons:"FindUsers_buttons__1z6w9",smallbtn:"FindUsers_smallbtn__d29Bx"}},15:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__37K0U",dialogsItems:"Dialogs_dialogsItems__2XYIc",add:"Dialogs_add__Gvkj9",textArea:"Dialogs_textArea__pcLzF",btn:"Dialogs_btn__34GFz"}},17:function(e,t,s){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},18:function(e,t,s){e.exports={myposts:"MyPosts_myposts__2869F",title:"MyPosts_title__1V49T",textArea:"MyPosts_textArea__2qX7E",btn:"MyPosts_btn__1CtxC"}},19:function(e,t,s){e.exports={info:"ProfileInfo_info__1iMuy",description:"ProfileInfo_description__2Vn_M",avatar:"ProfileInfo_avatar__v0QMI",title:"ProfileInfo_title__cSU_W",text:"ProfileInfo_text__riMmS"}},21:function(e,t,s){e.exports={post:"Post_post__1xeZn",item:"Post_item__1qbBJ",photo:"Post_photo__1kzoD",btn:"Post_btn__2wcP5"}},22:function(e,t,s){e.exports={dialog:"Dialog_dialog__24Zhq",active:"Dialog_active__XkXzf",user:"Dialog_user__35ZuG",img:"Dialog_img__37Hiv"}},28:function(e,t,s){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu"}},41:function(e,t,s){e.exports={message:"Message_message__2Wplz"}},5:function(e,t,s){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}},51:function(e,t,s){},52:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},85:function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(25),i=s.n(c),o=(s(51),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,86)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),a(e),n(e),c(e),i(e)}))}),r=s(31),l=s(14),d=s(4),u="ADD-POST",j="UPDATE-NEW-POST-TEXT",p={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],newPostText:""},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(d.a)(Object(d.a)({},e),{},{postsData:[].concat(Object(l.a)(e.postsData),[{id:e.postsData[e.postsData.length-1].id+1,message:e.newPostText,likeCount:0}]),newPostText:""});case j:return Object(d.a)(Object(d.a)({},e),{},{newPostText:t.newText});default:return e}},b="SEND-MESSAGE",h="UPDATE-NEW-MESSAGE",f={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],newMessageText:"",dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(d.a)(Object(d.a)({},e),{},{messagesData:[].concat(Object(l.a)(e.messagesData),[{id:e.messagesData[e.messagesData.length-1].id+1,message:e.newMessageText}]),newMessageText:""});case h:return Object(d.a)(Object(d.a)({},e),{},{newMessageText:t.newMessage});default:return e}},x={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return e},g="FOLLOW",v="UNFOLLOW",N="SET-USERS",w={users:[]},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!0}):e}))});case v:return Object(d.a)(Object(d.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(d.a)(Object(d.a)({},e),{},{followed:!1}):e}))});case N:return Object(d.a)(Object(d.a)({},e),{},{users:[].concat(Object(l.a)(e.users),Object(l.a)(t.users))});default:return e}},M=Object(r.a)({profile:m,messages:_,navbar:O,findUsers:D}),S=Object(r.b)(M),P=s(12),k=s(3),T=(s(52),s.p+"static/media/logo.6ce24c58.svg"),y=s(28),E=s.n(y),C=s(0);function F(){return Object(C.jsx)("header",{className:E.a.header,children:Object(C.jsx)("img",{className:E.a.logo,src:T,alt:"logo"})})}var A=s(13),I=s(17),U=s.n(I);var q=Object(A.b)((function(e){return{friends:e.navbar.friends}}),(function(e){return{}}))((function(e){return Object(C.jsxs)("div",{children:[Object(C.jsx)("h3",{className:U.a.title,children:"FRIENDS"}),e.friends.map((function(e){return Object(C.jsx)("div",{className:U.a.friends,children:Object(C.jsxs)("div",{className:U.a.friend,children:[Object(C.jsx)("img",{className:U.a.img,src:e.photo,alt:"Avatar example"}),Object(C.jsx)("p",{className:U.a.text,children:e.name})]})},e.id)}))]})})),L=s(5),R=s.n(L),W=s.p+"static/media/search_white.66ea5ec3.svg";function z(e){return Object(C.jsxs)("nav",{className:R.a.nav,children:[Object(C.jsx)(P.b,{to:"/profile",activeClassName:R.a.active,className:R.a.item,children:"PROFILE"}),Object(C.jsx)(P.b,{to:"/dialogs",activeClassName:R.a.active,className:R.a.item,children:"MESSAGES"}),Object(C.jsx)(P.b,{to:"/news",activeClassName:R.a.active,className:R.a.item,children:"NEWS"}),Object(C.jsx)(P.b,{to:"/music",activeClassName:R.a.active,className:R.a.item,children:"MUSIC"}),Object(C.jsx)(P.b,{to:"/users",activeClassName:R.a.active,className:R.a.item,children:Object(C.jsxs)("div",{className:R.a.icon,children:[Object(C.jsx)("img",{src:W,alt:"serach icon"}),"USERS"]})}),Object(C.jsx)("br",{}),Object(C.jsx)(P.b,{to:"/settings",activeClassName:R.a.active,className:R.a.item,children:"SETTINGS"}),Object(C.jsx)(q,{})]})}s(63);var G=s(18),B=s.n(G),H=s(21),X=s.n(H);function Y(e){return Object(C.jsxs)("div",{className:X.a.post,children:[Object(C.jsxs)("div",{className:X.a.item,children:[Object(C.jsx)("img",{className:X.a.photo,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar example"}),Object(C.jsx)("p",{children:e.message})]}),Object(C.jsxs)("button",{className:X.a.btn,children:["Like ",e.likeCount]})]})}var J=Object(A.b)((function(e){return{postsData:e.profile.postsData,newPostText:e.profile.newPostText}}),(function(e){return{addPost:function(){e({type:u})},updateNewPostText:function(t){e({type:j,newText:t})}}}))((function(e){var t=n.a.createRef();return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:B.a.myposts,children:[Object(C.jsx)("h2",{className:B.a.title,children:"MY POSTS"}),Object(C.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewPostText(s)},ref:t,className:B.a.textArea,placeholder:"Start your story...",value:e.newPostText}),Object(C.jsx)("button",{onClick:function(){e.addPost()},className:B.a.btn,children:"Add post"})]}),Object(C.jsx)("div",{className:B.a.posts,children:e.postsData.map((function(e){return Object(C.jsx)(Y,{message:e.message,likeCount:e.likeCount},e.id)}))})]})})),Q=s(19),Z=s.n(Q);function K(){return Object(C.jsxs)("div",{className:Z.a.info,children:[Object(C.jsx)("img",{className:Z.a.avatar,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar example"}),Object(C.jsxs)("div",{className:Z.a.description,children:[Object(C.jsx)("h1",{className:Z.a.title,children:"USER NAME"}),Object(C.jsx)("p",{className:Z.a.text,children:"About Me"})]})]})}function V(e){return Object(C.jsxs)("div",{children:[Object(C.jsx)(K,{}),Object(C.jsx)(J,{})]})}s(64);function $(){return Object(C.jsx)("div",{children:"News"})}s(65);function ee(){return Object(C.jsx)("div",{children:"Music"})}s(66);function te(){return Object(C.jsx)("div",{children:"Settings"})}var se=s(22),ae=s.n(se);function ne(e){return Object(C.jsx)(P.b,{to:"/dialogs/".concat(e.id),activeClassName:ae.a.active,className:ae.a.dialog,children:Object(C.jsxs)("div",{className:ae.a.user,children:[Object(C.jsx)("img",{className:ae.a.img,src:e.photo,alt:"Avatar example"}),e.userName]})})}var ce=s(15),ie=s.n(ce),oe=s(41),re=s.n(oe);function le(e){return Object(C.jsx)("div",{className:re.a.message,children:e.message})}var de=Object(A.b)((function(e){return{dialogsData:e.messages.dialogsData,messagesData:e.messages.messagesData,newMessageText:e.messages.newMessageText}}),(function(e){return{sendMessage:function(){e({type:b})},updateNewMessage:function(t){e({type:h,newMessage:t})}}}))((function(e){var t=n.a.createRef();return Object(C.jsxs)("div",{className:ie.a.dialogs,children:[Object(C.jsx)("div",{className:ie.a.dialogsItems,children:e.dialogsData.map((function(e){return Object(C.jsx)(ne,{id:e.id,userName:e.userName,photo:e.photo},e.id)}))}),Object(C.jsxs)("div",{className:ie.a.messages,children:[e.messagesData.map((function(e){return Object(C.jsx)(le,{message:e.message},e.id)})),Object(C.jsxs)("div",{className:ie.a.add,children:[Object(C.jsx)("textarea",{value:e.newMessageText,onChange:function(){var s=t.current.value;e.updateNewMessage(s)},ref:t,className:ie.a.textArea,placeholder:"Your message..."}),Object(C.jsx)("button",{onClick:function(){e.sendMessage()},className:ie.a.btn,children:"Send message"})]})]})]})})),ue=s(42),je=s(43),pe=s(46),me=s(45),be=s(44),he=s.n(be),fe=s(10),_e=s.n(fe),xe=s.p+"static/media/user.181d3cde.jpg",Oe=function(e){Object(pe.a)(s,e);var t=Object(me.a)(s);function s(e){return Object(ue.a)(this,s),t.call(this,e)}return Object(je.a)(s,[{key:"componentDidMount",value:function(){var e=this;he.a.get("https://social-network.samuraijs.com/api/1.0/users",{headers:{"API-KEY":"d4193994-fff7-4712-976d-d1bc0305c9fc"}}).then((function(t){return e.props.setUsers(t.data.items)}))}},{key:"render",value:function(){var e=this;return Object(C.jsxs)("div",{children:[Object(C.jsxs)("div",{className:_e.a.buttons,children:[Object(C.jsx)("button",{className:_e.a.smallbtn,children:"1"}),Object(C.jsx)("button",{className:_e.a.smallbtn,children:"2"}),Object(C.jsx)("button",{className:_e.a.smallbtn,children:"3"}),Object(C.jsx)("button",{className:_e.a.smallbtn,children:"4"}),Object(C.jsx)("button",{className:_e.a.smallbtn,children:"5"})]}),this.props.users.map((function(t){return Object(C.jsxs)("div",{className:_e.a.user,children:[Object(C.jsxs)("div",{className:_e.a.container,children:[Object(C.jsx)("img",{className:_e.a.photo,src:null!==t.photos.small?t.photos.small:xe,alt:t.name}),t.followed?Object(C.jsx)("button",{onClick:function(){return e.props.unfollow(t.id)},className:_e.a.btn,children:"UNFOLLOW"}):Object(C.jsx)("button",{onClick:function(){return e.props.follow(t.id)},className:_e.a.btn,children:"FOLLOW"})]}),Object(C.jsxs)("div",{className:_e.a.info,children:[Object(C.jsx)("h3",{children:t.name}),Object(C.jsx)("p",{children:t.status})]})]},t.id)}))]})}}]),s}(a.Component),ge=Object(A.b)((function(e){return{users:e.findUsers.users}}),(function(e){return{follow:function(t){e({type:g,userId:t})},unfollow:function(t){e({type:v,userId:t})},setUsers:function(t){e(function(e){return{type:N,users:e}}(t))}}}))(Oe),ve=function(e){return Object(C.jsx)(P.a,{children:Object(C.jsxs)("div",{className:"app-wrapper",children:[Object(C.jsx)(F,{}),Object(C.jsx)(z,{}),Object(C.jsxs)("div",{className:"app-wrapper-content",children:[Object(C.jsx)(k.a,{path:"/profile",render:function(){return Object(C.jsx)(V,{})}}),Object(C.jsx)(k.a,{path:"/dialogs",render:function(){return Object(C.jsx)(de,{})}}),Object(C.jsx)(k.a,{path:"/news",render:function(){return Object(C.jsx)($,{})}}),Object(C.jsx)(k.a,{path:"/music",render:function(){return Object(C.jsx)(ee,{})}}),Object(C.jsx)(k.a,{path:"/users",render:function(){return Object(C.jsx)(ge,{})}}),Object(C.jsx)(k.a,{path:"/settings",render:function(){return Object(C.jsx)(te,{})}})]})]})})};i.a.render(Object(C.jsx)(n.a.StrictMode,{children:Object(C.jsx)(A.a,{store:S,children:Object(C.jsx)(ve,{})})}),document.getElementById("root")),o()}},[[85,1,2]]]);
//# sourceMappingURL=main.6dfb91e8.chunk.js.map