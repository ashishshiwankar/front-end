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

/***/ "./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <h3>\n          Asssign Driver\n  </h3>\n</header>\n<body>\n\n\n<div class=\"container\">\n  <br>\n  <form class=\"form-horizontal shadow p-3 mb-5 bg-white rounded\" #f=\"ngForm\"\n          (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n      \n                  <div class=\"col-6\">\n                         \n\n\n\n                        \n\n    <div class=\"form-group\">\n           <label for=\"name\" class=\"a1\">requestnumber</label>\n          <input type=\"text\" class=\"form-control\" id=\"requestnumber\" required [(ngModel)]=\"approvelHisytory.requestnumber\" name=\"requestnumber\">\n  </div>\n\n  <div class=\"form-group\">\n   <label for=\"name\" class=\"a1\">pcmc-supervisor</label>\n     <input type=\"text\" class=\"form-control\" id=\"pcmcsupervisorid\" required [(ngModel)]=\"approvelHisytory.pcmcsupervisorid\" name=\"pcmcsupervisorid\">\n </div>\n\n \n\n <div class=\"form-group\">\n        <label for=\"name\" class=\"a1\">pcmc-supervisorid</label>\n  \n  <select class=\"form-control custom-select\"  id=\"pcmcsupervisorid\" required [(ngModel)]=\"approvelHisytory.pcmcsupervisorid\" name=\"pcmcsupervisorid\">\n    <option value=\"\" selected>select</option>\n    <option *ngFor=\"let userMst of userMsts\" value=\"{{userMst.userid}}\">{{userMst.userlastname}}</option>\n  </select>\n</div>\n\n                        \n                       \n                  </div>\n              \n          </div>\n          <div class=\"row\">\n                  <div class=\"col-6\">\n                          <input type=\"submit\" class=\" btn btn-secondary\" value=\"Assign\">\n                  </div>\n          </div>\n  </form>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.ts ***!
  \********************************************************************************/
/*! exports provided: AssignToPcmcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignToPcmcComponent", function() { return AssignToPcmcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/ApprovelHisytory */ "./src/app/model/ApprovelHisytory.ts");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignToPcmcComponent = /** @class */ (function () {
    function AssignToPcmcComponent(route, router, approvelService) {
        this.route = route;
        this.router = router;
        this.approvelService = approvelService;
    }
    AssignToPcmcComponent.prototype.ngAfterViewInit = function () {
        this.reloadData();
    };
    AssignToPcmcComponent.prototype.reloadData = function () {
        var _this = this;
        this.approvelService.getUserSuperPCMCVList().subscribe(function (data) {
            _this.userMsts = data;
            setTimeout(function () {
            }, 1000);
        }, function (error) {
        });
    };
    AssignToPcmcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_2__["ApprovelHisytory"]();
        this.approvalhistoryid = this.route.snapshot.params['approvalhistoryid'];
        this.approvelService.getAppprovwl(this.approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytory = data;
        }, function (error) { return console.log(error); });
    };
    AssignToPcmcComponent.prototype.updateApp = function () {
        this.approvelService.updateApprovelpcmc(this.approvalhistoryid, this.approvelHisytory)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_2__["ApprovelHisytory"]();
        this.gotoList();
    };
    AssignToPcmcComponent.prototype.onSubmit = function () {
        this.updateApp();
    };
    AssignToPcmcComponent.prototype.gotoList = function () {
        this.router.navigate(['backtopcmc']);
    };
    AssignToPcmcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-to-pcmc',
            template: __webpack_require__(/*! ./assign-to-pcmc.component.html */ "./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.html"),
            styles: [__webpack_require__(/*! ./assign-to-pcmc.component.css */ "./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__["ApprovelService"]])
    ], AssignToPcmcComponent);
    return AssignToPcmcComponent;
}());



/***/ }),

/***/ "./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Request List for PCMC Supervisor</h2>\n</div>\n \n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n   \n  </div>\n</nav>\n\n<div>\n  \n</div>\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Appro No</th>\n          <th>Req No</th>\n          <th>pickupaddress</th>\n          <th>Supervisor </th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let approvelHisytory of approvelHisytorys | async\">\n          <td>{{approvelHisytory.approvalhistoryid}}</td>\n          <td>{{approvelHisytory.requestnumber}}</td>\n          <td>{{approvelHisytory.requestdate}}</td>\n          <td>{{approvelHisytory.remark}}</td>\n         \n        \n          <td><button (click)=\"deleteDriver(approvelHisytory.approvalhistoryid)\" class=\"a1\">Delete</button>\n              <button (click)=\"driverDetails(approvelHisytory.approvalhistoryid)\" class=\"b1\">Details</button>\n              <button (click)=\"Approvelupdateme(approvelHisytory.approvalhistoryid)\" class=\"a1\">Assign</button>\n          \n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.ts ***!
  \********************************************************************************************/
/*! exports provided: AssignreqtopcmcsuperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignreqtopcmcsuperComponent", function() { return AssignreqtopcmcsuperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignreqtopcmcsuperComponent = /** @class */ (function () {
    //approvelHisytorys: OApprovelHisytory[];
    function AssignreqtopcmcsuperComponent(requestService, router, approvelService) {
        this.requestService = requestService;
        this.router = router;
        this.approvelService = approvelService;
    }
    AssignreqtopcmcsuperComponent.prototype.reloadData = function () {
        this.approvelHisytorys = this.approvelService.getApprovelList1();
    };
    AssignreqtopcmcsuperComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    AssignreqtopcmcsuperComponent.prototype.ApprovelDetails = function (approvalhistoryid) {
        this.router.navigate(['updData', approvalhistoryid]);
    };
    AssignreqtopcmcsuperComponent.prototype.Approvelupdateme = function (approvalhistoryid) {
        this.router.navigate(['tosupvisor1', approvalhistoryid]);
    };
    AssignreqtopcmcsuperComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assignreqtopcmcsuper',
            template: __webpack_require__(/*! ./assignreqtopcmcsuper.component.html */ "./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.html"),
            styles: [__webpack_require__(/*! ./assignreqtopcmcsuper.component.css */ "./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_requestService__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__["ApprovelService"]])
    ], AssignreqtopcmcsuperComponent);
    return AssignreqtopcmcsuperComponent;
}());



/***/ }),

/***/ "./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Request List's</h2>\n</div>\n\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/req\" class=\"dropdown\"> create Request's </button></li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n  \n</div>\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Appro No</th>\n          <th>Req No</th>\n          <th>pickupaddress</th>\n          <th>approxweight</th>\n          <th>Supervisor </th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let approvelHisytory of approvelHisytorys | async\">\n          <td>{{approvelHisytory.approvalhistoryid}}</td>\n          <td>{{approvelHisytory.requestnumber}}</td>\n          <td>{{approvelHisytory.requestdate}}</td>\n          <td>{{approvelHisytory.remark}}</td>\n         \n        \n          <td><button (click)=\"deleteDriver(approvelHisytory.approvalhistoryid)\" class=\"a1\">Delete</button>\n              <button (click)=\"driverDetails(approvelHisytory.approvalhistoryid)\" class=\"b1\">Details</button>\n              <button (click)=\"Approvelupdateme(approvelHisytory.approvalhistoryid)\" class=\"a1\">Assign</button>\n          \n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AssignReqToSupervComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignReqToSupervComponent", function() { return AssignReqToSupervComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignReqToSupervComponent = /** @class */ (function () {
    function AssignReqToSupervComponent(requestService, router, approvelService) {
        this.requestService = requestService;
        this.router = router;
        this.approvelService = approvelService;
    }
    AssignReqToSupervComponent.prototype.reloadData = function () {
        this.requestMsts = this.requestService.getRequestList();
        this.userMsts = this.approvelService.getUserSuperVList();
        this.approvelHisytorys = this.approvelService.getApprovelList();
    };
    AssignReqToSupervComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    AssignReqToSupervComponent.prototype.ApprovelDetails = function (approvalhistoryid) {
        this.router.navigate(['details', approvalhistoryid]);
    };
    AssignReqToSupervComponent.prototype.Approvelupdateme = function (approvalhistoryid) {
        this.router.navigate(['tosupvisor', approvalhistoryid]);
    };
    AssignReqToSupervComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-req-to-superv',
            template: __webpack_require__(/*! ./assign-req-to-superv.component.html */ "./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.html"),
            styles: [__webpack_require__(/*! ./assign-req-to-superv.component.css */ "./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_requestService__WEBPACK_IMPORTED_MODULE_2__["RequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__["ApprovelService"]])
    ], AssignReqToSupervComponent);
    return AssignReqToSupervComponent;
}());



/***/ }),

/***/ "./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    background-color: skyblue;\r\n   \r\n}\r\nbody{\r\n    background-color: rebeccapurple;\r\n  \r\n    color: salmon;\r\n}\r\n.form-horizontal shadow p-3 mb-5 bg-white rounded{\r\n    padding-top: 10cm;\r\n}\r\n.col-6{\r\n    color: slategray;\r\n    -webkit-columns: 4;\r\n            columns: 4;\r\n    \r\n    -webkit-column-rule-style: hidden;\r\n    \r\n            column-rule-style: hidden;\r\n}\r\n.form-control{\r\n    color: springgreen;\r\n}\r\n.row{\r\n\r\n    color: teal;\r\n    background: rgb(92, 173, 92);\r\n}\r\n.a1{\r\n    color: mediumblue;\r\n}"

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <h3>\n          Asssign Driver\n  </h3>\n</header>\n<body>\n\n\n<div class=\"container\">\n  <br>\n  <form class=\"form-horizontal shadow p-3 mb-5 bg-white rounded\" #f=\"ngForm\"\n          (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n      \n                  <div class=\"col-6\">\n                         \n\n\n\n                        \n\n    <div class=\"form-group\">\n           <label for=\"name\" class=\"a1\">requestnumber</label>\n          <input type=\"text\" class=\"form-control\" id=\"requestnumber\" required [(ngModel)]=\"approvelHisytory.requestnumber\" name=\"requestnumber\">\n  </div>\n\n  <div class=\"form-group\">\n   <label for=\"name\" class=\"a1\">supervisor</label>\n     <input type=\"text\" class=\"form-control\" id=\"supervisorid\" required [(ngModel)]=\"approvelHisytory.supervisorid\" name=\"supervisorid\">\n </div>\n\n \n\n <div class=\"form-group\">\n        <label for=\"name\" class=\"a1\">supervisorid</label>\n  \n  <select class=\"form-control custom-select\"  id=\"supervisorid\" required [(ngModel)]=\"approvelHisytory.supervisorid\" name=\"supervisorid\">\n    <option value=\"\" selected>select</option>\n    <option *ngFor=\"let userMst of userMsts\" value=\"{{userMst.userid}}\">{{userMst.userlastname}}</option>\n  </select>\n</div>\n\n                        \n                       \n                  </div>\n              \n          </div>\n          <div class=\"row\">\n                  <div class=\"col-6\">\n                          <input type=\"submit\" class=\" btn btn-secondary\" value=\"Assign\">\n                  </div>\n          </div>\n  </form>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.ts ***!
  \***********************************************************************/
/*! exports provided: AssignSupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignSupComponent", function() { return AssignSupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/ApprovelHisytory */ "./src/app/model/ApprovelHisytory.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignSupComponent = /** @class */ (function () {
    function AssignSupComponent(route, router, approvelService) {
        this.route = route;
        this.router = router;
        this.approvelService = approvelService;
    }
    AssignSupComponent.prototype.ngAfterViewInit = function () {
        this.reloadData();
    };
    AssignSupComponent.prototype.reloadData = function () {
        var _this = this;
        this.approvelService.getUserSuperVList().subscribe(function (data) {
            _this.userMsts = data;
            setTimeout(function () {
            }, 1000);
        }, function (error) {
        });
    };
    AssignSupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
        this.approvalhistoryid = this.route.snapshot.params['approvalhistoryid'];
        this.approvelService.getAppprovwl(this.approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytory = data;
        }, function (error) { return console.log(error); });
    };
    AssignSupComponent.prototype.updateApp = function () {
        this.approvelService.updateApprovel(this.approvalhistoryid, this.approvelHisytory)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
        this.gotoList();
    };
    AssignSupComponent.prototype.onSubmit = function () {
        this.updateApp();
    };
    AssignSupComponent.prototype.gotoList = function () {
        this.router.navigate(['assignRe']);
    };
    AssignSupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-sup',
            template: __webpack_require__(/*! ./assign-sup.component.html */ "./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.html"),
            styles: [__webpack_require__(/*! ./assign-sup.component.css */ "./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__["ApprovelService"]])
    ], AssignSupComponent);
    return AssignSupComponent;
}());



/***/ }),

/***/ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.html":
/*!********************************************************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.html ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Request List for PCMC Supervisor</h2>\n</div>\n \n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/req\" class=\"dropdown\"> create Request's </button></li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n  \n</div>\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Appro No</th>\n          <th>Req No</th>\n          <th>pickupaddress</th>\n          <th>approxweight</th>\n          <th>Supervisor </th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let approvelHisytory of approvelHisytorys | async\">\n          <td>{{approvelHisytory.approvalhistoryid}}</td>\n          <td>{{approvelHisytory.requestnumber}}</td>\n          <td>{{approvelHisytory.requestdate}}</td>\n          <td>{{approvelHisytory.remark}}</td>\n         \n        \n          <td><button (click)=\"deleteDriver(approvelHisytory.approvalhistoryid)\" class=\"a1\">Delete</button>\n              <button (click)=\"driverDetails(approvelHisytory.approvalhistoryid)\" class=\"b1\">Details</button>\n              <button (click)=\"AssisnToVEhcile(approvelHisytory.approvalhistoryid)\" class=\"a1\">Assign</button>\n          \n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: AssignRequestToVehcileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignRequestToVehcileComponent", function() { return AssignRequestToVehcileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignRequestToVehcileComponent = /** @class */ (function () {
    function AssignRequestToVehcileComponent(requestService, router, approvelService) {
        this.requestService = requestService;
        this.router = router;
        this.approvelService = approvelService;
    }
    AssignRequestToVehcileComponent.prototype.reloadData = function () {
        //this.requestMsts = this.requestService.getRequestList();
        //this.userMsts = this.approvelService.getUserSuperPCMCVList();
        this.approvelHisytorys = this.approvelService.getApprovelFinalList();
    };
    AssignRequestToVehcileComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    AssignRequestToVehcileComponent.prototype.ApprovelDetails = function (approvalhistoryid) {
        this.router.navigate(['updData', approvalhistoryid]);
    };
    AssignRequestToVehcileComponent.prototype.AssisnToVEhcile = function (approvalhistoryid) {
        this.router.navigate(['tovechile', approvalhistoryid]);
    };
    AssignRequestToVehcileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign-request-to-vehcile',
            template: __webpack_require__(/*! ./assign-request-to-vehcile.component.html */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.html"),
            styles: [__webpack_require__(/*! ./assign-request-to-vehcile.component.css */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_requestService__WEBPACK_IMPORTED_MODULE_1__["RequestService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__["ApprovelService"]])
    ], AssignRequestToVehcileComponent);
    return AssignRequestToVehcileComponent;
}());



/***/ }),

/***/ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n  <h3>\n          Asssign Driver\n  </h3>\n</header>\n<body>\n\n\n<div class=\"container\">\n  <br>\n  <form class=\"form-horizontal shadow p-3 mb-5 bg-white rounded\" #f=\"ngForm\"\n          (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n      \n                  <div class=\"col-6\">\n                         \n\n\n\n                        \n\n    <div class=\"form-group\">\n           <label for=\"name\" class=\"a1\">requestnumber</label>\n          <input type=\"text\" class=\"form-control\" id=\"requestnumber\" required [(ngModel)]=\"approvelHisytory.requestnumber\" name=\"requestnumber\">\n  </div>\n\n  <div class=\"form-group\">\n   <label for=\"name\" class=\"a1\">VehicleNo</label>\n     <input type=\"text\" class=\"form-control\" id=\"vehcileno\" required [(ngModel)]=\"approvelHisytory.vehcileno\" name=\"vehcileno\">\n </div>\n\n\n \n \n\n <div class=\"form-group\">\n        <label for=\"name\" class=\"a1\">VehicleNo</label>\n  \n  <select class=\"form-control custom-select\"  id=\"vehcileno\" required [(ngModel)]=\"approvelHisytory.vehcileno\" name=\"vehcileno\">\n    <option value=\"\" selected>select</option>\n    <option *ngFor=\"let vehicle of vehicles\" value=\"{{vehicle.vehicleno}}\">{{vehicle.vehicleno}}</option>\n  </select>\n</div>\n\n\n                        \n                       \n                  </div>\n              \n          </div>\n          <div class=\"row\">\n                  <div class=\"col-6\">\n                          <input type=\"submit\" class=\" btn btn-secondary\" value=\"Assign\">\n                  </div>\n          </div>\n  </form>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AssignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignComponent", function() { return AssignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/ApprovelHisytory */ "./src/app/model/ApprovelHisytory.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssignComponent = /** @class */ (function () {
    //vehicles: Observable<any>;
    function AssignComponent(route, router, approvelService) {
        this.route = route;
        this.router = router;
        this.approvelService = approvelService;
    }
    AssignComponent.prototype.ngAfterViewInit = function () {
        this.reloadData();
    };
    AssignComponent.prototype.reloadData = function () {
        var _this = this;
        this.approvelService.getVehicleList().subscribe(function (data) {
            _this.vehicles = data;
            setTimeout(function () {
            }, 1000);
        }, function (error) {
        });
    };
    AssignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
        this.approvalhistoryid = this.route.snapshot.params['approvalhistoryid'];
        this.approvelService.getAppprovwl(this.approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytory = data;
        }, function (error) { return console.log(error); });
    };
    AssignComponent.prototype.updateApp = function () {
        this.approvelService.updateAssigntoVehcile(this.approvalhistoryid, this.approvelHisytory)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
        this.gotoList();
    };
    AssignComponent.prototype.onSubmit = function () {
        this.updateApp();
    };
    AssignComponent.prototype.gotoList = function () {
        this.router.navigate(['backtopcmc']);
    };
    AssignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assign',
            template: __webpack_require__(/*! ./assign.component.html */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.html"),
            styles: [__webpack_require__(/*! ./assign.component.css */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__["ApprovelService"]])
    ], AssignComponent);
    return AssignComponent;
}());



/***/ }),

/***/ "./src/app/Customer/customer/customer.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Customer/customer/customer.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    color: teal;\r\n    background-color:skyblue;\r\n}\r\nheader{\r\n    background-color: lightskyblue;\r\n}"

/***/ }),

/***/ "./src/app/Customer/customer/customer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Customer/customer/customer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header><h3>Registration</h3></header>\n\n\n<body>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n\n  <form (ngSubmit)=\"registerCust()\">\n\n    \n    <div class=\"form-group \">\n      <label for=\"custname\">custname</label>\n      <input type=\"text\" class=\"form-control\" id=\"custname\" required [(ngModel)]=\"customer.custname\" name=\"custname\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"custemail\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"custemail\" required [(ngModel)]=\"customer.custemail\" name=\"custemail\">\n    </div>\n\n\n\n    <div class=\"form-group\" >\n      <label for=\"custpassword\">custpassword</label>\n      <input type=\"text\" class=\"form-control\"  id=\"custpassword\" required [(ngModel)]=\"customer.custpassword\" name=\"custpassword\">\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"custaddress\">custaddress</label>\n      <input type=\"text\" class=\"form-control\" id=\"custaddress\" required [(ngModel)]=\"customer.custaddress\" name=\"custaddress\">\n    </div>\n\n \n\n\n    \n    <div class=\"form-group\">\n      <label for=\"gender\" class=\"a1\">gender</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"gender\"  required [(ngModel)]=\"customer.gender\" name=\"gender\">\n                <option value=\"\">select gender</option>\n                <option value=\"1\">male</option>\n              <option value=\"2\">female</option>\n             \n            </select>\n            \n    </div>\n   </div>\n    \n\n    <div class=\"form-group\">\n      <label for=\"custmoblieno\">custmoblieno</label>\n      <input type=\"text\" class=\"form-control\" id=\"custmoblieno\" required [(ngModel)]=\"customer.custmoblieno\" name=\"custmoblieno\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"custzone\" class=\"a1\">custzone</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"custzone\"  required [(ngModel)]=\"customer.custzone\" name=\"custzone\">\n                <option value=\"\">select group</option>\n                <option value=\"1\">zone1</option>\n              <option value=\"2\">zone2</option>\n              <option value=\"3\">zone3</option>\n              <option value=\"4\">zone4</option>\n              <option value=\"1\">zone5</option>\n              <option value=\"2\">zone6</option>\n              <option value=\"3\">zone7</option>\n              <option value=\"4\">zone8</option>\n            </select>\n            \n    </div>\n   </div>\n\n\n\n  \n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n</div>\n</nav>\n\n<div [hidden]=\"!submitted\">\n  <!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n </body>"

/***/ }),

/***/ "./src/app/Customer/customer/customer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Customer/customer/customer.component.ts ***!
  \*********************************************************/
/*! exports provided: CustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerComponent", function() { return CustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_model_customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model.customer */ "./src/app/model/model.customer.ts");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CustomerComponent = /** @class */ (function () {
    function CustomerComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
        this.customer = new src_app_model_model_customer__WEBPACK_IMPORTED_MODULE_1__["Customer"]();
    }
    CustomerComponent.prototype.ngOnInit = function () {
    };
    CustomerComponent.prototype.registerCust = function () {
        var _this = this;
        this.requestService.createCustomer(this.customer).subscribe(function (data) {
            _this.router.navigate(['customerlist']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    CustomerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customer',
            template: __webpack_require__(/*! ./customer.component.html */ "./src/app/Customer/customer/customer.component.html"),
            styles: [__webpack_require__(/*! ./customer.component.css */ "./src/app/Customer/customer/customer.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CustomerComponent);
    return CustomerComponent;
}());



/***/ }),

/***/ "./src/app/Customer/customerlist/customerlist.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Customer/customerlist/customerlist.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    color: lightskyblue;\r\n    background-color:yellow;\r\n}\r\nheader{\r\n    background-color: rgb(203, 229, 153);\r\n}"

/***/ }),

/***/ "./src/app/Customer/customerlist/customerlist.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Customer/customerlist/customerlist.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Customer List's</h2>\n</div>\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/customer\" class=\"dropdown\">Add Customer </button></li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>id</th>\n          <th>username</th>\n          <th>email</th>\n          <th>mobile</th>\n          <th>password</th>\n          <th>address</th>\n          <th>zoneNo</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let customer of customers | async\">\n          <td>{{customer.custId}}</td>\n          <td>{{customer.custname}}</td>\n          <td>{{customer.custemail}}</td>\n          <td>{{customer.custmoblieno}}</td>\n          <td>{{customer.custpassword}}</td>\n          <td>{{customer.custaddress}}</td>\n          <td>{{customer.custzone}}</td>\n          <td><button (click)=\"deleteCust(customer.custId)\" class=\"a1\">Delete</button>\n              <button (click)=\"custDetails(customer.custId)\" class=\"b1\">Details</button>\n              <button (click)=\"updateDetails(customer.custId)\" class=\"c1\">Update</button>\n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Customer/customerlist/customerlist.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Customer/customerlist/customerlist.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerlistComponent", function() { return CustomerlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/customer.service */ "./src/app/services/customer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerlistComponent = /** @class */ (function () {
    function CustomerlistComponent(customerService, router) {
        this.customerService = customerService;
        this.router = router;
    }
    CustomerlistComponent.prototype.reloadData = function () {
        this.customers = this.customerService.getCustomerList();
    };
    CustomerlistComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    CustomerlistComponent.prototype.deleteCust = function (custId) {
        var _this = this;
        this.customerService.deleteCustomer(custId)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    CustomerlistComponent.prototype.custDetails = function (custId) {
        this.router.navigate(['details', custId]);
    };
    CustomerlistComponent.prototype.updateDetails = function (custId) {
        this.router.navigate(['updateDetail', custId]);
    };
    CustomerlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customerlist',
            template: __webpack_require__(/*! ./customerlist.component.html */ "./src/app/Customer/customerlist/customerlist.component.html"),
            styles: [__webpack_require__(/*! ./customerlist.component.css */ "./src/app/Customer/customerlist/customerlist.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_customer_service__WEBPACK_IMPORTED_MODULE_2__["CustomerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CustomerlistComponent);
    return CustomerlistComponent;
}());



/***/ }),

/***/ "./src/app/Driver/driver-details/driver-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Driver/driver-details/driver-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Driver/driver-details/driver-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Driver/driver-details/driver-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<h2>Driver Details</h2> \n\n<hr/>\n<div *ngIf=\"drivers\">\n  <div>\n    <label><b>First Name: </b></label> {{driver.firstName}}\n  </div>\n  <div>\n    <label><b>Last Name: </b></label> {{driver.lastName}}\n  </div>\n  <div>\n    <label><b>Email Id: </b></label> {{driver.email}}\n  </div>  \n  <div>\n    <label><b>Contact : </b></label> {{driver.contact}}\n  </div> \n  <div>\n    <label><b>Licence Nu: </b></label> {{driver.licence}}\n  </div> \n</div>\n\n<br>\n<br>\n<button (click)=\"list()\" class=\"btn btn-primary\">Back to Employee List</button><br>"

/***/ }),

/***/ "./src/app/Driver/driver-details/driver-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Driver/driver-details/driver-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: DriverDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverDetailsComponent", function() { return DriverDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_model_driver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/model.driver */ "./src/app/model/model.driver.ts");
/* harmony import */ var src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DriverService */ "./src/app/services/DriverService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverDetailsComponent = /** @class */ (function () {
    function DriverDetailsComponent(route, router, driverService) {
        this.route = route;
        this.router = router;
        this.driverService = driverService;
    }
    DriverDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driver = new src_app_model_model_driver__WEBPACK_IMPORTED_MODULE_2__["Driver"]();
        this.id = this.route.snapshot.params['id'];
        this.driverService.getDriver(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.driver = data;
        }, function (error) { return console.log(error); });
    };
    DriverDetailsComponent.prototype.list = function () {
        this.router.navigate(['drivers']);
    };
    DriverDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-details',
            template: __webpack_require__(/*! ./driver-details.component.html */ "./src/app/Driver/driver-details/driver-details.component.html"),
            styles: [__webpack_require__(/*! ./driver-details.component.css */ "./src/app/Driver/driver-details/driver-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_3__["DriverService"]])
    ], DriverDetailsComponent);
    return DriverDetailsComponent;
}());



/***/ }),

/***/ "./src/app/Driver/driver-list/driver-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Driver/driver-list/driver-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btnbtn-info{\r\n    color: rgb(133, 255, 122);\r\n    margin-left: 10em\r\n\r\n}\r\n\r\nbody{\r\n    color: rgb(126, 104, 64);\r\n    background-color: thistle;\r\n}\r\n\r\nheader{\r\n    color: orchid;\r\n    -webkit-column-gap: 100ex;\r\n            column-gap: 100ex;\r\n    background-color:transparent\r\n}\r\n\r\n.a1{\r\ncolor: tomato;\r\nmargin-left: 10mm;\r\n}\r\n\r\n.b1{\r\ncolor:lightgray;\r\nmargin-left: 10mm;\r\n}\r\n\r\n.c1{\r\n    color: lime;\r\n    margin-left: 10mm;\r\n\r\n}"

/***/ }),

/***/ "./src/app/Driver/driver-list/driver-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Driver/driver-list/driver-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Driver List's</h2>\n</div>\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/addDriver\" class=\"dropdown\"> Add Driver's </button></li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Firstname</th>\n          <th>Lastname</th>\n          <th>Email</th>\n          <th>Conatct</th>\n          <th>Licence No</th>\n          <th>Password</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let driver of drivers | async\">\n          <td>{{driver.firstName}}</td>\n          <td>{{driver.lastName}}</td>\n          <td>{{driver.email}}</td>\n          <td>{{driver.contact}}</td>\n          <td>{{driver.licence}}</td>\n          <td>{{driver.password}}</td>\n          <td><button (click)=\"deleteDriver(driver.id)\" class=\"a1\">Delete</button>\n              <button (click)=\"driverDetails(driver.id)\" class=\"b1\">Details</button>\n              <button (click)=\"updateDetails(driver.id)\" class=\"c1\">Update</button>\n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Driver/driver-list/driver-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Driver/driver-list/driver-list.component.ts ***!
  \*************************************************************/
/*! exports provided: DriverListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverListComponent", function() { return DriverListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DriverService */ "./src/app/services/DriverService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverListComponent = /** @class */ (function () {
    function DriverListComponent(driverService, router) {
        this.driverService = driverService;
        this.router = router;
    }
    DriverListComponent.prototype.reloadData = function () {
        this.drivers = this.driverService.getDriverList();
    };
    DriverListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    DriverListComponent.prototype.deleteDriver = function (id) {
        var _this = this;
        this.driverService.deleteDriver(id)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    DriverListComponent.prototype.driverDetails = function (id) {
        this.router.navigate(['details', id]);
    };
    DriverListComponent.prototype.updateDetails = function (id) {
        this.router.navigate(['updateDetail', id]);
    };
    DriverListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-list',
            template: __webpack_require__(/*! ./driver-list.component.html */ "./src/app/Driver/driver-list/driver-list.component.html"),
            styles: [__webpack_require__(/*! ./driver-list.component.css */ "./src/app/Driver/driver-list/driver-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__["DriverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DriverListComponent);
    return DriverListComponent;
}());



/***/ }),

