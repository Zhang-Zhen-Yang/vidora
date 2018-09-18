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

module.exports = ":host {\r\n\tposition: fixed;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n#root {\r\n\talign-items: stretch;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #cccccc;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n#top-half {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n}"

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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-dynamic-forms/core */ "./node_modules/@ng-dynamic-forms/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamic_form2_dynamic_form_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dynamic-form2/dynamic-form.module */ "./src/app/dynamic-form2/dynamic-form.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/topbar/topbar.component */ "./src/app/component/topbar/topbar.component.ts");
/* harmony import */ var _component_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/workspace/workspace.component */ "./src/app/component/workspace/workspace.component.ts");
/* harmony import */ var _component_workcanvas_workcanvas_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/workcanvas/workcanvas.component */ "./src/app/component/workcanvas/workcanvas.component.ts");
/* harmony import */ var _component_leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/leftbar/leftbar.component */ "./src/app/component/leftbar/leftbar.component.ts");
/* harmony import */ var _component_bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/bottombar/bottombar.component */ "./src/app/component/bottombar/bottombar.component.ts");
/* harmony import */ var _component_actionpanel_actionpanel_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/actionpanel/actionpanel.component */ "./src/app/component/actionpanel/actionpanel.component.ts");
/* harmony import */ var _component_canvas_space_canvas_space_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/canvas-space/canvas-space.component */ "./src/app/component/canvas-space/canvas-space.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _component_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/animate-template/animate-template.component */ "./src/app/component/animate-template/animate-template.component.ts");
/* harmony import */ var _component_animate_template_item_animate_template_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/animate-template-item/animate-template-item.component */ "./src/app/component/animate-template-item/animate-template-item.component.ts");
/* harmony import */ var _component_animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/animate-template-loading-progress/animate-template-loading-progress.component */ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.ts");
/* harmony import */ var _component_export_options_export_options_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/export-options/export-options.component */ "./src/app/component/export-options/export-options.component.ts");
/* harmony import */ var _component_generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/generating-progress/generating-progress.component */ "./src/app/component/generating-progress/generating-progress.component.ts");
/* harmony import */ var _component_audio_manager_audio_manager_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/audio-manager/audio-manager.component */ "./src/app/component/audio-manager/audio-manager.component.ts");
/* harmony import */ var _component_actionpanel_item_actionpanel_item_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/actionpanel-item/actionpanel-item.component */ "./src/app/component/actionpanel-item/actionpanel-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { DynamicFormsBootstrapUIModule } from "@ng-dynamic-forms/ui-bootstrap";










// material













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _component_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_7__["TopbarComponent"],
                _component_workspace_workspace_component__WEBPACK_IMPORTED_MODULE_8__["WorkspaceComponent"],
                _component_workcanvas_workcanvas_component__WEBPACK_IMPORTED_MODULE_9__["WorkcanvasComponent"],
                _component_leftbar_leftbar_component__WEBPACK_IMPORTED_MODULE_10__["LeftbarComponent"],
                _component_bottombar_bottombar_component__WEBPACK_IMPORTED_MODULE_11__["BottombarComponent"],
                _component_actionpanel_actionpanel_component__WEBPACK_IMPORTED_MODULE_12__["ActionpanelComponent"],
                _component_canvas_space_canvas_space_component__WEBPACK_IMPORTED_MODULE_13__["CanvasSpaceComponent"],
                _component_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_20__["AnimateTemplateComponent"],
                _component_animate_template_item_animate_template_item_component__WEBPACK_IMPORTED_MODULE_21__["AnimateTemplateItemComponent"],
                _component_export_options_export_options_component__WEBPACK_IMPORTED_MODULE_23__["ExportOptionsComponent"],
                _component_generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_24__["GeneratingProgressComponent"],
                _component_audio_manager_audio_manager_component__WEBPACK_IMPORTED_MODULE_25__["AudioManagerComponent"],
                _component_actionpanel_item_actionpanel_item_component__WEBPACK_IMPORTED_MODULE_26__["ActionpanelItemComponent"],
                _component_animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_22__["AnimateTemplateLoadingProgressComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_15__["MatSnackBarModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_18__["MatProgressSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuModule"],
                _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsCoreModule"],
                // DynamicFormsBootstrapUIModule,
                _dynamic_form2_dynamic_form_module__WEBPACK_IMPORTED_MODULE_5__["DynamicFormModule"]
            ],
            entryComponents: [
                _component_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_20__["AnimateTemplateComponent"],
                _component_export_options_export_options_component__WEBPACK_IMPORTED_MODULE_23__["ExportOptionsComponent"],
                _component_generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_24__["GeneratingProgressComponent"],
                _component_animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_22__["AnimateTemplateLoadingProgressComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/actionpanel-item/actionpanel-item.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/actionpanel-item/actionpanel-item.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dynamic-form-wrap\">\n    <dynamic-form\n        [config]=\"config\" \n        #form=\"dynamicForm\"\n    ></dynamic-form>\n</div>\n"

/***/ }),

/***/ "./src/app/component/actionpanel-item/actionpanel-item.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/component/actionpanel-item/actionpanel-item.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dynamic-form-wrap {\n  border: 1px solid #dddddd;\n  padding: 10px 10px 5px 10px;\n  margin-top: 10px; }\n"

/***/ }),

/***/ "./src/app/component/actionpanel-item/actionpanel-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/actionpanel-item/actionpanel-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: ActionpanelItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionpanelItemComponent", function() { return ActionpanelItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../dynamic-form2/containers/dynamic-form/dynamic-form.component */ "./src/app/dynamic-form2/containers/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActionpanelItemComponent = /** @class */ (function () {
    function ActionpanelItemComponent(canvasService) {
        this.canvasService = canvasService;
    }
    ActionpanelItemComponent.prototype.ngOnInit = function () {
    };
    ActionpanelItemComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        var previousValid = this.form.valid;
        this.form.changes.subscribe(function (e) {
            console.log(e);
            _this.canvasService.setOpts(e);
            if (_this.form.valid !== previousValid) {
                previousValid = _this.form.valid;
                console.log(_this.form.valid);
                // this.form.setDisabled('submit', !previousValid); 
            }
        });
        setTimeout(function () {
            // this.form.setDisabled('submit', true);
            // this.form.setValue('name', 'Todd Motto');
            // this.form.setValue('food', 'Hot Dogs');
            // this.form.setValue('image', 'http://img5q.duitang.com/uploads/item/201411/30/20141130225105_Xe3cW.thumb.700_0.png');
        }, 0);
    };
    ActionpanelItemComponent.prototype.submit = function (e) {
        console.log('dddd');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActionpanelItemComponent.prototype, "config", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"]),
        __metadata("design:type", _dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_1__["DynamicFormComponent"])
    ], ActionpanelItemComponent.prototype, "form", void 0);
    ActionpanelItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actionpanel-item',
            template: __webpack_require__(/*! ./actionpanel-item.component.html */ "./src/app/component/actionpanel-item/actionpanel-item.component.html"),
            styles: [__webpack_require__(/*! ./actionpanel-item.component.scss */ "./src/app/component/actionpanel-item/actionpanel-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_2__["CanvasService"]])
    ], ActionpanelItemComponent);
    return ActionpanelItemComponent;
}());



/***/ }),

/***/ "./src/app/component/actionpanel/actionpanel.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/component/actionpanel/actionpanel.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\twidth: 300px;\r\n\tbackground-color: aliceblue;\r\n\tborder-left:1px solid #cccccc;\r\n\tpadding: 20px 0 0 20px;;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.panel-form-wrap{\r\n\tflex: 1;\r\n\toverflow: auto;\r\n\tpadding: 0 20px 20px 0;\r\n}"

/***/ }),

/***/ "./src/app/component/actionpanel/actionpanel.component.html":
/*!******************************************************************!*\
  !*** ./src/app/component/actionpanel/actionpanel.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\r\n  控制面板\r\n</h3>\r\n<div class=\"panel-form-wrap scrollbar-override\">\r\n  <app-actionpanel-item *ngFor=\"let item of optsConfig()\" [config]=\"item\">\r\n  </app-actionpanel-item>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/actionpanel/actionpanel.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/component/actionpanel/actionpanel.component.ts ***!
  \****************************************************************/
