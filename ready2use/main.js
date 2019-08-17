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

module.exports = "<router-outlet></router-outlet>\n\n\n"

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
        this.title = 'prota-angular';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_gl_view_gl_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/gl-view/gl-view.component */ "./src/app/components/gl-view/gl-view.component.ts");
/* harmony import */ var _components_posting_ui_posting_ui_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/posting-ui/posting-ui.component */ "./src/app/components/posting-ui/posting-ui.component.ts");
/* harmony import */ var _components_post_viewer_ui_post_viewer_ui_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/post-viewer-ui/post-viewer-ui.component */ "./src/app/components/post-viewer-ui/post-viewer-ui.component.ts");
/* harmony import */ var _components_media_display_media_display_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/media-display/media-display.component */ "./src/app/components/media-display/media-display.component.ts");
/* harmony import */ var _components_pin_post_ui_pin_post_ui_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pin-post-ui/pin-post-ui.component */ "./src/app/components/pin-post-ui/pin-post-ui.component.ts");
/* harmony import */ var _components_painting_ui_painting_ui_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/painting-ui/painting-ui.component */ "./src/app/components/painting-ui/painting-ui.component.ts");
/* harmony import */ var _components_cmd_ui_cmd_ui_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cmd-ui/cmd-ui.component */ "./src/app/components/cmd-ui/cmd-ui.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _interfaces_player_interface_player_interface_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./interfaces/player-interface/player-interface.component */ "./src/app/interfaces/player-interface/player-interface.component.ts");
/* harmony import */ var _components_admin_post_admin_post_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin-post/admin-post.component */ "./src/app/components/admin-post/admin-post.component.ts");
/* harmony import */ var _components_admin_map_admin_map_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-map/admin-map.component */ "./src/app/components/admin-map/admin-map.component.ts");
/* harmony import */ var _components_tile_edit_tile_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/tile-edit/tile-edit.component */ "./src/app/components/tile-edit/tile-edit.component.ts");
/* harmony import */ var ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-twitter-timeline */ "./node_modules/ngx-twitter-timeline/fesm5/ngx-twitter-timeline.js");
/* harmony import */ var _components_phone_poster_phone_poster_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/phone-poster/phone-poster.component */ "./src/app/components/phone-poster/phone-poster.component.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");
/* harmony import */ var _components_chat_view_chat_view_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/chat-view/chat-view.component */ "./src/app/components/chat-view/chat-view.component.ts");
/* harmony import */ var _components_info_view_info_view_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/info-view/info-view.component */ "./src/app/components/info-view/info-view.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _components_player_ui_player_ui_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/player-ui/player-ui.component */ "./src/app/components/player-ui/player-ui.component.ts");
/* harmony import */ var _components_ad_post_ui_ad_post_ui_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/ad-post-ui/ad-post-ui.component */ "./src/app/components/ad-post-ui/ad-post-ui.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '',
        pathMatch: 'full',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    { path: 'admin-post', component: _components_admin_post_admin_post_component__WEBPACK_IMPORTED_MODULE_16__["AdminPostComponent"] },
    { path: 'admin-map', component: _components_admin_map_admin_map_component__WEBPACK_IMPORTED_MODULE_17__["AdminMapComponent"] },
    //{ path: 'home', component: HomeComponent },
    { path: 'admin', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"] },
    { path: 'gl-view', component: _components_gl_view_gl_view_component__WEBPACK_IMPORTED_MODULE_7__["GlViewComponent"] },
    { path: 'ch/:map', component: _components_gl_view_gl_view_component__WEBPACK_IMPORTED_MODULE_7__["GlViewComponent"], },
    { path: 'painting', component: _components_painting_ui_painting_ui_component__WEBPACK_IMPORTED_MODULE_12__["PaintingUiComponent"] },
    { path: 'phone-poster/:id/:key/:canvas', component: _components_phone_poster_phone_poster_component__WEBPACK_IMPORTED_MODULE_20__["PhonePosterComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_gl_view_gl_view_component__WEBPACK_IMPORTED_MODULE_7__["GlViewComponent"],
                _components_posting_ui_posting_ui_component__WEBPACK_IMPORTED_MODULE_8__["PostingUIComponent"],
                _components_post_viewer_ui_post_viewer_ui_component__WEBPACK_IMPORTED_MODULE_9__["PostViewerUiComponent"],
                _components_media_display_media_display_component__WEBPACK_IMPORTED_MODULE_10__["MediaDisplayComponent"],
                _components_pin_post_ui_pin_post_ui_component__WEBPACK_IMPORTED_MODULE_11__["PinPostUiComponent"],
                _components_painting_ui_painting_ui_component__WEBPACK_IMPORTED_MODULE_12__["PaintingUiComponent"],
                _components_cmd_ui_cmd_ui_component__WEBPACK_IMPORTED_MODULE_13__["CmdUiComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"],
                _interfaces_player_interface_player_interface_component__WEBPACK_IMPORTED_MODULE_15__["PlayerInterfaceComponent"],
                _components_admin_post_admin_post_component__WEBPACK_IMPORTED_MODULE_16__["AdminPostComponent"],
                _components_admin_map_admin_map_component__WEBPACK_IMPORTED_MODULE_17__["AdminMapComponent"],
                _components_tile_edit_tile_edit_component__WEBPACK_IMPORTED_MODULE_18__["TileEditComponent"],
                _components_phone_poster_phone_poster_component__WEBPACK_IMPORTED_MODULE_20__["PhonePosterComponent"],
                _components_chat_view_chat_view_component__WEBPACK_IMPORTED_MODULE_22__["ChatViewComponent"],
                _components_info_view_info_view_component__WEBPACK_IMPORTED_MODULE_23__["InfoViewComponent"],
                _components_player_ui_player_ui_component__WEBPACK_IMPORTED_MODULE_26__["PlayerUiComponent"],
                _components_ad_post_ui_ad_post_ui_component__WEBPACK_IMPORTED_MODULE_27__["AdPostUiComponent"]
            ],
            imports: [
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_21__["QRCodeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_24__["NgxPaginationModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_25__["DeviceDetectorModule"].forRoot(),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_twitter_timeline__WEBPACK_IMPORTED_MODULE_19__["NgxTwitterTimelineModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/ad-post-ui/ad-post-ui.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/ad-post-ui/ad-post-ui.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container{\n    border-style                :   solid;\n    border-width                :   2px;\n    border-color                :   rgb(60, 68, 61);\n    border-radius               :   3px;\n    margin: 8px\n}\n\n#close-btn{\n    position: absolute;\n    top: 16px;\n    right: 16px;\n    cursor: pointer;\n}\n\n#desc{\n    \n    background-image: url(\"/assets/img/tool_bar_bg.png\");\n    background-repeat: repeat-x;\n    background-position: bottom;\n    position: absolute;\n    bottom: 0px;\n    text-align: center;\n    margin: 8px;\n    right: 0px;\n    color: aliceblue;\n    padding-top: 20px;\n    padding-right: 8px;\n    padding-left: px;\n}\n\ndiv {\n    max-width: 250px;\n    max-height: 250px;\n    overflow: hidden;\n}\n\nimg{\n    max-width: 250px;\n    max-height: 350px;\n}"

/***/ }),

/***/ "./src/app/components/ad-post-ui/ad-post-ui.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/ad-post-ui/ad-post-ui.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\" *ngIf=\"currentURL != null\">\n<div id=\"close-btn\" (click)=\"closeAd()\">❎</div>\n<a href=\"{{currentURL}}\" (click)=\"clickAd()\" target=\"blank_\">\n  <div><img src=\"{{currentImg}}\"/>\n    <div id=\"desc\">\n        <b>{{currentDesc}}</b> 📦🔥\n    </div>\n  </div>\n</a>\n</div>\n"

/***/ }),

/***/ "./src/app/components/ad-post-ui/ad-post-ui.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/ad-post-ui/ad-post-ui.component.ts ***!
  \***************************************************************/
/*! exports provided: AdPostUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPostUiComponent", function() { return AdPostUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdPostUiComponent = /** @class */ (function () {
    function AdPostUiComponent(chanWebService) {
        this.chanWebService = chanWebService;
        this.country = "us";
        this.adIndex = 0;
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    AdPostUiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lang = navigator.language;
        /*
        if(this.lang.toLowerCase().indexOf("us")> -1){
            this.country = "us";
        } else if(this.lang.toLowerCase().indexOf("fr")> -1){
            this.country = "fr";
        }*/
        //Map made! We load the money maker
        this.chanWebService.getAds().subscribe(function (ads) {
            //console.log(ads);
            _this.adsFiltered = new Array();
            for (var a = 0; a < ads.length; a++) {
                if (ads[a].loc === _this.country) {
                    _this.adsFiltered.push(ads[a]);
                }
            }
            console.log(_this.adsFiltered);
            _this.adIndex = Math.floor(Math.random() * Math.floor(_this.adsFiltered.length));
            _this.displayAd();
            /*this.myInterval = setInterval(()=>{
              this.updateAd();
            }, 15000);*/
        });
    };
    AdPostUiComponent.prototype.displayAd = function () {
        var ad = this.adsFiltered[this.adIndex];
        this.currentURL = ad.url;
        this.currentImg = ad.picture;
        this.currentDesc = ad.name;
    };
    AdPostUiComponent.prototype.updateAd = function () {
        this.adIndex++;
        console.log(this.adsFiltered);
        if (this.adIndex >= this.adsFiltered.length)
            this.adIndex = 0;
        if (this.adsFiltered.length > 0)
            this.displayAd();
    };
    AdPostUiComponent.prototype.gotTo = function (url_) {
        window.open(url_, '_blank');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdPostUiComponent.prototype, "close", void 0);
    AdPostUiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ad-post-ui',
            template: __webpack_require__(/*! ./ad-post-ui.component.html */ "./src/app/components/ad-post-ui/ad-post-ui.component.html"),
            styles: [__webpack_require__(/*! ./ad-post-ui.component.css */ "./src/app/components/ad-post-ui/ad-post-ui.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_1__["ChanWebService"]])
    ], AdPostUiComponent);
    return AdPostUiComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-map/admin-map.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/admin-map/admin-map.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    height: 100%;\n}\n\n.post-viewer-ui-message{\n\n    position: relative;\n    top:8px;\n    bottom:18px;\n    overflow : scroll;\n    height: 85%;\n    width: 100%;\n    left: 0;\n    right: 0;\n    margin: auto;\n    padding : 10px;\n    background: rgb(247, 189, 203);\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgb(181, 134, 145);\n    border-radius: 5px;\n}\n\n.ascii-art {\n    font-family: monospace;\n    font-family: \"Lucida Console\", monospace;\n    letter-spacing: 0.2em;\n    line-height: 0.8em;\n}"

/***/ }),

/***/ "./src/app/components/admin-map/admin-map.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-map/admin-map.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a routerLink=\"/admin-post\">Posts</a> - <a routerLink=\"/admin-map\">Maps</a> - <a routerLink=\"/gl-view\">Go Game!</a>\n  <div class=\"post-viewer-ui-message\">\n      <select id=\"map-select\" [(ngModel)]=\"selectedMapKey\"  (change)=\"onChangeMap($event.target.value)\">\n          <option *ngFor=\"let map of maps\" value=\"{{map.key}}\">{{map.name}}</option>\n      </select>\n      <br/>\n      <button (click)=\"moveMap(3)\">Go West</button>\n      <button (click)=\"moveMap(0)\">Go North</button>\n      <button (click)=\"moveMap(2)\">Go South</button>\n      <button (click)=\"moveMap(1)\">Go East</button> <br/>\n     ----------------------------------<br/>\n    <div *ngIf=\"selectedMap != null\">\n        Map name: {{selectedMap.name}} ({{selectedMap.x}}, {{selectedMap.y}})<br/>\n        Map key: <b>{{selectedMap.key}}</b><br/>\n        Map width: {{selectedMap.width}}<br/>\n        Map height: {{selectedMap.height}}<br/>\n        ----------------------------------<br/>\n        Door North <input [(ngModel)]=\"selectedMap.door_key_n\" /><br/>\n        Door East <input [(ngModel)]=\"selectedMap.door_key_e\" /><br/>\n        Door South <input [(ngModel)]=\"selectedMap.door_key_s\" /><br/>\n        Door West <input [(ngModel)]=\"selectedMap.door_key_w\" /><br/>\n        ----------------------------------<br/>\n        <div *ngFor=\"let line of mapDataLines; index as y\" class=\"ascii-art\">\n          <span *ngFor=\"let tile of line; index as x \">\n            <app-tile-edit [tileValue] =\"tile\"\n            [allTiles]=\"allTiles\"\n            [x]=\"x\" [y]=\"y\" (valueChange)=\"onChangeTileAt($event.x,$event.y)\">\n          </app-tile-edit>\n          </span>\n        </div>\n\n       \n        <select id=\"tile-select\" [(ngModel)]=\"selectedTileVal\"  (change)=\"onChangeTileBrush($event.target.value)\">\n            <option *ngFor=\"let tile of  allTiles\" value=\"{{tile.value}}\">{{tile.name}} {{tile.display}} ({{tile.value}})</option>\n        </select>\n        <button (click)=\"saveMap()\">Save the new map</button>\n    </div>\n\n    <div *ngIf=\"selectedMap == null\">\n    There's NOTHING here! ({{currentX}}, {{currentY}})\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/admin-map/admin-map.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/admin-map/admin-map.component.ts ***!
  \*************************************************************/
/*! exports provided: AdminMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMapComponent", function() { return AdminMapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminMapComponent = /** @class */ (function () {
    function AdminMapComponent(chanWebService) {
        this.chanWebService = chanWebService;
        this.selectedTileVal = 0;
        this.mapData = [];
        this.mapDataLines = [];
    }
    AdminMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chanWebService.getAllMaps().subscribe(function (data_) {
            _this.maps = data_.result;
            if (_this.maps.length > 0) {
                //We looking for the alpha map
                _this.maps.forEach(function (map) {
                    if (map.name === "alpha") {
                        _this.selectedMapKey = map.key;
                        _this.onChangeMap(_this.selectedMapKey);
                    }
                });
            }
        });
        this.chanWebService.getAllTiles().subscribe(function (data_) {
            _this.allTiles = data_.result;
            _this.selectedTileVal = _this.allTiles[0].value;
        });
    };
    AdminMapComponent.prototype.onChangeMap = function (key_) {
        var _this = this;
        this.selectedMapKey = key_;
        this.maps.forEach(function (map) {
            if (map.key == key_) {
                _this.selectedMap = map;
                _this.currentX = _this.selectedMap.x;
                _this.currentY = _this.selectedMap.y;
                //Parsing the map datas
                _this.mapData = _this.selectedMap.level_data.split(",");
                _this.mapDataLines = [];
                var n = 0;
                for (var h = 0; h < _this.selectedMap.height; h++) {
                    var mapDataWidth = [];
                    for (var w = 0; w < _this.selectedMap.width; w++) {
                        mapDataWidth.push(_this.mapData[n]);
                        n++;
                    }
                    _this.mapDataLines.push(mapDataWidth);
                }
            }
        });
    };
    AdminMapComponent.prototype.onChangeTileBrush = function (val_) {
        this.selectedTileVal = val_;
    };
    AdminMapComponent.prototype.onChangeTileAt = function (x_, y_) {
        console.log(this.selectedTileVal + "," + x_ + "," + y_);
        var lineTemp = this.mapDataLines[y_];
        lineTemp[x_] = this.selectedTileVal.toString();
        this.mapDataLines[y_] = lineTemp;
        console.log(this.mapDataLines);
    };
    AdminMapComponent.prototype.saveMap = function () {
        var tempNewData = "";
        for (var y = 0; y < this.mapDataLines.length; y++) {
            var line = this.mapDataLines[y];
            for (var x = 0; x < line.length; x++) {
                tempNewData = tempNewData + line[x] + ",";
            }
        }
        this.selectedMap.level_data = tempNewData;
        console.log(this.selectedMap);
        this.chanWebService.saveMapModel(this.selectedMap).subscribe(function (data_) {
            alert(JSON.stringify(data_));
        });
    };
    AdminMapComponent.prototype.moveMap = function (dir_) {
        var _this = this;
        switch (dir_) {
            //North
            case 0:
                this.currentY--;
                break;
            //East
            case 1:
                this.currentX++;
                break;
            //South
            case 2:
                this.currentY++;
                break;
            //West
            case 3:
                this.currentX--;
                break;
        }
        this.selectedMap = null;
        this.maps.forEach(function (map) {
            if (map.x == _this.currentX && map.y == _this.currentY) {
                _this.onChangeMap(map.key);
            }
        });
    };
    AdminMapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-map',
            template: __webpack_require__(/*! ./admin-map.component.html */ "./src/app/components/admin-map/admin-map.component.html"),
            styles: [__webpack_require__(/*! ./admin-map.component.css */ "./src/app/components/admin-map/admin-map.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_1__["ChanWebService"]])
    ], AdminMapComponent);
    return AdminMapComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-post/admin-post.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/admin-post/admin-post.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    height: 100%;\n}\n\n.post-viewer-ui-message{\n\n    position: relative;\n    top:8px;\n    bottom:18px;\n    overflow : scroll;\n    height: 85%;\n    /*max-width: 450px;*/\n    width: 100%;\n    left: 0;\n    right: 0;\n    margin: auto;\n    padding : 10px;\n    background: rgb(247, 189, 203);\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgb(181, 134, 145);\n    border-radius: 5px;\n}\n\nimg{\n    max-width:150px;\n    max-height:150px;\n}\n\n/*\ndiv {\n    margin-bottom: 8px;\n}*/\n\n::ng-deep .img-preview img, .img-preview video, .img-preview iframe, .img-preview audio {\n    max-width: 600px;\n    max-height: 400px;\n}"

/***/ }),

/***/ "./src/app/components/admin-post/admin-post.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-post/admin-post.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <a routerLink=\"/admin-post\">Posts</a> - <a routerLink=\"/admin-map\">Maps</a> - <a routerLink=\"/ch/alpha\">Go Game!</a>\n<div class=\"post-viewer-ui-message\">\n\n  <input [(ngModel)]=\"valToDelete\"> <button (click)=\"deleteVal()\">Delete</button>    ---------    <button type=\"button\" class=\"btn btn-primary\" (click)=\"updatePost()\">update</button>\n  <div *ngFor=\"let post of posts| paginate: { itemsPerPage: 20, currentPage: p }\">\n      N° {{post.id}} <span *ngIf=\"post.is_canon\">👌</span><br/>\n      Player: {{post.player_id}}<br/>\n      IP: {{post.player_ip}}<br/>\n      CHAN: <span class=\"badge badge-light\">{{post.map_key}}</span><br/>\n\n      <img src=\"{{post.url}}\"/>\n      Url: <a href=\"{{post.url}}\">{{post.url}}</a><br/>\n      Message: {{post.message}}<br/>\n      \n       <div *ngIf=\"post.was_deleted\"> \n      <div class=\"alert alert-danger\" role=\"alert\">\n      Thanks, post has been succesfuly  DELETED!\n      </div>\n      </div>\n\n      <div *ngIf=\"!post.was_deleted\">\n\n        <button type=\"button\" class=\"btn btn-success\"  (click) = \"canonPost(post.id,post.map_key)\" >Active or Disactive canon status 👌</button><br/>\n        <button type=\"button\" class=\"btn btn-warning\" (click) = \"deletePost(post)\" >Delete the post 🗑️</button><br/>\n        <button type=\"button\" class=\"btn btn-danger\" (click) = \"setBan(post.id)\" >Ban user 🔨</button><br/>\n      </div>\n      -----------------------------------------<br/>\n    </div>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/admin-post/admin-post.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/admin-post/admin-post.component.ts ***!
  \***************************************************************/
/*! exports provided: AdminPostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPostComponent", function() { return AdminPostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminPostComponent = /** @class */ (function () {
    function AdminPostComponent(chanWebService) {
        this.chanWebService = chanWebService;
        this.posts = [];
        this.valToDelete = "";
        this.p = 1;
    }
    AdminPostComponent.prototype.ngOnInit = function () {
        this.updatePost();
    };
    AdminPostComponent.prototype.updatePost = function () {
        var _this = this;
        this.chanWebService.getAllPost().subscribe(function (data_) {
            _this.posts = data_.result.reverse();
        });
    };
    AdminPostComponent.prototype.deletePost = function (postModel_) {
        var _this = this;
        this.postToDelete = postModel_;
        console.log("this.postToDelete:" + this.postToDelete);
        this.chanWebService.deletePost(postModel_.id, postModel_.map_key).subscribe(
        //Data success
        function (data) {
            //alert(JSON.stringify(data));
            //this.updatePost();
            _this.posts.find(function (post_) {
                return (post_.id == _this.postToDelete.id);
            }).was_deleted = true;
        });
    };
    AdminPostComponent.prototype.deleteVal = function () {
        var _this = this;
        this.chanWebService.deletePostForVal(this.valToDelete).subscribe(
        //Data success
        function (data) {
            alert(JSON.stringify(data));
            _this.updatePost();
        });
    };
    AdminPostComponent.prototype.setBan = function (id_) {
        var _this = this;
        this.chanWebService.setBan(id_).subscribe(
        //Data success
        function (data) {
            alert(JSON.stringify(data));
            _this.updatePost();
        });
    };
    AdminPostComponent.prototype.canonPost = function (id_, thread_) {
        var _this = this;
        this.chanWebService.canonPost(id_, thread_).subscribe(
        //Data success
        function (data) {
            alert(JSON.stringify(data));
            _this.updatePost();
        });
    };
    AdminPostComponent.prototype.banPost = function () {
    };
    AdminPostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-post',
            template: __webpack_require__(/*! ./admin-post.component.html */ "./src/app/components/admin-post/admin-post.component.html"),
            styles: [__webpack_require__(/*! ./admin-post.component.css */ "./src/app/components/admin-post/admin-post.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_1__["ChanWebService"]])
    ], AdminPostComponent);
    return AdminPostComponent;
}());



/***/ }),

/***/ "./src/app/components/chat-view/chat-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/chat-view/chat-view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container{\n    display:block;\n    /*height: 255px;*/\n    width: 340px;\n    color:white;\n    padding: 8px;\n}\n\n.bgChatUI{\n    margin: 4px; \n    bottom: 60px;\n    /*height: 200px;\n    overflow-y: scroll;*/\n    font-size: 12px;\n  }\n\n.yourPlayer{\n    color:rgb(155, 155, 155);\n  }\n\n.inputChat{\n   /*position: absolute;\n   bottom: 0px;\n   height: 50px;*/\n   width: 100%;\n   text-align: center;\n  }\n\n.bgLineUI{\n    border-radius: 5px;\n    background: rgba(46, 46, 46, 0.9);\n    font-size: 12px;\n    padding: 5px;\n}"

/***/ }),

/***/ "./src/app/components/chat-view/chat-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/chat-view/chat-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"container\">\n  <div class=\"bgChatUI\">\n  <div *ngIf=\"gameDataModel.actions != undefined && gameDataModel.actions.length\">\n  <div *ngFor=\"let action of gameDataModel.actions, let index = index;\">\n  <br/>\n   <span\n   class=\"bgLineUI\"\n   *ngIf=\"index > gameDataModel.actions.length-6\"\n   [ngStyle]=\"{'color': (action.player_id == gameDataModel.player.id) ? 'rgb(239, 147, 162)' : 'white' }\">\n    <b>#{{action.player_id}} <span *ngIf=\"action.player_id == gameDataModel.player.id\">(you)</span></b>{{action.value}}<br/></span>\n  </div>\n  </div>\n</div>\n<div class=\"inputChat input-group\">\n      <input class=\"form-control mr-sm-2\" [(ngModel)]=\"messageToPost\" type=\"text\" placeholder=\"Talk here.\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" (click)=\"postMessage()\">send</button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/chat-view/chat-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-view/chat-view.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatViewComponent", function() { return ChatViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_game_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/game-data.model */ "./src/app/models/game-data.model.ts");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
/* harmony import */ var src_app_models_action_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/action.model */ "./src/app/models/action.model.ts");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatViewComponent = /** @class */ (function () {
    function ChatViewComponent(chanWS, gameUIServiceService) {
        this.chanWS = chanWS;
        this.gameUIServiceService = gameUIServiceService;
        this.gameDataModel = new _models_game_data_model__WEBPACK_IMPORTED_MODULE_1__["GameDataModel"]();
        this.messageToPost = "";
    }
    ChatViewComponent.prototype.ngOnInit = function () {
    };
    ChatViewComponent.prototype.postMessage = function () {
        var _this = this;
        var action = new src_app_models_action_model__WEBPACK_IMPORTED_MODULE_3__["ActionModel"]();
        action.value = this.messageToPost;
        action.action = "talk";
        this.messageToPost = "";
        this.chanWS.createLog(action).subscribe(
        //Data success
        function (data) {
            console.log(data);
            _this.gameUIServiceService.forceWS();
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_game_data_model__WEBPACK_IMPORTED_MODULE_1__["GameDataModel"])
    ], ChatViewComponent.prototype, "gameDataModel", void 0);
    ChatViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chat-view',
            template: __webpack_require__(/*! ./chat-view.component.html */ "./src/app/components/chat-view/chat-view.component.html"),
            styles: [__webpack_require__(/*! ./chat-view.component.css */ "./src/app/components/chat-view/chat-view.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_2__["ChanWebService"],
            _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_4__["GameUIServiceService"]])
    ], ChatViewComponent);
    return ChatViewComponent;
}());



/***/ }),

/***/ "./src/app/components/cmd-ui/cmd-ui.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/cmd-ui/cmd-ui.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#commandPrompt{\n    background-color: black;\n    color: green;\n    font-family: 'Courier New', Courier, monospace;\n    text-align: left;\n    height: 100%;\n    padding: 2px;\n}\n\n#commandInput{\n    color: black;\n    background-color: green;\n    width:100%;\n    border: none;\n}\n\n::-webkit-input-placeholder { /* Firefox, Chrome, Opera */ \n    color: white; \n}\n\n::-ms-input-placeholder { /* Firefox, Chrome, Opera */ \n    color: white; \n}\n\n::placeholder { /* Firefox, Chrome, Opera */ \n    color: white; \n} "

/***/ }),

/***/ "./src/app/components/cmd-ui/cmd-ui.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/cmd-ui/cmd-ui.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button (click)=\"close()\" >Close</button>\n<div id=\"commandPrompt\">\n  /dungeon/users/anon$<br/>\n  <input id=\"commandInput\" type=\"text\" placeholder=\"\" [(ngModel)]=\"commandTyped\" placeholder=\">type command here_\">\n  <button (click)=\"sendCMD()\">send</button>\n  <br/>\n  <div>\n    <div *ngFor=\"let reply of commandReplies\">{{reply}}</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/cmd-ui/cmd-ui.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/cmd-ui/cmd-ui.component.ts ***!
  \*******************************************************/
/*! exports provided: CmdUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CmdUiComponent", function() { return CmdUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
/* harmony import */ var _services_chan_web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chan-web.service */ "./src/app/services/chan-web.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CmdUiComponent = /** @class */ (function () {
    function CmdUiComponent(gameUIServiceService, chanWebService) {
        this.gameUIServiceService = gameUIServiceService;
        this.chanWebService = chanWebService;
        this.commandReplies = [];
    }
    CmdUiComponent.prototype.ngOnInit = function () {
    };
    CmdUiComponent.prototype.close = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"].STATE_GAME_RUNNING);
    };
    CmdUiComponent.prototype.sendCMD = function () {
        if (this.commandTyped) {
            this.commandReplies.unshift(">" + this.commandTyped);
            this.analysisCMD(this.commandTyped);
            this.commandTyped = "";
        }
    };
    /********************
     * COMMAND ANALYSIS
     * ******************/
    CmdUiComponent.prototype.analysisCMD = function (cmd_) {
        var cmdData = cmd_.split(" ");
        if (cmdData[0] == "adminconnect" && cmdData[1]) {
            this.commandReplies.unshift("#### TRY TO CONNECT ADMIN #####");
            this.connectAdmin(cmdData[1]);
        }
        else if (cmdData[0] == "admininit" && cmdData[1]) {
            this.commandReplies.unshift("#### TRY TO INIT ADMIN #####");
            this.setAdminPassword(cmdData[1]);
        }
        else if (cmdData[0] == "logout" && cmdData[1]) {
            this.commandReplies.unshift("#### LOGOUT #####");
            this.logout();
        }
        else if (cmdData[0] == "admintest") {
            this.commandReplies.unshift("#### TEST ADMIN CONNECTION #####");
            this.isAdminConnected();
        }
        else {
            this.commandReplies.unshift("!command not recognized!");
        }
    };
    CmdUiComponent.prototype.isAdminConnected = function () {
        var _this = this;
        this.chanWebService.isAdminConnected().subscribe(function (data_) {
            if (data_.ok) {
                if (data_.result === "true") {
                    _this.commandReplies.unshift("***** Admin is connected *****");
                }
                else {
                    _this.commandReplies.unshift("***** Admin is not connected *****");
                }
                _this.commandReplies.unshift(data_.result);
            }
            else {
                _this.commandReplies.unshift("!error!");
            }
        });
    };
    CmdUiComponent.prototype.connectAdmin = function (password_) {
        var _this = this;
        this.chanWebService.connectAdmin(password_).subscribe(function (data_) {
            if (data_.ok) {
                _this.commandReplies.unshift("***** Admin connected *****");
                _this.commandReplies.unshift(data_.result);
            }
            else {
                _this.commandReplies.unshift("!error!");
            }
        });
    };
    CmdUiComponent.prototype.setAdminPassword = function (password_) {
        var _this = this;
        this.chanWebService.setAdminPassword(password_).subscribe(function (data_) {
            if (data_.ok) {
                _this.commandReplies.unshift("***** Set password successful *****");
                _this.commandReplies.unshift(data_.result);
            }
            else {
                _this.commandReplies.unshift("!error!");
            }
        });
    };
    CmdUiComponent.prototype.logout = function () {
        var _this = this;
        this.chanWebService.logout().subscribe(function (data_) {
            if (data_.ok) {
                _this.commandReplies.unshift("***** Logout successful *****");
                _this.commandReplies.unshift(data_.result);
            }
            else {
                _this.commandReplies.unshift("!error!");
            }
        });
    };
    CmdUiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cmd-ui',
            template: __webpack_require__(/*! ./cmd-ui.component.html */ "./src/app/components/cmd-ui/cmd-ui.component.html"),
            styles: [__webpack_require__(/*! ./cmd-ui.component.css */ "./src/app/components/cmd-ui/cmd-ui.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"], _services_chan_web_service__WEBPACK_IMPORTED_MODULE_2__["ChanWebService"]])
    ], CmdUiComponent);
    return CmdUiComponent;
}());



/***/ }),

/***/ "./src/app/components/gl-view/gl-view.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/gl-view/gl-view.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#renderCanvas{\n    width: 100%;\n    height: 100%;\n}\n\n/*\nGAME UI\n*/\n\n.ui-game-container{\n  z-index : 10;\n  height: 100%;\n }\n\n.ui-game{\n z-index : 10;\n}\n\n.ui-game-frame{\n  z-index : 11;\n  height: 95%;\n  width: 95%;\n }\n\n#mainUI{\n    position:absolute;\n    top:8px;\n    left:8px;\n    color: white;\n}\n\n#titleLabel{\n    text-align: center;\n    font-size: 1em;\n}\n\n#pointerDesc{\n\n    position:absolute;\n    top:20px;\n    max-width : 200px;\n    color: white;\n    text-align: center;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n#chanDisplay{\n    position:absolute;\n    top:10px;\n    max-width :480px;\n    text-align: center;\n    left: 0;\n    right: 0;\n    margin: auto;\n    color: white;\n}\n\n#pointerInteract{\n    position:absolute;\n    bottom:10px;\n    max-width : 380px;\n    color: white;\n    text-align: center;\n    left: 0;\n    right: 0;\n    margin: auto;\n}\n\n#postingUI{\n    position:absolute;\n    top:20px;\n    /*max-width: 650px;*/\n    left: 0;\n    right: 0;\n    margin: auto;\n    text-align: left;\n}\n\n#player-bar{\n  /*\n  background-image: url(\"/assets/img/tool_bar_bg.png\");\n  background-repeat: repeat-x;\n  background-position: bottom;*/\n\n  background-size: 100% 100%;\n  color: rgb(206, 206, 206);\n  height: 175px;\n  width: 100%;\n  position:absolute;\n  bottom: 0px;\n  right: 0px;\n  left: 0px;\n  margin:8px;\n}\n\n#player-bar-right{\n  position:absolute;\n  bottom: 0px;\n  right: 0;\n  padding: 11px;\n  text-align: right;\n  margin-right:16px;\n}\n\n#player-bar-left{\n  position:absolute;\n  bottom: 0px;\n  left: 0;\n  padding: 11px;\n  text-align: left;\n}\n\n#pin-ui{\n    position:absolute;\n    top:0px;\n    right: 0;\n    max-width: 300px;\n    max-height: 300px;\n    text-align: right;\n}\n\n#ad-ui{\n  position:absolute;\n  top:0px;\n  right: 0;\n  max-width: 250px;\n  max-height: 300px;\n  text-align: right;\n}\n\n.spoil{\n    width: 100%;\n    background-color: rgb(71, 71, 71);\n    color: rgb(71, 71, 71);\n}\n\n.pointer{\n  cursor: pointer;\n}\n\n.circle:before {\n    /*Put the element at the middle of the screen*/\n    text-align: center;\n    width: 4px;\n    height: 4px;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    content: '\\25CF';\n    font-size: 10px;\n    color: white;\n    position:absolute;\n    top:50px;\n    left : 50;\n\n  }\n\n.circle-hover:before {\n    /*Put the element at the middle of the screen*/\n    text-align: center;\n    width: 4px;\n    height: 4px;\n    top:0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    content: '\\25CF';\n    font-size: 20px;\n    color: white;\n    position:absolute;\n    top:50px;\n    left : 50;\n\n  }\n\n.bgGameUI{\n    border-radius: 5px;\n    background: rgba(46, 46, 46, 0.9);\n    font-size: 12px;\n    padding: 5px;\n}\n\n.chat-ui{\n    position:absolute;\n    border-radius: 5px;\n    background: rgba(46, 46, 46, 0.9);\n    bottom:10px;\n    left: 20px;\n    width: 300px;\n    height: 255px;\n    padding: 10px; \n}\n\n.info-button-ui{\n  position:absolute;\n  bottom:10px;\n  left: 10px;\n  color: white;\n}\n\n.fullHeightInterface{\n    \n    height: 90%;\n   /* overflow-y: auto;*/\n  }\n\nbutton{\n    margin: 1px 1px 4px 1px;\n  }\n\n/* Trash */\n\n#gamepadCanvas{\n    position:absolute;\n    bottom:20px;\n    right :20px;\n    width: 200px;\n    height: 200px;\n    color: white;\n    background-color: rgb(41, 41, 41);\n}\n\n.reply-underline{\n  color: rgb(0, 110, 255);\n  text-decoration: underline;\n}"

/***/ }),

/***/ "./src/app/components/gl-view/gl-view.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/gl-view/gl-view.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"view-game\">\n<canvas #renderCanvas id=\"renderCanvas\" touch-action=\"none\" tabindex=\"1\" style=\"touch-action: none;\"></canvas>\n\n<div id=\"ui-game-container\">\n    <div *ngIf=\"!isMobile\" id=\"mainUI\" class=\"ui-game bgGameUI\">\n    <div>\n        <div *ngIf=\"config\" >use <b>⌨️ {{config.key_mapping}}</b> to move <button button class=\"btn btn-secondary  btn-sm\" (click)=\"changeMapping()\">change</button></div>\n    </div>\n\n    </div>\n\n    <span *ngIf=\"!currentinteraction || currentinteraction.type === 0\" class=\"circle\" id=\"pointerTarget\"></span>\n    <span *ngIf=\"currentinteraction && currentinteraction.type !== 0\" class=\"circle-hover\" id=\"pointerTarget\"></span>\n    \n    <!--MAP INTERACTION UI-->\n    <div  id=\"chanDisplay\" *ngIf=\"gameDataModel.player != null && gameDataModel.map != null && gameDataModel.map.length\" class=\"ui-game\" >\n        <div >\n         <span class=\"bgGameUI\">\n       [    <span *ngFor=\"let chan of chanList\"><a href=\"{{clientURL}}ch/{{chan}}\">/{{chan}}</a>  ~  </span>]\n       </span>\n        </div>\n      <h2>~/{{gameDataModel.map[0].name}}/</h2>\n   </div>\n        <div  id=\"pointerInteract\" class=\"ui-game\">\n\n         <div *ngIf=\"currentinteraction != null\">\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"currentinteraction.type === 3 \" id=\"openPostBtn\" type=\"button\" class=\"btn btn-secondary\" (click)=\"climbLadder()\">🐸 Climb</button>\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"currentinteraction.type === 4 \" id=\"openPostBtn\" (click)=\"openDoor()\">🚪</button>\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"currentinteraction.type === 1 || currentinteraction.type === 8\" id=\"openPostBtn\" (click)=\"openUrl()\">🔎</button>\n\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"gameDataModel.postsLeft > 0 && (currentinteraction.type === 1 || currentinteraction.type === 8)\" id=\"openPostBtn\" (click)=\"addReply(currentinteraction.value.id)\">💬 Reply to <b class=\"reply-underline\">>>{{currentinteraction.value.id}}</b> </button>\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"gameDataModel.postsLeft > 0 && currentinteraction.type === 2 \" id=\"openPostingBtn\"(click)=\" openPostingUI()\">✍️</button>\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"gameDataModel.postsLeft > 0 &&  (currentinteraction.type === 2 || currentinteraction.type === 8)\" id=\"openPostingBtn\" (click)=\" openPaintingUI()\">🎨</button>\n\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"currentinteraction.type === 5 \" id=\"openPostingBtn\" (click)=\" getItem(currentinteraction.value.key)\">🤚 Get item {{currentinteraction.value.name}} </button>\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"currentinteraction.type === 6 \" id=\"openPostingBtn\"(click)=\" passGate(currentinteraction.value)\">⛩️ Go to <b>/{{currentinteraction.value}}</b></button>\n            <button type=\"button\" class=\"btn btn-dark\" *ngIf=\"currentinteraction.type === 7 \" id=\"openPostingBtn\" (click)=\" gotTo(currentinteraction.value)\">More info <b>/{{currentinteraction.value}}</b></button>\n            \n        </div>\n\n        <div *ngIf=\"reply > -1\">\n            Plan to reply to <b class=\"reply-underline\">>>{{reply}}</b> <span (click)=\" destroyReply(-1)\"> 🗑️</span>\n        </div>\n\n            <div *ngFor=\"let item of gameDataModel.itemsPlayer\">\n                +<b>{{item.name}}</b><br/>\n            </div>\n        </div>\n\n        <div id=\"pin-ui\" >\n            <app-pin-post-ui [postModel]=\"pinnedPostModel\"(close)=\"unPin($event)\" class=\"ui-game\">\n            </app-pin-post-ui>\n\n            <app-pin-post-ui *ngIf=\"currentinteraction != null && currentinteraction.value != null && currentinteraction.value.url != null\" [postModel]=\"currentinteraction.value\" (close)=\"unPin($event)\" class=\"ui-game\">\n            </app-pin-post-ui>\n\n           \n            <!--app-ad-post-ui *ngIf=\"adDisplay && !pinnedPostModel\" id=\"ad-ui\" class=\"ui-game\"  (close)=\"closeAd($event)\">\n            </app-ad-post-ui-->\n        </div>\n\n    <div *ngIf=\"gameDataModel != null\">\n        <app-posting-ui class=\"fullHeightInterface\" id=\"postingUI\" *ngIf=\"gameState === 1\" [isPhonePosting] = \"false\" [canvasKey]=\"currentinteraction.value.canvas_key\" [gameDataModel]=\"gameDataModel\" [reply]=\"reply\" class=\"ui-game-frame\" (onDestroyReply)=\"destroyReply($event)\"></app-posting-ui>\n        <app-painting-ui class=\"fullHeightInterface\"  id=\"postingUI\" *ngIf=\"gameState === 4\" [canvasKey]=\"currentinteraction.value.canvas_key\" [urlBgPicture]=\"currentinteraction.value.url\" [reply]=\"reply\" class=\"ui-game-frame\" (onDestroyReply)=\"destroyReply($event)\">></app-painting-ui>\n        <app-post-viewer-ui class=\"fullHeightInterface\" id=\"postingUI\" *ngIf=\"gameState === 2\" [postModel]=\"currentinteraction.value\" (pin)=\"onPin($event)\" [gameDataModel]=\"gameDataModel\" class=\"ui-game-frame\" (onReply)=\"addReply($event)\" ></app-post-viewer-ui >\n        <app-info-view class=\"fullHeightInterface\" id=\"postingUI\" *ngIf=\"gameState === 6\" class=\"ui-game-frame\"></app-info-view>\n        <app-player-ui class=\"fullHeightInterface\" id=\"postingUI\" *ngIf=\"gameState === 9\" class=\"ui-game-frame\" [gameDataModel]=\"gameDataModel\"></app-player-ui>\n    </div>\n\n    <div id=\"player-bar\" *ngIf=\"!isMobile && gameDataModel.player != null\" >\n       \n        <div id=\"player-bar-left\" class=\"bgGameUI\">\n            <div>#{{gameDataModel.player.id}} <span *ngIf=\"gameDataModel.player.is_admin\"> <a href=\"/admin-post\" target=\"blank_\">🧠</a></span>\n            </div>\n            <!--div>Talk 💬<br/>\n                <textarea id=\"message-text\" placeholder=\"talk here\" [ngModel]=\"gameDataModel.player.talk\"\n                (ngModelChange)=\"changeTalk($event)\"></textarea>\n            </div-->\n        </div>\n        \n        <div id=\"player-bar-right\">\n            <!--app-chat-view *ngIf=\"!isMobile && gameDataModel.player != null\" [gameDataModel]=\"gameDataModel\"></app-chat-view-->\n            <div>\n            <span class=\"bgGameUI\">\n            <div>Due moderation issues post is currently limited. {{gameDataModel.postsLeft}} post(s) left.</div>\n            <a href=\"https://twitter.com/alexkrunch\" target=\"blank_\">🐦 Twitter</a> - <a href=\"http://snuffchan.com/blog/donations/\" target=\"blank_\">💰 Donations </a>\n            </span>\n            </div>\n        </div>\n       \n    </div>\n   \n\n</div>"

/***/ }),

/***/ "./src/app/components/gl-view/gl-view.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/gl-view/gl-view.component.ts ***!
  \*********************************************************/
/*! exports provided: GlViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlViewComponent", function() { return GlViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _motor_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../motor/game */ "./src/app/motor/game.ts");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
/* harmony import */ var src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/offline.service */ "./src/app/services/offline.service.ts");
/* harmony import */ var src_app_models_player_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var src_app_models_config_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/config.model */ "./src/app/models/config.model.ts");
/* harmony import */ var src_app_models_game_data_model__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/game-data.model */ "./src/app/models/game-data.model.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GlViewComponent = /** @class */ (function () {
    function GlViewComponent(gameUIServiceService, chanWebService, offlineService, router, route, deviceService) {
        var _this = this;
        this.gameUIServiceService = gameUIServiceService;
        this.chanWebService = chanWebService;
        this.offlineService = offlineService;
        this.router = router;
        this.route = route;
        this.deviceService = deviceService;
        this.playerData = new src_app_models_player_model__WEBPACK_IMPORTED_MODULE_6__["PlayerModel"]();
        this.gameDataModel = new src_app_models_game_data_model__WEBPACK_IMPORTED_MODULE_8__["GameDataModel"]();
        this.config = new src_app_models_config_model__WEBPACK_IMPORTED_MODULE_7__["ConfigModel"]();
        this.isMobile = false;
        this.adDisplay = true;
        this.currentMapKey = "alpha";
        this.clientURL = "";
        this.reply = -1;
        this.router.routeReuseStrategy.shouldReuseRoute = function () { return false; };
        this.route.params.subscribe(function (params) {
            _this.currentMapKey = params['map'];
            console.log(_this.currentMapKey);
        });
        this.clientURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].clientUrl;
    }
    GlViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].clientUrl;
        this.chanList = this.offlineService.getChanData();
        console.log(this.chanList);
        this.gameUIServiceService.changeStateEmitter.subscribe(function (state_) {
            _this.changeGameState(state_);
            if (state_ === _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"].STATE_NO_PLAYER)
                _this.router.navigate(['/']);
        });
        this.gameUIServiceService.sendInteractionsEmitter.subscribe(function (inter_) {
            _this.receiveInteraction(inter_);
        });
        this.gameUIServiceService.changeGameDataEmitter.subscribe(function (gameData_) {
            _this.gameDataModel = gameData_;
            if (_this.currentMapKey !== _this.gameDataModel.player.map_key) {
                _this.currentMapKey = _this.gameDataModel.player.map_key;
                _this.adDisplay = true;
            }
        });
        this.gameUIServiceService.changeConfigEmitter.subscribe(function (config_) {
            _this.config = config_;
        });
        this.isMobile = this.deviceService.isMobile();
        // Create our game class using the render canvas element
        this.game = new _motor_game__WEBPACK_IMPORTED_MODULE_2__["Game"]('renderCanvas');
        //alert("desktop: "+this.deviceService.isDesktop()+" mobile:"+this.deviceService.isMobile()+" tablet: "+this.deviceService.isTablet());
        if (!this.deviceService.isDesktop()) {
            this.game.activeJoystick();
            /*alert("desktop: "+this.deviceService.isDesktop+" mobile:"+this.deviceService.isDesktop+" tablet: "+
            this.deviceService.isTablet);*/
        }
        this.game.setUIService(this.gameUIServiceService);
        this.game.setWebService(this.chanWebService);
        this.game.setOfflineService(this.offlineService);
        this.game.setClientUrl(this.clientURL);
        this.game.setMapKey(this.currentMapKey);
        this.game.setRouter(this.router);
        this.game.initGame();
    };
    GlViewComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        //console.log(window.screen);
        this.renderCanvas.nativeElement.width = (window.screen.width);
        this.renderCanvas.nativeElement.height = (window.screen.availHeight);
        //console.log(JSON.stringify(window.screen));
        window.onresize = function () {
            _this.renderCanvas.nativeElement.height = (window.screen.availHeight);
            _this.renderCanvas.nativeElement.width = (window.screen.width);
        };
    };
    GlViewComponent.prototype.changeGameState = function (state_) {
        this.gameState = state_;
        //console.log("this.gameState ="+this.gameState );
    };
    GlViewComponent.prototype.receiveInteraction = function (inter_) {
        this.currentinteraction = inter_;
    };
    /***** INTERACTION! ******/
    GlViewComponent.prototype.openUrl = function () {
        //window.open(this.currentinteraction.value, "_blank");
        this.gameState = 2;
    };
    GlViewComponent.prototype.openCMD = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"].STATE_CMD_UI);
    };
    GlViewComponent.prototype.climbLadder = function () {
        this.game.climbObject();
    };
    GlViewComponent.prototype.openDoor = function () {
        this.game.openDoor();
    };
    GlViewComponent.prototype.openPostingUI = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"].STATE_POSTING_UI);
    };
    GlViewComponent.prototype.openPaintingUI = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"].STATE_PAINTING_UI);
    };
    GlViewComponent.prototype.openInfoUI = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"].STATE_INFO_UI);
    };
    GlViewComponent.prototype.openPlayerUI = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"].STATE_PLAYER_UI);
    };
    GlViewComponent.prototype.onPin = function (event_) {
        if (this.pinnedPostModel != null)
            this.pinnedPostModel = null;
        this.pinnedPostModel = event_;
        console.log(this.pinnedPostModel);
    };
    GlViewComponent.prototype.unPin = function (event_) {
        //console.log( "unpin");
        this.pinnedPostModel = null;
    };
    GlViewComponent.prototype.closeAd = function (event_) {
        this.adDisplay = false;
    };
    GlViewComponent.prototype.changeMapping = function () {
        this.game.switchKeyMapping();
    };
    GlViewComponent.prototype.passGate = function (val_) {
        this.game.passGet(val_);
    };
    GlViewComponent.prototype.getItem = function (key_) {
        //console.log("get item");
        this.game.getItem(key_);
    };
    GlViewComponent.prototype.addReply = function (id_) {
        this.reply = id_;
    };
    GlViewComponent.prototype.destroyReply = function () {
        this.reply = -1;
    };
    GlViewComponent.prototype.savePhoto = function () {
        alert("try to write picture");
        var canvas = document.getElementById("renderCanvas");
        console.log(canvas);
        //let photoUrl = canvas.getContext('2d').getImageData(0,0,600,600)
        var data = canvas.toDataURL('image/png');
        //document.location.href = photoUrl;
        console.log(data);
        var w = window.open('about:blank', 'Screen Capture');
        w.document.write("<img src='" + data + "' alt='from canvas'/>");
    };
    GlViewComponent.prototype.gotTo = function (url_) {
        window.open(url_, '_blank');
    };
    GlViewComponent.prototype.changeTalk = function (e_) {
        console.log(e_);
        this.game.changeTalk(e_);
    };
    GlViewComponent.prototype.ngOnDestroy = function () {
        /*
        this.gameUIServiceService.changeStateEmitter.unsubscribe();
        this.gameUIServiceService.sendInteractionsEmitter.unsubscribe();
        this.gameUIServiceService.changeGameDataEmitter.unsubscribe();
        this.gameUIServiceService.changeConfigEmitter.unsubscribe();*/
        delete this.game;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('renderCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GlViewComponent.prototype, "renderCanvas", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('renderCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], GlViewComponent.prototype, "elementCanvas", void 0);
    GlViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gl-view',
            template: __webpack_require__(/*! ./gl-view.component.html */ "./src/app/components/gl-view/gl-view.component.html"),
            styles: [__webpack_require__(/*! ./gl-view.component.css */ "./src/app/components/gl-view/gl-view.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"],
            src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_4__["ChanWebService"],
            src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_5__["OfflineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_9__["DeviceDetectorService"]])
    ], GlViewComponent);
    return GlViewComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    /*background-image: \n    linear-gradient( rgba(0,0,0,.5), rgba(0, 0, 0, 0.6) ),\n    url(\"/assets/img/home_bg.jpeg\");*/\n    padding: 25px;\n    /*overflow: scroll;*/\n    -webkit-overflow-scrolling: touch;\n    color: white;\n    text-align: center;\n}\n\ndiv {\n    margin-bottom: 8px;\n}\n\n.overlay {\n    z-index: 1;\n    height: 100%;\n    width: 100%;\n    position: fixed;\n    overflow: auto;\n    top: 0px;\n    left: 0px;\n    background: rgba(0, 0, 0, 0.7); /*can be anything, of course*/\n}\n\n#pres-screen {\n\n    width : 100%;\n    text-align: center;\n}\n\n#header {\n    color: white;\n}\n\n#twitter {\n    width:550px;\n    margin: 20px auto;\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div>\n    <h1>AnonIB💀3D</h1>\n    超暴力的なファイル共有3 Dゲーム<br/>\n    by Ælx Krunch<br/>\n    [ <a href=\"https://twitter.com/alexkrunch\" target=\"blank_\">🐦 Twitter</a> ] [ <a href=\"http://snuffchan.com/blog/donations/\" target=\"blank_\">💴 Donations </a>]\n  </div>\n\n  <div>\n  <button type=\"button\" class=\"btn btn-primary btn-lg\" (click)=\"launchGame()\">Press Start 🎮</button>\n  </div>\n\n  <!--app-login></app-login-->\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/offline.service */ "./src/app/services/offline.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(deviceService, router, offlineService) {
        this.deviceService = deviceService;
        this.router = router;
        this.offlineService = offlineService;
        this.isMobile = false;
        this.isTOSAccepted = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.isMobile = this.deviceService.isMobile();
        var url = location.href;
        if (url.indexOf(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clientUrl) < 0) {
            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clientUrl;
        }
        var playerData_ = this.offlineService.getPlayerData();
        if (playerData_ != null) {
            this.isTOSAccepted = true;
        }
    };
    HomeComponent.prototype.launchGame = function () {
        this.router.navigateByUrl('/ch/alpha');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_device_detector__WEBPACK_IMPORTED_MODULE_1__["DeviceDetectorService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_4__["OfflineService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/info-view/info-view.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/info-view/info-view.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-ui-message{\n  position:relative;\n  max-width: 650px;\n  left: 0;\n  right: 0;\n  margin: auto;\n\n  padding : 10px;\n  margin-bottom : 18px;\n  background-color: rgb(189, 198, 247);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #a99ec7;\n  border-radius: 5px;\n\n  height: 100%;\n  overflow-y: auto;\n}\n\n#container{\n  position:relative;\n  max-width: 650px;\n  left: 0;\n  right: 0;\n  margin: auto;\n\n  padding : 10px;\n  margin-bottom : 18px;\n  background-color: rgb(189, 198, 247);\n  border-style: solid;\n  border-width: 1px;\n  border-color: #a99ec7;\n  border-radius: 5px;\n\n  height: 100%;\n  overflow-y: auto;\n}\n\ndiv {\n  margin-bottom: 8px;\n}\n"

/***/ }),

/***/ "./src/app/components/info-view/info-view.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/info-view/info-view.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id= \"container\">\n\n  <div >\n  <h2>About Protaguro$</h2>\n  <div>\n    I am Alex Krunch, Imageboard lover since now ten years and I've created Protaguro$ (the project name will change soon)\n    In response to the growing and industrialized censorship on social medias. This whole 3D world is set to work as\n    an abstraction, protecting our LULZ from the outside. Soon I will make a blog explaining the whole ideology of the Project,\n    and also cool technical feature I will implement, like secrets board, items management and <i>torrenting files in game</i>.\n\n   Keep in mind it's a prototype and than bug and database reset will be a frequent thing.\n\n    You can keep news of THE PROJECT here:\n    <a href=\"https://twitter.com/alexkrunch\" target=\"blank_\">https://twitter.com/alexkrunch</a>\n\n    You can also contact by mail at <b>monsieur.krunch@gmail.com</b>\n  </div>\n\n  <div>\n    If you want to make a 💴 DONATION 💴 to the cause, here are the crypto address:<br/>\n\n    <div class=\"card\">\n        <div class=\"card-body\">\n            Bitcoin address:<br/>\n            <b>bc1qwc7zaa4tfeertxwk46jv9meyup9ep9cre8l8p7</b><br/>\n        \n            Etherum:<br/>\n            <b>0xEE914adbb0A83e0FD8B90E292CAc6280D26b6b66</b><br/>\n        </div>\n    </div>\n   \n  </div>\n  <button (click)=\"closeCanvas()\">Close</button>\n\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/info-view/info-view.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/info-view/info-view.component.ts ***!
  \*************************************************************/
/*! exports provided: InfoViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoViewComponent", function() { return InfoViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoViewComponent = /** @class */ (function () {
    function InfoViewComponent(gameUIServiceService) {
        this.gameUIServiceService = gameUIServiceService;
    }
    InfoViewComponent.prototype.ngOnInit = function () {
    };
    InfoViewComponent.prototype.closeCanvas = function () {
        this.gameUIServiceService.changeState(src_app_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"].STATE_GAME_RUNNING);
    };
    InfoViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-view',
            template: __webpack_require__(/*! ./info-view.component.html */ "./src/app/components/info-view/info-view.component.html"),
            styles: [__webpack_require__(/*! ./info-view.component.css */ "./src/app/components/info-view/info-view.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"]])
    ], InfoViewComponent);
    return InfoViewComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#contentLogin{\n    text-align: center;\n}\n\ndiv {\n    margin-bottom: 8px;\n}\n\nbutton{\n    margin: 1px 1px 4px 1px;\n  }\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"contentLogin\" role=\"alert\">\n\n<div *ngIf=\"isLoading\">\n    Try to get a player token...\n</div>\n\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"!isTOSAccepted\">\n    <b>-We do not allow CP / Non-ironical hatespeech / porn / doxxing / pirated content.</b><br/>\n    -You need to be +18 to access this game.<br/>\n    -Don't  trust anythings written on the game, it's all fake news.<br/>\n    -Don't talk about the game.<br/>\n    -Keep in mind t's an experimental project, it will be often broke. For more information contact monsieur.krunch@gmail.com,\n    or check my twitter account, <a href=\"https://twitter.com/alexkrunch\" target=\"blank_\">@AlexKrunch</a>🚬<br/>\n    <button (click)=\"acceptTOS()\" type=\"button\" class=\"btn btn-danger\">OK, I get it</button>\n    </div>\n\n<div class=\"form-signin\" *ngIf=\"playerData == null && isTOSAccepted\" class=\"alert alert-primary\" >\n <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n       <span class=\"input-group-text\">ID</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]= \"anonId\" placeholder=\"ID\">\n  </div>\n  <div class=\"input-group\">\n    <div class=\"input-group-prepend\">\n       <span class=\"input-group-text\">Token</span>\n    </div>\n    <input type=\"text\" class=\"form-control\" [(ngModel)]= \"anonToken\" placeholder=\"token\">\n  </div>\n  <div>\n    <button (click)=\"createUser()\" type=\"button\" class=\"btn btn-primary\">Existing User</button> or <button (click)=\"createNewUser()\" type=\"button\" class=\"btn btn-primary\">New User</button><br/>\n  </div>\n  <div class=\"form-label-group\">\n    <input type=\"password\"  [(ngModel)]= \"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password (optional)\">\n  </div>\n</div>\n\n<div *ngIf=\"playerData != null\" class=\"alert alert-primary\" >\n  What you get.. <br/>\n  Player ID #{{playerData.id}} <span *ngIf=\"playerData.is_admin\">🧠</span><br/>\n  Player token <b>{{playerData.player_key}}</b>\n  <br/>\n  <button (click) = \"validAndLaunchGame()\" class=\"btn btn-primary\">Launch game 🎮</button>\n        <button *ngIf=\"playerData.is_admin\" (click) = \"validAndLaunchAdmin()\" class=\"btn btn-primary\">Launch admin</button>\n        <button (click)=\"playerData = null\" class=\"btn btn-secondary\">Cancel</button>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
/* harmony import */ var src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/offline.service */ "./src/app/services/offline.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(chanWebService, offlineService, router) {
        this.chanWebService = chanWebService;
        this.offlineService = offlineService;
        this.router = router;
        this.isLoading = false;
        this.isTOSAccepted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var playerData_ = this.offlineService.getPlayerData();
        if (playerData_ != null) {
            this.anonId = playerData_.id;
            this.anonToken = playerData_.player_key;
            this.isTOSAccepted = true;
        }
    };
    //Call the WS
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        console.log("createUser");
        this.isLoading = true;
        this.chanWebService.createUser(this.anonId, this.anonToken, this.password, "").subscribe(
        //Data success
        function (data) {
            _this.isLoading = false;
            if (data.ok) {
                _this.playerData = data.result.player;
                _this.offlineService.savePlayer(_this.playerData);
            }
            else {
                _this.errorWs = data.error;
            }
        });
    };
    //Call the WS
    LoginComponent.prototype.createNewUser = function () {
        this.anonId = 0;
        this.anonToken = "";
        this.createUser();
    };
    LoginComponent.prototype.validAndLaunchGame = function () {
        this.router.navigateByUrl('/ch/alpha');
    };
    LoginComponent.prototype.validAndLaunchAdmin = function () {
        this.router.navigateByUrl('/admin-post');
    };
    LoginComponent.prototype.acceptTOS = function () {
        this.isTOSAccepted = true;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_2__["ChanWebService"], src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/media-display/media-display.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/media-display/media-display.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/media-display/media-display.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/media-display/media-display.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"url != null && url != ''\">\n<img *ngIf=\"urlParse.getUrlType() === 1 || urlParse.getUrlType() === 2\" [src]=\"url\"/>\n\n<audio *ngIf=\"urlParse.getUrlType() === 5\" controls=\"controls\">\n  <source [src]=\"url\" type=\"audio/mp3\" />\n</audio>\n\n<video *ngIf=\"urlParse.getUrlType() === 3\" controls=\"controls\">\n  <source [src]=\"url\" type=\"video/mp4\" />\n</video>\n\n<iframe *ngIf=\"urlParse.getUrlType() === 4\" [src]=\"safeTubeURL\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\n</div>\n"

/***/ }),

/***/ "./src/app/components/media-display/media-display.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/media-display/media-display.component.ts ***!
  \*********************************************************************/
/*! exports provided: MediaDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaDisplayComponent", function() { return MediaDisplayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_urlParser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/urlParser */ "./src/app/utils/urlParser.ts");
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



var MediaDisplayComponent = /** @class */ (function () {
    function MediaDisplayComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MediaDisplayComponent.prototype.ngOnInit = function () {
        if (this.url != null) {
            this.urlParse = new src_app_utils_urlParser__WEBPACK_IMPORTED_MODULE_1__["UrlParser"](this.url);
            this.safeTubeURL = this.urlParse.getSafeTubeURL(this.sanitizer);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MediaDisplayComponent.prototype, "url", void 0);
    MediaDisplayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-media-display',
            template: __webpack_require__(/*! ./media-display.component.html */ "./src/app/components/media-display/media-display.component.html"),
            styles: [__webpack_require__(/*! ./media-display.component.css */ "./src/app/components/media-display/media-display.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], MediaDisplayComponent);
    return MediaDisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/painting-ui/painting-ui.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/painting-ui/painting-ui.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-ui-message{\n    position:relative;\n    /*max-width: 480px;*/\n    left: 0;\n    right: 0;\n    margin: auto;\n    padding : 10px;\n    margin-bottom : 18px;\n    background: rgb(189, 198, 247);\n    border-style: solid;\n    border-width: 1px;\n    border-color: #a99ec7;\n    border-radius: 5px;\n    height: 95%;\n    overflow-y: auto;\n}\n\n#canvas-right{\n  width: 460px;\n  position:absolute;\n}\n\n#tool-right{\n  position:absolute;\n  width: 480px;\n  height: 100%;\n  left: 480px;\n  top: 0px;\n}\n\ntextarea\n{\n  width: 220px;\n  margin: 0;\n}\n\n#painting-board {\n    width: 460px;\n    height:  460px;\n    /*background-color: whitesmoke;*/\n    background-image:\n    url(\"/assets/img/grid.png\");\n\n}\n\n#brush-size{\n    position: relative;\n    background-color: black;\n    width: 10px;\n    height: 10px;\n}\n\nbutton{\n  margin: 1px 1px 4px 1px;\n}"

/***/ }),

/***/ "./src/app/components/painting-ui/painting-ui.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/painting-ui/painting-ui.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-ui-message\">\n\n<div id=\"canvas-left\">\n<canvas #paintingCanvas id=\"painting-board\"\n    height=\"460px\" width=\"460px\"\n    touch-action=\"none\" tabindex=\"1\" style=\"touch-action: none;\">\n    <!--(document:mousemove)=\"canvasMouseMove( $event )\"-->\n</canvas>\n</div>\n\n<div id=\"tool-right\">\n<button (click)=\"changeColor(colorRed)\">Red</button>\n<button (click)=\"changeColor(colorBlack)\">Black</button>\n<button (click)=\"changeColor(colorWhite)\">White</button>\n<button (click)=\"changeColor(colorPink)\">Pink</button><br/>\n<button (click)=\"changeColor(colorGreen)\">Green</button>\n<button (click)=\"changeColor(colorBrown)\">Brown</button>\n<button (click)=\"changeColor(colorPurple)\">Purple</button><br/>\n<button (click)=\"changeColor(colorYellow)\">Yellow</button>\n<button (click)=\"changeColor(colorBlue)\">Blue</button><br/>\nPick a color: <input type=\"color\" [(ngModel)]=\"curColor\"><br/>\n<input type=\"range\" name=\"points\" min=\"5\" max=\"100\" [(ngModel)]=\"strokeSize\">\n<div id=\"brush-size\"\n    [style.width]=\"strokeSize+'px'\"\n    [style.height]=\"strokeSize+'px'\"> </div>\n<br/>\n<button (click)=\"clear()\">Clear</button><br/>\n\n<div *ngIf=\"reply >= 0\" ><i>reply to >>{{ reply }}</i> <span (click)=\" destroyReply()\"> 🗑️</span></div>\nMessage: <br/>\n<textarea id=\"message-text\" placeholder=\"Your text\" [(ngModel)]=\"postModel.message\" ></textarea><br/>\n<button (click)=\"sendImg()\" class=\"btn btn-primary\">Paint the art!</button>\n<button (click)=\"closeCanvas()\" class=\"btn btn-danger\">Close</button>\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/painting-ui/painting-ui.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/painting-ui/painting-ui.component.ts ***!
  \*****************************************************************/
/*! exports provided: PaintingUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaintingUiComponent", function() { return PaintingUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
/* harmony import */ var src_app_models_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/post.model */ "./src/app/models/post.model.ts");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/ngx-device-detector.umd.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pepjs */ "./node_modules/pepjs/dist/pep.js");
/* harmony import */ var pepjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pepjs__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PaintingUiComponent = /** @class */ (function () {
    function PaintingUiComponent(gameUIServiceService, chanWebService, deviceService) {
        this.gameUIServiceService = gameUIServiceService;
        this.chanWebService = chanWebService;
        this.deviceService = deviceService;
        this.onDestroyReply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isLoading = false;
        this.canvasPercent = 0;
        this.isFinalExport = false;
        /*****************
         * EVENT DEALING WITH PAINTING
         *****************/
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
        this.clickDurationCurrent = 0;
        this.clickDurationList = new Array();
        //Colors
        this.colorRed = "#df4b26";
        this.colorPink = "#ff8cd4";
        this.colorBlack = "#000000";
        this.colorPurple = "#cb3594";
        this.colorGreen = "#659b41";
        this.colorYellow = "#ffcf33";
        this.colorBrown = "#986928";
        this.colorBlue = "#0066ff";
        this.colorWhite = "#ffffff";
        this.curColor = this.colorRed;
        this.clickColor = new Array();
        this.selectedColor = "#000000";
        this.clickSize = new Array();
        this.strokeSize = 10;
    }
    PaintingUiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postModel = new src_app_models_post_model__WEBPACK_IMPORTED_MODULE_2__["PostModel"]();
        this.postModel.map_key = "";
        this.postModel.canvas_key = this.canvasKey;
        this.postModel.message = "";
        this.postModel.graffiti = true;
        this.postModel.reply = this.reply;
        if (this.urlBgPicture != null) {
            this.imageBg = new Image();
            this.imageBg.crossOrigin = "Anonymous";
            this.imageBg.src = this.urlBgPicture;
            console.log('this.urlBgPicture: ' + this.urlBgPicture);
            this.imageBg.onload = function () {
                _this.redraw();
            };
        }
        //is Mobile? We need to make teh mouse move with pepjs
        // if(!this.deviceService.isDesktop()){
        this.elementCanvas.nativeElement.addEventListener("pointerdown", function (event_) {
            _this.paint = true;
            _this.canvasMouseDown(event_);
        });
        this.elementCanvas.nativeElement.addEventListener("pointermove", function (event_) {
            _this.canvasMouseMove(event_);
        });
        this.elementCanvas.nativeElement.addEventListener("pointerup", function (event_) {
            _this.canvasMouseUp(event_);
        });
        //}
    };
    PaintingUiComponent.prototype.ngAfterViewInit = function () {
        this.context = this.elementCanvas.nativeElement.getContext('2d');
    };
    PaintingUiComponent.prototype.closeCanvas = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"].STATE_GAME_RUNNING);
    };
    PaintingUiComponent.prototype.getImg = function () {
        var data = this.elementCanvas.nativeElement.toDataURL("image/png");
        data += "snffch";
        return data;
    };
    PaintingUiComponent.prototype.dataURItoBlob = function (dataURI) {
        var byteString = window.atob(dataURI);
        var arrayBuffer = new ArrayBuffer(byteString.length);
        var int8Array = new Uint8Array(arrayBuffer);
        for (var i = 0; i < byteString.length; i++) {
            int8Array[i] = byteString.charCodeAt(i);
        }
        var blob = new Blob([int8Array], { type: 'image/jpeg' });
        return blob;
    };
    PaintingUiComponent.prototype.sendImg = function () {
        var _this = this;
        if ((this.clickX.length + this.clickY.length) < 200) {
            alert("It's doesn't looks like a big drawing :( ");
            return;
        }
        this.isFinalExport = true;
        this.redraw();
        this.chanWebService.createAndUploadPaint(this.postModel, this.getImg()).subscribe(
        //Data success
        function (data) {
            //console.log("data:"+data);
            var postStuffResponse = data;
            if (postStuffResponse.ok) {
                //console.log("result "+JSON.stringify( postStuffResponse));
                _this.destroyReply();
                _this.closeCanvas();
                _this.gameUIServiceService.forceWS();
                _this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"].STATE_GAME_RUNNING);
            }
            _this.isLoading = false;
            _this.isFinalExport = false;
        }, function (error) {
            //console.log(JSON.stringify(error));
            _this.isLoading = false;
            _this.isFinalExport = false;
            _this.redraw();
        });
    };
    PaintingUiComponent.prototype.canvasMouseDown = function (event_) {
        var mouseX = event_.offsetX + (event_.offsetX * this.canvasPercent);
        var mouseY = event_.offsetY + (event_.offsetY * this.canvasPercent);
        this.paint = true;
        this.addClick(mouseX, mouseY, false);
        this.redraw();
    };
    PaintingUiComponent.prototype.canvasMouseUp = function (event_) {
        this.paint = false;
        this.clickDurationList.push(this.clickDurationCurrent);
        this.clickDurationCurrent = 0;
    };
    PaintingUiComponent.prototype.canvasMouseMove = function (event_) {
        if (this.paint) {
            var mouseX = event_.offsetX + (event_.offsetX * this.canvasPercent);
            var mouseY = event_.offsetY + (event_.offsetY * this.canvasPercent);
            this.addClick(mouseX, mouseY, true);
            this.redraw();
            this.clickDurationCurrent += 1;
        }
    };
    PaintingUiComponent.prototype.addClick = function (x, y, dragging) {
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
        //console.log(this.selectedColor);
        this.clickColor.push(this.curColor);
        this.clickSize.push(this.strokeSize);
    };
    PaintingUiComponent.prototype.redraw = function () {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height); // Clears the canvas
        this.context.lineJoin = "round";
        this.context.lineWidth = 10;
        //set bg image if it exist
        if (this.imageBg && !this.isFinalExport) {
            var ratio = void 0;
            var newWidth = void 0;
            var newHeight = void 0;
            var newX = 0;
            var newY = 0;
            if (this.imageBg.height > this.imageBg.width) {
                ratio = this.elementCanvas.nativeElement.height / this.imageBg.height;
                newWidth = this.imageBg.width * ratio;
                newHeight = this.imageBg.height * ratio;
                newX = (newWidth - this.elementCanvas.nativeElement.width) * (-0.5);
            }
            else {
                ratio = this.elementCanvas.nativeElement.width / this.imageBg.width;
                newWidth = this.imageBg.width * ratio;
                newHeight = this.imageBg.height * ratio;
                newY = (newHeight - this.elementCanvas.nativeElement.height) * (-0.5);
            }
            this.context.drawImage(this.imageBg, newX, newY, newWidth, newHeight);
        }
        for (var i = 0; i < this.clickX.length; i++) {
            this.context.beginPath();
            if (this.clickDrag[i] && i > 0) {
                this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
            }
            else {
                this.context.moveTo(this.clickX[i], this.clickY[i]);
            }
            this.context.lineTo(this.clickX[i], this.clickY[i]);
            this.context.closePath();
            this.context.strokeStyle = this.clickColor[i];
            this.context.lineWidth = this.clickSize[i];
            this.context.stroke();
        }
    };
    /*****************
     * DEALING with painting style
     *****************/
    PaintingUiComponent.prototype.changeColor = function (color_) {
        this.curColor = color_;
    };
    PaintingUiComponent.prototype.clear = function () {
        if (this.clickDurationList.length > 0) {
            var lastDuration = this.clickDurationList.pop();
            this.clickColor = this.clickColor.slice(0, this.clickColor.length - lastDuration - 1);
            this.clickX = this.clickX.slice(0, this.clickX.length - lastDuration - 1);
            this.clickY = this.clickY.slice(0, this.clickY.length - lastDuration - 1);
            this.clickDrag = this.clickDrag.slice(0, this.clickDrag.length - lastDuration - 1);
            this.clickSize = this.clickSize.slice(0, this.clickSize.length - lastDuration - 1);
            this.redraw();
        }
    };
    PaintingUiComponent.prototype.destroyReply = function () {
        this.reply = -1;
        this.onDestroyReply.emit(-1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaintingUiComponent.prototype, "canvasKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PaintingUiComponent.prototype, "urlBgPicture", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PaintingUiComponent.prototype, "reply", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PaintingUiComponent.prototype, "onDestroyReply", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('paintingCanvas'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], PaintingUiComponent.prototype, "elementCanvas", void 0);
    PaintingUiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-painting-ui',
            template: __webpack_require__(/*! ./painting-ui.component.html */ "./src/app/components/painting-ui/painting-ui.component.html"),
            styles: [__webpack_require__(/*! ./painting-ui.component.css */ "./src/app/components/painting-ui/painting-ui.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"], src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_3__["ChanWebService"],
            ngx_device_detector__WEBPACK_IMPORTED_MODULE_4__["DeviceDetectorService"]])
    ], PaintingUiComponent);
    return PaintingUiComponent;
}());



/***/ }),

/***/ "./src/app/components/phone-poster/phone-poster.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/phone-poster/phone-poster.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container{\n    position: absolute;\n    margin: auto;\n    max-width: 650px;\n    left: 0;\n    right: 0;\n    height: 100%;\n}"

/***/ }),

/***/ "./src/app/components/phone-poster/phone-poster.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/phone-poster/phone-poster.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-posting-ui id=\"container\"  *ngIf=\"this.playerModel != null\" [isPhonePosting]=\"true\" [canvasKey]=\"canvasKey\" ></app-posting-ui>"

/***/ }),

/***/ "./src/app/components/phone-poster/phone-poster.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/phone-poster/phone-poster.component.ts ***!
  \*******************************************************************/
/*! exports provided: PhonePosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhonePosterComponent", function() { return PhonePosterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_player_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/offline.service */ "./src/app/services/offline.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhonePosterComponent = /** @class */ (function () {
    function PhonePosterComponent(offlineService, route) {
        var _this = this;
        this.offlineService = offlineService;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.playerId = params['id'];
            _this.playerKey = params['key'];
            _this.canvasKey = params['canvas'];
            //set the player model, at it to offline
            _this.playerModel = new src_app_models_player_model__WEBPACK_IMPORTED_MODULE_2__["PlayerModel"]();
            _this.playerModel.id = Number(_this.playerId);
            _this.playerModel.player_key = _this.playerKey;
            _this.offlineService.savePlayer(_this.playerModel);
        });
    }
    PhonePosterComponent.prototype.ngOnInit = function () {
    };
    PhonePosterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone-poster',
            template: __webpack_require__(/*! ./phone-poster.component.html */ "./src/app/components/phone-poster/phone-poster.component.html"),
            styles: [__webpack_require__(/*! ./phone-poster.component.css */ "./src/app/components/phone-poster/phone-poster.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PhonePosterComponent);
    return PhonePosterComponent;
}());



/***/ }),

/***/ "./src/app/components/pin-post-ui/pin-post-ui.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/pin-post-ui/pin-post-ui.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .img-pin img, .img-pin video, .img-pin iframe, .img-pin audio {\n    max-width: 300px;\n    max-height: 300px;\n}"

/***/ }),

/***/ "./src/app/components/pin-post-ui/pin-post-ui.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/pin-post-ui/pin-post-ui.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"postModel && postModel.url != undefined\">\n<app-media-display class=\"img-pin\" [url]=\"postModel.url\" ></app-media-display>\n<!--button type=\"button\" class=\"btn btn-danger\" (click) = \"closePost()\" >Close</button-->\n</div>"

/***/ }),

/***/ "./src/app/components/pin-post-ui/pin-post-ui.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/pin-post-ui/pin-post-ui.component.ts ***!
  \*****************************************************************/
/*! exports provided: PinPostUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinPostUiComponent", function() { return PinPostUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/post.model */ "./src/app/models/post.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PinPostUiComponent = /** @class */ (function () {
    function PinPostUiComponent() {
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PinPostUiComponent.prototype.ngOnInit = function () {
    };
    PinPostUiComponent.prototype.ngOnChanges = function (changes) {
        if (changes != null && changes.postModel != null) {
            this.postModel = changes.postModel.currentValue;
        }
    };
    PinPostUiComponent.prototype.closePost = function () {
        this.close.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_post_model__WEBPACK_IMPORTED_MODULE_1__["PostModel"])
    ], PinPostUiComponent.prototype, "postModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PinPostUiComponent.prototype, "close", void 0);
    PinPostUiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pin-post-ui',
            template: __webpack_require__(/*! ./pin-post-ui.component.html */ "./src/app/components/pin-post-ui/pin-post-ui.component.html"),
            styles: [__webpack_require__(/*! ./pin-post-ui.component.css */ "./src/app/components/pin-post-ui/pin-post-ui.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PinPostUiComponent);
    return PinPostUiComponent;
}());



/***/ }),

/***/ "./src/app/components/player-ui/player-ui.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/player-ui/player-ui.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-viewer-ui-message{\n    position:relative;\n    /*max-width: 650px;*/\n    left: 0;\n    right: 0;\n    margin: auto;\n    padding : 10px;\n    margin-bottom : 18px;\n    background: rgb(247, 189, 225);\n    border-style: solid;\n    border-width: 1px;\n    border-color: #c79eb7;\n    border-radius: 5px;\n    height: 95%;\n    width: 100%;\n    overflow-y: auto;\n  }\n\n.spoil{\n    width: 100%;\n    background-color: rgb(71, 71, 71);\n    color: rgb(71, 71, 71);\n}"

/***/ }),

/***/ "./src/app/components/player-ui/player-ui.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/player-ui/player-ui.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"post-viewer-ui-message\">\n  \n  <div><b> You are 👺 #{{gameDataModel.player.id}}  <span *ngIf=\"gameDataModel.player.is_admin\">🧠</span>\n    💉 HP: {{gameDataModel.player.hp}}% </b></div>\n  <div><b>token 🗝️ <span class=\"spoil\">{{gameDataModel.player.player_key}}</span></b></div>\n  <i>If you want to play on the new machine, just copy and past this ID and Token and enter them when you reconnect.</i>\n  <br/>\n  <div>🎒 inventory, the items you own</div>\n  ------------------------------------------<br/>\n  <div *ngFor=\"let item of gameDataModel.itemsPlayer\">\n    <b>💍 {{item.name}}</b>\n      quantity: {{item.value}}<br/>\n      action: {{item.action}}<br/>\n      description: {{item.description}}<br/>\n  </div>\n  ------------------------------------------<br/>\n\n  <button type=\"button\" class=\"btn btn-danger\" (click) = \"close()\" >Close</button>\n</div>"

/***/ }),

/***/ "./src/app/components/player-ui/player-ui.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/player-ui/player-ui.component.ts ***!
  \*************************************************************/
/*! exports provided: PlayerUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerUiComponent", function() { return PlayerUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_game_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/game-data.model */ "./src/app/models/game-data.model.ts");
/* harmony import */ var src_app_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerUiComponent = /** @class */ (function () {
    function PlayerUiComponent(gameUIServiceService) {
        this.gameUIServiceService = gameUIServiceService;
    }
    PlayerUiComponent.prototype.ngOnInit = function () {
    };
    PlayerUiComponent.prototype.close = function () {
        this.gameUIServiceService.changeState(src_app_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__["GameUIServiceService"].STATE_GAME_RUNNING);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_game_data_model__WEBPACK_IMPORTED_MODULE_1__["GameDataModel"])
    ], PlayerUiComponent.prototype, "gameDataModel", void 0);
    PlayerUiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-ui',
            template: __webpack_require__(/*! ./player-ui.component.html */ "./src/app/components/player-ui/player-ui.component.html"),
            styles: [__webpack_require__(/*! ./player-ui.component.css */ "./src/app/components/player-ui/player-ui.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__["GameUIServiceService"]])
    ], PlayerUiComponent);
    return PlayerUiComponent;
}());



/***/ }),

/***/ "./src/app/components/post-viewer-ui/post-viewer-ui.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/post-viewer-ui/post-viewer-ui.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-viewer-ui-message{\n    position:relative;\n    /*max-width: 650px;*/\n    left: 0;\n    right: 0;\n    margin: auto;\n    padding : 10px;\n    margin-bottom : 18px;\n    background: rgb(189, 198, 247);\n    border-style: solid;\n    border-width: 1px;\n    border-color: #a99ec7;\n    border-radius: 5px;\n    height: 95%;\n    width: 100%;\n    overflow-y: auto;\n  }\n\ndiv {\n    margin-bottom: 8px;\n}\n\n#message-ascii {\n    max-width: 650px;\n    font-family: monospace;\n    white-space: pre;\n}\n\n::ng-deep .img-preview img, .img-preview video, .img-preview iframe, .img-preview audio {\n    max-width: 600px;\n    max-height: 400px;\n}\n\nbutton{\n    margin: 1px 1px 4px 1px;\n  }"

/***/ }),

/***/ "./src/app/components/post-viewer-ui/post-viewer-ui.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/post-viewer-ui/post-viewer-ui.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"post-viewer-ui-message\" *ngIf=\"postModel && postModel.url != undefined\">\n\n  <div *ngIf=\"(!postModelList.length  || postModelList.length == 0) && postModel != null\">\n    <a href=\"#\" onclick=\"return false;\" (click)=\"reply(postModel)\">>>{{postModel.id}}</a> <span *ngIf=\"postModel.is_canon\">Δ</span>, by <i>#{{postModel.player_id}}</i><br/>\n    <div *ngIf=\"postModel.reply >= 0\" ><i>Reply to >>{{ postModel.reply }}</i></div>\n    <div id=\"message-ascii \">{{postModel.message}}</div>\n    <br/>\n    <!--img id=\"img-preview\" [src]=\"imgValue\"/-->\n    <app-media-display *ngIf=\"postModel != null\" class=\"img-preview\" [url]=\"postModel.url\" ></app-media-display>\n    <br/>\n    URL:<a placeholder=\"Your file url\" [href]=\"postModel.url\"> {{postModel.url}} </a><br/>\n    <i>To report content, write to monsieur.krunch@gmail.com, mentionning the ID of the post.</i><br/>\n    <button type=\"button\" class=\"btn btn-secondary\"  (click) = \"pinPost(postModel)\" >Pin the post</button><button type=\"button\" class=\"btn btn-danger\" (click) = \"closePost()\" >Close</button><br/>\n    -----------------------------------------------------<br/>\n    <div>\n      <button *ngIf=\"canDelete()\" type=\"button\" class=\"btn\" (click) = \"deletePost(postModel)\" >Delete the post 🗑️</button>\n      <button *ngIf=\"isAdmin()\"type=\"button\" class=\"btn\" (click) = \"canonPost(postModel.id,postModel.map_key)\" >Active or Disactive canon status Δ</button>\n      <button *ngIf=\"isAdmin()\"type=\"button\" class=\"btn\" (click) = \"setPostUrlToFile(postModel.id)\" >Transform URL to File 🧙</button>\n      <!--button type=\"button\" class=\"btn\" (click) = \"banPost()\" >Ban user 🔨</button-->\n    </div>\n  </div>\n\n   <div *ngFor=\"let post of postModelList\">\n    <a href=\"#\" onclick=\"return false;\" (click)=\"reply(post)\">>>{{post.id}}</a> <span *ngIf=\"post.is_canon\">Δ</span> by <i>#{{post.player_id}}</i><br/>\n    <div *ngIf=\"post.reply >= 0\" ><i>Reply to >>{{ post.reply }}</i></div>\n    <div id=\"message-ascii \">{{post.message}}</div>\n    <br/>\n    <app-media-display *ngIf=\"post.url != null && post.url != '' \" class=\"img-preview\" [url]=\"post.url\" ></app-media-display>\n    <br/>\n    URL:<a placeholder=\"Your file url\" [href]=\"post.url\"> {{post.url}} </a><br/>\n    <i>To report content, write to monsieur.krunch@gmail.com, mentionning the ID of the post.</i><br/>\n    <button type=\"button\"  class=\"btn btn-secondary\" (click) = \"pinPost(post)\" >Pin the post</button> <button type=\"button\" class=\"btn btn-danger\" (click) = \"closePost()\" >Close</button><br/>\n    -----------------------------------------------------<br/>\n    <div>\n        <button *ngIf=\"canDelete()\" type=\"button\" class=\"btn\" (click) = \"deletePost(post)\" >Delete the post 🗑️</button>\n        <button *ngIf=\"isAdmin()\"type=\"button\" class=\"btn\" (click) = \"canonPost(post.id,post.map_key)\" >Active or Disactive canon status Δ</button>\n        <button *ngIf=\"isAdmin()\"type=\"button\" class=\"btn\" (click) = \"setPostUrlToFile(post.id)\" >Transform URL to File 🧙</button>\n        <!--button type=\"button\" class=\"btn\" (click) = \"banPost()\" >Ban user 🔨</button-->\n      </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/post-viewer-ui/post-viewer-ui.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/post-viewer-ui/post-viewer-ui.component.ts ***!
  \***********************************************************************/
/*! exports provided: PostViewerUiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostViewerUiComponent", function() { return PostViewerUiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/post.model */ "./src/app/models/post.model.ts");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
/* harmony import */ var src_app_utils_urlParser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/utils/urlParser */ "./src/app/utils/urlParser.ts");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
/* harmony import */ var _models_game_data_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/game-data.model */ "./src/app/models/game-data.model.ts");
/* harmony import */ var _interfaces_player_interface_player_interface_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../interfaces/player-interface/player-interface.component */ "./src/app/interfaces/player-interface/player-interface.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PostViewerUiComponent = /** @class */ (function (_super) {
    __extends(PostViewerUiComponent, _super);
    function PostViewerUiComponent(gameUIServiceService, chanWebService) {
        var _this = _super.call(this) || this;
        _this.gameUIServiceService = gameUIServiceService;
        _this.chanWebService = chanWebService;
        _this.pin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.onReply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.postModelList = [];
        return _this;
    }
    PostViewerUiComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.postModel) {
            this.imgValue = new src_app_utils_urlParser__WEBPACK_IMPORTED_MODULE_3__["UrlParser"](this.postModel.url).getImage();
            this.chanWebService.getReplyPostList(this.postModel.id).subscribe(function (data_) {
                console.log(data_);
                if (data_.result) {
                    if (data_.result.length && data_.result.length > 0) {
                        if (data_.result[0].id != null)
                            _this.postModelList = data_.result;
                    }
                }
            });
        }
    };
    PostViewerUiComponent.prototype.ngOnChanges = function (changes) {
        if (changes != null && changes.postModel != null) {
            this.postModel = changes.postModel.currentValue;
            if (this.postModel != null || this.postModel != undefined)
                this.imgValue = new src_app_utils_urlParser__WEBPACK_IMPORTED_MODULE_3__["UrlParser"](this.postModel.url).getImage();
        }
    };
    PostViewerUiComponent.prototype.closePost = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__["GameUIServiceService"].STATE_GAME_RUNNING);
    };
    PostViewerUiComponent.prototype.pinPost = function (postModel_) {
        this.pin.emit(postModel_);
    };
    PostViewerUiComponent.prototype.deletePost = function (postModel_) {
        var _this = this;
        this.postToDelete = postModel_;
        console.log("this.postToDelete:" + this.postToDelete);
        this.chanWebService.deletePost(postModel_.id, postModel_.map_key).subscribe(
        //Data success
        function (data) {
            _this.gameUIServiceService.deletePost(_this.postToDelete);
            _this.gameUIServiceService.forceWS();
            _this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__["GameUIServiceService"].STATE_GAME_RUNNING);
        });
    };
    PostViewerUiComponent.prototype.canonPost = function (id_, thread_) {
        var _this = this;
        this.chanWebService.canonPost(id_, thread_).subscribe(
        //Data success
        function (data) {
            _this.gameUIServiceService.forceWS();
            _this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__["GameUIServiceService"].STATE_GAME_RUNNING);
        });
    };
    PostViewerUiComponent.prototype.banPost = function () {
    };
    PostViewerUiComponent.prototype.setPostUrlToFile = function (id_) {
        this.chanWebService.setPostUrlToFile(id_).subscribe(
        //Data success
        function (data) {
            alert(data);
        });
    };
    PostViewerUiComponent.prototype.reply = function (postModel_) {
        console.log(postModel_.id);
        this.onReply.emit(postModel_.id);
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__["GameUIServiceService"].STATE_GAME_RUNNING);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_post_model__WEBPACK_IMPORTED_MODULE_1__["PostModel"])
    ], PostViewerUiComponent.prototype, "postModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_game_data_model__WEBPACK_IMPORTED_MODULE_5__["GameDataModel"])
    ], PostViewerUiComponent.prototype, "gameData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PostViewerUiComponent.prototype, "pin", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PostViewerUiComponent.prototype, "onReply", void 0);
    PostViewerUiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-viewer-ui',
            template: __webpack_require__(/*! ./post-viewer-ui.component.html */ "./src/app/components/post-viewer-ui/post-viewer-ui.component.html"),
            styles: [__webpack_require__(/*! ./post-viewer-ui.component.css */ "./src/app/components/post-viewer-ui/post-viewer-ui.component.css")]
        }),
        __metadata("design:paramtypes", [_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_2__["GameUIServiceService"], src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_4__["ChanWebService"]])
    ], PostViewerUiComponent);
    return PostViewerUiComponent;
}(_interfaces_player_interface_player_interface_component__WEBPACK_IMPORTED_MODULE_6__["PlayerInterfaceComponent"]));



/***/ }),

/***/ "./src/app/components/posting-ui/posting-ui.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/posting-ui/posting-ui.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".post-ui-message{\n    position:relative;\n    max-width: 650px;\n    left: 0;\n    right: 0;\n    margin: auto;\n\n    padding : 10px;\n    margin-bottom : 18px;\n    background-color: rgb(189, 198, 247);\n    border-style: solid;\n    border-width: 1px;\n    border-color: #a99ec7;\n    border-radius: 5px;\n\n    height: 100%;\n    overflow-y: auto;\n  }\n\ndiv {\n    margin-bottom: 8px;\n}\n\ntextarea\n{\n  width: 100%;\n  margin: 0;\n}\n\n.post-message {\n    padding : 10px;\n    margin-bottom : 18px;\n    background: rgb(228, 221, 221);\n    border-style: solid;\n    border-width: 1px;\n    border-color: rgb(131, 123, 123);\n    border-radius: 5px;\n}\n\n.img-preview{\n    max-width: 200px;\n    max-height: 200px;\n}\n\n.post-torrent-info{\n    font-family: 'Courier New', Courier, monospace;\n    font-size: small;\n    padding : 8px;\n    color: white;\n    background:rgb(70, 61, 56);\n    border-radius: 5px;\n}\n\n.post-message img {\n    max-width: 650px;\n    width: 100%;\n    height: auto;\n}\n\n.post-message video {\n    max-width: 650px;\n    width: 100%;\n    height: auto;\n}\n\n.post-message audio {\n    max-width: 650px;\n    width: 100%;\n}\n\nbutton{\n    margin: 1px 1px 4px 1px;\n  }"

/***/ }),

/***/ "./src/app/components/posting-ui/posting-ui.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/posting-ui/posting-ui.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class= \"post-ui-message\">\n\n    <div *ngIf=\"!isLoading && !postingFinished\">\n    <!--  {{canvasKey}}<br/>\n    <Name: <br/>\n    <input id=\"message-name\" placeholder=\"Anonymous\" [(ngModel)]=\"postModel.name\" ><br/>-->\n    <div *ngIf=\"reply >= 0\" ><i>reply to >>{{ reply }}</i>  <span (click)=\"destroyReply()\"> 🗑️</span></div>\n    Message: <br/>\n    <textarea id=\"message-text\" placeholder=\"Your text\" [(ngModel)]=\"postModel.message\" ></textarea>\n    <br/>\n\n    <div *ngIf=\"canUpload()\">\n      <input  #messageHost id=\"message-host\" type=\"checkbox\"  [checked]=\"hostFile\" (change)=\"changeHost(messageHost.checked)\" >Host on chan<br/>\n    </div>\n    <img *ngIf=\"postModel.url != null && !hostFile\" class=\"img-preview\" [src]=\"urlParse.setUrl(postModel.url).getImage()\"><br/>\n    <img *ngIf=\"fileBase64Url != null && hostFile\" class=\"img-preview\" [src]=\"fileBase64Url\"><br/>\n    \n\n    <div *ngIf=\"!hostFile && !isPhonePosting\">\n    File URL: <br/>\n    <input id=\"file-url\" type=\"url\" placeholder=\"Your file url\" [(ngModel)]=\"postModel.url\" ><br/>\n    </div>\n    \n    <div *ngIf=\"hostFile || isPhonePosting\">\n    File From the computer: <br/>\n    <input #file id=\"file\" name=\"file\" type=\"file\" accept='image/*' (change)=\"preview(file.files)\" /><br/>\n\n    <a href=\"{{getPhoneLink()}}\" target=\"blank_\">Open phone posting link!</a><br/>\n    <qrcode [qrdata]=\"getPhoneLink()\" [size]=\"256\" [level]=\"'M'\"></qrcode><br/>\n\n    </div>\n\n    <!--Is the post NSFW: <input type=\"checkbox\" [(ngModel)]=\"postModel.nsfw\"><br/-->\n    <button type=\"submit\" type=\"button\" class=\"btn btn-primary\" (click) = \"sendPost()\" >Post</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click) = \"cancelPost()\" >Cancel</button>\n\n  </div>\n\n  <div *ngIf=\"isLoading\">\n    Posting in progress..\n    <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped bg-primary\" role=\"progressbar\" style=\"width: 100%; height: 100%;\"\n        aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n    </div>\n  </div>\n\n  <div *ngIf=\"!isLoading && postingFinished\">\n    Your message has been posted! thanks for your contribution!\n  </div>\n\n  \n\n </div>\n"

/***/ }),

/***/ "./src/app/components/posting-ui/posting-ui.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/posting-ui/posting-ui.component.ts ***!
  \***************************************************************/
/*! exports provided: PostingUIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostingUIComponent", function() { return PostingUIComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/post.model */ "./src/app/models/post.model.ts");
/* harmony import */ var src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/chan-web.service */ "./src/app/services/chan-web.service.ts");
/* harmony import */ var src_app_utils_urlParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/utils/urlParser */ "./src/app/utils/urlParser.ts");
/* harmony import */ var _interfaces_player_interface_player_interface_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../interfaces/player-interface/player-interface.component */ "./src/app/interfaces/player-interface/player-interface.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/offline.service */ "./src/app/services/offline.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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










var PostingUIComponent = /** @class */ (function (_super) {
    __extends(PostingUIComponent, _super);
    function PostingUIComponent(gameUIServiceService, chanWebService, router, offlineService, document) {
        var _this = _super.call(this) || this;
        _this.gameUIServiceService = gameUIServiceService;
        _this.chanWebService = chanWebService;
        _this.router = router;
        _this.offlineService = offlineService;
        _this.document = document;
        _this.onDestroyReply = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.isLoading = false;
        _this.postingFinished = false;
        _this.hostFile = false;
        return _this;
    }
    PostingUIComponent.prototype.ngOnInit = function () {
        this.postModel = new _models_post_model__WEBPACK_IMPORTED_MODULE_2__["PostModel"]();
        this.urlParse = new src_app_utils_urlParser__WEBPACK_IMPORTED_MODULE_4__["UrlParser"](this.postModel.url);
        this.postModel.canvas_key = this.canvasKey;
        this.postModel.reply = this.reply;
    };
    PostingUIComponent.prototype.ngOnChanges = function (changes) {
        if (this.postModel != null && changes.canvasKey != null)
            this.postModel.canvas_key = changes.canvasKey.currentValue;
        if (this.isPhonePosting)
            this.hostFile = true;
    };
    PostingUIComponent.prototype.changeHost = function (val_) {
        this.hostFile = val_;
    };
    PostingUIComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        var mimeType = files[0].type;
        if (mimeType.match(/image\/*/) == null) {
            alert("Only images are supported.");
            return;
        }
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            //console.log(reader.result.toString());
            _this.fileBase64Url = reader.result.toString();
        };
    };
    PostingUIComponent.prototype.sendPost = function () {
        var _this = this;
        //this.gameUIServiceService.sendPost(this.postModel);
        console.log(this.file);
        if (this.fileBase64Url == null && !this.postModel.url && !this.postModel.message) {
            alert("It's doesn't looks like a big post :( ");
            return;
        }
        this.isLoading = true;
        //Use this.
        if (this.hostFile) {
            //To host
            this.chanWebService.createAndUploadPaint(this.postModel, this.fileBase64Url).subscribe(
            //Data success
            function (data) {
                var postStuffResponse = data;
                if (postStuffResponse.ok) {
                    _this.destroyReply();
                    //console.log("result "+JSON.stringify( postStuffResponse));
                    _this.gameUIServiceService.forceWS();
                    _this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"].STATE_GAME_RUNNING);
                }
                _this.isLoading = false;
                _this.postingFinished = true;
            }, function (error) {
                console.log(JSON.stringify(error));
                _this.isLoading = false;
            });
        }
        else {
            //Not hosting
            this.chanWebService.createPost(this.postModel).subscribe(
            //Data success
            function (data) {
                var postStuffResponse = data;
                if (postStuffResponse.ok) {
                    //console.log("result "+JSON.stringify( postStuffResponse));
                    _this.destroyReply();
                    //We clean the fields
                    _this.postModel.url = "";
                    _this.postModel.message = "";
                    _this.gameUIServiceService.forceWS();
                    _this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"].STATE_GAME_RUNNING);
                }
                _this.isLoading = false;
                _this.postingFinished = true;
            }, function (error) {
                console.log(JSON.stringify(error));
                _this.isLoading = false;
            });
        }
    };
    PostingUIComponent.prototype.cancelPost = function () {
        this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"].STATE_GAME_RUNNING);
    };
    PostingUIComponent.prototype.getPhoneLink = function () {
        var playerModel = this.offlineService.getPlayerData();
        var phonePostingUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].clientUrl + "phone-poster/" + playerModel.id + "/" + playerModel.player_key + "/" + this.postModel.canvas_key;
        return phonePostingUrl;
    };
    PostingUIComponent.prototype.destroyReply = function () {
        console.log("destroyReply()");
        this.reply = -1;
        this.onDestroyReply.emit(-1);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PostingUIComponent.prototype, "canvasKey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], PostingUIComponent.prototype, "reply", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PostingUIComponent.prototype, "onDestroyReply", void 0);
    PostingUIComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posting-ui',
            template: __webpack_require__(/*! ./posting-ui.component.html */ "./src/app/components/posting-ui/posting-ui.component.html"),
            styles: [__webpack_require__(/*! ./posting-ui.component.css */ "./src/app/components/posting-ui/posting-ui.component.css")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DOCUMENT"])),
        __metadata("design:paramtypes", [_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_1__["GameUIServiceService"],
            src_app_services_chan_web_service__WEBPACK_IMPORTED_MODULE_3__["ChanWebService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            src_app_services_offline_service__WEBPACK_IMPORTED_MODULE_7__["OfflineService"],
            Document])
    ], PostingUIComponent);
    return PostingUIComponent;
}(_interfaces_player_interface_player_interface_component__WEBPACK_IMPORTED_MODULE_5__["PlayerInterfaceComponent"]));



/***/ }),

/***/ "./src/app/components/tile-edit/tile-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/tile-edit/tile-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".disable-select {\n    user-select: none; /* supported by Chrome and Opera */\n   -webkit-user-select: none; /* Safari */\n   -khtml-user-select: none; /* Konqueror HTML */\n   -moz-user-select: none; /* Firefox */\n   -ms-user-select: none; /* Internet Explorer/Edge */\n}"

/***/ }),

/***/ "./src/app/components/tile-edit/tile-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/tile-edit/tile-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"disable-select\" (click)=\"paint()\">{{tileDisplay}}</span>\n"

/***/ }),

/***/ "./src/app/components/tile-edit/tile-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/tile-edit/tile-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: TileEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileEditComponent", function() { return TileEditComponent; });
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

var TileEditComponent = /** @class */ (function () {
    function TileEditComponent() {
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.allTiles = [];
        this.tileDisplay = "";
    }
    TileEditComponent.prototype.ngOnInit = function () {
    };
    TileEditComponent.prototype.paint = function () {
        //this.tileValue = this.tileBrush;
        this.valueChange.emit({ x: this.x, y: this.y });
        //this.updateDisplay();
    };
    TileEditComponent.prototype.ngOnChanges = function () {
        this.updateDisplay();
    };
    TileEditComponent.prototype.updateDisplay = function () {
        var _this = this;
        if (this.allTiles != null) {
            this.allTiles.forEach(function (tile) {
                if (tile.value == _this.tileValue) {
                    _this.tileDisplay = tile.display;
                    return;
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TileEditComponent.prototype, "tileValue", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TileEditComponent.prototype, "tileBrush", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TileEditComponent.prototype, "x", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TileEditComponent.prototype, "y", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TileEditComponent.prototype, "valueChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TileEditComponent.prototype, "allTiles", void 0);
    TileEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tile-edit',
            template: __webpack_require__(/*! ./tile-edit.component.html */ "./src/app/components/tile-edit/tile-edit.component.html"),
            styles: [__webpack_require__(/*! ./tile-edit.component.css */ "./src/app/components/tile-edit/tile-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TileEditComponent);
    return TileEditComponent;
}());



/***/ }),

/***/ "./src/app/interfaces/player-interface/player-interface.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/interfaces/player-interface/player-interface.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interfaces/player-interface/player-interface.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/interfaces/player-interface/player-interface.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/interfaces/player-interface/player-interface.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/interfaces/player-interface/player-interface.component.ts ***!
  \***************************************************************************/
/*! exports provided: PlayerInterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerInterfaceComponent", function() { return PlayerInterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _models_game_data_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/game-data.model */ "./src/app/models/game-data.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerInterfaceComponent = /** @class */ (function () {
    function PlayerInterfaceComponent() {
        this.gameDataModel = new _models_game_data_model__WEBPACK_IMPORTED_MODULE_2__["GameDataModel"]();
    }
    PlayerInterfaceComponent.prototype.ngOnInit = function () {
        if (this.gameDataModel == null)
            this.gameDataModel = new _models_game_data_model__WEBPACK_IMPORTED_MODULE_2__["GameDataModel"]();
    };
    //test
    PlayerInterfaceComponent.prototype.canDelete = function () {
        if (this.gameDataModel.player.is_admin)
            return true;
        for (var _i = 0, _a = this.gameDataModel.itemsPlayer; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.action.toLowerCase().indexOf(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEM_KEY_DELETE_SPONGE) >= 0)
                return true;
        }
        return false;
    };
    PlayerInterfaceComponent.prototype.canFav = function () {
        if (this.gameDataModel.player.is_admin)
            return true;
        for (var _i = 0, _a = this.gameDataModel.itemsPlayer; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.action.toLowerCase().indexOf(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEM_KEY_VARNISH) >= 0)
                return true;
        }
        return false;
    };
    PlayerInterfaceComponent.prototype.canUpload = function () {
        if (this.gameDataModel.player.is_admin || this.isPhonePosting)
            return true;
        for (var _i = 0, _a = this.gameDataModel.itemsPlayer; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.action.toLowerCase().indexOf(src_app_utils_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEM_KEY_UPLOAD_RING) >= 0)
                return true;
        }
        return false;
    };
    PlayerInterfaceComponent.prototype.isAdmin = function () {
        if (this.gameDataModel.player.is_admin)
            return true;
        return false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_game_data_model__WEBPACK_IMPORTED_MODULE_2__["GameDataModel"])
    ], PlayerInterfaceComponent.prototype, "gameDataModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PlayerInterfaceComponent.prototype, "isPhonePosting", void 0);
    PlayerInterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-interface',
            template: __webpack_require__(/*! ./player-interface.component.html */ "./src/app/interfaces/player-interface/player-interface.component.html"),
            styles: [__webpack_require__(/*! ./player-interface.component.css */ "./src/app/interfaces/player-interface/player-interface.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlayerInterfaceComponent);
    return PlayerInterfaceComponent;
}());



/***/ }),

/***/ "./src/app/models/action.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/action.model.ts ***!
  \****************************************/
/*! exports provided: ActionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionModel", function() { return ActionModel; });
var ActionModel = /** @class */ (function () {
    function ActionModel() {
    }
    return ActionModel;
}());



/***/ }),

/***/ "./src/app/models/config.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/config.model.ts ***!
  \****************************************/
/*! exports provided: ConfigModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModel", function() { return ConfigModel; });
var ConfigModel = /** @class */ (function () {
    function ConfigModel() {
    }
    return ConfigModel;
}());



/***/ }),

/***/ "./src/app/models/game-data.model.ts":
/*!*******************************************!*\
  !*** ./src/app/models/game-data.model.ts ***!
  \*******************************************/
/*! exports provided: GameDataModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDataModel", function() { return GameDataModel; });
/* harmony import */ var _player_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.model */ "./src/app/models/player.model.ts");

var GameDataModel = /** @class */ (function () {
    function GameDataModel() {
        this.player = new _player_model__WEBPACK_IMPORTED_MODULE_0__["PlayerModel"]();
        this.itemsPlayer = [];
    }
    return GameDataModel;
}());



/***/ }),

/***/ "./src/app/models/interaction-model.ts":
/*!*********************************************!*\
  !*** ./src/app/models/interaction-model.ts ***!
  \*********************************************/
/*! exports provided: InteractionModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractionModel", function() { return InteractionModel; });
var InteractionModel = /** @class */ (function () {
    function InteractionModel() {
    }
    Object.defineProperty(InteractionModel, "TYPE_NONE", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_CANVAS_FULL", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_CANVAS_VIRGIN", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_CLIMB_LADDER", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_OPEN_DOOR", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_GET_ITEM", {
        get: function () { return 5; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_PASS_GATE", {
        get: function () { return 6; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_PANEL", {
        get: function () { return 7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_CANVAS_TO_GRAFF", {
        get: function () { return 8; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InteractionModel, "TYPE_AD", {
        get: function () { return 9; },
        enumerable: true,
        configurable: true
    });
    return InteractionModel;
}());



/***/ }),

/***/ "./src/app/models/player.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/player.model.ts ***!
  \****************************************/
/*! exports provided: PlayerModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerModel", function() { return PlayerModel; });
var PlayerModel = /** @class */ (function () {
    function PlayerModel() {
    }
    return PlayerModel;
}());



/***/ }),

/***/ "./src/app/models/post.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/post.model.ts ***!
  \**************************************/
/*! exports provided: PostModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostModel", function() { return PostModel; });
var PostModel = /** @class */ (function () {
    function PostModel() {
        this.map_key = "";
        this.message = "";
        this.url = "";
        this.preview = "";
        this.nsfw = false;
        this.graffiti = false;
        this.is_canon = false;
        this.was_deleted = false;
    }
    return PostModel;
}());



/***/ }),

/***/ "./src/app/motor/canvasPlane.ts":
/*!**************************************!*\
  !*** ./src/app/motor/canvasPlane.ts ***!
  \**************************************/
/*! exports provided: CanvasPlane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasPlane", function() { return CanvasPlane; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");
/* harmony import */ var _models_post_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/post.model */ "./src/app/models/post.model.ts");
/* harmony import */ var _utils_urlParser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/urlParser */ "./src/app/utils/urlParser.ts");





var CanvasPlane = /** @class */ (function () {
    function CanvasPlane(objType_, dictKey, size, x, y, z, dir) {
        this.objType = "canvas";
        this.isVirgin = true;
        this.font_size = 70;
        this.font = "bold " + this.font_size + "px Arial";
        this.canvasScale = 900;
        //Manage diff percentage of size
        this.objType = objType_;
        this.sizeCanvas = size;
        var scaling = (objType_ === "canvas") ? 0.9 : 1;
        this.sizeCanvas = this.sizeCanvas * scaling;
        this.dictKey = this.objType + "_" + dictKey + "_" + dir;
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_1__["Game"].getInstance();
        this.mapInstance = _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"].getInstance();
        this.planeMesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreatePlane(this.dictKey, { size: this.sizeCanvas }, this.gameInstance.scene);
        this.planeMesh.position.y = (size * 0.5) + y;
        if (this.objType == "canvas") {
            this.mapInstance.registerNewCanvas(this.dictKey, this);
        }
        else {
            this.mapInstance.registerNewAd(this.dictKey, this);
        }
        //Determine the orientation of the canvas
        //let dir = this.mapInstance.getCanvasOrientation( this.tileCoordonates[0], this.tileCoordonates[1]);
        //console.log("TILE DIR= "+dir);
        var canvasX;
        var canvasY;
        var canvasZ;
        var canvasAngle;
        var gapToTheWall = 0.1;
        /*
        canvasX = x;
        canvasY = (size * -0.5) - (size * 0.1) + y;*/
        switch (dir) {
            case this.mapInstance.DIR_N:
                canvasX = x;
                canvasZ = (size * -0.5) - gapToTheWall + z;
                canvasAngle = 0;
                break;
            case this.mapInstance.DIR_E:
                canvasX = (size * -0.5) - gapToTheWall + x;
                canvasZ = z;
                canvasAngle = (Math.PI / 180) * 90;
                break;
            case this.mapInstance.DIR_S:
                canvasX = x;
                canvasZ = (size * 0.5) + gapToTheWall + z;
                canvasAngle = (Math.PI / 180) * 180;
                break;
            case this.mapInstance.DIR_W:
                canvasX = (size * 0.5) + gapToTheWall + x;
                canvasZ = z;
                canvasAngle = (Math.PI / 180) * 270;
                break;
        }
        this.planeMesh.position.x = canvasX;
        this.planeMesh.position.z = canvasZ;
        this.planeMesh.rotate(BABYLON.Axis.Y, canvasAngle, BABYLON.Space.WORLD);
        var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matCanvas", this.gameInstance.scene);
        mat.alpha = 0;
        this.planeMesh.material = mat;
        this.planeMesh.visibility = 0;
        this.planeMesh.material.freeze();
        this.planeMesh.freezeWorldMatrix();
        this.postModel = new _models_post_model__WEBPACK_IMPORTED_MODULE_3__["PostModel"]();
        this.postModel.canvas_key = this.dictKey;
    }
    /*
    private displayUI: GUI.Rectangle;
    private uiAdvancedTexture: GUI.AdvancedDynamicTexture;
    private label : GUI.TextBlock;*/
    CanvasPlane.prototype.setPostData = function (postModel_) {
        var _this = this;
        this.initTextureObject();
        /* if(postModel_.graffiti) {
             this.postModelGraffiti = postModel_;
         } else {*/
        this.postModel = postModel_;
        //}
        var postImageUrl = this.postModel.url;
        if (this.postModel.preview == null || this.postModel.preview.length === 0) {
            postImageUrl = new _utils_urlParser__WEBPACK_IMPORTED_MODULE_4__["UrlParser"](postModel_.url).getImage();
        }
        else {
            postImageUrl = this.postModel.preview;
        }
        //Launch picture loading
        if (postImageUrl.length > 0) {
            if (postModel_.graffiti) {
                this.postImageGraffiti = new Image();
                this.postImageGraffiti.crossOrigin = "anonymous";
                this.postImageGraffiti.src = postImageUrl;
                this.postImageGraffiti.onload = function (event_) {
                    _this.imgLoaded();
                };
                this.postImageGraffiti.onerror = function (event_) {
                    _this.textureNonDynamic = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"]("./assets/textures/404.png", _this.gameInstance.scene);
                    _this.mat.diffuseTexture = _this.textureNonDynamic;
                    _this.mat.diffuseTexture.hasAlpha = true;
                    _this.planeMesh.material = _this.mat;
                    _this.planeMesh.material.freeze();
                };
            }
            else {
                this.postImage = new Image();
                this.postImage.crossOrigin = "anonymous";
                this.postImage.src = postImageUrl;
                this.postImage.onload = function (event_) {
                    _this.imgLoaded();
                };
                this.postImage.onerror = function (event_) {
                    _this.textureNonDynamic = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"]("./assets/textures/404.png", _this.gameInstance.scene);
                    _this.mat.diffuseTexture = _this.textureNonDynamic;
                    _this.mat.diffuseTexture.hasAlpha = true;
                    _this.planeMesh.material = _this.mat;
                    _this.planeMesh.material.freeze();
                };
            }
        }
        else {
            //this.texture.drawText(this.postModel.message, null, null, this.font, "#ffffff", "#00000000", true);
            /*
            this.texture.drawText(this.postModel.message, null, this.canvasScale *0.5, this.font, "#ffffff", "#00000000", true);
            this.texture.drawText(this.postModel.message, null, (this.canvasScale *0.5) -4, this.font, "#000000", "#00000000", true);*/
        }
        this.planeMesh.visibility = 1;
        this.isVirgin = false;
        this.gameInstance.cleanLastMesh();
        //Add text as UI?
        if (this.postModel.message) {
            this.texture.drawText(this.postModel.message, null, this.canvasScale * 0.5, this.font, "#7F7F7F", "#00000000", true);
            this.texture.drawText(this.postModel.message, null, (this.canvasScale * 0.5) - 4, this.font, "#ffffff", "#00000000", true);
        }
    };
    //Dealing with post img loaded
    CanvasPlane.prototype.imgLoaded = function () {
        var ratio;
        var newWidth;
        var newHeight;
        var newX = 0;
        var newY = 0;
        if (this.postImage != null) {
            if (this.postImage.height > this.postImage.width) {
                ratio = (this.objType === "canvas") ? this.canvasScale / this.postImage.height : this.canvasScale / this.postImage.width;
                newWidth = this.postImage.width * ratio;
                newHeight = this.postImage.height * ratio;
                newX = (newWidth - this.canvasScale) * (-0.5);
            }
            else {
                ratio = (this.objType === "canvas") ? this.canvasScale / this.postImage.width : this.canvasScale / this.postImage.height;
                newWidth = this.postImage.width * ratio;
                newHeight = this.postImage.height * ratio;
                newY = (newHeight - this.canvasScale) * (-0.5);
            }
            this.textureContext.drawImage(this.postImage, newX, newY, newWidth, newHeight);
        }
        //If graffiti
        if (this.postImageGraffiti != null) {
            ratio = this.canvasScale / this.postImageGraffiti.width;
            console.log("ratio= " + ratio);
            newWidth = this.postImageGraffiti.width * ratio;
            newHeight = this.postImageGraffiti.height * ratio;
            //newY = (newHeight - this.canvasScale) * (-0.5);
            this.textureContext.drawImage(this.postImageGraffiti, 0, 0, newWidth, newHeight);
        }
        if (this.postModel.url.toLocaleLowerCase().indexOf(".gif") > 0) {
            this.texture.drawText(".GIF", null, this.canvasScale * 0.5, this.font, "#000000", "#00000000", true);
            this.texture.drawText(".GIF", null, (this.canvasScale * 0.5) - 4, this.font, "#ffffff", "#00000000", true);
        }
        else if (new _utils_urlParser__WEBPACK_IMPORTED_MODULE_4__["UrlParser"](this.postModel.url).getUrlType() === _utils_urlParser__WEBPACK_IMPORTED_MODULE_4__["UrlParser"].TYPE_YOUTUBE) {
            this.texture.drawText(">VID", null, this.canvasScale * 0.5, this.font, "#000000", "#00000000", true);
            this.texture.drawText(">VID", null, (this.canvasScale * 0.5) - 4, this.font, "#ffffff", "#00000000", true);
        }
        else if (this.postModel.message) {
            this.texture.drawText(this.postModel.message, null, this.canvasScale * 0.5, this.font, "#7F7F7F", "#00000000", true);
            this.texture.drawText(this.postModel.message, null, (this.canvasScale * 0.5) - 4, this.font, "#ffffff", "#00000000", true);
        }
        /* else if(this.postModelGraffiti && this.postModelGraffiti.message) {
            this.texture.drawText(this.postModelGraffiti.message, null, this.canvasScale *0.5, this.font, "#7F7F7F", "#00000000", true);
            this.texture.drawText(this.postModelGraffiti.message, null, (this.canvasScale *0.5) -4, this.font, "#ffffff", "#00000000", true);

        }*/
        if (this.postModel.is_canon) {
            this.texture.drawText("Δ", (newX) + 8, (newY) + 80, this.font, "#000000", "#00000000", true);
            //mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
        }
        this.texture.update();
        this.planeMesh.material = this.mat;
        this.planeMesh.material.freeze();
    };
    CanvasPlane.prototype.initTextureObject = function () {
        this.planeMesh.material.unfreeze();
        if (this.mat == null) {
            this.mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("mat", this.gameInstance.scene);
            this.texture = new BABYLON.DynamicTexture("DynamicText", { width: this.canvasScale, height: this.canvasScale }, this.gameInstance.scene, false);
            this.texture.hasAlpha = true;
            this.textureContext = this.texture.getContext();
            this.mat.diffuseTexture = this.texture;
            this.planeMesh.material = this.mat;
        }
    };
    CanvasPlane.prototype.deletePostData = function () {
        //console.log("deletePostData= "+this.postModel.url+"; canvas_key: "+this.postModel.canvas_key);
        this.postModel = new _models_post_model__WEBPACK_IMPORTED_MODULE_3__["PostModel"]();
        this.postModel.canvas_key = this.dictKey;
        this.isVirgin = true;
        var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matCanvas", this.gameInstance.scene);
        mat.alpha = 0;
        this.planeMesh.material.unfreeze();
        this.planeMesh.material = mat;
        this.planeMesh.material.freeze();
    };
    CanvasPlane.prototype.setInterfaceVisible = function (val_) {
        /*
        //if(this.displayUI != null){
            
            //this.displayUI.isVisible = val_;
            if(this.postModel != null && this.postModel.message && this.uiAdvancedTexture != null){

                if(val_){

                    //this.uiAdvancedTexture.addControl(this.displayUI);
                    //this.uiAdvancedTexture.addControl(this.label);
                    this.displayUI.isVisible = true;
        
                } else {
                    
                    //this.uiAdvancedTexture.removeControl(this.displayUI);
                    //this.uiAdvancedTexture.removeControl(this.label);
                    this.displayUI.isVisible = false;
                  
                }
            }
        //}
        */
    };
    return CanvasPlane;
}());



/***/ }),

/***/ "./src/app/motor/door.ts":
/*!*******************************!*\
  !*** ./src/app/motor/door.ts ***!
  \*******************************/
/*! exports provided: Door */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Door", function() { return Door; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");



var Door = /** @class */ (function () {
    function Door(dictKey, size, x, y, z, secret_) {
        this.objType = "door";
        this.doorOpen = false;
        this.clooseDoorDelay = 600000;
        this.isSecret = false;
        this.sizeCanvas = size;
        this.isSecret = secret_;
        this.dictKey = this.objType + "_" + dictKey;
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_1__["Game"].getInstance();
        this.mapInstance = _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"].getInstance();
        this.closedY = size * 0.5 + y;
        this.openedY = -size * 0.5 + y;
        this.doorMesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox(this.dictKey, { size: this.sizeCanvas }, this.gameInstance.scene);
        this.doorMesh.checkCollisions = true;
        var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matBoxDoor", this.gameInstance.scene);
        if (!this.isSecret) {
            mat.diffuseColor = BABYLON.Color3.Green();
        }
        else {
            var textureBox = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"]("./assets/textures/concrete_text.jpg", this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
        }
        mat.freeze();
        this.doorMesh.material = mat;
        this.doorMesh.position.y = this.closedY + y;
        this.doorMesh.position.x = x;
        this.doorMesh.position.z = z;
        this.mapInstance.registerNewDoor(this.dictKey, this);
    }
    Door.prototype.openDoor = function () {
        this.doorOpen = true;
        this.updateDoor();
        /*
        this.closeDoorInterval = setInterval(() => {
            this.closeDoor();
            clearInterval( this.closeDoorInterval);
        }, this.clooseDoorDelay );*/
        this.doorMesh.dispose();
    };
    Door.prototype.closeDoor = function () {
        this.doorOpen = false;
        this.updateDoor();
    };
    Door.prototype.updateDoor = function () {
        console.log("open door   this.doorMesh.position.y=" + this.doorMesh.position.y);
        this.doorMesh.position.y = (this.doorOpen) ? this.openedY : this.closedY;
        console.log("open door   this.doorMesh.position.y=" + this.doorMesh.position.y);
    };
    return Door;
}());



/***/ }),

/***/ "./src/app/motor/game.ts":
/*!*******************************!*\
  !*** ./src/app/motor/game.ts ***!
  \*******************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Game", function() { return Game; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs-gui */ "./node_modules/babylonjs-gui/babylon.gui.min.js");
/* harmony import */ var babylonjs_gui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");
/* harmony import */ var _playerMotor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerMotor */ "./src/app/motor/playerMotor.ts");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
/* harmony import */ var _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/interaction-model */ "./src/app/models/interaction-model.ts");
/* harmony import */ var _gameUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gameUtils */ "./src/app/motor/gameUtils.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/helpers */ "./src/app/utils/helpers.ts");








var Game = /** @class */ (function () {
    function Game(canvasElement) {
        var _this = this;
        this.postListRequestDelay = 10000;
        //private postListRequestDelay : number = 60000;
        this.mapChanging = false;
        this.mapKey = "";
        this.clientUrl = "";
        this.mapKeyOld = "";
        this.activateJoystick = false;
        this.interactionDelay = 18;
        this.interactionTimer = 0;
        this.isError = false;
        this.isPostLoaded = false;
        this.isFirstLaunch = true; // test if player axist at first launch
        this.playerName = "";
        this.playerTalk = "";
        //Set the instance
        Game.instance = this;
        this.canvas = document.getElementById(canvasElement);
        this.engine = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Engine"](this.canvas, true, null, false);
        // Listen for browser/canvas resize events
        window.addEventListener("resize", function () {
            _this.engine.resize();
        });
    }
    Game.getInstance = function () {
        return Game.instance;
    };
    Game.prototype.setUIService = function (service_) {
        var _this = this;
        this.gameUIServiceService = service_;
        this.gameUIServiceService.postArtCanvasEmitter.subscribe(function (post_) {
            _this.postArtCanvas(post_);
        });
        this.gameUIServiceService.forceWSEmitter.subscribe(function () {
            _this.getPostList();
        });
        this.gameUIServiceService.deletePostEmitter.subscribe(function (post_) {
            console.log("deletePostEmitter:" + post_);
            _this.deletePost(post_);
        });
    };
    Game.prototype.setOfflineService = function (service_) {
        this.offlineService = service_;
    };
    Game.prototype.setWebService = function (service_) {
        this.chanWebService = service_;
    };
    Game.prototype.setRouter = function (router_) {
        this.router = router_;
    };
    Game.prototype.setMapKey = function (mapKey_) {
        this.mapKey = mapKey_;
    };
    Game.prototype.setClientUrl = function (clientUrl_) {
        this.clientUrl = clientUrl_;
    };
    Game.prototype.initGame = function () {
        var _this = this;
        console.log("initGame() ");
        //we get the player profile
        var playerMod = this.offlineService.getPlayerData();
        this.playerModel = playerMod;
        this.chanWebService.createUser(playerMod.id, playerMod.player_key, "", this.mapKey).subscribe(
        //Data success
        function (data) {
            _this.gameResponse = data;
            if (_this.gameResponse.ok) {
                _this.playerModel = _this.gameResponse.result.player;
                _this.offlineService.saveChan(_this.playerModel.map_key);
                _this.setMapKey(_this.playerModel.map_key);
                _this.offlineService.savePlayer(_this.playerModel);
                //Launch the game
                _this.createScene();
                _this.run();
                //Get the playerData
                if (_this.postListRequestInterval == null) {
                    _this.postListRequestInterval = setInterval(function () {
                        _this.getPostList();
                    }, _this.postListRequestDelay);
                }
                _this.getPostList();
            }
            else {
                alert("Profile not found!");
            }
        });
    };
    Game.prototype.createScene = function () {
        console.log("createScene()");
        if (this.scene != null)
            this.scene.dispose();
        // We need a scene to create all our geometry and babylonjs items in
        this.scene = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Scene"](this.engine);
        this.playerMotor = _playerMotor__WEBPACK_IMPORTED_MODULE_3__["PlayerMotor"].getInstance();
        this.playerMotor.initMotor();
        if (this.activateJoystick)
            this.playerMotor.activeJoystick();
        if (!this.mapMaker) {
            this.mapMaker = new _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"]();
        }
        this.mapMaker.loadMapData(this.gameResponse.result.map[0]);
        this.initAtmosphere();
        this.initOptimisation();
    };
    /************************
    * SCENE VISUAL STUFF
    * ligth / optimization / ground / skybox
    * and other shit
    ***********************/
    Game.prototype.initAtmosphere = function () {
        //Scene atmoshpere
        this.scene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color4"](226 / 255, 244 / 255, 1);
        this.scene.ambientColor = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"](0.3, 0.3, 0.3);
        this.scene.autoClear = false; // Color buffer
        this.scene.autoClearDepthAndStencil = false;
        // Hemispheric light to enlight the scene
        this.hLight = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["HemisphericLight"]("hemi", new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](0, 0.5, 0), this.scene);
        this.hLight.intensity = 0.85;
        this.pLight = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(1, 450, 1), this.scene);
        this.pLight.intensity = 1.5;
        //texture
        this.ground = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Mesh"].CreateGround("ground", 1000, 1000, 2, this.scene);
        this.ground.checkCollisions = true;
        this.ground.position.y = -0.1;
        var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matVolcano", this.scene);
        var texture = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"]("./assets/textures/volcanic_text.jpg", this.scene);
        mat.diffuseTexture = texture;
        this.ground.material = mat;
        //Set UIManager
        this.uiAdvancedTexture = babylonjs_gui__WEBPACK_IMPORTED_MODULE_1__["AdvancedDynamicTexture"].CreateFullscreenUI("UI");
        var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", { size: 1000.0 }, this.scene);
        var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", this.scene);
        skyboxMaterial.backFaceCulling = false;
        skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("./assets/textures/skybox", this.scene);
        skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
        skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
        skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
        skybox.material = skyboxMaterial;
    };
    Game.prototype.setShadow = function (mesh_) {
        /*
         if(this.shadowGenerator == null){
           this.shadowGenerator = new BABYLON.ShadowGenerator(256, this.pLight);
           //this.shadowGenerator.useBlurExponentialShadowMap = true;
           this.shadowGenerator.filteringQuality = BABYLON.ShadowGenerator.QUALITY_LOW;
         }
     
         this.shadowGenerator.getShadowMap().renderList.push(mesh_);
         mesh_.receiveShadows = true;*/
    };
    Game.prototype.initOptimisation = function () {
        //Optimization
        this.scene.blockMaterialDirtyMechanism = true;
        /*
         BABYLON.SceneOptimizer.OptimizeAsync(this.scene, BABYLON.SceneOptimizerOptions.LowDegradationAllowed(),
         ()=> {
           // On success
         }, ()=> {
           // FPS target not reached
         });*/
    };
    //Render process
    Game.prototype.run = function () {
        var _this = this;
        this.engine.runRenderLoop(function () {
            if (_this.scene != null) {
                _this.scene.render();
                _this.renderInteraction();
            }
        });
    };
    Game.prototype.cleanLastMesh = function () {
        this.nameLastMesh = "";
        if (this.lastCanvas != null)
            this.lastCanvas.setInterfaceVisible(false);
    };
    Game.prototype.renderInteraction = function () {
        if (this.interactionTimer <= 0) {
            var width = this.scene.getEngine().getRenderWidth();
            var height = this.scene.getEngine().getRenderHeight();
            var pickInfo = this.scene.pick(width / 2, height / 2, null, false, this.camera);
            //Get info on the pointed object
            if (pickInfo.hit && this.nameLastMesh !== pickInfo.pickedMesh.name) {
                var newInter = new _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"]();
                newInter.type = _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"].TYPE_NONE;
                this.meshToClimb = null;
                this.doorToOpen = null;
                this.mapMaker.cleanLines();
                this.nameLastMesh = pickInfo.pickedMesh.name;
                newInter.description = pickInfo.pickedMesh.name;
                if (pickInfo.pickedMesh.name !== undefined) {
                    if (pickInfo.pickedMesh.name.indexOf("canvas") >= 0) {
                        var canvas = this.mapMaker.getCanvasByKey(pickInfo.pickedMesh.name);
                        if (canvas != null) {
                            if (canvas.isVirgin) {
                                newInter.type = _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"].TYPE_CANVAS_VIRGIN;
                                /*
                              } else if(canvas.postModelGraffiti == null){
                                newInter.type = InteractionModel.TYPE_CANVAS_TO_GRAFF;
                                this.mapMaker.drawlines(canvas.dictKey);*/
                            }
                            else {
                                newInter.type = _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"].TYPE_CANVAS_FULL;
                                this.mapMaker.drawlines(canvas.dictKey);
                                this.mapMaker.displayUI(canvas.dictKey);
                            }
                            //newInter.type = (canvas.isVirgin)? InteractionModel.TYPE_CANVAS_VIRGIN : InteractionModel.TYPE_CANVAS_FULL;
                            newInter.value = canvas.postModel;
                            this.cleanLastMesh();
                            canvas.setInterfaceVisible(true);
                            this.lastCanvas = canvas;
                        }
                    }
                    else if (pickInfo.pickedMesh.name.toLowerCase().indexOf("ladder") >= 0) {
                        newInter.type = _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"].TYPE_CLIMB_LADDER;
                        this.meshToClimb = pickInfo.pickedMesh;
                        /*
                        } else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("advertisement") >= 0){
                
                          let canvas = this.mapMaker.getAdByKey(pickInfo.pickedMesh.name);
                          if(canvas != null){
                            newInter.type = InteractionModel.TYPE_AD;
                            newInter.value = canvas.postModel;
                            this.cleanLastMesh();
                            canvas.setInterfaceVisible(true);
                            this.lastCanvas = canvas;
                          }*/
                    }
                    else if (pickInfo.pickedMesh.name.toLowerCase().indexOf("door") >= 0) {
                        //console.log("pick gate"+pickInfo.pickedMesh.name);
                        var door = this.mapMaker.getDoorByKey(pickInfo.pickedMesh.name);
                        newInter.type = _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"].TYPE_OPEN_DOOR;
                        this.doorToOpen = door;
                    }
                    else if (pickInfo.pickedMesh.name.toLowerCase().indexOf("item") >= 0) {
                        //console.log(pickInfo.pickedMesh.name);
                        var item = this.mapMaker.getItemByKey(pickInfo.pickedMesh.name);
                        if (item != null && item.itemModel != null) {
                            newInter.type = _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"].TYPE_GET_ITEM;
                            newInter.value = item.itemModel;
                            this.itemToGet = item;
                        }
                    }
                    else if (pickInfo.pickedMesh.name.toLowerCase().indexOf("gate") >= 0) {
                        var gate = this.mapMaker.getGateByKey(pickInfo.pickedMesh.name);
                        newInter.type = _models_interaction_model__WEBPACK_IMPORTED_MODULE_5__["InteractionModel"].TYPE_PASS_GATE;
                        newInter.value = gate.gateKey;
                        this.gateTopass = gate;
                    }
                    /*else if(pickInfo.pickedMesh.name.toLowerCase().indexOf("panel") >= 0){
                      newInter.type = InteractionModel.TYPE_PANEL;
                      newInter.value = "http://snuffchan.com/blog/donations/";
                      //this.panel = gate;
                    }*/
                }
                this.nameLastMesh = pickInfo.pickedMesh.name;
                this.gameUIServiceService.sendInteraction(newInter);
            }
            this.interactionTimer = this.interactionDelay;
        }
        else {
            this.interactionTimer--;
        }
    };
    //Climb obj
    Game.prototype.climbObject = function () {
        this.camera.position.x = this.meshToClimb.position.x;
        this.camera.position.z = this.meshToClimb.position.z;
        this.camera.position.y = this.meshToClimb.position.y + _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"].TILE_SIZE;
    };
    //Climb obj
    Game.prototype.openDoor = function () {
        //console.log(this.doorToOpen);
        //console.log(this.nameLastMesh );
        this.nameLastMesh = "";
        this.doorToOpen.openDoor();
    };
    //Post
    Game.prototype.postArtCanvas = function (canvas_) {
        console.log(canvas_);
        this.mapMaker.setPictureOnCanvas(canvas_);
    };
    Game.prototype.switchKeyMapping = function () {
        _gameUtils__WEBPACK_IMPORTED_MODULE_6__["GameUtils"].switchKeyMapping(this);
    };
    Game.prototype.activeJoystick = function () {
        this.activateJoystick = true;
        if (this.playerMotor != null)
            this.playerMotor.activeJoystick();
    };
    Game.prototype.getPostList = function () {
        var _this = this;
        if (!this.mapChanging) {
            var playerTempModel = this.playerMotor.getPlayerPos();
            this.chanWebService.getMapPostList(playerTempModel.position_x, playerTempModel.position_y, this.playerModel.name, this.playerTalk).subscribe(
            //Data success
            function (data) {
                var gameResponse = data;
                if (gameResponse.ok) {
                    if (_utils_helpers__WEBPACK_IMPORTED_MODULE_7__["Helpers"].isPT()) {
                        var postsLeft = gameResponse.result.postsLeft - 18;
                        if (postsLeft < 0)
                            postsLeft = 0;
                        gameResponse.result.postsLeft = postsLeft;
                    }
                    _this.updateGameData(gameResponse.result);
                    _this.mapMaker.updateNonStaticData(gameResponse.result);
                    _this.isFirstLaunch = false;
                }
                else {
                    _this.isError = true;
                    _this.errorMessage = "Unknown error.";
                }
            }, function (error) {
                //console.log(JSON.stringify(error));
                _this.isError = true;
                if (_this.isFirstLaunch) {
                    _this.gameUIServiceService.changeState(_services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_4__["GameUIServiceService"].STATE_NO_PLAYER);
                }
                _this.errorMessage = JSON.stringify(error);
            });
        }
    };
    Game.prototype.updateGameData = function (gameDataModel_) {
        console.log("updateGameData()");
        this.gameDataModel = gameDataModel_;
        this.mapMaker.updateNonStaticData(this.gameDataModel);
        this.gameUIServiceService.updateGameData(this.gameDataModel);
        //Update the player
        this.playerModel = this.gameDataModel.player;
        /*
        if(this.playerModel.map_key != this.mapKey){
          this.generateMap(this.playerModel.map_key);
          this.mapMaker.loadMapData(this.gameDataModel.map[0]);
          this.mapKey = this.playerModel.map_key;
        }*/
        this.items = this.gameDataModel.itemsPlayer;
        this.offlineService.savePlayer(this.playerModel);
        this.isPostLoaded = true;
        this.isError = false;
    };
    Game.prototype.passGet = function (getName_) {
        var _this = this;
        //this.playerMotor.savePlayerRotation();
        this.mapChanging = true;
        this.chanWebService.changeMapRandom((getName_ === "secret")).subscribe(function (data_) {
            if (data_.ok) {
                //this.createScene();
                _this.scene.dispose();
                _this.mapMaker = null;
                delete _this.mapMaker;
                _this.offlineService.saveChan(data_.result.player.map_key);
                //this.router.navigateByUrl('/ch/'+data_.result.player.map_key);
                window.location.href = _this.clientUrl + '/ch/' + data_.result.player.map_key;
                //console.log("change to :"+data_.result.player.map_key);
                //this.updateGameData(data_.result);
            }
        });
    };
    Game.prototype.getItem = function (key_) {
        var _this = this;
        this.chanWebService.getItem(key_).subscribe(function (data_) {
            if (data_.ok) {
                _this.updateGameData(data_.result);
            }
        });
    };
    Game.prototype.deletePost = function (post_) {
        var canvas = this.mapMaker.getCanvasByKey(post_.canvas_key);
        if (canvas != null) {
            console.log("Post found and deleted= " + post_);
            canvas.deletePostData();
        }
    };
    Game.prototype.changeName = function (name_) {
        this.playerName = name_;
    };
    Game.prototype.changeTalk = function (talk_) {
        this.playerTalk = talk_;
    };
    return Game;
}());



/***/ }),

/***/ "./src/app/motor/gameUtils.ts":
/*!************************************!*\
  !*** ./src/app/motor/gameUtils.ts ***!
  \************************************/
/*! exports provided: GameUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameUtils", function() { return GameUtils; });
var GameUtils = /** @class */ (function () {
    function GameUtils() {
    }
    //Doc for https://en.wikipedia.org/wiki/QWERTY
    //Key code list https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
    GameUtils.setKeyBoardMapping = function (gameInstance_) {
        var conf_ = gameInstance_.offlineService.getConfig();
        if (conf_.key_mapping == null) {
            var language = navigator.language;
            GameUtils.setKeyMappingFromLang(gameInstance_, language);
        }
        else {
            GameUtils.setKeyForMapping(gameInstance_, conf_.key_mapping);
        }
    };
    GameUtils.setKeyMappingFromLang = function (gameInstance_, lang_) {
        if (lang_.toLowerCase().indexOf("fr") >= 0) {
            GameUtils.setKeyForMapping(gameInstance_, "ZSQD");
        }
        else {
            GameUtils.setKeyForMapping(gameInstance_, "WSAD");
        }
    };
    GameUtils.setKeyForMapping = function (gameInstance_, mapping_) {
        console.log("setKeyMapping() lang_= " + mapping_);
        var config = gameInstance_.offlineService.getConfig();
        if (mapping_ === "ZSQD") {
            //If Azerty
            gameInstance_.camera.keysUp = [90]; // Z
            gameInstance_.camera.keysDown = [83]; // S
            gameInstance_.camera.keysLeft = [81]; // Q
            gameInstance_.camera.keysRight = [68]; // D
        }
        else {
            //If Qwerty
            gameInstance_.camera.keysUp = [87]; // w
            gameInstance_.camera.keysDown = [83]; // S
            gameInstance_.camera.keysLeft = [65]; // A
            gameInstance_.camera.keysRight = [68]; // D
        }
        config.key_mapping = mapping_;
        gameInstance_.offlineService.saveConfig(config);
        gameInstance_.gameUIServiceService.updateConfigData(config);
        //gameInstance_.offlineService.saveKeyboard(lang_.toLowerCase());
    };
    GameUtils.switchKeyMapping = function (gameInstance_) {
        var conf_ = gameInstance_.offlineService.getConfig();
        if (conf_.key_mapping == null) {
            var language = navigator.language;
            GameUtils.setKeyMappingFromLang(gameInstance_, language);
        }
        else {
            if (conf_.key_mapping === "ZSQD")
                GameUtils.setKeyForMapping(gameInstance_, "WSAD");
            if (conf_.key_mapping === "WSAD")
                GameUtils.setKeyForMapping(gameInstance_, "ZSQD");
        }
    };
    return GameUtils;
}());



/***/ }),

/***/ "./src/app/motor/gate.ts":
/*!*******************************!*\
  !*** ./src/app/motor/gate.ts ***!
  \*******************************/
/*! exports provided: Gate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gate", function() { return Gate; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");



var Gate = /** @class */ (function () {
    function Gate(dictKey, size, x, y, z, key_) {
        this.objType = "gate";
        this.dictKey = this.objType + "_" + dictKey;
        this.gateKey = key_;
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_1__["Game"].getInstance();
        this.mapInstance = _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"].getInstance();
        this.doorMesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox(this.dictKey, { size: size }, this.gameInstance.scene);
        this.doorMesh.checkCollisions = true;
        var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matGateDoor", this.gameInstance.scene);
        mat.diffuseColor = BABYLON.Color3.Red();
        mat.freeze();
        this.doorMesh.material = mat;
        this.doorMesh.position.y = y;
        this.doorMesh.position.x = x;
        this.doorMesh.position.z = z;
        this.mapInstance.registerNewGate(this.dictKey, this);
    }
    return Gate;
}());



/***/ }),

/***/ "./src/app/motor/item.ts":
/*!*******************************!*\
  !*** ./src/app/motor/item.ts ***!
  \*******************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");



var Item = /** @class */ (function () {
    function Item(type_, itemModel_, size_, x, y) {
        this.objType = "item";
        this.itemModel = itemModel_;
        this.objType = type_;
        this.dictKey = this.objType + "_" + this.itemModel.name + "_" + itemModel_.key;
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_1__["Game"].getInstance();
        this.mapInstance = _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"].getInstance();
        this.itemMesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox(this.dictKey, { height: size_ * 3, width: size_, depth: size_ }, this.gameInstance.scene);
        this.itemMesh.checkCollisions = false;
        this.itemMesh.visibility = 0;
        this.itemMesh.position.y = (size_) * 0.5;
        this.itemMesh.position.x = x;
        this.itemMesh.position.z = y;
        this.itemMesh.visibility = 0;
        /*let mat = new StandardMaterial("matBoxItem", this.gameInstance.scene);
        mat.diffuseColor = BABYLON.Color3.Random();
        mat.freeze();
        this.itemMesh.material = mat;*/
        //if(this.objType.toLowerCase().indexOf('gate') >= 0 ) this.itemMesh.visibility = 0.2;
        //sprite
        this.spriteManagerPlayer = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["SpriteManager"]("itemManager", "./assets/textures/cardboard_text.png", 1, { width: 288, height: 288 }, this.gameInstance.scene);
        this.sprite = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Sprite"]("item" + itemModel_.id, this.spriteManagerPlayer);
        this.sprite.width = 6;
        this.sprite.height = 6;
        this.sprite.position.x = x;
        this.sprite.position.z = y;
        this.sprite.position.y = 3;
        this.mapInstance.registerNewItem(this.dictKey, this);
    }
    Item.prototype.clean = function () {
        this.spriteManagerPlayer.dispose();
        if (this.itemMesh != null)
            this.itemMesh.dispose();
        this.sprite.dispose();
        this.spriteManagerPlayer = null;
        this.itemMesh = null;
        this.sprite = null;
    };
    return Item;
}());



/***/ }),

/***/ "./src/app/motor/mapMaker.ts":
/*!***********************************!*\
  !*** ./src/app/motor/mapMaker.ts ***!
  \***********************************/
/*! exports provided: MapMaker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapMaker", function() { return MapMaker; });
/* harmony import */ var _tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tile */ "./src/app/motor/tile.ts");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item */ "./src/app/motor/item.ts");
/* harmony import */ var _playerMotor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./playerMotor */ "./src/app/motor/playerMotor.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var _playerMesh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playerMesh */ "./src/app/motor/playerMesh.ts");






var MapMaker = /** @class */ (function () {
    function MapMaker() {
        this.items = [];
        this.anonList = [];
        this.itemMesh = [];
        this.TileGroundMeshes = [];
        this.TileWallMeshes = [];
        this.DIR_N = 0;
        this.DIR_E = 1;
        this.DIR_S = 2;
        this.DIR_W = 3;
        //Canvas PLane dictionnary
        this.canvasDict = {};
        this.advertisementDict = {};
        this.doorDict = {};
        this.gateDict = {};
        this.itemDict = {};
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_1__["Game"].getInstance();
        MapMaker._instance = this;
    }
    Object.defineProperty(MapMaker, "TILE_SIZE", {
        get: function () { return 10; },
        enumerable: true,
        configurable: true
    });
    MapMaker.getInstance = function () {
        return this._instance;
    };
    MapMaker.prototype.loadMapData = function (map_) {
        _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].meshGrassInstance = null;
        _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].meshGroundInstance = null;
        _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].meshWallInstance = null;
        this.mapModel = map_;
        this.buildMap();
    };
    MapMaker.prototype.cleanMap = function () {
        this.TileGroundMeshes = [];
        this.TileWallMeshes = [];
        this.canvasDict = {};
        this.advertisementDict = {};
        this.doorDict = {};
        this.gateDict = {};
        this.itemDict = {};
    };
    MapMaker.prototype.buildMap = function () {
        this.cleanMap();
        //console.log("buildMap="+ this.mapModel );
        this.mapData = this.getMapData();
        var x = 0;
        var y = 0;
        var l = 0; //layer
        var playerPos = { x: -1, y: -1 };
        //Generate a layer
        for (var n = 0; n < this.mapData.length; n++) {
            //console.log(this.mapData[n]);
            if (parseInt(this.mapData[n]) != _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].TILE_GATES && parseInt(this.mapData[n]) != _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].TILE_GATES_SECRET) {
                new _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"](this.mapData[n], MapMaker.TILE_SIZE, x, l, y, null);
                if (parseInt(this.mapData[n]) === _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].TILE_START) {
                    playerPos.x = x;
                    playerPos.y = y;
                }
            }
            else if (parseInt(this.mapData[n]) == _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].TILE_GATES) {
                console.log("x: " + x + "; y:" + y + "; width:" + this.mapModel.width + "; heihgt: " + this.mapModel.height);
                /*
                let key = "";
                if(y == 0){
                    key = this.mapModel.door_key_n;
                } else  if(x == this.mapModel.width-1){
                    key = this.mapModel.door_key_e;
                } else  if(y == this.mapModel.height-1){
                    key = this.mapModel.door_key_s;
                } else  if(x == 0){
                    key = this.mapModel.door_key_w;
                }*/
                //console.log("GATE x: "+x+"; y:"+y+"; width:"+this.mapModel.width+"; heihgt: "+ this.mapModel.height+" key:"+key);
                //Managing gates
                new _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"](this.mapData[n], MapMaker.TILE_SIZE, x, l, y, "???");
            }
            else if (parseInt(this.mapData[n]) == _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].TILE_GATES_SECRET) {
                //Managing gates
                new _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"](this.mapData[n], MapMaker.TILE_SIZE, x, l, y, "secret");
            }
            //console.log("new tile-> type:"+this.tileDict[n]+" x:"+x+"y:"+y);
            x += 1;
            if (x >= this.mapModel.width) {
                x = 0;
                y += 1;
            }
        }
        var player = new _models_player_model__WEBPACK_IMPORTED_MODULE_4__["PlayerModel"]();
        if (this.gameData != null)
            player = this.gameData.player;
        player.position_x = playerPos.x;
        player.position_y = playerPos.y;
        _playerMotor__WEBPACK_IMPORTED_MODULE_3__["PlayerMotor"].getInstance().setPlayerPos(player);
        if (this.gameData != null)
            this.updateNonStaticData(this.gameData);
    };
    /********************
     * UPDATE NON STATIC DATA
     * players, items and others
     ********************/
    MapMaker.prototype.updateNonStaticData = function (gameData_) {
        this.itemDict = {};
        this.gameData = gameData_;
        //Post
        //Update teh posts DATA
        if (this.gameData.posts != undefined) {
            this.posts = this.gameData.posts;
            for (var _i = 0, _a = this.gameData.posts; _i < _a.length; _i++) {
                var post = _a[_i];
                if (post !== null && post.canvas_key !== null) {
                    var canvas = this.getCanvasByKey(post.canvas_key);
                    if (canvas != null && canvas.isVirgin) {
                        //if(post.graffiti && canvas.postModelGraffiti == null){
                        canvas.setPostData(post);
                        /*
                        } else if(!post.graffiti && canvas.postModel.id == null){
                            canvas.setPostData(post);
                        }*/
                    }
                }
            }
        }
        //items
        this.itemMesh.forEach(function (item_) {
            if (item_ != null && item_ != undefined) {
                item_.clean();
                item_ = null;
            }
        });
        this.itemMesh = [];
        this.items = this.gameData.itemsMap;
        for (var i = 0; i < this.items.length; i++) {
            var itemModel = this.items[i];
            var itemMesh = new _item__WEBPACK_IMPORTED_MODULE_2__["Item"]("item", itemModel, MapMaker.TILE_SIZE * 0.2, itemModel.x * MapMaker.TILE_SIZE, itemModel.y * MapMaker.TILE_SIZE);
            this.itemMesh.push(itemMesh);
        }
        //PLayers
        /*
        this.anonList.forEach((playerMesh: PlayerMesh) =>{
            playerMesh.clean();
            playerMesh = null;
        });

        let anonListNew = [];
        let anonListOld = this.anonList;
        let characters = this.gameData.players;

        for(let c = 0; c <  characters.length; c++){
            let chara: PlayerModel = characters[c];
            let anon: PlayerMesh = null;
            //Is this anon exist?
            for(let a= 0; a <anonListOld.length; a ++){
                
                if(anonListOld[a].playerModel.id === chara.id){
                    //if yes we move it
                    anon = anonListOld[a];
                    anon.updatePlayerModel(chara);
                    //+ clean the array
                    anonListOld.splice(a,1);
                    break;
                }
            }

            //If no we create if
            if(anon === null){
                anon = new PlayerMesh("player",chara, MapMaker.TILE_SIZE);
            }
            anonListNew.push(anon);
        }
         //after this we clean all the all anons.
        
        anonListOld.forEach((playerMesh: PlayerMesh) =>{
            //playerMesh.dispose();
            playerMesh.clean();
            playerMesh = null;
        });

        this.anonList = anonListNew;*/
        this.anonList.forEach(function (playerMesh) {
            //playerMesh.dispose();
            playerMesh.clean();
            playerMesh = null;
        });
        this.anonList = [];
        var characters = this.gameData.players;
        for (var c = 0; c < characters.length; c++) {
            var chara = characters[c];
            var anon = new _playerMesh__WEBPACK_IMPORTED_MODULE_5__["PlayerMesh"]("player", chara, MapMaker.TILE_SIZE);
            this.anonList.push(anon);
        }
    };
    MapMaker.prototype.drawlines = function (key_) {
        var currentPost = this.canvasDict[key_].postModel;
        if (this.linesReplyFrom != null)
            this.linesReplyFrom.dispose();
        if (this.linesReplyTo != null)
            this.linesReplyTo.dispose();
        //https://doc.babylonjs.com/babylon101/parametric_shapes
        var pointsTo = [];
        var pointsFrom = [];
        pointsTo.push(this.canvasDict[key_].planeMesh.position);
        pointsFrom.push(this.canvasDict[key_].planeMesh.position);
        for (var keyDict in this.canvasDict) {
            var canvas = this.canvasDict[keyDict];
            if (!canvas.isVirgin) {
                var found = false;
                if (canvas.postModel.id === currentPost.reply) {
                    pointsTo.push(canvas.planeMesh.position);
                    found = true;
                }
                else if (canvas.postModel.reply === currentPost.id) {
                    pointsFrom.push(canvas.planeMesh.position);
                    found = true;
                }
                if (found) {
                    for (var keyDict2 in this.canvasDict) {
                        var canvas2 = this.canvasDict[keyDict2];
                        if (!canvas2.isVirgin) {
                            if (canvas2.postModel.id === canvas.postModel.reply) {
                                pointsTo.push(canvas2.planeMesh.position);
                            }
                            else if (canvas2.postModel.reply === canvas.postModel.id) {
                                pointsFrom.push(canvas2.planeMesh.position);
                            }
                        }
                    }
                }
            }
        }
        this.linesReplyTo = BABYLON.MeshBuilder.CreateLines("lines", { points: pointsTo }, this.gameInstance.scene);
        this.linesReplyFrom = BABYLON.MeshBuilder.CreateLines("lines", { points: pointsFrom }, this.gameInstance.scene);
        /*
        this.linesReplyTo.Color4 = BABYLON.Color3.Blue;
        this.linesReplyFrom.Color4 = BABYLON.Color3.Green;
        */
    };
    MapMaker.prototype.cleanLines = function () {
        if (this.linesReplyFrom != null)
            this.linesReplyFrom.dispose();
        if (this.linesReplyTo != null)
            this.linesReplyTo.dispose();
    };
    MapMaker.prototype.displayUI = function (key_) {
        /*
        //To hard for memory
        let canvas: CanvasPlane =  this.canvasDict[key_];

        if( this.cubeUI  == null){
            this.cubeUI = MeshBuilder.CreateBox("meshUI", {size: MapMaker.TILE_SIZE *0.5},  this.gameInstance.scene);
            //this.cubeUI.visibility = 0;
        }

        this.cubeUI.position.y = MapMaker.TILE_SIZE *0.5;
        this.cubeUI.position.x = canvas.planeMesh.position.x *  MapMaker.TILE_SIZE;
        this.cubeUI.position.z = canvas.planeMesh.position.z *  MapMaker.TILE_SIZE;

        if(this.uiAdvancedTexture == null){
            this.uiAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
            this.rectUI = new BABYLON.GUI.Rectangle();
            
            this.rectUI.fontFamily = "Courier New, Courier, monospace";
            this.rectUI.cornerRadius = 10;
            this.rectUI.color = "Grey";
            this.rectUI.background = "#161616";
            this.uiAdvancedTexture.addControl(this.rectUI);
            this.label = new BABYLON.GUI.TextBlock();
            this.rectUI.addControl(this.label);
            this.rectUI.linkWithMesh(this.cubeUI);
            this.rectUI.linkOffsetY = 0;
            this.rectUI.linkOffsetX = 0;
            this.rectUI.width = 0.2;
            this.rectUI.height = 0.3;
        }

        this.label.text = canvas.postModel.message;
        */
    };
    MapMaker.prototype.clearUI = function () {
    };
    /********************
     * UTILS
     ********************/
    //Get potential Canvas orientation
    MapMaker.prototype.getCanvasOrientation = function (x, z) {
        var potentialDir = [];
        if (this.getTileAt(x, z - 1) === '0')
            potentialDir.push(this.DIR_N);
        if (this.getTileAt(x + 1, z) === '0')
            potentialDir.push(this.DIR_E);
        if (this.getTileAt(x, z + 1) === '0')
            potentialDir.push(this.DIR_S);
        if (this.getTileAt(x - 1, z) === '0')
            potentialDir.push(this.DIR_W);
        if (potentialDir.length === 0) {
            //console.log("NO ORIENTATION FOUND");
            return -1;
        }
        //We choose a random direction
        var indexChoosed = Math.floor(Math.random() * potentialDir.length);
        return potentialDir[indexChoosed];
    };
    //Return the value of a tile
    MapMaker.prototype.getTileAt = function (x, y) {
        //Out of bounds
        if (x < 0 || x > this.mapModel.width || y < 0 || y > this.mapModel.height)
            return -1;
        var indexTile = (y * this.mapModel.width) + x;
        return this.mapData[indexTile];
    };
    MapMaker.prototype.registerNewCanvas = function (key_, canvas_) {
        if (this.canvasDict[key_] === undefined)
            this.canvasDict[key_] = canvas_;
    };
    MapMaker.prototype.registerNewAd = function (key_, canvas_) {
        if (this.advertisementDict[key_] === undefined)
            this.advertisementDict[key_] = canvas_;
    };
    MapMaker.prototype.registerNewDoor = function (key_, door_) {
        if (this.doorDict[key_] === undefined)
            this.doorDict[key_] = door_;
    };
    MapMaker.prototype.registerNewItem = function (key_, item_) {
        if (this.itemDict[key_] === undefined)
            this.itemDict[key_] = item_;
    };
    MapMaker.prototype.getCanvasByKey = function (key_) {
        return this.canvasDict[key_];
    };
    MapMaker.prototype.registerNewGate = function (key_, gate_) {
        this.gateDict[key_] = gate_;
    };
    MapMaker.prototype.getDoorByKey = function (key_) {
        return this.doorDict[key_];
    };
    MapMaker.prototype.getAdByKey = function (key_) {
        return this.advertisementDict[key_];
    };
    MapMaker.prototype.getGateByKey = function (key_) {
        return this.gateDict[key_];
    };
    MapMaker.prototype.getItemByKey = function (key_) {
        return this.itemDict[key_];
    };
    MapMaker.prototype.setPictureOnCanvas = function (post_) {
        var canvas = this.canvasDict[post_.canvas_key];
        console.log(this.canvasDict);
        if (canvas !== undefined) {
            console.log("canvas to change: " + post_.canvas_key + "; to post url: " + post_.url);
            canvas.setPostData(post_);
        }
        else {
            console.log("no canvas");
        }
    };
    /********************
     * PERF MAnAGEMENT
     ********************/
    MapMaker.prototype.addMeshToCluster = function (mesh_, type_) {
        switch (type_) {
            case _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].TILE_GROUND:
                this.TileGroundMeshes.push(mesh_);
                break;
            case _tile__WEBPACK_IMPORTED_MODULE_0__["Tile"].TILE_WALL:
                this.TileWallMeshes.push(type_);
                break;
        }
    };
    MapMaker.prototype.createClusters = function () {
        BABYLON.Mesh.MergeMeshes(this.TileWallMeshes);
        BABYLON.Mesh.MergeMeshes(this.TileGroundMeshes);
    };
    /********************
    * PARSING MAP
    ********************/
    MapMaker.prototype.getMapData = function () {
        return this.mapModel.level_data.split(",");
    };
    return MapMaker;
}());



/***/ }),

/***/ "./src/app/motor/playerMesh.ts":
/*!*************************************!*\
  !*** ./src/app/motor/playerMesh.ts ***!
  \*************************************/
/*! exports provided: PlayerMesh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerMesh", function() { return PlayerMesh; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");

//import * as GUI from 'babylonjs-gui';


var PlayerMesh = /** @class */ (function () {
    function PlayerMesh(type_, playerModel_, size_) {
        this.objType = "player";
        this.size = size_;
        this.playerModel = playerModel_;
        this.objType = type_;
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_1__["Game"].getInstance();
        this.mapInstance = _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"].getInstance();
        if (this.playerModel.hp < 1) {
            this.spriteManagerPlayer = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["SpriteManager"]("playerManager", "./assets/textures/anon_sprite_dead.png", 1, { width: 288, height: 288 }, this.gameInstance.scene);
            this.sprite = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Sprite"]("player_" + playerModel_.id, this.spriteManagerPlayer);
        }
        else {
            this.spriteManagerPlayer = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["SpriteManager"]("playerManager", "./assets/textures/anon_sprite.png", 1, { width: 290, height: 290 }, this.gameInstance.scene);
            this.sprite = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Sprite"]("player_" + playerModel_.id, this.spriteManagerPlayer);
        }
        this.sprite.width = 6;
        this.sprite.height = 6;
        this.sprite.position.x = this.playerModel.position_x * size_;
        this.sprite.position.z = this.playerModel.position_y * size_;
        this.sprite.position.y = 3;
        //Display player UI
        this.playerMesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox(this.dictKey + "_" + playerModel_.id, { size: size_ * 0.5 }, this.gameInstance.scene);
        this.playerMesh.position.y = size_ * 0.5;
        this.playerMesh.position.x = this.playerModel.position_x * size_;
        this.playerMesh.position.z = this.playerModel.position_y * size_;
        this.playerMesh.visibility = 0;
        /*
        this.uiAdvancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
        this.uiAdvancedTexture.is3D = false;
        this.rectUI = new BABYLON.GUI.Rectangle();
        this.rectUI.width = 0.1;
        this.rectUI.height = 0.05;
        this.rectUI.fontFamily = "Courier New, Courier, monospace";
        this.rectUI.cornerRadius = 10;
        this.rectUI.color = "Grey";
        this.rectUI.background = "#161616";
        this.uiAdvancedTexture.addControl(this.rectUI);
        this.label = new BABYLON.GUI.TextBlock();
        this.label.text = "#"+this.playerModel.id+"\n💬"+this.playerModel.talk;
        this.rectUI.addControl(this.label);
        this.rectUI.linkWithMesh( this.playerMesh);
        this.rectUI.linkOffsetY = -60;
        this.rectUI.linkOffsetX = 0;
        this.uiAdvancedTexture.freeze = true;*/
        return this;
    }
    PlayerMesh.prototype.updatePlayerModel = function (model_) {
        this.playerModel = model_;
        var y = this.size * 0.5;
        var x = this.playerModel.position_x * this.size;
        var z = this.playerModel.position_y * this.size;
        //this.playerMesh.locallyTranslate(new BABYLON.Vector3(x, y, z));
        var ySprite = 3;
        if (this.sprite != null) {
            this.sprite.position.x = x;
            this.sprite.position.z = z;
            this.sprite.position.y = ySprite;
        }
        if (this.playerMesh != null) {
            this.playerMesh.position.x = x;
            this.playerMesh.position.y = y;
            this.playerMesh.position.z = z;
        }
        //this.label.text = "#"+this.playerModel.id+"\n💬"+this.playerModel.talk;
    };
    PlayerMesh.prototype.clean = function () {
        this.spriteManagerPlayer.dispose();
        if (this.playerMesh != null)
            this.playerMesh.dispose();
        this.sprite.dispose();
        this.spriteManagerPlayer = null;
        this.playerMesh = null;
        this.sprite = null;
        /*
        this.rectUI.dispose();
        this.label.dispose();
        this.uiAdvancedTexture.dispose();*/
    };
    return PlayerMesh;
}());



/***/ }),

/***/ "./src/app/motor/playerMotor.ts":
/*!**************************************!*\
  !*** ./src/app/motor/playerMotor.ts ***!
  \**************************************/
/*! exports provided: PlayerMotor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerMotor", function() { return PlayerMotor; });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _gameUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameUtils */ "./src/app/motor/gameUtils.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/helpers */ "./src/app/utils/helpers.ts");
/* harmony import */ var _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/game-uiservice.service */ "./src/app/services/game-uiservice.service.ts");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");






var PlayerMotor = /** @class */ (function () {
    function PlayerMotor() {
        //Properties for cam
        this.playerHeight = 4; // The player eyes height
        this.speed = 1;
        this.inertia = 0.9;
        this.angularSensibility = 1000;
        this.angularSensibilityMobile = 13000;
        this.joystickMoveSpeedY = 18;
        this.joystickMoveSpeedX = 0.9;
        this.isJoystick = false;
    }
    PlayerMotor.getInstance = function () {
        return this._instance || (this._instance = new this());
    };
    PlayerMotor.prototype.initMotor = function () {
        var _this = this;
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_0__["Game"].getInstance();
        this.gameInstance.gameUIServiceService.changeStateEmitter.subscribe(function (state_) {
            console.log(state_);
            if (state_ === _services_game_uiservice_service__WEBPACK_IMPORTED_MODULE_3__["GameUIServiceService"].STATE_GAME_RUNNING) {
                _this.activateMotion(true);
            }
            else {
                _this.activateMotion(false);
            }
        });
        this.gameInstance.camera = new BABYLON.FreeCamera('freeCamera', new BABYLON.Vector3(0, 5, -10), this.gameInstance.scene);
        this.activateMotion(true);
    };
    PlayerMotor.prototype.activateMotion = function (val_) {
        if (val_) {
            //Free cam
            this.gameInstance.camera.attachControl(this.gameInstance.scene.getEngine().getRenderingCanvas());
            // Activate gravity !
            //https://doc.babylonjs.com/babylon101/cameras,_mesh_collisions_and_gravity
            this.gameInstance.scene.gravity = new BABYLON.Vector3(0, -0.7, 0);
            this.gameInstance.camera.applyGravity = true;
            this.gameInstance.camera.ellipsoid = new BABYLON.Vector3(2.5, this.playerHeight, 2.5);
            this.gameInstance.camera.ellipsoidOffset = new BABYLON.Vector3(0, this.playerHeight, 0);
            this.gameInstance.camera.checkCollisions = true;
            _gameUtils__WEBPACK_IMPORTED_MODULE_1__["GameUtils"].setKeyBoardMapping(this.gameInstance);
            this.gameInstance.camera.speed = this.speed;
            this.gameInstance.camera.inertia = this.inertia;
            this.gameInstance.camera.angularSensibility = (_utils_helpers__WEBPACK_IMPORTED_MODULE_2__["Helpers"].isMobile()) ? this.angularSensibilityMobile : this.angularSensibility;
        }
        else {
            this.gameInstance.camera.detachControl(this.gameInstance.scene.getEngine().getRenderingCanvas());
        }
    };
    /*******************
     * PLACE THE PLAYER
     ******************/
    PlayerMotor.prototype.setPlayerPos = function (playerData_) {
        //console.log(this.playerRotation );
        this.playerModel = playerData_;
        //convert teh X + y in position
        //console.log("playerPosY= "+this.playerModel.position_x+"; playerPosX= "+this.playerModel.position_y);
        //Placing the player
        this.gameInstance.camera.position.x = this.playerModel.position_x * _mapMaker__WEBPACK_IMPORTED_MODULE_5__["MapMaker"].TILE_SIZE;
        this.gameInstance.camera.position.z = this.playerModel.position_y * _mapMaker__WEBPACK_IMPORTED_MODULE_5__["MapMaker"].TILE_SIZE;
        if (this.playerRotation != null)
            this.gameInstance.camera.rotation = this.playerRotation;
    };
    PlayerMotor.prototype.savePlayerRotation = function () {
        //We memorize the player rotation
        this.playerRotation = this.gameInstance.camera.rotation;
    };
    PlayerMotor.prototype.getPlayerPos = function () {
        if (this.playerModel == null) {
            this.playerModel = new _models_player_model__WEBPACK_IMPORTED_MODULE_4__["PlayerModel"]();
            this.playerModel.position_x = -1;
            this.playerModel.position_y = -1;
        }
        else {
            this.playerModel.position_x = this.gameInstance.camera.position.x / _mapMaker__WEBPACK_IMPORTED_MODULE_5__["MapMaker"].TILE_SIZE;
            this.playerModel.position_y = this.gameInstance.camera.position.z / _mapMaker__WEBPACK_IMPORTED_MODULE_5__["MapMaker"].TILE_SIZE;
        }
        return this.playerModel;
    };
    PlayerMotor.prototype.activeJoystick = function () {
        var _this = this;
        this.isJoystick = true;
        var rightJoystick = new BABYLON.VirtualJoystick(false);
        this.gameInstance.scene.onBeforeRenderObservable.add(function () {
            if (rightJoystick.pressed) {
                //OLD position
                var moveY = rightJoystick.deltaPosition.y * (_this.gameInstance.engine.getDeltaTime() / 1000) * _this.joystickMoveSpeedY;
                _this.gameInstance.camera.position.z += moveY * Math.cos(_this.gameInstance.camera.rotation.y);
                _this.gameInstance.camera.position.x += moveY * Math.sin(_this.gameInstance.camera.rotation.y);
                var moveX = rightJoystick.deltaPosition.x * (_this.gameInstance.engine.getDeltaTime() / 1000) * _this.joystickMoveSpeedX;
                _this.gameInstance.camera.rotation.y += moveX;
            }
        });
    };
    return PlayerMotor;
}());



/***/ }),

/***/ "./src/app/motor/tile.ts":
/*!*******************************!*\
  !*** ./src/app/motor/tile.ts ***!
  \*******************************/
/*! exports provided: Tile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tile", function() { return Tile; });
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/app/motor/game.ts");
/* harmony import */ var _mapMaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapMaker */ "./src/app/motor/mapMaker.ts");
/* harmony import */ var _canvasPlane__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./canvasPlane */ "./src/app/motor/canvasPlane.ts");
/* harmony import */ var _door__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./door */ "./src/app/motor/door.ts");
/* harmony import */ var _gate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gate */ "./src/app/motor/gate.ts");







var Tile = /** @class */ (function () {
    function Tile(type_, size, x, y, z, val_) {
        var type = parseInt(type_);
        this.tileCoordonates = [x, y, z];
        x = x * size;
        y = y * size;
        z = z * size;
        this.gameInstance = _game__WEBPACK_IMPORTED_MODULE_1__["Game"].getInstance();
        this.mapInstance = _mapMaker__WEBPACK_IMPORTED_MODULE_2__["MapMaker"].getInstance();
        if (type === Tile.TILE_WALL) {
            this.box = this.getMeshWall(size);
            this.box.position.y = size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            new _canvasPlane__WEBPACK_IMPORTED_MODULE_3__["CanvasPlane"]("canvas", this.tileCoordonates[0] + "_" + this.tileCoordonates[1] + "_" + this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_N);
            new _canvasPlane__WEBPACK_IMPORTED_MODULE_3__["CanvasPlane"]("canvas", this.tileCoordonates[0] + "_" + this.tileCoordonates[1] + "_" + this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_E);
            new _canvasPlane__WEBPACK_IMPORTED_MODULE_3__["CanvasPlane"]("canvas", this.tileCoordonates[0] + "_" + this.tileCoordonates[1] + "_" + this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_S);
            new _canvasPlane__WEBPACK_IMPORTED_MODULE_3__["CanvasPlane"]("canvas", this.tileCoordonates[0] + "_" + this.tileCoordonates[1] + "_" + this.tileCoordonates[2], size, x, y, z, this.mapInstance.DIR_W);
        }
        else if (type === Tile.TILE_GROUND || type === Tile.TILE_START) {
            this.box = this.getMeshGround(size, "./assets/textures/floor_dalle_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box, type);
        }
        else if (type === Tile.TILE_GRASS) {
            this.box = this.getMeshGrass(size, "./assets/textures/grass_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box, type);
        }
        else if (type === Tile.TILE_LADDER) {
            console.log("GOT LADDER!");
            this.box = this.getMeshLadder(size);
            this.box.position.y = size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box, type);
        }
        else if (type === Tile.TILE_GATES || type === Tile.TILE_GATES_SECRET) {
            console.log("GOT GATES!");
            //Create the ground
            this.box = this.getMeshGround(size, "./assets/textures/floor_dalle_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box, Tile.TILE_GROUND);
            this.door = this.getMeshGate(size, x, y, z, val_);
            this.door.position.y = size * 0.5 + y;
            this.door.position.x = x;
            this.door.position.z = z;
        }
        else if (type === Tile.TILE_DOOR) {
            console.log("GOT DOOR!");
            //Create the ground
            this.box = this.getMeshGround(size, "./assets/textures/floor_dalle_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box, Tile.TILE_GROUND);
            this.door = this.getMeshDoor(size, x, y, z, false);
            this.door.position.y = size * 0.5 + y;
            this.door.position.x = x;
            this.door.position.z = z;
        }
        else if (type === Tile.TILE_DOOR_SECRET) {
            console.log("GOT DOOR!");
            //Create the ground
            this.box = this.getMeshGround(size, "./assets/textures/floor_dalle_text.jpg");
            this.box.position.y = -size * 0.5 + y;
            this.box.position.x = x;
            this.box.position.z = z;
            this.mapInstance.addMeshToCluster(this.box, Tile.TILE_GROUND);
            this.door = this.getMeshDoor(size, x, y, z, true);
            this.door.position.y = size * 0.5 + y;
            this.door.position.x = x;
            this.door.position.z = z;
        }
        else {
            console.log("type not found! type " + type);
        }
        /*
        
        this.gameInstance.shadowGen.getShadowMap().renderList.push( this.box );
        this.box.receiveShadows = true;*/
    }
    Object.defineProperty(Tile, "TILE_EMPTY", {
        get: function () { return -1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_GROUND", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_WALL", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_GATES", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_DOOR", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_DOOR_SECRET", {
        get: function () { return 5; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_LADDER", {
        get: function () { return 66; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_GRASS", {
        get: function () { return 7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_START", {
        //public static get TILE_ADVERTISEMENT():number { return 12; }
        get: function () { return 13; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Tile, "TILE_GATES_SECRET", {
        get: function () { return 14; },
        enumerable: true,
        configurable: true
    });
    Tile.prototype.getMeshGround = function (size_, text_) {
        if (!Tile.meshGroundInstance) {
            var mesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("groundTile", { size: size_ }, this.gameInstance.scene);
            mesh.checkCollisions = true;
            var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matGround", this.gameInstance.scene);
            var textureBox = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"](text_, this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
            mat.diffuseTexture.scale(1 / 4);
            mesh.material = mat;
            Tile.meshGroundInstance = mesh;
            this.gameInstance.setShadow(mesh);
            mat.freeze();
            mesh.convertToUnIndexedMesh();
            mesh.freezeWorldMatrix();
        }
        return Tile.meshGroundInstance.clone("Box Ground");
    };
    Tile.prototype.getMeshGrass = function (size_, text_) {
        if (!Tile.meshGrassInstance) {
            var mesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("grassTile", { size: size_ }, this.gameInstance.scene);
            mesh.checkCollisions = true;
            var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matGrass", this.gameInstance.scene);
            var textureBox = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"](text_, this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
            mat.diffuseTexture.scale(1 / 4);
            mesh.material = mat;
            Tile.meshGrassInstance = mesh;
            this.gameInstance.setShadow(mesh);
            mat.freeze();
            mesh.convertToUnIndexedMesh();
            mesh.freezeWorldMatrix();
        }
        return Tile.meshGrassInstance.clone("Box Grass");
    };
    Tile.prototype.getMeshWall = function (size_) {
        if (!Tile.meshWallInstance) {
            var mesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("myBox", { size: size_ }, this.gameInstance.scene);
            mesh.checkCollisions = true;
            var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matBox", this.gameInstance.scene);
            var textureBox = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Texture"]("./assets/textures/concrete_text.jpg", this.gameInstance.scene);
            mat.diffuseTexture = textureBox;
            mesh.material = mat;
            Tile.meshWallInstance = mesh;
            this.gameInstance.setShadow(mesh);
            mat.freeze();
            mesh.convertToUnIndexedMesh();
            mesh.freezeWorldMatrix();
        }
        return Tile.meshWallInstance.clone("groundTile");
    };
    /*
    getMeshAd(size_){

        let mesh = MeshBuilder.CreateBox("myBox", {size: size_},  this.gameInstance.scene);
        mesh.checkCollisions = true;
        let mat = new StandardMaterial("matBoxLadder", this.gameInstance.scene);
        mat.diffuseColor = BABYLON.Color3.Black();
        mesh.material = mat;
        mesh.convertToUnIndexedMesh();
        mat.freeze();

        return  mesh;
    }*/
    Tile.prototype.getMeshLadder = function (size_) {
        var mesh = babylonjs__WEBPACK_IMPORTED_MODULE_0__["MeshBuilder"].CreateBox("ladder", { size: size_ }, this.gameInstance.scene);
        mesh.checkCollisions = true;
        var mat = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["StandardMaterial"]("matBoxLadder", this.gameInstance.scene);
        mat.diffuseColor = babylonjs__WEBPACK_IMPORTED_MODULE_0__["Color3"].Red();
        mesh.material = mat;
        mesh.convertToUnIndexedMesh();
        mat.freeze();
        return mesh;
    };
    Tile.prototype.getMeshDoor = function (size_, x_, y_, z_, secret_) {
        var door = new _door__WEBPACK_IMPORTED_MODULE_4__["Door"](this.tileCoordonates[0] + "_" + this.tileCoordonates[1] + "_" + this.tileCoordonates[2], size_, x_, y_, z_, secret_);
        return door.doorMesh;
    };
    Tile.prototype.getMeshGate = function (size_, x_, y_, z_, key_) {
        var gate = new _gate__WEBPACK_IMPORTED_MODULE_5__["Gate"](this.tileCoordonates[0] + "_" + this.tileCoordonates[1] + "_" + this.tileCoordonates[2], size_, x_, y_, z_, key_);
        return gate.doorMesh;
    };
    return Tile;
}());



/***/ }),

/***/ "./src/app/services/chan-web.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/chan-web.service.ts ***!
  \**********************************************/
/*! exports provided: ChanWebService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChanWebService", function() { return ChanWebService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _offline_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offline.service */ "./src/app/services/offline.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChanWebService = /** @class */ (function () {
    //playerData : PlayerModel;
    function ChanWebService(http, offlineService) {
        this.http = http;
        this.offlineService = offlineService;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl;
    }
    /***********************
     * CHAN/POST WEBSERVICE
     **********************/
    //Init the server URL for the WS
    ChanWebService.prototype.setServerUrl = function (url) {
        this.serverUrl = url;
    };
    //Get thread posts list
    ChanWebService.prototype.getMapPostList = function (playerX_, playerY_, name_, talk_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'getMapPosts');
        body = body.append('position_x', playerX_);
        body = body.append('position_y', playerY_);
        body = body.append('name', name_);
        body = body.append('talk', talk_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    //Get thread posts list
    ChanWebService.prototype.getCanvasPostList = function (mapKey, canvasKey) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'getPostsByCanvas');
        body = body.append('map_key', mapKey);
        body = body.append('canvas_key', canvasKey);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    //Get thread posts list
    ChanWebService.prototype.getReplyPostList = function (id_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'getReplies');
        body = body.append('post_id', id_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    //Create post
    ChanWebService.prototype.createPost = function (post_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'createPost');
        body = body.append('url', post_.url);
        body = body.append('message', post_.message);
        body = body.append('canvas_key', post_.canvas_key);
        body = body.append('map_key', post_.map_key);
        body = body.append('reply', post_.reply.toString());
        //body = body.set('action' , 'createThread');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.createLog = function (action_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'setAction');
        body = body.append('player_action', action_.action);
        body = body.append('value', action_.value);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.createAndUploadPaint = function (post_, imageData_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'createPost');
        body = body.append('message', post_.message);
        body = body.append('canvas_key', post_.canvas_key);
        body = body.append('map_key', post_.map_key);
        body = body.append('reply', post_.reply.toString());
        body = body.append('image_data', imageData_);
        body = body.append('graffiti', post_.graffiti.toString());
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        //http://j-query.blogspot.com/2011/02/save-base64-encoded-canvas-image-to-png.html
        //body = body.set('action' , 'createThread');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    /***********************
     * PLAYER WEBSERVICE
     **********************/
    //Get thread posts list
    /*setMap(mapKey){
    
      let body = new HttpParams();
      body = this.addPlayerParams(body);
      body = body.append('map_key', mapKey);
      body = body.append('action', 'changeMapPlayer');
      return this.http.post<PlayerResponseModel>(this.serverUrl+'ChanWebService.php',body);
    
    }*/
    ChanWebService.prototype.changeMapPlayerName = function (mapName) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('map_name', mapName);
        body = body.append('action', 'changeMapPlayerName');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.changeMapRandom = function (isSecret_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('secret', isSecret_);
        body = body.append('action', 'changeMapRandom');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.getItem = function (itemKey) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('item_key', itemKey);
        body = body.append('action', 'setPlayerItem');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.addPlayerParams = function (body_) {
        var playerData = this.offlineService.getPlayerData();
        body_ = body_.append('player_id', playerData.id.toString());
        body_ = body_.append('player_key', playerData.player_key);
        return body_;
    };
    ChanWebService.prototype.createUser = function (anonId, anonToken, password, mapKey) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = body.append('action', 'initPlayer');
        if (anonId)
            body = body.append('player_id', anonId);
        if (anonToken)
            body = body.append('player_key', anonToken);
        if (password)
            body = body.append('player_password', password);
        if (mapKey)
            body = body.append('map_key', mapKey);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.getAds = function () {
        return this.http.get('./assets/amaz/amaz.json');
    };
    /***********************
     * ADMIN WEBSERVICE
     **********************/
    ChanWebService.prototype.deletePost = function (postId_, threadId_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'deletePost');
        body = body.append('post_id', postId_.toString());
        body = body.append('map_key', threadId_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.setPostUrlToFile = function (postId_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'setPostUrlToFile');
        body = body.append('post_id', postId_.toString());
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.deletePostForVal = function (val_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'deletePostForVal');
        body = body.append('val', val_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.setBan = function (id_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'setBan');
        body = body.append('post_id', id_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.canonPost = function (postId_, threadId_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'setPostCanon');
        body = body.append('post_id', postId_.toString());
        body = body.append('map_key', threadId_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.isAdminConnected = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = body.append('action', 'testAdminSession');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.connectAdmin = function (password_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = body.append('action', 'validAdmin');
        body = body.append('password', password_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.setAdminPassword = function (password_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = body.append('action', 'setAdminPassword');
        body = body.append('password', password_);
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.logout = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = body.append('action', 'unLog');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.getAllPost = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'getAllPost');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.getAllMaps = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'getAllMaps');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.getAllTiles = function () {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'getAllTiles');
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService.prototype.saveMapModel = function (map_) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        body = this.addPlayerParams(body);
        body = body.append('action', 'saveMapModel');
        body = body.append('id', map_.id.toString());
        body = body.append('key', map_.key);
        body = body.append('name', map_.name);
        body = body.append('theme', map_.theme);
        body = body.append('x', map_.x.toString());
        body = body.append('y', map_.y.toString());
        body = body.append('door_key_n', map_.door_key_n);
        body = body.append('door_key_e', map_.door_key_e);
        body = body.append('door_key_s', map_.door_key_s);
        body = body.append('door_key_w', map_.door_key_w);
        body = body.append('level_data', map_.level_data);
        body = body.append('height', map_.height.toString());
        body = body.append('width', map_.width.toString());
        return this.http.post(this.serverUrl + 'ChanWebService.php', body);
    };
    ChanWebService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _offline_service__WEBPACK_IMPORTED_MODULE_3__["OfflineService"]])
    ], ChanWebService);
    return ChanWebService;
}());



/***/ }),

/***/ "./src/app/services/game-uiservice.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/game-uiservice.service.ts ***!
  \****************************************************/
/*! exports provided: GameUIServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameUIServiceService", function() { return GameUIServiceService; });
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

var GameUIServiceService = /** @class */ (function () {
    function GameUIServiceService() {
        this.changeStateEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        //public changePlayerDataEmitter = new EventEmitter<PlayerModel>();
        //public changeItemsDataEmitter = new EventEmitter<any>();
        this.changeGameDataEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.changeConfigEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.sendInteractionsEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.postArtCanvasEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deletePostEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.forceWSEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.gameState = GameUIServiceService_1.STATE_GAME_RUNNING;
    }
    GameUIServiceService_1 = GameUIServiceService;
    Object.defineProperty(GameUIServiceService, "STATE_GAME_RUNNING", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_POSTING_UI", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_POST_VIEWER_UI", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_POSTING_LOADING", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_PAINTING_UI", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_CMD_UI", {
        get: function () { return 5; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_INFO_UI", {
        get: function () { return 6; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_ITEMS_UI", {
        get: function () { return 7; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_NO_PLAYER", {
        get: function () { return 8; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameUIServiceService, "STATE_PLAYER_UI", {
        get: function () { return 9; },
        enumerable: true,
        configurable: true
    });
    GameUIServiceService.prototype.changeState = function (state_) {
        this.gameState = state_;
        this.changeStateEmitter.emit(this.gameState);
    };
    GameUIServiceService.prototype.sendInteraction = function (interact_) {
        this.sendInteractionsEmitter.emit(interact_);
    };
    GameUIServiceService.prototype.sendPost = function (post_) {
        this.postArtCanvasEmitter.emit(post_);
    };
    GameUIServiceService.prototype.updateGameData = function (gameData_) {
        this.changeGameDataEmitter.emit(gameData_);
    };
    /*
    public updatePlayerData(playerData_ : PlayerModel){
      this.changePlayerDataEmitter.emit( playerData_);
    }
  
    public updateItemsData(itemsData){
      console.log(itemsData);
      this.changeItemsDataEmitter.emit( {items: itemsData});
    }*/
    GameUIServiceService.prototype.updateConfigData = function (config_) {
        this.changeConfigEmitter.emit(config_);
    };
    GameUIServiceService.prototype.forceWS = function () {
        this.forceWSEmitter.emit();
    };
    GameUIServiceService.prototype.deletePost = function (post_) {
        this.deletePostEmitter.emit(post_);
    };
    GameUIServiceService = GameUIServiceService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GameUIServiceService);
    return GameUIServiceService;
    var GameUIServiceService_1;
}());



/***/ }),

/***/ "./src/app/services/offline.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/offline.service.ts ***!
  \*********************************************/
/*! exports provided: OfflineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineService", function() { return OfflineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_player_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/player.model */ "./src/app/models/player.model.ts");
/* harmony import */ var _models_config_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/config.model */ "./src/app/models/config.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OfflineService = /** @class */ (function () {
    function OfflineService() {
        this.PLAYER_KEY = "player_one_data2";
        this.PLAYER_NAME_KEY = "player_name";
        this.KEYBOARD_KEY = "keyboard";
        this.CONFIG_KEY = "config_key";
        this.CHAN_KEY = "CHAN_KEY3";
    }
    OfflineService.prototype.getPlayerData = function () {
        var data = localStorage.getItem(this.PLAYER_KEY);
        if (data != null)
            return JSON.parse(data);
        return new _models_player_model__WEBPACK_IMPORTED_MODULE_1__["PlayerModel"]();
    };
    OfflineService.prototype.savePlayer = function (player_) {
        return localStorage.setItem(this.PLAYER_KEY, JSON.stringify(player_));
    };
    OfflineService.prototype.getPlayerName = function () {
        var data = localStorage.getItem(this.PLAYER_NAME_KEY);
        if (data != null)
            return data;
        var name = Math.random().toString(36).substr(2, 9);
        this.savePlayerName(name);
        return name;
    };
    OfflineService.prototype.savePlayerName = function (playerName_) {
        return localStorage.setItem(this.PLAYER_NAME_KEY, JSON.stringify(playerName_));
    };
    OfflineService.prototype.getConfig = function () {
        var data = localStorage.getItem(this.CONFIG_KEY);
        console.log("getConfig" + data);
        if (data != null)
            return JSON.parse(data);
        return new _models_config_model__WEBPACK_IMPORTED_MODULE_2__["ConfigModel"]();
    };
    OfflineService.prototype.saveConfig = function (config_) {
        localStorage.setItem(this.CONFIG_KEY, JSON.stringify(config_));
    };
    OfflineService.prototype.getChanData = function () {
        var data = localStorage.getItem(this.CHAN_KEY);
        if (data != null)
            return JSON.parse(data);
        return ['alpha'];
    };
    OfflineService.prototype.saveChan = function (chan_) {
        var listChan = this.getChanData();
        for (var c = 0; c < listChan.length; c++) {
            if (listChan[c] == chan_)
                return;
        }
        listChan.push(chan_);
        return localStorage.setItem(this.CHAN_KEY, JSON.stringify(listChan));
    };
    OfflineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], OfflineService);
    return OfflineService;
}());



/***/ }),

/***/ "./src/app/utils/constants.ts":
/*!************************************!*\
  !*** ./src/app/utils/constants.ts ***!
  \************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "ITEM_KEY_UPLOAD_RING", {
        get: function () { return "upload"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "ITEM_KEY_DELETE_SPONGE", {
        get: function () { return "post delete"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "ITEM_KEY_VARNISH", {
        get: function () { return "varnish powder"; },
        enumerable: true,
        configurable: true
    });
    return Constants;
}());



/***/ }),

/***/ "./src/app/utils/helpers.ts":
/*!**********************************!*\
  !*** ./src/app/utils/helpers.ts ***!
  \**********************************/
/*! exports provided: Helpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Helpers", function() { return Helpers; });
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    /**
     * Determine the mobile operating system.
     * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
     *
     * @returns {Boolean}
     */
    Helpers.isMobile = function () {
        var userAgent = navigator.userAgent || navigator.vendor;
        // Windows Phone must come first because its UA also contains "Android"
        if (/windows phone/i.test(userAgent)) {
            return true;
        }
        if (/android/i.test(userAgent)) {
            return true;
        }
        // iOS detection from: http://stackoverflow.com/a/9039885/177710
        if (/iPad|iPhone|iPod/.test(userAgent)) {
            return true;
        }
        return false;
    };
    Helpers.antiWord = function (message_) {
        return message_.replace(/nigger/ig, 'noggel');
    };
    Helpers.isPT = function () {
        var lang = navigator.language;
        return (lang.toLowerCase().indexOf('pt') > -1 || lang.toLowerCase().indexOf('BR') > -1);
    };
    return Helpers;
}());



/***/ }),

/***/ "./src/app/utils/urlParser.ts":
/*!************************************!*\
  !*** ./src/app/utils/urlParser.ts ***!
  \************************************/
/*! exports provided: UrlParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlParser", function() { return UrlParser; });
var UrlParser = /** @class */ (function () {
    function UrlParser(url_) {
        this.type = 0;
        this.url = url_;
        this.type = this.getUrlType();
        return this;
    }
    Object.defineProperty(UrlParser, "TYPE_LINK", {
        get: function () { return 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlParser, "TYPE_IMG", {
        get: function () { return 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlParser, "TYPE_IMG_GIF", {
        get: function () { return 2; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlParser, "TYPE_MOVIE", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlParser, "TYPE_YOUTUBE", {
        get: function () { return 4; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UrlParser, "TYPE_MP3", {
        get: function () { return 5; },
        enumerable: true,
        configurable: true
    });
    UrlParser.prototype.setUrl = function (url_) {
        this.url = url_;
        this.type = this.getUrlType();
        return this;
    };
    UrlParser.prototype.getUrlType = function () {
        if (this.url != undefined) {
            var tempUrl = this.url.toLowerCase();
            if (tempUrl.indexOf("png") > -1 || tempUrl.indexOf("jpg") > -1 || tempUrl.indexOf("jpeg") > -1 || tempUrl.indexOf("webp") > -1) {
                return UrlParser.TYPE_IMG;
            }
            else if (tempUrl.indexOf("gif") > -1) {
                return UrlParser.TYPE_IMG_GIF;
            }
            else if (tempUrl.indexOf(".mp4") > -1 || tempUrl.indexOf(".webm") > -1) {
                return UrlParser.TYPE_MOVIE;
            }
            else if (tempUrl.indexOf("youtube.com") > -1 || tempUrl.indexOf("youtu.be") > -1) {
                return UrlParser.TYPE_YOUTUBE;
            }
            else if (tempUrl.indexOf("mp3") > -1) {
                return UrlParser.TYPE_MP3;
            }
        }
        return UrlParser.TYPE_LINK;
    };
    UrlParser.prototype.getYoutubeId = function () {
        var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        var match = this.url.match(regExp);
        if (match && match[2].length == 11) {
            return match[2];
        }
        else {
            return "";
        }
    };
    UrlParser.prototype.getImage = function () {
        if (this.type === UrlParser.TYPE_YOUTUBE) {
            //get the preview
            return "https://img.youtube.com/vi/" + this.getYoutubeId() + "/hqdefault.jpg";
        }
        return this.url;
    };
    UrlParser.prototype.getSafeTubeURL = function (sanitizer_) {
        var tmpURl;
        if (this.type === UrlParser.TYPE_YOUTUBE) {
            //get the preview
            tmpURl = "https://www.youtube.com/embed/" + this.getYoutubeId();
            return sanitizer_.bypassSecurityTrustResourceUrl(tmpURl);
        }
        return this.url;
    };
    return UrlParser;
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
    production: false,
    apiUrl: 'http://localhost:8888/srv/php/',
    clientUrl: '/',
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

module.exports = __webpack_require__(/*! /Users/alexandre/Desktop/Alexandre/projetZ/wip/SITEZ/Marquis/Protagoras/ProtagurOS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map