webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./node_modules/react-reveal/Flip.js":
false,

/***/ "./src/components/header/header.jsx":
/*!******************************************!*\
  !*** ./src/components/header/header.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _whatsnew__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./whatsnew */ "./src/components/header/whatsnew.jsx");
/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search */ "./src/components/header/search.jsx");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/components/header/menu.jsx");
/* harmony import */ var _chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/core */ "./node_modules/@chakra-ui/core/dist/es/index.js");
/* harmony import */ var _database_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../database/services */ "./src/database/services.jsx");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var _database_newsroom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../database/newsroom */ "./src/database/newsroom.jsx");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _pageBuilder_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../pageBuilder/Container */ "./src/pageBuilder/Container.jsx");
var _jsxFileName = "D:\\Peppershades\\Projects\\BG Unified Solutions\\Code\\BG_Unified\\front-end\\src\\components\\header\\header.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;














function header(props) {
  _s();

  const initRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const [show, setShow] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(0);
  const [search, setSearch] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false);
  next_router__WEBPACK_IMPORTED_MODULE_11___default.a.events.on('routeChangeComplete', () => setShow(false));

  const overlayClick = () => {
    setShow(0);
  };

  const servicesArray = Object.entries(_database_services__WEBPACK_IMPORTED_MODULE_5__["default"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    position: "sticky",
    top: "0px",
    bg: "white",
    boxShadow: "lg",
    zIndex: 1000,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "p-3 transition-3 d-flex justify-content-between align-items-center layer-4",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "d-flex align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, __jsx(_menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 29
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 29
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 44
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/assets/logo.png",
    height: "45px",
    className: "d-none d-sm-block mr-3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 33
    }
  }))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "text-dark hover-effect d-none d-lg-block",
    variantColor: "white",
    rightIcon: "chevron-down",
    onClick: () => show === 1 ? setShow(0) : setShow(1),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, "Solutions"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "d-none d-lg-block text-dark hover-effect",
    onClick: () => show === 2 ? setShow(0) : setShow(2),
    variantColor: "white",
    rightIcon: "chevron-down",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 29
    }
  }, "Company"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/features",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "d-none d-lg-block text-dark hover-effect",
    variantColor: "white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }, "Our Features"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 25
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 40
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/assets/logo.png",
    height: "45px",
    className: "mr-3 d-sm-none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 29
    }
  }))), __jsx("div", {
    className: "d-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Popover"], {
    trigger: "hover",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["PopoverTrigger"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "unstyled",
    leftIcon: react_icons_io__WEBPACK_IMPORTED_MODULE_7__["IoIosCall"],
    className: "NunitoSans-Bold link p-2 mt-1 d-none d-lg-flex",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 37
    }
  }, " ", __jsx("a", {
    href: "tel:1300002487",
    className: "link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 145
    }
  }, "1300 00 BGUS"), " ")), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["PopoverContent"], {
    zIndex: 4,
    p: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Image"], {
    src: "/assets/images/animations/phone-dial.gif",
    className: "phone-dial",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 37
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: `/search?search=`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "p-2 rounded-8 hover-effect",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
    name: "search",
    onClick: props.toggle,
    size: "18px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 37
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    className: "mx-3 d-none d-sm-block",
    variant: "solid",
    variantColor: "primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 33
    }
  }, "Contact Us"))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    display: ["none", "none", "none", "block"],
    isOpen: show === 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    duration: 800,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx(_pageBuilder_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    pb: 12,
    wrap: "wrap",
    px: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 29
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    mb: 4,
    mt: 12,
    width: ["100%", "100%", "50%", 1 / 3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    my: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 37
    }
  }, "IT Infrastructural Services"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    spacing: "8px",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 37
    }
  }, servicesArray.filter(service => service[1].category === "IT Infrastructural Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 41
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    variant: "unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 104
    }
  }, service[1].title))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    mb: 4,
    mt: 12,
    width: ["100%", "100%", "50%", 1 / 3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    my: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 37
    }
  }, "Network Services"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    spacing: "8px",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 37
    }
  }, servicesArray.filter(service => service[1].category === "Network Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 41
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    variant: "unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 104
    }
  }, service[1].title)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    my: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 37
    }
  }, "Cyber Security Services"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    spacing: "8px",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 37
    }
  }, servicesArray.filter(service => service[1].category === "Cyber Security Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 41
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    variant: "unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 104
    }
  }, service[1].title))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    mb: 4,
    mt: 12,
    width: ["100%", "100%", "50%", 1 / 3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 33
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    my: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 37
    }
  }, "Collaborative Services"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    spacing: "8px",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 37
    }
  }, servicesArray.filter(service => service[1].category === "Collaborative Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 41
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    variant: "unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 104
    }
  }, service[1].title)))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    my: "16px",
    fontSize: "lg",
    fontWeight: "700",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 37
    }
  }, "Development Services"), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Stack"], {
    spacing: "8px",
    direction: "column",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }, servicesArray.filter(service => service[1].category === "Development Services").map(service => __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/solutions/[name]",
    as: "/solutions/" + service[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 41
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    as: "a",
    variant: "unstyled",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 104
    }
  }, service[1].title))))))))), __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Collapse"], {
    isOpen: show === 2,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, __jsx(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_9___default.a, {
    duration: 800,
    distance: "30%",
    bottom: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 21
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "row",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "col-lg-3 py-4 pr-5 d-flex flex-column header-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "display6 mt-2 text-primary text-uppercase",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 41
    }
  }, "Company"), __jsx("div", {
    className: "NunitoSans-ExtraBold text-secondary mt-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 41
    }
  }, "Get the latest resources and updates from our company here.")), __jsx("div", {
    className: "col-lg-3 py-4 d-flex flex-column header-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 37
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/about",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "d-flex link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 45
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaInfoCircle"],
    size: "20px",
    mr: "12px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 49
    }
  }), "About Us")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/newsroom",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "d-flex link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 45
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaNewspaper"],
    size: "20px",
    mr: "12px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 49
    }
  }), "Newsroom")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/solutions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "d-flex link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 45
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaBriefcase"],
    size: "20px",
    mr: "12px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 49
    }
  }), "Our Solutions")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_10___default.a, {
    href: "/contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 41
    }
  }, __jsx("a", {
    className: "d-flex link",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 45
    }
  }, __jsx(_chakra_ui_core__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    as: react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCommentAlt"],
    size: "20px",
    mr: "12px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 49
    }
  }), "Contact Us"))), __jsx("div", {
    className: "col-lg-6 py-4 d-flex flex-column header-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 37
    }
  }, __jsx("h5", {
    className: "display6",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 41
    }
  }, "What's New"), __jsx(_whatsnew__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog4.jpg",
    heading: "BG Unified Solutions got nominated for two awards",
    text: "BG Unified Solutions got nomination ...",
    link: "/blogs/3-bg-unified-solutions-got-nominated-for-two-awards-under-service-and-collaboration-within-revenue-nsw",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 41
    }
  }), __jsx(_whatsnew__WEBPACK_IMPORTED_MODULE_1__["default"], {
    image: "https://www.bgunifiedsolutions.net/wp-content/uploads/2016/11/blog5.jpg",
    heading: "Successfull upgradation Mega Cisco Call Manager",
    text: "BG Unified Solutions team have successfully upgraded its  ...",
    link: "/blogs/2-successfull-up-gradation-of-mega-cisco-call-manager-cluster-from-version-10.5.1-to-12.0.1.su1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 41
    }
  })))))))), show ? __jsx("div", {
    className: "overlay",
    onClick: overlayClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205,
      columnNumber: 21
    }
  }) : "");
}

