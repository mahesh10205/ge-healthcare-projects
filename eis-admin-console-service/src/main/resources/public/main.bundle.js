webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/CanActivateViaAuthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CanActivateViaAuthGuard = /** @class */ (function () {
    function CanActivateViaAuthGuard(iframeService) {
        this.iframeService = iframeService;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function () {
        return this.iframeService.userInfo ? true : false;
    };
    CanActivateViaAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_iframe_service__["a" /* IFrameService */]])
    ], CanActivateViaAuthGuard);
    return CanActivateViaAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/admin-console/admin-console.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-shell-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.dashboard-shell-is-mobile .dashboard-shell-toolbar {\r\n  position: fixed;\r\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n  z-index: 2;\r\n}\r\n\r\nspan.dashboard-shell-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n.dashboard-shell-sidenav-container {\r\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1;\r\n          flex: 1;\r\n}\r\n\r\n.dashboard-shell-is-mobile .dashboard-shell-sidenav-container {\r\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n     `<body>` to be our scrolling element for mobile layouts. */\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 0 auto;\r\n          flex: 1 0 auto;\r\n}\r\n\r\n.blue-line{  \r\n  text-decoration: underline;\r\n  -webkit-text-decoration-color: rgb(0,0,255);\r\n          text-decoration-color: rgb(0,0,255);\r\n}\r\n\r\n.spacer {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n\r\n.logout{\r\n  font-size: 14px;\r\n  padding: 10px;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.user{\r\n  font-size: 14px;\r\n  padding: 10px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin-console/admin-console.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard-shell-container\" [class.dashboard-shell-is-mobile]=\"mobileQuery.matches\">\n  <mat-toolbar color=\"primary\" class=\"dashboard-shell-toolbar\">\n\n    <mat-toolbar-row>\n      <img src=\"/assets/images/ge-logo.png\" style=\"height: 50px;\">\n      <button mat-icon-button>\n        <mat-icon (click)=\"snav.toggle()\">menu</mat-icon>\n      </button>\n\n      <span class=\"dashboard-shell-app-name\">Admin Console</span>\n      <span class=\"spacer\"></span>\n\n      <span>\n        <span class=\"user\">Welcome {{loggedInUser}} </span>\n        <a [routerLink]=\"['/logout','logout']\" class=\"logout\">Logout</a>\n      </span>\n\n    </mat-toolbar-row>\n\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"dashboard-shell-sidenav-container\" [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\">\n\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\">\n\n      <mat-selection-list>\n        <mat-list-option [selected]=\"nav.selected\" [checkboxPosition]=\"before\" *ngFor=\"let nav of dashboardShellMenu\" [id]=\"nav.id\"\n          (selectionChange)=\"selectionChange($event,nav.id)\" (focusChange)=\"selectionChange($event,nav.id)\">\n          <span [className]=\"nav.id==selectedTabInfo.id? 'blue-line' : '' \">{{nav.label}}</span>\n        </mat-list-option>\n      </mat-selection-list>\n\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n\n      <mat-tab-group class=\"dashboard-shell-tab-group\" [selectedIndex]=\"selectedTabInfo.pos\" (selectedTabChange)=\"onSelectedTabChange($event)\">\n\n        <ng-container *ngFor=\"let tabInfo of showTabsList\">\n          <mat-tab [label]=\"tabInfo.label\" [id]=\"tabInfo.id\">\n\n            <ng-template [ngTemplateOutlet]=\"tabInfo.content\"></ng-template>\n\n          </mat-tab>\n        </ng-container>\n\n      </mat-tab-group>\n\n      <ng-template #eisAccountManager>\n        <eis-account-manager ></eis-account-manager>\n      </ng-template>\n\n      <ng-template #eisConfigManager>\n        <eis-config-manager ></eis-config-manager>\n      </ng-template>\n\n      <ng-template #eisDeviceManager>\n        <eis-device-manager ></eis-device-manager>\n      </ng-template>\n\n      <ng-template #eisDiagnostics>\n        <eis-diagnostics ></eis-diagnostics>\n      </ng-template>\n\n      <ng-template #eisServicesSwManager>\n        <eis-services-sw-manager ></eis-services-sw-manager>\n      </ng-template>\n\n      <ng-template #remoteUiFrontend>\n        <remote-ui-front-end ></remote-ui-front-end>\n      </ng-template>\n\n    </mat-sidenav-content>\n\n  </mat-sidenav-container>\n</div>"

/***/ }),

/***/ "../../../../../src/app/admin-console/admin-console.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminConsoleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__ = __webpack_require__("../../../cdk/esm5/layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_menu_info__ = __webpack_require__("../../../../../src/app/model/menu-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_tab_info__ = __webpack_require__("../../../../../src/app/model/tab-info.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_Constants__ = __webpack_require__("../../../../../src/app/model/Constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminConsoleComponent = /** @class */ (function () {
    function AdminConsoleComponent(changeDetectorRef, media, iframeService) {
        this.iframeService = iframeService;
        this.dashboardShellMenu = [];
        this.tabsInfoList = [];
        this.tabsInfoMap = new Map();
        this.urlInfos = new Map();
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = function () { return changeDetectorRef.detectChanges(); };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    AdminConsoleComponent.prototype.ngOnInit = function () {
        this.loggedInUser = this.iframeService.userInfo ? this.iframeService.userInfo.user : "";
        this.createList();
        this.createTabInfo();
    };
    AdminConsoleComponent.prototype.createList = function () {
        this.dashboardShellMenu.push(new __WEBPACK_IMPORTED_MODULE_2__model_menu_info__["a" /* MenuInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DIAGNOSTICS_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DIAGNOSTICS_LABEL));
        this.dashboardShellMenu.push(new __WEBPACK_IMPORTED_MODULE_2__model_menu_info__["a" /* MenuInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DEVICE_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DEVICE_MANAGER_LABEL));
        this.dashboardShellMenu.push(new __WEBPACK_IMPORTED_MODULE_2__model_menu_info__["a" /* MenuInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].REMOTE_UI_FRONT_END_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].REMOTE_UI_FRONT_END_LABEL));
        this.dashboardShellMenu.push(new __WEBPACK_IMPORTED_MODULE_2__model_menu_info__["a" /* MenuInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_SERVICES_SW_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_SERVICES_SW_MANAGER_LABEL));
        this.dashboardShellMenu.push(new __WEBPACK_IMPORTED_MODULE_2__model_menu_info__["a" /* MenuInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_CONFIG_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_CONFIG_MANAGER_LABEL));
        this.dashboardShellMenu.push(new __WEBPACK_IMPORTED_MODULE_2__model_menu_info__["a" /* MenuInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_ACCOUNT_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_ACCOUNT_MANAGER_LABEL));
        this.dashboardShellMenu.sort(function (a, b) { return a.label.localeCompare(b.label); });
        this.dashboardShellMenu[0].selected = true;
        this.dashboardShellMenu.forEach(function (val, inx) {
            val.pos = inx;
        });
    };
    AdminConsoleComponent.prototype.createTabInfo = function () {
        this.tabsInfoList.push(new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DIAGNOSTICS_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DIAGNOSTICS_LABEL, this.vcrEisDiagnostics));
        this.tabsInfoList.push(new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DEVICE_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_DEVICE_MANAGER_LABEL, this.vcrEisDeviceManager));
        this.tabsInfoList.push(new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].REMOTE_UI_FRONT_END_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].REMOTE_UI_FRONT_END_LABEL, this.vcrRemoteUiFrontend));
        this.tabsInfoList.push(new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_SERVICES_SW_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_SERVICES_SW_MANAGER_LABEL, this.vcrEisServicesSwManager));
        this.tabsInfoList.push(new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_CONFIG_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_CONFIG_MANAGER_LABEL, this.vcrEisConfigManager));
        this.tabsInfoList.push(new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](__WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_ACCOUNT_MANAGER_ID, __WEBPACK_IMPORTED_MODULE_4__model_Constants__["a" /* Constants */].EIS_ACCOUNT_MANAGER_LABEL, this.vcrEisAccountManager));
        this.tabsInfoList.sort(function (a, b) { return a.label.localeCompare(b.label); });
        this.tabsInfoList[0].show = true;
        this.updateTabInfoMap();
        this.updateShowTabList();
        this.selectedTabInfo = new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](this.tabsInfoList[0].id, this.tabsInfoList[0].label, this.tabsInfoList[0].content);
        this.selectedTabInfo.pos = 0;
    };
    AdminConsoleComponent.prototype.updateTabInfoMap = function () {
        var _this = this;
        this.tabsInfoList.forEach(function (val, inx) {
            _this.tabsInfoMap.set(val.id, val);
        });
    };
    AdminConsoleComponent.prototype.updateShowTabList = function () {
        var _this = this;
        this.showTabsList = [];
        this.tabsInfoMap.forEach(function (val, key) {
            if (val.show == true) {
                _this.showTabsList.push(val);
            }
        });
    };
    AdminConsoleComponent.prototype.ngOnDestroy = function () {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    };
    AdminConsoleComponent.prototype.selectionChange = function (val, id) {
        var tabInfo = this.tabsInfoMap.get(id);
        if (tabInfo) {
            tabInfo.show = val.selected;
            this.updateShowTabList();
            if (tabInfo.show) {
                this.selectedTabInfo = new __WEBPACK_IMPORTED_MODULE_3__model_tab_info__["a" /* TabInfo */](tabInfo.id, tabInfo.label, tabInfo.content);
                this.selectedTabInfo.pos = this.getShowTabPosForId(id);
            }
        }
    };
    AdminConsoleComponent.prototype.getShowTabPosForId = function (id) {
        var inx = 0;
        for (var _i = 0, _a = this.showTabsList; _i < _a.length; _i++) {
            var tabInfo = _a[_i];
            if (tabInfo.id == id) {
                break;
            }
            inx++;
        }
        return inx;
    };
    AdminConsoleComponent.prototype.getShowTabForPos = function (pos) {
        var inx = 0;
        for (var _i = 0, _a = this.showTabsList; _i < _a.length; _i++) {
            var tabInfo = _a[_i];
            if (inx == pos) {
                return tabInfo;
            }
            inx++;
        }
    };
    AdminConsoleComponent.prototype.onSelectedTabChange = function (data) {
        var tabInfo = this.getShowTabForPos(data.index);
        this.selectedTabInfo = tabInfo;
        this.selectedTabInfo.pos = this.getShowTabPosForId(tabInfo.id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('eisAccountManager'),
        __metadata("design:type", Object)
    ], AdminConsoleComponent.prototype, "vcrEisAccountManager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('eisConfigManager'),
        __metadata("design:type", Object)
    ], AdminConsoleComponent.prototype, "vcrEisConfigManager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('eisDeviceManager'),
        __metadata("design:type", Object)
    ], AdminConsoleComponent.prototype, "vcrEisDeviceManager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('eisDiagnostics'),
        __metadata("design:type", Object)
    ], AdminConsoleComponent.prototype, "vcrEisDiagnostics", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('eisServicesSwManager'),
        __metadata("design:type", Object)
    ], AdminConsoleComponent.prototype, "vcrEisServicesSwManager", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* ViewChild */])('remoteUiFrontend'),
        __metadata("design:type", Object)
    ], AdminConsoleComponent.prototype, "vcrRemoteUiFrontend", void 0);
    AdminConsoleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'admin-console',
            template: __webpack_require__("../../../../../src/app/admin-console/admin-console.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin-console/admin-console.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */], __WEBPACK_IMPORTED_MODULE_1__angular_cdk_layout__["d" /* MediaMatcher */], __WEBPACK_IMPORTED_MODULE_5__service_iframe_service__["a" /* IFrameService */]])
    ], AdminConsoleComponent);
    return AdminConsoleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dashboard-shell-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .dashboard-shell-is-mobile .dashboard-shell-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.dashboard-shell-app-name {\r\n    margin-left: 8px;\r\n  }\r\n  \r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(iframeService) {
        this.iframeService = iframeService;
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_iframe_service__["a" /* IFrameService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_eis_diagnostics_eis_diagnostics_component__ = __webpack_require__("../../../../../src/app/tabs/eis-diagnostics/eis-diagnostics.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tabs_eis_device_manager_eis_device_manager_component__ = __webpack_require__("../../../../../src/app/tabs/eis-device-manager/eis-device-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dashboard_material_module__ = __webpack_require__("../../../../../src/app/dashboard-material-module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tabs_remote_ui_front_end_remote_ui_front_end_component__ = __webpack_require__("../../../../../src/app/tabs/remote-ui-front-end/remote-ui-front-end.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_eis_services_sw_manager_eis_services_sw_manager_component__ = __webpack_require__("../../../../../src/app/tabs/eis-services-sw-manager/eis-services-sw-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabs_eis_config_manager_eis_config_manager_component__ = __webpack_require__("../../../../../src/app/tabs/eis-config-manager/eis-config-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tabs_eis_account_manager_eis_account_manager_component__ = __webpack_require__("../../../../../src/app/tabs/eis-account-manager/eis-account-manager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__admin_console_admin_console_component__ = __webpack_require__("../../../../../src/app/admin-console/admin-console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__CanActivateViaAuthGuard__ = __webpack_require__("../../../../../src/app/CanActivateViaAuthGuard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__dashboard_material_module__["a" /* DashboardMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_routes__["a" /* routes */])
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_8__tabs_eis_diagnostics_eis_diagnostics_component__["a" /* EisDiagnosticsComponent */], __WEBPACK_IMPORTED_MODULE_9__tabs_eis_device_manager_eis_device_manager_component__["a" /* EisDeviceManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_11__tabs_remote_ui_front_end_remote_ui_front_end_component__["a" /* RemoteUiFrontEndComponent */], __WEBPACK_IMPORTED_MODULE_12__tabs_eis_services_sw_manager_eis_services_sw_manager_component__["a" /* EisServicesSwManagerComponent */], __WEBPACK_IMPORTED_MODULE_13__tabs_eis_config_manager_eis_config_manager_component__["a" /* EisConfigManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_14__tabs_eis_account_manager_eis_account_manager_component__["a" /* EisAccountManagerComponent */], __WEBPACK_IMPORTED_MODULE_15__admin_console_admin_console_component__["a" /* AdminConsoleComponent */], __WEBPACK_IMPORTED_MODULE_18__safe_pipe__["a" /* SafePipe */], __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_17__service_iframe_service__["a" /* IFrameService */], __WEBPACK_IMPORTED_MODULE_19__CanActivateViaAuthGuard__["a" /* CanActivateViaAuthGuard */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_console_admin_console_component__ = __webpack_require__("../../../../../src/app/admin-console/admin-console.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CanActivateViaAuthGuard__ = __webpack_require__("../../../../../src/app/CanActivateViaAuthGuard.ts");



var routes = [
    {
        path: 'adminConsole', component: __WEBPACK_IMPORTED_MODULE_1__admin_console_admin_console_component__["a" /* AdminConsoleComponent */],
        canActivate: [
            __WEBPACK_IMPORTED_MODULE_2__CanActivateViaAuthGuard__["a" /* CanActivateViaAuthGuard */]
        ]
    },
    { path: 'logout/:action', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] }
];


/***/ }),

