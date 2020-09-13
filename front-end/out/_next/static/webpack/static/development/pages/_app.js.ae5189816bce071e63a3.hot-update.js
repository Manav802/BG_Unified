webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/pageBuilder/pages/solutions/index.jsx":
/*!***************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/index.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _storage = _interopRequireDefault(__webpack_require__(/*! ./storage */ "./src/pageBuilder/pages/solutions/storage.jsx"));

var _infra = _interopRequireDefault(__webpack_require__(/*! ./infra */ "./src/pageBuilder/pages/solutions/infra.jsx"));

var _logging = _interopRequireDefault(__webpack_require__(/*! ./logging */ "./src/pageBuilder/pages/solutions/logging.jsx"));

var _backup = _interopRequireDefault(__webpack_require__(/*! ./backup */ "./src/pageBuilder/pages/solutions/backup.jsx"));

var _dns = _interopRequireDefault(__webpack_require__(/*! ./dns */ "./src/pageBuilder/pages/solutions/dns.jsx"));

var _platform = _interopRequireDefault(__webpack_require__(/*! ./platform */ "./src/pageBuilder/pages/solutions/platform.jsx"));

var _firewall = _interopRequireDefault(__webpack_require__(/*! ./firewall */ "./src/pageBuilder/pages/solutions/firewall.jsx"));

var _contactCenter = _interopRequireDefault(__webpack_require__(/*! ./contact-center */ "./src/pageBuilder/pages/solutions/contact-center.jsx"));

var _wireless = _interopRequireDefault(__webpack_require__(/*! ./wireless */ "./src/pageBuilder/pages/solutions/wireless.jsx"));

var _proxy = _interopRequireDefault(__webpack_require__(/*! ./proxy */ "./src/pageBuilder/pages/solutions/proxy.jsx"));

var _hosting = _interopRequireDefault(__webpack_require__(/*! ./hosting */ "./src/pageBuilder/pages/solutions/hosting.jsx"));

var _cex = _interopRequireDefault(__webpack_require__(/*! ./cex */ "./src/pageBuilder/pages/solutions/cex.jsx"));

var _sip = _interopRequireDefault(__webpack_require__(/*! ./sip */ "./src/pageBuilder/pages/solutions/sip.jsx"));

var _appdev = _interopRequireDefault(__webpack_require__(/*! ./appdev */ "./src/pageBuilder/pages/solutions/appdev.jsx"));

var _sdwan = _interopRequireDefault(__webpack_require__(/*! ./sdwan */ "./src/pageBuilder/pages/solutions/sdwan.jsx"));

var _dr = _interopRequireDefault(__webpack_require__(/*! ./dr */ "./src/pageBuilder/pages/solutions/dr.jsx"));

var _architecturalConsultancy = _interopRequireDefault(__webpack_require__(/*! ./architectural-consultancy */ "./src/pageBuilder/pages/solutions/architectural-consultancy.jsx"));

var _loadBalancer = _interopRequireDefault(__webpack_require__(/*! ./loadBalancer */ "./src/pageBuilder/pages/solutions/loadBalancer.jsx"));

var _workstation = _interopRequireDefault(__webpack_require__(/*! ./workstation */ "./src/pageBuilder/pages/solutions/workstation.jsx"));

var _socaas = _interopRequireDefault(__webpack_require__(/*! ./socaas */ "./src/pageBuilder/pages/solutions/socaas.jsx"));

var _wafaas = _interopRequireDefault(__webpack_require__(/*! ./wafaas */ "./src/pageBuilder/pages/solutions/wafaas.jsx"));

var _dbaas = _interopRequireDefault(__webpack_require__(/*! ./dbaas */ "./src/pageBuilder/pages/solutions/dbaas.jsx"));

var _webdev = _interopRequireDefault(__webpack_require__(/*! ./webdev */ "./src/pageBuilder/pages/solutions/webdev.jsx"));