_s(header, "hbuB+iqlmchorOvJov2HFB7knWg=");

/* harmony default export */ __webpack_exports__["default"] = (header);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJoZWFkZXIiLCJwcm9wcyIsImluaXRSZWYiLCJSZWFjdCIsInVzZVJlZiIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIm92ZXJsYXlDbGljayIsInNlcnZpY2VzQXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwic2VydmljZXMiLCJJb0lvc0NhbGwiLCJ0b2dnbGUiLCJmaWx0ZXIiLCJzZXJ2aWNlIiwiY2F0ZWdvcnkiLCJtYXAiLCJ0aXRsZSIsIkZhSW5mb0NpcmNsZSIsIkZhTmV3c3BhcGVyIiwiRmFCcmllZmNhc2UiLCJGYUNvbW1lbnRBbHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxDQUFnQkMsS0FBaEIsRUFBdUI7QUFBQTs7QUFDbkIsUUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLEVBQWhCO0FBQ0EsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JILDRDQUFLLENBQUNJLFFBQU4sQ0FBZSxDQUFmLENBQXhCO0FBQ0EsUUFBTSxDQUFDQyxNQUFELEVBQVNDLFNBQVQsSUFBc0JOLDRDQUFLLENBQUNJLFFBQU4sQ0FBZSxLQUFmLENBQTVCO0FBQ0FHLHFEQUFNLENBQUNDLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0MsTUFBTU4sT0FBTyxDQUFDLEtBQUQsQ0FBckQ7O0FBQ0EsUUFBTU8sWUFBWSxHQUFHLE1BQU07QUFDdkJQLFdBQU8sQ0FBQyxDQUFELENBQVA7QUFDSCxHQUZEOztBQUdBLFFBQU1RLGFBQWEsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVDLDBEQUFmLENBQXRCO0FBQ0EsU0FDSSxtRUFDSSxNQUFDLG1EQUFEO0FBQUssWUFBUSxFQUFDLFFBQWQ7QUFBdUIsT0FBRyxFQUFDLEtBQTNCO0FBQWlDLE1BQUUsRUFBQyxPQUFwQztBQUE0QyxhQUFTLEVBQUMsSUFBdEQ7QUFBMkQsVUFBTSxFQUFFLElBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyw0RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsNkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUksTUFBQyxpREFBRDtBQUFNLFFBQUksRUFBQyxHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ1gsTUFBQyxxREFBRDtBQUFPLE9BQUcsRUFBQyxrQkFBWDtBQUE4QixVQUFNLEVBQUMsTUFBckM7QUFBNEMsYUFBUyxFQUFDLHdCQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRFcsQ0FBZixDQUZKLEVBTUksTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBQywwQ0FBbEI7QUFBNkQsZ0JBQVksRUFBQyxPQUExRTtBQUFrRixhQUFTLEVBQUMsY0FBNUY7QUFBMkcsV0FBTyxFQUFFLE1BQU1aLElBQUksS0FBSyxDQUFULEdBQWFDLE9BQU8sQ0FBQyxDQUFELENBQXBCLEdBQTBCQSxPQUFPLENBQUMsQ0FBRCxDQUEzSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLEVBT0ksTUFBQyxzREFBRDtBQUFRLGFBQVMsRUFBQywwQ0FBbEI7QUFBNkQsV0FBTyxFQUFFLE1BQU1ELElBQUksS0FBSyxDQUFULEdBQWFDLE9BQU8sQ0FBQyxDQUFELENBQXBCLEdBQTBCQSxPQUFPLENBQUMsQ0FBRCxDQUE3RztBQUFrSCxnQkFBWSxFQUFDLE9BQS9IO0FBQXVJLGFBQVMsRUFBQyxjQUFqSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUEosRUFRSSxNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsc0RBQUQ7QUFBUSxhQUFTLEVBQUMsMENBQWxCO0FBQTZELGdCQUFZLEVBQUMsT0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixDQVJKLENBREosRUFhSSxNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDWCxNQUFDLHFEQUFEO0FBQU8sT0FBRyxFQUFDLGtCQUFYO0FBQThCLFVBQU0sRUFBQyxNQUFyQztBQUE0QyxhQUFTLEVBQUMsZ0JBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFEVyxDQUFmLENBYkosRUFnQkk7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyx1REFBRDtBQUFTLFdBQU8sRUFBQyxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxzREFBRDtBQUFRLFdBQU8sRUFBQyxVQUFoQjtBQUEyQixZQUFRLEVBQUVZLHdEQUFyQztBQUFnRCxhQUFTLEVBQUMsZ0RBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBNEc7QUFBRyxRQUFJLEVBQUMsZ0JBQVI7QUFBeUIsYUFBUyxFQUFDLE1BQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQTVHLE1BREosQ0FESixFQUlJLE1BQUMsOERBQUQ7QUFBZ0IsVUFBTSxFQUFFLENBQXhCO0FBQTJCLEtBQUMsRUFBRSxDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxxREFBRDtBQUFPLE9BQUcsRUFBQywwQ0FBWDtBQUFzRCxhQUFTLEVBQUMsWUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBSkosQ0FESixFQVdJLE1BQUMsaURBQUQ7QUFBTSxRQUFJLEVBQUcsaUJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLDRCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLFFBQVg7QUFBb0IsV0FBTyxFQUFFakIsS0FBSyxDQUFDa0IsTUFBbkM7QUFBMkMsUUFBSSxFQUFDLE1BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQURKLENBWEosRUFnQkksTUFBQyxpREFBRDtBQUFNLFFBQUksRUFBQyxVQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLHNEQUFEO0FBQVEsYUFBUyxFQUFDLHdCQUFsQjtBQUEyQyxXQUFPLEVBQUMsT0FBbkQ7QUFBMkQsZ0JBQVksRUFBQyxTQUF4RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLENBaEJKLENBaEJKLENBREosQ0FESixFQTRDSSxNQUFDLHdEQUFEO0FBQVUsV0FBTyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsTUFBakIsRUFBeUIsT0FBekIsQ0FBbkI7QUFBc0QsVUFBTSxFQUFFZCxJQUFJLEtBQUssQ0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUUsR0FBaEI7QUFBcUIsWUFBUSxFQUFFLEtBQS9CO0FBQXNDLFVBQU0sTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsb0RBQUQ7QUFBTSxNQUFFLEVBQUUsRUFBVjtBQUFjLFFBQUksRUFBQyxNQUFuQjtBQUEwQixNQUFFLEVBQUUsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxFQUFoQjtBQUFvQixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixJQUFFLENBQTFCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQU0sTUFBRSxFQUFFLE1BQVY7QUFBa0IsWUFBUSxFQUFDLElBQTNCO0FBQWdDLGNBQVUsRUFBQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQURKLEVBRUksTUFBQyxxREFBRDtBQUFPLFdBQU8sRUFBQyxLQUFmO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NTLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQkMsT0FBTyxJQUFJQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLFFBQVgsS0FBd0IsNkJBQXhELEVBQXVGQyxHQUF2RixDQUEyRkYsT0FBTyxJQUMvRixNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLG1CQUFYO0FBQStCLE1BQUUsRUFBRSxnQkFBZ0JBLE9BQU8sQ0FBQyxDQUFELENBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0QsTUFBQyxzREFBRDtBQUFRLE1BQUUsRUFBQyxHQUFYO0FBQWUsV0FBTyxFQUFDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csS0FBOUMsQ0FBL0QsQ0FESCxDQURELENBRkosQ0FESixFQVNJLE1BQUMsbURBQUQ7QUFBSyxNQUFFLEVBQUUsQ0FBVDtBQUFZLE1BQUUsRUFBRSxFQUFoQjtBQUFvQixTQUFLLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixLQUFqQixFQUF3QixJQUFFLENBQTFCLENBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG9EQUFEO0FBQU0sTUFBRSxFQUFFLE1BQVY7QUFBa0IsWUFBUSxFQUFDLElBQTNCO0FBQWdDLGNBQVUsRUFBQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBRUksTUFBQyxxREFBRDtBQUFPLFdBQU8sRUFBQyxLQUFmO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NWLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQkMsT0FBTyxJQUFJQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLFFBQVgsS0FBd0Isa0JBQXhELEVBQTRFQyxHQUE1RSxDQUFnRkYsT0FBTyxJQUNwRixNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLG1CQUFYO0FBQStCLE1BQUUsRUFBRSxnQkFBZ0JBLE9BQU8sQ0FBQyxDQUFELENBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0QsTUFBQyxzREFBRDtBQUFRLE1BQUUsRUFBQyxHQUFYO0FBQWUsV0FBTyxFQUFDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csS0FBOUMsQ0FBL0QsQ0FESCxDQURELENBRkosRUFPSSxNQUFDLG9EQUFEO0FBQU0sTUFBRSxFQUFFLE1BQVY7QUFBa0IsWUFBUSxFQUFDLElBQTNCO0FBQWdDLGNBQVUsRUFBQyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBKLEVBUUksTUFBQyxxREFBRDtBQUFPLFdBQU8sRUFBQyxLQUFmO0FBQXFCLGFBQVMsRUFBQyxRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0NWLGFBQWEsQ0FBQ00sTUFBZCxDQUFxQkMsT0FBTyxJQUFJQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdDLFFBQVgsS0FBd0IseUJBQXhELEVBQW1GQyxHQUFuRixDQUF1RkYsT0FBTyxJQUMzRixNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLG1CQUFYO0FBQStCLE1BQUUsRUFBRSxnQkFBZ0JBLE9BQU8sQ0FBQyxDQUFELENBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0QsTUFBQyxzREFBRDtBQUFRLE1BQUUsRUFBQyxHQUFYO0FBQWUsV0FBTyxFQUFDLFVBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbUNBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csS0FBOUMsQ0FBL0QsQ0FESCxDQURELENBUkosQ0FUSixFQXVCSSxNQUFDLG1EQUFEO0FBQUssTUFBRSxFQUFFLENBQVQ7QUFBWSxNQUFFLEVBQUUsRUFBaEI7QUFBb0IsU0FBSyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsS0FBakIsRUFBd0IsSUFBRSxDQUExQixDQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxvREFBRDtBQUFNLE1BQUUsRUFBRSxNQUFWO0FBQWtCLFlBQVEsRUFBQyxJQUEzQjtBQUFnQyxjQUFVLEVBQUMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixFQUVJLE1BQUMscURBQUQ7QUFBTyxXQUFPLEVBQUMsS0FBZjtBQUFxQixhQUFTLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDVixhQUFhLENBQUNNLE1BQWQsQ0FBcUJDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxRQUFYLEtBQXdCLHdCQUF4RCxFQUFrRkMsR0FBbEYsQ0FBc0ZGLE9BQU8sSUFDMUYsTUFBQyxpREFBRDtBQUFNLFFBQUksRUFBQyxtQkFBWDtBQUErQixNQUFFLEVBQUUsZ0JBQWdCQSxPQUFPLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStELE1BQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsR0FBWDtBQUFlLFdBQU8sRUFBQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLEtBQTlDLENBQS9ELENBREgsQ0FERCxDQUZKLEVBT0ksTUFBQyxvREFBRDtBQUFNLE1BQUUsRUFBRSxNQUFWO0FBQWtCLFlBQVEsRUFBQyxJQUEzQjtBQUFnQyxjQUFVLEVBQUMsS0FBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFQSixFQVFJLE1BQUMscURBQUQ7QUFBTyxXQUFPLEVBQUMsS0FBZjtBQUFxQixhQUFTLEVBQUMsUUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDVixhQUFhLENBQUNNLE1BQWQsQ0FBcUJDLE9BQU8sSUFBSUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXQyxRQUFYLEtBQXdCLHNCQUF4RCxFQUFnRkMsR0FBaEYsQ0FBb0ZGLE9BQU8sSUFDeEYsTUFBQyxpREFBRDtBQUFNLFFBQUksRUFBQyxtQkFBWDtBQUErQixNQUFFLEVBQUUsZ0JBQWdCQSxPQUFPLENBQUMsQ0FBRCxDQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStELE1BQUMsc0RBQUQ7QUFBUSxNQUFFLEVBQUMsR0FBWDtBQUFlLFdBQU8sRUFBQyxVQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQW1DQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLEtBQTlDLENBQS9ELENBREgsQ0FERCxDQVJKLENBdkJKLENBREosQ0FESixDQURKLENBNUNKLEVBd0ZJLE1BQUMsd0RBQUQ7QUFBVSxVQUFNLEVBQUVuQixJQUFJLEtBQUssQ0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsd0RBQUQ7QUFBTSxZQUFRLEVBQUUsR0FBaEI7QUFBcUIsWUFBUSxFQUFFLEtBQS9CO0FBQXNDLFVBQU0sTUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLG1EQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQywyQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFJSTtBQUFLLGFBQVMsRUFBQywwQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1FQUpKLENBREosRUFVSTtBQUFLLGFBQVMsRUFBQyw4Q0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpREFBRDtBQUFNLFFBQUksRUFBQyxRQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLG1EQUFEO0FBQ0ksTUFBRSxFQUFFb0IsMkRBRFI7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLE1BQUUsRUFBQyxNQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixhQURKLENBREosRUFXSSxNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLFdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFDSSxNQUFFLEVBQUVDLDBEQURSO0FBRUksUUFBSSxFQUFDLE1BRlQ7QUFHSSxNQUFFLEVBQUMsTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosYUFESixDQVhKLEVBcUJJLE1BQUMsaURBQUQ7QUFBTSxRQUFJLEVBQUMsWUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsYUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUNJLE1BQUUsRUFBRUMsMERBRFI7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLE1BQUUsRUFBQyxNQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixrQkFESixDQXJCSixFQStCSSxNQUFDLGlEQUFEO0FBQU0sUUFBSSxFQUFDLFVBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsbURBQUQ7QUFDSSxNQUFFLEVBQUVDLDJEQURSO0FBRUksUUFBSSxFQUFDLE1BRlQ7QUFHSSxNQUFFLEVBQUMsTUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosZUFESixDQS9CSixDQVZKLEVBb0RJO0FBQUssYUFBUyxFQUFDLDhDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFJLGFBQVMsRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREosRUFJSSxNQUFDLGlEQUFEO0FBQ0ksU0FBSyxFQUFDLHlFQURWO0FBRUksV0FBTyxFQUFDLG1EQUZaO0FBR0ksUUFBSSxFQUFDLHlDQUhUO0FBSUksUUFBSSxFQUFDLCtHQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQVVJLE1BQUMsaURBQUQ7QUFDSSxTQUFLLEVBQUMseUVBRFY7QUFFSSxXQUFPLEVBQUMsaURBRlo7QUFHSSxRQUFJLEVBQUMsK0RBSFQ7QUFJSSxRQUFJLEVBQUMsd0dBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVZKLENBcERKLENBREosQ0FESixDQURKLENBREosQ0F4RkosQ0FESixFQXdLS3ZCLElBQUksR0FBRztBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQXlCLFdBQU8sRUFBRVEsWUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFILEdBQXdELEVBeEtqRSxDQURKO0FBNEtIOztHQXJMUWIsTTs7QUF1TE1BLHFFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfYXBwLmpzLjY0NDBmN2MyODZjNTM4YjhjOTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgV2hhdHNOZXcgZnJvbSAnLi93aGF0c25ldydcclxuaW1wb3J0IFNlYXJjaCBmcm9tICcuL3NlYXJjaCdcclxuaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51J1xyXG5pbXBvcnQge1xyXG4gICAgSW1hZ2UsXHJcbiAgICBCb3gsXHJcbiAgICBCdXR0b24sXHJcbiAgICBDb2xsYXBzZSxcclxuICAgIEljb24sXHJcbiAgICBGbGV4LFxyXG4gICAgVGV4dCxcclxuICAgIFBvcG92ZXIsXHJcbiAgICBQb3BvdmVyVHJpZ2dlcixcclxuICAgIFBvcG92ZXJDb250ZW50LFxyXG4gICAgU3RhY2ssXHJcbn0gZnJvbSAnQGNoYWtyYS11aS9jb3JlJ1xyXG5pbXBvcnQgc2VydmljZXMgZnJvbSBcIi4uLy4uL2RhdGFiYXNlL3NlcnZpY2VzXCJcclxuaW1wb3J0IHsgRmFJbmZvQ2lyY2xlLCBGYU5ld3NwYXBlciwgRmFDb21tZW50QWx0LCBGYUJyaWVmY2FzZSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiXHJcbmltcG9ydCB7IElvSW9zQ2FsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiXHJcbmltcG9ydCBuZXdzcm9vbSBmcm9tIFwiLi4vLi4vZGF0YWJhc2UvbmV3c3Jvb21cIlxyXG5pbXBvcnQgRmFkZSBmcm9tICdyZWFjdC1yZXZlYWwvRmFkZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJy4uLy4uL3BhZ2VCdWlsZGVyL0NvbnRhaW5lcic7XHJcblxyXG5mdW5jdGlvbiBoZWFkZXIocHJvcHMpIHtcclxuICAgIGNvbnN0IGluaXRSZWYgPSBSZWFjdC51c2VSZWYoKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsICgpID0+IHNldFNob3coZmFsc2UpKTtcclxuICAgIGNvbnN0IG92ZXJsYXlDbGljayA9ICgpID0+IHtcclxuICAgICAgICBzZXRTaG93KDApO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc2VydmljZXNBcnJheSA9IE9iamVjdC5lbnRyaWVzKHNlcnZpY2VzKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Qm94IHBvc2l0aW9uPVwic3RpY2t5XCIgdG9wPVwiMHB4XCIgYmc9XCJ3aGl0ZVwiIGJveFNoYWRvdz1cImxnXCIgekluZGV4PXsxMDAwfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTMgdHJhbnNpdGlvbi0zIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbGF5ZXItNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51PjwvTWVudT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvbG9nby5wbmdcIiBoZWlnaHQ9XCI0NXB4XCIgY2xhc3NOYW1lPVwiZC1ub25lIGQtc20tYmxvY2sgbXItM1wiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwidGV4dC1kYXJrIGhvdmVyLWVmZmVjdCBkLW5vbmUgZC1sZy1ibG9ja1wiIHZhcmlhbnRDb2xvcj1cIndoaXRlXCIgcmlnaHRJY29uPVwiY2hldnJvbi1kb3duXCIgb25DbGljaz17KCkgPT4gc2hvdyA9PT0gMSA/IHNldFNob3coMCkgOiBzZXRTaG93KDEpfSA+U29sdXRpb25zPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cImQtbm9uZSBkLWxnLWJsb2NrIHRleHQtZGFyayBob3Zlci1lZmZlY3RcIiBvbkNsaWNrPXsoKSA9PiBzaG93ID09PSAyID8gc2V0U2hvdygwKSA6IHNldFNob3coMil9IHZhcmlhbnRDb2xvcj1cIndoaXRlXCIgcmlnaHRJY29uPVwiY2hldnJvbi1kb3duXCI+Q29tcGFueTwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mZWF0dXJlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2sgdGV4dC1kYXJrIGhvdmVyLWVmZmVjdFwiIHZhcmlhbnRDb2xvcj1cIndoaXRlXCI+T3VyIEZlYXR1cmVzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvbG9nby5wbmdcIiBoZWlnaHQ9XCI0NXB4XCIgY2xhc3NOYW1lPVwibXItMyBkLXNtLW5vbmVcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXIgdHJpZ2dlcj1cImhvdmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiIGxlZnRJY29uPXtJb0lvc0NhbGx9IGNsYXNzTmFtZT1cIk51bml0b1NhbnMtQm9sZCBsaW5rIHAtMiBtdC0xIGQtbm9uZSBkLWxnLWZsZXhcIj4gPGEgaHJlZj1cInRlbDoxMzAwMDAyNDg3XCIgY2xhc3NOYW1lPVwibGlua1wiPjEzMDAgMDAgQkdVUzwvYT4gPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyVHJpZ2dlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlckNvbnRlbnQgekluZGV4PXs0fSBwPXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvaW1hZ2VzL2FuaW1hdGlvbnMvcGhvbmUtZGlhbC5naWZcIiBjbGFzc05hbWU9XCJwaG9uZS1kaWFsXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXJDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxTZWFyY2ggdG9nZ2xlID17KCkgPT4gc2V0U2VhcmNoKCFzZWFyY2gpfSBzZWFyY2hpbmc9e3NlYXJjaH0+PC9TZWFyY2g+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qcHJvcHBlciBzeW50YXggdG8gdXNlIGxpbmsgd2l0aCBkeW5hbWljIHJvdXRpbmcqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2Avc2VhcmNoP3NlYXJjaD1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJwLTIgcm91bmRlZC04IGhvdmVyLWVmZmVjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBuYW1lPVwic2VhcmNoXCIgb25DbGljaz17cHJvcHMudG9nZ2xlfSBzaXplPVwiMThweFwiPjwvSWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm14LTMgZC1ub25lIGQtc20tYmxvY2tcIiB2YXJpYW50PVwic29saWRcIiB2YXJpYW50Q29sb3I9XCJwcmltYXJ5XCI+Q29udGFjdCBVczwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgey8qIE1lbnUgKi99XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgZGlzcGxheT17W1wibm9uZVwiLCBcIm5vbmVcIiwgXCJub25lXCIsIFwiYmxvY2tcIl19IGlzT3Blbj17c2hvdyA9PT0gMX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhZGUgZHVyYXRpb249ezgwMH0gZGlzdGFuY2U9e1wiMzAlXCJ9IGJvdHRvbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4IHBiPXsxMn0gd3JhcD1cIndyYXBcIiBweD17Nn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0gbXQ9ezEyfSB3aWR0aD17W1wiMTAwJVwiLCBcIjEwMCVcIiwgXCI1MCVcIiwgMS8zXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG15PXtcIjE2cHhcIn0gZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCI3MDBcIj5JVCBJbmZyYXN0cnVjdHVyYWwgU2VydmljZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiOHB4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0FycmF5LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2VbMV0uY2F0ZWdvcnkgPT09IFwiSVQgSW5mcmFzdHJ1Y3R1cmFsIFNlcnZpY2VzXCIpLm1hcChzZXJ2aWNlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29sdXRpb25zL1tuYW1lXVwiIGFzPXtcIi9zb2x1dGlvbnMvXCIgKyBzZXJ2aWNlWzBdfT48QnV0dG9uIGFzPVwiYVwiIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiPntzZXJ2aWNlWzFdLnRpdGxlfTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0gbXQ9ezEyfSB3aWR0aD17W1wiMTAwJVwiLCBcIjEwMCVcIiwgXCI1MCVcIiwgMS8zXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG15PXtcIjE2cHhcIn0gZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCI3MDBcIj5OZXR3b3JrIFNlcnZpY2VzPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjhweFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNBcnJheS5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlWzFdLmNhdGVnb3J5ID09PSBcIk5ldHdvcmsgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnMvW25hbWVdXCIgYXM9e1wiL3NvbHV0aW9ucy9cIiArIHNlcnZpY2VbMF19PjxCdXR0b24gYXM9XCJhXCIgdmFyaWFudD1cInVuc3R5bGVkXCI+e3NlcnZpY2VbMV0udGl0bGV9PC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXk9e1wiMTZweFwifSBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cIjcwMFwiPkN5YmVyIFNlY3VyaXR5IFNlcnZpY2VzPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjhweFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNBcnJheS5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlWzFdLmNhdGVnb3J5ID09PSBcIkN5YmVyIFNlY3VyaXR5IFNlcnZpY2VzXCIpLm1hcChzZXJ2aWNlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29sdXRpb25zL1tuYW1lXVwiIGFzPXtcIi9zb2x1dGlvbnMvXCIgKyBzZXJ2aWNlWzBdfT48QnV0dG9uIGFzPVwiYVwiIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiPntzZXJ2aWNlWzFdLnRpdGxlfTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveCBtYj17NH0gbXQ9ezEyfSB3aWR0aD17W1wiMTAwJVwiLCBcIjEwMCVcIiwgXCI1MCVcIiwgMS8zXX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IG15PXtcIjE2cHhcIn0gZm9udFNpemU9XCJsZ1wiIGZvbnRXZWlnaHQ9XCI3MDBcIj5Db2xsYWJvcmF0aXZlIFNlcnZpY2VzPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjhweFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNBcnJheS5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlWzFdLmNhdGVnb3J5ID09PSBcIkNvbGxhYm9yYXRpdmUgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnMvW25hbWVdXCIgYXM9e1wiL3NvbHV0aW9ucy9cIiArIHNlcnZpY2VbMF19PjxCdXR0b24gYXM9XCJhXCIgdmFyaWFudD1cInVuc3R5bGVkXCI+e3NlcnZpY2VbMV0udGl0bGV9PC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXk9e1wiMTZweFwifSBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cIjcwMFwiPkRldmVsb3BtZW50IFNlcnZpY2VzPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2sgc3BhY2luZz1cIjhweFwiIGRpcmVjdGlvbj1cImNvbHVtblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2VydmljZXNBcnJheS5maWx0ZXIoc2VydmljZSA9PiBzZXJ2aWNlWzFdLmNhdGVnb3J5ID09PSBcIkRldmVsb3BtZW50IFNlcnZpY2VzXCIpLm1hcChzZXJ2aWNlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29sdXRpb25zL1tuYW1lXVwiIGFzPXtcIi9zb2x1dGlvbnMvXCIgKyBzZXJ2aWNlWzBdfT48QnV0dG9uIGFzPVwiYVwiIHZhcmlhbnQ9XCJ1bnN0eWxlZFwiPntzZXJ2aWNlWzFdLnRpdGxlfTwvQnV0dG9uPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaXNPcGVuPXtzaG93ID09PSAyfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkdXJhdGlvbj17ODAwfSBkaXN0YW5jZT17XCIzMCVcIn0gYm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Qm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIHB5LTQgcHItNSBkLWZsZXggZmxleC1jb2x1bW4gaGVhZGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheTYgbXQtMiB0ZXh0LXByaW1hcnkgdGV4dC11cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wYW55XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJOdW5pdG9TYW5zLUV4dHJhQm9sZCB0ZXh0LXNlY29uZGFyeSBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgR2V0IHRoZSBsYXRlc3QgcmVzb3VyY2VzIGFuZCB1cGRhdGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSBvdXIgY29tcGFueSBoZXJlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcHktNCBkLWZsZXggZmxleC1jb2x1bW4gaGVhZGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RmFJbmZvQ2lyY2xlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9XCIxMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFib3V0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3Nyb29tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZhTmV3c3BhcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9XCIxMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5ld3Nyb29tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NvbHV0aW9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGYUJyaWVmY2FzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCIyMHB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1yPVwiMTJweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID48L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBPdXIgU29sdXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RmFDb21tZW50QWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9XCIxMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgcHktNCBkLWZsZXggZmxleC1jb2x1bW4gaGVhZGVyLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJkaXNwbGF5NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoYXQncyBOZXdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaGF0c05ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPVwiaHR0cHM6Ly93d3cuYmd1bmlmaWVkc29sdXRpb25zLm5ldC93cC1jb250ZW50L3VwbG9hZHMvMjAxNi8xMS9ibG9nNC5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9XCJCRyBVbmlmaWVkIFNvbHV0aW9ucyBnb3Qgbm9taW5hdGVkIGZvciB0d28gYXdhcmRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQkcgVW5pZmllZCBTb2x1dGlvbnMgZ290IG5vbWluYXRpb24gLi4uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL2Jsb2dzLzMtYmctdW5pZmllZC1zb2x1dGlvbnMtZ290LW5vbWluYXRlZC1mb3ItdHdvLWF3YXJkcy11bmRlci1zZXJ2aWNlLWFuZC1jb2xsYWJvcmF0aW9uLXdpdGhpbi1yZXZlbnVlLW5zd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdoYXRzTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3d3dy5iZ3VuaWZpZWRzb2x1dGlvbnMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzExL2Jsb2c1LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIlN1Y2Nlc3NmdWxsIHVwZ3JhZGF0aW9uIE1lZ2EgQ2lzY28gQ2FsbCBNYW5hZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQkcgVW5pZmllZCBTb2x1dGlvbnMgdGVhbSBoYXZlIHN1Y2Nlc3NmdWxseSB1cGdyYWRlZCBpdHMgIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9ibG9ncy8yLXN1Y2Nlc3NmdWxsLXVwLWdyYWRhdGlvbi1vZi1tZWdhLWNpc2NvLWNhbGwtbWFuYWdlci1jbHVzdGVyLWZyb20tdmVyc2lvbi0xMC41LjEtdG8tMTIuMC4xLnN1MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge3Nob3cgPyA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbkNsaWNrPXtvdmVybGF5Q2xpY2t9IC8+IDogXCJcIn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9