"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _errorhandler = _interopRequireDefault(require("errorhandler"));

var _multer = _interopRequireDefault(require("multer"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _connectFlash = _interopRequireDefault(require("connect-flash"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _passport = _interopRequireDefault(require("passport"));

require("./config/passport");

var _index = _interopRequireDefault(require("./routes/index.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var helpers = _interopRequireWildcard(require("./helpers"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = (0, _express["default"])(); // Settings

app.set("views", _path["default"].join(__dirname, "./views"));
app.engine(".hbs", (0, _expressHandlebars["default"])({
  defaultLayout: "home",
  layoutsDir: _path["default"].join(app.get("views"), "layouts"),
  partialsDir: _path["default"].join(app.get("views"), "partials"),
  helpers: helpers,
  extname: ".hbs"
}));
app.set("view engine", ".hbs"); // Uploads Settings

app.use((0, _multer["default"])({
  dest: "./uploads"
}).single("image")); // middlewares

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"].json());
app.use((0, _expressSession["default"])({
  secret: "somesecretkey",
  resave: true,
  saveUninitialized: true
}));
app.use((0, _connectFlash["default"])());
app.use(_passport["default"].initialize());
app.use(_passport["default"].session()); // Global Variables

app.use(function (req, res, next) {
  // the curren user session
  app.locals.user = req.user || null; // succes messages by flash

  app.locals.success = req.flash("success"); // passport authentication erros

  app.locals.error = req.flash("error");
  next();
}); // Routes

app.use(_index["default"]);
app.use(_auth["default"]); // The Public directory for static files

app.use("/public", _express["default"]["static"](_path["default"].join(__dirname, "./public"))); // The Uploads directory

app.use("/uploads", _express["default"]["static"]("./uploads")); // Error Handling

if ("development" === app.get("env")) {
  app.use((0, _errorhandler["default"])());
}

var _default = app;
exports["default"] = _default;