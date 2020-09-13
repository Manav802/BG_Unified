webpackHotUpdate("static\\development\\pages\\solutions\\[name].js",{

/***/ "./src/pageBuilder/pricing/DNSPricing.jsx":
/*!************************************************!*\
  !*** ./src/pageBuilder/pricing/DNSPricing.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/cards/PricingCard */ "./src/components/cards/PricingCard.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\DNSPricing.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

function DNSPricing(props) {
  _s();

  const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [plan, setPlan] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop + 850);
  };

  const [type, setType] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("Windows");
  const [zones, setZone] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [dailyBackups, setDailyBackups] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handledailyBackups = dailyBackups => dailyBackups ? ",Add Daily Backups" : "";

  const [redundantDNS, setRedundantDNS] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleRedundantDNS = redundantDNS => redundantDNS ? ",Include Redundant DNS" : "";

  return __jsx("div", {
    id: "pricing",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 3
    }
  }, __jsx("div", {
    className: "col-lg-10 offset-lg-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    onClick: () => {
      setShow(false);
      setZone(0);
      setType("Windows");
    },
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }, "Windows"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    onClick: () => {
      setShow(false);
      setZone(0);
      setType("BIND");
    },
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "BIND"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    onClick: () => {
      setShow(false);
      setZone(0);
      setType("Infoblox");
    },
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Infoblox"), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/paper-plane.svg",
    title: "Standard DNS (BlackBox)",
    featureList: ["Includes 5 Zones", "Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Standard DNS (BlackBox)");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 21
    }
  }, "View Options"))), __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/rocket.svg",
    title: "Premium DNS (BlackBox)",
    featureList: ["Includes 5 Zones", "Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setPlan("Premium DNS (BlackBox)");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, "View options"))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "collapse-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    isOpen: show,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "px-4 py-5 border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "display5 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }, plan), __jsx("div", {
    className: "row px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-12 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 17
    }
  }, "Extra Zones"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    color: "primary",
    my: "24px",
    max: 30,
    defaultValue: 1,
    value: zones,
    onChange: value => {
      setZone(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: zones,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "my-1 col-lg-6 mt-3 d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    py: "12px",
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    onChange: e => {
      setRedundantDNS(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "failOverNode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "fail-over node",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, "Include Redundant DNS"))), __jsx("div", {
    className: "my-1 col-lg-6 mt-3 d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    py: "12px",
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    onChange: e => {
      setDailyBackups(e.target.checked);
    },
    color: "primary",
    mb: 0,
    id: "failOverNode",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "fail-over node",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, "Add Daily Backup"))), __jsx("div", {
    className: "col-lg-12 mt-5 d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 15
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    serviceName: "DNS As A Service",
    serviceDescription: `${type},${plan} ${verifyNotEmpty(zones, "Extra Zones")} ${handleRedundantDNS(redundantDNS)} ${handledailyBackups(dailyBackups)}`,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }))))))))));
}

_s(DNSPricing, "Pl3r1VUuC6yYMaf8EwlGkUrorE0=");

_c = DNSPricing;
/* harmony default export */ __webpack_exports__["default"] = (DNSPricing);

var _c;

