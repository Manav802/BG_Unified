webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./src/pages/about.jsx":
/*!*****************************!*\
  !*** ./src/pages/about.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-flickity-component */ "./node_modules/react-flickity-component/lib/index.js");
/* harmony import */ var react_flickity_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_flickity_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/cards/CardWithAction */ "./src/components/cards/CardWithAction.jsx");
/* harmony import */ var _components_cards_team__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/cards/team */ "./src/components/cards/team.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pageBuilder_Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pageBuilder/Section */ "./src/pageBuilder/Section.jsx");
/* harmony import */ var _pageBuilder_Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pageBuilder/Title */ "./src/pageBuilder/Title.jsx");
/* harmony import */ var _components_Countup_main__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Countup/main */ "./src/components/Countup/main.jsx");

var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\pages\\about.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const timeline = {
  2013: "Founded and BG Unified Solutions Pty Ltd as a team providing IT solutions to the clients focusing on customer satisfaction and deliverability.",
  2014: "F5 Authorized Partners, CISCO Premier Partner, CISCO Advanced Collaboration, Architecture Specialized Partner, Palo Alto Authorized Partners.",
  2015: "Nimble Storage Partners, NetAPP Partner, GENESYS Collaboration",
  2016: "Technology migration to Next-Generation Firewalls, UCaaS, Wireless, Telepresence and Storage.",
  2017: "Presence in London, offering all the services in our portfolio including, UCaaS, SaaS, IaaS, WiaaS and FaaS",
  2018: "Received BTS Excellence Award in recognition of Excellent Service by the NSW Government.",
  2019: "Built our own Logging Cloud Connect Product, Newly deployed RDS/VDIaaS Solution into its portfolio as Workstation Service.",
  2020: "DNS As A Service using a hybrid Windows, Red Hat Linux andInfoblox DNS Servers"
};

