(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AtTextarea"] = factory(require("vue"));
	else
		root["AtTextarea"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), (__WEBPACK_EXTERNAL_MODULE__203__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 118:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".atwho-view{color:#000;border-radius:3px;box-shadow:0 0 5px rgba(0,0,0,.1);min-width:120px;z-index:11110!important}.atwho-ul{list-style:none}.atwho-li{display:block}.atwho-view{border-radius:6px;box-shadow:0 0 10px 0 hsla(211,9%,44%,.5)}.atwho-ul{max-height:135px;padding:0;margin:0}.atwho-li{box-sizing:border-box;height:27px;padding:0 12px;white-space:nowrap;display:flex;align-items:center}.atwho-li span{overflow:hidden;text-overflow:ellipsis}.atwho-cur{background:#5bb8ff;color:#fff}.atwho-wrap{position:relative}.atwho-panel{position:absolute}.atwho-inner{position:relative}.atwho-view{position:absolute;bottom:0;left:-.8em;cursor:default;background-color:hsla(0,0%,100%,.94);min-width:140px;max-width:180px;max-height:200px;overflow-y:auto}.atwho-view::-webkit-scrollbar{width:11px;height:11px}.atwho-view::-webkit-scrollbar-track{background-color:#f5f5f5}.atwho-view::-webkit-scrollbar-thumb{min-height:36px;border:2px solid transparent;border-top:3px solid transparent;border-bottom:3px solid transparent;background-clip:padding-box;border-radius:7px;background-color:#c4c4c4}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 496:
/***/ ((module) => {

/* jshint browser: true */

(function () {

// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
var properties = [
  'direction',  // RTL support
  'boxSizing',
  'width',  // on Chrome and IE, exclude the scrollbar, so the mirror div wraps exactly as the textarea does
  'height',
  'overflowX',
  'overflowY',  // copy the scrollbar for IE

  'borderTopWidth',
  'borderRightWidth',
  'borderBottomWidth',
  'borderLeftWidth',
  'borderStyle',

  'paddingTop',
  'paddingRight',
  'paddingBottom',
  'paddingLeft',

  // https://developer.mozilla.org/en-US/docs/Web/CSS/font
  'fontStyle',
  'fontVariant',
  'fontWeight',
  'fontStretch',
  'fontSize',
  'fontSizeAdjust',
  'lineHeight',
  'fontFamily',

  'textAlign',
  'textTransform',
  'textIndent',
  'textDecoration',  // might not make a difference, but better be safe

  'letterSpacing',
  'wordSpacing',

  'tabSize',
  'MozTabSize'

];

var isBrowser = (typeof window !== 'undefined');
var isFirefox = (isBrowser && window.mozInnerScreenX != null);

function getCaretCoordinates(element, position, options) {
  if (!isBrowser) {
    throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
  }

  var debug = options && options.debug || false;
  if (debug) {
    var el = document.querySelector('#input-textarea-caret-position-mirror-div');
    if (el) el.parentNode.removeChild(el);
  }

  // The mirror div will replicate the textarea's style
  var div = document.createElement('div');
  div.id = 'input-textarea-caret-position-mirror-div';
  document.body.appendChild(div);

  var style = div.style;
  var computed = window.getComputedStyle ? window.getComputedStyle(element) : element.currentStyle;  // currentStyle for IE < 9
  var isInput = element.nodeName === 'INPUT';

  // Default textarea styles
  style.whiteSpace = 'pre-wrap';
  if (!isInput)
    style.wordWrap = 'break-word';  // only for textarea-s

  // Position off-screen
  style.position = 'absolute';  // required to return coordinates properly
  if (!debug)
    style.visibility = 'hidden';  // not 'display: none' because we want rendering

  // Transfer the element's properties to the div
  properties.forEach(function (prop) {
    if (isInput && prop === 'lineHeight') {
      // Special case for <input>s because text is rendered centered and line height may be != height
      style.lineHeight = computed.height;
    } else {
      style[prop] = computed[prop];
    }
  });

  if (isFirefox) {
    // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
    if (element.scrollHeight > parseInt(computed.height))
      style.overflowY = 'scroll';
  } else {
    style.overflow = 'hidden';  // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
  }

  div.textContent = element.value.substring(0, position);
  // The second special handling for input type="text" vs textarea:
  // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
  if (isInput)
    div.textContent = div.textContent.replace(/\s/g, '\u00a0');

  var span = document.createElement('span');
  // Wrapping must be replicated *exactly*, including when a long word gets
  // onto the next line, with whitespace at the end of the line before (#7).
  // The  *only* reliable way to do that is to copy the *entire* rest of the
  // textarea's content into the <span> created at the caret position.
  // For inputs, just '.' would be enough, but no need to bother.
  span.textContent = element.value.substring(position) || '.';  // || because a completely empty faux span doesn't render at all
  div.appendChild(span);

  var coordinates = {
    top: span.offsetTop + parseInt(computed['borderTopWidth']),
    left: span.offsetLeft + parseInt(computed['borderLeftWidth']),
    height: parseInt(computed['lineHeight'])
  };

  if (debug) {
    span.style.backgroundColor = '#aaa';
  } else {
    document.body.removeChild(div);
  }

  return coordinates;
}

if ( true && typeof module.exports != 'undefined') {
  module.exports = getCaretCoordinates;
} else if(isBrowser) {
  window.getCaretCoordinates = getCaretCoordinates;
}

}());


/***/ }),

/***/ 139:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(382);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(402)/* ["default"] */ .Z)
var update = add("b02fa7c2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ addStylesClient)
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 203:
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE__203__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ entry_lib)
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ const setPublicPath = (null);

;// CONCATENATED MODULE: ./src/util.js
// Scrolling The Selection Into View
// http://roysharon.com/blog/37
function scrollIntoView (t, scrollParent) {
  if (typeof (t) !== 'object') return

  if (t.getRangeAt) {
    // we have a Selection object
    if (t.rangeCount === 0) return
    t = t.getRangeAt(0)
  }

  if (t.cloneRange) {
    // we have a Range object
    let r = t.cloneRange() // do not modify the source range
    r.collapse(true) // collapse to start
    t = r.startContainer
    // if start is an element, then startOffset is the child number
    // in which the range starts
    if (t.nodeType === 1) t = t.childNodes[r.startOffset]
  }
  if (!t) return

  // if t is not an element node, then we need to skip back until we find the
  // previous element with which we can call scrollIntoView()
  let o = t
  while (o && o.nodeType !== 1) o = o.previousSibling
  t = o || t.parentNode
  if (t) scrollIntoViewElement(t, scrollParent)
}

// bug report: https://github.com/vuejs/awesome-vue/pull/1028
// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoViewIfNeeded
function scrollIntoViewElement (el, scrollParent) {
  if (el.scrollIntoViewIfNeeded) {
    el.scrollIntoViewIfNeeded(false) // alignToCenter=false
  } else {
    // should not use `el.scrollIntoView(false)` // alignToTop=false
    // bug report: https://stackoverflow.com/questions/11039885/scrollintoview-causing-the-whole-page-to-move
    scrollParent = scrollParent || el.parentElement
    const diff = el.offsetTop - scrollParent.scrollTop
    if (diff < 0 || diff > scrollParent.offsetHeight - el.offsetHeight) {
      scrollParent.scrollTop = el.offsetTop
    }
  }
}

function applyRange (range) {
  const selection = window.getSelection()
  if (selection) { // 容错
    selection.removeAllRanges()
    selection.addRange(range)
  }
}
function getRange () {
  const selection = window.getSelection()
  if (selection && selection.rangeCount > 0) {
    return selection.getRangeAt(0)
  }
}

function getAtAndIndex (text, ats) {
  return ats.map((at) => {
    return { at, index: text.lastIndexOf(at) }
  }).reduce((a, b) => {
    return a.index > b.index ? a : b
  })
}

/* eslint-disable */
// http://stackoverflow.com/questions/26747240/plain-javascript-replication-to-offset-and-position
function getOffset(element, target) {
    // var element = document.getElementById(element),
    //     target  = target ? document.getElementById(target) : window;
    target = target || window
    var offset = {top: element.offsetTop, left: element.offsetLeft},
        parent = element.offsetParent;
    while (parent != null && parent != target) {
       offset.left += parent.offsetLeft;
       offset.top  += parent.offsetTop;
       parent = parent.offsetParent;
    }
    return offset;
}
// http://stackoverflow.com/questions/3972014/get-caret-position-in-contenteditable-div
function closest (el, predicate) {
  /* eslint-disable */
  do if (predicate(el)) return el;
  while (el = el && el.parentNode);
}
// http://stackoverflow.com/questions/15157435/get-last-character-before-caret-position-in-javascript
// 修复 "空格+表情+空格+@" range报错 应设(endContainer, 0)
// stackoverflow上的这段代码有bug
function getPrecedingRange() {
  const r = getRange()
  if (r) {
    const range = r.cloneRange()
    range.collapse(true)
    // var el = closest(range.endContainer, d => d.contentEditable)
    // range.setStart(el, 0)
    range.setStart(range.endContainer, 0)
    return range
  }
}
/* eslint-enable */

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__(203);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/AtTemplate.vue?vue&type=template&id=e31ae89a


const _hoisted_1 = { class: "atwho-inner" }
const _hoisted_2 = { class: "atwho-view" }
const _hoisted_3 = { class: "atwho-ul" }
const _hoisted_4 = ["data-index"]
const _hoisted_5 = ["textContent"]
const _hoisted_6 = { ref: "embeddedItem" }

function render(_ctx, _cache) {
  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
    ref: "wrap",
    class: "atwho-wrap",
    onCompositionstart: _cache[2] || (_cache[2] = (...args) => (_ctx.handleCompositionStart && _ctx.handleCompositionStart(...args))),
    onCompositionend: _cache[3] || (_cache[3] = (...args) => (_ctx.handleCompositionEnd && _ctx.handleCompositionEnd(...args))),
    onInput: _cache[4] || (_cache[4] = $event => (_ctx.handleInput())),
    onKeydownCapture: _cache[5] || (_cache[5] = (...args) => (_ctx.handleKeyDown && _ctx.handleKeyDown(...args)))
  }, [
    (_ctx.atwho)
      ? ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("div", {
          key: 0,
          class: "atwho-panel",
          style: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeStyle)(_ctx.style)
        }, [
          (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_1, [
            (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("div", _hoisted_2, [
              (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("ul", _hoisted_3, [
                ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(true), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)(external_commonjs_vue_commonjs2_vue_root_Vue_.Fragment, null, (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderList)(_ctx.atwho.list, (item, index) => {
                  return ((0,external_commonjs_vue_commonjs2_vue_root_Vue_.openBlock)(), (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementBlock)("li", {
                    class: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.normalizeClass)(["atwho-li", _ctx.isCur(index) && 'atwho-cur']),
                    key: index,
                    "data-index": index,
                    onMouseenter: _cache[0] || (_cache[0] = (...args) => (_ctx.handleItemHover && _ctx.handleItemHover(...args))),
                    onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.handleItemClick && _ctx.handleItemClick(...args)))
                  }, [
                    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "item", { item: item }, () => [
                      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", {
                        textContent: (0,external_commonjs_vue_commonjs2_vue_root_Vue_.toDisplayString)(_ctx.itemName(item))
                      }, null, 8, _hoisted_5)
                    ])
                  ], 42, _hoisted_4))
                }), 128))
              ])
            ])
          ])
        ], 4))
      : (0,external_commonjs_vue_commonjs2_vue_root_Vue_.createCommentVNode)("", true),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.withDirectives)((0,external_commonjs_vue_commonjs2_vue_root_Vue_.createElementVNode)("span", _hoisted_6, [
      (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "embeddedItem", { current: _ctx.currentItem })
    ], 512), [
      [external_commonjs_vue_commonjs2_vue_root_Vue_.vShow, false]
    ]),
    (0,external_commonjs_vue_commonjs2_vue_root_Vue_.renderSlot)(_ctx.$slots, "default")
  ], 544))
}
;// CONCATENATED MODULE: ./src/AtTemplate.vue?vue&type=template&id=e31ae89a

// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-62.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-62.use[1]!./node_modules/@vue/cli-service/node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-62.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-62.use[3]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-62.use[4]!./src/At.scss?vue&type=style&index=0&lang=scss
var Atvue_type_style_index_0_lang_scss = __webpack_require__(139);
;// CONCATENATED MODULE: ./src/At.scss?vue&type=style&index=0&lang=scss

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(118);
;// CONCATENATED MODULE: ./src/AtTemplate.vue

const script = {}

;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(script, [['render',render]])

/* harmony default export */ const AtTemplate = (__exports__);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/At.vue?vue&type=script&lang=js




/* harmony default export */ const Atvue_type_script_lang_js = ({
  name: 'VueAt',
  mixins: [AtTemplate],
  emits: ['update:value', 'at', 'insert'],
  props: {
    value: {
      type: String, // value not required
      default: null
    },
    at: {
      type: String,
      default: null
    },
    ats: {
      type: Array,
      default: () => ['@']
    },
    suffix: {
      type: String,
      default: ' '
    },
    loop: {
      type: Boolean,
      default: true
    },
    allowSpaces: {
      type: Boolean,
      default: true
    },
    tabSelect: {
      type: Boolean,
      default: false
    },
    avoidEmail: {
      type: Boolean,
      default: true
    },
    showUnique: {
      type: Boolean,
      default: true
    },
    hoverSelect: {
      type: Boolean,
      default: true
    },
    members: {
      type: Array,
      default: () => []
    },
    nameKey: {
      type: String,
      default: ''
    },
    filterMatch: {
      type: Function,
      default: (name, chunk, at) => {
        // match at lower-case
        return name.toLowerCase()
          .indexOf(chunk.toLowerCase()) > -1
      }
    },
    deleteMatch: {
      type: Function,
      default: (name, chunk, suffix) => {
        return chunk === name + suffix
      }
    },
    scrollRef: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      // at[v-model] mode should be on only when
      // initial :value/v-model is present (not nil)
      bindsValue: this.value != null,
      customsEmbedded: false,
      hasComposition: false,
      atwho: null
    }
  },
  computed: {
    atItems () {
      return this.at ? [this.at] : this.ats
    },

    currentItem () {
      if (this.atwho) {
        return this.atwho.list[this.atwho.cur]
      }
      return ''
    },

    style () {
      if (this.atwho) {
        const { list, cur, x, y } = this.atwho
        const { wrap } = this.$refs
        if (wrap) {
          const offset = getOffset(wrap)
          const scrollLeft = this.scrollRef ? document.querySelector(this.scrollRef).scrollLeft : 0
          const scrollTop = this.scrollRef ? document.querySelector(this.scrollRef).scrollTop : 0
          const left = x + scrollLeft + window.pageXOffset - offset.left + 'px'
          const top = y + scrollTop + window.pageYOffset - offset.top + 'px'
          return { left, top }
        }
      }
      return null
    }
  },
  watch: {
    'atwho.cur' (index) {
      if (index != null) { // cur index exists
        this.$nextTick(() => {
          this.scrollToCur()
        })
      }
    },
    members () {
      this.handleInput(true)
    },
    value (value, oldValue) {
      if (this.bindsValue) {
        this.handleValueUpdate(value)
      }
    }
  },
  mounted () {
    // vue3 migration.5
    // [Vue warn]: (deprecation INSTANCE_SCOPED_SLOTS) vm.$scopedSlots has been removed. Use vm.$slots instead.
    // Details: https://v3-migration.vuejs.org/breaking-changes/slots-unification.html
    if (this.$slots.embeddedItem) {
      this.customsEmbedded = true
    }
    if (this.bindsValue) {
      this.handleValueUpdate(this.value)
    }
  },

  methods: {
    itemName (v) {
      const { nameKey } = this
      return nameKey ? v[nameKey] : v
    },
    isCur (index) {
      return index === this.atwho.cur
    },
    handleValueUpdate (value) {
      const el = this.$el.querySelector('[contenteditable]')
      if (value !== el.innerHTML) { // avoid range reset
        el.innerHTML = value
        this.dispatchInput()
      }
    },
    dispatchInput () {
      let el = this.$el.querySelector('[contenteditable]')
      let ev = new Event('input', { bubbles: true })
      el.dispatchEvent(ev)
    },

    handleItemHover (e) {
      if (this.hoverSelect) {
        this.selectByMouse(e)
      }
    },
    handleItemClick (e) {
      this.selectByMouse(e)
      this.insertItem()
    },
    handleDelete (e) {
      const range = getPrecedingRange()
      if (range) {
        // fixme: Very bad code from me
        if (this.customsEmbedded && range.endOffset >= 1) {
          let a = range.endContainer.childNodes[range.endOffset] ||
            range.endContainer.childNodes[range.endOffset - 1]
          if (!a || a.nodeType === Node.TEXT_NODE && !/^\s?$/.test(a.data)) {
            return
          } else if (a.nodeType === Node.TEXT_NODE) {
            if (a.previousSibling) a = a.previousSibling
          } else {
            if (a.previousElementSibling) a = a.previousElementSibling
          }
          let ch = [].slice.call(a.childNodes)
          ch = [].reverse.call(ch)
          ch.unshift(a)
          let last
          ;[].some.call(ch, c => {
            if (c.getAttribute && c.getAttribute('data-at-embedded') != null) {
              last = c
              return true
            }
          })
          if (last) {
            e.preventDefault()
            e.stopPropagation()
            const r = getRange()
            if (r) {
              r.setStartBefore(last)
              r.deleteContents()
              applyRange(r)
              this.handleInput()
            }
          }
          return
        }

        const { atItems, members, suffix, deleteMatch, itemName } = this
        const text = range.toString()
        const { at, index } = getAtAndIndex(text, atItems)

        if (index > -1) {
          const chunk = text.slice(index + at.length)
          const has = members.some(v => {
            const name = itemName(v)
            return deleteMatch(name, chunk, suffix)
          })
          if (has) {
            e.preventDefault()
            e.stopPropagation()
            const r = getRange()
            if (r) {
              r.setStart(r.endContainer, index)
              r.deleteContents()
              applyRange(r)
              this.handleInput()
            }
          }
        }
      }
    },
    handleKeyDown (e) {
      const { atwho } = this
      if (atwho) {
        if (e.keyCode === 38 || e.keyCode === 40) { // ↑/↓
          if (!(e.metaKey || e.ctrlKey)) {
            e.preventDefault()
            e.stopPropagation()
            this.selectByKeyboard(e)
          }
          return
        }
        if (e.keyCode === 13 || (this.tabSelect && e.keyCode === 9)) { // enter or tab
          e.preventDefault()
          e.stopPropagation()
          this.insertItem()
          return
        }
        if (e.keyCode === 27) { // esc
          this.closePanel()
          return
        }
      }

      // 为了兼容ie ie9~11 editable无input事件 只能靠keydown触发 textarea正常
      // 另 ie9 textarea的delete不触发input
      const isValid = e.keyCode >= 48 && e.keyCode <= 90 || e.keyCode === 8
      if (isValid) {
        setTimeout(() => {
          this.handleInput()
        }, 50)
      }

      if (e.keyCode === 8) {
        this.handleDelete(e)
      }
    },

    // compositionStart -> input -> compositionEnd
    handleCompositionStart () {
      this.hasComposition = true
    },
    handleCompositionEnd () {
      this.hasComposition = false
      this.handleInput()
    },
    handleInput (keep) {
      if (this.hasComposition) return
      const el = this.$el.querySelector('[contenteditable]')

      // vue3 migration.2.1
      // https://vuejs.org/guide/components/events.html#usage-with-v-model
      // https://laracasts.com/discuss/channels/vue/how-do-emit-to-v-model-in-vue-3
      // this.$emit('input', el.innerHTML)
      this.$emit('update:value', el.innerHTML)

      const range = getPrecedingRange()

      if (range) {
        if (keep) {
          // exit the function if the range is not inside this.$el
          let container = range.commonAncestorContainer
          while (container) {
            if (container === this.$el) break
            container = container.parentElement
            if (!container) return
          }
        }

        const { atItems, avoidEmail, allowSpaces, showUnique } = this

        let show = true
        const text = range.toString()

        const { at, index } = getAtAndIndex(text, atItems)

        if (index < 0) show = false
        const prev = text[index - 1]

        const chunk = text.slice(index + at.length, text.length)

        if (avoidEmail) {
          // 上一个字符不能为字母数字 避免与邮箱冲突
          // 微信则是避免 所有字母数字及半角符号
          if (/^[a-z0-9]$/i.test(prev)) show = false
        }

        if (!allowSpaces && /\s/.test(chunk)) {
          show = false
        }

        // chunk以空白字符开头不匹配 避免`@ `也匹配
        if (/^\s/.test(chunk)) show = false

        if (!show) {
          this.closePanel()
        } else {
          const { members, filterMatch, itemName } = this
          if (!keep && chunk) { // fixme: should be consistent with AtTextarea.vue
            this.$emit('at', chunk)
          }
          const matched = members.filter(v => {
            const name = itemName(v)
            return filterMatch(name, chunk, at)
          })

          show = false
          if (matched.length) {
            show = true
            if (!showUnique) {
              let item = matched[0]
              if (chunk === itemName(item)) {
                show = false
              }
            }
          }

          if (show) {
            this.openPanel(matched, range, index, at)
          } else {
            this.closePanel()
          }
        }
      }
    },

    closePanel () {
      if (this.atwho) {
        this.atwho = null
      }
    },
    openPanel (list, range, offset, at) {
      const fn = () => {
        const r = range.cloneRange()
        r.setStart(r.endContainer, offset + at.length) // 从@后第一位开始
        // todo: 根据窗口空间 判断向上或是向下展开
        const rect = r.getClientRects()[0]
        this.atwho = {
          range,
          offset,
          list,
          x: rect.left,
          y: rect.top - 4,
          cur: 0 // todo: 尽可能记录
        }
      }
      if (this.atwho) {
        fn()
      } else { // 焦点超出了显示区域 需要提供延时以移动指针 再计算位置
        setTimeout(fn, 10)
      }
    },

    scrollToCur () {
      // vue3 migration.6
      // fix: [Vue warn]: Missing ref owner context. ref cannot be used on hoisted vnodes.
      // A vnode with ref must be created inside the render function.
      // at selectByMouse
      // at handleItemHover
      // const curEl = this.$refs.cur[0]
      let { wrap } = this.$refs
      let { cur } = this.atwho
      const curEl = wrap.querySelector(`.atwho-li[data-index="${cur}"]`)

      const scrollParent = curEl.parentElement.parentElement // .atwho-view
      scrollIntoView(curEl, scrollParent)
    },
    selectByMouse (e) {
      const el = closest(e.target, d => {
        return d.getAttribute('data-index')
      })
      const cur = +el.getAttribute('data-index')
      this.atwho = {
        ...this.atwho,
        cur
      }
    },
    selectByKeyboard (e) {
      const offset = e.keyCode === 38 ? -1 : 1
      const { cur, list } = this.atwho
      const nextCur = this.loop
        ? (cur + offset + list.length) % list.length
        : Math.max(0, Math.min(cur + offset, list.length - 1))
      this.atwho = {
        ...this.atwho,
        cur: nextCur
      }
    },

    // todo: 抽离成库并测试
    insertText (text, r) {
      r.deleteContents()
      const node = r.endContainer
      if (node.nodeType === Node.TEXT_NODE) {
        const cut = r.endOffset
        node.data = node.data.slice(0, cut) +
          text + node.data.slice(cut)
        r.setEnd(node, cut + text.length)
      } else {
        const t = document.createTextNode(text)
        r.insertNode(t)
        r.setEndAfter(t)
      }
      r.collapse(false) // 参数在IE下必传
      applyRange(r)
      this.dispatchInput()
    },

    insertHtml (html, r) {
      r.deleteContents()
      const node = r.endContainer
      const newElement = document.createElement('span')

      // Seems `contentediable=false` should includes spaces,
      // otherwise, caret can't be placed well across them
      newElement.appendChild(document.createTextNode(' '))
      newElement.appendChild(this.htmlToElement(html))
      newElement.appendChild(document.createTextNode(' '))
      newElement.setAttribute('data-at-embedded', '')
      newElement.setAttribute('contenteditable', false)

      if (node.nodeType === Node.TEXT_NODE) {
        const cut = r.endOffset
        let secondPart = node.splitText(cut)
        node.parentNode.insertBefore(newElement, secondPart)
        r.setEndBefore(secondPart)
      } else {
        const t = document.createTextNode(this.suffix)
        r.insertNode(newElement)
        r.setEndAfter(newElement)
        r.insertNode(t)
        r.setEndAfter(t)
      }
      r.collapse(false) // 参数在IE下必传
      applyRange(r)
    },

    insertItem () {
      const { range, offset, list, cur } = this.atwho
      const { suffix, atItems, itemName, customsEmbedded } = this
      const r = range.cloneRange()
      const text = range.toString()
      const { at, index } = getAtAndIndex(text, atItems)

      // Leading `@` is automatically dropped as `customsEmbedded=true`
      // You can fully custom the output inside the embedded slot
      const start = customsEmbedded ? index : index + at.length
      r.setStart(r.endContainer, start)

      // hack: 连续两次 可以确保click后 focus回来 range真正生效
      applyRange(r)
      applyRange(r)
      const curItem = list[cur]

      if (customsEmbedded) {
        // `suffix` is ignored as `customsEmbedded=true` has to be
        // wrapped around by spaces

        // vue3 migration.7
        // fix: Uncaught TypeError: Cannot read properties of undefined (reading 'innerHTML')
        // at Proxy.insertItem (At.vue?075e:490:1)
        // at Proxy.handleItemClick (At.vue?075e:184:1)
        // const html = this.$refs.embeddedItem.firstChild.innerHTML
        const html = this.$refs.embeddedItem.firstElementChild.innerHTML

        this.insertHtml(html, r)
      } else {
        const t = itemName(curItem) + suffix
        this.insertText(t, r)
      }
      scrollIntoView(window.getSelection())

      this.$emit('insert', curItem)
      this.handleInput()

      // fix safari: use `r` instead of `window.getSelection()`
      // scrollIntoView(window.getSelection())
      scrollIntoView(r)
    },
    htmlToElement (html) {
      const template = document.createElement('template')
      html = html.trim() // Never return a text node of whitespace as the result
      template.innerHTML = html
      return template.content.firstChild
    }
  }
});

