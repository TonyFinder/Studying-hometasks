(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports={container:"Message_container__2Gsn7",angle:"Message_angle__iQHgd",forImage:"Message_forImage__1Nyl1",blackbox:"Message_blackbox__2AB-_",name:"Message_name__2LyJf",message:"Message_message__1MaXQ",time:"Message_time__3_sIT"}},,,,function(e,t,n){e.exports={main:"PreJunior_main__3RggQ",tasks:"PreJunior_tasks__3G25J"}},,,function(e,t,n){e.exports={blue:"HW4_blue__3k3g0",column:"HW4_column__3cTs1",testSpanError:"HW4_testSpanError__1ZrFQ",forButtons:"HW4_forButtons__1LV6Q",forCheckbox:"HW4_forCheckbox__3Ogn9"}},,,function(e,t,n){e.exports={superInput:"SuperInputText_superInput__3YB8T",errorInput:"SuperInputText_errorInput__34zzg",error:"SuperInputText_error__27Yl7"}},function(e,t,n){e.exports={main:"Header_main__25vR1",links:"Header_links__28ovV",square:"Header_square__2rMg5"}},,,function(e,t,n){e.exports={App:"App_App__1V-LO",header:"App_header__3PKe9"}},function(e,t,n){e.exports={container:"Affair_container__1HY-g",signs:"Affair_signs__12XvC"}},function(e,t,n){e.exports={buttons:"Affairs_buttons__3JnO5"}},function(e,t,n){e.exports={error:"Greeting_error__rxdLV",errorText:"Greeting_errorText__14RvK"}},function(e,t,n){e.exports={default:"SuperButton_default__ihaLe",red:"SuperButton_red__1erNP"}},function(e,t,n){e.exports={checkbox:"SuperCheckbox_checkbox__3f86v",spanClassName:"SuperCheckbox_spanClassName__3BLcg"}},,,,,,,function(e,t,n){e.exports={main:"HW5_main__dmYPB"}},,,,,function(e,t,n){},,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(29),s=n.n(c),i=(n(37),n(20)),o=n.n(i),l=n(7),j=n(2),u=n(0);var d=function(){return Object(u.jsx)("div",{children:Object(u.jsx)("img",{src:"https://www.argildx.com/wp-content/uploads/2017/06/Is-a-Misconfigured-%E2%80%9CPage-Not-Found%E2%80%9D-Jeopardizing-Your-Website.jpg"})})},b=n(15),x=n(4),h=n(6),O=n.n(h);var m=function(e){return Object(u.jsxs)("div",{className:O.a.container,children:[Object(u.jsx)("div",{className:O.a.forImage,children:Object(u.jsx)("img",{src:e.avatar,alt:"avatar"})}),Object(u.jsx)("div",{className:O.a.angle}),Object(u.jsxs)("div",{className:O.a.blackbox,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:O.a.name,children:e.name})}),Object(u.jsx)("div",{children:Object(u.jsx)("span",{className:O.a.message,children:e.message})})]}),Object(u.jsx)("div",{className:O.a.time,children:Object(u.jsx)("span",{children:e.time})})]})]})},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Anton",p="Hey! How is it going?",v="22:00";var g=function(){return Object(u.jsx)("div",{children:Object(u.jsx)(m,{avatar:f,name:_,message:p,time:v})})},k=n(21),N=n.n(k);var C=function(e){return Object(u.jsxs)("div",{className:N.a.container,children:[Object(u.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"}),Object(u.jsxs)("div",{className:N.a.signs,children:[Object(u.jsx)("div",{children:e.affair.name}),Object(u.jsx)("div",{children:e.affair.priority})]})]})},y=n(22),w=n.n(y);var S=function(e){var t=e.data.map((function(t){return Object(u.jsx)(C,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{className:w.a.buttons,children:[Object(u.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(u.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]}),Object(u.jsx)("div",{className:w.a.back,children:t})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(r.useState)(H),t=Object(x.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(x.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):e}(n,i);return Object(u.jsx)("div",{children:Object(u.jsx)(S,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}})})},A=n(23),I=n.n(A),P=function(e){var t=e.name,n=e.setNameCallback,r=e.addUser,a=e.error,c=e.totalUsers,s=a?I.a.error:"",i=""===t.trim();return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{value:t,onChange:n,className:s,onKeyPress:function(e){"Enter"===e.key&&r()}}),Object(u.jsx)("button",{disabled:i,onClick:r,children:"add"}),Object(u.jsx)("span",{children:c}),a&&Object(u.jsx)("div",{className:I.a.errorText,children:"Title is a must"})]})},B=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(x.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(!1),l=Object(x.a)(o,2),j=l[0],d=l[1],b=t.length;return Object(u.jsx)(P,{name:s,setNameCallback:function(e){""!==e.currentTarget.value.trim()?(i(e.currentTarget.value),d(!1)):i(e.currentTarget.value)},addUser:function(){""===s.trim()?d(!0):(alert("Hello, ".concat(s,"!")),n(s),i(""))},error:j,totalUsers:b})},J=n(46);var M=function(){var e=Object(r.useState)([]),t=Object(x.a)(e,2),n=t[0],a=t[1];return Object(u.jsx)("div",{children:Object(u.jsx)(B,{users:n,addUserCallback:function(e){a([].concat(Object(b.a)(n),[{_id:Object(J.a)(),name:e}]))}})})},E=n(8),W=n(9),F=n(16),L=n.n(F),K=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=(e.className,e.spanClassName),i=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),o="".concat(L.a.error," ").concat(s||""),l=c?L.a.errorInput:L.a.superInput;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("input",Object(E.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},i)),c&&Object(u.jsx)("span",{className:o,children:c})]})},U=n(13),Y=n.n(U),G=n(24),Q=n.n(G),R=function(e){var t=e.red,n=(e.className,Object(W.a)(e,["red","className"])),r="".concat(t?Q.a.red:Q.a.default);return Object(u.jsx)("button",Object(E.a)({className:r},n))},q=n(25),V=n.n(q),X=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(V.a.checkbox," ").concat(r||"");return Object(u.jsxs)("label",{children:[Object(u.jsx)("input",Object(E.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(u.jsx)("span",{className:V.a.spanClassName,children:a})]})};var z=function(){var e=Object(r.useState)(""),t=Object(x.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(x.a)(i,2),l=o[0],j=o[1];return Object(u.jsx)("div",{children:Object(u.jsxs)("div",{className:Y.a.column,children:[Object(u.jsx)(K,{value:n,onChangeText:a,onEnter:s,error:c}),Object(u.jsx)(K,{className:Y.a.blue}),Object(u.jsxs)("div",{className:Y.a.forButtons,children:[Object(u.jsx)(R,{children:"default"}),Object(u.jsx)(R,{red:!0,onClick:s,children:"delete "}),Object(u.jsx)(R,{disabled:!0,children:"disabled"})]}),Object(u.jsxs)("div",{className:Y.a.forCheckbox,children:[Object(u.jsx)(X,{checked:l,onChangeChecked:j,children:"some text "}),Object(u.jsx)(X,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]})]})})},Z=n(10),D=n.n(Z);var $=function(){var e=Object(r.useState)([!1,!1,!1,!1]),t=Object(x.a)(e,2),n=t[0],a=t[1],c=function(e){var t=Object(b.a)(n);t[e-1]=!t[e-1],a(t)};return Object(u.jsxs)("div",{className:D.a.main,children:[Object(u.jsx)("button",{className:D.a.tasks,onClick:function(){return c(1)},children:"Homeworks #1"}),n[0]&&Object(u.jsx)(g,{}),Object(u.jsx)("button",{className:D.a.tasks,onClick:function(){return c(2)},children:"Homeworks #2"}),n[1]&&Object(u.jsx)(T,{}),Object(u.jsx)("button",{className:D.a.tasks,onClick:function(){return c(3)},children:"Homeworks #3"}),n[2]&&Object(u.jsx)(M,{}),Object(u.jsx)("button",{className:D.a.tasks,onClick:function(){return c(4)},children:"Homeworks #4"}),n[3]&&Object(u.jsx)(z,{})]})};var ee=function(){return Object(u.jsx)("div",{})};var te=function(){return Object(u.jsx)("div",{})},ne="/pre-junior",re="/junior",ae="/junior-plus";var ce=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(j.d,{children:[Object(u.jsx)(j.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(j.a,{to:ne})}}),Object(u.jsx)(j.b,{path:ne,render:function(){return Object(u.jsx)($,{})}}),Object(u.jsx)(j.b,{path:re,render:function(){return Object(u.jsx)(ee,{})}}),Object(u.jsx)(j.b,{path:ae,render:function(){return Object(u.jsx)(te,{})}}),"// add routes",Object(u.jsx)(j.b,{render:function(){return Object(u.jsx)(d,{})}})]})})},se=n(17),ie=n.n(se);var oe=function(){return Object(u.jsxs)("div",{className:ie.a.main,children:[Object(u.jsx)("div",{className:ie.a.square}),Object(u.jsxs)("div",{className:ie.a.links,children:[Object(u.jsx)(l.b,{to:ne,children:"Pre-Junior"}),Object(u.jsx)(l.b,{to:re,children:"Junior"}),Object(u.jsx)(l.b,{to:ae,children:"Junior-Plus"})]})]})},le=n(32),je=n.n(le);var ue=function(){return Object(u.jsx)("div",{className:je.a.main,children:Object(u.jsxs)(l.a,{children:[Object(u.jsx)(oe,{}),Object(u.jsx)(ce,{})]})})};var de=function(){return Object(u.jsxs)("div",{className:o.a.App,children:[Object(u.jsx)("div",{className:o.a.header,children:"React homeworks:"}),Object(u.jsx)(ue,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(de,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[44,1,2]]]);
//# sourceMappingURL=main.c9f3c12b.chunk.js.map