"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helperPluginUtils = require("@babel/helper-plugin-utils");

var _pluginSyntaxDynamicImport = _interopRequireDefault(require("@babel/plugin-syntax-dynamic-import"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = (0, _helperPluginUtils.declare)(function (_ref, _ref2) {
  var assertVersion = _ref.assertVersion,
      template = _ref.template,
      t = _ref.types;
  var _ref2$noInterop = _ref2.noInterop,
      noInterop = _ref2$noInterop === void 0 ? false : _ref2$noInterop;
  assertVersion(7);
  var buildImport = template('Promise.resolve().then(() => MODULE)');
  return {
    inherits: _pluginSyntaxDynamicImport["default"],
    visitor: {
      Import: function Import(path) {
        var importArguments = path.parentPath.node.arguments;

        var _importArguments = _slicedToArray(importArguments, 1),
            importPath = _importArguments[0];

        var isString = t.isStringLiteral(importPath) || t.isTemplateLiteral(importPath);

        if (isString) {
          t.removeComments(importPath);
        }

        var SOURCE = isString ? importArguments : t.templateLiteral([t.templateElement({
          raw: '',
          cooked: ''
        }), t.templateElement({
          raw: '',
          cooked: ''
        }, true)], importArguments);
        var requireCall = t.callExpression(t.identifier('require'), [].concat(SOURCE));
        var MODULE = noInterop === true ? requireCall : t.callExpression(this.addHelper('interopRequireWildcard'), [requireCall]);
        var newImport = buildImport({
          MODULE: MODULE
        });
        path.parentPath.replaceWith(newImport);
      }
    }
  };
});

exports["default"] = _default;