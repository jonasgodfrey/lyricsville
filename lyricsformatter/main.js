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

module.exports = "@font-face {\n  font-family: Pacifico;\n  src: url('Pacifico-Regular.ttf');\n}\n\n.imageContainer {\n  background-color: #000000;\n  margin-bottom: 20px;\n  border: 2px solid #c8a250;\n  border-radius: 4px;\n}\n\n#app_name {\n  font-family: 'Pacifico', cursive;\n  color: #000000;\n  font-size: 34px;\n  text-shadow: 4px 4px 4px #ecf0f5;\n}\n\n.customContainer {\n  background-color: #c39a46;\n  border-radius: 4px;\n  margin: 6%;\n}\n\n.blockquote-footer {\n  font-size: 60%;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"customContainer\">\n    <p class=\"text-center\" id=\"app_name\">Lyrics Formatter</p>\n    <div class=\"row imageContainer\">\n      <img\n        id=\"image\"\n        src=\"https://glaabuja.org/wp-content/uploads/2023/01/gla80x80.png\"\n        class=\"img-fluid \"\n        alt=\"GLA \"\n      />\n    </div>\n    <app-form></app-form>\n  </div>\n\n  <div class=\"container h-100 parent\">\n    <div class=\"row h-100 justify-content-center align-items-center \">\n      <img class=\"companyLogo\" id=\"image\" src=\"./assets/logo.png\" />\n    </div>\n  </div>\n  <blockquote class=\"blockquote text-center\">\n    <footer class=\"blockquote-footer\">\n      &copy; 2023 GLA. All Right Reserved<cite title=\"Source Title\">\n        | tel:  | email: </cite\n      >\n      <Br />\n      <cite title=\"Source Title\">Lyrics Formatter v1.2</cite>\n      <!--<p>{{ date | date: 'h:mm:ss a' }}</p>-->\n    </footer>\n  </blockquote>\n</div>\n"

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
        this.title = 'lyrics-formatter';
        this.date = null;
    }
    AppComponent.prototype.ngOnInit = function () {
        //  this.displayCurrentTime();
    };
    AppComponent.prototype.displayCurrentTime = function () {
        var _this = this;
        this.date = new Date();
        setInterval(function () {
            _this.displayCurrentTime();
        }, 1000);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared */ "./src/app/shared/index.ts");
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
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _form_form_component__WEBPACK_IMPORTED_MODULE_6__["FormComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_4__["AngularFontAwesomeModule"],
                _shared__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/form/form.component.css":
/*!*****************************************!*\
  !*** ./src/app/form/form.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".process_button {\n  margin-left: 14px;\n  margin-bottom: 12px;\n}\n\n.block_casing {\n  margin-top: 14px;\n}\n\n.customFooter {\n  margin-top: 62px;\n  background-color: #000000;\n  font-size: 11px;\n}\n\n#processButton {\n  border-color: #bd9540;\n  background-color: #000000;\n}\n\n.config-form {\n  margin: 3%;\n}\n"

/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"config-form\">\n  <div class=\"form-group row\">\n    <div class=\"col-sm-2 \"></div>\n    <label for=\"lineSpacingCount\" class=\"col-sm-2 col-form-label\"\n      >Line spacing</label\n    >\n    <div class=\"col-sm-5\">\n      <select\n        [(ngModel)]=\"breakLinesCount\"\n        class=\"form-control\"\n        id=\"lineSpacingCount\"\n        [ngModelOptions]=\"{ standalone: true }\"\n      >\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n      <span id=\"selectHelpBlock\" class=\"form-text text-muted\"\n        >Indicates spacing (line breaks) between paragraphs.</span\n      >\n    </div>\n  </div>\n  <div class=\"form-group row\">\n    <div class=\"col-sm-2 \"></div>\n    <label for=\"paragraphCounts\" class=\"col-sm-2 col-form-label\"\n      >Number of sentences per paragraph</label\n    >\n    <div class=\"col-sm-5\">\n      <select\n        [(ngModel)]=\"sentencesPerParagraph\"\n        class=\"form-control\"\n        id=\"paragraphCounts\"\n        [ngModelOptions]=\"{ standalone: true }\"\n      >\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n      </select>\n      <span id=\"selectHelpBlock\" class=\"form-text text-muted\"\n        >Indicates the number of sentences in a paragraph.</span\n      >\n    </div>\n  </div>\n\n  <div class=\"form-group row\">\n    <div class=\"col-sm-2 \"></div>\n    <div class=\"col-sm-2\">Convert to block letters</div>\n    <div class=\"col-sm-5\">\n      <div class=\"form-check\">\n        <input\n          [(ngModel)]=\"convertToUpperCase\"\n          class=\"form-check-input\"\n          type=\"checkbox\"\n          id=\"gridCheck1\"\n          [ngModelOptions]=\"{ standalone: true }\"\n        />\n      </div>\n      <span id=\"radio1HelpBlock\" class=\"form-text text-muted block_casing\"\n        >converts all letters to UPPERCASE.</span\n      >\n    </div>\n  </div>\n  <div class=\"form-group row \">\n    <div class=\"col-sm-2\"></div>\n    <button\n      id=\"processButton\"\n      type=\"button\"\n      (click)=\"openDialog()\"\n      class=\"btn btn-primary process_button\"\n    >\n      Upload Text\n    </button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/dialog.service */ "./src/app/services/dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = /** @class */ (function () {
    function FormComponent(dialogService) {
        this.dialogService = dialogService;
        this.file = null;
        this.breakLinesCount = 1;
        this.sentencesPerParagraph = 1;
        this.convertToUpperCase = false;
    }
    FormComponent.prototype.ngOnInit = function () { };
    FormComponent.prototype.openDialog = function () {
        this.config = {
            convertToBlockLetters: this.convertToUpperCase,
            lineBreaks: this.breakLinesCount,
            sentenceBlocks: this.sentencesPerParagraph,
        };
        this.dialogService.openDialog(this.config);
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.css */ "./src/app/form/form.component.css")],
        }),
        __metadata("design:paramtypes", [_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__["DialogService"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTreeModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["ScrollingModule"],
            ],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/dialog.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/dialog.service.ts ***!
  \********************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/dialog/dialog.view.component */ "./src/app/shared/dialog/dialog.view.component.ts");
/* harmony import */ var _text_formatter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text.formatter.service */ "./src/app/services/text.formatter.service.ts");
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
    function DialogService(dialog, textFormatService) {
        this.dialog = dialog;
        this.textFormatService = textFormatService;
        this.dialogRef = null;
    }
    DialogService.prototype.openDialog = function (config) {
        this.dialogRef = this.dialog.open(_shared_dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_2__["DialogViewComponent"], {
            height: '615px',
            width: '600px',
            panelClass: 'custom-modal-box',
            position: { top: '5%' },
            disableClose: true,
            // passing data into the Dialog component
            data: config,
        });
        return this.dialogRef;
    };
    DialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _text_formatter_service__WEBPACK_IMPORTED_MODULE_3__["TextFormatterService"]])
    ], DialogService);
    return DialogService;
}());



