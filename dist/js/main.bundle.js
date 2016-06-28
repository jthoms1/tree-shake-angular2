webpackJsonp([2],{

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_private__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_dom_web_animations_driver__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_browser_adapter__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browser_location_browser_platform_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__browser_testability__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dom_debug_ng_probe__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dom_dom_renderer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dom_dom_tokens__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dom_events_dom_events__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dom_events_event_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dom_events_hammer_gestures__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dom_events_key_events__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__dom_shared_styles_host__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__security_dom_sanitization_service__ = __webpack_require__(245);

/* harmony export */ __webpack_require__.d(exports, "BROWSER_PLATFORM_PROVIDERS", function() { return BROWSER_PLATFORM_PROVIDERS; });
/* harmony export */ __webpack_require__.d(exports, "BROWSER_SANITIZATION_PROVIDERS", function() { return BROWSER_SANITIZATION_PROVIDERS; });
/* harmony export */ __webpack_require__.d(exports, "BROWSER_APP_PROVIDERS", function() { return BROWSER_APP_PROVIDERS; });/* harmony export */ exports["browserPlatform"] = browserPlatform;

















var BROWSER_PLATFORM_MARKER = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* OpaqueToken */]('BrowserPlatformMarker');
/**
 * A set of providers to initialize the Angular platform in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to {@link platform}.
 */
var BROWSER_PLATFORM_PROVIDERS = [{ provide: BROWSER_PLATFORM_MARKER, useValue: true }, __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* PLATFORM_COMMON_PROVIDERS */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* PLATFORM_INITIALIZER */], useValue: initDomAdapter, multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* PlatformLocation */], useClass: __WEBPACK_IMPORTED_MODULE_5__browser_location_browser_platform_location__["a" /* BrowserPlatformLocation */] }];
var BROWSER_SANITIZATION_PROVIDERS = [{ provide: __WEBPACK_IMPORTED_MODULE_2__core_private__["d" /* SanitizationService */], useExisting: __WEBPACK_IMPORTED_MODULE_17__security_dom_sanitization_service__["a" /* DomSanitizationService */] }, { provide: __WEBPACK_IMPORTED_MODULE_17__security_dom_sanitization_service__["a" /* DomSanitizationService */], useClass: __WEBPACK_IMPORTED_MODULE_17__security_dom_sanitization_service__["b" /* DomSanitizationServiceImpl */] }];
/**
 * A set of providers to initialize an Angular application in a web browser.
 *
 * Used automatically by `bootstrap`, or can be passed to {@link PlatformRef.application}.
 */
var BROWSER_APP_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* APPLICATION_COMMON_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* FORM_PROVIDERS */], BROWSER_SANITIZATION_PROVIDERS, { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* ExceptionHandler */], useFactory: _exceptionHandler, deps: [] }, { provide: __WEBPACK_IMPORTED_MODULE_10__dom_dom_tokens__["a" /* DOCUMENT */], useFactory: _document, deps: [] }, { provide: __WEBPACK_IMPORTED_MODULE_12__dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */], useClass: __WEBPACK_IMPORTED_MODULE_11__dom_events_dom_events__["a" /* DomEventsPlugin */], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_12__dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */], useClass: __WEBPACK_IMPORTED_MODULE_14__dom_events_key_events__["a" /* KeyEventsPlugin */], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_12__dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */], useClass: __WEBPACK_IMPORTED_MODULE_13__dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_13__dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */], useClass: __WEBPACK_IMPORTED_MODULE_13__dom_events_hammer_gestures__["c" /* HammerGestureConfig */] }, { provide: __WEBPACK_IMPORTED_MODULE_9__dom_dom_renderer__["DomRootRenderer"], useClass: __WEBPACK_IMPORTED_MODULE_9__dom_dom_renderer__["DomRootRenderer_"] }, { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* RootRenderer */], useExisting: __WEBPACK_IMPORTED_MODULE_9__dom_dom_renderer__["DomRootRenderer"] }, { provide: __WEBPACK_IMPORTED_MODULE_15__dom_shared_styles_host__["SharedStylesHost"], useExisting: __WEBPACK_IMPORTED_MODULE_15__dom_shared_styles_host__["DomSharedStylesHost"] }, { provide: __WEBPACK_IMPORTED_MODULE_2__core_private__["a" /* AnimationDriver */], useFactory: _resolveDefaultAnimationDriver }, __WEBPACK_IMPORTED_MODULE_15__dom_shared_styles_host__["DomSharedStylesHost"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* Testability */], __WEBPACK_IMPORTED_MODULE_12__dom_events_event_manager__["a" /* EventManager */], __WEBPACK_IMPORTED_MODULE_7__dom_debug_ng_probe__["a" /* ELEMENT_PROBE_PROVIDERS */]];
function browserPlatform() {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_16__facade_lang__["a" /* isBlank */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* getPlatform */])())) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* createPlatform */])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* ReflectiveInjector */].resolveAndCreate(BROWSER_PLATFORM_PROVIDERS));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* assertPlatform */])(BROWSER_PLATFORM_MARKER);
}
function initDomAdapter() {
    __WEBPACK_IMPORTED_MODULE_4__browser_browser_adapter__["a" /* BrowserDomAdapter */].makeCurrent();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_private__["e" /* wtfInit */])();
    __WEBPACK_IMPORTED_MODULE_6__browser_testability__["a" /* BrowserGetTestability */].init();
}
function _exceptionHandler() {
    return new __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* ExceptionHandler */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__dom_dom_adapter__["getDOM"])());
}
function _document() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__dom_dom_adapter__["getDOM"])().defaultDoc();
}
function _resolveDefaultAnimationDriver() {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__dom_dom_adapter__["getDOM"])().supportsWebAnimation()) {
        return new __WEBPACK_IMPORTED_MODULE_3__src_dom_web_animations_driver__["a" /* WebAnimationsDriver */]();
    }
    return new __WEBPACK_IMPORTED_MODULE_2__core_private__["f" /* NoOpAnimationDriver */]();
}
//# sourceMappingURL=browser.js.map

/***/ },

/***/ 104:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__history__ = __webpack_require__(320);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return BrowserPlatformLocation; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var BrowserPlatformLocation = function (_PlatformLocation) {
    _inherits(BrowserPlatformLocation, _PlatformLocation);

    function BrowserPlatformLocation() {
        _classCallCheck(this, BrowserPlatformLocation);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BrowserPlatformLocation).call(this));

        _this._init();
        return _this;
    }
    // This is moved to its own method so that `MockPlatformLocationStrategy` can overwrite it
    /** @internal */


    _createClass(BrowserPlatformLocation, [{
        key: '_init',
        value: function _init() {
            this._location = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_dom_adapter__["getDOM"])().getLocation();
            this._history = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_dom_adapter__["getDOM"])().getHistory();
        }
        /** @internal */

    }, {
        key: 'getBaseHrefFromDOM',
        value: function getBaseHrefFromDOM() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_dom_adapter__["getDOM"])().getBaseHref();
        }
    }, {
        key: 'onPopState',
        value: function onPopState(fn) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_dom_adapter__["getDOM"])().getGlobalEventTarget('window').addEventListener('popstate', fn, false);
        }
    }, {
        key: 'onHashChange',
        value: function onHashChange(fn) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_dom_adapter__["getDOM"])().getGlobalEventTarget('window').addEventListener('hashchange', fn, false);
        }
    }, {
        key: 'pushState',
        value: function pushState(state, title, url) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__history__["a" /* supportsState */])()) {
                this._history.pushState(state, title, url);
            } else {
                this._location.hash = url;
            }
        }
    }, {
        key: 'replaceState',
        value: function replaceState(state, title, url) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__history__["a" /* supportsState */])()) {
                this._history.replaceState(state, title, url);
            } else {
                this._location.hash = url;
            }
        }
    }, {
        key: 'forward',
        value: function forward() {
            this._history.forward();
        }
    }, {
        key: 'back',
        value: function back() {
            this._history.back();
        }
    }, {
        key: 'location',
        get: function get() {
            return this._location;
        }
    }, {
        key: 'pathname',
        get: function get() {
            return this._location.pathname;
        },
        set: function set(newPath) {
            this._location.pathname = newPath;
        }
    }, {
        key: 'search',
        get: function get() {
            return this._location.search;
        }
    }, {
        key: 'hash',
        get: function get() {
            return this._location.hash;
        }
    }]);

    return BrowserPlatformLocation;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* PlatformLocation */]);
/** @nocollapse */
BrowserPlatformLocation.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
BrowserPlatformLocation.ctorParameters = [];
//# sourceMappingURL=browser_platform_location.js.map

/***/ },

/***/ 105:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_exceptions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_styles_host__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_private__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__events_event_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_tokens__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__util__ = __webpack_require__(242);

/* harmony export */ __webpack_require__.d(exports, "DomRootRenderer", function() { return DomRootRenderer; });
/* harmony export */ __webpack_require__.d(exports, "DomRootRenderer_", function() { return DomRootRenderer_; });
/* harmony export */ __webpack_require__.d(exports, "DomRenderer", function() { return DomRenderer; });
/* harmony export */ __webpack_require__.d(exports, "COMPONENT_VARIABLE", function() { return COMPONENT_VARIABLE; });
/* harmony export */ __webpack_require__.d(exports, "HOST_ATTR", function() { return HOST_ATTR; });
/* harmony export */ __webpack_require__.d(exports, "CONTENT_ATTR", function() { return CONTENT_ATTR; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var NAMESPACE_URIS = {
    'xlink': 'http://www.w3.org/1999/xlink',
    'svg': 'http://www.w3.org/2000/svg'
};
var TEMPLATE_COMMENT_TEXT = 'template bindings={}';
var TEMPLATE_BINDINGS_EXP = /^template bindings=(.*)$/g;
var DomRootRenderer = function () {
    function DomRootRenderer(document, eventManager, sharedStylesHost, animationDriver) {
        _classCallCheck(this, DomRootRenderer);

        this.document = document;
        this.eventManager = eventManager;
        this.sharedStylesHost = sharedStylesHost;
        this.animationDriver = animationDriver;
        this.registeredComponents = new Map();
    }

    _createClass(DomRootRenderer, [{
        key: 'renderComponent',
        value: function renderComponent(componentProto) {
            var renderer = this.registeredComponents.get(componentProto.id);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(renderer)) {
                renderer = new DomRenderer(this, componentProto, this.animationDriver);
                this.registeredComponents.set(componentProto.id, renderer);
            }
            return renderer;
        }
    }]);

    return DomRootRenderer;
}();
var DomRootRenderer_ = function (_DomRootRenderer) {
    _inherits(DomRootRenderer_, _DomRootRenderer);

    function DomRootRenderer_(_document, _eventManager, sharedStylesHost, animationDriver) {
        _classCallCheck(this, DomRootRenderer_);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DomRootRenderer_).call(this, _document, _eventManager, sharedStylesHost, animationDriver));
    }

    return DomRootRenderer_;
}(DomRootRenderer);
/** @nocollapse */
DomRootRenderer_.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
DomRootRenderer_.ctorParameters = [{ type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_6__dom_tokens__["a" /* DOCUMENT */]] }] }, { type: __WEBPACK_IMPORTED_MODULE_5__events_event_manager__["a" /* EventManager */] }, { type: __WEBPACK_IMPORTED_MODULE_3__shared_styles_host__["DomSharedStylesHost"] }, { type: __WEBPACK_IMPORTED_MODULE_4__core_private__["a" /* AnimationDriver */] }];
var DomRenderer = function () {
    function DomRenderer(_rootRenderer, componentProto, _animationDriver) {
        _classCallCheck(this, DomRenderer);

        this._rootRenderer = _rootRenderer;
        this.componentProto = componentProto;
        this._animationDriver = _animationDriver;
        this._styles = _flattenStyles(componentProto.id, componentProto.styles, []);
        if (componentProto.encapsulation !== __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */].Native) {
            this._rootRenderer.sharedStylesHost.addStyles(this._styles);
        }
        if (this.componentProto.encapsulation === __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */].Emulated) {
            this._contentAttr = _shimContentAttribute(componentProto.id);
            this._hostAttr = _shimHostAttribute(componentProto.id);
        } else {
            this._contentAttr = null;
            this._hostAttr = null;
        }
    }

    _createClass(DomRenderer, [{
        key: 'selectRootElement',
        value: function selectRootElement(selectorOrNode, debugInfo) {
            var el;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["i" /* isString */])(selectorOrNode)) {
                el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().querySelector(this._rootRenderer.document, selectorOrNode);
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(el)) {
                    throw new __WEBPACK_IMPORTED_MODULE_1__facade_exceptions__["a" /* BaseException */]('The selector "' + selectorOrNode + '" did not match any elements');
                }
            } else {
                el = selectorOrNode;
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().clearNodes(el);
            return el;
        }
    }, {
        key: 'createElement',
        value: function createElement(parent, name, debugInfo) {
            var nsAndName = splitNamespace(name);
            var el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(nsAndName[0]) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().createElementNS(NAMESPACE_URIS[nsAndName[0]], nsAndName[1]) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().createElement(nsAndName[1]);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(this._contentAttr)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setAttribute(el, this._contentAttr, '');
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(parent)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().appendChild(parent, el);
            }
            return el;
        }
    }, {
        key: 'createViewRoot',
        value: function createViewRoot(hostElement) {
            var nodesParent;
            if (this.componentProto.encapsulation === __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */].Native) {
                nodesParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().createShadowRoot(hostElement);
                this._rootRenderer.sharedStylesHost.addHost(nodesParent);
                for (var i = 0; i < this._styles.length; i++) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().appendChild(nodesParent, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().createStyleElement(this._styles[i]));
                }
            } else {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(this._hostAttr)) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setAttribute(hostElement, this._hostAttr, '');
                }
                nodesParent = hostElement;
            }
            return nodesParent;
        }
    }, {
        key: 'createTemplateAnchor',
        value: function createTemplateAnchor(parentElement, debugInfo) {
            var comment = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().createComment(TEMPLATE_COMMENT_TEXT);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(parentElement)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().appendChild(parentElement, comment);
            }
            return comment;
        }
    }, {
        key: 'createText',
        value: function createText(parentElement, value, debugInfo) {
            var node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().createTextNode(value);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(parentElement)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().appendChild(parentElement, node);
            }
            return node;
        }
    }, {
        key: 'projectNodes',
        value: function projectNodes(parentElement, nodes) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(parentElement)) return;
            appendNodes(parentElement, nodes);
        }
    }, {
        key: 'attachViewAfter',
        value: function attachViewAfter(node, viewRootNodes) {
            moveNodesAfterSibling(node, viewRootNodes);
        }
    }, {
        key: 'detachView',
        value: function detachView(viewRootNodes) {
            for (var i = 0; i < viewRootNodes.length; i++) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().remove(viewRootNodes[i]);
            }
        }
    }, {
        key: 'destroyView',
        value: function destroyView(hostElement, viewAllNodes) {
            if (this.componentProto.encapsulation === __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */].Native && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(hostElement)) {
                this._rootRenderer.sharedStylesHost.removeHost(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().getShadowRoot(hostElement));
            }
        }
    }, {
        key: 'listen',
        value: function listen(renderElement, name, callback) {
            return this._rootRenderer.eventManager.addEventListener(renderElement, name, decoratePreventDefault(callback));
        }
    }, {
        key: 'listenGlobal',
        value: function listenGlobal(target, name, callback) {
            return this._rootRenderer.eventManager.addGlobalEventListener(target, name, decoratePreventDefault(callback));
        }
    }, {
        key: 'setElementProperty',
        value: function setElementProperty(renderElement, propertyName, propertyValue) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setProperty(renderElement, propertyName, propertyValue);
        }
    }, {
        key: 'setElementAttribute',
        value: function setElementAttribute(renderElement, attributeName, attributeValue) {
            var attrNs;
            var nsAndName = splitNamespace(attributeName);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(nsAndName[0])) {
                attributeName = nsAndName[0] + ':' + nsAndName[1];
                attrNs = NAMESPACE_URIS[nsAndName[0]];
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(attributeValue)) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(attrNs)) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setAttributeNS(renderElement, attrNs, attributeName, attributeValue);
                } else {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setAttribute(renderElement, attributeName, attributeValue);
                }
            } else {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(attrNs)) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().removeAttributeNS(renderElement, attrNs, nsAndName[1]);
                } else {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().removeAttribute(renderElement, attributeName);
                }
            }
        }
    }, {
        key: 'setBindingDebugInfo',
        value: function setBindingDebugInfo(renderElement, propertyName, propertyValue) {
            var dashCasedPropertyName = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__util__["a" /* camelCaseToDashCase */])(propertyName);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().isCommentNode(renderElement)) {
                var existingBindings = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["j" /* RegExpWrapper */].firstMatch(TEMPLATE_BINDINGS_EXP, __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* StringWrapper */].replaceAll(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().getText(renderElement), /\n/g, ''));
                var parsedBindings = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["k" /* Json */].parse(existingBindings[1]);
                parsedBindings[dashCasedPropertyName] = propertyValue;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setText(renderElement, __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* StringWrapper */].replace(TEMPLATE_COMMENT_TEXT, '{}', __WEBPACK_IMPORTED_MODULE_2__facade_lang__["k" /* Json */].stringify(parsedBindings)));
            } else {
                this.setElementAttribute(renderElement, propertyName, propertyValue);
            }
        }
    }, {
        key: 'setElementClass',
        value: function setElementClass(renderElement, className, isAdd) {
            if (isAdd) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().addClass(renderElement, className);
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().removeClass(renderElement, className);
            }
        }
    }, {
        key: 'setElementStyle',
        value: function setElementStyle(renderElement, styleName, styleValue) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(styleValue)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setStyle(renderElement, styleName, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["l" /* stringify */])(styleValue));
            } else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().removeStyle(renderElement, styleName);
            }
        }
    }, {
        key: 'invokeElementMethod',
        value: function invokeElementMethod(renderElement, methodName, args) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().invoke(renderElement, methodName, args);
        }
    }, {
        key: 'setText',
        value: function setText(renderNode, text) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().setText(renderNode, text);
        }
    }, {
        key: 'animate',
        value: function animate(element, startingStyles, keyframes, duration, delay, easing) {
            return this._animationDriver.animate(element, startingStyles, keyframes, duration, delay, easing);
        }
    }]);

    return DomRenderer;
}();
function moveNodesAfterSibling(sibling /** TODO #9100 */, nodes /** TODO #9100 */) {
    var parent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().parentElement(sibling);
    if (nodes.length > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(parent)) {
        var nextSibling = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().nextSibling(sibling);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(nextSibling)) {
            for (var i = 0; i < nodes.length; i++) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().insertBefore(nextSibling, nodes[i]);
            }
        } else {
            for (var i = 0; i < nodes.length; i++) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().appendChild(parent, nodes[i]);
            }
        }
    }
}
function appendNodes(parent /** TODO #9100 */, nodes /** TODO #9100 */) {
    for (var i = 0; i < nodes.length; i++) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().appendChild(parent, nodes[i]);
    }
}
function decoratePreventDefault(eventHandler) {
    return function (event /** TODO #9100 */) {
        var allowDefaultBehavior = eventHandler(event);
        if (allowDefaultBehavior === false) {
            // TODO(tbosch): move preventDefault into event plugins...
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__dom_adapter__["getDOM"])().preventDefault(event);
        }
    };
}
var COMPONENT_REGEX = /%COMP%/g;
var COMPONENT_VARIABLE = '%COMP%';
var HOST_ATTR = '_nghost-' + COMPONENT_VARIABLE;
var CONTENT_ATTR = '_ngcontent-' + COMPONENT_VARIABLE;
function _shimContentAttribute(componentShortId) {
    return __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* StringWrapper */].replaceAll(CONTENT_ATTR, COMPONENT_REGEX, componentShortId);
}
function _shimHostAttribute(componentShortId) {
    return __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* StringWrapper */].replaceAll(HOST_ATTR, COMPONENT_REGEX, componentShortId);
}
function _flattenStyles(compId, styles, target) {
    for (var i = 0; i < styles.length; i++) {
        var style = styles[i];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["e" /* isArray */])(style)) {
            _flattenStyles(compId, style, target);
        } else {
            style = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* StringWrapper */].replaceAll(style, COMPONENT_REGEX, compId);
            target.push(style);
        }
    }
    return target;
}
var NS_PREFIX_RE = /^:([^:]+):(.+)/g;
function splitNamespace(name) {
    if (name[0] != ':') {
        return [null, name];
    }
    var match = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["j" /* RegExpWrapper */].firstMatch(NS_PREFIX_RE, name);
    return [match[1], match[2]];
}
//# sourceMappingURL=dom_renderer.js.map

/***/ },

/***/ 106:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_tokens__ = __webpack_require__(79);

/* harmony export */ __webpack_require__.d(exports, "SharedStylesHost", function() { return SharedStylesHost; });
/* harmony export */ __webpack_require__.d(exports, "DomSharedStylesHost", function() { return DomSharedStylesHost; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var SharedStylesHost = function () {
    function SharedStylesHost() {
        _classCallCheck(this, SharedStylesHost);

        /** @internal */
        this._styles = [];
        /** @internal */
        this._stylesSet = new Set();
    }

    _createClass(SharedStylesHost, [{
        key: 'addStyles',
        value: function addStyles(styles) {
            var _this = this;

            var additions = [];
            styles.forEach(function (style) {
                if (!__WEBPACK_IMPORTED_MODULE_1__facade_collection__["b" /* SetWrapper */].has(_this._stylesSet, style)) {
                    _this._stylesSet.add(style);
                    _this._styles.push(style);
                    additions.push(style);
                }
            });
            this.onStylesAdded(additions);
        }
    }, {
        key: 'onStylesAdded',
        value: function onStylesAdded(additions) {}
    }, {
        key: 'getAllStyles',
        value: function getAllStyles() {
            return this._styles;
        }
    }]);

    return SharedStylesHost;
}();
/** @nocollapse */
SharedStylesHost.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
SharedStylesHost.ctorParameters = [];
var DomSharedStylesHost = function (_SharedStylesHost) {
    _inherits(DomSharedStylesHost, _SharedStylesHost);

    function DomSharedStylesHost(doc) {
        _classCallCheck(this, DomSharedStylesHost);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DomSharedStylesHost).call(this));

        _this2._hostNodes = new Set();
        _this2._hostNodes.add(doc.head);
        return _this2;
    }
    /** @internal */


    _createClass(DomSharedStylesHost, [{
        key: '_addStylesToHost',
        value: function _addStylesToHost(styles, host) {
            for (var i = 0; i < styles.length; i++) {
                var style = styles[i];
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_adapter__["getDOM"])().appendChild(host, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_adapter__["getDOM"])().createStyleElement(style));
            }
        }
    }, {
        key: 'addHost',
        value: function addHost(hostNode) {
            this._addStylesToHost(this._styles, hostNode);
            this._hostNodes.add(hostNode);
        }
    }, {
        key: 'removeHost',
        value: function removeHost(hostNode) {
            __WEBPACK_IMPORTED_MODULE_1__facade_collection__["b" /* SetWrapper */].delete(this._hostNodes, hostNode);
        }
    }, {
        key: 'onStylesAdded',
        value: function onStylesAdded(additions) {
            var _this3 = this;

            this._hostNodes.forEach(function (hostNode) {
                _this3._addStylesToHost(additions, hostNode);
            });
        }
    }]);

    return DomSharedStylesHost;
}(SharedStylesHost);
/** @nocollapse */
DomSharedStylesHost.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
DomSharedStylesHost.ctorParameters = [{ type: undefined, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */], args: [__WEBPACK_IMPORTED_MODULE_3__dom_tokens__["a" /* DOCUMENT */]] }] }];
//# sourceMappingURL=shared_styles_host.js.map

/***/ },

/***/ 107:
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony export */ __webpack_require__.d(exports, "b", function() { return RENDERER_CHANNEL; });
/* harmony export */ __webpack_require__.d(exports, "c", function() { return EVENT_CHANNEL; });
/* harmony export */ __webpack_require__.d(exports, "a", function() { return ROUTER_CHANNEL; });/**
 * All channels used by angular's WebWorker components are listed here.
 * You should not use these channels in your application code.
 */
var RENDERER_CHANNEL = 'ng-Renderer';
var EVENT_CHANNEL = 'ng-Events';
var ROUTER_CHANNEL = 'ng-Router';
//# sourceMappingURL=messaging_api.js.map

/***/ },

/***/ 14:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(8);
/* harmony export */ exports["getDOM"] = getDOM;/* harmony export */ exports["setDOM"] = setDOM;/* harmony export */ exports["setRootDomAdapter"] = setRootDomAdapter;
/* harmony export */ __webpack_require__.d(exports, "DomAdapter", function() { return DomAdapter; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var _DOM = null;
function getDOM() {
    return _DOM;
}
function setDOM(adapter) {
    _DOM = adapter;
}
function setRootDomAdapter(adapter) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["a" /* isBlank */])(_DOM)) {
        _DOM = adapter;
    }
}
/* tslint:disable:requireParameterType */
/**
 * Provides DOM operations in an environment-agnostic way.
 */
var DomAdapter = function () {
    function DomAdapter() {
        _classCallCheck(this, DomAdapter);

        this.xhrType = null;
    }
    /** @deprecated */


    _createClass(DomAdapter, [{
        key: 'getXHR',
        value: function getXHR() {
            return this.xhrType;
        }
        /**
         * Maps attribute names to their corresponding property names for cases
         * where attribute name doesn't match property name.
         */

    }, {
        key: 'attrToPropMap',
        get: function get() {
            return this._attrToPropMap;
        },
        set: function set(value) {
            this._attrToPropMap = value;
        }
    }]);

    return DomAdapter;
}();
//# sourceMappingURL=dom_adapter.js.map

/***/ },

/***/ 151:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_manager__ = __webpack_require__(53);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return DomEventsPlugin; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var DomEventsPlugin = function (_EventManagerPlugin) {
    _inherits(DomEventsPlugin, _EventManagerPlugin);

    function DomEventsPlugin() {
        _classCallCheck(this, DomEventsPlugin);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DomEventsPlugin).apply(this, arguments));
    }

    _createClass(DomEventsPlugin, [{
        key: 'supports',

        // This plugin should come last in the list of plugins, because it accepts all
        // events.
        value: function supports(eventName) {
            return true;
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(element, eventName, handler) {
            var zone = this.manager.getZone();
            var outsideHandler = function outsideHandler(event /** TODO #9100 */) {
                return zone.runGuarded(function () {
                    return handler(event);
                });
            };
            return this.manager.getZone().runOutsideAngular(function () {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_adapter__["getDOM"])().onAndCancel(element, eventName, outsideHandler);
            });
        }
    }, {
        key: 'addGlobalEventListener',
        value: function addGlobalEventListener(target, eventName, handler) {
            var element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_adapter__["getDOM"])().getGlobalEventTarget(target);
            var zone = this.manager.getZone();
            var outsideHandler = function outsideHandler(event /** TODO #9100 */) {
                return zone.runGuarded(function () {
                    return handler(event);
                });
            };
            return this.manager.getZone().runOutsideAngular(function () {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_adapter__["getDOM"])().onAndCancel(element, eventName, outsideHandler);
            });
        }
    }]);

    return DomEventsPlugin;
}(__WEBPACK_IMPORTED_MODULE_2__event_manager__["b" /* EventManagerPlugin */]);
/** @nocollapse */
DomEventsPlugin.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
//# sourceMappingURL=dom_events.js.map

/***/ },

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_exceptions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hammer_common__ = __webpack_require__(325);

/* harmony export */ __webpack_require__.d(exports, "b", function() { return HAMMER_GESTURE_CONFIG; });
/* harmony export */ __webpack_require__.d(exports, "c", function() { return HammerGestureConfig; });
/* harmony export */ __webpack_require__.d(exports, "a", function() { return HammerGesturesPlugin; });var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var HAMMER_GESTURE_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* OpaqueToken */]('HammerGestureConfig');
var HammerGestureConfig = function () {
    function HammerGestureConfig() {
        _classCallCheck(this, HammerGestureConfig);

        this.events = [];
        this.overrides = {};
    }

    _createClass(HammerGestureConfig, [{
        key: 'buildHammer',
        value: function buildHammer(element) {
            var mc = new Hammer(element);
            mc.get('pinch').set({ enable: true });
            mc.get('rotate').set({ enable: true });
            for (var eventName in this.overrides) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
            return mc;
        }
    }]);

    return HammerGestureConfig;
}();
/** @nocollapse */
HammerGestureConfig.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
var HammerGesturesPlugin = function (_HammerGesturesPlugin) {
    _inherits(HammerGesturesPlugin, _HammerGesturesPlugin);

    function HammerGesturesPlugin(_config) {
        _classCallCheck(this, HammerGesturesPlugin);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(HammerGesturesPlugin).call(this));

        _this._config = _config;
        return _this;
    }

    _createClass(HammerGesturesPlugin, [{
        key: 'supports',
        value: function supports(eventName) {
            if (!_get(Object.getPrototypeOf(HammerGesturesPlugin.prototype), 'supports', this).call(this, eventName) && !this.isCustomEvent(eventName)) return false;
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(window['Hammer'])) {
                throw new __WEBPACK_IMPORTED_MODULE_1__facade_exceptions__["a" /* BaseException */]('Hammer.js is not loaded, can not bind ' + eventName + ' event');
            }
            return true;
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(element, eventName, handler) {
            var _this2 = this;

            var zone = this.manager.getZone();
            eventName = eventName.toLowerCase();
            return zone.runOutsideAngular(function () {
                // Creating the manager bind events, must be done outside of angular
                var mc = _this2._config.buildHammer(element);
                var callback = function callback(eventObj /** TODO #???? */) {
                    zone.runGuarded(function () {
                        handler(eventObj);
                    });
                };
                mc.on(eventName, callback);
                return function () {
                    mc.off(eventName, callback);
                };
            });
        }
    }, {
        key: 'isCustomEvent',
        value: function isCustomEvent(eventName) {
            return this._config.events.indexOf(eventName) > -1;
        }
    }]);

    return HammerGesturesPlugin;
}(__WEBPACK_IMPORTED_MODULE_3__hammer_common__["a" /* HammerGesturesPluginCommon */]);
/** @nocollapse */
HammerGesturesPlugin.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
HammerGesturesPlugin.ctorParameters = [{ type: HammerGestureConfig, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */], args: [HAMMER_GESTURE_CONFIG] }] }];
//# sourceMappingURL=hammer_gestures.js.map

/***/ },