module.exports.storage = _storage.default;
module.exports.infra = _infra.default;
module.exports.logging = _logging.default;
module.exports.backup = _backup.default;
module.exports.dns = _dns.default;
module.exports.platform = _platform.default;
module.exports.firewall = _firewall.default;
module.exports.callcenter = _contactCenter.default;
module.exports.wireless = _wireless.default;
module.exports.proxy = _proxy.default;
module.exports.hosting = _hosting.default;
module.exports.cex = _cex.default;
module.exports.sip = _sip.default;
module.exports.appdev = _appdev.default;
module.exports.sdwan = _sdwan.default;
module.exports.dr = _dr.default;
module.exports.architecture = _architecturalConsultancy.default;
module.exports.loadBalancer = _loadBalancer.default;
module.exports.workstation = _workstation.default;
module.exports.socaas = _socaas.default;
module.exports.wafaas = _wafaas.default;
module.exports.dbaas = _dbaas.default;
module.exports.webdev = _webdev.default;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./src/pageBuilder/pages/solutions/sip.jsx":
/*!*************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/sip.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_SipPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/SipPricing */ "./src/pageBuilder/pricing/SipPricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\sip.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: 'Expertise to address challenges by designing and delivering complete collaboration solutions',
  titleStyle: {
    fontSize: ["3xl", "32px", "4xl"],
    px: "10px"
  },
  rowDistance: 10,
  body: [{
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    px: 4,
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/theme/cloud-computing.svg",
      title: "1600+ SIP channels",
      align: "center"
    }
  }, {
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    px: 4,
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/library/devices/cpu-1.svg",
      title: "Multiple Data Centres",
      align: "center"
    }
  }, {
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    px: 4,
    data: {
      titleSize: "md",
      textOpacity: "0.8",
      size: "96px",
      image: "/assets/images/icons/color/encryption.svg",
      title: "100% Data Security",
      align: "center"
    }
  }]
}, {
  my: 0,
  py: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_SipPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 19
      }
    })
  }],
  bg: 'light.400'
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: 8,
  py: 16,
  body: [{
    type: "image&text",
    data: {
      spacing: 0,
      image: "/assets/images/Illustrations/ClientSpecific_AppDev.svg",
      title: "Mobile access",
      flexDirection: ["column", "column", "row"],
      description: "Multiple data centre locations, allows access to your website anytime, anywhere. Improved operational efficiencies, Reduced communication-related delays and enhanced collaboration."
    }
  }, {
    type: "image&text",
    data: {
      spacing: 0,
      image: "/assets/images/Illustrations/PlatformDiversity_Firewall.svg",
      title: "Our collaborative tools",
      flexDirection: ["column", "column", "row-reverse"],
      description: "Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint), Interactive and transactional applications such as VMware VDI, and SQL."
    }
  }, {
    type: "image&text",
    data: {
      spacing: 0,
      image: "/assets/images/Illustrations/DataProtection_Wireless.svg",
      title: "Secure Channels",
      flexDirection: ["column", "column", "row"],
      description: "Ensuring completely secure network by technologies such as NAC(Network Access Control) using ISE, SourceFire, Cisco / Palo Alto /Checkpoint / Fortinet Firewall, DDOS Protection."
    }
  }]
}]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pageBuilder/pricing/SipPricing.jsx":
/*!************************************************!*\
  !*** ./src/pageBuilder/pricing/SipPricing.jsx ***!
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
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\SipPricing.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ChannelSelector = props => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Select"], {
  my: 5,
  onChange: props.change,
  focusBorderColor: "primary.500",
  value: props.channel,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }
}, __jsx("option", {
  value: "SIP-10",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 7
  }
}, "SIP-10"), __jsx("option", {
  value: "SIP-20",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 7
  }
}, "SIP-20"), __jsx("option", {
  value: "SIP-50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
}, "SIP-50"), __jsx("option", {
  value: "SIP-100",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 7
  }
}, "SIP-100"), __jsx("option", {
  value: "SIP-200",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 7
  }
}, "SIP-200"), __jsx("option", {
  value: "SIP-250",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 7
  }
}, "SIP-250"), __jsx("option", {
  value: "SIP-300",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 7
  }
}, "SIP-300"));

_c = ChannelSelector;

function SipPricing(props) {
  _s();

  const [channel, setChannel] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("SIP-20");

  const handleChange = e => {
    setChannel(e.target.value);
  };

  return __jsx("div", {
    id: "pricing",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 19
    }
  }, "Single"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 19
    }
  }, "Cluster")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabPanels"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col-lg-5 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/sip.svg",
    title: "Single Cube",
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 27
    }
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 29
    }
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Single Cube, " + channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 29
    }
  })))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 19
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 23
    }
  }, __jsx("div", {
    className: "col-lg-4 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 23
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/sip.svg",
    title: "Cluster Cube",
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 27
    }
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 29
    }
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Cluster Cube, " + channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "col-lg-4 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 27
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/sip.svg",
    title: "Cluster Cube DEH",
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 27
    }
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 29
    }
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Cluster Cube DEH, " + channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "col-lg-4 col-sm-6 col-md-6 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 27
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    icon: "/assets/images/icons/theme/sip.svg",
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 36
      }
    }, " Cluster Cube DEH ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 83
      }
    }), " ", __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 89
      }
    }, " (with Multiple DC) "), " "),
    featureList: ["AU Calling Costs Included", "Fully Managed Service", "Monthly Reporting", "*Inbound Calling Costs to 1300/13 not Included", "Inbound call rates will be provided"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 27
    }
  }, __jsx(ChannelSelector, {
    change: handleChange,
    channel: channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 29
    }
  }), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SIP As A Service",
    serviceDescription: "Cluster Cube with Multiple DC, " + channel,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 29
    }
  })))))))))));
}

_s(SipPricing, "+R1xDxIe3ys662TnUaL85xSmzww=");

_c2 = SipPricing;
/* harmony default export */ __webpack_exports__["default"] = (SipPricing);

