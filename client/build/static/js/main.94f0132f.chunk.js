(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){e.exports=a.p+"static/media/socialLinksSprite.9641b6d1.svg"},123:function(e,t,a){e.exports={container:"FeaturedPosts_container__2n1PJ"}},124:function(e,t,a){e.exports={container:"PostsList_container__pD4Hp"}},125:function(e,t,a){e.exports={preloaderContainer:"Preloader_preloaderContainer__24Bnr"}},126:function(e,t,a){e.exports=a.p+"static/media/preloader.d8b3f08b.svg"},127:function(e,t,a){e.exports={btnPanel:"MarkdownBtnsPanel_btnPanel__REDLk"}},133:function(e,t,a){e.exports={copyright:"Copyright_copyright__PrFNk"}},148:function(e,t,a){e.exports=a(447)},153:function(e,t,a){},17:function(e,t,a){e.exports={postCard:"PostCard_postCard__ka_wn",postCardSmall:"PostCard_postCardSmall__2ksXv",postCardLarge:"PostCard_postCardLarge__30Mr2",cardActionArea:"PostCard_cardActionArea__9eIW2",card:"PostCard_card__1Pxva",cardTitle:"PostCard_cardTitle__2a0de",cardTitleSmall:"PostCard_cardTitleSmall__jdpn9",cardTitleLarge:"PostCard_cardTitleLarge__1JPae",cardDataSmall:"PostCard_cardDataSmall__sE_4o",cardDataLarge:"PostCard_cardDataLarge__yzJuB",cardMedia:"PostCard_cardMedia__1WT80",cardImage:"PostCard_cardImage__3f21S",cardDescriptionSmall:"PostCard_cardDescriptionSmall__2Q0j2",cardDescriptionLarge:"PostCard_cardDescriptionLarge__1YzfU"}},446:function(e,t,a){e.exports=a.p+"static/media/navbarIcons.e2957b1c.svg"},447:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),l=(a(153),a(20)),i=a(12),s=a(28),u="START_LOADING_POSTS",m="END_LOADING_POSTS",p="START_LOADING_POST",d="END_LOADING_POST",f="FETCH_POSTS",E="FETCH_POST",b="ADD_POST",g="DELETE_POST",h="UPDATE_POST",v=a(48),_=a.n(v),k=function(e){return{headers:{Authorization:"Bearer ".concat(e),"Content-Type":"multipart/form-data"}}},O=function(){return function(e){return e({type:u}),_.a.get("/api/post/all").then((function(t){e({type:f,payload:t.data}),e({type:m})})).catch((function(t){console.log(t),e({type:m})}))}},C=a(33),j=a(481),P=a(484),x=a(137),y=a(486),N=a(487),S=a(488),w=function(e){var t="";return[].slice.call(new Uint8Array(e)).forEach((function(e){return t+=String.fromCharCode(e)})),window.btoa(t)},D=Object(j.a)((function(e){return{mainPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"450px"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainPostContent:Object(C.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0}),cardDescription:{display:"flex",alignItems:"top",margin:"20px 0px",height:"180px"}}})),T=function(e){var t,a,n=e.mainPost,c=D(),o=Object(i.g)();return r.a.createElement(P.a,{className:c.mainPost,style:{backgroundImage:"url(data:image/jpeg;base64,".concat(w(null===n||void 0===n||null===(t=n.image)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data),")")}},r.a.createElement("div",{className:c.overlay}),r.a.createElement(y.a,{container:!0},r.a.createElement(y.a,null,r.a.createElement("div",{className:c.mainPostContent},r.a.createElement(x.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},n.title),r.a.createElement(x.a,{variant:"h5",color:"inherit",className:c.cardDescription},n.description),r.a.createElement(N.a,{variant:"subtitle1",href:""},r.a.createElement(S.a,{variant:"contained",color:"primary",onClick:function(e){return function(e,t){e.preventDefault(),o.push("/post/".concat(t))}(e,n._id)}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c..."))))))},I=a(123),L=a.n(I),B=a(41),A=a.n(B),F=a(17),H=a.n(F),W=function(e){var t=e.id,a=e.title,n=e.date,c=e.image,o=e.description,l=e.onClick,i=e.type;return r.a.createElement("div",{className:A()(H.a.postCard,"small"===i?H.a.postCardSmall:H.a.postCardLarge)},r.a.createElement("div",{className:H.a.cardActionArea,onClick:function(e){return l(e,t)}},r.a.createElement("div",{className:H.a.card},r.a.createElement("div",{className:A()(H.a.cardTitle,"small"===i?H.a.cardTitleSmall:H.a.cardTitleLarge)},a),r.a.createElement("div",{className:A()("small"===i?H.a.cardDataSmall:H.a.cardDataLarge)},new Date(n).toLocaleDateString("ru-RU")),r.a.createElement("div",{className:H.a.cardMedia},!!c&&r.a.createElement("img",{className:H.a.cardImage,src:"data:image/jpeg;base64,".concat(w(c)),alt:"cardImage"})),r.a.createElement("p",{className:A()("small"===i?H.a.cardDescriptionSmall:H.a.cardDescriptionLarge)},o))))},R=function(e){var t=e.posts,a=Object(i.g)(),n=function(e,t){e.preventDefault(),a.push("/post/".concat(t))};return r.a.createElement("div",{className:L.a.container},t&&t.map((function(e){var t,a;return r.a.createElement(W,{key:e._id,id:e._id,title:e.title,date:e.date,image:null===(t=e.image)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data,description:e.description,onClick:n,type:"large"})})))},M=a(124),G=a.n(M),U=function(e){var t=e.posts,a=Object(i.g)(),n=function(e,t){e.preventDefault(),a.push("/post/".concat(t))};return r.a.createElement("div",{className:G.a.container},t.map((function(e){var t,a;return r.a.createElement(W,{key:e._id,id:e._id,title:e.title,date:e.date,image:null===(t=e.image)||void 0===t||null===(a=t.data)||void 0===a?void 0:a.data,description:e.description,onClick:n,type:"small"})})))},z=a(55),J=a.n(z),X=function(e){var t=e.href,a=e.onClick,n=e.xlinkHref,c=e.color,o=e.description,l=e.width,i=e.height;return r.a.createElement("a",{href:t,onClick:a,className:A()(J.a.link,Object(C.a)({},J.a.linkBlue,"blue"===c))},r.a.createElement("span",{className:J.a.svgContainer},r.a.createElement("svg",{style:{width:l,height:i}},r.a.createElement("use",{xlinkHref:n}))),o&&r.a.createElement("span",{className:J.a.description},o))};X.defaultProps={width:"28px",height:"28px"};var q=X,V=a(49),Q=a.n(V),Y="\u041a\u0440\u0430\u0442\u043a\u043e \u043e \u0431\u043b\u043e\u0433\u0435",Z="\u0426\u0435\u043b\u044c \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u0431\u043b\u043e\u0433\u0430 \u043f\u0440\u043e\u0441\u0442\u0430 - \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0439 \u0438\u0437\u0432\u043d\u0435 \u0441\u0430\u0439\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043c\u043e\u0436\u043d\u043e \u0431\u0443\u0434\u0435\u0442 \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c, \u0447\u0442\u043e-\u0442\u043e \u0438\u0437 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439, \u043f\u0440\u043e\u0431\u043e\u0432\u0430\u0442\u044c \u0432\u043d\u0435\u0434\u0440\u044f\u0442\u044c \u0444\u0438\u0447\u0438, \u0430 \u0442\u0430\u043a \u0436\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0442\u044c \u043f\u043e\u043b\u0435\u0437\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0432 \u0432\u0438\u0434\u0435 \u043f\u043e\u0441\u0442\u043e\u0432. \u041d\u0443 \u0438 \u0442\u0430\u043a, \u0434\u043b\u044f \u0438\u0441\u0442\u043e\u0440\u0438\u0438...",K=function(){var e=a(102);return r.a.createElement("div",null,r.a.createElement("div",{className:Q.a.sidebarAbout},r.a.createElement("div",{className:Q.a.sidebarTitle},Y),r.a.createElement("p",{className:Q.a.sidebarDescription},Z)),r.a.createElement("div",{className:Q.a.sidebarContacts},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b \u0432 \u0441\u043e\u0446\u0441\u0435\u0442\u044f\u0445"),r.a.createElement("div",{className:Q.a.sidebarSocialLinks},r.a.createElement(q,{href:"https://vk.com/id2329393",xlinkHref:"".concat(e,"#icon-vk"),color:"blue",description:"VKontakte"}),r.a.createElement(q,{href:"https://github.com/SergBlack",xlinkHref:"".concat(e,"#icon-github"),color:"blue",description:"GitHub"}),r.a.createElement(q,{href:"https://linkedin.com/in/sergey-osipchuk",xlinkHref:"".concat(e,"#icon-linkedin"),color:"blue",description:"LinkedIn"})))},$=a(125),ee=a.n($),te=a(126),ae=a.n(te),ne=function(){return r.a.createElement("div",{className:ee.a.preloaderContainer},r.a.createElement("img",{src:ae.a,alt:"preloader"}))},re=a(489),ce=Object(j.a)((function(e){return{mainGrid:{marginTop:e.spacing(1)},progressBar:{height:"200px"},section:{marginTop:"24px",marginBottom:"16px"},postsListContainer:{display:"flex",paddingTop:"20px"},postsListWrapper:{display:"flex",flexWrap:"wrap",justifyContent:"center",width:"72%",margin:"-8px -8px"},sidebarWrapper:{display:"flex",marginLeft:"30px",width:"28%"},postsList:{display:"flex"}}})),oe=Object(s.b)((function(e){return{posts:e.postsStore.posts,loading:e.app.loadingPosts}}),(function(e){return{fetchPosts:function(){return e(O())}}}))((function(e){var t=e.posts,a=e.fetchPosts,c=e.loading,o=ce();return Object(n.useEffect)((function(){a()}),[a]),r.a.createElement(r.a.Fragment,null,r.a.createElement("main",null,c||0===t.length?r.a.createElement(y.a,{container:!0,justify:"center",alignItems:"center",className:o.progressBar},r.a.createElement(ne,null)):r.a.createElement(T,{mainPost:t&&t[0]}),r.a.createElement(x.a,{variant:"h6",className:o.section},"\u041d\u0435\u0434\u0430\u0432\u043d\u0438\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"),r.a.createElement(re.a,null),c||0===t.length?r.a.createElement(y.a,{container:!0,justify:"center",alignItems:"center",className:o.progressBar},r.a.createElement(ne,null)):r.a.createElement(R,{posts:t.slice(1,4)}),r.a.createElement(x.a,{variant:"h6",className:o.section},"\u0420\u0430\u043d\u043d\u0438\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0430\u0446\u0438\u0438"),r.a.createElement(re.a,null),r.a.createElement("div",{className:o.postsListContainer},r.a.createElement("div",{className:o.postsListWrapper},c||0===t.length?r.a.createElement("div",null,r.a.createElement(ne,null)):r.a.createElement(U,{posts:t.slice(4),className:o.postsList})),r.a.createElement("div",{className:o.sidebarWrapper},r.a.createElement(K,null)))))})),le=a(6),ie=a(16),se=a.n(ie),ue=a(25),me=a(14),pe=function(){var e=Object(n.useState)(!1),t=Object(me.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),o=Object(me.a)(c,2),l=o[0],i=o[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(ue.a)(se.a.mark((function e(t){var a,n,c,o,l,s=arguments;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.length>1&&void 0!==s[1]?s[1]:"GET",n=s.length>2&&void 0!==s[2]?s[2]:null,c=s.length>3&&void 0!==s[3]?s[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),c["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:c});case 8:return o=e.sent,e.next=11,o.json();case 11:if(l=e.sent,o.ok){e.next=14;break}throw new Error(l.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 14:return r(!1),e.abrupt("return",l);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:l,clearError:Object(n.useCallback)((function(){return i(null)}),[])}},de=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(e),r=Object(me.a)(a,2),c=r[0],o=r[1];Object(n.useEffect)((function(){t.current&&(t.current(c),t.current=null)}),[c]);return[c,function(e,a){return t.current=a,o(e)}]},fe=function(){},Ee=Object(n.createContext)({token:null,userId:null,login:fe,logout:fe,isAuthenticated:!1}),be=a(71),ge=a.n(be),he=a(127),ve=a.n(he),_e=function(e){var t=e.onClick;return r.a.createElement("div",{className:ve.a.btnPanel},r.a.createElement("button",{onClick:function(e){return t(e,"#")}},"H1"),r.a.createElement("button",{onClick:function(e){return t(e,"##")}},"H2"),r.a.createElement("button",{onClick:function(e){return t(e,"###")}},"H3"),r.a.createElement("button",{onClick:function(e){return t(e,"####")}},"H4"),r.a.createElement("button",{onClick:function(e){return t(e,"#####")}},"H5"),r.a.createElement("button",{onClick:function(e){return t(e,"######")}},"H6"),r.a.createElement("button",{onClick:function(e){return t(e,"-")}},"List"),r.a.createElement("button",{onClick:function(e){return t(e,">")}},"Quote"),r.a.createElement("button",{onClick:function(e){return t(e,"*\u0442\u0435\u043a\u0441\u0442*")}},r.a.createElement("em",null,"I")),r.a.createElement("button",{onClick:function(e){return t(e,"**\u0442\u0435\u043a\u0441\u0442**")}},r.a.createElement("b",null,"B")),r.a.createElement("button",{onClick:function(e){return t(e,"~~\u0442\u0435\u043a\u0441\u0442~~")}},r.a.createElement("del",null,"S")),r.a.createElement("button",{onClick:function(e){return t(e,"\n[\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0441\u0430\u0439\u0442\u0430](http://-url-) - \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435\n")}},"URL"),r.a.createElement("button",{onClick:function(e){return t(e,"```js\n\n \u0442\u0443\u0442 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u0434 \n\n```")}},"Code"))},ke=Object(s.b)((function(e){return{currentPost:e.postsStore.currentPost}}),(function(e){return{addPost:function(t,a,n){e(function(e,t,a){return function(n){return n({type:p}),_.a.post("/api/post/new",t,k(e)).then((function(e){n({type:b,payload:e.data}),a(e.data.post._id),n({type:d})})).catch((function(e){console.log(e),n({type:d})}))}}(t,a,n))},updatePost:function(t,a,n,r){e(function(e,t,a,n){return function(r){return r({type:p}),_.a.put("/api/post/update/".concat(t),a,k(e)).then((function(e){r({type:h,payload:e.data}),n(e.data.post._id),r({type:d})})).catch((function(e){console.log(e),r({type:d})}))}}(t,a,n,r))}}}))((function(e){var t=e.addPost,a=e.updatePost,c=e.currentPost,o=Object(i.g)(),l=Object(i.h)().id,s=Object(n.useContext)(Ee).token,u=pe().request,m=Object(n.useRef)(),p=Object(n.useState)(""),d=Object(me.a)(p,2),f=d[0],E=d[1],b=de({title:"",description:"",content:"",image:null,technology:""}),g=Object(me.a)(b,2),h=g[0],v=g[1],_=Object(n.useState)(0),k=Object(me.a)(_,2),O=k[0],C=k[1],j=Object(n.useState)(0),P=Object(me.a)(j,2),x=P[0],y=P[1],N=h.title,S=h.description,w=h.content,D=h.image,T=h.technology;Object(n.useEffect)((function(){l&&c._id===l&&v(c)}),[c,l]);var I=function(){var e=Object(ue.a)(se.a.mark((function e(t){var a;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,u("/api/link/generate","POST",{from:f},{Authorization:"Bearer ".concat(s)});case 4:a=e.sent,o.push("/detail/".concat(a.link._id)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:ge.a.createFormContainer},r.a.createElement("form",{encType:"multipart/form-data"},r.a.createElement("div",null,r.a.createElement("input",{placeholder:"\u0412\u0441\u0442\u0430\u0432\u044c\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443",id:"link",type:"text",value:f,onChange:function(e){return E(e.target.value)}}),r.a.createElement("button",{type:"submit",name:"action",onClick:I},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0441\u044b\u043b\u043a\u0443")),r.a.createElement("div",null,r.a.createElement("div",null,"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a"),r.a.createElement("input",{id:"post",type:"text",value:N,onChange:function(e){return v(Object(le.a)(Object(le.a)({},h),{},{title:e.target.value}))}}),r.a.createElement("label",{htmlFor:"post"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a. \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u043a\u043e\u0432 ",60-N.length)),r.a.createElement("div",null,r.a.createElement("div",null,"\u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f"),r.a.createElement("input",{id:"technology",type:"text",value:T,onChange:function(e){return v(Object(le.a)(Object(le.a)({},h),{},{technology:e.target.value}))}}),r.a.createElement("label",{htmlFor:"technology"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0438")),r.a.createElement("div",null,r.a.createElement("div",null,"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"),r.a.createElement("textarea",{className:ge.a.postDescriptionTextarea,cols:60,rows:2,maxLength:120,id:"description",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..",value:S,onChange:function(e){return v(Object(le.a)(Object(le.a)({},h),{},{description:e.target.value}))}}),r.a.createElement("label",{htmlFor:"description"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435. \u041e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0437\u043d\u0430\u043a\u043e\u0432 ",120-S.length)),r.a.createElement("div",null,r.a.createElement("div",null,"\u0422\u0435\u043a\u0441\u0442 \u043f\u043e\u0441\u0442\u0430"),r.a.createElement(_e,{onClick:function(e,t){e.preventDefault();var a=h.content;v(Object(le.a)(Object(le.a)({},h),{},{content:"".concat(a.slice(0,O)," ").concat(t," ").concat(a.slice(x))}),(function(){m.current.focus();var e=O+t.length+1;m.current.setSelectionRange(e,e)}))}}),r.a.createElement("label",{htmlFor:"postContent"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u043f\u043e\u0441\u0442\u0430"),r.a.createElement("textarea",{className:ge.a.postContentTextarea,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..",id:"postContent",value:w,ref:m,onChange:function(e){v(Object(le.a)(Object(le.a)({},h),{},{content:e.target.value})),C(m.current.selectionStart),y(m.current.selectionStart)},onClick:function(){C(m.current.selectionStart),y(m.current.selectionEnd)}})),r.a.createElement("div",null,r.a.createElement("div",null,"\u0424\u0430\u0439\u043b"),r.a.createElement("input",{type:"file",onChange:function(e){v(Object(le.a)(Object(le.a)({},h),{},{image:e.target.files[0]}))},id:"file"}),r.a.createElement("div",null,D&&r.a.createElement("img",{src:D,style:{maxHeight:"250px"},alt:"background"}))),l?r.a.createElement("button",{onClick:function(e){e.preventDefault(),console.log(l);var t=new FormData;t.append("title",N),t.append("description",S),t.append("content",w),t.append("image",D),t.append("technology",T),a(s,l,t,(function(e){o.push("/post/".concat(e))}))}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442"):r.a.createElement("button",{onClick:function(e){e.preventDefault();var a=new FormData;a.append("title",N),a.append("description",S),a.append("content",w),a.append("image",D),a.append("technology",T),t(s,a,(function(e){o.push("/post/".concat(e))}))}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u043e\u0441\u0442")))})),Oe=function(e){var t=e.link;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"\u0421\u0441\u044b\u043b\u043a\u0430"),r.a.createElement("p",null,"\u0412\u0430\u0448\u0430 \u0441\u0441\u044b\u043b\u043a\u0430:",r.a.createElement("a",{href:t.to,target:"_blank",rel:"noopener noreferrer"},t.to)),r.a.createElement("p",null,"\u041e\u0442\u043a\u0443\u0434\u0430:",r.a.createElement("a",{href:t.from,target:"_blank",rel:"noopener noreferrer"},t.from)),r.a.createElement("p",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u043b\u0438\u043a\u043e\u0432 \u043f\u043e \u0441\u0441\u044b\u043b\u043a\u0435: ",r.a.createElement("strong",null,t.clicks)),r.a.createElement("p",null,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f:",r.a.createElement("strong",null,new Date(t.date).toLocaleDateString("ru-RU"))))},Ce=function(){var e=Object(n.useContext)(Ee).token,t=pe(),a=t.request,c=t.loading,o=Object(n.useState)(null),l=Object(me.a)(o,2),s=l[0],u=l[1],m=Object(i.h)().id,p=Object(n.useCallback)(Object(ue.a)(se.a.mark((function t(){var n;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/link/".concat(m),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,u(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,m,a]);return Object(n.useEffect)((function(){p()}),[p]),r.a.createElement(r.a.Fragment,null,!c&&s&&r.a.createElement(Oe,{link:s}))},je=a(497),Pe=a(491),xe=a(493),ye=a(492),Ne=a(494),Se=a(128),we=a.n(Se),De=a(490),Te=Object(j.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}})),Ie=function(){var e=Object(n.useContext)(Ee),t=Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[]),a=pe(),c=a.loading,o=a.request,l=a.error,i=a.clearError,s=Object(n.useState)({email:"",password:""}),u=Object(me.a)(s,2),m=u[0],p=u[1],d=Te();Object(n.useEffect)((function(){t(l),i()}),[l,t,i]);var f=function(e){p(Object(le.a)(Object(le.a)({},m),{},Object(C.a)({},e.target.name,e.target.value)))},E=function(){var t=Object(ue.a)(se.a.mark((function t(){var a;return se.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o("/api/auth/login","POST",Object(le.a)({},m));case 3:a=t.sent,e.login(a.token,a.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement(De.a,{component:"main",maxWidth:"xs"},r.a.createElement(Pe.a,null),r.a.createElement("div",{className:d.paper},r.a.createElement(je.a,{className:d.avatar},r.a.createElement(we.a,null)),r.a.createElement(x.a,{component:"h1",variant:"h5"},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement("form",{className:d.form,noValidate:!0},r.a.createElement(xe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email",name:"email",autoComplete:"email",autoFocus:!0,value:m.email,onChange:f}),r.a.createElement(xe.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:m.password,onChange:f}),r.a.createElement(ye.a,{control:r.a.createElement(Ne.a,{value:"remember",color:"primary"}),label:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"}),r.a.createElement(S.a,{fullWidth:!0,variant:"contained",color:"primary",className:d.submit,onClick:E,disabled:c},"\u0412\u043e\u0439\u0442\u0438"))))},Le=function(e){var t=e.links;return t.length?r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u2116"),r.a.createElement("th",null,"\u041e\u0440\u0438\u0433\u0438\u043d\u0430\u043b"),r.a.createElement("th",null,"\u0421\u043e\u043a\u0440\u0430\u0449\u0435\u043d\u043d\u0430\u044f"),r.a.createElement("th",null,"\u041e\u0442\u043a\u0440\u044b\u0442\u044c"))),r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,t+1),r.a.createElement("td",null,e.from),r.a.createElement("td",null,e.to),r.a.createElement("td",null,r.a.createElement(l.b,{to:"/detail/".concat(e._id)},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c")))})))):r.a.createElement("p",{className:"center"},"\u0421\u0441\u044b\u043b\u043e\u043a \u043f\u043e\u043a\u0430 \u043d\u0435\u0442")},Be=function(){var e=Object(n.useState)([]),t=Object(me.a)(e,2),a=t[0],c=t[1],o=pe(),l=o.loading,i=o.request,s=Object(n.useContext)(Ee).token,u=Object(n.useCallback)(Object(ue.a)(se.a.mark((function e(){var t;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/api/link","GET",null,{Authorization:"Bearer ".concat(s)});case 3:t=e.sent,c(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[s,i]);return Object(n.useEffect)((function(){u()}),[u]),r.a.createElement(r.a.Fragment,null,!l&&r.a.createElement(Le,{links:a}))},Ae=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043b\u043e\u0433\u0435!"))},Fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"AccountPage!"))},He=a(56),We=a.n(He),Re=a(129),Me=a.n(Re),Ge=a(495),Ue=a(132),ze=function(e){var t=e.language,a=e.value;return r.a.createElement(Ge.a,{language:t,style:Ue.a},a)},Je=a(89),Xe=a.n(Je),qe=a(73),Ve=a.n(qe),Qe=function(e){var t=e.post,a=e.openPost;return r.a.createElement("div",{className:Ve.a.postItem,onClick:function(e){return a(e,t._id)}},r.a.createElement("h3",{className:Ve.a.postItemTitle},t.title),r.a.createElement("div",{className:Ve.a.postItemData},new Date(t.date).toLocaleDateString("ru-RU")))},Ye=Object(s.b)((function(e){return{loading:e.app.loadingPosts}}))((function(e){var t=e.posts,a=e.openPost,n=e.loading;return r.a.createElement("div",{className:Xe.a.postsContainer},r.a.createElement("div",{className:Xe.a.postsContainerTitle},"\u0421\u043f\u0438\u0441\u043e\u043a \u0434\u0440\u0443\u0433\u0438\u0445 \u043f\u043e\u0441\u0442\u043e\u0432"),n?r.a.createElement(ne,null):r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(Qe,{post:e,key:e._id,openPost:a})}))))})),Ze=Object(s.b)((function(e){return{posts:e.postsStore.posts,currentPost:e.postsStore.currentPost,loading:e.app.loadingPost}}),(function(e){return{fetchPost:function(t){return e(function(e){return function(t){return t({type:p}),_.a.get("/api/post/".concat(e)).then((function(e){t({type:E,payload:e.data}),t({type:d})})).catch((function(e){console.log(e),t({type:d})}))}}(t))},fetchPosts:function(){return e(O())},deletePost:function(t,a){return e(function(e,t){return function(a){return a({type:p}),_.a.delete("/api/post/".concat(t),k(e)).then((function(e){a({type:g,payload:e.data}),a({type:d})})).catch((function(e){console.log(e),a({type:d})}))}}(t,a))}}}))((function(e){var t=e.fetchPost,a=e.fetchPosts,c=e.deletePost,o=e.posts,l=e.currentPost,s=e.loading,u=Object(i.g)(),m=Object(n.useContext)(Ee),p=m.token,d=Object(i.h)().id;Object(n.useEffect)((function(){o.length||a(),l._id!==d&&t(d)}),[]),Object(n.useEffect)((function(){u.push("/post/".concat(l._id))}),[l,u]);return r.a.createElement("div",{className:We.a.postPage},r.a.createElement(Ye,{posts:o,openPost:function(e,a){e.preventDefault(),u.push("/post/".concat(a)),t(a)}}),r.a.createElement("div",{className:We.a.currentPostContainer},s?r.a.createElement(ne,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:We.a.currentPostTitle},l.title),r.a.createElement("div",{className:We.a.currentPostData},"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f: ",new Date(l.date).toLocaleDateString("ru-RU"),m.isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return function(e){u.push("/post/update/".concat(e))}(l._id)}},"Edit"),r.a.createElement("button",{onClick:function(){return function(e){window.confirm("\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442?")&&c(p,e)}(l._id)}},"Delete")))),r.a.createElement(Me.a,{source:l.content,renderers:{code:ze}})))})),Ke=a(50),$e=a.n(Ke),et=function(){var e=Object(i.g)(),t=Object(n.useContext)(Ee),c=a(446);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:$e.a.toolbar},r.a.createElement("h2",{className:$e.a.toolbarTitle},"\u0411\u043b\u043e\u0433 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u043b\u0435\u0442\u043d\u0435\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430",r.a.createElement("code",{className:$e.a.toolbarCode},'import Me from "real-life";')),r.a.createElement(q,{onClick:function(){e.push("/")},xlinkHref:"".concat(c,"#home"),width:"24px",height:"24px"}),r.a.createElement(q,{xlinkHref:"".concat(c,"#search"),width:"24px",height:"24px"}),t.isAuthenticated?r.a.createElement("button",{onClick:function(){t.logout(),e.push("/")}},"\u0412\u042b\u0419\u0422\u0418"):r.a.createElement("button",{onClick:function(){t.login(),e.push("/auth")}},"\u0412\u041e\u0419\u0422\u0418")),r.a.createElement("nav",{className:$e.a.navBar},(t.isAuthenticated?[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",url:"/main"},{title:"\u041f\u043e\u043b\u0435\u0437\u043d\u043e\u0435",url:"/useful"},{title:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u043e\u0441\u0442",url:"/create"},{title:"\u0421\u0441\u044b\u043b\u043a\u0438",url:"/links"},{title:"\u041e \u0431\u043b\u043e\u0433\u0435",url:"/about"},{title:"\u0410\u043a\u043a\u0430\u0443\u043d\u0442",url:"/account"}]:[{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",url:"/main"},{title:"\u041f\u043e\u043b\u0435\u0437\u043d\u043e\u0435",url:"/useful"},{title:"\u0421\u0441\u044b\u043b\u043a\u0438",url:"/links"},{title:"\u041e \u0431\u043b\u043e\u0433\u0435",url:"/about"}]).map((function(e){return r.a.createElement(l.c,{key:e.title,to:e.url,className:$e.a.navBarItem},e.title)}))))},tt=a(133),at=a.n(tt),nt=function(e){var t=e.href,a=e.date;return r.a.createElement("div",{className:at.a.copyright},"Copyright \xa9 ",r.a.createElement("a",{href:"".concat(t)},"http://mysite.org"),a)},rt=a(57),ct=a.n(rt),ot=function(){var e=a(102);return r.a.createElement("footer",{className:ct.a.footer},r.a.createElement("div",{className:ct.a.main},"Forward-only"),r.a.createElement("p",{className:ct.a.description},"\u0411\u043b\u043e\u0433 \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u043d\u043e\u043b\u0435\u0442\u043d\u0435\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442\u0430"),r.a.createElement("div",{className:ct.a.socialLinks},r.a.createElement(q,{href:"https://vk.com/id2329393",xlinkHref:"".concat(e,"#icon-vk")}),r.a.createElement(q,{href:"https://github.com/SergBlack",xlinkHref:"".concat(e,"#icon-github")}),r.a.createElement(q,{href:"https://linkedin.com/in/sergey-osipchuk",xlinkHref:"".concat(e,"#icon-linkedin")})),r.a.createElement(nt,{href:"",date:" ".concat((new Date).getFullYear())}))},lt=Object(j.a)((function(e){return{grid:{height:"500px"}}})),it=function(){var e=function(){var e=Object(n.useState)(null),t=Object(me.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),o=Object(me.a)(c,2),l=o[0],i=o[1],s=Object(n.useState)(null),u=Object(me.a)(s,2),m=u[0],p=u[1],d=Object(n.useCallback)((function(e,t){r(e),p(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),f=Object(n.useCallback)((function(){r(null),p(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&d(e.token,e.userId),i(!0)}),[d]),{login:d,logout:f,token:a,userId:m,ready:l}}(),t=e.token,a=e.login,c=e.logout,o=e.userId,s=e.ready,u=!!t,m=function(e){return e?r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(oe,null)),r.a.createElement(i.b,{path:"/create"},r.a.createElement(ke,null)),r.a.createElement(i.b,{path:"/post/update/:id",exact:!0},r.a.createElement(ke,null)),r.a.createElement(i.b,{path:"/detail/:id",exact:!0},r.a.createElement(Ce,null)),r.a.createElement(i.b,{path:"/links",exact:!0},r.a.createElement(Be,null)),r.a.createElement(i.b,{path:"/about",exact:!0},r.a.createElement(Ae,null)),r.a.createElement(i.b,{path:"/account",exact:!0},r.a.createElement(Fe,null)),r.a.createElement(i.b,{path:"/post/:id",exact:!0},r.a.createElement(Ze,null)),r.a.createElement(i.a,{to:"/"})):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/auth",exact:!0},r.a.createElement(Ie,null)),r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(oe,null)),r.a.createElement(i.b,{path:"/links",exact:!0},r.a.createElement(Be,null)),r.a.createElement(i.b,{path:"/about",exact:!0},r.a.createElement(Ae,null)),r.a.createElement(i.b,{path:"/post/:id",exact:!0},r.a.createElement(Ze,null)),r.a.createElement(i.a,{to:"/"}))}(u),p=lt();return r.a.createElement(Ee.Provider,{value:{token:t,login:a,logout:c,userId:o,isAuthenticated:u}},r.a.createElement(l.a,null,r.a.createElement(De.a,{maxWidth:"lg"},r.a.createElement(Pe.a,null,r.a.createElement(et,null),s?m:r.a.createElement(y.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:p.grid},r.a.createElement(ne,null)),r.a.createElement(ot,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var st=a(40),ut=a(134),mt=a(135),pt={posts:[],currentPost:{}},dt={loadingPosts:!1,loadingPost:!1},ft=Object(st.c)({postsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(le.a)(Object(le.a)({},e),{},{posts:t.payload.reverse()});case E:return Object(le.a)(Object(le.a)({},e),{},{currentPost:t.payload});case b:var a=t.payload.post;return Object(le.a)(Object(le.a)({},e),{},{posts:[a].concat(Object(mt.a)(e.posts)),currentPost:a});case g:var n=t.payload.id,r=e.posts.filter((function(e){return e._id!==n}));return Object(le.a)(Object(le.a)({},e),{},{posts:r,currentPost:r[0]});case h:var c=t.payload.post,o=e.posts.map((function(e){return e._id===c._id?c:e}));return Object(le.a)(Object(le.a)({},e),{},{posts:o,currentPost:c});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(le.a)(Object(le.a)({},e),{},{loadingPosts:!0});case m:return Object(le.a)(Object(le.a)({},e),{},{loadingPosts:!1});case p:return Object(le.a)(Object(le.a)({},e),{},{loadingPost:!0});case d:return Object(le.a)(Object(le.a)({},e),{},{loadingPost:!1});default:return e}}}),Et=Object(st.e)(ft,Object(st.d)(Object(st.a)(ut.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s.a,{store:Et},r.a.createElement(it,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,a){e.exports={sidebarAbout:"Sidebar_sidebarAbout__MppFo",sidebarTitle:"Sidebar_sidebarTitle__1WhTH",sidebarDescription:"Sidebar_sidebarDescription__1o4xs",sidebarContacts:"Sidebar_sidebarContacts__2B8u6",sidebarSocialLinks:"Sidebar_sidebarSocialLinks__tzo60"}},50:function(e,t,a){e.exports={toolbar:"Navbar_toolbar__1M85O",toolbarTitle:"Navbar_toolbarTitle__22xXo",toolbarCode:"Navbar_toolbarCode__l14lf",navBar:"Navbar_navBar__3lbHs",navBarItem:"Navbar_navBarItem__3G494"}},55:function(e,t,a){e.exports={link:"IconButton_link__3p5Rk",linkBlue:"IconButton_linkBlue__VZ4mx",svgContainer:"IconButton_svgContainer__CX6x8",description:"IconButton_description__3rdn6"}},56:function(e,t,a){e.exports={postPage:"PostPage_postPage__24_NF",currentPostContainer:"PostPage_currentPostContainer__19mIW",currentPostTitle:"PostPage_currentPostTitle__3QSnL",currentPostData:"PostPage_currentPostData__Nf-2A",currentPostContent:"PostPage_currentPostContent__1LX1j"}},57:function(e,t,a){e.exports={footer:"Footer_footer__1w0lV",main:"Footer_main__2Qr7m",description:"Footer_description__mCHsz",socialLinks:"Footer_socialLinks__u3JPb"}},71:function(e,t,a){e.exports={createFormContainer:"CreatePage_createFormContainer__1RA8j",postDescriptionTextarea:"CreatePage_postDescriptionTextarea__152ar",postContentTextarea:"CreatePage_postContentTextarea__2rVWC"}},73:function(e,t,a){e.exports={postItem:"PostsAsideBarItem_postItem__1lX8E",postItemTitle:"PostsAsideBarItem_postItemTitle__1bhbH",postItemData:"PostsAsideBarItem_postItemData__3vBlP"}},89:function(e,t,a){e.exports={postsContainer:"PostsAsideBar_postsContainer__38g82",postsContainerTitle:"PostsAsideBar_postsContainerTitle__13ZaW"}}},[[148,1,2]]]);
//# sourceMappingURL=main.94f0132f.chunk.js.map