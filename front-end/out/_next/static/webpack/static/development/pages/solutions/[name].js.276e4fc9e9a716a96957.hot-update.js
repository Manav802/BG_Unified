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

/***/ "./src/pageBuilder/pages/solutions/sdwan.jsx":
/*!***************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/sdwan.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_SdwanPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/SdwanPricing */ "./src/pageBuilder/pricing/SdwanPricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\sdwan.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  py: [0, 4],
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_SdwanPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 19
      }
    })
  }, {
    type: "content",
    data: [{
      text: "A virtual WAN architecture, allowing firms or companies to leverage any combination of services, including LTE, VoLTE, Broadband services, WiFi Services etc. to securely connect users to applications. SD-WAN transforms the way a particular network supports and interacts with enterprise applications.",
      textAlign: "center"
    }]
  }]
}, {
  title: "Find out How BGUS SD-WAN will improve your network:",
  description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure and AWS.",
  descriptionStyle: {
    px: 0
  },
  gap: 10,
  rowDistance: 8,
  body: [{
    py: 4,
    width: ["100%", "100%", 1 / 2],
    type: "feature2",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/mobile.svg",
      title: "Virtual Flexibility",
      align: "left",
      size: "50px",
      description: "Industry’s only multi-gigabit virtual WAN optimization solution and the only products that support every major hypervisor. Email (MS Exchange and SMTP), file services (CIFS, FTP), document management(SharePoint)."
    }
  }, {
    py: 4,
    width: ["100%", "100%", 1 / 2],
    type: "feature2",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/tags.svg",
      title: "Diversifying Applications",
      align: "left",
      size: "50px",
      description: "Silver Peak/ Riverbed’s WAN optimization solution works on all applications, regardless of transport protocol or version. Interactive and transactional applications such as VMware VDI, and SQL."
    }
  }, {
    py: 4,
    width: ["100%", "100%", 1 / 2],
    type: "feature2",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/data-server.svg",
      title: "Storage Centralization",
      align: "left",
      size: "50px",
      description: " Fast, Reliable and Increasingly efficient centralizing servers and storage offers significant cost, management, security and compliance benefits. Detects, isolates notifies and corrects faults encountered in the network."
    }
  }, {
    py: 4,
    width: ["100%", "100%", 1 / 2],
    type: "feature2",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/lock.svg",
      title: "Security Guaranteed",
      align: "left",
      size: "50px",
      description: "All without risk of corrupting data or altering behaviour. No plug-ins are required, which expedites deployment and saves both time and money. Fast, Reliable and Increasingly Efficient."
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

/***/ "./src/pageBuilder/pricing/SdwanPricing.jsx":
/*!**************************************************!*\
  !*** ./src/pageBuilder/pricing/SdwanPricing.jsx ***!
  \**************************************************/
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
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\SdwanPricing.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function SdwanPricing(props) {
  const features = ["High-performance routes", "Fully Managed Service"];
  return __jsx("div", {
    id: "pricing",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tabs"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: "py-4 px-5 display6 ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }, "Physical"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Tab"], {
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, "Virtual")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabPanels"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 37
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-lg-5 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    featureList: features,
    icon: "/assets/images/icons/theme/globe.svg",
    title: "Single",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "d-flex btn align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 57
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SD-WAN Optimizations As A Service",
    serviceDescription: "Physical, Single",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 61
    }
  })))), __jsx("div", {
    className: "col-lg-5 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    featureList: features,
    icon: "/assets/images/icons/theme/globe.svg",
    title: "Cluster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "d-flex btn align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 57
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SD-WAN Optimizations As A Service",
    serviceDescription: "Physical, Cluster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 61
    }
  }))))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["TabPanel"], {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 37
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-lg-5 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    featureList: features,
    icon: "/assets/images/icons/theme/globe.svg",
    title: "Single",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "d-flex btn align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 57
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SD-WAN Optimizations As A Service",
    serviceDescription: "Virtual, Single",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 61
    }
  })))), __jsx("div", {
    className: "col-lg-5 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    featureList: features,
    icon: "/assets/images/icons/theme/globe.svg",
    title: "Cluster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "d-flex btn align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 57
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    button: true,
    serviceName: "SD-WAN Optimizations As A Service",
    serviceDescription: "Virtual, Cluster",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 61
    }
  }))))))))), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }))));
}

_c = SdwanPricing;
/* harmony default export */ __webpack_exports__["default"] = (SdwanPricing);

var _c;

