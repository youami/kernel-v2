(self.webpackChunkkernel_community=self.webpackChunkkernel_community||[]).push([[6505],{3099:function(t){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},1223:function(t,n,r){var e=r(5112),o=r(30),i=r(3070),u=e("unscopables"),a=Array.prototype;null==a[u]&&i.f(a,u,{configurable:!0,value:o(null)}),t.exports=function(t){a[u][t]=!0}},9670:function(t,n,r){var e=r(111);t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},1318:function(t,n,r){var e=r(5656),o=r(7466),i=r(1400),u=function(t){return function(n,r,u){var a,c=e(n),s=o(c.length),f=i(u,s);if(t&&r!=r){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},5417:function(t,n,r){var e=r(111),o=r(3157),i=r(5112)("species");t.exports=function(t,n){var r;return o(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!o(r.prototype)?e(r)&&null===(r=r[i])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},4326:function(t){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},9920:function(t,n,r){var e=r(6656),o=r(3887),i=r(1236),u=r(3070);t.exports=function(t,n){for(var r=o(n),a=u.f,c=i.f,s=0;s<r.length;s++){var f=r[s];e(t,f)||a(t,f,c(n,f))}}},8880:function(t,n,r){var e=r(9781),o=r(3070),i=r(9114);t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,r){var e=r(7293);t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,r){var e=r(7854),o=r(111),i=e.document,u=o(i)&&o(i.createElement);t.exports=function(t){return u?i.createElement(t):{}}},5268:function(t,n,r){var e=r(4326),o=r(7854);t.exports="process"==e(o.process)},8113:function(t,n,r){var e=r(5005);t.exports=e("navigator","userAgent")||""},7392:function(t,n,r){var e,o,i=r(7854),u=r(8113),a=i.process,c=a&&a.versions,s=c&&c.v8;s?o=(e=s.split("."))[0]+e[1]:u&&(!(e=u.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=u.match(/Chrome\/(\d+)/))&&(o=e[1]),t.exports=o&&+o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,r){var e=r(7854),o=r(1236).f,i=r(8880),u=r(1320),a=r(3505),c=r(9920),s=r(4705);t.exports=function(t,n){var r,f,l,p,d,v=t.target,x=t.global,h=t.stat;if(r=x?e:h?e[v]||a(v,{}):(e[v]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(d=o(r,f))&&d.value:r[f],!s(x?f:v+(h?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),u(r,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},6790:function(t,n,r){"use strict";var e=r(3157),o=r(7466),i=r(9974),u=function(t,n,r,a,c,s,f,l){for(var p,d=c,v=0,x=!!f&&i(f,l,3);v<a;){if(v in r){if(p=x?x(r[v],v,n):r[v],s>0&&e(p))d=u(t,n,p,o(p.length),d,s-1)-1;else{if(d>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[d]=p}d++}v++}return d};t.exports=u},9974:function(t,n,r){var e=r(3099);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},5005:function(t,n,r){var e=r(857),o=r(7854),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},7854:function(t,n,r){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},6656:function(t,n,r){var e=r(7908),o={}.hasOwnProperty;t.exports=function(t,n){return o.call(e(t),n)}},3501:function(t){t.exports={}},490:function(t,n,r){var e=r(5005);t.exports=e("document","documentElement")},4664:function(t,n,r){var e=r(9781),o=r(7293),i=r(317);t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,r){var e=r(7293),o=r(4326),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},2788:function(t,n,r){var e=r(5465),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},9909:function(t,n,r){var e,o,i,u=r(8536),a=r(7854),c=r(111),s=r(8880),f=r(6656),l=r(5465),p=r(6200),d=r(3501),v="Object already initialized",x=a.WeakMap;if(u){var h=l.state||(l.state=new x),y=h.get,g=h.has,m=h.set;e=function(t,n){if(g.call(h,t))throw new TypeError(v);return n.facade=t,m.call(h,t,n),n},o=function(t){return y.call(h,t)||{}},i=function(t){return g.call(h,t)}}else{var b=p("state");d[b]=!0,e=function(t,n){if(f(t,b))throw new TypeError(v);return n.facade=t,s(t,b,n),n},o=function(t){return f(t,b)?t[b]:{}},i=function(t){return f(t,b)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(n){var r;if(!c(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}}},3157:function(t,n,r){var e=r(4326);t.exports=Array.isArray||function(t){return"Array"==e(t)}},4705:function(t,n,r){var e=r(7293),o=/#|\.prototype\./,i=function(t,n){var r=a[u(t)];return r==s||r!=c&&("function"==typeof n?e(n):!!n)},u=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},a=i.data={},c=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},111:function(t){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},1913:function(t){t.exports=!1},133:function(t,n,r){var e=r(5268),o=r(7392),i=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!i((function(){return!Symbol.sham&&(e?38===o:o>37&&o<41)}))},8536:function(t,n,r){var e=r(7854),o=r(2788),i=e.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},30:function(t,n,r){var e,o=r(9670),i=r(6048),u=r(748),a=r(3501),c=r(490),s=r(317),f=r(6200),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"</"+"script>"},v=function(){try{e=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,n;v=e?function(t){t.write(d("")),t.close();var n=t.parentWindow.Object;return t=null,n}(e):((n=s("iframe")).style.display="none",c.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var r=u.length;r--;)delete v.prototype[u[r]];return v()};a[l]=!0,t.exports=Object.create||function(t,n){var r;return null!==t?(p.prototype=o(t),r=new p,p.prototype=null,r[l]=t):r=v(),void 0===n?r:i(r,n)}},6048:function(t,n,r){var e=r(9781),o=r(3070),i=r(9670),u=r(1956);t.exports=e?Object.defineProperties:function(t,n){i(t);for(var r,e=u(n),a=e.length,c=0;a>c;)o.f(t,r=e[c++],n[r]);return t}},3070:function(t,n,r){var e=r(9781),o=r(4664),i=r(9670),u=r(7593),a=Object.defineProperty;n.f=e?a:function(t,n,r){if(i(t),n=u(n,!0),i(r),o)try{return a(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},1236:function(t,n,r){var e=r(9781),o=r(5296),i=r(9114),u=r(5656),a=r(7593),c=r(6656),s=r(4664),f=Object.getOwnPropertyDescriptor;n.f=e?f:function(t,n){if(t=u(t),n=a(n,!0),s)try{return f(t,n)}catch(r){}if(c(t,n))return i(!o.f.call(t,n),t[n])}},8006:function(t,n,r){var e=r(6324),o=r(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},6324:function(t,n,r){var e=r(6656),o=r(5656),i=r(1318).indexOf,u=r(3501);t.exports=function(t,n){var r,a=o(t),c=0,s=[];for(r in a)!e(u,r)&&e(a,r)&&s.push(r);for(;n.length>c;)e(a,r=n[c++])&&(~i(s,r)||s.push(r));return s}},1956:function(t,n,r){var e=r(6324),o=r(748);t.exports=Object.keys||function(t){return e(t,o)}},5296:function(t,n){"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!r.call({1:2},1);n.f=o?function(t){var n=e(this,t);return!!n&&n.enumerable}:r},3887:function(t,n,r){var e=r(5005),o=r(8006),i=r(5181),u=r(9670);t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(u(t)),r=i.f;return r?n.concat(r(t)):n}},857:function(t,n,r){var e=r(7854);t.exports=e},1320:function(t,n,r){var e=r(7854),o=r(8880),i=r(6656),u=r(3505),a=r(2788),c=r(9909),s=c.get,f=c.enforce,l=String(String).split("String");(t.exports=function(t,n,r,a){var c,s=!!a&&!!a.unsafe,p=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),(c=f(r)).source||(c.source=l.join("string"==typeof n?n:""))),t!==e?(s?!d&&t[n]&&(p=!0):delete t[n],p?t[n]=r:o(t,n,r)):p?t[n]=r:u(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||a(this)}))},4488:function(t){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},3505:function(t,n,r){var e=r(7854),o=r(8880);t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},6200:function(t,n,r){var e=r(2309),o=r(9711),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,r){var e=r(7854),o=r(3505),i="__core-js_shared__",u=e[i]||o(i,{});t.exports=u},2309:function(t,n,r){var e=r(1913),o=r(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.11.0",mode:e?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},1400:function(t,n,r){var e=r(9958),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},5656:function(t,n,r){var e=r(8361),o=r(4488);t.exports=function(t){return e(o(t))}},9958:function(t){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},7466:function(t,n,r){var e=r(9958),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},7908:function(t,n,r){var e=r(4488);t.exports=function(t){return Object(e(t))}},7593:function(t,n,r){var e=r(111);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},9711:function(t){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},3307:function(t,n,r){var e=r(133);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:function(t,n,r){var e=r(7854),o=r(2309),i=r(6656),u=r(9711),a=r(133),c=r(3307),s=o("wks"),f=e.Symbol,l=c?f:f&&f.withoutSetter||u;t.exports=function(t){return i(s,t)&&(a||"string"==typeof s[t])||(a&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},6535:function(t,n,r){"use strict";var e=r(2109),o=r(6790),i=r(7908),u=r(7466),a=r(3099),c=r(5417);e({target:"Array",proto:!0},{flatMap:function(t){var n,r=i(this),e=u(r.length);return a(t),(n=c(r,0)).length=o(n,r,r,e,0,1,t,arguments.length>1?arguments[1]:void 0),n}})},9244:function(t,n,r){r(1223)("flatMap")},9832:function(t,n,r){"use strict";r.d(n,{Z:function(){return H}});var e=r(6156),o=r(7294),i=r(977),u=r(4029),a=r(4546),c=r(4293),s=r.n(c),f=r(5444),l=r(9499),p=r(2283),d=r(5452),v=r(9873),x=r(7329),h=(r(6535),r(9244),r(528));function y(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(r)return(r=r.call(t)).next.bind(r);if(Array.isArray(t)||(r=function(t,n){if(!t)return;if("string"==typeof t)return g(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(t,n)}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function g(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var m=r(7460);function b(t,n){return n||(n=t.slice(0)),t.raw=n,t}var j,w,O,S,P,E=r(7169),A=r(2074),k=r(4126),C=(r(7669),r(4042),r(3624)),T=r.n(C);var M=(0,E.Z)(u.xu)(j||(j=b(["\n  position: relative;\n  width: 100%;\n"]))),z=(0,E.Z)(p.rU)(w||(w=b([""]))),D=(0,E.Z)(u.xv)(O||(O=b(["\n  margin: 0;\n  display: flex;\n  align-items: center;\n"]))),I=(0,E.Z)(u.xv)(S||(S=b(["\n  margin: 0;\n"]))),_=(0,E.Z)(k.E.div)(P||(P=b(["\n  display: flex;\n  align-items: center;\n"]))),L={duration:.3,type:"spring",ease:"easeIn",damping:8},$={duration:.3,type:"spring",ease:"easeOut",damping:7,stiffness:150},F={rest:{x:0,transition:L},hover:{x:10,transition:$}},N={rest:{x:0,transition:L},hover:{x:-10,transition:$}},Z=function(t){var n=t.sidenavData.items,r=t.pagePath,e=n[0],a=(0,d.$G)().t,c=(0,o.useMemo)((function(){return e?function(t,n){if(!n)throw new Error("must provide pagePath");var r,e,o,i=t.items,u=T()(n,1).join("");return t.url===u&&(r=t,e=i[0]),i.forEach((function(t,n){var a,c,s,f=i[n-1],l=i[n+1],p=i[n],d=t.items;t.url===u&&(r=t,f&&(s=null==f||null===(c=f.items)||void 0===c?void 0:c.length,o=s?f.items[s-1]:f),e=null!=p&&null!==(a=p.items)&&void 0!==a&&a.length?p.items[0]:l),t.items&&d.forEach((function(t,n){if(t.url===u){r=t;var i=d[n-1];i?o=i:p&&(o=p);var a=d[n+1];e=a||l}}))})),{currentSection:r,nextSection:e,previousSection:o}}(e,r):{}}),[e,r]),s=c.nextSection,f=c.previousSection;return(0,i.jsx)(M,null,(0,i.jsx)(u.kC,{sx:{justifyContent:"space-between",py:["20px","20px","14px"],px:["10px"],maxWidth:"1364px",margin:"0 auto",width:"100%"}},f?(0,i.jsx)(k.E.div,{whileHover:"hover"},(0,i.jsx)(z,{to:f.url,sx:{color:"text"}},(0,i.jsx)(D,{sx:{fontSize:"1rem","@media screen and (min-width: 640px)":{fontSize:"1rem"}}},(0,i.jsx)(_,{variants:N},(0,i.jsx)(A.J,{sx:{transform:"rotate(180deg)",marginRight:"3px"},size:18,name:"arrow_right"})),a("Previous")),(0,i.jsx)(I,{sx:{fontSize:"1.3rem","@media screen and (min-width: 640px)":{fontSize:"1.5rem"}}},f.title))):(0,i.jsx)("span",null),s?(0,i.jsx)(k.E.div,{whileHover:"hover"},(0,i.jsx)(z,{to:s.url,sx:{color:"text"}},(0,i.jsx)(D,{sx:{fontSize:"0.9rem","@media screen and (min-width: 640px)":{fontSize:"1rem"}}},a("Next"),(0,i.jsx)(_,{variants:F},(0,i.jsx)(A.J,{size:18,name:"arrow_right",sx:{marginLeft:"3px"}}))),(0,i.jsx)(I,{sx:{fontSize:"1.3rem","@media screen and (min-width: 640px)":{fontSize:"1.5rem"}}},s.title))):(0,i.jsx)("span",null)))};function W(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}var H=function(t){var n,r,c=(0,d.$G)(),g=c.locale,b=c.t,j=c.DEFAULT_LOCALE,w=(0,f.useStaticQuery)("263894237").allMdx,O=t.children,S=t.pageContext,P=t.uri,E=S.pagePath,A=S.frontmatter,k=A.title,C=A.description,T=A.keywords,M=A.featuredImage,z=A.status,D=A.hideLanguageSelector,I=A.hideBreadcrumbs;if(A.isCorePage)return(0,i.jsx)(o.Fragment,null,O);var _=E.replace(/^\/|\/$/g,"").split("/").slice(1),L=_.join("/"),$=function(t,n,r,e,o){void 0===t&&(t=[]),void 0===r&&(r="en"),void 0===e&&(e="en");var i=function(t,r){return t.filter((function(t){var e=t.node;return-1!==e.fileAbsolutePath.indexOf("/"+r+"/"+n+"/")&&-1===e.fileAbsolutePath.indexOf("/"+r+"/"+n+"/index.mdx")})).flatMap((function(t){var n=t.node,e=n.headings,o=n.frontmatter,i=n.fileAbsolutePath,u=i.slice(i.indexOf("/"+r+"/"),i.length).replace(/(.mdx|index.mdx|.md)$/gm,"").replace(/\/$/,""),a=u.replace(/^\/([\w]{2})\//,"/"),c=u.split("/").slice(-1)[0];return{title:o.title||(e.length>0?e[0].value:null)||c,slug:u,rawSlug:a,slugPart:c,order:o.order}}))},u=i(t,r),a=r!==e?i(t,e):[],c=(0,x.Z)(a),s=a.length<=0?u:u.map((function(t){var n=a.find((function(n,r){var e=n.rawSlug===t.rawSlug;return e&&c.splice(r,1),e}));return null!=n?n:t})).concat(c),f=n?[{part:n,title:(0,h.Qs)(n.replace(/-|_|\./g," ")),url:"/"+e+"/"+n}]:[];return{sidenavData:s.reduce((function(t,r){for(var i,u=r.title,a=r.slug,c=r.rawSlug,s=r.order,l=c.split("/"),p=t.items,d=function(){var t=i.value,r=p&&p.find((function(n){return n.slugPart===t}));r?r.items||(r.items=[]):(r={slugPart:t,title:(0,h.Qs)(t.replace(/-|_|\./g," ")),items:[],url:"/"+e+"/"+n},p.push(r)),p=r.items.sort((function(t,n){return null===t.order&&null!==n.order?1:null!==t.order&&null===n.order?-1:null===t.order&&null===n.order||t.order===n.order?t.title===n.title?0:t.title.localeCompare(n.title):t.order<n.order?-1:t.order>n.order?1:0}))},v=y(l.slice(1,-1));!(i=v()).done;)d();var x=l.length-1,g=p.find((function(t){return t.slugPart===l[x]}));return g?(g.url=a,g.title=u,g.order=s,o.includes(g.slugPart)&&f.push({part:g.slugPart,title:g.title,url:a})):(p.push({slugPart:l[x],url:a,items:[],title:u,order:s}),o.includes(l[x])&&f.push({part:l[x],title:u,url:a}),p.sort((function(t,n){return null===t.order&&null!==n.order?1:null!==t.order&&null===n.order?-1:null===t.order&&null===n.order||t.order===n.order?t.title===n.title?0:t.title.localeCompare(n.title):t.order<n.order?-1:t.order>n.order?1:0}))),t}),{items:[]}),breadcrumbData:f}}(w.edges,_[0],j,g,_),F=$.sidenavData,N=$.breadcrumbData,H=w.edges.filter((function(t){var n=t.node;return(0,h.af)(n).replace(/^\/|\/$/g,"").split("/").slice(1).join("/")===L&&(0,h.bL)(n.fileAbsolutePath)!==g})).map((function(t){var n=t.node;return{value:(0,h.af)(n),label:b("Language",null,null,(0,h.bL)(n.fileAbsolutePath))}})),G=null===(n=w.edges.find((function(t){var n=(0,h.af)(t.node);return t.node.fileAbsolutePath.includes("index.mdx")||(n+="/"),!s()(t.node)&&n===E})))||void 0===n?void 0:n.node.tableOfContents,U="object"==typeof z?function(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?W(Object(r),!0).forEach((function(n){(0,e.Z)(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))}))}return t}({children:z.text},z):{children:z},J=(0,l.useLocation)().pathname.split("/")[2],Q=k||function(){var t=o.Children.toArray(O).find((function(t){return"h1"===t.props.mdxType}));if(void 0!==t)return t.props.children}()||P.split("/").pop(),R=void 0!==J&&""!==J,B=S.frontmatter&&!S.frontmatter.hideSidenav&&R,q=R&&!D,K=!s()(G)&&0!==(null===(r=G.items)||void 0===r?void 0:r.length),V=!I||R&&!D,X={title:Q,description:C,keywords:T,featuredImage:M},Y=q||K?234:0;return B&&(Y+=256),(0,i.jsx)(o.Fragment,null,B&&(0,i.jsx)(u.xu,{sx:{width:"256px",display:["none","none","initial"]}},(0,i.jsx)(a.ZP,{boundaryElement:".content-boundary",dontUpdateHolderHeightWhenSticky:!0,style:{position:"relative"},hideOnBoundaryHit:!1,sx:{display:["none","none","initial"]}},(0,i.jsx)(p.t7,{data:F,currentPath:E}))),(0,i.jsx)(u.xu,{as:"article",sx:{width:["100%","100%","calc(100% - "+Y+"px)"],mt:R?[4,4,"64px"]:0,pl:R?[4,4,"32px"]:0,pr:R?[4,4,0]:0,pb:4}},(0,i.jsx)(m.HJ,X),z&&(0,i.jsx)(u.xu,{sx:{marginTop:R?2:0}},(0,i.jsx)(v.E_,Object.assign({sticky:!0},U,{sx:{width:"100%"}}))),V&&(0,i.jsx)(u.kC,{sx:{justifyContent:"space-between",position:"relative",alignItems:"flex-start",flexWrap:["wrap","wrap","unset"],px:R?0:[3,3,0]}},(0,i.jsx)(p.Oo,{data:N,pathDirs:_})),(0,i.jsx)(u.xu,{sx:{display:["block","block","none"]}},q&&(0,i.jsx)(d.$z,{data:H,pagePath:E}),K&&(0,i.jsx)(p.o5,{isMobile:!0,data:G})),(0,i.jsx)(u.xu,null,O),(0,i.jsx)(Z,{sidenavData:F,pagePath:E})),(0,i.jsx)(u.xu,{sx:{position:"relative"}},q&&(0,i.jsx)(d.$z,{sx:{display:["none","none","block"]},data:H,pagePath:E}),K&&(0,i.jsx)(p.o5,{styles:{display:["none","none","block"]},data:G})),(0,i.jsx)(p.zM,{sidenavData:F}))}},4259:function(t){t.exports=function(t,n,r){var e=-1,o=t.length;n<0&&(n=-n>o?0:o+n),(r=r>o?o:r)<0&&(r+=o),o=n>r?0:r-n>>>0,n>>>=0;for(var i=Array(o);++e<o;)i[e]=t[e+n];return i}},7561:function(t,n,r){var e=r(7990),o=/^\s+/;t.exports=function(t){return t?t.slice(0,e(t)+1).replace(o,""):t}},7990:function(t){var n=/\s/;t.exports=function(t){for(var r=t.length;r--&&n.test(t.charAt(r)););return r}},3624:function(t,n,r){var e=r(4259),o=r(554);t.exports=function(t,n,r){var i=null==t?0:t.length;return i?(n=r||void 0===n?1:o(n),e(t,0,(n=i-n)<0?0:n)):[]}},3218:function(t){t.exports=function(t){var n=typeof t;return null!=t&&("object"==n||"function"==n)}},8601:function(t,n,r){var e=r(4841),o=1/0;t.exports=function(t){return t?(t=e(t))===o||t===-1/0?17976931348623157e292*(t<0?-1:1):t==t?t:0:0===t?t:0}},554:function(t,n,r){var e=r(8601);t.exports=function(t){var n=e(t),r=n%1;return n==n?r?n-r:n:0}},4841:function(t,n,r){var e=r(7561),o=r(3218),i=r(3448),u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return NaN;if(o(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=o(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=e(t);var r=a.test(t);return r||c.test(t)?s(t.slice(2),r?2:8):u.test(t)?NaN:+t}}}]);
//# sourceMappingURL=11d462204f6170024dd9d3ee5319e4a385ee38ad-b3ba4915f5b49b18a226.js.map