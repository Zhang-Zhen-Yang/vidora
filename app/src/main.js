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
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _component_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./component/animate-template/animate-template.component */ "./src/app/component/animate-template/animate-template.component.ts");
/* harmony import */ var _component_animate_template_item_animate_template_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/animate-template-item/animate-template-item.component */ "./src/app/component/animate-template-item/animate-template-item.component.ts");
/* harmony import */ var _component_animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/animate-template-loading-progress/animate-template-loading-progress.component */ "./src/app/component/animate-template-loading-progress/animate-template-loading-progress.component.ts");
/* harmony import */ var _component_export_options_export_options_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./component/export-options/export-options.component */ "./src/app/component/export-options/export-options.component.ts");
/* harmony import */ var _component_generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./component/generating-progress/generating-progress.component */ "./src/app/component/generating-progress/generating-progress.component.ts");
/* harmony import */ var _component_audio_manager_audio_manager_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./component/audio-manager/audio-manager.component */ "./src/app/component/audio-manager/audio-manager.component.ts");
/* harmony import */ var _component_actionpanel_item_actionpanel_item_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./component/actionpanel-item/actionpanel-item.component */ "./src/app/component/actionpanel-item/actionpanel-item.component.ts");
/* harmony import */ var _component_video_transform_video_transform_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./component/video-transform/video-transform.component */ "./src/app/component/video-transform/video-transform.component.ts");
/* harmony import */ var _component_transforming_progress_transforming_progress_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./component/transforming-progress/transforming-progress.component */ "./src/app/component/transforming-progress/transforming-progress.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { DynamicFormsBootstrapUIModule } from "@ng-dynamic-forms/ui-bootstrap";










// material





// pagination











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
                _component_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_21__["AnimateTemplateComponent"],
                _component_animate_template_item_animate_template_item_component__WEBPACK_IMPORTED_MODULE_22__["AnimateTemplateItemComponent"],
                _component_export_options_export_options_component__WEBPACK_IMPORTED_MODULE_24__["ExportOptionsComponent"],
                _component_generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_25__["GeneratingProgressComponent"],
                _component_audio_manager_audio_manager_component__WEBPACK_IMPORTED_MODULE_26__["AudioManagerComponent"],
                _component_actionpanel_item_actionpanel_item_component__WEBPACK_IMPORTED_MODULE_27__["ActionpanelItemComponent"],
                _component_animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_23__["AnimateTemplateLoadingProgressComponent"],
                _component_video_transform_video_transform_component__WEBPACK_IMPORTED_MODULE_28__["VideoTransformComponent"],
                _component_transforming_progress_transforming_progress_component__WEBPACK_IMPORTED_MODULE_29__["TransformingProgressComponent"],
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
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"],
                _ng_dynamic_forms_core__WEBPACK_IMPORTED_MODULE_3__["DynamicFormsCoreModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"],
                // DynamicFormsBootstrapUIModule,
                _dynamic_form2_dynamic_form_module__WEBPACK_IMPORTED_MODULE_5__["DynamicFormModule"]
            ],
            entryComponents: [
                _component_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_21__["AnimateTemplateComponent"],
                _component_export_options_export_options_component__WEBPACK_IMPORTED_MODULE_24__["ExportOptionsComponent"],
                _component_generating_progress_generating_progress_component__WEBPACK_IMPORTED_MODULE_25__["GeneratingProgressComponent"],
                _component_animate_template_loading_progress_animate_template_loading_progress_component__WEBPACK_IMPORTED_MODULE_23__["AnimateTemplateLoadingProgressComponent"],
                _component_video_transform_video_transform_component__WEBPACK_IMPORTED_MODULE_28__["VideoTransformComponent"],
                _component_transforming_progress_transforming_progress_component__WEBPACK_IMPORTED_MODULE_29__["TransformingProgressComponent"],
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

module.exports = ":host {\r\n\twidth: 300px;\r\n\tbackground-color:#ededed;/* aliceblue;*/\r\n\tborder-left:1px solid #cccccc;\r\n\tpadding: 20px 0 0 20px;;\r\n\tdisplay: flex;\r\n\tflex-direction: column;\r\n}\r\n.panel-form-wrap{\r\n\tflex: 1;\r\n\toverflow: auto;\r\n\tpadding: 0 20px 20px 0;\r\n}"

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

module.exports = ":host{\r\n\t\r\n}\r\n#template-item{\r\n\t/*display: inline-block;*/\r\n\twidth:200px;\r\n\theight: 160px;\r\n\tbackground-color:white;\r\n\tcursor: pointer;\r\n\tposition: relative;\r\n}\r\n#template-item:hover{\r\n\tbackground-color: #eeeeee;\r\n}\r\n#template-item-placeholder {\r\n\twidth: 200px;\r\n\theight: 0;\r\n}\r\nimg{\r\n\t-o-object-fit: cover;\r\n\t   object-fit: cover;\r\n\t-o-object-position: center;\r\n\t   object-position: center;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tvertical-align: middle;\r\n}\r\n.temp-name{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\tbottom: 0;\r\n\twidth: 100%;\r\n\tbackground-color:rgba(0,0,0,0.5);\r\n\tcolor:white;\r\n\tpadding: 0 10px;\r\n\tline-height: 30px;\r\n}"

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



/*模板列表 */
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

module.exports = "#template-wrap{\r\n\t/*width: 500px;*/\r\n\tdisplay: flex;\r\n\tjustify-content: space-around;\r\n\tflex-wrap: wrap;\r\n\tpadding: 10px 0;\r\n\twidth: 75vw;\r\n\theight: 60vh;\r\n\tflex-direction: row;\r\n\t\r\n}"

/***/ }),

/***/ "./src/app/component/animate-template/animate-template.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/component/animate-template/animate-template.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>模板选择</h2>\n<mat-dialog-content>\n  <div id=\"template-wrap\">\n    <app-animate-template-item *ngFor=\"let item of tempList();\" [data]=\"item\" (closedialog)=\"closedialog();\">\n    </app-animate-template-item>\n  </div>\n  \n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-dialog-close class=\"warn\" style=\"float: right;\">取消</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <!--<button mat-button [mat-dialog-close]=\"true\">Yes</button>-->\n  \n</mat-dialog-actions>"

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

module.exports = "<audio #audio src=\"\" controls=\"controls\" loop></audio>\n<div>&nbsp;{{ audioName() }}&nbsp;</div>\n<div id=\"music-albums\" class=\"pointer\" [matMenuTriggerFor]=\"menu\">\n  <div [class]=\"[paused ? 'audio-paused' : 'audio-running']\">\n    <span class=\"iconfont\">&#xe652;</span>\n  </div>\n  <mat-menu #menu=\"matMenu\" MenuPositionX=\"before\" xPosition=\"before\" (closed)=\"menuClosed(e)\">\n      <button mat-menu-item (click)=\"selectLocalAudio()\">本地音乐</button>\n      <button mat-menu-item [matMenuTriggerFor]=\"preset\">内置音乐</button>\n  </mat-menu>\n  <mat-menu #preset=\"matMenu\">\n      <button\n        mat-menu-item\n        *ngFor=\"let item of audioList\"\n        (click)=\"selectAudio(item);\"\n        [ngStyle]=\"{'background-color': audioName() == item.name ? '#f44336' : 'white', color: audioName() == item.name ? 'white' : 'inherit'}\"\n      >\n        {{item.name}}\n    </button>\n  </mat-menu>\n</div>\n"

/***/ }),

/***/ "./src/app/component/audio-manager/audio-manager.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/component/audio-manager/audio-manager.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  align-items: center; }\n\n#music-albums {\n  padding: 5px;\n  /* background-color: red;*/ }\n\n#music-albums span {\n  font-size: 20px; }\n\n#music-albums > div {\n  -webkit-animation: round 5s linear 0s infinite normal;\n          animation: round 5s linear 0s infinite normal;\n  margin-right: 10px; }\n\n@-webkit-keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes round {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\nbutton {\n  font-size: 14px; }\n\n.selected {\n  background-color: #f44336;\n  color: white; }\n"

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

module.exports = ":host {\r\n\t/* background-color:#1ABC9C;*/ \r\n\tbackground-color:#3498DB;\r\n\theight: 25px;\r\n\tposition: relative;\r\n}\r\n#bottom-bar{\r\n\tposition: absolute;\r\n\tleft:0;\r\n\tbottom:0;\r\n\twidth:100%;\r\n\theight:100%;\r\n\tcolor:white;\r\n}\r\n.edit-message-wrap{\r\n\tfloat:right;\r\n\tcolor:white;\r\n}\r\n.edit-message{\r\n\tdisplay: inline-block;\r\n\theight:25px;\r\n\tline-height: 25px;\r\n\tfont-size:12px;\r\n\tpadding:0 5px;\r\n}"

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

module.exports = "/* input {\r\n\tdisplay: block;\r\n\tfont-family: inherit;\r\n\tfont-size: 14px;\r\n\twidth: 100%;\r\n\tborder: 1px solid rgba(0, 0, 0, 0.1);\r\n\toutline: none;\r\n\tpadding: 10px 15px;\r\n\tcolor: rgba(0, 0, 0, 0.7);\r\n\tbox-sizing: border-box;\r\n\toverflow: hidden;\r\n\twhite-space: nowrap;\r\n\tword-break: break-all;\r\n\ttext-overflow: ellipsis;\r\n\tmargin-top: 10px;\r\n\tmargin-bottom: 10px;\r\n\t&:focus {\r\n\t  border: 1px solid rgba(0, 0, 0, 0.4);\r\n\t  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\r\n\t}\r\n}\r\n.input-wrap{\r\n\tdisplay: flex;\r\n\talign-items: center;\r\n}\r\n.input-wrap label{\r\n\twidth: 100px;\r\n}*/\n"

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

module.exports = ":host {\r\n\tbackground-color:#2B2B2B;\r\n}\r\n#left-bar {\r\n\twidth:50px;\r\n\tcolor:#aaa;\r\n}\r\n#template-show-trigger {\r\n\twidth:40px;\r\n\theight:40px;\r\n\t/* border-radius:50%;\r\n\tbackground-color: #9d62c8;\r\n\tborder:2px solid white;\r\n\tmargin-left: 5px;\r\n\tmargin-top: 10px;\r\n\tcursor: pointer;*/\r\n\tcolor: #eeeeee;\r\n\tfont-size: 30px;\r\n    text-align: center;\r\n\tmargin: 16px 3px;\r\n\tmargin-bottom: 30px;\r\n\tcursor: pointer;\r\n}"

/***/ }),

