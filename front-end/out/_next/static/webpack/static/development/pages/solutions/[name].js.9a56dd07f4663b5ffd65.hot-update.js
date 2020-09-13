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

var _ucaas = _interopRequireDefault(__webpack_require__(/*! ./ucaas */ "./src/pageBuilder/pages/solutions/ucaas.jsx"));

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
module.exports.ucaas = _ucaas.default;
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

/***/ "./src/pageBuilder/pages/solutions/ucaas.jsx":
/*!***************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/ucaas.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_UcaasPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/UcaasPricing */ "./src/pageBuilder/pricing/UcaasPricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\ucaas.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  typeWriter_title: {
    before: "",
    typed: ["Capture", "Live Stream", "Repurpose"],
    after: " Your Application on the Cloud"
  },
  titleStyle: {
    fontSize: ["3xl", "4xl"],
    px: "5px"
  },
  description: "Cisco and Avaya Unified Collaboration, Messaging, Telepresence, Contact Center, Workforce Optimization and Quality Monitoring. N+N Redundant components fulfilling all Unified Collaboration requirements of your business. Expertise to address these challenges by designing and delivering complete collaboration solutions that maximize your capabilities and investments while minimizing your technology footprint",
  descriptionStyle: {
    textAlign: "left"
  },
  rowDistance: 8,
  gap: 10,
  body: [{
    py: 4,
    width: ["95%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/microphone.svg",
      title: "Voice Integration",
      align: "left",
      description: "Extended capability of your telephony solutions, for a better output with the same resource."
    }
  }, {
    py: 4,
    width: ["95%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/chat.svg",
      title: "Unified Messaging",
      align: "left",
      description: "Different forms of media (E-Mail, SMS, video, voicemail), integrated into a single system."
    }
  }, {
    py: 4,
    width: ["95%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/learn.svg",
      title: "Collaboration Experts",
      align: "left",
      description: "We offer business and technology assessments to help identify any barriers in order for your collaborative Goals to succeed."
    }
  }, {
    py: 4,
    width: ["95%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/cloud.svg",
      title: "Backup over Cloud",
      align: "left",
      description: "The business keeps on running smoothly, with everything backed up on cloud, while taking measures for potential threats."
    }
  }, {
    py: 4,
    width: ["95%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/headphones.svg",
      title: "Excellent Customer Support",
      align: "left",
      description: "BGUS's friendly and skilled customer support service is available 24X7X365 with very less response time. Our policies ensure rapid and satisfactory resolution of issues."
    }
  }, {
    py: 4,
    width: ["95%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      titleSize: "md",
      titleFont: "Nexa Bold",
      textOpacity: "0.7",
      image: "/assets/images/icons/color/user.svg",
      title: "Hot Desking",
      align: "left",
      description: "Log onto any device on your personal system, and have your user profile, populate on that particular system."
    }
  }]
}, {
  bg: "light.400",
  py: 16,
  gap: 0,
  body: [{
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_UcaasPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 19
      }
    })
  }]
}, {
  title: "Why BG Unified Solutions?",
  rowDistance: 8,
  py: [8, 16],
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Flexibility / Scalability",
        description: "For any of your organization departments, our UCaaS offering provides a simplified IT management and a highly scalable platform. Irrespective of the end-user, everyone gets access to the latest and the greatest collaboration tools.",
        image: "/assets/images/Illustrations/FlexibilityAndScalabilty_AppDev.svg"
      }, {
        title: "Cost-Effectiveness",
        description: "For your business, we are offering and providing a flat billing structure. It's designed for pay as you go model that shifts your costs from capex to opex. You will have very simplified and predictable expenses and have the option of rolling any upfront or one-off expenses into your monthly payment.",
        image: "/assets/images/Illustrations/Value_for_Money.svg"
      }, {
        title: "Wide range of services",
        description: "Employees get access to voice and video, voicemail and integrated messaging, instant messaging and presence, web conferencing and desktop collaboration, mobility service.",
        image: "/assets/images/Illustrations/platforms.svg"
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

/***/ "./src/pageBuilder/pricing/UcaasPricing.jsx":
/*!**************************************************!*\
  !*** ./src/pageBuilder/pricing/UcaasPricing.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/cards/PricingCard */ "./src/components/cards/PricingCard.jsx");



var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\UcaasPricing.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

const CustomRadio = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(_c = (props, ref) => {
  const {
    isChecked,
    isDisabled,
    value
  } = props,
        rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["isChecked", "isDisabled", "value"]);

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "my-1",
    fontSize: ["13px", "14px", "16px"],
    ref: ref,
    variant: isChecked ? "solid" : "outline",
    variantColor: isChecked ? "primary" : "gray.300",
    "aria-checked": isChecked,
    role: "radio",
    isDisabled: isDisabled
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }));
});
_c2 = CustomRadio;

