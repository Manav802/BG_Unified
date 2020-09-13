webpackHotUpdate("static\\development\\pages\\newsroom.js",{

/***/ "./src/pages/newsroom/index.jsx":
/*!**************************************!*\
  !*** ./src/pages/newsroom/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_cards_CardWithImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cards/CardWithImage */ "./src/components/cards/CardWithImage.jsx");
/* harmony import */ var _database_newsroom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../database/newsroom */ "./src/database/newsroom.jsx");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pageBuilder/Section */ "./src/pageBuilder/Section.jsx");
/* harmony import */ var _pageBuilder_Title__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pageBuilder/Title */ "./src/pageBuilder/Title.jsx");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pages\\newsroom\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Newsroom() {
  _s();

  const [category, setCategory] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("All");
  const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState("");
  return __jsx("div", {
    className: "newsroom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Newsroom - BG Unified")), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    position: "relative",
    textAlign: "center",
    bg: ["gray.200", "#ffffff00"],
    py: [16, 32],
    my: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Image"], {
    zIndex: "-100",
    mt: "-128px",
    style: {
      mixBlendMode: "darken"
    },
    minH: "448px",
    width: "100%",
    objectFit: "cover",
    left: 0,
    position: "absolute",
    top: 0,
    src: "/assets/images/backgrounds/dots_circle.jpg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    zIndex: "100",
    size: "xs",
    letterSpacing: 1.8,
    textAlign: "center",
    color: "primary.500",
    mb: 4,
    textTransform: "uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "News from us"), __jsx(_pageBuilder_Title__WEBPACK_IMPORTED_MODULE_6__["default"], {
    zIndex: "100",
    fontSize: ["44px", "64px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Our Newsroom"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
    zIndex: "100",
    fontSize: "xl",
    mt: 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, "Get the latest updates from us."), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    display: ["none", "block"],
    pos: "relative",
    px: 4,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputGroup"], {
    mx: "auto",
    mt: 8,
    width: ["100%", "100%", "520px"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["InputLeftElement"], {
    m: "6px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    name: "search",
    size: "14px",
    color: "dark.500",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 43
    }
  })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Input"], {
    boxShadow: "xl",
    py: 6,
    focusBorderColor: "primary.500",
    pl: 12,
    value: search,
    onChange: e => setSearch(e.target.value),
    color: "dark.500",
    fontSize: "xl",
    placeholder: "Search here...",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  })), search && __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
    pos: "absolute",
    mt: 4,
    justifyContent: "center",
    width: "100%",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 26
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    bg: "white",
    width: ["100%", "100%", "520px"],
    boxShadow: "lg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 19
    }
  }, _database_newsroom__WEBPACK_IMPORTED_MODULE_3__["default"].filter(blog => blog.tags.includes(search)).map(blog => __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/newsroom/[bid]",
    as: "/newsroom/" + blog.link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 86
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Heading"], {
    size: "md",
    textAlign: "left",
    className: "hover-effect",
    p: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, blog.title))))))), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_5__["default"], {
    mt: 0,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    templateColumns: ["auto", "auto", "160px auto", "280px auto"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    p: 4,
    display: ["none", "none", "block"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    width: "100%",
    bg: "light.500",
    color: category === "All" ? "primary.500" : "dark.500",
    justifyContent: "start",
    onClick: () => setCategory("All"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, "All"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    width: "100%",
    bg: "light.500",
    color: category === "Updates" ? "primary.500" : "dark.500",
    justifyContent: "start",
    onClick: () => setCategory("Updates"),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "Updates")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
    width: "100%",
    px: 3,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 15
    }
  }, _database_newsroom__WEBPACK_IMPORTED_MODULE_3__["default"].map(blog => {
    if (blog.category === category || category === "All") return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: "/newsroom/[bid]",
      as: "/newsroom/" + blog.link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
      as: "a",
      fontWeight: "500",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 76
      }
    }, __jsx(_components_cards_CardWithImage__WEBPACK_IMPORTED_MODULE_2__["default"], {
      src: blog.image,
      title: blog.title,
      columns: ["128px auto", "auto"],
      height: ["96px", "216px"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
      mt: 1,
      opacity: .7,
      fontSize: ["sm", "lg"],
      overflow: "hidden",
      height: ["40px", "auto"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 19
      }
    }, blog.description), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Flex"], {
      display: ["none", "flex"],
      mt: 4,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Avatar"], {
      src: blog.avatar,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 19
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Box"], {
      ml: "3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
      fontWeight: "bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }, "by " + blog.by || false), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_7__["Text"], {
      fontSize: "sm",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }, "Posted On ", blog.date))))));
  })))));
}

_s(Newsroom, "BZRQwr9O5febhgEvXebalL83iok=");

_c = Newsroom;
/* harmony default export */ __webpack_exports__["default"] = (Newsroom);

var _c;