/***/ "./src/app/component/leftbar/leftbar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/component/leftbar/leftbar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"left-bar\">\n  <div  id=\"template-show-trigger\" (click)=\"showTemplateDialog()\" class=\"iconfont\" title=\"模板选择\">\n    &#xe610;\n  </div>\n  <div  id=\"template-show-trigger\" (click)=\"showAudioDialog()\" class=\"iconfont\" title=\"影片编辑\" style=\"font-size: 26px;\">\n    &#xe978;\n  </div>\n</div>\n\n\n"

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
/* harmony import */ var _video_transform_video_transform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../video-transform/video-transform.component */ "./src/app/component/video-transform/video-transform.component.ts");
/* harmony import */ var _dynamic_form2_author_callback_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dynamic-form2/author-callback.service */ "./src/app/dynamic-form2/author-callback.service.ts");
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
    function LeftbarComponent(dialog, authorCallback) {
        this.dialog = dialog;
        this.authorCallback = authorCallback;
    }
    LeftbarComponent.prototype.ngOnInit = function () {
    };
    // 显示模板弹窗
    LeftbarComponent.prototype.showTemplateDialog = function () {
        var dialogRef = this.dialog.open(_animate_template_animate_template_component__WEBPACK_IMPORTED_MODULE_2__["AnimateTemplateComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
        this.authorCallback.callbackList.push(function () {
            alert('dddddddddddddddddd');
        });
        /*let authorDialogRef = this.dialog.open(AuthorDialogComponent);
        this.authorCallback.dialogRef = authorDialogRef;
        authorDialogRef.afterClosed().subscribe(res=>{
          this.authorCallback.dialogRef = null;
          this.authorCallback.callbackList = null;
    
        })*/
    };
    // 显示视频转换弹窗
    LeftbarComponent.prototype.showAudioDialog = function () {
        var dialogRef = this.dialog.open(_video_transform_video_transform_component__WEBPACK_IMPORTED_MODULE_3__["VideoTransformComponent"]);
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
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _dynamic_form2_author_callback_service__WEBPACK_IMPORTED_MODULE_4__["AuthorCallbackService"]])
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

/***/ "./src/app/component/transforming-progress/transforming-progress.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/component/transforming-progress/transforming-progress.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>视频转换中</h2>\n<mat-dialog-content>\n  <div *ngIf=\"duration()\">\n    <mat-progress-bar mode=\"determinate\" [value]=\"value()\" color=\"warn\"></mat-progress-bar>\n    <div class=\"f fr jcsb\" style=\"margin-top: 10px;\">\n      <span class=\"fontSmall color-gray\">当前: {{ current() }}</span>\n      <span class=\"fontSmall color-gray\">总长:{{ duration() }}</span>\n    </div>\n  </div>\n  <div *ngIf=\"!duration()\">\n    <mat-progress-bar mode=\"indeterminate\" color=\"warn\" value=\"50\"></mat-progress-bar>\n    <div class=\"f fr jcsb\" style=\"margin-top: 10px;\">\n      <span class=\"fontSmall color-gray\">视频转换</span>\n    </div>\n  </div>\n\n</mat-dialog-content>"

/***/ }),

/***/ "./src/app/component/transforming-progress/transforming-progress.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/component/transforming-progress/transforming-progress.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/component/transforming-progress/transforming-progress.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/component/transforming-progress/transforming-progress.component.ts ***!
  \************************************************************************************/
/*! exports provided: TransformingProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformingProgressComponent", function() { return TransformingProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_ffmpeg_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/ffmpeg.service */ "./src/app/service/ffmpeg.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransformingProgressComponent = /** @class */ (function () {
    function TransformingProgressComponent(ffmpegService) {
        this.ffmpegService = ffmpegService;
    }
    TransformingProgressComponent.prototype.ngOnInit = function () {
    };
    // 当前进度
    TransformingProgressComponent.prototype.value = function () {
        // return 50;
        var cTime = this.ffmpegService.current.split(':').reverse();
        var cTimeNum = 0;
        cTime.forEach(function (item, index) {
            cTimeNum += parseFloat(item) * Math.pow(60, index);
        });
        return cTimeNum / this.cTimeNum() * 100;
    };
    TransformingProgressComponent.prototype.cTimeNum = function () {
        var dTime = this.ffmpegService.duration.split(':').reverse();
        var dTimeNum = 0;
        dTime.forEach(function (item, index) {
            dTimeNum += parseFloat(item) * Math.pow(60, index);
        });
        return dTimeNum;
    };
    // 当前时间 -----------------------------------------------------------------------------
    TransformingProgressComponent.prototype.current = function () {
        return this.ffmpegService.current;
    };
    // 持续时间 -----------------------------------------------------------------------------
    TransformingProgressComponent.prototype.duration = function () {
        return this.ffmpegService.duration;
    };
    TransformingProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transforming-progress',
            template: __webpack_require__(/*! ./transforming-progress.component.html */ "./src/app/component/transforming-progress/transforming-progress.component.html"),
            styles: [__webpack_require__(/*! ./transforming-progress.component.scss */ "./src/app/component/transforming-progress/transforming-progress.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_ffmpeg_service__WEBPACK_IMPORTED_MODULE_1__["FfmpegService"]])
    ], TransformingProgressComponent);
    return TransformingProgressComponent;
}());



/***/ }),

/***/ "./src/app/component/video-transform/video-transform.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/component/video-transform/video-transform.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>视频操作</h2>\n<mat-dialog-content>\n    <div id=\"export-options-wrap\" [formGroup]=\"form\">\n      <!--名称-->\n      <div class=\"input-wrap\">\n        <label>\n          文件\n        </label>\n        <input [formControlName]=\"'name'\" disabled type=\"text\">\n        <button class=\"warn\" (click)=\"selectFile()\">文件</button>\n      </div>\n      <div class=\"input-wrap\">\n        <label>\n          质量\n        </label>\n        <input [formControlName]=\"'quality'\" type=\"number\" min=\"0\" max=\"100\">\n      </div>\n\n      <!--类型\n      <div class=\"input-wrap\">\n        <label>\n          类型\n        </label>\n        <select [formControlName]=\"'type'\" >\n            <option *ngFor=\"let item of types\" [value]=\"item\">{{item}}</option>\n        </select>\n      </div>-->\n    </div>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button mat-dialog-close>取消</button>\n  <!-- The mat-dialog-close directive optionally accepts a value as a result for the dialog. -->\n  <button mat-button (click)=\"confirm()\">确定</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/component/video-transform/video-transform.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/component/video-transform/video-transform.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-wrap {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n  .input-wrap label {\n    width: 60px; }\n  .input-wrap input {\n    flex: 1; }\n  .input-wrap button {\n    margin-left: 10px; }\n"

/***/ }),

/***/ "./src/app/component/video-transform/video-transform.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/component/video-transform/video-transform.component.ts ***!
  \************************************************************************/
/*! exports provided: VideoTransformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoTransformComponent", function() { return VideoTransformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _videoType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./videoType */ "./src/app/component/video-transform/videoType.ts");
/* harmony import */ var _service_ffmpeg_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/ffmpeg.service */ "./src/app/service/ffmpeg.service.ts");
/* harmony import */ var _service_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/dialog.service */ "./src/app/service/dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _transforming_progress_transforming_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transforming-progress/transforming-progress.component */ "./src/app/component/transforming-progress/transforming-progress.component.ts");
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







/*
ffmpeg常用参数的介绍
-i 指定要转换视频的源文件
-s 视频转换后视频的分辨率
-vcodec 视频转换时使用的编解码器
-r 视频转换换的桢率(默认25桢每秒)
-b 视频转换换的bit率
-ab 音频转换后的bit率(默认64k)
-acodec 制度音频使用的编码器
-ac 制定转换后音频的声道
-ar 音频转换后的采样率
*/
var VideoTransformComponent = /** @class */ (function () {
    function VideoTransformComponent(fb, ffmpegService, dialogService, dialog) {
        this.fb = fb;
        this.ffmpegService = ffmpegService;
        this.dialogService = dialogService;
        this.dialog = dialog;
        this.types = _videoType__WEBPACK_IMPORTED_MODULE_2__["VideoType"];
        console.log(_videoType__WEBPACK_IMPORTED_MODULE_2__["VideoType"]);
        this.form = fb.group({
            name: [''],
            type: ['mp4'],
            quality: [80],
        });
        this.form.valueChanges.subscribe(function (res) {
            console.log(res);
        });
    }
    VideoTransformComponent.prototype.ngOnInit = function () {
    };
    // 选择文件 ---------------------------------------------------------------------------
    VideoTransformComponent.prototype.selectFile = function () {
        var _this = this;
        console.log('select');
        this.dialogService.selectFile({
            type: 'video',
            callback: function (res) {
                console.log(res);
                _this.form.controls.name.setValue(res[0]);
            }
        });
    };
    // 确定--------------------------------------------------------------------------------
    VideoTransformComponent.prototype.confirm = function () {
        var _this = this;
        var values = this.form.value;
        if (!values.name) {
            alert('请选择要转换视频文件');
            return;
        }
        this.dialogService.getSaveFile(function (res) {
            console.log(res);
            if (!values.name) {
                alert('请选择要转换视频文件');
                return;
            }
            var options = __assign({}, values, { dist: res });
            console.log(options);
            if (options.dist == options.name) {
                alert('转换和生成的文件不能为同一文件路径');
                return;
            }
            _this.dialog.closeAll();
            setTimeout(function () {
                _this.dialog.open(_transforming_progress_transforming_progress_component__WEBPACK_IMPORTED_MODULE_6__["TransformingProgressComponent"], {
                    disableClose: true,
                    minWidth: 300,
                });
            }, 0);
            _this.ffmpegService.transform(options);
        }, false);
        // this.ffmpegService.transform()
    };
    VideoTransformComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-video-transform',
            template: __webpack_require__(/*! ./video-transform.component.html */ "./src/app/component/video-transform/video-transform.component.html"),
            styles: [__webpack_require__(/*! ./video-transform.component.scss */ "./src/app/component/video-transform/video-transform.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _service_ffmpeg_service__WEBPACK_IMPORTED_MODULE_3__["FfmpegService"], _service_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], VideoTransformComponent);
    return VideoTransformComponent;
}());



/***/ }),

/***/ "./src/app/component/video-transform/videoType.ts":
/*!********************************************************!*\
  !*** ./src/app/component/video-transform/videoType.ts ***!
  \********************************************************/
/*! exports provided: VideoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoType", function() { return VideoType; });
var VideoType = [
    'mp4',
    '3gp',
    'mpg',
    'avi',
    'wmv',
    'flv',
    'wav',
    'mov',
];



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

module.exports = "<div id=\"canvas-wrap\" class=\"scrollbar-override\">\r\n\t<!--<canvas id=\"canvas\" width=\"800\" height=\"800\">\r\n\t</canvas>-->\r\n\t<app-canvas-space></app-canvas-space>\r\n</div>\r\n<div id=\"canvas-btn-wrap\">\r\n\t<div class=\"button-row\">\r\n\t\t<button  (click)=\"togglePlay()\" class=\"blue\">\r\n\t\t\t<span class=\"iconfont\">{{ isPaused() ? '&#xe61c;' : '&#xe61d;' }}</span> {{ isPaused() ? '播放' : '暂停' }}\r\n\t\t</button>\r\n\t\t<button  (click)=\"exFile()\" class=\"warn\">\r\n\t\t\t<span class=\"iconfont\">&#xe73c;</span>\r\n\t\t\t导出\r\n\t\t</button>\r\n\t\t\r\n\t\t<!--\r\n\t\t\t<button (click)=\"showSnackbar();\">\r\n\t\t\t\tsnackbar\r\n\t\t\t</button>\r\n\t\t-->\r\n\t\t<!--<button mat-flat-button color=\"accent\" (click)=\"reset()\">reset</button>\r\n\t\t<button mat-flat-button color=\"warn\" (click)=\"exFile()\">导出</button>-->\r\n\t</div>\r\n</div>"

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

/***/ "./src/app/dynamic-form2/api.js":
/*!**************************************!*\
  !*** ./src/app/dynamic-form2/api.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*
 * @Author: zhangzhenyang 
 * @Date: 2018-11-20 11:52:21 
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-11-23 09:06:56
 */

// const base = 'http://192.168.1.134:8090/wonbaoWeb/';
const base = 'http://2015.wonbao.net/';
// const remote = 'http://192.168.1.134:8090/wonbaoWeb/';
const remote = '';
/* harmony default export */ __webpack_exports__["default"] = ({
	remote,
	img: `${base}/assets/`,
	getItemInfo: `${base}marketing/wireless/activitypage/getItemInfo`,// 获取宝贝详情(y)
	getItems: `${base}public/getItems`, // 获取宝贝(可参考旺店宝的无线活动页的添加(y)
	loadPromotionActivity: `${base}public/loadPromotionActivity`,//   加载促销活动列表(y)
	getPromotionItems: `${base}public/getPromotionItems`,//   加载活动中的宝贝 (y)
	getPictureCategory: `${base}goods/manage/picture/getPictureCategory`,//获取图片空间列表(y)
	getPictureItems: `${base}goods/manage/picture/getPictureItems`, // 获取图片空间图片列表(y)
	getSellerCats:`${base}public/getSellerCats`, // 获取宝贝类目 (y)
	getPosterLabel: `${base}marketing/wireless/activitypage/getPosterLabel`,// 获取海报主题，标签，颜色 (y)
	getPosterTemplates: `${base}marketing/wireless/activitypage/getPosterTemplates`,// 获取所有的海报模板 (y)
	uploadPage: `${base}marketing/wireless/activitypage/uploadPage`,// 无线活动页上传本地图片到图片空间(y)
});

