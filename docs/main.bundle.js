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

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <app-header></app-header>\n  <app-sidebar></app-sidebar>\n  <!-- Content Wrapper. Contains page content -->\n  <!-- Error message alert Here -->\n  <div bsModal class=\"modal fade\" #errorAlertModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-alert></app-alert>\n  </div>\n  <!-- root modal -->\n  <div bsModal class=\"modal fade\" #alertModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-alert></app-alert>\n  </div>\n  <div bsModal class=\"modal fade\" #yesOrNoModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-yes-or-no></app-yes-or-no>\n  </div>\n  <div bsModal class=\"modal fade\" #promptModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-prompt></app-prompt>\n  </div>\n  <div bsModal class=\"modal fade\" #loginModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-login></app-login>\n  </div>\n  <div bsModal class=\"modal fade\" #signupModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-signup></app-signup>\n  </div>\n  <div bsModal class=\"modal fade\" #settleOrRecordModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-settle-or-record></app-settle-or-record>\n  </div>\n  <div bsModal class=\"modal fade\" #createContractModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-create-contract></app-create-contract>\n  </div>\n  <div bsModal class=\"modal fade\" #joinContractModal=\"bs-modal\" tabindex=\"-1\" role=\"dialog\">\n    <app-join-contract></app-join-contract>\n  </div>\n  <!-- /.modal -->\n  <div class=\"content-wrapper\">\n    <!-- Your Page Content Here -->\n    <router-outlet></router-outlet>\n  </div>\n  <!-- /.content-wrapper -->\n\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(modalService, httpClientService) {
        this.modalService = modalService;
        this.httpClientService = httpClientService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.httpClientService.get('').subscribe(function (next) {
            console.log('%cconnect to web server normal', 'color:#20C0ED');
        }, function (error) {
            console.log("%ccan't not connect to web server", 'color:#DB4D3F');
        });
        this.httpClientService.postJson('/ethereum/getCoinbase', {}).subscribe(function (next) {
            var data = next.json();
            if (data.success) {
                console.log("%cconnect to geth server normal", 'color:#20C0ED');
            }
            else {
                console.log("%ccan't not connect to geth server", 'color:#DB4D3F');
            }
        }, function (error) {
            console.log("%ccan't not connect to server", 'color:#DB4D3F');
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.modalService.setSingupModal(this.signupModal);
        this.modalService.setLoginModal(this.loginModal);
        this.modalService.setCreateContractModal(this.createContractModal);
        this.modalService.setJoinContractModal(this.joinContractModal);
        this.modalService.setPromptModal(this.promptModal);
        this.modalService.setYesOrNoModal(this.yesOrNoModal);
        this.modalService.setAlertModal(this.alertModal);
        this.modalService.setErrorAlertModal(this.errorAlertModal);
        this.modalService.setSettleOrRecord(this.settleOrRecordModal);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('signupModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "signupModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('loginModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "loginModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('createContractModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "createContractModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('joinContractModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "joinContractModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('promptModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "promptModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('yesOrNoModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "yesOrNoModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('alertModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "alertModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('errorAlertModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "errorAlertModal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('settleOrRecordModal'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "settleOrRecordModal", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_2__shared_httpclient_service__["a" /* HttpClientService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_layout_layout_module__ = __webpack_require__("../../../../../src/app/shared/layout/layout.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_share_module__ = __webpack_require__("../../../../../src/app/shared/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modal_login_login_component__ = __webpack_require__("../../../../../src/app/modal/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_alert_alert_component__ = __webpack_require__("../../../../../src/app/modal/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_prompt_prompt_component__ = __webpack_require__("../../../../../src/app/modal/prompt/prompt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modal_yes_or_no_yes_or_no_component__ = __webpack_require__("../../../../../src/app/modal/yes-or-no/yes-or-no.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modal_signup_signup_component__ = __webpack_require__("../../../../../src/app/modal/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__modal_create_contract_create_contract_component__ = __webpack_require__("../../../../../src/app/modal/create-contract/create-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__mycontract_mycontract_component__ = __webpack_require__("../../../../../src/app/mycontract/mycontract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__modal_join_contract_join_contract_component__ = __webpack_require__("../../../../../src/app/modal/join-contract/join-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__modal_settle_or_record_settle_or_record_component__ = __webpack_require__("../../../../../src/app/modal/settle-or-record/settle-or-record.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// global module

// temp



// modal






// pages




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_18__mycontract_mycontract_component__["a" /* MycontractComponent */],
                __WEBPACK_IMPORTED_MODULE_15__modal_signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_16__modal_create_contract_create_contract_component__["a" /* CreateContractComponent */],
                __WEBPACK_IMPORTED_MODULE_19__modal_join_contract_join_contract_component__["a" /* JoinContractComponent */],
                __WEBPACK_IMPORTED_MODULE_11__modal_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__modal_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_13__modal_prompt_prompt_component__["a" /* PromptComponent */],
                __WEBPACK_IMPORTED_MODULE_14__modal_yes_or_no_yes_or_no_component__["a" /* YesOrNoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__modal_settle_or_record_settle_or_record_component__["a" /* SettleOrRecordComponent */],
            ],
            imports: [
                // perimeng
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DataTableModule"],
                // angular
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_9__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["a" /* ModalModule */].forRoot(),
                // route
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* AppRoutes */]),
                // shareModule
                __WEBPACK_IMPORTED_MODULE_6__shared_layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_7__shared_share_module__["a" /* SharedModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_primeng__["DataTableModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mycontract_mycontract_component__ = __webpack_require__("../../../../../src/app/mycontract/mycontract.component.ts");
// import { AppComponent } from './app.component';


var AppRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'main',
        component: __WEBPACK_IMPORTED_MODULE_0__main_main_component__["a" /* MainComponent */]
    },
    {
        path: 'mycontract',
        component: __WEBPACK_IMPORTED_MODULE_1__mycontract_mycontract_component__["a" /* MycontractComponent */]
    },
];


/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">所有合約</section>\n<section class=\"content\">\n  <div class=\"row\">\n    <div *ngFor=\"let address of contractService.contractsAddress\" class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n      <div class=\"box box-info\">\n        <div class=\"box-header with-border\">創建人：{{ contractService.contractsList[address].accountID }}</div>\n        <div class=\"box-body\">{{ contractService.contractsList[address].description }}</div>\n        <div class=\"box-footer\">\n          <div class=\"pull-right\">\n            <button *ngIf=\"contractService.contractsList[address].accountID !== accountService.accountID\" href=\"#\" class=\"btn btn-default\" (click)=\"join(address)\">參與</button>\n            <button *ngIf=\"contractService.contractsList[address].accountID === accountService.accountID\" href=\"#\" class=\"btn btn-default\" (click)=\"settleOrRecord(address)\">結算或紀錄</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_contract_service__ = __webpack_require__("../../../../../src/app/shared/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var MainComponent = (function () {
    function MainComponent(httpClient, modalService, accountService, contractService) {
        this.httpClient = httpClient;
        this.modalService = modalService;
        this.accountService = accountService;
        this.contractService = contractService;
        this.getContractLoop = true;
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.ngAfterViewChecked = function () {
    };
    MainComponent.prototype.check = function (value) {
        return value;
    };
    MainComponent.prototype.join = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var date, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.contractService.contractsList[address].accountID !== this.accountService.accountID)) return [3 /*break*/, 3];
                        if (!this.accountService.LoginCheck()) return [3 /*break*/, 2];
                        this.modalService.data.accountID = this.contractService.contractsList[address].accountID;
                        this.modalService.data.targetWeight = this.contractService.contractsList[address].targetWeight;
                        this.modalService.data.lastWeight = this.contractService.contractsList[address].lastWeight;
                        this.modalService.data.margin = parseFloat(this.contractService.contractsList[address].margin) / 1000000000000000000;
                        date = new Date(this.contractService.contractsList[address].expiryDate);
                        this.modalService.data.expiryDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
                        this.modalService.data.description = this.contractService.contractsList[address].description;
                        this.modalService.data.address = address;
                        _a = this.modalService.data;
                        _b = parseFloat;
                        return [4 /*yield*/, this.contractService.getContractTotal(address)];
                    case 1:
                        _a.total = _b.apply(void 0, [_c.sent()]) / 1000000000000000000 || 'N/A';
                        this.modalService.joinContract.show();
                        return [3 /*break*/, 3];
                    case 2:
                        this.modalService.login.show();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MainComponent.prototype.ngOnDestroy = function () {
        this.getContractLoop = false;
    };
    MainComponent.prototype.settleOrRecord = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var date, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.contractService.contractsList[address].accountID === this.accountService.accountID)) return [3 /*break*/, 3];
                        if (!this.accountService.LoginCheck()) return [3 /*break*/, 2];
                        this.modalService.data.accountID = this.contractService.contractsList[address].accountID;
                        this.modalService.data.targetWeight = this.contractService.contractsList[address].targetWeight;
                        this.modalService.data.lastWeight = this.contractService.contractsList[address].lastWeight;
                        this.modalService.data.margin = parseFloat(this.contractService.contractsList[address].margin) / 1000000000000000000;
                        date = new Date(this.contractService.contractsList[address].expiryDate);
                        this.modalService.data.expiryDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
                        this.modalService.data.description = this.contractService.contractsList[address].description;
                        this.modalService.data.address = address;
                        _a = this.modalService.data;
                        _b = parseFloat;
                        return [4 /*yield*/, this.contractService.getContractTotal(address)];
                    case 1:
                        _a.total = _b.apply(void 0, [_c.sent()]) / 1000000000000000000 || 'N/A';
                        this.modalService.settleOrRecord.show();
                        return [3 /*break*/, 3];
                    case 2:
                        this.modalService.login.show();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_httpclient_service__["a" /* HttpClientService */], __WEBPACK_IMPORTED_MODULE_4__shared_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__shared_contract_service__["a" /* ContractService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-sm\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">\n        建立合約\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n\n    </div>\n    <div class=\"modal-footer\">\n\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = (function () {
    function AlertComponent() {
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/modal/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/alert/alert.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/create-contract/create-contract.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/create-contract/create-contract.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-hidden=\"true\">\n        &times;\n      </button>\n      <h4 class=\"modal-title\">\n        建立合約\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal text-left\" id=\"createContractForm\" [formGroup]=\"createContractForm\" (ngSubmit)=\"onSubmit(createContractForm)\">\n        <div class=\"row\">\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"targetWeight\" class=\"col-sm-4\">目標體重</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" required=\"required\" class=\"form-control\" id=\"targetWeight\" formControlName=\"targetWeight\" placeholder=\"目標體重\" (input)=\"positiveCheck($event)\">\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"lastWeight\" class=\"col-sm-4\">目前體重</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" required=\"required\" class=\"form-control\" id=\"lastWeight\" formControlName=\"lastWeight\" placeholder=\"目前體重\" (input)=\"positiveCheck($event)\">\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"margin\" class=\"col-sm-4\">保證金</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" required=\"required\" class=\"form-control\" id=\"margin\" formControlName=\"margin\" placeholder=\"保證金\" (input)=\"positiveCheck($event)\">\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"expiryDate\" required=\"required\" class=\"col-sm-4\">到期日</label>\n            <p-calendar name='expiryDate' id='expiryDate' [minDate]=\"minDate\" [maxDate]=\"maxDate\" formControlName=\"expiryDate\" placeholder=\"到期日\" [showIcon]=\"true\"></p-calendar>\n          </div>\n          <div class=\"form-group col-md-12\">\n            <label for=\"description\" class=\"col-md-12\">說明</label>\n            <div class=\"col-md-offset-1\">\n              <textarea class=\"form-control col-md-12\" id=\"description\" formControlName=\"description\" rows=\"3\" placeholder=\"說明 ...（限150個字)\"></textarea>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"pull-left\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\">關閉\n        </button>\n      </div>\n      <div class=\"pull-right\">\n        <button type=\"submit\" form=\"createContractForm\" id=\"createContractBtn\" class=\"btn btn-info\">建立合約</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/create-contract/create-contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateContractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateContractComponent = (function () {
    function CreateContractComponent(modalService, httpClientService, accountService) {
        this.modalService = modalService;
        this.httpClientService = httpClientService;
        this.accountService = accountService;
    }
    CreateContractComponent.prototype.ngOnInit = function () {
        this.minDate = new Date();
        this.maxDate = new Date();
        this.maxDate.setFullYear(this.minDate.getFullYear() + 10);
        this.createContractForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            targetWeight: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            lastWeight: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            margin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            expiryDate: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            description: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
    };
    CreateContractComponent.prototype.onSubmit = function (createContractForm) {
        var _this = this;
        document.getElementById('createContractBtn').classList.add('disabled');
        var value = {};
        Object.assign(value, createContractForm.value);
        for (var key in createContractForm.value) {
            if (value[key] === undefined || value[key] === '') {
                alert('請填寫完整');
                document.getElementById('createContractBtn').classList.remove('disabled');
                return;
            }
        }
        if (parseFloat(value['targetWeight']) >= parseFloat(value['lastWeight'])) {
            alert('目標體重需比目前體重小');
            document.getElementById('createContractBtn').classList.remove('disabled');
            return;
        }
        // ToDo保證金驗證餘額;
        if (parseFloat(value['margin']) <= 0) {
            alert('保證金需大於0');
            document.getElementById('createContractBtn').classList.remove('disabled');
            return;
        }
        var password = prompt('please input password');
        value.password = password;
        value.expiryDate = value.expiryDate.getTime();
        value.address = this.accountService.address;
        value.accountID = this.accountService.accountID;
        this.httpClientService.postJson('/ethereum/createContract', value).subscribe(function (next) {
            var data = next.json();
            if (data.success) {
                _this.accountService.contractsAddress = data.contractsAddress;
            }
            else {
                alert('建立失敗');
            }
            _this.closeModal();
        }, function (error) {
            console.log(error);
            document.getElementById('createContractBtn').classList.remove('disabled');
        }, function () {
            _this.accountService.getBalance();
        });
    };
    CreateContractComponent.prototype.closeModal = function () {
        document.getElementById('createContractBtn').classList.remove('disabled');
        this.modalService.createContract.hide();
    };
    CreateContractComponent.prototype.positiveCheck = function (event) {
        if (event.target.value.match(/^(-|\.)/)) {
            event.target.value = '';
        }
        if (event.target.value === '') {
            event.target.value = '';
        }
    };
    CreateContractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-create-contract',
            template: __webpack_require__("../../../../../src/app/modal/create-contract/create-contract.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/create-contract/create-contract.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_account_service__["a" /* AccountService */]])
    ], CreateContractComponent);
    return CreateContractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/join-contract/join-contract.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/join-contract/join-contract.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-hidden=\"true\">\n        &times;\n      </button>\n      <h4 class=\"modal-title\">\n        參與{{ data.accountID }}的合約\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal text-left\" id=\"joinContractForm\" [formGroup]=\"joinContractForm\" (ngSubmit)=\"onSubmit(joinContractForm)\" >\n        <div class=\"row\">\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"targetWeight\" class=\"col-sm-4\">目標體重</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"targetWeight\" placeholder=\"目標體重\" value=\"{{ data.targetWeight }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"lastWeight\" class=\"col-sm-4\">目前體重</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"lastWeight\" placeholder=\"目前體重\" value=\"{{ data.lastWeight }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"margin\" class=\"col-sm-4\">保證金</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"margin\" placeholder=\"保證金\" value=\"{{ data.margin }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"expiryDate\" required=\"required\" class=\"col-sm-4\">到期日</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" id=\"expiryDate\" placeholder=\"到期日\" value=\"{{ data.expiryDate }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-12\">\n            <label for=\"description\" class=\"col-md-12\">說明</label>\n            <div class=\"col-md-offset-1\">\n              <textarea class=\"form-control col-md-12\" id=\"description\" rows=\"3\" placeholder=\"說明 ...（限150個字)\" disabled>{{ data.description }}</textarea>\n            </div>\n          </div>\n          <hr />\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"total\" class=\"col-md-4\">目前累計</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"total\" placeholder=\"累計總額\" value=\"{{ data.total }}\" disabled>\n            </div>\n          </div>\n          <div class=\" col-md-offset-2 col-md-6 col-xs-offset-2 col-xs-10 form-group\">\n            <div class=\"radio\">\n              <div class=\"col-md-6 col-xs-6\">\n                <label>\n                  <input name=\"position\" type=\"radio\" formControlName=\"position\" value=\"support\" (click)=\"changePosition( $event.target.value )\">支持\n                </label>\n              </div>\n              <div class=\"col-md-6 col-xs-6\">\n                <label>\n                  <input name=\"position\" type=\"radio\" formControlName=\"position\" value=\"oppose\" (click)=\"changePosition( $event.target.value )\">反對\n                </label>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"ether\" class=\"col-md-4\">{{ position }}</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"ether\" placeholder=\"How Ether\" formControlName=\"howEther\">\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"pull-left\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\">關閉\n        </button>\n      </div>\n      <div class=\"pull-right\">\n        <button type=\"submit\" form=\"joinContractForm\" id=\"joinContractBtn\" class=\"btn btn-info\">參與</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/join-contract/join-contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JoinContractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contract_service__ = __webpack_require__("../../../../../src/app/shared/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var JoinContractComponent = (function () {
    function JoinContractComponent(modalService, httpClientService, accountService, contractService) {
        this.modalService = modalService;
        this.httpClientService = httpClientService;
        this.accountService = accountService;
        this.contractService = contractService;
    }
    JoinContractComponent.prototype.ngOnInit = function () {
        this.data = this.modalService.data;
        this.joinContractForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            position: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            howEther: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('')
        });
    };
    JoinContractComponent.prototype.changePosition = function (value) {
        this.position = { Support: '支持金', Oppose: '反對金' }[value];
    };
    JoinContractComponent.prototype.closeModal = function () {
        this.modalService.joinContract.hide();
    };
    JoinContractComponent.prototype.onSubmit = function (joinContractForm) {
        var _this = this;
        document.getElementById('joinContractBtn').classList.add('disabled');
        joinContractForm.value.address = this.modalService.data.address;
        var password = prompt('please input password');
        joinContractForm.value.howEther = parseFloat(joinContractForm.value.howEther) + '000000000000000000';
        joinContractForm.value.password = password;
        joinContractForm.value.accountID = this.accountService.accountID;
        this.httpClientService.postJson('/ethereum/joinContract', joinContractForm.value).subscribe(function (next) { return __awaiter(_this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                data = next.json();
                if (data.success) {
                    this.accountService.contractsAddress = data.contractsAddress;
                }
                return [2 /*return*/];
            });
        }); }, function (error) {
            console.log(error);
        }, function () {
            _this.closeModal();
            document.getElementById('joinContractBtn').classList.remove('disabled');
            _this.accountService.getBalance();
        });
    };
    JoinContractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-join-contract',
            template: __webpack_require__("../../../../../src/app/modal/join-contract/join-contract.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/join-contract/join-contract.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_4__shared_contract_service__["a" /* ContractService */]])
    ], JoinContractComponent);
    return JoinContractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-sm\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-hidden=\"true\">\n        &times;\n      </button>\n      <h4 class=\"modal-title\">\n        登入\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal text-left\" id=\"loginform\" [formGroup]=\"loginform\">\n        <div class=\"form-group\">\n          <label for=\"loginAccount\" class=\"col-sm-3 control-label\">帳號：</label>\n          <div class=\"col-sm-9\">\n            <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"accountID\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"loginPassword\" class=\"col-sm-3 control-label\">密碼：</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" (input)=\"check($event)\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"pull-left\">\n        <button class=\"btn btn-default\" (click)=\"signup()\">註冊</button>\n      </div>\n      <div class=\"pull-right\">\n        <button class=\"btn btn-info\" (click)=\"onSubmit(loginform)\">登入</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(accountService, httpClientService, modalService) {
        this.accountService = accountService;
        this.httpClientService = httpClientService;
        this.modalService = modalService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormGroup"]({
            accountID: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](''),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"]('')
        });
    };
    LoginComponent.prototype.closeModal = function () {
        this.modalService.login.hide();
    };
    LoginComponent.prototype.check = function (event) {
        if (event.target.value.length === 0) {
            event.target.classList.remove('text-security-disc');
        }
        else {
            event.target.classList.add('text-security-disc');
        }
    };
    LoginComponent.prototype.signup = function () {
        this.modalService.signup.show();
    };
    LoginComponent.prototype.onSubmit = function (loginform) {
        var _this = this;
        this.accountService.Login(loginform.value).then(function (result) {
            if (result) {
                _this.modalService.login.hide();
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/modal/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_modal_service__["a" /* ModalService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/prompt/prompt.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/prompt/prompt.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-sm\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">\n        建立合約\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n\n    </div>\n    <div class=\"modal-footer\">\n\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/prompt/prompt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PromptComponent = (function () {
    function PromptComponent() {
    }
    PromptComponent.prototype.ngOnInit = function () {
    };
    PromptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-prompt',
            template: __webpack_require__("../../../../../src/app/modal/prompt/prompt.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/prompt/prompt.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PromptComponent);
    return PromptComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/settle-or-record/settle-or-record.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/settle-or-record/settle-or-record.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-hidden=\"true\">\n        &times;\n      </button>\n      <h4 class=\"modal-title\">\n        結算或紀錄體重\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal text-left\" id=\"settleOrRecordForm\" [formGroup]=\"settleOrRecordForm\" (ngSubmit)=\"onSubmit(settleOrRecordForm)\" >\n        <div class=\"row\">\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"targetWeight\" class=\"col-sm-4\">目標體重</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"targetWeight\" placeholder=\"目標體重\" value=\"{{ data.targetWeight }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"lastWeight\" class=\"col-sm-4\">目前體重</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"lastWeight\" placeholder=\"目前體重\" value=\"{{ data.lastWeight }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"margin\" class=\"col-sm-4\">保證金</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"margin\" placeholder=\"保證金\" value=\"{{ data.margin }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"expiryDate\" required=\"required\" class=\"col-sm-4\">到期日</label>\n            <div class=\"col-sm-8\">\n              <input type=\"text\" class=\"form-control\" id=\"expiryDate\" placeholder=\"到期日\" value=\"{{ data.expiryDate }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-12\">\n            <label for=\"description\" class=\"col-md-12\">說明</label>\n            <div class=\"col-md-offset-1\">\n              <textarea class=\"form-control col-md-12\" id=\"description\" rows=\"3\" placeholder=\"說明 ...（限150個字)\" disabled>{{ data.description }}</textarea>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"total\" class=\"col-md-4\">目前累計</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"total\" placeholder=\"累計總額\" value=\"{{ data.total }}\" disabled>\n            </div>\n          </div>\n          <div class=\"form-group col-md-6 col-xs-12\">\n            <label for=\"total\" class=\"col-md-4\">登記體重</label>\n            <div class=\"col-sm-8\">\n              <input type=\"number\" class=\"form-control\" id=\"total\" placeholder=\"登記體重\" [(ngModel)]=\"weight\" formControlName=\"recordWeight\" />\n            </div>\n          </div>\n          <hr />\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"pull-left\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\">關閉\n        </button>\n      </div>\n      <div class=\"pull-right\">\n        <button type=\"submit\" form=\"settleOrRecordForm\" id=\"settleOrRecordBtn\" class=\"btn btn-info\">{{ weight ? \"記錄體重\" : \"結算\" }}</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/settle-or-record/settle-or-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettleOrRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_contract_service__ = __webpack_require__("../../../../../src/app/shared/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var SettleOrRecordComponent = (function () {
    function SettleOrRecordComponent(modalService, httpClientService, accountService, contractService) {
        this.modalService = modalService;
        this.httpClientService = httpClientService;
        this.accountService = accountService;
        this.contractService = contractService;
        this.weight = '';
    }
    SettleOrRecordComponent.prototype.ngOnInit = function () {
        this.data = this.modalService.data;
        this.settleOrRecordForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            recordWeight: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
        });
    };
    SettleOrRecordComponent.prototype.closeModal = function () {
        this.modalService.settleOrRecord.hide();
    };
    SettleOrRecordComponent.prototype.onSubmit = function (form) {
        var _this = this;
        var password = prompt('please input password');
        form.value.password = password;
        form.value.accountID = this.accountService.accountID;
        form.value.contractAddress = this.modalService.data.address;
        if (this.weight) {
            this.httpClientService.postJson('/ethereum/recordWeight', form.value).subscribe(function (next) { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = next.json();
                    if (data.success) {
                        this.accountService.contractsAddress = data.contractsAddress;
                    }
                    return [2 /*return*/];
                });
            }); }, function (error) {
                console.log(error);
            }, function () {
                _this.closeModal();
                _this.accountService.getBalance();
                document.getElementById('settleOrRecordBtn').classList.remove('disabled');
            });
        }
        else {
            this.httpClientService.postJson('/ethereum/settle', form.value).subscribe(function (next) { return __awaiter(_this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_a) {
                    data = next.json();
                    if (data.success) { }
                    return [2 /*return*/];
                });
            }); }, function (error) {
                console.log(error);
            }, function () {
                _this.closeModal();
                document.getElementById('settleOrRecordBtn').classList.remove('disabled');
                _this.accountService.getBalance();
            });
        }
    };
    SettleOrRecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settle-or-record',
            template: __webpack_require__("../../../../../src/app/modal/settle-or-record/settle-or-record.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/settle-or-record/settle-or-record.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_3__shared_httpclient_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_5__shared_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_4__shared_contract_service__["a" /* ContractService */]])
    ], SettleOrRecordComponent);
    return SettleOrRecordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <button type=\"button\" class=\"close\" (click)=\"closeModal()\" aria-hidden=\"true\">\n        &times;\n      </button>\n      <h4 class=\"modal-title\">\n        註冊\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n      <form class=\"form-horizontal text-left\" id=\"signupform\" [formGroup]=\"signupform\">\n        <div class=\"form-group\">\n          <label for=\"signupAccount\" class=\"col-sm-3 control-label\">名稱：</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" id=\"signupAccount\" placeholder=\"Name\" formControlName=\"name\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"signupAccount\" class=\"col-sm-3 control-label\">帳號：</label>\n          <div class=\"col-sm-9\">\n            <input type=\"email\" class=\"form-control\" id=\"signupAccount\" placeholder=\"Email\" formControlName=\"accountID\">\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"signupPassword\" class=\"col-sm-3 control-label\">密碼：</label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" id=\"signupPassword\" placeholder=\"Password\" formControlName=\"password\" (input)=\"checkEq(signupform ,$event)\">\n          </div>\n        </div>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': checkbool, 'has-success': !checkbool}\">\n          <label for=\"signupCheckPasswd\" class=\"col-sm-3 control-label\">\n            <label class=\"control-label\">\n              <div class=\"fa fa-check\" *ngIf='!checkbool'></div>\n              <div class=\"fa fa-times-circle-o\" *ngIf='checkbool'></div>\n            </label>\n            再次確認：\n          </label>\n          <div class=\"col-sm-9\">\n            <input type=\"text\" class=\"form-control\" id=\"signupCheckPasswd\" placeholder=\"Dobule Check\" formControlName=\"checkpasswd\" (input)=\"checkEq(signupform ,$event)\">\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"modal-footer\">\n      <div class=\"pull-left\">\n        <button type=\"button\" class=\"btn btn-default\" (click)=\"closeModal()\">關閉\n        </button>\n      </div>\n      <div class=\"pull-right\">\n        <button class=\"btn btn-info\" id=\"signupBtn\" (click)=\"onSubmit(signupform)\">註冊</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = (function () {
    function SignupComponent(httpClient, accountService, modalService, router) {
        this.httpClient = httpClient;
        this.accountService = accountService;
        this.modalService = modalService;
        this.router = router;
        this.checkbool = null;
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.signupform = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            accountID: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
            checkpasswd: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](''),
        });
    };
    SignupComponent.prototype.checkEq = function (signupform, event) {
        if (event.target.value.length === 0) {
            event.target.classList.remove('text-security-disc');
        }
        else {
            event.target.classList.add('text-security-disc');
        }
        var singupInfo = signupform.value;
        if (singupInfo.password === singupInfo.checkpasswd) {
            this.checkbool = false;
        }
        else {
            this.checkbool = true;
        }
    };
    SignupComponent.prototype.onSubmit = function (signupform) {
        var _this = this;
        document.getElementById('signupBtn').classList.add('disabled');
        var singupInfo = signupform.value;
        for (var _i = 0, _a = Object.keys(singupInfo); _i < _a.length; _i++) {
            var key = _a[_i];
            if (singupInfo[key] === '') {
                alert(key + "\u5C1A\u672A\u586B\u5BEB");
                document.getElementById('signupBtn').classList.remove('disabled');
                break;
            }
        }
        var emailRule = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;
        if (!emailRule.test(singupInfo.accountID)) {
            alert('並非email');
            document.getElementById('signupBtn').classList.remove('disabled');
            return;
        }
        else if (singupInfo.password.length < 8) {
            alert('密碼長度不足8');
            document.getElementById('signupBtn').classList.remove('disabled');
            return;
        }
        if (singupInfo.password === singupInfo.checkpasswd) {
            this.httpClient.postJson('/ethereum/newAccount', singupInfo).subscribe(function (next) {
                var body = next.json();
                if (body.success) {
                    alert('成功註冊,請重新登入');
                }
                else {
                    alert('註冊失敗');
                }
                _this.closeModal();
            }, function (error) {
                alert('註冊失敗');
                _this.closeModal();
                console.log(error);
            });
        }
        else {
            alert('password no pass check');
        }
    };
    SignupComponent.prototype.closeModal = function () {
        document.getElementById('signupBtn').classList.remove('disabled');
        this.modalService.signup.hide();
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/modal/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_httpclient_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_modal_service__["a" /* ModalService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["Router"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modal/yes-or-no/yes-or-no.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modal/yes-or-no/yes-or-no.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog  modal-sm\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title\">\n        建立合約\n      </h4>\n    </div>\n    <div class=\"modal-body\">\n\n    </div>\n    <div class=\"modal-footer\">\n\n    </div>\n  </div>\n</div>\n<!-- /.modal-content -->\n"

/***/ }),

