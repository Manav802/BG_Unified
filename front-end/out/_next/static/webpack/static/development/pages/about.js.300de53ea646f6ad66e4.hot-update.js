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
    })), __jsx("div", {
      className: "position-absolute w-100 overflow-hidden background-svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 11
      }
    }, __jsx("img", {
      className: "w-100",
      src: "/assets/images/backgrounds/dots_circle.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "page-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-4 offset-lg-4 text-center justify-content-center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx("h1", {
      className: "display3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 19
      }
    }, "About Us"))))), __jsx("div", {
      className: "section pt-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container-fluid p-0 py-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row m-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "slider-offset p-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    })), __jsx(react_flickity_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: "timeline",
      flickityRef: c => this.flkty = c,
      options: {
        freeScroll: true,
        pageDots: false,
        contain: true,
        draggable: true
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "slider-offset",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      justify: "center",
      align: "center",
      height: "96px",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 71
      }
    }))), Object.entries(timeline).map(notes => __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      pos: "relative",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 57
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
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
        lineNumber: 83,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
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
        lineNumber: 84,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Heading"], {
      size: "md",
      fontFamily: "Nexa Bold",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
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
        lineNumber: 87,
        columnNumber: 21
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Box"], {
      width: "100%",
      height: "4px",
      bg: "gray.200",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
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
        lineNumber: 89,
        columnNumber: 19
      }
    }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_6__["Text"], {
      fontSize: "lg",
      textAlign: "center",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 23
      }
    }, notes[1])))), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2020",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 19
      }
    }, "DNS As A Service using a hybrid Windows, Red Hat Linux and Infoblox DNS Servers")), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2019",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 19
      }
    }, "Built our own Logging Cloud Connect Product, Newly deployed RDS/VDIaaS Solution into its portfolio as Workstation Service.")), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2018",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 19
      }
    }, "Received BTS Excellence Award in recognition of Excellent Service by the NSW Government.")), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2017",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 19
      }
    }, "Presence in London, offering all the services in our portfolio including, UCaaS, SaaS, IaaS, WiaaS and FaaS")), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2016",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 19
      }
    }, "Technology migration to Next-Generation Firewalls, UCaaS, Wireless, Telepresence and Storage.")), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2015",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 19
      }
    }, "Nimble Storage Partners, NetAPP Partner, GENESYS Collaboration")), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2014",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 19
      }
    }, "F5 Authorized Partners, CISCO Premier Partner, CISCO Advanced Collaboration, Architecture Specialized Partner, Palo Alto Authorized Partners.", " ")), __jsx("div", {
      className: "col-xl-3 col-lg-4 col-md-7 p-3 my-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 17
      }
    }, __jsx(_components_cards_CardWithAction__WEBPACK_IMPORTED_MODULE_3__["default"], {
      title: "2013",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 19
      }
    }, "Founded and BG Unified Solutions Pty Ltd as a team providing IT solutions to the clients focusing on customer satisfaction and deliverability.", " "))))), __jsx("div", {
      className: "section pt-0",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-10 offset-1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row my-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_9__["default"], {
      endPoint: 40,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 23
      }
    }, "Clients")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_9__["default"], {
      endPoint: 5,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 23
      }
    }, "Locations")), __jsx("div", {
      className: "col-sm-3 col-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: "display4 mb-0 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 23
      }
    }, __jsx(_components_Countup_main__WEBPACK_IMPORTED_MODULE_9__["default"], {
      endPoint: 20,
      suffix: "+",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 25
      }
    })), __jsx("h5", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 23
      }
    }, "Projects"))), __jsx("div", {
      className: "display6 py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 19
      }
    }, "Our Mission"), __jsx("p", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 19
      }
    }, "BG Unified Solutions Pty Ltd Team consists of experts in different technologies like Security, Voice and a broad range of additional skills including F5 Load Balancers, WAN Optimization, WAN, Cloud Technologies and Cisco Technologies. As experts in different technologies, our focus is to provide competitive and affordable Unified Solutions to our clients."), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 19
      }
    }, "We majorly deal with Cisco Voice / Video Projects, WAN Implementations, DC Design and Implementation. Our goal is to make our customers more competitive and achieve higher business efficiency through increased agility, effective cost containment and lower risk. BG Unified Solutions, founded in 2013, provides national and international IT Services to some of Australia's leading companies, who use information technology to improve their business results."))))), __jsx("div", {
      className: "section",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "p-3 text-center d-flex flex-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: "h6 text-primary",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }
    }, "TEAM"), __jsx("span", {
      className: "display5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 17
      }
    }, "Meet the Visionary People")), __jsx("div", {
      className: "row py-2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Founder & Owner",
      name: "Jingyi Li",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/02/JingyiLi.png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-2 offset-xl-0 col-xl-6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }
    }, __jsx(_components_cards_team__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: "Co-Founder and Managing Director",
      name: "Saurabh Sareen",
      img: "https://www.bgunifiedsolutions.net/wp-content/uploads/2019/01/Closeup.jpg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 19
      }
    }, "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, iure sed. Nobis dolore labore nam rerum sequi? Nemo enim totam exercitationem atque!")), __jsx("div", {
      className: "col-lg-8 offset-lg-4 offset-xl-6 col-xl-6 d-flex flex-column align-items-end py-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
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
        lineNumber: 231,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYWJvdXQuanN4Il0sIm5hbWVzIjpbInRpbWVsaW5lIiwiYWJvdXQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiaW5kZXgiLCJmbGt0eSIsInNlbGVjdCIsInNldFN0YXRlIiwiYWN0aXZlWWVhckNhcmQiLCJzdGF0ZSIsInJlbmRlciIsImMiLCJmcmVlU2Nyb2xsIiwicGFnZURvdHMiLCJjb250YWluIiwiZHJhZ2dhYmxlIiwiT2JqZWN0IiwiZW50cmllcyIsIm1hcCIsIm5vdGVzIiwicGFkZGluZ1RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBRztBQUNmLFFBQU0sZ0pBRFM7QUFFZixRQUFNLCtJQUZTO0FBR2YsUUFBTSxnRUFIUztBQUlmLFFBQU0sK0ZBSlM7QUFLZixRQUFNLDZHQUxTO0FBTWYsUUFBTSwwRkFOUztBQU9mLFFBQU0sNEhBUFM7QUFRZixRQUFNO0FBUlMsQ0FBakI7O0FBV0EsTUFBTUMsS0FBTixTQUFvQkMsK0NBQXBCLENBQThCO0FBQzVCQyxhQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOOztBQURpQixpSEFNTkMsS0FBRCxJQUFXO0FBQ3JCO0FBQ0EsV0FBS0MsS0FBTCxDQUFXQyxNQUFYLENBQWtCRixLQUFsQjtBQUNBLFdBQUtHLFFBQUwsQ0FBYztBQUFFQyxzQkFBYyxFQUFFSjtBQUFsQixPQUFkO0FBQ0QsS0FWa0I7O0FBRWpCLFNBQUtLLEtBQUwsR0FBYTtBQUNYRCxvQkFBYyxFQUFFO0FBREwsS0FBYjtBQUdEOztBQU1ERSxRQUFNLEdBQUc7QUFDUCxXQUNFLG1FQUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsZ0RBQUQ7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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTNCRixDQUxGLENBREYsQ0FqS0YsQ0FERixDQURGO0FBMk1EOztBQXhOMkI7O0FBMk5mcEIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzLjMwMGRlNTNlYTY0NmY2YWQ2NmU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSBcInJlYWN0LWZsaWNraXR5LWNvbXBvbmVudFwiO1xyXG5pbXBvcnQgQ2FyZFdpdGhBY3Rpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvQ2FyZFdpdGhBY3Rpb25cIjtcclxuaW1wb3J0IFRlYW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2FyZHMvdGVhbVwiO1xyXG5pbXBvcnQgeyBGYUFycm93UmlnaHQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHsgQm94LCBGbGV4LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvY29yZVwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuaW1wb3J0IE15Q291bnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ291bnR1cC9tYWluXCI7XHJcblxyXG5jb25zdCB0aW1lbGluZSA9IHtcclxuICAyMDEzOiBcIkZvdW5kZWQgYW5kIEJHIFVuaWZpZWQgU29sdXRpb25zIFB0eSBMdGQgYXMgYSB0ZWFtIHByb3ZpZGluZyBJVCBzb2x1dGlvbnMgdG8gdGhlIGNsaWVudHMgZm9jdXNpbmcgb24gY3VzdG9tZXIgc2F0aXNmYWN0aW9uIGFuZCBkZWxpdmVyYWJpbGl0eS5cIixcclxuICAyMDE0OiBcIkY1IEF1dGhvcml6ZWQgUGFydG5lcnMsIENJU0NPIFByZW1pZXIgUGFydG5lciwgQ0lTQ08gQWR2YW5jZWQgQ29sbGFib3JhdGlvbiwgQXJjaGl0ZWN0dXJlIFNwZWNpYWxpemVkIFBhcnRuZXIsIFBhbG8gQWx0byBBdXRob3JpemVkIFBhcnRuZXJzLlwiLFxyXG4gIDIwMTU6IFwiTmltYmxlIFN0b3JhZ2UgUGFydG5lcnMsIE5ldEFQUCBQYXJ0bmVyLCBHRU5FU1lTIENvbGxhYm9yYXRpb25cIixcclxuICAyMDE2OiBcIlRlY2hub2xvZ3kgbWlncmF0aW9uIHRvIE5leHQtR2VuZXJhdGlvbiBGaXJld2FsbHMsIFVDYWFTLCBXaXJlbGVzcywgVGVsZXByZXNlbmNlIGFuZCBTdG9yYWdlLlwiLFxyXG4gIDIwMTc6IFwiUHJlc2VuY2UgaW4gTG9uZG9uLCBvZmZlcmluZyBhbGwgdGhlIHNlcnZpY2VzIGluIG91ciBwb3J0Zm9saW8gaW5jbHVkaW5nLCBVQ2FhUywgU2FhUywgSWFhUywgV2lhYVMgYW5kIEZhYVNcIixcclxuICAyMDE4OiBcIlJlY2VpdmVkIEJUUyBFeGNlbGxlbmNlIEF3YXJkIGluIHJlY29nbml0aW9uIG9mIEV4Y2VsbGVudCBTZXJ2aWNlIGJ5IHRoZSBOU1cgR292ZXJubWVudC5cIixcclxuICAyMDE5OiBcIkJ1aWx0IG91ciBvd24gTG9nZ2luZyBDbG91ZCBDb25uZWN0IFByb2R1Y3QsIE5ld2x5IGRlcGxveWVkIFJEUy9WRElhYVMgU29sdXRpb24gaW50byBpdHMgcG9ydGZvbGlvIGFzIFdvcmtzdGF0aW9uIFNlcnZpY2UuXCIsXHJcbiAgMjAyMDogXCJETlMgQXMgQSBTZXJ2aWNlIHVzaW5nIGEgaHlicmlkIFdpbmRvd3MsIFJlZCBIYXQgTGludXggYW5kSW5mb2Jsb3ggRE5TIFNlcnZlcnNcIixcclxufVxyXG5cclxuY2xhc3MgYWJvdXQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY3RpdmVZZWFyQ2FyZDogMSxcclxuICAgIH07XHJcbiAgfVxyXG4gIGdvVG9JbmRleCA9IChpbmRleCkgPT4ge1xyXG4gICAgLy91c2luZyBGbGlja2l0eSBBUElcclxuICAgIHRoaXMuZmxrdHkuc2VsZWN0KGluZGV4KTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmVZZWFyQ2FyZDogaW5kZXggfSk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJvdXRcIj5cclxuICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+TW9yZSBBYm91dCBVcyAtIEJHIFVuaWZpZWQ8L3RpdGxlPlxyXG5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICByZWw9XCJzaG9ydGN1dCBpY29uXCJcclxuICAgICAgICAgICAgICBocmVmPVwiL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZmF2aWNvbi9iZy5pY29cIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJpbWFnZS94LWljb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSB3LTEwMCBvdmVyZmxvdy1oaWRkZW4gYmFja2dyb3VuZC1zdmdcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcclxuICAgICAgICAgICAgICBzcmM9XCIvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kcy9kb3RzX2NpcmNsZS5qcGdcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2UtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgb2Zmc2V0LWxnLTQgdGV4dC1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheTNcIj5BYm91dCBVczwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbiBwdC0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHAtMCBweS01XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbS0wXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNsaWRlci1vZmZzZXQgcC0zXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRpbWVsaW5lXCJcclxuICAgICAgICAgICAgICAgIGZsaWNraXR5UmVmPXsoYykgPT4gKHRoaXMuZmxrdHkgPSBjKX1cclxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICAgICAgICAgICAgZnJlZVNjcm9sbDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgcGFnZURvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICBjb250YWluOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVyLW9mZnNldFwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBoZWlnaHQ9XCI5NnB4XCI+PEJveCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCI0cHhcIiBiZz1cImdyYXkuMjAwXCI+PC9Cb3g+PC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICB7T2JqZWN0LmVudHJpZXModGltZWxpbmUpLm1hcChub3RlcyA9PiAoPEJveCBwb3M9XCJyZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICA8RmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjE2MHB4XCIgaGVpZ2h0PVwiOTZweFwiPjxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNHB4XCIgYmc9XCJncmF5LjIwMFwiPjwvQm94PjwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiByb3VuZGVkPVwiNTAlXCIgYm9yZGVyV2lkdGg9ezV9IGJvcmRlcldpZHRoQ29sb3I9XCJncmF5LjIwMFwiIHNpemU9XCI5NnB4XCIgY29sb3I9XCJ3aGl0ZVwiIGJnPVwicHJpbWFyeS41MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxIZWFkaW5nIHNpemU9XCJtZFwiIGZvbnRGYW1pbHk9XCJOZXhhIEJvbGRcIj57bm90ZXNbMF19PC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICA8RmxleCBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiB3aWR0aD1cIjE2MHB4XCIgaGVpZ2h0PVwiOTZweFwiPjxCb3ggd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiNHB4XCIgYmc9XCJncmF5LjIwMFwiPjwvQm94PjwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgICAgICAgICAgICA8Qm94IHBvcz1cImFic29sdXRlXCIgdG9wPVwiOTZweFwiIHdpZHRoPVwiMTAwJVwiIHB4PXs2fSBtdD17OH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT1cImxnXCIgdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bm90ZXNbMV19XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+KSl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTcgcC0zIG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRXaXRoQWN0aW9uIHRpdGxlPVwiMjAyMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEROUyBBcyBBIFNlcnZpY2UgdXNpbmcgYSBoeWJyaWQgV2luZG93cywgUmVkIEhhdCBMaW51eCBhbmRcclxuICAgICAgICAgICAgICAgICAgICBJbmZvYmxveCBETlMgU2VydmVyc1xyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRXaXRoQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC03IHAtMyBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkV2l0aEFjdGlvbiB0aXRsZT1cIjIwMTlcIj5cclxuICAgICAgICAgICAgICAgICAgICBCdWlsdCBvdXIgb3duIExvZ2dpbmcgQ2xvdWQgQ29ubmVjdCBQcm9kdWN0LCBOZXdseSBkZXBsb3llZFxyXG4gICAgICAgICAgICAgICAgICAgIFJEUy9WRElhYVMgU29sdXRpb24gaW50byBpdHMgcG9ydGZvbGlvIGFzIFdvcmtzdGF0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZS5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkV2l0aEFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNyBwLTMgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFdpdGhBY3Rpb24gdGl0bGU9XCIyMDE4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUmVjZWl2ZWQgQlRTIEV4Y2VsbGVuY2UgQXdhcmQgaW4gcmVjb2duaXRpb24gb2YgRXhjZWxsZW50XHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZSBieSB0aGUgTlNXIEdvdmVybm1lbnQuXHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZFdpdGhBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTMgY29sLWxnLTQgY29sLW1kLTcgcC0zIG15LTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENhcmRXaXRoQWN0aW9uIHRpdGxlPVwiMjAxN1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFByZXNlbmNlIGluIExvbmRvbiwgb2ZmZXJpbmcgYWxsIHRoZSBzZXJ2aWNlcyBpbiBvdXJcclxuICAgICAgICAgICAgICAgICAgICBwb3J0Zm9saW8gaW5jbHVkaW5nLCBVQ2FhUywgU2FhUywgSWFhUywgV2lhYVMgYW5kIEZhYVNcclxuICAgICAgICAgICAgICAgICAgPC9DYXJkV2l0aEFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNyBwLTMgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFdpdGhBY3Rpb24gdGl0bGU9XCIyMDE2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVGVjaG5vbG9neSBtaWdyYXRpb24gdG8gTmV4dC1HZW5lcmF0aW9uIEZpcmV3YWxscywgVUNhYVMsXHJcbiAgICAgICAgICAgICAgICAgICAgV2lyZWxlc3MsIFRlbGVwcmVzZW5jZSBhbmQgU3RvcmFnZS5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkV2l0aEFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtMyBjb2wtbGctNCBjb2wtbWQtNyBwLTMgbXktM1wiPlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZFdpdGhBY3Rpb24gdGl0bGU9XCIyMDE1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgTmltYmxlIFN0b3JhZ2UgUGFydG5lcnMsIE5ldEFQUCBQYXJ0bmVyLCBHRU5FU1lTXHJcbiAgICAgICAgICAgICAgICAgICAgQ29sbGFib3JhdGlvblxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRXaXRoQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC03IHAtMyBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkV2l0aEFjdGlvbiB0aXRsZT1cIjIwMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICBGNSBBdXRob3JpemVkIFBhcnRuZXJzLCBDSVNDTyBQcmVtaWVyIFBhcnRuZXIsIENJU0NPXHJcbiAgICAgICAgICAgICAgICAgICAgQWR2YW5jZWQgQ29sbGFib3JhdGlvbiwgQXJjaGl0ZWN0dXJlIFNwZWNpYWxpemVkIFBhcnRuZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFsbyBBbHRvIEF1dGhvcml6ZWQgUGFydG5lcnMue1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8L0NhcmRXaXRoQWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC0zIGNvbC1sZy00IGNvbC1tZC03IHAtMyBteS0zXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDYXJkV2l0aEFjdGlvbiB0aXRsZT1cIjIwMTNcIj5cclxuICAgICAgICAgICAgICAgICAgICBGb3VuZGVkIGFuZCBCRyBVbmlmaWVkIFNvbHV0aW9ucyBQdHkgTHRkIGFzIGEgdGVhbSBwcm92aWRpbmdcclxuICAgICAgICAgICAgICAgICAgICBJVCBzb2x1dGlvbnMgdG8gdGhlIGNsaWVudHMgZm9jdXNpbmcgb24gY3VzdG9tZXJcclxuICAgICAgICAgICAgICAgICAgICBzYXRpc2ZhY3Rpb24gYW5kIGRlbGl2ZXJhYmlsaXR5LntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkV2l0aEFjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uIHB0LTBcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTAgb2Zmc2V0LTFcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXktNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk0IG1iLTAgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeUNvdW50IGVuZFBvaW50PXs0MH0gc3VmZml4PVwiK1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5DbGllbnRzPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zbS0zIGNvbC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkaXNwbGF5NCBtYi0wIHRleHQtcHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TXlDb3VudCBlbmRQb2ludD17NX0gc3VmZml4PVwiK1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5Mb2NhdGlvbnM8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTMgY29sLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk0IG1iLTAgdGV4dC1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNeUNvdW50IGVuZFBvaW50PXsyMH0gc3VmZml4PVwiK1wiLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoNT5Qcm9qZWN0czwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpc3BsYXk2IHB5LTNcIj5PdXIgTWlzc2lvbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICBCRyBVbmlmaWVkIFNvbHV0aW9ucyBQdHkgTHRkIFRlYW0gY29uc2lzdHMgb2YgZXhwZXJ0cyBpblxyXG4gICAgICAgICAgICAgICAgICAgIGRpZmZlcmVudCB0ZWNobm9sb2dpZXMgbGlrZSBTZWN1cml0eSwgVm9pY2UgYW5kIGEgYnJvYWRcclxuICAgICAgICAgICAgICAgICAgICByYW5nZSBvZiBhZGRpdGlvbmFsIHNraWxscyBpbmNsdWRpbmcgRjUgTG9hZCBCYWxhbmNlcnMsIFdBTlxyXG4gICAgICAgICAgICAgICAgICAgIE9wdGltaXphdGlvbiwgV0FOLCBDbG91ZCBUZWNobm9sb2dpZXMgYW5kIENpc2NvXHJcbiAgICAgICAgICAgICAgICAgICAgVGVjaG5vbG9naWVzLiBBcyBleHBlcnRzIGluIGRpZmZlcmVudCB0ZWNobm9sb2dpZXMsIG91clxyXG4gICAgICAgICAgICAgICAgICAgIGZvY3VzIGlzIHRvIHByb3ZpZGUgY29tcGV0aXRpdmUgYW5kIGFmZm9yZGFibGUgVW5pZmllZFxyXG4gICAgICAgICAgICAgICAgICAgIFNvbHV0aW9ucyB0byBvdXIgY2xpZW50cy5cclxuICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICBXZSBtYWpvcmx5IGRlYWwgd2l0aCBDaXNjbyBWb2ljZSAvIFZpZGVvIFByb2plY3RzLCBXQU5cclxuICAgICAgICAgICAgICAgICAgICBJbXBsZW1lbnRhdGlvbnMsIERDIERlc2lnbiBhbmQgSW1wbGVtZW50YXRpb24uIE91ciBnb2FsIGlzXHJcbiAgICAgICAgICAgICAgICAgICAgdG8gbWFrZSBvdXIgY3VzdG9tZXJzIG1vcmUgY29tcGV0aXRpdmUgYW5kIGFjaGlldmUgaGlnaGVyXHJcbiAgICAgICAgICAgICAgICAgICAgYnVzaW5lc3MgZWZmaWNpZW5jeSB0aHJvdWdoIGluY3JlYXNlZCBhZ2lsaXR5LCBlZmZlY3RpdmVcclxuICAgICAgICAgICAgICAgICAgICBjb3N0IGNvbnRhaW5tZW50IGFuZCBsb3dlciByaXNrLiBCRyBVbmlmaWVkIFNvbHV0aW9ucyxcclxuICAgICAgICAgICAgICAgICAgICBmb3VuZGVkIGluIDIwMTMsIHByb3ZpZGVzIG5hdGlvbmFsIGFuZCBpbnRlcm5hdGlvbmFsIElUXHJcbiAgICAgICAgICAgICAgICAgICAgU2VydmljZXMgdG8gc29tZSBvZiBBdXN0cmFsaWEncyBsZWFkaW5nIGNvbXBhbmllcywgd2hvIHVzZVxyXG4gICAgICAgICAgICAgICAgICAgIGluZm9ybWF0aW9uIHRlY2hub2xvZ3kgdG8gaW1wcm92ZSB0aGVpciBidXNpbmVzcyByZXN1bHRzLlxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC0zIHRleHQtY2VudGVyIGQtZmxleCBmbGV4LWNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaDYgdGV4dC1wcmltYXJ5XCI+VEVBTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRpc3BsYXk1XCI+TWVldCB0aGUgVmlzaW9uYXJ5IFBlb3BsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS0yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy0yIG9mZnNldC14bC0wIGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZWFtXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJGb3VuZGVyICYgT3duZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJKaW5neWkgTGlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGltZz1cImh0dHBzOi8vd3d3LmJndW5pZmllZHNvbHV0aW9ucy5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMTkvMDIvSmluZ3lpTGkucG5nXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGVudCwgaXVyZSBzZWQuIE5vYmlzIGRvbG9yZSBsYWJvcmUgbmFtIHJlcnVtIHNlcXVpP1xyXG4gICAgICAgICAgICAgICAgICAgIE5lbW8gZW5pbSB0b3RhbSBleGVyY2l0YXRpb25lbSBhdHF1ZSFcclxuICAgICAgICAgICAgICAgICAgPC9UZWFtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy0yIG9mZnNldC14bC0wIGNvbC14bC02XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxUZWFtXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDby1Gb3VuZGVyIGFuZCBNYW5hZ2luZyBEaXJlY3RvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIlNhdXJhYmggU2FyZWVuXCJcclxuICAgICAgICAgICAgICAgICAgICBpbWc9XCJodHRwczovL3d3dy5iZ3VuaWZpZWRzb2x1dGlvbnMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAxL0Nsb3NldXAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LlxyXG4gICAgICAgICAgICAgICAgICAgIFByb3ZpZGVudCwgaXVyZSBzZWQuIE5vYmlzIGRvbG9yZSBsYWJvcmUgbmFtIHJlcnVtIHNlcXVpP1xyXG4gICAgICAgICAgICAgICAgICAgIE5lbW8gZW5pbSB0b3RhbSBleGVyY2l0YXRpb25lbSBhdHF1ZSFcclxuICAgICAgICAgICAgICAgICAgPC9UZWFtPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04IG9mZnNldC1sZy00IG9mZnNldC14bC02IGNvbC14bC02IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1lbmQgcHktM1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPHNwYW4gY2xhc3NOYW1lPVwiZGlzcGxheTYgdGV4dC1kYXJrXCI+SW50ZXJlc3RlZCBpbiBqb2luaW5nIG91ciB0ZWFtPzwvc3Bhbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YSBjbGFzc05hbWU9XCJ0ZXh0LXByaW1hcnkgZC1mbGV4IG15LTJcIiBocmVmPVwiXCI+VmlldyBDYXJlZXIgT3Bwb3J0dW5pdGllcyA8Qm94IGFzPXtGYUFycm93UmlnaHR9IGg9XCIxNnB4XCIgbWw9XCIxMnB4XCIgbXk9XCI0cHhcIj48L0JveD48L2E+ICovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTVcIiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjEwMHB4XCIgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9