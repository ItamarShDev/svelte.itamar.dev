import{S as s,i as t,s as a,e,t as l,k as o,c as r,a as n,g as h,d as c,n as f,b as i,f as p,H as u,h as g,J as d,I as m,M as v}from"../chunks/vendor-0deeb5a9.js";import{b as x}from"../chunks/paths-28a87002.js";function b(s,t,a){const e=s.slice();return e[1]=t[a],e}function E(s){let t,a,d,m,v,x,b,E,$=s[1].metadata.title+"",j=s[1].metadata.excerpt+"";return{c(){t=e("a"),a=e("h2"),d=l($),m=o(),v=e("p"),x=l(j),b=o(),this.h()},l(s){t=r(s,"A",{href:!0});var e=n(t);a=r(e,"H2",{class:!0});var l=n(a);d=h(l,$),l.forEach(c),m=f(e),v=r(e,"P",{class:!0});var o=n(v);x=h(o,j),o.forEach(c),b=f(e),e.forEach(c),this.h()},h(){i(a,"class","title svelte-ef651x"),i(v,"class","svelte-ef651x"),i(t,"href",E=`blog/${s[1].slug}`)},m(s,e){p(s,t,e),u(t,a),u(a,d),u(t,m),u(t,v),u(v,x),u(t,b)},p(s,a){1&a&&$!==($=s[1].metadata.title+"")&&g(d,$),1&a&&j!==(j=s[1].metadata.excerpt+"")&&g(x,j),1&a&&E!==(E=`blog/${s[1].slug}`)&&i(t,"href",E)},d(s){s&&c(t)}}}function $(s){let t,a,x,$,j,H,I,k,B,P=s[0].length+"",w=s[0],y=[];for(let e=0;e<w.length;e+=1)y[e]=E(b(s,w,e));return{c(){t=o(),a=e("div"),x=e("h1"),$=l("Itamar's Blog"),j=o(),H=e("p"),I=l(P),k=l(" posts."),B=o();for(let s=0;s<y.length;s+=1)y[s].c();this.h()},l(s){d('[data-svelte="svelte-1anpopb"]',document.head).forEach(c),t=f(s),a=r(s,"DIV",{});var e=n(a);x=r(e,"H1",{class:!0});var l=n(x);$=h(l,"Itamar's Blog"),l.forEach(c),j=f(e),H=r(e,"P",{class:!0});var o=n(H);I=h(o,P),k=h(o," posts."),o.forEach(c),B=f(e);for(let t=0;t<y.length;t+=1)y[t].l(e);e.forEach(c),this.h()},h(){document.title="Home",i(x,"class","svelte-ef651x"),i(H,"class","info svelte-ef651x")},m(s,e){p(s,t,e),p(s,a,e),u(a,x),u(x,$),u(a,j),u(a,H),u(H,I),u(H,k),u(a,B);for(let t=0;t<y.length;t+=1)y[t].m(a,null)},p(s,[t]){if(1&t&&P!==(P=s[0].length+"")&&g(I,P),1&t){let e;for(w=s[0],e=0;e<w.length;e+=1){const l=b(s,w,e);y[e]?y[e].p(l,t):(y[e]=E(l),y[e].c(),y[e].m(a,null))}for(;e<y.length;e+=1)y[e].d(1);y.length=w.length}},i:m,o:m,d(s){s&&c(t),s&&c(a),v(y,s)}}}async function j({fetch:s}){return{props:{posts:await s(`${x}/blog.json`).then((s=>s.json()))}}}function H(s,t,a){let{posts:e}=t;return s.$$set=s=>{"posts"in s&&a(0,e=s.posts)},[e]}class I extends s{constructor(s){super(),t(this,s,H,$,a,{posts:0})}}export{I as default,j as load};
