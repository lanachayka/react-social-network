(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{116:function(e,t,s){e.exports={message:"Message_message__2Wplz"}},123:function(e,t,s){},13:function(e,t,s){e.exports={nav:"Navbar_nav__iAsk2",item:"Navbar_item__26SM4",active:"Navbar_active__2enci",icon:"Navbar_icon__Qc7ak"}},14:function(e,t,s){e.exports={info:"ProfileInfo_info__1iMuy",description:"ProfileInfo_description__2Vn_M",avatar:"ProfileInfo_avatar__v0QMI",title:"ProfileInfo_title__cSU_W",text:"ProfileInfo_text__riMmS",link:"ProfileInfo_link__36UG7"}},202:function(e,t,s){},212:function(e,t,s){},213:function(e,t,s){},214:function(e,t,s){},215:function(e,t,s){},23:function(e,t,s){e.exports={user:"FindUsers_user__2rFKQ",container:"FindUsers_container__qEu8S",info:"FindUsers_info__3_NER",photo:"FindUsers_photo__1Bosl",btn:"FindUsers_btn__nze1L",buttons:"FindUsers_buttons__1z6w9",smallbtn:"FindUsers_smallbtn__d29Bx",smallbtnActive:"FindUsers_smallbtnActive__3Q8en"}},256:function(e,t,s){"use strict";s.r(t);var n=s(1),a=s.n(n),i=s(60),o=s.n(i),c=(s(123),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,260)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),n(e),a(e),i(e),o(e)}))}),r=s(9),u=s(38),l=s(4),d=s(112),p=s.n(d).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"f406f314-0e27-4ae0-9815-6188b0f3b0b0"}}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return p.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},h=function(e){return p.post("follow/".concat(e)).then((function(e){return e.data}))},b=function(e){return p.delete("follow/".concat(e)).then((function(e){return e.data}))},f=function(e){return p.get("profile/".concat(e)).then((function(e){return e.data}))},m=function(e){return p.get("profile/status/".concat(e)).then((function(e){return e.data}))},g=function(e){return p.put("profile/status",{status:e})},O=function(){return p.get("auth/me").then((function(e){return e.data}))},x="ADD_POST",_="UPDATE_NEW_POST_TEXT",v="SET_USER_PROFILE",N="SET_PROFILE_STATUS",S={postsData:[{id:1,message:"Hi? how are you?",likeCount:0},{id:2,message:"It's my first post!",likeCount:23}],newPostText:"",profile:null,status:""},P=function(e){return{type:N,status:e}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(l.a)(Object(l.a)({},e),{},{postsData:[].concat(Object(u.a)(e.postsData),[{id:e.postsData[e.postsData.length-1].id+1,message:e.newPostText,likeCount:0}]),newPostText:""});case _:return Object(l.a)(Object(l.a)({},e),{},{newPostText:t.newText});case v:return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});case N:return Object(l.a)(Object(l.a)({},e),{},{status:t.status});default:return e}},k="SEND-MESSAGE",C="UPDATE-NEW-MESSAGE",y={messagesData:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"}],newMessageText:"",dialogsData:[{id:1,userName:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,userName:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,userName:"Anna",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:4,userName:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:5,userName:"Sasha",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:6,userName:"Victor",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(l.a)(Object(l.a)({},e),{},{messagesData:[].concat(Object(u.a)(e.messagesData),[{id:e.messagesData[e.messagesData.length-1].id+1,message:e.newMessageText}]),newMessageText:""});case C:return Object(l.a)(Object(l.a)({},e),{},{newMessageText:t.newMessage});default:return e}},M={friends:[{id:1,name:"Dimych",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:2,name:"Max",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"},{id:3,name:"Sveta",photo:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg"}]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M;return e},E="FOLLOW_SUCCESS",D="UNFOLLOW_SUCCESS",F="SET_USERS",U="SET_CURRENT_PAGE",A="SET_TOTAL_USERS_COUNT",L="SET_IS_FETCHING",R="SET_FOLLOWING_PROGRESS",q={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},G=function(e){return{type:L,isFetching:e}},z=function(e,t){return{type:R,isFollowing:e,userId:t}},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(l.a)(Object(l.a)({},e),{},{followed:!0}):e}))});case D:return Object(l.a)(Object(l.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(l.a)(Object(l.a)({},e),{},{followed:!1}):e}))});case F:return Object(l.a)(Object(l.a)({},e),{},{users:t.users});case U:return Object(l.a)(Object(l.a)({},e),{},{currentPage:t.pageNumber});case A:return Object(l.a)(Object(l.a)({},e),{},{totalUsersCount:t.count});case L:return Object(l.a)(Object(l.a)({},e),{},{isFetching:t.isFetching});case R:return Object(l.a)(Object(l.a)({},e),{},{followingInProgress:t.isFollowing?[].concat(Object(u.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},B="SET_AUTH_USER_DATA",W={id:null,email:null,login:null,isAuth:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case B:return Object(l.a)(Object(l.a)(Object(l.a)({},e),t.data),{},{isAuth:!0});default:return e}},Y=s(114),Q=s(259),V=Object(r.c)({profile:w,messages:T,navbar:I,findUsers:H,auth:X,form:Q.a}),Z=Object(r.e)(V,Object(r.a)(Y.a)),J=s(12),K=s(8),$=(s(202),s(10)),ee=s(39),te=s.n(ee),se=s(0);var ne=Object($.b)((function(e){return{friends:e.navbar.friends}}))((function(e){return Object(se.jsxs)("div",{children:[Object(se.jsx)("h3",{className:te.a.title,children:"FRIENDS"}),e.friends.map((function(e){return Object(se.jsx)("div",{className:te.a.friends,children:Object(se.jsxs)("div",{className:te.a.friend,children:[Object(se.jsx)("img",{className:te.a.img,src:e.photo,alt:"Avatar example"}),Object(se.jsx)("p",{className:te.a.text,children:e.name})]})},e.id)}))]})})),ae=s(13),ie=s.n(ae),oe=s.p+"static/media/search_white.66ea5ec3.svg";function ce(e){return Object(se.jsxs)("nav",{className:ie.a.nav,children:[Object(se.jsx)(J.b,{to:"/profile",activeClassName:ie.a.active,className:ie.a.item,children:"PROFILE"}),Object(se.jsx)(J.b,{to:"/dialogs",activeClassName:ie.a.active,className:ie.a.item,children:"MESSAGES"}),Object(se.jsx)(J.b,{to:"/news",activeClassName:ie.a.active,className:ie.a.item,children:"NEWS"}),Object(se.jsx)(J.b,{to:"/music",activeClassName:ie.a.active,className:ie.a.item,children:"MUSIC"}),Object(se.jsx)(J.b,{to:"/users",activeClassName:ie.a.active,className:ie.a.item,children:Object(se.jsxs)("div",{className:ie.a.icon,children:[Object(se.jsx)("img",{src:oe,alt:"serach icon"}),"USERS"]})}),Object(se.jsx)("br",{}),Object(se.jsx)(J.b,{to:"/settings",activeClassName:ie.a.active,className:ie.a.item,children:"SETTINGS"}),Object(se.jsx)(ne,{})]})}var re=s(26),ue=s(27),le=s(29),de=s(28),pe=(s(212),s(40)),je=s.n(pe),he=s(48),be=s.n(he);function fe(e){return Object(se.jsxs)("div",{className:be.a.post,children:[Object(se.jsxs)("div",{className:be.a.item,children:[Object(se.jsx)("img",{className:be.a.photo,src:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar example"}),Object(se.jsx)("p",{children:e.message})]}),Object(se.jsxs)("button",{className:be.a.btn,children:["Like ",e.likeCount]})]})}var me=Object($.b)((function(e){return{postsData:e.profile.postsData,newPostText:e.profile.newPostText}}),{addPost:function(){return{type:x}},updateNewPostText:function(e){return{type:_,newText:e}}})((function(e){var t=a.a.createRef();return Object(se.jsxs)("div",{children:[Object(se.jsxs)("div",{className:je.a.myposts,children:[Object(se.jsx)("h2",{className:je.a.title,children:"MY POSTS"}),Object(se.jsx)("textarea",{onChange:function(){var s=t.current.value;e.updateNewPostText(s)},ref:t,className:je.a.textArea,placeholder:"Start your story...",value:e.newPostText}),Object(se.jsx)("button",{onClick:function(){e.addPost()},className:je.a.btn,children:"Add post"})]}),Object(se.jsx)("div",{className:je.a.posts,children:e.postsData.map((function(e){return Object(se.jsx)(fe,{message:e.message,likeCount:e.likeCount},e.id)}))})]})})),ge=s(14),Oe=s.n(ge),xe=s.p+"static/media/loader.9c48f460.gif";function _e(e){return Object(se.jsx)("div",{children:Object(se.jsx)("img",{src:xe,alt:"Loading",style:{marginLeft:"200px"}})})}var ve=function(e){Object(le.a)(s,e);var t=Object(de.a)(s);function s(e){var n;return Object(re.a)(this,s),(n=t.call(this,e)).activateEditMode=function(){n.setState({editMode:!0})},n.deactivateEditMode=function(){n.setState({editMode:!1}),n.props.updateProfileStatus(n.state.status)},n.onStatusChange=function(e){n.setState({status:e.target.value})},n.state={editMode:!1,status:n.props.status},n}return Object(ue.a)(s,[{key:"componentDidUpdate",value:function(e){e.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return Object(se.jsx)(se.Fragment,{children:this.state.editMode?Object(se.jsx)("input",{autoFocus:!0,defaultValue:this.state.status,onBlur:this.deactivateEditMode,onChange:this.onStatusChange}):Object(se.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"----------"})})}}]),s}(n.Component);function Ne(e){return e.profile?Object(se.jsxs)("div",{className:Oe.a.info,children:[Object(se.jsxs)("div",{className:Oe.a.description,children:[Object(se.jsx)("img",{className:Oe.a.avatar,src:e.profile.photos.small?e.profile.photos.small:"https://st2.depositphotos.com/3873339/8013/i/600/depositphotos_80131050-stock-photo-realistic-square-picture-frame-on.jpg",alt:"Avatar"}),Object(se.jsx)("h1",{className:Oe.a.title,children:e.profile.fullName}),Object(se.jsx)("p",{className:Oe.a.text,children:e.profile.aboutMe}),Object(se.jsx)("p",{className:Oe.a.text,children:Object(se.jsx)(ve,{updateProfileStatus:e.updateProfileStatus,status:e.status})})]}),Object(se.jsxs)("ul",{children:[Object(se.jsx)("h3",{children:"Contacts:"}),e.profile.contacts.facebook&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.facebook,children:"Facebook"})}),e.profile.contacts.website&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.website,children:"Website"})}),e.profile.contacts.vk&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.vk,children:"VK"})}),e.profile.contacts.twitter&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.twitter,children:"Twitter"})}),e.profile.contacts.instagram&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.instagram,children:"Instagram"})}),e.profile.contacts.youtube&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.youtube,children:"Youtube"})}),e.profile.contacts.github&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.github,children:"Github"})}),e.profile.contacts.mainLink&&Object(se.jsx)("li",{children:Object(se.jsx)("a",{className:Oe.a.link,href:e.profile.contacts.mainLink,children:"Main Link"})})]})]}):Object(se.jsx)(_e,{})}function Se(e){return Object(se.jsxs)("div",{children:[Object(se.jsx)(Ne,{profile:e.profile,status:e.status,updateProfileStatus:e.updateProfileStatus}),Object(se.jsx)(me,{})]})}var Pe=function(e){return Object($.b)((function(e){return{isAuth:e.auth.isAuth}}))((function(t){return t.isAuth?Object(se.jsx)(e,Object(l.a)({},t)):Object(se.jsx)(K.a,{to:"/login"})}))},we=function(e){Object(le.a)(s,e);var t=Object(de.a)(s);function s(){return Object(re.a)(this,s),t.apply(this,arguments)}return Object(ue.a)(s,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e=void 0===e?"2":this.props.match.params.userId,this.props.getProfileInfo(e),this.props.getProfileStatus(e)}},{key:"render",value:function(){return Object(se.jsx)("div",{children:Object(se.jsx)(Se,Object(l.a)(Object(l.a)({},this.props),{},{profile:this.props.profile}))})}}]),s}(n.Component),ke=Object(r.d)(Object($.b)((function(e){return{profile:e.profile.profile,status:e.profile.status}}),{getProfileInfo:function(e){return function(t){f(e).then((function(e){t({type:v,profile:e})}))}},getProfileStatus:function(e){return function(t){m(e).then((function(e){t(P(e))}))}},updateProfileStatus:function(e){return function(t){g(e).then((function(s){0===s.data.resultCode&&t(P(e))}))}}}),K.f,Pe)(we);s(213);function Ce(){return Object(se.jsx)("div",{children:"News"})}s(214);function ye(){return Object(se.jsx)("div",{children:"Music"})}s(215);function Te(){return Object(se.jsx)("div",{children:"Settings"})}var Me=s(49),Ie=s.n(Me);function Ee(e){return Object(se.jsx)(J.b,{to:"/dialogs/".concat(e.id),activeClassName:Ie.a.active,className:Ie.a.dialog,children:Object(se.jsxs)("div",{className:Ie.a.user,children:[Object(se.jsx)("img",{className:Ie.a.img,src:e.photo,alt:"Avatar example"}),e.userName]})})}var De=s(34),Fe=s.n(De),Ue=s(116),Ae=s.n(Ue);function Le(e){return Object(se.jsx)("div",{className:Ae.a.message,children:e.message})}var Re=Object(r.d)(Object($.b)((function(e){return{dialogsData:e.messages.dialogsData,messagesData:e.messages.messagesData,newMessageText:e.messages.newMessageText}}),{sendMessage:function(){return{type:k}},updateNewMessage:function(e){return{type:C,newMessage:e}}}),Pe)((function(e){var t=a.a.createRef();return Object(se.jsxs)("div",{className:Fe.a.dialogs,children:[Object(se.jsx)("div",{className:Fe.a.dialogsItems,children:e.dialogsData.map((function(e){return Object(se.jsx)(Ee,{id:e.id,userName:e.userName,photo:e.photo},e.id)}))}),Object(se.jsxs)("div",{className:Fe.a.messages,children:[e.messagesData.map((function(e){return Object(se.jsx)(Le,{message:e.message},e.id)})),Object(se.jsxs)("div",{className:Fe.a.add,children:[Object(se.jsx)("textarea",{value:e.newMessageText,onChange:function(){var s=t.current.value;e.updateNewMessage(s)},ref:t,className:Fe.a.textArea,placeholder:"Your message..."}),Object(se.jsx)("button",{onClick:function(){e.sendMessage()},className:Fe.a.btn,children:"Send message"})]})]})]})})),qe=s(23),Ge=s.n(qe),ze=s.p+"static/media/user.181d3cde.jpg";function He(e){Math.ceil(e.totalUsersCount/e.pageSize);for(var t=[],s=1;s<=10;s++)t.push(s);return Object(se.jsxs)("div",{children:[Object(se.jsx)("div",{className:Ge.a.buttons,children:t.map((function(t){return Object(se.jsx)("button",{onClick:function(){return e.onPageChanged(t)},className:e.currentPage===t?Ge.a.smallbtnActive:Ge.a.smallbtn,children:t},t)}))}),e.users.map((function(t){return Object(se.jsxs)("div",{className:Ge.a.user,children:[Object(se.jsxs)("div",{className:Ge.a.container,children:[Object(se.jsx)(J.b,{to:"./profile/".concat(t.id),children:Object(se.jsx)("img",{className:Ge.a.photo,src:null!==t.photos.small?t.photos.small:ze,alt:t.name})}),t.followed?Object(se.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.unfollow(t.id)},className:Ge.a.btn,children:"UNFOLLOW"}):Object(se.jsx)("button",{disabled:e.followingInProgress.some((function(e){return e===t.id})),onClick:function(){return e.follow(t.id)},className:Ge.a.btn,children:"FOLLOW"})]}),Object(se.jsxs)("div",{className:Ge.a.info,children:[Object(se.jsx)("h3",{children:t.name}),Object(se.jsx)("p",{children:t.status})]})]},t.id)}))]})}var Be=function(e){Object(le.a)(s,e);var t=Object(de.a)(s);function s(e){var n;return Object(re.a)(this,s),(n=t.call(this,e)).onPageChanged=function(e){n.props.setCurrentPage(e),n.props.getUsers(e,n.props.pageSize)},n}return Object(ue.a)(s,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(se.jsx)(se.Fragment,{children:this.props.isFetching?Object(se.jsx)(_e,{}):Object(se.jsx)(He,Object(l.a)({onPageChanged:this.onPageChanged},this.props))})}}]),s}(n.Component),We=Object(r.d)(Object($.b)((function(e){return{users:e.findUsers.users,pageSize:e.findUsers.pageSize,totalUsersCount:e.findUsers.totalUsersCount,currentPage:e.findUsers.currentPage,isFetching:e.findUsers.isFetching,followingInProgress:e.findUsers.followingInProgress}}),{follow:function(e){return function(t){t(z(!0,e)),h(e).then((function(s){0===s.resultCode&&t(function(e){return{type:E,userId:e}}(e)),t(z(!1,e))}))}},unfollow:function(e){return function(t){t(z(!0,e)),b(e).then((function(s){0===s.resultCode&&t(function(e){return{type:D,userId:e}}(e)),t(z(!1,e))}))}},setCurrentPage:function(e){return{type:U,pageNumber:e}},getUsers:function(e,t){return function(s){s(G(!0)),j(e,t).then((function(e){var t,n;s(G(!1)),s((t=e.items,{type:F,users:t})),s((n=e.totalCount,{type:A,count:n}))}))}}}),Pe)(Be),Xe=s.p+"static/media/logo.6ce24c58.svg",Ye=s(41),Qe=s.n(Ye);function Ve(e){return Object(se.jsxs)("header",{className:Qe.a.header,children:[Object(se.jsx)("img",{className:Qe.a.logo,src:Xe,alt:"logo"}),Object(se.jsx)("div",{className:Qe.a.loginBlock,children:e.isAuth?Object(se.jsx)("p",{className:Qe.a.login,children:e.login}):Object(se.jsx)(J.b,{className:Qe.a.login,to:"./login",children:"Login"})})]})}var Ze=function(e){Object(le.a)(s,e);var t=Object(de.a)(s);function s(e){return Object(re.a)(this,s),t.call(this,e)}return Object(ue.a)(s,[{key:"componentDidMount",value:function(){this.props.getAuth()}},{key:"render",value:function(){return Object(se.jsx)(Ve,Object(l.a)({},this.props))}}]),s}(n.Component),Je=Object($.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{getAuth:function(){return function(e){O().then((function(t){if(0===t.resultCode){var s=t.data,n=s.id,a=s.email,i=s.login;e(function(e,t,s){return{type:B,data:{userId:e,email:t,login:s}}}(n,a,i))}}))}}})(Ze),Ke=s(258),$e=s(257),et=s(31),tt=s.n(et);function st(){return Object(se.jsxs)("div",{className:tt.a.wrapper,children:[Object(se.jsx)("h1",{className:tt.a.text,children:"LOGIN"}),Object(se.jsx)(nt,{onSubmit:function(e){console.log(e)}})]})}var nt=Object($e.a)({form:"login"})((function(e){return Object(se.jsxs)("form",{className:tt.a.wrapper,onSubmit:e.handleSubmit,children:[Object(se.jsx)(Ke.a,{className:tt.a.input,name:"login",component:"input",placeholder:"Login"}),Object(se.jsx)(Ke.a,{className:tt.a.input,name:"password",component:"input",placeholder:"Password"}),Object(se.jsxs)("div",{className:tt.a.inline,children:[Object(se.jsx)(Ke.a,{component:"input",type:"checkBox",name:"remeberMe"}),Object(se.jsx)("p",{children:"Remember Me"})]}),Object(se.jsx)("button",{className:tt.a.btn,children:"Login"})]})})),at=function(e){return Object(se.jsx)(J.a,{children:Object(se.jsxs)("div",{className:"app-wrapper",children:[Object(se.jsx)(Je,{}),Object(se.jsx)(ce,{}),Object(se.jsxs)("div",{className:"app-wrapper-content",children:[Object(se.jsx)(K.b,{path:"/profile/:userId?",render:function(){return Object(se.jsx)(ke,{})}}),Object(se.jsx)(K.b,{path:"/dialogs",render:function(){return Object(se.jsx)(Re,{})}}),Object(se.jsx)(K.b,{path:"/news",render:function(){return Object(se.jsx)(Ce,{})}}),Object(se.jsx)(K.b,{path:"/music",render:function(){return Object(se.jsx)(ye,{})}}),Object(se.jsx)(K.b,{path:"/users",render:function(){return Object(se.jsx)(We,{})}}),Object(se.jsx)(K.b,{path:"/settings",render:function(){return Object(se.jsx)(Te,{})}}),Object(se.jsx)(K.b,{path:"/login",render:function(){return Object(se.jsx)(st,{})}})]})]})})};o.a.render(Object(se.jsx)(a.a.StrictMode,{children:Object(se.jsx)($.a,{store:Z,children:Object(se.jsx)(at,{})})}),document.getElementById("root")),c()},31:function(e,t,s){e.exports={wrapper:"Login_wrapper__3Ph-H",text:"Login_text__Y66_4",inline:"Login_inline__21TIx",input:"Login_input__12yZv",btn:"Login_btn__261XC"}},34:function(e,t,s){e.exports={dialogs:"Dialogs_dialogs__37K0U",dialogsItems:"Dialogs_dialogsItems__2XYIc",add:"Dialogs_add__Gvkj9",textArea:"Dialogs_textArea__pcLzF",btn:"Dialogs_btn__34GFz"}},39:function(e,t,s){e.exports={title:"Friends_title__3_m6N",img:"Friends_img__39f52",friends:"Friends_friends__2_QgE",friend:"Friends_friend__n9T_M",text:"Friends_text__1ifn9"}},40:function(e,t,s){e.exports={myposts:"MyPosts_myposts__2869F",title:"MyPosts_title__1V49T",textArea:"MyPosts_textArea__2qX7E",btn:"MyPosts_btn__1CtxC"}},41:function(e,t,s){e.exports={header:"Header_header__Jm1RZ",logo:"Header_logo__3vvBu",loginBlock:"Header_loginBlock__29PXN",login:"Header_login__1HUgF"}},48:function(e,t,s){e.exports={post:"Post_post__1xeZn",item:"Post_item__1qbBJ",photo:"Post_photo__1kzoD",btn:"Post_btn__2wcP5"}},49:function(e,t,s){e.exports={dialog:"Dialog_dialog__24Zhq",active:"Dialog_active__XkXzf",user:"Dialog_user__35ZuG",img:"Dialog_img__37Hiv"}}},[[256,1,2]]]);
//# sourceMappingURL=main.be206f27.chunk.js.map