/***/ 153:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__event_manager__ = __webpack_require__(53);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return KeyEventsPlugin; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var modifierKeys = ['alt', 'control', 'meta', 'shift'];
var modifierKeyGetters = {
    'alt': function alt(event) {
        return event.altKey;
    },
    'control': function control(event) {
        return event.ctrlKey;
    },
    'meta': function meta(event) {
        return event.metaKey;
    },
    'shift': function shift(event) {
        return event.shiftKey;
    }
};
var KeyEventsPlugin = function (_EventManagerPlugin) {
    _inherits(KeyEventsPlugin, _EventManagerPlugin);

    function KeyEventsPlugin() {
        _classCallCheck(this, KeyEventsPlugin);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(KeyEventsPlugin).call(this));
    }

    _createClass(KeyEventsPlugin, [{
        key: 'supports',
        value: function supports(eventName) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isPresent */])(KeyEventsPlugin.parseEventName(eventName));
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(element, eventName, handler) {
            var parsedEvent = KeyEventsPlugin.parseEventName(eventName);
            var outsideHandler = KeyEventsPlugin.eventCallback(element, __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].get(parsedEvent, 'fullKey'), handler, this.manager.getZone());
            return this.manager.getZone().runOutsideAngular(function () {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom_adapter__["getDOM"])().onAndCancel(element, __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].get(parsedEvent, 'domEventName'), outsideHandler);
            });
        }
    }], [{
        key: 'parseEventName',
        value: function parseEventName(eventName) {
            var parts = eventName.toLowerCase().split('.');
            var domEventName = parts.shift();
            if (parts.length === 0 || !(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["h" /* StringWrapper */].equals(domEventName, 'keydown') || __WEBPACK_IMPORTED_MODULE_1__facade_lang__["h" /* StringWrapper */].equals(domEventName, 'keyup'))) {
                return null;
            }
            var key = KeyEventsPlugin._normalizeKey(parts.pop());
            var fullKey = '';
            modifierKeys.forEach(function (modifierName) {
                if (__WEBPACK_IMPORTED_MODULE_2__facade_collection__["c" /* ListWrapper */].contains(parts, modifierName)) {
                    __WEBPACK_IMPORTED_MODULE_2__facade_collection__["c" /* ListWrapper */].remove(parts, modifierName);
                    fullKey += modifierName + '.';
                }
            });
            fullKey += key;
            if (parts.length != 0 || key.length === 0) {
                // returning null instead of throwing to let another plugin process the event
                return null;
            }
            var result = __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].create();
            __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].set(result, 'domEventName', domEventName);
            __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].set(result, 'fullKey', fullKey);
            return result;
        }
    }, {
        key: 'getEventFullKey',
        value: function getEventFullKey(event) {
            var fullKey = '';
            var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom_adapter__["getDOM"])().getEventKey(event);
            key = key.toLowerCase();
            if (__WEBPACK_IMPORTED_MODULE_1__facade_lang__["h" /* StringWrapper */].equals(key, ' ')) {
                key = 'space'; // for readability
            } else if (__WEBPACK_IMPORTED_MODULE_1__facade_lang__["h" /* StringWrapper */].equals(key, '.')) {
                    key = 'dot'; // because '.' is used as a separator in event names
                }
            modifierKeys.forEach(function (modifierName) {
                if (modifierName != key) {
                    var modifierGetter = __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].get(modifierKeyGetters, modifierName);
                    if (modifierGetter(event)) {
                        fullKey += modifierName + '.';
                    }
                }
            });
            fullKey += key;
            return fullKey;
        }
    }, {
        key: 'eventCallback',
        value: function eventCallback(element, fullKey, handler, zone) {
            return function (event /** TODO #9100 */) {
                if (__WEBPACK_IMPORTED_MODULE_1__facade_lang__["h" /* StringWrapper */].equals(KeyEventsPlugin.getEventFullKey(event), fullKey)) {
                    zone.runGuarded(function () {
                        return handler(event);
                    });
                }
            };
        }
        /** @internal */

    }, {
        key: '_normalizeKey',
        value: function _normalizeKey(keyName) {
            // TODO: switch to a StringMap if the mapping grows too much
            switch (keyName) {
                case 'esc':
                    return 'escape';
                default:
                    return keyName;
            }
        }
    }]);

    return KeyEventsPlugin;
}(__WEBPACK_IMPORTED_MODULE_4__event_manager__["b" /* EventManagerPlugin */]);
/** @nocollapse */
KeyEventsPlugin.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
KeyEventsPlugin.ctorParameters = [];
//# sourceMappingURL=key_events.js.map

/***/ },

/***/ 154:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__ = __webpack_require__(14);
/* harmony export */ exports["a"] = sanitizeUrl;

/**
 * A pattern that recognizes a commonly useful subset of URLs that are safe.
 *
 * This regular expression matches a subset of URLs that will not cause script
 * execution if used in URL context within a HTML document. Specifically, this
 * regular expression matches if (comment from here on and regex copied from
 * Soy's EscapingConventions):
 * (1) Either a protocol in a whitelist (http, https, mailto or ftp).
 * (2) or no protocol.  A protocol must be followed by a colon. The below
 *     allows that by allowing colons only after one of the characters [/?#].
 *     A colon after a hash (#) must be in the fragment.
 *     Otherwise, a colon after a (?) must be in a query.
 *     Otherwise, a colon after a single solidus (/) must be in a path.
 *     Otherwise, a colon after a double solidus (//) must be in the authority
 *     (before port).
 *
 * The pattern disallows &, used in HTML entity declarations before
 * one of the characters in [/?#]. This disallows HTML entities used in the
 * protocol name, which should never happen, e.g. "h&#116;tp" for "http".
 * It also disallows HTML entities in the first path part of a relative path,
 * e.g. "foo&lt;bar/baz".  Our existing escaping functions should not produce
 * that. More importantly, it disallows masking of a colon,
 * e.g. "javascript&#58;...".
 *
 * This regular expression was taken from the Closure sanitization library.
 */
var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
/** A pattern that matches safe data URLs. Only matches image and video types. */
var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm));base64,[a-z0-9+\/]+=*$/i;
function sanitizeUrl(url) {
    url = String(url);
    if (url.match(SAFE_URL_PATTERN) || url.match(DATA_URL_PATTERN)) return url;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* isDevMode */])()) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().log('WARNING: sanitizing unsafe URL value ' + url);
    return 'unsafe:' + url;
}
//# sourceMappingURL=url_sanitizer.js.map

/***/ },

/***/ 155:
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony export */ __webpack_require__.d(exports, "a", function() { return LocationType; });function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// This file contains interface versions of browser types that can be serialized to Plain Old
// JavaScript Objects
var LocationType = function LocationType(href, protocol, host, hostname, port, pathname, search, hash, origin) {
    _classCallCheck(this, LocationType);

    this.href = href;
    this.protocol = protocol;
    this.host = host;
    this.hostname = hostname;
    this.port = port;
    this.pathname = pathname;
    this.search = search;
    this.hash = hash;
    this.origin = origin;
};
//# sourceMappingURL=serialized_types.js.map

/***/ },

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(8);

/* harmony export */ __webpack_require__.d(exports, "e", function() { return Map; });
/* harmony export */ __webpack_require__.d(exports, "f", function() { return Set; });/* unused harmony export MapWrapper */
/* harmony export */ __webpack_require__.d(exports, "d", function() { return StringMapWrapper; });
/* harmony export */ __webpack_require__.d(exports, "c", function() { return ListWrapper; });/* harmony export */ exports["a"] = isListLikeIterable;/* unused harmony export areIterablesEqual *//* unused harmony export iterateListLike */
/* harmony export */ __webpack_require__.d(exports, "b", function() { return SetWrapper; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var Map = __WEBPACK_IMPORTED_MODULE_0__lang__["d" /* global */].Map;
var Set = __WEBPACK_IMPORTED_MODULE_0__lang__["d" /* global */].Set;
// Safari and Internet Explorer do not support the iterable parameter to the
// Map constructor.  We work around that by manually adding the items.
var createMapFromPairs = function () {
    try {
        if (new Map([[1, 2]]).size === 1) {
            return function createMapFromPairs(pairs) {
                return new Map(pairs);
            };
        }
    } catch (e) {}
    return function createMapAndPopulateFromPairs(pairs) {
        var map = new Map();
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            map.set(pair[0], pair[1]);
        }
        return map;
    };
}();
var createMapFromMap = function () {
    try {
        if (new Map(new Map())) {
            return function createMapFromMap(m) {
                return new Map(m);
            };
        }
    } catch (e) {}
    return function createMapAndPopulateFromMap(m) {
        var map = new Map();
        m.forEach(function (v, k) {
            map.set(k, v);
        });
        return map;
    };
}();
var _clearValues = function () {
    if (new Map().keys().next) {
        return function _clearValues(m) {
            var keyIterator = m.keys();
            var k;
            while (!(k = keyIterator.next()).done) {
                m.set(k.value, null);
            }
        };
    } else {
        return function _clearValuesWithForeEach(m) {
            m.forEach(function (v, k) {
                m.set(k, null);
            });
        };
    }
}();
// Safari doesn't implement MapIterator.next(), which is used is Traceur's polyfill of Array.from
// TODO(mlaval): remove the work around once we have a working polyfill of Array.from
var _arrayFromMap = function () {
    try {
        if (new Map().values().next) {
            return function createArrayFromMap(m, getValues) {
                return getValues ? Array.from(m.values()) : Array.from(m.keys());
            };
        }
    } catch (e) {}
    return function createArrayFromMapWithForeach(m, getValues) {
        var res = ListWrapper.createFixedSize(m.size),
            i = 0;
        m.forEach(function (v, k) {
            res[i] = getValues ? v : k;
            i++;
        });
        return res;
    };
}();
var MapWrapper = function () {
    function MapWrapper() {
        _classCallCheck(this, MapWrapper);
    }

    _createClass(MapWrapper, null, [{
        key: 'clone',
        value: function clone(m) {
            return createMapFromMap(m);
        }
    }, {
        key: 'createFromStringMap',
        value: function createFromStringMap(stringMap) {
            var result = new Map();
            for (var prop in stringMap) {
                result.set(prop, stringMap[prop]);
            }
            return result;
        }
    }, {
        key: 'toStringMap',
        value: function toStringMap(m) {
            var r = {};
            m.forEach(function (v, k) {
                return r[k] = v;
            });
            return r;
        }
    }, {
        key: 'createFromPairs',
        value: function createFromPairs(pairs) {
            return createMapFromPairs(pairs);
        }
    }, {
        key: 'clearValues',
        value: function clearValues(m) {
            _clearValues(m);
        }
    }, {
        key: 'iterable',
        value: function iterable(m) {
            return m;
        }
    }, {
        key: 'keys',
        value: function keys(m) {
            return _arrayFromMap(m, false);
        }
    }, {
        key: 'values',
        value: function values(m) {
            return _arrayFromMap(m, true);
        }
    }]);

    return MapWrapper;
}();
/**
 * Wraps Javascript Objects
 */
var StringMapWrapper = function () {
    function StringMapWrapper() {
        _classCallCheck(this, StringMapWrapper);
    }

    _createClass(StringMapWrapper, null, [{
        key: 'create',
        value: function create() {
            // Note: We are not using Object.create(null) here due to
            // performance!
            // http://jsperf.com/ng2-object-create-null
            return {};
        }
    }, {
        key: 'contains',
        value: function contains(map, key) {
            return map.hasOwnProperty(key);
        }
    }, {
        key: 'get',
        value: function get(map, key) {
            return map.hasOwnProperty(key) ? map[key] : undefined;
        }
    }, {
        key: 'set',
        value: function set(map, key, value) {
            map[key] = value;
        }
    }, {
        key: 'keys',
        value: function keys(map) {
            return Object.keys(map);
        }
    }, {
        key: 'values',
        value: function values(map) {
            return Object.keys(map).reduce(function (r, a) {
                r.push(map[a]);
                return r;
            }, []);
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(map) {
            for (var prop in map) {
                return false;
            }
            return true;
        }
    }, {
        key: 'delete',
        value: function _delete(map, key) {
            delete map[key];
        }
    }, {
        key: 'forEach',
        value: function forEach(map, callback) {
            for (var prop in map) {
                if (map.hasOwnProperty(prop)) {
                    callback(map[prop], prop);
                }
            }
        }
    }, {
        key: 'merge',
        value: function merge(m1, m2) {
            var m = {};
            for (var attr in m1) {
                if (m1.hasOwnProperty(attr)) {
                    m[attr] = m1[attr];
                }
            }
            for (var attr in m2) {
                if (m2.hasOwnProperty(attr)) {
                    m[attr] = m2[attr];
                }
            }
            return m;
        }
    }, {
        key: 'equals',
        value: function equals(m1, m2) {
            var k1 = Object.keys(m1);
            var k2 = Object.keys(m2);
            if (k1.length != k2.length) {
                return false;
            }
            var key;
            for (var i = 0; i < k1.length; i++) {
                key = k1[i];
                if (m1[key] !== m2[key]) {
                    return false;
                }
            }
            return true;
        }
    }]);

    return StringMapWrapper;
}();
var ListWrapper = function () {
    function ListWrapper() {
        _classCallCheck(this, ListWrapper);
    }

    _createClass(ListWrapper, null, [{
        key: 'createFixedSize',

        // JS has no way to express a statically fixed size list, but dart does so we
        // keep both methods.
        value: function createFixedSize(size) {
            return new Array(size);
        }
    }, {
        key: 'createGrowableSize',
        value: function createGrowableSize(size) {
            return new Array(size);
        }
    }, {
        key: 'clone',
        value: function clone(array) {
            return array.slice(0);
        }
    }, {
        key: 'forEachWithIndex',
        value: function forEachWithIndex(array, fn) {
            for (var i = 0; i < array.length; i++) {
                fn(array[i], i);
            }
        }
    }, {
        key: 'first',
        value: function first(array) {
            if (!array) return null;
            return array[0];
        }
    }, {
        key: 'last',
        value: function last(array) {
            if (!array || array.length == 0) return null;
            return array[array.length - 1];
        }
    }, {
        key: 'indexOf',
        value: function indexOf(array, value) {
            var startIndex = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

            return array.indexOf(value, startIndex);
        }
    }, {
        key: 'contains',
        value: function contains(list, el) {
            return list.indexOf(el) !== -1;
        }
    }, {
        key: 'reversed',
        value: function reversed(array) {
            var a = ListWrapper.clone(array);
            return a.reverse();
        }
    }, {
        key: 'concat',
        value: function concat(a, b) {
            return a.concat(b);
        }
    }, {
        key: 'insert',
        value: function insert(list, index, value) {
            list.splice(index, 0, value);
        }
    }, {
        key: 'removeAt',
        value: function removeAt(list, index) {
            var res = list[index];
            list.splice(index, 1);
            return res;
        }
    }, {
        key: 'removeAll',
        value: function removeAll(list, items) {
            for (var i = 0; i < items.length; ++i) {
                var index = list.indexOf(items[i]);
                list.splice(index, 1);
            }
        }
    }, {
        key: 'remove',
        value: function remove(list, el) {
            var index = list.indexOf(el);
            if (index > -1) {
                list.splice(index, 1);
                return true;
            }
            return false;
        }
    }, {
        key: 'clear',
        value: function clear(list) {
            list.length = 0;
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(list) {
            return list.length == 0;
        }
    }, {
        key: 'fill',
        value: function fill(list, value) {
            var start = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
            var end = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

            list.fill(value, start, end === null ? list.length : end);
        }
    }, {
        key: 'equals',
        value: function equals(a, b) {
            if (a.length != b.length) return false;
            for (var i = 0; i < a.length; ++i) {
                if (a[i] !== b[i]) return false;
            }
            return true;
        }
    }, {
        key: 'slice',
        value: function slice(l) {
            var from = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
            var to = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            return l.slice(from, to === null ? undefined : to);
        }
    }, {
        key: 'splice',
        value: function splice(l, from, length) {
            return l.splice(from, length);
        }
    }, {
        key: 'sort',
        value: function sort(l, compareFn) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["b" /* isPresent */])(compareFn)) {
                l.sort(compareFn);
            } else {
                l.sort();
            }
        }
    }, {
        key: 'toString',
        value: function toString(l) {
            return l.toString();
        }
    }, {
        key: 'toJSON',
        value: function toJSON(l) {
            return JSON.stringify(l);
        }
    }, {
        key: 'maximum',
        value: function maximum(list, predicate) {
            if (list.length == 0) {
                return null;
            }
            var solution = null;
            var maxValue = -Infinity;
            for (var index = 0; index < list.length; index++) {
                var candidate = list[index];
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["a" /* isBlank */])(candidate)) {
                    continue;
                }
                var candidateValue = predicate(candidate);
                if (candidateValue > maxValue) {
                    solution = candidate;
                    maxValue = candidateValue;
                }
            }
            return solution;
        }
    }, {
        key: 'flatten',
        value: function flatten(list) {
            var target = [];
            _flattenArray(list, target);
            return target;
        }
    }, {
        key: 'addAll',
        value: function addAll(list, source) {
            for (var i = 0; i < source.length; i++) {
                list.push(source[i]);
            }
        }
    }]);

    return ListWrapper;
}();
function _flattenArray(source, target) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["b" /* isPresent */])(source)) {
        for (var i = 0; i < source.length; i++) {
            var item = source[i];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["e" /* isArray */])(item)) {
                _flattenArray(item, target);
            } else {
                target.push(item);
            }
        }
    }
    return target;
}
function isListLikeIterable(obj) {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["f" /* isJsObject */])(obj)) return false;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["e" /* isArray */])(obj) || !(obj instanceof Map) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["g" /* getSymbolIterator */])() in obj; // JS Iterable have a Symbol.iterator prop
}
function areIterablesEqual(a, b, comparator) {
    var iterator1 = a[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["g" /* getSymbolIterator */])()]();
    var iterator2 = b[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["g" /* getSymbolIterator */])()]();
    while (true) {
        var item1 = iterator1.next();
        var item2 = iterator2.next();
        if (item1.done && item2.done) return true;
        if (item1.done || item2.done) return false;
        if (!comparator(item1.value, item2.value)) return false;
    }
}
function iterateListLike(obj, fn) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["e" /* isArray */])(obj)) {
        for (var i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    } else {
        var iterator = obj[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["g" /* getSymbolIterator */])()]();
        var item;
        while (!(item = iterator.next()).done) {
            fn(item.value);
        }
    }
}
// Safari and Internet Explorer do not support the iterable parameter to the
// Set constructor.  We work around that by manually adding the items.
var createSetFromList = function () {
    var test = new Set([1, 2, 3]);
    if (test.size === 3) {
        return function createSetFromList(lst) {
            return new Set(lst);
        };
    } else {
        return function createSetAndPopulateFromList(lst) {
            var res = new Set(lst);
            if (res.size !== lst.length) {
                for (var i = 0; i < lst.length; i++) {
                    res.add(lst[i]);
                }
            }
            return res;
        };
    }
}();
var SetWrapper = function () {
    function SetWrapper() {
        _classCallCheck(this, SetWrapper);
    }

    _createClass(SetWrapper, null, [{
        key: 'createFromList',
        value: function createFromList(lst) {
            return createSetFromList(lst);
        }
    }, {
        key: 'has',
        value: function has(s, key) {
            return s.has(key);
        }
    }, {
        key: 'delete',
        value: function _delete(m, k) {
            m.delete(k);
        }
    }]);

    return SetWrapper;
}();
//# sourceMappingURL=collection.js.map

/***/ },

/***/ 239:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__generic_browser_adapter__ = __webpack_require__(319);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return BrowserDomAdapter; });/* unused harmony export parseCookieValue */var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var _attrToPropMap = {
    'class': 'className',
    'innerHtml': 'innerHTML',
    'readonly': 'readOnly',
    'tabindex': 'tabIndex'
};
var DOM_KEY_LOCATION_NUMPAD = 3;
// Map to convert some key or keyIdentifier values to what will be returned by getEventKey
var _keyMap = {
    // The following values are here for cross-browser compatibility and to match the W3C standard
    // cf http://www.w3.org/TR/DOM-Level-3-Events-key/
    '\b': 'Backspace',
    '\t': 'Tab',
    '\x7F': 'Delete',
    '\x1B': 'Escape',
    'Del': 'Delete',
    'Esc': 'Escape',
    'Left': 'ArrowLeft',
    'Right': 'ArrowRight',
    'Up': 'ArrowUp',
    'Down': 'ArrowDown',
    'Menu': 'ContextMenu',
    'Scroll': 'ScrollLock',
    'Win': 'OS'
};
// There is a bug in Chrome for numeric keypad keys:
// https://code.google.com/p/chromium/issues/detail?id=155654
// 1, 2, 3 ... are reported as A, B, C ...
var _chromeNumKeyPadMap = {
    'A': '1',
    'B': '2',
    'C': '3',
    'D': '4',
    'E': '5',
    'F': '6',
    'G': '7',
    'H': '8',
    'I': '9',
    'J': '*',
    'K': '+',
    'M': '-',
    'N': '.',
    'O': '/',
    '\x60': '0',
    '\x90': 'NumLock'
};
/**
 * A `DomAdapter` powered by full browser DOM APIs.
 */
/* tslint:disable:requireParameterType */
var BrowserDomAdapter = function (_GenericBrowserDomAda) {
    _inherits(BrowserDomAdapter, _GenericBrowserDomAda);

    function BrowserDomAdapter() {
        _classCallCheck(this, BrowserDomAdapter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BrowserDomAdapter).apply(this, arguments));
    }

    _createClass(BrowserDomAdapter, [{
        key: 'parse',
        value: function parse(templateHtml) {
            throw new Error('parse not implemented');
        }
    }, {
        key: 'hasProperty',
        value: function hasProperty(element /** TODO #9100 */, name) {
            return name in element;
        }
    }, {
        key: 'setProperty',
        value: function setProperty(el, name, value) {
            el[name] = value;
        }
    }, {
        key: 'getProperty',
        value: function getProperty(el, name) {
            return el[name];
        }
    }, {
        key: 'invoke',
        value: function invoke(el, methodName, args) {
            el[methodName].apply(el, args);
        }
        // TODO(tbosch): move this into a separate environment class once we have it

    }, {
        key: 'logError',
        value: function logError(error /** TODO #9100 */) {
            if (window.console.error) {
                window.console.error(error);
            } else {
                window.console.log(error);
            }
        }
    }, {
        key: 'log',
        value: function log(error /** TODO #9100 */) {
            window.console.log(error);
        }
    }, {
        key: 'logGroup',
        value: function logGroup(error /** TODO #9100 */) {
            if (window.console.group) {
                window.console.group(error);
                this.logError(error);
            } else {
                window.console.log(error);
            }
        }
    }, {
        key: 'logGroupEnd',
        value: function logGroupEnd() {
            if (window.console.groupEnd) {
                window.console.groupEnd();
            }
        }
    }, {
        key: 'query',
        value: function query(selector) {
            return document.querySelector(selector);
        }
    }, {
        key: 'querySelector',
        value: function querySelector(el /** TODO #9100 */, selector) {
            return el.querySelector(selector);
        }
    }, {
        key: 'querySelectorAll',
        value: function querySelectorAll(el /** TODO #9100 */, selector) {
            return el.querySelectorAll(selector);
        }
    }, {
        key: 'on',
        value: function on(el /** TODO #9100 */, evt /** TODO #9100 */, listener /** TODO #9100 */) {
            el.addEventListener(evt, listener, false);
        }
    }, {
        key: 'onAndCancel',
        value: function onAndCancel(el /** TODO #9100 */, evt /** TODO #9100 */, listener /** TODO #9100 */) {
            el.addEventListener(evt, listener, false);
            // Needed to follow Dart's subscription semantic, until fix of
            // https://code.google.com/p/dart/issues/detail?id=17406
            return function () {
                el.removeEventListener(evt, listener, false);
            };
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(el /** TODO #9100 */, evt /** TODO #9100 */) {
            el.dispatchEvent(evt);
        }
    }, {
        key: 'createMouseEvent',
        value: function createMouseEvent(eventType) {
            var evt = document.createEvent('MouseEvent');
            evt.initEvent(eventType, true, true);
            return evt;
        }
    }, {
        key: 'createEvent',
        value: function createEvent(eventType /** TODO #9100 */) {
            var evt = document.createEvent('Event');
            evt.initEvent(eventType, true, true);
            return evt;
        }
    }, {
        key: 'preventDefault',
        value: function preventDefault(evt) {
            evt.preventDefault();
            evt.returnValue = false;
        }
    }, {
        key: 'isPrevented',
        value: function isPrevented(evt) {
            return evt.defaultPrevented || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(evt.returnValue) && !evt.returnValue;
        }
    }, {
        key: 'getInnerHTML',
        value: function getInnerHTML(el /** TODO #9100 */) {
            return el.innerHTML;
        }
    }, {
        key: 'getTemplateContent',
        value: function getTemplateContent(el /** TODO #9100 */) {
            return 'content' in el && el instanceof HTMLTemplateElement ? el.content : null;
        }
    }, {
        key: 'getOuterHTML',
        value: function getOuterHTML(el /** TODO #9100 */) {
            return el.outerHTML;
        }
    }, {
        key: 'nodeName',
        value: function nodeName(node) {
            return node.nodeName;
        }
    }, {
        key: 'nodeValue',
        value: function nodeValue(node) {
            return node.nodeValue;
        }
    }, {
        key: 'type',
        value: function type(node) {
            return node.type;
        }
    }, {
        key: 'content',
        value: function content(node) {
            if (this.hasProperty(node, 'content')) {
                return node.content;
            } else {
                return node;
            }
        }
    }, {
        key: 'firstChild',
        value: function firstChild(el /** TODO #9100 */) {
            return el.firstChild;
        }
    }, {
        key: 'nextSibling',
        value: function nextSibling(el /** TODO #9100 */) {
            return el.nextSibling;
        }
    }, {
        key: 'parentElement',
        value: function parentElement(el /** TODO #9100 */) {
            return el.parentNode;
        }
    }, {
        key: 'childNodes',
        value: function childNodes(el /** TODO #9100 */) {
            return el.childNodes;
        }
    }, {
        key: 'childNodesAsList',
        value: function childNodesAsList(el /** TODO #9100 */) {
            var childNodes = el.childNodes;
            var res = __WEBPACK_IMPORTED_MODULE_1__facade_collection__["c" /* ListWrapper */].createFixedSize(childNodes.length);
            for (var i = 0; i < childNodes.length; i++) {
                res[i] = childNodes[i];
            }
            return res;
        }
    }, {
        key: 'clearNodes',
        value: function clearNodes(el /** TODO #9100 */) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        }
    }, {
        key: 'appendChild',
        value: function appendChild(el /** TODO #9100 */, node /** TODO #9100 */) {
            el.appendChild(node);
        }
    }, {
        key: 'removeChild',
        value: function removeChild(el /** TODO #9100 */, node /** TODO #9100 */) {
            el.removeChild(node);
        }
    }, {
        key: 'replaceChild',
        value: function replaceChild(el, newChild /** TODO #9100 */, oldChild /** TODO #9100 */) {
            el.replaceChild(newChild, oldChild);
        }
    }, {
        key: 'remove',
        value: function remove(node /** TODO #9100 */) {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
            return node;
        }
    }, {
        key: 'insertBefore',
        value: function insertBefore(el /** TODO #9100 */, node /** TODO #9100 */) {
            el.parentNode.insertBefore(node, el);
        }
    }, {
        key: 'insertAllBefore',
        value: function insertAllBefore(el /** TODO #9100 */, nodes /** TODO #9100 */) {
            nodes.forEach(function (n /** TODO #9100 */) {
                return el.parentNode.insertBefore(n, el);
            });
        }
    }, {
        key: 'insertAfter',
        value: function insertAfter(el /** TODO #9100 */, node /** TODO #9100 */) {
            el.parentNode.insertBefore(node, el.nextSibling);
        }
    }, {
        key: 'setInnerHTML',
        value: function setInnerHTML(el /** TODO #9100 */, value /** TODO #9100 */) {
            el.innerHTML = value;
        }
    }, {
        key: 'getText',
        value: function getText(el /** TODO #9100 */) {
            return el.textContent;
        }
        // TODO(vicb): removed Element type because it does not support StyleElement

    }, {
        key: 'setText',
        value: function setText(el /** TODO #9100 */, value) {
            el.textContent = value;
        }
    }, {
        key: 'getValue',
        value: function getValue(el /** TODO #9100 */) {
            return el.value;
        }
    }, {
        key: 'setValue',
        value: function setValue(el /** TODO #9100 */, value) {
            el.value = value;
        }
    }, {
        key: 'getChecked',
        value: function getChecked(el /** TODO #9100 */) {
            return el.checked;
        }
    }, {
        key: 'setChecked',
        value: function setChecked(el /** TODO #9100 */, value) {
            el.checked = value;
        }
    }, {
        key: 'createComment',
        value: function createComment(text) {
            return document.createComment(text);
        }
    }, {
        key: 'createTemplate',
        value: function createTemplate(html /** TODO #9100 */) {
            var t = document.createElement('template');
            t.innerHTML = html;
            return t;
        }
    }, {
        key: 'createElement',
        value: function createElement(tagName /* TODO #9100 */) {
            var doc = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

            return doc.createElement(tagName);
        }
    }, {
        key: 'createElementNS',
        value: function createElementNS(ns /* TODO #9100 */, tagName /* TODO #9100 */) {
            var doc = arguments.length <= 2 || arguments[2] === undefined ? document : arguments[2];

            return doc.createElementNS(ns, tagName);
        }
    }, {
        key: 'createTextNode',
        value: function createTextNode(text) {
            var doc = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];
            return doc.createTextNode(text);
        }
    }, {
        key: 'createScriptTag',
        value: function createScriptTag(attrName, attrValue) {
            var doc = arguments.length <= 2 || arguments[2] === undefined ? document : arguments[2];

            var el = doc.createElement('SCRIPT');
            el.setAttribute(attrName, attrValue);
            return el;
        }
    }, {
        key: 'createStyleElement',
        value: function createStyleElement(css) {
            var doc = arguments.length <= 1 || arguments[1] === undefined ? document : arguments[1];

            var style = doc.createElement('style');
            this.appendChild(style, this.createTextNode(css));
            return style;
        }
    }, {
        key: 'createShadowRoot',
        value: function createShadowRoot(el) {
            return el.createShadowRoot();
        }
    }, {
        key: 'getShadowRoot',
        value: function getShadowRoot(el) {
            return el.shadowRoot;
        }
    }, {
        key: 'getHost',
        value: function getHost(el) {
            return el.host;
        }
    }, {
        key: 'clone',
        value: function clone(node) {
            return node.cloneNode(true);
        }
    }, {
        key: 'getElementsByClassName',
        value: function getElementsByClassName(element /** TODO #9100 */, name) {
            return element.getElementsByClassName(name);
        }
    }, {
        key: 'getElementsByTagName',
        value: function getElementsByTagName(element /** TODO #9100 */, name) {
            return element.getElementsByTagName(name);
        }
    }, {
        key: 'classList',
        value: function classList(element /** TODO #9100 */) {
            return Array.prototype.slice.call(element.classList, 0);
        }
    }, {
        key: 'addClass',
        value: function addClass(element /** TODO #9100 */, className) {
            element.classList.add(className);
        }
    }, {
        key: 'removeClass',
        value: function removeClass(element /** TODO #9100 */, className) {
            element.classList.remove(className);
        }
    }, {
        key: 'hasClass',
        value: function hasClass(element /** TODO #9100 */, className) {
            return element.classList.contains(className);
        }
    }, {
        key: 'setStyle',
        value: function setStyle(element /** TODO #9100 */, styleName, styleValue) {
            element.style[styleName] = styleValue;
        }
    }, {
        key: 'removeStyle',
        value: function removeStyle(element /** TODO #9100 */, stylename) {
            element.style[stylename] = null;
        }
    }, {
        key: 'getStyle',
        value: function getStyle(element /** TODO #9100 */, stylename) {
            return element.style[stylename];
        }
    }, {
        key: 'hasStyle',
        value: function hasStyle(element /** TODO #9100 */, styleName) {
            var styleValue = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            var value = this.getStyle(element, styleName) || '';
            return styleValue ? value == styleValue : value.length > 0;
        }
    }, {
        key: 'tagName',
        value: function tagName(element /** TODO #9100 */) {
            return element.tagName;
        }
    }, {
        key: 'attributeMap',
        value: function attributeMap(element /** TODO #9100 */) {
            var res = new Map();
            var elAttrs = element.attributes;
            for (var i = 0; i < elAttrs.length; i++) {
                var attrib = elAttrs[i];
                res.set(attrib.name, attrib.value);
            }
            return res;
        }
    }, {
        key: 'hasAttribute',
        value: function hasAttribute(element /** TODO #9100 */, attribute) {
            return element.hasAttribute(attribute);
        }
    }, {
        key: 'hasAttributeNS',
        value: function hasAttributeNS(element /** TODO #9100 */, ns, attribute) {
            return element.hasAttributeNS(ns, attribute);
        }
    }, {
        key: 'getAttribute',
        value: function getAttribute(element /** TODO #9100 */, attribute) {
            return element.getAttribute(attribute);
        }
    }, {
        key: 'getAttributeNS',
        value: function getAttributeNS(element /** TODO #9100 */, ns, name) {
            return element.getAttributeNS(ns, name);
        }
    }, {
        key: 'setAttribute',
        value: function setAttribute(element /** TODO #9100 */, name, value) {
            element.setAttribute(name, value);
        }
    }, {
        key: 'setAttributeNS',
        value: function setAttributeNS(element /** TODO #9100 */, ns, name, value) {
            element.setAttributeNS(ns, name, value);
        }
    }, {
        key: 'removeAttribute',
        value: function removeAttribute(element /** TODO #9100 */, attribute) {
            element.removeAttribute(attribute);
        }
    }, {
        key: 'removeAttributeNS',
        value: function removeAttributeNS(element /** TODO #9100 */, ns, name) {
            element.removeAttributeNS(ns, name);
        }
    }, {
        key: 'templateAwareRoot',
        value: function templateAwareRoot(el /** TODO #9100 */) {
            return this.isTemplateElement(el) ? this.content(el) : el;
        }
    }, {
        key: 'createHtmlDocument',
        value: function createHtmlDocument() {
            return document.implementation.createHTMLDocument('fakeTitle');
        }
    }, {
        key: 'defaultDoc',
        value: function defaultDoc() {
            return document;
        }
    }, {
        key: 'getBoundingClientRect',
        value: function getBoundingClientRect(el /** TODO #9100 */) {
            try {
                return el.getBoundingClientRect();
            } catch (e) {
                return { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
            }
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            return document.title;
        }
    }, {
        key: 'setTitle',
        value: function setTitle(newTitle) {
            document.title = newTitle || '';
        }
    }, {
        key: 'elementMatches',
        value: function elementMatches(n /** TODO #9100 */, selector) {
            var matches = false;
            if (n instanceof HTMLElement) {
                if (n.matches) {
                    matches = n.matches(selector);
                } else if (n.msMatchesSelector) {
                    matches = n.msMatchesSelector(selector);
                } else if (n.webkitMatchesSelector) {
                    matches = n.webkitMatchesSelector(selector);
                }
            }
            return matches;
        }
    }, {
        key: 'isTemplateElement',
        value: function isTemplateElement(el) {
            return el instanceof HTMLElement && el.nodeName == 'TEMPLATE';
        }
    }, {
        key: 'isTextNode',
        value: function isTextNode(node) {
            return node.nodeType === Node.TEXT_NODE;
        }
    }, {
        key: 'isCommentNode',
        value: function isCommentNode(node) {
            return node.nodeType === Node.COMMENT_NODE;
        }
    }, {
        key: 'isElementNode',
        value: function isElementNode(node) {
            return node.nodeType === Node.ELEMENT_NODE;
        }
    }, {
        key: 'hasShadowRoot',
        value: function hasShadowRoot(node /** TODO #9100 */) {
            return node instanceof HTMLElement && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(node.shadowRoot);
        }
    }, {
        key: 'isShadowRoot',
        value: function isShadowRoot(node /** TODO #9100 */) {
            return node instanceof DocumentFragment;
        }
    }, {
        key: 'importIntoDoc',
        value: function importIntoDoc(node) {
            var toImport = node;
            if (this.isTemplateElement(node)) {
                toImport = this.content(node);
            }
            return document.importNode(toImport, true);
        }
    }, {
        key: 'adoptNode',
        value: function adoptNode(node) {
            return document.adoptNode(node);
        }
    }, {
        key: 'getHref',
        value: function getHref(el) {
            return el.href;
        }
    }, {
        key: 'getEventKey',
        value: function getEventKey(event /** TODO #9100 */) {
            var key = event.key;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(key)) {
                key = event.keyIdentifier;
                // keyIdentifier is defined in the old draft of DOM Level 3 Events implemented by Chrome and
                // Safari
                // cf
                // http://www.w3.org/TR/2007/WD-DOM-Level-3-Events-20071221/events.html#Events-KeyboardEvents-Interfaces
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(key)) {
                    return 'Unidentified';
                }
                if (key.startsWith('U+')) {
                    key = String.fromCharCode(parseInt(key.substring(2), 16));
                    if (event.location === DOM_KEY_LOCATION_NUMPAD && _chromeNumKeyPadMap.hasOwnProperty(key)) {
                        // There is a bug in Chrome for numeric keypad keys:
                        // https://code.google.com/p/chromium/issues/detail?id=155654
                        // 1, 2, 3 ... are reported as A, B, C ...
                        key = _chromeNumKeyPadMap[key];
                    }
                }
            }
            if (_keyMap.hasOwnProperty(key)) {
                key = _keyMap[key];
            }
            return key;
        }
    }, {
        key: 'getGlobalEventTarget',
        value: function getGlobalEventTarget(target) {
            if (target == 'window') {
                return window;
            } else if (target == 'document') {
                return document;
            } else if (target == 'body') {
                return document.body;
            }
        }
    }, {
        key: 'getHistory',
        value: function getHistory() {
            return window.history;
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            return window.location;
        }
    }, {
        key: 'getBaseHref',
        value: function getBaseHref() {
            var href = getBaseElementHref();
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(href)) {
                return null;
            }
            return relativePath(href);
        }
    }, {
        key: 'resetBaseElement',
        value: function resetBaseElement() {
            baseElement = null;
        }
    }, {
        key: 'getUserAgent',
        value: function getUserAgent() {
            return window.navigator.userAgent;
        }
    }, {
        key: 'setData',
        value: function setData(element /** TODO #9100 */, name, value) {
            this.setAttribute(element, 'data-' + name, value);
        }
    }, {
        key: 'getData',
        value: function getData(element /** TODO #9100 */, name) {
            return this.getAttribute(element, 'data-' + name);
        }
    }, {
        key: 'getComputedStyle',
        value: function (_getComputedStyle) {
            function getComputedStyle(_x) {
                return _getComputedStyle.apply(this, arguments);
            }

            getComputedStyle.toString = function () {
                return _getComputedStyle.toString();
            };

            return getComputedStyle;
        }(function (element /** TODO #9100 */) {
            return getComputedStyle(element);
        })
        // TODO(tbosch): move this into a separate environment class once we have it

    }, {
        key: 'setGlobalVar',
        value: function setGlobalVar(path, value) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["o" /* setValueOnPath */])(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["d" /* global */], path, value);
        }
    }, {
        key: 'requestAnimationFrame',
        value: function requestAnimationFrame(callback /** TODO #9100 */) {
            return window.requestAnimationFrame(callback);
        }
    }, {
        key: 'cancelAnimationFrame',
        value: function cancelAnimationFrame(id) {
            window.cancelAnimationFrame(id);
        }
    }, {
        key: 'supportsWebAnimation',
        value: function supportsWebAnimation() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["n" /* isFunction */])(document.body['animate']);
        }
    }, {
        key: 'performanceNow',
        value: function performanceNow() {
            // performance.now() is not available in all browsers, see
            // http://caniuse.com/#search=performance.now
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(window.performance) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(window.performance.now)) {
                return window.performance.now();
            } else {
                return __WEBPACK_IMPORTED_MODULE_2__facade_lang__["p" /* DateWrapper */].toMillis(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["p" /* DateWrapper */].now());
            }
        }
    }, {
        key: 'supportsCookies',
        value: function supportsCookies() {
            return true;
        }
    }, {
        key: 'getCookie',
        value: function getCookie(name) {
            return parseCookieValue(document.cookie, name);
        }
    }, {
        key: 'setCookie',
        value: function setCookie(name, value) {
            // document.cookie is magical, assigning into it assigns/overrides one cookie value, but does
            // not clear other cookies.
            document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        }
    }, {
        key: 'attrToPropMap',
        get: function get() {
            return _attrToPropMap;
        }
    }], [{
        key: 'makeCurrent',
        value: function makeCurrent() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__["setRootDomAdapter"])(new BrowserDomAdapter());
        }
    }]);

    return BrowserDomAdapter;
}(__WEBPACK_IMPORTED_MODULE_3__generic_browser_adapter__["a" /* GenericBrowserDomAdapter */]);
var baseElement = null;
function getBaseElementHref() {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(baseElement)) {
        baseElement = document.querySelector('base');
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(baseElement)) {
            return null;
        }
    }
    return baseElement.getAttribute('href');
}
// based on urlUtils.js in AngularJS 1
var urlParsingNode = null;
function relativePath(url /** TODO #9100 */) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["a" /* isBlank */])(urlParsingNode)) {
        urlParsingNode = document.createElement('a');
    }
    urlParsingNode.setAttribute('href', url);
    return urlParsingNode.pathname.charAt(0) === '/' ? urlParsingNode.pathname : '/' + urlParsingNode.pathname;
}
function parseCookieValue(cookie, name) {
    name = encodeURIComponent(name);
    var cookies = cookie.split(';');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = cookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _cookie = _step.value;

            var _cookie$split = _cookie.split('=', 2);

            var _cookie$split2 = _slicedToArray(_cookie$split, 2);

            var key = _cookie$split2[0];
            var value = _cookie$split2[1];

            if (key.trim() === name) {
                return decodeURIComponent(value);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return null;
}
//# sourceMappingURL=browser_adapter.js.map

/***/ },