/***/ }),

/***/ "./src/app/dynamic-form2/author-callback.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-form2/author-callback.service.ts ***!
  \**********************************************************/
/*! exports provided: AuthorCallbackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorCallbackService", function() { return AuthorCallbackService; });
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

var AuthorCallbackService = /** @class */ (function () {
    function AuthorCallbackService() {
        this.dialogRef = null;
        this.callbackList = [];
    }
    AuthorCallbackService.prototype.execCallbacks = function () {
        this.callbackList.forEach(function (item) {
            if (item) {
                try {
                    item();
                }
                catch (e) {
                    console.error(e);
                }
            }
        });
        this.callbackList = [];
        if (this.dialogRef) {
            this.dialogRef.close();
            this.dialogRef = null;
        }
    };
    AuthorCallbackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthorCallbackService);
    return AuthorCallbackService;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/author.service.ts":
/*!*************************************************!*\
  !*** ./src/app/dynamic-form2/author.service.ts ***!
  \*************************************************/
/*! exports provided: AuthorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorService", function() { return AuthorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_author_dialog_author_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/author-dialog/author-dialog.component */ "./src/app/dynamic-form2/components/author-dialog/author-dialog.component.ts");
/* harmony import */ var _author_callback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./author-callback.service */ "./src/app/dynamic-form2/author-callback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthorService = /** @class */ (function () {
    function AuthorService(dialog, aCS) {
        this.dialog = dialog;
        this.aCS = aCS;
    }
    AuthorService.prototype.checkAuthor = function (err, callback) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        console.log('checkAuthor');
        if (err.url && err.url.indexOf('https://oauth.taobao.com/authorize') > -1) {
            this.aCS.callbackList.push(callback);
            // 打开授权窗口
            if (!this.aCS.dialogRef) {
                this.aCS.dialogRef = this.dialog.open(_components_author_dialog_author_dialog_component__WEBPACK_IMPORTED_MODULE_2__["AuthorDialogComponent"]);
                this.aCS.dialogRef.afterClosed().subscribe(function (result) {
                    // alert(this.aCS.callbackList.length);
                    _this.aCS.callbackList = [];
                    _this.aCS.dialogRef = null;
                });
            }
        }
    };
    AuthorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _author_callback_service__WEBPACK_IMPORTED_MODULE_3__["AuthorCallbackService"]])
    ], AuthorService);
    return AuthorService;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/author-dialog/author-dialog.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/author-dialog/author-dialog.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<webview \n\t#authorDialog\n\tid=\"author-dialog\"\n\tsrc=\"https://oauth.taobao.com/authorize?response_type=code&client_id=12020783&redirect_uri=http://2015.wonbao.net/authorize/web&scope=promotion,item,usergrade&view=web&state=ajaxauthorize-\"\n\tpreload=\"./authorDetect.js\"\n>\n</webview>\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/author-dialog/author-dialog.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/author-dialog/author-dialog.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#author-dialog {\n  width: 800px;\n  height: 500px; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/author-dialog/author-dialog.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/author-dialog/author-dialog.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AuthorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorDialogComponent", function() { return AuthorDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _author_callback_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../author-callback.service */ "./src/app/dynamic-form2/author-callback.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 授权弹窗组件