/***/ "./src/app/Driver/driver-update/driver-update.component.css":
/*!******************************************************************!*\
  !*** ./src/app/Driver/driver-update/driver-update.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    height: 50%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgba(160, 10, 206, 0.616), rgba(104, 165, 34, 0.945));\r\n  }\r\n  \r\n  .name{\r\n    color: lavenderblush;\r\n    width: 30;\r\n  }\r\n  \r\n  .card-container.card {\r\n    color: maroon;\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\n  \r\n  .form-control{\r\n      color: darksalmon;\r\n      width: 30;\r\n      padding: 0cm;\r\n  }\r\n  \r\n  btn btn-success {\r\n      color: darkslategrey;\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n    widows: 20;\r\n  }\r\n  \r\n  /*\r\n   * Card component\r\n   */\r\n  \r\n  .card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n  \r\n  .profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n  /*\r\n   * Form styles\r\n   */\r\n  \r\n  .profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n  }\r\n  \r\n  .reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .form-signin #inputEmail,\r\n  .form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .form-signin input[type=email],\r\n  .form-signin input[type=password],\r\n  .form-signin input[type=text],\r\n  .form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n  \r\n  .btn.btn-signin,.btn-cancel {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n  }\r\n  \r\n  .btn.btn-cancel {\r\n    background-color: rgb(255, 34, 24);\r\n  }\r\n  \r\n  .btn.btn-signin:hover,\r\n  .btn.btn-signin:active,\r\n  .btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n  }\r\n  \r\n  .forgot-password {\r\n    color: rgb(104, 145, 162);\r\n  }\r\n  \r\n  .forgot-password:hover,\r\n  .forgot-password:active,\r\n  .forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Driver/driver-update/driver-update.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/Driver/driver-update/driver-update.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header >\n  <p class=\"card-container.card\">Update Driver</p>\n</header>\n\n<body>\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n  <form (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n      <label for=\"name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"driver.firstName\" name=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"driver.lastName\" name=\"lastName\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Email</label>\n      <input type=\"text\" class=\"form-control\" id=\"email\" required [(ngModel)]=\"driver.email\" name=\"email\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">Contact </label>\n      <input type=\"text\" class=\"form-control\" id=\"contact\" required [(ngModel)]=\"driver.contact\" name=\"contact\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">UserName</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" required [(ngModel)]=\"driver.username\" name=\"username\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">password</label>\n      <input type=\"text\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"driver.password\" name=\"password\">\n    </div>\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n  </form>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Driver/driver-update/driver-update.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Driver/driver-update/driver-update.component.ts ***!
  \*****************************************************************/
/*! exports provided: DriverUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverUpdateComponent", function() { return DriverUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_model_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model.driver */ "./src/app/model/model.driver.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/DriverService */ "./src/app/services/DriverService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverUpdateComponent = /** @class */ (function () {
    function DriverUpdateComponent(route, router, driverService) {
        this.route = route;
        this.router = router;
        this.driverService = driverService;
    }
    DriverUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driver = new src_app_model_model_driver__WEBPACK_IMPORTED_MODULE_1__["Driver"]();
        this.id = this.route.snapshot.params['id'];
        this.driverService.getDriver(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.driver = data;
        }, function (error) { return console.log(error); });
    };
    DriverUpdateComponent.prototype.updateDriver = function () {
        this.driverService.updateDriver(this.id, this.driver)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.driver = new src_app_model_model_driver__WEBPACK_IMPORTED_MODULE_1__["Driver"]();
        this.gotoList();
    };
    DriverUpdateComponent.prototype.onSubmit = function () {
        this.updateDriver();
    };
    DriverUpdateComponent.prototype.gotoList = function () {
        this.router.navigate(['D-List']);
    };
    DriverUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver-update',
            template: __webpack_require__(/*! ./driver-update.component.html */ "./src/app/Driver/driver-update/driver-update.component.html"),
            styles: [__webpack_require__(/*! ./driver-update.component.css */ "./src/app/Driver/driver-update/driver-update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_3__["DriverService"]])
    ], DriverUpdateComponent);
    return DriverUpdateComponent;
}());



/***/ }),

/***/ "./src/app/Driver/driver/driver.component.css":
/*!****************************************************!*\
  !*** ./src/app/Driver/driver/driver.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(196, 1, 255), rgb(252, 11, 31));\r\n  }\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\nheader{\r\n    color: mediumseagreen;\r\n  }\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n  }\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n  }\r\n/*\r\n   * Form styles\r\n   */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n  }\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin #inputEmail,\r\n  .form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n  }\r\n.form-signin input[type=email],\r\n  .form-signin input[type=password],\r\n  .form-signin input[type=text],\r\n  .form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n.btn.btn-signin,.btn-cancel {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n  }\r\n.btn.btn-cancel {\r\n    background-color: rgb(255, 34, 24);\r\n  }\r\n.btn.btn-signin:hover,\r\n  .btn.btn-signin:active,\r\n  .btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n  }\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n  }\r\n.forgot-password:hover,\r\n  .forgot-password:active,\r\n  .forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Driver/driver/driver.component.html":
/*!*****************************************************!*\
  !*** ./src/app/Driver/driver/driver.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header><h3>Add Driver</h3></header>\n\n\n<body>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n\n  <form (ngSubmit)=\"registerDriver()\">\n\n    \n    <div class=\"form-group \">\n      <label for=\"name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"firstName\" required [(ngModel)]=\"driver.firstName\" name=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"lastName\" required [(ngModel)]=\"driver.lastName\" name=\"lastName\">\n    </div>\n\n\n\n    <div class=\"form-group\" >\n      <label for=\"name\">Email</label>\n      <input type=\"text\" class=\"form-control\"  id=\"email\" required [(ngModel)]=\"driver.email\" name=\"email\">\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"name\">UserName</label>\n      <input type=\"text\" class=\"form-control\" id=\"username\" required [(ngModel)]=\"driver.username\" name=\"username\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Contact</label>\n      <input type=\"text\" class=\"form-control\" id=\"contact\" required [(ngModel)]=\"driver.contact\" name=\"contact\">\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"name\">licence</label>\n      <input type=\"text\" class=\"form-control\" id=\"licence\" required [(ngModel)]=\"driver.licence\" name=\"licence\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"psssword\">Password</label>\n      <input type=\"text\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"driver.password\" name=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n</div>\n</nav>\n\n<div [hidden]=\"!submitted\">\n  <!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n </body>"

/***/ }),

/***/ "./src/app/Driver/driver/driver.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Driver/driver/driver.component.ts ***!
  \***************************************************/
/*! exports provided: DriverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverComponent", function() { return DriverComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_model_driver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model.driver */ "./src/app/model/model.driver.ts");
/* harmony import */ var src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DriverService */ "./src/app/services/DriverService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DriverComponent = /** @class */ (function () {
    function DriverComponent(driverService, router) {
        this.driverService = driverService;
        this.router = router;
        this.driver = new src_app_model_model_driver__WEBPACK_IMPORTED_MODULE_1__["Driver"]();
    }
    DriverComponent.prototype.ngOnInit = function () {
    };
    DriverComponent.prototype.registerDriver = function () {
        var _this = this;
        this.driverService.createDriver(this.driver).subscribe(function (data) {
            _this.router.navigate(['D-List']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    DriverComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driver',
            template: __webpack_require__(/*! ./driver.component.html */ "./src/app/Driver/driver/driver.component.html"),
            styles: [__webpack_require__(/*! ./driver.component.css */ "./src/app/Driver/driver/driver.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__["DriverService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], DriverComponent);
    return DriverComponent;
}());



/***/ }),

/***/ "./src/app/Driver/driverassign/driverassign.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Driver/driverassign/driverassign.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n    background-color: skyblue;\r\n   \r\n}\r\nbody{\r\n    background-color: rebeccapurple;\r\n  \r\n    color: salmon;\r\n}\r\n.form-horizontal shadow p-3 mb-5 bg-white rounded{\r\n    padding-top: 10cm;\r\n}\r\n.col-6{\r\n    color: slategray;\r\n    -webkit-columns: 3;\r\n            columns: 3;\r\n    \r\n    -webkit-column-rule-style: hidden;\r\n    \r\n            column-rule-style: hidden;\r\n}\r\n.form-control{\r\n    color: springgreen;\r\n}\r\n.row{\r\n\r\n    color: teal;\r\n    background: rgb(92, 173, 92);\r\n}\r\n.a1{\r\n    color: mediumblue;\r\n}"

/***/ }),

/***/ "./src/app/Driver/driverassign/driverassign.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Driver/driverassign/driverassign.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<header>\n        <h3>\n                Asssign Driver\n        </h3>\n</header>\n<body>\n\n\n<div class=\"container\">\n        <br>\n        <form class=\"form-horizontal shadow p-3 mb-5 bg-white rounded\" #f=\"ngForm\"\n                (ngSubmit)=\"onSubmit()\">\n                <div class=\"row\">\n            \n                        <div class=\"col-6\">\n                               \n\n          <div class=\"form-group\">\n                 <label for=\"name\" class=\"a1\">vehicleno</label>\n                <input type=\"text\" class=\"form-control\" id=\"vehicleno\" required [(ngModel)]=\"vehicle.vehicleno\" name=\"vehicleno\">\n        </div>\n\n\n\n     \n\n///\n\n\n<div class=\"form-group\">\n        <label for=\"name\" class=\"a1\">driverid</label>\n          <input type=\"text\" class=\"form-control\" id=\"driverid\" required [(ngModel)]=\"vehicle.driverid\" name=\"driverid\">\n      </div>\n     \n     \n      \n      \n     \n      <div class=\"form-group\">\n             <label for=\"name\" class=\"a1\">driverName</label>\n       \n       <select class=\"form-control custom-select\"  id=\"driverid\" required [(ngModel)]=\"vehicle.driverid\" name=\"driverid\">\n         <option value=\"\" selected>select</option>\n         <option *ngFor=\"let driver of drivers\" value=\"{{driver.id}}\">{{driver.firstName}} {{driver.lastName}}</option>\n       </select>\n     </div>\n\n\n    \n\n\n\n                              \n                             \n                        </div>\n                    \n                </div>\n                <div class=\"row\">\n                        <div class=\"col-6\">\n                                <input type=\"submit\" class=\" btn btn-secondary\" value=\"Assign\">\n                        </div>\n                </div>\n        </form>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Driver/driverassign/driverassign.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Driver/driverassign/driverassign.component.ts ***!
  \***************************************************************/
/*! exports provided: DriverassignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverassignComponent", function() { return DriverassignComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_model_vehicle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model.vehicle */ "./src/app/model/model.vehicle.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_VehicleService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/VehicleService */ "./src/app/services/VehicleService.ts");
/* harmony import */ var src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/DriverService */ "./src/app/services/DriverService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DriverassignComponent = /** @class */ (function () {
    function DriverassignComponent(route, router, vehicleService, driverService) {
        this.route = route;
        this.router = router;
        this.vehicleService = vehicleService;
        this.driverService = driverService;
    }
    DriverassignComponent.prototype.ngAfterViewInit = function () {
        this.reloadData();
    };
    DriverassignComponent.prototype.reloadData = function () {
        var _this = this;
        this.driverService.getDriverList().subscribe(function (data) {
            _this.drivers = data;
            setTimeout(function () {
            }, 1000);
        }, function (error) {
        });
    };
    DriverassignComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vehicle = new src_app_model_model_vehicle__WEBPACK_IMPORTED_MODULE_1__["Vehicle"]();
        this.vehicleid = this.route.snapshot.params['vehicleid'];
        this.vehicleService.getVehicle(this.vehicleid)
            .subscribe(function (data) {
            console.log(data);
            _this.vehicle = data;
        }, function (error) { return console.log(error); });
    };
    DriverassignComponent.prototype.updateDriver = function () {
        this.vehicleService.updateVehicle(this.vehicleid, this.vehicle)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.vehicle = new src_app_model_model_vehicle__WEBPACK_IMPORTED_MODULE_1__["Vehicle"]();
        this.gotoList();
    };
    DriverassignComponent.prototype.onSubmit = function () {
        this.updateDriver();
    };
    DriverassignComponent.prototype.gotoList = function () {
        this.router.navigate(['v-list']);
    };
    DriverassignComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-driverassign',
            template: __webpack_require__(/*! ./driverassign.component.html */ "./src/app/Driver/driverassign/driverassign.component.html"),
            styles: [__webpack_require__(/*! ./driverassign.component.css */ "./src/app/Driver/driverassign/driverassign.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_VehicleService__WEBPACK_IMPORTED_MODULE_3__["VehicleService"], src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_4__["DriverService"]])
    ], DriverassignComponent);
    return DriverassignComponent;
}());



/***/ }),

/***/ "./src/app/Foggot-Password/forgot/forgot.component.css":
/*!*************************************************************!*\
  !*** ./src/app/Foggot-Password/forgot/forgot.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(16, 138, 252));\r\n  }\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n  }\r\n/*\r\n   * Card component\r\n   */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n  }\r\n/*\r\n   * Form styles\r\n   */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n  }\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin #inputEmail,\r\n  .form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n  }\r\n.form-signin input[type=email],\r\n  .form-signin input[type=password],\r\n  .form-signin input[type=text],\r\n  .form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n  }\r\n.btn.btn-signin:hover,\r\n  .btn.btn-signin:active,\r\n  .btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n  }\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n  }\r\n.forgot-password:hover,\r\n  .forgot-password:active,\r\n  .forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Foggot-Password/forgot/forgot.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Foggot-Password/forgot/forgot.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n  \n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n\n\n    \n    <form name=\"form\" (ngSubmit)=\"f.form.valid && changed()\" #f=\"ngForm\" novalidate>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n         <label for=\"username\">username</label>\n          <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n           <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\n\n           <div *ngIf=\"username.errors.required\">\n          Email is required.\n           </div>\n           <div *ngIf=\"username.errors.pattern\">\n          A valid email address is required\n            </div>\n        </div>\n      </div>\n      \n      <button class=\"btn btn-success btn-block\" type=\"submit\">forggrot password</button>\n    </form>\n\n\n   \n      \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Foggot-Password/forgot/forgot.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Foggot-Password/forgot/forgot.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var src_app_services_forget_serveice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/forget.serveice */ "./src/app/services/forget.serveice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotComponent = /** @class */ (function () {
    function ForgotComponent(passService, router) {
        this.passService = passService;
        this.router = router;
        this.user = new src_app_model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    ForgotComponent.prototype.ngOnInit = function () {
    };
    ForgotComponent.prototype.changed = function () {
        var _this = this;
        this.passService.passAccount(this.user).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'facing error';
        });
    };
    ForgotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot',
            template: __webpack_require__(/*! ./forgot.component.html */ "./src/app/Foggot-Password/forgot/forgot.component.html"),
            styles: [__webpack_require__(/*! ./forgot.component.css */ "./src/app/Foggot-Password/forgot/forgot.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_forget_serveice__WEBPACK_IMPORTED_MODULE_2__["ForgetService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ForgotComponent);
    return ForgotComponent;
}());



/***/ }),

/***/ "./src/app/Foggot-Password/passwordchange/passwordchange.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/Foggot-Password/passwordchange/passwordchange.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(104, 145, 162), rgb(16, 138, 252));\r\n  }\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n  }\r\n/*\r\n   * Card component\r\n   */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n  }\r\n/*\r\n   * Form styles\r\n   */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n  }\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin #inputEmail,\r\n  .form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n  }\r\n.form-signin input[type=email],\r\n  .form-signin input[type=password],\r\n  .form-signin input[type=text],\r\n  .form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n  }\r\n.btn.btn-signin:hover,\r\n  .btn.btn-signin:active,\r\n  .btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n  }\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n  }\r\n.forgot-password:hover,\r\n  .forgot-password:active,\r\n  .forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/Foggot-Password/passwordchange/passwordchange.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/Foggot-Password/passwordchange/passwordchange.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<body>\n\n\n  <div class=\"container\">\n    <div class=\"card card-container\">\n      <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n      \n\n  <div [hidden]=\"submitted\" style=\"width: 400px;\">\n    <form (ngSubmit)=\"onSubmit()\">\n     \n      \n  \n      <div class=\"form-group\">\n        <label for=\"name\">password</label>\n        <input type=\"text\" class=\"form-control\" id=\"password\" required [(ngModel)]=\"user.password\" name=\"password\">\n      </div>\n  \n      <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n    </form>\n  </div>\n  </div>\n  </div>\n  </body>"

/***/ }),

/***/ "./src/app/Foggot-Password/passwordchange/passwordchange.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/Foggot-Password/passwordchange/passwordchange.component.ts ***!
  \****************************************************************************/
/*! exports provided: PasswordchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordchangeComponent", function() { return PasswordchangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/account.service */ "./src/app/services/account.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordchangeComponent = /** @class */ (function () {
    function PasswordchangeComponent(route, router, accountService) {
        this.route = route;
        this.router = router;
        this.accountService = accountService;
    }
    PasswordchangeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = new src_app_model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.tokenid = this.route.snapshot.params['tokenid'];
        this.accountService.getUser(this.tokenid)
            .subscribe(function (data) {
            console.log(data);
            _this.user = data;
        }, function (error) { return console.log(error); });
    };
    PasswordchangeComponent.prototype.updateUser = function () {
        this.accountService.updateUsers(this.tokenid, this.user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.user = new src_app_model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.gotoList();
    };
    PasswordchangeComponent.prototype.onSubmit = function () {
        this.updateUser();
    };
    PasswordchangeComponent.prototype.updateUserByTken = function () {
        this.accountService.updateUsersBytoken(this.confirmationToken, this.user)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.user = new src_app_model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
        this.gotoList();
    };
    PasswordchangeComponent.prototype.onSubmit1 = function () {
        this.updateUserByTken();
    };
    PasswordchangeComponent.prototype.gotoList = function () {
        this.router.navigate(['/login']);
    };
    PasswordchangeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-passwordchange',
            template: __webpack_require__(/*! ./passwordchange.component.html */ "./src/app/Foggot-Password/passwordchange/passwordchange.component.html"),
            styles: [__webpack_require__(/*! ./passwordchange.component.css */ "./src/app/Foggot-Password/passwordchange/passwordchange.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_account_service__WEBPACK_IMPORTED_MODULE_3__["AccountService"]])
    ], PasswordchangeComponent);
    return PasswordchangeComponent;
}());



/***/ }),

/***/ "./src/app/HEADER/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/HEADER/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header {\r\n    height: 60px;\r\n    position: relative;\r\n    z-index: 10;\r\n}\r\n\r\n.dropdown{\r\n    color:hotpink;\r\n    width: 40;\r\n    padding: 0mm;\r\n    font-size: 10;\r\n}"

/***/ }),

/***/ "./src/app/HEADER/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/HEADER/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header className=\"app-header\">\n  \n      <div className=\"app-options\">\n          <nav  class=\"navbar navbar-inverse\">\n           \n            <ul class=\"nav navbar-nav\">\n                 <li> <a routerLink=\"/adduser\" class=\"dropdown\">User</a> </li>\n            </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n                <li> <a  routerLink=\"/addDriver\" class=\"dropdown\">Driver</a></li>\n           </ul>\n           <ul class=\"nav navbar-nav navbar-right\">\n                  <li> <a  routerLink=\"/addVehicle\" class=\"dropdown\">Vehicle</a> </li>\n           </ul>\n           <ul class=\"nav navbar-nav navbar-right\">\n                  <li> <a  routerLink=\"/addUsergroup\" class=\"dropdown\">Groups</a></li>\n             </ul>\n            \n             <ul class=\"nav navbar-nav navbar-right\">\n              <li> <a  routerLink=\"/zonelist\" class=\"dropdown\">Zone</a></li>\n         </ul>\n\n         <ul class=\"nav navbar-nav navbar-right\">\n          <li> <a  routerLink=\"/signup\" class=\"dropdown\">signup</a></li>\n     </ul>\n     \n     <ul class=\"nav navbar-nav navbar-right\">\n          <li> <a  routerLink=\"/signiii\" class=\"dropdown\">signin</a></li>\n     </ul>\n         <ul class=\"nav navbar-nav navbar-right\">\n          <li> <a  routerLink=\"/customerlist\" class=\"dropdown\">Customer</a></li>\n     </ul>\n          \n           <ul class=\"nav navbar-nav navbar-right\">\n                  <li> <a  routerLink=\"/D-List\" class=\"dropdown\">Driver</a> </li>\n           </ul>\n           <ul class=\"nav navbar-nav navbar-right\">\n              <li> <a  routerLink=\"/groupList\" class=\"dropdown\">G-List</a></li>\n         </ul>\n\n           <ul class=\"nav navbar-nav navbar-right\">\n               <li> <a  routerLink=\"/v-list\" class=\"dropdown\">V-list</a> </li>\n        </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n              <li> <a  routerLink=\"/reqlist\" class=\"dropdown\">R-list</a> </li>\n       </ul>\n        \n       <ul class=\"nav navbar-nav navbar-right\">\n          <li> <a  routerLink=\"/assignRe\" class=\"dropdown\">Assign-SSN</a> </li>\n   </ul>\n\n   <ul class=\"nav navbar-nav navbar-right\">\n     <li> <a  routerLink=\"/AssignVehcile\" class=\"dropdown\">V-Assign</a> </li>\n</ul>\n   \n\n   <ul class=\"nav navbar-nav navbar-right\">\n     <li> <a  routerLink=\"/suphome\" class=\"dropdown\">S-Home</a> </li>\n</ul>\n<ul class=\"nav navbar-nav navbar-right\">\n     <li> <a  routerLink=\"/backtopcmc\" class=\"dropdown\">Asign-PCMC</a> </li>\n</ul>\n   \n\n\n\n        <ul class=\"nav navbar-nav navbar-right\">\n              <li> <a  routerLink=\"/users\" class=\"dropdown\">user</a> </li>\n         </ul>\n\n         <ul class=\"nav navbar-nav navbar-right\">\n              <li> <a  routerLink=\"/req\" class=\"dropdown\">Req</a> </li>\n         </ul>\n\n        <ul class=\"nav navbar-nav navbar-right\">\n              <li> <a  routerLink=\"/assing\" class=\"dropdown\">assign</a> </li>\n       </ul>\n\n       <ul class=\"nav navbar-nav navbar-right\">\n          <li>  <a [routerLink]=\"['/pass1']\" class=\"btn btn-link\">frggt</a></li>\n      </ul>\n          \n\n           <ul class=\"nav navbar-nav navbar-right\">\n               <li> <a  routerLink=\"/profile\" class=\"dropdown\">profile</a> </li>\n        </ul>\n           \n           </nav>\n      </div>\n  \n</header>\n"

/***/ }),

/***/ "./src/app/HEADER/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/HEADER/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/HEADER/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/HEADER/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/LOGIN/signin/signin.component.css":
/*!***************************************************!*\
  !*** ./src/app/LOGIN/signin/signin.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(104, 199, 144), rgb(86, 230, 186));\r\n  }\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n  }\r\n/*\r\n   * Card component\r\n   */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n  }\r\n/*\r\n   * Form styles\r\n   */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n  }\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin #inputEmail,\r\n  .form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n  }\r\n.form-signin input[type=email],\r\n  .form-signin input[type=password],\r\n  .form-signin input[type=text],\r\n  .form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n.btn.btn-signin {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n  }\r\n.btn.btn-signin:hover,\r\n  .btn.btn-signin:active,\r\n  .btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n  }\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n  }\r\n.forgot-password:hover,\r\n  .forgot-password:active,\r\n  .forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/LOGIN/signin/signin.component.html":
/*!****************************************************!*\
  !*** ./src/app/LOGIN/signin/signin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<body>\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n      \n\n\n\n\n    <form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\"novalidate>\n\n     <div class=\"form-group\">\n  <label for=\"username\">Username</label>\n  <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\"required #username=\"ngModel\"/>\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && username.invalid\">\n    Username is required!\n  </div>\n</div>\n\n<div class=\"form-group\">\n  <label for=\"password\">Password</label>\n  <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\"required minlength=\"6\" #password=\"ngModel\" />\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && password.invalid\">\n    <div *ngIf=\"password.errors.required\">Password is required</div>\n    <div *ngIf=\"password.errors.minlength\">\n      Password must be at least 6 characters\n    </div>\n  </div>\n</div>\n\n<div class=\"form-group\">\n  <button class=\"btn btn-primary btn-block\">\n    Login\n  </button>\n</div>\n\n\n\n<div class=\"form-group\">\n  <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && isLoginFailed\" >\n    Login failed: {{ errorMessage }}\n  </div>\n</div>\n</form>\n\n<div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n  Logged in as {{ roles }}.\n  </div>\n\n      <a [routerLink]=\"['/forgot']\" class=\"btn btn-link\">forggrot password</a>\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\n       <a routerLink=\"/customer\"  class=\"btn btn-link\"> Customer Register</a> \n  </div>\n</div>\n\n\n\n</body>\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/LOGIN/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/LOGIN/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_AuthService1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/AuthService1 */ "./src/app/services/AuthService1.ts");
/* harmony import */ var src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage */ "./src/app/services/tokenstorage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninComponent = /** @class */ (function () {
    function SigninComponent(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    SigninComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.form).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUser(data);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getUser().roles;
            _this.reloadPage();
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isLoginFailed = true;
        });
    };
    SigninComponent.prototype.reloadPage = function () {
        this.router.navigateByUrl('/profile');
        // window.location.reload();
    };
    SigninComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/LOGIN/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/LOGIN/signin/signin.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_AuthService1__WEBPACK_IMPORTED_MODULE_2__["AuthService1"], src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/LOGIN/signup/signup.component.css":
/*!***************************************************!*\
  !*** ./src/app/LOGIN/signup/signup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nheader{\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(235, 148, 202), rgb(103, 125, 167));\r\n }\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(217, 158, 235), rgb(126, 218, 221));\r\n  }\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n  }\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n  }\r\n/*\r\n   * Form styles\r\n   */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n  }\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin #inputEmail,\r\n  .form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n  }\r\n.form-signin input[type=email],\r\n  .form-signin input[type=password],\r\n  .form-signin input[type=text],\r\n  .form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n.btn.btn-signin,.btn-cancel {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n  }\r\n.btn.btn-cancel {\r\n    background-color: rgb(24, 59, 255);\r\n  }\r\n.btn.btn-signin:hover,\r\n  .btn.btn-signin:active,\r\n  .btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n  }\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n  }\r\n.forgot-password:hover,\r\n  .forgot-password:active,\r\n  .forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/LOGIN/signup/signup.component.html":
/*!****************************************************!*\
  !*** ./src/app/LOGIN/signup/signup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n\n</header>\n<body>\n<div class=\"col-md-12\">\n  <div class=\"card card-container\">\n    <img\n      id=\"profile-img\"\n      src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\"\n      class=\"profile-img-card\"\n    />\n    <form\n      *ngIf=\"!isSuccessful\"\n      name=\"form\"\n      (ngSubmit)=\"f.form.valid && onSubmit()\"\n      #f=\"ngForm\"\n      novalidate\n    >\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          name=\"username\"\n          [(ngModel)]=\"form.username\"\n          required\n          minlength=\"3\"\n          maxlength=\"20\"\n          #username=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && username.invalid\">\n          <div *ngIf=\"username.errors.required\">Username is required</div>\n          <div *ngIf=\"username.errors.minlength\">\n            Username must be at least 3 characters\n          </div>\n          <div *ngIf=\"username.errors.maxlength\">\n            Username must be at most 20 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input\n          type=\"email\"\n          class=\"form-control\"\n          name=\"email\"\n          [(ngModel)]=\"form.email\"\n          required\n          email\n          #email=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && email.invalid\">\n          <div *ngIf=\"email.errors.required\">Email is required</div>\n          <div *ngIf=\"email.errors.email\">\n            Email must be a valid email address\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input\n          type=\"password\"\n          class=\"form-control\"\n          name=\"password\"\n          [(ngModel)]=\"form.password\"\n          required\n          minlength=\"6\"\n          #password=\"ngModel\"\n        />\n        <div class=\"alert-danger\" *ngIf=\"f.submitted && password.invalid\">\n          <div *ngIf=\"password.errors.required\">Password is required</div>\n          <div *ngIf=\"password.errors.minlength\">\n            Password must be at least 6 characters\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <button class=\"btn btn-primary btn-block\">Sign Up</button>\n      </div>\n\n      <div class=\"alert alert-warning\" *ngIf=\"f.submitted && isSignUpFailed\">\n        Signup failed!<br />{{ errorMessage }}\n      </div>\n    </form>\n\n    <div class=\"alert alert-success\" *ngIf=\"isSuccessful\">\n      Your registration is successful!\n    </div>\n  </div>\n</div>\n\n</body>"

/***/ }),

