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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcHJpY2luZy9ETlNQcmljaW5nLmpzeCJdLCJuYW1lcyI6WyJ2ZXJpZnlOb3RFbXB0eSIsIngiLCJ0ZXh0IiwiRE5TUHJpY2luZyIsInByb3BzIiwic2hvdyIsInNldFNob3ciLCJSZWFjdCIsInVzZVN0YXRlIiwicGxhbiIsInNldFBsYW4iLCJvcGVuQ29udHJvbHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJ0eXBlIiwic2V0VHlwZSIsInpvbmVzIiwic2V0Wm9uZSIsImRhaWx5QmFja3VwcyIsInNldERhaWx5QmFja3VwcyIsImhhbmRsZWRhaWx5QmFja3VwcyIsInJlZHVuZGFudEROUyIsInNldFJlZHVuZGFudEROUyIsImhhbmRsZVJlZHVuZGFudEROUyIsInZhbHVlIiwiZSIsInRhcmdldCIsImNoZWNrZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFnQkE7QUFDQTs7QUFHQSxNQUFNQSxjQUFjLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJQyxJQUFKLEtBQWNELENBQUMsR0FBRyxDQUFKLEdBQVEsT0FBT0EsQ0FBUCxHQUFXLEdBQVgsR0FBaUJDLElBQXpCLEdBQWdDLEVBQXJFOztBQUVBLFNBQVNDLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3pCLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUF4QjtBQUNBLFFBQU0sQ0FBQ0MsSUFBRCxFQUFPQyxPQUFQLElBQWtCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUF4Qjs7QUFDQSxRQUFNRyxZQUFZLEdBQUcsTUFBTTtBQUFDTCxXQUFPLENBQUMsSUFBRCxDQUFQO0FBQWVNLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQkMsUUFBUSxDQUFD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ZXZlbG9wbWVudFxccGFnZXNcXHNvbHV0aW9uc1xcW25hbWVdLmpzLjllZWNkZDVmNTE5ZmViOWQ5YTY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIFRhYnMsXHJcbiAgVGFiTGlzdCxcclxuICBUYWIsXHJcbiAgVGFiUGFuZWwsXHJcbiAgVGFiUGFuZWxzLFxyXG4gIENvbGxhcHNlLFxyXG4gIFNsaWRlcixcclxuICBTbGlkZXJUaHVtYixcclxuICBTbGlkZXJUcmFjayxcclxuICBTbGlkZXJGaWxsZWRUcmFjayxcclxuICBGb3JtTGFiZWwsXHJcbiAgU3dpdGNoLFxyXG4gIEZsZXgsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIjtcclxuaW1wb3J0IHsgUHJpY2luZ0NhcmQsIFByaWNpbmdRdW90ZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1ByaWNpbmdDYXJkXCI7XHJcblxyXG5cclxuY29uc3QgdmVyaWZ5Tm90RW1wdHkgPSAoeCwgdGV4dCkgPT4gKHggPiAwID8gXCIsIFwiICsgeCArIFwiIFwiICsgdGV4dCA6IFwiXCIpO1xyXG5cclxuZnVuY3Rpb24gRE5TUHJpY2luZyhwcm9wcykge1xyXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcGxhbiwgc2V0UGxhbl0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBvcGVuQ29udHJvbHMgPSAoKSA9PiB7c2V0U2hvdyh0cnVlKTsgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sbGFwc2UtMVwiKS5vZmZzZXRUb3AgKzg1MCk7fVxyXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IFJlYWN0LnVzZVN0YXRlKFwiV2luZG93c1wiKTtcclxuICBjb25zdCBbem9uZXMsc2V0Wm9uZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbZGFpbHlCYWNrdXBzLCBzZXREYWlseUJhY2t1cHNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZWRhaWx5QmFja3VwcyA9IChkYWlseUJhY2t1cHMpID0+IChkYWlseUJhY2t1cHMpID8gKFwiLEFkZCBEYWlseSBCYWNrdXBzXCIpIDogKFwiXCIpXHJcbiAgY29uc3QgW3JlZHVuZGFudEROUyxzZXRSZWR1bmRhbnRETlNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVJlZHVuZGFudEROUyA9IChyZWR1bmRhbnRETlMpID0+IChyZWR1bmRhbnRETlMpID8gKFwiLEluY2x1ZGUgUmVkdW5kYW50IEROU1wiKSA6IChcIlwiKVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgb2Zmc2V0LWxnLTFcIj5cclxuICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBteT17NH0+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYmc9XCJsaWdodC41MDBcIiByb3VuZGVkPXswfSBib3JkZXJCb3R0b21XaWR0aD17Mn0gYm9yZGVyQm90dG9tQ29sb3I9e3R5cGUgPT09IFwiV2luZG93c1wiID8gXCJwcmltYXJ5LjUwMFwiIDogXCJsaWdodC40MDBcIn0gb25DbGljaz17KCk9PntzZXRTaG93KGZhbHNlKTsgc2V0Wm9uZSgwKTsgc2V0VHlwZShcIldpbmRvd3NcIil9fSBjbGFzc05hbWU9XCJweS00IHB4LTUgZGlzcGxheTZcIj5XaW5kb3dzPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYmc9XCJsaWdodC41MDBcIiByb3VuZGVkPXswfSBib3JkZXJCb3R0b21XaWR0aD17Mn0gYm9yZGVyQm90dG9tQ29sb3I9e3R5cGUgPT09IFwiQklORFwiID8gXCJwcmltYXJ5LjUwMFwiIDogXCJsaWdodC40MDBcIn0gb25DbGljaz17KCk9PntzZXRTaG93KGZhbHNlKTsgc2V0Wm9uZSgwKTsgc2V0VHlwZShcIkJJTkRcIil9fSBjbGFzc05hbWU9XCJweS00IHB4LTUgZGlzcGxheTZcIj5CSU5EPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b24gYmc9XCJsaWdodC41MDBcIiByb3VuZGVkPXswfSBib3JkZXJCb3R0b21XaWR0aD17Mn0gYm9yZGVyQm90dG9tQ29sb3I9e3R5cGUgPT09IFwiSW5mb2Jsb3hcIiA/IFwicHJpbWFyeS41MDBcIiA6IFwibGlnaHQuNDAwXCJ9IG9uQ2xpY2s9eygpPT57c2V0U2hvdyhmYWxzZSk7IHNldFpvbmUoMCk7IHNldFR5cGUoXCJJbmZvYmxveFwiKX19IGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NlwiPkluZm9ibG94PC9CdXR0b24+XHJcbiAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDxGYWRlIGR1cmF0aW9uPXs1MDB9IGJvdHRvbT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLXNtLTYgY29sLW1kLTYgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvcGFwZXItcGxhbmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlN0YW5kYXJkIEROUyAoQmxhY2tCb3gpXCJcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlcyA1IFpvbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkxvdyBMYXRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkhpZ2ggQXZhaWxhYmlsdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiQmxhY2tCb3ggU2VydmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJDb3N0IEVmZmVjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57b3BlbkNvbnRyb2xzKCk7IHNldFBsYW4oXCJTdGFuZGFyZCBETlMgKEJsYWNrQm94KVwiKX19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgVmlldyBPcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgY29sLXNtLTYgY29sLW1kLTYgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvcm9ja2V0LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJQcmVtaXVtIEROUyAoQmxhY2tCb3gpXCJcclxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlcyA1IFpvbmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkxvdyBMYXRlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBcIkhpZ2ggQXZhaWxhYmlsdHlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIFwiQmxhY2tCb3ggU2VydmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCJDb3N0IEVmZmVjdGl2ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpPT57b3BlbkNvbnRyb2xzKCk7IHNldFBsYW4oXCJQcmVtaXVtIEROUyAoQmxhY2tCb3gpXCIpfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICBWaWV3IG9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS0xXCI+XHJcbiAgICAgICAgPENvbGxhcHNlIGNsYXNzTmFtZT1cInB4LWxnLTVcIiBtdD17Nn0gaXNPcGVuPXtzaG93fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS01IGJvcmRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXk1IHRleHQtY2VudGVyXCI+e3BsYW59PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB4LTNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2XCI+RXh0cmEgWm9uZXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgbXk9XCIyNHB4XCJcclxuICAgICAgICAgICAgICAgICAgbWF4PXszMH1cclxuICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXsxfVxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17em9uZXN9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpPT57c2V0Wm9uZSh2YWx1ZSl9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyVHJhY2sgaD1cIjE2cHhcIiBib3JkZXJSYWRpdXM9XCI4cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyRmlsbGVkVHJhY2sgaD1cIjE2cHhcIiBib3JkZXJSYWRpdXM9XCI4cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICA8U2xpZGVyVGh1bWJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI4MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e3pvbmVzfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteS0xIGNvbC1sZy02IG10LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8RmxleCBweT1cIjEycHhcIiBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgc2V0UmVkdW5kYW50RE5TKGUudGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBtYj17MH1cclxuICAgICAgICAgICAgICAgICAgICBpZD1cImZhaWxPdmVyTm9kZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgbWI9ezB9IG1sPVwiMTJweFwiIGh0bWxGb3I9XCJmYWlsLW92ZXIgbm9kZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEluY2x1ZGUgUmVkdW5kYW50IEROU1xyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTEgY29sLWxnLTYgbXQtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxGbGV4IHB5PVwiMTJweFwiIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBzZXREYWlseUJhY2t1cHMoZS50YXJnZXQuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1iPXswfVxyXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmFpbE92ZXJOb2RlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBtYj17MH0gbWw9XCIxMnB4XCIgaHRtbEZvcj1cImZhaWwtb3ZlciBub2RlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQWRkIERhaWx5IEJhY2t1cFxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBtdC01IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlXHJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPVwiRE5TIEFzIEEgU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj17YCR7dHlwZX0sJHtwbGFufSAke3ZlcmlmeU5vdEVtcHR5KHpvbmVzLFwiRXh0cmEgWm9uZXNcIil9ICR7aGFuZGxlUmVkdW5kYW50RE5TKHJlZHVuZGFudEROUyl9ICR7aGFuZGxlZGFpbHlCYWNrdXBzKGRhaWx5QmFja3Vwcyl9YH1cclxuICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICA+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PilcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRE5TUHJpY2luZyJdLCJzb3VyY2VSb290IjoiIn0=