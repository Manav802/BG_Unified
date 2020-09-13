webpackHotUpdate("static\\development\\pages\\_app.js",{

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
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    justify: "center",
    my: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    bg: "light.500",
    rounded: 0,
    borderBottomWidth: 2,
    borderBottomColor: type === "Windows" ? "primary.500" : "light.400",
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
      columnNumber: 13
    }
  }, "Windows"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    bg: "light.500",
    rounded: 0,
    borderBottomWidth: 2,
    borderBottomColor: type === "BIND" ? "primary.500" : "light.400",
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
      columnNumber: 13
    }
  }, "BIND"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    bg: "light.500",
    rounded: 0,
    borderBottomWidth: 2,
    borderBottomColor: type === "Infoblox" ? "primary.500" : "light.400",
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
      columnNumber: 13
    }
  }, "Infoblox")), __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/paper-plane.svg",
    title: "Standard DNS (BlackBox)",
    featureList: ["Includes 5 Zones", "Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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
      lineNumber: 58,
      columnNumber: 21
    }
  }, "View Options"))), __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/rocket.svg",
    title: "Premium DNS (BlackBox)",
    featureList: ["Includes 5 Zones", "Low Latency", "High Availabilty", "BlackBox Service", "Cost Effective"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
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
      lineNumber: 81,
      columnNumber: 21
    }
  }, "View options"))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "collapse-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    isOpen: show,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "px-4 py-5 border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "display5 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, plan), __jsx("div", {
    className: "row px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-12 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
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
      lineNumber: 102,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
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
      lineNumber: 112,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "my-1 col-lg-6 mt-3 d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    py: "12px",
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
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
      lineNumber: 125,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "fail-over node",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 19
    }
  }, "Include Redundant DNS"))), __jsx("div", {
    className: "my-1 col-lg-6 mt-3 d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    py: "12px",
    justify: "center",
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
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
      lineNumber: 140,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    mb: 0,
    ml: "12px",
    htmlFor: "fail-over node",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 19
    }
  }, "Add Daily Backup"))), __jsx("div", {
    className: "col-lg-12 mt-5 d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 15
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    serviceName: "DNS As A Service",
    serviceDescription: `${type},${plan} ${verifyNotEmpty(zones, "Extra Zones")} ${handleRedundantDNS(redundantDNS)} ${handledailyBackups(dailyBackups)}`,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcHJpY2luZy9ETlNQcmljaW5nLmpzeCJdLCJuYW1lcyI6WyJ2ZXJpZnlOb3RFbXB0eSIsIngiLCJ0ZXh0IiwiRE5TUHJpY2luZyIsInByb3BzIiwic2hvdyIsInNldFNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwicGxhbiIsInNldFBsYW4iLCJvcGVuQ29udHJvbHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJ0eXBlIiwic2V0VHlwZSIsInpvbmVzIiwic2V0Wm9uZSIsImRhaWx5QmFja3VwcyIsInNldERhaWx5QmFja3VwcyIsImhhbmRsZWRhaWx5QmFja3VwcyIsInJlZHVuZGFudEROUyIsInNldFJlZHVuZGFudEROUyIsImhhbmRsZVJlZHVuZGFudEROUyIsInZhbHVlIiwiZSIsInRhcmdldCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFnQkE7QUFDQTs7QUFHQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJQyxJQUFKLEtBQWNELENBQUMsR0FBRyxDQUFKLEdBQVEsT0FBT0EsQ0FBUCxHQUFXLEdBQVgsR0FBaUJDLElBQXpCLEdBQWdDLEVBQXJFOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3pCLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUF4Qjs7QUFDQSxRQUFNRyxZQUFZLEdBQUcsTUFBTTtBQUFDTCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQWVNLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQkMsUUFBUSxDQUFD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ZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuOWVlY2RkNWY1MTlmZWI5ZDlhNjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgVGFicyxcclxuICBUYWJMaXN0LFxyXG4gIFRhYixcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgQ29sbGFwc2UsXHJcbiAgU2xpZGVyLFxyXG4gIFNsaWRlclRodW1iLFxyXG4gIFNsaWRlclRyYWNrLFxyXG4gIFNsaWRlckZpbGxlZFRyYWNrLFxyXG4gIEZvcm1MYWJlbCxcclxuICBTd2l0Y2gsXHJcbiAgRmxleCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJyZWFjdC1yZXZlYWwvRmFkZVwiO1xyXG5pbXBvcnQgeyBQcmljaW5nQ2FyZCwgUHJpY2luZ1F1b3RlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUHJpY2luZ0NhcmRcIjtcclxuXHJcblxyXG5jb25zdCB2ZXJpZnlOb3RFbXB0eSA9ICh4LCB0ZXh0KSA9PiAoeCA+IDAgPyBcIiwgXCIgKyB4ICsgXCIgXCIgKyB0ZXh0IDogXCJcIik7XHJcblxyXG5mdW5jdGlvbiBETlNQcmljaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtwbGFuLCBzZXRQbGFuXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IG9wZW5Db250cm9scyA9ICgpID0+IHtzZXRTaG93KHRydWUpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsYXBzZS0xXCIpLm9mZnNldFRvcCArODUwKTt9XHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gUmVhY3QudXNlU3RhdGUoXCJXaW5kb3dzXCIpO1xyXG4gIGNvbnN0IFt6b25lcyxzZXRab25lXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtkYWlseUJhY2t1cHMsIHNldERhaWx5QmFja3Vwc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlZGFpbHlCYWNrdXBzID0gKGRhaWx5QmFja3VwcykgPT4gKGRhaWx5QmFja3VwcykgPyAoXCIsQWRkIERhaWx5IEJhY2t1cHNcIikgOiAoXCJcIilcclxuICBjb25zdCBbcmVkdW5kYW50RE5TLHNldFJlZHVuZGFudEROU10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlUmVkdW5kYW50RE5TID0gKHJlZHVuZGFudEROUykgPT4gKHJlZHVuZGFudEROUykgPyAoXCIsSW5jbHVkZSBSZWR1bmRhbnQgRE5TXCIpIDogKFwiXCIpXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtbGctMVwiPlxyXG4gICAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIG15PXs0fT5cclxuICAgICAgICAgICAgPEJ1dHRvbiBiZz1cImxpZ2h0LjUwMFwiIHJvdW5kZWQ9ezB9IGJvcmRlckJvdHRvbVdpZHRoPXsyfSBib3JkZXJCb3R0b21Db2xvcj17dHlwZSA9PT0gXCJXaW5kb3dzXCIgPyBcInByaW1hcnkuNTAwXCIgOiBcImxpZ2h0LjQwMFwifSBvbkNsaWNrPXsoKT0+e3NldFNob3coZmFsc2UpOyBzZXRab25lKDApOyBzZXRUeXBlKFwiV2luZG93c1wiKX19IGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NlwiPldpbmRvd3M8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBiZz1cImxpZ2h0LjUwMFwiIHJvdW5kZWQ9ezB9IGJvcmRlckJvdHRvbVdpZHRoPXsyfSBib3JkZXJCb3R0b21Db2xvcj17dHlwZSA9PT0gXCJCSU5EXCIgPyBcInByaW1hcnkuNTAwXCIgOiBcImxpZ2h0LjQwMFwifSBvbkNsaWNrPXsoKT0+e3NldFNob3coZmFsc2UpOyBzZXRab25lKDApOyBzZXRUeXBlKFwiQklORFwiKX19IGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NlwiPkJJTkQ8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBiZz1cImxpZ2h0LjUwMFwiIHJvdW5kZWQ9ezB9IGJvcmRlckJvdHRvbVdpZHRoPXsyfSBib3JkZXJCb3R0b21Db2xvcj17dHlwZSA9PT0gXCJJbmZvYmxveFwiID8gXCJwcmltYXJ5LjUwMFwiIDogXCJsaWdodC40MDBcIn0gb25DbGljaz17KCk9PntzZXRTaG93KGZhbHNlKTsgc2V0Wm9uZSgwKTsgc2V0VHlwZShcIkluZm9ibG94XCIpfX0gY2xhc3NOYW1lPVwicHktNCBweC01IGRpc3BsYXk2XCI+SW5mb2Jsb3g8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPEZhZGUgZHVyYXRpb249ezUwMH0gYm90dG9tPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtc20tNiBjb2wtbWQtNiBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9wYXBlci1wbGFuZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RhbmRhcmQgRE5TIChCbGFja0JveClcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGVzIDUgWm9uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiTG93IExhdGVuY3lcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiSGlnaCBBdmFpbGFiaWx0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJCbGFja0JveCBTZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkNvc3QgRWZmZWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntvcGVuQ29udHJvbHMoKTsgc2V0UGxhbihcIlN0YW5kYXJkIEROUyAoQmxhY2tCb3gpXCIpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtc20tNiBjb2wtbWQtNiBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9yb2NrZXQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlByZW1pdW0gRE5TIChCbGFja0JveClcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGVzIDUgWm9uZXNcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiTG93IExhdGVuY3lcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiSGlnaCBBdmFpbGFiaWx0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJCbGFja0JveCBTZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkNvc3QgRWZmZWN0aXZlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCk9PntvcGVuQ29udHJvbHMoKTsgc2V0UGxhbihcIlByZW1pdW0gRE5TIChCbGFja0JveClcIil9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIFZpZXcgb3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdiBpZD1cImNvbGxhcHNlLTFcIj5cclxuICAgICAgICA8Q29sbGFwc2UgY2xhc3NOYW1lPVwicHgtbGctNVwiIG10PXs2fSBpc09wZW49e3Nob3d9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTUgYm9yZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheTUgdGV4dC1jZW50ZXJcIj57cGxhbn08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHgtM1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIG10LTRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDZcIj5FeHRyYSBab25lczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICBteT1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICBtYXg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezF9XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt6b25lc31cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSk9PntzZXRab25lKHZhbHVlKX19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXJUcmFjayBoPVwiMTZweFwiIGJvcmRlclJhZGl1cz1cIjhweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXJGaWxsZWRUcmFjayBoPVwiMTZweFwiIGJvcmRlclJhZGl1cz1cIjhweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxTbGlkZXJUaHVtYlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPVwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17em9uZXN9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEgY29sLWxnLTYgbXQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxGbGV4IHB5PVwiMTJweFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXRSZWR1bmRhbnRETlMoZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1iPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmFpbE92ZXJOb2RlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBtYj17MH0gbWw9XCIxMnB4XCIgaHRtbEZvcj1cImZhaWwtb3ZlciBub2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW5jbHVkZSBSZWR1bmRhbnQgRE5TXHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktMSBjb2wtbGctNiBtdC0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgPEZsZXggcHk9XCIxMnB4XCIganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHNldERhaWx5QmFja3VwcyhlLnRhcmdldC5jaGVja2VkKTtcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWI9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmYWlsT3Zlck5vZGVcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIG1iPXswfSBtbD1cIjEycHhcIiBodG1sRm9yPVwiZmFpbC1vdmVyIG5vZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgRGFpbHkgQmFja3VwXHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIG10LTUgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGVcclxuICAgICAgICAgICAgICAgICAgc2VydmljZU5hbWU9XCJETlMgQXMgQSBTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgc2VydmljZURlc2NyaXB0aW9uPXtgJHt0eXBlfSwke3BsYW59ICR7dmVyaWZ5Tm90RW1wdHkoem9uZXMsXCJFeHRyYSBab25lc1wiKX0gJHtoYW5kbGVSZWR1bmRhbnRETlMocmVkdW5kYW50RE5TKX0gJHtoYW5kbGVkYWlseUJhY2t1cHMoZGFpbHlCYWNrdXBzKX1gfVxyXG4gICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgID48L1ByaWNpbmdRdW90ZT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBETlNQcmljaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==