/***/ "./src/app/LOGIN/signup/signup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/LOGIN/signup/signup.component.ts ***!
  \**************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_AuthService1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/AuthService1 */ "./src/app/services/AuthService1.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.form = {};
        this.isSuccessful = false;
        this.isSignUpFailed = false;
        this.errorMessage = '';
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.register(this.form).subscribe(function (data) {
            console.log(data);
            _this.isSuccessful = true;
            _this.isSignUpFailed = false;
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isSignUpFailed = true;
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/LOGIN/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/LOGIN/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_AuthService1__WEBPACK_IMPORTED_MODULE_1__["AuthService1"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/PCMC/pcmc/incoming-request/incoming-request.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/PCMC/pcmc/incoming-request/incoming-request.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/PCMC/pcmc/incoming-request/incoming-request.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/PCMC/pcmc/incoming-request/incoming-request.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Incoming Request</h2>\n</div>\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n   \n  </div>\n</nav>\n\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Approvel Id</th>\n          <th>Req Id</th>\n          <th>Req No</th>\n          <th>createdon</th>\n          <th>approvaldate</th>\n          <th>status</th>\n          <th>approval Status</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let approvelHisytory of approvelHisytories\">\n          <td>{{approvelHisytory.approvalhistoryid}}</td>\n          <td>{{approvelHisytory.requestmasterid}}</td>\n          <td>{{approvelHisytory.requestnumber}}</td>\n          <td>{{approvelHisytory.createdon}}</td>\n          <td>{{approvelHisytory.approvaldate}}</td>\n          <td>{{approvelHisytory.status}}</td>\n          <td>{{approvelHisytory.approvalstatus}}</td>\n        \n          <td><button (click)=\"rejectDriver(approvelHisytory.approvalhistoryid)\" class=\"a1\">Reject</button>\n              <button (click)=\"ApprovelDetails(approvelHisytory.approvalhistoryid)\" class=\"b1\">Edit</button>\n              <button (click)=\"deleteDriver(approvelHisytory.approvalhistoryid)\" class=\"a1\">Approved</button>\n            \n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/PCMC/pcmc/incoming-request/incoming-request.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/PCMC/pcmc/incoming-request/incoming-request.component.ts ***!
  \**************************************************************************/
/*! exports provided: IncomingRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncomingRequestComponent", function() { return IncomingRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/ApprovelHisytory */ "./src/app/model/ApprovelHisytory.ts");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var IncomingRequestComponent = /** @class */ (function () {
    function IncomingRequestComponent(route, router, approvelService) {
        this.route = route;
        this.router = router;
        this.approvelService = approvelService;
    }
    IncomingRequestComponent.prototype.reloadData = function () {
        var _this = this;
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
        this.useremail = this.route.snapshot.params['useremail'];
        this.approvelService.validateUser1(this.useremail)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytories = data;
        }, function (error) { return console.log(error); });
    };
    IncomingRequestComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    IncomingRequestComponent.prototype.gotoList = function () {
        this.router.navigate(['D-List']);
    };
    IncomingRequestComponent.prototype.ApprovelDetails = function (approvalhistoryid) {
        this.router.navigate(['details1', approvalhistoryid]);
    };
    ///
    IncomingRequestComponent.prototype.onSubmit = function () {
    };
    //working for approved or reject
    IncomingRequestComponent.prototype.deleteDriver = function (approvalhistoryid) {
        var _this = this;
        this.approvelService.deleteDriver1(approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    IncomingRequestComponent.prototype.rejectDriver = function (approvalhistoryid) {
        var _this = this;
        this.approvelService.rejectRequest1(approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    IncomingRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-incoming-request',
            template: __webpack_require__(/*! ./incoming-request.component.html */ "./src/app/PCMC/pcmc/incoming-request/incoming-request.component.html"),
            styles: [__webpack_require__(/*! ./incoming-request.component.css */ "./src/app/PCMC/pcmc/incoming-request/incoming-request.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_2__["ApprovelService"]])
    ], IncomingRequestComponent);
    return IncomingRequestComponent;
}());



/***/ }),

/***/ "./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.css":
/*!*************************************************************!*\
  !*** ./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.html":
/*!**************************************************************!*\
  !*** ./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<header>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n      <ul class=\"nav navbar-nav\" *ngIf=\"isLoggedIn\">\n        <li class=\"badge badge-info\" > <a href=\"/signiii\" class=\"nav-link\" routerLink=\"profile\">{{ username }}</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\">\n          <a href class=\"nav-link\" (click)=\"logout()\">LogOut</a>\n        </li>\n      </ul>\n\n    </div>\n  </nav>\n\n\n\n</header>\n<div class=\"page-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"row page-titles\">\n      <div class=\"col-md-5 align-self-center\">\n        <h4 class=\"text-themecolor\">Dashboard</h4>\n      </div>\n      <div class=\"col-md-7 align-self-center text-right\">\n        <div class=\"d-flex justify-content-end align-items-center\">\n          <ol class=\"breadcrumb\">\n            <button (click)=\"approvelDetails(approvelHisytory.supervisorid)\" class=\"c1\">Update</button>\n            <button  class=\"breadcrumb-item active\"><a class=\"\" (click)=\"approvelDetails(currentUser.email)\">Dashboard</a></button>\n            <td>\n              <button (click)=\"driverDetails(driver.id)\" class=\"b1\">Details {{ currentUser.email }}</button>\n              <button (click)=\"approvelDetails(currentUser.email)\" class=\"c1\">UpdateReal</button>\n              \n          </td>\n\n          </ol>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-body\" *ngIf=\"isImplementer=='no'\">\n            <div class=\"row\">\n              <!-- Column -->\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-info text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Total Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box circle-implemented text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Implemented Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-dark text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Pending Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-success text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Approved Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-dangour text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Declined Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"card-body\" *ngIf=\"isImplementer=='yes'\">\n            <div class=\"row\">\n\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implPrivilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-info text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Total Provisioning & De-Provisioning\n                      Requests</h6>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implprivilegeRequestCountDiv\">\n                <a [routerLink]=\"['/approveAccessRequests']\">\n                  <div class=\"card\">\n                    <div class=\"box bg-success text-center\">\n                      <h1 class=\"font-light text-white\"></h1>\n                      <h6 class=\"text-white privilegeRequestCountLabel\">Approved Provisioning\n                        Requests</h6>\n                    </div>\n                  </div>\n                </a>\n              </div>\n\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implprivilegeRequestCountDiv\">\n                <a [routerLink]=\"['/implAccessRequests']\">\n                  <div class=\"card\">\n                    <div class=\"box circle-implemented text-center\">\n                      <h1 class=\"font-light text-white\"></h1>\n                      <h6 class=\"text-white privilegeRequestCountLabel\">Total Implemented\n                        Requests</h6>\n                    </div>\n                  </div>\n                </a>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implprivilegeRequestCountDiv\">\n                <a [routerLink]=\"['/implementerRemovePrivilegeRequest']\">\n                  <div class=\"card\">\n                    <div class=\"box bg-dark text-center\">\n                      <h1 class=\"font-light text-white\"></h1>\n                      <h6 class=\"text-white privilegeRequestCountLabel\">Pending De-Provisioning\n                        Requests</h6>\n                    </div>\n                  </div>\n                </a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"chart-div-date\">\n                <input class=\"form-control input-daterange-datepicker\" type=\"text\" name=\"daterange\"\n                       [(ngModel)]=\"dateRange\"/>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n            \n\n\n              <div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n                <header class=\"jumbotron\">\n                  <h3>\n                    <strong>{{ currentUser.username }}</strong> Profile\n                  </h3>\n                </header>\n                <p>\n                  <strong>Token:</strong>\n                  {{ currentUser.accessToken.substring(0, 20) }} ...\n                  {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n                </p>\n                <p>\n                  <strong>Email:</strong>\n                  {{ currentUser.email }}\n                </p>\n                <p>\n                  <strong>id:</strong>\n                  {{ currentUser.id }}\n                </p>\n                <p>\n                  <strong>userid:</strong>\n                  {{ currentUser.userid }}\n                </p>\n                <strong>Roles:</strong>\n                <ul>\n                  <li *ngFor=\"let role of currentUser.roles\">\n                    {{ role }}\n                  </li>\n                </ul>\n              </div>\n              \n              <ng-template #loggedOut>\n                Please login.\n              </ng-template>\n            \n\n           \n\n\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.ts":
/*!************************************************************!*\
  !*** ./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.ts ***!
  \************************************************************/
/*! exports provided: PcmcHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PcmcHomeComponent", function() { return PcmcHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DriverService */ "./src/app/services/DriverService.ts");
/* harmony import */ var src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage */ "./src/app/services/tokenstorage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PcmcHomeComponent = /** @class */ (function () {
    function PcmcHomeComponent(driverService, router, token) {
        this.driverService = driverService;
        this.router = router;
        this.token = token;
    }
    PcmcHomeComponent.prototype.reloadData = function () {
        this.currentUser = this.token.getUser();
    };
    PcmcHomeComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    PcmcHomeComponent.prototype.deleteDriver = function (id) {
        var _this = this;
        this.driverService.deleteDriver(id)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    PcmcHomeComponent.prototype.approvelDetails = function (useremail) {
        this.router.navigate(['supRequest', useremail]);
    };
    PcmcHomeComponent.prototype.updateDetails = function (id) {
        this.router.navigate(['updateDetail', id]);
    };
    PcmcHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pcmc-home',
            template: __webpack_require__(/*! ./pcmc-home.component.html */ "./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.html"),
            styles: [__webpack_require__(/*! ./pcmc-home.component.css */ "./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__["DriverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], PcmcHomeComponent);
    return PcmcHomeComponent;
}());



/***/ }),

/***/ "./src/app/Request/create-request/create-request.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/Request/create-request/create-request.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n    background-color: darkturquoise;\r\n}\r\nheader{\r\n    background-color: rgb(143, 218, 228);\r\n}\r\n.btn btn-success{\r\n    color: rgb(191, 218, 72);\r\n}"

/***/ }),

/***/ "./src/app/Request/create-request/create-request.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/Request/create-request/create-request.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  create-request works!\n</p>\n\n<app-header></app-header>\n<header><h3>create Request</h3></header>\n\n\n<body>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n\n  <form (ngSubmit)=\"registerDriver()\">\n\n    \n    <div class=\"form-group \">\n      <label for=\"name\">First requestnumber</label>\n      <input type=\"text\" class=\"form-control\" id=\"requestnumber\" required [(ngModel)]=\"requestMst.requestnumber\" name=\"requestnumber\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">customername</label>\n      <input type=\"text\" class=\"form-control\" id=\"customername\" required [(ngModel)]=\"requestMst.customername\" name=\"customername\">\n    </div>\n\n\n\n    <div class=\"form-group\" >\n      <label for=\"name\">pickupaddress</label>\n      <input type=\"text\" class=\"form-control\"  id=\"pickupaddress\" required [(ngModel)]=\"requestMst.pickupaddress\" name=\"pickupaddress\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"subcatid\" class=\"a1\">subcatid</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"subcatid\"  required [(ngModel)]=\"requestMst.subcatid\" name=\"subcatid\">\n                \n                <option value=\"1\">subcat1</option>\n                <option value=\"2\">subcat2</option>\n                <option value=\"3\">subcat3</option>\n              </select>\n            \n    </div>\n   </div>\n\n  \n\n    <div class=\"form-group\">\n      <label for=\"catsubcategory\" class=\"a1\">catsubcategory</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"catsubcategory\"  required [(ngModel)]=\"requestMst.catsubcategory\" name=\"catsubcategory\">\n                <option value=\"1\">catsubcategory1</option>\n                <option value=\"2\">catsubcategory1</option>\n                <option value=\"3\">catsubcategory1</option>\n              </select>\n            \n    </div>\n   </div>\n\n\n   <div class=\"form-group\">\n    <label for=\"name\">catid</label>\n    <input type=\"text\" class=\"form-control\" id=\"catid\" required [(ngModel)]=\"requestMst.catid\" name=\"catid\">\n  </div>\n    \n\n    <div class=\"form-group\">\n      <label for=\"name\">departmentid</label>\n      <input type=\"text\" class=\"form-control\" id=\"departmentid\" required [(ngModel)]=\"requestMst.departmentid\" name=\"departmentid\">\n    </div>\n    \n    <div class=\"form-group\">\n      <label for=\"name\">approxweighte</label>\n      <input type=\"text\" class=\"form-control\" id=\"approxweight\" required [(ngModel)]=\"requestMst.approxweight\" name=\"approxweight\">\n    </div>\n\n\n\n    \n    <div class=\"form-group\">\n      <label for=\"typeofwaste\" class=\"a1\">typeofwaste</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"typeofwaste\"  required [(ngModel)]=\"requestMst.typeofwaste\" name=\"typeofwaste\">\n                <option value=\"1\">dry</option>\n                <option value=\"2\">ola</option>\n              </select>\n            \n    </div>\n   </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">amount</label>\n      <input type=\"text\" class=\"form-control\" id=\"amount\" required [(ngModel)]=\"requestMst.amount\" name=\"amount\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">lat</label>\n      <input type=\"text\" class=\"form-control\" id=\"lat\" required [(ngModel)]=\"requestMst.lat\" name=\"liclatence\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"name\">longi</label>\n      <input type=\"text\" class=\"form-control\" id=\"longi\" required [(ngModel)]=\"requestMst.longi\" name=\"longi\">\n    </div>\n\n\n\n    \n    <div class=\"form-group\">\n      <label for=\"reqtype\" class=\"a1\">reqtype</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"reqtype\"  required [(ngModel)]=\"requestMst.reqtype\" name=\"reqtype\">\n                <option value=\"1\">type1</option>\n                <option value=\"2\">type2</option>\n                <option value=\"3\">ttpe3</option>\n              \n              </select>\n            \n    </div>\n   </div>\n\n  \n    <div class=\"form-group\">\n      <label for=\"zoneid\" class=\"a1\">zoneid</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"zoneid\"  required [(ngModel)]=\"requestMst.zoneid\" name=\"zoneid\">\n                <option value=\"1\">zone1</option>\n                <option value=\"2\">zone2</option>\n                <option value=\"3\">zone3</option>\n                <option value=\"4\">zone4</option>\n                <option value=\"1\">zone5</option>\n                <option value=\"2\">zone6</option>\n                <option value=\"3\">zone7</option>\n                <option value=\"4\">zone8</option>\n              </select>\n            \n    </div>\n   </div>\n\n\n\n\n    <div class=\"form-group\">\n      <label for=\"name\">distance</label>\n      <input type=\"text\" class=\"form-control\" id=\"distance\" required [(ngModel)]=\"requestMst.distance\" name=\"distance\">\n    </div>\n    \n    \n\n\n \n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n</div>\n</nav>\n\n<div [hidden]=\"!submitted\">\n  <!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n </body>"

/***/ }),

/***/ "./src/app/Request/create-request/create-request.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/Request/create-request/create-request.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateRequestComponent", function() { return CreateRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_model_requestmst__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/model.requestmst */ "./src/app/model/model.requestmst.ts");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateRequestComponent = /** @class */ (function () {
    function CreateRequestComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
        this.requestMst = new src_app_model_model_requestmst__WEBPACK_IMPORTED_MODULE_1__["RequestMst"]();
    }
    CreateRequestComponent.prototype.ngOnInit = function () {
    };
    CreateRequestComponent.prototype.registerDriver = function () {
        var _this = this;
        this.requestService.createRequest(this.requestMst).subscribe(function (data) {
            _this.router.navigate(['D-List']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    CreateRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-request',
            template: __webpack_require__(/*! ./create-request.component.html */ "./src/app/Request/create-request/create-request.component.html"),
            styles: [__webpack_require__(/*! ./create-request.component.css */ "./src/app/Request/create-request/create-request.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_requestService__WEBPACK_IMPORTED_MODULE_2__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateRequestComponent);
    return CreateRequestComponent;
}());



/***/ }),

/***/ "./src/app/Request/request/request-list/request-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/Request/request/request-list/request-list.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Request/request/request-list/request-list.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/Request/request/request-list/request-list.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Request List's</h2>\n</div>\n\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/req\" class=\"dropdown\"> create Request's </button></li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n  \n</div>\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>RequestNo</th>\n          <th>CustomerName</th>\n          <th>pickupaddress</th>\n          <th>approxweight</th>\n          <th>amount </th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let requestMst of requestMsts | async\">\n          <td>{{requestMst.requestnumber}}</td>\n          <td>{{requestMst.customername}}</td>\n          <td>{{requestMst.pickupaddress}}</td>\n          <td>{{requestMst.approxweight}}</td>\n          <td>{{requestMst.amount}}</td>\n        \n          <td><button (click)=\"deleteDriver(requestMst.requestmasterid)\" class=\"a1\">Delete</button>\n              <button (click)=\"driverDetails(requestMst.requestmasterid)\" class=\"b1\">Details</button>\n              <button (click)=\"updateDetails(requestMst.requestmasterid)\" class=\"c1\">Update</button>\n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Request/request/request-list/request-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Request/request/request-list/request-list.component.ts ***!
  \************************************************************************/
/*! exports provided: RequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestListComponent", function() { return RequestListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_requestService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestListComponent = /** @class */ (function () {
    function RequestListComponent(requestService, router) {
        this.requestService = requestService;
        this.router = router;
    }
    RequestListComponent.prototype.reloadData = function () {
        this.requestMsts = this.requestService.getRequestList();
    };
    RequestListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    RequestListComponent.prototype.deleteDriver = function (requestmasterid) {
        var _this = this;
        this.requestService.deleteRequest(requestmasterid)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    RequestListComponent.prototype.driverDetails = function (requestmasterid) {
        this.router.navigate(['details', requestmasterid]);
    };
    RequestListComponent.prototype.updateDetails = function (requestmasterid) {
        this.router.navigate(['updateDetail', requestmasterid]);
    };
    RequestListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.component.html */ "./src/app/Request/request/request-list/request-list.component.html"),
            styles: [__webpack_require__(/*! ./request-list.component.css */ "./src/app/Request/request/request-list/request-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_requestService__WEBPACK_IMPORTED_MODULE_1__["RequestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RequestListComponent);
    return RequestListComponent;
}());



/***/ }),

/***/ "./src/app/SSN/supervisor/edit-list/edit-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/SSN/supervisor/edit-list/edit-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/SSN/supervisor/edit-list/edit-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/SSN/supervisor/edit-list/edit-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<h2>Driver Details</h2> \n\n<hr/>\n<tr *ngFor=\"let approvelHisytory of approvelHisytorys\">\n    <td>{{approvelHisytory.approvalhistoryid}}</td>\n    <td>{{approvelHisytory.requestnumber}}</td><td>{{approvelHisytory.requestmasterid}}</td><br>\n  </tr>\n<br>\n<br>\n<button (click)=\"list()\" class=\"btn btn-primary\">Back to Employee List</button><br>"

/***/ }),

/***/ "./src/app/SSN/supervisor/edit-list/edit-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/SSN/supervisor/edit-list/edit-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditListComponent", function() { return EditListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
/* harmony import */ var src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/ApprovelHisytory */ "./src/app/model/ApprovelHisytory.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditListComponent = /** @class */ (function () {
    function EditListComponent(route, router, driverService) {
        this.route = route;
        this.router = router;
        this.driverService = driverService;
    }
    EditListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_3__["ApprovelHisytory"]();
        this.approvalhistoryid = this.route.snapshot.params['approvalhistoryid'];
        this.driverService.getAppprovwl(this.approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytorys = data;
            //this.approvalhistoryid = data.approvalhistoryid;
            //this.requestmasterid = data.requestmasterid;
            //this.requestnumber = data.requestnumber;
        }, function (error) { return console.log(error); });
    };
    EditListComponent.prototype.list = function () {
        this.router.navigate(['drivers']);
    };
    EditListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-list',
            template: __webpack_require__(/*! ./edit-list.component.html */ "./src/app/SSN/supervisor/edit-list/edit-list.component.html"),
            styles: [__webpack_require__(/*! ./edit-list.component.css */ "./src/app/SSN/supervisor/edit-list/edit-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_2__["ApprovelService"]])
    ], EditListComponent);
    return EditListComponent;
}());



/***/ }),

/***/ "./src/app/SSN/supervisor/request-list/request-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/SSN/supervisor/request-list/request-list.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/SSN/supervisor/request-list/request-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/SSN/supervisor/request-list/request-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Incoming Request</h2>\n</div>\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n   \n  </div>\n</nav>\n\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Approvel Id</th>\n          <th>Req Id</th>\n          <th>Req No</th>\n          <th>createdon</th>\n          <th>approvaldate</th>\n          <th>status</th>\n          <th>approval Status</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let approvelHisytory of approvelHisytories\">\n          <td>{{approvelHisytory.approvalhistoryid}}</td>\n          <td>{{approvelHisytory.requestmasterid}}</td>\n          <td>{{approvelHisytory.requestnumber}}</td>\n          <td>{{approvelHisytory.createdon}}</td>\n          <td>{{approvelHisytory.approvaldate}}</td>\n          <td>{{approvelHisytory.status}}</td>\n          <td>{{approvelHisytory.approvalstatus}}</td>\n        \n          <td><button (click)=\"rejectDriver(approvelHisytory.approvalhistoryid)\" class=\"a1\">Reject</button>\n              <button (click)=\"ApprovelDetails(approvelHisytory.approvalhistoryid)\" class=\"b1\">Edit</button>\n              <button (click)=\"deleteDriver(approvelHisytory.approvalhistoryid)\" class=\"a1\">Approved</button>\n            \n\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/SSN/supervisor/request-list/request-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/SSN/supervisor/request-list/request-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: RequestSupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestSupListComponent", function() { return RequestSupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/model/ApprovelHisytory */ "./src/app/model/ApprovelHisytory.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/approvelService */ "./src/app/services/approvelService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequestSupListComponent = /** @class */ (function () {
    function RequestSupListComponent(route, router, approvelService) {
        this.route = route;
        this.router = router;
        this.approvelService = approvelService;
    }
    RequestSupListComponent.prototype.reloadData = function () {
        var _this = this;
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
        this.useremail = this.route.snapshot.params['useremail'];
        this.approvelService.validateUser(this.useremail)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytories = data;
        }, function (error) { return console.log(error); });
    };
    RequestSupListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    // still not using
    RequestSupListComponent.prototype.updateAPpriver = function () {
        this.approvelService.updateApprovel(this.supervisorid, this.approvelHisytory)
            .subscribe(function (data) { return console.log(data); }, function (error) { return console.log(error); });
        this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
        this.gotoList();
    };
    // onSubmit() {
    //// this.updateAPpriver();    
    //}
    RequestSupListComponent.prototype.gotoList = function () {
        this.router.navigate(['D-List']);
    };
    RequestSupListComponent.prototype.ApprovelDetails = function (approvalhistoryid) {
        this.router.navigate(['details1', approvalhistoryid]);
    };
    ///
    RequestSupListComponent.prototype.ApprovedDriver = function () {
        var _this = this;
        this.approvelService.ApprpovedApprovel(this.approvalhistoryid, this.approvelHisytory)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
            _this.ngOnInit();
        }, function (error) { return console.log(error); });
    };
    RequestSupListComponent.prototype.rejectDDriver = function () {
        var _this = this;
        this.approvelService.rejectApprovel(this.approvalhistoryid, this.approvelHisytory)
            .subscribe(function (data) {
            console.log(data);
            _this.approvelHisytory = new src_app_model_ApprovelHisytory__WEBPACK_IMPORTED_MODULE_1__["ApprovelHisytory"]();
            _this.ngOnInit();
        }, function (error) { return console.log(error); });
    };
    RequestSupListComponent.prototype.onSubmit = function () {
        this.ApprovedDriver();
    };
    //working for approved or reject
    RequestSupListComponent.prototype.deleteDriver = function (approvalhistoryid) {
        var _this = this;
        this.approvelService.deleteDriver(approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    RequestSupListComponent.prototype.rejectDriver = function (approvalhistoryid) {
        var _this = this;
        this.approvelService.rejectRequest(approvalhistoryid)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    RequestSupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-list',
            template: __webpack_require__(/*! ./request-list.component.html */ "./src/app/SSN/supervisor/request-list/request-list.component.html"),
            styles: [__webpack_require__(/*! ./request-list.component.css */ "./src/app/SSN/supervisor/request-list/request-list.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_app_services_approvelService__WEBPACK_IMPORTED_MODULE_3__["ApprovelService"]])
    ], RequestSupListComponent);
    return RequestSupListComponent;
}());



/***/ }),

/***/ "./src/app/SSN/supervisor/sup-home/sup-home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/SSN/supervisor/sup-home/sup-home.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/SSN/supervisor/sup-home/sup-home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/SSN/supervisor/sup-home/sup-home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<header>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n      <ul class=\"nav navbar-nav\" *ngIf=\"isLoggedIn\">\n        <li class=\"badge badge-info\" > <a href=\"/signiii\" class=\"nav-link\" routerLink=\"profile\">{{ username }}</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\">\n          <a href class=\"nav-link\" (click)=\"logout()\">LogOut</a>\n        </li>\n      </ul>\n\n    </div>\n  </nav>\n\n\n\n</header>\n<div class=\"page-wrapper\">\n  <div class=\"container-fluid\">\n    <div class=\"row page-titles\">\n      <div class=\"col-md-5 align-self-center\">\n        <h4 class=\"text-themecolor\">Dashboard</h4>\n      </div>\n      <div class=\"col-md-7 align-self-center text-right\">\n        <div class=\"d-flex justify-content-end align-items-center\">\n          <ol class=\"breadcrumb\">\n            <button (click)=\"approvelDetails(approvelHisytory.supervisorid)\" class=\"c1\">Update</button>\n            <button  class=\"breadcrumb-item active\"><a class=\"\" (click)=\"approvelDetails(currentUser.email)\">Dashboard</a></button>\n            <td>\n              <button (click)=\"driverDetails(driver.id)\" class=\"b1\">Details {{ currentUser.email }}</button>\n              <button (click)=\"approvelDetails(currentUser.email)\" class=\"c1\">UpdateForssn</button>\n             \n          </td>\n\n          <td>\n            <button (click)=\"driverDetails(driver.id)\" class=\"b1\">Details {{ currentUser.email }}</button>\n            <button (click)=\"approvelDetailspcmc(currentUser.email)\" class=\"c1\">UpdateForpcmc</button>\n          \n        </td>\n\n          </ol>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-body\" *ngIf=\"isImplementer=='no'\">\n            <div class=\"row\">\n              <!-- Column -->\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-info text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Total Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box circle-implemented text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Implemented Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-dark text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Pending Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-success text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Approved Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 privilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-dangour text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Declined Provisioning Requests</h6>\n                  </div>\n                </div>\n              </div>\n\n            </div>\n          </div>\n\n          <div class=\"card-body\" *ngIf=\"isImplementer=='yes'\">\n            <div class=\"row\">\n\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implPrivilegeRequestCountDiv\">\n                <div class=\"card\">\n                  <div class=\"box bg-info text-center\">\n                    <h1 class=\"font-light text-white\"></h1>\n                    <h6 class=\"text-white privilegeRequestCountLabel\">Total Provisioning & De-Provisioning\n                      Requests</h6>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implprivilegeRequestCountDiv\">\n                <a [routerLink]=\"['/approveAccessRequests']\">\n                  <div class=\"card\">\n                    <div class=\"box bg-success text-center\">\n                      <h1 class=\"font-light text-white\"></h1>\n                      <h6 class=\"text-white privilegeRequestCountLabel\">Approved Provisioning\n                        Requests</h6>\n                    </div>\n                  </div>\n                </a>\n              </div>\n\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implprivilegeRequestCountDiv\">\n                <a [routerLink]=\"['/implAccessRequests']\">\n                  <div class=\"card\">\n                    <div class=\"box circle-implemented text-center\">\n                      <h1 class=\"font-light text-white\"></h1>\n                      <h6 class=\"text-white privilegeRequestCountLabel\">Total Implemented\n                        Requests</h6>\n                    </div>\n                  </div>\n                </a>\n              </div>\n              <div class=\"col-md-6 col-lg-3 col-xlg-3 implprivilegeRequestCountDiv\">\n                <a [routerLink]=\"['/implementerRemovePrivilegeRequest']\">\n                  <div class=\"card\">\n                    <div class=\"box bg-dark text-center\">\n                      <h1 class=\"font-light text-white\"></h1>\n                      <h6 class=\"text-white privilegeRequestCountLabel\">Pending De-Provisioning\n                        Requests</h6>\n                    </div>\n                  </div>\n                </a>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"chart-div-date\">\n                <input class=\"form-control input-daterange-datepicker\" type=\"text\" name=\"daterange\"\n                       [(ngModel)]=\"dateRange\"/>\n              </div>\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n            \n\n\n              <div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n                <header class=\"jumbotron\">\n                  <h3>\n                    <strong>{{ currentUser.username }}</strong> Profile\n                  </h3>\n                </header>\n                <p>\n                  <strong>Token:</strong>\n                  {{ currentUser.accessToken.substring(0, 20) }} ...\n                  {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n                </p>\n                <p>\n                  <strong>Email:</strong>\n                  {{ currentUser.email }}\n                </p>\n                <p>\n                  <strong>id:</strong>\n                  {{ currentUser.id }}\n                </p>\n                <p>\n                  <strong>userid:</strong>\n                  {{ currentUser.userid }}\n                </p>\n                <strong>Roles:</strong>\n                <ul>\n                  <li *ngFor=\"let role of currentUser.roles\">\n                    {{ role }}\n                  </li>\n                </ul>\n              </div>\n              \n              <ng-template #loggedOut>\n                Please login.\n              </ng-template>\n            \n\n           \n\n\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/SSN/supervisor/sup-home/sup-home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/SSN/supervisor/sup-home/sup-home.component.ts ***!
  \***************************************************************/
/*! exports provided: SupHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupHomeComponent", function() { return SupHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/DriverService */ "./src/app/services/DriverService.ts");
/* harmony import */ var src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage */ "./src/app/services/tokenstorage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SupHomeComponent = /** @class */ (function () {
    function SupHomeComponent(driverService, router, token) {
        this.driverService = driverService;
        this.router = router;
        this.token = token;
    }
    SupHomeComponent.prototype.reloadData = function () {
        this.currentUser = this.token.getUser();
    };
    SupHomeComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    SupHomeComponent.prototype.deleteDriver = function (id) {
        var _this = this;
        this.driverService.deleteDriver(id)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    SupHomeComponent.prototype.approvelDetails = function (useremail) {
        this.router.navigate(['supRequest', useremail]);
    };
    SupHomeComponent.prototype.updateDetails = function (id) {
        this.router.navigate(['updateDetail', id]);
    };
    //pcmc
    SupHomeComponent.prototype.approvelDetailspcmc = function (useremail) {
        this.router.navigate(['supRequestpcmc', useremail]);
    };
    SupHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sup-home',
            template: __webpack_require__(/*! ./sup-home.component.html */ "./src/app/SSN/supervisor/sup-home/sup-home.component.html"),
            styles: [__webpack_require__(/*! ./sup-home.component.css */ "./src/app/SSN/supervisor/sup-home/sup-home.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_DriverService__WEBPACK_IMPORTED_MODULE_2__["DriverService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"]])
    ], SupHomeComponent);
    return SupHomeComponent;
}());



/***/ }),

/***/ "./src/app/User/user-mst-list/user-mst-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/User/user-mst-list/user-mst-list.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/User/user-mst-list/user-mst-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/User/user-mst-list/user-mst-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>User List</h2>\n</div>\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/createUser\" class=\"dropdown\"> Create User's </button></li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Firstname</th>\n          <th>Lastname</th>\n          <th>Email</th>\n          <th>mobileno</th>\n          <th>password</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let userMst of userMsts | async\">\n          <td>{{userMst.userfirstname}}</td>\n          <td>{{userMst.userlastname}}</td>\n          <td>{{userMst.emuseremailail}}</td>\n          <td>{{userMst.mobileno}}</td>\n          <td>{{userMst.userpassword}}</td>\n          <td><button (click)=\"deleteDriver(userMst.userid)\" class=\"a1\">Delete</button>\n              <button (click)=\"userDetails(userMst.userid)\" class=\"b1\">Details</button>\n              <button (click)=\"updateuserDetails(userMst.userid)\" class=\"c1\">Update</button>\n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/User/user-mst-list/user-mst-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/User/user-mst-list/user-mst-list.component.ts ***!
  \***************************************************************/
