function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(t,n,e,o){if(t){const r=l(t,n,e,o);return t[0](r)}}function l(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function s(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function u(t,n,e,o,r,i){if(r){const c=l(n,e,o,i);t.p(c,r)}}function f(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}let d,h=!1;function _(t,n,e,o){for(;t<n;){const r=t+(n-t>>1);e(r)<=o?t=r+1:n=r}return t}function m(t,n){if(h){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let r=0;for(let l=0;l<n.length;l++){const t=n[l].claim_order,i=(r>0&&n[e[r]].claim_order<=t?r+1:_(1,r,(t=>n[e[t]].claim_order),t))-1;o[l]=e[i]+1;const c=i+1;e[c]=l,r=Math.max(c,r)}const i=[],c=[];let a=n.length-1;for(let l=e[r]+1;0!=l;l=o[l-1]){for(i.push(n[l-1]);a>=l;a--)c.push(n[a]);a--}for(;a>=0;a--)c.push(n[a]);i.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let l=0,s=0;l<c.length;l++){for(;s<i.length&&c[l].claim_order>=i[s].claim_order;)s++;const n=s<i.length?i[s]:null;t.insertBefore(c[l],n)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?void 0===n.claim_order&&n.parentNode===t||t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else n.parentNode===t&&null===n.nextSibling||t.appendChild(n)}function p(t,n,e){h&&!e?m(t,n):n.parentNode===t&&n.nextSibling==e||t.insertBefore(n,e||null)}function g(t){t.parentNode.removeChild(t)}function $(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function x(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function v(){return y("")}function E(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function w(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t){return Array.from(t.childNodes)}function k(t,n,e,o,r=!1){!function(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}(t);const i=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r||(t.claim_info.last_index=o),i}}for(let o=t.claim_info.last_index-1;o>=0;o--){const i=t[o];if(n(i)){const n=e(i);return void 0===n?t.splice(o,1):t[o]=n,r?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,i}}return o()})();return i.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,i}function N(t,n,e){return function(t,n,e,o){return k(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const r=t.attributes[o];e[r.name]||n.push(r.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}(t,n,e,x)}function S(t,n){return k(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>y(n)),!0)}function j(t){return S(t," ")}function z(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function B(t,n=document.body){return Array.from(n.querySelectorAll(t))}function C(t){d=t}function M(){if(!d)throw new Error("Function called outside component initialization");return d}function T(t){M().$$.on_mount.push(t)}function q(t){M().$$.after_update.push(t)}function I(t,n){M().$$.context.set(t,n)}const L=[],O=[],D=[],F=[],H=Promise.resolve();let G=!1;function J(t){D.push(t)}let K=!1;const P=new Set;function W(){if(!K){K=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];C(n),Q(n.$$)}for(C(null),L.length=0;O.length;)O.pop()();for(let t=0;t<D.length;t+=1){const n=D[t];P.has(n)||(P.add(n),n())}D.length=0}while(L.length);for(;F.length;)F.pop()();G=!1,K=!1,P.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(J)}}const R=new Set;let U;function V(){U={r:0,c:[],p:U}}function X(){U.r||r(U.c),U=U.p}function Y(t,n){t&&t.i&&(R.delete(t),t.i(n))}function Z(t,n,e,o){if(t&&t.o){if(R.has(t))return;R.add(t),U.c.push((()=>{R.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function tt(t,n){const e={},o={},r={$$scope:1};let i=t.length;for(;i--;){const c=t[i],a=n[i];if(a){for(const t in c)t in a||(o[t]=1);for(const t in a)r[t]||(e[t]=a[t],r[t]=1);t[i]=a}else for(const t in c)r[t]=1}for(const c in o)c in e||(e[c]=void 0);return e}function nt(t){return"object"==typeof t&&null!==t?t:{}}function et(t){t&&t.c()}function ot(t,n){t&&t.l(n)}function rt(t,n,o,c){const{fragment:a,on_mount:l,on_destroy:s,after_update:u}=t.$$;a&&a.m(n,o),c||J((()=>{const n=l.map(e).filter(i);s?s.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(J)}function it(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function ct(t,n){-1===t.$$.dirty[0]&&(L.push(t),G||(G=!0,H.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function at(n,e,i,c,a,l,s,u=[-1]){const f=d;C(n);const _=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:a,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:u,skip_bound:!1,root:e.target||f.$$.root};s&&s(_.root);let m=!1;if(_.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return _.ctx&&a(_.ctx[t],_.ctx[t]=r)&&(!_.skip_bound&&_.bound[t]&&_.bound[t](r),m&&ct(n,t)),e})):[],_.update(),m=!0,r(_.before_update),_.fragment=!!c&&c(_.ctx),e.target){if(e.hydrate){h=!0;const t=A(e.target);_.fragment&&_.fragment.l(t),t.forEach(g)}else _.fragment&&_.fragment.c();e.intro&&Y(n.$$.fragment),rt(n,e.target,e.anchor,e.customElement),h=!1,W()}C(f)}class lt{$destroy(){it(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const st=[];function ut(n,e=t){let o;const r=new Set;function i(t){if(c(n,t)&&(n=t,o)){const t=!st.length;for(const e of r)e[1](),st.push(e,n);if(t){for(let t=0;t<st.length;t+=2)st[t][0](st[t+1]);st.length=0}}}return{set:i,update:function(t){i(t(n))},subscribe:function(c,a=t){const l=[c,a];return r.add(l),1===r.size&&(o=e(i)||t),c(n),()=>{r.delete(l),0===r.size&&(o(),o=null)}}}}export{T as A,n as B,ut as C,a as D,u as E,f as F,s as G,m as H,t as I,B as J,E as K,r as L,$ as M,lt as S,A as a,w as b,N as c,g as d,x as e,p as f,S as g,z as h,at as i,et as j,b as k,v as l,ot as m,j as n,rt as o,tt as p,nt as q,V as r,c as s,y as t,Z as u,it as v,X as w,Y as x,I as y,q as z};