$RefreshReg$(_c, "Newsroom");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvbmV3c3Jvb20vaW5kZXguanN4Il0sIm5hbWVzIjpbIk5ld3Nyb29tIiwiY2F0ZWdvcnkiLCJzZXRDYXRlZ29yeSIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJtaXhCbGVuZE1vZGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJuZXdzcm9vbSIsImZpbHRlciIsImJsb2ciLCJ0YWdzIiwiaW5jbHVkZXMiLCJtYXAiLCJsaW5rIiwidGl0bGUiLCJpbWFnZSIsImRlc2NyaXB0aW9uIiwiYXZhdGFyIiwiYnkiLCJkYXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFtQjtBQUFBOztBQUNmLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUFoQztBQUNBLFFBQU0sQ0FBQ0MsTUFBRCxFQUFTQyxTQUFULElBQXNCSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUE1QjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFERixDQURGLEVBSUUsTUFBQyw0REFBRDtBQUFTLFlBQVEsRUFBQyxVQUFsQjtBQUE2QixhQUFTLEVBQUMsUUFBdkM7QUFBZ0QsTUFBRSxFQUFFLENBQUMsVUFBRCxFQUFhLFdBQWIsQ0FBcEQ7QUFBK0UsTUFBRSxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBbkY7QUFBNkYsTUFBRSxFQUFFLENBQWpHO0FBQUE7QUFBQTtBQUFBO0FB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bWVudFxccGFnZXNcXG5ld3Nyb29tLmpzLmQ2YjQ2Yjc4ODRiMzUzMGRhMjI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IENhcmRXaXRoSW1hZ2UgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2FyZHMvQ2FyZFdpdGhJbWFnZVwiO1xyXG5pbXBvcnQgbmV3c3Jvb20gZnJvbSBcIi4uLy4uL2RhdGFiYXNlL25ld3Nyb29tXCJcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vLi4vcGFnZUJ1aWxkZXIvU2VjdGlvblwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uLy4uL3BhZ2VCdWlsZGVyL1RpdGxlXCI7XHJcbmltcG9ydCB7IEhlYWRpbmcsIFRleHQsIEJveCwgSW5wdXRHcm91cCwgSW5wdXRMZWZ0RWxlbWVudCwgQnV0dG9uLCBJY29uLCBJbnB1dCwgSW1hZ2UsIEF2YXRhciwgQmFkZ2UsIEZsZXgsIEdyaWQsIE1lbnVMaXN0LCBNZW51LCBNZW51QnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5cclxuZnVuY3Rpb24gTmV3c3Jvb20oKXtcclxuICAgIGNvbnN0IFtjYXRlZ29yeSwgc2V0Q2F0ZWdvcnldID0gUmVhY3QudXNlU3RhdGUoXCJBbGxcIilcclxuICAgIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzcm9vbVwiPlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPk5ld3Nyb29tIC0gQkcgVW5pZmllZDwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgIDxTZWN0aW9uIHBvc2l0aW9uPVwicmVsYXRpdmVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBiZz17W1wiZ3JheS4yMDBcIiwgXCIjZmZmZmZmMDBcIl19IHB5PXtbMTYsIDMyXX0gbXk9ezB9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgekluZGV4PVwiLTEwMFwiIG10PVwiLTEyOHB4XCIgc3R5bGU9e3ttaXhCbGVuZE1vZGU6XCJkYXJrZW5cIn19IG1pbkg9XCI0NDhweFwiIHdpZHRoPVwiMTAwJVwiIG9iamVjdEZpdD1cImNvdmVyXCIgbGVmdD17MH0gcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD17MH0gc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZG90c19jaXJjbGUuanBnXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgekluZGV4PVwiMTAwXCIgc2l6ZT1cInhzXCIgbGV0dGVyU3BhY2luZz17MS44fSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInByaW1hcnkuNTAwXCIgbWI9ezR9IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5OZXdzIGZyb20gdXM8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUaXRsZSB6SW5kZXg9XCIxMDBcIiBmb250U2l6ZT17W1wiNDRweFwiLFwiNjRweFwiXX0+T3VyIE5ld3Nyb29tPC9UaXRsZT5cclxuICAgICAgICAgICAgPFRleHQgekluZGV4PVwiMTAwXCIgZm9udFNpemU9XCJ4bFwiIG10PXsyfT5HZXQgdGhlIGxhdGVzdCB1cGRhdGVzIGZyb20gdXMuPC9UZXh0PlxyXG4gICAgICAgICAgICA8Qm94IGRpc3BsYXk9e1tcIm5vbmVcIiwgXCJibG9ja1wiXX0gcG9zPVwicmVsYXRpdmVcIiBweD17NH0+XHJcbiAgICAgICAgICAgICAgPElucHV0R3JvdXAgbXg9XCJhdXRvXCIgbXQ9ezh9IHdpZHRoPXtbXCIxMDAlXCIsXCIxMDAlXCIsXCI1MjBweFwiXX0+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXRMZWZ0RWxlbWVudCBtPVwiNnB4XCI+PEljb24gbmFtZT1cInNlYXJjaFwiIHNpemU9XCIxNHB4XCIgY29sb3I9XCJkYXJrLjUwMFwiPjwvSWNvbj48L0lucHV0TGVmdEVsZW1lbnQ+XHJcbiAgICAgICAgICAgICAgICA8SW5wdXQgYm94U2hhZG93PVwieGxcIiBweT17Nn0gZm9jdXNCb3JkZXJDb2xvcj1cInByaW1hcnkuNTAwXCIgcGw9ezEyfSB2YWx1ZT17c2VhcmNofSBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9IGNvbG9yPVwiZGFyay41MDBcIiBmb250U2l6ZT1cInhsXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2ggaGVyZS4uLlwiPjwvSW5wdXQ+XHJcbiAgICAgICAgICAgICAgPC9JbnB1dEdyb3VwPlxyXG4gICAgICAgICAgICAgIHtzZWFyY2ggJiYgPEZsZXggcG9zPVwiYWJzb2x1dGVcIiBtdD17NH0ganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICAgICAgICAgICAgPEJveCBiZz1cIndoaXRlXCIgd2lkdGg9e1tcIjEwMCVcIixcIjEwMCVcIixcIjUyMHB4XCJdfSBib3hTaGFkb3c9XCJsZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtuZXdzcm9vbS5maWx0ZXIoYmxvZyA9PiBibG9nLnRhZ3MuaW5jbHVkZXMoc2VhcmNoKSkubWFwKGJsb2cgPT4gPExpbmsgaHJlZj1cIi9uZXdzcm9vbS9bYmlkXVwiIGFzPXtcIi9uZXdzcm9vbS9cIiArIGJsb2cubGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgdGV4dEFsaWduPVwibGVmdFwiIGNsYXNzTmFtZT1cImhvdmVyLWVmZmVjdFwiIHA9ezN9PntibG9nLnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+KX1cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgPC9GbGV4Pn1cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgIHsvKiBDYXJkV2l0aEltYWdlIGhhdmUgd2VpcmQgd2lkdGgsIGJhZCBjb21wb25lbnQsIHBscyBmaXggKi99XHJcblxyXG4gICAgICAgIDxTZWN0aW9uIG10PXswfT5cclxuICAgICAgICAgICAgICA8R3JpZCB0ZW1wbGF0ZUNvbHVtbnM9e1tcImF1dG9cIiwgXCJhdXRvXCIsXCIxNjBweCBhdXRvXCIsXCIyODBweCBhdXRvXCJdfT5cclxuICAgICAgICAgICAgICA8Qm94IHA9ezR9IGRpc3BsYXk9e1tcIm5vbmVcIixcIm5vbmVcIiwgXCJibG9ja1wiXX0+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHdpZHRoPVwiMTAwJVwiIGJnPVwibGlnaHQuNTAwXCIgY29sb3I9e2NhdGVnb3J5ID09PSBcIkFsbFwiID8gXCJwcmltYXJ5LjUwMFwiIDogXCJkYXJrLjUwMFwifSBqdXN0aWZ5Q29udGVudD1cInN0YXJ0XCIgb25DbGljaz17KCkgPT4gc2V0Q2F0ZWdvcnkoXCJBbGxcIil9PkFsbDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB3aWR0aD1cIjEwMCVcIiBiZz1cImxpZ2h0LjUwMFwiIGNvbG9yPXtjYXRlZ29yeSA9PT0gXCJVcGRhdGVzXCIgPyBcInByaW1hcnkuNTAwXCIgOiBcImRhcmsuNTAwXCJ9IGp1c3RpZnlDb250ZW50PVwic3RhcnRcIiBvbkNsaWNrPXsoKSA9PiBzZXRDYXRlZ29yeShcIlVwZGF0ZXNcIil9PlVwZGF0ZXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8Qm94IHdpZHRoPVwiMTAwJVwiIHB4PXszfT5cclxuICAgICAgICAgICAgICAgIHtuZXdzcm9vbS5tYXAoYmxvZyA9PntpZihibG9nLmNhdGVnb3J5ID09PSBjYXRlZ29yeSB8fCBjYXRlZ29yeSA9PT0gXCJBbGxcIikgcmV0dXJuKFxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9uZXdzcm9vbS9bYmlkXVwiIGFzPXtcIi9uZXdzcm9vbS9cIiArIGJsb2cubGlua30+PEJveCBhcz1cImFcIiBmb250V2VpZ2h0PVwiNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkV2l0aEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YmxvZy5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcIjEyOHB4IGF1dG9cIiwgXCJhdXRvXCJdfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9e1tcIjk2cHhcIiwgXCIyMTZweFwiXX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgbXQ9ezF9IG9wYWNpdHk9ey43fSBmb250U2l6ZT17W1wic21cIixcImxnXCJdfSBvdmVyZmxvdz1cImhpZGRlblwiIGhlaWdodD17W1wiNDBweFwiLCBcImF1dG9cIl19PntibG9nLmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPEZsZXggZGlzcGxheT17W1wibm9uZVwiLFwiZmxleFwiXX0gbXQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICA8QXZhdGFyIHNyYz17YmxvZy5hdmF0YXJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggbWw9XCIzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFdlaWdodD1cImJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtcImJ5IFwiICsgYmxvZy5ieSB8fCBcIlRlYW1cIn1cclxuICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJzbVwiPlBvc3RlZCBPbiB7YmxvZy5kYXRlfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRXaXRoSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICl9KX1cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmV3c3Jvb207XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=