/*! exports provided: UserMstListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMstListComponent", function() { return UserMstListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_userMst_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/userMst.service */ "./src/app/services/userMst.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMstListComponent = /** @class */ (function () {
    function UserMstListComponent(userMstService, router) {
        this.userMstService = userMstService;
        this.router = router;
    }
    UserMstListComponent.prototype.reloadData = function () {
        this.userMsts = this.userMstService.getUserList();
    };
    UserMstListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    UserMstListComponent.prototype.deleteUserMst = function (userid) {
        var _this = this;
        this.userMstService.deleteUser(userid)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    UserMstListComponent.prototype.userDetails = function (userid) {
        this.router.navigate(['details', userid]);
    };
    UserMstListComponent.prototype.updateuserDetails = function (userid) {
        this.router.navigate(['updateDetail', userid]);
    };
    UserMstListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-mst-list',
            template: __webpack_require__(/*! ./user-mst-list.component.html */ "./src/app/User/user-mst-list/user-mst-list.component.html"),
            styles: [__webpack_require__(/*! ./user-mst-list.component.css */ "./src/app/User/user-mst-list/user-mst-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_userMst_service__WEBPACK_IMPORTED_MODULE_2__["UserMstService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserMstListComponent);
    return UserMstListComponent;
}());



/***/ }),

/***/ "./src/app/User/users/users.component.css":
/*!************************************************!*\
  !*** ./src/app/User/users/users.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\r\n\r\n    background-color: powderblue;\r\n}"

/***/ }),

/***/ "./src/app/User/users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/User/users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header><h3>Creata Users</h3></header>\n\n\n<body>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n\n  <form (ngSubmit)=\"registerUserMst()\">\n\n    \n    <div class=\"form-group \">\n      <label for=\"name\">First Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"userfirstname\" required [(ngModel)]=\"userMst.userfirstname\" name=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">Last Name</label>\n      <input type=\"text\" class=\"form-control\" id=\"userlastname\" required [(ngModel)]=\"userMst.userlastname\" name=\"lastName\">\n    </div>\n\n\n\n    <div class=\"form-group\" >\n      <label for=\"name\">Email</label>\n      <input type=\"text\" class=\"form-control\"  id=\"useremail\" required [(ngModel)]=\"userMst.useremail\" name=\"useremail\">\n    </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"name\">password</label>\n      <input type=\"text\" class=\"form-control\" id=\"userpassword\" required [(ngModel)]=\"userMst.userpassword\" name=\"userpassword\">\n    </div>\n\n    \n\n    <div class=\"form-group\">\n      <label for=\"usergroupid\" class=\"a1\">subcatid</label>\n      <div class=\"col-sm-25\">\n              <select class=\"form-control\" id=\"usergroupid\"  required [(ngModel)]=\"userMst.usergroupid\" name=\"usergroupid\">\n                <option value=\"\">select group</option>\n                <option value=\"22\">ssn-usergroup</option>\n                <option value=\"23\">pcmc-usergroup</option>\n                <option value=\"00\">other's</option>\n              </select>\n            \n    </div>\n   </div>\n\n\n    <div class=\"form-group\">\n      <label for=\"name\">contact</label>\n      <input type=\"text\" class=\"form-control\" id=\"mobileno\" required [(ngModel)]=\"userMst.mobileno\" name=\"mobileno\">\n    </div>\n\n  \n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n</div>\n</nav>\n\n<div [hidden]=\"!submitted\">\n  <!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n </body>"

/***/ }),

/***/ "./src/app/User/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/User/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UserMstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMstComponent", function() { return UserMstComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_model_userMst__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/model.userMst */ "./src/app/model/model.userMst.ts");
/* harmony import */ var src_app_services_userMst_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/userMst.service */ "./src/app/services/userMst.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserMstComponent = /** @class */ (function () {
    function UserMstComponent(mstService, router) {
        this.mstService = mstService;
        this.router = router;
        this.userMst = new src_app_model_model_userMst__WEBPACK_IMPORTED_MODULE_2__["UserMst"]();
    }
    UserMstComponent.prototype.ngOnInit = function () {
    };
    UserMstComponent.prototype.registerUserMst = function () {
        var _this = this;
        this.mstService.createUserMst(this.userMst).subscribe(function (data) {
            _this.router.navigate(['users']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    UserMstComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/User/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.css */ "./src/app/User/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_userMst_service__WEBPACK_IMPORTED_MODULE_3__["UserMstService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserMstComponent);
    return UserMstComponent;
}());



/***/ }),

/***/ "./src/app/UserGroup/usergroup-list/usergroup-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/UserGroup/usergroup-list/usergroup-list.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/UserGroup/usergroup-list/usergroup-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/UserGroup/usergroup-list/usergroup-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>User List</h2>\n</div>\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email:-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/addUsergroup\" class=\"dropdown\"> Create UserGroup's </button></li>\n    </ul>\n  </div>\n</nav>\n\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>id</th>\n          <th>userGroupName</th>\n          <th>userGroupDesc</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let userGroup of userGroups | async\">\n          <td>{{userGroup.id}}</td>\n          <td>{{userGroup.userGroupName}}</td>\n          <td>{{userGroup.userGroupDesc}}</td>\n          <td><button (click)=\"deletegroupMst(userGroup.id)\" class=\"a1\">Delete</button>\n              <button (click)=\"groupDetails(userGroup.id)\" class=\"b1\">Details</button>\n              <button (click)=\"updategroupDetails(userGroup.id)\" class=\"c1\">Update</button>\n              \n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/UserGroup/usergroup-list/usergroup-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/UserGroup/usergroup-list/usergroup-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: UsergroupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsergroupListComponent", function() { return UsergroupListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_UserGroupService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/UserGroupService */ "./src/app/services/UserGroupService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsergroupListComponent = /** @class */ (function () {
    function UsergroupListComponent(groupService, router) {
        this.groupService = groupService;
        this.router = router;
    }
    UsergroupListComponent.prototype.reloadData = function () {
        this.userGroups = this.groupService.getGroupList();
    };
    UsergroupListComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    UsergroupListComponent.prototype.deletegroupMst = function (id) {
        var _this = this;
        this.groupService.deleteGroup(id)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    UsergroupListComponent.prototype.groupDetails = function (id) {
        this.router.navigate(['details', id]);
    };
    UsergroupListComponent.prototype.updategroupDetails = function (id) {
        this.router.navigate(['updateDetail', id]);
    };
    UsergroupListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usergroup-list',
            template: __webpack_require__(/*! ./usergroup-list.component.html */ "./src/app/UserGroup/usergroup-list/usergroup-list.component.html"),
            styles: [__webpack_require__(/*! ./usergroup-list.component.css */ "./src/app/UserGroup/usergroup-list/usergroup-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_UserGroupService__WEBPACK_IMPORTED_MODULE_2__["UserGroupService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UsergroupListComponent);
    return UsergroupListComponent;
}());



/***/ }),

/***/ "./src/app/UserGroup/usergroup/usergroup.component.css":
/*!*************************************************************!*\
  !*** ./src/app/UserGroup/usergroup/usergroup.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".col-6{\r\n    color: slategray;\r\n  \r\n   \r\n}"

/***/ }),

/***/ "./src/app/UserGroup/usergroup/usergroup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/UserGroup/usergroup/usergroup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n\n\n\n\n\n<app-header></app-header>\n<header><h3>Add UserGroup</h3></header>\n\n\n<body>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n\n  <form (ngSubmit)=\"registerGroup()\">\n\n    \n    <div class=\"form-group \">\n      <label for=\"name\">userGroupName</label>\n      <input type=\"text\" class=\"form-control\" id=\"userGroupName\" required [(ngModel)]=\"group.userGroupName\" name=\"userGroupName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">userGroupDesc</label>\n      <input type=\"text\" class=\"form-control\" id=\"userGroupDesc\" required [(ngModel)]=\"group.userGroupDesc\" name=\"userGroupDesc\">\n    </div>\n\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n</div>\n</nav>\n\n<div [hidden]=\"!submitted\">\n  <!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n\n </body>"

/***/ }),

/***/ "./src/app/UserGroup/usergroup/usergroup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/UserGroup/usergroup/usergroup.component.ts ***!
  \************************************************************/
/*! exports provided: UsergroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsergroupComponent", function() { return UsergroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_model_usergroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/model.usergroup */ "./src/app/model/model.usergroup.ts");
/* harmony import */ var src_app_services_UserGroupService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/UserGroupService */ "./src/app/services/UserGroupService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsergroupComponent = /** @class */ (function () {
    function UsergroupComponent(userGroupService, router) {
        this.userGroupService = userGroupService;
        this.router = router;
        this.group = new src_app_model_model_usergroup__WEBPACK_IMPORTED_MODULE_2__["UserGroup"]();
    }
    UsergroupComponent.prototype.ngOnInit = function () {
    };
    UsergroupComponent.prototype.registerGroup = function () {
        var _this = this;
        this.userGroupService.createUserGroup(this.group).subscribe(function (data) {
            _this.router.navigate(['D-List']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    UsergroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usergroup',
            template: __webpack_require__(/*! ./usergroup.component.html */ "./src/app/UserGroup/usergroup/usergroup.component.html"),
            styles: [__webpack_require__(/*! ./usergroup.component.css */ "./src/app/UserGroup/usergroup/usergroup.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_UserGroupService__WEBPACK_IMPORTED_MODULE_3__["UserGroupService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UsergroupComponent);
    return UsergroupComponent;
}());



/***/ }),

/***/ "./src/app/VEHICLE/vehicle/vehicle.component.css":
/*!*******************************************************!*\
  !*** ./src/app/VEHICLE/vehicle/vehicle.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\nbody, html {\r\n      height: 100%;\r\n      background-repeat: no-repeat;\r\n      background-image: linear-gradient(rgb(196, 1, 255), rgb(252, 11, 31));\r\n    }\r\n.card-container.card {\r\n      max-width: 350px;\r\n      padding: 40px 40px;\r\n    }\r\nheader{\r\n      color: mediumseagreen;\r\n    }\r\n.btn {\r\n      font-weight: 700;\r\n      height: 36px;\r\n      -moz-user-select: none;\r\n      -webkit-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n      cursor: default;\r\n    }\r\n.card {\r\n      background-color: rgb(131, 40, 104);\r\n      /* just in case there no content*/\r\n      padding: 20px 25px 30px;\r\n      margin: 0 auto 25px;\r\n      margin-top: 50px;\r\n      /* shadows and rounded borders */\r\n      border-radius: 2px;\r\n      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n    }\r\n.profile-img-card {\r\n      width: 96px;\r\n      height: 96px;\r\n      margin: 0 auto 10px;\r\n      display: block;\r\n      border-radius: 50%;\r\n    }\r\n/*\r\n     * Form styles\r\n     */\r\n.profile-name-card {\r\n      font-size: 16px;\r\n      font-weight: bold;\r\n      text-align: center;\r\n      margin: 10px 0 0;\r\n      min-height: 1em;\r\n    }\r\n.reauth-email {\r\n      display: block;\r\n      color: #404040;\r\n      line-height: 2;\r\n      margin-bottom: 10px;\r\n      font-size: 14px;\r\n      text-align: center;\r\n      overflow: hidden;\r\n      text-overflow: ellipsis;\r\n      white-space: nowrap;\r\n      box-sizing: border-box;\r\n    }\r\n.form-signin #inputEmail,\r\n    .form-signin #inputPassword {\r\n      direction: ltr;\r\n      height: 44px;\r\n      font-size: 16px;\r\n    }\r\n.form-signin input[type=email],\r\n    .form-signin input[type=password],\r\n    .form-signin input[type=text],\r\n    .form-signin button {\r\n      width: 100%;\r\n      display: block;\r\n      margin-bottom: 10px;\r\n      z-index: 1;\r\n      position: relative;\r\n      box-sizing: border-box;\r\n    }\r\n.form-signin .form-control:focus {\r\n      border-color: rgb(104, 145, 162);\r\n      outline: 0;\r\n      box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n    }\r\n.btn.btn-signin,.btn-cancel {\r\n      /*background-color: #4d90fe; */\r\n      background-color: rgb(104, 145, 162);\r\n      /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n      padding: 0px;\r\n      font-weight: 700;\r\n      font-size: 14px;\r\n      height: 36px;\r\n      border-radius: 3px;\r\n      border: none;\r\n      transition: all 0.218s;\r\n    }\r\n.btn.btn-cancel {\r\n      background-color: rgb(24, 190, 255);\r\n    }\r\n.btn.btn-signin:hover,\r\n    .btn.btn-signin:active,\r\n    .btn.btn-signin:focus {\r\n      background-color: rgb(12, 97, 33);\r\n    }\r\n.forgot-password {\r\n      color: rgb(104, 145, 162);\r\n    }\r\n.forgot-password:hover,\r\n    .forgot-password:active,\r\n    .forgot-password:focus{\r\n      color: rgb(12, 97, 33);\r\n    }\r\n    "

/***/ }),

/***/ "./src/app/VEHICLE/vehicle/vehicle.component.html":
/*!********************************************************!*\
  !*** ./src/app/VEHICLE/vehicle/vehicle.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header><h3>Add Vehicle</h3></header>\n\n\n<body>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n\n  <form (ngSubmit)=\"registerVehicle()\">\n\n    \n    <div class=\"form-group \">\n      <label for=\"name\">vehicletypeid</label>\n      <input type=\"text\" class=\"form-control\" id=\"vehicletypeid\" required [(ngModel)]=\"vehicle.vehicletypeid\" name=\"vehicletypeid\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">vehicleno</label>\n      <input type=\"text\" class=\"form-control\" id=\"vehicleno\" required [(ngModel)]=\"vehicle.vehicleno\" name=\"vehicleno\">\n    </div>\n\n\n\n    <div class=\"form-group\">\n      <label for=\"name\">vehiclemodel</label>\n      <input type=\"text\" class=\"form-control\" id=\"vehiclemodel\" required [(ngModel)]=\"vehicle.vehiclemodel\" name=\"vehiclemodel\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">vehicledesc</label>\n      <input type=\"text\" class=\"form-control\" id=\"vehicledesc\" required [(ngModel)]=\"vehicle.vehicledesc\" name=\"vehicledesc\">\n    </div>\n   \n\n   \n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n</div>\n</nav>\n\n<div [hidden]=\"!submitted\">\n  <!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n </body>"

/***/ }),

/***/ "./src/app/VEHICLE/vehicle/vehicle.component.ts":
/*!******************************************************!*\
  !*** ./src/app/VEHICLE/vehicle/vehicle.component.ts ***!
  \******************************************************/
/*! exports provided: VehicleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleComponent", function() { return VehicleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_model_model_vehicle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/model/model.vehicle */ "./src/app/model/model.vehicle.ts");
/* harmony import */ var src_app_services_VehicleService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/VehicleService */ "./src/app/services/VehicleService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VehicleComponent = /** @class */ (function () {
    function VehicleComponent(vehicleService, router) {
        this.vehicleService = vehicleService;
        this.router = router;
        this.vehicle = new src_app_model_model_vehicle__WEBPACK_IMPORTED_MODULE_2__["Vehicle"]();
    }
    VehicleComponent.prototype.ngOnInit = function () {
    };
    VehicleComponent.prototype.registerVehicle = function () {
        var _this = this;
        this.vehicleService.createVehicle(this.vehicle).subscribe(function (data) {
            _this.router.navigate(['D-List']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    VehicleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehicle',
            template: __webpack_require__(/*! ./vehicle.component.html */ "./src/app/VEHICLE/vehicle/vehicle.component.html"),
            styles: [__webpack_require__(/*! ./vehicle.component.css */ "./src/app/VEHICLE/vehicle/vehicle.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_VehicleService__WEBPACK_IMPORTED_MODULE_3__["VehicleService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VehicleComponent);
    return VehicleComponent;
}());



/***/ }),

/***/ "./src/app/VEHICLE/vehiclelist/vehiclelist.component.css":
/*!***************************************************************!*\
  !*** ./src/app/VEHICLE/vehiclelist/vehiclelist.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/VEHICLE/vehiclelist/vehiclelist.component.html":
/*!****************************************************************!*\
  !*** ./src/app/VEHICLE/vehiclelist/vehiclelist.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>vehicle List</h2>\n</div>\n\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email : -</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/addVehicle\" class=\"dropdown\"> Add Vehicle's </button></li>\n    </ul>\n  </div>\n</nav>\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>vehicleno </th>\n          <th>vehicletypeid</th>\n          <th>vehiclemodel</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let vehicle of vehicles | async\">\n          <td>{{vehicle.vehicletypeid}}</td>\n          <td>{{vehicle.vehicleno}}</td>\n          <td>{{vehicle.vehiclemodel}}</td>\n          <td><button (click)=\"vihcileDetails(vehicle.vehicleid)\" class=\"a1\">Edit</button>\n              <button (click)=\"deleteDriver(vehicle.vehicleid)\" class=\"a1\">Delete</button>\n              <button (click)=\"updateme(vehicle.vehicleid)\" class=\"a1\">Assign</button>\n              <button>  <a  routerLink=\"/assing\" class=\"c1\">assignpage</a> </button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/VEHICLE/vehiclelist/vehiclelist.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/VEHICLE/vehiclelist/vehiclelist.component.ts ***!
  \**************************************************************/
/*! exports provided: VehiclelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehiclelistComponent", function() { return VehiclelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_VehicleService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/VehicleService */ "./src/app/services/VehicleService.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehiclelistComponent = /** @class */ (function () {
    function VehiclelistComponent(vehicleService, router) {
        this.vehicleService = vehicleService;
        this.router = router;
    }
    VehiclelistComponent.prototype.reloadData = function () {
        this.vehicles = this.vehicleService.getVehicleList();
    };
    VehiclelistComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    VehiclelistComponent.prototype.deleteDriver = function (vehicleid) {
        var _this = this;
        this.vehicleService.deleteVehicle(vehicleid)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    VehiclelistComponent.prototype.vihcileDetails = function (vehicleid) {
        this.router.navigate(['details', vehicleid]);
    };
    VehiclelistComponent.prototype.updateme = function (vehicleid) {
        this.router.navigate(['driverassign', vehicleid]);
    };
    VehiclelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-vehiclelist',
            template: __webpack_require__(/*! ./vehiclelist.component.html */ "./src/app/VEHICLE/vehiclelist/vehiclelist.component.html"),
            styles: [__webpack_require__(/*! ./vehiclelist.component.css */ "./src/app/VEHICLE/vehiclelist/vehiclelist.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_VehicleService__WEBPACK_IMPORTED_MODULE_2__["VehicleService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VehiclelistComponent);
    return VehiclelistComponent;
}());



/***/ }),

/***/ "./src/app/Zone/createzone/createzone.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Zone/createzone/createzone.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Zone/createzone/createzone.component.html":
/*!***********************************************************!*\
  !*** ./src/app/Zone/createzone/createzone.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<header><h3>Add Driver</h3></header>\n\n\n<body>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n\n<div [hidden]=\"submitted\" style=\"width: 400px;\">\n\n  <form (ngSubmit)=\"registerZone()\">\n\n    \n    <div class=\"form-group \">\n      <label for=\"name\">zoneNo</label>\n      <input type=\"text\" class=\"form-control\" id=\"zoneNo\" required [(ngModel)]=\"zone.zoneNo\" name=\"zoneNo\">\n    </div>\n\n    <div class=\"form-group\">\n      <label for=\"name\">zonename</label>\n      <input type=\"text\" class=\"form-control\" id=\"zonename\" required [(ngModel)]=\"zone.zonename\" name=\"zonename\">\n    </div>\n\n\n\n    <button type=\"submit\" class=\"btn btn-success\">Submit</button>\n\n  </form>\n\n</div>\n</div>\n</nav>\n\n<div [hidden]=\"!submitted\">\n  <!-- <button class=\"btn btn-success\" (click)=\"newEmployee()\">Add</button> -->\n</div>\n\n </body>"

/***/ }),

/***/ "./src/app/Zone/createzone/createzone.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Zone/createzone/createzone.component.ts ***!
  \*********************************************************/
/*! exports provided: CreatezoneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatezoneComponent", function() { return CreatezoneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/zone.service */ "./src/app/services/zone.service.ts");
/* harmony import */ var src_app_model_model_zone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/model/model.zone */ "./src/app/model/model.zone.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatezoneComponent = /** @class */ (function () {
    function CreatezoneComponent(zoneService, router) {
        this.zoneService = zoneService;
        this.router = router;
        this.zone = new src_app_model_model_zone__WEBPACK_IMPORTED_MODULE_3__["Zone"]();
    }
    CreatezoneComponent.prototype.ngOnInit = function () {
    };
    CreatezoneComponent.prototype.registerZone = function () {
        var _this = this;
        this.zoneService.createZone(this.zone).subscribe(function (data) {
            _this.router.navigate(['zonelist']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    CreatezoneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-createzone',
            template: __webpack_require__(/*! ./createzone.component.html */ "./src/app/Zone/createzone/createzone.component.html"),
            styles: [__webpack_require__(/*! ./createzone.component.css */ "./src/app/Zone/createzone/createzone.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CreatezoneComponent);
    return CreatezoneComponent;
}());



/***/ }),

/***/ "./src/app/Zone/zonelist/zonelist.component.css":
/*!******************************************************!*\
  !*** ./src/app/Zone/zonelist/zonelist.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/Zone/zonelist/zonelist.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Zone/zonelist/zonelist.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-header></app-header>\n<header>\n  <div class=\"panel-heading\">\n   <h2>Zone List</h2>\n</div>\n\n<nav  class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n\n    <ul class=\"nav navbar-nav\">\n      <li class=\"badge badge-info\" ><a>Email :-</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li><button   routerLink=\"/createZone\" class=\"dropdown\"> create Zone's </button></li>\n    </ul>\n  </div>\n</nav>\n<div>\n    <!-- SEARCH FORM -->\n    <form class=\"form-inline ml-3\">\n      <div class=\"input-group input-group-sm\">\n        <input class=\"form-control form-control-navbar\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <div class=\"input-group-append\">\n          <button class=\"btn btn-navbar\" type=\"submit\">\n            <i class=\"fas fa-search\"></i>\n          </button>\n        </div>\n      </div>\n    </form>\n\n    \n\n</div>\n</header>\n\n<body>\n<div class=\"panel panel-primary\">\n  \n  <div class=\"panel-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>zone id </th>\n          <th>zone No</th>\n          <th>zone Name</th>\n          <th>Actions</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let zone of zones | async\">\n          <td>{{zone.id}}</td>\n          <td>{{zone.zoneNo}}</td>\n          <td>{{zone.zonename}}</td>\n          <td><button (click)=\"updatezone(zone.id)\" class=\"a1\">Edit</button>\n              <button (click)=\"deleteZone(zone.id)\" class=\"a1\">Delete</button>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n</body>"

/***/ }),

/***/ "./src/app/Zone/zonelist/zonelist.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Zone/zonelist/zonelist.component.ts ***!
  \*****************************************************/
/*! exports provided: ZonelistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZonelistComponent", function() { return ZonelistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/zone.service */ "./src/app/services/zone.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZonelistComponent = /** @class */ (function () {
    function ZonelistComponent(zoneService, router) {
        this.zoneService = zoneService;
        this.router = router;
    }
    ZonelistComponent.prototype.reloadData = function () {
        this.zones = this.zoneService.getZoneList();
    };
    ZonelistComponent.prototype.ngOnInit = function () {
        this.reloadData();
    };
    ZonelistComponent.prototype.deleteZone = function (id) {
        var _this = this;
        this.zoneService.deleteZo(id)
            .subscribe(function (data) {
            console.log(data);
            _this.reloadData();
        }, function (error) { return console.log(error); });
    };
    ZonelistComponent.prototype.zoneDetails = function (id) {
        this.router.navigate(['details', id]);
    };
    ZonelistComponent.prototype.updatezone = function (id) {
        this.router.navigate(['driverassign', id]);
    };
    ZonelistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zonelist',
            template: __webpack_require__(/*! ./zonelist.component.html */ "./src/app/Zone/zonelist/zonelist.component.html"),
            styles: [__webpack_require__(/*! ./zonelist.component.css */ "./src/app/Zone/zonelist/zonelist.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_zone_service__WEBPACK_IMPORTED_MODULE_2__["ZoneService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ZonelistComponent);
    return ZonelistComponent;
}());



/***/ }),

/***/ "./src/app/add-details/add-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-details/add-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n    height: 100%;\r\n    background-repeat: no-repeat;\r\n    background-image: linear-gradient(rgb(196, 1, 255), rgb(252, 11, 31));\r\n  }\r\n.card-container.card {\r\n    max-width: 350px;\r\n    padding: 40px 40px;\r\n  }\r\n.btn {\r\n    font-weight: 700;\r\n    height: 36px;\r\n    -moz-user-select: none;\r\n    -webkit-user-select: none;\r\n    -ms-user-select: none;\r\n        user-select: none;\r\n    cursor: default;\r\n  }\r\n/*\r\n   * Card component\r\n   */\r\n.card {\r\n    background-color: #F7F7F7;\r\n    /* just in case there no content*/\r\n    padding: 20px 25px 30px;\r\n    margin: 0 auto 25px;\r\n    margin-top: 50px;\r\n    /* shadows and rounded borders */\r\n    border-radius: 2px;\r\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  }\r\n.profile-img-card {\r\n    width: 96px;\r\n    height: 96px;\r\n    margin: 0 auto 10px;\r\n    display: block;\r\n    border-radius: 50%;\r\n  }\r\n/*\r\n   * Form styles\r\n   */\r\n.profile-name-card {\r\n    font-size: 16px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0 0;\r\n    min-height: 1em;\r\n  }\r\n.reauth-email {\r\n    display: block;\r\n    color: #404040;\r\n    line-height: 2;\r\n    margin-bottom: 10px;\r\n    font-size: 14px;\r\n    text-align: center;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin #inputEmail,\r\n  .form-signin #inputPassword {\r\n    direction: ltr;\r\n    height: 44px;\r\n    font-size: 16px;\r\n  }\r\n.form-signin input[type=email],\r\n  .form-signin input[type=password],\r\n  .form-signin input[type=text],\r\n  .form-signin button {\r\n    width: 100%;\r\n    display: block;\r\n    margin-bottom: 10px;\r\n    z-index: 1;\r\n    position: relative;\r\n    box-sizing: border-box;\r\n  }\r\n.form-signin .form-control:focus {\r\n    border-color: rgb(104, 145, 162);\r\n    outline: 0;\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n  }\r\n.btn.btn-signin,.btn-cancel {\r\n    /*background-color: #4d90fe; */\r\n    background-color: rgb(104, 145, 162);\r\n    /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n    padding: 0px;\r\n    font-weight: 700;\r\n    font-size: 14px;\r\n    height: 36px;\r\n    border-radius: 3px;\r\n    border: none;\r\n    transition: all 0.218s;\r\n  }\r\n.btn.btn-cancel {\r\n    background-color: rgb(255, 34, 24);\r\n  }\r\n.btn.btn-signin:hover,\r\n  .btn.btn-signin:active,\r\n  .btn.btn-signin:focus {\r\n    background-color: rgb(12, 97, 33);\r\n  }\r\n.forgot-password {\r\n    color: rgb(104, 145, 162);\r\n  }\r\n.forgot-password:hover,\r\n  .forgot-password:active,\r\n  .forgot-password:focus{\r\n    color: rgb(12, 97, 33);\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/add-details/add-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-details/add-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Contact Number</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The 10 digit is required</div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Full Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Age</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Date of Birth</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Current Loc</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n     \n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Add Details</button>\n      \n    </form><!-- /form -->\n\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/add-details/add-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-details/add-details.component.ts ***!
  \******************************************************/
