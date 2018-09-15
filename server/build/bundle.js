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
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
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
var FETCH_USERS = exports.FETCH_USERS = 'fetch-users';
var FETCH_CURRENT_USER = exports.FETCH_CURRENT_USER = 'fetch-current-user';

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomePage = __webpack_require__(17);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _AboutPage = __webpack_require__(19);

var _AboutPage2 = _interopRequireDefault(_AboutPage);

var _App = __webpack_require__(20);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboardRoutes = [{
  path: '/',
  component: _HomePage2.default,
  exact: true
}, {
  path: '/about',
  component: _AboutPage2.default
}];

var routeDefinitions = [{
  component: _App2.default,
  routes: dashboardRoutes
}];

exports.default = routeDefinitions;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCurrentUserThunk = exports.fetchCurrentUserActionCreator = exports.fetchUsersThunk = exports.fetchUsersActionCreator = undefined;

var _actionTypes = __webpack_require__(4);

var actionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

//
// ─── ALL USERS ──────────────────────────────────────────────────────────────────
//

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
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch, _, Api) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = dispatch;
              _context.t1 = fetchUsersActionCreator;
              _context.next = 4;
              return Api.fetchUsers();

            case 4:
              _context.t2 = _context.sent;
              _context.t3 = { success: true };
              _context.t4 = (0, _context.t1)(_context.t2, _context.t3);
              (0, _context.t0)(_context.t4);

            case 8:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x3, _x4, _x5) {
      return _ref.apply(this, arguments);
    };
  }();
};

//
// ─── CURRENT USER ───────────────────────────────────────────────────────────────
//

var fetchCurrentUserActionCreator = exports.fetchCurrentUserActionCreator = function fetchCurrentUserActionCreator() {
  var payload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var meta = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return {
    type: actionTypes.FETCH_CURRENT_USER,
    payload: payload,
    meta: meta
  };
};

var fetchCurrentUserThunk = exports.fetchCurrentUserThunk = function fetchCurrentUserThunk(_) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch, _, Api) {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = dispatch;
              _context2.t1 = fetchCurrentUserActionCreator;
              _context2.next = 4;
              return Api.fetchCurrentUser();

            case 4:
              _context2.t2 = _context2.sent;
              _context2.t3 = { success: true };
              _context2.t4 = (0, _context2.t1)(_context2.t2, _context2.t3);
              (0, _context2.t0)(_context2.t4);

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x8, _x9, _x10) {
      return _ref2.apply(this, arguments);
    };
  }();
};

// ────────────────────────────────────────────────────────────────────────────────

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(11);

var _express = __webpack_require__(12);

var _express2 = _interopRequireDefault(_express);

var _handlers = __webpack_require__(13);

var _expressHttpProxy = __webpack_require__(31);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize
var PORT = 3000;
var app = (0, _express2.default)();

// send all /api request to the real API
app.use('/api', (0, _expressHttpProxy2.default)('https://react-ssr-api.herokuapp.com', {
  proxyReqOptDecorator: function proxyReqOptDecorator(options) {
    options.headers['x-forward-host'] = 'localhost:3000';
    return options;
  }
}));

// serve the static files
app.use(_express2.default.static('public'));

// render app for all other routes
app.get('*', _handlers.renderHandler);

app.listen(PORT, function () {
  return console.log('listening on port:', PORT);
});

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderHandler = undefined;

var _renderer = __webpack_require__(14);

var _renderer2 = _interopRequireDefault(_renderer);

var _serverStoreFactory = __webpack_require__(24);

var _reactRouterConfig = __webpack_require__(3);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var renderHandler = exports.renderHandler = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var store, componentsToRenderForRoute, promises;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = (0, _serverStoreFactory.storeFactory)(req);
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

  return function renderHandler(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(16);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// important: to protect against XSS attacks, use serialize to serialize the state
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

  return '\n    <html>\n      <head>\n        <link rel="stylesheet" type="text/css" href="styles.css">\n      </head>\n\n      <body>\n        <div id="root">' + content + '</div>\n\n        <script>\n          window.__PRELOADED_STATE__ = ' + (0, _serializeJavascript2.default)(store.getState()) + '\n        </script>\n\n        <script src="bundle.js"></script>\n      </body>\n    </html>\n  ';
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage() {
  return _react2.default.createElement(
    'main',
    { className: 'home' },
    _react2.default.createElement(
      'h5',
      null,
      'Hello world '
    ),
    _react2.default.createElement(
      'p',
      null,
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit eos id suscipit perspiciatis nobis officia, dignissimos doloremque non quasi sit excepturi, praesentium odio totam placeat ipsam pariatur dolor quaerat dolores.'
    )
  );
};

exports.default = HomePage;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
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

var _actionCreators = __webpack_require__(6);

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
      this.props.fetchUsers();
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(3);

var _actionCreators = __webpack_require__(6);

var _Header = __webpack_require__(21);

var _Header2 = _interopRequireDefault(_Header);

__webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var childRoutes = _ref.route.routes;
  return _react2.default.createElement(
    'main',
    null,
    _react2.default.createElement(_Header2.default, null),
    (0, _reactRouterConfig.renderRoutes)(childRoutes)
  );
};

