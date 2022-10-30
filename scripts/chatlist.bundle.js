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
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/chatlist.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scripts/chatlist.js":
/*!*****************************!*\
  !*** ./scripts/chatlist.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_chatlist_header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/chatlist/header.css */ \"./styles/chatlist/header.css\");\n/* harmony import */ var _styles_chatlist_header_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_chatlist_header_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_chatlist_chats_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/chatlist/chats.css */ \"./styles/chatlist/chats.css\");\n/* harmony import */ var _styles_chatlist_chats_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_chatlist_chats_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_chatlist_create_chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/chatlist/create-chat.css */ \"./styles/chatlist/create-chat.css\");\n/* harmony import */ var _styles_chatlist_create_chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_chatlist_create_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/main.css */ \"./styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar chat = document.querySelector(\".chat\");\nchat.addEventListener('click', goToChatPage.bind(undefined));\n\nfunction goToChatPage() {\n  window.location.href = '../chatpage.html';\n}\n\nfunction checkOnLastMessage() {\n  var chatInfo = document.querySelector(\".chat-info\");\n  var chatMeta = document.querySelector(\".chat-meta\");\n  var messages = localStorage.getItem(\"messages\");\n\n  if (messages === \"[]\") {\n    var defaultChatInfo = \"\\n            <span class=\\\"chat-name\\\">Brad Pitt</span>\\n            <span class=\\\"last-message\\\">Dude, you wanna hang out on Broadway?</span>\\n        \";\n    var defaultChatMeta = \"\\n            <span class=\\\"last-message-time\\\">4:19</span>\\n            <div class=\\\"received-message-status\\\">\\n                <span class=\\\"messages-count\\\">1</span>\\n            </div>\\n        \";\n    chatInfo.innerHTML = defaultChatMeta;\n    chatMeta.innerHTML = defaultChatInfo;\n    return;\n  }\n\n  messages = JSON.parse(messages);\n  messages.sort(function (a, b) {\n    return a[\"time\"] < b[\"time\"];\n  });\n  var lastMessage = messages.at(-1);\n  var updateChatInfo = \"\\n        <span class=\\\"chat-name\\\">Brad Pitt</span>\\n        <span class=\\\"last-message\\\">\".concat(lastMessage[\"content\"], \"</span>\\n    \");\n  var updateChatMeta = \"\\n        <span class=\\\"last-message-time\\\">\".concat(lastMessage[\"time\"], \"</span>\\n        <div class=\\\"message-status\\\">\\n            <span class=\\\"material-icons\\\">done</span>\\n        </div>\\n    \");\n  chatInfo.innerHTML = updateChatInfo;\n  chatMeta.innerHTML = updateChatMeta;\n}\n\ncheckOnLastMessage();\n\n//# sourceURL=webpack:///./scripts/chatlist.js?");

/***/ }),

/***/ "./styles/chatlist/chats.css":
/*!***********************************!*\
  !*** ./styles/chatlist/chats.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chatlist/chats.css?");

/***/ }),

/***/ "./styles/chatlist/create-chat.css":
/*!*****************************************!*\
  !*** ./styles/chatlist/create-chat.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chatlist/create-chat.css?");

/***/ }),

/***/ "./styles/chatlist/header.css":
/*!************************************!*\
  !*** ./styles/chatlist/header.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/chatlist/header.css?");

/***/ }),

/***/ "./styles/main.css":
/*!*************************!*\
  !*** ./styles/main.css ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./styles/main.css?");

/***/ })

/******/ });