(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
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
/******/ 	// The chunk loading function for additional chunks
/******/ 	// Since all referenced chunks are already included
/******/ 	// in this file, this function is empty here.
/******/ 	__webpack_require__.e = function requireEnsure() {
/******/ 		return Promise.resolve();
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-plugin-universal-import/universalImport");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setHasBabelPlugin = exports.ReportChunks = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _requireUniversalModule = __webpack_require__(33);

Object.defineProperty(exports, 'CHUNK_NAMES', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.CHUNK_NAMES;
  }
});
Object.defineProperty(exports, 'MODULE_IDS', {
  enumerable: true,
  get: function get() {
    return _requireUniversalModule.MODULE_IDS;
  }
});

var _reportChunks = __webpack_require__(35);

Object.defineProperty(exports, 'ReportChunks', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_reportChunks)["default"];
  }
});
exports["default"] = universal;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoistNonReactStatics = __webpack_require__(19);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _vm = __webpack_require__(36);

var _requireUniversalModule2 = _interopRequireDefault(_requireUniversalModule);

var _utils = __webpack_require__(13);

var _helpers = __webpack_require__(37);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
}

var hasBabelPlugin = false;

var isHMR = function isHMR() {
  return (// $FlowIgnore
    module.hot && (false)
  );
};

var setHasBabelPlugin = exports.setHasBabelPlugin = function setHasBabelPlugin() {
  hasBabelPlugin = true;
};

function universal(asyncModule) {
  var _class, _temp;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var userRender = opts.render,
      _opts$loading = opts.loading,
      Loading = _opts$loading === undefined ? _utils.DefaultLoading : _opts$loading,
      _opts$error = opts.error,
      Err = _opts$error === undefined ? _utils.DefaultError : _opts$error,
      _opts$minDelay = opts.minDelay,
      minDelay = _opts$minDelay === undefined ? 0 : _opts$minDelay,
      _opts$alwaysDelay = opts.alwaysDelay,
      alwaysDelay = _opts$alwaysDelay === undefined ? false : _opts$alwaysDelay,
      _opts$testBabelPlugin = opts.testBabelPlugin,
      testBabelPlugin = _opts$testBabelPlugin === undefined ? false : _opts$testBabelPlugin,
      _opts$loadingTransiti = opts.loadingTransition,
      loadingTransition = _opts$loadingTransiti === undefined ? true : _opts$loadingTransiti,
      options = _objectWithoutProperties(opts, ['render', 'loading', 'error', 'minDelay', 'alwaysDelay', 'testBabelPlugin', 'loadingTransition']);

  var renderFunc = userRender || (0, _utils.createDefaultRender)(Loading, Err);
  var isDynamic = hasBabelPlugin || testBabelPlugin;
  options.isDynamic = isDynamic;
  options.usesBabelPlugin = hasBabelPlugin;
  options.modCache = {};
  options.promCache = {};
  return _temp = _class = function (_React$Component) {
    _inherits(UniversalComponent, _React$Component);

    _createClass(UniversalComponent, [{
      key: 'requireAsyncInner',
      value: function requireAsyncInner(requireAsync, props, state, context, isMount) {
        var _this2 = this;

        if (!state.mod && loadingTransition) {
          this.update({
            mod: null,
            props: props
          }); // display `loading` during componentWillReceiveProps
        }

        var time = new Date();
        requireAsync(props, context).then(function (mod) {
          var state = {
            mod: mod,
            props: props,
            context: context
          };
          var timeLapsed = new Date() - time;

          if (timeLapsed < minDelay) {
            var extraDelay = minDelay - timeLapsed;
            return setTimeout(function () {
              return _this2.update(state, isMount);
            }, extraDelay);
          }

          _this2.update(state, isMount);
        })["catch"](function (error) {
          return _this2.update({
            error: error,
            props: props,
            context: context
          });
        });
      }
    }, {
      key: 'handleBefore',
      value: function handleBefore(isMount, isSync) {
        var isServer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        if (this.props.onBefore) {
          var onBefore = this.props.onBefore;
          var info = {
            isMount: isMount,
            isSync: isSync,
            isServer: isServer
          };
          onBefore(info);
        }
      }
    }, {
      key: 'handleAfter',
      value: function handleAfter(state, isMount, isSync, isServer) {
        var mod = state.mod,
            error = state.error;

        if (mod && !error) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });

          if (this.props.onAfter) {
            var onAfter = this.props.onAfter;
            var info = {
              isMount: isMount,
              isSync: isSync,
              isServer: isServer
            };
            onAfter(info, mod);
          }
        } else if (error && this.props.onError) {
          this.props.onError(error);
        }

        this.setState(state);
      } // $FlowFixMe

    }, {
      key: 'init',
      value: function init(props, context) {
        var _req = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            addModule = _req.addModule,
            requireSync = _req.requireSync,
            requireAsync = _req.requireAsync,
            asyncOnly = _req.asyncOnly;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return (0, _helpers.__update)(props, {
            error: error,
            props: props,
            context: context
          }, this._initialized);
        }

        this._asyncOnly = asyncOnly;
        var chunkName = addModule(props); // record the module for SSR flushing :)

        if (context.report) {
          context.report(chunkName);
        }

        if (mod || _utils.isServer) {
          this.handleBefore(true, true, _utils.isServer);
          return (0, _helpers.__update)(props, {
            asyncOnly: asyncOnly,
            props: props,
            mod: mod,
            context: context
          }, this._initialized, true, true, _utils.isServer);
        }

        this.handleBefore(true, false);
        this.requireAsyncInner(requireAsync, props, {
          props: props,
          asyncOnly: asyncOnly,
          mod: mod,
          context: context
        }, context, true);
        return {
          mod: mod,
          asyncOnly: asyncOnly,
          context: context,
          props: props
        };
      }
    }], [{
      key: 'preload',

      /* eslint-enable react/sort-comp */
      value: function preload(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req2 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireAsync = _req2.requireAsync,
            requireSync = _req2.requireSync;

        var mod = void 0;

        try {
          mod = requireSync(props, context);
        } catch (error) {
          return Promise.reject(error);
        }

        return Promise.resolve().then(function () {
          if (mod) return mod;
          return requireAsync(props, context);
        }).then(function (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
          return mod;
        });
      }
      /* eslint-disable react/sort-comp */

    }, {
      key: 'preloadWeak',
      value: function preloadWeak(props) {
        var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        props = props || {};

        var _req3 = (0, _requireUniversalModule2["default"])(asyncModule, options, props),
            requireSync = _req3.requireSync;

        var mod = requireSync(props, context);

        if (mod) {
          (0, _hoistNonReactStatics2["default"])(UniversalComponent, mod, {
            preload: true,
            preloadWeak: true
          });
        }

        return mod;
      }
    }]);

    function UniversalComponent(props, context) {
      _classCallCheck(this, UniversalComponent);

      var _this = _possibleConstructorReturn(this, (UniversalComponent.__proto__ || Object.getPrototypeOf(UniversalComponent)).call(this, props, context));

      _this.update = function (state) {
        var isMount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var isSync = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var isServer = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        if (!_this._initialized) return;
        if (!state.error) state.error = null;

        _this.handleAfter(state, isMount, isSync, isServer);
      };

      _this.state = _this.init(_this.props, _this.context); // $FlowFixMe

      _this.state.error = null;
      return _this;
    }

    _createClass(UniversalComponent, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        this._initialized = true;
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _this3 = this;

        if (isDynamic || this._asyncOnly) {
          var _req4 = (0, _requireUniversalModule2["default"])(asyncModule, options, this.props, prevProps),
              requireSync = _req4.requireSync,
              requireAsync = _req4.requireAsync,
              shouldUpdate = _req4.shouldUpdate;

          if (shouldUpdate(this.props, prevProps)) {
            var mod = void 0;

            try {
              mod = requireSync(this.props, this.context);
            } catch (error) {
              return this.update({
                error: error
              });
            }

            this.handleBefore(false, !!mod);

            if (!mod) {
              return this.requireAsyncInner(requireAsync, this.props, {
                mod: mod
              });
            }

            var state = {
              mod: mod
            };

            if (alwaysDelay) {
              if (loadingTransition) this.update({
                mod: null
              }); // display `loading` during componentWillReceiveProps

              setTimeout(function () {
                return _this3.update(state, false, true);
              }, minDelay);
              return;
            }

            this.update(state, false, true);
          }
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this._initialized = false;
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            isLoading = _props.isLoading,
            userError = _props.error,
            props = _objectWithoutProperties(_props, ['isLoading', 'error']);

        var _state = this.state,
            mod = _state.mod,
            error = _state.error;
        return renderFunc(props, mod, isLoading, userError || error);
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, currentState) {
        var _req5 = (0, _requireUniversalModule2["default"])(asyncModule, options, nextProps, currentState.props),
            requireSync = _req5.requireSync,
            shouldUpdate = _req5.shouldUpdate;

        if (isHMR() && shouldUpdate(currentState.props, nextProps)) {
          var mod = requireSync(nextProps, currentState.context);
          return _extends({}, currentState, {
            mod: mod
          });
        }

        return null;
      }
    }]);

    return UniversalComponent;
  }(_react2["default"].Component), _class.contextTypes = {
    store: _propTypes2["default"].object,
    report: _propTypes2["default"].func
  }, _temp;
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(13);

