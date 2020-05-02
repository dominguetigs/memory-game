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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/game/contants.js":
/*!******************************!*\
  !*** ./src/game/contants.js ***!
  \******************************/
/*! exports provided: difficulties, backCardImagesUrl, defaultImagesURL, emojiImagesURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"difficulties\", function() { return difficulties; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backCardImagesUrl\", function() { return backCardImagesUrl; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"defaultImagesURL\", function() { return defaultImagesURL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"emojiImagesURL\", function() { return emojiImagesURL; });\n// Difficulty user can choose in the game\nvar difficulties = {\n  easy: 20,\n  medium: 30,\n  hard: 50\n}; // Images URL to set in back cards\n\nvar backCardImagesUrl = [\"card-background.jpg\", \"card-background-2.jpg\", \"card-background-3.jpg\", \"card-background-4.jpg\", \"card-background-5.jpg\", \"card-background-6.jpg\", \"card-background-7.jpg\", \"card-background-9.jpg\"]; // Default category - to set images URL in front cards\n\nvar defaultImagesURL = [\"4-icons.png\", \"4-squares.png\", \"a-letter.png\", \"airplane.png\", \"android.jpg\", \"animated-search.png\", \"bluetooth.jpg\", \"bus.png\", \"camera.png\", \"cinema.png\", \"clock.png\", \"cloud-sun.jpg\", \"decoration.png\", \"earth-virus.png\", \"eye.png\", \"flower-black-white.png\", \"globe-airplane.jpg\", \"globe-grafit.png\", \"gu-grafit.png\", \"h-letter.png\", \"hands-washed.png\", \"idea.png\", \"instagram.jpg\", \"light.jpg\", \"man-head.png\", \"medicine-icons.png\", \"mountains.png\", \"musical-note.png\", \"notification.jpg\", \"pen.png\", \"people.png\", \"person.png\", \"pixeled-heart.png\", \"search.png\", \"telephone.png\", \"thumb.png\", \"virus.png\", \"w.png\", \"whatsapp.jpg\", \"www.png\"]; // Emojis category - set images URL in front cards \n\nvar emojiImagesURL = [\"emoji-1.jpg\", \"emoji-2.jpg\", \"emoji-3.jpg\", \"emoji-4.jpg\", \"emoji-5.jpg\", \"emoji-6.jpg\", \"emoji-7.jpg\", \"emoji-8.jpg\", \"emoji-9.jpg\", \"emoji-10.jpg\", \"emoji-11.jpg\", \"emoji-12.jpg\", \"emoji-13.png\", \"emoji-14.jpg\", \"emoji-15.jpg\", \"emoji-16.jpg\", \"emoji-17.jpg\", \"emoji-18.png\", \"emoji-19.jpg\", \"emoji-20.png\", \"emoji-21.jpg\", \"emoji-22.jpg\", \"emoji-23.jpg\", \"emoji-24.jpg\", \"emoji-25.jpg\", \"emoji-26.jpg\", \"emoji-27.jpg\", \"emoji-28.jpg\", \"emoji-29.jpg\", \"emoji-30.jpg\", \"emoji-31.jpg\", \"emoji-32.png\"];\n\n//# sourceURL=webpack:///./src/game/contants.js?");

/***/ }),

