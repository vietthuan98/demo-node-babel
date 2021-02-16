"use strict";

var _express = _interopRequireDefault(require("express"));

var _message = require("./modules/message");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.get("/", _message.showMessage);
app.listen(port, function () {
  console.log("Running on http://localhost:".concat(port));
});