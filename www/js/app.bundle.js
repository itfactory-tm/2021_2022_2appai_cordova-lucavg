/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/me.jpg":
/*!**************************!*\
  !*** ./resources/me.jpg ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"feba14b73200dc9b0697d465371fa6b2.jpg\");\n\n//# sourceURL=webpack://be.lucavg.plugins/./resources/me.jpg?");

/***/ }),

/***/ "./www/js/app.js":
/*!***********************!*\
  !*** ./www/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _resources_me_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../resources/me.jpg */ \"./resources/me.jpg\");\n/*import {\r\n\tinitializeApp,\r\n\tapplicationDefault,\r\n\tcert\r\n} from '../../node_modules/firebase-admin/lib/app/index.js';\r\nimport {\r\n\tgetFirestore,\r\n\tTimestamp,\r\n\tFieldValue\r\n} from '../../node_modules/firebase-admin/lib/firestore/index.js';\r\n\r\nimport serviceAccount from './serviceAccount.json'\r\n*/\r\n\r\n\r\n\r\n$(function () {\r\n\tdocument.addEventListener(\"deviceready\", onDeviceReady, false);\r\n\r\n\t$(\"#me\").attr(\"src\",_resources_me_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\r\n\t$('.sidenav').sidenav();\r\n\r\n\t$('.sidenav a').on('click', function() {\r\n\t\t$('.spa').hide();\r\n\t\t$('#' + $(this).data('show')).show();\r\n\t\t$('.sidenav').sidenav('close');\r\n\t});\r\n\t$('.tabInformation').show();\r\n});\r\n\r\n$(document).on('load', function() {\r\n\t$('.sidenav').sidenav();\r\n\r\n});\r\n\r\nfunction onDeviceReady() {\r\n\r\n\tconsole.log('Device is ready');\r\n\t/*\r\n\tinitializeApp({\r\n\t\tcredential: cert(serviceAccount)\r\n\t});\r\n\r\n\tconst db = getFirestore();\r\n\r\n\tconst docRef = db.collection('Members').doc('member3');\r\n\r\n\t(async () => {\r\n\t\tconst snapshot = await db.collection('Members').get();\r\n\t\tsnapshot.forEach((doc) => {\r\n\t\t\tconsole.log(doc.id, '=>', doc.data());\r\n\t\t});\r\n\t});\t\r\n\t*/\r\n};\n\n//# sourceURL=webpack://be.lucavg.plugins/./www/js/app.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./www/js/app.js");
/******/ 	
/******/ })()
;