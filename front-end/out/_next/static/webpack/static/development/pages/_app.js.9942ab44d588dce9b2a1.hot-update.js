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
  }, " Solutions")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "btn-block btn my-2",
    bg: "white",
    py: "24px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, "Our Features")))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    className: "btn-block btn my-2",
    bg: "white",
    py: "24px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "d-flex justify-content-between align-items-center w-100",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: "display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 17
    }
  }, "Contact"))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvbWVudS5qc3giXSwibmFtZXMiOlsibWVudSIsInByb3BzIiwiaXNPcGVuIiwib25PcGVuIiwib25DbG9zZSIsInVzZURpc2Nsb3N1cmUiLCJzZXJ2aWNlcyIsInNob3dTZXJ2aWNlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImhhbmRsZVRvZ2dsZSIsImNvbXBhbnkiLCJzaG93Q29tcGFueSIsImhhbmRsZVRvZ2dsZTIiLCJJb0lvc01lbnUiLCJvdmVyZmxvd1kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQWNBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNuQixRQUFNO0FBQUVDLFVBQUY7QUFBVUMsVUFBVjtBQUFrQkM7QUFBbEIsTUFBOEJDLHFFQUFhLEVBQWpEO0FBQ0EsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQWhDOztBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNSCxXQUFXLENBQUMsQ0FBQ0QsUUFBRixDQUF0Qzs7QUFFQSxRQUFNLENBQUNLLE9BQUQsRUFBVUMsV0FBVixJQUF5QkosNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FBL0I7O0FBQ0EsUUFBTUksYUFBYSxHQUFHLE1BQU1ELFdBQVcsQ0FBQyxDQUFDRCxPQUFGLENBQXZDOztBQUVBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFDRSxNQUFFLEVBQUVHLHdEQUROO0FBRUUsUUFBSSxFQUFDLE1BRlA7QUFHRSxXQUFPLEVBQUVYLE1BSFg7QUFJRSxhQUFTLEVBQUMsbUJBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBT0UsTUFBQyxz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LmpzLjk5NDJhYjQ0ZDU4OGRjZTliMmExLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IElvSW9zTWVudSB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uL1NlcnZpY2VzL3NlcnZpY2VzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHtcclxuICBCdXR0b24sXHJcbiAgQm94LFxyXG4gIEljb24sXHJcbiAgQ29sbGFwc2UsXHJcbiAgRHJhd2VyLFxyXG4gIERyYXdlckJvZHksXHJcbiAgRHJhd2VyRm9vdGVyLFxyXG4gIERyYXdlckhlYWRlcixcclxuICBEcmF3ZXJPdmVybGF5LFxyXG4gIERyYXdlckNvbnRlbnQsXHJcbiAgdXNlRGlzY2xvc3VyZSxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcblxyXG5mdW5jdGlvbiBtZW51KHByb3BzKSB7XHJcbiAgY29uc3QgeyBpc09wZW4sIG9uT3Blbiwgb25DbG9zZSB9ID0gdXNlRGlzY2xvc3VyZSgpO1xyXG4gIGNvbnN0IFtzZXJ2aWNlcywgc2hvd1NlcnZpY2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGhhbmRsZVRvZ2dsZSA9ICgpID0+IHNob3dTZXJ2aWNlKCFzZXJ2aWNlcyk7XHJcblxyXG4gIGNvbnN0IFtjb21wYW55LCBzaG93Q29tcGFueV0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaGFuZGxlVG9nZ2xlMiA9ICgpID0+IHNob3dDb21wYW55KCFjb21wYW55KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1ibG9jayBkLWxnLW5vbmVcIj5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGFzPXtJb0lvc01lbnV9XHJcbiAgICAgICAgc2l6ZT1cIjMycHhcIlxyXG4gICAgICAgIG9uQ2xpY2s9e29uT3Blbn1cclxuICAgICAgICBjbGFzc05hbWU9XCJob3Zlci1lZmZlY3QgbXItM1wiXHJcbiAgICAgID48L0JveD5cclxuICAgICAgPERyYXdlciBpc09wZW49e2lzT3Blbn0gcGxhY2VtZW50PVwibGVmdFwiIG9uQ2xvc2U9e29uQ2xvc2V9PlxyXG4gICAgICAgIDxEcmF3ZXJPdmVybGF5IC8+XHJcbiAgICAgICAgPERyYXdlckNvbnRlbnQ+XHJcbiAgICAgICAgICA8RHJhd2VyQm9keSBzdHlsZT17eyBvdmVyZmxvd1k6IFwiYXV0b1wiIH19PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuLWJsb2NrIGJ0biBteS0yXCJcclxuICAgICAgICAgICAgICBiZz1cIndoaXRlXCJcclxuICAgICAgICAgICAgICBweT1cIjI0cHhcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVRvZ2dsZX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTZcIj5TZXJ2aWNlczwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e3NlcnZpY2VzID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwifVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICA+PC9JY29uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPENvbGxhcHNlIHB4PVwiMTZweFwiIG1iPXs0fSBpc09wZW49e3NlcnZpY2VzfT5cclxuICAgICAgICAgICAgICA8U2VydmljZXM+PC9TZXJ2aWNlcz5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0bi1ibG9jayBidG4gbXktMlwiXHJcbiAgICAgICAgICAgICAgYmc9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgcHk9XCIyNHB4XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVUb2dnbGUyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NlwiPkNvbXBhbnk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgICAgICBuYW1lPXtjb21wYW55ID8gXCJjaGV2cm9uLXVwXCIgOiBcImNoZXZyb24tZG93blwifVxyXG4gICAgICAgICAgICAgICAgICBzaXplPVwiMTZweFwiXHJcbiAgICAgICAgICAgICAgICA+PC9JY29uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPENvbGxhcHNlXHJcbiAgICAgICAgICAgICAgcHg9XCIxNnB4XCJcclxuICAgICAgICAgICAgICBtYj17NH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb290ZXItY29udGVudFwiXHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtjb21wYW55fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gaGVhZGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHktMVwiPkFib3V0IFVzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzcm9vbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweS0xXCI+TmV3c3Jvb208L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NvbHV0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweS0xXCI+IFNvbHV0aW9uczwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mZWF0dXJlc1wiPlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImJ0bi1ibG9jayBidG4gbXktMlwiIGJnPVwid2hpdGVcIiBweT1cIjI0cHhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk2XCI+T3VyIEZlYXR1cmVzPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgPEJ1dHRvbiBhcz1cImFcIiBjbGFzc05hbWU9XCJidG4tYmxvY2sgYnRuIG15LTJcIiBiZz1cIndoaXRlXCIgcHk9XCIyNHB4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NlwiPkNvbnRhY3Q8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L0RyYXdlckJvZHk+XHJcbiAgICAgICAgPC9EcmF3ZXJDb250ZW50PlxyXG4gICAgICA8L0RyYXdlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=