var AuthorDialogComponent = /** @class */ (function () {
    function AuthorDialogComponent(aCS) {
        this.aCS = aCS;
    }
    AuthorDialogComponent.prototype.ngOnInit = function () {
    };
    AuthorDialogComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.authorDialog.nativeElement.addEventListener('dom-ready', function () {
            _this.authorDialog.nativeElement.openDevTools();
            _this.authorDialog.nativeElement.addEventListener('ipc-message', function (e) {
                switch (e.channel) {
                    case 'inited':
                        // console.log('initedddddddddd');
                        _this.aCS.execCallbacks();
                        break;
                    default: break;
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('authorDialog'),
        __metadata("design:type", Object)
    ], AuthorDialogComponent.prototype, "authorDialog", void 0);
    AuthorDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-author-dialog',
            template: __webpack_require__(/*! ./author-dialog.component.html */ "./src/app/dynamic-form2/components/author-dialog/author-dialog.component.html"),
            styles: [__webpack_require__(/*! ./author-dialog.component.scss */ "./src/app/dynamic-form2/components/author-dialog/author-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_author_callback_service__WEBPACK_IMPORTED_MODULE_1__["AuthorCallbackService"]])
    ], AuthorDialogComponent);
    return AuthorDialogComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/checked-icon/checked-icon.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/checked-icon/checked-icon.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  checked-icon works!\n</p>\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/checked-icon/checked-icon.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/checked-icon/checked-icon.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form2/components/checked-icon/checked-icon.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/checked-icon/checked-icon.component.ts ***!
  \*********************************************************************************/
/*! exports provided: CheckedIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckedIconComponent", function() { return CheckedIconComponent; });
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

var CheckedIconComponent = /** @class */ (function () {
    function CheckedIconComponent() {
    }
    CheckedIconComponent.prototype.ngOnInit = function () {
    };
    CheckedIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checked-icon',
            template: __webpack_require__(/*! ./checked-icon.component.html */ "./src/app/dynamic-form2/components/checked-icon/checked-icon.component.html"),
            styles: [__webpack_require__(/*! ./checked-icon.component.scss */ "./src/app/dynamic-form2/components/checked-icon/checked-icon.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckedIconComponent);
    return CheckedIconComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/content-notice/content-notice.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/content-notice/content-notice.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"relative content-notice\" *ngIf=\"show()\">\n    <tr>\n      <td class=\"center middle\">\n        <div style=\"display: inline-block;\">\n          <mat-progress-spinner\n            *ngIf=\"lastAction == 'loading'\"\n            class=\"example-margin\"\n            color=\"warn\"\n            diameter=\"50\"\n            mode=\"indeterminate\">\n          </mat-progress-spinner>\n        </div>\n        \n          <div *ngIf=\"lastAction == 'error'\">\n            {{ msg || '请求出错' }}\n          </div>\n          <div *ngIf=\"lastAction == 'success' && count == 0\">\n            数据为空\n          </div>\n      </td>\n    </tr>\n  </table>"

/***/ }),

/***/ "./src/app/dynamic-form2/components/content-notice/content-notice.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/content-notice/content-notice.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: calc(100% - 10px); }\n\n.content-notice {\n  width: 100%;\n  height: calc(100% - 10px);\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/content-notice/content-notice.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/content-notice/content-notice.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentNoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentNoticeComponent", function() { return ContentNoticeComponent; });
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

var ContentNoticeComponent = /** @class */ (function () {
    function ContentNoticeComponent() {
    }
    ContentNoticeComponent.prototype.ngOnInit = function () {
    };
    ContentNoticeComponent.prototype.show = function () {
        return this.lastAction == 'loading' || this.lastAction == 'error' || (this.lastAction == 'success' && this.count == 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentNoticeComponent.prototype, "lastAction", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ContentNoticeComponent.prototype, "count", void 0);
    ContentNoticeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'content-notice',
            template: __webpack_require__(/*! ./content-notice.component.html */ "./src/app/dynamic-form2/components/content-notice/content-notice.component.html"),
            styles: [__webpack_require__(/*! ./content-notice.component.scss */ "./src/app/dynamic-form2/components/content-notice/content-notice.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentNoticeComponent);
    return ContentNoticeComponent;
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
/* harmony import */ var _form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form-checkbox/form-checkbox.component */ "./src/app/dynamic-form2/components/form-checkbox/form-checkbox.component.ts");
/* harmony import */ var _form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form-radio/form-radio.component */ "./src/app/dynamic-form2/components/form-radio/form-radio.component.ts");
/* harmony import */ var _form_title_form_title_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form-title/form-title.component */ "./src/app/dynamic-form2/components/form-title/form-title.component.ts");
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
    checkbox: _form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_6__["FormCheckboxComponent"],
    radio: _form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_7__["FormRadioComponent"],
    title: _form_title_form_title_component__WEBPACK_IMPORTED_MODULE_8__["FormTitleComponent"],
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
        // alert(this.config.type);
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

module.exports = "div {\n  display: flex; }\n\nbutton {\n  letter-spacing: -0.5px;\n  cursor: pointer;\n  outline: 0;\n  line-height: 1;\n  text-align: center;\n  padding: 12px 30px;\n  font-size: 15px;\n  font-weight: 600;\n  border-radius: 2px;\n  display: inline-block;\n  border: none;\n  color: #fff;\n  transition: background-color .3s, box-shadow .3s; }\n\nbutton:hover {\n    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2); }\n\nbutton:disabled {\n    background: rgba(0, 0, 0, 0.2);\n    color: rgba(0, 0, 0, 0.4);\n    cursor: not-allowed;\n    box-shadow: none; }\n\nbutton.small {\n    padding: 5px 10px;\n    font-size: 14; }\n\nbutton.block {\n    flex: 1; }\n\ninput {\n  width: 0;\n  height: 0;\n  padding: 0;\n  margin: 0;\n  border: none;\n  opacity: 0; }\n"

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
        // alert('dddd');
        this.group.controls[this.config.name].setValue(Date.now(), { emitEvent: true });
    };
    FormButtonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-button',
            styles: [__webpack_require__(/*! ./form-button.component.scss */ "./src/app/dynamic-form2/components/form-button/form-button.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field form-button\"\n      [formGroup]=\"group\"\n    >\n      <button\n        class=\"blue block\"\n        [disabled]=\"config.disabled\"\n        (click)=\"click()\"\n      >\n        {{ config.label }}\n      </button>\n      <input\n        type=\"text\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\">\n    </div>\n  "
        })
    ], FormButtonComponent);
    return FormButtonComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-checkbox/form-checkbox.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-checkbox/form-checkbox.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* input {\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  outline: none;\r\n  // padding: 10px 15px;\r\n  padding-left: 10px;\r\n  \r\n  color: rgba(0, 0, 0, 0.7);\r\n  box-sizing: border-box;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  word-break: break-all;\r\n  text-overflow: ellipsis;\r\n  &:focus {\r\n    border: 1px solid rgba(0, 0, 0, 0.4);\r\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\r\n  }\r\n}*/\ndiv {\n  display: flex;\n  margin-bottom: 5px; }\n.label {\n  width: 50px; }\n/*checkbox++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\n.checkbox-wrap {\n  display: inline-block;\n  padding-right: 10px; }\n.checkbox-wrap .checkbox-rect {\n  position: relative;\n  display: inline-block;\n  background-color: #ffffff;\n  border: 2px solid #aaa;\n  text-align: center;\n  color: #ffffff;\n  font-size: 14px;\n  line-height: 16px;\n  border-radius: 2px;\n  width: 16px;\n  height: 16px;\n  line-height: 12px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  top: 8px; }\n.checkbox-wrap > input {\n  display: none; }\n.checkbox-rect:after {\n  width: 4px;\n  height: 8px;\n  position: absolute;\n  top: 0px;\n  left: 3px;\n  border: 2px solid #ffffff;\n  border-top: 0;\n  border-left: 0;\n  opacity: 0;\n  -webkit-transform: rotate(45deg) scale3D(0.15, 0.15, 1);\n          transform: rotate(45deg) scale3D(0.15, 0.15, 1);\n  transition: all 0.3s cubic-bezier(0.55, 0, 0.55, 0.2);\n  content: \" \"; }\n.checkbox-wrap > input:checked + .checkbox-rect {\n  background-color: #3498DB;\n  border-color: #3498DB; }\n.checkbox-wrap > input:checked + .checkbox-rect:after {\n  opacity: 1;\n  -webkit-transform: rotate(45deg) scale3D(1, 1, 1);\n          transform: rotate(45deg) scale3D(1, 1, 1);\n  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1); }\n.checkbox-wrap.inverse > input:checked + .checkbox-rect {\n  background-color: #ffffff;\n  border: 2px solid #aaa;\n  color: #3498DB; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/form-checkbox/form-checkbox.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-checkbox/form-checkbox.component.ts ***!
  \***********************************************************************************/
/*! exports provided: FormCheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCheckboxComponent", function() { return FormCheckboxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormCheckboxComponent = /** @class */ (function () {
    function FormCheckboxComponent() {
    }
    FormCheckboxComponent.prototype.itemChange = function (name, res) {
        this.config.value[name] = res.checked;
        this.group.controls[this.config.name].setValue(this.config.value);
    };
    FormCheckboxComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-checkbox',
            styles: [__webpack_require__(/*! ./form-checkbox.component.scss */ "./src/app/dynamic-form2/components/form-checkbox/form-checkbox.component.scss")],
            template: "\n    <div\n      class=\"dynamic-field form-input f aic\" \n      [formGroup]=\"group\">\n      <div class=\"label\">\n        {{ config.label }}\n      </div>\n      <div style=\"flex:1;flex-wrap: wrap;\">\n        <div *ngFor=\"let item of config.options\">\n          <label class=\"checkbox-wrap f aic\">\n            <input\n              #i\n              [checked]=\"config.value[item.name]\"\n              (change)=\"itemChange(item.name, i);\"\n              type=\"checkbox\" >\n            <div class=\"checkbox-rect\"></div>\n            {{ item.name }}\n          </label>\n        </div>\n      </div>\n      <!--<input\n        type=\"checkbox\"\n        [attr.placeholder]=\"config.placeholder\"\n        [formControlName]=\"config.name\" >-->\n    </div>\n  "
        })
    ], FormCheckboxComponent);
    return FormCheckboxComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-image/form-image.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-image/form-image.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  display: block;\n  font-family: inherit;\n  font-size: 14px;\n  width: 100%;\n  border: 1px solid rgba(0, 0, 0, 0);\n  outline: none;\n  padding: 10px 15px;\n  color: rgba(0, 0, 0, 0.7);\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  word-break: break-all;\n  text-overflow: ellipsis; }\n  display:none\ninput:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n  .form-image-wrap {\n  width: 100px;\n  height: 100px;\n  background-color: white;\n  background-size: contain;\n  background-position: center center;\n  background-repeat: no-repeat;\n  border: 1px solid #eeeeee; }\n  label {\n  display: flex;\n  align-items: stretch; }\n  .image-input {\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  padding: 10px;\n  margin-bottom: 10px; }\n  .image-input-input {\n  /* display: none; */\n  width: 0;\n  height: 0;\n  padding: 0; }\n  .form-image-image {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  -o-object-position: center;\n     object-position: center;\n  background-color: #efefef; }\n  .image-input-attr {\n  border: 1px solid #eeeeee;\n  display: flex;\n  align-items: center; }\n  .image-input-attr span {\n  width: 100px;\n  padding-left: 10px; }\n  .image-input-attr input {\n  flex: 1; }\n  .image-input-table {\n  width: 100%; }\n"

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
/* harmony import */ var _form_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../form.service */ "./src/app/dynamic-form2/form.service.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image.service */ "./src/app/dynamic-form2/image.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../image-dialog/image-dialog.component */ "./src/app/dynamic-form2/components/image-dialog/image-dialog.component.ts");
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
    function FormImageComponent(sanitizer, formService, dialog, imageService) {
        this.sanitizer = sanitizer;
        this.formService = formService;
        this.dialog = dialog;
        this.imageService = imageService;
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
    FormImageComponent.prototype.openFile = function (type) {
        var _this = this;
        if (type == 0) {
            // this.formService.showImageDialog();
            this.dialog.open(_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ImageDialogComponent"]);
            this.imageService.setImageCallback(function (imageUrl) {
                if (imageUrl) {
                    _this.group.controls[_this.config.name].setValue(imageUrl, { emitEvent: true });
                    _this.input.nativeElement.blur();
                    _this.dialog.closeAll();
                }
                else {
                    alert('请选择图片');
                }
            });
        }
        else if (type == 1) {
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
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", Object)
    ], FormImageComponent.prototype, "input", void 0);
    FormImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-image',
            styles: [__webpack_require__(/*! ./form-image.component.scss */ "./src/app/dynamic-form2/components/form-image/form-image.component.scss")],
            template: "\n    <div \n      class=\"dynamic-field image-input\" \n      [formGroup]=\"group\"\n    >\n      <label class=\"image-input-lable\" >\n        <table class=\"image-input-table\">\n          <tr>\n            <td rowspan=\"2\">\n              <img class=\"pointer form-image-image\" style=\"width:100px;height:100px;\" [src]=\"this.url(src?.value || '')\" (click)=\"openFile()\">\n              <input\n                class=\"image-input-input\"\n                type=\"text\"\n                #src\n                #input\n                [attr.placeholder]=\"config.placeholder\"\n                [formControlName]=\"config.name\">\n            </td>\n            <td class=\"text-align-right vertical-align-top\">\n              <button class=\"blue block\" (click)=\"openFile(0)\">\u7EBF\u4E0A</button>\n            </td>\n          </tr>\n          <tr>\n            <td class=\"text-align-right\">\n              <button class=\"blue block\" (click)=\"openFile(1)\">\u672C\u5730</button>\n            </td>\n          </tr>\n        </table>\n      </label>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"], _form_service__WEBPACK_IMPORTED_MODULE_2__["FormService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _image_service__WEBPACK_IMPORTED_MODULE_3__["ImageService"]])
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

/***/ "./src/app/dynamic-form2/components/form-radio/form-radio.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-radio/form-radio.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  font-family: inherit;\n  font-size: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: none;\n  padding-left: 10px;\n  color: rgba(0, 0, 0, 0.7);\n  box-sizing: border-box;\n  overflow: hidden;\n  white-space: nowrap;\n  word-break: break-all;\n  text-overflow: ellipsis; }\n  input:focus {\n    border: 1px solid rgba(0, 0, 0, 0.4);\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3); }\n  div {\n  display: flex;\n  margin-bottom: 5px; }\n  label {\n  min-width: 50px; }\n  .radio-label {\n  width: 50px; }\n  /*radio++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/\n  .radio {\n  display: inline-block;\n  width: 18px;\n  height: 18px;\n  border-radius: 50%;\n  background-color: #ffffff;\n  border: 2px solid #3498DB;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n  -webkit-transform: translate(-2px, 3px);\n  transform: translate(-2px, 3px); }\n  .radio.sm {\n  width: 14px;\n  height: 14px;\n  -webkit-transform: translate(-2px, 3px);\n  transform: translate(-2px, 3px); }\n  .radioWrap {\n  padding-right: 10px;\n  padding-top: 5px;\n  padding-bottom: 5px; }\n  .radioWrap:hover .radio {\n  border-color: rgba(52, 152, 219, 0.938); }\n  .radioWrap > input {\n  display: none; }\n  .radioWrap > input:checked + .radio {\n  background-color: #3498DB;\n  border-color: #3498DB;\n  box-shadow: 0 0 0 3px #ffffff inset; }\n  .radioWrap:hover > input:checked + .radio {\n  background-color: rgba(52, 152, 219, 0.938);\n  border-color: rgba(52, 152, 219, 0.938); }\n  .radioWrap > input:disabled + .radio {\n  background-color: #d3d4e2;\n  border-color: #d3d4e2;\n  box-shadow: 0 0 0 3px #ffffff inset; }\n  .radioWrap > input:checked + .radio.sm {\n  background-color: #3498DB;\n  border-color: #3498DB;\n  box-shadow: 0 0 0 2px #ffffff inset; }\n  .radioWrap:hover > input:checked + .radio.sm {\n  background-color: rgba(52, 152, 219, 0.938);\n  border-color: rgba(52, 152, 219, 0.938); }\n  .radioWrap > input:disabled + .radio.sm {\n  background-color: #d3d4e2;\n  border-color: #d3d4e2;\n  box-shadow: 0 0 0 2px #ffffff inset; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/form-radio/form-radio.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-radio/form-radio.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormRadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRadioComponent", function() { return FormRadioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormRadioComponent = /** @class */ (function () {
    function FormRadioComponent() {
    }
    FormRadioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-radio',
            styles: [__webpack_require__(/*! ./form-radio.component.scss */ "./src/app/dynamic-form2/components/form-radio/form-radio.component.scss")],
            template: "\n    <div\n      class=\"dynamic-field form-input f aic\" \n      [formGroup]=\"group\">\n      <div class=\"radio-label\">{{ config.label }}</div>\n      <div style=\"flex:1;flex-wrap: wrap;\">\n        <label *ngFor=\"let item of config.options\" class=\"radioWrap f fdr aic\">\n          <input\n            type=\"radio\"\n            [value]=\"item.value\"\n            [attr.placeholder]=\"config.placeholder\"\n            [formControlName]=\"config.name\" >\n            <div class=\"radio sm\"></div>\n            {{ item.name }}\n        </label>\n      \n      </div>\n    </div>\n  "
        })
    ], FormRadioComponent);
    return FormRadioComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/form-select/form-select.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-select/form-select.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*select {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  text-indent: .01px;\r\n  text-overflow: '';\r\n  overflow: hidden;\r\n  font-family: inherit;\r\n  font-size: 14px;\r\n  // padding: 10px 15px;\r\n  padding-left: 10px;\r\n  height: 30px;\r\n  border-radius: 0;\r\n  color: rgba(0, 0, 0, 0.7);\r\n  border: 1px solid rgba(0, 0, 0, 0.1);\r\n  width: 100%;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  background:\r\n    linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.7) 50%)\r\n      no-repeat calc(100% - 20px) calc(1em + -1px),\r\n    linear-gradient(135deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%)\r\n      no-repeat calc(100% - 15px) calc(1em + -1px);\r\n  background-size: 5px 5px, 5px 5px;\r\n  &:focus {\r\n    border: 1px solid rgba(0, 0, 0, 0.4);\r\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);\r\n  }\r\n  background-color: white;\r\n}*/\nlabel {\n  min-width: 50px; }\ndiv {\n  margin-bottom: 5px; }\n"

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

/***/ "./src/app/dynamic-form2/components/form-title/form-title.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-title/form-title.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form2/components/form-title/form-title.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/form-title/form-title.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormTitleComponent", function() { return FormTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FormTitleComponent = /** @class */ (function () {
    function FormTitleComponent() {
    }
    FormTitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'form-title',
            styles: [__webpack_require__(/*! ./form-title.component.scss */ "./src/app/dynamic-form2/components/form-title/form-title.component.scss")],
            template: "\n    <div [ngStyle]=\"config.style\">\n      {{ config.label }}\n    </div>\n  "
        })
    ], FormTitleComponent);
    return FormTitleComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/image-category-item/image-category-item.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-category-item/image-category-item.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"img-space-item\" (click)=\"click\">\n <div class=\"left img-category-title relative\">\n    <div\n      [ngClass]=\"['folder-toggle-icon', 'absolute', 'pointer', data.picture_category_id == -1 ? 'top-toggle-icon' : '']\"\n      *ngIf=\"data.children.length > 0\"\n      (click)=\"toggleFolder()\"\n    >\n      {{ showChild ? '-' : '+' }}\n    </div><span\n      [title]=\"data.picture_category_id\"\n      (click)=\"selectCategory(data.picture_category_id, data.picture_category_name.trim())\"\n      [ngClass]=\"{pointer: true,'active-category': pictureCategoryId() == data.picture_category_id}\">{{data.picture_category_name.trim()}}</span>\n  </div>\n\n\n <div class=\"left img-category-children\" *ngIf=\"(data.children.length > 0) && showChild\">\n    <app-image-category-item *ngFor=\"let item of data.children\" [data]=\"item\">\n    </app-image-category-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-category-item/image-category-item.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-category-item/image-category-item.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-space-item {\n  padding-left: 10px;\n  margin-left: 10px;\n  position: relative; }\n\n.img-space-item:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: -11px;\n  width: 1px;\n  height: 100%;\n  background-color: #7D8699; }\n\n.img-category-title {\n  color: #7D8699;\n  font-size: 12px;\n  padding-left: 20px;\n  line-height: 2em;\n  white-space: nowrap; }\n\n.active-category {\n  color: red; }\n\n.img-category-title:before {\n  content: '';\n  width: 20px;\n  height: 1px;\n  background-color: #7D8699;\n  position: absolute;\n  left: -9px;\n  top: 12px; }\n\n.folder-toggle-icon {\n  width: 15px;\n  height: 15px;\n  border: 1px solid #7D8699;\n  line-height: 12px;\n  text-align: center;\n  left: -18px;\n  top: 6px;\n  background-color: white;\n  z-index: 1; }\n\n.top-toggle-icon:before {\n  content: '';\n  position: absolute;\n  left: 0;\n  top: -21px;\n  width: 100%;\n  height: 20px;\n  background-color: white; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-category-item/image-category-item.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-category-item/image-category-item.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ImageCategoryItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCategoryItemComponent", function() { return ImageCategoryItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image.service */ "./src/app/dynamic-form2/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageCategoryItemComponent = /** @class */ (function () {
    function ImageCategoryItemComponent(imageService) {
        this.imageService = imageService;
        this.showChild = true;
    }
    ImageCategoryItemComponent.prototype.ngOnInit = function () {
        // console.log('dddddddd', this.data);
    };
    ImageCategoryItemComponent.prototype.click = function () {
    };
    ImageCategoryItemComponent.prototype.pictureCategoryId = function () {
        return this.imageService.categoryId;
    };
    ImageCategoryItemComponent.prototype.toggleFolder = function () {
        this.showChild = !this.showChild;
    };
    ImageCategoryItemComponent.prototype.selectCategory = function (id, name) {
        // this.pictureCategoryId = id;
        this.imageService.fetchImage({ id: id, pageNo: 1 });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageCategoryItemComponent.prototype, "data", void 0);
    ImageCategoryItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-category-item',
            template: __webpack_require__(/*! ./image-category-item.component.html */ "./src/app/dynamic-form2/components/image-category-item/image-category-item.component.html"),
            styles: [__webpack_require__(/*! ./image-category-item.component.scss */ "./src/app/dynamic-form2/components/image-category-item/image-category-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], ImageCategoryItemComponent);
    return ImageCategoryItemComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div id=\"action-bar\">\n    <!--类型-->\n    <table>\n      <tr>\n        <td>\n          <!--类型-->\n          <div class=\"goods-type\" [matMenuTriggerFor]=\"typeMenu\">\n            <span>{{goodsService.goodsType}}</span>\n          </div>\n          <mat-menu #typeMenu=\"matMenu\" MenuPositionX=\"after\" xPosition=\"after\" (closed)=\"typeMenuClosed(e)\">\n            <button\n              mat-menu-item\n              *ngFor=\"let item of ['出售中', '仓库中']\"\n              (click)=\"selectType(item)\"\n            >{{item}}</button>\n          </mat-menu>\n        \n          <!--类目-->\n          <div class=\"goods-type\" [matMenuTriggerFor]=\"categoryMenu\" style=\"margin-left: 10px;\">\n              <span>{{goodsService.categoryName}}</span>\n            </div>\n            <mat-menu #categoryMenu=\"matMenu\" MenuPositionX=\"after\" xPosition=\"after\" (closed)=\"typeMenuClosed(e)\">\n              <button\n                mat-menu-item\n                *ngFor=\"let item of goodsService.goodsCategorys\"\n                (click)=\"selectCategory(item)\"\n              >{{ item.name }}</button>\n            </mat-menu>\n        </td>\n        <td style=\"float: right;margin-right: 10px;\">\n          <div class=\"goods-search-input\">\n            <input type=\"text\" placeholder=\"关键字 宝贝链接 商家编码\" [(ngModel)]=\"goodsService.searchValue\">\n            <button class=\"blue\" (click)=\"search()\">搜索</button>\n          </div>\n        </td>\n      </tr>\n    </table>\n  </div>\n  <div id=\"goods-contents\">\n    <ng-container *ngIf=\"goodsService.lastAction == 'success'\" >\n      <!--宝贝列表-->\n      <div class=\"image-dialog-goods-item\" *ngFor=\"let item of goodsService.goodsList\" style=\"width: 100%;\">\n        <table cellspacing=\"0\" cellpadding=\"0\" class=\"image-dialog-goods-table\">\n          <tr>\n            <td>\n              <img [src]=\"item.pic_url\" alt=\"\" style=\"\" >\n            </td>\n            <td>\n              <div>\n                <span class=\"goods-title\" (click)=\"openExternal(item.num_iid)\" [title]=\"item.num_iid\">\n                  {{item.title}}\n                </span>\n                \n              </div>\n            </td>\n            <td>\n              <div class=\"goods-price\">\n                  ¥{{ item.price }}\n              </div>\n              <!--\n              <div class=\"goods-num\">\n                {{ item.num }}\n              </div>\n              -->\n            </td>\n            <td>\n              <span class=\"goods-show-more\" (click)=\"showMore(item.num_iid)\">更多</span>\n            </td>\n          </tr>\n        </table>\n        <div>\n          <div *ngIf=\"goodsService.goodsMainPics['n' +item.num_iid ]\">\n            <!-- 加载成功 -->\n            <ng-container *ngIf=\"goodsService.goodsMainPics['n' +item.num_iid ].lastAction == 'success'\">\n              <div\n                *ngFor=\"let item of goodsService.goodsMainPics['n' +item.num_iid ].list\"\n                [ngClass]=\"{'goods-sub-img-block': true, 'active': item.url == goodsService.selectedGoods}\"\n                (click)=\"setGoods(item.url)\"\n              >\n                <img [src]=\"item.url\" alt=\"\">\n                <div class=\"checked-icon\">\n                  <span class=\"iconfont\">\n                      &#xe631;\n                  </span>\n                </div>\n              </div>\n            </ng-container>\n            <!-- 加载失败 -->\n            <ng-container *ngIf=\"goodsService.goodsMainPics['n' +item.num_iid ].lastAction == 'error'\">\n                <div style=\"width: 100px;height:100px;text-align: center;color: red;\">\n                  加载出错\n                </div>\n            </ng-container>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n    <content-notice\n    *ngIf=\"goodsService.lastAction != 'success' || goodsService.count == 0\"\n      [lastAction]=\"goodsService.lastAction\"\n      [count]=\"goodsService.count\"\n    ></content-notice>\n\n    <!--<img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    <img src=\"http://imgs.aixifan.com/content/2018_10_4/1.5386193577866096E9.png\" alt=\"\" style=\"width: 100px;height:100px;\">\n    -->\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  width: 1000px;\n  height: 60vh;\n  flex-direction: column;\n  align-items: stretch; }\n\n#action-bar table {\n  width: 100%; }\n\n#goods-contents {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  overflow: auto;\n  flex: 1; }\n\n.goods-type {\n  cursor: pointer;\n  -moz-appearance: none;\n  display: inline-block;\n  width: 8em;\n  text-indent: 0;\n  text-overflow: '';\n  overflow: hidden;\n  font-family: inherit;\n  font-size: 14px;\n  padding-left: 16px;\n  height: 30px;\n  line-height: 30px;\n  border-radius: 0;\n  color: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.1);\n  outline: none;\n  box-sizing: border-box;\n  background: linear-gradient(45deg, transparent 50%, rgba(0, 0, 0, 0.7) 50%) no-repeat calc(100% - 20px) calc(1em + -1px), linear-gradient(135deg, rgba(0, 0, 0, 0.7) 50%, transparent 50%) no-repeat calc(100% - 15px) calc(1em + -1px);\n  background-size: 5px 5px, 5px 5px;\n  background-color: white; }\n\n.mat-menu-item {\n  font-size: 14px;\n  height: 30px;\n  line-height: 30px; }\n\n.goods-search-input {\n  height: 30px;\n  display: flex;\n  flex-direction: row;\n  width: 300px; }\n\n.goods-search-input input {\n    height: 100%;\n    flex: 1; }\n\n.goods-search-input button {\n    height: 100%;\n    font-size: 14px;\n    padding: 0 20px;\n    border-radius: 0 2px 2px 0; }\n\n.image-dialog-goods-item {\n  border-top: 1px solid #aaaaaa; }\n\n.image-dialog-goods-item:last-child {\n  border-bottom: 1px solid #aaaaaa; }\n\n.image-dialog-goods-table {\n  table-layout: fixed;\n  width: 100%; }\n\n.image-dialog-goods-table img {\n    vertical-align: middle;\n    width: 100px;\n    height: 100px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    -o-object-position: center;\n       object-position: center; }\n\n.image-dialog-goods-table td {\n    padding: 8px;\n    text-align: left; }\n\n.image-dialog-goods-table td:first-child {\n    width: 130px; }\n\n.image-dialog-goods-table td:nth-child(3) {\n    width: 150px; }\n\n.image-dialog-goods-table td:nth-child(4) {\n    width: 50px; }\n\n.image-dialog-goods-table .goods-price {\n    color: #F40;\n    font-size: 16px; }\n\n.image-dialog-goods-table .goods-title {\n    cursor: pointer; }\n\n.image-dialog-goods-table .goods-title:hover {\n    cursor: pointer;\n    color: red; }\n\n.image-dialog-goods-table .goods-show-more {\n    color: #3498DB;\n    cursor: pointer; }\n\n.checked-icon {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-top: 16px solid transparent;\n  border-left: 16px solid transparent;\n  border-right: 16px solid #3498DB;\n  border-bottom: 16px solid #3498DB;\n  line-height: 13px;\n  text-indent: -2px; }\n\n.iconfont {\n  color: white;\n  font-size: 16px; }\n\n.goods-sub-img-block {\n  display: inline-block;\n  width: 100px;\n  height: 100px;\n  margin: 8px;\n  cursor: pointer;\n  border: 1px solid #aaaaaa;\n  position: relative; }\n\n.goods-sub-img-block img {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: contain;\n       object-fit: contain;\n    -o-object-position: center;\n       object-position: center; }\n\n.goods-sub-img-block .checked-icon {\n    display: none; }\n\n.goods-sub-img-block.active {\n  border: 1px solid #3498DB; }\n\n.goods-sub-img-block.active .checked-icon {\n    display: block; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: ImageDialogGoodsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDialogGoodsComponent", function() { return ImageDialogGoodsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _goods_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../goods.service */ "./src/app/dynamic-form2/goods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*
 * @Author: zhangzhenyang
 * @Date: 2018-11-22 09:46:39
 * @Last Modified by: zhangzhenyang
 * @Last Modified time: 2018-12-04 17:18:20
 */
// 选择图片 宝贝列表


var ImageDialogGoodsComponent = /** @class */ (function () {
    function ImageDialogGoodsComponent(goodsService) {
        this.goodsService = goodsService;
    }
    ImageDialogGoodsComponent.prototype.ngOnInit = function () {
        if (this.goodsService.goodsCategorys.length == 0) {
            this.goodsService.getSellerCats();
        }
        if (this.goodsService.goodsList.length == 0) {
            this.goodsService.fetchGoods({ pageNo: 1 });
        }
    };
    ImageDialogGoodsComponent.prototype.typeMenuClosed = function () {
    };
    // 选择宝贝类目
    ImageDialogGoodsComponent.prototype.selectCategory = function (item) {
        this.goodsService.categoryId = item.id;
        this.goodsService.categoryName = item.name;
        this.goodsService.fetchGoods({ pageNo: 1 });
    };
    // 选择类型
    ImageDialogGoodsComponent.prototype.selectType = function (item) {
        this.goodsService.goodsType = item;
        this.goodsService.fetchGoods({ pageNo: 1 });
    };
    // 搜索
    ImageDialogGoodsComponent.prototype.search = function () {
        this.goodsService.fetchGoods({ pageNo: 1 });
    };
    // 打开宝贝链接
    ImageDialogGoodsComponent.prototype.openExternal = function (num_iid) {
        window['shell'].openExternal("https://item.taobao.com/item.htm?id=" + num_iid);
    };
    // 显示更多宝贝图片
    ImageDialogGoodsComponent.prototype.showMore = function (num_iid) {
        this.goodsService.getItemInfo({ num_iid: num_iid });
    };
    // 选择图片  
    ImageDialogGoodsComponent.prototype.setGoods = function (pic_url) {
        this.goodsService.setSelectedGoods({ pic_url: pic_url });
    };
    ImageDialogGoodsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'image-dialog-goods',
            template: __webpack_require__(/*! ./image-dialog-goods.component.html */ "./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.html"),
            styles: [__webpack_require__(/*! ./image-dialog-goods.component.scss */ "./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.scss")]
        }),
        __metadata("design:paramtypes", [_goods_service__WEBPACK_IMPORTED_MODULE_1__["GoodsService"]])
    ], ImageDialogGoodsComponent);
    return ImageDialogGoodsComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/image-dialog/image-dialog.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-dialog/image-dialog.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table cellspacing=\"0\" cellpadding=\"0\" style=\"margin-bottom: 20px;\">\n  <tr>\n    <td>\n      <h2 mat-dialog-title style=\"margin: 0;\">选择图片</h2>\n    </td>\n    <td>\n      <tab-toggle [tabIndex]=\"imageService.tabIndex\" [list]=\"['图片空间', '宝贝图片']\" (setIndex)=\"setIndex($event)\"></tab-toggle>\n    </td>\n  </tr>\n</table>\n<mat-dialog-content>\n  <!--图片空间-->\n  <div id=\"img-dialog\"  *ngIf=\"imageService.tabIndex == 0\">\n    <div style=\"flex:3;overflow: auto;\">\n        <app-image-category-item *ngFor=\"let item of imageCategory()\" [data]=\"item\">\n\n        </app-image-category-item>\n    </div>\n    <div style=\"flex: 8;overflow: auto;\">\n      <content-notice [lastAction]=\"imageService.imagelastAction\" [count]=\"imageList().length\"></content-notice>\n      <div id=\"image-item-wrap\" *ngIf=\"imageService.imagelastAction == 'success'\">\n        <app-image-item *ngFor=\"let item of imageList()\" [data]=\"item\"></app-image-item>\n        <div class=\"image-space-image-item fake\"></div>\n        <div class=\"image-space-image-item fake\"></div>\n        <div class=\"image-space-image-item fake\"></div>\n        <div class=\"image-space-image-item fake\"></div>\n      </div>\n    </div>\n  </div>\n  <!-- 宝贝列表 -->\n  <image-dialog-goods *ngIf=\"imageService.tabIndex == 1\"></image-dialog-goods>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <table class=\"bottom-table\">\n    <tr>\n      <td>\n        <pagination-simple\n          *ngIf=\"imageService.tabIndex == 0\"\n          [pageNo]=\"imageService.imagePageNo\"\n          [hasNext]=\"imageService.hastNext\"\n          (gotopage)=\"goTo($event)\"\n        ></pagination-simple>\n        <div class=\"list\" \n          *ngIf=\"imageService.tabIndex == 1\"\n        >   \n            <!--{{ goodsService.pageSize }}-\n            {{ goodsService.pageNo }}-\n            {{ goodsService.count }}-->\n            <ul style=\"display: none;\">\n              <li *ngFor=\"let item of collection | paginate: { itemsPerPage: goodsService.pageSize, currentPage: goodsService.pageNo, totalItems: goodsService.count || 1 }\">{{ item }}</li>\n            </ul>\n            <pagination-controls\n              previousLabel=\"上一页\"\n              nextLabel=\"下一页\"\n              (pageChange)=\"goodsGoTo($event)\"\n            ></pagination-controls>\n        </div>\n      </td>\n      <td>\n        <button mat-button mat-dialog-close class=\"warn\">取消</button>\n        &nbsp;\n        <button mat-button (click)=\"confirm()\" class=\"blue\">确定</button>\n      </td>\n    </tr>\n  </table>\n\n</mat-dialog-actions>\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-dialog/image-dialog.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-dialog/image-dialog.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#img-dialog {\n  width: 1000px;\n  height: 60vh;\n  display: flex;\n  flex-direction: row;\n  justify-content: stretch; }\n\n:host {\n  background-color: red; }\n\n#image-item-wrap {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n\n.image-space-image-item.fake {\n  width: 120px;\n  height: 10px; }\n\n.mat-dialog-content {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  position: relative;\n  overflow: hidden;\n  padding-right: 0; }\n\n.bottom-table {\n  width: 100%; }\n\n.bottom-table td:last-child {\n    text-align: right; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-dialog/image-dialog.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-dialog/image-dialog.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ImageDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDialogComponent", function() { return ImageDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image.service */ "./src/app/dynamic-form2/image.service.ts");
/* harmony import */ var _goods_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../goods.service */ "./src/app/dynamic-form2/goods.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 图片选择



var ImageDialogComponent = /** @class */ (function () {
    function ImageDialogComponent(imageService, goodsService) {
        this.imageService = imageService;
        this.goodsService = goodsService;
        this.collection = [];
        for (var i = 1; i <= 100; i++) {
            this.collection.push("item " + i);
        }
    }
    ImageDialogComponent.prototype.ngOnInit = function () {
        if (this.imageService.imageList.length == 0) {
            this.imageService.fetchImage({ id: null, pageNo: 1 });
        }
        if (this.imageService.imageCategory.length == 0) {
            this.imageService.fetchImageSpaceCategory();
        }
    };
    ImageDialogComponent.prototype.imageCategory = function () {
        return this.imageService.imageCategory;
    };
    ImageDialogComponent.prototype.imageList = function () {
        return this.imageService.imageList;
    };
    // 跳页
    ImageDialogComponent.prototype.goTo = function (pageNo) {
        this.imageService.fetchImage({ id: null, pageNo: pageNo });
    };
    ImageDialogComponent.prototype.confirm = function () {
        if (this.imageService.tabIndex == 0) {
            this.imageService.imageCallback(this.imageService.selectedImage);
        }
        else {
            this.imageService.imageCallback(this.goodsService.selectedGoods);
        }
    };
    ImageDialogComponent.prototype.setIndex = function (index) {
        this.imageService.tabIndex = index;
    };
    ImageDialogComponent.prototype.goodsGoTo = function (pageNo) {
        this.goodsService.fetchGoods({ pageNo: pageNo });
    };
    ImageDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-dialog',
            template: __webpack_require__(/*! ./image-dialog.component.html */ "./src/app/dynamic-form2/components/image-dialog/image-dialog.component.html"),
            styles: [__webpack_require__(/*! ./image-dialog.component.scss */ "./src/app/dynamic-form2/components/image-dialog/image-dialog.component.scss")]
        }),
        __metadata("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"], _goods_service__WEBPACK_IMPORTED_MODULE_2__["GoodsService"]])
    ], ImageDialogComponent);
    return ImageDialogComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/image-item/image-item.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-item/image-item.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  class=\"image-space-image-item\"\n  [ngStyle]=\"{backgroundImage: 'url(' + data.imgUrl + ')'}\"\n  (click)=\"select(data.imgUrl)\"\n  [ngClass]=\"{'selected-image': data.imgUrl == imageService.selectedImage}\"\n>\n  <div class=\"checked-icon\" *ngIf=\"data.imgUrl == imageService.selectedImage\">\n    <span class=\"iconfont\">\n        &#xe631;\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-item/image-item.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-item/image-item.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-space-image-item {\n  width: 120px;\n  height: 120px;\n  background-color: #efefef;\n  border: 2px solid #eeeeee;\n  margin: 5px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  position: relative;\n  cursor: pointer; }\n\n.image-space-image-item.selected-image {\n  border: 2px solid #3498DB; }\n\n.checked-icon {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  width: 0;\n  height: 0;\n  border-top: 16px solid transparent;\n  border-left: 16px solid transparent;\n  border-right: 16px solid #3498DB;\n  border-bottom: 16px solid #3498DB;\n  line-height: 13px;\n  text-indent: -2px; }\n\n.iconfont {\n  color: white;\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/image-item/image-item.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/image-item/image-item.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ImageItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageItemComponent", function() { return ImageItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../image.service */ "./src/app/dynamic-form2/image.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageItemComponent = /** @class */ (function () {
    function ImageItemComponent(imageService) {
        this.imageService = imageService;
    }
    ImageItemComponent.prototype.ngOnInit = function () {
    };
    ImageItemComponent.prototype.select = function (img) {
        this.imageService.setSelectedImage(img);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ImageItemComponent.prototype, "data", void 0);
    ImageItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-item',
            template: __webpack_require__(/*! ./image-item.component.html */ "./src/app/dynamic-form2/components/image-item/image-item.component.html"),
            styles: [__webpack_require__(/*! ./image-item.component.scss */ "./src/app/dynamic-form2/components/image-item/image-item.component.scss")]
        }),
        __metadata("design:paramtypes", [_image_service__WEBPACK_IMPORTED_MODULE_1__["ImageService"]])
    ], ImageItemComponent);
    return ImageItemComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pagination-simple\">\n  <span class=\"prev\" (click)=\"goTo('prev')\" [ngStyle]=\"{cursor: pageNo == 1? 'not-allowed': 'pointer'}\">上一页</span><span>{{ pageNo }}</span><span class=\"next\" (click)=\"goTo('next')\" [ngStyle]=\"{cursor: hasNext ? 'pointer' : 'not-allowed'}\">下一页</span>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pagination-simple {\n  display: inline-block;\n  font-size: 14px; }\n  .pagination-simple > span {\n    display: inline-block;\n    border: 1px solid #cccccc;\n    line-height: 2em;\n    min-width: 30px;\n    text-align: center;\n    padding: 0 5px;\n    border-right: none; }\n  .pagination-simple > span:last-child {\n    border-right: 1px solid #cccccc; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: PaginationSimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationSimpleComponent", function() { return PaginationSimpleComponent; });
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