var requireById = function requireById(id) {
  if (!(0, _utils.isWebpack)() && typeof id === 'string') {
    return __webpack_require__(34)("" + id);
  }

  return __webpack_require__('' + id);
};

exports["default"] = requireById;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(3);

// EXTERNAL MODULE: /Users/Shinnosuke/Documents/b5react/blog/src/components/Router.js
var Router = __webpack_require__(4);

// CONCATENATED MODULE: /Users/Shinnosuke/Documents/b5react/blog/src/containers/Dynamic.js

/* harmony default export */ var Dynamic = (function () {
  return external_react_default.a.createElement("div", null, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
// EXTERNAL MODULE: /Users/Shinnosuke/Documents/b5react/blog/src/app.css
var app = __webpack_require__(46);

// CONCATENATED MODULE: /Users/Shinnosuke/Documents/b5react/blog/src/App.js

 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], null, external_react_default.a.createElement("nav", null, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/"
  }, "Home"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/about"
  }, "About"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/blog"
  }, "Blog")), external_react_default.a.createElement("div", {
    className: "content"
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", null, "Loading...")
  }, external_react_default.a.createElement(Router["b" /* Router */], null, external_react_default.a.createElement(Dynamic, {
    path: "dynamic"
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*"
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/typeof");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cacheProm = exports.loadFromPromiseCache = exports.cacheExport = exports.loadFromCache = exports.callForString = exports.createDefaultRender = exports.createElement = exports.findExport = exports.resolveExport = exports.tryRequire = exports.DefaultError = exports.DefaultLoading = exports.babelInterop = exports.isWebpack = exports.isServer = exports.isTest = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
};

var _react = __webpack_require__(0);

var React = _interopRequireWildcard(_react);

var _requireById = __webpack_require__(8);

var _requireById2 = _interopRequireDefault(_requireById);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

var isTest = exports.isTest = "production" === 'test';
var isServer = exports.isServer = !(typeof window !== 'undefined' && window.document && window.document.createElement);

var isWebpack = exports.isWebpack = function isWebpack() {
  return typeof __webpack_require__ !== 'undefined';
};

var babelInterop = exports.babelInterop = function babelInterop(mod) {
  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && mod.__esModule ? mod["default"] : mod;
};

var DefaultLoading = exports.DefaultLoading = function DefaultLoading() {
  return React.createElement('div', null, 'Loading...');
};

var DefaultError = exports.DefaultError = function DefaultError(_ref) {
  var error = _ref.error;
  return React.createElement('div', null, 'Error: ', error && error.message);
};

var tryRequire = exports.tryRequire = function tryRequire(id) {
  try {
    return (0, _requireById2["default"])(id);
  } catch (err) {
    // warn if there was an error while requiring the chunk during development
    // this can sometimes lead the server to render the loading component.
    if (false) {}
  }

  return null;
};

var resolveExport = exports.resolveExport = function resolveExport(mod, key, onLoad, chunkName, props, context, modCache) {
  var isSync = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : false;
  var exp = findExport(mod, key);

  if (onLoad && mod) {
    var _isServer = typeof window === 'undefined';

    var info = {
      isServer: _isServer,
      isSync: isSync
    };
    onLoad(mod, info, props, context);
  }

  if (chunkName && exp) cacheExport(exp, chunkName, props, modCache);
  return exp;
};

var findExport = exports.findExport = function findExport(mod, key) {
  if (typeof key === 'function') {
    return key(mod);
  } else if (key === null) {
    return mod;
  }

  return mod && (typeof mod === 'undefined' ? 'undefined' : _typeof(mod)) === 'object' && key ? mod[key] : babelInterop(mod);
};

var createElement = exports.createElement = function createElement(Component, props) {
  return React.isValidElement(Component) ? React.cloneElement(Component, props) : React.createElement(Component, props);
};

var createDefaultRender = exports.createDefaultRender = function createDefaultRender(Loading, Err) {
  return function (props, mod, isLoading, error) {
    if (isLoading) {
      return createElement(Loading, props);
    } else if (error) {
      return createElement(Err, _extends({}, props, {
        error: error
      }));
    } else if (mod) {
      // primary usage (for async import loading + errors):
      return createElement(mod, props);
    }

    return createElement(Loading, props);
  };
};

var callForString = exports.callForString = function callForString(strFun, props) {
  return typeof strFun === 'function' ? strFun(props) : strFun;
};

var loadFromCache = exports.loadFromCache = function loadFromCache(chunkName, props, modCache) {
  return !isServer && modCache[callForString(chunkName, props)];
};

var cacheExport = exports.cacheExport = function cacheExport(exp, chunkName, props, modCache) {
  return modCache[callForString(chunkName, props)] = exp;
};

var loadFromPromiseCache = exports.loadFromPromiseCache = function loadFromPromiseCache(chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)];
};

var cacheProm = exports.cacheProm = function cacheProm(pr, chunkName, props, promisecache) {
  return promisecache[callForString(chunkName, props)] = pr;
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "../node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "../node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: _node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "../node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "..",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("/Users/Shinnosuke/Documents/b5react/blog/node_modules/react-static/lib/browser");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__);












Object(_Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3__["setHasBabelPlugin"])();
var universalOptions = {
  loading: function loading() {
    return null;
  },
  error: function error(props) {
    console.error(props.error);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "An error occurred loading this page's template. More information is available in the console.");
  },
  ignoreBabelRename: true
};
var t_0 = _Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/404.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/404 */).then(__webpack_require__.bind(null, 20))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/404.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(20);
  },
  chunkName: function chunkName() {
    return "src/pages/404";
  }
}), universalOptions);
t_0.template = '../src/pages/404.js';
var t_1 = _Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/about.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/about */).then(__webpack_require__.bind(null, 21))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/about.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(21);
  },
  chunkName: function chunkName() {
    return "src/pages/about";
  }
}), universalOptions);
t_1.template = '../src/pages/about.js';
var t_2 = _Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/blog.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/blog */).then(__webpack_require__.bind(null, 22))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/blog.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(22);
  },
  chunkName: function chunkName() {
    return "src/pages/blog";
  }
}), universalOptions);
t_2.template = '../src/pages/blog.js';
var t_3 = _Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/pages/index.js",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/pages/index */).then(__webpack_require__.bind(null, 24))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/pages/index.js');
  },
  resolve: function resolve() {
    return /*require.resolve*/(24);
  },
  chunkName: function chunkName() {
    return "src/pages/index";
  }
}), universalOptions);
t_3.template = '../src/pages/index.js';
var t_4 = _Users_Shinnosuke_Documents_b5react_blog_node_modules_react_universal_component_dist_index_js__WEBPACK_IMPORTED_MODULE_3___default()(babel_plugin_universal_import_universalImport__WEBPACK_IMPORTED_MODULE_1___default()({
  id: "../src/containers/Post",
  load: function load() {
    return Promise.all([Promise.resolve(/* import() | src/containers/Post */).then(__webpack_require__.bind(null, 23))]).then(function (proms) {
      return proms[0];
    });
  },
  path: function path() {
    return path__WEBPACK_IMPORTED_MODULE_0___default.a.join(__dirname, '../src/containers/Post');
  },
  resolve: function resolve() {
    return /*require.resolve*/(23);
  },
  chunkName: function chunkName() {
    return "src/containers/Post";
  }
}), universalOptions);
t_4.template = '../src/containers/Post'; // Template Map

