(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[878],{7926:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/comments/[pid]",function(){return t(9489)}])},6e3:function(n,e,t){"use strict";t.d(e,{J:function(){return c},w:function(){return r}});let s="https://jsonplaceholder.typicode.com";function c(n){let e=new URL("/posts",s);return Object.entries(n).forEach(n=>{let[t,s]=n;e.searchParams.set(t,s.toString())}),fetch(e).then(n=>n.json())}function r(n){let e=new URL("/posts/".concat(n,"/comments"),s);return fetch(e).then(n=>n.json())}},9489:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return m}});var s=t(5893),c=t(9008),r=t.n(c),i=t(1163),o=t(7294),a=t(3629),u=t.n(a),d=t(6e3);function m(){let n=(0,i.useRouter)(),[e,t]=(0,o.useState)([]);return(0,o.useEffect)(()=>{(async()=>{n.query.pid&&t(await (0,d.w)(n.query.pid))})()},[n.query.pid]),(0,s.jsxs)("div",{children:[(0,s.jsx)(r(),{children:(0,s.jsxs)("title",{children:["Комментарии поста ",n.query.pid]})}),(0,s.jsxs)("main",{className:u().container,children:[(0,s.jsxs)("header",{className:u().header,children:[(0,s.jsx)("button",{className:u()["back-btn"],onClick:function(){n.back()},children:"Назад"}),(0,s.jsxs)("h2",{children:["Комментарии поста ",n.query.pid]})]}),e.map(n=>(0,s.jsxs)("div",{className:u().comment,children:[(0,s.jsx)("h2",{className:u().name,children:n.name}),(0,s.jsx)("span",{children:n.email}),(0,s.jsx)("p",{children:n.body})]},n.id))]})]})}},3629:function(n){n.exports={container:"Comments_container__ycJis",header:"Comments_header__nHkRy","back-btn":"Comments_back-btn__AT2gU",comment:"Comments_comment__ICywF"}},9008:function(n,e,t){n.exports=t(9201)},1163:function(n,e,t){n.exports=t(9974)}},function(n){n.O(0,[774,888,179],function(){return n(n.s=7926)}),_N_E=n.O()}]);