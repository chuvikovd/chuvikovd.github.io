import{a as n,b as t,c as r,d as o,i as s,s as a,e as f,S as i,A as u,B as e,C as c,D as l,E as h,F as p,p as v,f as g,q as m,g as $,h as d,k as j,l as b,m as B,r as P,Q as q,u as w,P as x}from"./store.ca83f701.js";import{P as D}from"./PostHeader.fc599161.js";function E(n,t,r){var o=n.slice();return o[1]=t[r],o}function k(n){var t,r=new D({props:{post:n[1]}});return{c:function(){u(r.$$.fragment)},l:function(n){e(r.$$.fragment,n)},m:function(n,o){c(r,n,o),t=!0},p:function(n,t){var o={};1&t&&(o.post=n[1]),r.$set(o)},i:function(n){t||(l(r.$$.fragment,n),t=!0)},o:function(n){h(r.$$.fragment,n),t=!1},d:function(n){p(r,n)}}}function y(n){for(var t,r,o,s=n[0],a=[],f=0;f<s.length;f+=1)a[f]=k(E(n,s,f));var i=function(n){return h(a[n],1,1,(function(){a[n]=null}))};return{c:function(){t=v(),r=g("div");for(var n=0;n<a.length;n+=1)a[n].c();this.h()},l:function(n){t=m(n),r=$(n,"DIV",{class:!0});for(var o=d(r),s=0;s<a.length;s+=1)a[s].l(o);o.forEach(j),this.h()},h:function(){document.title="Blog",b(r,"class","w-full mt-8 pb-8")},m:function(n,s){B(n,t,s),B(n,r,s);for(var f=0;f<a.length;f+=1)a[f].m(r,null);o=!0},p:function(n,t){var o=P(t,1)[0];if(1&o){var f;for(s=n[0],f=0;f<s.length;f+=1){var u=E(n,s,f);a[f]?(a[f].p(u,o),l(a[f],1)):(a[f]=k(u),a[f].c(),l(a[f],1),a[f].m(r,null))}for(x(),f=s.length;f<a.length;f+=1)i(f);q()}},i:function(n){if(!o){for(var t=0;t<s.length;t+=1)l(a[t]);o=!0}},o:function(n){a=a.filter(Boolean);for(var t=0;t<a.length;t+=1)h(a[t]);o=!1},d:function(n){n&&j(t),n&&j(r),w(a,n)}}}function A(n){n.params,n.query;return this.fetch("blog.json").then((function(n){return n.json()})).then((function(n){return{posts:n}}))}function C(n,t,r){var o=t.posts;return n.$set=function(n){"posts"in n&&r(0,o=n.posts)},[o]}var F=function(u){function e(n){var i;return t(this,e),i=r(this,o(e).call(this)),s(f(i),n,C,y,a,{posts:0}),i}return n(e,i),e}();export default F;export{A as preload};
