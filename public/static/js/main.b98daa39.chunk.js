(this["webpackJsonptask-planner"]=this["webpackJsonptask-planner"]||[]).push([[0],{107:function(e,t,a){},151:function(e,t,a){},158:function(e,t,a){},243:function(e,t,a){},244:function(e,t,a){},245:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),s=a.n(r),o=a(12),c=a.n(o),i=(a(151),a(35)),l=a(73),d=a(74),u=a(84),j=a(82),h=a(16),p=a(309),b=a(292),m=a(288),O=a(290),f=a(291),x=a(310),g=a(48),v=a.n(g),y=a(248),w=a(85),S=a(285),k=a(293),C=a(307),A=(a(107),Object(S.a)({root:{background:"linear-gradient(45deg, #8360c3 30%, #2ebf91 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}})),I=Object(C.a)((function(e){var t=Object(r.useState)(""),a=Object(h.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(""),l=Object(h.a)(i,2),d=l[0],u=l[1];Object(r.useEffect)((function(){localStorage.setItem("username","Eduard Jimenez"),localStorage.setItem("email","edkillah@mail.com"),localStorage.setItem("pwd","654321")}),[]);var j=A();return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(m.a,{}),Object(n.jsxs)("main",{className:"layout",children:[Object(n.jsxs)(y.a,{className:"paper",children:[Object(n.jsx)(p.a,{className:"avatar",children:Object(n.jsx)(v.a,{})})," ",Object(n.jsx)(w.a,{variant:"h2",children:" Sign in "})," ",Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=localStorage.getItem("email"),n=localStorage.getItem("pwd");o===a&&d===n?(localStorage.setItem("isLoggedIn",!0),e.handleLoggin(!0),e.history.push("/index")):localStorage.setItem("isLoggedIn",!1)},className:"form",children:[Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"email",children:" Email Address "})," ",Object(n.jsx)(f.a,{id:"email",name:"email",autoComplete:"email",placeholder:"pepe@mail.com",autoFocus:!0,onChange:function(e){return c(e.target.value)},value:o})," "]})," ",Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"password",children:" Password "})," ",Object(n.jsx)(f.a,{name:"password",type:"password",id:"password",placeholder:"******",autoComplete:"current-password",onChange:function(e){return u(e.target.value)},value:d})," "]})," ",Object(n.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:j.root,children:"Sign in"})," "]})," ",Object(n.jsxs)(k.a,{to:"/singup",children:[Object(n.jsx)("a",{href:"/singup",children:" Create an account "})," "]})," "]})," "]})," "]})})),D=a(61),K=a(99),q=a(5),T=(a(158),a(305)),G=a(296),Q=a(249),R=a(295),F=a(294),L=a(137),N=a.n(L),J=a(135),U=a.n(J),V=a(136),H=a.n(V),E=a(79),W=a.n(E),B=Object(S.a)({list:{width:250},fullList:{width:"auto"}});var P=Object(C.a)((function(e){var t=B(),a=s.a.useState({left:!1}),r=Object(h.a)(a,2),o=r[0],c=r[1],i=function(){e.history.push("/singup")},l=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&c(Object(K.a)(Object(K.a)({},o),{},Object(D.a)({},e,t)))}},d="left";return Object(n.jsxs)("div",{children:[Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(b.a,{onClick:l(d,!0),children:Object(n.jsx)(N.a,{})})," ",Object(n.jsxs)(T.a,{anchor:d,open:o.left,onClose:l(d,!1),children:[" ",function(a){var r=e.userProperties,s=r.username,o=r.email;r.pwd;return Object(n.jsxs)("div",{className:Object(q.a)(t.list,Object(D.a)({},t.fullList,"top"===a||"bottom"===a)),role:"presentation",onClick:l(a,!1),onKeyDown:l(a,!1),children:[Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[Object(n.jsx)(p.a,{className:"avatar",children:Object(n.jsx)(U.a,{})})," ",Object(n.jsx)(F.a,{primary:s+"\n"+o})," "]})," ",Object(n.jsx)(Q.a,{button:!0,onClick:i,style:{display:"flex",justifyContent:"flex-end"},children:Object(n.jsx)(R.a,{style:{marginLeft:"0px"},children:Object(n.jsx)(W.a,{})})}),Object(n.jsx)(G.a,{}),Object(n.jsxs)(Q.a,{button:!0,style:{display:"flex",justifyContent:"flex-end",marginBottom:"0px"},children:[Object(n.jsx)(R.a,{children:Object(n.jsx)(H.a,{})})," ",Object(n.jsx)(F.a,{primary:"Logout"})]})," "]})}(d)," "]})," "]},d)," "]})})),Y=a(298),X=a(299),Z=a(304),z=a(303),M=a(297),_=a(81),$=a.n(_);a(108);function ee(){return Math.round(20*Math.random())-10}function te(){var e=50+ee(),t=50+ee();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var ae=Object(S.a)((function(e){return{paper:{position:"absolute",width:400,backgroundColor:e.palette.background.paper,border:"2px solid #000",boxShadow:e.shadows[5],padding:e.spacing(2,4,3)},root:{background:"linear-gradient(45deg, #8360c3 30%, #2ebf91 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},secondary:{background:"linear-gradient(45deg, #da4453 30%, #89216b 90%)"}}}));function ne(e){var t=ae(),a=s.a.useState(te),o=Object(h.a)(a,1)[0],c=Object(r.useState)(""),i=Object(h.a)(c,2),l=i[0],d=i[1],u=Object(r.useState)(""),j=Object(h.a)(u,2),p=j[0],m=j[1],g=Object(r.useState)(new Date),v=Object(h.a)(g,2),y=v[0],w=v[1],S=Object(n.jsxs)("div",{style:o,className:t.paper,children:[Object(n.jsx)("h2",{id:"simple-modal-title",children:"TASK FILTERS"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault();var a=y?y.toDateString():"",n={status:p,dueDate:a,responsible:l};e.filterTask(n)},className:"form",children:[Object(n.jsxs)(O.a,{className:t.formControl,children:[Object(n.jsx)(x.a,{id:"demo-simple-select-label",children:"Due Date"}),Object(n.jsx)($.a,{id:"due-date",selected:y,placeholderText:"Due date",onChange:function(e){return w(e)}})]}),Object(n.jsxs)(O.a,{margin:"normal",fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"responsible",children:" Responsible "}),Object(n.jsx)(f.a,{name:"responsible",type:"text",id:"responsible",placeholder:"Pepe",onChange:function(e){return d(e.target.value)},value:l})]}),Object(n.jsxs)(O.a,{className:t.formControl,children:[Object(n.jsx)(x.a,{id:"demo-simple-select-helper-label",children:"Status"}),Object(n.jsxs)(z.a,{labelId:"demo-simple-select-helper-label",id:"demo-simple-select-helper",value:p,onChange:function(e){return m(e.target.value)},children:[Object(n.jsx)(M.a,{value:"ready",children:"Ready"}),Object(n.jsx)(M.a,{value:"in_progress",children:"In Progress"}),Object(n.jsx)(M.a,{value:"completed",children:"Done"})]})]}),Object(n.jsx)("p",{}),Object(n.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:t.root,children:"Apply"}),Object(n.jsx)("p",{}),Object(n.jsx)(b.a,{onClick:function(){m(""),d(""),w("")},fullWidth:!0,variant:"contained",color:"secondary",className:t.secondary,children:"Clear All"}),Object(n.jsx)("p",{id:"simple-modal-description",children:'To see all tasks click on "Clear All" and next in "Apply"'})]})]});return Object(n.jsx)("div",{children:Object(n.jsx)(Z.a,{open:e.handleOpen,onClose:e.handleClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",children:S})})}var re=a(301),se=a(140),oe=a.n(se),ce=a(300),ie=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).initTodos=function(){n.setState((function(e,t){return{todosCopy:Object(i.a)(e.todos)}}))},n.compareNames=function(e,t){return e.name.toLowerCase().indexOf(t.toLowerCase())>-1},n.filterLogic=function(e,t,a,r){var s=[];return e.forEach((function(e){var o=e.status,c=e.responsible,i=e.dueDate;""!==t&&""!==a&&""!==r?o===t&&n.compareNames(c,a)&&i===r&&s.push(e):""===t&&""===a?i===r&&s.push(e):""===a&&""===r?o===t&&s.push(e):""===t&&""===r?n.compareNames(c,a)&&s.push(e):""===r?o===t&&n.compareNames(c,a)&&s.push(e):""===t?n.compareNames(c,a)&&i===r&&s.push(e):""===a&&o===t&&i===r&&s.push(e)})),s},n.filterTask=function(e){var t=e.responsible,a=e.status,r=e.dueDate;if(""===a&&""===t&&""===r)n.initTodos();else{var s,o=Object(i.a)(n.state.todos);s=n.filterLogic(o,a,t,r),console.log("Filtro: ",s),n.setState({todosCopy:Object(i.a)(s)})}},n.handleClick=function(){return n.props.history.push("/newtask")},n.handleClose=function(){n.setState({open:!1})},n.handleOpen=function(){n.setState({open:!0})};return n.state={todos:e.todos,status:{completed:"check",ready:"alarm_on",in_progress:"query_builder"},open:!1,todosCopy:[]},n}return Object(d.a)(a,[{key:"componentDidMount",value:function(){this.initTodos()}},{key:"render",value:function(){var e=this,t={username:localStorage.getItem("username"),email:localStorage.getItem("email"),pwd:localStorage.getItem("pwd")};return Object(n.jsxs)("div",{children:[Object(n.jsx)(P,{userProperties:t})," ",this.state.todosCopy.map((function(t,a){return Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(n.jsxs)(Y.a,{style:{marginBottom:"12px",width:"80%",display:"flex",justifyContent:"center"},children:[Object(n.jsxs)(X.a,{children:[Object(n.jsx)(w.a,{variant:"h5",component:"h2",children:t.description}),Object(n.jsxs)(w.a,{color:"textSecondary",children:["Name: ",t.responsible.name]})," ",Object(n.jsxs)(w.a,{color:"textSecondary",children:["Email: ",t.responsible.email]})," ",Object(n.jsxs)(w.a,{color:"secondary",children:["Status: ",t.status+" ",Object(n.jsxs)(ce.a,{children:[" ",e.state.status[t.status]," "]})," "]})," ",Object(n.jsxs)(w.a,{children:[" Date: ",t.dueDate," "]})," "]})," "]})," "]})})),Object(n.jsx)(re.a,{color:"secondary","aria-label":"edit",onClick:function(){return e.handleOpen()},style:{margin:0,top:"auto",right:20,bottom:80,left:"auto",position:"fixed"},children:Object(n.jsx)(W.a,{})}),Object(n.jsx)(ne,{handleOpen:this.state.open,handleClose:function(){return e.handleClose()},filterTask:this.filterTask}),Object(n.jsx)(re.a,{color:"primary","aria-label":"add",style:{margin:0,top:"auto",right:20,bottom:20,left:"auto",position:"fixed",background:"linear-gradient(45deg, #396afc 90%, #2948ff 30%)"},onClick:this.handleClick,children:Object(n.jsx)(oe.a,{})})]})}}]),a}(s.a.Component),le=Object(C.a)(ie),de=Object(S.a)({root:{background:"linear-gradient(45deg, #8360c3 30%, #2ebf91 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"}}),ue=Object(C.a)((function(e){var t=Object(r.useState)(""),a=Object(h.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(""),l=Object(h.a)(i,2),d=l[0],u=l[1],j=Object(r.useState)(""),g=Object(h.a)(j,2),S=g[0],k=g[1],C=Object(r.useState)(""),A=Object(h.a)(C,2),I=A[0],D=A[1],K=de();return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(m.a,{}),Object(n.jsx)("main",{className:"layout",children:Object(n.jsxs)(y.a,{className:"paper",children:[Object(n.jsx)(p.a,{className:"avatar",children:Object(n.jsx)(v.a,{})})," ",Object(n.jsx)(w.a,{variant:"h2",children:" Registration "})," ",Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),d!==I?console.log("No son iguales las password!!"):(localStorage.setItem("username",S),localStorage.setItem("email",o),localStorage.setItem("pwd",d),e.history.push("/index"))},className:"form",children:[Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"name",children:" Full Name "})," ",Object(n.jsx)(f.a,{id:"name",name:"name",placeholder:"pepe ronaldo",autoFocus:!0,onChange:function(e){return k(e.target.value)},value:S})," "]})," ",Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"email",children:" Email Address "})," ",Object(n.jsx)(f.a,{id:"email",name:"email",autoComplete:"email",placeholder:"pepe@mail.com",autoFocus:!0,onChange:function(e){return c(e.target.value)},value:o})," "]})," ",Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"password",children:" Password "})," ",Object(n.jsx)(f.a,{name:"password",type:"password",id:"password",placeholder:"******",autoComplete:"current-password",onChange:function(e){return u(e.target.value)},value:d})," "]})," ",Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsxs)(x.a,{htmlFor:"confirm_password",children:[" ","Confirm Password"," "]})," ",Object(n.jsx)(f.a,{name:"confirm_password",type:"password",id:"confirm_password",placeholder:"******",onChange:function(e){return D(e.target.value)},value:I})," "]})," ",Object(n.jsx)(b.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",className:K.root,children:"Sign in"})]})]})})]})})),je=(a(243),Object(S.a)((function(e){return{root:{background:"linear-gradient(45deg, #8360c3 30%, #2ebf91 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}))),he=Object(C.a)((function(e){var t=Object(r.useState)(""),a=Object(h.a)(t,2),o=a[0],c=a[1],i=Object(r.useState)(""),l=Object(h.a)(i,2),d=l[0],u=l[1],j=Object(r.useState)("Ready"),g=Object(h.a)(j,2),S=g[0],k=g[1],C=Object(r.useState)(new Date),A=Object(h.a)(C,2),I=A[0],D=A[1];Object(r.useEffect)((function(){localStorage.setItem("username","edkillah"),localStorage.setItem("pwd","654321")}),[]);var K=function(t){t.preventDefault();var a={name:d,email:"eduard@mail.com"};e.submitTask({description:o,responsible:a,status:S,dueDate:I.toDateString()}),e.history.push("/index")},q=je();return Object(n.jsxs)(s.a.Fragment,{children:[Object(n.jsx)(m.a,{}),Object(n.jsx)("main",{className:"layout",children:Object(n.jsxs)(y.a,{className:"paper",children:[Object(n.jsx)(p.a,{className:"avatar",children:Object(n.jsx)(v.a,{})}),Object(n.jsx)(w.a,{variant:"h2",children:" New Task "})," ",Object(n.jsxs)("form",{onSubmit:K,className:"form",children:[Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"email",children:" Description "})," ",Object(n.jsx)(f.a,{id:"description",name:"description",autoComplete:"description",placeholder:"Add your task here",autoFocus:!0,onChange:function(e){return c(e.target.value)},value:o})," "]})," ",Object(n.jsxs)(O.a,{margin:"normal",required:!0,fullWidth:!0,children:[Object(n.jsx)(x.a,{htmlFor:"responsible",children:" Responsible "})," ",Object(n.jsx)(f.a,{name:"responsible",type:"text",id:"responsible",placeholder:"Pepe",onChange:function(e){return u(e.target.value)},value:d})," "]})," ",Object(n.jsxs)(O.a,{className:q.formControl,children:[Object(n.jsx)(x.a,{id:"demo-simple-select-label",children:"Status"}),Object(n.jsxs)(z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:S,onChange:function(e){return k(e.target.value)},children:[Object(n.jsx)(M.a,{value:"ready",children:"Ready"}),Object(n.jsx)(M.a,{value:"in_progress",children:"In Progress"}),Object(n.jsx)(M.a,{value:"completed",children:"Done"})]})]}),Object(n.jsxs)(O.a,{className:q.formControl,children:[Object(n.jsx)(x.a,{id:"demo-simple-select-label",children:"Due Date"}),Object(n.jsx)($.a,{id:"due-date",selected:I,minDate:new Date,placeholderText:"Due date",onChange:function(e){return D(e)}})]}),Object(n.jsx)(b.a,{type:"submit",onClick:function(){return K},className:"container Fitness-Add",children:Object(n.jsx)("img",{src:"data:image/png;base64,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",alt:""})})]})]})})]})})),pe=a(306),be=a(308),me=a(302),Oe=(a(244),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLogged:!1,userList:[],todos:[{description:"First task, this is an example",responsible:{name:"Santiago Carrillo",email:"sancarbar@gmail.com"},status:"ready",dueDate:"Sun Feb 14 2021"},{description:"Learn to program in ReactJS",responsible:{name:"Eduard Jimenez",email:"edkillah@mail.com"},status:"completed",dueDate:"Sun Feb 14 2021"},{description:"Learn how to program better",responsible:{name:"Eduard Jimenez",email:"edkillah@mail.com"},status:"in_progress",dueDate:"Sun Feb 14 2021"}]},e.fillUsers=function(){e.state.userList!==[]&&Object(i.a)(e.state.userList).forEach((function(t,a){var n="Task from backend #"+(1+a),r={name:t.user.name,email:t.user.email};e.submitTask({description:n,responsible:r,status:"ready",dueDate:"Sun Mar 10 2021"})}))},e.handleLoggin=function(t){e.setState({isLogged:t})},e.submitTask=function(t){var a=Object(i.a)(e.state.todos);a.push(t),e.setState({todos:Object(i.a)(a)})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://cryptic-reef-04829.herokuapp.com/users/",{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(t){var a=[];t.forEach((function(e){a.push({user:e})})),e.setState({userList:a}),e.fillUsers()}))}},{key:"render",value:function(){var e=this;return Object(n.jsx)(pe.a,{children:Object(n.jsxs)(be.a,{children:[Object(n.jsx)(me.a,{path:"/index",component:function(){return Object(n.jsx)(le,{newTask:e.state.newTask,todos:e.state.todos})}}),Object(n.jsx)(me.a,{exact:!0,path:"/",component:function(){return Object(n.jsx)(I,{handleLoggin:e.handleLoggin})}}),Object(n.jsx)(me.a,{exact:!0,path:"/singup",component:ue}),Object(n.jsx)(me.a,{exact:!0,path:"/newtask",component:function(){return Object(n.jsx)(he,{submitTask:e.submitTask})}})]})})}}]),a}(r.Component)),fe=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,312)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),s(e),o(e)}))},xe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ge(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(Object(n.jsx)(Oe,{}),document.getElementById("root")),fe(),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");xe?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ge(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ge(t,e)}))}}()}},[[245,1,2]]]);
//# sourceMappingURL=main.b98daa39.chunk.js.map