// import { EventEmitter } from 'events';
var PaginationSimpleComponent = /** @class */ (function () {
    function PaginationSimpleComponent() {
        this.gotopage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationSimpleComponent.prototype.ngOnInit = function () {
    };
    PaginationSimpleComponent.prototype.goTo = function (type) {
        var page = this.pageNo;
        if (type == 'prev') {
            if (this.pageNo == 1) {
                return;
            }
            page -= 1;
        }
        else {
            if (this.hasNext) {
                page += 1;
            }
            else {
                return;
            }
        }
        this.gotopage.emit(page);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationSimpleComponent.prototype, "pageNo", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PaginationSimpleComponent.prototype, "hasNext", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaginationSimpleComponent.prototype, "gotopage", void 0);
    PaginationSimpleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pagination-simple',
            template: __webpack_require__(/*! ./pagination-simple.component.html */ "./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.html"),
            styles: [__webpack_require__(/*! ./pagination-simple.component.scss */ "./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PaginationSimpleComponent);
    return PaginationSimpleComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"tab-toggle\">\n  <span \n    *ngFor=\"let item of list;let i = index;\" \n    [ngClass]=\"{active: tabIndex == i}\"\n    (click)=\"setActiveIndex(i)\"\n  >\n  {{item }}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-toggle {\n  border: 1px solid #3498DB;\n  border-radius: 3px;\n  margin: 0 10px; }\n  .tab-toggle span {\n    display: inline-block;\n    border-left: 1px solid #3498DB;\n    padding: 5px 8px;\n    color: #3498DB;\n    cursor: pointer; }\n  .tab-toggle span:first-child {\n    border-left: none; }\n  .tab-toggle span.active {\n    background-color: #3498DB;\n    color: white; }\n"

/***/ }),

/***/ "./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TabToggleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabToggleComponent", function() { return TabToggleComponent; });
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

var TabToggleComponent = /** @class */ (function () {
    function TabToggleComponent() {
        this.setIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TabToggleComponent.prototype.ngOnInit = function () {
    };
    TabToggleComponent.prototype.setActiveIndex = function (index) {
        this.setIndex.emit(index);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabToggleComponent.prototype, "tabIndex", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TabToggleComponent.prototype, "list", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TabToggleComponent.prototype, "setIndex", void 0);
    TabToggleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'tab-toggle',
            template: __webpack_require__(/*! ./tab-toggle.component.html */ "./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.html"),
            styles: [__webpack_require__(/*! ./tab-toggle.component.scss */ "./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TabToggleComponent);
    return TabToggleComponent;
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
            return true; /* type !== 'button'*/
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
/* harmony import */ var _components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form-checkbox/form-checkbox.component */ "./src/app/dynamic-form2/components/form-checkbox/form-checkbox.component.ts");
/* harmony import */ var _components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-radio/form-radio.component */ "./src/app/dynamic-form2/components/form-radio/form-radio.component.ts");
/* harmony import */ var _components_form_title_form_title_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form-title/form-title.component */ "./src/app/dynamic-form2/components/form-title/form-title.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/image-dialog/image-dialog.component */ "./src/app/dynamic-form2/components/image-dialog/image-dialog.component.ts");
/* harmony import */ var _components_author_dialog_author_dialog_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/author-dialog/author-dialog.component */ "./src/app/dynamic-form2/components/author-dialog/author-dialog.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _components_image_category_item_image_category_item_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/image-category-item/image-category-item.component */ "./src/app/dynamic-form2/components/image-category-item/image-category-item.component.ts");
/* harmony import */ var _components_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/image-item/image-item.component */ "./src/app/dynamic-form2/components/image-item/image-item.component.ts");
/* harmony import */ var _components_pagination_simple_pagination_simple_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/pagination-simple/pagination-simple.component */ "./src/app/dynamic-form2/components/pagination-simple/pagination-simple.component.ts");
/* harmony import */ var _components_content_notice_content_notice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/content-notice/content-notice.component */ "./src/app/dynamic-form2/components/content-notice/content-notice.component.ts");
/* harmony import */ var _components_checked_icon_checked_icon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/checked-icon/checked-icon.component */ "./src/app/dynamic-form2/components/checked-icon/checked-icon.component.ts");
/* harmony import */ var _components_image_dialog_goods_image_dialog_goods_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/image-dialog-goods/image-dialog-goods.component */ "./src/app/dynamic-form2/components/image-dialog-goods/image-dialog-goods.component.ts");
/* harmony import */ var _components_tab_toggle_tab_toggle_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/tab-toggle/tab-toggle.component */ "./src/app/dynamic-form2/components/tab-toggle/tab-toggle.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













