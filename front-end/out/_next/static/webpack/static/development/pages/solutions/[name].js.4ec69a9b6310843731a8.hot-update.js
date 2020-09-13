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
      columnNumber: 26
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
  }), __jsx("div", {
    className: "container",
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9HZXRhUXVvdGUvbWFpbi5qc3giXSwibmFtZXMiOlsiR2V0YVF1b3RlRm9ybSIsInByb3BzIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZURpc2Nsb3N1cmUiLCJuYW1lIiwic2V0TmFtZSIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwicGhvbmUiLCJzZXRQaG9uZSIsImZvcm0iLCJzZXJ2aWNlTmFtZSIsInNlcnZpY2VEZXNjcmlwdGlvbiIsImlzTG9hZGluZyIsImxvYWRpbmdTdGF0ZSIsImZvcm1SZXNwb25zZSIsInNldFJlc3BvbnNlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImZpZWxkbmFtZSIsInZhbHVlIiwicmVmcmVzaEZvcm0iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwic2V0VGltZW91dCIsImZvcm1DbG9zZSIsIm9uU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmZXRjaCIsImtleXMiLCJHZXRhUXVvdGUiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwicmVzcG9uc2UiLCJlcnJvciIsImRlc2NyaXB0aW9uIiwic3BsaXQiLCJidXR0b24iLCJ0aXRsZSIsImJ1dHRvblN0eWxlIiwibWFwIiwic2VydmljZSIsImluZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFHQTtBQUNBOztBQUNBLFNBQVNBLGFBQVQsQ0FBdUJDLEtBQXZCLEVBQThCO0FBQUE7O0FBQzVCLFFBQU07QUFBRUMsVUFBRjtBQUFVQyxVQUFWO0FBQWtCQztBQUFsQixNQUE4QkMscUVBQWEsRUFBakQ7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JDLHNEQUFRLENBQUMsRUFBRCxDQUFoQztB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O0FBS0UsYUFBUyxFQUFDLGFBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU1RSixTQUFTLElBQUksTUFBQyx1REFBRDtBQUNuQixhQUFTLEVBQUMsS0FEUztBQUVuQixTQUFLLEVBQUMsSUFGYTtBQUduQixjQUFVLEVBQUMsVUFIUTtBQUluQixTQUFLLEVBQUMsVUFKYTtBQUtuQixRQUFJLEVBQUMsSUFMYztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTnJCLENBREYsQ0FoRUYsQ0FERixDQVJGLEVBMEZHRSxZQUFZLElBQUksTUFBQyxtREFBRDtBQUFPLFlBQVEsRUFBRUEsWUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTFGbkIsQ0FERixDQUZGLENBcEJGLENBREY7QUF3SEQ7O0dBdE1RcEIsYTtVQUM2QkssNkQ7OztLQUQ3QkwsYTtBQXVNTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHNvbHV0aW9uc1xcW25hbWVdLmpzLjRlYzY5YTliNjMxMDg0MzczMWE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7XHJcbiAgdXNlRGlzY2xvc3VyZSwgRm9ybUNvbnRyb2wsIEZvcm1MYWJlbCwgSW5wdXQsIEJ1dHRvbiwgTW9kYWxDb250ZW50LCBNb2RhbEhlYWRlciwgTW9kYWxDbG9zZUJ1dHRvbiwgU3Bpbm5lciwgTW9kYWwsIE1vZGFsT3ZlcmxheSwgVGV4dGFyZWEsIE1vZGFsQm9keVxyXG59IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IGtleXMgZnJvbSAnLi4vLi4vYXBpS2V5cyc7XHJcbmltcG9ydCBUb2FzdCBmcm9tICcuLi9Ub2FzdC9tYWluJztcclxuZnVuY3Rpb24gR2V0YVF1b3RlRm9ybShwcm9wcykge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwaG9uZSwgc2V0UGhvbmVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGxldCBmb3JtID0ge1xyXG4gICAgbmFtZTogbmFtZSxcclxuICAgIGVtYWlsOiBlbWFpbCxcclxuICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXHJcbiAgICBwaG9uZTogcGhvbmUsXHJcbiAgICBzZXJ2aWNlTmFtZTogcHJvcHMuc2VydmljZU5hbWUsXHJcbiAgICBzZXJ2aWNlRGVzY3JpcHRpb246IHByb3BzLnNlcnZpY2VEZXNjcmlwdGlvblxyXG4gIH1cclxuICBjb25zdCBbaXNMb2FkaW5nLCBsb2FkaW5nU3RhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmb3JtUmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0XHJcbiAgICBjb25zdCBmaWVsZG5hbWUgPSB0YXJnZXQubmFtZVxyXG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQudmFsdWVcclxuICAgIHN3aXRjaCAoZmllbGRuYW1lKSB7XHJcbiAgICAgIGNhc2UgJ25hbWUnOlxyXG4gICAgICAgIHNldE5hbWUodmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnbWVzc2FnZSc6XHJcbiAgICAgICAgc2V0TWVzc2FnZSh2YWx1ZSk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlICdwaG9uZSc6XHJcbiAgICAgICAgc2V0UGhvbmUodmFsdWUpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSAnZW1haWwnOlxyXG4gICAgICAgIHNldEVtYWlsKHZhbHVlKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHJlZnJlc2hGb3JtID0gKHJlcykgPT4ge1xyXG4gICAgbG9hZGluZ1N0YXRlKGZhbHNlKVxyXG4gICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgIHNldFJlc3BvbnNlKHJlcyk7XHJcbiAgICBzZXRSZXNwb25zZSgnJyk7XHJcbiAgICBzZXROYW1lKCcnKTtcclxuICAgIHNldEVtYWlsKCcnKTtcclxuICAgIHNldE1lc3NhZ2UoJycpO1xyXG4gICAgc2V0UGhvbmUoJycpO1xyXG4gICAgaWYgKHJlcy5zdGF0dXMgPT0gMjAwKSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGZvcm1DbG9zZSA9ICgpID0+IHtcclxuICAgIHNldFJlc3BvbnNlKCcnKTtcclxuICAgIHNldE5hbWUoJycpO1xyXG4gICAgc2V0RW1haWwoJycpO1xyXG4gICAgc2V0TWVzc2FnZSgnJyk7XHJcbiAgICBzZXRQaG9uZSgnJyk7XHJcbiAgICBvbkNsb3NlKCk7XHJcbiAgfVxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBsb2FkaW5nU3RhdGUodHJ1ZSk7XHJcbiAgICBmZXRjaCgnIGh0dHBzOi8vc3VibWl0LWZvcm0uY29tLycgKyBrZXlzLkdldGFRdW90ZSwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVmcmVzaEZvcm0ocmVzcG9uc2UpLCAoZXJyb3IpID0+IHJlZnJlc2hGb3JtKGVycm9yKSlcclxuICB9XHJcbiAgdmFyIGRlc2NyaXB0aW9uID0gcHJvcHMuc2VydmljZURlc2NyaXB0aW9uLnNwbGl0KCcsJyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHshcHJvcHMuYnV0dG9uICYmIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgdy0xMDAgcHgtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgIHtwcm9wcy50aXRsZSAmJiA8cD57cHJvcHMudGl0bGV9PC9wPn1cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiIG9uQ2xpY2s9e29uT3Blbn0+XHJcbiAgICAgICAgICAgIEdldCBhIHF1b3RlXHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICAgIHtwcm9wcy5idXR0b24gJiYgKFxyXG4gICAgICAgIDxCdXR0b25cclxuICAgICAgICAgIHNpemU9XCJsZ1wiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e3Byb3BzLmJ1dHRvblN0eWxlfVxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVcIlxyXG4gICAgICAgICAgdmFyaWFudENvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR2V0IGEgcXVvdGVcclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgKX1cclxuICAgICAgPE1vZGFsIGlzT3Blbj17aXNPcGVufSBvbkNsb3NlPXtmb3JtQ2xvc2V9IGlzQ2VudGVyZWQgc2Nyb2xsQmVoYXZpb3I9XCJpbnNpZGVcIj5cclxuICAgICAgICA8TW9kYWxPdmVybGF5IC8+XHJcbiAgICAgICAgPE1vZGFsQ29udGVudCBtYXhXaWR0aD17W1wiNDAwcHhcIiwgXCI0MDBweFwiLCBcIjYwMHB4XCJdfT5cclxuICAgICAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgICAgIDxNb2RhbEhlYWRlcj48c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NVwiPntwcm9wcy5zZXJ2aWNlTmFtZX08L3NwYW4+PC9Nb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC13cmFwIHB4LTNcIj57ZGVzY3JpcHRpb24ubWFwKChzZXJ2aWNlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdW5kZWQtOCBob3Zlci1lZmZlY3QgYmctbGlnaHQgbS0yIHB5LTIgcHgtM1wiIGtleT17aW5kZXh9PntzZXJ2aWNlfTwvZGl2PlxyXG4gICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9PC9kaXY+XHJcbiAgICAgICAgICAgIDxNb2RhbENsb3NlQnV0dG9uIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cIl9yZWRpcmVjdFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlcnZpY2VOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uc2VydmljZU5hbWV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxyXG4gICAgICAgICAgICAgICAgICBuYW1lPVwic2VydmljZURlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uc2VydmljZURlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBpc1JlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+TmFtZTo8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17XCIxNCVcIn0gaXNSZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw6PC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZsdXNoZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17XCIxNCVcIn0gaXNSZXF1aXJlZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxGb3JtTGFiZWwgaHRtbEZvcj1cInBob25lXCI+Q29udGFjdCBOby48L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0dGVybj1cIlswLTldezEwfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmbHVzaGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ucGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbCBtdD17XCI5JVwifSBpc1JlcXVpcmVkPlxyXG4gICAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPkRldGFpbHM6PC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2l6ZT17XCJ2ZXJ0aWNhbFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmbHVzaGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ID5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIG10PXsxMH1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwibGdcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInByaW1hcnktYnRuXCJcclxuICAgICAgICAgICAgICAgICAgPlN1Ym1pdHtpc0xvYWRpbmcgJiYgPFNwaW5uZXJcclxuICAgICAgICAgICAgICAgICAgICB0aGlja25lc3M9XCI0cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkPVwiMXNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGVtcHR5Q29sb3I9XCJncmF5LjIwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJibHVlLjUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgLz59PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Zm9ybVJlc3BvbnNlICYmIDxUb2FzdCByZXNwb25zZT17Zm9ybVJlc3BvbnNlfSAvPn1cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgIDwvTW9kYWxDb250ZW50PlxyXG4gICAgICA8L01vZGFsPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEdldGFRdW90ZUZvcm07Il0sInNvdXJjZVJvb3QiOiIifQ==