/***/ 240:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return BrowserGetTestability; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var PublicTestability = function () {
    function PublicTestability(testability) {
        _classCallCheck(this, PublicTestability);

        this._testability = testability;
    }

    _createClass(PublicTestability, [{
        key: 'isStable',
        value: function isStable() {
            return this._testability.isStable();
        }
    }, {
        key: 'whenStable',
        value: function whenStable(callback) {
            this._testability.whenStable(callback);
        }
    }, {
        key: 'findBindings',
        value: function findBindings(using, provider, exactMatch) {
            return this.findProviders(using, provider, exactMatch);
        }
    }, {
        key: 'findProviders',
        value: function findProviders(using, provider, exactMatch) {
            return this._testability.findBindings(using, provider, exactMatch);
        }
    }]);

    return PublicTestability;
}();

var BrowserGetTestability = function () {
    function BrowserGetTestability() {
        _classCallCheck(this, BrowserGetTestability);
    }

    _createClass(BrowserGetTestability, [{
        key: 'addToWindow',
        value: function addToWindow(registry) {
            __WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* global */].getAngularTestability = function (elem) {
                var findInAncestors = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

                var testability = registry.findTestabilityInTree(elem, findInAncestors);
                if (testability == null) {
                    throw new Error('Could not find testability for element.');
                }
                return new PublicTestability(testability);
            };
            __WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* global */].getAllAngularTestabilities = function () {
                var testabilities = registry.getAllTestabilities();
                return testabilities.map(function (testability) {
                    return new PublicTestability(testability);
                });
            };
            __WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* global */].getAllAngularRootElements = function () {
                return registry.getAllRootElements();
            };
            var whenAllStable = function whenAllStable(callback /** TODO #9100 */) {
                var testabilities = __WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* global */].getAllAngularTestabilities();
                var count = testabilities.length;
                var didWork = false;
                var decrement = function decrement(didWork_ /** TODO #9100 */) {
                    didWork = didWork || didWork_;
                    count--;
                    if (count == 0) {
                        callback(didWork);
                    }
                };
                testabilities.forEach(function (testability /** TODO #9100 */) {
                    testability.whenStable(decrement);
                });
            };
            if (!__WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* global */].frameworkStabilizers) {
                __WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* global */].frameworkStabilizers = __WEBPACK_IMPORTED_MODULE_2__facade_collection__["c" /* ListWrapper */].createGrowableSize(0);
            }
            __WEBPACK_IMPORTED_MODULE_3__facade_lang__["d" /* global */].frameworkStabilizers.push(whenAllStable);
        }
    }, {
        key: 'findTestabilityInTree',
        value: function findTestabilityInTree(registry, elem, findInAncestors) {
            if (elem == null) {
                return null;
            }
            var t = registry.getTestability(elem);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(t)) {
                return t;
            } else if (!findInAncestors) {
                return null;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().isShadowRoot(elem)) {
                return this.findTestabilityInTree(registry, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().getHost(elem), true);
            }
            return this.findTestabilityInTree(registry, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().parentElement(elem), true);
        }
    }], [{
        key: 'init',
        value: function init() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* setTestabilityGetter */])(new BrowserGetTestability());
        }
    }]);

    return BrowserGetTestability;
}();
//# sourceMappingURL=testability.js.map

/***/ },

/***/ 241:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_private__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_renderer__ = __webpack_require__(105);
/* unused harmony export inspectNativeElement */
/* harmony export */ __webpack_require__.d(exports, "a", function() { return ELEMENT_PROBE_PROVIDERS; });/* unused harmony export ELEMENT_PROBE_PROVIDERS_PROD_MODE */



var CORE_TOKENS = {
    'ApplicationRef': __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationRef */],
    'NgZone': __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* NgZone */]
};
var INSPECT_GLOBAL_NAME = 'ng.probe';
var CORE_TOKENS_GLOBAL_NAME = 'ng.coreTokens';
/**
 * Returns a {@link DebugElement} for the given native DOM element, or
 * null if the given native element does not have an Angular view associated
 * with it.
 */
function inspectNativeElement(element /** TODO #9100 */) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* getDebugNode */])(element);
}
function _createConditionalRootRenderer(rootRenderer /** TODO #9100 */) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* isDevMode */])()) {
        return _createRootRenderer(rootRenderer);
    }
    return rootRenderer;
}
function _createRootRenderer(rootRenderer /** TODO #9100 */) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_adapter__["getDOM"])().setGlobalVar(INSPECT_GLOBAL_NAME, inspectNativeElement);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_adapter__["getDOM"])().setGlobalVar(CORE_TOKENS_GLOBAL_NAME, CORE_TOKENS);
    return new __WEBPACK_IMPORTED_MODULE_1__core_private__["b" /* DebugDomRootRenderer */](rootRenderer);
}
/**
 * Providers which support debugging Angular applications (e.g. via `ng.probe`).
 */
var ELEMENT_PROBE_PROVIDERS = [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* RootRenderer */], useFactory: _createConditionalRootRenderer, deps: [__WEBPACK_IMPORTED_MODULE_3__dom_renderer__["DomRootRenderer"]] }];
var ELEMENT_PROBE_PROVIDERS_PROD_MODE = [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* RootRenderer */], useFactory: _createRootRenderer, deps: [__WEBPACK_IMPORTED_MODULE_3__dom_renderer__["DomRootRenderer"]] }];
//# sourceMappingURL=ng_probe.js.map

/***/ },

/***/ 242:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(8);
/* harmony export */ exports["a"] = camelCaseToDashCase;/* harmony export */ exports["b"] = dashCaseToCamelCase;
var CAMEL_CASE_REGEXP = /([A-Z])/g;
var DASH_CASE_REGEXP = /-([a-z])/g;
function camelCaseToDashCase(input) {
    return __WEBPACK_IMPORTED_MODULE_0__facade_lang__["h" /* StringWrapper */].replaceAllMapped(input, CAMEL_CASE_REGEXP, function (m /** TODO #9100 */) {
        return '-' + m[1].toLowerCase();
    });
}
function dashCaseToCamelCase(input) {
    return __WEBPACK_IMPORTED_MODULE_0__facade_lang__["h" /* StringWrapper */].replaceAllMapped(input, DASH_CASE_REGEXP, function (m /** TODO #9100 */) {
        return m[1].toUpperCase();
    });
}
//# sourceMappingURL=util.js.map

/***/ },

/***/ 243:
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony export */ __webpack_require__.d(exports, "a", function() { return BaseWrappedException; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A base class for the WrappedException that can be used to identify
 * a WrappedException from ExceptionHandler without adding circular
 * dependency.
 */
var BaseWrappedException = function (_Error) {
    _inherits(BaseWrappedException, _Error);

    function BaseWrappedException(message) {
        _classCallCheck(this, BaseWrappedException);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(BaseWrappedException).call(this, message));
    }

    _createClass(BaseWrappedException, [{
        key: 'wrapperMessage',
        get: function get() {
            return '';
        }
    }, {
        key: 'wrapperStack',
        get: function get() {
            return null;
        }
    }, {
        key: 'originalException',
        get: function get() {
            return null;
        }
    }, {
        key: 'originalStack',
        get: function get() {
            return null;
        }
    }, {
        key: 'context',
        get: function get() {
            return null;
        }
    }, {
        key: 'message',
        get: function get() {
            return '';
        }
    }]);

    return BaseWrappedException;
}(Error);
//# sourceMappingURL=base_wrapped_exception.js.map

/***/ },

/***/ 244:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lang__ = __webpack_require__(8);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return ExceptionHandler; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var _ArrayLogger = function () {
    function _ArrayLogger() {
        _classCallCheck(this, _ArrayLogger);

        this.res = [];
    }

    _createClass(_ArrayLogger, [{
        key: 'log',
        value: function log(s) {
            this.res.push(s);
        }
    }, {
        key: 'logError',
        value: function logError(s) {
            this.res.push(s);
        }
    }, {
        key: 'logGroup',
        value: function logGroup(s) {
            this.res.push(s);
        }
    }, {
        key: 'logGroupEnd',
        value: function logGroupEnd() {}
    }]);

    return _ArrayLogger;
}();
/**
 * Provides a hook for centralized exception handling.
 *
 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
 * intercept error handling,
 * write a custom exception handler that replaces this default as appropriate for your app.
 *
 * ### Example
 *
 * ```javascript
 *
 * class MyExceptionHandler implements ExceptionHandler {
 *   call(error, stackTrace = null, reason = null) {
 *     // do something with the exception
 *   }
 * }
 *
 * bootstrap(MyApp, {provide: ExceptionHandler, useClass: MyExceptionHandler}])
 *
 * ```
 * @stable
 */


var ExceptionHandler = function () {
    function ExceptionHandler(_logger) {
        var _rethrowException = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

        _classCallCheck(this, ExceptionHandler);

        this._logger = _logger;
        this._rethrowException = _rethrowException;
    }

    _createClass(ExceptionHandler, [{
        key: 'call',
        value: function call(exception) {
            var stackTrace = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            var reason = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            var originalException = this._findOriginalException(exception);
            var originalStack = this._findOriginalStack(exception);
            var context = this._findContext(exception);
            this._logger.logGroup('EXCEPTION: ' + this._extractMessage(exception));
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(stackTrace) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["a" /* isBlank */])(originalStack)) {
                this._logger.logError('STACKTRACE:');
                this._logger.logError(this._longStackTrace(stackTrace));
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(reason)) {
                this._logger.logError('REASON: ' + reason);
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(originalException)) {
                this._logger.logError('ORIGINAL EXCEPTION: ' + this._extractMessage(originalException));
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(originalStack)) {
                this._logger.logError('ORIGINAL STACKTRACE:');
                this._logger.logError(this._longStackTrace(originalStack));
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(context)) {
                this._logger.logError('ERROR CONTEXT:');
                this._logger.logError(context);
            }
            this._logger.logGroupEnd();
            // We rethrow exceptions, so operations like 'bootstrap' will result in an error
            // when an exception happens. If we do not rethrow, bootstrap will always succeed.
            if (this._rethrowException) throw exception;
        }
        /** @internal */

    }, {
        key: '_extractMessage',
        value: function _extractMessage(exception) {
            return exception instanceof __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */] ? exception.wrapperMessage : exception.toString();
        }
        /** @internal */

    }, {
        key: '_longStackTrace',
        value: function _longStackTrace(stackTrace) {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__collection__["a" /* isListLikeIterable */])(stackTrace) ? stackTrace.join('\n\n-----async gap-----\n') : stackTrace.toString();
        }
        /** @internal */

    }, {
        key: '_findContext',
        value: function _findContext(exception) {
            try {
                if (!(exception instanceof __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */])) return null;
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(exception.context) ? exception.context : this._findContext(exception.originalException);
            } catch (e) {
                // exception.context can throw an exception. if it happens, we ignore the context.
                return null;
            }
        }
        /** @internal */

    }, {
        key: '_findOriginalException',
        value: function _findOriginalException(exception) {
            if (!(exception instanceof __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */])) return null;
            var e = exception.originalException;
            while (e instanceof __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(e.originalException)) {
                e = e.originalException;
            }
            return e;
        }
        /** @internal */

    }, {
        key: '_findOriginalStack',
        value: function _findOriginalStack(exception) {
            if (!(exception instanceof __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */])) return null;
            var e = exception;
            var stack = exception.originalStack;
            while (e instanceof __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(e.originalException)) {
                e = e.originalException;
                if (e instanceof __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__lang__["b" /* isPresent */])(e.originalException)) {
                    stack = e.originalStack;
                }
            }
            return stack;
        }
    }], [{
        key: 'exceptionToString',
        value: function exceptionToString(exception) {
            var stackTrace = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
            var reason = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            var l = new _ArrayLogger();
            var e = new ExceptionHandler(l, false);
            e.call(exception, stackTrace, reason);
            return l.res.join('\n');
        }
    }]);

    return ExceptionHandler;
}();
//# sourceMappingURL=exception_handler.js.map

/***/ },

/***/ 245:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_private__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__html_sanitizer__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_sanitizer__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_sanitizer__ = __webpack_require__(154);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return DomSanitizationService; });
/* harmony export */ __webpack_require__.d(exports, "b", function() { return DomSanitizationServiceImpl; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






/* unused harmony reexport SecurityContext */

/**
 * DomSanitizationService helps preventing Cross Site Scripting Security bugs (XSS) by sanitizing
 * values to be safe to use in the different DOM contexts.
 *
 * For example, when binding a URL in an `<a [href]="someValue">` hyperlink, `someValue` will be
 * sanitized so that an attacker cannot inject e.g. a `javascript:` URL that would execute code on
 * the website.
 *
 * In specific situations, it might be necessary to disable sanitization, for example if the
 * application genuinely needs to produce a `javascript:` style link with a dynamic value in it.
 * Users can bypass security by constructing a value with one of the `bypassSecurityTrust...`
 * methods, and then binding to that value from the template.
 *
 * These situations should be very rare, and extraordinary care must be taken to avoid creating a
 * Cross Site Scripting (XSS) security bug!
 *
 * When using `bypassSecurityTrust...`, make sure to call the method as early as possible and as
 * close as possible to the source of the value, to make it easy to verify no security bug is
 * created by its use.
 *
 * It is not required (and not recommended) to bypass security if the value is safe, e.g. a URL that
 * does not start with a suspicious protocol, or an HTML snippet that does not contain dangerous
 * code. The sanitizer leaves safe values intact.
 */
var DomSanitizationService = function DomSanitizationService() {
    _classCallCheck(this, DomSanitizationService);
};
var DomSanitizationServiceImpl = function (_DomSanitizationServi) {
    _inherits(DomSanitizationServiceImpl, _DomSanitizationServi);

    function DomSanitizationServiceImpl() {
        _classCallCheck(this, DomSanitizationServiceImpl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(DomSanitizationServiceImpl).apply(this, arguments));
    }

    _createClass(DomSanitizationServiceImpl, [{
        key: 'sanitize',
        value: function sanitize(ctx, value) {
            if (value == null) return null;
            switch (ctx) {
                case __WEBPACK_IMPORTED_MODULE_1__core_private__["c" /* SecurityContext */].NONE:
                    return value;
                case __WEBPACK_IMPORTED_MODULE_1__core_private__["c" /* SecurityContext */].HTML:
                    if (value instanceof SafeHtmlImpl) return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'HTML');
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__html_sanitizer__["a" /* sanitizeHtml */])(String(value));
                case __WEBPACK_IMPORTED_MODULE_1__core_private__["c" /* SecurityContext */].STYLE:
                    if (value instanceof SafeStyleImpl) return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Style');
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__style_sanitizer__["a" /* sanitizeStyle */])(value);
                case __WEBPACK_IMPORTED_MODULE_1__core_private__["c" /* SecurityContext */].SCRIPT:
                    if (value instanceof SafeScriptImpl) return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'Script');
                    throw new Error('unsafe value used in a script context');
                case __WEBPACK_IMPORTED_MODULE_1__core_private__["c" /* SecurityContext */].URL:
                    if (value instanceof SafeUrlImpl) return value.changingThisBreaksApplicationSecurity;
                    this.checkNotSafeValue(value, 'URL');
                    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__url_sanitizer__["a" /* sanitizeUrl */])(String(value));
                case __WEBPACK_IMPORTED_MODULE_1__core_private__["c" /* SecurityContext */].RESOURCE_URL:
                    if (value instanceof SafeResourceUrlImpl) {
                        return value.changingThisBreaksApplicationSecurity;
                    }
                    this.checkNotSafeValue(value, 'ResourceURL');
                    throw new Error('unsafe value used in a resource URL context');
                default:
                    throw new Error('Unexpected SecurityContext ' + ctx);
            }
        }
    }, {
        key: 'checkNotSafeValue',
        value: function checkNotSafeValue(value, expectedType) {
            if (value instanceof SafeValueImpl) {
                throw new Error('Required a safe ' + expectedType + ', got a ' + value.getTypeName());
            }
        }
    }, {
        key: 'bypassSecurityTrustHtml',
        value: function bypassSecurityTrustHtml(value) {
            return new SafeHtmlImpl(value);
        }
    }, {
        key: 'bypassSecurityTrustStyle',
        value: function bypassSecurityTrustStyle(value) {
            return new SafeStyleImpl(value);
        }
    }, {
        key: 'bypassSecurityTrustScript',
        value: function bypassSecurityTrustScript(value) {
            return new SafeScriptImpl(value);
        }
    }, {
        key: 'bypassSecurityTrustUrl',
        value: function bypassSecurityTrustUrl(value) {
            return new SafeUrlImpl(value);
        }
    }, {
        key: 'bypassSecurityTrustResourceUrl',
        value: function bypassSecurityTrustResourceUrl(value) {
            return new SafeResourceUrlImpl(value);
        }
    }]);

    return DomSanitizationServiceImpl;
}(DomSanitizationService);
/** @nocollapse */
DomSanitizationServiceImpl.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];

var SafeValueImpl = function () {
    function SafeValueImpl(changingThisBreaksApplicationSecurity) {
        _classCallCheck(this, SafeValueImpl);

        this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
        // empty
    }

    _createClass(SafeValueImpl, [{
        key: 'toString',
        value: function toString() {
            return 'SafeValue must use [property]=binding: ' + this.changingThisBreaksApplicationSecurity;
        }
    }]);

    return SafeValueImpl;
}();

var SafeHtmlImpl = function (_SafeValueImpl) {
    _inherits(SafeHtmlImpl, _SafeValueImpl);

    function SafeHtmlImpl() {
        _classCallCheck(this, SafeHtmlImpl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SafeHtmlImpl).apply(this, arguments));
    }

    _createClass(SafeHtmlImpl, [{
        key: 'getTypeName',
        value: function getTypeName() {
            return 'HTML';
        }
    }]);

    return SafeHtmlImpl;
}(SafeValueImpl);

var SafeStyleImpl = function (_SafeValueImpl2) {
    _inherits(SafeStyleImpl, _SafeValueImpl2);

    function SafeStyleImpl() {
        _classCallCheck(this, SafeStyleImpl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SafeStyleImpl).apply(this, arguments));
    }

    _createClass(SafeStyleImpl, [{
        key: 'getTypeName',
        value: function getTypeName() {
            return 'Style';
        }
    }]);

    return SafeStyleImpl;
}(SafeValueImpl);

var SafeScriptImpl = function (_SafeValueImpl3) {
    _inherits(SafeScriptImpl, _SafeValueImpl3);

    function SafeScriptImpl() {
        _classCallCheck(this, SafeScriptImpl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SafeScriptImpl).apply(this, arguments));
    }

    _createClass(SafeScriptImpl, [{
        key: 'getTypeName',
        value: function getTypeName() {
            return 'Script';
        }
    }]);

    return SafeScriptImpl;
}(SafeValueImpl);

var SafeUrlImpl = function (_SafeValueImpl4) {
    _inherits(SafeUrlImpl, _SafeValueImpl4);

    function SafeUrlImpl() {
        _classCallCheck(this, SafeUrlImpl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SafeUrlImpl).apply(this, arguments));
    }

    _createClass(SafeUrlImpl, [{
        key: 'getTypeName',
        value: function getTypeName() {
            return 'URL';
        }
    }]);

    return SafeUrlImpl;
}(SafeValueImpl);

var SafeResourceUrlImpl = function (_SafeValueImpl5) {
    _inherits(SafeResourceUrlImpl, _SafeValueImpl5);

    function SafeResourceUrlImpl() {
        _classCallCheck(this, SafeResourceUrlImpl);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(SafeResourceUrlImpl).apply(this, arguments));
    }

    _createClass(SafeResourceUrlImpl, [{
        key: 'getTypeName',
        value: function getTypeName() {
            return 'ResourceURL';
        }
    }]);

    return SafeResourceUrlImpl;
}(SafeValueImpl);
//# sourceMappingURL=dom_sanitization_service.js.map

/***/ },

/***/ 246:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return ON_WEB_WORKER; });
var ON_WEB_WORKER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* OpaqueToken */]('WebWorker.onWebWorker');
//# sourceMappingURL=api.js.map

/***/ },

/***/ 247:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_async__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_exceptions__ = __webpack_require__(46);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return PostMessageBusSink; });
/* harmony export */ __webpack_require__.d(exports, "b", function() { return PostMessageBusSource; });
/* harmony export */ __webpack_require__.d(exports, "c", function() { return PostMessageBus; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var PostMessageBusSink = function () {
    function PostMessageBusSink(_postMessageTarget) {
        _classCallCheck(this, PostMessageBusSink);

        this._postMessageTarget = _postMessageTarget;
        this._channels = __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].create();
        this._messageBuffer = [];
    }

    _createClass(PostMessageBusSink, [{
        key: 'attachToZone',
        value: function attachToZone(zone) {
            var _this = this;

            this._zone = zone;
            this._zone.runOutsideAngular(function () {
                __WEBPACK_IMPORTED_MODULE_1__facade_async__["a" /* ObservableWrapper */].subscribe(_this._zone.onStable, function (_) {
                    _this._handleOnEventDone();
                });
            });
        }
    }, {
        key: 'initChannel',
        value: function initChannel(channel) {
            var _this2 = this;

            var runInZone = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            if (__WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].contains(this._channels, channel)) {
                throw new __WEBPACK_IMPORTED_MODULE_3__facade_exceptions__["a" /* BaseException */](channel + ' has already been initialized');
            }
            var emitter = new __WEBPACK_IMPORTED_MODULE_1__facade_async__["c" /* EventEmitter */](false);
            var channelInfo = new _Channel(emitter, runInZone);
            this._channels[channel] = channelInfo;
            emitter.subscribe(function (data) {
                var message = { channel: channel, message: data };
                if (runInZone) {
                    _this2._messageBuffer.push(message);
                } else {
                    _this2._sendMessages([message]);
                }
            });
        }
    }, {
        key: 'to',
        value: function to(channel) {
            if (__WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].contains(this._channels, channel)) {
                return this._channels[channel].emitter;
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_3__facade_exceptions__["a" /* BaseException */](channel + ' is not set up. Did you forget to call initChannel?');
            }
        }
    }, {
        key: '_handleOnEventDone',
        value: function _handleOnEventDone() {
            if (this._messageBuffer.length > 0) {
                this._sendMessages(this._messageBuffer);
                this._messageBuffer = [];
            }
        }
    }, {
        key: '_sendMessages',
        value: function _sendMessages(messages) {
            this._postMessageTarget.postMessage(messages);
        }
    }]);

    return PostMessageBusSink;
}();
var PostMessageBusSource = function () {
    function PostMessageBusSource(eventTarget) {
        var _this3 = this;

        _classCallCheck(this, PostMessageBusSource);

        this._channels = __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].create();
        if (eventTarget) {
            eventTarget.addEventListener('message', function (ev) {
                return _this3._handleMessages(ev);
            });
        } else {
            // if no eventTarget is given we assume we're in a WebWorker and listen on the global scope
            var workerScope = self;
            workerScope.addEventListener('message', function (ev) {
                return _this3._handleMessages(ev);
            });
        }
    }

    _createClass(PostMessageBusSource, [{
        key: 'attachToZone',
        value: function attachToZone(zone) {
            this._zone = zone;
        }
    }, {
        key: 'initChannel',
        value: function initChannel(channel) {
            var runInZone = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            if (__WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].contains(this._channels, channel)) {
                throw new __WEBPACK_IMPORTED_MODULE_3__facade_exceptions__["a" /* BaseException */](channel + ' has already been initialized');
            }
            var emitter = new __WEBPACK_IMPORTED_MODULE_1__facade_async__["c" /* EventEmitter */](false);
            var channelInfo = new _Channel(emitter, runInZone);
            this._channels[channel] = channelInfo;
        }
    }, {
        key: 'from',
        value: function from(channel) {
            if (__WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].contains(this._channels, channel)) {
                return this._channels[channel].emitter;
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_3__facade_exceptions__["a" /* BaseException */](channel + ' is not set up. Did you forget to call initChannel?');
            }
        }
    }, {
        key: '_handleMessages',
        value: function _handleMessages(ev) {
            var messages = ev.data;
            for (var i = 0; i < messages.length; i++) {
                this._handleMessage(messages[i]);
            }
        }
    }, {
        key: '_handleMessage',
        value: function _handleMessage(data) {
            var channel = data.channel;
            if (__WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].contains(this._channels, channel)) {
                var channelInfo = this._channels[channel];
                if (channelInfo.runInZone) {
                    this._zone.run(function () {
                        channelInfo.emitter.emit(data.message);
                    });
                } else {
                    channelInfo.emitter.emit(data.message);
                }
            }
        }
    }]);

    return PostMessageBusSource;
}();
var PostMessageBus = function () {
    function PostMessageBus(sink, source) {
        _classCallCheck(this, PostMessageBus);

        this.sink = sink;
        this.source = source;
    }

    _createClass(PostMessageBus, [{
        key: 'attachToZone',
        value: function attachToZone(zone) {
            this.source.attachToZone(zone);
            this.sink.attachToZone(zone);
        }
    }, {
        key: 'initChannel',
        value: function initChannel(channel) {
            var runInZone = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            this.source.initChannel(channel, runInZone);
            this.sink.initChannel(channel, runInZone);
        }
    }, {
        key: 'from',
        value: function from(channel) {
            return this.source.from(channel);
        }
    }, {
        key: 'to',
        value: function to(channel) {
            return this.sink.to(channel);
        }
    }]);

    return PostMessageBus;
}();
/** @nocollapse */
PostMessageBus.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
PostMessageBus.ctorParameters = [{ type: PostMessageBusSink }, { type: PostMessageBusSource }];
/**
 * Helper class that wraps a channel's {@link EventEmitter} and
 * keeps track of if it should run in the zone.
 */

var _Channel = function _Channel(emitter, runInZone) {
    _classCallCheck(this, _Channel);

    this.emitter = emitter;
    this.runInZone = runInZone;
};
//# sourceMappingURL=post_message_bus.js.map

/***/ },

/***/ 248:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["a"] = deserializeGenericEvent;// no deserialization is necessary in TS.
// This is only here to match dart interface
function deserializeGenericEvent(serializedEvent) {
    return serializedEvent;
}
//# sourceMappingURL=event_deserializer.js.map

/***/ },

/***/ 278:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_browser_location_browser_platform_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_browser_title__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_browser_tools_tools__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_dom_debug_by__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_dom_debug_ng_probe__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_dom_dom_tokens__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_dom_events_dom_events__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_dom_events_event_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_dom_events_hammer_gestures__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_dom_events_key_events__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_security_dom_sanitization_service__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_web_workers_shared_client_message_broker__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_web_workers_shared_service_message_broker__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_web_workers_shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_web_workers_shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_web_workers_worker_location_providers__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_web_workers_ui_location_providers__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_worker_render__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_worker_app__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__private_export__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_browser__ = __webpack_require__(103);
/* unused harmony export BROWSER_PROVIDERS *//* unused harmony reexport BrowserPlatformLocation */
/* unused harmony reexport Title */
/* unused harmony reexport enableDebugTools */
/* unused harmony reexport disableDebugTools */
/* unused harmony reexport By */
/* unused harmony reexport ELEMENT_PROBE_PROVIDERS */
/* unused harmony reexport DOCUMENT */
/* unused harmony reexport DomEventsPlugin */
/* unused harmony reexport EVENT_MANAGER_PLUGINS */
/* unused harmony reexport EventManager */
/* unused harmony reexport HAMMER_GESTURE_CONFIG */
/* unused harmony reexport HammerGestureConfig */
/* unused harmony reexport KeyEventsPlugin */
/* unused harmony reexport DomSanitizationService */
/* unused harmony reexport SecurityContext */
/* harmony namespace reexport */ __webpack_require__.d(exports, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_browser__["BROWSER_APP_PROVIDERS"]; }); __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_browser__["browserPlatform"]; });
/* unused harmony reexport ClientMessageBroker */
/* unused harmony reexport FnArg */
/* unused harmony reexport UiArguments */
/* unused harmony reexport ClientMessageBrokerFactory */
/* unused harmony reexport ServiceMessageBroker */
/* unused harmony reexport ServiceMessageBrokerFactory */
/* unused harmony reexport ReceivedMessage */
/* unused harmony reexport PRIMITIVE */
/* unused harmony namespace reexport */
/* unused harmony reexport WORKER_APP_LOCATION_PROVIDERS */
/* unused harmony reexport WORKER_UI_LOCATION_PROVIDERS */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */
/* unused harmony namespace reexport */












// Web Workers










/* @deprecated use BROWSER_PLATFORM_PROVIDERS */
var BROWSER_PROVIDERS = __WEBPACK_IMPORTED_MODULE_0__src_browser__["BROWSER_PLATFORM_PROVIDERS"];
//# sourceMappingURL=index.js.map

/***/ },

/***/ 282:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_view__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_element__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_type__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_change_detection_change_detection__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(145);
/* unused harmony export viewFactory_App0 */
/* harmony export */ __webpack_require__.d(exports, "a", function() { return AppNgFactory; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles_App = [];
var renderType_App = null;

var _View_App0 = function (_import1$AppView) {
    _inherits(_View_App0, _import1$AppView);

    function _View_App0(viewUtils, parentInjector, declarationEl) {
        _classCallCheck(this, _View_App0);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(_View_App0).call(this, _View_App0, renderType_App, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_type__.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_change_detection_change_detection__.ChangeDetectionStrategy.CheckAlways));
    }

    _createClass(_View_App0, [{
        key: 'createInternal',
        value: function createInternal(rootSelector) {
            var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
            this._text_0 = this.renderer.createText(parentRenderNode, 'hi', null);
            this.init([], [this._text_0], [], []);
            return null;
        }
    }]);

    return _View_App0;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_view__.AppView);

function viewFactory_App0(viewUtils, parentInjector, declarationEl) {
    if (renderType_App === null) {
        renderType_App = viewUtils.createRenderComponentType('/Users/joshthomas/Workspace/tree-shake-ionic2/src/app/app.ts class App - inline template', 0, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_metadata_view__.ViewEncapsulation.None, styles_App);
    }
    return new _View_App0(viewUtils, parentInjector, declarationEl);
}
var styles_App_Host = [];
var renderType_App_Host = null;

var _View_App_Host0 = function (_import1$AppView2) {
    _inherits(_View_App_Host0, _import1$AppView2);

    function _View_App_Host0(viewUtils, parentInjector, declarationEl) {
        _classCallCheck(this, _View_App_Host0);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(_View_App_Host0).call(this, _View_App_Host0, renderType_App_Host, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_type__.ViewType.HOST, viewUtils, parentInjector, declarationEl, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_change_detection_change_detection__.ChangeDetectionStrategy.CheckAlways));
    }

    _createClass(_View_App_Host0, [{
        key: 'createInternal',
        value: function createInternal(rootSelector) {
            this._el_0 = this.selectOrCreateHostElement('ion-app', rootSelector, null);
            this._appEl_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_element__.AppElement(0, null, this, this._el_0);
            var compView_0 = viewFactory_App0(this.viewUtils, this.injector(0), this._appEl_0);
            this._App_0_4 = new __WEBPACK_IMPORTED_MODULE_1__app__.App();
            this._appEl_0.initComponent(this._App_0_4, [], compView_0);
            compView_0.create(this._App_0_4, this.projectableNodes, null);
            this.init([].concat([this._el_0]), [this._el_0], [], []);
            return this._appEl_0;
        }
    }, {
        key: 'injectorGetInternal',
        value: function injectorGetInternal(token, requestNodeIndex, notFoundResult) {
            if (token === __WEBPACK_IMPORTED_MODULE_1__app__.App && 0 === requestNodeIndex) {
                return this._App_0_4;
            }
            return notFoundResult;
        }
    }]);

    return _View_App_Host0;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_view__.AppView);

function viewFactory_App_Host0(viewUtils, parentInjector, declarationEl) {
    if (renderType_App_Host === null) {
        renderType_App_Host = viewUtils.createRenderComponentType('', 0, null, styles_App_Host);
    }
    return new _View_App_Host0(viewUtils, parentInjector, declarationEl);
}
var AppNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__.ComponentFactory('ion-app', viewFactory_App_Host0, __WEBPACK_IMPORTED_MODULE_1__app__.App);

/***/ },

/***/ 318:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_dom_dom_renderer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_dom_shared_styles_host__ = __webpack_require__(106);

/* harmony export */ __webpack_require__.d(exports, "__platform_browser_private__", function() { return __platform_browser_private__; });


var __platform_browser_private__ = {
    DomAdapter: __WEBPACK_IMPORTED_MODULE_0__src_dom_dom_adapter__.DomAdapter,
    getDOM: __WEBPACK_IMPORTED_MODULE_0__src_dom_dom_adapter__.getDOM,
    setRootDomAdapter: __WEBPACK_IMPORTED_MODULE_0__src_dom_dom_adapter__.setRootDomAdapter,
    DomRootRenderer: __WEBPACK_IMPORTED_MODULE_1__src_dom_dom_renderer__.DomRootRenderer,
    DomRootRenderer_: __WEBPACK_IMPORTED_MODULE_1__src_dom_dom_renderer__.DomRootRenderer_,
    DomSharedStylesHost: __WEBPACK_IMPORTED_MODULE_2__src_dom_shared_styles_host__.DomSharedStylesHost,
    SharedStylesHost: __WEBPACK_IMPORTED_MODULE_2__src_dom_shared_styles_host__.SharedStylesHost
};
//# sourceMappingURL=private_export.js.map

/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(8);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return GenericBrowserDomAdapter; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * Provides DOM operations in any browser environment.
 */
var GenericBrowserDomAdapter = function (_DomAdapter) {
    _inherits(GenericBrowserDomAdapter, _DomAdapter);

    function GenericBrowserDomAdapter() {
        _classCallCheck(this, GenericBrowserDomAdapter);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GenericBrowserDomAdapter).call(this));

        _this._animationPrefix = null;
        _this._transitionEnd = null;
        try {
            var element = _this.createElement('div', _this.defaultDoc());
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(_this.getStyle(element, 'animationName'))) {
                _this._animationPrefix = '';
            } else {
                var domPrefixes = ['Webkit', 'Moz', 'O', 'ms'];
                for (var i = 0; i < domPrefixes.length; i++) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(_this.getStyle(element, domPrefixes[i] + 'AnimationName'))) {
                        _this._animationPrefix = '-' + domPrefixes[i].toLowerCase() + '-';
                        break;
                    }
                }
            }
            var transEndEventNames = {
                WebkitTransition: 'webkitTransitionEnd',
                MozTransition: 'transitionend',
                OTransition: 'oTransitionEnd otransitionend',
                transition: 'transitionend'
            };
            __WEBPACK_IMPORTED_MODULE_1__facade_collection__["d" /* StringMapWrapper */].forEach(transEndEventNames, function (value, key) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(_this.getStyle(element, key))) {
                    _this._transitionEnd = value;
                }
            });
        } catch (e) {
            _this._animationPrefix = null;
            _this._transitionEnd = null;
        }
        return _this;
    }

    _createClass(GenericBrowserDomAdapter, [{
        key: 'getDistributedNodes',
        value: function getDistributedNodes(el) {
            return el.getDistributedNodes();
        }
    }, {
        key: 'resolveAndSetHref',
        value: function resolveAndSetHref(el, baseUrl, href) {
            el.href = href == null ? baseUrl : baseUrl + '/../' + href;
        }
    }, {
        key: 'supportsDOMEvents',
        value: function supportsDOMEvents() {
            return true;
        }
    }, {
        key: 'supportsNativeShadowDOM',
        value: function supportsNativeShadowDOM() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["n" /* isFunction */])(this.defaultDoc().body.createShadowRoot);
        }
    }, {
        key: 'getAnimationPrefix',
        value: function getAnimationPrefix() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(this._animationPrefix) ? this._animationPrefix : '';
        }
    }, {
        key: 'getTransitionEnd',
        value: function getTransitionEnd() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(this._transitionEnd) ? this._transitionEnd : '';
        }
    }, {
        key: 'supportsAnimation',
        value: function supportsAnimation() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(this._animationPrefix) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(this._transitionEnd);
        }
    }]);

    return GenericBrowserDomAdapter;
}(__WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__["DomAdapter"]);
//# sourceMappingURL=generic_browser_adapter.js.map

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_private__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_exceptions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__render_store__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serialized_types__ = __webpack_require__(155);

/* harmony export */ __webpack_require__.d(exports, "b", function() { return PRIMITIVE; });
/* harmony export */ __webpack_require__.d(exports, "a", function() { return Serializer; });
/* harmony export */ __webpack_require__.d(exports, "c", function() { return RenderStoreObject; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







// PRIMITIVE is any type that does not need to be serialized (string, number, boolean)
// We set it to String so that it is considered a Type.
/**
 * @experimental
 */
var PRIMITIVE = String;
var Serializer = function () {
    function Serializer(_renderStore) {
        _classCallCheck(this, Serializer);

        this._renderStore = _renderStore;
    }

    _createClass(Serializer, [{
        key: 'serialize',
        value: function serialize(obj, type) {
            var _this = this;

            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(obj)) {
                return null;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["e" /* isArray */])(obj)) {
                return obj.map(function (v) {
                    return _this.serialize(v, type);
                });
            }
            if (type == PRIMITIVE) {
                return obj;
            }
            if (type == RenderStoreObject) {
                return this._renderStore.serialize(obj);
            } else if (type === __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RenderComponentType */]) {
                return this._serializeRenderComponentType(obj);
            } else if (type === __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */]) {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["r" /* serializeEnum */])(obj);
            } else if (type === __WEBPACK_IMPORTED_MODULE_5__serialized_types__["a" /* LocationType */]) {
                return this._serializeLocation(obj);
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_2__facade_exceptions__["a" /* BaseException */]('No serializer for ' + type.toString());
            }
        }
    }, {
        key: 'deserialize',
        value: function deserialize(map, type, data) {
            var _this2 = this;

            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(map)) {
                return null;
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["e" /* isArray */])(map)) {
                var obj = [];
                map.forEach(function (val) {
                    return obj.push(_this2.deserialize(val, type, data));
                });
                return obj;
            }
            if (type == PRIMITIVE) {
                return map;
            }
            if (type == RenderStoreObject) {
                return this._renderStore.deserialize(map);
            } else if (type === __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RenderComponentType */]) {
                return this._deserializeRenderComponentType(map);
            } else if (type === __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */]) {
                return __WEBPACK_IMPORTED_MODULE_1__core_private__["g" /* VIEW_ENCAPSULATION_VALUES */][map];
            } else if (type === __WEBPACK_IMPORTED_MODULE_5__serialized_types__["a" /* LocationType */]) {
                return this._deserializeLocation(map);
            } else {
                throw new __WEBPACK_IMPORTED_MODULE_2__facade_exceptions__["a" /* BaseException */]('No deserializer for ' + type.toString());
            }
        }
    }, {
        key: '_serializeLocation',
        value: function _serializeLocation(loc) {
            return {
                'href': loc.href,
                'protocol': loc.protocol,
                'host': loc.host,
                'hostname': loc.hostname,
                'port': loc.port,
                'pathname': loc.pathname,
                'search': loc.search,
                'hash': loc.hash,
                'origin': loc.origin
            };
        }
    }, {
        key: '_deserializeLocation',
        value: function _deserializeLocation(loc) {
            return new __WEBPACK_IMPORTED_MODULE_5__serialized_types__["a" /* LocationType */](loc['href'], loc['protocol'], loc['host'], loc['hostname'], loc['port'], loc['pathname'], loc['search'], loc['hash'], loc['origin']);
        }
    }, {
        key: '_serializeRenderComponentType',
        value: function _serializeRenderComponentType(obj) {
            return {
                'id': obj.id,
                'templateUrl': obj.templateUrl,
                'slotCount': obj.slotCount,
                'encapsulation': this.serialize(obj.encapsulation, __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */]),
                'styles': this.serialize(obj.styles, PRIMITIVE)
            };
        }
    }, {
        key: '_deserializeRenderComponentType',
        value: function _deserializeRenderComponentType(map) {
            return new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RenderComponentType */](map['id'], map['templateUrl'], map['slotCount'], this.deserialize(map['encapsulation'], __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */]), this.deserialize(map['styles'], PRIMITIVE));
        }
    }]);

    return Serializer;
}();
/** @nocollapse */
Serializer.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
Serializer.ctorParameters = [{ type: __WEBPACK_IMPORTED_MODULE_4__render_store__["a" /* RenderStore */] }];
var RenderStoreObject = function RenderStoreObject() {
    _classCallCheck(this, RenderStoreObject);
};
//# sourceMappingURL=serializer.js.map

/***/ },

/***/ 320:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export */ exports["a"] = supportsState;function supportsState() {
    return !!window.history.pushState;
}
//# sourceMappingURL=history.js.map

/***/ },

/***/ 321:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__ = __webpack_require__(14);
/* unused harmony export Title */var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


/**
 * A service that can be used to get and set the title of a current HTML document.
 *
 * Since an Angular 2 application can't be bootstrapped on the entire HTML document (`<html>` tag)
 * it is not possible to bind to the `text` property of the `HTMLTitleElement` elements
 * (representing the `<title>` tag). Instead, this service can be used to set and get the current
 * title value.
 *
 * @experimental
 */
var Title = function () {
  function Title() {
    _classCallCheck(this, Title);
  }

  _createClass(Title, [{
    key: 'getTitle',

    /**
     * Get the title of the current HTML document.
     * @returns {string}
     */
    value: function getTitle() {
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__["getDOM"])().getTitle();
    }
    /**
     * Set the title of the current HTML document.
     * @param newTitle
     */

  }, {
    key: 'setTitle',
    value: function setTitle(newTitle) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__["getDOM"])().setTitle(newTitle);
    }
  }]);

  return Title;
}();
//# sourceMappingURL=title.js.map

/***/ },

/***/ 322:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_browser__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);
/* unused harmony export ChangeDetectionPerfRecord */
/* harmony export */ __webpack_require__.d(exports, "a", function() { return AngularTools; });/* unused harmony export AngularProfiler */var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var ChangeDetectionPerfRecord = function ChangeDetectionPerfRecord(msPerTick, numTicks) {
    _classCallCheck(this, ChangeDetectionPerfRecord);

    this.msPerTick = msPerTick;
    this.numTicks = numTicks;
};
/**
 * Entry point for all Angular debug tools. This object corresponds to the `ng`
 * global variable accessible in the dev console.
 */
var AngularTools = function AngularTools(ref) {
    _classCallCheck(this, AngularTools);

    this.profiler = new AngularProfiler(ref);
};
/**
 * Entry point for all Angular profiling-related debug tools. This object
 * corresponds to the `ng.profiler` in the dev console.
 */
var AngularProfiler = function () {
    function AngularProfiler(ref) {
        _classCallCheck(this, AngularProfiler);

        this.appRef = ref.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* ApplicationRef */]);
    }
    /**
     * Exercises change detection in a loop and then prints the average amount of
     * time in milliseconds how long a single round of change detection takes for
     * the current state of the UI. It runs a minimum of 5 rounds for a minimum
     * of 500 milliseconds.
     *
     * Optionally, a user may pass a `config` parameter containing a map of
     * options. Supported options are:
     *
     * `record` (boolean) - causes the profiler to record a CPU profile while
     * it exercises the change detector. Example:
     *
     * ```
     * ng.profiler.timeChangeDetection({record: true})
     * ```
     */


    _createClass(AngularProfiler, [{
        key: 'timeChangeDetection',
        value: function timeChangeDetection(config) {
            var record = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(config) && config['record'];
            var profileName = 'Change Detection';
            // Profiler is not available in Android browsers, nor in IE 9 without dev tools opened
            var isProfilerAvailable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(__WEBPACK_IMPORTED_MODULE_2__facade_browser__["a" /* window */].console.profile);
            if (record && isProfilerAvailable) {
                __WEBPACK_IMPORTED_MODULE_2__facade_browser__["a" /* window */].console.profile(profileName);
            }
            var start = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().performanceNow();
            var numTicks = 0;
            while (numTicks < 5 || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().performanceNow() - start < 500) {
                this.appRef.tick();
                numTicks++;
            }
            var end = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().performanceNow();
            if (record && isProfilerAvailable) {
                // need to cast to <any> because type checker thinks there's no argument
                // while in fact there is:
                //
                // https://developer.mozilla.org/en-US/docs/Web/API/Console/profileEnd
                __WEBPACK_IMPORTED_MODULE_2__facade_browser__["a" /* window */].console.profileEnd(profileName);
            }
            var msPerTick = (end - start) / numTicks;
            __WEBPACK_IMPORTED_MODULE_2__facade_browser__["a" /* window */].console.log('ran ' + numTicks + ' change detection cycles');
            __WEBPACK_IMPORTED_MODULE_2__facade_browser__["a" /* window */].console.log(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["c" /* NumberWrapper */].toFixed(msPerTick, 2) + ' ms per check');
            return new ChangeDetectionPerfRecord(msPerTick, numTicks);
        }
    }]);

    return AngularProfiler;
}();
//# sourceMappingURL=common_tools.js.map

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_tools__ = __webpack_require__(322);
/* unused harmony export enableDebugTools *//* unused harmony export disableDebugTools */

var context = __WEBPACK_IMPORTED_MODULE_0__facade_lang__["d" /* global */];
/**
 * Enabled Angular 2 debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 */
function enableDebugTools(ref) {
  context.ng = new __WEBPACK_IMPORTED_MODULE_1__common_tools__["a" /* AngularTools */](ref);
  return ref;
}
/**
 * Disables Angular 2 tools.
 */
function disableDebugTools() {
  delete context.ng;
}
//# sourceMappingURL=tools.js.map

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(8);
/* unused harmony export By */var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



/**
 * Predicates for use with {@link DebugElement}'s query functions.
 */
var By = function () {
  function By() {
    _classCallCheck(this, By);
  }

  _createClass(By, null, [{
    key: 'all',

    /**
     * Match all elements.
     *
     * ## Example
     *
     * {@example platform/dom/debug/ts/by/by.ts region='by_all'}
     */
    value: function all() {
      return function (debugElement) {
        return true;
      };
    }
    /**
     * Match elements by the given CSS selector.
     *
     * ## Example
     *
     * {@example platform/dom/debug/ts/by/by.ts region='by_css'}
     */

  }, {
    key: 'css',
    value: function css(selector) {
      return function (debugElement) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isPresent */])(debugElement.nativeElement) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__["getDOM"])().elementMatches(debugElement.nativeElement, selector) : false;
      };
    }
    /**
     * Match elements that have the given directive present.
     *
     * ## Example
     *
     * {@example platform/dom/debug/ts/by/by.ts region='by_directive'}
     */

  }, {
    key: 'directive',
    value: function directive(type) {
      return function (debugElement) {
        return debugElement.providerTokens.indexOf(type) !== -1;
      };
    }
  }]);

  return By;
}();
//# sourceMappingURL=by.js.map

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__event_manager__ = __webpack_require__(53);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return HammerGesturesPluginCommon; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var _eventNames = {
    // pan
    'pan': true,
    'panstart': true,
    'panmove': true,
    'panend': true,
    'pancancel': true,
    'panleft': true,
    'panright': true,
    'panup': true,
    'pandown': true,
    // pinch
    'pinch': true,
    'pinchstart': true,
    'pinchmove': true,
    'pinchend': true,
    'pinchcancel': true,
    'pinchin': true,
    'pinchout': true,
    // press
    'press': true,
    'pressup': true,
    // rotate
    'rotate': true,
    'rotatestart': true,
    'rotatemove': true,
    'rotateend': true,
    'rotatecancel': true,
    // swipe
    'swipe': true,
    'swipeleft': true,
    'swiperight': true,
    'swipeup': true,
    'swipedown': true,
    // tap
    'tap': true
};
var HammerGesturesPluginCommon = function (_EventManagerPlugin) {
    _inherits(HammerGesturesPluginCommon, _EventManagerPlugin);

    function HammerGesturesPluginCommon() {
        _classCallCheck(this, HammerGesturesPluginCommon);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(HammerGesturesPluginCommon).call(this));
    }

    _createClass(HammerGesturesPluginCommon, [{
        key: 'supports',
        value: function supports(eventName) {
            eventName = eventName.toLowerCase();
            return __WEBPACK_IMPORTED_MODULE_0__facade_collection__["d" /* StringMapWrapper */].contains(_eventNames, eventName);
        }
    }]);

    return HammerGesturesPluginCommon;
}(__WEBPACK_IMPORTED_MODULE_1__event_manager__["b" /* EventManagerPlugin */]);
//# sourceMappingURL=hammer_common.js.map

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__util__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_animations_player__ = __webpack_require__(327);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return WebAnimationsDriver; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var WebAnimationsDriver = function () {
    function WebAnimationsDriver() {
        _classCallCheck(this, WebAnimationsDriver);
    }

    _createClass(WebAnimationsDriver, [{
        key: 'animate',
        value: function animate(element, startingStyles, keyframes, duration, delay, easing) {
            var anyElm = element;
            var formattedSteps = [];
            var startingStyleLookup = {};
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(startingStyles) && startingStyles.styles.length > 0) {
                startingStyleLookup = _populateStyles(anyElm, startingStyles, {});
                startingStyleLookup['offset'] = 0;
                formattedSteps.push(startingStyleLookup);
            }
            keyframes.forEach(function (keyframe) {
                var data = _populateStyles(anyElm, keyframe.styles, startingStyleLookup);
                data['offset'] = keyframe.offset;
                formattedSteps.push(data);
            });
            // this is a special case when only styles are applied as an
            // animation. When this occurs we want to animate from start to
            // end with the same values. Removing the offset and having only
            // start/end values is suitable enough for the web-animations API
            if (formattedSteps.length == 1) {
                var start = formattedSteps[0];
                start['offset'] = null;
                formattedSteps = [start, start];
            }
            var playerOptions = {
                'duration': duration,
                'delay': delay,
                'fill': 'both' // we use `both` because it allows for styling at 0% to work with `delay`
            };
            var player = this._triggerWebAnimation(anyElm, formattedSteps, playerOptions);
            return new __WEBPACK_IMPORTED_MODULE_5__web_animations_player__["a" /* WebAnimationsPlayer */](player, duration);
        }
        /** @internal */

    }, {
        key: '_triggerWebAnimation',
        value: function _triggerWebAnimation(elm, keyframes, options) {
            return elm.animate(keyframes, options);
        }
    }]);

    return WebAnimationsDriver;
}();
function _populateStyles(element, styles, defaultStyles) {
    var data = {};
    styles.styles.forEach(function (entry) {
        __WEBPACK_IMPORTED_MODULE_1__facade_collection__["d" /* StringMapWrapper */].forEach(entry, function (val, prop) {
            var formattedProp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__util__["b" /* dashCaseToCamelCase */])(prop);
            data[formattedProp] = val == __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* AUTO_STYLE */] ? _computeStyle(element, formattedProp) : val.toString() + _resolveStyleUnit(val, prop, formattedProp);
        });
    });
    __WEBPACK_IMPORTED_MODULE_1__facade_collection__["d" /* StringMapWrapper */].forEach(defaultStyles, function (value, prop) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["b" /* isPresent */])(data[prop])) {
            data[prop] = value;
        }
    });
    return data;
}
function _resolveStyleUnit(val, userProvidedProp, formattedProp) {
    var unit = '';
    if (_isPixelDimensionStyle(formattedProp) && val != 0 && val != '0') {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__facade_lang__["m" /* isNumber */])(val)) {
            unit = 'px';
        } else if (_findDimensionalSuffix(val.toString()).length == 0) {
            throw new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* BaseException */]('Please provide a CSS unit value for ' + userProvidedProp + ':' + val);
        }
    }
    return unit;
}
var _$0 = 48;
var _$9 = 57;
var _$PERIOD = 46;
function _findDimensionalSuffix(value) {
    for (var i = 0; i < value.length; i++) {
        var c = __WEBPACK_IMPORTED_MODULE_2__facade_lang__["h" /* StringWrapper */].charCodeAt(value, i);
        if (c >= _$0 && c <= _$9 || c == _$PERIOD) continue;
        return value.substring(i, value.length);
    }
    return '';
}
function _isPixelDimensionStyle(prop) {
    switch (prop) {
        case 'width':
        case 'height':
        case 'minWidth':
        case 'minHeight':
        case 'maxWidth':
        case 'maxHeight':
        case 'left':
        case 'top':
        case 'bottom':
        case 'right':
        case 'fontSize':
        case 'outlineWidth':
        case 'outlineOffset':
        case 'paddingTop':
        case 'paddingLeft':
        case 'paddingBottom':
        case 'paddingRight':
        case 'marginTop':
        case 'marginLeft':
        case 'marginBottom':
        case 'marginRight':
        case 'borderRadius':
        case 'borderWidth':
        case 'borderTopWidth':
        case 'borderLeftWidth':
        case 'borderRightWidth':
        case 'borderBottomWidth':
        case 'textIndent':
            return true;
        default:
            return false;
    }
}
function _computeStyle(element, prop) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom_adapter__["getDOM"])().getComputedStyle(element)[prop];
}
//# sourceMappingURL=web_animations_driver.js.map

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_lang__ = __webpack_require__(8);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return WebAnimationsPlayer; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var WebAnimationsPlayer = function () {
    function WebAnimationsPlayer(_player, totalTime) {
        var _this = this;

        _classCallCheck(this, WebAnimationsPlayer);

        this._player = _player;
        this.totalTime = totalTime;
        this._subscriptions = [];
        this._finished = false;
        this.parentPlayer = null;
        // this is required to make the player startable at a later time
        this.reset();
        this._player.onfinish = function () {
            return _this._onFinish();
        };
    }

    _createClass(WebAnimationsPlayer, [{
        key: '_onFinish',
        value: function _onFinish() {
            if (!this._finished) {
                this._finished = true;
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__facade_lang__["b" /* isPresent */])(this.parentPlayer)) {
                    this.destroy();
                }
                this._subscriptions.forEach(function (fn) {
                    return fn();
                });
                this._subscriptions = [];
            }
        }
    }, {
        key: 'onDone',
        value: function onDone(fn) {
            this._subscriptions.push(fn);
        }
    }, {
        key: 'play',
        value: function play() {
            this._player.play();
        }
    }, {
        key: 'pause',
        value: function pause() {
            this._player.pause();
        }
    }, {
        key: 'finish',
        value: function finish() {
            this._onFinish();
            this._player.finish();
        }
    }, {
        key: 'reset',
        value: function reset() {
            this._player.cancel();
        }
    }, {
        key: 'restart',
        value: function restart() {
            this.reset();
            this.play();
        }
    }, {
        key: 'destroy',
        value: function destroy() {
            this.reset();
            this._onFinish();
        }
    }, {
        key: 'setPosition',
        value: function setPosition(p /** TODO #9100 */) {
            this._player.currentTime = p * this.totalTime;
        }
    }, {
        key: 'getPosition',
        value: function getPosition() {
            return this._player.currentTime / this.totalTime;
        }
    }]);

    return WebAnimationsPlayer;
}();
//# sourceMappingURL=web_animations_player.js.map

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony export */ __webpack_require__.d(exports, "a", function() { return win; });/* unused harmony export document *//* unused harmony export location *//* unused harmony export gc *//* unused harmony export performance *//* unused harmony export Event *//* unused harmony export MouseEvent *//* unused harmony export KeyboardEvent *//* unused harmony export EventTarget *//* unused harmony export History *//* unused harmony export Location *//* unused harmony export EventListener *//**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () {
  return win['gc']();
} : function () {
  return null;
};
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* unused harmony export PromiseCompleter */
/* harmony export */ __webpack_require__.d(exports, "a", function() { return PromiseWrapper; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PromiseCompleter = function PromiseCompleter() {
    var _this = this;

    _classCallCheck(this, PromiseCompleter);

    this.promise = new Promise(function (res, rej) {
        _this.resolve = res;
        _this.reject = rej;
    });
};
var PromiseWrapper = function () {
    function PromiseWrapper() {
        _classCallCheck(this, PromiseWrapper);
    }

    _createClass(PromiseWrapper, null, [{
        key: "resolve",
        value: function resolve(obj) {
            return Promise.resolve(obj);
        }
    }, {
        key: "reject",
        value: function reject(obj, _) {
            return Promise.reject(obj);
        }
        // Note: We can't rename this method into `catch`, as this is not a valid
        // method name in Dart.

    }, {
        key: "catchError",
        value: function catchError(promise, onError) {
            return promise.catch(onError);
        }
    }, {
        key: "all",
        value: function all(promises) {
            if (promises.length == 0) return Promise.resolve([]);
            return Promise.all(promises);
        }
    }, {
        key: "then",
        value: function then(promise, success, rejection) {
            return promise.then(success, rejection);
        }
    }, {
        key: "wrap",
        value: function wrap(computation) {
            return new Promise(function (res, rej) {
                try {
                    res(computation());
                } catch (e) {
                    rej(e);
                }
            });
        }
    }, {
        key: "scheduleMicrotask",
        value: function scheduleMicrotask(computation) {
            PromiseWrapper.then(PromiseWrapper.resolve(null), computation, function (_) {});
        }
    }, {
        key: "completer",
        value: function completer() {
            return new PromiseCompleter();
        }
    }]);

    return PromiseWrapper;
}();
//# sourceMappingURL=promise.js.map

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_sanitizer__ = __webpack_require__(154);
/* harmony export */ exports["a"] = sanitizeHtml;var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




/** A <body> element that can be safely used to parse untrusted HTML. Lazily initialized below. */
var inertElement = null;
/** Lazily initialized to make sure the DOM adapter gets set before use. */
var DOM = null;
/** Returns an HTML element that is guaranteed to not execute code when creating elements in it. */
function getInertElement() {
    if (inertElement) return inertElement;
    DOM = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])();
    // Prefer using <template> element if supported.
    var templateEl = DOM.createElement('template');
    if ('content' in templateEl) return templateEl;
    var doc = DOM.createHtmlDocument();
    inertElement = DOM.querySelector(doc, 'body');
    if (inertElement == null) {
        // usually there should be only one body element in the document, but IE doesn't have any, so we
        // need to create one.
        var html = DOM.createElement('html', doc);
        inertElement = DOM.createElement('body', doc);
        DOM.appendChild(html, inertElement);
        DOM.appendChild(doc, html);
    }
    return inertElement;
}
function tagSet(tags) {
    var res = {};
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = tags.split(',')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var t = _step.value;

            res[t.toLowerCase()] = true;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return res;
}
function merge() {
    var res = {};

    for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
        sets[_key] = arguments[_key];
    }

    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = sets[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var s = _step2.value;

            for (var v in s) {
                if (s.hasOwnProperty(v)) res[v] = true;
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }

    return res;
}
// Good source of info about elements and attributes
// http://dev.w3.org/html5/spec/Overview.html#semantics
// http://simon.html5.org/html-elements
// Safe Void Elements - HTML5
// http://dev.w3.org/html5/spec/Overview.html#void-elements
var VOID_ELEMENTS = tagSet('area,br,col,hr,img,wbr');
// Elements that you can, intentionally, leave open (and which close themselves)
// http://dev.w3.org/html5/spec/Overview.html#optional-tags
var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet('colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr');
var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet('rp,rt');
var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
// Safe Block Elements - HTML5
var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet('address,article,' + 'aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,' + 'h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,section,table,ul'));
// Inline Elements - HTML5
var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet('a,abbr,acronym,b,' + 'bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,' + 'samp,small,span,strike,strong,sub,sup,time,tt,u,var'));
var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
// Attributes that have href and hence need to be sanitized
var URI_ATTRS = tagSet('background,cite,href,longdesc,src,xlink:href');
var HTML_ATTRS = tagSet('abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,' + 'color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,' + 'ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,' + 'scope,scrolling,shape,size,span,start,summary,tabindex,target,title,type,' + 'valign,value,vspace,width');
// NB: This currently conciously doesn't support SVG. SVG sanitization has had several security
// issues in the past, so it seems safer to leave it out if possible. If support for binding SVG via
// innerHTML is required, SVG attributes should be added here.
// NB: Sanitization does not allow <form> elements or other active elements (<button> etc). Those
// can be sanitized, but they increase security surface area without a legitimate use case, so they
// are left out here.
var VALID_ATTRS = merge(URI_ATTRS, HTML_ATTRS);
/**
 * SanitizingHtmlSerializer serializes a DOM fragment, stripping out any unsafe elements and unsafe
 * attributes.
 */

var SanitizingHtmlSerializer = function () {
    function SanitizingHtmlSerializer() {
        _classCallCheck(this, SanitizingHtmlSerializer);

        this.buf = [];
    }

    _createClass(SanitizingHtmlSerializer, [{
        key: 'sanitizeChildren',
        value: function sanitizeChildren(el) {
            // This cannot use a TreeWalker, as it has to run on Angular's various DOM adapters.
            // However this code never accesses properties off of `document` before deleting its contents
            // again, so it shouldn't be vulnerable to DOM clobbering.
            var current = el.firstChild;
            while (current) {
                if (DOM.isElementNode(current)) {
                    this.startElement(current);
                } else if (DOM.isTextNode(current)) {
                    this.chars(DOM.nodeValue(current));
                }
                if (DOM.firstChild(current)) {
                    current = DOM.firstChild(current);
                    continue;
                }
                while (current) {
                    // Leaving the element. Walk up and to the right, closing tags as we go.
                    if (DOM.isElementNode(current)) {
                        this.endElement(DOM.nodeName(current).toLowerCase());
                    }
                    if (DOM.nextSibling(current)) {
                        current = DOM.nextSibling(current);
                        break;
                    }
                    current = DOM.parentElement(current);
                }
            }
            return this.buf.join('');
        }
    }, {
        key: 'startElement',
        value: function startElement(element) {
            var _this = this;

            var tagName = DOM.nodeName(element).toLowerCase();
            tagName = tagName.toLowerCase();
            if (VALID_ELEMENTS.hasOwnProperty(tagName)) {
                this.buf.push('<');
                this.buf.push(tagName);
                DOM.attributeMap(element).forEach(function (value, attrName) {
                    var lower = attrName.toLowerCase();
                    if (!VALID_ATTRS.hasOwnProperty(lower)) return;
                    // TODO(martinprobst): Special case image URIs for data:image/...
                    if (URI_ATTRS[lower]) value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__url_sanitizer__["a" /* sanitizeUrl */])(value);
                    _this.buf.push(' ');
                    _this.buf.push(attrName);
                    _this.buf.push('="');
                    _this.buf.push(encodeEntities(value));
                    _this.buf.push('"');
                });
                this.buf.push('>');
            }
        }
    }, {
        key: 'endElement',
        value: function endElement(tagName) {
            tagName = tagName.toLowerCase();
            if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
                this.buf.push('</');
                this.buf.push(tagName);
                this.buf.push('>');
            }
        }
    }, {
        key: 'chars',
        value: function chars(_chars /** TODO #9100 */) {
            this.buf.push(encodeEntities(_chars));
        }
    }]);

    return SanitizingHtmlSerializer;
}();
// Regular Expressions for parsing tags and attributes


var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
// ! to ~ is the ASCII range.
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
/**
 * Escapes all potentially dangerous characters, so that the
 * resulting string can be safely inserted into attribute or
 * element text.
 * @param value
 * @returns {string} escaped text
 */
function encodeEntities(value /** TODO #9100 */) {
    return value.replace(/&/g, '&amp;').replace(SURROGATE_PAIR_REGEXP, function (match /** TODO #9100 */) {
        var hi = match.charCodeAt(0);
        var low = match.charCodeAt(1);
        return '&#' + ((hi - 0xD800) * 0x400 + (low - 0xDC00) + 0x10000) + ';';
    }).replace(NON_ALPHANUMERIC_REGEXP, function (match /** TODO #9100 */) {
        return '&#' + match.charCodeAt(0) + ';';
    }).replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
/**
 * When IE9-11 comes across an unknown namespaced attribute e.g. 'xlink:foo' it adds 'xmlns:ns1'
 * attribute to declare ns1 namespace and prefixes the attribute with 'ns1' (e.g. 'ns1:xlink:foo').
 *
 * This is undesirable since we don't want to allow any of these custom attributes. This method
 * strips them all.
 */
function stripCustomNsAttrs(el) {
    DOM.attributeMap(el).forEach(function (_, attrName) {
        if (attrName === 'xmlns:ns1' || attrName.indexOf('ns1:') === 0) {
            DOM.removeAttribute(el, attrName);
        }
    });
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
        for (var _iterator3 = DOM.childNodesAsList(el)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var n = _step3.value;

            if (DOM.isElementNode(n)) stripCustomNsAttrs(n);
        }
    } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
            }
        } finally {
            if (_didIteratorError3) {
                throw _iteratorError3;
            }
        }
    }
}
/**
 * Sanitizes the given unsafe, untrusted HTML fragment, and returns HTML text that is safe to add to
 * the DOM in a browser environment.
 */
function sanitizeHtml(unsafeHtml) {
    try {
        var containerEl = getInertElement();
        // Make sure unsafeHtml is actually a string (TypeScript types are not enforced at runtime).
        unsafeHtml = unsafeHtml ? String(unsafeHtml) : '';
        // mXSS protection. Repeatedly parse the document to make sure it stabilizes, so that a browser
        // trying to auto-correct incorrect HTML cannot cause formerly inert HTML to become dangerous.
        var mXSSAttempts = 5;
        var parsedHtml = unsafeHtml;
        do {
            if (mXSSAttempts === 0) {
                throw new Error('Failed to sanitize html because the input is unstable');
            }
            mXSSAttempts--;
            unsafeHtml = parsedHtml;
            DOM.setInnerHTML(containerEl, unsafeHtml);
            if (DOM.defaultDoc().documentMode) {
                // strip custom-namespaced attributes on IE<=11
                stripCustomNsAttrs(containerEl);
            }
            parsedHtml = DOM.getInnerHTML(containerEl);
        } while (unsafeHtml !== parsedHtml);
        var sanitizer = new SanitizingHtmlSerializer();
        var safeHtml = sanitizer.sanitizeChildren(DOM.getTemplateContent(containerEl) || containerEl);
        // Clear out the body element.
        var parent = DOM.getTemplateContent(containerEl) || containerEl;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
            for (var _iterator4 = DOM.childNodesAsList(parent)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var child = _step4.value;

                DOM.removeChild(parent, child);
            }
        } catch (err) {
            _didIteratorError4 = true;
            _iteratorError4 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                    _iterator4.return();
                }
            } finally {
                if (_didIteratorError4) {
                    throw _iteratorError4;
                }
            }
        }

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* isDevMode */])() && safeHtml !== unsafeHtml) {
            DOM.log('WARNING: sanitizing HTML stripped some content.');
        }
        return safeHtml;
    } catch (e) {
        // In case anything goes wrong, clear out inertElement to reset the entire DOM structure.
        inertElement = null;
        throw e;
    }
}
//# sourceMappingURL=html_sanitizer.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__url_sanitizer__ = __webpack_require__(154);
/* harmony export */ exports["a"] = sanitizeStyle;


/**
 * Regular expression for safe style values.
 *
 * Quotes (" and ') are allowed, but a check must be done elsewhere to ensure they're balanced.
 *
 * ',' allows multiple values to be assigned to the same property (e.g. background-attachment or
 * font-family) and hence could allow multiple values to get injected, but that should pose no risk
 * of XSS.
 *
 * The function expression checks only for XSS safety, not for CSS validity.
 *
 * This regular expression was taken from the Closure sanitization library, and augmented for
 * transformation values.
 */
var VALUES = '[-,."\'%_!# a-zA-Z0-9]+';
var TRANSFORMATION_FNS = '(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?';
var COLOR_FNS = '(?:rgb|hsl)a?';
var FN_ARGS = '\\([-0-9.%, a-zA-Z]+\\)';
var SAFE_STYLE_VALUE = new RegExp('^(' + VALUES + '|(?:' + TRANSFORMATION_FNS + '|' + COLOR_FNS + ')' + FN_ARGS + ')$', 'g');
/**
 * Matches a `url(...)` value with an arbitrary argument as long as it does
 * not contain parentheses.
 *
 * The URL value still needs to be sanitized separately.
 *
 * `url(...)` values are a very common use case, e.g. for `background-image`. With carefully crafted
 * CSS style rules, it is possible to construct an information leak with `url` values in CSS, e.g.
 * by observing whether scroll bars are displayed, or character ranges used by a font face
 * definition.
 *
 * Angular only allows binding CSS values (as opposed to entire CSS rules), so it is unlikely that
 * binding a URL value without further cooperation from the page will cause an information leak, and
 * if so, it is just a leak, not a full blown XSS vulnerability.
 *
 * Given the common use case, low likelihood of attack vector, and low impact of an attack, this
 * code is permissive and allows URLs that sanitize otherwise.
 */
var URL_RE = /^url\(([^)]+)\)$/;
/**
 * Checks that quotes (" and ') are properly balanced inside a string. Assumes
 * that neither escape (\) nor any other character that could result in
 * breaking out of a string parsing context are allowed;
 * see http://www.w3.org/TR/css3-syntax/#string-token-diagram.
 *
 * This code was taken from the Closure sanitization library.
 */
function hasBalancedQuotes(value) {
    var outsideSingle = true;
    var outsideDouble = true;
    for (var i = 0; i < value.length; i++) {
        var c = value.charAt(i);
        if (c === '\'' && outsideDouble) {
            outsideSingle = !outsideSingle;
        } else if (c === '"' && outsideSingle) {
            outsideDouble = !outsideDouble;
        }
    }
    return outsideSingle && outsideDouble;
}
/**
 * Sanitizes the given untrusted CSS style property value (i.e. not an entire object, just a single
 * value) and returns a value that is safe to use in a browser environment.
 */
function sanitizeStyle(value) {
    value = String(value).trim(); // Make sure it's actually a string.
    // Single url(...) values are supported, but only for URLs that sanitize cleanly. See above for
    // reasoning behind this.
    var urlMatch = URL_RE.exec(value);
    if (urlMatch && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__url_sanitizer__["a" /* sanitizeUrl */])(urlMatch[1]) === urlMatch[1] || value.match(SAFE_STYLE_VALUE) && hasBalancedQuotes(value)) {
        return value; // Safe style values.
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* isDevMode */])()) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_dom_adapter__["getDOM"])().log('WARNING: sanitizing unsafe style value ' + value);
    return 'unsafe';
}
//# sourceMappingURL=style_sanitizer.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_async__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_exceptions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__event_serializer__ = __webpack_require__(333);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return EventDispatcher; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var EventDispatcher = function () {
    function EventDispatcher(_sink, _serializer) {
        _classCallCheck(this, EventDispatcher);

        this._sink = _sink;
        this._serializer = _serializer;
    }

    _createClass(EventDispatcher, [{
        key: 'dispatchRenderEvent',
        value: function dispatchRenderEvent(element, eventTarget, eventName, event) {
            var serializedEvent;
            // TODO (jteplitz602): support custom events #3350
            switch (event.type) {
                case 'click':
                case 'mouseup':
                case 'mousedown':
                case 'dblclick':
                case 'contextmenu':
                case 'mouseenter':
                case 'mouseleave':
                case 'mousemove':
                case 'mouseout':
                case 'mouseover':
                case 'show':
                    serializedEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__event_serializer__["a" /* serializeMouseEvent */])(event);
                    break;
                case 'keydown':
                case 'keypress':
                case 'keyup':
                    serializedEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__event_serializer__["b" /* serializeKeyboardEvent */])(event);
                    break;
                case 'input':
                case 'change':
                case 'blur':
                    serializedEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__event_serializer__["c" /* serializeEventWithTarget */])(event);
                    break;
                case 'abort':
                case 'afterprint':
                case 'beforeprint':
                case 'cached':
                case 'canplay':
                case 'canplaythrough':
                case 'chargingchange':
                case 'chargingtimechange':
                case 'close':
                case 'dischargingtimechange':
                case 'DOMContentLoaded':
                case 'downloading':
                case 'durationchange':
                case 'emptied':
                case 'ended':
                case 'error':
                case 'fullscreenchange':
                case 'fullscreenerror':
                case 'invalid':
                case 'languagechange':
                case 'levelfchange':
                case 'loadeddata':
                case 'loadedmetadata':
                case 'obsolete':
                case 'offline':
                case 'online':
                case 'open':
                case 'orientatoinchange':
                case 'pause':
                case 'pointerlockchange':
                case 'pointerlockerror':
                case 'play':
                case 'playing':
                case 'ratechange':
                case 'readystatechange':
                case 'reset':
                case 'scroll':
                case 'seeked':
                case 'seeking':
                case 'stalled':
                case 'submit':
                case 'success':
                case 'suspend':
                case 'timeupdate':
                case 'updateready':
                case 'visibilitychange':
                case 'volumechange':
                case 'waiting':
                    serializedEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__event_serializer__["d" /* serializeGenericEvent */])(event);
                    break;
                case 'transitionend':
                    serializedEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__event_serializer__["e" /* serializeTransitionEvent */])(event);
                    break;
                default:
                    throw new __WEBPACK_IMPORTED_MODULE_1__facade_exceptions__["a" /* BaseException */](eventName + ' not supported on WebWorkers');
            }
            __WEBPACK_IMPORTED_MODULE_0__facade_async__["a" /* ObservableWrapper */].callEmit(this._sink, {
                'element': this._serializer.serialize(element, __WEBPACK_IMPORTED_MODULE_2__shared_serializer__["c" /* RenderStoreObject */]),
                'eventName': eventName,
                'eventTarget': eventTarget,
                'event': serializedEvent
            });
            // TODO(kegluneq): Eventually, we want the user to indicate from the UI side whether the event
            // should be canceled, but for now just call `preventDefault` on the original DOM event.
            return false;
        }
    }]);

    return EventDispatcher;
}();
//# sourceMappingURL=event_dispatcher.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(8);
/* harmony export */ exports["d"] = serializeGenericEvent;/* harmony export */ exports["c"] = serializeEventWithTarget;/* harmony export */ exports["a"] = serializeMouseEvent;/* harmony export */ exports["b"] = serializeKeyboardEvent;/* harmony export */ exports["e"] = serializeTransitionEvent;

var MOUSE_EVENT_PROPERTIES = ['altKey', 'button', 'clientX', 'clientY', 'metaKey', 'movementX', 'movementY', 'offsetX', 'offsetY', 'region', 'screenX', 'screenY', 'shiftKey'];
var KEYBOARD_EVENT_PROPERTIES = ['altkey', 'charCode', 'code', 'ctrlKey', 'isComposing', 'key', 'keyCode', 'location', 'metaKey', 'repeat', 'shiftKey', 'which'];
var TRANSITION_EVENT_PROPERTIES = ['propertyName', 'elapsedTime', 'pseudoElement'];
var EVENT_PROPERTIES = ['type', 'bubbles', 'cancelable'];
var NODES_WITH_VALUE = new __WEBPACK_IMPORTED_MODULE_0__facade_collection__["f" /* Set */](['input', 'select', 'option', 'button', 'li', 'meter', 'progress', 'param', 'textarea']);
function serializeGenericEvent(e) {
    return serializeEvent(e, EVENT_PROPERTIES);
}
// TODO(jteplitz602): Allow users to specify the properties they need rather than always
// adding value and files #3374
function serializeEventWithTarget(e) {
    var serializedEvent = serializeEvent(e, EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
}
function serializeMouseEvent(e) {
    return serializeEvent(e, MOUSE_EVENT_PROPERTIES);
}
function serializeKeyboardEvent(e) {
    var serializedEvent = serializeEvent(e, KEYBOARD_EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
}
function serializeTransitionEvent(e) {
    var serializedEvent = serializeEvent(e, TRANSITION_EVENT_PROPERTIES);
    return addTarget(e, serializedEvent);
}
// TODO(jteplitz602): #3374. See above.
function addTarget(e, serializedEvent) {
    if (NODES_WITH_VALUE.has(e.target.tagName.toLowerCase())) {
        var target = e.target;
        serializedEvent['target'] = { 'value': target.value };
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__facade_lang__["b" /* isPresent */])(target.files)) {
            serializedEvent['target']['files'] = target.files;
        }
    }
    return serializedEvent;
}
function serializeEvent(e, properties) {
    var serialized = {};
    for (var i = 0; i < properties.length; i++) {
        var prop = properties[i];
        serialized[prop] = e[prop];
    }
    return serialized;
}
//# sourceMappingURL=event_serializer.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_location_browser_platform_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_location__ = __webpack_require__(335);
/* unused harmony export WORKER_UI_LOCATION_PROVIDERS */


/**
 * A list of {@link Provider}s. To use the router in a Worker enabled application you must
 * include these providers when setting up the render thread.
 * @experimental
 */
var WORKER_UI_LOCATION_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_2__platform_location__["a" /* MessageBasedPlatformLocation */], __WEBPACK_IMPORTED_MODULE_1__browser_location_browser_platform_location__["a" /* BrowserPlatformLocation */], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* APP_INITIALIZER */], useFactory: initUiLocation, multi: true, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Injector */]] }];
function initUiLocation(injector) {
    return function () {
        var zone = injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* NgZone */]);
        zone.runGuarded(function () {
            return injector.get(__WEBPACK_IMPORTED_MODULE_2__platform_location__["a" /* MessageBasedPlatformLocation */]).start();
        });
    };
}
//# sourceMappingURL=location_providers.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browser_location_browser_platform_location__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_async__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_messaging_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_serialized_types__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_service_message_broker__ = __webpack_require__(82);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return MessageBasedPlatformLocation; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }










var MessageBasedPlatformLocation = function () {
    function MessageBasedPlatformLocation(_brokerFactory, _platformLocation, bus, _serializer) {
        _classCallCheck(this, MessageBasedPlatformLocation);

        this._brokerFactory = _brokerFactory;
        this._platformLocation = _platformLocation;
        this._serializer = _serializer;
        this._platformLocation.onPopState(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._sendUrlChangeEvent, this));
        this._platformLocation.onHashChange(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._sendUrlChangeEvent, this));
        this._broker = this._brokerFactory.createMessageBroker(__WEBPACK_IMPORTED_MODULE_5__shared_messaging_api__["a" /* ROUTER_CHANNEL */]);
        this._channelSink = bus.to(__WEBPACK_IMPORTED_MODULE_5__shared_messaging_api__["a" /* ROUTER_CHANNEL */]);
    }

    _createClass(MessageBasedPlatformLocation, [{
        key: 'start',
        value: function start() {
            this._broker.registerMethod('getLocation', null, __WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._getLocation, this), __WEBPACK_IMPORTED_MODULE_6__shared_serialized_types__["a" /* LocationType */]);
            this._broker.registerMethod('setPathname', [__WEBPACK_IMPORTED_MODULE_7__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._setPathname, this));
            this._broker.registerMethod('pushState', [__WEBPACK_IMPORTED_MODULE_7__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_7__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_7__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._platformLocation.pushState, this._platformLocation));
            this._broker.registerMethod('replaceState', [__WEBPACK_IMPORTED_MODULE_7__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_7__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_7__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._platformLocation.replaceState, this._platformLocation));
            this._broker.registerMethod('forward', null, __WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._platformLocation.forward, this._platformLocation));
            this._broker.registerMethod('back', null, __WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].bind(this._platformLocation.back, this._platformLocation));
        }
    }, {
        key: '_getLocation',
        value: function _getLocation() {
            return __WEBPACK_IMPORTED_MODULE_2__facade_async__["b" /* PromiseWrapper */].resolve(this._platformLocation.location);
        }
    }, {
        key: '_sendUrlChangeEvent',
        value: function _sendUrlChangeEvent(e) {
            var loc = this._serializer.serialize(this._platformLocation.location, __WEBPACK_IMPORTED_MODULE_6__shared_serialized_types__["a" /* LocationType */]);
            var serializedEvent = { 'type': e.type };
            __WEBPACK_IMPORTED_MODULE_2__facade_async__["a" /* ObservableWrapper */].callEmit(this._channelSink, { 'event': serializedEvent, 'location': loc });
        }
    }, {
        key: '_setPathname',
        value: function _setPathname(pathname) {
            this._platformLocation.pathname = pathname;
        }
    }]);

    return MessageBasedPlatformLocation;
}();
/** @nocollapse */
MessageBasedPlatformLocation.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
MessageBasedPlatformLocation.ctorParameters = [{ type: __WEBPACK_IMPORTED_MODULE_8__shared_service_message_broker__["a" /* ServiceMessageBrokerFactory */] }, { type: __WEBPACK_IMPORTED_MODULE_1__browser_location_browser_platform_location__["a" /* BrowserPlatformLocation */] }, { type: __WEBPACK_IMPORTED_MODULE_4__shared_message_bus__["MessageBus"] }, { type: __WEBPACK_IMPORTED_MODULE_7__shared_serializer__["a" /* Serializer */] }];
//# sourceMappingURL=platform_location.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_messaging_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_render_store__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_service_message_broker__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ui_event_dispatcher__ = __webpack_require__(332);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return MessageBasedRenderer; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var MessageBasedRenderer = function () {
    function MessageBasedRenderer(_brokerFactory, _bus, _serializer, _renderStore, _rootRenderer) {
        _classCallCheck(this, MessageBasedRenderer);

        this._brokerFactory = _brokerFactory;
        this._bus = _bus;
        this._serializer = _serializer;
        this._renderStore = _renderStore;
        this._rootRenderer = _rootRenderer;
    }

    _createClass(MessageBasedRenderer, [{
        key: 'start',
        value: function start() {
            var broker = this._brokerFactory.createMessageBroker(__WEBPACK_IMPORTED_MODULE_3__shared_messaging_api__["b" /* RENDERER_CHANNEL */]);
            this._bus.initChannel(__WEBPACK_IMPORTED_MODULE_3__shared_messaging_api__["c" /* EVENT_CHANNEL */]);
            this._eventDispatcher = new __WEBPACK_IMPORTED_MODULE_7__ui_event_dispatcher__["a" /* EventDispatcher */](this._bus.to(__WEBPACK_IMPORTED_MODULE_3__shared_messaging_api__["c" /* EVENT_CHANNEL */]), this._serializer);
            broker.registerMethod('renderComponent', [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RenderComponentType */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._renderComponent, this));
            broker.registerMethod('selectRootElement', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._selectRootElement, this));
            broker.registerMethod('createElement', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._createElement, this));
            broker.registerMethod('createViewRoot', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._createViewRoot, this));
            broker.registerMethod('createTemplateAnchor', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._createTemplateAnchor, this));
            broker.registerMethod('createText', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._createText, this));
            broker.registerMethod('projectNodes', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._projectNodes, this));
            broker.registerMethod('attachViewAfter', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._attachViewAfter, this));
            broker.registerMethod('detachView', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._detachView, this));
            broker.registerMethod('destroyView', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._destroyView, this));
            broker.registerMethod('setElementProperty', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._setElementProperty, this));
            broker.registerMethod('setElementAttribute', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._setElementAttribute, this));
            broker.registerMethod('setBindingDebugInfo', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._setBindingDebugInfo, this));
            broker.registerMethod('setElementClass', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._setElementClass, this));
            broker.registerMethod('setElementStyle', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._setElementStyle, this));
            broker.registerMethod('invokeElementMethod', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._invokeElementMethod, this));
            broker.registerMethod('setText', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._setText, this));
            broker.registerMethod('listen', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._listen, this));
            broker.registerMethod('listenGlobal', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["b" /* PRIMITIVE */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._listenGlobal, this));
            broker.registerMethod('listenDone', [__WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */], __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["c" /* RenderStoreObject */]], __WEBPACK_IMPORTED_MODULE_1__facade_lang__["t" /* FunctionWrapper */].bind(this._listenDone, this));
        }
    }, {
        key: '_renderComponent',
        value: function _renderComponent(renderComponentType, rendererId) {
            var renderer = this._rootRenderer.renderComponent(renderComponentType);
            this._renderStore.store(renderer, rendererId);
        }
    }, {
        key: '_selectRootElement',
        value: function _selectRootElement(renderer, selector, elId) {
            this._renderStore.store(renderer.selectRootElement(selector, null), elId);
        }
    }, {
        key: '_createElement',
        value: function _createElement(renderer, parentElement, name, elId) {
            this._renderStore.store(renderer.createElement(parentElement, name, null), elId);
        }
    }, {
        key: '_createViewRoot',
        value: function _createViewRoot(renderer, hostElement, elId) {
            var viewRoot = renderer.createViewRoot(hostElement);
            if (this._renderStore.serialize(hostElement) !== elId) {
                this._renderStore.store(viewRoot, elId);
            }
        }
    }, {
        key: '_createTemplateAnchor',
        value: function _createTemplateAnchor(renderer, parentElement, elId) {
            this._renderStore.store(renderer.createTemplateAnchor(parentElement, null), elId);
        }
    }, {
        key: '_createText',
        value: function _createText(renderer, parentElement, value, elId) {
            this._renderStore.store(renderer.createText(parentElement, value, null), elId);
        }
    }, {
        key: '_projectNodes',
        value: function _projectNodes(renderer, parentElement, nodes) {
            renderer.projectNodes(parentElement, nodes);
        }
    }, {
        key: '_attachViewAfter',
        value: function _attachViewAfter(renderer, node, viewRootNodes) {
            renderer.attachViewAfter(node, viewRootNodes);
        }
    }, {
        key: '_detachView',
        value: function _detachView(renderer, viewRootNodes) {
            renderer.detachView(viewRootNodes);
        }
    }, {
        key: '_destroyView',
        value: function _destroyView(renderer, hostElement, viewAllNodes) {
            renderer.destroyView(hostElement, viewAllNodes);
            for (var i = 0; i < viewAllNodes.length; i++) {
                this._renderStore.remove(viewAllNodes[i]);
            }
        }
    }, {
        key: '_setElementProperty',
        value: function _setElementProperty(renderer, renderElement, propertyName, propertyValue) {
            renderer.setElementProperty(renderElement, propertyName, propertyValue);
        }
    }, {
        key: '_setElementAttribute',
        value: function _setElementAttribute(renderer, renderElement, attributeName, attributeValue) {
            renderer.setElementAttribute(renderElement, attributeName, attributeValue);
        }
    }, {
        key: '_setBindingDebugInfo',
        value: function _setBindingDebugInfo(renderer, renderElement, propertyName, propertyValue) {
            renderer.setBindingDebugInfo(renderElement, propertyName, propertyValue);
        }
    }, {
        key: '_setElementClass',
        value: function _setElementClass(renderer, renderElement, className, isAdd) {
            renderer.setElementClass(renderElement, className, isAdd);
        }
    }, {
        key: '_setElementStyle',
        value: function _setElementStyle(renderer, renderElement, styleName, styleValue) {
            renderer.setElementStyle(renderElement, styleName, styleValue);
        }
    }, {
        key: '_invokeElementMethod',
        value: function _invokeElementMethod(renderer, renderElement, methodName, args) {
            renderer.invokeElementMethod(renderElement, methodName, args);
        }
    }, {
        key: '_setText',
        value: function _setText(renderer, renderNode, text) {
            renderer.setText(renderNode, text);
        }
    }, {
        key: '_listen',
        value: function _listen(renderer, renderElement, eventName, unlistenId) {
            var _this = this;

            var unregisterCallback = renderer.listen(renderElement, eventName, function (event /** TODO #9100 */) {
                return _this._eventDispatcher.dispatchRenderEvent(renderElement, null, eventName, event);
            });
            this._renderStore.store(unregisterCallback, unlistenId);
        }
    }, {
        key: '_listenGlobal',
        value: function _listenGlobal(renderer, eventTarget, eventName, unlistenId) {
            var _this2 = this;

            var unregisterCallback = renderer.listenGlobal(eventTarget, eventName, function (event /** TODO #9100 */) {
                return _this2._eventDispatcher.dispatchRenderEvent(null, eventTarget, eventName, event);
            });
            this._renderStore.store(unregisterCallback, unlistenId);
        }
    }, {
        key: '_listenDone',
        value: function _listenDone(renderer, unlistenCallback) {
            unlistenCallback();
        }
    }]);

    return MessageBasedRenderer;
}();
/** @nocollapse */
MessageBasedRenderer.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
MessageBasedRenderer.ctorParameters = [{ type: __WEBPACK_IMPORTED_MODULE_6__shared_service_message_broker__["a" /* ServiceMessageBrokerFactory */] }, { type: __WEBPACK_IMPORTED_MODULE_2__shared_message_bus__["MessageBus"] }, { type: __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["a" /* Serializer */] }, { type: __WEBPACK_IMPORTED_MODULE_4__shared_render_store__["a" /* RenderStore */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* RootRenderer */] }];
//# sourceMappingURL=renderer.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_location__ = __webpack_require__(338);
/* unused harmony export WORKER_APP_LOCATION_PROVIDERS */


/**
 * Those providers should be added when the router is used in a worker context in addition to the
 * {@link ROUTER_PROVIDERS} and after them.
 * @experimental
 */
var WORKER_APP_LOCATION_PROVIDERS = [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* PlatformLocation */], useClass: __WEBPACK_IMPORTED_MODULE_2__platform_location__["a" /* WebWorkerPlatformLocation */] }, {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* APP_INITIALIZER */],
    useFactory: appInitFnFactory,
    multi: true,
    deps: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* PlatformLocation */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* NgZone */]]
}];
function appInitFnFactory(platformLocation, zone) {
    return function () {
        return zone.runGuarded(function () {
            return platformLocation.init();
        });
    };
}
//# sourceMappingURL=location_providers.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_async__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facade_exceptions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_messaging_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_serialized_types__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__event_deserializer__ = __webpack_require__(248);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return WebWorkerPlatformLocation; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }













var WebWorkerPlatformLocation = function (_PlatformLocation) {
    _inherits(WebWorkerPlatformLocation, _PlatformLocation);

    function WebWorkerPlatformLocation(brokerFactory, bus, _serializer) {
        _classCallCheck(this, WebWorkerPlatformLocation);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(WebWorkerPlatformLocation).call(this));

        _this._serializer = _serializer;
        _this._popStateListeners = [];
        _this._hashChangeListeners = [];
        _this._location = null;
        _this._broker = brokerFactory.createMessageBroker(__WEBPACK_IMPORTED_MODULE_8__shared_messaging_api__["a" /* ROUTER_CHANNEL */]);
        _this._channelSource = bus.from(__WEBPACK_IMPORTED_MODULE_8__shared_messaging_api__["a" /* ROUTER_CHANNEL */]);
        __WEBPACK_IMPORTED_MODULE_2__facade_async__["a" /* ObservableWrapper */].subscribe(_this._channelSource, function (msg) {
            var listeners = null;
            if (__WEBPACK_IMPORTED_MODULE_3__facade_collection__["d" /* StringMapWrapper */].contains(msg, 'event')) {
                var type = msg['event']['type'];
                if (__WEBPACK_IMPORTED_MODULE_5__facade_lang__["h" /* StringWrapper */].equals(type, 'popstate')) {
                    listeners = _this._popStateListeners;
                } else if (__WEBPACK_IMPORTED_MODULE_5__facade_lang__["h" /* StringWrapper */].equals(type, 'hashchange')) {
                    listeners = _this._hashChangeListeners;
                }
                if (listeners !== null) {
                    (function () {
                        var e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__event_deserializer__["a" /* deserializeGenericEvent */])(msg['event']);
                        // There was a popState or hashChange event, so the location object thas been updated
                        _this._location = _this._serializer.deserialize(msg['location'], __WEBPACK_IMPORTED_MODULE_9__shared_serialized_types__["a" /* LocationType */]);
                        listeners.forEach(function (fn) {
                            return fn(e);
                        });
                    })();
                }
            }
        });
        return _this;
    }
    /** @internal **/


    _createClass(WebWorkerPlatformLocation, [{
        key: 'init',
        value: function init() {
            var _this2 = this;

            var args = new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["a" /* UiArguments */]('getLocation');
            var locationPromise = this._broker.runOnService(args, __WEBPACK_IMPORTED_MODULE_9__shared_serialized_types__["a" /* LocationType */]);
            return __WEBPACK_IMPORTED_MODULE_2__facade_async__["b" /* PromiseWrapper */].then(locationPromise, function (val) {
                _this2._location = val;
                return true;
            }, function (err) {
                throw new __WEBPACK_IMPORTED_MODULE_4__facade_exceptions__["a" /* BaseException */](err);
            });
        }
    }, {
        key: 'getBaseHrefFromDOM',
        value: function getBaseHrefFromDOM() {
            throw new __WEBPACK_IMPORTED_MODULE_4__facade_exceptions__["a" /* BaseException */]('Attempt to get base href from DOM from WebWorker. You must either provide a value for the APP_BASE_HREF token through DI or use the hash location strategy.');
        }
    }, {
        key: 'onPopState',
        value: function onPopState(fn) {
            this._popStateListeners.push(fn);
        }
    }, {
        key: 'onHashChange',
        value: function onHashChange(fn) {
            this._hashChangeListeners.push(fn);
        }
    }, {
        key: 'pushState',
        value: function pushState(state, title, url) {
            var fnArgs = [new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["b" /* FnArg */](state, __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["b" /* PRIMITIVE */]), new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["b" /* FnArg */](title, __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["b" /* PRIMITIVE */]), new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["b" /* FnArg */](url, __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["b" /* PRIMITIVE */])];
            var args = new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["a" /* UiArguments */]('pushState', fnArgs);
            this._broker.runOnService(args, null);
        }
    }, {
        key: 'replaceState',
        value: function replaceState(state, title, url) {
            var fnArgs = [new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["b" /* FnArg */](state, __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["b" /* PRIMITIVE */]), new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["b" /* FnArg */](title, __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["b" /* PRIMITIVE */]), new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["b" /* FnArg */](url, __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["b" /* PRIMITIVE */])];
            var args = new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["a" /* UiArguments */]('replaceState', fnArgs);
            this._broker.runOnService(args, null);
        }
    }, {
        key: 'forward',
        value: function forward() {
            var args = new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["a" /* UiArguments */]('forward');
            this._broker.runOnService(args, null);
        }
    }, {
        key: 'back',
        value: function back() {
            var args = new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["a" /* UiArguments */]('back');
            this._broker.runOnService(args, null);
        }
    }, {
        key: 'pathname',
        get: function get() {
            if (this._location === null) {
                return null;
            }
            return this._location.pathname;
        },
        set: function set(newPath) {
            if (this._location === null) {
                throw new __WEBPACK_IMPORTED_MODULE_4__facade_exceptions__["a" /* BaseException */]('Attempt to set pathname before value is obtained from UI');
            }
            this._location.pathname = newPath;
            var fnArgs = [new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["b" /* FnArg */](newPath, __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["b" /* PRIMITIVE */])];
            var args = new __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["a" /* UiArguments */]('setPathname', fnArgs);
            this._broker.runOnService(args, null);
        }
    }, {
        key: 'search',
        get: function get() {
            if (this._location === null) {
                return null;
            }
            return this._location.search;
        }
    }, {
        key: 'hash',
        get: function get() {
            if (this._location === null) {
                return null;
            }
            return this._location.hash;
        }
    }]);

    return WebWorkerPlatformLocation;
}(__WEBPACK_IMPORTED_MODULE_0__angular_common__["a" /* PlatformLocation */]);
/** @nocollapse */
WebWorkerPlatformLocation.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
WebWorkerPlatformLocation.ctorParameters = [{ type: __WEBPACK_IMPORTED_MODULE_6__shared_client_message_broker__["c" /* ClientMessageBrokerFactory */] }, { type: __WEBPACK_IMPORTED_MODULE_7__shared_message_bus__["MessageBus"] }, { type: __WEBPACK_IMPORTED_MODULE_10__shared_serializer__["a" /* Serializer */] }];
//# sourceMappingURL=platform_location.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_async__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_messaging_api__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_render_store__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__event_deserializer__ = __webpack_require__(248);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return WebWorkerRootRenderer; });/* unused harmony export WebWorkerRenderer *//* unused harmony export NamedEventEmitter *//* unused harmony export WebWorkerRenderNode */var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var WebWorkerRootRenderer = function () {
    function WebWorkerRootRenderer(messageBrokerFactory, bus, _serializer, _renderStore) {
        var _this = this;

        _classCallCheck(this, WebWorkerRootRenderer);

        this._serializer = _serializer;
        this._renderStore = _renderStore;
        this.globalEvents = new NamedEventEmitter();
        this._componentRenderers = new Map();
        this._messageBroker = messageBrokerFactory.createMessageBroker(__WEBPACK_IMPORTED_MODULE_6__shared_messaging_api__["b" /* RENDERER_CHANNEL */]);
        bus.initChannel(__WEBPACK_IMPORTED_MODULE_6__shared_messaging_api__["c" /* EVENT_CHANNEL */]);
        var source = bus.from(__WEBPACK_IMPORTED_MODULE_6__shared_messaging_api__["c" /* EVENT_CHANNEL */]);
        __WEBPACK_IMPORTED_MODULE_1__facade_async__["a" /* ObservableWrapper */].subscribe(source, function (message) {
            return _this._dispatchEvent(message);
        });
    }

    _createClass(WebWorkerRootRenderer, [{
        key: '_dispatchEvent',
        value: function _dispatchEvent(message) {
            var eventName = message['eventName'];
            var target = message['eventTarget'];
            var event = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__event_deserializer__["a" /* deserializeGenericEvent */])(message['event']);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(target)) {
                this.globalEvents.dispatchEvent(eventNameWithTarget(target, eventName), event);
            } else {
                var element = this._serializer.deserialize(message['element'], __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]);
                element.events.dispatchEvent(eventName, event);
            }
        }
    }, {
        key: 'renderComponent',
        value: function renderComponent(componentType) {
            var result = this._componentRenderers.get(componentType.id);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["a" /* isBlank */])(result)) {
                result = new WebWorkerRenderer(this, componentType);
                this._componentRenderers.set(componentType.id, result);
                var id = this._renderStore.allocateId();
                this._renderStore.store(result, id);
                this.runOnService('renderComponent', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](componentType, __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* RenderComponentType */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](result, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
            }
            return result;
        }
    }, {
        key: 'runOnService',
        value: function runOnService(fnName, fnArgs) {
            var args = new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["a" /* UiArguments */](fnName, fnArgs);
            this._messageBroker.runOnService(args, null);
        }
    }, {
        key: 'allocateNode',
        value: function allocateNode() {
            var result = new WebWorkerRenderNode();
            var id = this._renderStore.allocateId();
            this._renderStore.store(result, id);
            return result;
        }
    }, {
        key: 'allocateId',
        value: function allocateId() {
            return this._renderStore.allocateId();
        }
    }, {
        key: 'destroyNodes',
        value: function destroyNodes(nodes) {
            for (var i = 0; i < nodes.length; i++) {
                this._renderStore.remove(nodes[i]);
            }
        }
    }]);

    return WebWorkerRootRenderer;
}();
/** @nocollapse */
WebWorkerRootRenderer.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
WebWorkerRootRenderer.ctorParameters = [{ type: __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["c" /* ClientMessageBrokerFactory */] }, { type: __WEBPACK_IMPORTED_MODULE_5__shared_message_bus__["MessageBus"] }, { type: __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["a" /* Serializer */] }, { type: __WEBPACK_IMPORTED_MODULE_7__shared_render_store__["a" /* RenderStore */] }];
var WebWorkerRenderer = function () {
    function WebWorkerRenderer(_rootRenderer, _componentType) {
        _classCallCheck(this, WebWorkerRenderer);

        this._rootRenderer = _rootRenderer;
        this._componentType = _componentType;
    }

    _createClass(WebWorkerRenderer, [{
        key: '_runOnService',
        value: function _runOnService(fnName, fnArgs) {
            var fnArgsWithRenderer = [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](this, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])].concat(fnArgs);
            this._rootRenderer.runOnService(fnName, fnArgsWithRenderer);
        }
    }, {
        key: 'selectRootElement',
        value: function selectRootElement(selectorOrNode, debugInfo) {
            var node = this._rootRenderer.allocateNode();
            this._runOnService('selectRootElement', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](selectorOrNode, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](node, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
            return node;
        }
    }, {
        key: 'createElement',
        value: function createElement(parentElement, name, debugInfo) {
            var node = this._rootRenderer.allocateNode();
            this._runOnService('createElement', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](parentElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](name, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](node, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
            return node;
        }
    }, {
        key: 'createViewRoot',
        value: function createViewRoot(hostElement) {
            var viewRoot = this._componentType.encapsulation === __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewEncapsulation */].Native ? this._rootRenderer.allocateNode() : hostElement;
            this._runOnService('createViewRoot', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](hostElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](viewRoot, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
            return viewRoot;
        }
    }, {
        key: 'createTemplateAnchor',
        value: function createTemplateAnchor(parentElement, debugInfo) {
            var node = this._rootRenderer.allocateNode();
            this._runOnService('createTemplateAnchor', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](parentElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](node, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
            return node;
        }
    }, {
        key: 'createText',
        value: function createText(parentElement, value, debugInfo) {
            var node = this._rootRenderer.allocateNode();
            this._runOnService('createText', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](parentElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](value, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](node, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
            return node;
        }
    }, {
        key: 'projectNodes',
        value: function projectNodes(parentElement, nodes) {
            this._runOnService('projectNodes', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](parentElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](nodes, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
        }
    }, {
        key: 'attachViewAfter',
        value: function attachViewAfter(node, viewRootNodes) {
            this._runOnService('attachViewAfter', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](node, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](viewRootNodes, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
        }
    }, {
        key: 'detachView',
        value: function detachView(viewRootNodes) {
            this._runOnService('detachView', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](viewRootNodes, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
        }
    }, {
        key: 'destroyView',
        value: function destroyView(hostElement, viewAllNodes) {
            this._runOnService('destroyView', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](hostElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](viewAllNodes, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */])]);
            this._rootRenderer.destroyNodes(viewAllNodes);
        }
    }, {
        key: 'setElementProperty',
        value: function setElementProperty(renderElement, propertyName, propertyValue) {
            this._runOnService('setElementProperty', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](propertyName, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](propertyValue, null)]);
        }
    }, {
        key: 'setElementAttribute',
        value: function setElementAttribute(renderElement, attributeName, attributeValue) {
            this._runOnService('setElementAttribute', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](attributeName, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](attributeValue, null)]);
        }
    }, {
        key: 'setBindingDebugInfo',
        value: function setBindingDebugInfo(renderElement, propertyName, propertyValue) {
            this._runOnService('setBindingDebugInfo', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](propertyName, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](propertyValue, null)]);
        }
    }, {
        key: 'setElementClass',
        value: function setElementClass(renderElement, className, isAdd) {
            this._runOnService('setElementClass', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](className, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](isAdd, null)]);
        }
    }, {
        key: 'setElementStyle',
        value: function setElementStyle(renderElement, styleName, styleValue) {
            this._runOnService('setElementStyle', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](styleName, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](styleValue, null)]);
        }
    }, {
        key: 'invokeElementMethod',
        value: function invokeElementMethod(renderElement, methodName, args) {
            this._runOnService('invokeElementMethod', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](methodName, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](args, null)]);
        }
    }, {
        key: 'setText',
        value: function setText(renderNode, text) {
            this._runOnService('setText', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderNode, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](text, null)]);
        }
    }, {
        key: 'listen',
        value: function listen(renderElement, name, callback) {
            var _this2 = this;

            renderElement.events.listen(name, callback);
            var unlistenCallbackId = this._rootRenderer.allocateId();
            this._runOnService('listen', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](renderElement, __WEBPACK_IMPORTED_MODULE_8__shared_serializer__["c" /* RenderStoreObject */]), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](name, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](unlistenCallbackId, null)]);
            return function () {
                renderElement.events.unlisten(name, callback);
                _this2._runOnService('listenDone', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](unlistenCallbackId, null)]);
            };
        }
    }, {
        key: 'listenGlobal',
        value: function listenGlobal(target, name, callback) {
            var _this3 = this;

            this._rootRenderer.globalEvents.listen(eventNameWithTarget(target, name), callback);
            var unlistenCallbackId = this._rootRenderer.allocateId();
            this._runOnService('listenGlobal', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](target, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](name, null), new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](unlistenCallbackId, null)]);
            return function () {
                _this3._rootRenderer.globalEvents.unlisten(eventNameWithTarget(target, name), callback);
                _this3._runOnService('listenDone', [new __WEBPACK_IMPORTED_MODULE_4__shared_client_message_broker__["b" /* FnArg */](unlistenCallbackId, null)]);
            };
        }
    }, {
        key: 'animate',
        value: function animate(element, startingStyles, keyframes, duration, delay, easing) {
            // TODO
            return null;
        }
    }]);

    return WebWorkerRenderer;
}();
var NamedEventEmitter = function () {
    function NamedEventEmitter() {
        _classCallCheck(this, NamedEventEmitter);
    }

    _createClass(NamedEventEmitter, [{
        key: '_getListeners',
        value: function _getListeners(eventName) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["a" /* isBlank */])(this._listeners)) {
                this._listeners = new Map();
            }
            var listeners = this._listeners.get(eventName);
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["a" /* isBlank */])(listeners)) {
                listeners = [];
                this._listeners.set(eventName, listeners);
            }
            return listeners;
        }
    }, {
        key: 'listen',
        value: function listen(eventName, callback) {
            this._getListeners(eventName).push(callback);
        }
    }, {
        key: 'unlisten',
        value: function unlisten(eventName, callback) {
            __WEBPACK_IMPORTED_MODULE_2__facade_collection__["c" /* ListWrapper */].remove(this._getListeners(eventName), callback);
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(eventName, event) {
            var listeners = this._getListeners(eventName);
            for (var i = 0; i < listeners.length; i++) {
                listeners[i](event);
            }
        }
    }]);

    return NamedEventEmitter;
}();
function eventNameWithTarget(target, eventName) {
    return target + ':' + eventName;
}
var WebWorkerRenderNode = function WebWorkerRenderNode() {
    _classCallCheck(this, WebWorkerRenderNode);

    this.events = new NamedEventEmitter();
};
//# sourceMappingURL=renderer.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__ = __webpack_require__(14);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return WorkerDomAdapter; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }


/**
 * This adapter is required to log error messages.
 *
 * Note: other methods all throw as the DOM is not accessible directly in web worker context.
 */
var WorkerDomAdapter = function (_DomAdapter) {
    _inherits(WorkerDomAdapter, _DomAdapter);

    function WorkerDomAdapter() {
        _classCallCheck(this, WorkerDomAdapter);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(WorkerDomAdapter).apply(this, arguments));
    }

    _createClass(WorkerDomAdapter, [{
        key: 'logError',
        value: function logError(error /** TODO #9100 */) {
            if (console.error) {
                console.error(error);
            } else {
                console.log(error);
            }
        }
    }, {
        key: 'log',
        value: function log(error /** TODO #9100 */) {
            console.log(error);
        }
    }, {
        key: 'logGroup',
        value: function logGroup(error /** TODO #9100 */) {
            if (console.group) {
                console.group(error);
                this.logError(error);
            } else {
                console.log(error);
            }
        }
    }, {
        key: 'logGroupEnd',
        value: function logGroupEnd() {
            if (console.groupEnd) {
                console.groupEnd();
            }
        }
    }, {
        key: 'hasProperty',
        value: function hasProperty(element /** TODO #9100 */, name) {
            throw 'not implemented';
        }
    }, {
        key: 'setProperty',
        value: function setProperty(el, name, value) {
            throw 'not implemented';
        }
    }, {
        key: 'getProperty',
        value: function getProperty(el, name) {
            throw 'not implemented';
        }
    }, {
        key: 'invoke',
        value: function invoke(el, methodName, args) {
            throw 'not implemented';
        }
    }, {
        key: 'getXHR',
        value: function getXHR() {
            throw 'not implemented';
        }
    }, {
        key: 'parse',
        value: function parse(templateHtml) {
            throw 'not implemented';
        }
    }, {
        key: 'query',
        value: function query(selector) {
            throw 'not implemented';
        }
    }, {
        key: 'querySelector',
        value: function querySelector(el /** TODO #9100 */, selector) {
            throw 'not implemented';
        }
    }, {
        key: 'querySelectorAll',
        value: function querySelectorAll(el /** TODO #9100 */, selector) {
            throw 'not implemented';
        }
    }, {
        key: 'on',
        value: function on(el /** TODO #9100 */, evt /** TODO #9100 */, listener /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'onAndCancel',
        value: function onAndCancel(el /** TODO #9100 */, evt /** TODO #9100 */, listener /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'dispatchEvent',
        value: function dispatchEvent(el /** TODO #9100 */, evt /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createMouseEvent',
        value: function createMouseEvent(eventType /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createEvent',
        value: function createEvent(eventType) {
            throw 'not implemented';
        }
    }, {
        key: 'preventDefault',
        value: function preventDefault(evt /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'isPrevented',
        value: function isPrevented(evt /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getInnerHTML',
        value: function getInnerHTML(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getTemplateContent',
        value: function getTemplateContent(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getOuterHTML',
        value: function getOuterHTML(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'nodeName',
        value: function nodeName(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'nodeValue',
        value: function nodeValue(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'type',
        value: function type(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'content',
        value: function content(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'firstChild',
        value: function firstChild(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'nextSibling',
        value: function nextSibling(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'parentElement',
        value: function parentElement(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'childNodes',
        value: function childNodes(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'childNodesAsList',
        value: function childNodesAsList(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'clearNodes',
        value: function clearNodes(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'appendChild',
        value: function appendChild(el /** TODO #9100 */, node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'removeChild',
        value: function removeChild(el /** TODO #9100 */, node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'replaceChild',
        value: function replaceChild(el /** TODO #9100 */, newNode /** TODO #9100 */, oldNode /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'remove',
        value: function remove(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'insertBefore',
        value: function insertBefore(el /** TODO #9100 */, node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'insertAllBefore',
        value: function insertAllBefore(el /** TODO #9100 */, nodes /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'insertAfter',
        value: function insertAfter(el /** TODO #9100 */, node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'setInnerHTML',
        value: function setInnerHTML(el /** TODO #9100 */, value /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getText',
        value: function getText(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'setText',
        value: function setText(el /** TODO #9100 */, value) {
            throw 'not implemented';
        }
    }, {
        key: 'getValue',
        value: function getValue(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'setValue',
        value: function setValue(el /** TODO #9100 */, value) {
            throw 'not implemented';
        }
    }, {
        key: 'getChecked',
        value: function getChecked(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'setChecked',
        value: function setChecked(el /** TODO #9100 */, value) {
            throw 'not implemented';
        }
    }, {
        key: 'createComment',
        value: function createComment(text) {
            throw 'not implemented';
        }
    }, {
        key: 'createTemplate',
        value: function createTemplate(html /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createElement',
        value: function createElement(tagName /** TODO #9100 */, doc /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createElementNS',
        value: function createElementNS(ns, tagName, doc /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createTextNode',
        value: function createTextNode(text, doc /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createScriptTag',
        value: function createScriptTag(attrName, attrValue, doc /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createStyleElement',
        value: function createStyleElement(css, doc /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createShadowRoot',
        value: function createShadowRoot(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getShadowRoot',
        value: function getShadowRoot(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getHost',
        value: function getHost(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getDistributedNodes',
        value: function getDistributedNodes(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'clone',
        value: function clone(node) {
            throw 'not implemented';
        }
    }, {
        key: 'getElementsByClassName',
        value: function getElementsByClassName(element /** TODO #9100 */, name) {
            throw 'not implemented';
        }
    }, {
        key: 'getElementsByTagName',
        value: function getElementsByTagName(element /** TODO #9100 */, name) {
            throw 'not implemented';
        }
    }, {
        key: 'classList',
        value: function classList(element /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'addClass',
        value: function addClass(element /** TODO #9100 */, className) {
            throw 'not implemented';
        }
    }, {
        key: 'removeClass',
        value: function removeClass(element /** TODO #9100 */, className) {
            throw 'not implemented';
        }
    }, {
        key: 'hasClass',
        value: function hasClass(element /** TODO #9100 */, className) {
            throw 'not implemented';
        }
    }, {
        key: 'setStyle',
        value: function setStyle(element /** TODO #9100 */, styleName, styleValue) {
            throw 'not implemented';
        }
    }, {
        key: 'removeStyle',
        value: function removeStyle(element /** TODO #9100 */, styleName) {
            throw 'not implemented';
        }
    }, {
        key: 'getStyle',
        value: function getStyle(element /** TODO #9100 */, styleName) {
            throw 'not implemented';
        }
    }, {
        key: 'hasStyle',
        value: function hasStyle(element /** TODO #9100 */, styleName, styleValue) {
            throw 'not implemented';
        }
    }, {
        key: 'tagName',
        value: function tagName(element /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'attributeMap',
        value: function attributeMap(element /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'hasAttribute',
        value: function hasAttribute(element /** TODO #9100 */, attribute) {
            throw 'not implemented';
        }
    }, {
        key: 'hasAttributeNS',
        value: function hasAttributeNS(element /** TODO #9100 */, ns, attribute) {
            throw 'not implemented';
        }
    }, {
        key: 'getAttribute',
        value: function getAttribute(element /** TODO #9100 */, attribute) {
            throw 'not implemented';
        }
    }, {
        key: 'getAttributeNS',
        value: function getAttributeNS(element /** TODO #9100 */, ns, attribute) {
            throw 'not implemented';
        }
    }, {
        key: 'setAttribute',
        value: function setAttribute(element /** TODO #9100 */, name, value) {
            throw 'not implemented';
        }
    }, {
        key: 'setAttributeNS',
        value: function setAttributeNS(element /** TODO #9100 */, ns, name, value) {
            throw 'not implemented';
        }
    }, {
        key: 'removeAttribute',
        value: function removeAttribute(element /** TODO #9100 */, attribute) {
            throw 'not implemented';
        }
    }, {
        key: 'removeAttributeNS',
        value: function removeAttributeNS(element /** TODO #9100 */, ns, attribute) {
            throw 'not implemented';
        }
    }, {
        key: 'templateAwareRoot',
        value: function templateAwareRoot(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'createHtmlDocument',
        value: function createHtmlDocument() {
            throw 'not implemented';
        }
    }, {
        key: 'defaultDoc',
        value: function defaultDoc() {
            throw 'not implemented';
        }
    }, {
        key: 'getBoundingClientRect',
        value: function getBoundingClientRect(el /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getTitle',
        value: function getTitle() {
            throw 'not implemented';
        }
    }, {
        key: 'setTitle',
        value: function setTitle(newTitle) {
            throw 'not implemented';
        }
    }, {
        key: 'elementMatches',
        value: function elementMatches(n /** TODO #9100 */, selector) {
            throw 'not implemented';
        }
    }, {
        key: 'isTemplateElement',
        value: function isTemplateElement(el) {
            throw 'not implemented';
        }
    }, {
        key: 'isTextNode',
        value: function isTextNode(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'isCommentNode',
        value: function isCommentNode(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'isElementNode',
        value: function isElementNode(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'hasShadowRoot',
        value: function hasShadowRoot(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'isShadowRoot',
        value: function isShadowRoot(node /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'importIntoDoc',
        value: function importIntoDoc(node) {
            throw 'not implemented';
        }
    }, {
        key: 'adoptNode',
        value: function adoptNode(node) {
            throw 'not implemented';
        }
    }, {
        key: 'getHref',
        value: function getHref(element /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getEventKey',
        value: function getEventKey(event /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'resolveAndSetHref',
        value: function resolveAndSetHref(element /** TODO #9100 */, baseUrl, href) {
            throw 'not implemented';
        }
    }, {
        key: 'supportsDOMEvents',
        value: function supportsDOMEvents() {
            throw 'not implemented';
        }
    }, {
        key: 'supportsNativeShadowDOM',
        value: function supportsNativeShadowDOM() {
            throw 'not implemented';
        }
    }, {
        key: 'getGlobalEventTarget',
        value: function getGlobalEventTarget(target) {
            throw 'not implemented';
        }
    }, {
        key: 'getHistory',
        value: function getHistory() {
            throw 'not implemented';
        }
    }, {
        key: 'getLocation',
        value: function getLocation() {
            throw 'not implemented';
        }
    }, {
        key: 'getBaseHref',
        value: function getBaseHref() {
            throw 'not implemented';
        }
    }, {
        key: 'resetBaseElement',
        value: function resetBaseElement() {
            throw 'not implemented';
        }
    }, {
        key: 'getUserAgent',
        value: function getUserAgent() {
            throw 'not implemented';
        }
    }, {
        key: 'setData',
        value: function setData(element /** TODO #9100 */, name, value) {
            throw 'not implemented';
        }
    }, {
        key: 'getComputedStyle',
        value: function getComputedStyle(element /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'getData',
        value: function getData(element /** TODO #9100 */, name) {
            throw 'not implemented';
        }
    }, {
        key: 'setGlobalVar',
        value: function setGlobalVar(name, value) {
            throw 'not implemented';
        }
    }, {
        key: 'requestAnimationFrame',
        value: function requestAnimationFrame(callback /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'cancelAnimationFrame',
        value: function cancelAnimationFrame(id /** TODO #9100 */) {
            throw 'not implemented';
        }
    }, {
        key: 'performanceNow',
        value: function performanceNow() {
            throw 'not implemented';
        }
    }, {
        key: 'getAnimationPrefix',
        value: function getAnimationPrefix() {
            throw 'not implemented';
        }
    }, {
        key: 'getTransitionEnd',
        value: function getTransitionEnd() {
            throw 'not implemented';
        }
    }, {
        key: 'supportsAnimation',
        value: function supportsAnimation() {
            throw 'not implemented';
        }
    }, {
        key: 'supportsWebAnimation',
        value: function supportsWebAnimation() {
            throw 'not implemented';
        }
    }, {
        key: 'supportsCookies',
        value: function supportsCookies() {
            return false;
        }
    }, {
        key: 'getCookie',
        value: function getCookie(name) {
            throw 'not implemented';
        }
    }, {
        key: 'setCookie',
        value: function setCookie(name, value) {
            throw 'not implemented';
        }
    }, {
        key: 'attrToPropMap',
        get: function get() {
            throw 'not implemented';
        },
        set: function set(value) {
            throw 'not implemented';
        }
    }], [{
        key: 'makeCurrent',
        value: function makeCurrent() {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__["setRootDomAdapter"])(new WorkerDomAdapter());
        }
    }]);

    return WorkerDomAdapter;
}(__WEBPACK_IMPORTED_MODULE_0__dom_dom_adapter__["DomAdapter"]);
//# sourceMappingURL=worker_adapter.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__web_workers_shared_api__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__web_workers_shared_client_message_broker__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__web_workers_shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__web_workers_shared_post_message_bus__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__web_workers_shared_render_store__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__web_workers_shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__web_workers_shared_service_message_broker__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__web_workers_worker_renderer__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__web_workers_worker_worker_adapter__ = __webpack_require__(340);

/* harmony export */ __webpack_require__.d(exports, "WORKER_APP_PLATFORM_PROVIDERS", function() { return WORKER_APP_PLATFORM_PROVIDERS; });
/* harmony export */ __webpack_require__.d(exports, "WORKER_APP_APPLICATION_PROVIDERS", function() { return WORKER_APP_APPLICATION_PROVIDERS; });/* harmony export */ exports["workerAppPlatform"] = workerAppPlatform;var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }















var PrintLogger = function () {
    function PrintLogger() {
        _classCallCheck(this, PrintLogger);

        this.log = __WEBPACK_IMPORTED_MODULE_3__facade_lang__["s" /* print */];
        this.logError = __WEBPACK_IMPORTED_MODULE_3__facade_lang__["s" /* print */];
        this.logGroup = __WEBPACK_IMPORTED_MODULE_3__facade_lang__["s" /* print */];
    }

    _createClass(PrintLogger, [{
        key: 'logGroupEnd',
        value: function logGroupEnd() {}
    }]);

    return PrintLogger;
}();

var WORKER_APP_PLATFORM_MARKER = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* OpaqueToken */]('WorkerAppPlatformMarker');
/**
 * @experimental
 */
var WORKER_APP_PLATFORM_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* PLATFORM_COMMON_PROVIDERS */], { provide: WORKER_APP_PLATFORM_MARKER, useValue: true }];
/**
 * @experimental
 */
var WORKER_APP_APPLICATION_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* APPLICATION_COMMON_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* FORM_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_2__browser__["BROWSER_SANITIZATION_PROVIDERS"], __WEBPACK_IMPORTED_MODULE_9__web_workers_shared_serializer__["a" /* Serializer */], { provide: __WEBPACK_IMPORTED_MODULE_5__web_workers_shared_client_message_broker__["c" /* ClientMessageBrokerFactory */], useClass: __WEBPACK_IMPORTED_MODULE_5__web_workers_shared_client_message_broker__["d" /* ClientMessageBrokerFactory_ */] }, { provide: __WEBPACK_IMPORTED_MODULE_10__web_workers_shared_service_message_broker__["a" /* ServiceMessageBrokerFactory */], useClass: __WEBPACK_IMPORTED_MODULE_10__web_workers_shared_service_message_broker__["b" /* ServiceMessageBrokerFactory_ */] }, __WEBPACK_IMPORTED_MODULE_11__web_workers_worker_renderer__["a" /* WebWorkerRootRenderer */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* RootRenderer */], useExisting: __WEBPACK_IMPORTED_MODULE_11__web_workers_worker_renderer__["a" /* WebWorkerRootRenderer */] }, { provide: __WEBPACK_IMPORTED_MODULE_4__web_workers_shared_api__["a" /* ON_WEB_WORKER */], useValue: true }, __WEBPACK_IMPORTED_MODULE_8__web_workers_shared_render_store__["a" /* RenderStore */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* ExceptionHandler */], useFactory: _exceptionHandler, deps: [] }, { provide: __WEBPACK_IMPORTED_MODULE_6__web_workers_shared_message_bus__["MessageBus"], useFactory: createMessageBus, deps: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* NgZone */]] }, { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* APP_INITIALIZER */], useValue: setupWebWorker, multi: true }];
/**
 * @experimental
 */
function workerAppPlatform() {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["a" /* isBlank */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* getPlatform */])())) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["N" /* createPlatform */])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["O" /* ReflectiveInjector */].resolveAndCreate(WORKER_APP_PLATFORM_PROVIDERS));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* assertPlatform */])(WORKER_APP_PLATFORM_MARKER);
}
function _exceptionHandler() {
    return new __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* ExceptionHandler */](new PrintLogger());
}
// TODO(jteplitz602) remove this and compile with lib.webworker.d.ts (#3492)
var _postMessage = {
    postMessage: function (_postMessage2) {
        function postMessage(_x, _x2) {
            return _postMessage2.apply(this, arguments);
        }

        postMessage.toString = function () {
            return _postMessage2.toString();
        };

        return postMessage;
    }(function (message, transferrables) {
        postMessage(message, transferrables);
    })
};
function createMessageBus(zone) {
    var sink = new __WEBPACK_IMPORTED_MODULE_7__web_workers_shared_post_message_bus__["a" /* PostMessageBusSink */](_postMessage);
    var source = new __WEBPACK_IMPORTED_MODULE_7__web_workers_shared_post_message_bus__["b" /* PostMessageBusSource */]();
    var bus = new __WEBPACK_IMPORTED_MODULE_7__web_workers_shared_post_message_bus__["c" /* PostMessageBus */](sink, source);
    bus.attachToZone(zone);
    return bus;
}
function setupWebWorker() {
    __WEBPACK_IMPORTED_MODULE_12__web_workers_worker_worker_adapter__["a" /* WorkerDomAdapter */].makeCurrent();
}
//# sourceMappingURL=worker_app.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_private__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browser_browser_adapter__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browser_testability__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_dom_adapter__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_dom_renderer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dom_dom_tokens__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dom_events_dom_events__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dom_events_event_manager__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dom_events_hammer_gestures__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dom_events_key_events__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dom_shared_styles_host__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__facade_exceptions__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__web_workers_shared_api__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__web_workers_shared_client_message_broker__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__web_workers_shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__web_workers_shared_post_message_bus__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__web_workers_shared_render_store__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__web_workers_shared_serializer__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__web_workers_shared_service_message_broker__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__web_workers_ui_renderer__ = __webpack_require__(336);

/* harmony export */ __webpack_require__.d(exports, "WebWorkerInstance", function() { return WebWorkerInstance; });
/* harmony export */ __webpack_require__.d(exports, "WORKER_SCRIPT", function() { return WORKER_SCRIPT; });
/* harmony export */ __webpack_require__.d(exports, "WORKER_UI_STARTABLE_MESSAGING_SERVICE", function() { return WORKER_UI_STARTABLE_MESSAGING_SERVICE; });
/* harmony export */ __webpack_require__.d(exports, "WORKER_UI_PLATFORM_PROVIDERS", function() { return WORKER_UI_PLATFORM_PROVIDERS; });
/* harmony export */ __webpack_require__.d(exports, "WORKER_UI_APPLICATION_PROVIDERS", function() { return WORKER_UI_APPLICATION_PROVIDERS; });/* harmony export */ exports["workerUiPlatform"] = workerUiPlatform;var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
























var WORKER_RENDER_PLATFORM_MARKER = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* OpaqueToken */]('WorkerRenderPlatformMarker');
var WebWorkerInstance = function () {
    function WebWorkerInstance() {
        _classCallCheck(this, WebWorkerInstance);
    }

    _createClass(WebWorkerInstance, [{
        key: 'init',

        /** @internal */
        value: function init(worker, bus) {
            this.worker = worker;
            this.bus = bus;
        }
    }]);

    return WebWorkerInstance;
}();
/** @nocollapse */
WebWorkerInstance.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/**
 * @experimental
 */
var WORKER_SCRIPT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* OpaqueToken */]('WebWorkerScript');
/**
 * A multiple providers used to automatically call the `start()` method after the service is
 * created.
 *
 * TODO(vicb): create an interface for startable services to implement
 * @experimental
 */
var WORKER_UI_STARTABLE_MESSAGING_SERVICE = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* OpaqueToken */]('WorkerRenderStartableMsgService');
/**
 * @experimental
 */
var WORKER_UI_PLATFORM_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_0__angular_core__["H" /* PLATFORM_COMMON_PROVIDERS */], { provide: WORKER_RENDER_PLATFORM_MARKER, useValue: true }, { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* PLATFORM_INITIALIZER */], useValue: initWebWorkerRenderPlatform, multi: true }];
/**
 * @experimental
 */
var WORKER_UI_APPLICATION_PROVIDERS = [__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* APPLICATION_COMMON_PROVIDERS */], __WEBPACK_IMPORTED_MODULE_22__web_workers_ui_renderer__["a" /* MessageBasedRenderer */], { provide: WORKER_UI_STARTABLE_MESSAGING_SERVICE, useExisting: __WEBPACK_IMPORTED_MODULE_22__web_workers_ui_renderer__["a" /* MessageBasedRenderer */], multi: true }, __WEBPACK_IMPORTED_MODULE_2__browser__["BROWSER_SANITIZATION_PROVIDERS"], { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ExceptionHandler */], useFactory: _exceptionHandler, deps: [] }, { provide: __WEBPACK_IMPORTED_MODULE_7__dom_dom_tokens__["a" /* DOCUMENT */], useFactory: _document, deps: [] },
// TODO(jteplitz602): Investigate if we definitely need EVENT_MANAGER on the render thread
// #5298
{ provide: __WEBPACK_IMPORTED_MODULE_9__dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */], useClass: __WEBPACK_IMPORTED_MODULE_8__dom_events_dom_events__["a" /* DomEventsPlugin */], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_9__dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */], useClass: __WEBPACK_IMPORTED_MODULE_11__dom_events_key_events__["a" /* KeyEventsPlugin */], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_9__dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */], useClass: __WEBPACK_IMPORTED_MODULE_10__dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */], multi: true }, { provide: __WEBPACK_IMPORTED_MODULE_10__dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */], useClass: __WEBPACK_IMPORTED_MODULE_10__dom_events_hammer_gestures__["c" /* HammerGestureConfig */] }, { provide: __WEBPACK_IMPORTED_MODULE_6__dom_dom_renderer__["DomRootRenderer"], useClass: __WEBPACK_IMPORTED_MODULE_6__dom_dom_renderer__["DomRootRenderer_"] }, { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* RootRenderer */], useExisting: __WEBPACK_IMPORTED_MODULE_6__dom_dom_renderer__["DomRootRenderer"] }, { provide: __WEBPACK_IMPORTED_MODULE_12__dom_shared_styles_host__["SharedStylesHost"], useExisting: __WEBPACK_IMPORTED_MODULE_12__dom_shared_styles_host__["DomSharedStylesHost"] }, { provide: __WEBPACK_IMPORTED_MODULE_21__web_workers_shared_service_message_broker__["a" /* ServiceMessageBrokerFactory */], useClass: __WEBPACK_IMPORTED_MODULE_21__web_workers_shared_service_message_broker__["b" /* ServiceMessageBrokerFactory_ */] }, { provide: __WEBPACK_IMPORTED_MODULE_16__web_workers_shared_client_message_broker__["c" /* ClientMessageBrokerFactory */], useClass: __WEBPACK_IMPORTED_MODULE_16__web_workers_shared_client_message_broker__["d" /* ClientMessageBrokerFactory_ */] }, { provide: __WEBPACK_IMPORTED_MODULE_1__core_private__["a" /* AnimationDriver */], useFactory: _resolveDefaultAnimationDriver }, __WEBPACK_IMPORTED_MODULE_20__web_workers_shared_serializer__["a" /* Serializer */], { provide: __WEBPACK_IMPORTED_MODULE_15__web_workers_shared_api__["a" /* ON_WEB_WORKER */], useValue: false }, __WEBPACK_IMPORTED_MODULE_19__web_workers_shared_render_store__["a" /* RenderStore */], __WEBPACK_IMPORTED_MODULE_12__dom_shared_styles_host__["DomSharedStylesHost"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* Testability */], __WEBPACK_IMPORTED_MODULE_9__dom_events_event_manager__["a" /* EventManager */], WebWorkerInstance, { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* APP_INITIALIZER */], useFactory: initWebWorkerAppFn, multi: true, deps: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Injector */]] }, { provide: __WEBPACK_IMPORTED_MODULE_17__web_workers_shared_message_bus__["MessageBus"], useFactory: messageBusFactory, deps: [WebWorkerInstance] }];
function initializeGenericWorkerRenderer(injector) {
    var bus = injector.get(__WEBPACK_IMPORTED_MODULE_17__web_workers_shared_message_bus__["MessageBus"]);
    var zone = injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* NgZone */]);
    bus.attachToZone(zone);
    // initialize message services after the bus has been created
    var services = injector.get(WORKER_UI_STARTABLE_MESSAGING_SERVICE);
    zone.runGuarded(function () {
        services.forEach(function (svc /** TODO #9100 */) {
            svc.start();
        });
    });
}
function messageBusFactory(instance) {
    return instance.bus;
}
function initWebWorkerRenderPlatform() {
    __WEBPACK_IMPORTED_MODULE_3__browser_browser_adapter__["a" /* BrowserDomAdapter */].makeCurrent();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_private__["e" /* wtfInit */])();
    __WEBPACK_IMPORTED_MODULE_4__browser_testability__["a" /* BrowserGetTestability */].init();
}
/**
 * @experimental
 */
function workerUiPlatform() {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__facade_lang__["a" /* isBlank */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* getPlatform */])())) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* createPlatform */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ReflectiveInjector */].resolveAndCreate(WORKER_UI_PLATFORM_PROVIDERS));
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* assertPlatform */])(WORKER_RENDER_PLATFORM_MARKER);
}
function _exceptionHandler() {
    return new __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ExceptionHandler */](__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom_dom_adapter__["getDOM"])());
}
function _document() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom_dom_adapter__["getDOM"])().defaultDoc();
}
function initWebWorkerAppFn(injector) {
    return function () {
        var scriptUri;
        try {
            scriptUri = injector.get(WORKER_SCRIPT);
        } catch (e) {
            throw new __WEBPACK_IMPORTED_MODULE_13__facade_exceptions__["a" /* BaseException */]('You must provide your WebWorker\'s initialization script with the WORKER_SCRIPT token');
        }
        var instance = injector.get(WebWorkerInstance);
        spawnWebWorker(scriptUri, instance);
        initializeGenericWorkerRenderer(injector);
    };
}
/**
 * Spawns a new class and initializes the WebWorkerInstance
 */
function spawnWebWorker(uri, instance) {
    var webWorker = new Worker(uri);
    var sink = new __WEBPACK_IMPORTED_MODULE_18__web_workers_shared_post_message_bus__["a" /* PostMessageBusSink */](webWorker);
    var source = new __WEBPACK_IMPORTED_MODULE_18__web_workers_shared_post_message_bus__["b" /* PostMessageBusSource */](webWorker);
    var bus = new __WEBPACK_IMPORTED_MODULE_18__web_workers_shared_post_message_bus__["c" /* PostMessageBus */](sink, source);
    instance.init(webWorker, bus);
}
function _resolveDefaultAnimationDriver() {
    // web workers have not been tested or configured to
    // work with animations just yet...
    return new __WEBPACK_IMPORTED_MODULE_1__core_private__["f" /* NoOpAnimationDriver */]();
}
//# sourceMappingURL=worker_render.js.map

/***/ },

/***/ 40:
/***/ function(module, exports, __webpack_require__) {

"use strict";

/* harmony export */ __webpack_require__.d(exports, "MessageBus", function() { return MessageBus; });function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Message Bus is a low level API used to communicate between the UI and the background.
 * Communication is based on a channel abstraction. Messages published in a
 * given channel to one MessageBusSink are received on the same channel
 * by the corresponding MessageBusSource.
 * @experimental
 */
var MessageBus = function MessageBus() {
  _classCallCheck(this, MessageBus);
};
//# sourceMappingURL=message_bus.js.map

/***/ },

/***/ 46:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__exception_handler__ = __webpack_require__(244);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return BaseException; });/* unused harmony export WrappedException *//* unused harmony export makeTypeError *//* unused harmony export unimplemented *//* unused harmony reexport ExceptionHandler */
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




/**
 * @stable
 */
var BaseException = function (_Error) {
    _inherits(BaseException, _Error);

    function BaseException() {
        var message = arguments.length <= 0 || arguments[0] === undefined ? '--' : arguments[0];

        _classCallCheck(this, BaseException);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BaseException).call(this, message));

        _this.message = message;
        _this.stack = new Error(message).stack;
        return _this;
    }

    _createClass(BaseException, [{
        key: 'toString',
        value: function toString() {
            return this.message;
        }
    }]);

    return BaseException;
}(Error);
/**
 * Wraps an exception and provides additional context or information.
 * @stable
 */
var WrappedException = function (_BaseWrappedException) {
    _inherits(WrappedException, _BaseWrappedException);

    function WrappedException(_wrapperMessage, _originalException /** TODO #9100 */, _originalStack /** TODO #9100 */, _context /** TODO #9100 */) {
        _classCallCheck(this, WrappedException);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(WrappedException).call(this, _wrapperMessage));

        _this2._wrapperMessage = _wrapperMessage;
        _this2._originalException = _originalException;
        _this2._originalStack = _originalStack;
        _this2._context = _context;
        _this2._wrapperStack = new Error(_wrapperMessage).stack;
        return _this2;
    }

    _createClass(WrappedException, [{
        key: 'toString',
        value: function toString() {
            return this.message;
        }
    }, {
        key: 'wrapperMessage',
        get: function get() {
            return this._wrapperMessage;
        }
    }, {
        key: 'wrapperStack',
        get: function get() {
            return this._wrapperStack;
        }
    }, {
        key: 'originalException',
        get: function get() {
            return this._originalException;
        }
    }, {
        key: 'originalStack',
        get: function get() {
            return this._originalStack;
        }
    }, {
        key: 'context',
        get: function get() {
            return this._context;
        }
    }, {
        key: 'message',
        get: function get() {
            return __WEBPACK_IMPORTED_MODULE_1__exception_handler__["a" /* ExceptionHandler */].exceptionToString(this);
        }
    }]);

    return WrappedException;
}(__WEBPACK_IMPORTED_MODULE_0__base_wrapped_exception__["a" /* BaseWrappedException */]);
function makeTypeError(message) {
    return new TypeError(message);
}
function unimplemented() {
    throw new BaseException('unimplemented');
}
//# sourceMappingURL=exceptions.js.map

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_exceptions__ = __webpack_require__(46);

/* harmony export */ __webpack_require__.d(exports, "c", function() { return EVENT_MANAGER_PLUGINS; });
/* harmony export */ __webpack_require__.d(exports, "a", function() { return EventManager; });
/* harmony export */ __webpack_require__.d(exports, "b", function() { return EventManagerPlugin; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var EVENT_MANAGER_PLUGINS = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* OpaqueToken */]('EventManagerPlugins');
var EventManager = function () {
    function EventManager(plugins, _zone) {
        var _this = this;

        _classCallCheck(this, EventManager);

        this._zone = _zone;
        plugins.forEach(function (p) {
            return p.manager = _this;
        });
        this._plugins = __WEBPACK_IMPORTED_MODULE_1__facade_collection__["c" /* ListWrapper */].reversed(plugins);
    }

    _createClass(EventManager, [{
        key: 'addEventListener',
        value: function addEventListener(element, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addEventListener(element, eventName, handler);
        }
    }, {
        key: 'addGlobalEventListener',
        value: function addGlobalEventListener(target, eventName, handler) {
            var plugin = this._findPluginFor(eventName);
            return plugin.addGlobalEventListener(target, eventName, handler);
        }
    }, {
        key: 'getZone',
        value: function getZone() {
            return this._zone;
        }
        /** @internal */

    }, {
        key: '_findPluginFor',
        value: function _findPluginFor(eventName) {
            var plugins = this._plugins;
            for (var i = 0; i < plugins.length; i++) {
                var plugin = plugins[i];
                if (plugin.supports(eventName)) {
                    return plugin;
                }
            }
            throw new __WEBPACK_IMPORTED_MODULE_2__facade_exceptions__["a" /* BaseException */]('No event manager plugin found for event ' + eventName);
        }
    }]);

    return EventManager;
}();
/** @nocollapse */
EventManager.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
EventManager.ctorParameters = [{ type: Array, decorators: [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Inject */], args: [EVENT_MANAGER_PLUGINS] }] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* NgZone */] }];
var EventManagerPlugin = function () {
    function EventManagerPlugin() {
        _classCallCheck(this, EventManagerPlugin);
    }

    _createClass(EventManagerPlugin, [{
        key: 'supports',

        // That is equivalent to having supporting $event.target
        value: function supports(eventName) {
            return false;
        }
    }, {
        key: 'addEventListener',
        value: function addEventListener(element, eventName, handler) {
            throw 'not implemented';
        }
    }, {
        key: 'addGlobalEventListener',
        value: function addGlobalEventListener(element, eventName, handler) {
            throw 'not implemented';
        }
    }]);

    return EventManagerPlugin;
}();
//# sourceMappingURL=event_manager.js.map

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ && __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default, 'a', __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable___default = __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable__ && __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable___default, 'a', __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable___default);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise___default = __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__ && __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise___default, 'a', __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise___default);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__; };
/* harmony import */ __webpack_require__.d(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default, 'a', __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promise__ = __webpack_require__(329);
/* unused harmony export TimerWrapper */
/* harmony export */ __webpack_require__.d(exports, "a", function() { return ObservableWrapper; });
/* harmony export */ __webpack_require__.d(exports, "c", function() { return EventEmitter; });/* unused harmony reexport Observable */
/* unused harmony reexport Subject */
/* unused harmony reexport PromiseCompleter */
/* harmony reexport */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_5__promise__, "a")) __webpack_require__.d(exports, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__promise__["a"]; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }








var TimerWrapper = function () {
    function TimerWrapper() {
        _classCallCheck(this, TimerWrapper);
    }

    _createClass(TimerWrapper, null, [{
        key: 'setTimeout',
        value: function setTimeout(fn, millis) {
            return __WEBPACK_IMPORTED_MODULE_3__lang__["d" /* global */].setTimeout(fn, millis);
        }
    }, {
        key: 'clearTimeout',
        value: function clearTimeout(id) {
            __WEBPACK_IMPORTED_MODULE_3__lang__["d" /* global */].clearTimeout(id);
        }
    }, {
        key: 'setInterval',
        value: function setInterval(fn, millis) {
            return __WEBPACK_IMPORTED_MODULE_3__lang__["d" /* global */].setInterval(fn, millis);
        }
    }, {
        key: 'clearInterval',
        value: function clearInterval(id) {
            __WEBPACK_IMPORTED_MODULE_3__lang__["d" /* global */].clearInterval(id);
        }
    }]);

    return TimerWrapper;
}();
var ObservableWrapper = function () {
    function ObservableWrapper() {
        _classCallCheck(this, ObservableWrapper);
    }

    _createClass(ObservableWrapper, null, [{
        key: 'subscribe',

        // TODO(vsavkin): when we use rxnext, try inferring the generic type from the first arg
        value: function subscribe(emitter, onNext, onError) {
            var onComplete = arguments.length <= 3 || arguments[3] === undefined ? function () {} : arguments[3];

            onError = typeof onError === 'function' && onError || __WEBPACK_IMPORTED_MODULE_3__lang__["q" /* noop */];
            onComplete = typeof onComplete === 'function' && onComplete || __WEBPACK_IMPORTED_MODULE_3__lang__["q" /* noop */];
            return emitter.subscribe({ next: onNext, error: onError, complete: onComplete });
        }
    }, {
        key: 'isObservable',
        value: function isObservable(obs) {
            return !!obs.subscribe;
        }
        /**
         * Returns whether `obs` has any subscribers listening to events.
         */

    }, {
        key: 'hasSubscribers',
        value: function hasSubscribers(obs) {
            return obs.observers.length > 0;
        }
    }, {
        key: 'dispose',
        value: function dispose(subscription) {
            subscription.unsubscribe();
        }
        /**
         * @deprecated - use callEmit() instead
         */

    }, {
        key: 'callNext',
        value: function callNext(emitter, value) {
            emitter.emit(value);
        }
    }, {
        key: 'callEmit',
        value: function callEmit(emitter, value) {
            emitter.emit(value);
        }
    }, {
        key: 'callError',
        value: function callError(emitter, error) {
            emitter.error(error);
        }
    }, {
        key: 'callComplete',
        value: function callComplete(emitter) {
            emitter.complete();
        }
    }, {
        key: 'fromPromise',
        value: function fromPromise(promise) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_PromiseObservable__["PromiseObservable"].create(promise);
        }
    }, {
        key: 'toPromise',
        value: function toPromise(obj) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_operator_toPromise__["toPromise"].call(obj);
        }
    }]);

    return ObservableWrapper;
}();
/**
 * Use by directives and components to emit custom Events.
 *
 * ### Examples
 *
 * In the following example, `Zippy` alternatively emits `open` and `close` events when its
 * title gets clicked:
 *
 * ```
 * @Component({
 *   selector: 'zippy',
 *   template: `
 *   <div class="zippy">
 *     <div (click)="toggle()">Toggle</div>
 *     <div [hidden]="!visible">
 *       <ng-content></ng-content>
 *     </div>
 *  </div>`})
 * export class Zippy {
 *   visible: boolean = true;
 *   @Output() open: EventEmitter<any> = new EventEmitter();
 *   @Output() close: EventEmitter<any> = new EventEmitter();
 *
 *   toggle() {
 *     this.visible = !this.visible;
 *     if (this.visible) {
 *       this.open.emit(null);
 *     } else {
 *       this.close.emit(null);
 *     }
 *   }
 * }
 * ```
 *
 * The events payload can be accessed by the parameter `$event` on the components output event
 * handler:
 *
 * ```
 * <zippy (open)="onOpen($event)" (close)="onClose($event)"></zippy>
 * ```
 *
 * Uses Rx.Observable but provides an adapter to make it work as specified here:
 * https://github.com/jhusain/observable-spec
 *
 * Once a reference implementation of the spec is available, switch to it.
 * @stable
 */
var EventEmitter = function (_Subject) {
    _inherits(EventEmitter, _Subject);

    /**
     * Creates an instance of [EventEmitter], which depending on [isAsync],
     * delivers events synchronously or asynchronously.
     */

    function EventEmitter() {
        var isAsync = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];

        _classCallCheck(this, EventEmitter);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(EventEmitter).call(this));

        _this.__isAsync = isAsync;
        return _this;
    }

    _createClass(EventEmitter, [{
        key: 'emit',
        value: function emit(value) {
            _get(Object.getPrototypeOf(EventEmitter.prototype), 'next', this).call(this, value);
        }
        /**
         * @deprecated - use .emit(value) instead
         */

    }, {
        key: 'next',
        value: function next(value) {
            _get(Object.getPrototypeOf(EventEmitter.prototype), 'next', this).call(this, value);
        }
    }, {
        key: 'subscribe',
        value: function subscribe(generatorOrNext, error, complete) {
            var schedulerFn = void 0;
            var errorFn = function errorFn(err) {
                return null;
            };
            var completeFn = function completeFn() {
                return null;
            };
            if (generatorOrNext && (typeof generatorOrNext === 'undefined' ? 'undefined' : _typeof(generatorOrNext)) === 'object') {
                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
                    setTimeout(function () {
                        return generatorOrNext.next(value);
                    });
                } : function (value /** TODO #9100 */) {
                    generatorOrNext.next(value);
                };
                if (generatorOrNext.error) {
                    errorFn = this.__isAsync ? function (err) {
                        setTimeout(function () {
                            return generatorOrNext.error(err);
                        });
                    } : function (err) {
                        generatorOrNext.error(err);
                    };
                }
                if (generatorOrNext.complete) {
                    completeFn = this.__isAsync ? function () {
                        setTimeout(function () {
                            return generatorOrNext.complete();
                        });
                    } : function () {
                        generatorOrNext.complete();
                    };
                }
            } else {
                schedulerFn = this.__isAsync ? function (value /** TODO #9100 */) {
                    setTimeout(function () {
                        return generatorOrNext(value);
                    });
                } : function (value /** TODO #9100 */) {
                    generatorOrNext(value);
                };
                if (error) {
                    errorFn = this.__isAsync ? function (err) {
                        setTimeout(function () {
                            return error(err);
                        });
                    } : function (err) {
                        error(err);
                    };
                }
                if (complete) {
                    completeFn = this.__isAsync ? function () {
                        setTimeout(function () {
                            return complete();
                        });
                    } : function () {
                        complete();
                    };
                }
            }
            return _get(Object.getPrototypeOf(EventEmitter.prototype), 'subscribe', this).call(this, schedulerFn, errorFn, completeFn);
        }
    }]);

    return EventEmitter;
}(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]);
//# sourceMappingURL=async.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/* harmony export */ __webpack_require__.d(exports, "App", function() { return App; });var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var __decorate = this && this.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = this && this.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var App = function App() {
    _classCallCheck(this, App);
};
App = __decorate([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Component */])({
    selector: 'ion-app',
    template: 'hi'
}), __metadata('design:paramtypes', [])], App);

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_ngfactory__ = __webpack_require__(282);



var appInjector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* ReflectiveInjector */].resolveAndCreate([__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BROWSER_APP_PROVIDERS */], []], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* browserPlatform */])().injector);
var ngComponentRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* coreBootstrap */])(__WEBPACK_IMPORTED_MODULE_2__app_app_ngfactory__["a" /* AppNgFactory */], appInjector);

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* unused harmony export RenderDebugInfo */
/* harmony export */ __webpack_require__.d(exports, "e", function() { return wtfInit; });/* unused harmony export ReflectionCapabilities */
/* harmony export */ __webpack_require__.d(exports, "g", function() { return VIEW_ENCAPSULATION_VALUES; });
/* harmony export */ __webpack_require__.d(exports, "b", function() { return DebugDomRootRenderer; });
/* harmony export */ __webpack_require__.d(exports, "c", function() { return SecurityContext; });
/* harmony export */ __webpack_require__.d(exports, "d", function() { return SanitizationService; });/* unused harmony export reflector *//* unused harmony export NoOpAnimationPlayer *//* unused harmony export AnimationPlayer */
/* harmony export */ __webpack_require__.d(exports, "f", function() { return NoOpAnimationDriver; });
/* harmony export */ __webpack_require__.d(exports, "a", function() { return AnimationDriver; });/* unused harmony export AnimationSequencePlayer *//* unused harmony export AnimationGroupPlayer *//* unused harmony export AnimationKeyframe *//* unused harmony export AnimationStyles *//* unused harmony export prepareFinalAnimationStyles *//* unused harmony export balanceAnimationKeyframes *//* unused harmony export flattenStyles *//* unused harmony export clearStyles *//* unused harmony export collectAndResolveStyles */
var RenderDebugInfo = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].RenderDebugInfo;
var wtfInit = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].wtfInit;
var ReflectionCapabilities = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].ReflectionCapabilities;
var VIEW_ENCAPSULATION_VALUES = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].VIEW_ENCAPSULATION_VALUES;
var DebugDomRootRenderer = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].DebugDomRootRenderer;
var SecurityContext = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].SecurityContext;
var SanitizationService = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].SanitizationService;
var reflector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].reflector;
var NoOpAnimationPlayer = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].NoOpAnimationPlayer;
var AnimationPlayer = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].AnimationPlayer;
var NoOpAnimationDriver = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].NoOpAnimationDriver;
var AnimationDriver = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].AnimationDriver;
var AnimationSequencePlayer = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].AnimationSequencePlayer;
var AnimationGroupPlayer = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].AnimationGroupPlayer;
var AnimationKeyframe = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].AnimationKeyframe;
var AnimationStyles = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].AnimationStyles;
var prepareFinalAnimationStyles = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].prepareFinalAnimationStyles;
var balanceAnimationKeyframes = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].balanceAnimationKeyframes;
var flattenStyles = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].flattenStyles;
var clearStyles = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].clearStyles;
var collectAndResolveStyles = __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* __core_private__ */].collectAndResolveStyles;
//# sourceMappingURL=core_private.js.map

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return DOCUMENT; });
/**
 * A DI Token representing the main rendering context. In a browser this is the DOM Document.
 *
 * Note: Document might not be available in the Application Context when Application and Rendering
 * Contexts are not the same (e.g. when running the application into a Web Worker).
 */
var DOCUMENT = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* OpaqueToken */]('DocumentToken');
//# sourceMappingURL=dom_tokens.js.map

/***/ },

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export scheduleMicroTask *//* unused harmony export IS_DART */
/* harmony export */ __webpack_require__.d(exports, "d", function() { return _global; });/* unused harmony export Type *//* unused harmony export getTypeNameForDebugging *//* unused harmony export Math *//* unused harmony export Date *//* harmony export */ exports["b"] = isPresent;/* harmony export */ exports["a"] = isBlank;/* unused harmony export isBoolean *//* harmony export */ exports["m"] = isNumber;/* harmony export */ exports["i"] = isString;/* harmony export */ exports["n"] = isFunction;/* unused harmony export isType *//* unused harmony export isStringMap *//* unused harmony export isStrictStringMap *//* unused harmony export isPromise *//* harmony export */ exports["e"] = isArray;/* unused harmony export isDate *//* harmony export */ exports["q"] = noop;/* harmony export */ exports["l"] = stringify;/* harmony export */ exports["r"] = serializeEnum;/* unused harmony export deserializeEnum *//* unused harmony export resolveEnumToken */
/* harmony export */ __webpack_require__.d(exports, "h", function() { return StringWrapper; });/* unused harmony export StringJoiner *//* unused harmony export NumberParseError */
/* harmony export */ __webpack_require__.d(exports, "c", function() { return NumberWrapper; });/* unused harmony export RegExp */
/* harmony export */ __webpack_require__.d(exports, "j", function() { return RegExpWrapper; });/* unused harmony export RegExpMatcherWrapper */
/* harmony export */ __webpack_require__.d(exports, "t", function() { return FunctionWrapper; });/* unused harmony export looseIdentical *//* unused harmony export getMapKey *//* unused harmony export normalizeBlank *//* unused harmony export normalizeBool *//* harmony export */ exports["f"] = isJsObject;/* harmony export */ exports["s"] = print;/* unused harmony export warn */
/* harmony export */ __webpack_require__.d(exports, "k", function() { return Json; });
/* harmony export */ __webpack_require__.d(exports, "p", function() { return DateWrapper; });/* harmony export */ exports["o"] = setValueOnPath;/* harmony export */ exports["g"] = getSymbolIterator;/* unused harmony export evalExpression *//* unused harmony export isPrimitive *//* unused harmony export hasConstructor *//* unused harmony export escape *//* unused harmony export escapeRegExp */var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var globalScope;
if (typeof window === 'undefined') {
    if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
        // TODO: Replace any with WorkerGlobalScope from lib.webworker.d.ts #3492
        globalScope = self;
    } else {
        globalScope = global;
    }
} else {
    globalScope = window;
}
function scheduleMicroTask(fn) {
    Zone.current.scheduleMicroTask('scheduleMicrotask', fn);
}
var IS_DART = false;
// Need to declare a new variable for global here since TypeScript
// exports the original value of the symbol.
var _global = globalScope;

var Type = Function;
function getTypeNameForDebugging(type) {
    if (type['name']) {
        return type['name'];
    }
    return typeof type === 'undefined' ? 'undefined' : _typeof(type);
}
var Math = _global.Math;
var Date = _global.Date;
// TODO: remove calls to assert in production environment
// Note: Can't just export this and import in in other files
// as `assert` is a reserved keyword in Dart
_global.assert = function assert(condition) {
    // TODO: to be fixed properly via #2830, noop for now
};
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isBlank(obj) {
    return obj === undefined || obj === null;
}
function isBoolean(obj) {
    return typeof obj === 'boolean';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isString(obj) {
    return typeof obj === 'string';
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isType(obj) {
    return isFunction(obj);
}
function isStringMap(obj) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
}
var STRING_MAP_PROTO = Object.getPrototypeOf({});
function isStrictStringMap(obj) {
    return isStringMap(obj) && Object.getPrototypeOf(obj) === STRING_MAP_PROTO;
}
function isPromise(obj) {
    return obj instanceof _global.Promise;
}
function isArray(obj) {
    return Array.isArray(obj);
}
function isDate(obj) {
    return obj instanceof Date && !isNaN(obj.valueOf());
}
function noop() {}
function stringify(token) {
    if (typeof token === 'string') {
        return token;
    }
    if (token === undefined || token === null) {
        return '' + token;
    }
    if (token.name) {
        return token.name;
    }
    if (token.overriddenName) {
        return token.overriddenName;
    }
    var res = token.toString();
    var newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
// serialize / deserialize enum exist only for consistency with dart API
// enums in typescript don't need to be serialized
function serializeEnum(val) {
    return val;
}
function deserializeEnum(val, values) {
    return val;
}
function resolveEnumToken(enumValue, val) {
    return enumValue[val];
}

var StringWrapper = function () {
    function StringWrapper() {
        _classCallCheck(this, StringWrapper);
    }

    _createClass(StringWrapper, null, [{
        key: 'fromCharCode',
        value: function fromCharCode(code) {
            return String.fromCharCode(code);
        }
    }, {
        key: 'charCodeAt',
        value: function charCodeAt(s, index) {
            return s.charCodeAt(index);
        }
    }, {
        key: 'split',
        value: function split(s, regExp) {
            return s.split(regExp);
        }
    }, {
        key: 'equals',
        value: function equals(s, s2) {
            return s === s2;
        }
    }, {
        key: 'stripLeft',
        value: function stripLeft(s, charVal) {
            if (s && s.length) {
                var pos = 0;
                for (var i = 0; i < s.length; i++) {
                    if (s[i] != charVal) break;
                    pos++;
                }
                s = s.substring(pos);
            }
            return s;
        }
    }, {
        key: 'stripRight',
        value: function stripRight(s, charVal) {
            if (s && s.length) {
                var pos = s.length;
                for (var i = s.length - 1; i >= 0; i--) {
                    if (s[i] != charVal) break;
                    pos--;
                }
                s = s.substring(0, pos);
            }
            return s;
        }
    }, {
        key: 'replace',
        value: function replace(s, from, _replace) {
            return s.replace(from, _replace);
        }
    }, {
        key: 'replaceAll',
        value: function replaceAll(s, from, replace) {
            return s.replace(from, replace);
        }
    }, {
        key: 'slice',
        value: function slice(s) {
            var from = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
            var to = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

            return s.slice(from, to === null ? undefined : to);
        }
    }, {
        key: 'replaceAllMapped',
        value: function replaceAllMapped(s, from, cb) {
            return s.replace(from, function () {
                for (var _len = arguments.length, matches = Array(_len), _key = 0; _key < _len; _key++) {
                    matches[_key] = arguments[_key];
                }

                // Remove offset & string from the result array
                matches.splice(-2, 2);
                // The callback receives match, p1, ..., pn
                return cb(matches);
            });
        }
    }, {
        key: 'contains',
        value: function contains(s, substr) {
            return s.indexOf(substr) != -1;
        }
    }, {
        key: 'compare',
        value: function compare(a, b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
        }
    }]);

    return StringWrapper;
}();



var StringJoiner = function () {
    function StringJoiner() {
        var parts = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _classCallCheck(this, StringJoiner);

        this.parts = parts;
    }

    _createClass(StringJoiner, [{
        key: 'add',
        value: function add(part) {
            this.parts.push(part);
        }
    }, {
        key: 'toString',
        value: function toString() {
            return this.parts.join('');
        }
    }]);

    return StringJoiner;
}();
var NumberParseError = function (_Error) {
    _inherits(NumberParseError, _Error);

    function NumberParseError(message) {
        _classCallCheck(this, NumberParseError);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(NumberParseError).call(this));

        _this.message = message;
        return _this;
    }

    _createClass(NumberParseError, [{
        key: 'toString',
        value: function toString() {
            return this.message;
        }
    }]);

    return NumberParseError;
}(Error);
var NumberWrapper = function () {
    function NumberWrapper() {
        _classCallCheck(this, NumberWrapper);
    }

    _createClass(NumberWrapper, null, [{
        key: 'toFixed',
        value: function toFixed(n, fractionDigits) {
            return n.toFixed(fractionDigits);
        }
    }, {
        key: 'equal',
        value: function equal(a, b) {
            return a === b;
        }
    }, {
        key: 'parseIntAutoRadix',
        value: function parseIntAutoRadix(text) {
            var result = parseInt(text);
            if (isNaN(result)) {
                throw new NumberParseError('Invalid integer literal when parsing ' + text);
            }
            return result;
        }
    }, {
        key: 'parseInt',
        value: function (_parseInt) {
            function parseInt(_x4, _x5) {
                return _parseInt.apply(this, arguments);
            }

            parseInt.toString = function () {
                return _parseInt.toString();
            };

            return parseInt;
        }(function (text, radix) {
            if (radix == 10) {
                if (/^(\-|\+)?[0-9]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            } else if (radix == 16) {
                if (/^(\-|\+)?[0-9ABCDEFabcdef]+$/.test(text)) {
                    return parseInt(text, radix);
                }
            } else {
                var result = parseInt(text, radix);
                if (!isNaN(result)) {
                    return result;
                }
            }
            throw new NumberParseError('Invalid integer literal when parsing ' + text + ' in base ' + radix);
        })
        // TODO: NaN is a valid literal but is returned by parseFloat to indicate an error.

    }, {
        key: 'parseFloat',
        value: function (_parseFloat) {
            function parseFloat(_x6) {
                return _parseFloat.apply(this, arguments);
            }

            parseFloat.toString = function () {
                return _parseFloat.toString();
            };

            return parseFloat;
        }(function (text) {
            return parseFloat(text);
        })
    }, {
        key: 'isNumeric',
        value: function isNumeric(value) {
            return !isNaN(value - parseFloat(value));
        }
    }, {
        key: 'isNaN',
        value: function (_isNaN) {
            function isNaN(_x7) {
                return _isNaN.apply(this, arguments);
            }

            isNaN.toString = function () {
                return _isNaN.toString();
            };

            return isNaN;
        }(function (value) {
            return isNaN(value);
        })
    }, {
        key: 'isInteger',
        value: function isInteger(value) {
            return Number.isInteger(value);
        }
    }, {
        key: 'NaN',
        get: function get() {
            return NaN;
        }
    }]);

    return NumberWrapper;
}();
var RegExp = _global.RegExp;
var RegExpWrapper = function () {
    function RegExpWrapper() {
        _classCallCheck(this, RegExpWrapper);
    }

    _createClass(RegExpWrapper, null, [{
        key: 'create',
        value: function create(regExpStr) {
            var flags = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

            flags = flags.replace(/g/g, '');
            return new _global.RegExp(regExpStr, flags + 'g');
        }
    }, {
        key: 'firstMatch',
        value: function firstMatch(regExp, input) {
            // Reset multimatch regex state
            regExp.lastIndex = 0;
            return regExp.exec(input);
        }
    }, {
        key: 'test',
        value: function test(regExp, input) {
            regExp.lastIndex = 0;
            return regExp.test(input);
        }
    }, {
        key: 'matcher',
        value: function matcher(regExp, input) {
            // Reset regex state for the case
            // someone did not loop over all matches
            // last time.
            regExp.lastIndex = 0;
            return { re: regExp, input: input };
        }
    }, {
        key: 'replaceAll',
        value: function replaceAll(regExp, input, replace) {
            var c = regExp.exec(input);
            var res = '';
            regExp.lastIndex = 0;
            var prev = 0;
            while (c) {
                res += input.substring(prev, c.index);
                res += replace(c);
                prev = c.index + c[0].length;
                regExp.lastIndex = prev;
                c = regExp.exec(input);
            }
            res += input.substring(prev);
            return res;
        }
    }]);

    return RegExpWrapper;
}();
var RegExpMatcherWrapper = function () {
    function RegExpMatcherWrapper() {
        _classCallCheck(this, RegExpMatcherWrapper);
    }

    _createClass(RegExpMatcherWrapper, null, [{
        key: 'next',
        value: function next(matcher) {
            return matcher.re.exec(matcher.input);
        }
    }]);

    return RegExpMatcherWrapper;
}();
var FunctionWrapper = function () {
    function FunctionWrapper() {
        _classCallCheck(this, FunctionWrapper);
    }

    _createClass(FunctionWrapper, null, [{
        key: 'apply',
        value: function apply(fn, posArgs) {
            return fn.apply(null, posArgs);
        }
    }, {
        key: 'bind',
        value: function bind(fn, scope) {
            return fn.bind(scope);
        }
    }]);

    return FunctionWrapper;
}();
// JS has NaN !== NaN
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
// JS considers NaN is the same as NaN for map Key (while NaN !== NaN otherwise)
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
function getMapKey(value) {
    return value;
}
function normalizeBlank(obj) {
    return isBlank(obj) ? null : obj;
}
function normalizeBool(obj) {
    return isBlank(obj) ? false : obj;
}
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === 'object');
}
function print(obj) {
    console.log(obj);
}
function warn(obj) {
    console.warn(obj);
}
// Can't be all uppercase as our transpiler would think it is a special directive...
var Json = function () {
    function Json() {
        _classCallCheck(this, Json);
    }

    _createClass(Json, null, [{
        key: 'parse',
        value: function parse(s) {
            return _global.JSON.parse(s);
        }
    }, {
        key: 'stringify',
        value: function stringify(data) {
            // Dart doesn't take 3 arguments
            return _global.JSON.stringify(data, null, 2);
        }
    }]);

    return Json;
}();
var DateWrapper = function () {
    function DateWrapper() {
        _classCallCheck(this, DateWrapper);
    }

    _createClass(DateWrapper, null, [{
        key: 'create',
        value: function create(year) {
            var month = arguments.length <= 1 || arguments[1] === undefined ? 1 : arguments[1];
            var day = arguments.length <= 2 || arguments[2] === undefined ? 1 : arguments[2];
            var hour = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
            var minutes = arguments.length <= 4 || arguments[4] === undefined ? 0 : arguments[4];
            var seconds = arguments.length <= 5 || arguments[5] === undefined ? 0 : arguments[5];
            var milliseconds = arguments.length <= 6 || arguments[6] === undefined ? 0 : arguments[6];

            return new Date(year, month - 1, day, hour, minutes, seconds, milliseconds);
        }
    }, {
        key: 'fromISOString',
        value: function fromISOString(str) {
            return new Date(str);
        }
    }, {
        key: 'fromMillis',
        value: function fromMillis(ms) {
            return new Date(ms);
        }
    }, {
        key: 'toMillis',
        value: function toMillis(date) {
            return date.getTime();
        }
    }, {
        key: 'now',
        value: function now() {
            return new Date();
        }
    }, {
        key: 'toJson',
        value: function toJson(date) {
            return date.toJSON();
        }
    }]);

    return DateWrapper;
}();
function setValueOnPath(global, path, value) {
    var parts = path.split('.');
    var obj = global;
    while (parts.length > 1) {
        var name = parts.shift();
        if (obj.hasOwnProperty(name) && isPresent(obj[name])) {
            obj = obj[name];
        } else {
            obj = obj[name] = {};
        }
    }
    if (obj === undefined || obj === null) {
        obj = {};
    }
    obj[parts.shift()] = value;
}
var _symbolIterator = null;
function getSymbolIterator() {
    if (isBlank(_symbolIterator)) {
        if (isPresent(globalScope.Symbol) && isPresent(Symbol.iterator)) {
            _symbolIterator = Symbol.iterator;
        } else {
            // es6-shim specific logic
            var keys = Object.getOwnPropertyNames(Map.prototype);
            for (var i = 0; i < keys.length; ++i) {
                var key = keys[i];
                if (key !== 'entries' && key !== 'size' && Map.prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
function evalExpression(sourceUrl, expr, declarations, vars) {
    var fnBody = declarations + '\nreturn ' + expr + '\n//# sourceURL=' + sourceUrl;
    var fnArgNames = [];
    var fnArgValues = [];
    for (var argName in vars) {
        fnArgNames.push(argName);
        fnArgValues.push(vars[argName]);
    }
    return new (Function.prototype.bind.apply(Function, [null].concat(_toConsumableArray(fnArgNames.concat(fnBody)))))().apply(undefined, fnArgValues);
}
function isPrimitive(obj) {
    return !isJsObject(obj);
}
function hasConstructor(value, type) {
    return value.constructor === type;
}
function escape(s) {
    return _global.encodeURI(s);
}
function escapeRegExp(s) {
    return s.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
}
//# sourceMappingURL=lang.js.map
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(122)))

/***/ },

/***/ 80:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_async__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serializer__ = __webpack_require__(32);

/* harmony export */ __webpack_require__.d(exports, "c", function() { return ClientMessageBrokerFactory; });
/* harmony export */ __webpack_require__.d(exports, "d", function() { return ClientMessageBrokerFactory_; });/* unused harmony export ClientMessageBroker *//* unused harmony export ClientMessageBroker_ */
/* harmony export */ __webpack_require__.d(exports, "b", function() { return FnArg; });
/* harmony export */ __webpack_require__.d(exports, "a", function() { return UiArguments; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







/**
 * @experimental
 */
var ClientMessageBrokerFactory = function ClientMessageBrokerFactory() {
    _classCallCheck(this, ClientMessageBrokerFactory);
};
var ClientMessageBrokerFactory_ = function (_ClientMessageBrokerF) {
    _inherits(ClientMessageBrokerFactory_, _ClientMessageBrokerF);

    function ClientMessageBrokerFactory_(_messageBus, _serializer) {
        _classCallCheck(this, ClientMessageBrokerFactory_);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ClientMessageBrokerFactory_).call(this));

        _this._messageBus = _messageBus;
        _this._serializer = _serializer;
        return _this;
    }
    /**
     * Initializes the given channel and attaches a new {@link ClientMessageBroker} to it.
     */


    _createClass(ClientMessageBrokerFactory_, [{
        key: 'createMessageBroker',
        value: function createMessageBroker(channel) {
            var runInZone = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            this._messageBus.initChannel(channel, runInZone);
            return new ClientMessageBroker_(this._messageBus, this._serializer, channel);
        }
    }]);

    return ClientMessageBrokerFactory_;
}(ClientMessageBrokerFactory);
/** @nocollapse */
ClientMessageBrokerFactory_.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
ClientMessageBrokerFactory_.ctorParameters = [{ type: __WEBPACK_IMPORTED_MODULE_4__message_bus__["MessageBus"] }, { type: __WEBPACK_IMPORTED_MODULE_5__serializer__["a" /* Serializer */] }];
/**
 * @experimental
 */
var ClientMessageBroker = function ClientMessageBroker() {
    _classCallCheck(this, ClientMessageBroker);
};
var ClientMessageBroker_ = function (_ClientMessageBroker) {
    _inherits(ClientMessageBroker_, _ClientMessageBroker);

    function ClientMessageBroker_(messageBus, _serializer, channel /** TODO #9100 */) {
        _classCallCheck(this, ClientMessageBroker_);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ClientMessageBroker_).call(this));

        _this2.channel = channel;
        _this2._pending = new Map();
        _this2._sink = messageBus.to(channel);
        _this2._serializer = _serializer;
        var source = messageBus.from(channel);
        __WEBPACK_IMPORTED_MODULE_1__facade_async__["a" /* ObservableWrapper */].subscribe(source, function (message) {
            return _this2._handleMessage(message);
        });
        return _this2;
    }

    _createClass(ClientMessageBroker_, [{
        key: '_generateMessageId',
        value: function _generateMessageId(name) {
            var time = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["l" /* stringify */])(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["p" /* DateWrapper */].toMillis(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["p" /* DateWrapper */].now()));
            var iteration = 0;
            var id = name + time + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["l" /* stringify */])(iteration);
            while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(this._pending[id])) {
                id = '' + name + time + iteration;
                iteration++;
            }
            return id;
        }
    }, {
        key: 'runOnService',
        value: function runOnService(args, returnType) {
            var _this3 = this;

            var fnArgs = [];
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(args.args)) {
                args.args.forEach(function (argument) {
                    if (argument.type != null) {
                        fnArgs.push(_this3._serializer.serialize(argument.value, argument.type));
                    } else {
                        fnArgs.push(argument.value);
                    }
                });
            }
            var promise;
            var id = null;
            if (returnType != null) {
                var completer = __WEBPACK_IMPORTED_MODULE_1__facade_async__["b" /* PromiseWrapper */].completer();
                id = this._generateMessageId(args.method);
                this._pending.set(id, completer);
                __WEBPACK_IMPORTED_MODULE_1__facade_async__["b" /* PromiseWrapper */].catchError(completer.promise, function (err, stack) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["s" /* print */])(err);
                    completer.reject(err, stack);
                });
                promise = __WEBPACK_IMPORTED_MODULE_1__facade_async__["b" /* PromiseWrapper */].then(completer.promise, function (value) {
                    if (_this3._serializer == null) {
                        return value;
                    } else {
                        return _this3._serializer.deserialize(value, returnType);
                    }
                });
            } else {
                promise = null;
            }
            // TODO(jteplitz602): Create a class for these messages so we don't keep using StringMap #3685
            var message = { 'method': args.method, 'args': fnArgs };
            if (id != null) {
                message['id'] = id;
            }
            __WEBPACK_IMPORTED_MODULE_1__facade_async__["a" /* ObservableWrapper */].callEmit(this._sink, message);
            return promise;
        }
    }, {
        key: '_handleMessage',
        value: function _handleMessage(message) {
            var data = new MessageData(message);
            // TODO(jteplitz602): replace these strings with messaging constants #3685
            if (__WEBPACK_IMPORTED_MODULE_3__facade_lang__["h" /* StringWrapper */].equals(data.type, 'result') || __WEBPACK_IMPORTED_MODULE_3__facade_lang__["h" /* StringWrapper */].equals(data.type, 'error')) {
                var id = data.id;
                if (this._pending.has(id)) {
                    if (__WEBPACK_IMPORTED_MODULE_3__facade_lang__["h" /* StringWrapper */].equals(data.type, 'result')) {
                        this._pending.get(id).resolve(data.value);
                    } else {
                        this._pending.get(id).reject(data.value, null);
                    }
                    this._pending.delete(id);
                }
            }
        }
    }]);

    return ClientMessageBroker_;
}(ClientMessageBroker);

var MessageData = function () {
    function MessageData(data) {
        _classCallCheck(this, MessageData);

        this.type = __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].get(data, 'type');
        this.id = this._getValueIfPresent(data, 'id');
        this.value = this._getValueIfPresent(data, 'value');
    }
    /**
     * Returns the value from the StringMap if present. Otherwise returns null
     * @internal
     */


    _createClass(MessageData, [{
        key: '_getValueIfPresent',
        value: function _getValueIfPresent(data, key) {
            if (__WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].contains(data, key)) {
                return __WEBPACK_IMPORTED_MODULE_2__facade_collection__["d" /* StringMapWrapper */].get(data, key);
            } else {
                return null;
            }
        }
    }]);

    return MessageData;
}();
/**
 * @experimental
 */


var FnArg = function FnArg(value /** TODO #9100 */, type) {
    _classCallCheck(this, FnArg);

    this.value = value;
    this.type = type;
};
/**
 * @experimental
 */
var UiArguments = function UiArguments(method, args) {
    _classCallCheck(this, UiArguments);

    this.method = method;
    this.args = args;
};
//# sourceMappingURL=client_message_broker.js.map

/***/ },

/***/ 81:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return RenderStore; });var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var RenderStore = function () {
    function RenderStore() {
        _classCallCheck(this, RenderStore);

        this._nextIndex = 0;
        this._lookupById = new Map();
        this._lookupByObject = new Map();
    }

    _createClass(RenderStore, [{
        key: 'allocateId',
        value: function allocateId() {
            return this._nextIndex++;
        }
    }, {
        key: 'store',
        value: function store(obj, id) {
            this._lookupById.set(id, obj);
            this._lookupByObject.set(obj, id);
        }
    }, {
        key: 'remove',
        value: function remove(obj) {
            var index = this._lookupByObject.get(obj);
            this._lookupByObject.delete(obj);
            this._lookupById.delete(index);
        }
    }, {
        key: 'deserialize',
        value: function deserialize(id) {
            if (id == null) {
                return null;
            }
            if (!this._lookupById.has(id)) {
                return null;
            }
            return this._lookupById.get(id);
        }
    }, {
        key: 'serialize',
        value: function serialize(obj) {
            if (obj == null) {
                return null;
            }
            return this._lookupByObject.get(obj);
        }
    }]);

    return RenderStore;
}();
/** @nocollapse */
RenderStore.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
RenderStore.ctorParameters = [];
//# sourceMappingURL=render_store.js.map

/***/ },

/***/ 82:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facade_async__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facade_collection__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__facade_lang__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_message_bus__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_serializer__ = __webpack_require__(32);

/* harmony export */ __webpack_require__.d(exports, "a", function() { return ServiceMessageBrokerFactory; });
/* harmony export */ __webpack_require__.d(exports, "b", function() { return ServiceMessageBrokerFactory_; });/* unused harmony export ServiceMessageBroker *//* unused harmony export ServiceMessageBroker_ *//* unused harmony export ReceivedMessage */var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var ServiceMessageBrokerFactory = function ServiceMessageBrokerFactory() {
    _classCallCheck(this, ServiceMessageBrokerFactory);
};
var ServiceMessageBrokerFactory_ = function (_ServiceMessageBroker) {
    _inherits(ServiceMessageBrokerFactory_, _ServiceMessageBroker);

    function ServiceMessageBrokerFactory_(_messageBus, _serializer) {
        _classCallCheck(this, ServiceMessageBrokerFactory_);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ServiceMessageBrokerFactory_).call(this));

        _this._messageBus = _messageBus;
        _this._serializer = _serializer;
        return _this;
    }

    _createClass(ServiceMessageBrokerFactory_, [{
        key: 'createMessageBroker',
        value: function createMessageBroker(channel) {
            var runInZone = arguments.length <= 1 || arguments[1] === undefined ? true : arguments[1];

            this._messageBus.initChannel(channel, runInZone);
            return new ServiceMessageBroker_(this._messageBus, this._serializer, channel);
        }
    }]);

    return ServiceMessageBrokerFactory_;
}(ServiceMessageBrokerFactory);
/** @nocollapse */
ServiceMessageBrokerFactory_.decorators = [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Injectable */] }];
/** @nocollapse */
ServiceMessageBrokerFactory_.ctorParameters = [{ type: __WEBPACK_IMPORTED_MODULE_4__shared_message_bus__["MessageBus"] }, { type: __WEBPACK_IMPORTED_MODULE_5__shared_serializer__["a" /* Serializer */] }];
/**
 * @experimental
 */
var ServiceMessageBroker = function ServiceMessageBroker() {
    _classCallCheck(this, ServiceMessageBroker);
};
/**
 * Helper class for UIComponents that allows components to register methods.
 * If a registered method message is received from the broker on the worker,
 * the UIMessageBroker deserializes its arguments and calls the registered method.
 * If that method returns a promise, the UIMessageBroker returns the result to the worker.
 */
var ServiceMessageBroker_ = function (_ServiceMessageBroker2) {
    _inherits(ServiceMessageBroker_, _ServiceMessageBroker2);

    function ServiceMessageBroker_(messageBus, _serializer, channel /** TODO #9100 */) {
        _classCallCheck(this, ServiceMessageBroker_);

        var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(ServiceMessageBroker_).call(this));

        _this2._serializer = _serializer;
        _this2.channel = channel;
        _this2._methods = new __WEBPACK_IMPORTED_MODULE_2__facade_collection__["e" /* Map */]();
        _this2._sink = messageBus.to(channel);
        var source = messageBus.from(channel);
        __WEBPACK_IMPORTED_MODULE_1__facade_async__["a" /* ObservableWrapper */].subscribe(source, function (message) {
            return _this2._handleMessage(message);
        });
        return _this2;
    }

    _createClass(ServiceMessageBroker_, [{
        key: 'registerMethod',
        value: function registerMethod(methodName, signature, method, returnType) {
            var _this3 = this;

            this._methods.set(methodName, function (message) {
                var serializedArgs = message.args;
                var numArgs = signature === null ? 0 : signature.length;
                var deserializedArgs = __WEBPACK_IMPORTED_MODULE_2__facade_collection__["c" /* ListWrapper */].createFixedSize(numArgs);
                for (var i = 0; i < numArgs; i++) {
                    var serializedArg = serializedArgs[i];
                    deserializedArgs[i] = _this3._serializer.deserialize(serializedArg, signature[i]);
                }
                var promise = __WEBPACK_IMPORTED_MODULE_3__facade_lang__["t" /* FunctionWrapper */].apply(method, deserializedArgs);
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(returnType) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__facade_lang__["b" /* isPresent */])(promise)) {
                    _this3._wrapWebWorkerPromise(message.id, promise, returnType);
                }
            });
        }
    }, {
        key: '_handleMessage',
        value: function _handleMessage(map) {
            var message = new ReceivedMessage(map);
            if (this._methods.has(message.method)) {
                this._methods.get(message.method)(message);
            }
        }
    }, {
        key: '_wrapWebWorkerPromise',
        value: function _wrapWebWorkerPromise(id, promise, type) {
            var _this4 = this;

            __WEBPACK_IMPORTED_MODULE_1__facade_async__["b" /* PromiseWrapper */].then(promise, function (result) {
                __WEBPACK_IMPORTED_MODULE_1__facade_async__["a" /* ObservableWrapper */].callEmit(_this4._sink, { 'type': 'result', 'value': _this4._serializer.serialize(result, type), 'id': id });
            });
        }
    }]);

    return ServiceMessageBroker_;
}(ServiceMessageBroker);
/**
 * @experimental
 */
var ReceivedMessage = function ReceivedMessage(data) {
    _classCallCheck(this, ReceivedMessage);

    this.method = data['method'];
    this.args = data['args'];
    this.id = data['id'];
    this.type = data['type'];
};
//# sourceMappingURL=service_message_broker.js.map

/***/ }

},[544]);
//# sourceMappingURL=main.map