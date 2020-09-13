webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./src/components/header/menu.jsx":
/*!****************************************!*\
  !*** ./src/components/header/menu.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _Services_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Services/services */ "./src/components/Services/services.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\components\\header\\menu.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function menu(props) {
  _s();

  const {
    isOpen,
    onOpen,
    onClose
  } = Object(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useDisclosure"])();
  const [services, showService] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleToggle = () => showService(!services);

  const [company, showCompany] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);

  const handleToggle2 = () => showCompany(!company);

  return __jsx("div", {
    className: "d-block d-lg-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    as: react_icons_io__WEBPACK_IMPORTED_MODULE_1__["IoIosMenu"],
    size: "32px",
    onClick: onOpen,
    className: "hover-effect mr-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Drawer"], {
    isOpen: isOpen,
    placement: "left",
    onClose: onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["DrawerOverlay"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["DrawerContent"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["DrawerBody"], {
    style: {
      overflowY: "auto"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-block btn my-2",
    bg: "white",
    py: "24px",
    onClick: handleToggle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, "Services"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: services ? "chevron-up" : "chevron-down",
    size: "16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    px: "16px",
    mb: 4,
    isOpen: services,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, __jsx(_Services_services__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-block btn my-2",
    bg: "white",
    py: "24px",
    onClick: handleToggle2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, "Company"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: company ? "chevron-up" : "chevron-down",
    size: "16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    px: "16px",
    mb: 4,
    className: "footer-content",
    isOpen: company,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex flex-column header-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 15
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 19
    }
  }, "About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/newsroom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 19
    }
  }, "Newsroom")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/solutions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 17
    }
  }, __jsx("a", {
    className: "py-1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 19
    }
  }, " Solutions")))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-block btn my-2",
    bg: "white",
    py: "24px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "Our Features"))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    className: "btn-block btn my-2",
    bg: "white",
    py: "24px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, "Contact")))))));
}

_s(menu, "qOlPO2z7HBTAK0XwBALe4eUfssI=", false, function () {
  return [_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["useDisclosure"]];
});