/*! exports provided: AddDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDetailsComponent", function() { return AddDetailsComponent; });
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

var AddDetailsComponent = /** @class */ (function () {
    function AddDetailsComponent() {
    }
    AddDetailsComponent.prototype.ngOnInit = function () {
    };
    AddDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-details',
            template: __webpack_require__(/*! ./add-details.component.html */ "./src/app/add-details/add-details.component.html"),
            styles: [__webpack_require__(/*! ./add-details.component.css */ "./src/app/add-details/add-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddDetailsComponent);
    return AddDetailsComponent;
}());



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

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n\n\n<ul class=\"navbar-nav ml-auto\" *ngIf=\"isLoggedIn\">\n    <li class=\"nav-item\">\n      <a href=\"/profile\" class=\"nav-link\" routerLink=\"profile\">{{ username }}</a>\n    </li>\n    <li class=\"nav-item\">\n      <a href class=\"nav-link\" (click)=\"logout()\">LogOut</a>\n    </li>\n  </ul>"

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
/* harmony import */ var _services_tokenstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/tokenstorage */ "./src/app/services/tokenstorage.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(tokenStorageService) {
        this.tokenStorageService = tokenStorageService;
        this.title = 'spring boot and angular 6 secure authentication';
        this.isLoggedIn = false;
        this.showAdminBoard = false;
        this.showModeratorBoard = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = !!this.tokenStorageService.getToken();
        if (this.isLoggedIn) {
            var user = this.tokenStorageService.getUser();
            this.roles = user.roles;
            this.showAdminBoard = this.roles.includes('ROLE_USER');
            this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');
            this.username = user.username;
        }
    };
    AppComponent.prototype.logout = function () {
        this.tokenStorageService.signOut();
        this.router.navigate(['/signiii']);
        window.location.reload();
    };
    AppComponent.API_URL = 'http://localhost:3000';
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tokenstorage__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _urlPermission_url_permissions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./urlPermission/url.permissions */ "./src/app/urlPermission/url.permissions.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _add_details_add_details_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-details/add-details.component */ "./src/app/add-details/add-details.component.ts");
/* harmony import */ var _view_deatils_view_deatils_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./view-deatils/view-deatils.component */ "./src/app/view-deatils/view-deatils.component.ts");
/* harmony import */ var _Driver_driver_driver_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Driver/driver/driver.component */ "./src/app/Driver/driver/driver.component.ts");
/* harmony import */ var _VEHICLE_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./VEHICLE/vehicle/vehicle.component */ "./src/app/VEHICLE/vehicle/vehicle.component.ts");
/* harmony import */ var _UserGroup_usergroup_usergroup_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./UserGroup/usergroup/usergroup.component */ "./src/app/UserGroup/usergroup/usergroup.component.ts");
/* harmony import */ var _Driver_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Driver/driver-list/driver-list.component */ "./src/app/Driver/driver-list/driver-list.component.ts");
/* harmony import */ var _Driver_driver_update_driver_update_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Driver/driver-update/driver-update.component */ "./src/app/Driver/driver-update/driver-update.component.ts");
/* harmony import */ var _Foggot_Password_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Foggot-Password/forgot/forgot.component */ "./src/app/Foggot-Password/forgot/forgot.component.ts");
/* harmony import */ var _Foggot_Password_passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Foggot-Password/passwordchange/passwordchange.component */ "./src/app/Foggot-Password/passwordchange/passwordchange.component.ts");
/* harmony import */ var _VEHICLE_vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./VEHICLE/vehiclelist/vehiclelist.component */ "./src/app/VEHICLE/vehiclelist/vehiclelist.component.ts");
/* harmony import */ var _Driver_driverassign_driverassign_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Driver/driverassign/driverassign.component */ "./src/app/Driver/driverassign/driverassign.component.ts");
/* harmony import */ var _Request_request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Request/request/request-list/request-list.component */ "./src/app/Request/request/request-list/request-list.component.ts");
/* harmony import */ var _Request_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Request/create-request/create-request.component */ "./src/app/Request/create-request/create-request.component.ts");
/* harmony import */ var _Zone_zonelist_zonelist_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Zone/zonelist/zonelist.component */ "./src/app/Zone/zonelist/zonelist.component.ts");
/* harmony import */ var _User_users_users_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./User/users/users.component */ "./src/app/User/users/users.component.ts");
/* harmony import */ var _User_user_mst_list_user_mst_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./User/user-mst-list/user-mst-list.component */ "./src/app/User/user-mst-list/user-mst-list.component.ts");
/* harmony import */ var _UserGroup_usergroup_list_usergroup_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./UserGroup/usergroup-list/usergroup-list.component */ "./src/app/UserGroup/usergroup-list/usergroup-list.component.ts");
/* harmony import */ var _Zone_createzone_createzone_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Zone/createzone/createzone.component */ "./src/app/Zone/createzone/createzone.component.ts");
/* harmony import */ var _Customer_customer_customer_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Customer/customer/customer.component */ "./src/app/Customer/customer/customer.component.ts");
/* harmony import */ var _Customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./Customer/customerlist/customerlist.component */ "./src/app/Customer/customerlist/customerlist.component.ts");
/* harmony import */ var _LOGIN_signup_signup_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./LOGIN/signup/signup.component */ "./src/app/LOGIN/signup/signup.component.ts");
/* harmony import */ var _LOGIN_signin_signin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./LOGIN/signin/signin.component */ "./src/app/LOGIN/signin/signin.component.ts");
/* harmony import */ var _Assign_ASSIGNTOSSN_assign_req_to_superv_assign_req_to_superv_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component */ "./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.ts");
/* harmony import */ var _Assign_ASSIGNTOSSN_assign_sup_assign_sup_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./Assign/ASSIGNTOSSN/assign-sup/assign-sup.component */ "./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.ts");
/* harmony import */ var _SSN_supervisor_sup_home_sup_home_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./SSN/supervisor/sup-home/sup-home.component */ "./src/app/SSN/supervisor/sup-home/sup-home.component.ts");
/* harmony import */ var _SSN_supervisor_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./SSN/supervisor/request-list/request-list.component */ "./src/app/SSN/supervisor/request-list/request-list.component.ts");
/* harmony import */ var _SSN_supervisor_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./SSN/supervisor/edit-list/edit-list.component */ "./src/app/SSN/supervisor/edit-list/edit-list.component.ts");
/* harmony import */ var _Assign_ASSIGNTOPCMC_assign_to_pcmc_assign_to_pcmc_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component */ "./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.ts");
/* harmony import */ var _Assign_ASSIGNTOPCMC_assignreqtopcmcsuper_assignreqtopcmcsuper_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component */ "./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.ts");
/* harmony import */ var _PCMC_pcmc_pcmc_home_pcmc_home_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./PCMC/pcmc/pcmc-home/pcmc-home.component */ "./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.ts");
/* harmony import */ var _PCMC_pcmc_incoming_request_incoming_request_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./PCMC/pcmc/incoming-request/incoming-request.component */ "./src/app/PCMC/pcmc/incoming-request/incoming-request.component.ts");
/* harmony import */ var _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_request_to_vehcile_assign_request_to_vehcile_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.ts");
/* harmony import */ var _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.ts");
/* harmony import */ var _HEADER_header_header_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./HEADER/header/header.component */ "./src/app/HEADER/header/header.component.ts");
/* harmony import */ var _Driver_driver_details_driver_details_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./Driver/driver-details/driver-details.component */ "./src/app/Driver/driver-details/driver-details.component.ts");
/* harmony import */ var _services_DriverService__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./services/DriverService */ "./src/app/services/DriverService.ts");
/* harmony import */ var _services_VehicleService__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./services/VehicleService */ "./src/app/services/VehicleService.ts");
/* harmony import */ var _services_UserGroupService__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./services/UserGroupService */ "./src/app/services/UserGroupService.ts");
/* harmony import */ var _services_requestService__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./services/requestService */ "./src/app/services/requestService.ts");
/* harmony import */ var _services_forget_serveice__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./services/forget.serveice */ "./src/app/services/forget.serveice.ts");
/* harmony import */ var _services_userMst_service__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./services/userMst.service */ "./src/app/services/userMst.service.ts");
/* harmony import */ var _services_zone_service__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./services/zone.service */ "./src/app/services/zone.service.ts");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./services/customer.service */ "./src/app/services/customer.service.ts");
/* harmony import */ var _services_AuthService1__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./services/AuthService1 */ "./src/app/services/AuthService1.ts");
/* harmony import */ var _services_userserice__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./services/userserice */ "./src/app/services/userserice.ts");
/* harmony import */ var _services_approvelService__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./services/approvelService */ "./src/app/services/approvelService.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_14__["NotFoundComponent"],
                _add_details_add_details_component__WEBPACK_IMPORTED_MODULE_15__["AddDetailsComponent"],
                _view_deatils_view_deatils_component__WEBPACK_IMPORTED_MODULE_16__["ViewDeatilsComponent"],
                _HEADER_header_header_component__WEBPACK_IMPORTED_MODULE_48__["HeaderComponent"],
                _Driver_driver_driver_component__WEBPACK_IMPORTED_MODULE_17__["DriverComponent"],
                _VEHICLE_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_18__["VehicleComponent"],
                _User_users_users_component__WEBPACK_IMPORTED_MODULE_29__["UserMstComponent"],
                _UserGroup_usergroup_usergroup_component__WEBPACK_IMPORTED_MODULE_19__["UsergroupComponent"],
                _Driver_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_20__["DriverListComponent"],
                _Driver_driver_details_driver_details_component__WEBPACK_IMPORTED_MODULE_49__["DriverDetailsComponent"],
                _Driver_driver_update_driver_update_component__WEBPACK_IMPORTED_MODULE_21__["DriverUpdateComponent"],
                _Foggot_Password_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_22__["ForgotComponent"],
                _Foggot_Password_passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_23__["PasswordchangeComponent"],
                _Driver_driverassign_driverassign_component__WEBPACK_IMPORTED_MODULE_25__["DriverassignComponent"],
                _VEHICLE_vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_24__["VehiclelistComponent"],
                _Request_request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_26__["RequestListComponent"],
                _Request_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_27__["CreateRequestComponent"],
                _User_user_mst_list_user_mst_list_component__WEBPACK_IMPORTED_MODULE_30__["UserMstListComponent"],
                _UserGroup_usergroup_list_usergroup_list_component__WEBPACK_IMPORTED_MODULE_31__["UsergroupListComponent"],
                _Zone_createzone_createzone_component__WEBPACK_IMPORTED_MODULE_32__["CreatezoneComponent"],
                _Zone_zonelist_zonelist_component__WEBPACK_IMPORTED_MODULE_28__["ZonelistComponent"],
                _Customer_customer_customer_component__WEBPACK_IMPORTED_MODULE_33__["CustomerComponent"],
                _Customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_34__["CustomerlistComponent"],
                _LOGIN_signup_signup_component__WEBPACK_IMPORTED_MODULE_35__["SignupComponent"],
                _LOGIN_signin_signin_component__WEBPACK_IMPORTED_MODULE_36__["SigninComponent"],
                _Assign_ASSIGNTOSSN_assign_req_to_superv_assign_req_to_superv_component__WEBPACK_IMPORTED_MODULE_37__["AssignReqToSupervComponent"],
                _Assign_ASSIGNTOSSN_assign_sup_assign_sup_component__WEBPACK_IMPORTED_MODULE_38__["AssignSupComponent"],
                _SSN_supervisor_sup_home_sup_home_component__WEBPACK_IMPORTED_MODULE_39__["SupHomeComponent"],
                _SSN_supervisor_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_40__["RequestSupListComponent"],
                _SSN_supervisor_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_41__["EditListComponent"],
                _Assign_ASSIGNTOPCMC_assignreqtopcmcsuper_assignreqtopcmcsuper_component__WEBPACK_IMPORTED_MODULE_43__["AssignreqtopcmcsuperComponent"],
                _Assign_ASSIGNTOPCMC_assign_to_pcmc_assign_to_pcmc_component__WEBPACK_IMPORTED_MODULE_42__["AssignToPcmcComponent"],
                _PCMC_pcmc_pcmc_home_pcmc_home_component__WEBPACK_IMPORTED_MODULE_44__["PcmcHomeComponent"],
                _PCMC_pcmc_incoming_request_incoming_request_component__WEBPACK_IMPORTED_MODULE_45__["IncomingRequestComponent"],
                _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_request_to_vehcile_assign_request_to_vehcile_component__WEBPACK_IMPORTED_MODULE_46__["AssignRequestToVehcileComponent"],
                _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_component__WEBPACK_IMPORTED_MODULE_47__["AssignComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_11__["routing"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
                _services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"],
                _urlPermission_url_permissions__WEBPACK_IMPORTED_MODULE_12__["UrlPermission"],
                _services_DriverService__WEBPACK_IMPORTED_MODULE_50__["DriverService"],
                _services_VehicleService__WEBPACK_IMPORTED_MODULE_51__["VehicleService"],
                _services_UserGroupService__WEBPACK_IMPORTED_MODULE_52__["UserGroupService"],
                _services_requestService__WEBPACK_IMPORTED_MODULE_53__["RequestService"],
                _services_forget_serveice__WEBPACK_IMPORTED_MODULE_54__["ForgetService"],
                _services_userMst_service__WEBPACK_IMPORTED_MODULE_55__["UserMstService"],
                _services_zone_service__WEBPACK_IMPORTED_MODULE_56__["ZoneService"],
                _services_customer_service__WEBPACK_IMPORTED_MODULE_57__["CustomerService"],
                _services_AuthService1__WEBPACK_IMPORTED_MODULE_58__["AuthService1"],
                _services_userserice__WEBPACK_IMPORTED_MODULE_59__["UserService1"],
                _services_approvelService__WEBPACK_IMPORTED_MODULE_60__["ApprovelService"]
            ],
            // providers: [authInterceptorProviders],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _Driver_driver_driver_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Driver/driver/driver.component */ "./src/app/Driver/driver/driver.component.ts");
/* harmony import */ var _VEHICLE_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VEHICLE/vehicle/vehicle.component */ "./src/app/VEHICLE/vehicle/vehicle.component.ts");
/* harmony import */ var _UserGroup_usergroup_usergroup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./UserGroup/usergroup/usergroup.component */ "./src/app/UserGroup/usergroup/usergroup.component.ts");
/* harmony import */ var _Driver_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Driver/driver-list/driver-list.component */ "./src/app/Driver/driver-list/driver-list.component.ts");
/* harmony import */ var _view_deatils_view_deatils_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-deatils/view-deatils.component */ "./src/app/view-deatils/view-deatils.component.ts");
/* harmony import */ var _Driver_driver_update_driver_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Driver/driver-update/driver-update.component */ "./src/app/Driver/driver-update/driver-update.component.ts");
/* harmony import */ var _Foggot_Password_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Foggot-Password/forgot/forgot.component */ "./src/app/Foggot-Password/forgot/forgot.component.ts");
/* harmony import */ var _Foggot_Password_passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Foggot-Password/passwordchange/passwordchange.component */ "./src/app/Foggot-Password/passwordchange/passwordchange.component.ts");
/* harmony import */ var _VEHICLE_vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VEHICLE/vehiclelist/vehiclelist.component */ "./src/app/VEHICLE/vehiclelist/vehiclelist.component.ts");
/* harmony import */ var _Driver_driverassign_driverassign_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Driver/driverassign/driverassign.component */ "./src/app/Driver/driverassign/driverassign.component.ts");
/* harmony import */ var _Request_request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Request/request/request-list/request-list.component */ "./src/app/Request/request/request-list/request-list.component.ts");
/* harmony import */ var _Request_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Request/create-request/create-request.component */ "./src/app/Request/create-request/create-request.component.ts");
/* harmony import */ var _Zone_zonelist_zonelist_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Zone/zonelist/zonelist.component */ "./src/app/Zone/zonelist/zonelist.component.ts");
/* harmony import */ var _User_users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./User/users/users.component */ "./src/app/User/users/users.component.ts");
/* harmony import */ var _User_user_mst_list_user_mst_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./User/user-mst-list/user-mst-list.component */ "./src/app/User/user-mst-list/user-mst-list.component.ts");
/* harmony import */ var _UserGroup_usergroup_list_usergroup_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UserGroup/usergroup-list/usergroup-list.component */ "./src/app/UserGroup/usergroup-list/usergroup-list.component.ts");
/* harmony import */ var _Zone_createzone_createzone_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Zone/createzone/createzone.component */ "./src/app/Zone/createzone/createzone.component.ts");
/* harmony import */ var _Customer_customer_customer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Customer/customer/customer.component */ "./src/app/Customer/customer/customer.component.ts");
/* harmony import */ var _Customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Customer/customerlist/customerlist.component */ "./src/app/Customer/customerlist/customerlist.component.ts");
/* harmony import */ var _LOGIN_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./LOGIN/signup/signup.component */ "./src/app/LOGIN/signup/signup.component.ts");
/* harmony import */ var _LOGIN_signin_signin_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./LOGIN/signin/signin.component */ "./src/app/LOGIN/signin/signin.component.ts");
/* harmony import */ var _Assign_ASSIGNTOSSN_assign_req_to_superv_assign_req_to_superv_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component */ "./src/app/Assign/ASSIGNTOSSN/assign-req-to-superv/assign-req-to-superv.component.ts");
/* harmony import */ var _Assign_ASSIGNTOSSN_assign_sup_assign_sup_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Assign/ASSIGNTOSSN/assign-sup/assign-sup.component */ "./src/app/Assign/ASSIGNTOSSN/assign-sup/assign-sup.component.ts");
/* harmony import */ var _SSN_supervisor_sup_home_sup_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./SSN/supervisor/sup-home/sup-home.component */ "./src/app/SSN/supervisor/sup-home/sup-home.component.ts");
/* harmony import */ var _SSN_supervisor_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./SSN/supervisor/request-list/request-list.component */ "./src/app/SSN/supervisor/request-list/request-list.component.ts");
/* harmony import */ var _SSN_supervisor_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./SSN/supervisor/edit-list/edit-list.component */ "./src/app/SSN/supervisor/edit-list/edit-list.component.ts");
/* harmony import */ var _Assign_ASSIGNTOPCMC_assign_to_pcmc_assign_to_pcmc_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component */ "./src/app/Assign/ASSIGNTOPCMC/assign-to-pcmc/assign-to-pcmc.component.ts");
/* harmony import */ var _Assign_ASSIGNTOPCMC_assignreqtopcmcsuper_assignreqtopcmcsuper_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component */ "./src/app/Assign/ASSIGNTOPCMC/assignreqtopcmcsuper/assignreqtopcmcsuper.component.ts");
/* harmony import */ var _PCMC_pcmc_pcmc_home_pcmc_home_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./PCMC/pcmc/pcmc-home/pcmc-home.component */ "./src/app/PCMC/pcmc/pcmc-home/pcmc-home.component.ts");
/* harmony import */ var _PCMC_pcmc_incoming_request_incoming_request_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./PCMC/pcmc/incoming-request/incoming-request.component */ "./src/app/PCMC/pcmc/incoming-request/incoming-request.component.ts");
/* harmony import */ var _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_request_to_vehcile_assign_request_to_vehcile_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign-request-to-vehcile/assign-request-to-vehcile.component.ts");
/* harmony import */ var _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component */ "./src/app/Assign/ASSIGNTOVEHICLE/AssignVehcile/assign/assign.component.ts");






