// material 





// pagination











// import { AuthorCallbackService } from './author-callback.service';
var DynamicFormModule = /** @class */ (function () {
    function DynamicFormModule() {
    }
    DynamicFormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_14__["MatTabsModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_17__["NgxPaginationModule"],
            ],
            declarations: [
                _components_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_3__["DynamicFieldDirective"],
                _containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"],
                _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_5__["FormButtonComponent"],
                _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_6__["FormInputComponent"],
                _components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_7__["FormSelectComponent"],
                _components_form_image_form_image_component__WEBPACK_IMPORTED_MODULE_8__["FormImageComponent"],
                _components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["FormCheckboxComponent"],
                _components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_10__["FormRadioComponent"],
                _components_form_title_form_title_component__WEBPACK_IMPORTED_MODULE_11__["FormTitleComponent"],
                _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ImageDialogComponent"],
                _components_author_dialog_author_dialog_component__WEBPACK_IMPORTED_MODULE_19__["AuthorDialogComponent"],
                _components_image_category_item_image_category_item_component__WEBPACK_IMPORTED_MODULE_21__["ImageCategoryItemComponent"],
                _components_image_item_image_item_component__WEBPACK_IMPORTED_MODULE_22__["ImageItemComponent"],
                _components_pagination_simple_pagination_simple_component__WEBPACK_IMPORTED_MODULE_23__["PaginationSimpleComponent"],
                _components_content_notice_content_notice_component__WEBPACK_IMPORTED_MODULE_24__["ContentNoticeComponent"],
                _components_checked_icon_checked_icon_component__WEBPACK_IMPORTED_MODULE_25__["CheckedIconComponent"],
                _components_image_dialog_goods_image_dialog_goods_component__WEBPACK_IMPORTED_MODULE_26__["ImageDialogGoodsComponent"],
                _components_tab_toggle_tab_toggle_component__WEBPACK_IMPORTED_MODULE_27__["TabToggleComponent"],
            ],
            exports: [
                _containers_dynamic_form_dynamic_form_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormComponent"],
                _components_content_notice_content_notice_component__WEBPACK_IMPORTED_MODULE_24__["ContentNoticeComponent"],
                _components_author_dialog_author_dialog_component__WEBPACK_IMPORTED_MODULE_19__["AuthorDialogComponent"],
            ],
            entryComponents: [
                _components_form_button_form_button_component__WEBPACK_IMPORTED_MODULE_5__["FormButtonComponent"],
                _components_form_input_form_input_component__WEBPACK_IMPORTED_MODULE_6__["FormInputComponent"],
                _components_form_select_form_select_component__WEBPACK_IMPORTED_MODULE_7__["FormSelectComponent"],
                _components_form_image_form_image_component__WEBPACK_IMPORTED_MODULE_8__["FormImageComponent"],
                _components_form_checkbox_form_checkbox_component__WEBPACK_IMPORTED_MODULE_9__["FormCheckboxComponent"],
                _components_form_radio_form_radio_component__WEBPACK_IMPORTED_MODULE_10__["FormRadioComponent"],
                _components_form_title_form_title_component__WEBPACK_IMPORTED_MODULE_11__["FormTitleComponent"],
                _components_image_dialog_image_dialog_component__WEBPACK_IMPORTED_MODULE_18__["ImageDialogComponent"],
                _components_author_dialog_author_dialog_component__WEBPACK_IMPORTED_MODULE_19__["AuthorDialogComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], DynamicFormModule);
    return DynamicFormModule;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/form.service.ts":
/*!***********************************************!*\
  !*** ./src/app/dynamic-form2/form.service.ts ***!
  \***********************************************/
/*! exports provided: FormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormService", function() { return FormService; });
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

var FormService = /** @class */ (function () {
    function FormService() {
    }
    FormService.prototype.showImageDialog = function () {
        alert('ddd');
    };
    FormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FormService);
    return FormService;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/goods.service.ts":
/*!************************************************!*\
  !*** ./src/app/dynamic-form2/goods.service.ts ***!
  \************************************************/
/*! exports provided: GoodsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoodsService", function() { return GoodsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ "./src/app/dynamic-form2/api.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author.service */ "./src/app/dynamic-form2/author.service.ts");
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





var GoodsService = /** @class */ (function () {
    function GoodsService(dialog, snackBar, http, authorService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.authorService = authorService;
        this.goodsType = '出售中';
        this.searchValue = '';
        this.goodsCategorys = [];
        this.selectedGoods = '';
        this.goodsList = [];
        this.count = 0;
        this.lastAction = 'loading';
        this.pageNo = 1;
        this.pageSize = 10;
        this.categoryId = 'all';
        this.categoryName = '全部分类';
        // 宝贝主图
        this.goodsMainPics = {};
    }
    // 宝贝
    // 获取宝贝类目
    GoodsService.prototype.getSellerCats = function () {
        var _this = this;
        this.http.post(_api_js__WEBPACK_IMPORTED_MODULE_3__["default"].getSellerCats, {}).subscribe(function (res) {
            console.log(res);
            if (res['data']) {
                _this.goodsCategorys = res['data'].map(function (item, index) {
                    item.name = item.name.replace('&nbsp;', ' ');
                    return item;
                });
            }
            else {
                _this.snackBar.open('获取宝贝类目失败', 'ok', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                });
            }
        }, function (err) {
            _this.snackBar.open('获取宝贝类目失败(net)', 'ok', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
            // alert('获取宝贝类目失败（net）');
            _this.authorService.checkAuthor(err, function () {
                _this.getSellerCats;
            });
        });
    };
    // 获取宝贝列表
    GoodsService.prototype.fetchGoods = function (_a) {
        var _this = this;
        var _b = _a.pageNo, pageNo = _b === void 0 ? 1 : _b;
        this.lastAction = 'loading';
        var req = {
            pageNo: pageNo || this.pageNo,
            pageSize: this.pageSize,
            type: this.goodsType == '出售中' ? 'onsale' : 'instock',
            keyword: this.searchValue,
            cid: this.categoryId,
            fields: '',
        };
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        for (var i in req) {
            params = params.set(i, req[i]);
        }
        // let headers=new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' })
        var apiUrl = _api_js__WEBPACK_IMPORTED_MODULE_3__["default"].getItems;
        this.http.post(apiUrl, params).subscribe(function (res) {
            if (res['items']) {
                _this.goodsList = res['items'].map(function (item, index) {
                    return {
                        title: item.title,
                        pic_url: item.picUrl,
                        price: item.price,
                        prev_price: item.price,
                        num_iid: item.numIid,
                        num: item.num,
                    };
                });
                _this.count = res['totalCount'];
                _this.pageNo = req.pageNo;
                _this.lastAction = 'success';
                _this.selectedGoods = '';
            }
            else {
                // alert('获取宝贝列表出错');
                _this.snackBar.open('获取宝贝列表出错', 'ok', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                });
                _this.lastAction = 'error';
                _this.authorService.checkAuthor(res, function () {
                    _this.fetchGoods({ pageNo: pageNo });
                });
            }
        }, function (res) {
            _this.snackBar.open('获取宝贝列表出错', 'ok', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
            // alert('获取宝贝列表出错');
            _this.lastAction = 'error';
            _this.authorService.checkAuthor(res, function () {
                _this.fetchGoods({ pageNo: pageNo });
            });
        });
    };
    // 获取宝贝详情
    GoodsService.prototype.getItemInfo = function (_a) {
        var _this = this;
        var num_iid = _a.num_iid;
        if (!num_iid) {
            return;
        }
        var goodsMainPicsData = this.goodsMainPics["n" + num_iid];
        if (!goodsMainPicsData || (goodsMainPicsData && goodsMainPicsData.lastAction == 'error')) {
            this.goodsMainPics["n" + num_iid] = goodsMainPicsData || { lastAction: 'loading' };
            if (this.goodsMainPics["n" + num_iid].msg == '没有权限获取该商品信息') {
                return;
            }
            var req = {
                numIid: num_iid,
                fields: 'pic_url,item_img,product_id',
            };
            this.goodsMainPics["n" + num_iid].lastAction = 'loading';
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
            for (var i in req) {
                params = params.set(i, req[i]);
            }
            this.http.post(_api_js__WEBPACK_IMPORTED_MODULE_3__["default"].getItemInfo, params).subscribe(function (res) {
                console.log(res);
                if (res['success']) {
                    _this.goodsMainPics["n" + num_iid] = __assign({}, _this.goodsMainPics["n" + num_iid], { lastAction: 'success', list: res['item'].itemImgs });
                }
                else {
                    _this.goodsMainPics["n" + num_iid].lastAction = 'error';
                    _this.goodsMainPics["n" + num_iid].msg = res['msg'];
                }
            }, function (res) {
                _this.snackBar.open('获取宝贝列表出错', 'ok', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                });
                // alert('获取宝贝列表出错');
                _this.lastAction = 'error';
                _this.authorService.checkAuthor(res, function () {
                    _this.getItemInfo({ num_iid: num_iid });
                });
            });
            /* http.post(api.getItemInfo, req).then((res)=>{
              if(res.status == 200) {
                // console.log(res.data);
                if(res.data.success) {
                  state.goodsMainPics[`n${num_iid}`] = {...state.goodsMainPics[`n${num_iid}`], lastAction: 'success', list: res.data.item.itemImgs}
                } else {
                  state.goodsMainPics[`n${num_iid}`].lastAction = 'error';
                  state.goodsMainPics[`n${num_iid}`].msg = res.data.msg;
                }
                
              } else {
                state.goodsMainPics[`n${num_iid}`].lastAction = 'error';
              }
              Vue.set(state, 'goodsMainPics', {...state.goodsMainPics});
            })*/
        }
    };
    GoodsService.prototype.setSelectedGoods = function (_a) {
        var pic_url = _a.pic_url;
        this.selectedGoods = pic_url;
    };
    GoodsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _author_service__WEBPACK_IMPORTED_MODULE_4__["AuthorService"]])
    ], GoodsService);
    return GoodsService;
}());



/***/ }),

/***/ "./src/app/dynamic-form2/image.service.ts":
/*!************************************************!*\
  !*** ./src/app/dynamic-form2/image.service.ts ***!
  \************************************************/
/*! exports provided: ImageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageService", function() { return ImageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.js */ "./src/app/dynamic-form2/api.js");
/* harmony import */ var _author_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./author.service */ "./src/app/dynamic-form2/author.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageService = /** @class */ (function () {
    function ImageService(dialog, snackBar, http, authorService) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.authorService = authorService;
        // 选项卡索引
        this.tabIndex = 0;
        // 当前的类目id
        this.categoryId = -1;
        this.imageCategory = []; // 图片空间类目
        this.imageList = [];
        this.imagePageNo = 1;
        this.imagePageSize = 50;
        this.imagelastAction = 'loading';
        this.hastNext = true; // 是否有下一页
        this.selectedImage = '';
        this.imageCallback = function (e) { };
    }
    ImageService.prototype.openAuthorDialog = function () {
        // this.fetchImageSpaceCategory();
    };
    // 获取图片空间类目
    ImageService.prototype.fetchImageSpaceCategory = function () {
        var _this = this;
        this.http.get(_api_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPictureCategory, {}).subscribe(function (e) {
            console.log(e);
            if (e['success']) {
                var categoryList = e['data'];
                var top_1 = categoryList.filter(function (item) {
                    return item.picture_category_id == -1;
                });
                var parentList = [];
                categoryList.forEach(function (item) {
                    if (item.parent_id == 0 && item.picture_category_id != -1) {
                        parentList.push(item);
                    }
                });
                _this.imageCategoryGetChild(categoryList, parentList);
                var result = parentList;
                if (top_1 && top_1[0]) {
                    top_1[0].children = parentList;
                    result = top_1;
                }
                _this.imageCategory = result;
                console.log(result);
            }
            else {
                // alert('获取图片空间类目失败');
                _this.snackBar.open('获取图片空间类目失败', 'ok', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                });
            }
        }, function (err) {
            // alert('获取图片空间类目失败(net)');
            _this.snackBar.open('获取图片空间类目失败', 'ok', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
            _this.authorService.checkAuthor(err, function () {
                _this.fetchImageSpaceCategory();
            });
            // 打开授权窗口
            // this.dialog.open(AuthorDialogComponent);
        });
    };
    ImageService.prototype.imageCategoryGetChild = function (categoryList, list) {
        var _this = this;
        list.forEach(function (item) {
            var id = item.picture_category_id;
            var childList = [];
            categoryList.forEach(function (i) {
                if (i.parent_id == id) {
                    childList.push(i);
                }
            });
            if (childList.length > 0) {
                _this.imageCategoryGetChild(categoryList, childList);
            }
            item.children = childList;
        });
    };
    // 获取图片空间图片
    ImageService.prototype.fetchImage = function (_a) {
        var _this = this;
        var id = _a.id, _b = _a.pageNo, pageNo = _b === void 0 ? 1 : _b;
        console.log([id, pageNo]);
        if (id) {
            this.categoryId = id;
        }
        var req = {
            categroyId: this.categoryId,
            pageSize: this.imagePageSize,
            currentPage: pageNo,
        };
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('categoryId', req.categroyId.toString()).set('pageSize', req.pageSize.toString()).set('currentPage', req.currentPage.toString());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        this.imagelastAction = 'loading';
        this.http.post(_api_js__WEBPACK_IMPORTED_MODULE_3__["default"].getPictureItems, req, { headers: headers, params: params }).subscribe(function (res) {
            if (res['success']) {
                _this.imageList = res['data'];
                _this.hastNext = res['hastNext'];
                _this.imagePageNo = req.currentPage;
                _this.selectedImage = '';
                _this.imagelastAction = 'success';
            }
            else {
                // alert('获取图片失败');
                _this.snackBar.open('获取图片失败', 'ok', {
                    duration: 2000,
                    horizontalPosition: 'center',
                    verticalPosition: 'bottom',
                });
                _this.imagelastAction = 'error';
            }
        }, function (err) {
            _this.snackBar.open('获取图片失败', 'ok', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'bottom',
            });
            // alert('获取图片失败（net）');
            _this.imagelastAction = 'error';
            _this.authorService.checkAuthor(err, function () {
                _this.fetchImage({ id: id, pageNo: pageNo });
            });
        });
    };
    // 选择图片
    ImageService.prototype.setSelectedImage = function (selectedImage) {
        this.selectedImage = selectedImage;
    };
    // 设置选择图片时的回调函数
    ImageService.prototype.setImageCallback = function (callback) {
        this.imageCallback = callback;
    };
    ImageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _author_service__WEBPACK_IMPORTED_MODULE_4__["AuthorService"]])
    ], ImageService);
    return ImageService;
}());

