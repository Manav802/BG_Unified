webpackHotUpdate("static\\development\\pages\\solutions\\[name].js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL3NpcC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3ByaWNpbmcvU2lwUHJpY2luZy5qc3giXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsInN0b3JhZ2UiLCJpbmZyYSIsImxvZ2dpbmciLCJiYWNrdXAiLCJkbnMiLCJwbGF0Zm9ybSIsImZpcmV3YWxsIiwiY2FsbGNlbnRlciIsIndpcmVsZXNzIiwicHJveHkiLCJob3N0aW5nIiwiY2V4Iiwic2lwIiwiYXBwZGV2Iiwic2R3YW4iLCJkciIsImFyY2hpdGVjdHVyZSIsImxvYWRCYWxhbmNlciIsIndvcmtzdGF0aW9uIiwic29jYWFzIiwid2FmYWFzIiwiZGJhYXMiLCJ3ZWJkZXYiLCJ0aXRsZSIsInRpdGxlU3R5bGUiLCJmb250U2l6ZSIsInB4Iiwicm93RGlzdGFuY2UiLCJib2R5Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YSIsInRpdGxlU2l6ZSIsInRleHRPcGFjaXR5Iiwic2l6ZSIsImltYWdlIiwiYWxpZ24iLCJteSIsInB5IiwiZ2FwIiwiYmciLCJzcGFjaW5nIiwiZmxleERpcmVjdGlvbiIsImRlc2NyaXB0aW9uIiwiQ2hhbm5lbFNlbGVjdG9yIiwicHJvcHMiLCJjaGFuZ2UiLCJjaGFubmVsIiwiU2lwUHJpY2luZyIsInNldENoYW5uZWwiLCJSZWFjdCIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQUdBOztBQWpFQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVDLE9BQWYsR0FBeUJBLGdCQUF6QjtBQUdBRixNQUFNLENBQUNDLE9BQVAsQ0FBZUUsS0FBZixHQUF1QkEsY0FBdkI7QUFHQUgsTUFBTSxDQUFDQyxPQUFQLENBQWVHLE9BQWYsR0FBeUJBLGdCQUF6QjtBQUdBSixNQUFNLENBQUNDLE9BQVAsQ0FBZUksTUFBZixHQUF3QkEsZUFBeEI7QUFHQUwsTUFBTSxDQUFDQyxPQUFQLENBQWVLLEdBQWYsR0FBcUJBLFlBQXJCO0FBR0FOLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTSxRQUFmLEdBQTBCQSxpQkFBMUI7QUFHQVAsTUFBTSxDQUFDQyxPQUFQLENBQWVPLFFBQWYsR0FBMEJBLGlCQUExQjtBQUdBUixNQUFNLENBQUNDLE9BQVAsQ0FBZVEsVUFBZixHQUE0QkEsc0JBQTVCO0FBR0FULE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUyxRQUFmLEdBQTBCQSxpQkFBMUI7QUFHQVYsTUFBTSxDQUFDQyxPQUFQLENBQWVVLEtBQWYsR0FBdUJBLGNBQXZCO0FBR0FYLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVyxPQUFmLEdBQXlCQSxnQkFBekI7QUFHQVosTUFBTSxDQUFDQyxPQUFQLENBQWVZLEdBQWYsR0FBcUJBLFlBQXJCO0FBR0FiLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlYSxHQUFmLEdBQXFCQSxZQUFyQjtBQUdBZCxNQUFNLENBQUNDLE9BQVAsQ0FBZWMsTUFBZixHQUF3QkEsZUFBeEI7QUFHQWYsTUFBTSxDQUFDQyxPQUFQLENBQWVlLEtBQWYsR0FBdUJBLGNBQXZCO0FBR0FoQixNQUFNLENBQUNDLE9BQVAsQ0FBZWdCLEVBQWYsR0FBb0JBLFdBQXBCO0FBR0FqQixNQUFNLENBQUNDLE9BQVAsQ0FBZWlCLFlBQWYsR0FBOEJBLGlDQUE5QjtBQUdBbEIsTUFBTSxDQUFDQyxPQUFQLENBQWVrQixZQUFmLEdBQThCQSxxQkFBOUI7QUFHQW5CLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlbUIsV0FBZixHQUE2QkEsb0JBQTdCO0FBR0FwQixNQUFNLENBQUNDLE9BQVAsQ0FBZW9CLE1BQWYsR0FBd0JBLGVBQXhCO0FBR0FyQixNQUFNLENBQUNDLE9BQVAsQ0FBZXFCLE1BQWYsR0FBd0JBLGVBQXhCO0FBR0F0QixNQUFNLENBQUNDLE9BQVAsQ0FBZXNCLEtBQWYsR0FBdUJBLGNBQXZCO0FBR0F2QixNQUFNLENBQUNDLE9BQVAsQ0FBZXVCLE1BQWYsR0FBd0JBLGVBQXhCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQ2UsZ0VBQ1g7QUFDSUMsT0FBSyxFQUFFLDhGQURYO0FBRUlDLFlBQVUsRUFBQztBQUFDQyxZQUFRLEVBQUMsQ0FBQyxLQUFELEVBQU8sTUFBUCxFQUFjLEtBQWQsQ0FBVjtBQUErQkMsTUFBRSxFQUFDO0FBQWxDLEdBRmY7QUFHSUMsYUFBVyxFQUFFLEVBSGpCO0FBSUlDLE1BQUksRUFBRSxDQUNGO0FBQ0lDLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFJLENBQWIsRUFBZ0IsSUFBSSxDQUFwQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBRXFCSixNQUFFLEVBQUUsQ0FGekI7QUFHSUssUUFBSSxFQUFFO0FBQ0ZDLGVBQVMsRUFBRSxJQURUO0FBRUZDLGlCQUFXLEVBQUUsS0FGWDtBQUdGQyxVQUFJLEVBQUUsTUFISjtBQUlGQyxXQUFLLEVBQUUsZ0RBSkw7QUFLRlosV0FBSyxFQUFFLG9CQUxMO0FBTUZhLFdBQUssRUFBRTtBQU5MO0FBSFYsR0FERSxFQWFGO0FBQ0lQLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFJLENBQWIsRUFBZ0IsSUFBSSxDQUFwQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBRXFCSixNQUFFLEVBQUUsQ0FGekI7QUFHSUssUUFBSSxFQUFFO0FBQ0ZDLGVBQVMsRUFBRSxJQURUO0FBRUZDLGlCQUFXLEVBQUUsS0FGWDtBQUdGQyxVQUFJLEVBQUUsTUFISjtBQUlGQyxXQUFLLEVBQUUsZ0RBSkw7QUFLRlosV0FBSyxFQUFFLHVCQUxMO0FBTUZhLFdBQUssRUFBRTtBQU5MO0FBSFYsR0FiRSxFQXlCRjtBQUNJUCxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUVxQkosTUFBRSxFQUFFLENBRnpCO0FBR0lLLFFBQUksRUFBRTtBQUNGQyxlQUFTLEVBQUUsSUFEVDtBQUVGQyxpQkFBVyxFQUFFLEtBRlg7QUFHRkMsVUFBSSxFQUFFLE1BSEo7QUFJRkMsV0FBSyxFQUFFLDJDQUpMO0FBS0ZaLFdBQUssRUFBRSxvQkFMTDtBQU1GYSxXQUFLLEVBQUU7QUFOTDtBQUhWLEdBekJFO0FBSlYsQ0FEVyxFQTRDWDtBQUNJQyxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxJQUFFLEVBQUUsRUFGUjtBQUdJQyxLQUFHLEVBQUUsQ0FIVDtBQUlJWCxNQUFJLEVBQUUsQ0FBQztBQUNIQyxTQUFLLEVBQUUsTUFESjtBQUVIQyxRQUFJLEVBQUUsU0FGSDtBQUdIQyxRQUFJLEVBQUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEgsR0FBRCxDQUpWO0FBU0lTLElBQUUsRUFBRTtBQVRSLENBNUNXLEVBdURYO0FBQ0lqQixPQUFLLEVBQUUsMkJBRFg7QUFFSUksYUFBVyxFQUFFLENBRmpCO0FBR0lXLElBQUUsRUFBRSxFQUhSO0FBSUlWLE1BQUksRUFBRSxDQUNGO0FBQ0lFLFFBQUksRUFBRSxZQURWO0FBRUlDLFFBQUksRUFBRTtBQUNGVSxhQUFPLEVBQUUsQ0FEUDtBQUVGTixXQUFLLEVBQUUsd0RBRkw7QUFHRlosV0FBSyxFQUFFLGVBSEw7QUFJRm1CLG1CQUFhLEVBQUUsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixLQUFyQixDQUpiO0FBS0ZDLGlCQUFXLEVBQUU7QUFMWDtBQUZWLEdBREUsRUFXRjtBQUNJYixRQUFJLEVBQUUsWUFEVjtBQUVJQyxRQUFJLEVBQUU7QUFDRlUsYUFBTyxFQUFFLENBRFA7QUFFRk4sV0FBSyxFQUFFLDZEQUZMO0FBR0ZaLFdBQUssRUFBRSx5QkFITDtBQUlGbUIsbUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLGFBQXJCLENBSmI7QUFLRkMsaUJBQVcsRUFBRTtBQUxYO0FBRlYsR0FYRSxFQXFCRjtBQUNJYixRQUFJLEVBQUUsWUFEVjtBQUVJQyxRQUFJLEVBQUU7QUFDRlUsYUFBTyxFQUFFLENBRFA7QUFFRk4sV0FBSyxFQUFFLDBEQUZMO0FBR0ZaLFdBQUssRUFBRSxpQkFITDtBQUlGbUIsbUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLENBSmI7QUFLRkMsaUJBQVcsRUFBRTtBQUxYO0FBRlYsR0FyQkU7QUFKVixDQXZEVyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFRQTtBQUNBOztBQUdBLE1BQU1DLGVBQWUsR0FBSUMsS0FBRCxJQUNwQixNQUFDLHNEQUFEO0FBQVEsSUFBRSxFQUFFLENBQVo7QUFBZSxVQUFRLEVBQUVBLEtBQUssQ0FBQ0MsTUFBL0I7QUFBdUMsa0JBQWdCLEVBQUMsYUFBeEQ7QUFBc0UsT0FBSyxFQUFFRCxLQUFLLENBQUNFLE9BQW5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFRLE9BQUssRUFBQyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQVEsT0FBSyxFQUFDLFFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLEVBR0U7QUFBUSxPQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsRUFJRTtBQUFRLE9BQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixFQUtFO0FBQVEsT0FBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxGLEVBTUU7QUFBUSxPQUFLLEVBQUMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTkYsRUFPRTtBQUFRLE9BQUssRUFBQyxTQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFQRixDQURKOztLQUFNSCxlOztBQVlOLFNBQVNJLFVBQVQsQ0FBb0JILEtBQXBCLEVBQTJCO0FBQUE7O0FBQ3pCLFFBQU0sQ0FBQ0UsT0FBRCxFQUFVRSxVQUFWLElBQXdCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsUUFBZixDQUE5Qjs7QUFDQSxRQUFNQyxZQUFZLEdBQUlDLENBQUQsSUFBTztBQUMxQkosY0FBVSxDQUFDSSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFWO0FBQ0QsR0FGRDs7QUFJQSxTQUNNO0FBQUssTUFBRSxFQUFDLFNBQVI7QUFBa0IsYUFBUyxFQUFDLFdBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQyxtREFBRDtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsQ0FERixFQU1FLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVSxhQUFTLEVBQUMsTUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUUsR0FBaEI7QUFBcUIsVUFBTSxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQ0UsUUFBSSxFQUFDLG9DQURQO0FBRUUsU0FBSyxFQUFDLGFBRlI7QUFHRSxlQUFXLEVBQUUsQ0FDWCwyQkFEVyxFQUVYLHVCQUZXLEVBR1gsbUJBSFcsRUFJWCxnREFKVyxFQUtYLHFDQUxXLENBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFLE1BQUMsZUFBRDtBQUFpQixVQUFNLEVBQUVILFlBQXpCO0FBQXVDLFdBQU8sRUFBRUwsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQywwRUFBRDtBQUFjLFVBQU0sTUFBcEI7QUFBcUIsZUFBVyxFQUFDLGtCQUFqQztBQUFvRCxzQkFBa0IsRUFBRSxrQkFBa0JBLE9BQTFGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURGLENBREYsQ0FERixDQURGLENBREYsRUF1QkUsTUFBQyx3REFBRDtBQUFVLGFBQVMsRUFBQyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRSxHQUFoQjtBQUFxQixVQUFNLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx1Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUVBQUQ7QUFDRSxRQUFJLEVBQUMsb0NBRFA7QUFFRSxTQUFLLEVBQUMsY0FGUjtBQUdFLGVBQVcsRUFBRSxDQUNYLDJCQURXLEVBRVgsdUJBRlcsRUFHWCxtQkFIVyxFQUlYLGdEQUpXLEVBS1gscUNBTFcsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxlQUFEO0FBQWlCLFVBQU0sRUFBRUssWUFBekI7QUFBdUMsV0FBTyxFQUFFTCxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRSxNQUFDLDBFQUFEO0FBQWMsVUFBTSxNQUFwQjtBQUFxQixlQUFXLEVBQUMsa0JBQWpDO0FBQW9ELHNCQUFrQixFQUFFLG1CQUFtQkEsT0FBM0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREosQ0FEQSxFQWlCSTtBQUFLLGFBQVMsRUFBQyxpQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0EsTUFBQyx5RUFBRDtBQUNFLFFBQUksRUFBQyxvQ0FEUDtBQUVFLFNBQUssRUFBQyxrQkFGUjtBQUdFLGVBQVcsRUFBRSxDQUNYLDJCQURXLEVBRVgsdUJBRlcsRUFHWCxtQkFIVyxFQUlYLGdEQUpXLEVBS1gscUNBTFcsQ0FIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBV0UsTUFBQyxlQUFEO0FBQWlCLFVBQU0sRUFBRUssWUFBekI7QUFBdUMsV0FBTyxFQUFFTCxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBWEYsRUFZRSxNQUFDLDBFQUFEO0FBQWMsVUFBTSxNQUFwQjtBQUFxQixlQUFXLEVBQUMsa0JBQWpDO0FBQW9ELHNCQUFrQixFQUFFLHVCQUF1QkEsT0FBL0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVpGLENBREEsQ0FqQkosRUFpQ0k7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMseUVBQUQ7QUFDRSxRQUFJLEVBQUMsb0NBRFA7QUFFRSxTQUFLLEVBQUU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUErQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQS9DLE9BQXFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQXJELE1BRlQ7QUFHRSxlQUFXLEVBQUUsQ0FDWCwyQkFEVyxFQUVYLHVCQUZXLEVBR1gsbUJBSFcsRUFJWCxnREFKVyxFQUtYLHFDQUxXLENBSGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVdFLE1BQUMsZUFBRDtBQUFpQixVQUFNLEVBQUVLLFlBQXpCO0FBQXVDLFdBQU8sRUFBRUwsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBWUUsTUFBQywwRUFBRDtBQUFjLFVBQU0sTUFBcEI7QUFBcUIsZUFBVyxFQUFDLGtCQUFqQztBQUFvRCxzQkFBa0IsRUFBRSxvQ0FBb0NBLE9BQTVHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFaRixDQURBLENBakNKLENBREYsQ0FERixDQXZCRixDQU5GLENBREYsQ0FERixDQURGLENBRE47QUE2RkQ7O0dBbkdRQyxVOztNQUFBQSxVO0FBcUdNQSx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29sdXRpb25zXFxbbmFtZV0uanMuYWU1MTg5ODE2YmNlMDcxZTYzYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCJcclxubW9kdWxlLmV4cG9ydHMuc3RvcmFnZSA9IHN0b3JhZ2VcclxuXHJcbmltcG9ydCBpbmZyYSBmcm9tIFwiLi9pbmZyYVwiXHJcbm1vZHVsZS5leHBvcnRzLmluZnJhID0gaW5mcmFcclxuXHJcbmltcG9ydCBsb2dnaW5nIGZyb20gJy4vbG9nZ2luZydcclxubW9kdWxlLmV4cG9ydHMubG9nZ2luZyA9IGxvZ2dpbmdcclxuXHJcbmltcG9ydCBiYWNrdXAgZnJvbSBcIi4vYmFja3VwXCJcclxubW9kdWxlLmV4cG9ydHMuYmFja3VwID0gYmFja3VwXHJcblxyXG5pbXBvcnQgZG5zIGZyb20gXCIuL2Ruc1wiXHJcbm1vZHVsZS5leHBvcnRzLmRucyA9IGRuc1xyXG5cclxuaW1wb3J0IHBsYXRmb3JtIGZyb20gXCIuL3BsYXRmb3JtXCJcclxubW9kdWxlLmV4cG9ydHMucGxhdGZvcm0gPSBwbGF0Zm9ybVxyXG5cclxuaW1wb3J0IGZpcmV3YWxsIGZyb20gXCIuL2ZpcmV3YWxsXCJcclxubW9kdWxlLmV4cG9ydHMuZmlyZXdhbGwgPSBmaXJld2FsbFxyXG5cclxuaW1wb3J0IGNhbGxjZW50ZXIgZnJvbSBcIi4vY29udGFjdC1jZW50ZXJcIlxyXG5tb2R1bGUuZXhwb3J0cy5jYWxsY2VudGVyID0gY2FsbGNlbnRlclxyXG5cclxuaW1wb3J0IHdpcmVsZXNzIGZyb20gJy4vd2lyZWxlc3MnXHJcbm1vZHVsZS5leHBvcnRzLndpcmVsZXNzID0gd2lyZWxlc3NcclxuXHJcbmltcG9ydCBwcm94eSBmcm9tICcuL3Byb3h5J1xyXG5tb2R1bGUuZXhwb3J0cy5wcm94eSA9IHByb3h5XHJcblxyXG5pbXBvcnQgaG9zdGluZyBmcm9tICcuL2hvc3RpbmcnXHJcbm1vZHVsZS5leHBvcnRzLmhvc3RpbmcgPSBob3N0aW5nXHJcblxyXG5pbXBvcnQgY2V4IGZyb20gJy4vY2V4J1xyXG5tb2R1bGUuZXhwb3J0cy5jZXggPSBjZXhcclxuXHJcbmltcG9ydCBzaXAgZnJvbSAnLi9zaXAnXHJcbm1vZHVsZS5leHBvcnRzLnNpcCA9IHNpcFxyXG5cclxuaW1wb3J0IGFwcGRldiBmcm9tICcuL2FwcGRldidcclxubW9kdWxlLmV4cG9ydHMuYXBwZGV2ID0gYXBwZGV2XHJcblxyXG5pbXBvcnQgc2R3YW4gZnJvbSAnLi9zZHdhbidcclxubW9kdWxlLmV4cG9ydHMuc2R3YW4gPSBzZHdhblxyXG5cclxuaW1wb3J0IGRyIGZyb20gJy4vZHInXHJcbm1vZHVsZS5leHBvcnRzLmRyID0gZHJcclxuXHJcbmltcG9ydCBhcmNoaXRlY3R1cmUgZnJvbSAnLi9hcmNoaXRlY3R1cmFsLWNvbnN1bHRhbmN5J1xyXG5tb2R1bGUuZXhwb3J0cy5hcmNoaXRlY3R1cmUgPSBhcmNoaXRlY3R1cmVcclxuXHJcbmltcG9ydCBsb2FkQmFsYW5jZXIgZnJvbSAnLi9sb2FkQmFsYW5jZXInXHJcbm1vZHVsZS5leHBvcnRzLmxvYWRCYWxhbmNlciA9IGxvYWRCYWxhbmNlclxyXG5cclxuaW1wb3J0IHdvcmtzdGF0aW9uIGZyb20gJy4vd29ya3N0YXRpb24nXHJcbm1vZHVsZS5leHBvcnRzLndvcmtzdGF0aW9uID0gd29ya3N0YXRpb25cclxuXHJcbmltcG9ydCBzb2NhYXMgZnJvbSBcIi4vc29jYWFzXCJcclxubW9kdWxlLmV4cG9ydHMuc29jYWFzID0gc29jYWFzXHJcblxyXG5pbXBvcnQgd2FmYWFzIGZyb20gJy4vd2FmYWFzJ1xyXG5tb2R1bGUuZXhwb3J0cy53YWZhYXMgPSB3YWZhYXNcclxuXHJcbmltcG9ydCBkYmFhcyBmcm9tICcuL2RiYWFzJ1xyXG5tb2R1bGUuZXhwb3J0cy5kYmFhcyA9IGRiYWFzXHJcblxyXG5pbXBvcnQgd2ViZGV2IGZyb20gJy4vd2ViZGV2J1xyXG5tb2R1bGUuZXhwb3J0cy53ZWJkZXYgPSB3ZWJkZXZcclxuXHJcbiIsImltcG9ydCBTaXBQcmljaW5nIGZyb20gXCIuLi8uLi9wcmljaW5nL1NpcFByaWNpbmdcIjtcclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiAnRXhwZXJ0aXNlIHRvIGFkZHJlc3MgY2hhbGxlbmdlcyBieSBkZXNpZ25pbmcgYW5kIGRlbGl2ZXJpbmcgY29tcGxldGUgY29sbGFib3JhdGlvbiBzb2x1dGlvbnMnLFxyXG4gICAgICAgIHRpdGxlU3R5bGU6e2ZvbnRTaXplOltcIjN4bFwiLFwiMzJweFwiLFwiNHhsXCJdLHB4OlwiMTBweFwifSxcclxuICAgICAgICByb3dEaXN0YW5jZTogMTAsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCAxIC8gMiwgMSAvIDNdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsIHB4OiA0LFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiOTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2Nsb3VkLWNvbXB1dGluZy5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIxNjAwKyBTSVAgY2hhbm5lbHNcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFtcIjEwMCVcIiwgMSAvIDIsIDEgLyAzXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLCBweDogNCxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVNpemU6IFwibWRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjhcIixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjk2cHhcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2RldmljZXMvY3B1LTEuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTXVsdGlwbGUgRGF0YSBDZW50cmVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIDEgLyAyLCAxIC8gM10sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIiwgcHg6IDQsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE9wYWNpdHk6IFwiMC44XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI5NnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY29sb3IvZW5jcnlwdGlvbi5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCIxMDAlIERhdGEgU2VjdXJpdHlcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG15OiAwLFxyXG4gICAgICAgIHB5OiAxNixcclxuICAgICAgICBnYXA6IDAsXHJcbiAgICAgICAgYm9keTogW3tcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInByaWNpbmdcIixcclxuICAgICAgICAgICAgZGF0YTogPFNpcFByaWNpbmcgLz5cclxuICAgICAgICB9XSxcclxuICAgICAgICBiZzogJ2xpZ2h0LjQwMCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldoeSBCRyBVbmlmaWVkIFNvbHV0aW9ucz9cIixcclxuICAgICAgICByb3dEaXN0YW5jZTogOCxcclxuICAgICAgICBweTogMTYsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlJnRleHRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvQ2xpZW50U3BlY2lmaWNfQXBwRGV2LnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1vYmlsZSBhY2Nlc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBbXCJjb2x1bW5cIiwgXCJjb2x1bW5cIiwgXCJyb3dcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTXVsdGlwbGUgZGF0YSBjZW50cmUgbG9jYXRpb25zLCBhbGxvd3MgYWNjZXNzIHRvIHlvdXIgd2Vic2l0ZSBhbnl0aW1lLCBhbnl3aGVyZS4gSW1wcm92ZWQgb3BlcmF0aW9uYWwgZWZmaWNpZW5jaWVzLCBSZWR1Y2VkIGNvbW11bmljYXRpb24tcmVsYXRlZCBkZWxheXMgYW5kIGVuaGFuY2VkIGNvbGxhYm9yYXRpb24uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZSZ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhY2luZzogMCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL1BsYXRmb3JtRGl2ZXJzaXR5X0ZpcmV3YWxsLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIk91ciBjb2xsYWJvcmF0aXZlIHRvb2xzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogW1wiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwicm93LXJldmVyc2VcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRW1haWwgKE1TIEV4Y2hhbmdlIGFuZCBTTVRQKSwgZmlsZSBzZXJ2aWNlcyAoQ0lGUywgRlRQKSwgZG9jdW1lbnQgbWFuYWdlbWVudChTaGFyZVBvaW50KSwgSW50ZXJhY3RpdmUgYW5kIHRyYW5zYWN0aW9uYWwgYXBwbGljYXRpb25zIHN1Y2ggYXMgVk13YXJlIFZESSwgYW5kIFNRTC5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlJnRleHRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvRGF0YVByb3RlY3Rpb25fV2lyZWxlc3Muc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VjdXJlIENoYW5uZWxzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogW1wiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwicm93XCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkVuc3VyaW5nIGNvbXBsZXRlbHkgc2VjdXJlIG5ldHdvcmsgYnkgdGVjaG5vbG9naWVzIHN1Y2ggYXMgTkFDKE5ldHdvcmsgQWNjZXNzIENvbnRyb2wpIHVzaW5nIElTRSwgU291cmNlRmlyZSwgQ2lzY28gLyBQYWxvIEFsdG8gL0NoZWNrcG9pbnQgLyBGb3J0aW5ldCBGaXJld2FsbCwgRERPUyBQcm90ZWN0aW9uLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gIFRhYnMsXHJcbiAgVGFiTGlzdCxcclxuICBUYWIsXHJcbiAgVGFiUGFuZWwsXHJcbiAgVGFiUGFuZWxzLFxyXG4gIFNlbGVjdCxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJyZWFjdC1yZXZlYWwvRmFkZVwiO1xyXG5pbXBvcnQgeyBQcmljaW5nQ2FyZCwgUHJpY2luZ1F1b3RlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUHJpY2luZ0NhcmRcIjtcclxuXHJcblxyXG5jb25zdCBDaGFubmVsU2VsZWN0b3IgPSAocHJvcHMpID0+IChcclxuICAgIDxTZWxlY3QgbXk9ezV9IG9uQ2hhbmdlPXtwcm9wcy5jaGFuZ2V9IGZvY3VzQm9yZGVyQ29sb3I9XCJwcmltYXJ5LjUwMFwiIHZhbHVlPXtwcm9wcy5jaGFubmVsfT5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNJUC0xMFwiPlNJUC0xMDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiU0lQLTIwXCI+U0lQLTIwPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJTSVAtNTBcIj5TSVAtNTA8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNJUC0xMDBcIj5TSVAtMTAwPC9vcHRpb24+XHJcbiAgICAgIDxvcHRpb24gdmFsdWU9XCJTSVAtMjAwXCI+U0lQLTIwMDwvb3B0aW9uPlxyXG4gICAgICA8b3B0aW9uIHZhbHVlPVwiU0lQLTI1MFwiPlNJUC0yNTA8L29wdGlvbj5cclxuICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNJUC0zMDBcIj5TSVAtMzAwPC9vcHRpb24+XHJcbiAgICA8L1NlbGVjdD5cclxuKVxyXG5cclxuZnVuY3Rpb24gU2lwUHJpY2luZyhwcm9wcykge1xyXG4gIGNvbnN0IFtjaGFubmVsLCBzZXRDaGFubmVsXSA9IFJlYWN0LnVzZVN0YXRlKFwiU0lQLTIwXCIpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBzZXRDaGFubmVsKGUudGFyZ2V0LnZhbHVlKVxyXG4gIH1cclxuICBcclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmljaW5nXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMlwiPlxyXG4gICAgICAgICAgICAgIDxUYWJzIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFiTGlzdD5cclxuICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJweS00IHB4LTUgZGlzcGxheTZcIj5TaW5nbGU8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJweS00IHB4LTUgZGlzcGxheTZcIj5DbHVzdGVyPC9UYWI+XHJcbiAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgPFRhYlBhbmVscz5cclxuICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkdXJhdGlvbj17NTAwfSBib3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBjb2wtc20tNiBjb2wtbWQtNiBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvc2lwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpbmdsZSBDdWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQVUgQ2FsbGluZyBDb3N0cyBJbmNsdWRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZ1bGx5IE1hbmFnZWQgU2VydmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vbnRobHkgUmVwb3J0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKkluYm91bmQgQ2FsbGluZyBDb3N0cyB0byAxMzAwLzEzIG5vdCBJbmNsdWRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluYm91bmQgY2FsbCByYXRlcyB3aWxsIGJlIHByb3ZpZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxTZWxlY3RvciBjaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2hhbm5lbD17Y2hhbm5lbH0+PC9DaGFubmVsU2VsZWN0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlIGJ1dHRvbiBzZXJ2aWNlTmFtZT1cIlNJUCBBcyBBIFNlcnZpY2VcIiBzZXJ2aWNlRGVzY3JpcHRpb249e1wiU2luZ2xlIEN1YmUsIFwiICsgY2hhbm5lbH0+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgZHVyYXRpb249ezUwMH0gYm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC1tZC02IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9zaXAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2x1c3RlciBDdWJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQVUgQ2FsbGluZyBDb3N0cyBJbmNsdWRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkZ1bGx5IE1hbmFnZWQgU2VydmljZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk1vbnRobHkgUmVwb3J0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKkluYm91bmQgQ2FsbGluZyBDb3N0cyB0byAxMzAwLzEzIG5vdCBJbmNsdWRlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluYm91bmQgY2FsbCByYXRlcyB3aWxsIGJlIHByb3ZpZGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoYW5uZWxTZWxlY3RvciBjaGFuZ2U9e2hhbmRsZUNoYW5nZX0gY2hhbm5lbD17Y2hhbm5lbH0+PC9DaGFubmVsU2VsZWN0b3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlIGJ1dHRvbiBzZXJ2aWNlTmFtZT1cIlNJUCBBcyBBIFNlcnZpY2VcIiBzZXJ2aWNlRGVzY3JpcHRpb249e1wiQ2x1c3RlciBDdWJlLCBcIiArIGNoYW5uZWx9PjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC1tZC02IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9zaXAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2x1c3RlciBDdWJlIERFSFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFVIENhbGxpbmcgQ29zdHMgSW5jbHVkZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGdWxseSBNYW5hZ2VkIFNlcnZpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNb250aGx5IFJlcG9ydGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIipJbmJvdW5kIENhbGxpbmcgQ29zdHMgdG8gMTMwMC8xMyBub3QgSW5jbHVkZWRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmJvdW5kIGNhbGwgcmF0ZXMgd2lsbCBiZSBwcm92aWRlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGFubmVsU2VsZWN0b3IgY2hhbmdlPXtoYW5kbGVDaGFuZ2V9IGNoYW5uZWw9e2NoYW5uZWx9PjwvQ2hhbm5lbFNlbGVjdG9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdRdW90ZSBidXR0b24gc2VydmljZU5hbWU9XCJTSVAgQXMgQSBTZXJ2aWNlXCIgc2VydmljZURlc2NyaXB0aW9uPXtcIkNsdXN0ZXIgQ3ViZSBERUgsIFwiICsgY2hhbm5lbH0+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IGNvbC1zbS02IGNvbC1tZC02IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9zaXAuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+IENsdXN0ZXIgQ3ViZSBERUggPGJyLz4gPHNtYWxsPiAod2l0aCBNdWx0aXBsZSBEQykgPC9zbWFsbD4gPC9kaXY+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBVSBDYWxsaW5nIENvc3RzIEluY2x1ZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnVsbHkgTWFuYWdlZCBTZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTW9udGhseSBSZXBvcnRpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqSW5ib3VuZCBDYWxsaW5nIENvc3RzIHRvIDEzMDAvMTMgbm90IEluY2x1ZGVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5ib3VuZCBjYWxsIHJhdGVzIHdpbGwgYmUgcHJvdmlkZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hhbm5lbFNlbGVjdG9yIGNoYW5nZT17aGFuZGxlQ2hhbmdlfSBjaGFubmVsPXtjaGFubmVsfT48L0NoYW5uZWxTZWxlY3Rvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGUgYnV0dG9uIHNlcnZpY2VOYW1lPVwiU0lQIEFzIEEgU2VydmljZVwiIHNlcnZpY2VEZXNjcmlwdGlvbj17XCJDbHVzdGVyIEN1YmUgd2l0aCBNdWx0aXBsZSBEQywgXCIgKyBjaGFubmVsfT48L1ByaWNpbmdRdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICA8L1RhYlBhbmVscz5cclxuICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaXBQcmljaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=