$RefreshReg$(_c, "DNSPricing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcHJpY2luZy9ETlNQcmljaW5nLmpzeCJdLCJuYW1lcyI6WyJ2ZXJpZnlOb3RFbXB0eSIsIngiLCJ0ZXh0IiwiRE5TUHJpY2luZyIsInByb3BzIiwic2hvdyIsInNldFNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwicGxhbiIsInNldFBsYW4iLCJvcGVuQ29udHJvbHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJ0eXBlIiwic2V0VHlwZSIsInpvbmVzIiwic2V0Wm9uZSIsImRhaWx5QmFja3VwcyIsInNldERhaWx5QmFja3VwcyIsImhhbmRsZWRhaWx5QmFja3VwcyIsInJlZHVuZGFudEROUyIsInNldFJlZHVuZGFudEROUyIsImhhbmRsZVJlZHVuZGFudEROUyIsInZhbHVlIiwiZSIsInRhcmdldCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFnQkE7QUFDQTs7QUFHQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJQyxJQUFKLEtBQWNELENBQUMsR0FBRyxDQUFKLEdBQVEsT0FBT0EsQ0FBUCxHQUFXLEdBQVgsR0FBaUJDLElBQXpCLEdBQWdDLEVBQXJFOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3pCLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUF4Qjs7QUFDQSxRQUFNRyxZQUFZLEdBQUcsTUFBTTtBQUFDTCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQWVNLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQkMsUUFBUSxDQUFD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RixDQURGLENBdkNGLEVBc0RFO0FBQUssYUFBUyxFQUFDLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBFQUFEO0FBQ0UsZUFBVyxFQUFDLGtCQURkO0FBRUUsc0JBQWtCLEVBQUcsR0FBRWIsSUFBSyxJQUFHUixJQUFLLElBQUdULGNBQWMsQ0FBQ21CLEtBQUQsRUFBTyxhQUFQLENBQXNCLElBQUdPLGtCQUFrQixDQUFDRixZQUFELENBQWUsSUFBR0Qsa0JBQWtCLENBQUNGLFlBQUQsQ0FBZSxFQUZySjtBQUdFLFVBQU0sTUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0F0REYsQ0FGRixDQURGLENBREYsQ0FEQSxDQTFERixDQURGLENBREEsQ0FEQTtBQXVJRDs7R0FsSlFsQixVOztLQUFBQSxVO0FBb0pNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29sdXRpb25zXFxbbmFtZV0uanMuOGVlOWZiNmI4YzMxYTMwNDg5OGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgVGFicyxcclxuICBUYWJMaXN0LFxyXG4gIFRhYixcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgQ29sbGFwc2UsXHJcbiAgU2xpZGVyLFxyXG4gIFNsaWRlclRodW1iLFxyXG4gIFNsaWRlclRyYWNrLFxyXG4gIFNsaWRlckZpbGxlZFRyYWNrLFxyXG4gIEZvcm1MYWJlbCxcclxuICBTd2l0Y2gsXHJcbiAgRmxleCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJyZWFjdC1yZXZlYWwvRmFkZVwiO1xyXG5pbXBvcnQgeyBQcmljaW5nQ2FyZCwgUHJpY2luZ1F1b3RlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUHJpY2luZ0NhcmRcIjtcclxuXHJcblxyXG5jb25zdCB2ZXJpZnlOb3RFbXB0eSA9ICh4LCB0ZXh0KSA9PiAoeCA+IDAgPyBcIiwgXCIgKyB4ICsgXCIgXCIgKyB0ZXh0IDogXCJcIik7XHJcblxyXG5mdW5jdGlvbiBETlNQcmljaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9wZW5Db250cm9scyA9ICgpID0+IHtzZXRTaG93KHRydWUpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsYXBzZS0xXCIpLm9mZnNldFRvcCArODUwKTt9XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGUoXCJXaW5kb3dzXCIpO1xyXG4gIGNvbnN0IFt6b25lcyxzZXRab25lXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkYWlseUJhY2t1cHMsIHNldERhaWx5QmFja3Vwc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlZGFpbHlCYWNrdXBzID0gKGRhaWx5QmFja3VwcykgPT4gKGRhaWx5QmFja3VwcykgPyAoXCIsQWRkIERhaWx5IEJhY2t1cHNcIikgOiAoXCJcIilcclxuICBjb25zdCBbcmVkdW5kYW50RE5TLHNldFJlZHVuZGFudEROU10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlUmVkdW5kYW50RE5TID0gKHJlZHVuZGFudEROUykgPT4gKHJlZHVuZGFudEROUykgPyAoXCIsSW5jbHVkZSBSZWR1bmRhbnQgRE5TXCIpIDogKFwiXCIpXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtbGctMVwiPlxyXG4gICBcclxuICAgICAgICAgIDxUYWIgb25DbGljaz17KCk9PntzZXRTaG93KGZhbHNlKTsgc2V0Wm9uZSgwKTsgc2V0VHlwZShcIldpbmRvd3NcIil9fSBjbGFzc05hbWU9XCJweS00IHB4LTUgZGlzcGxheTZcIj5XaW5kb3dzPC9UYWI+XHJcbiAgICAgICAgICA8VGFiIG9uQ2xpY2s9eygpPT57c2V0U2hvdyhmYWxzZSk7IHNldFpvbmUoMCk7IHNldFR5cGUoXCJCSU5EXCIpfX0gY2xhc3NOYW1lPVwicHktNCBweC01IGRpc3BsYXk2XCI+QklORDwvVGFiPlxyXG4gICAgICAgICAgPFRhYiBvbkNsaWNrPXsoKT0+e3NldFNob3coZmFsc2UpOyBzZXRab25lKDApOyBzZXRUeXBlKFwiSW5mb2Jsb3hcIil9fSBjbGFzc05hbWU9XCJweS00IHB4LTUgZGlzcGxheTZcIj5JbmZvYmxveDwvVGFiPlxyXG4gIFxyXG5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxGYWRlIGR1cmF0aW9uPXs1MDB9IGJvdHRvbT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLXNtLTYgY29sLW1kLTYgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvcGFwZXItcGxhbmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN0YW5kYXJkIEROUyAoQmxhY2tCb3gpXCJcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlcyA1IFpvbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkxvdyBMYXRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkhpZ2ggQXZhaWxhYmlsdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiQmxhY2tCb3ggU2VydmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJDb3N0IEVmZmVjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57b3BlbkNvbnRyb2xzKCk7IHNldFBsYW4oXCJTdGFuZGFyZCBETlMgKEJsYWNrQm94KVwiKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLXNtLTYgY29sLW1kLTYgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvcm9ja2V0LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmVtaXVtIEROUyAoQmxhY2tCb3gpXCJcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlcyA1IFpvbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkxvdyBMYXRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkhpZ2ggQXZhaWxhYmlsdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiQmxhY2tCb3ggU2VydmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJDb3N0IEVmZmVjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57b3BlbkNvbnRyb2xzKCk7IHNldFBsYW4oXCJQcmVtaXVtIEROUyAoQmxhY2tCb3gpXCIpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgPENvbGxhcHNlIGNsYXNzTmFtZT1cInB4LWxnLTVcIiBtdD17Nn0gaXNPcGVuPXtzaG93fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS01IGJvcmRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXk1IHRleHQtY2VudGVyXCI+e3BsYW59PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB4LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2XCI+RXh0cmEgWm9uZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgbXk9XCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgbWF4PXszMH1cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17em9uZXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57c2V0Wm9uZSh2YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyVHJhY2sgaD1cIjE2cHhcIiBib3JkZXJSYWRpdXM9XCI4cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyRmlsbGVkVHJhY2sgaD1cIjE2cHhcIiBib3JkZXJSYWRpdXM9XCI4cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyVGh1bWJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI4MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e3pvbmVzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xIGNvbC1sZy02IG10LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBweT1cIjEycHhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UmVkdW5kYW50RE5TKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYj17MH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZhaWxPdmVyTm9kZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgbWI9ezB9IG1sPVwiMTJweFwiIGh0bWxGb3I9XCJmYWlsLW92ZXIgbm9kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluY2x1ZGUgUmVkdW5kYW50IEROU1xyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEgY29sLWxnLTYgbXQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxGbGV4IHB5PVwiMTJweFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYWlseUJhY2t1cHMoZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1iPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmFpbE92ZXJOb2RlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBtYj17MH0gbWw9XCIxMnB4XCIgaHRtbEZvcj1cImZhaWwtb3ZlciBub2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIERhaWx5IEJhY2t1cFxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBtdC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlXHJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPVwiRE5TIEFzIEEgU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj17YCR7dHlwZX0sJHtwbGFufSAke3ZlcmlmeU5vdEVtcHR5KHpvbmVzLFwiRXh0cmEgWm9uZXNcIil9ICR7aGFuZGxlUmVkdW5kYW50RE5TKHJlZHVuZGFudEROUyl9ICR7aGFuZGxlZGFpbHlCYWNrdXBzKGRhaWx5QmFja3Vwcyl9YH1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE5TUHJpY2luZyJdLCJzb3VyY2VSb290IjoiIn0=