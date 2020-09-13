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
/* harmony import */ var _components_Countup_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Countup/main */ "./src/components/Countup/main.jsx");

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
        lineNumber: 37,
        columnNumber: 9
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 11
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }, "More About Us - BG Unified"), __jsx("link", {
      rel: "shortcut icon",
      href: "/assets/images/icons/favicon/bg.ico",
      type: "image/x-icon",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    })), __jsx(Section, {
      position: "relative",
      textAlign: "center",
      bg: ["gray.200", "#ffffff00"],
      py: [16, 32],
      my: 0,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
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
        lineNumber: 48,
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
        lineNumber: 49,
        columnNumber: 13
      }
    }, "What we deliver"), __jsx(Title, {
      zIndex: "100",
      fontSize: ["44px", "64px"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }
    }, "Our Solutions"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      zIndex: "100",
      fontSize: "xl",
      mt: 2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 13
      }
    }, "We cover 90% of the technology domains.")), __jsx("div", {
      className: "section pt-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container-fluid p-0 py-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
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
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "slider-offset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 71
      }
    }))), Object.entries(timeline).reverse().map(notes => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      pos: "relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 67
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      h: "300px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
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
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
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
        lineNumber: 72,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      size: "md",
      fontFamily: "Nexa Bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
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
        lineNumber: 75,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
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
        lineNumber: 77,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      fontSize: "lg",
      textAlign: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 23
      }
    }, notes[1])))), __jsx("div", {
      className: "slider-offset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 71
      }
    })))))), __jsx("div", {
      className: "section pt-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-10 offset-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row my-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_9__["default"], {
      endPoint: 40,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 23
      }
    }, "Clients")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_9__["default"], {
      endPoint: 5,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 23
      }
    }, "Locations")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_9__["default"], {
      endPoint: 20,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 23
      }
    }, "Projects"))), __jsx("div", {
      className: "display6 py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 19
      }
    }, "Our Mission"), __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 19
      }
    }, "BG Unified Solutions Pty Ltd Team consists of experts in different technologies like Security, Voice and a broad range of additional skills including F5 Load Balancers, WAN Optimization, WAN, Cloud Technologies and Cisco Technologies. As experts in different technologies, our focus is to provide competitive and affordable Unified Solutions to our clients."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 19
      }
    }, "We majorly deal with Cisco Voice / Video Projects, WAN Implementations, DC Design and Implementation. Our goal is to make our customers more competitive and achieve higher business efficiency through increased agility, effective cost containment and lower risk. BG Unified Solutions, founded in 2013, provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results."))))), __jsx("div", {
      className: "section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "p-3 text-center d-flex flex-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "h6 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, "TEAM"), __jsx("span", {
      className: "display5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 17
      }
    }, "Meet the Visionary People")), __jsx("div", {
      className: "row py-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Founder & Owner",
      name: "Jingyi Li",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Co-Founder and Managing Director",
      name: "Saurabh Sareen",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
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
        lineNumber: 170,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbInRpbWVsaW5lIiwiYWJvdXQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaW5kZXgiLCJmbGt0eSIsInNlbGVjdCIsInNldFN0YXRlIiwiYWN0aXZlWWVhckNhcmQiLCJzdGF0ZSIsInJlbmRlciIsIm1peEJsZW5kTW9kZSIsImMiLCJmcmVlU2Nyb2xsIiwicGFnZURvdHMiLCJwcmV2TmV4dEJ1dHRvbnMiLCJjb250YWluIiwiZHJhZ2dhYmxlIiwiT2JqZWN0IiwiZW50cmllcyIsInJldmVyc2UiLCJtYXAiLCJub3RlcyIsInBhZGRpbmdUb3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxRQUFRLEdBQUc7QUFDZixRQUFNLGdKQURTO0FBRWYsUUFBTSwrSUFGUztBQUdmLFFBQU0sZ0VBSFM7QUFJZixRQUFNLCtGQUpTO0FBS2YsUUFBTSw2R0FMUztBQU1mLFFBQU0sMEZBTlM7QUFPZixRQUFNLDRIQVBTO0FBUWYsUUFBTTtBQVJTLENBQWpCOztBQVdBLE1BQU1DLEtBQU4sU0FBb0JDLCtDQUFwQixDQUE4QjtBQUM1QkMsYUFBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjs7QUFEaUIsaUhBTU5DLEtBQUQsSUFBVztBQUNyQjtBQUNBLFdBQUtDLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQkYsS0FBbEI7QUFDQSxXQUFLRyxRQUFMLENBQWM7QUFBRUMsc0JBQWMsRUFBRUo7QUFBbEIsT0FBZDtBQUNELEtBVmtCOztBQUVqQixTQUFLSyxLQUFMLEdBQWE7QUFDWEQsb0JBQWMsRUFBRTtBQURMLEtBQWI7QUFHRDs7QUFNREUsUUFBTSxHQUFHO0FBQ1AsV0FDRSxtRUFDRTtBQUFLLGVBQVMsRUFBQyxPQUFmO0FBQUE7QUFB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REFBRDtBQUNFLFdBQUssRUFBQyxpQkFEUjtBQUVFLFVBQUksRUFBQyxXQUZQO0FBR0UsU0FBRyxFQUFDLDRFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUtBREYsQ0FERixFQVlFO0FBQUssZUFBUyxFQUFDLDJDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRSxNQUFDLDhEQUFEO0FBQ0UsV0FBSyxFQUFDLGtDQURSO0FBRUUsVUFBSSxFQUFDLGdCQUZQO0FBR0UsU0FBRyxFQUFDLDJFQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUtBREYsQ0FaRixFQXVCRTtBQUFLLGVBQVMsRUFBQyxtRkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BdkJGLEVBMkJFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBc0IsV0FBSyxFQUFFO0FBQUVDLGtCQUFVLEVBQUU7QUFBZCxPQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BM0JGLENBTEYsQ0FERixDQXBHRixDQURGLENBREY7QUE4SUQ7O0FBM0oyQjs7QUE4SmZ2QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYWJvdXQuanMuOGYwNWVhMzRjOGQ0M2Q2NGJjNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNsaWRlciBmcm9tIFwicmVhY3QtZmxpY2tpdHktY29tcG9uZW50XCI7XHJcbmltcG9ydCBDYXJkV2l0aEFjdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkcy9DYXJkV2l0aEFjdGlvblwiO1xyXG5pbXBvcnQgVGVhbSBmcm9tIFwiLi4vY29tcG9uZW50cy9jYXJkcy90ZWFtXCI7XHJcbmltcG9ydCB7IEZhQXJyb3dSaWdodCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBCb3gsIEZsZXgsIEhlYWRpbmcsIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9jb3JlXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IEZhZGUgZnJvbSAncmVhY3QtcmV2ZWFsL0ZhZGUnO1xyXG5pbXBvcnQgTXlDb3VudCBmcm9tIFwiLi4vY29tcG9uZW50cy9Db3VudHVwL21haW5cIjtcclxuXHJcbmNvbnN0IHRpbWVsaW5lID0ge1xyXG4gIDIwMTM6IFwiRm91bmRlZCBhbmQgQkcgVW5pZmllZCBTb2x1dGlvbnMgUHR5IEx0ZCBhcyBhIHRlYW0gcHJvdmlkaW5nIElUIHNvbHV0aW9ucyB0byB0aGUgY2xpZW50cyBmb2N1c2luZyBvbiBjdXN0b21lciBzYXRpc2ZhY3Rpb24gYW5kIGRlbGl2ZXJhYmlsaXR5LlwiLFxyXG4gIDIwMTQ6IFwiRjUgQXV0aG9yaXplZCBQYXJ0bmVycywgQ0lTQ08gUHJlbWllciBQYXJ0bmVyLCBDSVNDTyBBZHZhbmNlZCBDb2xsYWJvcmF0aW9uLCBBcmNoaXRlY3R1cmUgU3BlY2lhbGl6ZWQgUGFydG5lciwgUGFsbyBBbHRvIEF1dGhvcml6ZWQgUGFydG5lcnMuXCIsXHJcbiAgMjAxNTogXCJOaW1ibGUgU3RvcmFnZSBQYXJ0bmVycywgTmV0QVBQIFBhcnRuZXIsIEdFTkVTWVMgQ29sbGFib3JhdGlvblwiLFxyXG4gIDIwMTY6IFwiVGVjaG5vbG9neSBtaWdyYXRpb24gdG8gTmV4dC1HZW5lcmF0aW9uIEZpcmV3YWxscywgVUNhYVMsIFdpcmVsZXNzLCBUZWxlcHJlc2VuY2UgYW5kIFN0b3JhZ2UuXCIsXHJcbiAgMjAxNzogXCJQcmVzZW5jZSBpbiBMb25kb24sIG9mZmVyaW5nIGFsbCB0aGUgc2VydmljZXMgaW4gb3VyIHBvcnRmb2xpbyBpbmNsdWRpbmcsIFVDYWFTLCBTYWFTLCBJYWFTLCBXaWFhUyBhbmQgRmFhU1wiLFxyXG4gIDIwMTg6IFwiUmVjZWl2ZWQgQlRTIEV4Y2VsbGVuY2UgQXdhcmQgaW4gcmVjb2duaXRpb24gb2YgRXhjZWxsZW50IFNlcnZpY2UgYnkgdGhlIE5TVyBHb3Zlcm5tZW50LlwiLFxyXG4gIDIwMTk6IFwiQnVpbHQgb3VyIG93biBMb2dnaW5nIENsb3VkIENvbm5lY3QgUHJvZHVjdCwgTmV3bHkgZGVwbG95ZWQgUkRTL1ZESWFhUyBTb2x1dGlvbiBpbnRvIGl0cyBwb3J0Zm9saW8gYXMgV29ya3N0YXRpb24gU2VydmljZS5cIixcclxuICAyMDIwOiBcIkROUyBBcyBBIFNlcnZpY2UgdXNpbmcgYSBoeWJyaWQgV2luZG93cywgUmVkIEhhdCBMaW51eCBhbmRJbmZvYmxveCBETlMgU2VydmVyc1wiLFxyXG59XHJcblxyXG5jbGFzcyBhYm91dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGFjdGl2ZVllYXJDYXJkOiAxLFxyXG4gICAgfTtcclxuICB9XHJcbiAgZ29Ub0luZGV4ID0gKGluZGV4KSA9PiB7XHJcbiAgICAvL3VzaW5nIEZsaWNraXR5IEFQSVxyXG4gICAgdGhpcy5mbGt0eS5zZWxlY3QoaW5kZXgpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGFjdGl2ZVllYXJDYXJkOiBpbmRleCB9KTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYm91dFwiPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5Nb3JlIEFib3V0IFVzIC0gQkcgVW5pZmllZDwvdGl0bGU+XHJcblxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvYXNzZXRzL2ltYWdlcy9pY29ucy9mYXZpY29uL2JnLmljb1wiXHJcbiAgICAgICAgICAgICAgdHlwZT1cImltYWdlL3gtaWNvblwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICA8U2VjdGlvbiBwb3NpdGlvbj1cInJlbGF0aXZlXCIgdGV4dEFsaWduPVwiY2VudGVyXCIgYmc9e1tcImdyYXkuMjAwXCIsIFwiI2ZmZmZmZjAwXCJdfSBweT17WzE2LCAzMl19IG15PXswfT5cclxuICAgICAgICAgICAgPEltYWdlIHpJbmRleD1cIi0xMDBcIiBtdD1cIi0xMjhweFwiIHN0eWxlPXt7bWl4QmxlbmRNb2RlOlwiZGFya2VuXCJ9fSBtaW5IPVwiNDQ4cHhcIiB3aWR0aD1cIjEwMCVcIiBvYmplY3RGaXQ9XCJjb3ZlclwiIGxlZnQ9ezB9IHBvc2l0aW9uPVwiYWJzb2x1dGVcIiB0b3A9ezB9IHNyYz1cIi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL2RvdHNfY2lyY2xlLmpwZ1wiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHpJbmRleD1cIjEwMFwiIHNpemU9XCJ4c1wiIGxldHRlclNwYWNpbmc9ezEuOH0gdGV4dEFsaWduPVwiY2VudGVyXCIgY29sb3I9XCJwcmltYXJ5LjUwMFwiIG1iPXs0fSB0ZXh0VHJhbnNmb3JtPVwidXBwZXJjYXNlXCI+V2hhdCB3ZSBkZWxpdmVyPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGl0bGUgekluZGV4PVwiMTAwXCIgZm9udFNpemU9e1tcIjQ0cHhcIixcIjY0cHhcIl19Pk91ciBTb2x1dGlvbnM8L1RpdGxlPlxyXG4gICAgICAgICAgICA8VGV4dCB6SW5kZXg9XCIxMDBcIiBmb250U2l6ZT1cInhsXCIgbXQ9ezJ9PldlIGNvdmVyIDkwJSBvZiB0aGUgdGVjaG5vbG9neSBkb21haW5zLjwvVGV4dD5cclxuICAgICAgICA8L1NlY3Rpb24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24gcHQtMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBwLTAgcHktNVwiPlxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lXCJcclxuICAgICAgICAgICAgICAgIGZsaWNraXR5UmVmPXsoYykgPT4gKHRoaXMuZmxrdHkgPSBjKX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgZnJlZVNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBwcmV2TmV4dEJ1dHRvbnM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb250YWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLW9mZnNldFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModGltZWxpbmUpLnJldmVyc2UoKS5tYXAobm90ZXMgPT4gKDxCb3ggcG9zPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgPEZsZXggaD1cIjMwMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxNjBweFwiIGhlaWdodD1cIjk2cHhcIj48Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjRweFwiIGJnPVwiZ3JheS4yMDBcIj48L0JveD48L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgcm91bmRlZD1cIjUwJVwiIGJvcmRlcldpZHRoPXs1fSBib3JkZXJXaWR0aENvbG9yPVwiZ3JheS4yMDBcIiBzaXplPVwiOTZweFwiIGNvbG9yPVwid2hpdGVcIiBiZz1cInByaW1hcnkuNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SGVhZGluZyBzaXplPVwibWRcIiBmb250RmFtaWx5PVwiTmV4YSBCb2xkXCI+e25vdGVzWzBdfTwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZsZXgganVzdGlmeT1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgd2lkdGg9XCIxNjBweFwiIGhlaWdodD1cIjk2cHhcIj48Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjRweFwiIGJnPVwiZ3JheS4yMDBcIj48L0JveD48L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPEJveCBwb3M9XCJhYnNvbHV0ZVwiIHRvcD1cIjk2cHhcIiB3aWR0aD1cIjEwMCVcIiBweD17Nn0gbXQ9ezh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9XCJsZ1wiIHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge25vdGVzWzFdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgIDwvQm94PikpfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItb2Zmc2V0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxGbGV4IGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIGhlaWdodD1cIjk2cHhcIj48Qm94IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjRweFwiIGJnPVwiZ3JheS4yMDBcIj48L0JveD48L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwdC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEwIG9mZnNldC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG15LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NCBtYi0wIHRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TXlDb3VudCBlbmRQb2ludD17NDB9IHN1ZmZpeD1cIitcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDU+Q2xpZW50czwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc20tMyBjb2wtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTQgbWItMCB0ZXh0LXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE15Q291bnQgZW5kUG9pbnQ9ezV9IHN1ZmZpeD1cIitcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDU+TG9jYXRpb25zPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NCBtYi0wIHRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TXlDb3VudCBlbmRQb2ludD17MjB9IHN1ZmZpeD1cIitcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDU+UHJvamVjdHM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5NiBweS0zXCI+T3VyIE1pc3Npb248L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgQkcgVW5pZmllZCBTb2x1dGlvbnMgUHR5IEx0ZCBUZWFtIGNvbnNpc3RzIG9mIGV4cGVydHMgaW5cclxuICAgICAgICAgICAgICAgICAgICBkaWZmZXJlbnQgdGVjaG5vbG9naWVzIGxpa2UgU2VjdXJpdHksIFZvaWNlIGFuZCBhIGJyb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgcmFuZ2Ugb2YgYWRkaXRpb25hbCBza2lsbHMgaW5jbHVkaW5nIEY1IExvYWQgQmFsYW5jZXJzLCBXQU5cclxuICAgICAgICAgICAgICAgICAgICBPcHRpbWl6YXRpb24sIFdBTiwgQ2xvdWQgVGVjaG5vbG9naWVzIGFuZCBDaXNjb1xyXG4gICAgICAgICAgICAgICAgICAgIFRlY2hub2xvZ2llcy4gQXMgZXhwZXJ0cyBpbiBkaWZmZXJlbnQgdGVjaG5vbG9naWVzLCBvdXJcclxuICAgICAgICAgICAgICAgICAgICBmb2N1cyBpcyB0byBwcm92aWRlIGNvbXBldGl0aXZlIGFuZCBhZmZvcmRhYmxlIFVuaWZpZWRcclxuICAgICAgICAgICAgICAgICAgICBTb2x1dGlvbnMgdG8gb3VyIGNsaWVudHMuXHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgV2UgbWFqb3JseSBkZWFsIHdpdGggQ2lzY28gVm9pY2UgLyBWaWRlbyBQcm9qZWN0cywgV0FOXHJcbiAgICAgICAgICAgICAgICAgICAgSW1wbGVtZW50YXRpb25zLCBEQyBEZXNpZ24gYW5kIEltcGxlbWVudGF0aW9uLiBPdXIgZ29hbCBpc1xyXG4gICAgICAgICAgICAgICAgICAgIHRvIG1ha2Ugb3VyIGN1c3RvbWVycyBtb3JlIGNvbXBldGl0aXZlIGFuZCBhY2hpZXZlIGhpZ2hlclxyXG4gICAgICAgICAgICAgICAgICAgIGJ1c2luZXNzIGVmZmljaWVuY3kgdGhyb3VnaCBpbmNyZWFzZWQgYWdpbGl0eSwgZWZmZWN0aXZlXHJcbiAgICAgICAgICAgICAgICAgICAgY29zdCBjb250YWlubWVudCBhbmQgbG93ZXIgcmlzay4gQkcgVW5pZmllZCBTb2x1dGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRlZCBpbiAyMDEzLCBwcm92aWRlcyBuYXRpb25hbCBhbmQgaW50ZXJuYXRpb25hbCBJVFxyXG4gICAgICAgICAgICAgICAgICAgIFNlcnZpY2VzIHRvIHNvbWUgb2YgQXVzdHJhbGlhJ3MgbGVhZGluZyBjb21wYW5pZXMsIHdobyB1c2VcclxuICAgICAgICAgICAgICAgICAgICBpbmZvcm1hdGlvbiB0ZWNobm9sb2d5IHRvIGltcHJvdmUgdGhlaXIgYnVzaW5lc3MgcmVzdWx0cy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyB0ZXh0LWNlbnRlciBkLWZsZXggZmxleC1jb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImg2IHRleHQtcHJpbWFyeVwiPlRFQU08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NVwiPk1lZXQgdGhlIFZpc2lvbmFyeSBQZW9wbGU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktMlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBvZmZzZXQtbGctMiBvZmZzZXQteGwtMCBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGVhbVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiRm91bmRlciAmIE93bmVyXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiSmluZ3lpIExpXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9XCJodHRwczovL3d3dy5iZ3VuaWZpZWRzb2x1dGlvbnMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAyL0ppbmd5aUxpLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlbnQsIGl1cmUgc2VkLiBOb2JpcyBkb2xvcmUgbGFib3JlIG5hbSByZXJ1bSBzZXF1aT9cclxuICAgICAgICAgICAgICAgICAgICBOZW1vIGVuaW0gdG90YW0gZXhlcmNpdGF0aW9uZW0gYXRxdWUhXHJcbiAgICAgICAgICAgICAgICAgIDwvVGVhbT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBvZmZzZXQtbGctMiBvZmZzZXQteGwtMCBjb2wteGwtNlwiPlxyXG4gICAgICAgICAgICAgICAgICA8VGVhbVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ28tRm91bmRlciBhbmQgTWFuYWdpbmcgRGlyZWN0b3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJTYXVyYWJoIFNhcmVlblwiXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nPVwiaHR0cHM6Ly93d3cuYmd1bmlmaWVkc29sdXRpb25zLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxOS8wMS9DbG9zZXVwLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciwgc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC5cclxuICAgICAgICAgICAgICAgICAgICBQcm92aWRlbnQsIGl1cmUgc2VkLiBOb2JpcyBkb2xvcmUgbGFib3JlIG5hbSByZXJ1bSBzZXF1aT9cclxuICAgICAgICAgICAgICAgICAgICBOZW1vIGVuaW0gdG90YW0gZXhlcmNpdGF0aW9uZW0gYXRxdWUhXHJcbiAgICAgICAgICAgICAgICAgIDwvVGVhbT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctOCBvZmZzZXQtbGctNCBvZmZzZXQteGwtNiBjb2wteGwtNiBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtZW5kIHB5LTNcIj5cclxuICAgICAgICAgICAgICAgICAgey8qIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk2IHRleHQtZGFya1wiPkludGVyZXN0ZWQgaW4gam9pbmluZyBvdXIgdGVhbT88L3NwYW4+ICovfVxyXG4gICAgICAgICAgICAgICAgICB7LyogPGEgY2xhc3NOYW1lPVwidGV4dC1wcmltYXJ5IGQtZmxleCBteS0yXCIgaHJlZj1cIlwiPlZpZXcgQ2FyZWVyIE9wcG9ydHVuaXRpZXMgPEJveCBhcz17RmFBcnJvd1JpZ2h0fSBoPVwiMTZweFwiIG1sPVwiMTJweFwiIG15PVwiNHB4XCI+PC9Cb3g+PC9hPiAqL31cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS01XCIgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCIxMDBweFwiIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhYm91dDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==