var _c, _c2;

$RefreshReg$(_c, "ChannelSelector");
$RefreshReg$(_c2, "SipPricing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL3NpcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3ByaWNpbmcvU2lwUHJpY2luZy5qc3giXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInN0b3JhZ2UiLCJpbmZyYSIsImxvZ2dpbmciLCJiYWNrdXAiLCJkbnMiLCJwbGF0Zm9ybSIsImZpcmV3YWxsIiwiY2FsbGNlbnRlciIsIndpcmVsZXNzIiwicHJveHkiLCJob3N0aW5nIiwiY2V4Iiwic2lwIiwiYXBwZGV2Iiwic2R3YW4iLCJkciIsImFyY2hpdGVjdHVyZSIsImxvYWRCYWxhbmNlciIsIndvcmtzdGF0aW9uIiwic29jYWFzIiwid2FmYWFzIiwiZGJhYXMiLCJ3ZWJkZXYiLCJ0aXRsZSIsInRpdGxlU3R5bGUiLCJmb250U2l6ZSIsInB4Iiwicm93RGlzdGFuY2UiLCJib2R5Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YSIsInRpdGxlU2l6ZSIsInRleHRPcGFjaXR5Iiwic2l6ZSIsImltYWdlIiwiYWxpZ24iLCJteSIsInB5IiwiZ2FwIiwiYmciLCJzcGFjaW5nIiwiZmxleERpcmVjdGlvbiIsImRlc2NyaXB0aW9uIiwiQ2hhbm5lbFNlbGVjdG9yIiwicHJvcHMiLCJjaGFuZ2UiLCJjaGFubmVsIiwiU2lwUHJpY2luZyIsInNldENoYW5uZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdB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YWdlc1xcX2FwcC5qcy5hZTUxODk4MTZiY2UwNzFlNjNhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIlxyXG5tb2R1bGUuZXhwb3J0cy5zdG9yYWdlID0gc3RvcmFnZVxyXG5cclxuaW1wb3J0IGluZnJhIGZyb20gXCIuL2luZnJhXCJcclxubW9kdWxlLmV4cG9ydHMuaW5mcmEgPSBpbmZyYVxyXG5cclxuaW1wb3J0IGxvZ2dpbmcgZnJvbSAnLi9sb2dnaW5nJ1xyXG5tb2R1bGUuZXhwb3J0cy5sb2dnaW5nID0gbG9nZ2luZ1xyXG5cclxuaW1wb3J0IGJhY2t1cCBmcm9tIFwiLi9iYWNrdXBcIlxyXG5tb2R1bGUuZXhwb3J0cy5iYWNrdXAgPSBiYWNrdXBcclxuXHJcbmltcG9ydCBkbnMgZnJvbSBcIi4vZG5zXCJcclxubW9kdWxlLmV4cG9ydHMuZG5zID0gZG5zXHJcblxyXG5pbXBvcnQgcGxhdGZvcm0gZnJvbSBcIi4vcGxhdGZvcm1cIlxyXG5tb2R1bGUuZXhwb3J0cy5wbGF0Zm9ybSA9IHBsYXRmb3JtXHJcblxyXG5pbXBvcnQgZmlyZXdhbGwgZnJvbSBcIi4vZmlyZXdhbGxcIlxyXG5tb2R1bGUuZXhwb3J0cy5maXJld2FsbCA9IGZpcmV3YWxsXHJcblxyXG5pbXBvcnQgY2FsbGNlbnRlciBmcm9tIFwiLi9jb250YWN0LWNlbnRlclwiXHJcbm1vZHVsZS5leHBvcnRzLmNhbGxjZW50ZXIgPSBjYWxsY2VudGVyXHJcblxyXG5pbXBvcnQgd2lyZWxlc3MgZnJvbSAnLi93aXJlbGVzcydcclxubW9kdWxlLmV4cG9ydHMud2lyZWxlc3MgPSB3aXJlbGVzc1xyXG5cclxuaW1wb3J0IHByb3h5IGZyb20gJy4vcHJveHknXHJcbm1vZHVsZS5leHBvcnRzLnByb3h5ID0gcHJveHlcclxuXHJcbmltcG9ydCBob3N0aW5nIGZyb20gJy4vaG9zdGluZydcclxubW9kdWxlLmV4cG9ydHMuaG9zdGluZyA9IGhvc3RpbmdcclxuXHJcbmltcG9ydCBjZXggZnJvbSAnLi9jZXgnXHJcbm1vZHVsZS5leHBvcnRzLmNleCA9IGNleFxyXG5cclxuaW1wb3J0IHNpcCBmcm9tICcuL3NpcCdcclxubW9kdWxlLmV4cG9ydHMuc2lwID0gc2lwXHJcblxyXG5pbXBvcnQgYXBwZGV2IGZyb20gJy4vYXBwZGV2J1xyXG5tb2R1bGUuZXhwb3J0cy5hcHBkZXYgPSBhcHBkZXZcclxuXHJcbmltcG9ydCBzZHdhbiBmcm9tICcuL3Nkd2FuJ1xyXG5tb2R1bGUuZXhwb3J0cy5zZHdhbiA9IHNkd2FuXHJcblxyXG5pbXBvcnQgZHIgZnJvbSAnLi9kcidcclxubW9kdWxlLmV4cG9ydHMuZHIgPSBkclxyXG5cclxuaW1wb3J0IGFyY2hpdGVjdHVyZSBmcm9tICcuL2FyY2hpdGVjdHVyYWwtY29uc3VsdGFuY3knXHJcbm1vZHVsZS5leHBvcnRzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZVxyXG5cclxuaW1wb3J0IGxvYWRCYWxhbmNlciBmcm9tICcuL2xvYWRCYWxhbmNlcidcclxubW9kdWxlLmV4cG9ydHMubG9hZEJhbGFuY2VyID0gbG9hZEJhbGFuY2VyXHJcblxyXG5pbXBvcnQgd29ya3N0YXRpb24gZnJvbSAnLi93b3Jrc3RhdGlvbidcclxubW9kdWxlLmV4cG9ydHMud29ya3N0YXRpb24gPSB3b3Jrc3RhdGlvblxyXG5cclxuaW1wb3J0IHNvY2FhcyBmcm9tIFwiLi9zb2NhYXNcIlxyXG5tb2R1bGUuZXhwb3J0cy5zb2NhYXMgPSBzb2NhYXNcclxuXHJcbmltcG9ydCB3YWZhYXMgZnJvbSAnLi93YWZhYXMnXHJcbm1vZHVsZS5leHBvcnRzLndhZmFhcyA9IHdhZmFhc1xyXG5cclxuaW1wb3J0IGRiYWFzIGZyb20gJy4vZGJhYXMnXHJcbm1vZHVsZS5leHBvcnRzLmRiYWFzID0gZGJhYXNcclxuXHJcbmltcG9ydCB3ZWJkZXYgZnJvbSAnLi93ZWJkZXYnXHJcbm1vZHVsZS5leHBvcnRzLndlYmRldiA9IHdlYmRldlxyXG5cclxuIiwiaW1wb3J0IFNpcFByaWNpbmcgZnJvbSBcIi4uLy4uL3ByaWNpbmcvU2lwUHJpY2luZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6ICdFeHBlcnRpc2UgdG8gYWRkcmVzcyBjaGFsbGVuZ2VzIGJ5IGRlc2lnbmluZyBhbmQgZGVsaXZlcmluZyBjb21wbGV0ZSBjb2xsYWJvcmF0aW9uIHNvbHV0aW9ucycsXHJcbiAgICAgICAgdGl0bGVTdHlsZTp7Zm9udFNpemU6W1wiM3hsXCIsXCIzMnB4XCIsXCI0eGxcIl0scHg6XCIxMHB4XCJ9LFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiAxMCxcclxuICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIDEgLyAyLCAxIC8gM10sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIiwgcHg6IDQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE9wYWNpdHk6IFwiMC44XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI5NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvY2xvdWQtY29tcHV0aW5nLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjE2MDArIFNJUCBjaGFubmVsc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCAxIC8gMiwgMSAvIDNdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsIHB4OiA0LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiOTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvZGV2aWNlcy9jcHUtMS5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJNdWx0aXBsZSBEYXRhIENlbnRyZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFtcIjEwMCVcIiwgMSAvIDIsIDEgLyAzXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLCBweDogNCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVNpemU6IFwibWRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjhcIixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjk2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9lbmNyeXB0aW9uLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIjEwMCUgRGF0YSBTZWN1cml0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbXk6IDAsXHJcbiAgICAgICAgcHk6IDE2LFxyXG4gICAgICAgIGdhcDogMCxcclxuICAgICAgICBib2R5OiBbe1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicHJpY2luZ1wiLFxyXG4gICAgICAgICAgICBkYXRhOiA8U2lwUHJpY2luZyAvPlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGJnOiAnbGlnaHQuNDAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2h5IEJHIFVuaWZpZWQgU29sdXRpb25zP1wiLFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiA4LFxyXG4gICAgICAgIHB5OiAxNixcclxuICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UmdGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvSWxsdXN0cmF0aW9ucy9DbGllbnRTcGVjaWZpY19BcHBEZXYuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9iaWxlIGFjY2Vzc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFtcImNvbHVtblwiLCBcImNvbHVtblwiLCBcInJvd1wiXSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNdWx0aXBsZSBkYXRhIGNlbnRyZSBsb2NhdGlvbnMsIGFsbG93cyBhY2Nlc3MgdG8geW91ciB3ZWJzaXRlIGFueXRpbWUsIGFueXdoZXJlLiBJbXByb3ZlZCBvcGVyYXRpb25hbCBlZmZpY2llbmNpZXMsIFJlZHVjZWQgY29tbXVuaWNhdGlvbi1yZWxhdGVkIGRlbGF5cyBhbmQgZW5oYW5jZWQgY29sbGFib3JhdGlvbi5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlJnRleHRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvUGxhdGZvcm1EaXZlcnNpdHlfRmlyZXdhbGwuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiT3VyIGNvbGxhYm9yYXRpdmUgdG9vbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIiwgXCJjb2x1bW5cIiwgXCJyb3ctcmV2ZXJzZVwiXSxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFbWFpbCAoTVMgRXhjaGFuZ2UgYW5kIFNNVFApLCBmaWxlIHNlcnZpY2VzIChDSUZTLCBGVFApLCBkb2N1bWVudCBtYW5hZ2VtZW50KFNoYXJlUG9pbnQpLCBJbnRlcmFjdGl2ZSBhbmQgdHJhbnNhY3Rpb25hbCBhcHBsaWNhdGlvbnMgc3VjaCBhcyBWTXdhcmUgVkRJLCBhbmQgU1FMLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2UmdGV4dFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYWNpbmc6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvSWxsdXN0cmF0aW9ucy9EYXRhUHJvdGVjdGlvbl9XaXJlbGVzcy5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWN1cmUgQ2hhbm5lbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIiwgXCJjb2x1bW5cIiwgXCJyb3dcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRW5zdXJpbmcgY29tcGxldGVseSBzZWN1cmUgbmV0d29yayBieSB0ZWNobm9sb2dpZXMgc3VjaCBhcyBOQUMoTmV0d29yayBBY2Nlc3MgQ29udHJvbCkgdXNpbmcgSVNFLCBTb3VyY2VGaXJlLCBDaXNjbyAvIFBhbG8gQWx0byAvQ2hlY2twb2ludCAvIEZvcnRpbmV0IEZpcmV3YWxsLCBERE9TIFByb3RlY3Rpb24uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9XHJcbl0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgVGFicyxcclxuICBUYWJMaXN0LFxyXG4gIFRhYixcclxuICBUYWJQYW5lbCxcclxuICBUYWJQYW5lbHMsXHJcbiAgU2VsZWN0LFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcInJlYWN0LXJldmVhbC9GYWRlXCI7XHJcbmltcG9ydCB7IFByaWNpbmdDYXJkLCBQcmljaW5nUXVvdGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9QcmljaW5nQ2FyZFwiO1xyXG5cclxuXHJcbmNvbnN0IENoYW5uZWxTZWxlY3RvciA9IChwcm9wcykgPT4gKFxyXG4gICAgPFNlbGVjdCBteT17NX0gb25DaGFuZ2U9e3Byb3BzLmNoYW5nZX0gZm9jdXNCb3JkZXJDb2xvcj1cInByaW1hcnkuNTAwXCIgdmFsdWU9e3Byb3BzLmNoYW5uZWx9PlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiU0lQLTEwXCI+U0lQLTEwPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJTSVAtMjBcIj5TSVAtMjA8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNJUC01MFwiPlNJUC01MDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiU0lQLTEwMFwiPlNJUC0xMDA8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNJUC0yMDBcIj5TSVAtMjAwPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJTSVAtMjUwXCI+U0lQLTI1MDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiU0lQLTMwMFwiPlNJUC0zMDA8L29wdGlvbj5cclxuICAgIDwvU2VsZWN0PlxyXG4pXHJcblxyXG5mdW5jdGlvbiBTaXBQcmljaW5nKHByb3BzKSB7XHJcbiAgY29uc3QgW2NoYW5uZWwsIHNldENoYW5uZWxdID0gUmVhY3QudXNlU3RhdGUoXCJTSVAtMjBcIik7XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIHNldENoYW5uZWwoZS50YXJnZXQudmFsdWUpXHJcbiAgfVxyXG4gIFxyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgPFRhYnMgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJMaXN0PlxyXG4gICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NlwiPlNpbmdsZTwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NlwiPkNsdXN0ZXI8L1RhYj5cclxuICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICA8VGFiUGFuZWxzPlxyXG4gICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGR1cmF0aW9uPXs1MDB9IGJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IGNvbC1zbS02IGNvbC1tZC02IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9zaXAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2luZ2xlIEN1YmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBVSBDYWxsaW5nIENvc3RzIEluY2x1ZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnVsbHkgTWFuYWdlZCBTZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9udGhseSBSZXBvcnRpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqSW5ib3VuZCBDYWxsaW5nIENvc3RzIHRvIDEzMDAvMTMgbm90IEluY2x1ZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5ib3VuZCBjYWxsIHJhdGVzIHdpbGwgYmUgcHJvdmlkZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbFNlbGVjdG9yIGNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjaGFubmVsPXtjaGFubmVsfT48L0NoYW5uZWxTZWxlY3Rvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGUgYnV0dG9uIHNlcnZpY2VOYW1lPVwiU0lQIEFzIEEgU2VydmljZVwiIHNlcnZpY2VEZXNjcmlwdGlvbj17XCJTaW5nbGUgQ3ViZSwgXCIgKyBjaGFubmVsfT48L1ByaWNpbmdRdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkdXJhdGlvbj17NTAwfSBib3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLW1kLTYgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL3NpcC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDbHVzdGVyIEN1YmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBVSBDYWxsaW5nIENvc3RzIEluY2x1ZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnVsbHkgTWFuYWdlZCBTZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9udGhseSBSZXBvcnRpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqSW5ib3VuZCBDYWxsaW5nIENvc3RzIHRvIDEzMDAvMTMgbm90IEluY2x1ZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5ib3VuZCBjYWxsIHJhdGVzIHdpbGwgYmUgcHJvdmlkZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbFNlbGVjdG9yIGNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjaGFubmVsPXtjaGFubmVsfT48L0NoYW5uZWxTZWxlY3Rvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGUgYnV0dG9uIHNlcnZpY2VOYW1lPVwiU0lQIEFzIEEgU2VydmljZVwiIHNlcnZpY2VEZXNjcmlwdGlvbj17XCJDbHVzdGVyIEN1YmUsIFwiICsgY2hhbm5lbH0+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLW1kLTYgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL3NpcC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDbHVzdGVyIEN1YmUgREVIXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQVUgQ2FsbGluZyBDb3N0cyBJbmNsdWRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZ1bGx5IE1hbmFnZWQgU2VydmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vbnRobHkgUmVwb3J0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKkluYm91bmQgQ2FsbGluZyBDb3N0cyB0byAxMzAwLzEzIG5vdCBJbmNsdWRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluYm91bmQgY2FsbCByYXRlcyB3aWxsIGJlIHByb3ZpZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxTZWxlY3RvciBjaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2hhbm5lbD17Y2hhbm5lbH0+PC9DaGFubmVsU2VsZWN0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlIGJ1dHRvbiBzZXJ2aWNlTmFtZT1cIlNJUCBBcyBBIFNlcnZpY2VcIiBzZXJ2aWNlRGVzY3JpcHRpb249e1wiQ2x1c3RlciBDdWJlIERFSCwgXCIgKyBjaGFubmVsfT48L1ByaWNpbmdRdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLXNtLTYgY29sLW1kLTYgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL3NpcC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj4gQ2x1c3RlciBDdWJlIERFSCA8YnIvPiA8c21hbGw+ICh3aXRoIE11bHRpcGxlIERDKSA8L3NtYWxsPiA8L2Rpdj59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFVIENhbGxpbmcgQ29zdHMgSW5jbHVkZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGdWxseSBNYW5hZ2VkIFNlcnZpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNb250aGx5IFJlcG9ydGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipJbmJvdW5kIENhbGxpbmcgQ29zdHMgdG8gMTMwMC8xMyBub3QgSW5jbHVkZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmJvdW5kIGNhbGwgcmF0ZXMgd2lsbCBiZSBwcm92aWRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsU2VsZWN0b3IgY2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNoYW5uZWw9e2NoYW5uZWx9PjwvQ2hhbm5lbFNlbGVjdG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdRdW90ZSBidXR0b24gc2VydmljZU5hbWU9XCJTSVAgQXMgQSBTZXJ2aWNlXCIgc2VydmljZURlc2NyaXB0aW9uPXtcIkNsdXN0ZXIgQ3ViZSB3aXRoIE11bHRpcGxlIERDLCBcIiArIGNoYW5uZWx9PjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgIDwvVGFiUGFuZWxzPlxyXG4gICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpcFByaWNpbmc7Il0sInNvdXJjZVJvb3QiOiIifQ==