/* harmony default export */ __webpack_exports__["default"] = ({
  '../src/pages/404.js': t_0,
  '../src/pages/about.js': t_1,
  '../src/pages/blog.js': t_2,
  '../src/pages/index.js': t_3,
  '../src/containers/Post': t_4 // Not Found Template

});
var notFoundTemplate = "../src/pages/404.js";
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "404 - Oh no's! We couldn't find that page :("));
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Still preparing..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA0\uFF3C(\uFF65_\uFF65)7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA0\xA0\xA0\xA0\xA0\xA0)\xA0\xA0\xA0)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\xA0\xA0\xA0\xA0\xA0/\u2312>"));
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject3() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 12px;\n  text-align: right;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  font-size: 20px;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  border: 0px solid #ddd;\n  border-radius: 5px;\n  max-width: 640px;\n  margin: 20px auto;\n  padding: 10px 20px 1px 20px;\n  background-color: #ddd;\n  box-shadow: 10px 10px 15px -10px black;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


 //

 //

 //import {Jumbo, BlogTitle, JumboImg } from '../components/Jumbo';

var PostsBox = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div(_templateObject());
var BlogTitle = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.h2(_templateObject2());
var BlogTime = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.p(_templateObject3());
function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_2__["useRouteData"])(),
      posts = _useRouteData.posts;

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "align-center"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "It's blog time."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#bottom",
    id: "top"
  }, "Scroll to bottom!")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "All Posts:", posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostsBox, {
      key: post.id
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_3__[/* Link */ "a"], {
      to: "/blog/post/".concat(post.id, "/")
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlogTitle, null, post.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlogTime, null, post.created_at.slice(0, 16).replace('T', ' - '))));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#top",
    id: "bottom"
  }, "Scroll to top!"));
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);



 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  var html = marked__WEBPACK_IMPORTED_MODULE_2___default()(post.content);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_4__[/* Link */ "a"], {
    to: "/blog/"
  }, '<', " Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, post.title), react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(html), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, post.created_at));
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(5);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/taggedTemplateLiteral"
var taggedTemplateLiteral_ = __webpack_require__(7);
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral_);

// CONCATENATED MODULE: /Users/Shinnosuke/Documents/b5react/blog/src/components/Jumbo.js


function _templateObject3() {
  var data = taggedTemplateLiteral_default()(["\n  max-width: 100%;\n  top: -64px;\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = taggedTemplateLiteral_default()(["\n  font-size: 50px;\n  \n  text-align: right;\n  padding-right: 8%;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\ntext-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var Jumbo = external_styled_components_default.a.div(_templateObject());
var Title = external_styled_components_default.a.h1(_templateObject2());
var JumboImg = external_styled_components_default.a.img(_templateObject3());

// EXTERNAL MODULE: /Users/Shinnosuke/Documents/b5react/blog/src/images/moon.svg
var moon = __webpack_require__(27);
var moon_default = /*#__PURE__*/__webpack_require__.n(moon);

// CONCATENATED MODULE: /Users/Shinnosuke/Documents/b5react/blog/src/pages/index.js




/* harmony default export */ var pages = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(Jumbo, null, external_react_default.a.createElement(Title, null, "ShinKano-Blog"), external_react_default.a.createElement(JumboImg, {
    src: moon_default.a
  }), external_react_default.a.createElement("h2", null, "Link"), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "https://twitter.com/Shincoding",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Twitter: @Shincoding")), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "https://github.com/ShinKano",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "GitHub: @ShinKano")), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "https://qiita.com/ShinKano",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Qiita: @ShinKano")), external_react_default.a.createElement("h4", null, "with..."), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "https://reactjs.org/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "React.js")), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "https://github.com/react-static/react-static",
    target: "_blank",
    rel: "noopener noreferrer"
  }, " React-Static")), external_react_default.a.createElement("p", null, external_react_default.a.createElement("a", {
    href: "https://www.styled-components.com/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Styled-Components")));
});

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(3);

