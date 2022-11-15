"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.index = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sidebar = _interopRequireDefault(require("../helpers/sidebar"));

var _models = require("../models");

var index = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var images, viewModel;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.Image.find().sort({
              timestamp: -1
            }).lean({
              virtuals: true
            });

          case 3:
            images = _context.sent;
            viewModel = {
              images: []
            };
            viewModel.images = images;
            _context.next = 8;
            return (0, _sidebar["default"])(viewModel);

          case 8:
            viewModel = _context.sent;
            res.render("index", viewModel);
            _context.next = 15;
            break;

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function index(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.index = index;