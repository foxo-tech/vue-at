module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t){e.exports=function(e,t,n,r){var o,i=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(o=e,i=e.default);var s="function"==typeof i?i.options:i;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var l=s.computed||(s.computed={});Object.keys(r).forEach(function(e){var t=r[e];l[e]=function(){return t}})}return{esModule:o,exports:i,options:s}}},function(e,t,n){"use strict";function r(){var e=window.getSelection();if(e&&0<e.rangeCount)return e.getRangeAt(0)}t.g=function(e,t){if(e.scrollIntoViewIfNeeded)e.scrollIntoViewIfNeeded(!1);else{var n=e.offsetTop-t.scrollTop;(0>n||n>t.offsetHeight-e.offsetHeight)&&((t=t||e.parentElement).scrollTop=e.offsetTop)}},t.a=function(e){var t=window.getSelection();t&&(t.removeAllRanges(),t.addRange(e))},t.f=r,t.c=function(e,t){return t.map(function(t){return{at:t,index:e.lastIndexOf(t)}}).reduce(function(e,t){return e.index>t.index?e:t})},t.d=function(e,t){t=t||window;for(var n={top:e.offsetTop,left:e.offsetLeft},r=e.offsetParent;null!=r&&r!=t;)n.left+=r.offsetLeft,n.top+=r.offsetTop,r=r.offsetParent;return n},t.b=function(e,t){do{if(t(e))return e}while(e=e&&e.parentNode)},t.e=function(){var e=r();if(e){var t=e.cloneRange();return t.collapse(!0),t.setStart(t.endContainer,0),t}}},function(e,t,n){var r=n(0)(n(3),null,null,null);e.exports=r.exports},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=n(4),i=n.n(o);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function s(e){for(var t,n=1;n<arguments.length;n++)t=null==arguments[n]?{}:arguments[n],n%2?a(Object(t),!0).forEach(function(n){l(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))});return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default={name:"At",mixins:[i.a],props:{value:{type:String,default:null},at:{type:String,default:null},ats:{type:Array,default:function(){return["@"]}},suffix:{type:String,default:" "},loop:{type:Boolean,default:!0},allowSpaces:{type:Boolean,default:!0},tabSelect:{type:Boolean,default:!1},avoidEmail:{type:Boolean,default:!0},showUnique:{type:Boolean,default:!0},hoverSelect:{type:Boolean,default:!0},members:{type:Array,default:function(){return[]}},nameKey:{type:String,default:""},filterMatch:{type:Function,default:function(e,t){return-1<e.toLowerCase().indexOf(t.toLowerCase())}},deleteMatch:{type:Function,default:function(e,t,n){return t===e+n}},scrollRef:{type:String,default:""}},data:function(){return{bindsValue:null!=this.value,customsEmbedded:!1,hasComposition:!1,atwho:null}},computed:{atItems:function(){return this.at?[this.at]:this.ats},currentItem:function(){return this.atwho?this.atwho.list[this.atwho.cur]:""},style:function(){if(this.atwho){var e=this.atwho,t=(e.list,e.cur,e.x),n=e.y,o=this.$refs.wrap;if(o){var i=Object(r.d)(o),a=this.scrollRef?document.querySelector(this.scrollRef).scrollLeft:0,s=this.scrollRef?document.querySelector(this.scrollRef).scrollTop:0;return{left:t+a+window.pageXOffset-i.left+"px",top:n+s+window.pageYOffset-i.top+"px"}}}return null}},watch:{"atwho.cur":function(e){var t=this;null!=e&&this.$nextTick(function(){t.scrollToCur()})},members:function(){this.handleInput(!0)},value:function(e){this.bindsValue&&this.handleValueUpdate(e)}},mounted:function(){this.$scopedSlots.embeddedItem&&(this.customsEmbedded=!0),this.bindsValue&&this.handleValueUpdate(this.value)},methods:{itemName:function(e){var t=this.nameKey;return t?e[t]:e},isCur:function(e){return e===this.atwho.cur},handleValueUpdate:function(e){var t=this.$el.querySelector("[contenteditable]");e!==t.innerHTML&&(t.innerHTML=e,this.dispatchInput())},dispatchInput:function(){var e=this.$el.querySelector("[contenteditable]"),t=new Event("input",{bubbles:!0});e.dispatchEvent(t)},handleItemHover:function(e){this.hoverSelect&&this.selectByMouse(e)},handleItemClick:function(e){this.selectByMouse(e),this.insertItem()},handleDelete:function(e){var t=Object(r.e)();if(t){if(this.customsEmbedded&&1<=t.endOffset){var n=t.endContainer.childNodes[t.endOffset]||t.endContainer.childNodes[t.endOffset-1];if(!n||n.nodeType===Node.TEXT_NODE&&!/^\s?$/.test(n.data))return;n.nodeType===Node.TEXT_NODE?n.previousSibling&&(n=n.previousSibling):n.previousElementSibling&&(n=n.previousElementSibling);var o,i=[].slice.call(n.childNodes);if((i=[].reverse.call(i)).unshift(n),[].some.call(i,function(e){if(e.getAttribute&&null!=e.getAttribute("data-at-embedded"))return o=e,!0}),o){e.preventDefault(),e.stopPropagation();var a=Object(r.f)();a&&(a.setStartBefore(o),a.deleteContents(),Object(r.a)(a),this.handleInput())}return}var s=this.atItems,l=this.members,u=this.suffix,c=this.deleteMatch,d=this.itemName,f=t.toString(),h=Object(r.c)(f,s),p=h.at,m=h.index;if(-1<m){var v=f.slice(m+p.length);if(l.some(function(e){var t=d(e);return c(t,v,u)})){e.preventDefault(),e.stopPropagation();var b=Object(r.f)();b&&(b.setStart(b.endContainer,m),b.deleteContents(),Object(r.a)(b),this.handleInput())}}}},handleKeyDown:function(e){var t=this;if(this.atwho){if(38===e.keyCode||40===e.keyCode)return void(e.metaKey||e.ctrlKey||(e.preventDefault(),e.stopPropagation(),this.selectByKeyboard(e)));if(13===e.keyCode||this.tabSelect&&9===e.keyCode)return this.insertItem(),e.preventDefault(),void e.stopPropagation();if(27===e.keyCode)return void this.closePanel()}(48<=e.keyCode&&90>=e.keyCode||8===e.keyCode)&&setTimeout(function(){t.handleInput()},50),8===e.keyCode&&this.handleDelete(e)},handleCompositionStart:function(){this.hasComposition=!0},handleCompositionEnd:function(){this.hasComposition=!1,this.handleInput()},handleInput:function(e){if(!this.hasComposition){var t=this.$el.querySelector("[contenteditable]");this.$emit("input",t.innerHTML);var n=Object(r.e)();if(n){if(e)for(var o=n.commonAncestorContainer;o&&o!==this.$el;)if(!(o=o.parentElement))return;var i=this.atItems,a=this.avoidEmail,s=this.allowSpaces,l=this.showUnique,u=!0,c=n.toString(),d=Object(r.c)(c,i),f=d.at,h=d.index;0>h&&(u=!1);var p=c[h-1],m=c.slice(h+f.length,c.length);if(a&&/^[a-z0-9]$/i.test(p)&&(u=!1),!s&&/\s/.test(m)&&(u=!1),/^\s/.test(m)&&(u=!1),u){var v=this.members,b=this.filterMatch,g=this.itemName;!e&&m&&this.$emit("at",m);var w=v.filter(function(e){var t=g(e);return b(t,m,f)});if(u=!1,w.length&&(u=!0,!l)){var y=w[0];m===g(y)&&(u=!1)}u?this.openPanel(w,n,h,f):this.closePanel()}else this.closePanel()}}},closePanel:function(){this.atwho&&(this.atwho=null)},openPanel:function(e,t,n,r){var o=this,i=function(){var i=t.cloneRange();i.setStart(i.endContainer,n+r.length);var a=i.getClientRects()[0];o.atwho={range:t,offset:n,list:e,x:a.left,y:a.top-4,cur:0}};this.atwho?i():setTimeout(i,10)},scrollToCur:function(){var e=this.$refs.cur[0],t=e.parentElement.parentElement;Object(r.g)(e,t)},selectByMouse:function(e){var t=+Object(r.b)(e.target,function(e){return e.getAttribute("data-index")}).getAttribute("data-index");this.atwho=s(s({},this.atwho),{},{cur:t})},selectByKeyboard:function(e){var t=38===e.keyCode?-1:1,n=this.atwho,r=n.cur,o=n.list,i=this.loop?(r+t+o.length)%o.length:Math.max(0,Math.min(r+t,o.length-1));this.atwho=s(s({},this.atwho),{},{cur:i})},insertText:function(e,t){t.deleteContents();var n=t.endContainer;if(n.nodeType===Node.TEXT_NODE){var o=t.endOffset;n.data=n.data.slice(0,o)+e+n.data.slice(o),t.setEnd(n,o+e.length)}else{var i=document.createTextNode(e);t.insertNode(i),t.setEndAfter(i)}t.collapse(!1),Object(r.a)(t),this.dispatchInput()},insertHtml:function(e,t){t.deleteContents();var n=t.endContainer,o=document.createElement("span");if(o.appendChild(document.createTextNode(" ")),o.appendChild(this.htmlToElement(e)),o.appendChild(document.createTextNode(" ")),o.setAttribute("data-at-embedded",""),o.setAttribute("contenteditable",!1),n.nodeType===Node.TEXT_NODE){var i=t.endOffset,a=n.splitText(i);n.parentNode.insertBefore(o,a),t.setEndBefore(a)}else{var s=document.createTextNode(suffix);t.insertNode(o),t.setEndAfter(o),t.insertNode(s),t.setEndAfter(s)}t.collapse(!1),Object(r.a)(t)},insertItem:function(){var e=this.atwho,t=e.range,n=(e.offset,e.list),o=e.cur,i=this.suffix,a=this.atItems,s=this.itemName,l=this.customsEmbedded,u=t.cloneRange(),c=t.toString(),d=Object(r.c)(c,a),f=d.at,h=d.index,p=l?h:h+f.length;u.setStart(u.endContainer,p),Object(r.a)(u),Object(r.a)(u);var m=n[o];if(l){var v=this.$refs.embeddedItem.firstChild.innerHTML;this.insertHtml(v,u)}else{var b=s(m)+i;this.insertText(b,u)}this.$emit("insert",m),this.handleInput()},htmlToElement:function(e){var t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild}}}},function(e,t,n){n(5);var r=n(0)(null,n(10),null,null);e.exports=r.exports},function(e,t,n){var r=n(6);r.__esModule&&(r=r.default),"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);(0,n(8).default)("3f72b52b",r,!0,{})},function(e,t,n){(e.exports=n(7)(!1)).push([e.i,".atwho-view{color:#000;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.1);min-width:120px;z-index:11110!important}.atwho-ul{list-style:none}.atwho-li{display:block}.atwho-view{border-radius:6px;box-shadow:0 0 10px 0 hsla(211,9%,44%,.5)}.atwho-ul{max-height:135px;padding:0;margin:0}.atwho-li{box-sizing:border-box;height:27px;padding:0 12px;white-space:nowrap;display:flex;align-items:center}.atwho-li span{overflow:hidden;text-overflow:ellipsis}.atwho-cur{background:#5bb8ff;color:#fff}.atwho-wrap{position:relative}.atwho-panel{position:absolute}.atwho-inner{position:relative}.atwho-view{position:absolute;bottom:0;left:-.8em;cursor:default;background-color:hsla(0,0%,100%,.94);min-width:140px;max-width:180px;max-height:200px;overflow-y:auto}.atwho-view::-webkit-scrollbar{width:11px;height:11px}.atwho-view::-webkit-scrollbar-track{background-color:#f5f5f5}.atwho-view::-webkit-scrollbar-thumb{min-height:36px;border:2px solid transparent;border-top:3px solid transparent;border-bottom:3px solid transparent;background-clip:padding-box;border-radius:7px;background-color:#c4c4c4}",""])},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n,o){u=n,d=o||{};var a=Object(r.a)(e,t);return p(a),function(t){for(var n=[],o=0;o<a.length;o++){var s=a[o];(l=i[s.id]).refs--,n.push(l)}for(t?p(a=Object(r.a)(e,t)):a=[],o=0;o<n.length;o++){var l;if(0===(l=n[o]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete i[l.id]}}}};var r=n(9),o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=o&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",h="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(e){for(var t=0;t<e.length;t++){var n=e[t],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(v(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(v(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var e=document.createElement("style");return e.type="text/css",a.appendChild(e),e}function v(e){var t,n,r=document.querySelector("style["+f+'~="'+e.id+'"]');if(r){if(u)return c;r.parentNode.removeChild(r)}if(h){var o=l++;r=s||(s=m()),t=w.bind(null,r,o,!1),n=w.bind(null,r,o,!0)}else r=m(),t=function(e,t){var n=t.css,r=t.media,o=t.sourceMap;r&&e.setAttribute("media",r);d.ssrId&&e.setAttribute(f,t.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}var b,g=(b=[],function(e,t){return b[e]=t,b.filter(Boolean).join("\n")});function w(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}},function(e,t,n){"use strict";t.a=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],a=i[0],s=i[1],l=i[2],u=i[3],c={id:e+":"+o,css:s,media:l,sourceMap:u};r[a]?r[a].parts.push(c):n.push(r[a]={id:a,parts:[c]})}return n}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrap",staticClass:"atwho-wrap",on:{compositionstart:e.handleCompositionStart,compositionend:e.handleCompositionEnd,input:function(t){return e.handleInput()},"!keydown":function(t){return e.handleKeyDown.apply(null,arguments)}}},[e.atwho?n("div",{staticClass:"atwho-panel",style:e.style},[n("div",{staticClass:"atwho-inner"},[n("div",{staticClass:"atwho-view"},[n("ul",{staticClass:"atwho-ul"},e._l(e.atwho.list,function(t,r){return n("li",{key:r,ref:e.isCur(r)&&"cur",refInFor:!0,staticClass:"atwho-li",class:e.isCur(r)&&"atwho-cur",attrs:{"data-index":r},on:{mouseenter:e.handleItemHover,click:e.handleItemClick}},[e._t("item",function(){return[n("span",{domProps:{textContent:e._s(e.itemName(t))}})]},{item:t})],2)}),0)])])]):e._e(),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"embeddedItem"},[e._t("embeddedItem",null,{current:e.currentItem})],2),e._v(" "),e._t("default")],2)},staticRenderFns:[]}}]);
//# sourceMappingURL=vue-at.js.map