var _router = __webpack_require__(9);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)(staticInfo.path)
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyBpZD0iZTRkYTA3YzYtM2Y0NS00ODZlLWE1NTMtODc5ZTdmMjIyYzY3IiBkYXRhLW5hbWU9IkxheWVyIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjkyNiIgaGVpZ2h0PSI3NDkiIHZpZXdCb3g9IjAgMCA5MjYgNzQ5Ij48dGl0bGU+dG9fdGhlX21vb248L3RpdGxlPjxjaXJjbGUgY3g9IjIzNy45MDQ5NiIgY3k9IjIyNi45MzU0OCIgcj0iODMuOTc5MTYiIGZpbGw9IiNmZjY1ODQiLz48cGF0aCBkPSJNMTA2MywyNzYuNDZWNDk3LjM0YTMyNS45OTEyOCwzMjUuOTkxMjgsMCwwLDEtMzI2LDMyNkgxMzdWNjAyLjQ2YzAtMTE4LjAzLDYyLjczLTIyMS40MiwxNTYuNjgtMjc4LjYzYTMyMy41Nzc0MiwzMjMuNTc3NDIsMCwwLDEsNTAuODgtMjUuMTgsMzIwLjA5MDI0LDMyMC4wOTAyNCwwLDAsMSwzMS43Ni0xMC41M2MuMjEtLjA3LjQzLS4xMy42NC0uMThxNC43Ny0xLjMwNSw5LjYtMi40NmMuMTgtLjA1LjM1LS4wOS41My0uMTNhMzI2LjExNTgyLDMyNi4xMTU4MiwwLDAsMSw2MC40Ny04LjUzYzIuNDEtLjExMDA1LDQuODItLjIsNy4yNS0uMjUuODctLjAzLDEuNzUtLjA1LDIuNjQtLjA1cTIuNzYtLjA2LDUuNTUtLjA2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiIGZpbGw9IiMzZjNkNTYiLz48cGF0aCBkPSJNNTY5LDY4MWMtMjM4LjA4NjMsMC00MzEuMTgxLDY0LjIwMTI5LTQzMS45OTA0OCwxNDMuNWg4NjMuOTgxQzEwMDAuMTgwOTEsNzQ1LjIwMTI5LDgwNy4wODYzLDY4MSw1NjksNjgxWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiIGZpbGw9IiNmMmYyZjIiLz48ZyBvcGFjaXR5PSIwLjEiPjxlbGxpcHNlIGN4PSIzNTIiIGN5PSI2OTIiIHJ4PSI4MCIgcnk9IjIyLjIyMjIyIi8+PC9nPjxnIG9wYWNpdHk9IjAuMSI+PGVsbGlwc2UgY3g9IjUyNSIgY3k9IjY1MiIgcng9IjgwIiByeT0iMjIuMjIyMjIiLz48L2c+PGcgb3BhY2l0eT0iMC4xIj48ZWxsaXBzZSBjeD0iMzUyIiBjeT0iNjkyIiByeD0iNzIiIHJ5PSIyMCIvPjwvZz48ZyBvcGFjaXR5PSIwLjEiPjxlbGxpcHNlIGN4PSI1MjUiIGN5PSI2NTIiIHJ4PSI3MiIgcnk9IjIwIi8+PC9nPjxjaXJjbGUgY3g9IjEzOCIgY3k9IjI5MCIgcj0iNyIgZmlsbD0iI2YyZjJmMiIvPjxjaXJjbGUgY3g9Ijc0MCIgY3k9IjU2NCIgcj0iNyIgZmlsbD0iI2YyZjJmMiIvPjxjaXJjbGUgY3g9IjQxMCIgY3k9IjMzOSIgcj0iNyIgZmlsbD0iI2YyZjJmMiIvPjxjaXJjbGUgY3g9Ijc1NyIgY3k9IjI5NyIgcj0iNCIgZmlsbD0iI2ZmNjU4NCIvPjxjaXJjbGUgY3g9IjE1NCIgY3k9IjQ5NyIgcj0iNCIgZmlsbD0iI2ZmNjU4NCIvPjxwb2x5Z29uIHBvaW50cz0iOTQgNTgxLjMyMiA5Mi4xNzggNTgxLjMyMiA5Mi4xNzggNTc5LjUgOTEuODIyIDU3OS41IDkxLjgyMiA1ODEuMzIyIDkwIDU4MS4zMjIgOTAgNTgxLjY3OCA5MS44MjIgNTgxLjY3OCA5MS44MjIgNTgzLjUgOTIuMTc4IDU4My41IDkyLjE3OCA1ODEuNjc4IDk0IDU4MS42NzggOTQgNTgxLjMyMiIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iNjc5IDQzMy4zMjIgNjc3LjE3OCA0MzMuMzIyIDY3Ny4xNzggNDMxLjUgNjc2LjgyMiA0MzEuNSA2NzYuODIyIDQzMy4zMjIgNjc1IDQzMy4zMjIgNjc1IDQzMy42NzggNjc2LjgyMiA0MzMuNjc4IDY3Ni44MjIgNDM1LjUgNjc3LjE3OCA0MzUuNSA2NzcuMTc4IDQzMy42NzggNjc5IDQzMy42NzggNjc5IDQzMy4zMjIiIGZpbGw9IiNmMmYyZjIiLz48cG9seWdvbiBwb2ludHM9IjgzMCA0MDMuMzIyIDgyOC4xNzggNDAzLjMyMiA4MjguMTc4IDQwMS41IDgyNy44MjIgNDAxLjUgODI3LjgyMiA0MDMuMzIyIDgyNiA0MDMuMzIyIDgyNiA0MDMuNjc4IDgyNy44MjIgNDAzLjY3OCA4MjcuODIyIDQwNS41IDgyOC4xNzggNDA1LjUgODI4LjE3OCA0MDMuNjc4IDgzMCA0MDMuNjc4IDgzMCA0MDMuMzIyIiBmaWxsPSIjZjJmMmYyIi8+PHBvbHlnb24gcG9pbnRzPSI1MDUgNDgzLjMyMiA1MDMuMTc4IDQ4My4zMjIgNTAzLjE3OCA0ODEuNSA1MDIuODIyIDQ4MS41IDUwMi44MjIgNDgzLjMyMiA1MDEgNDgzLjMyMiA1MDEgNDgzLjY3OCA1MDIuODIyIDQ4My42NzggNTAyLjgyMiA0ODUuNSA1MDMuMTc4IDQ4NS41IDUwMy4xNzggNDgzLjY3OCA1MDUgNDgzLjY3OCA1MDUgNDgzLjMyMiIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iNzg2IDQ5My4zMjIgNzg0LjE3OCA0OTMuMzIyIDc4NC4xNzggNDkxLjUgNzgzLjgyMiA0OTEuNSA3ODMuODIyIDQ5My4zMjIgNzgyIDQ5My4zMjIgNzgyIDQ5My42NzggNzgzLjgyMiA0OTMuNjc4IDc4My44MjIgNDk1LjUgNzg0LjE3OCA0OTUuNSA3ODQuMTc4IDQ5My42NzggNzg2IDQ5My42NzggNzg2IDQ5My4zMjIiIGZpbGw9IiNmMmYyZjIiLz48cG9seWdvbiBwb2ludHM9IjQ0NyA1MzYuMzIyIDQ0NS4xNzggNTM2LjMyMiA0NDUuMTc4IDUzNC41IDQ0NC44MjIgNTM0LjUgNDQ0LjgyMiA1MzYuMzIyIDQ0MyA1MzYuMzIyIDQ0MyA1MzYuNjc4IDQ0NC44MjIgNTM2LjY3OCA0NDQuODIyIDUzOC41IDQ0NS4xNzggNTM4LjUgNDQ1LjE3OCA1MzYuNjc4IDQ0NyA1MzYuNjc4IDQ0NyA1MzYuMzIyIiBmaWxsPSIjZjJmMmYyIi8+PHBvbHlnb24gcG9pbnRzPSI1NzUgNTM4LjMyMiA1NzMuMTc4IDUzOC4zMjIgNTczLjE3OCA1MzYuNSA1NzIuODIyIDUzNi41IDU3Mi44MjIgNTM4LjMyMiA1NzEgNTM4LjMyMiA1NzEgNTM4LjY3OCA1NzIuODIyIDUzOC42NzggNTcyLjgyMiA1NDAuNSA1NzMuMTc4IDU0MC41IDU3My4xNzggNTM4LjY3OCA1NzUgNTM4LjY3OCA1NzUgNTM4LjMyMiIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iOTYgMzY4LjMyMiA5NC4xNzggMzY4LjMyMiA5NC4xNzggMzY2LjUgOTMuODIyIDM2Ni41IDkzLjgyMiAzNjguMzIyIDkyIDM2OC4zMjIgOTIgMzY4LjY3OCA5My44MjIgMzY4LjY3OCA5My44MjIgMzcwLjUgOTQuMTc4IDM3MC41IDk0LjE3OCAzNjguNjc4IDk2IDM2OC42NzggOTYgMzY4LjMyMiIgZmlsbD0iI2YyZjJmMiIvPjxyZWN0IHg9IjY3Ni45OTcwOCIgeT0iMjMwLjY4OTE3IiB3aWR0aD0iMi44NzQ0MyIgaGVpZ2h0PSI1OC4wNjM0MiIgZmlsbD0iI2U2ZTZlNiIvPjxwb2x5Z29uIHBvaW50cz0iNjExLjc0OCAzODUuMDQ2IDU4NS4zMDMgNDQ1Ljk4NCA1OTAuNDc3IDQ1NC42MDcgNTg4Ljc1MiA0NTcuNDgxIDYwMC44MjUgNDYzLjgwNSA2MDAuODI1IDQ2MC4zNTYgNjA1LjQyNCA0NTkuMjA2IDYyNC45NyA0MjMuNTYzIDYxMS43NDggMzg1LjA0NiIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik03MjguMDUxNzIsNTMyLjQwNjU0cy0xOS41NDYxLDMwLjQ2ODkyLDIuMjk5NTQsMzUuMDY4LDQuMDI0Mi0zMi4xOTM1OCw0LjAyNDItMzIuMTkzNThaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3IC03NS41KSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik03NTYuMjIxMSw1MTguNjA5MjlsLTYuODk4NjIsMjIuNDIwNTMtMi44NzQ0MywyOC43NDQyNi01LjE3NCwxMC4zNDc5NCw1Ljc0ODg1LDQ2LjU2NTcxLDkuMTk4MTYsOS4xOTgxNiw0LjAyNDIsNDUuOTkwODN2MjAuNjk1ODdsMTAuOTIyODIsMTguOTcxMjEtMTQuMDY1NzgsMTkuOTY0MzRhNi4zNjA5Miw2LjM2MDkyLDAsMCwwLDQuOTkwNDQsMTAuMDMwODhjMy4xMDUzOS4wODE1NSw3LjE5OTA3LS43OTU4OCwxMi41MjQ2NS0zLjU1MDQ5LDE2LjY3MTY4LTguNjIzMjgsMTYuMDk2NzktMTYuNjcxNjgsMTYuMDk2NzktMTYuNjcxNjhzMTAuMzQ3OTQsMCwxMC45MjI4Mi04LjA0ODM5LTYuMzIzNzQtNjUuNTM2OTMtNi4zMjM3NC02NS41MzY5M2wtNi4zMjM3My0yNC43MjAwNlY1NjUuNzQ5ODhoMi4yOTk1NGwxLjE0OTc3LDU3LjQ4ODU0LDUuMTc0LDIxLjI3MDc1LjU3NDg4LDkuMTk4MTcsNy40NzM1MSw5MS45ODE2NXMzMy4zNDMzNSw5LjE5ODE2LDM1LjA2OCwxLjcyNDY1LTEyLjY0NzQ3LTEyLjA3MjU5LTEyLjY0NzQ3LTEyLjA3MjU5bDguNjIzMjgtMTYuNjcxNjdWNjg2LjQ3NThsLTIuODc0NDMtNi44OTg2Mi01LjE3NC00Ni41NjU3MSw4LjYyMzI4LTkuMTk4MTcsNC41OTkwOC01Ljc0ODg1VjU3Mi4wNzM2MmwtNS43NDg4NS0xNy44MjE0NC0xLjcyNDY1LTE0Ljk0Ny05LjE5ODE3LTIyLjk5NTQxUzc4My4yNDA3MSw1MDIuNTEyNSw3NTYuMjIxMSw1MTguNjA5MjlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3IC03NS41KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik04MzAuOTU2MTksMzg4LjY4NTIxYTQzLjY5MTI4LDQzLjY5MTI4LDAsMSwxLTc4Ljc1OTI4LTI2LjA1OTU2bC4wMTE1MS0uMDExNTFhNDMuNjg3MSw0My42ODcxLDAsMCwxLDc4Ljc0Nzc3LDI2LjA3MTA3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiIGZpbGw9IiNmNmRjNDMiLz48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik04MjQuNzQ3NCwzNzAuNTcwNTdsLTMuNTY0MjYsMjAuNDE0MThjLTI2Ljc4NC02OS41MjY2My02OS4zODg2My0yNi44MTg0MS03MC4xMjQ1LTI2LjA3MTA3YTQzLjY5MDg4LDQzLjY5MDg4LDAsMCwxLDczLjY4ODc2LDUuNjU2ODlaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3IC03NS41KSIvPjwvZz48cGF0aCBkPSJNODI1Ljg5NzE3LDM2OC4yNzFsLTMuNTY0MjYsMjAuNDE0MThjLTI2Ljc4NC02OS41MjY2My02OS4zODg2Mi0yNi44MTg0MS03MC4xMjQ0OS0yNi4wNzEwN2E0My42OTA4Nyw0My42OTA4NywwLDAsMSw3My42ODg3NSw1LjY1Njg5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiIGZpbGw9IiNmZmYiLz48cGF0aCBkPSJNODE5LjkwNzg3LDM1OS42NTI2Mmw1Ljk4OTMsMjAuNzkwMjdzLTEyLjQzMjYsMzcuMjYzNDgtNzAuMDg2LDM4LjU2MjI1bC0xLjg4OTU3LDUuMzIzLTYuMzIzNzQsMS43MjQ2Ni0yLjg3NDQyLDEyLjA3MjU5LDguMDQ4MzksNzYuNDU5NzRzLTMuNDQ5MzEsNy40NzM1MSwyLjI5OTU0LDYuODk4NjNjMCwwLDM3Ljk0MjQzLTEyLjY0NzQ4LDcwLjcxMDktMS4xNDk3NywwLDAsNi44OTg2MiwyLjg3NDQyLDUuMTc0LTMuNDQ5MzIsMCwwLDIyLjk5NTQyLTE0LjM3MjEzLDIxLjI3MDc2LTI5LjMxOTE1czEuNzI0NjYtODQuNTA4MTQsMS43MjQ2Ni04NC41MDgxNCwzLjQ0OTMxLTIwLjEyMS02Ljg5ODYzLTI0LjcyMDA2Qzg0Ny4wNTMsMzc4LjMzNzI4LDgzMS44NTUsMzU3LjA2NDc1LDgxOS45MDc4NywzNTkuNjUyNjJaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3IC03NS41KSIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik04MDcuMzA0NDMsNTA0LjkxNzUxcy0zNi4wMTgzNiwzLjYxNzEzLTI2LjA0Nzk0LDIzLjU5MTQ4LDI3LjcyNS0xNi44NTA2MSwyNy43MjUtMTYuODUwNjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTM3IC03NS41KSIgZmlsbD0iI2U2ZTZlNiIvPjxwYXRoIGQ9Ik04MjUuNzgyMjMsNDE1LjcwNDgycy02LjMyMzc0LDcuNDczNTEtNC4wMjQyLDE5LjU0NjEsMTAuOTIyODIsMzkuMDkyMiwxMC45MjI4MiwzOS4wOTIyTDgwMi4yMTE5Myw1MDIuNTEyNSw4MTEuNDEwMDksNTE1LjE2bDQxLjM5MTc1LTIxLjI3MDc2TDg2Miw0ODguMTQwMzd2MEEyMzguNTA2NjYsMjM4LjUwNjY2LDAsMCwwLDg0NS4xMDgxMyw0MjAuNWwtMS41MDQ0Ni0zLjY0NTQzUzgzMi42ODA4NSw0MTIuMjU1NTEsODI1Ljc4MjIzLDQxNS43MDQ4MloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzcgLTc1LjUpIiBmaWxsPSIjZTZlNmU2Ii8+PGNpcmNsZSBjeD0iNjg1LjkwNzgiIGN5PSIzMDkuMTYxMDEiIHI9IjEwLjYzNTM4IiBmaWxsPSIjZTZlNmU2Ii8+PGNpcmNsZSBjeD0iNjc4LjQzNDI5IiBjeT0iMjMwLjQwMTczIiByPSI3Ljc2MDk1IiBmaWxsPSIjZTZlNmU2Ii8+PHBvbHlnb24gcG9pbnRzPSI0ODEgMzUyLjMyMiA0NzkuMTc4IDM1Mi4zMjIgNDc5LjE3OCAzNTAuNSA0NzguODIyIDM1MC41IDQ3OC44MjIgMzUyLjMyMiA0NzcgMzUyLjMyMiA0NzcgMzUyLjY3OCA0NzguODIyIDM1Mi42NzggNDc4LjgyMiAzNTQuNSA0NzkuMTc4IDM1NC41IDQ3OS4xNzggMzUyLjY3OCA0ODEgMzUyLjY3OCA0ODEgMzUyLjMyMiIgZmlsbD0iI2YyZjJmMiIvPjxwb2x5Z29uIHBvaW50cz0iNjQ1IDI5Ni4zMjIgNjQzLjE3OCAyOTYuMzIyIDY0My4xNzggMjk0LjUgNjQyLjgyMiAyOTQuNSA2NDIuODIyIDI5Ni4zMjIgNjQxIDI5Ni4zMjIgNjQxIDI5Ni42NzggNjQyLjgyMiAyOTYuNjc4IDY0Mi44MjIgMjk4LjUgNjQzLjE3OCAyOTguNSA2NDMuMTc4IDI5Ni42NzggNjQ1IDI5Ni42NzggNjQ1IDI5Ni4zMjIiIGZpbGw9IiNmMmYyZjIiLz48cG9seWdvbiBwb2ludHM9IjYyNyAzMTMuMzIyIDYyNS4xNzggMzEzLjMyMiA2MjUuMTc4IDMxMS41IDYyNC44MjIgMzExLjUgNjI0LjgyMiAzMTMuMzIyIDYyMyAzMTMuMzIyIDYyMyAzMTMuNjc4IDYyNC44MjIgMzEzLjY3OCA2MjQuODIyIDMxNS41IDYyNS4xNzggMzE1LjUgNjI1LjE3OCAzMTMuNjc4IDYyNyAzMTMuNjc4IDYyNyAzMTMuMzIyIiBmaWxsPSIjZjJmMmYyIi8+PGNpcmNsZSBjeD0iNTU2IiBjeT0iMjY3IiByPSI0IiBmaWxsPSIjZjJmMmYyIi8+PHBhdGggZD0iTTQ5NS45NTc4LDM3MC42OTQ1YzAsMjc5LjA0NC0zNS4wODg0NiwyNzkuMDQ0LTc4LjM1OTYzLDI3OS4wNDQtMjIuMzcxMzIsMC00Mi41NTM1NSwwLTU2LjgyNTY5LTM4LjU0NTgtNC4xMDMzMy0xMS4wNzgtNy43MjgyNS0yNS4zNjIyMS0xMC43NjctNDMuNzQ5OC02Ljg0My00MS4zMzMyLTEwLjc2Ny0xMDMuNDQ2NjUtMTAuNzY3LTE5Ni43NDg0MywwLTM1Ljg3Nzk0LDQuMjQ3LTcxLjA1MDA4LDEwLjc2Ny0xMDMuOTAxMzMsMy4xMzQzOC0xNS44MTU0NSw2Ljc5NTA4LTMxLjA4MDY0LDEwLjc2Ny00NS42NCw0Ljg1NzE3LTE3LjgyNTM1LDEwLjE4MDc4LTM0LjU4NTk1LDE1LjU1MjI5LTQ5LjkyMjkxLDMuNjAxLTEwLjMxMjM2LDcuMjM3ODYtMTkuOTkwNjMsMTAuNzY3LTI4LjkyNzI2LDE2LjMwNi00MS4yNDk0NCwzMC41MDY0My02Ni44MDMsMzAuNTA2NDMtNjYuODAzUzQ5NS45NTc4LDIxNi41ODMyMiw0OTUuOTU3OCwzNzAuNjk0NVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzcgLTc1LjUpIiBmaWxsPSIjZjJmMmYyIi8+PGcgb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzg3LjA5MTc0LDE0Mi4zMDNWNjI4LjgwMjc1aC0xMC43NjdWMTcxLjIzMDNDMzc5LjkyNTc0LDE2MC45MTc5NCwzODMuNTYyNjMsMTUxLjIzOTY3LDM4Ny4wOTE3NCwxNDIuMzAzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiLz48L2c+PGNpcmNsZSBjeD0iMjc4LjIwNTUiIGN5PSIxOTIuNjA5MTciIHI9IjQzLjA2Nzg5IiBmaWxsPSIjM2YzZDU2Ii8+PHBhdGggZD0iTTUwOS43MTU1OCw2MjMuNDE5MjVjLTkuNTc1OTMtMjMuNTcxNzItMjEuODcxMzQtMjcuNjM4NDktMjkuOTA4MjEtMjcuMjg0ODV2LTMuODE5NzZIMzU0LjE5MjYzdjMuODE5NzZjLTguMDM2ODctLjM1MzY0LTIwLjMzMjI4LDMuNzEzMTMtMjkuOTA4MjEsMjcuMjg0ODVDMzA4LjczMjE4LDY2MS43MDE4NCwzMzMuODU1LDcyNy41LDMzMy44NTUsNzI3LjVzLTEzLjQyNjE1LTkxLjc2NywzMS4xNTgzMy05Mi4zNzFBNTIuNzYyMzgsNTIuNzYyMzgsMCwwLDAsMzc5LDY0Ny44MTg2VjY3Mi41aDcyVjY1MC4wNjU5MmE1Mi43MDcsNTIuNzA3LDAsMCwwLDE3Ljk4NjY5LTE0LjkzN0M1MTMuNTcxMTcsNjM1LjczMyw1MDAuMTQ1LDcyNy41LDUwMC4xNDUsNzI3LjVTNTI1LjI2NzgyLDY2MS43MDE4NCw1MDkuNzE1NTgsNjIzLjQxOTI1WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiIGZpbGw9IiNmNmRjNDMiLz48Y2lyY2xlIGN4PSIyNzguMjA1NSIgY3k9IjE5Mi42MDkxNyIgcj0iMzMuNDk3MjUiIGZpbGw9IiNmNmRjNDMiLz48cGF0aCBkPSJNOTgzLjAxLDI3Ni40NmgtMkE4Mi4wODQ1Miw4Mi4wODQ1MiwwLDAsMCwxMDYzLDM1OHYtMkE4MC4wNzg2Miw4MC4wNzg2MiwwLDAsMSw5ODMuMDEsMjc2LjQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiIGZpbGw9IiNmNmRjNDMiLz48cGF0aCBkPSJNOTQ2LjAxLDI3Ni40NmgtMkExMTkuMTE1NDMsMTE5LjExNTQzLDAsMCwwLDEwNjMsMzk1di0yQTExNy4xMjI0NywxMTcuMTIyNDcsMCwwLDEsOTQ2LjAxLDI3Ni40NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzcgLTc1LjUpIiBmaWxsPSIjZjZkYzQzIi8+PHBhdGggZD0iTTkwOCwyNzYuNDZoLTJDOTA2LjI1LDM2Mi44Miw5NzYuNTgsNDMzLDEwNjMsNDMzdi0yQzk3Ny42OCw0MzEsOTA4LjI1LDM2MS43Miw5MDgsMjc2LjQ2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEzNyAtNzUuNSkiIGZpbGw9IiNmNmRjNDMiLz48L3N2Zz4="

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("react-html-parser");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(31);
__webpack_require__(32);
module.exports = __webpack_require__(38);


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(15)["default"];