;// CONCATENATED MODULE: ./src/At.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/At.vue



const At_exports_ = Atvue_type_script_lang_js;

/* harmony default export */ const At = (At_exports_);
// EXTERNAL MODULE: ./node_modules/textarea-caret/index.js
var textarea_caret = __webpack_require__(496);
var textarea_caret_default = /*#__PURE__*/__webpack_require__.n(textarea_caret);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/AtTextarea.vue?vue&type=script&lang=js





/* harmony default export */ const AtTextareavue_type_script_lang_js = ({
  extends: At,
  name: 'AtTextarea',
  emits: ['update:value', 'at', 'insert'],
  computed: {
    style () {
      if (this.atwho) {
        const { list, cur, x, y } = this.atwho
        const { wrap } = this.$refs
        const el = this.$el.querySelector('textarea')
        if (wrap) {
          const left = x + el.offsetLeft - el.scrollLeft + 'px'
          const top = y + el.offsetTop - el.scrollTop + 'px'
          return { left, top }
        }
      }
      return null
    }
  },
  methods: {
    handleValueUpdate (value) {
      const el = this.$el.querySelector('textarea')
      if (value !== el.value) { // avoid range reset
        el.value = value
        this.dispatchInput()
      }
    },
    dispatchInput () {
      let el = this.$el.querySelector('textarea')
      let ev = new Event('input', { bubbles: true })
      el.dispatchEvent(ev)
    },

    handleDelete (e) {
      const el = this.$el.querySelector('textarea')
      // fix https://github.com/fritx/vue-at/issues/139
      const hasSelection = el.selectionEnd - el.selectionStart > 0
      if (hasSelection) return
      const text = el.value.slice(0, el.selectionEnd)
      if (text) {
        const { atItems, members, suffix, deleteMatch, itemName } = this
        const { at, index } = getAtAndIndex(text, atItems)
        if (index > -1) {
          const chunk = text.slice(index + at.length)
          const has = members.some(v => {
            const name = itemName(v)
            return deleteMatch(name, chunk, suffix)
          })
          if (has) {
            el.value = el.value.slice(0, index) +
              el.value.slice(el.selectionEnd - 1)
            el.selectionStart = index + 1
            el.selectionEnd = index + 1
            this.handleInput()
          }
        }
      }
    },

    handleInput (keep) {
      if (this.hasComposition) return
      const el = this.$el.querySelector('textarea')

      // vue3 migration.2.1
      // https://vuejs.org/guide/components/events.html#usage-with-v-model
      // https://laracasts.com/discuss/channels/vue/how-do-emit-to-v-model-in-vue-3
      // this.$emit('input', el.value)
      this.$emit('update:value', el.value)

      const text = el.value.slice(0, el.selectionEnd)
      if (text) {
        const { atItems, avoidEmail, allowSpaces } = this
        let show = true
        const { at, index } = getAtAndIndex(text, atItems)
        if (index < 0) show = false
        const prev = text[index - 1]
        const chunk = text.slice(index + at.length, text.length)
        if (avoidEmail) {
          // 上一个字符不能为字母数字 避免与邮箱冲突
          // 微信则是避免 所有字母数字及半角符号
          if (/^[a-z0-9]$/i.test(prev)) show = false
        }
        if (!allowSpaces && /\s/.test(chunk)) {
          show = false
        }

        // chunk以空白字符开头不匹配 避免`@ `也匹配
        if (/^\s/.test(chunk)) show = false
        if (!show) {
          this.closePanel()
        } else {
          const { members, filterMatch, itemName } = this
          if (!keep) { // fixme: should be consistent with At.vue
            this.$emit('at', chunk)
          }
          const matched = members.filter(v => {
            const name = itemName(v)
            return filterMatch(name, chunk, at)
          })
          if (matched.length) {
            this.openPanel(matched, chunk, index, at, keep)
          } else {
            this.closePanel()
          }
        }
      } else {
        this.closePanel()
      }
    },

    openPanel (list, chunk, offset, at) {
      const fn = () => {
        const el = this.$el.querySelector('textarea')
        const atEnd = offset + at.length // 从@后第一位开始
        const rect = textarea_caret_default()(el, atEnd)
        this.atwho = {
          chunk,
          offset,
          list,
          atEnd,
          x: rect.left,
          y: rect.top - 4,
          cur: 0, // todo: 尽可能记录
        }
      }
      if (this.atwho) {
        fn()
      } else { // 焦点超出了显示区域 需要提供延时以移动指针 再计算位置
        setTimeout(fn, 10)
      }
    },

    // todo: 抽离成库并测试
    insertText (text, ta) {
      const start = ta.selectionStart
      const end = ta.selectionEnd
      ta.value = ta.value.slice(0, start) +
        text + ta.value.slice(end)
      const newEnd = start + text.length
      ta.selectionStart = newEnd
      ta.selectionEnd = newEnd
      this.dispatchInput()
    },
    insertItem () {
      const { chunk, offset, list, cur, atEnd } = this.atwho
      const { suffix, atItems, itemName } = this
      const el = this.$el.querySelector('textarea')
      const text = el.value.slice(0, atEnd)
      const { at, index } = getAtAndIndex(text, atItems)
      const start = index + at.length // 从@后第一位开始
      el.selectionStart = start
      el.focus() // textarea必须focus回来
      const curItem = list[cur]
      const t = itemName(curItem) + suffix
      this.insertText(t, el)
      this.$emit('insert', curItem)
      this.handleInput()
    }
  }
});

;// CONCATENATED MODULE: ./src/AtTextarea.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/AtTextarea.vue



const AtTextarea_exports_ = AtTextareavue_type_script_lang_js;

/* harmony default export */ const AtTextarea = (AtTextarea_exports_);
;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ const entry_lib = (AtTextarea);


})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=vue-at-textarea.umd.js.map