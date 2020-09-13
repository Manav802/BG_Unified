webpackHotUpdate("static\\development\\pages\\solutions.js",{

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
/* harmony import */ var _components_svg_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/svg/svg */ "./src/components/svg/svg.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pages\\solutions\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;












function OurSolutions() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
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
      lineNumber: 19,
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
      lineNumber: 20,
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
      lineNumber: 21,
      columnNumber: 13
    }
  }, "What we deliver"), __jsx(_pageBuilder_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    zIndex: "100",
    fontSize: ["44px", "64px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Our Solutions"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    zIndex: "100",
    fontSize: "xl",
    mt: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "We cover 90% of the technology domains.")), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, __jsx(_pageBuilder_Row__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 12
    }
  }, Object.values(_database_services__WEBPACK_IMPORTED_MODULE_2__["default"]).filter(service => service.category === "IT Infrastructural Services").map(service => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    my: 5,
    px: 5,
    width: "50%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    size: "160px",
    padding: "56px",
    rounded: 8,
    bg: service.color,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx(_components_svg_svg__WEBPACK_IMPORTED_MODULE_10__["default"], {
    src: service.icon,
    size: "48px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    ml: 4,
    py: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    size: "lg",
    fontFamily: "Nexa Bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, service.title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    mt: 2,
    overflow: "hidden",
    height: "72px",
    style: {
      textOverflow: "ellipsis"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, service.description)))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc29sdXRpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJPdXJTb2x1dGlvbnMiLCJtaXhCbGVuZE1vZGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb2x1dGlvbnMiLCJmaWx0ZXIiLCJzZXJ2aWNlIiwiY2F0ZWdvcnkiLCJtYXAiLCJjb2xvciIsImljb24iLCJ0aXRsZSIsInRleHRPdmVyZmxvdyIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXVCO0FBQ25CLFNBQ0UsbUVBQ0ksTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixDQURKLEVBSUksTUFBQyw0REFBRDtBQUFTLFlBQVEsRUFBQyxVQUFsQjtBQUE2QixhQUFTLEVBQUMsUUFBdkM7QUFBZ0QsTUFBRSxFQUFFLENBQUMsVUFBRCxFQUFhLFdBQWIsQ0FBcEQ7QUFBK0UsTUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBbkY7QUFBNkYsTUFBRSxFQUFFLENBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQU8sVUFBTSxFQUFDLE1BQWQ7QUFBcUIsTUFBRSxFQUFDLFFBQXhCO0FBQWlDLFNBQUssRUFBRTtBQUFDQyxrQkFBWSxFQUFDO0FBQWQsS0FBeEM7QUFBaUUsUUFBSSxFQUFDLE9BQXRFO0FBQThFLFNBQUssRUFBQyxNQUFwRjtBQUEyRixhQUFTLEVBQUMsT0FBckc7QUFBNkcsUUFBSSxFQUFFLENBQW5IO0FBQXNILFlBQVEsRUFBQyxVQUEvSDtBQUEwSSxPQUFHLEVBQUUsQ0FBL0k7QUFBa0osT0FBRyxFQUFDLDRDQUF0SjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHVEQUFEO0FBQVMsVUFBTSxFQUFDLEtBQWhCO0FBQXNCLFFBQUksRUFBQyxJQUEzQjtBQUFnQyxpQkFBYSxFQUFFLEdBQS9DO0FBQW9ELGFBQVMsRUFBQyxRQUE5RDtBQUF1RSxTQUFLLEVBQUMsYUFBN0U7QUFBMkYsTUFBRSxFQUFFLENBQS9GO0FBQWtHLGlCQUFhLEVBQUMsV0FBaEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixFQUdFLE1BQUMsMERBQUQ7QUFBTyxVQUFNLEVBQUMsS0FBZDtBQUFvQixZQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVEsTUFBUixDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUhGLEVBSUUsTUFBQyxvREFBRDtBQUFNLFVBQU0sRUFBQyxLQUFiO0FBQW1CLFlBQVEsRUFBQyxJQUE1QjtBQUFpQyxNQUFFLEVBQUUsQ0FBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FKRixDQUpKLEVBVUUsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csTUFBQyx3REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0VDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQywwREFBZCxFQUF5QkMsTUFBekIsQ0FBZ0NDLE9BQU8sSUFBSUEsT0FBTyxDQUFDQyxRQUFSLEtBQXFCLDZCQUFoRSxFQUErRkMsR0FBL0YsQ0FBbUdGLE9BQU8sSUFDdkcsTUFBQyxvREFBRDtBQUFNLE1BQUUsRUFBRSxDQUFWO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQW9CLFNBQUssRUFBQyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUFLLFFBQUksRUFBQyxPQUFWO0FBQWtCLFdBQU8sRUFBQyxNQUExQjtBQUFpQyxXQUFPLEVBQUUsQ0FBMUM7QUFBNkMsTUFBRSxFQUFFQSxPQUFPLENBQUNHLEtBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDREQUFEO0FBQUssT0FBRyxFQUFFSCxPQUFPLENBQUNJLElBQWxCO0FBQXdCLFFBQUksRUFBQyxNQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FESixFQUlJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFTLFFBQUksRUFBQyxJQUFkO0FBQW1CLGNBQVUsRUFBQyxXQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTJDSixPQUFPLENBQUNLLEtBQW5ELENBREosRUFFSSxNQUFDLG9EQUFEO0FBQU0sTUFBRSxFQUFFLENBQVY7QUFBYSxZQUFRLEVBQUMsUUFBdEI7QUFBK0IsVUFBTSxFQUFDLE1BQXRDO0FBQTZDLFNBQUssRUFBRTtBQUFDQyxrQkFBWSxFQUFDO0FBQWQsS0FBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnRk4sT0FBTyxDQUFDTyxXQUF4RixDQUZKLENBSkosQ0FESCxDQURGLENBREgsQ0FWRixDQURGO0FBNEJIOztLQTdCUWIsWTtBQStCTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNvbHV0aW9ucy5qcy5lMzRkODc4ODJlNjY0ZmI3ZjdiNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1mbGlja2l0eS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHNvbHV0aW9ucyBmcm9tIFwiLi4vLi4vZGF0YWJhc2Uvc2VydmljZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi8uLi9wYWdlQnVpbGRlci9TZWN0aW9uXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vcGFnZUJ1aWxkZXIvVGl0bGVcIjtcclxuaW1wb3J0IHsgSGVhZGluZywgVGV4dCwgQm94LCBJbnB1dEdyb3VwLCBJbnB1dExlZnRFbGVtZW50LCBCdXR0b24sIEljb24sIElucHV0LCBJbWFnZSwgQXZhdGFyLCBCYWRnZSwgRmxleCwgR3JpZCwgTWVudUxpc3QsIE1lbnUsIE1lbnVCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NlcnZpY2VcIjtcclxuaW1wb3J0IFJvdyBmcm9tIFwiLi4vLi4vcGFnZUJ1aWxkZXIvUm93XCI7XHJcbmltcG9ydCBTVkcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvc3ZnL3N2Z1wiO1xyXG5cclxuZnVuY3Rpb24gT3VyU29sdXRpb25zKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5PdXIgU29sdXRpb25zPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxTZWN0aW9uIHBvc2l0aW9uPVwicmVsYXRpdmVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBiZz17W1wiZ3JheS4yMDBcIiwgXCIjZmZmZmZmMDBcIl19IHB5PXtbMTYsIDMyXX0gbXk9ezB9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgekluZGV4PVwiLTEwMFwiIG10PVwiLTEyOHB4XCIgc3R5bGU9e3ttaXhCbGVuZE1vZGU6XCJkYXJrZW5cIn19IG1pbkg9XCI0NDhweFwiIHdpZHRoPVwiMTAwJVwiIG9iamVjdEZpdD1cImNvdmVyXCIgbGVmdD17MH0gcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD17MH0gc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZG90c19jaXJjbGUuanBnXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgekluZGV4PVwiMTAwXCIgc2l6ZT1cInhzXCIgbGV0dGVyU3BhY2luZz17MS44fSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInByaW1hcnkuNTAwXCIgbWI9ezR9IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5XaGF0IHdlIGRlbGl2ZXI8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUaXRsZSB6SW5kZXg9XCIxMDBcIiBmb250U2l6ZT17W1wiNDRweFwiLFwiNjRweFwiXX0+T3VyIFNvbHV0aW9uczwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxUZXh0IHpJbmRleD1cIjEwMFwiIGZvbnRTaXplPVwieGxcIiBtdD17Mn0+V2UgY292ZXIgOTAlIG9mIHRoZSB0ZWNobm9sb2d5IGRvbWFpbnMuPC9UZXh0PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICA8Um93PlxyXG4gICAgICAgICAgICB7T2JqZWN0LnZhbHVlcyhzb2x1dGlvbnMpLmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2UuY2F0ZWdvcnkgPT09IFwiSVQgSW5mcmFzdHJ1Y3R1cmFsIFNlcnZpY2VzXCIpLm1hcChzZXJ2aWNlID0+IChcclxuICAgICAgICAgICAgICAgIDxGbGV4IG15PXs1fSBweD17NX0gd2lkdGg9XCI1MCVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Qm94IHNpemU9XCIxNjBweFwiIHBhZGRpbmc9XCI1NnB4XCIgcm91bmRlZD17OH0gYmc9e3NlcnZpY2UuY29sb3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U1ZHIHNyYz17c2VydmljZS5pY29ufSBzaXplPVwiNDhweFwiPjwvU1ZHPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCb3ggbWw9ezR9IHB5PXs0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cImxnXCIgZm9udEZhbWlseT1cIk5leGEgQm9sZFwiPntzZXJ2aWNlLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXQ9ezJ9IG92ZXJmbG93PVwiaGlkZGVuXCIgaGVpZ2h0PVwiNzJweFwiIHN0eWxlPXt7dGV4dE92ZXJmbG93OlwiZWxsaXBzaXNcIn19PntzZXJ2aWNlLmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvUm93PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJTb2x1dGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=