/***/ "../../../../../src/app/modal/yes-or-no/yes-or-no.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YesOrNoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YesOrNoComponent = (function () {
    function YesOrNoComponent() {
    }
    YesOrNoComponent.prototype.ngOnInit = function () {
    };
    YesOrNoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-yes-or-no',
            template: __webpack_require__("../../../../../src/app/modal/yes-or-no/yes-or-no.component.html"),
            styles: [__webpack_require__("../../../../../src/app/modal/yes-or-no/yes-or-no.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], YesOrNoComponent);
    return YesOrNoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mycontract/mycontract.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mycontract/mycontract.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"content-header\">\n  我的合約\n</section>\n<section class=\"content\">\n  <div class=\"row\">\n    <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n      <div class=\"box box-info\">\n        <div class=\"box-header with-border\">建立合約</div>\n        <div class=\"box-body\" style=\"color:#999\">你即將建立合約</div>\n        <div class=\"box-footer\">\n          <div class=\"pull-right\">\n            <button href=\"#\" class=\"btn btn-default\" (click)=\"createContract()\">\n              <div class=\"fa fa-plus\"></div> 建立合約\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <ng-container *ngFor=\"let address of contractService.contractsAddress\">\n      <ng-container *ngIf=\"contractsAddress && contractsAddress.indexOf(address) > -1\">\n        <div class=\"col-xs-12 col-sm-6 col-md-4 col-lg-3\">\n          <div class=\"box box-info\">\n            <div class=\"box-header with-border\">創建人：{{ contractService.contractsList[address].accountID }}</div>\n            <div class=\"box-body\">{{ contractService.contractsList[address].description }}</div>\n            <div class=\"box-footer\">\n              <div class=\"pull-right\">\n                <button *ngIf=\"contractService.contractsList[address].accountID !== accountService.accountID\" href=\"#\" class=\"btn btn-default\"\n                  (click)=\"join(address)\">參與</button>\n                <button *ngIf=\"contractService.contractsList[address].accountID === accountService.accountID\" href=\"#\" class=\"btn btn-default\"\n                  (click)=\"settleOrRecord(address)\">結算或紀錄</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/mycontract/mycontract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MycontractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_contract_service__ = __webpack_require__("../../../../../src/app/shared/contract.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var MycontractComponent = (function () {
    function MycontractComponent(modalService, accountService, contractService) {
        this.modalService = modalService;
        this.accountService = accountService;
        this.contractService = contractService;
        this.contractsAddress = [];
    }
    MycontractComponent.prototype.ngOnInit = function () {
        console.log(this.accountService.contractsAddress);
    };
    MycontractComponent.prototype.createContract = function () {
        this.modalService.createContract.show();
    };
    MycontractComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        setTimeout(function () {
            _this.contractsAddress = _this.accountService.contractsAddress;
        }, 0);
    };
    MycontractComponent.prototype.join = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var date, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.contractService.contractsList[address].accountID !== this.accountService.accountID)) return [3 /*break*/, 3];
                        if (!this.accountService.LoginCheck()) return [3 /*break*/, 2];
                        this.modalService.data.accountID = this.contractService.contractsList[address].accountID;
                        this.modalService.data.targetWeight = this.contractService.contractsList[address].targetWeight;
                        this.modalService.data.lastWeight = this.contractService.contractsList[address].lastWeight;
                        this.modalService.data.margin = parseFloat(this.contractService.contractsList[address].margin) / 1000000000000000000;
                        date = new Date(this.contractService.contractsList[address].expiryDate);
                        this.modalService.data.expiryDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
                        this.modalService.data.description = this.contractService.contractsList[address].description;
                        this.modalService.data.address = address;
                        _a = this.modalService.data;
                        _b = parseFloat;
                        return [4 /*yield*/, this.contractService.getContractTotal(address)];
                    case 1:
                        _a.total = _b.apply(void 0, [_c.sent()]) / 1000000000000000000 || 'N/A';
                        this.modalService.joinContract.show();
                        return [3 /*break*/, 3];
                    case 2:
                        this.modalService.login.show();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MycontractComponent.prototype.settleOrRecord = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var date, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!(this.contractService.contractsList[address].accountID === this.accountService.accountID)) return [3 /*break*/, 3];
                        if (!this.accountService.LoginCheck()) return [3 /*break*/, 2];
                        this.modalService.data.accountID = this.contractService.contractsList[address].accountID;
                        this.modalService.data.targetWeight = this.contractService.contractsList[address].targetWeight;
                        this.modalService.data.lastWeight = this.contractService.contractsList[address].lastWeight;
                        this.modalService.data.margin = parseFloat(this.contractService.contractsList[address].margin) / 1000000000000000000;
                        date = new Date(this.contractService.contractsList[address].expiryDate);
                        this.modalService.data.expiryDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
                        this.modalService.data.description = this.contractService.contractsList[address].description;
                        this.modalService.data.address = address;
                        _a = this.modalService.data;
                        _b = parseFloat;
                        return [4 /*yield*/, this.contractService.getContractTotal(address)];
                    case 1:
                        _a.total = _b.apply(void 0, [_c.sent()]) / 1000000000000000000 || 'N/A';
                        this.modalService.settleOrRecord.show();
                        return [3 /*break*/, 3];
                    case 2:
                        this.modalService.login.show();
                        _c.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    MycontractComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mycontract',
            template: __webpack_require__("../../../../../src/app/mycontract/mycontract.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mycontract/mycontract.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_2__shared_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__shared_contract_service__["a" /* ContractService */]])
    ], MycontractComponent);
    return MycontractComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_service__ = __webpack_require__("../../../../../src/app/shared/ethereum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = (function () {
    function AccountService(ethereumService, httpClientService) {
        this.ethereumService = ethereumService;
        this.httpClientService = httpClientService;
        this.contractsAddress = [];
        if (localStorage.getItem('account') === null) {
            localStorage.setItem('account', '{}');
        }
        if (this.LoginCheck()) {
            this.getBalance();
        }
    }
    AccountService.prototype.Login = function (loginData) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.httpClientService.postJson('/ethereum/login', loginData).subscribe(function (next) {
                var data = next.json();
                console.log(data);
                if (data.success) {
                    delete data.success;
                    _this.save(data);
                    _this.getBalance();
                    resolve(true);
                }
                else {
                    alert('登入失敗');
                    resolve(false);
                }
            }, function (error) {
                console.log('error', error);
                resolve(false);
            });
        });
    };
    AccountService.prototype.LoginCheck = function () {
        var account = JSON.parse(localStorage.getItem('account'));
        if (account.contractsAddress && account.contractsAddress.length < this.contractsAddress.length) {
            account.contractsAddress = this.contractsAddress;
            this.save(account);
        }
        this.name = account.name;
        this.accountID = account.accountID;
        this.address = account.address;
        this.contractsAddress = account.contractsAddress;
        return !(account.address === undefined);
    };
    AccountService.prototype.save = function (info) {
        this.name = info.name;
        this.accountID = info.accountID;
        this.address = info.address;
        this.contractsAddress = info.contractsAddress;
        localStorage.setItem('account', JSON.stringify(info));
    };
    AccountService.prototype.logout = function () {
        localStorage.setItem('account', '{}');
    };
    AccountService.prototype.getBalance = function () {
        var _this = this;
        this.ethereumService.getBalance(this.address).subscribe(function (next) {
            var data = next.json();
            if (data.success) {
                _this.balance = parseFloat(data.message) / 1000000000000000000;
            }
        });
    };
    AccountService.prototype.getContracts = function () {
        var data = [];
        for (var _i = 0, _a = this.contractsAddress; _i < _a.length; _i++) {
            var address = _a[_i];
            data.splice(0, 0, this.ethereumService.contractsList[address]);
        }
        return data;
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ethereum_service__["a" /* EthereumService */], __WEBPACK_IMPORTED_MODULE_2__httpclient_service__["a" /* HttpClientService */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/contract.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContractService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ethereum_service__ = __webpack_require__("../../../../../src/app/shared/ethereum.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_q__ = __webpack_require__("../../../../q/q.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_q___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_q__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContractService = (function () {
    function ContractService(ethereumService, httpClientService) {
        this.ethereumService = ethereumService;
        this.httpClientService = httpClientService;
        this.contractsAddress = [];
        this.contractsList = {};
        this.getContracts();
    }
    ContractService.prototype.getContracts = function () {
        var _this = this;
        var update = function () {
            _this.httpClientService.postJson('/ethereum/getContracts', {}).subscribe(function (next) {
                var data = next.json();
                _this.contractsAddress = data.contractsAddress;
                _this.contractsList = data.contractsList;
                console.log(data);
            }, function (error) {
                console.log(error);
            }, function () {
                setTimeout.call(_this, update, 10000);
            });
        };
        update();
    };
    ContractService.prototype.getContractTotal = function (address) {
        var _this = this;
        // reject???
        return new Promise(function (resolve) {
            _this.httpClientService.postJson('/ethereum/getContractTotal', { address: address }).subscribe(function (next) {
                var data = next.json();
                if (data.success) {
                    resolve(data.total);
                }
            }, function (error) {
                Object(__WEBPACK_IMPORTED_MODULE_3_q__["reject"])(error);
            });
        });
    };
    ContractService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ethereum_service__["a" /* EthereumService */], __WEBPACK_IMPORTED_MODULE_2__httpclient_service__["a" /* HttpClientService */]])
    ], ContractService);
    return ContractService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/ethereum.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EthereumService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EthereumService = (function () {
    function EthereumService(httpClientService) {
        this.httpClientService = httpClientService;
    }
    EthereumService.prototype.getBalance = function (account) {
        return this.httpClientService.postJson('/ethereum/getBalance', { account: account });
    };
    EthereumService.prototype.getContracts = function (account) {
        var _this = this;
        this.httpClientService.post('/ethereum/getContracts', {}).subscribe(function (next) {
            var data = next.json();
            _this.contractsAddress = data.contractsAddress;
            _this.contractsList = data.contractsList;
        }, function (error) {
            console.log(error);
        });
    };
    EthereumService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__httpclient_service__["a" /* HttpClientService */]])
    ], EthereumService);
    return EthereumService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/httpclient.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpClientService = (function () {
    function HttpClientService(http) {
        this.http = http;
    }
    HttpClientService.prototype.get = function (url, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Get, headers: headers, body: '', url: url }, options);
    };
    HttpClientService.prototype.post = function (url, body, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, headers: headers, body: body, url: url }, options);
    };
    HttpClientService.prototype.postJson = function (url, body, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var jsonBody = JSON.stringify(body);
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, headers: headers, body: jsonBody, url: url }, options);
    };
    HttpClientService.prototype.postForm = function (url, data, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Disposition': 'form-data; name="file"' });
        var body = this.appendFormData(data);
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Post, headers: headers, body: body, url: url }, options);
    };
    HttpClientService.prototype.put = function (url, body, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put, headers: headers, body: body, url: url }, options);
    };
    HttpClientService.prototype.putJson = function (url, body, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var jsonBody = JSON.stringify(body);
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put, headers: headers, body: jsonBody, url: url }, options);
    };
    HttpClientService.prototype.putForm = function (url, data, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Disposition': 'form-data; name="file"' });
        var body = this.appendFormData(data);
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Put, headers: headers, body: body, url: url }, options);
    };
    HttpClientService.prototype.delete = function (url, options) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.requestHelper({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestMethod */].Delete, headers: headers, body: '', url: url }, options);
    };
    /**
     * call by get post put delete ...
     * reference to: https://github.com/auth0/angular2-jwt/blob/master/angular2-jwt.ts
     */
    HttpClientService.prototype.requestHelper = function (requestArgs, additionalOptions) {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* RequestOptions */](requestArgs);
        // update url, auth header and withCredentials
        var url = RegExp(/^http/).test(requestArgs.url) ? requestArgs.url :
            location.protocol + "//" + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */][location.protocol] + __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apis + requestArgs.url;
        options = options.merge({
            url: url,
            // httpOnly cookie uplod
            withCredentials: true
        });
        // optional args
        if (additionalOptions) {
            options = options.merge(additionalOptions);
        }
        return this.http.request(new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Request */](options));
    };
    /**
       * for post and put form data and files
       * append all to form data
       */
    HttpClientService.prototype.appendFormData = function (data) {
        var formData = new FormData();
        for (var _i = 0, _a = Object.keys(data); _i < _a.length; _i++) {
            var key = _a[_i];
            var value = data[key];
            // assume that array is file
            if (value instanceof FileList) {
                // append mutiple files
                for (var i = 0; i < value.length; i++) {
                    formData.append(key, value[i], value[i].name);
                }
            }
            else {
                // normal form data
                formData.append(key, value);
            }
        }
        return formData;
    };
    /**
    * Handle HTTP error
    */
    HttpClientService.prototype.handleError = function (error) {
        var statusTextDict = {
            400: 'Bad Request',
            401: 'Unauthorized',
            402: 'Payment Required',
            403: 'Forbidden',
            404: 'Not Found',
            405: 'Method Not Allowed',
            406: 'Not Acceptable',
            407: 'Proxy Authentication Required',
            408: 'Request Time-out',
            409: 'Conflict',
            410: 'Gone',
            411: 'Length Required',
            412: 'Precondition Failed',
            413: 'Request Entity Too Large',
            414: 'Request-URI Too Large',
            415: 'Unsupported Media Type',
            416: 'Requested range not satisfiable',
            417: 'Expectation Failed',
            500: 'Internal Server Error',
            501: 'Not Implemented',
            502: 'Bad Gateway',
            503: 'Service Unavailable',
            504: 'Gateway Time-out',
            505: 'HTTP Version not supported'
        };
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["g" /* Response */]) {
            // below with error
            var body = '';
            try {
                // error is not json throw
                body = error.json() || '';
            }
            catch (e) {
                //
            }
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + statusTextDict[error.status] + " " + err;
            // errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg); // log to console instead
        // return Observable.throw(errMsg);
        return errMsg;
    };
    HttpClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], HttpClientService);
    return HttpClientService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\"></footer>"