/*! exports provided: ActionpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionpanelComponent", function() { return ActionpanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dynamic-form2/containers/dynamic-form/dynamic-form.component */ "./src/app/dynamic-form2/containers/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
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
    function ActionpanelComponent(fb, canvasService) {
        this.fb = fb;
        this.canvasService = canvasService;
        this.config = [
            {
                type: 'input',
                label: 'Full name',
                name: 'name',
                placeholder: 'Enter your name'
            },
        ];
    }
    ActionpanelComponent.prototype.ngOnInit = function () {
        /* console.log(this.canvasService.options);
        this.canvasService.observables.options.subscribe((e)=>{
          this.config = e['options'];
          console.log(e['options']);
          setTimeout(()=>{
            this.config.forEach((item) => {
              this.form.setValue(item.name, item['value'] || '');
            })
          }, 0)
        });*/
    };
    ActionpanelComponent.prototype.onSubmit = function (data) {
        // console.log(this.myGroup);
    };
    ActionpanelComponent.prototype.ngAfterViewInit = function () {
        /* let previousValid = this.form.valid;
        this.form.changes.subscribe((e) => {
          console.log(e);
          this.canvasService.setOptions(e);
          if (this.form.valid !== previousValid) {
            previousValid = this.form.valid;
            console.log(this.form.valid);
            // this.form.setDisabled('submit', !previousValid);
          }
        });
        setTimeout(()=>{
          // this.form.setDisabled('submit', true);
          // this.form.setValue('name', 'Todd Motto');
          // this.form.setValue('food', 'Hot Dogs');
          // this.form.setValue('image', 'http://img5q.duitang.com/uploads/item/201411/30/20141130225105_Xe3cW.thumb.700_0.png');
        }, 0)*/
    };
    ActionpanelComponent.prototype.submit = function (value) {
        console.log(value);
    };
    ActionpanelComponent.prototype.optsConfig = function () {
        return this.canvasService.opts;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"]),
        __metadata("design:type", _dynamic_form2_containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_2__["DynamicFormComponent"])
    ], ActionpanelComponent.prototype, "form", void 0);
    ActionpanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-actionpanel',
            template: __webpack_require__(/*! ./actionpanel.component.html */ "./src/app/component/actionpanel/actionpanel.component.html"),
            styles: [__webpack_require__(/*! ./actionpanel.component.css */ "./src/app/component/actionpanel/actionpanel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]])
    ], ActionpanelComponent);
    return ActionpanelComponent;
}());



/***/ }),

/***/ "./src/app/component/animate-template-item/animate-template-item.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/component/animate-template-item/animate-template-item.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\t\r\n}\r\n#template-item{\r\n\tdisplay: inline-block;\r\n\twidth:200px;\r\n\theight: 160px;\r\n\tbackground-color:white;\r\n\tcursor: pointer;\r\n\tmargin-top: 10px;\r\n}\r\n#template-item:hover{\r\n\tbackground-color: #eeeeee;\r\n}\r\n#template-item-placeholder {\r\n\twidth: 200px;\r\n\theight: 0;\r\n}\r\nimg{\r\n\t-o-object-fit: contain;\r\n\t   object-fit: contain;\r\n\t-o-object-position: center;\r\n\t   object-position: center;\r\n\twidth: 200px;\r\n\theight: 130px;\r\n}\r\n.temp-name{\r\n\tbackground-color:rgba(0,0,0,0.5);\r\n\tcolor:white;\r\n\theight: 30px;\r\n\tpadding: 0 10px;\r\n\tline-height: 30px;\r\n}"

/***/ }),

/***/ "./src/app/component/animate-template-item/animate-template-item.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/animate-template-item/animate-template-item.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"template-item\" *ngIf=\"data.name\" (click)=\"loadTemplate(data.url)\" class=\"f fr ais\">\n  <img [src]=\"imgSrc(data.img)\" alt=\"\" style=\"flex:1;\">\n  <div class=\"temp-name\">{{data.name}}</div>\n</div>\n<div id=\"template-item-placeholder\" *ngIf=\"!data.name\">\n</div>\n"

/***/ }),

/***/ "./src/app/component/animate-template-item/animate-template-item.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/animate-template-item/animate-template-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: AnimateTemplateItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateTemplateItemComponent", function() { return AnimateTemplateItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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
    function AnimateTemplateItemComponent(canvasService, sanitizer) {
        this.canvasService = canvasService;
        this.sanitizer = sanitizer;
        this.closedialog = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AnimateTemplateItemComponent.prototype.ngOnInit = function () {
    };
    AnimateTemplateItemComponent.prototype.loadTemplate = function (url) {
        // alert(url);
        if (!url) {
            alert('无效的模板地址');
            return;
        }
        this.canvasService.loadTemplate(url);
        this.closedialog.emit();
    };
    AnimateTemplateItemComponent.prototype.imgSrc = function (src) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(src);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AnimateTemplateItemComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AnimateTemplateItemComponent.prototype, "closedialog", void 0);
    AnimateTemplateItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate-template-item',
            template: __webpack_require__(/*! ./animate-template-item.component.html */ "./src/app/component/animate-template-item/animate-template-item.component.html"),
            styles: [__webpack_require__(/*! ./animate-template-item.component.css */ "./src/app/component/animate-template-item/animate-template-item.component.css")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], AnimateTemplateItemComponent);
    return AnimateTemplateItemComponent;
}());



/***/ }),

/***/ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\n  <div class=\"f aic\">\n    <mat-progress-spinner\n        class=\"example-margin\"\n        color=\"warn\"\n        diameter=\"50\"\n        mode=\"indeterminate\">\n    </mat-progress-spinner>\n    <p>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;加载模板中···\n    </p>\n  </div>\n</mat-dialog-content>\n\n"

/***/ }),

/***/ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.scss":
/*!**************************************************************************************************************!*\
  !*** ./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.scss ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\n  padding: 15px 0; }\n"

/***/ }),

/***/ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: AnimateTemplateLoadingProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateTemplateLoadingProgressComponent", function() { return AnimateTemplateLoadingProgressComponent; });
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

var AnimateTemplateLoadingProgressComponent = /** @class */ (function () {
    function AnimateTemplateLoadingProgressComponent() {
    }
    AnimateTemplateLoadingProgressComponent.prototype.ngOnInit = function () {
    };
    AnimateTemplateLoadingProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate-template-loading-progress',
            template: __webpack_require__(/*! ./animate-template-loading-progress.component.html */ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.html"),
            styles: [__webpack_require__(/*! ./animate-template-loading-progress.component.scss */ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnimateTemplateLoadingProgressComponent);
    return AnimateTemplateLoadingProgressComponent;
}());



/***/ }),

/***/ "./src/app/component/animate-template/animate-template.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/component/animate-template/animate-template.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#template-wrap{\r\n\t/*width: 500px;*/\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tflex-wrap: wrap;\r\n}"

/***/ }),

/***/ "./src/app/component/animate-template/animate-template.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/animate-template/animate-template.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>模板选择</h2>\n<mat-dialog-content>\n  <div id=\"template-wrap\">\n    <app-animate-template-item *ngFor=\"let item of tempList();\" [data]=\"item\" (closedialog)=\"closedialog();\">\n    </app-animate-template-item>\n  </div>\n  \n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>取消</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <!--<button mat-button [mat-dialog-close]=\"true\">Yes</button>-->\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/component/animate-template/animate-template.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/component/animate-template/animate-template.component.ts ***!
  \**************************************************************************/
/*! exports provided: AnimateTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateTemplateComponent", function() { return AnimateTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
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
    function AnimateTemplateComponent(dialog, canvasService) {
        this.dialog = dialog;
        this.canvasService = canvasService;
    }
    AnimateTemplateComponent.prototype.ngOnInit = function () {
        /* setTimeout(()=>{
          this.dialog.closeAll();
        }, 5000)*/
    };
    AnimateTemplateComponent.prototype.closedialog = function () {
        this.dialog.closeAll();
    };
    AnimateTemplateComponent.prototype.tempList = function () {
        return this.canvasService.tempList.concat([{}, {}, {}, {}, {}, {}, {}, {}, {}]);
    };
    AnimateTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-animate-template',
            template: __webpack_require__(/*! ./animate-template.component.html */ "./src/app/component/animate-template/animate-template.component.html"),
            styles: [__webpack_require__(/*! ./animate-template.component.css */ "./src/app/component/animate-template/animate-template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _service_canvas_service__WEBPACK_IMPORTED_MODULE_2__["CanvasService"]])
    ], AnimateTemplateComponent);
    return AnimateTemplateComponent;
}());



/***/ }),

/***/ "./src/app/component/audio-manager/audio-manager.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/audio-manager/audio-manager.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<audio #audio src=\"\" controls=\"controls\" loop></audio>\n<div>&nbsp;{{ audioName() }}&nbsp;</div>\n<div id=\"music-albums\" class=\"pointer\" [matMenuTriggerFor]=\"menu\">\n  <div [class]=\"[paused ? 'audio-paused' : 'audio-running']\">\n    <span class=\"iconfont\">&#xe652;</span>\n  </div>\n  <mat-menu #menu=\"matMenu\" MenuPositionX=\"before\" xPosition=\"before\" (closed)=\"menuClosed(e)\">\n      <button mat-menu-item (click)=\"selectLocalAudio()\">本地音乐</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"preset\">内置音乐</button>\n  </mat-menu>\n  <mat-menu #preset=\"matMenu\">\n      <button\n        mat-menu-item\n        *ngFor=\"let item of audioList\"\n        (click)=\"selectAudio(item);\"\n        [ngStyle]=\"{'background-color': audioName() == item.name ? 'orange' : 'white', color: audioName() == item.name ? 'white' : 'inherit'}\"\n      >\n        {{item.name}}\n    </button>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/component/audio-manager/audio-manager.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/audio-manager/audio-manager.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-items: center; }\n\n#music-albums {\n  padding: 5px;\n  /* background-color: red;*/ }\n\n#music-albums span {\n  font-size: 20px; }\n\n#music-albums > div {\n  -webkit-animation: round 5s linear 0s infinite normal;\n          animation: round 5s linear 0s infinite normal;\n  margin-right: 10px; }\n\n@-webkit-keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\nbutton {\n  font-size: 14px; }\n\n.selected {\n  background-color: orange;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/component/audio-manager/audio-manager.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/audio-manager/audio-manager.component.ts ***!
  \********************************************************************/
/*! exports provided: AudioManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioManagerComponent", function() { return AudioManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/dialog.service */ "./src/app/service/dialog.service.ts");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AudioManagerComponent = /** @class */ (function () {
    function AudioManagerComponent(dialogService, canvasService, sanitizer) {
        this.dialogService = dialogService;
        this.canvasService = canvasService;
        this.sanitizer = sanitizer;
        this.audioList = [];
        this.paused = true;
        this.audioList = window['audioList'];
    }
    AudioManagerComponent.prototype.ngOnInit = function () {
    };
    AudioManagerComponent.prototype.menuClosed = function (e) {
        // console.log(e);
    };
    AudioManagerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // console.log('audio', this.audio);
        var ele = this.audio.nativeElement;
        ele.addEventListener('play', function () {
            console.log('play');
            _this.paused = false;
        });
        ele.addEventListener('pause', function () {
            console.log('pause');
            _this.paused = true;
        });
        this.canvasService.observables.audio.subscribe(function (res) {
            // console.log(res);
            var path = res['path'];
            ele.src = path;
            if (path) {
                ele.play();
            }
        });
    };
    AudioManagerComponent.prototype.audioItem = function () {
        return this.canvasService.audio;
    };
    AudioManagerComponent.prototype.audioPath = function () {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.canvasService.audio.path);
    };
    AudioManagerComponent.prototype.audioName = function () {
        return this.canvasService.audio.name;
    };
    // 选择本地音乐
    AudioManagerComponent.prototype.selectLocalAudio = function () {
        var _this = this;
        this.dialogService.selectFile({
            type: 'audio',
            callback: function (res) {
                _this.canvasService.setAudio(res[0]);
            }
        });
    };
    // 选择内置音乐
    AudioManagerComponent.prototype.selectAudio = function (item) {
        this.canvasService.setAudio(item);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuTrigger"])
    ], AudioManagerComponent.prototype, "trigger", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('audio'),
        __metadata("design:type", Object)
    ], AudioManagerComponent.prototype, "audio", void 0);
    AudioManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-audio-manager',
            template: __webpack_require__(/*! ./audio-manager.component.html */ "./src/app/component/audio-manager/audio-manager.component.html"),
            styles: [__webpack_require__(/*! ./audio-manager.component.scss */ "./src/app/component/audio-manager/audio-manager.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"], _service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], AudioManagerComponent);
    return AudioManagerComponent;
}());



/***/ }),

/***/ "./src/app/component/bottombar/bottombar.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/bottombar/bottombar.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\t/* background-color:#1ABC9C;*/ \r\n\tbackground-color:orange;\r\n\theight: 25px;\r\n\tposition: relative;\r\n}\r\n#bottom-bar{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\tbottom:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tcolor:white;\r\n}\r\n.edit-message-wrap{\r\n\tfloat:right;\r\n\tcolor:white;\r\n}\r\n.edit-message{\r\n\tdisplay: inline-block;\r\n\theight:25px;\r\n\tline-height: 25px;\r\n\tfont-size:12px;\r\n\tpadding:0 5px;\r\n}"

/***/ }),

/***/ "./src/app/component/bottombar/bottombar.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/bottombar/bottombar.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"bottom-bar\">\n\n    <div class=\"edit-message-wrap\">\n      <div class=\"row-index edit-message\">\n        时长 {{ duration() }} s\n      </div>\n      <div class=\"column-index edit-message\">\n        帧频 {{ fps() }}\n      </div>\n      <div class=\"column-index edit-message\">\n        当前 {{ position() }} s\n      </div>\n      <!--\n      <div class=\"charset edit-message\">\n        UTF-8\n      </div>\n      <div class=\"language edit-message\" >\n        language\n      </div>\n      -->\n    </div>\n    <!--\n    <div class=\"edit-message-wrap\">\n      <div class=\"edit-message\">\n        图片等\n      </div>    \n    </div>\n    -->\n  </div>\n  "

/***/ }),

/***/ "./src/app/component/bottombar/bottombar.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/bottombar/bottombar.component.ts ***!
  \************************************************************/
/*! exports provided: BottombarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottombarComponent", function() { return BottombarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
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
    BottombarComponent.prototype.position = function () {
        var p = (this.canvasService.position / this.canvasService.fps);
        return isNaN(p) ? 0 : p.toFixed(1);
    };
    BottombarComponent.prototype.duration = function () {
        if (this.canvasService.fps && this.canvasService.duration) {
            return (this.canvasService.duration / this.canvasService.fps).toFixed(1);
        }
        return '-';
    };
    BottombarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottombar',
            template: __webpack_require__(/*! ./bottombar.component.html */ "./src/app/component/bottombar/bottombar.component.html"),
            styles: [__webpack_require__(/*! ./bottombar.component.css */ "./src/app/component/bottombar/bottombar.component.css")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"]])
    ], BottombarComponent);
    return BottombarComponent;
}());



/***/ }),

/***/ "./src/app/component/canvas-space/canvas-space.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/component/canvas-space/canvas-space.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n:host{\r\n\tposition: relative;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n.canvas-space-wrap{\r\n\tdisplay: block;\r\n\twidth:100%;\r\n\theight:100%;\r\n}\r\n.image-space-webview{\r\n\tdisplay: block;\r\n\tdisplay:flex;\r\n\tflex:1;\r\n\tposition: absolute;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tleft:0;\r\n\ttop:0;\r\n\toverflow:hidden;\r\n}\r\n#canvas-size{\r\n\t/* position: absolute;*/\r\n\tleft: 10px;\r\n\ttop: 10px;\r\n\tdisplay: inline-block;\r\n\tbackground-color: rgba(0,0,0,0.9);\r\n\tcolor: white;\r\n\tborder-radius: 3px;\r\n\tpadding: 5px 10px;\r\n    z-index: 1;\r\n}\r\n#canvas-top-bar{\r\n\tposition: absolute;\r\n\tz-index: 1;\r\n\twidth: 100%;\r\n\theight: 50px;\r\n\tpadding: 10px 0px 10px 10px;\r\n\t/* background-color: antiquewhite;*/\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/component/canvas-space/canvas-space.component.html":
/*!********************************************************************!*\
  !*** ./src/app/component/canvas-space/canvas-space.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"canvas-space-wrap scrollbar-override\" >\r\n  <div id=\"canvas-top-bar\" class=\"f jcsb aic\">\r\n    <!-- 画布尺寸 -->\r\n    <div id=\"canvas-size\" *ngIf=\"canvasService.width && canvasService.height\">{{ canvasService.width }}&times;{{ canvasService.height }}</div>\r\n    <div style=\"flex:1\"></div>\r\n    <div>\r\n      <app-audio-manager></app-audio-manager>\r\n    </div>\r\n  </div>\r\n  <webview\r\n    (contextmenu)=\"showContextMenu()\"\r\n    #webview\r\n    src=\"./template/temp1/temp1.html\"\r\n    class=\"image-space-webview\"\r\n    minwidth=\"0\"\r\n    preload=\"./webview.js\"\r\n  >\r\n  </webview>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/component/canvas-space/canvas-space.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/component/canvas-space/canvas-space.component.ts ***!
  \******************************************************************/
/*! exports provided: CanvasSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasSpaceComponent", function() { return CanvasSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../generating-progress/generating-progress.component */ "./src/app/component/generating-progress/generating-progress.component.ts");
/* harmony import */ var _service_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/dialog.service */ "./src/app/service/dialog.service.ts");
/* harmony import */ var _animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../animate-template-loading-progress/animate-template-loading-progress.component */ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.ts");
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
    function CanvasSpaceComponent(canvasService, dialog, dialogService) {
        this.canvasService = canvasService;
        this.dialog = dialog;
        this.dialogService = dialogService;
        this.ready = false;
        this.showLoadingDialog(true);
    }
    CanvasSpaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* setTimeout(()=>{
          this.dialog.open(GeneratingProgressComponent, {
            minWidth: 300,
          });
        }, 2000);*/
        // 订阅
        // 播放 暂停
        this.canvasService.observables.actions.subscribe(function (e) {
            console.log(e['type']);
            _this.webview.nativeElement.send(e['type'], '');
        });
        // 导出图片
        this.canvasService.observables.exportImg.subscribe(function (e) {
            console.log(e['path']);
            _this.webview.nativeElement.send('exportImg', JSON.stringify(e));
            _this.dialog.open(_generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_3__["GeneratingProgressComponent"], {
                disableClose: true,
                minWidth: 300,
            });
        });
        // 加载模板
        this.canvasService.observables.template.subscribe(function (e) {
            // console.log(e['action']);
            // this.webview.nativeElement.send('template', e['action']);
            _this.webview.nativeElement.loadURL(e['url']);
            _this.showLoadingDialog(true);
        });
        // 对模板内容进行设置(旧)
        this.canvasService.observables.optionsSet.subscribe(function (e) {
            console.log('对模板内容进行设置');
            console.log(JSON.stringify(e['options']));
            _this.webview.nativeElement.send('setOptions', JSON.stringify(e['options']));
        });
        // 对模板内容进行设置(新)
        this.canvasService.observables.optsSet.subscribe(function (e) {
            console.log('对模板内容进行设置(新)');
            console.log(JSON.stringify(e['opts']));
            _this.webview.nativeElement.send('setOpts', JSON.stringify(e['opts']));
        });
        this.canvasService.observables.localActions.subscribe(function (e) {
            switch (e['action']) {
                case 'reload':
                    _this.webview.nativeElement.reload();
                    _this.showLoadingDialog(true);
                    break;
                default: break;
            }
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
        // 加载完成
        this.webview.nativeElement.addEventListener('dom-ready', function () {
            _this.ready = true;
            _this.webview.nativeElement.openDevTools();
            _this.injectCSS();
            // this.webview.nativeElement.send('setImage','aaaaaaaaaa.jpg');
            // this.webview.nativeElement.executeJavaScript('console.log(canvas)');
            // this.webview.nativeElement.executeJavaScript('stop()');
            _this.showLoadingDialog(false);
        });
        this.webview.nativeElement.addEventListener('did-fail-load', function () {
            alert('加载出错');
            _this.showLoadingDialog(false);
        });
        this.webview.nativeElement.addEventListener('ipc-message', function (e) {
            switch (e.channel) {
                case 'inited':
                    // console.log(e);
                    _this.canvasService.init(JSON.parse(e.args[0]), JSON.parse(e.args[1]), JSON.parse(e.args[2]));
                    break;
                case 'base64':
                    console.log('base64');
                    _this.dialogService.saveImg(e['args'][0]);
                    break;
                case 'setIsPaused':
                    _this.canvasService.setIsPaused(e['args'][0]);
                    break;
                case 'generateMp4':
                    _this.canvasService.generateMp4();
                    break;
                case 'tick':
                    _this.canvasService.setCurrentPosition(e['args'][0]);
                    break;
                case 'setProgress':
                    _this.canvasService.setProgress(e['args'][0]);
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
        this.webview.nativeElement.insertCSS("\n    body{\n      display: flex;\n      flex: 1;\n      align-items: center;\n      justify-content: center;\n      background-color: #eeeeee!important;\n      position: fixed;\n      left: 0;\n      top: 0;\n      right:0;\n      bottom: 0;\n      overflow: auto;\n    }\n    #animation_container{\n      \n    }\n    canvas {\n      /*margin-top: 20px;*/\n    }\n    input[type=\"range\"]{\n      position: absolute;\n      z-index: 10;\n      left: 10px;\n      top: 49px;\n    }\n  ");
    };
    CanvasSpaceComponent.prototype.showContextMenu = function () {
        this.canvasService.showCanvasContextMenu();
    };
    // 显示加载模板的弹窗
    CanvasSpaceComponent.prototype.showLoadingDialog = function (show) {
        var _this = this;
        if (show) {
            setTimeout(function () {
                _this.dialog.open(_animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_5__["AnimateTemplateLoadingProgressComponent"], {
                    disableClose: true,
                    minWidth: 300,
                });
            }, 0);
        }
        else {
            setTimeout(function () {
                _this.dialog.closeAll();
            }, 0);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('webview'),
        __metadata("design:type", Object)
    ], CanvasSpaceComponent.prototype, "webview", void 0);
    CanvasSpaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas-space',
            template: __webpack_require__(/*! ./canvas-space.component.html */ "./src/app/component/canvas-space/canvas-space.component.html"),
            styles: [__webpack_require__(/*! ./canvas-space.component.css */ "./src/app/component/canvas-space/canvas-space.component.css")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _service_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]])
    ], CanvasSpaceComponent);
    return CanvasSpaceComponent;
}());



/***/ }),

/***/ "./src/app/component/export-options/export-options.component.html":
/*!************************************************************************!*\
  !*** ./src/app/component/export-options/export-options.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>视频导出</h2>\n<mat-dialog-content>\n  <div id=\"export-options-wrap\" [formGroup]=\"form\">\n      <!--时长-->\n      <div class=\"input-wrap\">\n        <label>\n          时长(s)\n        </label>\n        <input [formControlName]=\"'time'\" type=\"number\" [max]=\"time()\">\n      </div>\n      <div class=\"input-wrap\">\n        <label>\n          宽\n        </label>\n        <input step=\"10\" [formControlName]=\"'width'\" type=\"number\" [max]=\"width()\">\n      </div>\n      <div class=\"input-wrap\">\n        <label>\n          高\n        </label>\n        <input step=\"10\" [formControlName]=\"'height'\" type=\"number\" [max]=\"height()\">\n      </div>\n      <div class=\"input-wrap\">\n        <label>\n          质量\n        </label>\n        <input step=\"10\" [formControlName]=\"'quality'\" type=\"number\" min=\"0\" max=\"100\">\n      </div>\n  </div>\n  \n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>取消</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button (click)=\"confirm()\">确定</button>\n</mat-dialog-actions>"

/***/ }),

/***/ "./src/app/component/export-options/export-options.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/component/export-options/export-options.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  display: block;\n  font-family: inherit;\n  font-size: 14px;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: none;\n  padding: 10px 15px;\n  color: rgba(0, 0, 0, 0.7);\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  word-break: break-all;\n  text-overflow: ellipsis;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  input:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n  .input-wrap {\n  display: flex;\n  align-items: center; }\n  .input-wrap label {\n  width: 100px; }\n"

/***/ }),

/***/ "./src/app/component/export-options/export-options.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/component/export-options/export-options.component.ts ***!
  \**********************************************************************/
/*! exports provided: ExportOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportOptionsComponent", function() { return ExportOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExportOptionsComponent = /** @class */ (function () {
    function ExportOptionsComponent(canvasService, fb, matDialog) {
        this.canvasService = canvasService;
        this.fb = fb;
        this.matDialog = matDialog;
    }
    ExportOptionsComponent.prototype.ngOnInit = function () {
        var _a = this.canvasService, width = _a.width, height = _a.height, duration = _a.duration, fps = _a.fps;
        console.log([width, height, duration, fps]);
        // alert('ddd');
        this.form = this.fb.group({
            time: [this.time(), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)],
            width: [width],
            height: [height],
            quality: [80],
        });
        this.form.valueChanges.subscribe(function (res) {
            console.log(res);
        });
    };
    ExportOptionsComponent.prototype.time = function () {
        return Math.floor(this.canvasService.duration / this.canvasService.fps);
    };
    ExportOptionsComponent.prototype.width = function () {
        return this.canvasService.width;
    };
    ExportOptionsComponent.prototype.height = function () {
        return this.canvasService.height;
    };
    ExportOptionsComponent.prototype.confirm = function () {
        this.matDialog.closeAll();
        console.log(this.form.value);
        this.canvasService.exFile(this.form.value);
    };
    ExportOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-options',
            template: __webpack_require__(/*! ./export-options.component.html */ "./src/app/component/export-options/export-options.component.html"),
            styles: [__webpack_require__(/*! ./export-options.component.scss */ "./src/app/component/export-options/export-options.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ExportOptionsComponent);
    return ExportOptionsComponent;
}());



/***/ }),

/***/ "./src/app/component/generating-progress/generating-progress.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/generating-progress/generating-progress.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>视频生成中</h2>\n<mat-dialog-content>\n  <div *ngIf=\"step()==0\">\n    <mat-progress-bar mode=\"determinate\" [value]=\"value()\" color=\"warn\"></mat-progress-bar>\n    <div class=\"f fr jcsb\" style=\"margin-top: 10px;\">\n      <span class=\"fontSmall color-gray\">生成逐帧图片</span>\n      <span class=\"fontSmall color-gray\">{{ position() }}/{{ duration() }}</span>\n    </div>\n  </div>\n  <div *ngIf=\"step()==1\">\n    <mat-progress-bar mode=\"indeterminate\" color=\"warn\" value=\"50\"></mat-progress-bar>\n    <div class=\"f fr jcsb\" style=\"margin-top: 10px;\">\n      <span class=\"fontSmall color-gray\">视频合成中</span>\n    </div>\n  </div>\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/component/generating-progress/generating-progress.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/component/generating-progress/generating-progress.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/generating-progress/generating-progress.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/generating-progress/generating-progress.component.ts ***!
  \********************************************************************************/
/*! exports provided: GeneratingProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratingProgressComponent", function() { return GeneratingProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneratingProgressComponent = /** @class */ (function () {
    function GeneratingProgressComponent(canvasService) {
        this.canvasService = canvasService;
        this.inited = false;
    }
    GeneratingProgressComponent.prototype.ngOnInit = function () {
        // alert('ddd');
        this.inited = true;
    };
    GeneratingProgressComponent.prototype.position = function () {
        return this.canvasService.position;
    };
    GeneratingProgressComponent.prototype.duration = function () {
        return this.canvasService.duration;
    };
    GeneratingProgressComponent.prototype.value = function () {
        return this.inited ? Math.round(this.canvasService.progressPosition / this.canvasService.duration * 100) : 0;
    };
    GeneratingProgressComponent.prototype.step = function () {
        return this.canvasService.generateStep;
    };
    GeneratingProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generating-progress',
            template: __webpack_require__(/*! ./generating-progress.component.html */ "./src/app/component/generating-progress/generating-progress.component.html"),
            styles: [__webpack_require__(/*! ./generating-progress.component.scss */ "./src/app/component/generating-progress/generating-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"]])
    ], GeneratingProgressComponent);
    return GeneratingProgressComponent;
}());



/***/ }),

/***/ "./src/app/component/leftbar/leftbar.component.css":
/*!*********************************************************!*\
  !*** ./src/app/component/leftbar/leftbar.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\tbackground-color:#2B2B2B;\r\n}\r\n#left-bar {\r\n\twidth:50px;\r\n\tcolor:#aaa;\r\n}\r\n#template-show-trigger {\r\n\twidth:40px;\r\n\theight:40px;\r\n\t/* border-radius:50%;\r\n\tbackground-color: #9d62c8;\r\n\tborder:2px solid white;\r\n\tmargin-left: 5px;\r\n\tmargin-top: 10px;\r\n\tcursor: pointer;*/\r\n\tcolor: #eeeeee;\r\n\tfont-size: 35px;\r\n    text-align: center;\r\n    margin: 16px 3px;\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/component/leftbar/leftbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/leftbar/leftbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"left-bar\">\n  <div  id=\"template-show-trigger\" (click)=\"showTemplateDialog()\" class=\"iconfont\">\n      &#xe610;\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/component/leftbar/leftbar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/component/leftbar/leftbar.component.ts ***!
  \********************************************************/
/*! exports provided: LeftbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftbarComponent", function() { return LeftbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../animate-template/animate-template.component */ "./src/app/component/animate-template/animate-template.component.ts");
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
            template: __webpack_require__(/*! ./leftbar.component.html */ "./src/app/component/leftbar/leftbar.component.html"),
            styles: [__webpack_require__(/*! ./leftbar.component.css */ "./src/app/component/leftbar/leftbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], LeftbarComponent);
    return LeftbarComponent;
}());



/***/ }),

/***/ "./src/app/component/topbar/topbar.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/topbar/topbar.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app-topbar {\r\n\tbackground-color: black;\r\n\theight: 3rem;\r\n}"

/***/ }),

/***/ "./src/app/component/topbar/topbar.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/topbar/topbar.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"app-topbar\">\n  topbar works!\n</div>\n"

/***/ }),

/***/ "./src/app/component/topbar/topbar.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/topbar/topbar.component.ts ***!
  \******************************************************/
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
            template: __webpack_require__(/*! ./topbar.component.html */ "./src/app/component/topbar/topbar.component.html"),
            styles: [__webpack_require__(/*! ./topbar.component.css */ "./src/app/component/topbar/topbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopbarComponent);
    return TopbarComponent;
}());



/***/ }),

/***/ "./src/app/component/workcanvas/workcanvas.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/workcanvas/workcanvas.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n\r\n#canvas-wrap {\r\n\tflex: 1;\r\n\twidth: 100%;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n\toverflow: auto;\r\n}\r\n\r\n#canvas-wrap canvas {\r\n\tbackground-color: aliceblue;\r\n}\r\n\r\n#canvas-btn-wrap {\r\n\theight:50px;\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n\tjustify-content: center;\r\n}\r\n\r\n#canvas-btn-wrap button{\r\n\tmargin: 0 10px;\r\n}"

/***/ }),

/***/ "./src/app/component/workcanvas/workcanvas.component.html":
/*!****************************************************************!*\
  !*** ./src/app/component/workcanvas/workcanvas.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"canvas-wrap\" class=\"scrollbar-override\">\r\n\t<!--<canvas id=\"canvas\" width=\"800\" height=\"800\">\r\n\t</canvas>-->\r\n\t<app-canvas-space></app-canvas-space>\r\n</div>\r\n<div id=\"canvas-btn-wrap\">\r\n\t<div class=\"button-row\">\r\n\t\t<button  (click)=\"togglePlay()\" class=\"purple\">\r\n\t\t\t<span class=\"iconfont\">{{ isPaused() ? '&#xe61c;' : '&#xe61d;' }}</span> {{ isPaused() ? '播放' : '暂停' }}\r\n\t\t</button>\r\n\t\t<button  (click)=\"exFile()\" class=\"warn\">\r\n\t\t\t<span class=\"iconfont\">&#xe73c;</span>\r\n\t\t\t导出\r\n\t\t</button>\r\n\t\t<!--\r\n\t\t\t<button (click)=\"showSnackbar();\">\r\n\t\t\t\tsnackbar\r\n\t\t\t</button>\r\n\t\t-->\r\n\t\t<!--<button mat-flat-button color=\"accent\" (click)=\"reset()\">reset</button>\r\n\t\t<button mat-flat-button color=\"warn\" (click)=\"exFile()\">导出</button>-->\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/component/workcanvas/workcanvas.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/workcanvas/workcanvas.component.ts ***!
  \**************************************************************/
/*! exports provided: WorkcanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkcanvasComponent", function() { return WorkcanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/canvas.service */ "./src/app/service/canvas.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _export_options_export_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../export-options/export-options.component */ "./src/app/component/export-options/export-options.component.ts");
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
    function WorkcanvasComponent(elementRef, canvasService, dialog, snackBar) {
        this.elementRef = elementRef;
        this.canvasService = canvasService;
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    WorkcanvasComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.canvasService.observables.generateMp4.subscribe(function (e) {
            // this.snackBar.open('生成成功','', {duration: 3000});
            _this.showSnackbar();
        });
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
    // 导出mp4
    WorkcanvasComponent.prototype.exFile = function () {
        var dialogRef = this.dialog.open(_export_options_export_options_component__WEBPACK_IMPORTED_MODULE_3__["ExportOptionsComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
        // this.canvasService.exFile();
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
    WorkcanvasComponent.prototype.showSnackbar = function () {
        var _this = this;
        setTimeout(function () {
            _this.snackBar.open('生成成功', 'ok', {
                duration: 30000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
        }, 100);
    };
    WorkcanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workcanvas',
            template: __webpack_require__(/*! ./workcanvas.component.html */ "./src/app/component/workcanvas/workcanvas.component.html"),
            styles: [__webpack_require__(/*! ./workcanvas.component.css */ "./src/app/component/workcanvas/workcanvas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _service_canvas_service__WEBPACK_IMPORTED_MODULE_1__["CanvasService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], WorkcanvasComponent);
    return WorkcanvasComponent;
}());



/***/ }),

/***/ "./src/app/component/workspace/workspace.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/workspace/workspace.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tflex: 1;\r\n\tbackground-color: #eeeeee;\r\n\tflex: 1;\r\n\tdisplay: flex;\r\n\talign-items: stretch;\r\n}"

/***/ }),

/***/ "./src/app/component/workspace/workspace.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/workspace/workspace.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-workcanvas></app-workcanvas>\n<app-actionpanel></app-actionpanel>\n\n"

/***/ }),

