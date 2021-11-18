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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./www/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./www/js/app.js":
/*!***********************!*\
  !*** ./www/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/firebase-admin/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/firebase-admin/firestore'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/*import {
	initializeApp,
	credential as _credential,
	firestore
} from "firebase-admin";

import serviceAccount from "./serviceAccount.json";

const db = firestore();
let memberRef = db.collection("Members");
memberRef.get().then((QuerySnapshot) => {
	QuerySnapshot.forEach(document => {
		console.log(document.data());
	})
})*/






function onDeviceReady() {
	/*const firebaseConfig = {
		apiKey: "AIzaSyD-NuJva4GTL_2_w81wdwhJDEgXhLWVrko",
		authDomain: "ledenlijst-chiro.firebaseapp.com",
		projectId: "ledenlijst-chiro",
		storageBucket: "ledenlijst-chiro.appspot.com",
		messagingSenderId: "804184704488",
		appId: "1:804184704488:web:7248f6d785581317fe905d"
	};

	const app = initializeApp(firebaseConfig);
	const firebaseApp = initializeApp({
		apiKey: 'AIzaSyD-NuJva4GTL_2_w81wdwhJDEgXhLWVrko',
		authDomain: 'ledenlijst-chiro.firebaseapp.com',
		projectId: 'ledenlijst-chiro'
	});*/

	const serviceAccount = __webpack_require__(/*! ./serviceAccount.json */ "./www/js/serviceAccount.json");

	!(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/firebase-admin/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
		credential: !(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/firebase-admin/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(serviceAccount)
	});

	const db = !(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/firebase-admin/firestore'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
};

$(function () {
	document.addEventListener("deviceready", onDeviceReady, false);

	$('.sidenav').sidenav();

	$('.sidenav a').click(function () {
		$('.spa').hide();
		$('#' + $(this).data('show')).show();
		$('.sidenav').sidenav('close');
	});
	$('.tabInformation').show();

	!(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/firebase-admin/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
		credential: !(function webpackMissingModule() { var e = new Error("Cannot find module '../../node_modules/firebase-admin/app'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
		databaseURL: 'https://ledenlijst-chiro.firebaseapp.com'
	});

	const docRef = db.collection('Members').doc('member3');

	(async () => {
		await docRef.set({
			Name: 'Luca Van Genechten',
			Street: 'Berkenlaan 9',
			City: 'Vorselaar'
		})
	})();

	(async () => {
		const snapshot = await db.collection('users').get();
		snapshot.forEach((doc) => {
			console.log(doc.id, '=>', doc.data());
		});
	});
});

$(document).ready(function () {
	$('.sidenav').sidenav();

});

/***/ }),

/***/ "./www/js/serviceAccount.json":
/*!************************************!*\
  !*** ./www/js/serviceAccount.json ***!
  \************************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"ledenlijst-chiro\",\"private_key_id\":\"7654619efdbc021498f2b337cbb2a4dc600c87e6\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQClCT8Pgpov0KWY\\nhGlIJ8FXu5OMu4yvrmIQ3m+8UGwZFklkqtD6YqcWjHXyXhLA1NLtJ0BpEt/a6X+H\\nleIVPo8pTNNnxdPi3+etkjnx1xNQmevENu0wqXp6qWryr5IgN20bm7BDwNb9XbkI\\n06iWmn04Ik756h5okhRmbckWRgDVvhHklf+D6efAaP8kdTShNE9YoTOhSDLf0hw5\\nFjdhbrZjz8+vToyuVHphxoEgB+pSHt/WoPCifpSNeXotCJVK5uPSOUYD80sVVlu3\\nwMh1KDytCXaX8xIg8FsARR+C+KMMPtd18OId/tbIi/Rl0aqXlhFlA4ZhupGhbzdH\\nZNozY8QrAgMBAAECggEAGLclxoDcmRnkyCPW+y4DpSE7m5vgGdSXwxxMx3rpIBNX\\nsnJnvC0CBj0gJ3KHLxxa6kEymDRyFIAGJUarsQV0EySk6amVbdNHsurEhWnxmTne\\ni71eECeRZsVFyvUYK9L2eBKndxNuHvY7kQ2BoJb09xnMPLPJvLIDyW3aQN0C9aoK\\nYNgh3Rzww2JHcgcjHz3fx4ahoJ7eI35hPEK2Gisf3psVRexHpWKkJ0XaN0P1he8/\\n4wn4HSHOI/UcQFFnKuqwOCRBzLbz+f9XI8FKBk5gUdu54JxFLcny8rXHmPYTk07F\\nluN7vbf238JEIsJ2iFhr+skv4fj3RIPqMOzDqgt4QQKBgQDW8aHdm/OkOHth/bbv\\nYCEoQEs6N7voKRdPHnP407LNB8y1O/qbb93GJy+ybYotNclzmjTvyZsHpAcwvYlz\\nRRKNFJDQudXH8rIiZST3FPkjSkxnzHFj2bTdCMf1TDHn1F+00prr0Z/YTULalPjS\\nzrTpqJY+MfM40sbQluRAGOOzYwKBgQDEjzb5djMuNCNyH4L6oNylgswwYYBcUcGH\\ncdLEddgq58bn7UDgwCkKJl2X/0smroUORqrwSBfgFuLJsaLCRVrh2R7BtLmB/2UA\\nulcD/PPE53MgfPT1IvtXqLuZvqUEfnG8RzdJ+jLYcRnFWS2ZAcTEmt7d0rDiAIz1\\n2R2KCEyamQKBgDk/bBwpADBZ9sq3l3SUBuDAlwivdXW1FAc3li3MvI+NJ0GR8wJZ\\nPhkbsMF2GVpHPBt1E+pVqNvVHTEnGifAWtuGgbeF92Fky3sLs1e3l0+F52mx8vVk\\nM563SwKTQ6t6Te9MNITgdRFYKpkrGkaTVW3yP+naxev5f4ho1+wWdPb/AoGAScic\\n0U3ebnSh7aAIkb46tWKA9ZRUE9OYuxguDxNRfuGcV8lGtldL0ISQU5NAiZevWKmM\\nV0AovjS5Ew88UoKoV+kh04LctADD0F8idNvKQdrD66kcZryn7sLnERJwbVxto0h0\\nZ6+k0Hy8OMl+BVaVn1unV0tUnLGqOEs0/HCbGNkCgYAukZGyXxtFF2ejm0GUnjC4\\n+POL3zqVq8Lx7bAJyMJmfC0x1sNkWZ1FQB1AhniTBr545d+/JWy/9+yTo2PuSfTZ\\nNlH6Lp+S9ZEcL+1Dbb2M+FgGdh8SBosSlTGJZS8QZ8fUr/64MdyVSugLHGYt3f0Z\\ntfT0GXVFk+C7Y2wItFnqjw==\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-kq71x@ledenlijst-chiro.iam.gserviceaccount.com\",\"client_id\":\"110384752760098596279\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-kq71x%40ledenlijst-chiro.iam.gserviceaccount.com\"}");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vd3d3L2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBTThDO0FBS007Ozs7QUFJckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEVBQUU7O0FBRUosd0JBQXdCLG1CQUFPLENBQUMsMkRBQXVCOztBQUV2RCxDQUFDLCtKQUFhO0FBQ2QsY0FBYywrSkFBSTtBQUNsQixFQUFFOztBQUVGLFlBQVkscUtBQVk7QUFDeEI7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQSxDQUFDLCtKQUFhO0FBQ2QsY0FBYywrSkFBa0I7QUFDaEM7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBOztBQUVBLENBQUMsRSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi93d3cvanMvYXBwLmpzXCIpO1xuIiwiLyppbXBvcnQge1xyXG5cdGluaXRpYWxpemVBcHAsXHJcblx0Y3JlZGVudGlhbCBhcyBfY3JlZGVudGlhbCxcclxuXHRmaXJlc3RvcmVcclxufSBmcm9tIFwiZmlyZWJhc2UtYWRtaW5cIjtcclxuXHJcbmltcG9ydCBzZXJ2aWNlQWNjb3VudCBmcm9tIFwiLi9zZXJ2aWNlQWNjb3VudC5qc29uXCI7XHJcblxyXG5jb25zdCBkYiA9IGZpcmVzdG9yZSgpO1xyXG5sZXQgbWVtYmVyUmVmID0gZGIuY29sbGVjdGlvbihcIk1lbWJlcnNcIik7XHJcbm1lbWJlclJlZi5nZXQoKS50aGVuKChRdWVyeVNuYXBzaG90KSA9PiB7XHJcblx0UXVlcnlTbmFwc2hvdC5mb3JFYWNoKGRvY3VtZW50ID0+IHtcclxuXHRcdGNvbnNvbGUubG9nKGRvY3VtZW50LmRhdGEoKSk7XHJcblx0fSlcclxufSkqL1xyXG5cclxuaW1wb3J0IHtcclxuXHRpbml0aWFsaXplQXBwLFxyXG5cdGFwcGxpY2F0aW9uRGVmYXVsdCxcclxuXHRjZXJ0XHJcbn0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlLWFkbWluL2FwcCc7XHJcbmltcG9ydCB7XHJcblx0Z2V0RmlyZXN0b3JlLFxyXG5cdFRpbWVzdGFtcCxcclxuXHRGaWVsZFZhbHVlXHJcbn0gZnJvbSAnLi4vLi4vbm9kZV9tb2R1bGVzL2ZpcmViYXNlLWFkbWluL2ZpcmVzdG9yZSc7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG9uRGV2aWNlUmVhZHkoKSB7XHJcblx0Lypjb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcclxuXHRcdGFwaUtleTogXCJBSXphU3lELU51SnZhNEdUTF8yX3c4MXdkd2hKREVnWGhMV1Zya29cIixcclxuXHRcdGF1dGhEb21haW46IFwibGVkZW5saWpzdC1jaGlyby5maXJlYmFzZWFwcC5jb21cIixcclxuXHRcdHByb2plY3RJZDogXCJsZWRlbmxpanN0LWNoaXJvXCIsXHJcblx0XHRzdG9yYWdlQnVja2V0OiBcImxlZGVubGlqc3QtY2hpcm8uYXBwc3BvdC5jb21cIixcclxuXHRcdG1lc3NhZ2luZ1NlbmRlcklkOiBcIjgwNDE4NDcwNDQ4OFwiLFxyXG5cdFx0YXBwSWQ6IFwiMTo4MDQxODQ3MDQ0ODg6d2ViOjcyNDhmNmQ3ODU1ODEzMTdmZTkwNWRcIlxyXG5cdH07XHJcblxyXG5cdGNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xyXG5cdGNvbnN0IGZpcmViYXNlQXBwID0gaW5pdGlhbGl6ZUFwcCh7XHJcblx0XHRhcGlLZXk6ICdBSXphU3lELU51SnZhNEdUTF8yX3c4MXdkd2hKREVnWGhMV1Zya28nLFxyXG5cdFx0YXV0aERvbWFpbjogJ2xlZGVubGlqc3QtY2hpcm8uZmlyZWJhc2VhcHAuY29tJyxcclxuXHRcdHByb2plY3RJZDogJ2xlZGVubGlqc3QtY2hpcm8nXHJcblx0fSk7Ki9cclxuXHJcblx0Y29uc3Qgc2VydmljZUFjY291bnQgPSByZXF1aXJlKCcuL3NlcnZpY2VBY2NvdW50Lmpzb24nKTtcclxuXHJcblx0aW5pdGlhbGl6ZUFwcCh7XHJcblx0XHRjcmVkZW50aWFsOiBjZXJ0KHNlcnZpY2VBY2NvdW50KVxyXG5cdH0pO1xyXG5cclxuXHRjb25zdCBkYiA9IGdldEZpcmVzdG9yZSgpO1xyXG59O1xyXG5cclxuJChmdW5jdGlvbiAoKSB7XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZXJlYWR5XCIsIG9uRGV2aWNlUmVhZHksIGZhbHNlKTtcclxuXHJcblx0JCgnLnNpZGVuYXYnKS5zaWRlbmF2KCk7XHJcblxyXG5cdCQoJy5zaWRlbmF2IGEnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcuc3BhJykuaGlkZSgpO1xyXG5cdFx0JCgnIycgKyAkKHRoaXMpLmRhdGEoJ3Nob3cnKSkuc2hvdygpO1xyXG5cdFx0JCgnLnNpZGVuYXYnKS5zaWRlbmF2KCdjbG9zZScpO1xyXG5cdH0pO1xyXG5cdCQoJy50YWJJbmZvcm1hdGlvbicpLnNob3coKTtcclxuXHJcblx0aW5pdGlhbGl6ZUFwcCh7XHJcblx0XHRjcmVkZW50aWFsOiBhcHBsaWNhdGlvbkRlZmF1bHQoKSxcclxuXHRcdGRhdGFiYXNlVVJMOiAnaHR0cHM6Ly9sZWRlbmxpanN0LWNoaXJvLmZpcmViYXNlYXBwLmNvbSdcclxuXHR9KTtcclxuXHJcblx0Y29uc3QgZG9jUmVmID0gZGIuY29sbGVjdGlvbignTWVtYmVycycpLmRvYygnbWVtYmVyMycpO1xyXG5cclxuXHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0YXdhaXQgZG9jUmVmLnNldCh7XHJcblx0XHRcdE5hbWU6ICdMdWNhIFZhbiBHZW5lY2h0ZW4nLFxyXG5cdFx0XHRTdHJlZXQ6ICdCZXJrZW5sYWFuIDknLFxyXG5cdFx0XHRDaXR5OiAnVm9yc2VsYWFyJ1xyXG5cdFx0fSlcclxuXHR9KSgpO1xyXG5cclxuXHQoYXN5bmMgKCkgPT4ge1xyXG5cdFx0Y29uc3Qgc25hcHNob3QgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCd1c2VycycpLmdldCgpO1xyXG5cdFx0c25hcHNob3QuZm9yRWFjaCgoZG9jKSA9PiB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGRvYy5pZCwgJz0+JywgZG9jLmRhdGEoKSk7XHJcblx0XHR9KTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XHJcblx0JCgnLnNpZGVuYXYnKS5zaWRlbmF2KCk7XHJcblxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9