/***/ }),

/***/ "../../../../../src/app/shared/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <!-- Logo -->\n  <a [routerLink]=\"'/'\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\">\n      <b>小</b>logo</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\">\n      <b>大</b>logo</span>\n  </a>\n  <nav class=\"navbar navbar-static-top\">\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"dropdown user user-menu\">\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n            <div *ngIf=\"!loginCheck()\">\n              <div class=\"fa fa-sign-in\"></div>\n              <span class=\"hidden-xs\">登入</span>\n            </div>\n            <span class=\"hidden-xs\" *ngIf=\"loginCheck()\">{{ accountService.name }}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- User image -->\n            <li class=\"user-header\" *ngIf=\"loginCheck()\">\n              <img src=\"assets/大頭貼.jpg\" class=\"img-circle\" alt=\"User Image\">\n              <p>\n                {{ accountService.name }}\n                <small>{{ accountService.address }}</small>\n              </p>\n            </li>\n            <li class=\"user-header\" *ngIf=\"!loginCheck()\">\n              <form class=\"form-horizontal text-left\" id=\"loginform\" [formGroup]=\"loginform\" (ngSubmit)=\"onSubmit(loginform)\">\n                <div class=\"form-group\">\n                  <label for=\"loginAccount\" class=\"col-sm-3 control-label\">帳號：</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"email\" class=\"form-control\" placeholder=\"Email\" formControlName=\"accountID\">\n                  </div>\n                </div>\n                <div class=\"form-group\">\n                  <label for=\"loginPassword\" class=\"col-sm-3 control-label\">密碼：</label>\n                  <div class=\"col-sm-9\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" (input)=\"check($event)\">\n                  </div>\n                </div>\n              </form>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\" *ngIf=\"loginCheck()\">\n              <div class=\"row\">\n                <div class=\"col-md-12\">剩餘點數：\b{{ accountService.balance }}</div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <button [routerLink]=\"'/profile'\" class=\"btn btn-default\" *ngIf=\"loginCheck()\">個人資訊</button>\n                <button (click)=\"signup()\" class=\"btn btn-default\" *ngIf=\"!loginCheck()\">註冊</button>\n              </div>\n              <div class=\"pull-right\">\n                <button type=\"submit\" class=\"btn btn-info\" *ngIf=\"loginCheck()\" (click)=\"logout()\">登出</button>\n                <button type=\"submit\" class=\"btn btn-info\" *ngIf=\"!loginCheck()\" form=\"loginform\">登入</button>\n              </div>\n            </li>\n          </ul>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HeaderComponent = (function () {
    function HeaderComponent(accountService, httpClientService, modalService) {
        this.accountService = accountService;
        this.httpClientService = httpClientService;
        this.modalService = modalService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.loginform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormGroup"]({
            accountID: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
            password: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormControl"](''),
        });
    };
    HeaderComponent.prototype.loginCheck = function () {
        return this.accountService.LoginCheck();
    };
    HeaderComponent.prototype.logout = function () {
        this.accountService.logout();
    };
    HeaderComponent.prototype.onSubmit = function (loginform) {
        this.accountService.Login(loginform.value);
    };
    HeaderComponent.prototype.check = function (event) {
        if (event.target.value.length === 0) {
            event.target.classList.remove('text-security-disc');
        }
        else {
            event.target.classList.add('text-security-disc');
        }
    };
    HeaderComponent.prototype.signup = function () {
        this.modalService.signup.show();
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/layout/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_2__httpclient_service__["a" /* HttpClientService */],
            __WEBPACK_IMPORTED_MODULE_4__modal_service__["a" /* ModalService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/layout.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_header_component__ = __webpack_require__("../../../../../src/app/shared/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/shared/layout/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__share_module__ = __webpack_require__("../../../../../src/app/shared/share.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__share_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["ReactiveFormsModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__footer_footer_component__["a" /* FooterComponent */],
            ],
            providers: [],
            bootstrap: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/layout/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/layout/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n  <section class=\"sidebar\" style=\"height: auto;\">\n    <ul class=\"sidebar-menu tree\" data-widget=\"tree\">\n      <div class=\"user-panel\" *ngIf=\"loginCheck()\">\n        <div class=\"pull-left image\">\n          <img src=\"assets/大頭貼.jpg\" class=\"img-circle\" title=\"大頭貼\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>{{ accountService.name }}</p>\n          <p>點數剩餘：{{ accountService.balance }}</p>\n        </div>\n      </div>\n      <li class=\"header\">操作項目</li>\n      <li class=\"treeview\">\n        <a href=\"#\" [routerLink]=\"'/main'\">\n          <i class=\"fa fa-files-o\"></i>\n          <span>所有合約</span>\n        </a>\n      </li>\n      <li class=\"treeview\">\n        <a href=\"#\" [routerLink]=\"'/mycontract'\" *ngIf=\"loginCheck()\">\n          <i class=\"fa fa-files-o\"></i>\n          <span>\b我的合約</span>\n        </a>\n      </li>\n    </ul>\n  </section>\n</aside>\n"

