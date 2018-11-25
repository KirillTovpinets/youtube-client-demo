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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/api.service.js":
/*!***************************!*\
  !*** ./js/api.service.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return APIService; });\n/* harmony import */ var _globalParameters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./globalParameters */ \"./js/globalParameters.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar APIService =\n/*#__PURE__*/\nfunction () {\n  function APIService() {\n    _classCallCheck(this, APIService);\n\n    this.baseLink = 'https://www.googleapis.com/youtube/v3/';\n    this.options = {};\n  }\n\n  _createClass(APIService, [{\n    key: \"makeUrl\",\n    value: function makeUrl(options, endpoint) {\n      var url = \"\".concat(this.baseLink).concat(endpoint, \"?\");\n      Object.keys(options).forEach(function (key) {\n        if (options[key] === undefined || options[key] === '') return;\n        url += \"\".concat(key, \"=\").concat(options[key], \"&\");\n      });\n      return url.slice(0, -1);\n    }\n  }, {\n    key: \"getData\",\n    value: function getData(endpoint, options, callback) {\n      var _this = this;\n\n      fetch(this.makeUrl(options, endpoint)).then(function (res) {\n        return res.json();\n      }).then(function (res) {\n        var videoIds = res.items.map(function (video) {\n          return video.id.videoId;\n        }).join(',');\n        _globalParameters__WEBPACK_IMPORTED_MODULE_0__[\"default\"].nextPageToken = res.nextPageToken;\n        var statOpt = {\n          key: 'AIzaSyAy4216GuJdhOVHeVLyI8VhXm_Iv3gW7pM',\n          id: videoIds,\n          part: 'snippet,statistics'\n        };\n        return fetch(_this.makeUrl(statOpt, 'videos'));\n      }).then(function (res) {\n        return res.json();\n      }).then(function (data) {\n        return callback(data);\n      }).catch(function (err) {\n        return console.error(err);\n      });\n    }\n  }]);\n\n  return APIService;\n}();\n\n\n\n//# sourceURL=webpack:///./js/api.service.js?");
	
	/***/ }),
	
	/***/ "./js/app-view.js":
	/*!************************!*\
		!*** ./js/app-view.js ***!
		\************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppView; });\n/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.controller */ \"./js/app.controller.js\");\n/* harmony import */ var _globalParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalParameters */ \"./js/globalParameters.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar AppView =\n/*#__PURE__*/\nfunction () {\n  function AppView() {\n    _classCallCheck(this, AppView);\n\n    this.controller = new _app_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  _createClass(AppView, [{\n    key: \"createView\",\n    value: function createView() {\n      var _this = this;\n\n      this.formElem = document.createElement('form');\n      this.inputElem = document.createElement('input');\n      this.formGroup = document.createElement('div');\n      this.button = document.createElement('button');\n      this.listContainer = document.createElement('div');\n      this.container = document.createElement('div');\n      this.button.classList.add('btn');\n      this.button.innerText = 'Search';\n      this.button.addEventListener('click', function (e) {\n        return _this.controller.getVideos(e, function (data) {\n          return _this.drawThumbs(data.items);\n        });\n      });\n      this.formGroup.classList.add('form-group');\n      this.inputElem.classList.add('form-control');\n      this.inputElem.setAttribute('id', 'search-value');\n      this.formGroup.appendChild(this.inputElem);\n      this.formGroup.appendChild(this.button);\n      this.formElem.appendChild(this.formGroup);\n      document.body.appendChild(this.formElem);\n      this.createListContainer();\n    }\n  }, {\n    key: \"createListContainer\",\n    value: function createListContainer() {\n      this.listContainer.classList.add('carousel');\n      this.listContainer.classList.add('clearfix');\n      this.listContainer.setAttribute('id', 'list');\n      this.listContainer.addEventListener('mousedown', this.slide.bind(this), true);\n      this.listContainer.addEventListener('mousemove', this.slide.bind(this), true);\n      this.listContainer.addEventListener('mouseup', this.slide.bind(this), true);\n      this.listContainer.addEventListener('touchstart', this.slide.bind(this), true);\n      this.listContainer.addEventListener('touchmove', this.slide.bind(this), true);\n      this.listContainer.addEventListener('touchend', this.slide.bind(this), true);\n      this.container.classList.add('content');\n      this.container.setAttribute('id', 'list-container');\n      this.container.appendChild(this.listContainer);\n      document.body.appendChild(this.container);\n      this.setNumCols();\n    }\n  }, {\n    key: \"setNumCols\",\n    value: function setNumCols() {\n      var windowWidth = this.container.offsetWidth;\n\n      if (windowWidth >= 960) {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 4;\n      } else if (windowWidth >= 793 && windowWidth < 960) {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 3;\n      } else if (windowWidth > 614 && windowWidth < 793) {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 2;\n      } else {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 1;\n      }\n\n      _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colWidth = windowWidth / _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber - 20;\n    }\n  }, {\n    key: \"slide\",\n    value: function slide(e) {\n      var _this2 = this;\n\n      if (e.target.classList.contains('title')) {\n        return;\n      }\n\n      e.preventDefault();\n      e.stopPropagation();\n\n      switch (e.type) {\n        case 'mousedown':\n        case 'touchstart':\n          _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isClicked = true;\n          _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clickX = e.pageX || e.changedTouches[0].pageX;\n          break;\n\n        case 'mousemove':\n        case 'touchmove':\n          if (_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isClicked) {\n            var delta = e.pageX || e.changedTouches[0].pageX;\n            var path = _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clickX - delta;\n            e.currentTarget.style.transform = \"translate3d(-\".concat(path + _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialX, \"px, 0, 0)\");\n          }\n\n          break;\n\n        case 'mouseup':\n        case 'touchend':\n          {\n            var containerWidth = this.container.offsetWidth;\n            _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isClicked = false;\n\n            var _delta = e.pageX || e.changedTouches[0].pageX;\n\n            if (_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].clickX < _delta) {\n              _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page -= 1;\n              _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialX -= containerWidth;\n            } else {\n              _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page += 1;\n              _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialX += containerWidth;\n            }\n\n            if (_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page === _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numControls) {\n              var pageId = _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nextPageToken;\n              this.controller.getVideos(e, function (data) {\n                return _this2.drawThumbs(data.items);\n              }, pageId);\n            }\n\n            var currentLabels = document.querySelectorAll('input:not(:checked) + label:not(.hide)');\n            var prevControl = document.querySelector('.controls input:checked');\n\n            if (prevControl !== null) {\n              prevControl.checked = false;\n            }\n\n            var control = document.getElementById(\"control-\".concat(_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page));\n\n            if (control !== null) {\n              control.checked = true;\n\n              if (control.nextSibling.classList.contains('hide') && control.previousSibling.classList.contains('hide')) {\n                var page = Number(control.getAttribute('data-id'));\n\n                while (control.previousSibling && control.previousSibling.getAttribute('id') !== \"control-\".concat(page - 4)) {\n                  control.nextSibling.classList.remove('hide');\n                  control = control.previousSibling;\n                }\n\n                control.nextSibling.classList.remove('hide');\n                currentLabels.forEach(function (el) {\n                  el.classList.add('hide');\n                });\n              } else if (control.nextSibling.classList.contains('hide')) {\n                var _page = Number(control.getAttribute('data-id'));\n\n                while (control.nextSibling && control.nextSibling.getAttribute('id') !== \"control-\".concat(_page + 4)) {\n                  control.nextSibling.classList.remove('hide');\n                  control = control.nextSibling;\n                }\n\n                control.classList.remove('hide');\n                currentLabels.forEach(function (el) {\n                  el.classList.add('hide');\n                });\n              }\n            }\n\n            e.currentTarget.style.transform = \"translate3d(-\".concat(_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialX, \"px, 0, 0)\");\n            break;\n          }\n\n        default:\n          break;\n      }\n    }\n  }, {\n    key: \"drawThumbs\",\n    value: function drawThumbs(data) {\n      var _this3 = this;\n\n      _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].videos = _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].videos.concat(data);\n      data.forEach(function (item) {\n        var article = document.createElement('article');\n        article.classList.add('thumb');\n        article.style.width = \"\".concat(_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colWidth, \"px\");\n        var preview = document.createElement('img');\n        preview.setAttribute('src', item.snippet.thumbnails.medium.url);\n        var titleLink = document.createElement('a');\n        titleLink.classList.add('video-link');\n        titleLink.setAttribute('href', \"https://www.youtube.com/watch?v=\".concat(item.id));\n        titleLink.addEventListener('click', function (e) {\n          e.stopPropagation();\n          e.preventDefault();\n          window.open(e.currentTarget.getAttribute('href'));\n        });\n        var title = document.createElement('h4');\n        title.classList.add('title');\n        title.innerText = item.snippet.title;\n        titleLink.appendChild(title);\n        var metaData = document.createElement('div');\n        metaData.classList.add('meta-data');\n        var author = document.createElement('small');\n        author.classList.add('author');\n        author.innerText = \"\".concat(item.snippet.channelTitle);\n        var publishedAt = document.createElement('span');\n        publishedAt.classList.add('publishedAt');\n        var publishedDate = new Date(item.snippet.publishedAt);\n        var thouthandsCont = Math.floor(item.statistics.viewCount / 1000);\n        var countDisplay = thouthandsCont > 0 ? \"\".concat(thouthandsCont, \"K\") : item.statistics.viewCount;\n        publishedAt.innerText = \"\".concat(publishedDate.toLocaleDateString('ru'), \" | \").concat(countDisplay);\n        metaData.append(author);\n        metaData.append(publishedAt);\n        var description = document.createElement('p');\n        description.innerText = item.snippet.description.slice(0, 300).concat('...');\n        var descContainer = document.createElement('div');\n        descContainer.classList.add('description');\n        article.appendChild(preview);\n        descContainer.appendChild(titleLink);\n        descContainer.appendChild(metaData);\n        descContainer.appendChild(description);\n        article.appendChild(descContainer);\n\n        _this3.listContainer.appendChild(article);\n\n        _this3.listContainer.style.width = \"\".concat(_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].videos.length * _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colWidth + _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].videos.length * 20, \"px\");\n      });\n      _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numControls += Math.round(data.length / _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber);\n      this.drawControl();\n    }\n  }, {\n    key: \"drawControl\",\n    value: function drawControl() {\n      var _this4 = this;\n\n      var controlContainer = document.getElementById('controls-container');\n      var createNew = false;\n\n      if (!controlContainer) {\n        controlContainer = document.createElement('div');\n        controlContainer.classList.add('controls');\n        controlContainer.setAttribute('id', 'controls-container');\n        createNew = true;\n      }\n\n      var startIndex = controlContainer.childNodes.length / 2;\n      var currentLabels = document.querySelectorAll('.controls label:not(.hide)');\n\n      if (currentLabels.length !== 0) {\n        for (var i = 0; i < currentLabels.length - 1; i++) {\n          currentLabels[i].classList.add('hide');\n        }\n      }\n\n      for (var _i = startIndex; _i < _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numControls; _i++) {\n        var control = document.createElement('input');\n        control.setAttribute('type', 'radio');\n        control.setAttribute('data-id', \"\".concat(_i + 1));\n        control.setAttribute('name', 'page');\n        control.setAttribute('id', \"control-\".concat(_i + 1));\n        control.addEventListener('click', function (e) {\n          var containerWidth = _this4.container.offsetWidth;\n          _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page = Number(e.target.getAttribute('data-id'));\n\n          if (_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page === _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].numControls) {\n            var pageId = _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].nextPageToken;\n\n            _this4.controller.getVideos(e, function (data) {\n              return _this4.drawThumbs(data.items);\n            }, pageId);\n          }\n\n          _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialX = containerWidth * (_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page - 1);\n          _this4.listContainer.style.transform = \"translate3d(-\".concat(_globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialX, \"px, 0, 0)\");\n        });\n        var label = document.createElement('label');\n        label.setAttribute('for', \"control-\".concat(_i + 1));\n        label.innerText = _i + 1;\n        controlContainer.appendChild(control);\n        controlContainer.appendChild(label);\n      }\n\n      if (createNew) {\n        this.container.appendChild(controlContainer);\n        var firstControl = document.getElementById('control-1');\n        firstControl.setAttribute('checked', 'checked');\n      }\n    }\n  }, {\n    key: \"onResizeAction\",\n    value: function onResizeAction() {\n      var windowWidth = this.container.offsetWidth;\n\n      if (windowWidth >= 960) {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 4;\n      } else if (windowWidth > 794 && windowWidth < 960) {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 3;\n      } else if (windowWidth > 615 && windowWidth <= 793) {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 2;\n      } else {\n        _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber = 1;\n      }\n\n      _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colWidth = windowWidth / _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber - 20;\n      var thumbs = document.querySelectorAll('.thumb');\n      var width = Math.round(windowWidth / _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].colNumber - 20);\n\n      if (thumbs.length !== 0) {\n        this.listContainer.style.transform = \"translate3d(-\".concat(windowWidth * _globalParameters__WEBPACK_IMPORTED_MODULE_1__[\"default\"].page, \"px, 0px, 0px)\");\n      }\n\n      thumbs.forEach(function (element) {\n        var thumb = element;\n        thumb.style.width = \"\".concat(width, \"px\");\n      });\n      var containerWidth = thumbs.length * width + 20 * thumbs.length;\n      this.listContainer.style.width = \"\".concat(containerWidth, \"px\");\n    }\n  }]);\n\n  return AppView;\n}();\n\n\n\n//# sourceURL=webpack:///./js/app-view.js?");
	
	/***/ }),
	
	/***/ "./js/app.component.js":
	/*!*****************************!*\
		!*** ./js/app.component.js ***!
		\*****************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var _app_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-view */ \"./js/app-view.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar App =\n/*#__PURE__*/\nfunction () {\n  function App() {\n    _classCallCheck(this, App);\n\n    this.view = new _app_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n  }\n\n  _createClass(App, [{\n    key: \"start\",\n    value: function start() {\n      this.view.createView();\n    }\n  }]);\n\n  return App;\n}();\n\n\n\n//# sourceURL=webpack:///./js/app.component.js?");
	
	/***/ }),
	
	/***/ "./js/app.controller.js":
	/*!******************************!*\
		!*** ./js/app.controller.js ***!
		\******************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AppController; });\n/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ \"./js/api.service.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _get(target, property, receiver) { if (typeof Reflect !== \"undefined\" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }\n\nfunction _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\nvar AppController =\n/*#__PURE__*/\nfunction (_APIService) {\n  _inherits(AppController, _APIService);\n\n  function AppController() {\n    _classCallCheck(this, AppController);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(AppController).apply(this, arguments));\n  }\n\n  _createClass(AppController, [{\n    key: \"getVideos\",\n    value: function getVideos(e, callback) {\n      var pageId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;\n      e.preventDefault();\n      var searchValue = document.getElementById('search-value').value;\n      var options = {\n        key: 'AIzaSyAy4216GuJdhOVHeVLyI8VhXm_Iv3gW7pM',\n        type: 'video',\n        part: 'snippet',\n        pageToken: pageId,\n        maxResults: 15,\n        q: searchValue\n      };\n\n      _get(_getPrototypeOf(AppController.prototype), \"getData\", this).call(this, 'search', options, callback);\n    }\n  }]);\n\n  return AppController;\n}(_api_service__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n\n//# sourceURL=webpack:///./js/app.controller.js?");
	
	/***/ }),
	
	/***/ "./js/globalParameters.js":
	/*!********************************!*\
		!*** ./js/globalParameters.js ***!
		\********************************/
	/*! exports provided: default */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Parameters =\n/*#__PURE__*/\nfunction () {\n  function Parameters() {\n    _classCallCheck(this, Parameters);\n\n    this.videos = [];\n    this.colNumber = 0;\n    this.colWidth = 0;\n    this.containerWidth = 0;\n    this.nextPageToken = '';\n    this.isClicked = false;\n    this.initialX = 0;\n    this.page = 1;\n    this.numControls = 0;\n    this.searchValue = '';\n  }\n\n  _createClass(Parameters, [{\n    key: \"reset\",\n    value: function reset() {\n      this.videos = [];\n      this.nextPageToken = '';\n      this.isClicked = false;\n      this.initialX = 0;\n      this.page = 0;\n      this.numControls = 0;\n      this.searchValue = '';\n    }\n  }]);\n\n  return Parameters;\n}();\n\nvar globalParams = new Parameters();\n/* harmony default export */ __webpack_exports__[\"default\"] = (globalParams);\n\n//# sourceURL=webpack:///./js/globalParameters.js?");
	
	/***/ }),
	
	/***/ "./js/main.js":
	/*!********************!*\
		!*** ./js/main.js ***!
		\********************/
	/*! no exports provided */
	/***/ (function(module, __webpack_exports__, __webpack_require__) {
	
	"use strict";
	eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ \"./js/app.component.js\");\n\nvar app = new _app_component__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\napp.start();\nwindow.addEventListener('resize', app.view.onResizeAction.bind(app.view));\n\n//# sourceURL=webpack:///./js/main.js?");
	
	/***/ })
	
	/******/ });