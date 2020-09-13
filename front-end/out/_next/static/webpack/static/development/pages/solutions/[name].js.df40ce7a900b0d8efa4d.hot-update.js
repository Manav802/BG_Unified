webpackHotUpdate("static\\development\\pages\\solutions\\[name].js",{

/***/ "./src/components/GetaQuote/main.jsx":
/*!*******************************************!*\
  !*** ./src/components/GetaQuote/main.jsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _apiKeys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../apiKeys */ "./src/apiKeys.js");
/* harmony import */ var _Toast_main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Toast/main */ "./src/components/Toast/main.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\components\\GetaQuote\\main.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function GetaQuoteForm(props) {
  _s();

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"])();
  const {
    0: name,
    1: setName
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: message,
    1: setMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: phone,
    1: setPhone
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let form = {
    name: name,
    email: email,
    message: message,
    phone: phone,
    serviceName: props.serviceName,
    serviceDescription: props.serviceDescription
  };
  const {
    0: isLoading,
    1: loadingState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: formResponse,
    1: setResponse
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const onChange = event => {
    const target = event.target;
    const fieldname = target.name;
    const value = target.value;

    switch (fieldname) {
      case 'name':
        setName(value);
        break;

      case 'message':
        setMessage(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'email':
        setEmail(value);
        break;

      default:
        break;
    }
  };

  const refreshForm = res => {
    loadingState(false);
    console.log(res);
    setResponse(res);
    setResponse('');
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');

    if (res.status == 200) {
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  const formClose = () => {
    setResponse('');
    setName('');
    setEmail('');
    setMessage('');
    setPhone('');
    onClose();
  };

  const onSubmit = event => {
    event.preventDefault();
    loadingState(true);
    fetch(' https://submit-form.com/' + _apiKeys__WEBPACK_IMPORTED_MODULE_2__["default"].GetaQuote, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(form)
    }).then(response => refreshForm(response), error => refreshForm(error));
  };

  var description = props.serviceDescription.split(',');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !props.button && __jsx("div", {
    className: "mt-3 w-100 px-3 d-flex justify-content-between",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 9
    }
  }, props.title && __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 27
    }
  }, props.title), __jsx("a", {
    className: "",
    onClick: onOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  }, "Get a quote")), props.button && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    size: "lg",
    className: props.buttonStyle,
    variant: "outline",
    variantColor: "primary",
    onClick: onOpen,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 9
    }
  }, "Get a quote"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    isOpen: isOpen,
    onClose: formClose,
    isCentered: true,
    scrollBehavior: "inside",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalOverlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalContent"], {
    maxWidth: ["400px", "400px", "600px"],
    maxHeight: "700px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalBody"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalHeader"], {
    mt: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: "display5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 33
    }
  }, props.serviceName)), __jsx("div", {
    className: "d-flex flex-wrap px-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }, description.map((service, index) => {
    return __jsx("div", {
      className: "rounded-8 hover-effect bg-light m-2 py-2 px-3",
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 17
      }
    }, service);
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["ModalCloseButton"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    m: 2,
    className: "container contact-form",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("form", {
    onSubmit: onSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 15
    }
  }, __jsx("input", {
    type: "hidden",
    name: "_redirect",
    value: "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "serviceName",
    value: form.serviceName,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }), __jsx("input", {
    type: "hidden",
    name: "serviceDescription",
    value: form.serviceDescription,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 17
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    isRequired: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: "name",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 19
    }
  }, "Name:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    variant: "flushed",
    type: "text",
    name: "name",
    value: form.name,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 19
    }
  })), __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    mt: "14%",
    isRequired: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 23
    }
  }, "Email:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    variant: "flushed",
    type: "email",
    name: "email",
    value: form.email,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 23
    }
  }))), __jsx("div", {
    className: "col-md-6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    mt: "14%",
    isRequired: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    htmlFor: "phone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 23
    }
  }, "Contact No."), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "tel",
    pattern: "[0-9]{10}",
    variant: "flushed",
    name: "phone",
    value: form.phone,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 23
    }
  })))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormControl"], {
    mt: "9%",
    isRequired: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["FormLabel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 19
    }
  }, "Details:"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Textarea"], {
    resize: "vertical",
    variant: "flushed",
    size: "lg",
    name: "message",
    value: form.message,
    onChange: onChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 19
    }
  })), __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    mt: 10,
    type: "submit",
    size: "lg",
    variantColor: "primary",
    className: "primary-btn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 19
    }
  }, "Submit", isLoading && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
    thickness: "4px",
    speed: "1s",
    emptyColor: "gray.200",
    color: "blue.500",
    size: "sm",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 40
    }
  }))))), formResponse && __jsx(_Toast_main__WEBPACK_IMPORTED_MODULE_3__["default"], {
    response: formResponse,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 30
    }
  })))));
}

_s(GetaQuoteForm, "q/YP4zGE+wHp/A2NC14Ln3xcyx0=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_1__["useDisclosure"]];
});

_c = GetaQuoteForm;
/* harmony default export */ __webpack_exports__["default"] = (GetaQuoteForm);

var _c;

$RefreshReg$(_c, "GetaQuoteForm");

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HZXRhUXVvdGUvbWFpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VCdWlsZGVyL3BhZ2VzL3NvbHV0aW9ucy9zZHdhbi5qc3giXSwibmFtZXMiOlsiR2V0YVF1b3RlRm9ybSIsInByb3BzIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZURpc2Nsb3N1cmUiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicGhvbmUiLCJzZXRQaG9uZSIsImZvcm0iLCJzZXJ2aWNlTmFtZSIsInNlcnZpY2VEZXNjcmlwdGlvbiIsImlzTG9hZGluZyIsImxvYWRpbmdTdGF0ZSIsImZvcm1SZXNwb25zZSIsInNldFJlc3BvbnNlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpZWxkbmFtZSIsInZhbHVlIiwicmVmcmVzaEZvcm0iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2V0VGltZW91dCIsImZvcm1DbG9zZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImtleXMiLCJHZXRhUXVvdGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJidXR0b24iLCJ0aXRsZSIsImJ1dHRvblN0eWxlIiwibWFwIiwic2VydmljZSIsImluZGV4IiwicHgiLCJ0eXBlIiwiZGF0YSIsImltYWdlIiwiZmxleERpcmVjdGlvbiIsInB5IiwiZ2FwIiwibXQiLCJiZyIsIndpZHRoIiwicm93RGlzdGFuY2UiLCJ0aXRsZVNpemUiLCJ0aXRsZUZvbnQiLCJ0ZXh0T3BhY2l0eSIsImFsaWduIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR0E7QUFDQTs7QUFDQSxTQUFTQSxhQUFULENBQXVCQyxLQUF2QixFQUE4QjtBQUFBOztBQUM1QixRQUFNO0FBQUVDLFVBQUY7QUFBVUMsVUFBVjtBQUFrQkM7QUFBbEIsTUFBOEJDLHFFQUFhLEVBQWpEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JGLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUNBLFFBQU07QUFBQSxPQUFDRyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3Qkosc0RBQVEsQ0FBQyxFQUFELENBQXRDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLEtBQUQ7QUFBQSxPQUFRQztBQUFSLE1BQW9CTixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFDQSxNQUFJTyxJQUFJLEdBQUc7QUFDVFQsUUFBSSxFQUFFQSxJQURHO0FBRVRHLFNBQUssRUFBRUEsS0FGRTtBQUdURSxXQUFPLEVBQUVBLE9BSEE7QUFJVEUsU0FBSyxFQUFFQSxLQUpFO0FBS1RHLGVBQVcsRUFBRWYsS0FBSyxDQUFDZSxXQUxWO0FBTVRDLHNCQUFrQixFQUFFaEIsS0FBSyxDQUFDZ0I7QUFOakIsR0FBWDtBQVFBLFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qlgsc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQ0EsUUFBTTtBQUFBLE9BQUNZLFlBQUQ7QUFBQSxPQUFlQztBQUFmLE1BQThCYixzREFBUSxDQUFDLEVBQUQsQ0FBNUM7O0FBQ0EsUUFBTWMsUUFBUSxHQUFJQyxLQUFELElBQVc7QUFDMUIsVUFBTUMsTUFBTSxHQUFHRCxLQUFLLENBQUNDLE1BQXJCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRCxNQUFNLENBQUNsQixJQUF6QjtBQUNBLFVBQU1vQixLQUFLLEdBQUdGLE1BQU0sQ0FBQ0UsS0FBckI7O0FBQ0EsWUFBUUQsU0FBUjtBQUNFLFdBQUssTUFBTDtBQUNFbEIsZUFBTyxDQUFDbUIsS0FBRCxDQUFQO0FBQ0E7O0FBRUYsV0FBSyxTQUFMO0FBQ0VkLGtCQUFVLENBQUNjLEtBQUQsQ0FBVjtBQUNBOztBQUVGLFdBQUssT0FBTDtBQUNFWixnQkFBUSxDQUFDWSxLQUFELENBQVI7QUFDQTs7QUFFRixXQUFLLE9BQUw7QUFDRWhCLGdCQUFRLENBQUNnQixLQUFELENBQVI7QUFDQTs7QUFFRjtBQUNFO0FBbEJKO0FBb0JELEdBeEJEOztBQXlCQSxRQUFNQyxXQUFXLEdBQUlDLEdBQUQsSUFBUztBQUMzQlQsZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQVUsV0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7QUFDQVAsZUFBVyxDQUFDTyxHQUFELENBQVg7QUFDQVAsZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBZCxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FHLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBRSxZQUFRLENBQUMsRUFBRCxDQUFSOztBQUNBLFFBQUljLEdBQUcsQ0FBQ0csTUFBSixJQUFjLEdBQWxCLEVBQXVCO0FBQ3JCQyxnQkFBVSxDQUFDLE1BQU07QUFDZjVCLGVBQU87QUFDUixPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0Q7QUFDRixHQWREOztBQWVBLFFBQU02QixTQUFTLEdBQUcsTUFBTTtBQUN0QlosZUFBVyxDQUFDLEVBQUQsQ0FBWDtBQUNBZCxXQUFPLENBQUMsRUFBRCxDQUFQO0FBQ0FHLFlBQVEsQ0FBQyxFQUFELENBQVI7QUFDQUUsY0FBVSxDQUFDLEVBQUQsQ0FBVjtBQUNBRSxZQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0FWLFdBQU87QUFDUixHQVBEOztBQVFBLFFBQU04QixRQUFRLEdBQUlYLEtBQUQsSUFBVztBQUMxQkEsU0FBSyxDQUFDWSxjQUFOO0FBQ0FoQixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBaUIsU0FBSyxDQUFDLDhCQUE4QkMsZ0RBQUksQ0FBQ0MsU0FBcEMsRUFBK0M7QUFDbERDLFlBQU0sRUFBRSxNQUQwQztBQUVsREMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCLGtCQURUO0FBRVBDLGNBQU0sRUFBRTtBQUZELE9BRnlDO0FBTWxEQyxVQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlN0IsSUFBZjtBQU40QyxLQUEvQyxDQUFMLENBUUc4QixJQVJILENBUVNDLFFBQUQsSUFBY25CLFdBQVcsQ0FBQ21CLFFBQUQsQ0FSakMsRUFROENDLEtBQUQsSUFBV3BCLFdBQVcsQ0FBQ29CLEtBQUQsQ0FSbkU7QUFTRCxHQVpEOztBQWFBLE1BQUlDLFdBQVcsR0FBRy9DLEtBQUssQ0FBQ2dCLGtCQUFOLENBQXlCZ0MsS0FBekIsQ0FBK0IsR0FBL0IsQ0FBbEI7QUFDQSxTQUNFLG1FQUNHLENBQUNoRCxLQUFLLENBQUNpRCxNQUFQLElBQ0M7QUFBSyxhQUFTLEVBQUMsZ0RBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHakQsS0FBSyxDQUFDa0QsS0FBTixJQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSWxELEtBQUssQ0FBQ2tELEtBQVYsQ0FEbEIsRUFFRTtBQUFHLGFBQVMsRUFBQyxFQUFiO0FBQWdCLFdBQU8sRUFBRWhELE1BQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FGSixFQVNHRixLQUFLLENBQUNpRCxNQUFOLElBQ0MsTUFBQyxzREFBRDtBQUNFLFFBQUksRUFBQyxJQURQO0FBRUUsYUFBUyxFQUFFakQsS0FBSyxDQUFDbUQsV0FGbkI7QUFHRSxXQUFPLEVBQUMsU0FIVjtBQUlFLGdCQUFZLEVBQUMsU0FKZjtBQUtFLFdBQU8sRUFBRWpELE1BTFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWSixFQW9CRSxNQUFDLHFEQUFEO0FBQU8sVUFBTSxFQUFFRCxNQUFmO0FBQXVCLFdBQU8sRUFBRStCLFNBQWhDO0FBQTJDLGNBQVUsTUFBckQ7QUFBc0Qsa0JBQWMsRUFBQyxRQUFyRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDREQUFEO0FBQWMsWUFBUSxFQUFFLENBQUMsT0FBRCxFQUFVLE9BQVYsRUFBbUIsT0FBbkIsQ0FBeEI7QUFBcUQsYUFBUyxFQUFDLE9BQS9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJEQUFEO0FBQWEsTUFBRSxFQUFFLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0I7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE0QmhDLEtBQUssQ0FBQ2UsV0FBbEMsQ0FBcEIsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFDLHVCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0NnQyxXQUFXLENBQUNLLEdBQVosQ0FBZ0IsQ0FBQ0MsT0FBRCxFQUFVQyxLQUFWLEtBQW9CO0FBQzFFLFdBQ0U7QUFBSyxlQUFTLEVBQUMsK0NBQWY7QUFBK0QsU0FBRyxFQUFFQSxLQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQTRFRCxPQUE1RSxDQURGO0FBR0QsR0FKdUMsQ0FBeEMsQ0FGRixFQU9FLE1BQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVBGLEVBUUUsTUFBQyxtREFBRDtBQUFLLEtBQUMsRUFBRSxDQUFSO0FBQVcsYUFBUyxFQUFDLHdCQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxZQUFRLEVBQUVwQixRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUksRUFBQyxXQUZQO0FBR0UsU0FBSyxFQUFDLE9BSFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBTUU7QUFDRSxRQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUksRUFBQyxhQUZQO0FBR0UsU0FBSyxFQUFFbkIsSUFBSSxDQUFDQyxXQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixFQVdFO0FBQ0UsUUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFJLEVBQUMsb0JBRlA7QUFHRSxTQUFLLEVBQUVELElBQUksQ0FBQ0Usa0JBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLEVBZ0JFLE1BQUMsMkRBQUQ7QUFBYSxjQUFVLE1BQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlEQUFEO0FBQVcsV0FBTyxFQUFDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMscURBQUQ7QUFDRSxXQUFPLEVBQUMsU0FEVjtBQUVFLFFBQUksRUFBQyxNQUZQO0FBR0UsUUFBSSxFQUFDLE1BSFA7QUFJRSxTQUFLLEVBQUVGLElBQUksQ0FBQ1QsSUFKZDtBQUtFLFlBQVEsRUFBRWdCLFFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBaEJGLEVBMEJFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBYSxNQUFFLEVBQUUsS0FBakI7QUFBd0IsY0FBVSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFXLFdBQU8sRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRSxNQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFDLFNBRFY7QUFFRSxRQUFJLEVBQUMsT0FGUDtBQUdFLFFBQUksRUFBQyxPQUhQO0FBSUUsU0FBSyxFQUFFUCxJQUFJLENBQUNOLEtBSmQ7QUFLRSxZQUFRLEVBQUVhLFFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FERixFQWFFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsMkRBQUQ7QUFBYSxNQUFFLEVBQUUsS0FBakI7QUFBd0IsY0FBVSxNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5REFBRDtBQUFXLFdBQU8sRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLEVBRUUsTUFBQyxxREFBRDtBQUNFLFFBQUksRUFBQyxLQURQO0FBRUUsV0FBTyxFQUFDLFdBRlY7QUFHRSxXQUFPLEVBQUMsU0FIVjtBQUlFLFFBQUksRUFBQyxPQUpQO0FBS0UsU0FBSyxFQUFFUCxJQUFJLENBQUNGLEtBTGQ7QUFNRSxZQUFRLEVBQUVTLFFBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsQ0FiRixDQTFCRixFQXFERSxNQUFDLDJEQUFEO0FBQWEsTUFBRSxFQUFFLElBQWpCO0FBQXVCLGNBQVUsTUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixFQUVFLE1BQUMsd0RBQUQ7QUFDRSxVQUFNLEVBQUUsVUFEVjtBQUVFLFdBQU8sRUFBQyxTQUZWO0FBR0UsUUFBSSxFQUFDLElBSFA7QUFJRSxRQUFJLEVBQUMsU0FKUDtBQUtFLFNBQUssRUFBRVAsSUFBSSxDQUFDSixPQUxkO0FBTUUsWUFBUSxFQUFFVyxRQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQXJERixFQWdFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxzREFBRDtBQUNFLE1BQUUsRUFBRSxFQUROO0FBRUUsUUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFJLEVBQUMsSUFIUDtBQUlFLGdCQUFZLEVBQUMsU0FKZjtBQUtFLGFBQVMsRUFBQyxhQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFNUUosU0FBUyxJQUFJLE1BQUMsdURBQUQ7QUFDbkIsYUFBUyxFQUFDLEtBRFM7QUFFbkIsU0FBSyxFQUFDLElBRmE7QUFHbkIsY0FBVSxFQUFDLFVBSFE7QUFJbkIsU0FBSyxFQUFDLFVBSmE7QUFLbkIsUUFBSSxFQUFDLElBTGM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5yQixDQURGLENBaEVGLENBREYsQ0FSRixFQTBGR0UsWUFBWSxJQUFJLE1BQUMsbURBQUQ7QUFBTyxZQUFRLEVBQUVBLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExRm5CLENBREYsQ0FGRixDQXBCRixDQURGO0FBd0hEOztHQXRNUXBCLGE7VUFDNkJLLDZEOzs7S0FEN0JMLGE7QUF1TU1BLDRFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdNQTtBQUVlLGdFQUNYO0FBQ0l3RCxJQUFFLEVBQUUsQ0FEUjtBQUVJZCxNQUFJLEVBQUUsQ0FDRjtBQUNJZSxRQUFJLEVBQUUsWUFEVjtBQUVJQyxRQUFJLEVBQUU7QUFDRkMsV0FBSyxFQUFFLHdEQURMO0FBRUZSLFdBQUssRUFBRSxpQ0FGTDtBQUdGUyxtQkFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsYUFBckIsQ0FIYjtBQUlGWixpQkFBVyxFQUFFO0FBSlg7QUFGVixHQURFO0FBRlYsQ0FEVyxFQWVYO0FBQ0lhLElBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBRFI7QUFFSUMsS0FBRyxFQUFFLENBRlQ7QUFFWUMsSUFBRSxFQUFFLENBRmhCO0FBR0lDLElBQUUsRUFBRSxXQUhSO0FBSUl0QixNQUFJLEVBQUUsQ0FBQztBQUNIdUIsU0FBSyxFQUFFLE1BREo7QUFFSFIsUUFBSSxFQUFFLFNBRkg7QUFHSEMsUUFBSSxFQUFFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhILEdBQUQ7QUFKVixDQWZXLEVBMEJYO0FBQ0lGLElBQUUsRUFBRSxDQURSO0FBRUlMLE9BQUssRUFBRSxxREFGWDtBQUdJSCxhQUFXLEVBQUUsOE9BSGpCO0FBSUljLEtBQUcsRUFBRSxFQUpUO0FBS0lJLGFBQVcsRUFBRSxDQUxqQjtBQU1JeEIsTUFBSSxFQUFFLENBQ0Y7QUFDSW1CLE1BQUUsRUFBRSxDQURSO0FBRUlJLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQUksQ0FBckIsQ0FGWDtBQUdJUixRQUFJLEVBQUUsVUFIVjtBQUlJQyxRQUFJLEVBQUU7QUFDRlMsZUFBUyxFQUFFLElBRFQ7QUFFRkMsZUFBUyxFQUFFLFdBRlQ7QUFHRkMsaUJBQVcsRUFBRSxLQUhYO0FBSUZWLFdBQUssRUFBRSx1Q0FKTDtBQUtGUixXQUFLLEVBQUUscUJBTEw7QUFNRm1CLFdBQUssRUFBRSxNQU5MO0FBT0ZDLFVBQUksRUFBRSxNQVBKO0FBUUZ2QixpQkFBVyxFQUFFO0FBUlg7QUFKVixHQURFLEVBZ0JGO0FBQ0lhLE1BQUUsRUFBRSxDQURSO0FBRUlJLFNBQUssRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLElBQUksQ0FBckIsQ0FGWDtBQUdJUixRQUFJLEVBQUUsVUFIVjtBQUlJQyxRQUFJLEVBQUU7QUFDRlMsZUFBUyxFQUFFLElBRFQ7QUFFRkMsZUFBUyxFQUFFLFdBRlQ7QUFHRkMsaUJBQVcsRUFBRSxLQUhYO0FBSUZWLFdBQUssRUFBRSxxQ0FKTDtBQUtGUixXQUFLLEVBQUUsMkJBTEw7QUFNRm1CLFdBQUssRUFBRSxNQU5MO0FBT0ZDLFVBQUksRUFBRSxNQVBKO0FBUUZ2QixpQkFBVyxFQUFFO0FBUlg7QUFKVixHQWhCRSxFQStCRjtBQUNJYSxNQUFFLEVBQUUsQ0FEUjtBQUVJSSxTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixJQUFJLENBQXJCLENBRlg7QUFHSVIsUUFBSSxFQUFFLFVBSFY7QUFJSUMsUUFBSSxFQUFFO0FBQ0ZTLGVBQVMsRUFBRSxJQURUO0FBRUZDLGVBQVMsRUFBRSxXQUZUO0FBR0ZDLGlCQUFXLEVBQUUsS0FIWDtBQUlGVixXQUFLLEVBQUUsNENBSkw7QUFLRlIsV0FBSyxFQUFFLHdCQUxMO0FBTUZtQixXQUFLLEVBQUUsTUFOTDtBQU9GQyxVQUFJLEVBQUUsTUFQSjtBQVFGdkIsaUJBQVcsRUFBRTtBQVJYO0FBSlYsR0EvQkUsRUE4Q0Y7QUFDSWEsTUFBRSxFQUFFLENBRFI7QUFFSUksU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsSUFBSSxDQUFyQixDQUZYO0FBR0lSLFFBQUksRUFBRSxVQUhWO0FBSUlDLFFBQUksRUFBRTtBQUNGUyxlQUFTLEVBQUUsSUFEVDtBQUVGQyxlQUFTLEVBQUUsV0FGVDtBQUdGQyxpQkFBVyxFQUFFLEtBSFg7QUFJRlYsV0FBSyxFQUFFLHFDQUpMO0FBS0ZSLFdBQUssRUFBRSxxQkFMTDtBQU1GbUIsV0FBSyxFQUFFLE1BTkw7QUFPRkMsVUFBSSxFQUFFLE1BUEo7QUFRRnZCLGlCQUFXLEVBQUU7QUFSWDtBQUpWLEdBOUNFO0FBTlYsQ0ExQlcsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcc29sdXRpb25zXFxbbmFtZV0uanMuZGY0MGNlN2E5MDBiMGQ4ZWZhNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtcclxuICB1c2VEaXNjbG9zdXJlLCBGb3JtQ29udHJvbCwgRm9ybUxhYmVsLCBJbnB1dCwgQnV0dG9uLCBNb2RhbENvbnRlbnQsIE1vZGFsSGVhZGVyLCBNb2RhbENsb3NlQnV0dG9uLCBTcGlubmVyLCBNb2RhbCwgTW9kYWxPdmVybGF5LCBUZXh0YXJlYSwgTW9kYWxCb2R5LCBCb3hcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBrZXlzIGZyb20gJy4uLy4uL2FwaUtleXMnO1xyXG5pbXBvcnQgVG9hc3QgZnJvbSAnLi4vVG9hc3QvbWFpbic7XHJcbmZ1bmN0aW9uIEdldGFRdW90ZUZvcm0ocHJvcHMpIHtcclxuICBjb25zdCB7IGlzT3Blbiwgb25PcGVuLCBvbkNsb3NlIH0gPSB1c2VEaXNjbG9zdXJlKCk7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcGhvbmUsIHNldFBob25lXSA9IHVzZVN0YXRlKCcnKTtcclxuICBsZXQgZm9ybSA9IHtcclxuICAgIG5hbWU6IG5hbWUsXHJcbiAgICBlbWFpbDogZW1haWwsXHJcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxyXG4gICAgcGhvbmU6IHBob25lLFxyXG4gICAgc2VydmljZU5hbWU6IHByb3BzLnNlcnZpY2VOYW1lLFxyXG4gICAgc2VydmljZURlc2NyaXB0aW9uOiBwcm9wcy5zZXJ2aWNlRGVzY3JpcHRpb25cclxuICB9XHJcbiAgY29uc3QgW2lzTG9hZGluZywgbG9hZGluZ1N0YXRlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZm9ybVJlc3BvbnNlLCBzZXRSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcclxuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldFxyXG4gICAgY29uc3QgZmllbGRuYW1lID0gdGFyZ2V0Lm5hbWVcclxuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LnZhbHVlXHJcbiAgICBzd2l0Y2ggKGZpZWxkbmFtZSkge1xyXG4gICAgICBjYXNlICduYW1lJzpcclxuICAgICAgICBzZXROYW1lKHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ21lc3NhZ2UnOlxyXG4gICAgICAgIHNldE1lc3NhZ2UodmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAncGhvbmUnOlxyXG4gICAgICAgIHNldFBob25lKHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgJ2VtYWlsJzpcclxuICAgICAgICBzZXRFbWFpbCh2YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCByZWZyZXNoRm9ybSA9IChyZXMpID0+IHtcclxuICAgIGxvYWRpbmdTdGF0ZShmYWxzZSlcclxuICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICBzZXRSZXNwb25zZShyZXMpO1xyXG4gICAgc2V0UmVzcG9uc2UoJycpO1xyXG4gICAgc2V0TmFtZSgnJyk7XHJcbiAgICBzZXRFbWFpbCgnJyk7XHJcbiAgICBzZXRNZXNzYWdlKCcnKTtcclxuICAgIHNldFBob25lKCcnKTtcclxuICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBvbkNsb3NlKCk7XHJcbiAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCBmb3JtQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRSZXNwb25zZSgnJyk7XHJcbiAgICBzZXROYW1lKCcnKTtcclxuICAgIHNldEVtYWlsKCcnKTtcclxuICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgc2V0UGhvbmUoJycpO1xyXG4gICAgb25DbG9zZSgpO1xyXG4gIH1cclxuICBjb25zdCBvblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgbG9hZGluZ1N0YXRlKHRydWUpO1xyXG4gICAgZmV0Y2goJyBodHRwczovL3N1Ym1pdC1mb3JtLmNvbS8nICsga2V5cy5HZXRhUXVvdGUsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlZnJlc2hGb3JtKHJlc3BvbnNlKSwgKGVycm9yKSA9PiByZWZyZXNoRm9ybShlcnJvcikpXHJcbiAgfVxyXG4gIHZhciBkZXNjcmlwdGlvbiA9IHByb3BzLnNlcnZpY2VEZXNjcmlwdGlvbi5zcGxpdCgnLCcpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7IXByb3BzLmJ1dHRvbiAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0zIHctMTAwIHB4LTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICB7cHJvcHMudGl0bGUgJiYgPHA+e3Byb3BzLnRpdGxlfTwvcD59XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIiBvbkNsaWNrPXtvbk9wZW59PlxyXG4gICAgICAgICAgICBHZXQgYSBxdW90ZVxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgICB7cHJvcHMuYnV0dG9uICYmIChcclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtwcm9wcy5idXR0b25TdHlsZX1cclxuICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lXCJcclxuICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17b25PcGVufVxyXG4gICAgICAgID5cclxuICAgICAgICAgIEdldCBhIHF1b3RlXHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICl9XHJcbiAgICAgIDxNb2RhbCBpc09wZW49e2lzT3Blbn0gb25DbG9zZT17Zm9ybUNsb3NlfSBpc0NlbnRlcmVkIHNjcm9sbEJlaGF2aW9yPVwiaW5zaWRlXCI+XHJcbiAgICAgICAgPE1vZGFsT3ZlcmxheSAvPlxyXG4gICAgICAgIDxNb2RhbENvbnRlbnQgbWF4V2lkdGg9e1tcIjQwMHB4XCIsIFwiNDAwcHhcIiwgXCI2MDBweFwiXX0gbWF4SGVpZ2h0PVwiNzAwcHhcIj5cclxuICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgIDxNb2RhbEhlYWRlciBtdD17NH0+PHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTVcIj57cHJvcHMuc2VydmljZU5hbWV9PC9zcGFuPjwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtd3JhcCBweC0zXCI+e2Rlc2NyaXB0aW9uLm1hcCgoc2VydmljZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLTggaG92ZXItZWZmZWN0IGJnLWxpZ2h0IG0tMiBweS0yIHB4LTNcIiBrZXk9e2luZGV4fT57c2VydmljZX08L2Rpdj5cclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIH0pfTwvZGl2PlxyXG4gICAgICAgICAgICA8TW9kYWxDbG9zZUJ1dHRvbiAvPlxyXG4gICAgICAgICAgICA8Qm94IG09ezJ9IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWN0LWZvcm1cIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwiX3JlZGlyZWN0XCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VydmljZU5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5zZXJ2aWNlTmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZXJ2aWNlRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5zZXJ2aWNlRGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGlzUmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmx1c2hlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXtcIjE0JVwifSBpc1JlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDo8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmx1c2hlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXtcIjE0JVwifSBpc1JlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwicGhvbmVcIj5Db250YWN0IE5vLjwvRm9ybUxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV17MTB9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIG10PXtcIjklXCJ9IGlzUmVxdWlyZWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+RGV0YWlsczo8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPFRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplPXtcInZlcnRpY2FsXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgIDxkaXYgPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgbXQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHJpbWFyeS1idG5cIlxyXG4gICAgICAgICAgICAgICAgICA+U3VibWl0e2lzTG9hZGluZyAmJiA8U3Bpbm5lclxyXG4gICAgICAgICAgICAgICAgICAgIHRoaWNrbmVzcz1cIjRweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ9XCIxc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZW1wdHlDb2xvcj1cImdyYXkuMjAwXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImJsdWUuNTAwXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21cIlxyXG4gICAgICAgICAgICAgICAgICAvPn08L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHtmb3JtUmVzcG9uc2UgJiYgPFRvYXN0IHJlc3BvbnNlPXtmb3JtUmVzcG9uc2V9IC8+fVxyXG4gICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRlbnQ+XHJcbiAgICAgIDwvTW9kYWw+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgR2V0YVF1b3RlRm9ybTsiLCJpbXBvcnQgU2R3YW5QcmljaW5nIGZyb20gXCIuLi8uLi9wcmljaW5nL1Nkd2FuUHJpY2luZ1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgW1xyXG4gICAge1xyXG4gICAgICAgIHB4OiAyLFxyXG4gICAgICAgIGJvZHk6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZSZ0ZXh0XCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6IFwiL2Fzc2V0cy9pbWFnZXMvSWxsdXN0cmF0aW9ucy9DbGllbnRTcGVjaWZpY19BcHBEZXYuc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VjdXJlIENvbm5lY3Rpdml0eSB3aXRoIFNELVdBTlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFtcImNvbHVtblwiLCBcImNvbHVtblwiLCBcInJvdy1yZXZlcnNlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgdmlydHVhbCBXQU4gYXJjaGl0ZWN0dXJlLCBhbGxvd2luZyBmaXJtcyBvciBjb21wYW5pZXMgdG8gbGV2ZXJhZ2UgYW55IGNvbWJpbmF0aW9uIG9mIHNlcnZpY2VzLCBpbmNsdWRpbmcgTFRFLCBWb0xURSwgQnJvYWRiYW5kIHNlcnZpY2VzLCBXaUZpIFNlcnZpY2VzIGV0Yy4gdG8gc2VjdXJlbHkgY29ubmVjdCB1c2VycyB0byBhcHBsaWNhdGlvbnMuIFNELVdBTiB0cmFuc2Zvcm1zIHRoZSB3YXkgYSBwYXJ0aWN1bGFyIG5ldHdvcmsgc3VwcG9ydHMgYW5kIGludGVyYWN0cyB3aXRoIGVudGVycHJpc2UgYXBwbGljYXRpb25zLlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBweTogWzAsIDRdLFxyXG4gICAgICAgIGdhcDogMCwgbXQ6IDAsXHJcbiAgICAgICAgYmc6IFwibGlnaHQuNDAwXCIsXHJcbiAgICAgICAgYm9keTogW3tcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcInByaWNpbmdcIixcclxuICAgICAgICAgICAgZGF0YTogPFNkd2FuUHJpY2luZyAvPlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBweDogMixcclxuICAgICAgICB0aXRsZTogXCJGaW5kIG91dCBIb3cgQkdVUyBTRC1XQU4gd2lsbCBpbXByb3ZlIHlvdXIgbmV0d29yazpcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJOZXh0LWdlbmVyYXRpb24gV0FOIGNvbm5lY3Rpdml0eSBzZXJ2aWNlcy4gV2UgaGF2ZSBFeHByZXNzIFJvdXRlcyB0byBvZmZpY2UgMzY1LCBBV1MsIEF6dXJlIHRocm91Z2ggRXF1aW5peCBDbG91ZCBFeGNoYW5nZSBhbmQgYXJlIHBlZXJpbmcgd2l0aCBBU05zIGRpcmVjdGx5IGZvciBwcm92aWRpbmcgYmV0dGVyIGFuZCBoaWdoLXBlcmZvcm1hbmNlIHJvdXRlcyB0byBPZmZpY2UgMzY1LCBBenVyZSBhbmQgQVdTLlwiLFxyXG4gICAgICAgIGdhcDogMTAsXHJcbiAgICAgICAgcm93RGlzdGFuY2U6IDgsXHJcbiAgICAgICAgYm9keTogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL21vYmlsZS5zdmdcIixcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJWaXJ0dWFsIEZsZXhpYmlsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZHVzdHJ54oCZcyBvbmx5IG11bHRpLWdpZ2FiaXQgdmlydHVhbCBXQU4gb3B0aW1pemF0aW9uIHNvbHV0aW9uIGFuZCB0aGUgb25seSBwcm9kdWN0cyB0aGF0IHN1cHBvcnQgZXZlcnkgbWFqb3IgaHlwZXJ2aXNvci4gRW1haWwgKE1TIEV4Y2hhbmdlIGFuZCBTTVRQKSwgZmlsZSBzZXJ2aWNlcyAoQ0lGUywgRlRQKSwgZG9jdW1lbnQgbWFuYWdlbWVudChTaGFyZVBvaW50KS5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL3RhZ3Muc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiRGl2ZXJzaWZ5aW5nIEFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTaWx2ZXIgUGVhay8gUml2ZXJiZWTigJlzIFdBTiBvcHRpbWl6YXRpb24gc29sdXRpb24gd29ya3Mgb24gYWxsIGFwcGxpY2F0aW9ucywgcmVnYXJkbGVzcyBvZiB0cmFuc3BvcnQgcHJvdG9jb2wgb3IgdmVyc2lvbi4gSW50ZXJhY3RpdmUgYW5kIHRyYW5zYWN0aW9uYWwgYXBwbGljYXRpb25zIHN1Y2ggYXMgVk13YXJlIFZESSwgYW5kIFNRTC5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL2RhdGEtc2VydmVyLnN2Z1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0b3JhZ2UgQ2VudHJhbGl6YXRpb25cIixcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI1MHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiIEZhc3QsIFJlbGlhYmxlIGFuZCBJbmNyZWFzaW5nbHkgZWZmaWNpZW50IGNlbnRyYWxpemluZyBzZXJ2ZXJzIGFuZCBzdG9yYWdlIG9mZmVycyBzaWduaWZpY2FudCBjb3N0LCBtYW5hZ2VtZW50LCBzZWN1cml0eSBhbmQgY29tcGxpYW5jZSBiZW5lZml0cy4gRGV0ZWN0cywgaXNvbGF0ZXMgbm90aWZpZXMgYW5kIGNvcnJlY3RzIGZhdWx0cyBlbmNvdW50ZXJlZCBpbiB0aGUgbmV0d29yay5cIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBweTogNCxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBbXCIxMDAlXCIsIFwiMTAwJVwiLCAxIC8gMl0sXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcImZlYXR1cmUyXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVTaXplOiBcIm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVGb250OiBcIk5leGEgQm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRPcGFjaXR5OiBcIjAuN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBcIi9hc3NldHMvaW1hZ2VzL2ljb25zL2NvbG9yL2xvY2suc3ZnXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VjdXJpdHkgR3VhcmFudGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbGwgd2l0aG91dCByaXNrIG9mIGNvcnJ1cHRpbmcgZGF0YSBvciBhbHRlcmluZyBiZWhhdmlvdXIuIE5vIHBsdWctaW5zIGFyZSByZXF1aXJlZCwgd2hpY2ggZXhwZWRpdGVzIGRlcGxveW1lbnQgYW5kIHNhdmVzIGJvdGggdGltZSBhbmQgbW9uZXkuIEZhc3QsIFJlbGlhYmxlIGFuZCBJbmNyZWFzaW5nbHkgRWZmaWNpZW50LlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcbl0iXSwic291cmNlUm9vdCI6IiJ9