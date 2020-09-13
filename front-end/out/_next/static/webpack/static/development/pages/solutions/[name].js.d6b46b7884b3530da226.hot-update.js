webpackHotUpdate("static\\development\\pages\\solutions\\[name].js",{

/***/ "./src/pageBuilder/components/Feature2.jsx":
/*!*************************************************!*\
  !*** ./src/pageBuilder/components/Feature2.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components_svg_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/svg/svg */ "./src/components/svg/svg.jsx");


var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\components\\Feature2.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





function Feature2(_ref) {
  let {
    image,
    icon,
    size = "48px",
    title,
    imageWidth = "96px",
    iconColor = "dark.500",
    color = "dark.500",
    svg,
    titleSize = "lg",
    description,
    align = "center",
    textOpacity,
    titleFont = "Nexa Bold",
    titleColor
  } = _ref,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["image", "icon", "size", "title", "imageWidth", "iconColor", "color", "svg", "titleSize", "description", "align", "textOpacity", "titleFont", "titleColor"]);

  return __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Grid"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    align: align,
    templateColumns: [`${imageWidth} auto`]
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }), svg && __jsx(_components_svg_svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    src: svg,
    color: iconColor,
    size: size,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }), image && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    src: image,
    objectFit: "cover",
    size: size,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 23
    }
  }), icon && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    as: icon,
    size: size,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 22
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    fontFamily: titleFont,
    fontSize: props.titleFontSize,
    size: titleSize,
    textAlign: align,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, title), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    fontSize: props.textSize,
    opacity: textOpacity,
    mt: 2,
    textAlign: "justify",
    style: {
      textAlignLast: align
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, description)));
}

_c = Feature2;
/* harmony default export */ __webpack_exports__["default"] = (Feature2);

var _c;

$RefreshReg$(_c, "Feature2");

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

/***/ }),

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
    px: [4, 6]
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

/***/ "./src/pageBuilder/pages/solutions/dbaas.jsx":
/*!***************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/dbaas.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_DbaasPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/DbaasPricing */ "./src/pageBuilder/pricing/DbaasPricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\dbaas.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  mt: 0,
  py: 0,
  containerWidth: "100%",
  body: [{
    type: "pricing",
    data: __jsx(_pricing_DbaasPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 23
      }
    })
  }, {
    width: ["100%"],
    mt: 8,
    type: "imageGroup",
    data: {
      images: ["/assets/images/icons/brands/mongodb.svg", "/assets/images/icons/brands/MySQL-Logo.png", "/assets/images/icons/brands/azure_sql_server_posted.svg"],
      px: 3,
      height: "80px",
      objectFit: "contain"
    }
  }]
}, {
  gap: 10,
  body: [{
    width: ["100%", "100%", 1 / 2],
    type: "imageGroup",
    data: {
      images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
      borderRadius: 8,
      width: '90%',
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", 1 / 2],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Managed databases for your Businesses -",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 27
        }
      }, "Database-as-a-Service (DBaaS) refers to software that enables users to set up, operate and scale databases using a common set of abstractions (primitives), without having to either know or care about the exact implementations of those abstractions for the specific database. ")
    }]
  }]
}, {
  title: "BG Unified Solutions providing Databases for your Enterprise Needs :-",
  titleStyle: {
    mt: 8
  },
  description: "BG Unified Solutions Remote DBA service will manage your database infrastructure, no matter how big or small it may be. You’ll be able to focus more on your business while our experts manage your database platform 24 x 7.",
  my: 0,
  py: 16,
  bg: "light.400",
  color: "dark.500",
  rowDistance: 8,
  gap: 8,
  descriptionStyle: {
    fontSize: ["lg", "lg", "xl"]
  },
  body: [{
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/headphones.svg",
      mt: 4,
      title: "Expert Consultation"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/display-1.svg",
      mt: 4,
      title: "Daily Monitoring Assured"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/downloaded-file.svg",
      mt: 4,
      title: "Backup and Install"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/server.svg",
      mt: 4,
      title: "Server Patching"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/tools/tools.svg",
      mt: 4,
      title: "Performance Tuning"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/shift.svg",
      mt: 4,
      title: "Upgrade and Migration"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/downloads-folder.svg",
      mt: 4,
      title: "Server Installation"
    }
  }]
}, {
  py: [8, 12],
  description: "We offer 24 x 7 managed database services. We’ll monitor database infrastructure, handle incidents, response to events/alarms, follow change management processes, improve overall performance and reduce vulnerabilities.",
  descriptionStyle: {
    fontSize: ["lg", "lg", "xl"],
    opacity: 0.7,
    textAlign: "left"
  }
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

/***/ "./src/pageBuilder/pages/solutions/loadBalancer.jsx":
/*!**********************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/loadBalancer.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\loadBalancer.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", 1 / 2],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    data: {
      images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
      borderRadius: 8,
      width: '90%',
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", 1 / 2],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Load Balancing Solutions for your Application Servers",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 23
        }
      }, "Load balancing is the most scalable methodology for handling the multitude of requests from modern multi-application, multi-device workflows. When traffic is running at normal levels, global (geographic) load balancers direct traffic to dedicated optimized application servers.Rapidly redirect traffic from a data centre suffering from an outage to an available server. ")
    }]
  }]
}, {
  title: "Manage your Traffic with Our Load Balancers",
  description: "BG Unified Solutions provide F5 topology for your Load Balancing needs, in order to manage traffic asserted on your servers and applications. ",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/chart-line-1.svg",
      mt: 4,
      title: "High Availability"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/line.svg",
      mt: 4,
      title: "Flexibility Assured"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/git-4.svg",
      mt: 4,
      title: "Multiple Features"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/headphones.svg",
      mt: 4,
      title: "Personalized Support"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/clock.svg",
      mt: 4,
      title: "Designed for Uptime"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/size.svg",
      mt: 4,
      title: "Scalability Guaranteed"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/chair-1.svg",
      mt: 4,
      title: "Easy Deployment"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      }, "High traffic sites need the resources to serve large amounts of unique visitors in a fast and efficient way. In order to scale to meet those needs, a number of web servers, commonly known as a farm, need to be implemented and a method to route traffic across them in a balanced way."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
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

/***/ "./src/pageBuilder/pages/solutions/proxy.jsx":
/*!***************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/proxy.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_ProxyPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/ProxyPricing */ "./src/pageBuilder/pricing/ProxyPricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\proxy.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "Connect with Proxy",
  gap: 0,
  body: [{
    type: "content",
    data: [{
      text: __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 23
        }
      }, "Proxy as a Service refers to proxy servers that act as intermediate nodes or connecting points between an end-user and the internet. Proxy as a Service allows you to connect to a different server and provides you with access to web pages, files etc. Proxy servers facilitate administrative, authoritative, security issues in the enterprise world."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center",
      opacity: .7
    }]
  }, {
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_ProxyPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 23
      }
    })
  }]
}, {
  my: 0,
  py: "48px",
  bgImage: "url('/assets/images/backgrounds/network_abstract.jpg')",
  blend: "screen",
  bg: "light.400",
  color: "dark.500",
  gap: 6,
  body: [{
    width: "100%",
    type: "container",
    containerData: [{
      width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/media/equalizer.svg",
        mt: 4,
        title: "Secure"
      }
    }, {
      width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/time-schedule.svg",
        mt: 4,
        title: "Low Latency"
      }
    }, {
      width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/home/key.svg",
        mt: 4,
        title: "Authorotative"
      }
    }, {
      width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/devices/diagnostics.svg",
        mt: 4,
        title: "Administrative"
      }
    }, {
      width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/code/stack.svg",
        mt: 4,
        title: "Multi-Layered"
      }
    }, {
      width: [1 / 2, 1 / 3, 1 / 3, 1 / 2, 1 / 3],
      type: "feature",
      data: {
        align: "center",
        titleSize: "md",
        iconColor: "primary.500",
        svg: "/assets/images/icons/library/navigation/arrows-h.svg",
        mt: 4,
        title: "Remote Connectivity"
      }
    }]
  }]
}, {
  body: [{
    width: "100%",
    type: "accordion",
    data: {
      fontSize: "md",
      content: [{
        title: "Firewall ",
        description: "Multi-Layered Hosted Firewall Solution with Dedicated / Shared Firewall using Palo Alto, Fortinet, and Cisco ASA. Centralized Policy Management using Panorama, Sourcefire DC",
        image: "/assets/images/Illustrations/firewall.svg"
      }, {
        title: "Network Filtering",
        description: "Multiple IP types globally, in a clustered or isolated environment. Enhanced proxy service by isolating the private network from the web, thus allowing limiting access of private network users to Internet-based resources.",
        image: "/assets/images/Illustrations/security_lock_firewall.svg"
      }, {
        title: "Fast speed with minimum bandwidth usage",
        description: "Use proxy servers at a faster speed and limiting the bandwidth utilization, by filtering traffic, caching files and web pages accessed. Highly advanced, available and multiple data centre locations.",
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
  px: 2,
  body: [{
    type: "image&text",
    data: {
      image: "/assets/images/Illustrations/ClientSpecific_AppDev.svg",
      title: "Secure Connectivity with SD-WAN",
      flexDirection: ["column", "column", "row-reverse"],
      description: "A virtual WAN architecture, allowing firms or companies to leverage any combination of services, including LTE, VoLTE, Broadband services, WiFi Services etc. to securely connect users to applications. SD-WAN transforms the way a particular network supports and interacts with enterprise applications."
    }
  }]
}, {
  py: [0, 4],
  gap: 0,
  mt: 0,
  bg: "light.400",
  body: [{
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_SdwanPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 19
      }
    })
  }]
}, {
  px: 2,
  title: "Find out How BGUS SD-WAN will improve your network:",
  description: "Next-generation WAN connectivity services. We have Express Routes to office 365, AWS, Azure through Equinix Cloud Exchange and are peering with ASNs directly for providing better and high-performance routes to Office 365, Azure and AWS.",
  descriptionStyle: {
    px: "10px"
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

/***/ "./src/pageBuilder/pages/solutions/socaas.jsx":
/*!****************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/socaas.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\socaas.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
/* harmony default export */ __webpack_exports__["default"] = ([{
  gap: 10,
  py: [8, 16],
  body: [{
    width: ["100%", "100%", 1 / 2],
    py: [2, 6, 6, 6, 2],
    type: "imageGroup",
    data: {
      images: ["https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"],
      borderRadius: 8,
      width: '90%',
      height: "300px",
      objectFit: "cover"
    }
  }, {
    width: ["100%", "100%", 1 / 2],
    type: "content",
    data: [{
      textAlign: "justify",
      fontSize: ["md", "md", "md", "lg"],
      title: "Security Operations Centre As A Service",
      titleSize: [28, 28, 28, 32],
      text: __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 23
        }
      }, "As data theft became evident and safeguarding sensitive data became a necessity for businesses everywhere, we developed a portfolio of leading cybersecurity solutions and built on the facility and internal processes we already had in place for our NOC to create a top-notch SOC staffed with certified security analysts ready to provide proactive, exceptional support to our clients. We also created new workflows, processes and automation specific to cybersecurity/SOC services.")
    }]
  }]
}, {
  title: "Ensure Cyber Security with Advanced Intelligence",
  description: "The service architecture for our Security Operations Center as a Service (SOCaaS) program integrates best-of-breed products with proven processes and highly-skilled staff, increasing visibility into the network, speeding up alert response and resolution times, and providing proactive risk modeling and risk mitigation.",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/visible.svg",
      mt: 4,
      title: "In-depth risk visibility"
    }
  }, {
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/magic.svg",
      mt: 4,
      title: "Compliance Demonstrated"
    }
  }, {
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/files/numbered-information.svg",
      mt: 4,
      title: "Prioritizing issues resolution"
    }
  }, {
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/communication/sending.svg",
      mt: 4,
      title: "Rapid Response"
    }
  }, {
    width: ["100%", 1 / 2, 1 / 3],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/shield-check.svg",
      mt: 4,
      title: "Next-gen Managed Firewall"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }, "Our SOC solution goes beyond simply installing a SIEM product and sending your team members an overwhelming number of alerts to review. Our Security Engineers use analytic software to conduct the deep analysis required to provide you with actionable remediation recommendations."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
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