var appRoutes = [
    { path: '', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_4__["LogoutComponent"] },
    { path: 'not-found', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"] },
    { path: 'addDriver', component: _Driver_driver_driver_component__WEBPACK_IMPORTED_MODULE_6__["DriverComponent"] },
    { path: 'addVehicle', component: _VEHICLE_vehicle_vehicle_component__WEBPACK_IMPORTED_MODULE_7__["VehicleComponent"] },
    { path: 'addUsergroup', component: _UserGroup_usergroup_usergroup_component__WEBPACK_IMPORTED_MODULE_8__["UsergroupComponent"] },
    { path: 'D-List', component: _Driver_driver_list_driver_list_component__WEBPACK_IMPORTED_MODULE_9__["DriverListComponent"] },
    { path: 'details/:id', component: _view_deatils_view_deatils_component__WEBPACK_IMPORTED_MODULE_10__["ViewDeatilsComponent"] },
    { path: 'updateDetail/:id', component: _Driver_driver_update_driver_update_component__WEBPACK_IMPORTED_MODULE_11__["DriverUpdateComponent"] },
    { path: 'forgot', component: _Foggot_Password_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_12__["ForgotComponent"] },
    { path: 'pass/:tokenid', component: _Foggot_Password_passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_13__["PasswordchangeComponent"] },
    { path: 'pass1/:confirmationToken', component: _Foggot_Password_passwordchange_passwordchange_component__WEBPACK_IMPORTED_MODULE_13__["PasswordchangeComponent"] },
    { path: 'v-list', component: _VEHICLE_vehiclelist_vehiclelist_component__WEBPACK_IMPORTED_MODULE_14__["VehiclelistComponent"] },
    { path: 'driverassign/:vehicleid', component: _Driver_driverassign_driverassign_component__WEBPACK_IMPORTED_MODULE_15__["DriverassignComponent"] },
    { path: 'assing', component: _Driver_driverassign_driverassign_component__WEBPACK_IMPORTED_MODULE_15__["DriverassignComponent"] },
    { path: 'req', component: _Request_create_request_create_request_component__WEBPACK_IMPORTED_MODULE_17__["CreateRequestComponent"] },
    { path: 'reqlist', component: _Request_request_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_16__["RequestListComponent"] },
    { path: 'users', component: _User_user_mst_list_user_mst_list_component__WEBPACK_IMPORTED_MODULE_20__["UserMstListComponent"] },
    { path: 'createUser', component: _User_users_users_component__WEBPACK_IMPORTED_MODULE_19__["UserMstComponent"] },
    { path: 'groupList', component: _UserGroup_usergroup_list_usergroup_list_component__WEBPACK_IMPORTED_MODULE_21__["UsergroupListComponent"] },
    { path: 'createZone', component: _Zone_createzone_createzone_component__WEBPACK_IMPORTED_MODULE_22__["CreatezoneComponent"] },
    { path: 'zonelist', component: _Zone_zonelist_zonelist_component__WEBPACK_IMPORTED_MODULE_18__["ZonelistComponent"] },
    { path: 'customer', component: _Customer_customer_customer_component__WEBPACK_IMPORTED_MODULE_23__["CustomerComponent"] },
    { path: 'customerlist', component: _Customer_customerlist_customerlist_component__WEBPACK_IMPORTED_MODULE_24__["CustomerlistComponent"] },
    { path: 'signup', component: _LOGIN_signup_signup_component__WEBPACK_IMPORTED_MODULE_25__["SignupComponent"] },
    { path: 'signiii', component: _LOGIN_signin_signin_component__WEBPACK_IMPORTED_MODULE_26__["SigninComponent"] },
    { path: 'assignRe', component: _Assign_ASSIGNTOSSN_assign_req_to_superv_assign_req_to_superv_component__WEBPACK_IMPORTED_MODULE_27__["AssignReqToSupervComponent"] },
    { path: 'tosupvisor', component: _Assign_ASSIGNTOSSN_assign_sup_assign_sup_component__WEBPACK_IMPORTED_MODULE_28__["AssignSupComponent"] },
    { path: 'tosupvisor/:approvalhistoryid', component: _Assign_ASSIGNTOSSN_assign_sup_assign_sup_component__WEBPACK_IMPORTED_MODULE_28__["AssignSupComponent"] },
    { path: 'suphome', component: _SSN_supervisor_sup_home_sup_home_component__WEBPACK_IMPORTED_MODULE_29__["SupHomeComponent"] },
    { path: 'supRequest', component: _SSN_supervisor_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_30__["RequestSupListComponent"] },
    { path: 'supRequest/:useremail', component: _SSN_supervisor_request_list_request_list_component__WEBPACK_IMPORTED_MODULE_30__["RequestSupListComponent"] },
    { path: 'details1/:approvalhistoryid', component: _SSN_supervisor_edit_list_edit_list_component__WEBPACK_IMPORTED_MODULE_31__["EditListComponent"] },
    { path: 'tosupvisor1/:approvalhistoryid', component: _Assign_ASSIGNTOPCMC_assign_to_pcmc_assign_to_pcmc_component__WEBPACK_IMPORTED_MODULE_32__["AssignToPcmcComponent"] },
    { path: 'tosupvisor', component: _Assign_ASSIGNTOPCMC_assign_to_pcmc_assign_to_pcmc_component__WEBPACK_IMPORTED_MODULE_32__["AssignToPcmcComponent"] },
    { path: 'backtopcmc', component: _Assign_ASSIGNTOPCMC_assignreqtopcmcsuper_assignreqtopcmcsuper_component__WEBPACK_IMPORTED_MODULE_33__["AssignreqtopcmcsuperComponent"] },
    { path: 'pcmcHone', component: _PCMC_pcmc_pcmc_home_pcmc_home_component__WEBPACK_IMPORTED_MODULE_34__["PcmcHomeComponent"] },
    { path: 'supRequestpcmc/:useremail', component: _PCMC_pcmc_incoming_request_incoming_request_component__WEBPACK_IMPORTED_MODULE_35__["IncomingRequestComponent"] },
    { path: 'AssignVehcile', component: _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_request_to_vehcile_assign_request_to_vehcile_component__WEBPACK_IMPORTED_MODULE_36__["AssignRequestToVehcileComponent"] },
    { path: 'tovechile/:approvalhistoryid', component: _Assign_ASSIGNTOVEHICLE_AssignVehcile_assign_assign_component__WEBPACK_IMPORTED_MODULE_37__["AssignComponent"] },
    // otherwise redirect to profiles
    { path: '**', redirectTo: '/not-found' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(16, 138, 252));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<body>\n\n  <div class=\"container\">\n    <div class=\"card card-container\">\n      <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n      <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n      <p id=\"profile-name\" class=\"profile-name-card\"></p>\n  \n        \n  \n  \n  \n  \n      <form *ngIf=\"!isLoggedIn\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\"novalidate>\n  \n       <div class=\"form-group\">\n    <label for=\"username\">Username</label>\n    <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"form.username\"required #username=\"ngModel\"/>\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && username.invalid\">\n      Username is required!\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"form.password\"required minlength=\"6\" #password=\"ngModel\" />\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && password.invalid\">\n      <div *ngIf=\"password.errors.required\">Password is required</div>\n      <div *ngIf=\"password.errors.minlength\">\n        Password must be at least 6 characters\n      </div>\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n    <button class=\"btn btn-primary btn-block\">\n      Login\n    </button>\n  </div>\n  \n  \n  \n  <div class=\"form-group\">\n    <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"f.submitted && isLoginFailed\" >\n      Login failed: {{ errorMessage }}\n    </div>\n  </div>\n  </form>\n  \n  <div class=\"alert alert-success\" *ngIf=\"isLoggedIn\">\n    Logged in as {{ roles }}.\n    </div>\n  \n        <a [routerLink]=\"['/forgot']\" class=\"btn btn-link\">forggrot password</a>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\n         <a routerLink=\"/customer\"  class=\"btn btn-link\"> Customer Register</a> \n    </div>\n  </div>\n  \n  \n  \n  </body>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n  "

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
/* harmony import */ var src_app_services_AuthService1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/AuthService1 */ "./src/app/services/AuthService1.ts");
/* harmony import */ var src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/tokenstorage */ "./src/app/services/tokenstorage.ts");
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
    function LoginComponent(authService, tokenStorage, router) {
        this.authService = authService;
        this.tokenStorage = tokenStorage;
        this.router = router;
        this.form = {};
        this.isLoggedIn = false;
        this.isLoginFailed = false;
        this.errorMessage = '';
        this.roles = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.tokenStorage.getToken()) {
            this.isLoggedIn = true;
            this.roles = this.tokenStorage.getUser().roles;
        }
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.authService.login(this.form).subscribe(function (data) {
            _this.tokenStorage.saveToken(data.accessToken);
            _this.tokenStorage.saveUser(data);
            _this.isLoginFailed = false;
            _this.isLoggedIn = true;
            _this.roles = _this.tokenStorage.getUser().roles;
            _this.reloadPage();
        }, function (err) {
            _this.errorMessage = err.error.message;
            _this.isLoginFailed = true;
        });
    };
    LoginComponent.prototype.reloadPage = function () {
        // this.router.navigateByUrl('/pcmcHone');
        this.router.navigateByUrl('/suphome');
        // window.location.reload();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [src_app_services_AuthService1__WEBPACK_IMPORTED_MODULE_2__["AuthService1"], src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(104, 145, 162), rgb(0, 245, 0));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<div class=\"container\">\n  <div class=\"alert alert-info text-center\" role=\"alert\">\n    We are glad having you among us, see you soon !\n  </div>\n  <div class=\"card card-container\">\n    <!-- <img class=\"profile-img-card\" src=\"//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120\" alt=\"\" /> -->\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n      <form name=\"form-signin\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\n        <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"username\" name=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">an valid email is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-success btn-block\" type=\"submit\">Sign in</button>\n    </form><!-- /form -->\n      <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Create new Account!</a>\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent.prototype.login = function () {
        var _this = this;
        this.authService.authenticate(this.user, function (e) {
            _this.router.navigateByUrl('/profile');
            console.log(e);
            var resp;
            resp = e.principal;
            // this.user.fullName = 'ndh';
            if (resp) {
                // store user details  in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(resp));
            }
        });
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\r\n\r\n  margin:0;\r\n  padding:0;\r\n}\r\n\r\nbody {\r\n\r\n\r\n  background-color:#395D6D;\r\n  margin:auto;\r\n}\r\n\r\n.container {\r\n\r\n  margin:auto;\r\n  width:80%;\r\n  text-align: center;\r\n  position:relative;\r\n  height:100vh;\r\n\r\n}\r\n\r\n.text {\r\n\r\n\r\n  width:30%;\r\n  text-align: center;\r\n  z-index: 0;\r\n  position:absolute;\r\n  background-color:white;\r\n  padding-bottom:3rem;\r\n  padding-top:3rem;\r\n  padding-left:3rem;\r\n  padding-right:3rem;\r\n  left:0;\r\n  right:0;\r\n  margin-right:auto;\r\n  margin-left:auto;\r\n  top:30%;\r\n  box-shadow: 7px 7px 10px #27414C;\r\n  justify-content: space-around;\r\n  align-items:center;\r\n  flex-wrap:wrap;\r\n\r\n}\r\n\r\nh1 {\r\n\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 900;\r\n  font-size:2rem;\r\n  text-align:center;\r\n  margin:auto;\r\n  color:#395D6D;\r\n  letter-spacing: .10rem;\r\n  padding-bottom:.5rem;\r\n}\r\n\r\nh2 {\r\n\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 400;\r\n  font-size:1rem;\r\n  text-align:center;\r\n  margin:auto;\r\n  color:#395D6D;\r\n  letter-spacing: .10rem;\r\n  padding-bottom: 2rem;\r\n\r\n}\r\n\r\nh3 {\r\n\r\n  font-family: 'Lato', sans-serif;\r\n  font-weight: 900;\r\n  font-size:.8rem;\r\n  text-align:center;\r\n  margin:auto;\r\n  letter-spacing: .10rem;\r\n}\r\n\r\n.button {\r\n\r\n  width:6rem;\r\n  border:3px solid #FCA671;\r\n  margin:auto;\r\n  text-align:center;\r\n  padding:.5rem;\r\n  color:#FCA671;\r\n}\r\n\r\n#home:hover {\r\n  background-color:#FCA671;\r\n  color:white;\r\n}\r\n\r\nsvg {\r\n  text-align: center;\r\n  position: absolute;\r\n  left:0;\r\n  right:0;\r\n  margin-left:auto;\r\n  margin-right:auto;\r\n  height:100%;\r\n\r\n}\r\n\r\n#hotel-top {\r\n\r\n  -webkit-animation: fall-8 8s ease-in infinite;\r\n  opacity: .5;\r\n}\r\n\r\n#left-martini-page {\r\n\r\n-webkit-animation: fall-8 8s ease-in infinite;\r\nopacity: .5;\r\n\r\n\r\n}\r\n\r\n#top-spa {\r\n\r\n  -webkit-animation: fall-7 7s ease-in infinite;\r\n  opacity:.75;\r\n\r\n\r\n}\r\n\r\n#chemistry-big {\r\n\r\n  -webkit-animation: fall-12 12s ease-in infinite;\r\n\r\n\r\n}\r\n\r\n#comp-big {\r\n\r\n  -webkit-animation: fall-13 13s ease-in infinite;\r\n\r\n          animation: fall-13 13s ease-in infinite;\r\n  opacity: .5;\r\n}\r\n\r\n#martini-bottom {\r\n\r\n  -webkit-animation: fall-12 12s ease-in infinite;\r\n\r\n          animation: fall-12 12s ease-in infinite;\r\n\r\n\r\n\r\n}\r\n\r\n#spa-bottom {\r\n\r\n -webkit-animation: fall-10 10s ease-in infinite;\r\n\r\n         animation: fall-10 10s ease-in infinite;\r\n\r\n}\r\n\r\n#hotel-bottom {\r\n\r\n  -webkit-animation: fall-10 10s ease-in infinite;\r\n  opacity:.25;\r\n\r\n}\r\n\r\n#chemistry-little {\r\n\r\n  -webkit-animation: fall-8 8s ease-in infinite;\r\n\r\n}\r\n\r\n#hotel-tiny {\r\n\r\n  -webkit-animation: fall-10 10s ease-in infinite;\r\n}\r\n\r\n#chemistry-top-right {\r\n\r\n  -webkit-animation: fall-10 10s ease-in infinite;\r\n\r\n}\r\n\r\n#comp-little {\r\n\r\n  -webkit-animation: fall-7 7s ease-in infinite;\r\n\r\n}\r\n\r\n.page-fall2 {\r\n\r\n  -webkit-animation: fall-12 12s ease-in infinite;\r\n\r\n\r\n\r\n}\r\n\r\n.page-fall3 {\r\n\r\n  -webkit-animation: fall-13 13s ease-in infinite;\r\n  opacity: .5;\r\n\r\n}\r\n\r\n@-webkit-keyframes fall-13 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-7 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-8 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-10 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n\r\n@-webkit-keyframes fall-12 {\r\n  from{\r\n    -webkit-transform: translateY(-700px);\r\n            transform: translateY(-700px);\r\n  }\r\n  to {\r\n    -webkit-transform: translateY(800px);\r\n            transform: translateY(800px)\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <svg id=\"Layer_1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"795.9\" height=\"433\" viewBox=\"0 0 795.9 433\">\n\n    <style>\n\n      .white_page\n        {fill:#fff;}\n\n      .dark_gray_page\n        {fill:#a9a9a9;}\n\n      .medium_gray\n        {fill:#ccc;}\n\n      .light_orange\n        {fill:#fca671;}\n\n      .orange\n        {fill:#e96019;}\n\n      .top-martini\n        {fill:#fdd2b8;}\n\n      .dark_navy\n        {fill:#1b2c3d;}\n\n      .green\n        {fill:#a48801;}\n\n      .med-blue\n        {fill:#395d6d;}\n\n      .light-blue\n        {fill:#e8eaec;}\n\n      .extra-light-o\n        {fill:#fce7dc;}\n\n      .extra2-light-o\n        {fill:#fff2ea;}\n\n      .navy-light\n        {fill:#495664;}\n\n      .light-green\n        {fill:#bfac4d;}\n\n      .light-bubbles\n        {fill:#e1e7e9;}\n    </style>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\" d=\"M0 377.8h60.9s9.330.2 3.3 55.1H0v-55.1z\"/>\n    </g>\n\n    <g class=\"page-fall3\">\n      <path class=\"dark_gray_page fade8\" d=\"M3.9 292.3l51-28.5s5 20.5 0 46-7.5 58.5-7.5 58.5l-24.5 25s-10-24-11.5-62-7.5-39-7.5-39z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\" d=\"M11.4 174.3s11.3-19.5-11.4-70v-29l22.4-20s26 61 19.5 98.5l-30.5 20.5z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"dark_gray_page fade7\" d=\"M48.4 106.9l31-46.1s26-25 41.5-12.5l-19 27.5c0 .1-29-5.8-53.5 31.1zM236.2 429l51.5-21.5s-6.5-74-51.5-87.5l-33.5 33.5s29 37.5 33.5 75.5z\"/>\n    </g>\n\n    <g class=\"page-fall3\">\n      <path class=\"white_page fade8\" d=\"M297.5 421.6l32-21.5s9-13.5 0-33l37-33.8s14 21.2 0 40.2c0 .1-58.5 48.6-69 48.1z\"/>\n    </g>\n\n    <g class=\"page-fall3\">\n      <g class=\"fade8\">\n        <path class=\"dark_gray_page\" d=\"M392.4 165.6l63 68.5s-50.5 48-63 71.5l-45.5-71.5s-8-21 45.5-68.5z\"/>\n\n        <path class=\"white_page\" d=\"M403.9 333.1s-7-1-10.5-5.5-46.5-93.5-46.5-93.5 6.5 6.5 32 4l25 95zM510.4 433s-1.5-39.1-3-41.1c0 0 64.5-9.5 87 11.5l6 29.6h-90z\"/>\n      </g>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"dark_gray_page fade7\" d=\"M486.9 274l49.2-49s52.4 49 47.5 76l-70.1 15c-.1 0-10.8-22.5-26.6-42z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\" d=\"M501.5 319.5l11.9 11.1 65.7-28.6zM603.5 260.8l83.3 8.5s22.7 53.2 15.3 102.5h-86.7c.1 0 .1-86.6-11.9-111z\"/>\n    </g>\n\n    <g class=\"page-fall2\">\n      <path class=\"white_page fade7\"\n      d=\"M502 129.2l61.5 19.3s-3.7 12.7 0 16c3.7 3.3 1.7 28 0 31.3h-67c0 .1 2.3-62.6 5.5-66.6zM749.5 296.8l3.3 99s20-8.3 43-6.1v-92.9c.1 0-18.9-3.6-46.3 0z\"/>\n    </g>\n\n\n    <g id=\"left-martini-page\">\n      <g class=\"fade5\">\n        <path class=\"medium_gray\" d=\"M135.8 329.2s64-66.5 72-91.5l63 32.5s-37.5 74.5-67.5 101c0 0-51.5-40.5-67.5-42z\"/>\n\n        <ellipse transform=\"rotate(-52.468 180.18 333.917)\" class=\"light_orange\" cx=\"180.2\" cy=\"333.9\" rx=\"2.7\" ry=\"17.1\"/>\n\n        <path class=\"orange\" d=\"M186.2 333.7c.2 1.6 2.7 6.2 2.4 6.1-4.3-1.2-15.5-11.2-16.5-12.1.7.5 4.8.8 6.4.7 1.7-.2 3-.7 5.9-3.3 12.4-11.6 20.5-28.8 20.5-28.8l5.8 4.4s-14.6 11.6-22.6 26.5c-2 3.4-2.1 4.8-1.9 6.5z\"/>\n\n        <path class=\"top-martini\" d=\"M248.1 289.4l-8.8 2.7v-.1L205 265.7v-9.4z\"/>\n\n        <path class=\"dark_navy\" d=\"M225.4 288.3c-.1-.1-.2-.2-.3-.4-.2-.5.1-1 .5-1.2l30-10.9c.5-.2 1 .1 1.2.5.2.5-.1 1-.5 1.2l-30 10.9c-.3.1-.6 0-.9-.1z\"/>\n\n        <ellipse transform=\"rotate(-61.387 246.644 279.667)\" class=\"green\" cx=\"246.6\" cy=\"279.7\" rx=\"4.7\" ry=\"4.7\"/><path class=\"dark_navy\" d=\"M239.3 292.1l-28.8 8.6-5.7-4.4.2-30.6 34.3 26.3z\"/>\n      </g>\n    </g>\n\n    <g id=\"hotel-top\">\n\n      <g class=\"fade8\">\n        <path class=\"medium_gray\" d=\"M249.8 28.7s37.3 144.7 35.3 160c0 0 91.4-30.7 107.7-41.3C409.1 136.7 367.3 2 367.3 2L249.8 28.7z\"/>\n\n        <path transform=\"rotate(-19.377 320.51 103.564)\" class=\"dark_navy\" d=\"M305.8 73.5h29.6v60.1h-29.6z\"/>\n\n        <path transform=\"rotate(-19.377 327.877 124.515)\" class=\"med-blue\" d=\"M322.1 116.7h11.7v15.6h-11.7z\"/>\n\n        <path transform=\"rotate(-19.377 307.358 83.63)\" class=\"light-blue\" d=\"M303.7 79.9h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 318.288 79.786)\" class=\"light-blue\" d=\"M314.6 76.1h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 310.821 93.478)\" class=\"light-blue\" d=\"M307.1 89.7h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 321.75 89.634)\" class=\"light-blue\" d=\"M318.1 85.9h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 314.284 103.325)\" class=\"light-blue\" d=\"M310.6 99.6h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 325.214 99.482)\" class=\"light-blue\" d=\"M321.5 95.8h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 317.747 113.173)\" class=\"light-blue\" d=\"M314.1 109.4h7.5v7.5h-7.5z\"/>\n\n        <path transform=\"rotate(-19.377 328.677 109.33)\" class=\"light-blue\" d=\"M325 105.6h7.5v7.5H325z\"/>\n\n        <path transform=\"rotate(-19.377 310.27 74.448)\" class=\"med-blue\" d=\"M293 73.6h34.6v1.7H293z\"/>\n\n        <path transform=\"rotate(-19.377 309.652 72.69)\" class=\"martini-stick\" d=\"M290.1 71.5h39.1v2.3h-39.1z\"/>\n\n        <path transform=\"rotate(-19.377 353.367 103.529)\" class=\"orange\" d=\"M337.2 84.4h32.5v38.3h-32.5z\"/>\n\n        <path transform=\"rotate(-19.377 344.165 77.359)\" class=\"light_orange\" d=\"M331.5 68.8h25.4V86h-25.4z\"/>\n\n        <g>\n          <path transform=\"rotate(-19.377 363.922 111.062)\" class=\"light_orange\" d=\"M359.9 102.5h8.2v17.1h-8.2z\"/>\n\n          <path transform=\"rotate(-19.377 342.739 95.79)\" class=\"extra-light-o\" d=\"M338.7 91.7h8.2v8.2h-8.2z\"/>\n\n          <path transform=\"rotate(-19.377 346.634 106.865)\" class=\"extra-light-o\" d=\"M342.6 102.8h8.2v8.2h-8.2z\"/>\n\n          <path transform=\"rotate(-19.377 350.342 117.41)\" class=\"extra-light-o\" d=\"M346.3 113.3h8.2v8.2h-8.2z\"/><path transform=\"rotate(-19.377 356.798 90.803)\" class=\"extra-light-o\" d=\"M352.7 86.7h8.2v8.2h-8.2z\"/>\n        </g>\n\n\n        <path transform=\"rotate(-19.377 341.078 68.58)\" class=\"orange\" d=\"M326.9 67.9h28.5v1.5h-28.5z\"/>\n\n        <g>\n          <path transform=\"rotate(-19.377 338.561 79.33)\" class=\"extra2-light-o\" d=\"M335.1 75.9h7v7h-7z\"/>\n\n          <path transform=\"rotate(-19.377 349.768 75.389)\" class=\"extra2-light-o\" d=\"M346.3 71.9h7v7h-7z\"/>\n        </g>\n\n\n        <path class=\"green\" d=\"M285.9 62l2.3 2.4 3.3-.7-1.5 3 1.6 2.9-3.2-.5-2.3 2.4-.6-3.2-3-1.4 3-1.6zM296.8 51l2.3 2.4 3.3-.7-1.5 3 1.6 2.9-3.2-.5-2.3 2.5-.6-3.3-3-1.4 3-1.6zM312.1 43.9l2.4 2.3 3.2-.6-1.5 2.9 1.7 2.9-3.3-.4-2.3 2.4-.5-3.3-3.1-1.4 3-1.5zM327.4 40.3l2.3 2.3 3.3-.6-1.5 3 1.6 2.9-3.3-.5-2.2 2.4-.6-3.3-3-1.4 3-1.5zM343.7 42l2.4 2.3 3.3-.6-1.5 2.9 1.6 2.9-3.3-.4-2.2 2.4-.6-3.3-3-1.4 2.9-1.5z\"/>\n      </g>\n    </g>\n    <g id=\"spa-bottom\">\n      <g class=\"fade6\">\n        <path class=\"medium_gray\" d=\"M276.9 274.8s21.3 54 26.7 58.3l57.1-54-40.1-47.3-43.7 43z\"/>\n\n        <path class=\"st6\" d=\"M325.2 303c-2.9 1.4-8-2.4-15.7-12.7-7.8-10.5-4.9-17.9-4.2-18.5.1-.1.3-.2.5-.2 2.3-.8 8.8 2.4 13.9 10.5 1.2 1.9 9.1 18 6.3 20.5-.3.1-.5.2-.8.4z\" id=\"XMLID_48_\"/>\n\n        <path class=\"navy-light\" d=\"M324.5 292.6s-.1 0 0 0c-1.9-1.6-4-4.2-6-6.9-.8-1.2-1.7-2.4-2.4-3.6-2.2-3.5-4.1-7.3-5.3-10.4-1.1-2.9-1.5-5.1-.9-5.9.4-.5 1-.8 1.9-.6 1.2.3 2.8 1.3 5.1 3.6 1.8 1.8 3.9 4.4 6.4 8 0 0 4 5.8 5.8 10.6.4 1.2.7 2.3.9 3.2.1 1.1 0 2-.5 2.6-1.1 1.7-3 1.1-5-.6z\" id=\"XMLID_47_\"/>\n\n        <path class=\"st6\" d=\"M330.2 283.3c-.1.1-.3.2-.6.2-1.2.1-4-.9-8-7.5-3.4-5.7-4.6-8.1-4.8-9.2-.1-.7.2-1 .7-1.3.4-.3 1.5-.5 2.9-.2.9.2 1.9.5 3 1.1 2.1 1.1 4.5 3.2 6.6 6.7 3.1 5.2 2.1 8 1.1 9.3-.3.5-.7.8-.9.9z\" id=\"XMLID_46_\"/>\n\n        <path class=\"navy-light\" d=\"M333.1 278.1s0-.1 0 0c-1-.6-2-1.8-2.9-3-.4-.5-.7-1.1-1.1-1.6-1-1.7-1.7-3.5-2-5-.3-1.4-.3-2.6.2-3.1.3-.3.7-.5 1.3-.6.7 0 1.6.3 2.8 1.3.9.8 1.9 1.9 3.1 3.5 0 0 1.8 2.6 2.3 5.1.1.6.2 1.1.1 1.7-.1.6-.3 1.1-.7 1.5-.8.9-2 .8-3.1.2z\" id=\"XMLID_45_\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.4 272.2s4.4.9 4.6 3.4c0 .6-1.5.5-1.7.4-.2 0-1.4-.5-2.1-2.2-.6-1.4-.8-1.6-.8-1.6z\"/>\n\n        <path class=\"extra-light-o\" d=\"M330.1 270.8s2.2-1.8 3.1-.6c.4.5-.9 1.9-1.3 2.1-.8.3-2.6.4-3.4-.2l1.6-1.3z\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.2 271.9s2.3-.6 2.1-2.3c-.2-1.7-1.3-2.1-1.3-2.1s-2 2.2-.8 4.4z\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.2 271.8s-2.3-2.3-4.1-.5c-.6.6 2.5 2 3.8 1.2.4-.1.3-.7.3-.7z\"/>\n\n        <path class=\"extra-light-o\" d=\"M328.3 271.9l.4 1.3s0 3.2-1.8 3.7c-.9.3-.4-2.5-.2-3 .2-.3 1.5-1.3 1.6-2z\"/>\n\n        <path class=\"orange\" d=\"M328.3 271.6s.4-.9.3-1c0-.1.4.9.4.9s1 .1 1 0c.1-.1-.8.5-.8.5-.1 0 .4.8.4.8l-.9-.6-.4.5-.1-.7-.5-.3.6-.1z\"/>\n\n        <g>\n          <g id=\"XMLID_44_\">\n            <path class=\"green\" d=\"M300.8 274.8c-.1-.1-.1-.1 0 0 0-.1 0-.1 0 0zM305.6 283.6c-.1-.2-.2-.3-.3-.5.1.2.2.4.3.5z\"/>\n          </g>\n\n          <g id=\"XMLID_43_\">\n            <path class=\"green\" d=\"M320.3 304.9s-7-8.6-7.5-9.7l-.3-.4c0-.1-.5-.9-.5-.9-1.1-1.9-2.7-3.5-5.3-7.5-.4-.6-.9-1.4-1.4-1.9-.2-.2-.5-.4-.7-.7-.9-.9-1.8-2-2.6-3.2-2.4-3.5-4.2-7.8-4-9.8 0 0 1.3 1.8 2.4 3.5.1.1.2.3.3.4v.1c.7 1 1.3 1.8 1.5 2.1.3.4 1.4 3 2.2 4.7.2.4.3.7.4.9.1.2.2.4.4.6 0 0 0 .1.1.1.1.2.2.3.3.5v.1c.3.4.6.9 1 1.4.6.8 1.2 1.5 1.8 2.2.8.9 3.8 5.4 4.2 5.9.1.1.4.7.9 1.4 1 1.6 6.7 9.4 7.5 9.8l-.7.4z\"/>\n\n            <path class=\"light-green\" d=\"M306.6 285.1c-.3-.5-.7-.9-1-1.4v-.1c-.1-.2-.2-.3-.3-.5 0 0 0-.1-.1-.1-.1-.2-.3-.4-.4-.6-.1-.2-.3-.6-.4-.9-.8-1.7-1.9-4.3-2.2-4.7-.2-.3-.8-1.1-1.5-2.1v-.7-.8-1.7c0-.7 0-1.4-.1-1.8v-.9c.1-.5-.2-3.6 0-3.9 0 0 .3 3.3 1.1 4.9.1.3.3.5.5.6.6.5 2.8 3.6 4.2 6.6.4.9.3 1.9.1 2.7-.2.7-.4 1.3-.5 1.8v.2c0 .3.2 1.3.3 2.3.2.4.2.8.3 1.1z\"/>\n\n          </g>\n        </g>\n\n        <g>\n          <path class=\"extra-light-o\" d=\"M321.6 291.3s5.8-1.7 7.6 1.2c.4.7-1.5 1.5-1.8 1.6-.3.1-2 .2-3.9-1.3-1.5-1.3-1.9-1.5-1.9-1.5z\"/>\n\n          <path class=\"extra-light-o\" d=\"M322.8 288.6s1.5-3.6 3.3-2.7c.8.4.2 2.8-.3 3.4-.8.8-2.8 2.1-4.2 1.9l1.2-2.6z\"/>\n\n          <path class=\"extra-light-o\" d=\"M321.2 291.1s2.4-2.1 1.1-4c-1.4-1.9-2.9-1.7-2.9-1.7s-1 3.9 1.8 5.7z\"/>\n\n          <path class=\"extra-light-o\" d=\"M321.3 291s-4.2-1.3-5.2 2c-.3 1.1 4.2.8 5.3-.9.3-.5-.1-1.1-.1-1.1z\"/>\n\n          <path class=\"extra-light-o\" d=\"M321.3 291.1l1.3 1.2s2 3.8.2 5.6c-.9.9-2.1-2.8-2.1-3.5.1-.4 1-2.5.6-3.3z\"/>\n\n          <path class=\"orange\" d=\"M321.2 290.7s-.1-1.3-.2-1.4c-.1-.1 1.1.8 1.1.8 0 .1 1.2-.5 1.2-.7 0-.2-.6 1.1-.7 1.2-.1.1 1 .8 1 .8l-1.5-.1-.1.9-.5-.8h-.8l.5-.7z\"/>\n\n        </g>\n      </g>\n    </g>\n\n    <g id=\"chemistry-big\">\n\n      <path class=\"white_page\" d=\"M134.1 236.5l128.4-40.7s-5.7 10.5-11.6 12.7c-5.9 2.2-92.7 34.8-92.7 34.8s-14.9-2.1-24.1-6.8z\"/>\n\n      <path class=\"dark_gray_page\" d=\"M125.3 145.8l58.9-85.3s128 102 66.7 148l-76 28s28.1-24-49.6-90.7z\"/>\n\n      <path class=\"orange\" d=\"M214.8 131.6c.4.6.3 1.4-.3 1.9l-10 7c-.6.4-1.4.3-1.9-.4l-.2-.2c-.4-.6-.3-1.4.3-1.9l10-7c.6-.4 1.4-.3 1.9.4l.2.2z\"/>\n\n      <g id=\"XMLID_50_\">\n        <path class=\"dark_navy\" d=\"M222.4 144.2c4.9 7.1 11 15.7 13.8 19.7 1.8 2.6 1.5 6-1.7 8.3l-.5.3c-3.1 2.2-6.5 1.4-8.3-1.2-2.7-3.9-8.4-12-13.2-18.9 0 0 1.1-4.7 4.5-5.6 4.1-1.2 5.4-2.6 5.4-2.6z\"/>\n\n        <path class=\"light_orange\" d=\"M214.7 133.3s3.4 4.9 7.6 10.9c0 0-1.3 1.4-5.4 2.6-3.4 1-4.5 5.6-4.5 5.6-4.5-6.4-8.2-11.8-8.2-11.8l10.5-7.3z\"/>\n\n      </g>\n\n      <g>\n        <path class=\"orange\" d=\"M187.5 133.4c.4.6.2 1.4-.4 1.8l-14.5 10.2c-.6.4-1.4.3-1.8-.2l-.1-.1c-.4-.6-.2-1.4.4-1.8l14.5-10.2c.6-.4 1.4-.3 1.8.2l.1.1z\"/>\n\n        <g id=\"XMLID_49_\">\n\n\n          <path class=\"med-blue\" d=\"M230.5 169.3s4.1 2.6.2 5.3l-35.8 25.1c-3.9 2.7-5-2-5-2l-3.4-24.6s3.1-6.3 8.7-8.5c7.8-3.1 7.1-10.1 7.1-10.2l28.2 14.9z\"/>\n\n          <path class=\"light_orange\" d=\"M202.3 154.5c0 .1.8 7.1-7.1 10.2-5.6 2.2-8.7 8.5-8.7 8.5l-1.5-11.3-11.8-16.9 13.4-9.4 11.8 16.9 3.9 2z\"/>\n\n        </g>\n\n        <ellipse transform=\"rotate(-35.011 198.16 185.684)\" class=\"light-bubbles\" cx=\"198.2\" cy=\"185.7\" rx=\"5\" ry=\"5\"/>\n\n        <ellipse transform=\"rotate(-35.011 199.115 174.96)\" class=\"light-bubbles\" cx=\"199.1\" cy=\"175\" rx=\"2.9\" ry=\"2.9\"/>\n\n        <ellipse transform=\"rotate(-35.011 205.544 179.716)\" class=\"light-bubbles\" cx=\"205.5\" cy=\"179.7\" rx=\"2.1\" ry=\"2.1\"/>\n\n      </g>\n    </g>\n\n\n    <g id=\"comp-big\">\n\n      <g class=\"fade8\">\n\n        <path class=\"medium_gray\" d=\"M600.1 231.8l10.8-130.7 130.7 9.3s-28.7 160-34.7 165.3l-106.8-43.9z\"/>\n\n        <path class=\"da\" d=\"M699.1 200.3c-.2 1.1-1.2 1.9-2.2 1.6l-62.5-13.5c-1-.2-1.6-1.3-1.4-2.4l10.1-46.5c.2-1.1 1.2-1.9 2.2-1.6l62.5 13.5c1 .2 1.6 1.3 1.4 2.4l-10.1 46.5z\"/>\n\n        <path transform=\"rotate(-77.79 671.109 169.92)\" class=\"light-blue\" d=\"M649.5 139.9h43.3v60h-43.3z\"/>\n\n        <path class=\"med-blue\" d=\"M695.7 200.6l14.2 3.1-.8 3.8s-3 1.8-4.6 1.5l-80.9-17.5c-1.6-.3-3.6-3.2-3.6-3.2l.8-3.8 14.2 3.1 60.7 13z\"/>\n\n        <g>\n\n          <path class=\"light-green\" d=\"M665.7 161c-.2.4-.5.7-.7 1.1l-5.3-1.1c.3-.4.6-.7 1-1.1l5 1.1zM671.6 162.3l-.3 1.2-5-1.1c.2-.4.5-.8.7-1.1l4.6 1zM677.2 164.8l-4.6-1 .3-1.2 4.2.9c0 .4.1.8.1 1.3zM684.2 166.3l-5.7-1.2c0-.5-.1-.9-.1-1.3l5.4 1.2c.1.3.3.8.4 1.3z\"/>\n\n          <g>\n            <path class=\"light-green\" d=\"M662.2 176.1l-4.8-1c-.2-.5-.3-.9-.4-1.4l5.2 1.1c-.1.4 0 .8 0 1.3zM668.6 176.2l-.3 1.2-4.8-1c-.1-.4-.1-.9-.2-1.3l5.3 1.1zM669.9 176.4l4.8 1c-.2.4-.4.8-.7 1.1l-4.4-1 .3-1.1zM681.6 179c-.3.4-.6.7-1 1.1l-5.3-1.1c.2-.4.4-.8.7-1.1l5.6 1.1z\"/>\n\n          </g>\n\n          <g>\n\n            <path class=\"light-green\" d=\"M662.5 168.9l-5.8-1.3c0-.2.1-.4.1-.6 0-.2.1-.4.1-.6l5.9 1.3-.3 1.2zM670.1 169.3l-.3 1.2-6.1-1.3.3-1.2 6.1 1.3zM676.8 172l-5.7-1.2.3-1.2 5.7 1.2-.3 1.2zM684.4 173c0 .2-.1.4-.1.6l-6.3-1.4c.1-.4.2-.8.2-1.2l6.3 1.4c0 .2 0 .4-.1.6z\"/>\n          </g>\n\n          <g>\n\n            <path class=\"green\" d=\"M673.9 155c-8.3-1.8-16.5 3.5-18.3 11.8s3.5 16.5 11.8 18.3c8.3 1.8 16.5-3.5 18.3-11.8s-3.5-16.5-11.8-18.3zm-16.5 20c-.2-.5-.3-.9-.4-1.4-.5-1.9-.6-3.9-.3-6 0-.2.1-.4.1-.6 0-.2.1-.4.1-.6.5-2.1 1.5-3.9 2.8-5.5.3-.4.6-.7 1-1.1 2.4-2.3 5.6-3.8 9-4-1 1-2.6 2.7-4 5.1-.2.4-.5.7-.7 1.1-.1.2-.3.5-.4.8-.7 1.4-1.4 3-1.9 4.8l-.3 1.2c-.4 1.8-.5 3.7-.4 5.8 0 .4.1.9.1 1.3.2 2 .8 4.2 1.7 6.4-2.9-1.4-5.2-4.1-6.4-7.3zm9.6 8.7c-.5-.1-.9-.3-1.3-.4-1.1-2.3-1.8-4.6-2.1-6.9-.1-.4-.1-.9-.2-1.3-.2-2 0-3.9.4-5.8l.3-1.2c.4-1.5 1-3 1.7-4.5.2-.4.4-.7.6-1.1.2-.4.5-.8.7-1.1 1.9-2.9 3.9-4.8 4.5-5.3.5 0 .9.1 1.4.2l-6 27.4zm1.2.3l6-27.6.9.3c.3.6 1.4 3.2 2 6.8.1.4.1.9.2 1.3 0 .4.1.8.1 1.2.1 1.7 0 3.3-.3 4.8-.1.4-.1.8-.2 1.2-.4 1.9-1.1 3.7-2.1 5.5-.2.4-.4.8-.7 1.1-1.3 2-2.9 3.8-4.9 5.5-.4 0-.7-.1-1-.1zm13.4-5c-.3.4-.6.7-1 1.1-2.5 2.5-6 4-9.6 4.1 1.8-1.7 3.3-3.5 4.3-5.3.2-.4.4-.8.7-1.1 1-1.9 1.6-3.7 2-5.5.1-.4.2-.8.2-1.2.3-1.9.4-3.6.3-5.2 0-.3 0-.6-.1-.8 0-.5-.1-.9-.1-1.3-.4-2.8-1.1-5.1-1.6-6.4 3.3 1.6 5.7 4.3 7 7.6.2.5.3.9.5 1.4.5 1.9.7 4 .3 6.1 0 .2-.1.4-.1.6 0 .2-.1.4-.1.6-.6 1.9-1.5 3.7-2.7 5.3z\"/>\n\n          </g>\n\n        </g>\n      </g>\n    </g>\n\n  <g id=\"top-spa\">\n    <g class=\"fade4\">\n        <path class=\"dark_gray_page\" d=\"M560.5 42l62.4-29.5s32.5 72.5 34 73.5-74.5 9-74.5 9l-21.9-53z\"/>\n\n        <path class=\"white_page\" d=\"M582.4 95.3l3.5-13 67.7 4.8z\"/>\n\n        <path class=\"dark_navy\" d=\"M629.1 55.9c.6 3.3-4.4 7.2-16.5 12.1-12.3 5-18.8.3-19.2-.6-.1-.2-.1-.3-.1-.5-.2-2.5 4.6-8 13.8-10.9 2.2-.7 20-4.4 21.7-1l.3.9z\" id=\"XMLID_56_\"/>\n\n        <path class=\"navy-light\" d=\"M618.7 54c-2.1 1.5-5.1 2.9-8.3 4.1-1.4.5-2.8 1-4.1 1.4-4.1 1.3-8.3 2.2-11.6 2.5-3.1.3-5.4.1-6-.6-.4-.5-.5-1.2 0-2 .5-1.1 2-2.5 4.8-4.1 2.2-1.3 5.3-2.7 9.5-4.3 0 0 6.7-2.5 11.9-3 1.2-.1 2.4-.2 3.4 0 1.1.2 2 .5 2.5 1.2 1.2 1.5.1 3.2-2.1 4.8z\" id=\"XMLID_55_\"/>\n\n        <path class=\"dark_navy\" d=\"M611 45.9c.1.1.1.3 0 .6-.2 1.2-1.8 3.7-9.4 5.9-6.5 1.9-9.1 2.5-10.3 2.4-.8-.1-.9-.5-1.1-1-.2-.5-.1-1.6.5-2.9.4-.8 1-1.7 1.8-2.7 1.6-1.8 4.3-3.6 8.3-4.8 5.9-1.8 8.4 0 9.4 1.3.6.6.8 1.1.8 1.2z\" id=\"XMLID_54_\"/>\n\n        <path class=\"navy-light\" d=\"M606.6 41.8c-.9.9-2.2 1.6-3.7 2.1-.6.2-1.3.5-1.9.6-1.9.5-3.8.8-5.4.7-1.5-.1-2.6-.4-3-1-.2-.4-.3-.9-.2-1.4.2-.7.7-1.5 2-2.4 1-.7 2.3-1.4 4.3-2.1 0 0 3-1.1 5.6-1 .6 0 1.2.1 1.7.3.6.2 1 .5 1.3 1 .6 1.2.3 2.3-.7 3.2z\" id=\"XMLID_53_\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.6 45s2-4.1 4.5-3.6c.6.1.1 1.6 0 1.8-.1.2-.9 1.2-2.7 1.5-1.5.1-1.8.3-1.8.3z\"/>\n\n        <path class=\"extra-light-o\" d=\"M598.7 42.9s-1.2-2.7.2-3.2c.6-.2 1.7 1.3 1.7 1.9.1.8-.2 2.6-1.1 3.3l-.8-2z\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.4 45.1s0-2.4-1.7-2.6c-1.7-.2-2.4.7-2.4.7s1.6 2.5 4.1 1.9z\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.3 45s-2.8 1.7-1.5 3.9c.5.8 2.6-1.9 2.2-3.4-.2-.4-.7-.5-.7-.5z\"/>\n\n        <path class=\"extra-light-o\" d=\"M599.4 45l1.3-.1s3.1.8 3.2 2.7c0 .9-2.6-.2-3-.6-.2-.2-.9-1.7-1.5-2z\"/>\n\n        <path class=\"orange\" d=\"M599.1 44.9s-.8-.6-.9-.6c-.1 0 1-.2 1-.2s.3-.9.3-1c-.1-.1.3.9.3 1 0 .1.9-.1.9-.1l-.8.8.4.5-.7-.1-.4.4-.1-.7z\"/>\n\n        <g>\n          <g id=\"XMLID_52_\">\n            <path class=\"green\" d=\"M595.2 72.7c-.1 0-.1 0 0 0-.1 0 0 0 0 0zM605.1 70.2s0 .1 0 0c-.2.1-.4.1-.6.2.2 0 .4-.1.6-.2z\"/>\n          </g>\n\n          <g id=\"XMLID_51_\">\n            <path class=\"green\" d=\"M629.7 61.2s-10.3 4.7-11.4 4.9l-.5.2c-.1 0-1 .3-1 .3-2.2.6-4.1 1.7-8.7 3.3-.7.2-1.6.5-2.2.9-.3.2-.5.3-.8.5-1.1.6-2.4 1.2-3.8 1.7-4.1 1.4-8.7 2.2-10.7 1.4 0 0 2.1-.8 4.1-1.5.2-.1.3-.1.5-.2h.1c1.1-.4 2.1-.8 2.4-.9.4-.2 3.3-.6 5.1-.9.4-.1.7-.1 1-.2.2-.1.5-.1.7-.2h.1c.2 0 .4-.1.5-.1h.1c.5-.2 1.1-.4 1.6-.6.9-.4 1.8-.8 2.6-1.2 1.1-.6 6.3-2.4 6.8-2.6.2-.1.8-.3 1.6-.5 1.8-.6 10.9-4.2 11.6-4.9l.3.6z\"/>\n\n            <path class=\"light-green\" d=\"M606.8 69.6c-.5.2-1.1.4-1.6.6h-.1c-.2 0-.4.1-.5.1h-.1c-.3.1-.5.1-.7.2-.3.1-.6.1-1 .2-1.9.3-4.7.7-5.1.9-.4.2-1.3.5-2.4.9-.2-.1-.5-.1-.7-.2-.3-.1-.5-.2-.8-.2-.6-.2-1.1-.3-1.6-.4-.7-.2-1.4-.3-1.8-.4-.5-.1-.8-.2-.9-.2-.5-.2-3.6-.7-3.8-1 0 0 3.3.6 5.1.2.3-.1.6-.2.8-.3.6-.5 4.2-1.8 7.6-2.4 1-.2 1.9.2 2.7.6.7.4 1.2.7 1.6.9.1 0 .1 0 .2.1.3.1 1.3.2 2.3.2.1.2.5.2.8.2z\"/>\n\n          </g>\n        </g>\n\n        <g>\n          <path class=\"extra-light-o\" d=\"M616.7 56.5s-.1-6.2 3.1-7.2c.8-.3 1.1 1.9 1.1 2.2 0 .3-.3 2-2.3 3.5-1.6 1.1-1.9 1.5-1.9 1.5z\"/>\n\n          <path class=\"extra-light-o\" d=\"M614.4 54.6s-3.1-2.4-1.8-3.9c.6-.7 2.8.5 3.2 1.1.6.9 1.4 3.3.8 4.6l-2.2-1.8z\"/>\n\n          <path class=\"extra-light-o\" d=\"M616.5 56.8s-1.5-2.9-3.7-2.1c-2.2.9-2.4 2.4-2.4 2.4s3.5 2 6.1-.3z\"/>\n\n          <path class=\"extra-light-o\" d=\"M616.3 56.7s-2.3 3.8.6 5.6c1 .6 1.9-3.9.4-5.5-.3-.3-1-.1-1-.1z\"/>\n\n          <path class=\"extra-light-o\" d=\"M616.4 56.7l1.5-1s4.2-1 5.5 1.2c.6 1.1-3.2 1.4-4 1.2-.3-.1-2.1-1.5-3-1.4z\"/>\n\n          <path class=\"orange\" d=\"M616 56.7s-1.3-.2-1.4-.1c-.1.1 1-.8 1.1-.8.1 0-.2-1.3-.3-1.4-.2-.1.9.9 1 1 .1.1 1-.7 1-.7l-.5 1.4.8.3-.9.3-.2.8-.6-.8z\"/>\n        </g>\n      </g>\n    </g>\n    <g id=\"martini-bottom\">\n      <path class=\"dark_gray_page\" d=\"M631.5 282.5s-28.6 127.1-31.2 132.4c-2.6 5.3 15.6 18 15.6 18l106.2.1s-10-43.1-10-49.1 2.7-79.3 10-83.3l-90.6-18.1z\"/>\n\n      <ellipse transform=\"rotate(-81.118 659.418 401.146)\" class=\"light_orange\" cx=\"659.4\" cy=\"401.1\" rx=\"2.7\" ry=\"17.1\"/>\n\n      <path class=\"orange\" d=\"M664.6 398.1c1 1.3 5.4 4.1 5 4.2-4.3 1-19-2.3-20.3-2.6.9.1 4.6-1.6 5.9-2.5 1.4-1 2.3-2 3.5-5.7 5.3-16.1 4.2-35.1 4.2-35.1l7.2 1.1s-7.3 17.2-7.1 34.1c0 3.8.6 5.1 1.6 6.5z\"/>\n\n      <path class=\"top-martini\" d=\"M697.7 329.5l-6.5 6.6v-.1l-42.8-6.6-4.5-8.3z\"/>\n\n      <path class=\"st6\" d=\"M677.2 339.4c-.2 0-.3-.1-.5-.2-.4-.3-.4-.9-.1-1.3l21.1-23.9c.3-.4.9-.4 1.3-.1.4.3.4.9.1 1.3L678 339.1c-.2.2-.5.3-.8.3z\"/>\n\n      <circle class=\"green\" cx=\"691.7\" cy=\"321.7\" r=\"4.7\"/><path class=\"st6\" d=\"M691.2 336.1l-21.1 21.3-7.2-1.1-14.5-26.9 42.8 6.6z\"/>\n\n    </g>\n\n    <g id=\"comp-little\">\n      <g class=\"fade5\">\n        <path class=\"medium_gray\" d=\"M66.2 310.3l45.2-35.5s27.5 52.5 22 98l-52 32.6s6.6-58.1-15.2-95.1z\"/>\n\n        <path class=\"st6\" d=\"M122.8 329.7c.2.5.1 1.1-.4 1.3l-28.2 13.7c-.4.2-1 0-1.3-.5l-10.2-21c-.2-.5-.1-1.1.4-1.3l28.2-13.7c.4-.2 1 0 1.3.5l10.2 21z\"/>\n\n        <path transform=\"rotate(-25.822 102.79 326.375)\" class=\"light-blue\" d=\"M88.1 315.8h29.4v21.3H88.1z\"/>\n\n        <path class=\"med-blue\" d=\"M121.6 330.8l6.4-3.1.8 1.7s-.6 1.6-1.3 1.9L91 349c-.7.3-2.3-.2-2.3-.2l-.8-1.7 6.4-3.1 27.3-13.2z\"/>\n\n        <g>\n\n          <path class=\"light-green\" d=\"M98 324.6c0 .2.1.4.1.6l-2.4 1.2c0-.2 0-.5.1-.7l2.2-1.1zM100.7 323.3l.3.6-2.3 1.1c0-.2-.1-.4-.1-.6l2.1-1.1zM103.6 322.6l-2.1 1-.3-.6 1.9-.9.5.5zM106.8 321l-2.6 1.3c-.1-.2-.3-.3-.4-.5l2.4-1.2c.2.2.4.3.6.4z\"/>\n\n          <g>\n\n            <path class=\"light-green\" d=\"M101.2 331.5l-2.2 1.1c-.2-.1-.4-.3-.6-.4l2.3-1.1c.2 0 .4.2.5.4zM103.7 329.6l.3.6-2.2 1.1-.5-.5 2.4-1.2zM104.3 329.3l2.2-1.1c0 .2.1.4.1.6l-2 1-.3-.5zM109.6 326.7c0 .2 0 .5-.1.7l-2.4 1.2c0-.2-.1-.4-.1-.6l2.6-1.3z\"/>\n          </g>\n\n          <g>\n            <path class=\"light-green\" d=\"M99.2 328.6l-2.6 1.3c0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3L99 328c0 .2.1.4.2.6zM102.2 326.5l.3.6-2.8 1.3-.3-.6 2.8-1.3zM105.6 325.5l-2.6 1.2-.3-.6 2.6-1.2.3.6zM108.9 323.6c0 .1.1.2.1.3l-2.8 1.4-.3-.6 2.8-1.4c.1.1.1.2.2.3z\"/>\n          </g>\n\n          <g>\n            <path class=\"green\" d=\"M99.3 319.8c-3.7 1.8-5.3 6.3-3.5 10.1 1.8 3.7 6.3 5.3 10.1 3.5 3.7-1.8 5.3-6.3 3.5-10.1-1.8-3.7-6.3-5.3-10.1-3.5zm-.3 12.7c-.2-.1-.4-.3-.6-.4-.8-.6-1.4-1.3-1.9-2.2 0-.1-.1-.2-.1-.3 0-.1-.1-.2-.1-.3-.4-1-.6-2-.6-3 0-.2 0-.5.1-.7.2-1.6 1-3.1 2.3-4.2-.1.7-.2 1.8 0 3.2 0 .2.1.4.1.6 0 .1 0 .3.1.4.1.7.4 1.6.7 2.4l.3.6c.4.8.9 1.6 1.6 2.4.1.2.3.3.4.5.7.7 1.6 1.4 2.6 2-1.7.2-3.4-.1-4.9-1zm6.4.5c-.2.1-.4.2-.7.2-1.1-.6-2.1-1.2-2.9-2l-.5-.5c-.7-.7-1.2-1.5-1.6-2.4l-.3-.6c-.3-.7-.5-1.5-.7-2.3 0-.2-.1-.4-.1-.6 0-.2-.1-.4-.1-.6-.2-1.7.1-3 .1-3.4.2-.1.4-.2.6-.4l6.2 12.6zm.5-.3l-6-12.5c.1-.1.3-.1.4-.2.3.2 1.5.8 2.8 2 .2.1.3.3.5.5l.4.4c.5.6 1 1.3 1.4 2 .1.2.2.4.3.5.4.9.7 1.8.8 2.7 0 .2.1.4.1.6.1 1.1 0 2.3-.2 3.6-.2.2-.3.3-.5.4zm3.7-6c0 .2 0 .5-.1.7-.2 1.7-1.1 3.4-2.5 4.5.2-1.2.2-2.3.1-3.3 0-.2-.1-.4-.1-.6-.2-1-.5-1.9-.9-2.7l-.3-.6c-.4-.8-.9-1.5-1.4-2.1l-.3-.3c-.1-.2-.3-.3-.4-.5-1-1-1.9-1.6-2.6-2 1.7-.4 3.5-.1 5 .8.2.1.4.3.6.4.8.6 1.5 1.4 2 2.3 0 .1.1.2.1.3 0 .1.1.2.1.3.5.9.7 1.9.7 2.8z\"/>\n          </g>\n        </g>\n      </g>\n    </g>\n\n    <g id=\"hotel-bottom\">\n      <g class=\"fade6\">\n        <path class=\"medium_gray\" d=\"M392.9 433l17.5-114.2 76.5 11.5-14.5 102.5z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 13.513 791.913)\" class=\"st6\" d=\"M410.4 378.7h40.7v20h-40.7z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 -2.429 804.88)\" class=\"med-blue\" d=\"M424.4 399.8H435v8h-10.6z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 26.76 774.228)\" class=\"light-blue\" d=\"M425.4 370.3h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 33.525 782.544)\" class=\"light-blue\" d=\"M433.2 370.8h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 19.267 780.323)\" class=\"light-blue\" d=\"M424.9 377.3h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 26.031 788.639)\" class=\"light-blue\" d=\"M432.7 377.8h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 11.774 786.418)\" class=\"light-blue\" d=\"M424.4 384.4h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 18.538 794.734)\" class=\"light-blue\" d=\"M432.2 384.9h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 4.28 792.512)\" class=\"light-blue\" d=\"M423.9 391.4h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 11.045 800.828)\" class=\"light-blue\" d=\"M431.8 392h5.1v5.1h-5.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 35.667 773.893)\" class=\"med-blue\" d=\"M431.6 356.1h1.1v23.4h-1.1z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 37.004 772.806)\" class=\"dark_navy\" d=\"M431.5 353.3h1.6v26.5h-1.6z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 23.817 820.515)\" class=\"orange\" d=\"M438.2 386.5h26v22h-26z\"/>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 43.729 804.32)\" class=\"light_orange\" d=\"M446.7 370.1h11.6v17.2h-11.6z\"/>\n\n        <g>\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 20.557 832.063)\" class=\"light_orange\" d=\"M450 402.2h11.6v5.6H450z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 27.233 808.84)\" class=\"extra-light-o\" d=\"M443.9 387.1h5.6v5.6h-5.6z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 18.806 815.696)\" class=\"extra-light-o\" d=\"M443.4 395h5.6v5.6h-5.6z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 10.783 822.221)\" class=\"extra-light-o\" d=\"M442.8 402.6h5.6v5.6h-5.6z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 35.971 819.525)\" class=\"extra-light-o\" d=\"M454 387.7h5.6v5.6H454z\"/>\n        </g>\n\n        <path transform=\"matrix(.06832 -.9977 .9977 .06832 50.409 798.887)\" class=\"orange\" d=\"M452.4 362.8h1v19.3h-1z\"/>\n\n        <g>\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 40.26 800.056)\" class=\"extra2-light-o\" d=\"M446.1 376.1h4.7v4.7h-4.7z\"/>\n\n          <path transform=\"matrix(.06832 -.9977 .9977 .06832 47.197 808.583)\" class=\"extra2-light-o\" d=\"M454.2 376.7h4.7v4.7h-4.7z\"/>\n        </g>\n\n        <path class=\"green\" d=\"M420.3 353.6l.8 2 2.2.5-1.7 1.5.3 2.2-2-1.2-2 .9.5-2.1-1.5-1.7 2.3-.2zM430 349.7l.9 2 2.2.5-1.7 1.5.2 2.2-1.9-1.2-2.1.9.5-2.2-1.5-1.6 2.3-.2zM441.5 349.3l.8 2.1 2.2.4-1.7 1.5.2 2.2-1.9-1.1-2 .9.5-2.2-1.5-1.7 2.2-.2zM451.9 351.2l.9 2 2.2.5-1.7 1.5.2 2.2-1.9-1.2-2.1.9.6-2.2-1.5-1.6 2.2-.2zM461.7 356.6l.8 2.1 2.2.5-1.7 1.4.3 2.3-2-1.2-2 .9.5-2.2-1.5-1.7 2.3-.2z\"/>\n      </g>\n    </g>\n\n    <g id=\"chemistry-little\">\n\n      <g class=\"fade5\">\n\n        <path class=\"dark_gray_page\" d=\"M413 148.6l58 13.5 14-74.5-58-14.5s-15.3 67.8-14 75.5z\"/>\n\n        <path class=\"orange\" d=\"M470.5 111.3c-.1.5-.6.8-1.1.8l-8.2-1.6c-.5-.1-.8-.6-.7-1.1v-.2c.1-.5.6-.8 1.1-.7l8.2 1.6c.5.1.8.6.7 1.1v.1z\"/>\n\n        <g id=\"XMLID_42_\">\n          <path class=\"st6\" d=\"M468 121.1c-1.1 5.8-2.4 12.9-3.1 16.3-.4 2.1-2.3 3.6-4.9 3.1l-.4-.1c-2.6-.5-3.8-2.6-3.4-4.7.6-3.2 1.9-9.9 2.9-15.5 0 0 2.8-1.7 4.9-.5 2.6 1.4 4 1.4 4 1.4z\"/>\n\n          <path class=\"light_orange\" d=\"M469.7 112.1s-.8 4-1.7 9c0 0-1.3 0-3.8-1.4-2.1-1.2-4.9.5-4.9.5 1-5.3 1.8-9.7 1.8-9.7l8.6 1.6z\"/>\n\n        </g>\n\n        <g>\n          <path class=\"orange\" d=\"M456.6 98.8c-.1.5-.6.8-1.1.7l-11.9-2.3c-.5-.1-.8-.5-.8-1v-.1c.1-.5.6-.8 1.1-.7l11.9 2.3c.5.1.8.5.8 1v.1z\"/>\n\n          <g id=\"XMLID_41_\">\n            <path class=\"med-blue\" d=\"M459.5 137.1s.7 3.3-2.5 2.7l-29.5-5.6c-3.2-.6-1.4-3.4-1.4-3.4l10.5-13.4s4.6-1.5 8.4.2c5.3 2.4 8.3-1.3 8.4-1.4l6.1 20.9z\"/>\n\n            <path class=\"light_orange\" d=\"M453.3 116.2c0 .1-3.1 3.8-8.4 1.4-3.8-1.7-8.4-.2-8.4-.2l4.8-6.2 2.6-13.9 11.1 2.1-2.6 13.9.9 2.9z\"/>\n\n          </g>\n\n          <ellipse transform=\"rotate(-79.281 435.947 129.034)\" class=\"light-bubbles\" cx=\"436\" cy=\"129\" rx=\"3.4\" ry=\"3.4\"/>\n\n          <ellipse transform=\"rotate(-79.281 441.673 124.368)\" class=\"light-bubbles\" cx=\"441.7\" cy=\"124.4\" rx=\"2\" ry=\"2\"/>\n\n          <ellipse transform=\"rotate(-79.281 442.416 129.804)\" class=\"light-bubbles\" cx=\"442.4\" cy=\"129.8\" rx=\"1.4\" ry=\"1.4\"/>\n\n        </g>\n      </g>\n    </g>\n\n    <g id=\"hotel-tiny\">\n      <g class=\"fade6\">\n        <path class=\"white_page\" d=\"M34.5 230.8l6.7 55s55.3-26.5 56.8-37l-4.5-53s-29.5 26.5-59 35z\"/>\n\n        <path transform=\"rotate(-20.024 61.852 239.887)\" class=\"dark_navy\" d=\"M49.4 233.7h25V246h-25z\"/>\n\n        <path transform=\"rotate(-20.024 53.176 243.048)\" class=\"med-blue\" d=\"M49.9 240.6h6.5v4.9h-6.5z\"/>\n\n        <path transform=\"rotate(-20.024 70.078 234.325)\" class=\"light-blue\" d=\"M68.5 232.8h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 71.727 238.85)\" class=\"light-blue\" d=\"M70.2 237.3h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 66 235.811)\" class=\"light-blue\" d=\"M64.4 234.2h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 67.65 240.337)\" class=\"light-blue\" d=\"M66.1 238.8h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 61.922 237.297)\" class=\"light-blue\" d=\"M60.4 235.7h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 63.571 241.823)\" class=\"light-blue\" d=\"M62 240.3h3.1v3.1H62z\"/>\n\n        <path transform=\"rotate(-20.024 57.844 238.784)\" class=\"light-blue\" d=\"M56.3 237.2h3.1v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 59.493 243.31)\" class=\"light-blue\" d=\"M57.9 241.7H61v3.1h-3.1z\"/>\n\n        <path transform=\"rotate(-20.024 73.909 235.492)\" class=\"med-blue\" d=\"M73.6 228.3h.7v14.4h-.7z\"/>\n\n        <path transform=\"rotate(-20.024 74.636 235.227)\" class=\"dark_navy\" d=\"M74.1 227.1h1v16.3h-1z\"/>\n\n        <path transform=\"rotate(-20.024 62.022 253.547)\" class=\"orange\" d=\"M54 246.8h15.9v13.5H54z\"/>\n\n        <path transform=\"rotate(-20.024 72.858 249.598)\" class=\"light_orange\" d=\"M69.3 244.3h7.1v10.5h-7.1z\"/>\n\n        <g>\n          <path transform=\"rotate(-20.024 58.94 257.971)\" class=\"light_orange\" d=\"M55.4 256.2h7.1v3.4h-7.1z\"/>\n\n          <path transform=\"rotate(-20.024 65.19 249.092)\" class=\"extra-light-o\" d=\"M63.5 247.4h3.4v3.4h-3.4z\"/>\n\n          <path transform=\"rotate(-20.024 60.603 250.763)\" class=\"extra-light-o\" d=\"M58.9 249h3.4v3.4h-3.4z\"/>\n\n          <path transform=\"rotate(-20.024 56.236 252.355)\" class=\"extra-light-o\" d=\"M54.5 250.6h3.4v3.4h-3.4z\"/>\n\n          <path transform=\"rotate(-20.024 67.329 254.914)\" class=\"extra-light-o\" d=\"M65.6 253.2H69v3.4h-3.4z\"/>\n        </g>\n\n        <path transform=\"rotate(-20.024 76.493 248.273)\" class=\"orange\" d=\"M76.2 242.3h.6v11.8h-.6z\"/>\n\n        <g>\n          <path transform=\"rotate(-20.024 72.013 247.277)\" class=\"extra2-light-o\" d=\"M70.6 245.8h2.9v2.9h-2.9z\"/>\n\n          <path transform=\"rotate(-20.024 73.704 251.918)\" class=\"extra2-light-o\" d=\"M72.3 250.5h2.9v2.9h-2.9z\"/>\n\n        </g>\n\n        <path class=\"green\" d=\"M79 225.3l-1 1 .3 1.3-1.3-.6-1.2.7.2-1.4-1-.9 1.4-.3.5-1.2.7 1.2zM83.6 229.7l-1 1 .3 1.4-1.2-.6-1.2.7.1-1.4-1-.9 1.4-.3.5-1.2.7 1.2zM86.6 236.1l-.9 1 .2 1.3-1.2-.6-1.2.7.2-1.4-1-.9 1.3-.2.6-1.3.7 1.2zM88.2 242.4l-1 1 .3 1.3-1.2-.6-1.2.7.2-1.3-1.1-1 1.4-.2.6-1.3.6 1.2zM87.6 249.2l-1 1 .3 1.4-1.3-.6-1.2.7.2-1.4-1-.9 1.4-.3.5-1.2.7 1.2z\"/>\n      </g>\n    </g>\n\n    <g id=\"chemistry-top-right\">\n      <g class=\"fade6\">\n        <path class=\"white_page\" d=\"M682.4 75.5l58 13.5 14-74.5-58-14.5s-15.3 67.7-14 75.5z\"/>\n\n        <path class=\"orange\" d=\"M739.3 37.8c-.1.5-.6.8-1.1.8L730 37c-.5-.1-.8-.6-.7-1.1v-.2c.1-.5.6-.8 1.1-.7l8.2 1.6c.5.1.8.6.7 1.1v.1z\"/>\n\n        <g id=\"XMLID_40_\">\n          <path class=\"st6\" d=\"M736.8 47.6c-1.1 5.8-2.4 12.9-3.1 16.3-.4 2.1-2.3 3.6-4.9 3.1l-.4-.1c-2.6-.5-3.8-2.6-3.4-4.7.6-3.2 1.9-9.9 2.9-15.5 0 0 2.8-1.7 4.9-.5 2.7 1.4 4 1.4 4 1.4z\"/>\n\n          <path class=\"light_orange\" d=\"M738.5 38.6s-.8 4-1.7 9c0 0-1.3 0-3.8-1.4-2.1-1.2-4.9.5-4.9.5 1-5.3 1.8-9.7 1.8-9.7l8.6 1.6z\"/>\n        </g>\n\n        <g>\n          <path class=\"orange\" d=\"M725.4 25.3c-.1.5-.6.8-1.1.7l-11.9-2.3c-.5-.1-.8-.5-.8-1v-.1c.1-.5.6-.8 1.1-.7l11.9 2.3c.5.1.8.5.8 1v.1z\"/>\n\n          <g id=\"XMLID_39_\">\n            <path class=\"med-blue\" d=\"M728.3 63.6s.7 3.3-2.5 2.7l-29.5-5.6c-3.2-.6-1.4-3.4-1.4-3.4l10.5-13.4s4.6-1.5 8.4.2c5.3 2.4 8.3-1.3 8.4-1.4l6.1 20.9z\"/>\n\n            <path class=\"light-orange\" d=\"M722.1 42.7c0 .1-3.1 3.8-8.4 1.4-3.8-1.7-8.4-.2-8.4-.2l4.8-6.2 2.6-13.9 11.1 2.1-2.6 13.9.9 2.9z\"/>\n          </g>\n\n          <ellipse transform=\"rotate(-79.281 704.754 55.572)\" class=\"light-bubbles\" cx=\"704.8\" cy=\"55.6\" rx=\"3.4\" ry=\"3.4\"/>\n\n          <ellipse transform=\"rotate(-79.281 710.48 50.906)\" class=\"light-bubbles\" cx=\"710.5\" cy=\"50.9\" rx=\"2\" ry=\"2\"/>\n\n          <ellipse transform=\"rotate(-79.281 711.223 56.342)\" class=\"light-bubbles\" cx=\"711.3\" cy=\"56.3\" rx=\"1.4\" ry=\"1.4\"/>\n        </g>\n      </g>\n    </g>\n  </svg>\n\n  <div class=\"text\">\n    <div class=\"text-inner\">\n      <h1> Oh no. </h1>\n\n      <h2> It seems that the page you are     looking for is lost. </h2>\n\n      <div id=\"home\" class=\"button\" [routerLink]=\"['/']\">\n        <h3> HOME </h3>\n      </div>\n    </div>\n\n  </div>\n\n  </div>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/components/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body { padding: 2em; }\r\n\r\n\r\n/* Shared */\r\n\r\n\r\n.loginBtn {\r\n  box-sizing: border-box;\r\n  position: relative;\r\n  /* width: 13em;  - apply for fixed size */\r\n  margin: 0.2em;\r\n  padding: 0 15px 0 46px;\r\n  border: none;\r\n  text-align: left;\r\n  line-height: 34px;\r\n  white-space: nowrap;\r\n  border-radius: 0.2em;\r\n  font-size: 16px;\r\n  color: #FFF;\r\n}\r\n\r\n\r\n.loginBtn:before {\r\n  content: \"\";\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 34px;\r\n  height: 100%;\r\n}\r\n\r\n\r\n.loginBtn:focus {\r\n  outline: none;\r\n}\r\n\r\n\r\n.loginBtn:active {\r\n  box-shadow: inset 0 0 0 32px rgba(0,0,0,0.1);\r\n}\r\n\r\n\r\n/* Facebook */\r\n\r\n\r\n.loginBtn--facebook {\r\n  background-color: #4C69BA;\r\n  background-image: linear-gradient(#4C69BA, #3B55A0);\r\n  /*font-family: \"Helvetica neue\", Helvetica Neue, Helvetica, Arial, sans-serif;*/\r\n  text-shadow: 0 -1px 0 #354C8C;\r\n}\r\n\r\n\r\n.loginBtn--facebook:before {\r\n  border-right: #364e92 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_facebook.png') 6px 6px no-repeat;\r\n}\r\n\r\n\r\n.loginBtn--facebook:hover,\r\n.loginBtn--facebook:focus {\r\n  background-color: #5B7BD5;\r\n  background-image: linear-gradient(#5B7BD5, #4864B1);\r\n}\r\n\r\n\r\n/* Google */\r\n\r\n\r\n.loginBtn--google {\r\n  /*font-family: \"Roboto\", Roboto, arial, sans-serif;*/\r\n  background: rgb(57, 221, 84);\r\n}\r\n\r\n\r\n.loginBtn--google:before {\r\n  border-right: #BB3F30 1px solid;\r\n  background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/14082/icon_google.png') 6px 6px no-repeat;\r\n}\r\n\r\n\r\n.loginBtn--google:hover,\r\n.loginBtn--google:focus {\r\n  background: #E74B37;\r\n}\r\n\r\n\r\nbody, header {\r\n  color: lime;\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image:none;\r\n  padding: 0;\r\n  background: rgb(148, 170, 211);\r\n}\r\n\r\n\r\n.a{\r\n  color: deepskyblue;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n\n  <nav  class=\"navbar navbar-inverse\">\n    <div class=\"container-fluid\">\n  \n      <ul class=\"nav navbar-nav\" *ngIf=\"isLoggedIn\">\n        <li class=\"badge badge-info\" > <a href=\"/signiii\" class=\"nav-link\" routerLink=\"profile\">{{ username }}</a></li>\n      </ul>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"nav-item\">\n          <a href class=\"nav-link\" (click)=\"logout()\">LogOut</a>\n        </li>\n      </ul>\n\n    </div>\n  </nav>\n\n\n\n</header>\n\n\n\n\n  <div class=\"container\" *ngIf=\"currentUser; else loggedOut\">\n    <header class=\"jumbotron\">\n      <h3>\n        <strong>{{ currentUser.username }}</strong> Profile\n      </h3>\n    </header>\n    <p>\n      <strong>Token:</strong>\n      {{ currentUser.accessToken.substring(0, 20) }} ...\n      {{ currentUser.accessToken.substr(currentUser.accessToken.length - 20) }}\n    </p>\n    <p>\n      <strong>Email:</strong>\n      {{ currentUser.email }}\n    </p>\n    <p>\n      <strong>id:</strong>\n      {{ currentUser.id }}\n    </p>\n    <p>\n      <strong>userid:</strong>\n      {{ currentUser.userid }}\n    </p>\n    <strong>Roles:</strong>\n    <ul>\n      <li *ngFor=\"let role of currentUser.roles\">\n        {{ role }}\n      </li>\n    </ul>\n  </div>\n  \n  <ng-template #loggedOut>\n    Please login.\n  </ng-template>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/tokenstorage */ "./src/app/services/tokenstorage.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(token, router) {
        this.token = token;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.currentUser = this.token.getUser();
    };
    /// by me// now work
    //logOut() {
    // localStorage.removeItem('currentUser');
    // this.router.navigate(['/signiii']);
    //}
    ProfileComponent.prototype.logout = function () {
        this.tokenStorageService.signOut();
        this.router.navigate(['/signiii']);
        window.location.reload();
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_tokenstorage__WEBPACK_IMPORTED_MODULE_1__["TokenStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n * Specific styles of signin component\r\n */\r\n/*\r\n * General styles\r\n */\r\nbody, html {\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  background-image: linear-gradient(rgb(196, 1, 255), rgb(252, 11, 31));\r\n}\r\n.card-container.card {\r\n  max-width: 350px;\r\n  padding: 40px 40px;\r\n}\r\n.btn {\r\n  font-weight: 700;\r\n  height: 36px;\r\n  -moz-user-select: none;\r\n  -webkit-user-select: none;\r\n  -ms-user-select: none;\r\n      user-select: none;\r\n  cursor: default;\r\n}\r\n/*\r\n * Card component\r\n */\r\n.card {\r\n  background-color: #F7F7F7;\r\n  /* just in case there no content*/\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n.profile-img-card {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n/*\r\n * Form styles\r\n */\r\n.profile-name-card {\r\n  font-size: 16px;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  margin: 10px 0 0;\r\n  min-height: 1em;\r\n}\r\n.reauth-email {\r\n  display: block;\r\n  color: #404040;\r\n  line-height: 2;\r\n  margin-bottom: 10px;\r\n  font-size: 14px;\r\n  text-align: center;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  white-space: nowrap;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin #inputEmail,\r\n.form-signin #inputPassword {\r\n  direction: ltr;\r\n  height: 44px;\r\n  font-size: 16px;\r\n}\r\n.form-signin input[type=email],\r\n.form-signin input[type=password],\r\n.form-signin input[type=text],\r\n.form-signin button {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  z-index: 1;\r\n  position: relative;\r\n  box-sizing: border-box;\r\n}\r\n.form-signin .form-control:focus {\r\n  border-color: rgb(104, 145, 162);\r\n  outline: 0;\r\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgb(104, 145, 162);\r\n}\r\n.btn.btn-signin,.btn-cancel {\r\n  /*background-color: #4d90fe; */\r\n  background-color: rgb(104, 145, 162);\r\n  /* background-color: linear-gradient(rgb(104, 145, 162), rgb(12, 97, 33));*/\r\n  padding: 0px;\r\n  font-weight: 700;\r\n  font-size: 14px;\r\n  height: 36px;\r\n  border-radius: 3px;\r\n  border: none;\r\n  transition: all 0.218s;\r\n}\r\n.btn.btn-cancel {\r\n  background-color: rgb(24, 59, 255);\r\n}\r\n.btn.btn-signin:hover,\r\n.btn.btn-signin:active,\r\n.btn.btn-signin:focus {\r\n  background-color: rgb(12, 97, 33);\r\n}\r\n.forgot-password {\r\n  color: rgb(104, 145, 162);\r\n}\r\n.forgot-password:hover,\r\n.forgot-password:active,\r\n.forgot-password:focus{\r\n  color: rgb(12, 97, 33);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n  <div class=\"card card-container\">\n    <img id=\"profile-img\" class=\"profile-img-card\" src=\"//ssl.gstatic.com/accounts/ui/avatar_2x.png\" />\n    <p id=\"profile-name\" class=\"profile-name-card\"></p>\n\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n      <div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n      <span id=\"reauth-email\" class=\"reauth-email\"></span>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !fullName.valid }\">\n        <label for=\"fullName\">Full Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"fullName\" id=\"fullName\" [(ngModel)]=\"user.fullName\" #fullName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !fullName.valid\" class=\"help-block\">The full Name is required</div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\n        <label for=\"username\">Email Address</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" pattern=\"[^ @]*@[^ @]*\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">\n\n          <div *ngIf=\"username.errors.required\">\n            Email is required.\n          </div>\n          <div *ngIf=\"username.errors.pattern\">\n            A valid email address is required\n          </div>\n\n        </div>\n      </div>\n      <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\"[(ngModel)]=\"user.password\" #password=\"ngModel\" required minlength=\"4\" />\n        <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">\n\n          <div *ngIf=\"password.errors.required\">\n            password is required.\n          </div>\n          <div *ngIf=\"password.errors.minlength\">\n            password must be at least 4 characters long.\n          </div>\n\n        </div>\n      </div>\n      <div id=\"remember\" class=\"checkbox\">\n\n      </div>\n      <button class=\"btn btn-lg btn-primary btn-block btn-signin\" type=\"submit\">Create Account</button>\n      <button [routerLink]=\"['/login']\" class=\"btn btn-lg btn-danger btn-block btn-cancel\" type=\"button\">Cancel</button>\n\n    </form><!-- /form -->\n\n  </div><!-- /card-container -->\n</div><!-- /container -->\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_model_user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/model.user */ "./src/app/model/model.user.ts");
/* harmony import */ var _services_account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/account.service */ "./src/app/services/account.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(accountService, router) {
        this.accountService = accountService;
        this.router = router;
        this.user = new _model_model_user__WEBPACK_IMPORTED_MODULE_1__["User"]();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.accountService.createAccount(this.user).subscribe(function (data) {
            _this.router.navigate(['/login']);
        }, function (err) {
            console.log(err);
            _this.errorMessage = 'username already exist';
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/model/ApprovelHisytory.ts":
/*!*******************************************!*\
  !*** ./src/app/model/ApprovelHisytory.ts ***!
  \*******************************************/
/*! exports provided: ApprovelHisytory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovelHisytory", function() { return ApprovelHisytory; });
var ApprovelHisytory = /** @class */ (function () {
    function ApprovelHisytory() {
        this.requestdate = '';
        this.customername = '';
        this.remark = '';
        this.usergroupid = '';
        this.supervisorid = '';
        this.approvalstatus = '';
        this.supervisorname = '';
        this.pcmcsupervisorid = '';
        this.pcmcsupervisorName = '';
        this.pcmcusergroupid = '';
        this.vehcileno = '';
        this.driverdId = '';
    }
    return ApprovelHisytory;
}());



/***/ }),

/***/ "./src/app/model/model.customer.ts":
/*!*****************************************!*\
  !*** ./src/app/model/model.customer.ts ***!
  \*****************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer() {
        this.custname = '';
        this.custemail = '';
        this.custpassword = '';
        this.custaddress = '';
        this.custzone = '';
        this.gender = '';
        this.status = '';
        this.custmoblieno = '';
    }
    return Customer;
}());



/***/ }),