var _require = __webpack_require__(16),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/Shinnosuke/Documents/b5react/blog/artifacts/react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(15)["default"]);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(16),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(17),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("/Users/Shinnosuke/Documents/b5react/blog/artifacts/react-static-templates.js", function () {
    var _require3 = __webpack_require__(17),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(11)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearChunks = exports.flushModuleIds = exports.flushChunkNames = exports.MODULE_IDS = exports.CHUNK_NAMES = undefined;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

exports["default"] = requireUniversalModule;

var _utils = __webpack_require__(13);

var CHUNK_NAMES = exports.CHUNK_NAMES = new Set();
var MODULE_IDS = exports.MODULE_IDS = new Set();

function requireUniversalModule(universalConfig, options, props, prevProps) {
  var key = options.key,
      _options$timeout = options.timeout,
      timeout = _options$timeout === undefined ? 15000 : _options$timeout,
      onLoad = options.onLoad,
      onError = options.onError,
      isDynamic = options.isDynamic,
      modCache = options.modCache,
      promCache = options.promCache,
      usesBabelPlugin = options.usesBabelPlugin;
  var config = getConfig(isDynamic, universalConfig, options, props);
  var chunkName = config.chunkName,
      path = config.path,
      resolve = config.resolve,
      load = config.load;
  var asyncOnly = !path && !resolve || typeof chunkName === 'function';

  var requireSync = function requireSync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);

    if (!exp) {
      var mod = void 0;

      if (!(0, _utils.isWebpack)() && path) {
        var modulePath = (0, _utils.callForString)(path, props) || '';
        mod = (0, _utils.tryRequire)(modulePath);
      } else if ((0, _utils.isWebpack)() && resolve) {
        var weakId = (0, _utils.callForString)(resolve, props);

        if (__webpack_require__.m[weakId]) {
          mod = (0, _utils.tryRequire)(weakId);
        }
      }

      if (mod) {
        exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache, true);
      }
    }

    return exp;
  };

  var requireAsync = function requireAsync(props, context) {
    var exp = (0, _utils.loadFromCache)(chunkName, props, modCache);
    if (exp) return Promise.resolve(exp);
    var cachedPromise = (0, _utils.loadFromPromiseCache)(chunkName, props, promCache);
    if (cachedPromise) return cachedPromise;
    var prom = new Promise(function (res, rej) {
      var reject = function reject(error) {
        error = error || new Error('timeout exceeded');
        clearTimeout(timer);

        if (onError) {
          var _isServer = typeof window === 'undefined';

          var info = {
            isServer: _isServer
          };
          onError(error, info);
        }

        rej(error);
      }; // const timer = timeout && setTimeout(reject, timeout)


      var timer = timeout && setTimeout(reject, timeout);

      var resolve = function resolve(mod) {
        clearTimeout(timer);
        var exp = (0, _utils.resolveExport)(mod, key, onLoad, chunkName, props, context, modCache);
        if (exp) return res(exp);
        reject(new Error('export not found'));
      };

      var request = load(props, {
        resolve: resolve,
        reject: reject
      }); // if load doesn't return a promise, it must call resolveImport
      // itself. Most common is the promise implementation below.

      if (!request || typeof request.then !== 'function') return;
      request.then(resolve)["catch"](reject);
    });
    (0, _utils.cacheProm)(prom, chunkName, props, promCache);
    return prom;
  };

  var addModule = function addModule(props) {
    if (_utils.isServer || _utils.isTest) {
      if (chunkName) {
        var name = (0, _utils.callForString)(chunkName, props);

        if (usesBabelPlugin) {
          // if ignoreBabelRename is true, don't apply regex
          var shouldKeepName = options && !!options.ignoreBabelRename;

          if (!shouldKeepName) {
            name = name.replace(/\//g, '-');
          }
        }

        if (name) CHUNK_NAMES.add(name);
        if (!_utils.isTest) return name; // makes tests way smaller to run both kinds
      }

      if ((0, _utils.isWebpack)()) {
        var weakId = (0, _utils.callForString)(resolve, props);
        if (weakId) MODULE_IDS.add(weakId);
        return weakId;
      }

      if (!(0, _utils.isWebpack)()) {
        var modulePath = (0, _utils.callForString)(path, props);
        if (modulePath) MODULE_IDS.add(modulePath);
        return modulePath;
      }
    }
  };

  var shouldUpdate = function shouldUpdate(next, prev) {
    var cacheKey = (0, _utils.callForString)(chunkName, next);
    var config = getConfig(isDynamic, universalConfig, options, prev);
    var prevCacheKey = (0, _utils.callForString)(config.chunkName, prev);
    return cacheKey !== prevCacheKey;
  };

  return {
    requireSync: requireSync,
    requireAsync: requireAsync,
    addModule: addModule,
    shouldUpdate: shouldUpdate,
    asyncOnly: asyncOnly
  };
}

