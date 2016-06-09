webpackJsonp([2],{

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
	
	/* harmony export */ Object.defineProperty(exports, "a", {configurable: false, enumerable: true, get: function() { return App; }});var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
	    var c = arguments.length,
	        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
	        d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = this && this.__metadata || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	
	let App = class App {
	    constructor() {
	        console.log('what?');
	    }
	};
	App = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* Component */])({
	    selector: 'app',
	    template: `
	    <h1>Hi</h1>
	    <div>Hellow World</div>
	  `
	}), __metadata('design:paramtypes', [])], App);

/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(126);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app__ = __webpack_require__(312);
	/* harmony export */ exports["main"] = main;
	
	function main() {
	    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* bootstrap */])(__WEBPACK_IMPORTED_MODULE_1__app_app__["a" /* App */], []);
	}

/***/ }

},[316]);
//# sourceMappingURL=main.map