// "Http failure during parsing for https://oauth.taobao.com/authorize?response_type=code&client_id=12020783&redirect_uri=https://2015.wonbao.net/authorize/web&scope=promotion,item,usergrade&view=web&state=%2Fgoods%2Fmanage%2Fpicture%2FgetPictureCategory"


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
        this.initShortcut();
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
    CanvasService.prototype.initShortcut = function () {
        document.addEventListener('keydown', function (e) {
            console.log(e);
            var code = e.which;
            switch (code) {
                // space
                /*case 32:
                  if(this.paused) {
                    this.play();
                  } else {
                    this.pause();
                  }
                break;*/
                default:
                    break;
            }
        });
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
        }, true);
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
        this.typeMap = {
            audio: {
                title: '请选择音乐',
                name: '音乐',
                extensions: ['mp3', 'wav'],
            },
            video: {
                title: '请选择视频',
                name: '视频',
                extensions: ['mp4', 'mov'],
            },
        };
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
    DialogService.prototype.getSaveFile = function (callback, onlyMp4) {
        var videoDir = localStorage.getItem('videoDir') || '';
        // alert(videoDir);
        window['remote'].dialog.showSaveDialog(window['remote'].getCurrentWindow(), {
            title: '保存视频',
            defaultPath: videoDir,
            filters: onlyMp4 ? [
                { name: 'mp4', extensions: ['mp4'] }
            ] : [
                { name: 'mp4', extensions: ['mp4'] },
                { name: 'mov', extensions: ['mov'] },
                { name: 'avi', extensions: ['avi'] },
                { name: '3gp', extensions: ['3gp'] },
                { name: 'wmv', extensions: ['wmv'] },
                { name: 'wav', extensions: ['wav'] },
                { name: 'flv', extensions: ['flv'] },
                { name: 'mpg', extensions: ['mpg'] },
                { name: 'webm', extensions: ['webm'] },
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
        var Dir = localStorage.getItem(type + "Dir") || '';
        // alert(audioDir);
        window['remote'].dialog.showOpenDialog(window['remote'].getCurrentWindow(), {
            title: this.typeMap[type].title,
            defaultPath: Dir,
            properties: ['openFile'],
            filters: [
                { name: this.typeMap[type].name, extensions: this.typeMap[type].extensions },
            ]
        }, function (filePaths) {
            // this.getCurrentDirFiles(filePaths[0],result);
            if (!filePaths) {
                return;
            }
            callback(filePaths);
            if (Array.isArray(filePaths) && typeof filePaths[0] == 'string') {
                var dirName = _this.path.dirname(filePaths[0]);
                localStorage.setItem(type + "Dir", dirName);
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
        this.currentDir = window['dirname'];
        this.current = '';
        this.duration = '';
        this.pid = '';
        this.exec = window['exec'];
        this.path = window['path'];
    }
    FfmpegService.prototype.generateMp4 = function (_a, callback) {
        // alert('generateMp4');
        // console.log(__dirname);
        var _this = this;
        var distPath = _a.distPath, audioPath = _a.audioPath, imgPrefix = _a.imgPrefix, savePath = _a.savePath, duration = _a.duration, fps = _a.fps, time = _a.time, width = _a.width, height = _a.height, quality = _a.quality;
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
        this.exec(commandStr, { cwd: this.currentDir }, function (err, data, data1) {
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
    // 转换格式
    FfmpegService.prototype.transform = function (_a) {
        var _this = this;
        var name = _a.name, dist = _a.dist, quality = _a.quality;
        this.current = '';
        this.duration = '';
        this.current = '';
        this.pid = '';
        // 视频质量 1 - 51;越小越清晰
        var qual = (100 - quality) / 100 * 51;
        if (qual > 51) {
            qual = 51;
        }
        if (qual <= 1) {
            qual = 1;
        }
        // 视频质量
        var crf = " -crf " + qual + " "; // ' -crf 51 ';
        var commandStr = "\"./ffmpeg/bin/ffmpeg.exe\" -y -i \"" + name + "\" " + crf + " \"" + dist + "\"";
        // const commandStr = '"./ffmpeg/bin/ffmpeg.exe" -i "C:/Users/Administrator/Desktop/mp4/需要.mp4" "C:/Users/Administrator/Desktop/mp4/需要.mov"';   
        console.log(commandStr);
        var command = this.exec(commandStr, { cwd: this.currentDir, killSignal: 'SIGTERM', }, function (err, data, data1) {
            if (err) {
                console.error(err);
                return;
            }
            alert('转换完成');
            _this.dialog.closeAll();
            console.log(data);
        });
        command.stdout.on('data', function (res) {
            console.log(res);
        });
        command.stderr.on('data', function (res) {
            if (!_this.pid) {
                _this.pid = command.pid;
            }
            console.error(res);
            if (res.startsWith('Input')) {
                var matches = (/Duration:(.*?),/mig.exec(res));
                if (Array.isArray(matches) && matches[1]) {
                    _this.duration = matches[1];
                }
            }
            if (res.startsWith('frame')) {
                console.log(res);
                var matches = /time=(.*?)\s/mig.exec(res);
                if (Array.isArray(matches) && matches[1]) {
                    _this.current = matches[1];
                }
            }
            console.log([_this.duration, _this.current]);
        });
        /* setTimeout(()=>{
          console.log('k----------------------------------------------------------------------------');
          console.log(command);
          const pid = command.pid;
          console.log(pid);
          this.exec(`taskkill  /f /t /pid ${pid}`, (err, stdout, stderr)=>{
            if(err) {
              console.log(err);
              return;
            }
            console.log(stdout);
          })
        }, 10000)*/
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