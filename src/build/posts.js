/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(1);\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(3)(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {\n\tmodule.hot.accept(\"!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss\", function() {\n\t\tvar newContent = require(\"!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./styles.scss\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/styles/styles.scss\n// module id = 0\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./src/styles/styles.scss?");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(2)(false);\n// imports\n\n\n// module\nexports.push([module.i, \"html,\\nbody,\\ndiv,\\nul,\\nol {\\n  margin: 0;\\n  padding: 0; }\\n\\n/*bg content*/\\n/*bg left/right content*/\\n/*color*/\\n.interface, .message, .success, .error, .warning {\\n  background-color: #E0E0E0;\\n  margin: 5px 5px;\\n  padding: 10px 10px;\\n  flex-grow: 3; }\\n\\n.message {\\n  color: #BF360C;\\n  background-color: #4FC3F7; }\\n  .message:hover {\\n    background-color: #FF8A65; }\\n\\n.success {\\n  color: #1B5E20;\\n  background-color: #FFEE58; }\\n  .success:hover {\\n    background-color: #9CCC65; }\\n\\n.error {\\n  color: #ffab40;\\n  background-color: #FF8A65; }\\n  .error:hover {\\n    background-color: #FFEE58; }\\n\\n.warning {\\n  color: #01579B;\\n  background-color: #9CCC65; }\\n  .warning:hover {\\n    background-color: #4FC3F7; }\\n\\n.content {\\n  display: flex;\\n  justify-content: space-between;\\n  background-color: #281938; }\\n\\n.left_content {\\n  flex-basis: 15%;\\n  background-color: #482e5e; }\\n  .left_content .sidebar_header {\\n    text-align: center;\\n    padding: 45px 0;\\n    color: #b4a9b8;\\n    /*background: url(./static/img/sidebar_header_bg.jpg);*/ }\\n    .left_content .sidebar_header h3 {\\n      margin-bottom: 40px; }\\n    .left_content .sidebar_header #user_menu {\\n      text-decoration: none;\\n      color: #b4a9b8;\\n      font-size: 18px;\\n      padding: 15px;\\n      margin: 20px 0;\\n      border-radius: 30px;\\n      border: 1px solid #c8a9ff;\\n      text-transform: uppercase;\\n      box-sizing: border-box; }\\n      .left_content .sidebar_header #user_menu:hover {\\n        background-color: rgba(149, 117, 205, 0.5);\\n        transition: 0.5s all ease; }\\n  .left_content .sidebar_nav_menu {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: flex-start;\\n    align-items: stretch; }\\n    .left_content .sidebar_nav_menu li {\\n      list-style: none;\\n      flex-basis: 55px;\\n      border-bottom: 1px solid #523d66; }\\n    .left_content .sidebar_nav_menu li:first-child {\\n      border-top: 1px solid #523d66; }\\n    .left_content .sidebar_nav_menu img {\\n      margin: 15px;\\n      vertical-align: middle; }\\n    .left_content .sidebar_nav_menu a {\\n      text-decoration: none;\\n      color: #c8a9ff;\\n      font-size: 16px;\\n      line-height: 55px;\\n      display: block; }\\n      .left_content .sidebar_nav_menu a:hover {\\n        background-color: rgba(149, 117, 205, 0.5);\\n        transition: 0.5s all ease; }\\n    .left_content .sidebar_nav_menu .sidebar_proj a {\\n      color: #b4a9b8; }\\n    .left_content .sidebar_nav_menu .sidebar_heading {\\n      color: #ffab40;\\n      text-transform: uppercase;\\n      line-height: 55px;\\n      margin-left: 15px; }\\n\\n.right_content {\\n  flex-basis: 85%;\\n  margin-left: 30px; }\\n  .right_content .main_nav {\\n    display: flex;\\n    height: 85px;\\n    justify-content: space-between; }\\n    .right_content .main_nav .main_nav_menu {\\n      display: flex;\\n      justify-content: space-around;\\n      align-items: center;\\n      flex-basis: 60%; }\\n      .right_content .main_nav .main_nav_menu li {\\n        list-style: none; }\\n        .right_content .main_nav .main_nav_menu li a {\\n          text-decoration: none;\\n          color: #c8a9ff;\\n          font-size: 18px; }\\n          .right_content .main_nav .main_nav_menu li a:hover {\\n            color: #b4a9b8;\\n            transition: 0.5s all ease; }\\n    .right_content .main_nav .engine {\\n      flex-basis: 20%;\\n      display: flex;\\n      align-items: center;\\n      justify-content: space-around; }\\n      .right_content .main_nav .engine a {\\n        padding: 12px 16px;\\n        border-radius: 28px;\\n        background-color: #482e5e; }\\n        .right_content .main_nav .engine a:hover {\\n          background-color: rgba(149, 117, 205, 0.5);\\n          transition: 0.5s all ease; }\\n  .right_content .general {\\n    background-color: #482e5e;\\n    display: flex;\\n    flex-wrap: wrap; }\\n    .right_content .general .square {\\n      width: 30%; }\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/styles/styles.scss\n// module id = 1\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./src/styles/styles.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function(useSourceMap) {\n\tvar list = [];\n\n\t// return the list of modules as css string\n\tlist.toString = function toString() {\n\t\treturn this.map(function (item) {\n\t\t\tvar content = cssWithMappingToString(item, useSourceMap);\n\t\t\tif(item[2]) {\n\t\t\t\treturn \"@media \" + item[2] + \"{\" + content + \"}\";\n\t\t\t} else {\n\t\t\t\treturn content;\n\t\t\t}\n\t\t}).join(\"\");\n\t};\n\n\t// import a list of modules into the list\n\tlist.i = function(modules, mediaQuery) {\n\t\tif(typeof modules === \"string\")\n\t\t\tmodules = [[null, modules, \"\"]];\n\t\tvar alreadyImportedModules = {};\n\t\tfor(var i = 0; i < this.length; i++) {\n\t\t\tvar id = this[i][0];\n\t\t\tif(typeof id === \"number\")\n\t\t\t\talreadyImportedModules[id] = true;\n\t\t}\n\t\tfor(i = 0; i < modules.length; i++) {\n\t\t\tvar item = modules[i];\n\t\t\t// skip already imported module\n\t\t\t// this implementation is not 100% perfect for weird media query combinations\n\t\t\t//  when a module is imported multiple times with different media queries.\n\t\t\t//  I hope this will never occur (Hey this way we have smaller bundles)\n\t\t\tif(typeof item[0] !== \"number\" || !alreadyImportedModules[item[0]]) {\n\t\t\t\tif(mediaQuery && !item[2]) {\n\t\t\t\t\titem[2] = mediaQuery;\n\t\t\t\t} else if(mediaQuery) {\n\t\t\t\t\titem[2] = \"(\" + item[2] + \") and (\" + mediaQuery + \")\";\n\t\t\t\t}\n\t\t\t\tlist.push(item);\n\t\t\t}\n\t\t}\n\t};\n\treturn list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n\tvar content = item[1] || '';\n\tvar cssMapping = item[3];\n\tif (!cssMapping) {\n\t\treturn content;\n\t}\n\n\tif (useSourceMap && typeof btoa === 'function') {\n\t\tvar sourceMapping = toComment(cssMapping);\n\t\tvar sourceURLs = cssMapping.sources.map(function (source) {\n\t\t\treturn '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'\n\t\t});\n\n\t\treturn [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n\t}\n\n\treturn [content].join('\\n');\n}\n\n// Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n\t// eslint-disable-next-line no-undef\n\tvar base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n\tvar data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n\n\treturn '/*# ' + data + ' */';\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/css-loader/lib/css-base.js\n// module id = 2\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./node_modules/css-loader/lib/css-base.js?");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target) {\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(4);\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertInto + \" \" + options.insertAt.before);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\toptions.attrs.type = \"text/css\";\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\toptions.attrs.type = \"text/css\";\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = options.transform(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/style-loader/lib/addStyles.js\n// module id = 3\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/style-loader/lib/urls.js\n// module id = 4\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony default export */ __webpack_exports__[\"a\"] = ({\r\n\trender: function(data) {\r\n\t\tvar body = document.getElementsByClassName('general')[0];\r\n\t\t// data.forEach(function(el){\r\n\t\t// \tbody.appendChild(el);\r\n\t\tdata.map(el => {\r\n\t\t\tlet div = document.createElement('div'),\r\n\t\t\t\th3 = document.createElement('h3'),\r\n\t\t\t\tp = document.createElement('p');\r\n\t\t\th3.innerHTML = el.title;\r\n\t\t\tp.innerHTML = el.body;\r\n\t\t\tdiv.appendChild(h3);\r\n\t\t\tdiv.appendChild(p);\r\n\t\t\tlet classes = ['message', 'success', 'error', 'warning'];\r\n\t\t\tlet rand = Math.floor(Math.random() * classes.length);\r\n\t\t\tdiv.classList.add(classes[rand]);\r\n\t\t\treturn div;\r\n\t\t}).forEach(function(el){\r\n\t\t\t\tbody.appendChild(el);\r\n\t\t})\r\n\r\n}\r\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/views/engine.js\n// module id = 5\n// module chunks = 0 1\n\n//# sourceURL=webpack:///./src/views/engine.js?");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__ = __webpack_require__(0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__styles_styles_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__styles_styles_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__controllers_postCtrl_js__ = __webpack_require__(10);\n\r\n\r\n__WEBPACK_IMPORTED_MODULE_1__controllers_postCtrl_js__[\"a\" /* default */].render();\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/posts.js\n// module id = 9\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/posts.js?");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_postModel_js__ = __webpack_require__(11);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__views_engine_js__ = __webpack_require__(5);\n\r\n\r\n\r\nlet controller = {\r\n    model: __WEBPACK_IMPORTED_MODULE_0__models_postModel_js__[\"a\" /* default */],\r\n    view: __WEBPACK_IMPORTED_MODULE_1__views_engine_js__[\"a\" /* default */],\r\n    work: function() {\r\n        let result = [];\r\n        return this.model.init().then((a)=>{\r\n            let data = this.model.data;\r\n            this.markUp = data;\r\n        });\r\n    },\r\n    render: function() {\r\n        this.work().then(()=> {\r\n        this.view.render(this.markUp);\r\n        });\r\n    },\r\n    markUp: []\r\n};\r\n\r\n// function trispile(el) {\r\n//     let html;\r\n//     if (el && el.body && el.tag){\r\n//     html = document.createElement('div');\r\n\r\n//         if (typeof el.body === \"object\") {\r\n\r\n//             if (el.body.length) {\r\n//                 el.body.map(trispile).forEach(element => {\r\n//                     html.appendChild(element)    \r\n//                 });\r\n//             } \r\n//             else {\r\n//                 html.appendChild(trispile(el.body));\r\n//             }\r\n//         }\r\n//         else {\r\n//             html.innerHTML = el.body;\r\n//         }\r\n//         if (el.class) {\r\n//             let classes = ['message', 'success', 'error', 'warning'];\r\n// \t\t\tlet rand = Math.floor(Math.random() * classes.length);\r\n// \t\t\thtml.classList.add(el.class);\r\n// \t\t\thtml.classList.add(classes[rand]);\r\n//         }\r\n//     }\r\n\r\n//    return html ? html : el;\r\n// }\r\n\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (controller);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/controllers/postCtrl.js\n// module id = 10\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/controllers/postCtrl.js?");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// export default {\r\n// \tdata: \t[{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'sunt aut facere repellat provident occaecati excepturi optio reprehenderit'}, \r\n// \t\t\t\t{tag:'p', body:'quia et suscipit\\nsuscipit recusandae consequuntur expedita et cum\\nreprehenderit molestiae ut ut quas totam\\nnostrum rerum est autem sunt rem eveniet architecto'}]},\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'qui est esse'}, \r\n// \t\t\t\t{tag:'p', body:'est rerum tempore vitae\\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\\nqui aperiam non debitis possimus qui neque nisi nulla'}]},\t\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'ea molestias quasi exercitationem repellat qui ipsa sit aut'}, \r\n// \t\t\t\t{tag:'p', body:'et iusto sed quo iure\\nvoluptatem occaecati omnis eligendi aut ad\\nvoluptatem doloribus vel accusantium quis pariatur\\nmolestiae porro eius odio et labore et velit aut'}]},\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'eum et est occaecati'}, \r\n// \t\t\t\t{tag:'p', body:'ullam et saepe reiciendis voluptatem adipisci\\nsit amet autem assumenda provident rerum culpa\\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\\nquis sunt voluptatem rerum illo velit'}]},\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'nesciunt quas odio'}, \r\n// \t\t\t\t{tag:'p', body:'repudiandae veniam quaerat sunt sed\\nalias aut fugiat sit autem sed est\\nvoluptatem omnis possimus esse voluptatibus quis\\nest aut tenetur dolor neque'}]},\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'dolorem eum magni eos aperiam quia'}, \r\n// \t\t\t\t{tag:'p', body:'ut aspernatur corporis harum nihil quis provident sequi\\nmollitia nobis aliquid molestiae\\nperspiciatis et ea nemo ab reprehenderit accusantium quas\\nvoluptate dolores velit et doloremque molestiae'}]},\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'magnam facilis autem'}, \r\n// \t\t\t\t{tag:'p', body:'dolore placeat quibusdam ea quo vitae\\nmagni quis enim qui quis quo nemo aut saepe\\nquidem repellat excepturi ut quia\\nsunt ut sequi eos ea sed quas'}]},\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'dolorem dolore est ipsam'}, \r\n// \t\t\t\t{tag:'p', body:'dignissimos aperiam dolorem qui eum\\nfacilis quibusdam animi sint suscipit qui sint possimus cum\\nquaerat magni maiores excepturi\\nipsam ut commodi dolor voluptatum modi aut vitae'}]},\r\n// \t\t\t{tag:\"div\", class:'square', body:\r\n// \t\t\t\t[{tag: 'h3', body:'nesciunt iure omnis dolorem tempora et accusantium'}, \r\n// \t\t\t\t{tag:'p', body:'consectetur animi nesciunt iure dolore\\nenim quia ad\\nveniam autem ut quam aut nobis\\net est aut quod aut provident voluptas autem voluptas'}]},\r\n// \t\t\t{tag:\"div\", class:'rectangle', body:\r\n// \t\t\t\t[{tag: 'h3', body:'optio molestias id quia eum'}, \r\n// \t\t\t\t{tag:'p', body:'quo et expedita modi cum officia vel magni\\ndoloribus qui repudiandae\\nvero nisi sit\\nquos veniam quod sed accusamus veritatis error'}]},\r\n// \t\t\t{tag:\"div\", class:'rectangle', body:\r\n// \t\t\t\t[{tag: 'h3', body:'et ea vero quia laudantium autem'}, \r\n// \t\t\t\t{tag:'p', body:'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\\naccusamus in eum beatae sit\\nvel qui neque voluptates ut commodi qui incidunt\\nut animi commodi'}]}\r\n// \t\t\t]\r\n// }\r\nlet store = {\r\n\tdata: [],\r\n\tinit: function(url = 'https://jsonplaceholder.typicode.com/posts'){\r\n\t\treturn fetch(url)\r\n\t\t.then((r) => r.json())\r\n\t\t.then(json => store.data = json);\r\n\t}\r\n}\r\n/* harmony default export */ __webpack_exports__[\"a\"] = (store);\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/models/postModel.js\n// module id = 11\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/models/postModel.js?");

/***/ })
/******/ ]);