/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-cssanimations-flexbox-flexboxlegacy-flexboxtweener-flexwrap-inlinesvg-svg-svgfilters-addtest-atrule-domprefixes-hasevent-mq-prefixed-prefixedcss-prefixedcssvalue-prefixes-testallprops-testprop-teststyles !*/
!function(e,n,t){function r(e,n){return typeof e===n}function i(){var e,n,t,i,o,s,a;for(var f in _)if(_.hasOwnProperty(f)){if(e=[],n=_[f],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(i=r(n.fn,"function")?n.fn():n.fn,o=0;o<e.length;o++)s=e[o],a=s.split("."),1===a.length?Modernizr[a[0]]=i:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=i),C.push((i?"":"no-")+a.join("-"))}}function o(e){var n=E.className,t=Modernizr._config.classPrefix||"";if(P&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),P?E.className.baseVal=n:E.className=n)}function s(e,n){if("object"==typeof e)for(var t in e)T(e,t)&&s(t,e[t]);else{e=e.toLowerCase();var r=e.split("."),i=Modernizr[r[0]];if(2==r.length&&(i=i[r[1]]),"undefined"!=typeof i)return Modernizr;n="function"==typeof n?n():n,1==r.length?Modernizr[r[0]]=n:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=n),o([(n&&0!=n?"":"no-")+r.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):P?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function l(){var e=n.body;return e||(e=f(P?"svg":"body"),e.fake=!0),e}function d(e,t,r,i){var o,s,a,u,d="modernizr",c=f("div"),p=l();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=i?i[r]:d+(r+1),c.appendChild(a);return o=f("style"),o.type="text/css",o.id="s"+d,(p.fake?p:c).appendChild(o),p.appendChild(c),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(n.createTextNode(e)),c.id=d,p.fake&&(p.style.background="",p.style.overflow="hidden",u=E.style.overflow,E.style.overflow="hidden",E.appendChild(p)),s=t(c,e),p.fake?(p.parentNode.removeChild(p),E.style.overflow=u,E.offsetHeight):c.parentNode.removeChild(c),!!s}function c(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var i;for(var o in e)if(e[o]in n)return t===!1?e[o]:(i=n[e[o]],r(i,"function")?c(i,t||n):i);return!1}function v(e,n){return!!~(""+e).indexOf(n)}function m(n,r){var i=n.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(u(n[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var o=[];i--;)o.push("("+u(n[i])+":"+r+")");return o=o.join(" or "),d("@supports ("+o+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,i,o){function s(){l&&(delete j.style,delete j.modElem)}if(o=r(o,"undefined")?!1:o,!r(i,"undefined")){var u=m(e,i);if(!r(u,"undefined"))return u}for(var l,d,c,p,h,g=["modernizr","tspan"];!j.style;)l=!0,j.modElem=f(g.shift()),j.style=j.modElem.style;for(c=e.length,d=0;c>d;d++)if(p=e[d],h=j.style[p],v(p,"-")&&(p=a(p)),j.style[p]!==t){if(o||r(i,"undefined"))return s(),"pfx"==n?p:!0;try{j.style[p]=i}catch(y){}if(j.style[p]!=h)return s(),"pfx"==n?p:!0}return s(),!1}function g(e,n,t,i,o){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+A.join(s+" ")+s).split(" ");return r(n,"string")||r(n,"undefined")?h(a,n,i,o):(a=(e+" "+b.join(s+" ")+s).split(" "),p(a,n,t))}function y(e,n,r){return g(e,t,t,n,r)}var C=[],_=[],w={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){_.push({name:e,fn:n,options:t})},addAsyncTest:function(e){_.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect),Modernizr.addTest("svgfilters",function(){var n=!1;try{n="SVGFEColorMatrixElement"in e&&2==SVGFEColorMatrixElement.SVG_FECOLORMATRIX_TYPE_SATURATE}catch(t){}return n});var x=w._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];w._prefixes=x;var S="Moz O ms Webkit",b=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=b;var T,E=n.documentElement,P="svg"===E.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;T=r(e,"undefined")||r(e.call,"undefined")?function(e,n){return n in e&&r(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),w._l={},w.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},w._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,r;for(e=0;e<t.length;e++)(r=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){w.addTest=s});var A=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=A;var N=function(n){var r,i=x.length,o=e.CSSRule;if("undefined"==typeof o)return t;if(!n)return!1;if(n=n.replace(/^@/,""),r=n.replace(/-/g,"_").toUpperCase()+"_RULE",r in o)return"@"+n;for(var s=0;i>s;s++){var a=x[s],f=a.toUpperCase()+"_"+r;if(f in o)return"@-"+a.toLowerCase()+"-"+n}return!1};w.atRule=N;var R=function(e){function t(n,t){var i;return n?(t&&"string"!=typeof t||(t=f(t||"div")),n="on"+n,i=n in t,!i&&r&&(t.setAttribute||(t=f("div")),t.setAttribute(n,""),i="function"==typeof t[n],t[n]!==e&&(t[n]=e),t.removeAttribute(n)),i):!1}var r=!("onblur"in n.documentElement);return t}();w.hasEvent=R;var z=function(e,n){var t=!1,r=f("div"),i=r.style;if(e in i){var o=b.length;for(i[e]=n,t=i[e];o--&&!t;)i[e]="-"+b[o]+"-"+n,t=i[e]}return""===t&&(t=!1),t};w.prefixedCSSValue=z,Modernizr.addTest("inlinesvg",function(){var e=f("div");return e.innerHTML="<svg/>","http://www.w3.org/2000/svg"==("undefined"!=typeof SVGRect&&e.firstChild&&e.firstChild.namespaceURI)});var L=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return d("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();w.mq=L;var O=(w.testStyles=d,{elem:f("modernizr")});Modernizr._q.push(function(){delete O.elem});var j={style:O.elem.style};Modernizr._q.unshift(function(){delete j.style});w.testProp=function(e,n,r){return h([e],t,n,r)};w.testAllProps=g;var M=w.prefixed=function(e,n,t){return 0===e.indexOf("@")?N(e):(-1!=e.indexOf("-")&&(e=a(e)),n?g(e,n,t):g(e,"pfx"))};w.prefixedCSS=function(e){var n=M(e);return n&&u(n)};w.testAllProps=y,Modernizr.addTest("flexbox",y("flexBasis","1px",!0)),Modernizr.addTest("cssanimations",y("animationName","a",!0)),Modernizr.addTest("flexboxlegacy",y("boxDirection","reverse",!0)),Modernizr.addTest("flexwrap",y("flexWrap","wrap",!0)),Modernizr.addTest("flexboxtweener",y("flexAlign","end",!0)),i(),o(C),delete w.addTest,delete w.addAsyncTest;for(var V=0;V<Modernizr._q.length;V++)Modernizr._q[V]();e.Modernizr=Modernizr}(window,document);