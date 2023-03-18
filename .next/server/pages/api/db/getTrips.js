"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/db/getTrips";
exports.ids = ["pages/api/db/getTrips"];
exports.modules = {

/***/ "@sanity/client":
/*!*********************************!*\
  !*** external "@sanity/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sanity/client");

/***/ }),

/***/ "(api)/./lib/sanity.js":
/*!***********************!*\
  !*** ./lib/sanity.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sanity/client */ \"@sanity/client\");\n/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({\n    projectId: '4pi9d260',\n    dataset: 'production',\n    apiVersion: 'v1',\n    token: 'skMzewGlLQYaxEhoeq0m5xtIQgXyJ9iUC7rQWRIPrXIQVdEjMId0bfmCZpXlJ1DHvLgXRmNUEtNz8BMJOzlJHeHNh6YGXkgBWJagjBc9xIN05yzwWWgxmXTsjeMll1ZJWJTmjdaVf7DZErWWeFXij4CMmTU1lzhB8ocV6bmQsdkSsVIzwY0q',\n    useCdn: false\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvc2FuaXR5LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF5QztBQUVsQyxLQUFLLENBQUNDLE1BQU0sR0FBR0QscURBQVksQ0FBQyxDQUFDO0lBQ2xDRSxTQUFTLEVBQUUsQ0FBVTtJQUNyQkMsT0FBTyxFQUFFLENBQVk7SUFDckJDLFVBQVUsRUFBRSxDQUFJO0lBQ2hCQyxLQUFLLEVBQUMsQ0FBc0w7SUFDNUxDLE1BQU0sRUFBRSxLQUFLO0FBQ2YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NvbHdhZy8uL2xpYi9zYW5pdHkuanM/ZDhiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuaXR5Q2xpZW50IGZyb20gJ0BzYW5pdHkvY2xpZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IHNhbml0eUNsaWVudCh7XHJcbiAgcHJvamVjdElkOiAnNHBpOWQyNjAnLFxyXG4gIGRhdGFzZXQ6ICdwcm9kdWN0aW9uJyxcclxuICBhcGlWZXJzaW9uOiAndjEnLFxyXG4gIHRva2VuOidza016ZXdHbExRWWF4RWhvZXEwbTV4dElRZ1h5SjlpVUM3clFXUklQclhJUVZkRWpNSWQwYmZtQ1pwWGxKMURIdkxnWFJtTlVFdE56OEJNSk96bEpIZUhOaDZZR1hrZ0JXSmFnakJjOXhJTjA1eXp3V1dneG1YVHNqZU1sbDFaSldKVG1qZGFWZjdEWkVyV1dlRlhpajRDTW1UVTFsemhCOG9jVjZibVFzZGtTc1ZJendZMHEnLFxyXG4gIHVzZUNkbjogZmFsc2UsXHJcbn0pXHJcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJjbGllbnQiLCJwcm9qZWN0SWQiLCJkYXRhc2V0IiwiYXBpVmVyc2lvbiIsInRva2VuIiwidXNlQ2RuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./lib/sanity.js\n");

/***/ }),

/***/ "(api)/./pages/api/db/getTrips.js":
/*!**********************************!*\
  !*** ./pages/api/db/getTrips.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/sanity */ \"(api)/./lib/sanity.js\");\n\nconst query = `*[_type==\"trips\"]`;\nconst getTrips = async (req, res)=>{\n    try {\n        const sanityResponse = await _lib_sanity__WEBPACK_IMPORTED_MODULE_0__.client.fetch(query);\n        res.status(200).send({\n            message: 'success',\n            data: sanityResponse\n        });\n    } catch (error) {\n        res.status(500).send({\n            message: 'error',\n            data: error.message\n        });\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTrips);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGIvZ2V0VHJpcHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFFNUMsS0FBSyxDQUFDQyxLQUFLLElBQUksaUJBQWlCO0FBRWhDLEtBQUssQ0FBQ0MsUUFBUSxVQUFVQyxHQUFHLEVBQUVDLEdBQUcsR0FBSyxDQUFDO0lBQ2xDLEdBQUcsQ0FBQyxDQUFDO1FBQ0QsS0FBSyxDQUFDQyxjQUFjLEdBQUcsS0FBSyxDQUFDTCxxREFBWSxDQUFDQyxLQUFLO1FBQy9DRyxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQyxDQUFDO1lBQUNDLE9BQU8sRUFBRSxDQUFTO1lBQUVDLElBQUksRUFBRUwsY0FBYztRQUFDLENBQUM7SUFDbkUsQ0FBQyxDQUFDLEtBQUssRUFBRU0sS0FBSyxFQUFFLENBQUM7UUFDZlAsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztZQUFDQyxPQUFPLEVBQUUsQ0FBTztZQUFFQyxJQUFJLEVBQUVDLEtBQUssQ0FBQ0YsT0FBTztRQUFDLENBQUM7SUFDaEUsQ0FBQztBQUNQLENBQUM7QUFFRCxpRUFBZVAsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc29sd2FnLy4vcGFnZXMvYXBpL2RiL2dldFRyaXBzLmpzP2VlMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vLi4vLi4vbGliL3Nhbml0eSdcclxuXHJcbmNvbnN0IHF1ZXJ5ID0gYCpbX3R5cGU9PVwidHJpcHNcIl1gXHJcblxyXG5jb25zdCBnZXRUcmlwcyA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzYW5pdHlSZXNwb25zZSA9IGF3YWl0IGNsaWVudC5mZXRjaChxdWVyeSlcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZCh7IG1lc3NhZ2U6ICdzdWNjZXNzJywgZGF0YTogc2FuaXR5UmVzcG9uc2UgfSlcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCh7IG1lc3NhZ2U6ICdlcnJvcicsIGRhdGE6IGVycm9yLm1lc3NhZ2UgfSlcclxuICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBnZXRUcmlwczsiXSwibmFtZXMiOlsiY2xpZW50IiwicXVlcnkiLCJnZXRUcmlwcyIsInJlcSIsInJlcyIsInNhbml0eVJlc3BvbnNlIiwiZmV0Y2giLCJzdGF0dXMiLCJzZW5kIiwibWVzc2FnZSIsImRhdGEiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/db/getTrips.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/db/getTrips.js"));
module.exports = __webpack_exports__;

})();