function UcaasPricing(props) {
  _s();

  const {
    0: node,
    1: setNode
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: type,
    1: setType
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("20-10 SIP");
  const {
    0: additionalUcaas,
    1: setadditionalUcaas
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: hunts,
    1: setHunts
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: num10,
    1: setNum10
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: num50,
    1: setNum50
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: num100,
    1: setNum100
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: extraVM,
    1: setExtraVM
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);

  const handleChange = value => {
    setValue(value);
    setExtraVM(value);
  };

  const {
    0: showSIP,
    1: setShowSIP
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: addSIP,
    1: setAddSIP
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: advancedOptions,
    1: setAdvancedOptions
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const resetOnCardChange = () => {
    setAddSIP(0);
    setShowSIP(false);
  };

  return __jsx("div", {
    id: "pricing",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "col-lg-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    align: "center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["TabList"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 37
    }
  }, "Cisco"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 37
    }
  }, "Avaya"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
    className: "py-4 px-5 display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 37
    }
  }, "3CX")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["TabPanels"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    duration: 500,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    title: "Single Node CUCM",
    icon: "/assets/images/icons/theme/fax.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 57
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Single Node CUCM");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 57
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    title: "Dual Node CUCM",
    icon: "/assets/images/icons/theme/fax.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 55
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Dual Node CUCM");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 57
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    className: "hover-effect",
    title: "Multiple Nodes CUCM",
    icon: "/assets/images/icons/theme/fax.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Multiple Nodes CUCM");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 57
    }
  }, "View More"))))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 37
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    duration: 500,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    title: "Single Node IP Office",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Single Node IP Office");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 57
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    title: "Dual Node IP Office",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Dual Node IP Office");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 57
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    className: "hover-effect",
    title: "Multiple Nodes IP Office",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Multiple Nodes IP Office");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 57
    }
  }, "View More"))))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["TabPanel"], {
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 37
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    duration: 500,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    title: "Single Node CX",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Single Node CX");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308,
      columnNumber: 57
    }
  }, "View More")))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    title: "Dual Node CX",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Dual Node CX");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338,
      columnNumber: 57
    }
  }, "View More"), "/"))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356,
      columnNumber: 49
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingCard"], {
    className: "hover-effect",
    title: "Multiple Nodes CX",
    icon: "/assets/images/icons/theme/firewall_virtual.svg",
    featureList: ["Include Voicemail", "Include Presence", "Include Voicemail to Email*", "Include Cisco Jabber"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357,
      columnNumber: 53
    }
  }, __jsx("a", {
    href: "#collapse-1",
    className: "no-red",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls();
      setNode("Multiple Nodes CX");
      resetOnCardChange();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 369,
      columnNumber: 57
    }
  }, "View More"))))))))), __jsx("div", {
    id: "collapse-1",
    className: "collapse-target",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    isOpen: show,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "px-4 py-5 border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 398,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "display5 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 399,
      columnNumber: 41
    }
  }, node), __jsx("div", {
    className: "row justify-content-center px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 402,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "mt-4 col-12",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 403,
      columnNumber: 45
    }
  }), __jsx("div", {
    className: "col-lg-11 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406,
      columnNumber: 49
    }
  }, "Choose a type"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["RadioButtonGroup"], {
    onChange: value => {
      setType(value);
      setAddSIP(0);
      setShowSIP(false);
    },
    defaultValue: "20-10 SIP",
    mt: 4,
    isInline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409,
      columnNumber: 49
    }
  }, __jsx(CustomRadio, {
    value: "10-5 SIP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419,
      columnNumber: 53
    }
  }, "UCAAS-10-5SIP"), __jsx(CustomRadio, {
    value: "20-10 SIP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 422,
      columnNumber: 53
    }
  }, "UCAAS-20-10SIP"), __jsx(CustomRadio, {
    value: "30-20 SIP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425,
      columnNumber: 53
    }
  }, "UCAAS-30-20SIP"), __jsx(CustomRadio, {
    value: "50-30 SIP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428,
      columnNumber: 53
    }
  }, "UCAAS-50-30SIP"), __jsx(CustomRadio, {
    value: "100-50 SIP",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431,
      columnNumber: 53
    }
  }, "UCAAS-100-50SIP"))), __jsx("div", {
    className: "mt-4 col-lg-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 436,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437,
      columnNumber: 49
    }
  }, __jsx("p", {
    className: " NunitoSans-Bold ",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438,
      columnNumber: 53
    }
  }, " ", "- This type includes", " ", type.slice(0, 2), " UCaaS users and", " ", type.slice(3), " ", "channels.", " ", __jsx("a", {
    onClick: () => {
      setShowSIP(!showSIP);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 445,
      columnNumber: 57
    }
  }, " ", "Add Additional SIP?", " "), " "))), __jsx("div", {
    className: "col-lg-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458,
      columnNumber: 45
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    className: "mt-4",
    isOpen: showSIP,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 53
    }
  }, "Additional SIP"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    color: "primary",
    defaultValue: 30,
    value: addSIP,
    onChange: value => {
      setAddSIP(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 474,
      columnNumber: 57
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478,
      columnNumber: 57
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: addSIP,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 482,
      columnNumber: 57
    }
  })))), __jsx("div", {
    className: "col-lg-11 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495,
      columnNumber: 49
    }
  }, "Extra VMs"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    color: "primary",
    defaultValue: 30,
    value: value,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 498,
      columnNumber: 49
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504,
      columnNumber: 53
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508,
      columnNumber: 53
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 512,
      columnNumber: 53
    }
  }))), __jsx("div", {
    className: "col-lg-5 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524,
      columnNumber: 49
    }
  }, "Additional UCaaS"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInput"], {
    onChange: value => setadditionalUcaas(value),
    defaultValue: 0,
    min: 0,
    max: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527,
      columnNumber: 49
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537,
      columnNumber: 53
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539,
      columnNumber: 57
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540,
      columnNumber: 57
    }
  })))), __jsx("div", {
    className: "col-lg-5 offset-lg-1 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545,
      columnNumber: 49
    }
  }, "Additional Hunt Groups"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInput"], {
    onChange: value => setHunts(value),
    defaultValue: 0,
    min: 0,
    max: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548,
      columnNumber: 49
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 556,
      columnNumber: 53
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557,
      columnNumber: 53
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558,
      columnNumber: 57
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559,
      columnNumber: 57
    }
  })))), __jsx("div", {
    className: "col-lg-11 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563,
      columnNumber: 45
    }
  }, __jsx("a", {
    onClick: () => {
      setAdvancedOptions(!advancedOptions);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564,
      columnNumber: 49
    }
  }, " ", "Advanced Options", " ")), __jsx("div", {
    className: "col-lg-11",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576,
      columnNumber: 45
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    className: "row",
    isOpen: advancedOptions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "col-lg-3 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582,
      columnNumber: 57
    }
  }, "NUM-10"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInput"], {
    onChange: value => setNum10(value),
    defaultValue: 0,
    min: 0,
    max: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 585,
      columnNumber: 57
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 593,
      columnNumber: 61
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594,
      columnNumber: 61
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595,
      columnNumber: 65
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596,
      columnNumber: 65
    }
  })))), __jsx("div", {
    className: "col-lg-3 offset-lg-1 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 600,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601,
      columnNumber: 57
    }
  }, "NUM-50"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInput"], {
    onChange: value => setNum50(value),
    defaultValue: 0,
    min: 0,
    max: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604,
      columnNumber: 57
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612,
      columnNumber: 61
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613,
      columnNumber: 61
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 614,
      columnNumber: 65
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 615,
      columnNumber: 65
    }
  })))), __jsx("div", {
    className: "col-lg-3 offset-lg-1 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619,
      columnNumber: 53
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 620,
      columnNumber: 57
    }
  }, "NUM-100"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInput"], {
    onChange: value => setNum100(value),
    defaultValue: 0,
    min: 0,
    max: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 623,
      columnNumber: 57
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 631,
      columnNumber: 61
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632,
      columnNumber: 61
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 633,
      columnNumber: 65
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 634,
      columnNumber: 65
    }
  })))))), __jsx("div", {
    className: "col-lg-12 mt-4 d-flex justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 641,
      columnNumber: 45
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_5__["PricingQuote"], {
    button: true,
    serviceName: "Unified Communications As A Service",
    serviceDescription: `${node},${type}${verifyNotEmpty(additionalUcaas, "Additional UCaaS")}${verifyNotEmpty(addSIP, "Additional SIP")}${verifyNotEmpty(extraVM, "Extra VMs")}${verifyNotEmpty(hunts, "Additonal Hunts")}${verifyNotEmpty(num10, "NUM-10")}${verifyNotEmpty(num50, "NUM-50")}${verifyNotEmpty(num100, "NUM-100")}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642,
      columnNumber: 49
    }
  })))))))));
}

_s(UcaasPricing, "gcswMarqIFfKpIyhNX7l2+RoXT4=");

_c3 = UcaasPricing;
/* harmony default export */ __webpack_exports__["default"] = (UcaasPricing);

var _c, _c2, _c3;

$RefreshReg$(_c, "CustomRadio$React.forwardRef");
$RefreshReg$(_c2, "CustomRadio");
$RefreshReg$(_c3, "UcaasPricing");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL3VjYWFzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcHJpY2luZy9VY2Fhc1ByaWNpbmcuanN4Il0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzdG9yYWdlIiwiaW5mcmEiLCJsb2dnaW5nIiwiYmFja3VwIiwiZG5zIiwicGxhdGZvcm0iLCJmaXJld2FsbCIsImNhbGxjZW50ZXIiLCJ3aXJlbGVzcyIsInByb3h5IiwiaG9zdGluZyIsImNleCIsInNpcCIsInVjYWFzIiwiYXBwZGV2Iiwic2R3YW4iLCJkciIsImFyY2hpdGVjdHVyZSIsImxvYWRCYWxhbmNlciIsIndvcmtzdGF0aW9uIiwic29jYWFzIiwid2FmYWFzIiwiZGJhYXMiLCJ3ZWJkZXYiLCJ0eXBlV3JpdGVyX3RpdGxlIiwiYmVmb3JlIiwidHlwZWQiLCJhZnRlciIsInRpdGxlU3R5bGUiLCJmb250U2l6ZSIsInB4IiwiZGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvblN0eWxlIiwidGV4dEFsaWduIiwicm93RGlzdGFuY2UiLCJnYXAiLCJib2R5IiwicHkiLCJ3aWR0aCIsInR5cGUiLCJkYXRhIiwidGl0bGVTaXplIiwidGl0bGVGb250IiwidGV4dE9wYWNpdHkiLCJpbWFnZSIsInRpdGxlIiwiYWxpZ24iLCJiZyIsImNvbnRlbnQiLCJ2ZXJpZnlOb3RFbXB0eSIsIngiLCJ0ZXh0IiwiQ3VzdG9tUmFkaW8iLCJSZWFjdCIsImZvcndhcmRSZWYiLCJwcm9wcyIsInJlZiIsImlzQ2hlY2tlZCIsImlzRGlzYWJsZWQiLCJ2YWx1ZSIsInJlc3QiLCJVY2Fhc1ByaWNpbmciLCJub2RlIiwic2V0Tm9kZSIsInVzZVN0YXRlIiwic2V0VHlwZSIsImFkZGl0aW9uYWxVY2FhcyIsInNldGFkZGl0aW9uYWxVY2FhcyIsImh1bnRzIiwic2V0SHVudHMiLCJudW0xMCIsInNldE51bTEwIiwibnVtNTAiLCJzZXROdW01MCIsIm51bTEwMCIsInNldE51bTEwMCIsImV4dHJhVk0iLCJzZXRFeHRyYVZNIiwic2hvdyIsInNldFNob3ciLCJvcGVuQ29udHJvbHMiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsInNob3dTSVAiLCJzZXRTaG93U0lQIiwiYWRkU0lQIiwic2V0QWRkU0lQIiwiYWR2YW5jZWRPcHRpb25zIiwic2V0QWR2YW5jZWRPcHRpb25zIiwicmVzZXRPbkNhcmRDaGFuZ2UiLCJzbGljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFHQTs7QUFwRUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQUFmLEdBQXlCQSxnQkFBekI7QUFHQUYsTUFBTSxDQUFDQyxPQUFQLENBQWVFLEtBQWYsR0FBdUJBLGNBQXZCO0FBR0FILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlRyxPQUFmLEdBQXlCQSxnQkFBekI7QUFHQUosTUFBTSxDQUFDQyxPQUFQLENBQWVJLE1BQWYsR0FBd0JBLGVBQXhCO0FBR0FMLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSyxHQUFmLEdBQXFCQSxZQUFyQjtBQUdBTixNQUFNLENBQUNDLE9BQVAsQ0FBZU0sUUFBZixHQUEwQkEsaUJBQTFCO0FBR0FQLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTyxRQUFmLEdBQTBCQSxpQkFBMUI7QUFHQVIsTUFBTSxDQUFDQyxPQUFQLENBQWVRLFVBQWYsR0FBNEJBLHNCQUE1QjtBQUdBVCxNQUFNLENBQUND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YUFBUyxFQUFDLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSSixFQVNJLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FUSixDQUpKLENBMUNKLENBREosQ0E5S0osRUErT0k7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMEVBQUQ7QUFDSSxVQUFNLE1BRFY7QUFFSSxlQUFXLEVBQUMscUNBRmhCO0FBR0ksc0JBQWtCLEVBQUcsR0FBRUcsSUFBSyxJQUFHdkIsSUFBSyxHQUFFVSxjQUFjLENBQ2hEaUIsZUFEZ0QsRUFFaEQsa0JBRmdELENBR2xELEdBQUVqQixjQUFjLENBQ2R5QyxNQURjLEVBRWQsZ0JBRmMsQ0FHaEIsR0FBRXpDLGNBQWMsQ0FDZDJCLE9BRGMsRUFFZCxXQUZjLENBR2hCLEdBQUUzQixjQUFjLENBQ2RtQixLQURjLEVBRWQsaUJBRmMsQ0FHaEIsR0FBRW5CLGNBQWMsQ0FDZHFCLEtBRGMsRUFFZCxRQUZjLENBR2hCLEdBQUVyQixjQUFjLENBQ2R1QixLQURjLEVBRWQsUUFGYyxDQUdoQixHQUFFdkIsY0FBYyxDQUNkeUIsTUFEYyxFQUVkLFNBRmMsQ0FHaEIsRUF4Qk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBL09KLENBSkosQ0FMSixDQURKLENBalVKLENBREosQ0FESixDQUZaO0FBa21CSDs7R0F6bkJRYixZOztNQUFBQSxZO0FBMm5CTUEsMkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNvbHV0aW9uc1xcW25hbWVdLmpzLjlhNTZkZDA3ZjQ2NjNiNWZmZDY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiXHJcbm1vZHVsZS5leHBvcnRzLnN0b3JhZ2UgPSBzdG9yYWdlXHJcblxyXG5pbXBvcnQgaW5mcmEgZnJvbSBcIi4vaW5mcmFcIlxyXG5tb2R1bGUuZXhwb3J0cy5pbmZyYSA9IGluZnJhXHJcblxyXG5pbXBvcnQgbG9nZ2luZyBmcm9tICcuL2xvZ2dpbmcnXHJcbm1vZHVsZS5leHBvcnRzLmxvZ2dpbmcgPSBsb2dnaW5nXHJcblxyXG5pbXBvcnQgYmFja3VwIGZyb20gXCIuL2JhY2t1cFwiXHJcbm1vZHVsZS5leHBvcnRzLmJhY2t1cCA9IGJhY2t1cFxyXG5cclxuaW1wb3J0IGRucyBmcm9tIFwiLi9kbnNcIlxyXG5tb2R1bGUuZXhwb3J0cy5kbnMgPSBkbnNcclxuXHJcbmltcG9ydCBwbGF0Zm9ybSBmcm9tIFwiLi9wbGF0Zm9ybVwiXHJcbm1vZHVsZS5leHBvcnRzLnBsYXRmb3JtID0gcGxhdGZvcm1cclxuXHJcbmltcG9ydCBmaXJld2FsbCBmcm9tIFwiLi9maXJld2FsbFwiXHJcbm1vZHVsZS5leHBvcnRzLmZpcmV3YWxsID0gZmlyZXdhbGxcclxuXHJcbmltcG9ydCBjYWxsY2VudGVyIGZyb20gXCIuL2NvbnRhY3QtY2VudGVyXCJcclxubW9kdWxlLmV4cG9ydHMuY2FsbGNlbnRlciA9IGNhbGxjZW50ZXJcclxuXHJcbmltcG9ydCB3aXJlbGVzcyBmcm9tICcuL3dpcmVsZXNzJ1xyXG5tb2R1bGUuZXhwb3J0cy53aXJlbGVzcyA9IHdpcmVsZXNzXHJcblxyXG5pbXBvcnQgcHJveHkgZnJvbSAnLi9wcm94eSdcclxubW9kdWxlLmV4cG9ydHMucHJveHkgPSBwcm94eVxyXG5cclxuaW1wb3J0IGhvc3RpbmcgZnJvbSAnLi9ob3N0aW5nJ1xyXG5tb2R1bGUuZXhwb3J0cy5ob3N0aW5nID0gaG9zdGluZ1xyXG5cclxuaW1wb3J0IGNleCBmcm9tICcuL2NleCdcclxubW9kdWxlLmV4cG9ydHMuY2V4ID0gY2V4XHJcblxyXG5pbXBvcnQgc2lwIGZyb20gJy4vc2lwJ1xyXG5tb2R1bGUuZXhwb3J0cy5zaXAgPSBzaXBcclxuXHJcbmltcG9ydCB1Y2FhcyBmcm9tICcuL3VjYWFzJ1xyXG5tb2R1bGUuZXhwb3J0cy51Y2FhcyA9IHVjYWFzXHJcblxyXG5pbXBvcnQgYXBwZGV2IGZyb20gJy4vYXBwZGV2J1xyXG5tb2R1bGUuZXhwb3J0cy5hcHBkZXYgPSBhcHBkZXZcclxuXHJcbmltcG9ydCBzZHdhbiBmcm9tICcuL3Nkd2FuJ1xyXG5tb2R1bGUuZXhwb3J0cy5zZHdhbiA9IHNkd2FuXHJcblxyXG5pbXBvcnQgZHIgZnJvbSAnLi9kcidcclxubW9kdWxlLmV4cG9ydHMuZHIgPSBkclxyXG5cclxuaW1wb3J0IGFyY2hpdGVjdHVyZSBmcm9tICcuL2FyY2hpdGVjdHVyYWwtY29uc3VsdGFuY3knXHJcbm1vZHVsZS5leHBvcnRzLmFyY2hpdGVjdHVyZSA9IGFyY2hpdGVjdHVyZVxyXG5cclxuaW1wb3J0IGxvYWRCYWxhbmNlciBmcm9tICcuL2xvYWRCYWxhbmNlcidcclxubW9kdWxlLmV4cG9ydHMubG9hZEJhbGFuY2VyID0gbG9hZEJhbGFuY2VyXHJcblxyXG5pbXBvcnQgd29ya3N0YXRpb24gZnJvbSAnLi93b3Jrc3RhdGlvbidcclxubW9kdWxlLmV4cG9ydHMud29ya3N0YXRpb24gPSB3b3Jrc3RhdGlvblxyXG5cclxuaW1wb3J0IHNvY2FhcyBmcm9tIFwiLi9zb2NhYXNcIlxyXG5tb2R1bGUuZXhwb3J0cy5zb2NhYXMgPSBzb2NhYXNcclxuXHJcbmltcG9ydCB3YWZhYXMgZnJvbSAnLi93YWZhYXMnXHJcbm1vZHVsZS5leHBvcnRzLndhZmFhcyA9IHdhZmFhc1xyXG5cclxuaW1wb3J0IGRiYWFzIGZyb20gJy4vZGJhYXMnXHJcbm1vZHVsZS5leHBvcnRzLmRiYWFzID0gZGJhYXNcclxuXHJcbmltcG9ydCB3ZWJkZXYgZnJvbSAnLi93ZWJkZXYnXHJcbm1vZHVsZS5leHBvcnRzLndlYmRldiA9IHdlYmRldlxyXG5cclxuIiwiaW1wb3J0IFVjYWFzUHJpY2luZyBmcm9tIFwiLi4vLi4vcHJpY2luZy9VY2Fhc1ByaWNpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICB0eXBlV3JpdGVyX3RpdGxlOiB7XHJcbiAgICAgICAgICAgIGJlZm9yZTogXCJcIixcclxuICAgICAgICAgICAgdHlwZWQ6IFtcIkNhcHR1cmVcIiwgXCJMaXZlIFN0cmVhbVwiLCBcIlJlcHVycG9zZVwiXSxcclxuICAgICAgICAgICAgYWZ0ZXI6IFwiIFlvdXIgQXBwbGljYXRpb24gb24gdGhlIENsb3VkXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlU3R5bGU6e2ZvbnRTaXplOltcIjN4bFwiLFwiNHhsXCJdLHB4OlwiNXB4XCJ9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNpc2NvIGFuZCBBdmF5YSBVbmlmaWVkIENvbGxhYm9yYXRpb24sIE1lc3NhZ2luZywgVGVsZXByZXNlbmNlLCBDb250YWN0IENlbnRlciwgV29ya2ZvcmNlIE9wdGltaXphdGlvbiBhbmQgUXVhbGl0eSBNb25pdG9yaW5nLiBOK04gUmVkdW5kYW50IGNvbXBvbmVudHMgZnVsZmlsbGluZyBhbGwgVW5pZmllZCBDb2xsYWJvcmF0aW9uIHJlcXVpcmVtZW50cyBvZiB5b3VyIGJ1c2luZXNzLiBFeHBlcnRpc2UgdG8gYWRkcmVzcyB0aGVzZSBjaGFsbGVuZ2VzIGJ5IGRlc2lnbmluZyBhbmQgZGVsaXZlcmluZyBjb21wbGV0ZSBjb2xsYWJvcmF0aW9uIHNvbHV0aW9ucyB0aGF0IG1heGltaXplIHlvdXIgY2FwYWJpbGl0aWVzIGFuZCBpbnZlc3RtZW50cyB3aGlsZSBtaW5pbWl6aW5nIHlvdXIgdGVjaG5vbG9neSBmb290cHJpbnRcIixcclxuICAgICAgICBkZXNjcmlwdGlvblN0eWxlOiB7XHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiA4LFxyXG4gICAgICAgIGdhcDogMTAsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCI5NSVcIiwgMSAvIDIsIDEgLyAzXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udDogXCJOZXhhIEJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjdcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9taWNyb3Bob25lLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlZvaWNlIEludGVncmF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV4dGVuZGVkIGNhcGFiaWxpdHkgb2YgeW91ciB0ZWxlcGhvbnkgc29sdXRpb25zLCBmb3IgYSBiZXR0ZXIgb3V0cHV0IHdpdGggdGhlIHNhbWUgcmVzb3VyY2UuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHk6IDQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiOTUlXCIsIDEgLyAyLCAxIC8gM10sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZVNpemU6IFwibWRcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZUZvbnQ6IFwiTmV4YSBCb2xkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dE9wYWNpdHk6IFwiMC43XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY29sb3IvY2hhdC5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJVbmlmaWVkIE1lc3NhZ2luZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEaWZmZXJlbnQgZm9ybXMgb2YgbWVkaWEgKEUtTWFpbCwgU01TLCB2aWRlbywgdm9pY2VtYWlsKSwgaW50ZWdyYXRlZCBpbnRvIGEgc2luZ2xlIHN5c3RlbS5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCI5NSVcIiwgMSAvIDIsIDEgLyAzXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udDogXCJOZXhhIEJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjdcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9sZWFybi5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb2xsYWJvcmF0aW9uIEV4cGVydHNcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiV2Ugb2ZmZXIgYnVzaW5lc3MgYW5kIHRlY2hub2xvZ3kgYXNzZXNzbWVudHMgdG8gaGVscCBpZGVudGlmeSBhbnkgYmFycmllcnMgaW4gb3JkZXIgZm9yIHlvdXIgY29sbGFib3JhdGl2ZSBHb2FscyB0byBzdWNjZWVkLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHB5OiA0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFtcIjk1JVwiLCAxIC8gMiwgMSAvIDNdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL2Nsb3VkLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJhY2t1cCBvdmVyIENsb3VkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoZSBidXNpbmVzcyBrZWVwcyBvbiBydW5uaW5nIHNtb290aGx5LCB3aXRoIGV2ZXJ5dGhpbmcgYmFja2VkIHVwIG9uIGNsb3VkLCB3aGlsZSB0YWtpbmcgbWVhc3VyZXMgZm9yIHBvdGVudGlhbCB0aHJlYXRzLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHB5OiA0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFtcIjk1JVwiLCAxIC8gMiwgMSAvIDNdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL2hlYWRwaG9uZXMuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRXhjZWxsZW50IEN1c3RvbWVyIFN1cHBvcnRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQkdVUydzIGZyaWVuZGx5IGFuZCBza2lsbGVkIGN1c3RvbWVyIHN1cHBvcnQgc2VydmljZSBpcyBhdmFpbGFibGUgMjRYN1gzNjUgd2l0aCB2ZXJ5IGxlc3MgcmVzcG9uc2UgdGltZS4gT3VyIHBvbGljaWVzIGVuc3VyZSByYXBpZCBhbmQgc2F0aXNmYWN0b3J5IHJlc29sdXRpb24gb2YgaXNzdWVzLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHB5OiA0LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFtcIjk1JVwiLCAxIC8gMiwgMSAvIDNdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL3VzZXIuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiSG90IERlc2tpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTG9nIG9udG8gYW55IGRldmljZSBvbiB5b3VyIHBlcnNvbmFsIHN5c3RlbSwgYW5kIGhhdmUgeW91ciB1c2VyIHByb2ZpbGUsIHBvcHVsYXRlIG9uIHRoYXQgcGFydGljdWxhciBzeXN0ZW0uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGJnOiBcImxpZ2h0LjQwMFwiLFxyXG4gICAgICAgIHB5OiAxNixcclxuICAgICAgICBnYXA6IDAsXHJcbiAgICAgICAgYm9keTogW3tcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInByaWNpbmdcIixcclxuICAgICAgICAgICAgZGF0YTogPFVjYWFzUHJpY2luZyAvPlxyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIldoeSBCRyBVbmlmaWVkIFNvbHV0aW9ucz9cIixcclxuICAgICAgICByb3dEaXN0YW5jZTogOCxcclxuICAgICAgICBweTogWzgsMTZdLFxyXG4gICAgICAgIGJvZHk6IFt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJhY2NvcmRpb25cIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwibWRcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRmxleGliaWxpdHkgLyBTY2FsYWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZvciBhbnkgb2YgeW91ciBvcmdhbml6YXRpb24gZGVwYXJ0bWVudHMsIG91ciBVQ2FhUyBvZmZlcmluZyBwcm92aWRlcyBhIHNpbXBsaWZpZWQgSVQgbWFuYWdlbWVudCBhbmQgYSBoaWdobHkgc2NhbGFibGUgcGxhdGZvcm0uIElycmVzcGVjdGl2ZSBvZiB0aGUgZW5kLXVzZXIsIGV2ZXJ5b25lIGdldHMgYWNjZXNzIHRvIHRoZSBsYXRlc3QgYW5kIHRoZSBncmVhdGVzdCBjb2xsYWJvcmF0aW9uIHRvb2xzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvRmxleGliaWxpdHlBbmRTY2FsYWJpbHR5X0FwcERldi5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJDb3N0LUVmZmVjdGl2ZW5lc3NcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGb3IgeW91ciBidXNpbmVzcywgd2UgYXJlIG9mZmVyaW5nIGFuZCBwcm92aWRpbmcgYSBmbGF0IGJpbGxpbmcgc3RydWN0dXJlLiBJdCdzIGRlc2lnbmVkIGZvciBwYXkgYXMgeW91IGdvIG1vZGVsIHRoYXQgc2hpZnRzIHlvdXIgY29zdHMgZnJvbSBjYXBleCB0byBvcGV4LiBZb3Ugd2lsbCBoYXZlIHZlcnkgc2ltcGxpZmllZCBhbmQgcHJlZGljdGFibGUgZXhwZW5zZXMgYW5kIGhhdmUgdGhlIG9wdGlvbiBvZiByb2xsaW5nIGFueSB1cGZyb250IG9yIG9uZS1vZmYgZXhwZW5zZXMgaW50byB5b3VyIG1vbnRobHkgcGF5bWVudC5cIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL1ZhbHVlX2Zvcl9Nb25leS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJXaWRlIHJhbmdlIG9mIHNlcnZpY2VzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRW1wbG95ZWVzIGdldCBhY2Nlc3MgdG8gdm9pY2UgYW5kIHZpZGVvLCB2b2ljZW1haWwgYW5kIGludGVncmF0ZWQgbWVzc2FnaW5nLCBpbnN0YW50IG1lc3NhZ2luZyBhbmQgcHJlc2VuY2UsIHdlYiBjb25mZXJlbmNpbmcgYW5kIGRlc2t0b3AgY29sbGFib3JhdGlvbiwgbW9iaWxpdHkgc2VydmljZS5cIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL3BsYXRmb3Jtcy5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfVxyXG5dIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgICBCdXR0b24sXHJcbiAgICBDb2xsYXBzZSxcclxuICAgIFJhZGlvQnV0dG9uR3JvdXAsXHJcbiAgICBOdW1iZXJJbnB1dCxcclxuICAgIE51bWJlcklucHV0RmllbGQsXHJcbiAgICBOdW1iZXJJbnB1dFN0ZXBwZXIsXHJcbiAgICBOdW1iZXJJbmNyZW1lbnRTdGVwcGVyLFxyXG4gICAgTnVtYmVyRGVjcmVtZW50U3RlcHBlcixcclxuICAgIFNsaWRlcixcclxuICAgIFNsaWRlclRodW1iLFxyXG4gICAgU2xpZGVyVHJhY2ssXHJcbiAgICBTbGlkZXJGaWxsZWRUcmFjayxcclxuICAgIFRhYnMsXHJcbiAgICBUYWJMaXN0LFxyXG4gICAgVGFiLFxyXG4gICAgVGFiUGFuZWwsXHJcbiAgICBUYWJQYW5lbHMsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIjtcclxuaW1wb3J0IHsgUHJpY2luZ0NhcmQsIFByaWNpbmdRdW90ZSB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NhcmRzL1ByaWNpbmdDYXJkXCI7XHJcblxyXG5cclxuY29uc3QgdmVyaWZ5Tm90RW1wdHkgPSAoeCwgdGV4dCkgPT4gKHggPiAwID8gXCIsIFwiICsgeCArIFwiIFwiICsgdGV4dCA6IFwiXCIpO1xyXG5cclxuY29uc3QgQ3VzdG9tUmFkaW8gPSBSZWFjdC5mb3J3YXJkUmVmKChwcm9wcywgcmVmKSA9PiB7XHJcbiAgICBjb25zdCB7IGlzQ2hlY2tlZCwgaXNEaXNhYmxlZCwgdmFsdWUsIC4uLnJlc3QgfSA9IHByb3BzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm15LTFcIlxyXG4gICAgICAgICAgICBmb250U2l6ZT17W1wiMTNweFwiLFwiMTRweFwiLFwiMTZweFwiXX1cclxuICAgICAgICAgICAgcmVmPXtyZWZ9XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9e2lzQ2hlY2tlZCA/IFwic29saWRcIiA6IFwib3V0bGluZVwifVxyXG4gICAgICAgICAgICB2YXJpYW50Q29sb3I9e2lzQ2hlY2tlZCA/IFwicHJpbWFyeVwiIDogXCJncmF5LjMwMFwifVxyXG4gICAgICAgICAgICBhcmlhLWNoZWNrZWQ9e2lzQ2hlY2tlZH1cclxuICAgICAgICAgICAgcm9sZT1cInJhZGlvXCJcclxuICAgICAgICAgICAgaXNEaXNhYmxlZD17aXNEaXNhYmxlZH1cclxuICAgICAgICAgICAgey4uLnJlc3R9XHJcbiAgICAgICAgLz5cclxuICAgICk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gVWNhYXNQcmljaW5nKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbm9kZSwgc2V0Tm9kZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKFwiMjAtMTAgU0lQXCIpO1xyXG4gICAgY29uc3QgW2FkZGl0aW9uYWxVY2Fhcywgc2V0YWRkaXRpb25hbFVjYWFzXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2h1bnRzLCBzZXRIdW50c10gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtudW0xMCwgc2V0TnVtMTBdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbnVtNTAsIHNldE51bTUwXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW251bTEwMCwgc2V0TnVtMTAwXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2V4dHJhVk0sIHNldEV4dHJhVk1dID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBvcGVuQ29udHJvbHMgPSAoKSA9PiB7c2V0U2hvdyh0cnVlKTsgd2luZG93LnNjcm9sbFRvKDAsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sbGFwc2UtMVwiKS5vZmZzZXRUb3AgLSAxMDApO31cclxuICAgIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWUpID0+IHtcclxuICAgICAgICBzZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgc2V0RXh0cmFWTSh2YWx1ZSk7XHJcbiAgICB9O1xyXG4gICAgY29uc3QgW3Nob3dTSVAsIHNldFNob3dTSVBdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FkZFNJUCwgc2V0QWRkU0lQXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2FkdmFuY2VkT3B0aW9ucywgc2V0QWR2YW5jZWRPcHRpb25zXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHJlc2V0T25DYXJkQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgIHNldEFkZFNJUCgwKTtcclxuICAgICAgICBzZXRTaG93U0lQKGZhbHNlKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJpY2luZ1wiIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJzIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYkxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWIgY2xhc3NOYW1lPVwicHktNCBweC01IGRpc3BsYXk2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDaXNjb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYiBjbGFzc05hbWU9XCJweS00IHB4LTUgZGlzcGxheTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF2YXlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgM0NYXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiTGlzdD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVscz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYlBhbmVsIGNsYXNzTmFtZT1cInB5LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYWRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXN0YW5jZT17XCIzMCVcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBuby1ndXR0ZXJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpbmdsZSBOb2RlIENVQ01cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9mYXguc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgVm9pY2VtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBQcmVzZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgVm9pY2VtYWlsIHRvIEVtYWlsKlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgQ2lzY28gSmFiYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbGxhcHNlLTFcIiBjbGFzc05hbWU9XCJuby1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTaW5nbGUgTm9kZSBDVUNNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE9uQ2FyZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJEdWFsIE5vZGUgQ1VDTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2ZheC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBWb2ljZW1haWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFByZXNlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBWb2ljZW1haWwgdG8gRW1haWwqXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBDaXNjbyBKYWJiZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbGxhcHNlLTFcIiBjbGFzc05hbWU9XCJuby1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEdWFsIE5vZGUgQ1VDTVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRPbkNhcmRDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXBsZSBOb2RlcyBDVUNNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvZmF4LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgUHJlc2VuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbCB0byBFbWFpbCpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIENpc2NvIEphYmJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbGxhcHNlLTFcIiBjbGFzc05hbWU9XCJuby1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJNdWx0aXBsZSBOb2RlcyBDVUNNXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE9uQ2FyZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U9e1wiMzAlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJTaW5nbGUgTm9kZSBJUCBPZmZpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9maXJld2FsbF92aXJ0dWFsLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgUHJlc2VuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbCB0byBFbWFpbCpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIENpc2NvIEphYmJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbGxhcHNlLTFcIiBjbGFzc05hbWU9XCJuby1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTaW5nbGUgTm9kZSBJUCBPZmZpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0T25DYXJkQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWaWV3IE1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkR1YWwgTm9kZSBJUCBPZmZpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9maXJld2FsbF92aXJ0dWFsLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgUHJlc2VuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbCB0byBFbWFpbCpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIENpc2NvIEphYmJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbGxhcHNlLTFcIiBjbGFzc05hbWU9XCJuby1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEdWFsIE5vZGUgSVAgT2ZmaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE9uQ2FyZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXItZWZmZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIk11bHRpcGxlIE5vZGVzIElQIE9mZmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2ZpcmV3YWxsX3ZpcnR1YWwuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgVm9pY2VtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBQcmVzZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgVm9pY2VtYWlsIHRvIEVtYWlsKlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgQ2lzY28gSmFiYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29sbGFwc2UtMVwiIGNsYXNzTmFtZT1cIm5vLXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Db250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm9kZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk11bHRpcGxlIE5vZGVzIElQIE9mZmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRPbkNhcmRDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlPXtcIjMwJVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2luZ2xlIE5vZGUgQ1hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9maXJld2FsbF92aXJ0dWFsLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgUHJlc2VuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFZvaWNlbWFpbCB0byBFbWFpbCpcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIENpc2NvIEphYmJlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI2NvbGxhcHNlLTFcIiBjbGFzc05hbWU9XCJuby1yZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuQ29udHJvbHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vZGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJTaW5nbGUgTm9kZSBDWFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRPbkNhcmRDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZXcgTW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRHVhbCBOb2RlIENYXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvZmlyZXdhbGxfdmlydHVhbC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBWb2ljZW1haWxcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlIFByZXNlbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBWb2ljZW1haWwgdG8gRW1haWwqXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBDaXNjbyBKYWJiZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNjb2xsYXBzZS0xXCIgY2xhc3NOYW1lPVwibm8tcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXROb2RlKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRHVhbCBOb2RlIENYXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE9uQ2FyZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLzwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvdmVyLWVmZmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJNdWx0aXBsZSBOb2RlcyBDWFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2ZpcmV3YWxsX3ZpcnR1YWwuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgVm9pY2VtYWlsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZSBQcmVzZW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgVm9pY2VtYWlsIHRvIEVtYWlsKlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkluY2x1ZGUgQ2lzY28gSmFiYmVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjY29sbGFwc2UtMVwiIGNsYXNzTmFtZT1cIm5vLXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5Db250cm9scygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0Tm9kZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk11bHRpcGxlIE5vZGVzIENYXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldE9uQ2FyZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBNb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYnM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2UtMVwiIGNsYXNzTmFtZT1cImNvbGxhcHNlLXRhcmdldFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC1sZy01XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXQ9ezZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17c2hvd31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS01IGJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5NSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB4LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgY29sLTEyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTExIG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGEgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJhZGlvQnV0dG9uR3JvdXBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUeXBlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBZGRTSVAoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvd1NJUChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiMjAtMTAgU0lQXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNJbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVJhZGlvIHZhbHVlPVwiMTAtNSBTSVBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVQ0FBUy0xMC01U0lQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0N1c3RvbVJhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVJhZGlvIHZhbHVlPVwiMjAtMTAgU0lQXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVUNBQVMtMjAtMTBTSVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ3VzdG9tUmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q3VzdG9tUmFkaW8gdmFsdWU9XCIzMC0yMCBTSVBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVQ0FBUy0zMC0yMFNJUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DdXN0b21SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDdXN0b21SYWRpbyB2YWx1ZT1cIjUwLTMwIFNJUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVDQUFTLTUwLTMwU0lQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0N1c3RvbVJhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEN1c3RvbVJhZGlvIHZhbHVlPVwiMTAwLTUwIFNJUFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVDQUFTLTEwMC01MFNJUFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DdXN0b21SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SYWRpb0J1dHRvbkdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBjb2wtbGctMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIiBOdW5pdG9TYW5zLUJvbGQgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gVGhpcyB0eXBlIGluY2x1ZGVze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0eXBlLnNsaWNlKDAsIDIpfSBVQ2FhU1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzIGFuZHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHlwZS5zbGljZSgzKX17XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbHMue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNob3dTSVAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIXNob3dTSVBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZCBBZGRpdGlvbmFsIFNJUD97XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbGxhcHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC00XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17c2hvd1NJUH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWwgU0lQXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FkZFNJUH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFkZFNJUCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyVHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlckZpbGxlZFRyYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJUaHVtYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e2FkZFNJUH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTEgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBWTXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRyYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlckZpbGxlZFRyYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXt2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRpdGlvbmFsIFVDYWFTXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0YWRkaXRpb25hbFVjYWFzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBvZmZzZXQtbGctMSBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkZGl0aW9uYWwgSHVudCBHcm91cHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRIdW50cyh2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTEgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFkdmFuY2VkT3B0aW9ucyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIWFkdmFuY2VkT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZHZhbmNlZCBPcHRpb25ze1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTExXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzT3Blbj17YWR2YW5jZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5VTS0xMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TnVtMTAodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRGaWVsZCBjbGFzc05hbWU9XCJiZy1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckRlY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBvZmZzZXQtbGctMSBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOVU0tNTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE51bTUwKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlcklucHV0RmllbGQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJEZWNyZW1lbnRTdGVwcGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgb2Zmc2V0LWxnLTEgbXQtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTlVNLTEwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TnVtMTAwKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlcklucHV0RmllbGQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJEZWNyZW1lbnRTdGVwcGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgbXQtNCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPVwiVW5pZmllZCBDb21tdW5pY2F0aW9ucyBBcyBBIFNlcnZpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZURlc2NyaXB0aW9uPXtgJHtub2RlfSwke3R5cGV9JHt2ZXJpZnlOb3RFbXB0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsVWNhYXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRpdGlvbmFsIFVDYWFTXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9JHt2ZXJpZnlOb3RFbXB0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRTSVAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRpdGlvbmFsIFNJUFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSR7dmVyaWZ5Tm90RW1wdHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFWTSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkV4dHJhIFZNc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSR7dmVyaWZ5Tm90RW1wdHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHVudHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBZGRpdG9uYWwgSHVudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX0ke3ZlcmlmeU5vdEVtcHR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bTEwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTlVNLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9JHt2ZXJpZnlOb3RFbXB0eShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW01MCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIk5VTS01MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSR7dmVyaWZ5Tm90RW1wdHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiTlVNLTEwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L1ByaWNpbmdRdW90ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVjYWFzUHJpY2luZztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==