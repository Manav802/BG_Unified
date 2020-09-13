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
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Image"], {
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
      className: "container-fluid p-0 py-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
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
        lineNumber: 56,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "slider-offset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 71
      }
    }))), Object.entries(timeline).reverse().map(notes => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      pos: "relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 67
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      h: "300px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
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
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
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
        lineNumber: 73,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      size: "md",
      fontFamily: "Nexa Bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
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
        lineNumber: 76,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
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
        lineNumber: 78,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      fontSize: "lg",
      textAlign: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 23
      }
    }, notes[1])))), __jsx("div", {
      className: "slider-offset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 71
      }
    }))))), __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-10 offset-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row my-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endPoint: 40,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }, "Clients")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endPoint: 5,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 23
      }
    }, "Locations")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_11__["default"], {
      endPoint: 20,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 23
      }
    }, "Projects"))), __jsx("div", {
      className: "display6 py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 19
      }
    }, "Our Mission"), __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, "BG Unified Solutions Pty Ltd Team consists of experts in different technologies like Security, Voice and a broad range of additional skills including F5 Load Balancers, WAN Optimization, WAN, Cloud Technologies and Cisco Technologies. As experts in different technologies, our focus is to provide competitive and affordable Unified Solutions to our clients."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, "We majorly deal with Cisco Voice / Video Projects, WAN Implementations, DC Design and Implementation. Our goal is to make our customers more competitive and achieve higher business efficiency through increased agility, effective cost containment and lower risk. BG Unified Solutions, founded in 2013, provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results.")))), __jsx("div", {
      className: "section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "p-3 text-center d-flex flex-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "h6 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }
    }, "TEAM"), __jsx("span", {
      className: "display5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 17
      }
    }, "Meet the Visionary People")), __jsx("div", {
      className: "row py-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Founder & Owner",
      name: "Jingyi Li",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Co-Founder and Managing Director",
      name: "Saurabh Sareen",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
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
        lineNumber: 168,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbInRpbWVsaW5lIiwiYWJvdXQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaW5kZXgiLCJmbGt0eSIsInNlbGVjdCIsInNldFN0YXRlIiwiYWN0aXZlWWVhckNhcmQiLCJzdGF0ZSIsInJlbmRlciIsIm1peEJsZW5kTW9kZSIsImMiLCJmcmVlU2Nyb2xsIiwicGFnZURvdHMiLCJwcmV2TmV4dEJ1dHRvbnMiLCJjb250YWluIiwiZHJhZ2dhYmxlIiwiT2JqZWN0IiwiZW50cmllcyIsInJldmVyc2UiLCJtYXAiLCJub3RlcyIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDZixRQUFNLGdKQURTO0FBRWYsUUFBTSwrSUFGUztBQUdmLFFBQU0sZ0VBSFM7QUFJZixRQUFNLCtGQUpTO0FBS2YsUUFBTSw2R0FMUztBQU1mLFFBQU0sMEZBTlM7QUFPZixRQUFNLDRIQVBTO0FBUWYsUUFBTTtBQVJTLENBQWpCOztBQVdBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUE4QjtBQUM1QkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsaUhBTU5DLEtBQUQsSUFBVztBQUNyQjtBQUNBLFdBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkYsS0FBbEI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFBRUMsc0JBQWMsRUFBRUo7QUFBbEIsT0FBZDtBQUNELEtBVmtCOztBQUVqQixTQUFLSyxLQUFMLEdBQWE7QUFDWEQsb0JBQWMsRUFBRTtBQURMLEtBQWI7QUFHRDs7QUFNREUsUUFBTSxHQUFHO0FBQ1AsV0FDRSxtRUFDRTtBQUFLLGVBQVMsRUFBQyxP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WUU7QUFBSyxlQUFTLEVBQUMsMkNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsOERBQUQ7QUFDRSxXQUFLLEVBQUMsa0NBRFI7QUFFRSxVQUFJLEVBQUMsZ0JBRlA7QUFHRSxTQUFHLEVBQUMsMkVBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtS0FERixDQVpGLEVBdUJFO0FBQUssZUFBUyxFQUFDLG1GQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUF2QkYsRUEyQkU7QUFBSyxlQUFTLEVBQUMsTUFBZjtBQUFzQixXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUEzQkYsQ0FMRixDQURGLENBaEdGLENBREYsQ0FERjtBQTBJRDs7QUF2SjJCOztBQTBKZnZCLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy40MDRkZjVkNTdhN2Y1MmUwZTFlYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gXCJyZWFjdC1mbGlja2l0eS1jb21wb25lbnRcIjtcclxuaW1wb3J0IENhcmRXaXRoQWN0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL0NhcmRXaXRoQWN0aW9uXCI7XHJcbmltcG9ydCBUZWFtIGZyb20gXCIuLi9jb21wb25lbnRzL2NhcmRzL3RlYW1cIjtcclxuaW1wb3J0IHsgRmFBcnJvd1JpZ2h0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEJveCwgRmxleCwgSGVhZGluZywgVGV4dCwgSW1hZ2UgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tIFwiLi4vcGFnZUJ1aWxkZXIvU2VjdGlvblwiO1xyXG5pbXBvcnQgVGl0bGUgZnJvbSBcIi4uL3BhZ2VCdWlsZGVyL1RpdGxlXCI7XHJcbmltcG9ydCBNeUNvdW50IGZyb20gXCIuLi9jb21wb25lbnRzL0NvdW50dXAvbWFpblwiO1xyXG5cclxuY29uc3QgdGltZWxpbmUgPSB7XHJcbiAgMjAxMzogXCJGb3VuZGVkIGFuZCBCRyBVbmlmaWVkIFNvbHV0aW9ucyBQdHkgTHRkIGFzIGEgdGVhbSBwcm92aWRpbmcgSVQgc29sdXRpb25zIHRvIHRoZSBjbGllbnRzIGZvY3VzaW5nIG9uIGN1c3RvbWVyIHNhdGlzZmFjdGlvbiBhbmQgZGVsaXZlcmFiaWxpdHkuXCIsXHJcbiAgMjAxNDogXCJGNSBBdXRob3JpemVkIFBhcnRuZXJzLCBDSVNDTyBQcmVtaWVyIFBhcnRuZXIsIENJU0NPIEFkdmFuY2VkIENvbGxhYm9yYXRpb24sIEFyY2hpdGVjdHVyZSBTcGVjaWFsaXplZCBQYXJ0bmVyLCBQYWxvIEFsdG8gQXV0aG9yaXplZCBQYXJ0bmVycy5cIixcclxuICAyMDE1OiBcIk5pbWJsZSBTdG9yYWdlIFBhcnRuZXJzLCBOZXRBUFAgUGFydG5lciwgR0VORVNZUyBDb2xsYWJvcmF0aW9uXCIsXHJcbiAgMjAxNjogXCJUZWNobm9sb2d5IG1pZ3JhdGlvbiB0byBOZXh0LUdlbmVyYXRpb24gRmlyZXdhbGxzLCBVQ2FhUywgV2lyZWxlc3MsIFRlbGVwcmVzZW5jZSBhbmQgU3RvcmFnZS5cIixcclxuICAyMDE3OiBcIlByZXNlbmNlIGluIExvbmRvbiwgb2ZmZXJpbmcgYWxsIHRoZSBzZXJ2aWNlcyBpbiBvdXIgcG9ydGZvbGlvIGluY2x1ZGluZywgVUNhYVMsIFNhYVMsIElhYVMsIFdpYWFTIGFuZCBGYWFTXCIsXHJcbiAgMjAxODogXCJSZWNlaXZlZCBCVFMgRXhjZWxsZW5jZSBBd2FyZCBpbiByZWNvZ25pdGlvbiBvZiBFeGNlbGxlbnQgU2VydmljZSBieSB0aGUgTlNXIEdvdmVybm1lbnQuXCIsXHJcbiAgMjAxOTogXCJCdWlsdCBvdXIgb3duIExvZ2dpbmcgQ2xvdWQgQ29ubmVjdCBQcm9kdWN0LCBOZXdseSBkZXBsb3llZCBSRFMvVkRJYWFTIFNvbHV0aW9uIGludG8gaXRzIHBvcnRmb2xpbyBhcyBXb3Jrc3RhdGlvbiBTZXJ2aWNlLlwiLFxyXG4gIDIwMjA6IFwiRE5TIEFzIEEgU2VydmljZSB1c2luZyBhIGh5YnJpZCBXaW5kb3dzLCBSZWQgSGF0IExpbnV4IGFuZEluZm9ibG94IEROUyBTZXJ2ZXJzXCIsXHJcbn1cclxuXHJcbmNsYXNzIGFib3V0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgYWN0aXZlWWVhckNhcmQ6IDEsXHJcbiAgICB9O1xyXG4gIH1cclxuICBnb1RvSW5kZXggPSAoaW5kZXgpID0+IHtcclxuICAgIC8vdXNpbmcgRmxpY2tpdHkgQVBJXHJcbiAgICB0aGlzLmZsa3R5LnNlbGVjdChpbmRleCk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgYWN0aXZlWWVhckNhcmQ6IGluZGV4IH0pO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFib3V0XCI+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPk1vcmUgQWJvdXQgVXMgLSBCRyBVbmlmaWVkPC90aXRsZT5cclxuXHJcbiAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgcmVsPVwic2hvcnRjdXQgaWNvblwiXHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9hc3NldHMvaW1hZ2VzL2ljb25zL2Zhdmljb24vYmcuaWNvXCJcclxuICAgICAgICAgICAgICB0eXBlPVwiaW1hZ2UveC1pY29uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgIDxTZWN0aW9uIHBvc2l0aW9uPVwicmVsYXRpdmVcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIiBiZz17W1wiZ3JheS4yMDBcIiwgXCIjZmZmZmZmMDBcIl19IHB5PXtbMTYsIDMyXX0gbXk9ezB9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgekluZGV4PVwiLTEwMFwiIG10PVwiLTEyOHB4XCIgc3R5bGU9e3ttaXhCbGVuZE1vZGU6XCJkYXJrZW5cIn19IG1pbkg9XCI0NDhweFwiIHdpZHRoPVwiMTAwJVwiIG9iamVjdEZpdD1cImNvdmVyXCIgbGVmdD17MH0gcG9zaXRpb249XCJhYnNvbHV0ZVwiIHRvcD17MH0gc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvZG90c19jaXJjbGUuanBnXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgekluZGV4PVwiMTAwXCIgc2l6ZT1cInhzXCIgbGV0dGVyU3BhY2luZz17MS44fSB0ZXh0QWxpZ249XCJjZW50ZXJcIiBjb2xvcj1cInByaW1hcnkuNTAwXCIgbWI9ezR9IHRleHRUcmFuc2Zvcm09XCJ1cHBlcmNhc2VcIj5XaGF0IHdlIGRlbGl2ZXI8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUaXRsZSB6SW5kZXg9XCIxMDBcIiBmb250U2l6ZT17W1wiNDRweFwiLFwiNjRweFwiXX0+T3VyIFNvbHV0aW9uczwvVGl0bGU+XHJcbiAgICAgICAgICAgIDxUZXh0IHpJbmRleD1cIjEwMFwiIGZvbnRTaXplPVwieGxcIiBtdD17Mn0+V2UgY292ZXIgOTAlIG9mIHRoZSB0ZWNobm9sb2d5IGRvbWFpbnMuPC9UZXh0PlxyXG4gICAgICAgIDwvU2VjdGlvbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcC0wIHB5LTVcIj5cclxuICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0aW1lbGluZVwiXHJcbiAgICAgICAgICAgICAgICBmbGlja2l0eVJlZj17KGMpID0+ICh0aGlzLmZsa3R5ID0gYyl9XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgIGZyZWVTY3JvbGw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgIHBhZ2VEb3RzOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgcHJldk5leHRCdXR0b25zOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgY29udGFpbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1vZmZzZXRcIj5cclxuICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgaGVpZ2h0PVwiOTZweFwiPjxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNHB4XCIgYmc9XCJncmF5LjIwMFwiPjwvQm94PjwvRmxleD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAge09iamVjdC5lbnRyaWVzKHRpbWVsaW5lKS5yZXZlcnNlKCkubWFwKG5vdGVzID0+ICg8Qm94IHBvcz1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IGg9XCIzMDBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiMTYwcHhcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHJvdW5kZWQ9XCI1MCVcIiBib3JkZXJXaWR0aD17NX0gYm9yZGVyV2lkdGhDb2xvcj1cImdyYXkuMjAwXCIgc2l6ZT1cIjk2cHhcIiBjb2xvcj1cIndoaXRlXCIgYmc9XCJwcmltYXJ5LjUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEhlYWRpbmcgc2l6ZT1cIm1kXCIgZm9udEZhbWlseT1cIk5leGEgQm9sZFwiPntub3Rlc1swXX08L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIHdpZHRoPVwiMTYwcHhcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDxCb3ggcG9zPVwiYWJzb2x1dGVcIiB0b3A9XCI5NnB4XCIgd2lkdGg9XCIxMDAlXCIgcHg9ezZ9IG10PXs4fT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPVwibGdcIiB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtub3Rlc1sxXX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICA8L0JveD4pKX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLW9mZnNldFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0xMCBvZmZzZXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBteS00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTQgbWItMCB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15Q291bnQgZW5kUG9pbnQ9ezQwfSBzdWZmaXg9XCIrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkNsaWVudHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk0IG1iLTAgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeUNvdW50IGVuZFBvaW50PXs1fSBzdWZmaXg9XCIrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PkxvY2F0aW9uczwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTQgbWItMCB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15Q291bnQgZW5kUG9pbnQ9ezIwfSBzdWZmaXg9XCIrXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGg1PlByb2plY3RzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheTYgcHktM1wiPk91ciBNaXNzaW9uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEJHIFVuaWZpZWQgU29sdXRpb25zIFB0eSBMdGQgVGVhbSBjb25zaXN0cyBvZiBleHBlcnRzIGluXHJcbiAgICAgICAgICAgICAgICAgICAgZGlmZmVyZW50IHRlY2hub2xvZ2llcyBsaWtlIFNlY3VyaXR5LCBWb2ljZSBhbmQgYSBicm9hZFxyXG4gICAgICAgICAgICAgICAgICAgIHJhbmdlIG9mIGFkZGl0aW9uYWwgc2tpbGxzIGluY2x1ZGluZyBGNSBMb2FkIEJhbGFuY2VycywgV0FOXHJcbiAgICAgICAgICAgICAgICAgICAgT3B0aW1pemF0aW9uLCBXQU4sIENsb3VkIFRlY2hub2xvZ2llcyBhbmQgQ2lzY29cclxuICAgICAgICAgICAgICAgICAgICBUZWNobm9sb2dpZXMuIEFzIGV4cGVydHMgaW4gZGlmZmVyZW50IHRlY2hub2xvZ2llcywgb3VyXHJcbiAgICAgICAgICAgICAgICAgICAgZm9jdXMgaXMgdG8gcHJvdmlkZSBjb21wZXRpdGl2ZSBhbmQgYWZmb3JkYWJsZSBVbmlmaWVkXHJcbiAgICAgICAgICAgICAgICAgICAgU29sdXRpb25zIHRvIG91ciBjbGllbnRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIFdlIG1ham9ybHkgZGVhbCB3aXRoIENpc2NvIFZvaWNlIC8gVmlkZW8gUHJvamVjdHMsIFdBTlxyXG4gICAgICAgICAgICAgICAgICAgIEltcGxlbWVudGF0aW9ucywgREMgRGVzaWduIGFuZCBJbXBsZW1lbnRhdGlvbi4gT3VyIGdvYWwgaXNcclxuICAgICAgICAgICAgICAgICAgICB0byBtYWtlIG91ciBjdXN0b21lcnMgbW9yZSBjb21wZXRpdGl2ZSBhbmQgYWNoaWV2ZSBoaWdoZXJcclxuICAgICAgICAgICAgICAgICAgICBidXNpbmVzcyBlZmZpY2llbmN5IHRocm91Z2ggaW5jcmVhc2VkIGFnaWxpdHksIGVmZmVjdGl2ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvc3QgY29udGFpbm1lbnQgYW5kIGxvd2VyIHJpc2suIEJHIFVuaWZpZWQgU29sdXRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvdW5kZWQgaW4gMjAxMywgcHJvdmlkZXMgbmF0aW9uYWwgYW5kIGludGVybmF0aW9uYWwgSVRcclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlcyB0byBzb21lIG9mIEF1c3RyYWxpYSdzIGxlYWRpbmcgY29tcGFuaWVzLCB3aG8gdXNlXHJcbiAgICAgICAgICAgICAgICAgICAgaW5mb3JtYXRpb24gdGVjaG5vbG9neSB0byBpbXByb3ZlIHRoZWlyIGJ1c2luZXNzIHJlc3VsdHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHRleHQtY2VudGVyIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDYgdGV4dC1wcmltYXJ5XCI+VEVBTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk1XCI+TWVldCB0aGUgVmlzaW9uYXJ5IFBlb3BsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy0yIG9mZnNldC14bC0wIGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZWFtXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3VuZGVyICYgT3duZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJKaW5neWkgTGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz1cImh0dHBzOi8vd3d3LmJndW5pZmllZHNvbHV0aW9ucy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDIvSmluZ3lpTGkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGVudCwgaXVyZSBzZWQuIE5vYmlzIGRvbG9yZSBsYWJvcmUgbmFtIHJlcnVtIHNlcXVpP1xyXG4gICAgICAgICAgICAgICAgICAgIE5lbW8gZW5pbSB0b3RhbSBleGVyY2l0YXRpb25lbSBhdHF1ZSFcclxuICAgICAgICAgICAgICAgICAgPC9UZWFtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy0yIG9mZnNldC14bC0wIGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZWFtXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDby1Gb3VuZGVyIGFuZCBNYW5hZ2luZyBEaXJlY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNhdXJhYmggU2FyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9XCJodHRwczovL3d3dy5iZ3VuaWZpZWRzb2x1dGlvbnMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAxL0Nsb3NldXAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGVudCwgaXVyZSBzZWQuIE5vYmlzIGRvbG9yZSBsYWJvcmUgbmFtIHJlcnVtIHNlcXVpP1xyXG4gICAgICAgICAgICAgICAgICAgIE5lbW8gZW5pbSB0b3RhbSBleGVyY2l0YXRpb25lbSBhdHF1ZSFcclxuICAgICAgICAgICAgICAgICAgPC9UZWFtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy00IG9mZnNldC14bC02IGNvbC14bC02IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1lbmQgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTYgdGV4dC1kYXJrXCI+SW50ZXJlc3RlZCBpbiBqb2luaW5nIG91ciB0ZWFtPzwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZC1mbGV4IG15LTJcIiBocmVmPVwiXCI+VmlldyBDYXJlZXIgT3Bwb3J0dW5pdGllcyA8Qm94IGFzPXtGYUFycm93UmlnaHR9IGg9XCIxNnB4XCIgbWw9XCIxMnB4XCIgbXk9XCI0cHhcIj48L0JveD48L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTVcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjEwMHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9