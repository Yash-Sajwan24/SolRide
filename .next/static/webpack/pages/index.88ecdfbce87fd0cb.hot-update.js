"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _temp_avatar_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../temp/avatar.jpg */ \"./temp/avatar.jpg\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_solWagContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/solWagContext */ \"./context/solWagContext.js\");\n/* harmony import */ var _assets_SolWagLogo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/SolWagLogo.png */ \"./assets/SolWagLogo.png\");\n\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar style = {\n    wrapper: \"md:h-full px-52 md:w-52 h-16 bg-primary text-white flex md:justify-around items-center px-4 fixed z-20 md:flex-col text-sm bg-[url('../assets/yash.webp')]\",\n    leftMenu: \"gap-4 md:flex-col justify-center flex\",\n    logo: \"md:text-3xl flex cursor-pointer bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left ml-2\",\n    menuItem: \"md:text-lg text-sm text-white font-medium flex items-center my-4 cursor-pointer hover:text-slate-500 \",\n    rightMenu: \"flex gap-3 items-center md:flex-col w-52\",\n    userImageContainer: \"mr-2\",\n    userImage: \"h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer\",\n    loginButton: \"flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1\",\n    loginText: \"ml-2\",\n    logoContainer: \"flex items-center\"\n};\nvar Navbar = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_solWagContext__WEBPACK_IMPORTED_MODULE_4__.SolWagContext), currentAccount = ref.currentAccount, connectWallet = ref.connectWallet, currentUser = ref.currentUser, setRide = ref.setRide, setOffer = ref.setOffer, offer = ref.offer;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: style.wrapper,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: style.leftMenu,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.logoContainer,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"sol-logo\",\n                            children: \"SolRide\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.menuItem,\n                        onClick: function() {\n                            setOffer('hidden');\n                            setRide('block');\n                            console.log(offer);\n                        },\n                        children: \"Ride Pool\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.menuItem,\n                        onClick: function() {\n                            setOffer('block');\n                            setRide('hidden');\n                        },\n                        children: \"Offer Pool\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(style.menuItem, \" md:block hidden\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"https://docs.google.com/document/d/1zsikHSiVQscm2C_g5148DYDx7WeUF6isvKnBppvdzWg/edit?usp=sharing\",\n                            target: \"blank\",\n                            rel: \"noreferrer\",\n                            children: \"White Paper\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                            lineNumber: 33,\n                            columnNumber: 62\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(style.rightMenu, \" md:block hidden\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.menuItem,\n                        children: \"Wallet connected\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.userImageContainer\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, _this),\n                    currentAccount ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            currentAccount.slice(0, 6),\n                            \"...\",\n                            currentAccount.slice(39)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: style.loginButton,\n                        onClick: function() {\n                            return connectWallet();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_6__.BsPerson, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                                lineNumber: 52,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: style.loginText,\n                                children: \"Log in\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                                lineNumber: 53,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\hp\\\\Desktop\\\\project\\\\SolRide\\\\components\\\\Navbar.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this));\n};\n_s(Navbar, \"ZI+Smjqdt2G7EosB1hRADmgp7Eo=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxPQUFPLEVBQUUsUUFBUTs0QkFBRlAsTUFBTSxDQUFOQSxhQUFhOzs7d0dBQzVEakIsb0RBQVE7Ozs7O3dHQUNSZ0MsQ0FBSTtnQ0FBQ1QsU0FBUyxFQUFFbkIsS0FBSyxDQUFDUyxTQUFTOzBDQUFFLENBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRCxDQUFDO0dBdENLRSxNQUFNO0tBQU5BLE1BQU07QUF3Q1osK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZiYXIuanM/ZmJjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IGF2YXRhciBmcm9tICcuLi90ZW1wL2F2YXRhci5qcGcnXHJcbmltcG9ydCB7IEJzUGVyc29uIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXHJcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgU29sV2FnQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQvc29sV2FnQ29udGV4dCdcclxuaW1wb3J0IFNvbFdhZ0xvZ28gZnJvbSAnLi4vYXNzZXRzL1NvbFdhZ0xvZ28ucG5nJ1xyXG5cclxuY29uc3Qgc3R5bGUgPSB7XHJcbiAgd3JhcHBlcjogYG1kOmgtZnVsbCBweC01MiBtZDp3LTUyIGgtMTYgYmctcHJpbWFyeSB0ZXh0LXdoaXRlIGZsZXggbWQ6anVzdGlmeS1hcm91bmQgaXRlbXMtY2VudGVyIHB4LTQgZml4ZWQgei0yMCBtZDpmbGV4LWNvbCB0ZXh0LXNtIGJnLVt1cmwoJy4uL2Fzc2V0cy95YXNoLndlYnAnKV1gLFxyXG4gIGxlZnRNZW51OiBgZ2FwLTQgbWQ6ZmxleC1jb2wganVzdGlmeS1jZW50ZXIgZmxleGAsXHJcbiAgbG9nbzogYG1kOnRleHQtM3hsIGZsZXggY3Vyc29yLXBvaW50ZXIgYmctZ3JhZGllbnQtdG8tciBmcm9tLVsjRDkwMEZBXSB2aWEtWyMwMERCRkRdIHRvLVsjMDBGRjlEXSB0ZXh0LXRyYW5zcGFyZW50IGJnLWNsaXAtdGV4dCB3LWZ1bGwgZm9udC1ib2xkIHRleHQtbGVmdCBtbC0yYCxcclxuICBtZW51SXRlbTogYG1kOnRleHQtbGcgdGV4dC1zbSB0ZXh0LXdoaXRlIGZvbnQtbWVkaXVtIGZsZXggaXRlbXMtY2VudGVyIG15LTQgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1zbGF0ZS01MDAgYCxcclxuICByaWdodE1lbnU6IGBmbGV4IGdhcC0zIGl0ZW1zLWNlbnRlciBtZDpmbGV4LWNvbCB3LTUyYCxcclxuICB1c2VySW1hZ2VDb250YWluZXI6IGBtci0yYCxcclxuICB1c2VySW1hZ2U6IGBoLTEwIHctMTAgbXItNCByb3VuZGVkLWZ1bGwgcC1weCBvYmplY3QtY292ZXIgY3Vyc29yLXBvaW50ZXJgLFxyXG4gIGxvZ2luQnV0dG9uOiBgZmxleCBpdGVtcy1jZW50ZXIgY3Vyc29yLXBvaW50ZXIgcm91bmRlZC1mdWxsIGhvdmVyOmJnLVsjMzMzMzMzXSBweC00IHB5LTFgLFxyXG4gIGxvZ2luVGV4dDogYG1sLTJgLFxyXG4gIGxvZ29Db250YWluZXI6IGBmbGV4IGl0ZW1zLWNlbnRlcmBcclxufVxyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY3VycmVudEFjY291bnQsIGNvbm5lY3RXYWxsZXQsIGN1cnJlbnRVc2VyLCBzZXRSaWRlLCBzZXRPZmZlciwgb2ZmZXIgfSA9IHVzZUNvbnRleHQoU29sV2FnQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS53cmFwcGVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxlZnRNZW51fT5cclxuICAgICAgey8qIDxJbWFnZSBzcmM9e1NvbFdhZ0xvZ299IGhlaWdodD17MzB9IHdpZHRoPXszMH0gLz4gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmxvZ29Db250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2wtbG9nb1wiPlNvbFJpZGU8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWVudUl0ZW19IG9uQ2xpY2s9eygpPT57c2V0T2ZmZXIoJ2hpZGRlbicpOyBzZXRSaWRlKCdibG9jaycpOyBjb25zb2xlLmxvZyhvZmZlcil9fT5SaWRlIFBvb2w8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUubWVudUl0ZW19IG9uQ2xpY2s9eygpPT57c2V0T2ZmZXIoJ2Jsb2NrJyk7IHNldFJpZGUoJ2hpZGRlbicpfX0+T2ZmZXIgUG9vbDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZS5tZW51SXRlbX0gbWQ6YmxvY2sgaGlkZGVuYH0+PGEgaHJlZj1cImh0dHBzOi8vZG9jcy5nb29nbGUuY29tL2RvY3VtZW50L2QvMXpzaWtIU2lWUXNjbTJDX2c1MTQ4RFlEeDdXZVVGNmlzdktuQnBwdmR6V2cvZWRpdD91c3A9c2hhcmluZ1wiIHRhcmdldD1cImJsYW5rXCIgcmVsPVwibm9yZWZlcnJlclwiPldoaXRlIFBhcGVyPC9hPjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlLnJpZ2h0TWVudX0gbWQ6YmxvY2sgaGlkZGVuYH0+XHJcbiAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tZW51SXRlbX0+PC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5tZW51SXRlbX0+V2FsbGV0IGNvbm5lY3RlZDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51c2VySW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgey8qIDxJbWFnZVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlLnVzZXJJbWFnZX1cclxuICAgICAgICAgICAgc3JjPXthdmF0YXJ9XHJcbiAgICAgICAgICAgIHdpZHRoPXs0MH1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0MH1cclxuICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtjdXJyZW50QWNjb3VudCA/IChcclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHtjdXJyZW50QWNjb3VudC5zbGljZSgwLCA2KX0uLi57Y3VycmVudEFjY291bnQuc2xpY2UoMzkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5sb2dpbkJ1dHRvbn0gb25DbGljaz17KCkgPT4gY29ubmVjdFdhbGxldCgpfT5cclxuICAgICAgICAgICAgPEJzUGVyc29uIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGUubG9naW5UZXh0fT5Mb2cgaW48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyXHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsImF2YXRhciIsIkJzUGVyc29uIiwidXNlQ29udGV4dCIsIlNvbFdhZ0NvbnRleHQiLCJTb2xXYWdMb2dvIiwic3R5bGUiLCJ3cmFwcGVyIiwibGVmdE1lbnUiLCJsb2dvIiwibWVudUl0ZW0iLCJyaWdodE1lbnUiLCJ1c2VySW1hZ2VDb250YWluZXIiLCJ1c2VySW1hZ2UiLCJsb2dpbkJ1dHRvbiIsImxvZ2luVGV4dCIsImxvZ29Db250YWluZXIiLCJOYXZiYXIiLCJjdXJyZW50QWNjb3VudCIsImNvbm5lY3RXYWxsZXQiLCJjdXJyZW50VXNlciIsInNldFJpZGUiLCJzZXRPZmZlciIsIm9mZmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DbGljayIsImNvbnNvbGUiLCJsb2ciLCJhIiwiaHJlZiIsInRhcmdldCIsInJlbCIsInNsaWNlIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Navbar.js\n");

/***/ })

});