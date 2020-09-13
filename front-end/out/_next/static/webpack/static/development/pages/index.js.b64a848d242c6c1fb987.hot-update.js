webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/footer/Conclusion.jsx":
/*!**********************************************!*\
  !*** ./src/components/footer/Conclusion.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pageBuilder_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pageBuilder/Section */ "./src/pageBuilder/Section.jsx");
/* harmony import */ var _pageBuilder_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pageBuilder/Container */ "./src/pageBuilder/Container.jsx");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\components\\footer\\Conclusion.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;







function Conclusion(_ref) {
  let {
    align = "left",
    title = "Let's get IT done.",
    description,
    explore = true,
    contact = false
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["align", "title", "description", "explore", "contact"]);

  return __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_3___default.a, {
    duration: 300,
    cascade: true,
    distance: "5%",
    left: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 9
    }
  }, __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    direction: "column",
    align: align,
    py: 12,
    px: [8, 16, 24],
    rounded: 8,
    overflow: "hidden",
    bg: "dark.500",
    pos: "relative",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Image"], {
    height: "340px",
    zIndex: "0",
    position: "absolute",
    right: 0,
    top: "-10%",
    src: "/assets/images/vectors/ic_chip_neon.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
    zIndex: "100",
    mx: 2,
    size: "xl",
    textAlign: align,
    fontFamily: "Nexa Bold",
    color: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, title), description && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
    zIndex: "100",
    color: "white",
    mt: 3,
    fontSize: "xl",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 33
    }
  }, description), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, explore && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/solutions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "primary-btn",
    variant: "solid",
    variantColor: "primary",
    mx: 2,
    mt: 6,
    size: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 53
    }
  }, "Explore Now")), contact && __jsx(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    mx: 2,
    mt: 6,
    size: "lg",
    bg: explore ? "#fff0" : "primary.500",
    color: "white",
    borderWidth: explore ? 1 : 0,
    _hover: {
      bg: "white",
      color: "dark.500"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 51
    }
  }, "Contact Sales"))))));
}

_c = Conclusion;
/* harmony default export */ __webpack_exports__["default"] = (Conclusion);

var _c;

