/*!
FullCalendar Standard Bundle v7.0.0-beta.1
Docs & License: https://fullcalendar.io/docs/initialize-globals
(c) 2024 Adam Shaw
*/
var FullCalendar = (function (exports) {
  'use strict';

  var n,l$1,u$1,t,i$1,o,r$1,f$1,e$1,c$1,s$1,a$1,h={},p=[],v$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function d(n,l){for(var u in l)n[u]=l[u];return n}function w$1(n){var l=n.parentNode;l&&l.removeChild(n);}function _(l,u,t){var i,o,r,f={};for(r in u)"key"==r?i=u[r]:"ref"==r?o=u[r]:f[r]=u[r];if(arguments.length>2&&(f.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(r in l.defaultProps)void 0===f[r]&&(f[r]=l.defaultProps[r]);return g$1(l,f,i,o,null)}function g$1(n,t,i,o,r){var f={type:n,props:t,key:i,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++u$1:r,__i:-1,__u:0};return null==r&&null!=l$1.vnode&&l$1.vnode(f),f}function m$1(){return {current:null}}function k$1(n){return n.children}function b(n,l){this.props=n,this.context=l;}function x(n,l){if(null==l)return n.__?x(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?x(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M$1(n){(!n.__d&&(n.__d=!0)&&i$1.push(n)&&!P$1.__r++||o!==l$1.debounceRendering)&&((o=l$1.debounceRendering)||r$1)(P$1);}function P$1(){var n,u,t,o,r,e,c,s;for(i$1.sort(f$1);n=i$1.shift();)n.__d&&(u=i$1.length,o=void 0,e=(r=(t=n).__v).__e,c=[],s=[],t.__P&&((o=d({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(o),O$1(t.__P,o,r,t.__n,t.__P.namespaceURI,32&r.__u?[e]:null,c,null==e?x(r):e,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,j$2(c,o,s),o.__e!=e&&C$1(o)),i$1.length>u&&i$1.sort(f$1));P$1.__r=0;}function S(n,l,u,t,i,o,r,f,e,c,s){var a,v,y,d,w,_=t&&t.__k||p,g=l.length;for(u.__d=e,$$1(u,l,_),e=u.__d,a=0;a<g;a++)null!=(y=u.__k[a])&&"boolean"!=typeof y&&"function"!=typeof y&&(v=-1===y.__i?h:_[y.__i]||h,y.__i=a,O$1(n,y,v,i,o,r,f,e,c,s),d=y.__e,y.ref&&v.ref!=y.ref&&(v.ref&&N(v.ref,null,y),s.push(y.ref,y.__c||d,y)),null==w&&null!=d&&(w=d),65536&y.__u||v.__k===y.__k?e=I(y,e,n):"function"==typeof y.type&&void 0!==y.__d?e=y.__d:d&&(e=d.nextSibling),y.__d=void 0,y.__u&=-196609);u.__d=e,u.__e=w;}function $$1(n,l,u){var t,i,o,r,f,e=l.length,c=u.length,s=c,a=0;for(n.__k=[],t=0;t<e;t++)r=t+a,null!=(i=n.__k[t]=null==(i=l[t])||"boolean"==typeof i||"function"==typeof i?null:"string"==typeof i||"number"==typeof i||"bigint"==typeof i||i.constructor==String?g$1(null,i,null,null,null):y(i)?g$1(k$1,{children:i},null,null,null):void 0===i.constructor&&i.__b>0?g$1(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)?(i.__=n,i.__b=n.__b+1,f=L$1(i,u,r,s),i.__i=f,o=null,-1!==f&&(s--,(o=u[f])&&(o.__u|=131072)),null==o||null===o.__v?(-1==f&&a--,"function"!=typeof i.type&&(i.__u|=65536)):f!==r&&(f==r-1?a=f-r:f==r+1?a++:f>r?s>e-r?a+=f-r:a--:f<r&&a++,f!==t+a&&(i.__u|=65536))):(o=u[r])&&null==o.key&&o.__e&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V$1(o,o,!1),u[r]=null,s--);if(s)for(t=0;t<c;t++)null!=(o=u[t])&&0==(131072&o.__u)&&(o.__e==n.__d&&(n.__d=x(o)),V$1(o,o));}function I(n,l,u){var t,i;if("function"==typeof n.type){for(t=n.__k,i=0;t&&i<t.length;i++)t[i]&&(t[i].__=n,l=I(t[i],l,u));return l}n.__e!=l&&(l&&n.type&&!u.contains(l)&&(l=x(n)),u.insertBefore(n.__e,l||null),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8===l.nodeType);return l}function H$1(n,l){return l=l||[],null==n||"boolean"==typeof n||(y(n)?n.some(function(n){H$1(n,l);}):l.push(n)),l}function L$1(n,l,u,t){var i=n.key,o=n.type,r=u-1,f=u+1,e=l[u];if(null===e||e&&i==e.key&&o===e.type&&0==(131072&e.__u))return u;if(t>(null!=e&&0==(131072&e.__u)?1:0))for(;r>=0||f<l.length;){if(r>=0){if((e=l[r])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return r;r--;}if(f<l.length){if((e=l[f])&&0==(131072&e.__u)&&i==e.key&&o===e.type)return f;f++;}}return -1}function T$1(n,l,u){"-"===l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||v$1.test(l)?u:u+"px";}function A$1(n,l,u,t,i){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]===t[l]||T$1(n.style,l,u[l]);}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/(PointerCapture)$|Capture$/i,"$1")),l=l.toLowerCase()in n||"onFocusOut"===l||"onFocusIn"===l?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?t?u.u=t.u:(u.u=e$1,n.addEventListener(l,o?s$1:c$1,o)):n.removeEventListener(l,o?s$1:c$1,o);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||!1===u&&"-"!==l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=e$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O$1(n,u,t,i,o,r,f,e,c,s){var a,h,p,v,w,_,g,m,x,C,M,P,$,I,H,L,T=u.type;if(void 0!==u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),r=[e=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof T)try{if(m=u.props,x="prototype"in T&&T.prototype.render,C=(a=T.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?g=(h=u.__c=t.__c).__=h.__E:(x?u.__c=h=new T(m,M):(u.__c=h=new b(m,M),h.constructor=T,h.render=q),C&&C.sub(h),h.props=m,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),x&&null==h.__s&&(h.__s=h.state),x&&null!=T.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d({},h.__s)),d(h.__s,T.getDerivedStateFromProps(m,h.__s))),v=h.props,w=h.state,h.__v=u,p)x&&null==T.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),x&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(x&&null==T.getDerivedStateFromProps&&m!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(m,M),!h.__e&&(null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(m,h.__s,M)||u.__v===t.__v)){for(u.__v!==t.__v&&(h.props=m,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.forEach(function(n){n&&(n.__=u);}),P=0;P<h._sb.length;P++)h.__h.push(h._sb[P]);h._sb=[],h.__h.length&&f.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(m,h.__s,M),x&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,w,_);});}if(h.context=M,h.props=m,h.__P=n,h.__e=!1,$=l$1.__r,I=0,x){for(h.state=h.__s,h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,$&&$(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++I<25);h.state=h.__s,null!=h.getChildContext&&(i=d(d({},i),h.getChildContext())),x&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,w)),S(n,y(L=null!=a&&a.type===k$1&&null==a.key?a.props.children:a)?L:[L],u,t,i,o,r,f,e,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&f.push(h),g&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=r){for(u.__u|=c?160:32;e&&8===e.nodeType&&e.nextSibling;)e=e.nextSibling;r[r.indexOf(e)]=null,u.__e=e;}else u.__e=t.__e,u.__k=t.__k;l$1.__e(n,u,t);}else null==r&&u.__v===t.__v?(u.__k=t.__k,u.__e=t.__e):u.__e=z$2(t.__e,u,t,i,o,r,f,c,s);(a=l$1.diffed)&&a(u);}function j$2(n,u,t){u.__d=void 0;for(var i=0;i<t.length;i++)N(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function z$2(l,u,t,i,o,r,f,e,c){var s,a,p,v,d,_,g,m=t.props,k=u.props,b=u.type;if("svg"===b?o="http://www.w3.org/2000/svg":"math"===b?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=r)for(s=0;s<r.length;s++)if((d=r[s])&&"setAttribute"in d==!!b&&(b?d.localName===b:3===d.nodeType)){l=d,r[s]=null;break}if(null==l){if(null===b)return document.createTextNode(k);l=document.createElementNS(o,b,k.is&&k),r=null,e=!1;}if(null===b)m===k||e&&l.data===k||(l.data=k);else {if(r=r&&n.call(l.childNodes),m=t.props||h,!e&&null!=r)for(m={},s=0;s<l.attributes.length;s++)m[(d=l.attributes[s]).name]=d.value;for(s in m)if(d=m[s],"children"==s);else if("dangerouslySetInnerHTML"==s)p=d;else if("key"!==s&&!(s in k)){if("value"==s&&"defaultValue"in k||"checked"==s&&"defaultChecked"in k)continue;A$1(l,s,null,d,o);}for(s in k)d=k[s],"children"==s?v=d:"dangerouslySetInnerHTML"==s?a=d:"value"==s?_=d:"checked"==s?g=d:"key"===s||e&&"function"!=typeof d||m[s]===d||A$1(l,s,d,m[s],o);if(a)e||p&&(a.__html===p.__html||a.__html===l.innerHTML)||(l.innerHTML=a.__html),u.__k=[];else if(p&&(l.innerHTML=""),S(l,y(v)?v:[v],u,t,i,"foreignObject"===b?"http://www.w3.org/1999/xhtml":o,r,f,r?r[0]:t.__k&&x(t,0),e,c),null!=r)for(s=r.length;s--;)null!=r[s]&&w$1(r[s]);e||(s="value",void 0!==_&&(_!==l[s]||"progress"===b&&!_||"option"===b&&_!==m[s])&&A$1(l,s,_,m[s],o),s="checked",void 0!==g&&g!==l[s]&&A$1(l,s,g,m[s],o));}return l}function N(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function V$1(n,u,t){var i,o;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||N(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(o=0;o<i.length;o++)i[o]&&V$1(i[o],u,t||"function"!=typeof n.type);t||null==n.__e||w$1(n.__e),n.__c=n.__=n.__e=n.__d=void 0;}function q(n,l,u){return this.constructor(n,u)}function B$2(u,t,i){var o,r,f,e;l$1.__&&l$1.__(u,t),r=(o="function"==typeof i)?null:i&&i.__k||t.__k,f=[],e=[],O$1(t,u=(!o&&i||t).__k=_(k$1,null,[u]),r||h,h,t.namespaceURI,!o&&i?[i]:r?null:t.firstChild?n.call(t.childNodes):null,f,!o&&i?i:r?r.__e:t.firstChild,o,e),j$2(f,u,e);}function D$1(n,l){B$2(n,l,D$1);}function E$1(l,u,t){var i,o,r,f,e=d({},l.props);for(r in l.type&&l.type.defaultProps&&(f=l.type.defaultProps),u)"key"==r?i=u[r]:"ref"==r?o=u[r]:e[r]=void 0===u[r]&&void 0!==f?f[r]:u[r];return arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),g$1(l.type,e,i||l.key,o||l.ref,null)}function G(n,l){var u={__c:l="__cC"+a$1++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,t;return this.getChildContext||(u=[],(t={})[l]=this,this.getChildContext=function(){return t},this.componentWillUnmount=function(){u=null;},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(function(n){n.__e=!0,M$1(n);});},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u&&u.splice(u.indexOf(n),1),l&&l.call(n);};}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n=p.slice,l$1={__e:function(n,l,u,t){for(var i,o,r;l=l.__;)if((i=l.__c)&&!i.__)try{if((o=i.constructor)&&null!=o.getDerivedStateFromError&&(i.setState(o.getDerivedStateFromError(n)),r=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),r=i.__d),r)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,t=function(n){return null!=n&&null==n.constructor},b.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=d({},this.state),"function"==typeof n&&(n=n(d({},u),this.props)),n&&d(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M$1(this));},b.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),M$1(this));},b.prototype.render=k$1,i$1=[],r$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,f$1=function(n,l){return n.__v.__b-l.__v.__b},P$1.__r=0,e$1=0,c$1=F(!1),s$1=F(!0),a$1=0;

  var r,u,i,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function j$1(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z$1),n.__H.__h.forEach(B$1),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n);var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.i=n.__N=void 0;})):(i.__h.forEach(z$1),i.__h.forEach(B$1),i.__h=[],0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j$1)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.i=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z$1),n.__h=n.__h.filter(function(n){return !n.__||B$1(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z$1(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,100);k&&(t=requestAnimationFrame(r));}function z$1(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B$1(n){var t=r;n.__c=n.__(),r=t;}

  function g(n,t){for(var e in t)n[e]=t[e];return n}function E(n,t){for(var e in n)if("__source"!==e&&!(e in t))return !0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return !0;return !1}function C(n,t){this.props=n,this.context=t;}(C.prototype=new b).isPureReactComponent=!0,C.prototype.shouldComponentUpdate=function(n,t){return E(this.props,n)||E(this.state,t)};var R=l$1.__b;l$1.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),R&&R(n);};var M=l$1.__e;l$1.__e=function(n,t,e,r){if(n.then)for(var u,o=t;o=o.__;)if((u=o.__c)&&u.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),u.__c(n,t);M(n,t,e,r);};var T=l$1.unmount;function A(n,t,e){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c();}),n.__c.__H=null),null!=(n=g({},n)).__c&&(n.__c.__P===e&&(n.__c.__P=t),n.__c=null),n.__k=n.__k&&n.__k.map(function(n){return A(n,t,e)})),n}function D(n,t,e){return n&&e&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(n){return D(n,t,e)}),n.__c&&n.__c.__P===t&&(n.__e&&e.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=e)),n}function L(){this.__u=0,this.t=null,this.__b=null;}function O(n){var t=n.__.__c;return t&&t.__a&&t.__a(n)}function U(){this.u=null,this.o=null;}l$1.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&32&n.__u&&(n.type=null),T&&T(n);},(L.prototype=new b).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=O(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(c):c());};e.__R=i;var c=function(){if(!--r.__u){if(r.state.__a){var n=r.state.__a;r.__v.__k[0]=D(n,n.__c.__P,n.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),n.then(i,i);},L.prototype.componentWillUnmount=function(){this.t=[];},L.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var r=document.createElement("div"),o=this.__v.__k[0].__c;this.__v.__k[0]=A(this.__b,r,o.__O=o.__P);}this.__b=null;}var i=e.__a&&_(k$1,null,n.fallback);return i&&(i.__u&=-33),[_(k$1,null,e.__a?null:n.children),i]};var V=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2];}};function W(n){return this.getChildContext=function(){return n.context},n.children}function P(n){var e=this,r=n.i;e.componentWillUnmount=function(){B$2(null,e.l),e.l=null,e.i=null;},e.i&&e.i!==r&&e.componentWillUnmount(),e.l||(e.i=r,e.l={nodeType:1,parentNode:r,childNodes:[],contains:function(){return !0},appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n);},insertBefore:function(n,t){this.childNodes.push(n),e.i.appendChild(n);},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n);}}),B$2(_(W,{context:e.context},n.__v),e.l);}function j(n,e){var r=_(P,{__v:n,i:e});return r.containerInfo=e,r}(U.prototype=new b).__a=function(n){var t=this,e=O(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),V(t,n,r)):u();};e?e(o):o();}},U.prototype.render=function(n){this.u=null,this.o=new Map;var t=H$1(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},U.prototype.componentDidUpdate=U.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){V(n,e,t);});};var z="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,B=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,H=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Z=/[A-Z0-9]/g,Y="undefined"!=typeof document,$=function(n){return ("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/:/fil|che|ra/).test(n)};b.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(t){Object.defineProperty(b.prototype,t,{configurable:!0,get:function(){return this["UNSAFE_"+t]},set:function(n){Object.defineProperty(this,t,{configurable:!0,writable:!0,value:n});}});});var J=l$1.event;function K(){}function Q(){return this.cancelBubble}function X(){return this.defaultPrevented}l$1.event=function(n){return J&&(n=J(n)),n.persist=K,n.isPropagationStopped=Q,n.isDefaultPrevented=X,n.nativeEvent=n};var tn={enumerable:!1,configurable:!0,get:function(){return this.class}},en=l$1.vnode;l$1.vnode=function(n){"string"==typeof n.type&&function(n){var t=n.props,e=n.type,u={};for(var o in t){var i=t[o];if(!("value"===o&&"defaultValue"in t&&null==i||Y&&"children"===o&&"noscript"===e||"class"===o||"className"===o)){var c=o.toLowerCase();"defaultValue"===o&&"value"in t&&null==t.value?o="value":"download"===o&&!0===i?i="":"translate"===c&&"no"===i?i=!1:"ondoubleclick"===c?o="ondblclick":"onchange"!==c||"input"!==e&&"textarea"!==e||$(t.type)?"onfocus"===c?o="onfocusin":"onblur"===c?o="onfocusout":H.test(o)?o=c:-1===e.indexOf("-")&&B.test(o)?o=o.replace(Z,"-$&").toLowerCase():null===i&&(i=void 0):c=o="oninput","oninput"===c&&u[o=c]&&(o="oninputCapture"),u[o]=i;}}"select"==e&&u.multiple&&Array.isArray(u.value)&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=-1!=u.value.indexOf(n.props.value);})),"select"==e&&null!=u.defaultValue&&(u.value=H$1(t.children).forEach(function(n){n.props.selected=u.multiple?-1!=u.defaultValue.indexOf(n.props.value):u.defaultValue==n.props.value;})),t.class&&!t.className?(u.class=t.class,Object.defineProperty(u,"className",tn)):(t.className&&!t.class||t.class&&t.className)&&(u.class=u.className=t.className),n.props=u;}(n),n.$$typeof=z,en&&en(n);};var rn=l$1.__r;l$1.__r=function(n){rn&&rn(n),n.__c;};var un=l$1.diffed;l$1.diffed=function(n){un&&un(n);var t=n.props,e=n.__e;null!=e&&"textarea"===n.type&&"value"in t&&t.value!==e.value&&(e.value=null==t.value?"":t.value);};

  const styleTexts = [];
  const styleEls = new Map();
  function injectStyles(styleText) {
      styleTexts.push(styleText);
      styleEls.forEach((styleEl) => {
          appendStylesTo(styleEl, styleText);
      });
  }
  function ensureElHasStyles(el) {
      if (el.isConnected && // sometimes true if SSR system simulates DOM
          el.getRootNode // sometimes undefined if SSR system simulates DOM
      ) {
          registerStylesRoot(el.getRootNode());
      }
  }
  function registerStylesRoot(rootNode) {
      let styleEl = styleEls.get(rootNode);
      if (!styleEl || !styleEl.isConnected) {
          styleEl = rootNode.querySelector('style[data-fullcalendar]');
          if (!styleEl) {
              styleEl = document.createElement('style');
              styleEl.setAttribute('data-fullcalendar', '');
              const nonce = getNonceValue();
              if (nonce) {
                  styleEl.nonce = nonce;
              }
              const parentEl = rootNode === document ? document.head : rootNode;
              const insertBefore = rootNode === document
                  ? parentEl.querySelector('script,link[rel=stylesheet],link[as=style],style')
                  : parentEl.firstChild;
              parentEl.insertBefore(styleEl, insertBefore);
          }
          styleEls.set(rootNode, styleEl);
          hydrateStylesRoot(styleEl);
      }
  }
  function hydrateStylesRoot(styleEl) {
      for (const styleText of styleTexts) {
          appendStylesTo(styleEl, styleText);
      }
  }
  function appendStylesTo(styleEl, styleText) {
      const { sheet } = styleEl;
      const ruleCnt = sheet.cssRules.length;
      styleText.split('}').forEach((styleStr, i) => {
          styleStr = styleStr.trim();
          if (styleStr) {
              sheet.insertRule(styleStr + '}', ruleCnt + i);
          }
      });
  }
  // nonce
  // -------------------------------------------------------------------------------------------------
  let queriedNonceValue;
  function getNonceValue() {
      if (queriedNonceValue === undefined) {
          queriedNonceValue = queryNonceValue();
      }
      return queriedNonceValue;
  }
  /*
  TODO: discourage meta tag and instead put nonce attribute on placeholder <style> tag
  */
  function queryNonceValue() {
      const metaWithNonce = document.querySelector('meta[name="csp-nonce"]');
      if (metaWithNonce && metaWithNonce.hasAttribute('content')) {
          return metaWithNonce.getAttribute('content');
      }
      const elWithNonce = document.querySelector('script[nonce]');
      if (elWithNonce) {
          return elWithNonce.nonce || '';
      }
      return '';
  }
  // main
  // -------------------------------------------------------------------------------------------------
  if (typeof document !== 'undefined') {
      registerStylesRoot(document);
  }

  var css_248z$4 = ":root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc{display:flex;flex-direction:column;gap:1.5em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-flex-row{display:flex;flex-direction:row}.fc-flex-column{display:flex;flex-direction:column}.fc-grow{flex-grow:1}.fc-basis0,.fc-liquid{flex-basis:0}.fc-liquid{flex-grow:1;min-height:0;min-width:0}.fc-row{display:flex;flex-direction:row}.fc-rowgroup{display:flex;flex-direction:column}.fc-row,.fc-rowdivider,.fc-rowgroup{border-color:var(--fc-border-color);border-style:solid;border-width:1px 0 0}.fc-row:first-child:not(.fc-not-first),.fc-rowdivider+.fc-row,.fc-rowdivider+.fc-rowgroup,.fc-rowdivider:first-child,.fc-rowgroup:first-child,.fc-sticky-header+.fc-row,.fc-sticky-header+.fc-rowgroup{border-top-width:0}.fc-cell,.fc-celldivider{border:0 solid var(--fc-border-color)}.fc-cell{margin:0!important;padding:0!important}.fc-cell-inner{overflow:hidden;white-space:nowrap}.fc-direction-ltr .fc-cell,.fc-direction-ltr .fc-celldivider{border-left-width:1px}.fc-direction-ltr .fc-cell:first-child:not(.fc-not-first),.fc-direction-ltr .fc-celldivider+.fc-cell{border-left-width:0}.fc-direction-ltr .fc-celldivider,.fc-direction-rtl .fc-cell,.fc-direction-rtl .fc-celldivider{border-right-width:1px}.fc-direction-rtl .fc-cell:first-child:not(.fc-not-first),.fc-direction-rtl .fc-celldivider+.fc-cell{border-right-width:0}.fc-direction-rtl .fc-celldivider{border-left-width:1px}.fc-cell:only-child{flex-basis:0;flex-grow:1;min-width:0}.fc-celldivider,.fc-rowdivider{background:var(--fc-neutral-bg-color)}.fc-celldivider{padding-left:2px}.fc-rowdivider{padding-bottom:2px}.fc-rowdivider,.fc-sticky-header{border-bottom-width:1px}.fc-rel{position:relative}.fc-abs{position:absolute}.fc-fill{bottom:0;top:0}.fc-fill,.fc-fill-x{left:0;position:absolute;right:0}.fc-fill-y{bottom:0;position:absolute;top:0}.fc-sticky-y{bottom:0;position:sticky;top:0}.fc-sticky-x{left:0;position:sticky;right:0}.fc-sticky-header{background:var(--fc-page-bg-color);position:sticky;top:0;z-index:9999}.fc-sticky-footer{bottom:0;position:sticky;z-index:9999}.fc-content-box{box-sizing:content-box}.fc-border{border:1px solid var(--fc-border-color)}.fc-offscreen{left:-10000px;position:absolute}.fc-shaded{background-color:var(--fc-neutral-bg-color)}.fc-padding-sm{padding:2px 4px}.fc-padding-md{padding:4px 5px}.fc-padding-lg{padding:8px}.fc-justify-center{justify-content:center}.fc-align-center{align-items:center}.fc-align-start{align-items:flex-start}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-view-harness{position:relative}.fc-view-harness-fixedheight,.fc-view-harness-liquid{display:flex;flex-direction:column}.fc-view-harness-fixedheight>.fc-view,.fc-view-harness-liquid,.fc-view-harness-liquid>.fc-view{flex-basis:0;flex-grow:1;min-height:0}.fc-view-harness-aspectratio>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:\"\";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:\"\";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-event-inner{position:relative;z-index:2}.fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:\"\";left:-20px;position:absolute;right:-20px;top:-20px}.fc-bg-event,.fc-highlight,.fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc-non-business{background:var(--fc-non-business-color)}.fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc-highlight{background:var(--fc-highlight-color)}.fc-day-disabled{background:var(--fc-neutral-bg-color)}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:flex;flex-direction:column;position:relative}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-h-event .fc-event-inner{color:var(--fc-event-text-color);display:flex;flex-direction:row;flex-grow:1;min-width:0}.fc-h-event .fc-event-time,.fc-h-event .fc-event-title{overflow:hidden;white-space:nowrap}.fc-h-event .fc-event-title-outer{display:flex;flex-basis:0;flex-direction:row;flex-grow:1;min-width:0}.fc-h-event .fc-event-title{left:0;position:sticky;right:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc-popover-title{margin:0 2px}.fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}.fc-scroller-nobars{-ms-overflow-style:none;scrollbar-width:none}.fc-scroller-nobars::-webkit-scrollbar{display:none}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url(\"data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\") format(\"truetype\")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:\"\\e900\"}.fc-icon-chevron-right:before{content:\"\\e901\"}.fc-icon-chevrons-left:before{content:\"\\e902\"}.fc-icon-chevrons-right:before{content:\"\\e903\"}.fc-icon-minus-square:before{content:\"\\e904\"}.fc-icon-plus-square:before{content:\"\\e905\"}.fc-icon-x:before{content:\"\\e906\"}.fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc-button{-webkit-appearance:button}.fc-button:not(:disabled){cursor:pointer}.fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-moz-user-select:none;user-select:none;vertical-align:middle}.fc-button:hover{text-decoration:none}.fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc-button:disabled{opacity:.65}.fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc-button-primary:not(:disabled).fc-button-active,.fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc-button-primary:not(:disabled).fc-button-active:focus,.fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc-button-group>.fc-button.fc-button-active,.fc-button-group>.fc-button:active,.fc-button-group>.fc-button:focus,.fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc-toolbar{align-items:center;display:flex;flex-direction:row;gap:.75em;justify-content:space-between}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc-toolbar-chunk{display:flex;flex-direction:row;flex-shrink:0;gap:.75em}.fc-toolbar-title{font-size:1.75em;margin:0;white-space:nowrap}";
  injectStyles(css_248z$4);

  class DelayedRunner {
      constructor(drainedOption) {
          this.drainedOption = drainedOption;
          this.isRunning = false;
          this.isDirty = false;
          this.pauseDepths = {};
          this.timeoutId = 0;
      }
      request(delay) {
          this.isDirty = true;
          if (!this.isPaused()) {
              this.clearTimeout();
              if (delay == null) {
                  this.tryDrain();
              }
              else {
                  this.timeoutId = setTimeout(// NOT OPTIMAL! TODO: look at debounce
                  this.tryDrain.bind(this), delay);
              }
          }
      }
      pause(scope = '') {
          let { pauseDepths } = this;
          pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
          this.clearTimeout();
      }
      resume(scope = '', force) {
          let { pauseDepths } = this;
          if (scope in pauseDepths) {
              if (force) {
                  delete pauseDepths[scope];
              }
              else {
                  pauseDepths[scope] -= 1;
                  let depth = pauseDepths[scope];
                  if (depth <= 0) {
                      delete pauseDepths[scope];
                  }
              }
              this.tryDrain();
          }
      }
      isPaused() {
          return Object.keys(this.pauseDepths).length;
      }
      tryDrain() {
          if (!this.isRunning && !this.isPaused()) {
              this.isRunning = true;
              while (this.isDirty) {
                  this.isDirty = false;
                  this.drained(); // might set isDirty to true again
              }
              this.isRunning = false;
          }
      }
      clear() {
          this.clearTimeout();
          this.isDirty = false;
          this.pauseDepths = {};
      }
      clearTimeout() {
          if (this.timeoutId) {
              clearTimeout(this.timeoutId);
              this.timeoutId = 0;
          }
      }
      drained() {
          if (this.drainedOption) {
              this.drainedOption();
          }
      }
  }

  function removeElement(el) {
      if (el.parentNode) {
          el.parentNode.removeChild(el);
      }
  }
  // Querying
  // ----------------------------------------------------------------------------------------------------------------
  function elementClosest(el, selector) {
      if (el.closest) {
          return el.closest(selector);
          // really bad fallback for IE
          // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
      }
      if (!document.documentElement.contains(el)) {
          return null;
      }
      do {
          if (elementMatches(el, selector)) {
              return el;
          }
          el = (el.parentElement || el.parentNode);
      } while (el !== null && el.nodeType === 1);
      return null;
  }
  function elementMatches(el, selector) {
      let method = el.matches || el.matchesSelector || el.msMatchesSelector;
      return method.call(el, selector);
  }
  // accepts multiple subject els
  // returns a real array. good for methods like forEach
  // TODO: accept the document
  function findElements(container, selector) {
      let containers = container instanceof HTMLElement ? [container] : container;
      let allMatches = [];
      for (let i = 0; i < containers.length; i += 1) {
          let matches = containers[i].querySelectorAll(selector);
          for (let j = 0; j < matches.length; j += 1) {
              allMatches.push(matches[j]);
          }
      }
      return allMatches;
  }
  // accepts multiple subject els
  // only queries direct child elements // TODO: rename to findDirectChildren!
  function findDirectChildren(parent, selector) {
      let parents = parent instanceof HTMLElement ? [parent] : parent;
      let allMatches = [];
      for (let i = 0; i < parents.length; i += 1) {
          let childNodes = parents[i].children; // only ever elements
          for (let j = 0; j < childNodes.length; j += 1) {
              let childNode = childNodes[j];
              if (!selector || elementMatches(childNode, selector)) {
                  allMatches.push(childNode);
              }
          }
      }
      return allMatches;
  }
  // Style
  // ----------------------------------------------------------------------------------------------------------------
  const PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
  function applyStyle(el, props) {
      for (let propName in props) {
          applyStyleProp(el, propName, props[propName]);
      }
  }
  function applyStyleProp(el, name, val) {
      if (val == null) {
          el.style[name] = '';
      }
      else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
          el.style[name] = `${val}px`;
      }
      else {
          el.style[name] = val;
      }
  }
  // Event Handling
  // ----------------------------------------------------------------------------------------------------------------
  // if intercepting bubbled events at the document/window/body level,
  // and want to see originating element (the 'target'), use this util instead
  // of `ev.target` because it goes within web-component boundaries.
  function getEventTargetViaRoot(ev) {
      var _a, _b;
      return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
  }
  // Unique ID for DOM attribute
  let guid$1 = 0;
  function getUniqueDomId() {
      guid$1 += 1;
      return 'fc-dom-' + guid$1;
  }

  // Stops a mouse/touch event from doing it's native browser action
  function preventDefault(ev) {
      ev.preventDefault();
  }
  // Event Delegation
  // ----------------------------------------------------------------------------------------------------------------
  function buildDelegationHandler(selector, handler) {
      return (ev) => {
          let matchedChild = elementClosest(ev.target, selector);
          if (matchedChild) {
              handler.call(matchedChild, ev, matchedChild);
          }
      };
  }
  function listenBySelector(container, eventType, selector, handler) {
      let attachedHandler = buildDelegationHandler(selector, handler);
      container.addEventListener(eventType, attachedHandler);
      return () => {
          container.removeEventListener(eventType, attachedHandler);
      };
  }
  function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
      let currentMatchedChild;
      return listenBySelector(container, 'mouseover', selector, (mouseOverEv, matchedChild) => {
          if (matchedChild !== currentMatchedChild) {
              currentMatchedChild = matchedChild;
              onMouseEnter(mouseOverEv, matchedChild);
              let realOnMouseLeave = (mouseLeaveEv) => {
                  currentMatchedChild = null;
                  onMouseLeave(mouseLeaveEv, matchedChild);
                  matchedChild.removeEventListener('mouseleave', realOnMouseLeave);
              };
              // listen to the next mouseleave, and then unattach
              matchedChild.addEventListener('mouseleave', realOnMouseLeave);
          }
      });
  }
  // Animation
  // ----------------------------------------------------------------------------------------------------------------
  const transitionEventNames = [
      'webkitTransitionEnd',
      'otransitionend',
      'oTransitionEnd',
      'msTransitionEnd',
      'transitionend',
  ];
  // triggered only when the next single subsequent transition finishes
  function whenTransitionDone(el, callback) {
      let realCallback = (ev) => {
          callback(ev);
          transitionEventNames.forEach((eventName) => {
              el.removeEventListener(eventName, realCallback);
          });
      };
      transitionEventNames.forEach((eventName) => {
          el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
      });
  }
  // ARIA workarounds
  // ----------------------------------------------------------------------------------------------------------------
  function createAriaClickAttrs(handler) {
      return Object.assign({ onClick: handler }, createAriaKeyboardAttrs(handler));
  }
  function createAriaKeyboardAttrs(handler) {
      return {
          tabIndex: 0,
          onKeyDown(ev) {
              if (ev.key === 'Enter' || ev.key === ' ') {
                  handler(ev);
                  ev.preventDefault(); // if space, don't scroll down page
              }
          },
      };
  }

  let guidNumber = 0;
  function guid() {
      guidNumber += 1;
      return String(guidNumber);
  }
  /* FullCalendar-specific DOM Utilities
  ----------------------------------------------------------------------------------------------------------------------*/
  // Make the mouse cursor express that an event is not allowed in the current area
  function disableCursor() {
      document.body.classList.add('fc-not-allowed');
  }
  // Returns the mouse cursor to its original look
  function enableCursor() {
      document.body.classList.remove('fc-not-allowed');
  }
  /* Selection
  ----------------------------------------------------------------------------------------------------------------------*/
  function preventSelection(el) {
      el.style.userSelect = 'none';
      el.style.webkitUserSelect = 'none';
      el.addEventListener('selectstart', preventDefault);
  }
  function allowSelection(el) {
      el.style.userSelect = '';
      el.style.webkitUserSelect = '';
      el.removeEventListener('selectstart', preventDefault);
  }
  /* Context Menu
  ----------------------------------------------------------------------------------------------------------------------*/
  function preventContextMenu(el) {
      el.addEventListener('contextmenu', preventDefault);
  }
  function allowContextMenu(el) {
      el.removeEventListener('contextmenu', preventDefault);
  }
  function parseFieldSpecs(input) {
      let specs = [];
      let tokens = [];
      let i;
      let token;
      if (typeof input === 'string') {
          tokens = input.split(/\s*,\s*/);
      }
      else if (typeof input === 'function') {
          tokens = [input];
      }
      else if (Array.isArray(input)) {
          tokens = input;
      }
      for (i = 0; i < tokens.length; i += 1) {
          token = tokens[i];
          if (typeof token === 'string') {
              specs.push(token.charAt(0) === '-' ?
                  { field: token.substring(1), order: -1 } :
                  { field: token, order: 1 });
          }
          else if (typeof token === 'function') {
              specs.push({ func: token });
          }
      }
      return specs;
  }
  function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
      let i;
      let cmp;
      for (i = 0; i < fieldSpecs.length; i += 1) {
          cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
          if (cmp) {
              return cmp;
          }
      }
      return 0;
  }
  function compareByFieldSpec(obj0, obj1, fieldSpec) {
      if (fieldSpec.func) {
          return fieldSpec.func(obj0, obj1);
      }
      return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
          * (fieldSpec.order || 1);
  }
  function flexibleCompare(a, b) {
      if (!a && !b) {
          return 0;
      }
      if (b == null) {
          return -1;
      }
      if (a == null) {
          return 1;
      }
      if (typeof a === 'string' || typeof b === 'string') {
          return String(a).localeCompare(String(b));
      }
      return a - b;
  }
  /* String Utilities
  ----------------------------------------------------------------------------------------------------------------------*/
  function padStart(val, len) {
      let s = String(val);
      return '000'.substr(0, len - s.length) + s;
  }
  function formatWithOrdinals(formatter, args, fallbackText) {
      if (typeof formatter === 'function') {
          return formatter(...args);
      }
      if (typeof formatter === 'string') { // non-blank string
          return args.reduce((str, arg, index) => (str.replace('$' + index, arg || '')), formatter);
      }
      return fallbackText;
  }
  /* Number Utilities
  ----------------------------------------------------------------------------------------------------------------------*/
  function compareNumbers(a, b) {
      return a - b;
  }
  function isInt(n) {
      return n % 1 === 0;
  }

  const INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
  const PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
  // Parsing and Creation
  function createDuration(input, unit) {
      if (typeof input === 'string') {
          return parseString(input);
      }
      if (typeof input === 'object' && input) { // non-null object
          return parseObject(input);
      }
      if (typeof input === 'number') {
          return parseObject({ [unit || 'milliseconds']: input });
      }
      return null;
  }
  function parseString(s) {
      let m = PARSE_RE.exec(s);
      if (m) {
          let sign = m[1] ? -1 : 1;
          return {
              years: 0,
              months: 0,
              days: sign * (m[2] ? parseInt(m[2], 10) : 0),
              milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                  (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                  (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                  (m[6] ? parseInt(m[6], 10) : 0) // ms
              ),
          };
      }
      return null;
  }
  function parseObject(obj) {
      let duration = {
          years: obj.years || obj.year || 0,
          months: obj.months || obj.month || 0,
          days: obj.days || obj.day || 0,
          milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
              (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
              (obj.seconds || obj.second || 0) * 1000 + // seconds
              (obj.milliseconds || obj.millisecond || obj.ms || 0), // ms
      };
      let weeks = obj.weeks || obj.week;
      if (weeks) {
          duration.days += weeks * 7;
          duration.specifiedWeeks = true;
      }
      return duration;
  }
  // Equality
  function durationsEqual(d0, d1) {
      return d0.years === d1.years &&
          d0.months === d1.months &&
          d0.days === d1.days &&
          d0.milliseconds === d1.milliseconds;
  }
  function asCleanDays(dur) {
      if (!dur.years && !dur.months && !dur.milliseconds) {
          return dur.days;
      }
      return 0;
  }
  // Simple Math
  function addDurations(d0, d1) {
      return {
          years: d0.years + d1.years,
          months: d0.months + d1.months,
          days: d0.days + d1.days,
          milliseconds: d0.milliseconds + d1.milliseconds,
      };
  }
  function subtractDurations(d1, d0) {
      return {
          years: d1.years - d0.years,
          months: d1.months - d0.months,
          days: d1.days - d0.days,
          milliseconds: d1.milliseconds - d0.milliseconds,
      };
  }
  function multiplyDuration(d, n) {
      return {
          years: d.years * n,
          months: d.months * n,
          days: d.days * n,
          milliseconds: d.milliseconds * n,
      };
  }
  // Conversions
  // "Rough" because they are based on average-case Gregorian months/years
  function asRoughYears(dur) {
      return asRoughDays(dur) / 365;
  }
  function asRoughMonths(dur) {
      return asRoughDays(dur) / 30;
  }
  function asRoughDays(dur) {
      return asRoughMs(dur) / 864e5;
  }
  function asRoughMinutes(dur) {
      return asRoughMs(dur) / (1000 * 60);
  }
  function asRoughSeconds(dur) {
      return asRoughMs(dur) / 1000;
  }
  function asRoughMs(dur) {
      return dur.years * (365 * 864e5) +
          dur.months * (30 * 864e5) +
          dur.days * 864e5 +
          dur.milliseconds;
  }
  // Advanced Math
  function wholeDivideDurations(numerator, denominator) {
      let res = null;
      for (let i = 0; i < INTERNAL_UNITS.length; i += 1) {
          let unit = INTERNAL_UNITS[i];
          if (denominator[unit]) {
              let localRes = numerator[unit] / denominator[unit];
              if (!isInt(localRes) || (res !== null && res !== localRes)) {
                  return null;
              }
              res = localRes;
          }
          else if (numerator[unit]) {
              // needs to divide by something but can't!
              return null;
          }
      }
      return res;
  }
  function greatestDurationDenominator(dur) {
      let ms = dur.milliseconds;
      if (ms) {
          if (ms % 1000 !== 0) {
              return { unit: 'millisecond', value: ms };
          }
          if (ms % (1000 * 60) !== 0) {
              return { unit: 'second', value: ms / 1000 };
          }
          if (ms % (1000 * 60 * 60) !== 0) {
              return { unit: 'minute', value: ms / (1000 * 60) };
          }
          if (ms) {
              return { unit: 'hour', value: ms / (1000 * 60 * 60) };
          }
      }
      if (dur.days) {
          if (dur.specifiedWeeks && dur.days % 7 === 0) {
              return { unit: 'week', value: dur.days / 7 };
          }
          return { unit: 'day', value: dur.days };
      }
      if (dur.months) {
          return { unit: 'month', value: dur.months };
      }
      if (dur.years) {
          return { unit: 'year', value: dur.years };
      }
      return { unit: 'millisecond', value: 0 };
  }

  // TODO: new util arrayify?
  function removeExact(array, exactVal) {
      let removeCnt = 0;
      let i = 0;
      while (i < array.length) {
          if (array[i] === exactVal) {
              array.splice(i, 1);
              removeCnt += 1;
          }
          else {
              i += 1;
          }
      }
      return removeCnt;
  }
  function isArraysEqual(a0, a1, equalityFunc) {
      if (a0 === a1) {
          return true;
      }
      let len = a0.length;
      let i;
      if (len !== a1.length) { // not array? or not same length?
          return false;
      }
      for (i = 0; i < len; i += 1) {
          if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
              return false;
          }
      }
      return true;
  }

  const DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  // Adding
  function addWeeks(m, n) {
      let a = dateToUtcArray(m);
      a[2] += n * 7;
      return arrayToUtcDate(a);
  }
  function addDays(m, n) {
      let a = dateToUtcArray(m);
      a[2] += n;
      return arrayToUtcDate(a);
  }
  function addMs(m, n) {
      let a = dateToUtcArray(m);
      a[6] += n;
      return arrayToUtcDate(a);
  }
  // Diffing (all return floats)
  // TODO: why not use ranges?
  function diffWeeks(m0, m1) {
      return diffDays(m0, m1) / 7;
  }
  function diffDays(m0, m1) {
      return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
  }
  function diffHours(m0, m1) {
      return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
  }
  function diffMinutes(m0, m1) {
      return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
  }
  function diffSeconds(m0, m1) {
      return (m1.valueOf() - m0.valueOf()) / 1000;
  }
  function diffDayAndTime(m0, m1) {
      let m0day = startOfDay(m0);
      let m1day = startOfDay(m1);
      return {
          years: 0,
          months: 0,
          days: Math.round(diffDays(m0day, m1day)),
          milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf()),
      };
  }
  // Diffing Whole Units
  function diffWholeWeeks(m0, m1) {
      let d = diffWholeDays(m0, m1);
      if (d !== null && d % 7 === 0) {
          return d / 7;
      }
      return null;
  }
  function diffWholeDays(m0, m1) {
      if (timeAsMs(m0) === timeAsMs(m1)) {
          return Math.round(diffDays(m0, m1));
      }
      return null;
  }
  // Start-Of
  function startOfDay(m) {
      return arrayToUtcDate([
          m.getUTCFullYear(),
          m.getUTCMonth(),
          m.getUTCDate(),
      ]);
  }
  function startOfHour(m) {
      return arrayToUtcDate([
          m.getUTCFullYear(),
          m.getUTCMonth(),
          m.getUTCDate(),
          m.getUTCHours(),
      ]);
  }
  function startOfMinute(m) {
      return arrayToUtcDate([
          m.getUTCFullYear(),
          m.getUTCMonth(),
          m.getUTCDate(),
          m.getUTCHours(),
          m.getUTCMinutes(),
      ]);
  }
  function startOfSecond(m) {
      return arrayToUtcDate([
          m.getUTCFullYear(),
          m.getUTCMonth(),
          m.getUTCDate(),
          m.getUTCHours(),
          m.getUTCMinutes(),
          m.getUTCSeconds(),
      ]);
  }
  // Week Computation
  function weekOfYear(marker, dow, doy) {
      let y = marker.getUTCFullYear();
      let w = weekOfGivenYear(marker, y, dow, doy);
      if (w < 1) {
          return weekOfGivenYear(marker, y - 1, dow, doy);
      }
      let nextW = weekOfGivenYear(marker, y + 1, dow, doy);
      if (nextW >= 1) {
          return Math.min(w, nextW);
      }
      return w;
  }
  function weekOfGivenYear(marker, year, dow, doy) {
      let firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
      let dayStart = startOfDay(marker);
      let days = Math.round(diffDays(firstWeekStart, dayStart));
      return Math.floor(days / 7) + 1; // zero-indexed
  }
  // start-of-first-week - start-of-year
  function firstWeekOffset(year, dow, doy) {
      // first-week day -- which january is always in the first week (4 for iso, 1 for other)
      let fwd = 7 + dow - doy;
      // first-week day local weekday -- which local weekday is fwd
      let fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
      return -fwdlw + fwd - 1;
  }
  // Array Conversion
  function dateToLocalArray(date) {
      return [
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
          date.getMilliseconds(),
      ];
  }
  function arrayToLocalDate(a) {
      return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
      a[3] || 0, a[4] || 0, a[5] || 0);
  }
  function dateToUtcArray(date) {
      return [
          date.getUTCFullYear(),
          date.getUTCMonth(),
          date.getUTCDate(),
          date.getUTCHours(),
          date.getUTCMinutes(),
          date.getUTCSeconds(),
          date.getUTCMilliseconds(),
      ];
  }
  function arrayToUtcDate(a) {
      // according to web standards (and Safari), a month index is required.
      // massage if only given a year.
      if (a.length === 1) {
          a = a.concat([0]);
      }
      return new Date(Date.UTC(...a));
  }
  // Other Utils
  function isValidDate(m) {
      return !isNaN(m.valueOf());
  }
  function timeAsMs(m) {
      return m.getUTCHours() * 1000 * 60 * 60 +
          m.getUTCMinutes() * 1000 * 60 +
          m.getUTCSeconds() * 1000 +
          m.getUTCMilliseconds();
  }

  // timeZoneOffset is in minutes
  function buildIsoString(marker, timeZoneOffset, stripZeroTime = false) {
      let s = marker.toISOString();
      s = s.replace('.000', '');
      if (stripZeroTime) {
          s = s.replace('T00:00:00Z', '');
      }
      if (s.length > 10) { // time part wasn't stripped, can add timezone info
          if (timeZoneOffset == null) {
              s = s.replace('Z', '');
          }
          else if (timeZoneOffset !== 0) {
              s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
          }
          // otherwise, its UTC-0 and we want to keep the Z
      }
      return s;
  }
  // formats the date, but with no time part
  // TODO: somehow merge with buildIsoString and stripZeroTime
  // TODO: rename. omit "string"
  function formatDayString(marker) {
      return marker.toISOString().replace(/T.*$/, '');
  }
  function formatIsoMonthStr(marker) {
      return marker.toISOString().match(/^\d{4}-\d{2}/)[0];
  }
  // TODO: use Date::toISOString and use everything after the T?
  function formatIsoTimeString(marker) {
      return padStart(marker.getUTCHours(), 2) + ':' +
          padStart(marker.getUTCMinutes(), 2) + ':' +
          padStart(marker.getUTCSeconds(), 2);
  }
  function formatTimeZoneOffset(minutes, doIso = false) {
      let sign = minutes < 0 ? '-' : '+';
      let abs = Math.abs(minutes);
      let hours = Math.floor(abs / 60);
      let mins = Math.round(abs % 60);
      if (doIso) {
          return `${sign + padStart(hours, 2)}:${padStart(mins, 2)}`;
      }
      return `GMT${sign}${hours}${mins ? `:${padStart(mins, 2)}` : ''}`;
  }

  function memoize(workerFunc, resEquality, teardownFunc) {
      let currentArgs;
      let currentRes;
      return function (...newArgs) {
          if (!currentArgs) {
              currentRes = workerFunc.apply(this, newArgs);
          }
          else if (!isArraysEqual(currentArgs, newArgs)) {
              if (teardownFunc) {
                  teardownFunc(currentRes);
              }
              let res = workerFunc.apply(this, newArgs);
              if (!resEquality || !resEquality(res, currentRes)) {
                  currentRes = res;
              }
          }
          currentArgs = newArgs;
          return currentRes;
      };
  }
  function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
      let currentArg;
      let currentRes;
      return (newArg) => {
          if (!currentArg) {
              currentRes = workerFunc.call(this, newArg);
          }
          else if (!isPropsEqual(currentArg, newArg)) {
              if (teardownFunc) {
                  teardownFunc(currentRes);
              }
              let res = workerFunc.call(this, newArg);
              if (!resEquality || !resEquality(res, currentRes)) {
                  currentRes = res;
              }
          }
          currentArg = newArg;
          return currentRes;
      };
  }
  function memoizeArraylike(// used at all?
  workerFunc, resEquality, teardownFunc) {
      let currentArgSets = [];
      let currentResults = [];
      return (newArgSets) => {
          let currentLen = currentArgSets.length;
          let newLen = newArgSets.length;
          let i = 0;
          for (; i < currentLen; i += 1) {
              if (!newArgSets[i]) { // one of the old sets no longer exists
                  if (teardownFunc) {
                      teardownFunc(currentResults[i]);
                  }
              }
              else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
                  if (teardownFunc) {
                      teardownFunc(currentResults[i]);
                  }
                  let res = workerFunc.apply(this, newArgSets[i]);
                  if (!resEquality || !resEquality(res, currentResults[i])) {
                      currentResults[i] = res;
                  }
              }
          }
          for (; i < newLen; i += 1) {
              currentResults[i] = workerFunc.apply(this, newArgSets[i]);
          }
          currentArgSets = newArgSets;
          currentResults.splice(newLen); // remove excess
          return currentResults;
      };
  }
  function memoizeHashlike(workerFunc, resEquality, teardownFunc) {
      let currentArgHash = {};
      let currentResHash = {};
      return (newArgHash) => {
          let newResHash = {};
          for (let key in newArgHash) {
              if (!currentResHash[key]) {
                  newResHash[key] = workerFunc.apply(this, newArgHash[key]);
              }
              else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
                  if (teardownFunc) {
                      teardownFunc(currentResHash[key]);
                  }
                  let res = workerFunc.apply(this, newArgHash[key]);
                  newResHash[key] = (resEquality && resEquality(res, currentResHash[key]))
                      ? currentResHash[key]
                      : res;
              }
              else {
                  newResHash[key] = currentResHash[key];
              }
          }
          currentArgHash = newArgHash;
          currentResHash = newResHash;
          return newResHash;
      };
  }

  const EXTENDED_SETTINGS_AND_SEVERITIES = {
      week: 3,
      separator: 0,
      omitZeroMinute: 0,
      meridiem: 0,
      omitCommas: 0,
  };
  const STANDARD_DATE_PROP_SEVERITIES = {
      timeZoneName: 7,
      era: 6,
      year: 5,
      month: 4,
      day: 2,
      weekday: 2,
      hour: 1,
      minute: 1,
      second: 1,
  };
  const MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
  const COMMA_RE = /,/g; // we need re for globalness
  const MULTI_SPACE_RE = /\s+/g;
  const LTR_RE = /\u200e/g; // control character
  const UTC_RE = /UTC|GMT/;
  class NativeFormatter {
      constructor(formatSettings) {
          let standardDateProps = {};
          let extendedSettings = {};
          let severity = 0;
          for (let name in formatSettings) {
              if (name in EXTENDED_SETTINGS_AND_SEVERITIES) {
                  extendedSettings[name] = formatSettings[name];
                  severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name], severity);
              }
              else {
                  standardDateProps[name] = formatSettings[name];
                  if (name in STANDARD_DATE_PROP_SEVERITIES) { // TODO: what about hour12? no severity
                      severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name], severity);
                  }
              }
          }
          this.standardDateProps = standardDateProps;
          this.extendedSettings = extendedSettings;
          this.severity = severity;
          this.buildFormattingFunc = memoize(buildFormattingFunc);
      }
      format(date, context) {
          return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
      }
      formatRange(start, end, context, betterDefaultSeparator) {
          let { standardDateProps, extendedSettings } = this;
          let diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
          if (!diffSeverity) {
              return this.format(start, context);
          }
          let biggestUnitForPartial = diffSeverity;
          if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
              (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
              (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
              (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
              biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
          }
          let full0 = this.format(start, context);
          let full1 = this.format(end, context);
          if (full0 === full1) {
              return full0;
          }
          let partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
          let partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
          let partial0 = partialFormattingFunc(start);
          let partial1 = partialFormattingFunc(end);
          let insertion = findCommonInsertion(full0, partial0, full1, partial1);
          let separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
          if (insertion) {
              return insertion.before + partial0 + separator + partial1 + insertion.after;
          }
          return full0 + separator + full1;
      }
      getLargestUnit() {
          switch (this.severity) {
              case 7:
              case 6:
              case 5:
                  return 'year';
              case 4:
                  return 'month';
              case 3:
                  return 'week';
              case 2:
                  return 'day';
              default:
                  return 'time'; // really?
          }
      }
  }
  function buildFormattingFunc(standardDateProps, extendedSettings, context) {
      let standardDatePropCnt = Object.keys(standardDateProps).length;
      if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
          return (date) => (formatTimeZoneOffset(date.timeZoneOffset));
      }
      if (standardDatePropCnt === 0 && extendedSettings.week) {
          return (date) => (formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.weekTextLong, context.locale, extendedSettings.week));
      }
      return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
  }
  function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
      standardDateProps = Object.assign({}, standardDateProps); // copy
      extendedSettings = Object.assign({}, extendedSettings); // copy
      sanitizeSettings(standardDateProps, extendedSettings);
      standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
      let normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
      let zeroFormat; // needed?
      if (extendedSettings.omitZeroMinute) {
          let zeroProps = Object.assign({}, standardDateProps);
          delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
          zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
      }
      return (date) => {
          let { marker } = date;
          let format;
          if (zeroFormat && !marker.getUTCMinutes()) {
              format = zeroFormat;
          }
          else {
              format = normalFormat;
          }
          let s = format.format(marker);
          return postProcess(s, date, standardDateProps, extendedSettings, context);
      };
  }
  function sanitizeSettings(standardDateProps, extendedSettings) {
      // deal with a browser inconsistency where formatting the timezone
      // requires that the hour/minute be present.
      if (standardDateProps.timeZoneName) {
          if (!standardDateProps.hour) {
              standardDateProps.hour = '2-digit';
          }
          if (!standardDateProps.minute) {
              standardDateProps.minute = '2-digit';
          }
      }
      // only support short timezone names
      if (standardDateProps.timeZoneName === 'long') {
          standardDateProps.timeZoneName = 'short';
      }
      // if requesting to display seconds, MUST display minutes
      if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
          delete extendedSettings.omitZeroMinute;
      }
  }
  function postProcess(s, date, standardDateProps, extendedSettings, context) {
      s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
      if (standardDateProps.timeZoneName === 'short') {
          s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
              'UTC' : // important to normalize for IE, which does "GMT"
              formatTimeZoneOffset(date.timeZoneOffset));
      }
      if (extendedSettings.omitCommas) {
          s = s.replace(COMMA_RE, '').trim();
      }
      if (extendedSettings.omitZeroMinute) {
          s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
      }
      // ^ do anything that might create adjacent spaces before this point,
      // because MERIDIEM_RE likes to eat up loading spaces
      if (extendedSettings.meridiem === false) {
          s = s.replace(MERIDIEM_RE, '').trim();
      }
      else if (extendedSettings.meridiem === 'narrow') { // a/p
          s = s.replace(MERIDIEM_RE, (m0, m1) => m1.toLocaleLowerCase());
      }
      else if (extendedSettings.meridiem === 'short') { // am/pm
          s = s.replace(MERIDIEM_RE, (m0, m1) => `${m1.toLocaleLowerCase()}m`);
      }
      else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
          s = s.replace(MERIDIEM_RE, (m0) => m0.toLocaleLowerCase());
      }
      s = s.replace(MULTI_SPACE_RE, ' ');
      s = s.trim();
      return s;
  }
  function injectTzoStr(s, tzoStr) {
      let replaced = false;
      s = s.replace(UTC_RE, () => {
          replaced = true;
          return tzoStr;
      });
      // IE11 doesn't include UTC/GMT in the original string, so append to end
      if (!replaced) {
          s += ` ${tzoStr}`;
      }
      return s;
  }
  function formatWeekNumber(num, weekText, weekTextLong, locale, display) {
      let parts = [];
      if (display === 'long') {
          parts.push(weekTextLong);
      }
      else if (display === 'short' || display === 'narrow') {
          parts.push(weekText);
      }
      if (display === 'long' || display === 'short') {
          parts.push(' ');
      }
      parts.push(locale.simpleNumberFormat.format(num));
      if (locale.options.direction === 'rtl') { // TODO: use control characters instead?
          parts.reverse();
      }
      return parts.join('');
  }
  // Range Formatting Utils
  // 0 = exactly the same
  // 1 = different by time
  // and bigger
  function computeMarkerDiffSeverity(d0, d1, ca) {
      if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
          return 5;
      }
      if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
          return 4;
      }
      if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
          return 2;
      }
      if (timeAsMs(d0) !== timeAsMs(d1)) {
          return 1;
      }
      return 0;
  }
  function computePartialFormattingOptions(options, biggestUnit) {
      let partialOptions = {};
      for (let name in options) {
          if (!(name in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
              STANDARD_DATE_PROP_SEVERITIES[name] <= biggestUnit) {
              partialOptions[name] = options[name];
          }
      }
      return partialOptions;
  }
  function findCommonInsertion(full0, partial0, full1, partial1) {
      let i0 = 0;
      while (i0 < full0.length) {
          let found0 = full0.indexOf(partial0, i0);
          if (found0 === -1) {
              break;
          }
          let before0 = full0.substr(0, found0);
          i0 = found0 + partial0.length;
          let after0 = full0.substr(i0);
          let i1 = 0;
          while (i1 < full1.length) {
              let found1 = full1.indexOf(partial1, i1);
              if (found1 === -1) {
                  break;
              }
              let before1 = full1.substr(0, found1);
              i1 = found1 + partial1.length;
              let after1 = full1.substr(i1);
              if (before0 === before1 && after0 === after1) {
                  return {
                      before: before0,
                      after: after0,
                  };
              }
          }
      }
      return null;
  }

  function expandZonedMarker(dateInfo, calendarSystem) {
      let a = calendarSystem.markerToArray(dateInfo.marker);
      return {
          marker: dateInfo.marker,
          timeZoneOffset: dateInfo.timeZoneOffset,
          array: a,
          year: a[0],
          month: a[1],
          day: a[2],
          hour: a[3],
          minute: a[4],
          second: a[5],
          millisecond: a[6],
      };
  }

  function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
      let startInfo = expandZonedMarker(start, context.calendarSystem);
      let endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
      return {
          date: startInfo,
          start: startInfo,
          end: endInfo,
          timeZone: context.timeZone,
          localeCodes: context.locale.codes,
          defaultSeparator: betterDefaultSeparator || context.defaultSeparator,
      };
  }

  /*
  TODO: fix the terminology of "formatter" vs "formatting func"
  */
  /*
  At the time of instantiation, this object does not know which cmd-formatting system it will use.
  It receives this at the time of formatting, as a setting.
  */
  class CmdFormatter {
      constructor(cmdStr) {
          this.cmdStr = cmdStr;
      }
      format(date, context, betterDefaultSeparator) {
          return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
      }
      formatRange(start, end, context, betterDefaultSeparator) {
          return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
      }
  }

  class FuncFormatter {
      constructor(func) {
          this.func = func;
      }
      format(date, context, betterDefaultSeparator) {
          return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
      }
      formatRange(start, end, context, betterDefaultSeparator) {
          return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
      }
  }

  function createFormatter(input) {
      if (typeof input === 'object' && input) { // non-null object
          return new NativeFormatter(input);
      }
      if (typeof input === 'string') {
          return new CmdFormatter(input);
      }
      if (typeof input === 'function') {
          return new FuncFormatter(input);
      }
      return null;
  }

  // base options
  // ------------
  const BASE_OPTION_REFINERS = {
      navLinkDayClick: identity,
      navLinkWeekClick: identity,
      duration: createDuration,
      bootstrapFontAwesome: identity,
      buttonIcons: identity,
      customButtons: identity,
      defaultAllDayEventDuration: createDuration,
      defaultTimedEventDuration: createDuration,
      nextDayThreshold: createDuration,
      scrollTime: createDuration,
      scrollTimeReset: Boolean,
      slotMinTime: createDuration,
      slotMaxTime: createDuration,
      dayPopoverFormat: createFormatter,
      slotDuration: createDuration,
      snapDuration: createDuration,
      headerToolbar: identity,
      footerToolbar: identity,
      defaultRangeSeparator: String,
      titleRangeSeparator: String,
      forceEventDuration: Boolean,
      dayHeaders: Boolean,
      dayHeaderFormat: createFormatter,
      dayHeaderClassNames: identity,
      dayHeaderContent: identity,
      dayHeaderDidMount: identity,
      dayHeaderWillUnmount: identity,
      dayCellClassNames: identity,
      dayCellContent: identity,
      dayCellDidMount: identity,
      dayCellWillUnmount: identity,
      initialView: String,
      aspectRatio: Number,
      weekends: Boolean,
      weekNumberCalculation: identity,
      weekNumbers: Boolean,
      weekNumberClassNames: identity,
      weekNumberContent: identity,
      weekNumberDidMount: identity,
      weekNumberWillUnmount: identity,
      editable: Boolean,
      viewClassNames: identity,
      viewDidMount: identity,
      viewWillUnmount: identity,
      nowIndicator: Boolean,
      nowIndicatorClassNames: identity,
      nowIndicatorContent: identity,
      nowIndicatorDidMount: identity,
      nowIndicatorWillUnmount: identity,
      showNonCurrentDates: Boolean,
      lazyFetching: Boolean,
      startParam: String,
      endParam: String,
      timeZoneParam: String,
      timeZone: String,
      locales: identity,
      locale: identity,
      themeSystem: String,
      dragRevertDuration: Number,
      dragScroll: Boolean,
      allDayMaintainDuration: Boolean,
      unselectAuto: Boolean,
      dropAccept: identity,
      eventOrder: parseFieldSpecs,
      eventOrderStrict: Boolean,
      longPressDelay: Number,
      eventDragMinDistance: Number,
      expandRows: Boolean,
      height: identity,
      contentHeight: identity,
      direction: String,
      weekNumberFormat: createFormatter,
      eventResizableFromStart: Boolean,
      displayEventTime: Boolean,
      displayEventEnd: Boolean,
      weekText: String,
      weekTextLong: String,
      progressiveEventRendering: Boolean,
      businessHours: identity,
      initialDate: identity,
      now: identity,
      eventDataTransform: identity,
      stickyHeaderDates: identity,
      stickyFooterScrollbar: identity,
      viewHeight: identity,
      defaultAllDay: Boolean,
      eventSourceFailure: identity,
      eventSourceSuccess: identity,
      eventDisplay: String,
      eventStartEditable: Boolean,
      eventDurationEditable: Boolean,
      eventOverlap: identity,
      eventConstraint: identity,
      eventAllow: identity,
      eventBackgroundColor: String,
      eventBorderColor: String,
      eventTextColor: String,
      eventColor: String,
      eventClassNames: identity,
      eventContent: identity,
      eventDidMount: identity,
      eventWillUnmount: identity,
      selectConstraint: identity,
      selectOverlap: identity,
      selectAllow: identity,
      droppable: Boolean,
      unselectCancel: String,
      slotLabelFormat: identity,
      slotLaneClassNames: identity,
      slotLaneContent: identity,
      slotLaneDidMount: identity,
      slotLaneWillUnmount: identity,
      slotLabelClassNames: identity,
      slotLabelContent: identity,
      slotLabelDidMount: identity,
      slotLabelWillUnmount: identity,
      dayMaxEvents: identity,
      dayMaxEventRows: identity,
      dayMinWidth: Number,
      slotLabelInterval: createDuration,
      allDayText: String,
      allDayClassNames: identity,
      allDayContent: identity,
      allDayDidMount: identity,
      allDayWillUnmount: identity,
      slotMinWidth: Number,
      navLinks: Boolean,
      eventTimeFormat: createFormatter,
      rerenderDelay: Number,
      moreLinkText: identity,
      moreLinkHint: identity,
      selectMinDistance: Number,
      selectable: Boolean,
      selectLongPressDelay: Number,
      eventLongPressDelay: Number,
      selectMirror: Boolean,
      eventMaxStack: Number,
      eventMinHeight: Number,
      eventMinWidth: Number,
      eventShortHeight: Number,
      slotEventOverlap: Boolean,
      plugins: identity,
      firstDay: Number,
      dayCount: Number,
      dateAlignment: String,
      dateIncrement: createDuration,
      hiddenDays: identity,
      fixedWeekCount: Boolean,
      validRange: identity,
      visibleRange: identity,
      titleFormat: identity,
      eventInteractive: Boolean,
      // only used by list-view, but languages define the value, so we need it in base options
      noEventsText: String,
      viewHint: identity,
      navLinkHint: identity,
      closeHint: String,
      timeHint: String,
      eventHint: String,
      moreLinkClick: identity,
      moreLinkClassNames: identity,
      moreLinkContent: identity,
      moreLinkDidMount: identity,
      moreLinkWillUnmount: identity,
      monthStartFormat: createFormatter,
      // for connectors
      // (can't be part of plugin system b/c must be provided at runtime)
      handleCustomRendering: identity,
      customRenderingMetaMap: identity,
      customRenderingReplaces: Boolean,
  };
  // do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
  // raw values.
  const BASE_OPTION_DEFAULTS = {
      eventDisplay: 'auto',
      defaultRangeSeparator: ' - ',
      titleRangeSeparator: ' \u2013 ',
      defaultTimedEventDuration: '01:00:00',
      defaultAllDayEventDuration: { day: 1 },
      forceEventDuration: false,
      nextDayThreshold: '00:00:00',
      dayHeaders: true,
      initialView: '',
      aspectRatio: 1.35,
      headerToolbar: {
          start: 'title',
          center: '',
          end: 'today prev,next',
      },
      weekends: true,
      weekNumbers: false,
      weekNumberCalculation: 'local',
      editable: false,
      nowIndicator: false,
      scrollTime: '06:00:00',
      scrollTimeReset: true,
      slotMinTime: '00:00:00',
      slotMaxTime: '24:00:00',
      showNonCurrentDates: true,
      lazyFetching: true,
      startParam: 'start',
      endParam: 'end',
      timeZoneParam: 'timeZone',
      timeZone: 'local',
      locales: [],
      locale: '',
      themeSystem: 'standard',
      dragRevertDuration: 500,
      dragScroll: true,
      allDayMaintainDuration: false,
      unselectAuto: true,
      dropAccept: '*',
      eventOrder: 'start,-duration,allDay,title',
      dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
      longPressDelay: 1000,
      eventDragMinDistance: 5,
      expandRows: false,
      navLinks: false,
      selectable: false,
      eventMinHeight: 15,
      eventMinWidth: 30,
      eventShortHeight: 30,
      monthStartFormat: { month: 'long', day: 'numeric' },
  };
  // calendar listeners
  // ------------------
  const CALENDAR_LISTENER_REFINERS = {
      datesSet: identity,
      eventsSet: identity,
      eventAdd: identity,
      eventChange: identity,
      eventRemove: identity,
      eventClick: identity,
      eventMouseEnter: identity,
      eventMouseLeave: identity,
      select: identity,
      unselect: identity,
      loading: identity,
      // internal
      _unmount: identity,
      _beforeprint: identity,
      _afterprint: identity,
      _noEventDrop: identity,
      _noEventResize: identity,
      _timeScrollRequest: identity,
  };
  // calendar-specific options
  // -------------------------
  const CALENDAR_OPTION_REFINERS = {
      buttonText: identity,
      buttonHints: identity,
      views: identity,
      plugins: identity,
      initialEvents: identity,
      events: identity,
      eventSources: identity,
  };
  const COMPLEX_OPTION_COMPARATORS = {
      headerToolbar: isMaybeObjectsEqual,
      footerToolbar: isMaybeObjectsEqual,
      buttonText: isMaybeObjectsEqual,
      buttonHints: isMaybeObjectsEqual,
      buttonIcons: isMaybeObjectsEqual,
      dateIncrement: isMaybeObjectsEqual,
      plugins: isMaybeArraysEqual,
      events: isMaybeArraysEqual,
      eventSources: isMaybeArraysEqual,
      ['resources']: isMaybeArraysEqual,
  };
  function isMaybeObjectsEqual(a, b) {
      if (typeof a === 'object' && typeof b === 'object' && a && b) { // both non-null objects
          return isPropsEqual(a, b);
      }
      return a === b;
  }
  function isMaybeArraysEqual(a, b) {
      if (Array.isArray(a) && Array.isArray(b)) {
          return isArraysEqual(a, b);
      }
      return a === b;
  }
  // view-specific options
  // ---------------------
  const VIEW_OPTION_REFINERS = {
      type: String,
      component: identity,
      buttonText: String,
      buttonTextKey: String,
      dateProfileGeneratorClass: identity,
      usesMinMaxTime: Boolean,
      classNames: identity,
      content: identity,
      didMount: identity,
      willUnmount: identity,
  };
  // util funcs
  // ----------------------------------------------------------------------------------------------------
  function mergeRawOptions(optionSets) {
      return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
  }
  function refineProps(input, refiners) {
      let refined = {};
      let extra = {};
      for (let propName in refiners) {
          if (propName in input) {
              refined[propName] = refiners[propName](input[propName]);
          }
      }
      for (let propName in input) {
          if (!(propName in refiners)) {
              extra[propName] = input[propName];
          }
      }
      return { refined, extra };
  }
  function identity(raw) {
      return raw;
  }

  const { hasOwnProperty } = Object.prototype;
  // Merges an array of objects into a single object.
  // The second argument allows for an array of property names who's object values will be merged together.
  function mergeProps(propObjs, complexPropsMap) {
      let dest = {};
      if (complexPropsMap) {
          for (let name in complexPropsMap) {
              if (complexPropsMap[name] === isMaybeObjectsEqual) { // implies that it's object-mergeable
                  let complexObjs = [];
                  // collect the trailing object values, stopping when a non-object is discovered
                  for (let i = propObjs.length - 1; i >= 0; i -= 1) {
                      let val = propObjs[i][name];
                      if (typeof val === 'object' && val) { // non-null object
                          complexObjs.unshift(val);
                      }
                      else if (val !== undefined) {
                          dest[name] = val; // if there were no objects, this value will be used
                          break;
                      }
                  }
                  // if the trailing values were objects, use the merged value
                  if (complexObjs.length) {
                      dest[name] = mergeProps(complexObjs);
                  }
              }
          }
      }
      // copy values into the destination, going from last to first
      for (let i = propObjs.length - 1; i >= 0; i -= 1) {
          let props = propObjs[i];
          for (let name in props) {
              if (!(name in dest)) { // if already assigned by previous props or complex props, don't reassign
                  dest[name] = props[name];
              }
          }
      }
      return dest;
  }
  function filterHash(hash, func) {
      let filtered = {};
      for (let key in hash) {
          if (func(hash[key], key)) {
              filtered[key] = hash[key];
          }
      }
      return filtered;
  }
  function mapHash(hash, func) {
      let newHash = {};
      for (let key in hash) {
          newHash[key] = func(hash[key], key);
      }
      return newHash;
  }
  function arrayToHash(a) {
      let hash = {};
      for (let item of a) {
          hash[item] = true;
      }
      return hash;
  }
  // TODO: reassess browser support
  // https://caniuse.com/?search=object.values
  function hashValuesToArray(obj) {
      let a = [];
      for (let key in obj) {
          a.push(obj[key]);
      }
      return a;
  }
  function isPropsEqual(obj0, obj1) {
      if (obj0 === obj1) {
          return true;
      }
      for (let key in obj0) {
          if (hasOwnProperty.call(obj0, key)) {
              if (!(key in obj1)) {
                  return false;
              }
          }
      }
      for (let key in obj1) {
          if (hasOwnProperty.call(obj1, key)) {
              if (obj0[key] !== obj1[key]) {
                  return false;
              }
          }
      }
      return true;
  }
  const HANDLER_RE = /^on[A-Z]/;
  function isNonHandlerPropsEqual(obj0, obj1) {
      const keys = getUnequalProps(obj0, obj1);
      for (let key of keys) {
          if (!HANDLER_RE.test(key)) {
              return false;
          }
      }
      return true;
  }
  function getUnequalProps(obj0, obj1) {
      let keys = [];
      for (let key in obj0) {
          if (hasOwnProperty.call(obj0, key)) {
              if (!(key in obj1)) {
                  keys.push(key);
              }
          }
      }
      for (let key in obj1) {
          if (hasOwnProperty.call(obj1, key)) {
              if (obj0[key] !== obj1[key]) {
                  keys.push(key);
              }
          }
      }
      return keys;
  }
  function compareObjs(oldProps, newProps, equalityFuncs = {}) {
      if (oldProps === newProps) {
          return true;
      }
      for (let key in newProps) {
          if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;
          else {
              return false;
          }
      }
      // check for props that were omitted in the new
      for (let key in oldProps) {
          if (!(key in newProps)) {
              return false;
          }
      }
      return true;
  }
  /*
  assumed "true" equality for handler names like "onReceiveSomething"
  */
  function isObjValsEqual(val0, val1, comparator) {
      if (val0 === val1 || comparator === true) {
          return true;
      }
      if (comparator) {
          return comparator(val0, val1);
      }
      return false;
  }
  function collectFromHash(hash, startIndex = 0, endIndex, step = 1) {
      let res = [];
      if (endIndex == null) {
          endIndex = Object.keys(hash).length;
      }
      for (let i = startIndex; i < endIndex; i += step) {
          let val = hash[i];
          if (val !== undefined) { // will disregard undefined for sparse arrays
              res.push(val);
          }
      }
      return res;
  }

  let calendarSystemClassMap = {};
  function registerCalendarSystem(name, theClass) {
      calendarSystemClassMap[name] = theClass;
  }
  function createCalendarSystem(name) {
      return new calendarSystemClassMap[name]();
  }
  class GregorianCalendarSystem {
      getMarkerYear(d) {
          return d.getUTCFullYear();
      }
      getMarkerMonth(d) {
          return d.getUTCMonth();
      }
      getMarkerDay(d) {
          return d.getUTCDate();
      }
      arrayToMarker(arr) {
          return arrayToUtcDate(arr);
      }
      markerToArray(marker) {
          return dateToUtcArray(marker);
      }
  }
  registerCalendarSystem('gregory', GregorianCalendarSystem);

  const ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
  function parse(str) {
      let m = ISO_RE.exec(str);
      if (m) {
          let marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number(`0.${m[12]}`) * 1000 : 0));
          if (isValidDate(marker)) {
              let timeZoneOffset = null;
              if (m[13]) {
                  timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                      Number(m[18] || 0));
              }
              return {
                  marker,
                  isTimeUnspecified: !m[6],
                  timeZoneOffset,
              };
          }
      }
      return null;
  }

  class DateEnv {
      constructor(settings) {
          let timeZone = this.timeZone = settings.timeZone;
          let isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
          if (settings.namedTimeZoneImpl && isNamedTimeZone) {
              this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
          }
          this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
          this.calendarSystem = createCalendarSystem(settings.calendarSystem);
          this.locale = settings.locale;
          this.weekDow = settings.locale.week.dow;
          this.weekDoy = settings.locale.week.doy;
          if (settings.weekNumberCalculation === 'ISO') {
              this.weekDow = 1;
              this.weekDoy = 4;
          }
          if (typeof settings.firstDay === 'number') {
              this.weekDow = settings.firstDay;
          }
          if (typeof settings.weekNumberCalculation === 'function') {
              this.weekNumberFunc = settings.weekNumberCalculation;
          }
          this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
          this.weekTextLong = (settings.weekTextLong != null ? settings.weekTextLong : settings.locale.options.weekTextLong) || this.weekText;
          this.cmdFormatter = settings.cmdFormatter;
          this.defaultSeparator = settings.defaultSeparator;
      }
      // Creating / Parsing
      createMarker(input) {
          let meta = this.createMarkerMeta(input);
          if (meta === null) {
              return null;
          }
          return meta.marker;
      }
      createNowMarker() {
          if (this.canComputeOffset) {
              return this.timestampToMarker(new Date().valueOf());
          }
          // if we can't compute the current date val for a timezone,
          // better to give the current local date vals than UTC
          return arrayToUtcDate(dateToLocalArray(new Date()));
      }
      createMarkerMeta(input) {
          if (typeof input === 'string') {
              return this.parse(input);
          }
          let marker = null;
          if (typeof input === 'number') {
              marker = this.timestampToMarker(input);
          }
          else if (input instanceof Date) {
              input = input.valueOf();
              if (!isNaN(input)) {
                  marker = this.timestampToMarker(input);
              }
          }
          else if (Array.isArray(input)) {
              marker = arrayToUtcDate(input);
          }
          if (marker === null || !isValidDate(marker)) {
              return null;
          }
          return { marker, isTimeUnspecified: false, forcedTzo: null };
      }
      parse(s) {
          let parts = parse(s);
          if (parts === null) {
              return null;
          }
          let { marker } = parts;
          let forcedTzo = null;
          if (parts.timeZoneOffset !== null) {
              if (this.canComputeOffset) {
                  marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
              }
              else {
                  forcedTzo = parts.timeZoneOffset;
              }
          }
          return { marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo };
      }
      // Accessors
      getYear(marker) {
          return this.calendarSystem.getMarkerYear(marker);
      }
      getMonth(marker) {
          return this.calendarSystem.getMarkerMonth(marker);
      }
      getDay(marker) {
          return this.calendarSystem.getMarkerDay(marker);
      }
      // Adding / Subtracting
      add(marker, dur) {
          let a = this.calendarSystem.markerToArray(marker);
          a[0] += dur.years;
          a[1] += dur.months;
          a[2] += dur.days;
          a[6] += dur.milliseconds;
          return this.calendarSystem.arrayToMarker(a);
      }
      subtract(marker, dur) {
          let a = this.calendarSystem.markerToArray(marker);
          a[0] -= dur.years;
          a[1] -= dur.months;
          a[2] -= dur.days;
          a[6] -= dur.milliseconds;
          return this.calendarSystem.arrayToMarker(a);
      }
      addYears(marker, n) {
          let a = this.calendarSystem.markerToArray(marker);
          a[0] += n;
          return this.calendarSystem.arrayToMarker(a);
      }
      addMonths(marker, n) {
          let a = this.calendarSystem.markerToArray(marker);
          a[1] += n;
          return this.calendarSystem.arrayToMarker(a);
      }
      // Diffing Whole Units
      diffWholeYears(m0, m1) {
          let { calendarSystem } = this;
          if (timeAsMs(m0) === timeAsMs(m1) &&
              calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
              calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
              return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
          }
          return null;
      }
      diffWholeMonths(m0, m1) {
          let { calendarSystem } = this;
          if (timeAsMs(m0) === timeAsMs(m1) &&
              calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
              return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                  (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
          }
          return null;
      }
      // Range / Duration
      greatestWholeUnit(m0, m1) {
          let n = this.diffWholeYears(m0, m1);
          if (n !== null) {
              return { unit: 'year', value: n };
          }
          n = this.diffWholeMonths(m0, m1);
          if (n !== null) {
              return { unit: 'month', value: n };
          }
          n = diffWholeWeeks(m0, m1);
          if (n !== null) {
              return { unit: 'week', value: n };
          }
          n = diffWholeDays(m0, m1);
          if (n !== null) {
              return { unit: 'day', value: n };
          }
          n = diffHours(m0, m1);
          if (isInt(n)) {
              return { unit: 'hour', value: n };
          }
          n = diffMinutes(m0, m1);
          if (isInt(n)) {
              return { unit: 'minute', value: n };
          }
          n = diffSeconds(m0, m1);
          if (isInt(n)) {
              return { unit: 'second', value: n };
          }
          return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
      }
      countDurationsBetween(m0, m1, d) {
          // TODO: can use greatestWholeUnit
          let diff;
          if (d.years) {
              diff = this.diffWholeYears(m0, m1);
              if (diff !== null) {
                  return diff / asRoughYears(d);
              }
          }
          if (d.months) {
              diff = this.diffWholeMonths(m0, m1);
              if (diff !== null) {
                  return diff / asRoughMonths(d);
              }
          }
          if (d.days) {
              diff = diffWholeDays(m0, m1);
              if (diff !== null) {
                  return diff / asRoughDays(d);
              }
          }
          return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
      }
      // Start-Of
      // these DON'T return zoned-dates. only UTC start-of dates
      startOf(m, unit) {
          if (unit === 'year') {
              return this.startOfYear(m);
          }
          if (unit === 'month') {
              return this.startOfMonth(m);
          }
          if (unit === 'week') {
              return this.startOfWeek(m);
          }
          if (unit === 'day') {
              return startOfDay(m);
          }
          if (unit === 'hour') {
              return startOfHour(m);
          }
          if (unit === 'minute') {
              return startOfMinute(m);
          }
          if (unit === 'second') {
              return startOfSecond(m);
          }
          return null;
      }
      startOfYear(m) {
          return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(m),
          ]);
      }
      startOfMonth(m) {
          return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(m),
              this.calendarSystem.getMarkerMonth(m),
          ]);
      }
      startOfWeek(m) {
          return this.calendarSystem.arrayToMarker([
              this.calendarSystem.getMarkerYear(m),
              this.calendarSystem.getMarkerMonth(m),
              m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7),
          ]);
      }
      // Week Number
      computeWeekNumber(marker) {
          if (this.weekNumberFunc) {
              return this.weekNumberFunc(this.toDate(marker));
          }
          return weekOfYear(marker, this.weekDow, this.weekDoy);
      }
      // TODO: choke on timeZoneName: long
      format(marker, formatter, dateOptions = {}) {
          return formatter.format({
              marker,
              timeZoneOffset: dateOptions.forcedTzo != null ?
                  dateOptions.forcedTzo :
                  this.offsetForMarker(marker),
          }, this);
      }
      formatRange(start, end, formatter, dateOptions = {}) {
          if (dateOptions.isEndExclusive) {
              end = addMs(end, -1);
          }
          return formatter.formatRange({
              marker: start,
              timeZoneOffset: dateOptions.forcedStartTzo != null ?
                  dateOptions.forcedStartTzo :
                  this.offsetForMarker(start),
          }, {
              marker: end,
              timeZoneOffset: dateOptions.forcedEndTzo != null ?
                  dateOptions.forcedEndTzo :
                  this.offsetForMarker(end),
          }, this, dateOptions.defaultSeparator);
      }
      /*
      DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
      might as well use buildIsoString or some other util directly
      */
      formatIso(marker, extraOptions = {}) {
          let timeZoneOffset = null;
          if (!extraOptions.omitTimeZoneOffset) {
              if (extraOptions.forcedTzo != null) {
                  timeZoneOffset = extraOptions.forcedTzo;
              }
              else {
                  timeZoneOffset = this.offsetForMarker(marker);
              }
          }
          return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
      }
      // TimeZone
      timestampToMarker(ms) {
          if (this.timeZone === 'local') {
              return arrayToUtcDate(dateToLocalArray(new Date(ms)));
          }
          if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
              return new Date(ms);
          }
          return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
      }
      offsetForMarker(m) {
          if (this.timeZone === 'local') {
              return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
          }
          if (this.timeZone === 'UTC') {
              return 0;
          }
          if (this.namedTimeZoneImpl) {
              return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
          }
          return null;
      }
      // Conversion
      toDate(m, forcedTzo) {
          if (this.timeZone === 'local') {
              return arrayToLocalDate(dateToUtcArray(m));
          }
          if (this.timeZone === 'UTC') {
              return new Date(m.valueOf()); // make sure it's a copy
          }
          if (!this.namedTimeZoneImpl) {
              return new Date(m.valueOf() - (forcedTzo || 0));
          }
          return new Date(m.valueOf() -
              this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
      }
  }

  class Theme {
      constructor(calendarOptions) {
          if (this.iconOverrideOption) {
              this.setIconOverride(calendarOptions[this.iconOverrideOption]);
          }
      }
      setIconOverride(iconOverrideHash) {
          let iconClassesCopy;
          let buttonName;
          if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
              iconClassesCopy = Object.assign({}, this.iconClasses);
              for (buttonName in iconOverrideHash) {
                  iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
              }
              this.iconClasses = iconClassesCopy;
          }
          else if (iconOverrideHash === false) {
              this.iconClasses = {};
          }
      }
      applyIconOverridePrefix(className) {
          let prefix = this.iconOverridePrefix;
          if (prefix && className.indexOf(prefix) !== 0) { // if not already present
              className = prefix + className;
          }
          return className;
      }
      getClass(key) {
          return this.classes[key] || '';
      }
      getIconClass(buttonName, isRtl) {
          let className;
          if (isRtl && this.rtlIconClasses) {
              className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
          }
          else {
              className = this.iconClasses[buttonName];
          }
          if (className) {
              return `${this.baseIconClass} ${className}`;
          }
          return '';
      }
      getCustomButtonIconClass(customButtonProps) {
          let className;
          if (this.iconOverrideCustomButtonOption) {
              className = customButtonProps[this.iconOverrideCustomButtonOption];
              if (className) {
                  return `${this.baseIconClass} ${this.applyIconOverridePrefix(className)}`;
              }
          }
          return '';
      }
  }
  Theme.prototype.classes = {};
  Theme.prototype.iconClasses = {};
  Theme.prototype.baseIconClass = '';
  Theme.prototype.iconOverridePrefix = '';

  /*
  NOTE: this can be a public API, especially createElement for hooks.
  See examples/typescript-scheduler/src/index.ts
  */
  /*
  TODO: rethink this
  */
  function flushSync(runBeforeFlush) {
      runBeforeFlush();
      let oldDebounceRendering = l$1.debounceRendering; // orig
      let callbackQ = [];
      function execCallbackSync(callback) {
          callbackQ.push(callback);
      }
      l$1.debounceRendering = execCallbackSync;
      B$2(_(FakeComponent, {}), document.createElement('div'));
      while (callbackQ.length) {
          callbackQ.shift()();
      }
      l$1.debounceRendering = oldDebounceRendering;
  }
  class FakeComponent extends b {
      render() { return _('div', {}); }
      componentDidMount() { this.setState({}); }
  }
  // TODO: use preact/compat instead?
  function createContext(defaultValue) {
      let ContextType = G(defaultValue);
      let origProvider = ContextType.Provider;
      ContextType.Provider = function () {
          let isNew = !this.getChildContext;
          let children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
          if (isNew) {
              let subs = [];
              this.shouldComponentUpdate = (_props) => {
                  if (this.props.value !== _props.value) {
                      subs.forEach((c) => {
                          c.context = _props.value;
                          c.forceUpdate();
                      });
                  }
              };
              this.sub = (c) => {
                  subs.push(c);
                  let old = c.componentWillUnmount;
                  c.componentWillUnmount = () => {
                      subs.splice(subs.indexOf(c), 1);
                      old && old.call(c);
                  };
              };
          }
          return children;
      };
      return ContextType;
  }

  const ViewContextType = createContext({}); // for Components
  function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
      return {
          dateEnv,
          options: viewOptions,
          pluginHooks,
          emitter,
          dispatch,
          getCurrentData,
          calendarApi,
          viewSpec,
          viewApi,
          dateProfileGenerator,
          theme,
          isRtl: viewOptions.direction === 'rtl',
          registerInteractiveComponent,
          unregisterInteractiveComponent,
      };
  }

  /* eslint max-classes-per-file: off */
  class PureComponent extends b {
      shouldComponentUpdate(nextProps, nextState) {
          if (this.debug) {
              // eslint-disable-next-line no-console
              console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
          }
          return !compareObjs(this.props, nextProps, this.propEquality) ||
              !compareObjs(this.state, nextState, this.stateEquality);
      }
      // HACK for freakin' React StrictMode
      safeSetState(newState) {
          if (!compareObjs(this.state, Object.assign(Object.assign({}, this.state), newState), this.stateEquality)) {
              this.setState(newState);
          }
      }
  }
  PureComponent.addPropsEquality = addPropsEquality;
  PureComponent.addStateEquality = addStateEquality;
  PureComponent.contextType = ViewContextType;
  PureComponent.prototype.propEquality = {};
  PureComponent.prototype.stateEquality = {};
  class BaseComponent extends PureComponent {
  }
  BaseComponent.contextType = ViewContextType;
  function addPropsEquality(propEquality) {
      let hash = Object.create(this.prototype.propEquality);
      Object.assign(hash, propEquality);
      this.prototype.propEquality = hash;
  }
  function addStateEquality(stateEquality) {
      let hash = Object.create(this.prototype.stateEquality);
      Object.assign(hash, stateEquality);
      this.prototype.stateEquality = hash;
  }
  // use other one
  function setRef(ref, current) {
      if (typeof ref === 'function') {
          ref(current);
      }
      else if (ref) {
          // see https://github.com/facebook/react/issues/13029
          ref.current = current;
      }
  }

  class ContentInjector extends BaseComponent {
      constructor() {
          super(...arguments);
          this.id = guid();
          this.queuedDomNodes = [];
          this.currentDomNodes = [];
          this.handleEl = (el) => {
              const { options } = this.context;
              const { generatorName } = this.props;
              if (!options.customRenderingReplaces || !hasCustomRenderingHandler(generatorName, options)) {
                  this.updateElRef(el);
              }
          };
          this.updateElRef = (el) => {
              if (this.props.elRef) {
                  setRef(this.props.elRef, el);
              }
          };
      }
      render() {
          const { props, context } = this;
          const { options } = context;
          const { customGenerator, defaultGenerator, renderProps } = props;
          const attrs = buildElAttrs(props, [], this.handleEl);
          let useDefault = false;
          let innerContent;
          let queuedDomNodes = [];
          let currentGeneratorMeta;
          if (customGenerator != null) {
              const customGeneratorRes = typeof customGenerator === 'function' ?
                  customGenerator(renderProps, _) :
                  customGenerator;
              if (customGeneratorRes === true) {
                  useDefault = true;
              }
              else {
                  const isObject = customGeneratorRes && typeof customGeneratorRes === 'object'; // non-null
                  if (isObject && ('html' in customGeneratorRes)) {
                      attrs.dangerouslySetInnerHTML = { __html: customGeneratorRes.html };
                  }
                  else if (isObject && ('domNodes' in customGeneratorRes)) {
                      queuedDomNodes = Array.prototype.slice.call(customGeneratorRes.domNodes);
                  }
                  else if (isObject
                      ? t(customGeneratorRes) // vdom node
                      : typeof customGeneratorRes !== 'function' // primitive value (like string or number)
                  ) {
                      // use in vdom
                      innerContent = customGeneratorRes;
                  }
                  else {
                      // an exotic object for handleCustomRendering
                      currentGeneratorMeta = customGeneratorRes;
                  }
              }
          }
          else {
              useDefault = !hasCustomRenderingHandler(props.generatorName, options);
          }
          if (useDefault && defaultGenerator) {
              innerContent = defaultGenerator(renderProps);
          }
          this.queuedDomNodes = queuedDomNodes;
          this.currentGeneratorMeta = currentGeneratorMeta;
          return _(props.elTag, attrs, innerContent);
      }
      componentDidMount() {
          this.applyQueueudDomNodes();
          this.triggerCustomRendering(true);
      }
      componentDidUpdate() {
          this.applyQueueudDomNodes();
          this.triggerCustomRendering(true);
      }
      componentWillUnmount() {
          this.triggerCustomRendering(false); // TODO: different API for removal?
      }
      triggerCustomRendering(isActive) {
          var _a;
          const { props, context } = this;
          const { handleCustomRendering, customRenderingMetaMap } = context.options;
          if (handleCustomRendering) {
              const generatorMeta = (_a = this.currentGeneratorMeta) !== null && _a !== void 0 ? _a : customRenderingMetaMap === null || customRenderingMetaMap === void 0 ? void 0 : customRenderingMetaMap[props.generatorName];
              if (generatorMeta) {
                  handleCustomRendering(Object.assign(Object.assign({ id: this.id, isActive, containerEl: this.base, reportNewContainerEl: this.updateElRef, // front-end framework tells us about new container els
                      generatorMeta }, props), { elClasses: (props.elClasses || []).filter(isTruthy) }));
              }
          }
      }
      applyQueueudDomNodes() {
          const { queuedDomNodes, currentDomNodes } = this;
          const el = this.base;
          if (!isArraysEqual(queuedDomNodes, currentDomNodes)) {
              currentDomNodes.forEach(removeElement);
              for (let newNode of queuedDomNodes) {
                  el.appendChild(newNode);
              }
              this.currentDomNodes = queuedDomNodes;
          }
      }
  }
  ContentInjector.addPropsEquality({
      elClasses: isArraysEqual,
      elStyle: isPropsEqual,
      elAttrs: isNonHandlerPropsEqual,
      renderProps: isPropsEqual,
  });
  // Util
  /*
  Does UI-framework provide custom way of rendering that does not use Preact VDOM
  AND does the calendar's options define custom rendering?
  AKA. Should we NOT render the default content?
  */
  function hasCustomRenderingHandler(generatorName, options) {
      var _a;
      return Boolean(options.handleCustomRendering &&
          generatorName &&
          ((_a = options.customRenderingMetaMap) === null || _a === void 0 ? void 0 : _a[generatorName]));
  }
  function buildElAttrs(props, extraClassNames, elRef) {
      const attrs = Object.assign(Object.assign({}, props.elAttrs), { ref: elRef });
      if (props.elClasses || extraClassNames) {
          attrs.className = (props.elClasses || [])
              .concat(extraClassNames || [])
              .concat(attrs.className || [])
              .filter(Boolean)
              .join(' ');
      }
      if (props.elStyle) {
          attrs.style = props.elStyle;
      }
      return attrs;
  }
  function isTruthy(val) {
      return Boolean(val);
  }

  const RenderId = createContext(0);

  class ContentContainer extends b {
      constructor() {
          super(...arguments);
          this.InnerContent = InnerContentInjector.bind(undefined, this);
          this.handleEl = (el) => {
              this.el = el;
              if (this.props.elRef) {
                  setRef(this.props.elRef, el);
                  if (el && this.didMountMisfire) {
                      this.componentDidMount();
                  }
              }
          };
      }
      render() {
          const { props } = this;
          const generatedClassNames = generateClassNames(props.classNameGenerator, props.renderProps);
          if (props.children) {
              const elAttrs = buildElAttrs(props, generatedClassNames, this.handleEl);
              const children = props.children(this.InnerContent, props.renderProps, elAttrs);
              if (props.elTag) {
                  return _(props.elTag, elAttrs, children);
              }
              else {
                  return children;
              }
          }
          else {
              return _((ContentInjector), Object.assign(Object.assign({}, props), { elRef: this.handleEl, elTag: props.elTag || 'div', elClasses: (props.elClasses || []).concat(generatedClassNames), renderId: this.context }));
          }
      }
      componentDidMount() {
          var _a, _b;
          if (this.el) {
              (_b = (_a = this.props).didMount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
          }
          else {
              this.didMountMisfire = true;
          }
      }
      componentWillUnmount() {
          var _a, _b;
          (_b = (_a = this.props).willUnmount) === null || _b === void 0 ? void 0 : _b.call(_a, Object.assign(Object.assign({}, this.props.renderProps), { el: this.el }));
      }
  }
  ContentContainer.contextType = RenderId;
  function InnerContentInjector(containerComponent, props) {
      const parentProps = containerComponent.props;
      return _((ContentInjector), Object.assign({ renderProps: parentProps.renderProps, generatorName: parentProps.generatorName, customGenerator: parentProps.customGenerator, defaultGenerator: parentProps.defaultGenerator, renderId: containerComponent.context }, props));
  }
  // Utils
  function generateClassNames(classNameGenerator, renderProps) {
      const classNames = typeof classNameGenerator === 'function' ?
          classNameGenerator(renderProps) :
          classNameGenerator || [];
      return typeof classNames === 'string' ? [classNames] : classNames;
  }

  class ViewContainer extends BaseComponent {
      render() {
          let { props, context } = this;
          let { options } = context;
          let renderProps = { view: context.viewApi };
          return (_(ContentContainer, Object.assign({}, props, { elTag: props.elTag || 'div', elClasses: [
                  ...buildViewClassNames(props.viewSpec),
                  ...(props.elClasses || []),
              ], renderProps: renderProps, classNameGenerator: options.viewClassNames, generatorName: undefined, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount }), () => props.children));
      }
  }
  function buildViewClassNames(viewSpec) {
      return [
          `fc-${viewSpec.type}-view`,
          'fc-view',
      ];
  }

  function parseRange(input, dateEnv) {
      let start = null;
      let end = null;
      if (input.start) {
          start = dateEnv.createMarker(input.start);
      }
      if (input.end) {
          end = dateEnv.createMarker(input.end);
      }
      if (!start && !end) {
          return null;
      }
      if (start && end && end < start) {
          return null;
      }
      return { start, end };
  }
  // SIDE-EFFECT: will mutate ranges.
  // Will return a new array result.
  function invertRanges(ranges, constraintRange) {
      let invertedRanges = [];
      let { start } = constraintRange; // the end of the previous range. the start of the new range
      let i;
      let dateRange;
      // ranges need to be in order. required for our date-walking algorithm
      ranges.sort(compareRanges);
      for (i = 0; i < ranges.length; i += 1) {
          dateRange = ranges[i];
          // add the span of time before the event (if there is any)
          if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
              invertedRanges.push({ start, end: dateRange.start });
          }
          if (dateRange.end > start) {
              start = dateRange.end;
          }
      }
      // add the span of time after the last event (if there is any)
      if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
          invertedRanges.push({ start, end: constraintRange.end });
      }
      return invertedRanges;
  }
  function compareRanges(range0, range1) {
      return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
  }
  function intersectRanges(range0, range1) {
      let { start, end } = range0;
      let newRange = null;
      if (range1.start !== null) {
          if (start === null) {
              start = range1.start;
          }
          else {
              start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
          }
      }
      if (range1.end != null) {
          if (end === null) {
              end = range1.end;
          }
          else {
              end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
          }
      }
      if (start === null || end === null || start < end) {
          newRange = { start, end };
      }
      return newRange;
  }
  function rangesEqual(range0, range1) {
      return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
          (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
  }
  function rangesIntersect(range0, range1) {
      return (range0.end === null || range1.start === null || range0.end > range1.start) &&
          (range0.start === null || range1.end === null || range0.start < range1.end);
  }
  function rangeContainsRange(outerRange, innerRange) {
      return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
          (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
  }
  function rangeContainsMarker(range, date) {
      return (range.start === null || date >= range.start) &&
          (range.end === null || date < range.end);
  }
  // If the given date is not within the given range, move it inside.
  // (If it's past the end, make it one millisecond before the end).
  function constrainMarkerToRange(date, range) {
      if (range.start != null && date < range.start) {
          return range.start;
      }
      if (range.end != null && date >= range.end) {
          return new Date(range.end.valueOf() - 1);
      }
      return date;
  }

  /* Date stuff that doesn't belong in datelib core
  ----------------------------------------------------------------------------------------------------------------------*/
  // given a timed range, computes an all-day range that has the same exact duration,
  // but whose start time is aligned with the start of the day.
  function computeAlignedDayRange(timedRange) {
      let dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
      let start = startOfDay(timedRange.start);
      let end = addDays(start, dayCnt);
      return { start, end };
  }
  // given a timed range, computes an all-day range based on how for the end date bleeds into the next day
  // TODO: give nextDayThreshold a default arg
  function computeVisibleDayRange(timedRange, nextDayThreshold = createDuration(0)) {
      let startDay = null;
      let endDay = null;
      if (timedRange.end) {
          endDay = startOfDay(timedRange.end);
          let endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
          // If the end time is actually inclusively part of the next day and is equal to or
          // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
          // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
          if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
              endDay = addDays(endDay, 1);
          }
      }
      if (timedRange.start) {
          startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
          // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
          if (endDay && endDay <= startDay) {
              endDay = addDays(startDay, 1);
          }
      }
      return { start: startDay, end: endDay };
  }
  // spans from one day into another?
  function isMultiDayRange(range) {
      let visibleRange = computeVisibleDayRange(range);
      return diffDays(visibleRange.start, visibleRange.end) > 1;
  }
  function diffDates(date0, date1, dateEnv, largeUnit) {
      if (largeUnit === 'year') {
          return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
      }
      if (largeUnit === 'month') {
          return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
      }
      return diffDayAndTime(date0, date1); // returns a duration
  }

  function reduceCurrentDate(currentDate, action) {
      switch (action.type) {
          case 'CHANGE_DATE':
              return action.dateMarker;
          default:
              return currentDate;
      }
  }
  function getInitialDate(options, dateEnv) {
      let initialDateInput = options.initialDate;
      // compute the initial ambig-timezone date
      if (initialDateInput != null) {
          return dateEnv.createMarker(initialDateInput);
      }
      return getNow(options.now, dateEnv); // getNow already returns unzoned
  }
  function getNow(nowInput, dateEnv) {
      if (typeof nowInput === 'function') {
          nowInput = nowInput();
      }
      if (nowInput == null) {
          return dateEnv.createNowMarker();
      }
      return dateEnv.createMarker(nowInput);
  }

  class DateProfileGenerator {
      constructor(props) {
          this.props = props;
          this.nowDate = getNow(props.nowInput, props.dateEnv);
          this.initHiddenDays();
      }
      /* Date Range Computation
      ------------------------------------------------------------------------------------------------------------------*/
      // Builds a structure with info about what the dates/ranges will be for the "prev" view.
      buildPrev(currentDateProfile, currentDate, forceToValid) {
          let { dateEnv } = this.props;
          let prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
          currentDateProfile.dateIncrement);
          return this.build(prevDate, -1, forceToValid);
      }
      // Builds a structure with info about what the dates/ranges will be for the "next" view.
      buildNext(currentDateProfile, currentDate, forceToValid) {
          let { dateEnv } = this.props;
          let nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
          currentDateProfile.dateIncrement);
          return this.build(nextDate, 1, forceToValid);
      }
      // Builds a structure holding dates/ranges for rendering around the given date.
      // Optional direction param indicates whether the date is being incremented/decremented
      // from its previous value. decremented = -1, incremented = 1 (default).
      build(currentDate, direction, forceToValid = true) {
          let { props } = this;
          let validRange;
          let currentInfo;
          let isRangeAllDay;
          let renderRange;
          let activeRange;
          let isValid;
          validRange = this.buildValidRange();
          validRange = this.trimHiddenDays(validRange);
          if (forceToValid) {
              currentDate = constrainMarkerToRange(currentDate, validRange);
          }
          currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
          isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
          renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
          renderRange = this.trimHiddenDays(renderRange);
          activeRange = renderRange;
          if (!props.showNonCurrentDates) {
              activeRange = intersectRanges(activeRange, currentInfo.range);
          }
          activeRange = this.adjustActiveRange(activeRange);
          activeRange = intersectRanges(activeRange, validRange); // might return null
          // it's invalid if the originally requested date is not contained,
          // or if the range is completely outside of the valid range.
          isValid = rangesIntersect(currentInfo.range, validRange);
          // HACK: constrain to render-range so `currentDate` is more useful to view rendering
          if (!rangeContainsMarker(renderRange, currentDate)) {
              currentDate = renderRange.start;
          }
          return {
              currentDate,
              // constraint for where prev/next operations can go and where events can be dragged/resized to.
              // an object with optional start and end properties.
              validRange,
              // range the view is formally responsible for.
              // for example, a month view might have 1st-31st, excluding padded dates
              currentRange: currentInfo.range,
              // name of largest unit being displayed, like "month" or "week"
              currentRangeUnit: currentInfo.unit,
              isRangeAllDay,
              // dates that display events and accept drag-n-drop
              // will be `null` if no dates accept events
              activeRange,
              // date range with a rendered skeleton
              // includes not-active days that need some sort of DOM
              renderRange,
              // Duration object that denotes the first visible time of any given day
              slotMinTime: props.slotMinTime,
              // Duration object that denotes the exclusive visible end time of any given day
              slotMaxTime: props.slotMaxTime,
              isValid,
              // how far the current date will move for a prev/next operation
              dateIncrement: this.buildDateIncrement(currentInfo.duration),
              // pass a fallback (might be null) ^
          };
      }
      // Builds an object with optional start/end properties.
      // Indicates the minimum/maximum dates to display.
      // not responsible for trimming hidden days.
      buildValidRange() {
          let input = this.props.validRangeInput;
          let simpleInput = typeof input === 'function'
              ? input.call(this.props.calendarApi, this.nowDate)
              : input;
          return this.refineRange(simpleInput) ||
              { start: null, end: null }; // completely open-ended
      }
      // Builds a structure with info about the "current" range, the range that is
      // highlighted as being the current month for example.
      // See build() for a description of `direction`.
      // Guaranteed to have `range` and `unit` properties. `duration` is optional.
      buildCurrentRangeInfo(date, direction) {
          let { props } = this;
          let duration = null;
          let unit = null;
          let range = null;
          let dayCount;
          if (props.duration) {
              duration = props.duration;
              unit = props.durationUnit;
              range = this.buildRangeFromDuration(date, direction, duration, unit);
          }
          else if ((dayCount = this.props.dayCount)) {
              unit = 'day';
              range = this.buildRangeFromDayCount(date, direction, dayCount);
          }
          else if ((range = this.buildCustomVisibleRange(date))) {
              unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
          }
          else {
              duration = this.getFallbackDuration();
              unit = greatestDurationDenominator(duration).unit;
              range = this.buildRangeFromDuration(date, direction, duration, unit);
          }
          return { duration, unit, range };
      }
      getFallbackDuration() {
          return createDuration({ day: 1 });
      }
      // Returns a new activeRange to have time values (un-ambiguate)
      // slotMinTime or slotMaxTime causes the range to expand.
      adjustActiveRange(range) {
          let { dateEnv, usesMinMaxTime, slotMinTime, slotMaxTime } = this.props;
          let { start, end } = range;
          if (usesMinMaxTime) {
              // expand active range if slotMinTime is negative (why not when positive?)
              if (asRoughDays(slotMinTime) < 0) {
                  start = startOfDay(start); // necessary?
                  start = dateEnv.add(start, slotMinTime);
              }
              // expand active range if slotMaxTime is beyond one day (why not when negative?)
              if (asRoughDays(slotMaxTime) > 1) {
                  end = startOfDay(end); // necessary?
                  end = addDays(end, -1);
                  end = dateEnv.add(end, slotMaxTime);
              }
          }
          return { start, end };
      }
      // Builds the "current" range when it is specified as an explicit duration.
      // `unit` is the already-computed greatestDurationDenominator unit of duration.
      buildRangeFromDuration(date, direction, duration, unit) {
          let { dateEnv, dateAlignment } = this.props;
          let start;
          let end;
          let res;
          // compute what the alignment should be
          if (!dateAlignment) {
              let { dateIncrement } = this.props;
              if (dateIncrement) {
                  // use the smaller of the two units
                  if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
                      dateAlignment = greatestDurationDenominator(dateIncrement).unit;
                  }
                  else {
                      dateAlignment = unit;
                  }
              }
              else {
                  dateAlignment = unit;
              }
          }
          // if the view displays a single day or smaller
          if (asRoughDays(duration) <= 1) {
              if (this.isHiddenDay(start)) {
                  start = this.skipHiddenDays(start, direction);
                  start = startOfDay(start);
              }
          }
          function computeRes() {
              start = dateEnv.startOf(date, dateAlignment);
              end = dateEnv.add(start, duration);
              res = { start, end };
          }
          computeRes();
          // if range is completely enveloped by hidden days, go past the hidden days
          if (!this.trimHiddenDays(res)) {
              date = this.skipHiddenDays(date, direction);
              computeRes();
          }
          return res;
      }
      // Builds the "current" range when a dayCount is specified.
      buildRangeFromDayCount(date, direction, dayCount) {
          let { dateEnv, dateAlignment } = this.props;
          let runningCount = 0;
          let start = date;
          let end;
          if (dateAlignment) {
              start = dateEnv.startOf(start, dateAlignment);
          }
          start = startOfDay(start);
          start = this.skipHiddenDays(start, direction);
          end = start;
          do {
              end = addDays(end, 1);
              if (!this.isHiddenDay(end)) {
                  runningCount += 1;
              }
          } while (runningCount < dayCount);
          return { start, end };
      }
      // Builds a normalized range object for the "visible" range,
      // which is a way to define the currentRange and activeRange at the same time.
      buildCustomVisibleRange(date) {
          let { props } = this;
          let input = props.visibleRangeInput;
          let simpleInput = typeof input === 'function'
              ? input.call(props.calendarApi, props.dateEnv.toDate(date))
              : input;
          let range = this.refineRange(simpleInput);
          if (range && (range.start == null || range.end == null)) {
              return null;
          }
          return range;
      }
      // Computes the range that will represent the element/cells for *rendering*,
      // but which may have voided days/times.
      // not responsible for trimming hidden days.
      buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
          return currentRange;
      }
      // Compute the duration value that should be added/substracted to the current date
      // when a prev/next operation happens.
      buildDateIncrement(fallback) {
          let { dateIncrement } = this.props;
          let customAlignment;
          if (dateIncrement) {
              return dateIncrement;
          }
          if ((customAlignment = this.props.dateAlignment)) {
              return createDuration(1, customAlignment);
          }
          if (fallback) {
              return fallback;
          }
          return createDuration({ days: 1 });
      }
      refineRange(rangeInput) {
          if (rangeInput) {
              let range = parseRange(rangeInput, this.props.dateEnv);
              if (range) {
                  range = computeVisibleDayRange(range);
              }
              return range;
          }
          return null;
      }
      /* Hidden Days
      ------------------------------------------------------------------------------------------------------------------*/
      // Initializes internal variables related to calculating hidden days-of-week
      initHiddenDays() {
          let hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
          let isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
          let dayCnt = 0;
          let i;
          if (this.props.weekends === false) {
              hiddenDays.push(0, 6); // 0=sunday, 6=saturday
          }
          for (i = 0; i < 7; i += 1) {
              if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                  dayCnt += 1;
              }
          }
          if (!dayCnt) {
              throw new Error('invalid hiddenDays'); // all days were hidden? bad.
          }
          this.isHiddenDayHash = isHiddenDayHash;
      }
      // Remove days from the beginning and end of the range that are computed as hidden.
      // If the whole range is trimmed off, returns null
      trimHiddenDays(range) {
          let { start, end } = range;
          if (start) {
              start = this.skipHiddenDays(start);
          }
          if (end) {
              end = this.skipHiddenDays(end, -1, true);
          }
          if (start == null || end == null || start < end) {
              return { start, end };
          }
          return null;
      }
      // Is the current day hidden?
      // `day` is a day-of-week index (0-6), or a Date (used for UTC)
      isHiddenDay(day) {
          if (day instanceof Date) {
              day = day.getUTCDay();
          }
          return this.isHiddenDayHash[day];
      }
      // Incrementing the current day until it is no longer a hidden day, returning a copy.
      // DOES NOT CONSIDER validRange!
      // If the initial value of `date` is not a hidden day, don't do anything.
      // Pass `isExclusive` as `true` if you are dealing with an end date.
      // `inc` defaults to `1` (increment one day forward each time)
      skipHiddenDays(date, inc = 1, isExclusive = false) {
          while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
              date = addDays(date, inc);
          }
          return date;
      }
  }

  function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
      return {
          instanceId: guid(),
          defId,
          range,
          forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
          forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo,
      };
  }

  function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
      for (let i = 0; i < recurringTypes.length; i += 1) {
          let parsed = recurringTypes[i].parse(refined, dateEnv);
          if (parsed) {
              let { allDay } = refined;
              if (allDay == null) {
                  allDay = defaultAllDay;
                  if (allDay == null) {
                      allDay = parsed.allDayGuess;
                      if (allDay == null) {
                          allDay = false;
                      }
                  }
              }
              return {
                  allDay,
                  duration: parsed.duration,
                  typeData: parsed.typeData,
                  typeId: i,
              };
          }
      }
      return null;
  }
  function expandRecurring(eventStore, framingRange, context) {
      let { dateEnv, pluginHooks, options } = context;
      let { defs, instances } = eventStore;
      // remove existing recurring instances
      // TODO: bad. always expand events as a second step
      instances = filterHash(instances, (instance) => !defs[instance.defId].recurringDef);
      for (let defId in defs) {
          let def = defs[defId];
          if (def.recurringDef) {
              let { duration } = def.recurringDef;
              if (!duration) {
                  duration = def.allDay ?
                      options.defaultAllDayEventDuration :
                      options.defaultTimedEventDuration;
              }
              let starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
              for (let start of starts) {
                  let instance = createEventInstance(defId, {
                      start,
                      end: dateEnv.add(start, duration),
                  });
                  instances[instance.instanceId] = instance;
              }
          }
      }
      return { defs, instances };
  }
  /*
  Event MUST have a recurringDef
  */
  function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
      let typeDef = recurringTypes[eventDef.recurringDef.typeId];
      let markers = typeDef.expand(eventDef.recurringDef.typeData, {
          start: dateEnv.subtract(framingRange.start, duration),
          end: framingRange.end,
      }, dateEnv);
      // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
      if (eventDef.allDay) {
          markers = markers.map(startOfDay);
      }
      return markers;
  }

  const EVENT_NON_DATE_REFINERS = {
      id: String,
      groupId: String,
      title: String,
      url: String,
      interactive: Boolean,
  };
  const EVENT_DATE_REFINERS = {
      start: identity,
      end: identity,
      date: identity,
      allDay: Boolean,
  };
  const EVENT_REFINERS = Object.assign(Object.assign(Object.assign({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
  function parseEvent(raw, eventSource, context, allowOpenRange, refiners = buildEventRefiners(context), defIdMap, instanceIdMap) {
      let { refined, extra } = refineEventDef(raw, context, refiners);
      let defaultAllDay = computeIsDefaultAllDay(eventSource, context);
      let recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
      if (recurringRes) {
          let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context, defIdMap);
          def.recurringDef = {
              typeId: recurringRes.typeId,
              typeData: recurringRes.typeData,
              duration: recurringRes.duration,
          };
          return { def, instance: null };
      }
      let singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
      if (singleRes) {
          let def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context, defIdMap);
          let instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
          if (instanceIdMap && def.publicId && instanceIdMap[def.publicId]) {
              instance.instanceId = instanceIdMap[def.publicId];
          }
          return { def, instance };
      }
      return null;
  }
  function refineEventDef(raw, context, refiners = buildEventRefiners(context)) {
      return refineProps(raw, refiners);
  }
  function buildEventRefiners(context) {
      return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
  }
  /*
  Will NOT populate extendedProps with the leftover properties.
  Will NOT populate date-related props.
  */
  function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context, defIdMap) {
      let def = {
          title: refined.title || '',
          groupId: refined.groupId || '',
          publicId: refined.id || '',
          url: refined.url || '',
          recurringDef: null,
          defId: ((defIdMap && refined.id) ? defIdMap[refined.id] : '') || guid(),
          sourceId,
          allDay,
          hasEnd,
          interactive: refined.interactive,
          ui: createEventUi(refined, context),
          extendedProps: Object.assign(Object.assign({}, (refined.extendedProps || {})), extra),
      };
      for (let memberAdder of context.pluginHooks.eventDefMemberAdders) {
          Object.assign(def, memberAdder(refined));
      }
      // help out EventImpl from having user modify props
      Object.freeze(def.ui.classNames);
      Object.freeze(def.extendedProps);
      return def;
  }
  function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
      let { allDay } = refined;
      let startMeta;
      let startMarker = null;
      let hasEnd = false;
      let endMeta;
      let endMarker = null;
      let startInput = refined.start != null ? refined.start : refined.date;
      startMeta = context.dateEnv.createMarkerMeta(startInput);
      if (startMeta) {
          startMarker = startMeta.marker;
      }
      else if (!allowOpenRange) {
          return null;
      }
      if (refined.end != null) {
          endMeta = context.dateEnv.createMarkerMeta(refined.end);
      }
      if (allDay == null) {
          if (defaultAllDay != null) {
              allDay = defaultAllDay;
          }
          else {
              // fall back to the date props LAST
              allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                  (!endMeta || endMeta.isTimeUnspecified);
          }
      }
      if (allDay && startMarker) {
          startMarker = startOfDay(startMarker);
      }
      if (endMeta) {
          endMarker = endMeta.marker;
          if (allDay) {
              endMarker = startOfDay(endMarker);
          }
          if (startMarker && endMarker <= startMarker) {
              endMarker = null;
          }
      }
      if (endMarker) {
          hasEnd = true;
      }
      else if (!allowOpenRange) {
          hasEnd = context.options.forceEventDuration || false;
          endMarker = context.dateEnv.add(startMarker, allDay ?
              context.options.defaultAllDayEventDuration :
              context.options.defaultTimedEventDuration);
      }
      return {
          allDay,
          hasEnd,
          range: { start: startMarker, end: endMarker },
          forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
          forcedEndTzo: endMeta ? endMeta.forcedTzo : null,
      };
  }
  function computeIsDefaultAllDay(eventSource, context) {
      let res = null;
      if (eventSource) {
          res = eventSource.defaultAllDay;
      }
      if (res == null) {
          res = context.options.defaultAllDay;
      }
      return res;
  }

  function parseEvents(rawEvents, eventSource, context, allowOpenRange, defIdMap, instanceIdMap) {
      let eventStore = createEmptyEventStore();
      let eventRefiners = buildEventRefiners(context);
      for (let rawEvent of rawEvents) {
          let tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners, defIdMap, instanceIdMap);
          if (tuple) {
              eventTupleToStore(tuple, eventStore);
          }
      }
      return eventStore;
  }
  function eventTupleToStore(tuple, eventStore = createEmptyEventStore()) {
      eventStore.defs[tuple.def.defId] = tuple.def;
      if (tuple.instance) {
          eventStore.instances[tuple.instance.instanceId] = tuple.instance;
      }
      return eventStore;
  }
  // retrieves events that have the same groupId as the instance specified by `instanceId`
  // or they are the same as the instance.
  // why might instanceId not be in the store? an event from another calendar?
  function getRelevantEvents(eventStore, instanceId) {
      let instance = eventStore.instances[instanceId];
      if (instance) {
          let def = eventStore.defs[instance.defId];
          // get events/instances with same group
          let newStore = filterEventStoreDefs(eventStore, (lookDef) => isEventDefsGrouped(def, lookDef));
          // add the original
          // TODO: wish we could use eventTupleToStore or something like it
          newStore.defs[def.defId] = def;
          newStore.instances[instance.instanceId] = instance;
          return newStore;
      }
      return createEmptyEventStore();
  }
  function isEventDefsGrouped(def0, def1) {
      return Boolean(def0.groupId && def0.groupId === def1.groupId);
  }
  function createEmptyEventStore() {
      return { defs: {}, instances: {} };
  }
  function mergeEventStores(store0, store1) {
      return {
          defs: Object.assign(Object.assign({}, store0.defs), store1.defs),
          instances: Object.assign(Object.assign({}, store0.instances), store1.instances),
      };
  }
  function filterEventStoreDefs(eventStore, filterFunc) {
      let defs = filterHash(eventStore.defs, filterFunc);
      let instances = filterHash(eventStore.instances, (instance) => (defs[instance.defId] // still exists?
      ));
      return { defs, instances };
  }
  function excludeSubEventStore(master, sub) {
      let { defs, instances } = master;
      let filteredDefs = {};
      let filteredInstances = {};
      for (let defId in defs) {
          if (!sub.defs[defId]) { // not explicitly excluded
              filteredDefs[defId] = defs[defId];
          }
      }
      for (let instanceId in instances) {
          if (!sub.instances[instanceId] && // not explicitly excluded
              filteredDefs[instances[instanceId].defId] // def wasn't filtered away
          ) {
              filteredInstances[instanceId] = instances[instanceId];
          }
      }
      return {
          defs: filteredDefs,
          instances: filteredInstances,
      };
  }

  function normalizeConstraint(input, context) {
      if (Array.isArray(input)) {
          return parseEvents(input, null, context, true); // allowOpenRange=true
      }
      if (typeof input === 'object' && input) { // non-null object
          return parseEvents([input], null, context, true); // allowOpenRange=true
      }
      if (input != null) {
          return String(input);
      }
      return null;
  }

  function parseClassNames(raw) {
      if (Array.isArray(raw)) {
          return raw;
      }
      if (typeof raw === 'string') {
          return raw.split(/\s+/);
      }
      return [];
  }
  function fracToCssDim(frac) {
      return frac * 100 + '%';
  }

  // TODO: better called "EventSettings" or "EventConfig"
  // TODO: move this file into structs
  // TODO: separate constraint/overlap/allow, because selection uses only that, not other props
  const EVENT_UI_REFINERS = {
      display: String,
      editable: Boolean,
      startEditable: Boolean,
      durationEditable: Boolean,
      constraint: identity,
      overlap: identity,
      allow: identity,
      className: parseClassNames,
      classNames: parseClassNames,
      color: String,
      backgroundColor: String,
      borderColor: String,
      textColor: String,
  };
  const EMPTY_EVENT_UI = {
      display: null,
      startEditable: null,
      durationEditable: null,
      constraints: [],
      overlap: null,
      allows: [],
      backgroundColor: '',
      borderColor: '',
      textColor: '',
      classNames: [],
  };
  function createEventUi(refined, context) {
      let constraint = normalizeConstraint(refined.constraint, context);
      return {
          display: refined.display || null,
          startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
          durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
          constraints: constraint != null ? [constraint] : [],
          overlap: refined.overlap != null ? refined.overlap : null,
          allows: refined.allow != null ? [refined.allow] : [],
          backgroundColor: refined.backgroundColor || refined.color || '',
          borderColor: refined.borderColor || refined.color || '',
          textColor: refined.textColor || '',
          classNames: (refined.className || []).concat(refined.classNames || []), // join singular and plural
      };
  }
  // TODO: prevent against problems with <2 args!
  function combineEventUis(uis) {
      return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
  }
  function combineTwoEventUis(item0, item1) {
      return {
          display: item1.display != null ? item1.display : item0.display,
          startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
          durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
          constraints: item0.constraints.concat(item1.constraints),
          overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
          allows: item0.allows.concat(item1.allows),
          backgroundColor: item1.backgroundColor || item0.backgroundColor,
          borderColor: item1.borderColor || item0.borderColor,
          textColor: item1.textColor || item0.textColor,
          classNames: item0.classNames.concat(item1.classNames),
      };
  }

  const EVENT_SOURCE_REFINERS = {
      id: String,
      defaultAllDay: Boolean,
      url: String,
      format: String,
      events: identity,
      eventDataTransform: identity,
      // for any network-related sources
      success: identity,
      failure: identity,
  };
  function parseEventSource(raw, context, refiners = buildEventSourceRefiners(context)) {
      let rawObj;
      if (typeof raw === 'string') {
          rawObj = { url: raw };
      }
      else if (typeof raw === 'function' || Array.isArray(raw)) {
          rawObj = { events: raw };
      }
      else if (typeof raw === 'object' && raw) { // not null
          rawObj = raw;
      }
      if (rawObj) {
          let { refined, extra } = refineProps(rawObj, refiners);
          let metaRes = buildEventSourceMeta(refined, context);
          if (metaRes) {
              return {
                  _raw: raw,
                  isFetching: false,
                  latestFetchId: '',
                  fetchRange: null,
                  defaultAllDay: refined.defaultAllDay,
                  eventDataTransform: refined.eventDataTransform,
                  success: refined.success,
                  failure: refined.failure,
                  publicId: refined.id || '',
                  sourceId: guid(),
                  sourceDefId: metaRes.sourceDefId,
                  meta: metaRes.meta,
                  ui: createEventUi(refined, context),
                  extendedProps: extra,
              };
          }
      }
      return null;
  }
  function buildEventSourceRefiners(context) {
      return Object.assign(Object.assign(Object.assign({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
  }
  function buildEventSourceMeta(raw, context) {
      let defs = context.pluginHooks.eventSourceDefs;
      for (let i = defs.length - 1; i >= 0; i -= 1) { // later-added plugins take precedence
          let def = defs[i];
          let meta = def.parseMeta(raw);
          if (meta) {
              return { sourceDefId: i, meta };
          }
      }
      return null;
  }

  function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
      switch (action.type) {
          case 'RECEIVE_EVENTS': // raw
              return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
          case 'RESET_RAW_EVENTS':
              return resetRawEvents(eventStore, eventSources[action.sourceId], action.rawEvents, dateProfile.activeRange, context);
          case 'ADD_EVENTS': // already parsed, but not expanded
              return addEvent(eventStore, action.eventStore, // new ones
              dateProfile ? dateProfile.activeRange : null, context);
          case 'RESET_EVENTS':
              return action.eventStore;
          case 'MERGE_EVENTS': // already parsed and expanded
              return mergeEventStores(eventStore, action.eventStore);
          case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
          case 'NEXT':
          case 'CHANGE_DATE':
          case 'CHANGE_VIEW_TYPE':
              if (dateProfile) {
                  return expandRecurring(eventStore, dateProfile.activeRange, context);
              }
              return eventStore;
          case 'REMOVE_EVENTS':
              return excludeSubEventStore(eventStore, action.eventStore);
          case 'REMOVE_EVENT_SOURCE':
              return excludeEventsBySourceId(eventStore, action.sourceId);
          case 'REMOVE_ALL_EVENT_SOURCES':
              return filterEventStoreDefs(eventStore, (eventDef) => (!eventDef.sourceId // only keep events with no source id
              ));
          case 'REMOVE_ALL_EVENTS':
              return createEmptyEventStore();
          default:
              return eventStore;
      }
  }
  function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
      if (eventSource && // not already removed
          fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
      ) {
          let subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
          if (fetchRange) {
              subset = expandRecurring(subset, fetchRange, context);
          }
          return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
      }
      return eventStore;
  }
  function resetRawEvents(existingEventStore, eventSource, rawEvents, activeRange, context) {
      const { defIdMap, instanceIdMap } = buildPublicIdMaps(existingEventStore);
      let newEventStore = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context, false, defIdMap, instanceIdMap);
      return expandRecurring(newEventStore, activeRange, context);
  }
  function transformRawEvents(rawEvents, eventSource, context) {
      let calEachTransform = context.options.eventDataTransform;
      let sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
      if (sourceEachTransform) {
          rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
      }
      if (calEachTransform) {
          rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
      }
      return rawEvents;
  }
  function transformEachRawEvent(rawEvents, func) {
      let refinedEvents;
      if (!func) {
          refinedEvents = rawEvents;
      }
      else {
          refinedEvents = [];
          for (let rawEvent of rawEvents) {
              let refinedEvent = func(rawEvent);
              if (refinedEvent) {
                  refinedEvents.push(refinedEvent);
              }
              else if (refinedEvent == null) {
                  refinedEvents.push(rawEvent);
              } // if a different falsy value, do nothing
          }
      }
      return refinedEvents;
  }
  function addEvent(eventStore, subset, expandRange, context) {
      if (expandRange) {
          subset = expandRecurring(subset, expandRange, context);
      }
      return mergeEventStores(eventStore, subset);
  }
  function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
      let { defs } = eventStore;
      let instances = mapHash(eventStore.instances, (instance) => {
          let def = defs[instance.defId];
          if (def.allDay) {
              return instance; // isn't dependent on timezone
          }
          return Object.assign(Object.assign({}, instance), { range: {
                  start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                  end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo)),
              }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
      });
      return { defs, instances };
  }
  function excludeEventsBySourceId(eventStore, sourceId) {
      return filterEventStoreDefs(eventStore, (eventDef) => eventDef.sourceId !== sourceId);
  }
  // QUESTION: why not just return instances? do a general object-property-exclusion util
  function excludeInstances(eventStore, removals) {
      return {
          defs: eventStore.defs,
          instances: filterHash(eventStore.instances, (instance) => !removals[instance.instanceId]),
      };
  }
  function buildPublicIdMaps(eventStore) {
      const { defs, instances } = eventStore;
      const defIdMap = {};
      const instanceIdMap = {};
      for (let defId in defs) {
          const def = defs[defId];
          const { publicId } = def;
          if (publicId) {
              defIdMap[publicId] = defId;
          }
      }
      for (let instanceId in instances) {
          const instance = instances[instanceId];
          const def = defs[instance.defId];
          const { publicId } = def;
          if (publicId) {
              instanceIdMap[publicId] = instanceId;
          }
      }
      return { defIdMap, instanceIdMap };
  }

  class Emitter {
      constructor() {
          this.handlers = {};
          this.thisContext = null;
      }
      setThisContext(thisContext) {
          this.thisContext = thisContext;
      }
      setOptions(options) {
          this.options = options;
      }
      on(type, handler) {
          addToHash(this.handlers, type, handler);
      }
      off(type, handler) {
          removeFromHash(this.handlers, type, handler);
      }
      trigger(type, ...args) {
          let attachedHandlers = this.handlers[type] || [];
          let optionHandler = this.options && this.options[type];
          let handlers = [].concat(optionHandler || [], attachedHandlers);
          for (let handler of handlers) {
              handler.apply(this.thisContext, args);
          }
      }
      hasHandlers(type) {
          return Boolean((this.handlers[type] && this.handlers[type].length) ||
              (this.options && this.options[type]));
      }
  }
  function addToHash(hash, type, handler) {
      (hash[type] || (hash[type] = []))
          .push(handler);
  }
  function removeFromHash(hash, type, handler) {
      if (handler) {
          if (hash[type]) {
              hash[type] = hash[type].filter((func) => func !== handler);
          }
      }
      else {
          delete hash[type]; // remove all handler funcs for this type
      }
  }

  const DEF_DEFAULTS = {
      startTime: '09:00',
      endTime: '17:00',
      daysOfWeek: [1, 2, 3, 4, 5],
      display: 'inverse-background',
      classNames: 'fc-non-business',
      groupId: '_businessHours', // so multiple defs get grouped
  };
  /*
  TODO: pass around as EventDefHash!!!
  */
  function parseBusinessHours(input, context) {
      return parseEvents(refineInputs(input), null, context);
  }
  function refineInputs(input) {
      let rawDefs;
      if (input === true) {
          rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
      }
      else if (Array.isArray(input)) {
          // if specifying an array, every sub-definition NEEDS a day-of-week
          rawDefs = input.filter((rawDef) => rawDef.daysOfWeek);
      }
      else if (typeof input === 'object' && input) { // non-null object
          rawDefs = [input];
      }
      else { // is probably false
          rawDefs = [];
      }
      rawDefs = rawDefs.map((rawDef) => (Object.assign(Object.assign({}, DEF_DEFAULTS), rawDef)));
      return rawDefs;
  }

  function triggerDateSelect(selection, pev, context) {
      context.emitter.trigger('select', Object.assign(Object.assign({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
  }
  function triggerDateUnselect(pev, context) {
      context.emitter.trigger('unselect', {
          jsEvent: pev ? pev.origEvent : null,
          view: context.viewApi || context.calendarApi.view,
      });
  }
  function buildDateSpanApiWithContext(dateSpan, context) {
      let props = {};
      for (let transform of context.pluginHooks.dateSpanTransforms) {
          Object.assign(props, transform(dateSpan, context));
      }
      Object.assign(props, buildDateSpanApi(dateSpan, context.dateEnv));
      return props;
  }
  // Given an event's allDay status and start date, return what its fallback end date should be.
  // TODO: rename to computeDefaultEventEnd
  function getDefaultEventEnd(allDay, marker, context) {
      let { dateEnv, options } = context;
      let end = marker;
      if (allDay) {
          end = startOfDay(end);
          end = dateEnv.add(end, options.defaultAllDayEventDuration);
      }
      else {
          end = dateEnv.add(end, options.defaultTimedEventDuration);
      }
      return end;
  }

  // applies the mutation to ALL defs/instances within the event store
  function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
      let eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
      let dest = createEmptyEventStore();
      for (let defId in eventStore.defs) {
          let def = eventStore.defs[defId];
          dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
      }
      for (let instanceId in eventStore.instances) {
          let instance = eventStore.instances[instanceId];
          let def = dest.defs[instance.defId]; // important to grab the newly modified def
          dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
      }
      return dest;
  }
  function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
      let standardProps = mutation.standardProps || {};
      // if hasEnd has not been specified, guess a good value based on deltas.
      // if duration will change, there's no way the default duration will persist,
      // and thus, we need to mark the event as having a real end
      if (standardProps.hasEnd == null &&
          eventConfig.durationEditable &&
          (mutation.startDelta || mutation.endDelta)) {
          standardProps.hasEnd = true; // TODO: is this mutation okay?
      }
      let copy = Object.assign(Object.assign(Object.assign({}, eventDef), standardProps), { ui: Object.assign(Object.assign({}, eventDef.ui), standardProps.ui) });
      if (mutation.extendedProps) {
          copy.extendedProps = Object.assign(Object.assign({}, copy.extendedProps), mutation.extendedProps);
      }
      for (let applier of context.pluginHooks.eventDefMutationAppliers) {
          applier(copy, mutation, context);
      }
      if (!copy.hasEnd && context.options.forceEventDuration) {
          copy.hasEnd = true;
      }
      return copy;
  }
  function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
  eventConfig, mutation, context) {
      let { dateEnv } = context;
      let forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
      let clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
      let copy = Object.assign({}, eventInstance);
      if (forceAllDay) {
          copy.range = computeAlignedDayRange(copy.range);
      }
      if (mutation.datesDelta && eventConfig.startEditable) {
          copy.range = {
              start: dateEnv.add(copy.range.start, mutation.datesDelta),
              end: dateEnv.add(copy.range.end, mutation.datesDelta),
          };
      }
      if (mutation.startDelta && eventConfig.durationEditable) {
          copy.range = {
              start: dateEnv.add(copy.range.start, mutation.startDelta),
              end: copy.range.end,
          };
      }
      if (mutation.endDelta && eventConfig.durationEditable) {
          copy.range = {
              start: copy.range.start,
              end: dateEnv.add(copy.range.end, mutation.endDelta),
          };
      }
      if (clearEnd) {
          copy.range = {
              start: copy.range.start,
              end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context),
          };
      }
      // in case event was all-day but the supplied deltas were not
      // better util for this?
      if (eventDef.allDay) {
          copy.range = {
              start: startOfDay(copy.range.start),
              end: startOfDay(copy.range.end),
          };
      }
      // handle invalid durations
      if (copy.range.end < copy.range.start) {
          copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
      }
      return copy;
  }

  class EventSourceImpl {
      constructor(context, internalEventSource) {
          this.context = context;
          this.internalEventSource = internalEventSource;
      }
      remove() {
          this.context.dispatch({
              type: 'REMOVE_EVENT_SOURCE',
              sourceId: this.internalEventSource.sourceId,
          });
      }
      refetch() {
          this.context.dispatch({
              type: 'FETCH_EVENT_SOURCES',
              sourceIds: [this.internalEventSource.sourceId],
              isRefetch: true,
          });
      }
      get id() {
          return this.internalEventSource.publicId;
      }
      get url() {
          return this.internalEventSource.meta.url;
      }
      get format() {
          return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
      }
  }

  class EventImpl {
      // instance will be null if expressing a recurring event that has no current instances,
      // OR if trying to validate an incoming external event that has no dates assigned
      constructor(context, def, instance) {
          this._context = context;
          this._def = def;
          this._instance = instance || null;
      }
      /*
      TODO: make event struct more responsible for this
      */
      setProp(name, val) {
          if (name in EVENT_DATE_REFINERS) {
              console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
              // TODO: make proper aliasing system?
          }
          else if (name === 'id') {
              val = EVENT_NON_DATE_REFINERS[name](val);
              this.mutate({
                  standardProps: { publicId: val }, // hardcoded internal name
              });
          }
          else if (name in EVENT_NON_DATE_REFINERS) {
              val = EVENT_NON_DATE_REFINERS[name](val);
              this.mutate({
                  standardProps: { [name]: val },
              });
          }
          else if (name in EVENT_UI_REFINERS) {
              let ui = EVENT_UI_REFINERS[name](val);
              if (name === 'color') {
                  ui = { backgroundColor: val, borderColor: val };
              }
              else if (name === 'editable') {
                  ui = { startEditable: val, durationEditable: val };
              }
              else {
                  ui = { [name]: val };
              }
              this.mutate({
                  standardProps: { ui },
              });
          }
          else {
              console.warn(`Could not set prop '${name}'. Use setExtendedProp instead.`);
          }
      }
      setExtendedProp(name, val) {
          this.mutate({
              extendedProps: { [name]: val },
          });
      }
      setStart(startInput, options = {}) {
          let { dateEnv } = this._context;
          let start = dateEnv.createMarker(startInput);
          if (start && this._instance) { // TODO: warning if parsed bad
              let instanceRange = this._instance.range;
              let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
              if (options.maintainDuration) {
                  this.mutate({ datesDelta: startDelta });
              }
              else {
                  this.mutate({ startDelta });
              }
          }
      }
      setEnd(endInput, options = {}) {
          let { dateEnv } = this._context;
          let end;
          if (endInput != null) {
              end = dateEnv.createMarker(endInput);
              if (!end) {
                  return; // TODO: warning if parsed bad
              }
          }
          if (this._instance) {
              if (end) {
                  let endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                  this.mutate({ endDelta });
              }
              else {
                  this.mutate({ standardProps: { hasEnd: false } });
              }
          }
      }
      setDates(startInput, endInput, options = {}) {
          let { dateEnv } = this._context;
          let standardProps = { allDay: options.allDay };
          let start = dateEnv.createMarker(startInput);
          let end;
          if (!start) {
              return; // TODO: warning if parsed bad
          }
          if (endInput != null) {
              end = dateEnv.createMarker(endInput);
              if (!end) { // TODO: warning if parsed bad
                  return;
              }
          }
          if (this._instance) {
              let instanceRange = this._instance.range;
              // when computing the diff for an event being converted to all-day,
              // compute diff off of the all-day values the way event-mutation does.
              if (options.allDay === true) {
                  instanceRange = computeAlignedDayRange(instanceRange);
              }
              let startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
              if (end) {
                  let endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                  if (durationsEqual(startDelta, endDelta)) {
                      this.mutate({ datesDelta: startDelta, standardProps });
                  }
                  else {
                      this.mutate({ startDelta, endDelta, standardProps });
                  }
              }
              else { // means "clear the end"
                  standardProps.hasEnd = false;
                  this.mutate({ datesDelta: startDelta, standardProps });
              }
          }
      }
      moveStart(deltaInput) {
          let delta = createDuration(deltaInput);
          if (delta) { // TODO: warning if parsed bad
              this.mutate({ startDelta: delta });
          }
      }
      moveEnd(deltaInput) {
          let delta = createDuration(deltaInput);
          if (delta) { // TODO: warning if parsed bad
              this.mutate({ endDelta: delta });
          }
      }
      moveDates(deltaInput) {
          let delta = createDuration(deltaInput);
          if (delta) { // TODO: warning if parsed bad
              this.mutate({ datesDelta: delta });
          }
      }
      setAllDay(allDay, options = {}) {
          let standardProps = { allDay };
          let { maintainDuration } = options;
          if (maintainDuration == null) {
              maintainDuration = this._context.options.allDayMaintainDuration;
          }
          if (this._def.allDay !== allDay) {
              standardProps.hasEnd = maintainDuration;
          }
          this.mutate({ standardProps });
      }
      formatRange(formatInput) {
          let { dateEnv } = this._context;
          let instance = this._instance;
          let formatter = createFormatter(formatInput);
          if (this._def.hasEnd) {
              return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                  forcedStartTzo: instance.forcedStartTzo,
                  forcedEndTzo: instance.forcedEndTzo,
              });
          }
          return dateEnv.format(instance.range.start, formatter, {
              forcedTzo: instance.forcedStartTzo,
          });
      }
      mutate(mutation) {
          let instance = this._instance;
          if (instance) {
              let def = this._def;
              let context = this._context;
              let { eventStore } = context.getCurrentData();
              let relevantEvents = getRelevantEvents(eventStore, instance.instanceId);
              let eventConfigBase = {
                  '': {
                      display: '',
                      startEditable: true,
                      durationEditable: true,
                      constraints: [],
                      overlap: null,
                      allows: [],
                      backgroundColor: '',
                      borderColor: '',
                      textColor: '',
                      classNames: [],
                  },
              };
              relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context);
              let oldEvent = new EventImpl(context, def, instance); // snapshot
              this._def = relevantEvents.defs[def.defId];
              this._instance = relevantEvents.instances[instance.instanceId];
              context.dispatch({
                  type: 'MERGE_EVENTS',
                  eventStore: relevantEvents,
              });
              context.emitter.trigger('eventChange', {
                  oldEvent,
                  event: this,
                  relatedEvents: buildEventApis(relevantEvents, context, instance),
                  revert() {
                      context.dispatch({
                          type: 'RESET_EVENTS',
                          eventStore, // the ORIGINAL store
                      });
                  },
              });
          }
      }
      remove() {
          let context = this._context;
          let asStore = eventApiToStore(this);
          context.dispatch({
              type: 'REMOVE_EVENTS',
              eventStore: asStore,
          });
          context.emitter.trigger('eventRemove', {
              event: this,
              relatedEvents: [],
              revert() {
                  context.dispatch({
                      type: 'MERGE_EVENTS',
                      eventStore: asStore,
                  });
              },
          });
      }
      get source() {
          let { sourceId } = this._def;
          if (sourceId) {
              return new EventSourceImpl(this._context, this._context.getCurrentData().eventSources[sourceId]);
          }
          return null;
      }
      get start() {
          return this._instance ?
              this._context.dateEnv.toDate(this._instance.range.start) :
              null;
      }
      get end() {
          return (this._instance && this._def.hasEnd) ?
              this._context.dateEnv.toDate(this._instance.range.end) :
              null;
      }
      get startStr() {
          let instance = this._instance;
          if (instance) {
              return this._context.dateEnv.formatIso(instance.range.start, {
                  omitTime: this._def.allDay,
                  forcedTzo: instance.forcedStartTzo,
              });
          }
          return '';
      }
      get endStr() {
          let instance = this._instance;
          if (instance && this._def.hasEnd) {
              return this._context.dateEnv.formatIso(instance.range.end, {
                  omitTime: this._def.allDay,
                  forcedTzo: instance.forcedEndTzo,
              });
          }
          return '';
      }
      // computable props that all access the def
      // TODO: find a TypeScript-compatible way to do this at scale
      get id() { return this._def.publicId; }
      get groupId() { return this._def.groupId; }
      get allDay() { return this._def.allDay; }
      get title() { return this._def.title; }
      get url() { return this._def.url; }
      get display() { return this._def.ui.display || 'auto'; } // bad. just normalize the type earlier
      get startEditable() { return this._def.ui.startEditable; }
      get durationEditable() { return this._def.ui.durationEditable; }
      get constraint() { return this._def.ui.constraints[0] || null; }
      get overlap() { return this._def.ui.overlap; }
      get allow() { return this._def.ui.allows[0] || null; }
      get backgroundColor() { return this._def.ui.backgroundColor; }
      get borderColor() { return this._def.ui.borderColor; }
      get textColor() { return this._def.ui.textColor; }
      // NOTE: user can't modify these because Object.freeze was called in event-def parsing
      get classNames() { return this._def.ui.classNames; }
      get extendedProps() { return this._def.extendedProps; }
      toPlainObject(settings = {}) {
          let def = this._def;
          let { ui } = def;
          let { startStr, endStr } = this;
          let res = {
              allDay: def.allDay,
          };
          if (def.title) {
              res.title = def.title;
          }
          if (startStr) {
              res.start = startStr;
          }
          if (endStr) {
              res.end = endStr;
          }
          if (def.publicId) {
              res.id = def.publicId;
          }
          if (def.groupId) {
              res.groupId = def.groupId;
          }
          if (def.url) {
              res.url = def.url;
          }
          if (ui.display && ui.display !== 'auto') {
              res.display = ui.display;
          }
          // TODO: what about recurring-event properties???
          // TODO: include startEditable/durationEditable/constraint/overlap/allow
          if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
              res.color = ui.backgroundColor;
          }
          else {
              if (ui.backgroundColor) {
                  res.backgroundColor = ui.backgroundColor;
              }
              if (ui.borderColor) {
                  res.borderColor = ui.borderColor;
              }
          }
          if (ui.textColor) {
              res.textColor = ui.textColor;
          }
          if (ui.classNames.length) {
              res.classNames = ui.classNames;
          }
          if (Object.keys(def.extendedProps).length) {
              if (settings.collapseExtendedProps) {
                  Object.assign(res, def.extendedProps);
              }
              else {
                  res.extendedProps = def.extendedProps;
              }
          }
          return res;
      }
      toJSON() {
          return this.toPlainObject();
      }
  }
  function eventApiToStore(eventApi) {
      let def = eventApi._def;
      let instance = eventApi._instance;
      return {
          defs: { [def.defId]: def },
          instances: instance
              ? { [instance.instanceId]: instance }
              : {},
      };
  }
  function buildEventApis(eventStore, context, excludeInstance) {
      let { defs, instances } = eventStore;
      let eventApis = [];
      let excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
      for (let id in instances) {
          let instance = instances[id];
          let def = defs[instance.defId];
          if (instance.instanceId !== excludeInstanceId) {
              eventApis.push(new EventImpl(context, def, instance));
          }
      }
      return eventApis;
  }

  /*
  Specifying nextDayThreshold signals that all-day ranges should be sliced.
  */
  function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
      let inverseBgByGroupId = {};
      let inverseBgByDefId = {};
      let defByGroupId = {};
      let bgRanges = [];
      let fgRanges = [];
      let eventUis = compileEventUis(eventStore.defs, eventUiBases);
      for (let defId in eventStore.defs) {
          let def = eventStore.defs[defId];
          let ui = eventUis[def.defId];
          if (ui.display === 'inverse-background') {
              if (def.groupId) {
                  inverseBgByGroupId[def.groupId] = [];
                  if (!defByGroupId[def.groupId]) {
                      defByGroupId[def.groupId] = def;
                  }
              }
              else {
                  inverseBgByDefId[defId] = [];
              }
          }
      }
      for (let instanceId in eventStore.instances) {
          let instance = eventStore.instances[instanceId];
          let def = eventStore.defs[instance.defId];
          let ui = eventUis[def.defId];
          let origRange = instance.range;
          let normalRange = (!def.allDay && nextDayThreshold) ?
              computeVisibleDayRange(origRange, nextDayThreshold) :
              origRange;
          let slicedRange = intersectRanges(normalRange, framingRange);
          if (slicedRange) {
              if (ui.display === 'inverse-background') {
                  if (def.groupId) {
                      inverseBgByGroupId[def.groupId].push(slicedRange);
                  }
                  else {
                      inverseBgByDefId[instance.defId].push(slicedRange);
                  }
              }
              else if (ui.display !== 'none') {
                  (ui.display === 'background' ? bgRanges : fgRanges).push({
                      def,
                      ui,
                      instance,
                      range: slicedRange,
                      isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                      isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf(),
                  });
              }
          }
      }
      for (let groupId in inverseBgByGroupId) { // BY GROUP
          let ranges = inverseBgByGroupId[groupId];
          let invertedRanges = invertRanges(ranges, framingRange);
          for (let invertedRange of invertedRanges) {
              let def = defByGroupId[groupId];
              let ui = eventUis[def.defId];
              bgRanges.push({
                  def,
                  ui,
                  instance: null,
                  range: invertedRange,
                  isStart: false,
                  isEnd: false,
              });
          }
      }
      for (let defId in inverseBgByDefId) {
          let ranges = inverseBgByDefId[defId];
          let invertedRanges = invertRanges(ranges, framingRange);
          for (let invertedRange of invertedRanges) {
              bgRanges.push({
                  def: eventStore.defs[defId],
                  ui: eventUis[defId],
                  instance: null,
                  range: invertedRange,
                  isStart: false,
                  isEnd: false,
              });
          }
      }
      return { bg: bgRanges, fg: fgRanges };
  }
  function hasBgRendering(def) {
      return def.ui.display === 'background' || def.ui.display === 'inverse-background';
  }
  function setElEventRange(el, eventRange) {
      el.fcEventRange = eventRange;
  }
  function getElEventRange(el) {
      return el.fcEventRange ||
          el.parentNode.fcEventRange || // for the harness
          null;
  }
  // event ui computation
  function compileEventUis(eventDefs, eventUiBases) {
      return mapHash(eventDefs, (eventDef) => compileEventUi(eventDef, eventUiBases));
  }
  function compileEventUi(eventDef, eventUiBases) {
      let uis = [];
      if (eventUiBases['']) {
          uis.push(eventUiBases['']);
      }
      if (eventUiBases[eventDef.defId]) {
          uis.push(eventUiBases[eventDef.defId]);
      }
      uis.push(eventDef.ui);
      return combineEventUis(uis);
  }
  function sortEventSegs(segs, eventOrderSpecs) {
      let objs = segs.map(buildSegCompareObj);
      objs.sort((obj0, obj1) => compareByFieldSpecs(obj0, obj1, eventOrderSpecs)); // !!!
      return objs.map((c) => c._seg);
  }
  // returns a object with all primitive props that can be compared
  function buildSegCompareObj(seg) {
      let { eventRange } = seg;
      let eventDef = eventRange.def;
      let range = eventRange.instance ? eventRange.instance.range : eventRange.range;
      let start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
      let end = range.end ? range.end.valueOf() : 0; // "
      return Object.assign(Object.assign(Object.assign({}, eventDef.extendedProps), eventDef), { id: eventDef.publicId, start,
          end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg });
  }
  function computeEventRangeDraggable(eventRange, context) {
      let { pluginHooks } = context;
      let transformers = pluginHooks.isDraggableTransformers;
      let { def, ui } = eventRange;
      let val = ui.startEditable;
      for (let transformer of transformers) {
          val = transformer(val, def, ui, context);
      }
      return val;
  }
  function buildEventRangeTimeText(eventRange, timeFormat, context, defaultDisplayEventTime, // defaults to true
  defaultDisplayEventEnd, // defaults to true
  startOverride, endOverride) {
      let { dateEnv, options } = context;
      let { displayEventTime, displayEventEnd } = options;
      let eventDef = eventRange.def;
      let eventInstance = eventRange.instance;
      if (displayEventTime == null) {
          displayEventTime = defaultDisplayEventTime !== false;
      }
      if (displayEventEnd == null) {
          displayEventEnd = defaultDisplayEventEnd !== false;
      }
      let wholeEventStart = eventInstance.range.start;
      let wholeEventEnd = eventInstance.range.end;
      let segStart = startOverride || eventRange.range.start;
      let segEnd = endOverride || eventRange.range.end;
      let isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
      let isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
      if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
          segStart = isStartDay ? wholeEventStart : segStart;
          segEnd = isEndDay ? wholeEventEnd : segEnd;
          if (displayEventEnd && eventDef.hasEnd) {
              return dateEnv.formatRange(segStart, segEnd, timeFormat, {
                  forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
                  forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo,
              });
          }
          return dateEnv.format(segStart, timeFormat, {
              forcedTzo: startOverride ? null : eventInstance.forcedStartTzo, // nooooo, same
          });
      }
      return '';
  }
  function getEventRangeMeta(eventRange, todayRange, nowDate) {
      let segRange = eventRange.range;
      return {
          isPast: segRange.end <= (nowDate || todayRange.start),
          isFuture: segRange.start >= (nowDate || todayRange.end),
          isToday: todayRange && rangeContainsMarker(todayRange, segRange.start),
      };
  }
  function getEventClassNames(props) {
      let classNames = ['fc-event'];
      if (props.isMirror) {
          classNames.push('fc-event-mirror');
      }
      if (props.isDraggable) {
          classNames.push('fc-event-draggable');
      }
      if (props.isStartResizable || props.isEndResizable) {
          classNames.push('fc-event-resizable');
      }
      if (props.isDragging) {
          classNames.push('fc-event-dragging');
      }
      if (props.isResizing) {
          classNames.push('fc-event-resizing');
      }
      if (props.isSelected) {
          classNames.push('fc-event-selected');
      }
      if (props.isStart) {
          classNames.push('fc-event-start');
      }
      if (props.isEnd) {
          classNames.push('fc-event-end');
      }
      if (props.isPast) {
          classNames.push('fc-event-past');
      }
      if (props.isToday) {
          classNames.push('fc-event-today');
      }
      if (props.isFuture) {
          classNames.push('fc-event-future');
      }
      return classNames;
  }
  function buildEventRangeKey(eventRange) {
      return eventRange.instance
          ? eventRange.instance.instanceId
          : `${eventRange.def.defId}:${eventRange.range.start.toISOString()}`;
      // inverse-background events don't have specific instances. TODO: better solution
  }
  function getEventRangeAnchorAttrs(eventRange, context) {
      let { def, instance } = eventRange;
      let { url } = def;
      if (url) {
          return { href: url };
      }
      let { emitter, options } = context;
      let { eventInteractive } = options;
      if (eventInteractive == null) {
          eventInteractive = def.interactive;
          if (eventInteractive == null) {
              eventInteractive = Boolean(emitter.hasHandlers('eventClick'));
          }
      }
      // mock what happens in EventClicking
      if (eventInteractive) {
          // only attach keyboard-related handlers because click handler is already done in EventClicking
          return createAriaKeyboardAttrs((ev) => {
              emitter.trigger('eventClick', {
                  el: ev.target,
                  event: new EventImpl(context, def, instance),
                  jsEvent: ev,
                  view: context.viewApi,
              });
          });
      }
      return {};
  }

  const STANDARD_PROPS = {
      start: identity,
      end: identity,
      allDay: Boolean,
  };
  function parseDateSpan(raw, dateEnv, defaultDuration) {
      let span = parseOpenDateSpan(raw, dateEnv);
      let { range } = span;
      if (!range.start) {
          return null;
      }
      if (!range.end) {
          if (defaultDuration == null) {
              return null;
          }
          range.end = dateEnv.add(range.start, defaultDuration);
      }
      return span;
  }
  /*
  TODO: somehow combine with parseRange?
  Will return null if the start/end props were present but parsed invalidly.
  */
  function parseOpenDateSpan(raw, dateEnv) {
      let { refined: standardProps, extra } = refineProps(raw, STANDARD_PROPS);
      let startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
      let endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
      let { allDay } = standardProps;
      if (allDay == null) {
          allDay = (startMeta && startMeta.isTimeUnspecified) &&
              (!endMeta || endMeta.isTimeUnspecified);
      }
      return Object.assign({ range: {
              start: startMeta ? startMeta.marker : null,
              end: endMeta ? endMeta.marker : null,
          }, allDay }, extra);
  }
  function isDateSpansEqual(span0, span1) {
      return rangesEqual(span0.range, span1.range) &&
          span0.allDay === span1.allDay &&
          isSpanPropsEqual(span0, span1);
  }
  // the NON-DATE-RELATED props
  function isSpanPropsEqual(span0, span1) {
      for (let propName in span1) {
          if (propName !== 'range' && propName !== 'allDay') {
              if (span0[propName] !== span1[propName]) {
                  return false;
              }
          }
      }
      // are there any props that span0 has that span1 DOESN'T have?
      // both have range/allDay, so no need to special-case.
      for (let propName in span0) {
          if (!(propName in span1)) {
              return false;
          }
      }
      return true;
  }
  function buildDateSpanApi(span, dateEnv) {
      return Object.assign(Object.assign({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
  }
  function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
      return Object.assign(Object.assign({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
  }
  function buildRangeApi(range, dateEnv, omitTime) {
      return {
          start: dateEnv.toDate(range.start),
          end: dateEnv.toDate(range.end),
          startStr: dateEnv.formatIso(range.start, { omitTime }),
          endStr: dateEnv.formatIso(range.end, { omitTime }),
      };
  }
  function fabricateEventRange(dateSpan, eventUiBases, context) {
      let res = refineEventDef({ editable: false }, context);
      let def = parseEventDef(res.refined, res.extra, '', // sourceId
      dateSpan.allDay, true, // hasEnd
      context);
      return {
          def,
          ui: compileEventUi(def, eventUiBases),
          instance: createEventInstance(def.defId, dateSpan.range),
          range: dateSpan.range,
          isStart: true,
          isEnd: true,
      };
  }

  /*
  given a function that resolves a result asynchronously.
  the function can either call passed-in success and failure callbacks,
  or it can return a promise.
  if you need to pass additional params to func, bind them first.
  */
  function unpromisify(func, normalizedSuccessCallback, normalizedFailureCallback) {
      // guard against success/failure callbacks being called more than once
      // and guard against a promise AND callback being used together.
      let isResolved = false;
      let wrappedSuccess = function (res) {
          if (!isResolved) {
              isResolved = true;
              normalizedSuccessCallback(res);
          }
      };
      let wrappedFailure = function (error) {
          if (!isResolved) {
              isResolved = true;
              normalizedFailureCallback(error);
          }
      };
      let res = func(wrappedSuccess, wrappedFailure);
      if (res && typeof res.then === 'function') {
          res.then(wrappedSuccess, wrappedFailure);
      }
  }

  class JsonRequestError extends Error {
      constructor(message, response) {
          super(message);
          this.response = response;
      }
  }
  function requestJson(method, url, params) {
      method = method.toUpperCase();
      const fetchOptions = {
          method,
      };
      if (method === 'GET') {
          url += (url.indexOf('?') === -1 ? '?' : '&') +
              new URLSearchParams(params);
      }
      else {
          fetchOptions.body = new URLSearchParams(params);
          fetchOptions.headers = {
              'Content-Type': 'application/x-www-form-urlencoded',
          };
      }
      return fetch(url, fetchOptions).then((fetchRes) => {
          if (fetchRes.ok) {
              return fetchRes.json().then((parsedResponse) => {
                  return [parsedResponse, fetchRes];
              }, () => {
                  throw new JsonRequestError('Failure parsing JSON', fetchRes);
              });
          }
          else {
              throw new JsonRequestError('Request failed', fetchRes);
          }
      });
  }

  class CalendarRoot extends BaseComponent {
      constructor() {
          super(...arguments);
          this.state = {
              forPrint: false,
          };
          this.handleBeforePrint = () => {
              flushSync(() => {
                  this.setState({ forPrint: true });
              });
          };
          this.handleAfterPrint = () => {
              flushSync(() => {
                  this.setState({ forPrint: false });
              });
          };
      }
      render() {
          let { props, state } = this;
          let { options } = props;
          let { forPrint } = state;
          let classNames = [
              'fc',
              forPrint ? 'fc-media-print' : 'fc-media-screen',
              `fc-direction-${options.direction}`,
              props.theme.getClass('root'),
          ];
          return props.children(classNames, options.height, forPrint);
      }
      componentDidMount() {
          let { emitter } = this.props;
          emitter.on('_beforeprint', this.handleBeforePrint);
          emitter.on('_afterprint', this.handleAfterPrint);
      }
      componentWillUnmount() {
          let { emitter } = this.props;
          emitter.off('_beforeprint', this.handleBeforePrint);
          emitter.off('_afterprint', this.handleAfterPrint);
      }
  }

  class Interaction {
      constructor(settings) {
          this.component = settings.component;
          this.isHitComboAllowed = settings.isHitComboAllowed || null;
      }
      destroy() {
      }
  }
  function parseInteractionSettings(component, input) {
      return {
          component,
          el: input.el,
          useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
          isHitComboAllowed: input.isHitComboAllowed || null,
      };
  }
  function interactionSettingsToStore(settings) {
      return {
          [settings.component.uid]: settings,
      };
  }
  // global state
  const interactionSettingsStore = {};

  function pointInsideRect(point, rect) {
      return point.left >= rect.left &&
          point.left < rect.right &&
          point.top >= rect.top &&
          point.top < rect.bottom;
  }
  // Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
  function intersectRects(rect1, rect2) {
      let res = {
          left: Math.max(rect1.left, rect2.left),
          right: Math.min(rect1.right, rect2.right),
          top: Math.max(rect1.top, rect2.top),
          bottom: Math.min(rect1.bottom, rect2.bottom),
      };
      if (res.left < res.right && res.top < res.bottom) {
          return res;
      }
      return false;
  }
  function translateRect(rect, deltaX, deltaY) {
      return {
          left: rect.left + deltaX,
          right: rect.right + deltaX,
          top: rect.top + deltaY,
          bottom: rect.bottom + deltaY,
      };
  }
  // Returns a new point that will have been moved to reside within the given rectangle
  function constrainPoint(point, rect) {
      return {
          left: Math.min(Math.max(point.left, rect.left), rect.right),
          top: Math.min(Math.max(point.top, rect.top), rect.bottom),
      };
  }
  // Returns a point that is the center of the given rectangle
  function getRectCenter(rect) {
      return {
          left: (rect.left + rect.right) / 2,
          top: (rect.top + rect.bottom) / 2,
      };
  }
  // Subtracts point2's coordinates from point1's coordinates, returning a delta
  function diffPoints(point1, point2) {
      return {
          left: point1.left - point2.left,
          top: point1.top - point2.top,
      };
  }

  const EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
  class Splitter {
      constructor() {
          this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
          this.splitDateSelection = memoize(this._splitDateSpan);
          this.splitEventStore = memoize(this._splitEventStore);
          this.splitIndividualUi = memoize(this._splitIndividualUi);
          this.splitEventDrag = memoize(this._splitInteraction);
          this.splitEventResize = memoize(this._splitInteraction);
          this.eventUiBuilders = {}; // TODO: typescript protection
      }
      splitProps(props) {
          let keyInfos = this.getKeyInfo(props);
          let defKeys = this.getKeysForEventDefs(props.eventStore);
          let dateSelections = this.splitDateSelection(props.dateSelection);
          let individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
          let eventStores = this.splitEventStore(props.eventStore, defKeys);
          let eventDrags = this.splitEventDrag(props.eventDrag);
          let eventResizes = this.splitEventResize(props.eventResize);
          let splitProps = {};
          this.eventUiBuilders = mapHash(keyInfos, (info, key) => this.eventUiBuilders[key] || memoize(buildEventUiForKey));
          for (let key in keyInfos) {
              let keyInfo = keyInfos[key];
              let eventStore = eventStores[key] || EMPTY_EVENT_STORE;
              let buildEventUi = this.eventUiBuilders[key];
              splitProps[key] = {
                  businessHours: keyInfo.businessHours || props.businessHours,
                  dateSelection: dateSelections[key] || null,
                  eventStore,
                  eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                  eventDrag: eventDrags[key] || null,
                  eventResize: eventResizes[key] || null,
                  eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
              };
          }
          return splitProps;
      }
      _splitDateSpan(dateSpan) {
          let dateSpans = {};
          if (dateSpan) {
              let keys = this.getKeysForDateSpan(dateSpan);
              for (let key of keys) {
                  dateSpans[key] = dateSpan;
              }
          }
          return dateSpans;
      }
      _getKeysForEventDefs(eventStore) {
          return mapHash(eventStore.defs, (eventDef) => this.getKeysForEventDef(eventDef));
      }
      _splitEventStore(eventStore, defKeys) {
          let { defs, instances } = eventStore;
          let splitStores = {};
          for (let defId in defs) {
              for (let key of defKeys[defId]) {
                  if (!splitStores[key]) {
                      splitStores[key] = createEmptyEventStore();
                  }
                  splitStores[key].defs[defId] = defs[defId];
              }
          }
          for (let instanceId in instances) {
              let instance = instances[instanceId];
              for (let key of defKeys[instance.defId]) {
                  if (splitStores[key]) { // must have already been created
                      splitStores[key].instances[instanceId] = instance;
                  }
              }
          }
          return splitStores;
      }
      _splitIndividualUi(eventUiBases, defKeys) {
          let splitHashes = {};
          for (let defId in eventUiBases) {
              if (defId) { // not the '' key
                  for (let key of defKeys[defId]) {
                      if (!splitHashes[key]) {
                          splitHashes[key] = {};
                      }
                      splitHashes[key][defId] = eventUiBases[defId];
                  }
              }
          }
          return splitHashes;
      }
      _splitInteraction(interaction) {
          let splitStates = {};
          if (interaction) {
              let affectedStores = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
              // can't rely on defKeys because event data is mutated
              let mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
              let mutatedStores = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
              let populate = (key) => {
                  if (!splitStates[key]) {
                      splitStates[key] = {
                          affectedEvents: affectedStores[key] || EMPTY_EVENT_STORE,
                          mutatedEvents: mutatedStores[key] || EMPTY_EVENT_STORE,
                          isEvent: interaction.isEvent,
                      };
                  }
              };
              for (let key in affectedStores) {
                  populate(key);
              }
              for (let key in mutatedStores) {
                  populate(key);
              }
          }
          return splitStates;
      }
  }
  function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
      let baseParts = [];
      if (allUi) {
          baseParts.push(allUi);
      }
      if (eventUiForKey) {
          baseParts.push(eventUiForKey);
      }
      let stuff = {
          '': combineEventUis(baseParts),
      };
      if (individualUi) {
          Object.assign(stuff, individualUi);
      }
      return stuff;
  }

  function getDateMeta(date, todayRange, nowDate, dateProfile) {
      return {
          dow: date.getUTCDay(),
          isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
          isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
          isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
          isPast: Boolean(nowDate ? (date < nowDate) : todayRange ? (date < todayRange.start) : false),
          isFuture: Boolean(nowDate ? (date > nowDate) : todayRange ? (date >= todayRange.end) : false),
      };
  }
  function getDayClassNames(meta, theme) {
      let classNames = [
          'fc-day',
          `fc-day-${DAY_IDS[meta.dow]}`,
      ];
      if (meta.isDisabled) {
          classNames.push('fc-day-disabled');
      }
      else {
          if (meta.isToday) {
              classNames.push('fc-day-today');
          }
          if (meta.isPast) {
              classNames.push('fc-day-past');
          }
          if (meta.isFuture) {
              classNames.push('fc-day-future');
          }
          if (meta.isOther) {
              classNames.push('fc-day-other');
          }
      }
      return classNames;
  }
  function getSlotClassNames(meta, theme) {
      let classNames = [
          'fc-slot',
          `fc-slot-${DAY_IDS[meta.dow]}`,
      ];
      if (meta.isDisabled) {
          classNames.push('fc-slot-disabled');
      }
      else {
          if (meta.isToday) {
              classNames.push('fc-slot-today');
          }
          if (meta.isPast) {
              classNames.push('fc-slot-past');
          }
          if (meta.isFuture) {
              classNames.push('fc-slot-future');
          }
      }
      return classNames;
  }

  // TODO: kill Component::safeSetState
  // TODO: kill
  function setStateDimMap(component, key, newMap) {
      const currentMap = component.state[key];
      if (!currentMap || !isDimMapsEqual(currentMap, newMap)) {
          component.setState({ [key]: newMap });
      }
  }
  // TODO: kill
  function isDimMapsEqual(oldMap, newMap) {
      for (const key in newMap) {
          if (!isDimsEqual(oldMap[key], newMap[key])) {
              return false;
          }
      }
      return true;
  }
  // TODO: kill
  function isDimsEqual(v0, v1) {
      return v0 != null && (v0 === v1 || Math.abs(v0 - v1) < 0.01);
  }

  const callbackMap = new Map();
  let flushedCallbackSet = new Set();
  let isHandling = false;
  /*
  Performant from multiple perspectives:
  - less memory with one ResizeObserver
  - batches firing
  */
  const resizeObserver = new ResizeObserver((entries) => {
      isHandling = true;
      for (let entry of entries) {
          const callback = callbackMap.get(entry.target);
          if (entry.contentBoxSize) {
              // The standard makes contentBoxSize an array...
              if (entry.contentBoxSize[0]) {
                  callback(entry.contentBoxSize[0].inlineSize, entry.contentBoxSize[0].blockSize);
              }
              else {
                  // ...but old versions of Firefox treat it as a single item
                  callback(entry.contentBoxSize.inlineSize, entry.contentBoxSize.blockSize);
              }
          }
          else {
              callback(entry.contentRect.width, entry.contentRect.height);
          }
      }
      for (const flushedCallback of flushedCallbackSet.values()) {
          flushedCallback();
          flushedCallbackSet.delete(flushedCallback);
      }
      isHandling = false;
  });
  /*
  PRECONDITIONS:
  - element can only have one listener attached ever
  - element cannot have border or padding

  TODO:
  - always force border/padding on these elements to `0 !important` ???
  */
  function watchSize(el, callback) {
      callbackMap.set(el, callback);
      resizeObserver.observe(el);
      return () => {
          callbackMap.delete(el);
          resizeObserver.unobserve(el);
      };
  }
  function watchWidth(el, callback) {
      let currentWidth;
      return watchSize(el, (width) => {
          if (currentWidth == null || currentWidth !== width) {
              callback(currentWidth = width);
          }
      });
  }
  function watchHeight(el, callback) {
      let currentHeight;
      return watchSize(el, (_width, height) => {
          if (currentHeight == null || currentHeight !== height) {
              callback(currentHeight = height);
          }
      });
  }
  function afterSize(callback) {
      if (isHandling) {
          flushedCallbackSet.add(callback);
      }
      else {
          callback(); // TODO: should we queue microtask?
      }
  }

  const DAY_FORMAT = createFormatter({ year: 'numeric', month: 'long', day: 'numeric' });
  const WEEK_FORMAT = createFormatter({ week: 'long' });
  function buildNavLinkAttrs(context, dateMarker, viewType = 'day', isTabbable = true) {
      const { dateEnv, options, calendarApi } = context;
      let dateStr = dateEnv.format(dateMarker, viewType === 'week' ? WEEK_FORMAT : DAY_FORMAT);
      if (options.navLinks) {
          let zonedDate = dateEnv.toDate(dateMarker);
          const handleInteraction = (ev) => {
              let customAction = viewType === 'day' ? options.navLinkDayClick :
                  viewType === 'week' ? options.navLinkWeekClick : null;
              if (typeof customAction === 'function') {
                  customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
              }
              else {
                  if (typeof customAction === 'string') {
                      viewType = customAction;
                  }
                  calendarApi.zoomTo(dateMarker, viewType);
              }
          };
          return Object.assign({ title: formatWithOrdinals(options.navLinkHint, [dateStr, zonedDate], dateStr), 'data-navlink': '' }, (isTabbable
              ? createAriaClickAttrs(handleInteraction)
              : { onClick: handleInteraction }));
      }
      return { 'aria-label': dateStr };
  }

  let _isRtlScrollbarOnLeft = null;
  function getIsRtlScrollbarOnLeft() {
      if (_isRtlScrollbarOnLeft === null) {
          _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
      }
      return _isRtlScrollbarOnLeft;
  }
  function computeIsRtlScrollbarOnLeft() {
      let outerEl = document.createElement('div');
      applyStyle(outerEl, {
          position: 'absolute',
          top: -1000,
          left: 0,
          border: 0,
          padding: 0,
          overflow: 'scroll',
          direction: 'rtl',
      });
      outerEl.innerHTML = '<div></div>';
      document.body.appendChild(outerEl);
      let innerEl = outerEl.firstChild;
      let res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
      removeElement(outerEl);
      return res;
  }

  let _scrollbarWidths;
  function getScrollbarWidths() {
      if (!_scrollbarWidths) {
          _scrollbarWidths = computeScrollbarWidths();
      }
      return _scrollbarWidths;
  }
  function computeScrollbarWidths() {
      let el = document.createElement('div');
      el.style.overflow = 'scroll';
      el.style.position = 'absolute';
      el.style.top = '-9999px';
      el.style.left = '-9999px';
      document.body.appendChild(el);
      let res = computeScrollbarWidthsForEl(el);
      document.body.removeChild(el);
      return res;
  }
  // WARNING: will include border
  function computeScrollbarWidthsForEl(el) {
      return {
          x: el.offsetHeight - el.clientHeight,
          y: el.offsetWidth - el.clientWidth,
      };
  }

  function computeEdges(el, getPadding = false) {
      let computedStyle = window.getComputedStyle(el);
      let borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
      let borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
      let borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
      let borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
      let badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!
      let scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
      let scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
      let res = {
          borderLeft,
          borderRight,
          borderTop,
          borderBottom,
          scrollbarBottom,
          scrollbarLeft: 0,
          scrollbarRight: 0,
      };
      if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
          res.scrollbarLeft = scrollbarLeftRight;
      }
      else {
          res.scrollbarRight = scrollbarLeftRight;
      }
      if (getPadding) {
          res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
          res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
          res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
          res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
      }
      return res;
  }
  function computeInnerRect(el, goWithinPadding = false, doFromWindowViewport) {
      let outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
      let edges = computeEdges(el, goWithinPadding);
      let res = {
          left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
          right: outerRect.right - edges.borderRight - edges.scrollbarRight,
          top: outerRect.top + edges.borderTop,
          bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom,
      };
      if (goWithinPadding) {
          res.left += edges.paddingLeft;
          res.right -= edges.paddingRight;
          res.top += edges.paddingTop;
          res.bottom -= edges.paddingBottom;
      }
      return res;
  }
  function computeRect(el) {
      let rect = el.getBoundingClientRect();
      return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY,
          right: rect.right + window.scrollX,
          bottom: rect.bottom + window.scrollY,
      };
  }
  function computeClippedClientRect(el) {
      let clippingParents = getClippingParents(el);
      let rect = el.getBoundingClientRect();
      for (let clippingParent of clippingParents) {
          let intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
          if (intersection) {
              rect = intersection;
          }
          else {
              return null;
          }
      }
      return rect;
  }
  // does not return window
  function getClippingParents(el) {
      let parents = [];
      while (el instanceof HTMLElement) { // will stop when gets to document or null
          let computedStyle = window.getComputedStyle(el);
          if (computedStyle.position === 'fixed') {
              break;
          }
          if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
              parents.push(el);
          }
          el = el.parentNode;
      }
      return parents;
  }

  /*
  Records offset information for a set of elements, relative to an origin element.
  Can record the left/right OR the top/bottom OR both.
  Provides methods for querying the cache by position.
  */
  class PositionCache {
      constructor(originEl, els, isHorizontal, isVertical) {
          this.els = els;
          let originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
          if (isHorizontal) {
              this.buildElHorizontals(originClientRect.left);
          }
          if (isVertical) {
              this.buildElVerticals(originClientRect.top);
          }
      }
      // Populates the left/right internal coordinate arrays
      buildElHorizontals(originClientLeft) {
          let lefts = [];
          let rights = [];
          for (let el of this.els) {
              let rect = el.getBoundingClientRect();
              lefts.push(rect.left - originClientLeft);
              rights.push(rect.right - originClientLeft);
          }
          this.lefts = lefts;
          this.rights = rights;
      }
      // Populates the top/bottom internal coordinate arrays
      buildElVerticals(originClientTop) {
          let tops = [];
          let bottoms = [];
          for (let el of this.els) {
              let rect = el.getBoundingClientRect();
              tops.push(rect.top - originClientTop);
              bottoms.push(rect.bottom - originClientTop);
          }
          this.tops = tops;
          this.bottoms = bottoms;
      }
      // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
      // If no intersection is made, returns undefined.
      leftToIndex(leftPosition) {
          let { lefts, rights } = this;
          let len = lefts.length;
          let i;
          for (i = 0; i < len; i += 1) {
              if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                  return i;
              }
          }
          return undefined; // TODO: better
      }
      // Given a top offset (from document top), returns the index of the el that it vertically intersects.
      // If no intersection is made, returns undefined.
      topToIndex(topPosition) {
          let { tops, bottoms } = this;
          let len = tops.length;
          let i;
          for (i = 0; i < len; i += 1) {
              if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                  return i;
              }
          }
          return undefined; // TODO: better
      }
      // Gets the width of the element at the given index
      getWidth(leftIndex) {
          return this.rights[leftIndex] - this.lefts[leftIndex];
      }
      // Gets the height of the element at the given index
      getHeight(topIndex) {
          return this.bottoms[topIndex] - this.tops[topIndex];
      }
      similarTo(otherCache) {
          return similarNumArrays(this.tops || [], otherCache.tops || []) &&
              similarNumArrays(this.bottoms || [], otherCache.bottoms || []) &&
              similarNumArrays(this.lefts || [], otherCache.lefts || []) &&
              similarNumArrays(this.rights || [], otherCache.rights || []);
      }
  }
  function similarNumArrays(a, b) {
      const len = a.length;
      if (len !== b.length) {
          return false;
      }
      for (let i = 0; i < len; i++) {
          if (Math.round(a[i]) !== Math.round(b[i])) {
              return false;
          }
      }
      return true;
  }

  /* eslint max-classes-per-file: "off" */
  /*
  An object for getting/setting scroll-related information for an element.
  Internally, this is done very differently for window versus DOM element,
  so this object serves as a common interface.
  */
  class ScrollController {
      getMaxScrollTop() {
          return this.getScrollHeight() - this.getClientHeight();
      }
      getMaxScrollLeft() {
          return this.getScrollWidth() - this.getClientWidth();
      }
      canScrollVertically() {
          return this.getMaxScrollTop() > 0;
      }
      canScrollHorizontally() {
          return this.getMaxScrollLeft() > 0;
      }
      canScrollUp() {
          return this.getScrollTop() > 0;
      }
      canScrollDown() {
          return this.getScrollTop() < this.getMaxScrollTop();
      }
      canScrollLeft() {
          return this.getScrollLeft() > 0;
      }
      canScrollRight() {
          return this.getScrollLeft() < this.getMaxScrollLeft();
      }
  }
  class ElementScrollController extends ScrollController {
      constructor(el) {
          super();
          this.el = el;
      }
      getScrollTop() {
          return this.el.scrollTop;
      }
      getScrollLeft() {
          return this.el.scrollLeft;
      }
      setScrollTop(top) {
          this.el.scrollTop = top;
      }
      setScrollLeft(left) {
          this.el.scrollLeft = left;
      }
      getScrollWidth() {
          return this.el.scrollWidth;
      }
      getScrollHeight() {
          return this.el.scrollHeight;
      }
      getClientHeight() {
          return this.el.clientHeight;
      }
      getClientWidth() {
          return this.el.clientWidth;
      }
  }
  class WindowScrollController extends ScrollController {
      getScrollTop() {
          return window.scrollY;
      }
      getScrollLeft() {
          return window.scrollX;
      }
      setScrollTop(n) {
          window.scroll(window.scrollX, n);
      }
      setScrollLeft(n) {
          window.scroll(n, window.scrollY);
      }
      getScrollWidth() {
          return document.documentElement.scrollWidth;
      }
      getScrollHeight() {
          return document.documentElement.scrollHeight;
      }
      getClientHeight() {
          return document.documentElement.clientHeight;
      }
      getClientWidth() {
          return document.documentElement.clientWidth;
      }
  }

  /*
  an INTERACTABLE date component

  PURPOSES:
  - hook up to fg, fill, and mirror renderers
  - interface for dragging and hits
  */
  class DateComponent extends BaseComponent {
      constructor() {
          super(...arguments);
          this.uid = guid();
      }
      // Hit System
      // -----------------------------------------------------------------------------------------------------------------
      prepareHits() {
      }
      queryHit(positionLeft, positionTop, elWidth, elHeight) {
          return null; // this should be abstract
      }
      // Pointer Interaction Utils
      // -----------------------------------------------------------------------------------------------------------------
      isValidSegDownEl(el) {
          return !this.props.eventDrag && // HACK
              !this.props.eventResize && // HACK
              !elementClosest(el, '.fc-event-mirror');
      }
      isValidDateDownEl(el) {
          return !elementClosest(el, '.fc-event:not(.fc-bg-event)') &&
              !elementClosest(el, '.fc-more-link') && // a "more.." link
              !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
              !elementClosest(el, '.fc-popover'); // hack
      }
  }

  class NamedTimeZoneImpl {
      constructor(timeZoneName) {
          this.timeZoneName = timeZoneName;
      }
  }

  const DAY_NUM_FORMAT = createFormatter({ day: 'numeric' });
  class DayCellContainer extends BaseComponent {
      constructor() {
          super(...arguments);
          this.refineRenderProps = memoizeObjArg(refineRenderProps);
      }
      render() {
          let { props, context } = this;
          let { options } = context;
          let renderProps = this.refineRenderProps({
              date: props.date,
              dateProfile: props.dateProfile,
              todayRange: props.todayRange,
              isMonthStart: props.isMonthStart || false,
              showDayNumber: props.showDayNumber,
              extraRenderProps: props.extraRenderProps,
              viewApi: context.viewApi,
              dateEnv: context.dateEnv,
              monthStartFormat: options.monthStartFormat,
          });
          return (_(ContentContainer, Object.assign({}, props /* includes children */, { elClasses: [
                  ...getDayClassNames(renderProps, context.theme),
                  ...(props.elClasses || []),
              ], elAttrs: Object.assign(Object.assign({}, props.elAttrs), (renderProps.isDisabled ? {} : { 'data-date': formatDayString(props.date) })), renderProps: renderProps, generatorName: "dayCellContent", customGenerator: options.dayCellContent, defaultGenerator: props.defaultGenerator, classNameGenerator: 
              // don't use custom classNames if disabled
              renderProps.isDisabled ? undefined : options.dayCellClassNames, didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount })));
      }
  }
  function hasCustomDayCellContent(options) {
      return Boolean(options.dayCellContent || hasCustomRenderingHandler('dayCellContent', options));
  }
  function refineRenderProps(raw) {
      let { date, dateEnv, dateProfile, isMonthStart } = raw;
      let dayMeta = getDateMeta(date, raw.todayRange, null, dateProfile);
      let dayNumberText = raw.showDayNumber ? (dateEnv.format(date, isMonthStart ? raw.monthStartFormat : DAY_NUM_FORMAT)) : '';
      return Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), { isMonthStart,
          dayNumberText }), raw.extraRenderProps);
  }

  const PADDING_FROM_VIEWPORT = 10;
  class Popover extends BaseComponent {
      constructor() {
          super(...arguments);
          this.state = {
              titleId: getUniqueDomId(),
          };
          this.handleRootEl = (el) => {
              this.rootEl = el;
              if (this.props.elRef) {
                  setRef(this.props.elRef, el);
              }
          };
          // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
          this.handleDocumentMouseDown = (ev) => {
              // only hide the popover if the click happened outside the popover
              const target = getEventTargetViaRoot(ev);
              if (!this.rootEl.contains(target)) {
                  this.handleCloseClick();
              }
          };
          this.handleDocumentKeyDown = (ev) => {
              if (ev.key === 'Escape') {
                  this.handleCloseClick();
              }
          };
          this.handleCloseClick = () => {
              let { onClose } = this.props;
              if (onClose) {
                  onClose();
              }
          };
      }
      render() {
          let { theme, options } = this.context;
          let { props, state } = this;
          let classNames = [
              'fc-popover',
              theme.getClass('popover'),
          ].concat(props.extraClassNames || []);
          return j(_("div", Object.assign({}, props.extraAttrs, { id: props.id, className: classNames.join(' '), "aria-labelledby": state.titleId, ref: this.handleRootEl }),
              _("div", { className: 'fc-popover-header ' + theme.getClass('popoverHeader') },
                  _("span", { className: "fc-popover-title", id: state.titleId }, props.title),
                  _("span", { className: 'fc-popover-close ' + theme.getIconClass('close'), title: options.closeHint, onClick: this.handleCloseClick })),
              _("div", { className: 'fc-popover-body ' + theme.getClass('popoverContent') }, props.children)), props.parentEl);
      }
      componentDidMount() {
          document.addEventListener('mousedown', this.handleDocumentMouseDown);
          document.addEventListener('keydown', this.handleDocumentKeyDown);
          this.updateSize();
      }
      componentWillUnmount() {
          document.removeEventListener('mousedown', this.handleDocumentMouseDown);
          document.removeEventListener('keydown', this.handleDocumentKeyDown);
      }
      updateSize() {
          let { isRtl } = this.context;
          let { alignmentEl, alignGridTop } = this.props;
          let { rootEl } = this;
          let alignmentRect = computeClippedClientRect(alignmentEl);
          if (alignmentRect) {
              let popoverDims = rootEl.getBoundingClientRect();
              if (alignGridTop) {
                  throw new Error('alignGridTop not supported yet');
              }
              // position relative to viewport
              let popoverTop = alignGridTop
                  ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top // BAD!!!
                  : alignmentRect.top;
              let popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
              // constrain
              popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
              popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
              popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
              let origin = rootEl.offsetParent.getBoundingClientRect();
              applyStyle(rootEl, {
                  top: popoverTop - origin.top,
                  left: popoverLeft - origin.left,
              });
          }
      }
  }

  class MorePopover extends DateComponent {
      constructor() {
          super(...arguments);
          this.handleRootEl = (rootEl) => {
              this.rootEl = rootEl;
              if (rootEl) {
                  this.context.registerInteractiveComponent(this, {
                      el: rootEl,
                      useEventCenter: false,
                  });
              }
              else {
                  this.context.unregisterInteractiveComponent(this);
              }
          };
      }
      render() {
          let { options, dateEnv } = this.context;
          let { props } = this;
          let { startDate, todayRange, dateProfile } = props;
          let title = dateEnv.format(startDate, options.dayPopoverFormat);
          return (_(DayCellContainer, { elRef: this.handleRootEl, date: startDate, dateProfile: dateProfile, todayRange: todayRange }, (InnerContent, renderProps, elAttrs) => (_(Popover, { elRef: elAttrs.ref, id: props.id, title: title, extraClassNames: ['fc-more-popover'].concat(elAttrs.className || []), extraAttrs: elAttrs /* TODO: make these time-based when not whole-day? */, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
              hasCustomDayCellContent(options) && (_(InnerContent, { elTag: "div", elClasses: ['fc-more-popover-misc'] })),
              props.children))));
      }
      queryHit(positionLeft, positionTop, elWidth, elHeight) {
          let { rootEl, props } = this;
          if (positionLeft >= 0 && positionLeft < elWidth &&
              positionTop >= 0 && positionTop < elHeight) {
              return {
                  dateProfile: props.dateProfile,
                  dateSpan: Object.assign({ allDay: !props.forceTimed, range: {
                          start: props.startDate,
                          end: props.endDate,
                      } }, props.extraDateSpan),
                  dayEl: rootEl,
                  rect: {
                      left: 0,
                      top: 0,
                      right: elWidth,
                      bottom: elHeight,
                  },
                  layer: 1, // important when comparing with hits from other components
              };
          }
          return null;
      }
  }

  class MoreLinkContainer extends BaseComponent {
      constructor() {
          super(...arguments);
          this.state = {
              isPopoverOpen: false,
              popoverId: getUniqueDomId(),
          };
          this.handleLinkEl = (linkEl) => {
              this.linkEl = linkEl;
              if (this.props.elRef) {
                  setRef(this.props.elRef, linkEl);
              }
          };
          this.handleClick = (ev) => {
              let { props, context } = this;
              let { moreLinkClick } = context.options;
              let date = computeRange(props).start;
              function buildPublicSeg(seg) {
                  let { def, instance, range } = seg.eventRange;
                  return {
                      event: new EventImpl(context, def, instance),
                      start: context.dateEnv.toDate(range.start),
                      end: context.dateEnv.toDate(range.end),
                      isStart: seg.isStart,
                      isEnd: seg.isEnd,
                  };
              }
              if (typeof moreLinkClick === 'function') {
                  moreLinkClick = moreLinkClick({
                      date,
                      allDay: Boolean(props.allDayDate),
                      allSegs: props.segs.map(buildPublicSeg),
                      hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
                      jsEvent: ev,
                      view: context.viewApi,
                  });
              }
              if (!moreLinkClick || moreLinkClick === 'popover') {
                  this.setState({ isPopoverOpen: true });
              }
              else if (typeof moreLinkClick === 'string') { // a view name
                  context.calendarApi.zoomTo(date, moreLinkClick);
              }
          };
          this.handlePopoverClose = () => {
              this.setState({ isPopoverOpen: false });
          };
      }
      render() {
          let { props, state } = this;
          return (_(ViewContextType.Consumer, null, (context) => {
              let { viewApi, options, calendarApi } = context;
              let { moreLinkText } = options;
              let moreCnt = props.hiddenSegs.length;
              let range = computeRange(props);
              let text = typeof moreLinkText === 'function' // TODO: eventually use formatWithOrdinals
                  ? moreLinkText.call(calendarApi, moreCnt)
                  : `+${moreCnt} ${moreLinkText}`;
              let hint = formatWithOrdinals(options.moreLinkHint, [moreCnt], text);
              let renderProps = {
                  num: moreCnt,
                  shortText: `+${moreCnt}`,
                  text,
                  view: viewApi,
              };
              return (_(k$1, null,
                  Boolean(moreCnt) && (_(ContentContainer, { elTag: props.elTag || 'a', elRef: this.handleLinkEl, elClasses: [
                          ...(props.elClasses || []),
                          'fc-more-link',
                      ], elStyle: props.elStyle, elAttrs: Object.assign(Object.assign(Object.assign({}, props.elAttrs), createAriaClickAttrs(this.handleClick)), { title: hint, 'aria-expanded': state.isPopoverOpen, 'aria-controls': state.isPopoverOpen ? state.popoverId : '' }), renderProps: renderProps, generatorName: "moreLinkContent", customGenerator: options.moreLinkContent, defaultGenerator: props.defaultGenerator || renderMoreLinkInner$1, classNameGenerator: options.moreLinkClassNames, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, props.children)),
                  state.isPopoverOpen && (_(MorePopover, { id: state.popoverId, startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: this.parentEl, alignmentEl: props.alignmentElRef ?
                          props.alignmentElRef.current :
                          this.linkEl, alignGridTop: props.alignGridTop, forceTimed: props.forceTimed, onClose: this.handlePopoverClose }, props.popoverContent()))));
          }));
      }
      componentDidMount() {
          this.updateParentEl();
      }
      componentDidUpdate() {
          this.updateParentEl();
      }
      updateParentEl() {
          if (this.linkEl) {
              this.parentEl = elementClosest(this.linkEl, '.fc-view-harness'); // HACK. reconsider
          }
      }
  }
  function renderMoreLinkInner$1(props) {
      return props.text;
  }
  function computeRange(props) {
      if (props.allDayDate) {
          return {
              start: props.allDayDate,
              end: addDays(props.allDayDate, 1),
          };
      }
      return {
          start: computeEarliestSegStart(props.hiddenSegs),
          end: computeLatestSegEnd(props.hiddenSegs),
      };
  }
  function computeEarliestSegStart(segs) {
      return segs.reduce(pickEarliestStart).eventRange.range.start;
  }
  function pickEarliestStart(seg0, seg1) {
      return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
  }
  function computeLatestSegEnd(segs) {
      return segs.reduce(pickLatestEnd).eventRange.range.end;
  }
  function pickLatestEnd(seg0, seg1) {
      return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
  }

  class SegHierarchy {
      constructor(getEntryThickness = (entry) => {
          // if no thickness known, assume 1 (if 0, so small it always fits)
          return entry.thickness;
      }) {
          this.getEntryThickness = getEntryThickness;
          // settings
          this.strictOrder = false;
          this.allowReslicing = false;
          this.maxCoord = -1; // -1 means no max
          this.maxStackCnt = -1; // -1 means no max
          this.levelCoords = []; // ordered
          this.entriesByLevel = []; // parallel with levelCoords
          this.stackCnts = {}; // TODO: use better technique!?
      }
      addSegs(inputs) {
          let hiddenEntries = [];
          for (let input of inputs) {
              this.insertEntry(input, hiddenEntries);
          }
          return hiddenEntries;
      }
      insertEntry(entry, hiddenEntries) {
          let entryThickness = this.getEntryThickness(entry);
          if (entryThickness == null) {
              hiddenEntries.push(entry);
          }
          else {
              let insertion = this.findInsertion(entry, entryThickness);
              if (this.isInsertionValid(insertion, entry, entryThickness)) {
                  this.insertEntryAt(entry, insertion);
              }
              else {
                  this.handleInvalidInsertion(insertion, entry, hiddenEntries);
              }
          }
      }
      isInsertionValid(insertion, entry, entryThickness) {
          return (this.maxCoord === -1 || insertion.levelCoord + entryThickness <= this.maxCoord) &&
              (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
      }
      handleInvalidInsertion(insertion, entry, hiddenEntries) {
          if (this.allowReslicing && insertion.touchingEntry) {
              const hiddenEntry = Object.assign(Object.assign({}, entry), { span: intersectSpans(entry.span, insertion.touchingEntry.span) });
              hiddenEntries.push(hiddenEntry);
              this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
          }
          else {
              hiddenEntries.push(entry);
          }
      }
      /*
      Does NOT add what hit the `barrier` into hiddenEntries. Should already be done.
      */
      splitEntry(entry, barrier, hiddenEntries) {
          let entrySpan = entry.span;
          let barrierSpan = barrier.span;
          if (entrySpan.start < barrierSpan.start) {
              this.insertEntry({
                  index: entry.index,
                  seg: entry.seg,
                  thickness: entry.thickness,
                  span: { start: entrySpan.start, end: barrierSpan.start },
              }, hiddenEntries);
          }
          if (entrySpan.end > barrierSpan.end) {
              this.insertEntry({
                  index: entry.index,
                  seg: entry.seg,
                  thickness: entry.thickness,
                  span: { start: barrierSpan.end, end: entrySpan.end },
              }, hiddenEntries);
          }
      }
      insertEntryAt(entry, insertion) {
          let { entriesByLevel, levelCoords } = this;
          if (insertion.lateral === -1) {
              // create a new level
              insertAt(levelCoords, insertion.level, insertion.levelCoord);
              insertAt(entriesByLevel, insertion.level, [entry]);
          }
          else {
              // insert into existing level
              insertAt(entriesByLevel[insertion.level], insertion.lateral, entry);
          }
          this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
      }
      /*
      does not care about limits
      */
      findInsertion(newEntry, newEntryThickness) {
          let { levelCoords, entriesByLevel, strictOrder, stackCnts } = this;
          let levelCnt = levelCoords.length;
          let candidateCoord = 0;
          let touchingLevel = -1;
          let touchingLateral = -1;
          let touchingEntry = null;
          let stackCnt = 0;
          for (let trackingLevel = 0; trackingLevel < levelCnt; trackingLevel += 1) {
              const trackingCoord = levelCoords[trackingLevel];
              // if the current level is past the placed entry, we have found a good empty space and can stop.
              // if strictOrder, keep finding more lateral intersections.
              if (!strictOrder && trackingCoord >= candidateCoord + newEntryThickness) {
                  break;
              }
              let trackingEntries = entriesByLevel[trackingLevel];
              let trackingEntry;
              let searchRes = binarySearch(trackingEntries, newEntry.span.start, getEntrySpanEnd); // find first entry after newEntry's end
              let lateralIndex = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
              while ( // loop through entries that horizontally intersect
              (trackingEntry = trackingEntries[lateralIndex]) && // but not past the whole entry list
                  trackingEntry.span.start < newEntry.span.end // and not entirely past newEntry
              ) {
                  let trackingEntryBottom = trackingCoord + this.getEntryThickness(trackingEntry);
                  // intersects into the top of the candidate?
                  if (trackingEntryBottom > candidateCoord) {
                      candidateCoord = trackingEntryBottom;
                      touchingEntry = trackingEntry;
                      touchingLevel = trackingLevel;
                      touchingLateral = lateralIndex;
                  }
                  // butts up against top of candidate? (will happen if just intersected as well)
                  if (trackingEntryBottom === candidateCoord) {
                      // accumulate the highest possible stackCnt of the trackingEntries that butt up
                      stackCnt = Math.max(stackCnt, stackCnts[buildEntryKey(trackingEntry)] + 1);
                  }
                  lateralIndex += 1;
              }
          }
          // the destination level will be after touchingEntry's level. find it
          let destLevel = 0;
          if (touchingEntry) {
              destLevel = touchingLevel + 1;
              while (destLevel < levelCnt && levelCoords[destLevel] < candidateCoord) {
                  destLevel += 1;
              }
          }
          // if adding to an existing level, find where to insert
          let destLateral = -1;
          if (destLevel < levelCnt && levelCoords[destLevel] === candidateCoord) {
              destLateral = binarySearch(entriesByLevel[destLevel], newEntry.span.end, getEntrySpanEnd)[0];
          }
          return {
              touchingLevel,
              touchingLateral,
              touchingEntry,
              stackCnt,
              levelCoord: candidateCoord,
              level: destLevel,
              lateral: destLateral,
          };
      }
      // sorted by levelCoord (lowest to highest)
      toRects() {
          let { entriesByLevel, levelCoords } = this;
          let levelCnt = entriesByLevel.length;
          let rects = [];
          for (let level = 0; level < levelCnt; level += 1) {
              let entries = entriesByLevel[level];
              let levelCoord = levelCoords[level];
              for (let entry of entries) {
                  rects.push(Object.assign(Object.assign({}, entry), { thickness: this.getEntryThickness(entry), levelCoord }));
              }
          }
          return rects;
      }
  }
  function getEntrySpanEnd(entry) {
      return entry.span.end;
  }
  /*
  Generates a unique ID whose lifespan is a single run of SegHierarchy, so can be really specific
  without fear of accidentally busting the cache on subsequent rerenders
  */
  function buildEntryKey(entry) {
      return entry.index + ':' + entry.span.start;
  }
  /*
  returns groups with entries sorted by input order
  */
  function groupIntersectingEntries(entries) {
      let merges = [];
      for (let entry of entries) {
          let filteredMerges = [];
          let hungryMerge = {
              span: entry.span,
              entries: [entry],
          };
          for (let merge of merges) {
              if (intersectSpans(merge.span, hungryMerge.span)) {
                  hungryMerge = {
                      span: joinSpans(merge.span, hungryMerge.span),
                      entries: merge.entries.concat(hungryMerge.entries), // keep preexisting merge's items first. maintains order
                  };
              }
              else {
                  filteredMerges.push(merge);
              }
          }
          filteredMerges.push(hungryMerge);
          merges = filteredMerges;
      }
      return merges.map((merge) => {
          const segs = merge.entries.map(extractEntrySeg);
          return {
              key: buildIsoString(computeEarliestSegStart(segs)),
              span: merge.span,
              segs,
          };
      });
  }
  function extractEntrySeg(entry) {
      return entry.seg;
  }
  function joinSpans(span0, span1) {
      return {
          start: Math.min(span0.start, span1.start),
          end: Math.max(span0.end, span1.end),
      };
  }
  function intersectSpans(span0, span1) {
      let start = Math.max(span0.start, span1.start);
      let end = Math.min(span0.end, span1.end);
      if (start < end) {
          return { start, end };
      }
      return null;
  }
  // general util
  // ---------------------------------------------------------------------------------------------------------------------
  function insertAt(arr, index, item) {
      arr.splice(index, 0, item);
  }
  function binarySearch(a, searchVal, getItemVal) {
      let startIndex = 0;
      let endIndex = a.length; // exclusive
      if (!endIndex || searchVal < getItemVal(a[startIndex])) { // no items OR before first item
          return [0, 0];
      }
      if (searchVal > getItemVal(a[endIndex - 1])) { // after last item
          return [endIndex, 0];
      }
      while (startIndex < endIndex) {
          let middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
          let middleVal = getItemVal(a[middleIndex]);
          if (searchVal < middleVal) {
              endIndex = middleIndex;
          }
          else if (searchVal > middleVal) {
              startIndex = middleIndex + 1;
          }
          else { // equal!
              return [middleIndex, 1];
          }
      }
      return [startIndex, 0];
  }

  /*
  An abstraction for a dragging interaction originating on an event.
  Does higher-level things than PointerDragger, such as possibly:
  - a "mirror" that moves with the pointer
  - a minimum number of pixels or other criteria for a true drag to begin

  subclasses must emit:
  - pointerdown
  - dragstart
  - dragmove
  - pointerup
  - dragend
  */
  class ElementDragging {
      constructor(el, selector) {
          this.emitter = new Emitter();
      }
      destroy() {
      }
      setMirrorIsVisible(bool) {
          // optional if subclass doesn't want to support a mirror
      }
      setMirrorNeedsRevert(bool) {
          // optional if subclass doesn't want to support a mirror
      }
      setAutoScrollEnabled(bool) {
          // optional
      }
  }

  // TODO: get rid of this in favor of options system,
  // tho it's really easy to access this globally rather than pass thru options.
  const config = {};

  /*
  Information about what will happen when an external element is dragged-and-dropped
  onto a calendar. Contains information for creating an event.
  */
  const DRAG_META_REFINERS = {
      startTime: createDuration,
      duration: createDuration,
      create: Boolean,
      sourceId: String,
  };
  function parseDragMeta(raw) {
      let { refined, extra } = refineProps(raw, DRAG_META_REFINERS);
      return {
          startTime: refined.startTime || null,
          duration: refined.duration || null,
          create: refined.create != null ? refined.create : true,
          sourceId: refined.sourceId,
          leftoverProps: extra,
      };
  }

  class DaySeriesModel {
      constructor(range, dateProfileGenerator) {
          let date = range.start;
          let { end } = range;
          let indices = [];
          let dates = [];
          let dayIndex = -1;
          while (date < end) { // loop each day from start to end
              if (dateProfileGenerator.isHiddenDay(date)) {
                  indices.push(dayIndex + 0.5); // mark that it's between indices
              }
              else {
                  dayIndex += 1;
                  indices.push(dayIndex);
                  dates.push(date);
              }
              date = addDays(date, 1);
          }
          this.dates = dates;
          this.indices = indices;
          this.cnt = dates.length;
      }
      sliceRange(range) {
          let firstIndex = this.getDateDayIndex(range.start); // inclusive first index
          let lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
          let clippedFirstIndex = Math.max(0, firstIndex);
          let clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
          // deal with in-between indices
          clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
          clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
          if (clippedFirstIndex <= clippedLastIndex) {
              return {
                  firstIndex: clippedFirstIndex,
                  lastIndex: clippedLastIndex,
                  isStart: firstIndex === clippedFirstIndex,
                  isEnd: lastIndex === clippedLastIndex,
              };
          }
          return null;
      }
      // Given a date, returns its chronolocial cell-index from the first cell of the grid.
      // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
      // If before the first offset, returns a negative number.
      // If after the last offset, returns an offset past the last cell offset.
      // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
      getDateDayIndex(date) {
          let { indices } = this;
          let dayOffset = Math.floor(diffDays(this.dates[0], date));
          if (dayOffset < 0) {
              return indices[0] - 1;
          }
          if (dayOffset >= indices.length) {
              return indices[indices.length - 1] + 1;
          }
          return indices[dayOffset];
      }
  }

  class DayTableModel {
      constructor(daySeries, breakOnWeeks) {
          let { dates } = daySeries;
          let daysPerRow;
          let firstDay;
          let rowCnt;
          if (breakOnWeeks) {
              // count columns until the day-of-week repeats
              firstDay = dates[0].getUTCDay();
              for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
                  if (dates[daysPerRow].getUTCDay() === firstDay) {
                      break;
                  }
              }
              rowCnt = Math.ceil(dates.length / daysPerRow);
          }
          else {
              rowCnt = 1;
              daysPerRow = dates.length;
          }
          this.rowCnt = rowCnt;
          this.colCnt = daysPerRow;
          this.daySeries = daySeries;
          this.cellRows = this.buildCells();
          this.headerDates = this.buildHeaderDates();
      }
      buildCells() {
          let rows = [];
          for (let row = 0; row < this.rowCnt; row += 1) {
              let cells = [];
              for (let col = 0; col < this.colCnt; col += 1) {
                  cells.push(this.buildCell(row, col));
              }
              rows.push(cells);
          }
          return rows;
      }
      buildCell(row, col) {
          let date = this.daySeries.dates[row * this.colCnt + col];
          return {
              key: date.toISOString(),
              date,
          };
      }
      buildHeaderDates() {
          let dates = [];
          for (let col = 0; col < this.colCnt; col += 1) {
              dates.push(this.cellRows[0][col].date);
          }
          return dates;
      }
      sliceRange(range) {
          let { colCnt } = this;
          let seriesSeg = this.daySeries.sliceRange(range);
          let segs = [];
          if (seriesSeg) {
              let { firstIndex, lastIndex } = seriesSeg;
              let index = firstIndex;
              while (index <= lastIndex) {
                  let row = Math.floor(index / colCnt);
                  let nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                  segs.push({
                      row,
                      firstCol: index % colCnt,
                      lastCol: (nextIndex - 1) % colCnt,
                      isStart: seriesSeg.isStart && index === firstIndex,
                      isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex,
                  });
                  index = nextIndex;
              }
          }
          return segs;
      }
  }

  const WHEEL_EVENT_NAMES = 'wheel mousewheel DomMouseScroll MozMousePixelScroll'.split(' ');
  /*
  Fires:
  - scrollStart (always user)
  - scroll
  - scrollEnd (always user)

  NOTE: detection is complicated (w/ touch and wheel) because ScrollerSyncer needs to know about it,
  but are we sure we can't just ignore programmatic scrollTo() calls with a flag? and determine the
  the scroll-master simply by who was the newest scroller? Does passive:true do things asynchronously?
  */
  class ScrollListener {
      constructor(el) {
          this.el = el;
          this.emitter = new Emitter();
          this.isScrolling = false;
          this.isTouching = false; // user currently has finger down?
          this.isRecentlyWheeled = false;
          this.isRecentlyScrolled = false;
          this.wheelWaiter = new DelayedRunner(this._handleWheelWaited.bind(this));
          this.scrollWaiter = new DelayedRunner(this._handleScrollWaited.bind(this));
          // Handlers
          // ----------------------------------------------------------------------------------------------
          this.handleScroll = () => {
              this.startScroll();
              this.emitter.trigger('scroll', this.isRecentlyWheeled, this.isTouching);
              this.isRecentlyScrolled = true;
              this.scrollWaiter.request(500);
          };
          // will fire *before* the scroll event is fired (might not cause a scroll)
          this.handleWheel = () => {
              this.isRecentlyWheeled = true;
              this.wheelWaiter.request(500);
          };
          // will fire *before* the scroll event is fired (might not cause a scroll)
          this.handleTouchStart = () => {
              this.isTouching = true;
          };
          this.handleTouchEnd = () => {
              this.isTouching = false;
              // if the user ended their touch, and the scroll area wasn't moving,
              // we consider this to be the end of the scroll.
              if (!this.isRecentlyScrolled) {
                  this.endScroll(); // won't fire if already ended
              }
          };
          el.addEventListener('scroll', this.handleScroll);
          el.addEventListener('touchstart', this.handleTouchStart, { passive: true });
          el.addEventListener('touchend', this.handleTouchEnd);
          for (let eventName of WHEEL_EVENT_NAMES) {
              el.addEventListener(eventName, this.handleWheel, { passive: true });
          }
      }
      destroy() {
          let { el } = this;
          el.removeEventListener('scroll', this.handleScroll);
          el.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
          el.removeEventListener('touchend', this.handleTouchEnd);
          for (let eventName of WHEEL_EVENT_NAMES) {
              el.removeEventListener(eventName, this.handleWheel, { passive: true });
          }
      }
      // Start / Stop
      // ----------------------------------------------------------------------------------------------
      startScroll() {
          if (!this.isScrolling) {
              this.isScrolling = true;
              this.emitter.trigger('scrollStart', this.isRecentlyWheeled, this.isTouching);
          }
      }
      endScroll() {
          if (this.isScrolling) {
              this.emitter.trigger('scrollEnd');
              this.isScrolling = false;
              this.isRecentlyScrolled = true;
              this.isRecentlyWheeled = false;
              this.scrollWaiter.clear();
              this.wheelWaiter.clear();
          }
      }
      _handleScrollWaited() {
          this.isRecentlyScrolled = false;
          // only end the scroll if not currently touching.
          // if touching, the scrolling will end later, on touchend.
          if (!this.isTouching) {
              this.endScroll(); // won't fire if already ended
          }
      }
      _handleWheelWaited() {
          this.isRecentlyWheeled = false;
      }
  }

  class Scroller extends DateComponent {
      constructor() {
          super(...arguments);
          // ref
          this.elRef = m$1();
      }
      render() {
          const { props } = this;
          // if there's only one axis that needs scrolling, the other axis will unintentionally have
          // scrollbars too, so we must force to 'hidden'
          const fallbackOverflow = (props.horizontal || props.vertical) ? 'hidden' : '';
          return (_("div", { ref: this.elRef, className: [
                  'fc-scroller',
                  props.hideScrollbars ? 'fc-scroller-nobars' : '',
                  ...(props.elClassNames || []),
              ].join(' '), style: Object.assign(Object.assign({}, props.elStyle), { overflowX: props.horizontal ? 'auto' : fallbackOverflow, overflowY: props.vertical ? 'auto' : fallbackOverflow }) }, props.children));
      }
      componentDidMount() {
          const el = this.elRef.current; // TODO: make dynamic with useEffect
          this.listener = new ScrollListener(el);
          this.disconnectSize = watchSize(el, (contentWidth, contentHeight) => {
              const { props, context } = this;
              const bottomScrollbarWidth = el.offsetHeight - el.clientHeight;
              const horizontalScrollbarWidth = el.offsetWidth - el.clientWidth;
              let rightScrollbarWidth = 0;
              let leftScrollbarWidth = 0;
              if (context.isRtl && getRtlScrollerConfig().leftScrollbars) {
                  leftScrollbarWidth = horizontalScrollbarWidth;
              }
              else {
                  rightScrollbarWidth = horizontalScrollbarWidth;
              }
              if (!isDimsEqual(this.currentWidth, contentWidth)) {
                  setRef(props.widthRef, this.currentWidth = contentWidth);
              }
              if (!isDimsEqual(this.currentHeight, contentHeight)) {
                  setRef(props.heightRef, this.currentHeight = contentHeight);
              }
              if (!isDimsEqual(this.currentBottomScrollbarWidth, bottomScrollbarWidth)) {
                  setRef(props.bottomScrollbarWidthRef, this.currentBottomScrollbarWidth = bottomScrollbarWidth);
              }
              if (!isDimsEqual(this.currentRightScrollbarWidth, rightScrollbarWidth)) {
                  setRef(props.rightScrollbarWidthRef, this.currentRightScrollbarWidth = rightScrollbarWidth);
              }
              if (!isDimsEqual(this.currentLeftScrollbarWidth, leftScrollbarWidth)) {
                  setRef(props.leftScrollbarWidthRef, this.currentLeftScrollbarWidth = leftScrollbarWidth);
              }
          });
      }
      componentWillUnmount() {
          const { props } = this;
          this.disconnectSize();
          this.listener.destroy();
          setRef(props.widthRef, null);
          setRef(props.heightRef, null);
          setRef(props.bottomScrollbarWidthRef, null);
          setRef(props.rightScrollbarWidthRef, null);
          setRef(props.leftScrollbarWidthRef, null);
      }
      endScroll() {
          this.listener.endScroll();
      }
      // Public API
      // -----------------------------------------------------------------------------------------------
      get x() {
          const { isRtl } = this.context;
          const el = this.elRef.current;
          return getNormalizedScrollX(el, isRtl);
      }
      get y() {
          const el = this.elRef.current;
          return el.scrollTop;
      }
      scrollTo({ x, y }) {
          const { isRtl } = this.context;
          const el = this.elRef.current;
          if (y != null) {
              el.scrollTop = y;
          }
          if (x != null) {
              setNormalizedScrollX(el, isRtl, x);
          }
      }
      addScrollEndListener(handler) {
          this.listener.emitter.on('scrollEnd', handler);
      }
      removeScrollEndListener(handler) {
          this.listener.emitter.off('scrollEnd', handler);
      }
  }
  // Public API
  // -------------------------------------------------------------------------------------------------
  // TODO: consolidate with scroll-left-norm.ts
  function getNormalizedScrollX(el, isRtl) {
      const { scrollLeft } = el;
      return isRtl ? getNormalizedRtlScrollX(scrollLeft, el) : scrollLeft;
  }
  function setNormalizedScrollX(el, isRtl, x) {
      el.scrollLeft = isRtl ? getNormalizedRtlScrollLeft(x, el) : x;
  }
  /*
  Returns a value in the 'reverse' system
  */
  function getNormalizedRtlScrollX(scrollLeft, el) {
      switch (getRtlScrollerConfig().system) {
          case 'positive':
              return el.scrollWidth - el.clientWidth - scrollLeft;
          case 'negative':
              return -scrollLeft;
      }
      return scrollLeft;
  }
  /*
  Receives a value in the 'reverse' system
  TODO: is this really the same equations as getNormalizedRtlScrollX??? I think so
    If so, consolidate. With isRtl check too
  */
  function getNormalizedRtlScrollLeft(x, el) {
      switch (getRtlScrollerConfig().system) {
          case 'positive':
              return el.scrollWidth - el.clientWidth - x;
          case 'negative':
              return -x;
      }
      return x;
  }
  let _rtlScrollerConfig;
  function getRtlScrollerConfig() {
      return _rtlScrollerConfig || (_rtlScrollerConfig = detectRtlScrollerConfig());
  }
  function detectRtlScrollerConfig() {
      let el = document.createElement('div');
      el.style.position = 'absolute';
      el.style.top = '-1000px';
      el.style.width = '100px'; // must be at least the side of scrollbars or you get inaccurate values (#7335)
      el.style.height = '100px'; // "
      el.style.overflow = 'scroll';
      el.style.direction = 'rtl';
      let innerEl = document.createElement('div');
      innerEl.style.width = '200px';
      innerEl.style.height = '200px';
      el.appendChild(innerEl);
      document.body.appendChild(el);
      let system;
      if (el.scrollLeft > 0) {
          system = 'positive'; // scroll is a positive number from the left edge
      }
      else {
          el.scrollLeft = 50;
          if (el.scrollLeft > 0) {
              system = 'reverse'; // scroll is a positive number from the right edge
          }
          else {
              system = 'negative'; // scroll is a negative number from the right edge
          }
      }
      let rightScrollbars = innerEl.getBoundingClientRect().right < el.getBoundingClientRect().right;
      removeElement(el);
      return { system, leftScrollbars: !rightScrollbars };
  }

  class Slicer {
      constructor() {
          this.sliceBusinessHours = memoize(this._sliceBusinessHours);
          this.sliceDateSelection = memoize(this._sliceDateSpan);
          this.sliceEventStore = memoize(this._sliceEventStore);
          this.sliceEventDrag = memoize(this._sliceInteraction);
          this.sliceEventResize = memoize(this._sliceInteraction);
          this.forceDayIfListItem = false; // hack
      }
      sliceProps(props, dateProfile, nextDayThreshold, context, ...extraArgs) {
          let { eventUiBases } = props;
          let eventSegs = this.sliceEventStore(props.eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs);
          return {
              dateSelectionSegs: this.sliceDateSelection(props.dateSelection, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs),
              businessHourSegs: this.sliceBusinessHours(props.businessHours, dateProfile, nextDayThreshold, context, ...extraArgs),
              fgEventSegs: eventSegs.fg,
              bgEventSegs: eventSegs.bg,
              eventDrag: this.sliceEventDrag(props.eventDrag, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
              eventResize: this.sliceEventResize(props.eventResize, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs),
              eventSelection: props.eventSelection,
          }; // TODO: give interactionSegs?
      }
      sliceNowDate(// does not memoize
      date, dateProfile, nextDayThreshold, context, ...extraArgs) {
          return this._sliceDateSpan({ range: { start: date, end: addMs(date, 1) }, allDay: false }, // add 1 ms, protect against null range
          dateProfile, nextDayThreshold, {}, context, ...extraArgs);
      }
      _sliceBusinessHours(businessHours, dateProfile, nextDayThreshold, context, ...extraArgs) {
          if (!businessHours) {
              return [];
          }
          return this._sliceEventStore(expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context), {}, dateProfile, nextDayThreshold, ...extraArgs).bg;
      }
      _sliceEventStore(eventStore, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
          if (eventStore) {
              let rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
              return {
                  bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
                  fg: this.sliceEventRanges(rangeRes.fg, extraArgs),
              };
          }
          return { bg: [], fg: [] };
      }
      _sliceInteraction(interaction, eventUiBases, dateProfile, nextDayThreshold, ...extraArgs) {
          if (!interaction) {
              return null;
          }
          let rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
          return {
              segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
              affectedInstances: interaction.affectedEvents.instances,
              isEvent: interaction.isEvent,
          };
      }
      _sliceDateSpan(dateSpan, dateProfile, nextDayThreshold, eventUiBases, context, ...extraArgs) {
          if (!dateSpan) {
              return [];
          }
          let activeRange = computeActiveRange(dateProfile, Boolean(nextDayThreshold));
          let activeDateSpanRange = intersectRanges(dateSpan.range, activeRange);
          if (activeDateSpanRange) {
              dateSpan = Object.assign(Object.assign({}, dateSpan), { range: activeDateSpanRange });
              let eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
              let segs = this.sliceRange(dateSpan.range, ...extraArgs);
              for (let seg of segs) {
                  seg.eventRange = eventRange;
              }
              return segs;
          }
          return [];
      }
      /*
      "complete" seg means it has component and eventRange
      */
      sliceEventRanges(eventRanges, extraArgs) {
          let segs = [];
          for (let eventRange of eventRanges) {
              segs.push(...this.sliceEventRange(eventRange, extraArgs));
          }
          return segs;
      }
      /*
      "complete" seg means it has component and eventRange
      */
      sliceEventRange(eventRange, extraArgs) {
          let dateRange = eventRange.range;
          // hack to make multi-day events that are being force-displayed as list-items to take up only one day
          if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
              dateRange = {
                  start: dateRange.start,
                  end: addDays(dateRange.start, 1),
              };
          }
          let segs = this.sliceRange(dateRange, ...extraArgs);
          for (let seg of segs) {
              seg.eventRange = eventRange;
              seg.isStart = eventRange.isStart && seg.isStart;
              seg.isEnd = eventRange.isEnd && seg.isEnd;
          }
          return segs;
      }
  }
  /*
  for incorporating slotMinTime/slotMaxTime if appropriate
  TODO: should be part of DateProfile!
  TimelineDateProfile already does this btw
  */
  function computeActiveRange(dateProfile, isComponentAllDay) {
      let range = dateProfile.activeRange;
      if (isComponentAllDay) {
          return range;
      }
      return {
          start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
          end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5), // 864e5 = ms in a day
      };
  }

  // high-level segmenting-aware tester functions
  // ------------------------------------------------------------------------------------------------------------------------
  function isInteractionValid(interaction, dateProfile, context) {
      let { instances } = interaction.mutatedEvents;
      for (let instanceId in instances) {
          if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
              return false;
          }
      }
      return isNewPropsValid({ eventDrag: interaction }, context); // HACK: the eventDrag props is used for ALL interactions
  }
  function isDateSelectionValid(dateSelection, dateProfile, context) {
      if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
          return false;
      }
      return isNewPropsValid({ dateSelection }, context);
  }
  function isNewPropsValid(newProps, context) {
      let calendarState = context.getCurrentData();
      let props = Object.assign({ businessHours: calendarState.businessHours, dateSelection: '', eventStore: calendarState.eventStore, eventUiBases: calendarState.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
      return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
  }
  function isPropsValid(state, context, dateSpanMeta = {}, filterConfig) {
      if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
          return false;
      }
      if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
          return false;
      }
      return true;
  }
  // Moving Event Validation
  // ------------------------------------------------------------------------------------------------------------------------
  function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
      let currentState = context.getCurrentData();
      let interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
      let subjectEventStore = interaction.mutatedEvents;
      let subjectDefs = subjectEventStore.defs;
      let subjectInstances = subjectEventStore.instances;
      let subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
          state.eventUiBases :
          { '': currentState.selectionConfig });
      if (filterConfig) {
          subjectConfigs = mapHash(subjectConfigs, filterConfig);
      }
      // exclude the subject events. TODO: exclude defs too?
      let otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
      let otherDefs = otherEventStore.defs;
      let otherInstances = otherEventStore.instances;
      let otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
      for (let subjectInstanceId in subjectInstances) {
          let subjectInstance = subjectInstances[subjectInstanceId];
          let subjectRange = subjectInstance.range;
          let subjectConfig = subjectConfigs[subjectInstance.defId];
          let subjectDef = subjectDefs[subjectInstance.defId];
          // constraint
          if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
              return false;
          }
          // overlap
          let { eventOverlap } = context.options;
          let eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;
          for (let otherInstanceId in otherInstances) {
              let otherInstance = otherInstances[otherInstanceId];
              // intersect! evaluate
              if (rangesIntersect(subjectRange, otherInstance.range)) {
                  let otherOverlap = otherConfigs[otherInstance.defId].overlap;
                  // consider the other event's overlap. only do this if the subject event is a "real" event
                  if (otherOverlap === false && interaction.isEvent) {
                      return false;
                  }
                  if (subjectConfig.overlap === false) {
                      return false;
                  }
                  if (eventOverlapFunc && !eventOverlapFunc(new EventImpl(context, otherDefs[otherInstance.defId], otherInstance), // still event
                  new EventImpl(context, subjectDef, subjectInstance))) {
                      return false;
                  }
              }
          }
          // allow (a function)
          let calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state
          for (let subjectAllow of subjectConfig.allows) {
              let subjectDateSpan = Object.assign(Object.assign({}, dateSpanMeta), { range: subjectInstance.range, allDay: subjectDef.allDay });
              let origDef = calendarEventStore.defs[subjectDef.defId];
              let origInstance = calendarEventStore.instances[subjectInstanceId];
              let eventApi;
              if (origDef) { // was previously in the calendar
                  eventApi = new EventImpl(context, origDef, origInstance);
              }
              else { // was an external event
                  eventApi = new EventImpl(context, subjectDef); // no instance, because had no dates
              }
              if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
                  return false;
              }
          }
      }
      return true;
  }
  // Date Selection Validation
  // ------------------------------------------------------------------------------------------------------------------------
  function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
      let relevantEventStore = state.eventStore;
      let relevantDefs = relevantEventStore.defs;
      let relevantInstances = relevantEventStore.instances;
      let selection = state.dateSelection;
      let selectionRange = selection.range;
      let { selectionConfig } = context.getCurrentData();
      if (filterConfig) {
          selectionConfig = filterConfig(selectionConfig);
      }
      // constraint
      if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
          return false;
      }
      // overlap
      let { selectOverlap } = context.options;
      let selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;
      for (let relevantInstanceId in relevantInstances) {
          let relevantInstance = relevantInstances[relevantInstanceId];
          // intersect! evaluate
          if (rangesIntersect(selectionRange, relevantInstance.range)) {
              if (selectionConfig.overlap === false) {
                  return false;
              }
              if (selectOverlapFunc && !selectOverlapFunc(new EventImpl(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
                  return false;
              }
          }
      }
      // allow (a function)
      for (let selectionAllow of selectionConfig.allows) {
          let fullDateSpan = Object.assign(Object.assign({}, dateSpanMeta), selection);
          if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
              return false;
          }
      }
      return true;
  }
  // Constraint Utils
  // ------------------------------------------------------------------------------------------------------------------------
  function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
      for (let constraint of constraints) {
          if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
              return false;
          }
      }
      return true;
  }
  function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
  otherEventStore, // for if constraint is an even group ID
  businessHoursUnexpanded, // for if constraint is 'businessHours'
  context) {
      if (constraint === 'businessHours') {
          return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
      }
      if (typeof constraint === 'string') { // an group ID
          return eventStoreToRanges(filterEventStoreDefs(otherEventStore, (eventDef) => eventDef.groupId === constraint));
      }
      if (typeof constraint === 'object' && constraint) { // non-null object
          return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
      }
      return []; // if it's false
  }
  // TODO: move to event-store file?
  function eventStoreToRanges(eventStore) {
      let { instances } = eventStore;
      let ranges = [];
      for (let instanceId in instances) {
          ranges.push(instances[instanceId].range);
      }
      return ranges;
  }
  // TODO: move to geom file?
  function anyRangesContainRange(outerRanges, innerRange) {
      for (let outerRange of outerRanges) {
          if (rangeContainsRange(outerRange, innerRange)) {
              return true;
          }
      }
      return false;
  }

  function getIsHeightAuto(options) {
      return options.height === 'auto' || options.viewHeight === 'auto';
  }
  function getStickyHeaderDates(options) {
      let { stickyHeaderDates } = options;
      if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
          stickyHeaderDates = getIsHeightAuto(options);
      }
      return stickyHeaderDates;
  }
  function getStickyFooterScrollbar(options) {
      let { stickyFooterScrollbar } = options;
      if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
          stickyFooterScrollbar = getIsHeightAuto(options);
      }
      return stickyFooterScrollbar;
  }
  function getScrollerSyncerClass(pluginHooks) {
      const ScrollerSyncer = pluginHooks.scrollerSyncerClass;
      if (!ScrollerSyncer) {
          throw new RangeError('Must import @fullcalendar/scrollgrid');
      }
      return ScrollerSyncer;
  }

  /*
  TODO: make API where createRefMap() called
  */
  class RefMap {
      constructor(masterCallback) {
          this.masterCallback = masterCallback;
          this.rev = '';
          this.current = new Map();
          this.callbacks = new Map;
          this.handleValue = (val, key) => {
              let { current, callbacks } = this;
              if (val === null) {
                  current.delete(key);
                  callbacks.delete(key);
              }
              else {
                  current.set(key, val);
              }
              this.rev = guid();
              if (this.masterCallback) {
                  this.masterCallback(val, key);
              }
          };
      }
      createRef(key) {
          let refCallback = this.callbacks.get(key);
          if (!refCallback) {
              refCallback = (val) => {
                  this.handleValue(val, key);
              };
              this.callbacks.set(key, refCallback);
          }
          return refCallback;
      }
  }

  class NowTimer extends b {
      constructor(props, context) {
          super(props, context);
          this.initialNowDate = getNow(context.options.now, context.dateEnv);
          this.initialNowQueriedMs = new Date().valueOf();
          this.state = this.computeTiming().currentState;
      }
      render() {
          let { props, state } = this;
          return props.children(state.nowDate, state.todayRange);
      }
      componentDidMount() {
          this.setTimeout();
      }
      componentDidUpdate(prevProps) {
          if (prevProps.unit !== this.props.unit) {
              this.clearTimeout();
              this.setTimeout();
          }
      }
      componentWillUnmount() {
          this.clearTimeout();
      }
      computeTiming() {
          let { props, context } = this;
          let unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
          let currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
          let nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
          let waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
          // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
          // ensure no longer than a day
          waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
          return {
              currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
              nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
              waitMs,
          };
      }
      setTimeout() {
          let { nextState, waitMs } = this.computeTiming();
          this.timeoutId = setTimeout(() => {
              this.setState(nextState, () => {
                  this.setTimeout();
              });
          }, waitMs);
      }
      clearTimeout() {
          if (this.timeoutId) {
              clearTimeout(this.timeoutId);
          }
      }
  }
  NowTimer.contextType = ViewContextType;
  function buildDayRange(date) {
      let start = startOfDay(date);
      let end = addDays(start, 1);
      return { start, end };
  }

  class EventContainer extends BaseComponent {
      constructor() {
          super(...arguments);
          this.handleEl = (el) => {
              this.el = el;
              if (el) {
                  setElEventRange(el, this.props.eventRange);
              }
          };
      }
      render() {
          const { props, context } = this;
          const { options } = context;
          const { eventRange } = props;
          const { ui } = eventRange;
          const renderProps = {
              event: new EventImpl(context, eventRange.def, eventRange.instance),
              view: context.viewApi,
              timeText: props.timeText,
              textColor: ui.textColor,
              backgroundColor: ui.backgroundColor,
              borderColor: ui.borderColor,
              isDraggable: !props.disableDragging && computeEventRangeDraggable(eventRange, context),
              isStartResizable: !props.disableResizing && props.isStart && eventRange.ui.durationEditable && options.eventResizableFromStart,
              isEndResizable: !props.disableResizing && props.isEnd && eventRange.ui.durationEditable,
              isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
              isStart: Boolean(props.isStart),
              isEnd: Boolean(props.isEnd),
              isPast: Boolean(props.isPast),
              isFuture: Boolean(props.isFuture),
              isToday: Boolean(props.isToday),
              isSelected: Boolean(props.isSelected),
              isDragging: Boolean(props.isDragging),
              isResizing: Boolean(props.isResizing),
          };
          return (_(ContentContainer, Object.assign({}, props /* contains children */, { elRef: this.handleEl, elClasses: [
                  ...getEventClassNames(renderProps),
                  ...eventRange.ui.classNames,
                  ...(props.elClasses || []),
              ], renderProps: renderProps, generatorName: "eventContent", customGenerator: options.eventContent, defaultGenerator: props.defaultGenerator, classNameGenerator: options.eventClassNames, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount })));
      }
      componentDidUpdate(prevProps) {
          if (this.el && this.props.eventRange !== prevProps.eventRange) {
              setElEventRange(this.el, this.props.eventRange);
          }
      }
  }

  // should not be a purecomponent
  class StandardEvent extends BaseComponent {
      render() {
          let { props, context } = this;
          let { options } = context;
          let { eventRange } = props;
          let { ui } = eventRange;
          let timeFormat = options.eventTimeFormat || props.defaultTimeFormat;
          let timeText = buildEventRangeTimeText(eventRange, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd, props.startOverride, props.endOverride);
          return (_(EventContainer, Object.assign({}, props /* includes elRef */, { elTag: "a", elStyle: {
                  borderColor: ui.borderColor,
                  backgroundColor: ui.backgroundColor,
              }, elAttrs: getEventRangeAnchorAttrs(eventRange, context), defaultGenerator: renderInnerContent$1$1, timeText: timeText }), (InnerContent, eventContentArg) => (_(k$1, null,
              _(InnerContent, { elTag: "div", elClasses: ['fc-event-inner'], elStyle: { color: eventContentArg.textColor } }),
              Boolean(eventContentArg.isStartResizable) && (_("div", { className: "fc-event-resizer fc-event-resizer-start" })),
              Boolean(eventContentArg.isEndResizable) && (_("div", { className: "fc-event-resizer fc-event-resizer-end" }))))));
      }
  }
  function renderInnerContent$1$1(innerProps) {
      return (_(k$1, null,
          innerProps.timeText && (_("div", { className: "fc-event-time" }, innerProps.timeText)),
          _("div", { className: "fc-event-title-outer" },
              _("div", { className: "fc-event-title" }, innerProps.event.title || _(k$1, null, "\u00A0")))));
  }

  const NowIndicatorContainer = (props) => (_(ViewContextType.Consumer, null, (context) => {
      let { options } = context;
      let renderProps = {
          isAxis: props.isAxis,
          date: context.dateEnv.toDate(props.date),
          view: context.viewApi,
      };
      return (_(ContentContainer, Object.assign({}, props /* includes children */, { elTag: props.elTag || 'div', renderProps: renderProps, generatorName: "nowIndicatorContent", customGenerator: options.nowIndicatorContent, classNameGenerator: options.nowIndicatorClassNames, didMount: options.nowIndicatorDidMount, willUnmount: options.nowIndicatorWillUnmount })));
  }));

  class BgEvent extends BaseComponent {
      render() {
          let { props } = this;
          let { eventRange } = props;
          return (_(EventContainer, { elTag: "div", elClasses: ['fc-bg-event'], elStyle: { backgroundColor: eventRange.ui.backgroundColor }, defaultGenerator: renderInnerContent$3, eventRange: eventRange, isStart: props.isStart, isEnd: props.isEnd, timeText: "", isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, disableDragging: true, disableResizing: true }));
      }
  }
  function renderInnerContent$3(props) {
      let { title } = props.event;
      return title && (_("div", { className: "fc-event-title" }, props.event.title));
  }
  function renderFill(fillType) {
      return (_("div", { className: `fc-${fillType}` }));
  }

  const WeekNumberContainer = (props) => (_(ViewContextType.Consumer, null, (context) => {
      let { dateEnv, options } = context;
      let { date } = props;
      let format = options.weekNumberFormat || props.defaultFormat;
      let num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
      let text = dateEnv.format(date, format);
      let renderProps = { num, text, date };
      return (_(ContentContainer // why isn't WeekNumberContentArg being auto-detected?
      , Object.assign({}, props /* includes children */, { renderProps: renderProps, generatorName: "weekNumberContent", customGenerator: options.weekNumberContent, defaultGenerator: renderInner$1, classNameGenerator: options.weekNumberClassNames, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount })));
  }));
  function renderInner$1(innerProps) {
      return innerProps.text;
  }

  /*
  Calendar instance for ALL frameworks
  */
  class CalendarImpl {
      getCurrentData() {
          return this.currentDataManager.getCurrentData();
      }
      dispatch(action) {
          this.currentDataManager.dispatch(action);
      }
      get view() { return this.getCurrentData().viewApi; }
      batchRendering(callback) {
          callback();
      }
      updateSize() {
          console.warn('Doesnt do anything!');
      }
      // Options
      // -----------------------------------------------------------------------------------------------------------------
      setOption(name, val) {
          this.dispatch({
              type: 'SET_OPTION',
              optionName: name,
              rawOptionValue: val,
          });
      }
      getOption(name) {
          return this.currentDataManager.currentCalendarOptionsInput[name];
      }
      getAvailableLocaleCodes() {
          return Object.keys(this.getCurrentData().availableRawLocales);
      }
      // Trigger
      // -----------------------------------------------------------------------------------------------------------------
      on(handlerName, handler) {
          let { currentDataManager } = this;
          if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
              currentDataManager.emitter.on(handlerName, handler);
          }
          else {
              console.warn(`Unknown listener name '${handlerName}'`);
          }
      }
      off(handlerName, handler) {
          this.currentDataManager.emitter.off(handlerName, handler);
      }
      // not meant for public use
      trigger(handlerName, ...args) {
          this.currentDataManager.emitter.trigger(handlerName, ...args);
      }
      // View
      // -----------------------------------------------------------------------------------------------------------------
      changeView(viewType, dateOrRange) {
          this.batchRendering(() => {
              this.unselect();
              if (dateOrRange) {
                  if (dateOrRange.start && dateOrRange.end) { // a range
                      this.dispatch({
                          type: 'CHANGE_VIEW_TYPE',
                          viewType,
                      });
                      this.dispatch({
                          type: 'SET_OPTION',
                          optionName: 'visibleRange',
                          rawOptionValue: dateOrRange,
                      });
                  }
                  else {
                      let { dateEnv } = this.getCurrentData();
                      this.dispatch({
                          type: 'CHANGE_VIEW_TYPE',
                          viewType,
                          dateMarker: dateEnv.createMarker(dateOrRange),
                      });
                  }
              }
              else {
                  this.dispatch({
                      type: 'CHANGE_VIEW_TYPE',
                      viewType,
                  });
              }
          });
      }
      // Forces navigation to a view for the given date.
      // `viewType` can be a specific view name or a generic one like "week" or "day".
      // needs to change
      zoomTo(dateMarker, viewType) {
          let state = this.getCurrentData();
          let spec;
          viewType = viewType || 'day'; // day is default zoom
          spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
          this.unselect();
          if (spec) {
              this.dispatch({
                  type: 'CHANGE_VIEW_TYPE',
                  viewType: spec.type,
                  dateMarker,
              });
          }
          else {
              this.dispatch({
                  type: 'CHANGE_DATE',
                  dateMarker,
              });
          }
      }
      // Given a duration singular unit, like "week" or "day", finds a matching view spec.
      // Preference is given to views that have corresponding buttons.
      getUnitViewSpec(unit) {
          let { viewSpecs, toolbarConfig } = this.getCurrentData();
          let viewTypes = [].concat(toolbarConfig.header ? toolbarConfig.header.viewsWithButtons : [], toolbarConfig.footer ? toolbarConfig.footer.viewsWithButtons : []);
          let i;
          let spec;
          for (let viewType in viewSpecs) {
              viewTypes.push(viewType);
          }
          for (i = 0; i < viewTypes.length; i += 1) {
              spec = viewSpecs[viewTypes[i]];
              if (spec) {
                  if (spec.singleUnit === unit) {
                      return spec;
                  }
              }
          }
          return null;
      }
      // Current Date
      // -----------------------------------------------------------------------------------------------------------------
      prev() {
          this.unselect();
          this.dispatch({ type: 'PREV' });
      }
      next() {
          this.unselect();
          this.dispatch({ type: 'NEXT' });
      }
      prevYear() {
          let state = this.getCurrentData();
          this.unselect();
          this.dispatch({
              type: 'CHANGE_DATE',
              dateMarker: state.dateEnv.addYears(state.currentDate, -1),
          });
      }
      nextYear() {
          let state = this.getCurrentData();
          this.unselect();
          this.dispatch({
              type: 'CHANGE_DATE',
              dateMarker: state.dateEnv.addYears(state.currentDate, 1),
          });
      }
      today() {
          let state = this.getCurrentData();
          this.unselect();
          this.dispatch({
              type: 'CHANGE_DATE',
              dateMarker: getNow(state.calendarOptions.now, state.dateEnv),
          });
      }
      gotoDate(zonedDateInput) {
          let state = this.getCurrentData();
          this.unselect();
          this.dispatch({
              type: 'CHANGE_DATE',
              dateMarker: state.dateEnv.createMarker(zonedDateInput),
          });
      }
      incrementDate(deltaInput) {
          let state = this.getCurrentData();
          let delta = createDuration(deltaInput);
          if (delta) { // else, warn about invalid input?
              this.unselect();
              this.dispatch({
                  type: 'CHANGE_DATE',
                  dateMarker: state.dateEnv.add(state.currentDate, delta),
              });
          }
      }
      getDate() {
          let state = this.getCurrentData();
          return state.dateEnv.toDate(state.currentDate);
      }
      // Date Formatting Utils
      // -----------------------------------------------------------------------------------------------------------------
      formatDate(d, formatter) {
          let { dateEnv } = this.getCurrentData();
          return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
      }
      // `settings` is for formatter AND isEndExclusive
      formatRange(d0, d1, settings) {
          let { dateEnv } = this.getCurrentData();
          return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
      }
      formatIso(d, omitTime) {
          let { dateEnv } = this.getCurrentData();
          return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime });
      }
      // Date Selection / Event Selection / DayClick
      // -----------------------------------------------------------------------------------------------------------------
      select(dateOrObj, endDate) {
          let selectionInput;
          if (endDate == null) {
              if (dateOrObj.start != null) {
                  selectionInput = dateOrObj;
              }
              else {
                  selectionInput = {
                      start: dateOrObj,
                      end: null,
                  };
              }
          }
          else {
              selectionInput = {
                  start: dateOrObj,
                  end: endDate,
              };
          }
          let state = this.getCurrentData();
          let selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
          if (selection) { // throw parse error otherwise?
              this.dispatch({ type: 'SELECT_DATES', selection });
              triggerDateSelect(selection, null, state);
          }
      }
      unselect(pev) {
          let state = this.getCurrentData();
          if (state.dateSelection) {
              this.dispatch({ type: 'UNSELECT_DATES' });
              triggerDateUnselect(pev, state);
          }
      }
      // Public Events API
      // -----------------------------------------------------------------------------------------------------------------
      addEvent(eventInput, sourceInput) {
          if (eventInput instanceof EventImpl) {
              let def = eventInput._def;
              let instance = eventInput._instance;
              let currentData = this.getCurrentData();
              // not already present? don't want to add an old snapshot
              if (!currentData.eventStore.defs[def.defId]) {
                  this.dispatch({
                      type: 'ADD_EVENTS',
                      eventStore: eventTupleToStore({ def, instance }), // TODO: better util for two args?
                  });
                  this.triggerEventAdd(eventInput);
              }
              return eventInput;
          }
          let state = this.getCurrentData();
          let eventSource;
          if (sourceInput instanceof EventSourceImpl) {
              eventSource = sourceInput.internalEventSource;
          }
          else if (typeof sourceInput === 'boolean') {
              if (sourceInput) { // true. part of the first event source
                  [eventSource] = hashValuesToArray(state.eventSources);
              }
          }
          else if (sourceInput != null) { // an ID. accepts a number too
              let sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
              if (!sourceApi) {
                  console.warn(`Could not find an event source with ID "${sourceInput}"`); // TODO: test
                  return null;
              }
              eventSource = sourceApi.internalEventSource;
          }
          let tuple = parseEvent(eventInput, eventSource, state, false);
          if (tuple) {
              let newEventApi = new EventImpl(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
              this.dispatch({
                  type: 'ADD_EVENTS',
                  eventStore: eventTupleToStore(tuple),
              });
              this.triggerEventAdd(newEventApi);
              return newEventApi;
          }
          return null;
      }
      triggerEventAdd(eventApi) {
          let { emitter } = this.getCurrentData();
          emitter.trigger('eventAdd', {
              event: eventApi,
              relatedEvents: [],
              revert: () => {
                  this.dispatch({
                      type: 'REMOVE_EVENTS',
                      eventStore: eventApiToStore(eventApi),
                  });
              },
          });
      }
      // TODO: optimize
      getEventById(id) {
          let state = this.getCurrentData();
          let { defs, instances } = state.eventStore;
          id = String(id);
          for (let defId in defs) {
              let def = defs[defId];
              if (def.publicId === id) {
                  if (def.recurringDef) {
                      return new EventImpl(state, def, null);
                  }
                  for (let instanceId in instances) {
                      let instance = instances[instanceId];
                      if (instance.defId === def.defId) {
                          return new EventImpl(state, def, instance);
                      }
                  }
              }
          }
          return null;
      }
      getEvents() {
          let currentData = this.getCurrentData();
          return buildEventApis(currentData.eventStore, currentData);
      }
      removeAllEvents() {
          this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
      }
      // Public Event Sources API
      // -----------------------------------------------------------------------------------------------------------------
      getEventSources() {
          let state = this.getCurrentData();
          let sourceHash = state.eventSources;
          let sourceApis = [];
          for (let internalId in sourceHash) {
              sourceApis.push(new EventSourceImpl(state, sourceHash[internalId]));
          }
          return sourceApis;
      }
      getEventSourceById(id) {
          let state = this.getCurrentData();
          let sourceHash = state.eventSources;
          id = String(id);
          for (let sourceId in sourceHash) {
              if (sourceHash[sourceId].publicId === id) {
                  return new EventSourceImpl(state, sourceHash[sourceId]);
              }
          }
          return null;
      }
      addEventSource(sourceInput) {
          let state = this.getCurrentData();
          if (sourceInput instanceof EventSourceImpl) {
              // not already present? don't want to add an old snapshot
              if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
                  this.dispatch({
                      type: 'ADD_EVENT_SOURCES',
                      sources: [sourceInput.internalEventSource],
                  });
              }
              return sourceInput;
          }
          let eventSource = parseEventSource(sourceInput, state);
          if (eventSource) { // TODO: error otherwise?
              this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
              return new EventSourceImpl(state, eventSource);
          }
          return null;
      }
      removeAllEventSources() {
          this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
      }
      refetchEvents() {
          this.dispatch({ type: 'FETCH_EVENT_SOURCES', isRefetch: true });
      }
      // Scroll
      // -----------------------------------------------------------------------------------------------------------------
      scrollToTime(timeInput) {
          let time = createDuration(timeInput);
          if (time) {
              this.trigger('_timeScrollRequest', time);
          }
      }
  }

  class Store {
      constructor() {
          this.handlers = [];
      }
      set(value) {
          this.currentValue = value;
          for (let handler of this.handlers) {
              handler(value);
          }
      }
      subscribe(handler) {
          this.handlers.push(handler);
          if (this.currentValue !== undefined) {
              handler(this.currentValue);
          }
      }
  }

  /*
  Subscribers will get a LIST of CustomRenderings
  */
  class CustomRenderingStore extends Store {
      constructor() {
          super(...arguments);
          this.map = new Map();
      }
      // for consistent order
      handle(customRendering) {
          const { map } = this;
          let updated = false;
          if (customRendering.isActive) {
              map.set(customRendering.id, customRendering);
              updated = true;
          }
          else if (map.has(customRendering.id)) {
              map.delete(customRendering.id);
              updated = true;
          }
          if (updated) {
              this.set(map);
          }
      }
  }

  var internal = {
    __proto__: null,
    BASE_OPTION_DEFAULTS: BASE_OPTION_DEFAULTS,
    BaseComponent: BaseComponent,
    BgEvent: BgEvent,
    CalendarImpl: CalendarImpl,
    CalendarRoot: CalendarRoot,
    ContentContainer: ContentContainer,
    CustomRenderingStore: CustomRenderingStore,
    DateComponent: DateComponent,
    DateEnv: DateEnv,
    DateProfileGenerator: DateProfileGenerator,
    DayCellContainer: DayCellContainer,
    DaySeriesModel: DaySeriesModel,
    DayTableModel: DayTableModel,
    DelayedRunner: DelayedRunner,
    ElementDragging: ElementDragging,
    ElementScrollController: ElementScrollController,
    Emitter: Emitter,
    EventContainer: EventContainer,
    EventImpl: EventImpl,
    Interaction: Interaction,
    MoreLinkContainer: MoreLinkContainer,
    NamedTimeZoneImpl: NamedTimeZoneImpl,
    NowIndicatorContainer: NowIndicatorContainer,
    NowTimer: NowTimer,
    PositionCache: PositionCache,
    RefMap: RefMap,
    ScrollController: ScrollController,
    Scroller: Scroller,
    SegHierarchy: SegHierarchy,
    Slicer: Slicer,
    Splitter: Splitter,
    StandardEvent: StandardEvent,
    Theme: Theme,
    ViewContainer: ViewContainer,
    ViewContextType: ViewContextType,
    WeekNumberContainer: WeekNumberContainer,
    WindowScrollController: WindowScrollController,
    addDays: addDays,
    addDurations: addDurations,
    addMs: addMs,
    addWeeks: addWeeks,
    afterSize: afterSize,
    allowContextMenu: allowContextMenu,
    allowSelection: allowSelection,
    applyMutationToEventStore: applyMutationToEventStore,
    applyStyle: applyStyle,
    asCleanDays: asCleanDays,
    asRoughMinutes: asRoughMinutes,
    asRoughMs: asRoughMs,
    asRoughSeconds: asRoughSeconds,
    binarySearch: binarySearch,
    buildElAttrs: buildElAttrs,
    buildEntryKey: buildEntryKey,
    buildEventApis: buildEventApis,
    buildEventRangeKey: buildEventRangeKey,
    buildEventRangeTimeText: buildEventRangeTimeText,
    buildIsoString: buildIsoString,
    buildNavLinkAttrs: buildNavLinkAttrs,
    collectFromHash: collectFromHash,
    combineEventUis: combineEventUis,
    compareByFieldSpecs: compareByFieldSpecs,
    compareNumbers: compareNumbers,
    compareObjs: compareObjs,
    computeEarliestSegStart: computeEarliestSegStart,
    computeEdges: computeEdges,
    computeInnerRect: computeInnerRect,
    computeRect: computeRect,
    computeVisibleDayRange: computeVisibleDayRange,
    config: config,
    constrainPoint: constrainPoint,
    createDuration: createDuration,
    createEmptyEventStore: createEmptyEventStore,
    createEventInstance: createEventInstance,
    createEventUi: createEventUi,
    createFormatter: createFormatter,
    diffDates: diffDates,
    diffDayAndTime: diffDayAndTime,
    diffDays: diffDays,
    diffPoints: diffPoints,
    diffWeeks: diffWeeks,
    diffWholeDays: diffWholeDays,
    diffWholeWeeks: diffWholeWeeks,
    disableCursor: disableCursor,
    elementClosest: elementClosest,
    elementMatches: elementMatches,
    enableCursor: enableCursor,
    eventTupleToStore: eventTupleToStore,
    filterHash: filterHash,
    findDirectChildren: findDirectChildren,
    findElements: findElements,
    flexibleCompare: flexibleCompare,
    formatDayString: formatDayString,
    formatIsoMonthStr: formatIsoMonthStr,
    formatIsoTimeString: formatIsoTimeString,
    fracToCssDim: fracToCssDim,
    getClippingParents: getClippingParents,
    getDateMeta: getDateMeta,
    getDayClassNames: getDayClassNames,
    getDefaultEventEnd: getDefaultEventEnd,
    getElEventRange: getElEventRange,
    getEntrySpanEnd: getEntrySpanEnd,
    getEventRangeAnchorAttrs: getEventRangeAnchorAttrs,
    getEventRangeMeta: getEventRangeMeta,
    getEventTargetViaRoot: getEventTargetViaRoot,
    getIsHeightAuto: getIsHeightAuto,
    getIsRtlScrollbarOnLeft: getIsRtlScrollbarOnLeft,
    getNormalizedScrollX: getNormalizedScrollX,
    getRectCenter: getRectCenter,
    getRelevantEvents: getRelevantEvents,
    getScrollbarWidths: getScrollbarWidths,
    getScrollerSyncerClass: getScrollerSyncerClass,
    getSlotClassNames: getSlotClassNames,
    getStickyFooterScrollbar: getStickyFooterScrollbar,
    getStickyHeaderDates: getStickyHeaderDates,
    getUniqueDomId: getUniqueDomId,
    greatestDurationDenominator: greatestDurationDenominator,
    groupIntersectingEntries: groupIntersectingEntries,
    guid: guid,
    hasBgRendering: hasBgRendering,
    hasCustomDayCellContent: hasCustomDayCellContent,
    identity: identity,
    injectStyles: injectStyles,
    interactionSettingsStore: interactionSettingsStore,
    interactionSettingsToStore: interactionSettingsToStore,
    intersectRanges: intersectRanges,
    intersectRects: intersectRects,
    intersectSpans: intersectSpans,
    isArraysEqual: isArraysEqual,
    isDateSelectionValid: isDateSelectionValid,
    isDateSpansEqual: isDateSpansEqual,
    isDimMapsEqual: isDimMapsEqual,
    isDimsEqual: isDimsEqual,
    isInt: isInt,
    isInteractionValid: isInteractionValid,
    isMultiDayRange: isMultiDayRange,
    isPropsEqual: isPropsEqual,
    isPropsValid: isPropsValid,
    isValidDate: isValidDate,
    mapHash: mapHash,
    memoize: memoize,
    memoizeArraylike: memoizeArraylike,
    memoizeHashlike: memoizeHashlike,
    memoizeObjArg: memoizeObjArg,
    mergeEventStores: mergeEventStores,
    multiplyDuration: multiplyDuration,
    padStart: padStart,
    parseBusinessHours: parseBusinessHours,
    parseClassNames: parseClassNames,
    parseDragMeta: parseDragMeta,
    parseEventDef: parseEventDef,
    parseFieldSpecs: parseFieldSpecs,
    parseMarker: parse,
    pointInsideRect: pointInsideRect,
    preventContextMenu: preventContextMenu,
    preventDefault: preventDefault,
    preventSelection: preventSelection,
    rangeContainsMarker: rangeContainsMarker,
    rangeContainsRange: rangeContainsRange,
    rangesEqual: rangesEqual,
    rangesIntersect: rangesIntersect,
    refineEventDef: refineEventDef,
    refineProps: refineProps,
    removeElement: removeElement,
    removeExact: removeExact,
    renderFill: renderFill,
    requestJson: requestJson,
    setNormalizedScrollX: setNormalizedScrollX,
    setRef: setRef,
    setStateDimMap: setStateDimMap,
    sliceEventStore: sliceEventStore,
    sortEventSegs: sortEventSegs,
    startOfDay: startOfDay,
    translateRect: translateRect,
    triggerDateSelect: triggerDateSelect,
    unpromisify: unpromisify,
    watchHeight: watchHeight,
    watchSize: watchSize,
    watchWidth: watchWidth,
    whenTransitionDone: whenTransitionDone,
    wholeDivideDurations: wholeDivideDurations
  };

  var preact = {
    __proto__: null,
    createPortal: j,
    createContext: createContext,
    flushSync: flushSync,
    Component: b,
    Fragment: k$1,
    cloneElement: E$1,
    createElement: _,
    createRef: m$1,
    h: _,
    hydrate: D$1,
    get isValidElement () { return t; },
    get options () { return l$1; },
    render: B$2,
    toChildArray: H$1
  };

  const globalLocales = [];

  const MINIMAL_RAW_EN_LOCALE = {
      code: 'en',
      week: {
          dow: 0,
          doy: 4, // 4 days need to be within the year to be considered the first week
      },
      direction: 'ltr',
      buttonText: {
          prev: 'prev',
          next: 'next',
          prevYear: 'prev year',
          nextYear: 'next year',
          year: 'year',
          today: 'today',
          month: 'month',
          week: 'week',
          day: 'day',
          list: 'list',
      },
      weekText: 'W',
      weekTextLong: 'Week',
      closeHint: 'Close',
      timeHint: 'Time',
      eventHint: 'Event',
      allDayText: 'all-day',
      moreLinkText: 'more',
      noEventsText: 'No events to display',
  };
  const RAW_EN_LOCALE = Object.assign(Object.assign({}, MINIMAL_RAW_EN_LOCALE), { 
      // Includes things we don't want other locales to inherit,
      // things that derive from other translatable strings.
      buttonHints: {
          prev: 'Previous $0',
          next: 'Next $0',
          today(buttonText, unit) {
              return (unit === 'day')
                  ? 'Today'
                  : `This ${buttonText}`;
          },
      }, viewHint: '$0 view', navLinkHint: 'Go to $0', moreLinkHint(eventCnt) {
          return `Show ${eventCnt} more event${eventCnt === 1 ? '' : 's'}`;
      } });
  function organizeRawLocales(explicitRawLocales) {
      let defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
      let allRawLocales = globalLocales.concat(explicitRawLocales);
      let rawLocaleMap = {
          en: RAW_EN_LOCALE,
      };
      for (let rawLocale of allRawLocales) {
          rawLocaleMap[rawLocale.code] = rawLocale;
      }
      return {
          map: rawLocaleMap,
          defaultCode,
      };
  }
  function buildLocale(inputSingular, available) {
      if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
          return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
      }
      return queryLocale(inputSingular, available);
  }
  function queryLocale(codeArg, available) {
      let codes = [].concat(codeArg || []); // will convert to array
      let raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
      return parseLocale(codeArg, codes, raw);
  }
  function queryRawLocale(codes, available) {
      for (let i = 0; i < codes.length; i += 1) {
          let parts = codes[i].toLocaleLowerCase().split('-');
          for (let j = parts.length; j > 0; j -= 1) {
              let simpleId = parts.slice(0, j).join('-');
              if (available[simpleId]) {
                  return available[simpleId];
              }
          }
      }
      return null;
  }
  function parseLocale(codeArg, codes, raw) {
      let merged = mergeProps([MINIMAL_RAW_EN_LOCALE, raw], ['buttonText']);
      delete merged.code; // don't want this part of the options
      let { week } = merged;
      delete merged.week;
      return {
          codeArg,
          codes,
          week,
          simpleNumberFormat: new Intl.NumberFormat(codeArg),
          options: merged,
      };
  }

  // TODO: easier way to add new hooks? need to update a million things
  function createPlugin(input) {
      return {
          id: guid(),
          name: input.name,
          premiumReleaseDate: input.premiumReleaseDate ? new Date(input.premiumReleaseDate) : undefined,
          deps: input.deps || [],
          reducers: input.reducers || [],
          isLoadingFuncs: input.isLoadingFuncs || [],
          contextInit: [].concat(input.contextInit || []),
          eventRefiners: input.eventRefiners || {},
          eventDefMemberAdders: input.eventDefMemberAdders || [],
          eventSourceRefiners: input.eventSourceRefiners || {},
          isDraggableTransformers: input.isDraggableTransformers || [],
          eventDragMutationMassagers: input.eventDragMutationMassagers || [],
          eventDefMutationAppliers: input.eventDefMutationAppliers || [],
          dateSelectionTransformers: input.dateSelectionTransformers || [],
          datePointTransforms: input.datePointTransforms || [],
          dateSpanTransforms: input.dateSpanTransforms || [],
          views: input.views || {},
          viewPropsTransformers: input.viewPropsTransformers || [],
          isPropsValid: input.isPropsValid || null,
          externalDefTransforms: input.externalDefTransforms || [],
          viewContainerAppends: input.viewContainerAppends || [],
          eventDropTransformers: input.eventDropTransformers || [],
          componentInteractions: input.componentInteractions || [],
          calendarInteractions: input.calendarInteractions || [],
          themeClasses: input.themeClasses || {},
          eventSourceDefs: input.eventSourceDefs || [],
          cmdFormatter: input.cmdFormatter,
          recurringTypes: input.recurringTypes || [],
          namedTimeZonedImpl: input.namedTimeZonedImpl,
          initialView: input.initialView || '',
          elementDraggingImpl: input.elementDraggingImpl,
          optionChangeHandlers: input.optionChangeHandlers || {},
          scrollerSyncerClass: input.scrollerSyncerClass || null,
          listenerRefiners: input.listenerRefiners || {},
          optionRefiners: input.optionRefiners || {},
          propSetHandlers: input.propSetHandlers || {},
      };
  }
  function buildPluginHooks(pluginDefs, globalDefs) {
      let currentPluginIds = {};
      let hooks = {
          premiumReleaseDate: undefined,
          reducers: [],
          isLoadingFuncs: [],
          contextInit: [],
          eventRefiners: {},
          eventDefMemberAdders: [],
          eventSourceRefiners: {},
          isDraggableTransformers: [],
          eventDragMutationMassagers: [],
          eventDefMutationAppliers: [],
          dateSelectionTransformers: [],
          datePointTransforms: [],
          dateSpanTransforms: [],
          views: {},
          viewPropsTransformers: [],
          isPropsValid: null,
          externalDefTransforms: [],
          viewContainerAppends: [],
          eventDropTransformers: [],
          componentInteractions: [],
          calendarInteractions: [],
          themeClasses: {},
          eventSourceDefs: [],
          cmdFormatter: null,
          recurringTypes: [],
          namedTimeZonedImpl: null,
          initialView: '',
          elementDraggingImpl: null,
          optionChangeHandlers: {},
          scrollerSyncerClass: null,
          listenerRefiners: {},
          optionRefiners: {},
          propSetHandlers: {},
      };
      function addDefs(defs) {
          for (let def of defs) {
              const pluginName = def.name;
              const currentId = currentPluginIds[pluginName];
              if (currentId === undefined) {
                  currentPluginIds[pluginName] = def.id;
                  addDefs(def.deps);
                  hooks = combineHooks(hooks, def);
              }
              else if (currentId !== def.id) {
                  // different ID than the one already added
                  console.warn(`Duplicate plugin '${pluginName}'`);
              }
          }
      }
      if (pluginDefs) {
          addDefs(pluginDefs);
      }
      addDefs(globalDefs);
      return hooks;
  }
  function buildBuildPluginHooks() {
      let currentOverrideDefs = [];
      let currentGlobalDefs = [];
      let currentHooks;
      return (overrideDefs, globalDefs) => {
          if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
              currentHooks = buildPluginHooks(overrideDefs, globalDefs);
          }
          currentOverrideDefs = overrideDefs;
          currentGlobalDefs = globalDefs;
          return currentHooks;
      };
  }
  function combineHooks(hooks0, hooks1) {
      return {
          premiumReleaseDate: compareOptionalDates(hooks0.premiumReleaseDate, hooks1.premiumReleaseDate),
          reducers: hooks0.reducers.concat(hooks1.reducers),
          isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
          contextInit: hooks0.contextInit.concat(hooks1.contextInit),
          eventRefiners: Object.assign(Object.assign({}, hooks0.eventRefiners), hooks1.eventRefiners),
          eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
          eventSourceRefiners: Object.assign(Object.assign({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
          isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
          eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
          eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
          dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
          datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
          dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
          views: Object.assign(Object.assign({}, hooks0.views), hooks1.views),
          viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
          isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
          externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
          viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
          eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
          calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
          componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
          themeClasses: Object.assign(Object.assign({}, hooks0.themeClasses), hooks1.themeClasses),
          eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
          cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
          recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
          namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
          initialView: hooks0.initialView || hooks1.initialView,
          elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
          optionChangeHandlers: Object.assign(Object.assign({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
          scrollerSyncerClass: hooks0.scrollerSyncerClass || hooks1.scrollerSyncerClass,
          listenerRefiners: Object.assign(Object.assign({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
          optionRefiners: Object.assign(Object.assign({}, hooks0.optionRefiners), hooks1.optionRefiners),
          propSetHandlers: Object.assign(Object.assign({}, hooks0.propSetHandlers), hooks1.propSetHandlers),
      };
  }
  function compareOptionalDates(date0, date1) {
      if (date0 === undefined) {
          return date1;
      }
      if (date1 === undefined) {
          return date0;
      }
      return new Date(Math.max(date0.valueOf(), date1.valueOf()));
  }

  class StandardTheme extends Theme {
  }
  StandardTheme.prototype.classes = {
      root: 'fc-theme-standard',
      buttonGroup: 'fc-button-group',
      button: 'fc-button fc-button-primary',
      buttonActive: 'fc-button-active',
  };
  StandardTheme.prototype.baseIconClass = 'fc-icon';
  StandardTheme.prototype.iconClasses = {
      close: 'fc-icon-x',
      prev: 'fc-icon-chevron-left',
      next: 'fc-icon-chevron-right',
      prevYear: 'fc-icon-chevrons-left',
      nextYear: 'fc-icon-chevrons-right',
  };
  StandardTheme.prototype.rtlIconClasses = {
      prev: 'fc-icon-chevron-right',
      next: 'fc-icon-chevron-left',
      prevYear: 'fc-icon-chevrons-right',
      nextYear: 'fc-icon-chevrons-left',
  };
  StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
  StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
  StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

  function compileViewDefs(defaultConfigs, overrideConfigs) {
      let hash = {};
      let viewType;
      for (viewType in defaultConfigs) {
          ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
      }
      for (viewType in overrideConfigs) {
          ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
      }
      return hash;
  }
  function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
      if (hash[viewType]) {
          return hash[viewType];
      }
      let viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
      if (viewDef) {
          hash[viewType] = viewDef;
      }
      return viewDef;
  }
  function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
      let defaultConfig = defaultConfigs[viewType];
      let overrideConfig = overrideConfigs[viewType];
      let queryProp = (name) => ((defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
          ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null));
      let theComponent = queryProp('component');
      let superType = queryProp('superType');
      let superDef = null;
      if (superType) {
          if (superType === viewType) {
              throw new Error('Can\'t have a custom view type that references itself');
          }
          superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
      }
      if (!theComponent && superDef) {
          theComponent = superDef.component;
      }
      if (!theComponent) {
          return null; // don't throw a warning, might be settings for a single-unit view
      }
      return {
          type: viewType,
          component: theComponent,
          defaults: Object.assign(Object.assign({}, (superDef ? superDef.defaults : {})), (defaultConfig ? defaultConfig.rawOptions : {})),
          overrides: Object.assign(Object.assign({}, (superDef ? superDef.overrides : {})), (overrideConfig ? overrideConfig.rawOptions : {})),
      };
  }

  function parseViewConfigs(inputs) {
      return mapHash(inputs, parseViewConfig);
  }
  function parseViewConfig(input) {
      let rawOptions = typeof input === 'function' ?
          { component: input } :
          input;
      let { component } = rawOptions;
      if (rawOptions.content) {
          // TODO: remove content/classNames/didMount/etc from options?
          component = createViewHookComponent(rawOptions);
      }
      else if (component && !(component.prototype instanceof BaseComponent)) {
          // WHY?: people were using `component` property for `content`
          // TODO: converge on one setting name
          component = createViewHookComponent(Object.assign(Object.assign({}, rawOptions), { content: component }));
      }
      return {
          superType: rawOptions.type,
          component: component,
          rawOptions, // includes type and component too :(
      };
  }
  function createViewHookComponent(options) {
      return (viewProps) => (_(ViewContextType.Consumer, null, (context) => (_(ContentContainer, { elTag: "div", elClasses: buildViewClassNames(context.viewSpec), renderProps: Object.assign(Object.assign({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold }), generatorName: undefined, customGenerator: options.content, classNameGenerator: options.classNames, didMount: options.didMount, willUnmount: options.willUnmount }))));
  }

  function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
      let defaultConfigs = parseViewConfigs(defaultInputs);
      let overrideConfigs = parseViewConfigs(optionOverrides.views);
      let viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
      return mapHash(viewDefs, (viewDef) => buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults));
  }
  function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
      let durationInput = viewDef.overrides.duration ||
          viewDef.defaults.duration ||
          dynamicOptionOverrides.duration ||
          optionOverrides.duration;
      let duration = null;
      let durationUnit = '';
      let singleUnit = '';
      let singleUnitOverrides = {};
      if (durationInput) {
          duration = createDurationCached(durationInput);
          if (duration) { // valid?
              let denom = greatestDurationDenominator(duration);
              durationUnit = denom.unit;
              if (denom.value === 1) {
                  singleUnit = durationUnit;
                  singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
              }
          }
      }
      let queryButtonText = (optionsSubset) => {
          let buttonTextMap = optionsSubset.buttonText || {};
          let buttonTextKey = viewDef.defaults.buttonTextKey;
          if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
              return buttonTextMap[buttonTextKey];
          }
          if (buttonTextMap[viewDef.type] != null) {
              return buttonTextMap[viewDef.type];
          }
          if (buttonTextMap[singleUnit] != null) {
              return buttonTextMap[singleUnit];
          }
          return null;
      };
      let queryButtonTitle = (optionsSubset) => {
          let buttonHints = optionsSubset.buttonHints || {};
          let buttonKey = viewDef.defaults.buttonTextKey; // use same key as text
          if (buttonKey != null && buttonHints[buttonKey] != null) {
              return buttonHints[buttonKey];
          }
          if (buttonHints[viewDef.type] != null) {
              return buttonHints[viewDef.type];
          }
          if (buttonHints[singleUnit] != null) {
              return buttonHints[singleUnit];
          }
          return null;
      };
      return {
          type: viewDef.type,
          component: viewDef.component,
          duration,
          durationUnit,
          singleUnit,
          optionDefaults: viewDef.defaults,
          optionOverrides: Object.assign(Object.assign({}, singleUnitOverrides), viewDef.overrides),
          buttonTextOverride: queryButtonText(dynamicOptionOverrides) ||
              queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
              viewDef.overrides.buttonText,
          buttonTextDefault: queryButtonText(localeDefaults) ||
              viewDef.defaults.buttonText ||
              queryButtonText(BASE_OPTION_DEFAULTS) ||
              viewDef.type,
          // not DRY
          buttonTitleOverride: queryButtonTitle(dynamicOptionOverrides) ||
              queryButtonTitle(optionOverrides) ||
              viewDef.overrides.buttonHint,
          buttonTitleDefault: queryButtonTitle(localeDefaults) ||
              viewDef.defaults.buttonHint ||
              queryButtonTitle(BASE_OPTION_DEFAULTS),
          // will eventually fall back to buttonText
      };
  }
  // hack to get memoization working
  let durationInputMap = {};
  function createDurationCached(durationInput) {
      let json = JSON.stringify(durationInput);
      let res = durationInputMap[json];
      if (res === undefined) {
          res = createDuration(durationInput);
          durationInputMap[json] = res;
      }
      return res;
  }

  function reduceViewType(viewType, action) {
      switch (action.type) {
          case 'CHANGE_VIEW_TYPE':
              viewType = action.viewType;
      }
      return viewType;
  }

  function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
      switch (action.type) {
          case 'SET_OPTION':
              return Object.assign(Object.assign({}, dynamicOptionOverrides), { [action.optionName]: action.rawOptionValue });
          default:
              return dynamicOptionOverrides;
      }
  }

  function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
      let dp;
      switch (action.type) {
          case 'CHANGE_VIEW_TYPE':
              return dateProfileGenerator.build(action.dateMarker || currentDate);
          case 'CHANGE_DATE':
              return dateProfileGenerator.build(action.dateMarker);
          case 'PREV':
              dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
              if (dp.isValid) {
                  return dp;
              }
              break;
          case 'NEXT':
              dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
              if (dp.isValid) {
                  return dp;
              }
              break;
      }
      return currentDateProfile;
  }

  function initEventSources(calendarOptions, dateProfile, context) {
      let activeRange = dateProfile ? dateProfile.activeRange : null;
      return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
  }
  function reduceEventSources(eventSources, action, dateProfile, context) {
      let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
      switch (action.type) {
          case 'ADD_EVENT_SOURCES': // already parsed
              return addSources(eventSources, action.sources, activeRange, context);
          case 'REMOVE_EVENT_SOURCE':
              return removeSource(eventSources, action.sourceId);
          case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
          case 'NEXT':
          case 'CHANGE_DATE':
          case 'CHANGE_VIEW_TYPE':
              if (dateProfile) {
                  return fetchDirtySources(eventSources, activeRange, context);
              }
              return eventSources;
          case 'FETCH_EVENT_SOURCES':
              return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
                  arrayToHash(action.sourceIds) :
                  excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
          case 'RECEIVE_EVENTS':
          case 'RECEIVE_EVENT_ERROR':
              return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
          case 'REMOVE_ALL_EVENT_SOURCES':
              return {};
          default:
              return eventSources;
      }
  }
  function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
      let activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
      return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
  }
  function computeEventSourcesLoading(eventSources) {
      for (let sourceId in eventSources) {
          if (eventSources[sourceId].isFetching) {
              return true;
          }
      }
      return false;
  }
  function addSources(eventSourceHash, sources, fetchRange, context) {
      let hash = {};
      for (let source of sources) {
          hash[source.sourceId] = source;
      }
      if (fetchRange) {
          hash = fetchDirtySources(hash, fetchRange, context);
      }
      return Object.assign(Object.assign({}, eventSourceHash), hash);
  }
  function removeSource(eventSourceHash, sourceId) {
      return filterHash(eventSourceHash, (eventSource) => eventSource.sourceId !== sourceId);
  }
  function fetchDirtySources(sourceHash, fetchRange, context) {
      return fetchSourcesByIds(sourceHash, filterHash(sourceHash, (eventSource) => isSourceDirty(eventSource, fetchRange, context)), fetchRange, false, context);
  }
  function isSourceDirty(eventSource, fetchRange, context) {
      if (!doesSourceNeedRange(eventSource, context)) {
          return !eventSource.latestFetchId;
      }
      return !context.options.lazyFetching ||
          !eventSource.fetchRange ||
          eventSource.isFetching || // always cancel outdated in-progress fetches
          fetchRange.start < eventSource.fetchRange.start ||
          fetchRange.end > eventSource.fetchRange.end;
  }
  function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
      let nextSources = {};
      for (let sourceId in prevSources) {
          let source = prevSources[sourceId];
          if (sourceIdHash[sourceId]) {
              nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
          }
          else {
              nextSources[sourceId] = source;
          }
      }
      return nextSources;
  }
  function fetchSource(eventSource, fetchRange, isRefetch, context) {
      let { options, calendarApi } = context;
      let sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
      let fetchId = guid();
      sourceDef.fetch({
          eventSource,
          range: fetchRange,
          isRefetch,
          context,
      }, (res) => {
          let { rawEvents } = res;
          if (options.eventSourceSuccess) {
              rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.response) || rawEvents;
          }
          if (eventSource.success) {
              rawEvents = eventSource.success.call(calendarApi, rawEvents, res.response) || rawEvents;
          }
          context.dispatch({
              type: 'RECEIVE_EVENTS',
              sourceId: eventSource.sourceId,
              fetchId,
              fetchRange,
              rawEvents,
          });
      }, (error) => {
          let errorHandled = false;
          if (options.eventSourceFailure) {
              options.eventSourceFailure.call(calendarApi, error);
              errorHandled = true;
          }
          if (eventSource.failure) {
              eventSource.failure(error);
              errorHandled = true;
          }
          if (!errorHandled) {
              console.warn(error.message, error);
          }
          context.dispatch({
              type: 'RECEIVE_EVENT_ERROR',
              sourceId: eventSource.sourceId,
              fetchId,
              fetchRange,
              error,
          });
      });
      return Object.assign(Object.assign({}, eventSource), { isFetching: true, latestFetchId: fetchId });
  }
  function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
      let eventSource = sourceHash[sourceId];
      if (eventSource && // not already removed
          fetchId === eventSource.latestFetchId) {
          return Object.assign(Object.assign({}, sourceHash), { [sourceId]: Object.assign(Object.assign({}, eventSource), { isFetching: false, fetchRange }) });
      }
      return sourceHash;
  }
  function excludeStaticSources(eventSources, context) {
      return filterHash(eventSources, (eventSource) => doesSourceNeedRange(eventSource, context));
  }
  function parseInitialSources(rawOptions, context) {
      let refiners = buildEventSourceRefiners(context);
      let rawSources = [].concat(rawOptions.eventSources || []);
      let sources = []; // parsed
      if (rawOptions.initialEvents) {
          rawSources.unshift(rawOptions.initialEvents);
      }
      if (rawOptions.events) {
          rawSources.unshift(rawOptions.events);
      }
      for (let rawSource of rawSources) {
          let source = parseEventSource(rawSource, context, refiners);
          if (source) {
              sources.push(source);
          }
      }
      return sources;
  }
  function doesSourceNeedRange(eventSource, context) {
      let defs = context.pluginHooks.eventSourceDefs;
      return !defs[eventSource.sourceDefId].ignoreRange;
  }

  function reduceDateSelection(currentSelection, action) {
      switch (action.type) {
          case 'UNSELECT_DATES':
              return null;
          case 'SELECT_DATES':
              return action.selection;
          default:
              return currentSelection;
      }
  }

  function reduceSelectedEvent(currentInstanceId, action) {
      switch (action.type) {
          case 'UNSELECT_EVENT':
              return '';
          case 'SELECT_EVENT':
              return action.eventInstanceId;
          default:
              return currentInstanceId;
      }
  }

  function reduceEventDrag(currentDrag, action) {
      let newDrag;
      switch (action.type) {
          case 'UNSET_EVENT_DRAG':
              return null;
          case 'SET_EVENT_DRAG':
              newDrag = action.state;
              return {
                  affectedEvents: newDrag.affectedEvents,
                  mutatedEvents: newDrag.mutatedEvents,
                  isEvent: newDrag.isEvent,
              };
          default:
              return currentDrag;
      }
  }

  function reduceEventResize(currentResize, action) {
      let newResize;
      switch (action.type) {
          case 'UNSET_EVENT_RESIZE':
              return null;
          case 'SET_EVENT_RESIZE':
              newResize = action.state;
              return {
                  affectedEvents: newResize.affectedEvents,
                  mutatedEvents: newResize.mutatedEvents,
                  isEvent: newResize.isEvent,
              };
          default:
              return currentResize;
      }
  }

  function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
      let header = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
      let footer = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) : null;
      return { header, footer };
  }
  function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
      let sectionWidgets = {};
      let viewsWithButtons = [];
      let hasTitle = false;
      for (let sectionName in sectionStrHash) {
          let sectionStr = sectionStrHash[sectionName];
          let sectionRes = parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi);
          sectionWidgets[sectionName] = sectionRes.widgets;
          viewsWithButtons.push(...sectionRes.viewsWithButtons);
          hasTitle = hasTitle || sectionRes.hasTitle;
      }
      return { sectionWidgets, viewsWithButtons, hasTitle };
  }
  /*
  BAD: querying icons and text here. should be done at render time
  */
  function parseSection(sectionStr, calendarOptions, // defaults+overrides, then refined
  calendarOptionOverrides, // overrides only!, unrefined :(
  theme, viewSpecs, calendarApi) {
      let isRtl = calendarOptions.direction === 'rtl';
      let calendarCustomButtons = calendarOptions.customButtons || {};
      let calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
      let calendarButtonText = calendarOptions.buttonText || {};
      let calendarButtonHintOverrides = calendarOptionOverrides.buttonHints || {};
      let calendarButtonHints = calendarOptions.buttonHints || {};
      let sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
      let viewsWithButtons = [];
      let hasTitle = false;
      let widgets = sectionSubstrs.map((buttonGroupStr) => (buttonGroupStr.split(',').map((buttonName) => {
          if (buttonName === 'title') {
              hasTitle = true;
              return { buttonName };
          }
          let customButtonProps;
          let viewSpec;
          let buttonClick;
          let buttonIcon; // only one of these will be set
          let buttonText; // "
          let buttonHint;
          // ^ for the title="" attribute, for accessibility
          if ((customButtonProps = calendarCustomButtons[buttonName])) {
              buttonClick = (ev) => {
                  if (customButtonProps.click) {
                      customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
                  }
              };
              (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                  (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                  (buttonText = customButtonProps.text);
              buttonHint = customButtonProps.hint || customButtonProps.text;
          }
          else if ((viewSpec = viewSpecs[buttonName])) {
              viewsWithButtons.push(buttonName);
              buttonClick = () => {
                  calendarApi.changeView(buttonName);
              };
              (buttonText = viewSpec.buttonTextOverride) ||
                  (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                  (buttonText = viewSpec.buttonTextDefault);
              let textFallback = viewSpec.buttonTextOverride ||
                  viewSpec.buttonTextDefault;
              buttonHint = formatWithOrdinals(viewSpec.buttonTitleOverride ||
                  viewSpec.buttonTitleDefault ||
                  calendarOptions.viewHint, [textFallback, buttonName], // view-name = buttonName
              textFallback);
          }
          else if (calendarApi[buttonName]) { // a calendarApi method
              buttonClick = () => {
                  calendarApi[buttonName]();
              };
              (buttonText = calendarButtonTextOverrides[buttonName]) ||
                  (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                  (buttonText = calendarButtonText[buttonName]); // everything else is considered default
              if (buttonName === 'prevYear' || buttonName === 'nextYear') {
                  let prevOrNext = buttonName === 'prevYear' ? 'prev' : 'next';
                  buttonHint = formatWithOrdinals(calendarButtonHintOverrides[prevOrNext] ||
                      calendarButtonHints[prevOrNext], [
                      calendarButtonText.year || 'year',
                      'year',
                  ], calendarButtonText[buttonName]);
              }
              else {
                  buttonHint = (navUnit) => formatWithOrdinals(calendarButtonHintOverrides[buttonName] ||
                      calendarButtonHints[buttonName], [
                      calendarButtonText[navUnit] || navUnit,
                      navUnit,
                  ], calendarButtonText[buttonName]);
              }
          }
          return { buttonName, buttonClick, buttonIcon, buttonText, buttonHint };
      })));
      return { widgets, viewsWithButtons, hasTitle };
  }

  // always represents the current view. otherwise, it'd need to change value every time date changes
  class ViewImpl {
      constructor(type, getCurrentData, dateEnv) {
          this.type = type;
          this.getCurrentData = getCurrentData;
          this.dateEnv = dateEnv;
      }
      get calendar() {
          return this.getCurrentData().calendarApi;
      }
      get title() {
          return this.getCurrentData().viewTitle;
      }
      get activeStart() {
          return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
      }
      get activeEnd() {
          return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
      }
      get currentStart() {
          return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
      }
      get currentEnd() {
          return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
      }
      getOption(name) {
          return this.getCurrentData().options[name]; // are the view-specific options
      }
  }

  let eventSourceDef$2 = {
      ignoreRange: true,
      parseMeta(refined) {
          if (Array.isArray(refined.events)) {
              return refined.events;
          }
          return null;
      },
      fetch(arg, successCallback) {
          successCallback({
              rawEvents: arg.eventSource.meta,
          });
      },
  };
  const arrayEventSourcePlugin = createPlugin({
      name: 'array-event-source',
      eventSourceDefs: [eventSourceDef$2],
  });

  let eventSourceDef$1 = {
      parseMeta(refined) {
          if (typeof refined.events === 'function') {
              return refined.events;
          }
          return null;
      },
      fetch(arg, successCallback, errorCallback) {
          const { dateEnv } = arg.context;
          const func = arg.eventSource.meta;
          unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), (rawEvents) => successCallback({ rawEvents }), errorCallback);
      },
  };
  const funcEventSourcePlugin = createPlugin({
      name: 'func-event-source',
      eventSourceDefs: [eventSourceDef$1],
  });

  const JSON_FEED_EVENT_SOURCE_REFINERS = {
      method: String,
      extraParams: identity,
      startParam: String,
      endParam: String,
      timeZoneParam: String,
  };

  let eventSourceDef = {
      parseMeta(refined) {
          if (refined.url && (refined.format === 'json' || !refined.format)) {
              return {
                  url: refined.url,
                  format: 'json',
                  method: (refined.method || 'GET').toUpperCase(),
                  extraParams: refined.extraParams,
                  startParam: refined.startParam,
                  endParam: refined.endParam,
                  timeZoneParam: refined.timeZoneParam,
              };
          }
          return null;
      },
      fetch(arg, successCallback, errorCallback) {
          const { meta } = arg.eventSource;
          const requestParams = buildRequestParams(meta, arg.range, arg.context);
          requestJson(meta.method, meta.url, requestParams).then(([rawEvents, response]) => {
              successCallback({ rawEvents, response });
          }, errorCallback);
      },
  };
  const jsonFeedEventSourcePlugin = createPlugin({
      name: 'json-event-source',
      eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
      eventSourceDefs: [eventSourceDef],
  });
  function buildRequestParams(meta, range, context) {
      let { dateEnv, options } = context;
      let startParam;
      let endParam;
      let timeZoneParam;
      let customRequestParams;
      let params = {};
      startParam = meta.startParam;
      if (startParam == null) {
          startParam = options.startParam;
      }
      endParam = meta.endParam;
      if (endParam == null) {
          endParam = options.endParam;
      }
      timeZoneParam = meta.timeZoneParam;
      if (timeZoneParam == null) {
          timeZoneParam = options.timeZoneParam;
      }
      // retrieve any outbound GET/POST data from the options
      if (typeof meta.extraParams === 'function') {
          // supplied as a function that returns a key/value object
          customRequestParams = meta.extraParams();
      }
      else {
          // probably supplied as a straight key/value object
          customRequestParams = meta.extraParams || {};
      }
      Object.assign(params, customRequestParams);
      params[startParam] = dateEnv.formatIso(range.start);
      params[endParam] = dateEnv.formatIso(range.end);
      if (dateEnv.timeZone !== 'local') {
          params[timeZoneParam] = dateEnv.timeZone;
      }
      return params;
  }

  const SIMPLE_RECURRING_REFINERS = {
      daysOfWeek: identity,
      startTime: createDuration,
      endTime: createDuration,
      duration: createDuration,
      startRecur: identity,
      endRecur: identity,
  };

  let recurring = {
      parse(refined, dateEnv) {
          if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
              let recurringData = {
                  daysOfWeek: refined.daysOfWeek || null,
                  startTime: refined.startTime || null,
                  endTime: refined.endTime || null,
                  startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
                  endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null,
              };
              let duration;
              if (refined.duration) {
                  duration = refined.duration;
              }
              if (!duration && refined.startTime && refined.endTime) {
                  duration = subtractDurations(refined.endTime, refined.startTime);
              }
              return {
                  allDayGuess: Boolean(!refined.startTime && !refined.endTime),
                  duration,
                  typeData: recurringData, // doesn't need endTime anymore but oh well
              };
          }
          return null;
      },
      expand(typeData, framingRange, dateEnv) {
          let clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
          if (clippedFramingRange) {
              return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
          }
          return [];
      },
  };
  const simpleRecurringEventsPlugin = createPlugin({
      name: 'simple-recurring-event',
      recurringTypes: [recurring],
      eventRefiners: SIMPLE_RECURRING_REFINERS,
  });
  function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
      let dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
      let dayMarker = startOfDay(framingRange.start);
      let endMarker = framingRange.end;
      let instanceStarts = [];
      while (dayMarker < endMarker) {
          let instanceStart;
          // if everyday, or this particular day-of-week
          if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
              if (startTime) {
                  instanceStart = dateEnv.add(dayMarker, startTime);
              }
              else {
                  instanceStart = dayMarker;
              }
              instanceStarts.push(instanceStart);
          }
          dayMarker = addDays(dayMarker, 1);
      }
      return instanceStarts;
  }

  const changeHandlerPlugin = createPlugin({
      name: 'change-handler',
      optionChangeHandlers: {
          events(events, context) {
              handleEventSources([events], context);
          },
          eventSources: handleEventSources,
      },
  });
  /*
  BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
  */
  function handleEventSources(inputs, context) {
      let unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
      if (unfoundSources.length === 1 &&
          inputs.length === 1 &&
          Array.isArray(unfoundSources[0]._raw) &&
          Array.isArray(inputs[0])) {
          context.dispatch({
              type: 'RESET_RAW_EVENTS',
              sourceId: unfoundSources[0].sourceId,
              rawEvents: inputs[0],
          });
          return;
      }
      let newInputs = [];
      for (let input of inputs) {
          let inputFound = false;
          for (let i = 0; i < unfoundSources.length; i += 1) {
              if (unfoundSources[i]._raw === input) {
                  unfoundSources.splice(i, 1); // delete
                  inputFound = true;
                  break;
              }
          }
          if (!inputFound) {
              newInputs.push(input);
          }
      }
      for (let unfoundSource of unfoundSources) {
          context.dispatch({
              type: 'REMOVE_EVENT_SOURCE',
              sourceId: unfoundSource.sourceId,
          });
      }
      for (let newInput of newInputs) {
          context.calendarApi.addEventSource(newInput);
      }
  }

  function handleDateProfile(dateProfile, context) {
      context.emitter.trigger('datesSet', Object.assign(Object.assign({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
  }

  function handleEventStore(eventStore, context) {
      let { emitter } = context;
      if (emitter.hasHandlers('eventsSet')) {
          emitter.trigger('eventsSet', buildEventApis(eventStore, context));
      }
  }

  /*
  this array is exposed on the root namespace so that UMD plugins can add to it.
  see the rollup-bundles script.
  */
  const globalPlugins = [
      arrayEventSourcePlugin,
      funcEventSourcePlugin,
      jsonFeedEventSourcePlugin,
      simpleRecurringEventsPlugin,
      changeHandlerPlugin,
      createPlugin({
          name: 'misc',
          isLoadingFuncs: [
              (state) => computeEventSourcesLoading(state.eventSources),
          ],
          propSetHandlers: {
              dateProfile: handleDateProfile,
              eventStore: handleEventStore,
          },
      }),
  ];

  class TaskRunner {
      constructor(runTaskOption, drainedOption) {
          this.runTaskOption = runTaskOption;
          this.drainedOption = drainedOption;
          this.queue = [];
          this.delayedRunner = new DelayedRunner(this.drain.bind(this));
      }
      request(task, delay) {
          this.queue.push(task);
          this.delayedRunner.request(delay);
      }
      pause(scope) {
          this.delayedRunner.pause(scope);
      }
      resume(scope, force) {
          this.delayedRunner.resume(scope, force);
      }
      drain() {
          let { queue } = this;
          while (queue.length) {
              let completedTasks = [];
              let task;
              while ((task = queue.shift())) {
                  this.runTask(task);
                  completedTasks.push(task);
              }
              this.drained(completedTasks);
          } // keep going, in case new tasks were added in the drained handler
      }
      runTask(task) {
          if (this.runTaskOption) {
              this.runTaskOption(task);
          }
      }
      drained(completedTasks) {
          if (this.drainedOption) {
              this.drainedOption(completedTasks);
          }
      }
  }

  // Computes what the title at the top of the calendarApi should be for this view
  function buildTitle(dateProfile, viewOptions, dateEnv) {
      let range;
      // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
      if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
          range = dateProfile.currentRange;
      }
      else { // for day units or smaller, use the actual day range
          range = dateProfile.activeRange;
      }
      return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
          isEndExclusive: dateProfile.isRangeAllDay,
          defaultSeparator: viewOptions.titleRangeSeparator,
      });
  }
  // Generates the format string that should be used to generate the title for the current date range.
  // Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
  function buildTitleFormat(dateProfile) {
      let { currentRangeUnit } = dateProfile;
      if (currentRangeUnit === 'year') {
          return { year: 'numeric' };
      }
      if (currentRangeUnit === 'month') {
          return { year: 'numeric', month: 'long' }; // like "September 2014"
      }
      let days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
      if (days !== null && days > 1) {
          // multi-day range. shorter, like "Sep 9 - 10 2014"
          return { year: 'numeric', month: 'short', day: 'numeric' };
      }
      // one day. longer, like "September 9 2014"
      return { year: 'numeric', month: 'long', day: 'numeric' };
  }

  // in future refactor, do the redux-style function(state=initial) for initial-state
  // also, whatever is happening in constructor, have it happen in action queue too
  class CalendarDataManager {
      constructor(props) {
          this.computeCurrentViewData = memoize(this._computeCurrentViewData);
          this.organizeRawLocales = memoize(organizeRawLocales);
          this.buildLocale = memoize(buildLocale);
          this.buildPluginHooks = buildBuildPluginHooks();
          this.buildDateEnv = memoize(buildDateEnv$1);
          this.buildTheme = memoize(buildTheme);
          this.parseToolbars = memoize(parseToolbars);
          this.buildViewSpecs = memoize(buildViewSpecs);
          this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
          this.buildViewApi = memoize(buildViewApi);
          this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
          this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
          this.buildEventUiBases = memoize(buildEventUiBases);
          this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
          this.buildTitle = memoize(buildTitle);
          this.emitter = new Emitter();
          this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
          this.currentCalendarOptionsInput = {};
          this.currentCalendarOptionsRefined = {};
          this.currentViewOptionsInput = {};
          this.currentViewOptionsRefined = {};
          this.currentCalendarOptionsRefiners = {};
          this.optionsForRefining = [];
          this.optionsForHandling = [];
          this.getCurrentData = () => this.data;
          this.dispatch = (action) => {
              this.actionRunner.request(action); // protects against recursive calls to _handleAction
          };
          this.props = props;
          this.actionRunner.pause();
          let dynamicOptionOverrides = {};
          let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
          let currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
          let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
          // wire things up
          // TODO: not DRY
          props.calendarApi.currentDataManager = this;
          this.emitter.setThisContext(props.calendarApi);
          this.emitter.setOptions(currentViewData.options);
          let currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
          let dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
          if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
              currentDate = dateProfile.currentRange.start;
          }
          let calendarContext = {
              dateEnv: optionsData.dateEnv,
              options: optionsData.calendarOptions,
              pluginHooks: optionsData.pluginHooks,
              calendarApi: props.calendarApi,
              dispatch: this.dispatch,
              emitter: this.emitter,
              getCurrentData: this.getCurrentData,
          };
          // needs to be after setThisContext
          for (let callback of optionsData.pluginHooks.contextInit) {
              callback(calendarContext);
          }
          // NOT DRY
          let eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
          let initialState = {
              dynamicOptionOverrides,
              currentViewType,
              currentDate,
              dateProfile,
              businessHours: this.parseContextBusinessHours(calendarContext),
              eventSources,
              eventUiBases: {},
              eventStore: createEmptyEventStore(),
              renderableEventStore: createEmptyEventStore(),
              dateSelection: null,
              eventSelection: '',
              eventDrag: null,
              eventResize: null,
              selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig,
          };
          let contextAndState = Object.assign(Object.assign({}, calendarContext), initialState);
          for (let reducer of optionsData.pluginHooks.reducers) {
              Object.assign(initialState, reducer(null, null, contextAndState));
          }
          if (computeIsLoading(initialState, calendarContext)) {
              this.emitter.trigger('loading', true); // NOT DRY
          }
          this.state = initialState;
          this.updateData();
          this.actionRunner.resume();
      }
      resetOptions(optionOverrides, changedOptionNames) {
          let { props } = this;
          if (changedOptionNames === undefined) {
              props.optionOverrides = optionOverrides;
          }
          else {
              props.optionOverrides = Object.assign(Object.assign({}, (props.optionOverrides || {})), optionOverrides);
              this.optionsForRefining.push(...changedOptionNames);
          }
          if (changedOptionNames === undefined || changedOptionNames.length) {
              this.actionRunner.request({
                  type: 'NOTHING',
              });
          }
      }
      _handleAction(action) {
          let { props, state, emitter } = this;
          let dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
          let optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
          let currentViewType = reduceViewType(state.currentViewType, action);
          let currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
          // wire things up
          // TODO: not DRY
          props.calendarApi.currentDataManager = this;
          emitter.setThisContext(props.calendarApi);
          emitter.setOptions(currentViewData.options);
          let calendarContext = {
              dateEnv: optionsData.dateEnv,
              options: optionsData.calendarOptions,
              pluginHooks: optionsData.pluginHooks,
              calendarApi: props.calendarApi,
              dispatch: this.dispatch,
              emitter,
              getCurrentData: this.getCurrentData,
          };
          let { currentDate, dateProfile } = state;
          if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) { // hack
              dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
          }
          currentDate = reduceCurrentDate(currentDate, action);
          dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
          if (action.type === 'PREV' || // TODO: move this logic into DateProfileGenerator
              action.type === 'NEXT' || // "
              !rangeContainsMarker(dateProfile.currentRange, currentDate)) {
              currentDate = dateProfile.currentRange.start;
          }
          let eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
          let eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
          let isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading
          let renderableEventStore = (isEventsLoading && !currentViewData.options.progressiveEventRendering) ?
              (state.renderableEventStore || eventStore) : // try from previous state
              eventStore;
          let { eventUiSingleBase, selectionConfig } = this.buildViewUiProps(calendarContext); // will memoize obj
          let eventUiBySource = this.buildEventUiBySource(eventSources);
          let eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
          let newState = {
              dynamicOptionOverrides,
              currentViewType,
              currentDate,
              dateProfile,
              eventSources,
              eventStore,
              renderableEventStore,
              selectionConfig,
              eventUiBases,
              businessHours: this.parseContextBusinessHours(calendarContext),
              dateSelection: reduceDateSelection(state.dateSelection, action),
              eventSelection: reduceSelectedEvent(state.eventSelection, action),
              eventDrag: reduceEventDrag(state.eventDrag, action),
              eventResize: reduceEventResize(state.eventResize, action),
          };
          let contextAndState = Object.assign(Object.assign({}, calendarContext), newState);
          for (let reducer of optionsData.pluginHooks.reducers) {
              Object.assign(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
          }
          let wasLoading = computeIsLoading(state, calendarContext);
          let isLoading = computeIsLoading(newState, calendarContext);
          // TODO: use propSetHandlers in plugin system
          if (!wasLoading && isLoading) {
              emitter.trigger('loading', true);
          }
          else if (wasLoading && !isLoading) {
              emitter.trigger('loading', false);
          }
          this.state = newState;
          if (props.onAction) {
              props.onAction(action);
          }
      }
      updateData() {
          let { props, state } = this;
          let oldData = this.data;
          let optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
          let currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
          let data = this.data = Object.assign(Object.assign(Object.assign({ viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
          let changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
          let oldCalendarOptions = oldData && oldData.calendarOptions;
          let newCalendarOptions = optionsData.calendarOptions;
          if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
              if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
                  // hack
                  state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
                  state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
                  state.renderableEventStore = data.renderableEventStore = rezoneEventStoreDates(data.renderableEventStore, oldData.dateEnv, data.dateEnv);
              }
              for (let optionName in changeHandlers) {
                  if (this.optionsForHandling.indexOf(optionName) !== -1 ||
                      oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
                      changeHandlers[optionName](newCalendarOptions[optionName], data);
                  }
              }
          }
          this.optionsForHandling = [];
          if (props.onData) {
              props.onData(data);
          }
      }
      computeOptionsData(optionOverrides, dynamicOptionOverrides, calendarApi) {
          // TODO: blacklist options that are handled by optionChangeHandlers
          if (!this.optionsForRefining.length &&
              optionOverrides === this.stableOptionOverrides &&
              dynamicOptionOverrides === this.stableDynamicOptionOverrides) {
              return this.stableCalendarOptionsData;
          }
          let { refinedOptions, pluginHooks, localeDefaults, availableLocaleData, extra, } = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides);
          warnUnknownOptions(extra);
          let dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
          let viewSpecs = this.buildViewSpecs(pluginHooks.views, this.stableOptionOverrides, this.stableDynamicOptionOverrides, localeDefaults);
          let theme = this.buildTheme(refinedOptions, pluginHooks);
          let toolbarConfig = this.parseToolbars(refinedOptions, this.stableOptionOverrides, theme, viewSpecs, calendarApi);
          return this.stableCalendarOptionsData = {
              calendarOptions: refinedOptions,
              pluginHooks,
              dateEnv,
              viewSpecs,
              theme,
              toolbarConfig,
              localeDefaults,
              availableRawLocales: availableLocaleData.map,
          };
      }
      // always called from behind a memoizer
      processRawCalendarOptions(optionOverrides, dynamicOptionOverrides) {
          let { locales, locale } = mergeRawOptions([
              BASE_OPTION_DEFAULTS,
              optionOverrides,
              dynamicOptionOverrides,
          ]);
          let availableLocaleData = this.organizeRawLocales(locales);
          let availableRawLocales = availableLocaleData.map;
          let localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
          let pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
          let refiners = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
          let extra = {};
          let raw = mergeRawOptions([
              BASE_OPTION_DEFAULTS,
              localeDefaults,
              optionOverrides,
              dynamicOptionOverrides,
          ]);
          let refined = {};
          let currentRaw = this.currentCalendarOptionsInput;
          let currentRefined = this.currentCalendarOptionsRefined;
          let anyChanges = false;
          for (let optionName in raw) {
              if (this.optionsForRefining.indexOf(optionName) === -1 && (raw[optionName] === currentRaw[optionName] || (COMPLEX_OPTION_COMPARATORS[optionName] &&
                  (optionName in currentRaw) &&
                  COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName])))) {
                  refined[optionName] = currentRefined[optionName];
              }
              else if (refiners[optionName]) {
                  refined[optionName] = refiners[optionName](raw[optionName]);
                  anyChanges = true;
              }
              else {
                  extra[optionName] = currentRaw[optionName];
              }
          }
          if (anyChanges) {
              this.currentCalendarOptionsInput = raw;
              this.currentCalendarOptionsRefined = refined;
              this.stableOptionOverrides = optionOverrides;
              this.stableDynamicOptionOverrides = dynamicOptionOverrides;
          }
          this.optionsForHandling.push(...this.optionsForRefining);
          this.optionsForRefining = [];
          return {
              rawOptions: this.currentCalendarOptionsInput,
              refinedOptions: this.currentCalendarOptionsRefined,
              pluginHooks,
              availableLocaleData,
              localeDefaults,
              extra,
          };
      }
      _computeCurrentViewData(viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
          let viewSpec = optionsData.viewSpecs[viewType];
          if (!viewSpec) {
              throw new Error(`viewType "${viewType}" is not available. Please make sure you've loaded all neccessary plugins`);
          }
          let { refinedOptions, extra } = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides);
          warnUnknownOptions(extra);
          let dateProfileGenerator = this.buildDateProfileGenerator({
              dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
              duration: viewSpec.duration,
              durationUnit: viewSpec.durationUnit,
              usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
              dateEnv: optionsData.dateEnv,
              calendarApi: this.props.calendarApi,
              slotMinTime: refinedOptions.slotMinTime,
              slotMaxTime: refinedOptions.slotMaxTime,
              showNonCurrentDates: refinedOptions.showNonCurrentDates,
              dayCount: refinedOptions.dayCount,
              dateAlignment: refinedOptions.dateAlignment,
              dateIncrement: refinedOptions.dateIncrement,
              hiddenDays: refinedOptions.hiddenDays,
              weekends: refinedOptions.weekends,
              nowInput: refinedOptions.now,
              validRangeInput: refinedOptions.validRange,
              visibleRangeInput: refinedOptions.visibleRange,
              fixedWeekCount: refinedOptions.fixedWeekCount,
          });
          let viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
          return { viewSpec, options: refinedOptions, dateProfileGenerator, viewApi };
      }
      processRawViewOptions(viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
          let raw = mergeRawOptions([
              BASE_OPTION_DEFAULTS,
              viewSpec.optionDefaults,
              localeDefaults,
              optionOverrides,
              viewSpec.optionOverrides,
              dynamicOptionOverrides,
          ]);
          let refiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
          let refined = {};
          let currentRaw = this.currentViewOptionsInput;
          let currentRefined = this.currentViewOptionsRefined;
          let anyChanges = false;
          let extra = {};
          for (let optionName in raw) {
              if (raw[optionName] === currentRaw[optionName] ||
                  (COMPLEX_OPTION_COMPARATORS[optionName] &&
                      COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], currentRaw[optionName]))) {
                  refined[optionName] = currentRefined[optionName];
              }
              else {
                  if (raw[optionName] === this.currentCalendarOptionsInput[optionName] ||
                      (COMPLEX_OPTION_COMPARATORS[optionName] &&
                          COMPLEX_OPTION_COMPARATORS[optionName](raw[optionName], this.currentCalendarOptionsInput[optionName]))) {
                      if (optionName in this.currentCalendarOptionsRefined) { // might be an "extra" prop
                          refined[optionName] = this.currentCalendarOptionsRefined[optionName];
                      }
                  }
                  else if (refiners[optionName]) {
                      refined[optionName] = refiners[optionName](raw[optionName]);
                  }
                  else {
                      extra[optionName] = raw[optionName];
                  }
                  anyChanges = true;
              }
          }
          if (anyChanges) {
              this.currentViewOptionsInput = raw;
              this.currentViewOptionsRefined = refined;
          }
          return {
              rawOptions: this.currentViewOptionsInput,
              refinedOptions: this.currentViewOptionsRefined,
              extra,
          };
      }
  }
  function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
      let locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
      return new DateEnv({
          calendarSystem: 'gregory',
          timeZone,
          namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
          locale,
          weekNumberCalculation,
          firstDay,
          weekText,
          cmdFormatter: pluginHooks.cmdFormatter,
          defaultSeparator,
      });
  }
  function buildTheme(options, pluginHooks) {
      let ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
      return new ThemeClass(options);
  }
  function buildDateProfileGenerator(props) {
      let DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
      return new DateProfileGeneratorClass(props);
  }
  function buildViewApi(type, getCurrentData, dateEnv) {
      return new ViewImpl(type, getCurrentData, dateEnv);
  }
  function buildEventUiBySource(eventSources) {
      return mapHash(eventSources, (eventSource) => eventSource.ui);
  }
  function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
      let eventUiBases = { '': eventUiSingleBase };
      for (let defId in eventDefs) {
          let def = eventDefs[defId];
          if (def.sourceId && eventUiBySource[def.sourceId]) {
              eventUiBases[defId] = eventUiBySource[def.sourceId];
          }
      }
      return eventUiBases;
  }
  function buildViewUiProps(calendarContext) {
      let { options } = calendarContext;
      return {
          eventUiSingleBase: createEventUi({
              display: options.eventDisplay,
              editable: options.editable,
              startEditable: options.eventStartEditable,
              durationEditable: options.eventDurationEditable,
              constraint: options.eventConstraint,
              overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
              allow: options.eventAllow,
              backgroundColor: options.eventBackgroundColor,
              borderColor: options.eventBorderColor,
              textColor: options.eventTextColor,
              color: options.eventColor,
              // classNames: options.eventClassNames // render hook will handle this
          }, calendarContext),
          selectionConfig: createEventUi({
              constraint: options.selectConstraint,
              overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
              allow: options.selectAllow,
          }, calendarContext),
      };
  }
  function computeIsLoading(state, context) {
      for (let isLoadingFunc of context.pluginHooks.isLoadingFuncs) {
          if (isLoadingFunc(state)) {
              return true;
          }
      }
      return false;
  }
  function parseContextBusinessHours(calendarContext) {
      return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
  }
  function warnUnknownOptions(options, viewName) {
      for (let optionName in options) {
          console.warn(`Unknown option '${optionName}'` +
              (viewName ? ` for view '${viewName}'` : ''));
      }
  }

  class ToolbarSection extends BaseComponent {
      render() {
          let children = this.props.widgetGroups.map((widgetGroup) => this.renderWidgetGroup(widgetGroup));
          return _('div', {
              className: 'fc-toolbar-chunk fc-toolbar-' + this.props.name
          }, ...children);
      }
      renderWidgetGroup(widgetGroup) {
          let { props } = this;
          let { theme } = this.context;
          let children = [];
          let isOnlyButtons = true;
          for (let widget of widgetGroup) {
              let { buttonName, buttonClick, buttonText, buttonIcon, buttonHint } = widget;
              if (buttonName === 'title') {
                  isOnlyButtons = false;
                  children.push(_("h2", { className: "fc-toolbar-title" }, props.title));
              }
              else {
                  let isPressed = buttonName === props.activeButton;
                  let isDisabled = (!props.isTodayEnabled && buttonName === 'today') ||
                      (!props.isPrevEnabled && buttonName === 'prev') ||
                      (!props.isNextEnabled && buttonName === 'next');
                  let buttonClasses = [`fc-${buttonName}-button`, theme.getClass('button')];
                  if (isPressed) {
                      buttonClasses.push(theme.getClass('buttonActive'));
                  }
                  children.push(_("button", { type: "button", title: typeof buttonHint === 'function' ? buttonHint(props.navUnit) : buttonHint, disabled: isDisabled, "aria-pressed": isPressed, className: buttonClasses.join(' '), onClick: buttonClick }, buttonText || (buttonIcon ? _("span", { className: buttonIcon, role: "img" }) : '')));
              }
          }
          if (children.length > 1) {
              let groupClassName = (isOnlyButtons && theme.getClass('buttonGroup')) || '';
              return _('div', { className: groupClassName }, ...children);
          }
          return children[0];
      }
  }

  class Toolbar extends BaseComponent {
      render() {
          let { model, extraClassName } = this.props;
          let forceLtr = false;
          let startContent;
          let endContent;
          let sectionWidgets = model.sectionWidgets;
          let centerContent = sectionWidgets.center;
          if (sectionWidgets.left) {
              forceLtr = true;
              startContent = sectionWidgets.left;
          }
          else {
              startContent = sectionWidgets.start;
          }
          if (sectionWidgets.right) {
              forceLtr = true;
              endContent = sectionWidgets.right;
          }
          else {
              endContent = sectionWidgets.end;
          }
          let classNames = [
              extraClassName || '',
              'fc-toolbar',
              forceLtr ? 'fc-toolbar-ltr' : '',
          ];
          return (_("div", { className: classNames.join(' ') },
              this.renderSection('start', startContent || []),
              this.renderSection('center', centerContent || []),
              this.renderSection('end', endContent || [])));
      }
      renderSection(key, widgetGroups) {
          let { props } = this;
          return (_(ToolbarSection, { key: key, name: key, widgetGroups: widgetGroups, title: props.title, navUnit: props.navUnit, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled }));
      }
  }

  /*
  Detects when the user clicks on an event within a DateComponent
  */
  class EventClicking extends Interaction {
      constructor(settings) {
          super(settings);
          this.handleSegClick = (ev, segEl) => {
              let { component } = this;
              let { context } = component;
              let eventRange = getElEventRange(segEl);
              if (eventRange && // might be the <div> surrounding the more link
                  component.isValidSegDownEl(ev.target)) {
                  // our way to simulate a link click for elements that can't be <a> tags
                  // grab before trigger fired in case trigger trashes DOM thru rerendering
                  let hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
                  let url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                  context.emitter.trigger('eventClick', {
                      el: segEl,
                      event: new EventImpl(component.context, eventRange.def, eventRange.instance),
                      jsEvent: ev,
                      view: context.viewApi,
                  });
                  if (url && !ev.defaultPrevented) {
                      window.location.href = url;
                  }
              }
          };
          this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
          this.handleSegClick);
      }
  }

  /*
  Triggers events and adds/removes core classNames when the user's pointer
  enters/leaves event-elements of a component.
  */
  class EventHovering extends Interaction {
      constructor(settings) {
          super(settings);
          // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
          this.handleEventElRemove = (el) => {
              if (el === this.currentSegEl) {
                  this.handleSegLeave(null, this.currentSegEl);
              }
          };
          this.handleSegEnter = (ev, segEl) => {
              if (getElEventRange(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                  this.currentSegEl = segEl;
                  this.triggerEvent('eventMouseEnter', ev, segEl);
              }
          };
          this.handleSegLeave = (ev, segEl) => {
              if (this.currentSegEl) {
                  this.currentSegEl = null;
                  this.triggerEvent('eventMouseLeave', ev, segEl);
              }
          };
          this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
          this.handleSegEnter, this.handleSegLeave);
      }
      destroy() {
          this.removeHoverListeners();
      }
      triggerEvent(publicEvName, ev, segEl) {
          let { component } = this;
          let { context } = component;
          let eventRange = getElEventRange(segEl);
          if (!ev || component.isValidSegDownEl(ev.target)) {
              context.emitter.trigger(publicEvName, {
                  el: segEl,
                  event: new EventImpl(context, eventRange.def, eventRange.instance),
                  jsEvent: ev,
                  view: context.viewApi,
              });
          }
      }
  }

  class ViewHarness extends b {
      render() {
          const { props } = this;
          return (_("div", { className: [
                  'fc-view-harness',
                  props.height != null
                      ? 'fc-view-harness-fixedheight'
                      : props.heightLiquid
                          ? 'fc-view-harness-liquid'
                          : props.aspectRatio != null
                              ? 'fc-view-harness-aspectratio'
                              : ''
              ].join(' '), style: {
                  height: props.height,
                  paddingBottom: props.aspectRatio != null
                      ? `${(1 / props.aspectRatio) * 100}%`
                      : undefined
              } }, props.children));
      }
  }

  class CalendarContent extends PureComponent {
      constructor() {
          super(...arguments);
          this.buildViewContext = memoize(buildViewContext);
          this.buildViewPropTransformers = memoize(buildViewPropTransformers);
          this.buildToolbarProps = memoize(buildToolbarProps);
          this.interactionsStore = {};
          // Component Registration
          // -----------------------------------------------------------------------------------------------------------------
          this.registerInteractiveComponent = (component, settingsInput) => {
              let settings = parseInteractionSettings(component, settingsInput);
              let DEFAULT_INTERACTIONS = [
                  EventClicking,
                  EventHovering,
              ];
              let interactionClasses = DEFAULT_INTERACTIONS.concat(this.props.pluginHooks.componentInteractions);
              let interactions = interactionClasses.map((TheInteractionClass) => new TheInteractionClass(settings));
              this.interactionsStore[component.uid] = interactions;
              interactionSettingsStore[component.uid] = settings;
          };
          this.unregisterInteractiveComponent = (component) => {
              let listeners = this.interactionsStore[component.uid];
              if (listeners) {
                  for (let listener of listeners) {
                      listener.destroy();
                  }
                  delete this.interactionsStore[component.uid];
              }
              delete interactionSettingsStore[component.uid];
          };
      }
      /*
      renders INSIDE of an outer div
      */
      render() {
          let { props } = this;
          let { toolbarConfig, options } = props;
          let toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
          props.viewTitle);
          let viewHeight;
          let viewHeightLiquid = false;
          let viewAspectRatio;
          if (props.forPrint || getIsHeightAuto(options)) ;
          else if (options.height != null) {
              viewHeightLiquid = true;
          }
          else if (options.contentHeight != null) {
              viewHeight = options.contentHeight;
          }
          else {
              viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
          }
          let viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
          return (_(ViewContextType.Provider, { value: viewContext },
              toolbarConfig.header && (_(Toolbar, Object.assign({ extraClassName: "fc-header-toolbar", model: toolbarConfig.header }, toolbarProps))),
              _(ViewHarness, { height: viewHeight, heightLiquid: viewHeightLiquid, aspectRatio: viewAspectRatio },
                  this.renderView(props),
                  this.buildAppendContent()),
              toolbarConfig.footer && (_(Toolbar, Object.assign({ extraClassName: "fc-footer-toolbar", model: toolbarConfig.footer }, toolbarProps)))));
      }
      componentDidMount() {
          let { props } = this;
          this.calendarInteractions = props.pluginHooks.calendarInteractions
              .map((CalendarInteractionClass) => new CalendarInteractionClass(props));
          let { propSetHandlers } = props.pluginHooks;
          for (let propName in propSetHandlers) {
              propSetHandlers[propName](props[propName], props);
          }
      }
      componentDidUpdate(prevProps) {
          let { props } = this;
          let { propSetHandlers } = props.pluginHooks;
          for (let propName in propSetHandlers) {
              if (props[propName] !== prevProps[propName]) {
                  propSetHandlers[propName](props[propName], props);
              }
          }
      }
      componentWillUnmount() {
          for (let interaction of this.calendarInteractions) {
              interaction.destroy();
          }
          this.props.emitter.trigger('_unmount');
      }
      buildAppendContent() {
          let { props } = this;
          let children = props.pluginHooks.viewContainerAppends.map((buildAppendContent) => buildAppendContent(props));
          return _(k$1, {}, ...children);
      }
      renderView(props) {
          let { pluginHooks } = props;
          let { viewSpec } = props;
          let viewProps = {
              dateProfile: props.dateProfile,
              businessHours: props.businessHours,
              eventStore: props.renderableEventStore,
              eventUiBases: props.eventUiBases,
              dateSelection: props.dateSelection,
              eventSelection: props.eventSelection,
              eventDrag: props.eventDrag,
              eventResize: props.eventResize,
              forPrint: props.forPrint,
          };
          let transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
          for (let transformer of transformers) {
              Object.assign(viewProps, transformer.transform(viewProps, props));
          }
          let ViewComponent = viewSpec.component;
          return (_(ViewComponent, Object.assign({}, viewProps)));
      }
  }
  function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
      // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
      let todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
      let prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
      let nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
      return {
          title,
          activeButton: viewSpec.type,
          navUnit: viewSpec.singleUnit,
          isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
          isPrevEnabled: prevInfo.isValid,
          isNextEnabled: nextInfo.isValid,
      };
  }
  // Plugin
  // -----------------------------------------------------------------------------------------------------------------
  function buildViewPropTransformers(theClasses) {
      return theClasses.map((TheClass) => new TheClass());
  }

  /*
  Vanilla JS API
  */
  class Calendar extends CalendarImpl {
      constructor(el, optionOverrides = {}) {
          super();
          this.isRendering = false;
          this.isRendered = false;
          this.currentClassNames = [];
          this.customContentRenderId = 0;
          this.handleAction = (action) => {
              // actions we know we want to render immediately
              switch (action.type) {
                  case 'SET_EVENT_DRAG':
                  case 'SET_EVENT_RESIZE':
                      this.renderRunner.tryDrain();
              }
          };
          this.handleData = (data) => {
              this.currentData = data;
              this.renderRunner.request(data.calendarOptions.rerenderDelay);
          };
          this.handleRenderRequest = () => {
              if (this.isRendering) {
                  this.isRendered = true;
                  let { currentData } = this;
                  flushSync(() => {
                      B$2(_(CalendarRoot, { options: currentData.calendarOptions, theme: currentData.theme, emitter: currentData.emitter }, (classNames, height, forPrint) => {
                          this.setClassNames(classNames);
                          this.setHeight(height);
                          return (_(RenderId.Provider, { value: this.customContentRenderId },
                              _(CalendarContent, Object.assign({ forPrint: forPrint }, currentData))));
                      }), this.el);
                  });
              }
              else if (this.isRendered) {
                  this.isRendered = false;
                  B$2(null, this.el);
                  this.setClassNames([]);
                  this.setHeight('');
              }
          };
          ensureElHasStyles(el);
          this.el = el;
          this.renderRunner = new DelayedRunner(this.handleRenderRequest);
          new CalendarDataManager({
              optionOverrides,
              calendarApi: this,
              onAction: this.handleAction,
              onData: this.handleData,
          });
      }
      render() {
          let wasRendering = this.isRendering;
          if (!wasRendering) {
              this.isRendering = true;
          }
          else {
              this.customContentRenderId += 1;
          }
          this.renderRunner.request();
          if (wasRendering) {
              this.updateSize();
          }
      }
      destroy() {
          if (this.isRendering) {
              this.isRendering = false;
              this.renderRunner.request();
          }
      }
      updateSize() {
          flushSync(() => {
              super.updateSize();
          });
      }
      batchRendering(func) {
          this.renderRunner.pause('batchRendering');
          func();
          this.renderRunner.resume('batchRendering');
      }
      pauseRendering() {
          this.renderRunner.pause('pauseRendering');
      }
      resumeRendering() {
          this.renderRunner.resume('pauseRendering', true);
      }
      resetOptions(optionOverrides, changedOptionNames) {
          this.currentDataManager.resetOptions(optionOverrides, changedOptionNames);
      }
      setClassNames(classNames) {
          if (!isArraysEqual(classNames, this.currentClassNames)) {
              let { classList } = this.el;
              for (let className of this.currentClassNames) {
                  classList.remove(className);
              }
              for (let className of classNames) {
                  classList.add(className);
              }
              this.currentClassNames = classNames;
          }
      }
      setHeight(height) {
          applyStyleProp(this.el, 'height', height);
      }
  }

  function formatDate(dateInput, options = {}) {
      let dateEnv = buildDateEnv(options);
      let formatter = createFormatter(options);
      let dateMeta = dateEnv.createMarkerMeta(dateInput);
      if (!dateMeta) { // TODO: warning?
          return '';
      }
      return dateEnv.format(dateMeta.marker, formatter, {
          forcedTzo: dateMeta.forcedTzo,
      });
  }
  function formatRange(startInput, endInput, options) {
      let dateEnv = buildDateEnv(typeof options === 'object' && options ? options : {}); // pass in if non-null object
      let formatter = createFormatter(options);
      let startMeta = dateEnv.createMarkerMeta(startInput);
      let endMeta = dateEnv.createMarkerMeta(endInput);
      if (!startMeta || !endMeta) { // TODO: warning?
          return '';
      }
      return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
          forcedStartTzo: startMeta.forcedTzo,
          forcedEndTzo: endMeta.forcedTzo,
          isEndExclusive: options.isEndExclusive,
          defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator,
      });
  }
  // TODO: more DRY and optimized
  function buildDateEnv(settings) {
      let locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
      return new DateEnv(Object.assign(Object.assign({ timeZone: BASE_OPTION_DEFAULTS.timeZone, calendarSystem: 'gregory' }, settings), { locale }));
  }

  // HELPERS
  /*
  if nextDayThreshold is specified, slicing is done in an all-day fashion.
  you can get nextDayThreshold from context.nextDayThreshold
  */
  function sliceEvents(props, allDay) {
      return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
  }

  const version = '7.0.0-beta.1';

  config.touchMouseIgnoreWait = 500;
  let ignoreMouseDepth = 0;
  let listenerCnt = 0;
  let isWindowTouchMoveCancelled = false;
  /*
  Uses a "pointer" abstraction, which monitors UI events for both mouse and touch.
  Tracks when the pointer "drags" on a certain element, meaning down+move+up.

  Also, tracks if there was touch-scrolling.
  Also, can prevent touch-scrolling from happening.
  Also, can fire pointermove events when scrolling happens underneath, even when no real pointer movement.

  emits:
  - pointerdown
  - pointermove
  - pointerup
  */
  class PointerDragging {
      constructor(containerEl) {
          this.subjectEl = null;
          // options that can be directly assigned by caller
          this.selector = ''; // will cause subjectEl in all emitted events to be this element
          this.handleSelector = '';
          this.shouldIgnoreMove = false;
          this.shouldWatchScroll = true; // for simulating pointermove on scroll
          // internal states
          this.isDragging = false;
          this.isTouchDragging = false;
          this.wasTouchScroll = false;
          // Mouse
          // ----------------------------------------------------------------------------------------------------
          this.handleMouseDown = (ev) => {
              if (!this.shouldIgnoreMouse() &&
                  isPrimaryMouseButton(ev) &&
                  this.tryStart(ev)) {
                  let pev = this.createEventFromMouse(ev, true);
                  this.emitter.trigger('pointerdown', pev);
                  this.initScrollWatch(pev);
                  if (!this.shouldIgnoreMove) {
                      document.addEventListener('mousemove', this.handleMouseMove);
                  }
                  document.addEventListener('mouseup', this.handleMouseUp);
              }
          };
          this.handleMouseMove = (ev) => {
              let pev = this.createEventFromMouse(ev);
              this.recordCoords(pev);
              this.emitter.trigger('pointermove', pev);
          };
          this.handleMouseUp = (ev) => {
              document.removeEventListener('mousemove', this.handleMouseMove);
              document.removeEventListener('mouseup', this.handleMouseUp);
              this.emitter.trigger('pointerup', this.createEventFromMouse(ev));
              this.cleanup(); // call last so that pointerup has access to props
          };
          // Touch
          // ----------------------------------------------------------------------------------------------------
          this.handleTouchStart = (ev) => {
              if (this.tryStart(ev)) {
                  this.isTouchDragging = true;
                  let pev = this.createEventFromTouch(ev, true);
                  this.emitter.trigger('pointerdown', pev);
                  this.initScrollWatch(pev);
                  // unlike mouse, need to attach to target, not document
                  // https://stackoverflow.com/a/45760014
                  let targetEl = ev.target;
                  if (!this.shouldIgnoreMove) {
                      targetEl.addEventListener('touchmove', this.handleTouchMove);
                  }
                  targetEl.addEventListener('touchend', this.handleTouchEnd);
                  targetEl.addEventListener('touchcancel', this.handleTouchEnd); // treat it as a touch end
                  // attach a handler to get called when ANY scroll action happens on the page.
                  // this was impossible to do with normal on/off because 'scroll' doesn't bubble.
                  // http://stackoverflow.com/a/32954565/96342
                  window.addEventListener('scroll', this.handleTouchScroll, true);
              }
          };
          this.handleTouchMove = (ev) => {
              let pev = this.createEventFromTouch(ev);
              this.recordCoords(pev);
              this.emitter.trigger('pointermove', pev);
          };
          this.handleTouchEnd = (ev) => {
              if (this.isDragging) { // done to guard against touchend followed by touchcancel
                  let targetEl = ev.target;
                  targetEl.removeEventListener('touchmove', this.handleTouchMove);
                  targetEl.removeEventListener('touchend', this.handleTouchEnd);
                  targetEl.removeEventListener('touchcancel', this.handleTouchEnd);
                  window.removeEventListener('scroll', this.handleTouchScroll, true); // useCaptured=true
                  this.emitter.trigger('pointerup', this.createEventFromTouch(ev));
                  this.cleanup(); // call last so that pointerup has access to props
                  this.isTouchDragging = false;
                  startIgnoringMouse();
              }
          };
          this.handleTouchScroll = () => {
              this.wasTouchScroll = true;
          };
          this.handleScroll = (ev) => {
              if (!this.shouldIgnoreMove) {
                  let pageX = (window.scrollX - this.prevScrollX) + this.prevPageX;
                  let pageY = (window.scrollY - this.prevScrollY) + this.prevPageY;
                  this.emitter.trigger('pointermove', {
                      origEvent: ev,
                      isTouch: this.isTouchDragging,
                      subjectEl: this.subjectEl,
                      pageX,
                      pageY,
                      deltaX: pageX - this.origPageX,
                      deltaY: pageY - this.origPageY,
                  });
              }
          };
          this.containerEl = containerEl;
          this.emitter = new Emitter();
          containerEl.addEventListener('mousedown', this.handleMouseDown);
          containerEl.addEventListener('touchstart', this.handleTouchStart, { passive: true });
          listenerCreated();
      }
      destroy() {
          this.containerEl.removeEventListener('mousedown', this.handleMouseDown);
          this.containerEl.removeEventListener('touchstart', this.handleTouchStart, { passive: true });
          listenerDestroyed();
      }
      tryStart(ev) {
          let subjectEl = this.querySubjectEl(ev);
          let downEl = ev.target;
          if (subjectEl &&
              (!this.handleSelector || elementClosest(downEl, this.handleSelector))) {
              this.subjectEl = subjectEl;
              this.isDragging = true; // do this first so cancelTouchScroll will work
              this.wasTouchScroll = false;
              return true;
          }
          return false;
      }
      cleanup() {
          isWindowTouchMoveCancelled = false;
          this.isDragging = false;
          this.subjectEl = null;
          // keep wasTouchScroll around for later access
          this.destroyScrollWatch();
      }
      querySubjectEl(ev) {
          if (this.selector) {
              return elementClosest(ev.target, this.selector);
          }
          return this.containerEl;
      }
      shouldIgnoreMouse() {
          return ignoreMouseDepth || this.isTouchDragging;
      }
      // can be called by user of this class, to cancel touch-based scrolling for the current drag
      cancelTouchScroll() {
          if (this.isDragging) {
              isWindowTouchMoveCancelled = true;
          }
      }
      // Scrolling that simulates pointermoves
      // ----------------------------------------------------------------------------------------------------
      initScrollWatch(ev) {
          if (this.shouldWatchScroll) {
              this.recordCoords(ev);
              window.addEventListener('scroll', this.handleScroll, true); // useCapture=true
          }
      }
      recordCoords(ev) {
          if (this.shouldWatchScroll) {
              this.prevPageX = ev.pageX;
              this.prevPageY = ev.pageY;
              this.prevScrollX = window.scrollX;
              this.prevScrollY = window.scrollY;
          }
      }
      destroyScrollWatch() {
          if (this.shouldWatchScroll) {
              window.removeEventListener('scroll', this.handleScroll, true); // useCaptured=true
          }
      }
      // Event Normalization
      // ----------------------------------------------------------------------------------------------------
      createEventFromMouse(ev, isFirst) {
          let deltaX = 0;
          let deltaY = 0;
          // TODO: repeat code
          if (isFirst) {
              this.origPageX = ev.pageX;
              this.origPageY = ev.pageY;
          }
          else {
              deltaX = ev.pageX - this.origPageX;
              deltaY = ev.pageY - this.origPageY;
          }
          return {
              origEvent: ev,
              isTouch: false,
              subjectEl: this.subjectEl,
              pageX: ev.pageX,
              pageY: ev.pageY,
              deltaX,
              deltaY,
          };
      }
      createEventFromTouch(ev, isFirst) {
          let touches = ev.touches;
          let pageX;
          let pageY;
          let deltaX = 0;
          let deltaY = 0;
          // if touch coords available, prefer,
          // because FF would give bad ev.pageX ev.pageY
          if (touches && touches.length) {
              pageX = touches[0].pageX;
              pageY = touches[0].pageY;
          }
          else {
              pageX = ev.pageX;
              pageY = ev.pageY;
          }
          // TODO: repeat code
          if (isFirst) {
              this.origPageX = pageX;
              this.origPageY = pageY;
          }
          else {
              deltaX = pageX - this.origPageX;
              deltaY = pageY - this.origPageY;
          }
          return {
              origEvent: ev,
              isTouch: true,
              subjectEl: this.subjectEl,
              pageX,
              pageY,
              deltaX,
              deltaY,
          };
      }
  }
  // Returns a boolean whether this was a left mouse click and no ctrl key (which means right click on Mac)
  function isPrimaryMouseButton(ev) {
      return ev.button === 0 && !ev.ctrlKey;
  }
  // Ignoring fake mouse events generated by touch
  // ----------------------------------------------------------------------------------------------------
  function startIgnoringMouse() {
      ignoreMouseDepth += 1;
      setTimeout(() => {
          ignoreMouseDepth -= 1;
      }, config.touchMouseIgnoreWait);
  }
  // We want to attach touchmove as early as possible for Safari
  // ----------------------------------------------------------------------------------------------------
  function listenerCreated() {
      listenerCnt += 1;
      if (listenerCnt === 1) {
          window.addEventListener('touchmove', onWindowTouchMove, { passive: false });
      }
  }
  function listenerDestroyed() {
      listenerCnt -= 1;
      if (!listenerCnt) {
          window.removeEventListener('touchmove', onWindowTouchMove, { passive: false });
      }
  }
  function onWindowTouchMove(ev) {
      if (isWindowTouchMoveCancelled) {
          ev.preventDefault();
      }
  }

  /*
  An effect in which an element follows the movement of a pointer across the screen.
  The moving element is a clone of some other element.
  Must call start + handleMove + stop.
  */
  class ElementMirror {
      constructor() {
          this.isVisible = false; // must be explicitly enabled
          this.sourceEl = null;
          this.mirrorEl = null;
          this.sourceElRect = null; // screen coords relative to viewport
          // options that can be set directly by caller
          this.parentNode = document.body; // HIGHLY SUGGESTED to set this to sidestep ShadowDOM issues
          this.zIndex = 9999;
          this.revertDuration = 0;
      }
      start(sourceEl, pageX, pageY) {
          this.sourceEl = sourceEl;
          this.sourceElRect = this.sourceEl.getBoundingClientRect();
          this.origScreenX = pageX - window.scrollX;
          this.origScreenY = pageY - window.scrollY;
          this.deltaX = 0;
          this.deltaY = 0;
          this.updateElPosition();
      }
      handleMove(pageX, pageY) {
          this.deltaX = (pageX - window.scrollX) - this.origScreenX;
          this.deltaY = (pageY - window.scrollY) - this.origScreenY;
          this.updateElPosition();
      }
      // can be called before start
      setIsVisible(bool) {
          if (bool) {
              if (!this.isVisible) {
                  if (this.mirrorEl) {
                      this.mirrorEl.style.display = '';
                  }
                  this.isVisible = bool; // needs to happen before updateElPosition
                  this.updateElPosition(); // because was not updating the position while invisible
              }
          }
          else if (this.isVisible) {
              if (this.mirrorEl) {
                  this.mirrorEl.style.display = 'none';
              }
              this.isVisible = bool;
          }
      }
      // always async
      stop(needsRevertAnimation, callback) {
          let done = () => {
              this.cleanup();
              callback();
          };
          if (needsRevertAnimation &&
              this.mirrorEl &&
              this.isVisible &&
              this.revertDuration && // if 0, transition won't work
              (this.deltaX || this.deltaY) // if same coords, transition won't work
          ) {
              this.doRevertAnimation(done, this.revertDuration);
          }
          else {
              setTimeout(done, 0);
          }
      }
      doRevertAnimation(callback, revertDuration) {
          let mirrorEl = this.mirrorEl;
          let finalSourceElRect = this.sourceEl.getBoundingClientRect(); // because autoscrolling might have happened
          mirrorEl.style.transition =
              'top ' + revertDuration + 'ms,' +
                  'left ' + revertDuration + 'ms';
          applyStyle(mirrorEl, {
              left: finalSourceElRect.left,
              top: finalSourceElRect.top,
          });
          whenTransitionDone(mirrorEl, () => {
              mirrorEl.style.transition = '';
              callback();
          });
      }
      cleanup() {
          if (this.mirrorEl) {
              removeElement(this.mirrorEl);
              this.mirrorEl = null;
          }
          this.sourceEl = null;
      }
      updateElPosition() {
          if (this.sourceEl && this.isVisible) {
              applyStyle(this.getMirrorEl(), {
                  left: this.sourceElRect.left + this.deltaX,
                  top: this.sourceElRect.top + this.deltaY,
              });
          }
      }
      getMirrorEl() {
          let sourceElRect = this.sourceElRect;
          let mirrorEl = this.mirrorEl;
          if (!mirrorEl) {
              mirrorEl = this.mirrorEl = this.sourceEl.cloneNode(true); // cloneChildren=true
              // we don't want long taps or any mouse interaction causing selection/menus.
              // would use preventSelection(), but that prevents selectstart, causing problems.
              mirrorEl.style.userSelect = 'none';
              mirrorEl.style.webkitUserSelect = 'none';
              mirrorEl.style.pointerEvents = 'none';
              mirrorEl.classList.add('fc-event-dragging');
              applyStyle(mirrorEl, {
                  position: 'fixed',
                  zIndex: this.zIndex,
                  visibility: '',
                  boxSizing: 'border-box',
                  width: sourceElRect.right - sourceElRect.left,
                  height: sourceElRect.bottom - sourceElRect.top,
                  right: 'auto',
                  bottom: 'auto',
                  margin: 0,
              });
              this.parentNode.appendChild(mirrorEl);
          }
          return mirrorEl;
      }
  }

  /*
  Is a cache for a given element's scroll information (all the info that ScrollController stores)
  in addition the "client rectangle" of the element.. the area within the scrollbars.

  The cache can be in one of two modes:
  - doesListening:false - ignores when the container is scrolled by someone else
  - doesListening:true - watch for scrolling and update the cache
  */
  class ScrollGeomCache extends ScrollController {
      constructor(scrollController, doesListening) {
          super();
          this.handleScroll = () => {
              this.scrollTop = this.scrollController.getScrollTop();
              this.scrollLeft = this.scrollController.getScrollLeft();
              this.handleScrollChange();
          };
          this.scrollController = scrollController;
          this.doesListening = doesListening;
          this.scrollTop = this.origScrollTop = scrollController.getScrollTop();
          this.scrollLeft = this.origScrollLeft = scrollController.getScrollLeft();
          this.scrollWidth = scrollController.getScrollWidth();
          this.scrollHeight = scrollController.getScrollHeight();
          this.clientWidth = scrollController.getClientWidth();
          this.clientHeight = scrollController.getClientHeight();
          this.clientRect = this.computeClientRect(); // do last in case it needs cached values
          if (this.doesListening) {
              this.getEventTarget().addEventListener('scroll', this.handleScroll);
          }
      }
      destroy() {
          if (this.doesListening) {
              this.getEventTarget().removeEventListener('scroll', this.handleScroll);
          }
      }
      getScrollTop() {
          return this.scrollTop;
      }
      getScrollLeft() {
          return this.scrollLeft;
      }
      setScrollTop(top) {
          this.scrollController.setScrollTop(top);
          if (!this.doesListening) {
              // we are not relying on the element to normalize out-of-bounds scroll values
              // so we need to sanitize ourselves
              this.scrollTop = Math.max(Math.min(top, this.getMaxScrollTop()), 0);
              this.handleScrollChange();
          }
      }
      setScrollLeft(top) {
          this.scrollController.setScrollLeft(top);
          if (!this.doesListening) {
              // we are not relying on the element to normalize out-of-bounds scroll values
              // so we need to sanitize ourselves
              this.scrollLeft = Math.max(Math.min(top, this.getMaxScrollLeft()), 0);
              this.handleScrollChange();
          }
      }
      getClientWidth() {
          return this.clientWidth;
      }
      getClientHeight() {
          return this.clientHeight;
      }
      getScrollWidth() {
          return this.scrollWidth;
      }
      getScrollHeight() {
          return this.scrollHeight;
      }
      handleScrollChange() {
      }
  }

  class ElementScrollGeomCache extends ScrollGeomCache {
      constructor(el, doesListening) {
          super(new ElementScrollController(el), doesListening);
      }
      getEventTarget() {
          return this.scrollController.el;
      }
      computeClientRect() {
          return computeInnerRect(this.scrollController.el);
      }
  }

  class WindowScrollGeomCache extends ScrollGeomCache {
      constructor(doesListening) {
          super(new WindowScrollController(), doesListening);
      }
      getEventTarget() {
          return window;
      }
      computeClientRect() {
          return {
              left: this.scrollLeft,
              right: this.scrollLeft + this.clientWidth,
              top: this.scrollTop,
              bottom: this.scrollTop + this.clientHeight,
          };
      }
      // the window is the only scroll object that changes it's rectangle relative
      // to the document's topleft as it scrolls
      handleScrollChange() {
          this.clientRect = this.computeClientRect();
      }
  }

  // If available we are using native "performance" API instead of "Date"
  // Read more about it on MDN:
  // https://developer.mozilla.org/en-US/docs/Web/API/Performance
  const getTime = typeof performance === 'function' ? performance.now : Date.now;
  /*
  For a pointer interaction, automatically scrolls certain scroll containers when the pointer
  approaches the edge.

  The caller must call start + handleMove + stop.
  */
  class AutoScroller {
      constructor() {
          // options that can be set by caller
          this.isEnabled = true;
          this.scrollQuery = [window, '.fc-scroller'];
          this.edgeThreshold = 50; // pixels
          this.maxVelocity = 300; // pixels per second
          // internal state
          this.pointerScreenX = null;
          this.pointerScreenY = null;
          this.isAnimating = false;
          this.scrollCaches = null;
          // protect against the initial pointerdown being too close to an edge and starting the scroll
          this.everMovedUp = false;
          this.everMovedDown = false;
          this.everMovedLeft = false;
          this.everMovedRight = false;
          this.animate = () => {
              if (this.isAnimating) { // wasn't cancelled between animation calls
                  let edge = this.computeBestEdge(this.pointerScreenX + window.scrollX, this.pointerScreenY + window.scrollY);
                  if (edge) {
                      let now = getTime();
                      this.handleSide(edge, (now - this.msSinceRequest) / 1000);
                      this.requestAnimation(now);
                  }
                  else {
                      this.isAnimating = false; // will stop animation
                  }
              }
          };
      }
      start(pageX, pageY, scrollStartEl) {
          if (this.isEnabled) {
              this.scrollCaches = this.buildCaches(scrollStartEl);
              this.pointerScreenX = null;
              this.pointerScreenY = null;
              this.everMovedUp = false;
              this.everMovedDown = false;
              this.everMovedLeft = false;
              this.everMovedRight = false;
              this.handleMove(pageX, pageY);
          }
      }
      handleMove(pageX, pageY) {
          if (this.isEnabled) {
              let pointerScreenX = pageX - window.scrollX;
              let pointerScreenY = pageY - window.scrollY;
              let yDelta = this.pointerScreenY === null ? 0 : pointerScreenY - this.pointerScreenY;
              let xDelta = this.pointerScreenX === null ? 0 : pointerScreenX - this.pointerScreenX;
              if (yDelta < 0) {
                  this.everMovedUp = true;
              }
              else if (yDelta > 0) {
                  this.everMovedDown = true;
              }
              if (xDelta < 0) {
                  this.everMovedLeft = true;
              }
              else if (xDelta > 0) {
                  this.everMovedRight = true;
              }
              this.pointerScreenX = pointerScreenX;
              this.pointerScreenY = pointerScreenY;
              if (!this.isAnimating) {
                  this.isAnimating = true;
                  this.requestAnimation(getTime());
              }
          }
      }
      stop() {
          if (this.isEnabled) {
              this.isAnimating = false; // will stop animation
              for (let scrollCache of this.scrollCaches) {
                  scrollCache.destroy();
              }
              this.scrollCaches = null;
          }
      }
      requestAnimation(now) {
          this.msSinceRequest = now;
          requestAnimationFrame(this.animate);
      }
      handleSide(edge, seconds) {
          let { scrollCache } = edge;
          let { edgeThreshold } = this;
          let invDistance = edgeThreshold - edge.distance;
          let velocity = // the closer to the edge, the faster we scroll
           ((invDistance * invDistance) / (edgeThreshold * edgeThreshold)) * // quadratic
              this.maxVelocity * seconds;
          let sign = 1;
          switch (edge.name) {
              case 'left':
                  sign = -1;
              // falls through
              case 'right':
                  scrollCache.setScrollLeft(scrollCache.getScrollLeft() + velocity * sign);
                  break;
              case 'top':
                  sign = -1;
              // falls through
              case 'bottom':
                  scrollCache.setScrollTop(scrollCache.getScrollTop() + velocity * sign);
                  break;
          }
      }
      // left/top are relative to document topleft
      computeBestEdge(left, top) {
          let { edgeThreshold } = this;
          let bestSide = null;
          let scrollCaches = this.scrollCaches || [];
          for (let scrollCache of scrollCaches) {
              let rect = scrollCache.clientRect;
              let leftDist = left - rect.left;
              let rightDist = rect.right - left;
              let topDist = top - rect.top;
              let bottomDist = rect.bottom - top;
              // completely within the rect?
              if (leftDist >= 0 && rightDist >= 0 && topDist >= 0 && bottomDist >= 0) {
                  if (topDist <= edgeThreshold && this.everMovedUp && scrollCache.canScrollUp() &&
                      (!bestSide || bestSide.distance > topDist)) {
                      bestSide = { scrollCache, name: 'top', distance: topDist };
                  }
                  if (bottomDist <= edgeThreshold && this.everMovedDown && scrollCache.canScrollDown() &&
                      (!bestSide || bestSide.distance > bottomDist)) {
                      bestSide = { scrollCache, name: 'bottom', distance: bottomDist };
                  }
                  /*
                  TODO: fix broken RTL scrolling. canScrollLeft always returning false
                  https://github.com/fullcalendar/fullcalendar/issues/4837
                  */
                  if (leftDist <= edgeThreshold && this.everMovedLeft && scrollCache.canScrollLeft() &&
                      (!bestSide || bestSide.distance > leftDist)) {
                      bestSide = { scrollCache, name: 'left', distance: leftDist };
                  }
                  if (rightDist <= edgeThreshold && this.everMovedRight && scrollCache.canScrollRight() &&
                      (!bestSide || bestSide.distance > rightDist)) {
                      bestSide = { scrollCache, name: 'right', distance: rightDist };
                  }
              }
          }
          return bestSide;
      }
      buildCaches(scrollStartEl) {
          return this.queryScrollEls(scrollStartEl).map((el) => {
              if (el === window) {
                  return new WindowScrollGeomCache(false); // false = don't listen to user-generated scrolls
              }
              return new ElementScrollGeomCache(el, false); // false = don't listen to user-generated scrolls
          });
      }
      queryScrollEls(scrollStartEl) {
          let els = [];
          for (let query of this.scrollQuery) {
              if (typeof query === 'object') {
                  els.push(query);
              }
              else {
                  /*
                  TODO: in the future, always have auto-scroll happen on element where current Hit came from
                  Ticket: https://github.com/fullcalendar/fullcalendar/issues/4593
                  */
                  els.push(...Array.prototype.slice.call(scrollStartEl.getRootNode().querySelectorAll(query)));
              }
          }
          return els;
      }
  }

  /*
  Monitors dragging on an element. Has a number of high-level features:
  - minimum distance required before dragging
  - minimum wait time ("delay") before dragging
  - a mirror element that follows the pointer
  */
  class FeaturefulElementDragging extends ElementDragging {
      constructor(containerEl, selector) {
          super(containerEl);
          this.containerEl = containerEl;
          // options that can be directly set by caller
          // the caller can also set the PointerDragging's options as well
          this.delay = null;
          this.minDistance = 0;
          this.touchScrollAllowed = true; // prevents drag from starting and blocks scrolling during drag
          this.mirrorNeedsRevert = false;
          this.isInteracting = false; // is the user validly moving the pointer? lasts until pointerup
          this.isDragging = false; // is it INTENTFULLY dragging? lasts until after revert animation
          this.isDelayEnded = false;
          this.isDistanceSurpassed = false;
          this.delayTimeoutId = null;
          this.onPointerDown = (ev) => {
              if (!this.isDragging) { // so new drag doesn't happen while revert animation is going
                  this.isInteracting = true;
                  this.isDelayEnded = false;
                  this.isDistanceSurpassed = false;
                  preventSelection(document.body);
                  preventContextMenu(document.body);
                  // prevent links from being visited if there's an eventual drag.
                  // also prevents selection in older browsers (maybe?).
                  // not necessary for touch, besides, browser would complain about passiveness.
                  if (!ev.isTouch) {
                      ev.origEvent.preventDefault();
                  }
                  this.emitter.trigger('pointerdown', ev);
                  if (this.isInteracting && // not destroyed via pointerdown handler
                      !this.pointer.shouldIgnoreMove) {
                      // actions related to initiating dragstart+dragmove+dragend...
                      this.mirror.setIsVisible(false); // reset. caller must set-visible
                      this.mirror.start(ev.subjectEl, ev.pageX, ev.pageY); // must happen on first pointer down
                      this.startDelay(ev);
                      if (!this.minDistance) {
                          this.handleDistanceSurpassed(ev);
                      }
                  }
              }
          };
          this.onPointerMove = (ev) => {
              if (this.isInteracting) {
                  this.emitter.trigger('pointermove', ev);
                  if (!this.isDistanceSurpassed) {
                      let minDistance = this.minDistance;
                      let distanceSq; // current distance from the origin, squared
                      let { deltaX, deltaY } = ev;
                      distanceSq = deltaX * deltaX + deltaY * deltaY;
                      if (distanceSq >= minDistance * minDistance) { // use pythagorean theorem
                          this.handleDistanceSurpassed(ev);
                      }
                  }
                  if (this.isDragging) {
                      // a real pointer move? (not one simulated by scrolling)
                      if (ev.origEvent.type !== 'scroll') {
                          this.mirror.handleMove(ev.pageX, ev.pageY);
                          this.autoScroller.handleMove(ev.pageX, ev.pageY);
                      }
                      this.emitter.trigger('dragmove', ev);
                  }
              }
          };
          this.onPointerUp = (ev) => {
              if (this.isInteracting) {
                  this.isInteracting = false;
                  allowSelection(document.body);
                  allowContextMenu(document.body);
                  this.emitter.trigger('pointerup', ev); // can potentially set mirrorNeedsRevert
                  if (this.isDragging) {
                      this.autoScroller.stop();
                      this.tryStopDrag(ev); // which will stop the mirror
                  }
                  if (this.delayTimeoutId) {
                      clearTimeout(this.delayTimeoutId);
                      this.delayTimeoutId = null;
                  }
              }
          };
          let pointer = this.pointer = new PointerDragging(containerEl);
          pointer.emitter.on('pointerdown', this.onPointerDown);
          pointer.emitter.on('pointermove', this.onPointerMove);
          pointer.emitter.on('pointerup', this.onPointerUp);
          if (selector) {
              pointer.selector = selector;
          }
          this.mirror = new ElementMirror();
          this.autoScroller = new AutoScroller();
      }
      destroy() {
          this.pointer.destroy();
          // HACK: simulate a pointer-up to end the current drag
          // TODO: fire 'dragend' directly and stop interaction. discourage use of pointerup event (b/c might not fire)
          this.onPointerUp({});
      }
      startDelay(ev) {
          if (typeof this.delay === 'number') {
              this.delayTimeoutId = setTimeout(() => {
                  this.delayTimeoutId = null;
                  this.handleDelayEnd(ev);
              }, this.delay); // not assignable to number!
          }
          else {
              this.handleDelayEnd(ev);
          }
      }
      handleDelayEnd(ev) {
          this.isDelayEnded = true;
          this.tryStartDrag(ev);
      }
      handleDistanceSurpassed(ev) {
          this.isDistanceSurpassed = true;
          this.tryStartDrag(ev);
      }
      tryStartDrag(ev) {
          if (this.isDelayEnded && this.isDistanceSurpassed) {
              if (!this.pointer.wasTouchScroll || this.touchScrollAllowed) {
                  this.isDragging = true;
                  this.mirrorNeedsRevert = false;
                  this.autoScroller.start(ev.pageX, ev.pageY, this.containerEl);
                  this.emitter.trigger('dragstart', ev);
                  if (this.touchScrollAllowed === false) {
                      this.pointer.cancelTouchScroll();
                  }
              }
          }
      }
      tryStopDrag(ev) {
          // .stop() is ALWAYS asynchronous, which we NEED because we want all pointerup events
          // that come from the document to fire beforehand. much more convenient this way.
          this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, ev));
      }
      stopDrag(ev) {
          this.isDragging = false;
          this.emitter.trigger('dragend', ev);
      }
      // fill in the implementations...
      setIgnoreMove(bool) {
          this.pointer.shouldIgnoreMove = bool;
      }
      setMirrorIsVisible(bool) {
          this.mirror.setIsVisible(bool);
      }
      setMirrorNeedsRevert(bool) {
          this.mirrorNeedsRevert = bool;
      }
      setAutoScrollEnabled(bool) {
          this.autoScroller.isEnabled = bool;
      }
  }

  /*
  When this class is instantiated, it records the offset of an element (relative to the document topleft),
  and continues to monitor scrolling, updating the cached coordinates if it needs to.
  Does not access the DOM after instantiation, so highly performant.

  Also keeps track of all scrolling/overflow:hidden containers that are parents of the given element
  and an determine if a given point is inside the combined clipping rectangle.
  */
  class OffsetTracker {
      constructor(el) {
          this.el = el;
          this.origRect = computeRect(el);
          // will work fine for divs that have overflow:hidden
          this.scrollCaches = getClippingParents(el).map((scrollEl) => new ElementScrollGeomCache(scrollEl, true));
      }
      destroy() {
          for (let scrollCache of this.scrollCaches) {
              scrollCache.destroy();
          }
      }
      computeLeft() {
          let left = this.origRect.left;
          for (let scrollCache of this.scrollCaches) {
              left += scrollCache.origScrollLeft - scrollCache.getScrollLeft();
          }
          return left;
      }
      computeTop() {
          let top = this.origRect.top;
          for (let scrollCache of this.scrollCaches) {
              top += scrollCache.origScrollTop - scrollCache.getScrollTop();
          }
          return top;
      }
      isWithinClipping(pageX, pageY) {
          let point = { left: pageX, top: pageY };
          for (let scrollCache of this.scrollCaches) {
              if (!isIgnoredClipping(scrollCache.getEventTarget()) &&
                  !pointInsideRect(point, scrollCache.clientRect)) {
                  return false;
              }
          }
          return true;
      }
  }
  // certain clipping containers should never constrain interactions, like <html> and <body>
  // https://github.com/fullcalendar/fullcalendar/issues/3615
  function isIgnoredClipping(node) {
      let tagName = node.tagName;
      return tagName === 'HTML' || tagName === 'BODY';
  }

  /*
  Tracks movement over multiple droppable areas (aka "hits")
  that exist in one or more DateComponents.
  Relies on an existing draggable.

  emits:
  - pointerdown
  - dragstart
  - hitchange - fires initially, even if not over a hit
  - pointerup
  - (hitchange - again, to null, if ended over a hit)
  - dragend
  */
  class HitDragging {
      constructor(dragging, droppableStore) {
          // options that can be set by caller
          this.useSubjectCenter = false;
          this.requireInitial = true; // if doesn't start out on a hit, won't emit any events
          this.disablePointCheck = false;
          this.initialHit = null;
          this.movingHit = null;
          this.finalHit = null; // won't ever be populated if shouldIgnoreMove
          this.handlePointerDown = (ev) => {
              let { dragging } = this;
              this.initialHit = null;
              this.movingHit = null;
              this.finalHit = null;
              this.prepareHits();
              this.processFirstCoord(ev);
              if (this.initialHit || !this.requireInitial) {
                  dragging.setIgnoreMove(false);
                  // TODO: fire this before computing processFirstCoord, so listeners can cancel. this gets fired by almost every handler :(
                  this.emitter.trigger('pointerdown', ev);
              }
              else {
                  dragging.setIgnoreMove(true);
              }
          };
          this.handleDragStart = (ev) => {
              this.emitter.trigger('dragstart', ev);
              this.handleMove(ev, true); // force = fire even if initially null
          };
          this.handleDragMove = (ev) => {
              this.emitter.trigger('dragmove', ev);
              this.handleMove(ev);
          };
          this.handlePointerUp = (ev) => {
              this.releaseHits();
              this.emitter.trigger('pointerup', ev);
          };
          this.handleDragEnd = (ev) => {
              if (this.movingHit) {
                  this.emitter.trigger('hitupdate', null, true, ev);
              }
              this.finalHit = this.movingHit;
              this.movingHit = null;
              this.emitter.trigger('dragend', ev);
          };
          this.droppableStore = droppableStore;
          dragging.emitter.on('pointerdown', this.handlePointerDown);
          dragging.emitter.on('dragstart', this.handleDragStart);
          dragging.emitter.on('dragmove', this.handleDragMove);
          dragging.emitter.on('pointerup', this.handlePointerUp);
          dragging.emitter.on('dragend', this.handleDragEnd);
          this.dragging = dragging;
          this.emitter = new Emitter();
      }
      // sets initialHit
      // sets coordAdjust
      processFirstCoord(ev) {
          let origPoint = { left: ev.pageX, top: ev.pageY };
          let adjustedPoint = origPoint;
          let subjectEl = ev.subjectEl;
          let subjectRect;
          if (subjectEl instanceof HTMLElement) { // i.e. not a Document/ShadowRoot
              subjectRect = computeRect(subjectEl);
              adjustedPoint = constrainPoint(adjustedPoint, subjectRect);
          }
          let initialHit = this.initialHit = this.queryHitForOffset(adjustedPoint.left, adjustedPoint.top);
          if (initialHit) {
              if (this.useSubjectCenter && subjectRect) {
                  let slicedSubjectRect = intersectRects(subjectRect, initialHit.rect);
                  if (slicedSubjectRect) {
                      adjustedPoint = getRectCenter(slicedSubjectRect);
                  }
              }
              this.coordAdjust = diffPoints(adjustedPoint, origPoint);
          }
          else {
              this.coordAdjust = { left: 0, top: 0 };
          }
      }
      handleMove(ev, forceHandle) {
          let hit = this.queryHitForOffset(ev.pageX + this.coordAdjust.left, ev.pageY + this.coordAdjust.top);
          if (forceHandle || !isHitsEqual(this.movingHit, hit)) {
              this.movingHit = hit;
              this.emitter.trigger('hitupdate', hit, false, ev);
          }
      }
      prepareHits() {
          this.offsetTrackers = mapHash(this.droppableStore, (interactionSettings) => {
              interactionSettings.component.prepareHits();
              return new OffsetTracker(interactionSettings.el);
          });
      }
      releaseHits() {
          let { offsetTrackers } = this;
          for (let id in offsetTrackers) {
              offsetTrackers[id].destroy();
          }
          this.offsetTrackers = {};
      }
      queryHitForOffset(offsetLeft, offsetTop) {
          let { droppableStore, offsetTrackers } = this;
          let bestHit = null;
          for (let id in droppableStore) {
              let component = droppableStore[id].component;
              let offsetTracker = offsetTrackers[id];
              if (offsetTracker && // wasn't destroyed mid-drag
                  offsetTracker.isWithinClipping(offsetLeft, offsetTop)) {
                  let originLeft = offsetTracker.computeLeft();
                  let originTop = offsetTracker.computeTop();
                  let positionLeft = offsetLeft - originLeft;
                  let positionTop = offsetTop - originTop;
                  let { origRect } = offsetTracker;
                  let width = origRect.right - origRect.left;
                  let height = origRect.bottom - origRect.top;
                  if (
                  // must be within the element's bounds
                  positionLeft >= 0 && positionLeft < width &&
                      positionTop >= 0 && positionTop < height) {
                      let hit = component.queryHit(positionLeft, positionTop, width, height);
                      if (hit && (
                      // make sure the hit is within activeRange, meaning it's not a dead cell
                      rangeContainsRange(hit.dateProfile.activeRange, hit.dateSpan.range)) &&
                          // Ensure the component we are querying for the hit is accessibly my the pointer
                          // Prevents obscured calendars (ex: under a modal dialog) from accepting hit
                          // https://github.com/fullcalendar/fullcalendar/issues/5026
                          (this.disablePointCheck ||
                              offsetTracker.el.contains(offsetTracker.el.getRootNode().elementFromPoint(
                              // add-back origins to get coordinate relative to top-left of window viewport
                              positionLeft + originLeft - window.scrollX, positionTop + originTop - window.scrollY))) &&
                          (!bestHit || hit.layer > bestHit.layer)) {
                          hit.componentId = id;
                          hit.context = component.context;
                          // TODO: better way to re-orient rectangle
                          hit.rect.left += originLeft;
                          hit.rect.right += originLeft;
                          hit.rect.top += originTop;
                          hit.rect.bottom += originTop;
                          bestHit = hit;
                      }
                  }
              }
          }
          return bestHit;
      }
  }
  function isHitsEqual(hit0, hit1) {
      if (!hit0 && !hit1) {
          return true;
      }
      if (Boolean(hit0) !== Boolean(hit1)) {
          return false;
      }
      return isDateSpansEqual(hit0.dateSpan, hit1.dateSpan);
  }

  function buildDatePointApiWithContext(dateSpan, context) {
      let props = {};
      for (let transform of context.pluginHooks.datePointTransforms) {
          Object.assign(props, transform(dateSpan, context));
      }
      Object.assign(props, buildDatePointApi(dateSpan, context.dateEnv));
      return props;
  }
  function buildDatePointApi(span, dateEnv) {
      return {
          date: dateEnv.toDate(span.range.start),
          dateStr: dateEnv.formatIso(span.range.start, { omitTime: span.allDay }),
          allDay: span.allDay,
      };
  }

  /*
  Monitors when the user clicks on a specific date/time of a component.
  A pointerdown+pointerup on the same "hit" constitutes a click.
  */
  class DateClicking extends Interaction {
      constructor(settings) {
          super(settings);
          this.handlePointerDown = (pev) => {
              let { dragging } = this;
              let downEl = pev.origEvent.target;
              // do this in pointerdown (not dragend) because DOM might be mutated by the time dragend is fired
              dragging.setIgnoreMove(!this.component.isValidDateDownEl(downEl));
          };
          // won't even fire if moving was ignored
          this.handleDragEnd = (ev) => {
              let { component } = this;
              let { pointer } = this.dragging;
              if (!pointer.wasTouchScroll) {
                  let { initialHit, finalHit } = this.hitDragging;
                  if (initialHit && finalHit && isHitsEqual(initialHit, finalHit)) {
                      let { context } = component;
                      let arg = Object.assign(Object.assign({}, buildDatePointApiWithContext(initialHit.dateSpan, context)), { dayEl: initialHit.dayEl, jsEvent: ev.origEvent, view: context.viewApi || context.calendarApi.view });
                      context.emitter.trigger('dateClick', arg);
                  }
              }
          };
          // we DO want to watch pointer moves because otherwise finalHit won't get populated
          this.dragging = new FeaturefulElementDragging(settings.el);
          this.dragging.autoScroller.isEnabled = false;
          let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
          hitDragging.emitter.on('pointerdown', this.handlePointerDown);
          hitDragging.emitter.on('dragend', this.handleDragEnd);
      }
      destroy() {
          this.dragging.destroy();
      }
  }

  /*
  Tracks when the user selects a portion of time of a component,
  constituted by a drag over date cells, with a possible delay at the beginning of the drag.
  */
  class DateSelecting extends Interaction {
      constructor(settings) {
          super(settings);
          this.dragSelection = null;
          this.handlePointerDown = (ev) => {
              let { component, dragging } = this;
              let { options } = component.context;
              let canSelect = options.selectable &&
                  component.isValidDateDownEl(ev.origEvent.target);
              // don't bother to watch expensive moves if component won't do selection
              dragging.setIgnoreMove(!canSelect);
              // if touch, require user to hold down
              dragging.delay = ev.isTouch ? getComponentTouchDelay$1(component) : null;
          };
          this.handleDragStart = (ev) => {
              this.component.context.calendarApi.unselect(ev); // unselect previous selections
          };
          this.handleHitUpdate = (hit, isFinal) => {
              let { context } = this.component;
              let dragSelection = null;
              let isInvalid = false;
              if (hit) {
                  let initialHit = this.hitDragging.initialHit;
                  let disallowed = hit.componentId === initialHit.componentId
                      && this.isHitComboAllowed
                      && !this.isHitComboAllowed(initialHit, hit);
                  if (!disallowed) {
                      dragSelection = joinHitsIntoSelection(initialHit, hit, context.pluginHooks.dateSelectionTransformers);
                  }
                  if (!dragSelection || !isDateSelectionValid(dragSelection, hit.dateProfile, context)) {
                      isInvalid = true;
                      dragSelection = null;
                  }
              }
              if (dragSelection) {
                  context.dispatch({ type: 'SELECT_DATES', selection: dragSelection });
              }
              else if (!isFinal) { // only unselect if moved away while dragging
                  context.dispatch({ type: 'UNSELECT_DATES' });
              }
              if (!isInvalid) {
                  enableCursor();
              }
              else {
                  disableCursor();
              }
              if (!isFinal) {
                  this.dragSelection = dragSelection; // only clear if moved away from all hits while dragging
              }
          };
          this.handlePointerUp = (pev) => {
              if (this.dragSelection) {
                  // selection is already rendered, so just need to report selection
                  triggerDateSelect(this.dragSelection, pev, this.component.context);
                  this.dragSelection = null;
              }
          };
          let { component } = settings;
          let { options } = component.context;
          let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
          dragging.touchScrollAllowed = false;
          dragging.minDistance = options.selectMinDistance || 0;
          dragging.autoScroller.isEnabled = options.dragScroll;
          let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
          hitDragging.emitter.on('pointerdown', this.handlePointerDown);
          hitDragging.emitter.on('dragstart', this.handleDragStart);
          hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
          hitDragging.emitter.on('pointerup', this.handlePointerUp);
      }
      destroy() {
          this.dragging.destroy();
      }
  }
  function getComponentTouchDelay$1(component) {
      let { options } = component.context;
      let delay = options.selectLongPressDelay;
      if (delay == null) {
          delay = options.longPressDelay;
      }
      return delay;
  }
  function joinHitsIntoSelection(hit0, hit1, dateSelectionTransformers) {
      let dateSpan0 = hit0.dateSpan;
      let dateSpan1 = hit1.dateSpan;
      let ms = [
          dateSpan0.range.start,
          dateSpan0.range.end,
          dateSpan1.range.start,
          dateSpan1.range.end,
      ];
      ms.sort(compareNumbers);
      let props = {};
      for (let transformer of dateSelectionTransformers) {
          let res = transformer(hit0, hit1);
          if (res === false) {
              return null;
          }
          if (res) {
              Object.assign(props, res);
          }
      }
      props.range = { start: ms[0], end: ms[3] };
      props.allDay = dateSpan0.allDay;
      return props;
  }

  class EventDragging extends Interaction {
      constructor(settings) {
          super(settings);
          // internal state
          this.subjectEl = null;
          this.isDragging = false;
          this.eventRange = null;
          this.relevantEvents = null; // the events being dragged
          this.receivingContext = null;
          this.validMutation = null;
          this.mutatedRelevantEvents = null;
          this.handlePointerDown = (ev) => {
              let origTarget = ev.origEvent.target;
              let { component, dragging } = this;
              let { mirror } = dragging;
              let { options } = component.context;
              let initialContext = component.context;
              this.subjectEl = ev.subjectEl;
              let eventRange = this.eventRange = getElEventRange(ev.subjectEl);
              let eventInstanceId = eventRange.instance.instanceId;
              this.relevantEvents = getRelevantEvents(initialContext.getCurrentData().eventStore, eventInstanceId);
              dragging.minDistance = ev.isTouch ? 0 : options.eventDragMinDistance;
              dragging.delay =
                  // only do a touch delay if touch and this event hasn't been selected yet
                  (ev.isTouch && eventInstanceId !== component.props.eventSelection) ?
                      getComponentTouchDelay(component) :
                      null;
              if (options.fixedMirrorParent) {
                  mirror.parentNode = options.fixedMirrorParent;
              }
              else {
                  mirror.parentNode = elementClosest(origTarget, '.fc');
              }
              mirror.revertDuration = options.dragRevertDuration;
              let isValid = component.isValidSegDownEl(origTarget) &&
                  !elementClosest(origTarget, '.fc-event-resizer'); // NOT on a resizer
              dragging.setIgnoreMove(!isValid);
              // disable dragging for elements that are resizable (ie, selectable)
              // but are not draggable
              this.isDragging = isValid &&
                  ev.subjectEl.classList.contains('fc-event-draggable');
          };
          this.handleDragStart = (ev) => {
              let initialContext = this.component.context;
              let eventRange = this.eventRange;
              let eventInstanceId = eventRange.instance.instanceId;
              if (ev.isTouch) {
                  // need to select a different event?
                  if (eventInstanceId !== this.component.props.eventSelection) {
                      initialContext.dispatch({ type: 'SELECT_EVENT', eventInstanceId });
                  }
              }
              else {
                  // if now using mouse, but was previous touch interaction, clear selected event
                  initialContext.dispatch({ type: 'UNSELECT_EVENT' });
              }
              if (this.isDragging) {
                  initialContext.calendarApi.unselect(ev); // unselect *date* selection
                  initialContext.emitter.trigger('eventDragStart', {
                      el: this.subjectEl,
                      event: new EventImpl(initialContext, eventRange.def, eventRange.instance),
                      jsEvent: ev.origEvent,
                      view: initialContext.viewApi,
                  });
              }
          };
          this.handleHitUpdate = (hit, isFinal) => {
              if (!this.isDragging) {
                  return;
              }
              let relevantEvents = this.relevantEvents;
              let initialHit = this.hitDragging.initialHit;
              let initialContext = this.component.context;
              // states based on new hit
              let receivingContext = null;
              let mutation = null;
              let mutatedRelevantEvents = null;
              let isInvalid = false;
              let interaction = {
                  affectedEvents: relevantEvents,
                  mutatedEvents: createEmptyEventStore(),
                  isEvent: true,
              };
              if (hit) {
                  receivingContext = hit.context;
                  let receivingOptions = receivingContext.options;
                  if (initialContext === receivingContext ||
                      (receivingOptions.editable && receivingOptions.droppable)) {
                      mutation = computeEventMutation(initialHit, hit, this.eventRange.instance.range.start, receivingContext.getCurrentData().pluginHooks.eventDragMutationMassagers);
                      if (mutation) {
                          mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, receivingContext.getCurrentData().eventUiBases, mutation, receivingContext);
                          interaction.mutatedEvents = mutatedRelevantEvents;
                          if (!isInteractionValid(interaction, hit.dateProfile, receivingContext)) {
                              isInvalid = true;
                              mutation = null;
                              mutatedRelevantEvents = null;
                              interaction.mutatedEvents = createEmptyEventStore();
                          }
                      }
                  }
                  else {
                      receivingContext = null;
                  }
              }
              this.displayDrag(receivingContext, interaction);
              if (!isInvalid) {
                  enableCursor();
              }
              else {
                  disableCursor();
              }
              if (!isFinal) {
                  if (initialContext === receivingContext && // TODO: write test for this
                      isHitsEqual(initialHit, hit)) {
                      mutation = null;
                  }
                  this.dragging.setMirrorNeedsRevert(!mutation);
                  // render the mirror if no already-rendered mirror
                  // TODO: wish we could somehow wait for dispatch to guarantee render
                  this.dragging.setMirrorIsVisible(!hit || !this.subjectEl.getRootNode().querySelector('.fc-event-mirror'));
                  // assign states based on new hit
                  this.receivingContext = receivingContext;
                  this.validMutation = mutation;
                  this.mutatedRelevantEvents = mutatedRelevantEvents;
              }
          };
          this.handlePointerUp = () => {
              if (!this.isDragging) {
                  this.cleanup(); // because handleDragEnd won't fire
              }
          };
          this.handleDragEnd = (ev) => {
              if (this.isDragging) {
                  let initialContext = this.component.context;
                  let initialView = initialContext.viewApi;
                  let { receivingContext, validMutation } = this;
                  let eventDef = this.eventRange.def;
                  let eventInstance = this.eventRange.instance;
                  let eventApi = new EventImpl(initialContext, eventDef, eventInstance);
                  let relevantEvents = this.relevantEvents;
                  let mutatedRelevantEvents = this.mutatedRelevantEvents;
                  let { finalHit } = this.hitDragging;
                  this.clearDrag(); // must happen after revert animation
                  initialContext.emitter.trigger('eventDragStop', {
                      el: this.subjectEl,
                      event: eventApi,
                      jsEvent: ev.origEvent,
                      view: initialView,
                  });
                  if (validMutation) {
                      // dropped within same calendar
                      if (receivingContext === initialContext) {
                          let updatedEventApi = new EventImpl(initialContext, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                          initialContext.dispatch({
                              type: 'MERGE_EVENTS',
                              eventStore: mutatedRelevantEvents,
                          });
                          let eventChangeArg = {
                              oldEvent: eventApi,
                              event: updatedEventApi,
                              relatedEvents: buildEventApis(mutatedRelevantEvents, initialContext, eventInstance),
                              revert() {
                                  initialContext.dispatch({
                                      type: 'MERGE_EVENTS',
                                      eventStore: relevantEvents, // the pre-change data
                                  });
                              },
                          };
                          let transformed = {};
                          for (let transformer of initialContext.getCurrentData().pluginHooks.eventDropTransformers) {
                              Object.assign(transformed, transformer(validMutation, initialContext));
                          }
                          initialContext.emitter.trigger('eventDrop', Object.assign(Object.assign(Object.assign({}, eventChangeArg), transformed), { el: ev.subjectEl, delta: validMutation.datesDelta, jsEvent: ev.origEvent, view: initialView }));
                          initialContext.emitter.trigger('eventChange', eventChangeArg);
                          // dropped in different calendar
                      }
                      else if (receivingContext) {
                          let eventRemoveArg = {
                              event: eventApi,
                              relatedEvents: buildEventApis(relevantEvents, initialContext, eventInstance),
                              revert() {
                                  initialContext.dispatch({
                                      type: 'MERGE_EVENTS',
                                      eventStore: relevantEvents,
                                  });
                              },
                          };
                          initialContext.emitter.trigger('eventLeave', Object.assign(Object.assign({}, eventRemoveArg), { draggedEl: ev.subjectEl, view: initialView }));
                          initialContext.dispatch({
                              type: 'REMOVE_EVENTS',
                              eventStore: relevantEvents,
                          });
                          initialContext.emitter.trigger('eventRemove', eventRemoveArg);
                          let addedEventDef = mutatedRelevantEvents.defs[eventDef.defId];
                          let addedEventInstance = mutatedRelevantEvents.instances[eventInstance.instanceId];
                          let addedEventApi = new EventImpl(receivingContext, addedEventDef, addedEventInstance);
                          receivingContext.dispatch({
                              type: 'MERGE_EVENTS',
                              eventStore: mutatedRelevantEvents,
                          });
                          let eventAddArg = {
                              event: addedEventApi,
                              relatedEvents: buildEventApis(mutatedRelevantEvents, receivingContext, addedEventInstance),
                              revert() {
                                  receivingContext.dispatch({
                                      type: 'REMOVE_EVENTS',
                                      eventStore: mutatedRelevantEvents,
                                  });
                              },
                          };
                          receivingContext.emitter.trigger('eventAdd', eventAddArg);
                          if (ev.isTouch) {
                              receivingContext.dispatch({
                                  type: 'SELECT_EVENT',
                                  eventInstanceId: eventInstance.instanceId,
                              });
                          }
                          receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: ev.subjectEl, jsEvent: ev.origEvent, view: finalHit.context.viewApi }));
                          receivingContext.emitter.trigger('eventReceive', Object.assign(Object.assign({}, eventAddArg), { draggedEl: ev.subjectEl, view: finalHit.context.viewApi }));
                      }
                  }
                  else {
                      initialContext.emitter.trigger('_noEventDrop');
                  }
              }
              this.cleanup();
          };
          let { component } = this;
          let { options } = component.context;
          let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
          dragging.pointer.selector = EventDragging.SELECTOR;
          dragging.touchScrollAllowed = false;
          dragging.autoScroller.isEnabled = options.dragScroll;
          let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsStore);
          hitDragging.useSubjectCenter = settings.useEventCenter;
          hitDragging.emitter.on('pointerdown', this.handlePointerDown);
          hitDragging.emitter.on('dragstart', this.handleDragStart);
          hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
          hitDragging.emitter.on('pointerup', this.handlePointerUp);
          hitDragging.emitter.on('dragend', this.handleDragEnd);
      }
      destroy() {
          this.dragging.destroy();
      }
      // render a drag state on the next receivingCalendar
      displayDrag(nextContext, state) {
          let initialContext = this.component.context;
          let prevContext = this.receivingContext;
          // does the previous calendar need to be cleared?
          if (prevContext && prevContext !== nextContext) {
              // does the initial calendar need to be cleared?
              // if so, don't clear all the way. we still need to to hide the affectedEvents
              if (prevContext === initialContext) {
                  prevContext.dispatch({
                      type: 'SET_EVENT_DRAG',
                      state: {
                          affectedEvents: state.affectedEvents,
                          mutatedEvents: createEmptyEventStore(),
                          isEvent: true,
                      },
                  });
                  // completely clear the old calendar if it wasn't the initial
              }
              else {
                  prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
              }
          }
          if (nextContext) {
              nextContext.dispatch({ type: 'SET_EVENT_DRAG', state });
          }
      }
      clearDrag() {
          let initialCalendar = this.component.context;
          let { receivingContext } = this;
          if (receivingContext) {
              receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
          }
          // the initial calendar might have an dummy drag state from displayDrag
          if (initialCalendar !== receivingContext) {
              initialCalendar.dispatch({ type: 'UNSET_EVENT_DRAG' });
          }
      }
      cleanup() {
          this.isDragging = false;
          this.eventRange = null;
          this.relevantEvents = null;
          this.receivingContext = null;
          this.validMutation = null;
          this.mutatedRelevantEvents = null;
      }
  }
  // TODO: test this in IE11
  // QUESTION: why do we need it on the resizable???
  EventDragging.SELECTOR = '.fc-event-draggable, .fc-event-resizable';
  function computeEventMutation(hit0, hit1, eventInstanceStart, massagers) {
      let dateSpan0 = hit0.dateSpan;
      let dateSpan1 = hit1.dateSpan;
      let date0 = dateSpan0.range.start;
      let date1 = dateSpan1.range.start;
      let standardProps = {};
      if (dateSpan0.allDay !== dateSpan1.allDay) {
          standardProps.allDay = dateSpan1.allDay;
          standardProps.hasEnd = hit1.context.options.allDayMaintainDuration;
          if (dateSpan1.allDay) {
              // means date1 is already start-of-day,
              // but date0 needs to be converted
              date0 = startOfDay(eventInstanceStart);
          }
          else {
              // Moving from allDate->timed
              // Doesn't matter where on the event the drag began, mutate the event's start-date to date1
              date0 = eventInstanceStart;
          }
      }
      let delta = diffDates(date0, date1, hit0.context.dateEnv, hit0.componentId === hit1.componentId ?
          hit0.largeUnit :
          null);
      if (delta.milliseconds) { // has hours/minutes/seconds
          standardProps.allDay = false;
      }
      let mutation = {
          datesDelta: delta,
          standardProps,
      };
      for (let massager of massagers) {
          massager(mutation, hit0, hit1);
      }
      return mutation;
  }
  function getComponentTouchDelay(component) {
      let { options } = component.context;
      let delay = options.eventLongPressDelay;
      if (delay == null) {
          delay = options.longPressDelay;
      }
      return delay;
  }

  class EventResizing extends Interaction {
      constructor(settings) {
          super(settings);
          // internal state
          this.draggingSegEl = null;
          this.draggingEventRange = null; // TODO: rename to resizingSeg? subjectSeg?
          this.eventRange = null;
          this.relevantEvents = null;
          this.validMutation = null;
          this.mutatedRelevantEvents = null;
          this.handlePointerDown = (ev) => {
              let { component } = this;
              let segEl = this.querySegEl(ev);
              let eventRange = this.eventRange = getElEventRange(segEl);
              this.dragging.minDistance = component.context.options.eventDragMinDistance;
              // if touch, need to be working with a selected event
              this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(ev.origEvent.target) ||
                  (ev.isTouch && this.component.props.eventSelection !== eventRange.instance.instanceId));
          };
          this.handleDragStart = (ev) => {
              let { context } = this.component;
              let eventRange = this.eventRange;
              this.relevantEvents = getRelevantEvents(context.getCurrentData().eventStore, this.eventRange.instance.instanceId);
              let segEl = this.querySegEl(ev);
              this.draggingSegEl = segEl;
              this.draggingEventRange = getElEventRange(segEl);
              context.calendarApi.unselect();
              context.emitter.trigger('eventResizeStart', {
                  el: segEl,
                  event: new EventImpl(context, eventRange.def, eventRange.instance),
                  jsEvent: ev.origEvent,
                  view: context.viewApi,
              });
          };
          this.handleHitUpdate = (hit, isFinal, ev) => {
              let { context } = this.component;
              let relevantEvents = this.relevantEvents;
              let initialHit = this.hitDragging.initialHit;
              let eventInstance = this.eventRange.instance;
              let mutation = null;
              let mutatedRelevantEvents = null;
              let isInvalid = false;
              let interaction = {
                  affectedEvents: relevantEvents,
                  mutatedEvents: createEmptyEventStore(),
                  isEvent: true,
              };
              if (hit) {
                  let disallowed = hit.componentId === initialHit.componentId
                      && this.isHitComboAllowed
                      && !this.isHitComboAllowed(initialHit, hit);
                  if (!disallowed) {
                      mutation = computeMutation(initialHit, hit, ev.subjectEl.classList.contains('fc-event-resizer-start'), eventInstance.range);
                  }
              }
              if (mutation) {
                  mutatedRelevantEvents = applyMutationToEventStore(relevantEvents, context.getCurrentData().eventUiBases, mutation, context);
                  interaction.mutatedEvents = mutatedRelevantEvents;
                  if (!isInteractionValid(interaction, hit.dateProfile, context)) {
                      isInvalid = true;
                      mutation = null;
                      mutatedRelevantEvents = null;
                      interaction.mutatedEvents = null;
                  }
              }
              if (mutatedRelevantEvents) {
                  context.dispatch({
                      type: 'SET_EVENT_RESIZE',
                      state: interaction,
                  });
              }
              else {
                  context.dispatch({ type: 'UNSET_EVENT_RESIZE' });
              }
              if (!isInvalid) {
                  enableCursor();
              }
              else {
                  disableCursor();
              }
              if (!isFinal) {
                  if (mutation && isHitsEqual(initialHit, hit)) {
                      mutation = null;
                  }
                  this.validMutation = mutation;
                  this.mutatedRelevantEvents = mutatedRelevantEvents;
              }
          };
          this.handleDragEnd = (ev) => {
              let { context } = this.component;
              let eventDef = this.eventRange.def;
              let eventInstance = this.eventRange.instance;
              let eventApi = new EventImpl(context, eventDef, eventInstance);
              let relevantEvents = this.relevantEvents;
              let mutatedRelevantEvents = this.mutatedRelevantEvents;
              context.emitter.trigger('eventResizeStop', {
                  el: this.draggingSegEl,
                  event: eventApi,
                  jsEvent: ev.origEvent,
                  view: context.viewApi,
              });
              if (this.validMutation) {
                  let updatedEventApi = new EventImpl(context, mutatedRelevantEvents.defs[eventDef.defId], eventInstance ? mutatedRelevantEvents.instances[eventInstance.instanceId] : null);
                  context.dispatch({
                      type: 'MERGE_EVENTS',
                      eventStore: mutatedRelevantEvents,
                  });
                  let eventChangeArg = {
                      oldEvent: eventApi,
                      event: updatedEventApi,
                      relatedEvents: buildEventApis(mutatedRelevantEvents, context, eventInstance),
                      revert() {
                          context.dispatch({
                              type: 'MERGE_EVENTS',
                              eventStore: relevantEvents, // the pre-change events
                          });
                      },
                  };
                  context.emitter.trigger('eventResize', Object.assign(Object.assign({}, eventChangeArg), { el: this.draggingSegEl, startDelta: this.validMutation.startDelta || createDuration(0), endDelta: this.validMutation.endDelta || createDuration(0), jsEvent: ev.origEvent, view: context.viewApi }));
                  context.emitter.trigger('eventChange', eventChangeArg);
              }
              else {
                  context.emitter.trigger('_noEventResize');
              }
              // reset all internal state
              this.draggingEventRange = null;
              this.relevantEvents = null;
              this.validMutation = null;
              // okay to keep eventInstance around. useful to set it in handlePointerDown
          };
          let { component } = settings;
          let dragging = this.dragging = new FeaturefulElementDragging(settings.el);
          dragging.pointer.selector = '.fc-event-resizer';
          dragging.touchScrollAllowed = false;
          dragging.autoScroller.isEnabled = component.context.options.dragScroll;
          let hitDragging = this.hitDragging = new HitDragging(this.dragging, interactionSettingsToStore(settings));
          hitDragging.emitter.on('pointerdown', this.handlePointerDown);
          hitDragging.emitter.on('dragstart', this.handleDragStart);
          hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
          hitDragging.emitter.on('dragend', this.handleDragEnd);
      }
      destroy() {
          this.dragging.destroy();
      }
      querySegEl(ev) {
          return elementClosest(ev.subjectEl, '.fc-event');
      }
  }
  function computeMutation(hit0, hit1, isFromStart, instanceRange) {
      let dateEnv = hit0.context.dateEnv;
      let date0 = hit0.dateSpan.range.start;
      let date1 = hit1.dateSpan.range.start;
      let delta = diffDates(date0, date1, dateEnv, hit0.largeUnit);
      if (isFromStart) {
          if (dateEnv.add(instanceRange.start, delta) < instanceRange.end) {
              return { startDelta: delta };
          }
      }
      else if (dateEnv.add(instanceRange.end, delta) > instanceRange.start) {
          return { endDelta: delta };
      }
      return null;
  }

  class UnselectAuto {
      constructor(context) {
          this.context = context;
          this.isRecentPointerDateSelect = false; // wish we could use a selector to detect date selection, but uses hit system
          this.matchesCancel = false;
          this.matchesEvent = false;
          this.onSelect = (selectInfo) => {
              if (selectInfo.jsEvent) {
                  this.isRecentPointerDateSelect = true;
              }
          };
          this.onDocumentPointerDown = (pev) => {
              let unselectCancel = this.context.options.unselectCancel;
              let downEl = getEventTargetViaRoot(pev.origEvent);
              this.matchesCancel = !!elementClosest(downEl, unselectCancel);
              this.matchesEvent = !!elementClosest(downEl, EventDragging.SELECTOR); // interaction started on an event?
          };
          this.onDocumentPointerUp = (pev) => {
              let { context } = this;
              let { documentPointer } = this;
              let calendarState = context.getCurrentData();
              // touch-scrolling should never unfocus any type of selection
              if (!documentPointer.wasTouchScroll) {
                  if (calendarState.dateSelection && // an existing date selection?
                      !this.isRecentPointerDateSelect // a new pointer-initiated date selection since last onDocumentPointerUp?
                  ) {
                      let unselectAuto = context.options.unselectAuto;
                      if (unselectAuto && (!unselectAuto || !this.matchesCancel)) {
                          context.calendarApi.unselect(pev);
                      }
                  }
                  if (calendarState.eventSelection && // an existing event selected?
                      !this.matchesEvent // interaction DIDN'T start on an event
                  ) {
                      context.dispatch({ type: 'UNSELECT_EVENT' });
                  }
              }
              this.isRecentPointerDateSelect = false;
          };
          let documentPointer = this.documentPointer = new PointerDragging(document);
          documentPointer.shouldIgnoreMove = true;
          documentPointer.shouldWatchScroll = false;
          documentPointer.emitter.on('pointerdown', this.onDocumentPointerDown);
          documentPointer.emitter.on('pointerup', this.onDocumentPointerUp);
          /*
          TODO: better way to know about whether there was a selection with the pointer
          */
          context.emitter.on('select', this.onSelect);
      }
      destroy() {
          this.context.emitter.off('select', this.onSelect);
          this.documentPointer.destroy();
      }
  }

  const OPTION_REFINERS$3 = {
      fixedMirrorParent: identity,
  };
  const LISTENER_REFINERS = {
      dateClick: identity,
      eventDragStart: identity,
      eventDragStop: identity,
      eventDrop: identity,
      eventResizeStart: identity,
      eventResizeStop: identity,
      eventResize: identity,
      drop: identity,
      eventReceive: identity,
      eventLeave: identity,
  };

  /*
  Given an already instantiated draggable object for one-or-more elements,
  Interprets any dragging as an attempt to drag an events that lives outside
  of a calendar onto a calendar.
  */
  class ExternalElementDragging {
      constructor(dragging, suppliedDragMeta) {
          this.receivingContext = null;
          this.droppableEvent = null; // will exist for all drags, even if create:false
          this.suppliedDragMeta = null;
          this.dragMeta = null;
          this.handleDragStart = (ev) => {
              this.dragMeta = this.buildDragMeta(ev.subjectEl);
          };
          this.handleHitUpdate = (hit, isFinal, ev) => {
              let { dragging } = this.hitDragging;
              let receivingContext = null;
              let droppableEvent = null;
              let isInvalid = false;
              let interaction = {
                  affectedEvents: createEmptyEventStore(),
                  mutatedEvents: createEmptyEventStore(),
                  isEvent: this.dragMeta.create,
              };
              if (hit) {
                  receivingContext = hit.context;
                  if (this.canDropElOnCalendar(ev.subjectEl, receivingContext)) {
                      droppableEvent = computeEventForDateSpan(hit.dateSpan, this.dragMeta, receivingContext);
                      interaction.mutatedEvents = eventTupleToStore(droppableEvent);
                      isInvalid = !isInteractionValid(interaction, hit.dateProfile, receivingContext);
                      if (isInvalid) {
                          interaction.mutatedEvents = createEmptyEventStore();
                          droppableEvent = null;
                      }
                  }
              }
              this.displayDrag(receivingContext, interaction);
              // show mirror if no already-rendered mirror element OR if we are shutting down the mirror (?)
              // TODO: wish we could somehow wait for dispatch to guarantee render
              dragging.setMirrorIsVisible(isFinal || !droppableEvent || !document.querySelector('.fc-event-mirror'));
              if (!isInvalid) {
                  enableCursor();
              }
              else {
                  disableCursor();
              }
              if (!isFinal) {
                  dragging.setMirrorNeedsRevert(!droppableEvent);
                  this.receivingContext = receivingContext;
                  this.droppableEvent = droppableEvent;
              }
          };
          this.handleDragEnd = (pev) => {
              let { receivingContext, droppableEvent } = this;
              this.clearDrag();
              if (receivingContext && droppableEvent) {
                  let finalHit = this.hitDragging.finalHit;
                  let finalView = finalHit.context.viewApi;
                  let dragMeta = this.dragMeta;
                  receivingContext.emitter.trigger('drop', Object.assign(Object.assign({}, buildDatePointApiWithContext(finalHit.dateSpan, receivingContext)), { draggedEl: pev.subjectEl, jsEvent: pev.origEvent, view: finalView }));
                  if (dragMeta.create) {
                      let addingEvents = eventTupleToStore(droppableEvent);
                      receivingContext.dispatch({
                          type: 'MERGE_EVENTS',
                          eventStore: addingEvents,
                      });
                      if (pev.isTouch) {
                          receivingContext.dispatch({
                              type: 'SELECT_EVENT',
                              eventInstanceId: droppableEvent.instance.instanceId,
                          });
                      }
                      // signal that an external event landed
                      receivingContext.emitter.trigger('eventReceive', {
                          event: new EventImpl(receivingContext, droppableEvent.def, droppableEvent.instance),
                          relatedEvents: [],
                          revert() {
                              receivingContext.dispatch({
                                  type: 'REMOVE_EVENTS',
                                  eventStore: addingEvents,
                              });
                          },
                          draggedEl: pev.subjectEl,
                          view: finalView,
                      });
                  }
              }
              this.receivingContext = null;
              this.droppableEvent = null;
          };
          let hitDragging = this.hitDragging = new HitDragging(dragging, interactionSettingsStore);
          hitDragging.requireInitial = false; // will start outside of a component
          hitDragging.emitter.on('dragstart', this.handleDragStart);
          hitDragging.emitter.on('hitupdate', this.handleHitUpdate);
          hitDragging.emitter.on('dragend', this.handleDragEnd);
          this.suppliedDragMeta = suppliedDragMeta;
      }
      buildDragMeta(subjectEl) {
          if (typeof this.suppliedDragMeta === 'object') {
              return parseDragMeta(this.suppliedDragMeta);
          }
          if (typeof this.suppliedDragMeta === 'function') {
              return parseDragMeta(this.suppliedDragMeta(subjectEl));
          }
          return getDragMetaFromEl(subjectEl);
      }
      displayDrag(nextContext, state) {
          let prevContext = this.receivingContext;
          if (prevContext && prevContext !== nextContext) {
              prevContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
          }
          if (nextContext) {
              nextContext.dispatch({ type: 'SET_EVENT_DRAG', state });
          }
      }
      clearDrag() {
          if (this.receivingContext) {
              this.receivingContext.dispatch({ type: 'UNSET_EVENT_DRAG' });
          }
      }
      canDropElOnCalendar(el, receivingContext) {
          let dropAccept = receivingContext.options.dropAccept;
          if (typeof dropAccept === 'function') {
              return dropAccept.call(receivingContext.calendarApi, el);
          }
          if (typeof dropAccept === 'string' && dropAccept) {
              return Boolean(elementMatches(el, dropAccept));
          }
          return true;
      }
  }
  // Utils for computing event store from the DragMeta
  // ----------------------------------------------------------------------------------------------------
  function computeEventForDateSpan(dateSpan, dragMeta, context) {
      let defProps = Object.assign({}, dragMeta.leftoverProps);
      for (let transform of context.pluginHooks.externalDefTransforms) {
          Object.assign(defProps, transform(dateSpan, dragMeta));
      }
      let { refined, extra } = refineEventDef(defProps, context);
      let def = parseEventDef(refined, extra, dragMeta.sourceId, dateSpan.allDay, context.options.forceEventDuration || Boolean(dragMeta.duration), // hasEnd
      context);
      let start = dateSpan.range.start;
      // only rely on time info if drop zone is all-day,
      // otherwise, we already know the time
      if (dateSpan.allDay && dragMeta.startTime) {
          start = context.dateEnv.add(start, dragMeta.startTime);
      }
      let end = dragMeta.duration ?
          context.dateEnv.add(start, dragMeta.duration) :
          getDefaultEventEnd(dateSpan.allDay, start, context);
      let instance = createEventInstance(def.defId, { start, end });
      return { def, instance };
  }
  // Utils for extracting data from element
  // ----------------------------------------------------------------------------------------------------
  function getDragMetaFromEl(el) {
      let str = getEmbeddedElData(el, 'event');
      let obj = str ?
          JSON.parse(str) :
          { create: false }; // if no embedded data, assume no event creation
      return parseDragMeta(obj);
  }
  config.dataAttrPrefix = '';
  function getEmbeddedElData(el, name) {
      let prefix = config.dataAttrPrefix;
      let prefixedName = (prefix ? prefix + '-' : '') + name;
      return el.getAttribute('data-' + prefixedName) || '';
  }

  /*
  Makes an element (that is *external* to any calendar) draggable.
  Can pass in data that determines how an event will be created when dropped onto a calendar.
  Leverages FullCalendar's internal drag-n-drop functionality WITHOUT a third-party drag system.
  */
  class ExternalDraggable {
      constructor(el, settings = {}) {
          this.handlePointerDown = (ev) => {
              let { dragging } = this;
              let { minDistance, longPressDelay } = this.settings;
              dragging.minDistance =
                  minDistance != null ?
                      minDistance :
                      (ev.isTouch ? 0 : BASE_OPTION_DEFAULTS.eventDragMinDistance);
              dragging.delay =
                  ev.isTouch ? // TODO: eventually read eventLongPressDelay instead vvv
                      (longPressDelay != null ? longPressDelay : BASE_OPTION_DEFAULTS.longPressDelay) :
                      0;
          };
          this.handleDragStart = (ev) => {
              if (ev.isTouch &&
                  this.dragging.delay &&
                  ev.subjectEl.classList.contains('fc-event')) {
                  this.dragging.mirror.getMirrorEl().classList.add('fc-event-selected');
              }
          };
          this.settings = settings;
          let dragging = this.dragging = new FeaturefulElementDragging(el);
          dragging.touchScrollAllowed = false;
          if (settings.itemSelector != null) {
              dragging.pointer.selector = settings.itemSelector;
          }
          if (settings.appendTo != null) {
              dragging.mirror.parentNode = settings.appendTo; // TODO: write tests
          }
          dragging.emitter.on('pointerdown', this.handlePointerDown);
          dragging.emitter.on('dragstart', this.handleDragStart);
          new ExternalElementDragging(dragging, settings.eventData); // eslint-disable-line no-new
      }
      destroy() {
          this.dragging.destroy();
      }
  }

  /*
  Detects when a *THIRD-PARTY* drag-n-drop system interacts with elements.
  The third-party system is responsible for drawing the visuals effects of the drag.
  This class simply monitors for pointer movements and fires events.
  It also has the ability to hide the moving element (the "mirror") during the drag.
  */
  class InferredElementDragging extends ElementDragging {
      constructor(containerEl) {
          super(containerEl);
          this.shouldIgnoreMove = false;
          this.mirrorSelector = '';
          this.currentMirrorEl = null;
          this.handlePointerDown = (ev) => {
              this.emitter.trigger('pointerdown', ev);
              if (!this.shouldIgnoreMove) {
                  // fire dragstart right away. does not support delay or min-distance
                  this.emitter.trigger('dragstart', ev);
              }
          };
          this.handlePointerMove = (ev) => {
              if (!this.shouldIgnoreMove) {
                  this.emitter.trigger('dragmove', ev);
              }
          };
          this.handlePointerUp = (ev) => {
              this.emitter.trigger('pointerup', ev);
              if (!this.shouldIgnoreMove) {
                  // fire dragend right away. does not support a revert animation
                  this.emitter.trigger('dragend', ev);
              }
          };
          let pointer = this.pointer = new PointerDragging(containerEl);
          pointer.emitter.on('pointerdown', this.handlePointerDown);
          pointer.emitter.on('pointermove', this.handlePointerMove);
          pointer.emitter.on('pointerup', this.handlePointerUp);
      }
      destroy() {
          this.pointer.destroy();
      }
      setIgnoreMove(bool) {
          this.shouldIgnoreMove = bool;
      }
      setMirrorIsVisible(bool) {
          if (bool) {
              // restore a previously hidden element.
              // use the reference in case the selector class has already been removed.
              if (this.currentMirrorEl) {
                  this.currentMirrorEl.style.visibility = '';
                  this.currentMirrorEl = null;
              }
          }
          else {
              let mirrorEl = this.mirrorSelector
                  // TODO: somehow query FullCalendars WITHIN shadow-roots
                  ? document.querySelector(this.mirrorSelector)
                  : null;
              if (mirrorEl) {
                  this.currentMirrorEl = mirrorEl;
                  mirrorEl.style.visibility = 'hidden';
              }
          }
      }
  }

  /*
  Bridges third-party drag-n-drop systems with FullCalendar.
  Must be instantiated and destroyed by caller.
  */
  class ThirdPartyDraggable {
      constructor(containerOrSettings, settings) {
          let containerEl = document;
          if (
          // wish we could just test instanceof EventTarget, but doesn't work in IE11
          containerOrSettings === document ||
              containerOrSettings instanceof Element) {
              containerEl = containerOrSettings;
              settings = settings || {};
          }
          else {
              settings = (containerOrSettings || {});
          }
          let dragging = this.dragging = new InferredElementDragging(containerEl);
          if (typeof settings.itemSelector === 'string') {
              dragging.pointer.selector = settings.itemSelector;
          }
          else if (containerEl === document) {
              dragging.pointer.selector = '[data-event]';
          }
          if (typeof settings.mirrorSelector === 'string') {
              dragging.mirrorSelector = settings.mirrorSelector;
          }
          let externalDragging = new ExternalElementDragging(dragging, settings.eventData);
          // The hit-detection system requires that the dnd-mirror-element be pointer-events:none,
          // but this can't be guaranteed for third-party draggables, so disable
          externalDragging.hitDragging.disablePointCheck = true;
      }
      destroy() {
          this.dragging.destroy();
      }
  }

  var index$4 = createPlugin({
      name: '@fullcalendar/interaction',
      componentInteractions: [DateClicking, DateSelecting, EventDragging, EventResizing],
      calendarInteractions: [UnselectAuto],
      elementDraggingImpl: FeaturefulElementDragging,
      optionRefiners: OPTION_REFINERS$3,
      listenerRefiners: LISTENER_REFINERS,
  });

  var css_248z$3 = ":root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc-daygrid-cell.fc-day-today{background-color:var(--fc-today-bg-color)}.fc-daygrid-row-spacious .fc-daygrid-cell-inner{min-height:3em}.fc-daygrid-cell-header{display:flex;flex-direction:row-reverse}.fc-day-other .fc-daygrid-cell-header{opacity:.3}.fc-daygrid-cell-number{padding:4px;position:relative;z-index:4}.fc-daygrid-month-start{font-size:1.1em;font-weight:700}.fc-daygrid-cell-footer{align-items:flex-start;display:flex;flex-direction:column;font-size:.85em;margin:0 2px}.fc-daygrid-row-spacious .fc-daygrid-cell-footer{margin-bottom:1em!important}.fc-daygrid-row-compact .fc-daygrid-cell-footer{align-items:stretch}.fc-daygrid-more-link{border-radius:3px;cursor:pointer;line-height:1;margin-top:1px;max-width:100%;overflow:hidden;padding:2px;position:relative;white-space:nowrap;z-index:4}.fc-daygrid-more-link:hover{background-color:rgba(0,0,0,.1)}.fc-daygrid-row-compact .fc-daygrid-more-link{border:1px solid var(--fc-event-border-color);padding:1px}.fc-daygrid-cell .fc-non-business{z-index:1}.fc-daygrid-cell .fc-bg-event{z-index:2}.fc-daygrid-cell .fc-highlight{z-index:3}.fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);margin-top:1px;z-index:6}.fc-daygrid-event.fc-event-mirror{z-index:7}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;direction:row;display:flex;padding:2px 0;position:relative}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-daygrid-dot-event .fc-event-time,.fc-daygrid-dot-event .fc-event-title{overflow:hidden;white-space:nowrap}.fc-daygrid-dot-event .fc-event-title{flex-basis:0;flex-grow:1;font-weight:700;min-width:0}";
  injectStyles(css_248z$3);

  class DayTableSlicer extends Slicer {
      constructor() {
          super(...arguments);
          this.forceDayIfListItem = true;
      }
      sliceRange(dateRange, dayTableModel) {
          return dayTableModel.sliceRange(dateRange);
      }
  }

  class TableDateProfileGenerator extends DateProfileGenerator {
      // Computes the date range that will be rendered
      buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay) {
          let renderRange = super.buildRenderRange(currentRange, currentRangeUnit, isRangeAllDay);
          let { props } = this;
          return buildDayTableRenderRange({
              currentRange: renderRange,
              snapToWeek: /^(year|month)$/.test(currentRangeUnit),
              fixedWeekCount: props.fixedWeekCount,
              dateEnv: props.dateEnv,
          });
      }
  }
  function buildDayTableRenderRange(props) {
      let { dateEnv, currentRange } = props;
      let { start, end } = currentRange;
      let endOfWeek;
      // year and month views should be aligned with weeks. this is already done for week
      if (props.snapToWeek) {
          start = dateEnv.startOfWeek(start);
          // make end-of-week if not already
          endOfWeek = dateEnv.startOfWeek(end);
          if (endOfWeek.valueOf() !== end.valueOf()) {
              end = addWeeks(endOfWeek, 1);
          }
      }
      // ensure 6 weeks
      if (props.fixedWeekCount) {
          // TODO: instead of these date-math gymnastics (for multimonth view),
          // compute dateprofiles of all months, then use start of first and end of last.
          let lastMonthRenderStart = dateEnv.startOfWeek(dateEnv.startOfMonth(addDays(currentRange.end, -1)));
          let rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
          diffWeeks(lastMonthRenderStart, end));
          end = addWeeks(end, 6 - rowCnt);
      }
      return { start, end };
  }

  function renderInner(renderProps) {
      return renderProps.text;
  }
  function buildDayTableModel(dateProfile, dateProfileGenerator) {
      let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
      return new DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
  }
  function computeColWidth(colCnt, colMinWidth, viewportWidth) {
      if (viewportWidth == null) {
          return [undefined, undefined];
      }
      const colTempWidth = viewportWidth / colCnt;
      if (colTempWidth < colMinWidth) {
          return [colMinWidth * colCnt, colMinWidth];
      }
      return [viewportWidth, undefined];
  }
  function buildHeaderTiers(dates, datesRepDistinctDays) {
      return [
          datesRepDistinctDays
              ? dates.map((date) => ({ colSpan: 1, date }))
              : dates.map((date) => ({ colSpan: 1, dow: date.getUTCDay() }))
      ];
  }
  // Positioning
  // -------------------------------------------------------------------------------------------------
  function computeTopFromDate(date, cellRows, rowHeightMap, adjust = 0) {
      let top = 0;
      for (const cells of cellRows) {
          const start = cells[0].date;
          const end = cells[cells.length - 1].date;
          const key = start.toISOString();
          if (date >= start && date <= end) {
              return top;
          }
          const rowHeight = rowHeightMap.get(key);
          if (rowHeight == null) {
              return; // denote unknown
          }
          top += rowHeight + adjust;
      }
      return top;
  }
  function computeHorizontalsFromSeg(seg, colWidth, colCnt, isRtl) {
      let left;
      let right;
      let width;
      if (colWidth != null) {
          width = (seg.lastCol - seg.firstCol + 1) * colWidth;
          if (isRtl) {
              right = seg.firstCol * colWidth;
          }
          else {
              left = seg.firstCol * colWidth;
          }
      }
      else {
          const colWidthFrac = 1 / colCnt;
          width = fracToCssDim((seg.lastCol - seg.firstCol + 1) * colWidthFrac);
          if (isRtl) {
              right = fracToCssDim(seg.firstCol * colWidthFrac);
          }
          else {
              left = fracToCssDim(seg.firstCol * colWidthFrac);
          }
      }
      return { left, right, width };
  }
  function computeColFromPosition(positionLeft, elWidth, colWidth, colCnt, isRtl) {
      const realColWidth = colWidth != null ? colWidth : elWidth / colCnt;
      const colFromLeft = Math.floor(positionLeft / realColWidth);
      const col = isRtl ? (colCnt - colFromLeft - 1) : colFromLeft;
      const left = colFromLeft * realColWidth;
      const right = left + realColWidth;
      return { col, left, right };
  }
  function computeRowFromPosition(positionTop, cellRows, rowHeightMap) {
      let row = 0;
      let top = 0;
      let bottom = 0;
      for (const cells of cellRows) {
          const key = cells[0].key;
          top = bottom;
          bottom = top + rowHeightMap.get(key);
          if (positionTop < bottom) {
              break;
          }
          row++;
      }
      return { row, top, bottom };
  }
  // Hit Element
  // -------------------------------------------------------------------------------------------------
  function getRowEl(rootEl, row) {
      return rootEl.querySelectorAll(':scope > [role=row]')[row];
  }
  function getCellEl(rowEl, col) {
      return rowEl.querySelectorAll(':scope > [role=gridcell]')[col];
  }

  class DateHeaderCell extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerElRef = m$1();
      }
      render() {
          let { props, context } = this;
          let { dateProfile, date, extraRenderProps, extraDataAttrs } = props;
          let { dateEnv, options, theme, viewApi } = context;
          let dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
          let text = dateEnv.format(date, props.dayHeaderFormat);
          let navLinkAttrs = (!dayMeta.isDisabled && props.navLink)
              ? buildNavLinkAttrs(context, date)
              : {};
          let renderProps = Object.assign(Object.assign(Object.assign({ date: dateEnv.toDate(date), view: viewApi }, extraRenderProps), { text }), dayMeta);
          return (_(ContentContainer, { elTag: 'div', elClasses: [
                  ...getDayClassNames(dayMeta),
                  ...(props.extraClassNames || []),
                  'fc-header-cell',
                  'fc-cell',
                  props.colWidth != null ? '' : 'fc-liquid',
                  'fc-flex-column',
                  'fc-align-center',
              ], elAttrs: Object.assign({ 'data-date': !dayMeta.isDisabled ? formatDayString(date) : undefined }, extraDataAttrs), elStyle: {
                  width: props.colWidth != null // TODO: DRY
                      ? props.colWidth * (props.colSpan || 1)
                      : undefined,
              }, renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContainer) => (_("div", { ref: this.innerElRef, className: [
                  'fc-flex-column',
                  props.isSticky ? 'fc-sticky-x' : '',
              ].join(' ') }, !dayMeta.isDisabled && (_(InnerContainer, { elTag: "a", elAttrs: navLinkAttrs, elClasses: [
                  'fc-cell-inner',
                  'fc-padding-sm',
              ] }))))));
      }
      componentDidMount() {
          const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
          // TODO: only attach this if refs props present
          this.disconectInnerHeight = watchHeight(innerEl, (height) => {
              setRef(this.props.innerHeightRef, height);
          });
      }
      componentWillUnmount() {
          this.disconectInnerHeight();
          setRef(this.props.innerHeightRef, null);
      }
  }

  function splitSegsByRow(segs, rowCnt) {
      const byRow = [];
      for (let row = 0; row < rowCnt; row++) {
          byRow[row] = [];
      }
      for (const seg of segs) {
          byRow[seg.row].push(seg);
      }
      return byRow;
  }
  function splitInteractionByRow(ui, rowCnt) {
      const byRow = [];
      if (!ui) {
          for (let row = 0; row < rowCnt; row++) {
              byRow[row] = null;
          }
      }
      else {
          for (let row = 0; row < rowCnt; row++) {
              byRow[row] = {
                  affectedInstances: ui.affectedInstances,
                  isEvent: ui.isEvent,
                  segs: [],
              };
          }
          for (const seg of ui.segs) {
              byRow[seg.row].segs.push(seg);
          }
      }
      return byRow;
  }
  function splitSegsByCol$1(segs, colCnt) {
      let byCol = [];
      for (let col = 0; col < colCnt; col++) {
          byCol.push([]);
      }
      for (let seg of segs) {
          for (let col = seg.firstCol; col <= seg.lastCol; col++) {
              if (seg.firstCol !== col) {
                  seg = Object.assign(Object.assign({}, seg), { firstCol: col, lastCol: col, isStart: false, isEnd: seg.isEnd && seg.lastCol === col, isStandin: true });
              }
              byCol[col].push(seg);
          }
      }
      return byCol;
  }

  const DEFAULT_TABLE_EVENT_TIME_FORMAT = createFormatter({
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: true,
      meridiem: 'narrow',
  });
  function hasListItemDisplay(seg) {
      let { display } = seg.eventRange.ui;
      return display === 'list-item' || (display === 'auto' &&
          !seg.eventRange.def.allDay &&
          seg.firstCol === seg.lastCol && // can't be multi-day
          seg.isStart && // "
          seg.isEnd // "
      );
  }

  class DayGridBlockEvent extends BaseComponent {
      render() {
          let { props } = this;
          return (_(StandardEvent, Object.assign({}, props, { elClasses: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.eventRange.def.allDay })));
      }
  }

  class DayGridListEvent extends BaseComponent {
      render() {
          let { props, context } = this;
          let { options } = context;
          let { eventRange } = props;
          let timeFormat = options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
          let timeText = buildEventRangeTimeText(eventRange, timeFormat, context, true, props.defaultDisplayEventEnd);
          return (_(EventContainer, Object.assign({}, props, { elTag: "a", elClasses: ['fc-daygrid-event', 'fc-daygrid-dot-event'], elAttrs: getEventRangeAnchorAttrs(eventRange, context), defaultGenerator: renderInnerContent$2, timeText: timeText, isResizing: false, isDateSelecting: false })));
      }
  }
  function renderInnerContent$2(renderProps) {
      return (_(k$1, null,
          _("div", { className: "fc-daygrid-event-dot", style: { borderColor: renderProps.borderColor || renderProps.backgroundColor } }),
          renderProps.timeText && (_("div", { className: "fc-event-time" }, renderProps.timeText)),
          _("div", { className: "fc-event-title" }, renderProps.event.title || _(k$1, null, "\u00A0"))));
  }

  class DayGridMoreLink extends BaseComponent {
      render() {
          let { props } = this;
          return (_(MoreLinkContainer, { elClasses: ['fc-daygrid-more-link'], dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, segs: props.segs, hiddenSegs: props.hiddenSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: () => {
                  let forcedInvisibleMap = // TODO: more convenient/DRY
                   (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                      (props.eventResize ? props.eventResize.affectedInstances : null) ||
                      {};
                  return (_(k$1, null, props.segs.map((seg) => {
                      let { eventRange } = seg;
                      let instanceId = eventRange.instance.instanceId;
                      return (_("div", { key: instanceId, style: {
                              visibility: forcedInvisibleMap[instanceId] ? 'hidden' : '',
                          } }, hasListItemDisplay(seg) ? (_(DayGridListEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getEventRangeMeta(eventRange, props.todayRange)))) : (_(DayGridBlockEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, getEventRangeMeta(eventRange, props.todayRange))))));
                  })));
              } }));
      }
  }

  class DayGridCell extends DateComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerElRef = m$1();
          this.headerWrapElRef = m$1();
      }
      render() {
          let { props, context } = this;
          let { options, dateEnv } = context;
          // TODO: memoize this
          const isMonthStart = props.showDayNumber &&
              shouldDisplayMonthStart(props.date, props.dateProfile.currentRange, dateEnv);
          return (_(DayCellContainer, { elTag: "div", elClasses: [
                  'fc-daygrid-cell',
                  'fc-cell',
                  props.width != null ? '' : 'fc-liquid',
                  'fc-flex-column',
                  ...(props.extraClassNames || []),
              ], elAttrs: Object.assign(Object.assign({}, props.extraDataAttrs), { role: 'gridcell' }), elStyle: {
                  width: props.width
              }, extraRenderProps: props.extraRenderProps, defaultGenerator: renderTopInner, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, isMonthStart: isMonthStart }, (InnerContent, renderProps) => (_("div", { ref: this.innerElRef, className: [
                  'fc-daygrid-cell-inner',
                  props.fgLiquidHeight ? 'fc-liquid' : ''
              ].join(' ') },
              _("div", { ref: this.headerWrapElRef, className: "fc-flex-column" }, !renderProps.isDisabled && (props.showDayNumber || hasCustomDayCellContent(options)) && (_("div", { className: "fc-daygrid-cell-header" },
                  _(InnerContent, { elTag: "a", elClasses: [
                          'fc-daygrid-cell-number',
                          isMonthStart && 'fc-daygrid-month-start',
                      ], elAttrs: buildNavLinkAttrs(context, props.date) })))),
              _("div", { className: "fc-daygrid-cell-main", style: {
                      height: props.fgLiquidHeight ? '' : props.fgHeight
                  } }, props.fg),
              _("div", { className: "fc-daygrid-cell-footer", style: props.fgLiquidHeight
                      ? { position: 'relative', top: props.fgHeight }
                      : {} },
                  _(DayGridMoreLink, { allDayDate: props.date, segs: props.segs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.innerElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange })),
              props.bg))));
      }
      componentDidMount() {
          const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
          const headerWrapEl = this.headerWrapElRef.current; // "
          // TODO: only attach this if refs props present
          this.detachInnerHeight = watchHeight(innerEl, (height) => {
              setRef(this.props.innerHeightRef, height);
          });
          this.detachHeaderHeight = watchHeight(headerWrapEl, (height) => {
              setRef(this.props.headerHeightRef, height);
          });
      }
      componentWillUnmount() {
          this.detachInnerHeight();
          this.detachHeaderHeight();
          setRef(this.props.innerHeightRef, null);
          setRef(this.props.headerHeightRef, null);
      }
  }
  // Utils
  // -------------------------------------------------------------------------------------------------
  function renderTopInner(props) {
      return props.dayNumberText || _(k$1, null, "\u00A0");
  }
  function shouldDisplayMonthStart(date, currentRange, dateEnv) {
      const { start: currentStart, end: currentEnd } = currentRange;
      const currentEndIncl = addMs(currentEnd, -1);
      const currentFirstYear = dateEnv.getYear(currentStart);
      const currentFirstMonth = dateEnv.getMonth(currentStart);
      const currentLastYear = dateEnv.getYear(currentEndIncl);
      const currentLastMonth = dateEnv.getMonth(currentEndIncl);
      // spans more than one month?
      return !(currentFirstYear === currentLastYear && currentFirstMonth === currentLastMonth) &&
          Boolean(
          // first date in current view?
          date.valueOf() === currentStart.valueOf() ||
              // a month-start that's within the current range?
              (dateEnv.getDay(date) === 1 && date.valueOf() < currentEnd.valueOf()));
  }

  /*
  Unique per-START-column, good for cataloging by top
  */
  function getSegStartId(seg) {
      return seg.eventRange.instance.instanceId + ':' + seg.firstCol;
  }
  /*
  Unique per-START-and-END-column, good for cataloging by width/height
  */
  function getSegSpanId(seg) {
      return getSegStartId(seg) + ':' + seg.lastCol;
  }
  function computeFgSegVerticals$1(segs, segHeightMap, // keyed by segSpanId
  cells, topOrigin, maxHeight, strictOrder, dayMaxEvents, dayMaxEventRows) {
      // initialize column-based arrays
      const colCnt = cells.length;
      const hiddenSegsByCol = [];
      const heightsByCol = [];
      for (let col = 0; col < colCnt; col++) {
          hiddenSegsByCol.push([]);
          heightsByCol.push(0);
      }
      // create entries to be given to DayGridSegHierarchy
      const segEntries = segs.map((seg, index) => ({
          index: index,
          seg,
          span: {
              start: seg.firstCol,
              end: seg.lastCol + 1,
          },
      }));
      // configure hierarchy position-generator
      let hierarchy = new DayGridSegHierarchy((segEntry) => (segHeightMap.get(getSegSpanId(segs[segEntry.index]))));
      hierarchy.allowReslicing = false;
      hierarchy.strictOrder = strictOrder;
      if (dayMaxEvents === true || dayMaxEventRows === true) {
          hierarchy.maxCoord = maxHeight;
          hierarchy.hiddenConsumes = true;
      }
      else if (typeof dayMaxEvents === 'number') {
          hierarchy.maxStackCnt = dayMaxEvents;
      }
      else if (typeof dayMaxEventRows === 'number') {
          hierarchy.maxStackCnt = dayMaxEventRows;
          hierarchy.hiddenConsumes = true;
      }
      // compile segTops & heightsByCol
      const hiddenSegEntries = hierarchy.addSegs(segEntries);
      const segRects = hierarchy.toRects();
      const segTops = {};
      for (const segRect of segRects) {
          const seg = segs[segRect.index];
          segTops[getSegStartId(seg)] = topOrigin + segRect.levelCoord;
          let { start: col, end: endCol } = segRect.span;
          for (; col < endCol; col++) {
              heightsByCol[col] = Math.max(heightsByCol[col], segRect.levelCoord + segRect.thickness);
          }
      }
      // compile # of invisible segs per-column
      for (const hiddenSegEntry of hiddenSegEntries) {
          const { span } = hiddenSegEntry;
          const hiddenSeg = segs[hiddenSegEntry.index];
          for (let col = span.start; col < span.end; col++) {
              hiddenSegsByCol[col].push(hiddenSeg);
          }
      }
      return [segTops, heightsByCol, hiddenSegsByCol];
  }
  // DayGridSegHierarchy
  // -------------------------------------------------------------------------------------------------
  class DayGridSegHierarchy extends SegHierarchy {
      constructor() {
          super(...arguments);
          // config
          this.hiddenConsumes = false;
          // allows us to keep hidden entries in the hierarchy so they take up space
          this.forceHidden = {};
      }
      addSegs(segInputs) {
          const hiddenSegs = super.addSegs(segInputs);
          const { entriesByLevel } = this;
          const excludeHidden = (entry) => !this.forceHidden[buildEntryKey(entry)];
          // remove the forced-hidden segs
          for (let level = 0; level < entriesByLevel.length; level += 1) {
              entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
          }
          return hiddenSegs;
      }
      handleInvalidInsertion(insertion, entry, hiddenEntries) {
          const { entriesByLevel, forceHidden } = this;
          const { touchingEntry, touchingLevel, touchingLateral } = insertion;
          // the entry that the new insertion is touching must be hidden
          if (this.hiddenConsumes && touchingEntry) {
              const touchingEntryId = buildEntryKey(touchingEntry);
              if (!forceHidden[touchingEntryId]) {
                  if (this.allowReslicing) {
                      // split up the touchingEntry, reinsert it
                      const hiddenEntry = Object.assign(Object.assign({}, touchingEntry), { span: intersectSpans(touchingEntry.span, entry.span) });
                      // reinsert the area that turned into a "more" link (so no other entries try to
                      // occupy the space) but mark it forced-hidden
                      const hiddenEntryId = buildEntryKey(hiddenEntry);
                      forceHidden[hiddenEntryId] = true;
                      entriesByLevel[touchingLevel][touchingLateral] = hiddenEntry;
                      hiddenEntries.push(hiddenEntry);
                      this.splitEntry(touchingEntry, entry, hiddenEntries);
                  }
                  else {
                      forceHidden[touchingEntryId] = true;
                      hiddenEntries.push(touchingEntry);
                  }
              }
          }
          // will try to reslice...
          super.handleInvalidInsertion(insertion, entry, hiddenEntries);
      }
  }

  class DayGridEventHarness extends b {
      constructor() {
          super(...arguments);
          // ref
          this.rootElRef = m$1();
      }
      render() {
          const { props } = this;
          return (_("div", { className: "fc-abs", style: props.style, ref: this.rootElRef }, props.children));
      }
      componentDidMount() {
          const rootEl = this.rootElRef.current; // TODO: make dynamic with useEffect
          this.detachHeight = watchHeight(rootEl, (height) => {
              setRef(this.props.heightRef, height);
          });
      }
      componentWillUnmount() {
          this.detachHeight();
          setRef(this.props.heightRef, null);
      }
  }

  const DEFAULT_WEEK_NUM_FORMAT$1 = createFormatter({ week: 'narrow' });
  const COMPACT_CELL_WIDTH = 80;
  class DayGridRow extends BaseComponent {
      constructor() {
          super(...arguments);
          this.cellInnerHeightRefMap = new RefMap(() => {
              afterSize(this.handleInnerHeights);
          });
          this.cellHeaderHeightRefMap = new RefMap(() => {
              afterSize(this.handleHeaderHeights);
          });
          this.segHeightRefMap = new RefMap(() => {
              afterSize(this.handleSegHeights);
          });
          this.handleRootEl = (rootEl) => {
              this.rootEl = rootEl;
              setRef(this.props.rootElRef, rootEl);
          };
          // Sizing
          // -----------------------------------------------------------------------------------------------
          this.handleHeaderHeights = () => {
              const cellHeaderHeightMap = this.cellHeaderHeightRefMap.current;
              let max = 0;
              for (const height of cellHeaderHeightMap.values()) {
                  max = Math.max(max, height);
              }
              if (this.state.headerHeight !== max) {
                  this.setState({ headerHeight: max });
              }
          };
          this.handleInnerHeights = () => {
              const { props } = this;
              const fgLiquidHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
              const cellInnerHeightMap = this.cellInnerHeightRefMap.current;
              let max = 0;
              for (const height of cellInnerHeightMap.values()) {
                  max = Math.max(max, height);
              }
              if (fgLiquidHeight) {
                  if (this.state.innerHeight !== max) {
                      this.setState({ innerHeight: max }); // will trigger event rerender
                  }
              }
              else {
                  setRef(props.innerHeightRef, max);
              }
          };
          this.handleSegHeights = () => {
              this.setState({ segHeightRev: this.segHeightRefMap.rev }); // will trigger event rerender
          };
      }
      render() {
          const { props, state, context, cellInnerHeightRefMap, cellHeaderHeightRefMap } = this;
          const { cells } = props;
          const { options } = context;
          const weekDate = props.cells[0].date;
          const colCnt = props.cells.length;
          const fgLiquidHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
          // TODO: memoize? sort all types of segs?
          const fgEventSegs = sortEventSegs(props.fgEventSegs, options.eventOrder);
          // TODO: memoize?
          const fgEventSegsByCol = splitSegsByCol$1(fgEventSegs, colCnt);
          const bgEventSegsByCol = splitSegsByCol$1(props.bgEventSegs, colCnt);
          const businessHoursByCol = splitSegsByCol$1(props.businessHourSegs, colCnt);
          const highlightSegsByCol = splitSegsByCol$1(this.getHighlightSegs(), colCnt); // TODO: doesn't need standins
          const mirrorSegsByCol = splitSegsByCol$1(this.getMirrorSegs(), colCnt); // TODO: doesn't need standins
          // TODO: memoize?
          const [segTops, heightsByCol, hiddenSegsByCol] = computeFgSegVerticals$1(fgEventSegs, this.segHeightRefMap.current, cells, state.headerHeight, (fgLiquidHeight && state.innerHeight != null && state.headerHeight != null)
              ? state.innerHeight - state.headerHeight
              : undefined, options.eventOrderStrict, props.dayMaxEvents, props.dayMaxEventRows);
          const forcedInvisibleMap = // TODO: more convenient/DRY
           (props.eventDrag && props.eventDrag.affectedInstances) ||
              (props.eventResize && props.eventResize.affectedInstances) ||
              {};
          return (_("div", { role: props.cellGroup ? undefined : 'row', className: [
                  'fc-daygrid-row',
                  props.forceVSpacing
                      ? 'fc-daygrid-row-spacious'
                      : props.compact
                          ? 'fc-daygrid-row-compact'
                          : '',
                  props.cellGroup ? 'fc-flex-row' : 'fc-row',
                  'fc-rel',
                  props.className || '',
              ].join(' '), style: {
                  minHeight: props.minHeight,
              }, ref: this.handleRootEl },
              props.cells.map((cell, col) => {
                  const normalFgNodes = this.renderFgSegs(fgEventSegsByCol[col], segTops, props.todayRange, forcedInvisibleMap);
                  const mirrorFgNodes = this.renderFgSegs(mirrorSegsByCol[col], segTops, props.todayRange, {}, // forcedInvisibleMap
                  Boolean(props.eventDrag), Boolean(props.eventResize), false);
                  return (_(DayGridCell, { key: cell.key, dateProfile: props.dateProfile, todayRange: props.todayRange, date: cell.date, showDayNumber: props.showDayNumbers, 
                      // content
                      segs: fgEventSegsByCol[col], hiddenSegs: hiddenSegsByCol[col], fgLiquidHeight: fgLiquidHeight, fg: (_(k$1, null,
                          _(k$1, null, normalFgNodes),
                          _(k$1, null, mirrorFgNodes))), bg: (_(k$1, null,
                          this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                          this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                          this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))), eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, 
                      // render hooks
                      extraRenderProps: cell.extraRenderProps, extraDateSpan: cell.extraDateSpan, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, 
                      // dimensions
                      fgHeight: heightsByCol[col], width: props.colWidth, 
                      // refs
                      innerHeightRef: cellInnerHeightRefMap.createRef(cell.key), headerHeightRef: cellHeaderHeightRefMap.createRef(cell.key) }));
              }),
              props.showWeekNumbers && (_(WeekNumberContainer, { elTag: "a", elClasses: ['fc-daygrid-week-number'], elAttrs: buildNavLinkAttrs(context, weekDate, 'week'), date: weekDate, defaultFormat: DEFAULT_WEEK_NUM_FORMAT$1 }))));
      }
      renderFgSegs(segs, segTops, todayRange, forcedInvisibleMap, isDragging, isResizing, isDateSelecting) {
          const { props, context, segHeightRefMap } = this;
          const { isRtl } = context;
          const { colWidth, eventSelection } = props;
          const colCnt = props.cells.length;
          const defaultDisplayEventEnd = props.cells.length === 1;
          const isMirror = isDragging || isResizing || isDateSelecting;
          const nodes = [];
          for (const seg of segs) {
              const { left, right, width } = computeHorizontalsFromSeg(seg, colWidth, colCnt, isRtl);
              // TODO: optimize ID creation? all related
              const { eventRange } = seg;
              const { instanceId } = eventRange.instance;
              const segSpanId = getSegSpanId(seg);
              const segStartId = getSegStartId(seg);
              const top = segTops[segStartId];
              const isVisible = !seg.isStandin &&
                  top != null &&
                  !forcedInvisibleMap[instanceId];
              /*
              TODO: is this comment still relevant? vvvvvvvv
              known bug: events that are force to be list-item but span multiple days still take up space in later columns
              todo: in print view, for multi-day events, don't display title within non-start/end segs
              */
              nodes.push(_(DayGridEventHarness, { key: segSpanId, style: {
                      visibility: isVisible ? '' : 'hidden',
                      top,
                      left,
                      right,
                      width,
                  }, heightRef: (isMirror || seg.isStandin)
                      ? null
                      : segHeightRefMap.createRef(segSpanId) }, hasListItemDisplay(seg) ? (_(DayGridListEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getEventRangeMeta(eventRange, todayRange)))) : (_(DayGridBlockEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, getEventRangeMeta(eventRange, todayRange))))));
          }
          return nodes;
      }
      renderFillSegs(segs, fillType) {
          const { props, context } = this;
          const { isRtl } = context;
          const { todayRange, colWidth } = props;
          const colCnt = props.cells.length;
          const nodes = [];
          for (const seg of segs) {
              const { left, right, width } = computeHorizontalsFromSeg(seg, colWidth, colCnt, isRtl);
              const isVisible = !seg.isStandin;
              nodes.push(_("div", { key: buildEventRangeKey(seg.eventRange), className: "fc-fill-y", style: {
                      visibility: isVisible ? '' : 'hidden',
                      left,
                      right,
                      width,
                  } }, fillType === 'bg-event' ?
                  _(BgEvent, Object.assign({ eventRange: seg.eventRange, isStart: seg.isStart, isEnd: seg.isEnd }, getEventRangeMeta(seg.eventRange, todayRange))) : (renderFill(fillType))));
          }
          return _(k$1, {}, ...nodes);
      }
      // Sizing
      // -----------------------------------------------------------------------------------------------
      componentDidMount() {
          const { rootEl } = this; // TODO: make dynamic with useEffect
          this.disconnectHeight = watchHeight(rootEl, (contentHeight) => {
              setRef(this.props.heightRef, contentHeight);
          });
      }
      componentWillUnmount() {
          this.disconnectHeight();
          setRef(this.props.heightRef, null);
          setRef(this.props.innerHeightRef, null);
      }
      // Utils
      // -----------------------------------------------------------------------------------------------
      getMirrorSegs() {
          let { props } = this;
          if (props.eventResize && props.eventResize.segs.length) { // messy check
              return props.eventResize.segs;
          }
          return [];
      }
      getHighlightSegs() {
          let { props } = this;
          if (props.eventDrag && props.eventDrag.segs.length) { // messy check
              return props.eventDrag.segs;
          }
          if (props.eventResize && props.eventResize.segs.length) { // messy check
              return props.eventResize.segs;
          }
          return props.dateSelectionSegs;
      }
  }

  class DayGridRows extends DateComponent {
      constructor() {
          super(...arguments);
          // memo
          this.splitBusinessHourSegs = memoize(splitSegsByRow);
          this.splitBgEventSegs = memoize(splitSegsByRow);
          this.splitFgEventSegs = memoize(splitSegsByRow);
          this.splitDateSelectionSegs = memoize(splitSegsByRow);
          this.splitEventDrag = memoize(splitInteractionByRow);
          this.splitEventResize = memoize(splitInteractionByRow);
          // internal
          this.rowHeightRefMap = new RefMap((height, key) => {
              // HACKy way of syncing RefMap results with prop
              const { rowHeightRefMap } = this.props;
              if (rowHeightRefMap) {
                  rowHeightRefMap.handleValue(height, key);
              }
          });
          this.handleRootEl = (rootEl) => {
              this.rootEl = rootEl;
              if (rootEl) {
                  this.context.registerInteractiveComponent(this, {
                      el: rootEl,
                      isHitComboAllowed: this.props.isHitComboAllowed,
                  });
              }
              else {
                  this.context.unregisterInteractiveComponent(this);
              }
          };
      }
      render() {
          let { props, state, context, rowHeightRefMap } = this;
          let { options } = context;
          let rowCnt = props.cellRows.length;
          let fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
          let bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
          let businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
          let dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
          let eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
          let eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
          // whether the ROW should expand in height
          // (not to be confused with whether the fg events within the row should be molded by height of row)
          let isHeightAuto = getIsHeightAuto(options);
          // maintain at least aspectRatio for cells?
          let rowMinHeight = (state.width != null && (rowCnt >= 7 || // TODO: better way to infer if across single-month boundary
              isHeightAuto)) ? state.width / context.options.aspectRatio / 6 // okay to hardcode 6 (weeks) ?
              : null;
          return (_("div", { className: 'fc-grow fc-flex-column', style: { width: props.width }, ref: this.handleRootEl }, props.cellRows.map((cells, row) => (_(DayGridRow, { key: cells[0].key, dateProfile: props.dateProfile, todayRange: props.todayRange, cells: cells, showDayNumbers: rowCnt > 1, showWeekNumbers: options.weekNumbers, forPrint: props.forPrint, compact: state.width != null && (state.width / cells.length) < COMPACT_CELL_WIDTH, 
              // if not auto-height, distribute height of container somewhat evently to rows
              // (treat all as zero, distribute height, then ensure min-heights -- the inner content height)
              className: isHeightAuto ? '' : 'fc-grow fc-basis0', 
              // content
              fgEventSegs: fgEventSegsByRow[row], bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* HACK */, businessHourSegs: businessHourSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventSelection: props.eventSelection, eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, 
              // dimensions
              colWidth: props.colWidth, minHeight: rowMinHeight, 
              // refs
              heightRef: rowHeightRefMap.createRef(cells[0].key) })))));
      }
      componentDidMount() {
          this.detachWidth = watchWidth(this.rootEl, (width) => {
              this.setState({ width });
          });
      }
      componentWillUnmount() {
          this.detachWidth();
      }
      // Hit System
      // -----------------------------------------------------------------------------------------------
      queryHit(positionLeft, positionTop, elWidth) {
          const { props, context } = this;
          const colCnt = props.cellRows[0].length;
          const { col, left, right } = computeColFromPosition(positionLeft, elWidth, props.colWidth, colCnt, context.isRtl);
          const { row, top, bottom } = computeRowFromPosition(positionTop, props.cellRows, this.rowHeightRefMap.current);
          const cell = props.cellRows[row][col];
          const cellStartDate = cell.date;
          const cellEndDate = addDays(cellStartDate, 1);
          return {
              dateProfile: props.dateProfile,
              dateSpan: Object.assign({ range: {
                      start: cellStartDate,
                      end: cellEndDate,
                  }, allDay: true }, cell.extraDateSpan),
              // HACK. TODO: This is expensive to do every hit-query
              dayEl: getCellEl(getRowEl(this.rootEl, row), col),
              rect: {
                  left,
                  right,
                  top,
                  bottom,
              },
              layer: 0,
          };
      }
  }
  // Utils
  // -------------------------------------------------------------------------------------------------
  function isSegAllDay(seg) {
      return seg.eventRange.def.allDay;
  }

  class HeaderRow extends BaseComponent {
      render() {
          const { props } = this;
          return (_("div", { role: props.cellGroup ? undefined : 'row', className: [
                  props.cellGroup ? 'fc-flex-row' : 'fc-row',
                  props.className || '',
              ].join(' ') }, props.cells.map((cell) => (_(k$1, { key: props.getHeaderModelKey(cell) }, props.renderHeaderContent(cell, props.tierNum, undefined, // innerHeightRef
          props.colWidth))))));
      }
  }

  function DayGridHeader(props) {
      return (_("div", { className: [
              'fc-rowgroup',
              'fc-content-box',
              ...(props.extraClassNames || []),
          ].join(' '), style: {
              width: props.width,
              paddingLeft: props.paddingLeft,
              paddingRight: props.paddingRight,
          } }, props.headerTiers.map((cells, tierNum) => (_(HeaderRow, { key: tierNum, tierNum: tierNum, cells: cells, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, colWidth: props.colWidth })))));
  }

  class DayGridLayoutNormal extends BaseComponent {
      constructor() {
          super(...arguments);
          this.handleScroller = (scroller) => {
              setRef(this.props.scrollerRef, scroller);
          };
          this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
              this.setState({ leftScrollbarWidth });
          };
          this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
              this.setState({ rightScrollbarWidth });
          };
      }
      render() {
          const { props, state, context } = this;
          const { options } = context;
          const verticalScrollbars = !props.forPrint && !getIsHeightAuto(options);
          const stickyHeaderDates = !props.forPrint && getStickyHeaderDates(options);
          return (_(k$1, null,
              options.dayHeaders && (_(DayGridHeader, { headerTiers: props.headerTiers, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, 
                  // render hooks
                  extraClassNames: [
                      'fc-daygrid-header',
                      stickyHeaderDates ? 'fc-sticky-header' : '',
                  ], 
                  // dimensions
                  paddingLeft: state.leftScrollbarWidth, paddingRight: state.rightScrollbarWidth })),
              _(Scroller, { vertical: verticalScrollbars, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth, elClassNames: [
                      'fc-daygrid-body',
                      'fc-rowgroup',
                      'fc-flex-column',
                      verticalScrollbars ? 'fc-liquid' : '',
                  ], ref: this.handleScroller },
                  _(DayGridRows // .fc-grow
                  , { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: props.cellRows, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, 
                      // content
                      fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, 
                      // refs
                      rowHeightRefMap: props.rowHeightRefMap }))));
      }
  }

  class DayGridLayoutPannable extends BaseComponent {
      constructor() {
          super(...arguments);
          this.headerScrollerRef = m$1();
          this.bodyScrollerRef = m$1();
          this.footerScrollerRef = m$1();
          // Sizing
          // -----------------------------------------------------------------------------------------------
          this.handleWidth = (width) => {
              this.setState({ width });
          };
          this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
              this.setState({ leftScrollbarWidth });
          };
          this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
              this.setState({ rightScrollbarWidth });
          };
      }
      render() {
          const { props, state, context } = this;
          const { options } = context;
          const verticalScrollbars = !props.forPrint && !getIsHeightAuto(options);
          const stickyHeaderDates = !props.forPrint && getStickyHeaderDates(options);
          const stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(options);
          const colCnt = props.cellRows[0].length;
          const [canvasWidth, colWidth] = computeColWidth(colCnt, props.dayMinWidth, state.width);
          return (_(k$1, null,
              options.dayHeaders && (_(Scroller, { horizontal: true, hideScrollbars: true, elClassNames: [
                      'fc-daygrid-header',
                      'fc-rowgroup',
                      stickyHeaderDates ? 'fc-sticky-header' : ''
                  ], ref: this.headerScrollerRef },
                  _(DayGridHeader, { headerTiers: props.headerTiers, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, 
                      // dimensions
                      colWidth: colWidth, width: canvasWidth, paddingLeft: state.leftScrollbarWidth, paddingRight: state.rightScrollbarWidth }))),
              _(Scroller, { vertical: verticalScrollbars, horizontal: true, hideScrollbars: stickyFooterScrollbar, widthRef: this.handleWidth, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth, elClassNames: [
                      'fc-daygrid-body',
                      'fc-rowgroup',
                      'fc-flex-column',
                      verticalScrollbars ? 'fc-liquid' : '',
                  ], ref: this.bodyScrollerRef },
                  _(DayGridRows // .fc-grow
                  , { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: props.cellRows, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, 
                      // content
                      fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, 
                      // dimensions
                      colWidth: colWidth, width: canvasWidth, 
                      // refs
                      rowHeightRefMap: props.rowHeightRefMap })),
              Boolean(stickyFooterScrollbar) && (_(Scroller, { ref: this.footerScrollerRef, horizontal: true, elClassNames: ['fc-sticky-footer'], elStyle: {
                      marginTop: '-1px', // HACK
                  } },
                  _("div", { style: {
                          width: canvasWidth,
                          height: '1px', // HACK
                      } })))));
      }
      // Lifecycle
      // -----------------------------------------------------------------------------------------------
      componentDidMount() {
          // scroller
          const ScrollerSyncer = getScrollerSyncerClass(this.context.pluginHooks);
          this.syncedScroller = new ScrollerSyncer(true); // horizontal=true
          setRef(this.props.scrollerRef, this.syncedScroller);
          this.updateSyncedScroller();
      }
      componentDidUpdate() {
          // scroller
          this.updateSyncedScroller();
      }
      componentWillUnmount() {
          // scroller
          this.syncedScroller.destroy();
      }
      // Scrolling
      // -----------------------------------------------------------------------------------------------
      updateSyncedScroller() {
          this.syncedScroller.handleChildren([
              this.headerScrollerRef.current,
              this.bodyScrollerRef.current,
              this.footerScrollerRef.current,
          ]);
      }
  }

  class DayGridLayout extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.scrollerRef = m$1();
          this.rowHeightRefMap = new RefMap(() => {
              afterSize(this.updateScrollY);
          });
          // internal
          this.scrollDate = null;
          this.updateScrollY = () => {
              const rowHeightMap = this.rowHeightRefMap.current;
              const scroller = this.scrollerRef.current;
              // Since updateScrollY is called by rowHeightRefMap, could be called with null during cleanup,
              // and the scroller might not exist
              if (scroller && this.scrollDate) {
                  let scrollTop = computeTopFromDate(this.scrollDate, this.props.cellRows, rowHeightMap, 1);
                  if (scrollTop != null) {
                      if (scrollTop) {
                          scrollTop++; // clear top border
                      }
                      scroller.scrollTo({ y: scrollTop });
                  }
              }
          };
          this.clearScroll = () => {
              this.scrollDate = null;
          };
      }
      render() {
          const { props, context } = this;
          const { options } = context;
          const commonLayoutProps = Object.assign(Object.assign({}, props), { scrollerRef: this.scrollerRef, rowHeightRefMap: this.rowHeightRefMap });
          return (_(ViewContainer, { viewSpec: context.viewSpec, elClasses: [props.className, 'fc-flex-column', 'fc-border'] }, options.dayMinWidth ? (_(DayGridLayoutPannable, Object.assign({}, commonLayoutProps, { dayMinWidth: options.dayMinWidth }))) : (_(DayGridLayoutNormal, Object.assign({}, commonLayoutProps)))));
      }
      // Lifecycle
      // -----------------------------------------------------------------------------------------------
      componentDidMount() {
          this.resetScroll();
          this.scrollerRef.current.addScrollEndListener(this.clearScroll);
      }
      componentDidUpdate(prevProps) {
          if (prevProps.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset) {
              this.resetScroll();
          }
      }
      componentWillUnmount() {
          this.scrollerRef.current.removeScrollEndListener(this.clearScroll);
      }
      // Scrolling
      // -----------------------------------------------------------------------------------------------
      resetScroll() {
          this.scrollDate = this.props.dateProfile.currentDate;
          this.updateScrollY();
          // updateScrollX
          const scroller = this.scrollerRef.current;
          scroller.scrollTo({ x: 0 });
      }
  }

  const WEEKDAY_FORMAT = createFormatter({ weekday: 'long' });
  class DayOfWeekHeaderCell extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerElRef = m$1();
      }
      render() {
          let { props, context } = this;
          let { dateEnv, theme, viewApi, options } = context;
          let date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
          let dateMeta = {
              dow: props.dow,
              isDisabled: false,
              isFuture: false,
              isPast: false,
              isToday: false,
              isOther: false,
          };
          let text = dateEnv.format(date, props.dayHeaderFormat);
          let renderProps = Object.assign(Object.assign(Object.assign(Object.assign({ date }, dateMeta), { view: viewApi }), props.extraRenderProps), { text });
          return (_(ContentContainer, { elTag: 'div', elClasses: [
                  ...getDayClassNames(dateMeta),
                  ...(props.extraClassNames || []),
                  'fc-header-cell',
                  'fc-cell',
                  props.colWidth != null ? '' : 'fc-liquid',
                  'fc-flex-column',
                  'fc-align-center',
              ], elAttrs: props.extraDataAttrs, elStyle: {
                  width: props.colWidth != null // TODO: DRY
                      ? props.colWidth * (props.colSpan || 1)
                      : undefined,
              }, renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInner, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => (_("div", { ref: this.innerElRef, className: [
                  'fc-flex-column',
                  props.isSticky ? 'fc-sticky-x' : '',
              ].join(' ') },
              _(InnerContent, { elTag: "a", elClasses: [
                      'fc-cell-inner',
                      'fc-padding-sm',
                  ], elAttrs: {
                      'aria-label': dateEnv.format(date, WEEKDAY_FORMAT),
                  } })))));
      }
      componentDidMount() {
          const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
          // TODO: only attach this if refs props present
          this.disconectInnerHeight = watchHeight(innerEl, (height) => {
              setRef(this.props.innerHeightRef, height);
          });
      }
      componentWillUnmount() {
          this.disconectInnerHeight();
          setRef(this.props.innerHeightRef, null);
      }
  }

  function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
      return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
  }
  // Computes a default column header formatting string if `colFormat` is not explicitly defined
  function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
      // if more than one week row, or if there are a lot of columns with not much space,
      // put just the day numbers will be in each cell
      if (!datesRepDistinctDays || dayCnt > 10) {
          return createFormatter({ weekday: 'short' }); // "Sat"
      }
      if (dayCnt > 1) {
          return createFormatter({ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }); // "Sat 11/12"
      }
      return createFormatter({ weekday: 'long' }); // "Saturday"
  }

  class DayGridView extends BaseComponent {
      constructor() {
          super(...arguments);
          // memo
          this.buildDayTableModel = memoize(buildDayTableModel);
          this.buildHeaderTiers = memoize(buildHeaderTiers);
          this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
          // internal
          this.slicer = new DayTableSlicer();
      }
      render() {
          const { props, context } = this;
          const { options } = context;
          const dayTableModel = this.buildDayTableModel(props.dateProfile, context.dateProfileGenerator);
          const datesRepDistinctDays = dayTableModel.rowCnt === 1;
          const headerTiers = this.buildHeaderTiers(dayTableModel.headerDates, datesRepDistinctDays);
          const slicedProps = this.slicer.sliceProps(props, props.dateProfile, options.nextDayThreshold, context, dayTableModel);
          const dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dayTableModel.colCnt);
          return (_(NowTimer, { unit: "day" }, (nowDate, todayRange) => (_(DayGridLayout, { dateProfile: props.dateProfile, todayRange: todayRange, cellRows: dayTableModel.cellRows, forPrint: props.forPrint, className: 'fc-daygrid-view', 
              // header content
              headerTiers: headerTiers, renderHeaderContent: (model, tier, innerHeightRef, colWidth) => {
                  if (model.date) {
                      return (_(DateHeaderCell, Object.assign({}, model, { dateProfile: props.dateProfile, todayRange: todayRange, navLink: dayTableModel.colCnt > 1, dayHeaderFormat: dayHeaderFormat, colSpan: model.colSpan, colWidth: colWidth })));
                  }
                  else {
                      return (_(DayOfWeekHeaderCell, Object.assign({}, model, { dayHeaderFormat: dayHeaderFormat, colSpan: model.colSpan, colWidth: colWidth })));
                  }
              }, getHeaderModelKey: (model) => {
                  // can use model.key???
                  if (model.date) {
                      return model.date.toUTCString();
                  }
                  return model.dow;
              }, 
              // body content
              fgEventSegs: slicedProps.fgEventSegs, bgEventSegs: slicedProps.bgEventSegs, businessHourSegs: slicedProps.businessHourSegs, dateSelectionSegs: slicedProps.dateSelectionSegs, eventDrag: slicedProps.eventDrag, eventResize: slicedProps.eventResize, eventSelection: slicedProps.eventSelection }))));
      }
  }

  /*
  TODO: is it even worth doing this "advanced" version?
  */
  class HeaderRowAdvanced extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerHeightRefMap = new RefMap(() => {
              afterSize(this.handleInnerHeights);
          });
          this.handleInnerHeights = () => {
              const innerHeightMap = this.innerHeightRefMap.current;
              let max = 0;
              for (const innerHeight of innerHeightMap.values()) {
                  max = Math.max(max, innerHeight);
              }
              if (this.currentInnerHeight !== max) {
                  this.currentInnerHeight = max;
                  setRef(this.props.innerHeightRef, max);
              }
          };
      }
      render() {
          const { props } = this;
          return (_("div", { role: 'row', className: 'fc-row', style: { height: props.height } }, props.cells.map((cell) => {
              const key = props.getHeaderModelKey(cell);
              return (_(k$1, { key: props.getHeaderModelKey(cell) }, props.renderHeaderContent(cell, props.tierNum, this.innerHeightRefMap.createRef(key), // innerHeightRef
              props.colWidth)));
          })));
      }
  }

  var index$3 = createPlugin({
      name: '@fullcalendar/daygrid',
      initialView: 'dayGridMonth',
      views: {
          dayGrid: {
              component: DayGridView,
              dateProfileGeneratorClass: TableDateProfileGenerator,
          },
          dayGridDay: {
              type: 'dayGrid',
              duration: { days: 1 },
          },
          dayGridWeek: {
              type: 'dayGrid',
              duration: { weeks: 1 },
          },
          dayGridMonth: {
              type: 'dayGrid',
              duration: { months: 1 },
              fixedWeekCount: true,
          },
          dayGridYear: {
              type: 'dayGrid',
              duration: { years: 1 },
          },
      },
  });

  var css_248z$2 = ".fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:flex;flex-direction:column;position:relative}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-inner{color:var(--fc-event-text-color);display:flex;flex-direction:column;flex-grow:1;min-width:0}.fc-v-event .fc-event-time{white-space:nowrap}.fc-v-event .fc-event-time,.fc-v-event .fc-event-title{overflow:hidden}.fc-v-event .fc-event-title-outer{display:flex;flex-direction:column;flex-grow:1;min-width:0}.fc-v-event .fc-event-title{bottom:0;position:sticky;top:0}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-timegrid-axis{align-items:flex-end}.fc-timegrid-axis,.fc-timegrid-axis-inner{display:flex;flex-direction:column;justify-content:center}.fc-timegrid-axis-inner{min-height:1.5em}.fc-timegrid-slot-minor{border-style:dotted}.fc-timegrid-col{position:relative}.fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc-timegrid-bg-harness .fc-non-business{z-index:1}.fc-timegrid-bg-harness .fc-bg-event{z-index:2}.fc-timegrid-bg-harness .fc-highlight,.fc-timegrid-col-fg{z-index:3}.fc-direction-ltr .fc-timegrid-col-fg{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-fg{margin:0 2px 0 2.5%}.fc-timegrid-event{border-radius:3px;bottom:0;font-size:var(--fc-small-font-size);left:0;margin-bottom:1px;position:absolute;right:0;top:0;z-index:3}.fc-timegrid-event-inset,.fc-timegrid-event.fc-event-mirror{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-harness-plain>.fc-timegrid-event{position:static}.fc-timegrid-event .fc-event-inner{padding:1px 1px 0}.fc-timegrid-event-short .fc-event-inner{flex-direction:row;overflow:hidden}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-time:after{content:\"\\00a0-\\00a0\"}.fc-timegrid-event-short .fc-event-title,.fc-timegrid-more-link{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);border-radius:3px;box-shadow:0 0 0 1px var(--fc-page-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;z-index:9999}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc-timegrid-more-link-inner{padding:3px 2px}.fc-timegrid-now-indicator-container{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.fc-timegrid-now-indicator-arrow,.fc-timegrid-now-indicator-line{pointer-events:none}.fc-timegrid-now-indicator-line{border-width:1px 0 0;left:0;right:0}.fc-timegrid-now-indicator-arrow,.fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;position:absolute;z-index:4}.fc-timegrid-now-indicator-arrow{margin-top:-5px}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}";
  injectStyles(css_248z$2);

  /*
  TODO: more DRY with daygrid?
  can be given null/undefined!
  */
  function splitSegsByCol(segs, colCnt) {
      let segsByCol = [];
      let i;
      for (i = 0; i < colCnt; i += 1) {
          segsByCol.push([]);
      }
      if (segs) {
          for (i = 0; i < segs.length; i += 1) {
              segsByCol[segs[i].col].push(segs[i]);
          }
      }
      return segsByCol;
  }
  /*
  TODO: more DRY with daygrid?
  can be given null/undefined!
  */
  function splitInteractionByCol(ui, colCnt) {
      let byRow = [];
      if (!ui) {
          for (let i = 0; i < colCnt; i += 1) {
              byRow[i] = null;
          }
      }
      else {
          for (let i = 0; i < colCnt; i += 1) {
              byRow[i] = {
                  affectedInstances: ui.affectedInstances,
                  isEvent: ui.isEvent,
                  segs: [],
              };
          }
          for (let seg of ui.segs) {
              byRow[seg.col].segs.push(seg);
          }
      }
      return byRow;
  }

  class DayTimeColsSlicer extends Slicer {
      sliceRange(range, dayRanges) {
          let segs = [];
          for (let col = 0; col < dayRanges.length; col += 1) {
              let segRange = intersectRanges(range, dayRanges[col]);
              if (segRange) {
                  segs.push({
                      start: segRange.start,
                      end: segRange.end,
                      isStart: segRange.start.valueOf() === range.start.valueOf(),
                      isEnd: segRange.end.valueOf() === range.end.valueOf(),
                      col,
                  });
              }
          }
          return segs;
      }
  }

  // potential nice values for the slot-duration and interval-duration
  // from largest to smallest
  const STOCK_SUB_DURATIONS = [
      { hours: 1 },
      { minutes: 30 },
      { minutes: 15 },
      { seconds: 30 },
      { seconds: 15 },
  ];
  function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
      let dayStart = new Date(0);
      let slatTime = slotMinTime;
      let slatIterator = createDuration(0);
      let labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
      let metas = [];
      while (asRoughMs(slatTime) < asRoughMs(slotMaxTime)) {
          let date = dateEnv.add(dayStart, slatTime);
          let isLabeled = wholeDivideDurations(slatIterator, labelInterval) !== null;
          metas.push({
              date,
              time: slatTime,
              key: date.toISOString(),
              isoTimeStr: formatIsoTimeString(date),
              isLabeled,
          });
          slatTime = addDurations(slatTime, slotDuration);
          slatIterator = addDurations(slatIterator, slotDuration);
      }
      return metas;
  }
  // Computes an automatic value for slotLabelInterval
  function computeLabelInterval(slotDuration) {
      let i;
      let labelInterval;
      let slotsPerLabel;
      // find the smallest stock label interval that results in more than one slots-per-label
      for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
          labelInterval = createDuration(STOCK_SUB_DURATIONS[i]);
          slotsPerLabel = wholeDivideDurations(labelInterval, slotDuration);
          if (slotsPerLabel !== null && slotsPerLabel > 1) {
              return labelInterval;
          }
      }
      return slotDuration; // fall back
  }

  class AllDaySplitter extends Splitter {
      getKeyInfo() {
          return {
              allDay: {},
              timed: {},
          };
      }
      getKeysForDateSpan(dateSpan) {
          if (dateSpan.allDay) {
              return ['allDay'];
          }
          return ['timed'];
      }
      getKeysForEventDef(eventDef) {
          if (!eventDef.allDay) {
              return ['timed'];
          }
          if (hasBgRendering(eventDef)) {
              return ['timed', 'allDay'];
          }
          return ['allDay'];
      }
  }

  function buildTimeColsModel(dateProfile, dateProfileGenerator) {
      let daySeries = new DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
      return new DayTableModel(daySeries, false);
  }
  function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
      let ranges = [];
      for (let date of dayTableModel.headerDates) {
          ranges.push({
              start: dateEnv.add(date, dateProfile.slotMinTime),
              end: dateEnv.add(date, dateProfile.slotMaxTime),
          });
      }
      return ranges;
  }
  function computeSlatHeight(expandRows, slatCnt, slatInnerHeight, scrollerHeight) {
      if (!slatInnerHeight || !scrollerHeight) {
          return [undefined, false];
      }
      const slatMinHeight = slatInnerHeight + 1;
      const slatLiquidHeight = scrollerHeight / slatCnt;
      let slatLiquid;
      let slatHeight;
      if (expandRows && slatLiquidHeight >= slatMinHeight) {
          slatLiquid = true;
          slatHeight = slatLiquidHeight;
      }
      else {
          slatLiquid = false;
          slatHeight = slatMinHeight;
      }
      return [slatHeight, slatLiquid];
  }
  /*
  A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
  */
  function computeDateTopFrac(date, dateProfile, startOfDayDate) {
      if (!startOfDayDate) {
          startOfDayDate = startOfDay(date);
      }
      return computeTimeTopFrac(createDuration(date.valueOf() - startOfDayDate.valueOf()), dateProfile);
  }
  function computeTimeTopFrac(time, dateProfile) {
      const startMs = asRoughMs(dateProfile.slotMinTime);
      const endMs = asRoughMs(dateProfile.slotMaxTime);
      let frac = (time.milliseconds - startMs) / (endMs - startMs);
      frac = Math.max(0, frac);
      frac = Math.min(1, frac);
      return frac;
  }
  function getSlatRowClassName(slatMeta) {
      return [
          'fc-row',
          'fc-timegrid-slot',
          slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor',
      ].join(' ');
  }

  const DEFAULT_WEEK_NUM_FORMAT = createFormatter({ week: 'short' });
  class TimeGridWeekNumber extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerElRef = m$1();
      }
      render() {
          let { props, context } = this;
          let range = props.dateProfile.renderRange;
          let dayCnt = diffDays(range.start, range.end);
          // only do in day views (to avoid doing in week views that dont need it)
          let navLinkAttrs = (dayCnt === 1)
              ? buildNavLinkAttrs(context, range.start, 'week')
              : {};
          return (_(WeekNumberContainer, { elTag: 'div', elClasses: [
                  'fc-timegrid-weeknumber',
                  'fc-timegrid-axis',
                  'fc-cell',
                  'fc-content-box',
              ], elStyle: {
                  width: props.width
              }, date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, (InnerContent) => (_("div", { ref: this.innerElRef, className: 'fc-flex-column' },
              _(InnerContent, { elTag: "a", elClasses: [
                      'fc-timegrid-axis-inner',
                      'fc-cell-inner',
                      'fc-padding-sm',
                  ], elAttrs: navLinkAttrs })))));
      }
      componentDidMount() {
          const { props } = this;
          const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
          // TODO: only attach this if refs props present
          // TODO: handle width/height independently?
          this.detachInnerSize = watchSize(innerEl, (width, height) => {
              setRef(props.innerWidthRef, width);
              setRef(props.innerHeightRef, height);
          });
      }
      componentWillUnmount() {
          const { props } = this;
          this.detachInnerSize();
          setRef(props.innerWidthRef, null);
          setRef(props.innerHeightRef, null);
      }
  }

  class TimeGridAllDayLabel extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerElRef = m$1();
      }
      render() {
          let { props } = this;
          let { options, viewApi } = this.context;
          let renderProps = {
              text: options.allDayText,
              view: viewApi,
          };
          return (_(ContentContainer, { elTag: "div", elClasses: [
                  'fc-timegrid-allday-label',
                  'fc-timegrid-axis',
                  'fc-cell',
                  'fc-content-box',
              ], elStyle: {
                  width: props.width,
              }, renderProps: renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner$1, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, (InnerContent) => (_("div", { ref: this.innerElRef, className: 'fc-flex-column' },
              _(InnerContent, { elTag: "span", elClasses: [
                      'fc-timegrid-axis-inner',
                      'fc-cell-inner',
                      'fc-padding-sm',
                  ] })))));
      }
      componentDidMount() {
          const { props } = this;
          const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
          // TODO: only attach this if refs props present
          this.disconnectInnerSize = watchSize(innerEl, (width, height) => {
              setRef(props.innerWidthRef, width);
              setRef(props.innerHeightRef, height);
          });
      }
      componentWillUnmount() {
          const { props } = this;
          this.disconnectInnerSize();
          setRef(props.innerWidthRef, null);
          setRef(props.innerHeightRef, null);
      }
  }
  function renderAllDayInner$1(renderProps) {
      return renderProps.text;
  }

  class TimeGridAllDayLane extends DateComponent {
      constructor() {
          super(...arguments);
          this.heightRef = m$1();
          this.handleRootEl = (rootEl) => {
              this.rootEl = rootEl;
              if (rootEl) {
                  this.context.registerInteractiveComponent(this, {
                      el: rootEl,
                  });
              }
              else {
                  this.context.unregisterInteractiveComponent(this);
              }
          };
      }
      render() {
          return (_(DayGridRow, Object.assign({}, this.props, { cellGroup: true, className: this.props.className, forceVSpacing: true, rootElRef: this.handleRootEl, heightRef: this.heightRef })));
      }
      queryHit(positionLeft, positionTop, elWidth) {
          const { props, context, heightRef } = this;
          const colCnt = props.cells.length;
          const { col, left, right } = computeColFromPosition(positionLeft, elWidth, props.colWidth, colCnt, context.isRtl);
          const cell = props.cells[col];
          const cellStartDate = cell.date;
          const cellEndDate = addDays(cellStartDate, 1);
          return {
              dateProfile: props.dateProfile,
              dateSpan: Object.assign({ range: {
                      start: cellStartDate,
                      end: cellEndDate,
                  }, allDay: true }, cell.extraDateSpan),
              // HACK. TODO: This is expensive to do every hit-query
              dayEl: getCellEl(this.rootEl, col),
              rect: {
                  left,
                  right,
                  top: 0,
                  bottom: heightRef.current,
              },
              layer: 0,
          };
      }
  }

  function TimeGridNowIndicatorArrow(props) {
      return (_(NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-arrow'], elStyle: {
              top: fracToCssDim(computeDateTopFrac(props.nowDate, props.dateProfile))
          }, isAxis: true, date: props.nowDate }));
  }

  const DEFAULT_SLAT_LABEL_FORMAT = createFormatter({
      hour: 'numeric',
      minute: '2-digit',
      omitZeroMinute: true,
      meridiem: 'short',
  });
  class TimeGridSlatLabel extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerElRef = m$1();
      }
      render() {
          let { props, context } = this;
          let { dateEnv, options, viewApi } = context;
          let classNames = [
              'fc-timegrid-slot-label',
              'fc-timegrid-axis',
              'fc-header-cell',
              'fc-cell',
              'fc-content-box',
          ];
          if (!props.isLabeled) {
              return (_("div", { "data-time": props.isoTimeStr, className: classNames.join(' '), style: {
                      width: props.width,
                  } }));
          }
          let labelFormat = // TODO: fully pre-parse
           options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
              Array.isArray(options.slotLabelFormat) ? createFormatter(options.slotLabelFormat[0]) :
                  createFormatter(options.slotLabelFormat);
          let renderProps = {
              level: 0,
              time: props.time,
              date: dateEnv.toDate(props.date),
              view: viewApi,
              text: dateEnv.format(props.date, labelFormat),
          };
          return (_(ContentContainer, { elTag: "div", elClasses: classNames, elAttrs: {
                  'data-time': props.isoTimeStr,
              }, elStyle: {
                  width: props.width,
              }, renderProps: renderProps, generatorName: "slotLabelContent", customGenerator: options.slotLabelContent, defaultGenerator: renderInnerContent$1, classNameGenerator: options.slotLabelClassNames, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, (InnerContent) => (_("div", { ref: this.innerElRef, className: 'fc-flex-column' },
              _(InnerContent, { elTag: "div", elClasses: [
                      'fc-timegrid-axis-inner',
                      'fc-cell-inner',
                      'fc-padding-sm',
                  ] })))));
      }
      componentDidMount() {
          const { props } = this;
          const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
          if (innerEl) { // could be null if !isLabeled
              // TODO: only attach this if refs props present
              // TODO: fire width/height independently?
              this.detachInnerSize = watchSize(innerEl, (width, height) => {
                  setRef(props.innerWidthRef, width);
                  setRef(props.innerHeightRef, height);
              });
          }
      }
      componentWillUnmount() {
          const { props } = this;
          if (this.detachInnerSize) {
              this.detachInnerSize();
              setRef(props.innerWidthRef, null);
              setRef(props.innerHeightRef, null);
          }
      }
  }
  function renderInnerContent$1(props) {
      return props.text;
  }

  class TimeGridSlatLane extends BaseComponent {
      constructor() {
          super(...arguments);
          // ref
          this.innerElRef = m$1();
      }
      render() {
          let { props, context } = this;
          let { options } = context;
          let renderProps = {
              time: props.time,
              date: context.dateEnv.toDate(props.date),
              view: context.viewApi,
          };
          return (_(ContentContainer, { elTag: "div", elClasses: [
                  // TODO: have lane classNames like 'fc-timegrid-lane'/'fc-timegrid-slot-lane'/'fc-timegrid-slat-lane'
                  'fc-cell',
                  'fc-liquid',
              ], elAttrs: {
                  'data-time': props.isoTimeStr,
              }, renderProps: renderProps, generatorName: "slotLaneContent", customGenerator: options.slotLaneContent, classNameGenerator: options.slotLaneClassNames, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, (InnerContent) => (_("div", { ref: this.innerElRef, className: 'fc-flex-column' },
              _(InnerContent, { elTag: "div", elClasses: ['fc-cell-inner'] })))));
      }
      componentDidMount() {
          const innerEl = this.innerElRef.current; // TODO: make dynamic with useEffect
          // TODO: only attach this if refs props present
          this.detachInnerHeight = watchHeight(innerEl, (height) => {
              setRef(this.props.innerHeightRef, height);
          });
      }
      componentWillUnmount() {
          this.detachInnerHeight();
          setRef(this.props.innerHeightRef, null);
      }
  }

  // segEntries assumed sorted
  function buildWebPositioning(segEntries, strictOrder, maxStackCnt) {
      let hierarchy = new SegHierarchy();
      if (strictOrder != null) {
          hierarchy.strictOrder = strictOrder;
      }
      if (maxStackCnt != null) {
          hierarchy.maxStackCnt = maxStackCnt;
      }
      let hiddenEntries = hierarchy.addSegs(segEntries);
      let hiddenGroups = groupIntersectingEntries(hiddenEntries);
      let web = buildWeb(hierarchy);
      web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
      let segRects = webToRects(web);
      return [segRects, hiddenGroups];
  }
  function buildWeb(hierarchy) {
      const { entriesByLevel } = hierarchy;
      const buildNode = cacheable((level, lateral) => level + ':' + lateral, (level, lateral) => {
          let siblingRange = findNextLevelSegs(hierarchy, level, lateral);
          let nextLevelRes = buildNodes(siblingRange, buildNode);
          let entry = entriesByLevel[level][lateral];
          return [
              Object.assign(Object.assign({}, entry), { nextLevelNodes: nextLevelRes[0] }),
              entry.thickness + nextLevelRes[1], // the pressure builds
          ];
      });
      return buildNodes(entriesByLevel.length
          ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
          : null, buildNode)[0];
  }
  function buildNodes(siblingRange, buildNode) {
      if (!siblingRange) {
          return [[], 0];
      }
      let { level, lateralStart, lateralEnd } = siblingRange;
      let lateral = lateralStart;
      let pairs = [];
      while (lateral < lateralEnd) {
          pairs.push(buildNode(level, lateral));
          lateral += 1;
      }
      pairs.sort(cmpDescPressures);
      return [
          pairs.map(extractNode),
          pairs[0][1], // first item's pressure
      ];
  }
  function cmpDescPressures(a, b) {
      return b[1] - a[1];
  }
  function extractNode(a) {
      return a[0];
  }
  function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
      let { levelCoords, entriesByLevel } = hierarchy;
      let subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
      let afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
      let levelCnt = levelCoords.length;
      let level = subjectLevel;
      // skip past levels that are too high up
      for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
          ; // do nothing
      for (; level < levelCnt; level += 1) {
          let entries = entriesByLevel[level];
          let entry;
          let searchIndex = binarySearch(entries, subjectEntry.span.start, getEntrySpanEnd);
          let lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
          let lateralEnd = lateralStart;
          while ( // loop through entries that horizontally intersect
          (entry = entries[lateralEnd]) && // but not past the whole seg list
              entry.span.start < subjectEntry.span.end) {
              lateralEnd += 1;
          }
          if (lateralStart < lateralEnd) {
              return { level, lateralStart, lateralEnd };
          }
      }
      return null;
  }
  function stretchWeb(topLevelNodes, totalThickness) {
      const stretchNode = cacheable((node, startCoord, prevThickness) => buildEntryKey(node), (node, startCoord, prevThickness) => {
          let { nextLevelNodes, thickness } = node;
          let allThickness = thickness + prevThickness;
          let thicknessFraction = thickness / allThickness;
          let endCoord;
          let newChildren = [];
          if (!nextLevelNodes.length) {
              endCoord = totalThickness;
          }
          else {
              for (let childNode of nextLevelNodes) {
                  if (endCoord === undefined) {
                      let res = stretchNode(childNode, startCoord, allThickness);
                      endCoord = res[0];
                      newChildren.push(res[1]);
                  }
                  else {
                      let res = stretchNode(childNode, endCoord, 0);
                      newChildren.push(res[1]);
                  }
              }
          }
          let newThickness = (endCoord - startCoord) * thicknessFraction;
          return [endCoord - newThickness, Object.assign(Object.assign({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
      });
      return topLevelNodes.map((node) => stretchNode(node, 0, 0)[1]);
  }
  // not sorted in any particular order
  function webToRects(topLevelNodes) {
      let rects = [];
      const processNode = cacheable((node, levelCoord, stackDepth) => buildEntryKey(node), (node, levelCoord, stackDepth) => {
          let rect = Object.assign(Object.assign({}, node), { levelCoord,
              stackDepth, stackForward: 0 });
          rects.push(rect);
          return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
      });
      function processNodes(nodes, levelCoord, stackDepth) {
          let stackForward = 0;
          for (let node of nodes) {
              stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
          }
          return stackForward;
      }
      processNodes(topLevelNodes, 0, 0);
      return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
  }
  // TODO: move to general util
  function cacheable(keyFunc, workFunc) {
      const cache = {};
      return (...args) => {
          let key = keyFunc(...args);
          return (key in cache)
              ? cache[key]
              : (cache[key] = workFunc(...args));
      };
  }

  function computeFgSegVerticals(segs, dateProfile, colDate, slatCnt, slatHeight, // in pixels
  eventMinHeight, // in pixels
  eventShortHeight) {
      const res = [];
      for (const seg of segs) {
          const startFrac = computeDateTopFrac(seg.start, dateProfile, colDate);
          const endFrac = computeDateTopFrac(seg.end, dateProfile, colDate);
          let heightFrac = endFrac - startFrac;
          let isShort = false;
          if (slatHeight !== undefined) {
              const totalHeight = slatHeight * slatCnt;
              let heightPixels = heightFrac * totalHeight;
              if (eventMinHeight != null && heightPixels < eventMinHeight) {
                  heightPixels = eventMinHeight;
                  heightFrac = heightPixels / totalHeight;
              }
              isShort = eventShortHeight != null && heightPixels < eventShortHeight;
          }
          res.push({
              start: startFrac,
              end: startFrac + heightFrac,
              size: heightFrac,
              isShort,
          });
      }
      return res;
  }
  // HORIZONTAL
  // -------------------------------------------------------------------------------------------------
  function computeFgSegHorizontals(segs, segVerticals, eventOrderStrict, eventMaxStack) {
      const segEntries = segs.map((seg, index) => ({
          index,
          seg,
          thickness: 1,
          span: segVerticals[index],
      }));
      const [segRectsUnordered, hiddenGroups] = buildWebPositioning(segEntries, eventOrderStrict, eventMaxStack);
      const segRects = [];
      for (const segRect of segRectsUnordered) {
          segRects[segRect.index] = segRect;
      }
      return [segRects, hiddenGroups];
  }

  const DEFAULT_TIME_FORMAT$1 = createFormatter({
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false,
  });
  class TimeGridEvent extends BaseComponent {
      render() {
          const { props } = this;
          return (_(StandardEvent, Object.assign({}, props, { elClasses: [
                  'fc-timegrid-event',
                  'fc-v-event',
                  props.isShort ? 'fc-timegrid-event-short' : '',
                  props.isInset ? 'fc-timegrid-event-inset' : '',
              ], defaultTimeFormat: DEFAULT_TIME_FORMAT$1, startOverride: props.segStart, endOverride: props.segEnd })));
      }
  }

  class TimeGridMoreLink extends BaseComponent {
      render() {
          let { props } = this;
          return (_(MoreLinkContainer, { elClasses: ['fc-timegrid-more-link', 'fc-abs'], elStyle: {
                  top: props.top,
                  height: props.height,
              }, allDayDate: null, segs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: () => renderPlainFgSegs(props.hiddenSegs, props), defaultGenerator: renderMoreLinkInner, forceTimed: true }, (InnerContent) => (_(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-more-link-inner', 'fc-sticky-y'] }))));
      }
  }
  function renderMoreLinkInner(props) {
      return props.shortText;
  }

  function TimeGridNowIndicatorLine(props) {
      return (_("div", { className: "fc-timegrid-now-indicator-container" },
          _(NowIndicatorContainer, { elClasses: ['fc-timegrid-now-indicator-line'], elStyle: {
                  top: fracToCssDim(computeDateTopFrac(props.nowDate, props.dateProfile, props.dayDate))
              }, isAxis: false, date: props.nowDate })));
  }

  class TimeGridCol extends BaseComponent {
      constructor() {
          super(...arguments);
          this.sortEventSegs = memoize(sortEventSegs);
      }
      render() {
          let { props, context } = this;
          let { options } = context;
          let isSelectMirror = options.selectMirror;
          let mirrorSegs = // yuck
           (props.eventDrag && props.eventDrag.segs) ||
              (props.eventResize && props.eventResize.segs) ||
              (isSelectMirror && props.dateSelectionSegs) ||
              [];
          let interactionAffectedInstances = // TODO: messy way to compute this
           (props.eventDrag && props.eventDrag.affectedInstances) ||
              (props.eventResize && props.eventResize.affectedInstances) ||
              {};
          let sortedFgSegs = this.sortEventSegs(props.fgEventSegs, options.eventOrder);
          // HACK: equired for when column is taller than slats. because all positioning of events is
          // done via percentages. needs to be a percentage of the total slat height
          let slatsTotalHeight = props.slatHeight != null ? props.slatHeight * props.slatCnt : undefined;
          return (_(DayCellContainer, { elTag: "div", elClasses: [
                  'fc-flex-column',
                  'fc-cell',
                  props.width != null ? '' : 'fc-liquid',
                  'fc-timegrid-col',
                  ...(props.extraClassNames || []),
              ], elAttrs: Object.assign({ role: 'gridcell' }, props.extraDataAttrs), elStyle: {
                  width: props.width
              }, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraRenderProps: props.extraRenderProps }, (InnerContent) => (_("div", { className: 'fc-rel fc-flex-column', style: { height: slatsTotalHeight } },
              this.renderFillSegs(props.businessHourSegs, 'non-business'),
              this.renderFillSegs(props.bgEventSegs, 'bg-event'),
              this.renderFillSegs(props.dateSelectionSegs, 'highlight'),
              _("div", { className: 'fc-liquid fc-rel fc-timegrid-col-fg' },
                  this.renderFgSegs(sortedFgSegs, interactionAffectedInstances, false, false, false),
                  this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror), 'mirror')),
              this.renderNowIndicator(props.nowIndicatorSegs),
              hasCustomDayCellContent(options) && (_(InnerContent, { elTag: "div", elClasses: ['fc-timegrid-col-misc'] }))))));
      }
      renderFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
          let { props } = this;
          if (props.forPrint) {
              return renderPlainFgSegs(sortedFgSegs, props); // TODO: test
          }
          return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey);
      }
      renderPositionedFgSegs(segs, // if not mirror, needs to be sorted
      segIsInvisible, isDragging, isResizing, isDateSelecting, forcedKey) {
          let { props, context } = this;
          let { date, dateProfile, eventSelection, todayRange, nowDate } = props;
          let { eventMaxStack, eventShortHeight, eventOrderStrict, eventMinHeight } = context.options;
          // TODO: memoize this?
          let segVerticals = computeFgSegVerticals(segs, dateProfile, date, props.slatCnt, props.slatHeight, eventMinHeight, eventShortHeight);
          let [segRects, hiddenGroups] = computeFgSegHorizontals(segs, segVerticals, eventOrderStrict, eventMaxStack);
          let isMirror = isDragging || isResizing || isDateSelecting;
          return (_(k$1, null,
              this.renderHiddenGroups(hiddenGroups, segs),
              segs.map((seg, index) => {
                  let { eventRange } = seg;
                  let instanceId = eventRange.instance.instanceId; // guaranteed because it's an fg event
                  let segVertical = segVerticals[index];
                  let setRect = segRects[index]; // for horizontals. could be undefined!? HACK
                  let hStyle = (!isMirror && setRect)
                      ? this.computeSegHStyle(setRect)
                      : { left: 0, right: 0 };
                  let isVisible = isMirror || (setRect && !segIsInvisible[instanceId]);
                  let isInset = setRect && setRect.stackForward > 0;
                  return (_("div", { className: 'fc-abs', key: forcedKey || instanceId, style: Object.assign({ visibility: isVisible ? '' : 'hidden', top: fracToCssDim(segVertical.start), height: fracToCssDim(segVertical.size) }, hStyle) },
                      _(TimeGridEvent, Object.assign({ eventRange: eventRange, segStart: seg.start, segEnd: seg.end, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: segVertical.isShort, isInset: isInset }, getEventRangeMeta(eventRange, todayRange, nowDate)))));
              })));
      }
      /*
      NOTE: will already have eventMinHeight applied because segEntries already had it
      */
      renderHiddenGroups(hiddenGroups, segs) {
          let { extraDateSpan, dateProfile, todayRange, nowDate, eventSelection, eventDrag, eventResize } = this.props;
          return (_(k$1, null, hiddenGroups.map((hiddenGroup) => {
              let startFrac = hiddenGroup.span.start;
              let endFrac = hiddenGroup.span.end;
              let heightFrac = endFrac - startFrac;
              return (_(TimeGridMoreLink, { key: hiddenGroup.key, hiddenSegs: hiddenGroup.segs /* TODO: make SegGroup generic */, top: fracToCssDim(startFrac), height: fracToCssDim(heightFrac), extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
          })));
      }
      renderFillSegs(segs, fillType) {
          let { props, context } = this;
          let segVerticals = computeFgSegVerticals(segs, props.dateProfile, props.date, props.slatCnt, props.slatHeight, context.options.eventMinHeight);
          return (_(k$1, null, segs.map((seg, index) => {
              const { eventRange } = seg;
              const segVertical = segVerticals[index];
              return (_("div", { key: buildEventRangeKey(eventRange), className: "fc-timegrid-bg-harness fc-fill-x", style: {
                      top: fracToCssDim(segVertical.start),
                      height: fracToCssDim(segVertical.size),
                  } }, fillType === 'bg-event' ?
                  _(BgEvent, Object.assign({ eventRange: eventRange, isStart: seg.isStart, isEnd: seg.isEnd }, getEventRangeMeta(eventRange, props.todayRange, props.nowDate))) :
                  renderFill(fillType)));
          })));
      }
      renderNowIndicator(segs) {
          let { date, dateProfile } = this.props;
          // TODO: what if nowIndicator turned OFF??
          return segs.map((seg) => (_(TimeGridNowIndicatorLine, { nowDate: seg.start, dayDate: date, dateProfile: dateProfile })));
      }
      /*
      TODO: eventually move to width, not left+right
      */
      computeSegHStyle(segRect) {
          let { isRtl, options } = this.context;
          let shouldOverlap = options.slotEventOverlap;
          let nearCoord = segRect.levelCoord; // the left side if LTR. the right side if RTL. floating-point
          let farCoord = segRect.levelCoord + segRect.thickness; // the right side if LTR. the left side if RTL. floating-point
          let left; // amount of space from left edge, a fraction of the total width
          let right; // amount of space from right edge, a fraction of the total width
          if (shouldOverlap) {
              // double the width, but don't go beyond the maximum forward coordinate (1.0)
              farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
          }
          if (isRtl) {
              left = 1 - farCoord;
              right = nearCoord;
          }
          else {
              left = nearCoord;
              right = 1 - farCoord;
          }
          let props = {
              zIndex: segRect.stackDepth + 1,
              left: fracToCssDim(left),
              right: fracToCssDim(right),
          };
          if (shouldOverlap && !segRect.stackForward) {
              // add padding to the edge so that forward stacked events don't cover the resizer's icon
              props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
          }
          return props;
      }
  }
  function renderPlainFgSegs(sortedFgSegs, { todayRange, nowDate, eventSelection, eventDrag, eventResize }) {
      let hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
          (eventResize ? eventResize.affectedInstances : null) ||
          {};
      return (_(k$1, null, sortedFgSegs.map((seg) => {
          let { eventRange } = seg;
          let instanceId = eventRange.instance.instanceId;
          return (_("div", { key: instanceId, className: 'fc-timegrid-harness-plain', style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
              _(TimeGridEvent, Object.assign({ eventRange: eventRange, segStart: seg.start, segEnd: seg.end, isStart: seg.isStart, isEnd: seg.isEnd, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false, isInset: false }, getEventRangeMeta(eventRange, todayRange, nowDate)))));
      })));
  }

  class TimeGridCols extends DateComponent {
      constructor() {
          super(...arguments);
          // memo
          this.processSlotOptions = memoize(processSlotOptions);
          this.handleRootEl = (el) => {
              this.rootEl = el;
              if (el) {
                  this.context.registerInteractiveComponent(this, {
                      el,
                      isHitComboAllowed: this.props.isHitComboAllowed,
                  });
              }
              else {
                  this.context.unregisterInteractiveComponent(this);
              }
          };
      }
      render() {
          const { props } = this;
          return (_("div", { className: [
                  'fc-flex-row',
                  props.className || '',
              ].join(' '), ref: this.handleRootEl }, props.cells.map((cell, col) => (_(TimeGridCol, { key: cell.key, dateProfile: props.dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, date: cell.date, slatCnt: props.slatCnt, extraRenderProps: cell.extraRenderProps, extraDataAttrs: cell.extraDataAttrs, extraDateSpan: cell.extraDateSpan, forPrint: props.forPrint, 
              // content
              fgEventSegs: props.fgEventSegsByCol[col], bgEventSegs: props.bgEventSegsByCol[col], businessHourSegs: props.businessHourSegsByCol[col], nowIndicatorSegs: props.nowIndicatorSegsByCol[col], dateSelectionSegs: props.dateSelectionSegsByCol[col], eventDrag: props.eventDragByCol[col], eventResize: props.eventResizeByCol[col], eventSelection: props.eventSelection, 
              // dimensions
              width: props.colWidth, slatHeight: props.slatHeight })))));
      }
      queryHit(positionLeft, positionTop, elWidth) {
          const { dateProfile, cells, colWidth, slatHeight } = this.props;
          const { dateEnv, options, isRtl } = this.context;
          const { snapDuration, snapsPerSlot } = this.processSlotOptions(options.slotDuration, options.snapDuration);
          const colCnt = cells.length;
          const { col, left, right } = computeColFromPosition(positionLeft, elWidth, colWidth, colCnt, isRtl);
          const cell = cells[col];
          const slatIndex = Math.floor(positionTop / slatHeight);
          const slatTop = slatIndex * slatHeight;
          const partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
          const localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
          const snapIndex = slatIndex + localSnapIndex * snapsPerSlot;
          const time = addDurations(dateProfile.slotMinTime, multiplyDuration(snapDuration, snapIndex));
          const start = dateEnv.add(cell.date, time);
          const end = dateEnv.add(start, snapDuration);
          return {
              dateProfile,
              dateSpan: Object.assign({ range: { start, end }, allDay: false }, cell.extraDateSpan),
              // HACK. TODO: This is expensive to do every hit-query
              dayEl: getCellEl(this.rootEl, col),
              rect: {
                  left,
                  right,
                  top: slatTop,
                  bottom: slatTop + slatHeight,
              },
              layer: 0,
          };
      }
  }
  // Utils
  // -------------------------------------------------------------------------------------------------
  function processSlotOptions(slotDuration, snapDurationOverride) {
      let snapDuration = snapDurationOverride || slotDuration;
      let snapsPerSlot = wholeDivideDurations(slotDuration, snapDuration);
      if (snapsPerSlot === null) {
          snapDuration = slotDuration;
          snapsPerSlot = 1;
          // TODO: say warning?
      }
      return { snapDuration, snapsPerSlot };
  }

  class TimeGridLayoutPannable extends BaseComponent {
      constructor() {
          super(...arguments);
          this.state = {
              headerTierHeights: [],
          };
          // refs
          this.headerLabelInnerWidthRefMap = new RefMap(() => {
              afterSize(this.handleAxisWidths);
          });
          this.headerLabelInnerHeightRefMap = new RefMap(() => {
              afterSize(this.handleHeaderHeights);
          });
          this.headerMainInnerHeightRefMap = new RefMap(() => {
              afterSize(this.handleHeaderHeights);
          });
          this.handleAllDayLabelInnerWidth = (width) => {
              this.allDayLabelInnerWidth = width;
              afterSize(this.handleAxisWidths);
          };
          this.handleAllDayLabelInnerHeight = (height) => {
              this.allDayLabelInnerHeight = height;
              afterSize(this.handleAllDayHeights);
          };
          this.handleAllDayMainInnerHeight = (height) => {
              this.allDayMainInnerHeight = height;
              afterSize(this.handleAllDayHeights);
          };
          this.slatLabelInnerWidthRefMap = new RefMap(() => {
              afterSize(this.handleAxisWidths);
          });
          this.slatLabelInnerHeightRefMap = new RefMap(() => {
              afterSize(this.handleSlatInnerHeights);
          });
          this.slatMainInnerHeightRefMap = new RefMap(() => {
              afterSize(this.handleSlatInnerHeights);
          });
          this.headerScrollerRef = m$1();
          this.allDayScrollerRef = m$1();
          this.mainScrollerRef = m$1();
          this.footScrollerRef = m$1();
          this.axisScrollerRef = m$1();
          // Sizing
          // -----------------------------------------------------------------------------------------------
          this.handleScrollerWidth = (scrollerWidth) => {
              this.setState({ scrollerWidth });
          };
          this.handleScrollerHeight = (scrollerHeight) => {
              this.setState({ scrollerHeight });
          };
          this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
              this.setState({ leftScrollbarWidth });
          };
          this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
              this.setState({ rightScrollbarWidth });
          };
          this.handleBottomScrollbarWidth = (bottomScrollbarWidth) => {
              this.setState({ bottomScrollbarWidth });
          };
          this.handleHeaderHeights = () => {
              const headerLabelInnerHeightMap = this.headerLabelInnerHeightRefMap.current;
              const headerMainInnerHeightMap = this.headerMainInnerHeightRefMap.current;
              const heights = [];
              // important to loop using 'main' because 'label' might not be tracking height if empty
              for (const [tierNum, mainHeight] of headerMainInnerHeightMap.entries()) {
                  heights[tierNum] = Math.max(headerLabelInnerHeightMap.get(tierNum) || 0, mainHeight);
              }
              const { headerTierHeights } = this.state;
              if (!isArraysEqual(headerTierHeights, heights)) {
                  this.setState({ headerTierHeights: heights });
              }
          };
          this.handleAllDayHeights = () => {
              let max = Math.max(this.allDayLabelInnerHeight, this.allDayMainInnerHeight);
              if (this.state.allDayHeight !== max) {
                  this.setState({ allDayHeight: max });
              }
          };
          this.handleSlatInnerHeights = () => {
              const slatLabelInnerHeightMap = this.slatLabelInnerHeightRefMap.current;
              const slatMainInnerHeightMap = this.slatMainInnerHeightRefMap.current;
              let max = 0;
              for (const slatLabelInnerHeight of slatLabelInnerHeightMap.values()) {
                  max = Math.max(max, slatLabelInnerHeight);
              }
              for (const slatMainInnerHeight of slatMainInnerHeightMap.values()) {
                  max = Math.max(max, slatMainInnerHeight);
              }
              if (this.state.slatInnerHeight !== max) {
                  this.setState({ slatInnerHeight: max });
              }
          };
          this.handleAxisWidths = () => {
              const headerLabelInnerWidthMap = this.headerLabelInnerWidthRefMap.current;
              const slatLabelInnerWidthMap = this.slatLabelInnerWidthRefMap.current;
              let max = this.allDayLabelInnerWidth || 0; // guard against all-day slot hidden
              for (const headerLabelInnerWidth of headerLabelInnerWidthMap.values()) {
                  max = Math.max(max, headerLabelInnerWidth);
              }
              for (const slatLableInnerWidth of slatLabelInnerWidthMap.values()) {
                  max = Math.max(max, slatLableInnerWidth);
              }
              if (this.state.axisWidth !== max) {
                  this.setState({ axisWidth: max });
              }
          };
      }
      render() {
          const { props, state, context, headerLabelInnerWidthRefMap, headerLabelInnerHeightRefMap, headerMainInnerHeightRefMap, slatLabelInnerWidthRefMap, slatLabelInnerHeightRefMap, slatMainInnerHeightRefMap, } = this;
          const { nowDate, headerTiers } = props;
          const { axisWidth } = state;
          const { options } = context;
          const verticalScrolling = !props.forPrint && !getIsHeightAuto(options);
          const stickyHeaderDates = !props.forPrint && getStickyHeaderDates(options);
          const stickyFooterScrollbar = !props.forPrint && getStickyFooterScrollbar(options);
          const colCnt = props.cells.length;
          // TODO: memo?
          const [canvasWidth, colWidth] = computeColWidth(colCnt, props.dayMinWidth, state.scrollerWidth);
          const slatCnt = props.slatMetas.length;
          const [slatHeight, slatLiquid] = computeSlatHeight(// TODO: memo?
          verticalScrolling && options.expandRows, slatCnt, state.slatInnerHeight, state.scrollerHeight);
          this.slatHeight = slatHeight;
          return (_(k$1, null,
              options.dayHeaders && (_("div", { className: [
                      'fc-timegrid-header',
                      'fc-row',
                      stickyHeaderDates ? 'fc-sticky-header' : '',
                  ].join(' ') },
                  _("div", { className: 'fc-cell fc-content-box' // a "super" cell
                      , style: { width: axisWidth } }, headerTiers.map((models, tierNum) => (_("div", { key: tierNum, className: 'fc-row', style: { height: state.headerTierHeights[tierNum] } }, props.renderHeaderLabel(// .fc-cell
                  tierNum, headerLabelInnerWidthRefMap.createRef(tierNum), // innerWidthRef
                  headerLabelInnerHeightRefMap.createRef(tierNum), // innerHeightRef
                  undefined))))),
                  _(Scroller, { horizontal: true, hideScrollbars: true, elClassNames: ['fc-cell fc-liquid'], 
                      // ^NOTE: not a good idea if ever gets left/right border
                      ref: this.headerScrollerRef },
                      _("div", { className: 'fc-content-box', style: {
                              width: canvasWidth,
                              paddingLeft: state.leftScrollbarWidth,
                              paddingRight: state.rightScrollbarWidth,
                          } }, props.headerTiers.map((cells, tierNum) => (_(HeaderRowAdvanced // .fc-row
                      , { key: tierNum, tierNum: tierNum, cells: cells, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, innerHeightRef: headerMainInnerHeightRefMap.createRef(tierNum), height: state.headerTierHeights[tierNum], colWidth: colWidth }))))))),
              options.allDaySlot && (_(k$1, null,
                  _("div", { className: 'fc-timegrid-allday fc-row' // a "super" row
                      , style: { height: state.allDayHeight } },
                      _(TimeGridAllDayLabel // .fc-cell
                      , { innerWidthRef: this.handleAllDayLabelInnerWidth, innerHeightRef: this.handleAllDayLabelInnerHeight, width: axisWidth }),
                      _(Scroller, { horizontal: true, hideScrollbars: true, elClassNames: ['fc-cell', 'fc-liquid'], 
                          // ^NOTE: not a good idea if ever gets left/right border
                          ref: this.allDayScrollerRef },
                          _("div", { className: 'fc-content-box', style: {
                                  width: canvasWidth,
                                  paddingLeft: state.leftScrollbarWidth,
                                  paddingRight: state.rightScrollbarWidth,
                              } },
                              _(TimeGridAllDayLane, { dateProfile: props.dateProfile, todayRange: props.todayRange, cells: props.cells, showDayNumbers: false, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, compact: state.scrollerWidth != null
                                      && state.scrollerWidth / props.cells.length < COMPACT_CELL_WIDTH, 
                                  // content
                                  fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, 
                                  // refs
                                  innerHeightRef: this.handleAllDayMainInnerHeight, 
                                  // dimensions
                                  colWidth: colWidth })))),
                  _("div", { className: 'fc-rowdivider' }))),
              _("div", { className: [
                      'fc-timegrid-body fc-row',
                      verticalScrolling ? 'fc-liquid' : '',
                  ].join(' ') },
                  _(Scroller, { vertical: verticalScrolling, hideScrollbars: true, elClassNames: [
                          'fc-cell',
                          'fc-flex-column',
                          'fc-content-box',
                      ], elStyle: {
                          width: axisWidth,
                      }, ref: this.axisScrollerRef },
                      _("div", { 
                          // NOTE: fc-timegrid-slots is purely for tests/old-print-view. remove somehow?
                          className: 'fc-timegrid-slots fc-grow fc-flex-column fc-rel', style: {
                              paddingBottom: state.bottomScrollbarWidth,
                          } },
                          props.slatMetas.map((slatMeta) => (_("div", { key: slatMeta.key, className: [
                                  getSlatRowClassName(slatMeta),
                                  slatLiquid ? 'fc-liquid' : ''
                              ].join(' '), style: {
                                  height: slatLiquid ? '' : slatHeight
                              } },
                              _(TimeGridSlatLabel // .fc-cell
                              , Object.assign({}, slatMeta, { width: undefined, innerWidthRef: slatLabelInnerWidthRefMap.createRef(slatMeta.key), innerHeightRef: slatLabelInnerHeightRefMap.createRef(slatMeta.key) }))))),
                          options.nowIndicator && rangeContainsMarker(props.dateProfile.currentRange, nowDate) && (_(TimeGridNowIndicatorArrow, { nowDate: nowDate, dateProfile: props.dateProfile })))),
                  _("div", { className: 'fc-cell fc-liquid fc-flex-column' // a "super" cell
                   },
                      _(Scroller, { vertical: verticalScrolling, horizontal: true, hideScrollbars: stickyFooterScrollbar /* also means height:auto, so won't need vertical scrollbars anyway */, elClassNames: [
                              verticalScrolling ? 'fc-liquid' : '',
                              'fc-flex-column',
                          ], ref: this.mainScrollerRef, widthRef: this.handleScrollerWidth, heightRef: this.handleScrollerHeight, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth, bottomScrollbarWidthRef: this.handleBottomScrollbarWidth },
                          _("div", { className: 'fc-grow fc-flex-column fc-rel', style: { width: canvasWidth } },
                              _("div", { className: 'fc-grow fc-flex-column' }, props.slatMetas.map((slatMeta) => (_("div", { key: slatMeta.key, className: [
                                      getSlatRowClassName(slatMeta),
                                      slatLiquid ? 'fc-liquid' : ''
                                  ].join(' '), style: {
                                      height: slatLiquid ? '' : slatHeight
                                  } },
                                  _(TimeGridSlatLane // .fc-cell
                                  , Object.assign({}, slatMeta, { innerHeightRef: slatMainInnerHeightRefMap.createRef(slatMeta.key) })))))),
                              _(TimeGridCols, { dateProfile: props.dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, cells: props.cells, slatCnt: slatCnt, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, className: 'fc-fill fc-liquid', 
                                  // content
                                  fgEventSegsByCol: props.fgEventSegsByCol, bgEventSegsByCol: props.bgEventSegsByCol, businessHourSegsByCol: props.businessHourSegsByCol, nowIndicatorSegsByCol: props.nowIndicatorSegsByCol, dateSelectionSegsByCol: props.dateSelectionSegsByCol, eventDragByCol: props.eventDragByCol, eventResizeByCol: props.eventResizeByCol, eventSelection: props.eventSelection, 
                                  // dimensions
                                  colWidth: colWidth, slatHeight: slatHeight }))),
                      Boolean(stickyFooterScrollbar) && (_(Scroller, { horizontal: true, elClassNames: ['fc-sticky-footer'], elStyle: {
                              marginTop: '-1px', // HACK
                          }, 
                          // ^NOTE: not a good idea if ever gets left/right border
                          ref: this.footScrollerRef },
                          _("div", { style: {
                                  width: canvasWidth,
                                  height: '1px', // HACK
                              } })))))));
      }
      // Lifecycle
      // -----------------------------------------------------------------------------------------------
      componentDidMount() {
          this.initScrollers();
          this.updateSlatHeight();
      }
      componentDidUpdate() {
          this.updateScrollers();
          this.updateSlatHeight();
      }
      componentWillUnmount() {
          this.destroyScrollers();
      }
      updateSlatHeight() {
          if (this.prevSlatHeight !== this.slatHeight) {
              setRef(this.props.slatHeightRef, this.prevSlatHeight = this.slatHeight);
          }
      }
      // Scrolling
      // -----------------------------------------------------------------------------------------------
      initScrollers() {
          const ScrollerSyncer = getScrollerSyncerClass(this.context.pluginHooks);
          this.dayScroller = new ScrollerSyncer(true); // horizontal=true
          this.timeScroller = new ScrollerSyncer(); // horizontal=false
          setRef(this.props.dayScrollerRef, this.dayScroller);
          setRef(this.props.timeScrollerRef, this.timeScroller);
          this.updateScrollers();
      }
      updateScrollers() {
          this.dayScroller.handleChildren([
              this.headerScrollerRef.current,
              this.allDayScrollerRef.current,
              this.mainScrollerRef.current,
              this.footScrollerRef.current,
          ]);
          this.timeScroller.handleChildren([
              this.axisScrollerRef.current,
              this.mainScrollerRef.current,
          ]);
      }
      destroyScrollers() {
          setRef(this.props.dayScrollerRef, null);
          setRef(this.props.timeScrollerRef, null);
      }
  }

  class TimeGridLayoutNormal extends BaseComponent {
      constructor() {
          super(...arguments);
          // refs
          this.headerLabelInnerWidthRefMap = new RefMap(() => {
              afterSize(this.handleAxisInnerWidths);
          });
          this.handleAllDayLabelInnerWidth = (width) => {
              this.allDayLabelInnerWidth = width;
              afterSize(this.handleAxisInnerWidths);
          };
          this.slatLabelInnerWidthRefMap = new RefMap(() => {
              afterSize(this.handleAxisInnerWidths);
          });
          this.slatLabelInnerHeightRefMap = new RefMap(() => {
              afterSize(this.handleSlatInnerHeights);
          });
          this.slatInnerMainHeightRefMap = new RefMap(() => {
              afterSize(this.handleSlatInnerHeights);
          });
          // Sizing
          // -----------------------------------------------------------------------------------------------
          this.handleScrollerWidth = (scrollerWidth) => {
              this.setState({ scrollerWidth });
          };
          this.handleScrollerHeight = (scrollerHeight) => {
              this.setState({ scrollerHeight });
          };
          this.handleLeftScrollbarWidth = (leftScrollbarWidth) => {
              this.setState({ leftScrollbarWidth });
          };
          this.handleRightScrollbarWidth = (rightScrollbarWidth) => {
              this.setState({ rightScrollbarWidth });
          };
          this.handleAxisInnerWidths = () => {
              const headerLabelInnerWidthMap = this.headerLabelInnerWidthRefMap.current;
              const slatLabelInnerWidthMap = this.slatLabelInnerWidthRefMap.current;
              let max = this.allDayLabelInnerWidth || 0; // guard against all-day slot hidden
              for (const headerLabelInnerWidth of headerLabelInnerWidthMap.values()) {
                  max = Math.max(max, headerLabelInnerWidth);
              }
              for (const slatLabelInnerWidth of slatLabelInnerWidthMap.values()) {
                  max = Math.max(max, slatLabelInnerWidth);
              }
              if (this.state.axisWidth !== max) {
                  this.setState({ axisWidth: max });
              }
          };
          this.handleSlatInnerHeights = () => {
              const slatLabelInnerHeightMap = this.slatLabelInnerHeightRefMap.current;
              const slatMainInnerHeightMap = this.slatInnerMainHeightRefMap.current;
              let max = 0;
              for (const slatLabelInnerHeight of slatLabelInnerHeightMap.values()) {
                  max = Math.max(max, slatLabelInnerHeight);
              }
              for (const slatInnerHeight of slatMainInnerHeightMap.values()) {
                  max = Math.max(max, slatInnerHeight);
              }
              if (this.state.slatInnerHeight !== max) {
                  this.setState({ slatInnerHeight: max });
              }
          };
      }
      render() {
          const { props, state, context, slatLabelInnerWidthRefMap, slatLabelInnerHeightRefMap, slatInnerMainHeightRefMap, headerLabelInnerWidthRefMap } = this;
          const { nowDate } = props;
          const { axisWidth } = state;
          const { options } = context;
          const verticalScrolling = !props.forPrint && !getIsHeightAuto(options);
          const stickyHeaderDates = !props.forPrint && getStickyHeaderDates(options);
          const slatCnt = props.slatMetas.length;
          const [slatHeight, slatLiquid] = computeSlatHeight(verticalScrolling && options.expandRows, slatCnt, state.slatInnerHeight, state.scrollerHeight);
          this.slatHeight = slatHeight;
          return (_(k$1, null,
              options.dayHeaders && (_("div", { className: [
                      'fc-timegrid-header',
                      'fc-rowgroup',
                      stickyHeaderDates ? 'fc-sticky-header' : '',
                  ].join(' '), style: {
                      paddingLeft: state.leftScrollbarWidth,
                      paddingRight: state.rightScrollbarWidth,
                  } }, props.headerTiers.map((cells, tierNum) => (_("div", { key: tierNum, className: 'fc-row' },
                  props.renderHeaderLabel(// .fc-cell
                  tierNum, headerLabelInnerWidthRefMap.createRef(tierNum), // innerWidthRef
                  undefined, // innerHeightRef
                  axisWidth),
                  _(HeaderRow, { tierNum: tierNum, cells: cells, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, cellGroup: true, className: 'fc-cell fc-liquid' })))))),
              options.allDaySlot && (_(k$1, null,
                  _("div", { className: 'fc-timegrid-allday fc-row', style: {
                          paddingLeft: state.leftScrollbarWidth,
                          paddingRight: state.rightScrollbarWidth,
                      } },
                      _(TimeGridAllDayLabel // .fc-cell
                      , { width: axisWidth, innerWidthRef: this.handleAllDayLabelInnerWidth }),
                      _(TimeGridAllDayLane, { dateProfile: props.dateProfile, todayRange: props.todayRange, cells: props.cells, showDayNumbers: false, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, className: 'fc-liquid fc-cell', compact: (state.scrollerWidth != null && state.axisWidth != null)
                              && (state.scrollerWidth - state.axisWidth) / props.cells.length < COMPACT_CELL_WIDTH, 
                          // content
                          fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize, eventSelection: props.eventSelection, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows })),
                  _("div", { className: 'fc-rowdivider' }))),
              _(Scroller, { vertical: verticalScrolling, elClassNames: [
                      'fc-timegrid-body',
                      'fc-rowgroup',
                      verticalScrolling ? 'fc-liquid' : '',
                  ], ref: props.timeScrollerRef, widthRef: this.handleScrollerWidth, heightRef: this.handleScrollerHeight, leftScrollbarWidthRef: this.handleLeftScrollbarWidth, rightScrollbarWidthRef: this.handleRightScrollbarWidth },
                  _("div", { className: 'fc-flex-column fc-grow fc-rel' },
                      _("div", { className: 'fc-timegrid-slots fc-flex-column fc-grow' }, props.slatMetas.map((slatMeta) => (_("div", { key: slatMeta.key, className: [
                              getSlatRowClassName(slatMeta),
                              slatLiquid ? 'fc-liquid' : ''
                          ].join(' '), style: {
                              height: slatLiquid ? '' : slatHeight
                          } },
                          _(TimeGridSlatLabel // .fc-cell
                          , Object.assign({}, slatMeta, { innerWidthRef: slatLabelInnerWidthRefMap.createRef(slatMeta.key), innerHeightRef: slatLabelInnerHeightRefMap.createRef(slatMeta.key), width: axisWidth })),
                          _(TimeGridSlatLane // .fc-cell
                          , Object.assign({}, slatMeta, { innerHeightRef: slatInnerMainHeightRefMap.createRef(slatMeta.key) })))))),
                      _("div", { className: 'fc-fill fc-flex-row' },
                          _("div", { className: 'fc-cell fc-content-box', style: { width: axisWidth } }, options.nowIndicator && rangeContainsMarker(props.dateProfile.currentRange, nowDate) && (_(TimeGridNowIndicatorArrow, { nowDate: nowDate, dateProfile: props.dateProfile }))),
                          _(TimeGridCols, { dateProfile: props.dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, cells: props.cells, slatCnt: slatCnt, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, className: 'fc-liquid fc-cell', 
                              // content
                              fgEventSegsByCol: props.fgEventSegsByCol, bgEventSegsByCol: props.bgEventSegsByCol, businessHourSegsByCol: props.businessHourSegsByCol, nowIndicatorSegsByCol: props.nowIndicatorSegsByCol, dateSelectionSegsByCol: props.dateSelectionSegsByCol, eventDragByCol: props.eventDragByCol, eventResizeByCol: props.eventResizeByCol, eventSelection: props.eventSelection, 
                              // dimensions
                              slatHeight: slatHeight }))))));
      }
      // Lifecycle
      // -----------------------------------------------------------------------------------------------
      componentDidMount() {
          this.updateSlatHeight();
      }
      componentDidUpdate() {
          this.updateSlatHeight();
      }
      updateSlatHeight() {
          if (this.prevSlatHeight !== this.slatHeight) {
              setRef(this.props.slatHeightRef, this.prevSlatHeight = this.slatHeight);
          }
      }
  }

  class TimeGridLayout extends BaseComponent {
      constructor() {
          super(...arguments);
          // memo
          this.buildSlatMetas = memoize(buildSlatMetas);
          // refs
          this.dayScrollerRef = m$1();
          this.timeScrollerRef = m$1();
          this.scrollTime = null;
          // Sizing
          // -----------------------------------------------------------------------------------------------
          this.handleSlatHeight = (slatHeight) => {
              this.slatHeight = slatHeight;
              afterSize(this.updateScroll);
          };
          this.handleTimeScroll = (scrollTime) => {
              this.scrollTime = scrollTime;
              this.updateScroll();
          };
          this.updateScroll = () => {
              const timeScroller = this.timeScrollerRef.current;
              const { scrollTime, slatHeight } = this;
              // Since updateScroll is called by handleSlatHeight, could be called with null during cleanup,
              // and the timeScroller might not exist
              if (timeScroller && scrollTime && slatHeight != null) {
                  let top = computeTimeTopFrac(scrollTime, this.props.dateProfile)
                      * (slatHeight * this.currentSlatCnt)
                      + (this.context.isRtl ? -1 : 1); // overcome border
                  if (top) {
                      top++; // overcome top border
                  }
                  timeScroller.scrollTo({ y: top });
              }
          };
          this.clearScroll = () => {
              this.scrollTime = null;
          };
      }
      render() {
          const { props, context } = this;
          const { dateProfile } = props;
          const { options, dateEnv } = context;
          const { dayMinWidth } = options;
          const slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
          this.currentSlatCnt = slatMetas.length;
          const commonLayoutProps = Object.assign(Object.assign({ dateProfile: dateProfile, nowDate: props.nowDate, todayRange: props.todayRange, cells: props.cells, slatMetas, forPrint: props.forPrint, isHitComboAllowed: props.isHitComboAllowed, 
              // header content
              headerTiers: props.headerTiers, renderHeaderLabel: props.renderHeaderLabel, renderHeaderContent: props.renderHeaderContent, getHeaderModelKey: props.getHeaderModelKey, 
              // all-day content
              fgEventSegs: props.fgEventSegs, bgEventSegs: props.bgEventSegs, businessHourSegs: props.businessHourSegs, dateSelectionSegs: props.dateSelectionSegs, eventDrag: props.eventDrag, eventResize: props.eventResize }, getAllDayMaxEventProps(options)), { 
              // timed content
              fgEventSegsByCol: props.fgEventSegsByCol, bgEventSegsByCol: props.bgEventSegsByCol, businessHourSegsByCol: props.businessHourSegsByCol, nowIndicatorSegsByCol: props.nowIndicatorSegsByCol, dateSelectionSegsByCol: props.dateSelectionSegsByCol, eventDragByCol: props.eventDragByCol, eventResizeByCol: props.eventResizeByCol, 
              // universal content
              eventSelection: props.eventSelection, 
              // refs
              timeScrollerRef: this.timeScrollerRef, slatHeightRef: this.handleSlatHeight });
          return (_(ViewContainer, { elClasses: [
                  props.className,
                  'fc-flex-column',
                  'fc-border'
              ], viewSpec: context.viewSpec }, dayMinWidth ? (_(TimeGridLayoutPannable, Object.assign({}, commonLayoutProps, { dayMinWidth: dayMinWidth, dayScrollerRef: this.dayScrollerRef }))) : (_(TimeGridLayoutNormal, Object.assign({}, commonLayoutProps)))));
      }
      // Lifecycle
      // -----------------------------------------------------------------------------------------------
      componentDidMount() {
          this.resetScroll();
          this.context.emitter.on('_timeScrollRequest', this.handleTimeScroll);
          this.timeScrollerRef.current.addScrollEndListener(this.clearScroll);
      }
      componentDidUpdate(prevProps) {
          if (prevProps.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset) {
              this.resetScroll();
          }
      }
      componentWillUnmount() {
          this.context.emitter.off('_timeScrollRequest', this.handleTimeScroll);
          this.timeScrollerRef.current.removeScrollEndListener(this.clearScroll);
      }
      // Scrolling
      // -----------------------------------------------------------------------------------------------
      resetScroll() {
          this.handleTimeScroll(this.context.options.scrollTime);
          const dayScroller = this.dayScrollerRef.current;
          if (dayScroller) {
              dayScroller.scrollTo({ x: 0 });
          }
      }
  }
  // Utils
  // -----------------------------------------------------------------------------------------------
  const AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
  function getAllDayMaxEventProps(options) {
      let { dayMaxEvents, dayMaxEventRows } = options;
      if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
          dayMaxEvents = undefined;
          dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
      }
      return { dayMaxEvents, dayMaxEventRows };
  }

  class TimeGridView extends DateComponent {
      constructor() {
          super(...arguments);
          // memo
          this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
          this.buildTimeColsModel = memoize(buildTimeColsModel);
          this.buildDayRanges = memoize(buildDayRanges);
          this.splitFgEventSegs = memoize(splitSegsByCol);
          this.splitBgEventSegs = memoize(splitSegsByCol);
          this.splitBusinessHourSegs = memoize(splitSegsByCol);
          this.splitNowIndicatorSegs = memoize(splitSegsByCol);
          this.splitDateSelectionSegs = memoize(splitSegsByCol);
          this.splitEventDrag = memoize(splitInteractionByCol);
          this.splitEventResize = memoize(splitInteractionByCol);
          // internal
          this.allDaySplitter = new AllDaySplitter();
          this.dayTableSlicer = new DayTableSlicer();
          this.dayTimeColsSlicer = new DayTimeColsSlicer();
      }
      render() {
          const { props, context } = this;
          const { dateProfile } = props;
          const { options, dateProfileGenerator } = context;
          const dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
          const dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
          const splitProps = this.allDaySplitter.splitProps(props);
          const allDayProps = this.dayTableSlicer.sliceProps(splitProps.allDay, dateProfile, options.nextDayThreshold, context, dayTableModel);
          const timedProps = this.dayTimeColsSlicer.sliceProps(splitProps.timed, dateProfile, null, context, dayRanges);
          const dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, true, // datesRepDistinctDays
          dayTableModel.colCnt);
          return (_(NowTimer, { unit: options.nowIndicator ? 'minute' : 'day' /* hacky */ }, (nowDate, todayRange) => {
              const colCnt = dayTableModel.cellRows[0].length;
              const nowIndicatorSeg = options.nowIndicator &&
                  this.dayTimeColsSlicer.sliceNowDate(nowDate, dateProfile, options.nextDayThreshold, context, dayRanges);
              const fgEventSegsByCol = this.splitFgEventSegs(timedProps.fgEventSegs, colCnt);
              const bgEventSegsByCol = this.splitBgEventSegs(timedProps.bgEventSegs, colCnt);
              const businessHourSegsByCol = this.splitBusinessHourSegs(timedProps.businessHourSegs, colCnt);
              const nowIndicatorSegsByCol = this.splitNowIndicatorSegs(nowIndicatorSeg, colCnt);
              const dateSelectionSegsByCol = this.splitDateSelectionSegs(timedProps.dateSelectionSegs, colCnt);
              const eventDragByCol = this.splitEventDrag(timedProps.eventDrag, colCnt);
              const eventResizeByCol = this.splitEventResize(timedProps.eventResize, colCnt);
              return (_(TimeGridLayout, { dateProfile: dateProfile, nowDate: nowDate, todayRange: todayRange, cells: dayTableModel.cellRows[0], forPrint: props.forPrint, className: 'fc-timegrid-view', 
                  // header content
                  headerTiers: dayTableModel.cellRows /* guaranteed to be one row */, renderHeaderLabel: (tierNum, innerWidthRef, innerHeightRef, width) => (options.weekNumbers ? (_(TimeGridWeekNumber // .fc-cell
                  , { dateProfile: dateProfile, innerWidthRef: innerWidthRef, innerHeightRef: innerHeightRef, width: width })) : (_("div", { className: 'fc-timegrid-axis fc-cell fc-content-box', style: { width } }))), renderHeaderContent: (cell, tierNum, innerHeightRef, colWidth) => (_(DateHeaderCell, Object.assign({}, cell /* for date & extraRenderProps/etc */, { dateProfile: dateProfile, todayRange: todayRange, navLink: dayTableModel.colCnt > 1, dayHeaderFormat: dayHeaderFormat, innerHeightRef: innerHeightRef, colWidth: colWidth }))), getHeaderModelKey: (cell) => cell.key, 
                  // all-day content
                  fgEventSegs: allDayProps.fgEventSegs, bgEventSegs: allDayProps.bgEventSegs, businessHourSegs: allDayProps.businessHourSegs, dateSelectionSegs: allDayProps.dateSelectionSegs, eventDrag: allDayProps.eventDrag, eventResize: allDayProps.eventResize, 
                  // timed content
                  fgEventSegsByCol: fgEventSegsByCol, bgEventSegsByCol: bgEventSegsByCol, businessHourSegsByCol: businessHourSegsByCol, nowIndicatorSegsByCol: nowIndicatorSegsByCol, dateSelectionSegsByCol: dateSelectionSegsByCol, eventDragByCol: eventDragByCol, eventResizeByCol: eventResizeByCol, 
                  // universal content
                  eventSelection: props.eventSelection }));
          }));
      }
  }

  const OPTION_REFINERS$2 = {
      allDaySlot: Boolean,
  };

  var index$2 = createPlugin({
      name: '@fullcalendar/timegrid',
      initialView: 'timeGridWeek',
      optionRefiners: OPTION_REFINERS$2,
      views: {
          timeGrid: {
              component: TimeGridView,
              usesMinMaxTime: true,
              allDaySlot: true,
              slotDuration: '00:30:00',
              slotEventOverlap: true, // a bad name. confused with overlap/constraint system
          },
          timeGridDay: {
              type: 'timeGrid',
              duration: { days: 1 },
          },
          timeGridWeek: {
              type: 'timeGrid',
              duration: { weeks: 1 },
          },
      },
  });

  var css_248z$1 = ":root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-table{border-spacing:0;width:100%}.fc-table>*>*>*{border-color:var(--fc-border-color);border-style:solid;border-width:0 0 1px;padding:0}.fc-table>:last-child>:last-child>*{border-bottom-width:0}.fc-list-day-inner,.fc-list-event-dot-cell,.fc-list-event-time,.fc-list-event-title{padding:8px 14px}.fc-direction-ltr .fc-list-event-dot-cell{padding-right:0}.fc-direction-rtl .fc-list-event-dot-cell{padding-left:0}.fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc-list-empty-inner{margin:5em 0}.fc-list-day-cell-sticky{background:var(--fc-page-bg-color);position:sticky;top:0}.fc-list-day-inner{background:var(--fc-neutral-bg-color);display:flex;justify-content:space-between}.fc-list-event.fc-event-forced-url{cursor:pointer}.fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc-list-event-dot-cell,.fc-list-event-time{white-space:nowrap;width:1px}.fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc-list-event-title a{color:inherit;text-decoration:none}.fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}";
  injectStyles(css_248z$1);

  class ListViewHeaderRow extends BaseComponent {
      constructor() {
          super(...arguments);
          this.state = {
              textId: getUniqueDomId(),
          };
      }
      render() {
          let { theme, dateEnv, options, viewApi } = this.context;
          let { cellId, dayDate, todayRange } = this.props;
          let { textId } = this.state;
          let stickyHeaderDates = !this.props.forPrint && getStickyHeaderDates(options);
          let dayMeta = getDateMeta(dayDate, todayRange);
          // will ever be falsy?
          let text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
          // will ever be falsy? also, BAD NAME "alt"
          let sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
          let renderProps = Object.assign({ date: dateEnv.toDate(dayDate), view: viewApi, textId,
              text,
              sideText, navLinkAttrs: buildNavLinkAttrs(this.context, dayDate), sideNavLinkAttrs: buildNavLinkAttrs(this.context, dayDate, 'day', false) }, dayMeta);
          // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
          return (_(ContentContainer, { elTag: "tr", elClasses: [
                  'fc-list-day',
                  ...getDayClassNames(dayMeta),
              ], elAttrs: {
                  'data-date': formatDayString(dayDate),
              }, renderProps: renderProps, generatorName: "dayHeaderContent", customGenerator: options.dayHeaderContent, defaultGenerator: renderInnerContent, classNameGenerator: options.dayHeaderClassNames, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, (InnerContent) => (_(InnerContent, { elTag: "th", elAttrs: {
                  id: cellId,
                  colSpan: 3,
                  'aria-labelledby': textId,
              }, elClasses: [
                  'fc-list-day-cell',
                  stickyHeaderDates ? 'fc-list-day-cell-sticky' : '',
              ] }))));
      }
  }
  function renderInnerContent(props) {
      return (_("div", { className: 'fc-list-day-inner' },
          props.text && (_("a", Object.assign({ id: props.textId, className: "fc-list-day-text" }, props.navLinkAttrs), props.text)),
          props.sideText && ( /* not keyboard tabbable */_("a", Object.assign({ "aria-hidden": true, className: "fc-list-day-side-text" }, props.sideNavLinkAttrs), props.sideText))));
  }

  const DEFAULT_TIME_FORMAT = createFormatter({
      hour: 'numeric',
      minute: '2-digit',
      meridiem: 'short',
  });
  class ListViewEventRow extends BaseComponent {
      render() {
          let { props, context } = this;
          let { options } = context;
          let { eventRange, timeHeaderId, eventHeaderId, dateHeaderId } = props;
          let timeFormat = options.eventTimeFormat || DEFAULT_TIME_FORMAT;
          return (_(EventContainer, Object.assign({}, props, { elTag: "tr", elClasses: [
                  'fc-list-event',
                  eventRange.def.url && 'fc-event-forced-url',
              ], defaultGenerator: () => renderEventInnerContent(eventRange, context) /* weird */, eventRange: eventRange, timeText: "", disableDragging: true, disableResizing: true }), (InnerContent, eventContentArg) => (_(k$1, null,
              buildTimeContent(eventRange, props.isStart, props.isEnd, props.segStart, props.segEnd, timeFormat, context, timeHeaderId, dateHeaderId),
              _("td", { "aria-hidden": true, className: "fc-list-event-dot-cell" },
                  _("span", { className: "fc-list-event-dot", style: {
                          borderColor: eventContentArg.borderColor || eventContentArg.backgroundColor,
                      } })),
              _(InnerContent, { elTag: "td", elClasses: ['fc-list-event-title'], elAttrs: { headers: `${eventHeaderId} ${dateHeaderId}` } })))));
      }
  }
  function renderEventInnerContent(eventRange, context) {
      let interactiveAttrs = getEventRangeAnchorAttrs(eventRange, context);
      return (_("a", Object.assign({}, interactiveAttrs), eventRange.def.title));
  }
  function buildTimeContent(eventRange, isStart, isEnd, segStart, segEnd, timeFormat, context, timeHeaderId, dateHeaderId) {
      let { options } = context;
      if (options.displayEventTime !== false) {
          let eventDef = eventRange.def;
          let eventInstance = eventRange.instance;
          let doAllDay = false;
          let timeText;
          if (eventDef.allDay) {
              doAllDay = true;
          }
          else if (isMultiDayRange(eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
              if (isStart) {
                  timeText = buildEventRangeTimeText(eventRange, timeFormat, context, null, null, eventInstance.range.start, segEnd);
              }
              else if (isEnd) {
                  timeText = buildEventRangeTimeText(eventRange, timeFormat, context, null, null, segStart, eventInstance.range.end);
              }
              else {
                  doAllDay = true;
              }
          }
          else {
              timeText = buildEventRangeTimeText(eventRange, timeFormat, context, null, null, segStart, segEnd);
          }
          if (doAllDay) {
              let renderProps = {
                  text: context.options.allDayText,
                  view: context.viewApi,
              };
              return (_(ContentContainer, { elTag: "td", elClasses: ['fc-list-event-time'], elAttrs: {
                      headers: `${timeHeaderId} ${dateHeaderId}`,
                  }, renderProps: renderProps, generatorName: "allDayContent", customGenerator: options.allDayContent, defaultGenerator: renderAllDayInner, classNameGenerator: options.allDayClassNames, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }));
          }
          return (_("td", { className: "fc-list-event-time" }, timeText));
      }
      return null;
  }
  function renderAllDayInner(renderProps) {
      return renderProps.text;
  }

  /*
  Responsible for the scroller, and forwarding event-related actions into the "grid".
  */
  class ListView extends DateComponent {
      constructor() {
          super(...arguments);
          this.computeDateVars = memoize(computeDateVars);
          this.eventStoreToSegs = memoize(this._eventStoreToSegs);
          this.state = {
              timeHeaderId: getUniqueDomId(),
              eventHeaderId: getUniqueDomId(),
              dateHeaderIdRoot: getUniqueDomId(),
          };
          this.setRootEl = (rootEl) => {
              if (rootEl) {
                  this.context.registerInteractiveComponent(this, {
                      el: rootEl,
                  });
              }
              else {
                  this.context.unregisterInteractiveComponent(this);
              }
          };
      }
      render() {
          let { props, context } = this;
          let { options } = context;
          let { dayDates, dayRanges } = this.computeDateVars(props.dateProfile);
          let eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
          let verticalScrolling = !props.forPrint && !getIsHeightAuto(options);
          return (_(ViewContainer, { elRef: this.setRootEl, elClasses: [
                  'fc-list-view',
                  'fc-flex-column',
                  'fc-border',
              ], viewSpec: context.viewSpec },
              _(Scroller // TODO: don't need heavyweight component
              , { vertical: verticalScrolling, elClassNames: [verticalScrolling ? 'fc-liquid' : ''] }, eventSegs.length > 0 ?
                  this.renderSegList(eventSegs, dayDates) :
                  this.renderEmptyMessage())));
      }
      renderEmptyMessage() {
          let { options, viewApi } = this.context;
          let renderProps = {
              text: options.noEventsText,
              view: viewApi,
          };
          return (_(ContentContainer, { elTag: "div", elClasses: ['fc-list-empty'], renderProps: renderProps, generatorName: "noEventsContent", customGenerator: options.noEventsContent, defaultGenerator: renderNoEventsInner, classNameGenerator: options.noEventsClassNames, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, (InnerContent) => (_(InnerContent, { elTag: "div", elClasses: ['fc-list-empty-inner'] }))));
      }
      renderSegList(allSegs, dayDates) {
          let { options } = this.context;
          let { timeHeaderId, eventHeaderId, dateHeaderIdRoot } = this.state;
          let segsByDay = groupSegsByDay(allSegs); // sparse array
          return (_(NowTimer, { unit: "day" }, (nowDate, todayRange) => {
              let innerNodes = [];
              for (let dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                  let daySegs = segsByDay[dayIndex];
                  if (daySegs) { // sparse array, so might be undefined
                      let dayStr = formatDayString(dayDates[dayIndex]);
                      let dateHeaderId = dateHeaderIdRoot + '-' + dayStr;
                      // append a day header
                      innerNodes.push(_(ListViewHeaderRow, { key: dayStr, forPrint: this.props.forPrint, cellId: dateHeaderId, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                      daySegs = sortEventSegs(daySegs, options.eventOrder);
                      for (let seg of daySegs) {
                          innerNodes.push(_(ListViewEventRow, Object.assign({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, eventRange: seg.eventRange, isStart: seg.isStart, isEnd: seg.isEnd, segStart: seg.start, segEnd: seg.end, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, timeHeaderId: timeHeaderId, eventHeaderId: eventHeaderId, dateHeaderId: dateHeaderId }, getEventRangeMeta(seg.eventRange, todayRange, nowDate))));
                      }
                  }
              }
              return (_("table", { className: 'fc-table' },
                  _("thead", { className: 'fc-offscreen' },
                      _("tr", null,
                          _("th", { scope: "col", id: timeHeaderId }, options.timeHint),
                          _("th", { scope: "col", "aria-hidden": true }),
                          _("th", { scope: "col", id: eventHeaderId }, options.eventHint))),
                  _("tbody", null, innerNodes)));
          }));
      }
      _eventStoreToSegs(eventStore, eventUiBases, dayRanges) {
          return this.eventRangesToSegs(sliceEventStore(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
      }
      eventRangesToSegs(eventRanges, dayRanges) {
          let segs = [];
          for (let eventRange of eventRanges) {
              segs.push(...this.eventRangeToSegs(eventRange, dayRanges));
          }
          return segs;
      }
      eventRangeToSegs(eventRange, dayRanges) {
          let { dateEnv } = this.context;
          let { nextDayThreshold } = this.context.options;
          let range = eventRange.range;
          let allDay = eventRange.def.allDay;
          let dayIndex;
          let segRange;
          let seg;
          let segs = [];
          for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
              segRange = intersectRanges(range, dayRanges[dayIndex]);
              if (segRange) {
                  seg = {
                      eventRange,
                      start: segRange.start,
                      end: segRange.end,
                      isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                      isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                      dayIndex,
                  };
                  segs.push(seg);
                  // detect when range won't go fully into the next day,
                  // and mutate the latest seg to the be the end.
                  if (!seg.isEnd && !allDay &&
                      dayIndex + 1 < dayRanges.length &&
                      range.end <
                          dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                      seg.end = range.end;
                      seg.isEnd = true;
                      break;
                  }
              }
          }
          return segs;
      }
  }
  function renderNoEventsInner(renderProps) {
      return renderProps.text;
  }
  function computeDateVars(dateProfile) {
      let dayStart = startOfDay(dateProfile.renderRange.start);
      let viewEnd = dateProfile.renderRange.end;
      let dayDates = [];
      let dayRanges = [];
      while (dayStart < viewEnd) {
          dayDates.push(dayStart);
          dayRanges.push({
              start: dayStart,
              end: addDays(dayStart, 1),
          });
          dayStart = addDays(dayStart, 1);
      }
      return { dayDates, dayRanges };
  }
  // Returns a sparse array of arrays, segs grouped by their dayIndex
  function groupSegsByDay(segs) {
      let segsByDay = []; // sparse array
      let i;
      let seg;
      for (i = 0; i < segs.length; i += 1) {
          seg = segs[i];
          (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
              .push(seg);
      }
      return segsByDay;
  }

  const OPTION_REFINERS$1 = {
      listDayFormat: createFalsableFormatter,
      listDaySideFormat: createFalsableFormatter,
      noEventsClassNames: identity,
      noEventsContent: identity,
      noEventsDidMount: identity,
      noEventsWillUnmount: identity,
      // noEventsText is defined in base options
  };
  function createFalsableFormatter(input) {
      return input === false ? null : createFormatter(input);
  }

  var index$1 = createPlugin({
      name: '@fullcalendar/list',
      optionRefiners: OPTION_REFINERS$1,
      views: {
          list: {
              component: ListView,
              buttonTextKey: 'list',
              listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' }, // like "January 1, 2016"
          },
          listDay: {
              type: 'list',
              duration: { days: 1 },
              listDayFormat: { weekday: 'long' }, // day-of-week is all we need. full date is probably in headerToolbar
          },
          listWeek: {
              type: 'list',
              duration: { weeks: 1 },
              listDayFormat: { weekday: 'long' },
              listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
          },
          listMonth: {
              type: 'list',
              duration: { month: 1 },
              listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
          },
          listYear: {
              type: 'list',
              duration: { year: 1 },
              listDaySideFormat: { weekday: 'long' }, // day-of-week is nice-to-have
          },
      },
  });

  class SingleMonth extends DateComponent {
      constructor() {
          super(...arguments);
          this.slicer = new DayTableSlicer();
          // memo
          this.buildDayTableModel = memoize(buildDayTableModel);
          this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
      }
      render() {
          const { props, context } = this;
          const { dateProfile, forPrint } = props;
          const { options } = context;
          const dayTableModel = this.buildDayTableModel(dateProfile, context.dateProfileGenerator);
          const slicedProps = this.slicer.sliceProps(props, dateProfile, options.nextDayThreshold, context, dayTableModel);
          // ensure single-month has aspect ratio
          const tableHeight = typeof props.width === 'number'
              ? props.width / options.aspectRatio
              : null;
          const rowCnt = dayTableModel.cellRows.length;
          const rowHeight = tableHeight != null ? tableHeight / rowCnt : null;
          const dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, false, // datesRepDistinctDays
          dayTableModel.colCnt);
          // TODO: tell children if we know dimensions are unstable?
          return (_("div", { "data-date": props.isoDateStr, role: "grid", className: "fc-multimonth-month fc-grow", style: { width: props.width } },
              _("div", { className: "fc-multimonth-header", style: { marginBottom: rowHeight }, role: "presentation" },
                  _("div", { className: "fc-multimonth-title" }, context.dateEnv.format(props.dateProfile.currentRange.start, props.titleFormat)),
                  _("div", { className: 'fc-multimonth-header-row fc-flex-row' }, dayTableModel.headerDates.map((headerDate) => (_(DayOfWeekHeaderCell, { key: headerDate.getUTCDay(), dow: headerDate.getUTCDay(), dayHeaderFormat: dayHeaderFormat, colWidth: undefined }))))),
              _("div", { className: 'fc-multimonth-body fc-flex-column', style: {
                      marginTop: -rowHeight,
                      height: forPrint ? '' : tableHeight,
                  } },
                  _(DayGridRows // .fc-grow
                  , { dateProfile: props.dateProfile, todayRange: props.todayRange, cellRows: dayTableModel.cellRows, forPrint: props.forPrint, 
                      // content
                      fgEventSegs: slicedProps.fgEventSegs, bgEventSegs: slicedProps.bgEventSegs, businessHourSegs: slicedProps.businessHourSegs, dateSelectionSegs: slicedProps.dateSelectionSegs, eventDrag: slicedProps.eventDrag, eventResize: slicedProps.eventResize, eventSelection: slicedProps.eventSelection }))));
      }
  }

  class MultiMonthView extends DateComponent {
      constructor() {
          super(...arguments);
          // memo
          this.splitDateProfileByMonth = memoize(splitDateProfileByMonth);
          this.buildMonthFormat = memoize(buildMonthFormat);
          // ref
          this.scrollerRef = m$1();
          this.innerElRef = m$1();
          // internal
          this.scrollDate = null;
          // Sizing
          // -----------------------------------------------------------------------------------------------
          this.handleWidth = (width) => {
              let { xGap, xPadding } = this.state;
              // for first time, assume 2 columns and query gap/padding
              if (xGap == null) {
                  const innerEl = this.innerElRef.current;
                  const children = innerEl.childNodes;
                  if (children.length > 1) {
                      const box0 = children[0].getBoundingClientRect();
                      const box1 = children[1].getBoundingClientRect();
                      let xSpan;
                      [xGap, xSpan] = [
                          Math.abs(box0.left - box1.right),
                          Math.abs(box0.right - box1.left),
                      ].sort(compareNumbers);
                      xPadding = width - xSpan;
                  }
              }
              this.setState({ width, xGap, xPadding });
          };
          this.updateScroll = () => {
              if (this.scrollDate != null && this.state.width != null) {
                  const scroller = this.scrollerRef.current;
                  const innerEl = this.innerElRef.current;
                  const monthEl = innerEl.querySelector(`[data-date="${formatIsoMonthStr(this.scrollDate)}"]`);
                  const scrollTop = Math.ceil(// for fractions, err on the side of scrolling further
                  monthEl.getBoundingClientRect().top -
                      innerEl.getBoundingClientRect().top);
                  scroller.scrollTo({ y: scrollTop });
              }
          };
          this.clearScroll = () => {
              this.scrollDate = null;
          };
      }
      render() {
          const { context, props, state } = this;
          const { options } = context;
          const verticalScrolling = !props.forPrint && !getIsHeightAuto(options);
          const colCount = state.width == null
              ? 2
              : Math.min(options.multiMonthMaxColumns, Math.floor((state.width - state.xPadding + state.xGap) /
                  (options.multiMonthMinWidth + state.xGap)));
          const monthWidth = state.width == null
              ? '34%' // will expand. now small enough to be 1/3. for allowing gap
              : Math.floor(// exact values can cause expansion to other rows
              (state.width - state.xPadding - (state.xGap * (colCount - 1))) /
                  colCount);
          const monthDateProfiles = this.splitDateProfileByMonth(context.dateProfileGenerator, props.dateProfile, context.dateEnv, options.fixedWeekCount, options.showNonCurrentDates);
          const monthTitleFormat = this.buildMonthFormat(options.multiMonthTitleFormat, monthDateProfiles);
          const rootClassNames = [
              'fc-multimonth-view',
              (colCount === 1) ?
                  'fc-multimonth-singlecol' :
                  'fc-multimonth-multicol',
              'fc-flex-column',
              'fc-border', // BAD to mix this with size-listening?
          ];
          return (_(NowTimer, { unit: "day" }, (nowDate, todayRange) => (_(ViewContainer, { elClasses: rootClassNames, viewSpec: context.viewSpec },
              _(Scroller, { vertical: verticalScrolling, elClassNames: [
                      verticalScrolling ? 'fc-liquid' : '',
                  ], ref: this.scrollerRef, widthRef: this.handleWidth },
                  _("div", { ref: this.innerElRef, className: 'fc-multimonth-inner' }, monthDateProfiles.map((monthDateProfile, i) => {
                      const monthStr = formatIsoMonthStr(monthDateProfile.currentRange.start);
                      return (_(SingleMonth, Object.assign({}, props, { key: monthStr, todayRange: todayRange, isoDateStr: monthStr, titleFormat: monthTitleFormat, dateProfile: monthDateProfile, width: monthWidth })));
                  })))))));
      }
      // Lifecycle
      // -----------------------------------------------------------------------------------------------
      componentDidMount() {
          this.resetScroll();
          this.scrollerRef.current.addScrollEndListener(this.clearScroll);
      }
      componentDidUpdate(prevProps) {
          if (prevProps.dateProfile !== this.props.dateProfile && this.context.options.scrollTimeReset) {
              this.resetScroll();
          }
          else {
              // NOT optimal to update so often
              // TODO: isolate dependencies of scroll coordinate
              this.updateScroll();
          }
      }
      componentWillUnmount() {
          this.scrollerRef.current.removeScrollEndListener(this.clearScroll);
      }
      // Scrolling
      // -----------------------------------------------------------------------------------------------
      resetScroll() {
          this.scrollDate = this.props.dateProfile.currentDate;
          this.updateScroll();
      }
  }
  // date profile
  // -------------------------------------------------------------------------------------------------
  const oneMonthDuration = createDuration(1, 'month');
  function splitDateProfileByMonth(dateProfileGenerator, dateProfile, dateEnv, fixedWeekCount, showNonCurrentDates) {
      const { start, end } = dateProfile.currentRange;
      let monthStart = start;
      const monthDateProfiles = [];
      while (monthStart.valueOf() < end.valueOf()) {
          const monthEnd = dateEnv.add(monthStart, oneMonthDuration);
          const currentRange = {
              // yuck
              start: dateProfileGenerator.skipHiddenDays(monthStart),
              end: dateProfileGenerator.skipHiddenDays(monthEnd, -1, true),
          };
          let renderRange = buildDayTableRenderRange({
              currentRange,
              snapToWeek: true,
              fixedWeekCount,
              dateEnv,
          });
          renderRange = {
              // yuck
              start: dateProfileGenerator.skipHiddenDays(renderRange.start),
              end: dateProfileGenerator.skipHiddenDays(renderRange.end, -1, true),
          };
          const activeRange = dateProfile.activeRange ?
              intersectRanges(dateProfile.activeRange, showNonCurrentDates ? renderRange : currentRange) :
              null;
          monthDateProfiles.push({
              currentDate: dateProfile.currentDate,
              isValid: dateProfile.isValid,
              validRange: dateProfile.validRange,
              renderRange,
              activeRange,
              currentRange,
              currentRangeUnit: 'month',
              isRangeAllDay: true,
              dateIncrement: dateProfile.dateIncrement,
              slotMinTime: dateProfile.slotMaxTime,
              slotMaxTime: dateProfile.slotMinTime,
          });
          monthStart = monthEnd;
      }
      return monthDateProfiles;
  }
  // date formatting
  // -------------------------------------------------------------------------------------------------
  const YEAR_MONTH_FORMATTER = createFormatter({ year: 'numeric', month: 'long' });
  const YEAR_FORMATTER = createFormatter({ month: 'long' });
  function buildMonthFormat(formatOverride, monthDateProfiles) {
      return formatOverride ||
          ((monthDateProfiles[0].currentRange.start.getUTCFullYear() !==
              monthDateProfiles[monthDateProfiles.length - 1].currentRange.start.getUTCFullYear())
              ? YEAR_MONTH_FORMATTER
              : YEAR_FORMATTER);
  }

  const OPTION_REFINERS = {
      multiMonthTitleFormat: createFormatter,
      multiMonthMaxColumns: Number,
      multiMonthMinWidth: Number,
  };

  var css_248z = ".fc-multimonth-inner{display:flex;flex-wrap:wrap}.fc-multimonth-multicol .fc-multimonth-month{margin:0 1.2em 1.2em}.fc-multimonth-multicol .fc-multimonth-title{padding:1em 0}.fc-multimonth-singlecol .fc-multimonth-title{padding:.5em 0}.fc-multimonth-title{font-size:1.2em;font-weight:700;text-align:center}.fc-multimonth-header-row{border-top:1px solid var(--fc-border-color)}.fc-multimonth-header-row,.fc-multimonth-month{border-bottom:1px solid var(--fc-border-color)}.fc-multimonth-singlecol .fc-multimonth-month:last-child{border-bottom:0}.fc-multimonth-multicol .fc-multimonth-body,.fc-multimonth-multicol .fc-multimonth-header-row{border-left:1px solid var(--fc-border-color);border-right:1px solid var(--fc-border-color);font-size:.9em;line-height:1}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-header{background:var(--fc-page-bg-color);position:sticky;top:0;z-index:2}.fc-media-screen .fc-multimonth-singlecol .fc-multimonth-body{position:relative;z-index:1}";
  injectStyles(css_248z);

  var index = createPlugin({
      name: '@fullcalendar/multimonth',
      initialView: 'multiMonthYear',
      optionRefiners: OPTION_REFINERS,
      views: {
          multiMonth: {
              component: MultiMonthView,
              dateProfileGeneratorClass: TableDateProfileGenerator,
              multiMonthMinWidth: 350,
              multiMonthMaxColumns: 3,
          },
          multiMonthYear: {
              type: 'multiMonth',
              duration: { years: 1 },
              fixedWeekCount: true,
              showNonCurrentDates: false,
          },
      },
  });

  globalPlugins.push(index$4, index$3, index$2, index$1, index);

  exports.Calendar = Calendar;
  exports.Draggable = ExternalDraggable;
  exports.Internal = internal;
  exports.JsonRequestError = JsonRequestError;
  exports.Preact = preact;
  exports.ThirdPartyDraggable = ThirdPartyDraggable;
  exports.createPlugin = createPlugin;
  exports.formatDate = formatDate;
  exports.formatRange = formatRange;
  exports.globalLocales = globalLocales;
  exports.globalPlugins = globalPlugins;
  exports.sliceEvents = sliceEvents;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
