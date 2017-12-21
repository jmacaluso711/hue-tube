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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);

var inputSlider = document.querySelector('.hue-slider');
var hueTube = document.querySelector('.hue-tube');
var images = document.querySelectorAll('.hue-image');
var hueOverlay = document.querySelector('.hue');
var playBtn = document.querySelector('.play');
var playIcon = playBtn.querySelector('img');
var body = document.querySelector('body');

/*
  Doc Ready
*/

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    body.classList.remove('loading');
  }, 600);
});

/*
  Hue Image Slider
*/

var currentHugh = 0;
var hughSlider = setInterval(nextHugh, 2000);

function nextHugh() {
  images[currentHugh].className = 'hue-image';
  currentHugh = (currentHugh + 1) % images.length;
  images[currentHugh].className = 'hue-image hue-image--visible';
}

/*
  Auto Hue
*/

var autoHueIt = void 0;
var increment = 1;
var playing = false;

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

playBtn.addEventListener('click', togglePlay);

/*
  Hue it yourself
*/

var hue = 0;

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

hueOverlay.addEventListener('mousemove', hueItYourself);

/*
  Hue Scrobbler
*/

function handleScrobbler() {
  hueOverlay.style.backgroundColor = 'hsl(' + this.value + ', 70%, 50%)';
  document.documentElement.style.setProperty('--' + this.name, 'hsl(' + this.value + ', 70%, 50%)');
}

inputSlider.addEventListener('change', handleScrobbler);
inputSlider.addEventListener('mousemove', handleScrobbler);

/***/ })
/******/ ]);
//# sourceMappingURL=App.bundle.js.map