/***/ }),

/***/ "./src/app/services/snack-bar.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/snack-bar.service.ts ***!
  \***********************************************/
/*! exports provided: SnackBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarService", function() { return SnackBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SnackBarService = /** @class */ (function () {
    function SnackBarService(snackBar) {
        this.snackBar = snackBar;
    }
    SnackBarService.prototype.openSnackBar = function (message, messageTag) {
        if (messageTag === void 0) { messageTag = ''; }
        this.snackBar.open(message, messageTag, {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            panelClass: 'snack-bar',
        });
    };
    SnackBarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], SnackBarService);
    return SnackBarService;
}());



/***/ }),

/***/ "./src/app/services/text.formatter.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/text.formatter.service.ts ***!
  \****************************************************/
/*! exports provided: TextFormatterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatterService", function() { return TextFormatterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TextFormatterService = /** @class */ (function () {
    function TextFormatterService() {
    }
    TextFormatterService.prototype.formatText = function (text, useBlockLetters, numberOfBreakLines, sentencesPerParagraph) {
        if (sentencesPerParagraph === void 0) { sentencesPerParagraph = 1; }
        var formattedText = '';
        var fileContent = text;
        var breakLines = this.configureBreakLines(numberOfBreakLines);
        if (useBlockLetters) {
            fileContent = lodash__WEBPACK_IMPORTED_MODULE_1__["toUpper"](text);
        }
        // https://stackoverflow.com/questions/9401312/how-to-replace-curly-quotation-marks-in-a-string-using-javascript
        // right single quote gets corrupted while parsing and later returned as unknown unicode after reading text file.
        // replaced suspected characters before processing file content to resolve the issue.
        // tslint:disable-next-line:quotemark
        fileContent = fileContent
            // tslint:disable-next-line:quotemark
            .replace(/[\u2018\u2019]/g, "'")
            .replace(/[\u201C\u201D]/g, '"')
            .replace(/[\u2013\u2014]/g, '-')
            .replace(/[\u2026]/g, '...');
        var arrayOfParagraphs = lodash__WEBPACK_IMPORTED_MODULE_1__["split"](fileContent, '\n');
        var filteredArrayOfParagraphs = lodash__WEBPACK_IMPORTED_MODULE_1__["filter"](arrayOfParagraphs, function (val) {
            return val.length > 1;
        });
        filteredArrayOfParagraphs.forEach(function (paragraph, index) {
            if (index && index % sentencesPerParagraph === 0) {
                formattedText += breakLines + paragraph + '\n';
            }
            else {
                formattedText += paragraph + '\n';
            }
            formattedText.trim();
        });
        return formattedText;
    };
    TextFormatterService.prototype.configureBreakLines = function (count) {
        var newLines = '';
        for (var i = 0; i < count; i++) {
            newLines += '\n';
        }
        return newLines;
    };
    TextFormatterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], TextFormatterService);
    return TextFormatterService;
}());



/***/ }),

/***/ "./src/app/shared/dialog/dialog.view.component.css":
/*!*********************************************************!*\
  !*** ./src/app/shared/dialog/dialog.view.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/dialog/dialog.view.component.html":
/*!**********************************************************!*\
  !*** ./src/app/shared/dialog/dialog.view.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-dialog-close class=\"custom-close-button\">\n  <mat-icon>close</mat-icon>\n</button>\n<h1 mat-dialog-title>Lyrics Formatter</h1>\n\n<div mat-dialog-content>\n  <mat-form-field>\n    <textarea\n      style=\"height: 498px;\"\n      rows=\"20\"\n      matInput\n      class=\"custom-text-area\"\n      #textArea\n      [(ngModel)]=\"textContent\"\n    ></textarea>\n    <mat-placeholder class=\"placeholder\">Insert text here...</mat-placeholder>\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button *ngIf=\"textContent\" (click)=\"clearWindowContent()\">\n    Clear\n  </button>\n  <button mat-button (click)=\"processFile('Format completed.')\">\n    Format Text\n  </button>\n  <button\n    mat-button\n    *ngIf=\"isFileProcessed\"\n    (click)=\"copyToClipBoard(textArea)\"\n  >\n    Copy Text\n  </button>\n</div>\n<!--[mat-dialog-close]=\"textContent\" ng generate component --spec=false component-name cdkFocusInitial-->\n"

/***/ }),

/***/ "./src/app/shared/dialog/dialog.view.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/dialog/dialog.view.component.ts ***!
  \********************************************************/
/*! exports provided: DialogViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogViewComponent", function() { return DialogViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_text_formatter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/text.formatter.service */ "./src/app/services/text.formatter.service.ts");
/* harmony import */ var src_app_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/snack-bar.service */ "./src/app/services/snack-bar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DialogViewComponent = /** @class */ (function () {
    function DialogViewComponent(snackBar, textFormatService, data) {
        this.snackBar = snackBar;
        this.textFormatService = textFormatService;
        this.data = data;
        this.isFileProcessed = false;
    }
    DialogViewComponent.prototype.clearWindowContent = function () {
        this.textContent = '';
        this.isFileProcessed = false;
    };
    DialogViewComponent.prototype.processFile = function (message) {
        if (this.textContent == null || this.textContent.trim().length === 0) {
            this.snackBar.openSnackBar('Please insert text in the window above...');
            this.textContent = '';
            return;
        }
        var formattedText = this.textFormatService.formatText(this.textContent, this.data.convertToBlockLetters, this.data.lineBreaks, this.data.sentenceBlocks);
        this.isFileProcessed = true;
        this.textContent = formattedText;
        this.snackBar.openSnackBar(message);
    };
    DialogViewComponent.prototype.copyToClipBoard = function (textArea) {
        textArea.select();
        document.execCommand('copy');
        textArea.setSelectionRange(0, 0);
        this.snackBar.openSnackBar('Text copied to clipboard.');
    };
    DialogViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog.view',
            template: __webpack_require__(/*! ./dialog.view.component.html */ "./src/app/shared/dialog/dialog.view.component.html"),
            styles: [__webpack_require__(/*! ./dialog.view.component.css */ "./src/app/shared/dialog/dialog.view.component.css")],
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [src_app_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_3__["SnackBarService"],
            _services_text_formatter_service__WEBPACK_IMPORTED_MODULE_2__["TextFormatterService"], Object])
    ], DialogViewComponent);
    return DialogViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: DialogViewComponent, SnackBarComponent, SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dialog/dialog.view.component */ "./src/app/shared/dialog/dialog.view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DialogViewComponent", function() { return _dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_0__["DialogViewComponent"]; });

/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/shared/snack-bar/snack-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_1__["SnackBarComponent"]; });

/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]; });



// should always be the last import



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dialog/dialog.view.component */ "./src/app/shared/dialog/dialog.view.component.ts");
/* harmony import */ var _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./snack-bar/snack-bar.component */ "./src/app/shared/snack-bar/snack-bar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"]],
            declarations: [_dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_5__["DialogViewComponent"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["SnackBarComponent"]],
            exports: [_dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_5__["DialogViewComponent"]],
            entryComponents: [_dialog_dialog_view_component__WEBPACK_IMPORTED_MODULE_5__["DialogViewComponent"], _snack_bar_snack_bar_component__WEBPACK_IMPORTED_MODULE_6__["SnackBarComponent"]],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.component.css":
/*!**********************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".snack-bar-alert {\n  font-family: inherit;\n}\n"

/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"snack-bar-alert\"> {{ message }} </span>\n"

/***/ }),

/***/ "./src/app/shared/snack-bar/snack-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/snack-bar/snack-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: SnackBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackBarComponent", function() { return SnackBarComponent; });
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

var SnackBarComponent = /** @class */ (function () {
    function SnackBarComponent() {
        this.message = '';
    }
    SnackBarComponent.prototype.ngOnInit = function () { };
    SnackBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snack-bar',
            template: __webpack_require__(/*! ./snack-bar.component.html */ "./src/app/shared/snack-bar/snack-bar.component.html"),
            styles: [__webpack_require__(/*! ./snack-bar.component.css */ "./src/app/shared/snack-bar/snack-bar.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], SnackBarComponent);
    return SnackBarComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /tmp/build_03a1a2af/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map