var flushChunkNames = exports.flushChunkNames = function flushChunkNames() {
  var chunks = Array.from(CHUNK_NAMES);
  CHUNK_NAMES.clear();
  return chunks;
};

var flushModuleIds = exports.flushModuleIds = function flushModuleIds() {
  var ids = Array.from(MODULE_IDS);
  MODULE_IDS.clear();
  return ids;
};

var clearChunks = exports.clearChunks = function clearChunks() {
  CHUNK_NAMES.clear();
  MODULE_IDS.clear();
};

var getConfig = function getConfig(isDynamic, universalConfig, options, props) {
  if (isDynamic) {
    var resultingConfig = typeof universalConfig === 'function' ? universalConfig(props) : universalConfig;

    if (options) {
      resultingConfig = _extends({}, resultingConfig, options);
    }

    return resultingConfig;
  }

  var load = typeof universalConfig === 'function' ? universalConfig : // $FlowIssue
  function () {
    return universalConfig;
  };
  return {
    file: 'default',
    id: options.id || 'default',
    chunkName: options.chunkName || 'default',
    resolve: options.resolve || '',
    path: options.path || '',
    load: load,
    ignoreBabelRename: true
  };
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	".": 8,
	"./": 8,
	"./index": 8,
	"./index.js": 8
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 34;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = __webpack_require__(12);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(18);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (_typeof(call) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + _typeof(superClass));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var ReportChunks = function (_React$Component) {
  _inherits(ReportChunks, _React$Component);

  function ReportChunks() {
    _classCallCheck(this, ReportChunks);

    return _possibleConstructorReturn(this, (ReportChunks.__proto__ || Object.getPrototypeOf(ReportChunks)).apply(this, arguments));
  }

  _createClass(ReportChunks, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        report: this.props.report
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2["default"].Children.only(this.props.children);
    }
  }]);

  return ReportChunks;
}(_react2["default"].Component);

