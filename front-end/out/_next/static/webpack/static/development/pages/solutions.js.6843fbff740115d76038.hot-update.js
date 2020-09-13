webpackHotUpdate("static\\development\\pages\\solutions.js",{

/***/ "./src/pageBuilder/Row.jsx":
/*!*********************************!*\
  !*** ./src/pageBuilder/Row.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");


var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\Row.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



function Row(_ref) {
  let {
    justify,
    flexWrap = "wrap",
    rowDistance
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["justify", "flexWrap", "rowDistance"]);

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Flex"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    display: "inline-flex",
    w: "100%",
    mt: rowDistance,
    flexWrap: flexWrap,
    direction: props.direction,
    justify: justify || "center"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }));
}

_c = Row;
/* harmony default export */ __webpack_exports__["default"] = (Row);

var _c;

$RefreshReg$(_c, "Row");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pages/solutions/index.jsx":
/*!***************************************!*\
  !*** ./src/pages/solutions/index.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-flickity-component */ "./node_modules/react-flickity-component/lib/index.js");
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_flickity_component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../database/services */ "./src/database/services.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pageBuilder/Section */ "./src/pageBuilder/Section.jsx");
/* harmony import */ var _pageBuilder_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pageBuilder/Title */ "./src/pageBuilder/Title.jsx");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _components_cards_Service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/cards/Service */ "./src/components/cards/Service.jsx");
/* harmony import */ var _pageBuilder_Row__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pageBuilder/Row */ "./src/pageBuilder/Row.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pages\\solutions\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;











function OurSolutions() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, "Our Solutions")), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "relative",
    textAlign: "center",
    bg: ["gray.200", "#ffffff00"],
    py: [16, 32],
    my: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    zIndex: "-100",
    mt: "-128px",
    style: {
      mixBlendMode: "darken"
    },
    minH: "448px",
    width: "100%",
    objectFit: "cover",
    left: 0,
    position: "absolute",
    top: 0,
    src: "/assets/images/backgrounds/dots_circle.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    zIndex: "100",
    size: "xs",
    letterSpacing: 1.8,
    textAlign: "center",
    color: "primary.500",
    mb: 4,
    textTransform: "uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "What we deliver"), __jsx(_pageBuilder_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    zIndex: "100",
    fontSize: ["44px", "64px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Our Solutions"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    zIndex: "100",
    fontSize: "xl",
    mt: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "We cover 90% of the technology domains.")), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(_pageBuilder_Row__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 12
    }
  }, Object.values(_database_services__WEBPACK_IMPORTED_MODULE_2__["default"]).filter(service => service.category === "IT Infrastructural Services").map(service => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    my: 5,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    size: "160px",
    rounded: 8,
    bg: service.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }))))));
}

_c = OurSolutions;
/* harmony default export */ __webpack_exports__["default"] = (OurSolutions);

var _c;

