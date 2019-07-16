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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main-es6.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main-es6.js":
/*!************************!*\
  !*** ./js/main-es6.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar WhackMole =\n/*#__PURE__*/\nfunction () {\n  function WhackMole(startButton, moles, scoreOut, gameDuration, options) {\n    _classCallCheck(this, WhackMole);\n\n    this.btnStart = startButton;\n    this.moles = moles;\n    this.scoreOut = scoreOut;\n    this.avaliableScores = 0;\n    this.avaliableScoresOut = options.allScoresBtn;\n    this.gameTime = gameDuration;\n    this.minmeowTime = options.meowMinTime != null ? options.meowMinTime : 1000;\n    this.maxmeowTime = options.meowMaxTime != null ? options.meowMaxTime : 3000;\n    this.afterEveryMeowInterval = options.afterEveryMeowInterval != null ? options.afterEveryMeowInterval : 1000;\n    this.speedUpAfterEveryMeowInterval = this.afterEveryMeowInterval;\n    this.numOfMoles = this.moles.length;\n    this.numKeyPad = options.numKeyPad != null ? options.numKeyPad : true;\n    this.meowAfterMeow = options.meowAfterMeow != null ? options.meowAfterMeow : false;\n    this.prevMoleNumber = null;\n    this.timeUp = false;\n    this.score = 0;\n    this.gameTimer = null;\n    this.meowTimer = {};\n    this.intervalTimer = null;\n    this.currentMolesPos = {};\n    this.defoultCat = './images/mole_01.png';\n    this.halfClippedCat = './images/mole_02.png';\n    this.clippedCat = './images/mole_03.png';\n    this.beginPos = 120;\n    this.endPos = -10;\n    this.speedUpTime = 0;\n  }\n\n  _createClass(WhackMole, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      this.scoreOut.innerHTML = this.score;\n      this.timeUp = false;\n      this.prevMoleNumber = null;\n      this.btnStart.classList.remove('start');\n      this.btnStart.classList.add('finish');\n      this.meow();\n      this.intervalTimer = setInterval(function () {\n        if (_this.timeUp === false) {\n          _this.meow();\n        } else {\n          _this.stop();\n        }\n      }, this.speedUpAfterEveryMeowInterval);\n      this.numKeyPadActive();\n      this.gameTimer = setTimeout(function () {\n        _this.stop();\n      }, this.gameTime);\n    }\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      this.btnStart.classList.remove('finish');\n      this.btnStart.classList.add('start');\n      this.timeUp = true;\n\n      for (var i = 0; i < this.moles.length; i++) {\n        this.clickd(this.moles[i]);\n      }\n\n      var timers = Object.keys(this.meowTimer);\n\n      for (var _i = 0; _i < timers.length; _i++) {\n        cancelAnimationFrame(this.meowTimer[timers[_i]]);\n      }\n\n      clearInterval(this.gameTimer);\n      clearInterval(this.intervalTimer);\n    }\n  }, {\n    key: \"resetApp\",\n    value: function resetApp() {\n      this.speedUpTime = 0;\n      this.scoreOut.innerHTML = this.score = 0;\n      this.avaliableScoresOut.innerHTML = this.avaliableScores = 0;\n      this.speedUpAfterEveryMeowInterval = this.afterEveryMeowInterval;\n      this.stop();\n    }\n  }, {\n    key: \"meow\",\n    value: function meow() {\n      var time = this._randomTime(this.minmeowTime, this.maxmeowTime) - this.speedUpTime,\n          upDirection = true,\n          localEndPos = this.endPos,\n          currentPos = this.beginPos,\n          self = this,\n          fakeMeowChance = Math.random().toFixed(2);\n\n      var mole = this._randomMole(this.moles),\n          beginTime = Date.now();\n\n      if (fakeMeowChance < 0.2) {\n        localEndPos = 75;\n        time = 400;\n        mole.classList.add('faked');\n      }\n\n      if (time < 400) {\n        time = 400;\n      }\n\n      mole.classList.add('visible');\n      cancelAnimationFrame(this.meowTimer[mole.id]);\n      this.meowTimer[mole.id] = requestAnimationFrame(function animateMole() {\n        var duration = Date.now() - beginTime;\n\n        if (currentPos > 57 && currentPos <= 63 && upDirection === true) {\n          self.avaliableScoresOut.innerHTML = ++self.avaliableScores;\n        }\n\n        if (currentPos <= self.beginPos && currentPos >= localEndPos && upDirection === true) {\n          currentPos -= 5;\n        } else if (currentPos <= self.beginPos && upDirection === false) {\n          currentPos += 5;\n        } else if (currentPos > self.beginPos && upDirection === false) {\n          cancelAnimationFrame(self.meowTimer[mole.id]);\n          mole.classList.remove('visible');\n          mole.classList.remove('faked');\n        }\n\n        mole.style.transform = \"translate3d(0, \".concat(currentPos, \"px, 0)\");\n        self.currentMolesPos[mole.id] = currentPos;\n\n        if (duration > time) {\n          upDirection = false;\n        }\n\n        self.meowTimer[mole.id] = requestAnimationFrame(animateMole);\n      });\n    }\n  }, {\n    key: \"clickd\",\n    value: function clickd(mole) {\n      var _this2 = this;\n\n      if (!mole.classList.contains('clicked') && !mole.classList.contains('faked')) {\n        var currentPos = this.currentMolesPos[mole.id];\n        mole.classList.add('clicked');\n        cancelAnimationFrame(this.meowTimer[mole.id]);\n        var endAnimTimer = requestAnimationFrame(function endAnimation() {\n          currentPos += 10;\n          mole.style.transform = \"translate3d(0, \".concat(currentPos, \"px, 0)\");\n          endAnimTimer = requestAnimationFrame(endAnimation);\n\n          if (currentPos > _this2.beginPos) {\n            cancelAnimationFrame(endAnimTimer);\n            _this2.currentMolesPos[mole.id] = _this2.beginPos;\n          }\n        });\n        mole.classList.remove('visible');\n\n        if (this.timeUp === false && currentPos < 75) {\n          mole.setAttribute('src', this.halfClippedCat);\n          setTimeout(function () {\n            mole.setAttribute('src', _this2.clippedCat);\n            setTimeout(function () {\n              mole.setAttribute('src', _this2.defoultCat);\n            }, 100);\n          }, 100);\n          this.score++;\n          this.scoreOut.innerHTML = this.score;\n\n          if (this.speedUpTime < this.minmeowTime) {\n            this.speedUpTime += 10;\n          }\n\n          if (this.speedUpAfterEveryMeowInterval > 300) {\n            this.speedUpAfterEveryMeowInterval -= 5;\n          }\n\n          if (this.meowAfterMeow === true) {\n            this.meow();\n          }\n        }\n\n        setTimeout(function () {\n          mole.classList.remove('clicked');\n        }, 1000);\n      }\n    }\n  }, {\n    key: \"_randomTime\",\n    value: function _randomTime(min, max) {\n      return Math.round(Math.random() * (max - min) + min);\n    }\n  }, {\n    key: \"_randomMole\",\n    value: function _randomMole(moles) {\n      var idx = Math.floor(Math.random() * this.numOfMoles);\n      var mole = moles[idx];\n\n      if (idx === this.prevMoleNumber) {\n        return this._randomMole(moles);\n      }\n\n      this.prevMoleNumber = idx;\n      return mole;\n    }\n  }, {\n    key: \"numKeyPadActive\",\n    value: function numKeyPadActive() {\n      if (this.numKeyPad === true) {\n        var mol1 = this.moles[0],\n            mol2 = this.moles[1],\n            mol3 = this.moles[2],\n            mol4 = this.moles[3],\n            mol5 = this.moles[4],\n            mol6 = this.moles[5],\n            mol7 = this.moles[6],\n            mol8 = this.moles[7],\n            mol9 = this.moles[8],\n            self = this;\n        document.addEventListener('keydown', function (event) {\n          switch (event.keyCode) {\n            case 103:\n            case 71:\n              if (!mol1.classList.contains('clicked') && mol1.classList.contains('visible')) {\n                self.clickd(mol1);\n              }\n\n              break;\n\n            case 104:\n            case 72:\n              if (!mol2.classList.contains('clicked') && mol2.classList.contains('visible')) {\n                self.clickd(mol2);\n              }\n\n              break;\n\n            case 105:\n            case 73:\n              if (!mol3.classList.contains('clicked') && mol3.classList.contains('visible')) {\n                self.clickd(mol3);\n              }\n\n              break;\n\n            case 100:\n            case 68:\n              if (!mol4.classList.contains('clicked') && mol4.classList.contains('visible')) {\n                self.clickd(mol4);\n              }\n\n              break;\n\n            case 101:\n            case 69:\n              if (!mol5.classList.contains('clicked') && mol5.classList.contains('visible')) {\n                self.clickd(mol5);\n              }\n\n              break;\n\n            case 102:\n            case 70:\n              if (!mol6.classList.contains('clicked') && mol6.classList.contains('visible')) {\n                self.clickd(mol6);\n              }\n\n              break;\n\n            case 97:\n            case 65:\n              if (!mol7.classList.contains('clicked') && mol7.classList.contains('visible')) {\n                self.clickd(mol7);\n              }\n\n              break;\n\n            case 98:\n            case 66:\n              if (!mol8.classList.contains('clicked') && mol8.classList.contains('visible')) {\n                self.clickd(mol8);\n              }\n\n              break;\n\n            case 99:\n            case 67:\n              if (!mol9.classList.contains('clicked') && mol9.classList.contains('visible')) {\n                self.clickd(mol9);\n              }\n\n              break;\n\n            default:\n              break;\n          }\n        });\n      }\n    }\n  }, {\n    key: \"setMinmeowTime\",\n    value: function setMinmeowTime(time) {\n      if (typeof time === 'number' && time != undefined) {\n        this.minmeowTime = time;\n      }\n    }\n  }, {\n    key: \"setMaxMeowTime\",\n    value: function setMaxMeowTime(time) {\n      if (typeof time === 'number' && time != undefined) {\n        this.maxmeowTime = time;\n      }\n    }\n  }, {\n    key: \"setGameDuration\",\n    value: function setGameDuration(time) {\n      if (typeof time === 'number' && time != undefined) {\n        this.gameTime = time;\n      }\n    }\n  }, {\n    key: \"setMeowAfterMeowTime\",\n    value: function setMeowAfterMeowTime(time) {\n      if (typeof time === 'number' && time != undefined) {\n        this.afterEveryMeowInterval = time;\n      }\n    }\n  }, {\n    key: \"setMeowAfterMeow\",\n    value: function setMeowAfterMeow(meowAfterMeow) {\n      if (typeof meowAfterMeow === 'boolean' && meowAfterMeow != undefined) {\n        this.meowAfterMeow = meowAfterMeow;\n      }\n    }\n  }]);\n\n  return WhackMole;\n}();\n\nvar startBtn = document.getElementById('control-btn'),\n    moles = document.querySelectorAll('.mole-pic'),\n    scoreOut = document.getElementById('score'),\n    resetBtn = document.getElementById('reset'),\n    allScoresBtn = document.getElementById('avaliable-score');\nvar wam = new WhackMole(startBtn, moles, scoreOut, 60000, {\n  numKeyPad: true,\n  allScoresBtn: allScoresBtn,\n  meowMinTime: 1000,\n  meowMaxTime: 2000,\n  afterEveryMeowInterval: 1000,\n  meowAfterMeow: false\n});\nwam.btnStart.addEventListener('click', function (event) {\n  if (wam.btnStart.classList.contains('start')) {\n    wam.init();\n  } else {\n    wam.stop();\n  }\n});\n\nfor (var i = 0; i < wam.moles.length; i++) {\n  wam.moles[i].addEventListener('click', function (event) {\n    wam.clickd(event.target);\n  });\n  wam.moles[i].addEventListener('mousedown', function (event) {\n    event.preventDefault();\n  });\n}\n\nresetBtn.addEventListener('click', function () {\n  wam.resetApp();\n});\nvar openMoreSetBtn = document.getElementById('open-more-settings'),\n    moreSettingsPanel = document.getElementById('more-settings-panel'),\n    gameDurationControl = document.getElementById('game-duration'),\n    minDisplayCatTimeControl = document.getElementById('min-meow-time'),\n    maxDisplayCatTimeControl = document.getElementById('max-meow-time'),\n    catAfterCatIntervalControler = document.getElementById('meow-after-meow-time'),\n    catAfterCatControl = document.getElementById('cat-after-cat');\nvar beginPos = -300;\nopenMoreSetBtn.addEventListener('click', function () {\n  if (moreSettingsPanel.classList.contains('closed')) {\n    moreSettingsPanel.classList.remove('closed');\n    moreSettingsPanel.classList.add('open');\n    var openTimer = requestAnimationFrame(function openSett() {\n      beginPos += 20;\n      moreSettingsPanel.style.left = \"\".concat(beginPos, \"px\");\n      openTimer = requestAnimationFrame(openSett);\n\n      if (beginPos > 0) {\n        beginPos = 0;\n        moreSettingsPanel.style.left = \"\".concat(beginPos, \"px\");\n        cancelAnimationFrame(openTimer);\n      }\n    });\n  } else if (moreSettingsPanel.classList.contains('open')) {\n    var closeTimer = requestAnimationFrame(function closeSett() {\n      beginPos -= 20;\n      moreSettingsPanel.style.left = \"\".concat(beginPos, \"px\");\n      closeTimer = requestAnimationFrame(closeSett);\n\n      if (beginPos < -300) {\n        beginPos = -300;\n        moreSettingsPanel.style.left = \"\".concat(beginPos, \"px\");\n        cancelAnimationFrame(closeTimer);\n      }\n    });\n    moreSettingsPanel.classList.remove('open');\n    moreSettingsPanel.classList.add('closed');\n  }\n});\ngameDurationControl.addEventListener('change', function (event) {\n  if (+event.target.value < +event.target.min || isNaN(event.target.value)) {\n    event.target.value = event.target.min;\n  }\n\n  wam.setGameDuration(+event.target.value * 1000);\n});\nminDisplayCatTimeControl.addEventListener('change', function (event) {\n  if (+event.target.value < +event.target.min || isNaN(event.target.value)) {\n    event.target.value = event.target.min;\n  }\n\n  if (+event.target.value >= maxDisplayCatTimeControl.value) {\n    maxDisplayCatTimeControl.value = (+event.target.value + +maxDisplayCatTimeControl.step).toFixed(1);\n  }\n\n  wam.setMinmeowTime(+event.target.value * 1000);\n});\nmaxDisplayCatTimeControl.addEventListener('change', function (event) {\n  if (+event.target.value < +event.target.min || isNaN(event.target.value)) {\n    event.target.value = event.target.min;\n  }\n\n  if (+event.target.value <= minDisplayCatTimeControl.value) {\n    minDisplayCatTimeControl.value = (+event.target.value - +minDisplayCatTimeControl.step).toFixed(1);\n  }\n\n  wam.setMaxMeowTime(+event.target.value * 1000);\n});\ncatAfterCatIntervalControler.addEventListener('change', function (event) {\n  if (+event.target.value < +event.target.min || isNaN(event.target.value)) {\n    event.target.value = event.target.min;\n  }\n\n  wam.setMeowAfterMeowTime(+event.target.value * 1000);\n});\ncatAfterCatControl.addEventListener('change', function (event) {\n  wam.setMeowAfterMeow(event.target.checked);\n});\n\n//# sourceURL=webpack:///./js/main-es6.js?");

/***/ })

/******/ });