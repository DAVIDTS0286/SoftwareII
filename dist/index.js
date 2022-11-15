"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _app = _interopRequireDefault(require("./app"));

var _config = require("./config");

require("./config/mongoose");

// database
// Starting the server
_app["default"].listen(_config.PORT);

console.log("Server on port", _app["default"].get("port"));