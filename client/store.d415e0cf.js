function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n,e,o){if(t){const r=s(t,n,e,o);return t[0](r)}}function s(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if("object"==typeof n.dirty){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function a(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function d(t){t.parentNode.removeChild(t)}function p(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function h(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function $(){return m(" ")}function y(){return m("")}function b(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function x(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t){return Array.from(t.childNodes)}function w(t,n,e,o){for(let o=0;o<t.length;o+=1){const r=t[o];if(r.nodeName===n){for(let t=0;t<r.attributes.length;t+=1){const n=r.attributes[t];e[n.name]||r.removeAttribute(n.name)}return t.splice(o,1)[0]}}return o?g(n):h(n)}function v(t,n){for(let e=0;e<t.length;e+=1){const o=t[e];if(3===o.nodeType)return o.data=""+n,t.splice(e,1)[0]}return m(n)}function E(t){return v(t," ")}function A(t,n){n=""+n,t.data!==n&&(t.data=n)}let j;function N(t){j=t}function k(t,n){(function(){if(!j)throw new Error("Function called outside component initialization");return j})().$$.context.set(t,n)}const S=[],C=[],O=[],q=[],z=Promise.resolve();let B=!1;function F(t){O.push(t)}function L(){const t=new Set;do{for(;S.length;){const t=S.shift();N(t),M(t.$$)}for(;C.length;)C.pop()();for(let n=0;n<O.length;n+=1){const e=O[n];t.has(e)||(e(),t.add(e))}O.length=0}while(S.length);for(;q.length;)q.pop()();B=!1}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(F)}}const T=new Set;let D;function G(){D={r:0,c:[],p:D}}function H(){D.r||r(D.c),D=D.p}function I(t,n){t&&t.i&&(T.delete(t),t.i(n))}function J(t,n,e,o){if(t&&t.o){if(T.has(t))return;T.add(t),D.c.push(()=>{T.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}function P(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],i=n[c];if(i){for(const t in u)t in i||(o[t]=1);for(const t in i)r[t]||(e[t]=i[t],r[t]=1);t[c]=i}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function K(t){return"object"==typeof t&&null!==t?t:{}}function Q(t){t&&t.c()}function R(t,n){t&&t.l(n)}function U(t,n,o){const{fragment:u,on_mount:i,on_destroy:s,after_update:f}=t.$$;u&&u.m(n,o),F(()=>{const n=i.map(e).filter(c);s?s.push(...n):r(n),t.$$.on_mount=[]}),f.forEach(F)}function V(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function W(t,n){-1===t.$$.dirty[0]&&(S.push(t),B||(B=!0,z.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function X(n,e,c,u,i,s,f=[-1]){const a=j;N(n);const l=e.props||{},d=n.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:f};let p=!1;d.ctx=c?c(n,l,(t,e,o=e)=>(d.ctx&&i(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),p&&W(n,t)),e)):[],d.update(),p=!0,r(d.before_update),d.fragment=!!u&&u(d.ctx),e.target&&(e.hydrate?d.fragment&&d.fragment.l(_(e.target)):d.fragment&&d.fragment.c(),e.intro&&I(n.$$.fragment),U(n,e.target,e.anchor),L()),N(a)}class Y{$destroy(){V(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const Z=[];function tt(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!Z.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),Z.push(e,n)}if(t){for(let t=0;t<Z.length;t+=2)Z[t][0](Z[t+1]);Z.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,i=t){const s=[u,i];return r.push(s),1===r.length&&(o=e(c)||t),u(n),()=>{const t=r.indexOf(s);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const nt=tt(!0);export{V as A,A as B,y as C,n as D,P as E,K as F,k as G,G as H,H as I,tt as J,Y as S,_ as a,v as b,w as c,d,h as e,x as f,l as g,a as h,X as i,$ as j,E as k,p as l,g as m,t as n,b as o,nt as p,i as q,Q as r,u as s,m as t,R as u,U as v,s as w,f as x,I as y,J as z};