ReportChunks.propTypes = {
  report: _propTypes2["default"].func.isRequired
};
ReportChunks.childContextTypes = {
  report: _propTypes2["default"].func.isRequired
};
exports["default"] = ReportChunks;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("vm");

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__handleAfter = exports.__update = undefined;

var _hoistNonReactStatics = __webpack_require__(19);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var __update = exports.__update = function __update(props, state, isInitialized) {
  var isMount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var isSync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var isServer = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  if (!isInitialized) return state;

  if (!state.error) {
    state.error = null;
  }

  return __handleAfter(props, state, isMount, isSync, isServer);
};
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["__handleAfter"] }] */


var __handleAfter = exports.__handleAfter = function __handleAfter(props, state, isMount, isSync, isServer) {
  var mod = state.mod,
      error = state.error;

  if (mod && !error) {
    (0, _hoistNonReactStatics2["default"])(_index2["default"], mod, {
      preload: true,
      preloadWeak: true
    });

    if (props.onAfter) {
      var onAfter = props.onAfter;
      var info = {
        isMount: isMount,
        isSync: isSync,
        isServer: isServer
      };
      onAfter(info, mod);
    }
  } else if (error && props.onError) {
    props.onError(error);
  }

  return state;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(39);

var _interopRequireDefault = __webpack_require__(40);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(41));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(42));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(43);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(44)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("/Users/Shinnosuke/Documents/b5react/blog/node_modules/react-static/lib/browser/hooks/useStaticInfo");

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, null)), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)(module)))

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(47)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  background-color: #3F3C55;\n  color: #eee\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 2rem;\n}\n\n.align-center {\n  text-align: center;\n}\n", ""]);



/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ })
/******/ ]);
});