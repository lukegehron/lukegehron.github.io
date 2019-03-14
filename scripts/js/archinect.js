/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */;
/*! Copyright (c) 2008 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.0.3
 * Requires jQuery 1.1.3+
 * Docs: http://docs.jquery.com/Plugins/livequery
 */

(function($) {

$.extend($.fn, {
	livequery: function(type, fn, fn2) {
		var self = this, q;

		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;

		// See if Live Query already exists
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				type == query.type && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) )
					// Found the query, exit the each loop
					return (q = query) && false;
		});

		// Create new Live Query if it wasn't found
		q = q || new $.livequery(this.selector, this.context, type, fn, fn2);

		// Make sure it is running
		q.stopped = false;

		// Run it immediately for the first time
		q.run();

		// Contnue the chain
		return this;
	},

	expire: function(type, fn, fn2) {
		var self = this;

		// Handle different call patterns
		if ($.isFunction(type))
			fn2 = fn, fn = type, type = undefined;

		// Find the Live Query based on arguments and stop it
		$.each( $.livequery.queries, function(i, query) {
			if ( self.selector == query.selector && self.context == query.context &&
				(!type || type == query.type) && (!fn || fn.$lqguid == query.fn.$lqguid) && (!fn2 || fn2.$lqguid == query.fn2.$lqguid) && !this.stopped )
					$.livequery.stop(query.id);
		});

		// Continue the chain
		return this;
	}
});

$.livequery = function(selector, context, type, fn, fn2) {
	this.selector = selector;
	this.context  = context || document;
	this.type     = type;
	this.fn       = fn;
	this.fn2      = fn2;
	this.elements = [];
	this.stopped  = false;

	// The id is the index of the Live Query in $.livequery.queries
	this.id = $.livequery.queries.push(this)-1;

	// Mark the functions for matching later on
	fn.$lqguid = fn.$lqguid || $.livequery.guid++;
	if (fn2) fn2.$lqguid = fn2.$lqguid || $.livequery.guid++;

	// Return the Live Query
	return this;
};

$.livequery.prototype = {
	stop: function() {
		var query = this;

		if ( this.type )
			// Unbind all bound events
			this.elements.unbind(this.type, this.fn);
		else if (this.fn2)
			// Call the second function for all matched elements
			this.elements.each(function(i, el) {
				query.fn2.apply(el);
			});

		// Clear out matched elements
		this.elements = [];

		// Stop the Live Query from running until restarted
		this.stopped = true;
	},

	run: function() {
		// Short-circuit if stopped
		if ( this.stopped ) return;
		var query = this;

		var oEls = this.elements,
			els  = $(this.selector, this.context),
			nEls = els.not(oEls);

		// Set elements to the latest set of matched elements
		this.elements = els;

		if (this.type) {
			// Bind events to newly matched elements
			nEls.bind(this.type, this.fn);

			// Unbind events to elements no longer matched
			if (oEls.length > 0)
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						$.event.remove(el, query.type, query.fn);
				});
		}
		else {
			// Call the first function for newly matched elements
			nEls.each(function() {
				query.fn.apply(this);
			});

			// Call the second function for elements no longer matched
			if ( this.fn2 && oEls.length > 0 )
				$.each(oEls, function(i, el) {
					if ( $.inArray(el, els) < 0 )
						query.fn2.apply(el);
				});
		}
	}
};

$.extend($.livequery, {
	guid: 0,
	queries: [],
	queue: [],
	running: false,
	timeout: null,

	checkQueue: function() {
		if ( $.livequery.running && $.livequery.queue.length ) {
			var length = $.livequery.queue.length;
			// Run each Live Query currently in the queue
			while ( length-- )
				$.livequery.queries[ $.livequery.queue.shift() ].run();
		}
	},

	pause: function() {
		// Don't run anymore Live Queries until restarted
		$.livequery.running = false;
	},

	play: function() {
		// Restart Live Queries
		$.livequery.running = true;
		// Request a run of the Live Queries
		$.livequery.run();
	},

	registerPlugin: function() {
		$.each( arguments, function(i,n) {
			// Short-circuit if the method doesn't exist
			if (!$.fn[n]) return;

			// Save a reference to the original method
			var old = $.fn[n];

			// Create a new method
			$.fn[n] = function() {
				// Call the original method
				var r = old.apply(this, arguments);

				// Request a run of the Live Queries
				$.livequery.run();

				// Return the original methods result
				return r;
			}
		});
	},

	run: function(id) {
		if (id != undefined) {
			// Put the particular Live Query in the queue if it doesn't already exist
			if ( $.inArray(id, $.livequery.queue) < 0 )
				$.livequery.queue.push( id );
		}
		else
			// Put each Live Query in the queue if it doesn't already exist
			$.each( $.livequery.queries, function(id) {
				if ( $.inArray(id, $.livequery.queue) < 0 )
					$.livequery.queue.push( id );
			});

		// Clear timeout if it already exists
		if ($.livequery.timeout) clearTimeout($.livequery.timeout);
		// Create a timeout to check the queue and actually run the Live Queries
		$.livequery.timeout = setTimeout($.livequery.checkQueue, 20);
	},

	stop: function(id) {
		if (id != undefined)
			// Stop are particular Live Query
			$.livequery.queries[ id ].stop();
		else
			// Stop all Live Queries
			$.each( $.livequery.queries, function(id) {
				$.livequery.queries[ id ].stop();
			});
	}
});

// Register core DOM manipulation methods
$.livequery.registerPlugin('append', 'prepend', 'after', 'before', 'wrap', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'empty', 'remove');

// Run Live Queries when the Document is ready
$(function() { $.livequery.play(); });


// Save a reference to the original init method
var init = $.prototype.init;

// Create a new init method that exposes two new properties: selector and context
$.prototype.init = function(a,c) {
	// Call the original init and save the result
	var r = init.apply(this, arguments);

	// Copy over properties if they exist already
	if (a && a.selector)
		r.context = a.context, r.selector = a.selector;

	// Set properties
	if ( typeof a == 'string' )
		r.context = c || document, r.selector = a;

	// Return the result
	return r;
};

// Give the init function the jQuery prototype for later instantiation (needed after Rev 4091)
$.prototype.init.prototype = $.prototype;

})(jQuery);;
/*
 * jQuery Fast Confirm
 * version: 2.1.1 (2011-03-23)
 * @requires jQuery v1.3.2 or later
 *
 * Examples and documentation at: http://blog.pierrejeanparra.com/jquery-plugins/fast-confirm/
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
;(function ($) {

	var methods = {

		init: function (options) {
			var params;

			if (!this.length) {
				return this;
			}

			$.fastConfirm = {
				defaults: {
					position: 'bottom',
					offset: {top: 0, left: 0},
					zIndex: 10000,
					eventToBind: false,
					questionText: "Are you sure?",
					proceedText: "Yes",
					cancelText: "No",
					targetElement: null,
					unique: false,
					fastConfirmClass: "fast_confirm",
					onProceed: function ($trigger) {
						$trigger.fastConfirm('close');
						return true;
					},
					onCancel: function ($trigger) {
						$trigger.fastConfirm('close');
						return false;
					}
				}
			};

			params = $.extend($.fastConfirm.defaults, options || {});

			return this.each(function () {
				var trigger = this,
					$trigger = $(this),
					$confirmYes = $('<button class="' + params.fastConfirmClass + '_proceed">' + params.proceedText + '</button>'),
					$confirmNo = $('<button class="' + params.fastConfirmClass + '_cancel">' + params.cancelText + '</button>'),
					$confirmBox = $('<div class="' + params.fastConfirmClass + '"><div class="' + params.fastConfirmClass + '_arrow_border"></div><div class="' + params.fastConfirmClass + '_arrow"></div>' + params.questionText + '<br/></div>'),
					$arrow = $('div.' + params.fastConfirmClass + '_arrow', $confirmBox),
					$arrowBorder = $('div.' + params.fastConfirmClass + '_arrow_border', $confirmBox),
					confirmBoxArrowClass,
					confirmBoxArrowBorderClass,
					$target = params.targetElement ? $(params.targetElement, $trigger) : $trigger,
					offset = $target.offset(),
					topOffset,
					leftOffset,

					displayBox = function () {
						if (!$trigger.data('fast_confirm.box')) {
							$trigger.data('fast_confirm.params.fastConfirmClass', params.fastConfirmClass);

							// Close all other confirm boxes if necessary
							if (params.unique) {
								$('.' + params.fastConfirmClass + '_trigger').fastConfirm('close');
							}

							// Register actions
							$confirmYes.bind('click.fast_confirm', function () {
								// In case the DOM has been refreshed in the meantime or something...
								$trigger.data('fast_confirm.box', $confirmBox).addClass(params.fastConfirmClass + '_trigger');
								params.onProceed($trigger);

								// If the user wants us to handle events
								if (params.eventToBind) {
									trigger[params.eventToBind]();
								}
							});

							$confirmNo.bind('click.fast_confirm', function () {
								// In case the DOM has been refreshed in the meantime or something...
								$trigger.data('fast_confirm.box', $confirmBox).addClass(params.fastConfirmClass + '_trigger');
								params.onCancel($trigger);
							});

							$confirmBox
								// Makes the confirm box focusable
								.attr("tabIndex", -1)
								// Bind Escape key to close the confirm box
								.bind('keydown.fast_confirm', function (event) {
									if (event.keyCode && event.keyCode === 27) {
										$trigger.fastConfirm('close');
									}
								});

							// Append the confirm box to the body. It will not be visible as it is off-screen by default. Positionning will be done at the last time
							$confirmBox.append($confirmYes).append($confirmNo);
							$('body').append($confirmBox);

							// Calculate absolute positionning depending on the trigger-relative position
							switch (params.position) {
								case 'top':
									confirmBoxArrowClass = params.fastConfirmClass + '_bottom';
									confirmBoxArrowBorderClass = params.fastConfirmClass + '_bottom';

									$arrow.addClass(confirmBoxArrowClass).css('left', $confirmBox.outerWidth() / 2 - $arrow.outerWidth() / 2);
									$arrowBorder.addClass(confirmBoxArrowBorderClass).css('left', $confirmBox.outerWidth() / 2 - $arrowBorder.outerWidth() / 2);

									topOffset = offset.top - $confirmBox.outerHeight() - $arrowBorder.outerHeight() + params.offset.top;
									leftOffset = offset.left - $confirmBox.outerWidth() / 2 + $target.outerWidth() / 2 + params.offset.left;
									break;
								case 'right':
									confirmBoxArrowClass = params.fastConfirmClass + '_left';
									confirmBoxArrowBorderClass = params.fastConfirmClass + '_left';

									$arrow.addClass(confirmBoxArrowClass).css('top', $confirmBox.outerHeight() / 2 - $arrow.outerHeight() / 2);
									$arrowBorder.addClass(confirmBoxArrowBorderClass).css('top', $confirmBox.outerHeight() / 2 - $arrowBorder.outerHeight() / 2);

									topOffset = offset.top + $target.outerHeight() / 2 - $confirmBox.outerHeight() / 2 + params.offset.top;
									leftOffset = offset.left + $target.outerWidth() + $arrowBorder.outerWidth() + params.offset.left;
									break;
								case 'bottom':
									confirmBoxArrowClass = params.fastConfirmClass + '_top';
									confirmBoxArrowBorderClass = params.fastConfirmClass + '_top';

									$arrow.addClass(confirmBoxArrowClass).css('left', $confirmBox.outerWidth() / 2 - $arrow.outerWidth() / 2);
									$arrowBorder.addClass(confirmBoxArrowBorderClass).css('left', $confirmBox.outerWidth() / 2 - $arrowBorder.outerWidth() / 2);

									topOffset = offset.top + $target.outerHeight() + $arrowBorder.outerHeight() + params.offset.top;
									leftOffset = offset.left - $confirmBox.outerWidth() / 2 + $target.outerWidth() / 2 + params.offset.left;
									break;
								case 'left':
									confirmBoxArrowClass = params.fastConfirmClass + '_right';
									confirmBoxArrowBorderClass = params.fastConfirmClass + '_right';

									$arrow.addClass(confirmBoxArrowClass).css('top', $confirmBox.outerHeight() / 2 - $arrow.outerHeight() / 2);
									$arrowBorder.addClass(confirmBoxArrowBorderClass).css('top', $confirmBox.outerHeight() / 2 - $arrowBorder.outerHeight() / 2);

									topOffset = offset.top + $target.outerHeight() / 2 - $confirmBox.outerHeight() / 2 + params.offset.top;
									leftOffset = offset.left - $confirmBox.outerWidth() - $arrowBorder.outerWidth() + params.offset.left;
									break;
							}

							// Make the confirm box appear right where it belongs
							$confirmBox.css({
								top: topOffset,
								left: leftOffset,
								zIndex: params.zIndex
							}).focus();

							// Link trigger and confirm box
							$trigger.data('fast_confirm.box', $confirmBox).addClass(params.fastConfirmClass + '_trigger');
						}
					};

				// If the user wants to give us complete control over event handling
				if (params.eventToBind) {
					$trigger.bind(params.eventToBind + '.fast_confirm', function () {
						displayBox();
						return false;
					});
				} else {
					// Let event handling to the user, just display the confirm box
					displayBox();
				}
			});
		},

		// Close the confirm box
		close: function () {
			return this.each(function () {
				var $this = $(this);
				$this.data('fast_confirm.box').remove();
				$this.removeData('fast_confirm.box').removeClass($this.data('fast_confirm.params.fastConfirmClass') + '_trigger');
			});
		}
	};

	$.fn.fastConfirm = function (method) {
		if (!this.length) {
			return this;
		}

		// Method calling logic
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {
			$.error('Method ' +  method + ' does not exist on jQuery.fastConfirm');
		}
	};

})(jQuery);;
﻿/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
*
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function($){$.fn.hoverIntent=function(f,g){var cfg={sensitivity:7,interval:100,timeout:0};cfg=$.extend(cfg,g?{over:f,out:g}:f);var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY;};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if((Math.abs(pX-cX)+Math.abs(pY-cY))<cfg.sensitivity){$(ob).unbind("mousemove",track);ob.hoverIntent_s=1;return cfg.over.apply(ob,[ev]);}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=0;return cfg.out.apply(ob,[ev]);};var handleHover=function(e){var p=(e.type=="mouseover"?e.fromElement:e.toElement)||e.relatedTarget;while(p&&p!=this){try{p=p.parentNode;}catch(e){p=this;}}if(p==this){return false;}var ev=jQuery.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);}if(e.type=="mouseover"){pX=ev.pageX;pY=ev.pageY;$(ob).bind("mousemove",track);if(ob.hoverIntent_s!=1){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob);},cfg.interval);}}else{$(ob).unbind("mousemove",track);if(ob.hoverIntent_s==1){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob);},cfg.timeout);}}};return this.mouseover(handleHover).mouseout(handleHover);};})(jQuery);;
/*
 * jScrollPane - v2.0.0beta8 - 2011-01-24
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(f){function d(C,M){var av,O=this,W,ai,v,ak,R,X,y,q,aw,aB,aq,i,H,h,j,Y,S,am,V,t,A,an,ad,al,F,l,ap,au,x,ar,aE,g,J,ah=true,N=true,aD=false,k=false,aa=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aE=C.css("paddingTop")+" "+C.css("paddingRight")+" "+C.css("paddingBottom")+" "+C.css("paddingLeft");g=(parseInt(C.css("paddingLeft"))||0)+(parseInt(C.css("paddingRight"))||0);ao(M);function ao(aH){var aL,aK,aJ,aG,aF,aI;av=aH;if(W===c){C.css({overflow:"hidden",padding:0});ai=C.innerWidth()+g;v=C.innerHeight();C.width(ai);W=b('<div class="jspPane" />').wrap(b('<div class="jspContainer" />').css({width:ai+"px",height:v+"px"}));C.wrapInner(W.parent());ak=C.find(">.jspContainer");W=ak.find(">.jspPane");W.css("padding",aE)}else{C.css("width","");aI=C.outerWidth()+g!=ai||C.outerHeight()!=v;if(aI){ai=C.innerWidth()+g;v=C.innerHeight();ak.css({width:ai+"px",height:v+"px"})}if(!aI&&J==R&&W.outerHeight()==X){if(aB||aw){C.css("width",(ai+g)+"px")}return}J=R;W.css("width","");C.css("width",ai+"px");ak.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}aL=W.clone().css("position","absolute");aK=b('<div style="width:1px; position: relative;" />').append(aL);b("body").append(aK);R=Math.max(W.outerWidth(),aL.outerWidth());aK.remove();X=W.outerHeight();y=R/ai;q=X/v;aw=q>1;aB=y>1;if(!(aB||aw)){C.removeClass("jspScrollable");W.css({top:0,width:ak.width()-g});n();D();P();w();ag()}else{C.addClass("jspScrollable");aJ=av.maintainPosition&&(H||Y);if(aJ){aG=az();aF=ax()}aC();z();E();if(aJ){L(aG);K(aF)}I();ae();if(av.enableKeyboardNavigation){Q()}if(av.clickOnTrack){p()}B();if(av.hijackInternalLinks){m()}}if(av.autoReinitialise&&!ar){ar=setInterval(function(){ao(av)},av.autoReinitialiseDelay)}else{if(!av.autoReinitialise&&ar){clearInterval(ar)}}C.trigger("jsp-initialised",[aB||aw])}function aC(){if(aw){ak.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));S=ak.find(">.jspVerticalBar");am=S.find(">.jspTrack");aq=am.find(">.jspDrag");if(av.showArrows){an=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aA(0,-1)).bind("click.jsp",ay);ad=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aA(0,1)).bind("click.jsp",ay);if(av.arrowScrollOnHover){an.bind("mouseover.jsp",aA(0,-1,an));ad.bind("mouseover.jsp",aA(0,1,ad))}aj(am,av.verticalArrowPositions,an,ad)}t=v;ak.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});aq.hover(function(){aq.addClass("jspHover")},function(){aq.removeClass("jspHover")}).bind("mousedown.jsp",function(aF){b("html").bind("dragstart.jsp selectstart.jsp",function(){return false});aq.addClass("jspActive");var s=aF.pageY-aq.position().top;b("html").bind("mousemove.jsp",function(aG){T(aG.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",at);return false});o()}}function o(){am.height(t+"px");H=0;V=av.verticalGutter+am.outerWidth();W.width(ai-V-g);if(S.position().left===0){W.css("margin-left",V+"px")}}function z(){if(aB){ak.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));al=ak.find(">.jspHorizontalBar");F=al.find(">.jspTrack");h=F.find(">.jspDrag");if(av.showArrows){au=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aA(-1,0)).bind("click.jsp",ay);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aA(1,0)).bind("click.jsp",ay);if(av.arrowScrollOnHover){au.bind("mouseover.jsp",aA(-1,0,au));
x.bind("mouseover.jsp",aA(1,0,x))}aj(F,av.horizontalArrowPositions,au,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aF){b("html").bind("dragstart.jsp selectstart.jsp",function(){return false});h.addClass("jspActive");var s=aF.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aG){U(aG.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",at);return false});l=ak.innerWidth();af()}else{}}function af(){ak.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});F.width(l+"px");Y=0}function E(){if(aB&&aw){var aF=F.outerHeight(),s=am.outerWidth();t-=aF;b(al).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;ai-=aF;F.parent().append(b('<div class="jspCorner" />').css("width",aF+"px"));o();af()}if(aB){W.width((ak.outerWidth()-g)+"px")}X=W.outerHeight();q=X/v;if(aB){ap=1/y*l;if(ap>av.horizontalDragMaxWidth){ap=av.horizontalDragMaxWidth}else{if(ap<av.horizontalDragMinWidth){ap=av.horizontalDragMinWidth}}h.width(ap+"px");j=l-ap;ac(Y)}if(aw){A=1/q*t;if(A>av.verticalDragMaxHeight){A=av.verticalDragMaxHeight}else{if(A<av.verticalDragMinHeight){A=av.verticalDragMinHeight}}aq.height(A+"px");i=t-A;ab(H)}}function aj(aG,aI,aF,s){var aK="before",aH="after",aJ;if(aI=="os"){aI=/Mac/.test(navigator.platform)?"after":"split"}if(aI==aK){aH=aI}else{if(aI==aH){aK=aI;aJ=aF;aF=s;s=aJ}}aG[aK](aF)[aH](s)}function aA(aF,s,aG){return function(){G(aF,s,this,aG);this.blur();return false}}function G(aI,aH,aL,aK){aL=b(aL).addClass("jspActive");var aJ,aG,aF=true,s=function(){if(aI!==0){O.scrollByX(aI*av.arrowButtonSpeed)}if(aH!==0){O.scrollByY(aH*av.arrowButtonSpeed)}aG=setTimeout(s,av.arrowRepeatFreq*(aF?3:1));aF=false};s();aJ=aK?"mouseout.jsp":"mouseup.jsp";aK=aK||b("html");aK.bind(aJ,function(){aL.removeClass("jspActive");aG&&clearTimeout(aG);aG=null;aK.unbind(aJ)})}function p(){w();if(aw){am.bind("mousedown.jsp",function(aK){if(aK.originalTarget===c||aK.originalTarget==aK.currentTarget){var aI=b(this),aL=aI.offset(),aJ=aK.pageY-aL.top-H,aG,aF=true,s=function(){var aO=aI.offset(),aP=aK.pageY-aO.top-A/2,aM=v*av.scrollPagePercent,aN=i*aM/(X-v);if(aJ<0){if(H-aN>aP){O.scrollByY(-aM)}else{T(aP)}}else{if(aJ>0){if(H+aN<aP){O.scrollByY(aM)}else{T(aP)}}else{aH();return}}aG=setTimeout(s,aF?av.initialDelay:av.trackClickRepeatFreq);aF=false},aH=function(){aG&&clearTimeout(aG);aG=null;b(document).unbind("mouseup.jsp",aH)};s();b(document).bind("mouseup.jsp",aH);return false}})}if(aB){F.bind("mousedown.jsp",function(aK){if(aK.originalTarget===c||aK.originalTarget==aK.currentTarget){var aI=b(this),aL=aI.offset(),aJ=aK.pageX-aL.left-Y,aG,aF=true,s=function(){var aO=aI.offset(),aP=aK.pageX-aO.left-ap/2,aM=ai*av.scrollPagePercent,aN=j*aM/(R-ai);if(aJ<0){if(Y-aN>aP){O.scrollByX(-aM)}else{U(aP)}}else{if(aJ>0){if(Y+aN<aP){O.scrollByX(aM)}else{U(aP)}}else{aH();return}}aG=setTimeout(s,aF?av.initialDelay:av.trackClickRepeatFreq);aF=false},aH=function(){aG&&clearTimeout(aG);aG=null;b(document).unbind("mouseup.jsp",aH)};s();b(document).bind("mouseup.jsp",aH);return false}})}}function w(){F&&F.unbind("mousedown.jsp");am&&am.unbind("mousedown.jsp")}function at(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");aq&&aq.removeClass("jspActive");h&&h.removeClass("jspActive")}function T(s,aF){if(!aw){return}if(s<0){s=0}else{if(s>i){s=i}}if(aF===c){aF=av.animateScroll}if(aF){O.animate(aq,"top",s,ab)}else{aq.css("top",s);ab(s)}}function ab(aF){if(aF===c){aF=aq.position().top}ak.scrollTop(0);H=aF;var aI=H===0,aG=H==i,aH=aF/i,s=-aH*(X-v);if(ah!=aI||aD!=aG){ah=aI;aD=aG;C.trigger("jsp-arrow-change",[ah,aD,N,k])}u(aI,aG);W.css("top",s);C.trigger("jsp-scroll-y",[-s,aI,aG])}function U(aF,s){if(!aB){return}if(aF<0){aF=0}else{if(aF>j){aF=j}}if(s===c){s=av.animateScroll}if(s){O.animate(h,"left",aF,ac)}else{h.css("left",aF);ac(aF)}}function ac(aF){if(aF===c){aF=h.position().left}ak.scrollTop(0);
Y=aF;var aI=Y===0,aH=Y==j,aG=aF/j,s=-aG*(R-ai);if(N!=aI||k!=aH){N=aI;k=aH;C.trigger("jsp-arrow-change",[ah,aD,N,k])}r(aI,aH);W.css("left",s);C.trigger("jsp-scroll-x",[-s,aI,aH])}function u(aF,s){if(av.showArrows){an[aF?"addClass":"removeClass"]("jspDisabled");ad[s?"addClass":"removeClass"]("jspDisabled")}}function r(aF,s){if(av.showArrows){au[aF?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function K(s,aF){var aG=s/(X-v);T(aG*i,aF)}function L(aF,s){var aG=aF/(R-ai);U(aG*j,s)}function Z(aR,aM,aG){var aK,aH,aI,s=0,aQ=0,aF,aL,aO,aN,aP;try{aK=b(aR)}catch(aJ){return}aH=aK.outerHeight();aI=aK.outerWidth();ak.scrollTop(0);ak.scrollLeft(0);while(!aK.is(".jspPane")){s+=aK.position().top;aQ+=aK.position().left;aK=aK.offsetParent();if(/^body|html$/i.test(aK[0].nodeName)){return}}aF=ax();aL=aF+v;if(s<aF||aM){aN=s-av.verticalGutter}else{if(s+aH>aL){aN=s-v+aH+av.verticalGutter}}if(aN){K(aN,aG)}viewportLeft=az();aO=viewportLeft+ai;if(aQ<viewportLeft||aM){aP=aQ-av.horizontalGutter}else{if(aQ+aI>aO){aP=aQ-ai+aI+av.horizontalGutter}}if(aP){L(aP,aG)}}function az(){return -W.position().left}function ax(){return -W.position().top}function ae(){ak.unbind(aa).bind(aa,function(aI,aJ,aH,aF){var aG=Y,s=H;O.scrollBy(-aH*av.mouseWheelSpeed,-aF*av.mouseWheelSpeed);return aG==Y&&s==H})}function n(){ak.unbind(aa)}function ay(){return false}function I(){W.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){if(s.target===W[0]){return}Z(s.target,false)})}function D(){W.find(":input,a").unbind("focus.jsp")}function Q(){C.attr("tabindex",0).unbind("keydown.jsp keyup.jsp").bind("keydown.jsp",function(aG){if(aG.target!==C[0]){return}var aF=Y,s=H;switch(aG.keyCode){case 40:O.scrollByY(av.keyboardSpeed);break;case 38:O.scrollByY(-av.keyboardSpeed);break;case 34:case 32:O.scrollByY(v*av.scrollPagePercent);break;case 33:O.scrollByY(-v*av.scrollPagePercent);break;case 35:K(X-v);break;case 36:K(0);break;case 39:O.scrollByX(av.keyboardSpeed);break;case 37:O.scrollByX(-av.keyboardSpeed);break}if(aF!=Y||s!=H){return false}});if(av.hideFocus){C.css("outline","none");if("hideFocus" in ak[0]){C.attr("hideFocus",true)}}else{C.css("outline","");if("hideFocus" in ak[0]){C.attr("hideFocus",false)}}}function P(){C.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp").unbind("keyup.jsp")}function B(){if(location.hash&&location.hash.length>1){var aG,aF;try{aG=b(location.hash)}catch(s){return}if(aG.length&&W.find(location.hash)){if(ak.scrollTop()===0){aF=setInterval(function(){if(ak.scrollTop()>0){Z(location.hash,true);b(document).scrollTop(ak.position().top);clearInterval(aF)}},50)}else{Z(location.hash,true);b(document).scrollTop(ak.position().top)}}}}function ag(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function m(){ag();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aF;if(s.length>1){aF=s[1];if(aF.length>0&&W.find("#"+aF).length>0){Z("#"+aF,true);return false}}})}b.extend(O,{reinitialise:function(aF){aF=b.extend({},av,aF);ao(aF)},scrollToElement:function(aG,aF,s){Z(aG,aF,s)},scrollTo:function(aG,s,aF){L(aG,aF);K(s,aF)},scrollToX:function(aF,s){L(aF,s)},scrollToY:function(s,aF){K(s,aF)},scrollBy:function(aF,s,aG){O.scrollByX(aF,aG);O.scrollByY(s,aG)},scrollByX:function(s,aG){var aF=az()+s,aH=aF/(R-ai);U(aH*j,aG)},scrollByY:function(s,aG){var aF=ax()+s,aH=aF/(X-v);T(aH*i,aG)},animate:function(aF,aI,s,aH){var aG={};aG[aI]=s;aF.animate(aG,{duration:av.animateDuration,ease:av.animateEase,queue:false,step:aH})},getContentPositionX:function(){return az()},getContentPositionY:function(){return ax()},getIsScrollableH:function(){return aB},getIsScrollableV:function(){return aw},getContentPane:function(){return W},scrollToBottom:function(s){T(i,s)},hijackInternalLinks:function(){m()}})}f=b.extend({},b.fn.jScrollPane.defaults,f);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){f[this]=f[this]||f.speed});
var e;this.each(function(){var g=b(this),h=g.data("jsp");if(h){h.reinitialise(f)}else{h=new d(g,f);g.data("jsp",h)}e=e?e.add(g):g});return e};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);;
/* http://keith-wood.name/datepick.html
   Date picker for jQuery v4.0.2.
   Written by Keith Wood (kbwood{at}iinet.com.au) February 2010.
   Dual licensed under the GPL (http://dev.jquery.com/browser/trunk/jquery/GPL-LICENSE.txt) and
   MIT (http://dev.jquery.com/browser/trunk/jquery/MIT-LICENSE.txt) licenses.
   Please attribute the author if you use it. */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(Q($){Q 3R(){L.1l={4K:\'\',4L:14,4M:X,3S:\'26\',3T:{},3U:\'3V\',4N:X,4O:\'6P\',4P:18,3h:0,2C:L.4Q,3W:1,1Q:0,2g:1,2h:12,2i:14,4R:\'c-10:c+10\',2U:\'+10\',4S:18,4T:18,1E:X,3X:18,2D:X,1I:X,1R:\'2E/2j/1J\',3Y:18,2F:18,3i:\' - \',2G:0,3j:\',\',4U:X,4V:X,4W:X,4X:X,4Y:X,4Z:X,50:X,51:14,52:18,2k:L.2k};L.53={\'\':{1Y:[\'6Q\',\'6R\',\'6S\',\'6T\',\'54\',\'6U\',\'6V\',\'6W\',\'6X\',\'6Y\',\'6Z\',\'70\'],28:[\'71\',\'72\',\'73\',\'74\',\'54\',\'75\',\'76\',\'77\',\'78\',\'79\',\'7a\',\'7b\'],1Z:[\'7c\',\'7d\',\'7e\',\'7f\',\'7g\',\'7h\',\'7i\'],29:[\'7j\',\'7k\',\'7l\',\'7m\',\'7n\',\'7o\',\'7p\'],55:[\'7q\',\'7r\',\'7s\',\'7t\',\'7u\',\'7v\',\'7w\'],1R:\'2E/2j/1J\',3h:0,3Z:L.56,57:\'&41;7x\',58:\'2H 1S 59 1q\',5a:\'&41;&41;\',5b:\'2H 1S 59 2l\',5c:\'7y&42;\',5d:\'2H 1S 2V 1q\',5e:\'&42;&42;\',5f:\'2H 1S 2V 2l\',5g:\'7z\',5h:\'2H 1S 43 1q\',5i:\'7A\',5j:\'2H 1c\\\'s 1q\',5k:\'5l\',5m:\'5l 5n 1S 7B\',5o:\'5p\',5q:\'5p 1S 7C\',44:\'5r 1S 2l\',5s:\'5r 1S 1q\',7D:\'7E\',7F:\'7G 7H 1S 2l\',5t:\'5u 3k, M d, 1J\',7I:\'5u a 1r\',3l:18}};$.2W(L.1l,L.53[\'\']);L.2m=[]}$.2W(3R.5v,{1a:\'N\',1T:\'7J\',45:\'N-3m\',2n:\'N-1U\',46:\'N-47\',49:\'N-7K\',2o:\'N-1q-2l\',5w:\'N-1q-\',3n:\'N-5x-2l\',5y:\'N-7L-\',2k:{4a:{1s:\'57\',1v:\'58\',1k:{1g:33},1w:Q(a){K b=a.2p();R(!b||$.N.1b($.N.1t($.N.1b($.N.T(a.V),1-a.P(\'2g\')-a.P(\'1Q\'),\'m\'),1),-1,\'d\').S()>=b.S())},1r:Q(a){R $.N.1t($.N.1b($.N.T(a.V),-a.P(\'2g\')-a.P(\'1Q\'),\'m\'),1)},1y:Q(a){$.N.2i(L,-a.P(\'2g\'))}},7M:{1s:\'5a\',1v:\'5b\',1k:{1g:33,1m:14},1w:Q(a){K b=a.2p();R(!b||$.N.1b($.N.1t($.N.1b($.N.T(a.V),1-a.P(\'2h\')-a.P(\'1Q\'),\'m\'),1),-1,\'d\').S()>=b.S())},1r:Q(a){R $.N.1t($.N.1b($.N.T(a.V),-a.P(\'2h\')-a.P(\'1Q\'),\'m\'),1)},1y:Q(a){$.N.2i(L,-a.P(\'2h\'))}},2V:{1s:\'5c\',1v:\'5d\',1k:{1g:34},1w:Q(a){K b=a.P(\'1I\');R(!b||$.N.1t($.N.1b($.N.T(a.V),a.P(\'2g\')-a.P(\'1Q\'),\'m\'),1).S()<=b.S())},1r:Q(a){R $.N.1t($.N.1b($.N.T(a.V),a.P(\'2g\')-a.P(\'1Q\'),\'m\'),1)},1y:Q(a){$.N.2i(L,a.P(\'2g\'))}},7N:{1s:\'5e\',1v:\'5f\',1k:{1g:34,1m:14},1w:Q(a){K b=a.P(\'1I\');R(!b||$.N.1t($.N.1b($.N.T(a.V),a.P(\'2h\')-a.P(\'1Q\'),\'m\'),1).S()<=b.S())},1r:Q(a){R $.N.1t($.N.1b($.N.T(a.V),a.P(\'2h\')-a.P(\'1Q\'),\'m\'),1)},1y:Q(a){$.N.2i(L,a.P(\'2h\'))}},43:{1s:\'5g\',1v:\'5h\',1k:{1g:36,1m:14},1w:Q(a){K b=a.2p();K c=a.P(\'1I\');K d=a.U[0]||$.N.1c();R(!b||d.S()>=b.S())&&(!c||d.S()<=c.S())},1r:Q(a){R a.U[0]||$.N.1c()},1y:Q(a){K b=a.U[0]||$.N.1c();$.N.2q(L,b.19(),b.1d()+1)}},1c:{1s:\'5i\',1v:\'5j\',1k:{1g:36,1m:14},1w:Q(a){K b=a.2p();K c=a.P(\'1I\');R(!b||$.N.1c().S()>=b.S())&&(!c||$.N.1c().S()<=c.S())},1r:Q(a){R $.N.1c()},1y:Q(a){$.N.2q(L)}},2X:{1s:\'5k\',1v:\'5m\',1k:{1g:35,1m:14},1w:Q(a){R 14},1r:Q(a){R X},1y:Q(a){$.N.2X(L)}},5z:{1s:\'5o\',1v:\'5q\',1k:{1g:27},1w:Q(a){R 14},1r:Q(a){R X},1y:Q(a){$.N.1F(L)}},7O:{1s:\'7P\',1v:\'7Q\',1k:{1g:38,1m:14},1w:Q(a){K b=a.2p();R(!b||$.N.1b($.N.T(a.V),-7,\'d\').S()>=b.S())},1r:Q(a){R $.N.1b($.N.T(a.V),-7,\'d\')},1y:Q(a){$.N.2Y(L,-7)}},7R:{1s:\'7S\',1v:\'7T\',1k:{1g:37,1m:14},1w:Q(a){K b=a.2p();R(!b||$.N.1b($.N.T(a.V),-1,\'d\').S()>=b.S())},1r:Q(a){R $.N.1b($.N.T(a.V),-1,\'d\')},1y:Q(a){$.N.2Y(L,-1)}},7U:{1s:\'7V\',1v:\'7W\',1k:{1g:39,1m:14},1w:Q(a){K b=a.P(\'1I\');R(!b||$.N.1b($.N.T(a.V),1,\'d\').S()<=b.S())},1r:Q(a){R $.N.1b($.N.T(a.V),1,\'d\')},1y:Q(a){$.N.2Y(L,1)}},7X:{1s:\'7Y\',1v:\'7Z\',1k:{1g:40,1m:14},1w:Q(a){K b=a.P(\'1I\');R(!b||$.N.1b($.N.T(a.V),7,\'d\').S()<=b.S())},1r:Q(a){R $.N.1b($.N.T(a.V),7,\'d\')},1y:Q(a){$.N.2Y(L,7)}}},56:{5A:\'<W 1n="N">\'+\'<W 1n="N-80">{2I:4a}{2I:1c}{2I:2V}</W>{3o}\'+\'{3m:5B}<W 1n="N-81">{2I:2X}{2I:5z}</W>{3m:1K}\'+\'<W 1n="N-2X-82"></W></W>\',5C:\'<W 1n="N-1q-83">{3o}</W>\',1q:\'<W 1n="N-1q"><W 1n="N-1q-84">{4b}</W>\'+\'<5D><5E>{2Z}</5E><5F>{5G}</5F></5D></W>\',2Z:\'<3p>{3q}</3p>\',5H:\'<5I>{1t}</5I>\',4c:\'<3p>{3q}</3p>\',1t:\'<4d>{1t}</4d>\',4e:\'.N-1q\',4f:\'4d\',5J:\'N-85\',5K:\'N-86\',5L:\'\',5M:\'N-30\',31:\'N-87\',5N:\'N-1c\',5O:\'N-88-1q\',5P:\'N-89\',3a:\'N-8a\',5Q:\'\',5R:\'\',4g:\'N-1V\'},8b:Q(a){$.2W(L.1l,a||{});R L},4h:(((3r-1)*8c+1z.2r(3r/4)-1z.2r(3r/2s)+1z.2r(3r/8d))*24*60*60*8e),5S:24*60*60*4i,8f:\'1J-2E-2j\',8g:\'D, 2j M 1J\',8h:\'3k, 4j d, 1J\',8i:\'1J-2E-2j\',8j:\'J\',8k:\'D, d M 3s\',8l:\'3k, 2j-M-3s\',8m:\'D, d M 3s\',8n:\'D, d M 1J\',8o:\'D, d M 1J\',8p:\'D, d M 3s\',8q:\'!\',8r:\'@\',8s:\'1J-2E-2j\',2a:Q(f,g,h){O(21 f!=\'2J\'){h=g;g=f;f=\'\'}O(!g){R\'\'}f=f||L.1l.1R;h=h||{};K i=h.29||L.1l.29;K j=h.1Z||L.1l.1Z;K k=h.28||L.1l.28;K l=h.1Y||L.1l.1Y;K m=h.2C||L.1l.2C;K n=Q(a,b){K c=1;2K(s+c<f.Z&&f.1A(s+c)==a){c++}s+=c-1;R 1z.2r(c/(b||1))>1};K o=Q(a,b,c,d){K e=\'\'+b;O(n(a,d)){2K(e.Z<c){e=\'0\'+e}}R e};K p=Q(a,b,c,d){R(n(a)?d[b]:c[b])};K q=\'\';K r=18;1e(K s=0;s<f.Z;s++){O(r){O(f.1A(s)=="\'"&&!n("\'")){r=18}16{q+=f.1A(s)}}16{3t(f.1A(s)){15\'d\':q+=o(\'d\',g.1x(),2);17;15\'D\':q+=p(\'D\',g.2L(),i,j);17;15\'o\':q+=o(\'o\',L.5T(g),3);17;15\'w\':q+=o(\'w\',m(g),2);17;15\'m\':q+=o(\'m\',g.1d()+1,2);17;15\'M\':q+=p(\'M\',g.1d(),k,l);17;15\'y\':q+=(n(\'y\',2)?g.19():(g.19()%2s<10?\'0\':\'\')+g.19()%2s);17;15\'@\':q+=1z.2r(g.S()/4i);17;15\'!\':q+=g.S()*5U+L.4h;17;15"\'":O(n("\'")){q+="\'"}16{r=14}17;3u:q+=f.1A(s)}}}R q},4k:Q(f,g,h){O(g==X){2M\'5V 3v\';}g=(21 g==\'5W\'?g.8t():g+\'\');O(g==\'\'){R X}f=f||L.1l.1R;h=h||{};K j=h.2U||L.1l.2U;j=(21 j!=\'2J\'?j:L.1c().19()%2s+1B(j,10));K k=h.29||L.1l.29;K l=h.1Z||L.1l.1Z;K m=h.28||L.1l.28;K n=h.1Y||L.1l.1Y;K o=-1;K p=-1;K q=-1;K r=-1;K s=18;K t=18;K u=Q(a,b){K c=1;2K(z+c<f.Z&&f.1A(z+c)==a){c++}z+=c-1;R 1z.2r(c/(b||1))>1};K v=Q(a,b){u(a,b);K c=[2,3,4,11,20][\'8u@!\'.2N(a)+1];K d=1C 4l(\'^-?\\\\d{1,\'+c+\'}\');K e=g.2t(y).1L(d);O(!e){2M\'8v 5X 3w 2O {0}\'.1i(/\\{0\\}/,y);}y+=e[0].Z;R 1B(e[0],10);};K w=Q(a,b,c,d){K e=(u(a,d)?c:b);1e(K i=0;i<e.Z;i++){O(g.5Y(y,e[i].Z)==e[i]){y+=e[i].Z;R i+1;}}2M\'8w 8x 3w 2O {0}\'.1i(/\\{0\\}/,y);};K x=Q(){O(g.1A(y)!=f.1A(z)){2M\'8y 8z 3w 2O {0}\'.1i(/\\{0\\}/,y);}y++;};K y=0;1e(K z=0;z<f.Z;z++){O(t){O(f.1A(z)=="\'"&&!u("\'")){t=18;}16{x();}}16{3t(f.1A(z)){15\'d\':q=v(\'d\');17;15\'D\':w(\'D\',k,l);17;15\'o\':r=v(\'o\');17;15\'w\':v(\'w\');17;15\'m\':p=v(\'m\');17;15\'M\':p=w(\'M\',m,n);17;15\'y\':K A=z;s=!u(\'y\',2);z=A;o=v(\'y\',2);17;15\'@\':K B=L.1M(1C 22(v(\'@\')*4i));o=B.19();p=B.1d()+1;q=B.1x();17;15\'!\':K B=L.1M(1C 22((v(\'!\')-L.4h)/5U));o=B.19();p=B.1d()+1;q=B.1x();17;15\'*\':y=g.Z;17;15"\'":O(u("\'")){x();}16{t=14;}17;3u:x();}}}O(y<g.Z){2M\'8A 1s 8B 3w 1K\';}O(o==-1){o=L.1c().19();}16 O(o<2s&&s){o+=(j==-1?8C:L.1c().19()-L.1c().19()%2s-(o<=j?0:2s));}O(r>-1){p=1;q=r;1e(K C=L.2u(o,p);q>C;C=L.2u(o,p)){p++;q-=C;}}K B=L.T(o,p,q);O(B.19()!=o||B.1d()+1!=p||B.1x()!=q){2M\'5V 1r\';}R B;},4m:Q(f,g,h,i,j){O(h&&21 h!=\'5W\'){j=i;i=h;h=X;}O(21 i!=\'2J\'){j=i;i=\'\';}K k=Q(a){3x{R $.N.4k(i,a,j);}3y(e){}a=a.5Z();K b=(a.1L(/^c/)&&h?$.N.T(h):X)||$.N.1c();K c=/([+-]?[0-9]+)\\s*(d|w|m|y)?/g;K d=c.4n(a);2K(d){b=$.N.1b(b,1B(d[1],10),d[2]||\'d\');d=c.4n(a);}R b;};g=(g?$.N.T(g):X);f=(f==X?g:(21 f==\'2J\'?k(f):(21 f==\'5X\'?(61(f)||f==62||f==-62?g:$.N.1b($.N.1c(),f,\'d\')):$.N.1M(f))));R f;},2u:Q(a,b){K c=(a.19?a:L.T(a,b,1));R 32-L.T(c.19(),c.1d()+1,32).1x();},5T:Q(a,b,c){K d=(a.19?a:L.T(a,b,c));K e=L.T(d.19(),1,1);R(d.S()-e.S())/L.5S+1;},4Q:Q(a,b,c){K d=(a.19?1C 22(a.S()):L.T(a,b,c));d.1W(d.1x()+4-(d.2L()||7));K e=d.S();d.4o(0);d.1W(1);R 1z.2r(1z.8D((e-d)/8E)/7)+1;},1c:Q(){R L.1M(1C 22());},T:Q(a,b,c){R(!a?X:L.1M(a.19?1C 22(a.S()):1C 22(a,b-1,c)));},1M:Q(a){O(!a){R a;}a.63(0);a.8F(0);a.8G(0);a.8H(0);a.63(a.64()>12?a.64()+2:0);R a;},2l:Q(a,b){a.8I(b);R L.1M(a);},1q:Q(a,b){a.4o(b-1);R L.1M(a);},1t:Q(a,b){a.1W(b);R L.1M(a);},1b:Q(a,b,c){O(c==\'d\'||c==\'w\'){a.1W(a.1x()+b*(c==\'w\'?7:1));}16{K d=a.19()+(c==\'y\'?b:0);K e=a.1d()+(c==\'m\'?b:0);a.8J(L.1M(1C 22(d,e,1z.65(a.1x(),L.2u(d,e+1)))).S());}R a;},66:Q(c,d){c=$(c);O(c.23(L.1T)){R;}c.2b(L.1T);K e={1o:c,U:[],V:X,1X:18,1p:($.3z(c[0].8K.5Z(),[\'W\',\'2v\'])>-1),P:Q(a){K b=L.2P[a]!==67?L.2P[a]:$.N.1l[a];O($.3z(a,[\'1E\',\'2D\',\'1I\'])>-1){b=$.N.4m(b,X,L.U[0],L.P(\'1R\'),e.1N());}R b;},2p:Q(){R(L.1X?L.U[0]:L.P(\'2D\'));},1N:Q(){R{29:L.P(\'29\'),1Z:L.P(\'1Z\'),28:L.P(\'28\'),1Y:L.P(\'1Y\'),2C:L.P(\'2C\'),2U:L.P(\'2U\')};}};$.1j(c[0],L.1a,e);K f=($.68.69?c.69():{});e.2P=$.2W({},d||{},f||{});O(e.1p){L.2w(c[0]);}16{L.4p(c,e);c.3A(\'6a.\'+L.1a,L.6b).3A(\'8L.\'+L.1a,L.6c).3A(\'8M.\'+L.1a,L.6d);O(c.2x(\'1V\')){L.47(c[0]);}}},6e:Q(a,b){K c=$.1j(a,L.1a);R(c?(b?(b==\'5n\'?c.2P:c.2P[b]):$.N.1l):{});},2y:Q(a,b,c){a=$(a);O(!a.23(L.1T)){R;}b=b||{};O(21 b==\'2J\'){K d=b;b={};b[d]=c;}K e=$.1j(a[0],L.1a);K f=e.U;6f(e.2P,b);L.1W(a[0],f,X,18,14);e.1X=18;e.V=$.N.T(L.2Q((b.1E?e.P(\'1E\'):e.V)||e.P(\'1E\')||$.N.1c(),e));O(!e.1p){L.4p(a,e);}O(e.1p||e.W){L.2w(a[0]);}},4p:Q(a,b){a.6g(\'3b.\'+L.1a);O(b.P(\'4L\')){a.3A(\'3b.\'+L.1a,L.26);}O(b.1U){b.1U.3B();}K c=b.P(\'4M\');b.1U=(!c?$([]):$(c).8N().4q(\'8O\').2b(L.2n)[b.P(\'3l\')?\'8P\':\'8Q\'](a).3C(Q(){O(!$.N.3c(a[0])){$.N[$.N.1G==b?\'1F\':\'26\'](a[0]);}}));L.6h(a,b);O(b.P(\'3X\')&&b.P(\'1E\')&&b.U.Z==0){L.1W(a[0],$.N.T(b.P(\'1E\')||$.N.1c()));}},6h:Q(d,e){O(e.P(\'3Y\')&&!e.1p){K f=1C 22(8R,10-1,20);K g=e.P(\'1R\');O(g.1L(/[8S]/)){K h=Q(a){K b=0;K c=0;1e(K i=0;i<a.Z;i++){O(a[i].Z>b){b=a[i].Z;c=i;}}R c;};f.4o(h(e.P(g.1L(/4j/)?\'1Y\':\'28\')));f.1W(h(e.P(g.1L(/3k/)?\'1Z\':\'29\'))+20-f.2L());}e.1o.2x(\'6i\',$.N.2a(g,f,e.1N()).Z);}},8T:Q(a){a=$(a);O(!a.23(L.1T)){R;}K b=$.1j(a[0],L.1a);O(b.1U){b.1U.3B();}a.6j(L.1T).8U().6g(\'.\'+L.1a);O(b.P(\'3Y\')&&!b.1p){a.4q(\'6i\');}$.8V(a[0],L.1a);},8W:Q(b){K c=3v;R Q(a){1e(K i=0;i<c.Z;i++){c[i].1O(L,3v);}};},8X:Q(b){K c=$(b);O(!c.23(L.1T)){R;}K d=$.1j(b,L.1a);O(d.1p)c.6k(\'.\'+L.46).3B().1K().1H(\'2c,1P\').2x(\'1V\',\'\').1K().1H(\'a\').2x(\'3D\',\'3E:3F(0)\');16{b.1V=18;d.1U.3G(\'2c.\'+L.2n).2x(\'1V\',\'\').1K().3G(\'6l.\'+L.2n).1D({6m:\'1.0\',6n:\'\'});}L.2m=$.6o(L.2m,Q(a){R(a==b?X:a);});},47:Q(b){K c=$(b);O(!c.23(L.1T))R;K d=$.1j(b,L.1a);O(d.1p){K e=c.6k(\':6p\');K f=e.3d();K g={1h:0,1f:0};e.3e().3f(Q(){O($(L).1D(\'2O\')==\'8Y\'){g=$(L).3d();R 18;}});K h=c.1D(\'8Z\');h=(h==\'90\'?0:1B(h,10))+1;c.91(\'<W 1n="\'+L.46+\'" 92="\'+\'2R: \'+e.2S()+\'3H; 4r: \'+e.2z()+\'3H; 1h: \'+(f.1h-g.1h)+\'3H; 1f: \'+(f.1f-g.1f)+\'3H; z-93: \'+h+\'"></W>\').1H(\'2c,1P\').2x(\'1V\',\'1V\').1K().1H(\'a\').4q(\'3D\');}16{b.1V=14;d.1U.3G(\'2c.\'+L.2n).2x(\'1V\',\'1V\').1K().3G(\'6l.\'+L.2n).1D({6m:\'0.5\',6n:\'3u\'});}L.2m=$.6o(L.2m,Q(a){R(a==b?X:a);});L.2m.3g(b);},3c:Q(a){R(a&&$.3z(a,L.2m)>-1);},26:Q(b){b=b.1o||b;K c=$.1j(b,$.N.1a);O($.N.1G==c){R;}O($.N.1G){$.N.1F($.N.1G,14);}O(c){c.3I=X;c.U=$.N.4s(c,$(b).2A());c.1X=18;c.V=$.N.2Q($.N.T(c.U[0]||c.P(\'1E\')||$.N.1c()),c);c.2B=$.N.T(c.V);$.N.1G=c;$.N.2w(b,14);K d=$.N.6q(c);c.W.1D({1h:d.1h,1f:d.1f});K e=c.P(\'3S\');K f=c.P(\'3U\');f=(f==\'3V\'&&$.3J&&$.3J.4t>=\'1.8\'?\'6r\':f);K g=Q(){K a=$.N.6s(c.W);c.W.1H(\'.\'+$.N.49).1D({1h:-a[0],1f:-a[1],2R:c.W.2S()+a[0],4r:c.W.2z()+a[1]});};O($.3K&&$.3K[e]){c.W.26(e,c.P(\'3T\'),f,g);}16{c.W[e||\'26\']((e?f:\'\'),g);}O(!e){g();}}},4s:Q(a,b){O(b==a.3I){R;}a.3I=b;K c=a.P(\'1R\');K d=a.P(\'2G\');K f=a.P(\'2F\');b=b.4u(d?a.P(\'3j\'):(f?a.P(\'3i\'):\'\\94\'));K g=[];1e(K i=0;i<b.Z;i++){3x{K h=$.N.4k(c,b[i],a.1N());O(h){K k=18;1e(K j=0;j<g.Z;j++){O(g[j].S()==h.S()){k=14;17;}}O(!k){g.3g(h);}}}3y(e){}}g.4v(d||(f?2:1),g.Z);O(f&&g.Z==1){g[1]=g[0];}R g;},2w:Q(a,b){a=$(a.1o||a);K c=$.1j(a[0],$.N.1a);O(c){O(c.1p){a.6t(L.4w(a[0],c));}16 O($.N.1G==c){O(!c.W){c.W=$(\'<W></W>\').2b(L.45).1D({95:(b?\'96\':\'97\'),2O:\'98\',1h:a.3d().1h,1f:a.3d().1f+a.2z()}).99($(c.P(\'4N\')||\'2T\'));}c.W.6t(L.4w(a[0],c));a.3b();}O(c.1p||$.N.1G==c){K d=c.P(\'4W\');O(d&&(!c.2B||c.2B.19()!=c.V.19()||c.2B.1d()!=c.V.1d())){d.1O(a[0],[c.V.19(),c.V.1d()+1]);}}}},3L:Q(a,b){K c=$.1j(a,L.1a);O(c){K d=\'\';K e=\'\';K f=(c.P(\'2G\')?c.P(\'3j\'):c.P(\'3i\'));K g=c.P(\'1R\');K h=c.P(\'50\')||g;1e(K i=0;i<c.U.Z;i++){d+=(b?\'\':(i>0?f:\'\')+$.N.2a(g,c.U[i],c.1N()));e+=(i>0?f:\'\')+$.N.2a(h,c.U[i],c.1N());}O(!c.1p&&!b){$(a).2A(d);}$(c.P(\'4Z\')).2A(e);K j=c.P(\'4X\');O(j&&!b&&!c.4x){c.4x=14;j.1O(a,[c.U]);c.4x=18;}}},6s:Q(c){K d=Q(a){K b=($.2d.6u?1:0);R{9a:1+b,9b:3+b,9c:5+b}[a]||a;};R[6v(d(c.1D(\'6w-1h-2R\'))),6v(d(c.1D(\'6w-1f-2R\')))];},6q:Q(a){K b=(a.1o.9d(\':6x\')&&a.1U?a.1U:a.1o);K c=b.3d();K d=18;$(a.1o).3e().3f(Q(){d|=$(L).1D(\'2O\')==\'9e\';R!d;});O(d&&$.2d.4y){c.1h-=1u.2e.3M;c.1f-=1u.2e.3N;}K e=(!$.2d.6y||1u.6z?1u.2e.6A:0)||1u.2T.6A;K f=(!$.2d.6y||1u.6z?1u.2e.6B:0)||1u.2T.6B;O(e==0){R c;}K g=a.P(\'4O\');K h=a.P(\'3l\');K i=1u.2e.3M||1u.2T.3M;K j=1u.2e.3N||1u.2T.3N;K k=c.1f-a.W.2z()-(d&&$.2d.4y?1u.2e.3N:0);K l=c.1f+b.2z();K m=c.1h;K n=c.1h+b.2S()-a.W.2S()-(d&&$.2d.4y?1u.2e.3M:0);K o=(c.1h+a.W.2S()-i)>e;K p=(c.1f+a.1o.2z()+a.W.2z()-j)>f;O(g==\'9f\'){c={1h:m,1f:k};}16 O(g==\'9g\'){c={1h:n,1f:k};}16 O(g==\'9h\'){c={1h:m,1f:l};}16 O(g==\'9i\'){c={1h:n,1f:l};}16 O(g==\'1f\'){c={1h:(h||o?n:m),1f:k};}16{c={1h:(h||o?n:m),1f:(p?k:l)};}c.1h=1z.6C((d?0:i),c.1h-(d?i:0));c.1f=1z.6C((d?0:j),c.1f-(d?j:0));R c;},6D:Q(a){O(!$.N.1G){R;}K b=$(a.1o);O(!b.3e().6E().23($.N.45)&&!b.23($.N.1T)&&!b.3e().6E().23($.N.2n)){$.N.1F($.N.1G);}},1F:Q(b,c){K d=$.1j(b,L.1a)||b;O(d&&d==$.N.1G){K e=(c?\'\':d.P(\'3S\'));K f=d.P(\'3U\');f=(f==\'3V\'&&$.3J&&$.3J.4t>=\'1.8\'?\'6r\':f);K g=Q(){d.W.3B();d.W=X;$.N.1G=X;K a=d.P(\'4Y\');O(a){a.1O(b,[d.U]);}};d.W.9j();O($.3K&&$.3K[e]){d.W.1F(e,d.P(\'3T\'),f,g);}16{K h=(e==\'9k\'?\'9l\':(e==\'9m\'?\'9n\':\'1F\'));d.W[h]((e?f:\'\'),g);}O(!e){g();}}},6b:Q(a){K b=a.1o;K c=$.1j(b,$.N.1a);K d=18;O(c.W){O(a.1g==9){$.N.1F(b);}16 O(a.1g==13){$.N.4z(b,$(\'a.\'+c.P(\'3Z\').31,c.W)[0]);d=14;}16{K e=c.P(\'2k\');1e(K f 4A e){K g=e[f];O(g.1k.1g==a.1g&&!!g.1k.1m==!!(a.1m||a.3O)&&!!g.1k.3P==a.3P&&!!g.1k.3Q==a.3Q){$.N.4B(b,f);d=14;17;}}}}16{K g=c.P(\'2k\').43;O(g.1k.1g==a.1g&&!!g.1k.1m==!!(a.1m||a.3O)&&!!g.1k.3P==a.3P&&!!g.1k.3Q==a.3Q){$.N.26(b);d=14;}}c.1m=((a.1g<48&&a.1g!=32)||a.1m||a.3O);O(d){a.9o();a.9p();}R!d;},6c:Q(a){K b=a.1o;K c=$.1j(b,$.N.1a);O(c&&c.P(\'51\')){K d=9q.9r(a.1g||a.9s);K e=$.N.6F(c);R(a.3O||c.1m||d<\' \'||!e||e.2N(d)>-1);}R 14;},6F:Q(a){K b=a.P(\'1R\');K c=(a.P(\'2G\')?a.P(\'3j\'):(a.P(\'2F\')?a.P(\'3i\'):\'\'));K d=18;K e=18;1e(K i=0;i<b.Z;i++){K f=b.1A(i);O(d){O(f=="\'"&&b.1A(i+1)!="\'"){d=18;}16{c+=f;}}16{3t(f){15\'d\':15\'m\':15\'o\':15\'w\':c+=(e?\'\':\'4C\');e=14;17;15\'y\':15\'@\':15\'!\':c+=(e?\'\':\'4C\')+\'-\';e=14;17;15\'J\':c+=(e?\'\':\'4C\')+\'-.\';e=14;17;15\'D\':15\'M\':15\'Y\':R X;15"\'":O(b.1A(i+1)=="\'"){c+="\'";}16{d=14;}17;3u:c+=f;}}}R c;},6d:Q(a){K b=a.1o;K c=$.1j(b,$.N.1a);O(c&&!c.1m&&c.3I!=c.1o.2A()){3x{K d=$.N.4s(c,c.1o.2A());O(d.Z>0){$.N.1W(b,d,X,14);}}3y(a){}}R 14;},2X:Q(a){K b=$.1j(a,L.1a);O(b){b.U=[];L.1F(a);O(b.P(\'3X\')&&b.P(\'1E\')){L.1W(a,$.N.T(b.P(\'1E\')||$.N.1c()));}16{L.3L(a);}}},1x:Q(a){K b=$.1j(a,L.1a);R(b?b.U:[]);},1W:Q(a,b,c,d,e){K f=$.1j(a,L.1a);O(f){O(!$.4D(b)){b=[b];O(c){b.3g(c);}}K g=f.P(\'1R\');K h=f.P(\'2D\');K k=f.P(\'1I\');K l=f.U[0];f.U=[];1e(K i=0;i<b.Z;i++){K m=$.N.4m(b[i],X,l,g,f.1N());O(m){O((!h||m.S()>=h.S())&&(!k||m.S()<=k.S())){K n=18;1e(K j=0;j<f.U.Z;j++){O(f.U[j].S()==m.S()){n=14;17;}}O(!n){f.U.3g(m);}}}}K o=f.P(\'2F\');f.U.4v(f.P(\'2G\')||(o?2:1),f.U.Z);O(o){3t(f.U.Z){15 1:f.U[1]=f.U[0];17;15 2:f.U[1]=(f.U[0].S()>f.U[1].S()?f.U[0]:f.U[1]);17;}f.1X=18;}f.2B=(f.V?$.N.T(f.V):X);f.V=L.2Q($.N.T(f.U[0]||f.P(\'1E\')||$.N.1c()),f);O(!e){L.2w(a);L.3L(a,d);}}},4B:Q(a,b){K c=$.1j(a,L.1a);O(c&&!L.3c(a)){K d=c.P(\'2k\');O(d[b]&&d[b].1w.1O(a,[c])){d[b].1y.1O(a,[c]);}}},2q:Q(a,b,c,d){K e=$.1j(a,L.1a);O(e&&(d!=X||(e.V.19()!=b||e.V.1d()+1!=c))){e.2B=$.N.T(e.V);K f=L.2Q((b!=X?$.N.T(b,c,1):$.N.1c()),e);e.V=$.N.T(f.19(),f.1d()+1,(d!=X?d:1z.65(e.V.1x(),$.N.2u(f.19(),f.1d()+1))));L.2w(a);}},2i:Q(a,b){K c=$.1j(a,L.1a);O(c){K d=$.N.1b($.N.T(c.V),b,\'m\');L.2q(a,d.19(),d.1d()+1);}},2Y:Q(a,b){K c=$.1j(a,L.1a);O(c){K d=$.N.1b($.N.T(c.V),b,\'d\');L.2q(a,d.19(),d.1d()+1,d.1x());}},2Q:Q(a,b){K c=b.P(\'2D\');K d=b.P(\'1I\');a=(c&&a.S()<c.S()?$.N.T(c):a);a=(d&&a.S()>d.S()?$.N.T(d):a);R a;},4E:Q(a,b){K c=$.1j(a,L.1a);R(!c?X:L.1M(1C 22(1B(b.6G.1i(/^.*4F(-?\\d+).*$/,\'$1\'),10))));},4z:Q(a,b){K c=$.1j(a,L.1a);O(c&&!L.3c(a)){K d=L.4E(a,b);K e=c.P(\'2G\');K f=c.P(\'2F\');O(e){K g=18;1e(K i=0;i<c.U.Z;i++){O(d.S()==c.U[i].S()){c.U.4v(i,1);g=14;17;}}O(!g&&c.U.Z<e){c.U.3g(d);}}16 O(f){O(c.1X){c.U[1]=d;}16{c.U=[d,d];}c.1X=!c.1X;}16{c.U=[d];}c.2B=$.N.T(d);L.3L(a);O(c.1p||c.1X||c.U.Z<(e||(f?2:1))){L.2w(a);}16{L.1F(a);}}},4w:Q(h,i){K j=i.P(\'3Z\');K k=i.P(\'3W\');k=($.4D(k)?k:[1,k]);i.V=L.2Q(i.V||i.P(\'1E\')||$.N.1c(),i);K l=$.N.1b($.N.T(i.V),-i.P(\'1Q\'),\'m\');K m=\'\';1e(K n=0;n<k[0];n++){K o=\'\';1e(K p=0;p<k[1];p++){o+=L.6H(h,i,l.19(),l.1d()+1,j,(n==0&&p==0));$.N.1b(l,1,\'m\');}m+=L.25(j.5C,i).1i(/\\{3o\\}/,o);}K q=L.25(j.5A,i).1i(/\\{3o\\}/,m).1i(/\\{2Z\\}/g,L.4G(i,j))+($.2d.6u&&1B($.2d.4t,10)<7&&!i.1p?\'<6I 9t="3E:3F(0);" 1n="\'+L.49+\'"></6I>\':\'\');K r=i.P(\'2k\');K s=i.P(\'52\');K t=Q(a,b,c,d,e){O(q.2N(\'{\'+a+\':\'+d+\'}\')==-1){R;}K f=r[d];K g=(s?f.1r.1O(h,[i]):X);q=q.1i(1C 4l(\'\\\\{\'+a+\':\'+d+\'\\\\}\',\'g\'),\'<\'+b+(f.1v?\' 2f="\'+i.P(f.1v)+\'"\':\'\')+\' 1n="\'+j.3a+\' \'+j.3a+\'-\'+d+\' \'+e+(f.1w(i)?\'\':\' \'+j.4g)+\'">\'+(g?$.N.2a(i.P(f.1s),g,i.1N()):i.P(f.1s))+\'</\'+c+\'>\');};1e(K u 4A r){t(\'2c\',\'2c 9u="2c"\',\'2c\',u,j.5Q);t(\'2I\',\'a 3D="3E:3F(0)"\',\'a\',u,j.5R);}q=$(q);O(k[1]>1){K v=0;$(j.4e,q).3f(Q(){K a=++v%k[1];$(L).2b(a==1?\'9v\':(a==0?\'6p\':\'\'));});}K w=L;q.1H(j.4f+\' a\').9w(Q(){$(L).2b(j.31);},Q(){(i.1p?$(L).3e(\'.\'+w.1T):i.W).1H(j.4f+\' a\').6j(j.31);}).3C(Q(){w.4z(h,L);}).1K().1H(\'1P.\'+L.2o+\':9x(.\'+L.3n+\')\').4H(Q(){K a=$(L).2A().4u(\'/\');w.2q(h,1B(a[1],10),1B(a[0],10));}).1K().1H(\'1P.\'+L.3n).3C(Q(){$(L).1D(\'6J\',\'6x\').2V(\'4I\').1D({1h:L.9y,1f:L.9z,2R:L.9A,4r:L.9B}).26().3b();}).1K().1H(\'4I.\'+w.2o).4H(Q(){3x{K a=1B($(L).2A(),10);a=(61(a)?i.V.19():a);w.2q(h,a,i.V.1d()+1,i.V.1x());}3y(e){9C(e);}}).6a(Q(a){O(a.1g==13){$(a.1o).4H();}16 O(a.1g==27){$(a.1o).1F().4a(\'1P\').1D(\'6J\',\'9D\');i.1o.3b();}});q.1H(\'.\'+j.3a).3C(Q(){O(!$(L).23(j.4g)){K a=L.6G.1i(1C 4l(\'^.*\'+j.3a+\'-([^ ]+).*$\'),\'$1\');$.N.4B(h,a);}});O(i.P(\'3l\')){q.2b(j.5J);}O(k[0]*k[1]>1){q.2b(j.5K);}K x=i.P(\'4K\');O(x){q.2b(x);}$(\'2T\').9E(q);K y=0;q.1H(j.4e).3f(Q(){y+=$(L).2S();});q.2R(y/k[0]);K z=i.P(\'4V\');O(z){z.1O(h,[q,i]);}R q;},6H:Q(a,b,c,d,e,f){K g=$.N.2u(c,d);K h=b.P(\'3W\');h=($.4D(h)?h:[1,h]);K j=b.P(\'4P\')||(h[0]*h[1]>1);K k=b.P(\'3h\');K l=($.N.T(c,d,1).2L()-k+7)%7;K m=(j?6:1z.9F((l+g)/7));K n=b.P(\'4S\');K o=b.P(\'4T\')&&n;K p=b.P(\'5t\');K q=(b.1X?b.U[0]:b.P(\'2D\'));K r=b.P(\'1I\');K s=b.P(\'2F\');K t=b.P(\'4U\');K u=e.4c.2N(\'{6K}\')>-1;K v=b.P(\'2C\');K w=$.N.1c();K x=$.N.T(c,d,1);$.N.1b(x,-l-(j&&(x.2L()==k)?7:0),\'d\');K y=x.S();K z=\'\';1e(K A=0;A<m;A++){K B=(!u?\'\':\'<2v 1n="4F\'+y+\'">\'+(v?v(x):0)+\'</2v>\');K C=\'\';1e(K D=0;D<7;D++){K E=18;O(s&&b.U.Z>0){E=(x.S()>=b.U[0]&&x.S()<=b.U[1]);}16{1e(K i=0;i<b.U.Z;i++){O(b.U[i].S()==x.S()){E=14;17;}}}K F=(!t?{}:t.1O(a,[x,x.1d()+1==d]));K G=(F.9G!=18)&&(o||x.1d()+1==d)&&(!q||x.S()>=q.S())&&(!r||x.S()<=r.S());C+=L.25(e.1t,b).1i(/\\{1t\\}/g,(G?\'<a 3D="3E:3F(0)"\':\'<2v\')+\' 1n="4F\'+y+\' \'+(F.9H||\'\')+(E&&(o||x.1d()+1==d)?\' \'+e.5M:\'\')+(G?\' \'+e.5L:\'\')+((x.2L()||7)<6?\'\':\' \'+e.5P)+(x.1d()+1==d?\'\':\' \'+e.5O)+(x.S()==w.S()&&(x.1d()+1)==d?\' \'+e.5N:\'\')+(x.S()==b.V.S()&&(x.1d()+1)==d?\' \'+e.31:\'\')+\'"\'+(F.2f||(p&&G)?\' 2f="\'+(F.2f||$.N.2a(p,x,b.1N()))+\'"\':\'\')+\'>\'+(n||(x.1d()+1)==d?F.9I||x.1x():\'&9J;\')+(G?\'</a>\':\'</2v>\'));$.N.1b(x,1,\'d\');y=x.S();}z+=L.25(e.4c,b).1i(/\\{3q\\}/g,C).1i(/\\{6K\\}/g,B);}K H=L.25(e.1q,b).1L(/\\{4b(:[^\\}]+)?\\}/);H=(H[0].Z<=13?\'4j 1J\':H[0].2t(13,H[0].Z-1));H=(f?L.6L(b,c,d,q,r,H,e):$.N.2a(H,$.N.T(c,d,1),b.1N()));K I=L.25(e.2Z,b).1i(/\\{3q\\}/g,L.4G(b,e));R L.25(e.1q,b).1i(/\\{4b(:[^\\}]+)?\\}/g,H).1i(/\\{2Z\\}/g,I).1i(/\\{5G\\}/g,z);},4G:Q(a,b){K c=a.P(\'3h\');K d=a.P(\'1Z\');K e=a.P(\'55\');K f=\'\';1e(K g=0;g<7;g++){K h=(g+c)%7;f+=L.25(b.5H,a).1i(/\\{1t\\}/g,\'<2v 1n="\'+L.5y+h+\'" 2f="\'+d[h]+\'">\'+e[h]+\'</2v>\');}R f;},6L:Q(a,b,c,d,e,f){O(!a.P(\'2i\')){R $.N.2a(f,$.N.T(b,c,1),a.1N());}K g=a.P(\'1Y\'+(f.1L(/2E/i)?\'\':\'9K\'));K h=f.1i(/m+/i,\'\\\\6M\').1i(/y+/i,\'\\\\6N\');K i=\'<1P 1n="\'+L.2o+\'" 2f="\'+a.P(\'5s\')+\'">\';1e(K m=1;m<=12;m++){O((!d||$.N.T(b,m,$.N.2u(b,m)).S()>=d.S())&&(!e||$.N.T(b,m,1).S()<=e.S())){i+=\'<2y 4J="\'+m+\'/\'+b+\'"\'+(c==m?\' 30="30"\':\'\')+\'>\'+g[m-1]+\'</2y>\';}}i+=\'</1P>\';h=h.1i(/\\\\6M/,i);K j=a.P(\'4R\');O(j==\'5x\'){i=\'<1P 1n="\'+L.2o+\' \'+L.3n+\'" 2f="\'+a.P(\'44\')+\'">\'+\'<2y>\'+b+\'</2y></1P>\'+\'<4I 1n="\'+L.2o+\' \'+L.5w+c+\'" 4J="\'+b+\'">\';}16{j=j.4u(\':\');K k=$.N.1c().19();K l=(j[0].1L(\'c[+-].*\')?b+1B(j[0].2t(1),10):((j[0].1L(\'[+-].*\')?k:0)+1B(j[0],10)));K n=(j[1].1L(\'c[+-].*\')?b+1B(j[1].2t(1),10):((j[1].1L(\'[+-].*\')?k:0)+1B(j[1],10)));i=\'<1P 1n="\'+L.2o+\'" 2f="\'+a.P(\'44\')+\'">\';K o=$.N.1b($.N.T(l+1,1,1),-1,\'d\');o=(d&&d.S()>o.S()?d:o).19();K p=$.N.T(n,1,1);p=(e&&e.S()<p.S()?e:p).19();1e(K y=o;y<=p;y++){O(y!=0){i+=\'<2y 4J="\'+c+\'/\'+y+\'"\'+(b==y?\' 30="30"\':\'\')+\'>\'+y+\'</2y>\';}}i+=\'</1P>\';}h=h.1i(/\\\\6N/,i);R h;},25:Q(e,f){K g=Q(a,b){2K(14){K c=e.2N(\'{\'+a+\':5B}\');O(c==-1){R;}K d=e.2t(c).2N(\'{\'+a+\':1K}\');O(d>-1){e=e.2t(0,c)+(b?e.5Y(c+a.Z+8,d-a.Z-8):\'\')+e.2t(c+d+a.Z+6);}}};g(\'1p\',f.1p);g(\'3m\',!f.1p);K h=/\\{9L:([^\\}]+)\\}/;K i=X;2K(i=h.4n(e)){e=e.1i(i[0],f.P(i[1]));}R e;}});Q 6f(a,b){$.2W(a,b);1e(K c 4A b)O(b[c]==X||b[c]==67)a[c]=b[c];R a;};$.68.N=Q(a){K b=9M.5v.9N.9O(3v,1);O($.3z(a,[\'1x\',\'3c\',\'6e\',\'4E\'])>-1){R $.N[a].1O($.N,[L[0]].6O(b));}R L.3f(Q(){O(21 a==\'2J\'){$.N[a].1O($.N,[L].6O(b))}16{$.N.66(L,a||{})}})};$.N=1C 3R();$(Q(){$(1u).9P($.N.6D).9Q(Q(){$.N.1F($.N.1G)})})})(9R);',62,612,'||||||||||||||||||||||||||||||||||||||||||||||var|this||datepick|if|get|function|return|getTime|newDate|selectedDates|drawDate|div|null||length|||||true|case|else|break|false|getFullYear|dataName|add|today|getMonth|for|top|keyCode|left|replace|data|keystroke|_defaults|ctrlKey|class|target|inline|month|date|text|day|document|status|enabled|getDate|action|Math|charAt|parseInt|new|css|defaultDate|hide|curInst|find|maxDate|yyyy|end|match|_normaliseDate|getConfig|apply|select|monthsOffset|dateFormat|the|markerClass|trigger|disabled|setDate|pickingRange|monthNames|dayNames||typeof|Date|hasClass||_prepare|show||monthNamesShort|dayNamesShort|formatDate|addClass|button|browser|documentElement|title|monthsToStep|monthsToJump|changeMonth|dd|commands|year|_disabled|_triggerClass|_monthYearClass|curMinDate|showMonth|floor|100|substring|daysInMonth|span|_update|attr|option|outerHeight|val|prevDate|calculateWeek|minDate|mm|rangeSelect|multiSelect|Show|link|string|while|getDay|throw|indexOf|position|settings|_checkMinMax|width|outerWidth|body|shortYearCutoff|next|extend|clear|changeDay|weekHeader|selected|highlightedClass|||||||||commandClass|focus|isDisabled|offset|parents|each|push|firstDay|rangeSeparator|multiSeparator|DD|isRTL|popup|_anyYearClass|months|tr|days|1970|yy|switch|default|arguments|at|try|catch|inArray|bind|remove|click|href|javascript|void|filter|px|lastVal|ui|effects|_updateInput|scrollLeft|scrollTop|metaKey|altKey|shiftKey|Datepicker|showAnim|showOptions|showSpeed|normal|monthsToShow|selectDefaultDate|autoSize|renderer||lt|gt|current|yearStatus|_popupClass|_disableClass|disable||_coverClass|prev|monthHeader|week|td|monthSelector|daySelector|disabledClass|_ticksTo1970|1000|MM|parseDate|RegExp|determineDate|exec|setMonth|_attachments|removeAttr|height|_extractDates|version|split|splice|_generateContent|inSelect|opera|selectDate|in|performAction|0123456789|isArray|retrieveDate|dp|_generateDayHeaders|change|input|value|pickerClass|showOnFocus|showTrigger|popupContainer|alignment|fixedWeeks|iso8601Week|yearRange|showOtherMonths|selectOtherMonths|onDate|onShow|onChangeMonthYear|onSelect|onClose|altField|altFormat|constrainInput|commandsAsDateFormat|regional|May|dayNamesMin|defaultRenderer|prevText|prevStatus|previous|prevJumpText|prevJumpStatus|nextText|nextStatus|nextJumpText|nextJumpStatus|currentText|currentStatus|todayText|todayStatus|clearText|Clear|clearStatus|all|closeText|Close|closeStatus|Change|monthStatus|dayStatus|Select|prototype|_curMonthClass|any|_curDoWClass|close|picker|start|monthRow|table|thead|tbody|weeks|dayHeader|th|rtlClass|multiClass|defaultClass|selectedClass|todayClass|otherMonthClass|weekendClass|commandButtonClass|commandLinkClass|_msPerDay|dayOfYear|10000|Invalid|object|number|substr|toLowerCase||isNaN|Infinity|setHours|getHours|min|_attachPicker|undefined|fn|metadata|keydown|_keyDown|_keyPress|_keyUp|options|extendRemove|unbind|_autoSize|size|removeClass|children|img|opacity|cursor|map|last|_checkOffset|_default|_getBorders|html|msie|parseFloat|border|hidden|mozilla|doctype|clientWidth|clientHeight|max|_checkExternalClick|andSelf|_allowedChars|className|_generateMonth|iframe|visibility|weekOfYear|_generateMonthSelection|x2E|x2F|concat|bottom|January|February|March|April|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sep|Oct|Nov|Dec|Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sun|Mon|Tue|Wed|Thu|Fri|Sat|Su|Mo|Tu|We|Th|Fr|Sa|Prev|Next|Current|Today|dates|datepicker|weekText|Wk|weekStatus|Week|of|defaultStatus|hasDatepick|cover|dow|prevJump|nextJump|prevWeek|prevWeekText|prevWeekStatus|prevDay|prevDayText|prevDayStatus|nextDay|nextDayText|nextDayStatus|nextWeek|nextWeekText|nextWeekStatus|nav|ctrl|fix|row|header|rtl|multi|highlight|other|weekend|cmd|setDefaults|365|400|10000000|ATOM|COOKIE|FULL|ISO_8601|JULIAN|RFC_822|RFC_850|RFC_1036|RFC_1123|RFC_2822|RSS|TICKS|TIMESTAMP|W3C|toString|oy|Missing|Unknown|name|Unexpected|literal|Additional|found|1900|round|86400000|setMinutes|setSeconds|setMilliseconds|setFullYear|setTime|nodeName|keypress|keyup|clone|id|insertBefore|insertAfter|2009|DM|destroy|empty|removeData|multipleEvents|enable|relative|zIndex|auto|prepend|style|index|x00|display|none|static|absolute|appendTo|thin|medium|thick|is|fixed|topLeft|topRight|bottomLeft|bottomRight|stop|slideDown|slideUp|fadeIn|fadeOut|preventDefault|stopPropagation|String|fromCharCode|charCode|src|type|first|hover|not|offsetLeft|offsetTop|offsetWidth|offsetHeight|alert|visible|append|ceil|selectable|dateClass|content|nbsp|Short|l10n|Array|slice|call|mousedown|resize|jQuery'.split('|'),0,{}));

/***
@title:
Live Search

@version:
2.0

@author:
Andreas Lagerkvist

@date:
2008-08-31

@url:
http://andreaslagerkvist.com/jquery/live-search/

@license:
http://creativecommons.org/licenses/by/3.0/

@copyright:
2008 Andreas Lagerkvist (andreaslagerkvist.com)

@requires:
jquery, jquery.liveSearch.css

@does:
Use this plug-in to turn a normal form-input in to a live ajax search widget. The plug-in displays any HTML you like in the results and the search-results are updated live as the user types.

@howto:
jQuery('#q').liveSearch({url: '/ajax/search.php?q='}); would add the live-search container next to the input#q element and fill it with the contents of /ajax/search.php?q=THE-INPUTS-VALUE onkeyup of the input.

@exampleHTML:
<form method="post" action="/search/">

	<p>
		<label>
			Enter search terms<br />
			<input type="text" name="q" />
		</label> <input type="submit" value="Go" />
	</p>

</form>

@exampleJS:
jQuery('#jquery-live-search-example input[name="q"]').liveSearch({url: Router.urlForModule('SearchResults') + '&q='});
***/
jQuery.fn.liveSearch = function (conf) {
	var config = jQuery.extend({
		url:			'/search-results.php?q=',
		id:				'jquery-live-search',
		duration:		400,
		typeDelay:		200,
		loadingClass:	'loading',
		onSlideUp:		function () {},
		uptadePosition:	false
	}, conf);

	var liveSearch	= jQuery('#' + config.id);

	// Create live-search if it doesn't exist
	if (!liveSearch.length) {
		liveSearch = jQuery('<div id="' + config.id + '"></div>')
						.appendTo(document.body)
						.hide()
						.slideUp(0);

		// Close live-search when clicking outside it
		jQuery(document.body).click(function(event) {
			var clicked = jQuery(event.target);

			if (!(clicked.is('#' + config.id) || clicked.parents('#' + config.id).length || clicked.is('input'))) {
				liveSearch.slideUp(config.duration, function () {
					config.onSlideUp();
				});
			}
		});
	}

	return this.each(function () {
		var input							= jQuery(this).attr('autocomplete', 'off');
		var liveSearchPaddingBorderHoriz	= parseInt(liveSearch.css('paddingLeft'), 10) + parseInt(liveSearch.css('paddingRight'), 10) + parseInt(liveSearch.css('borderLeftWidth'), 10) + parseInt(liveSearch.css('borderRightWidth'), 10);

		// Re calculates live search's position
		var repositionLiveSearch = function () {
			var tmpOffset	= input.offset();
			var inputDim	= {
				left:		tmpOffset.left,
				top:		tmpOffset.top,
				width:		input.outerWidth(),
				height:		input.outerHeight()
			};

			inputDim.topPos		= inputDim.top + inputDim.height;
			inputDim.totalWidth	= inputDim.width - liveSearchPaddingBorderHoriz;

			liveSearch.css({
				position:	'absolute',
				left:		inputDim.left + 'px',
				top:		inputDim.topPos + 'px',
				width:		inputDim.totalWidth + 'px'
			});
		};

		// Shows live-search for this input
		var showLiveSearch = function () {
			// Always reposition the live-search every time it is shown
			// in case user has resized browser-window or zoomed in or whatever
			repositionLiveSearch();

			// We need to bind a resize-event every time live search is shown
			// so it resizes based on the correct input element
			$(window).unbind('resize', repositionLiveSearch);
			$(window).bind('resize', repositionLiveSearch);

			liveSearch.slideDown(config.duration);
		};

		// Hides live-search for this input
		var hideLiveSearch = function () {
			liveSearch.slideUp(config.duration, function () {
				config.onSlideUp();
			});
		};

		var arc_encode = function (s) {
			return encodeURIComponent(encodeURIComponent(s).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A"));

		};


		input
			// On focus, if the live-search is empty, perform an new search
			// If not, just slide it down. Only do this if there's something in the input
			.focus(function () {
				if (this.value !== '') {
					// Perform a new search if there are no search results
					if (liveSearch.html() == '') {
						this.lastValue = '';
						input.keyup();
					}
					// If there are search results show live search
					else {
						// HACK: In case search field changes width onfocus
						setTimeout(showLiveSearch, 1);
					}
				}
			})
			// Auto update live-search onkeyup
			.keyup(function () {
				// Don't update live-search if it's got the same value as last time
				if (this.value != this.lastValue) {
					input.addClass(config.loadingClass);

					var q = this.value;

					// Stop previous ajax-request
					if (this.timer) {
						clearTimeout(this.timer);
					}

					// Start a new ajax-request in X ms
					this.timer = setTimeout(function () {
						jQuery.get(config.url + arc_encode(q), function (data) {
							input.removeClass(config.loadingClass);

							// Show live-search if results and search-term aren't empty
							if (data.length && q.length) {
								liveSearch.html(data);
								showLiveSearch();
							}
							else {
								hideLiveSearch();
							}
						});
					}, config.typeDelay);

					this.lastValue = this.value;
				}
			});
	});
};
;
// tipsy, facebook style tooltips for jquery
// version 1.0.0a
// (c) 2008-2010 jason frame [jason@onehackoranother.com]
// releated under the MIT license

(function($) {

    function fixTitle($ele) {
        if ($ele.attr('title') || typeof($ele.attr('original-title')) != 'string') {
            $ele.attr('original-title', $ele.attr('title') || '').removeAttr('title');
        }
    }

    function Tipsy(element, options) {
        this.$element = $(element);
        this.options = options;
        this.enabled = true;
        fixTitle(this.$element);
    }

    Tipsy.prototype = {
        show: function() {
            var title = this.getTitle();
            if (title && this.enabled) {
                var $tip = this.tip();

                $tip.find('.tipsy-inner')[this.options.html ? 'html' : 'text'](title);
                $tip[0].className = 'tipsy'; // reset classname in case of dynamic gravity
                $tip.remove().css({top: 0, left: 0, visibility: 'hidden', display: 'block'}).appendTo(document.body);

                var pos = $.extend({}, this.$element.offset(), {
                    width: this.$element[0].offsetWidth,
                    height: this.$element[0].offsetHeight
                });

                var actualWidth = $tip[0].offsetWidth, actualHeight = $tip[0].offsetHeight;
                var gravity = (typeof this.options.gravity == 'function')
                                ? this.options.gravity.call(this.$element[0])
                                : this.options.gravity;

                var tp;
                switch (gravity.charAt(0)) {
                    case 'n':
                        tp = {top: pos.top + pos.height + this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 's':
                        tp = {top: pos.top - actualHeight - this.options.offset, left: pos.left + pos.width / 2 - actualWidth / 2};
                        break;
                    case 'e':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth - this.options.offset};
                        break;
                    case 'w':
                        tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width + this.options.offset};
                        break;
                }

                if (gravity.length == 2) {
                    if (gravity.charAt(1) == 'w') {
                        tp.left = pos.left + pos.width / 2 - 15;
                    } else {
                        tp.left = pos.left + pos.width / 2 - actualWidth + 15;
                    }
                }

                $tip.css(tp).addClass('tipsy-' + gravity);

                if (this.options.fade) {
                    $tip.stop().css({opacity: 0, display: 'block', visibility: 'visible'}).animate({opacity: this.options.opacity});
                } else {
                    $tip.css({visibility: 'visible', opacity: this.options.opacity});
                }
            }
        },

        hide: function() {
            if (this.options.fade) {
                this.tip().stop().fadeOut(function() { $(this).remove(); });
            } else {
                this.tip().remove();
            }
        },

        getTitle: function() {
            var title, $e = this.$element, o = this.options;
            fixTitle($e);
            var title, o = this.options;
            if (typeof o.title == 'string') {
                title = $e.attr(o.title == 'title' ? 'original-title' : o.title);
            } else if (typeof o.title == 'function') {
                title = o.title.call($e[0]);
            }
            title = ('' + title).replace(/(^\s*|\s*$)/, "");
            return title || o.fallback;
        },

        tip: function() {
            if (!this.$tip) {
                this.$tip = $('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>');
            }
            return this.$tip;
        },

        validate: function() {
            if (!this.$element[0].parentNode) {
                this.hide();
                this.$element = null;
                this.options = null;
            }
        },

        enable: function() { this.enabled = true; },
        disable: function() { this.enabled = false; },
        toggleEnabled: function() { this.enabled = !this.enabled; }
    };

    $.fn.tipsy = function(options) {

        if (options === true) {
            return this.data('tipsy');
        } else if (typeof options == 'string') {
            return this.data('tipsy')[options]();
        }

        options = $.extend({}, $.fn.tipsy.defaults, options);

        function get(ele) {
            var tipsy = $.data(ele, 'tipsy');
            if (!tipsy) {
                tipsy = new Tipsy(ele, $.fn.tipsy.elementOptions(ele, options));
                $.data(ele, 'tipsy', tipsy);
            }
            return tipsy;
        }

        function enter() {
            var tipsy = get(this);
            tipsy.hoverState = 'in';
            if (options.delayIn == 0) {
                tipsy.show();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'in') tipsy.show(); }, options.delayIn);
            }
        };

        function leave() {
            var tipsy = get(this);
            tipsy.hoverState = 'out';
            if (options.delayOut == 0) {
                tipsy.hide();
            } else {
                setTimeout(function() { if (tipsy.hoverState == 'out') tipsy.hide(); }, options.delayOut);
            }
        };

        if (!options.live) this.each(function() { get(this); });

        if (options.trigger != 'manual') {
            var binder   = options.live ? 'live' : 'bind',
                eventIn  = options.trigger == 'hover' ? 'mouseenter' : 'focus',
                eventOut = options.trigger == 'hover' ? 'mouseleave' : 'blur';
            this[binder](eventIn, enter)[binder](eventOut, leave);
        }

        return this;

    };

    $.fn.tipsy.defaults = {
        delayIn: 0,
        delayOut: 0,
        fade: false,
        fallback: '',
        gravity: 'n',
        html: false,
        live: false,
        offset: 0,
        opacity: 0.8,
        title: 'title',
        trigger: 'hover'
    };

    // Overwrite this method to provide options on a per-element basis.
    // For example, you could store the gravity in a 'tipsy-gravity' attribute:
    // return $.extend({}, options, {gravity: $(ele).attr('tipsy-gravity') || 'n' });
    // (remember - do not modify 'options' in place!)
    $.fn.tipsy.elementOptions = function(ele, options) {
        return $.metadata ? $.extend({}, options, $(ele).metadata()) : options;
    };

    $.fn.tipsy.autoNS = function() {
        return $(this).offset().top > ($(document).scrollTop() + $(window).height() / 2) ? 's' : 'n';
    };

    $.fn.tipsy.autoWE = function() {
        return $(this).offset().left > ($(document).scrollLeft() + $(window).width() / 2) ? 'e' : 'w';
    };

})(jQuery);
;
(function($){$.fn.lazyload=function(options){var settings={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(options){$.extend(settings,options);}
var elements=this;if("scroll"==settings.event){$(settings.container).bind("scroll",function(event){var counter=0;elements.each(function(){if(!$.belowthefold(this,settings)&&!$.rightoffold(this,settings)){$(this).trigger("appear");}else{if(counter++>settings.failurelimit){return false;}}});var temp=$.grep(elements,function(element){return!element.loaded;});elements=$(temp);});}
return this.each(function(){var self=this;$(self).attr("original",$(self).attr("src"));if("scroll"!=settings.event||$.belowthefold(self,settings)||$.rightoffold(self,settings)){if(settings.placeholder){$(self).attr("src",settings.placeholder);}else{$(self).removeAttr("src");}
self.loaded=false;}else{self.loaded=true;}
$(self).one("appear",function(){if(!this.loaded){$("<img />").bind("load",function(){$(self).hide().attr("src",$(self).attr("original"))
[settings.effect](settings.effectspeed);self.loaded=true;}).attr("src",$(self).attr("original"));};});if("scroll"!=settings.event){$(self).bind(settings.event,function(event){if(!self.loaded){$(self).trigger("appear");}});}});};$.belowthefold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).height()+$(window).scrollTop();}
else{var fold=$(settings.container).offset().top+$(settings.container).height();}
return fold<=$(element).offset().top-settings.threshold;};$.rightoffold=function(element,settings){if(settings.container===undefined||settings.container===window){var fold=$(window).width()+$(window).scrollLeft();}
else{var fold=$(settings.container).offset().left+$(settings.container).width();}
return fold<=$(element).offset().left-settings.threshold;};$.extend($.expr[':'],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"});})(jQuery);;
/**
 * jQuery bxSlider v3.0
 * http://bxslider.com
 *
 * Copyright 2010, Steven Wanderski
 * http://stevenwanderski.com
 *
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function($){$.fn.bxSlider=function(options){var defaults={mode:'horizontal',infiniteLoop:true,hideControlOnEnd:false,controls:true,speed:500,easing:'swing',pager:false,pagerSelector:null,pagerType:'full',pagerLocation:'bottom',pagerShortSeparator:'/',pagerActiveClass:'pager-active',nextText:'next',nextImage:'',nextSelector:null,prevText:'prev',prevImage:'',prevSelector:null,captions:false,captionsSelector:null,auto:false,autoDirection:'next',autoControls:false,autoControlsSelector:null,autoStart:true,autoHover:false,autoDelay:0,pause:3000,startText:'start',startImage:'',stopText:'stop',stopImage:'',ticker:false,tickerSpeed:5000,tickerDirection:'next',tickerHover:false,wrapperClass:'bx-wrapper',startingSlide:0,displaySlideQty:1,moveSlideQty:1,randomStart:false,onBeforeSlide:function(){},onAfterSlide:function(){},onLastSlide:function(){},onFirstSlide:function(){},onNextSlide:function(){},onPrevSlide:function(){},buildPager:null}
var options=$.extend(defaults,options);var base=this;var $parent='';var $origElement='';var $children='';var $outerWrapper='';var $firstChild='';var childrenWidth='';var childrenOuterWidth='';var wrapperWidth='';var wrapperHeight='';var $pager='';var interval='';var $autoControls='';var $stopHtml='';var $startContent='';var $stopContent='';var autoPlaying=true;var loaded=false;var childrenMaxWidth=0;var childrenMaxHeight=0;var currentSlide=0;var origLeft=0;var origTop=0;var origShowWidth=0;var origShowHeight=0;var tickerLeft=0;var tickerTop=0;var isWorking=false;var firstSlide=0;var lastSlide=$children.length-1;this.goToSlide=function(number,stopAuto){if(!isWorking){isWorking=true;currentSlide=number;options.onBeforeSlide(currentSlide,$children.length,$children.eq(currentSlide));if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
if(stopAuto){if(options.auto){base.stopShow(true);}}
slide=number;if(slide==firstSlide){options.onFirstSlide(currentSlide,$children.length,$children.eq(currentSlide));}
if(slide==lastSlide){options.onLastSlide(currentSlide,$children.length,$children.eq(currentSlide));}
if(options.mode=='horizontal'){$parent.animate({'left':'-'+getSlidePosition(slide,'left')+'px'},options.speed,options.easing,function(){isWorking=false;options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='vertical'){$parent.animate({'top':'-'+getSlidePosition(slide,'top')+'px'},options.speed,options.easing,function(){isWorking=false;options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='fade'){setChildrenFade();}
checkEndControls();if(options.moveSlideQty>1){number=Math.floor(number/options.moveSlideQty);}
makeSlideActive(number);showCaptions();}}
this.goToNextSlide=function(stopAuto){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
if(stopAuto){if(options.auto){base.stopShow(true);}}
if(!options.infiniteLoop){if(!isWorking){var slideLoop=false;currentSlide=(currentSlide+(options.moveSlideQty));if(currentSlide<=lastSlide){checkEndControls();options.onNextSlide(currentSlide,$children.length,$children.eq(currentSlide));base.goToSlide(currentSlide);}else{currentSlide-=options.moveSlideQty;}}}else{if(!isWorking){isWorking=true;var slideLoop=false;currentSlide=(currentSlide+options.moveSlideQty);if(currentSlide>lastSlide){currentSlide=currentSlide%$children.length;slideLoop=true;}
options.onNextSlide(currentSlide,$children.length,$children.eq(currentSlide));options.onBeforeSlide(currentSlide,$children.length,$children.eq(currentSlide));if(options.mode=='horizontal'){var parentLeft=(options.moveSlideQty*childrenOuterWidth);$parent.animate({'left':'-='+parentLeft+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('left','-'+getSlidePosition(currentSlide,'left')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='vertical'){var parentTop=(options.moveSlideQty*childrenMaxHeight);$parent.animate({'top':'-='+parentTop+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('top','-'+getSlidePosition(currentSlide,'top')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='fade'){setChildrenFade();}
if(options.moveSlideQty>1){makeSlideActive(Math.ceil(currentSlide/options.moveSlideQty));}else{makeSlideActive(currentSlide);}
showCaptions();}}}
this.goToPreviousSlide=function(stopAuto){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
if(stopAuto){if(options.auto){base.stopShow(true);}}
if(!options.infiniteLoop){if(!isWorking){var slideLoop=false;currentSlide=currentSlide-options.moveSlideQty;if(currentSlide<0){currentSlide=0;if(options.hideControlOnEnd){$('.bx-prev',$outerWrapper).hide();}}
checkEndControls();options.onPrevSlide(currentSlide,$children.length,$children.eq(currentSlide));base.goToSlide(currentSlide);}}else{if(!isWorking){isWorking=true;var slideLoop=false;currentSlide=(currentSlide-(options.moveSlideQty));if(currentSlide<0){negativeOffset=(currentSlide%$children.length);if(negativeOffset==0){currentSlide=0;}else{currentSlide=($children.length)+negativeOffset;}
slideLoop=true;}
options.onPrevSlide(currentSlide,$children.length,$children.eq(currentSlide));options.onBeforeSlide(currentSlide,$children.length,$children.eq(currentSlide));if(options.mode=='horizontal'){var parentLeft=(options.moveSlideQty*childrenOuterWidth);$parent.animate({'left':'+='+parentLeft+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('left','-'+getSlidePosition(currentSlide,'left')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='vertical'){var parentTop=(options.moveSlideQty*childrenMaxHeight);$parent.animate({'top':'+='+parentTop+'px'},options.speed,options.easing,function(){isWorking=false;if(slideLoop){$parent.css('top','-'+getSlidePosition(currentSlide,'top')+'px');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});}else if(options.mode=='fade'){setChildrenFade();}
if(options.moveSlideQty>1){makeSlideActive(Math.ceil(currentSlide/options.moveSlideQty));}else{makeSlideActive(currentSlide);}
showCaptions();}}}
this.goToFirstSlide=function(stopAuto){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
base.goToSlide(firstSlide,stopAuto);}
this.goToLastSlide=function(){if(typeof(stopAuto)=='undefined'){var stopAuto=true;}
base.goToSlide(lastSlide,stopAuto);}
this.getCurrentSlide=function(){return currentSlide;}
this.getSlideCount=function(){return $children.length;}
this.stopShow=function(changeText){clearInterval(interval);if(typeof(changeText)=='undefined'){var changeText=true;}
if(changeText&&options.autoControls){$autoControls.html($startContent).removeClass('stop').addClass('start');autoPlaying=false;}}
this.startShow=function(changeText){if(typeof(changeText)=='undefined'){var changeText=true;}
setAutoInterval();if(changeText&&options.autoControls){$autoControls.html($stopContent).removeClass('start').addClass('stop');autoPlaying=true;}}
this.stopTicker=function(changeText){$parent.stop();if(typeof(changeText)=='undefined'){var changeText=true;}
if(changeText&&options.ticker){$autoControls.html($startContent).removeClass('stop').addClass('start');autoPlaying=false;}}
this.startTicker=function(changeText){if(options.mode=='horizontal'){if(options.tickerDirection=='next'){var stoppedLeft=parseInt($parent.css('left'));var remainingDistance=(origShowWidth+stoppedLeft)+$children.eq(0).width();}else if(options.tickerDirection=='prev'){var stoppedLeft=-parseInt($parent.css('left'));var remainingDistance=(stoppedLeft)-$children.eq(0).width();}
var finishingSpeed=(remainingDistance*options.tickerSpeed)/origShowWidth;moveTheShow(tickerLeft,remainingDistance,finishingSpeed);}else if(options.mode=='vertical'){if(options.tickerDirection=='next'){var stoppedTop=parseInt($parent.css('top'));var remainingDistance=(origShowHeight+stoppedTop)+$children.eq(0).height();}else if(options.tickerDirection=='prev'){var stoppedTop=-parseInt($parent.css('top'));var remainingDistance=(stoppedTop)-$children.eq(0).height();}
var finishingSpeed=(remainingDistance*options.tickerSpeed)/origShowHeight;moveTheShow(tickerTop,remainingDistance,finishingSpeed);if(typeof(changeText)=='undefined'){var changeText=true;}
if(changeText&&options.ticker){$autoControls.html($stopContent).removeClass('start').addClass('stop');autoPlaying=true;}}}
this.initShow=function(){$parent=$(this);$origElement=$parent.clone();$children=$parent.children();$outerWrapper='';$firstChild=$parent.children(':first');childrenWidth=$firstChild.width();childrenMaxWidth=0;childrenOuterWidth=$firstChild.outerWidth();childrenMaxHeight=0;wrapperWidth=getWrapperWidth();wrapperHeight=getWrapperHeight();isWorking=false;$pager='';currentSlide=0;origLeft=0;origTop=0;interval='';$autoControls='';$stopHtml='';$startContent='';$stopContent='';autoPlaying=true;loaded=false;origShowWidth=0;origShowHeight=0;tickerLeft=0;tickerTop=0;firstSlide=0;lastSlide=$children.length-1;$children.each(function(index){if($(this).outerHeight()>childrenMaxHeight){childrenMaxHeight=$(this).outerHeight();}
if($(this).outerWidth()>childrenMaxWidth){childrenMaxWidth=$(this).outerWidth();}});if(options.randomStart){var randomNumber=Math.floor(Math.random()*$children.length);currentSlide=randomNumber;origLeft=childrenOuterWidth*(options.moveSlideQty+randomNumber);origTop=childrenMaxHeight*(options.moveSlideQty+randomNumber);}else{currentSlide=options.startingSlide;origLeft=childrenOuterWidth*(options.moveSlideQty+options.startingSlide);origTop=childrenMaxHeight*(options.moveSlideQty+options.startingSlide);}
initCss();if(options.pager&&!options.ticker){if(options.pagerType=='full'){showPager('full');}else if(options.pagerType=='short'){showPager('short');}}
if(options.controls&&!options.ticker){setControlsVars();}
if(options.auto||options.ticker){if(options.autoControls){setAutoControlsVars();}
if(options.autoStart){setTimeout(function(){base.startShow(true);},options.autoDelay);}else{base.stopShow(true);}
if(options.autoHover&&!options.ticker){setAutoHover();}}
if(options.moveSlideQty>1){makeSlideActive(Math.ceil(currentSlide/options.moveSlideQty));}else{makeSlideActive(currentSlide);}
checkEndControls();if(options.captions){showCaptions();}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));}
this.destroyShow=function(){clearInterval(interval);$('.bx-next, .bx-prev, .bx-pager, .bx-auto',$outerWrapper).remove();$parent.unwrap().unwrap().removeAttr('style');$parent.children().removeAttr('style').not('.pager').remove();$children.removeClass('pager');}
this.reloadShow=function(){base.destroyShow();base.initShow();}
function initCss(){setChildrenLayout(options.startingSlide);if(options.mode=='horizontal'){$parent.wrap('<div class="'+options.wrapperClass+'" style="width:'+wrapperWidth+'px; position:relative;"></div>').wrap('<div class="bx-window" style="position:relative; overflow:hidden; width:'+wrapperWidth+'px;"></div>').css({width:'999999px',position:'relative',left:'-'+(origLeft)+'px'});$parent.children().css({width:childrenWidth,'float':'left',listStyle:'none'});$outerWrapper=$parent.parent().parent();$children.addClass('pager');}else if(options.mode=='vertical'){$parent.wrap('<div class="'+options.wrapperClass+'" style="width:'+childrenMaxWidth+'px; position:relative;"></div>').wrap('<div class="bx-window" style="width:'+childrenMaxWidth+'px; height:'+wrapperHeight+'px; position:relative; overflow:hidden;"></div>').css({height:'999999px',position:'relative',top:'-'+(origTop)+'px'});$parent.children().css({listStyle:'none',height:childrenMaxHeight});$outerWrapper=$parent.parent().parent();$children.addClass('pager');}else if(options.mode=='fade'){$parent.wrap('<div class="'+options.wrapperClass+'" style="width:'+childrenMaxWidth+'px; position:relative;"></div>').wrap('<div class="bx-window" style="height:'+childrenMaxHeight+'px; width:'+childrenMaxWidth+'px; position:relative; overflow:hidden;"></div>');$parent.children().css({listStyle:'none',position:'absolute',top:0,left:0,zIndex:98});$outerWrapper=$parent.parent().parent();$children.not(':eq('+currentSlide+')').fadeTo(0,0);$children.eq(currentSlide).css('zIndex',99);}
if(options.captions&&options.captionsSelector==null){$outerWrapper.append('<div class="bx-captions"></div>');}}
function setChildrenLayout(){if(options.mode=='horizontal'||options.mode=='vertical'){var $prependedChildren=getArraySample($children,0,options.moveSlideQty,'backward');$.each($prependedChildren,function(index){$parent.prepend($(this));});var totalNumberAfterWindow=($children.length+options.moveSlideQty)-1;var pagerExcess=$children.length-options.displaySlideQty;var numberToAppend=totalNumberAfterWindow-pagerExcess;var $appendedChildren=getArraySample($children,0,numberToAppend,'forward');if(options.infiniteLoop){$.each($appendedChildren,function(index){$parent.append($(this));});}}}
function setControlsVars(){if(options.nextImage!=''){nextContent=options.nextImage;nextType='image';}else{nextContent=options.nextText;nextType='text';}
if(options.prevImage!=''){prevContent=options.prevImage;prevType='image';}else{prevContent=options.prevText;prevType='text';}
showControls(nextType,nextContent,prevType,prevContent);}
function setAutoInterval(){if(options.auto){if(!options.infiniteLoop){if(options.autoDirection=='next'){interval=setInterval(function(){currentSlide+=options.moveSlideQty;if(currentSlide>lastSlide){currentSlide=currentSlide%$children.length;}
base.goToSlide(currentSlide,false);},options.pause);}else if(options.autoDirection=='prev'){interval=setInterval(function(){currentSlide-=options.moveSlideQty;if(currentSlide<0){negativeOffset=(currentSlide%$children.length);if(negativeOffset==0){currentSlide=0;}else{currentSlide=($children.length)+negativeOffset;}}
base.goToSlide(currentSlide,false);},options.pause);}}else{if(options.autoDirection=='next'){interval=setInterval(function(){base.goToNextSlide(false);},options.pause);}else if(options.autoDirection=='prev'){interval=setInterval(function(){base.goToPreviousSlide(false);},options.pause);}}}else if(options.ticker){options.tickerSpeed*=10;$('.pager',$outerWrapper).each(function(index){origShowWidth+=$(this).width();origShowHeight+=$(this).height();});if(options.tickerDirection=='prev'&&options.mode=='horizontal'){$parent.css('left','-'+(origShowWidth+origLeft)+'px');}else if(options.tickerDirection=='prev'&&options.mode=='vertical'){$parent.css('top','-'+(origShowHeight+origTop)+'px');}
if(options.mode=='horizontal'){tickerLeft=parseInt($parent.css('left'));moveTheShow(tickerLeft,origShowWidth,options.tickerSpeed);}else if(options.mode=='vertical'){tickerTop=parseInt($parent.css('top'));moveTheShow(tickerTop,origShowHeight,options.tickerSpeed);}
if(options.tickerHover){setTickerHover();}}}
function moveTheShow(leftCss,distance,speed){if(options.mode=='horizontal'){if(options.tickerDirection=='next'){$parent.animate({'left':'-='+distance+'px'},speed,'linear',function(){$parent.css('left',leftCss);moveTheShow(leftCss,origShowWidth,options.tickerSpeed);});}else if(options.tickerDirection=='prev'){$parent.animate({'left':'+='+distance+'px'},speed,'linear',function(){$parent.css('left',leftCss);moveTheShow(leftCss,origShowWidth,options.tickerSpeed);});}}else if(options.mode=='vertical'){if(options.tickerDirection=='next'){$parent.animate({'top':'-='+distance+'px'},speed,'linear',function(){$parent.css('top',leftCss);moveTheShow(leftCss,origShowHeight,options.tickerSpeed);});}else if(options.tickerDirection=='prev'){$parent.animate({'top':'+='+distance+'px'},speed,'linear',function(){$parent.css('top',leftCss);moveTheShow(leftCss,origShowHeight,options.tickerSpeed);});}}}
function setAutoControlsVars(){if(options.startImage!=''){startContent=options.startImage;startType='image';}else{startContent=options.startText;startType='text';}
if(options.stopImage!=''){stopContent=options.stopImage;stopType='image';}else{stopContent=options.stopText;stopType='text';}
showAutoControls(startType,startContent,stopType,stopContent);}
function setAutoHover(){$outerWrapper.find('.bx-window').hover(function(){if(autoPlaying){base.stopShow(false);}},function(){if(autoPlaying){base.startShow(false);}});}
function setTickerHover(){$parent.hover(function(){if(autoPlaying){base.stopTicker(false);}},function(){if(autoPlaying){base.startTicker(false);}});}
function setChildrenFade(){$children.not(':eq('+currentSlide+')').fadeTo(options.speed,0).css('zIndex',98);$children.eq(currentSlide).css('zIndex',99).fadeTo(options.speed,1,function(){isWorking=false;if(jQuery.browser.msie){$children.eq(currentSlide).get(0).style.removeAttribute('filter');}
options.onAfterSlide(currentSlide,$children.length,$children.eq(currentSlide));});};function makeSlideActive(number){if(options.pagerType=='full'&&options.pager){$('a',$pager).removeClass(options.pagerActiveClass);$('a',$pager).eq(number).addClass(options.pagerActiveClass);}else if(options.pagerType=='short'&&options.pager){$('.bx-pager-current',$pager).html(currentSlide+1);}}
function showControls(nextType,nextContent,prevType,prevContent){var $nextHtml=$('<a href="" class="bx-next"></a>');var $prevHtml=$('<a href="" class="bx-prev"></a>');if(nextType=='text'){$nextHtml.html(nextContent);}else{$nextHtml.html('<img src="'+nextContent+'" />');}
if(prevType=='text'){$prevHtml.html(prevContent);}else{$prevHtml.html('<img src="'+prevContent+'" />');}
if(options.prevSelector){$(options.prevSelector).append($prevHtml);}else{$outerWrapper.append($prevHtml);}
if(options.nextSelector){$(options.nextSelector).append($nextHtml);}else{$outerWrapper.append($nextHtml);}
$nextHtml.click(function(){base.goToNextSlide();return false;});$prevHtml.click(function(){base.goToPreviousSlide();return false;});}
function showPager(type){var pagerQty=$children.length;if(options.moveSlideQty>1){if($children.length%options.moveSlideQty!=0){pagerQty=Math.ceil($children.length/options.moveSlideQty);}else{pagerQty=$children.length/options.moveSlideQty;}}
var pagerString='';if(options.buildPager){for(var i=0;i<pagerQty;i++){pagerString+=options.buildPager(i,$children.eq(i*options.moveSlideQty));}}else if(type=='full'){for(var i=1;i<=pagerQty;i++){pagerString+='<a href="" class="pager-link pager-'+i+'">'+i+'</a>';}}else if(type=='short'){pagerString='<span class="bx-pager-current">'+(options.startingSlide+1)+'</span> '+options.pagerShortSeparator+' <span class="bx-pager-total">'+$children.length+'<span>';}
if(options.pagerSelector){$(options.pagerSelector).append(pagerString);$pager=$(options.pagerSelector);}else{var $pagerContainer=$('<div class="bx-pager"></div>');$pagerContainer.append(pagerString);if(options.pagerLocation=='top'){$outerWrapper.prepend($pagerContainer);}else if(options.pagerLocation=='bottom'){$outerWrapper.append($pagerContainer);}
$pager=$('.bx-pager',$outerWrapper);}
$pager.children().click(function(){if(options.pagerType=='full'){var slideIndex=$pager.children().index(this);if(options.moveSlideQty>1){slideIndex*=options.moveSlideQty;}
base.goToSlide(slideIndex);}
return false;});}
function showCaptions(){var caption=$('img',$children.eq(currentSlide)).attr('title');if(caption!=''){if(options.captionsSelector){$(options.captionsSelector).html(caption);}else{$('.bx-captions',$outerWrapper).html(caption);}}else{if(options.captionsSelector){$(options.captionsSelector).html(' ');}else{$('.bx-captions',$outerWrapper).html(' ');}}}
function showAutoControls(startType,startContent,stopType,stopContent){$autoControls=$('<a href="" class="bx-start"></a>');if(startType=='text'){$startContent=startContent;}else{$startContent='<img src="'+startContent+'" />';}
if(stopType=='text'){$stopContent=stopContent;}else{$stopContent='<img src="'+stopContent+'" />';}
if(options.autoControlsSelector){$(options.autoControlsSelector).append($autoControls);}else{$outerWrapper.append('<div class="bx-auto"></div>');$('.bx-auto',$outerWrapper).html($autoControls);}
$autoControls.click(function(){if(options.ticker){if($(this).hasClass('stop')){base.stopTicker();}else if($(this).hasClass('start')){base.startTicker();}}else{if($(this).hasClass('stop')){base.stopShow(true);}else if($(this).hasClass('start')){base.startShow(true);}}
return false;});}
function checkEndControls(){if(!options.infiniteLoop&&options.hideControlOnEnd){if(currentSlide==firstSlide){$('.bx-prev',$outerWrapper).hide();}else{$('.bx-prev',$outerWrapper).show();}
if(currentSlide==lastSlide){$('.bx-next',$outerWrapper).hide();}else{$('.bx-next',$outerWrapper).show();}}}
function getSlidePosition(number,side){if(side=='left'){var position=$('.pager',$outerWrapper).eq(number).position().left;}else if(side=='top'){var position=$('.pager',$outerWrapper).eq(number).position().top;}
return position;}
function getWrapperWidth(){var wrapperWidth=$firstChild.outerWidth()*options.displaySlideQty;return wrapperWidth;}
function getWrapperHeight(){var wrapperHeight=$firstChild.outerHeight()*options.displaySlideQty;return wrapperHeight;}
function getArraySample(array,start,length,direction){var sample=[];var loopLength=length;var startPopulatingArray=false;if(direction=='backward'){array=$.makeArray(array);array.reverse();}
while(loopLength>0){$.each(array,function(index,val){if(loopLength>0){if(!startPopulatingArray){if(index==start){startPopulatingArray=true;sample.push($(this).clone());loopLength--;}}else{sample.push($(this).clone());loopLength--;}}else{return false;}});}
return sample;}
this.each(function(){base.initShow();});return this;}
jQuery.fx.prototype.cur=function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop];}
var r=parseFloat(jQuery.css(this.elem,this.prop));return r;}})(jQuery);;
/**
 * TableDnD plug-in for JQuery, allows you to drag and drop table rows
 * You can set up various options to control how the system will work
 * Copyright (c) Denis Howlett <denish@isocra.com>
 * Licensed like jQuery, see http://docs.jquery.com/License.
 *
 * Configuration options:
 *
 * onDragStyle
 *     This is the style that is assigned to the row during drag. There are limitations to the styles that can be
 *     associated with a row (such as you can't assign a border--well you can, but it won't be
 *     displayed). (So instead consider using onDragClass.) The CSS style to apply is specified as
 *     a map (as used in the jQuery css(...) function).
 * onDropStyle
 *     This is the style that is assigned to the row when it is dropped. As for onDragStyle, there are limitations
 *     to what you can do. Also this replaces the original style, so again consider using onDragClass which
 *     is simply added and then removed on drop.
 * onDragClass
 *     This class is added for the duration of the drag and then removed when the row is dropped. It is more
 *     flexible than using onDragStyle since it can be inherited by the row cells and other content. The default
 *     is class is tDnD_whileDrag. So to use the default, simply customise this CSS class in your
 *     stylesheet.
 * onDrop
 *     Pass a function that will be called when the row is dropped. The function takes 2 parameters: the table
 *     and the row that was dropped. You can work out the new order of the rows by using
 *     table.rows.
 * onDragStart
 *     Pass a function that will be called when the user starts dragging. The function takes 2 parameters: the
 *     table and the row which the user has started to drag.
 * onAllowDrop
 *     Pass a function that will be called as a row is over another row. If the function returns true, allow
 *     dropping on that row, otherwise not. The function takes 2 parameters: the dragged row and the row under
 *     the cursor. It returns a boolean: true allows the drop, false doesn't allow it.
 * scrollAmount
 *     This is the number of pixels to scroll if the user moves the mouse cursor to the top or bottom of the
 *     window. The page should automatically scroll up or down as appropriate (tested in IE6, IE7, Safari, FF2,
 *     FF3 beta
 * dragHandle
 *     This is the name of a class that you assign to one or more cells in each row that is draggable. If you
 *     specify this class, then you are responsible for setting cursor: move in the CSS and only these cells
 *     will have the drag behaviour. If you do not specify a dragHandle, then you get the old behaviour where
 *     the whole row is draggable.
 *
 * Other ways to control behaviour:
 *
 * Add class="nodrop" to any rows for which you don't want to allow dropping, and class="nodrag" to any rows
 * that you don't want to be draggable.
 *
 * Inside the onDrop method you can also call $.tableDnD.serialize() this returns a string of the form
 * <tableID>[]=<rowID1>&<tableID>[]=<rowID2> so that you can send this back to the server. The table must have
 * an ID as must all the rows.
 *
 * Other methods:
 *
 * $("...").tableDnDUpdate()
 * Will update all the matching tables, that is it will reapply the mousedown method to the rows (or handle cells).
 * This is useful if you have updated the table rows using Ajax and you want to make the table draggable again.
 * The table maintains the original configuration (so you don't have to specify it again).
 *
 * $("...").tableDnDSerialize()
 * Will serialize and return the serialized string as above, but for each of the matching tables--so it can be
 * called from anywhere and isn't dependent on the currentTable being set up correctly before calling
 *
 * Known problems:
 * - Auto-scoll has some problems with IE7  (it scrolls even when it shouldn't), work-around: set scrollAmount to 0
 *
 * Version 0.2: 2008-02-20 First public version
 * Version 0.3: 2008-02-07 Added onDragStart option
 *                         Made the scroll amount configurable (default is 5 as before)
 * Version 0.4: 2008-03-15 Changed the noDrag/noDrop attributes to nodrag/nodrop classes
 *                         Added onAllowDrop to control dropping
 *                         Fixed a bug which meant that you couldn't set the scroll amount in both directions
 *                         Added serialize method
 * Version 0.5: 2008-05-16 Changed so that if you specify a dragHandle class it doesn't make the whole row
 *                         draggable
 *                         Improved the serialize method to use a default (and settable) regular expression.
 *                         Added tableDnDupate() and tableDnDSerialize() to be called when you are outside the table
 */
jQuery.tableDnD = {
    /** Keep hold of the current table being dragged */
    currentTable : null,
    /** Keep hold of the current drag object if any */
    dragObject: null,
    /** The current mouse offset */
    mouseOffset: null,
    /** Remember the old value of Y so that we don't do too much processing */
    oldY: 0,

    /** Actually build the structure */
    build: function(options) {
        // Set up the defaults if any

        this.each(function() {
            // This is bound to each matching table, set up the defaults and override with user options
            this.tableDnDConfig = jQuery.extend({
                onDragStyle: null,
                onDropStyle: null,
				// Add in the default class for whileDragging
				onDragClass: "tDnD_whileDrag",
                onDrop: null,
                onDragStart: null,
                scrollAmount: 5,
				serializeRegexp: /[^\-]*$/, // The regular expression to use to trim row IDs
				serializeParamName: null, // If you want to specify another parameter name instead of the table ID
                dragHandle: null // If you give the name of a class here, then only Cells with this class will be draggable
            }, options || {});
            // Now make the rows draggable
            jQuery.tableDnD.makeDraggable(this);
        });

        // Now we need to capture the mouse up and mouse move event
        // We can use bind so that we don't interfere with other event handlers
        jQuery(document)
            .bind('mousemove', jQuery.tableDnD.mousemove)
            .bind('mouseup', jQuery.tableDnD.mouseup);

        // Don't break the chain
        return this;
    },

    /** This function makes all the rows on the table draggable apart from those marked as "NoDrag" */
    makeDraggable: function(table) {
        var config = table.tableDnDConfig;
		if (table.tableDnDConfig.dragHandle) {
			// We only need to add the event to the specified cells
			var cells = jQuery("td."+table.tableDnDConfig.dragHandle, table);
			cells.each(function() {
				// The cell is bound to "this"
                jQuery(this).mousedown(function(ev) {
                    jQuery.tableDnD.dragObject = this.parentNode;
                    jQuery.tableDnD.currentTable = table;
                    jQuery.tableDnD.mouseOffset = jQuery.tableDnD.getMouseOffset(this, ev);
                    if (config.onDragStart) {
                        // Call the onDrop method if there is one
                        config.onDragStart(table, this);
                    }
                    return false;
                });
			})
		} else {
			// For backwards compatibility, we add the event to the whole row
	        var rows = jQuery("tr", table); // get all the rows as a wrapped set
	        rows.each(function() {
				// Iterate through each row, the row is bound to "this"
				var row = jQuery(this);
				if (! row.hasClass("nodrag")) {
	                row.mousedown(function(ev) {
	                    if (ev.target.tagName == "TD") {
	                        jQuery.tableDnD.dragObject = this;
	                        jQuery.tableDnD.currentTable = table;
	                        jQuery.tableDnD.mouseOffset = jQuery.tableDnD.getMouseOffset(this, ev);
	                        if (config.onDragStart) {
	                            // Call the onDrop method if there is one
	                            config.onDragStart(table, this);
	                        }
	                        return false;
	                    }
	                }).css("cursor", "move"); // Store the tableDnD object
				}
			});
		}
	},

	updateTables: function() {
		this.each(function() {
			// this is now bound to each matching table
			if (this.tableDnDConfig) {
				jQuery.tableDnD.makeDraggable(this);
			}
		})
	},

    /** Get the mouse coordinates from the event (allowing for browser differences) */
    mouseCoords: function(ev){
        if(ev.pageX || ev.pageY){
            return {x:ev.pageX, y:ev.pageY};
        }
        return {
            x:ev.clientX + document.body.scrollLeft - document.body.clientLeft,
            y:ev.clientY + document.body.scrollTop  - document.body.clientTop
        };
    },

    /** Given a target element and a mouse event, get the mouse offset from that element.
        To do this we need the element's position and the mouse position */
    getMouseOffset: function(target, ev) {
        ev = ev || window.event;

        var docPos    = this.getPosition(target);
        var mousePos  = this.mouseCoords(ev);
        return {x:mousePos.x - docPos.x, y:mousePos.y - docPos.y};
    },

    /** Get the position of an element by going up the DOM tree and adding up all the offsets */
    getPosition: function(e){
        var left = 0;
        var top  = 0;
        /** Safari fix -- thanks to Luis Chato for this! */
        if (e.offsetHeight == 0) {
            /** Safari 2 doesn't correctly grab the offsetTop of a table row
            this is detailed here:
            http://jacob.peargrove.com/blog/2006/technical/table-row-offsettop-bug-in-safari/
            the solution is likewise noted there, grab the offset of a table cell in the row - the firstChild.
            note that firefox will return a text node as a first child, so designing a more thorough
            solution may need to take that into account, for now this seems to work in firefox, safari, ie */
            e = e.firstChild; // a table cell
        }

        while (e.offsetParent){
            left += e.offsetLeft;
            top  += e.offsetTop;
            e     = e.offsetParent;
        }

        left += e.offsetLeft;
        top  += e.offsetTop;

        return {x:left, y:top};
    },

    mousemove: function(ev) {
        if (jQuery.tableDnD.dragObject == null) {
            return;
        }

        var dragObj = jQuery(jQuery.tableDnD.dragObject);
        var config = jQuery.tableDnD.currentTable.tableDnDConfig;
        var mousePos = jQuery.tableDnD.mouseCoords(ev);
        var y = mousePos.y - jQuery.tableDnD.mouseOffset.y;
        //auto scroll the window
	    var yOffset = window.pageYOffset;
	 	if (document.all) {
	        // Windows version
	        //yOffset=document.body.scrollTop;
	        if (typeof document.compatMode != 'undefined' &&
	             document.compatMode != 'BackCompat') {
	           yOffset = document.documentElement.scrollTop;
	        }
	        else if (typeof document.body != 'undefined') {
	           yOffset=document.body.scrollTop;
	        }

	    }

		if (mousePos.y-yOffset < config.scrollAmount) {
	    	window.scrollBy(0, -config.scrollAmount);
	    } else {
            var windowHeight = window.innerHeight ? window.innerHeight
                    : document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
            if (windowHeight-(mousePos.y-yOffset) < config.scrollAmount) {
                window.scrollBy(0, config.scrollAmount);
            }
        }


        if (y != jQuery.tableDnD.oldY) {
            // work out if we're going up or down...
            var movingDown = y > jQuery.tableDnD.oldY;
            // update the old value
            jQuery.tableDnD.oldY = y;
            // update the style to show we're dragging
			if (config.onDragClass) {
				dragObj.addClass(config.onDragClass);
			} else {
	            dragObj.css(config.onDragStyle);
			}
            // If we're over a row then move the dragged row to there so that the user sees the
            // effect dynamically
            var currentRow = jQuery.tableDnD.findDropTargetRow(dragObj, y);
            if (currentRow) {
                // TODO worry about what happens when there are multiple TBODIES
                if (movingDown && jQuery.tableDnD.dragObject != currentRow) {
                    jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, currentRow.nextSibling);
                } else if (! movingDown && jQuery.tableDnD.dragObject != currentRow) {
                    jQuery.tableDnD.dragObject.parentNode.insertBefore(jQuery.tableDnD.dragObject, currentRow);
                }
            }
        }

        return false;
    },

    /** We're only worried about the y position really, because we can only move rows up and down */
    findDropTargetRow: function(draggedRow, y) {
        var rows = jQuery.tableDnD.currentTable.rows;
        for (var i=0; i<rows.length; i++) {
            var row = rows[i];
            var rowY    = this.getPosition(row).y;
            var rowHeight = parseInt(row.offsetHeight)/2;
            if (row.offsetHeight == 0) {
                rowY = this.getPosition(row.firstChild).y;
                rowHeight = parseInt(row.firstChild.offsetHeight)/2;
            }
            // Because we always have to insert before, we need to offset the height a bit
            if ((y > rowY - rowHeight) && (y < (rowY + rowHeight))) {
                // that's the row we're over
				// If it's the same as the current row, ignore it
				if (row == draggedRow) {return null;}
                var config = jQuery.tableDnD.currentTable.tableDnDConfig;
                if (config.onAllowDrop) {
                    if (config.onAllowDrop(draggedRow, row)) {
                        return row;
                    } else {
                        return null;
                    }
                } else {
					// If a row has nodrop class, then don't allow dropping (inspired by John Tarr and Famic)
                    var nodrop = jQuery(row).hasClass("nodrop");
                    if (! nodrop) {
                        return row;
                    } else {
                        return null;
                    }
                }
                return row;
            }
        }
        return null;
    },

    mouseup: function(e) {
        if (jQuery.tableDnD.currentTable && jQuery.tableDnD.dragObject) {
            var droppedRow = jQuery.tableDnD.dragObject;
            var config = jQuery.tableDnD.currentTable.tableDnDConfig;
            // If we have a dragObject, then we need to release it,
            // The row will already have been moved to the right place so we just reset stuff
			if (config.onDragClass) {
	            jQuery(droppedRow).removeClass(config.onDragClass);
			} else {
	            jQuery(droppedRow).css(config.onDropStyle);
			}
            jQuery.tableDnD.dragObject   = null;
            if (config.onDrop) {
                // Call the onDrop method if there is one
                config.onDrop(jQuery.tableDnD.currentTable, droppedRow);
            }
            jQuery.tableDnD.currentTable = null; // let go of the table too
        }
    },

    serialize: function() {
        if (jQuery.tableDnD.currentTable) {
            return jQuery.tableDnD.serializeTable(jQuery.tableDnD.currentTable);
        } else {
            return "Error: No Table id set, you need to set an id on your table and every row";
        }
    },

	serializeTable: function(table) {
        var result = "";
        var tableId = table.id;
        var rows = table.rows;
        for (var i=0; i<rows.length; i++) {
            if (result.length > 0) result += "&";
            var rowId = rows[i].id;
            if (rowId && rowId && table.tableDnDConfig && table.tableDnDConfig.serializeRegexp) {
                rowId = rowId.match(table.tableDnDConfig.serializeRegexp)[0];
            }

            result += tableId + '[]=' + rowId;
        }
        return result;
	},

	serializeTables: function() {
        var result = "";
        this.each(function() {
			// this is now bound to each matching table
			result += jQuery.tableDnD.serializeTable(this);
		});
        return result;
    }

}

jQuery.fn.extend(
	{
		tableDnD : jQuery.tableDnD.build,
		tableDnDUpdate : jQuery.tableDnD.updateTables,
		tableDnDSerialize: jQuery.tableDnD.serializeTables
	}
);;
/*

 *

 * Copyright (c) 2006/2007 Sam Collett (http://www.texotela.co.uk)

 * Licensed under the MIT License:

 * http://www.opensource.org/licenses/mit-license.php

 *

 * Version 2.1
 * Demo: http://www.texotela.co.uk/code/jquery/select/
 *
 * $LastChangedDate$
 * $Rev$

 *

 */

eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){$.u.G=6(){4 e=6(a,v,t,b){4 c=P.Q("R");c.j=v,c.C=t;4 o=a.x;4 d=o.l;3(!a.n){a.n={};p(4 i=0;i<d;i++){a.n[o[i].j]=i}}3(8 a.n[v]=="M")a.n[v]=d;a.x[a.n[v]]=c;3(b){c.k=9}};4 a=N;3(a.l==0)7 5;4 f=9;4 m=q;4 g,v,t;3(8(a[0])=="z"){m=9;g=a[0]}3(a.l>=2){3(8(a[1])=="H")f=a[1];h 3(8(a[2])=="H")f=a[2];3(!m){v=a[0];t=a[1]}}5.y(6(){3(5.A.s()!="B")7;3(m){p(4 a S g){e(5,a,g[a],f)}}h{e(5,v,t,f)}});7 5};$.u.T=6(b,c,d,e,f){3(8(b)!="D")7 5;3(8(c)!="z")c={};3(8(d)!="H")d=9;5.y(6(){4 a=5;$.U(b,c,6(r){$(a).G(r,d);3(8 e=="6"){3(8 f=="z"){e.V(a,f)}h{e.I(a)}}})});7 5};$.u.W=6(){4 a=N;3(a.l==0)7 5;4 d=8(a[0]);4 v,i;3(d=="D"||d=="z"||d=="6")v=a[0];h 3(d=="X")i=a[0];h 7 5;5.y(6(){3(5.A.s()!="B")7;3(5.n)5.n=O;4 b=q;4 o=5.x;3(!!v){4 c=o.l;p(4 i=c-1;i>=0;i--){3(v.J==K){3(o[i].j.L(v)){b=9}}h 3(o[i].j==v){b=9}3(b&&a[1]===9)b=o[i].k;3(b){o[i]=O}b=q}}h{3(b&&a[1]===9)b=o[i].k;3(b){5.Y(i)}}});7 5};$.u.Z=6(f){4 a=8(f)=="M"?9:!!f;5.y(6(){3(5.A.s()!="B")7;4 o=5.x;4 d=o.l;4 e=[];p(4 i=0;i<d;i++){e[i]={v:o[i].j,t:o[i].C}}e.10(6(b,c){E=b.t.s(),F=c.t.s();3(E==F)7 0;3(a){7 E<F?-1:1}h{7 E>F?-1:1}});p(4 i=0;i<d;i++){o[i].C=e[i].t;o[i].j=e[i].v}});7 5};$.u.11=6(b,d){4 v=b;4 e=8(b);4 c=d||q;3(e!="D"&&e!="6"&&e!="z")7 5;5.y(6(){3(5.A.s()!="B")7 5;4 o=5.x;4 a=o.l;p(4 i=0;i<a;i++){3(v.J==K){3(o[i].j.L(v)){o[i].k=9}h 3(c){o[i].k=q}}h{3(o[i].j==v){o[i].k=9}h 3(c){o[i].k=q}}}});7 5};$.u.12=6(b,c){4 w=c||"k";3($(b).13()==0)7 5;5.y(6(){3(5.A.s()!="B")7 5;4 o=5.x;4 a=o.l;p(4 i=0;i<a;i++){3(w=="14"||(w=="k"&&o[i].k)){$(b).G(o[i].j,o[i].C)}}});7 5};$.u.15=6(b,c){4 d=q;4 v=b;4 e=8(v);4 f=8(c);3(e!="D"&&e!="6"&&e!="z")7 f=="6"?5:d;5.y(6(){3(5.A.s()!="B")7 5;3(d&&f!="6")7 q;4 o=5.x;4 a=o.l;p(4 i=0;i<a;i++){3(v.J==K){3(o[i].j.L(v)){d=9;3(f=="6")c.I(o[i])}}h{3(o[i].j==v){d=9;3(f=="6")c.I(o[i])}}}});7 f=="6"?5:d}})(16);',62,69,'|||if|var|this|function|return|typeof|true||||||||else||value|selected|length||cache||for|false||toLowerCase||fn|||options|each|object|nodeName|select|text|string|o1t|o2t|addOption|boolean|call|constructor|RegExp|match|undefined|arguments|null|document|createElement|option|in|ajaxAddOption|getJSON|apply|removeOption|number|remove|sortOptions|sort|selectOptions|copyOptions|size|all|containsOption|jQuery'.split('|'),0,{}));
/*
 * Simple State/Province Select plugin for jQuery
 *
 * Example:
 * $(document).ready(function() {
 *    $('#country').linkToStates('#state');
 *  });
 *
 * Copyright (c) 2008 Adam Daniels
 * Licensed under the MIT License *
 */
;(function($) {
  var canadian_provinces = {
                                        'AB' : 'Alberta',
                                        'BC' : 'British Columbia',
                                        'MB' : 'Manitoba',
                                        'NB' : 'New Brunswick',
                                        'NL' : 'Newfoundland and Laborador',
                                        'NT' : 'Northwest Territories',
                                        'NS' : 'Nova Scotia',
                                        'NU' : 'Nunavut',
                                        'ON' : 'Ontario',
                                        'PE' : 'Prince Edward Island',
                                        'QC' : 'Quebec',
                                        'SK' : 'Saskatchewan',
                                        'YT' : 'Yukon'
	}

	var us_states = {
                                        'AL' : 'Alabama',
                                        'AK' : 'Alaska',
                                        'AZ' : 'Arizona',
                                        'AR' : 'Arkansas',
                                        'CA' : 'California',
                                        'CO' : 'Colorado',
                                        'CT' : 'Connecticut',
                                        'DE' : 'Delaware',
                                        'DC' : 'District of Columbia',
                                        'FL' : 'Florida',
                                        'GA' : 'Georgia',
                                        'HI' : 'Hawaii',
                                        'ID' : 'Idaho',
                                        'IL' : 'Illinois',
                                        'IN' : 'Indiana',
                                        'IA' : 'Iowa',
                                        'KS' : 'Kansas',
                                        'KY' : 'Kentucky',
                                        'LA' : 'Louisiana',
                                        'ME' : 'Maine',
                                        'MD' : 'Maryland',
                                        'MA' : 'Massachusetts',
                                        'MI' : 'Michigan',
                                        'MN' : 'Minnesota',
                                        'MS' : 'Mississippi',
                                        'MO' : 'Missouri',
                                        'MT' : 'Montana',
                                        'NE' : 'Nebraska',
                                        'NV' : 'Nevada',
                                        'NH' : 'New Hampshire',
                                        'NJ' : 'New Jersey',
                                        'NM' : 'New Mexico',
                                        'NY' : 'New York',
                                        'NC' : 'North Carolina',
                                        'ND' : 'North Dakota',
                                        'OH' : 'Ohio',
                                        'OK' : 'Oklahoma',
                                        'OR' : 'Oregon',
                                        'PA' : 'Pennsylvania',
                                        'RI' : 'Rhode Island',
                                        'SC' : 'South Carolina',
                                        'SD' : 'South Dakota',
                                        'TN' : 'Tennessee',
                                        'TX' : 'Texas',
                                        'UT' : 'Utah',
                                        'VT' : 'Vermont',
                                        'VA' : 'Virginia',
                                        'WA' : 'Washington',
                                        'WV' : 'West Virginia',
                                        'WI' : 'Wisconsin',
                                        'WY' : 'Wyoming'

	}

  $.fn.extend({
		linkToStates: function(state_select_id, state_text_id) {
      $(this).change(function() {
        var country = $(this).val();
        $(state_select_id).removeOption(/.*/);
        switch (country) {
          case 'CA':
            $(state_select_id).addOption(canadian_provinces, false);
	    $(state_select_id).show();
	    $(state_text_id).hide();
            break;
          case 'US':
            $(state_select_id).addOption(us_states, false);
	    $(state_select_id).show();
	    $(state_text_id).hide();
            break;
          case '':
            $(state_select_id).addOption({ '' : 'Please select a Country'}, false);
	    $(state_select_id).show();
	    $(state_text_id).hide();
            break;
          default:
            $(state_select_id).addOption({ '' : 'n/a'}, false);
	    $(state_select_id).hide();
	    $(state_text_id).show();
        }
      });
    }
  });
})(jQuery);
;
/**
 * jQuery.labelify - Display in-textbox hints
 * Stuart Langridge, http://www.kryogenix.org/
 * Released into the public domain
 * Date: 25th June 2008
 * @author Stuart Langridge
 * @version 1.3
 *
 *
 * Basic calling syntax: $("input").labelify();
 * Defaults to taking the in-field label from the field's title attribute
 *
 * You can also pass an options object with the following keys:
 *   text
 *     "title" to get the in-field label from the field's title attribute
 *      (this is the default)
 *     "label" to get the in-field label from the inner text of the field's label
 *      (note that the label must be attached to the field with for="fieldid")
 *     a function which takes one parameter, the input field, and returns
 *      whatever text it likes
 *
 *   labelledClass
 *     a class that will be applied to the input field when it contains the
 *      label and removed when it contains user input. Defaults to blank.
 *
 */
jQuery.fn.labelify = function(settings) {
  settings = jQuery.extend({
    text: "title",
    labelledClass: ""
  }, settings);
  var lookups = {
    title: function(input) {
      return $(input).attr("title");
    },
    label: function(input) {
      return $("label[for=" + input.id +"]").text();
    }
  };
  var lookup;
  var jQuery_labellified_elements = $(this);
  return $(this).each(function() {
    if (typeof settings.text === "string") {
      lookup = lookups[settings.text]; // what if not there?
    } else {
      lookup = settings.text; // what if not a fn?
    };
    // bail if lookup isn't a function or if it returns undefined
    if (typeof lookup !== "function") { return; }
    var lookupval = lookup(this);
    if (!lookupval) { return; }

    // need to strip newlines because the browser strips them
    // if you set textbox.value to a string containing them
    $(this).data("label",lookup(this).replace(/\n/g,''));
    $(this).focus(function() {
      if (this.value === $(this).data("label")) {
        this.value = this.defaultValue;
        $(this).removeClass(settings.labelledClass);
      }
    }).blur(function(){
      if (this.value === this.defaultValue) {
        this.value = $(this).data("label");
        $(this).addClass(settings.labelledClass);
      }
    });

    var removeValuesOnExit = function() {
      jQuery_labellified_elements.each(function(){
        if (this.value === $(this).data("label")) {
          this.value = this.defaultValue;
          $(this).removeClass(settings.labelledClass);
        }
      })
    };

    $(this).parents("form").submit(removeValuesOnExit);
    $(window).on("unload", removeValuesOnExit);

    if (this.value !== this.defaultValue) {
      // user already started typing; don't overwrite their work!
      return;
    }
    // actually set the value
    this.value = $(this).data("label");
    $(this).addClass(settings.labelledClass);

  });
};
;

/*
* Rich HTML Ticker- by JavaScript Kit (http://www.javascriptkit.com)
* Freeware. Created Sept 13th, 08'
* This credit must stay intact for use
*/

var richhtmlticker={
loadingtext: '<em>Fetching Ticker Contents. Please wait...</em>', //Loading text if content is being fetched via Ajax

getajaxcontent:function($, config){
	config.$ticker.html(this.loadingtext)
	$.ajax({
		url: config.msgsource,
		error:function(ajaxrequest){
			config.$ticker.html('Error fetching content.<br />Server Response: '+ajaxrequest.responseText)
		},
		success:function(content){
			config.$ticker.html(content)
			richhtmlticker.setupticker(config)
		}
	})
},

rotate:function(config){
	if (config.$ticker.get(0)._hoverstate=="over"){
		setTimeout(function(){richhtmlticker.rotate(config)}, config.rotatespeed)
	}
	else{
		config.$messages.eq(config.currentmsg).fadeOut(config.animateduration, function(){
			config.currentmsg=(config.currentmsg<config.$messages.length-1)? config.currentmsg+1 : 0
			config.$messages.eq(config.currentmsg).fadeIn(config.animateduration, function(){
				setTimeout(function(){richhtmlticker.rotate(config)}, config.rotatespeed)
			})
		})
	}
},

getCookie:function(Name){
	var re=new RegExp(Name+"=[^;]+", "i") //construct RE to search for target name/value pair
	if (document.cookie.match(re)) //if cookie found
		return document.cookie.match(re)[0].split("=")[1] //return its value
	return null
},

setCookie:function(name, value){
//	document.cookie = name+"="+value
},

setupticker:function(config){
	config.$messages=config.$ticker.find('div.'+config.msgclass).hide()
	config.currentmsg=Math.min(parseInt(richhtmlticker.getCookie(config.id) || 0), config.$messages.length-1)
	config.$messages.hide().eq(config.currentmsg).fadeIn(config.animateduration)
	setTimeout(function(){richhtmlticker.rotate(config)}, config.rotatespeed)
	$(window).bind('unload', function(){richhtmlticker.cleanup(config)})
},

define:function(config){
  jQuery(document).ready(function($){
		config.$ticker=$('#'+config.id)
		if (config.$ticker.length==0)
			return
		config.$ticker.css({overflow:'hidden'}).hover(
			function(){this._hoverstate="over"},
			function(){this._hoverstate="out"}
		)
		if (config.msgsource=="inline"){
			richhtmlticker.setupticker(config)
		}
		else{
			richhtmlticker.getajaxcontent($,config)
		}
	})
},

cleanup:function(config){
//	this.setCookie(config.id, config.currentmsg)
}

} //end richhtmlticker object

;

/**
 * http://github.com/valums/file-uploader
 *
 * Multiple file upload component with progress-bar, drag-and-drop.
 * © 2010 Andrew Valums ( andrew(at)valums.com )
 *
 * Licensed under GNU GPL 2 or later, see license.txt.
 */

//
// Helper functions
//

var qq = qq || {};

/**
 * Adds all missing properties from second obj to first obj
 */
qq.extend = function(first, second){
    for (var prop in second){
        first[prop] = second[prop];
    }
};

/**
 * Searches for a given element in the array, returns -1 if it is not present.
 * @param {Number} [from] The index at which to begin the search
 */
qq.indexOf = function(arr, elt, from){
    if (arr.indexOf) return arr.indexOf(elt, from);

    from = from || 0;
    var len = arr.length;

    if (from < 0) from += len;

    for (; from < len; from++){
        if (from in arr && arr[from] === elt){
            return from;
        }
    }
    return -1;
};

qq.arc_encode = function(s){
  return encodeURIComponent(encodeURIComponent(s).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A"));
};

qq.getUniqueId = (function(){
    var id = 0;
    return function(){ return id++; };
})();

//
// Events

qq.attach = function(element, type, fn){
    if (element.addEventListener){
        element.addEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.attachEvent('on' + type, fn);
    }
};
qq.detach = function(element, type, fn){
    if (element.removeEventListener){
        element.removeEventListener(type, fn, false);
    } else if (element.attachEvent){
        element.detachEvent('on' + type, fn);
    }
};

qq.preventDefault = function(e){
    if (e.preventDefault){
        e.preventDefault();
    } else{
        e.returnValue = false;
    }
};

//
// Node manipulations

/**
 * Insert node a before node b.
 */
qq.insertBefore = function(a, b){
    b.parentNode.insertBefore(a, b);
};
qq.remove = function(element){
    element.parentNode.removeChild(element);
};

qq.contains = function(parent, descendant){
    // compareposition returns false in this case
    if (parent == descendant) return true;

    if (parent.contains){
        return parent.contains(descendant);
    } else {
        return !!(descendant.compareDocumentPosition(parent) & 8);
    }
};

/**
 * Creates and returns element from html string
 * Uses innerHTML to create an element
 */
qq.toElement = (function(){
    var div = document.createElement('div');
    return function(html){
        div.innerHTML = html;
        var element = div.firstChild;
        div.removeChild(element);
        return element;
    };
})();

//
// Node properties and attributes

/**
 * Sets styles for an element.
 * Fixes opacity in IE6-8.
 */
qq.css = function(element, styles){
    if (styles.opacity != null){
        if (typeof element.style.opacity != 'string' && typeof(element.filters) != 'undefined'){
            styles.filter = 'alpha(opacity=' + Math.round(100 * styles.opacity) + ')';
        }
    }
    qq.extend(element.style, styles);
};
qq.hasClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    return re.test(element.className);
};
qq.addClass = function(element, name){
    if (!qq.hasClass(element, name)){
        element.className += ' ' + name;
    }
};
qq.removeClass = function(element, name){
    var re = new RegExp('(^| )' + name + '( |$)');
    element.className = element.className.replace(re, ' ').replace(/^\s+|\s+$/g, "");
};
qq.setText = function(element, text){
    element.innerText = text;
    element.textContent = text;
};

//
// Selecting elements

qq.children = function(element){
    var children = [],
    child = element.firstChild;

    while (child){
        if (child.nodeType == 1){
            children.push(child);
        }
        child = child.nextSibling;
    }

    return children;
};

qq.getByClass = function(element, className){
    if (element.querySelectorAll){
        return element.querySelectorAll('.' + className);
    }

    var result = [];
    var candidates = element.getElementsByTagName("*");
    var len = candidates.length;

    for (var i = 0; i < len; i++){
        if (qq.hasClass(candidates[i], className)){
            result.push(candidates[i]);
        }
    }
    return result;
};

/**
 * obj2url() takes a json-object as argument and generates
 * a querystring. pretty much like jQuery.param()
 *
 * how to use:
 *
 *    `qq.obj2url({a:'b',c:'d'},'http://any.url/upload?otherParam=value');`
 *
 * will result in:
 *
 *    `http://any.url/upload?otherParam=value&a=b&c=d`
 *
 * @param  Object JSON-Object
 * @param  String current querystring-part
 * @return String encoded querystring
 */
qq.obj2url = function(obj, temp, prefixDone){
    var uristrings = [],
        //prefix = '&',
        prefix = '/',
        add = function(nextObj, i){
            var nextTemp = temp
                ? (/\[\]$/.test(temp)) // prevent double-encoding
                   ? temp
                   : temp+'['+i+']'
                : i;
            if ((nextTemp != 'undefined') && (i != 'undefined')) {
                uristrings.push(
                    (typeof nextObj === 'object')
                        ? qq.obj2url(nextObj, nextTemp, true)
                        : (Object.prototype.toString.call(nextObj) === '[object Function]')
                            //? encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj())
                            ? qq.arc_encode(nextTemp) + '/' + qq.arc_encode(nextObj())
                            //: encodeURIComponent(nextTemp) + '=' + encodeURIComponent(nextObj)
                            : qq.arc_encode(nextTemp) + '/' + qq.arc_encode(nextObj)
                );
            }
        };

    if (!prefixDone && temp) {
      //prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? '' : '&' : '?';
      prefix = (/\?/.test(temp)) ? (/\?$/.test(temp)) ? '' : '/' : '/';
      uristrings.push(temp);
      uristrings.push(qq.obj2url(obj));
    } else if ((Object.prototype.toString.call(obj) === '[object Array]') && (typeof obj != 'undefined') ) {
        // we wont use a for-in-loop on an array (performance)
        for (var i = 0, len = obj.length; i < len; ++i){
            add(obj[i], i);
        }
    } else if ((typeof obj != 'undefined') && (obj !== null) && (typeof obj === "object")){
        // for anything else but a scalar, we will use for-in-loop
        for (var i in obj){
            add(obj[i], i);
        }
    } else {
        //uristrings.push(encodeURIComponent(temp) + '=' + encodeURIComponent(obj));
        uristrings.push(encodeURIComponent(temp) + '/' + encodeURIComponent(obj));
    }

    return uristrings.join(prefix)
                     .replace(/^&/, '')
                     .replace(/%20/g, '+');
};

//
//
// Uploader Classes
//
//

var qq = qq || {};

/**
 * Creates upload button, validates upload, but doesn't create file list or dd.
 */
qq.FileUploaderBasic = function(o){
    this._options = {
        // set to true to see the server response
        debug: false,
        action: '/server/upload',
        params: {},
        button: null,
        multiple: true,
        maxConnections: 3,
        // validation
        allowedExtensions: [],
        sizeLimit: 0,
        minSizeLimit: 0,
        // events
        // return false to cancel submit
        onSubmit: function(id, fileName){},
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, responseJSON){},
        onCancel: function(id, fileName){},
        // messages
        messages: {
            typeError: "{file} has invalid extension. Only {extensions} are allowed.",
            sizeError: "{file} is too large, maximum file size is {sizeLimit}.",
            minSizeError: "{file} is too small, minimum file size is {minSizeLimit}.",
            emptyError: "{file} is empty, please select files again without it.",
            onLeave: "The files are being uploaded, if you leave now the upload will be cancelled."
        },
        showMessage: function(message){
            alert(message);
        }
    };
    qq.extend(this._options, o);

    // number of files being uploaded
    this._filesInProgress = 0;
    this._handler = this._createUploadHandler();

    if (this._options.button){
        this._button = this._createUploadButton(this._options.button);
    }

    this._preventLeaveInProgress();
};

qq.FileUploaderBasic.prototype = {
    setParams: function(params){
        this._options.params = params;
    },
    getInProgress: function(){
        return this._filesInProgress;
    },
    _createUploadButton: function(element){
        var self = this;

        return new qq.UploadButton({
            element: element,
            multiple: this._options.multiple && qq.UploadHandlerXhr.isSupported(),
            onChange: function(input){
                self._onInputChange(input);
            }
        });
    },
    _createUploadHandler: function(){
        var self = this,
            handlerClass;

        if(qq.UploadHandlerXhr.isSupported()){
            handlerClass = 'UploadHandlerXhr';
        } else {
            handlerClass = 'UploadHandlerForm';
        }

        var handler = new qq[handlerClass]({
            debug: this._options.debug,
            action: this._options.action,
            maxConnections: this._options.maxConnections,
            onProgress: function(id, fileName, loaded, total){
                self._onProgress(id, fileName, loaded, total);
                self._options.onProgress(id, fileName, loaded, total);
            },
            onComplete: function(id, fileName, result){
                self._onComplete(id, fileName, result);
                self._options.onComplete(id, fileName, result);
            },
            onCancel: function(id, fileName){
                self._onCancel(id, fileName);
                self._options.onCancel(id, fileName);
            }
        });

        return handler;
    },
    _preventLeaveInProgress: function(){
        var self = this;

        qq.attach(window, 'beforeunload', function(e){
            if (!self._filesInProgress){return;}

            var e = e || window.event;
            // for ie, ff
            e.returnValue = self._options.messages.onLeave;
            // for webkit
            return self._options.messages.onLeave;
        });
    },
    _onSubmit: function(id, fileName){
        this._filesInProgress++;
    },
    _onProgress: function(id, fileName, loaded, total){
    },
    _onComplete: function(id, fileName, result){
        this._filesInProgress--;
        if (result.error){
            this._options.showMessage(result.error);
        }
    },
    _onCancel: function(id, fileName){
        this._filesInProgress--;
    },
    _onInputChange: function(input){
        if (this._handler instanceof qq.UploadHandlerXhr){
            this._uploadFileList(input.files);
        } else {
            if (this._validateFile(input)){
                this._uploadFile(input);
            }
        }
        this._button.reset();
    },
    _uploadFileList: function(files){
        for (var i=0; i<files.length; i++){
            if ( !this._validateFile(files[i])){
                return;
            }
        }

        for (var i=0; i<files.length; i++){
            this._uploadFile(files[i]);
        }
    },
    _uploadFile: function(fileContainer){
        var id = this._handler.add(fileContainer);
        var fileName = this._handler.getName(id);

        if (this._options.onSubmit(id, fileName) !== false){
            this._onSubmit(id, fileName);
            this._handler.upload(id, this._options.params);
        }
    },
    _validateFile: function(file){
        var name, size;

        if (file.value){
            // it is a file input
            // get input value and remove path to normalize
            name = file.value.replace(/.*(\/|\\)/, "");
        } else {
            // fix missing properties in Safari
            name = file.fileName != null ? file.fileName : file.name;
            size = file.fileSize != null ? file.fileSize : file.size;
        }

        if (! this._isAllowedExtension(name)){
            this._error('typeError', name);
            return false;

        } else if (size === 0){
            this._error('emptyError', name);
            return false;

        } else if (size && this._options.sizeLimit && size > this._options.sizeLimit){
            this._error('sizeError', name);
            return false;

        } else if (size && size < this._options.minSizeLimit){
            this._error('minSizeError', name);
            return false;
        }

        return true;
    },
    _error: function(code, fileName){
        var message = this._options.messages[code];
        function r(name, replacement){ message = message.replace(name, replacement); }

        r('{file}', this._formatFileName(fileName));
        r('{extensions}', this._options.allowedExtensions.join(', '));
        r('{sizeLimit}', this._formatSize(this._options.sizeLimit));
        r('{minSizeLimit}', this._formatSize(this._options.minSizeLimit));

        this._options.showMessage(message);
    },
    _formatFileName: function(name){
        if (name.length > 33){
            name = name.slice(0, 19) + '...' + name.slice(-13);
        }
        return name;
    },
    _isAllowedExtension: function(fileName){
        var ext = (-1 !== fileName.indexOf('.')) ? fileName.replace(/.*[.]/, '').toLowerCase() : '';
        var allowed = this._options.allowedExtensions;

        if (!allowed.length){return true;}

        for (var i=0; i<allowed.length; i++){
            if (allowed[i].toLowerCase() == ext){ return true;}
        }

        return false;
    },
    _formatSize: function(bytes){
        var i = -1;
        do {
            bytes = bytes / 1024;
            i++;
        } while (bytes > 99);

        return Math.max(bytes, 0.1).toFixed(1) + ['kB', 'MB', 'GB', 'TB', 'PB', 'EB'][i];
    }
};


/**
 * Class that creates upload widget with drag-and-drop and file list
 * @inherits qq.FileUploaderBasic
 */
qq.FileUploader = function(o){
    // call parent constructor
    qq.FileUploaderBasic.apply(this, arguments);

    // additional options
    qq.extend(this._options, {
        element: null,
        // if set, will be used instead of qq-upload-list in template
        listElement: null,

        template: '<div class="qq-uploader">' +
//                '<div class="qq-upload-drop-area"><span>Drop files here to upload</span></div>' +
                '<div class="qq-upload-button">Upload</div>' +
                '<ul class="qq-upload-list"></ul>' +
             '</div>',

        // template for one item in file list
        fileTemplate: '<li>' +
                '<span class="qq-upload-file"></span>' +
                '<span class="qq-upload-spinner"></span>' +
                '<span class="qq-upload-size"></span>' +
                '<a class="qq-upload-cancel" href="#">Cancel</a>' +
                '<span class="qq-upload-failed-text">Failed</span>' +
            '</li>',

        classes: {
            // used to get elements from templates
            button: 'qq-upload-button',
            drop: 'qq-upload-drop-area',
            dropActive: 'qq-upload-drop-area-active',
            list: 'qq-upload-list',

            file: 'qq-upload-file',
            spinner: 'qq-upload-spinner',
            size: 'qq-upload-size',
            cancel: 'qq-upload-cancel',

            // added to list item when upload completes
            // used in css to hide progress spinner
            success: 'qq-upload-success',
            fail: 'qq-upload-fail'
        }
    });
    // overwrite options with user supplied
    qq.extend(this._options, o);

    this._element = this._options.element;
    this._element.innerHTML = this._options.template;
    this._listElement = this._options.listElement || this._find(this._element, 'list');

    this._classes = this._options.classes;

    this._button = this._createUploadButton(this._find(this._element, 'button'));

    this._bindCancelEvent();
//TL    this._setupDragDrop();
};

// inherit from Basic Uploader
qq.extend(qq.FileUploader.prototype, qq.FileUploaderBasic.prototype);

qq.extend(qq.FileUploader.prototype, {
    /**
     * Gets one of the elements listed in this._options.classes
     **/
    _find: function(parent, type){
        var element = qq.getByClass(parent, this._options.classes[type])[0];
        if (!element){
            throw new Error('element not found ' + type);
        }

        return element;
    },
    _setupDragDrop: function(){

        var self = this,
            dropArea = this._find(this._element, 'drop');

        var dz = new qq.UploadDropZone({
            element: dropArea,
            onEnter: function(e){
                qq.addClass(dropArea, self._classes.dropActive);
                e.stopPropagation();
            },
            onLeave: function(e){
                e.stopPropagation();
            },
            onLeaveNotDescendants: function(e){
                qq.removeClass(dropArea, self._classes.dropActive);
            },
            onDrop: function(e){
                dropArea.style.display = 'none';
                qq.removeClass(dropArea, self._classes.dropActive);
                self._uploadFileList(e.dataTransfer.files);
            }
        });
        dropArea.style.display = 'none';
        qq.attach(document, 'dragenter', function(e){
            if (!dz._isValidFileDrag(e)) return;

//            dropArea.style.display = 'block';
        });
        qq.attach(document, 'dragleave', function(e){
            if (!dz._isValidFileDrag(e)) return;

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // only fire when leaving document out
            if ( ! relatedTarget || relatedTarget.nodeName == "HTML"){
                dropArea.style.display = 'none';
            }
        });
    },
    _onSubmit: function(id, fileName){
        qq.FileUploaderBasic.prototype._onSubmit.apply(this, arguments);
        this._addToList(id, fileName);
    },
    _onProgress: function(id, fileName, loaded, total){
        qq.FileUploaderBasic.prototype._onProgress.apply(this, arguments);

        var item = this._getItemByFileId(id);
        var size = this._find(item, 'size');
        size.style.display = 'inline';

        var text;
        if (loaded != total){
            text = Math.round(loaded / total * 100) + '% from ' + this._formatSize(total);
        } else {
            text = this._formatSize(total);
        }

        qq.setText(size, text);
    },
    _onComplete: function(id, fileName, result){
        qq.FileUploaderBasic.prototype._onComplete.apply(this, arguments);

        // mark completed
        var item = this._getItemByFileId(id);
        qq.remove(this._find(item, 'cancel'));
        qq.remove(this._find(item, 'spinner'));

        if (result.success){
            qq.addClass(item, this._classes.success);
        } else {
            qq.addClass(item, this._classes.fail);
        }
    },
    _addToList: function(id, fileName){
        var item = qq.toElement(this._options.fileTemplate);
        item.qqFileId = id;

        var fileElement = this._find(item, 'file');
        qq.setText(fileElement, this._formatFileName(fileName));
        this._find(item, 'size').style.display = 'none';

        this._listElement.appendChild(item);
    },
    _getItemByFileId: function(id){
        var item = this._listElement.firstChild;

        // there can't be txt nodes in dynamically created list
        // and we can  use nextSibling
        while (item){
            if (item.qqFileId == id) return item;
            item = item.nextSibling;
        }
    },
    /**
     * delegate click event for cancel link
     **/
    _bindCancelEvent: function(){
        var self = this,
            list = this._listElement;

        qq.attach(list, 'click', function(e){
            e = e || window.event;
            var target = e.target || e.srcElement;

            if (qq.hasClass(target, self._classes.cancel)){
                qq.preventDefault(e);

                var item = target.parentNode;
                self._handler.cancel(item.qqFileId);
                qq.remove(item);
            }
        });
    }
});

qq.UploadDropZone = function(o){
    this._options = {
        element: null,
        onEnter: function(e){},
        onLeave: function(e){},
        // is not fired when leaving element by hovering descendants
        onLeaveNotDescendants: function(e){},
        onDrop: function(e){}
    };
    qq.extend(this._options, o);

    this._element = this._options.element;

    this._disableDropOutside();
    this._attachEvents();
};

qq.UploadDropZone.prototype = {
    _disableDropOutside: function(e){
        // run only once for all instances
        if (!qq.UploadDropZone.dropOutsideDisabled ){

            qq.attach(document, 'dragover', function(e){
                if (e.dataTransfer){
                    e.dataTransfer.dropEffect = 'none';
                    e.preventDefault();
                }
            });

            qq.UploadDropZone.dropOutsideDisabled = true;
        }
    },
    _attachEvents: function(){
        var self = this;

        qq.attach(self._element, 'dragover', function(e){
            if (!self._isValidFileDrag(e)) return;

            var effect = e.dataTransfer.effectAllowed;
            if (effect == 'move' || effect == 'linkMove'){
                e.dataTransfer.dropEffect = 'move'; // for FF (only move allowed)
            } else {
                e.dataTransfer.dropEffect = 'copy'; // for Chrome
            }

            e.stopPropagation();
            e.preventDefault();
        });

        qq.attach(self._element, 'dragenter', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onEnter(e);
        });

        qq.attach(self._element, 'dragleave', function(e){
            if (!self._isValidFileDrag(e)) return;

            self._options.onLeave(e);

            var relatedTarget = document.elementFromPoint(e.clientX, e.clientY);
            // do not fire when moving a mouse over a descendant
            if (qq.contains(this, relatedTarget)) return;

            self._options.onLeaveNotDescendants(e);
        });

        qq.attach(self._element, 'drop', function(e){
            if (!self._isValidFileDrag(e)) return;

            e.preventDefault();
            self._options.onDrop(e);
        });
    },
    _isValidFileDrag: function(e){
        var dt = e.dataTransfer,
            // do not check dt.types.contains in webkit, because it crashes safari 4
            isWebkit = navigator.userAgent.indexOf("AppleWebKit") > -1;

        // dt.effectAllowed is none in Safari 5
        // dt.types.contains check is for firefox
        return dt && dt.effectAllowed != 'none' &&
            (dt.files || (!isWebkit && dt.types.contains && dt.types.contains('Files')));

    }
};

qq.UploadButton = function(o){
    this._options = {
        element: null,
        // if set to true adds multiple attribute to file input
        multiple: false,
        // name attribute of file input
        name: 'file',
        onChange: function(input){},
        hoverClass: 'qq-upload-button-hover',
        focusClass: 'qq-upload-button-focus'
    };

    qq.extend(this._options, o);

    this._element = this._options.element;

    // make button suitable container for input
    qq.css(this._element, {
        position: 'relative',
        overflow: 'hidden',
        // Make sure browse button is in the right side
        // in Internet Explorer
        direction: 'ltr'
    });

    this._input = this._createInput();
};

qq.UploadButton.prototype = {
    /* returns file input element */
    getInput: function(){
        return this._input;
    },
    /* cleans/recreates the file input */
    reset: function(){
        if (this._input.parentNode){
            qq.remove(this._input);
        }

        qq.removeClass(this._element, this._options.focusClass);
        this._input = this._createInput();
    },
    _createInput: function(){
        var input = document.createElement("input");

        if (this._options.multiple){
            input.setAttribute("multiple", "multiple");
        }

        input.setAttribute("type", "file");
        input.setAttribute("name", this._options.name);

        qq.css(input, {
            position: 'absolute',
            // in Opera only 'browse' button
            // is clickable and it is located at
            // the right side of the input
            right: 0,
            top: 0,
            fontFamily: 'Arial',
            // 4 persons reported this, the max values that worked for them were 243, 236, 236, 118
            fontSize: '118px',
            margin: 0,
            padding: 0,
            cursor: 'pointer',
            opacity: 0
        });

        this._element.appendChild(input);

        var self = this;
        qq.attach(input, 'change', function(){
            self._options.onChange(input);
        });

        qq.attach(input, 'mouseover', function(){
            qq.addClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'mouseout', function(){
            qq.removeClass(self._element, self._options.hoverClass);
        });
        qq.attach(input, 'focus', function(){
            qq.addClass(self._element, self._options.focusClass);
        });
        qq.attach(input, 'blur', function(){
            qq.removeClass(self._element, self._options.focusClass);
        });

        // IE and Opera, unfortunately have 2 tab stops on file input
        // which is unacceptable in our case, disable keyboard access
        if (window.attachEvent){
            // it is IE or Opera
            input.setAttribute('tabIndex', "-1");
        }

        return input;
    }
};

/**
 * Class for uploading files, uploading itself is handled by child classes
 */
qq.UploadHandlerAbstract = function(o){
    this._options = {
        debug: false,
        action: '/upload.php',
        // maximum number of concurrent uploads
        maxConnections: 999,
        onProgress: function(id, fileName, loaded, total){},
        onComplete: function(id, fileName, response){},
        onCancel: function(id, fileName){}
    };
    qq.extend(this._options, o);

    this._queue = [];
    // params for files in queue
    this._params = [];
};
qq.UploadHandlerAbstract.prototype = {
    log: function(str){
        if (this._options.debug && window.console) console.log('[uploader] ' + str);
    },
    /**
     * Adds file or file input to the queue
     * @returns id
     **/
    add: function(file){},
    /**
     * Sends the file identified by id and additional query params to the server
     */
    upload: function(id, params){
        var len = this._queue.push(id);

        var copy = {};
        qq.extend(copy, params);
        this._params[id] = copy;

        // if too many active uploads, wait...
        if (len <= this._options.maxConnections){
            this._upload(id, this._params[id]);
        }
    },
    /**
     * Cancels file upload by id
     */
    cancel: function(id){
        this._cancel(id);
        this._dequeue(id);
    },
    /**
     * Cancells all uploads
     */
    cancelAll: function(){
        for (var i=0; i<this._queue.length; i++){
            this._cancel(this._queue[i]);
        }
        this._queue = [];
    },
    /**
     * Returns name of the file identified by id
     */
    getName: function(id){},
    /**
     * Returns size of the file identified by id
     */
    getSize: function(id){},
    /**
     * Returns id of files being uploaded or
     * waiting for their turn
     */
    getQueue: function(){
        return this._queue;
    },
    /**
     * Actual upload method
     */
    _upload: function(id){},
    /**
     * Actual cancel method
     */
    _cancel: function(id){},
    /**
     * Removes element from queue, starts upload of next
     */
    _dequeue: function(id){
        var i = qq.indexOf(this._queue, id);
        this._queue.splice(i, 1);

        var max = this._options.maxConnections;

        if (this._queue.length >= max){
            var nextId = this._queue[max-1];
            this._upload(nextId, this._params[nextId]);
        }
    }
};

/**
 * Class for uploading files using form and iframe
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerForm = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._inputs = {};
};
// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerForm.prototype, qq.UploadHandlerAbstract.prototype);

qq.extend(qq.UploadHandlerForm.prototype, {
    add: function(fileInput){
        fileInput.setAttribute('name', 'qqfile');
        var id = 'qq-upload-handler-iframe' + qq.getUniqueId();

        this._inputs[id] = fileInput;

        // remove file input from DOM
        if (fileInput.parentNode){
            qq.remove(fileInput);
        }

        return id;
    },
    getName: function(id){
        // get input value and remove path to normalize
        return this._inputs[id].value.replace(/.*(\/|\\)/, "");
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        delete this._inputs[id];

        var iframe = document.getElementById(id);
        if (iframe){
            // to cancel request set src to something else
            // we use src="javascript:false;" because it doesn't
            // trigger ie6 prompt on https
            iframe.setAttribute('src', 'javascript:false;');

            qq.remove(iframe);
        }
    },
    _upload: function(id, params){
        var input = this._inputs[id];

        if (!input){
            throw new Error('file with passed id was not added, or already uploaded or cancelled');
        }

        var fileName = this.getName(id);

        var iframe = this._createIframe(id);
        var form = this._createForm(iframe, params);
        form.appendChild(input);

        var self = this;
        this._attachLoadEvent(iframe, function(){
            self.log('iframe loaded');

            var response = self._getIframeContentJSON(iframe);

            self._options.onComplete(id, fileName, response);
            self._dequeue(id);

            delete self._inputs[id];
            // timeout added to fix busy state in FF3.6
            setTimeout(function(){
                qq.remove(iframe);
            }, 1);
        });

        form.submit();
        qq.remove(form);

        return id;
    },
    _attachLoadEvent: function(iframe, callback){
        qq.attach(iframe, 'load', function(){
            // when we remove iframe from dom
            // the request stops, but in IE load
            // event fires
            if (!iframe.parentNode){
                return;
            }

            // fixing Opera 10.53
            if (iframe.contentDocument &&
                iframe.contentDocument.body &&
                iframe.contentDocument.body.innerHTML == "false"){
                // In Opera event is fired second time
                // when body.innerHTML changed from false
                // to server response approx. after 1 sec
                // when we upload file with iframe
                return;
            }

            callback();
        });
    },
    /**
     * Returns json object received by iframe from server.
     */
    _getIframeContentJSON: function(iframe){
        // iframe.contentWindow.document - for IE<7
        var doc = iframe.contentDocument ? iframe.contentDocument: iframe.contentWindow.document,
            response;

        this.log("converting iframe's innerHTML to JSON");
        this.log("innerHTML = " + doc.body.innerHTML);

        try {
            response = eval("(" + doc.body.innerHTML + ")");
        } catch(err){
            response = {};
        }

        return response;
    },
    /**
     * Creates iframe with unique name
     */
    _createIframe: function(id){
        // We can't use following code as the name attribute
        // won't be properly registered in IE6, and new window
        // on form submit will open
        // var iframe = document.createElement('iframe');
        // iframe.setAttribute('name', id);

        var iframe = qq.toElement('<iframe src="javascript:false;" name="' + id + '" />');
        // src="javascript:false;" removes ie6 prompt on https

        iframe.setAttribute('id', id);

        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        return iframe;
    },
    /**
     * Creates form, that will be submitted to iframe
     */
    _createForm: function(iframe, params){
        // We can't use the following code in IE6
        // var form = document.createElement('form');
        // form.setAttribute('method', 'post');
        // form.setAttribute('enctype', 'multipart/form-data');
        // Because in this case file won't be attached to request
        var form = qq.toElement('<form method="post" enctype="multipart/form-data"></form>');

        var queryString = qq.obj2url(params, this._options.action);

        form.setAttribute('action', queryString);
        form.setAttribute('target', iframe.name);
        form.style.display = 'none';
        document.body.appendChild(form);

        return form;
    }
});

/**
 * Class for uploading files using xhr
 * @inherits qq.UploadHandlerAbstract
 */
qq.UploadHandlerXhr = function(o){
    qq.UploadHandlerAbstract.apply(this, arguments);

    this._files = [];
    this._xhrs = [];

    // current loaded size in bytes for each file
    this._loaded = [];
};

// static method
qq.UploadHandlerXhr.isSupported = function(){
    var input = document.createElement('input');
    input.type = 'file';

    return (
        'multiple' in input &&
        typeof File != "undefined" &&
        typeof (new XMLHttpRequest()).upload != "undefined" );
};

// @inherits qq.UploadHandlerAbstract
qq.extend(qq.UploadHandlerXhr.prototype, qq.UploadHandlerAbstract.prototype)

qq.extend(qq.UploadHandlerXhr.prototype, {
    /**
     * Adds file to the queue
     * Returns id to use with upload, cancel
     **/
    add: function(file){
        if (!(file instanceof File)){
            throw new Error('Passed obj in not a File (in qq.UploadHandlerXhr)');
        }

        return this._files.push(file) - 1;
    },
    getName: function(id){
        var file = this._files[id];
        // fix missing name in Safari 4
        return file.fileName != null ? file.fileName : file.name;
    },
    getSize: function(id){
        var file = this._files[id];
        return file.fileSize != null ? file.fileSize : file.size;
    },
    /**
     * Returns uploaded bytes for file identified by id
     */
    getLoaded: function(id){
        return this._loaded[id] || 0;
    },
    /**
     * Sends the file identified by id and additional query params to the server
     * @param {Object} params name-value string pairs
     */
    _upload: function(id, params){
        var file = this._files[id],
            name = this.getName(id),
            size = this.getSize(id);

        this._loaded[id] = 0;

        var xhr = this._xhrs[id] = new XMLHttpRequest();
        var self = this;

        xhr.upload.onprogress = function(e){
            if (e.lengthComputable){
                self._loaded[id] = e.loaded;
                self._options.onProgress(id, name, e.loaded, e.total);
            }
        };

        xhr.onreadystatechange = function(){
            if (xhr.readyState == 4){
                self._onComplete(id, xhr);
            }
        };

        // build query string
        params = params || {};
        params['qqfile'] = name;
        var queryString = qq.obj2url(params, this._options.action);

        xhr.open("POST", queryString, true);
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.setRequestHeader("X-File-Name", encodeURIComponent(name));
        xhr.setRequestHeader("Content-Type", "application/octet-stream");
        xhr.send(file);
    },
    _onComplete: function(id, xhr){
        // the request was aborted/cancelled
        if (!this._files[id]) return;

        var name = this.getName(id);
        var size = this.getSize(id);

        this._options.onProgress(id, name, size, size);

        if (xhr.status == 200){
            this.log("xhr - server response received");
            this.log("responseText = " + xhr.responseText);

            var response;

            try {
                response = eval("(" + xhr.responseText + ")");
            } catch(err){
                response = {};
            }

            this._options.onComplete(id, name, response);

        } else {
            this._options.onComplete(id, name, {});
        }

        this._files[id] = null;
        this._xhrs[id] = null;
        this._dequeue(id);
    },
    _cancel: function(id){
        this._options.onCancel(id, this.getName(id));

        this._files[id] = null;

        if (this._xhrs[id]){
            this._xhrs[id].abort();
            this._xhrs[id] = null;
        }
    }
});
;
/*
bxCarousel v1.0
Plugin developed by: Steven Wanderski
http://bxcarousel.com
http://stevenwanderski.com

Released under the GPL license:
http://www.gnu.org/licenses/gpl.html
*/

(function($){$.fn.bxCarousel=function(options){var defaults={move:4,display_num:4,speed:500,margin:0,auto:false,auto_interval:2000,auto_dir:'next',auto_hover:false,next_text:'next',next_image:'',prev_text:'prev',prev_image:'',controls:true};var options=$.extend(defaults,options);return this.each(function(){var $this=$(this);var li=$this.find('li');var first=0;var fe=0;var last=options.display_num-1;var le=options.display_num-1;var is_working=false;var j='';var clicked=false;li.css({'float':'left','listStyle':'none','marginRight':options.margin});var ow=li.outerWidth(true);wrap_width=(ow*options.display_num)-options.margin;var seg=ow*options.move;$this.wrap('<div class="bx_container"></div>').width(999999);if(options.controls){if(options.next_image!=''||options.prev_image!=''){var controls='<a href="" class="prev"><img src="'+options.prev_image+'"/></a><a href="" class="next"><img src="'+options.next_image+'"/></a>';}
else{var controls='<a href="" class="prev">'+options.prev_text+'</a><a href="" class="next">'+options.next_text+'</a>';}}
$this.parent('.bx_container').wrap('<div class="bx_wrap"></div>').css({'position':'relative','width':wrap_width,'overflow':'hidden'}).before(controls);var w=li.slice(0,options.display_num).clone();var last_appended=(options.display_num+options.move)-1;$this.empty().append(w);get_p();get_a();$this.css({'position':'relative','left':-(seg)});$this.parent().siblings('.next').click(function(){slide_next();clearInterval(j);clicked=true;return false;});$this.parent().siblings('.prev').click(function(){slide_prev();clearInterval(j);clicked=true;return false;});if(options.auto){start_slide();if(options.auto_hover&&clicked!=true){$this.find('li').live('mouseenter',function(){if(!clicked){clearInterval(j);}});$this.find('li').live('mouseleave',function(){if(!clicked){start_slide();}});}}
function start_slide(){if(options.auto_dir=='next'){j=setInterval(function(){slide_next()},options.auto_interval);}else{j=setInterval(function(){slide_prev()},options.auto_interval);}}
function slide_next(){if(!is_working){is_working=true;set_pos('next');$this.animate({left:'-='+seg},options.speed,function(){$this.find('li').slice(0,options.move).remove();$this.css('left',-(seg));get_a();is_working=false;});}}
function slide_prev(){if(!is_working){is_working=true;set_pos('prev');$this.animate({left:'+='+seg},options.speed,function(){$this.find('li').slice(-options.move).remove();$this.css('left',-(seg));get_p();is_working=false;});}}
function get_a(){var str=new Array();var lix=li.clone();le=last;for(i=0;i<options.move;i++){le++
if(lix[le]!=undefined){str[i]=$(lix[le]);}else{le=0;str[i]=$(lix[le]);}}
$.each(str,function(index){$this.append(str[index][0]);});}
function get_p(){var str=new Array();var lix=li.clone();fe=first;for(i=0;i<options.move;i++){fe--
if(lix[fe]!=undefined){str[i]=$(lix[fe]);}else{fe=li.length-1;str[i]=$(lix[fe]);}}
$.each(str,function(index){$this.prepend(str[index][0]);});}
function set_pos(dir){if(dir=='next'){first+=options.move;if(first>=li.length){first=first%li.length;}
last+=options.move;if(last>=li.length){last=last%li.length;}}else if(dir=='prev'){first-=options.move;if(first<0){first=li.length+first;}
last-=options.move;if(last<0){last=li.length+last;}}}});}})(jQuery);
;
/*
 * jQuery Galleriffic plugin
 *
 * Copyright (c) 2008 Trent Foley (http://trentacular.com)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 * Thanks to Taku Sano (Mikage Sawatari), whose history plugin I adapted to work with Galleriffic
 * Modified by Ghismo (ghismo.com) to disable the location rewrite
 */
;(function($) {

	// Write noscript style
	document.write("<style type='text/css'>.noscript{display:none}</style>");

	var ver = 'galleriffic-1.0';
	var galleryOffset = 0;
	var galleries = [];
	var allImages = [];
	var historyCurrentHash;
	var historyBackStack;
	var historyForwardStack;
	var isFirst = false;
	var dontCheck = false;
	var isInitialized = false;

	function getHashFromString(hash) {
		if (!hash) return -1;
		hash = hash.replace(/^.*#/, '');
		if (isNaN(hash)) return -1;
		return (+hash);
	}

	function getHash() {
		var hash = location.hash;
		return getHashFromString(hash);
	}

	function registerGallery(gallery) {
		galleries.push(gallery);

		// update the global offset value
		galleryOffset += gallery.data.length;
	}

	function getGallery(hash) {
		for (i = 0; i < galleries.length; i++) {
			var gallery = galleries[i];
			if (hash < (gallery.data.length+gallery.offset))
				return gallery;
		}
		return 0;
	}

	function getIndex(gallery, hash) {
		return hash-gallery.offset;
	}

	function clickHandler(e, gallery, link) {
		gallery.pause();

		if (!gallery.settings.enableHistory) {
			var hash = getHashFromString(link.href);
			if (hash >= 0) {
				var index = getIndex(gallery, hash);
				if (index >= 0)
					gallery.goto(index);
			}
			e.preventDefault();
		}
	}

	function historyCallback() {
		// Using present location.hash always (seems to work, unlike the hash argument passed to this callback)
		var hash = getHash();
		if (hash < 0) return;

		var gallery = getGallery(hash);
		if (!gallery) return;

		var index = hash-gallery.offset;
		gallery.goto(index);
	}

	function historyInit() {
		if (isInitialized) return;
		isInitialized = true;

		var current_hash = location.hash; //(enableHistory) ? location.hash : currentIndexHash; // Ghismo

		historyCurrentHash = current_hash;
		if ($.browser.msie) {
			// To stop the callback firing twice during initilization if no hash present
			if (historyCurrentHash == '') {
				historyCurrentHash = '#';
			}
		} else if ($.browser.safari) {
			// etablish back/forward stacks
			historyBackStack = [];
			historyBackStack.length = history.length;
			historyForwardStack = [];
			isFirst = true;
		}

		setInterval(function() { historyCheck(); }, 100);
	}

	function historyAddHistory(hash) {
		// This makes the looping function do something
		historyBackStack.push(hash);
		historyForwardStack.length = 0; // clear forwardStack (true click occured)
		isFirst = true;
	}

	function historyCheck() {
		if ($.browser.safari) {
			if (!dontCheck) {
				var historyDelta = history.length - historyBackStack.length;

				if (historyDelta) { // back or forward button has been pushed
					isFirst = false;
					if (historyDelta < 0) { // back button has been pushed
						// move items to forward stack
						for (var i = 0; i < Math.abs(historyDelta); i++) historyForwardStack.unshift(historyBackStack.pop());
					} else { // forward button has been pushed
						// move items to back stack
						for (var i = 0; i < historyDelta; i++) historyBackStack.push(historyForwardStack.shift());
					}
					var cachedHash = historyBackStack[historyBackStack.length - 1];
					if (cachedHash != undefined) {
						historyCurrentHash = location.hash; // (enableHistory) ? location.hash : currentIndexHash; // Ghismo
						historyCallback();
					}
				} else if (historyBackStack[historyBackStack.length - 1] == undefined && !isFirst) {
					historyCallback();
					isFirst = true;
				}
			}
		} else {
			// otherwise, check for location.hash
			var current_hash = location.hash; // (enableHistory) ? location.hash : currentIndexHash; // Ghismo
			if(current_hash != historyCurrentHash) {
				historyCurrentHash = current_hash;
				historyCallback();
			}
		}
	}

	var defaults = {
		delay:                  3000,
		numThumbs:              20,
		preloadAhead:           40, // Set to -1 to preload all images
		enableTopPager:         false,
		enableBottomPager:      true,
		imageContainerSel:      '',
		captionContainerSel:    '',
		controlsContainerSel:   '',
		loadingContainerSel:    '',
		renderSSControls:       true,
		renderNavControls:      true,
		playLinkText:           'Play',
		pauseLinkText:          'Pause',
		prevLinkText:           'Previous',
		nextLinkText:           'Next',
		nextPageLinkText:       'Next &rsaquo;',
		prevPageLinkText:       '&lsaquo; Prev',
		enableHistory:          false,
		autoStart:              false,
		onChange:               undefined, // accepts a delegate like such: function(prevIndex, nextIndex) { ... }
		onTransitionOut:        undefined, // accepts a delegate like such: function(callback) { ... }
		onTransitionIn:         undefined, // accepts a delegate like such: function() { ... }
		onPageTransitionOut:    undefined, // accepts a delegate like such: function(callback) { ... }
		onPageTransitionIn:     undefined  // accepts a delegate like such: function() { ... }
	};

	$.fn.galleriffic = function(thumbsContainerSel, settings) {
		//  Extend Gallery Object
		$.extend(this, {
			ver: function() {
				return ver;
			},

			initializeThumbs: function() {
				this.data = [];
				var gallery = this;

				this.$thumbsContainer.find('ul.thumbs > li').each(function(i) {
					var $li = $(this);
					var $aThumb = $li.find('a.thumb');
					var hash = gallery.offset+i;

					gallery.data.push({
						title:$aThumb.attr('title'),
						slideUrl:$aThumb.attr('href'),
						caption:$li.find('.caption').remove(),
						hash:hash
					});

					// Setup history
					$aThumb.attr('rel', 'history');
					$aThumb.attr('href', '#'+hash);
					$aThumb.click(function(e) {
						clickHandler(e, gallery, this);
					});
				});
				return this;
			},

			isPreloadComplete: false,

			preloadInit: function() {
				if (this.settings.preloadAhead == 0) return this;

				this.preloadStartIndex = this.currentIndex;
				var nextIndex = this.getNextIndex(this.preloadStartIndex);
				return this.preloadRecursive(this.preloadStartIndex, nextIndex);
			},

			preloadRelocate: function(index) {
				// By changing this startIndex, the current preload script will restart
				this.preloadStartIndex = index;
				return this;
			},

			preloadRecursive: function(startIndex, currentIndex) {
				// Check if startIndex has been relocated
				if (startIndex != this.preloadStartIndex) {
					var nextIndex = this.getNextIndex(this.preloadStartIndex);
					return this.preloadRecursive(this.preloadStartIndex, nextIndex);
				}

				var gallery = this;

				// Now check for preloadAhead count
				var preloadCount = currentIndex - startIndex;
				if (preloadCount < 0)
					preloadCount = this.data.length-1-startIndex+currentIndex;
				if (this.settings.preloadAhead >= 0 && preloadCount > this.settings.preloadAhead) {
					// Do this in order to keep checking for relocated start index
					setTimeout(function() { gallery.preloadRecursive(startIndex, currentIndex); }, 500);
					return this;
				}

				var imageData = this.data[currentIndex];
				if (!imageData)
					return this;

				// If already loaded, continue
				if (imageData.image)
					return this.preloadNext(startIndex, currentIndex);

				// Preload the image
				var image = new Image();

				image.onload = function() {
					imageData.image = this;
					gallery.preloadNext(startIndex, currentIndex);
				};

				image.alt = imageData.title;
				image.src = imageData.slideUrl;

				return this;
			},

			preloadNext: function(startIndex, currentIndex) {
				var nextIndex = this.getNextIndex(currentIndex);
				if (nextIndex == startIndex) {
					this.isPreloadComplete = true;
				} else {
					// Use set timeout to free up thread
					var gallery = this;
					setTimeout(function() { gallery.preloadRecursive(startIndex, nextIndex); }, 100);
				}
				return this;
			},

			getNextIndex: function(index) {
				var nextIndex = index+1;
				if (nextIndex >= this.data.length)
					nextIndex = 0;
				return nextIndex;
			},

			getPrevIndex: function(index) {
				var prevIndex = index-1;
				if (prevIndex < 0)
					prevIndex = this.data.length-1;
				return prevIndex;
			},

			pause: function() {
				if (this.interval)
					this.toggleSlideshow();

				return this;
			},

			play: function() {
				if (!this.interval)
					this.toggleSlideshow();

				return this;
			},

			toggleSlideshow: function() {
				if (this.interval) {
					clearInterval(this.interval);
					this.interval = 0;

					if (this.$controlsContainer) {
						this.$controlsContainer
							.find('div.ss-controls a').removeClass().addClass('play')
							.attr('title', this.settings.playLinkText)
							.attr('href', '#play')
							.html(this.settings.playLinkText);
					}
				} else {
					this.ssAdvance();

					var gallery = this;
					this.interval = setInterval(function() {
						gallery.ssAdvance();
					}, this.settings.delay);

					if (this.$controlsContainer) {
						this.$controlsContainer
							.find('div.ss-controls a').removeClass().addClass('pause')
							.attr('title', this.settings.pauseLinkText)
							.attr('href', '#pause')
							.html(this.settings.pauseLinkText);
					}
				}

				return this;
			},

			ssAdvance: function() {
				var nextIndex = this.getNextIndex(this.currentIndex);
				var nextHash = this.data[nextIndex].hash;

				// Seems to be working on both FF and Safari
				if (this.settings.enableHistory)
					location.href = '#'+nextHash;
				else
					this.goto(nextIndex);

				// IE we need to explicity call goto
				//if ($.browser.msie) {
				//	this.goto(nextIndex);
				//}

				return this;
			},

			goto: function(index) {
				if (index < 0) index = 0;
				else if (index >= this.data.length) index = this.data.length-1;

				if (this.settings.onChange)
					this.settings.onChange(this.currentIndex, index);

				this.currentIndex = index;
				this.preloadRelocate(index);
				return this.refresh();
			},

			refresh: function() {
				var imageData = this.data[this.currentIndex];
				if (!imageData)
					return this;

				// Flag we are transitioning
				var isTransitioning = true;

				var gallery = this;

				var transitionOutCallback = function() {
					// Flag that the transition has completed
					isTransitioning = false;

					// Update Controls
					if (gallery.$controlsContainer) {
						gallery.$controlsContainer
							.find('div.nav-controls a.prev').attr('href', '#'+gallery.data[gallery.getPrevIndex(gallery.currentIndex)].hash).end()
							.find('div.nav-controls a.next').attr('href', '#'+gallery.data[gallery.getNextIndex(gallery.currentIndex)].hash);
					}

					var imageData = gallery.data[gallery.currentIndex];

					// Replace Caption
					if (gallery.$captionContainer) {
						gallery.$captionContainer.empty().append(imageData.caption);
					}

					if (imageData.image) {
						gallery.buildImage(imageData.image);
					} else {
						// Show loading container
						if (gallery.$loadingContainer) {
							gallery.$loadingContainer.show();
						}
					}
				}

				if (this.settings.onTransitionOut) {
					this.settings.onTransitionOut(transitionOutCallback);
				} else {
					this.$transitionContainers.hide();
					transitionOutCallback();
				}

				if (!imageData.image) {
					var image = new Image();

					// Wire up mainImage onload event
					image.onload = function() {
						imageData.image = this;

						if (!isTransitioning) {
							gallery.buildImage(imageData.image);
						}
					};

					// set alt and src
					image.alt = imageData.title;
					image.src = imageData.slideUrl;
				}

				// This causes the preloader (if still running) to relocate out from the currentIndex
				this.relocatePreload = true;

				return this.syncThumbs();
			},

			buildImage: function(image) {
				if (this.$imageContainer) {
					this.$imageContainer.empty();

					var gallery = this;
					var nextIndex = this.getNextIndex(this.currentIndex);

					// Hide the loading conatiner
					if (this.$loadingContainer) {
						this.$loadingContainer.hide();
					}

					// Setup image
					this.$imageContainer
						.append('<span class="image-wrapper"><a class="advance-link" rel="history" href="#'+this.data[nextIndex].hash+'" title="'+image.alt+'"></a></span>')
						.find('a')
						.append(image)
						.click(function(e) {
							clickHandler(e, gallery, this);
						});
				}

				if (this.settings.onTransitionIn)
					this.settings.onTransitionIn();
				else
					this.$transitionContainers.show();

				return this;
			},

			syncThumbs: function() {
				if (this.$thumbsContainer) {
					var page = Math.floor(this.currentIndex / this.settings.numThumbs);
					if (page != this.currentPage) {
						this.currentPage = page;
						this.updateThumbs();
					}

					// Remove existing selected class and add selected class to new thumb
					var $thumbs = this.$thumbsContainer.find('ul.thumbs').children();
					$thumbs.filter('.selected').removeClass('selected');
					$thumbs.eq(this.currentIndex).addClass('selected');
				}

				return this;
			},

			updateThumbs: function() {
				var gallery = this;
				var transitionOutCallback = function() {
					gallery.rebuildThumbs();

					// Transition In the thumbsContainer
					if (gallery.settings.onPageTransitionIn)
						gallery.settings.onPageTransitionIn();
					else
						gallery.$thumbsContainer.show();
				};

				// Transition Out the thumbsContainer
				if (this.settings.onPageTransitionOut) {
					this.settings.onPageTransitionOut(transitionOutCallback);
				} else {
					this.$thumbsContainer.hide();
					transitionOutCallback();
				}

				return this;
			},

			rebuildThumbs: function() {
				// Initialize currentPage to first page
				if (this.currentPage < 0)
					this.currentPage = 0;

				var needsPagination = this.data.length > this.settings.numThumbs;



				// Rebuild bottom pager
				if (needsPagination && this.settings.enableBottomPager) {
					var $bottomPager = this.$thumbsContainer.find('div.bottom');
					if ($bottomPager.length == 0)
						$bottomPager = this.$thumbsContainer.append('<div class="bottom pagination"></div>').find('div.bottom');
					else
						$bottomPager.empty();

					this.buildPager($bottomPager);
				}

				var startIndex = this.currentPage*this.settings.numThumbs;
				var stopIndex = startIndex+this.settings.numThumbs-1;
				if (stopIndex >= this.data.length)
					stopIndex = this.data.length-1;

				// Show/Hide thumbs
				var $thumbsUl = this.$thumbsContainer.find('ul.thumbs');
				$thumbsUl.find('li').each(function(i) {
					var $li = $(this);
					if (i >= startIndex && i <= stopIndex) {
						$li.show();
					} else {
						$li.hide();
					}
				});

				// Remove the noscript class from the thumbs container ul
				$thumbsUl.removeClass('noscript');

				return this;
			},

			buildPager: function(pager) {
				var gallery = this;
				var startIndex = this.currentPage*this.settings.numThumbs;

				// Prev Page Link
				if (this.currentPage > 0) {
					var prevPage = startIndex - this.settings.numThumbs;
					pager.append('<a rel="history" href="#'+this.data[prevPage].hash+'" title="'+this.settings.prevPageLinkText+'">'+this.settings.prevPageLinkText+'</a>');
				}

				// Page Index Links
				for (i=this.currentPage-3; i<=this.currentPage+3; i++) {
					var pageNum = i+1;

					if (i == this.currentPage)
						pager.append('<span class="current">'+pageNum+'</span>');
					else if (i>=0 && i<this.numPages) {
						var imageIndex = i*this.settings.numThumbs;
						pager.append('<a rel="history" href="#'+this.data[imageIndex].hash+'" title="'+pageNum+'">'+pageNum+'</a>');
					}
				}

				// Next Page Link
				var nextPage = startIndex+this.settings.numThumbs;
				if (nextPage < this.data.length) {
					pager.append('<a rel="history" href="#'+this.data[nextPage].hash+'" title="'+this.settings.nextPageLinkText+'">'+this.settings.nextPageLinkText+'</a>');
				}

				pager.find('a').click(function(e) {
					clickHandler(e, gallery, this);
				});

				return this;
			}
		});

		// Now initialize the gallery
		this.settings = $.extend({}, defaults, settings);
		//enableHistory = this.settings.enableHistory; // Ghismo

		if (this.interval)
			clearInterval(this.interval);

		this.interval = 0;

		if (this.settings.imageContainerSel) this.$imageContainer = $(this.settings.imageContainerSel);
		if (this.settings.captionContainerSel) this.$captionContainer = $(this.settings.captionContainerSel);
		if (this.settings.loadingContainerSel) this.$loadingContainer = $(this.settings.loadingContainerSel);

		// Setup the jQuery object holding each container that will be transitioned
		this.$transitionContainers = $([]);
		if (this.$imageContainer)
			this.$transitionContainers = this.$transitionContainers.add(this.$imageContainer);
		if (this.$captionContainer)
			this.$transitionContainers = this.$transitionContainers.add(this.$captionContainer);

		// Set the hash index offset for this gallery
		this.offset = galleryOffset;

		this.$thumbsContainer = $(thumbsContainerSel);
		this.initializeThumbs();

		// Add this gallery to the global galleries array
		registerGallery(this);

		this.numPages = Math.ceil(this.data.length/this.settings.numThumbs);
		this.currentPage = -1;
		this.currentIndex = 0;
		var gallery = this;

		// Hide the loadingContainer
		if (this.$loadingContainer)
			this.$loadingContainer.hide();

		// Setup controls
		if (this.settings.controlsContainerSel) {
			this.$controlsContainer = $(this.settings.controlsContainerSel).empty();

			if (this.settings.renderSSControls) {
				if (this.settings.autoStart) {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#pause" class="pause" title="'+this.settings.pauseLinkText+'">'+this.settings.pauseLinkText+'</a></div>');
				} else {
					this.$controlsContainer
						.append('<div class="ss-controls"><a href="#play" class="play" title="'+this.settings.playLinkText+'">'+this.settings.playLinkText+'</a></div>');
				}

				this.$controlsContainer.find('div.ss-controls a')
					.click(function(e) {
						gallery.toggleSlideshow();
						e.preventDefault();
						return false;
					});
			}

			if (this.settings.renderNavControls) {
				var $navControls = this.$controlsContainer
					.append('<div class="nav-controls"><a class="prev" rel="history" title="'+this.settings.prevLinkText+'">'+this.settings.prevLinkText+'</a><a class="next" rel="history" title="'+this.settings.nextLinkText+'">'+this.settings.nextLinkText+'</a></div>')
					.find('div.nav-controls a')
					.click(function(e) {
						clickHandler(e, gallery, this);
					});
			}
		}

		// Initialize history only once when the first gallery on the page is initialized
		historyInit();

		// Build image
		var hash = getHash();
		var hashGallery = (hash >= 0) ? getGallery(hash) : 0;
		var gotoIndex = (hashGallery && this == hashGallery) ? (hash-this.offset) : 0;
		this.goto(gotoIndex);

		if (this.settings.autoStart) {

			setTimeout(function() { gallery.play(); }, this.settings.delay);
		}

		// Kickoff Image Preloader after 1 second
		setTimeout(function() { gallery.preloadInit(); }, 1000);

		return this;
	};
})(jQuery);
;
// jQuery List DragSort v0.5.2
// License: http://dragsort.codeplex.com/license
(function(e){e.fn.dragsort=function(t){if(t=="destroy"){e(this.selector).trigger("dragsort-uninit");return}var n=e.extend({},e.fn.dragsort.defaults,t);var r=[];var i=null,s=null;this.each(function(t,o){if(e(o).is("table")&&e(o).children().length==1&&e(o).children().is("tbody"))o=e(o).children().get(0);var u={draggedItem:null,placeHolderItem:null,pos:null,offset:null,offsetLimit:null,scroll:null,container:o,init:function(){n.tagName=e(this.container).children().length==0?"li":e(this.container).children().get(0).tagName.toLowerCase();if(n.itemSelector=="")n.itemSelector=n.tagName;if(n.dragSelector=="")n.dragSelector=n.tagName;if(n.placeHolderTemplate=="")n.placeHolderTemplate="<"+n.tagName+">&nbsp;</"+n.tagName+">";e(this.container).attr("data-listidx",t).mousedown(this.grabItem).bind("dragsort-uninit",this.uninit);this.styleDragHandlers(true)},uninit:function(){var t=r[e(this).attr("data-listidx")];e(t.container).unbind("mousedown",t.grabItem).unbind("dragsort-uninit");t.styleDragHandlers(false)},getItems:function(){return e(this.container).children(n.itemSelector)},styleDragHandlers:function(t){this.getItems().map(function(){return e(this).is(n.dragSelector)?this:e(this).find(n.dragSelector).get()}).css("cursor",t?"pointer":"")},grabItem:function(t){var i=r[e(this).attr("data-listidx")];var s=e(t.target).closest("[data-listidx] > "+n.tagName).get(0);var o=i.getItems().filter(function(){return this==s}).length>0;if(t.which!=1||e(t.target).is(n.dragSelectorExclude)||e(t.target).closest(n.dragSelectorExclude).length>0||!o)return;t.preventDefault();var u=t.target;while(!e(u).is(n.dragSelector)){if(u==this)return;u=u.parentNode}e(u).attr("data-cursor",e(u).css("cursor"));e(u).css("cursor","move");var a=this;var f=function(){i.dragStart.call(a,t);e(i.container).unbind("mousemove",f)};e(i.container).mousemove(f).mouseup(function(){e(i.container).unbind("mousemove",f);e(u).css("cursor",e(u).attr("data-cursor"))})},dragStart:function(t){if(i!=null&&i.draggedItem!=null)i.dropItem();i=r[e(this).attr("data-listidx")];i.draggedItem=e(t.target).closest("[data-listidx] > "+n.tagName);i.draggedItem.attr("data-origpos",e(this).attr("data-listidx")+"-"+e(i.container).children().index(i.draggedItem));var s=parseInt(i.draggedItem.css("marginTop"));var o=parseInt(i.draggedItem.css("marginLeft"));i.offset=i.draggedItem.offset();i.offset.top=t.pageY-i.offset.top+(isNaN(s)?0:s)-1;i.offset.left=t.pageX-i.offset.left+(isNaN(o)?0:o)-1;if(!n.dragBetween){var u=e(i.container).outerHeight()==0?Math.max(1,Math.round(.5+i.getItems().length*i.draggedItem.outerWidth()/e(i.container).outerWidth()))*i.draggedItem.outerHeight():e(i.container).outerHeight();i.offsetLimit=e(i.container).offset();i.offsetLimit.right=i.offsetLimit.left+e(i.container).outerWidth()-i.draggedItem.outerWidth();i.offsetLimit.bottom=i.offsetLimit.top+u-i.draggedItem.outerHeight()}var a=i.draggedItem.height();var f=i.draggedItem.width();if(n.tagName=="tr"){i.draggedItem.children().each(function(){e(this).width(e(this).width())});i.placeHolderItem=i.draggedItem.clone().attr("data-placeholder",true);i.draggedItem.after(i.placeHolderItem);i.placeHolderItem.children().each(function(){e(this).css({borderWidth:0,width:e(this).width()+1,height:e(this).height()+1}).html("&nbsp;")})}else{i.draggedItem.after(n.placeHolderTemplate);i.placeHolderItem=i.draggedItem.next().css({height:a,width:f}).attr("data-placeholder",true)}if(n.tagName=="td"){var l=i.draggedItem.closest("table").get(0);e("<table id='"+l.id+"' style='border-width: 0px;' class='dragSortItem "+l.className+"'><tr></tr></table>").appendTo("body").children().append(i.draggedItem)}var c=i.draggedItem.attr("style");i.draggedItem.attr("data-origstyle",c?c:"");i.draggedItem.css({position:"absolute",opacity:.8,"z-index":999,height:a,width:f});i.scroll={moveX:0,moveY:0,maxX:e(document).width()-e(window).width(),maxY:e(document).height()-e(window).height()};i.scroll.scrollY=window.setInterval(function(){if(n.scrollContainer!=window){e(n.scrollContainer).scrollTop(e(n.scrollContainer).scrollTop()+i.scroll.moveY);return}var t=e(n.scrollContainer).scrollTop();if(i.scroll.moveY>0&&t<i.scroll.maxY||i.scroll.moveY<0&&t>0){e(n.scrollContainer).scrollTop(t+i.scroll.moveY);i.draggedItem.css("top",i.draggedItem.offset().top+i.scroll.moveY+1)}},10);i.scroll.scrollX=window.setInterval(function(){if(n.scrollContainer!=window){e(n.scrollContainer).scrollLeft(e(n.scrollContainer).scrollLeft()+i.scroll.moveX);return}var t=e(n.scrollContainer).scrollLeft();if(i.scroll.moveX>0&&t<i.scroll.maxX||i.scroll.moveX<0&&t>0){e(n.scrollContainer).scrollLeft(t+i.scroll.moveX);i.draggedItem.css("left",i.draggedItem.offset().left+i.scroll.moveX+1)}},10);e(r).each(function(e,t){t.createDropTargets();t.buildPositionTable()});i.setPos(t.pageX,t.pageY);e(document).bind("mousemove",i.swapItems);e(document).bind("mouseup",i.dropItem);if(n.scrollContainer!=window)e(window).bind("wheel",i.wheel)},setPos:function(t,r){var s=r-this.offset.top;var o=t-this.offset.left;if(!n.dragBetween){s=Math.min(this.offsetLimit.bottom,Math.max(s,this.offsetLimit.top));o=Math.min(this.offsetLimit.right,Math.max(o,this.offsetLimit.left))}var u=this.draggedItem.offsetParent().not("body").offset();if(u!=null){s-=u.top;o-=u.left}if(n.scrollContainer==window){r-=e(window).scrollTop();t-=e(window).scrollLeft();r=Math.max(0,r-e(window).height()+5)+Math.min(0,r-5);t=Math.max(0,t-e(window).width()+5)+Math.min(0,t-5)}else{var a=e(n.scrollContainer);var f=a.offset();r=Math.max(0,r-a.height()-f.top)+Math.min(0,r-f.top);t=Math.max(0,t-a.width()-f.left)+Math.min(0,t-f.left)}i.scroll.moveX=t==0?0:t*n.scrollSpeed/Math.abs(t);i.scroll.moveY=r==0?0:r*n.scrollSpeed/Math.abs(r);this.draggedItem.css({top:s,left:o})},wheel:function(t){if(i&&n.scrollContainer!=window){var r=e(n.scrollContainer);var s=r.offset();t=t.originalEvent;if(t.clientX>s.left&&t.clientX<s.left+r.width()&&t.clientY>s.top&&t.clientY<s.top+r.height()){var o=(t.deltaMode==0?1:10)*t.deltaY;r.scrollTop(r.scrollTop()+o);t.preventDefault()}}},buildPositionTable:function(){var t=[];this.getItems().not([i.draggedItem[0],i.placeHolderItem[0]]).each(function(n){var r=e(this).offset();r.right=r.left+e(this).outerWidth();r.bottom=r.top+e(this).outerHeight();r.elm=this;t[n]=r});this.pos=t},dropItem:function(){if(i.draggedItem==null)return;var t=i.draggedItem.attr("data-origstyle");i.draggedItem.attr("style",t);if(t=="")i.draggedItem.removeAttr("style");i.draggedItem.removeAttr("data-origstyle");i.styleDragHandlers(true);i.placeHolderItem.before(i.draggedItem);i.placeHolderItem.remove();e("[data-droptarget], .dragSortItem").remove();window.clearInterval(i.scroll.scrollY);window.clearInterval(i.scroll.scrollX);if(i.draggedItem.attr("data-origpos")!=e(r).index(i)+"-"+e(i.container).children().index(i.draggedItem))if(n.dragEnd.apply(i.draggedItem)==false){var s=i.draggedItem.attr("data-origpos").split("-");var o=e(r[s[0]].container).children().not(i.draggedItem).eq(s[1]);if(o.length>0)o.before(i.draggedItem);else if(s[1]==0)e(r[s[0]].container).prepend(i.draggedItem);else e(r[s[0]].container).append(i.draggedItem)}i.draggedItem.removeAttr("data-origpos");i.draggedItem=null;e(document).unbind("mousemove",i.swapItems);e(document).unbind("mouseup",i.dropItem);if(n.scrollContainer!=window)e(window).unbind("wheel",i.wheel);return false},swapItems:function(t){if(i.draggedItem==null)return false;i.setPos(t.pageX,t.pageY);var o=i.findPos(t.pageX,t.pageY);var u=i;for(var a=0;o==-1&&n.dragBetween&&a<r.length;a++){o=r[a].findPos(t.pageX,t.pageY);u=r[a]}if(o==-1)return false;var f=function(){return e(u.container).children().not(u.draggedItem)};var l=f().not(n.itemSelector).each(function(e){this.idx=f().index(this)});if(s==null||s.top>i.draggedItem.offset().top||s.left>i.draggedItem.offset().left)e(u.pos[o].elm).before(i.placeHolderItem);else e(u.pos[o].elm).after(i.placeHolderItem);l.each(function(){var t=f().eq(this.idx).get(0);if(this!=t&&f().index(this)<this.idx)e(this).insertAfter(t);else if(this!=t)e(this).insertBefore(t)});e(r).each(function(e,t){t.createDropTargets();t.buildPositionTable()});s=i.draggedItem.offset();return false},findPos:function(e,t){for(var n=0;n<this.pos.length;n++){if(this.pos[n].left<e&&this.pos[n].right>e&&this.pos[n].top<t&&this.pos[n].bottom>t)return n}return-1},createDropTargets:function(){if(!n.dragBetween)return;e(r).each(function(){var t=e(this.container).find("[data-placeholder]");var r=e(this.container).find("[data-droptarget]");if(t.length>0&&r.length>0)r.remove();else if(t.length==0&&r.length==0){if(n.tagName=="td")e(n.placeHolderTemplate).attr("data-droptarget",true).appendTo(this.container);else e(this.container).append(i.placeHolderItem.removeAttr("data-placeholder").clone().attr("data-droptarget",true));i.placeHolderItem.attr("data-placeholder",true)}})}};u.init();r.push(u)});return this};e.fn.dragsort.defaults={itemSelector:"",dragSelector:"",dragSelectorExclude:"input, textarea",dragEnd:function(){},dragBetween:false,placeHolderTemplate:"",scrollContainer:window,scrollSpeed:5}})(jQuery)

//** Accordion Content script: By Dynamic Drive, at http://www.dynamicdrive.com
//** Created: Jan 7th, 08'

//Version 1.3: April 3rd, 08':
//**1) Script now no longer conflicts with other JS frameworks
//**2) Adds custom oninit() and onopenclose() event handlers that fire when Accordion Content instance has initialized, plus whenever a header is opened/closed
//**3) Adds support for expanding header(s) using the URL parameter (ie: http://mysite.com/accordion.htm?headerclass=0,1)

//April 9th, 08': Fixed "defaultexpanded" setting not working when page first loads

//Version 1.4: June 4th, 08':
//**1) Added option to activate a header "mouseover" instead of the default "click"
//**2) Bug persistence not working when used with jquery 1.2.6

//Version 1.5: June 20th, 08':
//**1) Adds new "onemustopen:true/false" parameter, which lets you set whether at least one header should be open at all times (so never all closed).
//**2) Changed cookie path to site wide for persistence feature
//**3) Fixed bug so "expandedindices" parameter in oninit(headers, expandedindices) returns empty array [] instead of [-1] when no expanded headers found

//**1) Version 1.5.1: June 27th, 08': Fixed "defaultexpanded" setting not working properly when used with jquery 1.2.6

//Version 1.6: Oct 3rd, 08':
//**1) Adds new "mouseoverdelay" param that sets delay before headers are activated when "revealtype" param is set to "mouseover"
//**2) Fixed bug with "onemustopen" param not working properly when "revealtype" is set to "click"


var ddaccordion={

	contentclassname:{}, //object to store corresponding contentclass name based on headerclass

	expandone:function(headerclass, selected){ //PUBLIC function to expand a particular header
		this.toggleone(headerclass, selected, "expand")
	},

	collapseone:function(headerclass, selected){ //PUBLIC function to collapse a particular header
		this.toggleone(headerclass, selected, "collapse")
	},

	expandall:function(headerclass){ //PUBLIC function to expand all headers based on their shared CSS classname
		var $=jQuery
		var $headers=$('.'+headerclass)
		$('.'+this.contentclassname[headerclass]+':hidden').each(function(){
			$headers.eq(parseInt($(this).attr('contentindex'))).trigger("evt_accordion")
		})
	},

	collapseall:function(headerclass){ //PUBLIC function to collapse all headers based on their shared CSS classname
		var $=jQuery
		var $headers=$('.'+headerclass)
		$('.'+this.contentclassname[headerclass]+':visible').each(function(){
			$headers.eq(parseInt($(this).attr('contentindex'))).trigger("evt_accordion")
		})
	},

	toggleone:function(headerclass, selected, optstate){ //PUBLIC function to expand/ collapse a particular header
		var $=jQuery
		var $targetHeader=$('.'+headerclass).eq(selected)
		var $subcontent=$('.'+this.contentclassname[headerclass]).eq(selected)
		if (typeof optstate=="undefined" || optstate=="expand" && $subcontent.is(":hidden") || optstate=="collapse" && $subcontent.is(":visible"))
			$targetHeader.trigger("evt_accordion")
	},

	expandit:function($targetHeader, $targetContent, config, useractivated){
		$targetContent.slideDown(config.animatespeed, function(){config.onopenclose($targetHeader.get(0), parseInt($targetHeader.attr('headerindex')), $targetContent.css('display'), useractivated)})
		this.transformHeader($targetHeader, config, "expand")
	},

	collapseit:function($targetHeader, $targetContent, config, isuseractivated){
		$targetContent.slideUp(config.animatespeed, function(){config.onopenclose($targetHeader.get(0), parseInt($targetHeader.attr('headerindex')), $targetContent.css('display'), isuseractivated)})
		this.transformHeader($targetHeader, config, "collapse")
	},

	transformHeader:function($targetHeader, config, state){
		$targetHeader.addClass((state=="expand")? config.cssclass.expand : config.cssclass.collapse) //alternate btw "expand" and "collapse" CSS classes
		.removeClass((state=="expand")? config.cssclass.collapse : config.cssclass.expand)
		if (config.htmlsetting.location=='src'){ //Change header image (assuming header is an image)?
			$targetHeader=($targetHeader.is("img"))? $targetHeader : $targetHeader.find('img').eq(0) //Set target to either header itself, or first image within header
			$targetHeader.attr('src', (state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse) //change header image
		}
		else if (config.htmlsetting.location=="prefix") //if change "prefix" HTML, locate dynamically added ".accordprefix" span tag and change it
			$targetHeader.find('.accordprefix').html((state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse)
		else if (config.htmlsetting.location=="suffix")
			$targetHeader.find('.accordsuffix').html((state=="expand")? config.htmlsetting.expand : config.htmlsetting.collapse)
	},

	urlparamselect:function(headerclass){
		var result=window.location.search.match(new RegExp(headerclass+"=((\\d+)(,(\\d+))*)", "i")) //check for "?headerclass=2,3,4" in URL
		if (result!=null)
			result=RegExp.$1.split(',')
		return result //returns null, [index], or [index1,index2,etc], where index are the desired selected header indices
	},

	getCookie:function(Name){
		var re=new RegExp(Name+"=[^;]+", "i") //construct RE to search for target name/value pair
		if (document.cookie.match(re)) //if cookie found
			return document.cookie.match(re)[0].split("=")[1] //return its value
		return null
	},

	setCookie:function(name, value){
		document.cookie = name + "=" + value + "; path=/"
	},

	init:function(config){
	document.write('<style type="text/css">\n')
	document.write('.'+config.contentclass+'{display: none}\n') //generate CSS to hide contents
	document.write('<\/style>')
	jQuery(document).ready(function($){
		ddaccordion.urlparamselect(config.headerclass)
		var persistedheaders=ddaccordion.getCookie(config.headerclass)
		ddaccordion.contentclassname[config.headerclass]=config.contentclass //remember contentclass name based on headerclass
		config.cssclass={collapse: config.toggleclass[0], expand: config.toggleclass[1]} //store expand and contract CSS classes as object properties
		config.revealtype=/^(click)|(mouseover)$/i.test(config.revealtype)? config.revealtype.replace(/mouseover/i, "mouseenter") : "click"
		config.htmlsetting={location: config.togglehtml[0], collapse: config.togglehtml[1], expand: config.togglehtml[2]} //store HTML settings as object properties
		config.oninit=(typeof config.oninit=="undefined")? function(){} : config.oninit //attach custom "oninit" event handler
		config.onopenclose=(typeof config.onopenclose=="undefined")? function(){} : config.onopenclose //attach custom "onopenclose" event handler
		var lastexpanded={} //object to hold reference to last expanded header and content (jquery objects)
		var expandedindices=ddaccordion.urlparamselect(config.headerclass) || ((config.persiststate && persistedheaders!=null)? persistedheaders : config.defaultexpanded)
		if (typeof expandedindices=='string') //test for string value (exception is config.defaultexpanded, which is an array)
			expandedindices=expandedindices.replace(/c/ig, '').split(',') //transform string value to an array (ie: "c1,c2,c3" becomes [1,2,3]
		var $subcontents=$('.'+config["contentclass"])
		if (expandedindices.length==1 && expandedindices[0]=="-1") //check for expandedindices value of [-1], indicating persistence is on and no content expanded
			expandedindices=[]
		if (config["collapseprev"] && expandedindices.length>1) //only allow one content open?
			expandedindices=[expandedindices.pop()] //return last array element as an array (for sake of jQuery.inArray())
		if (config["onemustopen"] && expandedindices.length==0) //if at least one content should be open at all times and none are, open 1st header
			expandedindices=[0]
		$('.'+config["headerclass"]).each(function(index){ //loop through all headers
			if (/(prefix)|(suffix)/i.test(config.htmlsetting.location) && $(this).html()!=""){ //add a SPAN element to header depending on user setting and if header is a container tag
				$('<span class="accordprefix"></span>').prependTo(this)
				$('<span class="accordsuffix"></span>').appendTo(this)
			}
			$(this).attr('headerindex', index+'h') //store position of this header relative to its peers
			$subcontents.eq(index).attr('contentindex', index+'c') //store position of this content relative to its peers
			var $subcontent=$subcontents.eq(index)
			var needle=(typeof expandedindices[0]=="number")? index : index+'' //check for data type within expandedindices array- index should match that type
			if (jQuery.inArray(needle, expandedindices)!=-1){ //check for headers that should be expanded automatically (convert index to string first)
				if (config.animatedefault==false)
					$subcontent.show()
				ddaccordion.expandit($(this), $subcontent, config, false) //Last Boolean value sets 'isuseractivated' parameter
				lastexpanded={$header:$(this), $content:$subcontent}
			}  //end check
			else{
				$subcontent.hide()
				config.onopenclose($(this).get(0), parseInt($(this).attr('headerindex')), $subcontent.css('display'), false) //Last Boolean value sets 'isuseractivated' parameter
				ddaccordion.transformHeader($(this), config, "collapse")
			}
		})
		$('.'+config["headerclass"]).bind("evt_accordion", function(){ //assign custom event handler that expands/ contacts a header
				var $subcontent=$subcontents.eq(parseInt($(this).attr('headerindex'))) //get subcontent that should be expanded/collapsed
				if ($subcontent.css('display')=="none"){
					ddaccordion.expandit($(this), $subcontent, config, true) //Last Boolean value sets 'isuseractivated' parameter
					if (config["collapseprev"] && lastexpanded.$header && $(this).get(0)!=lastexpanded.$header.get(0)){ //collapse previous content?
						ddaccordion.collapseit(lastexpanded.$header, lastexpanded.$content, config, true) //Last Boolean value sets 'isuseractivated' parameter
					}
					lastexpanded={$header:$(this), $content:$subcontent}
				}
				else if (!config["onemustopen"] || config["onemustopen"] && lastexpanded.$header && $(this).get(0)!=lastexpanded.$header.get(0)){
					ddaccordion.collapseit($(this), $subcontent, config, true) //Last Boolean value sets 'isuseractivated' parameter
				}
 		})
		$('.'+config["headerclass"]).bind(config.revealtype, function(){
			if (config.revealtype=="mouseenter"){
				clearTimeout(config.revealdelay)
				var headerindex=parseInt($(this).attr("headerindex"))
				config.revealdelay=setTimeout(function(){ddaccordion.expandone(config["headerclass"], headerindex)}, config.mouseoverdelay || 0)
			}
			else{
				$(this).trigger("evt_accordion")
				return false //cancel default click behavior
			}
		})
		$('.'+config["headerclass"]).bind("mouseleave", function(){
			clearTimeout(config.revealdelay)
		})
		config.oninit($('.'+config["headerclass"]).get(), expandedindices)
		$(window).bind('unload', function(){ //clean up and persist on page unload
			$('.'+config["headerclass"]).unbind()
			var expandedindices=[]
			$('.'+config["contentclass"]+":visible").each(function(index){ //get indices of expanded headers
				expandedindices.push($(this).attr('contentindex'))
			})
			if (config.persiststate==true){ //persist state?
				expandedindices=(expandedindices.length==0)? '-1c' : expandedindices //No contents expanded, indicate that with dummy '-1c' value?
				ddaccordion.setCookie(config.headerclass, expandedindices)
			}
		})
	})
	}
};
/* jQuery jqEasyCharCounter plugin
 * Examples and documentation at: http://www.jqeasy.com/
 * Version: 1.0 (05/07/2010)
 * No license. Use it however you want. Just keep this notice included.
 * Requires: jQuery v1.3+
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
 (function(a){a.fn.extend({jqEasyCounter:function(b){return this.each(function(){var f=a(this),e=a.extend({maxChars:140,maxCharsWarning:80,msgFontSize:"12px",msgFontColor:"#000000",msgFontFamily:"Arial",msgTextAlign:"right",msgWarningColor:"#F00",msgAppendMethod:"insertAfter"},b);if(e.maxChars<=0){return}var d=a('<div class="jqEasyCounterMsg">&nbsp;</div>');var c={"font-size":e.msgFontSize,"font-family":e.msgFontFamily,color:e.msgFontColor,"text-align":e.msgTextAlign,width:f.width(),opacity:0};d.css(c);d[e.msgAppendMethod](f);f.bind("keydown keyup keypress",g).bind("focus paste",function(){setTimeout(g,10)}).bind("blur",function(){d.stop().fadeTo("fast",0);return false});function g(){var i=f.val(),h=i.length;if(h>=e.maxChars){i=i.substring(0,e.maxChars)}if(h>e.maxChars){var j=f.scrollTop();f.val(i.substring(0,e.maxChars));f.scrollTop(j)}if(h>=e.maxCharsWarning){d.css({color:e.msgWarningColor})}else{d.css({color:e.msgFontColor})}d.html("Characters: "+f.val().length+"/"+e.maxChars);d.stop().fadeTo("fast",1)}})}})})(jQuery);;
/*
	Mosaic - Sliding Boxes and Captions jQuery Plugin
	Version 1.0.1
	www.buildinternet.com/project/mosaic

	By Sam Dunn / One Mighty Roar (www.onemightyroar.com)
	Released under MIT License / GPL License
*/

(function(a){if(!a.omr){a.omr=new Object()}a.omr.mosaic=function(c,b){var d=this;d.$el=a(c);d.el=c;d.$el.data("omr.mosaic",d);d.init=function(){d.options=a.extend({},a.omr.mosaic.defaultOptions,b);d.load_box()};d.load_box=function(){if(d.options.preload){a(d.options.backdrop,d.el).hide();a(d.options.overlay,d.el).hide();a(window).load(function(){if(d.options.options.animation=="fade"&&a(d.options.overlay,d.el).css("opacity")==0){a(d.options.overlay,d.el).css("filter","alpha(opacity=0)")}a(d.options.overlay,d.el).fadeIn(200,function(){a(d.options.backdrop,d.el).fadeIn(200)});d.allow_hover()})}else{a(d.options.backdrop,d.el).show();a(d.options.overlay,d.el).show();d.allow_hover()}};d.allow_hover=function(){switch(d.options.animation){case"fade":a(d.el).hover(function(){a(d.options.overlay,d.el).stop().fadeTo(d.options.speed,d.options.opacity)},function(){a(d.options.overlay,d.el).stop().fadeTo(d.options.speed,0)});break;case"slide":startX=a(d.options.overlay,d.el).css(d.options.anchor_x)!="auto"?a(d.options.overlay,d.el).css(d.options.anchor_x):"0px";startY=a(d.options.overlay,d.el).css(d.options.anchor_y)!="auto"?a(d.options.overlay,d.el).css(d.options.anchor_y):"0px";var f={};f[d.options.anchor_x]=d.options.hover_x;f[d.options.anchor_y]=d.options.hover_y;var e={};e[d.options.anchor_x]=startX;e[d.options.anchor_y]=startY;a(d.el).hover(function(){a(d.options.overlay,d.el).stop().animate(f,d.options.speed)},function(){a(d.options.overlay,d.el).stop().animate(e,d.options.speed)});break}};d.init()};a.omr.mosaic.defaultOptions={animation:"fade",speed:150,opacity:1,preload:0,anchor_x:"left",anchor_y:"bottom",hover_x:"0px",hover_y:"0px",overlay:".mosaic-overlay",backdrop:".mosaic-backdrop"};a.fn.mosaic=function(b){return this.each(function(){(new a.omr.mosaic(this,b))})}})(jQuery);;
(function($){$.tiny=$.tiny||{};$.tiny.scrollbar={options:{axis:'y',wheel:40,scroll:true,size:'auto',sizethumb:'auto'}};$.fn.tinyscrollbar=function(options){var options=$.extend({},$.tiny.scrollbar.options,options);this.each(function(){$(this).data('tsb',new Scrollbar($(this),options));});return this;};$.fn.tinyscrollbar_update=function(sScroll){return $(this).data('tsb').update(sScroll);};function Scrollbar(root,options){var oSelf=this;var oWrapper=root;var oViewport={obj:$('.viewport',root)};var oContent={obj:$('.overview',root)};var oScrollbar={obj:$('.scrollbar',root)};var oTrack={obj:$('.track',oScrollbar.obj)};var oThumb={obj:$('.thumb',oScrollbar.obj)};var sAxis=options.axis=='x',sDirection=sAxis?'left':'top',sSize=sAxis?'Width':'Height';var iScroll,iPosition={start:0,now:0},iMouse={};function initialize(){oSelf.update();setEvents();return oSelf;}
this.update=function(sScroll){oViewport[options.axis]=oViewport.obj[0]['offset'+sSize];oContent[options.axis]=oContent.obj[0]['scroll'+sSize];oContent.ratio=oViewport[options.axis]/oContent[options.axis];oScrollbar.obj.toggleClass('disable',oContent.ratio>=1);oTrack[options.axis]=options.size=='auto'?oViewport[options.axis]:options.size;oThumb[options.axis]=Math.min(oTrack[options.axis],Math.max(0,(options.sizethumb=='auto'?(oTrack[options.axis]*oContent.ratio):options.sizethumb)));oScrollbar.ratio=options.sizethumb=='auto'?(oContent[options.axis]/oTrack[options.axis]):(oContent[options.axis]-oViewport[options.axis])/(oTrack[options.axis]-oThumb[options.axis]);iScroll=(sScroll=='relative'&&oContent.ratio<=1)?Math.min((oContent[options.axis]-oViewport[options.axis]),Math.max(0,iScroll)):0;iScroll=(sScroll=='bottom'&&oContent.ratio<=1)?(oContent[options.axis]-oViewport[options.axis]):isNaN(parseInt(sScroll))?iScroll:parseInt(sScroll);setSize();};function setSize(){oThumb.obj.css(sDirection,iScroll/oScrollbar.ratio);oContent.obj.css(sDirection,-iScroll);iMouse['start']=oThumb.obj.offset()[sDirection];var sCssSize=sSize.toLowerCase();oScrollbar.obj.css(sCssSize,oTrack[options.axis]);oTrack.obj.css(sCssSize,oTrack[options.axis]);oThumb.obj.css(sCssSize,oThumb[options.axis]);};function setEvents(){oThumb.obj.bind('mousedown',start);oThumb.obj[0].ontouchstart=function(oEvent){oEvent.preventDefault();oThumb.obj.unbind('mousedown');start(oEvent.touches[0]);return false;};oTrack.obj.bind('mouseup',drag);if(options.scroll&&this.addEventListener){oWrapper[0].addEventListener('DOMMouseScroll',wheel,false);oWrapper[0].addEventListener('mousewheel',wheel,false);}
else if(options.scroll){oWrapper[0].onmousewheel=wheel;}};function start(oEvent){iMouse.start=sAxis?oEvent.pageX:oEvent.pageY;var oThumbDir=parseInt(oThumb.obj.css(sDirection));iPosition.start=oThumbDir=='auto'?0:oThumbDir;$(document).bind('mousemove',drag);document.ontouchmove=function(oEvent){$(document).unbind('mousemove');drag(oEvent.touches[0]);};$(document).bind('mouseup',end);oThumb.obj.bind('mouseup',end);oThumb.obj[0].ontouchend=document.ontouchend=function(oEvent){$(document).unbind('mouseup');oThumb.obj.unbind('mouseup');end(oEvent.touches[0]);};return false;};function wheel(oEvent){if(!(oContent.ratio>=1)){oEvent=$.event.fix(oEvent||window.event);var iDelta=oEvent.wheelDelta?oEvent.wheelDelta/120:-oEvent.detail/3;iScroll-=iDelta*options.wheel;iScroll=Math.min((oContent[options.axis]-oViewport[options.axis]),Math.max(0,iScroll));oThumb.obj.css(sDirection,iScroll/oScrollbar.ratio);oContent.obj.css(sDirection,-iScroll);oEvent.preventDefault();};};function end(oEvent){$(document).unbind('mousemove',drag);$(document).unbind('mouseup',end);oThumb.obj.unbind('mouseup',end);document.ontouchmove=oThumb.obj[0].ontouchend=document.ontouchend=null;return false;};function drag(oEvent){if(!(oContent.ratio>=1)){iPosition.now=Math.min((oTrack[options.axis]-oThumb[options.axis]),Math.max(0,(iPosition.start+((sAxis?oEvent.pageX:oEvent.pageY)-iMouse.start))));iScroll=iPosition.now*oScrollbar.ratio;oContent.obj.css(sDirection,-iScroll);oThumb.obj.css(sDirection,iPosition.now);}
return false;};return initialize();};})(jQuery);;
/* Browser detect code jquery.client.js */
(function() {

	var BrowserDetect = {
		init: function () {
			this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
			this.version = this.searchVersion(navigator.userAgent)
				|| this.searchVersion(navigator.appVersion)
				|| "an unknown version";
			this.OS = this.searchString(this.dataOS) || "an unknown OS";
		},
		searchString: function (data) {
			for (var i=0;i<data.length;i++)	{
				var dataString = data[i].string;
				var dataProp = data[i].prop;
				this.versionSearchString = data[i].versionSearch || data[i].identity;
				if (dataString) {
					if (dataString.indexOf(data[i].subString) != -1)
						return data[i].identity;
				}
				else if (dataProp)
					return data[i].identity;
			}
		},
		searchVersion: function (dataString) {
			var index = dataString.indexOf(this.versionSearchString);
			if (index == -1) return;
			return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
		},
		dataBrowser: [
			{
				string: navigator.userAgent,
				subString: "Chrome",
				identity: "Chrome"
			},
			{ 	string: navigator.userAgent,
				subString: "OmniWeb",
				versionSearch: "OmniWeb/",
				identity: "OmniWeb"
			},
			{
				string: navigator.vendor,
				subString: "Apple",
				identity: "Safari",
				versionSearch: "Version"
			},
			{
				prop: window.opera,
				identity: "Opera"
			},
			{
				string: navigator.vendor,
				subString: "iCab",
				identity: "iCab"
			},
			{
				string: navigator.vendor,
				subString: "KDE",
				identity: "Konqueror"
			},
			{
				string: navigator.userAgent,
				subString: "Firefox",
				identity: "Firefox"
			},
			{
				string: navigator.vendor,
				subString: "Camino",
				identity: "Camino"
			},
			{		// for newer Netscapes (6+)
				string: navigator.userAgent,
				subString: "Netscape",
				identity: "Netscape"
			},
			{
				string: navigator.userAgent,
				subString: "MSIE",
				identity: "Explorer",
				versionSearch: "MSIE"
			},
			{
				string: navigator.userAgent,
				subString: "Gecko",
				identity: "Mozilla",
				versionSearch: "rv"
			},
			{ 		// for older Netscapes (4-)
				string: navigator.userAgent,
				subString: "Mozilla",
				identity: "Netscape",
				versionSearch: "Mozilla"
			}
		],
		dataOS : [
			{
				string: navigator.platform,
				subString: "Win",
				identity: "Windows"
			},
			{
				string: navigator.platform,
				subString: "Mac",
				identity: "Mac"
			},
			{
				string: navigator.userAgent,
				subString: "iPhone",
				identity: "iPhone/iPod"
		    },
			{
				string: navigator.platform,
				subString: "Linux",
				identity: "Linux"
			}
		]

	};

	BrowserDetect.init();

	window.$.client = { os : BrowserDetect.OS, browser : BrowserDetect.browser, browserversion : BrowserDetect.version };

})();;
/*!
 * Masonry PACKAGED v4.2.0
 * Cascading grid layout library
 * http://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);r.isBoxSizeOuter=s=200==t(o.width),i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"object"==typeof t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var r=i.toDashed(o),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(n&&n.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=this.layout.size,s=-1!=n.indexOf("%")?parseFloat(n)/100*r.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*r.height:parseInt(o,10);s=isNaN(s)?0:s,a=isNaN(a)?0:a,s-=e?r.paddingLeft:r.paddingRight,a-=i?r.paddingTop:r.paddingBottom,this.position.x=s,this.position.y=a},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),r=parseInt(e,10),s=o===this.position.x&&r===this.position.y;if(this.setPosition(t,e),s&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});


/*
Script: TextboxList.js
	Displays a textbox as a combination of boxes an inputs (eg: facebook tokenizer)

	Authors:
		Guillermo Rauch

	Note:
		TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>.
		Purchase to remove this message.
*/

(function($){

$.TextboxList = function(element, _options){

	var original, container, list, current, focused = false, index = [], blurtimer, events = {};
	var options = $.extend(true, {
    prefix: 'textboxlist',
    max: null,
		unique: false,
		uniqueInsensitive: true,
    endEditableBit: true,
		startEditableBit: true,
		hideEditableBits: true,
    inBetweenEditableBits: true,
		keys: {previous: 37, next: 39},
		bitsOptions: {editable: {}, box: {}},
    plugins: {},
		// tip: you can change encode/decode with JSON.stringify and JSON.parse
		encode: function(o){
			return $.grep($.map(o, function(v){
				v = (chk(v[0]) ? v[0] : v[1]);
				return chk(v) ? v.toString().replace(/,/, '') : null;
			}), function(o){ return o != undefined; }).join(',');
		},
		decode: function(o){ return o.split(','); }
  }, _options);

	element = $(element);

	var self = this;
	var init = function(){
		original = element.css('display', 'none').attr('autocomplete', 'off').focus(focusLast);
		container = $('<div class="'+options.prefix+'" />')
			.insertAfter(element)
			.click(function(e){
				if ((e.target == list.get(0) || e.target == container.get(0)) && (!focused || (current && current.toElement().get(0) != list.find(':last-child').get(0)))) focusLast();
			});
		list = $('<ul class="'+ options.prefix +'-bits" />').appendTo(container);
		for (var name in options.plugins) enablePlugin(name, options.plugins[name]);
		afterInit();
	};

	var enablePlugin = function(name, options){
		self.plugins[name] = new $.TextboxList[camelCase(capitalize(name))](self, options);
	};

	var afterInit = function(){
		if (options.endEditableBit) create('editable', null, {tabIndex: original.tabIndex}).inject(list);
		addEvent('bitAdd', update, true);
		addEvent('bitRemove', update, true);
		$(document).click(function(e){
			if (!focused) return;
			if (e.target.className.indexOf(options.prefix) != -1){
				if (e.target == $(container).get(0)) return;
				var parent = $(e.target).parents('div.' + options.prefix);
				if (parent.get(0) == container.get(0)) return;
			}
			blur();
		}).keydown(function(ev){
			if (!focused || !current) return;
			var caret = current.is('editable') ? current.getCaret() : null;
			var value = current.getValue()[1];
			var special = !!$.map(['shift', 'alt', 'meta', 'ctrl'], function(e){ return ev[e]; }).length;
			var custom = special || (current.is('editable') && current.isSelected());
			var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
			switch (ev.which){
				case 8:
					if (current.is('box')){
						evStop();
						return current.remove();
					}
				case options.keys.previous:
					if (current.is('box') || ((caret == 0 || !value.length) && !custom)){
						evStop();
						focusRelative('prev');
					}
					break;
				case 46:
					if (current.is('box')){
						evStop();
						return current.remove();
					}
				case options.keys.next:
					if (current.is('box') || (caret == value.length && !custom)){
						evStop();
						focusRelative('next');
					}
			}
		});
		setValues(options.decode(original.val()));
	};

	var create = function(klass, value, opt){
		if (klass == 'box'){
			if (chk(options.max) && list.children('.' + options.prefix + '-bit-box').length + 1 > options.max) return false;
			if (options.unique && $.inArray(uniqueValue(value), index) != -1) return false;
		}
		return new $.TextboxListBit(klass, value, self, $.extend(true, options.bitsOptions[klass], opt));
	};

	var uniqueValue = function(value){
		return chk(value[0]) ? value[0] : (options.uniqueInsensitive ? value[1].toLowerCase() : value[1]);
	}

	var add = function(plain, id, html, afterEl){
		var b = create('box', [id, plain, html]);
		if (b){
			if (!afterEl || !afterEl.length) afterEl = list.find('.' + options.prefix + '-bit-box').filter(':last');
			b.inject(afterEl.length ? afterEl : list, afterEl.length ? 'after' : 'top');
		}
		return self;
	};

	var focusRelative = function(dir, to){
		var el = getBit(to && $(to).length ? to : current).toElement();
		var b = getBit(el[dir]());
		if (b) b.focus();
		return self;
	};

	var focusLast = function(){
		var lastElement = list.children().filter(':last');
		if (lastElement) getBit(lastElement).focus();
		return self;
	};

	var blur = function(){
		if (! focused) return self;
		if (current) current.blur();
		focused = false;
		return fireEvent('blur');
	};

	var getBit = function(obj){
		return (obj.type && (obj.type == 'editable' || obj.type == 'box')) ? obj : $(obj).data('textboxlist:bit');
	};

	var getValues = function(){
		var values = [];
		list.children().each(function(){
			var bit = getBit(this);
			if (!bit.is('editable')) values.push(bit.getValue());
		});
		return values;
	};

	var setValues = function(values){
		if (!values) return;
		$.each(values, function(i, v){
			if (v) add.apply(self, $.isArray(v) ? [v[1], v[0], v[2]] : [v]);
		});
	};

	var update = function(){
		original.val(options.encode(getValues()));
	};

	var addEvent = function(type, fn){
		if (events[type] == undefined) events[type] = [];
		var exists = false;
		$.each(events[type], function(f){
			if (f === fn){
				exists = true;
				return;
			};
		});
		if (!exists) events[type].push(fn);
		return self;
	};

	var fireEvent = function(type, args, delay){
		if (!events || !events[type]) return self;
		$.each(events[type], function(i, fn){
			(function(){
				args = (args != undefined) ? splat(args) : Array.prototype.slice.call(arguments);
				var returns = function(){
					return fn.apply(self || null, args);
				};
				if (delay) return setTimeout(returns, delay);
				return returns();
			})();
		});
		return self;
	};

	var removeEvent = function(type, fn){
		if (events[type]){
			for (var i = events[type].length; i--; i){
				if (events[type][i] === fn) events[type].splice(i, 1);
			}
		}
		return self;
	};

	var isDuplicate = function(v){
		return $.inArray(uniqueValue(v), index);
	};

	this.onFocus = function(bit){
		if (current) current.blur();
		clearTimeout(blurtimer);
		current = bit;
		container.addClass(options.prefix + '-focus');
		if (!focused){
			focused = true;
			fireEvent('focus', bit);
		}
	};

	this.onAdd = function(bit){
		if (options.unique && bit.is('box')) index.push(uniqueValue(bit.getValue()));
		if (bit.is('box')){
			var prior = getBit(bit.toElement().prev());
			if ((prior && prior.is('box') && options.inBetweenEditableBits) || (!prior && options.startEditableBit)){
				var priorEl = prior && prior.toElement().length ? prior.toElement() : false;
				var b = create('editable').inject(priorEl || list, priorEl ? 'after' : 'top');
				if (options.hideEditableBits) b.hide();
			}
		}
	};

	this.onRemove = function(bit){
		if (!focused) return;
		if (options.unique && bit.is('box')){
			var i = isDuplicate(bit.getValue());
			if (i != -1) index = index.splice(i + 1, 1);
		}
		var prior = getBit(bit.toElement().prev());
		if (prior && prior.is('editable')) prior.remove();
		focusRelative('next', bit);
	};

	this.onBlur = function(bit, all){
		current = null;
		container.removeClass(options.prefix + '-focus');
		blurtimer = setTimeout(blur, all ? 0 : 200);
	};

	this.setOptions = function(opt){
		options = $.extend(true, options, opt);
	};

	this.getOptions = function(){
		return options;
	};

	this.getContainer = function(){
		return container;
	};

	this.isDuplicate = isDuplicate;
	this.addEvent = addEvent;
	this.removeEvent = removeEvent;
	this.fireEvent = fireEvent;
	this.create = create;
	this.add = add;
	this.getValues = getValues;
	this.plugins = [];
	init();
};

$.TextboxListBit = function(type, value, textboxlist, _options){

	var element, bit, prefix, typeprefix, close, hidden, focused = false, name = capitalize(type);
	var options = $.extend(true, type == 'box' ? {
		deleteButton: true
  } : {
		tabIndex: null,
		growing: true,
		growingOptions: {},
		stopEnter: true,
		addOnBlur: false,
		addKeys: [13]
	}, _options);

	this.type = type;
	this.value = value;

	var self = this;
	var init = function(){
		prefix = textboxlist.getOptions().prefix + '-bit';
		typeprefix = prefix + '-' + type;
		bit = $('<li />').addClass(prefix).addClass(typeprefix)
			.data('textboxlist:bit', self)
			.hover(function(){
				bit.addClass(prefix + '-hover').addClass(typeprefix + '-hover');
			}, function(){
				bit.removeClass(prefix + '-hover').removeClass(typeprefix + '-hover');
			});
		if (type == 'box'){
			bit.html(chk(self.value[2]) ? self.value[2] : self.value[1]).click(focus);
			if (options.deleteButton){
				bit.addClass(typeprefix + '-deletable');
				close = $('<a href="#" class="'+ typeprefix +'-deletebutton" />').click(remove).appendTo(bit);
			}
			bit.children().click(function(e){ e.stopPropagation(); e.preventDefault(); });
		} else {
			element = $('<input type="text" class="'+ typeprefix +'-input" autocomplete="off" />').val(self.value ? self.value[1] : '').appendTo(bit);
			if (chk(options.tabIndex)) element.tabIndex = options.tabIndex;
			if (options.growing) new $.GrowingInput(element, options.growingOptions);
			element.focus(function(){ focus(true); }).blur(function(){
				blur(true);
				if (options.addOnBlur) toBox();
			});
			if (options.addKeys || options.stopEnter){
				element.keydown(function(ev){
					if (!focused) return;
					var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
					if (options.stopEnter && ev.which === 13) evStop();
					if ($.inArray(ev.which, splat(options.addKeys)) != -1){
						evStop();
						toBox();
					}
				});
			}
		}
	};

	var inject = function(el, where){
		switch(where || 'bottom'){
			case 'top': bit.prependTo(el); break;
			case 'bottom': bit.appendTo(el); break;
			case 'before': bit.insertBefore(el); break;
			case 'after': bit.insertAfter(el); break;
		}
		textboxlist.onAdd(self);
		return fireBitEvent('add');
	};

	var focus = function(noReal){
		if (focused) return self;
		show();
		focused = true;
		textboxlist.onFocus(self);
		bit.addClass(prefix + '-focus').addClass(prefix + '-' + type + '-focus');
		fireBitEvent('focus');
		if (type == 'editable' && !noReal) element.focus();
		return self;
	};

	var blur = function(noReal){
		if (!focused) return self;
		focused = false;
		textboxlist.onBlur(self);
		bit.removeClass(prefix + '-focus').removeClass(prefix + '-' + type + '-focus');
		fireBitEvent('blur');
		if (type == 'editable'){
			if (!noReal) element.blur();
			if (hidden && !element.val().length) hide();
		}
		return self;
	};

	var remove = function(){
		blur();
		textboxlist.onRemove(self);
		bit.remove();
		return fireBitEvent('remove');
	};

	var show = function(){
		bit.css('display', 'block');
		return self;
	};

	var hide = function(){
		bit.css('display', 'none');
		hidden = true;
		return self;
	};

	var fireBitEvent = function(type){
		type = capitalize(type);
		textboxlist.fireEvent('bit' + type, self).fireEvent('bit' + name + type, self);
		return self;
	};

  this.is = function(t){
    return type == t;
  };

	this.setValue = function(v){
		if (type == 'editable'){
			element.val(chk(v[0]) ? v[0] : v[1]);
			if (options.growing) element.data('growing').resize();
		} else value = v;
		return self;
	};

 	this.getValue = function(){
		return type == 'editable' ? [null, element.val(), null] : value;
	};

	if (type == 'editable'){
		this.getCaret = function(){
 			var el = element.get(0);
			if (el.createTextRange){
		    var r = document.selection.createRange().duplicate();
		  	r.moveEnd('character', el.value.length);
		  	if (r.text === '') return el.value.length;
		  	return el.value.lastIndexOf(r.text);
		  } else return el.selectionStart;
		};

		this.getCaretEnd = function(){
 			var el = element.get(0);
			if (el.createTextRange){
				var r = document.selection.createRange().duplicate();
				r.moveStart('character', -el.value.length);
				return r.text.length;
			} else return el.selectionEnd;
		};

		this.isSelected = function(){
			return focused && (self.getCaret() !== self.getCaretEnd());
		};

		var toBox = function(){
			var value = self.getValue();
			var b = textboxlist.create('box', value);
			if (b){
				b.inject(bit, 'before');
				self.setValue([null, '', null]);
				return b;
			}
			return null;
		};

		this.toBox = toBox;
	}

	this.toElement = function(){
		return bit;
	};

	this.focus = focus;
	this.blur = blur;
	this.remove = remove;
	this.inject = inject;
	this.show = show;
	this.hide = hide;
	this.fireBitEvent = fireBitEvent;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var splat = function(a){ return $.isArray(a) ? a : [a]; };
var camelCase = function(str){ return str.replace(/-\D/g, function(match){ return match.charAt(1).toUpperCase(); }); };
var capitalize = function(str){ return str.replace(/\b[a-z]/g, function(A){ return A.toUpperCase(); }); };

$.fn.extend({

	textboxlist: function(options){
		return this.each(function(){
			new $.TextboxList(this, options);
		});
	}

});

})(jQuery);;
/*
Script: TextboxList.Autocomplete.js
	TextboxList Autocomplete plugin

	Authors:
		Guillermo Rauch

	Note:
		TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>
		Purchase to remove this message.
*/

(function(){

$.TextboxList.Autocomplete = function(textboxlist, _options){

  var index, prefix, method, container, list, values = [], searchValues = [], results = [], placeholder = false, current, currentInput, hidetimer, doAdd, currentSearch, currentRequest;
	var options = $.extend(true, {
		minLength: 1,
		maxResults: 10,
		insensitive: true,
		highlight: true,
		highlightSelector: null,
		mouseInteraction: true,
		onlyFromValues: false,
		queryRemote: false,
    remote: {
			url: '',
			param: 'search',
			extraParams: {},
			loadPlaceholder: 'Please wait...'
    },
		method: 'standard',
		placeholder: 'Type to receive suggestions'
	}, _options);

	var init = function(){
		textboxlist.addEvent('bitEditableAdd', setupBit)
			.addEvent('bitEditableFocus', search)
			.addEvent('bitEditableBlur', hide)
			.setOptions({bitsOptions: {editable: {addKeys: false, stopEnter: false}}});

		textboxlist.setOptions({bitsOptions: {editable: {addOnBlur: false}}});
		prefix = textboxlist.getOptions().prefix + '-autocomplete';
		method = $.TextboxList.Autocomplete.Methods[options.method];
		container = $('<div class="'+ prefix +'" />').width(textboxlist.getContainer().width()).appendTo(textboxlist.getContainer());
		if (chk(options.placeholder)) placeholder = $('<div class="'+ prefix +'-placeholder" />').html(options.placeholder).appendTo(container);
		list = $('<ul class="'+ prefix +'-results" />').appendTo(container).click(function(ev){
			ev.stopPropagation(); ev.preventDefault();
		});
	};

	var setupBit = function(bit){
		bit.toElement().keydown(navigate).keyup(function(){ search(); });
	};

	var arc_encode = function(s){
                return encodeURIComponent(encodeURIComponent(s).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A"));
	};

	var search = function(bit){
		if (bit) currentInput = bit;
		if (!options.queryRemote && !values.length) return;
		var search = $.trim(currentInput.getValue()[1]);
		if (search.length < options.minLength) showPlaceholder();
		if (search == currentSearch) return;
		currentSearch = search;
		list.css('display', 'none');
		if (search.length < options.minLength) return;
		if (options.queryRemote){
			if (searchValues[search]){
				values = searchValues[search];
			} else {
				var data = options.remote.extraParams;
				data[options.remote.param] = search;
				if (currentRequest) currentRequest.abort();

				var arc_path = options.remote.url;

				$.each(data, function(key, param) {
					data[key] = typeof param == "function" ? param() : param;

					arc_path += '/'+key+'/'+ arc_encode(data[key]);

				});

				currentRequest = $.ajax({
					url: arc_path,
//					data: data,
					dataType: 'json',
					success: function(r){
						searchValues[search] = r;
						values = r;
						showResults(search);
					}
				});
			}
		}
		showResults(search);
	};

	var showResults = function(search){
		var results = method.filter(values, search, options.insensitive, options.maxResults);
		if (textboxlist.getOptions().unique){
			results = $.grep(results, function(v){ return textboxlist.isDuplicate(v) == -1; });
		}
		hidePlaceholder();
		if (!results.length) return;
		blur();
		list.empty().css('display', 'block');
		$.each(results, function(i, r){ addResult(r, search); });
		if (options.onlyFromValues) focusFirst();
		results = results;
	};

	var addResult = function(r, searched){
		var element = $('<li class="'+ prefix +'-result" />').html(r[3] ? r[3] : r[1]).data('textboxlist:auto:value', r);
		element.appendTo(list);
		if (options.highlight) $(options.highlightSelector ? element.find(options.highlightSelector) : element).each(function(){
			if ($(this).html()) method.highlight($(this), searched, options.insensitive, prefix + '-highlight');
		});
		if (options.mouseInteraction){
			element.css('cursor', 'pointer').hover(function(){ focus(element); }).mousedown(function(ev){
				ev.stopPropagation();
				ev.preventDefault();
				clearTimeout(hidetimer);
				doAdd = true;
			}).mouseup(function(){
				if (doAdd){
					addCurrent();
					currentInput.focus();
					search();
					doAdd = false;
				}
			});
			if (!options.onlyFromValues) element.mouseleave(function(){ if (current && (current.get(0) == element.get(0))) blur(); });
		}
	};

	var hide = function(){
		hidetimer = setTimeout(function(){
			hidePlaceholder();
			list.css('display', 'none');
			currentSearch = null;
		}, 0);
	};

	var showPlaceholder = function(){
		if (placeholder) placeholder.css('display', 'block');
	};

	var hidePlaceholder = function(){
		if (placeholder) placeholder.css('display', 'none');
	};

	var focus = function(element){
		if (!element || !element.length) return;
		blur();
		current = element.addClass(prefix + '-result-focus');
	};

	var blur = function(){
		if (current && current.length){
			current.removeClass(prefix + '-result-focus');
			current = null;
		}
	};

	var focusFirst = function(){
		return focus(list.find(':first'));
	};

	var focusRelative = function(dir){
		if (!current || !current.length) return self;
		return focus(current[dir]());
	};

	var addCurrent = function(){
		var value = current.data('textboxlist:auto:value');
		var b = textboxlist.create('box', value.slice(0, 3));
		if (b){
			b.autoValue = value;
			if ($.isArray(index)) index.push(value);
			currentInput.setValue([null, '', null]);
			b.inject(currentInput.toElement(), 'before');
		}
		blur();
		return self;
	};

	var navigate = function(ev){

		var evStop = function(){ ev.stopPropagation(); ev.preventDefault(); };
		switch (ev.which){
			case 38:
				evStop();
				(!options.onlyFromValues && current && current.get(0) === list.find(':first').get(0)) ? blur() : focusRelative('prev');
				break;
			case 40:
				evStop();
				(current && current.length) ? focusRelative('next') : focusFirst();
				break;
			case 188:
			case 13: //ARC
				evStop();
				if (current && current.length) addCurrent();
				else if (!options.onlyFromValues){
					var value = currentInput.getValue();
					var b = textboxlist.create('box', value);
					if (b){
						b.inject(currentInput.toElement(), 'before');
						currentInput.setValue([null, '', null]);
					}
				}
		}
	};

	this.setValues = function(v){
		values = v;
	};

	init();
};

$.TextboxList.Autocomplete.Methods = {

	standard: {
		filter: function(values, search, insensitive, max){
			var newvals = [], regexp = new RegExp('\\b' + escapeRegExp(search), insensitive ? 'i' : '');
			for (var i = 0; i < values.length; i++){
				if (newvals.length === max) break;
				if (regexp.test(values[i][1])) newvals.push(values[i]);
			}
			return newvals;
		},

		highlight: function(element, search, insensitive, klass){
			var regex = new RegExp('(<[^>]*>)|(\\b'+ escapeRegExp(search) +')', insensitive ? 'ig' : 'g');
			return element.html(element.html().replace(regex, function(a, b, c){
				return (a.charAt(0) == '<') ? a : '<strong class="'+ klass +'">' + c + '</strong>';
			}));
		}
	}

};

var chk = function(v){ return !!(v || v === 0); };
var escapeRegExp = function(str){ return str.replace(/([-.*+?^${}()|[\]\/\\])/g, "\\$1"); };

})();
;
/*
Script: TextboxList.Autocomplete.Binary.js
	TextboxList Autocomplete binary search extension

	Authors:
		Guillermo Rauch

	Note:
		TextboxList is not priceless for commercial use. See <http://devthought.com/projects/jquery/textboxlist/>
		Purchase to remove this message.
*/

$.TextboxList.Autocomplete.Methods.binary = {
	filter: function(values, search, insensitive, max){
		var method = insensitive ? 'toLowerCase' : 'toString', low = 0, high = values.length - 1, lastTry;
		search = search[method]();
		while (high >= low){
			var mid = parseInt((low + high) / 2);
			var curr = values[mid][1].substr(0, search.length)[method]();
			var result = ((search == curr) ? 0 : ((search > curr) ? 1 : -1));
			if (result < 0) { high = mid - 1; continue; }
			if (result > 0) { low = mid + 1; continue; }
			if (result === 0) break;
		}
		if (high < low) return [];
		var newvalues = [values[mid]], checkNext = true, checkPrev = true, v1, v2;
		for (var i = 1; i <= values.length - mid; i++){
			if (newvalues.length === max) break;
			if (checkNext) v1 = values[mid + i] ? values[mid + i][1].substr(0, search.length)[method]() : false;
			if (checkPrev) v2 = values[mid - i] ? values[mid - i][1].substr(0, search.length)[method]() : false;
			checkNext = checkPrev = false;
			if (v1 === search) { newvalues.push(values[mid + i]); checkNext = true; }
			if (v2 === search) { newvalues.unshift(values[mid - i]); checkPrev = true; }
			if (! (checkNext || checkPrev)) break;
		}
		return newvalues;
	},

	highlight: function(element, search, insensitive, klass){
		var regex = new RegExp('(<[^>]*>)|(\\b'+ search.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1") +')', insensitive ? 'ig' : 'g');
		return element.html(element.html().replace(regex, function(a, b, c, d){
			return (a.charAt(0) == '<') ? a : '<strong class="'+ klass +'">' + c + '</strong>';
		}));
	}
};

/*
Script: GrowingInput.js
	Alters the size of an input depending on its content

	License:
		MIT-style license.

	Authors:
		Guillermo Rauch
*/

(function($){

$.GrowingInput = function(element, options){

	var value, lastValue, calc;

	options = $.extend({
		min: 0,
		max: null,
		startWidth: 15,
		correction: 15
	}, options);

	element = $(element).data('growing', this);

	var self = this;
	var init = function(){
		calc = $('<span></span>').css({
			'float': 'left',
			'display': 'inline-block',
			'position': 'absolute',
			'left': -1000
		}).insertAfter(element);
		$.each(['font-size', 'font-family', 'padding-left', 'padding-top', 'padding-bottom',
		 'padding-right', 'border-left', 'border-right', 'border-top', 'border-bottom',
		 'word-spacing', 'letter-spacing', 'text-indent', 'text-transform'], function(i, p){
				calc.css(p, element.css(p));
		});
		element.blur(resize).keyup(resize).keydown(resize).keypress(resize);
		resize();
	};

	var calculate = function(chars){
		calc.text(chars);
		var width = calc.width();
		return (width ? width : options.startWidth) + options.correction;
	};

	var resize = function(){
		lastValue = value;
		value = element.val();
		var retValue = value;
		if(chk(options.min) && value.length < options.min){
			if(chk(lastValue) && (lastValue.length <= options.min)) return;
			retValue = str_pad(value, options.min, '-');
		} else if(chk(options.max) && value.length > options.max){
			if(chk(lastValue) && (lastValue.length >= options.max)) return;
			retValue = value.substr(0, options.max);
		}
		element.width(calculate(retValue));
		return self;
	};

	this.resize = resize;
	init();
};

var chk = function(v){ return !!(v || v === 0); };
var str_repeat = function(str, times){ return new Array(times + 1).join(str); };
var str_pad = function(self, length, str, dir){
	if (self.length >= length) return this;
	str = str || ' ';
	var pad = str_repeat(str, length - self.length).substr(0, length - self.length);
	if (!dir || dir == 'right') return self + pad;
	if (dir == 'left') return pad + self;
	return pad.substr(0, (pad.length / 2).floor()) + self + pad.substr(0, (pad.length / 2).ceil());
};

})(jQuery);;

/*!
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( typeof define == 'function' && define.amd ) {
    // AMD - RequireJS
    define( 'ev-emitter/ev-emitter',factory );
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : this, function() {



function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var i = 0;
  var listener = listeners[i];
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  while ( listener ) {
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
    // get next listener
    i += isOnce ? 0 : 1;
    listener = listeners[i];
  }

  return this;
};

return EvEmitter;

}));

/*!
 * imagesLoaded v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( typeof define == 'function' && define.amd ) {
    // AMD
    define( [
      'ev-emitter/ev-emitter'
    ], function( EvEmitter ) {
      return factory( window, EvEmitter );
    });
  } else if ( typeof module == 'object' && module.exports ) {
    // CommonJS
    module.exports = factory(
      window,
      require('ev-emitter')
    );
  } else {
    // browser global
    window.imagesLoaded = factory(
      window,
      window.EvEmitter
    );
  }

})( window,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {



var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

// turn element or nodeList into an array
function makeArray( obj ) {
  var ary = [];
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    ary = obj;
  } else if ( typeof obj.length == 'number' ) {
    // convert nodeList to array
    for ( var i=0; i < obj.length; i++ ) {
      ary.push( obj[i] );
    }
  } else {
    // array of single index
    ary.push( obj );
  }
  return ary;
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  if ( typeof elem == 'string' ) {
    elem = document.querySelectorAll( elem );
  }

  this.elements = makeArray( elem );
  this.options = extend( {}, this.options );

  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( function() {
    this.check();
  }.bind( this ));
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  return this.img.complete && this.img.naturalWidth !== undefined;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});



/*
    A simple jQuery modal (http://github.com/kylefox/jquery-modal)
    Version 0.8.0
*/
!function(o){"object"==typeof module&&"object"==typeof module.exports?o(require("jquery"),window,document):o(jQuery,window,document)}(function(o,t,e,i){var s=[],l=function(){return s.length?s[s.length-1]:null},n=function(){var o,t=!1;for(o=s.length-1;o>=0;o--)s[o].$blocker&&(s[o].$blocker.toggleClass("current",!t).toggleClass("behind",t),t=!0)};o.modal=function(t,e){var i,n;if(this.$body=o("body"),this.options=o.extend({},o.modal.defaults,e),this.options.doFade=!isNaN(parseInt(this.options.fadeDuration,10)),this.$blocker=null,this.options.closeExisting)for(;o.modal.isActive();)o.modal.close();if(s.push(this),t.is("a"))if(n=t.attr("href"),/^#/.test(n)){if(this.$elm=o(n),1!==this.$elm.length)return null;this.$body.append(this.$elm),this.open()}else this.$elm=o("<div>"),this.$body.append(this.$elm),i=function(o,t){t.elm.remove()},this.showSpinner(),t.trigger(o.modal.AJAX_SEND),o.get(n).done(function(e){if(o.modal.isActive()){t.trigger(o.modal.AJAX_SUCCESS);var s=l();s.$elm.empty().append(e).on(o.modal.CLOSE,i),s.hideSpinner(),s.open(),t.trigger(o.modal.AJAX_COMPLETE)}}).fail(function(){t.trigger(o.modal.AJAX_FAIL);var e=l();e.hideSpinner(),s.pop(),t.trigger(o.modal.AJAX_COMPLETE)});else this.$elm=t,this.$body.append(this.$elm),this.open()},o.modal.prototype={constructor:o.modal,open:function(){var t=this;this.block(),this.options.doFade?setTimeout(function(){t.show()},this.options.fadeDuration*this.options.fadeDelay):this.show(),o(e).off("keydown.modal").on("keydown.modal",function(o){var t=l();27==o.which&&t.options.escapeClose&&t.close()}),this.options.clickClose&&this.$blocker.click(function(t){t.target==this&&o.modal.close()})},close:function(){s.pop(),this.unblock(),this.hide(),o.modal.isActive()||o(e).off("keydown.modal")},block:function(){this.$elm.trigger(o.modal.BEFORE_BLOCK,[this._ctx()]),this.$body.css("overflow","hidden"),this.$blocker=o('<div class="jquery-modal blocker current"></div>').appendTo(this.$body),n(),this.options.doFade&&this.$blocker.css("opacity",0).animate({opacity:1},this.options.fadeDuration),this.$elm.trigger(o.modal.BLOCK,[this._ctx()])},unblock:function(t){!t&&this.options.doFade?this.$blocker.fadeOut(this.options.fadeDuration,this.unblock.bind(this,!0)):(this.$blocker.children().appendTo(this.$body),this.$blocker.remove(),this.$blocker=null,n(),o.modal.isActive()||this.$body.css("overflow",""))},show:function(){this.$elm.trigger(o.modal.BEFORE_OPEN,[this._ctx()]),this.options.showClose&&(this.closeButton=o('<a href="#close-modal" rel="modal:close" class="close-modal '+this.options.closeClass+'">'+this.options.closeText+"</a>"),this.$elm.append(this.closeButton)),this.$elm.addClass(this.options.modalClass).appendTo(this.$blocker),this.options.doFade?this.$elm.css("opacity",0).show().animate({opacity:1},this.options.fadeDuration):this.$elm.show(),this.$elm.trigger(o.modal.OPEN,[this._ctx()])},hide:function(){this.$elm.trigger(o.modal.BEFORE_CLOSE,[this._ctx()]),this.closeButton&&this.closeButton.remove();var t=this;this.options.doFade?this.$elm.fadeOut(this.options.fadeDuration,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}):this.$elm.hide(0,function(){t.$elm.trigger(o.modal.AFTER_CLOSE,[t._ctx()])}),this.$elm.trigger(o.modal.CLOSE,[this._ctx()])},showSpinner:function(){this.options.showSpinner&&(this.spinner=this.spinner||o('<div class="'+this.options.modalClass+'-spinner"></div>').append(this.options.spinnerHtml),this.$body.append(this.spinner),this.spinner.show())},hideSpinner:function(){this.spinner&&this.spinner.remove()},_ctx:function(){return{elm:this.$elm,$blocker:this.$blocker,options:this.options}}},o.modal.close=function(t){if(o.modal.isActive()){t&&t.preventDefault();var e=l();return e.close(),e.$elm}},o.modal.isActive=function(){return s.length>0},o.modal.getCurrent=l,o.modal.defaults={closeExisting:!0,escapeClose:!0,clickClose:!0,closeText:"Close",closeClass:"",modalClass:"modal",spinnerHtml:null,showSpinner:!0,showClose:!0,fadeDuration:null,fadeDelay:1},o.modal.BEFORE_BLOCK="modal:before-block",o.modal.BLOCK="modal:block",o.modal.BEFORE_OPEN="modal:before-open",o.modal.OPEN="modal:open",o.modal.BEFORE_CLOSE="modal:before-close",o.modal.CLOSE="modal:close",o.modal.AFTER_CLOSE="modal:after-close",o.modal.AJAX_SEND="modal:ajax:send",o.modal.AJAX_SUCCESS="modal:ajax:success",o.modal.AJAX_FAIL="modal:ajax:fail",o.modal.AJAX_COMPLETE="modal:ajax:complete",o.fn.modal=function(t){return 1===this.length&&new o.modal(this,t),this},o(e).on("click.modal",'a[rel~="modal:close"]',o.modal.close),o(e).on("click.modal",'a[rel~="modal:open"]',function(t){t.preventDefault(),o(this).modal()})});


/*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipe=b()}(this,function(){"use strict";var a=function(a,b,c,d){var e={features:null,bind:function(a,b,c,d){var e=(d?"remove":"add")+"EventListener";b=b.split(" ");for(var f=0;f<b.length;f++)b[f]&&a[e](b[f],c,!1)},isArray:function(a){return a instanceof Array},createEl:function(a,b){var c=document.createElement(b||"div");return a&&(c.className=a),c},getScrollY:function(){var a=window.pageYOffset;return void 0!==a?a:document.documentElement.scrollTop},unbind:function(a,b,c){e.bind(a,b,c,!0)},removeClass:function(a,b){var c=new RegExp("(\\s|^)"+b+"(\\s|$)");a.className=a.className.replace(c," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(a,b){e.hasClass(a,b)||(a.className+=(a.className?" ":"")+b)},hasClass:function(a,b){return a.className&&new RegExp("(^|\\s)"+b+"(\\s|$)").test(a.className)},getChildByClass:function(a,b){for(var c=a.firstChild;c;){if(e.hasClass(c,b))return c;c=c.nextSibling}},arraySearch:function(a,b,c){for(var d=a.length;d--;)if(a[d][c]===b)return d;return-1},extend:function(a,b,c){for(var d in b)if(b.hasOwnProperty(d)){if(c&&a.hasOwnProperty(d))continue;a[d]=b[d]}},easing:{sine:{out:function(a){return Math.sin(a*(Math.PI/2))},inOut:function(a){return-(Math.cos(Math.PI*a)-1)/2}},cubic:{out:function(a){return--a*a*a+1}}},detectFeatures:function(){if(e.features)return e.features;var a=e.createEl(),b=a.style,c="",d={};if(d.oldIE=document.all&&!document.addEventListener,d.touch="ontouchstart"in window,window.requestAnimationFrame&&(d.raf=window.requestAnimationFrame,d.caf=window.cancelAnimationFrame),d.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,!d.pointerEvent){var f=navigator.userAgent;if(/iP(hone|od)/.test(navigator.platform)){var g=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);g&&g.length>0&&(g=parseInt(g[1],10),g>=1&&g<8&&(d.isOldIOSPhone=!0))}var h=f.match(/Android\s([0-9\.]*)/),i=h?h[1]:0;i=parseFloat(i),i>=1&&(i<4.4&&(d.isOldAndroid=!0),d.androidVersion=i),d.isMobileOpera=/opera mini|opera mobi/i.test(f)}for(var j,k,l=["transform","perspective","animationName"],m=["","webkit","Moz","ms","O"],n=0;n<4;n++){c=m[n];for(var o=0;o<3;o++)j=l[o],k=c+(c?j.charAt(0).toUpperCase()+j.slice(1):j),!d[j]&&k in b&&(d[j]=k);c&&!d.raf&&(c=c.toLowerCase(),d.raf=window[c+"RequestAnimationFrame"],d.raf&&(d.caf=window[c+"CancelAnimationFrame"]||window[c+"CancelRequestAnimationFrame"]))}if(!d.raf){var p=0;d.raf=function(a){var b=(new Date).getTime(),c=Math.max(0,16-(b-p)),d=window.setTimeout(function(){a(b+c)},c);return p=b+c,d},d.caf=function(a){clearTimeout(a)}}return d.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.features=d,d}};e.detectFeatures(),e.features.oldIE&&(e.bind=function(a,b,c,d){b=b.split(" ");for(var e,f=(d?"detach":"attach")+"Event",g=function(){c.handleEvent.call(c)},h=0;h<b.length;h++)if(e=b[h])if("object"==typeof c&&c.handleEvent){if(d){if(!c["oldIE"+e])return!1}else c["oldIE"+e]=g;a[f]("on"+e,c["oldIE"+e])}else a[f]("on"+e,c)});var f=this,g=25,h=3,i={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(a){return"A"===a.tagName},getDoubleTapZoom:function(a,b){return a?1:b.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};e.extend(i,d);var j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma=function(){return{x:0,y:0}},na=ma(),oa=ma(),pa=ma(),qa={},ra=0,sa={},ta=ma(),ua=0,va=!0,wa=[],xa={},ya=!1,za=function(a,b){e.extend(f,b.publicMethods),wa.push(a)},Aa=function(a){var b=ac();return a>b-1?a-b:a<0?b+a:a},Ba={},Ca=function(a,b){return Ba[a]||(Ba[a]=[]),Ba[a].push(b)},Da=function(a){var b=Ba[a];if(b){var c=Array.prototype.slice.call(arguments);c.shift();for(var d=0;d<b.length;d++)b[d].apply(f,c)}},Ea=function(){return(new Date).getTime()},Fa=function(a){ja=a,f.bg.style.opacity=a*i.bgOpacity},Ga=function(a,b,c,d,e){(!ya||e&&e!==f.currItem)&&(d/=e?e.fitRatio:f.currItem.fitRatio),a[E]=u+b+"px, "+c+"px"+v+" scale("+d+")"},Ha=function(a){ea&&(a&&(s>f.currItem.fitRatio?ya||(mc(f.currItem,!1,!0),ya=!0):ya&&(mc(f.currItem),ya=!1)),Ga(ea,pa.x,pa.y,s))},Ia=function(a){a.container&&Ga(a.container.style,a.initialPosition.x,a.initialPosition.y,a.initialZoomLevel,a)},Ja=function(a,b){b[E]=u+a+"px, 0px"+v},Ka=function(a,b){if(!i.loop&&b){var c=m+(ta.x*ra-a)/ta.x,d=Math.round(a-tb.x);(c<0&&d>0||c>=ac()-1&&d<0)&&(a=tb.x+d*i.mainScrollEndFriction)}tb.x=a,Ja(a,n)},La=function(a,b){var c=ub[a]-sa[a];return oa[a]+na[a]+c-c*(b/t)},Ma=function(a,b){a.x=b.x,a.y=b.y,b.id&&(a.id=b.id)},Na=function(a){a.x=Math.round(a.x),a.y=Math.round(a.y)},Oa=null,Pa=function(){Oa&&(e.unbind(document,"mousemove",Pa),e.addClass(a,"pswp--has_mouse"),i.mouseUsed=!0,Da("mouseUsed")),Oa=setTimeout(function(){Oa=null},100)},Qa=function(){e.bind(document,"keydown",f),N.transform&&e.bind(f.scrollWrap,"click",f),i.mouseUsed||e.bind(document,"mousemove",Pa),e.bind(window,"resize scroll orientationchange",f),Da("bindEvents")},Ra=function(){e.unbind(window,"resize scroll orientationchange",f),e.unbind(window,"scroll",r.scroll),e.unbind(document,"keydown",f),e.unbind(document,"mousemove",Pa),N.transform&&e.unbind(f.scrollWrap,"click",f),V&&e.unbind(window,p,f),clearTimeout(O),Da("unbindEvents")},Sa=function(a,b){var c=ic(f.currItem,qa,a);return b&&(da=c),c},Ta=function(a){return a||(a=f.currItem),a.initialZoomLevel},Ua=function(a){return a||(a=f.currItem),a.w>0?i.maxSpreadZoom:1},Va=function(a,b,c,d){return d===f.currItem.initialZoomLevel?(c[a]=f.currItem.initialPosition[a],!0):(c[a]=La(a,d),c[a]>b.min[a]?(c[a]=b.min[a],!0):c[a]<b.max[a]&&(c[a]=b.max[a],!0))},Wa=function(){if(E){var b=N.perspective&&!G;return u="translate"+(b?"3d(":"("),void(v=N.perspective?", 0px)":")")}E="left",e.addClass(a,"pswp--ie"),Ja=function(a,b){b.left=a+"px"},Ia=function(a){var b=a.fitRatio>1?1:a.fitRatio,c=a.container.style,d=b*a.w,e=b*a.h;c.width=d+"px",c.height=e+"px",c.left=a.initialPosition.x+"px",c.top=a.initialPosition.y+"px"},Ha=function(){if(ea){var a=ea,b=f.currItem,c=b.fitRatio>1?1:b.fitRatio,d=c*b.w,e=c*b.h;a.width=d+"px",a.height=e+"px",a.left=pa.x+"px",a.top=pa.y+"px"}}},Xa=function(a){var b="";i.escKey&&27===a.keyCode?b="close":i.arrowKeys&&(37===a.keyCode?b="prev":39===a.keyCode&&(b="next")),b&&(a.ctrlKey||a.altKey||a.shiftKey||a.metaKey||(a.preventDefault?a.preventDefault():a.returnValue=!1,f[b]()))},Ya=function(a){a&&(Y||X||fa||T)&&(a.preventDefault(),a.stopPropagation())},Za=function(){f.setScrollOffset(0,e.getScrollY())},$a={},_a=0,ab=function(a){$a[a]&&($a[a].raf&&I($a[a].raf),_a--,delete $a[a])},bb=function(a){$a[a]&&ab(a),$a[a]||(_a++,$a[a]={})},cb=function(){for(var a in $a)$a.hasOwnProperty(a)&&ab(a)},db=function(a,b,c,d,e,f,g){var h,i=Ea();bb(a);var j=function(){if($a[a]){if(h=Ea()-i,h>=d)return ab(a),f(c),void(g&&g());f((c-b)*e(h/d)+b),$a[a].raf=H(j)}};j()},eb={shout:Da,listen:Ca,viewportSize:qa,options:i,isMainScrollAnimating:function(){return fa},getZoomLevel:function(){return s},getCurrentIndex:function(){return m},isDragging:function(){return V},isZooming:function(){return aa},setScrollOffset:function(a,b){sa.x=a,M=sa.y=b,Da("updateScrollOffset",sa)},applyZoomPan:function(a,b,c,d){pa.x=b,pa.y=c,s=a,Ha(d)},init:function(){if(!j&&!k){var c;f.framework=e,f.template=a,f.bg=e.getChildByClass(a,"pswp__bg"),J=a.className,j=!0,N=e.detectFeatures(),H=N.raf,I=N.caf,E=N.transform,L=N.oldIE,f.scrollWrap=e.getChildByClass(a,"pswp__scroll-wrap"),f.container=e.getChildByClass(f.scrollWrap,"pswp__container"),n=f.container.style,f.itemHolders=y=[{el:f.container.children[0],wrap:0,index:-1},{el:f.container.children[1],wrap:0,index:-1},{el:f.container.children[2],wrap:0,index:-1}],y[0].el.style.display=y[2].el.style.display="none",Wa(),r={resize:f.updateSize,orientationchange:function(){clearTimeout(O),O=setTimeout(function(){qa.x!==f.scrollWrap.clientWidth&&f.updateSize()},500)},scroll:Za,keydown:Xa,click:Ya};var d=N.isOldIOSPhone||N.isOldAndroid||N.isMobileOpera;for(N.animationName&&N.transform&&!d||(i.showAnimationDuration=i.hideAnimationDuration=0),c=0;c<wa.length;c++)f["init"+wa[c]]();if(b){var g=f.ui=new b(f,e);g.init()}Da("firstUpdate"),m=m||i.index||0,(isNaN(m)||m<0||m>=ac())&&(m=0),f.currItem=_b(m),(N.isOldIOSPhone||N.isOldAndroid)&&(va=!1),a.setAttribute("aria-hidden","false"),i.modal&&(va?a.style.position="fixed":(a.style.position="absolute",a.style.top=e.getScrollY()+"px")),void 0===M&&(Da("initialLayout"),M=K=e.getScrollY());var l="pswp--open ";for(i.mainClass&&(l+=i.mainClass+" "),i.showHideOpacity&&(l+="pswp--animate_opacity "),l+=G?"pswp--touch":"pswp--notouch",l+=N.animationName?" pswp--css_animation":"",l+=N.svg?" pswp--svg":"",e.addClass(a,l),f.updateSize(),o=-1,ua=null,c=0;c<h;c++)Ja((c+o)*ta.x,y[c].el.style);L||e.bind(f.scrollWrap,q,f),Ca("initialZoomInEnd",function(){f.setContent(y[0],m-1),f.setContent(y[2],m+1),y[0].el.style.display=y[2].el.style.display="block",i.focus&&a.focus(),Qa()}),f.setContent(y[1],m),f.updateCurrItem(),Da("afterInit"),va||(w=setInterval(function(){_a||V||aa||s!==f.currItem.initialZoomLevel||f.updateSize()},1e3)),e.addClass(a,"pswp--visible")}},close:function(){j&&(j=!1,k=!0,Da("close"),Ra(),cc(f.currItem,null,!0,f.destroy))},destroy:function(){Da("destroy"),Xb&&clearTimeout(Xb),a.setAttribute("aria-hidden","true"),a.className=J,w&&clearInterval(w),e.unbind(f.scrollWrap,q,f),e.unbind(window,"scroll",f),zb(),cb(),Ba=null},panTo:function(a,b,c){c||(a>da.min.x?a=da.min.x:a<da.max.x&&(a=da.max.x),b>da.min.y?b=da.min.y:b<da.max.y&&(b=da.max.y)),pa.x=a,pa.y=b,Ha()},handleEvent:function(a){a=a||window.event,r[a.type]&&r[a.type](a)},goTo:function(a){a=Aa(a);var b=a-m;ua=b,m=a,f.currItem=_b(m),ra-=b,Ka(ta.x*ra),cb(),fa=!1,f.updateCurrItem()},next:function(){f.goTo(m+1)},prev:function(){f.goTo(m-1)},updateCurrZoomItem:function(a){if(a&&Da("beforeChange",0),y[1].el.children.length){var b=y[1].el.children[0];ea=e.hasClass(b,"pswp__zoom-wrap")?b.style:null}else ea=null;da=f.currItem.bounds,t=s=f.currItem.initialZoomLevel,pa.x=da.center.x,pa.y=da.center.y,a&&Da("afterChange")},invalidateCurrItems:function(){x=!0;for(var a=0;a<h;a++)y[a].item&&(y[a].item.needsUpdate=!0)},updateCurrItem:function(a){if(0!==ua){var b,c=Math.abs(ua);if(!(a&&c<2)){f.currItem=_b(m),ya=!1,Da("beforeChange",ua),c>=h&&(o+=ua+(ua>0?-h:h),c=h);for(var d=0;d<c;d++)ua>0?(b=y.shift(),y[h-1]=b,o++,Ja((o+2)*ta.x,b.el.style),f.setContent(b,m-c+d+1+1)):(b=y.pop(),y.unshift(b),o--,Ja(o*ta.x,b.el.style),f.setContent(b,m+c-d-1-1));if(ea&&1===Math.abs(ua)){var e=_b(z);e.initialZoomLevel!==s&&(ic(e,qa),mc(e),Ia(e))}ua=0,f.updateCurrZoomItem(),z=m,Da("afterChange")}}},updateSize:function(b){if(!va&&i.modal){var c=e.getScrollY();if(M!==c&&(a.style.top=c+"px",M=c),!b&&xa.x===window.innerWidth&&xa.y===window.innerHeight)return;xa.x=window.innerWidth,xa.y=window.innerHeight,a.style.height=xa.y+"px"}if(qa.x=f.scrollWrap.clientWidth,qa.y=f.scrollWrap.clientHeight,Za(),ta.x=qa.x+Math.round(qa.x*i.spacing),ta.y=qa.y,Ka(ta.x*ra),Da("beforeResize"),void 0!==o){for(var d,g,j,k=0;k<h;k++)d=y[k],Ja((k+o)*ta.x,d.el.style),j=m+k-1,i.loop&&ac()>2&&(j=Aa(j)),g=_b(j),g&&(x||g.needsUpdate||!g.bounds)?(f.cleanSlide(g),f.setContent(d,j),1===k&&(f.currItem=g,f.updateCurrZoomItem(!0)),g.needsUpdate=!1):d.index===-1&&j>=0&&f.setContent(d,j),g&&g.container&&(ic(g,qa),mc(g),Ia(g));x=!1}t=s=f.currItem.initialZoomLevel,da=f.currItem.bounds,da&&(pa.x=da.center.x,pa.y=da.center.y,Ha(!0)),Da("resize")},zoomTo:function(a,b,c,d,f){b&&(t=s,ub.x=Math.abs(b.x)-pa.x,ub.y=Math.abs(b.y)-pa.y,Ma(oa,pa));var g=Sa(a,!1),h={};Va("x",g,h,a),Va("y",g,h,a);var i=s,j={x:pa.x,y:pa.y};Na(h);var k=function(b){1===b?(s=a,pa.x=h.x,pa.y=h.y):(s=(a-i)*b+i,pa.x=(h.x-j.x)*b+j.x,pa.y=(h.y-j.y)*b+j.y),f&&f(b),Ha(1===b)};c?db("customZoomTo",0,1,c,d||e.easing.sine.inOut,k):k(1)}},fb=30,gb=10,hb={},ib={},jb={},kb={},lb={},mb=[],nb={},ob=[],pb={},qb=0,rb=ma(),sb=0,tb=ma(),ub=ma(),vb=ma(),wb=function(a,b){return a.x===b.x&&a.y===b.y},xb=function(a,b){return Math.abs(a.x-b.x)<g&&Math.abs(a.y-b.y)<g},yb=function(a,b){return pb.x=Math.abs(a.x-b.x),pb.y=Math.abs(a.y-b.y),Math.sqrt(pb.x*pb.x+pb.y*pb.y)},zb=function(){Z&&(I(Z),Z=null)},Ab=function(){V&&(Z=H(Ab),Qb())},Bb=function(){return!("fit"===i.scaleMode&&s===f.currItem.initialZoomLevel)},Cb=function(a,b){return!(!a||a===document)&&(!(a.getAttribute("class")&&a.getAttribute("class").indexOf("pswp__scroll-wrap")>-1)&&(b(a)?a:Cb(a.parentNode,b)))},Db={},Eb=function(a,b){return Db.prevent=!Cb(a.target,i.isClickableElement),Da("preventDragEvent",a,b,Db),Db.prevent},Fb=function(a,b){return b.x=a.pageX,b.y=a.pageY,b.id=a.identifier,b},Gb=function(a,b,c){c.x=.5*(a.x+b.x),c.y=.5*(a.y+b.y)},Hb=function(a,b,c){if(a-Q>50){var d=ob.length>2?ob.shift():{};d.x=b,d.y=c,ob.push(d),Q=a}},Ib=function(){var a=pa.y-f.currItem.initialPosition.y;return 1-Math.abs(a/(qa.y/2))},Jb={},Kb={},Lb=[],Mb=function(a){for(;Lb.length>0;)Lb.pop();return F?(la=0,mb.forEach(function(a){0===la?Lb[0]=a:1===la&&(Lb[1]=a),la++})):a.type.indexOf("touch")>-1?a.touches&&a.touches.length>0&&(Lb[0]=Fb(a.touches[0],Jb),a.touches.length>1&&(Lb[1]=Fb(a.touches[1],Kb))):(Jb.x=a.pageX,Jb.y=a.pageY,Jb.id="",Lb[0]=Jb),Lb},Nb=function(a,b){var c,d,e,g,h=0,j=pa[a]+b[a],k=b[a]>0,l=tb.x+b.x,m=tb.x-nb.x;return c=j>da.min[a]||j<da.max[a]?i.panEndFriction:1,j=pa[a]+b[a]*c,!i.allowPanToNext&&s!==f.currItem.initialZoomLevel||(ea?"h"!==ga||"x"!==a||X||(k?(j>da.min[a]&&(c=i.panEndFriction,h=da.min[a]-j,d=da.min[a]-oa[a]),(d<=0||m<0)&&ac()>1?(g=l,m<0&&l>nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j)):(j<da.max[a]&&(c=i.panEndFriction,h=j-da.max[a],d=oa[a]-da.max[a]),(d<=0||m>0)&&ac()>1?(g=l,m>0&&l<nb.x&&(g=nb.x)):da.min.x!==da.max.x&&(e=j))):g=l,"x"!==a)?void(fa||$||s>f.currItem.fitRatio&&(pa[a]+=b[a]*c)):(void 0!==g&&(Ka(g,!0),$=g!==nb.x),da.min.x!==da.max.x&&(void 0!==e?pa.x=e:$||(pa.x+=b.x*c)),void 0!==g)},Ob=function(a){if(!("mousedown"===a.type&&a.button>0)){if($b)return void a.preventDefault();if(!U||"mousedown"!==a.type){if(Eb(a,!0)&&a.preventDefault(),Da("pointerDown"),F){var b=e.arraySearch(mb,a.pointerId,"id");b<0&&(b=mb.length),mb[b]={x:a.pageX,y:a.pageY,id:a.pointerId}}var c=Mb(a),d=c.length;_=null,cb(),V&&1!==d||(V=ha=!0,e.bind(window,p,f),S=ka=ia=T=$=Y=W=X=!1,ga=null,Da("firstTouchStart",c),Ma(oa,pa),na.x=na.y=0,Ma(kb,c[0]),Ma(lb,kb),nb.x=ta.x*ra,ob=[{x:kb.x,y:kb.y}],Q=P=Ea(),Sa(s,!0),zb(),Ab()),!aa&&d>1&&!fa&&!$&&(t=s,X=!1,aa=W=!0,na.y=na.x=0,Ma(oa,pa),Ma(hb,c[0]),Ma(ib,c[1]),Gb(hb,ib,vb),ub.x=Math.abs(vb.x)-pa.x,ub.y=Math.abs(vb.y)-pa.y,ba=ca=yb(hb,ib))}}},Pb=function(a){if(a.preventDefault(),F){var b=e.arraySearch(mb,a.pointerId,"id");if(b>-1){var c=mb[b];c.x=a.pageX,c.y=a.pageY}}if(V){var d=Mb(a);if(ga||Y||aa)_=d;else if(tb.x!==ta.x*ra)ga="h";else{var f=Math.abs(d[0].x-kb.x)-Math.abs(d[0].y-kb.y);Math.abs(f)>=gb&&(ga=f>0?"h":"v",_=d)}}},Qb=function(){if(_){var a=_.length;if(0!==a)if(Ma(hb,_[0]),jb.x=hb.x-kb.x,jb.y=hb.y-kb.y,aa&&a>1){if(kb.x=hb.x,kb.y=hb.y,!jb.x&&!jb.y&&wb(_[1],ib))return;Ma(ib,_[1]),X||(X=!0,Da("zoomGestureStarted"));var b=yb(hb,ib),c=Vb(b);c>f.currItem.initialZoomLevel+f.currItem.initialZoomLevel/15&&(ka=!0);var d=1,e=Ta(),g=Ua();if(c<e)if(i.pinchToClose&&!ka&&t<=f.currItem.initialZoomLevel){var h=e-c,j=1-h/(e/1.2);Fa(j),Da("onPinchClose",j),ia=!0}else d=(e-c)/e,d>1&&(d=1),c=e-d*(e/3);else c>g&&(d=(c-g)/(6*e),d>1&&(d=1),c=g+d*e);d<0&&(d=0),ba=b,Gb(hb,ib,rb),na.x+=rb.x-vb.x,na.y+=rb.y-vb.y,Ma(vb,rb),pa.x=La("x",c),pa.y=La("y",c),S=c>s,s=c,Ha()}else{if(!ga)return;if(ha&&(ha=!1,Math.abs(jb.x)>=gb&&(jb.x-=_[0].x-lb.x),Math.abs(jb.y)>=gb&&(jb.y-=_[0].y-lb.y)),kb.x=hb.x,kb.y=hb.y,0===jb.x&&0===jb.y)return;if("v"===ga&&i.closeOnVerticalDrag&&!Bb()){na.y+=jb.y,pa.y+=jb.y;var k=Ib();return T=!0,Da("onVerticalDrag",k),Fa(k),void Ha()}Hb(Ea(),hb.x,hb.y),Y=!0,da=f.currItem.bounds;var l=Nb("x",jb);l||(Nb("y",jb),Na(pa),Ha())}}},Rb=function(a){if(N.isOldAndroid){if(U&&"mouseup"===a.type)return;a.type.indexOf("touch")>-1&&(clearTimeout(U),U=setTimeout(function(){U=0},600))}Da("pointerUp"),Eb(a,!1)&&a.preventDefault();var b;if(F){var c=e.arraySearch(mb,a.pointerId,"id");if(c>-1)if(b=mb.splice(c,1)[0],navigator.pointerEnabled)b.type=a.pointerType||"mouse";else{var d={4:"mouse",2:"touch",3:"pen"};b.type=d[a.pointerType],b.type||(b.type=a.pointerType||"mouse")}}var g,h=Mb(a),j=h.length;if("mouseup"===a.type&&(j=0),2===j)return _=null,!0;1===j&&Ma(lb,h[0]),0!==j||ga||fa||(b||("mouseup"===a.type?b={x:a.pageX,y:a.pageY,type:"mouse"}:a.changedTouches&&a.changedTouches[0]&&(b={x:a.changedTouches[0].pageX,y:a.changedTouches[0].pageY,type:"touch"})),Da("touchRelease",a,b));var k=-1;if(0===j&&(V=!1,e.unbind(window,p,f),zb(),aa?k=0:sb!==-1&&(k=Ea()-sb)),sb=1===j?Ea():-1,g=k!==-1&&k<150?"zoom":"swipe",aa&&j<2&&(aa=!1,1===j&&(g="zoomPointerUp"),Da("zoomGestureEnded")),_=null,Y||X||fa||T)if(cb(),R||(R=Sb()),R.calculateSwipeSpeed("x"),T){var l=Ib();if(l<i.verticalDragRange)f.close();else{var m=pa.y,n=ja;db("verticalDrag",0,1,300,e.easing.cubic.out,function(a){pa.y=(f.currItem.initialPosition.y-m)*a+m,Fa((1-n)*a+n),Ha()}),Da("onVerticalDrag",1)}}else{if(($||fa)&&0===j){var o=Ub(g,R);if(o)return;g="zoomPointerUp"}if(!fa)return"swipe"!==g?void Wb():void(!$&&s>f.currItem.fitRatio&&Tb(R))}},Sb=function(){var a,b,c={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(d){ob.length>1?(a=Ea()-Q+50,b=ob[ob.length-2][d]):(a=Ea()-P,b=lb[d]),c.lastFlickOffset[d]=kb[d]-b,c.lastFlickDist[d]=Math.abs(c.lastFlickOffset[d]),c.lastFlickDist[d]>20?c.lastFlickSpeed[d]=c.lastFlickOffset[d]/a:c.lastFlickSpeed[d]=0,Math.abs(c.lastFlickSpeed[d])<.1&&(c.lastFlickSpeed[d]=0),c.slowDownRatio[d]=.95,c.slowDownRatioReverse[d]=1-c.slowDownRatio[d],c.speedDecelerationRatio[d]=1},calculateOverBoundsAnimOffset:function(a,b){c.backAnimStarted[a]||(pa[a]>da.min[a]?c.backAnimDestination[a]=da.min[a]:pa[a]<da.max[a]&&(c.backAnimDestination[a]=da.max[a]),void 0!==c.backAnimDestination[a]&&(c.slowDownRatio[a]=.7,c.slowDownRatioReverse[a]=1-c.slowDownRatio[a],c.speedDecelerationRatioAbs[a]<.05&&(c.lastFlickSpeed[a]=0,c.backAnimStarted[a]=!0,db("bounceZoomPan"+a,pa[a],c.backAnimDestination[a],b||300,e.easing.sine.out,function(b){pa[a]=b,Ha()}))))},calculateAnimOffset:function(a){c.backAnimStarted[a]||(c.speedDecelerationRatio[a]=c.speedDecelerationRatio[a]*(c.slowDownRatio[a]+c.slowDownRatioReverse[a]-c.slowDownRatioReverse[a]*c.timeDiff/10),c.speedDecelerationRatioAbs[a]=Math.abs(c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]),c.distanceOffset[a]=c.lastFlickSpeed[a]*c.speedDecelerationRatio[a]*c.timeDiff,pa[a]+=c.distanceOffset[a])},panAnimLoop:function(){if($a.zoomPan&&($a.zoomPan.raf=H(c.panAnimLoop),c.now=Ea(),c.timeDiff=c.now-c.lastNow,c.lastNow=c.now,c.calculateAnimOffset("x"),c.calculateAnimOffset("y"),Ha(),c.calculateOverBoundsAnimOffset("x"),c.calculateOverBoundsAnimOffset("y"),c.speedDecelerationRatioAbs.x<.05&&c.speedDecelerationRatioAbs.y<.05))return pa.x=Math.round(pa.x),pa.y=Math.round(pa.y),Ha(),void ab("zoomPan")}};return c},Tb=function(a){return a.calculateSwipeSpeed("y"),da=f.currItem.bounds,a.backAnimDestination={},a.backAnimStarted={},Math.abs(a.lastFlickSpeed.x)<=.05&&Math.abs(a.lastFlickSpeed.y)<=.05?(a.speedDecelerationRatioAbs.x=a.speedDecelerationRatioAbs.y=0,a.calculateOverBoundsAnimOffset("x"),a.calculateOverBoundsAnimOffset("y"),!0):(bb("zoomPan"),a.lastNow=Ea(),void a.panAnimLoop())},Ub=function(a,b){var c;fa||(qb=m);var d;if("swipe"===a){var g=kb.x-lb.x,h=b.lastFlickDist.x<10;g>fb&&(h||b.lastFlickOffset.x>20)?d=-1:g<-fb&&(h||b.lastFlickOffset.x<-20)&&(d=1)}var j;d&&(m+=d,m<0?(m=i.loop?ac()-1:0,j=!0):m>=ac()&&(m=i.loop?0:ac()-1,j=!0),j&&!i.loop||(ua+=d,ra-=d,c=!0));var k,l=ta.x*ra,n=Math.abs(l-tb.x);return c||l>tb.x==b.lastFlickSpeed.x>0?(k=Math.abs(b.lastFlickSpeed.x)>0?n/Math.abs(b.lastFlickSpeed.x):333,k=Math.min(k,400),k=Math.max(k,250)):k=333,qb===m&&(c=!1),fa=!0,Da("mainScrollAnimStart"),db("mainScroll",tb.x,l,k,e.easing.cubic.out,Ka,function(){cb(),fa=!1,qb=-1,(c||qb!==m)&&f.updateCurrItem(),Da("mainScrollAnimComplete")}),c&&f.updateCurrItem(!0),c},Vb=function(a){return 1/ca*a*t},Wb=function(){var a=s,b=Ta(),c=Ua();s<b?a=b:s>c&&(a=c);var d,g=1,h=ja;return ia&&!S&&!ka&&s<b?(f.close(),!0):(ia&&(d=function(a){Fa((g-h)*a+h)}),f.zoomTo(a,0,200,e.easing.cubic.out,d),!0)};za("Gestures",{publicMethods:{initGestures:function(){var a=function(a,b,c,d,e){A=a+b,B=a+c,C=a+d,D=e?a+e:""};F=N.pointerEvent,F&&N.touch&&(N.touch=!1),F?navigator.pointerEnabled?a("pointer","down","move","up","cancel"):a("MSPointer","Down","Move","Up","Cancel"):N.touch?(a("touch","start","move","end","cancel"),G=!0):a("mouse","down","move","up"),p=B+" "+C+" "+D,q=A,F&&!G&&(G=navigator.maxTouchPoints>1||navigator.msMaxTouchPoints>1),f.likelyTouchDevice=G,r[A]=Ob,r[B]=Pb,r[C]=Rb,D&&(r[D]=r[C]),N.touch&&(q+=" mousedown",p+=" mousemove mouseup",r.mousedown=r[A],r.mousemove=r[B],r.mouseup=r[C]),G||(i.allowPanToNext=!1)}}});var Xb,Yb,Zb,$b,_b,ac,bc,cc=function(b,c,d,g){Xb&&clearTimeout(Xb),$b=!0,Zb=!0;var h;b.initialLayout?(h=b.initialLayout,b.initialLayout=null):h=i.getThumbBoundsFn&&i.getThumbBoundsFn(m);var j=d?i.hideAnimationDuration:i.showAnimationDuration,k=function(){ab("initialZoom"),d?(f.template.removeAttribute("style"),f.bg.removeAttribute("style")):(Fa(1),c&&(c.style.display="block"),e.addClass(a,"pswp--animated-in"),Da("initialZoom"+(d?"OutEnd":"InEnd"))),g&&g(),$b=!1};if(!j||!h||void 0===h.x)return Da("initialZoom"+(d?"Out":"In")),s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),a.style.opacity=d?0:1,Fa(1),void(j?setTimeout(function(){k()},j):k());var n=function(){var c=l,g=!f.currItem.src||f.currItem.loadError||i.showHideOpacity;b.miniImg&&(b.miniImg.style.webkitBackfaceVisibility="hidden"),d||(s=h.w/b.w,pa.x=h.x,pa.y=h.y-K,f[g?"template":"bg"].style.opacity=.001,Ha()),bb("initialZoom"),d&&!c&&e.removeClass(a,"pswp--animated-in"),g&&(d?e[(c?"remove":"add")+"Class"](a,"pswp--animate_opacity"):setTimeout(function(){e.addClass(a,"pswp--animate_opacity")},30)),Xb=setTimeout(function(){if(Da("initialZoom"+(d?"Out":"In")),d){var f=h.w/b.w,i={x:pa.x,y:pa.y},l=s,m=ja,n=function(b){1===b?(s=f,pa.x=h.x,pa.y=h.y-M):(s=(f-l)*b+l,pa.x=(h.x-i.x)*b+i.x,pa.y=(h.y-M-i.y)*b+i.y),Ha(),g?a.style.opacity=1-b:Fa(m-b*m)};c?db("initialZoom",0,1,j,e.easing.cubic.out,n,k):(n(1),Xb=setTimeout(k,j+20))}else s=b.initialZoomLevel,Ma(pa,b.initialPosition),Ha(),Fa(1),g?a.style.opacity=1:Fa(1),Xb=setTimeout(k,j+20)},d?25:90)};n()},dc={},ec=[],fc={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Yb.length}},gc=function(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}},hc=function(a,b,c){var d=a.bounds;d.center.x=Math.round((dc.x-b)/2),d.center.y=Math.round((dc.y-c)/2)+a.vGap.top,d.max.x=b>dc.x?Math.round(dc.x-b):d.center.x,d.max.y=c>dc.y?Math.round(dc.y-c)+a.vGap.top:d.center.y,d.min.x=b>dc.x?0:d.center.x,d.min.y=c>dc.y?a.vGap.top:d.center.y},ic=function(a,b,c){if(a.src&&!a.loadError){var d=!c;if(d&&(a.vGap||(a.vGap={top:0,bottom:0}),Da("parseVerticalMargin",a)),dc.x=b.x,dc.y=b.y-a.vGap.top-a.vGap.bottom,d){var e=dc.x/a.w,f=dc.y/a.h;a.fitRatio=e<f?e:f;var g=i.scaleMode;"orig"===g?c=1:"fit"===g&&(c=a.fitRatio),c>1&&(c=1),a.initialZoomLevel=c,a.bounds||(a.bounds=gc())}if(!c)return;return hc(a,a.w*c,a.h*c),d&&c===a.initialZoomLevel&&(a.initialPosition=a.bounds.center),a.bounds}return a.w=a.h=0,a.initialZoomLevel=a.fitRatio=1,a.bounds=gc(),a.initialPosition=a.bounds.center,a.bounds},jc=function(a,b,c,d,e,g){b.loadError||d&&(b.imageAppended=!0,mc(b,d,b===f.currItem&&ya),c.appendChild(d),g&&setTimeout(function(){b&&b.loaded&&b.placeholder&&(b.placeholder.style.display="none",b.placeholder=null)},500))},kc=function(a){a.loading=!0,a.loaded=!1;var b=a.img=e.createEl("pswp__img","img"),c=function(){a.loading=!1,a.loaded=!0,a.loadComplete?a.loadComplete(a):a.img=null,b.onload=b.onerror=null,b=null};return b.onload=c,b.onerror=function(){a.loadError=!0,c()},b.src=a.src,b},lc=function(a,b){if(a.src&&a.loadError&&a.container)return b&&(a.container.innerHTML=""),a.container.innerHTML=i.errorMsg.replace("%url%",a.src),!0},mc=function(a,b,c){if(a.src){b||(b=a.container.lastChild);var d=c?a.w:Math.round(a.w*a.fitRatio),e=c?a.h:Math.round(a.h*a.fitRatio);a.placeholder&&!a.loaded&&(a.placeholder.style.width=d+"px",a.placeholder.style.height=e+"px"),b.style.width=d+"px",b.style.height=e+"px"}},nc=function(){if(ec.length){for(var a,b=0;b<ec.length;b++)a=ec[b],a.holder.index===a.index&&jc(a.index,a.item,a.baseDiv,a.img,!1,a.clearPlaceholder);ec=[]}};za("Controller",{publicMethods:{lazyLoadItem:function(a){a=Aa(a);var b=_b(a);b&&(!b.loaded&&!b.loading||x)&&(Da("gettingData",a,b),b.src&&kc(b))},initController:function(){e.extend(i,fc,!0),f.items=Yb=c,_b=f.getItemAt,ac=i.getNumItemsFn,bc=i.loop,ac()<3&&(i.loop=!1),Ca("beforeChange",function(a){var b,c=i.preload,d=null===a||a>=0,e=Math.min(c[0],ac()),g=Math.min(c[1],ac());for(b=1;b<=(d?g:e);b++)f.lazyLoadItem(m+b);for(b=1;b<=(d?e:g);b++)f.lazyLoadItem(m-b)}),Ca("initialLayout",function(){f.currItem.initialLayout=i.getThumbBoundsFn&&i.getThumbBoundsFn(m)}),Ca("mainScrollAnimComplete",nc),Ca("initialZoomInEnd",nc),Ca("destroy",function(){for(var a,b=0;b<Yb.length;b++)a=Yb[b],a.container&&(a.container=null),a.placeholder&&(a.placeholder=null),a.img&&(a.img=null),a.preloader&&(a.preloader=null),a.loadError&&(a.loaded=a.loadError=!1);ec=null})},getItemAt:function(a){return a>=0&&(void 0!==Yb[a]&&Yb[a])},allowProgressiveImg:function(){return i.forceProgressiveLoading||!G||i.mouseUsed||screen.width>1200},setContent:function(a,b){i.loop&&(b=Aa(b));var c=f.getItemAt(a.index);c&&(c.container=null);var d,g=f.getItemAt(b);if(!g)return void(a.el.innerHTML="");Da("gettingData",b,g),a.index=b,a.item=g;var h=g.container=e.createEl("pswp__zoom-wrap");if(!g.src&&g.html&&(g.html.tagName?h.appendChild(g.html):h.innerHTML=g.html),lc(g),ic(g,qa),!g.src||g.loadError||g.loaded)g.src&&!g.loadError&&(d=e.createEl("pswp__img","img"),d.style.opacity=1,d.src=g.src,mc(g,d),jc(b,g,h,d,!0));else{if(g.loadComplete=function(c){if(j){if(a&&a.index===b){if(lc(c,!0))return c.loadComplete=c.img=null,ic(c,qa),Ia(c),void(a.index===m&&f.updateCurrZoomItem());c.imageAppended?!$b&&c.placeholder&&(c.placeholder.style.display="none",c.placeholder=null):N.transform&&(fa||$b)?ec.push({item:c,baseDiv:h,img:c.img,index:b,holder:a,clearPlaceholder:!0}):jc(b,c,h,c.img,fa||$b,!0)}c.loadComplete=null,c.img=null,Da("imageLoadComplete",b,c)}},e.features.transform){var k="pswp__img pswp__img--placeholder";k+=g.msrc?"":" pswp__img--placeholder--blank";var l=e.createEl(k,g.msrc?"img":"");g.msrc&&(l.src=g.msrc),mc(g,l),h.appendChild(l),g.placeholder=l}g.loading||kc(g),f.allowProgressiveImg()&&(!Zb&&N.transform?ec.push({item:g,baseDiv:h,img:g.img,index:b,holder:a}):jc(b,g,h,g.img,!0,!0))}Zb||b!==m?Ia(g):(ea=h.style,cc(g,d||g.img)),a.el.innerHTML="",a.el.appendChild(h)},cleanSlide:function(a){a.img&&(a.img.onload=a.img.onerror=null),a.loaded=a.loading=a.img=a.imageAppended=!1}}});var oc,pc={},qc=function(a,b,c){var d=document.createEvent("CustomEvent"),e={origEvent:a,target:a.target,releasePoint:b,pointerType:c||"touch"};d.initCustomEvent("pswpTap",!0,!0,e),a.target.dispatchEvent(d)};za("Tap",{publicMethods:{initTap:function(){Ca("firstTouchStart",f.onTapStart),Ca("touchRelease",f.onTapRelease),Ca("destroy",function(){pc={},oc=null})},onTapStart:function(a){a.length>1&&(clearTimeout(oc),oc=null)},onTapRelease:function(a,b){if(b&&!Y&&!W&&!_a){var c=b;if(oc&&(clearTimeout(oc),oc=null,xb(c,pc)))return void Da("doubleTap",c);if("mouse"===b.type)return void qc(a,b,"mouse");var d=a.target.tagName.toUpperCase();if("BUTTON"===d||e.hasClass(a.target,"pswp__single-tap"))return void qc(a,b);Ma(pc,c),oc=setTimeout(function(){qc(a,b),oc=null},300)}}}});var rc;za("DesktopZoom",{publicMethods:{initDesktopZoom:function(){L||(G?Ca("mouseUsed",function(){f.setupDesktopZoom()}):f.setupDesktopZoom(!0))},setupDesktopZoom:function(b){rc={};var c="wheel mousewheel DOMMouseScroll";Ca("bindEvents",function(){e.bind(a,c,f.handleMouseWheel)}),Ca("unbindEvents",function(){rc&&e.unbind(a,c,f.handleMouseWheel)}),f.mouseZoomedIn=!1;var d,g=function(){f.mouseZoomedIn&&(e.removeClass(a,"pswp--zoomed-in"),f.mouseZoomedIn=!1),s<1?e.addClass(a,"pswp--zoom-allowed"):e.removeClass(a,"pswp--zoom-allowed"),h()},h=function(){d&&(e.removeClass(a,"pswp--dragging"),d=!1)};Ca("resize",g),Ca("afterChange",g),Ca("pointerDown",function(){f.mouseZoomedIn&&(d=!0,e.addClass(a,"pswp--dragging"))}),Ca("pointerUp",h),b||g()},handleMouseWheel:function(a){if(s<=f.currItem.fitRatio)return i.modal&&(!i.closeOnScroll||_a||V?a.preventDefault():E&&Math.abs(a.deltaY)>2&&(l=!0,f.close())),!0;if(a.stopPropagation(),rc.x=0,"deltaX"in a)1===a.deltaMode?(rc.x=18*a.deltaX,rc.y=18*a.deltaY):(rc.x=a.deltaX,rc.y=a.deltaY);else if("wheelDelta"in a)a.wheelDeltaX&&(rc.x=-.16*a.wheelDeltaX),a.wheelDeltaY?rc.y=-.16*a.wheelDeltaY:rc.y=-.16*a.wheelDelta;else{if(!("detail"in a))return;rc.y=a.detail}Sa(s,!0);var b=pa.x-rc.x,c=pa.y-rc.y;(i.modal||b<=da.min.x&&b>=da.max.x&&c<=da.min.y&&c>=da.max.y)&&a.preventDefault(),f.panTo(b,c)},toggleDesktopZoom:function(b){b=b||{x:qa.x/2+sa.x,y:qa.y/2+sa.y};var c=i.getDoubleTapZoom(!0,f.currItem),d=s===c;f.mouseZoomedIn=!d,f.zoomTo(d?f.currItem.initialZoomLevel:c,b,333),e[(d?"remove":"add")+"Class"](a,"pswp--zoomed-in")}}});var sc,tc,uc,vc,wc,xc,yc,zc,Ac,Bc,Cc,Dc,Ec={history:!0,galleryUID:1},Fc=function(){return Cc.hash.substring(1)},Gc=function(){sc&&clearTimeout(sc),uc&&clearTimeout(uc)},Hc=function(){var a=Fc(),b={};if(a.length<5)return b;var c,d=a.split("&");for(c=0;c<d.length;c++)if(d[c]){var e=d[c].split("=");e.length<2||(b[e[0]]=e[1])}if(i.galleryPIDs){var f=b.pid;for(b.pid=0,c=0;c<Yb.length;c++)if(Yb[c].pid===f){b.pid=c;break}}else b.pid=parseInt(b.pid,10)-1;return b.pid<0&&(b.pid=0),b},Ic=function(){if(uc&&clearTimeout(uc),_a||V)return void(uc=setTimeout(Ic,500));vc?clearTimeout(tc):vc=!0;var a=m+1,b=_b(m);b.hasOwnProperty("pid")&&(a=b.pid);var c=yc+"&gid="+i.galleryUID+"&pid="+a;zc||Cc.hash.indexOf(c)===-1&&(Bc=!0);var d=Cc.href.split("#")[0]+"#"+c;Dc?"#"+c!==window.location.hash&&history[zc?"replaceState":"pushState"]("",document.title,d):zc?Cc.replace(d):Cc.hash=c,zc=!0,tc=setTimeout(function(){vc=!1},60)};za("History",{publicMethods:{initHistory:function(){if(e.extend(i,Ec,!0),i.history){Cc=window.location,Bc=!1,Ac=!1,zc=!1,yc=Fc(),Dc="pushState"in history,yc.indexOf("gid=")>-1&&(yc=yc.split("&gid=")[0],yc=yc.split("?gid=")[0]),Ca("afterChange",f.updateURL),Ca("unbindEvents",function(){e.unbind(window,"hashchange",f.onHashChange)});var a=function(){xc=!0,Ac||(Bc?history.back():yc?Cc.hash=yc:Dc?history.pushState("",document.title,Cc.pathname+Cc.search):Cc.hash=""),Gc()};Ca("unbindEvents",function(){l&&a()}),Ca("destroy",function(){xc||a()}),Ca("firstUpdate",function(){m=Hc().pid});var b=yc.indexOf("pid=");b>-1&&(yc=yc.substring(0,b),"&"===yc.slice(-1)&&(yc=yc.slice(0,-1))),setTimeout(function(){j&&e.bind(window,"hashchange",f.onHashChange)},40)}},onHashChange:function(){return Fc()===yc?(Ac=!0,void f.close()):void(vc||(wc=!0,f.goTo(Hc().pid),wc=!1))},updateURL:function(){Gc(),wc||(zc?sc=setTimeout(Ic,800):Ic())}}}),e.extend(f,eb)};return a});

/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.PhotoSwipeUI_Default=b()}(this,function(){"use strict";var a=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=this,w=!1,x=!0,y=!0,z={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(a,b){return a.title?(b.children[0].innerHTML=a.title,!0):(b.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"},{id:"download",label:"Download image",url:"{{raw_image_url}}",download:!0}],getImageURLForShare:function(){return a.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return a.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},A=function(a){if(r)return!0;a=a||window.event,q.timeToIdle&&q.mouseUsed&&!k&&K();for(var c,d,e=a.target||a.srcElement,f=e.getAttribute("class")||"",g=0;g<S.length;g++)c=S[g],c.onTap&&f.indexOf("pswp__"+c.name)>-1&&(c.onTap(),d=!0);if(d){a.stopPropagation&&a.stopPropagation(),r=!0;var h=b.features.isOldAndroid?600:30;s=setTimeout(function(){r=!1},h)}},B=function(){return!a.likelyTouchDevice||q.mouseUsed||screen.width>q.fitControlsWidth},C=function(a,c,d){b[(d?"add":"remove")+"Class"](a,"pswp__"+c)},D=function(){var a=1===q.getNumItemsFn();a!==p&&(C(d,"ui--one-slide",a),p=a)},E=function(){C(i,"share-modal--hidden",y)},F=function(){return y=!y,y?(b.removeClass(i,"pswp__share-modal--fade-in"),setTimeout(function(){y&&E()},300)):(E(),setTimeout(function(){y||b.addClass(i,"pswp__share-modal--fade-in")},30)),y||H(),!1},G=function(b){b=b||window.event;var c=b.target||b.srcElement;return a.shout("shareLinkClick",b,c),!!c.href&&(!!c.hasAttribute("download")||(window.open(c.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),y||F(),!1))},H=function(){for(var a,b,c,d,e,f="",g=0;g<q.shareButtons.length;g++)a=q.shareButtons[g],c=q.getImageURLForShare(a),d=q.getPageURLForShare(a),e=q.getTextForShare(a),b=a.url.replace("{{url}}",encodeURIComponent(d)).replace("{{image_url}}",encodeURIComponent(c)).replace("{{raw_image_url}}",c).replace("{{text}}",encodeURIComponent(e)),f+='<a href="'+b+'" target="_blank" class="pswp__share--'+a.id+'"'+(a.download?"download":"")+">"+a.label+"</a>",q.parseShareButtonOut&&(f=q.parseShareButtonOut(a,f));i.children[0].innerHTML=f,i.children[0].onclick=G},I=function(a){for(var c=0;c<q.closeElClasses.length;c++)if(b.hasClass(a,"pswp__"+q.closeElClasses[c]))return!0},J=0,K=function(){clearTimeout(u),J=0,k&&v.setIdle(!1)},L=function(a){a=a?a:window.event;var b=a.relatedTarget||a.toElement;b&&"HTML"!==b.nodeName||(clearTimeout(u),u=setTimeout(function(){v.setIdle(!0)},q.timeToIdleOutside))},M=function(){q.fullscreenEl&&!b.features.isOldAndroid&&(c||(c=v.getFullscreenAPI()),c?(b.bind(document,c.eventK,v.updateFullscreen),v.updateFullscreen(),b.addClass(a.template,"pswp--supports-fs")):b.removeClass(a.template,"pswp--supports-fs"))},N=function(){q.preloaderEl&&(O(!0),l("beforeChange",function(){clearTimeout(o),o=setTimeout(function(){a.currItem&&a.currItem.loading?(!a.allowProgressiveImg()||a.currItem.img&&!a.currItem.img.naturalWidth)&&O(!1):O(!0)},q.loadingIndicatorDelay)}),l("imageLoadComplete",function(b,c){a.currItem===c&&O(!0)}))},O=function(a){n!==a&&(C(m,"preloader--active",!a),n=a)},P=function(a){var c=a.vGap;if(B()){var g=q.barsSize;if(q.captionEl&&"auto"===g.bottom)if(f||(f=b.createEl("pswp__caption pswp__caption--fake"),f.appendChild(b.createEl("pswp__caption__center")),d.insertBefore(f,e),b.addClass(d,"pswp__ui--fit")),q.addCaptionHTMLFn(a,f,!0)){var h=f.clientHeight;c.bottom=parseInt(h,10)||44}else c.bottom=g.top;else c.bottom="auto"===g.bottom?0:g.bottom;c.top=g.top}else c.top=c.bottom=0},Q=function(){q.timeToIdle&&l("mouseUsed",function(){b.bind(document,"mousemove",K),b.bind(document,"mouseout",L),t=setInterval(function(){J++,2===J&&v.setIdle(!0)},q.timeToIdle/2)})},R=function(){l("onVerticalDrag",function(a){x&&a<.95?v.hideControls():!x&&a>=.95&&v.showControls()});var a;l("onPinchClose",function(b){x&&b<.9?(v.hideControls(),a=!0):a&&!x&&b>.9&&v.showControls()}),l("zoomGestureEnded",function(){a=!1,a&&!x&&v.showControls()})},S=[{name:"caption",option:"captionEl",onInit:function(a){e=a}},{name:"share-modal",option:"shareEl",onInit:function(a){i=a},onTap:function(){F()}},{name:"button--share",option:"shareEl",onInit:function(a){h=a},onTap:function(){F()}},{name:"button--zoom",option:"zoomEl",onTap:a.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(a){g=a}},{name:"button--close",option:"closeEl",onTap:a.close},{name:"button--arrow--left",option:"arrowEl",onTap:a.prev},{name:"button--arrow--right",option:"arrowEl",onTap:a.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){c.isFullscreen()?c.exit():c.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(a){m=a}}],T=function(){var a,c,e,f=function(d){if(d)for(var f=d.length,g=0;g<f;g++){a=d[g],c=a.className;for(var h=0;h<S.length;h++)e=S[h],c.indexOf("pswp__"+e.name)>-1&&(q[e.option]?(b.removeClass(a,"pswp__element--disabled"),e.onInit&&e.onInit(a)):b.addClass(a,"pswp__element--disabled"))}};f(d.children);var g=b.getChildByClass(d,"pswp__top-bar");g&&f(g.children)};v.init=function(){b.extend(a.options,z,!0),q=a.options,d=b.getChildByClass(a.scrollWrap,"pswp__ui"),l=a.listen,R(),l("beforeChange",v.update),l("doubleTap",function(b){var c=a.currItem.initialZoomLevel;a.getZoomLevel()!==c?a.zoomTo(c,b,333):a.zoomTo(q.getDoubleTapZoom(!1,a.currItem),b,333)}),l("preventDragEvent",function(a,b,c){var d=a.target||a.srcElement;d&&d.getAttribute("class")&&a.type.indexOf("mouse")>-1&&(d.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(d.tagName))&&(c.prevent=!1)}),l("bindEvents",function(){b.bind(d,"pswpTap click",A),b.bind(a.scrollWrap,"pswpTap",v.onGlobalTap),a.likelyTouchDevice||b.bind(a.scrollWrap,"mouseover",v.onMouseOver)}),l("unbindEvents",function(){y||F(),t&&clearInterval(t),b.unbind(document,"mouseout",L),b.unbind(document,"mousemove",K),b.unbind(d,"pswpTap click",A),b.unbind(a.scrollWrap,"pswpTap",v.onGlobalTap),b.unbind(a.scrollWrap,"mouseover",v.onMouseOver),c&&(b.unbind(document,c.eventK,v.updateFullscreen),c.isFullscreen()&&(q.hideAnimationDuration=0,c.exit()),c=null)}),l("destroy",function(){q.captionEl&&(f&&d.removeChild(f),b.removeClass(e,"pswp__caption--empty")),i&&(i.children[0].onclick=null),b.removeClass(d,"pswp__ui--over-close"),b.addClass(d,"pswp__ui--hidden"),v.setIdle(!1)}),q.showAnimationDuration||b.removeClass(d,"pswp__ui--hidden"),l("initialZoomIn",function(){q.showAnimationDuration&&b.removeClass(d,"pswp__ui--hidden")}),l("initialZoomOut",function(){b.addClass(d,"pswp__ui--hidden")}),l("parseVerticalMargin",P),T(),q.shareEl&&h&&i&&(y=!0),D(),Q(),M(),N()},v.setIdle=function(a){k=a,C(d,"ui--idle",a)},v.update=function(){x&&a.currItem?(v.updateIndexIndicator(),q.captionEl&&(q.addCaptionHTMLFn(a.currItem,e),C(e,"caption--empty",!a.currItem.title)),w=!0):w=!1,y||F(),D()},v.updateFullscreen=function(d){d&&setTimeout(function(){a.setScrollOffset(0,b.getScrollY())},50),b[(c.isFullscreen()?"add":"remove")+"Class"](a.template,"pswp--fs")},v.updateIndexIndicator=function(){q.counterEl&&(g.innerHTML=a.getCurrentIndex()+1+q.indexIndicatorSep+q.getNumItemsFn())},v.onGlobalTap=function(c){c=c||window.event;var d=c.target||c.srcElement;if(!r)if(c.detail&&"mouse"===c.detail.pointerType){if(I(d))return void a.close();b.hasClass(d,"pswp__img")&&(1===a.getZoomLevel()&&a.getZoomLevel()<=a.currItem.fitRatio?q.clickToCloseNonZoomable&&a.close():a.toggleDesktopZoom(c.detail.releasePoint))}else if(q.tapToToggleControls&&(x?v.hideControls():v.showControls()),q.tapToClose&&(b.hasClass(d,"pswp__img")||I(d)))return void a.close()},v.onMouseOver=function(a){a=a||window.event;var b=a.target||a.srcElement;C(d,"ui--over-close",I(b))},v.hideControls=function(){b.addClass(d,"pswp__ui--hidden"),x=!1},v.showControls=function(){x=!0,w||v.update(),b.removeClass(d,"pswp__ui--hidden")},v.supportsFullscreen=function(){var a=document;return!!(a.exitFullscreen||a.mozCancelFullScreen||a.webkitExitFullscreen||a.msExitFullscreen)},v.getFullscreenAPI=function(){var b,c=document.documentElement,d="fullscreenchange";return c.requestFullscreen?b={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:d}:c.mozRequestFullScreen?b={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+d}:c.webkitRequestFullscreen?b={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+d}:c.msRequestFullscreen&&(b={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),b&&(b.enter=function(){return j=q.closeOnScroll,q.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK?a.template[this.enterK]():void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},b.exit=function(){return q.closeOnScroll=j,document[this.exitK]()},b.isFullscreen=function(){return document[this.elementK]}),b}};return a});


var initPhotoSwipeFromDOM = function(gallerySelector) {

    var parseThumbnailElements = function(el) {
        var thumbElements = $("body").find("a.floatbox"),
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for(var i = 0; i < numNodes; i++) {

            linkEl = thumbElements[i];
            size = $(linkEl).attr('data-size').split('x');

            // create slide object
            item = {
                src: $(linkEl).attr("href"),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };
            var image_title = '';
            /*
            if (typeof($(linkEl).attr('title')) != "undefined")
            {
            	image_title = $(linkEl).attr('title');
            }
            else if ($(linkEl).parent().next("figcaption").html() != '')
            {
            	image_title = $(linkEl).parent().next("figcaption").html();
            }
            else if (typeof($(linkEl).find('img').attr('title')) != "undefined")
            {
            	image_title = $(linkEl).find('img').attr('title');
            }
            */

            item.title = image_title;
            item.msrc = $(linkEl).find("img").attr('src');
            item.el = linkEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }
        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        var clickedListItem = eTarget.parentNode;

        var index = parseInt($(clickedListItem).attr("data-pswp-uid")) - 1;
        if(index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function() {
        var hash = window.location.hash.substring(1),
        params = {};

        if(hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if(!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if(pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if(params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function(index, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements();

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: 1,

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
            }

        };

        // PhotoSwipe opened from URL
        if(fromURL) {
            if(options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for(var j = 0; j < items.length; j++) {
                    if(items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if( isNaN(options.index) ) {
            return;
        }

        if(disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for(var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i+1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true);
    }
};
