webpackHotUpdate("static\\development\\pages\\newsroom.js",{

/***/ "./src/database/newsroom.jsx":
/*!***********************************!*\
  !*** ./src/database/newsroom.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pageBuilder/pages/newsroom/index */ "./src/pageBuilder/pages/newsroom/index.jsx");
/* harmony import */ var _pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0__);

const blogs = [{
  index: 1,
  title: "Business Operations during COVID-19 Pandemic",
  description: "The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with solid and comprehensive IT solutions....",
  date: "7th September 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/businessop.jpg",
  category: "Updates",
  tags: ["Huawei", "virtual desktop", "bare metal", "VM", "VCS"],
  link: "1-random-title-for-a-blog-article",
  content: _pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0___default.a.businessop
}, {
  index: 2,
  title: "Helping Hands during COVID-19 Pandemic",
  description: "COVID-19 working from home taught us more lessons and even let us able to figure it out how we can be exponentially productive than just enjoying the comfort of staying at home....",
  date: "23rd August 2020",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/coronavirus.jpg",
  category: "Updates",
  tags: ["cisco", "socaas"],
  link: "2-random-title-for-a-blog-article",
  content: _pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0___default.a.covid19
}, {
  index: 3,
  title: "Peace of mind and 60% cost savings with Datacom@AirTrunk",
  description: "It was towards the end of 2019 and the staff at Australian data and applications hosting specialist BG Unified Solutions were looking forward to closing out another busy and successful year....",
  date: "23rd August 2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/meet_with_datacom.jpg",
  category: "Updates",
  tags: ["infrastructure", "iaas", "BGU", "DDOS", "SYD1", "MEL1", "AirTrunk", "Datacom"],
  link: "3-collaboration-with-datacom-and-huawei",
  content: _pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0___default.a.datacom
}, {
  index: 4,
  title: "A complete Office IT Infrastructure for small to medium size organizations.",
  description: "An enterprise level solution for any small to medium size organization with single or multiple sites. This solution includes:....",
  date: "23rd October 2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/it-infra.jpg",
  category: "Updates",
  tags: ["cisco", "DID", "Firewall", "WLC", "Apllication Server", "Backup"],
  link: "4-Infra for medium businesses",
  content: _pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0___default.a.itInfra
}, {
  index: 5,
  title: "Launching a complete VDI/RDS as a Solution",
  description: "We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using VMWARE, Parallels and Acronis Cyber Infrastructure. ....",
  date: "September 2019",
  by: "Saurabh Sareen",
  avatar: "/assets/images/team/saurabh.jpg",
  image: "/assets/images/newsroom/complete_vdi.jpg",
  category: "Updates",
  tags: ["RDS", "VDI", "POC", "SOE", "Office 365"],
  link: "5-VDI as a Service",
  content: _pageBuilder_pages_newsroom_index__WEBPACK_IMPORTED_MODULE_0___default.a.vdiaas
}];
/* harmony default export */ __webpack_exports__["default"] = (blogs);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/pageBuilder/pages/newsroom/businessop.jsx":
/*!*******************************************************!*\
  !*** ./src/pageBuilder/pages/newsroom/businessop.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with solid and comprehensive IT solutions, keeping business operations running efficiently during the most challenging times.",
    textAlign: "justify"
  }, {
    text: "As a leader of BGUS, I am delighted to offer free services* for the next three months to any business(s) related to the Health and Safety of Australians. You need Remote Phone System, Virtual Desktops, Bare Metal Servers to host your VM's, Database Servers, Telepresence/VCS Solution or anything which we can offer with the current solutions in BGUS service offerings. No charges at all for the next three months. Let us help you if you have limited budgets and because of COVID your current infrastructure can't handle the load. Dial my direct line +61 2 9095 0000. We will get things in motion very quickly.",
    textAlign: "justify"
  }, {
    text: "We have noticed a big jump in the number of remote users from 20 or 30 on average to 275 as per the latest reports.",
    textAlign: "justify"
  }, {
    text: " Keeping in mind the disastrous effect of Coronavirus and the requirements to work from home, BG Unified Solutions will be offering to any organization related to Health and Public Safety, any solution that helps you to carry on your work remotely FREE OF COST. Whether you need VDI, Phone System or Contact Center or anything which helps you to carry on your work and help AUSTRALIANS in this tough situation, please contact me. ",
    textAlign: "justify"
  }, {
    text: "Keeping an eye on the current situation, we have introduced more compute and storage to our VDI clusters across all DC locations. We are ready to give you a complete VDI/RDSaaS solution running Windows 10 / Windows Server 2016 with all necessary applications to carry on your work from home. The solution can support a maximum of 15000 VDI instances.",
    textAlign: "justify"
  }, {
    text: "ConstantEFG - another service offered by BG Unified Solutions, is providing Email Filtering for Unlimited Domains and Unlimited users under less than $3k. A highly redundant solution across multiple DC locations with fully managed by 24x7 NOC.",
    textAlign: "justify"
  }, {
    text: "We went to work with BGU, laying the groundwork for a migration that would hopefully cause no further disruption to BG’s customers.",
    textAlign: "justify"
  }, {
    text: "Using the Datacom National Network, we were able to interconnect with BGU’s existing hosting provider via high capacity links to undertake the migration of data and applications. The whole process took just two weeks.",
    textAlign: "justify"
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

/***/ "./src/pageBuilder/pages/newsroom/covid19.jsx":
/*!****************************************************!*\
  !*** ./src/pageBuilder/pages/newsroom/covid19.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "COVID-19 working from home taught us more lessons and even let us able to figure it out how we can be exponentially productive than just enjoying the comfort of staying at home. How is it possible for us to streamline everything and hit our goals. Working on bringing more clients on board, what investments are aligned with the business goals, what’s the company vision, where we want to take this company, what we can do better for our clients, give them more love. Technology has given us enough opportunity to make time out of time and make BG more profitable. B2B calls or working on highly sensitive projects - this technology just made it easy for us to make the company’s profits exponential and we surely hope to learn more with this opportunity to work from home.",
    textAlign: "justify"
  }, {
    text: "BG Unified Solutions has now upgraded all of the VPNHEADEND firewalls, where all of the remote users / remote phones / any other secure remote connectivity terminates into 10G Firewalls with each firewall having a capacity of 2 million concurrent connections.",
    textAlign: "justify"
  }, {
    text: "We have increased our firewalls capacity to 10G firewalls in all DC locations. Now we have PaloAlto 5K, Fortinet 3700D’s and ASA 5585X with full UTM capabilities to provide you with a secure internet access.",
    textAlign: "justify"
  }, {
    text: "We have increased our core capacity in all DC locations to 40G devices with ALLFLASH storage for VDI/RDSaaS. We have added 150 TB of ALLFLASH Storage into our DC locations to support VDIaaS, WorkstationAAS and RDSaaS.",
    textAlign: "justify"
  }, {
    text: "All of the firewalls in production are now 10G firewalls.",
    textAlign: "justify"
  }, {
    text: " We have added 150 TB of ALLFLASH Storage into our DC locations to support VDIaaS, WorkstationAAS and RDSaaS. We will compile the golden image for you and get all the necessary software for you to work remotely. We can provide you with UCaaS using CISCO or Avaya.",
    textAlign: "justify"
  }, {
    text: "We can make Contact Center scripts for you without any professional services costs.",
    textAlign: "justify"
  }, {
    text: "The difficult COVID-19 era has also brought out how strong partnerships create lasting value. BG Unified Solutions and Huawei Australia have been working collaboratively to provide all Australians with solid and comprehensive IT solutions, keeping business operations running efficiently during the most challenging times.",
    textAlign: "justify"
  }, {
    text: "We are here to help in this tough time. Please do not hesitate to ask for help, whether you need VDI, UC, Storage, Managed Firewall or anything that will help you to keep carrying on your work remotely and keep you & your family safe in this time! ! ! Anything you need starting from storage, DR, Contact Center, Compute, VDI, RDS, DNS, SIP, Email Filtering or DB, don’t hesitate to contact us!!.",
    textAlign: "justify"
  }, {
    text: "WE ARE HERE TO HELP!!!",
    textAlign: "justify",
    fontWeight: "800",
    fontSize: "2xl",
    mt: "32px"
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

/***/ "./src/pageBuilder/pages/newsroom/index.jsx":
/*!**************************************************!*\
  !*** ./src/pageBuilder/pages/newsroom/index.jsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _covid = _interopRequireDefault(__webpack_require__(/*! ./covid19 */ "./src/pageBuilder/pages/newsroom/covid19.jsx"));

