webpackHotUpdate("static\\development\\pages\\solutions.js",{

/***/ "./src/components/cards/CardWithIcon.jsx":
/*!***********************************************!*\
  !*** ./src/components/cards/CardWithIcon.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\components\\cards\\CardWithIcon.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 //props.icon is an element (can be image,icon etc.)

function CardWithIcon(props) {
  var iconbox = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "text-white d-flex justify-content-center shadow-lg align-items-center",
    rounded: "12px",
    w: "128px",
    h: "128px",
    bg: props.iconBg || "Blue",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: props.icon,
    size: "40px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }));

  if (props.fullIcon) {
    iconbox = __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
      className: "text-white",
      rounded: "12px",
      w: "48px",
      h: "48px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, props.fullIcon);
  }

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    pt: "64px",
    h: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    h: "100%",
    className: "card-with-icon shadow-lg align-items-center d-flex flex-column bg-white rounded p-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row iconbox mb-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, iconbox), __jsx("div", {
    className: "row display6 py-3 text-center mx-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, props.title), __jsx("div", {
    className: "row cardContent flex-fill py-2 mx-3 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, props.children), __jsx("div", {
    className: "row mx-3 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: `${props.link}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    py: 8,
    px: 12,
    bg: "dark.500",
    color: "white",
    _hover: {
      color: "white",
      bg: "dark.400"
    },
    borderRadius: "0px 12px",
    rightIcon: "arrow-forward",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, "Learn More")))));
}

_c = CardWithIcon;
/* harmony default export */ __webpack_exports__["default"] = (CardWithIcon);

var _c;

$RefreshReg$(_c, "CardWithIcon");

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

/***/ }),

/***/ "./src/components/cards/Service.jsx":
/*!******************************************!*\
  !*** ./src/components/cards/Service.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _CardWithIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardWithIcon */ "./src/components/cards/CardWithIcon.jsx");
/* harmony import */ var _database_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../database/services */ "./src/database/services.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\components\\cards\\Service.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function Service(props) {
  var service = Object.entries(_database_services__WEBPACK_IMPORTED_MODULE_1__["default"]).filter(s => s[1].title === props.service)[0];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, service && __jsx(_CardWithIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: service[1].title,
    iconBg: service[1].color,
    link: "/solution/" + service[0],
    icon: service[1].icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 25
    }
  }, service[1].description));
}

_c = Service;
/* harmony default export */ __webpack_exports__["default"] = (Service);

var _c;

