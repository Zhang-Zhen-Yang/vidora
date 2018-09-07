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

module.exports = "<p>\r\n  actionpanel works!\r\n</p>\r\n<form novalidate [formGroup]=\"myGroup\" #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" >\r\n    {{ myGroup.controls.name?.errors | json }}\r\n  <label for=\"\">\r\n    Name: <input type=\"text\" formControlName=\"name\">\r\n  </label>\r\n  <br>\r\n  <label for=\"\">\r\n    Location: <input type=\"text\" formControlName=\"location\">\r\n  </label>\r\n  <button type=\"submit\">Sign up</button>\r\n</form>\r\n<dynamic-form [config]=\"config\" #form=\"dynamicForm\" (submit)=\"submit($event)\"></dynamic-form>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dynamic-form2/containers/dynamic-form/dynamic-form.component */ "./src/app/dynamic-form2/containers/dynamic-form/dynamic-form.component.ts");
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
    function ActionpanelComponent(fb) {
        this.fb = fb;
        this.config = [
            {
                type: 'input',
                label: 'Full name',
                name: 'name',
                placeholder: 'Enter your name'
            },
            {
                type: 'select',
                label: 'Favourite food',
                name: 'food',
                options: ['Pizza', 'Hot Dogs', 'Knakworstje', 'Coffee'],
                placeholder: 'Select an option'
            },
            {
                type: 'button',
                label: 'Submit',
                name: 'submit'
            }
        ];
    }
    ActionpanelComponent.prototype.ngOnInit = function () {
        this.myGroup = this.fb.group({
            name: ['Semlinker', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]],
            location: ['China, CN']
        });
    };
    ActionpanelComponent.prototype.onSubmit = function (data) {
        // console.log(this.myGroup);
    };
    ActionpanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // alert('dddd');
        var previousValid = this.form.valid;
        this.form.changes.subscribe(function (e) {
            console.log(e);
            if (_this.form.valid !== previousValid) {
                previousValid = _this.form.valid;
                console.log(_this.form.valid);
                _this.form.setDisabled('submit', !previousValid);
            }
        });
        // this.form.setDisabled('submit', true); 
        this.form.setValue('name', 'Todd Motto');
        this.form.setValue('food', 'Hot Dogs');
    };
    ActionpanelComponent.prototype.submit = function (value) {
        console.log(value);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"]),
        __metadata("design:type", _dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"])
    ], ActionpanelComponent.prototype, "form", void 0);
    ActionpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actionpanel',
            template: __webpack_require__(/*! ./actionpanel.component.html */ "./src/app/actionpanel/actionpanel.component.html"),
            styles: [__webpack_require__(/*! ./actionpanel.component.css */ "./src/app/actionpanel/actionpanel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ActionpanelComponent);
    return ActionpanelComponent;
}());



/***/ }),

/***/ "./src/app/animate-template-item/animate-template-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/animate-template-item/animate-template-item.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\t\r\n}\r\n#template-item{\r\n\tdisplay: inline-block;\r\n\twidth:200px;\r\n\theight: 100px;\r\n\tbackground-color:orange;\r\n\tcursor: pointer;\r\n\tmargin-top: 10px;\r\n}\r\n#template-item-placeholder {\r\n\twidth: 200px;\r\n\theight: 0;\r\n}"

/***/ }),

/***/ "./src/app/animate-template-item/animate-template-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/animate-template-item/animate-template-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"template-item\" *ngIf=\"data.name\" (click)=\"loadTemplate(data.url)\">\r\n  animate-template-item works!\r\n  {{data.name}}\r\n</div>\r\n<div id=\"template-item-placeholder\" *ngIf=\"!data.name\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/animate-template-item/animate-template-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/animate-template-item/animate-template-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnimateTemplateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateTemplateItemComponent", function() { return AnimateTemplateItemComponent; });
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


