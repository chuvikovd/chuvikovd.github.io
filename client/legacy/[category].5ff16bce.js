import{L as t,M as n,a as r,b as e,i as a,s as o,c as s,S as c,v as u,w as f,y as i,z as l,A as p,B as h,q as g,e as v,H as m,h as y,r as d,d as $,f as b,j,k as x,m as w,D as R,E as B,o as D,p as k,C as E}from"./client.b22ee716.js";import{P}from"./PostHeader.4c0e6691.js";import{g as q}from"./utils.ba430a32.js";function H(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function S(t,n,r){var e=t.slice();return e[2]=n[r],e}function z(t){var n,r=new P({props:{post:t[2]}});return{c:function(){u(r.$$.fragment)},l:function(t){f(r.$$.fragment,t)},m:function(t,e){i(r,t,e),n=!0},p:function(t,n){var e={};1&n&&(e.post=t[2]),r.$set(e)},i:function(t){n||(l(r.$$.fragment,t),n=!0)},o:function(t){p(r.$$.fragment,t),n=!1},d:function(t){h(r,t)}}}function A(t){var n,r,e,a;document.title=n=q("Blog - ".concat(t[1]));for(var o=t[0],s=[],c=0;c<o.length;c+=1)s[c]=z(S(t,o,c));var u=function(t){return p(s[t],1,1,(function(){s[t]=null}))};return{c:function(){r=g(),e=v("div");for(var t=0;t<s.length;t+=1)s[t].c();this.h()},l:function(t){m('[data-svelte="svelte-1wphraj"]',document.head).forEach(y),r=d(t),e=$(t,"DIV",{class:!0});for(var n=b(e),a=0;a<s.length;a+=1)s[a].l(n);n.forEach(y),this.h()},h:function(){j(e,"class","w-full mt-8 pb-8")},m:function(t,n){x(t,r,n),x(t,e,n);for(var o=0;o<s.length;o+=1)s[o].m(e,null);a=!0},p:function(t,r){var c=w(r,1)[0];if((!a||2&c)&&n!==(n=q("Blog - ".concat(t[1])))&&(document.title=n),1&c){var f;for(o=t[0],f=0;f<o.length;f+=1){var i=S(t,o,f);s[f]?(s[f].p(i,c),l(s[f],1)):(s[f]=z(i),s[f].c(),l(s[f],1),s[f].m(e,null))}for(E(),f=o.length;f<s.length;f+=1)u(f);R()}},i:function(t){if(!a){for(var n=0;n<o.length;n+=1)l(s[n]);a=!0}},o:function(t){s=s.filter(Boolean);for(var n=0;n<s.length;n+=1)p(s[n]);a=!1},d:function(t){t&&y(r),t&&y(e),B(s,t)}}}function C(t){return I.apply(this,arguments)}function I(){return(I=t(n.mark((function t(r){var e,a,o;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=r.params,r.query,t.next=3,this.fetch("blog/categories/".concat(e.category,".json"));case 3:return a=t.sent,t.next=6,a.json();case 6:if(o=t.sent,200!==a.status){t.next=11;break}return t.abrupt("return",{posts:o,category:e.category});case 11:this.error(a.status,data.message);case 12:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function L(t,n,r){var e=n.posts,a=n.category;return t.$set=function(t){"posts"in t&&r(0,e=t.posts),"category"in t&&r(1,a=t.category)},[e,a]}var M=function(t){r(f,c);var n,u=(n=f,function(){var t,r=D(n);if(H()){var e=D(this).constructor;t=Reflect.construct(r,arguments,e)}else t=r.apply(this,arguments);return k(this,t)});function f(t){var n;return e(this,f),n=u.call(this),a(s(n),t,L,A,o,{posts:0,category:1}),n}return f}();export default M;export{C as preload};