/***/ "./src/app/component/workspace/workspace.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/workspace/workspace.component.ts ***!
  \************************************************************/
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
            template: __webpack_require__(/*! ./workspace.component.html */ "./src/app/component/workspace/workspace.component.html"),
            styles: [__webpack_require__(/*! ./workspace.component.css */ "./src/app/component/workspace/workspace.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkspaceComponent);
    return WorkspaceComponent;
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
/* harmony import */ var _form_image_form_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form-image/form-image.component */ "./src/app/dynamic-form2/components/form-image/form-image.component.ts");
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
    select: _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_4__["FormSelectComponent"],
    image: _form_image_form_image_component__WEBPACK_IMPORTED_MODULE_5__["FormImageComponent"],
    number: _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_3__["FormInputComponent"],
    text: _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_3__["FormInputComponent"],
    font: _form_select_form_select_component__WEBPACK_IMPORTED_MODULE_4__["FormSelectComponent"],
    color: _form_input_form_input_component__WEBPACK_IMPORTED_MODULE_3__["FormInputComponent"],
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
            /* throw new Error(
              `Trying to use an unsupported type (${this.config.type}).
              Supported types: ${supportedTypes}`
            );*/
            return;
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
    FormButtonComponent.prototype.click = function () {
        alert('dddd');
    };
    FormButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-button',
            styles: [__webpack_require__(/*! ./form-button.component.scss */ "./src/app/dynamic-form2/components/form-button/form-button.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-button\"\n      [formGroup]=\"group\"\n    >\n      <button\n        [disabled]=\"config.disabled\"\n        (click)=\"click()\"\n      >\n        {{ config.label }}\n      </button>\n    </div>\n  "
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-image/form-image.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-image/form-image.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  display: block;\n  font-family: inherit;\n  font-size: 14px;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0);\n  outline: none;\n  padding: 10px 15px;\n  color: rgba(0, 0, 0, 0.7);\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  word-break: break-all;\n  text-overflow: ellipsis; }\n  display:none\ninput:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n  .form-image-wrap {\n  width: 100px;\n  height: 100px;\n  background-color: white;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  border: 1px solid #eeeeee; }\n  label {\n  display: flex;\n  align-items: stretch; }\n  .image-input {\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  margin-bottom: 10px; }\n  .image-input-input {\n  /* display: none; */\n  width: 0;\n  height: 0;\n  padding: 0; }\n  .form-image-image {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center; }\n  .image-input-attr {\n  border: 1px solid #eeeeee;\n  display: flex;\n  align-items: center; }\n  .image-input-attr span {\n  width: 100px;\n  padding-left: 10px; }\n  .image-input-attr input {\n  flex: 1; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/form-image/form-image.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-image/form-image.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormImageComponent", function() { return FormImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormImageComponent = /** @class */ (function () {
    function FormImageComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    FormImageComponent.prototype.ngOnchange = function () {
        console.log(this.group);
    };
    FormImageComponent.prototype.ngOnInit = function () {
        console.log(this.group);
    };
    FormImageComponent.prototype.url = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    // 打开文件
    FormImageComponent.prototype.openFile = function () {
        var _this = this;
        var imageDir = localStorage.getItem('imageDir') || '';
        // alert(imageDir);
        window['remote'].dialog.showOpenDialog(window['remote'].getCurrentWindow(), {
            title: '请选择图片',
            defaultPath: imageDir,
            properties: ['openFile'],
            filters: [
                { name: '图片', extensions: ['jpg', 'jpeg', 'png', 'bmp', 'gif'] },
            ]
        }, function (filePaths) {
            //this.getCurrentDirFiles(filePaths[0],result);
            if (!filePaths) {
                return;
            }
            if (Array.isArray(filePaths) && typeof filePaths[0] == 'string') {
                localStorage.setItem('imageDir', window['path'].dirname(filePaths[0]));
            }
            console.log(filePaths[0]);
            // console.log(this.group.controls[this.config.name]);
            _this.group.controls[_this.config.name].setValue(filePaths[0].replace(/\\/g, '/'), { emitEvent: true });
            _this.input.nativeElement.blur();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], FormImageComponent.prototype, "input", void 0);
    FormImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-image',
            styles: [__webpack_require__(/*! ./form-image.component.scss */ "./src/app/dynamic-form2/components/form-image/form-image.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field image-input\" \n      [formGroup]=\"group\"\n    >\n      <label class=\"image-input-lable\" >\n        <img class=\"pointer form-image-image\" style=\"width:100px;height:100px;\" [src]=\"this.url(src?.value || '')\" (click)=\"openFile()\">\n        <input\n          class=\"image-input-input\"\n          type=\"text\"\n          #src\n          #input\n          [attr.placeholder]=\"config.placeholder\"\n          [formControlName]=\"config.name\">\n      </label>\n      <!--<div>\n        <div class=\"image-input-attr\" *ngIf=\"group.controls[config.name+'-x']\">\n          <span>\u8DDD\u5DE6\u8FB9\u8DDD:</span>\n          <input type=\"number\" step=\"10\" [formControlName]=\"config.name+'-x'\">\n        </div>\n        <div class=\"image-input-attr\" *ngIf=\"group.controls[config.name+'-y']\">\n          <span>\u8DDD\u4E0A\u8FB9\u8DDD:</span>\n          <input type=\"number\" step=\"10\" [formControlName]=\"config.name+'-y'\">\n        </div>\n        <div class=\"image-input-attr\" *ngIf=\"group.controls[config.name+'-scaleX']\">\n          <span>\u5BBD\u7F29\u653E\u6BD4:</span>\n          <input type=\"number\" step=\"0.1\" [formControlName]=\"config.name+'-scaleX'\">\n        </div>\n        <div class=\"image-input-attr\" *ngIf=\"group.controls[config.name+'-scaleY']\">\n          <span>\u9AD8\u7F29\u653E\u6BD4:</span>\n          <input type=\"number\" step=\"0.1\" [formControlName]=\"config.name+'-scaleY'\">\n        </div>\n      </div>-->\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], FormImageComponent);
    return FormImageComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-input/form-input.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-input/form-input.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  display: block;\n  font-family: inherit;\n  font-size: 14px;\n  width: 100%;\n  height: 30px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: none;\n  padding-left: 10px;\n  color: rgba(0, 0, 0, 0.7);\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  word-break: break-all;\n  text-overflow: ellipsis; }\n  input:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n  div {\n  display: flex;\n  margin-bottom: 5px; }\n  label {\n  min-width: 50px; }\n"

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
            template: "\n    <div *ngIf=\"config.type=='text'\"\n      class=\"dynamic-field form-input f aic\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <input\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n    </div>\n    <div *ngIf=\"config.type=='number'\"\n      class=\"dynamic-field form-input f aic\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <input\n        type=\"number\"\n        [step]=\"config.step\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n    </div>\n    <div *ngIf=\"config.type=='color'\"\n      class=\"dynamic-field form-input f aic\" \n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <input\n        type=\"color\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n    </div>\n  "
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

module.exports = "select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  text-indent: .01px;\n  text-overflow: '';\n  overflow: hidden;\n  font-family: inherit;\n  font-size: 14px;\n  padding-left: 10px;\n  height: 30px;\n  border-radius: 0;\n  color: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  width: 100%;\n  outline: none;\n  box-sizing: border-box;\n  background: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.7) 50%) no-repeat calc(100% - 20px) calc(1em + -1px), linear-gradient(135deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%) no-repeat calc(100% - 15px) calc(1em + -1px);\n  background-size: 5px 5px, 5px 5px;\n  background-color: white; }\n  select:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n  label {\n  min-width: 50px; }\n  div {\n  margin-bottom: 5px; }\n"

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
            template: "\n    <div \n      class=\"dynamic-field form-select f aic\"\n      [formGroup]=\"group\">\n      <label>{{ config.label }}</label>\n      <select [formControlName]=\"config.name\">\n        <option *ngFor=\"let option of config.options\" [value]=\"option.value || option\">\n          {{ option.name || option }}\n        </option>\n      </select>\n    </div>\n  "
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
/* harmony import */ var _components_form_image_form_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form-image/form-image.component */ "./src/app/dynamic-form2/components/form-image/form-image.component.ts");
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
                _components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_7__["FormSelectComponent"],
                _components_form_image_form_image_component__WEBPACK_IMPORTED_MODULE_8__["FormImageComponent"]
            ],
            exports: [
                _containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"]
            ],
            entryComponents: [
                _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_5__["FormButtonComponent"],
                _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_6__["FormInputComponent"],
                _components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_7__["FormSelectComponent"],
                _components_form_image_form_image_component__WEBPACK_IMPORTED_MODULE_8__["FormImageComponent"]
            ]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
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
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
        var _this = this;
        this.fileservice = fileservice;
        this.ffmpegService = ffmpegService;
        this.dialogService = dialogService;
        this.paused = false;
        this.savePath = ''; //
        this.videoPath = ''; // video
        this.imgPath = ''; // img
        this.imgPrefix = '';
        this.fps = 24;
        this.width = 800;
        this.height = 800;
        this.position = 0;
        this.progressPosition = 0;
        // 表单配置
        this.options = [];
        this.opts = [];
        this.expoprtOptons = { width: 800, height: 800, time: 1, quality: 90 };
        this.generateStep = 0;
        this.tempPath = window['path'].join(window['dirname'], 'tempDir'); // 临时文件夹，用于存放视频生成过程中的逐帧图片
        // 音频文件名及路径
        this.audio = { name: '无', path: '' }; // audio
        this.fonts = [];
        // 模板列表
        this.tempList = [];
        // canvas 上下文菜单
        this.canvasContextMenu = new window['remote'].Menu();
        this.observables = {
            actions: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            exportImg: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            template: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            options: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            optionsSet: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            optsSet: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            generateMp4: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            audio: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
            localActions: new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"](),
        };
        this.fileservice.deleteTempFiles(this.tempPath, '');
        // 获取字体列表
        window['fontList'].getFonts()
            .then(function (fonts) {
            // alert(typeof fonts)
            _this.fonts = fonts;
            _this.opts.forEach(function (opt) {
                opt.forEach(function (item) {
                    if (item.type == 'font') {
                        item.options = fonts;
                    }
                });
            });
        })
            .catch(function (err) {
            console.log(err);
        });
        // 模板列表
        this.tempList = window['tempList'];
        this.initMenu();
    }
    // 初始化菜单
    CanvasService.prototype.initMenu = function () {
        var _t = this;
        this.canvasContextMenu.append(new window['remote'].MenuItem({
            label: '保存图片',
            click: function () {
                _t.observables.actions.next({
                    type: 'getBase64',
                });
            }
        }));
        this.canvasContextMenu.append(new window['remote'].MenuItem({
            label: '刷新',
            click: function () {
                _t.observables.localActions.next({
                    action: 'reload',
                });
            }
        }));
    };
    CanvasService.prototype.setInstance = function () {
    };
    CanvasService.prototype.init = function (e, e2, e3) {
        var _this = this;
        console.log(e);
        var props = e;
        // alert(JSON.stringify(props));
        this.duration = props['duration'];
        this.fps = props['fps'];
        this.width = props.width;
        this.height = props.height;
        this.paused = props.paused;
        this.options = this.reduceOptions(e2); // this.options;
        e3.forEach(function (opt) {
            opt.forEach(function (item) {
                if (item.type == 'font') {
                    item.options = _this.fonts;
                }
            });
        });
        this.opts = e3;
        console.log('e3', e3);
        console.log(this.options);
        this.observables.options.next({
            options: this.options,
        });
        // "duration":121,"fps":40,"width":800,"height":800,"color":"#FFFFFF","paused":false
    };
    CanvasService.prototype.reduceOptions = function (options) {
        var resultOptions = [];
        options.forEach(function (item) {
            switch (item.type) {
                case 'image':
                    resultOptions.push(item);
                    ['x', 'y', 'scaleX', 'scaleY'].forEach(function (i) {
                        if (item[i] != undefined) {
                            resultOptions.push({
                                type: 'number',
                                value: item[i],
                                name: item.name + "-" + i
                            });
                        }
                    });
                    break;
                default:
                    resultOptions.push(item);
                    break;
            }
        });
        return resultOptions;
    };
    CanvasService.prototype.setIsPaused = function (paused) {
        this.paused = paused;
    };
    CanvasService.prototype.setCurrentPosition = function (p) {
        this.position = p;
    };
    CanvasService.prototype.setProgress = function (p) {
        this.progressPosition = p;
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
    CanvasService.prototype.exFile = function (expoprtOptons) {
        var _this = this;
        this.generateStep = 0;
        console.log('exFile');
        this.expoprtOptons = expoprtOptons;
        // 获取mp4 保存路径
        this.dialogService.getSaveFile(function (file) {
            if (!file) {
                return;
            }
            _this.videoPath = file;
            console.log('file', file);
            _this.imgPrefix = Date.now() + 'img';
            _this.observables.exportImg.next({
                path: window['path'].join(window['dirname'], 'tempDir'),
                imgPrefix: _this.imgPrefix,
            });
            // this.dialogService.showProgress();
        });
    };
    // 生成mp4 文件
    CanvasService.prototype.generateMp4 = function () {
        this.generateStep = 1;
        this.progressPosition = 0;
        this.ffmpegService.generateMp4(__assign({ distPath: this.videoPath, savePath: window['path'].join(window['dirname'], 'tempDir'), audioPath: this.audio.path, duration: this.duration, fps: this.fps, imgPrefix: this.imgPrefix }, this.expoprtOptons), function () {
            /* this.observables.generateMp4.next({
              success: true,
            });*/
        });
    };
    CanvasService.prototype.loadTemplate = function (url) {
        if (!url) {
            alert('无效的模板地址');
            return;
        }
        // this.options = [];
        this.opts = [];
        /* this.observables.options.next({
          options: [],
        });*/
        this.observables.optsSet.next({
            opts: [],
        });
        this.observables.template.next({
            action: 'loadTemplate',
            url: url,
        });
    };
    // 旧
    CanvasService.prototype.setOptions = function (options) {
        console.log('setOptions');
        this.observables.optionsSet.next({
            options: options
        });
    };
    // 新
    CanvasService.prototype.setOpts = function (opts) {
        console.log('setOptions');
        this.observables.optsSet.next({
            opts: opts
        });
    };
    /**
     * 设置音乐
     */
    CanvasService.prototype.setAudio = function (val) {
        var audio = { name: '无', path: '' };
        if (typeof val == 'string') {
            audio = {
                name: window['path'].basename(val),
                path: val,
            };
        }
        else {
            audio = val;
        }
        this.audio = audio;
        this.observables.audio.next(audio);
    };
    CanvasService.prototype.showCanvasContextMenu = function () {
        this.canvasContextMenu.popup(window['remote'].getCurrentWindow());
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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file.service */ "./src/app/service/file.service.ts");
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
    function DialogService(dialog, fileService) {
        this.dialog = dialog;
        this.fileService = fileService;
        this.projectDir = null;
        this.path = window['path'];
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
    // 保存文件
    DialogService.prototype.getSaveFile = function (callback) {
        var videoDir = localStorage.getItem('videoDir') || '';
        // alert(videoDir);
        window['remote'].dialog.showSaveDialog(window['remote'].getCurrentWindow(), {
            title: '保存视频',
            defaultPath: videoDir,
            filters: [
                { name: '视频', extensions: ['mp4'] },
            ]
        }, function (res) {
            callback(res);
            if (typeof res == 'string') {
                var dirName = this.path.dirname(res);
                localStorage.setItem('videoDir', dirName);
                // alert(dirName);
            }
        });
    };
    // 打开音乐文件
    DialogService.prototype.selectFile = function (_a) {
        var _this = this;
        var type = _a.type, callback = _a.callback;
        var audioDir = localStorage.getItem('audioDir') || '';
        // alert(audioDir);
        window['remote'].dialog.showOpenDialog(window['remote'].getCurrentWindow(), {
            title: '请选择音乐',
            defaultPath: audioDir,
            properties: ['openFile'],
            filters: [
                { name: '音乐', extensions: ['mp3', 'wav'] },
            ]
        }, function (filePaths) {
            //this.getCurrentDirFiles(filePaths[0],result);
            if (!filePaths) {
                return;
            }
            callback(filePaths);
            if (Array.isArray(filePaths) && typeof filePaths[0] == 'string') {
                var dirName = _this.path.dirname(filePaths[0]);
                localStorage.setItem('audioDir', dirName);
                // alert(dirName);
            }
        });
    };
    DialogService.prototype.saveImg = function (str) {
        var _this = this;
        var saveImageDir = localStorage.getItem('saveImageDir') || '';
        // alert(videoDir);
        window['remote'].dialog.showSaveDialog(window['remote'].getCurrentWindow(), {
            title: '保存图片',
            defaultPath: saveImageDir,
            filters: [
                { name: '图片', extensions: ['png'] },
            ]
        }, function (res) {
            if (typeof res == 'string') {
                var dirName = _this.path.dirname(res);
                localStorage.setItem('saveImageDir', dirName);
                // alert(dirName);
                _this.fileService.saveBase64(str, res, function (err) {
                    if (err) {
                        alert(err);
                        return;
                    }
                    alert('保存成功');
                });
            }
        });
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _file_service__WEBPACK_IMPORTED_MODULE_2__["FileService"]])
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
/* harmony import */ var _file_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file.service */ "./src/app/service/file.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
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
    function FfmpegService(fileService, snackBar, dialog) {
        this.fileService = fileService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.exec = window['exec'];
        this.path = window['path'];
    }
    FfmpegService.prototype.generateMp4 = function (_a, callback) {
        var _this = this;
        var distPath = _a.distPath, audioPath = _a.audioPath, imgPrefix = _a.imgPrefix, savePath = _a.savePath, duration = _a.duration, fps = _a.fps, time = _a.time, width = _a.width, height = _a.height, quality = _a.quality;
        // alert('generateMp4');
        // console.log(__dirname);
        var currentDir = window['dirname'];
        // 临时图片目录
        var frompath = '"' + this.path.join(savePath, imgPrefix + "%d.png") + '"';
        // 视频生成路径
        var outputpath = '"' + distPath + '"';
        // 音频
        var audioCommand = audioPath ? " -t " + time + " -i " + audioPath : '';
        // 视频质量 1 - 51;越小越清晰
        var qual = (100 - quality) / 100 * 51;
        if (qual > 51) {
            qual = 51;
        }
        if (qual <= 1) {
            qual = 1;
        }
        // 视频尺寸（应方显示为原有模板的高宽比）
        var videoSize = width + '*' + height;
        // 视频质量
        var crf = " -crf " + qual + " "; // ' -crf 51 ';
        var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -y -r ' + fps + ' -t ' + time + ' -f image2 -i ' + frompath + audioCommand + ' -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 -s ' + videoSize + ' ' + crf + outputpath;
        // var commandStr = '"./ffmpeg/bin/ffmpeg.exe" -r 30 -f image2 -i D:/del3/img%d.png -t 10 -i ./audio/1.mp3 -pix_fmt yuv420p -preset slow -profile:v baseline -q:v 4 D:/del3/video.mp4'
        // alert(commandStr);
        console.log(commandStr);
        this.exec(commandStr, { cwd: currentDir }, function (err, data, data1) {
            if (err) {
                console.error(err);
                _this.hideDialog();
                setTimeout(function () {
                    alert(err);
                }, 1000);
                return;
            }
            // this.snackBar.open('生成成功', 'ok', {duration: 3000});
            _this.fileService.deleteTempFiles(savePath, imgPrefix);
            _this.hideDialog();
            setTimeout(function () {
                alert('生成成功');
            }, 1000);
            callback();
        });
    };
    FfmpegService.prototype.hideDialog = function () {
        this.dialog.closeAll();
        window.resizeBy(1, 0);
        window.resizeBy(-1, 0);
        try {
            setTimeout(function () {
                document.querySelector('.cdk-overlay-container').innerHTML = '';
            }, 2000);
        }
        catch (e) {
            console.error(e);
        }
    };
    FfmpegService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_file_service__WEBPACK_IMPORTED_MODULE_1__["FileService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
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
    FileService.prototype.saveBase64 = function (str, path, callback) {
        var imgdata = str.slice(22);
        this.fs.writeFile(path, imgdata, 'base64', function (err) {
            callback(err);
        });
    };
    // 删除文件
    FileService.prototype.deleteTempFiles = function (dir, prefix) {
        var _this = this;
        this.fs.readdir(dir, function (err, res) {
            // console.log(res);
            res.forEach(function (item) {
                if (!prefix) {
                    _this.fs.unlink(_this.path.join(dir, item), function (err) {
                        if (err) {
                            console.error(err);
                        }
                    });
                }
                else if (item.startsWith(prefix)) {
                    _this.fs.unlink(_this.path.join(dir, item), function (err) {
                        if (err) {
                            console.error(err);
                        }
                    });
                }
            });
        });
    };
    // 判断文件是否存在
    FileService.prototype.checkFile = function () {
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