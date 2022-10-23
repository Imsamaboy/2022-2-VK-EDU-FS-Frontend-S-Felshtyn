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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction restoreChatHistory(messages) {\n  messages.forEach(function (message) {\n    var class_name = message.name === login ? \"my-message\" : \"\"; // Я знаю, что template string гораздо лучше, но с ней у меня падает код 0_о\n\n    var template = \"<div class='message-area \" + class_name + \"'>\" + \"<div class='message'>\" + \"<p>\" + message.content + \"</p>\" + \"<time>\" + message.time + \"</time>\" + \"</div>\" + \"</div>\";\n    message_list.innerHTML += template;\n  });\n}\n\nfunction handleSubmit(event) {\n  event.preventDefault();\n  if (input.value === \"\") return;\n  chatHistory.push({\n    name: login,\n    time: new Date().toLocaleTimeString().slice(0, -3),\n    content: input.value\n  });\n  document.querySelector('.form-input').value = \"\";\n  localStorage.setItem(\"chat\", JSON.stringify(chatHistory));\n  var data = JSON.parse(localStorage.getItem(\"chat\")); // Я знаю, что template string гораздо лучше, но с ней у меня падает код 0_о\n\n  var template = \"<div class='message-area my-message'>\" + \"<div class='message'>\" + \"<p>\" + data[data.length - 1].content + \"</p>\" + \"<time>\" + data[data.length - 1].time + \"</time>\" + \"</div>\" + \"</div>\";\n  message_list.innerHTML += template;\n  message_list.scrollTop = message_list.scrollHeight;\n}\n\nfunction handleKeyPress(event) {\n  if (event.keyCode === 13) {\n    form.dispatchEvent(new Event(\"submit\"));\n  }\n}\n\nvar login = \"Loveyouzaya\";\nvar form = document.querySelector('form');\nvar input = document.querySelector('.form-input');\nvar message_list = document.querySelector('.message-list');\nmessage_list.scrollTop = message_list.scrollHeight;\nvar chat = [{\n  \"name\": \"Brad Pitt\",\n  \"time\": \"4:19\",\n  \"content\": \"Dude, you wanna hang out on Broadway?\"\n}, {\n  \"name\": \"Loveyouzaya\",\n  \"time\": \"4:20\",\n  \"content\": \"What are we talking about)\"\n}];\nif (!localStorage.getItem(\"chat\")) localStorage.setItem(\"chat\", JSON.stringify(chat));\nvar chatHistory = JSON.parse(localStorage.getItem(\"chat\"));\nrestoreChatHistory(chatHistory);\nform.addEventListener('submit', handleSubmit.bind());\nform.addEventListener('keypress', handleKeyPress.bind());\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });