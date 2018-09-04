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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-topbar></app-topbar>\n<app-workspace></app-workspace>\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n"

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
                _workcanvas_workcanvas_component__WEBPACK_IMPORTED_MODULE_5__["WorkcanvasComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

module.exports = ""

/***/ }),

/***/ "./src/app/workcanvas/workcanvas.component.html":
/*!******************************************************!*\
  !*** ./src/app/workcanvas/workcanvas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas id=\"workcanvas\" width=\"800\" height=\"800\">\n\n</canvas>\n"

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
    function WorkcanvasComponent(elementRef) {
        this.elementRef = elementRef;
        this.c = window['createjs'];
        console.log(this.c);
    }
    WorkcanvasComponent.prototype.ngOnInit = function () {
    };
    WorkcanvasComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var canvas = this.elementRef.nativeElement.querySelector('#workcanvas'); //获取第一个p
        console.dir(canvas);
        var timeline = new this.c.Timeline();
        var stage = new this.c.Stage(canvas);
        this.c.Touch.enable(stage);
        this.c.Ticker.addEventListener("tick", stage);
        var queue = new this.c.LoadQueue();
        queue.loadManifest([
            {
                id: 'bg',
                src: 'http://file06.16sucai.com/2016/0329/c2761608b0aa52d7404e460978c08a2d.jpg',
            },
            {
                id: 'img1',
                src: 'http://img5.duitang.com/uploads/item/201510/04/20151004095236_fFeZX.thumb.700_0.jpeg',
            },
            {
                id: 'img2',
                src: 'http://img5.duitang.com/uploads/item/201509/02/20150902213319_wNPYn.thumb.700_0.jpeg',
            },
            {
                id: 'img3',
                src: 'http://img5.duitang.com/uploads/item/201510/04/20151004095106_KZRmG.thumb.700_0.jpeg',
            },
            {
                id: 'img4',
                src: 'http://cdn.duitang.com/uploads/item/201509/02/20150902220621_NZTMf.thumb.700_0.jpeg',
            },
            {
                id: 'img5',
                src: 'http://cdn.duitang.com/uploads/item/201509/02/20150902220128_TC35w.thumb.700_0.jpeg',
            }
        ]);
        queue.on('complete', function () {
            console.log('complete');
            // bg
            var bg = queue.getResult('bg');
            console.log(canvas.height);
            var bgBitmap = new _this.c.Bitmap(bg);
            bgBitmap.set({
                height: canvas.height,
                scaleY: 1.1,
            });
            stage.addChild(bgBitmap);
            // bitmap1 -----------------------------------------------------------------------------
            /* var img1 = queue.getResult('img1');
            var bitmap1 = new this.c.Bitmap(img1);
            
            var bitmapMask = new this.c.Shape();
            bitmapMask.graphics.beginFill('red').drawCircle(150, 150, 100);
            bitmap1.mask = bitmapMask;
            var container = new this.c.Container();
            bitmapMask.shadow = new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10);
            container.addChild(bitmapMask);
            container.addChild(bitmap1);
            
            bitmap1.set({
              scaleX: 0.5,
              scaleY: 0.5,
            })
            container.set({
              x: 250,
              y: 250,
            })*/
            var img1 = queue.getResult('img1');
            var bitmap1 = new _this.c.Bitmap(img1);
            stage.addChild(bitmap1);
            bitmap1.set({
                regX: img1.width / 2,
                regY: img1.height / 2,
                x: canvas.width + img1.width / 2,
                y: canvas.height / 2,
                rotation: 10,
                shadow: new _this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
            });
            var tween1 = _this.c.Tween.get(bitmap1, {})
                .to({
                x: canvas.width / 2,
                y: canvas.height / 2,
            }, 1000, _this.c.Ease.backInOut)
                .wait(1000)
                .to({
                x: -canvas.width / 2
            }, 700);
            // bitmap2 -------------------------------------------------------------------------------
            /* var img2 = queue.getResult('img2');
            var width = img2.width;
            var height = img2.height;
            console.log([width, height]);
            var bitmap2 = new this.c.Bitmap(img2);
            bitmap2.shadow = new this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10);
            
            bitmap2.set({
              x: 400,
              y: 400,
              regX: width / 2,
              regY: height / 2,
              cursor : 'pointer',
              rotation: 0,
            })
            stage.addChild(bitmap2);
            stage.addChild(container);
            // tween
      
            var tween2 = this.c.Tween.get(bitmap2, {loop: -1, bounce: true})
              // .wait(500)
              .to({
                // alpha:1,
                // visible:false,
                rotation: 360,
              }, 1000, this.c.Ease.backInOut)
              .to({
                alpha: 0.8,
              }, 2000, this.c.Ease.linear)
              .to({
                alpha: 1,
                // alpha: 1,
                scaleX: 0.5,
                scaleY: 0.5,
              }, 2000)
              .to({
                scaleX: 1,
                scaleY: 1,
              }, 5000)
              .call(function() {
                console.log('ddddddddddddddddddddddddd');
              });
      
      
              this.c.MotionGuidePlugin.install();
              var tween1 = this.c.Tween.get(container, {loop: -1 }).to({guide:{ path:[250,250, 0,0, 200,200, 200,600, 0,0, 100,100, 250, 250] }},5000);*/
            var img2 = queue.getResult('img2');
            var bitmap2 = new _this.c.Bitmap(img2);
            stage.addChild(bitmap2);
            bitmap2.set({
                regX: img2.width / 2,
                regY: img2.height / 2,
                x: canvas.width + img2.width * 0.7,
                y: canvas.height / 2,
                rotation: -10,
                shadow: new _this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
            });
            var tween2 = _this.c.Tween.get(bitmap2, {})
                .wait(2000)
                .to({
                x: canvas.width / 2
            }, 1000, _this.c.Ease.backInOut)
                .wait(1000)
                .to({
                x: -canvas.width / 2
            }, 700);
            // bitmap3 -----------------------------------------------------------------------------------------
            var img3 = queue.getResult('img3');
            var bitmap3 = new _this.c.Bitmap(img3);
            stage.addChild(bitmap3);
            bitmap3.set({
                regX: img3.width / 2,
                regY: img3.height / 2,
                x: canvas.width + img3.width * 0.7,
                y: canvas.height / 2,
                rotation: 10,
                shadow: new _this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
            });
            var tween3 = _this.c.Tween.get(bitmap3, {})
                .wait(4000)
                .to({
                x: canvas.width / 2
            }, 1000, _this.c.Ease.backInOut)
                .wait(1000)
                .to({
                x: -canvas.width / 2
            }, 700);
            // bitmap4 -----------------------------------------------------------------------------------------
            var img4 = queue.getResult('img4');
            var bitmap4 = new _this.c.Bitmap(img4);
            stage.addChild(bitmap4);
            bitmap4.set({
                regX: img4.width / 2,
                regY: img4.height / 2,
                x: canvas.width + img4.width * 0.7,
                y: canvas.height / 2,
                rotation: -10,
                shadow: new _this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
            });
            var tween4 = _this.c.Tween.get(bitmap4, {})
                .wait(6000)
                .to({
                x: canvas.width / 2
            }, 1000, _this.c.Ease.backInOut)
                .wait(1000)
                .to({
                x: -canvas.width / 2
            }, 700);
            // bitmap5 -----------------------------------------------------------------------------------------
            var img5 = queue.getResult('img5');
            var bitmap5 = new _this.c.Bitmap(img5);
            stage.addChild(bitmap5);
            bitmap5.set({
                regX: img5.width / 2,
                regY: img5.height / 2,
                x: canvas.width + img5.width * 0.7,
                y: canvas.height / 2,
                rotation: 10,
                shadow: new _this.c.Shadow("rgba(0,0,0,0.5)", 5, 5, 10),
            });
            var tween5 = _this.c.Tween.get(bitmap5, {})
                .wait(8000)
                .to({
                x: canvas.width / 2
            }, 1000, _this.c.Ease.backInOut)
                .wait(1000)
                .to({
                x: canvas.width / 2 - 1
            }, 1000);
            // price
            var priceContainer = new _this.c.Container();
            stage.addChild(priceContainer);
            priceContainer.set({
                y: 100,
            });
            var rect1 = new _this.c.Shape();
            rect1.graphics.beginFill('#c31311').drawRect(0, 0, 200, 40);
            rect1.set({
                x: -200,
                y: 0,
                opacity: 0,
            });
            var rect2 = new _this.c.Shape();
            rect2.graphics.beginFill('white').drawRect(0, 40, 300, 50);
            rect2.set({
                x: -300,
                y: 0,
                opacity: 0,
            });
            var rect3 = new _this.c.Shape();
            rect3.graphics.beginFill('gray').drawRect(0, 90, 250, 40);
            rect3.set({
                x: -250,
                y: 0,
                opacity: 0,
            });
            priceContainer.addChild(rect1);
            priceContainer.addChild(rect2);
            priceContainer.addChild(rect3);
            var rectTween1 = _this.c.Tween.get(rect1)
                .wait(2000)
                .to({
                x: -100,
                opacity: 1,
            }, 1500, _this.c.Ease.backInOut);
            var rectTween2 = _this.c.Tween.get(rect2)
                .wait(2000)
                .to({
                x: -150,
                opacity: 1,
            }, 1000, _this.c.Ease.backInOut);
            var rectTween3 = _this.c.Tween.get(rect3)
                .wait(2000)
                .to({
                x: -130,
                opacity: 1,
            }, 1200, _this.c.Ease.backInOut);
            // price 1
            var price1 = new _this.c.Text('促销价', 'bold 25px Impact');
            price1.set({
                color: 'white',
                x: 10,
                y: 5,
                alpha: 0,
            });
            priceContainer.addChild(price1);
            var priceTween1 = _this.c.Tween.get(price1)
                .wait(3000)
                .to({
                alpha: 1,
            }, 500);
            // price 2
            var price2 = new _this.c.Text('¥ 200', 'bold 35px Impact');
            price2.set({
                color: '#c31311',
                x: 10,
                y: 45,
                alpha: 0,
            });
            priceContainer.addChild(price2);
            var priceTween2 = _this.c.Tween.get(price2)
                .wait(3000)
                .to({
                alpha: 1,
            }, 500);
            // price 3
            var price3 = new _this.c.Text('原价 267', 'normal 25px Impact');
            price3.set({
                color: 'white',
                x: 10,
                y: 95,
                alpha: 0,
            });
            priceContainer.addChild(price3);
            var priceTween3 = _this.c.Tween.get(price3)
                .wait(3000)
                .to({
                alpha: 1,
            }, 500);
            // bar 
            var bar = new _this.c.Shape();
            bar.graphics.beginFill('#eeeeee').drawRect(0, 0, 100, 3);
            bar.set({
                x: -50,
                y: 110,
                alpha: 0,
            });
            var barTween = _this.c.Tween.get(bar)
                .wait(3000)
                .to({
                x: 10,
                alpha: 1,
            }, 500);
            priceContainer.addChild(bar);
            // timeline
            timeline.addTween(tween1, tween2, tween3, tween4, tween5, rectTween1, rectTween2, rectTween3, priceTween1, priceTween2, priceTween3, barTween);
            timeline.setPaused(true);
            timeline.setPosition(0.1);
        });
    };
    WorkcanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workcanvas',
            template: __webpack_require__(/*! ./workcanvas.component.html */ "./src/app/workcanvas/workcanvas.component.html"),
            styles: [__webpack_require__(/*! ./workcanvas.component.css */ "./src/app/workcanvas/workcanvas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
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

module.exports = "#app-workspace{\r\n\tbackground-color: rgba(0,0,0,0.5);\r\n\tmargin-top: 1rem;\r\n\tmargin-left: 1rem;\r\n\tpadding: 1rem;\r\n}"

/***/ }),

/***/ "./src/app/workspace/workspace.component.html":
/*!****************************************************!*\
  !*** ./src/app/workspace/workspace.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-workspace\">\n    <app-workcanvas></app-workcanvas>\n</div>\n"

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