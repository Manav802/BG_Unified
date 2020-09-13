webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/Services/services.jsx":
/*!**********************************************!*\
  !*** ./src/components/Services/services.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _database_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database/services */ "./src/database/services.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\components\\Services\\services.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const servicesArray = Object.entries(_database_services__WEBPACK_IMPORTED_MODULE_3__["default"]);

function Services(props) {
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "d-flex flex-column footer-content ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: "8px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, "IT Infrastructural Services"), servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 76
    }
  }, service[1].title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: "8px",
    mt: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, "Network Services"), servicesArray.filter(service => service[1].category === "Network Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 76
    }
  }, service[1].title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: "8px",
    mt: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "Cyber Security Services"), servicesArray.filter(service => service[1].category === "Cyber Security Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 76
    }
  }, service[1].title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: "8px",
    mt: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, "Collaborative Services"), servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 76
    }
  }, service[1].title))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    mb: "8px",
    mt: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }, "Development Services"), servicesArray.filter(service => service[1].category === "Development Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 76
    }
  }, service[1].title)))));
}

_c = Services;
/* harmony default export */ __webpack_exports__["default"] = (Services);

var _c;

$RefreshReg$(_c, "Services");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlcy9zZXJ2aWNlcy5qc3giXSwibmFtZXMiOlsic2VydmljZXNBcnJheSIsIk9iamVjdCIsImVudHJpZXMiLCJzZXJ2aWNlcyIsIlNlcnZpY2VzIiwicHJvcHMiLCJmaWx0ZXIiLCJzZXJ2aWNlIiwiY2F0ZWdvcnkiLCJtYXAiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsYUFBYSxHQUFHQyxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsMERBQWYsQ0FBdEI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDdkIsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVFLE1BQUMsb0RBQUQ7QUFBTSxNQUFFLEVBQUUsS0FBVjtBQUFpQixZQUFRLEVBQUMsSUFBMUI7QUFBK0IsY0FBVSxFQUFDLEtBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBRkYsRUFJS0wsYUFBYSxDQUFDTSxNQUFkLENBQXFCQyxPQUFPLElBQUlBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0MsUUFBWCxLQUF3Qiw2QkFBeEQsRUFBdUZDLEdBQXZGLENBQTJGRixPQUFPLElBQ2pHLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsbUJBQVg7QUFBK0IsTUFBRSxFQUFFLGdCQUFnQkEsT0FBTyxDQUFDLENBQUQsQ0FBMUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErRDtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUJBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csS0FBaEMsQ0FBL0Qs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QUMsQ0FBRCxDQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStEO0FBQUcsYUFBUyxFQUFDLE1BQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFxQkEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxLQUFoQyxDQUEvRCxDQURELENBaENMLENBREYsQ0FERjtBQTBDRDs7S0EzQ1FOLFE7QUE2Q01BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLmVjOTg2ODIzNDdlZDI4YTQwYmE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgVGV4dCwgU3RhY2ssIEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIlxyXG5pbXBvcnQgc2VydmljZXMgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL3NlcnZpY2VzXCJcclxuY29uc3Qgc2VydmljZXNBcnJheSA9IE9iamVjdC5lbnRyaWVzKHNlcnZpY2VzKTtcclxuXHJcbmZ1bmN0aW9uIFNlcnZpY2VzKHByb3BzKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZvb3Rlci1jb250ZW50IFwiPlxyXG5cclxuICAgICAgICA8VGV4dCBtYj17XCI4cHhcIn0gZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCI3MDBcIj5JVCBJbmZyYXN0cnVjdHVyYWwgU2VydmljZXM8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB7c2VydmljZXNBcnJheS5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlWzFdLmNhdGVnb3J5ID09PSBcIklUIEluZnJhc3RydWN0dXJhbCBTZXJ2aWNlc1wiKS5tYXAoc2VydmljZSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29sdXRpb25zL1tuYW1lXVwiIGFzPXtcIi9zb2x1dGlvbnMvXCIgKyBzZXJ2aWNlWzBdfT48YSBjbGFzc05hbWU9XCJweS0xXCI+e3NlcnZpY2VbMV0udGl0bGV9PC9hPjwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICA8VGV4dCBtYj17XCI4cHhcIn0gbXQ9e1wiMTZweFwifSBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cIjcwMFwiPk5ldHdvcmsgU2VydmljZXM8L1RleHQ+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB7c2VydmljZXNBcnJheS5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlWzFdLmNhdGVnb3J5ID09PSBcIk5ldHdvcmsgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NvbHV0aW9ucy9bbmFtZV1cIiBhcz17XCIvc29sdXRpb25zL1wiICsgc2VydmljZVswXX0+PGEgY2xhc3NOYW1lPVwicHktMVwiPntzZXJ2aWNlWzFdLnRpdGxlfTwvYT48L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPFRleHQgbWI9e1wiOHB4XCJ9IG10PXtcIjE2cHhcIn0gZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCI3MDBcIj5DeWJlciBTZWN1cml0eSBTZXJ2aWNlczwvVGV4dD5cclxuICAgICAgICBcclxuICAgICAgICAgIHtzZXJ2aWNlc0FycmF5LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2VbMV0uY2F0ZWdvcnkgPT09IFwiQ3liZXIgU2VjdXJpdHkgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NvbHV0aW9ucy9bbmFtZV1cIiBhcz17XCIvc29sdXRpb25zL1wiICsgc2VydmljZVswXX0+PGEgY2xhc3NOYW1lPVwicHktMVwiPntzZXJ2aWNlWzFdLnRpdGxlfTwvYT48L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgPFRleHQgbWI9e1wiOHB4XCJ9IG10PXtcIjE2cHhcIn0gZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCI3MDBcIj5Db2xsYWJvcmF0aXZlIFNlcnZpY2VzPC9UZXh0PlxyXG4gICAgICAgIFxyXG4gICAgICAgICAge3NlcnZpY2VzQXJyYXkuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZVsxXS5jYXRlZ29yeSA9PT0gXCJDb2xsYWJvcmF0aXZlIFNlcnZpY2VzXCIpLm1hcChzZXJ2aWNlID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnMvW25hbWVdXCIgYXM9e1wiL3NvbHV0aW9ucy9cIiArIHNlcnZpY2VbMF19PjxhIGNsYXNzTmFtZT1cInB5LTFcIj57c2VydmljZVsxXS50aXRsZX08L2E+PC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICBcclxuXHJcbiAgICAgICAgPFRleHQgbWI9e1wiOHB4XCJ9IG10PXtcIjE2cHhcIn0gZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCI3MDBcIj5EZXZlbG9wbWVudCBTZXJ2aWNlczwvVGV4dD5cclxuICAgICAgICBcclxuICAgICAgICAgIHtzZXJ2aWNlc0FycmF5LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2VbMV0uY2F0ZWdvcnkgPT09IFwiRGV2ZWxvcG1lbnQgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3NvbHV0aW9ucy9bbmFtZV1cIiBhcz17XCIvc29sdXRpb25zL1wiICsgc2VydmljZVswXX0+PGEgY2xhc3NOYW1lPVwicHktMVwiPntzZXJ2aWNlWzFdLnRpdGxlfTwvYT48L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICBcclxuICAgICAgICBcclxuICAgICAgPC9kaXYgPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=