var _datacom = _interopRequireDefault(__webpack_require__(/*! ./datacom */ "./src/pageBuilder/pages/newsroom/datacom.jsx"));

var _itInfra = _interopRequireDefault(__webpack_require__(/*! ./itInfra */ "./src/pageBuilder/pages/newsroom/itInfra.jsx"));

var _vdiaas = _interopRequireDefault(__webpack_require__(/*! ./vdiaas */ "./src/pageBuilder/pages/newsroom/vdiaas.jsx"));

var _businessop = _interopRequireDefault(__webpack_require__(/*! ./businessop */ "./src/pageBuilder/pages/newsroom/businessop.jsx"));

module.exports.covid19 = _covid.default;
module.exports.datacom = _datacom.default;
module.exports.itInfra = _itInfra.default;
module.exports.vdiaas = _vdiaas.default;
module.exports.businessop = _businessop.default;

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

/***/ "./src/pageBuilder/pages/newsroom/itInfra.jsx":
/*!****************************************************!*\
  !*** ./src/pageBuilder/pages/newsroom/itInfra.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "An enterprise level solution for any small to medium size organization with single or multiple sites.",
    textAlign: "justify"
  }, {
    text: "This solution includes:",
    textAlign: "justify"
  }, {
    text: "-A Cisco ASA / PaloAlto Firewall (5512X / 220PA) fully managed by 24x7 NOC. 36 months warranty support.",
    textAlign: "justify"
  }, {
    text: "-Cisco 3700/3800 Access Points (5) managed centrally by a highly redundant Cisco WLC Infrastructure hosted in multiple DC locations. Corporate wireless included.",
    textAlign: "justify"
  }, {
    text: "-Cisco Switch Stack fully managed by the 24x7 NOC. 36 months warranty support.",
    textAlign: "justify"
  }, {
    text: "-20 Cisco 7965G handsets for 20 users. 36 months warranty support.",
    textAlign: "justify"
  }, {
    text: "-Unlimited calls including local, national, mobile, 13, 1300 and 1800.",
    textAlign: "justify"
  }, {
    text: "-DID for 20 users.",
    textAlign: "justify"
  }, {
    text: "-1 x Hosted File Server / Application Server with 8 vCPU's, 8GB RAM and 1TB T1 Storage with Daily Backups. Windows Licenses included.",
    textAlign: "justify"
  }, {
    text: "-U1 x Hosted SQL Server with 12 vCPU's, 16GB RAM and 1TB T1 Storage with Daily Backups. Windows Licenses included.",
    textAlign: "justify"
  }, {
    text: "-5TB T3 Backup Storage.",
    textAlign: "justify"
  }, {
    text: "-Email Filtering for 5 Domains using highly redundant Email Filtering Gateways for unlimited users.",
    textAlign: "justify"
  }, {
    text: "Staying Strong during these hard times..  We are progressing at a rapid rate!!",
    textAlign: "justify"
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

/***/ "./src/pageBuilder/pages/newsroom/vdiaas.jsx":
/*!***************************************************!*\
  !*** ./src/pageBuilder/pages/newsroom/vdiaas.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ([{
  type: "content",
  fontSize: "xl",
  data: [{
    text: "We feel proud in announcing ConstantVDI service offering, which will offer you a complete VDI/RDS As A Service Solution using VMWARE, Parallels and Acronis Cyber Infrastructure.",
    textAlign: "justify"
  }, {
    text: "The solution will be tailored to your requirements. We have done an extensive POC using Parallels and VMWARE using different clients including Windows 10, iPhone, iPAD and Android from different locations in Australia, NZ, UAE and China.",
    textAlign: "justify"
  }, {
    text: "SOE engineers will work with you to create a golden image for VDI deployment. Session based RDS will be deployed using high performance RDS servers (24vCPU's / 128GB RAM / 10G Network Connectivity).",
    textAlign: "justify"
  }, {
    text: "Daily / Hourly backups using Acronis will give you a peace of mind.",
    textAlign: "justify"
  }, {
    text: "Solution is fully integrated with other Microsoft Office products like teams and office 365.",
    textAlign: "justify"
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZGF0YWJhc2UvbmV3c3Jvb20uanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlQnVpbGRlci9wYWdlcy9uZXdzcm9vbS9idXNpbmVzc29wLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvbmV3c3Jvb20vY292aWQxOS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3BhZ2VzL25ld3Nyb29tL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvbmV3c3Jvb20vaXRJbmZyYS5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3BhZ2VzL25ld3Nyb29tL3ZkaWFhcy5qc3giXSwibmFtZXMiOlsiYmxvZ3MiLCJpbmRleCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkYXRlIiwiYnkiLCJhdmF0YXIiLCJpbWFnZSIsImNhdGVnb3J5IiwidGFncyIsImxpbmsiLCJjb250ZW50IiwiYnVzaW5lc3NvcCIsImNvdmlkMTkiLCJkYXRhY29tIiwiaXRJbmZyYSIsInZkaWFhcyIsInR5cGUiLCJmb250U2l6ZSIsImRhdGEiLCJ0ZXh0IiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsIm10IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsS0FBSyxHQUFHLENBQ1Y7QUFDSUMsT0FBSyxFQUFFLENBRFg7QUFFSUMsT0FBSyxFQUFFLDhDQUZYO0FBR0lDLGFBQVcsRUFBRSxvUEFIakI7QUFJSUMsTUFBSSxFQUFFLG9CQUpWO0FBS0lDLElBQUUsRUFBRSxnQkFMUjtBQU1JQyxRQUFNLEVBQUUsaUNBTlo7QUFPSUMsT0FBSyxFQUFFLHdDQVBYO0FBUUlDLFVBQVEsRUFBRSxTQVJkO0FBU0lDLE1BQUksRUFBRSxDQUFDLFFBQUQsRUFBVyxpQkFBWCxFQUErQixZQUEvQixFQUE4QyxJ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QUVJQyxhQUFTLEVBQUU7QUFGZixHQXpCRSxFQTZCRjtBQUNJRCxRQUFJLEVBQUUsb0JBRFY7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0E3QkUsRUFpQ0Y7QUFDSUQsUUFBSSxFQUFFLHVJQURWO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBakNFLEVBcUNGO0FBQ0lELFFBQUksRUFBRSxvSEFEVjtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQXJDRSxFQXlDRjtBQUNJRCxRQUFJLEVBQUUseUJBRFY7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0F6Q0UsRUE2Q0Y7QUFDSUQsUUFBSSxFQUFFLHFHQURWO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBN0NFLEVBaURGO0FBQ0lELFFBQUksRUFBRSxnRkFEVjtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQWpERTtBQUhWLENBRFcsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQSw4Q0FBZSxnRUFDWDtBQUNJSixNQUFJLEVBQUUsU0FEVjtBQUVJQyxVQUFRLEVBQUUsSUFGZDtBQUdJQyxNQUFJLEVBQUUsQ0FDRjtBQUNJQyxRQUFJLEVBQUUsbUxBRFY7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FERSxFQUtGO0FBQ0lELFFBQUksRUFBRSwrT0FEVjtBQUVJQyxhQUFTLEVBQUU7QUFGZixHQUxFLEVBU0Y7QUFDSUQsUUFBSSxFQUFFLHdNQURWO0FBRUlDLGFBQVMsRUFBRTtBQUZmLEdBVEUsRUFhRjtBQUNJRCxRQUFJLEVBQUUscUVBRFY7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FiRSxFQWlCRjtBQUNJRCxRQUFJLEVBQUUsOEZBRFY7QUFFSUMsYUFBUyxFQUFFO0FBRmYsR0FqQkU7QUFIVixDQURXLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXG5ld3Nyb29tLmpzLjExNjQ5OTg4MzNhMDI5YjcwMGMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29udGVudCBmcm9tIFwiLi4vcGFnZUJ1aWxkZXIvcGFnZXMvbmV3c3Jvb20vaW5kZXhcIlxyXG5cclxuY29uc3QgYmxvZ3MgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaW5kZXg6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiQnVzaW5lc3MgT3BlcmF0aW9ucyBkdXJpbmcgQ09WSUQtMTkgUGFuZGVtaWNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGlmZmljdWx0IENPVklELTE5IGVyYSBoYXMgYWxzbyBicm91Z2h0IG91dCBob3cgc3Ryb25nIHBhcnRuZXJzaGlwcyBjcmVhdGUgbGFzdGluZyB2YWx1ZS4gQkcgVW5pZmllZCBTb2x1dGlvbnMgYW5kIEh1YXdlaSBBdXN0cmFsaWEgaGF2ZSBiZWVuIHdvcmtpbmcgY29sbGFib3JhdGl2ZWx5IHRvIHByb3ZpZGUgYWxsIEF1c3RyYWxpYW5zIHdpdGggc29saWQgYW5kIGNvbXByZWhlbnNpdmUgSVQgc29sdXRpb25zLi4uLlwiLFxyXG4gICAgICAgIGRhdGU6IFwiN3RoIFNlcHRlbWJlciAyMDIwXCIsXHJcbiAgICAgICAgYnk6IFwiU2F1cmFiaCBTYXJlZW5cIixcclxuICAgICAgICBhdmF0YXI6IFwiL2Fzc2V0cy9pbWFnZXMvdGVhbS9zYXVyYWJoLmpwZ1wiLFxyXG4gICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL25ld3Nyb29tL2J1c2luZXNzb3AuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiVXBkYXRlc1wiLFxyXG4gICAgICAgIHRhZ3M6IFtcIkh1YXdlaVwiLCBcInZpcnR1YWwgZGVza3RvcFwiICwgXCJiYXJlIG1ldGFsXCIgLCBcIlZNXCIgLCBcIlZDU1wiICwgXSxcclxuICAgICAgICBsaW5rOiBcIjEtcmFuZG9tLXRpdGxlLWZvci1hLWJsb2ctYXJ0aWNsZVwiLFxyXG4gICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQuYnVzaW5lc3NvcCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaW5kZXg6IDIsXHJcbiAgICAgICAgdGl0bGU6IFwiSGVscGluZyBIYW5kcyBkdXJpbmcgQ09WSUQtMTkgUGFuZGVtaWNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDT1ZJRC0xOSB3b3JraW5nIGZyb20gaG9tZSB0YXVnaHQgdXMgbW9yZSBsZXNzb25zIGFuZCBldmVuIGxldCB1cyBhYmxlIHRvIGZpZ3VyZSBpdCBvdXQgaG93IHdlIGNhbiBiZSBleHBvbmVudGlhbGx5IHByb2R1Y3RpdmUgdGhhbiBqdXN0IGVuam95aW5nIHRoZSBjb21mb3J0IG9mIHN0YXlpbmcgYXQgaG9tZS4uLi5cIixcclxuICAgICAgICBkYXRlOiBcIjIzcmQgQXVndXN0IDIwMjBcIixcclxuICAgICAgICBieTogXCJTYXVyYWJoIFNhcmVlblwiLFxyXG4gICAgICAgIGF2YXRhcjogXCIvYXNzZXRzL2ltYWdlcy90ZWFtL3NhdXJhYmguanBnXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvbmV3c3Jvb20vY29yb25hdmlydXMuanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiVXBkYXRlc1wiLFxyXG4gICAgICAgIHRhZ3M6IFtcImNpc2NvXCIsIFwic29jYWFzXCJdLFxyXG4gICAgICAgIGxpbms6IFwiMi1yYW5kb20tdGl0bGUtZm9yLWEtYmxvZy1hcnRpY2xlXCIsXHJcbiAgICAgICAgY29udGVudDogY29udGVudC5jb3ZpZDE5LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpbmRleDogMyxcclxuICAgICAgICB0aXRsZTogXCJQZWFjZSBvZiBtaW5kIGFuZCA2MCUgY29zdCBzYXZpbmdzIHdpdGggRGF0YWNvbUBBaXJUcnVua1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkl0IHdhcyB0b3dhcmRzIHRoZSBlbmQgb2YgMjAxOSBhbmQgdGhlIHN0YWZmIGF0IEF1c3RyYWxpYW4gZGF0YSBhbmQgYXBwbGljYXRpb25zIGhvc3Rpbmcgc3BlY2lhbGlzdCBCRyBVbmlmaWVkIFNvbHV0aW9ucyB3ZXJlIGxvb2tpbmcgZm9yd2FyZCB0byBjbG9zaW5nIG91dCBhbm90aGVyIGJ1c3kgYW5kIHN1Y2Nlc3NmdWwgeWVhci4uLi5cIixcclxuICAgICAgICBkYXRlOiBcIjIzcmQgQXVndXN0IDIwMTlcIixcclxuICAgICAgICBieTogXCJTYXVyYWJoIFNhcmVlblwiLFxyXG4gICAgICAgIGF2YXRhcjogXCIvYXNzZXRzL2ltYWdlcy90ZWFtL3NhdXJhYmguanBnXCIsXHJcbiAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvbmV3c3Jvb20vbWVldF93aXRoX2RhdGFjb20uanBnXCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiVXBkYXRlc1wiLFxyXG4gICAgICAgIHRhZ3M6IFtcImluZnJhc3RydWN0dXJlXCIsIFwiaWFhc1wiLCBcIkJHVVwiICwgXCJERE9TXCIgLCBcIlNZRDFcIiAsIFwiTUVMMVwiICwgXCJBaXJUcnVua1wiICwgXCJEYXRhY29tXCJdLFxyXG4gICAgICAgIGxpbms6IFwiMy1jb2xsYWJvcmF0aW9uLXdpdGgtZGF0YWNvbS1hbmQtaHVhd2VpXCIsXHJcbiAgICAgICAgY29udGVudDogY29udGVudC5kYXRhY29tLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpbmRleDogNCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiQSBjb21wbGV0ZSBPZmZpY2UgSVQgSW5mcmFzdHJ1Y3R1cmUgZm9yIHNtYWxsIHRvIG1lZGl1bSBzaXplIG9yZ2FuaXphdGlvbnMuXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuIGVudGVycHJpc2UgbGV2ZWwgc29sdXRpb24gZm9yIGFueSBzbWFsbCB0byBtZWRpdW0gc2l6ZSBvcmdhbml6YXRpb24gd2l0aCBzaW5nbGUgb3IgbXVsdGlwbGUgc2l0ZXMuIFRoaXMgc29sdXRpb24gaW5jbHVkZXM6Li4uLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIjIzcmQgT2N0b2JlciAyMDE5XCIsXHJcbiAgICAgICAgICAgIGJ5OiBcIlNhdXJhYmggU2FyZWVuXCIsXHJcbiAgICAgICAgICAgIGF2YXRhcjogXCIvYXNzZXRzL2ltYWdlcy90ZWFtL3NhdXJhYmguanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL25ld3Nyb29tL2l0LWluZnJhLmpwZ1wiLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJVcGRhdGVzXCIsXHJcbiAgICAgICAgICAgIHRhZ3M6IFtcImNpc2NvXCIsIFwiRElEXCIgLCBcIkZpcmV3YWxsXCIgLCBcIldMQ1wiICwgXCJBcGxsaWNhdGlvbiBTZXJ2ZXJcIiAsIFwiQmFja3VwXCJdLFxyXG4gICAgICAgICAgICBsaW5rOiBcIjQtSW5mcmEgZm9yIG1lZGl1bSBidXNpbmVzc2VzXCIsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbnRlbnQuaXRJbmZyYSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaW5kZXg6IDUsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkxhdW5jaGluZyBhIGNvbXBsZXRlIFZESS9SRFMgYXMgYSBTb2x1dGlvblwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJXZSBmZWVsIHByb3VkIGluIGFubm91bmNpbmcgQ29uc3RhbnRWREkgc2VydmljZSBvZmZlcmluZywgd2hpY2ggd2lsbCBvZmZlciB5b3UgYSBjb21wbGV0ZSBWREkvUkRTIEFzIEEgU2VydmljZSBTb2x1dGlvbiB1c2luZyBWTVdBUkUsIFBhcmFsbGVscyBhbmQgQWNyb25pcyBDeWJlciBJbmZyYXN0cnVjdHVyZS4gLi4uLlwiLFxyXG4gICAgICAgICAgICBkYXRlOiBcIlNlcHRlbWJlciAyMDE5XCIsXHJcbiAgICAgICAgICAgIGJ5OiBcIlNhdXJhYmggU2FyZWVuXCIsXHJcbiAgICAgICAgICAgIGF2YXRhcjogXCIvYXNzZXRzL2ltYWdlcy90ZWFtL3NhdXJhYmguanBnXCIsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL25ld3Nyb29tL2NvbXBsZXRlX3ZkaS5qcGdcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiVXBkYXRlc1wiLFxyXG4gICAgICAgICAgICB0YWdzOiBbXCJSRFNcIiwgXCJWRElcIiwgXCJQT0NcIiwgXCJTT0VcIiAsIFwiT2ZmaWNlIDM2NVwiXSxcclxuICAgICAgICAgICAgbGluazogXCI1LVZESSBhcyBhIFNlcnZpY2VcIixcclxuICAgICAgICAgICAgY29udGVudDogY29udGVudC52ZGlhYXMsXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJsb2dzIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiY29udGVudFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcInhsXCIsXHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlRoZSBkaWZmaWN1bHQgQ09WSUQtMTkgZXJhIGhhcyBhbHNvIGJyb3VnaHQgb3V0IGhvdyBzdHJvbmcgcGFydG5lcnNoaXBzIGNyZWF0ZSBsYXN0aW5nIHZhbHVlLiBCRyBVbmlmaWVkIFNvbHV0aW9ucyBhbmQgSHVhd2VpIEF1c3RyYWxpYSBoYXZlIGJlZW4gd29ya2luZyBjb2xsYWJvcmF0aXZlbHkgdG8gcHJvdmlkZSBhbGwgQXVzdHJhbGlhbnMgd2l0aCBzb2xpZCBhbmQgY29tcHJlaGVuc2l2ZSBJVCBzb2x1dGlvbnMsIGtlZXBpbmcgYnVzaW5lc3Mgb3BlcmF0aW9ucyBydW5uaW5nIGVmZmljaWVudGx5IGR1cmluZyB0aGUgbW9zdCBjaGFsbGVuZ2luZyB0aW1lcy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcyBhIGxlYWRlciBvZiBCR1VTLCBJIGFtIGRlbGlnaHRlZCB0byBvZmZlciBmcmVlIHNlcnZpY2VzKiBmb3IgdGhlIG5leHQgdGhyZWUgbW9udGhzIHRvIGFueSBidXNpbmVzcyhzKSByZWxhdGVkIHRvIHRoZSBIZWFsdGggYW5kIFNhZmV0eSBvZiBBdXN0cmFsaWFucy4gWW91IG5lZWQgUmVtb3RlIFBob25lIFN5c3RlbSwgVmlydHVhbCBEZXNrdG9wcywgQmFyZSBNZXRhbCBTZXJ2ZXJzIHRvIGhvc3QgeW91ciBWTSdzLCBEYXRhYmFzZSBTZXJ2ZXJzLCBUZWxlcHJlc2VuY2UvVkNTIFNvbHV0aW9uIG9yIGFueXRoaW5nIHdoaWNoIHdlIGNhbiBvZmZlciB3aXRoIHRoZSBjdXJyZW50IHNvbHV0aW9ucyBpbiBCR1VTIHNlcnZpY2Ugb2ZmZXJpbmdzLiBObyBjaGFyZ2VzIGF0IGFsbCBmb3IgdGhlIG5leHQgdGhyZWUgbW9udGhzLiBMZXQgdXMgaGVscCB5b3UgaWYgeW91IGhhdmUgbGltaXRlZCBidWRnZXRzIGFuZCBiZWNhdXNlIG9mIENPVklEIHlvdXIgY3VycmVudCBpbmZyYXN0cnVjdHVyZSBjYW4ndCBoYW5kbGUgdGhlIGxvYWQuIERpYWwgbXkgZGlyZWN0IGxpbmUgKzYxIDIgOTA5NSAwMDAwLiBXZSB3aWxsIGdldCB0aGluZ3MgaW4gbW90aW9uIHZlcnkgcXVpY2tseS5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZSBoYXZlIG5vdGljZWQgYSBiaWcganVtcCBpbiB0aGUgbnVtYmVyIG9mIHJlbW90ZSB1c2VycyBmcm9tIDIwIG9yIDMwIG9uIGF2ZXJhZ2UgdG8gMjc1IGFzIHBlciB0aGUgbGF0ZXN0IHJlcG9ydHMuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiIEtlZXBpbmcgaW4gbWluZCB0aGUgZGlzYXN0cm91cyBlZmZlY3Qgb2YgQ29yb25hdmlydXMgYW5kIHRoZSByZXF1aXJlbWVudHMgdG8gd29yayBmcm9tIGhvbWUsIEJHIFVuaWZpZWQgU29sdXRpb25zIHdpbGwgYmUgb2ZmZXJpbmcgdG8gYW55IG9yZ2FuaXphdGlvbiByZWxhdGVkIHRvIEhlYWx0aCBhbmQgUHVibGljIFNhZmV0eSwgYW55IHNvbHV0aW9uIHRoYXQgaGVscHMgeW91IHRvIGNhcnJ5IG9uIHlvdXIgd29yayByZW1vdGVseSBGUkVFIE9GIENPU1QuIFdoZXRoZXIgeW91IG5lZWQgVkRJLCBQaG9uZSBTeXN0ZW0gb3IgQ29udGFjdCBDZW50ZXIgb3IgYW55dGhpbmcgd2hpY2ggaGVscHMgeW91IHRvIGNhcnJ5IG9uIHlvdXIgd29yayBhbmQgaGVscCBBVVNUUkFMSUFOUyBpbiB0aGlzIHRvdWdoIHNpdHVhdGlvbiwgcGxlYXNlIGNvbnRhY3QgbWUuIFwiICxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJLZWVwaW5nIGFuIGV5ZSBvbiB0aGUgY3VycmVudCBzaXR1YXRpb24sIHdlIGhhdmUgaW50cm9kdWNlZCBtb3JlIGNvbXB1dGUgYW5kIHN0b3JhZ2UgdG8gb3VyIFZESSBjbHVzdGVycyBhY3Jvc3MgYWxsIERDIGxvY2F0aW9ucy4gV2UgYXJlIHJlYWR5IHRvIGdpdmUgeW91IGEgY29tcGxldGUgVkRJL1JEU2FhUyBzb2x1dGlvbiBydW5uaW5nIFdpbmRvd3MgMTAgLyBXaW5kb3dzIFNlcnZlciAyMDE2IHdpdGggYWxsIG5lY2Vzc2FyeSBhcHBsaWNhdGlvbnMgdG8gY2Fycnkgb24geW91ciB3b3JrIGZyb20gaG9tZS4gVGhlIHNvbHV0aW9uIGNhbiBzdXBwb3J0IGEgbWF4aW11bSBvZiAxNTAwMCBWREkgaW5zdGFuY2VzLlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbnN0YW50RUZHIC0gYW5vdGhlciBzZXJ2aWNlIG9mZmVyZWQgYnkgQkcgVW5pZmllZCBTb2x1dGlvbnMsIGlzIHByb3ZpZGluZyBFbWFpbCBGaWx0ZXJpbmcgZm9yIFVubGltaXRlZCBEb21haW5zIGFuZCBVbmxpbWl0ZWQgdXNlcnMgdW5kZXIgbGVzcyB0aGFuICQzay4gQSBoaWdobHkgcmVkdW5kYW50IHNvbHV0aW9uIGFjcm9zcyBtdWx0aXBsZSBEQyBsb2NhdGlvbnMgd2l0aCBmdWxseSBtYW5hZ2VkIGJ5IDI0eDcgTk9DLlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIldlIHdlbnQgdG8gd29yayB3aXRoIEJHVSwgbGF5aW5nIHRoZSBncm91bmR3b3JrIGZvciBhIG1pZ3JhdGlvbiB0aGF0IHdvdWxkIGhvcGVmdWxseSBjYXVzZSBubyBmdXJ0aGVyIGRpc3J1cHRpb24gdG8gQkfigJlzIGN1c3RvbWVycy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJVc2luZyB0aGUgRGF0YWNvbSBOYXRpb25hbCBOZXR3b3JrLCB3ZSB3ZXJlIGFibGUgdG8gaW50ZXJjb25uZWN0IHdpdGggQkdV4oCZcyBleGlzdGluZyBob3N0aW5nIHByb3ZpZGVyIHZpYSBoaWdoIGNhcGFjaXR5IGxpbmtzIHRvIHVuZGVydGFrZSB0aGUgbWlncmF0aW9uIG9mIGRhdGEgYW5kIGFwcGxpY2F0aW9ucy4gVGhlIHdob2xlIHByb2Nlc3MgdG9vayBqdXN0IHR3byB3ZWVrcy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIHR5cGU6IFwiY29udGVudFwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcInhsXCIsXHJcbiAgICAgICAgZGF0YTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNPVklELTE5IHdvcmtpbmcgZnJvbSBob21lIHRhdWdodCB1cyBtb3JlIGxlc3NvbnMgYW5kIGV2ZW4gbGV0IHVzIGFibGUgdG8gZmlndXJlIGl0IG91dCBob3cgd2UgY2FuIGJlIGV4cG9uZW50aWFsbHkgcHJvZHVjdGl2ZSB0aGFuIGp1c3QgZW5qb3lpbmcgdGhlIGNvbWZvcnQgb2Ygc3RheWluZyBhdCBob21lLiBIb3cgaXMgaXQgcG9zc2libGUgZm9yIHVzIHRvIHN0cmVhbWxpbmUgZXZlcnl0aGluZyBhbmQgaGl0IG91ciBnb2Fscy4gV29ya2luZyBvbiBicmluZ2luZyBtb3JlIGNsaWVudHMgb24gYm9hcmQsIHdoYXQgaW52ZXN0bWVudHMgYXJlIGFsaWduZWQgd2l0aCB0aGUgYnVzaW5lc3MgZ29hbHMsIHdoYXTigJlzIHRoZSBjb21wYW55IHZpc2lvbiwgd2hlcmUgd2Ugd2FudCB0byB0YWtlIHRoaXMgY29tcGFueSwgd2hhdCB3ZSBjYW4gZG8gYmV0dGVyIGZvciBvdXIgY2xpZW50cywgZ2l2ZSB0aGVtIG1vcmUgbG92ZS4gVGVjaG5vbG9neSBoYXMgZ2l2ZW4gdXMgZW5vdWdoIG9wcG9ydHVuaXR5IHRvIG1ha2UgdGltZSBvdXQgb2YgdGltZSBhbmQgbWFrZSBCRyBtb3JlIHByb2ZpdGFibGUuIEIyQiBjYWxscyBvciB3b3JraW5nIG9uIGhpZ2hseSBzZW5zaXRpdmUgcHJvamVjdHMgLSB0aGlzIHRlY2hub2xvZ3kganVzdCBtYWRlIGl0IGVhc3kgZm9yIHVzIHRvIG1ha2UgdGhlIGNvbXBhbnnigJlzIHByb2ZpdHMgZXhwb25lbnRpYWwgYW5kIHdlIHN1cmVseSBob3BlIHRvIGxlYXJuIG1vcmUgd2l0aCB0aGlzIG9wcG9ydHVuaXR5IHRvIHdvcmsgZnJvbSBob21lLlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkJHIFVuaWZpZWQgU29sdXRpb25zIGhhcyBub3cgdXBncmFkZWQgYWxsIG9mIHRoZSBWUE5IRUFERU5EIGZpcmV3YWxscywgd2hlcmUgYWxsIG9mIHRoZSByZW1vdGUgdXNlcnMgLyByZW1vdGUgcGhvbmVzIC8gYW55IG90aGVyIHNlY3VyZSByZW1vdGUgY29ubmVjdGl2aXR5IHRlcm1pbmF0ZXMgaW50byAxMEcgRmlyZXdhbGxzIHdpdGggZWFjaCBmaXJld2FsbCBoYXZpbmcgYSBjYXBhY2l0eSBvZiAyIG1pbGxpb24gY29uY3VycmVudCBjb25uZWN0aW9ucy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiV2UgaGF2ZSBpbmNyZWFzZWQgb3VyIGZpcmV3YWxscyBjYXBhY2l0eSB0byAxMEcgZmlyZXdhbGxzIGluIGFsbCBEQyBsb2NhdGlvbnMuIE5vdyB3ZSBoYXZlIFBhbG9BbHRvIDVLLCBGb3J0aW5ldCAzNzAwROKAmXMgYW5kIEFTQSA1NTg1WCB3aXRoIGZ1bGwgVVRNIGNhcGFiaWxpdGllcyB0byBwcm92aWRlIHlvdSB3aXRoIGEgc2VjdXJlIGludGVybmV0IGFjY2Vzcy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZSBoYXZlIGluY3JlYXNlZCBvdXIgY29yZSBjYXBhY2l0eSBpbiBhbGwgREMgbG9jYXRpb25zIHRvIDQwRyBkZXZpY2VzIHdpdGggQUxMRkxBU0ggc3RvcmFnZSBmb3IgVkRJL1JEU2FhUy4gV2UgaGF2ZSBhZGRlZCAxNTAgVEIgb2YgQUxMRkxBU0ggU3RvcmFnZSBpbnRvIG91ciBEQyBsb2NhdGlvbnMgdG8gc3VwcG9ydCBWRElhYVMsIFdvcmtzdGF0aW9uQUFTIGFuZCBSRFNhYVMuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQWxsIG9mIHRoZSBmaXJld2FsbHMgaW4gcHJvZHVjdGlvbiBhcmUgbm93IDEwRyBmaXJld2FsbHMuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiIFdlIGhhdmUgYWRkZWQgMTUwIFRCIG9mIEFMTEZMQVNIIFN0b3JhZ2UgaW50byBvdXIgREMgbG9jYXRpb25zIHRvIHN1cHBvcnQgVkRJYWFTLCBXb3Jrc3RhdGlvbkFBUyBhbmQgUkRTYWFTLiBXZSB3aWxsIGNvbXBpbGUgdGhlIGdvbGRlbiBpbWFnZSBmb3IgeW91IGFuZCBnZXQgYWxsIHRoZSBuZWNlc3Nhcnkgc29mdHdhcmUgZm9yIHlvdSB0byB3b3JrIHJlbW90ZWx5LiBXZSBjYW4gcHJvdmlkZSB5b3Ugd2l0aCBVQ2FhUyB1c2luZyBDSVNDTyBvciBBdmF5YS5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZSBjYW4gbWFrZSBDb250YWN0IENlbnRlciBzY3JpcHRzIGZvciB5b3Ugd2l0aG91dCBhbnkgcHJvZmVzc2lvbmFsIHNlcnZpY2VzIGNvc3RzLlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlRoZSBkaWZmaWN1bHQgQ09WSUQtMTkgZXJhIGhhcyBhbHNvIGJyb3VnaHQgb3V0IGhvdyBzdHJvbmcgcGFydG5lcnNoaXBzIGNyZWF0ZSBsYXN0aW5nIHZhbHVlLiBCRyBVbmlmaWVkIFNvbHV0aW9ucyBhbmQgSHVhd2VpIEF1c3RyYWxpYSBoYXZlIGJlZW4gd29ya2luZyBjb2xsYWJvcmF0aXZlbHkgdG8gcHJvdmlkZSBhbGwgQXVzdHJhbGlhbnMgd2l0aCBzb2xpZCBhbmQgY29tcHJlaGVuc2l2ZSBJVCBzb2x1dGlvbnMsIGtlZXBpbmcgYnVzaW5lc3Mgb3BlcmF0aW9ucyBydW5uaW5nIGVmZmljaWVudGx5IGR1cmluZyB0aGUgbW9zdCBjaGFsbGVuZ2luZyB0aW1lcy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJXZSBhcmUgaGVyZSB0byBoZWxwIGluIHRoaXMgdG91Z2ggdGltZS4gUGxlYXNlIGRvIG5vdCBoZXNpdGF0ZSB0byBhc2sgZm9yIGhlbHAsIHdoZXRoZXIgeW91IG5lZWQgVkRJLCBVQywgU3RvcmFnZSwgTWFuYWdlZCBGaXJld2FsbCBvciBhbnl0aGluZyB0aGF0IHdpbGwgaGVscCB5b3UgdG8ga2VlcCBjYXJyeWluZyBvbiB5b3VyIHdvcmsgcmVtb3RlbHkgYW5kIGtlZXAgeW91ICYgeW91ciBmYW1pbHkgc2FmZSBpbiB0aGlzIHRpbWUhICEgISBBbnl0aGluZyB5b3UgbmVlZCBzdGFydGluZyBmcm9tIHN0b3JhZ2UsIERSLCBDb250YWN0IENlbnRlciwgQ29tcHV0ZSwgVkRJLCBSRFMsIEROUywgU0lQLCBFbWFpbCBGaWx0ZXJpbmcgb3IgREIsIGRvbuKAmXQgaGVzaXRhdGUgdG8gY29udGFjdCB1cyEhLlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIldFIEFSRSBIRVJFIFRPIEhFTFAhISFcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OlwiODAwXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIyeGxcIixcclxuICAgICAgICAgICAgICAgIG10OiBcIjMycHhcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXSIsImltcG9ydCBjb3ZpZDE5IGZyb20gJy4vY292aWQxOSdcclxubW9kdWxlLmV4cG9ydHMuY292aWQxOSA9IGNvdmlkMTlcclxuXHJcbmltcG9ydCBkYXRhY29tIGZyb20gJy4vZGF0YWNvbSdcclxubW9kdWxlLmV4cG9ydHMuZGF0YWNvbSA9IGRhdGFjb21cclxuXHJcbmltcG9ydCBpdEluZnJhIGZyb20gJy4vaXRJbmZyYSdcclxubW9kdWxlLmV4cG9ydHMuaXRJbmZyYSA9IGl0SW5mcmFcclxuXHJcbmltcG9ydCB2ZGlhYXMgZnJvbSAnLi92ZGlhYXMnXHJcbm1vZHVsZS5leHBvcnRzLnZkaWFhcyA9IHZkaWFhc1xyXG5cclxuaW1wb3J0IGJ1c2luZXNzb3AgZnJvbSAnLi9idXNpbmVzc29wJ1xyXG5tb2R1bGUuZXhwb3J0cy5idXNpbmVzc29wID0gYnVzaW5lc3NvcCIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICB0eXBlOiBcImNvbnRlbnRcIixcclxuICAgICAgICBmb250U2l6ZTogXCJ4bFwiLFxyXG4gICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJBbiBlbnRlcnByaXNlIGxldmVsIHNvbHV0aW9uIGZvciBhbnkgc21hbGwgdG8gbWVkaXVtIHNpemUgb3JnYW5pemF0aW9uIHdpdGggc2luZ2xlIG9yIG11bHRpcGxlIHNpdGVzLlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIlRoaXMgc29sdXRpb24gaW5jbHVkZXM6XCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiLUEgQ2lzY28gQVNBIC8gUGFsb0FsdG8gRmlyZXdhbGwgKDU1MTJYIC8gMjIwUEEpIGZ1bGx5IG1hbmFnZWQgYnkgMjR4NyBOT0MuIDM2IG1vbnRocyB3YXJyYW50eSBzdXBwb3J0LlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIi1DaXNjbyAzNzAwLzM4MDAgQWNjZXNzIFBvaW50cyAoNSkgbWFuYWdlZCBjZW50cmFsbHkgYnkgYSBoaWdobHkgcmVkdW5kYW50IENpc2NvIFdMQyBJbmZyYXN0cnVjdHVyZSBob3N0ZWQgaW4gbXVsdGlwbGUgREMgbG9jYXRpb25zLiBDb3Jwb3JhdGUgd2lyZWxlc3MgaW5jbHVkZWQuXCIgLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIi1DaXNjbyBTd2l0Y2ggU3RhY2sgZnVsbHkgbWFuYWdlZCBieSB0aGUgMjR4NyBOT0MuIDM2IG1vbnRocyB3YXJyYW50eSBzdXBwb3J0LlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIi0yMCBDaXNjbyA3OTY1RyBoYW5kc2V0cyBmb3IgMjAgdXNlcnMuIDM2IG1vbnRocyB3YXJyYW50eSBzdXBwb3J0LlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIi1VbmxpbWl0ZWQgY2FsbHMgaW5jbHVkaW5nIGxvY2FsLCBuYXRpb25hbCwgbW9iaWxlLCAxMywgMTMwMCBhbmQgMTgwMC5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCItRElEIGZvciAyMCB1c2Vycy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCItMSB4IEhvc3RlZCBGaWxlIFNlcnZlciAvIEFwcGxpY2F0aW9uIFNlcnZlciB3aXRoIDggdkNQVSdzLCA4R0IgUkFNIGFuZCAxVEIgVDEgU3RvcmFnZSB3aXRoIERhaWx5IEJhY2t1cHMuIFdpbmRvd3MgTGljZW5zZXMgaW5jbHVkZWQuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiLVUxIHggSG9zdGVkIFNRTCBTZXJ2ZXIgd2l0aCAxMiB2Q1BVJ3MsIDE2R0IgUkFNIGFuZCAxVEIgVDEgU3RvcmFnZSB3aXRoIERhaWx5IEJhY2t1cHMuIFdpbmRvd3MgTGljZW5zZXMgaW5jbHVkZWQuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiLTVUQiBUMyBCYWNrdXAgU3RvcmFnZS5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCItRW1haWwgRmlsdGVyaW5nIGZvciA1IERvbWFpbnMgdXNpbmcgaGlnaGx5IHJlZHVuZGFudCBFbWFpbCBGaWx0ZXJpbmcgR2F0ZXdheXMgZm9yIHVubGltaXRlZCB1c2Vycy5cIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTdGF5aW5nIFN0cm9uZyBkdXJpbmcgdGhlc2UgaGFyZCB0aW1lcy4uICBXZSBhcmUgcHJvZ3Jlc3NpbmcgYXQgYSByYXBpZCByYXRlISFcIixcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICBdXHJcbiAgICB9XHJcbl0iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdHlwZTogXCJjb250ZW50XCIsXHJcbiAgICAgICAgZm9udFNpemU6IFwieGxcIixcclxuICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiV2UgZmVlbCBwcm91ZCBpbiBhbm5vdW5jaW5nIENvbnN0YW50VkRJIHNlcnZpY2Ugb2ZmZXJpbmcsIHdoaWNoIHdpbGwgb2ZmZXIgeW91IGEgY29tcGxldGUgVkRJL1JEUyBBcyBBIFNlcnZpY2UgU29sdXRpb24gdXNpbmcgVk1XQVJFLCBQYXJhbGxlbHMgYW5kIEFjcm9uaXMgQ3liZXIgSW5mcmFzdHJ1Y3R1cmUuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiVGhlIHNvbHV0aW9uIHdpbGwgYmUgdGFpbG9yZWQgdG8geW91ciByZXF1aXJlbWVudHMuIFdlIGhhdmUgZG9uZSBhbiBleHRlbnNpdmUgUE9DIHVzaW5nIFBhcmFsbGVscyBhbmQgVk1XQVJFIHVzaW5nIGRpZmZlcmVudCBjbGllbnRzIGluY2x1ZGluZyBXaW5kb3dzIDEwLCBpUGhvbmUsIGlQQUQgYW5kIEFuZHJvaWQgZnJvbSBkaWZmZXJlbnQgbG9jYXRpb25zIGluIEF1c3RyYWxpYSwgTlosIFVBRSBhbmQgQ2hpbmEuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU09FIGVuZ2luZWVycyB3aWxsIHdvcmsgd2l0aCB5b3UgdG8gY3JlYXRlIGEgZ29sZGVuIGltYWdlIGZvciBWREkgZGVwbG95bWVudC4gU2Vzc2lvbiBiYXNlZCBSRFMgd2lsbCBiZSBkZXBsb3llZCB1c2luZyBoaWdoIHBlcmZvcm1hbmNlIFJEUyBzZXJ2ZXJzICgyNHZDUFUncyAvIDEyOEdCIFJBTSAvIDEwRyBOZXR3b3JrIENvbm5lY3Rpdml0eSkuXCIsXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiRGFpbHkgLyBIb3VybHkgYmFja3VwcyB1c2luZyBBY3JvbmlzIHdpbGwgZ2l2ZSB5b3UgYSBwZWFjZSBvZiBtaW5kLlwiICxcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJTb2x1dGlvbiBpcyBmdWxseSBpbnRlZ3JhdGVkIHdpdGggb3RoZXIgTWljcm9zb2Z0IE9mZmljZSBwcm9kdWN0cyBsaWtlIHRlYW1zIGFuZCBvZmZpY2UgMzY1LlwiLFxyXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXVxyXG4gICAgfVxyXG5dIl0sInNvdXJjZVJvb3QiOiIifQ==