import{K as d,S as v,i as m,s as y,l as p,m as f,p as _,h as c,q as o,b,n as i,L as N,u as O,v as k,M as x,J as S}from"./index-5bbf1842.js";const E=()=>{const r=d("__svelte__");return{page:{subscribe:r.page.subscribe},navigating:{subscribe:r.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:r.navigating.subscribe}},session:r.session,updated:r.updated}},q={subscribe(r){return E().page.subscribe(r)}};function h(r,e,n){const t=r.slice();return t[1]=e[n],t}function g(r){let e,n=r[1].pageName+"",t;return{c(){e=p("a"),t=O(n),this.h()},l(s){e=f(s,"A",{href:!0,class:!0});var l=_(e);t=k(l,n),l.forEach(c),this.h()},h(){o(e,"href",r[1].route),o(e,"class","link svelte-wcrtip"),x(e,"active-link",r[1].currentlyOn)},m(s,l){b(s,e,l),S(e,t)},p:i,d(s){s&&c(e)}}}function w(r){let e,n=r[0],t=[];for(let s=0;s<n.length;s+=1)t[s]=g(h(r,n,s));return{c(){e=p("div");for(let s=0;s<t.length;s+=1)t[s].c();this.h()},l(s){e=f(s,"DIV",{class:!0});var l=_(e);for(let a=0;a<t.length;a+=1)t[a].l(l);l.forEach(c),this.h()},h(){o(e,"class","navbar-container svelte-wcrtip")},m(s,l){b(s,e,l);for(let a=0;a<t.length;a+=1)t[a].m(e,null)},p(s,[l]){if(l&1){n=s[0];let a;for(a=0;a<n.length;a+=1){const u=h(s,n,a);t[a]?t[a].p(u,l):(t[a]=g(u),t[a].c(),t[a].m(e,null))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},i,o:i,d(s){s&&c(e),N(t,s)}}}function B(r){const e=[{pageName:".home",route:"/",currentlyOn:!1},{pageName:".about",route:"/about",currentlyOn:!1},{pageName:".skills",route:"/",currentlyOn:!1},{pageName:".projects",route:"/",currentlyOn:!1},{pageName:".cv",route:"/",currentlyOn:!1},{pageName:".contact",route:"/",currentlyOn:!1}];return q.subscribe(n=>{e.forEach(t=>t.currentlyOn=t.route===n.url.pathname)}),[e]}class $ extends v{constructor(e){super(),m(this,e,B,w,y,{})}}export{$ as N};