/***/ "./src/app/model/model.driver.ts":
/*!***************************************!*\
  !*** ./src/app/model/model.driver.ts ***!
  \***************************************/
/*! exports provided: Driver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Driver", function() { return Driver; });
var Driver = /** @class */ (function () {
    function Driver() {
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.username = '';
        this.contact = '';
        this.licence = '';
        this.password = '';
    }
    return Driver;
}());



/***/ }),

/***/ "./src/app/model/model.requestmst.ts":
/*!*******************************************!*\
  !*** ./src/app/model/model.requestmst.ts ***!
  \*******************************************/
/*! exports provided: RequestMst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestMst", function() { return RequestMst; });
var RequestMst = /** @class */ (function () {
    function RequestMst() {
        this.requestmasterid = String;
        this.requestnumber = '';
        this.requestdate = '';
        this.customername = '';
        this.requestcreater = '';
        this.address = '';
        this.catsubcategory = '';
        this.departmentid = '';
        this.pickupaddress = '';
        this.approxweight = '';
        this.typeofwaste = '';
        this.amount = '';
        this.lat = '';
        this.longi = '';
        this.imagepath = '';
        this.status = '';
        this.createdby = '';
        this.createdon = '';
        this.updatedby = '';
        this.updatedon = '';
        this.rerano = '';
        this.propertytaxno = '';
        this.gstno = '';
        this.remark = '';
        this.userid = '';
        this.catid = '';
        this.subcatid = '';
        this.approveddatetime = '';
        this.expirydatetime = '';
        this.reqtype = '';
        this.zoneid = '';
        this.reason = '';
        this.tendernumber = '';
        this.usergroupid = '';
        this.approvalstatus = '';
        this.createdusergroupid = '';
        this.formid = '';
        this.distance = '';
        this.ssnimagepath = '';
    }
    return RequestMst;
}());



