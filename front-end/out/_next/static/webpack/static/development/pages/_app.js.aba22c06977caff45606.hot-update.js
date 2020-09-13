webpackHotUpdate("static\\development\\pages\\_app.js",{

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
    image: _database_newsroom__WEBPACK_IMPORTED_MODULE_8__["default"][0].image,
    heading: _database_newsroom__WEBPACK_IMPORTED_MODULE_8__["default"][0].title,
    link: _database_newsroom__WEBPACK_IMPORTED_MODULE_8__["default"][0].link,
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
      lineNumber: 191,
      columnNumber: 41
    }
  })))))))), show ? __jsx("div", {
    className: "overlay",
    onClick: overlayClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzeCJdLCJuYW1lcyI6WyJoZWFkZXIiLCJwcm9wcyIsImluaXRSZWYiLCJSZWFjdCIsInVzZVJlZiIsInNob3ciLCJzZXRTaG93IiwidXNlU3RhdGUiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJSb3V0ZXIiLCJldmVudHMiLCJvbiIsIm92ZXJsYXlDbGljayIsInNlcnZpY2VzQXJyYXkiLCJPYmplY3QiLCJlbnRyaWVzIiwic2VydmljZXMiLCJJb0lvc0NhbGwiLCJ0b2dnbGUiLCJmaWx0ZXIiLCJzZXJ2aWNlIiwiY2F0ZWdvcnkiLCJtYXAiLCJ0aXRsZSIsIkZhSW5mb0NpcmNsZSIsIkZhTmV3c3BhcGVyIiwiRmFCcmllZmNhc2UiLCJGYUNvbW1lbnRBbHQiLCJuZXdzcm9vbSIsImltYWdlIiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUFBOztBQUNuQixRQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sRUFBaEI7QUFDQSxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQkgsNENBQUssQ0FBQ0ksUUFBTixDQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNLENBQUNDLE1BQUQsRUFBU0MsU0FBVCxJQUFzQk4sNENBQUssQ0FBQ0ksUUFBTixDQUFlLEtBQWYsQ0FBNUI7QUFDQUcscURBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxFQUFkLENBQWlCLHFCQUFqQixFQUF3QyxNQUFNTixPQUFPLENBQUMsS0FBRCxDQUFyRDs7QUFDQSxRQUFNTyxZQUFZLEdBQUcsTUFBTTtBQUN2QlAsV0FBTyxDQUFDLENBQUQsQ0FBUDtBQUNILEdBRkQ7O0FBR0Es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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxtREFBRDtBQUNJLE1BQUUsRUFBRUMsMkRBRFI7QUFFSSxRQUFJLEVBQUMsTUFGVDtBQUdJLE1BQUUsRUFBQyxNQUhQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixlQURKLENBL0JKLENBVkosRUFvREk7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFESixFQUlJLE1BQUMsaURBQUQ7QUFDSSxTQUFLLEVBQUVDLDBEQUFRLENBQUMsQ0FBRCxDQUFSLENBQVlDLEtBRHZCO0FBRUksV0FBTyxFQUFFRCwwREFBUSxDQUFDLENBQUQsQ0FBUixDQUFZTCxLQUZ6QjtBQUdJLFFBQUksRUFBRUssMERBQVEsQ0FBQyxDQUFELENBQVIsQ0FBWUUsSUFIdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLEVBU0ksTUFBQyxpREFBRDtBQUNJLFNBQUssRUFBQyx5RUFEVjtBQUVJLFdBQU8sRUFBQyxpREFGWjtBQUdJLFFBQUksRUFBQywrREFIVDtBQUlJLFFBQUksRUFBQyx3R0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBVEosQ0FwREosQ0FESixDQURKLENBREosQ0FESixDQXhGSixDQURKLEVBdUtLMUIsSUFBSSxHQUFHO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBeUIsV0FBTyxFQUFFUSxZQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQUgsR0FBd0QsRUF2S2pFLENBREo7QUEyS0g7O0dBcExRYixNOztBQXNMTUEscUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMuYWJhMjJjMDY5NzdjYWZmNDU2MDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBXaGF0c05ldyBmcm9tICcuL3doYXRzbmV3J1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gJy4vc2VhcmNoJ1xyXG5pbXBvcnQgTWVudSBmcm9tICcuL21lbnUnXHJcbmltcG9ydCB7XHJcbiAgICBJbWFnZSxcclxuICAgIEJveCxcclxuICAgIEJ1dHRvbixcclxuICAgIENvbGxhcHNlLFxyXG4gICAgSWNvbixcclxuICAgIEZsZXgsXHJcbiAgICBUZXh0LFxyXG4gICAgUG9wb3ZlcixcclxuICAgIFBvcG92ZXJUcmlnZ2VyLFxyXG4gICAgUG9wb3ZlckNvbnRlbnQsXHJcbiAgICBTdGFjayxcclxufSBmcm9tICdAY2hha3JhLXVpL2NvcmUnXHJcbmltcG9ydCBzZXJ2aWNlcyBmcm9tIFwiLi4vLi4vZGF0YWJhc2Uvc2VydmljZXNcIlxyXG5pbXBvcnQgeyBGYUluZm9DaXJjbGUsIEZhTmV3c3BhcGVyLCBGYUNvbW1lbnRBbHQsIEZhQnJpZWZjYXNlIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCJcclxuaW1wb3J0IHsgSW9Jb3NDYWxsIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCJcclxuaW1wb3J0IG5ld3Nyb29tIGZyb20gXCIuLi8uLi9kYXRhYmFzZS9uZXdzcm9vbVwiXHJcbmltcG9ydCBGYWRlIGZyb20gJ3JlYWN0LXJldmVhbC9GYWRlJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnLi4vLi4vcGFnZUJ1aWxkZXIvQ29udGFpbmVyJztcclxuXHJcbmZ1bmN0aW9uIGhlYWRlcihwcm9wcykge1xyXG4gICAgY29uc3QgaW5pdFJlZiA9IFJlYWN0LnVzZVJlZigpO1xyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgKCkgPT4gc2V0U2hvdyhmYWxzZSkpO1xyXG4gICAgY29uc3Qgb3ZlcmxheUNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFNob3coMCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzZXJ2aWNlc0FycmF5ID0gT2JqZWN0LmVudHJpZXMoc2VydmljZXMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxCb3ggcG9zaXRpb249XCJzdGlja3lcIiB0b3A9XCIwcHhcIiBiZz1cIndoaXRlXCIgYm94U2hhZG93PVwibGdcIiB6SW5kZXg9ezEwMDB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtMyB0cmFuc2l0aW9uLTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBsYXllci00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnU+PC9NZW51PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9sb2dvLnBuZ1wiIGhlaWdodD1cIjQ1cHhcIiBjbGFzc05hbWU9XCJkLW5vbmUgZC1zbS1ibG9jayBtci0zXCI+PC9JbWFnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJ0ZXh0LWRhcmsgaG92ZXItZWZmZWN0IGQtbm9uZSBkLWxnLWJsb2NrXCIgdmFyaWFudENvbG9yPVwid2hpdGVcIiByaWdodEljb249XCJjaGV2cm9uLWRvd25cIiBvbkNsaWNrPXsoKSA9PiBzaG93ID09PSAxID8gc2V0U2hvdygwKSA6IHNldFNob3coMSl9ID5Tb2x1dGlvbnM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiZC1ub25lIGQtbGctYmxvY2sgdGV4dC1kYXJrIGhvdmVyLWVmZmVjdFwiIG9uQ2xpY2s9eygpID0+IHNob3cgPT09IDIgPyBzZXRTaG93KDApIDogc2V0U2hvdygyKX0gdmFyaWFudENvbG9yPVwid2hpdGVcIiByaWdodEljb249XCJjaGV2cm9uLWRvd25cIj5Db21wYW55PC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2ZlYXR1cmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJkLW5vbmUgZC1sZy1ibG9jayB0ZXh0LWRhcmsgaG92ZXItZWZmZWN0XCIgdmFyaWFudENvbG9yPVwid2hpdGVcIj5PdXIgRmVhdHVyZXM8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9sb2dvLnBuZ1wiIGhlaWdodD1cIjQ1cHhcIiBjbGFzc05hbWU9XCJtci0zIGQtc20tbm9uZVwiPjwvSW1hZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlciB0cmlnZ2VyPVwiaG92ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UG9wb3ZlclRyaWdnZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInVuc3R5bGVkXCIgbGVmdEljb249e0lvSW9zQ2FsbH0gY2xhc3NOYW1lPVwiTnVuaXRvU2Fucy1Cb2xkIGxpbmsgcC0yIG10LTEgZC1ub25lIGQtbGctZmxleFwiPiA8YSBocmVmPVwidGVsOjEzMDAwMDI0ODdcIiBjbGFzc05hbWU9XCJsaW5rXCI+MTMwMCAwMCBCR1VTPC9hPiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXJUcmlnZ2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQb3BvdmVyQ29udGVudCB6SW5kZXg9ezR9IHA9ezZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9pbWFnZXMvYW5pbWF0aW9ucy9waG9uZS1kaWFsLmdpZlwiIGNsYXNzTmFtZT1cInBob25lLWRpYWxcIj48L0ltYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3ZlckNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BvcG92ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPFNlYXJjaCB0b2dnbGUgPXsoKSA9PiBzZXRTZWFyY2goIXNlYXJjaCl9IHNlYXJjaGluZz17c2VhcmNofT48L1NlYXJjaD4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lypwcm9wcGVyIHN5bnRheCB0byB1c2UgbGluayB3aXRoIGR5bmFtaWMgcm91dGluZyovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9zZWFyY2g/c2VhcmNoPWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInAtMiByb3VuZGVkLTggaG92ZXItZWZmZWN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIG5hbWU9XCJzZWFyY2hcIiBvbkNsaWNrPXtwcm9wcy50b2dnbGV9IHNpemU9XCIxOHB4XCI+PC9JY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibXgtMyBkLW5vbmUgZC1zbS1ibG9ja1wiIHZhcmlhbnQ9XCJzb2xpZFwiIHZhcmlhbnRDb2xvcj1cInByaW1hcnlcIj5Db250YWN0IFVzPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogTWVudSAqL31cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBkaXNwbGF5PXtbXCJub25lXCIsIFwibm9uZVwiLCBcIm5vbmVcIiwgXCJibG9ja1wiXX0gaXNPcGVuPXtzaG93ID09PSAxfT5cclxuICAgICAgICAgICAgICAgICAgICA8RmFkZSBkdXJhdGlvbj17ODAwfSBkaXN0YW5jZT17XCIzMCVcIn0gYm90dG9tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXggcGI9ezEyfSB3cmFwPVwid3JhcFwiIHB4PXs2fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IG1iPXs0fSBtdD17MTJ9IHdpZHRoPXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjUwJVwiLCAxLzNdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXk9e1wiMTZweFwifSBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cIjcwMFwiPklUIEluZnJhc3RydWN0dXJhbCBTZXJ2aWNlczwvVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrIHNwYWNpbmc9XCI4cHhcIiBkaXJlY3Rpb249XCJjb2x1bW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlcnZpY2VzQXJyYXkuZmlsdGVyKHNlcnZpY2UgPT4gc2VydmljZVsxXS5jYXRlZ29yeSA9PT0gXCJJVCBJbmZyYXN0cnVjdHVyYWwgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnMvW25hbWVdXCIgYXM9e1wiL3NvbHV0aW9ucy9cIiArIHNlcnZpY2VbMF19PjxCdXR0b24gYXM9XCJhXCIgdmFyaWFudD1cInVuc3R5bGVkXCI+e3NlcnZpY2VbMV0udGl0bGV9PC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IG1iPXs0fSBtdD17MTJ9IHdpZHRoPXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjUwJVwiLCAxLzNdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXk9e1wiMTZweFwifSBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cIjcwMFwiPk5ldHdvcmsgU2VydmljZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiOHB4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0FycmF5LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2VbMV0uY2F0ZWdvcnkgPT09IFwiTmV0d29yayBTZXJ2aWNlc1wiKS5tYXAoc2VydmljZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NvbHV0aW9ucy9bbmFtZV1cIiBhcz17XCIvc29sdXRpb25zL1wiICsgc2VydmljZVswXX0+PEJ1dHRvbiBhcz1cImFcIiB2YXJpYW50PVwidW5zdHlsZWRcIj57c2VydmljZVsxXS50aXRsZX08L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBteT17XCIxNnB4XCJ9IGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiNzAwXCI+Q3liZXIgU2VjdXJpdHkgU2VydmljZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiOHB4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0FycmF5LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2VbMV0uY2F0ZWdvcnkgPT09IFwiQ3liZXIgU2VjdXJpdHkgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnMvW25hbWVdXCIgYXM9e1wiL3NvbHV0aW9ucy9cIiArIHNlcnZpY2VbMF19PjxCdXR0b24gYXM9XCJhXCIgdmFyaWFudD1cInVuc3R5bGVkXCI+e3NlcnZpY2VbMV0udGl0bGV9PC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94IG1iPXs0fSBtdD17MTJ9IHdpZHRoPXtbXCIxMDAlXCIsIFwiMTAwJVwiLCBcIjUwJVwiLCAxLzNdfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgbXk9e1wiMTZweFwifSBmb250U2l6ZT1cImxnXCIgZm9udFdlaWdodD1cIjcwMFwiPkNvbGxhYm9yYXRpdmUgU2VydmljZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiOHB4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0FycmF5LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2VbMV0uY2F0ZWdvcnkgPT09IFwiQ29sbGFib3JhdGl2ZSBTZXJ2aWNlc1wiKS5tYXAoc2VydmljZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NvbHV0aW9ucy9bbmFtZV1cIiBhcz17XCIvc29sdXRpb25zL1wiICsgc2VydmljZVswXX0+PEJ1dHRvbiBhcz1cImFcIiB2YXJpYW50PVwidW5zdHlsZWRcIj57c2VydmljZVsxXS50aXRsZX08L0J1dHRvbj48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBteT17XCIxNnB4XCJ9IGZvbnRTaXplPVwibGdcIiBmb250V2VpZ2h0PVwiNzAwXCI+RGV2ZWxvcG1lbnQgU2VydmljZXM8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTdGFjayBzcGFjaW5nPVwiOHB4XCIgZGlyZWN0aW9uPVwiY29sdW1uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZXJ2aWNlc0FycmF5LmZpbHRlcihzZXJ2aWNlID0+IHNlcnZpY2VbMV0uY2F0ZWdvcnkgPT09IFwiRGV2ZWxvcG1lbnQgU2VydmljZXNcIikubWFwKHNlcnZpY2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zb2x1dGlvbnMvW25hbWVdXCIgYXM9e1wiL3NvbHV0aW9ucy9cIiArIHNlcnZpY2VbMF19PjxCdXR0b24gYXM9XCJhXCIgdmFyaWFudD1cInVuc3R5bGVkXCI+e3NlcnZpY2VbMV0udGl0bGV9PC9CdXR0b24+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpc09wZW49e3Nob3cgPT09IDJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYWRlIGR1cmF0aW9uPXs4MDB9IGRpc3RhbmNlPXtcIjMwJVwifSBib3R0b20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcHktNCBwci01IGQtZmxleCBmbGV4LWNvbHVtbiBoZWFkZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXNwbGF5NiBtdC0yIHRleHQtcHJpbWFyeSB0ZXh0LXVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbXBhbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIk51bml0b1NhbnMtRXh0cmFCb2xkIHRleHQtc2Vjb25kYXJ5IG10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHZXQgdGhlIGxhdGVzdCByZXNvdXJjZXMgYW5kIHVwZGF0ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tIG91ciBjb21wYW55IGhlcmUuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMyBweS00IGQtZmxleCBmbGV4LWNvbHVtbiBoZWFkZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGYUluZm9DaXJjbGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj1cIjEycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQWJvdXQgVXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c3Jvb21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkLWZsZXggbGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcz17RmFOZXdzcGFwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj1cIjEycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3c3Jvb21cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc29sdXRpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZC1mbGV4IGxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXM9e0ZhQnJpZWZjYXNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXI9XCIxMnB4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvQm94PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBTb2x1dGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQtZmxleCBsaW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzPXtGYUNvbW1lbnRBbHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtcj1cIjEycHhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+PC9Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBweS00IGQtZmxleCBmbGV4LWNvbHVtbiBoZWFkZXItbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImRpc3BsYXk2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2hhdCdzIE5ld1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdoYXRzTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e25ld3Nyb29tWzBdLmltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRpbmc9e25ld3Nyb29tWzBdLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9e25ld3Nyb29tWzBdLmxpbmt9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFdoYXRzTmV3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL3d3dy5iZ3VuaWZpZWRzb2x1dGlvbnMubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE2LzExL2Jsb2c1LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGluZz1cIlN1Y2Nlc3NmdWxsIHVwZ3JhZGF0aW9uIE1lZ2EgQ2lzY28gQ2FsbCBNYW5hZ2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQkcgVW5pZmllZCBTb2x1dGlvbnMgdGVhbSBoYXZlIHN1Y2Nlc3NmdWxseSB1cGdyYWRlZCBpdHMgIC4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9ibG9ncy8yLXN1Y2Nlc3NmdWxsLXVwLWdyYWRhdGlvbi1vZi1tZWdhLWNpc2NvLWNhbGwtbWFuYWdlci1jbHVzdGVyLWZyb20tdmVyc2lvbi0xMC41LjEtdG8tMTIuMC4xLnN1MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgICAgICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge3Nob3cgPyA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbkNsaWNrPXtvdmVybGF5Q2xpY2t9IC8+IDogXCJcIn1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9