App.preLoadProps = function (_ref2) {
  var dispatch = _ref2.dispatch;
  return dispatch((0, _actionCreators.fetchCurrentUserThunk)());
};

exports.default = App;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _reactRouterDom = __webpack_require__(1);

__webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var auth = _ref.auth;
  return _react2.default.createElement(
    'header',
    { className: 'main-header' },
    _react2.default.createElement(
      'section',
      null,
      'Dashboard (',
      auth ? 'Authenticated' : 'Not Authenticated',
      ')'
    ),
    _react2.default.createElement(
      'section',
      null,
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/about' },
        'About Users'
      ),
      _react2.default.createElement(
        _reactRouterDom.Link,
        { to: '/' },
        'Home'
      ),
      auth ? _react2.default.createElement(
        'a',
        { href: '/api/logout' },
        'Logout'
      ) : _react2.default.createElement(
        'a',
        { href: '/api/auth/google' },
        'Login'
      )
    )
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return { auth: state.auth };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeFactory = undefined;

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _redux = __webpack_require__(8);

var _index = __webpack_require__(26);

var _index2 = _interopRequireDefault(_index);

var _api = __webpack_require__(30);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createApiInstance = function createApiInstance(req) {
  var apiInstance = new _api.Api(_axios2.default, {
    baseURL: 'https://react-ssr-api.herokuapp.com/',
    headers: { cookie: req.get('cookie') || '' }
  });

  var interceptor = function interceptor(request) {
    console.log('Starting Request', request);
    return request;
  };

  apiInstance.intercept(interceptor);

  return apiInstance;
};

var storeFactory = exports.storeFactory = function storeFactory(req) {
  var middlewares = [_reduxThunk2.default.withExtraArgument(createApiInstance(req))];
  return (0, _redux.createStore)(_index2.default, _redux.applyMiddleware.apply(undefined, middlewares));
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(8);

var _users = __webpack_require__(27);

var _users2 = _interopRequireDefault(_users);

var _auth = __webpack_require__(28);

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  users: _users2.default,
  auth: _auth2.default
});

exports.default = rootReducer;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(4);

var actionTypes = _interopRequireWildcard(_actionTypes);

var _util = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionHandlers = _defineProperty({}, actionTypes.FETCH_USERS, function (oldState, action) {
  return action.meta.success ? action.payload.data : oldState;
});

var defaultValue = [];
exports.default = (0, _util.createReducer)(actionHandlers, defaultValue);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = __webpack_require__(4);

var actionTypes = _interopRequireWildcard(_actionTypes);

var _util = __webpack_require__(9);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var actionHandlers = _defineProperty({}, actionTypes.FETCH_CURRENT_USER, function (oldState, action) {
  return action.meta.success ? action.payload.data || false : oldState;
});

var defaultValue = null;

exports.default = (0, _util.createReducer)(actionHandlers, defaultValue);

/***/ }),
/* 29 */,
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Api = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _axios = __webpack_require__(7);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Api = exports.Api = function () {
  function Api(agent, options) {
    _classCallCheck(this, Api);

    this.http = agent.create(options);
  }

  _createClass(Api, [{
    key: 'intercept',
    value: function intercept(fn) {
      this.http.interceptors.request.use(fn);
    }
  }, {
    key: 'fetchCurrentUser',
    value: function fetchCurrentUser() {
      return this.http.get('/current_user');
    }
  }, {
    key: 'fetchUsers',
    value: function fetchUsers() {
      return this.http.get('/users');
    }
  }]);

  return Api;
}();

exports.default = new Api(_axios2.default, { baseURL: '/api' });

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ })
/******/ ]);