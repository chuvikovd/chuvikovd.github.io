import{S as t,i as s,s as e,m as o,o as n,q as l,r as a,u as r,v as c,j as f,e as i,B as u,d as h,k as p,c as m,a as g,f as d,g as $,x as j,y as v,w as b}from"./client.7601c9fd.js";import{P as x}from"./PostHeader.846b0e46.js";import{g as B}from"./utils.c96bd709.js";function w(t,s,e){const o=t.slice();return o[1]=s[e],o}function q(t){let s;const e=new x({props:{post:t[1]}});return{c(){o(e.$$.fragment)},l(t){n(e.$$.fragment,t)},m(t,o){l(e,t,o),s=!0},p(t,s){const o={};1&s&&(o.post=t[1]),e.$set(o)},i(t){s||(a(e.$$.fragment,t),s=!0)},o(t){r(e.$$.fragment,t),s=!1},d(t){c(e,t)}}}function y(t){let s,e,o,n;document.title=s=B("Blog");let l=t[0],c=[];for(let s=0;s<l.length;s+=1)c[s]=q(w(t,l,s));const x=t=>r(c[t],1,1,()=>{c[t]=null});return{c(){e=f(),o=i("div");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l(t){u('[data-svelte="svelte-ug3dp6"]',document.head).forEach(h),e=p(t),o=m(t,"DIV",{class:!0});var s=g(o);for(let t=0;t<c.length;t+=1)c[t].l(s);s.forEach(h),this.h()},h(){d(o,"class","w-full mt-8 pb-8")},m(t,s){$(t,e,s),$(t,o,s);for(let t=0;t<c.length;t+=1)c[t].m(o,null);n=!0},p(t,[e]){if((!n||0&e)&&s!==(s=B("Blog"))&&(document.title=s),1&e){let s;for(l=t[0],s=0;s<l.length;s+=1){const n=w(t,l,s);c[s]?(c[s].p(n,e),a(c[s],1)):(c[s]=q(n),c[s].c(),a(c[s],1),c[s].m(o,null))}for(b(),s=l.length;s<c.length;s+=1)x(s);j()}},i(t){if(!n){for(let t=0;t<l.length;t+=1)a(c[t]);n=!0}},o(t){c=c.filter(Boolean);for(let t=0;t<c.length;t+=1)r(c[t]);n=!1},d(t){t&&h(e),t&&h(o),v(c,t)}}}function E({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function P(t,s,e){let{posts:o}=s;return t.$set=t=>{"posts"in t&&e(0,o=t.posts)},[o]}export default class extends t{constructor(t){super(),s(this,t,P,y,e,{posts:0})}}export{E as preload};