var AnimateTemplateItemComponent = /** @class */ (function () {
    function AnimateTemplateItemComponent(canvasService) {
        this.canvasService = canvasService;
    }
    AnimateTemplateItemComponent.prototype.ngOnInit = function () {
    };
    AnimateTemplateItemComponent.prototype.loadTemplate = function (url) {
        // alert(url);
        this.canvasService.loadTemplate(url);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnimateTemplateItemComponent.prototype, "data", void 0);
    AnimateTemplateItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate-template-item',
            template: __webpack_require__(/*! ./animate-template-item.component.html */ "./src/app/animate-template-item/animate-template-item.component.html"),
            styles: [__webpack_require__(/*! ./animate-template-item.component.css */ "./src/app/animate-template-item/animate-template-item.component.css")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"]])
    ], AnimateTemplateItemComponent);
    return AnimateTemplateItemComponent;
}());



/***/ }),

/***/ "./src/app/animate-template/animate-template.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/animate-template/animate-template.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#template-wrap{\r\n\t/*width: 500px;*/\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tflex-wrap: wrap;\r\n}"

/***/ }),

/***/ "./src/app/animate-template/animate-template.component.html":
/*!******************************************************************!*\
  !*** ./src/app/animate-template/animate-template.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>Delete all</h2>\r\n<mat-dialog-content>\r\n  <div id=\"template-wrap\">\r\n    <app-animate-template-item *ngFor=\"let item of templates\" [data]=\"item\">\r\n    </app-animate-template-item>\r\n  </div>\r\n  \r\n</mat-dialog-content>\r\n<mat-dialog-actions>\r\n  <button mat-button mat-dialog-close>No</button>\r\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\r\n  <button mat-button [mat-dialog-close]=\"true\">Yes</button>\r\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/animate-template/animate-template.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/animate-template/animate-template.component.ts ***!
  \****************************************************************/
/*! exports provided: AnimateTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateTemplateComponent", function() { return AnimateTemplateComponent; });
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

var AnimateTemplateComponent = /** @class */ (function () {
    function AnimateTemplateComponent() {
        this.templates = [
            {
                name: '无标题2',
                url: 'C:/Users/Asus/Desktop/animate/b.html'
            },
            {
                name: 'c',
                url: 'C:/Users/Asus/Desktop/animate/c.html'
            },
            {
                name: 'c2',
                url: 'http://localhost:8080/c2.html'
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'aaaaa',
            },
            {
                name: 'bbb',
            },
            {
                name: 'ccc',
            },
            {
                name: 'ddd',
            },
            {
                name: 'eee',
            },
            {
                name: 'eee',
            },
            {
                name: '',
            },
            {
                name: '',
            },
            {
                name: '',
            },
            {
                name: '',
            },
            {
                name: '',
            },
            {
                name: '',
            },
        ];
    }
    AnimateTemplateComponent.prototype.ngOnInit = function () {
    };
    AnimateTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate-template',
            template: __webpack_require__(/*! ./animate-template.component.html */ "./src/app/animate-template/animate-template.component.html"),
            styles: [__webpack_require__(/*! ./animate-template.component.css */ "./src/app/animate-template/animate-template.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimateTemplateComponent);
    return AnimateTemplateComponent;
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div id=\"root\">\r\n  <div id=\"top-half\">\r\n    <app-leftbar></app-leftbar>\r\n    <app-workspace></app-workspace>\r\n  </div>\r\n  <app-bottombar></app-bottombar>\r\n</div>\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamic_form2_dynamic_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form2/dynamic-form.module */ "./src/app/dynamic-form2/dynamic-form.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./topbar/topbar.component */ "./src/app/topbar/topbar.component.ts");
/* harmony import */ var _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./workspace/workspace.component */ "./src/app/workspace/workspace.component.ts");
/* harmony import */ var _workcanvas_workcanvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workcanvas/workcanvas.component */ "./src/app/workcanvas/workcanvas.component.ts");
/* harmony import */ var _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./leftbar/leftbar.component */ "./src/app/leftbar/leftbar.component.ts");
/* harmony import */ var _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bottombar/bottombar.component */ "./src/app/bottombar/bottombar.component.ts");
/* harmony import */ var _actionpanel_actionpanel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./actionpanel/actionpanel.component */ "./src/app/actionpanel/actionpanel.component.ts");
/* harmony import */ var _canvas_space_canvas_space_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./canvas-space/canvas-space.component */ "./src/app/canvas-space/canvas-space.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./animate-template/animate-template.component */ "./src/app/animate-template/animate-template.component.ts");
/* harmony import */ var _animate_template_item_animate_template_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./animate-template-item/animate-template-item.component */ "./src/app/animate-template-item/animate-template-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { DynamicFormsBootstrapUIModule } from "@ng-dynamic-forms/ui-bootstrap";














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"],
                _workspace_workspace_component__WEBPACK_IMPORTED_MODULE_8__["WorkspaceComponent"],
                _workcanvas_workcanvas_component__WEBPACK_IMPORTED_MODULE_9__["WorkcanvasComponent"],
                _leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_10__["LeftbarComponent"],
                _bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_11__["BottombarComponent"],
                _actionpanel_actionpanel_component__WEBPACK_IMPORTED_MODULE_12__["ActionpanelComponent"],
                _canvas_space_canvas_space_component__WEBPACK_IMPORTED_MODULE_13__["CanvasSpaceComponent"],
                _animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_16__["AnimateTemplateComponent"],
                _animate_template_item_animate_template_item_component__WEBPACK_IMPORTED_MODULE_17__["AnimateTemplateItemComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsCoreModule"],
                // DynamicFormsBootstrapUIModule,
                _dynamic_form2_dynamic_form_module__WEBPACK_IMPORTED_MODULE_5__["DynamicFormModule"]
            ],
            entryComponents: [
                _animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_16__["AnimateTemplateComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
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

module.exports = "<div id=\"bottom-bar\">\r\n\r\n    <div class=\"edit-message-wrap\">\r\n      <div class=\"row-index edit-message\">\r\n        时长 {{ duration() }} s\r\n      </div>\r\n      <div class=\"column-index edit-message\">\r\n        帧频 {{ fps() }}\r\n      </div>\r\n      <!--\r\n      <div class=\"charset edit-message\">\r\n        UTF-8\r\n      </div>\r\n      <div class=\"language edit-message\" >\r\n        language\r\n      </div>\r\n      -->\r\n    </div>\r\n    <!--\r\n    <div class=\"edit-message-wrap\">\r\n      <div class=\"edit-message\">\r\n        图片等\r\n      </div>    \r\n    </div>\r\n    -->\r\n  </div>\r\n  "

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


var BottombarComponent = /** @class */ (function () {
    function BottombarComponent(canvasService) {
        this.canvasService = canvasService;
    }
    BottombarComponent.prototype.ngOnInit = function () {
    };
    BottombarComponent.prototype.fps = function () {
        return this.canvasService.fps;
    };
    BottombarComponent.prototype.duration = function () {
        if (this.canvasService.fps && this.canvasService.duration) {
            return (this.canvasService.duration / this.canvasService.fps).toFixed(2);
        }
        return '-';
    };
    BottombarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottombar',
            template: __webpack_require__(/*! ./bottombar.component.html */ "./src/app/bottombar/bottombar.component.html"),
            styles: [__webpack_require__(/*! ./bottombar.component.css */ "./src/app/bottombar/bottombar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"]])
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

module.exports = "<div class=\"canvas-space-wrap scrollbar-override\" >\r\n  <webview \r\n    #webview\r\n    src=\"./template/temp1.html\"\r\n    class=\"image-space-webview\"\r\n    minwidth=\"0\"\r\n    preload=\"./webview.js\"\r\n  >\r\n  </webview>\r\n</div>\r\n"

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
        // 播放 暂停
        this.canvasService.observables.actions.subscribe(function (e) {
            console.log(e['type']);
            _this.webview.nativeElement.send(e['type'], '');
        });
        // 导出图片
        this.canvasService.observables.exportImg.subscribe(function (e) {
            console.log(e['path']);
            _this.webview.nativeElement.send('exportImg', e['path']);
        });
        // 加载模板
        this.canvasService.observables.template.subscribe(function (e) {
            console.log(e['action']);
            // this.webview.nativeElement.send('template', e['action']);
            _this.webview.nativeElement.loadURL(e['url']);
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
        this.webview.nativeElement.insertCSS("\n    body{\n      display: flex;\n      flex: 1;\n      align-items: center;\n      justify-content: center;\n      background-color: #eeeeee;\n      position: fixed;\n      left: 0;\n      top: 0;\n      right:0;\n      bottom: 0;\n      overflow: auto;\n    }\n    #animation_container{\n      \n    }\n    canvas {\n      /*margin-top: 20px;*/\n    }\n  ");
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

/***/ "./src/app/dynamic-form2/components/dynamic-field/dynamic-field.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/dynamic-field/dynamic-field.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: DynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _form_button_form_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../form-button/form-button.component */ "./src/app/dynamic-form2/components/form-button/form-button.component.ts");
/* harmony import */ var _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../form-input/form-input.component */ "./src/app/dynamic-form2/components/form-input/form-input.component.ts");
/* harmony import */ var _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../form-select/form-select.component */ "./src/app/dynamic-form2/components/form-select/form-select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var components = {
    button: _form_button_form_button_component__WEBPACK_IMPORTED_MODULE_2__["FormButtonComponent"],
    input: _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_3__["FormInputComponent"],
    select: _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_4__["FormSelectComponent"]
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnChanges = function () {
        if (this.component) {
            this.component.instance.config = this.config;
            this.component.instance.group = this.group;
        }
    };
    DynamicFieldDirective.prototype.ngOnInit = function () {
        if (!components[this.config.type]) {
            var supportedTypes = Object.keys(components).join(', ');
            throw new Error("Trying to use an unsupported type (" + this.config.type + ").\n        Supported types: " + supportedTypes);
        }
        var component = this.resolver.resolveComponentFactory(components[this.config.type]);
        this.component = this.container.createComponent(component);
        this.component.instance.config = this.config;
        this.component.instance.group = this.group;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DynamicFieldDirective.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[dynamicField]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-button/form-button.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-button/form-button.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  letter-spacing: -0.5px;\n  cursor: pointer;\n  background-color: #9d62c8;\n  outline: 0;\n  line-height: 1;\n  text-align: center;\n  padding: 12px 30px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 2px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  transition: background-color .3s, box-shadow .3s; }\n  button:hover {\n    background-color: #a46dcc;\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); }\n  button:disabled {\n    background: rgba(0, 0, 0, 0.2);\n    color: rgba(0, 0, 0, 0.4);\n    cursor: not-allowed;\n    box-shadow: none; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/form-button/form-button.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-button/form-button.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormButtonComponent", function() { return FormButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormButtonComponent = /** @class */ (function () {
    function FormButtonComponent() {
    }
    FormButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-button',
            styles: [__webpack_require__(/*! ./form-button.component.scss */ "./src/app/dynamic-form2/components/form-button/form-button.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-button\"\n      [formGroup]=\"group\"\n    >\n      <button\n        [disabled]=\"config.disabled\"\n        type=\"submit\">\n        {{ config.label }}\n      </button>\n    </div>\n  "
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-input/form-input.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-input/form-input.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  display: block;\n  font-family: inherit;\n  font-size: 14px;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: none;\n  padding: 10px 15px;\n  color: rgba(0, 0, 0, 0.7); }\n  input:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/form-input/form-input.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-input/form-input.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormInputComponent", function() { return FormInputComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormInputComponent = /** @class */ (function () {
    function FormInputComponent() {
    }
    FormInputComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-input',
            styles: [__webpack_require__(/*! ./form-input.component.scss */ "./src/app/dynamic-form2/components/form-input/form-input.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-input\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <input\n        type=\"text\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n    </div>\n  "
        })
    ], FormInputComponent);
    return FormInputComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-select/form-select.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-select/form-select.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: .01px;\n  text-overflow: '';\n  overflow: hidden;\n  font-family: inherit;\n  font-size: 14px;\n  padding: 10px 15px;\n  border-radius: 0;\n  color: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  width: 100%;\n  outline: none;\n  background: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.7) 50%) no-repeat calc(100% - 20px) calc(1em + 4px), linear-gradient(135deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%) no-repeat calc(100% - 15px) calc(1em + 4px);\n  background-size: 5px 5px, 5px 5px; }\n  select:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/form-select/form-select.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-select/form-select.component.ts ***!
  \*******************************************************************************/
/*! exports provided: FormSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormSelectComponent", function() { return FormSelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormSelectComponent = /** @class */ (function () {
    function FormSelectComponent() {
    }
    FormSelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-select',
            styles: [__webpack_require__(/*! ./form-select.component.scss */ "./src/app/dynamic-form2/components/form-select/form-select.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-select\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <select [formControlName]=\"config.name\">\n        <option value=\"\">{{ config.placeholder }}</option>\n        <option *ngFor=\"let option of config.options\">\n          {{ option }}\n        </option>\n      </select>\n    </div>\n  "
        })
    ], FormSelectComponent);
    return FormSelectComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/containers/dynamic-form/dynamic-form.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dynamic-form2/containers/dynamic-form/dynamic-form.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DynamicFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormComponent", function() { return DynamicFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(fb) {
        this.fb = fb;
        this.config = [];
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(DynamicFormComponent.prototype, "controls", {
        get: function () { return this.config.filter(function (_a) {
            var type = _a.type;
            return type !== 'button';
        }); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "changes", {
        get: function () { return this.form.valueChanges; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "valid", {
        get: function () { return this.form.valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DynamicFormComponent.prototype, "value", {
        get: function () { return this.form.value; },
        enumerable: true,
        configurable: true
    });
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.createGroup();
    };
    DynamicFormComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.form) {
            var controls_1 = Object.keys(this.form.controls);
            var configControls_1 = this.controls.map(function (item) { return item.name; });
            controls_1
                .filter(function (control) { return !configControls_1.includes(control); })
                .forEach(function (control) { return _this.form.removeControl(control); });
            configControls_1
                .filter(function (control) { return !controls_1.includes(control); })
                .forEach(function (name) {
                var config = _this.config.find(function (control) { return control.name === name; });
                _this.form.addControl(name, _this.createControl(config));
            });
        }
    };
    DynamicFormComponent.prototype.createGroup = function () {
        var _this = this;
        var group = this.fb.group({});
        this.controls.forEach(function (control) { return group.addControl(control.name, _this.createControl(control)); });
        return group;
    };
    DynamicFormComponent.prototype.createControl = function (config) {
        var disabled = config.disabled, validation = config.validation, value = config.value;
        return this.fb.control({ disabled: disabled, value: value }, validation);
    };
    DynamicFormComponent.prototype.handleSubmit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.submit.emit(this.value);
    };
    DynamicFormComponent.prototype.setDisabled = function (name, disable) {
        if (this.form.controls[name]) {
            var method = disable ? 'disable' : 'enable';
            this.form.controls[name][method]();
            return;
        }
        this.config = this.config.map(function (item) {
            if (item.name === name) {
                item.disabled = disable;
            }
            return item;
        });
    };
    DynamicFormComponent.prototype.setValue = function (name, value) {
        this.form.controls[name].setValue(value, { emitEvent: true });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], DynamicFormComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], DynamicFormComponent.prototype, "submit", void 0);
    DynamicFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            exportAs: 'dynamicForm',
            selector: 'dynamic-form',
            styleUrls: [],
            template: "\n    <form\n      class=\"dynamic-form\"\n      [formGroup]=\"form\"\n      (submit)=\"handleSubmit($event)\">\n      <ng-container\n        *ngFor=\"let field of config;\"\n        dynamicField\n        [config]=\"field\"\n        [group]=\"form\">\n      </ng-container>\n    </form>\n  "
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/dynamic-form.module.ts":
/*!******************************************************!*\
  !*** ./src/app/dynamic-form2/dynamic-form.module.ts ***!
  \******************************************************/
/*! exports provided: DynamicFormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormModule", function() { return DynamicFormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dynamic-field/dynamic-field.directive */ "./src/app/dynamic-form2/components/dynamic-field/dynamic-field.directive.ts");
/* harmony import */ var _containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/dynamic-form/dynamic-form.component */ "./src/app/dynamic-form2/containers/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/form-button/form-button.component */ "./src/app/dynamic-form2/components/form-button/form-button.component.ts");
/* harmony import */ var _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/form-input/form-input.component */ "./src/app/dynamic-form2/components/form-input/form-input.component.ts");
/* harmony import */ var _components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form-select/form-select.component */ "./src/app/dynamic-form2/components/form-select/form-select.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
            ],
            declarations: [
                _components_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_3__["DynamicFieldDirective"],
                _containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"],
                _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_5__["FormButtonComponent"],
                _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_6__["FormInputComponent"],
                _components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_7__["FormSelectComponent"]
            ],
            exports: [
                _containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]
            ],
            entryComponents: [
                _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_5__["FormButtonComponent"],
                _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_6__["FormInputComponent"],
                _components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_7__["FormSelectComponent"]
            ]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
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

