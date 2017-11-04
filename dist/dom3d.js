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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.DepthOfField = exports.StageEvent = exports.Transform3D = exports.Quaternion = exports.EulerAngle = exports.Matrix3x3 = exports.Point3D = exports.PaperElement3D = exports.Element3D = exports.Group3D = exports.Stage3D = exports.DisplayObject3D = exports.spread = undefined;
	
	var _DisplayObject3D = __webpack_require__(1);
	
	var _DisplayObject3D2 = _interopRequireDefault(_DisplayObject3D);
	
	var _Stage3D = __webpack_require__(10);
	
	var _Stage3D2 = _interopRequireDefault(_Stage3D);
	
	var _Group3D = __webpack_require__(13);
	
	var _Group3D2 = _interopRequireDefault(_Group3D);
	
	var _Element3D = __webpack_require__(14);
	
	var _Element3D2 = _interopRequireDefault(_Element3D);
	
	var _PaperElement3D = __webpack_require__(15);
	
	var _PaperElement3D2 = _interopRequireDefault(_PaperElement3D);
	
	var _Point3D = __webpack_require__(5);
	
	var _Point3D2 = _interopRequireDefault(_Point3D);
	
	var _Matrix3x = __webpack_require__(2);
	
	var _Matrix3x2 = _interopRequireDefault(_Matrix3x);
	
	var _EulerAngle = __webpack_require__(7);
	
	var _EulerAngle2 = _interopRequireDefault(_EulerAngle);
	
	var _Quaternion = __webpack_require__(6);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _Transform3D = __webpack_require__(4);
	
	var _Transform3D2 = _interopRequireDefault(_Transform3D);
	
	var _StageEvent = __webpack_require__(11);
	
	var _StageEvent2 = _interopRequireDefault(_StageEvent);
	
	var _DepthOfField = __webpack_require__(16);
	
	var _DepthOfField2 = _interopRequireDefault(_DepthOfField);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function spread(obj) {
		var includeGeom = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
		if (!obj) obj = window;
	
		obj.DisplayObject3D = _DisplayObject3D2.default;
		obj.Stage3D = _Stage3D2.default;
		obj.Group3D = _Group3D2.default;
		obj.Element3D = _Element3D2.default;
		obj.PaperElement3D = _PaperElement3D2.default;
	
		obj.StageEvent = _StageEvent2.default;
	
		obj.DepthOfField = _DepthOfField2.default;
	
		if (includeGeom) {
			obj.Point3D = _Point3D2.default;
			obj.Matrix3x3 = _Matrix3x2.default;
			obj.EulerAngle = _EulerAngle2.default;
			obj.Quaternion = _Quaternion2.default;
			obj.Transform3D = _Transform3D2.default;
		}
	}
	
	// export in format that supports syntax: `var dom3d = require('dom3d');` and `import {Stage3D} from 'dom3d';`
	exports.spread = spread;
	exports.DisplayObject3D = _DisplayObject3D2.default;
	exports.Stage3D = _Stage3D2.default;
	exports.Group3D = _Group3D2.default;
	exports.Element3D = _Element3D2.default;
	exports.PaperElement3D = _PaperElement3D2.default;
	exports.Point3D = _Point3D2.default;
	exports.Matrix3x3 = _Matrix3x2.default;
	exports.EulerAngle = _EulerAngle2.default;
	exports.Quaternion = _Quaternion2.default;
	exports.Transform3D = _Transform3D2.default;
	exports.StageEvent = _StageEvent2.default;
	exports.DepthOfField = _DepthOfField2.default;
	
	// export in format that supports syntax: `import dom3d from 'dom3d';`
	
	Object.defineProperty(exports, "default", {
		get: function get() {
			return exports;
		}
	});
	
	// if is in browser environment then add dom3d to window
	if (typeof window !== 'undefined') {
		window.dom3d = { spread: spread };
		spread(window.dom3d, true);
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Matrix3x = __webpack_require__(2);
	
	var _Matrix3x2 = _interopRequireDefault(_Matrix3x);
	
	var _Transform3D = __webpack_require__(4);
	
	var _Transform3D2 = _interopRequireDefault(_Transform3D);
	
	var _CalculatedInfo = __webpack_require__(8);
	
	var _CalculatedInfo2 = _interopRequireDefault(_CalculatedInfo);
	
	var _MathUtils = __webpack_require__(3);
	
	var _PropNames = __webpack_require__(9);
	
	var _PropNames2 = _interopRequireDefault(_PropNames);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DisplayObject3D = function () {
		/**
	 * The DisplayObject3D class is an abstract class that serves as the base for all 3D capable elements to be used within a dom3d {@link Stage3D} scene. It is not meant to be directly instantiated.
	 * <br/><br/>
	 * All DOM elements associated with any dom3d class that inherits from DisplayObject3D (with the exception of Stage3D class objects) should be assumed to operate with a CSS display of 'block' and a CSS position of 'absolute'.
	 * @class DisplayObject3D
	 * @abstract
	 */
		function DisplayObject3D() {
			_classCallCheck(this, DisplayObject3D);
	
			// private
			this._x = 0;
			this._y = 0;
			this._z = 0;
	
			// private
			this._rotX = 0;
			this._rotY = 0;
			this._rotZ = 0;
	
			// private
			this._regX = 0;
			this._regY = 0;
	
			// private
			this._dirty = true;
	
			// used internally
			this.matrix = new _Matrix3x2.default();
			this.transform3D = new _Transform3D2.default();
	
			/**
	  * Each DisplayObject3D has a unique id property. When the element it represents has an id attribute at the time of instantiation it will match its element's id. Otherwise a unique one will be generated. You can also assign your own.
	  * @var DisplayObject3D#id {String}
	  * @default generated if the element has no id
	  **/
			this.id = '';
	
			/**
	  * Every DisplayObject3D represents an HTML Element. You can access that element by accessing the object's element property. Conversely any element that has an associated DisplayObject3D will have a property .dom3dObject which references its DisplayObject3D.
	  * @var DisplayObject3D#element {HTMLElement}
	  * @readonly
	  * @default null
	  **/
			this.element = null;
	
			/**
	  * Each DisplayObject3D has a stage property that allows it to tell which stage it is currently in the display list of. Is null when not in a display list.
	  * @var DisplayObject3D#stage {Stage3D}
	  * @readonly
	  * @default null
	  **/
			this.stage = null;
	
			/**
	  * Each DisplayObject3D has a parent property that allows it to tell which object is currently this object's parent in the display list. null if it is not in the display list. This is a reflection of the dom3d display list, not necessarily of the actual HTML parent/child structure.
	  * @var DisplayObject3D#parent {DisplayObject3D}
	  * @readonly
	  * @default null
	  **/
			this.parent = null;
	
			/**
	  Each DisplayObject3D has a calc property that allows for easy reading of the final calculated x, y, z, rotX, rotY, and rotZ values.
	  * @var DisplayObject3D#calc {Object}
	  * @readonly
	  * @note The values on this property are only fully accurate immediately after a render/update. If you've changed values between render and reading then readings here may no longer be accurate.
	  **/
			this.calc = new _CalculatedInfo2.default(this);
		}
	
		/**
	 * The x property sets the x coordinate value for the DisplayObject3D instance.
	 * @var DisplayObject3D#x {Number}
	 * @default 0
	 **/
	
	
		_createClass(DisplayObject3D, [{
			key: 'addEventListener',
	
	
			// for clarity, make sure if they try work with events directly on dom3d object it shouldn't work
			// only the shortcut usages should work, that way it keeps clear that it is a library driven event adding
			value: function addEventListener() {
				throw new Error(EVENT_ERROR);
			}
		}, {
			key: 'removeEventListener',
			value: function removeEventListener() {
				throw new Error(EVENT_ERROR);
			}
		}, {
			key: 'dispatchEvent',
			value: function dispatchEvent() {
				throw new Error(EVENT_ERROR);
			}
	
			/**
	  * Shortcut for adding event listeners to the object's dom element. Works same as `myObj.element.addEventListener(...);`
	  * @method DisplayObject3D#addListener
	  * @note All events are handled on the `element` property. This is only a shortcut.
	  * @arg type - Identical to normal event listening.
	  * @arg listener - Identical to normal event listening.
	  * @arg [useCapture] - (optional) Identical to normal event listening.
	  * @arg [wantsUntrusted] - (optional) Identical to normal event listening.
	  */
	
		}, {
			key: 'addListener',
			value: function addListener(type, listener, useCapture, wantsUntrusted) {
				return this.element.addEventListener(type, listener, useCapture, wantsUntrusted);
			}
	
			/**
	  * Shortcut for removing event listeners from the object's dom element. Works same as `myObj.element.removeEventListener(...);`
	  * @method DisplayObject3D#removeListener
	  * @note All events are handled on the `element` property. This is only a shortcut.
	  * @arg type - Identical to normal event listening.
	  * @arg listener - Identical to normal event listening.
	  * @arg [useCapture] - (optional) Identical to normal event listening.
	  */
	
		}, {
			key: 'removeListener',
			value: function removeListener(type, listener, useCapture) {
				return this.element.removeEventListener(type, listener, useCapture);
			}
	
			/**
	  * Shortcut for dispatching events from the object's dom element. Works same as `myObj.element.dispatchEvent(...);`
	  * @method DisplayObject3D#dispatch
	  * @note All events are handled on the `element` property. This is only a shortcut.
	  * @arg event - Identical to normal event dispatching via `dispatchEvent`.
	  */
	
		}, {
			key: 'dispatch',
			value: function dispatch(evt) {
				return this.element.dispatchEvent(evt);
			}
	
			// internal
	
		}, {
			key: 'setStage',
			value: function setStage(s) {
				this.stage = s;
			}
	
			// internal
	
		}, {
			key: 'render',
			value: function render(pDirty) {
				throw new Error("::DOM3D:: DisplayObject3D can not be part of the 3D scene, it is only a base class.");
			}
	
			// internal
	
		}, {
			key: 'updateWorld',
			value: function updateWorld() {
				this.transform3D.copyConcatenated(this.parent.transform3D);
				this.transform3D.eulerAngle.updateData(this._rotZ * _MathUtils.TO_RAD, this._rotY * _MathUtils.TO_RAD, this._rotX * _MathUtils.TO_RAD);
				this.transform3D.quaternion.updateFromEuler(this.transform3D.eulerAngle);
				this.transform3D.coordinates.updateData(this._x, this._y, this._z);
				this.transform3D.concatenatedQuaternion.concatenate(this.transform3D.quaternion);
				this.transform3D.concatenatedEulerAngle.updateFromQuaternion(this.transform3D.concatenatedQuaternion);
			}
	
			// internal
	
		}, {
			key: 'rotateCoords',
			value: function rotateCoords() {
				this.transform3D.concatenatedCoordinates.rotateAndUpdate(this.transform3D.coordinates, this.parent.transform3D.concatenatedEulerAngle);
			}
	
			// internal
	
		}, {
			key: 'rotateObject',
			value: function rotateObject() {
				this.transformMatrix.updateFromEuler(this.transform3D.concatenatedEulerAngle);
			}
	
			// internal
	
		}, {
			key: 'renderObject',
			value: function renderObject() {
				var m = this.transformMatrix;
				var zoom = this.stage.zoom;
	
				var metaPoint = this.transform3D.concatenatedCoordinates;
				var relevantZ = this.parent.orthographic || this.stage.orthographic ? this.parent.transform3D.concatenatedCoordinates.z : metaPoint.z;
	
				if (relevantZ > zoom) {
					this.element.style.display = 'none';return;
				} else if (this.element.style.display === 'none') {
					this.element.style.display = 'block';
				}
	
				var factor = zoom / (zoom - relevantZ);
				var scaling = Math.pow(factor, this.stage.distortion);
	
				// update the matrix with the coords
				m.tx = metaPoint.x * factor;
				m.ty = metaPoint.y * factor;
	
				// scale the matrix using the calculated scaling factor
				m.scale(scaling);
	
				// we need to offset the tx/ty to account for the registration point because of the odd way CSS handles registrations (they affect rotation but not placement)
				var rx = this.regX * factor * scaling;
				var ry = this.regY * factor * scaling;
	
				// get the transform string
				var transformString = 'matrix(' + m.a.toFixed(8) + ',' + m.b.toFixed(8) + ',' + m.c.toFixed(8) + ',' + m.d.toFixed(8) + ',' + (m.tx - rx).toFixed(8) + ',' + (m.ty - ry).toFixed(8) + ')';
	
				// get the transform origin string
				var transformOriginString = this.regX + 'px ' + this.regY + 'px';
	
				// do the actual update of CSS strings
				this.element.style[_PropNames2.default.transform] = transformString;
				this.element.style[_PropNames2.default.transformOrigin] = transformOriginString;
	
				for (var i = 0, ii = this.stage.effects.length; i < ii; i++) {
					var effect = this.stage.effects[i];
					effect.render(this);
				}
			}
		}, {
			key: 'x',
			get: function get() {
				return this._x;
			},
			set: function set(v) {
				if (v != this._x) {
					this._dirty = true;
					this._x = v;
				}
			}
	
			/**
	  * The y property sets the y coordinate value for the DisplayObject3D instance.
	  * @var DisplayObject3D#y {Number}
	  * @default 0
	  **/
	
		}, {
			key: 'y',
			get: function get() {
				return this._y;
			},
			set: function set(v) {
				if (v != this._y) {
					this._dirty = true;
					this._y = v;
				}
			}
	
			/**
	  * The z property sets the z coordinate value for the DisplayObject3D instance.
	  * @var DisplayObject3D#z {Number}
	  * @default 0
	  **/
	
		}, {
			key: 'z',
			get: function get() {
				return this._z;
			},
			set: function set(v) {
				if (v != this._z) {
					this._dirty = true;
					this._z = v;
				}
			}
	
			/**
	  * The rotX property sets the x-axis rotation value for the DisplayObject3D instance in degrees.
	  * @var DisplayObject3D#rotX {Number}
	  * @default 0
	  **/
	
		}, {
			key: 'rotX',
			get: function get() {
				return this._rotX;
			},
			set: function set(v) {
				if (v != this._rotX) {
					this._dirty = true;
					this._rotX = v;
				}
			}
	
			/**
	  * The rotY property sets the y-axis rotation value for the DisplayObject3D instance in degrees.
	  * @var DisplayObject3D#rotY {Number}
	  * @default 0
	  **/
	
		}, {
			key: 'rotY',
			get: function get() {
				return this._rotY;
			},
			set: function set(v) {
				if (v != this._rotY) {
					this._dirty = true;
					this._rotY = v;
				}
			}
	
			/**
	  * The rotZ property sets the z-axis rotation value for the DisplayObject3D instance in degrees.
	  * @var DisplayObject3D#rotZ {Number}
	  * @default 0
	  **/
	
		}, {
			key: 'rotZ',
			get: function get() {
				return this._rotZ;
			},
			set: function set(v) {
				if (v != this._rotZ) {
					this._dirty = true;
					this._rotZ = v;
				}
			}
	
			/**
	  * The regX property sets the x registration point used for rotation/placement of the DisplayObject3D instance.
	  * @var DisplayObject3D#regX {Number}
	  * @default 0
	  **/
	
		}, {
			key: 'regX',
			get: function get() {
				return this._regX;
			},
			set: function set(v) {
				if (v != this._regX) {
					this._dirty = true;
					this._regX = v;
				}
			}
	
			/**
	  * The regY property sets the y registration point used for rotation/placement of the DisplayObject3D instance.
	  * @var DisplayObject3D#regY {Number}
	  * @default 0
	  **/
	
		}, {
			key: 'regY',
			get: function get() {
				return this._regY;
			},
			set: function set(v) {
				if (v != this._regY) {
					this._dirty = true;
					this._regY = v;
				}
			}
	
			/**
	  * Shortcut for easily setting styles on the element.
	  * @var DisplayObject3D#style {Object}
	  */
	
		}, {
			key: 'style',
			get: function get() {
				return this.element.style;
			}
		}]);
	
		return DisplayObject3D;
	}();
	
	// internal
	
	
	exports.default = DisplayObject3D;
	DisplayObject3D.idCount = 0;
	var EVENT_ERROR = '::DOM3D:: Events are handled on the `.element` property. You may access it directly, or use the `addListener`, `.removeListener`, and `.dispatch` shortcuts.';

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MathUtils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Matrix3x3 = function () {
		/**
	 The Matrix3x3 instance's a property. Used for calculations.
	 @var Matrix3x3#a {Number}
	 @public
	 @default 1
	 **/
		/**
	 The Matrix3x3 instance's b property. Used for calculations.
	 @var Matrix3x3#b {Number}
	 @public
	 @default 0
	 **/
		/**
	 The Matrix3x3 instance's c property. Used for calculations.
	 @var Matrix3x3#c {Number}
	 @public
	 @default 0
	 **/
		/**
	 The Matrix3x3 instance's d property. Used for calculations.
	 @var Matrix3x3#d {Number}
	 @public
	 @default 1
	 **/
		/**
	 The Matrix3x3 instance's tx property. Used for calculations.
	 @var Matrix3x3#tx {Number}
	 @public
	 @default 0
	 **/
		/**
	 The Matrix3x3 instance's ty property. Used for calculations.
	 @var Matrix3x3#ty {Number}
	 @public
	 @default 0
	 **/
	
		/**
	 Matrix3x3 is an internally used class. It is primarily used to turn the 3D object's transformation information into CSS transforms.
	 @class Matrix3x3
	 @arg {Number} [a=1] - New instance's a value.
	 @arg {Number} [b=0] - New instance's b value.
	 @arg {Number} [c=0] - New instance's c value.
	 @arg {Number} [d=1] - New instance's d value.
	 @arg {Number} [tx=0] - New instance's tx value.
	 @arg {Number} [ty=0] - New instance's ty value.
	 **/
		function Matrix3x3() {
			var _a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	
			var _b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
			var _c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
			var _d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
	
			var _tx = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
	
			var _ty = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
	
			_classCallCheck(this, Matrix3x3);
	
			this.a = _a;
			this.b = _b;
			this.c = _c;
			this.d = _d;
			this.tx = _tx;
			this.ty = _ty;
		}
	
		/**
	 Scales the Matrix3x3 by a given amount. Scales relative to what it currently is; so scaling by the same value two times will scale it twice as much as doing it once.
	 @method Matrix3x3#scale
	 @public
	 @arg {Number} scaleBy - Amount to scale by.
	 **/
	
	
		_createClass(Matrix3x3, [{
			key: 'scale',
			value: function scale(_scaleBy) {
				this.a *= _scaleBy;
				this.b *= _scaleBy;
				this.c *= _scaleBy;
				this.d *= _scaleBy;
				this.tx *= _scaleBy;
				this.ty *= _scaleBy;
			}
	
			/**
	  A shortcut to zero out the Matrix3x3.
	  @method Matrix3x3#zero
	  @public
	  **/
	
		}, {
			key: 'zero',
			value: function zero() {
				this.a = 1;
				this.b = 0;
				this.c = 0;
				this.d = 1;
				this.tx = 0;
				this.ty = 0;
			}
	
			/**
	  A shortcut to copy the a, b, c, d, tx, and ty values of another Matrix3x3 to this one.
	  @method Matrix3x3#copy
	  @public
	  @arg {Matrix3x3} m - The Matrix3x3 instance to copy values from.
	  **/
	
		}, {
			key: 'copy',
			value: function copy(m) {
				this.a = m.a;
				this.b = m.b;
				this.c = m.c;
				this.d = m.d;
				this.tx = m.tx;
				this.ty = m.ty;
			}
	
			/**
	  Applies the rotational values of a EulerAngle instance to this Matrix3x3.
	  @method Matrix3x3#updateFromEuler
	  @public
	  @arg {EulerAngle} e - The EulerAngle instance to copy values from.
	  **/
	
		}, {
			key: 'updateFromEuler',
			value: function updateFromEuler(e) {
				var srz = (0, _MathUtils.sin)(e.phi),
				    crz = (0, _MathUtils.cos)(e.phi);
				var sry = (0, _MathUtils.sin)(e.theta),
				    cry = (0, _MathUtils.cos)(e.theta);
				var srx = (0, _MathUtils.sin)(e.psi),
				    crx = (0, _MathUtils.cos)(e.psi);
	
				var crz_crx = crz * crx;
				var srz_crx = srz * crx;
	
				var sry_srx = sry * srx;
	
				var add_cry = sry_srx + cry;
				var sub_cry = sry_srx - cry;
	
				var x1 = -crz * sub_cry + srz_crx;
				var y1 = -srz * sub_cry - crz_crx;
	
				var x2 = -crz * add_cry + srz_crx;
				var y2 = -srz * add_cry - crz_crx;
	
				this.a = (x1 - x2) / 2;
				this.b = (y1 - y2) / 2;
				this.c = -(x1 + x2) / 2;
				this.d = -(y1 + y2) / 2;
			}
	
			/**
	  Returns a String representation of the Matrix3x3 instance's values.
	  @method Matrix3x3#toString
	  @public
	  @returns {String} Returns a string with an object notation form of the Matrix3x3 properties.
	  **/
	
		}, {
			key: 'toString',
			value: function toString() {
				return '{a:' + this.a + ', b:' + this.b + ', c:' + this.c + ', d:' + this.d + ', tx:' + this.tx + ', ty:' + this.ty + '}';
			}
		}]);
	
		return Matrix3x3;
	}();
	
	exports.default = Matrix3x3;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	// hiking over math stuff for ease of writing...
	var asin = exports.asin = Math.asin;
	var sqrt = exports.sqrt = Math.sqrt;
	var atan2 = exports.atan2 = Math.atan2;
	var cos = exports.cos = Math.cos;
	var sin = exports.sin = Math.sin;
	var PI = exports.PI = Math.PI;
	var TO_RAD = exports.TO_RAD = PI / 180;
	var TO_DEG = exports.TO_DEG = 180 / PI;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point3D = __webpack_require__(5);
	
	var _Point3D2 = _interopRequireDefault(_Point3D);
	
	var _Quaternion = __webpack_require__(6);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _EulerAngle = __webpack_require__(7);
	
	var _EulerAngle2 = _interopRequireDefault(_EulerAngle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Transform3D = function () {
		/**
	 The Transform3D instance's coordinates property is used for storing local coordinate data for calculations.
	 @var Transform3D#coordinates {Point3D}
	 @public
	 **/
		/**
	 The Transform3D instance's concatenatedCoordinates property is used for storing global coordinate data for calculations.
	 @var Transform3D#concatenatedCoordinates {Point3D}
	 @public
	 **/
		/**
	 The Transform3D instance's quaternion property is used for storing local quaternion based rotational data for calculations.
	 @var Transform3D#quaternion {Quaternion}
	 @public
	 **/
		/**
	 The Transform3D instance's concatenatedQuaterion property is used for storing global quaternion based rotational data for calculations.
	 @var Transform3D#concatenatedQuaternion {Quaternion}
	 @public
	 **/
		/**
	 The Transform3D instance's eulerAngle property is used for storing local euler angle based rotational data for calculations.
	 @var Transform3D#eulerAngle {EulerAngle}
	 @public
	 **/
		/**
	 The Transform3D instance's concatenatedEulerAngle property is used for storing global euler angle based rotational data for calculations.
	 @var Transform3D#concatenatedEulerAngle {EulerAngle}
	 @public
	 **/
	
		/**
	 Each {@link DisplayObject} has a [transform3D]{@link DisplayObject3D#transform3D} property which is an instances of the Transform3D class. It holds properties for the coordinate and rotationsl data of the object in both local and world/global forms.
	 @class Transform3D
	 **/
		function Transform3D() {
			_classCallCheck(this, Transform3D);
	
			this.coordinates = new _Point3D2.default();
			this.concatenatedCoordinates = new _Point3D2.default();
			this.quaternion = new _Quaternion2.default();
			this.concatenatedQuaternion = new _Quaternion2.default();
			this.eulerAngle = new _EulerAngle2.default();
			this.concatenatedEulerAngle = new _EulerAngle2.default();
		}
	
		/**
	 This method is a shortcut used to copy the concatenated coordinate and rotational data from one Transform3D instance to another.
	 @method Transform3D#copyConcatenated
	 @public
	 @arg {Transform3D} t - The Transform3D to copy data from.
	 **/
	
	
		_createClass(Transform3D, [{
			key: 'copyConcatenated',
			value: function copyConcatenated(t) {
				this.concatenatedCoordinates.copy(t.concatenatedCoordinates);
				this.concatenatedQuaternion.copy(t.concatenatedQuaternion);
				this.concatenatedEulerAngle.copy(t.concatenatedEulerAngle);
			}
	
			/**
	  This method is a shortcut used to copy the inverted concatenated coordinate and rotational data from one Transform3D instance to another.
	  @method Transform3D#copyInverseConcatenated
	  @public
	  @arg {Transform3D} t - The Transform3D to copy inverse data from.
	  **/
	
		}, {
			key: 'copyInverseConcatenated',
			value: function copyInverseConcatenated(t) {
				this.concatenatedCoordinates.copyInverse(t.concatenatedCoordinates);
				this.concatenatedQuaternion.copyInverse(t.concatenatedQuaternion);
				this.concatenatedEulerAngle.updateFromQuaternion(concatenatedQuaternion);
			}
	
			/**
	  This method is a shortcut used to copy the local coordinate and rotational data from one Transform3D instance to another.
	  @method Transform3D#copyLocal
	  @public
	  @arg {Transform3D} t - The Transform3D to copy data from.
	  **/
	
		}, {
			key: 'copyLocal',
			value: function copyLocal(t) {
				this.coordinates.copy(t.coordinates);
				this.quaternion.copy(t.quaternion);
				this.eulerAngle.copy(t.eulerAngle);
			}
	
			/**
	  A shortcut to copy the local and global coordinate and rotational data from one Transform3D instance to another.
	  @method Transform3D#copy
	  @public
	  @arg {Transform3D} t - The Transform3D to copy data from.
	  **/
	
		}, {
			key: 'copy',
			value: function copy(t) {
				this.coordinates.copy(t.coordinates);
				this.concatenatedCoordinates.copy(t.concatenatedCoordinates);
				this.quaternion.copy(t.quaternion);
				this.concatenatedQuaternion.copy(t.concatenatedQuaternion);
				this.eulerAngle.copy(t.eulerAngle);
				this.concatenatedEulerAngle.copy(t.concatenatedEulerAngle);
			}
	
			/**
	  A shortcut to zero out all transforms.
	  @method Transform3D#zero
	  @public
	  **/
	
		}, {
			key: 'zero',
			value: function zero() {
				this.coordinates.zero();
				this.concatenatedCoordinates.zero();
				this.quaternion.zero();
				this.concatenatedQuaternion.zero();
				this.eulerAngle.zero();
				this.concatenatedEulerAngle.zero();
			}
	
			/**
	  Returns a String representation of all of the Transform3D instance's properties' values. Can be a bit verbose.
	  @method Transform3D#toString
	  @public
	  @returns {String} Returns a string with an object notation form of the entire Transform3D.
	  **/
	
		}, {
			key: 'toString',
			value: function toString() {
				return 'local coordinates: ' + this.coordinates.toString() + '\nworld coordinates: ' + this.concatenatedCoordinates.toString() + '\nlocal quaternion : ' + this.quaternion.toString() + '\nworld quaternion : ' + this.concatenatedQuaternion.toString() + '\nlocal euler angle: ' + this.eulerAngle.toString() + '\nworld euler angle: ' + this.concatenatedEulerAngle.toString();
			}
		}]);
	
		return Transform3D;
	}();
	
	exports.default = Transform3D;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MathUtils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Point3D = function () {
		/**
	 The Point3D instance's x property. Used for calculations.
	 @var Point3D#x {Number}
	 @public
	 @default 0
	 **/
		/**
	 The Point3D instance's y property. Used for calculations.
	 @var Point3D#y {Number}
	 @public
	 @default 0
	 **/
		/**
	 The Point3D instance's z property. Used for calculations.
	 @var Point3D#z {Number}
	 @public
	 @default 0
	 **/
	
		/**
	 Point3D is an internally used class. A Point3D instance is attached to a {@link DisplayObject3D} object's transform3D property (which is itself an instance of the {@link Transform3D} class). It is part of internal calculations, and should only be accessed by advanced users. You should not have to deal with this class in normal usage of the engine.
	 @class Point3D
	 @arg {Number} [x=0] - New instance's x coordinate value.
	 @arg {Number} [y=0] - New instance's y coordinate value.
	 @arg {Number} [z=0] - New instance's z coordinate value.
	 **/
		function Point3D() {
			var _x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
	
			var _y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	
			var _z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
			_classCallCheck(this, Point3D);
	
			this.x = _x;
			this.y = _y;
			this.z = _z;
		}
	
		/**
	 A shortcut method for setting the x, y, and z properties.
	 @method Point3D#updateData
	 @public
	 @arg {Number} x - New x value.
	 @arg {Number} y - New y value.
	 @arg {Number} z - New z value.
	 **/
	
	
		_createClass(Point3D, [{
			key: 'updateData',
			value: function updateData(x, y, z) {
				this.x = x;
				this.y = y;
				this.z = z;
			}
	
			/**
	  This method will rotate a supplied Point3D's coordinate values around origin 0,0,0 based on the supplied {@link EulerAngle} object's rotation. It will then set this Point3D's coordinate values to the result.
	  @method Point3D#rotateAndUpdate
	  @public
	  @arg {Point3D} point - Point3D values to rotate.
	  @arg {EulerAngle} angle - EulerAngle rotational values to rotate by.
	  **/
	
		}, {
			key: 'rotateAndUpdate',
			value: function rotateAndUpdate(point, angle) {
				var phi = angle.phi;
				var theta = angle.theta;
				var psi = angle.psi;
	
				var srz = (0, _MathUtils.sin)(phi),
				    crz = (0, _MathUtils.cos)(phi);
				var sry = (0, _MathUtils.sin)(theta),
				    cry = (0, _MathUtils.cos)(theta);
				var srx = (0, _MathUtils.sin)(psi),
				    crx = (0, _MathUtils.cos)(psi);
	
				var _X = point.x;
				var _Y = point.y;
				var _Z = point.z;
	
				var xy, xz, yx, yz, zx, zy;
	
				xy = crx * _Y - srx * _Z;
				xz = srx * _Y + crx * _Z;
				yz = cry * xz - sry * _X;
				yx = sry * xz + cry * _X;
				zx = crz * yx - srz * xy;
				zy = srz * yx + crz * xy;
	
				this.x += zx;
				this.y += zy;
				this.z += yz;
			}
	
			/**
	  Produces a new Point3D instance that is duplicate of the current one.
	  @method Point3D#clone
	  @public
	  @returns {Point3D} Returns a new Point3D instance.
	  **/
	
		}, {
			key: 'clone',
			value: function clone() {
				return new Point3D(this.x, this.y, this.z);
			}
	
			/**
	  A shortcut to copy the x, y, and z values of another Point3D to this one.
	  @method Point3D#copy
	  @public
	  @arg {Point3D} p - The Point3D instance to copy values from.
	  **/
	
		}, {
			key: 'copy',
			value: function copy(p) {
				this.x = p.x;
				this.y = p.y;
				this.z = p.z;
			}
	
			/**
	  A shortcut to copy the inverted (negative) x, y, and z values of another Point3D to this one.
	  @method Point3D#copyInverse
	  @public
	  @arg {Point3D} p - The Point3D instance to copy inverted values from.
	  **/
	
		}, {
			key: 'copyInverse',
			value: function copyInverse(p) {
				this.x = -p.x;
				this.y = -p.y;
				this.z = -p.z;
			}
	
			/**
	  A shortcut to zero out the Point3D.
	  @method Point3D#zero
	  @public
	  **/
	
		}, {
			key: 'zero',
			value: function zero() {
				this.x = 0;
				this.y = 0;
				this.z = 0;
			}
	
			/**
	  Returns a String representation of the Point3D instance's values.
	  @method Point3D#toString
	  @public
	  @returns {String} Returns a string with an object notation form of the x, y, and z properties.
	  **/
	
		}, {
			key: 'toString',
			value: function toString() {
				return '{x:' + this.x + ', y:' + this.y + ', z:' + this.z + '}';
			}
	
			/**
	  A static verion of the non-static [rotateAndUpdate]{@link Point3D#rotateAndUpdate} method which returns a new Point3D with the modified valies.
	  @method Point3D.rotate
	  @public
	  @arg {Point3D} point - Point3D values to rotate.
	  @arg {EulerAngle} angle - EulerAngle rotational values to rotate by.
	  @returns {Point3D} Returns a new Point3D with the end result applied.
	  **/
	
		}], [{
			key: 'rotate',
			value: function rotate(point, angle) {
				var phi = angle.phi;
				var theta = angle.theta;
				var psi = angle.psi;
	
				var srz = (0, _MathUtils.sin)(phi),
				    crz = (0, _MathUtils.cos)(phi);
				var sry = (0, _MathUtils.sin)(theta),
				    cry = (0, _MathUtils.cos)(theta);
				var srx = (0, _MathUtils.sin)(psi),
				    crx = (0, _MathUtils.cos)(psi);
	
				var _X = point.x;
				var _Y = point.y;
				var _Z = point.z;
	
				var xy, xz, yx, yz, zx, zy;
	
				xy = crx * _Y - srx * _Z;
				xz = srx * _Y + crx * _Z;
				yz = cry * xz - sry * _X;
				yx = sry * xz + cry * _X;
				zx = crz * yx - srz * xy;
				zy = srz * yx + crz * xy;
	
				return new Point3D(zx, zy, yz);
			}
	
			/**
	  Allows the distance between two 3D points to be calculated between two Point3D objects
	  @method Point3D.distance
	  @public
	  @arg {Point3D} point1 - First Point3D to calculate from.
	  @arg {Point3D} point2 - Second Point3D to calculate to.
	  @returns {Number} Returns the distance between the two points.
	  **/
	
		}, {
			key: 'distance',
			value: function distance(p1, p2) {
				var x2 = Math.pow(p2.x - p1.x, 2);
				var y2 = Math.pow(p2.y - p1.y, 2);
				var z2 = Math.pow(p2.z - p1.z, 2);
	
				return Math.sqrt(x2 + y2 + z2);
			}
		}]);
	
		return Point3D;
	}();
	
	exports.default = Point3D;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _EulerAngle = __webpack_require__(7);
	
	var _EulerAngle2 = _interopRequireDefault(_EulerAngle);
	
	var _MathUtils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Quaternion = function () {
		/**
	 The Quaternion instance's w property. Used for calculations.
	 @var Quaternion#w {Number}
	 @public
	 @default 1
	 **/
		/**
	 The Quaternion instance's x property. Used for calculations.
	 @var Quaternion#x {Number}
	 @public
	 @default 0
	 **/
		/**
	 The Quaternion instance's y property. Used for calculations.
	 @var Quaternion#y {Number}
	 @public
	 @default 0
	 **/
		/**
	 The Quaternion instance's z property. Used for calculations.
	 @var Quaternion#z {Number}
	 @public
	 @default 0
	 **/
	
		/**
	 Quaternion is an internally used class. A Quaternion instance is attached to a {@link DisplayObject3D} object's transform3D property (which is itself an instance of the {@link Transform3D} class). It is part of internal calculations, and should only be accessed by extremely advanced users. You should not have to deal with this class in normal usage of the engine.
	 @class Quaternion
	 @arg {Number} [w=1] - New instance's w value.
	 @arg {Number} [x=0] - New instance's x value.
	 @arg {Number} [y=0] - New instance's y value.
	 @arg {Number} [z=0] - New instance's z value.
	 **/
		function Quaternion() {
			var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
			var x = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var y = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
			var z = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
	
			_classCallCheck(this, Quaternion);
	
			this.w = w;
			this.x = x;
			this.y = y;
			this.z = z;
		}
	
		/**
	 This method allows for quick update of all the Quaternion's properties.
	 @method Quaternion#updateData
	 @arg {Number} w - Updated w value.
	 @arg {Number} x - Updated x value.
	 @arg {Number} y - Updated y value.
	 @arg {Number} z - Updated z value.
	 **/
	
	
		_createClass(Quaternion, [{
			key: 'updateData',
			value: function updateData(_w, _x, _y, _z) {
				this.w = _w;
				this.x = _x;
				this.y = _y;
				this.z = _z;
			}
	
			/**
	  This method concatenates the values of another Quaternion with this Quaternion and then sets the resulting values to this Quaternion's w, z, y, and z properties. This is vital for forward kinematics of 3D rotations. There is no return; the Quaternion intance on which this method is called (as opposed to the one supplied as a parameter) is modified as a result.
	  @method Quaternion#concatenate
	  @public
	  @arg {Quaternion} q - Quaternion to concatenate with this one.
	  **/
	
		}, {
			key: 'concatenate',
			value: function concatenate(q) {
				var w1 = q.w;
				var x1 = q.x;
				var y1 = q.y;
				var z1 = q.z;
	
				var tw = this.w;
				var tx = this.x;
				var ty = this.y;
				var tz = this.z;
	
				var _w = w1 * tw - x1 * tx - y1 * ty - z1 * tz;
				var _x = w1 * tx + x1 * tw + y1 * tz - z1 * ty;
				var _y = w1 * ty - x1 * tz + y1 * tw + z1 * tx;
				var _z = w1 * tz + x1 * ty - y1 * tx + z1 * tw;
	
				this.w = _w;
				this.x = _x;
				this.y = _y;
				this.z = _z;
			}
	
			/**
	  A method for getting a {@link EulerAngle} based on the current Quaternion.
	  @method Quaternion#toEuler
	  @public
	  @returns {EulerAngle} Returns a new EulerAngle instance.
	  **/
	
		}, {
			key: 'toEuler',
			value: function toEuler() {
				var w2 = this.w * this.w;
				var x2 = this.x * this.x;
				var y2 = this.y * this.y;
				var z2 = this.z * this.z;
	
				var phi, theta, psi;
	
				var tester = this.w * this.y - this.z * this.x;
	
				if (tester > 0.499999) {
					phi = -2 * (0, _MathUtils.atan2)(this.w, this.x);
					theta = Math.PI / 2;
					psi = Math.PI;
	
					return new _EulerAngle2.default(phi, theta, psi);
				} else if (tester < -0.499999) {
					phi = -2 * (0, _MathUtils.atan2)(this.w, this.x);
					theta = -Math.PI / 2;
					psi = Math.PI;
	
					return new _EulerAngle2.default(phi, theta, psi);
				}
	
				phi = (0, _MathUtils.atan2)(2 * (this.w * this.x + this.y * this.z), 1 - 2 * (x2 + y2));
				theta = (0, _MathUtils.asin)(2 * tester);
				psi = (0, _MathUtils.atan2)(2 * (this.w * this.z + this.x * this.y), 1 - 2 * (y2 + z2));
	
				return new _EulerAngle2.default(phi, theta, psi);
			}
	
			/**
	  A method for updating the w, x, y, and z properties based on a {@link EulerAngle} intance.
	  @method Quaternion#updateFromEuler
	  @public
	  @arg {EulerAngle} euler - EulerAngle instance to update from.
	  **/
	
		}, {
			key: 'updateFromEuler',
			value: function updateFromEuler(euler) {
				var hPhi = euler.phi / 2;
				var hTheta = euler.theta / 2;
				var hPsi = euler.psi / 2;
	
				var sin_hPhi = (0, _MathUtils.sin)(hPhi),
				    cos_hPhi = (0, _MathUtils.cos)(hPhi);
				var sin_hTheta = (0, _MathUtils.sin)(hTheta),
				    cos_hTheta = (0, _MathUtils.cos)(hTheta);
				var sin_hPsi = (0, _MathUtils.sin)(hPsi),
				    cos_hPsi = (0, _MathUtils.cos)(hPsi);
	
				this.w = cos_hPhi * cos_hTheta * cos_hPsi + sin_hPhi * sin_hTheta * sin_hPsi;
				this.x = sin_hPhi * cos_hTheta * cos_hPsi - cos_hPhi * sin_hTheta * sin_hPsi;
				this.y = cos_hPhi * sin_hTheta * cos_hPsi + sin_hPhi * cos_hTheta * sin_hPsi;
				this.z = cos_hPhi * cos_hTheta * sin_hPsi - sin_hPhi * sin_hTheta * cos_hPsi;
			}
	
			/**
	  Normalizes the Quaternion.
	  @method Quaternion#normalize
	  @public
	  **/
	
		}, {
			key: 'normalize',
			value: function normalize() {
				var magnitude = (0, _MathUtils.sqrt)(this.w * this.w + this.x * this.x + this.y * this.y + this.z * this.z);
				this.w /= magnitude;this.x /= magnitude;this.y /= magnitude;this.z /= magnitude;
			}
	
			/**
	  Produces a new Quaternion instance that is duplicate of the current one.
	  @method Quaternion#clone
	  @public
	  @returns {Quaternion} Returns a new Quaternion instance.
	  **/
	
		}, {
			key: 'clone',
			value: function clone() {
				return new Quaternion(this.w, this.x, this.y, this.z);
			}
	
			/**
	  A shortcut to copy the w, x, y, and z values of another Quaternion to this one.
	  @method Quaternion#copy
	  @public
	  @arg {Quaternion} q - The Quaternion instance to copy values from.
	  **/
	
		}, {
			key: 'copy',
			value: function copy(q) {
				this.w = q.w;this.x = q.x;this.y = q.y;this.z = q.z;
			}
	
			/**
	  A shortcut to copy the inverted result of another Quaternion to this one.
	  @method Quaternion#copyInverse
	  @public
	  @arg {Quaternion} p - The Quaternion instance to invert and then get values from.
	  **/
	
		}, {
			key: 'copyInverse',
			value: function copyInverse(q) {
				var qw = q.w,
				    qx = q.x,
				    qy = q.y,
				    qz = q.z;
				var d = qw * qw + qx * qx + qy * qy + qz * qz;
				this.w = qw / d;
				this.x = -qx / d;
				this.y = -qy / d;
				this.z = -qz / d;
			}
	
			/**
	  A shortcut to zero out the Quaternion.
	  @method Quaternion#zero
	  @public
	  **/
	
		}, {
			key: 'zero',
			value: function zero() {
				this.w = 1;
				this.x = 0;
				this.y = 0;
				this.z = 0;
			}
	
			/**
	  Returns a String representation of the Quaternion instance's values.
	  @method Quaternion#toString
	  @public
	  @returns {String} Returns a string with an object notation form of the w, x, y, and z properties.
	  **/
	
		}, {
			key: 'toString',
			value: function toString() {
				return '{w:' + this.w + ', x:' + this.x + ', y:' + this.y + ', z:' + this.z + '}';
			}
	
			/**
	  Multiplies two Quaterions together. Note: multiplication of quaternions is non-commutative. Order matters.
	  @method Quaternion.multiply
	  @public
	  @arg {Quaternion} q1 - The first quaternion to multiply.
	  @arg {Quaternion} q2 - The second quaternion to multiply.
	  @returns {Quaternion} Returns a new Quaternion with the result of the multiplication.
	  **/
	
		}], [{
			key: 'multiply',
			value: function multiply(q1, q2) {
				"use strict";
	
				var w1 = q1.w,
				    w2 = q2.w;
				var x1 = q1.x,
				    x2 = q2.x;
				var y1 = q1.y,
				    y2 = q2.y;
				var z1 = q1.z,
				    z2 = q2.z;
	
				var _w = w1 * w2 - x1 * x2 - y1 * y2 - z1 * z2;
				var _x = w1 * x2 + x1 * w2 + y1 * z2 - z1 * y2;
				var _y = w1 * y2 - x1 * z2 + y1 * w2 + z1 * x2;
				var _z = w1 * z2 + x1 * y2 - y1 * x2 + z1 * w2;
	
				return new Quaternion(_w, _x, _y, _z);
			}
		}]);
	
		return Quaternion;
	}();
	
	exports.default = Quaternion;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Quaternion = __webpack_require__(6);
	
	var _Quaternion2 = _interopRequireDefault(_Quaternion);
	
	var _MathUtils = __webpack_require__(3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EulerAngle = function () {
		/**
	 The EulerAngle instance's phi property. Used for calculations.
	 @var EulerAngle#phi {Number}
	 @public
	 @default 0
	 **/
		/**
	 The EulerAngle instance's theta property. Used for calculations.
	 @var EulerAngle#theta {Number}
	 @public
	 @default 0
	 **/
		/**
	 The EulerAngle instance's psi property. Used for calculations.
	 @var EulerAngle#psi {Number}
	 @public
	 @default 0
	 **/
	
		/**
	 EulerAngle is an internally used class. A EulerAngle instance is attached to a {@link DisplayObject3D} object's transform3D property (which is itself an instance of the {@link Transform3D} class). It is part of internal calculations, and should only be accessed by extremely advanced users. You should not have to deal with this class in normal usage of the engine.
	 @class EulerAngle
	 @arg {Number} [phi=0] - New instance's phi value.
	 @arg {Number} [theta=0] - New instance's theta value.
	 @arg {Number} [psi=0] - New instance's psi value.
	 **/
		function EulerAngle() {
			var aphi = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
			var atheta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
			var apsi = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
	
			_classCallCheck(this, EulerAngle);
	
			this.phi = aphi;
			this.theta = atheta;
			this.psi = apsi;
		}
	
		/**
	 A shortcut method for setting the phi, theta, and psi properties.
	 @method EulerAngle#updateData
	 @public
	 @arg {Number} phi - New phi value.
	 @arg {Number} theta - New theta value.
	 @arg {Number} psi - New psi value.
	 **/
	
	
		_createClass(EulerAngle, [{
			key: 'updateData',
			value: function updateData(_phi, _theta, _psi) {
				this.phi = _phi;
				this.theta = _theta;
				this.psi = _psi;
			}
	
			/**
	  A method for updating the phi, theta, and psi based on a {@link Quaternion} intance.
	  @method EulerAngle#updateFromQuaternion
	  @public
	  @arg {Quaternion} q - Quaternion instance to update from.
	  **/
	
		}, {
			key: 'updateFromQuaternion',
			value: function updateFromQuaternion(q) {
				var w = q.w,
				    x = q.x,
				    y = q.y,
				    z = q.z;
	
				var w2 = w * w;
				var x2 = x * x;
				var y2 = y * y;
				var z2 = z * z;
	
				var tester = w * y - z * x;
	
				if (tester > 0.499999) {
					this.phi = -2 * (0, _MathUtils.atan2)(w, x);
					this.theta = Math.PI / 2;
					this.psi = Math.PI;
	
					return;
				} else if (tester < -0.499999) {
					this.phi = -2 * (0, _MathUtils.atan2)(w, x);
					this.theta = -Math.PI / 2;
					this.psi = Math.PI;
	
					return;
				}
	
				this.phi = (0, _MathUtils.atan2)(2 * (w * x + y * z), 1 - 2 * (x2 + y2));
				this.theta = (0, _MathUtils.asin)(2 * tester);
				this.psi = (0, _MathUtils.atan2)(2 * (w * z + x * y), 1 - 2 * (y2 + z2));
			}
	
			/**
	  A method for getting a {@link Quaternion} based on the current EulerAngle.
	  @method EulerAngle#toQuaternion
	  @public
	  @returns {Quaternion} Returns a new {@link Quaternion} instance.
	  **/
	
		}, {
			key: 'toQuaternion',
			value: function toQuaternion() {
				var hPhi = this.phi / 2;
				var hTheta = this.theta / 2;
				var hPsi = this.psi / 2;
	
				var sin_hPhi = (0, _MathUtils.sin)(hPhi),
				    cos_hPhi = (0, _MathUtils.cos)(hPhi);
				var sin_hTheta = (0, _MathUtils.sin)(hTheta),
				    cos_hTheta = (0, _MathUtils.cos)(hTheta);
				var sin_hPsi = (0, _MathUtils.sin)(hPsi),
				    cos_hPsi = (0, _MathUtils.cos)(hPsi);
	
				var w = cos_hPhi * cos_hTheta * cos_hPsi + sin_hPhi * sin_hTheta * sin_hPsi;
				var x = sin_hPhi * cos_hTheta * cos_hPsi - cos_hPhi * sin_hTheta * sin_hPsi;
				var y = cos_hPhi * sin_hTheta * cos_hPsi + sin_hPhi * cos_hTheta * sin_hPsi;
				var z = cos_hPhi * cos_hTheta * sin_hPsi - sin_hPhi * sin_hTheta * cos_hPsi;
	
				return new _Quaternion2.default(w, x, y, z);
			}
	
			/**
	  Produces a new EulerAngle instance that is duplicate of the current one.
	  @method EulerAngle#clone
	  @public
	  @returns {EulerAngle} Returns a new EulerAngle instance.
	  **/
	
		}, {
			key: 'clone',
			value: function clone() {
				return new EulerAngle(this.phi, this.theta, this.psi);
			}
	
			/**
	  A shortcut to copy the phi, theta, and psi values of another EulerAngle to this one.
	  @method EulerAngle#copy
	  @public
	  @arg {EulerAngle} ea - The EulerAngle instance to copy values from.
	  **/
	
		}, {
			key: 'copy',
			value: function copy(ea) {
				this.phi = ea.phi;
				this.theta = ea.theta;
				this.psi = ea.psi;
			}
	
			/**
	  A shortcut to zero out the EulerAngle.
	  @method EulerAngle#zero
	  @public
	  **/
	
		}, {
			key: 'zero',
			value: function zero() {
				this.phi = 0;
				this.theta = 0;
				this.psi = 0;
			}
	
			/**
	  Returns a String representation of the EulerAngle instance's values.
	  @method EulerAngle#toString
	  @public
	  @returns {String} Returns a string with an object notation form of the phi, theta, and psi properties.
	  **/
	
		}, {
			key: 'toString',
			value: function toString() {
				return '{phi:' + this.phi + ', theta:' + this.theta + ', psi:' + this.psi + '}';
			}
		}]);
	
		return EulerAngle;
	}();
	
	exports.default = EulerAngle;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _MathUtils = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var CalculatedInfo = function () {
		function CalculatedInfo(obj) {
			_classCallCheck(this, CalculatedInfo);
	
			Object.defineProperty(this, 'reference', { enumerable: false, value: obj });
		}
	
		_createClass(CalculatedInfo, [{
			key: 'toString',
			value: function toString() {
				return '{x:' + this.x + ', y:' + this.y + ', z:' + this.z + ', rotX:' + this.rotX + ', rotY:' + this.rotY + ', rotZ:' + this.rotZ + '}';
			}
		}, {
			key: 'x',
			get: function get() {
				return this.reference.transform3D.concatenatedCoordinates.x;
			}
		}, {
			key: 'y',
			get: function get() {
				return this.reference.transform3D.concatenatedCoordinates.y;
			}
		}, {
			key: 'z',
			get: function get() {
				return this.reference.transform3D.concatenatedCoordinates.z;
			}
		}, {
			key: 'rotX',
			get: function get() {
				return this.reference.transform3D.concatenatedEulerAngle.psi * _MathUtils.TO_DEG;
			}
		}, {
			key: 'rotY',
			get: function get() {
				return this.reference.transform3D.concatenatedEulerAngle.theta * _MathUtils.TO_DEG;
			}
		}, {
			key: 'rotZ',
			get: function get() {
				return this.reference.transform3D.concatenatedEulerAngle.phi * _MathUtils.TO_DEG;
			}
		}]);
	
		return CalculatedInfo;
	}();
	
	exports.default = CalculatedInfo;

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	// tests for compatibility and figuring out which CSS props to set
	
	var index = 0;
	
	var possible_transform = ['transform', 'WebkitTransform', 'msTransform', 'MozTransform', 'OTransform'];
	
	var possible_transform_origin = ['transformOrigin', 'WebkitTransformOrigin', 'msTransformOrigin', 'MozTransformOrigin', 'OTransformOrigin'];
	
	var possible_perspective = ['perspective', 'WebkitPerspective', 'msPerspective', 'MozPerspective', 'OPerspective'];
	
	var possible_perspective_origin = ['perspectiveOrigin', 'WebkitPerspectiveOrigin', 'msPerspectiveOrigin', 'MozPerspectiveOrigin', 'OPerspectiveOrigin'];
	
	try {
		var p;
		var n = document.createElement('div');
		for (var i = 0, ii = possible_transform.length; i < ii; i++) {
			p = possible_transform[i];
			if (typeof n.style[p] !== 'undefined') {
				index = i;
				break;
			}
		}
	} catch (e) {}
	
	var PropNames = {
		'transform': possible_transform[index],
		'transformOrigin': possible_transform_origin[index],
		'perspective': possible_perspective[index],
		'perspectiveOrigin': possible_perspective_origin[index]
	};
	
	exports.default = PropNames;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DisplayObject3D2 = __webpack_require__(1);
	
	var _DisplayObject3D3 = _interopRequireDefault(_DisplayObject3D2);
	
	var _Matrix3x = __webpack_require__(2);
	
	var _Matrix3x2 = _interopRequireDefault(_Matrix3x);
	
	var _Transform3D = __webpack_require__(4);
	
	var _Transform3D2 = _interopRequireDefault(_Transform3D);
	
	var _StageEvent = __webpack_require__(11);
	
	var _StageEvent2 = _interopRequireDefault(_StageEvent);
	
	var _determineElement = __webpack_require__(12);
	
	var _determineElement2 = _interopRequireDefault(_determineElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Stage3D = function (_DisplayObject3D) {
		_inherits(Stage3D, _DisplayObject3D);
	
		/**
	 * @var Stage3D#x
	 * @ignore
	 **/
		/**
	 * @var Stage3D#y
	 * @ignore
	 **/
		/**
	 * @var Stage3D#z
	 * @ignore
	 **/
		/**
	 * @var Stage3D#rotX
	 * @ignore
	 **/
		/**
	 * @var Stage3D#rotY
	 * @ignore
	 **/
		/**
	 * @var Stage3D#rotZ
	 * @ignore
	 **/
		/**
	 * @var Stage3D#regX
	 * @ignore
	 **/
		/**
	 * @var Stage3D#regY
	 * @ignore
	 **/
		/**
	 * @var Stage3D#calc
	 * @ignore
	 **/
	
		/**
	 * All 3D elements to be rendered are to be added to a Stage3D instance. Even though it inherits from DisplayObject3D it should be treated like a 2D object in the DOM as far as its own positioning/rotating goes. Any x, y, z, rotX, rotY, and rotZ properties are not intended to function; just use CSS positioning. If you want a container for 3D elements that you can move and rotate in 3D space then see {@link Group3D}.
	 * <br><br>
	 * Also note that a Stage3D needs to be updated each frame. If autoRender is used (as is default) it will just constantly update. This is not as taxing as it would seem since it uses a diry/clean rendering system. For slightly better performance you can update manually as needed using the [update]{@link Stage3D#update} method.
	 * <br><br>
	 * In almost all ways the API to the Stage3D is a mimic of the Group3D. You can treat manipulation of display list children within them almost identically (e.g. add, remove, getChildById, etc).
	 * @class Stage3D
	 * @extends DisplayObject3D
	 * @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element object itself, or a query selector string which will identify the intended HTML element already in the DOM.
	 * @arg {Boolean} [autoRender=true] - Shortcut to the set [autoRender]{@link Stage3D#autoRender} property.
	 * @arg {Number} [FPS=30] - Allows you to determine the update rate of the autoRender in frames per second.
	 **/
		function Stage3D(_el) {
			var autoRend = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
			var fps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
	
			_classCallCheck(this, Stage3D);
	
			var _this = _possibleConstructorReturn(this, (Stage3D.__proto__ || Object.getPrototypeOf(Stage3D)).call(this));
	
			if (_el) {
				_this.element = (0, _determineElement2.default)(_el);
				_this.id = _this.element.hasAttribute('id') ? _this.element.attributes.id.value : 'stage_' + _DisplayObject3D3.default.idCount++;
				_this.element.dom3dObject = _this;
			} else {
				throw new Error('::DOM3D:: No element/selector/markup was given to Stage3D constructor.');
			}
	
			_this.registeredChildren = [];
			_this.lowestZIndex = 0;
			_this.updateInterval = 0;
	
			/**
	  * Stage3D inherits the stage property from DisplayObject3D, which identifies the root stage. However, it will simply always point to itself in the case of a Stage3D object.
	  * @var {Stage3D} Stage3D#stage
	  * @readonly
	  * @default this
	  **/
			_this.stage = _this;
	
			/**
	  * distortion affects how the location of objects are distorted (lesser for further away, more for closer) as they move on the z-axis.
	  * @var {Number} Stage3D#distortion
	  * @default 6
	  **/
			_this.distortion = 6;
	
			/**
	  * zoom affects how objects are scaled as they move on the z-axis. Experiment to get the effect that works for your use. Any object with a calculated z coordinate higher than the zoom will be considered behind the viewer, and not render.
	  * @var {Number} Stage3D#zoom
	  * @default 5000
	  **/
			_this.zoom = 5000;
	
			/**
	  * Allows access to the Array of child objects for this container. Special care should be taken when accessing to not modify the original Array.
	  * @var Stage3D#children {Array}
	  * @readonly
	  * @default [empty Array]
	  **/
			_this.children = [];
	
			/**
	  * A Stage3D will have an isGroup property of true for identification purposes. Both Stage3D and Group3D will have this property as true, as they are both container/group type concepts. This property is made to identify this object as a general concept of grouping/containing 3D elements, as opposed to identifying a certain class.
	  * @var Stage3D#isGroup {Boolean}
	  * @readonly
	  * @default true
	  **/
			_this.isGroup = true;
			_this.matrix = new _Matrix3x2.default();
			_this.transform3D = new _Transform3D2.default();
	
			// set the FPS private var
			_this._FPS = fps;
	
			// set the autoRender private var and setter
			_this._autoRender = false;
			_this.autoRender = autoRend;
	
			// private
			_this._orthographic = false;
	
			/**
	  * An array that can be filled with effects objects. An effect object must have a `render` method that can take an argumen for the object.
	  * @method Stage3D#effects
	  **/
			_this.effects = [];
			return _this;
		}
	
		/**
	 * Sets whether this stage will render all of its children orthographically or not.
	 * @note Renders the entire scene orthographically regardless of the settings of groups within the scene.
	 * @var Stage3D#orthographic {Boolean}
	 * @default false
	 **/
	
	
		_createClass(Stage3D, [{
			key: 'add',
	
	
			/**
	  * add allows objects to be added to this Stage3D. Note: Stage3D instances are meant to be roots of a 3D scene. Do not add a Stage3D to another type of group.
	  * @method Stage3D#add
	  * @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D may be added.
	  * @returns {DisplayObject3D} Returns this Stage3D object for chaining.
	  **/
			value: function add() {
				for (var i = 0, ii = arguments.length; i < ii; i++) {
					var c = arguments[i];
	
					if (c instanceof Stage3D) throw new Error("::DOM3D:: You cannot add a Stage3D to a group!");
	
					if (!this.contains(c)) {
						if (c.parent !== null) c.parent.remove(c);
	
						this.children.push(c);
						if (this.stage) this.stage.registerChild(c);
						c.parent = this;
	
						// add element to the right spot in actual DOM
						if (this.element !== c.element.parentElement) this.element.appendChild(c.element);
	
						// this engine requires block display and absolute positioning, enforce it here
						c.element.style.display = 'block';
						c.element.style.position = 'absolute';
					}
				}
	
				this.render(false);
				if (this.stage) this.stage.sort();
	
				return this;
			}
	
			/**
	  * remove allows objects that were added via [add]{@link Stage3D#add} to be removed.
	  * @method Stage3D#remove
	  * @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D and has been added may be removed.
	  * @returns {Stage3D} Returns this Stage3D object for chaining purposes.
	  **/
	
		}, {
			key: 'remove',
			value: function remove() {
				for (var i = 0, ii = arguments.length; i < ii; i++) {
					var c = arguments[i];
	
					var ind = this.children.indexOf(c);
					if (ind > -1) {
						this.children.splice(ind, 1);
						if (this.stage) this.stage.unregisterChild(c);
						c.parent = null;
	
						// remove from actual DOM element
						c.element.remove();
					}
				}
	
				return this;
			}
	
			/**
	  * contains allows you to check if a DisplayObject3D is contained (has been added via add) by the Stage3D
	  * @method Stage3D#contains
	  * @arg {DisplayObject3D} - The object to test for.
	  * @returns {Boolean} Returns a Boolean value for whether the Stage3D contains the object or not.
	  **/
	
		}, {
			key: 'contains',
			value: function contains(c) {
				return this.children.indexOf(c) > -1;
			}
		}, {
			key: 'getChildById',
	
	
			/**
	  * getChildById allows you to get a child of the Stage3D by its id property (which, remember, will match the actual element's id attribute if it had one).
	  * @method Stage3D#getChildById
	  * @arg {String} - The String id to look for.
	  * @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	  **/
			value: function getChildById(s) {
				var i, ii;
				for (i = 0, ii = this.children.length; i < ii; i++) {
					if (this.children[i].id == s) return this.children[i];
				}return null;
			}
	
			/**
	  * getChildByElement allows you to get a child of the Stage3D by its associated HTML Element.
	  * @method Stage3D#getChildByElement
	  * @arg {HTMLElement} - The associated HTMLElement of the display object you're looking for.
	  * @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	  **/
	
		}, {
			key: 'getChildByElement',
			value: function getChildByElement(e) {
				var i, ii;
				for (i = 0, ii = this.children.length; i < ii; i++) {
					if (this.children[i].element == e) return this.children[i];
				}return null;
			}
	
			// internal
	
		}, {
			key: 'registerChild',
			value: function registerChild(c) {
				if (c.isGroup) {
					var i,
					    ii,
					    ch = c.children;
					c.setStage(this);
					for (i = 0, ii = ch.length; i < ii; i++) {
						this.registerChild(ch[i]);
					}
				} else if (this.registeredChildren.indexOf(c) == -1) {
					this.registeredChildren.push(c);
					c.setStage(this);
				}
			}
	
			// internal
	
		}, {
			key: 'unregisterChild',
			value: function unregisterChild(c) {
				var ind = this.registeredChildren.indexOf(c);
				if (c.isGroup) {
					var i,
					    ii,
					    ch = c.children;
					for (i = 0, ii = ch.length; i < ii; i++) {
						this.unregisterChild(ch[i]);
					}
				} else if (ind > -1) {
					this.registeredChildren.splice(ind, 1);
					c.setStage(null);
				}
			}
	
			/**
	  * This method must be called in order for the Stage3D instance to update every time something changes. Normally you let the stage autoRender, which will update 30 fps by default. However, you can turn autoRender off and update manually.
	  * @method Stage3D#update
	  * @returns {Boolean} Returns true if the update happened, false if it was cancelled on the update event.
	  **/
	
		}, {
			key: 'update',
			value: function update() {
				var cont = this.element.dispatchEvent(new _StageEvent2.default(_StageEvent2.default.UPDATE));
				if (!cont) return false;
	
				this.render();
				this.sort();
	
				this.element.dispatchEvent(new _StageEvent2.default(_StageEvent2.default.AFTER_UPDATE));
				return true;
			}
	
			// internal
	
		}, {
			key: 'render',
			value: function render() {
				var forceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	
				var i, ii;
				for (i = 0, ii = this.children.length; i < ii; i++) {
					this.children[i].render(forceUpdate);
				}
			}
	
			// internal
	
		}, {
			key: 'sort',
			value: function sort() {
				var i,
				    obj,
				    sZ = this.lowestZIndex;
	
				this.registeredChildren.sort(function (a, b) {
					return b.transform3D.concatenatedCoordinates.z - a.transform3D.concatenatedCoordinates.z;
				});
	
				for (i = this.registeredChildren.length - 1; i > -1; i--) {
					this.registeredChildren[i].element.style.zIndex = sZ++;
				}
			}
	
			/**
	  * Allows you to turn off/on autoRender. If false then you must tell the scene to update manually via the update method.
	  * @var Stage3D#autoRender {Boolean}
	  * @default true
	  **/
	
		}, {
			key: 'orthographic',
			get: function get() {
				return this._orthographic;
			},
			set: function set(v) {
				if (v != this._orthographic) {
					this._dirty = true;
					this._orthographic = v;
				}
			}
		}, {
			key: 'numChildren',
			get: function get() {
				return this.children.length;
			}
		}, {
			key: 'autoRender',
			get: function get() {
				return this._autoRender;
			},
			set: function set(v) {
				// if already that way do nothing
				if (v === this._autoRender) return;
	
				// if turning it on
				if (v) {
					var boundUpdate = this.update.bind(this);
					this.updateInterval = setInterval(boundUpdate, 1000 / this._FPS);
					setTimeout(boundUpdate, 1);
				}
				// if turning it off
				else {
						if (this.updateInterval) clearInterval(this.updateInterval);
					}
	
				// update private var
				this._autoRender = v;
			}
	
			/**
	  * Allows you to determine the rate at which the scene updates during autoRender.
	  * @var Stage3D#FPS {Number}
	  * @default 30
	  **/
	
		}, {
			key: 'FPS',
			get: function get() {
				return this._FPS;
			},
			set: function set(v) {
				// if already that way do nothing
				if (v === this._FPS) return;
	
				// it's different, so set new val
				this._FPS = v;
	
				// if not auto-rendering then no need to do anything else
				if (!this._autoRender) return;
	
				// otherwise we need to reset the auto-rendering
				this.autoRender = false;
				this.autoRender = true;
			}
		}]);
	
		return Stage3D;
	}(_DisplayObject3D3.default);
	
	exports.default = Stage3D;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var StageEvent = function () {
		_createClass(StageEvent, null, [{
			key: 'UPDATE',
	
			/**
	  * Constant for the event that dispatches from the Stage3D element before every update.
	  * @const StageEvent.UPDATE {String}
	  * @note Using `.preventDefault()` within a listener for this event will cancel the upcoming render.
	  */
			get: function get() {
				return 'stageupdate';
			}
		}, {
			key: 'AFTER_UPDATE',
	
	
			/**
	  * Constant for the event that dispatches from the Stage3D element after every update.
	  * @const StageEvent.AFTER_UPDATE {String}
	  */
			get: function get() {
				return 'afterstageupdate';
			}
		}]);
	
		/**
	 * Constructs a StageEvent. Because on Internet Explorer `Event` is an object, not a function, this is
	 * not a true extension of Event. The constructor creates and returns an Event itself instead of a StageEvent
	 * which extends Event. So things such as `new StageEvent(StageEvent.UPDATE) instanceof StageEvent` will be false.
	 * @note This is mostly instantiated internally. Externally the important parts are the StageEvent constants, which are used to add listeners, e.g. `myStage.addListener(StageEvent.UPDATE, handleUpdate)`
	 * @class StageEvent
	 * @extends Event
	 * @arg type - The type of StageEvent being created. Must be a valid value from one of the StageEvent class constants.
	 **/
		function StageEvent(type) {
			_classCallCheck(this, StageEvent);
	
			var initObj;
			if (type === StageEvent.UPDATE) initObj = { bubbles: false, cancelable: true };else if (type === StageEvent.AFTER_UPDATE) initObj = { bubbles: false, cancelable: false };else throw new Error('::DOM3D:: Invalid StageEvent type.');
	
			if (typeof Event === 'function') {
				return new Event(type, initObj);
			} else {
				if (initObj === undefined) initObj = {};
				var evt = document.createEvent('Event');
				evt.initEvent(type, !!initObj.bubbles, !!initObj.cancelable);
				return evt;
			}
		}
	
		return StageEvent;
	}();
	
	exports.default = StageEvent;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = determineElement;
	
	// determines how to use/create what's supplied as a constructor
	// for a given display object as actual HTML
	
	// 1: if nothing given returns empty div
	// 2: if an actual HTMLElement is given then just return that
	// 3: if an object is given treats as object params for buildElementFromObject (see below)
	// 4: if string is given then either treats as literal markup (if starts with '<') or as a query selector for preexisting element
	function determineElement(content) {
		// if none given, make a div
		if (!content) return document.createElement('div');
	
		// if HTMLElement return as is
		if (content instanceof HTMLElement) return content;
	
		// if an object is given, make an element based on the criteria
		if ((typeof content === 'undefined' ? 'undefined' : _typeof(content)) === 'object') return buildElementFromObject(content);
	
		// if it's a string...
		if (typeof content === 'string') {
			// if it's a piece of HTML parse it and return 1 element
			if (content.charAt(0) === '<') {
				var wrap = document.createElement('div');
				wrap.innerHTML = content;
				return wrap.firstChild;
			}
			// otherwise assume it's a query selector and return the first match
			else {
					return document.querySelector(content);
				}
		}
	
		// otherwise throw
		throw new Error('::DOM3D:: Invalid content given for creation of element.');
	}
	
	// type: ['div' or 'img' if has a `src`] the element type to make
	// id: specify an id for the element
	// className: string class name, or space delimeted list, or Array of class names
	// innerHTML or content: specify innerHTML
	// src: makes it an img with a source
	// alt: should only use on images, but gives an alt tag
	function buildElementFromObject(obj) {
		var elem = document.createElement(obj.type || (obj.src ? 'img' : 'div'));
	
		if (obj.id) elem.setAttribute('id', obj.id);
	
		if (obj.className && typeof obj.className === 'string') elem.className = obj.className;
		if (obj.className && Array.isArray(obj.className)) elem.className = obj.className.join(' ');
	
		if (obj.content) elem.innerHTML = obj.content;
		if (obj.innerHTML) elem.innerHTML = obj.innerHTML;
	
		if (obj.src) elem.src = obj.src;
		if (obj.alt) elem.alt = obj.alt;
	
		return elem;
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DisplayObject3D2 = __webpack_require__(1);
	
	var _DisplayObject3D3 = _interopRequireDefault(_DisplayObject3D2);
	
	var _Stage3D = __webpack_require__(10);
	
	var _Stage3D2 = _interopRequireDefault(_Stage3D);
	
	var _Matrix3x = __webpack_require__(2);
	
	var _Matrix3x2 = _interopRequireDefault(_Matrix3x);
	
	var _Transform3D = __webpack_require__(4);
	
	var _Transform3D2 = _interopRequireDefault(_Transform3D);
	
	var _determineElement = __webpack_require__(12);
	
	var _determineElement2 = _interopRequireDefault(_determineElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Group3D = function (_DisplayObject3D) {
		_inherits(Group3D, _DisplayObject3D);
	
		/**
	 * The Group3D class acts as a container for 3D based elements. Any 3D elements inside a Group3D will move and rotate as the Group3D does in a forward kinematic fashion. Group3D instances can also contain other Group3D instances and create infinitely deep forward kinematics.
	 * @class Group3D
	 * @extends DisplayObject3D
	 * @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	 **/
		function Group3D(_el) {
			_classCallCheck(this, Group3D);
	
			var _this = _possibleConstructorReturn(this, (Group3D.__proto__ || Object.getPrototypeOf(Group3D)).call(this));
	
			_this.element = (0, _determineElement2.default)(_el);
			_this.id = _this.element.hasAttribute('id') ? _this.element.attributes.id.value : 'group_' + _DisplayObject3D3.default.idCount++;
			_this.element.dom3dObject = _this;
	
			_this.matrix = new _Matrix3x2.default();
			_this.transform3D = new _Transform3D2.default();
	
			// private
			_this._orthographic = false;
	
			/**
	  * Allows access to the Array of child objects for this container. Special care should be taken when accessing to not modify the original Array.
	  * @var Group3D#children {Array}
	  * @readonly
	  * @default [empty Array]
	  **/
			_this.children = [];
	
			/**
	  * A Group3D will have an isGroup property of true for identification purposes. Stage3D instances will also have it. This serves to identify the object as the general concept of a 3D group/container, as opposed to identifying it as a specific Group3D class instance.
	  * @var Group3D#isGroup {Boolean}
	  * @readonly
	  * @default true
	  **/
			_this.isGroup = true;
			return _this;
		}
	
		/**
	 * add allows objects to be added to this Group3D. Note: likewise, a Group3D instance is added to another Group3D or to the {@link Stage3D} via those instances' `add` methods as well.
	 * @method Group3D#add
	 * @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D may be added.
	 * @returns {DisplayObject3D} Returns this Group3D object for chaining.
	 **/
	
	
		_createClass(Group3D, [{
			key: 'add',
			value: function add() {
				for (var i = 0, ii = arguments.length; i < ii; i++) {
					var c = arguments[i];
	
					if (c === this) throw new Error("::DOM3D:: You cannot add a 3D group to itself!");
					if (c instanceof _Stage3D2.default) throw new Error("::DOM3D:: You cannot add a Stage3D to a group!");
	
					if (!this.contains(c)) {
						if (c.parent !== null) c.parent.remove(c);
	
						this.children.push(c);
						if (this.stage) this.stage.registerChild(c);
						c.parent = this;
	
						// add element to the right spot in actual DOM
						if (this.element !== c.element.parentElement) this.element.appendChild(c.element);
	
						// this engine requires block display and absolute positioning, enforce it here
						c.element.style.display = 'block';
						c.element.style.position = 'absolute';
					}
				}
	
				if (this.stage) {
					this.render(false);
					this.stage.sort();
				}
	
				return this;
			}
	
			/**
	  * remove allows objects that were added via [add]{@link Group3D#add} to be removed.
	  * @method Group3D#remove
	  * @arg {DisplayObject3D} - Any object that inherits from DisplayObject3D and has been added may be removed.
	  * @returns {Group3D} Returns this Group3D object for chaining purposes.
	  **/
	
		}, {
			key: 'remove',
			value: function remove() {
				for (var i = 0, ii = arguments.length; i < ii; i++) {
					var c = arguments[i];
	
					var ind = this.children.indexOf(c);
					if (ind > -1) {
						this.children.splice(ind, 1);
						if (this.stage) this.stage.unregisterChild(c);
						c.parent = null;
	
						// take element out of DOM
						c.element.remove();
					}
				}
	
				return this;
			}
	
			/**
	  * contains allows you to check if a DisplayObject3D is contained (has been added via add) by the Group3D
	  * @method Group3D#contains
	  * @arg {DisplayObject3D} - The object to test for.
	  * @returns {Boolean} Returns a Boolean value for whether the Group3D contains the object or not.
	  **/
	
		}, {
			key: 'contains',
			value: function contains(c) {
				return this.children.indexOf(c) > -1;
			}
		}, {
			key: 'getChildById',
	
	
			/**
	  * getChildById allows you to get a child of the Group3D by its id property (which, remember, will match the actual element's id attribute if it had one).
	  * @method Group3D#getChildById
	  * @arg {String} - The String id to look for.
	  * @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	  **/
			value: function getChildById(s) {
				var i, ii;
				for (i = 0, ii = this.children.length; i < ii; i++) {
					if (this.children[i].id === s) return this.children[i];
				}return null;
			}
	
			/**
	  * getChildByElement allows you to get a child of the Group3D by its associated HTML Element.
	  * @method Group3D#getChildByElement
	  * @arg {HTMLElement} - The associated HTMLElement of the display object you're looking for.
	  * @returns {DisplayObject3D} Returns a the DisplayObject3D found if it is found. Returns null of none found.
	  **/
	
		}, {
			key: 'getChildByElement',
			value: function getChildByElement(e) {
				var i, ii;
				for (i = 0, ii = this.children.length; i < ii; i++) {
					if (this.children[i].element === e) return this.children[i];
				}return null;
			}
	
			/**
	  * Sets whether this group will render its direct children orthographically or not. Important for the rendering of primitive shapes, because otherwise edge geometry is not precise with neighboring elements.
	  * @note If a group's orthographic property is set to true, then any groups it contains should also be set to true.
	  * @var Group3D#orthographic {Boolean}
	  * @default false
	  **/
	
		}, {
			key: 'render',
			value: function render(pDirty) {
				var i, ii;
				if (!this._dirty && !pDirty) {
					// give any child groups a chance to update even if this isn't dirty
					for (i = 0, ii = this.children.length; i < ii; i++) {
						this.children[i].render(false);
					}return;
				}
	
				this.updateWorld();
				this.rotateCoords();
	
				for (i = 0, ii = this.children.length; i < ii; i++) {
					this.children[i].render(pDirty || this._dirty);
				}this._dirty = false;
			}
		}, {
			key: 'numChildren',
			get: function get() {
				return this.children.length;
			}
		}, {
			key: 'orthographic',
			get: function get() {
				return this._orthographic;
			},
			set: function set(v) {
				if (v != this._orthographic) {
					this._dirty = true;
					this._orthographic = v;
				}
			}
		}]);
	
		return Group3D;
	}(_DisplayObject3D3.default);
	
	exports.default = Group3D;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DisplayObject3D2 = __webpack_require__(1);
	
	var _DisplayObject3D3 = _interopRequireDefault(_DisplayObject3D2);
	
	var _Matrix3x = __webpack_require__(2);
	
	var _Matrix3x2 = _interopRequireDefault(_Matrix3x);
	
	var _Transform3D = __webpack_require__(4);
	
	var _Transform3D2 = _interopRequireDefault(_Transform3D);
	
	var _determineElement = __webpack_require__(12);
	
	var _determineElement2 = _interopRequireDefault(_determineElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Element3D = function (_DisplayObject3D) {
		_inherits(Element3D, _DisplayObject3D);
	
		/**
	 * The Element3D class is simply a 3D plane in the scene. Any DOM elements it contains will be part of that 2D plane, not their own 3D objects.
	 * @class Element3D
	 * @extends DisplayObject3D
	 * @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	 **/
		function Element3D(_el) {
			_classCallCheck(this, Element3D);
	
			var _this = _possibleConstructorReturn(this, (Element3D.__proto__ || Object.getPrototypeOf(Element3D)).call(this));
	
			_this.element = (0, _determineElement2.default)(_el);
			_this.id = _this.element.hasAttribute('id') ? _this.element.attributes.id.value : 'element_' + _DisplayObject3D3.default.idCount++;
			_this.element.dom3dObject = _this;
	
			/**
	  * Allows locking of the Element3D facing forward at all times if set to true, regardless or local or global rotation. Can be set to true automatically by a scene made in the DOM by including a CSS class of "dom3d-lockfacingfront" on the Element3D element.
	  * @var Element3D#lockFacingFront {Boolean}
	  * @default false
	  **/
			_this.lockFacingFront = false;
	
			_this.transformMatrix = new _Matrix3x2.default();
			_this.transform3D = new _Transform3D2.default();
			return _this;
		}
	
		_createClass(Element3D, [{
			key: 'render',
			value: function render(pDirty) {
				if (!this._dirty && !pDirty) return;
				this._dirty = false;
	
				this.updateWorld();
				this.rotateCoords();
				if (!this.lockFacingFront) this.rotateObject();else this.transformMatrix.zero();
				this.renderObject();
			}
		}]);
	
		return Element3D;
	}(_DisplayObject3D3.default);
	
	exports.default = Element3D;

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _DisplayObject3D2 = __webpack_require__(1);
	
	var _DisplayObject3D3 = _interopRequireDefault(_DisplayObject3D2);
	
	var _Matrix3x = __webpack_require__(2);
	
	var _Matrix3x2 = _interopRequireDefault(_Matrix3x);
	
	var _Transform3D = __webpack_require__(4);
	
	var _Transform3D2 = _interopRequireDefault(_Transform3D);
	
	var _determineElement = __webpack_require__(12);
	
	var _determineElement2 = _interopRequireDefault(_determineElement);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var PaperElement3D = function (_DisplayObject3D) {
		_inherits(PaperElement3D, _DisplayObject3D);
	
		/**
	 * The PaperElement3D class is a type of Element3D which is meant to hold 2 child DOM elements which represent a front and a back which show depending on which way the object is facing in 3D space. Basically a 2 sided element.
	 * <br><br>
	 * When assigned an element via the constructor any direct child elements with the class names <code>dom3d-front</code> and <code>dom3d-back</code> will automatically be set up as the object's front and back. If no front/back are given in the constructor, or present as <code>dom3d-front</code> and <code>dom3d-back</code> classed children in the main element, then elements will be created automatically.
	 * @class PaperElement3D
	 * @extends DisplayObject3D
	 * @arg element - An argument identifying the HTML Element the display object is to associate with. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	 * @arg [front] - An optional argument identifying an HTML Element that is meant to be this object's front side. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	 * @arg [back] - An optional argument identifying an HTML Element that is meant to be this object's back side. Can be the actual element itself, an HTML string representing an element to create, or a query selector string which will identify the intended HTML element already in the DOM.
	 **/
		function PaperElement3D(_el, _fel, _bel) {
			_classCallCheck(this, PaperElement3D);
	
			/**
	  * Set to an HTML Element child of this one which will show when its front is facing forward.
	  * @var PaperElement3D#front {HTMLElement}
	  * @default null
	  **/
			var _this = _possibleConstructorReturn(this, (PaperElement3D.__proto__ || Object.getPrototypeOf(PaperElement3D)).call(this));
	
			_this.front = null;
			/**
	  * Set to an HTML Element child of this one which will show when its back is facing forward.
	  * @var PaperElement3D#back {HTMLElement}
	  * @default null
	  **/
			_this.back = null;
			/**
	  * Used to read whether the object considers itself front-facing at the moment.
	  * @var PaperElement3D#frontFacing {Boolean}
	  * @readonly
	  * @default true
	  **/
			_this.frontFacing = true;
	
			_this.element = (0, _determineElement2.default)(_el);
			_this.id = _this.element.hasAttribute('id') ? _this.element.attributes.id.value : 'paperelement_' + _DisplayObject3D3.default.idCount++;
			_this.element.dom3dObject = _this;
	
			var _f, _b;
			if (document.querySelector) {
				_f = _this.element.querySelector('.dom3d-front');
				_b = _this.element.querySelector('.dom3d-back');
			}
			var determined_fel = (0, _determineElement2.default)(_fel || _f);
			var determined_bel = (0, _determineElement2.default)(_bel || _b);
			_this.front = determined_fel;
			_this.back = determined_bel;
			_this.front.style.position = 'absolute';
			_this.back.style.position = 'absolute';
			_this.element.appendChild(_this.front);
			_this.element.appendChild(_this.back);
	
			_this.transformMatrix = new _Matrix3x2.default();
			_this.transform3D = new _Transform3D2.default();
	
			// points for calculating winding
			var self = _this;
			_this.p1 = buildPoint(0, 0);
			_this.p2 = buildPoint(100, 0);
			_this.p3 = buildPoint(0, 100);
			function buildPoint(x, y) {
				var p = document.createElement('div');
				p.style.position = 'absolute';
				p.style.top = y + 'px';
				p.style.left = x + 'px';
				self.element.appendChild(p);
				return p;
			}
			return _this;
		}
	
		_createClass(PaperElement3D, [{
			key: 'render',
			value: function render(pDirty) {
				if (!this._dirty && !pDirty) return;
	
				this.updateWorld();
				this.rotateCoords();
				this.rotateObject();
				this.renderObject();
	
				this._dirty = false;
	
				this.determineFace();
			}
		}, {
			key: 'determineFace',
			value: function determineFace() {
				var p1rect = this.p1.getBoundingClientRect();
				var p2rect = this.p2.getBoundingClientRect();
				var p3rect = this.p3.getBoundingClientRect();
				var p1x = p1rect.left;
				var p1y = p1rect.top;
				var p2x = p2rect.left;
				var p2y = p2rect.top;
				var p3x = p3rect.left;
				var p3y = p3rect.top;
	
				this.frontFacing = (p2x - p1x) * (p3y - p1y) - (p2y - p1y) * (p3x - p1x) > 0;
	
				if (this.back) {
					this.back.style.visibility = this.frontFacing ? 'hidden' : 'visible';
					this.back.style.pointerEvents = this.frontFacing ? 'none' : '';
				}
				if (this.front) {
					this.front.style.visibility = this.frontFacing ? 'visible' : 'hidden';
					this.front.style.pointerEvents = this.frontFacing ? '' : 'none';
				}
			}
		}]);
	
		return PaperElement3D;
	}(_DisplayObject3D3.default);
	
	exports.default = PaperElement3D;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point3D = __webpack_require__(5);
	
	var _Point3D2 = _interopRequireDefault(_Point3D);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DepthOfField = function () {
		/**
	 * Allows the creation of a DepthOfField instance which can be pushed into the stage's `effects` array to apply the effect to a scene.
	 * @class DepthOfField
	 * @arg [strength] {Number} - Optional shortcut to set strength.
	 * @arg [trueDistance] {Boolean} - Optional shortcut to set trueDistance.
	 * @arg [focus] {Object} - Optional shortcut to set focus.
	 **/
		function DepthOfField() {
			var strength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
			var trueDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
			var focus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
			_classCallCheck(this, DepthOfField);
	
			/**
	  * Sets the strength of the effect.
	  * @var DepthOfField#strength {Number}
	  * @default 1
	  **/
			this.strength = strength;
	
			/**
	  * Sets whether the effect utilizes true distance from the focus point (true) or simply the object's z location (false) for the effect.
	  * @var DepthOfField#trueDistance {Boolean}
	  * @default true
	  **/
			this.trueDistance = trueDistance;
	
			/**
	  * Allows you to control the global point of focus for the depth of field. Can be set to a simple object with x, y, and z properties. If trueDistance is false then only the z is relevant.
	  * @var DepthOfField#focus {Object}
	  * @default {x:0,y:0,z:0}
	  */
			this.focus = focus || { x: 0, y: 0, z: 0 };
		}
	
		_createClass(DepthOfField, [{
			key: 'render',
			value: function render(obj) {
				// if it's a group then don't blur the group; get down to the components
				if (obj.isGroup) return;
	
				var coords = obj.transform3D.concatenatedCoordinates;
				var dist = this.trueDistance ? _Point3D2.default.distance(this.focus, coords) : Math.abs(this.focus.z - coords.z);
				var blurAmt = this.strength * (dist / obj.stage.zoom) * 25;
	
				var newVal = 'blur(' + blurAmt + 'px)';
				if (obj.style.filter !== newVal) obj.style.filter = obj.style.webkitFilter = newVal;
			}
		}]);
	
		return DepthOfField;
	}();
	
	exports.default = DepthOfField;

/***/ }
/******/ ]);
//# sourceMappingURL=dom3d.js.map