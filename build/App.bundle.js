/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.togglePlay = togglePlay;
exports.hueItYourself = hueItYourself;
var inputSlider = document.querySelector('.hue-slider');
var hueOverlay = document.querySelector('.hue');
var playBtn = document.querySelector('.play');
var playIcon = playBtn.querySelector('img');

var autoHueIt = void 0;
var increment = 1;
var playing = false;
var hue = 0;

function autoHue() {
  if (hue === 360) {
    playIcon.setAttribute('src', 'img/play.svg');
    return;
  }
  if (hue > 360) {
    hue += increment;
  }
  hue++;
  hueOverlay.style.backgroundColor = 'hsl(' + hue + ', 70%, 50%)';
  inputSlider.value = '' + hue;
  document.documentElement.style.setProperty('--hue-slider', 'hsl(' + hue + ', 70%, 50%)');
}

function togglePlay() {
  playing = !playing;
  if (playing) {
    autoHueIt = setInterval(autoHue, 200);
  } else {
    clearInterval(autoHueIt);
  }
  updateButton();
}

function updateButton() {
  var icon = !playing ? 'play.svg' : 'pause.svg';
  playIcon.setAttribute('src', 'img/' + icon);
}

function hueItYourself(e) {

  playing = false;
  clearInterval(autoHueIt);
  updateButton();

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  hueOverlay.style.backgroundColor = 'hsl(' + hue + ', 70%, 50%)';
  inputSlider.value = '' + hue;
  document.documentElement.style.setProperty('--hue-slider', 'hsl(' + hue + ', 70%, 50%)');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var hueOverlay = document.querySelector('.hue');

function handleScrobbler() {
  hueOverlay.style.backgroundColor = 'hsl(' + this.value + ', 70%, 50%)';
  document.documentElement.style.setProperty('--' + this.name, 'hsl(' + this.value + ', 70%, 50%)');
}

exports.default = handleScrobbler;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var images = document.querySelectorAll('.hue-image');
var currentHugh = 0;

function nextHugh() {
  images[currentHugh].className = 'hue-image';
  currentHugh = (currentHugh + 1) % images.length;
  images[currentHugh].className = 'hue-image hue-image--visible';
}

exports.default = nextHugh;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _slider = __webpack_require__(2);

var _slider2 = _interopRequireDefault(_slider);

var _scrobbler = __webpack_require__(1);

var _scrobbler2 = _interopRequireDefault(_scrobbler);

var _hue = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var inputSlider = document.querySelector('.hue-slider');
var hueOverlay = document.querySelector('.hue');
var playBtn = document.querySelector('.play');
var playIcon = playBtn.querySelector('img');

var hughSlider = setInterval(_slider2.default, 2000);

playBtn.addEventListener('click', _hue.togglePlay);
hueOverlay.addEventListener('mousemove', _hue.hueItYourself);
inputSlider.addEventListener('change', _scrobbler2.default);
inputSlider.addEventListener('mousemove', _scrobbler2.default);

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map