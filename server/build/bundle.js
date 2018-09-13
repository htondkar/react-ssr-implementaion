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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomePage = __webpack_require__(12);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(13);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeDefinitions = [{
  path: '/',
  component: _HomePage2.default,
  exact: true
}, {
  path: '/about',
  component: _AboutPage2.default
}];

exports.default = routeDefinitions;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var FETCH_USERS = exports.FETCH_USERS = 'fetch-users';

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(10);

var _renderer2 = _interopRequireDefault(_renderer);

var _serverStoreFactory = __webpack_require__(17);

var _reactRouterConfig = __webpack_require__(3);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var PORT = 3000;
var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var store, componentsToRenderForRoute, promises;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = (0, _serverStoreFactory.storeFactory)();
            componentsToRenderForRoute = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);
            promises = componentsToRenderForRoute.map(function (match) {
              var preLoadProps = match.route.component.preLoadProps;

              return preLoadProps ? preLoadProps(store) : null;
            });
            _context.next = 5;
            return Promise.all(promises);

          case 5:

            res.send((0, _renderer2.default)(req, store));

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());

app.listen(PORT, function () {
  console.log('listening on port:', PORT);
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _routes = __webpack_require__(4);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function renderer(req, store) {
  var routerContext = {};

  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { context: routerContext, location: req.path },
      (0, _reactRouterConfig.renderRoutes)(_routes2.default)
    )
  ));

  return '\n    <html>\n      <head></head>\n      <body>\n        <div id="root">' + content + '</div>\n\n        <script>\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(store.getState()).replace(/</g, '\\u003c') + '\n        </script>\n\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'main',
    null,
    _react2.default.createElement(
      'h5',
      null,
      'Hello world '
    ),
    _react2.default.createElement(
      'p',
      null,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eos id suscipit perspiciatis nobis officia, dignissimos doloremque non quasi sit excepturi, praesentium odio totam placeat ipsam pariatur dolor quaerat dolores.'
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/about' },
        'About us'
      )
    )
  );
};

exports.default = HomePage;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _actionCreators = __webpack_require__(14);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AboutPage = function (_Component) {
  _inherits(AboutPage, _Component);

  function AboutPage() {
    _classCallCheck(this, AboutPage);

    return _possibleConstructorReturn(this, (AboutPage.__proto__ || Object.getPrototypeOf(AboutPage)).apply(this, arguments));
  }

  _createClass(AboutPage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // this.props.fetchUsers()
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'main',
        null,
        _react2.default.createElement(
          'h3',
          null,
          'Our users'
        ),
        _react2.default.createElement(
          'section',
          null,
          _react2.default.createElement(
            'ul',
            null,
            this.props.users.map(function (user) {
              return _react2.default.createElement(
                'li',
                { key: user.id },
                user.name
              );
            })
          )
        ),
        _react2.default.createElement(
          _reactRouterDom.Link,
          { to: '/' },
          'Home'
        )
      );
    }
  }]);

  return AboutPage;
}(_react.Component);

// returns a promise, because store.dispatch returns the fired action,
// in this case its a promise because of the async function,
// redux thunk also returns the promise returned from the thunk itself.


AboutPage.preLoadProps = function (store) {
  return store.dispatch((0, _actionCreators.fetchUsersThunk)());
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    users: state.users
  };
};

var actions = {
  fetchUsers: _actionCreators.fetchUsersThunk
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, actions)(AboutPage);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchUsersThunk = exports.fetchUsersActionCreator = undefined;

var _actionTypes = __webpack_require__(5);

var actionTypes = _interopRequireWildcard(_actionTypes);

var _api = __webpack_require__(15);

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var fetchUsersActionCreator = exports.fetchUsersActionCreator = function fetchUsersActionCreator() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    type: actionTypes.FETCH_USERS,
    payload: payload,
    meta: meta
  };
};

var fetchUsersThunk = exports.fetchUsersThunk = function fetchUsersThunk(_) {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var payload;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _api2.default.fetchUsers();

            case 2:
              payload = _context.sent;

              dispatch(fetchUsersActionCreator(payload, { success: true }));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(16);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = function () {
  function Api(agent, _ref) {
    var _ref$baseURL = _ref.baseURL,
        baseURL = _ref$baseURL === undefined ? '' : _ref$baseURL;

    _classCallCheck(this, Api);

    this.http = agent.create({
      baseURL: baseURL
    });
  }

  _createClass(Api, [{
    key: 'fetchUsers',
    value: function fetchUsers() {
      return this.http.get('/users');
    }
  }]);

  return Api;
}();

var ApiInstance = new Api(_axios2.default, { baseURL: 'https://react-ssr-api.herokuapp.com/' });

exports.default = ApiInstance;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeFactory = undefined;

var _redux = __webpack_require__(6);

var _reduxThunk = __webpack_require__(18);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _index = __webpack_require__(19);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var storeFactory = exports.storeFactory = function storeFactory() {
  var reducers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _index2.default;
  var initialState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var middlewares = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [_reduxThunk2.default];
  return (0, _redux.createStore)(reducers, initialState, _redux.applyMiddleware.apply(undefined, _toConsumableArray(middlewares)));
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(6);

var _users = __webpack_require__(20);

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  users: _users2.default
});

exports.default = rootReducer;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(5);

var actionTypes = _interopRequireWildcard(_actionTypes);

var _util = __webpack_require__(21);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionHandlers = _defineProperty({}, actionTypes.FETCH_USERS, function (oldState, action) {
  return action.meta.success ? action.payload.data : oldState;
});

var defaultValue = [];
exports.default = (0, _util.createReducer)(actionHandlers, defaultValue);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var createReducer = exports.createReducer = function createReducer() {
  var actionHandlers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultValue = arguments[1];
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultValue;
    var action = arguments[1];

    return actionHandlers[action.type] ? actionHandlers[action.type](state, action) : state;
  };
};

/***/ })
/******/ ]);