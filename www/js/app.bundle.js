/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./www/js/app.js":
/*!***********************!*\
  !*** ./www/js/app.js ***!
  \***********************/
/***/ (() => {

eval("function onDeviceReady() {\r\n    console.log('Device is ready');\r\n};\r\n\r\n$(function () {\r\n\tdocument.addEventListener(\"deviceready\", onDeviceReady, false);\r\n\r\n\t$('.sidenav').sidenav();\r\n\r\n\t$('.sidenav a').click(function () {\r\n\t\t$('.spa').hide();\r\n\t\t$('#' + $(this).data('show')).show();\r\n\t\t$('.sidenav').sidenav('close');\r\n\t});\r\n\t$('.tabInformation').show();\r\n});\r\n\r\n$(document).ready(function () {\r\n\t$('.sidenav').sidenav();\r\n\r\n});\n\n//# sourceURL=webpack://be.lucavg.plugins/./www/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./www/js/app.js"]();
/******/ 	
/******/ })()
;