$RefreshReg$(_c, "SdwanPricing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL3Nkd2FuLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcHJpY2luZy9TZHdhblByaWNpbmcuanN4Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzdG9yYWdlIiwiaW5mcmEiLCJsb2dnaW5nIiwiYmFja3VwIiwiZG5zIiwicGxhdGZvcm0iLCJmaXJld2FsbCIsImNhbGxjZW50ZXIiLCJ3aXJlbGVzcyIsInByb3h5IiwiaG9zdGluZyIsImFwcGRldiIsInNkd2FuIiwiZHIiLCJhcmNoaXRlY3R1cmUiLCJsb2FkQmFsYW5jZXIiLCJ3b3Jrc3RhdGlvbiIsInNvY2FhcyIsIndhZmFhcyIsImRiYWFzIiwid2ViZGV2IiwicHkiLCJnYXAiLCJib2R5Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YSIsInRleHQiLCJ0ZXh0QWxpZ24iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25TdHlsZSIsInB4Iiwicm93RGlzdGFuY2UiLCJ0aXRsZVNpemUiLCJ0aXRsZUZvbnQiLCJ0ZXh0T3BhY2l0eSIsImltYWdlIiwiYWxpZ24iLCJzaXplIiwiU2R3YW5QcmljaW5nIiwicHJvcHMiLCJmZWF0dXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUEzREFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQUFmLEdBQXlCQSxnQkFBekI7QUFHQUYsTUFBTSxDQUFDQyxPQUFQLENBQWVFLEtBQWYsR0FBdUJBLGNBQXZCO0FBR0FILE1B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Z0dJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoR0osQ0FESixDQURKLENBRFo7QUF3R0g7O0tBMUdRRixZO0FBNEdNQSwyRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29sdXRpb25zXFxbbmFtZV0uanMuMjc2ZTRmYzllOWE3MTZhOTY5NTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCJcclxubW9kdWxlLmV4cG9ydHMuc3RvcmFnZSA9IHN0b3JhZ2VcclxuXHJcbmltcG9ydCBpbmZyYSBmcm9tIFwiLi9pbmZyYVwiXHJcbm1vZHVsZS5leHBvcnRzLmluZnJhID0gaW5mcmFcclxuXHJcbmltcG9ydCBsb2dnaW5nIGZyb20gJy4vbG9nZ2luZydcclxubW9kdWxlLmV4cG9ydHMubG9nZ2luZyA9IGxvZ2dpbmdcclxuXHJcbmltcG9ydCBiYWNrdXAgZnJvbSBcIi4vYmFja3VwXCJcclxubW9kdWxlLmV4cG9ydHMuYmFja3VwID0gYmFja3VwXHJcblxyXG5pbXBvcnQgZG5zIGZyb20gXCIuL2Ruc1wiXHJcbm1vZHVsZS5leHBvcnRzLmRucyA9IGRuc1xyXG5cclxuaW1wb3J0IHBsYXRmb3JtIGZyb20gXCIuL3BsYXRmb3JtXCJcclxubW9kdWxlLmV4cG9ydHMucGxhdGZvcm0gPSBwbGF0Zm9ybVxyXG5cclxuaW1wb3J0IGZpcmV3YWxsIGZyb20gXCIuL2ZpcmV3YWxsXCJcclxubW9kdWxlLmV4cG9ydHMuZmlyZXdhbGwgPSBmaXJld2FsbFxyXG5cclxuaW1wb3J0IGNhbGxjZW50ZXIgZnJvbSBcIi4vY29udGFjdC1jZW50ZXJcIlxyXG5tb2R1bGUuZXhwb3J0cy5jYWxsY2VudGVyID0gY2FsbGNlbnRlclxyXG5cclxuaW1wb3J0IHdpcmVsZXNzIGZyb20gJy4vd2lyZWxlc3MnXHJcbm1vZHVsZS5leHBvcnRzLndpcmVsZXNzID0gd2lyZWxlc3NcclxuXHJcbmltcG9ydCBwcm94eSBmcm9tICcuL3Byb3h5J1xyXG5tb2R1bGUuZXhwb3J0cy5wcm94eSA9IHByb3h5XHJcblxyXG5pbXBvcnQgaG9zdGluZyBmcm9tICcuL2hvc3RpbmcnXHJcbm1vZHVsZS5leHBvcnRzLmhvc3RpbmcgPSBob3N0aW5nXHJcblxyXG5pbXBvcnQgYXBwZGV2IGZyb20gJy4vYXBwZGV2J1xyXG5tb2R1bGUuZXhwb3J0cy5hcHBkZXYgPSBhcHBkZXZcclxuXHJcbmltcG9ydCBzZHdhbiBmcm9tICcuL3Nkd2FuJ1xyXG5tb2R1bGUuZXhwb3J0cy5zZHdhbiA9IHNkd2FuXHJcblxyXG5pbXBvcnQgZHIgZnJvbSAnLi9kcidcclxubW9kdWxlLmV4cG9ydHMuZHIgPSBkclxyXG5cclxuaW1wb3J0IGFyY2hpdGVjdHVyZSBmcm9tICcuL2FyY2hpdGVjdHVyYWwtY29uc3VsdGFuY3knXHJcbm1vZHVsZS5leHBvcnRzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZVxyXG5cclxuaW1wb3J0IGxvYWRCYWxhbmNlciBmcm9tICcuL2xvYWRCYWxhbmNlcidcclxubW9kdWxlLmV4cG9ydHMubG9hZEJhbGFuY2VyID0gbG9hZEJhbGFuY2VyXHJcblxyXG5pbXBvcnQgd29ya3N0YXRpb24gZnJvbSAnLi93b3Jrc3RhdGlvbidcclxubW9kdWxlLmV4cG9ydHMud29ya3N0YXRpb24gPSB3b3Jrc3RhdGlvblxyXG5cclxuaW1wb3J0IHNvY2FhcyBmcm9tIFwiLi9zb2NhYXNcIlxyXG5tb2R1bGUuZXhwb3J0cy5zb2NhYXMgPSBzb2NhYXNcclxuXHJcbmltcG9ydCB3YWZhYXMgZnJvbSAnLi93YWZhYXMnXHJcbm1vZHVsZS5leHBvcnRzLndhZmFhcyA9IHdhZmFhc1xyXG5cclxuaW1wb3J0IGRiYWFzIGZyb20gJy4vZGJhYXMnXHJcbm1vZHVsZS5leHBvcnRzLmRiYWFzID0gZGJhYXNcclxuXHJcbmltcG9ydCB3ZWJkZXYgZnJvbSAnLi93ZWJkZXYnXHJcbm1vZHVsZS5leHBvcnRzLndlYmRldiA9IHdlYmRldlxyXG5cclxuIiwiaW1wb3J0IFNkd2FuUHJpY2luZyBmcm9tIFwiLi4vLi4vcHJpY2luZy9TZHdhblByaWNpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBweTogWzAsIDRdLFxyXG4gICAgICAgIGdhcDogMCxcclxuICAgICAgICBib2R5OiBbe1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicHJpY2luZ1wiLFxyXG4gICAgICAgICAgICBkYXRhOiA8U2R3YW5QcmljaW5nIC8+XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiY29udGVudFwiLFxyXG4gICAgICAgICAgICBkYXRhOlt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkEgdmlydHVhbCBXQU4gYXJjaGl0ZWN0dXJlLCBhbGxvd2luZyBmaXJtcyBvciBjb21wYW5pZXMgdG8gbGV2ZXJhZ2UgYW55IGNvbWJpbmF0aW9uIG9mIHNlcnZpY2VzLCBpbmNsdWRpbmcgTFRFLCBWb0xURSwgQnJvYWRiYW5kIHNlcnZpY2VzLCBXaUZpIFNlcnZpY2VzIGV0Yy4gdG8gc2VjdXJlbHkgY29ubmVjdCB1c2VycyB0byBhcHBsaWNhdGlvbnMuIFNELVdBTiB0cmFuc2Zvcm1zIHRoZSB3YXkgYSBwYXJ0aWN1bGFyIG5ldHdvcmsgc3VwcG9ydHMgYW5kIGludGVyYWN0cyB3aXRoIGVudGVycHJpc2UgYXBwbGljYXRpb25zLlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJGaW5kIG91dCBIb3cgQkdVUyBTRC1XQU4gd2lsbCBpbXByb3ZlIHlvdXIgbmV0d29yazpcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOZXh0LWdlbmVyYXRpb24gV0FOIGNvbm5lY3Rpdml0eSBzZXJ2aWNlcy4gV2UgaGF2ZSBFeHByZXNzIFJvdXRlcyB0byBvZmZpY2UgMzY1LCBBV1MsIEF6dXJlIHRocm91Z2ggRXF1aW5peCBDbG91ZCBFeGNoYW5nZSBhbmQgYXJlIHBlZXJpbmcgd2l0aCBBU05zIGRpcmVjdGx5IGZvciBwcm92aWRpbmcgYmV0dGVyIGFuZCBoaWdoLXBlcmZvcm1hbmNlIHJvdXRlcyB0byBPZmZpY2UgMzY1LCBBenVyZSBhbmQgQVdTLlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uU3R5bGU6IHtcclxuICAgICAgICAgICAgcHg6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdhcDogMTAsXHJcbiAgICAgICAgcm93RGlzdGFuY2U6IDgsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL21vYmlsZS5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWaXJ0dWFsIEZsZXhpYmlsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZHVzdHJ54oCZcyBvbmx5IG11bHRpLWdpZ2FiaXQgdmlydHVhbCBXQU4gb3B0aW1pemF0aW9uIHNvbHV0aW9uIGFuZCB0aGUgb25seSBwcm9kdWN0cyB0aGF0IHN1cHBvcnQgZXZlcnkgbWFqb3IgaHlwZXJ2aXNvci4gRW1haWwgKE1TIEV4Y2hhbmdlIGFuZCBTTVRQKSwgZmlsZSBzZXJ2aWNlcyAoQ0lGUywgRlRQKSwgZG9jdW1lbnQgbWFuYWdlbWVudChTaGFyZVBvaW50KS5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL3RhZ3Muc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGl2ZXJzaWZ5aW5nIEFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaWx2ZXIgUGVhay8gUml2ZXJiZWTigJlzIFdBTiBvcHRpbWl6YXRpb24gc29sdXRpb24gd29ya3Mgb24gYWxsIGFwcGxpY2F0aW9ucywgcmVnYXJkbGVzcyBvZiB0cmFuc3BvcnQgcHJvdG9jb2wgb3IgdmVyc2lvbi4gSW50ZXJhY3RpdmUgYW5kIHRyYW5zYWN0aW9uYWwgYXBwbGljYXRpb25zIHN1Y2ggYXMgVk13YXJlIFZESSwgYW5kIFNRTC5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL2RhdGEtc2VydmVyLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0b3JhZ2UgQ2VudHJhbGl6YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiIEZhc3QsIFJlbGlhYmxlIGFuZCBJbmNyZWFzaW5nbHkgZWZmaWNpZW50IGNlbnRyYWxpemluZyBzZXJ2ZXJzIGFuZCBzdG9yYWdlIG9mZmVycyBzaWduaWZpY2FudCBjb3N0LCBtYW5hZ2VtZW50LCBzZWN1cml0eSBhbmQgY29tcGxpYW5jZSBiZW5lZml0cy4gRGV0ZWN0cywgaXNvbGF0ZXMgbm90aWZpZXMgYW5kIGNvcnJlY3RzIGZhdWx0cyBlbmNvdW50ZXJlZCBpbiB0aGUgbmV0d29yay5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL2xvY2suc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VjdXJpdHkgR3VhcmFudGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbGwgd2l0aG91dCByaXNrIG9mIGNvcnJ1cHRpbmcgZGF0YSBvciBhbHRlcmluZyBiZWhhdmlvdXIuIE5vIHBsdWctaW5zIGFyZSByZXF1aXJlZCwgd2hpY2ggZXhwZWRpdGVzIGRlcGxveW1lbnQgYW5kIHNhdmVzIGJvdGggdGltZSBhbmQgbW9uZXkuIEZhc3QsIFJlbGlhYmxlIGFuZCBJbmNyZWFzaW5nbHkgRWZmaWNpZW50LlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgXHJcbl0iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBUYWJzLFxyXG4gICAgVGFiTGlzdCxcclxuICAgIFRhYixcclxuICAgIFRhYlBhbmVsLFxyXG4gICAgVGFiUGFuZWxzLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcInJlYWN0LXJldmVhbC9GYWRlXCI7XHJcbmltcG9ydCB7IFByaWNpbmdDYXJkLCBQcmljaW5nUXVvdGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9QcmljaW5nQ2FyZFwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNkd2FuUHJpY2luZyhwcm9wcykge1xyXG4gICAgY29uc3QgZmVhdHVyZXMgPSBbXCJIaWdoLXBlcmZvcm1hbmNlIHJvdXRlc1wiLCBcIkZ1bGx5IE1hbmFnZWQgU2VydmljZVwiXTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwicHktNCBweC01IGRpc3BsYXk2IFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGh5c2ljYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwicHktNCBweC01IGRpc3BsYXk2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaXJ0dWFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVscz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZT17XCIzMCVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17ZmVhdHVyZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2dsb2JlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJ0biBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZT1cIlNELVdBTiBPcHRpbWl6YXRpb25zIEFzIEEgU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlRGVzY3JpcHRpb249XCJQaHlzaWNhbCwgU2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e2ZlYXR1cmVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9nbG9iZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2x1c3RlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYnRuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPVwiU0QtV0FOIE9wdGltaXphdGlvbnMgQXMgQSBTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj1cIlBoeXNpY2FsLCBDbHVzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlPXtcIjMwJVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtmZWF0dXJlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvZ2xvYmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYnRuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPVwiU0QtV0FOIE9wdGltaXphdGlvbnMgQXMgQSBTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj1cIlZpcnR1YWwsIFNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1ByaWNpbmdRdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtmZWF0dXJlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvZ2xvYmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNsdXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGJ0biBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZT1cIlNELVdBTiBPcHRpbWl6YXRpb25zIEFzIEEgU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlRGVzY3JpcHRpb249XCJWaXJ0dWFsLCBDbHVzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNkd2FuUHJpY2luZzsiXSwic291cmNlUm9vdCI6IiJ9