/***/ "./src/game/draw.js":
/*!**************************!*\
  !*** ./src/game/draw.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Draw; });\n/* harmony import */ var _contants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contants */ \"./src/game/contants.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/game/utils.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar Draw = /*#__PURE__*/function () {\n  function Draw(gameContainer, difficulty) {\n    _classCallCheck(this, Draw);\n\n    this.cardsQuantity = _contants__WEBPACK_IMPORTED_MODULE_0__[\"difficulties\"][difficulty];\n    this.gameContainer = gameContainer;\n  } // Init draw construction\n\n\n  _createClass(Draw, [{\n    key: \"init\",\n    value: function init() {\n      var rowsCount = 5;\n      var columnsCount = this.cardsQuantity / rowsCount; // Reset UI\n\n      this.gameContainer.innerHTML = \"\";\n\n      for (var i = 0; i < rowsCount; i++) {\n        var rowElement = document.createElement(\"div\");\n        rowElement.classList.add(\"row\");\n\n        for (var j = 0; j < columnsCount; j++) {\n          var flipContainerElement = document.createElement(\"div\");\n          flipContainerElement.classList.add(\"flip-container\");\n          var flipElement = document.createElement(\"div\");\n          flipElement.classList.add(\"flip\");\n          var frontCardElement = document.createElement(\"div\");\n          frontCardElement.classList.add(\"front\");\n          var backCardElement = document.createElement(\"div\");\n          backCardElement.classList.add(\"back\");\n          flipElement.append.apply(flipElement, [frontCardElement, backCardElement]);\n          flipContainerElement.appendChild(flipElement);\n          rowElement.appendChild(flipContainerElement);\n        }\n\n        this.gameContainer.appendChild(rowElement);\n      }\n\n      this._setImageInBackCards();\n\n      this._setImageInFrontCards();\n    } // Set image in background back cards\n\n  }, {\n    key: \"_setImageInBackCards\",\n    value: function _setImageInBackCards() {\n      var backCards = document.querySelectorAll('.back');\n      var shuffledBackCardImagesURL = _utils__WEBPACK_IMPORTED_MODULE_1__[\"utils\"].shuffle(_contants__WEBPACK_IMPORTED_MODULE_0__[\"backCardImagesUrl\"]);\n      backCards.forEach(function (backCard) {\n        backCard.style.backgroundImage = \"url(\\\"./assets/images/cards/back/\".concat(shuffledBackCardImagesURL[0], \"\\\")\");\n      });\n    } // Set image in background front cards\n\n  }, {\n    key: \"_setImageInFrontCards\",\n    value: function _setImageInFrontCards() {\n      var frontCards = document.querySelectorAll('.front');\n      var shuffledFrontCardImagesURL = _utils__WEBPACK_IMPORTED_MODULE_1__[\"utils\"].shuffle(_contants__WEBPACK_IMPORTED_MODULE_0__[\"emojiImagesURL\"]).slice(0, this.cardsQuantity / 2);\n      shuffledFrontCardImagesURL.push.apply(shuffledFrontCardImagesURL, _toConsumableArray(shuffledFrontCardImagesURL));\n      var cards = _utils__WEBPACK_IMPORTED_MODULE_1__[\"utils\"].shuffle(shuffledFrontCardImagesURL);\n      frontCards.forEach(function (frontCard, index) {\n        frontCard.style.backgroundImage = \"url(\\\"./assets/images/cards/front/emojis/\".concat(cards[index], \"\\\")\");\n        frontCard.style.backgroundPosition = \"50% 50%\";\n        frontCard.style.backgroundSize = \"cover\";\n      });\n    }\n  }]);\n\n  return Draw;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/draw.js?");

/***/ }),

