"use strict";(self.webpackChunkproject8=self.webpackChunkproject8||[]).push([[139],{1139:function(e,s,a){a.r(s),a.d(s,{default:function(){return D}});var n=a(8683),r=(a(2791),a(7781)),t=a(3531),i=a(3366);var c=a(7689),l=a(2813),m=a(184),d=["isAuth"],u=function(e){return{isAuth:(0,l.v0)(e)}},_=function(e){return e.messages.friends},g=function(e){return e.messages.friendMessages},o=function(e){return e.messages.myMessages},f=a(5059),v="Messages_messages__1iExN",j="Messages_friends__TORCr",h="Messages_friend__voq19",x="Messages_active__OBNDt",M="Messages_friend_content__LAwhK",N="Messages_friend_name__mYemO",b="Messages_chat__ohNfB",p="Messages_chat_content__qqNiJ",y="Messages_chat_textarea__bT1dq",A="Messages_friend_message_container__BUe4J",w="Messages_friend_message_content__CCCzP",O="Messages_friend_message__PmdwL",S="Messages_my_message_container__9ZVPM",C="Messages_my_message__P91J0",Z="Messages_time__Da6ab",q="Messages_message_form__MY6bc",P=a(1087),k=function(e){var s=function(e){return e.isActive?x:""};return(0,m.jsx)(m.Fragment,{children:e.friend.map((function(a){return(0,m.jsx)("div",{className:h,children:(0,m.jsx)(P.OL,{className:s,to:"/messages/".concat(a.id),children:(0,m.jsxs)("div",{className:M,children:[(0,m.jsx)("img",{className:"avatar avatar_small",src:e.avatar,alt:"Avatar"}),(0,m.jsx)("div",{className:N,children:a.name})]})})},a.id)}))})},F=function(e){return(0,m.jsx)(m.Fragment,{children:e.friendMessage.map((function(s){return(0,m.jsx)("div",{className:A,children:(0,m.jsxs)("div",{className:w,children:[(0,m.jsx)("img",{className:"avatar avatar_vary_small",src:e.avatar,alt:"Avatar"}),(0,m.jsxs)("div",{className:O,children:[s.message,(0,m.jsx)("sub",{className:Z,children:s.time})]})]})},s.id)}))})},J=function(e){return(0,m.jsx)(m.Fragment,{children:e.myMessage.map((function(e){return(0,m.jsx)("div",{className:S,children:(0,m.jsxs)("div",{className:C,children:[e.message,(0,m.jsx)("sub",{className:Z,children:e.time})]})},e.id)}))})},V=a(7103),B=a(5705),E=a(4015),L=function(e){var s=e.initialValue,a=e.validationSchema,r=e.onSubmit;return(0,m.jsx)(B.J9,{initialValues:s,onSubmit:r,validationSchema:a,children:(0,m.jsxs)(B.l0,{className:q,children:[(0,m.jsx)(B.gN,{name:"message",children:function(e){return(0,m.jsx)(E.Z,(0,n.Z)({placeholder:"Enter the message..."},e))}}),(0,m.jsx)("button",{className:"send_btn",type:"submit",children:"\u1431"})]})})},T=a(3291),$=(0,t.$j)(null,{setNewMessage:T.z})((function(e){var s=V.Ry({message:V.Z_().required("Text field is empty!")});return(0,m.jsx)(L,{initialValue:{message:""},validationSchema:s,onSubmit:function(s,a){var n=a.resetForm,r=s.message;e.setNewMessage(r),n()}})})),z=function(e){return(0,m.jsxs)("div",{className:v,children:[(0,m.jsx)("div",{className:j,children:(0,m.jsx)(k,{friend:e.friends,avatar:e.defaultAvatar})}),(0,m.jsxs)("div",{className:b,children:[(0,m.jsxs)("div",{className:p,children:[(0,m.jsx)(F,{friendMessage:e.friendMessages,avatar:e.defaultAvatar}),(0,m.jsx)(J,{myMessage:e.myMessages})]}),(0,m.jsx)("div",{className:y,children:(0,m.jsx)($,{})})]})]})},D=(a(4025),(0,r.qC)((0,t.$j)((function(e){return{friends:_(e),friendMessages:g(e),myMessages:o(e),defaultAvatar:(0,f.wX)(e)}}),{}),(function(e){return(0,t.$j)(u,{})((function(s){s.isAuth;var a=function(e,s){if(null==e)return{};var a,n,r=(0,i.Z)(e,s);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)a=t[n],s.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(s,d);return s.isAuth?(0,m.jsx)(e,(0,n.Z)({},a)):(0,m.jsx)(c.Fg,{to:"/login"})}))}))((function(e){return document.title="Social Network - Messages",(0,m.jsx)(z,(0,n.Z)({},e))})))}}]);
//# sourceMappingURL=139.1a4641b7.chunk.js.map