/***/ }),

/***/ "./src/app/model/model.user.ts":
/*!*************************************!*\
  !*** ./src/app/model/model.user.ts ***!
  \*************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.username = '';
        this.password = '';
        this.fullName = '';
        this.confirmationToken = '';
    }
    return User;
}());



/***/ }),

/***/ "./src/app/model/model.userMst.ts":
/*!****************************************!*\
  !*** ./src/app/model/model.userMst.ts ***!
  \****************************************/
/*! exports provided: UserMst */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMst", function() { return UserMst; });
var UserMst = /** @class */ (function () {
    function UserMst() {
        this.userfirstname = '';
        this.userlastname = '';
        this.useremail = '';
        this.userpassword = '';
        this.deptid = '';
        this.usergroupid = '';
        this.userimage = '';
        this.status = '';
        this.mobileno = '';
    }
    return UserMst;
}());



/***/ }),

/***/ "./src/app/model/model.usergroup.ts":
/*!******************************************!*\
  !*** ./src/app/model/model.usergroup.ts ***!
  \******************************************/
/*! exports provided: UserGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroup", function() { return UserGroup; });
var UserGroup = /** @class */ (function () {
    function UserGroup() {
        this.userGroupName = '';
        this.userGroupDesc = '';
        this.createdBy = '';
    }
    return UserGroup;
}());



/***/ }),

/***/ "./src/app/model/model.vehicle.ts":
/*!****************************************!*\
  !*** ./src/app/model/model.vehicle.ts ***!
  \****************************************/
/*! exports provided: Vehicle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Vehicle", function() { return Vehicle; });
var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.vehicleid = String;
        this.vehicletypeid = '';
        this.vehicleno = '';
        this.vehiclemake = '';
        this.vehiclemodel = '';
        this.vehicledesc = '';
        this.status = '';
        this.createdby = '';
        this.createdon = '';
        this.updatedby = '';
        this.updatedon = '';
        this.imei = '';
        this.driverid = '';
        this.drivername = '';
    }
    return Vehicle;
}());



/***/ }),

/***/ "./src/app/model/model.zone.ts":
/*!*************************************!*\
  !*** ./src/app/model/model.zone.ts ***!
  \*************************************/
/*! exports provided: Zone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zone", function() { return Zone; });
var Zone = /** @class */ (function () {
    function Zone() {
        this.zonename = '';
    }
    return Zone;
}());



/***/ }),

/***/ "./src/app/services/AuthService1.ts":
/*!******************************************!*\
  !*** ./src/app/services/AuthService1.ts ***!
  \******************************************/
/*! exports provided: AuthService1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService1", function() { return AuthService1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AUTH_API = 'http://localhost:3000/api/auth/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var AuthService1 = /** @class */ (function () {
    function AuthService1(http) {
        this.http = http;
    }
    AuthService1.prototype.login = function (credentials) {
        return this.http.post(AUTH_API + 'signin', {
            username: credentials.username,
            password: credentials.password
        }, httpOptions);
    };
    AuthService1.prototype.register = function (user) {
        return this.http.post(AUTH_API + 'signup', {
            username: user.username,
            email: user.email,
            password: user.password
        }, httpOptions);
    };
    AuthService1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService1);
    return AuthService1;
}());



/***/ }),

/***/ "./src/app/services/DriverService.ts":
/*!*******************************************!*\
  !*** ./src/app/services/DriverService.ts ***!
  \*******************************************/
/*! exports provided: DriverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DriverService", function() { return DriverService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DriverService = /** @class */ (function () {
    function DriverService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    DriverService.prototype.createDriver = function (driver) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/account/register2', driver);
    };
    DriverService.prototype.getDriver = function (id) {
        return this.http.get(this.baseUrl + '/account/getOne' + "/" + id);
    };
    DriverService.prototype.updateDriver = function (id, value) {
        return this.http.put(this.baseUrl + '/account/update' + "/" + id, value);
    };
    DriverService.prototype.deleteDriver = function (id) {
        return this.http.delete(this.baseUrl + '/account/delete' + "/" + id, { responseType: 'text' });
    };
    DriverService.prototype.getDriverList = function () {
        return this.http.get("" + (this.baseUrl + '/account/List'));
    };
    DriverService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], DriverService);
    return DriverService;
}());



/***/ }),

/***/ "./src/app/services/UserGroupService.ts":
/*!**********************************************!*\
  !*** ./src/app/services/UserGroupService.ts ***!
  \**********************************************/
/*! exports provided: UserGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGroupService", function() { return UserGroupService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGroupService = /** @class */ (function () {
    function UserGroupService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    UserGroupService.prototype.createUserGroup = function (usergroup) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/usergroup/add', usergroup);
    };
    UserGroupService.prototype.getGroup = function (id) {
        return this.http.get(this.baseUrl + '/usergroup/listByone' + "/" + id);
    };
    UserGroupService.prototype.updateGroup = function (id, value) {
        return this.http.put(this.baseUrl + '/usergroup/update' + "/" + id, value);
    };
    UserGroupService.prototype.deleteGroup = function (id) {
        return this.http.delete(this.baseUrl + '/usergroup/delete' + "/" + id, { responseType: 'text' });
    };
    UserGroupService.prototype.getGroupList = function () {
        return this.http.get("" + (this.baseUrl + '/usergroup/list'));
    };
    UserGroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserGroupService);
    return UserGroupService;
}());



/***/ }),

/***/ "./src/app/services/VehicleService.ts":
/*!********************************************!*\
  !*** ./src/app/services/VehicleService.ts ***!
  \********************************************/
/*! exports provided: VehicleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VehicleService", function() { return VehicleService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleService = /** @class */ (function () {
    function VehicleService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    VehicleService.prototype.createVehicle = function (vehicle) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/vehicle/add', vehicle);
    };
    VehicleService.prototype.getVehicle = function (id) {
        return this.http.get(this.baseUrl + '/vehicle/vehicleEditData' + "/" + id);
    };
    VehicleService.prototype.updateVehicle = function (vehicleid, value) {
        return this.http.put(this.baseUrl + '/vehicle/assingvehicle' + "/" + vehicleid, value);
    };
    VehicleService.prototype.deleteVehicle = function (id) {
        return this.http.delete(this.baseUrl + '/vehicle/delete' + "/" + id, { responseType: 'text' });
    };
    VehicleService.prototype.getVehicleList = function () {
        return this.http.get("" + (this.baseUrl + '/vehicle/vehicleList'));
    };
    VehicleService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], VehicleService);
    return VehicleService;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountService = /** @class */ (function () {
    function AccountService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    AccountService.prototype.createAccount = function (user) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/account/register', user);
    };
    AccountService.prototype.updateUsers = function (tokenid, value) {
        return this.http.put(this.baseUrl + '/account/update2' + "/" + tokenid, value);
    };
    AccountService.prototype.updateUsersBytoken = function (confirmationToken, value) {
        return this.http.put(this.baseUrl + '/account/update1' + "/" + confirmationToken, value);
    };
    AccountService.prototype.getUser = function (id) {
        return this.http.get(this.baseUrl + '/account/getOne' + "/" + id);
    };
    AccountService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/approvelService.ts":
/*!*********************************************!*\
  !*** ./src/app/services/approvelService.ts ***!
  \*********************************************/
/*! exports provided: ApprovelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovelService", function() { return ApprovelService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApprovelService = /** @class */ (function () {
    function ApprovelService(http, httpClient) {
        this.http = http;
        this.httpClient = httpClient;
        this.baseUrl = 'http://localhost:3000';
    }
    ApprovelService.prototype.createApprovel = function (approvelHisytory) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/approvel/assigne', approvelHisytory);
    };
    ApprovelService.prototype.getAppprovwl = function (approvalhistoryid) {
        return this.http.get(this.baseUrl + '/approvel/approvelList1' + "/" + approvalhistoryid);
    };
    ApprovelService.prototype.getAppprovwlBySupvisoremail = function (useremail) {
        return this.http.get("" + (this.baseUrl + '/approvel/data?useremail=+useremail'));
    };
    ApprovelService.prototype.updateApprovel = function (approvalhistoryid, value) {
        return this.http.put(this.baseUrl + '/approvel/update' + "/" + approvalhistoryid, value);
    };
    ApprovelService.prototype.getUserSuperVList = function () {
        return this.http.get("" + (this.baseUrl + '/approvel/listsuperisor'));
    };
    ApprovelService.prototype.getApprovelList = function () {
        return this.http.get("" + (this.baseUrl + '/approvel/approvelList'));
    };
    ApprovelService.prototype.validateUser = function (useremail) {
        return this.httpClient.get(this.baseUrl + "/approvel/data?useremail=" + useremail);
    };
    ///jiooo
    ApprovelService.prototype.ApprpovedApprovel = function (approvalhistoryid, value) {
        return this.http.put(this.baseUrl + '/approvel/approved' + "/" + approvalhistoryid, value);
    };
    ApprovelService.prototype.rejectApprovel = function (approvalhistoryid, value) {
        return this.http.put(this.baseUrl + '/approvel/reject' + "/" + approvalhistoryid, value);
    };
    /// working for approved or reject
    ApprovelService.prototype.deleteDriver = function (approvalhistoryid) {
        return this.http.put(this.baseUrl + '/approvel/approved' + "/" + approvalhistoryid, { responseType: 'text' });
    };
    ApprovelService.prototype.rejectRequest = function (approvalhistoryid) {
        return this.http.put(this.baseUrl + '/approvel/reject' + "/" + approvalhistoryid, { responseType: 'text' });
    };
    // for pcmc
    ApprovelService.prototype.getUserSuperPCMCVList = function () {
        return this.http.get("" + (this.baseUrl + '/approvel/listpcmc'));
    };
    ApprovelService.prototype.getApprovelList1 = function () {
        return this.http.get("" + (this.baseUrl + '/approvel/ApprovedListBySuperVisor'));
    };
    ApprovelService.prototype.updateApprovelpcmc = function (approvalhistoryid, value) {
        return this.http.put(this.baseUrl + '/approvel/updatebypcmc' + "/" + approvalhistoryid, value);
    };
    ApprovelService.prototype.validateUser1 = function (useremail) {
        return this.httpClient.get(this.baseUrl + "/approvel/datapcmcc?useremail=" + useremail);
    };
    ApprovelService.prototype.deleteDriver1 = function (approvalhistoryid) {
        return this.http.put(this.baseUrl + '/approvel/approvedpcmc' + "/" + approvalhistoryid, { responseType: 'text' });
    };
    ApprovelService.prototype.rejectRequest1 = function (approvalhistoryid) {
        return this.http.put(this.baseUrl + '/approvel/rejectpcmc' + "/" + approvalhistoryid, { responseType: 'text' });
    };
    //final segments
    ApprovelService.prototype.getApprovelFinalList = function () {
        return this.http.get("" + (this.baseUrl + '/approvel/finalList'));
    };
    ApprovelService.prototype.getTRejectFinalList = function () {
        return this.http.get("" + (this.baseUrl + '/approvel/rejecrList'));
    };
    ApprovelService.prototype.getVehicleList = function () {
        return this.http.get("" + (this.baseUrl + '/approvel/vehicleList'));
    };
    ApprovelService.prototype.updateAssigntoVehcile = function (approvalhistoryid, value) {
        return this.http.put(this.baseUrl + '/approvel/assignRequestToVeh' + "/" + approvalhistoryid, value);
    };
    ApprovelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ApprovelService);
    return ApprovelService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.errorMessage = '';
        this.authenticated = false;
    }
    AuthService.prototype.authenticate = function (credentials, callback) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](credentials ? {
            authorization: 'Basic ' + btoa(credentials.email + ':' + credentials.password)
        } : {});
        this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].API_URL + '/account/login', { headers: headers })
            .subscribe(function (response) {
            var data;
            data = response;
            var u = data.principal;
            if (response['fullName']) {
                _this.authenticated = true;
            }
            else {
                _this.authenticated = false;
            }
            return callback && callback(data);
        });
    };
    AuthService.prototype.logIn = function (signin) {
        console.log(signin);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
        headers.set('Accept', 'application/json');
        // creating base64 encoded String from user name and password
        var base64Credential = btoa(signin.email + ':' + signin.password);
        headers.set('Authorization', 'Basic ' + base64Credential);
        console.log(headers);
        // const options = new RequestOptions();
        return this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"].API_URL + '/account/login', { headers: headers });
    };
    AuthService.prototype.logOut = function () {
        // remove user from local storage to log user out
        // return this.http.post(AppComponent.API_URL + 'logout', {})
        // .subscribe((response) => {
        // console.log('Response_logout : ' + response);
        // let u = localStorage.getItem('currentUser');
        // console.log(u);
        // localStorage.removeItem('currentUser');
        // this.router.navigate(['/logout']);
        // },
        // error => {
        // });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/customer.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/customer.service.ts ***!
  \**********************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CustomerService = /** @class */ (function () {
    function CustomerService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    CustomerService.prototype.createCustomer = function (customer) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/apicust/customer', customer);
    };
    CustomerService.prototype.getCustomer = function (custId) {
        return this.http.get(this.baseUrl + '/apicust/getOne' + "/" + custId);
    };
    CustomerService.prototype.updateCustomer = function (custId, value) {
        return this.http.put(this.baseUrl + '/apicust/update' + "/" + custId, value);
    };
    CustomerService.prototype.deleteCustomer = function (custId) {
        return this.http.delete(this.baseUrl + '/apicust/delete' + "/" + custId, { responseType: 'text' });
    };
    CustomerService.prototype.getCustomerList = function () {
        return this.http.get("" + (this.baseUrl + '/apicust/List'));
    };
    CustomerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], CustomerService);
    return CustomerService;
}());



/***/ }),

/***/ "./src/app/services/forget.serveice.ts":
/*!*********************************************!*\
  !*** ./src/app/services/forget.serveice.ts ***!
  \*********************************************/
/*! exports provided: ForgetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetService", function() { return ForgetService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgetService = /** @class */ (function () {
    function ForgetService(http) {
        this.http = http;
    }
    ForgetService.prototype.passAccount = function (user) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/account/forggotpass', user);
    };
    ForgetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ForgetService);
    return ForgetService;
}());



/***/ }),

/***/ "./src/app/services/requestService.ts":
/*!********************************************!*\
  !*** ./src/app/services/requestService.ts ***!
  \********************************************/
/*! exports provided: RequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestService", function() { return RequestService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RequestService = /** @class */ (function () {
    function RequestService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    RequestService.prototype.createRequest = function (requestMst) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/requst/add', requestMst);
    };
    RequestService.prototype.getRequest = function (requestmasterid) {
        return this.http.get(this.baseUrl + '/requst/getOne' + "/" + requestmasterid);
    };
    RequestService.prototype.updateRequest = function (requestmasterid, value) {
        return this.http.put(this.baseUrl + '/requst/assingvehicle' + "/" + requestmasterid, value);
    };
    RequestService.prototype.deleteRequest = function (requestmasterid) {
        return this.http.delete(this.baseUrl + '/requst/delete' + "/" + requestmasterid, { responseType: 'text' });
    };
    RequestService.prototype.getRequestList = function () {
        return this.http.get("" + (this.baseUrl + '/requst/list'));
    };
    RequestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], RequestService);
    return RequestService;
}());



/***/ }),

/***/ "./src/app/services/tokenstorage.ts":
/*!******************************************!*\
  !*** ./src/app/services/tokenstorage.ts ***!
  \******************************************/
/*! exports provided: TokenStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStorageService", function() { return TokenStorageService; });
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

var TOKEN_KEY = 'auth-token';
var USER_KEY = 'auth-user';
var TokenStorageService = /** @class */ (function () {
    function TokenStorageService() {
    }
    TokenStorageService.prototype.signOut = function () {
        window.sessionStorage.clear();
    };
    TokenStorageService.prototype.saveToken = function (token) {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    };
    TokenStorageService.prototype.getToken = function () {
        return sessionStorage.getItem(TOKEN_KEY);
    };
    TokenStorageService.prototype.saveUser = function (user) {
        window.sessionStorage.removeItem(USER_KEY);
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
    };
    TokenStorageService.prototype.getUser = function () {
        return JSON.parse(sessionStorage.getItem(USER_KEY));
    };
    TokenStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TokenStorageService);
    return TokenStorageService;
}());



/***/ }),

/***/ "./src/app/services/userMst.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/userMst.service.ts ***!
  \*********************************************/
/*! exports provided: UserMstService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMstService", function() { return UserMstService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMstService = /** @class */ (function () {
    function UserMstService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    UserMstService.prototype.createUserMst = function (userMst) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/apiuser/user', userMst);
    };
    UserMstService.prototype.getUserMst = function (userid) {
        return this.http.get(this.baseUrl + '/apiuser/getOne' + "/" + userid);
    };
    UserMstService.prototype.updateUser = function (userid, value) {
        return this.http.put(this.baseUrl + '/apiuser/update' + "/" + userid, value);
    };
    UserMstService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + '/apiuser/delete' + "/" + id, { responseType: 'text' });
    };
    UserMstService.prototype.getUserList = function () {
        return this.http.get("" + (this.baseUrl + '/apiuser/userList'));
    };
    UserMstService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserMstService);
    return UserMstService;
}());



/***/ }),

/***/ "./src/app/services/userserice.ts":
/*!****************************************!*\
  !*** ./src/app/services/userserice.ts ***!
  \****************************************/
/*! exports provided: UserService1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService1", function() { return UserService1; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API_URL = 'http://localhost:3000/api/test/';
var UserService1 = /** @class */ (function () {
    function UserService1(http) {
        this.http = http;
    }
    UserService1.prototype.getPublicContent = function () {
        return this.http.get(API_URL + 'all', { responseType: 'text' });
    };
    UserService1.prototype.getUserBoard = function () {
        return this.http.get(API_URL + 'user', { responseType: 'text' });
    };
    UserService1.prototype.getModeratorBoard = function () {
        return this.http.get(API_URL + 'mod', { responseType: 'text' });
    };
    UserService1.prototype.getAdminBoard = function () {
        return this.http.get(API_URL + 'admin', { responseType: 'text' });
    };
    UserService1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService1);
    return UserService1;
}());



/***/ }),

/***/ "./src/app/services/zone.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/zone.service.ts ***!
  \******************************************/
/*! exports provided: ZoneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneService", function() { return ZoneService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZoneService = /** @class */ (function () {
    function ZoneService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3000';
    }
    ZoneService.prototype.createZone = function (zone) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].API_URL + '/api/zone', zone);
    };
    ZoneService.prototype.deleteZo = function (id) {
        return this.http.delete(this.baseUrl + '/api/delete' + "/" + id, { responseType: 'text' });
    };
    ZoneService.prototype.getZoneList = function () {
        return this.http.get("" + (this.baseUrl + '/api/zonelist'));
    };
    ZoneService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], ZoneService);
    return ZoneService;
}());



/***/ }),

/***/ "./src/app/urlPermission/url.permissions.ts":
/*!**************************************************!*\
  !*** ./src/app/urlPermission/url.permissions.ts ***!
  \**************************************************/
/*! exports provided: UrlPermission */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UrlPermission", function() { return UrlPermission; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UrlPermission = /** @class */ (function () {
    function UrlPermission(router) {
        this.router = router;
    }
    UrlPermission.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    UrlPermission = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UrlPermission);
    return UrlPermission;
}());



/***/ }),

/***/ "./src/app/view-deatils/view-deatils.component.css":
/*!*********************************************************!*\
  !*** ./src/app/view-deatils/view-deatils.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view-deatils/view-deatils.component.html":
/*!**********************************************************!*\
  !*** ./src/app/view-deatils/view-deatils.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2>Employee Details</h2> \n\n<hr/>\n<div *ngIf=\"driver\">\n  <div>\n    <label><b>First Name: </b></label> {{driver.firstName}}\n  </div>\n  <div>\n    <label><b>Last Name: </b></label> {{driver.lastName}}\n  </div>\n  <div>\n    <label><b>Email Id: </b></label> {{driver.emailId}}\n  </div>  \n</div>\n\n<br>\n<br>\n<button (click)=\"list()\" class=\"btn btn-primary\">Back to Employee List</button><br>"

/***/ }),

/***/ "./src/app/view-deatils/view-deatils.component.ts":
/*!********************************************************!*\
  !*** ./src/app/view-deatils/view-deatils.component.ts ***!
  \********************************************************/
/*! exports provided: ViewDeatilsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewDeatilsComponent", function() { return ViewDeatilsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_DriverService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/DriverService */ "./src/app/services/DriverService.ts");
/* harmony import */ var _model_model_driver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/model.driver */ "./src/app/model/model.driver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewDeatilsComponent = /** @class */ (function () {
    function ViewDeatilsComponent(route, router, driverService) {
        this.route = route;
        this.router = router;
        this.driverService = driverService;
    }
    ViewDeatilsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.driver = new _model_model_driver__WEBPACK_IMPORTED_MODULE_3__["Driver"]();
        this.id = this.route.snapshot.params['id'];
        this.driverService.getDriver(this.id)
            .subscribe(function (data) {
            console.log(data);
            _this.driver = data;
        }, function (error) { return console.log(error); });
    };
    ViewDeatilsComponent.prototype.list = function () {
        this.router.navigate(['D-List']);
    };
    ViewDeatilsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view-deatils',
            template: __webpack_require__(/*! ./view-deatils.component.html */ "./src/app/view-deatils/view-deatils.component.html"),
            styles: [__webpack_require__(/*! ./view-deatils.component.css */ "./src/app/view-deatils/view-deatils.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_DriverService__WEBPACK_IMPORTED_MODULE_2__["DriverService"]])
    ], ViewDeatilsComponent);
    return ViewDeatilsComponent;
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

module.exports = __webpack_require__(/*! E:\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map