/***/ "../../../../../src/app/dashboard-material-module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardMaterialModule = /** @class */ (function () {
    function DashboardMaterialModule() {
    }
    DashboardMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
            ],
        })
    ], DashboardMaterialModule);
    return DashboardMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-container {\r\n    margin: 10px 150px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;    \r\n    width: 400px;\r\n}\r\n\r\nh1.dashboard-shell-app-name {\r\n  margin-left: 8px;\r\n}\r\n\r\n/* .login-container > * {\r\n    width: 100%;\r\n  } */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"dashboard-shell-toolbar\">\n  <h1 class=\"dashboard-shell-app-name\">Admin Console</h1>\n</mat-toolbar>\n\n<form class=\"example-form\">\n\n  <div class=\"login-container\">\n    <mat-form-field>\n      <input matInput [(ngModel)]=\"userId\" placeholder=\"User Id\" [formControl]=\"userIdControl\" required>\n      <mat-error *ngIf=\"userIdControl.invalid\">{{getUserIdErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n    <mat-form-field>\n      <input matInput type=\"password\" [(ngModel)]=\"pwd\" placeholder=\"Password\" [formControl]=\"pwdControl\" required>\n      <mat-error *ngIf=\"pwdControl.invalid\">{{getPwdErrorMessage()}}</mat-error>\n    </mat-form-field>\n\n    <button mat-button (click)=\"submit()\">Submit</button>\n    <mat-error *ngIf=\"msg\">{{msg}}</mat-error>\n\n\n\n  </div>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, iframeService, activatedRoute) {
        this.router = router;
        this.iframeService = iframeService;
        this.activatedRoute = activatedRoute;
        this.userIdControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
        this.pwdControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* Validators */].required]);
    }
    LoginComponent.prototype.getUserIdErrorMessage = function () {
        return this.userIdControl.hasError('required') ? 'You must enter a value' :
            '';
    };
    LoginComponent.prototype.getPwdErrorMessage = function () {
        return this.pwdControl.hasError('required') ? 'You must enter a value' :
            '';
    };
    LoginComponent.prototype.isErrorsExist = function () {
        return this.userIdControl.invalid || this.pwdControl.invalid;
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.params.subscribe(function (params) {
            console.log("params =" + params);
            if (params['action'] === "logout") {
                _this.iframeService.userInfo = undefined;
                _this.logout();
            }
            // In a real app: dispatch action to load the details here.
        });
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.msg = "";
        if (this.isErrorsExist() == false) {
            console.log("userid = " + this.userId);
            this.iframeService.loginUsingForm(this.userId, this.pwd).subscribe(function (resp) {
                if (resp.ok) {
                    _this.postLogin(_this.userId);
                }
                else {
                    _this.msg = "Aunthentication Failed";
                }
            }, function (err) {
                localStorage.setItem("user", "");
                console.log("err = " + err);
                _this.msg = "Aunthentication Failed";
            });
        }
    };
    LoginComponent.prototype.postLogin = function (userId) {
        this.loadUrlInfo();
    };
    LoginComponent.prototype.loadUserInfo = function () {
        var _this = this;
        this.iframeService.getUserInfo().subscribe(function (data) {
            _this.iframeService.userInfo = data;
            _this.router.navigate(['/adminConsole']);
        }, function (err) {
            _this.iframeService.userInfo = undefined;
            console.log("err = " + err);
            _this.msg = "Aunthentication Failed";
        });
    };
    LoginComponent.prototype.loadUrlInfo = function () {
        var _this = this;
        this.iframeService.getUrlInfos().subscribe(function (urlDataList) {
            if (urlDataList) {
                var urlInfoMap = new Map();
                for (var _i = 0, urlDataList_1 = urlDataList; _i < urlDataList_1.length; _i++) {
                    var urlData = urlDataList_1[_i];
                    urlInfoMap.set(urlData.id, urlData.url);
                }
                _this.iframeService.urlInfoMap = urlInfoMap;
                _this.loadUserInfo();
            }
            else {
                _this.msg = "Aunthentication Failed";
            }
        }, function (err) {
            _this.iframeService.userInfo = undefined;
            console.log("err = " + err);
            _this.msg = "Aunthentication Failed";
        });
    };
    LoginComponent.prototype.logout = function () {
        this.iframeService.logout().subscribe(function (resp) {
            console.log("logout " + resp);
        }, function (err) {
            console.log("logout " + err);
            localStorage.setItem("user", "");
            console.log("err = " + err);
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__service_iframe_service__["a" /* IFrameService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/Constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "EIS_DEVICE_MANAGER_ID", {
        get: function () { return "eis-device-manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_DIAGNOSTICS_ID", {
        get: function () { return "eis-diagnostics"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "REMOTE_UI_FRONT_END_ID", {
        get: function () { return "remote-ui-front-end"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_SERVICES_SW_MANAGER_ID", {
        get: function () { return "eis-services-sw-manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_CONFIG_MANAGER_ID", {
        get: function () { return "eis-config-manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_ACCOUNT_MANAGER_ID", {
        get: function () { return "eis-account-manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_DEVICE_MANAGER_LABEL", {
        get: function () { return "EIS Device Manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_DIAGNOSTICS_LABEL", {
        get: function () { return "EIS Diagnostics"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "REMOTE_UI_FRONT_END_LABEL", {
        get: function () { return "Remote Ui Front-End"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_SERVICES_SW_MANAGER_LABEL", {
        get: function () { return "EIS Services/SW Manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_CONFIG_MANAGER_LABEL", {
        get: function () { return "EIS Config Manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Constants, "EIS_ACCOUNT_MANAGER_LABEL", {
        get: function () { return "EIS Account Manager"; },
        enumerable: true,
        configurable: true
    });
    ;
    return Constants;
}());



/***/ }),

/***/ "../../../../../src/app/model/menu-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuInfo; });
var MenuInfo = /** @class */ (function () {
    function MenuInfo(id, label) {
        this.id = id;
        this.label = label;
    }
    return MenuInfo;
}());



/***/ }),

