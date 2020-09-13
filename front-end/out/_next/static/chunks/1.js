(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./src/components/ChatBot/ChatBot.jsx":
/*!********************************************!*\
  !*** ./src/components/ChatBot/ChatBot.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {// import React, { Component } from "react";
// import { Widget, addResponseMessage } from "react-chat-widget";
// import UIfx from "uifx";
// import axios from "axios";
// const tick = new UIfx({ asset: "/assets/data/juntos.mp3" });
// const sendMessage = (message) => {
//   addResponseMessage(message);
//   try {
//     let audio = new Audio("/assets/data/juntos.mp3");
//     audio.play();
//   } catch (e) {
//     console.log("Please allow audio for a better experience.");
//   }
// };
// class ChatBot extends Component {
//   componentDidMount() {
//     sendMessage("Welcome my friend!");
//   }
//   handleNewUserMessage = (newMessage) => {
//     axios
//       .post(
//         "http://chat-bot-bg-unified.herokuapp.com/api/chat_bot/predictResponse/",
//         {
//           message: newMessage,
//         },
//         {
//           headers: {
//             "Access-Control-Allow-Origin": "*",
//           },
//         }
//       )
//       .then((res) => {
//         sendMessage("Success!");
//       })
//       .catch((err) => {
//         console.error(err);
//       });
//   };
//   render() {
//     return (
//       <div className="App">
//         <Widget handleNewUserMessage={this.handleNewUserMessage} />
//       </div>
//     );
//   }
// }
// export default ChatBot;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/module.js */ "./node_modules/next/node_modules/webpack/buildin/module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9DaGF0Qm90L0NoYXRCb3QuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJmaWxlIjoic3RhdGljL2NodW5rcy8xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBXaWRnZXQsIGFkZFJlc3BvbnNlTWVzc2FnZSB9IGZyb20gXCJyZWFjdC1jaGF0LXdpZGdldFwiO1xyXG4vLyBpbXBvcnQgVUlmeCBmcm9tIFwidWlmeFwiO1xyXG4vLyBpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG4vLyBjb25zdCB0aWNrID0gbmV3IFVJZngoeyBhc3NldDogXCIvYXNzZXRzL2RhdGEvanVudG9zLm1wM1wiIH0pO1xyXG5cclxuLy8gY29uc3Qgc2VuZE1lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xyXG4vLyAgIGFkZFJlc3BvbnNlTWVzc2FnZShtZXNzYWdlKTtcclxuLy8gICB0cnkge1xyXG4vLyAgICAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKFwiL2Fzc2V0cy9kYXRhL2p1bnRvcy5tcDNcIik7XHJcbi8vICAgICBhdWRpby5wbGF5KCk7XHJcbi8vICAgfSBjYXRjaCAoZSkge1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgYWxsb3cgYXVkaW8gZm9yIGEgYmV0dGVyIGV4cGVyaWVuY2UuXCIpO1xyXG4vLyAgIH1cclxuLy8gfTtcclxuXHJcbi8vIGNsYXNzIENoYXRCb3QgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4vLyAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4vLyAgICAgc2VuZE1lc3NhZ2UoXCJXZWxjb21lIG15IGZyaWVuZCFcIik7XHJcbi8vICAgfVxyXG5cclxuLy8gICBoYW5kbGVOZXdVc2VyTWVzc2FnZSA9IChuZXdNZXNzYWdlKSA9PiB7XHJcbi8vICAgICBheGlvc1xyXG4vLyAgICAgICAucG9zdChcclxuLy8gICAgICAgICBcImh0dHA6Ly9jaGF0LWJvdC1iZy11bmlmaWVkLmhlcm9rdWFwcC5jb20vYXBpL2NoYXRfYm90L3ByZWRpY3RSZXNwb25zZS9cIixcclxuLy8gICAgICAgICB7XHJcbi8vICAgICAgICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLFxyXG4vLyAgICAgICAgIH0sXHJcbi8vICAgICAgICAge1xyXG4vLyAgICAgICAgICAgaGVhZGVyczoge1xyXG4vLyAgICAgICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpblwiOiBcIipcIixcclxuLy8gICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICApXHJcbi8vICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuLy8gICAgICAgICBzZW5kTWVzc2FnZShcIlN1Y2Nlc3MhXCIpO1xyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuLy8gICAgICAgfSk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgcmVuZGVyKCkge1xyXG4vLyAgICAgcmV0dXJuIChcclxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cclxuLy8gICAgICAgICA8V2lkZ2V0IGhhbmRsZU5ld1VzZXJNZXNzYWdlPXt0aGlzLmhhbmRsZU5ld1VzZXJNZXNzYWdlfSAvPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICk7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBDaGF0Qm90O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9