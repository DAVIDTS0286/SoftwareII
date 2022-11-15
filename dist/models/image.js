"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _path = _interopRequireDefault(require("path"));

var _mongooseLeanVirtuals = _interopRequireDefault(require("mongoose-lean-virtuals"));

var imageSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  // contact: {type: String, trim: true, required: true},
  filename: {
    type: String
  },
  views: {
    type: Number,
    "default": 0
  },
  likes: {
    type: Number,
    "default": 0
  },
  timestamp: {
    type: Date,
    "default": Date.now
  }
}, {
  versionKey: false,
  timestamps: true
});
imageSchema.plugin(_mongooseLeanVirtuals["default"]);
imageSchema.virtual("uniqueId").get(function () {
  return this.filename.replace(_path["default"].extname(this.filename), "");
});

var _default = (0, _mongoose.model)("Image", imageSchema);

exports["default"] = _default;