/* harmony default export */ __webpack_exports__["default"] = (menu);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbWVudS5qc3giXSwibmFtZXMiOlsibWVudSIsInByb3BzIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZURpc2Nsb3N1cmUiLCJzZXJ2aWNlcyIsInNob3dTZXJ2aWNlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZVRvZ2dsZSIsImNvbXBhbnkiLCJzaG93Q29tcGFueSIsImhhbmRsZVRvZ2dsZTIiLCJJb0lvc01lbnUiLCJvdmVyZmxvd1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWNBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNuQixRQUFNO0FBQUVDLFVBQUY7QUFBVUMsVUFBVjtBQUFrQkM7QUFBbEIsTUFBOEJDLHFFQUFhLEVBQWpEO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQWhDOztBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNSCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUF0Qzs7QUFFQSxRQUFNLENBQUNLLE9BQUQsRUFBVUMsV0FBVixJQUF5QkosNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBL0I7O0FBQ0EsUUFBTUksYUFBYSxHQUFHLE1BQU1ELFdBQVcsQ0FBQyxDQUFDRCxPQUFGLENBQXZDOztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSxNQUFFLEVBQUVHLHdEQUROO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFPLEVBQUVYLE1BSFg7QUFJRSxhQUFTLEVBQUMsbUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyxz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QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBQyxNQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsQ0FQRixDQU5GLENBaENGLEVBa0RFLE1BQUMsc0RBQUQ7QUFBUSxhQUFTLEVBQUMsb0JBQWxCO0FBQXVDLE1BQUUsRUFBQyxPQUExQztBQUFrRCxNQUFFLEVBQUMsTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLHlEQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxVQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBREYsQ0FsREYsRUF1REUsTUFBQyxzREFBRDtBQUFRLE1BQUUsRUFBQyxHQUFYO0FBQWUsYUFBUyxFQUFDLG9CQUF6QjtBQUE4QyxNQUFFLEVBQUMsT0FBakQ7QUFBeUQsTUFBRSxFQUFDLE1BQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyx5REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTSxhQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLENBREYsQ0F2REYsQ0FERixDQUZGLENBUEYsQ0FERjtBQTRFRDs7R0FwRlFYLEk7VUFDNkJLLDZEOzs7QUFxRnZCTCxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5iMzAxYjI3ZGEyNGRjMzFmOWM2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBJb0lvc01lbnUgfSBmcm9tIFwicmVhY3QtaWNvbnMvaW9cIjtcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gXCIuLi9TZXJ2aWNlcy9zZXJ2aWNlc1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgQnV0dG9uLFxyXG4gIEJveCxcclxuICBJY29uLFxyXG4gIENvbGxhcHNlLFxyXG4gIERyYXdlcixcclxuICBEcmF3ZXJCb2R5LFxyXG4gIERyYXdlckZvb3RlcixcclxuICBEcmF3ZXJIZWFkZXIsXHJcbiAgRHJhd2VyT3ZlcmxheSxcclxuICBEcmF3ZXJDb250ZW50LFxyXG4gIHVzZURpc2Nsb3N1cmUsXHJcbn0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5cclxuZnVuY3Rpb24gbWVudShwcm9wcykge1xyXG4gIGNvbnN0IHsgaXNPcGVuLCBvbk9wZW4sIG9uQ2xvc2UgfSA9IHVzZURpc2Nsb3N1cmUoKTtcclxuICBjb25zdCBbc2VydmljZXMsIHNob3dTZXJ2aWNlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBoYW5kbGVUb2dnbGUgPSAoKSA9PiBzaG93U2VydmljZSghc2VydmljZXMpO1xyXG5cclxuICBjb25zdCBbY29tcGFueSwgc2hvd0NvbXBhbnldID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZTIgPSAoKSA9PiBzaG93Q29tcGFueSghY29tcGFueSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtYmxvY2sgZC1sZy1ub25lXCI+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBhcz17SW9Jb3NNZW51fVxyXG4gICAgICAgIHNpemU9XCIzMnB4XCJcclxuICAgICAgICBvbkNsaWNrPXtvbk9wZW59XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiaG92ZXItZWZmZWN0IG1yLTNcIlxyXG4gICAgICA+PC9Cb3g+XHJcbiAgICAgIDxEcmF3ZXIgaXNPcGVuPXtpc09wZW59IHBsYWNlbWVudD1cImxlZnRcIiBvbkNsb3NlPXtvbkNsb3NlfT5cclxuICAgICAgICA8RHJhd2VyT3ZlcmxheSAvPlxyXG4gICAgICAgIDxEcmF3ZXJDb250ZW50PlxyXG4gICAgICAgICAgPERyYXdlckJvZHkgc3R5bGU9e3sgb3ZlcmZsb3dZOiBcImF1dG9cIiB9fT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ibG9jayBidG4gbXktMlwiXHJcbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgcHk9XCIyNHB4XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGV9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk2XCI+U2VydmljZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtzZXJ2aWNlcyA/IFwiY2hldnJvbi11cFwiIDogXCJjaGV2cm9uLWRvd25cIn1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgPjwvSWNvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZSBweD1cIjE2cHhcIiBtYj17NH0gaXNPcGVuPXtzZXJ2aWNlc30+XHJcbiAgICAgICAgICAgICAgPFNlcnZpY2VzPjwvU2VydmljZXM+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4tYmxvY2sgYnRuIG15LTJcIlxyXG4gICAgICAgICAgICAgIGJnPVwid2hpdGVcIlxyXG4gICAgICAgICAgICAgIHB5PVwiMjRweFwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlVG9nZ2xlMn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTZcIj5Db21wYW55PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICAgICAgbmFtZT17Y29tcGFueSA/IFwiY2hldnJvbi11cFwiIDogXCJjaGV2cm9uLWRvd25cIn1cclxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjE2cHhcIlxyXG4gICAgICAgICAgICAgICAgPjwvSWNvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxDb2xsYXBzZVxyXG4gICAgICAgICAgICAgIHB4PVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgbWI9ezR9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9vdGVyLWNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgIGlzT3Blbj17Y29tcGFueX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGhlYWRlci1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInB5LTFcIj5BYm91dCBVczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c3Jvb21cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHktMVwiPk5ld3Nyb29tPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHktMVwiPiBTb2x1dGlvbnM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiYnRuLWJsb2NrIGJ0biBteS0yXCIgYmc9XCJ3aGl0ZVwiIHB5PVwiMjRweFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTZcIj5PdXIgRmVhdHVyZXM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGFzPVwiYVwiIGNsYXNzTmFtZT1cImJ0bi1ibG9jayBidG4gbXktMlwiIGJnPVwid2hpdGVcIiBweT1cIjI0cHhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk2XCI+Q29udGFjdDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0RyYXdlckJvZHk+XHJcbiAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=