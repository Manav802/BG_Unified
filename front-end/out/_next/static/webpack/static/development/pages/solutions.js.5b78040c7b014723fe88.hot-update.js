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
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pages\\solutions\\index.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










function OurSolutions() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
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
      lineNumber: 17,
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
      lineNumber: 18,
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
      lineNumber: 19,
      columnNumber: 13
    }
  }, "What we deliver"), __jsx(_pageBuilder_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    zIndex: "100",
    fontSize: ["44px", "64px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Our Solutions"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    zIndex: "100",
    fontSize: "xl",
    mt: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "We cover 90% of the technology domains.")), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(react_flickity_component__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, Object.values(_database_services__WEBPACK_IMPORTED_MODULE_2__["default"]).filter(service => service.category === "Collaborative Services").map(service => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    height: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, __jsx(_components_cards_Service__WEBPACK_IMPORTED_MODULE_8__["default"], {
    service: service.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 19
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvc29sdXRpb25zL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJPdXJTb2x1dGlvbnMiLCJtaXhCbGVuZE1vZGUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJzb2x1dGlvbnMiLCJmaWx0ZXIiLCJzZXJ2aWNlIiwiY2F0ZWdvcnkiLCJtYXAiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF1QjtBQUNuQixTQUNFLG1FQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FESixFQUlJLE1BQUMsNERBQUQ7QUFBUyxZQUFRLEVBQUMsVUFBbEI7QUFBNkIsYUFBUyxFQUFDLFFBQXZDO0FBQWdELE1BQUUsRUFBRSxDQUFDLFVBQUQsRUFBYSxXQUFiLENBQXBEO0FBQStFLE1BQUUsRUFBRSxDQUFDLEVBQUQsRUFBSyxFQUFMLENBQW5GO0FBQTZGLE1BQUUsRUFBRSxDQUFqRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUFPLFVBQU0sRUFBQyxNQUFkO0FBQXFCLE1BQUUsRUFBQyxRQUF4QjtBQUFpQyxTQUFLLEVBQUU7QUFBQ0Msa0JBQVksRUFBQztBQUFkLEtBQXhDO0FBQWlFLFFBQUksRUFBQyxPQUF0RTtBQUE4RSxTQUFLLEVBQUMsTUFBcEY7QUFBMkYsYUFBUyxFQUFDLE9BQXJHO0FBQTZHLFFBQUksRUFBRSxDQUFuSDtBQUFzSCxZQUFRLEVBQUMsVUFBL0g7QUFBMEksT0FBRyxFQUFFLENBQS9JO0FBQWtKLE9BQUcsRUFBQyw0Q0FBdEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyx1REFBRDtBQUFTLFVBQU0sRUFBQyxLQUFoQjtBQUFzQixRQUFJLEVBQUMsSUFBM0I7QUFBZ0MsaUJBQWEsRUFBRSxHQUEvQztBQUFvRCxhQUFTLEVBQUMsUUFBOUQ7QUFBdUUsU0FBSyxFQUFDLGFBQTdFO0FBQTJGLE1BQUUsRUFBRSxDQUEvRjtBQUFrRyxpQkFBYSxFQUFDLFdBQWhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsRUFHRSxNQUFDLDBEQUFEO0FBQU8sVUFBTSxFQUFDLEtBQWQ7QUFBb0IsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFRLE1BQVIsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFLE1BQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsS0FBYjtBQUFtQixZQUFRLEVBQUMsSUFBNUI7QUFBaUMsTUFBRSxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBSkYsQ0FKSixFQVVFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsMERBQWQsRUFBeUJDLE1BQXpCLENBQWdDQyxPQUFPLElBQUlBLE9BQU8sQ0FBQ0MsUUFBUixLQUFxQix3QkFBaEUsRUFBMEZDLEdBQTFGLENBQThGRixPQUFPLElBQ2xHLE1BQUMsbURBQUQ7QUFBSyxVQUFNLEVBQUMsTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFTLFdBQU8sRUFBRUEsT0FBTyxDQUFDRyxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FESCxDQURELENBREosQ0FWRixDQURGO0FBc0JIOztLQXZCUVQsWTtBQXlCTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNvbHV0aW9ucy5qcy41Yjc4MDQwYzdiMDE0NzIzZmU4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1mbGlja2l0eS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHNvbHV0aW9ucyBmcm9tIFwiLi4vLi4vZGF0YWJhc2Uvc2VydmljZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi8uLi9wYWdlQnVpbGRlci9TZWN0aW9uXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vLi4vcGFnZUJ1aWxkZXIvVGl0bGVcIjtcclxuaW1wb3J0IHsgSGVhZGluZywgVGV4dCwgQm94LCBJbnB1dEdyb3VwLCBJbnB1dExlZnRFbGVtZW50LCBCdXR0b24sIEljb24sIElucHV0LCBJbWFnZSwgQXZhdGFyLCBCYWRnZSwgRmxleCwgR3JpZCwgTWVudUxpc3QsIE1lbnUsIE1lbnVCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1NlcnZpY2VcIjtcclxuXHJcbmZ1bmN0aW9uIE91clNvbHV0aW9ucygpe1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+T3VyIFNvbHV0aW9uczwvdGl0bGU+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8U2VjdGlvbiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgYmc9e1tcImdyYXkuMjAwXCIsIFwiI2ZmZmZmZjAwXCJdfSBweT17WzE2LCAzMl19IG15PXswfT5cclxuICAgICAgICAgICAgPEltYWdlIHpJbmRleD1cIi0xMDBcIiBtdD1cIi0xMjhweFwiIHN0eWxlPXt7bWl4QmxlbmRNb2RlOlwiZGFya2VuXCJ9fSBtaW5IPVwiNDQ4cHhcIiB3aWR0aD1cIjEwMCVcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIGxlZnQ9ezB9IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9ezB9IHNyYz1cIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RvdHNfY2lyY2xlLmpwZ1wiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHpJbmRleD1cIjEwMFwiIHNpemU9XCJ4c1wiIGxldHRlclNwYWNpbmc9ezEuOH0gdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJwcmltYXJ5LjUwMFwiIG1iPXs0fSB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+V2hhdCB3ZSBkZWxpdmVyPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGl0bGUgekluZGV4PVwiMTAwXCIgZm9udFNpemU9e1tcIjQ0cHhcIixcIjY0cHhcIl19Pk91ciBTb2x1dGlvbnM8L1RpdGxlPlxyXG4gICAgICAgICAgICA8VGV4dCB6SW5kZXg9XCIxMDBcIiBmb250U2l6ZT1cInhsXCIgbXQ9ezJ9PldlIGNvdmVyIDkwJSBvZiB0aGUgdGVjaG5vbG9neSBkb21haW5zLjwvVGV4dD5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxTbGlkZXI+XHJcbiAgICAgICAgICAgIHtPYmplY3QudmFsdWVzKHNvbHV0aW9ucykuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZS5jYXRlZ29yeSA9PT0gXCJDb2xsYWJvcmF0aXZlIFNlcnZpY2VzXCIpLm1hcChzZXJ2aWNlID0+IChcclxuICAgICAgICAgICAgICAgIDxCb3ggaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICAgICAgICAgICAgICA8U2VydmljZSBzZXJ2aWNlPXtzZXJ2aWNlLnRpdGxlfT48L1NlcnZpY2U+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJTb2x1dGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=