$RefreshReg$(_c, "Conclusion");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvQ29uY2x1c2lvbi5qc3giXSwibmFtZXMiOlsiQ29uY2x1c2lvbiIsImFsaWduIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImV4cGxvcmUiLCJjb250YWN0IiwicHJvcHMiLCJiZyIsImNvbG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxVQUFULE9BQW9IO0FBQUEsTUFBaEc7QUFBQ0MsU0FBSyxHQUFDLE1BQVA7QUFBZUMsU0FBSyxHQUFDLG9CQUFyQjtBQUEyQ0MsZUFBM0M7QUFBd0RDLFdBQU8sR0FBQyxJQUFoRTtBQUFzRUMsV0FBTyxHQUFDO0FBQTlFLEdBQWdHO0FBQUEsTUFBUkMsS0FBUTs7QUFDaEgsU0FDSSxNQUFDLHdEQUFEO0FBQU0sWUFBUSxFQUFFLEdBQWhCO0FBQXFCLFdBQU8sTUFBNUI7QUFBNkIsWUFBUSxFQUFFLElBQXZDO0FBQTZDLFFBQUksTUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsNERBQUQseUZBQWFBLEtBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNJLE1BQUMsb0RBQUQ7QUFBTSxhQUFTLEVBQUMsUUFBaEI7QUFBeUIsU0FBSyxFQUFFTCxLQUFoQztBQUF1QyxNQUFFLEVBQUUsRUFBM0M7QUFBK0MsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFHLEVBQUgsRUFBTSxFQUFOLENBQW5EO0FBQThELFdBQU8sRUFBRSxDQUF2RTtBQUEwRSxZQUFRLEVBQUMsUUFBbkY7QUFBNEYsTUFBRSxFQUFDLFVBQS9GO0FBQTBHLE9BQUcsRUFBQyxVQUE5RztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFPLFVBQU0sRUFBQyxPQUFkO0FBQXNCLFVBQU0sRUFBQyxHQUE3QjtBQUFpQyxZQUFRLEVBQUMsVUFBMUM7QUFBcUQsU0FBSyxFQUFFLENBQTVEO0FBQStELE9BQUcsRUFBQyxNQUFuRTtBQUEwRSxPQUFHLEVBQUMseUNBQTlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsdURBQUQ7QUFBUyxVQUFNLEVBQUMsS0FBaEI7QUFBc0IsTUFBRSxFQUFFLENBQTFCO0FBQTZCLFFBQUksRUFBQyxJQUFsQztBQUF1QyxhQUFTLEVBQUVBLEtBQWxEO0FBQXlELGNBQVUsRUFBQyxXQUFwRTtBQUFnRixTQUFLLEVBQUMsT0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErRkMsS0FBL0YsQ0FGRixFQUdHQyxXQUFXLElBQUksTUFBQyxvREFBRDtBQUFNLFVBQU0sRUFBQyxLQUFiO0FBQW1CLFNBQUssRUFBQyxPQUF6QjtBQUFpQyxNQUFFLEVBQUUsQ0FBckM7QUFBd0MsWUFBUSxFQUFDLElBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBdURBLFdBQXZELENBSGxCLEVBSUUsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NDLE9BQU8sSUFBSSxNQUFDLGdEQUFEO0FBQU0sUUFBSSxFQUFDLFlBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QixNQUFDLHNEQUFEO0FBQVEsYUFBUyxFQUFDLGFBQWxCO0FBQWdDLFdBQU8sRUFBQyxPQUF4QztBQUFnRCxnQkFBWSxFQUFDLFNBQTdEO0FBQXVFLE1BQUUsRUFBRSxDQUEzRTtBQUE4RSxNQUFFLEVBQUUsQ0FBbEY7QUFBcUYsUUFBSSxFQUFDLElBQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXhCLENBRFosRUFFQ0MsT0FBTyxJQUFJLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNCLE1BQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUUsQ0FBWjtBQUFlLE1BQUUsRUFBRSxDQUFuQjtBQUFzQixRQUFJLEVBQUMsSUFBM0I7QUFBZ0MsTUFBRSxFQUFFRCxPQUFPLEdBQUcsT0FBSCxHQUFhLGFBQXhEO0FBQXVFLFNBQUssRUFBQyxPQUE3RTtBQUFxRixlQUFXLEVBQUVBLE9BQU8sR0FBRyxDQUFILEdBQU8sQ0FBaEg7QUFBbUgsVUFBTSxFQUFFO0FBQUNHLFFBQUUsRUFBQyxPQUFKO0FBQWFDLFdBQUssRUFBQztBQUFuQixLQUEzSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUF0QixDQUZaLENBSkYsQ0FESixDQUZGLENBREo7QUFrQkg7O0tBbkJRUixVO0FBcUJNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjY0YTg0OGQyNDJjNmMxZmI5ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJyZWFjdC1yZXZlYWwvRmFkZVwiXHJcbmltcG9ydCBTZWN0aW9uIGZyb20gJy4uLy4uL3BhZ2VCdWlsZGVyL1NlY3Rpb24nO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL3BhZ2VCdWlsZGVyL0NvbnRhaW5lcic7XHJcbmltcG9ydCB7SW1hZ2UsIEJ1dHRvbiwgSGVhZGluZywgQm94LCBGbGV4LCBUZXh0fSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5cclxuZnVuY3Rpb24gQ29uY2x1c2lvbih7YWxpZ249XCJsZWZ0XCIsIHRpdGxlPVwiTGV0J3MgZ2V0IElUIGRvbmUuXCIsIGRlc2NyaXB0aW9uLCBleHBsb3JlPXRydWUsIGNvbnRhY3Q9ZmFsc2UsIC4uLnByb3BzfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmFkZSBkdXJhdGlvbj17MzAwfSBjYXNjYWRlIGRpc3RhbmNlPXtcIjUlXCJ9IGxlZnQ+XHJcbiAgICAgICAgICB7LyogaGVrICovfVxyXG4gICAgICAgICAgPFNlY3Rpb24gey4uLnByb3BzfT5cclxuICAgICAgICAgICAgICA8RmxleCBkaXJlY3Rpb249XCJjb2x1bW5cIiBhbGlnbj17YWxpZ259IHB5PXsxMn0gcHg9e1s4LDE2LDI0XX0gcm91bmRlZD17OH0gb3ZlcmZsb3c9XCJoaWRkZW5cIiBiZz1cImRhcmsuNTAwXCIgcG9zPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBoZWlnaHQ9XCIzNDBweFwiIHpJbmRleD1cIjBcIiBwb3NpdGlvbj1cImFic29sdXRlXCIgcmlnaHQ9ezB9IHRvcD1cIi0xMCVcIiBzcmM9XCIvYXNzZXRzL2ltYWdlcy92ZWN0b3JzL2ljX2NoaXBfbmVvbi5wbmdcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgekluZGV4PVwiMTAwXCIgbXg9ezJ9IHNpemU9XCJ4bFwiIHRleHRBbGlnbj17YWxpZ259IGZvbnRGYW1pbHk9XCJOZXhhIEJvbGRcIiBjb2xvcj1cIndoaXRlXCI+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8VGV4dCB6SW5kZXg9XCIxMDBcIiBjb2xvcj1cIndoaXRlXCIgbXQ9ezN9IGZvbnRTaXplPVwieGxcIj57ZGVzY3JpcHRpb259PC9UZXh0Pn1cclxuICAgICAgICAgICAgICAgIDxGbGV4PlxyXG4gICAgICAgICAgICAgICAge2V4cGxvcmUgJiYgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnNcIj48QnV0dG9uIGNsYXNzTmFtZT1cInByaW1hcnktYnRuXCIgdmFyaWFudD1cInNvbGlkXCIgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiIG14PXsyfSBtdD17Nn0gc2l6ZT1cImxnXCIgPkV4cGxvcmUgTm93PC9CdXR0b24+PC9MaW5rPn1cclxuICAgICAgICAgICAgICAgIHtjb250YWN0ICYmIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxCdXR0b24gbXg9ezJ9IG10PXs2fSBzaXplPVwibGdcIiBiZz17ZXhwbG9yZSA/IFwiI2ZmZjBcIiA6IFwicHJpbWFyeS41MDBcIn0gY29sb3I9XCJ3aGl0ZVwiIGJvcmRlcldpZHRoPXtleHBsb3JlID8gMSA6IDB9IF9ob3Zlcj17e2JnOlwid2hpdGVcIiwgY29sb3I6XCJkYXJrLjUwMFwifX0gPkNvbnRhY3QgU2FsZXM8L0J1dHRvbj48L0xpbms+fVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8L0ZhZGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25jbHVzaW9uOyJdLCJzb3VyY2VSb290IjoiIn0=