/***/ "./src/game/enemy.js":
/*!***************************!*\
  !*** ./src/game/enemy.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Enemy; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/game/utils.js\");\nfunction _createForOfIteratorHelper(o) { if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Enemy = /*#__PURE__*/function () {\n  function Enemy(cards, difficulty) {\n    _classCallCheck(this, Enemy);\n\n    this.difficulty = difficulty;\n    this.pointsElement = document.querySelector('.score.enemy small span');\n    this.points = 0;\n    /**\r\n     * PC Memory\r\n     */\n\n    this.memory = {\n      cards: [],\n      pairs: [],\n      flipped: []\n    };\n    this.cards = cards;\n\n    this._updatePointsUI();\n  }\n\n  _createClass(Enemy, [{\n    key: \"play\",\n    value: function play() {\n      var _this = this;\n\n      var index1;\n      var index2;\n\n      if ((this.difficulty === 'hard' || this.difficulty === 'medium') && this.memory.pairs.length) {\n        var cardsPair = this.memory.cards.filter(function (m) {\n          return m.imageUrl === _this.memory.pairs[0];\n        });\n        index1 = cardsPair[0].index;\n        index2 = cardsPair[1].index;\n\n        this._flipCards(index1, index2);\n\n        return;\n      }\n\n      var notFlippedCards = _toConsumableArray(Array(this.cards.length).keys());\n\n      if (this.memory.flipped.length) {\n        var _iterator = _createForOfIteratorHelper(this.memory.flipped),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var index = _step.value;\n            notFlippedCards.splice(notFlippedCards.indexOf(index), 1);\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n\n      if (this.difficulty === 'hard') {\n        var indexes = this.memory.cards.map(function (m) {\n          return m.index;\n        });\n\n        var _iterator2 = _createForOfIteratorHelper(indexes),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var _index = _step2.value;\n            notFlippedCards.splice(notFlippedCards.indexOf(_index), 1);\n          }\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n\n      if (notFlippedCards.length) {\n        while (index1 === index2) {\n          var indexesToRandom = _toConsumableArray(notFlippedCards);\n\n          var i1 = _utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].getRandomNumber(indexesToRandom.length);\n          indexesToRandom.splice(i1);\n          index1 = notFlippedCards[i1];\n\n          if (this.difficulty === 'hard') {\n            (function () {\n              var imageUrl = _toConsumableArray(_this.cards)[index1].children[0].style.backgroundImage;\n\n              var card = _this.memory.cards.filter(function (m) {\n                return m.imageUrl === imageUrl;\n              });\n\n              index2 = card.length ? card[0].index : null;\n            })();\n          }\n\n          console.log(index1, index2);\n          index2 = index2 || indexesToRandom[_utils__WEBPACK_IMPORTED_MODULE_0__[\"utils\"].getRandomNumber(indexesToRandom.length)];\n        }\n\n        this._flipCards(index1, index2);\n      }\n    }\n  }, {\n    key: \"addCardsToMemory\",\n    value: function addCardsToMemory() {\n      for (var _len = arguments.length, cards = new Array(_len), _key = 0; _key < _len; _key++) {\n        cards[_key] = arguments[_key];\n      }\n\n      var imageUrl1 = cards[0].children[0].style.backgroundImage;\n      var imageUrl2 = cards[1].children[0].style.backgroundImage;\n\n      if (imageUrl1 === imageUrl2) {\n        this.memory.flipped.push(_toConsumableArray(this.cards).indexOf(cards[0]), _toConsumableArray(this.cards).indexOf(cards[1]));\n        var memoryCards = this.memory.cards.filter(function (m) {\n          return m.imageUrl === imageUrl1;\n        });\n\n        var _iterator3 = _createForOfIteratorHelper(memoryCards),\n            _step3;\n\n        try {\n          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {\n            var card = _step3.value;\n            this.memory.cards.splice(this.memory.cards.indexOf(card), 1);\n          }\n        } catch (err) {\n          _iterator3.e(err);\n        } finally {\n          _iterator3.f();\n        }\n\n        var memoryPairs = this.memory.pairs.filter(function (m) {\n          return m === imageUrl1;\n        });\n\n        if (memoryPairs.length) {\n          this.memory.pairs.splice(this.memory.pairs.indexOf(memoryPairs[0]), 1);\n        }\n\n        return;\n      }\n\n      for (var _i = 0, _cards = cards; _i < _cards.length; _i++) {\n        var _card = _cards[_i];\n\n        this._addCardToMemory(_card);\n      }\n    }\n  }, {\n    key: \"updatePoints\",\n    value: function updatePoints(points) {\n      this.points += points;\n\n      this._updatePointsUI();\n    }\n  }, {\n    key: \"_addCardToMemory\",\n    value: function _addCardToMemory(card) {\n      var index = _toConsumableArray(this.cards).indexOf(card);\n\n      var imageUrl = card.children[0].style.backgroundImage;\n\n      if (this._checkHasCardIndexInMemory(index)) {\n        return;\n      }\n\n      var hasPairInMemory = this._getCardsPair(imageUrl);\n\n      var cardInMemory = {\n        index: index,\n        imageUrl: imageUrl\n      };\n\n      if (hasPairInMemory) {\n        this.memory.pairs.push(imageUrl);\n      }\n\n      this.memory.cards.push(cardInMemory);\n    }\n  }, {\n    key: \"_checkHasCardIndexInMemory\",\n    value: function _checkHasCardIndexInMemory(cardIndex) {\n      return this.memory.cards.filter(function (m) {\n        return m.index === cardIndex;\n      }).length;\n    }\n  }, {\n    key: \"_getCardsPair\",\n    value: function _getCardsPair(imageUrl) {\n      return this.memory.cards.filter(function (m) {\n        return m.imageUrl === imageUrl;\n      }).length;\n    }\n  }, {\n    key: \"_flipCards\",\n    value: function _flipCards(indexCard1, indexCard2) {\n      var _this2 = this;\n\n      setTimeout(function () {\n        _this2.cards[indexCard1].children[0].click();\n\n        setTimeout(function () {\n          return _this2.cards[indexCard2].children[0].click();\n        }, 1000);\n      }, 1700);\n    }\n  }, {\n    key: \"_updatePointsUI\",\n    value: function _updatePointsUI() {\n      this.pointsElement.innerText = this.points;\n    }\n  }]);\n\n  return Enemy;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/enemy.js?");

/***/ }),

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/game/player.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/game/enemy.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/game/utils.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar enemyScore = document.querySelector('.score.enemy');\nvar playerScore = document.querySelector('.score.player');\n\nvar Game = /*#__PURE__*/function () {\n  function Game(difficulty) {\n    _classCallCheck(this, Game);\n\n    this.cards = document.querySelectorAll('.flip');\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.cards, difficulty); // if turn is true Player plays, turn is false Enemy plays\n\n    this.turn = !!_utils__WEBPACK_IMPORTED_MODULE_2__[\"utils\"].getRandomNumber();\n  }\n\n  _createClass(Game, [{\n    key: \"init\",\n    value: function init() {\n      var _this = this;\n\n      playerScore.classList.remove('turn');\n      enemyScore.classList.remove('turn');\n      this.cards.forEach(function (card) {\n        card.addEventListener('click', function (e) {\n          if (e.isTrusted === _this.turn) {\n            _this._play(e.target.parentElement);\n          }\n        });\n      });\n\n      if (!this.turn) {\n        enemyScore.classList.toggle('turn');\n        this.enemy.play();\n      }\n    } // Initialize memory game\n\n  }, {\n    key: \"_play\",\n    value: function _play(clickedCard) {\n      if (clickedCard.classList.contains(\"flip\") && !clickedCard.parentElement.classList.contains(\"success\")) {\n        var flippedCard = document.querySelectorAll(\".flip-container:not(.success) .flipped\");\n\n        if (flippedCard[0] === clickedCard) {\n          return;\n        }\n\n        if (flippedCard.length < 2) {\n          clickedCard.classList.toggle(\"flipped\");\n\n          if (flippedCard[0] && flippedCard[0] !== clickedCard) {\n            this._checkEqualCards(flippedCard[0], clickedCard);\n          }\n        }\n\n        this._checkEndGame();\n      }\n    }\n  }, {\n    key: \"_checkEndGame\",\n    value: function _checkEndGame() {\n      var _this2 = this;\n\n      var flippedCards = document.querySelectorAll('.flip-container .flipped');\n\n      if (flippedCards.length === this.cards.length) {\n        setTimeout(function () {\n          playerScore.classList.add('turn');\n          enemyScore.classList.add('turn');\n          var modalContainer = document.querySelector('.modal-container');\n          modalContainer.style.display = 'block';\n          var text = _this2.player.points === _this2.enemy.points ? 'EMPATE!' : _this2.player.points > _this2.enemy.points ? 'VOCÊ VENCEU!' : 'VOCÊ PERDEU!';\n          modalContainer.children[0].children[0].children[0].innerText = text;\n          modalContainer.children[0].children[1].children[0].innerText = 'Jogar novamente';\n        }, 1500);\n      }\n    } // Check if flipped cards are equals\n\n  }, {\n    key: \"_checkEqualCards\",\n    value: function _checkEqualCards(card1, card2) {\n      var _this3 = this;\n\n      this.enemy.addCardsToMemory(card1, card2);\n\n      if (card1.children[0].style.backgroundImage === card2.children[0].style.backgroundImage) {\n        this._setSuccessToEqualFlippedCards(card1.parentElement, card2.parentElement);\n\n        setTimeout(function () {\n          return _this3._setPoints();\n        }, 1000);\n\n        this._setTurn();\n      } else {\n        setTimeout(function () {\n          card1.classList.remove(\"flipped\");\n          card2.classList.remove(\"flipped\");\n        }, 1000);\n\n        this._setTurn(true);\n      }\n    } // Set success class to equal flipped cards\n\n  }, {\n    key: \"_setSuccessToEqualFlippedCards\",\n    value: function _setSuccessToEqualFlippedCards(card1, card2) {\n      setTimeout(function () {\n        card1.classList.add(\"success\");\n        card2.classList.add(\"success\");\n      }, 500);\n    } // Set points\n\n  }, {\n    key: \"_setPoints\",\n    value: function _setPoints() {\n      if (this.turn) {\n        this.player.updatePoints(7);\n      } else {\n        this.enemy.updatePoints(7);\n      }\n    } // Set turn\n\n  }, {\n    key: \"_setTurn\",\n    value: function _setTurn(changedTurn) {\n      if (changedTurn) {\n        setTimeout(function () {\n          playerScore.classList.toggle('turn');\n          enemyScore.classList.toggle('turn');\n        }, 1000);\n        this.turn = !this.turn;\n      }\n\n      if (!this.turn) {\n        this.enemy.play();\n      } else {}\n    }\n  }]);\n\n  return Game;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/game.js?");

/***/ }),

