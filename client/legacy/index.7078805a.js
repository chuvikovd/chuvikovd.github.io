import{I as e,J as a,K as t,a as r,b as i,i as s,s as o,c as n,S as u,e as l,t as c,q as h,d as f,f as m,g as d,r as p,h as $,j as g,k as v,l as y,u as b,H as w,m as x,n as k,E as R,o as C,p as j}from"./client.b22ee716.js";import{g as z}from"./utils.ba430a32.js";var E=e((function(e,r){!function(t,r){"function"==typeof a?e.exports=r():t.pluralize=r()}(t,(function(){var e=[],a=[],t={},r={},i={};function s(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function o(e,a){return e===a?a:e===e.toLowerCase()?a.toLowerCase():e===e.toUpperCase()?a.toUpperCase():e[0]===e[0].toUpperCase()?a.charAt(0).toUpperCase()+a.substr(1).toLowerCase():a.toLowerCase()}function n(e,a){return e.replace(/\$(\d{1,2})/g,(function(e,t){return a[t]||""}))}function u(e,a){return e.replace(a[0],(function(t,r){var i=n(a[1],arguments);return o(""===t?e[r-1]:t,i)}))}function l(e,a,r){if(!e.length||t.hasOwnProperty(e))return a;for(var i=r.length;i--;){var s=r[i];if(s[0].test(a))return u(a,s)}return a}function c(e,a,t){return function(r){var i=r.toLowerCase();return a.hasOwnProperty(i)?o(r,i):e.hasOwnProperty(i)?o(r,e[i]):l(i,r,t)}}function h(e,a,t,r){return function(r){var i=r.toLowerCase();return!!a.hasOwnProperty(i)||!e.hasOwnProperty(i)&&l(i,i,t)===i}}function f(e,a,t){return(t?a+" ":"")+(1===a?f.singular(e):f.plural(e))}return f.plural=c(i,r,e),f.isPlural=h(i,r,e),f.singular=c(r,i,a),f.isSingular=h(r,i,a),f.addPluralRule=function(a,t){e.push([s(a),t])},f.addSingularRule=function(e,t){a.push([s(e),t])},f.addUncountableRule=function(e){"string"!=typeof e?(f.addPluralRule(e,"$0"),f.addSingularRule(e,"$0")):t[e.toLowerCase()]=!0},f.addIrregularRule=function(e,a){a=a.toLowerCase(),e=e.toLowerCase(),i[e]=a,r[a]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return f.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return f.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return f.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(f.addUncountableRule),f}))}));function P(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function q(e,a,t){var r=e.slice();return r[1]=a[t],r}function L(e){var a,t,r,i,s,o,n,u,w,x=e[1]+"",k=e[0][e[1]]+"",R=E("post",e[0][e[1]])+"";return{c:function(){a=l("a"),t=l("h2"),r=c(x),i=c(" - "),s=c(k),o=h(),n=c(R),u=h(),this.h()},l:function(e){a=f(e,"A",{rel:!0,href:!0});var l=m(a);t=f(l,"H2",{class:!0});var c=m(t);r=d(c,x),i=d(c," - "),s=d(c,k),o=p(c),n=d(c,R),c.forEach($),u=p(l),l.forEach($),this.h()},h:function(){g(t,"class","font-display text-2xl md:text-3xl font-bold hover:text-red\n        leading-tight mb-2"),g(a,"rel","prefetch"),g(a,"href",w="blog/categories/".concat(e[1]))},m:function(e,l){v(e,a,l),y(a,t),y(t,r),y(t,i),y(t,s),y(t,o),y(t,n),y(a,u)},p:function(e,t){1&t&&x!==(x=e[1]+"")&&b(r,x),1&t&&k!==(k=e[0][e[1]]+"")&&b(s,k),1&t&&R!==(R=E("post",e[0][e[1]])+"")&&b(n,R),1&t&&w!==(w="blog/categories/".concat(e[1]))&&g(a,"href",w)},d:function(e){e&&$(a)}}}function O(e){var a,t,r;document.title=a=z("Categories");for(var i=Object.keys(e[0]),s=[],o=0;o<i.length;o+=1)s[o]=L(q(e,i,o));return{c:function(){t=h(),r=l("div");for(var e=0;e<s.length;e+=1)s[e].c();this.h()},l:function(e){w('[data-svelte="svelte-1gkwpmu"]',document.head).forEach($),t=p(e),r=f(e,"DIV",{class:!0});for(var a=m(r),i=0;i<s.length;i+=1)s[i].l(a);a.forEach($),this.h()},h:function(){g(r,"class","w-full mt-8 pb-8")},m:function(e,a){v(e,t,a),v(e,r,a);for(var i=0;i<s.length;i+=1)s[i].m(r,null)},p:function(e,t){var o=x(t,1)[0];if(0&o&&a!==(a=z("Categories"))&&(document.title=a),1&o){var n;for(i=Object.keys(e[0]),n=0;n<i.length;n+=1){var u=q(e,i,n);s[n]?s[n].p(u,o):(s[n]=L(u),s[n].c(),s[n].m(r,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=i.length}},i:k,o:k,d:function(e){e&&$(t),e&&$(r),R(s,e)}}}function S(e){e.params,e.query;return this.fetch("blog/categories.json").then((function(e){return e.json()})).then((function(e){return{categories:e}}))}function U(e,a,t){var r=a.categories;return e.$set=function(e){"categories"in e&&t(0,r=e.categories)},[r]}var I=function(e){r(l,u);var a,t=(a=l,function(){var e,t=C(a);if(P()){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return j(this,e)});function l(e){var a;return i(this,l),a=t.call(this),s(n(a),e,U,O,o,{categories:0}),a}return l}();export default I;export{S as preload};
