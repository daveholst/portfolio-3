import{S as v,i as d,s as y,k as _,l as m,m as p,h as c,n as o,b as g,H as i,L as N,q as k,r as b,J as O,G as x}from"./index.d22ab98f.js";import{p as E}from"./stores.7e1e0b20.js";function u(n,t,r){const e=n.slice();return e[1]=t[r],e}function f(n){let t,r=n[1].pageName+"",e;return{c(){t=_("a"),e=k(r),this.h()},l(a){t=m(a,"A",{href:!0,class:!0});var s=p(t);e=b(s,r),s.forEach(c),this.h()},h(){o(t,"href",n[1].route),o(t,"class","link svelte-1hktwh9"),O(t,"active-link",n[1].currentlyOn)},m(a,s){g(a,t,s),x(t,e)},p:i,d(a){a&&c(t)}}}function S(n){let t,r=n[0],e=[];for(let a=0;a<r.length;a+=1)e[a]=f(u(n,r,a));return{c(){t=_("div");for(let a=0;a<e.length;a+=1)e[a].c();this.h()},l(a){t=m(a,"DIV",{class:!0});var s=p(t);for(let l=0;l<e.length;l+=1)e[l].l(s);s.forEach(c),this.h()},h(){o(t,"class","navbar-container svelte-1hktwh9")},m(a,s){g(a,t,s);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(a,[s]){if(s&1){r=a[0];let l;for(l=0;l<r.length;l+=1){const h=u(a,r,l);e[l]?e[l].p(h,s):(e[l]=f(h),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=r.length}},i,o:i,d(a){a&&c(t),N(e,a)}}}function j(n){const t=[{pageName:".home",route:"/",currentlyOn:!1},{pageName:".projects",route:"/projects",currentlyOn:!1},{pageName:".skills",route:"/skills",currentlyOn:!1},{pageName:".about",route:"/about",currentlyOn:!1},{pageName:".cv",route:"/cv",currentlyOn:!1},{pageName:".contact",route:"/contact",currentlyOn:!1}];return E.subscribe(r=>{t.forEach(e=>e.currentlyOn=e.route===r.url.pathname)}),[t]}class B extends v{constructor(t){super(),d(this,t,j,S,y,{})}}export{B as N};