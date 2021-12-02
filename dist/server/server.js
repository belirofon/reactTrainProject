/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 666:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header__example--vqtpB{color:red;background-color:#aa2424}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"example": "header__example--vqtpB"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 395:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".layout__Layout--te0x7{max-width:1400px;min-height:100vh;margin:0 auto;background-color:#e04646}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"Layout": "layout__Layout--te0x7"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: ./src/server/indexTemplate.js
var indexTemplate = function indexTemplate(content) {
  return "\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <script src=\"/static/client.js\" type=\"application/javascript\"></script>\n    <title>React-ssr</title>\n</head>\n<body>\n    <noscript>You must enable JavaScript to use this application.</noscript>\n    <div id=\"root\">".concat(content, "</div>\n</body>\n</html>\n");
};
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// CONCATENATED MODULE: external "react-hot-loader/root"
const root_namespaceObject = require("react-hot-loader/root");
// EXTERNAL MODULE: ./src/shared/Header/header.css
var header = __webpack_require__(666);
;// CONCATENATED MODULE: ./src/shared/Header/Sidebar/Sidebar.tsx

function Sidebar() {
  return /*#__PURE__*/external_react_default().createElement("section", null, /*#__PURE__*/external_react_default().createElement("input", {
    type: "checkbox",
    id: "side-checkbox"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "side-panel"
  }, /*#__PURE__*/external_react_default().createElement("label", {
    className: "side-button-2",
    htmlFor: "side-checkbox"
  }, "+"), /*#__PURE__*/external_react_default().createElement("div", {
    className: "side-title"
  }), /*#__PURE__*/external_react_default().createElement("ul", null, /*#__PURE__*/external_react_default().createElement("li", null))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "side-button-1-wr"
  }, /*#__PURE__*/external_react_default().createElement("label", {
    className: "side-button-1",
    htmlFor: "side-checkbox"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "side-b side-open"
  }))));
}
;// CONCATENATED MODULE: external "react-audio-player"
const external_react_audio_player_namespaceObject = require("react-audio-player");
var external_react_audio_player_default = /*#__PURE__*/__webpack_require__.n(external_react_audio_player_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/Header/Audio/audio.tsx


function Audio() {
  return /*#__PURE__*/external_react_default().createElement((external_react_audio_player_default()), {
    src: "./audio/music.ogg",
    autoPlay: true,
    controls: true
  });
}
;// CONCATENATED MODULE: ./src/shared/Header/Buttons/Buttons.tsx

function Button() {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("button", null, /*#__PURE__*/external_react_default().createElement("a", {
    href: "#"
  }, "EN")));
}
;// CONCATENATED MODULE: ./src/shared/Header/Header.tsx





function Header() {
  return /*#__PURE__*/external_react_default().createElement("header", {
    className: header/* default.style */.Z.style
  }, /*#__PURE__*/external_react_default().createElement(Sidebar, null), /*#__PURE__*/external_react_default().createElement(Audio, null), /*#__PURE__*/external_react_default().createElement(Button, null));
}
// EXTERNAL MODULE: ./src/shared/Layout/layout.css
var layout = __webpack_require__(395);
;// CONCATENATED MODULE: ./src/shared/Layout/Layout.tsx


function Layout(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: layout/* default.Layout */.Z.Layout
  }, children);
}
;// CONCATENATED MODULE: ./src/App.tsx





function AppComponent() {
  return /*#__PURE__*/external_react_default().createElement(Layout, null, /*#__PURE__*/external_react_default().createElement(Header, null));
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
})();

/******/ })()
;