/***/ "./src/pageBuilder/pages/solutions/webdev.jsx":
/*!****************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/webdev.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_WebDevPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/WebDevPricing */ "./src/pageBuilder/pricing/WebDevPricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\webdev.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  py: 0,
  body: [{
    type: "pricing",
    data: __jsx(_pricing_WebDevPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 19
      }
    })
  }]
}, {
  title: "Build your brand online",
  description: "We have the right team to develop to turn any kind of business into an online tycoon.",
  rowDistance: 4,
  gap: 4,
  body: [{
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/monitor.svg",
      size: "96px",
      title: "E-Commerce",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/speaker.svg",
      size: "96px",
      title: "Advertising",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/technology-products.svg",
      size: "96px",
      title: "Products",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      image: "/assets/images/icons/color/software.svg",
      size: "96px",
      title: "SaaS",
      boxShadow: "lg",
      p: 8,
      rounded: 8
    }
  }]
}, {
  title: "Our Process",
  description: "We follow the popular UX Design Process for designing and developing interfaces.",
  rowDistance: 8,
  body: [{
    width: [1 / 2, 1 / 3],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/communication/group.svg",
      iconColor: "primary.500",
      title: "Meet to Discover"
    }
  }, {
    type: "feature",
    width: [1 / 2, 1 / 3],
    data: {
      svg: "/assets/images/icons/library/communication/clipboard-list.svg",
      iconColor: "primary.500",
      title: "Plan & Sketch"
    }
  }, {
    type: "feature",
    width: [1 / 2, 1 / 3],
    data: {
      svg: "/assets/images/icons/library/design/bezier-curve.svg",
      iconColor: "primary.500",
      title: "Design Mockups"
    }
  }, {
    type: "feature",
    width: [1 / 2, 1 / 3],
    data: {
      svg: "/assets/images/icons/library/code/code.svg",
      iconColor: "primary.500",
      title: "Coding & Development"
    }
  }, {
    type: "feature",
    width: [1 / 2, 1 / 3],
    data: {
      svg: "/assets/images/icons/library/code/done-circle.svg",
      iconColor: "primary.500",
      title: "Quality Assurance"
    }
  }, {
    type: "feature",
    width: [1 / 2, 1 / 3],
    data: {
      svg: "/assets/images/icons/library/general/thunder-move.svg",
      iconColor: "primary.500",
      title: "Launch & Optimization"
    }
  }]
}, {
  my: 16,
  py: "48px",
  bg: "light.400",
  rowDistance: 8,
  gap: 6,
  body: [{
    my: [0, 0, 4, 4],
    width: ["70%", "60%", "60%", 1 / 3],
    type: "imageGroup",
    data: {
      images: ["/assets/images/icons/color/user-engagement.svg"],
      mx: "16%"
    }
  }, {
    my: [0, 0, 4, 4],
    width: ["100%", "100%", "100%", 2 / 3],
    type: "content",
    data: [{
      title: "We build great experiences.",
      fontSize: ["lg", "xl"],
      titleSize: [32, 36, 40, 48],
      my: [2, 4, 8],
      text: __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 29
        }
      }, "We not only build great websites, but we focus on how the user interacts too. And that is where new business comes. If your website is old-fashioned, or out-to-date that will throw out your customers in less than 5 seconds."), __jsx("br", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 265
        }
      }), __jsx("br", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 270
        }
      }), __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 29
        }
      }, " But we have solution to that:- A completely customized website designed strategically, regularly updated and maintained. That just converts you website into a valuable asset for your business."), ",")
    }, {
      list: ["Built for fast load times.", "Functional on every device.", "Easy to Update and Maitain.", "Highly Optimised Content."],
      spacing: 2,
      styleType: "none",
      icon: "check",
      iconColor: "green.500"
    }]
  }]
}, {
  title: "Some add-ons we offer...",
  rowDistance: 4,
  body: [{
    width: ["80%", 1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/tools/tools.svg",
      size: "80px",
      title: "Regular Website Maintainence Plans",
      titleSize: "md"
    }
  }, {
    width: ["80%", 1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/design/pen-tool-vector.svg",
      size: "80px",
      title: "Logo Creation & Branding Design",
      titleSize: "md"
    }
  }, {
    width: ["80%", 1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/general/shield-protected.svg",
      size: "80px",
      title: "Website Security & Protection Plans",
      titleSize: "md"
    }
  }, {
    width: ["80%", 1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      svg: "/assets/images/icons/library/home/picture.svg",
      size: "80px",
      title: "Ads, Brochure, Posters and many more...",
      titleSize: "md"
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

/***/ "./src/pageBuilder/pages/solutions/workstation.jsx":
/*!*********************************************************!*\
  !*** ./src/pageBuilder/pages/solutions/workstation.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pricing_VdiPricing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pricing/VdiPricing */ "./src/pageBuilder/pricing/VdiPricing.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pages\\solutions\\workstation.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "Workstation for your Business",
  description: __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 22
    }
  }, "Virtual Desktop Infrastructure is when virtual desktops are served through on-site technology solutions. A hardware stack is maintained by IT administrators and usually located on-site. This is how virtual desktops have traditionally been deployed. This allows IT resources to be reallocated for managing virtual desktops, clients, and applications."),
  gap: 10,
  py: [8, 16],
  body: [{
    width: "100%",
    type: "pricing",
    data: __jsx(_pricing_VdiPricing__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 19
      }
    })
  }]
}, {
  title: "BG Unified Solution’s Workstations",
  description: "With full control over hardware, software, and data, this is an ideal solution for highly sensitive computing environments. This greater degree of control also lends itself well to customization ",
  my: 0,
  py: 20,
  bg: "gray.100",
  color: "dark.500",
  rowDistance: 12,
  gap: 8,
  body: [{
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/lock-circle.svg",
      mt: 4,
      title: "Secure"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/code/compiling.svg",
      mt: 4,
      title: "Virtualized"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/shopping/dollar.svg",
      mt: 4,
      title: "Pay per Use"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/devices/display-2.svg",
      mt: 4,
      title: "Platform Independent"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/design/line.svg",
      mt: 4,
      title: "Flexible"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/general/size.svg",
      mt: 4,
      title: "Scalable"
    }
  }, {
    width: [1 / 2, 1 / 3, 1 / 4],
    type: "feature",
    data: {
      align: "center",
      titleSize: "md",
      iconColor: "red.500",
      svg: "/assets/images/icons/library/home/chair-1.svg",
      mt: 4,
      title: "Easy Deployment"
    }
  }]
}, {
  body: [{
    type: "content",
    data: [{
      text: __jsx("span", {
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 19
        }
      }, "With BG Unified Solutions\u2019 Workstation As A Service, we give an organization the freedom to deploy virtual desktops from its own on-premises data centres. In-house IT teams are responsible for deploying the virtual desktops as well as purchasing, managing, and upgrading the infrastructure."),
      fontSize: ["lg", "lg", "xl"],
      textAlign: "center"
    }]
  }],
  pt: 0,
  pb: 0,
  mb: 0
}, {
  py: 5,
  body: [{
    width: ["100%"],
    px: [6, 8, "20%"],
    type: "feature2",
    data: {
      align: "left",
      titleFontSize: ["18px", "18px", "20px", "24px"],
      textSize: ["14px", "14px", "16px"],
      size: "96px",
      imageWidth: "128px",
      image: "/assets/images/icons/color/agile.svg",
      maxH: 200,
      spacing: 12,
      title: "Flexible migration to the cloud for Remote Desktop Services",
      description: "Optimize your experience with affordable costs for your server desktop and apps. Get all the resources, tools and infrastructure, you need to migrate your apps."
    }
  }, {
    width: ["100%"],
    px: [6, 8, "20%"],
    type: "feature2",
    data: {
      align: "left",
      titleFontSize: ["18px", "18px", "20px", "24px"],
      textSize: ["14px", "14px", "16px"],
      size: "96px",
      imageWidth: "128px",
      image: "/assets/images/icons/color/user-engagement.svg",
      maxH: 200,
      spacing: 12,
      title: "Estimate end-user experience quality",
      description: "Estimator used to experience or predict the quality of your end-user experience by the Virtual Desktop Infrastructure Service provided by you. Determine your bandwidth requirement and constant health checker."
    }
  }, {
    width: ["100%"],
    px: [6, 8, "20%"],
    type: "feature2",
    data: {
      align: "left",
      titleFontSize: ["18px", "18px", "20px", "24px"],
      textSize: ["14px", "14px", "16px"],
      size: "96px",
      imageWidth: "128px",
      image: "/assets/images/icons/color/desktop.svg",
      maxH: 200,
      spacing: 12,
      title: "Virtualize both Desktops and Apps",
      description: "Flexibility and adaptability according to your requirements, if you need to get your desktop infrastructure virtualized or virtualization of applications."
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

/***/ "./src/pageBuilder/pricing/CloudLoggingPricing.jsx":
/*!*********************************************************!*\
  !*** ./src/pageBuilder/pricing/CloudLoggingPricing.jsx ***!
  \*********************************************************/
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
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\CloudLoggingPricing.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + text : "";

function CloudLoggingPricing(props) {
  _s();

  const [logs1, setLogs1] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [logs2, setLogs2] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [logs3, setLogs3] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  return __jsx("div", {
    id: "pricing",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row no-gutters px-lg-5 px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 29
      }
    }, "Single Node", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 33
      }
    }), "Single DC"),
    icon: "/assets/images/icons/theme/stack.svg",
    featureList: ["Included 5G Logs per day", "Portal access will be provided.", "Fully Managed Service"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-100 px-3 text-center my-2 NunitoSans-Bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    mb: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 29
    }
  }), "Extra Logs"), __jsx("div", {
    className: "w-100 px-3 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs1,
    max: 20,
    onChange: value => {
      setLogs1(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderTrack"], {
    h: "10px",
    borderRadius: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 33
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: `${logs1}G`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 33
    }
  }))), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Logging Cloud Connect",
    serviceDescription: `Single Node Single DC ${verifyNotEmpty(logs1, "G Extra Logs")}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 29
      }
    }, "Multiple Nodes", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 33
      }
    }), "Single DC"),
    icon: "/assets/images/icons/theme/stack.svg",
    featureList: ["Included 5G Logs per day", "Portal access will be provided.", "Fully Managed Service"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-100 px-3 text-center my-2 NunitoSans-Bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    mb: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 29
    }
  }), "Extra Logs"), __jsx("div", {
    className: "w-100 px-3 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs2,
    max: 20,
    onChange: value => {
      setLogs2(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderTrack"], {
    h: "10px",
    borderRadius: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 33
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: `${logs2}G`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 33
    }
  }))), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Logging Cloud Connect",
    serviceDescription: `Multiple Nodes Single DC ${verifyNotEmpty(logs2, "G Extra Logs")}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 25
    }
  }))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 29
      }
    }, "Multiple Nodes", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 33
      }
    }), "Multiple DC"),
    icon: "/assets/images/icons/theme/stack.svg",
    featureList: ["Included 5G Logs per day", "Portal access will be provided.", "Fully Managed Service"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "w-100 px-3 text-center my-2 NunitoSans-Bold",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Divider"], {
    mb: "4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 29
    }
  }), "Extra Logs"), __jsx("div", {
    className: "w-100 px-3 mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    color: "primary",
    defaultValue: 0,
    value: logs3,
    max: 20,
    onChange: value => {
      setLogs3(value);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderTrack"], {
    h: "10px",
    borderRadius: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 33
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderFilledTrack"], {
    h: "10px",
    borderRadius: "5px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 33
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderThumb"], {
    className: "shadow",
    fontSize: "sm",
    fontWeight: "500",
    width: "auto",
    padding: "7px",
    height: "28px",
    children: `${logs3}G`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 33
    }
  }))), __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Logging Cloud Connect",
    serviceDescription: `Multiple Nodes Multiple DC ${verifyNotEmpty(logs3, "G Extra Logs")}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 25
    }
  }))))));
}

_s(CloudLoggingPricing, "0ShYvqjVtC1D0r1D/bGfggpy18k=");

_c = CloudLoggingPricing;
/* harmony default export */ __webpack_exports__["default"] = (CloudLoggingPricing);

var _c;

$RefreshReg$(_c, "CloudLoggingPricing");

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

/***/ }),

/***/ "./src/pageBuilder/pricing/DRPricing.jsx":
/*!***********************************************!*\
  !*** ./src/pageBuilder/pricing/DRPricing.jsx ***!
  \***********************************************/
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
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\DRPricing.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

function DRPricing(props) {
  _s();

  const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  const [plan, setPlan] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");

  const openControls = name => {
    setShow(true);
    setPlan(name);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [value, setValue] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(1);

  const handleChange = value => setValue(value);

  const [veeam, setVeeam] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [IP, setIP] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  return __jsx("div", {
    id: "pricing",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "row justify-content-center px-lg-5 px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a, {
    duration: 500,
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 37
      }
    }, " Two ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 71
      }
    }), " Geo Locations "),
    icon: "/assets/images/icons/theme/property-2.svg",
    featureList: ["Includes One Yearly Drill"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls("Two Geo Locations");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 19
    }
  }, "View Options"))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingCard"], {
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    }, " Three ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 73
      }
    }), " Geo Locations "),
    icon: "/assets/images/icons/theme/property-3.svg",
    featureList: ["Includes One Yearly Drill"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    className: "mt-3",
    variantColor: "primary",
    variant: "outline",
    size: "lg",
    onClick: () => {
      openControls("Three Geo Locations");
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, "View Options"))))), __jsx("div", {
    id: "collapse-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Collapse"], {
    className: "px-lg-5",
    mt: 6,
    isOpen: show,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "px-4 py-5 border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "display5 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, plan), __jsx("div", {
    className: "row justify-content-center px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-lg-10 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }, "No. of VMs"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    color: "primary",
    my: "24px",
    max: 20,
    defaultValue: 1,
    value: value,
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 23
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["SliderThumb"], {
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
      lineNumber: 46,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "col-lg-5 mt-2 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 23
    }
  }, "VEEAMs"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
    onChange: value => setVeeam(value),
    defaultValue: 0,
    min: 0,
    max: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 23
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 23
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 27
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 27
    }
  })))), __jsx("div", {
    className: "col-lg-5 mt-2 mb-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 23
    }
  }, "Public IPs"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInput"], {
    onChange: value => setIP(value),
    defaultValue: 0,
    min: 0,
    max: 20,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 23
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 23
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 23
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 27
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 27
    }
  })))), __jsx("div", {
    className: "col-lg-12 d-flex justify-content-center mt-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 19
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_3__["PricingQuote"], {
    serviceName: "DR As A Service",
    serviceDescription: `${plan} ${verifyNotEmpty(value, "VMs")} ${verifyNotEmpty(veeam, "VEEAM")} ${verifyNotEmpty(IP, "Public IPs")} `,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 21
    }
  })))))));
}

_s(DRPricing, "P2mUEqtPl2DaQQvMFkFEmMvzIcg=");

_c = DRPricing;
/* harmony default export */ __webpack_exports__["default"] = (DRPricing);

var _c;

$RefreshReg$(_c, "DRPricing");

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

/***/ }),

/***/ "./src/pageBuilder/pricing/DbaasPricing.jsx":
/*!**************************************************!*\
  !*** ./src/pageBuilder/pricing/DbaasPricing.jsx ***!
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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/cards/PricingCard */ "./src/components/cards/PricingCard.jsx");



var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\DbaasPricing.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const tabs = [{
  index: 0,
  title: "Base Server",
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaServer"]
}, {
  index: 1,
  title: "Windows 10",
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaWindows"]
}, {
  index: 2,
  title: "Windows 2016 Standard",
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaWindows"]
}, {
  index: 3,
  title: "Windows 2016 DC",
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaWindows"]
}, {
  index: 4,
  title: "Dedicated DB Server",
  icon: react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaDatabase"]
}];
const plans = [{
  index: 0,
  name: "Standard",
  icon: "/assets/images/icons/theme/origami.svg",
  feature: ["2vCPU", "80GB SSD Storage", "4GB RAM", "Desktop Virtualization", "High Availabilty", "High Clustering"],
  cpu: 2,
  popular: false,
  storage: 80,
  ram: 4
}, {
  index: 1,
  name: "Professional",
  icon: "/assets/images/icons/theme/paper-plane.svg",
  feature: ["4vCPU", "80GB SSD Storage", "6GB RAM", "Desktop Virtualization", "High Availabilty", "High Clustering"],
  popular: false,
  cpu: 4,
  storage: 80,
  ram: 6
}, {
  index: 2,
  name: "Business",
  icon: "/assets/images/icons/theme/airplane.svg",
  feature: ["6vCPU", "80GB SSD Storage", "8GB RAM", "Desktop Virtualization", "High Availabilty", "High Clustering"],
  popular: true,
  cpu: 6,
  storage: 80,
  ram: 8
}, {
  index: 3,
  name: "Enterprise",
  icon: "/assets/images/icons/theme/rocket.svg",
  feature: ["8vCPU", "80GB SSD Storage", "16GB RAM", "Desktop Virtualization", "High Availabilty", "High Clustering"],
  popular: false,
  cpu: 8,
  storage: 80,
  ram: 16
}];
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
      lineNumber: 136,
      columnNumber: 5
    }
  }));
});
_c2 = CustomRadio;

function DbaasPricing(props) {
  _s();

  const verifyNotEmpty = (x, text) => x > 0 ? ", " + x + " " + text : "";

  const [type, setType] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(""); //Hooks

  const [planName, setPlan] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState("Standard");

  const handlePlan = name => setPlan(name);

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useDisclosure"])();
  const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const openControls = () => {
    setShow(true);
    window.scrollTo(0, document.getElementById("collapse-1").offsetTop - 100);
  };

  const [storage, setStorage] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);

  const handleStorage = storage => setStorage(storage);

  const [ram, setRam] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);

  const handleRam = ram => setRam(ram);

  const [cpu, setCPU] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0);
  const [dailybackup, setDailyBackup] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const handleDailyBackup = dailybackup => dailybackup ? ",Enabled Daily Backup" : "";

  const [windowLicense, setWindowLicense] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  const handleWindowLicense = windowLicense => windowLicense ? ",I have a Windows License" : "";

  const resetOnCardChange = () => {
    setWindowLicense(false);
    setDailyBackup(false);
    setType("");
    setCPU(0);
    setRam(0);
    setStorage(0);
  };

  return __jsx("div", {
    className: "container-fluid",
    id: "pricing",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    mx: "auto",
    width: ["100%", "100%", "100%", "90%"],
    className: "py-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 5
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_4___default.a, {
    cascade: true,
    duration: 500,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }
  }, plans.map(plan => {
    return __jsx("div", {
      key: plan.index,
      className: "col-xl-3 col-lg-4 col-sm-6 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_6__["PricingCard"], {
      icon: plan.icon,
      title: plan.name,
      popular: plan.popular,
      featureList: plan.feature,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      className: "mt-3 btn-block primary-btn",
      variant: "solid",
      size: "lg",
      variantColor: "primary",
      onClick: () => {
        handlePlan(plan.name);
        openControls();
        resetOnCardChange();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 19
      }
    }, "Get Started")));
  })))), __jsx("div", {
    id: "collapse-1",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Collapse"], {
    id: "quoteForm",
    className: "px-lg-5 px-3",
    mt: 6,
    isOpen: show,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "px-4 py-5 border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "display5 text-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 11
    }
  }, "Customize Your ", planName, " Plan"), __jsx("div", {
    className: "row px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "col-lg-12 mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 17
    }
  }, "Choose a Type"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["RadioButtonGroup"], {
    value: type,
    onChange: value => setType(value),
    mt: 4,
    isInline: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, __jsx(CustomRadio, {
    value: ",Daily Backups",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 19
    }
  }, "Daily Backups"), __jsx(CustomRadio, {
    value: ",Hourly Snapshots",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 19
    }
  }, "Hourly Snapshots"))), __jsx("div", {
    className: "col-lg-12 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 15
    }
  }, "Extend SSD Storage (in GB)"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    color: "primary",
    my: "18px",
    defaultValue: 0,
    min: 0,
    max: 22,
    value: storage,
    onChange: handleStorage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: 80 + storage * 8,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-lg-12 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279,
      columnNumber: 15
    }
  }, "Additional Memory (in GB)"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
    color: "primary",
    my: "18px",
    defaultValue: 0,
    max: "64",
    value: ram,
    onChange: handleRam,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderFilledTrack"], {
    h: "16px",
    borderRadius: "8px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["SliderThumb"], {
    className: "shadow-md",
    fontSize: "md",
    fontWeight: "800",
    width: "auto",
    padding: "8px",
    height: "32px",
    children: ram * 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }))), __jsx("div", {
    className: "col-md-6 mt-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "h6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304,
      columnNumber: 15
    }
  }, "Additional vCPUs"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInput"], {
    maxWidth: "160px",
    min: 0,
    max: 60,
    value: cpu,
    onChange: value => {
      value <= 60 ? setCPU(value) : setCPU(60);
    },
    step: cpu < 2 ? 1 : 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputField"], {
    className: "bg-light",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberInputStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberIncrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315,
      columnNumber: 19
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["NumberDecrementStepper"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316,
      columnNumber: 19
    }
  })))), __jsx("div", {
    className: "col-md-6 mt-4 pt-md-4 pb-1 d-flex justify-content-md-end align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 13
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_6__["PricingQuote"], {
    serviceName: "Database As A Service",
    serviceDescription: `${planName} ${type} ${verifyNotEmpty(storage * 8, "GB Additional Storage")} ${verifyNotEmpty(ram * 2, "GB Memory")}
                
                ${verifyNotEmpty(cpu, "Additional vCPUs")}`,
    button: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 15
    }
  })))))));
}

_s(DbaasPricing, "6rZZ/d6malohOujgfdNgBNNH1ms=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_3__["useDisclosure"]];
});

_c3 = DbaasPricing;
/* harmony default export */ __webpack_exports__["default"] = (DbaasPricing);

var _c, _c2, _c3;

$RefreshReg$(_c, "CustomRadio$React.forwardRef");
$RefreshReg$(_c2, "CustomRadio");
$RefreshReg$(_c3, "DbaasPricing");

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

/***/ }),

/***/ "./src/pageBuilder/pricing/ProxyPricing.jsx":
/*!**************************************************!*\
  !*** ./src/pageBuilder/pricing/ProxyPricing.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cards/PricingCard */ "./src/components/cards/PricingCard.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pageBuilder\\pricing\\ProxyPricing.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ProxyPricing(props) {
  return __jsx("div", {
    id: "pricing",
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_1___default.a, {
    duration: 500,
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "row no-gutters justify-content-center px-lg-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__["PricingCard"], {
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 37
      }
    }, " Single Shared Proxy ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 87
      }
    }), " ", __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 93
      }
    }, " (Per Mbps) "), " "),
    icon: "/assets/images/icons/theme/security.svg",
    featureList: ["Single Copy", "Single Location", "Reliable & Secure", "Cost Effective"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__["PricingQuote"], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Proxy As A Service",
    serviceDescription: "Single Shared Proxy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 19
    }
  }))), __jsx("div", {
    className: "col-lg-4 my-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 15
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__["PricingCard"], {
    title: __jsx("div", {
      className: "text-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 37
      }
    }, " Cluster Shared Proxy ", __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 88
      }
    }), " ", __jsx("small", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 94
      }
    }, " (Per Mbps) "), " "),
    icon: "/assets/images/icons/theme/security.svg",
    featureList: ["Multiple Copies", "Single Location", "Reliable & Secure", "Cost Effective"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(_components_cards_PricingCard__WEBPACK_IMPORTED_MODULE_2__["PricingQuote"], {
    buttonStyle: "mt-3",
    button: true,
    serviceName: "Proxy As A Service",
    serviceDescription: "Cluster Shared Proxy",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 19
    }
  }))))));
}

_c = ProxyPricing;
/* harmony default export */ __webpack_exports__["default"] = (ProxyPricing);

var _c;

$RefreshReg$(_c, "ProxyPricing");

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
    serviceName: "SD-WAN As A Service",
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
    serviceName: "SD-WAN As A Service",
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
    serviceName: "SD-WAN As A Service",
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
    serviceName: "SD-WAN As A Service",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvY29tcG9uZW50cy9GZWF0dXJlMi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3BhZ2VzL3NvbHV0aW9ucy9jZXguanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlQnVpbGRlci9wYWdlcy9zb2x1dGlvbnMvZGJhYXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlQnVpbGRlci9wYWdlcy9zb2x1dGlvbnMvbG9hZEJhbGFuY2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL3Byb3h5LmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL3Nkd2FuLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcGFnZXMvc29sdXRpb25zL3NvY2Fhcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3BhZ2VzL3NvbHV0aW9ucy93ZWJkZXYuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlQnVpbGRlci9wYWdlcy9zb2x1dGlvbnMvd29ya3N0YXRpb24uanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlQnVpbGRlci9wcmljaW5nL0Nsb3VkTG9nZ2luZ1ByaWNpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlQnVpbGRlci9wcmljaW5nL0RSUHJpY2luZy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3ByaWNpbmcvRGJhYXNQcmljaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZUJ1aWxkZXIvcHJpY2luZy9Qcm94eVByaWNpbmcuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlQnVpbGRlci9wcmljaW5nL1Nkd2FuUHJpY2luZy5qc3giXSwibmFtZXMiOlsiRmVhdHVyZTIiLCJpbWFnZSIsImljb24iLCJzaXplIiwidGl0bGUiLCJpbWFnZVdpZHRoIiwiaWNvbkNvbG9yIiwiY29sb3IiLCJzdmciLCJ0aXRsZVNpemUiLCJkZXNjcmlwdGlvbiIsImFsaWduIiwidGV4dE9wYWNpdHkiLCJ0aXRsZUZvbnQiLCJ0aXRsZUNvbG9yIiwicHJvcHMiLCJ0aXRsZUZvbnRTaXplIiwidGV4dFNpemUiLCJ0ZXh0QWxpZ25MYXN0IiwidGl0bGVTdHlsZSIsImZvbnRTaXplIiwicHgiLCJkZXNjcmlwdGlvblN0eWxlIiwibXkiLCJweSIsImdhcCIsImJvZHkiLCJ3aWR0aCIsInR5cGUiLCJkYXRhIiwiYmciLCJyb3dEaXN0YW5jZSIsImNvbnRlbnQiLCJtdCIsImNvbnRhaW5lcldpZHRoIiwiaW1hZ2VzIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiYm9yZGVyUmFkaXVzIiwidGV4dEFsaWduIiwidGV4dCIsIm9wYWNpdHkiLCJwdCIsInBiIiwibWIiLCJiZ0ltYWdlIiwiYmxlbmQiLCJjb250YWluZXJEYXRhIiwiZmxleERpcmVjdGlvbiIsImJveFNoYWRvdyIsInAiLCJyb3VuZGVkIiwibXgiLCJsaXN0Iiwic3BhY2luZyIsInN0eWxlVHlwZSIsIm1heEgiLCJ2ZXJpZnlOb3RFbXB0eSIsIngiLCJDbG91ZExvZ2dpbmdQcmljaW5nIiwibG9nczEiLCJzZXRMb2dzMSIsIlJlYWN0IiwidXNlU3RhdGUiLCJsb2dzMiIsInNldExvZ3MyIiwibG9nczMiLCJzZXRMb2dzMyIsInZhbHVlIiwiRFJQcmljaW5nIiwic2hvdyIsInNldFNob3ciLCJwbGFuIiwic2V0UGxhbiIsIm9wZW5Db250cm9scyIsIm5hbWUiLCJ3aW5kb3ciLCJzY3JvbGxUbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvZmZzZXRUb3AiLCJzZXRWYWx1ZSIsImhhbmRsZUNoYW5nZSIsInZlZWFtIiwic2V0VmVlYW0iLCJJUCIsInNldElQIiwidGFicyIsImluZGV4IiwiRmFTZXJ2ZXIiLCJGYVdpbmRvd3MiLCJGYURhdGFiYXNlIiwicGxhbnMiLCJmZWF0dXJlIiwiY3B1IiwicG9wdWxhciIsInN0b3JhZ2UiLCJyYW0iLCJDdXN0b21SYWRpbyIsImZvcndhcmRSZWYiLCJyZWYiLCJpc0NoZWNrZWQiLCJpc0Rpc2FibGVkIiwicmVzdCIsIkRiYWFzUHJpY2luZyIsInNldFR5cGUiLCJwbGFuTmFtZSIsImhhbmRsZVBsYW4iLCJpc09wZW4iLCJvbk9wZW4iLCJvbkNsb3NlIiwidXNlRGlzY2xvc3VyZSIsInNldFN0b3JhZ2UiLCJoYW5kbGVTdG9yYWdlIiwic2V0UmFtIiwiaGFuZGxlUmFtIiwic2V0Q1BVIiwiZGFpbHliYWNrdXAiLCJzZXREYWlseUJhY2t1cCIsImhhbmRsZURhaWx5QmFja3VwIiwid2luZG93TGljZW5zZSIsInNldFdpbmRvd0xpY2Vuc2UiLCJoYW5kbGVXaW5kb3dMaWNlbnNlIiwicmVzZXRPbkNhcmRDaGFuZ2UiLCJtYXAiLCJQcm94eVByaWNpbmciLCJTZHdhblByaWNpbmciLCJmZWF0dXJlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsT0FBd087QUFBQSxNQUF0TjtBQUFFQyxTQUFGO0FBQVNDLFFBQVQ7QUFBZUMsUUFBSSxHQUFHLE1BQXRCO0FBQThCQyxTQUE5QjtBQUFxQ0MsY0FBVSxHQUFDLE1BQWhEO0FBQXdEQyxhQUFTLEdBQUcsVUFBcEU7QUFBZ0ZDLFNBQUssR0FBRyxVQUF4RjtBQUFvR0MsT0FBcEc7QUFBeUdDLGFBQVMsR0FBRyxJQUFySDtBQUEySEMsZUFBM0g7QUFBd0lDLFNBQUssR0FBRyxRQUFoSjtBQUEwSkMsZUFBMUo7QUFBdUtDLGFBQVMsR0FBQyxXQUFqTDtBQUE4TEM7QUFBOUwsR0FBc047QUFBQSxNQUFUQyxLQUFTOztBQUNwTyxTQUNJLE1BQUMsb0RBQUQ7QUFBTSxTQUFLLEVBQUVKLEtBQWI7QUFBb0IsbUJBQWUsRUFBRSxDQUFFLEdBQUVOLFVBQVcsT0FBZjtBQUFyQyxLQUFpRVUsS0FBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUNLUCxHQUFHLElBQUksTUFBQywyREFBRDtBQUFLLE9BQUcsRUFBRUEsR0FBVjtBQUFlLFNBQUssRUFBRUYsU0FBdEI7QUFBaUMsUUFBSSxFQUFFSCxJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFosRUFFS0YsS0FBSyxJQUFJLE1BQUMscURBQUQ7QUFBTyxPQUFHLEVBQUVBLEtBQVo7QUFBbUIsYUFBUyxFQUFDLE9BQTdCO0FBQXFDLFFBQUksRUFBRUUsSUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZkLEVBR0tELElBQUksSUFBSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFQSxJQUFUO0FBQWUsUUFBSSxFQUFFQyxJQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSGIsRUFJSSxNQUFDLG1EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQVMsY0FBVSxFQUFFVSxTQUFyQjtBQUFnQyxZQUFRLEVBQUVFLEtBQUssQ0FBQ0MsYUFBaEQ7QUFBK0QsUUFBSSxFQUFFUCxTQUFyRTtBQUFnRixhQUFTLEVBQUVFLEtBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUdQLEtBQW5HLENBREosRUFFSSxNQUFDLG9EQUFEO0FBQU0sWUFBUSxFQUFFVyxLQUFLLENBQUNFLFFBQXRCO0FBQWdDLFdBQU8sRUFBRUwsV0FBekM7QUFBc0QsTUFBRSxFQUFFLENBQTFEO0FBQTZELGFBQVMsRUFBQyxTQUF2RTtBQUFpRixTQUFLLEVBQUU7QUFBRU0sbUJBQWEsRUFBRVA7QUFBakIsS0FBeEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtSEQsV0FBbkgsQ0FGSixDQUpKLENBREo7QUFXSDs7S0FaUVYsUTtBQWFNQSx1RUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDZSxnRUFDWDtBQUNJSSxPQUFLLEVBQUUsd0RBRFg7QUFFSWUsWUFBVSxFQUFDO0FBQUNDLFlBQVEsRUFBQyxDQUFDLEtBQUQsRUFBTyxLQUFQLENBQVY7QUFBd0JDLE1BQUUsRUFBQztBQUEzQixHQUZmO0FBR0lYLGFBQVcsRUFBRSxtZkFIakI7QUFJSVksa0JBQWdCLEVBQUU7QUFDZEQsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFEVTtBQUp0QixDQURXLEVBU1g7QUFDSWpCLE9BQUssRUFBRSxtQkFEWDtBQUVJbUIsSUFBRSxFQUFFLENBRlI7QUFHSUMsSUFBRSxFQUFFLEVBSFI7QUFJSUMsS0FBRyxFQUFFLENBSlQ7QUFLSUMsTUFBSSxFQUFFLENBQUM7QUFDSEMsU0FBSyxFQUFFLE1BREo7QUFFSEMsUUFBSSxFQUFFLFNBRkg7QUFHSEMsUUFBSSxFQUFFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhILEdBQUQsQ0FMVjtBQVVJQyxJQUFFLEVBQUU7QUFWUixDQVRXLEVBcUJYO0FBQ0kxQixPQUFLLEVBQUUsMkJBRFg7QUFFSTJCLGFBQVcsRUFBRSxDQUZqQjtBQUdJUCxJQUFFLEVBQUUsRUFIUjtBQUlJRSxNQUFJLEVBQUUsQ0FBQztBQUNIQyxTQUFLLEVBQUUsTUFESjtBQUVIQyxRQUFJLEVBQUUsV0FGSDtBQUdIQyxRQUFJLEVBQUU7QUFDRlQsY0FBUSxFQUFFLElBRFI7QUFFRlksYUFBTyxFQUFFLENBQUM7QUFDTjVCLGFBQUssRUFBRSxxQkFERDtBQUVOTSxtQkFBVyxFQUFFLDZMQUZQO0FBR05ULGFBQUssRUFBRTtBQUhELE9BQUQsRUFLVDtBQUNJRyxhQUFLLEVBQUUsVUFEWDtBQUVJTSxtQkFBVyxFQUFFLGlMQUZqQjtBQUdJVCxhQUFLLEVBQUU7QUFIWCxPQUxTLEVBVVQ7QUFDSUcsYUFBSyxFQUFFLGFBRFg7QUFFSU0sbUJBQVcsRUFBRSx3S0FGakI7QUFHSVQsYUFBSyxFQUFFO0FBSFgsT0FWUztBQUZQO0FBSEgsR0FBRDtBQUpWLENBckJXLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUVlLGdFQUNYO0FBQ0lnQyxJQUFFLEVBQUMsQ0FEUDtBQUVJVCxJQUFFLEVBQUUsQ0FGUjtBQUdJVSxnQkFBYyxFQUFFLE1BSHBCO0FBSUlSLE1BQUksRUFBRSxDQUNGO0FBQ0lFLFFBQUksRUFBRSxTQURWO0FBRUlDLFFBQUksRUFBRSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGVixHQURFLEVBS0Y7QUFDSUYsU0FBSyxFQUFFLENBQUMsTUFBRCxDQURYO0FBRUlNLE1BQUUsRUFBRSxDQUZSO0FBR0lMLFFBQUksRUFBRSxZQUhWO0FBSUlDLFFBQUksRUFBRTtBQUNGTSxZQUFNLEVBQUUsQ0FBQyx5Q0FBRCxFQUE0Qyw0Q0FBNUMsRUFBMEYseURBQTFGLENBRE47QUFFRmQsUUFBRSxFQUFFLENBRkY7QUFHRmUsWUFBTSxFQUFFLE1BSE47QUFJRkMsZUFBUyxFQUFFO0FBSlQ7QUFKVixHQUxFO0FBSlYsQ0FEVyxFQXVCWDtBQUNJWixLQUFHLEVBQUUsRUFEVDtBQUVJQyxNQUFJLEVBQUUsQ0FDRjtBQUNJQyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFJLENBQXJCLENBRFg7QUFFSUMsUUFBSSxFQUFFLFlBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQ0ZNLFlBQU0sRUFBRSxDQUFDLGlIQUFELENBRE47QUFFRkcsa0JBQVksRUFBRSxDQUZaO0FBR0ZYLFdBQUssRUFBRSxLQUhMO0FBSUZTLFlBQU0sRUFBRSxPQUpOO0FBS0ZDLGVBQVMsRUFBRTtBQUxUO0FBSFYsR0FERSxFQVlGO0FBQ0lWLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQUksQ0FBckIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUUsQ0FBQztBQUNIVSxlQUFTLEVBQUUsU0FEUjtBQUVIbkIsY0FBUSxFQUFFLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLEVBQWdCLElBQWhCLENBRlA7QUFHSGhCLFdBQUssRUFBRSx5Q0FISjtBQUlISyxlQUFTLEVBQUUsQ0FBQyxFQUFELEVBQUksRUFBSixFQUFPLEVBQVAsRUFBVSxFQUFWLENBSlI7QUFLSCtCLFVBQUksRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEgsS0FBRDtBQUhWLEdBWkU7QUFGVixDQXZCVyxFQWlEWDtBQUNJcEMsT0FBSyxFQUFFLHVFQURYO0FBRUllLFlBQVUsRUFBRTtBQUNSYyxNQUFFLEVBQUU7QUFESSxHQUZoQjtBQUtJdkIsYUFBVyxFQUFDLCtOQUxoQjtBQU1JYSxJQUFFLEVBQUUsQ0FOUjtBQU9JQyxJQUFFLEVBQUUsRUFQUjtBQVFJTSxJQUFFLEVBQUUsV0FSUjtBQVNJdkIsT0FBSyxFQUFFLFVBVFg7QUFVSXdCLGFBQVcsRUFBRSxDQVZqQjtBQVdJTixLQUFHLEVBQUUsQ0FYVDtBQVlJSCxrQkFBZ0IsRUFBQztBQUNiRixZQUFRLEVBQUMsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVg7QUFESSxHQVpyQjtBQWVJTSxNQUFJLEVBQUUsQ0FDRjtBQUNJQyxTQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUwsRUFBUSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQ0ZsQixXQUFLLEVBQUUsUUFETDtBQUNlRixlQUFTLEVBQUUsSUFEMUI7QUFDZ0NILGVBQVMsRUFBRSxTQUQzQztBQUNzREUsU0FBRyxFQUFFLHFEQUQzRDtBQUNrSHlCLFFBQUUsRUFBRSxDQUR0SDtBQUN5SDdCLFdBQUssRUFBRTtBQURoSTtBQUhWLEdBREUsRUFRRjtBQUNJdUIsU0FBSyxFQUFFLENBQUMsSUFBSSxDQUFMLEVBQVEsSUFBSSxDQUFaLEVBQWUsSUFBSSxDQUFuQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRTtBQUFFbEIsV0FBSyxFQUFFLFFBQVQ7QUFBbUJGLGVBQVMsRUFBRSxJQUE5QjtBQUFvQ0gsZUFBUyxFQUFFLFNBQS9DO0FBQTBERSxTQUFHLEVBQUUsb0RBQS9EO0FBQXFIeUIsUUFBRSxFQUFFLENBQXpIO0FBQTRIN0IsV0FBSyxFQUFFO0FBQW5JO0FBSFYsR0FSRSxFQWFGO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUwsRUFBUSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUVsQixXQUFLLEVBQUUsUUFBVDtBQUFtQkYsZUFBUyxFQUFFLElBQTlCO0FBQW9DSCxlQUFTLEVBQUUsU0FBL0M7QUFBMERFLFNBQUcsRUFBRSx3REFBL0Q7QUFBeUh5QixRQUFFLEVBQUUsQ0FBN0g7QUFBZ0k3QixXQUFLLEVBQUU7QUFBdkk7QUFIVixHQWJFLEVBa0JGO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUwsRUFBUSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQ0ZsQixXQUFLLEVBQUUsUUFETDtBQUNlRixlQUFTLEVBQUUsSUFEMUI7QUFDZ0NILGVBQVMsRUFBRSxTQUQzQztBQUNzREUsU0FBRyxFQUFFLGlEQUQzRDtBQUM4R3lCLFFBQUUsRUFBRSxDQURsSDtBQUNxSDdCLFdBQUssRUFBRTtBQUQ1SDtBQUhWLEdBbEJFLEVBeUJGO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUwsRUFBUSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUVsQixXQUFLLEVBQUUsUUFBVDtBQUFtQkYsZUFBUyxFQUFFLElBQTlCO0FBQW9DSCxlQUFTLEVBQUUsU0FBL0M7QUFBMERFLFNBQUcsRUFBRSw4Q0FBL0Q7QUFBK0d5QixRQUFFLEVBQUUsQ0FBbkg7QUFBc0g3QixXQUFLLEVBQUU7QUFBN0g7QUFIVixHQXpCRSxFQThCRjtBQUNJdUIsU0FBSyxFQUFFLENBQUMsSUFBSSxDQUFMLEVBQVEsSUFBSSxDQUFaLEVBQWUsSUFBSSxDQUFuQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRTtBQUFFbEIsV0FBSyxFQUFFLFFBQVQ7QUFBbUJGLGVBQVMsRUFBRSxJQUE5QjtBQUFvQ0gsZUFBUyxFQUFFLFNBQS9DO0FBQTBERSxTQUFHLEVBQUUsNkNBQS9EO0FBQThHeUIsUUFBRSxFQUFFLENBQWxIO0FBQXFIN0IsV0FBSyxFQUFFO0FBQTVIO0FBSFYsR0E5QkUsRUFtQ0Y7QUFDSXVCLFNBQUssRUFBRSxDQUFDLElBQUksQ0FBTCxFQUFRLElBQUksQ0FBWixFQUFlLElBQUksQ0FBbkIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBRWxCLFdBQUssRUFBRSxRQUFUO0FBQW1CRixlQUFTLEVBQUUsSUFBOUI7QUFBb0NILGVBQVMsRUFBRSxTQUEvQztBQUEwREUsU0FBRyxFQUFFLHlEQUEvRDtBQUEwSHlCLFFBQUUsRUFBRSxDQUE5SDtBQUFpSTdCLFdBQUssRUFBRTtBQUF4STtBQUhWLEdBbkNFO0FBZlYsQ0FqRFcsRUEwR1g7QUFDSW9CLElBQUUsRUFBRSxDQUFDLENBQUQsRUFBRyxFQUFILENBRFI7QUFFSWQsYUFBVyxFQUFDLDROQUZoQjtBQUdJWSxrQkFBZ0IsRUFBQztBQUNiRixZQUFRLEVBQUMsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FESTtBQUVicUIsV0FBTyxFQUFDLEdBRks7QUFHYkYsYUFBUyxFQUFDO0FBSEc7QUFIckIsQ0ExR1csQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmUsZ0VBQ1g7QUFDSWQsS0FBRyxFQUFFLEVBRFQ7QUFFSUQsSUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FGUjtBQUdJRSxNQUFJLEVBQUUsQ0FDTjtBQUNJQyxTQUFLLEVBQUMsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFFLENBQW5CLENBRFY7QUFFSUgsTUFBRSxFQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FGUDtBQUdJSSxRQUFJLEVBQUUsWUFIVjtBQUlJQyxRQUFJLEVBQUU7QUFDRk0sWUFBTSxFQUFFLENBQUMsaUhBQUQsQ0FETjtBQUVGRyxrQkFBWSxFQUFFLENBRlo7QUFHRlgsV0FBSyxFQUFFLEtBSEw7QUFJRlMsWUFBTSxFQUFFLE9BSk47QUFLRkMsZUFBUyxFQUFFO0FBTFQ7QUFKVixHQURNLEVBYU47QUFDSVYsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsSUFBRSxDQUFuQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRSxDQUFDO0FBQ0hVLGVBQVMsRUFBRSxTQURSO0FBRUhuQixjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FGUDtBQUdIaEIsV0FBSyxFQUFFLHVEQUhKO0FBSUhLLGVBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sRUFBUCxFQUFVLEVBQVYsQ0FKUjtBQUtIK0IsVUFBSSxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSCxLQUFEO0FBSFYsR0FiTTtBQUhWLENBRFcsRUFvQ1g7QUFDSXBDLE9BQUssRUFBRyw2Q0FEWjtBQUdJTSxhQUFXLEVBQUUsZ0pBSGpCO0FBS0lhLElBQUUsRUFBRSxDQUxSO0FBTUlDLElBQUUsRUFBRSxFQU5SO0FBT0lNLElBQUUsRUFBRSxVQVBSO0FBUUl2QixPQUFLLEVBQUUsVUFSWDtBQVNJd0IsYUFBVyxFQUFFLEVBVGpCO0FBVUlOLEtBQUcsRUFBRSxDQVZUO0FBV0lDLE1BQUksRUFBRSxDQUNOO0FBQ0lDLFNBQUssRUFBRSxDQUFDLElBQUUsQ0FBSCxFQUFNLElBQUUsQ0FBUixFQUFXLElBQUUsQ0FBYixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRTtBQUFDbEIsV0FBSyxFQUFFLFFBQVI7QUFBaUJGLGVBQVMsRUFBQyxJQUEzQjtBQUFpQ0gsZUFBUyxFQUFDLFNBQTNDO0FBQXNERSxTQUFHLEVBQUMsd0RBQTFEO0FBQW9IeUIsUUFBRSxFQUFFLENBQXhIO0FBQTJIN0IsV0FBSyxFQUFFO0FBQWxJO0FBSFYsR0FETSxFQU1OO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWtCRixlQUFTLEVBQUMsSUFBNUI7QUFBa0NILGVBQVMsRUFBQyxTQUE1QztBQUF1REUsU0FBRyxFQUFDLDhDQUEzRDtBQUEyR3lCLFFBQUUsRUFBRSxDQUEvRztBQUFrSDdCLFdBQUssRUFBRTtBQUF6SDtBQUhWLEdBTk0sRUFXTjtBQUNJdUIsU0FBSyxFQUFFLENBQUMsSUFBRSxDQUFILEVBQU0sSUFBRSxDQUFSLEVBQVcsSUFBRSxDQUFiLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUNsQixXQUFLLEVBQUUsUUFBUjtBQUFpQkYsZUFBUyxFQUFDLElBQTNCO0FBQWlDSCxlQUFTLEVBQUMsU0FBM0M7QUFBc0RFLFNBQUcsRUFBQyw2Q0FBMUQ7QUFBd0d5QixRQUFFLEVBQUUsQ0FBNUc7QUFBK0c3QixXQUFLLEVBQUU7QUFBdEg7QUFIVixHQVhNLEVBZ0JOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWlCRixlQUFTLEVBQUMsSUFBM0I7QUFBaUNILGVBQVMsRUFBQyxTQUEzQztBQUFzREUsU0FBRyxFQUFDLHFEQUExRDtBQUFpSHlCLFFBQUUsRUFBRSxDQUFySDtBQUF3SDdCLFdBQUssRUFBRTtBQUEvSDtBQUhWLEdBaEJNLEVBcUJOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWlCRixlQUFTLEVBQUMsSUFBM0I7QUFBaUNILGVBQVMsRUFBQyxTQUEzQztBQUFzREUsU0FBRyxFQUFDLDZDQUExRDtBQUF5R3lCLFFBQUUsRUFBRSxDQUE3RztBQUFnSDdCLFdBQUssRUFBRTtBQUF2SDtBQUhWLEdBckJNLEVBMEJOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWtCRixlQUFTLEVBQUMsSUFBNUI7QUFBaUNILGVBQVMsRUFBQyxTQUEzQztBQUFzREUsU0FBRyxFQUFDLCtDQUExRDtBQUEyR3lCLFFBQUUsRUFBRSxDQUEvRztBQUFrSDdCLFdBQUssRUFBRTtBQUF6SDtBQUhWLEdBMUJNLEVBK0JOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWlCRixlQUFTLEVBQUMsSUFBM0I7QUFBZ0NILGVBQVMsRUFBQyxTQUExQztBQUFxREUsU0FBRyxFQUFDLCtDQUF6RDtBQUEwR3lCLFFBQUUsRUFBRSxDQUE5RztBQUFpSDdCLFdBQUssRUFBRTtBQUF4SDtBQUhWLEdBL0JNO0FBWFYsQ0FwQ1csRUFxRmY7QUFDSXNCLE1BQUksRUFBRSxDQUFDO0FBQ0hFLFFBQUksRUFBRSxTQURIO0FBRUhDLFFBQUksRUFBRSxDQUFDO0FBQ0hXLFVBQUksRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNTQURIO0FBT0hwQixjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FQUDtBQVFIbUIsZUFBUyxFQUFFO0FBUlIsS0FBRDtBQUZILEdBQUQsQ0FEVjtBQWNJRyxJQUFFLEVBQUUsQ0FkUjtBQWVJQyxJQUFFLEVBQUUsQ0FmUjtBQWdCSUMsSUFBRSxFQUFFO0FBaEJSLENBckZlLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVlLGdFQUNYO0FBQ0l4QyxPQUFLLEVBQUUsb0JBRFg7QUFFSXFCLEtBQUcsRUFBRSxDQUZUO0FBR0lDLE1BQUksRUFBRSxDQUFDO0FBQ0hFLFFBQUksRUFBRSxTQURIO0FBRUhDLFFBQUksRUFBRSxDQUFDO0FBQ0hXLFVBQUksRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNXQURIO0FBTUhwQixjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FOUDtBQU9IbUIsZUFBUyxFQUFDLFFBUFA7QUFRSEUsYUFBTyxFQUFFO0FBUk4sS0FBRDtBQUZILEdBQUQsRUFhRjtBQUNJZCxTQUFLLEVBQUUsTUFEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFYsR0FiRTtBQUhWLENBRFcsRUF3Qlg7QUFDSU4sSUFBRSxFQUFFLENBRFI7QUFFSUMsSUFBRSxFQUFFLE1BRlI7QUFHSXFCLFNBQU8sRUFBRSx3REFIYjtBQUlJQyxPQUFLLEVBQUUsUUFKWDtBQUtJaEIsSUFBRSxFQUFFLFdBTFI7QUFNSXZCLE9BQUssRUFBRSxVQU5YO0FBT0lrQixLQUFHLEVBQUUsQ0FQVDtBQVFJQyxNQUFJLEVBQUUsQ0FDRjtBQUNJQyxTQUFLLEVBQUUsTUFEWDtBQUVJQyxRQUFJLEVBQUUsV0FGVjtBQUdJbUIsaUJBQWEsRUFBRSxDQUFDO0FBQ1pwQixXQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUwsRUFBUSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLEVBQXNCLElBQUksQ0FBMUIsRUFBNkIsSUFBSSxDQUFqQyxDQURLO0FBRVpDLFVBQUksRUFBRSxTQUZNO0FBR1pDLFVBQUksRUFBRTtBQUFFbEIsYUFBSyxFQUFFLFFBQVQ7QUFBbUJGLGlCQUFTLEVBQUUsSUFBOUI7QUFBb0NILGlCQUFTLEVBQUUsYUFBL0M7QUFBOERFLFdBQUcsRUFBRSxrREFBbkU7QUFBdUh5QixVQUFFLEVBQUUsQ0FBM0g7QUFBOEg3QixhQUFLLEVBQUU7QUFBckk7QUFITSxLQUFELEVBS2Y7QUFDSXVCLFdBQUssRUFBRSxDQUFDLElBQUksQ0FBTCxFQUFRLElBQUksQ0FBWixFQUFlLElBQUksQ0FBbkIsRUFBc0IsSUFBSSxDQUExQixFQUE2QixJQUFJLENBQWpDLENBRFg7QUFFSUMsVUFBSSxFQUFFLFNBRlY7QUFHSUMsVUFBSSxFQUFFO0FBQUVsQixhQUFLLEVBQUUsUUFBVDtBQUFtQkYsaUJBQVMsRUFBRSxJQUE5QjtBQUFvQ0gsaUJBQVMsRUFBRSxhQUEvQztBQUE4REUsV0FBRyxFQUFFLHFEQUFuRTtBQUEwSHlCLFVBQUUsRUFBRSxDQUE5SDtBQUFpSTdCLGFBQUssRUFBRTtBQUF4STtBQUhWLEtBTGUsRUFVZjtBQUNJdUIsV0FBSyxFQUFFLENBQUMsSUFBSSxDQUFMLEVBQVEsSUFBSSxDQUFaLEVBQWUsSUFBSSxDQUFuQixFQUFzQixJQUFJLENBQTFCLEVBQTZCLElBQUksQ0FBakMsQ0FEWDtBQUVJQyxVQUFJLEVBQUUsU0FGVjtBQUdJQyxVQUFJLEVBQUU7QUFBRWxCLGFBQUssRUFBRSxRQUFUO0FBQW1CRixpQkFBUyxFQUFFLElBQTlCO0FBQW9DSCxpQkFBUyxFQUFFLGFBQS9DO0FBQThERSxXQUFHLEVBQUUsMkNBQW5FO0FBQWdIeUIsVUFBRSxFQUFFLENBQXBIO0FBQXVIN0IsYUFBSyxFQUFFO0FBQTlIO0FBSFYsS0FWZSxFQWVmO0FBQ0l1QixXQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUwsRUFBUSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLEVBQXNCLElBQUksQ0FBMUIsRUFBNkIsSUFBSSxDQUFqQyxDQURYO0FBRUlDLFVBQUksRUFBRSxTQUZWO0FBR0lDLFVBQUksRUFBRTtBQUFFbEIsYUFBSyxFQUFFLFFBQVQ7QUFBbUJGLGlCQUFTLEVBQUUsSUFBOUI7QUFBb0NILGlCQUFTLEVBQUUsYUFBL0M7QUFBOERFLFdBQUcsRUFBRSxzREFBbkU7QUFBMkh5QixVQUFFLEVBQUUsQ0FBL0g7QUFBa0k3QixhQUFLLEVBQUU7QUFBekk7QUFIVixLQWZlLEVBb0JmO0FBQ0l1QixXQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUwsRUFBUSxJQUFJLENBQVosRUFBZSxJQUFJLENBQW5CLEVBQXNCLElBQUksQ0FBMUIsRUFBNkIsSUFBSSxDQUFqQyxDQURYO0FBRUlDLFVBQUksRUFBRSxTQUZWO0FBR0lDLFVBQUksRUFBRTtBQUFFbEIsYUFBSyxFQUFFLFFBQVQ7QUFBbUJGLGlCQUFTLEVBQUUsSUFBOUI7QUFBb0NILGlCQUFTLEVBQUUsYUFBL0M7QUFBOERFLFdBQUcsRUFBRSw2Q0FBbkU7QUFBa0h5QixVQUFFLEVBQUUsQ0FBdEg7QUFBeUg3QixhQUFLLEVBQUU7QUFBaEk7QUFIVixLQXBCZSxFQXlCZjtBQUNJdUIsV0FBSyxFQUFFLENBQUMsSUFBSSxDQUFMLEVBQVEsSUFBSSxDQUFaLEVBQWUsSUFBSSxDQUFuQixFQUFzQixJQUFJLENBQTFCLEVBQTZCLElBQUksQ0FBakMsQ0FEWDtBQUVJQyxVQUFJLEVBQUUsU0FGVjtBQUdJQyxVQUFJLEVBQUU7QUFBRWxCLGFBQUssRUFBRSxRQUFUO0FBQW1CRixpQkFBUyxFQUFFLElBQTlCO0FBQW9DSCxpQkFBUyxFQUFFLGFBQS9DO0FBQThERSxXQUFHLEVBQUUsc0RBQW5FO0FBQTJIeUIsVUFBRSxFQUFFLENBQS9IO0FBQWtJN0IsYUFBSyxFQUFFO0FBQXpJO0FBSFYsS0F6QmU7QUFIbkIsR0FERTtBQVJWLENBeEJXLEVBcUVYO0FBQ0lzQixNQUFJLEVBQUUsQ0FBQztBQUNIQyxTQUFLLEVBQUUsTUFESjtBQUVIQyxRQUFJLEVBQUUsV0FGSDtBQUdIQyxRQUFJLEVBQUU7QUFDRlQsY0FBUSxFQUFFLElBRFI7QUFFRlksYUFBTyxFQUFFLENBQUM7QUFDTjVCLGFBQUssRUFBRSxXQUREO0FBRU5NLG1CQUFXLEVBQUUsK0tBRlA7QUFHTlQsYUFBSyxFQUFFO0FBSEQsT0FBRCxFQUtUO0FBQ0lHLGFBQUssRUFBRSxtQkFEWDtBQUVJTSxtQkFBVyxFQUFFLCtOQUZqQjtBQUdJVCxhQUFLLEVBQUU7QUFIWCxPQUxTLEVBVVQ7QUFDSUcsYUFBSyxFQUFFLHlDQURYO0FBRUlNLG1CQUFXLEVBQUUsd01BRmpCO0FBR0lULGFBQUssRUFBRTtBQUhYLE9BVlM7QUFGUDtBQUhILEdBQUQ7QUFEVixDQXJFVyxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFZSxnRUFDWDtBQUNJb0IsSUFBRSxFQUFFLENBRFI7QUFFSUssTUFBSSxFQUFFLENBQ0Y7QUFDSUUsUUFBSSxFQUFFLFlBRFY7QUFFSUMsUUFBSSxFQUFFO0FBQ0Y1QixXQUFLLEVBQUUsd0RBREw7QUFFRkcsV0FBSyxFQUFFLGlDQUZMO0FBR0Y0QyxtQkFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsYUFBckIsQ0FIYjtBQUlGdEMsaUJBQVcsRUFBRTtBQUpYO0FBRlYsR0FERTtBQUZWLENBRFcsRUFlWDtBQUNJYyxJQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURSO0FBRUlDLEtBQUcsRUFBRSxDQUZUO0FBRVlRLElBQUUsRUFBRSxDQUZoQjtBQUdJSCxJQUFFLEVBQUUsV0FIUjtBQUlJSixNQUFJLEVBQUUsQ0FBQztBQUNIQyxTQUFLLEVBQUUsTUFESjtBQUVIQyxRQUFJLEVBQUUsU0FGSDtBQUdIQyxRQUFJLEVBQUUsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSEgsR0FBRDtBQUpWLENBZlcsRUEwQlg7QUFDSVIsSUFBRSxFQUFFLENBRFI7QUFFSWpCLE9BQUssRUFBRSxxREFGWDtBQUdJTSxhQUFXLEVBQUUsOE9BSGpCO0FBSUlZLGtCQUFnQixFQUFFO0FBQ2RELE1BQUUsRUFBRTtBQURVLEdBSnRCO0FBT0lJLEtBQUcsRUFBRSxFQVBUO0FBUUlNLGFBQVcsRUFBRSxDQVJqQjtBQVNJTCxNQUFJLEVBQUUsQ0FDRjtBQUNJRixNQUFFLEVBQUUsQ0FEUjtBQUVJRyxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFJLENBQXJCLENBRlg7QUFHSUMsUUFBSSxFQUFFLFVBSFY7QUFJSUMsUUFBSSxFQUFFO0FBQ0ZwQixlQUFTLEVBQUUsSUFEVDtBQUVGSSxlQUFTLEVBQUUsV0FGVDtBQUdGRCxpQkFBVyxFQUFFLEtBSFg7QUFJRlgsV0FBSyxFQUFFLHVDQUpMO0FBS0ZHLFdBQUssRUFBRSxxQkFMTDtBQU1GTyxXQUFLLEVBQUUsTUFOTDtBQU9GUixVQUFJLEVBQUUsTUFQSjtBQVFGTyxpQkFBVyxFQUFFO0FBUlg7QUFKVixHQURFLEVBZ0JGO0FBQ0ljLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQUksQ0FBckIsQ0FGWDtBQUdJQyxRQUFJLEVBQUUsVUFIVjtBQUlJQyxRQUFJLEVBQUU7QUFDRnBCLGVBQVMsRUFBRSxJQURUO0FBRUZJLGVBQVMsRUFBRSxXQUZUO0FBR0ZELGlCQUFXLEVBQUUsS0FIWDtBQUlGWCxXQUFLLEVBQUUscUNBSkw7QUFLRkcsV0FBSyxFQUFFLDJCQUxMO0FBTUZPLFdBQUssRUFBRSxNQU5MO0FBT0ZSLFVBQUksRUFBRSxNQVBKO0FBUUZPLGlCQUFXLEVBQUU7QUFSWDtBQUpWLEdBaEJFLEVBK0JGO0FBQ0ljLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQUksQ0FBckIsQ0FGWDtBQUdJQyxRQUFJLEVBQUUsVUFIVjtBQUlJQyxRQUFJLEVBQUU7QUFDRnBCLGVBQVMsRUFBRSxJQURUO0FBRUZJLGVBQVMsRUFBRSxXQUZUO0FBR0ZELGlCQUFXLEVBQUUsS0FIWDtBQUlGWCxXQUFLLEVBQUUsNENBSkw7QUFLRkcsV0FBSyxFQUFFLHdCQUxMO0FBTUZPLFdBQUssRUFBRSxNQU5MO0FBT0ZSLFVBQUksRUFBRSxNQVBKO0FBUUZPLGlCQUFXLEVBQUU7QUFSWDtBQUpWLEdBL0JFLEVBOENGO0FBQ0ljLE1BQUUsRUFBRSxDQURSO0FBRUlHLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQUksQ0FBckIsQ0FGWDtBQUdJQyxRQUFJLEVBQUUsVUFIVjtBQUlJQyxRQUFJLEVBQUU7QUFDRnBCLGVBQVMsRUFBRSxJQURUO0FBRUZJLGVBQVMsRUFBRSxXQUZUO0FBR0ZELGlCQUFXLEVBQUUsS0FIWDtBQUlGWCxXQUFLLEVBQUUscUNBSkw7QUFLRkcsV0FBSyxFQUFFLHFCQUxMO0FBTUZPLFdBQUssRUFBRSxNQU5MO0FBT0ZSLFVBQUksRUFBRSxNQVBKO0FBUUZPLGlCQUFXLEVBQUU7QUFSWDtBQUpWLEdBOUNFO0FBVFYsQ0ExQlcsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRmUsZ0VBQ1g7QUFDSWUsS0FBRyxFQUFFLEVBRFQ7QUFFSUQsSUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FGUjtBQUdJRSxNQUFJLEVBQUUsQ0FDTjtBQUNJQyxTQUFLLEVBQUMsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFFLENBQW5CLENBRFY7QUFFSUgsTUFBRSxFQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxFQUFTLENBQVQsQ0FGUDtBQUdJSSxRQUFJLEVBQUUsWUFIVjtBQUlJQyxRQUFJLEVBQUU7QUFDRk0sWUFBTSxFQUFFLENBQUMsaUhBQUQsQ0FETjtBQUVGRyxrQkFBWSxFQUFFLENBRlo7QUFHRlgsV0FBSyxFQUFFLEtBSEw7QUFJRlMsWUFBTSxFQUFFLE9BSk47QUFLRkMsZUFBUyxFQUFFO0FBTFQ7QUFKVixHQURNLEVBYU47QUFDSVYsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsSUFBRSxDQUFuQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRSxDQUFDO0FBQ0hVLGVBQVMsRUFBRSxTQURSO0FBRUhuQixjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsRUFBZ0IsSUFBaEIsQ0FGUDtBQUdIaEIsV0FBSyxFQUFFLHlDQUhKO0FBSUhLLGVBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sRUFBUCxFQUFVLEVBQVYsQ0FKUjtBQUtIK0IsVUFBSSxFQUFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMSCxLQUFEO0FBSFYsR0FiTTtBQUhWLENBRFcsRUFxQ1g7QUFDSXBDLE9BQUssRUFBRyxrREFEWjtBQUVJTSxhQUFXLEVBQUUsaVVBRmpCO0FBSUlhLElBQUUsRUFBRSxDQUpSO0FBS0lDLElBQUUsRUFBRSxFQUxSO0FBTUlNLElBQUUsRUFBRSxVQU5SO0FBT0l2QixPQUFLLEVBQUUsVUFQWDtBQVFJd0IsYUFBVyxFQUFFLEVBUmpCO0FBU0lOLEtBQUcsRUFBRSxDQVRUO0FBVUlDLE1BQUksRUFBRSxDQUNOO0FBQ0lDLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFFLENBQVgsRUFBYyxJQUFFLENBQWhCLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUNsQixXQUFLLEVBQUUsUUFBUjtBQUFpQkYsZUFBUyxFQUFDLElBQTNCO0FBQWlDSCxlQUFTLEVBQUMsU0FBM0M7QUFBc0RFLFNBQUcsRUFBQyxrREFBMUQ7QUFBOEd5QixRQUFFLEVBQUUsQ0FBbEg7QUFBcUg3QixXQUFLLEVBQUU7QUFBNUg7QUFIVixHQURNLEVBTU47QUFDSXVCLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFFLENBQVgsRUFBYyxJQUFFLENBQWhCLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUNsQixXQUFLLEVBQUUsUUFBUjtBQUFrQkYsZUFBUyxFQUFDLElBQTVCO0FBQWtDSCxlQUFTLEVBQUMsU0FBNUM7QUFBdURFLFNBQUcsRUFBQywrQ0FBM0Q7QUFBNEd5QixRQUFFLEVBQUUsQ0FBaEg7QUFBbUg3QixXQUFLLEVBQUU7QUFBMUg7QUFIVixHQU5NLEVBV047QUFDSXVCLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFFLENBQVgsRUFBYyxJQUFFLENBQWhCLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUNsQixXQUFLLEVBQUUsUUFBUjtBQUFpQkYsZUFBUyxFQUFDLElBQTNCO0FBQWlDSCxlQUFTLEVBQUMsU0FBM0M7QUFBc0RFLFNBQUcsRUFBQyw2REFBMUQ7QUFBd0h5QixRQUFFLEVBQUUsQ0FBNUg7QUFBK0g3QixXQUFLLEVBQUU7QUFBdEk7QUFIVixHQVhNLEVBZ0JOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBRSxDQUFYLEVBQWMsSUFBRSxDQUFoQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRTtBQUFDbEIsV0FBSyxFQUFFLFFBQVI7QUFBaUJGLGVBQVMsRUFBQyxJQUEzQjtBQUFpQ0gsZUFBUyxFQUFDLFNBQTNDO0FBQXNERSxTQUFHLEVBQUMsd0RBQTFEO0FBQW9IeUIsUUFBRSxFQUFFLENBQXhIO0FBQTJIN0IsV0FBSyxFQUFFO0FBQWxJO0FBSFYsR0FoQk0sRUFxQk47QUFDSXVCLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFFLENBQVgsRUFBYyxJQUFFLENBQWhCLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUNsQixXQUFLLEVBQUUsUUFBUjtBQUFpQkYsZUFBUyxFQUFDLElBQTNCO0FBQWlDSCxlQUFTLEVBQUMsU0FBM0M7QUFBc0RFLFNBQUcsRUFBQyx1REFBMUQ7QUFBbUh5QixRQUFFLEVBQUUsQ0FBdkg7QUFBMEg3QixXQUFLLEVBQUU7QUFBakk7QUFIVixHQXJCTTtBQVZWLENBckNXLEVBMkVmO0FBQ0lzQixNQUFJLEVBQUUsQ0FBQztBQUNIRSxRQUFJLEVBQUUsU0FESDtBQUVIQyxRQUFJLEVBQUUsQ0FBQztBQUNIVyxVQUFJLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrU0FESDtBQU9IcEIsY0FBUSxFQUFDLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxJQUFYLENBUE47QUFRSG1CLGVBQVMsRUFBRTtBQVJSLEtBQUQ7QUFGSCxHQUFELENBRFY7QUFjSUcsSUFBRSxFQUFFLENBZFI7QUFlSUMsSUFBRSxFQUFFLENBZlI7QUFnQklDLElBQUUsRUFBRTtBQWhCUixDQTNFZSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFFZSxnRUFDWDtBQUNJcEIsSUFBRSxFQUFFLENBRFI7QUFFSUUsTUFBSSxFQUFFLENBQUM7QUFDSEUsUUFBSSxFQUFFLFNBREg7QUFFSEMsUUFBSSxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZILEdBQUQ7QUFGVixDQURXLEVBUVg7QUFDSXpCLE9BQUssRUFBRSx5QkFEWDtBQUVJTSxhQUFXLEVBQUUsdUZBRmpCO0FBR0lxQixhQUFXLEVBQUUsQ0FIakI7QUFJSU4sS0FBRyxFQUFFLENBSlQ7QUFLSUMsTUFBSSxFQUFFLENBQ0Y7QUFDSUMsU0FBSyxFQUFFLENBQUMsSUFBRSxDQUFILEVBQUssSUFBRSxDQUFQLEVBQVMsSUFBRSxDQUFYLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUM1QixXQUFLLEVBQUUsd0NBQVI7QUFBa0RFLFVBQUksRUFBQyxNQUF2RDtBQUErREMsV0FBSyxFQUFFLFlBQXRFO0FBQW9GNkMsZUFBUyxFQUFFLElBQS9GO0FBQW9HQyxPQUFDLEVBQUMsQ0FBdEc7QUFBeUdDLGFBQU8sRUFBQztBQUFqSDtBQUhWLEdBREUsRUFNRjtBQUNJeEIsU0FBSyxFQUFFLENBQUMsSUFBRSxDQUFILEVBQUssSUFBRSxDQUFQLEVBQVMsSUFBRSxDQUFYLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUM1QixXQUFLLEVBQUUsd0NBQVI7QUFBa0RFLFVBQUksRUFBQyxNQUF2RDtBQUErREMsV0FBSyxFQUFFLGFBQXRFO0FBQXFGNkMsZUFBUyxFQUFFLElBQWhHO0FBQXFHQyxPQUFDLEVBQUMsQ0FBdkc7QUFBMEdDLGFBQU8sRUFBQztBQUFsSDtBQUhWLEdBTkUsRUFXRjtBQUNJeEIsU0FBSyxFQUFFLENBQUMsSUFBRSxDQUFILEVBQUssSUFBRSxDQUFQLEVBQVMsSUFBRSxDQUFYLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUM1QixXQUFLLEVBQUUsb0RBQVI7QUFBOERFLFVBQUksRUFBQyxNQUFuRTtBQUEyRUMsV0FBSyxFQUFFLFVBQWxGO0FBQThGNkMsZUFBUyxFQUFFLElBQXpHO0FBQThHQyxPQUFDLEVBQUMsQ0FBaEg7QUFBbUhDLGFBQU8sRUFBQztBQUEzSDtBQUhWLEdBWEUsRUFnQkY7QUFDSXhCLFNBQUssRUFBRSxDQUFDLElBQUUsQ0FBSCxFQUFLLElBQUUsQ0FBUCxFQUFTLElBQUUsQ0FBWCxDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRTtBQUFDNUIsV0FBSyxFQUFFLHlDQUFSO0FBQW1ERSxVQUFJLEVBQUMsTUFBeEQ7QUFBZ0VDLFdBQUssRUFBRSxNQUF2RTtBQUErRTZDLGVBQVMsRUFBRSxJQUExRjtBQUErRkMsT0FBQyxFQUFDLENBQWpHO0FBQW9HQyxhQUFPLEVBQUM7QUFBNUc7QUFIVixHQWhCRTtBQUxWLENBUlcsRUFxQ1g7QUFDSS9DLE9BQUssRUFBRSxhQURYO0FBRUlNLGFBQVcsRUFBRSxrRkFGakI7QUFHSXFCLGFBQVcsRUFBRSxDQUhqQjtBQUlJTCxNQUFJLEVBQUUsQ0FDRjtBQUNJQyxTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ3JCLFNBQUcsRUFBRSxzREFBTjtBQUE4REYsZUFBUyxFQUFDLGFBQXhFO0FBQXdGRixXQUFLLEVBQUU7QUFBL0Y7QUFIVixHQURFLEVBTUY7QUFDSXdCLFFBQUksRUFBRSxTQURWO0FBRUlELFNBQUssRUFBRSxDQUFDLElBQUUsQ0FBSCxFQUFNLElBQUUsQ0FBUixDQUZYO0FBR0lFLFFBQUksRUFBRTtBQUFDckIsU0FBRyxFQUFFLCtEQUFOO0FBQXVFRixlQUFTLEVBQUMsYUFBakY7QUFBaUdGLFdBQUssRUFBRTtBQUF4RztBQUhWLEdBTkUsRUFXRjtBQUNJd0IsUUFBSSxFQUFFLFNBRFY7QUFFSUQsU0FBSyxFQUFFLENBQUMsSUFBRSxDQUFILEVBQU0sSUFBRSxDQUFSLENBRlg7QUFHSUUsUUFBSSxFQUFFO0FBQUNyQixTQUFHLEVBQUUsc0RBQU47QUFBOERGLGVBQVMsRUFBQyxhQUF4RTtBQUF3RkYsV0FBSyxFQUFFO0FBQS9GO0FBSFYsR0FYRSxFQWdCRjtBQUNJd0IsUUFBSSxFQUFFLFNBRFY7QUFFSUQsU0FBSyxFQUFFLENBQUMsSUFBRSxDQUFILEVBQU0sSUFBRSxDQUFSLENBRlg7QUFHSUUsUUFBSSxFQUFFO0FBQUNyQixTQUFHLEVBQUUsNENBQU47QUFBb0RGLGVBQVMsRUFBQyxhQUE5RDtBQUE4RUYsV0FBSyxFQUFFO0FBQXJGO0FBSFYsR0FoQkUsRUFxQkY7QUFDSXdCLFFBQUksRUFBRSxTQURWO0FBRUlELFNBQUssRUFBRSxDQUFDLElBQUUsQ0FBSCxFQUFNLElBQUUsQ0FBUixDQUZYO0FBR0lFLFFBQUksRUFBRTtBQUFDckIsU0FBRyxFQUFFLG1EQUFOO0FBQTJERixlQUFTLEVBQUMsYUFBckU7QUFBcUZGLFdBQUssRUFBRTtBQUE1RjtBQUhWLEdBckJFLEVBMEJGO0FBQ0l3QixRQUFJLEVBQUUsU0FEVjtBQUVJRCxTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsQ0FGWDtBQUdJRSxRQUFJLEVBQUU7QUFBQ3JCLFNBQUcsRUFBRSx1REFBTjtBQUErREYsZUFBUyxFQUFDLGFBQXpFO0FBQXlGRixXQUFLLEVBQUU7QUFBaEc7QUFIVixHQTFCRTtBQUpWLENBckNXLEVBMkVYO0FBQ0ltQixJQUFFLEVBQUUsRUFEUjtBQUVJQyxJQUFFLEVBQUUsTUFGUjtBQUdJTSxJQUFFLEVBQUUsV0FIUjtBQUlJQyxhQUFXLEVBQUUsQ0FKakI7QUFLSU4sS0FBRyxFQUFFLENBTFQ7QUFNSUMsTUFBSSxFQUFFLENBQ0Y7QUFDSUgsTUFBRSxFQUFDLENBQUMsQ0FBRCxFQUFHLENBQUgsRUFBSyxDQUFMLEVBQU8sQ0FBUCxDQURQO0FBRUlJLFNBQUssRUFBRSxDQUFDLEtBQUQsRUFBTyxLQUFQLEVBQWEsS0FBYixFQUFvQixJQUFFLENBQXRCLENBRlg7QUFHSUMsUUFBSSxFQUFFLFlBSFY7QUFJSUMsUUFBSSxFQUFFO0FBQ0ZNLFlBQU0sRUFBRSxDQUFDLGdEQUFELENBRE47QUFFRmlCLFFBQUUsRUFBRTtBQUZGO0FBSlYsR0FERSxFQVVGO0FBQ0k3QixNQUFFLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLENBRFA7QUFFSUksU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxNQUFmLEVBQXVCLElBQUUsQ0FBekIsQ0FGWDtBQUdJQyxRQUFJLEVBQUUsU0FIVjtBQUlJQyxRQUFJLEVBQUUsQ0FBQztBQUNIekIsV0FBSyxFQUFFLDZCQURKO0FBRUhnQixjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixDQUZQO0FBR0hYLGVBQVMsRUFBRSxDQUFDLEVBQUQsRUFBSSxFQUFKLEVBQU8sRUFBUCxFQUFVLEVBQVYsQ0FIUjtBQUlIYyxRQUFFLEVBQUMsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsQ0FKQTtBQUtIaUIsVUFBSSxFQUFJLG1FQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMk9BREEsRUFDNE87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUQ1TyxFQUNpUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRGpQLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2TUFGQTtBQUxMLEtBQUQsRUFVTjtBQUNJYSxVQUFJLEVBQUUsQ0FDRiw0QkFERSxFQUVGLDZCQUZFLEVBR0YsNkJBSEUsRUFJRiwyQkFKRSxDQURWO0FBT0lDLGFBQU8sRUFBRSxDQVBiO0FBUUlDLGVBQVMsRUFBRSxNQVJmO0FBU0lyRCxVQUFJLEVBQUUsT0FUVjtBQVVJSSxlQUFTLEVBQUU7QUFWZixLQVZNO0FBSlYsR0FWRTtBQU5WLENBM0VXLEVBeUhYO0FBQ0lGLE9BQUssRUFBRSwwQkFEWDtBQUVJMkIsYUFBVyxFQUFFLENBRmpCO0FBR0lMLE1BQUksRUFBRSxDQUNGO0FBQ0lDLFNBQUssRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFFLENBQVYsRUFBYSxJQUFFLENBQWYsRUFBa0IsSUFBRSxDQUFwQixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRTtBQUFDckIsU0FBRyxFQUFFLDhDQUFOO0FBQXNETCxVQUFJLEVBQUMsTUFBM0Q7QUFBbUVDLFdBQUssRUFBRSxvQ0FBMUU7QUFBZ0hLLGVBQVMsRUFBRTtBQUEzSDtBQUhWLEdBREUsRUFNRjtBQUNJa0IsU0FBSyxFQUFFLENBQUMsS0FBRCxFQUFRLElBQUUsQ0FBVixFQUFhLElBQUUsQ0FBZixFQUFrQixJQUFFLENBQXBCLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUNyQixTQUFHLEVBQUUseURBQU47QUFBaUVMLFVBQUksRUFBQyxNQUF0RTtBQUE4RUMsV0FBSyxFQUFFLGlDQUFyRjtBQUF3SEssZUFBUyxFQUFFO0FBQW5JO0FBSFYsR0FORSxFQVdGO0FBQ0lrQixTQUFLLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBRSxDQUFWLEVBQWEsSUFBRSxDQUFmLEVBQWtCLElBQUUsQ0FBcEIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ3JCLFNBQUcsRUFBRSwyREFBTjtBQUFtRUwsVUFBSSxFQUFDLE1BQXhFO0FBQWdGQyxXQUFLLEVBQUUscUNBQXZGO0FBQThISyxlQUFTLEVBQUU7QUFBekk7QUFIVixHQVhFLEVBZ0JGO0FBQ0lrQixTQUFLLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBRSxDQUFWLEVBQWEsSUFBRSxDQUFmLEVBQWtCLElBQUUsQ0FBcEIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ3JCLFNBQUcsRUFBRSwrQ0FBTjtBQUF1REwsVUFBSSxFQUFDLE1BQTVEO0FBQW9FQyxXQUFLLEVBQUUseUNBQTNFO0FBQXNISyxlQUFTLEVBQUU7QUFBakk7QUFIVixHQWhCRTtBQUhWLENBekhXLENBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVlLGdFQUNYO0FBQ0lMLE9BQUssRUFBRSwrQkFEWDtBQUVJTSxhQUFXLEVBQUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxV0FGakI7QUFVSWUsS0FBRyxFQUFFLEVBVlQ7QUFXSUQsSUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFHLEVBQUgsQ0FYUjtBQVlJRSxNQUFJLEVBQUUsQ0FDTjtBQUNJQyxTQUFLLEVBQUUsTUFEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUUsTUFBQywyREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSFYsR0FETTtBQVpWLENBRFcsRUFxQlg7QUFDSXpCLE9BQUssRUFBRyxvQ0FEWjtBQUdJTSxhQUFXLEVBQUUscU1BSGpCO0FBS0lhLElBQUUsRUFBRSxDQUxSO0FBTUlDLElBQUUsRUFBRSxFQU5SO0FBT0lNLElBQUUsRUFBRSxVQVBSO0FBUUl2QixPQUFLLEVBQUUsVUFSWDtBQVNJd0IsYUFBVyxFQUFFLEVBVGpCO0FBVUlOLEtBQUcsRUFBRSxDQVZUO0FBV0lDLE1BQUksRUFBRSxDQUNOO0FBQ0lDLFNBQUssRUFBRSxDQUFDLElBQUUsQ0FBSCxFQUFNLElBQUUsQ0FBUixFQUFXLElBQUUsQ0FBYixDQURYO0FBRUlDLFFBQUksRUFBRSxTQUZWO0FBR0lDLFFBQUksRUFBRTtBQUFDbEIsV0FBSyxFQUFFLFFBQVI7QUFBaUJGLGVBQVMsRUFBQyxJQUEzQjtBQUFpQ0gsZUFBUyxFQUFDLFNBQTNDO0FBQXNERSxTQUFHLEVBQUMsbURBQTFEO0FBQStHeUIsUUFBRSxFQUFFLENBQW5IO0FBQXNIN0IsV0FBSyxFQUFFO0FBQTdIO0FBSFYsR0FETSxFQU1OO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWtCRixlQUFTLEVBQUMsSUFBNUI7QUFBa0NILGVBQVMsRUFBQyxTQUE1QztBQUF1REUsU0FBRyxFQUFDLGlEQUEzRDtBQUE4R3lCLFFBQUUsRUFBRSxDQUFsSDtBQUFxSDdCLFdBQUssRUFBRTtBQUE1SDtBQUhWLEdBTk0sRUFXTjtBQUNJdUIsU0FBSyxFQUFFLENBQUMsSUFBRSxDQUFILEVBQU0sSUFBRSxDQUFSLEVBQVcsSUFBRSxDQUFiLENBRFg7QUFFSUMsUUFBSSxFQUFFLFNBRlY7QUFHSUMsUUFBSSxFQUFFO0FBQUNsQixXQUFLLEVBQUUsUUFBUjtBQUFpQkYsZUFBUyxFQUFDLElBQTNCO0FBQWlDSCxlQUFTLEVBQUMsU0FBM0M7QUFBc0RFLFNBQUcsRUFBQyxrREFBMUQ7QUFBNkd5QixRQUFFLEVBQUUsQ0FBakg7QUFBb0g3QixXQUFLLEVBQUU7QUFBM0g7QUFIVixHQVhNLEVBZ0JOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWlCRixlQUFTLEVBQUMsSUFBM0I7QUFBaUNILGVBQVMsRUFBQyxTQUEzQztBQUFzREUsU0FBRyxFQUFDLG9EQUExRDtBQUFnSHlCLFFBQUUsRUFBRSxDQUFwSDtBQUF1SDdCLFdBQUssRUFBRTtBQUE5SDtBQUhWLEdBaEJNLEVBcUJOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWlCRixlQUFTLEVBQUMsSUFBM0I7QUFBaUNILGVBQVMsRUFBQyxTQUEzQztBQUFzREUsU0FBRyxFQUFDLDhDQUExRDtBQUEwR3lCLFFBQUUsRUFBRSxDQUE5RztBQUFpSDdCLFdBQUssRUFBRTtBQUF4SDtBQUhWLEdBckJNLEVBMEJOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWtCRixlQUFTLEVBQUMsSUFBNUI7QUFBaUNILGVBQVMsRUFBQyxTQUEzQztBQUFzREUsU0FBRyxFQUFDLCtDQUExRDtBQUEyR3lCLFFBQUUsRUFBRSxDQUEvRztBQUFrSDdCLFdBQUssRUFBRTtBQUF6SDtBQUhWLEdBMUJNLEVBK0JOO0FBQ0l1QixTQUFLLEVBQUUsQ0FBQyxJQUFFLENBQUgsRUFBTSxJQUFFLENBQVIsRUFBVyxJQUFFLENBQWIsQ0FEWDtBQUVJQyxRQUFJLEVBQUUsU0FGVjtBQUdJQyxRQUFJLEVBQUU7QUFBQ2xCLFdBQUssRUFBRSxRQUFSO0FBQWlCRixlQUFTLEVBQUMsSUFBM0I7QUFBZ0NILGVBQVMsRUFBQyxTQUExQztBQUFxREUsU0FBRyxFQUFDLCtDQUF6RDtBQUEwR3lCLFFBQUUsRUFBRSxDQUE5RztBQUFpSDdCLFdBQUssRUFBRTtBQUF4SDtBQUhWLEdBL0JNO0FBWFYsQ0FyQlcsRUFzRWY7QUFDSXNCLE1BQUksRUFBRSxDQUFDO0FBQ0hFLFFBQUksRUFBRSxTQURIO0FBRUhDLFFBQUksRUFBRSxDQUFDO0FBQ0hXLFVBQUksRUFBRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1UQURIO0FBT0hwQixjQUFRLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLElBQVgsQ0FQUDtBQVFIbUIsZUFBUyxFQUFFO0FBUlIsS0FBRDtBQUZILEdBQUQsQ0FEVjtBQWNJRyxJQUFFLEVBQUUsQ0FkUjtBQWVJQyxJQUFFLEVBQUUsQ0FmUjtBQWdCSUMsSUFBRSxFQUFFO0FBaEJSLENBdEVlLEVBd0ZmO0FBQ0lwQixJQUFFLEVBQUUsQ0FEUjtBQUVJRSxNQUFJLEVBQUUsQ0FDRjtBQUNJQyxTQUFLLEVBQUUsQ0FBQyxNQUFELENBRFg7QUFFSU4sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxLQUFQLENBRlI7QUFHSU8sUUFBSSxFQUFFLFVBSFY7QUFJSUMsUUFBSSxFQUFFO0FBQ0ZsQixXQUFLLEVBQUUsTUFETDtBQUVGSyxtQkFBYSxFQUFDLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxNQUFmLEVBQXNCLE1BQXRCLENBRlo7QUFHRkMsY0FBUSxFQUFDLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxNQUFmLENBSFA7QUFJRmQsVUFBSSxFQUFFLE1BSko7QUFLRkUsZ0JBQVUsRUFBRSxPQUxWO0FBTUZKLFdBQUssRUFBRSxzQ0FOTDtBQU9GdUQsVUFBSSxFQUFFLEdBUEo7QUFRRkYsYUFBTyxFQUFFLEVBUlA7QUFTRmxELFdBQUssRUFBRSw2REFUTDtBQVVGTSxpQkFBVyxFQUFFO0FBVlg7QUFKVixHQURFLEVBa0JGO0FBQ0lpQixTQUFLLEVBQUUsQ0FBQyxNQUFELENBRFg7QUFFSU4sTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxLQUFQLENBRlI7QUFHSU8sUUFBSSxFQUFFLFVBSFY7QUFJSUMsUUFBSSxFQUFFO0FBQ0ZsQixXQUFLLEVBQUUsTUFETDtBQUVGSyxtQkFBYSxFQUFDLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxNQUFmLEVBQXNCLE1BQXRCLENBRlo7QUFHRkMsY0FBUSxFQUFDLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxNQUFmLENBSFA7QUFJRmQsVUFBSSxFQUFFLE1BSko7QUFLRkUsZ0JBQVUsRUFBRSxPQUxWO0FBTUZKLFdBQUssRUFBRSxnREFOTDtBQU9GdUQsVUFBSSxFQUFFLEdBUEo7QUFRRkYsYUFBTyxFQUFFLEVBUlA7QUFTRmxELFdBQUssRUFBRSxzQ0FUTDtBQVVGTSxpQkFBVyxFQUFFO0FBVlg7QUFKVixHQWxCRSxFQW1DRjtBQUNJaUIsU0FBSyxFQUFFLENBQUMsTUFBRCxDQURYO0FBRUlOLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sS0FBUCxDQUZSO0FBR0lPLFFBQUksRUFBRSxVQUhWO0FBSUlDLFFBQUksRUFBRTtBQUNGbEIsV0FBSyxFQUFFLE1BREw7QUFFRkssbUJBQWEsRUFBQyxDQUFDLE1BQUQsRUFBUSxNQUFSLEVBQWUsTUFBZixFQUFzQixNQUF0QixDQUZaO0FBR0ZDLGNBQVEsRUFBQyxDQUFDLE1BQUQsRUFBUSxNQUFSLEVBQWUsTUFBZixDQUhQO0FBSUZkLFVBQUksRUFBRSxNQUpKO0FBS0ZFLGdCQUFVLEVBQUUsT0FMVjtBQU1GSixXQUFLLEVBQUUsd0NBTkw7QUFPRnVELFVBQUksRUFBRSxHQVBKO0FBUUZGLGFBQU8sRUFBRSxFQVJQO0FBU0ZsRCxXQUFLLEVBQUUsbUNBVEw7QUFVRk0saUJBQVcsRUFBRTtBQVZYO0FBSlYsR0FuQ0U7QUFGVixDQXhGZSxDQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFNQTtBQUNBOztBQUdBLE1BQU0rQyxjQUFjLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJbEIsSUFBSixLQUFja0IsQ0FBQyxHQUFHLENBQUosR0FBUSxPQUFPQSxDQUFQLEdBQVdsQixJQUFuQixHQUEwQixFQUEvRDs7QUFFQSxTQUFTbUIsbUJBQVQsQ0FBNkI1QyxLQUE3QixFQUFvQztBQUFBOztBQUNoQyxRQUFNLENBQUM2QyxLQUFELEVBQVFDLFFBQVIsSUFBb0JDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQTFCO0FBQ0EsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JILDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQTFCO0FBQ0EsUUFBTSxDQUFDRyxLQUFELEVBQVFDLFFBQVIsSUFBb0JMLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQTFCO0FBQ0EsU0FDSTtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQyxXQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUFNLFlBQVEsRUFBRSxHQUFoQjtBQUFxQixVQUFNLE1BQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyw2QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5RUFBRDtBQUNJLFNBQUssRUFDRDtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZKLGNBRlI7QUFRSSxRQUFJLEVBQUMsc0NBUlQ7QUFTSSxlQUFXLEVBQUUsQ0FDVCwwQkFEUyxFQUVULGlDQUZTLEVBR1QsdUJBSFMsQ0FUakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVJO0FBQUssYUFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLGVBZkosRUFtQkk7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFDSSxTQUFLLEVBQUMsU0FEVjtBQUVJLGdCQUFZLEVBQUUsQ0FGbEI7QUFHSSxTQUFLLEVBQUVILEtBSFg7QUFJSSxPQUFHLEVBQUUsRUFKVDtBQUtJLFlBQVEsRUFBR1EsS0FBRCxJQUFXO0FBQ2pCUCxjQUFRLENBQUNPLEtBQUQsQ0FBUjtBQUNILEtBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNJLE1BQUMsMkRBQUQ7QUFDSSxLQUFDLEVBQUMsTUFETjtBQUVJLGdCQUFZLEVBQUMsS0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBYUksTUFBQyxpRUFBRDtBQUNJLEtBQUMsRUFBQyxNQUROO0FBRUksZ0JBQVksRUFBQyxLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFpQkksTUFBQywyREFBRDtBQUNJLGFBQVMsRUFBQyxRQURkO0FBRUksWUFBUSxFQUFDLElBRmI7QUFHSSxjQUFVLEVBQUMsS0FIZjtBQUlJLFNBQUssRUFBQyxNQUpWO0FBS0ksV0FBTyxFQUFDLEtBTFo7QUFNSSxVQUFNLEVBQUMsTUFOWDtBQU9JLFlBQVEsRUFBRyxHQUFFUixLQUFNLEdBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkosQ0FESixDQW5CSixFQWdESSxNQUFDLDBFQUFEO0FBQ0ksZUFBVyxFQUFDLE1BRGhCO0FBRUksVUFBTSxNQUZWO0FBR0ksZUFBVyxFQUFDLHVCQUhoQjtBQUlJLHNCQUFrQixFQUFHLHlCQUF3QkgsY0FBYyxDQUN2REcsS0FEdUQsRUFFdkQsY0FGdUQsQ0FHekQsRUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaERKLENBREosQ0FESixFQTZESTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQ0ksU0FBSyxFQUNEO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosY0FGUjtBQVFJLFFBQUksRUFBQyxzQ0FSVDtBQVNJLGVBQVcsRUFBRSxDQUNULDBCQURTLEVBRVQsaUNBRlMsRUFHVCx1QkFIUyxDQVRqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZUk7QUFBSyxhQUFTLEVBQUMsNkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBUyxNQUFFLEVBQUMsR0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosZUFmSixFQW1CSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUNJLFNBQUssRUFBQyxTQURWO0FBRUksZ0JBQVksRUFBRSxDQUZsQjtBQUdJLFNBQUssRUFBRUksS0FIWDtBQUlJLE9BQUcsRUFBRSxFQUpUO0FBS0ksWUFBUSxFQUFHSSxLQUFELElBQVc7QUFDakJILGNBQVEsQ0FBQ0csS0FBRCxDQUFSO0FBQ0gsS0FQTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0ksTUFBQywyREFBRDtBQUNJLEtBQUMsRUFBQyxNQUROO0FBRUksZ0JBQVksRUFBQyxLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosRUFhSSxNQUFDLGlFQUFEO0FBQ0ksS0FBQyxFQUFDLE1BRE47QUFFSSxnQkFBWSxFQUFDLEtBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFiSixFQWlCSSxNQUFDLDJEQUFEO0FBQ0ksYUFBUyxFQUFDLFFBRGQ7QUFFSSxZQUFRLEVBQUMsSUFGYjtBQUdJLGNBQVUsRUFBQyxLQUhmO0FBSUksU0FBSyxFQUFDLE1BSlY7QUFLSSxXQUFPLEVBQUMsS0FMWjtBQU1JLFVBQU0sRUFBQyxNQU5YO0FBT0ksWUFBUSxFQUFHLEdBQUVKLEtBQU0sR0FQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWpCSixDQURKLENBbkJKLEVBZ0RJLE1BQUMsMEVBQUQ7QUFDSSxlQUFXLEVBQUMsTUFEaEI7QUFFSSxVQUFNLE1BRlY7QUFHSSxlQUFXLEVBQUMsdUJBSGhCO0FBSUksc0JBQWtCLEVBQUcsNEJBQTJCUCxjQUFjLENBQzFETyxLQUQwRCxFQUUxRCxjQUYwRCxDQUc1RCxFQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoREosQ0FESixDQTdESixFQXlISTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQ0ksU0FBSyxFQUNEO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosZ0JBRlI7QUFRSSxRQUFJLEVBQUMsc0NBUlQ7QUFTSSxlQUFXLEVBQUUsQ0FDVCwwQkFEUyxFQUVULGlDQUZTLEVBR1QsdUJBSFMsQ0FUakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWVJO0FBQUssYUFBUyxFQUFDLDZDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHVEQUFEO0FBQVMsTUFBRSxFQUFDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLGVBZkosRUFtQkk7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFDSSxTQUFLLEVBQUMsU0FEVjtBQUVJLGdCQUFZLEVBQUUsQ0FGbEI7QUFHSSxTQUFLLEVBQUVFLEtBSFg7QUFJSSxPQUFHLEVBQUUsRUFKVDtBQUtJLFlBQVEsRUFBR0UsS0FBRCxJQUFXO0FBQ2pCRCxjQUFRLENBQUNDLEtBQUQsQ0FBUjtBQUNILEtBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNJLE1BQUMsMkRBQUQ7QUFDSSxLQUFDLEVBQUMsTUFETjtBQUVJLGdCQUFZLEVBQUMsS0FGakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRKLEVBYUksTUFBQyxpRUFBRDtBQUNJLEtBQUMsRUFBQyxNQUROO0FBRUksZ0JBQVksRUFBQyxLQUZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBYkosRUFpQkksTUFBQywyREFBRDtBQUNJLGFBQVMsRUFBQyxRQURkO0FBRUksWUFBUSxFQUFDLElBRmI7QUFHSSxjQUFVLEVBQUMsS0FIZjtBQUlJLFNBQUssRUFBQyxNQUpWO0FBS0ksV0FBTyxFQUFDLEtBTFo7QUFNSSxVQUFNLEVBQUMsTUFOWDtBQU9JLFlBQVEsRUFBRyxHQUFFRixLQUFNLEdBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkosQ0FESixDQW5CSixFQWdESSxNQUFDLDBFQUFEO0FBQ0ksZUFBVyxFQUFDLE1BRGhCO0FBRUksVUFBTSxNQUZWO0FBR0ksZUFBVyxFQUFDLHVCQUhoQjtBQUlJLHNCQUFrQixFQUFHLDhCQUE2QlQsY0FBYyxDQUM1RFMsS0FENEQsRUFFNUQsY0FGNEQsQ0FHOUQsRUFQTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaERKLENBREosQ0F6SEosQ0FEQSxDQURKLENBREo7QUE0TEg7O0dBaE1RUCxtQjs7S0FBQUEsbUI7QUFrTU1BLGtGQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvTUE7QUFDQTtBQUtBO0FBQ0E7O0FBRUEsTUFBTUYsY0FBYyxHQUFHLENBQUNDLENBQUQsRUFBSWxCLElBQUosS0FBY2tCLENBQUMsR0FBRyxDQUFKLEdBQVEsT0FBT0EsQ0FBUCxHQUFXLEdBQVgsR0FBaUJsQixJQUF6QixHQUFnQyxFQUFyRTs7QUFFQSxTQUFTNkIsU0FBVCxDQUFtQnRELEtBQW5CLEVBQTBCO0FBQUE7O0FBQ3hCLFFBQU0sQ0FBQ3VELElBQUQsRUFBT0MsT0FBUCxJQUFrQlQsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBeEI7QUFDQSxRQUFNLENBQUNTLElBQUQsRUFBT0MsT0FBUCxJQUFrQlgsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBeEI7O0FBQ0EsUUFBTVcsWUFBWSxHQUFJQyxJQUFELElBQVU7QUFBQ0osV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUFlRSxXQUFPLENBQUNFLElBQUQsQ0FBUDtBQUFlQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsU0FBdEMsR0FBa0QsR0FBckU7QUFBMkUsR0FBekk7O0FBQ0EsUUFBTSxDQUFDWixLQUFELEVBQVFhLFFBQVIsSUFBb0JuQiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUExQjs7QUFDQSxRQUFNbUIsWUFBWSxHQUFHZCxLQUFLLElBQUlhLFFBQVEsQ0FBQ2IsS0FBRCxDQUF0Qzs7QUFDQSxRQUFNLENBQUNlLEtBQUQsRUFBUUMsUUFBUixJQUFvQnRCLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQTFCO0FBQ0EsUUFBTSxDQUFDc0IsRUFBRCxFQUFJQyxLQUFKLElBQWF4Qiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUFuQjtBQUNBLFNBQ007QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHlDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLHdEQUFEO0FBQU0sWUFBUSxFQUFFLEdBQWhCO0FBQXFCLFVBQU0sTUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUVBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFrQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWxDLG9CQUFwQjtBQUFrRixRQUFJLEVBQUMsMkNBQXZGO0FBQW1JLGVBQVcsRUFBRSxDQUFDLDJCQUFELENBQWhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHNEQUFEO0FBQVEsYUFBUyxFQUFDLE1BQWxCO0FBQXlCLGdCQUFZLEVBQUMsU0FBdEM7QUFBZ0QsV0FBTyxFQUFDLFNBQXhEO0FBQWtFLFFBQUksRUFBQyxJQUF2RTtBQUE0RSxXQUFPLEVBQUUsTUFBSTtBQUFDVyxrQkFBWSxDQUFDLG1CQUFELENBQVo7QUFBa0MsS0FBNUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFBb0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFwQyxvQkFBcEI7QUFBb0YsUUFBSSxFQUFDLDJDQUF6RjtBQUFxSSxlQUFXLEVBQUUsQ0FBQywyQkFBRCxDQUFsSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBQyxNQUFsQjtBQUF5QixnQkFBWSxFQUFDLFNBQXRDO0FBQWdELFdBQU8sRUFBQyxTQUF4RDtBQUFrRSxRQUFJLEVBQUMsSUFBdkU7QUFBNEUsV0FBTyxFQUFFLE1BQUk7QUFBQ0Esa0JBQVksQ0FBQyxxQkFBRCxDQUFaO0FBQW9DLEtBQTlIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FERixDQU5GLENBREEsQ0FESixFQWVFO0FBQUssTUFBRSxFQUFDLFlBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBLE1BQUMsd0RBQUQ7QUFBVSxhQUFTLEVBQUMsU0FBcEI7QUFBOEIsTUFBRSxFQUFFLENBQWxDO0FBQXFDLFVBQU0sRUFBRUosSUFBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVDRSxJQUF2QyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsaUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFFRSxNQUFDLHNEQUFEO0FBQVEsU0FBSyxFQUFDLFNBQWQ7QUFBd0IsTUFBRSxFQUFDLE1BQTNCO0FBQWtDLE9BQUcsRUFBRSxFQUF2QztBQUEyQyxnQkFBWSxFQUFFLENBQXpEO0FBQTRELFNBQUssRUFBRUosS0FBbkU7QUFBMEUsWUFBUSxFQUFFYyxZQUFwRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywyREFBRDtBQUFhLEtBQUMsRUFBQyxNQUFmO0FBQXNCLGdCQUFZLEVBQUMsS0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUUsTUFBQyxpRUFBRDtBQUFtQixLQUFDLEVBQUMsTUFBckI7QUFBNEIsZ0JBQVksRUFBQyxLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLDJEQUFEO0FBQ0UsYUFBUyxFQUFDLFdBRFo7QUFFRSxZQUFRLEVBQUMsSUFGWDtBQUdFLGNBQVUsRUFBQyxLQUhiO0FBSUUsU0FBSyxFQUFDLE1BSlI7QUFLRSxXQUFPLEVBQUMsS0FMVjtBQU1FLFVBQU0sRUFBQyxNQU5UO0FBT0UsWUFBUSxFQUFFZCxLQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixDQUZGLENBREYsRUFnQkU7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLEVBRUksTUFBQywyREFBRDtBQUNBLFlBQVEsRUFBR0EsS0FBRCxJQUFXZ0IsUUFBUSxDQUFDaEIsS0FBRCxDQUQ3QjtBQUVBLGdCQUFZLEVBQUUsQ0FGZDtBQUdBLE9BQUcsRUFBRSxDQUhMO0FBSUEsT0FBRyxFQUFFLEVBSkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU1BLE1BQUMsZ0VBQUQ7QUFBa0IsYUFBUyxFQUFDLFVBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOQSxFQU9BLE1BQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FQQSxDQUZKLENBaEJGLEVBK0JFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFFSSxNQUFDLDJEQUFEO0FBQ0EsWUFBUSxFQUFHQSxLQUFELElBQVdrQixLQUFLLENBQUNsQixLQUFELENBRDFCO0FBRUEsZ0JBQVksRUFBRSxDQUZkO0FBR0EsT0FBRyxFQUFFLENBSEw7QUFJQSxPQUFHLEVBQUUsRUFKTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUEsTUFBQyxnRUFBRDtBQUFrQixhQUFTLEVBQUMsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5BLEVBT0EsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQVBBLENBRkosQ0EvQkYsRUE4Q0U7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMEVBQUQ7QUFBYyxlQUFXLEVBQUMsaUJBQTFCO0FBQTRDLHNCQUFrQixFQUFHLEdBQUVJLElBQUssSUFBR2YsY0FBYyxDQUFDVyxLQUFELEVBQU8sS0FBUCxDQUFjLElBQUdYLGNBQWMsQ0FBQzBCLEtBQUQsRUFBTyxPQUFQLENBQWdCLElBQUcxQixjQUFjLENBQUM0QixFQUFELEVBQUksWUFBSixDQUFrQixHQUEzSztBQUErSyxVQUFNLE1BQXJMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQTlDRixDQUZGLENBREosQ0FEQSxDQWZGLENBRE47QUEyRUQ7O0dBbkZRaEIsUzs7S0FBQUEsUztBQXFGTUEsd0VBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBNEJBO0FBQ0E7QUFDQTtBQUVBLE1BQU1rQixJQUFJLEdBQUcsQ0FDWDtBQUNFQyxPQUFLLEVBQUUsQ0FEVDtBQUVFcEYsT0FBSyxFQUFFLGFBRlQ7QUFHRUYsTUFBSSxFQUFFdUYsdURBQVFBO0FBSGhCLENBRFcsRUFNWDtBQUNFRCxPQUFLLEVBQUUsQ0FEVDtBQUVFcEYsT0FBSyxFQUFFLFlBRlQ7QUFHRUYsTUFBSSxFQUFFd0Ysd0RBQVNBO0FBSGpCLENBTlcsRUFXWDtBQUNFRixPQUFLLEVBQUUsQ0FEVDtBQUVFcEYsT0FBSyxFQUFFLHVCQUZUO0FBR0VGLE1BQUksRUFBRXdGLHdEQUFTQTtBQUhqQixDQVhXLEVBZ0JYO0FBQ0VGLE9BQUssRUFBRSxDQURUO0FBRUVwRixPQUFLLEVBQUUsaUJBRlQ7QUFHRUYsTUFBSSxFQUFFd0Ysd0RBQVNBO0FBSGpCLENBaEJXLEVBcUJYO0FBQ0VGLE9BQUssRUFBRSxDQURUO0FBRUVwRixPQUFLLEVBQUUscUJBRlQ7QUFHRUYsTUFBSSxFQUFFeUYseURBQVVBO0FBSGxCLENBckJXLENBQWI7QUE0QkEsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUosT0FBSyxFQUFFLENBRFQ7QUFFRWIsTUFBSSxFQUFFLFVBRlI7QUFHRXpFLE1BQUksRUFBRSx3Q0FIUjtBQUlFMkYsU0FBTyxFQUFFLENBQ1AsT0FETyxFQUVQLGtCQUZPLEVBR1AsU0FITyxFQUlQLHdCQUpPLEVBS1Asa0JBTE8sRUFNUCxpQkFOTyxDQUpYO0FBWUVDLEtBQUcsRUFBRSxDQVpQO0FBYUVDLFNBQU8sRUFBRSxLQWJYO0FBY0VDLFNBQU8sRUFBRSxFQWRYO0FBZUVDLEtBQUcsRUFBRTtBQWZQLENBRFksRUFrQlo7QUFDRVQsT0FBSyxFQUFFLENBRFQ7QUFFRWIsTUFBSSxFQUFFLGNBRlI7QUFHRXpFLE1BQUksRUFBRSw0Q0FIUjtBQUlFMkYsU0FBTyxFQUFFLENBQ1AsT0FETyxFQUVQLGtCQUZPLEVBR1AsU0FITyxFQUlQLHdCQUpPLEVBS1Asa0JBTE8sRUFNUCxpQkFOTyxDQUpYO0FBWUVFLFNBQU8sRUFBRSxLQVpYO0FBYUVELEtBQUcsRUFBRSxDQWJQO0FBY0VFLFNBQU8sRUFBRSxFQWRYO0FBZUVDLEtBQUcsRUFBRTtBQWZQLENBbEJZLEVBbUNaO0FBQ0VULE9BQUssRUFBRSxDQURUO0FBRUViLE1BQUksRUFBRSxVQUZSO0FBR0V6RSxNQUFJLEVBQUUseUNBSFI7QUFJRTJGLFNBQU8sRUFBRSxDQUNQLE9BRE8sRUFFUCxrQkFGTyxFQUdQLFNBSE8sRUFJUCx3QkFKTyxFQUtQLGtCQUxPLEVBTVAsaUJBTk8sQ0FKWDtBQVlFRSxTQUFPLEVBQUUsSUFaWDtBQWFFRCxLQUFHLEVBQUUsQ0FiUDtBQWNFRSxTQUFPLEVBQUUsRUFkWDtBQWVFQyxLQUFHLEVBQUU7QUFmUCxDQW5DWSxFQW9EWjtBQUNFVCxPQUFLLEVBQUUsQ0FEVDtBQUVFYixNQUFJLEVBQUUsWUFGUjtBQUdFekUsTUFBSSxFQUFFLHVDQUhSO0FBSUUyRixTQUFPLEVBQUUsQ0FDUCxPQURPLEVBRVAsa0JBRk8sRUFHUCxVQUhPLEVBSVAsd0JBSk8sRUFLUCxrQkFMTyxFQU1QLGlCQU5PLENBSlg7QUFZRUUsU0FBTyxFQUFFLEtBWlg7QUFhRUQsS0FBRyxFQUFFLENBYlA7QUFjRUUsU0FBTyxFQUFFLEVBZFg7QUFlRUMsS0FBRyxFQUFFO0FBZlAsQ0FwRFksQ0FBZDtBQXVFQSxNQUFNQyxXQUFXLEdBQUdwQyw0Q0FBSyxDQUFDcUMsVUFBTixNQUFpQixDQUFDcEYsS0FBRCxFQUFRcUYsR0FBUixLQUFnQjtBQUNuRCxRQUFNO0FBQUVDLGFBQUY7QUFBYUMsY0FBYjtBQUF5QmxDO0FBQXpCLE1BQTRDckQsS0FBbEQ7QUFBQSxRQUF5Q3dGLElBQXpDLHNHQUFrRHhGLEtBQWxEOztBQUNBLFNBQ0UsTUFBQyxzREFBRDtBQUNFLGFBQVMsRUFBQyxNQURaO0FBRUUsWUFBUSxFQUFFLENBQUMsTUFBRCxFQUFRLE1BQVIsRUFBZSxNQUFmLENBRlo7QUFHRSxPQUFHLEVBQUVxRixHQUhQO0FBSUUsV0FBTyxFQUFFQyxTQUFTLEdBQUcsT0FBSCxHQUFhLFNBSmpDO0FBS0UsZ0JBQVksRUFBRUEsU0FBUyxHQUFHLFNBQUgsR0FBZSxVQUx4QztBQU1FLG9CQUFjQSxTQU5oQjtBQU9FLFFBQUksRUFBQyxPQVBQO0FBUUUsY0FBVSxFQUFFQztBQVJkLEtBU01DLElBVE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBYUQsQ0FmbUIsQ0FBcEI7TUFBTUwsVzs7QUFpQk4sU0FBU00sWUFBVCxDQUFzQnpGLEtBQXRCLEVBQTZCO0FBQUE7O0FBRTNCLFFBQU0wQyxjQUFjLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJbEIsSUFBSixLQUFja0IsQ0FBQyxHQUFHLENBQUosR0FBUSxPQUFPQSxDQUFQLEdBQVcsR0FBWCxHQUFpQmxCLElBQXpCLEdBQWdDLEVBQXJFOztBQUVBLFFBQU0sQ0FBQ1osSUFBRCxFQUFPNkUsT0FBUCxJQUFrQjNDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxFQUFmLENBQXhCLENBSjJCLENBTTNCOztBQUNBLFFBQU0sQ0FBQzJDLFFBQUQsRUFBV2pDLE9BQVgsSUFBc0JYLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxVQUFmLENBQTVCOztBQUNBLFFBQU00QyxVQUFVLEdBQUloQyxJQUFELElBQVVGLE9BQU8sQ0FBQ0UsSUFBRCxDQUFwQzs7QUFFQSxRQUFNO0FBQUVpQyxVQUFGO0FBQVVDLFVBQVY7QUFBa0JDO0FBQWxCLE1BQThCQyxxRUFBYSxFQUFqRDtBQUVBLFFBQU0sQ0FBQ3pDLElBQUQsRUFBT0MsT0FBUCxJQUFrQlQsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBeEI7O0FBQ0EsUUFBTVcsWUFBWSxHQUFHLE1BQU07QUFBQ0gsV0FBTyxDQUFDLElBQUQsQ0FBUDtBQUFlSyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsU0FBdEMsR0FBa0QsR0FBckU7QUFBMkUsR0FBdEg7O0FBRUEsUUFBTSxDQUFDZ0IsT0FBRCxFQUFVZ0IsVUFBVixJQUF3QmxELDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQTlCOztBQUNBLFFBQU1rRCxhQUFhLEdBQUlqQixPQUFELElBQWFnQixVQUFVLENBQUNoQixPQUFELENBQTdDOztBQUVBLFFBQU0sQ0FBQ0MsR0FBRCxFQUFNaUIsTUFBTixJQUFnQnBELDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXRCOztBQUNBLFFBQU1vRCxTQUFTLEdBQUlsQixHQUFELElBQVNpQixNQUFNLENBQUNqQixHQUFELENBQWpDOztBQUVBLFFBQU0sQ0FBQ0gsR0FBRCxFQUFNc0IsTUFBTixJQUFnQnRELDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxDQUFmLENBQXRCO0FBR0EsUUFBTSxDQUFDc0QsV0FBRCxFQUFjQyxjQUFkLElBQWdDeEQsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBdEM7O0FBQ0EsUUFBTXdELGlCQUFpQixHQUFJRixXQUFELElBQ3hCQSxXQUFXLEdBQUcsdUJBQUgsR0FBNkIsRUFEMUM7O0FBR0EsUUFBTSxDQUFDRyxhQUFELEVBQWdCQyxnQkFBaEIsSUFBb0MzRCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUExQzs7QUFDQSxRQUFNMkQsbUJBQW1CLEdBQUlGLGFBQUQsSUFDMUJBLGFBQWEsR0FBRywyQkFBSCxHQUFpQyxFQURoRDs7QUFHQSxRQUFNRyxpQkFBaUIsR0FBRyxNQUFLO0FBQzdCRixvQkFBZ0IsQ0FBQyxLQUFELENBQWhCO0FBQ0FILGtCQUFjLENBQUMsS0FBRCxDQUFkO0FBQ0FiLFdBQU8sQ0FBQyxFQUFELENBQVA7QUFDQVcsVUFBTSxDQUFDLENBQUQsQ0FBTjtBQUNBRixVQUFNLENBQUMsQ0FBRCxDQUFOO0FBQ0ZGLGNBQVUsQ0FBQyxDQUFELENBQVY7QUFDRCxHQVBDOztBQVVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBaUMsTUFBRSxFQUFDLFNBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFDLE1BQVI7QUFBZSxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixNQUFqQixFQUF5QixLQUF6QixDQUF0QjtBQUF3RCxhQUFTLEVBQUMsTUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxXQUFPLE1BQWI7QUFBYyxZQUFRLEVBQUUsR0FBeEI7QUFBNkIsWUFBUSxFQUFFLEtBQXZDO0FBQThDLFVBQU0sTUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR3BCLEtBQUssQ0FBQ2dDLEdBQU4sQ0FBV3BELElBQUQsSUFBVTtBQUNuQixXQUNFO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNnQixLQUFmO0FBQXNCLGVBQVMsRUFBQyxpQ0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUVJLE1BQUMseUVBQUQ7QUFDRSxVQUFJLEVBQUVoQixJQUFJLENBQUN0RSxJQURiO0FBRUUsV0FBSyxFQUFFc0UsSUFBSSxDQUFDRyxJQUZkO0FBR0UsYUFBTyxFQUFFSCxJQUFJLENBQUN1QixPQUhoQjtBQUlFLGlCQUFXLEVBQUV2QixJQUFJLENBQUNxQixPQUpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUUsTUFBQyxzREFBRDtBQUNFLGVBQVMsRUFBQyw0QkFEWjtBQUVFLGFBQU8sRUFBQyxPQUZWO0FBR0UsVUFBSSxFQUFDLElBSFA7QUFJRSxrQkFBWSxFQUFDLFNBSmY7QUFLRSxhQUFPLEVBQUUsTUFBTTtBQUNiYyxrQkFBVSxDQUFDbkMsSUFBSSxDQUFDRyxJQUFOLENBQVY7QUFDQUQsb0JBQVk7QUFDWmlELHlCQUFpQjtBQUNsQixPQVRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsQ0FGSixDQURGO0FBMEJELEdBM0JBLENBREgsQ0FEQSxDQURGLENBREEsRUFvQ0E7QUFBSyxNQUFFLEVBQUMsWUFBUjtBQUFxQixhQUFTLEVBQUMsV0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBVSxNQUFFLEVBQUMsV0FBYjtBQUF5QixhQUFTLEVBQUMsY0FBbkM7QUFBa0QsTUFBRSxFQUFFLENBQXREO0FBQXlELFVBQU0sRUFBRXJELElBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFDa0JvQyxRQURsQixVQURGLEVBSUU7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBSyxhQUFTLEVBQUMsZ0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUVFLE1BQUMsZ0VBQUQ7QUFDRSxTQUFLLEVBQUU5RSxJQURUO0FBRUUsWUFBUSxFQUFHd0MsS0FBRCxJQUFXcUMsT0FBTyxDQUFDckMsS0FBRCxDQUY5QjtBQUdFLE1BQUUsRUFBRSxDQUhOO0FBSUUsWUFBUSxNQUpWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNRSxNQUFDLFdBQUQ7QUFBYSxTQUFLLEVBQUMsZ0JBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsRUFTRSxNQUFDLFdBQUQ7QUFBYSxTQUFLLEVBQUMsbUJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBVEYsQ0FGRixDQUZKLEVBbUJFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFFRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxNQUFFLEVBQUMsTUFGTDtBQUdFLGdCQUFZLEVBQUUsQ0FIaEI7QUFJRSxPQUFHLEVBQUUsQ0FKUDtBQUtFLE9BQUcsRUFBRSxFQUxQO0FBTUUsU0FBSyxFQUFFNEIsT0FOVDtBQU9FLFlBQVEsRUFBRWlCLGFBUFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVNFLE1BQUMsMkRBQUQ7QUFBYSxLQUFDLEVBQUMsTUFBZjtBQUFzQixnQkFBWSxFQUFDLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFURixFQVVFLE1BQUMsaUVBQUQ7QUFBbUIsS0FBQyxFQUFDLE1BQXJCO0FBQTRCLGdCQUFZLEVBQUMsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZGLEVBV0UsTUFBQywyREFBRDtBQUNFLGFBQVMsRUFBQyxXQURaO0FBRUUsWUFBUSxFQUFDLElBRlg7QUFHRSxjQUFVLEVBQUMsS0FIYjtBQUlFLFNBQUssRUFBQyxNQUpSO0FBS0UsV0FBTyxFQUFDLEtBTFY7QUFNRSxVQUFNLEVBQUMsTUFOVDtBQU9FLFlBQVEsRUFBRSxLQUFLakIsT0FBTyxHQUFHLENBUDNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYRixDQUZGLENBbkJGLEVBMkNFO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBREYsRUFFRSxNQUFDLHNEQUFEO0FBQ0UsU0FBSyxFQUFDLFNBRFI7QUFFRSxNQUFFLEVBQUMsTUFGTDtBQUdFLGdCQUFZLEVBQUUsQ0FIaEI7QUFJRSxPQUFHLEVBQUMsSUFKTjtBQUtFLFNBQUssRUFBRUMsR0FMVDtBQU1FLFlBQVEsRUFBRWtCLFNBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQVFFLE1BQUMsMkRBQUQ7QUFBYSxLQUFDLEVBQUMsTUFBZjtBQUFzQixnQkFBWSxFQUFDLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQVNFLE1BQUMsaUVBQUQ7QUFBbUIsS0FBQyxFQUFDLE1BQXJCO0FBQTRCLGdCQUFZLEVBQUMsS0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVRGLEVBVUUsTUFBQywyREFBRDtBQUNFLGFBQVMsRUFBQyxXQURaO0FBRUUsWUFBUSxFQUFDLElBRlg7QUFHRSxjQUFVLEVBQUMsS0FIYjtBQUlFLFNBQUssRUFBQyxNQUpSO0FBS0UsV0FBTyxFQUFDLEtBTFY7QUFNRSxVQUFNLEVBQUMsTUFOVDtBQU9FLFlBQVEsRUFBRWxCLEdBQUcsR0FBQyxDQVBoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVkYsQ0FGRixDQTNDRixFQW9FRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREYsRUFFRSxNQUFDLDJEQUFEO0FBQ0UsWUFBUSxFQUFDLE9BRFg7QUFFRSxPQUFHLEVBQUUsQ0FGUDtBQUdFLE9BQUcsRUFBRSxFQUhQO0FBSUUsU0FBSyxFQUFFSCxHQUpUO0FBS0UsWUFBUSxFQUFHMUIsS0FBRCxJQUFTO0FBQUNBLFdBQUssSUFBRSxFQUFQLEdBQVVnRCxNQUFNLENBQUNoRCxLQUFELENBQWhCLEdBQXdCZ0QsTUFBTSxDQUFDLEVBQUQsQ0FBOUI7QUFBbUMsS0FMekQ7QUFNRSxRQUFJLEVBQUV0QixHQUFHLEdBQUMsQ0FBSixHQUFNLENBQU4sR0FBUSxDQU5oQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBUUUsTUFBQyxnRUFBRDtBQUFrQixhQUFTLEVBQUMsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBU0UsTUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQVRGLENBRkYsQ0FwRUYsRUFzRkU7QUFBSyxhQUFTLEVBQUMsNkVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMEVBQUQ7QUFDQSxlQUFXLEVBQUMsdUJBRFo7QUFFRSxzQkFBa0IsRUFBRyxHQUFFWSxRQUFTLElBQUc5RSxJQUFLLElBQUc2QixjQUFjLENBQ3ZEdUMsT0FBTyxHQUFHLENBRDZDLEVBRXZELHVCQUZ1RCxDQUd2RCxJQUFHdkMsY0FBYyxDQUFDd0MsR0FBRyxHQUFDLENBQUwsRUFBUSxXQUFSLENBQXFCOztrQkFFdEN4QyxjQUFjLENBQ2RxQyxHQURjLEVBRWQsa0JBRmMsQ0FHZCxFQVZKO0FBV0UsVUFBTSxNQVhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQXRGRixDQUpGLENBREYsQ0FERixDQXBDQSxDQURGO0FBc0pEOztHQWhNUVUsWTtVQVU2Qk8sNkQ7OztNQVY3QlAsWTtBQWtNTUEsMkVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlZBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTcUIsWUFBVCxDQUFzQjlHLEtBQXRCLEVBQTZCO0FBQzNCLFNBQ007QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUUsR0FBaEI7QUFBcUIsVUFBTSxNQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsK0NBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUVBQUQ7QUFBYSxTQUFLLEVBQUU7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUFrRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQWxELE9BQXdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXhELE1BQXBCO0FBQWdILFFBQUksRUFBQyx5Q0FBckg7QUFBK0osZUFBVyxFQUFFLENBQUMsYUFBRCxFQUFnQixpQkFBaEIsRUFBbUMsbUJBQW5DLEVBQXdELGdCQUF4RCxDQUE1SztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwRUFBRDtBQUFjLGVBQVcsRUFBQyxNQUExQjtBQUFpQyxVQUFNLE1BQXZDO0FBQXdDLGVBQVcsRUFBQyxvQkFBcEQ7QUFBeUUsc0JBQWtCLEVBQUMscUJBQTVGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsRUFNRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQWEsU0FBSyxFQUFFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBbUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFuRCxPQUF5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUF6RCxNQUFwQjtBQUFpSCxRQUFJLEVBQUMseUNBQXRIO0FBQWdLLGVBQVcsRUFBRSxDQUFDLGlCQUFELEVBQW9CLGlCQUFwQixFQUF1QyxtQkFBdkMsRUFBNEQsZ0JBQTVELENBQTdLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDBFQUFEO0FBQWMsZUFBVyxFQUFDLE1BQTFCO0FBQWlDLFVBQU0sTUFBdkM7QUFBd0MsZUFBVyxFQUFDLG9CQUFwRDtBQUF5RSxzQkFBa0IsRUFBQyxzQkFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0FORixDQURGLENBREYsQ0FETjtBQWtCRDs7S0FuQlE4RyxZO0FBcUJNQSwyRUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUNBO0FBT0E7QUFDQTs7QUFHQSxTQUFTQyxZQUFULENBQXNCL0csS0FBdEIsRUFBNkI7QUFDekIsUUFBTWdILFFBQVEsR0FBRyxDQUFDLHlCQUFELEVBQTRCLHVCQUE1QixDQUFqQjtBQUNBLFNBQ1k7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUMsV0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLDRCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQU0sU0FBSyxFQUFDLFFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMscUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixFQUtJLE1BQUMsbURBQUQ7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxKLENBREosRUFXSSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQVUsYUFBUyxFQUFDLE1BQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHdEQUFEO0FBQ0ksWUFBUSxFQUFFLEdBRGQ7QUFFSSxZQUFRLEVBQUUsS0FGZDtBQUdJLFVBQU0sTUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFBSyxhQUFTLEVBQUMsdUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUVBQUQ7QUFDSSxlQUFXLEVBQUVBLFFBRGpCO0FBRUksUUFBSSxFQUFDLHNDQUZUO0FBR0ksU0FBSyxFQUFDLFFBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBFQUFEO0FBQ0ksVUFBTSxNQURWO0FBRUksZUFBVyxFQUFDLHFCQUZoQjtBQUdJLHNCQUFrQixFQUFDLGtCQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixDQURKLENBREosRUFnQkk7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx5RUFBRDtBQUNJLGVBQVcsRUFBRUEsUUFEakI7QUFFSSxRQUFJLEVBQUMsc0NBRlQ7QUFHSSxTQUFLLEVBQUMsU0FIVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0k7QUFBSyxhQUFTLEVBQUMsK0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsMEVBQUQ7QUFDSSxVQUFNLE1BRFY7QUFFSSxlQUFXLEVBQUMscUJBRmhCO0FBR0ksc0JBQWtCLEVBQUMsbUJBSHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQUxKLENBREosQ0FoQkosQ0FMSixDQURKLENBREosRUEwQ0ksTUFBQyx3REFBRDtBQUFVLGFBQVMsRUFBQyxNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx3REFBRDtBQUNJLFlBQVEsRUFBRSxHQURkO0FBRUksWUFBUSxFQUFFLEtBRmQ7QUFHSSxVQUFNLE1BSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUssYUFBUyxFQUFDLHVDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHlFQUFEO0FBQ0ksZUFBVyxFQUFFQSxRQURqQjtBQUVJLFFBQUksRUFBQyxzQ0FGVDtBQUdJLFNBQUssRUFBQyxRQUhWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLSTtBQUFLLGFBQVMsRUFBQywrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwRUFBRDtBQUNJLFVBQU0sTUFEVjtBQUVJLGVBQVcsRUFBQyxxQkFGaEI7QUFHSSxzQkFBa0IsRUFBQyxpQkFIdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBTEosQ0FESixDQURKLEVBZ0JJO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMseUVBQUQ7QUFDSSxlQUFXLEVBQUVBLFFBRGpCO0FBRUksUUFBSSxFQUFDLHNDQUZUO0FBR0ksU0FBSyxFQUFDLFNBSFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtJO0FBQUssYUFBUyxFQUFDLCtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLDBFQUFEO0FBQ0ksVUFBTSxNQURWO0FBRUksZUFBVyxFQUFDLHFCQUZoQjtBQUdJLHNCQUFrQixFQUFDLGtCQUh2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FMSixDQURKLENBaEJKLENBTEosQ0FESixDQTFDSixDQVhKLENBREosRUFnR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWhHSixDQURKLENBREosQ0FEWjtBQXdHSDs7S0ExR1FELFk7QUE0R01BLDJFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxzb2x1dGlvbnNcXFtuYW1lXS5qcy5kNmI0NmI3ODg0YjM1MzBkYTIyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgR3JpZCwgSWNvbiwgSW1hZ2UsIEhlYWRpbmcsIFRleHQsIEJveCB9IGZyb20gJ0BjaGFrcmEtdWkvY29yZSc7XHJcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJ1xyXG5pbXBvcnQgU1ZHIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc3ZnL3N2Zyc7XHJcblxyXG5mdW5jdGlvbiBGZWF0dXJlMih7IGltYWdlLCBpY29uLCBzaXplID0gXCI0OHB4XCIsIHRpdGxlLCBpbWFnZVdpZHRoPVwiOTZweFwiLCBpY29uQ29sb3IgPSBcImRhcmsuNTAwXCIsIGNvbG9yID0gXCJkYXJrLjUwMFwiLCBzdmcsIHRpdGxlU2l6ZSA9IFwibGdcIiwgZGVzY3JpcHRpb24sIGFsaWduID0gXCJjZW50ZXJcIiwgdGV4dE9wYWNpdHksIHRpdGxlRm9udD1cIk5leGEgQm9sZFwiLCB0aXRsZUNvbG9yLCAuLi5wcm9wcyB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxHcmlkIGFsaWduPXthbGlnbn0gdGVtcGxhdGVDb2x1bW5zPXtbYCR7aW1hZ2VXaWR0aH0gYXV0b2BdfSB7Li4ucHJvcHN9PlxyXG4gICAgICAgICAgICB7c3ZnICYmIDxTVkcgc3JjPXtzdmd9IGNvbG9yPXtpY29uQ29sb3J9IHNpemU9e3NpemV9PjwvU1ZHPn1cclxuICAgICAgICAgICAge2ltYWdlICYmIDxJbWFnZSBzcmM9e2ltYWdlfSBvYmplY3RGaXQ9XCJjb3ZlclwiIHNpemU9e3NpemV9PjwvSW1hZ2U+fVxyXG4gICAgICAgICAgICB7aWNvbiAmJiA8Qm94IGFzPXtpY29ufSBzaXplPXtzaXplfT48L0JveD59XHJcbiAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBmb250RmFtaWx5PXt0aXRsZUZvbnR9IGZvbnRTaXplPXtwcm9wcy50aXRsZUZvbnRTaXplfSBzaXplPXt0aXRsZVNpemV9IHRleHRBbGlnbj17YWxpZ259Pnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT17cHJvcHMudGV4dFNpemV9IG9wYWNpdHk9e3RleHRPcGFjaXR5fSBtdD17Mn0gdGV4dEFsaWduPVwianVzdGlmeVwiIHN0eWxlPXt7IHRleHRBbGlnbkxhc3Q6IGFsaWduIH19PntkZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZTI7IiwiaW1wb3J0IENsb3VkRXhjaGFuZ2VQcmljaW5nIGZyb20gXCIuLi8uLi9wcmljaW5nL0Nsb3VkRXhjaGFuZ2VQcmljaW5nXCI7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJFeHByZXNzIFJvdXRlcyB0byBPZmZpY2UgMzY1LCBBV1MsIEF6dXJlIGFuZCBtYW55IG1vcmVcIixcclxuICAgICAgICB0aXRsZVN0eWxlOntmb250U2l6ZTpbXCIzeGxcIixcIjR4bFwiXSxweDpcIjEwcHhcIn0sXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2UgZW5zdXJlIHJlbGlhYmlsaXR5LCBpbnRlZ3JpdHksIHNlY3VyaXR5IGFzIHdlbGwgYXMgc2NhbGFiaWxpdHkgZm9yIG91ciBjbG91ZCBleGNoYW5nZSBjb25uZWN0aXZpdHkgc29sdXRpb25zLiBUaGUgdHJhZmZpYyBpcyBub3Qgc2VudCBvdmVyIHRoZSBpbnRlcm5ldCBvbmx5LCByYXRoZXIgdGhlIGV4Y2hhbmdlIHByb3ZpZGVyIGNvbm5lY3RzIHRoZSBleGNoYW5nZeKAmXMgbmV0d29yayBkaXJlY3RseSB0byB0aGUgY2xvdWQgcHJvdmlkZXLigJlzIG5ldHdvcmsuIFdlIGdpdmUgeW91IHRoZSBwb3dlciB0byBlYXNpbHkgZGVwbG95LCBlZmZpY2llbnRseSBtb25pdG9yLCBhbmQgdHJhbnNwYXJlbnRseSBzY2FsZSB0aGUgYXBwbGljYXRpb25zIHRoYXQgeW91ciBidXNpbmVzcyByZXF1aXJlcyB0byBydW4gYW5kIHRvIGludGVyYWN0IHdpdGggY3VzdG9tZXJzIGFuZCBwYXJ0bmVycyB3aGlsZSBhbHNvIG1pdGlnYXRpbmcgdGhlIHJpc2sgb2Ygc2VjdXJpdHkgYnJlYWNoZXMuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25TdHlsZToge1xyXG4gICAgICAgICAgICBweDogWzQsNl0sXHJcbiAgICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiT3VyIFByaWNpbmcgUGxhbnNcIixcclxuICAgICAgICBteTogMCxcclxuICAgICAgICBweTogMTYsXHJcbiAgICAgICAgZ2FwOiAwLFxyXG4gICAgICAgIGJvZHk6IFt7XHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgdHlwZTogXCJwcmljaW5nXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IDxDbG91ZEV4Y2hhbmdlUHJpY2luZyAvPlxyXG4gICAgICAgIH1dLFxyXG4gICAgICAgIGJnOiAnbGlnaHQuNDAwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV2h5IEJHIFVuaWZpZWQgU29sdXRpb25zP1wiLFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiA4LFxyXG4gICAgICAgIHB5OiAxNixcclxuICAgICAgICBib2R5OiBbe1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwiYWNjb3JkaW9uXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlbGlhYmxlIGFuZCBTZWN1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb21wbGV0ZSBzZWN1cml0eSBvbiBvdXIgZW5kLCB3aGlsZSBjb25uZWN0aW5nIHRvIHRoZXNlIGNsb3VkIHBsYXRmb3Jtcy4gSW1wcm92ZSB0aGUgZXhwZXJpZW5jZSBvZiB1c2VycyB0aHJvdWdob3V0IHRoZSBleHRlbmRlZCBlbnRlcnByaXNlIHByb3ZpZGluZyBzaWduaWZpY2FudCBiZW5lZml0cyBhbmQgcmVsaWFiaWxpdHkuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvSWxsdXN0cmF0aW9ucy9SZWxpYWJsZUFuZFNlY3VyZV9DbG91ZEV4Y2hhbmdlQ29ubmVjdGl2aXR5LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNjYWxhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVHJhZmZpYyBpbmNyZWFzZWQgb3IgZGVjcmVhc2VkIGlzIGhhbmRsZWQgd2l0aCBubyBkaWZmaWN1bHR5IGF0IGFsbC4gQXZvaWRpbmcgdmVuZG9yIGxvY2staW4gYW5kIG1lZXRpbmcgZGF0YS1zb3ZlcmVpZ250eSByZXF1aXJlbWVudHMuIEdlby1yZWR1bmRhbnQgZm9yIGltcHJvdmVkIHBlcmZvcm1hbmNlLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvc2NhbGFiaWx0eS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnRlZ3JhdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNpbXBsaWZpZWQgdXNhZ2UgYW5kIGludGVncmF0aW9uIG9mIG5ldyB0ZWNobm9sb2d5IHNlcnZpY2VzLiBPbi1kZW1hbmQgY29tbXVuaWNhdGlvbiBhbmQgY29ubmVjdGl2aXR5LiBNdWx0aS1jbG91ZCBvcGVyYXRpb25zIHdpdGggYSBjb21wbGV4IHN0cnVjdHVyZSBoYW5kbGVkIGVhc2lseS5cIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL3NpcC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICB9XHJcbl0iLCJpbXBvcnQgRGJhYVNQcmljaW5nIGZyb20gXCIuLi8uLi9wcmljaW5nL0RiYWFzUHJpY2luZ1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgbXQ6MCxcclxuICAgICAgICBweTogMCxcclxuICAgICAgICBjb250YWluZXJXaWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcInByaWNpbmdcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IDxEYmFhU1ByaWNpbmc+PC9EYmFhU1ByaWNpbmc+XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCJdLFxyXG4gICAgICAgICAgICAgICAgbXQ6IDgsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlR3JvdXBcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IFtcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2JyYW5kcy9tb25nb2RiLnN2Z1wiLCBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2JyYW5kcy9NeVNRTC1Mb2dvLnBuZ1wiLCBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2JyYW5kcy9henVyZV9zcWxfc2VydmVyX3Bvc3RlZC5zdmdcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgcHg6IDMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjgwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY29udGFpblwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgZ2FwOiAxMCxcclxuICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlR3JvdXBcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZXM6IFtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExODEzNTQvcGV4ZWxzLXBob3RvLTExODEzNTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MFwiXSxcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImp1c3RpZnlcIixcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogW1wibWRcIixcIm1kXCIsXCJtZFwiLFwibGdcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTWFuYWdlZCBkYXRhYmFzZXMgZm9yIHlvdXIgQnVzaW5lc3NlcyAtXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBbMjgsMjgsMjgsMzJdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IDxzcGFuPkRhdGFiYXNlLWFzLWEtU2VydmljZSAoREJhYVMpIHJlZmVycyB0byBzb2Z0d2FyZSB0aGF0IGVuYWJsZXMgdXNlcnMgdG8gc2V0IHVwLCBvcGVyYXRlIGFuZCBzY2FsZSBkYXRhYmFzZXMgdXNpbmcgYSBjb21tb24gc2V0IG9mIGFic3RyYWN0aW9ucyAocHJpbWl0aXZlcyksIHdpdGhvdXQgaGF2aW5nIHRvIGVpdGhlciBrbm93IG9yIGNhcmUgYWJvdXQgdGhlIGV4YWN0IGltcGxlbWVudGF0aW9ucyBvZiB0aG9zZSBhYnN0cmFjdGlvbnMgZm9yIHRoZSBzcGVjaWZpYyBkYXRhYmFzZS4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfV1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQkcgVW5pZmllZCBTb2x1dGlvbnMgcHJvdmlkaW5nIERhdGFiYXNlcyBmb3IgeW91ciBFbnRlcnByaXNlIE5lZWRzIDotXCIsXHJcbiAgICAgICAgdGl0bGVTdHlsZToge1xyXG4gICAgICAgICAgICBtdDogOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlwiQkcgVW5pZmllZCBTb2x1dGlvbnMgUmVtb3RlIERCQSBzZXJ2aWNlIHdpbGwgbWFuYWdlIHlvdXIgZGF0YWJhc2UgaW5mcmFzdHJ1Y3R1cmUsIG5vIG1hdHRlciBob3cgYmlnIG9yIHNtYWxsIGl0IG1heSBiZS4gWW914oCZbGwgYmUgYWJsZSB0byBmb2N1cyBtb3JlIG9uIHlvdXIgYnVzaW5lc3Mgd2hpbGUgb3VyIGV4cGVydHMgbWFuYWdlIHlvdXIgZGF0YWJhc2UgcGxhdGZvcm0gMjQgeCA3LlwiLFxyXG4gICAgICAgIG15OiAwLFxyXG4gICAgICAgIHB5OiAxNixcclxuICAgICAgICBiZzogXCJsaWdodC40MDBcIixcclxuICAgICAgICBjb2xvcjogXCJkYXJrLjUwMFwiLFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiA4LFxyXG4gICAgICAgIGdhcDogOCxcclxuICAgICAgICBkZXNjcmlwdGlvblN0eWxlOntcclxuICAgICAgICAgICAgZm9udFNpemU6W1wibGdcIixcImxnXCIsXCJ4bFwiXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogWzEgLyAyLCAxIC8gMywgMSAvIDRdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTogXCJtZFwiLCBpY29uQ29sb3I6IFwicmVkLjUwMFwiLCBzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9kZXZpY2VzL2hlYWRwaG9uZXMuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJFeHBlcnQgQ29uc3VsdGF0aW9uXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFsxIC8gMiwgMSAvIDMsIDEgLyA0XSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhbGlnbjogXCJjZW50ZXJcIiwgdGl0bGVTaXplOiBcIm1kXCIsIGljb25Db2xvcjogXCJyZWQuNTAwXCIsIHN2ZzogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2RldmljZXMvZGlzcGxheS0xLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiRGFpbHkgTW9uaXRvcmluZyBBc3N1cmVkXCIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogWzEgLyAyLCAxIC8gMywgMSAvIDRdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGFsaWduOiBcImNlbnRlclwiLCB0aXRsZVNpemU6IFwibWRcIiwgaWNvbkNvbG9yOiBcInJlZC41MDBcIiwgc3ZnOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvZmlsZXMvZG93bmxvYWRlZC1maWxlLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiQmFja3VwIGFuZCBJbnN0YWxsXCIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogWzEgLyAyLCAxIC8gMywgMSAvIDRdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTogXCJtZFwiLCBpY29uQ29sb3I6IFwicmVkLjUwMFwiLCBzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9kZXZpY2VzL3NlcnZlci5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIlNlcnZlciBQYXRjaGluZ1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbMSAvIDIsIDEgLyAzLCAxIC8gNF0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTogXCJtZFwiLCBpY29uQ29sb3I6IFwicmVkLjUwMFwiLCBzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS90b29scy90b29scy5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIlBlcmZvcm1hbmNlIFR1bmluZ1wiIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFsxIC8gMiwgMSAvIDMsIDEgLyA0XSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogeyBhbGlnbjogXCJjZW50ZXJcIiwgdGl0bGVTaXplOiBcIm1kXCIsIGljb25Db2xvcjogXCJyZWQuNTAwXCIsIHN2ZzogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2NvZGUvc2hpZnQuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJVcGdyYWRlIGFuZCBNaWdyYXRpb25cIiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbMSAvIDIsIDEgLyAzLCAxIC8gNF0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHsgYWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTogXCJtZFwiLCBpY29uQ29sb3I6IFwicmVkLjUwMFwiLCBzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9maWxlcy9kb3dubG9hZHMtZm9sZGVyLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiU2VydmVyIEluc3RhbGxhdGlvblwiIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgcHk6IFs4LDEyXSxcclxuICAgICAgICBkZXNjcmlwdGlvbjpcIldlIG9mZmVyIDI0IHggNyBtYW5hZ2VkIGRhdGFiYXNlIHNlcnZpY2VzLiBXZeKAmWxsIG1vbml0b3IgZGF0YWJhc2UgaW5mcmFzdHJ1Y3R1cmUsIGhhbmRsZSBpbmNpZGVudHMsIHJlc3BvbnNlIHRvIGV2ZW50cy9hbGFybXMsIGZvbGxvdyBjaGFuZ2UgbWFuYWdlbWVudCBwcm9jZXNzZXMsIGltcHJvdmUgb3ZlcmFsbCBwZXJmb3JtYW5jZSBhbmQgcmVkdWNlIHZ1bG5lcmFiaWxpdGllcy5cIixcclxuICAgICAgICBkZXNjcmlwdGlvblN0eWxlOntcclxuICAgICAgICAgICAgZm9udFNpemU6W1wibGdcIixcImxnXCIsXCJ4bFwiXSxcclxuICAgICAgICAgICAgb3BhY2l0eTowLjcsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjpcImxlZnRcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXSIsImV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBnYXA6IDEwLFxyXG4gICAgICAgIHB5OiBbOCwxNl0sXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6W1wiMTAwJVwiLCBcIjEwMCVcIiwgMS8yXSxcclxuICAgICAgICAgICAgcHk6WzIsNiw2LDYsMl0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiaW1hZ2VHcm91cFwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZXM6IFtcImh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzExODEzNTQvcGV4ZWxzLXBob3RvLTExODEzNTQuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NzUwJnc9MTI2MFwiXSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnOTAlJyxcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIzMDBweFwiLFxyXG4gICAgICAgICAgICAgICAgb2JqZWN0Rml0OiBcImNvdmVyXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjEwMCVcIiwgMS8yXSxcclxuICAgICAgICAgICAgdHlwZTogXCJjb250ZW50XCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwianVzdGlmeVwiLFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFtcIm1kXCIsXCJtZFwiLFwibWRcIixcImxnXCJdLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTG9hZCBCYWxhbmNpbmcgU29sdXRpb25zIGZvciB5b3VyIEFwcGxpY2F0aW9uIFNlcnZlcnNcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogWzI4LDI4LDI4LDMyXSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IDxzcGFuPkxvYWQgYmFsYW5jaW5nIGlzIHRoZSBtb3N0IHNjYWxhYmxlIFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kb2xvZ3kgZm9yIGhhbmRsaW5nIHRoZSBtdWx0aXR1ZGUgb2YgcmVxdWVzdHNcclxuICAgICAgICAgICAgICAgICBmcm9tIG1vZGVybiBtdWx0aS1hcHBsaWNhdGlvbiwgbXVsdGktZGV2aWNlIHdvcmtmbG93cy5cclxuICAgICAgICAgICAgICAgICAgV2hlbiB0cmFmZmljIGlzIHJ1bm5pbmcgYXQgbm9ybWFsIGxldmVscywgZ2xvYmFsIFxyXG4gICAgICAgICAgICAgICAgICAoZ2VvZ3JhcGhpYykgbG9hZCBiYWxhbmNlcnMgZGlyZWN0IHRyYWZmaWMgdG8gXHJcbiAgICAgICAgICAgICAgICAgIGRlZGljYXRlZCBvcHRpbWl6ZWQgYXBwbGljYXRpb24gc2VydmVycy5SYXBpZGx5IFxyXG4gICAgICAgICAgICAgICAgICByZWRpcmVjdCB0cmFmZmljIGZyb20gYSBkYXRhIGNlbnRyZSBzdWZmZXJpbmcgZnJvbSBcclxuICAgICAgICAgICAgICAgICAgYW4gb3V0YWdlIHRvIGFuIGF2YWlsYWJsZSBzZXJ2ZXIuIDwvc3Bhbj5cclxuICAgICAgICAgICAgfV1cclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZSA6IFwiTWFuYWdlIHlvdXIgVHJhZmZpYyB3aXRoIE91ciBMb2FkIEJhbGFuY2Vyc1wiLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkJHIFVuaWZpZWQgU29sdXRpb25zIHByb3ZpZGUgRjUgdG9wb2xvZ3kgZm9yIHlvdXIgTG9hZCBCYWxhbmNpbmcgbmVlZHMsIGluIG9yZGVyIHRvIG1hbmFnZSB0cmFmZmljIGFzc2VydGVkIG9uIHlvdXIgc2VydmVycyBhbmQgYXBwbGljYXRpb25zLiBcIixcclxuXHJcbiAgICAgICAgbXk6IDAsXHJcbiAgICAgICAgcHk6IDIwLFxyXG4gICAgICAgIGJnOiBcImdyYXkuMTAwXCIsXHJcbiAgICAgICAgY29sb3I6IFwiZGFyay41MDBcIixcclxuICAgICAgICByb3dEaXN0YW5jZTogMTIsXHJcbiAgICAgICAgZ2FwOiA4LFxyXG4gICAgICAgIGJvZHk6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBbMS8yLCAxLzMsIDEvNF0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7YWxpZ246IFwiY2VudGVyXCIsdGl0bGVTaXplOlwibWRcIiwgaWNvbkNvbG9yOlwicmVkLjUwMFwiLCBzdmc6XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L3Nob3BwaW5nL2NoYXJ0LWxpbmUtMS5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIkhpZ2ggQXZhaWxhYmlsaXR5XCJ9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBbMS8yLCAxLzMsIDEvNF0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7YWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTpcIm1kXCIsIGljb25Db2xvcjpcInJlZC41MDBcIiwgc3ZnOlwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9kZXNpZ24vbGluZS5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIkZsZXhpYmlsaXR5IEFzc3VyZWRcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFsxLzIsIDEvMywgMS80XSxcclxuICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHthbGlnbjogXCJjZW50ZXJcIix0aXRsZVNpemU6XCJtZFwiLCBpY29uQ29sb3I6XCJyZWQuNTAwXCIsIHN2ZzpcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvY29kZS9naXQtNC5zdmdcIixtdDogNCwgdGl0bGU6IFwiTXVsdGlwbGUgRmVhdHVyZXNcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFsxLzIsIDEvMywgMS80XSxcclxuICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHthbGlnbjogXCJjZW50ZXJcIix0aXRsZVNpemU6XCJtZFwiLCBpY29uQ29sb3I6XCJyZWQuNTAwXCIsIHN2ZzpcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvZGV2aWNlcy9oZWFkcGhvbmVzLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiUGVyc29uYWxpemVkIFN1cHBvcnRcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFsxLzIsIDEvMywgMS80XSxcclxuICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHthbGlnbjogXCJjZW50ZXJcIix0aXRsZVNpemU6XCJtZFwiLCBpY29uQ29sb3I6XCJyZWQuNTAwXCIsIHN2ZzpcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvaG9tZS9jbG9jay5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIkRlc2lnbmVkIGZvciBVcHRpbWVcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFsxLzIsIDEvMywgMS80XSxcclxuICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHthbGlnbjogXCJjZW50ZXJcIiwgdGl0bGVTaXplOlwibWRcIixpY29uQ29sb3I6XCJyZWQuNTAwXCIsIHN2ZzpcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvZ2VuZXJhbC9zaXplLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiU2NhbGFiaWxpdHkgR3VhcmFudGVlZFwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zLCAxLzRdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgZGF0YToge2FsaWduOiBcImNlbnRlclwiLHRpdGxlU2l6ZTpcIm1kXCIsaWNvbkNvbG9yOlwicmVkLjUwMFwiLCBzdmc6XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2hvbWUvY2hhaXItMS5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIkVhc3kgRGVwbG95bWVudFwifVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSxcclxue1xyXG4gICAgYm9keTogW3tcclxuICAgICAgICB0eXBlOiBcImNvbnRlbnRcIixcclxuICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICB0ZXh0OiA8c3Bhbj5IaWdoIHRyYWZmaWMgc2l0ZXMgbmVlZCB0aGUgcmVzb3VyY2VzIHRvIFxyXG4gICAgICAgICAgICBzZXJ2ZSBsYXJnZSBhbW91bnRzIG9mIHVuaXF1ZSB2aXNpdG9ycyBpbiBhIGZhc3QgYW5kIFxyXG4gICAgICAgICAgICBlZmZpY2llbnQgd2F5LiBJbiBvcmRlciB0byBzY2FsZSB0byBtZWV0IHRob3NlIG5lZWRzLFxyXG4gICAgICAgICAgICAgYSBudW1iZXIgb2Ygd2ViIHNlcnZlcnMsIGNvbW1vbmx5IGtub3duIGFzIGEgZmFybSwgXHJcbiAgICAgICAgICAgICBuZWVkIHRvIGJlIGltcGxlbWVudGVkIGFuZCBhIG1ldGhvZCB0byByb3V0ZSB0cmFmZmljXHJcbiAgICAgICAgICAgICAgYWNyb3NzIHRoZW0gaW4gYSBiYWxhbmNlZCB3YXkuPC9zcGFuPixcclxuICAgICAgICAgICAgZm9udFNpemU6IFtcImxnXCIsXCJsZ1wiLFwieGxcIl0sXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBwdDogMCxcclxuICAgIHBiOiAwLFxyXG4gICAgbWI6IDBcclxufSxcclxuXSIsImltcG9ydCBQcm94eVByaWNpbmcgZnJvbSBcIi4uLy4uL3ByaWNpbmcvUHJveHlQcmljaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiQ29ubmVjdCB3aXRoIFByb3h5XCIsXHJcbiAgICAgICAgZ2FwOiAwLFxyXG4gICAgICAgIGJvZHk6IFt7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiY29udGVudFwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogPHNwYW4+XHJcbiAgICAgICAgICAgICAgICBQcm94eSBhcyBhIFNlcnZpY2UgcmVmZXJzIHRvIHByb3h5IHNlcnZlcnMgdGhhdCBhY3QgYXMgaW50ZXJtZWRpYXRlIG5vZGVzIG9yIGNvbm5lY3RpbmcgcG9pbnRzIGJldHdlZW4gYW4gZW5kLXVzZXIgYW5kIHRoZSBpbnRlcm5ldC5cclxuICAgICAgICAgICAgICAgIFByb3h5IGFzIGEgU2VydmljZSBhbGxvd3MgeW91IHRvIGNvbm5lY3QgdG8gYSBkaWZmZXJlbnQgc2VydmVyIGFuZCBwcm92aWRlcyB5b3Ugd2l0aCBhY2Nlc3MgdG8gd2ViIHBhZ2VzLCBmaWxlcyBldGMuIFxyXG4gICAgICAgICAgICAgICAgUHJveHkgc2VydmVycyBmYWNpbGl0YXRlIGFkbWluaXN0cmF0aXZlLCBhdXRob3JpdGF0aXZlLCBzZWN1cml0eSBpc3N1ZXMgaW4gdGhlIGVudGVycHJpc2Ugd29ybGQuXHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+LFxyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFtcImxnXCIsXCJsZ1wiLFwieGxcIl0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246XCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC43LFxyXG4gICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJwcmljaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiA8UHJveHlQcmljaW5nLz5cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG15OiAwLFxyXG4gICAgICAgIHB5OiBcIjQ4cHhcIixcclxuICAgICAgICBiZ0ltYWdlOiBcInVybCgnL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbmV0d29ya19hYnN0cmFjdC5qcGcnKVwiLFxyXG4gICAgICAgIGJsZW5kOiBcInNjcmVlblwiLFxyXG4gICAgICAgIGJnOiBcImxpZ2h0LjQwMFwiLFxyXG4gICAgICAgIGNvbG9yOiBcImRhcmsuNTAwXCIsXHJcbiAgICAgICAgZ2FwOiA2LFxyXG4gICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb250YWluZXJcIixcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckRhdGE6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFsxIC8gMiwgMSAvIDMsIDEgLyAzLCAxIC8gMiwgMSAvIDNdLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTogXCJtZFwiLCBpY29uQ29sb3I6IFwicHJpbWFyeS41MDBcIiwgc3ZnOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvbWVkaWEvZXF1YWxpemVyLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiU2VjdXJlXCIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogWzEgLyAyLCAxIC8gMywgMSAvIDMsIDEgLyAyLCAxIC8gM10sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhbGlnbjogXCJjZW50ZXJcIiwgdGl0bGVTaXplOiBcIm1kXCIsIGljb25Db2xvcjogXCJwcmltYXJ5LjUwMFwiLCBzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9jb2RlL3RpbWUtc2NoZWR1bGUuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJMb3cgTGF0ZW5jeVwiIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFsxIC8gMiwgMSAvIDMsIDEgLyAzLCAxIC8gMiwgMSAvIDNdLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHsgYWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTogXCJtZFwiLCBpY29uQ29sb3I6IFwicHJpbWFyeS41MDBcIiwgc3ZnOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvaG9tZS9rZXkuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJBdXRob3JvdGF0aXZlXCIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogWzEgLyAyLCAxIC8gMywgMSAvIDMsIDEgLyAyLCAxIC8gM10sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhbGlnbjogXCJjZW50ZXJcIiwgdGl0bGVTaXplOiBcIm1kXCIsIGljb25Db2xvcjogXCJwcmltYXJ5LjUwMFwiLCBzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9kZXZpY2VzL2RpYWdub3N0aWNzLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiQWRtaW5pc3RyYXRpdmVcIiB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBbMSAvIDIsIDEgLyAzLCAxIC8gMywgMSAvIDIsIDEgLyAzXSxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7IGFsaWduOiBcImNlbnRlclwiLCB0aXRsZVNpemU6IFwibWRcIiwgaWNvbkNvbG9yOiBcInByaW1hcnkuNTAwXCIsIHN2ZzogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2NvZGUvc3RhY2suc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJNdWx0aS1MYXllcmVkXCIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogWzEgLyAyLCAxIC8gMywgMSAvIDMsIDEgLyAyLCAxIC8gM10sXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogeyBhbGlnbjogXCJjZW50ZXJcIiwgdGl0bGVTaXplOiBcIm1kXCIsIGljb25Db2xvcjogXCJwcmltYXJ5LjUwMFwiLCBzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9uYXZpZ2F0aW9uL2Fycm93cy1oLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiUmVtb3RlIENvbm5lY3Rpdml0eVwiIH1cclxuICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgYm9keTogW3tcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcImFjY29yZGlvblwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogW3tcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGaXJld2FsbCBcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNdWx0aS1MYXllcmVkIEhvc3RlZCBGaXJld2FsbCBTb2x1dGlvbiB3aXRoIERlZGljYXRlZCAvIFNoYXJlZCBGaXJld2FsbCB1c2luZyBQYWxvIEFsdG8sIEZvcnRpbmV0LCBhbmQgQ2lzY28gQVNBLiBDZW50cmFsaXplZCBQb2xpY3kgTWFuYWdlbWVudCB1c2luZyBQYW5vcmFtYSwgU291cmNlZmlyZSBEQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvZmlyZXdhbGwuc3ZnXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiTmV0d29yayBGaWx0ZXJpbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNdWx0aXBsZSBJUCB0eXBlcyBnbG9iYWxseSwgaW4gYSBjbHVzdGVyZWQgb3IgaXNvbGF0ZWQgZW52aXJvbm1lbnQuIEVuaGFuY2VkIHByb3h5IHNlcnZpY2UgYnkgaXNvbGF0aW5nIHRoZSBwcml2YXRlIG5ldHdvcmsgZnJvbSB0aGUgd2ViLCB0aHVzIGFsbG93aW5nIGxpbWl0aW5nIGFjY2VzcyBvZiBwcml2YXRlIG5ldHdvcmsgdXNlcnMgdG8gSW50ZXJuZXQtYmFzZWQgcmVzb3VyY2VzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL0lsbHVzdHJhdGlvbnMvc2VjdXJpdHlfbG9ja19maXJld2FsbC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJGYXN0IHNwZWVkIHdpdGggbWluaW11bSBiYW5kd2lkdGggdXNhZ2VcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2UgcHJveHkgc2VydmVycyBhdCBhIGZhc3RlciBzcGVlZCBhbmQgbGltaXRpbmcgdGhlIGJhbmR3aWR0aCB1dGlsaXphdGlvbiwgYnkgZmlsdGVyaW5nIHRyYWZmaWMsIGNhY2hpbmcgZmlsZXMgYW5kIHdlYiBwYWdlcyBhY2Nlc3NlZC4gSGlnaGx5IGFkdmFuY2VkLCBhdmFpbGFibGUgYW5kIG11bHRpcGxlIGRhdGEgY2VudHJlIGxvY2F0aW9ucy5cIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL3NpcC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgfSxdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuXSIsImltcG9ydCBTZHdhblByaWNpbmcgZnJvbSBcIi4uLy4uL3ByaWNpbmcvU2R3YW5QcmljaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgcHg6IDIsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImltYWdlJnRleHRcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9JbGx1c3RyYXRpb25zL0NsaWVudFNwZWNpZmljX0FwcERldi5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWN1cmUgQ29ubmVjdGl2aXR5IHdpdGggU0QtV0FOXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogW1wiY29sdW1uXCIsIFwiY29sdW1uXCIsIFwicm93LXJldmVyc2VcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSB2aXJ0dWFsIFdBTiBhcmNoaXRlY3R1cmUsIGFsbG93aW5nIGZpcm1zIG9yIGNvbXBhbmllcyB0byBsZXZlcmFnZSBhbnkgY29tYmluYXRpb24gb2Ygc2VydmljZXMsIGluY2x1ZGluZyBMVEUsIFZvTFRFLCBCcm9hZGJhbmQgc2VydmljZXMsIFdpRmkgU2VydmljZXMgZXRjLiB0byBzZWN1cmVseSBjb25uZWN0IHVzZXJzIHRvIGFwcGxpY2F0aW9ucy4gU0QtV0FOIHRyYW5zZm9ybXMgdGhlIHdheSBhIHBhcnRpY3VsYXIgbmV0d29yayBzdXBwb3J0cyBhbmQgaW50ZXJhY3RzIHdpdGggZW50ZXJwcmlzZSBhcHBsaWNhdGlvbnMuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHB5OiBbMCwgNF0sXHJcbiAgICAgICAgZ2FwOiAwLCBtdDogMCxcclxuICAgICAgICBiZzogXCJsaWdodC40MDBcIixcclxuICAgICAgICBib2R5OiBbe1xyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHR5cGU6IFwicHJpY2luZ1wiLFxyXG4gICAgICAgICAgICBkYXRhOiA8U2R3YW5QcmljaW5nIC8+XHJcbiAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHB4OiAyLFxyXG4gICAgICAgIHRpdGxlOiBcIkZpbmQgb3V0IEhvdyBCR1VTIFNELVdBTiB3aWxsIGltcHJvdmUgeW91ciBuZXR3b3JrOlwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk5leHQtZ2VuZXJhdGlvbiBXQU4gY29ubmVjdGl2aXR5IHNlcnZpY2VzLiBXZSBoYXZlIEV4cHJlc3MgUm91dGVzIHRvIG9mZmljZSAzNjUsIEFXUywgQXp1cmUgdGhyb3VnaCBFcXVpbml4IENsb3VkIEV4Y2hhbmdlIGFuZCBhcmUgcGVlcmluZyB3aXRoIEFTTnMgZGlyZWN0bHkgZm9yIHByb3ZpZGluZyBiZXR0ZXIgYW5kIGhpZ2gtcGVyZm9ybWFuY2Ugcm91dGVzIHRvIE9mZmljZSAzNjUsIEF6dXJlIGFuZCBBV1MuXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb25TdHlsZToge1xyXG4gICAgICAgICAgICBweDogXCIxMHB4XCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYXA6IDEwLFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiA4LFxyXG4gICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHk6IDQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjEwMCVcIiwgMSAvIDJdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlMlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udDogXCJOZXhhIEJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjdcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9tb2JpbGUuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlydHVhbCBGbGV4aWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbmR1c3RyeeKAmXMgb25seSBtdWx0aS1naWdhYml0IHZpcnR1YWwgV0FOIG9wdGltaXphdGlvbiBzb2x1dGlvbiBhbmQgdGhlIG9ubHkgcHJvZHVjdHMgdGhhdCBzdXBwb3J0IGV2ZXJ5IG1ham9yIGh5cGVydmlzb3IuIEVtYWlsIChNUyBFeGNoYW5nZSBhbmQgU01UUCksIGZpbGUgc2VydmljZXMgKENJRlMsIEZUUCksIGRvY3VtZW50IG1hbmFnZW1lbnQoU2hhcmVQb2ludCkuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHk6IDQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjEwMCVcIiwgMSAvIDJdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlMlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udDogXCJOZXhhIEJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjdcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci90YWdzLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRpdmVyc2lmeWluZyBBcHBsaWNhdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2lsdmVyIFBlYWsvIFJpdmVyYmVk4oCZcyBXQU4gb3B0aW1pemF0aW9uIHNvbHV0aW9uIHdvcmtzIG9uIGFsbCBhcHBsaWNhdGlvbnMsIHJlZ2FyZGxlc3Mgb2YgdHJhbnNwb3J0IHByb3RvY29sIG9yIHZlcnNpb24uIEludGVyYWN0aXZlIGFuZCB0cmFuc2FjdGlvbmFsIGFwcGxpY2F0aW9ucyBzdWNoIGFzIFZNd2FyZSBWREksIGFuZCBTUUwuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHk6IDQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjEwMCVcIiwgMSAvIDJdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlMlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udDogXCJOZXhhIEJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjdcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9kYXRhLXNlcnZlci5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJTdG9yYWdlIENlbnRyYWxpemF0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIiBGYXN0LCBSZWxpYWJsZSBhbmQgSW5jcmVhc2luZ2x5IGVmZmljaWVudCBjZW50cmFsaXppbmcgc2VydmVycyBhbmQgc3RvcmFnZSBvZmZlcnMgc2lnbmlmaWNhbnQgY29zdCwgbWFuYWdlbWVudCwgc2VjdXJpdHkgYW5kIGNvbXBsaWFuY2UgYmVuZWZpdHMuIERldGVjdHMsIGlzb2xhdGVzIG5vdGlmaWVzIGFuZCBjb3JyZWN0cyBmYXVsdHMgZW5jb3VudGVyZWQgaW4gdGhlIG5ldHdvcmsuXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHk6IDQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjEwMCVcIiwgMSAvIDJdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlMlwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogXCJtZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlRm9udDogXCJOZXhhIEJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0T3BhY2l0eTogXCIwLjdcIixcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9sb2NrLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlY3VyaXR5IEd1YXJhbnRlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWxsIHdpdGhvdXQgcmlzayBvZiBjb3JydXB0aW5nIGRhdGEgb3IgYWx0ZXJpbmcgYmVoYXZpb3VyLiBObyBwbHVnLWlucyBhcmUgcmVxdWlyZWQsIHdoaWNoIGV4cGVkaXRlcyBkZXBsb3ltZW50IGFuZCBzYXZlcyBib3RoIHRpbWUgYW5kIG1vbmV5LiBGYXN0LCBSZWxpYWJsZSBhbmQgSW5jcmVhc2luZ2x5IEVmZmljaWVudC5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcblxyXG5dIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIGdhcDogMTAsXHJcbiAgICAgICAgcHk6IFs4LDE2XSxcclxuICAgICAgICBib2R5OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDpbXCIxMDAlXCIsIFwiMTAwJVwiLCAxLzJdLFxyXG4gICAgICAgICAgICBweTpbMiw2LDYsNiwyXSxcclxuICAgICAgICAgICAgdHlwZTogXCJpbWFnZUdyb3VwXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGltYWdlczogW1wiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMTE4MTM1NC9wZXhlbHMtcGhvdG8tMTE4MTM1NC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2ImZHByPTImaD03NTAmdz0xMjYwXCJdLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICc5MCUnLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjMwMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBvYmplY3RGaXQ6IFwiY292ZXJcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxLzJdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImNvbnRlbnRcIixcclxuICAgICAgICAgICAgZGF0YTogW3tcclxuICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJqdXN0aWZ5XCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogW1wibWRcIixcIm1kXCIsXCJtZFwiLFwibGdcIl0sXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTZWN1cml0eSBPcGVyYXRpb25zIENlbnRyZSBBcyBBIFNlcnZpY2VcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlU2l6ZTogWzI4LDI4LDI4LDMyXSxcclxuICAgICAgICAgICAgICAgIHRleHQ6IDxzcGFuPkFzIGRhdGEgdGhlZnQgYmVjYW1lIGV2aWRlbnQgYW5kIHNhZmVndWFyZGluZyBcclxuICAgICAgICAgICAgICAgIHNlbnNpdGl2ZSBkYXRhIGJlY2FtZSBhIG5lY2Vzc2l0eSBmb3IgYnVzaW5lc3NlcyBldmVyeXdoZXJlLCBcclxuICAgICAgICAgICAgICAgIHdlIGRldmVsb3BlZCBhIHBvcnRmb2xpbyBvZiBsZWFkaW5nIGN5YmVyc2VjdXJpdHkgc29sdXRpb25zIFxyXG4gICAgICAgICAgICAgICAgYW5kIGJ1aWx0IG9uIHRoZSBmYWNpbGl0eSBhbmQgaW50ZXJuYWwgcHJvY2Vzc2VzIHdlIGFscmVhZHkgXHJcbiAgICAgICAgICAgICAgICBoYWQgaW4gcGxhY2UgZm9yIG91ciBOT0MgdG8gY3JlYXRlIGEgdG9wLW5vdGNoIFNPQyBzdGFmZmVkIFxyXG4gICAgICAgICAgICAgICAgd2l0aCBjZXJ0aWZpZWQgc2VjdXJpdHkgYW5hbHlzdHMgcmVhZHkgdG8gcHJvdmlkZSBwcm9hY3RpdmUsIFxyXG4gICAgICAgICAgICAgICAgZXhjZXB0aW9uYWwgc3VwcG9ydCB0byBvdXIgY2xpZW50cy4gV2UgYWxzbyBjcmVhdGVkIG5ldyBcclxuICAgICAgICAgICAgICAgIHdvcmtmbG93cywgcHJvY2Vzc2VzIGFuZCBhdXRvbWF0aW9uIHNwZWNpZmljIHRvIGN5YmVyc2VjdXJpdHkvU09DIHNlcnZpY2VzLlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICB9XVxyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlIDogXCJFbnN1cmUgQ3liZXIgU2VjdXJpdHkgd2l0aCBBZHZhbmNlZCBJbnRlbGxpZ2VuY2VcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgc2VydmljZSBhcmNoaXRlY3R1cmUgZm9yIG91ciBTZWN1cml0eSBPcGVyYXRpb25zIENlbnRlciBhcyBhIFNlcnZpY2UgKFNPQ2FhUykgcHJvZ3JhbSBpbnRlZ3JhdGVzIGJlc3Qtb2YtYnJlZWQgcHJvZHVjdHMgd2l0aCBwcm92ZW4gcHJvY2Vzc2VzIGFuZCBoaWdobHktc2tpbGxlZCBzdGFmZiwgaW5jcmVhc2luZyB2aXNpYmlsaXR5IGludG8gdGhlIG5ldHdvcmssIHNwZWVkaW5nIHVwIGFsZXJ0IHJlc3BvbnNlIGFuZCByZXNvbHV0aW9uIHRpbWVzLCBhbmQgcHJvdmlkaW5nIHByb2FjdGl2ZSByaXNrIG1vZGVsaW5nIGFuZCByaXNrIG1pdGlnYXRpb24uXCIsXHJcblxyXG4gICAgICAgIG15OiAwLFxyXG4gICAgICAgIHB5OiAyMCxcclxuICAgICAgICBiZzogXCJncmF5LjEwMFwiLFxyXG4gICAgICAgIGNvbG9yOiBcImRhcmsuNTAwXCIsXHJcbiAgICAgICAgcm93RGlzdGFuY2U6IDEyLFxyXG4gICAgICAgIGdhcDogOCxcclxuICAgICAgICBib2R5OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCAxLzIsIDEvM10sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7YWxpZ246IFwiY2VudGVyXCIsdGl0bGVTaXplOlwibWRcIiwgaWNvbkNvbG9yOlwicmVkLjUwMFwiLCBzdmc6XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2dlbmVyYWwvdmlzaWJsZS5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIkluLWRlcHRoIHJpc2sgdmlzaWJpbGl0eVwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCAxLzIsIDEvM10sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7YWxpZ246IFwiY2VudGVyXCIsIHRpdGxlU2l6ZTpcIm1kXCIsIGljb25Db2xvcjpcInJlZC41MDBcIiwgc3ZnOlwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9kZXNpZ24vbWFnaWMuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJDb21wbGlhbmNlIERlbW9uc3RyYXRlZFwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCAxLzIsIDEvM10sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7YWxpZ246IFwiY2VudGVyXCIsdGl0bGVTaXplOlwibWRcIiwgaWNvbkNvbG9yOlwicmVkLjUwMFwiLCBzdmc6XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2ZpbGVzL251bWJlcmVkLWluZm9ybWF0aW9uLnN2Z1wiLG10OiA0LCB0aXRsZTogXCJQcmlvcml0aXppbmcgaXNzdWVzIHJlc29sdXRpb25cIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFtcIjEwMCVcIiwgMS8yLCAxLzNdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgZGF0YToge2FsaWduOiBcImNlbnRlclwiLHRpdGxlU2l6ZTpcIm1kXCIsIGljb25Db2xvcjpcInJlZC41MDBcIiwgc3ZnOlwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9jb21tdW5pY2F0aW9uL3NlbmRpbmcuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJSYXBpZCBSZXNwb25zZVwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLCAxLzIsIDEvM10sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7YWxpZ246IFwiY2VudGVyXCIsdGl0bGVTaXplOlwibWRcIiwgaWNvbkNvbG9yOlwicmVkLjUwMFwiLCBzdmc6XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2dlbmVyYWwvc2hpZWxkLWNoZWNrLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiTmV4dC1nZW4gTWFuYWdlZCBGaXJld2FsbFwifVxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn0sXHJcbntcclxuICAgIGJvZHk6IFt7XHJcbiAgICAgICAgdHlwZTogXCJjb250ZW50XCIsXHJcbiAgICAgICAgZGF0YTogW3tcclxuICAgICAgICAgICAgdGV4dDogPHNwYW4+T3VyIFNPQyBzb2x1dGlvbiBnb2VzIGJleW9uZCBzaW1wbHkgXHJcbiAgICAgICAgICAgIGluc3RhbGxpbmcgYSBTSUVNIHByb2R1Y3QgYW5kIHNlbmRpbmcgeW91ciB0ZWFtIFxyXG4gICAgICAgICAgICBtZW1iZXJzIGFuIG92ZXJ3aGVsbWluZyBudW1iZXIgb2YgYWxlcnRzIHRvIHJldmlldy4gXHJcbiAgICAgICAgICAgIE91ciBTZWN1cml0eSBFbmdpbmVlcnMgdXNlIGFuYWx5dGljIHNvZnR3YXJlIHRvIFxyXG4gICAgICAgICAgICBjb25kdWN0IHRoZSBkZWVwIGFuYWx5c2lzIHJlcXVpcmVkIHRvIHByb3ZpZGUgeW91XHJcbiAgICAgICAgICAgICB3aXRoIGFjdGlvbmFibGUgcmVtZWRpYXRpb24gcmVjb21tZW5kYXRpb25zLjwvc3Bhbj4sXHJcbiAgICAgICAgICAgIGZvbnRTaXplOltcImxnXCIsXCJsZ1wiLFwieGxcIl0sXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICB9XVxyXG4gICAgfV0sXHJcbiAgICBwdDogMCxcclxuICAgIHBiOiAwLFxyXG4gICAgbWI6IDBcclxufSxcclxuXSIsImltcG9ydCBXZWJEZXZQcmljaW5nIGZyb20gXCIuLi8uLi9wcmljaW5nL1dlYkRldlByaWNpbmdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHtcclxuICAgICAgICBweTogMCxcclxuICAgICAgICBib2R5OiBbe1xyXG4gICAgICAgICAgICB0eXBlOiBcInByaWNpbmdcIixcclxuICAgICAgICAgICAgZGF0YTogPFdlYkRldlByaWNpbmc+PC9XZWJEZXZQcmljaW5nPlxyXG4gICAgICAgIH1dXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBcIkJ1aWxkIHlvdXIgYnJhbmQgb25saW5lXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiV2UgaGF2ZSB0aGUgcmlnaHQgdGVhbSB0byBkZXZlbG9wIHRvIHR1cm4gYW55IGtpbmQgb2YgYnVzaW5lc3MgaW50byBhbiBvbmxpbmUgdHljb29uLlwiLFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiA0LFxyXG4gICAgICAgIGdhcDogNCxcclxuICAgICAgICBib2R5OiBbXHJcbiAgICAgICAgICAgIHsgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbMS8yLDEvMywxLzRdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7aW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY29sb3IvbW9uaXRvci5zdmdcIiwgc2l6ZTpcIjk2cHhcIiwgdGl0bGU6IFwiRS1Db21tZXJjZVwiLCBib3hTaGFkb3c6IFwibGdcIixwOjgsIHJvdW5kZWQ6OCx9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFsxLzIsMS8zLDEvNF0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9zcGVha2VyLnN2Z1wiLCBzaXplOlwiOTZweFwiLCB0aXRsZTogXCJBZHZlcnRpc2luZ1wiLCBib3hTaGFkb3c6IFwibGdcIixwOjgsIHJvdW5kZWQ6OCx9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFsxLzIsMS8zLDEvNF0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci90ZWNobm9sb2d5LXByb2R1Y3RzLnN2Z1wiLCBzaXplOlwiOTZweFwiLCB0aXRsZTogXCJQcm9kdWN0c1wiLCBib3hTaGFkb3c6IFwibGdcIixwOjgsIHJvdW5kZWQ6OCx9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeyAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFsxLzIsMS8zLDEvNF0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci9zb2Z0d2FyZS5zdmdcIiwgc2l6ZTpcIjk2cHhcIiwgdGl0bGU6IFwiU2FhU1wiLCBib3hTaGFkb3c6IFwibGdcIixwOjgsIHJvdW5kZWQ6OCx9LCAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB0aXRsZTogXCJPdXIgUHJvY2Vzc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldlIGZvbGxvdyB0aGUgcG9wdWxhciBVWCBEZXNpZ24gUHJvY2VzcyBmb3IgZGVzaWduaW5nIGFuZCBkZXZlbG9waW5nIGludGVyZmFjZXMuXCIsXHJcbiAgICAgICAgcm93RGlzdGFuY2U6IDgsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zXSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge3N2ZzogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2NvbW11bmljYXRpb24vZ3JvdXAuc3ZnXCIsIGljb25Db2xvcjpcInByaW1hcnkuNTAwXCIgLCB0aXRsZTogXCJNZWV0IHRvIERpc2NvdmVyXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFsxLzIsIDEvM10sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7c3ZnOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvY29tbXVuaWNhdGlvbi9jbGlwYm9hcmQtbGlzdC5zdmdcIiwgaWNvbkNvbG9yOlwicHJpbWFyeS41MDBcIiAsIHRpdGxlOiBcIlBsYW4gJiBTa2V0Y2hcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zXSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9kZXNpZ24vYmV6aWVyLWN1cnZlLnN2Z1wiLCBpY29uQ29sb3I6XCJwcmltYXJ5LjUwMFwiICwgdGl0bGU6IFwiRGVzaWduIE1vY2t1cHNcIn1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zXSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9jb2RlL2NvZGUuc3ZnXCIsIGljb25Db2xvcjpcInByaW1hcnkuNTAwXCIgLCB0aXRsZTogXCJDb2RpbmcgJiBEZXZlbG9wbWVudFwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbMS8yLCAxLzNdLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge3N2ZzogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2NvZGUvZG9uZS1jaXJjbGUuc3ZnXCIsIGljb25Db2xvcjpcInByaW1hcnkuNTAwXCIgLCB0aXRsZTogXCJRdWFsaXR5IEFzc3VyYW5jZVwifVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbMS8yLCAxLzNdLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge3N2ZzogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2dlbmVyYWwvdGh1bmRlci1tb3ZlLnN2Z1wiLCBpY29uQ29sb3I6XCJwcmltYXJ5LjUwMFwiICwgdGl0bGU6IFwiTGF1bmNoICYgT3B0aW1pemF0aW9uXCJ9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbXk6IDE2LFxyXG4gICAgICAgIHB5OiBcIjQ4cHhcIixcclxuICAgICAgICBiZzogXCJsaWdodC40MDBcIixcclxuICAgICAgICByb3dEaXN0YW5jZTogOCxcclxuICAgICAgICBnYXA6IDYsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBteTpbMCwwLDQsNF0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiNzAlXCIsXCI2MCVcIixcIjYwJVwiLCAxLzNdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZUdyb3VwXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzOiBbXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci91c2VyLWVuZ2FnZW1lbnQuc3ZnXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIG14OiBcIjE2JVwiLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBteTpbMCwwLDQsNF0sXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiLFwiMTAwJVwiLFwiMTAwJVwiLCAyLzNdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJjb250ZW50XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIldlIGJ1aWxkIGdyZWF0IGV4cGVyaWVuY2VzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBbXCJsZ1wiLFwieGxcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBbMzIsMzYsNDAsNDhdLFxyXG4gICAgICAgICAgICAgICAgICAgIG15OlsyLDQsOF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+V2Ugbm90IG9ubHkgYnVpbGQgZ3JlYXQgd2Vic2l0ZXMsIGJ1dCB3ZSBmb2N1cyBvbiBob3cgdGhlIHVzZXIgaW50ZXJhY3RzIHRvby4gQW5kIHRoYXQgaXMgd2hlcmUgbmV3IGJ1c2luZXNzIGNvbWVzLiBJZiB5b3VyIHdlYnNpdGUgaXMgb2xkLWZhc2hpb25lZCwgb3Igb3V0LXRvLWRhdGUgdGhhdCB3aWxsIHRocm93IG91dCB5b3VyIGN1c3RvbWVycyBpbiBsZXNzIHRoYW4gNSBzZWNvbmRzLjwvc3Bhbj48YnIvPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gQnV0IHdlIGhhdmUgc29sdXRpb24gdG8gdGhhdDotIEEgY29tcGxldGVseSBjdXN0b21pemVkIHdlYnNpdGUgZGVzaWduZWQgc3RyYXRlZ2ljYWxseSwgcmVndWxhcmx5IHVwZGF0ZWQgYW5kIG1haW50YWluZWQuIFRoYXQganVzdCBjb252ZXJ0cyB5b3Ugd2Vic2l0ZSBpbnRvIGEgdmFsdWFibGUgYXNzZXQgZm9yIHlvdXIgYnVzaW5lc3MuPC9zcGFuPixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPiAgICBcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7ICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdDogW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkJ1aWx0IGZvciBmYXN0IGxvYWQgdGltZXMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRnVuY3Rpb25hbCBvbiBldmVyeSBkZXZpY2UuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRWFzeSB0byBVcGRhdGUgYW5kIE1haXRhaW4uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiSGlnaGx5IE9wdGltaXNlZCBDb250ZW50LlwiXHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBzcGFjaW5nOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlVHlwZTogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJjaGVja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb25Db2xvcjogXCJncmVlbi41MDBcIlxyXG4gICAgICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0gICBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiU29tZSBhZGQtb25zIHdlIG9mZmVyLi4uXCIsXHJcbiAgICAgICAgcm93RGlzdGFuY2U6IDQsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiODAlXCIsIDEvMiwgMS8zLCAxLzRdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7c3ZnOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvdG9vbHMvdG9vbHMuc3ZnXCIsIHNpemU6XCI4MHB4XCIsIHRpdGxlOiBcIlJlZ3VsYXIgV2Vic2l0ZSBNYWludGFpbmVuY2UgUGxhbnNcIiwgdGl0bGVTaXplOiBcIm1kXCIgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogW1wiODAlXCIsIDEvMiwgMS8zLCAxLzRdLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7c3ZnOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvZGVzaWduL3Blbi10b29sLXZlY3Rvci5zdmdcIiwgc2l6ZTpcIjgwcHhcIiwgdGl0bGU6IFwiTG9nbyBDcmVhdGlvbiAmIEJyYW5kaW5nIERlc2lnblwiLCB0aXRsZVNpemU6IFwibWRcIiB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCI4MCVcIiwgMS8yLCAxLzMsIDEvNF0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtzdmc6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9nZW5lcmFsL3NoaWVsZC1wcm90ZWN0ZWQuc3ZnXCIsIHNpemU6XCI4MHB4XCIsIHRpdGxlOiBcIldlYnNpdGUgU2VjdXJpdHkgJiBQcm90ZWN0aW9uIFBsYW5zXCIsIHRpdGxlU2l6ZTogXCJtZFwiIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFtcIjgwJVwiLCAxLzIsIDEvMywgMS80XSxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge3N2ZzogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2hvbWUvcGljdHVyZS5zdmdcIiwgc2l6ZTpcIjgwcHhcIiwgdGl0bGU6IFwiQWRzLCBCcm9jaHVyZSwgUG9zdGVycyBhbmQgbWFueSBtb3JlLi4uXCIsIHRpdGxlU2l6ZTogXCJtZFwiIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfVxyXG4gICAgXHJcbl0iLCJpbXBvcnQgVmRpUHJpY2luZyBmcm9tIFwiLi4vLi4vcHJpY2luZy9WZGlQcmljaW5nXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IFwiV29ya3N0YXRpb24gZm9yIHlvdXIgQnVzaW5lc3NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogPHNwYW4+VmlydHVhbCBEZXNrdG9wIEluZnJhc3RydWN0dXJlIGlzIHdoZW4gdmlydHVhbCBcclxuICAgICAgICAgICAgICAgIGRlc2t0b3BzIGFyZSBzZXJ2ZWQgdGhyb3VnaCBvbi1zaXRlIHRlY2hub2xvZ3kgc29sdXRpb25zLiBcclxuICAgICAgICAgICAgICAgIEEgaGFyZHdhcmUgc3RhY2sgaXMgbWFpbnRhaW5lZCBieSBJVCBhZG1pbmlzdHJhdG9ycyBhbmQgXHJcbiAgICAgICAgICAgICAgICB1c3VhbGx5IGxvY2F0ZWQgb24tc2l0ZS4gVGhpcyBpcyBob3cgdmlydHVhbCBkZXNrdG9wcyBoYXZlIFxyXG4gICAgICAgICAgICAgICAgdHJhZGl0aW9uYWxseSBiZWVuIGRlcGxveWVkLiBUaGlzIGFsbG93cyBJVCBcclxuICAgICAgICAgICAgICAgIHJlc291cmNlcyB0byBiZSByZWFsbG9jYXRlZCBmb3IgbWFuYWdpbmcgdmlydHVhbCBkZXNrdG9wcywgXHJcbiAgICAgICAgICAgICAgICBjbGllbnRzLCBhbmQgYXBwbGljYXRpb25zLlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPixcclxuICAgICAgICBnYXA6IDEwLFxyXG4gICAgICAgIHB5OiBbOCwxNl0sXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInByaWNpbmdcIixcclxuICAgICAgICAgICAgZGF0YTogPFZkaVByaWNpbmcgLz5cclxuICAgICAgICB9XVxyXG4gICAgfSxcclxuXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGUgOiBcIkJHIFVuaWZpZWQgU29sdXRpb27igJlzIFdvcmtzdGF0aW9uc1wiLFxyXG4gICAgICAgIFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIldpdGggZnVsbCBjb250cm9sIG92ZXIgaGFyZHdhcmUsIHNvZnR3YXJlLCBhbmQgZGF0YSwgdGhpcyBpcyBhbiBpZGVhbCBzb2x1dGlvbiBmb3IgaGlnaGx5IHNlbnNpdGl2ZSBjb21wdXRpbmcgZW52aXJvbm1lbnRzLiBUaGlzIGdyZWF0ZXIgZGVncmVlIG9mIGNvbnRyb2wgYWxzbyBsZW5kcyBpdHNlbGYgd2VsbCB0byBjdXN0b21pemF0aW9uIFwiLFxyXG5cclxuICAgICAgICBteTogMCxcclxuICAgICAgICBweTogMjAsXHJcbiAgICAgICAgYmc6IFwiZ3JheS4xMDBcIixcclxuICAgICAgICBjb2xvcjogXCJkYXJrLjUwMFwiLFxyXG4gICAgICAgIHJvd0Rpc3RhbmNlOiAxMixcclxuICAgICAgICBnYXA6IDgsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFsxLzIsIDEvMywgMS80XSxcclxuICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHthbGlnbjogXCJjZW50ZXJcIix0aXRsZVNpemU6XCJtZFwiLCBpY29uQ29sb3I6XCJyZWQuNTAwXCIsIHN2ZzpcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvY29kZS9sb2NrLWNpcmNsZS5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIlNlY3VyZVwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zLCAxLzRdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgZGF0YToge2FsaWduOiBcImNlbnRlclwiLCB0aXRsZVNpemU6XCJtZFwiLCBpY29uQ29sb3I6XCJyZWQuNTAwXCIsIHN2ZzpcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvY29kZS9jb21waWxpbmcuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJWaXJ0dWFsaXplZFwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zLCAxLzRdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgZGF0YToge2FsaWduOiBcImNlbnRlclwiLHRpdGxlU2l6ZTpcIm1kXCIsIGljb25Db2xvcjpcInJlZC41MDBcIiwgc3ZnOlwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9zaG9wcGluZy9kb2xsYXIuc3ZnXCIsbXQ6IDQsIHRpdGxlOiBcIlBheSBwZXIgVXNlXCJ9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBbMS8yLCAxLzMsIDEvNF0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZVwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7YWxpZ246IFwiY2VudGVyXCIsdGl0bGVTaXplOlwibWRcIiwgaWNvbkNvbG9yOlwicmVkLjUwMFwiLCBzdmc6XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2RldmljZXMvZGlzcGxheS0yLnN2Z1wiLCBtdDogNCwgdGl0bGU6IFwiUGxhdGZvcm0gSW5kZXBlbmRlbnRcIn1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFsxLzIsIDEvMywgMS80XSxcclxuICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHthbGlnbjogXCJjZW50ZXJcIix0aXRsZVNpemU6XCJtZFwiLCBpY29uQ29sb3I6XCJyZWQuNTAwXCIsIHN2ZzpcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2xpYnJhcnkvZGVzaWduL2xpbmUuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJGbGV4aWJsZVwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zLCAxLzRdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgZGF0YToge2FsaWduOiBcImNlbnRlclwiLCB0aXRsZVNpemU6XCJtZFwiLGljb25Db2xvcjpcInJlZC41MDBcIiwgc3ZnOlwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvbGlicmFyeS9nZW5lcmFsL3NpemUuc3ZnXCIsIG10OiA0LCB0aXRsZTogXCJTY2FsYWJsZVwifVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogWzEvMiwgMS8zLCAxLzRdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImZlYXR1cmVcIixcclxuICAgICAgICAgICAgZGF0YToge2FsaWduOiBcImNlbnRlclwiLHRpdGxlU2l6ZTpcIm1kXCIsaWNvbkNvbG9yOlwicmVkLjUwMFwiLCBzdmc6XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9saWJyYXJ5L2hvbWUvY2hhaXItMS5zdmdcIiwgbXQ6IDQsIHRpdGxlOiBcIkVhc3kgRGVwbG95bWVudFwifVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSxcclxue1xyXG4gICAgYm9keTogW3tcclxuICAgICAgICB0eXBlOiBcImNvbnRlbnRcIixcclxuICAgICAgICBkYXRhOiBbe1xyXG4gICAgICAgICAgICB0ZXh0OiA8c3Bhbj5XaXRoIEJHIFVuaWZpZWQgU29sdXRpb25z4oCZIFdvcmtzdGF0aW9uIFxyXG4gICAgICAgICAgICBBcyBBIFNlcnZpY2UsIHdlIGdpdmUgYW4gb3JnYW5pemF0aW9uIHRoZSBmcmVlZG9tIHRvXHJcbiAgICAgICAgICAgICBkZXBsb3kgdmlydHVhbCBkZXNrdG9wcyBmcm9tIGl0cyBvd24gb24tcHJlbWlzZXMgZGF0YSBcclxuICAgICAgICAgICAgIGNlbnRyZXMuIEluLWhvdXNlIElUIHRlYW1zIGFyZSByZXNwb25zaWJsZSBmb3IgZGVwbG95aW5nIFxyXG4gICAgICAgICAgICAgdGhlIHZpcnR1YWwgZGVza3RvcHMgYXMgd2VsbCBhcyBwdXJjaGFzaW5nLCBtYW5hZ2luZywgXHJcbiAgICAgICAgICAgICBhbmQgdXBncmFkaW5nIHRoZSBpbmZyYXN0cnVjdHVyZS48L3NwYW4+LFxyXG4gICAgICAgICAgICBmb250U2l6ZTogW1wibGdcIixcImxnXCIsXCJ4bFwiXSxcclxuICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgIH1dXHJcbiAgICB9XSxcclxuICAgIHB0OiAwLFxyXG4gICAgcGI6IDAsXHJcbiAgICBtYjogMFxyXG59LFxyXG57XHJcbiAgICBweTogNSxcclxuICAgIGJvZHk6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCJdLFxyXG4gICAgICAgICAgICBweDogWzYsIDgsIFwiMjAlXCJdLFxyXG4gICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlRm9udFNpemU6W1wiMThweFwiLFwiMThweFwiLFwiMjBweFwiLFwiMjRweFwiXSxcclxuICAgICAgICAgICAgICAgIHRleHRTaXplOltcIjE0cHhcIixcIjE0cHhcIixcIjE2cHhcIl0sXHJcbiAgICAgICAgICAgICAgICBzaXplOiBcIjk2cHhcIixcclxuICAgICAgICAgICAgICAgIGltYWdlV2lkdGg6IFwiMTI4cHhcIixcclxuICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL2FnaWxlLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgbWF4SDogMjAwLFxyXG4gICAgICAgICAgICAgICAgc3BhY2luZzogMTIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGbGV4aWJsZSBtaWdyYXRpb24gdG8gdGhlIGNsb3VkIGZvciBSZW1vdGUgRGVza3RvcCBTZXJ2aWNlc1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT3B0aW1pemUgeW91ciBleHBlcmllbmNlIHdpdGggYWZmb3JkYWJsZSBjb3N0cyBmb3IgeW91ciBzZXJ2ZXIgZGVza3RvcCBhbmQgYXBwcy4gR2V0IGFsbCB0aGUgcmVzb3VyY2VzLCB0b29scyBhbmQgaW5mcmFzdHJ1Y3R1cmUsIHlvdSBuZWVkIHRvIG1pZ3JhdGUgeW91ciBhcHBzLlwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3aWR0aDogW1wiMTAwJVwiXSxcclxuICAgICAgICAgICAgcHg6IFs2LCA4LCBcIjIwJVwiXSxcclxuICAgICAgICAgICAgdHlwZTogXCJmZWF0dXJlMlwiLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZUZvbnRTaXplOltcIjE4cHhcIixcIjE4cHhcIixcIjIwcHhcIixcIjI0cHhcIl0sXHJcbiAgICAgICAgICAgICAgICB0ZXh0U2l6ZTpbXCIxNHB4XCIsXCIxNHB4XCIsXCIxNnB4XCJdLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogXCI5NnB4XCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZVdpZHRoOiBcIjEyOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy9jb2xvci91c2VyLWVuZ2FnZW1lbnQuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICBtYXhIOiAyMDAsXHJcbiAgICAgICAgICAgICAgICBzcGFjaW5nOiAxMixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVzdGltYXRlIGVuZC11c2VyIGV4cGVyaWVuY2UgcXVhbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRXN0aW1hdG9yIHVzZWQgdG8gZXhwZXJpZW5jZSBvciBwcmVkaWN0IHRoZSBxdWFsaXR5IG9mIHlvdXIgZW5kLXVzZXIgZXhwZXJpZW5jZSBieSB0aGUgVmlydHVhbCBEZXNrdG9wIEluZnJhc3RydWN0dXJlIFNlcnZpY2UgcHJvdmlkZWQgYnkgeW91LiBEZXRlcm1pbmUgeW91ciBiYW5kd2lkdGggcmVxdWlyZW1lbnQgYW5kIGNvbnN0YW50IGhlYWx0aCBjaGVja2VyLlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgd2lkdGg6IFtcIjEwMCVcIl0sXHJcbiAgICAgICAgICAgIHB4OiBbNiwgOCwgXCIyMCVcIl0sXHJcbiAgICAgICAgICAgIHR5cGU6IFwiZmVhdHVyZTJcIixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGVGb250U2l6ZTpbXCIxOHB4XCIsXCIxOHB4XCIsXCIyMHB4XCIsXCIyNHB4XCJdLFxyXG4gICAgICAgICAgICAgICAgdGV4dFNpemU6W1wiMTRweFwiLFwiMTRweFwiLFwiMTZweFwiXSxcclxuICAgICAgICAgICAgICAgIHNpemU6IFwiOTZweFwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2VXaWR0aDogXCIxMjhweFwiLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvY29sb3IvZGVza3RvcC5zdmdcIixcclxuICAgICAgICAgICAgICAgIG1heEg6IDIwMCxcclxuICAgICAgICAgICAgICAgIHNwYWNpbmc6IDEyLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVmlydHVhbGl6ZSBib3RoIERlc2t0b3BzIGFuZCBBcHBzXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbGV4aWJpbGl0eSBhbmQgYWRhcHRhYmlsaXR5IGFjY29yZGluZyB0byB5b3VyIHJlcXVpcmVtZW50cywgaWYgeW91IG5lZWQgdG8gZ2V0IHlvdXIgZGVza3RvcCBpbmZyYXN0cnVjdHVyZSB2aXJ0dWFsaXplZCBvciB2aXJ0dWFsaXphdGlvbiBvZiBhcHBsaWNhdGlvbnMuXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICBdXHJcbn1cclxuXSIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHtcclxuICAgIFNsaWRlcixcclxuICAgIFNsaWRlclRodW1iLFxyXG4gICAgU2xpZGVyVHJhY2ssXHJcbiAgICBTbGlkZXJGaWxsZWRUcmFjayxEaXZpZGVyLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSBcInJlYWN0LXJldmVhbC9GYWRlXCI7XHJcbmltcG9ydCB7IFByaWNpbmdDYXJkLCBQcmljaW5nUXVvdGUgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9jYXJkcy9QcmljaW5nQ2FyZFwiO1xyXG5cclxuXHJcbmNvbnN0IHZlcmlmeU5vdEVtcHR5ID0gKHgsIHRleHQpID0+ICh4ID4gMCA/IFwiLCBcIiArIHggKyB0ZXh0IDogXCJcIik7XHJcblxyXG5mdW5jdGlvbiBDbG91ZExvZ2dpbmdQcmljaW5nKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbG9nczEsIHNldExvZ3MxXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvZ3MyLCBzZXRMb2dzMl0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsb2dzMywgc2V0TG9nczNdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmljaW5nXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxGYWRlIGR1cmF0aW9uPXs1MDB9IGJvdHRvbT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBweC1sZy01IHB4LTNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2luZ2xlIE5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGUgRENcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9zdGFjay5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlZCA1RyBMb2dzIHBlciBkYXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUG9ydGFsIGFjY2VzcyB3aWxsIGJlIHByb3ZpZGVkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGdWxseSBNYW5hZ2VkIFNlcnZpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcHgtMyB0ZXh0LWNlbnRlciBteS0yIE51bml0b1NhbnMtQm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgbWI9XCI0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV4dHJhIExvZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcHgtMyBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2xvZ3MxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MjB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2dzMSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyVHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlckZpbGxlZFRyYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJUaHVtYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCI3cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW49e2Ake2xvZ3MxfUdgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblN0eWxlPVwibXQtM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPVwiTG9nZ2luZyBDbG91ZCBDb25uZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj17YFNpbmdsZSBOb2RlIFNpbmdsZSBEQyAke3ZlcmlmeU5vdEVtcHR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ3MxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRyBFeHRyYSBMb2dzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTXVsdGlwbGUgTm9kZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW5nbGUgRENcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9zdGFjay5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJJbmNsdWRlZCA1RyBMb2dzIHBlciBkYXlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiUG9ydGFsIGFjY2VzcyB3aWxsIGJlIHByb3ZpZGVkLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJGdWxseSBNYW5hZ2VkIFNlcnZpY2VcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgcHgtMyB0ZXh0LWNlbnRlciBteS0yIE51bml0b1NhbnMtQm9sZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERpdmlkZXIgbWI9XCI0XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXh0cmEgTG9nc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwMCBweC0zIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bG9nczJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvZ3MyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJUcmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoPVwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyRmlsbGVkVHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaD1cIjEwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIjdweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17YCR7bG9nczJ9R2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdRdW90ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uU3R5bGU9XCJtdC0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZU5hbWU9XCJMb2dnaW5nIENsb3VkIENvbm5lY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZURlc2NyaXB0aW9uPXtgTXVsdGlwbGUgTm9kZXMgU2luZ2xlIERDICR7dmVyaWZ5Tm90RW1wdHkoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9nczIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHIEV4dHJhIExvZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNdWx0aXBsZSBOb2Rlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE11bHRpcGxlIERDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvc3RhY2suc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSW5jbHVkZWQgNUcgTG9ncyBwZXIgZGF5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlBvcnRhbCBhY2Nlc3Mgd2lsbCBiZSBwcm92aWRlZC5cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRnVsbHkgTWFuYWdlZCBTZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHB4LTMgdGV4dC1jZW50ZXIgbXktMiBOdW5pdG9TYW5zLUJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEaXZpZGVyIG1iPVwiNFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeHRyYSBMb2dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwIHB4LTMgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtsb2dzM31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9nczModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRyYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGg9XCIxMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNXB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJGaWxsZWRUcmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoPVwiMTBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjVweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyVGh1bWJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJzbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI1MDBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nPVwiN3B4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtgJHtsb2dzM31HYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25TdHlsZT1cIm10LTNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlTmFtZT1cIkxvZ2dpbmcgQ2xvdWQgQ29ubmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlRGVzY3JpcHRpb249e2BNdWx0aXBsZSBOb2RlcyBNdWx0aXBsZSBEQyAke3ZlcmlmeU5vdEVtcHR5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ3MzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRyBFeHRyYSBMb2dzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2xvdWRMb2dnaW5nUHJpY2luZzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1xyXG4gIEJ1dHRvbiwgQ29sbGFwc2UsIEltYWdlLFxyXG4gIFNsaWRlciwgU2xpZGVyVGh1bWIsIFNsaWRlclRyYWNrLCBTbGlkZXJGaWxsZWRUcmFjayxOdW1iZXJJbnB1dCxOdW1iZXJJbnB1dEZpZWxkLFxyXG4gIE51bWJlcklucHV0U3RlcHBlcixOdW1iZXJEZWNyZW1lbnRTdGVwcGVyLE51bWJlckluY3JlbWVudFN0ZXBwZXJcclxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuaW1wb3J0IHsgUHJpY2luZ0NhcmQsIFByaWNpbmdRdW90ZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUHJpY2luZ0NhcmQnXHJcblxyXG5jb25zdCB2ZXJpZnlOb3RFbXB0eSA9ICh4LCB0ZXh0KSA9PiAoeCA+IDAgPyBcIiwgXCIgKyB4ICsgXCIgXCIgKyB0ZXh0IDogXCJcIik7XHJcblxyXG5mdW5jdGlvbiBEUlByaWNpbmcocHJvcHMpIHtcclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3BsYW4sIHNldFBsYW5dID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgb3BlbkNvbnRyb2xzID0gKG5hbWUpID0+IHtzZXRTaG93KHRydWUpOyBzZXRQbGFuKG5hbWUpOyB3aW5kb3cuc2Nyb2xsVG8oMCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xsYXBzZS0xXCIpLm9mZnNldFRvcCAtIDEwMCk7fTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IHZhbHVlID0+IHNldFZhbHVlKHZhbHVlKTtcclxuICBjb25zdCBbdmVlYW0sIHNldFZlZWFtXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtJUCxzZXRJUF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJwcmljaW5nXCIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtbGctNSBweC0zXCI+XHJcbiAgICAgICAgICAgIDxGYWRlIGR1cmF0aW9uPXs1MDB9IGJvdHRvbT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZCB0aXRsZT17PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBUd28gPGJyLz4gR2VvIExvY2F0aW9ucyA8L2Rpdj59IGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9wcm9wZXJ0eS0yLnN2Z1wiIGZlYXR1cmVMaXN0PXtbXCJJbmNsdWRlcyBPbmUgWWVhcmx5IERyaWxsXCJdfT5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJtdC0zXCIgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJvdXRsaW5lXCIgc2l6ZT1cImxnXCIgb25DbGljaz17KCk9PntvcGVuQ29udHJvbHMoXCJUd28gR2VvIExvY2F0aW9uc1wiKX19PlZpZXcgT3B0aW9uczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZCB0aXRsZT17PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBUaHJlZSA8YnIvPiBHZW8gTG9jYXRpb25zIDwvZGl2Pn0gaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL3Byb3BlcnR5LTMuc3ZnXCIgZmVhdHVyZUxpc3Q9e1tcIkluY2x1ZGVzIE9uZSBZZWFybHkgRHJpbGxcIl19PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm10LTNcIiB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cIm91dGxpbmVcIiBzaXplPVwibGdcIiBvbkNsaWNrPXsoKT0+e29wZW5Db250cm9scyhcIlRocmVlIEdlbyBMb2NhdGlvbnNcIil9fT5WaWV3IE9wdGlvbnM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiY29sbGFwc2UtMVwiPlxyXG4gICAgICAgICAgPENvbGxhcHNlIGNsYXNzTmFtZT1cInB4LWxnLTVcIiBtdD17Nn0gaXNPcGVuPXtzaG93fT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktNSBib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheTUgdGV4dC1jZW50ZXJcIj57cGxhbn08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgcHgtM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNlwiPk5vLiBvZiBWTXM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8U2xpZGVyIGNvbG9yPVwicHJpbWFyeVwiIG15PVwiMjRweFwiIG1heD17MjB9IGRlZmF1bHRWYWx1ZT17MX0gdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJUcmFjayBoPVwiMTZweFwiIGJvcmRlclJhZGl1cz1cIjhweFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyRmlsbGVkVHJhY2sgaD1cIjE2cHhcIiBib3JkZXJSYWRpdXM9XCI4cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFNsaWRlclRodW1iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdy1tZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwibWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiODAwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCJhdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZz1cIjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjMycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbj17dmFsdWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IG10LTIgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNlwiPlZFRUFNczwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE51bWJlcklucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHZhbHVlKSA9PiBzZXRWZWVhbSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtYXg9ezIwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE51bWJlcklucHV0RmllbGQgY2xhc3NOYW1lPVwiYmctbGlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPE51bWJlcklucHV0U3RlcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJEZWNyZW1lbnRTdGVwcGVyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L051bWJlcklucHV0U3RlcHBlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvTnVtYmVySW5wdXQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IG10LTIgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNlwiPlB1YmxpYyBJUHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0SVAodmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4PXsyMH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dEZpZWxkIGNsYXNzTmFtZT1cImJnLWxpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxOdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE51bWJlckluY3JlbWVudFN0ZXBwZXIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L051bWJlcklucHV0PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGUgc2VydmljZU5hbWU9XCJEUiBBcyBBIFNlcnZpY2VcIiBzZXJ2aWNlRGVzY3JpcHRpb249e2Ake3BsYW59ICR7dmVyaWZ5Tm90RW1wdHkodmFsdWUsXCJWTXNcIil9ICR7dmVyaWZ5Tm90RW1wdHkodmVlYW0sXCJWRUVBTVwiKX0gJHt2ZXJpZnlOb3RFbXB0eShJUCxcIlB1YmxpYyBJUHNcIil9IGB9IGJ1dHRvbiA+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERSUHJpY2luZzsiLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEJveCxcclxuICBDb2xsYXBzZSxcclxuICBUYWJzLFxyXG4gIFRhYkxpc3QsXHJcbiAgVGFiUGFuZWxzLFxyXG4gIFRhYixcclxuICBUYWJQYW5lbCxcclxuICBSYWRpb0J1dHRvbkdyb3VwLFxyXG4gIE51bWJlcklucHV0LFxyXG4gIE51bWJlcklucHV0RmllbGQsXHJcbiAgTnVtYmVySW5wdXRTdGVwcGVyLFxyXG4gIE51bWJlckluY3JlbWVudFN0ZXBwZXIsXHJcbiAgTnVtYmVyRGVjcmVtZW50U3RlcHBlcixcclxuICBEcmF3ZXIsXHJcbiAgU3dpdGNoLFxyXG4gIEZvcm1MYWJlbCxcclxuICBEcmF3ZXJCb2R5LFxyXG4gIERyYXdlckhlYWRlcixcclxuICBEcmF3ZXJPdmVybGF5LFxyXG4gIERyYXdlckNvbnRlbnQsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxuICBTbGlkZXIsXHJcbiAgU2xpZGVyVGh1bWIsXHJcbiAgU2xpZGVyVHJhY2ssXHJcbiAgU2xpZGVyRmlsbGVkVHJhY2ssXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tIFwicmVhY3QtcmV2ZWFsL0ZhZGVcIjtcclxuaW1wb3J0IHsgRmFXaW5kb3dzLCBGYVNlcnZlciwgRmFEYXRhYmFzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBQcmljaW5nQ2FyZCwgUHJpY2luZ1F1b3RlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUHJpY2luZ0NhcmRcIjtcclxuXHJcbmNvbnN0IHRhYnMgPSBbXHJcbiAge1xyXG4gICAgaW5kZXg6IDAsXHJcbiAgICB0aXRsZTogXCJCYXNlIFNlcnZlclwiLFxyXG4gICAgaWNvbjogRmFTZXJ2ZXIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbmRleDogMSxcclxuICAgIHRpdGxlOiBcIldpbmRvd3MgMTBcIixcclxuICAgIGljb246IEZhV2luZG93cyxcclxuICB9LFxyXG4gIHtcclxuICAgIGluZGV4OiAyLFxyXG4gICAgdGl0bGU6IFwiV2luZG93cyAyMDE2IFN0YW5kYXJkXCIsXHJcbiAgICBpY29uOiBGYVdpbmRvd3MsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpbmRleDogMyxcclxuICAgIHRpdGxlOiBcIldpbmRvd3MgMjAxNiBEQ1wiLFxyXG4gICAgaWNvbjogRmFXaW5kb3dzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDQsXHJcbiAgICB0aXRsZTogXCJEZWRpY2F0ZWQgREIgU2VydmVyXCIsXHJcbiAgICBpY29uOiBGYURhdGFiYXNlLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBwbGFucyA9IFtcclxuICB7XHJcbiAgICBpbmRleDogMCxcclxuICAgIG5hbWU6IFwiU3RhbmRhcmRcIixcclxuICAgIGljb246IFwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvb3JpZ2FtaS5zdmdcIixcclxuICAgIGZlYXR1cmU6IFtcclxuICAgICAgXCIydkNQVVwiLFxyXG4gICAgICBcIjgwR0IgU1NEIFN0b3JhZ2VcIixcclxuICAgICAgXCI0R0IgUkFNXCIsXHJcbiAgICAgIFwiRGVza3RvcCBWaXJ0dWFsaXphdGlvblwiLFxyXG4gICAgICBcIkhpZ2ggQXZhaWxhYmlsdHlcIixcclxuICAgICAgXCJIaWdoIENsdXN0ZXJpbmdcIixcclxuICAgIF0sXHJcbiAgICBjcHU6IDIsXHJcbiAgICBwb3B1bGFyOiBmYWxzZSxcclxuICAgIHN0b3JhZ2U6IDgwLFxyXG4gICAgcmFtOiA0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDEsXHJcbiAgICBuYW1lOiBcIlByb2Zlc3Npb25hbFwiLFxyXG4gICAgaWNvbjogXCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9wYXBlci1wbGFuZS5zdmdcIixcclxuICAgIGZlYXR1cmU6IFtcclxuICAgICAgXCI0dkNQVVwiLFxyXG4gICAgICBcIjgwR0IgU1NEIFN0b3JhZ2VcIixcclxuICAgICAgXCI2R0IgUkFNXCIsXHJcbiAgICAgIFwiRGVza3RvcCBWaXJ0dWFsaXphdGlvblwiLFxyXG4gICAgICBcIkhpZ2ggQXZhaWxhYmlsdHlcIixcclxuICAgICAgXCJIaWdoIENsdXN0ZXJpbmdcIixcclxuICAgIF0sXHJcbiAgICBwb3B1bGFyOiBmYWxzZSxcclxuICAgIGNwdTogNCxcclxuICAgIHN0b3JhZ2U6IDgwLFxyXG4gICAgcmFtOiA2LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaW5kZXg6IDIsXHJcbiAgICBuYW1lOiBcIkJ1c2luZXNzXCIsXHJcbiAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2FpcnBsYW5lLnN2Z1wiLFxyXG4gICAgZmVhdHVyZTogW1xyXG4gICAgICBcIjZ2Q1BVXCIsXHJcbiAgICAgIFwiODBHQiBTU0QgU3RvcmFnZVwiLFxyXG4gICAgICBcIjhHQiBSQU1cIixcclxuICAgICAgXCJEZXNrdG9wIFZpcnR1YWxpemF0aW9uXCIsXHJcbiAgICAgIFwiSGlnaCBBdmFpbGFiaWx0eVwiLFxyXG4gICAgICBcIkhpZ2ggQ2x1c3RlcmluZ1wiLFxyXG4gICAgXSxcclxuICAgIHBvcHVsYXI6IHRydWUsXHJcbiAgICBjcHU6IDYsXHJcbiAgICBzdG9yYWdlOiA4MCxcclxuICAgIHJhbTogOCxcclxuICB9LFxyXG4gIHtcclxuICAgIGluZGV4OiAzLFxyXG4gICAgbmFtZTogXCJFbnRlcnByaXNlXCIsXHJcbiAgICBpY29uOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL3JvY2tldC5zdmdcIixcclxuICAgIGZlYXR1cmU6IFtcclxuICAgICAgXCI4dkNQVVwiLFxyXG4gICAgICBcIjgwR0IgU1NEIFN0b3JhZ2VcIixcclxuICAgICAgXCIxNkdCIFJBTVwiLFxyXG4gICAgICBcIkRlc2t0b3AgVmlydHVhbGl6YXRpb25cIixcclxuICAgICAgXCJIaWdoIEF2YWlsYWJpbHR5XCIsXHJcbiAgICAgIFwiSGlnaCBDbHVzdGVyaW5nXCIsXHJcbiAgICBdLFxyXG4gICAgcG9wdWxhcjogZmFsc2UsXHJcbiAgICBjcHU6IDgsXHJcbiAgICBzdG9yYWdlOiA4MCxcclxuICAgIHJhbTogMTYsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IEN1c3RvbVJhZGlvID0gUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4ge1xyXG4gIGNvbnN0IHsgaXNDaGVja2VkLCBpc0Rpc2FibGVkLCB2YWx1ZSwgLi4ucmVzdCB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgY2xhc3NOYW1lPVwibXktMVwiXHJcbiAgICAgIGZvbnRTaXplPXtbXCIxM3B4XCIsXCIxNHB4XCIsXCIxNnB4XCJdfVxyXG4gICAgICByZWY9e3JlZn1cclxuICAgICAgdmFyaWFudD17aXNDaGVja2VkID8gXCJzb2xpZFwiIDogXCJvdXRsaW5lXCJ9XHJcbiAgICAgIHZhcmlhbnRDb2xvcj17aXNDaGVja2VkID8gXCJwcmltYXJ5XCIgOiBcImdyYXkuMzAwXCJ9XHJcbiAgICAgIGFyaWEtY2hlY2tlZD17aXNDaGVja2VkfVxyXG4gICAgICByb2xlPVwicmFkaW9cIlxyXG4gICAgICBpc0Rpc2FibGVkPXtpc0Rpc2FibGVkfVxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgIC8+XHJcbiAgKTtcclxufSk7XHJcblxyXG5mdW5jdGlvbiBEYmFhc1ByaWNpbmcocHJvcHMpIHtcclxuXHJcbiAgY29uc3QgdmVyaWZ5Tm90RW1wdHkgPSAoeCwgdGV4dCkgPT4gKHggPiAwID8gXCIsIFwiICsgeCArIFwiIFwiICsgdGV4dCA6IFwiXCIpO1xyXG5cclxuICBjb25zdCBbdHlwZSwgc2V0VHlwZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgLy9Ib29rc1xyXG4gIGNvbnN0IFtwbGFuTmFtZSwgc2V0UGxhbl0gPSBSZWFjdC51c2VTdGF0ZShcIlN0YW5kYXJkXCIpO1xyXG4gIGNvbnN0IGhhbmRsZVBsYW4gPSAobmFtZSkgPT4gc2V0UGxhbihuYW1lKTtcclxuXHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG5cclxuICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3Qgb3BlbkNvbnRyb2xzID0gKCkgPT4ge3NldFNob3codHJ1ZSk7IHdpbmRvdy5zY3JvbGxUbygwLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbGxhcHNlLTFcIikub2Zmc2V0VG9wIC0gMTAwKTt9XHJcblxyXG4gIGNvbnN0IFtzdG9yYWdlLCBzZXRTdG9yYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVN0b3JhZ2UgPSAoc3RvcmFnZSkgPT4gc2V0U3RvcmFnZShzdG9yYWdlKTtcclxuXHJcbiAgY29uc3QgW3JhbSwgc2V0UmFtXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGhhbmRsZVJhbSA9IChyYW0pID0+IHNldFJhbShyYW0pO1xyXG5cclxuICBjb25zdCBbY3B1LCBzZXRDUFVdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcblxyXG5cclxuICBjb25zdCBbZGFpbHliYWNrdXAsIHNldERhaWx5QmFja3VwXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVEYWlseUJhY2t1cCA9IChkYWlseWJhY2t1cCkgPT5cclxuICAgIGRhaWx5YmFja3VwID8gXCIsRW5hYmxlZCBEYWlseSBCYWNrdXBcIiA6IFwiXCI7XHJcblxyXG4gIGNvbnN0IFt3aW5kb3dMaWNlbnNlLCBzZXRXaW5kb3dMaWNlbnNlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVXaW5kb3dMaWNlbnNlID0gKHdpbmRvd0xpY2Vuc2UpID0+XHJcbiAgICB3aW5kb3dMaWNlbnNlID8gXCIsSSBoYXZlIGEgV2luZG93cyBMaWNlbnNlXCIgOiBcIlwiO1xyXG5cclxuICBjb25zdCByZXNldE9uQ2FyZENoYW5nZSA9ICgpID0+e1xyXG4gICAgc2V0V2luZG93TGljZW5zZShmYWxzZSk7XHJcbiAgICBzZXREYWlseUJhY2t1cChmYWxzZSk7XHJcbiAgICBzZXRUeXBlKFwiXCIpO1xyXG4gICAgc2V0Q1BVKDApO1xyXG4gICAgc2V0UmFtKDApO1xyXG4gIHNldFN0b3JhZ2UoMCk7XHJcbn1cclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCIgaWQ9XCJwcmljaW5nXCI+XHJcbiAgICA8Qm94IG14PVwiYXV0b1wiIHdpZHRoPXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjEwMCVcIiwgXCI5MCVcIiBdfSBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgIDxGYWRlIGNhc2NhZGUgZHVyYXRpb249ezUwMH0gZGlzdGFuY2U9e1wiMzAlXCJ9IGJvdHRvbT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAge3BsYW5zLm1hcCgocGxhbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3BsYW4uaW5kZXh9IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC1zbS02IG15LTNcIj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICBpY29uPXtwbGFuLmljb259XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlPXtwbGFuLm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIHBvcHVsYXI9e3BsYW4ucG9wdWxhcn1cclxuICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e3BsYW4uZmVhdHVyZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTMgYnRuLWJsb2NrIHByaW1hcnktYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaGFuZGxlUGxhbihwbGFuLm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgb3BlbkNvbnRyb2xzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNldE9uQ2FyZENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBHZXQgU3RhcnRlZFxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvUHJpY2luZ0NhcmQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgICBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvRmFkZT5cclxuICAgIDwvQm94PlxyXG4gICAgPGRpdiBpZD1cImNvbGxhcHNlLTFcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPENvbGxhcHNlIGlkPVwicXVvdGVGb3JtXCIgY2xhc3NOYW1lPVwicHgtbGctNSBweC0zXCIgbXQ9ezZ9IGlzT3Blbj17c2hvd30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTUgYm9yZGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXk1IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIEN1c3RvbWl6ZSBZb3VyIHtwbGFuTmFtZX0gUGxhblxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweC0zXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIG10LTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDZcIj5DaG9vc2UgYSBUeXBlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8UmFkaW9CdXR0b25Hcm91cFxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZX1cclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSkgPT4gc2V0VHlwZSh2YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIG10PXs0fVxyXG4gICAgICAgICAgICAgICAgICBpc0lubGluZVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8Q3VzdG9tUmFkaW8gdmFsdWU9XCIsRGFpbHkgQmFja3Vwc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIERhaWx5IEJhY2t1cHNcclxuICAgICAgICAgICAgICAgICAgPC9DdXN0b21SYWRpbz5cclxuICAgICAgICAgICAgICAgICAgPEN1c3RvbVJhZGlvIHZhbHVlPVwiLEhvdXJseSBTbmFwc2hvdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICBIb3VybHkgU25hcHNob3RzXHJcbiAgICAgICAgICAgICAgICAgIDwvQ3VzdG9tUmFkaW8+XHJcbiAgICAgICAgICAgICAgICA8L1JhZGlvQnV0dG9uR3JvdXA+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMiBtdC00XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNlwiPkV4dGVuZCBTU0QgU3RvcmFnZSAoaW4gR0IpPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFNsaWRlclxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgIG15PVwiMThweFwiXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9ezB9XHJcbiAgICAgICAgICAgICAgICBtaW49ezB9XHJcbiAgICAgICAgICAgICAgICBtYXg9ezIyfVxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3N0b3JhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3RvcmFnZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyVHJhY2sgaD1cIjE2cHhcIiBib3JkZXJSYWRpdXM9XCI4cHhcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlckZpbGxlZFRyYWNrIGg9XCIxNnB4XCIgYm9yZGVyUmFkaXVzPVwiOHB4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJUaHVtYlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3ctbWRcIlxyXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIm1kXCJcclxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjgwMFwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiYXV0b1wiXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc9XCI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzMnB4XCJcclxuICAgICAgICAgICAgICAgICAgY2hpbGRyZW49ezgwICsgc3RvcmFnZSAqIDggfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyIG10LTRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg2XCI+QWRkaXRpb25hbCBNZW1vcnkgKGluIEdCKTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBteT1cIjE4cHhcIlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXswfVxyXG4gICAgICAgICAgICAgICAgbWF4PVwiNjRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3JhbX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVSYW19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNsaWRlclRyYWNrIGg9XCIxNnB4XCIgYm9yZGVyUmFkaXVzPVwiOHB4XCIgLz5cclxuICAgICAgICAgICAgICAgIDxTbGlkZXJGaWxsZWRUcmFjayBoPVwiMTZweFwiIGJvcmRlclJhZGl1cz1cIjhweFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8U2xpZGVyVGh1bWJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2hhZG93LW1kXCJcclxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCJtZFwiXHJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI4MDBcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cImF1dG9cIlxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nPVwiOHB4XCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzJweFwiXHJcbiAgICAgICAgICAgICAgICAgIGNoaWxkcmVuPXtyYW0qMn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgbXQtNFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDZcIj5BZGRpdGlvbmFsIHZDUFVzPC9kaXY+XHJcbiAgICAgICAgICAgICAgPE51bWJlcklucHV0XHJcbiAgICAgICAgICAgICAgICBtYXhXaWR0aD1cIjE2MHB4XCJcclxuICAgICAgICAgICAgICAgIG1pbj17MH1cclxuICAgICAgICAgICAgICAgIG1heD17NjB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y3B1fVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh2YWx1ZSk9Pnt2YWx1ZTw9NjA/c2V0Q1BVKHZhbHVlKTpzZXRDUFUoNjApfX1cclxuICAgICAgICAgICAgICAgIHN0ZXA9e2NwdTwyPzE6Mn1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRGaWVsZCBjbGFzc05hbWU9XCJiZy1saWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8TnVtYmVySW5wdXRTdGVwcGVyPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVySW5jcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgICA8TnVtYmVyRGVjcmVtZW50U3RlcHBlciAvPlxyXG4gICAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dFN0ZXBwZXI+XHJcbiAgICAgICAgICAgICAgPC9OdW1iZXJJbnB1dD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IG10LTQgcHQtbWQtNCBwYi0xIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtbWQtZW5kIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxQcmljaW5nUXVvdGVcclxuICAgICAgICAgICAgICBzZXJ2aWNlTmFtZT1cIkRhdGFiYXNlIEFzIEEgU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICBzZXJ2aWNlRGVzY3JpcHRpb249e2Ake3BsYW5OYW1lfSAke3R5cGV9ICR7dmVyaWZ5Tm90RW1wdHkoXHJcbiAgICAgICAgICAgICAgICAgIHN0b3JhZ2UgKiA4LFxyXG4gICAgICAgICAgICAgICAgICBcIkdCIEFkZGl0aW9uYWwgU3RvcmFnZVwiXHJcbiAgICAgICAgICAgICAgICApfSAke3ZlcmlmeU5vdEVtcHR5KHJhbSoyLCBcIkdCIE1lbW9yeVwiKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgJHt2ZXJpZnlOb3RFbXB0eShcclxuICAgICAgICAgICAgICAgICAgY3B1LFxyXG4gICAgICAgICAgICAgICAgICBcIkFkZGl0aW9uYWwgdkNQVXNcIlxyXG4gICAgICAgICAgICAgICAgKX1gfVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uXHJcbiAgICAgICAgICAgICAgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0NvbGxhcHNlPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERiYWFzUHJpY2luZztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xyXG5pbXBvcnQgeyBQcmljaW5nQ2FyZCwgUHJpY2luZ1F1b3RlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9jYXJkcy9QcmljaW5nQ2FyZCdcclxuXHJcbmZ1bmN0aW9uIFByb3h5UHJpY2luZyhwcm9wcykge1xyXG4gIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxGYWRlIGR1cmF0aW9uPXs1MDB9IGJvdHRvbT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHB4LWxnLTJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZCB0aXRsZT17PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBTaW5nbGUgU2hhcmVkIFByb3h5IDxici8+IDxzbWFsbD4gKFBlciBNYnBzKSA8L3NtYWxsPiA8L2Rpdj59IGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9zZWN1cml0eS5zdmdcIiBmZWF0dXJlTGlzdD17W1wiU2luZ2xlIENvcHlcIiwgXCJTaW5nbGUgTG9jYXRpb25cIiwgXCJSZWxpYWJsZSAmIFNlY3VyZVwiLCBcIkNvc3QgRWZmZWN0aXZlXCJdfT5cclxuICAgICAgICAgICAgICAgICAgPFByaWNpbmdRdW90ZSBidXR0b25TdHlsZT1cIm10LTNcIiBidXR0b24gc2VydmljZU5hbWU9XCJQcm94eSBBcyBBIFNlcnZpY2VcIiBzZXJ2aWNlRGVzY3JpcHRpb249XCJTaW5nbGUgU2hhcmVkIFByb3h5XCIgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00IG15LTNcIj5cclxuICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZCB0aXRsZT17PGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPiBDbHVzdGVyIFNoYXJlZCBQcm94eSA8YnIvPiA8c21hbGw+IChQZXIgTWJwcykgPC9zbWFsbD4gPC9kaXY+fSBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvc2VjdXJpdHkuc3ZnXCIgZmVhdHVyZUxpc3Q9e1tcIk11bHRpcGxlIENvcGllc1wiLCBcIlNpbmdsZSBMb2NhdGlvblwiLCBcIlJlbGlhYmxlICYgU2VjdXJlXCIsIFwiQ29zdCBFZmZlY3RpdmVcIl19PlxyXG4gICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlIGJ1dHRvblN0eWxlPVwibXQtM1wiIGJ1dHRvbiBzZXJ2aWNlTmFtZT1cIlByb3h5IEFzIEEgU2VydmljZVwiIHNlcnZpY2VEZXNjcmlwdGlvbj1cIkNsdXN0ZXIgU2hhcmVkIFByb3h5XCIgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm94eVByaWNpbmc7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge1xyXG4gICAgVGFicyxcclxuICAgIFRhYkxpc3QsXHJcbiAgICBUYWIsXHJcbiAgICBUYWJQYW5lbCxcclxuICAgIFRhYlBhbmVscyxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gXCJyZWFjdC1yZXZlYWwvRmFkZVwiO1xyXG5pbXBvcnQgeyBQcmljaW5nQ2FyZCwgUHJpY2luZ1F1b3RlIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvUHJpY2luZ0NhcmRcIjtcclxuXHJcblxyXG5mdW5jdGlvbiBTZHdhblByaWNpbmcocHJvcHMpIHtcclxuICAgIGNvbnN0IGZlYXR1cmVzID0gW1wiSGlnaC1wZXJmb3JtYW5jZSByb3V0ZXNcIiwgXCJGdWxseSBNYW5hZ2VkIFNlcnZpY2VcIl07XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInByaWNpbmdcIiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFicyBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJMaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NiBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBoeXNpY2FsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiIGNsYXNzTmFtZT1cInB5LTQgcHgtNSBkaXNwbGF5NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlydHVhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYkxpc3Q+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbHM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJQYW5lbCBjbGFzc05hbWU9XCJweS0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2U9e1wiMzAlXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbm8tZ3V0dGVycyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTUgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByaWNpbmdDYXJkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZUxpc3Q9e2ZlYXR1cmVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCIvYXNzZXRzL2ltYWdlcy9pY29ucy90aGVtZS9nbG9iZS5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiU2luZ2xlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBidG4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZU5hbWU9XCJTRC1XQU4gQXMgQSBTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj1cIlBoeXNpY2FsLCBTaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17ZmVhdHVyZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2dsb2JlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDbHVzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBidG4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZU5hbWU9XCJTRC1XQU4gQXMgQSBTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj1cIlBoeXNpY2FsLCBDbHVzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvUHJpY2luZ1F1b3RlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QcmljaW5nQ2FyZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFiUGFuZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGFiUGFuZWwgY2xhc3NOYW1lPVwicHktMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3RhbmNlPXtcIjMwJVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG5vLWd1dHRlcnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy01IG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nQ2FyZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZlYXR1cmVMaXN0PXtmZWF0dXJlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGhlbWUvZ2xvYmUuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlNpbmdsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYnRuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ1F1b3RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VOYW1lPVwiU0QtV0FOIEFzIEEgU2VydmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlRGVzY3JpcHRpb249XCJWaXJ0dWFsLCBTaW5nbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNSBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpY2luZ0NhcmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmZWF0dXJlTGlzdD17ZmVhdHVyZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL3RoZW1lL2dsb2JlLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDbHVzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBidG4gYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcmljaW5nUXVvdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VydmljZU5hbWU9XCJTRC1XQU4gQXMgQSBTZXJ2aWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlcnZpY2VEZXNjcmlwdGlvbj1cIlZpcnR1YWwsIENsdXN0ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9QcmljaW5nUXVvdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1ByaWNpbmdDYXJkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJQYW5lbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYlBhbmVscz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFicz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2R3YW5QcmljaW5nOyJdLCJzb3VyY2VSb290IjoiIn0=