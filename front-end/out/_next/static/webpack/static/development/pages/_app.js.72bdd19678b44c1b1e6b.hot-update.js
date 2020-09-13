webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/pageBuilder/pages/solutions/cex.jsx":
/*!*************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/cex.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_CloudExchangePricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/CloudExchangePricing */ "./src/pageBuilder/pricing/CloudExchangePricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\cex.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "Express Routes to Office 365, AWS, Azure and many more",
  titleStyle: {
    fontSize: ["3xl", "4xl"],
    px: "10px"
  },
  description: "We ensure reliability, integrity, security as well as scalability for our cloud exchange connectivity solutions. The traffic is not sent over the internet only, rather the exchange provider connects the exchange’s network directly to the cloud provider’s network. We give you the power to easily deploy, efficiently monitor, and transparently scale the applications that your business requires to run and to interact with customers and partners while also mitigating the risk of security breaches.",
  descriptionStyle: {
    px: 6
  }
}, {
  title: "Our Pricing Plans",
  my: 0,
  py: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_CloudExchangePricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
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
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Reliable and Secure",
        description: "Complete security on our end, while connecting to these cloud platforms. Improve the experience of users throughout the extended enterprise providing significant benefits and reliability.",
        image: "/assets/images/Illustrations/ReliableAndSecure_CloudExchangeConnectivity.svg"
      }, {
        title: "Scalable",
        description: "Traffic increased or decreased is handled with no difficulty at all. Avoiding vendor lock-in and meeting data-sovereignty requirements. Geo-redundant for improved performance.",
        image: "/assets/images/Illustrations/scalabilty.svg"
      }, {
        title: "Integration",
        description: "Simplified usage and integration of new technology services. On-demand communication and connectivity. Multi-cloud operations with a complex structure handled easily.",
        image: "/assets/images/Illustrations/sip.svg"
      }]
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL2NleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3BhZ2VzL3NvbHV0aW9ucy9pbmRleC5qc3giXSwibmFtZXMiOlsidGl0bGUiLCJ0aXRsZVN0eWxlIiwiZm9udFNpemUiLCJweCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25TdHlsZSIsIm15IiwicHkiLCJnYXAiLCJib2R5Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YSIsImJnIiwicm93RGlzdGFuY2UiLCJjb250ZW50IiwiaW1hZ2UiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RvcmFnZSIsImluZnJhIiwibG9nZ2luZyIsImJhY2t1cCIsImRucyIsInBsYXRmb3JtIiwiZmlyZXdhbGwiLCJjYWxsY2VudGVyIiwid2lyZWxlc3MiLCJwcm94eSIsImhvc3RpbmciLCJjZXgiLCJhcHBkZXYiLCJzZHdhbiIsImRyIiwiYXJjaGl0ZWN0dXJlIiwibG9hZEJhbGFuY2VyIiwid29ya3N0YXRpb24iLCJzb2NhYXMiLCJ3YWZhYXMiLCJkYmFhcyIsIndlYmRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLGdFQUNYO0FBQ0lBLE9BQUssRUFBRSx3REFEWDtBQUVJQyxZQUFVLEVBQUM7QUFBQ0MsWUFBUSxFQUFDLENBQUMsS0FBRCxFQUFPLEtBQVAsQ0FBVjtBQUF3QkMsTUFBRSxFQUFDO0FBQTNCLEdBRmY7QUFHSUMsYUFBVyxFQUFFLG1mQUhqQjtBQUlJQyxrQkFBZ0IsRUFBRTtBQUNkRixNQUFFLEVBQUU7QUFEVTtBQUp0QixDQURXLEVBU1g7QUFDSUgsT0FBSyxFQUFFLG1CQURYO0FBRUlNLElBQUUsRUFBRSxDQUZSO0FBR0lDLElBQUUsRUFBRSxFQUhSO0FBSUlDLEtBQUcsRUFBRSxDQUpUO0FBS0lDLE1BQUksRUFBRSxDQUFDO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFFBQUks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QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy43MmJkZDE5Njc4YjQ0YzFiMWU2Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsb3VkRXhjaGFuZ2VQcmljaW5nIGZyb20gXCIuLi8uLi9wcmljaW5nL0Nsb3VkRXhjaGFuZ2VQcmljaW5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJFeHByZXNzIFJvdXRlcyB0byBPZmZpY2UgMzY1LCBBV1MsIEF6dXJlIGFuZCBtYW55IG1vcmVcIixcclxuICAgICAgICB0aXRsZVN0eWxlOntmb250U2l6ZTpbXCIzeGxcIixcIjR4bFwiXSxweDpcIjEwcHhcIn0sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2UgZW5zdXJlIHJlbGlhYmlsaXR5LCBpbnRlZ3JpdHksIHNlY3VyaXR5IGFzIHdlbGwgYXMgc2NhbGFiaWxpdHkgZm9yIG91ciBjbG91ZCBleGNoYW5nZSBjb25uZWN0aXZpdHkgc29sdXRpb25zLiBUaGUgdHJhZmZpYyBpcyBub3Qgc2VudCBvdmVyIHRoZSBpbnRlcm5ldCBvbmx5LCByYXRoZXIgdGhlIGV4Y2hhbmdlIHByb3ZpZGVyIGNvbm5lY3RzIHRoZSBleGNoYW5nZeKAmXMgbmV0d29yayBkaXJlY3RseSB0byB0aGUgY2xvdWQgcHJvdmlkZXLigJlzIG5ldHdvcmsuIFdlIGdpdmUgeW91IHRoZSBwb3dlciB0byBlYXNpbHkgZGVwbG95LCBlZmZpY2llbnRseSBtb25pdG9yLCBhbmQgdHJhbnNwYXJlbnRseSBzY2FsZSB0aGUgYXBwbGljYXRpb25zIHRoYXQgeW91ciBidXNpbmVzcyByZXF1aXJlcyB0byBydW4gYW5kIHRvIGludGVyYWN0IHdpdGggY3VzdG9tZXJzIGFuZCBwYXJ0bmVycyB3aGlsZSBhbHNvIG1pdGlnYXRpbmcgdGhlIHJpc2sgb2Ygc2VjdXJpdHkgYnJlYWNoZXMuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25TdHlsZToge1xyXG4gICAgICAgICAgICBweDogNixcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJPdXIgUHJpY2luZyBQbGFuc1wiLFxyXG4gICAgICAgIG15OiAwLFxyXG4gICAgICAgIHB5OiAxNixcclxuICAgICAgICBnYXA6IDAsXHJcbiAgICAgICAgYm9keTogW3tcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInByaWNpbmdcIixcclxuICAgICAgICAgICAgZGF0YTogPENsb3VkRXhjaGFuZ2VQcmljaW5nIC8+XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgYmc6ICdsaWdodC40MDAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJXaHkgQkcgVW5pZmllZCBTb2x1dGlvbnM/XCIsXHJcbiAgICAgICAgcm93RGlzdGFuY2U6IDgsXHJcbiAgICAgICAgcHk6IDE2LFxyXG4gICAgICAgIGJvZHk6IFt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJhY2NvcmRpb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwibWRcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVsaWFibGUgYW5kIFNlY3VyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbXBsZXRlIHNlY3VyaXR5IG9uIG91ciBlbmQsIHdoaWxlIGNvbm5lY3RpbmcgdG8gdGhlc2UgY2xvdWQgcGxhdGZvcm1zLiBJbXByb3ZlIHRoZSBleHBlcmllbmNlIG9mIHVzZXJzIHRocm91Z2hvdXQgdGhlIGV4dGVuZGVkIGVudGVycHJpc2UgcHJvdmlkaW5nIHNpZ25pZmljYW50IGJlbmVmaXRzIGFuZCByZWxpYWJpbGl0eS5cIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL1JlbGlhYmxlQW5kU2VjdXJlX0Nsb3VkRXhjaGFuZ2VDb25uZWN0aXZpdHkuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2NhbGFibGVcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUcmFmZmljIGluY3JlYXNlZCBvciBkZWNyZWFzZWQgaXMgaGFuZGxlZCB3aXRoIG5vIGRpZmZpY3VsdHkgYXQgYWxsLiBBdm9pZGluZyB2ZW5kb3IgbG9jay1pbiBhbmQgbWVldGluZyBkYXRhLXNvdmVyZWlnbnR5IHJlcXVpcmVtZW50cy4gR2VvLXJlZHVuZGFudCBmb3IgaW1wcm92ZWQgcGVyZm9ybWFuY2UuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvSWxsdXN0cmF0aW9ucy9zY2FsYWJpbHR5LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2ltcGxpZmllZCB1c2FnZSBhbmQgaW50ZWdyYXRpb24gb2YgbmV3IHRlY2hub2xvZ3kgc2VydmljZXMuIE9uLWRlbWFuZCBjb21tdW5pY2F0aW9uIGFuZCBjb25uZWN0aXZpdHkuIE11bHRpLWNsb3VkIG9wZXJhdGlvbnMgd2l0aCBhIGNvbXBsZXggc3RydWN0dXJlIGhhbmRsZWQgZWFzaWx5LlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvc2lwLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIH1cclxuXSIsIlxyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCJcclxubW9kdWxlLmV4cG9ydHMuc3RvcmFnZSA9IHN0b3JhZ2VcclxuXHJcbmltcG9ydCBpbmZyYSBmcm9tIFwiLi9pbmZyYVwiXHJcbm1vZHVsZS5leHBvcnRzLmluZnJhID0gaW5mcmFcclxuXHJcbmltcG9ydCBsb2dnaW5nIGZyb20gJy4vbG9nZ2luZydcclxubW9kdWxlLmV4cG9ydHMubG9nZ2luZyA9IGxvZ2dpbmdcclxuXHJcbmltcG9ydCBiYWNrdXAgZnJvbSBcIi4vYmFja3VwXCJcclxubW9kdWxlLmV4cG9ydHMuYmFja3VwID0gYmFja3VwXHJcblxyXG5pbXBvcnQgZG5zIGZyb20gXCIuL2Ruc1wiXHJcbm1vZHVsZS5leHBvcnRzLmRucyA9IGRuc1xyXG5cclxuaW1wb3J0IHBsYXRmb3JtIGZyb20gXCIuL3BsYXRmb3JtXCJcclxubW9kdWxlLmV4cG9ydHMucGxhdGZvcm0gPSBwbGF0Zm9ybVxyXG5cclxuaW1wb3J0IGZpcmV3YWxsIGZyb20gXCIuL2ZpcmV3YWxsXCJcclxubW9kdWxlLmV4cG9ydHMuZmlyZXdhbGwgPSBmaXJld2FsbFxyXG5cclxuaW1wb3J0IGNhbGxjZW50ZXIgZnJvbSBcIi4vY29udGFjdC1jZW50ZXJcIlxyXG5tb2R1bGUuZXhwb3J0cy5jYWxsY2VudGVyID0gY2FsbGNlbnRlclxyXG5cclxuaW1wb3J0IHdpcmVsZXNzIGZyb20gJy4vd2lyZWxlc3MnXHJcbm1vZHVsZS5leHBvcnRzLndpcmVsZXNzID0gd2lyZWxlc3NcclxuXHJcbmltcG9ydCBwcm94eSBmcm9tICcuL3Byb3h5J1xyXG5tb2R1bGUuZXhwb3J0cy5wcm94eSA9IHByb3h5XHJcblxyXG5pbXBvcnQgaG9zdGluZyBmcm9tICcuL2hvc3RpbmcnXHJcbm1vZHVsZS5leHBvcnRzLmhvc3RpbmcgPSBob3N0aW5nXHJcblxyXG5pbXBvcnQgY2V4IGZyb20gJy4vY2V4J1xyXG5tb2R1bGUuZXhwb3J0cy5jZXggPSBjZXhcclxuXHJcbmltcG9ydCBhcHBkZXYgZnJvbSAnLi9hcHBkZXYnXHJcbm1vZHVsZS5leHBvcnRzLmFwcGRldiA9IGFwcGRldlxyXG5cclxuaW1wb3J0IHNkd2FuIGZyb20gJy4vc2R3YW4nXHJcbm1vZHVsZS5leHBvcnRzLnNkd2FuID0gc2R3YW5cclxuXHJcbmltcG9ydCBkciBmcm9tICcuL2RyJ1xyXG5tb2R1bGUuZXhwb3J0cy5kciA9IGRyXHJcblxyXG5pbXBvcnQgYXJjaGl0ZWN0dXJlIGZyb20gJy4vYXJjaGl0ZWN0dXJhbC1jb25zdWx0YW5jeSdcclxubW9kdWxlLmV4cG9ydHMuYXJjaGl0ZWN0dXJlID0gYXJjaGl0ZWN0dXJlXHJcblxyXG5pbXBvcnQgbG9hZEJhbGFuY2VyIGZyb20gJy4vbG9hZEJhbGFuY2VyJ1xyXG5tb2R1bGUuZXhwb3J0cy5sb2FkQmFsYW5jZXIgPSBsb2FkQmFsYW5jZXJcclxuXHJcbmltcG9ydCB3b3Jrc3RhdGlvbiBmcm9tICcuL3dvcmtzdGF0aW9uJ1xyXG5tb2R1bGUuZXhwb3J0cy53b3Jrc3RhdGlvbiA9IHdvcmtzdGF0aW9uXHJcblxyXG5pbXBvcnQgc29jYWFzIGZyb20gXCIuL3NvY2Fhc1wiXHJcbm1vZHVsZS5leHBvcnRzLnNvY2FhcyA9IHNvY2Fhc1xyXG5cclxuaW1wb3J0IHdhZmFhcyBmcm9tICcuL3dhZmFhcydcclxubW9kdWxlLmV4cG9ydHMud2FmYWFzID0gd2FmYWFzXHJcblxyXG5pbXBvcnQgZGJhYXMgZnJvbSAnLi9kYmFhcydcclxubW9kdWxlLmV4cG9ydHMuZGJhYXMgPSBkYmFhc1xyXG5cclxuaW1wb3J0IHdlYmRldiBmcm9tICcuL3dlYmRldidcclxubW9kdWxlLmV4cG9ydHMud2ViZGV2ID0gd2ViZGV2XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9