/***/ }),

/***/ "../../../../../src/app/shared/layout/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(accountService) {
        this.accountService = accountService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.loginCheck = function () {
        return this.accountService.LoginCheck();
    };
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/shared/layout/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/layout/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__account_service__["a" /* AccountService */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalService = (function () {
    function ModalService() {
        this.data = {};
    }
    ModalService.prototype.setLoginModal = function (modal) {
        this.login = modal;
    };
    ModalService.prototype.setSingupModal = function (signup) {
        this.signup = signup;
    };
    ModalService.prototype.setCreateContractModal = function (createContract) {
        this.createContract = createContract;
    };
    ModalService.prototype.setPromptModal = function (prompt) {
        this.prompt = prompt;
    };
    ModalService.prototype.setYesOrNoModal = function (yesOrNo) {
        this.yesOrNo = yesOrNo;
    };
    ModalService.prototype.setAlertModal = function (alert) {
        this.alert = alert;
    };
    ModalService.prototype.setErrorAlertModal = function (errorAlert) {
        this.errorAlert = errorAlert;
    };
    ModalService.prototype.setJoinContractModal = function (joinContract) {
        this.joinContract = joinContract;
    };
    ModalService.prototype.setSettleOrRecord = function (settleOrRecord) {
        this.settleOrRecord = settleOrRecord;
    };
    ModalService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ModalService);
    return ModalService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/share.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__httpclient_service__ = __webpack_require__("../../../../../src/app/shared/httpclient.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__account_service__ = __webpack_require__("../../../../../src/app/shared/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contract_service__ = __webpack_require__("../../../../../src/app/shared/contract.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modal_service__ = __webpack_require__("../../../../../src/app/shared/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ethereum_service__ = __webpack_require__("../../../../../src/app/shared/ethereum.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// service





var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            ngModule: SharedModule_1,
            providers: [
                // service
                __WEBPACK_IMPORTED_MODULE_6__httpclient_service__["a" /* HttpClientService */],
                __WEBPACK_IMPORTED_MODULE_7__account_service__["a" /* AccountService */],
                __WEBPACK_IMPORTED_MODULE_9__modal_service__["a" /* ModalService */],
                __WEBPACK_IMPORTED_MODULE_10__ethereum_service__["a" /* EthereumService */],
                __WEBPACK_IMPORTED_MODULE_8__contract_service__["a" /* ContractService */]
            ]
        };
    };
    SharedModule = SharedModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* ModalModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            ],
            providers: [],
        }),
        __metadata("design:paramtypes", [])
    ], SharedModule);
    return SharedModule;
    var SharedModule_1;
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
    'https:': '35.201.201.21',
    'http:': '35.201.201.21:8081',
    'apis': '/apis'
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




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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