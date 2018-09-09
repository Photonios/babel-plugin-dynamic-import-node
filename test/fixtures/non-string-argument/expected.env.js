"use strict";

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat({
    'answer': 42
  })));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat(['foo', 'bar'])));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat(42)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat(void 0)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat(undefined)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat(null)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat(true)));
});
Promise.resolve().then(function () {
  return _interopRequireWildcard(require("".concat(Symbol())));
});
