import{S as t,i as s,s as e,e as a,c as n,f as o,g as r,d as i,C as c,j as l,m as d,B as m,k as p,o as u,a as h,p as f,h as g,q as $,r as j,u as w,v,z as b,A as x}from"./client.7601c9fd.js";import{P as E}from"./PostHeader.846b0e46.js";import{g as H}from"./utils.c96bd709.js";function M(t){let s,e;return{c(){s=a("meta"),this.h()},l(t){s=n(t,"META",{name:!0,content:!0}),this.h()},h(){o(s,"name","description"),o(s,"content",e=t[0].description)},m(t,e){r(t,s,e)},p(t,a){1&a&&e!==(e=t[0].description)&&o(s,"content",e)},d(t){t&&i(s)}}}function T(t){let s,e,b,x,T,k,q=t[0].html+"";document.title=s=H(t[0].title);let y=t[0].description&&M(t);const z=new E({props:{post:t[0],opened:"true"}});return{c(){y&&y.c(),e=c(),b=l(),d(z.$$.fragment),x=l(),T=a("div"),this.h()},l(t){const s=m('[data-svelte="svelte-1oiz5us"]',document.head);y&&y.l(s),e=c(),s.forEach(i),b=p(t),u(z.$$.fragment,t),x=p(t),T=n(t,"DIV",{class:!0}),h(T).forEach(i),this.h()},h(){o(T,"class","w-full mt-6 markdown"),f(T,"night",!t[1])},m(t,s){y&&y.m(document.head,null),g(document.head,e),r(t,b,s),$(z,t,s),r(t,x,s),r(t,T,s),T.innerHTML=q,k=!0},p(t,[a]){(!k||1&a)&&s!==(s=H(t[0].title))&&(document.title=s),t[0].description?y?y.p(t,a):(y=M(t),y.c(),y.m(e.parentNode,e)):y&&(y.d(1),y=null);const n={};1&a&&(n.post=t[0]),z.$set(n),(!k||1&a)&&q!==(q=t[0].html+"")&&(T.innerHTML=q),2&a&&f(T,"night",!t[1])},i(t){k||(j(z.$$.fragment,t),k=!0)},o(t){w(z.$$.fragment,t),k=!1},d(t){y&&y.d(t),i(e),t&&i(b),v(z,t),t&&i(x),t&&i(T)}}}async function k({params:t,query:s}){const e=await this.fetch(`blog/${t.slug}.json`),a=await e.json();if(200===e.status)return{post:a};this.error(e.status,data.message)}function q(t,s,e){let a;b(t,x,t=>e(1,a=t));let{post:n}=s;return t.$set=t=>{"post"in t&&e(0,n=t.post)},[n,a]}export default class extends t{constructor(t){super(),s(this,t,q,T,e,{post:0})}}export{k as preload};