module.exports = "<div id=\"left-bar\">\r\n  left bar\r\n  <div (click)=\"showTemplateDialog()\">\r\n    template\r\n    模板\r\n  </div>\r\n</div>\r\n\r\n\r\n"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animate-template/animate-template.component */ "./src/app/animate-template/animate-template.component.ts");
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
    function LeftbarComponent(dialog) {
        this.dialog = dialog;
    }
    LeftbarComponent.prototype.ngOnInit = function () {
    };
    LeftbarComponent.prototype.showTemplateDialog = function () {
        var dialogRef = this.dialog.open(_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_2__["AnimateTemplateComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    LeftbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leftbar',
            template: __webpack_require__(/*! ./leftbar.component.html */ "./src/app/leftbar/leftbar.component.html"),
            styles: [__webpack_require__(/*! ./leftbar.component.css */ "./src/app/leftbar/leftbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
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
            template: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
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
    CanvasService.prototype.loadTemplate = function (url) {
        if (!url) {
            alert('无效的模板地址');
            return;
        }
        this.observables.template.next({
            action: 'loadTemplate',
            url: url,
        });
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

module.exports = "<div id=\"app-topbar\">\r\n  topbar works!\r\n</div>\r\n"

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

module.exports = ":host {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#canvas-wrap {\r\n\tflex: 1;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\toverflow: auto;\r\n}\r\n\r\n#canvas-wrap canvas {\r\n\tbackground-color: aliceblue;\r\n}\r\n\r\n#canvas-btn-wrap {\r\n\theight:50px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n#canvas-btn-wrap button{\r\n\tmargin: 0 2px;\r\n}"

/***/ }),

/***/ "./src/app/workcanvas/workcanvas.component.html":
/*!******************************************************!*\
  !*** ./src/app/workcanvas/workcanvas.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"canvas-wrap\" class=\"scrollbar-override\">\r\n\t<!--<canvas id=\"canvas\" width=\"800\" height=\"800\">\r\n\t</canvas>-->\r\n\t<app-canvas-space></app-canvas-space>\r\n</div>\r\n<div id=\"canvas-btn-wrap\">\r\n\t{{ isPaused() }}\r\n\t<div class=\"button-row\">\r\n\t\t<button mat-flat-button color=\"primary\" (click)=\"togglePlay()\">\r\n\t\t\t{{ isPaused() ? '播放' : '暂停' }}\r\n\t\t</button>\r\n\t\t<button mat-flat-button color=\"accent\" (click)=\"reset()\">reset</button>\r\n\t\t<button mat-flat-button color=\"warn\" (click)=\"exFile()\">导出</button>\r\n\t</div>\r\n</div>\r\n\r\n\r\n"

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
    WorkcanvasComponent.prototype.togglePlay = function () {
        if (this.canvasService.paused) {
            this.canvasService.play();
        }
        else {
            this.canvasService.pause();
        }
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
    WorkcanvasComponent.prototype.fps = function () {
        return this.canvasService.fps;
    };
    WorkcanvasComponent.prototype.duration = function () {
        return this.canvasService.duration;
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

module.exports = "\r\n<app-workcanvas></app-workcanvas>\r\n<app-actionpanel></app-actionpanel>\r\n\r\n"

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

module.exports = __webpack_require__(/*! D:\code\vidora\ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map