$RefreshReg$(_c, "OurSolutions");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvUm93LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc29sdXRpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJSb3ciLCJqdXN0aWZ5IiwiZmxleFdyYXAiLCJyb3dEaXN0YW5jZSIsInByb3BzIiwiZGlyZWN0aW9uIiwiT3VyU29sdXRpb25zIiwibWl4QmxlbmRNb2RlIiwiT2JqZWN0IiwidmFsdWVzIiwic29sdXRpb25zIiwiZmlsdGVyIiwic2VydmljZSIsImNhdGVnb3J5IiwibWFwIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxHQUFULE9BQW9FO0FBQUEsTUFBdkQ7QUFBRUMsV0FBRjtBQUFXQyxZQUFRLEdBQUcsTUFBdEI7QUFBOEJDO0FBQTlCLEdBQXVEO0FBQUEsTUFBVEMsS0FBUzs7QUFDaEUsU0FDSSxNQUFDLG9EQUFEO0FBQU0sV0FBTyxFQUFDLGFBQWQ7QUFBNEIsS0FBQyxFQUFDLE1BQTlCO0FBQXFDLE1BQUUsRUFBRUQsV0FBekM7QUFBc0QsWUFBUSxFQUFFRCxRQUFoRTtBQUEwRSxhQUFTLEVBQUVFLEtBQUssQ0FBQ0MsU0FBM0Y7QUFBc0csV0FBTyxFQUFFSixPQUFPLElBQUk7QUFBMUgsS0FBd0lHLEtBQXhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FESjtBQUtIOztLQU5RSixHO0FBUU1BLGtFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTTSxZQUFULEdBQXVCO0FBQ25CLFNBQ0UsbUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURKLEVBSUksTUFBQyw0REFBRDtBQUFTLFlBQVEsRUFBQyxVQUFsQjtBQUE2QixhQUFTLEVBQUMsUUFBdkM7QUFBZ0QsTUFBRSxFQUFFLENBQUMsVUFBRCxFQUFhLFdBQWIsQ0FBcEQ7QUFBK0UsTUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBbkY7QUFBNkYsTUFBRSxFQUFFLENBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQU8sVUFBTSxFQUFDLE1BQWQ7QUFBcUIsTUFBRSxFQUFDLFFBQXhCO0FBQWlDLFNBQUssRUFBRTtBQUFDQyxrQkFBWSxFQUFDO0FBQWQsS0FBeEM7QUFBaUUsUUFBSSxFQUFDLE9BQXRFO0FBQThFLFNBQUssRUFBQyxNQUFwRjtBQUEyRixhQUFTLEVBQUMsT0FBckc7QUFBNkcsUUFBSSxFQUFFLENBQW5IO0FBQXNILFlBQVEsRUFBQyxVQUEvSDtBQUEwSSxPQUFHLEVBQUUsQ0FBL0k7QUFBa0osT0FBRyxFQUFDLDRDQUF0SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVMsVUFBTSxFQUFDLEtBQWhCO0FBQXNCLFFBQUksRUFBQyxJQUEzQjtBQUFnQyxpQkFBYSxFQUFFLEdBQS9DO0FBQW9ELGFBQVMsRUFBQyxRQUE5RDtBQUF1RSxTQUFLLEVBQUMsYUFBN0U7QUFBMkYsTUFBRSxFQUFFLENBQS9GO0FBQWtHLGlCQUFhLEVBQUMsV0FBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixFQUdFLE1BQUMsMERBQUQ7QUFBTyxVQUFNLEVBQUMsS0FBZDtBQUFvQixZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVEsTUFBUixDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLEVBSUUsTUFBQyxvREFBRDtBQUFNLFVBQU0sRUFBQyxLQUFiO0FBQW1CLFlBQVEsRUFBQyxJQUE1QjtBQUFpQyxNQUFFLEVBQUUsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FKRixDQUpKLEVBVUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQywwREFBZCxFQUF5QkMsTUFBekIsQ0FBZ0NDLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxRQUFSLEtBQXFCLDZCQUFoRSxFQUErRkMsR0FBL0YsQ0FBbUdGLE9BQU8sSUFDdkcsTUFBQyxvREFBRDtBQUFNLE1BQUUsRUFBRSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQUssUUFBSSxFQUFDLE9BQVY7QUFBa0IsV0FBTyxFQUFFLENBQTNCO0FBQThCLE1BQUUsRUFBRUEsT0FBTyxDQUFDRyxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESCxDQURGLENBREgsQ0FWRixDQURGO0FBd0JIOztLQXpCUVQsWTtBQTJCTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNvbHV0aW9ucy5qcy42ODQzZmJmZjc0MDExNWQ3NjAzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRmxleCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XHJcblxyXG5mdW5jdGlvbiBSb3coeyBqdXN0aWZ5LCBmbGV4V3JhcCA9IFwid3JhcFwiLCByb3dEaXN0YW5jZSwgLi4ucHJvcHMgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmxleCBkaXNwbGF5PVwiaW5saW5lLWZsZXhcIiB3PVwiMTAwJVwiIG10PXtyb3dEaXN0YW5jZX0gZmxleFdyYXA9e2ZsZXhXcmFwfSBkaXJlY3Rpb249e3Byb3BzLmRpcmVjdGlvbn0ganVzdGlmeT17anVzdGlmeSB8fCBcImNlbnRlclwifSB7Li4ucHJvcHN9PlxyXG5cclxuICAgICAgICA8L0ZsZXg+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb3c7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1mbGlja2l0eS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHNvbHV0aW9ucyBmcm9tIFwiLi4vLi4vZGF0YWJhc2Uvc2VydmljZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi8uLi9wYWdlQnVpbGRlci9TZWN0aW9uXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vcGFnZUJ1aWxkZXIvVGl0bGVcIjtcclxuaW1wb3J0IHsgSGVhZGluZywgVGV4dCwgQm94LCBJbnB1dEdyb3VwLCBJbnB1dExlZnRFbGVtZW50LCBCdXR0b24sIEljb24sIElucHV0LCBJbWFnZSwgQXZhdGFyLCBCYWRnZSwgRmxleCwgR3JpZCwgTWVudUxpc3QsIE1lbnUsIE1lbnVCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NlcnZpY2VcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwiLi4vLi4vcGFnZUJ1aWxkZXIvUm93XCI7XHJcblxyXG5mdW5jdGlvbiBPdXJTb2x1dGlvbnMoKXtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPk91ciBTb2x1dGlvbnM8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPFNlY3Rpb24gcG9zaXRpb249XCJyZWxhdGl2ZVwiIHRleHRBbGlnbj1cImNlbnRlclwiIGJnPXtbXCJncmF5LjIwMFwiLCBcIiNmZmZmZmYwMFwiXX0gcHk9e1sxNiwgMzJdfSBteT17MH0+XHJcbiAgICAgICAgICAgIDxJbWFnZSB6SW5kZXg9XCItMTAwXCIgbXQ9XCItMTI4cHhcIiBzdHlsZT17e21peEJsZW5kTW9kZTpcImRhcmtlblwifX0gbWluSD1cIjQ0OHB4XCIgd2lkdGg9XCIxMDAlXCIgb2JqZWN0Rml0PVwiY292ZXJcIiBsZWZ0PXswfSBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wPXswfSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kb3RzX2NpcmNsZS5qcGdcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICA8SGVhZGluZyB6SW5kZXg9XCIxMDBcIiBzaXplPVwieHNcIiBsZXR0ZXJTcGFjaW5nPXsxLjh9IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbG9yPVwicHJpbWFyeS41MDBcIiBtYj17NH0gdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPldoYXQgd2UgZGVsaXZlcjwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRpdGxlIHpJbmRleD1cIjEwMFwiIGZvbnRTaXplPXtbXCI0NHB4XCIsXCI2NHB4XCJdfT5PdXIgU29sdXRpb25zPC9UaXRsZT5cclxuICAgICAgICAgICAgPFRleHQgekluZGV4PVwiMTAwXCIgZm9udFNpemU9XCJ4bFwiIG10PXsyfT5XZSBjb3ZlciA5MCUgb2YgdGhlIHRlY2hub2xvZ3kgZG9tYWlucy48L1RleHQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIDxTZWN0aW9uPlxyXG4gICAgICAgICAgIDxSb3c+XHJcbiAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKHNvbHV0aW9ucykuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZS5jYXRlZ29yeSA9PT0gXCJJVCBJbmZyYXN0cnVjdHVyYWwgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEZsZXggbXk9ezV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc2l6ZT1cIjE2MHB4XCIgcm91bmRlZD17OH0gYmc9e3NlcnZpY2UuY29sb3J9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJTb2x1dGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=