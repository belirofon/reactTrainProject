/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: ./src/server/indexTemplate.js
var indexTemplate = function indexTemplate(content) {
  return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <title>React-ssr</title>\n</head>\n<body>\n    <div id=\"root\">".concat(content, "</div>\n</body>\n</html>\n");
};
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-hot-loader/root"
const root_namespaceObject = require("react-hot-loader/root");
;// CONCATENATED MODULE: ./src/shared/Header.tsx

 // import  styles  from './header.css';

function HeaderComponent() {
  return /*#__PURE__*/external_react_namespaceObject.createElement("header", null, /*#__PURE__*/external_react_namespaceObject.createElement("h1", null, " My React App "));
}

;
var Header = (0,root_namespaceObject.hot)(HeaderComponent);
;// CONCATENATED MODULE: ./src/App.tsx
 // import styles from './main.global.css';


 // import { Layout } from './shared/Layout/Layout';

function AppComponent() {
  return /*#__PURE__*/external_react_default().createElement(Header, null) // <Layout>
  //   content
  // </Layout>
  ;
}

;
var App = (0,root_namespaceObject.hot)(AppComponent);
;// CONCATENATED MODULE: ./src/server/server.js




var app = external_express_default()();
app.use('/static', external_express_default()["static"]('./dist/client'));
app.get('/', function (req, res) {
  res.send(indexTemplate(server_default().renderToString(App())));
}); // app.get('/auth', (req, res) => {
//
//     res.send(
//         indexTemplate(ReactDOM.renderToString(App())),
//     );
// });

app.listen(3000, function () {
  console.log('>>>>>>Server has been started on http://localhost:3000');
});
/******/ })()
;