$RefreshReg$(_c, "Service");

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
  }, servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => __jsx(_components_cards_Service__WEBPACK_IMPORTED_MODULE_8__["default"], {
    service: service.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9DYXJkV2l0aEljb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL1NlcnZpY2UuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9zb2x1dGlvbnMvaW5kZXguanN4Il0sIm5hbWVzIjpbIkNhcmRXaXRoSWNvbiIsInByb3BzIiwiaWNvbmJveCIsImljb25CZyIsImljb24iLCJmdWxsSWNvbiIsInRpdGxlIiwiY2hpbGRyZW4iLCJsaW5rIiwiY29sb3IiLCJiZyIsIlNlcnZpY2UiLCJzZXJ2aWNlIiwiT2JqZWN0IiwiZW50cmllcyIsInNlcnZpY2VzIiwiZmlsdGVyIiwicyIsImRlc2NyaXB0aW9uIiwiT3VyU29sdXRpb25zIiwibWl4QmxlbmRNb2RlIiwic2VydmljZXNBcnJheSIsImNhdGVnb3J5IiwibWFwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDM0IsTUFBSUMsT0FBTyxHQUNULE1BQUMsbURBQUQ7QUFDRSxhQUFTLEVBQUMsdUVBRFo7QUFFRSxXQUFPLEVBQUMsTUFGVjtBQUdFLEtBQUMsRUFBQyxPQUhKO0FBSUUsS0FBQyxFQUFDLE9BSko7QUFLRSxNQUFFLEVBQUVELEtBQUssQ0FBQ0UsTUFBTixJQUFnQixNQUx0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0UsTUFBQyxxREFBRDtBQUFPLE9BQUcsRUFBRUYsS0FBSyxDQUFDRyxJQUFsQjtBQUF3QixRQUFJLEVBQUMsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLENBREY7O0FBV0EsTUFBSUgsS0FBSyxDQUFDSSxRQUFWLEVBQW9CO0FBQ2xCSCxXQUFPLEdBQ0wsTUFBQyxtREFBRDtBQUFLLGVBQVMsRUFBQyxZQUFmO0FBQTRCLGFB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QVIsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFIRixFQUlFLE1BQUMsb0RBQUQ7QUFBTSxVQUFNLEVBQUMsS0FBYjtBQUFtQixZQUFRLEVBQUMsSUFBNUI7QUFBaUMsTUFBRSxFQUFFLENBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBSkYsQ0FKSixFQVVFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDQyxhQUFhLENBQUNMLE1BQWQsQ0FBcUJKLE9BQU8sSUFBSUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXVSxRQUFYLEtBQXdCLHdCQUF4RCxFQUFrRkMsR0FBbEYsQ0FBc0ZYLE9BQU8sSUFDMUYsTUFBQyxpRUFBRDtBQUFTLFdBQU8sRUFBRUEsT0FBTyxDQUFDTixLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREgsQ0FERCxDQURKLENBVkYsQ0FERjtBQW9CSDs7S0FyQlFhLFk7QUF1Qk1BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzb2x1dGlvbnMuanMuMTEwZGRmY2JjMjAxNDUzNzhkYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQm94LCBJY29uLCBJbWFnZSwgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuLy9wcm9wcy5pY29uIGlzIGFuIGVsZW1lbnQgKGNhbiBiZSBpbWFnZSxpY29uIGV0Yy4pXHJcblxyXG5mdW5jdGlvbiBDYXJkV2l0aEljb24ocHJvcHMpIHtcclxuICB2YXIgaWNvbmJveCA9IChcclxuICAgIDxCb3hcclxuICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBzaGFkb3ctbGcgYWxpZ24taXRlbXMtY2VudGVyXCJcclxuICAgICAgcm91bmRlZD1cIjEycHhcIlxyXG4gICAgICB3PVwiMTI4cHhcIlxyXG4gICAgICBoPVwiMTI4cHhcIlxyXG4gICAgICBiZz17cHJvcHMuaWNvbkJnIHx8IFwiQmx1ZVwifVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2Ugc3JjPXtwcm9wcy5pY29ufSBzaXplPVwiNDBweFwiPjwvSW1hZ2U+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG4gIGlmIChwcm9wcy5mdWxsSWNvbikge1xyXG4gICAgaWNvbmJveCA9IChcclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgcm91bmRlZD1cIjEycHhcIiB3PVwiNDhweFwiIGg9XCI0OHB4XCI+XHJcbiAgICAgICAge3Byb3BzLmZ1bGxJY29ufVxyXG4gICAgICA8L0JveD5cclxuICAgICk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHB0PVwiNjRweFwiIGg9XCIxMDAlXCI+XHJcbiAgICAgIDxCb3ggaD1cIjEwMCVcIiBjbGFzc05hbWU9XCJjYXJkLXdpdGgtaWNvbiBzaGFkb3ctbGcgYWxpZ24taXRlbXMtY2VudGVyIGQtZmxleCBmbGV4LWNvbHVtbiBiZy13aGl0ZSByb3VuZGVkIHAtM1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGljb25ib3ggbWItM1wiPntpY29uYm94fTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGRpc3BsYXk2IHB5LTMgdGV4dC1jZW50ZXIgbXgtMlwiPntwcm9wcy50aXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBjYXJkQ29udGVudCBmbGV4LWZpbGwgcHktMiBteC0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXgtMyBteS0zXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgJHtwcm9wcy5saW5rfWB9PlxyXG4gICAgICAgICAgICA8QnV0dG9uIHB5PXs4fSBweD17MTJ9IGJnPVwiZGFyay41MDBcIiBjb2xvcj1cIndoaXRlXCIgX2hvdmVyPXt7Y29sb3I6XCJ3aGl0ZVwiLCBiZzpcImRhcmsuNDAwXCJ9fSBib3JkZXJSYWRpdXM9XCIwcHggMTJweFwiIHJpZ2h0SWNvbj1cImFycm93LWZvcndhcmRcIj5cclxuICAgICAgICAgICAgICBMZWFybiBNb3JlXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcmRXaXRoSWNvbjtcclxuIiwiaW1wb3J0IENhcmRXaXRoSWNvbiBmcm9tIFwiLi9DYXJkV2l0aEljb25cIlxyXG5pbXBvcnQgc2VydmljZXMgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL3NlcnZpY2VzXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5mdW5jdGlvbiBTZXJ2aWNlKHByb3BzKSB7XHJcblxyXG4gICAgdmFyIHNlcnZpY2UgPSBPYmplY3QuZW50cmllcyhzZXJ2aWNlcykuZmlsdGVyKHMgPT4gc1sxXS50aXRsZSA9PT0gcHJvcHMuc2VydmljZSlbMF1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtzZXJ2aWNlICYmIDxDYXJkV2l0aEljb24gdGl0bGU9e3NlcnZpY2VbMV0udGl0bGV9IGljb25CZz17c2VydmljZVsxXS5jb2xvcn0gbGluaz17XCIvc29sdXRpb24vXCIgKyBzZXJ2aWNlWzBdfSBpY29uPXtzZXJ2aWNlWzFdLmljb259PntzZXJ2aWNlWzFdLmRlc2NyaXB0aW9ufTwvQ2FyZFdpdGhJY29uPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7IiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1mbGlja2l0eS1jb21wb25lbnRcIjtcclxuaW1wb3J0IHNlcnZpY2VzIGZyb20gXCIuLi8uLi9kYXRhYmFzZS9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSBcIi4uLy4uL3BhZ2VCdWlsZGVyL1NlY3Rpb25cIjtcclxuaW1wb3J0IFRpdGxlIGZyb20gXCIuLi8uLi9wYWdlQnVpbGRlci9UaXRsZVwiO1xyXG5pbXBvcnQgeyBIZWFkaW5nLCBUZXh0LCBCb3gsIElucHV0R3JvdXAsIElucHV0TGVmdEVsZW1lbnQsIEJ1dHRvbiwgSWNvbiwgSW5wdXQsIEltYWdlLCBBdmF0YXIsIEJhZGdlLCBGbGV4LCBHcmlkLCBNZW51TGlzdCwgTWVudSwgTWVudUJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvU2VydmljZVwiO1xyXG5cclxuZnVuY3Rpb24gT3VyU29sdXRpb25zKCl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5PdXIgU29sdXRpb25zPC90aXRsZT5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxTZWN0aW9uIHBvc2l0aW9uPVwicmVsYXRpdmVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBiZz17W1wiZ3JheS4yMDBcIiwgXCIjZmZmZmZmMDBcIl19IHB5PXtbMTYsIDMyXX0gbXk9ezB9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgekluZGV4PVwiLTEwMFwiIG10PVwiLTEyOHB4XCIgc3R5bGU9e3ttaXhCbGVuZE1vZGU6XCJkYXJrZW5cIn19IG1pbkg9XCI0NDhweFwiIHdpZHRoPVwiMTAwJVwiIG9iamVjdEZpdD1cImNvdmVyXCIgbGVmdD17MH0gcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD17MH0gc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZG90c19jaXJjbGUuanBnXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgekluZGV4PVwiMTAwXCIgc2l6ZT1cInhzXCIgbGV0dGVyU3BhY2luZz17MS44fSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInByaW1hcnkuNTAwXCIgbWI9ezR9IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5XaGF0IHdlIGRlbGl2ZXI8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUaXRsZSB6SW5kZXg9XCIxMDBcIiBmb250U2l6ZT17W1wiNDRweFwiLFwiNjRweFwiXX0+T3VyIFNvbHV0aW9uczwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxUZXh0IHpJbmRleD1cIjEwMFwiIGZvbnRTaXplPVwieGxcIiBtdD17Mn0+V2UgY292ZXIgOTAlIG9mIHRoZSB0ZWNobm9sb2d5IGRvbWFpbnMuPC9UZXh0PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvbj5cclxuICAgICAgICAgICAgPFNsaWRlcj5cclxuICAgICAgICAgICAge3NlcnZpY2VzQXJyYXkuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZVsxXS5jYXRlZ29yeSA9PT0gXCJDb2xsYWJvcmF0aXZlIFNlcnZpY2VzXCIpLm1hcChzZXJ2aWNlID0+IChcclxuICAgICAgICAgICAgICAgIDxTZXJ2aWNlIHNlcnZpY2U9e3NlcnZpY2UudGl0bGV9PjwvU2VydmljZT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBPdXJTb2x1dGlvbnM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=