class about extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(this, "goToIndex", index => {
      //using Flickity API
      this.flkty.select(index);
      this.setState({
        activeYearCard: index
      });
    });

    this.state = {
      activeYearCard: 1
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: "about",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, "More About Us - BG Unified"), __jsx("link", {
      rel: "shortcut icon",
      href: "/assets/images/icons/favicon/bg.ico",
      type: "image/x-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    })), __jsx(_pageBuilder_Section__WEBPACK_IMPORTED_MODULE_9__["default"], {
      position: "relative",
      textAlign: "center",
      bg: ["gray.200", "#ffffff00"],
      py: [16, 32],
      my: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 11
      }
    }, __jsx(Image, {
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
        lineNumber: 50,
        columnNumber: 13
      }
    }), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
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
        lineNumber: 51,
        columnNumber: 13
      }
    }, "What we deliver"), __jsx(_pageBuilder_Title__WEBPACK_IMPORTED_MODULE_10__["default"], {
      zIndex: "100",
      fontSize: ["44px", "64px"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, "Our Solutions"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      zIndex: "100",
      fontSize: "xl",
      mt: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 13
      }
    }, "We cover 90% of the technology domains.")), __jsx("div", {
      className: "section pt-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container-fluid p-0 py-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }, __jsx(react_flickity_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "timeline",
      flickityRef: c => this.flkty = c,
      options: {
        freeScroll: true,
        pageDots: false,
        prevNextButtons: false,
        contain: true,
        draggable: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "slider-offset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 71
      }
    }))), Object.entries(timeline).reverse().map(notes => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      pos: "relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 67
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      h: "300px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      width: "160px",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 87
      }
    })), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      rounded: "50%",
      borderWidth: 5,
      borderWidthColor: "gray.200",
      size: "96px",
      color: "white",
      bg: "primary.500",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      size: "md",
      fontFamily: "Nexa Bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 23
      }
    }, notes[0])), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      width: "160px",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 87
      }
    }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      pos: "absolute",
      top: "96px",
      width: "100%",
      px: 6,
      mt: 8,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      fontSize: "lg",
      textAlign: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 23
      }
    }, notes[1])))), __jsx("div", {
      className: "slider-offset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 71
      }
    })))))), __jsx("div", {
      className: "section pt-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-10 offset-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row my-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endPoint: 40,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }
    }, "Clients")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endPoint: 5,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    }, "Locations")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endPoint: 20,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 23
      }
    }, "Projects"))), __jsx("div", {
      className: "display6 py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 19
      }
    }, "Our Mission"), __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    }, "BG Unified Solutions Pty Ltd Team consists of experts in different technologies like Security, Voice and a broad range of additional skills including F5 Load Balancers, WAN Optimization, WAN, Cloud Technologies and Cisco Technologies. As experts in different technologies, our focus is to provide competitive and affordable Unified Solutions to our clients."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, "We majorly deal with Cisco Voice / Video Projects, WAN Implementations, DC Design and Implementation. Our goal is to make our customers more competitive and achieve higher business efficiency through increased agility, effective cost containment and lower risk. BG Unified Solutions, founded in 2013, provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results."))))), __jsx("div", {
      className: "section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "p-3 text-center d-flex flex-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "h6 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, "TEAM"), __jsx("span", {
      className: "display5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 17
      }
    }, "Meet the Visionary People")), __jsx("div", {
      className: "row py-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Founder & Owner",
      name: "Jingyi Li",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Co-Founder and Managing Director",
      name: "Saurabh Sareen",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "py-5",
      style: {
        paddingTop: "100px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
      }
    }))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (about);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbInRpbWVsaW5lIiwiYWJvdXQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaW5kZXgiLCJmbGt0eSIsInNlbGVjdCIsInNldFN0YXRlIiwiYWN0aXZlWWVhckNhcmQiLCJzdGF0ZSIsInJlbmRlciIsIm1peEJsZW5kTW9kZSIsImMiLCJmcmVlU2Nyb2xsIiwicGFnZURvdHMiLCJwcmV2TmV4dEJ1dHRvbnMiLCJjb250YWluIiwiZHJhZ2dhYmxlIiwiT2JqZWN0IiwiZW50cmllcyIsInJldmVyc2UiLCJtYXAiLCJub3RlcyIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDZixRQUFNLGdKQURTO0FBRWYsUUFBTSwrSUFGUztBQUdmLFFBQU0sZ0VBSFM7QUFJZixRQUFNLCtGQUpTO0FBS2YsUUFBTSw2R0FMUztBQU1mLFFBQU0sMEZBTlM7QUFPZixRQUFNLDRIQVBTO0FBUWYsUUFBTTtBQVJTLENBQWpCOztBQVdBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUE4QjtBQUM1QkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsaUhBTU5DLEtBQUQsSUFBVztBQUNyQjtBQUNBLFdBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkYsS0FBbEI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFBRUMsc0JBQWMsRUFBRUo7QUFBbEIsT0FBZDtBQUNELEtBVmtCOztBQUVqQixTQUFLSyxLQUFMLEdBQWE7QUFDWEQsb0JBQWMsRUFBRTtBQURMLEtBQWI7QUFHRDs7QUFNREUsUUFBTSxHQUFHO0FBQ1AsV0FDRSxtRUFDRTtBQUFLLGVBQVMsRUFBQyxP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QUEsT0FDRSxNQUFDLDhEQUFEO0FBQ0UsV0FBSyxFQUFDLGlCQURSO0FBRUUsVUFBSSxFQUFDLFdBRlA7QUFHRSxTQUFHLEVBQUMsNEVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FERixDQURGLEVBWUU7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFDRSxXQUFLLEVBQUMsa0NBRFI7QUFFRSxVQUFJLEVBQUMsZ0JBRlA7QUFHRSxTQUFHLEVBQUMsMkVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FERixDQVpGLEVBdUJFO0FBQUssZUFBUyxFQUFDLG1GQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF2QkYsRUEyQkU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQkYsQ0FMRixDQURGLENBcEdGLENBREYsQ0FERjtBQThJRDs7QUEzSjJCOztBQThKZnZCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy4yNWMyNDI2ZjMyMTlmMDFjZDI4OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1mbGlja2l0eS1jb21wb25lbnRcIjtcclxuaW1wb3J0IENhcmRXaXRoQWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL0NhcmRXaXRoQWN0aW9uXCI7XHJcbmltcG9ydCBUZWFtIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL3RlYW1cIjtcclxuaW1wb3J0IHsgRmFBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgVGV4dCB9IGZyb20gXCJAY2hha3JhLXVpL2NvcmVcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcbmltcG9ydCBTZWN0aW9uIGZyb20gXCIuLi9wYWdlQnVpbGRlci9TZWN0aW9uXCI7XHJcbmltcG9ydCBUaXRsZSBmcm9tIFwiLi4vcGFnZUJ1aWxkZXIvVGl0bGVcIjtcclxuaW1wb3J0IE15Q291bnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnR1cC9tYWluXCI7XHJcblxyXG5jb25zdCB0aW1lbGluZSA9IHtcclxuICAyMDEzOiBcIkZvdW5kZWQgYW5kIEJHIFVuaWZpZWQgU29sdXRpb25zIFB0eSBMdGQgYXMgYSB0ZWFtIHByb3ZpZGluZyBJVCBzb2x1dGlvbnMgdG8gdGhlIGNsaWVudHMgZm9jdXNpbmcgb24gY3VzdG9tZXIgc2F0aXNmYWN0aW9uIGFuZCBkZWxpdmVyYWJpbGl0eS5cIixcclxuICAyMDE0OiBcIkY1IEF1dGhvcml6ZWQgUGFydG5lcnMsIENJU0NPIFByZW1pZXIgUGFydG5lciwgQ0lTQ08gQWR2YW5jZWQgQ29sbGFib3JhdGlvbiwgQXJjaGl0ZWN0dXJlIFNwZWNpYWxpemVkIFBhcnRuZXIsIFBhbG8gQWx0byBBdXRob3JpemVkIFBhcnRuZXJzLlwiLFxyXG4gIDIwMTU6IFwiTmltYmxlIFN0b3JhZ2UgUGFydG5lcnMsIE5ldEFQUCBQYXJ0bmVyLCBHRU5FU1lTIENvbGxhYm9yYXRpb25cIixcclxuICAyMDE2OiBcIlRlY2hub2xvZ3kgbWlncmF0aW9uIHRvIE5leHQtR2VuZXJhdGlvbiBGaXJld2FsbHMsIFVDYWFTLCBXaXJlbGVzcywgVGVsZXByZXNlbmNlIGFuZCBTdG9yYWdlLlwiLFxyXG4gIDIwMTc6IFwiUHJlc2VuY2UgaW4gTG9uZG9uLCBvZmZlcmluZyBhbGwgdGhlIHNlcnZpY2VzIGluIG91ciBwb3J0Zm9saW8gaW5jbHVkaW5nLCBVQ2FhUywgU2FhUywgSWFhUywgV2lhYVMgYW5kIEZhYVNcIixcclxuICAyMDE4OiBcIlJlY2VpdmVkIEJUUyBFeGNlbGxlbmNlIEF3YXJkIGluIHJlY29nbml0aW9uIG9mIEV4Y2VsbGVudCBTZXJ2aWNlIGJ5IHRoZSBOU1cgR292ZXJubWVudC5cIixcclxuICAyMDE5OiBcIkJ1aWx0IG91ciBvd24gTG9nZ2luZyBDbG91ZCBDb25uZWN0IFByb2R1Y3QsIE5ld2x5IGRlcGxveWVkIFJEUy9WRElhYVMgU29sdXRpb24gaW50byBpdHMgcG9ydGZvbGlvIGFzIFdvcmtzdGF0aW9uIFNlcnZpY2UuXCIsXHJcbiAgMjAyMDogXCJETlMgQXMgQSBTZXJ2aWNlIHVzaW5nIGEgaHlicmlkIFdpbmRvd3MsIFJlZCBIYXQgTGludXggYW5kSW5mb2Jsb3ggRE5TIFNlcnZlcnNcIixcclxufVxyXG5cclxuY2xhc3MgYWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY3RpdmVZZWFyQ2FyZDogMSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGdvVG9JbmRleCA9IChpbmRleCkgPT4ge1xyXG4gICAgLy91c2luZyBGbGlja2l0eSBBUElcclxuICAgIHRoaXMuZmxrdHkuc2VsZWN0KGluZGV4KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVZZWFyQ2FyZDogaW5kZXggfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TW9yZSBBYm91dCBVcyAtIEJHIFVuaWZpZWQ8L3RpdGxlPlxyXG5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZmF2aWNvbi9iZy5pY29cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPFNlY3Rpb24gcG9zaXRpb249XCJyZWxhdGl2ZVwiIHRleHRBbGlnbj1cImNlbnRlclwiIGJnPXtbXCJncmF5LjIwMFwiLCBcIiNmZmZmZmYwMFwiXX0gcHk9e1sxNiwgMzJdfSBteT17MH0+XHJcbiAgICAgICAgICAgIDxJbWFnZSB6SW5kZXg9XCItMTAwXCIgbXQ9XCItMTI4cHhcIiBzdHlsZT17e21peEJsZW5kTW9kZTpcImRhcmtlblwifX0gbWluSD1cIjQ0OHB4XCIgd2lkdGg9XCIxMDAlXCIgb2JqZWN0Rml0PVwiY292ZXJcIiBsZWZ0PXswfSBwb3NpdGlvbj1cImFic29sdXRlXCIgdG9wPXswfSBzcmM9XCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kb3RzX2NpcmNsZS5qcGdcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICA8SGVhZGluZyB6SW5kZXg9XCIxMDBcIiBzaXplPVwieHNcIiBsZXR0ZXJTcGFjaW5nPXsxLjh9IHRleHRBbGlnbj1cImNlbnRlclwiIGNvbG9yPVwicHJpbWFyeS41MDBcIiBtYj17NH0gdGV4dFRyYW5zZm9ybT1cInVwcGVyY2FzZVwiPldoYXQgd2UgZGVsaXZlcjwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRpdGxlIHpJbmRleD1cIjEwMFwiIGZvbnRTaXplPXtbXCI0NHB4XCIsXCI2NHB4XCJdfT5PdXIgU29sdXRpb25zPC9UaXRsZT5cclxuICAgICAgICAgICAgPFRleHQgekluZGV4PVwiMTAwXCIgZm9udFNpemU9XCJ4bFwiIG10PXsyfT5XZSBjb3ZlciA5MCUgb2YgdGhlIHRlY2hub2xvZ3kgZG9tYWlucy48L1RleHQ+XHJcbiAgICAgICAgPC9TZWN0aW9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHB0LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC0wIHB5LTVcIj5cclxuICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICBmbGlja2l0eVJlZj17KGMpID0+ICh0aGlzLmZsa3R5ID0gYyl9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZyZWVTY3JvbGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29udGFpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1vZmZzZXRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgaGVpZ2h0PVwiOTZweFwiPjxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNHB4XCIgYmc9XCJncmF5LjIwMFwiPjwvQm94PjwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHRpbWVsaW5lKS5yZXZlcnNlKCkubWFwKG5vdGVzID0+ICg8Qm94IHBvcz1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IGg9XCIzMDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiMTYwcHhcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHJvdW5kZWQ9XCI1MCVcIiBib3JkZXJXaWR0aD17NX0gYm9yZGVyV2lkdGhDb2xvcj1cImdyYXkuMjAwXCIgc2l6ZT1cIjk2cHhcIiBjb2xvcj1cIndoaXRlXCIgYmc9XCJwcmltYXJ5LjUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgZm9udEZhbWlseT1cIk5leGEgQm9sZFwiPntub3Rlc1swXX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiMTYwcHhcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggcG9zPVwiYWJzb2x1dGVcIiB0b3A9XCI5NnB4XCIgd2lkdGg9XCIxMDAlXCIgcHg9ezZ9IG10PXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtub3Rlc1sxXX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0JveD4pKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLW9mZnNldFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcHQtMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTQgbWItMCB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15Q291bnQgZW5kUG9pbnQ9ezQwfSBzdWZmaXg9XCIrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkNsaWVudHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk0IG1iLTAgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeUNvdW50IGVuZFBvaW50PXs1fSBzdWZmaXg9XCIrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkxvY2F0aW9uczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTQgbWItMCB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15Q291bnQgZW5kUG9pbnQ9ezIwfSBzdWZmaXg9XCIrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PlByb2plY3RzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheTYgcHktM1wiPk91ciBNaXNzaW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJHIFVuaWZpZWQgU29sdXRpb25zIFB0eSBMdGQgVGVhbSBjb25zaXN0cyBvZiBleHBlcnRzIGluXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW50IHRlY2hub2xvZ2llcyBsaWtlIFNlY3VyaXR5LCBWb2ljZSBhbmQgYSBicm9hZFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlIG9mIGFkZGl0aW9uYWwgc2tpbGxzIGluY2x1ZGluZyBGNSBMb2FkIEJhbGFuY2VycywgV0FOXHJcbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemF0aW9uLCBXQU4sIENsb3VkIFRlY2hub2xvZ2llcyBhbmQgQ2lzY29cclxuICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2dpZXMuIEFzIGV4cGVydHMgaW4gZGlmZmVyZW50IHRlY2hub2xvZ2llcywgb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXMgaXMgdG8gcHJvdmlkZSBjb21wZXRpdGl2ZSBhbmQgYWZmb3JkYWJsZSBVbmlmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgU29sdXRpb25zIHRvIG91ciBjbGllbnRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlIG1ham9ybHkgZGVhbCB3aXRoIENpc2NvIFZvaWNlIC8gVmlkZW8gUHJvamVjdHMsIFdBTlxyXG4gICAgICAgICAgICAgICAgICAgIEltcGxlbWVudGF0aW9ucywgREMgRGVzaWduIGFuZCBJbXBsZW1lbnRhdGlvbi4gT3VyIGdvYWwgaXNcclxuICAgICAgICAgICAgICAgICAgICB0byBtYWtlIG91ciBjdXN0b21lcnMgbW9yZSBjb21wZXRpdGl2ZSBhbmQgYWNoaWV2ZSBoaWdoZXJcclxuICAgICAgICAgICAgICAgICAgICBidXNpbmVzcyBlZmZpY2llbmN5IHRocm91Z2ggaW5jcmVhc2VkIGFnaWxpdHksIGVmZmVjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvc3QgY29udGFpbm1lbnQgYW5kIGxvd2VyIHJpc2suIEJHIFVuaWZpZWQgU29sdXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kZWQgaW4gMjAxMywgcHJvdmlkZXMgbmF0aW9uYWwgYW5kIGludGVybmF0aW9uYWwgSVRcclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlcyB0byBzb21lIG9mIEF1c3RyYWxpYSdzIGxlYWRpbmcgY29tcGFuaWVzLCB3aG8gdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24gdGVjaG5vbG9neSB0byBpbXByb3ZlIHRoZWlyIGJ1c2luZXNzIHJlc3VsdHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgdGV4dC1jZW50ZXIgZC1mbGV4IGZsZXgtY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoNiB0ZXh0LXByaW1hcnlcIj5URUFNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTVcIj5NZWV0IHRoZSBWaXNpb25hcnkgUGVvcGxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggb2Zmc2V0LWxnLTIgb2Zmc2V0LXhsLTAgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPFRlYW1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZvdW5kZXIgJiBPd25lclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIkppbmd5aSBMaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPVwiaHR0cHM6Ly93d3cuYmd1bmlmaWVkc29sdXRpb25zLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMi9KaW5neWlMaS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkZW50LCBpdXJlIHNlZC4gTm9iaXMgZG9sb3JlIGxhYm9yZSBuYW0gcmVydW0gc2VxdWk/XHJcbiAgICAgICAgICAgICAgICAgICAgTmVtbyBlbmltIHRvdGFtIGV4ZXJjaXRhdGlvbmVtIGF0cXVlIVxyXG4gICAgICAgICAgICAgICAgICA8L1RlYW0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggb2Zmc2V0LWxnLTIgb2Zmc2V0LXhsLTAgY29sLXhsLTZcIj5cclxuICAgICAgICAgICAgICAgICAgPFRlYW1cclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNvLUZvdW5kZXIgYW5kIE1hbmFnaW5nIERpcmVjdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiU2F1cmFiaCBTYXJlZW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz1cImh0dHBzOi8vd3d3LmJndW5pZmllZHNvbHV0aW9ucy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDEvQ2xvc2V1cC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3IsIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuXHJcbiAgICAgICAgICAgICAgICAgICAgUHJvdmlkZW50LCBpdXJlIHNlZC4gTm9iaXMgZG9sb3JlIGxhYm9yZSBuYW0gcmVydW0gc2VxdWk/XHJcbiAgICAgICAgICAgICAgICAgICAgTmVtbyBlbmltIHRvdGFtIGV4ZXJjaXRhdGlvbmVtIGF0cXVlIVxyXG4gICAgICAgICAgICAgICAgICA8L1RlYW0+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTggb2Zmc2V0LWxnLTQgb2Zmc2V0LXhsLTYgY29sLXhsLTYgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWVuZCBweS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NiB0ZXh0LWRhcmtcIj5JbnRlcmVzdGVkIGluIGpvaW5pbmcgb3VyIHRlYW0/PC9zcGFuPiAqL31cclxuICAgICAgICAgICAgICAgICAgey8qIDxhIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBkLWZsZXggbXktMlwiIGhyZWY9XCJcIj5WaWV3IENhcmVlciBPcHBvcnR1bml0aWVzIDxCb3ggYXM9e0ZhQXJyb3dSaWdodH0gaD1cIjE2cHhcIiBtbD1cIjEycHhcIiBteT1cIjRweFwiPjwvQm94PjwvYT4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNVwiIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMTAwcHhcIiB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=