/***/ "./src/game/player.js":
/*!****************************!*\
  !*** ./src/game/player.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Player = /*#__PURE__*/function () {\n  function Player() {\n    _classCallCheck(this, Player);\n\n    this.pointsElement = document.querySelector('.score.player small span');\n    this.points = 0;\n\n    this._updatePointsUI();\n  }\n\n  _createClass(Player, [{\n    key: \"updatePoints\",\n    value: function updatePoints(points) {\n      this.points += points;\n\n      this._updatePointsUI();\n    }\n  }, {\n    key: \"_updatePointsUI\",\n    value: function _updatePointsUI() {\n      this.pointsElement.innerText = this.points;\n    }\n  }]);\n\n  return Player;\n}();\n\n\n\n//# sourceURL=webpack:///./src/game/player.js?");

/***/ }),

/***/ "./src/game/utils.js":
/*!***************************!*\
  !*** ./src/game/utils.js ***!
  \***************************/
/*! exports provided: utils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"utils\", function() { return utils; });\nvar utils = {\n  // Shuffle elements in array\n  shuffle: function shuffle(array) {\n    var currentIndex = array.length;\n    var temporaryValue;\n    var randomIndex; // While there remain elements to shuffle...\n\n    while (currentIndex !== 0) {\n      // Pick a remaining element...\n      randomIndex = Math.floor(Math.random() * currentIndex);\n      currentIndex -= 1; // And swap it with the current element.\n\n      temporaryValue = array[currentIndex];\n      array[currentIndex] = array[randomIndex];\n      array[randomIndex] = temporaryValue;\n    }\n\n    return array;\n  },\n  getRandomNumber: function getRandomNumber(range) {\n    if (!range) {\n      range = 1;\n    }\n\n    return Math.floor(Math.random() * range);\n  }\n};\n\n//# sourceURL=webpack:///./src/game/utils.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/draw */ \"./src/game/draw.js\");\n/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/game */ \"./src/game/game.js\");\n\n\nvar container = document.querySelector('.container');\nvar gameContainer = document.getElementById(\"game-container\");\nvar modalContainer = document.querySelector('.modal-container');\nvar gameStartButton = document.querySelector('.modal button');\nmodalContainer.style.display = 'block';\ngameStartButton.addEventListener('click', function (e) {\n  new _game_draw__WEBPACK_IMPORTED_MODULE_0__[\"default\"](gameContainer, 'easy').init();\n  modalContainer.style.display = 'none';\n  container.style.display = 'block';\n  new _game_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('hard').init();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });