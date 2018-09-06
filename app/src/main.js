(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actionpanel/actionpanel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/actionpanel/actionpanel.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\twidth: 300px;\r\n\tbackground-color: aliceblue;\r\n\tborder-left:1px solid #cccccc;\r\n}"

/***/ }),

/***/ "./src/app/actionpanel/actionpanel.component.html":
/*!********************************************************!*\
  !*** ./src/app/actionpanel/actionpanel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  actionpanel works!\n</p>\n"

/***/ }),

/***/ "./src/app/actionpanel/actionpanel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/actionpanel/actionpanel.component.ts ***!
  \******************************************************/
/*! exports provided: ActionpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionpanelComponent", function() { return ActionpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionpanelComponent = /** @class */ (function () {
    function ActionpanelComponent() {
    }
    ActionpanelComponent.prototype.ngOnInit = function () {
    };
    ActionpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actionpanel',
            template: __webpack_require__(/*! ./actionpanel.component.html */ "./src/app/actionpanel/actionpanel.component.html"),
            styles: [__webpack_require__(/*! ./actionpanel.component.css */ "./src/app/actionpanel/actionpanel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ActionpanelComponent);
    return ActionpanelComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\t\r\n}\r\n#root {\r\n\talign-items: stretch;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #cccccc;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n#top-half {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"root\">\n  <div id=\"top-half\">\n    <app-leftbar></app-leftbar>\n    <app-workspace></app-workspace>\n  </div>\n  <app-bottombar></app-bottombar>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/workspace/workspace.component.ts");
/* harmony import */ var _workcanvas_workcanvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./workcanvas/workcanvas.component */ "./src/app/workcanvas/workcanvas.component.ts");
/* harmony import */ var _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./leftbar/leftbar.component */ "./src/app/leftbar/leftbar.component.ts");
/* harmony import */ var _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bottombar/bottombar.component */ "./src/app/bottombar/bottombar.component.ts");
/* harmony import */ var _actionpanel_actionpanel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./actionpanel/actionpanel.component */ "./src/app/actionpanel/actionpanel.component.ts");
/* harmony import */ var _canvas_space_canvas_space_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./canvas-space/canvas-space.component */ "./src/app/canvas-space/canvas-space.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_3__["TopbarComponent"],
                _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_4__["WorkspaceComponent"],
                _workcanvas_workcanvas_component__WEBPACK_IMPORTED_MODULE_5__["WorkcanvasComponent"],
                _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_6__["LeftbarComponent"],
                _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_7__["BottombarComponent"],
                _actionpanel_actionpanel_component__WEBPACK_IMPORTED_MODULE_8__["ActionpanelComponent"],
                _canvas_space_canvas_space_component__WEBPACK_IMPORTED_MODULE_9__["CanvasSpaceComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bottombar/bottombar.component.css":
/*!***************************************************!*\
  !*** ./src/app/bottombar/bottombar.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\tbackground-color:#1ABC9C;\r\n\theight: 25px;\r\n\tposition: relative;\r\n}\r\n#bottom-bar{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\tbottom:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tcolor:white;\r\n}\r\n.edit-message-wrap{\r\n\tfloat:right;\r\n\tcolor:white;\r\n}\r\n.edit-message{\r\n\tdisplay: inline-block;\r\n\theight:25px;\r\n\tline-height: 25px;\r\n\tfont-size:12px;\r\n\tpadding:0 5px;\r\n}"

/***/ }),

/***/ "./src/app/bottombar/bottombar.component.html":
/*!****************************************************!*\
  !*** ./src/app/bottombar/bottombar.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bottom-bar\">\n\n    <div class=\"edit-message-wrap\">\n      <div class=\"row-index edit-message\">\n        12行\n      </div>\n      <div class=\"column-index edit-message\">\n        15列\n      </div>\n      <div class=\"charset edit-message\">\n        UTF-8\n      </div>\n      <div class=\"language edit-message\" >\n        language\n      </div>\n    </div>\n  \n    <div class=\"edit-message-wrap\">\n      <div class=\"edit-message\">\n        图片等\n      </div>    \n    </div>\n    \n  </div>\n  "

/***/ }),

/***/ "./src/app/bottombar/bottombar.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bottombar/bottombar.component.ts ***!
  \**************************************************/
/*! exports provided: BottombarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottombarComponent", function() { return BottombarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BottombarComponent = /** @class */ (function () {
    function BottombarComponent() {
    }
    BottombarComponent.prototype.ngOnInit = function () {
    };
    BottombarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottombar',
            template: __webpack_require__(/*! ./bottombar.component.html */ "./src/app/bottombar/bottombar.component.html"),
            styles: [__webpack_require__(/*! ./bottombar.component.css */ "./src/app/bottombar/bottombar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BottombarComponent);
    return BottombarComponent;
}());



/***/ }),

/***/ "./src/app/canvas-space/canvas-space.component.css":
/*!*********************************************************!*\
  !*** ./src/app/canvas-space/canvas-space.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n:host{\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.canvas-space-wrap{\r\n\tdisplay: block;\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n.image-space-webview{\r\n\tdisplay: block;\r\n\tdisplay:flex;\r\n\tflex:1;\r\n\tposition: absolute;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tleft:0;\r\n\ttop:0;\r\n\toverflow:hidden;\r\n}"

/***/ }),

/***/ "./src/app/canvas-space/canvas-space.component.html":
/*!**********************************************************!*\
  !*** ./src/app/canvas-space/canvas-space.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas-space-wrap scrollbar-override\" >\n  <webview \n    #webview\n    src=\"http://localhost:8080/c2.html\"\n    class=\"image-space-webview\"\n    minwidth=\"0\"\n    preload=\"./src/webview.js\"\n  >\n  </webview>\n</div>\n"

/***/ }),

/***/ "./src/app/canvas-space/canvas-space.component.ts":
/*!********************************************************!*\
  !*** ./src/app/canvas-space/canvas-space.component.ts ***!
  \********************************************************/
/*! exports provided: CanvasSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSpaceComponent", function() { return CanvasSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/canvas.service */ "./src/app/service/canvas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanvasSpaceComponent = /** @class */ (function () {
    function CanvasSpaceComponent(canvasService) {
        this.canvasService = canvasService;
        this.ready = false;
    }
    CanvasSpaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        // 订阅
        this.canvasService.observables.actions.subscribe(function (e) {
            console.log(e['type']);
            _this.webview.nativeElement.send(e['type'], '');
        });
        this.canvasService.observables.exportImg.subscribe(function (e) {
            console.log(e['path']);
            _this.webview.nativeElement.send('exportImg', e['path']);
        });
    };
    CanvasSpaceComponent.prototype.ngOnChanges = function (e) {
        //console.log(e);
        if (e.fileObj) {
            var activeFile = e.fileObj.currentValue;
            if (activeFile) {
                this.render(activeFile);
            }
        }
    };
    /**
     * 元素加载完成
     */
    CanvasSpaceComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.webview.nativeElement.addEventListener('dom-ready', function () {
            _this.ready = true;
            _this.webview.nativeElement.openDevTools();
            _this.injectCSS();
            // this.webview.nativeElement.send('setImage','aaaaaaaaaa.jpg');
            // this.webview.nativeElement.executeJavaScript('console.log(canvas)');
            // this.webview.nativeElement.executeJavaScript('stop()');
        });
        this.webview.nativeElement.addEventListener('ipc-message', function (e) {
            switch (e.channel) {
                case 'inited':
                    console.log(e);
                    _this.canvasService.init(JSON.parse(e.args[0]));
                    break;
                case 'base64':
                    console.log(e);
                    break;
                case 'setIsPaused':
                    _this.canvasService.setIsPaused(e['args'][0]);
                    break;
                case 'generateMp4':
                    _this.canvasService.generateMp4();
                    break;
                default:
                    break;
            }
        });
    };
    CanvasSpaceComponent.prototype.render = function (activeFile) {
        if (this.ready) {
            switch (activeFile.type) {
                case 'image':
                    this.webview.nativeElement.send('setImage', activeFile['src']);
                    break;
                case 'media':
                    this.webview.nativeElement.send('setMedia', activeFile['src']);
                    break;
                default:
                    break;
            }
        }
    };
    /**
     * 向webview 注入css代码
     */
    CanvasSpaceComponent.prototype.injectCSS = function () {
        this.webview.nativeElement.insertCSS("\n    body{\n      display: flex;\n      flex: 1;\n      align-items: center;\n      justify-content: center;\n      background-color: red;\n    }\n    canvas {\n      margin-top: 20px;\n    }\n  ");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('webview'),
        __metadata("design:type", Object)
    ], CanvasSpaceComponent.prototype, "webview", void 0);
    CanvasSpaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas-space',
            template: __webpack_require__(/*! ./canvas-space.component.html */ "./src/app/canvas-space/canvas-space.component.html"),
            styles: [__webpack_require__(/*! ./canvas-space.component.css */ "./src/app/canvas-space/canvas-space.component.css")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"]])
    ], CanvasSpaceComponent);
    return CanvasSpaceComponent;
}());



/***/ }),

/***/ "./src/app/leftbar/leftbar.component.css":
/*!***********************************************!*\
  !*** ./src/app/leftbar/leftbar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\tbackground-color:#2B2B2B;\r\n}\r\n#left-bar {\r\n\twidth:50px;\r\n\t\r\n\tcolor:#aaa;\r\n}"

/***/ }),

/***/ "./src/app/leftbar/leftbar.component.html":
/*!************************************************!*\
  !*** ./src/app/leftbar/leftbar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"left-bar\">\n  left bar\n</div>\n"

/***/ }),

/***/ "./src/app/leftbar/leftbar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/leftbar/leftbar.component.ts ***!
  \**********************************************/
/*! exports provided: LeftbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftbarComponent", function() { return LeftbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftbarComponent = /** @class */ (function () {
    function LeftbarComponent() {
    }
    LeftbarComponent.prototype.ngOnInit = function () {
    };
    LeftbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leftbar',
            template: __webpack_require__(/*! ./leftbar.component.html */ "./src/app/leftbar/leftbar.component.html"),
            styles: [__webpack_require__(/*! ./leftbar.component.css */ "./src/app/leftbar/leftbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LeftbarComponent);
    return LeftbarComponent;
}());



/***/ }),

/***/ "./src/app/service/canvas.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/canvas.service.ts ***!
  \*******************************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file.service */ "./src/app/service/file.service.ts");
/* harmony import */ var _ffmpeg_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ffmpeg.service */ "./src/app/service/ffmpeg.service.ts");
/* harmony import */ var _dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dialog.service */ "./src/app/service/dialog.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CanvasService = /** @class */ (function () {
    function CanvasService(fileservice, ffmpegService, dialogService) {
        this.fileservice = fileservice;
        this.ffmpegService = ffmpegService;
        this.dialogService = dialogService;
        this.paused = false;
        this.savePath = '';
        this.observables = {
            actions: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            exportImg: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
        };
    }
    CanvasService.prototype.setInstance = function () {
    };
    CanvasService.prototype.init = function (e) {
        console.log(e);
        var props = e;
        this.duration = props['duration'];
        this.fps = props['fps'];
        // "duration":121,"fps":40,"width":800,"height":800,"color":"#FFFFFF","paused":false
    };
    CanvasService.prototype.setIsPaused = function (paused) {
        this.paused = paused;
    };
    CanvasService.prototype.play = function () {
        // this.timeline.setPaused(false);
        this.observables.actions.next({
            type: 'play',
        });
    };
    CanvasService.prototype.pause = function () {
        this.observables.actions.next({
            type: 'pause',
        });
    };
    CanvasService.prototype.reset = function () {
        this.observables.actions.next({
            type: 'reset',
        });
    };
    CanvasService.prototype.goTo = function () {
    };
    // 导出文件
    CanvasService.prototype.exFile = function () {
        var _this = this;
        console.log('exFile');
        this.dialogService.openFile(function (e) {
            if (e && e[0]) {
                _this.savePath = e[0];
                _this.observables.exportImg.next({
                    path: e[0]
                });
            }
            console.log(e);
        });
        /* if (this.exportRoot) {
          // this.ffmpegService.generateMp4();
          console.log('ddd');
          // return;
          
          console.log(this.exportRoot);
          const duration = this.exportRoot.timeline.duration
          let currentPosition = 0;
          this.exportRoot.gotoAndStop(0.1);
    
          const tickHandler = this.exportRoot.timeline.on('change', () => {
            const thisPosition = this.exportRoot.timeline.position;
            this.stage.update();
            const base64str = this.canvas.toDataURL();
            this.fileservice.saveBase64(base64str, thisPosition, () => {
              console.log(thisPosition);
              if(thisPosition + 1 < duration) {
                this.exportRoot.gotoAndStop(thisPosition + 1);
              } else {
                this.exportRoot.timeline.off(tickHandler);
                this.ffmpegService.generateMp4();
                console.log('生成完毕');
              }
              // console.log(thisPosition);
            });
            
          });
          this.exportRoot.gotoAndStop(0);
        }*/
    };
    CanvasService.prototype.generateMp4 = function () {
        console.log('mp4');
        this.ffmpegService.generateMp4({ savePath: this.savePath, duration: this.duration, fps: this.fps });
    };
    CanvasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"], _ffmpeg_service__WEBPACK_IMPORTED_MODULE_2__["FfmpegService"], _dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"]])
    ], CanvasService);
    return CanvasService;
}());



/***/ }),

/***/ "./src/app/service/dialog.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/dialog.service.ts ***!
  \*******************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DialogService = /** @class */ (function () {
    function DialogService() {
        this.projectDir = null;
    }
    /**
     * 打开目录
     * @param callback
     */
    DialogService.prototype.openFile = function (callback) {
        var _this = this;
        window['remote'].dialog.showOpenDialog(window['remote'].getCurrentWindow(), {
            title: '请选择文件目录',
            properties: ['openDirectory', 'multiSelections']
        }, function (filePaths) {
            callback(filePaths);
            //this.getCurrentDirFiles(filePaths[0],result);
            if (!filePaths) {
                return;
            }
            _this.projectDir = filePaths[0];
            localStorage.setItem('projectDir', filePaths[0]);
            /*let homePath = window['remote'].app.getPath('userData');
            console.log('userData ',homePath);*/
        });
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/service/ffmpeg.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/ffmpeg.service.ts ***!
  \*******************************************/
/*! exports provided: FfmpegService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FfmpegService", function() { return FfmpegService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FfmpegService = /** @class */ (function () {
    function FfmpegService() {
        this.exec = window['exec'];
        this.path = window['path'];
    }
    FfmpegService.prototype.generateMp4 = function (_a) {
        var savePath = _a.savePath, duration = _a.duration, fps = _a.fps;
        alert('generateMp4');
        // console.log(__dirname);
        var currentDir = window['dirname'];
        var frompath = this.path.join(savePath, 'img%d.png');
        var distpath = this.path.join(savePath, 'video.mp4'); // 'D:/del3/video.mp4';
        var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r ' + fps + ' -f image2 -i ' + frompath + ' -t ' + (duration / fps) + ' -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 ' + distpath;
        // var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r 30 -f image2 -i D:/del3/img%d.png -t 10 -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 D:/del3/video.mp4'
        alert(commandStr);
        console.log(commandStr);
        var time = new Date();
        this.exec(commandStr, { cwd: currentDir }, function (err, data, data1) {
            if (err) {
                console.error(err);
                return;
            }
            console.log('生成成功');
        });
    };
    FfmpegService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FfmpegService);
    return FfmpegService;
}());



/***/ }),

/***/ "./src/app/service/file.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/file.service.ts ***!
  \*****************************************/
/*! exports provided: FileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileService", function() { return FileService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FileService = /** @class */ (function () {
    function FileService() {
        this.fs = window['fs'];
        this.path = window['path'];
    }
    FileService.prototype.getContent = function () {
        alert('ffffffffffff');
        this.fs.stat('', function () {
        });
    };
    FileService.prototype.saveBase64 = function (str, index, callback) {
        var imgdata = str.slice(22);
        this.fs.writeFile(this.path.join('D:\del3', 'img' + index + '.png'), imgdata, 'base64', function (err) {
            callback(err);
        });
    };
    FileService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FileService);
    return FileService;
}());



/***/ }),

/***/ "./src/app/topbar/topbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/topbar/topbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-topbar {\r\n\tbackground-color: black;\r\n\theight: 3rem;\r\n}"

/***/ }),

/***/ "./src/app/topbar/topbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/topbar/topbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-topbar\">\n  topbar works!\n</div>\n"

/***/ }),

/***/ "./src/app/topbar/topbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/topbar/topbar.component.ts ***!
  \********************************************/
/*! exports provided: TopbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopbarComponent", function() { return TopbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopbarComponent = /** @class */ (function () {
    function TopbarComponent() {
    }
    TopbarComponent.prototype.ngOnInit = function () {
    };
    TopbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topbar',
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/topbar/topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/workcanvas/workcanvas.component.css":
/*!*****************************************************!*\
  !*** ./src/app/workcanvas/workcanvas.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#canvas-wrap {\r\n\tflex: 1;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\toverflow: auto;\r\n}\r\n\r\n#canvas-wrap canvas {\r\n\tbackground-color: aliceblue;\r\n}\r\n\r\n#canvas-btn-wrap {\r\n\theight:50px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}"

/***/ }),

/***/ "./src/app/workcanvas/workcanvas.component.html":
/*!******************************************************!*\
  !*** ./src/app/workcanvas/workcanvas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"canvas-wrap\" class=\"scrollbar-override\">\n\t<!--<canvas id=\"canvas\" width=\"800\" height=\"800\">\n\t</canvas>-->\n\t<app-canvas-space></app-canvas-space>\n</div>\n<div id=\"canvas-btn-wrap\">\n\t{{ isPaused() }}\n\t<button (click)=\"play()\">\n\t\tplay\n\t</button>\n\t<button (click)=\"pause()\">\n\t\tpause\n\t</button>\n\t<button (click)=\"reset()\">\n\t\treset\n\t</button>\n\t<button (click)=\"exFile()\">\n\t\t导出\n\t</button>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/workcanvas/workcanvas.component.ts":
/*!****************************************************!*\
  !*** ./src/app/workcanvas/workcanvas.component.ts ***!
  \****************************************************/
/*! exports provided: WorkcanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkcanvasComponent", function() { return WorkcanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/canvas.service */ "./src/app/service/canvas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkcanvasComponent = /** @class */ (function () {
    function WorkcanvasComponent(elementRef, canvasService) {
        this.elementRef = elementRef;
        this.canvasService = canvasService;
        this.c = window['createjs'];
        console.log(this.c);
    }
    WorkcanvasComponent.prototype.ngOnInit = function () {
    };
    WorkcanvasComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.elementRef.nativeElement.querySelector('#canvas'); //获取第一个p
        // this.canvasService.init(canvas);
    };
    WorkcanvasComponent.prototype.play = function () {
        this.canvasService.play();
    };
    WorkcanvasComponent.prototype.pause = function () {
        this.canvasService.pause();
    };
    WorkcanvasComponent.prototype.reset = function () {
        this.canvasService.reset();
    };
    WorkcanvasComponent.prototype.exFile = function () {
        this.canvasService.exFile();
    };
    WorkcanvasComponent.prototype.isPaused = function () {
        return this.canvasService.paused;
    };
    WorkcanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workcanvas',
            template: __webpack_require__(/*! ./workcanvas.component.html */ "./src/app/workcanvas/workcanvas.component.html"),
            styles: [__webpack_require__(/*! ./workcanvas.component.css */ "./src/app/workcanvas/workcanvas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"]])
    ], WorkcanvasComponent);
    return WorkcanvasComponent;
}());



/***/ }),

/***/ "./src/app/workspace/workspace.component.css":
/*!***************************************************!*\
  !*** ./src/app/workspace/workspace.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tflex: 1;\r\n\tbackground-color: #eeeeee;\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\talign-items: stretch;\r\n}"

/***/ }),

/***/ "./src/app/workspace/workspace.component.html":
/*!****************************************************!*\
  !*** ./src/app/workspace/workspace.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-workcanvas></app-workcanvas>\n<app-actionpanel></app-actionpanel>\n\n"

/***/ }),

/***/ "./src/app/workspace/workspace.component.ts":
/*!**************************************************!*\
  !*** ./src/app/workspace/workspace.component.ts ***!
  \**************************************************/
/*! exports provided: WorkspaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkspaceComponent", function() { return WorkspaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkspaceComponent = /** @class */ (function () {
    function WorkspaceComponent() {
    }
    WorkspaceComponent.prototype.ngOnInit = function () {
    };
    WorkspaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workspace',
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.css */ "./src/app/workspace/workspace.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkspaceComponent);
    return WorkspaceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\code\vidora\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map