/***/ "../../../../../src/app/model/tab-info.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabInfo; });
var TabInfo = /** @class */ (function () {
    function TabInfo(id, label, content) {
        this.show = false;
        this.id = id;
        this.label = label;
        this.content = content;
    }
    return TabInfo;
}());



/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        // return this.sanitizer.bypassSecurityTrustHtml(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());



/***/ }),

/***/ "../../../../../src/app/service/iframe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IFrameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var IFrameService = /** @class */ (function () {
    function IFrameService(http) {
        this.http = http;
    }
    IFrameService.prototype.getFrameContet = function (url) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        return this.http
            .get(url, {
            "headers": headers,
            responseType: __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* ResponseContentType */].Blob,
        })
            .map(function (response) { return response.blob(); });
        // .subscribe(html => myVal = html);
    };
    IFrameService.prototype.getUrlInfos = function () {
        return this.http.get("/dashboardShell/urlInfos").map(function (resp) { return resp.json(); });
    };
    IFrameService.prototype.getUserName = function () {
        return this.http.get("/username").map(function (resp) { return resp ? resp.json() : null; });
    };
    IFrameService.prototype.loginUsingForm = function (user, pwd) {
        var headersObj = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headersObj.append("Content-Type", "application/x-www-form-urlencoded");
        var credentials = "username=" + user + "&" + "password=" + pwd;
        return this.http.post("/login", credentials, { headers: headersObj }).map(function (resp) {
            return resp;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    IFrameService.prototype.getUserInfo = function () {
        return this.http.get("/userInfo").map(function (resp) {
            return resp.json();
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    IFrameService.prototype.logout = function () {
        return this.http.post("/logout", "").map(function (resp) {
            return resp;
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error'); });
    };
    IFrameService.prototype.isAnyRoleExist = function (roles) {
        debugger;
        if (this.userInfo.roles) {
            for (var _i = 0, roles_1 = roles; _i < roles_1.length; _i++) {
                var role = roles_1[_i];
                if (this.userInfo.roles.indexOf(role) > -1) {
                    return true;
                }
            }
        }
        else {
            return false;
        }
    };
    IFrameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], IFrameService);
    return IFrameService;
}());



/***/ }),

/***/ "../../../../../src/app/tabs/eis-account-manager/eis-account-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iframe-continer{\r\n    width: 100%;\r\n    height: 450px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/eis-account-manager/eis-account-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n  <mat-accordion multi=\"true\">\n\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          DicomDataListing\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <iframe class=\"iframe-continer\" frameborder=\"0\" [src]=\"urlInfoMap.get('dicomDataListingUrl')| safe\"> </iframe>\n    </mat-expansion-panel>\n\n\n  </mat-accordion>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/tabs/eis-account-manager/eis-account-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EisAccountManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EisAccountManagerComponent = /** @class */ (function () {
    function EisAccountManagerComponent(iframeService) {
        this.iframeService = iframeService;
    }
    EisAccountManagerComponent.prototype.ngOnInit = function () {
        this.urlInfoMap = this.iframeService.urlInfoMap;
    };
    EisAccountManagerComponent.prototype.ngOnDestroy = function () {
    };
    EisAccountManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'eis-account-manager',
            template: __webpack_require__("../../../../../src/app/tabs/eis-account-manager/eis-account-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/eis-account-manager/eis-account-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_iframe_service__["a" /* IFrameService */]])
    ], EisAccountManagerComponent);
    return EisAccountManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tabs/eis-config-manager/eis-config-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/eis-config-manager/eis-config-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  eis-config-manager works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tabs/eis-config-manager/eis-config-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EisConfigManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EisConfigManagerComponent = /** @class */ (function () {
    function EisConfigManagerComponent(iframeService) {
        this.iframeService = iframeService;
    }
    EisConfigManagerComponent.prototype.ngOnInit = function () {
        this.urlInfoMap = this.iframeService.urlInfoMap;
    };
    EisConfigManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'eis-config-manager',
            template: __webpack_require__("../../../../../src/app/tabs/eis-config-manager/eis-config-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/eis-config-manager/eis-config-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_iframe_service__["a" /* IFrameService */]])
    ], EisConfigManagerComponent);
    return EisConfigManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tabs/eis-device-manager/eis-device-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iframe-continer{\r\n    width: 100%;\r\n    height: 450px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/eis-device-manager/eis-device-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n  <mat-accordion multi=\"true\">\n\n\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          DeviceRegistry\n        </mat-panel-title>\n        <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\"></mat-expansion-panel>\n      </mat-expansion-panel-header>\n\n      <iframe class=\"iframe-continer\" frameborder=\"0\" [src]=\"urlInfoMap.get('deviceRegistryUrl')| safe\"> </iframe>\n\n\n\n    </mat-expansion-panel>\n\n\n\n  </mat-accordion>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tabs/eis-device-manager/eis-device-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EisDeviceManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EisDeviceManagerComponent = /** @class */ (function () {
    function EisDeviceManagerComponent(iframeService) {
        this.iframeService = iframeService;
    }
    EisDeviceManagerComponent.prototype.ngOnInit = function () {
        this.urlInfoMap = this.iframeService.urlInfoMap;
    };
    EisDeviceManagerComponent.prototype.ngOnDestroy = function () {
    };
    EisDeviceManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'eis-device-manager',
            template: __webpack_require__("../../../../../src/app/tabs/eis-device-manager/eis-device-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/eis-device-manager/eis-device-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_iframe_service__["a" /* IFrameService */]])
    ], EisDeviceManagerComponent);
    return EisDeviceManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tabs/eis-diagnostics/eis-diagnostics.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iframe-continer{\r\n    width: 100%;\r\n    height: 450px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/eis-diagnostics/eis-diagnostics.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n  <mat-accordion multi=\"true\">\n\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Titanium\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n\n      <button mat-raised-button (click)=\"openTitaniumDashboard()\">Open</button>\n\n    </mat-expansion-panel>\n\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          K8S\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <iframe class=\"iframe-continer\" frameborder=\"0\" [src]=\"urlInfoMap.get('k8sUrl')| safe\"> </iframe>\n    </mat-expansion-panel>\n\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Telemetry\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <iframe class=\"iframe-continer\" frameborder=\"0\" [src]=\"urlInfoMap.get('telemeteryUrl')| safe\"> </iframe>\n\n    </mat-expansion-panel>\n\n  </mat-accordion>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tabs/eis-diagnostics/eis-diagnostics.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EisDiagnosticsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EisDiagnosticsComponent = /** @class */ (function () {
    function EisDiagnosticsComponent(iframeService, sanitizer) {
        this.iframeService = iframeService;
        this.sanitizer = sanitizer;
        this.k8sUrl = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].k8sUrl;
    }
    EisDiagnosticsComponent.prototype.ngOnInit = function () {
        this.urlInfoMap = this.iframeService.urlInfoMap;
    };
    EisDiagnosticsComponent.prototype.openTitaniumDashboard = function () {
        window.open(this.urlInfoMap.get('titaniumUrl'));
    };
    EisDiagnosticsComponent.prototype.ngOnDestroy = function () {
    };
    EisDiagnosticsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'eis-diagnostics',
            template: __webpack_require__("../../../../../src/app/tabs/eis-diagnostics/eis-diagnostics.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/eis-diagnostics/eis-diagnostics.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_iframe_service__["a" /* IFrameService */], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], EisDiagnosticsComponent);
    return EisDiagnosticsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tabs/eis-services-sw-manager/eis-services-sw-manager.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".iframe-continer{\r\n    width: 100%;\r\n    height: 450px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/eis-services-sw-manager/eis-services-sw-manager.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding: 10px\">\n  <mat-accordion multi=\"true\">\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Grafana\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <iframe class=\"iframe-continer\" frameborder=\"0\" [src]=\"urlInfoMap.get('grafanaUrl')| safe\"> </iframe>\n\n    </mat-expansion-panel>\n\n\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Kibana\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n      <iframe class=\"iframe-continer\" frameborder=\"0\" [src]=\"urlInfoMap.get('kibanaUrl')| safe\"> </iframe>\n\n\n\n    </mat-expansion-panel>\n\n\n    <mat-expansion-panel style=\"margin: 10px\" *ngIf=\"iframeService.isAnyRoleExist(['admin','_member_'])\">\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Prometheus\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n\n\n      <iframe class=\"iframe-continer\" frameborder=\"0\" [src]=\"urlInfoMap.get('prometheusUrl')| safe\"> </iframe>\n    </mat-expansion-panel>\n\n\n\n  </mat-accordion>\n</div>"

/***/ }),

/***/ "../../../../../src/app/tabs/eis-services-sw-manager/eis-services-sw-manager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EisServicesSwManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EisServicesSwManagerComponent = /** @class */ (function () {
    function EisServicesSwManagerComponent(iframeService) {
        this.iframeService = iframeService;
    }
    EisServicesSwManagerComponent.prototype.ngOnInit = function () {
        this.urlInfoMap = this.iframeService.urlInfoMap;
    };
    EisServicesSwManagerComponent.prototype.ngOnDestroy = function () {
    };
    EisServicesSwManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'eis-services-sw-manager',
            template: __webpack_require__("../../../../../src/app/tabs/eis-services-sw-manager/eis-services-sw-manager.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/eis-services-sw-manager/eis-services-sw-manager.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_iframe_service__["a" /* IFrameService */]])
    ], EisServicesSwManagerComponent);
    return EisServicesSwManagerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/tabs/remote-ui-front-end/remote-ui-front-end.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tabs/remote-ui-front-end/remote-ui-front-end.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  remote-ui-front-end works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/tabs/remote-ui-front-end/remote-ui-front-end.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteUiFrontEndComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_iframe_service__ = __webpack_require__("../../../../../src/app/service/iframe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoteUiFrontEndComponent = /** @class */ (function () {
    function RemoteUiFrontEndComponent(iframeService) {
        this.iframeService = iframeService;
    }
    RemoteUiFrontEndComponent.prototype.ngOnInit = function () {
        this.urlInfoMap = this.iframeService.urlInfoMap;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Map)
    ], RemoteUiFrontEndComponent.prototype, "urlInfoMap", void 0);
    RemoteUiFrontEndComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'remote-ui-front-end',
            template: __webpack_require__("../../../../../src/app/tabs/remote-ui-front-end/remote-ui-front-end.component.html"),
            styles: [__webpack_require__("../../../../../src/app/tabs/remote-ui-front-end/remote-ui-front-end.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_iframe_service__["a" /* IFrameService */]])
    ], RemoteUiFrontEndComponent);
    return RemoteUiFrontEndComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    k8sUrl: "http://localhost:8081/spring-boot-security/index"
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map