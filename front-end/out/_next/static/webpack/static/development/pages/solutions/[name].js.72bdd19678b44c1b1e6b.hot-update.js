webpackHotUpdate("static\\development\\pages\\solutions\\[name].js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL2NleC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3BhZ2VzL3NvbHV0aW9ucy9pbmRleC5qc3giXSwibmFtZXMiOlsidGl0bGUiLCJ0aXRsZVN0eWxlIiwiZm9udFNpemUiLCJweCIsImRlc2NyaXB0aW9uIiwiZGVzY3JpcHRpb25TdHlsZSIsIm15IiwicHkiLCJnYXAiLCJib2R5Iiwid2lkdGgiLCJ0eXBlIiwiZGF0YSIsImJnIiwicm93RGlzdGFuY2UiLCJjb250ZW50IiwiaW1hZ2UiLCJtb2R1bGUiLCJleHBvcnRzIiwic3RvcmFnZSIsImluZnJhIiwibG9nZ2luZyIsImJhY2t1cCIsImRucyIsInBsYXRmb3JtIiwiZmlyZXdhbGwiLCJjYWxsY2VudGVyIiwid2lyZWxlc3MiLCJwcm94eSIsImhvc3RpbmciLCJjZXgiLCJhcHBkZXYiLCJzZHdhbiIsImRyIiwiYXJjaGl0ZWN0dXJlIiwibG9hZEJhbGFuY2VyIiwid29ya3N0YXRpb24iLCJzb2NhYXMiLCJ3YWZhYXMiLCJkYmFhcyIsIndlYmRldiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLGdFQUNYO0FBQ0lBLE9BQUssRUFBRSx3REFEWDtBQUVJQyxZQUFVLEVBQUM7QUFBQ0MsWUFBUSxFQUFDLENBQUMsS0FBRCxFQUFPLEtBQVAsQ0FBVjtBQUF3QkMsTUFBRSxFQUFDO0FBQTNCLEdBRmY7QUFHSUMsYUFBVyxFQUFFLG1mQUhqQjtBQUlJQyxrQkFBZ0IsRUFBRTtBQUNkRixNQUFFLEVBQUU7QUFEVTtBQUp0QixDQURXLEVBU1g7QUFDSUgsT0FBSyxFQUFFLG1CQURYO0FBRUlNLElBQUUsRUFBRSxDQUZSO0FBR0lDLElBQUUsRUFBRSxFQUhSO0FBSUlDLEtBQUcsRUFBRSxDQUpUO0FBS0lDLE1BQUksRUFBRSxDQUFDO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBRUhDLFFBQUks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QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29sdXRpb25zXFxbbmFtZV0uanMuNzJiZGQxOTY3OGI0NGMxYjFlNmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG91ZEV4Y2hhbmdlUHJpY2luZyBmcm9tIFwiLi4vLi4vcHJpY2luZy9DbG91ZEV4Y2hhbmdlUHJpY2luZ1wiO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiRXhwcmVzcyBSb3V0ZXMgdG8gT2ZmaWNlIDM2NSwgQVdTLCBBenVyZSBhbmQgbWFueSBtb3JlXCIsXHJcbiAgICAgICAgdGl0bGVTdHlsZTp7Zm9udFNpemU6W1wiM3hsXCIsXCI0eGxcIl0scHg6XCIxMHB4XCJ9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldlIGVuc3VyZSByZWxpYWJpbGl0eSwgaW50ZWdyaXR5LCBzZWN1cml0eSBhcyB3ZWxsIGFzIHNjYWxhYmlsaXR5IGZvciBvdXIgY2xvdWQgZXhjaGFuZ2UgY29ubmVjdGl2aXR5IHNvbHV0aW9ucy4gVGhlIHRyYWZmaWMgaXMgbm90IHNlbnQgb3ZlciB0aGUgaW50ZXJuZXQgb25seSwgcmF0aGVyIHRoZSBleGNoYW5nZSBwcm92aWRlciBjb25uZWN0cyB0aGUgZXhjaGFuZ2XigJlzIG5ldHdvcmsgZGlyZWN0bHkgdG8gdGhlIGNsb3VkIHByb3ZpZGVy4oCZcyBuZXR3b3JrLiBXZSBnaXZlIHlvdSB0aGUgcG93ZXIgdG8gZWFzaWx5IGRlcGxveSwgZWZmaWNpZW50bHkgbW9uaXRvciwgYW5kIHRyYW5zcGFyZW50bHkgc2NhbGUgdGhlIGFwcGxpY2F0aW9ucyB0aGF0IHlvdXIgYnVzaW5lc3MgcmVxdWlyZXMgdG8gcnVuIGFuZCB0byBpbnRlcmFjdCB3aXRoIGN1c3RvbWVycyBhbmQgcGFydG5lcnMgd2hpbGUgYWxzbyBtaXRpZ2F0aW5nIHRoZSByaXNrIG9mIHNlY3VyaXR5IGJyZWFjaGVzLlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uU3R5bGU6IHtcclxuICAgICAgICAgICAgcHg6IDYsXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT3VyIFByaWNpbmcgUGxhbnNcIixcclxuICAgICAgICBteTogMCxcclxuICAgICAgICBweTogMTYsXHJcbiAgICAgICAgZ2FwOiAwLFxyXG4gICAgICAgIGJvZHk6IFt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwcmljaW5nXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IDxDbG91ZEV4Y2hhbmdlUHJpY2luZyAvPlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGJnOiAnbGlnaHQuNDAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2h5IEJHIFVuaWZpZWQgU29sdXRpb25zP1wiLFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiA4LFxyXG4gICAgICAgIHB5OiAxNixcclxuICAgICAgICBib2R5OiBbe1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWNjb3JkaW9uXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlbGlhYmxlIGFuZCBTZWN1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZSBzZWN1cml0eSBvbiBvdXIgZW5kLCB3aGlsZSBjb25uZWN0aW5nIHRvIHRoZXNlIGNsb3VkIHBsYXRmb3Jtcy4gSW1wcm92ZSB0aGUgZXhwZXJpZW5jZSBvZiB1c2VycyB0aHJvdWdob3V0IHRoZSBleHRlbmRlZCBlbnRlcnByaXNlIHByb3ZpZGluZyBzaWduaWZpY2FudCBiZW5lZml0cyBhbmQgcmVsaWFiaWxpdHkuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvSWxsdXN0cmF0aW9ucy9SZWxpYWJsZUFuZFNlY3VyZV9DbG91ZEV4Y2hhbmdlQ29ubmVjdGl2aXR5LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNjYWxhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVHJhZmZpYyBpbmNyZWFzZWQgb3IgZGVjcmVhc2VkIGlzIGhhbmRsZWQgd2l0aCBubyBkaWZmaWN1bHR5IGF0IGFsbC4gQXZvaWRpbmcgdmVuZG9yIGxvY2staW4gYW5kIG1lZXRpbmcgZGF0YS1zb3ZlcmVpZ250eSByZXF1aXJlbWVudHMuIEdlby1yZWR1bmRhbnQgZm9yIGltcHJvdmVkIHBlcmZvcm1hbmNlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvc2NhbGFiaWx0eS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNpbXBsaWZpZWQgdXNhZ2UgYW5kIGludGVncmF0aW9uIG9mIG5ldyB0ZWNobm9sb2d5IHNlcnZpY2VzLiBPbi1kZW1hbmQgY29tbXVuaWNhdGlvbiBhbmQgY29ubmVjdGl2aXR5LiBNdWx0aS1jbG91ZCBvcGVyYXRpb25zIHdpdGggYSBjb21wbGV4IHN0cnVjdHVyZSBoYW5kbGVkIGVhc2lseS5cIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL3NpcC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICB9XHJcbl0iLCJcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiXHJcbm1vZHVsZS5leHBvcnRzLnN0b3JhZ2UgPSBzdG9yYWdlXHJcblxyXG5pbXBvcnQgaW5mcmEgZnJvbSBcIi4vaW5mcmFcIlxyXG5tb2R1bGUuZXhwb3J0cy5pbmZyYSA9IGluZnJhXHJcblxyXG5pbXBvcnQgbG9nZ2luZyBmcm9tICcuL2xvZ2dpbmcnXHJcbm1vZHVsZS5leHBvcnRzLmxvZ2dpbmcgPSBsb2dnaW5nXHJcblxyXG5pbXBvcnQgYmFja3VwIGZyb20gXCIuL2JhY2t1cFwiXHJcbm1vZHVsZS5leHBvcnRzLmJhY2t1cCA9IGJhY2t1cFxyXG5cclxuaW1wb3J0IGRucyBmcm9tIFwiLi9kbnNcIlxyXG5tb2R1bGUuZXhwb3J0cy5kbnMgPSBkbnNcclxuXHJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tIFwiLi9wbGF0Zm9ybVwiXHJcbm1vZHVsZS5leHBvcnRzLnBsYXRmb3JtID0gcGxhdGZvcm1cclxuXHJcbmltcG9ydCBmaXJld2FsbCBmcm9tIFwiLi9maXJld2FsbFwiXHJcbm1vZHVsZS5leHBvcnRzLmZpcmV3YWxsID0gZmlyZXdhbGxcclxuXHJcbmltcG9ydCBjYWxsY2VudGVyIGZyb20gXCIuL2NvbnRhY3QtY2VudGVyXCJcclxubW9kdWxlLmV4cG9ydHMuY2FsbGNlbnRlciA9IGNhbGxjZW50ZXJcclxuXHJcbmltcG9ydCB3aXJlbGVzcyBmcm9tICcuL3dpcmVsZXNzJ1xyXG5tb2R1bGUuZXhwb3J0cy53aXJlbGVzcyA9IHdpcmVsZXNzXHJcblxyXG5pbXBvcnQgcHJveHkgZnJvbSAnLi9wcm94eSdcclxubW9kdWxlLmV4cG9ydHMucHJveHkgPSBwcm94eVxyXG5cclxuaW1wb3J0IGhvc3RpbmcgZnJvbSAnLi9ob3N0aW5nJ1xyXG5tb2R1bGUuZXhwb3J0cy5ob3N0aW5nID0gaG9zdGluZ1xyXG5cclxuaW1wb3J0IGNleCBmcm9tICcuL2NleCdcclxubW9kdWxlLmV4cG9ydHMuY2V4ID0gY2V4XHJcblxyXG5pbXBvcnQgYXBwZGV2IGZyb20gJy4vYXBwZGV2J1xyXG5tb2R1bGUuZXhwb3J0cy5hcHBkZXYgPSBhcHBkZXZcclxuXHJcbmltcG9ydCBzZHdhbiBmcm9tICcuL3Nkd2FuJ1xyXG5tb2R1bGUuZXhwb3J0cy5zZHdhbiA9IHNkd2FuXHJcblxyXG5pbXBvcnQgZHIgZnJvbSAnLi9kcidcclxubW9kdWxlLmV4cG9ydHMuZHIgPSBkclxyXG5cclxuaW1wb3J0IGFyY2hpdGVjdHVyZSBmcm9tICcuL2FyY2hpdGVjdHVyYWwtY29uc3VsdGFuY3knXHJcbm1vZHVsZS5leHBvcnRzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZVxyXG5cclxuaW1wb3J0IGxvYWRCYWxhbmNlciBmcm9tICcuL2xvYWRCYWxhbmNlcidcclxubW9kdWxlLmV4cG9ydHMubG9hZEJhbGFuY2VyID0gbG9hZEJhbGFuY2VyXHJcblxyXG5pbXBvcnQgd29ya3N0YXRpb24gZnJvbSAnLi93b3Jrc3RhdGlvbidcclxubW9kdWxlLmV4cG9ydHMud29ya3N0YXRpb24gPSB3b3Jrc3RhdGlvblxyXG5cclxuaW1wb3J0IHNvY2FhcyBmcm9tIFwiLi9zb2NhYXNcIlxyXG5tb2R1bGUuZXhwb3J0cy5zb2NhYXMgPSBzb2NhYXNcclxuXHJcbmltcG9ydCB3YWZhYXMgZnJvbSAnLi93YWZhYXMnXHJcbm1vZHVsZS5leHBvcnRzLndhZmFhcyA9IHdhZmFhc1xyXG5cclxuaW1wb3J0IGRiYWFzIGZyb20gJy4vZGJhYXMnXHJcbm1vZHVsZS5leHBvcnRzLmRiYWFzID0gZGJhYXNcclxuXHJcbmltcG9ydCB3ZWJkZXYgZnJvbSAnLi93ZWJkZXYnXHJcbm1vZHVsZS5leHBvcnRzLndlYmRldiA9IHdlYmRldlxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==