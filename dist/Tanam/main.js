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

/***/ "./src/app/anggota.service.ts":
/*!************************************!*\
  !*** ./src/app/anggota.service.ts ***!
  \************************************/
/*! exports provided: AnggotaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnggotaService", function() { return AnggotaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnggotaService = /** @class */ (function () {
    function AnggotaService() {
    }
    AnggotaService.prototype.getAnggotaMalang = function () {
        return [
            //Malang
            { "nama": "Galang Putratama", "panggilan": "Galang", "ttl": "Jakarta, 01 Februari 1997", "jabatan": "Web Developer", "domisili": "Malang", "foto": "../../assets/profil/masgalang.jpg", "ig": "sasdfsdf", "fb": "sdfdsf", "line": "sdfsdfsdf" },
            { "nama": "Shulhan Darajat", "panggilan": "Shulhan", "ttl": "Serang, 28 Februari 1998", "jabatan": "Leader Project Celengan Amal", "domisili": "Malang", "foto": "../../assets/profil/massulhan.jpg", "ig": "sdfsdfsdf", "fb": "sdfsdfsdf", "line": "sdfsdfsd" },
            { "nama": "Rizki Nurul Arsy", "panggilan": "Rizki", "ttl": "Serang, 4 Maret 1998", "jabatan": "Leader Tanam Pahala", "domisili": "Malang", "foto": "../../assets/profil/mas rizky.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Rifaldi Raya", "panggilan": "Rifal", "ttl": "Bangkalan, 20 Januari 1999", "jabatan": "Web Developer", "domisili": "Malang", "foto": "../../assets/profil/Rifal.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Moh Imam Rosyidi", "panggilan": "Rosyidi", "ttl": "Sumenep, 15 November 1999", "jabatan": "Designer", "domisili": "Malang", "foto": "../../assets/profil/rosi.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Khoirul Badriyah", "panggilan": "Khobar", "ttl": "Pandeglang, 11 April 1998", "jabatan": "Social Media Admin", "domisili": "Malang", "foto": "../../assets/profil/mbak Khobar.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Nandika Sekar Guamaharani", "panggilan": "Nandika", "ttl": "Grobogan, 08 April 1998", "jabatan": "Treasurer ", "domisili": "Malang", "foto": "../../assets/profil/mbakNandika.jpg", "ig": "", "fb": "", "line": "" }
        ];
    };
    AnggotaService.prototype.getAnggotaSemarang = function () {
        // Semarang
        return [
            { "nama": "Trianto", "panggilan": "Trianto", "ttl": "Cilacap, 26 Juni 1997", "jabatan": "Member", "domisili": "Semarang", "foto": "../../assets/profil/semarang/26267.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Siti Rohmaniah", "panggilan": "Rohmaniah", "ttl": "Wonogiri, 05 November 1997", "jabatan": "Member", "domisili": "Semarang", "foto": "../../assets/profil/semarang/26268.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Febryan Taufiq", "panggilan": "Febry", "ttl": "Jepara, 19 Februari 1998", "jabatan": "Member", "domisili": "Semarang", "foto": "../../assets/profil/semarang/26266.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Mochammad Iffan Zulfiandri", "panggilan": "Iffan", "ttl": "Serang, 27 Juni 1998", "jabatan": "Member", "domisili": "Semarang", "foto": "../../assets/profil/semarang/1.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Dewi Anggraini", "panggilan": "Dewi", "ttl": "Kab. Semarang 16 juli 1998", "jabatan": "Member", "domisili": "Semarang", "foto": "../../assets/profil/semarang/kartun.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Muhammad Kautsar Aqsa", "panggilan": "Aqsa", "ttl": "Jakarta, 25 Agustus 1998", "jabatan": "Member", "domisili": "Semarang", "foto": "../../assets/profil/semarang/26264.jpg", "ig": "", "fb": "", "line": "" },
            { "nama": "Alifia Hanifah Mumtaz", "panggilan": "Alifia", "ttl": "Serang, 02 September 1998", "jabatan": "Member", "domisili": "Semarang", "foto": "../../assets/profil/semarang/26265.jpg", "ig": "", "fb": "", "line": "" }
        ];
    };
    AnggotaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnggotaService);
    return AnggotaService;
}());



/***/ }),

/***/ "./src/app/anggota/anggota.component.css":
/*!***********************************************!*\
  !*** ./src/app/anggota/anggota.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ2dvdGEvYW5nZ290YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/anggota/anggota.component.html":
/*!************************************************!*\
  !*** ./src/app/anggota/anggota.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Anggota Tanam Pahala</title>\n\t<body>\n\t\t<div class=\"row content-profil\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\"\" href=\"#\"><i class=\"material-icons\" style=\"color:#004d40; font-size: 36px; padding-top:10px\">person_pin</i><b id=\"tu\">Profil Anggota Malang</b></a>\n\t\t\t\t</div>\n\t\t\t\t<!-- Ng-For -->\n\t\t\t\t<div *ngFor=\"let anggotaMalang of anggotaMalangs\">\n\t\t\t\t\t<!-- CARDS-->\n\t\t\t\t\t<div class=\"col s12 m6 l4 xl4\" style=\"text-align:center\">\n\t\t\t\t\t\t<div class=\"card\" id=\"kartu\">\n\t\t\t\t\t\t\t<img alt=\"Avatar\" src=\"{{anggotaMalang.foto}}\" style=\"width:300px;height:370px; border-radius: 50px 50px 0 0;\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<h4 id=\"cardTitle\"><b>{{anggotaMalang.panggilan}}</b></h4>\n\t\t\t\t\t\t\t\t<div id=\"deskripsi\">\n\t\t\t\t\t\t\t\t\t<p>{{anggotaMalang.nama}}<br>\n\t\t\t\t\t\t\t\t\t{{anggotaMalang.ttl}}<br>\n\t\t\t\t\t\t\t\t\t<!-- Teknik Informatika 2015<br> -->\n\t\t\t\t\t\t\t\t\t <!-- Universitas Brawijaya<br> -->\n\t\t\t\t\t\t\t\t\t {{anggotaMalang.domisili}}<br>\n\t\t\t\t\t\t\t\t\t{{anggotaMalang.jabatan}}<br></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-action\" style=\"text-align:center;\">\n\t\t\t\t\t\t\t\t<a href=\"{{anggotaMalang.fb}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-responsive sosmed circle width=\" height=\"40\" \n\t\t\t\t\t\t\t\t\tid=\"sosmed-facebook\" src=\"../../assets/svg/facebook.jpg\"></a> \n\n\t\t\t\t\t\t\t\t\t<a href=\"{{anggotaMalang.ig}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive sosmed circle\" height=\"40\" \n\t\t\t\t\t\t\t\t\t\tid=\"sosmed-instagram\" src=\"../../assets/svg/instagram.jpg\" width=\"40\"></a> \n\n\t\t\t\t\t\t\t\t\t\t<a href=\"{{anggotaMalang.line}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive sosmed circle width=\" height=\"40\" \n\t\t\t\t\t\t\t\t\t\t\tid=\"sosmed-line\" src=\"../../assets/svg/line.jpg\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- /CARDS-->\n\t\t\t\t</div><!--/Ng-For -->\n\t\t\t\t<!-- /PROFIL -->\n\n\t\t\t</div>\n\t\t</div>\n\t\t\n\n\t\t<div class=\"row content-profil\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div>\n\t\t\t\t\t<a class=\"\"><i class=\"material-icons\" style=\"color:#004d40; font-size: 36px; padding-top:10px\">person_pin</i><b id=\"tu\">Profil Anggota Semarang</b></a>\n\t\t\t\t</div>\n\n\t\t\t\t<div *ngFor=\"let anggotaSemarang of anggotaSemarangs\">\n\t\t\t\t\t<!-- CARDS-->\n\t\t\t\t\t<div class=\"col s12 m6 l4 xl4\" style=\"text-align:center\">\n\t\t\t\t\t\t<div class=\"card\" id=\"kartu\">\n\t\t\t\t\t\t\t<img alt=\"Avatar\" src=\"{{anggotaSemarang.foto}}\" style=\"width:300px;height:370px; border-radius: 50px 50px 0 0;\">\n\t\t\t\t\t\t\t<div class=\"container\">\n\t\t\t\t\t\t\t\t<h4 id=\"cardTitle\"><b>{{anggotaSemarang.panggilan}}</b></h4>\n\t\t\t\t\t\t\t\t<div id=\"deskripsi\">\n\t\t\t\t\t\t\t\t\t<p>{{anggotaSemarang.nama}}<br>\n\t\t\t\t\t\t\t\t\t{{anggotaSemarang.ttl}}<br>\n\t\t\t\t\t\t\t\t\t<!-- Teknik Informatika 2015<br> -->\n\t\t\t\t\t\t\t\t\t <!-- Universitas Brawijaya<br> -->\n\t\t\t\t\t\t\t\t\t {{anggotaSemarang.domisili}}<br>\n\t\t\t\t\t\t\t\t\t{{anggotaSemarang.jabatan}}<br></p>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"card-action\" style=\"text-align:center;\">\n\t\t\t\t\t\t\t\t<a href=\"{{anggotaSemarang.fb}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t<img class=\"img-responsive sosmed circle width=\" height=\"40\" \n\t\t\t\t\t\t\t\t\tid=\"sosmed-facebook\" src=\"../../assets/svg/facebook.jpg\"></a> \n\n\t\t\t\t\t\t\t\t\t<a href=\"{{anggotaSemarang.ig}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive sosmed circle\" height=\"40\" \n\t\t\t\t\t\t\t\t\t\tid=\"sosmed-instagram\" src=\"../../assets/svg/instagram.jpg\" width=\"40\"></a> \n\n\t\t\t\t\t\t\t\t\t\t<a href=\"{{anggotaSemarang.line}}\" target=\"_blank\">\n\t\t\t\t\t\t\t\t\t\t\t<img class=\"img-responsive sosmed circle width=\" height=\"40\" \n\t\t\t\t\t\t\t\t\t\t\tid=\"sosmed-line\" src=\"../../assets/svg/line.jpg\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div><!-- /CARDS-->\n\t\t\t\t</div><!--/Ng-For -->\n\n\t\t\t</div>\n\t\t</div>\n\t</body>"

/***/ }),

/***/ "./src/app/anggota/anggota.component.ts":
/*!**********************************************!*\
  !*** ./src/app/anggota/anggota.component.ts ***!
  \**********************************************/
/*! exports provided: AnggotaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnggotaComponent", function() { return AnggotaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anggota_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../anggota.service */ "./src/app/anggota.service.ts");



var AnggotaComponent = /** @class */ (function () {
    function AnggotaComponent(_anggotaService) {
        this._anggotaService = _anggotaService;
        this.anggotaMalangs = [];
        this.anggotaSemarangs = [];
    }
    AnggotaComponent.prototype.ngOnInit = function () {
        this.anggotaMalangs = this._anggotaService.getAnggotaMalang();
        this.anggotaSemarangs = this._anggotaService.getAnggotaSemarang();
    };
    AnggotaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anggota',
            template: __webpack_require__(/*! ./anggota.component.html */ "./src/app/anggota/anggota.component.html"),
            styles: [__webpack_require__(/*! ./anggota.component.css */ "./src/app/anggota/anggota.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_anggota_service__WEBPACK_IMPORTED_MODULE_2__["AnggotaService"]])
    ], AnggotaComponent);
    return AnggotaComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _body_body_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./body/body.component */ "./src/app/body/body.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _program_program_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./program/program.component */ "./src/app/program/program.component.ts");
/* harmony import */ var _tentang_kami_tentang_kami_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tentang-kami/tentang-kami.component */ "./src/app/tentang-kami/tentang-kami.component.ts");
/* harmony import */ var _anggota_anggota_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./anggota/anggota.component */ "./src/app/anggota/anggota.component.ts");
/* harmony import */ var _head_head_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./head/head.component */ "./src/app/head/head.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");












var routes = [
    { path: '', redirectTo: '/beranda', pathMatch: 'full' },
    { path: 'beranda', component: _body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"] },
    { path: 'program', component: _program_program_component__WEBPACK_IMPORTED_MODULE_7__["ProgramComponent"] },
    { path: 'anggota', component: _anggota_anggota_component__WEBPACK_IMPORTED_MODULE_9__["AnggotaComponent"] },
    { path: 'tentang', component: _tentang_kami_tentang_kami_component__WEBPACK_IMPORTED_MODULE_8__["TentangKamiComponent"] },
    { path: "**", component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, { useHash: true })
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [
    _head_head_component__WEBPACK_IMPORTED_MODULE_10__["HeadComponent"],
    _body_body_component__WEBPACK_IMPORTED_MODULE_4__["BodyComponent"],
    _program_program_component__WEBPACK_IMPORTED_MODULE_7__["ProgramComponent"],
    _tentang_kami_tentang_kami_component__WEBPACK_IMPORTED_MODULE_8__["TentangKamiComponent"],
    _anggota_anggota_component__WEBPACK_IMPORTED_MODULE_9__["AnggotaComponent"],
    _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_5__["NavigationComponent"],
    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
    _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-head></app-head>\n\n<app-navigation></app-navigation>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: ["./app.component.css"]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _anggota_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./anggota.service */ "./src/app/anggota.service.ts");
/* harmony import */ var _beranda_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beranda.service */ "./src/app/beranda.service.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["routingComponents"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
            ],
            providers: [
                _anggota_service__WEBPACK_IMPORTED_MODULE_7__["AnggotaService"],
                _beranda_service__WEBPACK_IMPORTED_MODULE_8__["BerandaService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/beranda.service.ts":
/*!************************************!*\
  !*** ./src/app/beranda.service.ts ***!
  \************************************/
/*! exports provided: BerandaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BerandaService", function() { return BerandaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BerandaService = /** @class */ (function () {
    function BerandaService() {
    }
    BerandaService.prototype.getStatistik = function () {
        return [
            { "img": "../../assets/donasi.png", "judul": "Jumlah Donatur", "jumlah": "37", "keterangan": "Orang" },
            { "img": "../../assets/bin.png", "judul": "Sampah Tersisa", "jumlah": "5", "keterangan": "Kilogram" },
            { "img": "../../assets/handshake.png", "judul": "Penerima Bantuan", "jumlah": "409", "keterangan": "Pihak" },
            { "img": "../../assets/report.png", "judul": "Sampah Terkumpul", "jumlah": "302", "keterangan": "Kilogram" },
        ];
    };
    BerandaService.prototype.getGallery = function () {
        return [
            { "img": "../assets/bagitakjill.jpg" },
            { "img": "../assets/3.jpg" },
            { "img": "../assets/1.jpg" },
            { "img": "../assets/baginasii.jpg" },
            { "img": "../assets/tpsemarangg.jpg" },
            { "img": "../assets/Actf.jpg" },
            { "img": "../assets/18304.jpg" },
            { "img": "../assets/dokk.jpg" },
            { "img": "../assets/recehan.jpg" }
        ];
    };
    BerandaService.prototype.getMitra = function () {
        return [
            { "img": "../../assets/mitra/ragambingkai.png", "url": "" },
            { "img": "../../assets/mitra/act.png", "url": "http://act.id" },
            { "img": "../../assets/mitra/harfaa.png", "url": "" },
            { "img": "../../assets/mitra/creatingcatering.png", "url": "" },
            { "img": "../../assets/mitra/oemahku.png", "url": "" },
            { "img": "../../assets/mitra/maklum.png", "url": "" },
            { "img": "../../assets/mitra/anekajajanan.png", "url": "" }
        ];
    };
    BerandaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BerandaService);
    return BerandaService;
}());



/***/ }),

/***/ "./src/app/body/body.component.css":
/*!*****************************************!*\
  !*** ./src/app/body/body.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvZHkvYm9keS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/body/body.component.html":
/*!******************************************!*\
  !*** ./src/app/body/body.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--OPENING-->\r\n<!-- <input [(ngModel)]=\"quotes\" type=\"text\">\r\n<input #inputan type=\"text\">\r\n<button (click)=\"onClick(inputan.type)\" >Log</button> -->\r\n<title>Beranda Tanam Pahala</title>\r\n<body>\r\n\t<div id=\"opening\">\r\n\t\t<h3 class=\"center\" style=\"margin-top:0px\"><br>\r\n\t\t<br>\r\n\t\t<br>\r\n\t\t<br>\r\n\t\tUntukmu Si Pemilik Hati yang Lembut & Tulus<br></h3>\r\n\t\t<p class=\"center\" style=\"margin-top:0px\">Semoga Allah meringankan langkah kita untuk selalu berada dalam kebaikan<br>\r\n\t\tMari Berkolaborasi!<br>\r\n\t\t<!-- Modal Trigger --></p>\r\n\t\t<div id=\"card-action-btn-donasi\" class=\"card-action\" style=\"padding:8px\">\r\n\t\t\t<a id=\"btn-donasi\" class=\"btn modal-trigger yellow accent-4 center\" data-target=\"modal1\" \r\n\t\t\tstyle=\"\" (click)=\"onClick(this.id)\"\r\n\t\t\ttarget=\"_blank\">DONASI</a>\r\n\t\t</div><!-- Modal Trigger -->\r\n\t\t<p></p>\r\n\t\t<p class=\"center\">Bersama Tanam Pahala, Membantu Sesama</p><!-- Modal Structure -->\r\n\t\t<div class=\"modal\" id=\"modal1\" style=\"background-color:rgba(153, 255, 153, 0.6);\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<div class=\"modal-footer\" style=\"background-color:rgba(0, 0, 0, 0);\">\r\n\t\t\t\t\t<a class=\"modal-close waves-effect waves btn-floating yellow accent-4\" style=\"color:white;\"><i class=\"material-icons\">close</i></a>\r\n\t\t\t\t</div>\r\n\t\t\t\t<h1 id=\"mtkami\" style=\"color:white\">Pilih Region</h1><br>\r\n\t\t\t\t<div class=\"row content\">\r\n\t\t\t\t\t<div class=\"container\">\r\n\t\t\t\t\t\t<div class=\"col s12 m6 l6 xl6\">\r\n\t\t\t\t\t\t\t<div class=\"card-action\" style=\"padding:8px\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves btn-large yellow accent-4\" \r\n\t\t\t\t\t\t\t\thref=\"https://api.whatsapp.com/send?phone=6285954615788&text=Assalamu'alaikum%20Warohmatullahi%20Wabarokatuh%0ATeruntuk%20investor%20amal%20semoga%20selalu%20dalam%20ridho%20dan%20rahmat-Nya.%20Mohon%20diisi%20terlebih%20dahulu%20ya.%0A%20%0A*Berkolaborasi%20Bersama%20Tanam%20Pahala*%0A%20%0ANama%3A%20%0AAlamat%3A%20%0AJenis%20Donasi%3A%0A%20%0A*Catatan%20_(Tulis%20dibawah%20jika%20ada%20yang%20ingin%20ditanyakan)_*%0A%20%0A#BersamaMembantuSesama%0APantau%20terus%20sosial%20media%20kami%20di%0AIg%3A%20tanampahala%0ALine%3A%20@gog3912b\" style=\"padding:20px;border-radius:50px;height:100%;color:white;font-weight:600;font-size:20px;\" \r\n\t\t\t\t\t\t\t\ttarget=\"_blank\">Tanam Pahala Malang</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col s12 m6 l6 xl6\">\r\n\t\t\t\t\t\t\t<div class=\"card-action\" style=\"padding:8px\">\r\n\t\t\t\t\t\t\t\t<a class=\"waves-effect waves btn-large yellow accent-4\" \r\n\t\t\t\t\t\t\t\thref=\"https://api.whatsapp.com/send?phone=628815600345&text=Assalamu'alaikum%20Warohmatullahi%20Wabarokatuh%0ATeruntuk%20investor%20amal%20semoga%20selalu%20dalam%20ridho%20dan%20rahmat-Nya.%20Mohon%20diisi%20terlebih%20dahulu%20ya.%0A%20%0A*Berkolaborasi%20Bersama%20Tanam%20Pahala*%0A%20%0ANama%3A%20%0AAlamat%3A%20%0AJenis%20Donasi%3A%0A%20%0A*Catatan%20_(Tulis%20dibawah%20jika%20ada%20yang%20ingin%20ditanyakan)_*%0A%20%0A#BersamaMembantuSesama%0APantau%20terus%20sosial%20media%20kami%20di%0AIg%3A%20tanampahala%0ALine%3A%20@gog3912b\" style=\"padding:20px;border-radius:50px;height:100%;color:white;font-weight:600;font-size:20px;\" \r\n\t\t\t\t\t\t\t\ttarget=\"_blank\">Tanam Pahala Semarang</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<p class=\"center\" style=\"margin-bottom:0px;color:white;font-size:18px\">Donasi akan sangat membantu keluarga kita yang membutuhkan</p><br>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div><!--OPENING-->\r\n\t<!-- APA ITU TANAM PAHALA -->\r\n\t<div class=\"row content-tentang\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"col s12 m12 l12 xl12\" id=\"about-title\">\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>\r\n\t\t\t\t<h1 class=\"center\" id=\"apaitu\">APA ITU<br>\r\n\t\t\t\tTANAM PAHALA ?</h1><br>\r\n\t\t\t\t<br>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m12 l6 xl6\" id=\"about-image\"><img src=\"../../assets/Logo-Low.png\"></div>\r\n\t\t\t<div class=\"col s12 m12 l6 xl6\" id=\"about-text\">\r\n\t\t\t\t<br>\r\n\t\t\t\t<br>\r\n\t\t\t\t<h4>Tanam pahala merupakan komunitas yang bergerak di bidang sosial yang berorientasi pada investasi produktif bernilai manfaat bagi banyak orang dengan program utama berupa Celengan Amal dan Sampah Amal</h4><br>\r\n\t\t\t\t<h4 class=\"center\" id=\"about-slogan\"><b>#BersamaMembantuSesama</b></h4>\r\n\t\t\t</div><br>\r\n\t\t</div>\r\n\t</div><!-- /APA ITU TANAM PAHALA -->\r\n\t<br>\r\n\t<br>\r\n\t<br>\r\n\t<br>\r\n\t<!-- PROGRAM KAMI -->\r\n\t<div class=\"row content-program\" id=\"kontenprogram\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"col s12 m12 l12 xl12\" id=\"program-title\">\r\n\t\t\t\t<h1 id=\"prkami\">PROGRAM KAMI</h1><br>\r\n\t\t\t\t<br>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m6 l6 xl6\" id=\"program-panel\">\r\n\t\t\t\t<div class=\"panel panel-default hoverable\">\r\n\t\t\t\t\t<div class=\"panel-body\">\r\n\t\t\t\t\t\t<img alt=\"\" src=\"../../assets/icon_sampah_pahala.png\">\r\n\t\t\t\t\t\t<h1 id=\"celengansampah\">Sampah Pahala</h1>\r\n\t\t\t\t\t\t<h4 class=\"center\" id=\"textapaitu\">Sampah amal yang sudah disedekahkan nantinya akan dijual. Hasil dari penjualannya akan diputar menjadi produk investasi bernilai manfaat, juga untuk disalurkan kepada yang membutuhkan. Sehingga produk yang sudah jadi investasi nantinya akan kembali pada umat bernilai manfaat dan pahala.</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div><br>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"col s12 m6 l6 xl6\" id=\"program-panel\">\r\n\t\t\t\t<div class=\"panel panel-default hoverable\" style=\"border-bottom:30px\">\r\n\t\t\t\t\t<div class=\"panel-body\" id=\"gambarcelengansampah\">\r\n\t\t\t\t\t\t<img alt=\"\" class=\"responsive-img\" src=\"../../assets/koin.png\">\r\n\t\t\t\t\t\t<h1 id=\"celengansampah\">Celengan Pahala</h1>\r\n\t\t\t\t\t\t<h4 class=\"center\" id=\"textapaitu\">Untuk teman-teman yang tidak memiliki sampah botol atau kertas namun sangat ingin berkolaborasi bersama untuk berbagi, bisa menggunakan uang receh sebagai donasi. Seluruh donasi yang teman-teman berikan akan kami investasikan dan keuntungannya akan diorientasikan untuk umat, terkhusus dibidang sosial.</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div><!-- /PROGRAM KAMI -->\r\n\t<br>\r\n\t<br>\r\n\t<br>\r\n\t<!-- JENIS DONASI -->\r\n\t<div class=\"row content-donasi\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s12 m12 l12 xl12\" id=\"donasi-title\">\r\n\t\t\t\t\t<h1 id=\"jenisdonasi\">JENIS DONASI</h1><br>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s12 m6 l3\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-image\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/botol.jpg\"> <span class=\"card-title\" id=\"jdtitle\"></span> <a class=\"btn-floating halfway-fab waves-effect waves-light\"><i class=\"material-icons\">looks_one</i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-content\">\r\n\t\t\t\t\t\t\t<!-- <p id=\"jd\">Termasuk dalam jenis sampah plastik. Merupakan jenis sampah terbanyak yang dihasilkan perharinya. Banyak sekali pemanfaatan sampah plastik di Indonesia terutama melalui Tanam Pahala.</p> -->\r\n\t\t\t\t\t\t\t<p id=\"jd\" >Botol Plastik</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s12 m6 l3\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-image\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/kertas.jpg\"> <span class=\"card-title\" id=\"jdtitle\"></span> <a class=\"btn-floating halfway-fab waves-effect waves-light\"><i class=\"material-icons\">looks_two</i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-content\">\r\n\t\t\t\t\t\t\t<!-- <p id=\"jd\">Kertas Bekas, Konsumsi kertas di Indonesia juga termasuk dalam kategori sangat tinggi. Oleh karena itu, donasi yang kami terima juga berupa kertas bekas. Kertas jenis apapun yang sudah tidak terpakai bisa didonasikan.</p> -->\r\n\t\t\t\t\t\t\t<p id=\"jd\">Kertas Bekas</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s12 m6 l3\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-image\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/kardus.jpg\"> <span class=\"card-title\" id=\"jdtitle\"> </span> <a class=\"btn-floating halfway-fab waves-effect waves-light\"><i class=\"material-icons\">looks_3</i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-content\">\r\n\t\t\t\t\t\t\t<!-- <p id=\"jd\">Kardus yang sudah tidak terpakai juga bisa didonasikan melalui tanam pahala. Ukuran dan jenis kardus apapun tidak menjadi masalah jika teman-teman memang ingin berpartisipas dan mendonasikannya.</p> -->\r\n\t\t\t\t\t\t\t<p id=\"jd\">Kardus Bekas</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col s12 m6 l3\">\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-image\">\r\n\t\t\t\t\t\t\t<img src=\"../../assets/baju.jpg\"> <span class=\"card-title\" id=\"jdtitle\"> </span> <a class=\"btn-floating halfway-fab waves-effect waves-light\"><i class=\"material-icons\">looks_4</i></a>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-content\">\r\n\t\t\t\t\t\t\t<!-- <p id=\"jd\">Tanam Pahala juga menerima donasi berupa pakaian baik itu dalam bentuk kaos, celana, dan sejenisnya, yang nantinya bisa dikonversikan menjadi uang atau disalurkan langsung berupa barang jadi.</p> -->\r\n\t\t\t\t\t\t\t<p id=\"jd\">Pakaian Bekas layak pakai</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div><!-- /JENIS DONASI -->\r\n\t<br>\r\n\t<br>\r\n\t<br>\r\n\t<!-- STATISTIK -->\r\n\t<br>\r\n\t<br>\r\n\t<div class=\"row content-statistik\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"col s12 m12 l12 xl12\" id=\"statistik-title\">\r\n\t\t\t\t<h1 id=\"sttitle\">STATISTIK TERBARU</h1><br>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div *ngFor=\"let statistik of statistiks\">\r\n\t\t\t\t<div class=\"col s12 m12 l3 xl3\" id=\"statistik-panel\" style=\"margin-bottom:50px;\">\r\n\t\t\t\t\t<div class=\"statistik-panel\">\r\n\t\t\t\t\t\t<img alt=\"\" class=\"img-responsive\" src=\"{{statistik.img}}\" style=\"max-width: 75%;\">\r\n\t\t\t\t\t\t<h4 id=\"st\">{{statistik.judul}}</h4>\r\n\t\t\t\t\t\t<h1 id=\"st1\"><b>{{statistik.jumlah}}</b></h1>\r\n\t\t\t\t\t\t<h4 id=\"st\">{{statistik.keterangan}}</h4>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</div>\r\n\t</div><!-- /STATISTIK -->\r\n\t<!-- <br>\r\n\t<br> -->\r\n\t<!-- KEGIATAN KAMI -->\r\n\t<div style=\"padding-bottom:10px\">\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<div class=\"col s12 m12 l12 xl12\" id=\"mitra-title\">\r\n\t\t\t\t\t<h1 id=\"mtkami\">GALERI KEGIATAN KAMI</h1><br>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t<div  *ngFor=\"let gallery of galleries\">\r\n\t\t\t\t\t<div class=\"col s12 m4 l4 xl4\">\r\n\t\t\t\t\t\t<div materialize=\"materialboxed\" class=\"card materialboxed\">\r\n\t\t\t\t\t\t\t<div class=\"card-image\">\r\n\t\t\t\t\t\t\t\t<img src=\"{{gallery.img}}\">\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- end ngFor -->\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div><!-- KEGIATAN KAMI -->\r\n\t<br>\r\n\t<br>\r\n\t<br>\r\n\t<!--TES<div class=\"panel panel-default hoverable\">-->\r\n\t <!-- MITRA -->\r\n\t<div class=\"row content-mitra\" \r\n\tstyle=\"margin-bottom:0px;background-color:#e8f5e9;\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<div class=\"col s12 m12 l12 xl16\" id=\"mitra-title\">\r\n\t\t\t\t<h1 id=\"mtkami\">MITRA KAMI</h1><br>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"carousel\" style=\"padding-top:0px\">\r\n\r\n\t\t\t\t<div *ngFor=\"let mitra of mitras\">\r\n\t\t\t\t\t<div class=\"col s12 m4 l4 xl4\">\r\n\t\t\t\t\t\t<a class=\"carousel-item\" href=\"{{mitra.url}}\" target=\"_blank\">\r\n\t\t\t\t\t\t\t<img src=\"{{mitra.img}}\">\r\n\t\t\t\t\t\t</a> \r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</body>\r\n\r\n<!-- JQ -->\r\n\r\n\r\n<!-- /JQ-->"

/***/ }),

/***/ "./src/app/body/body.component.ts":
/*!****************************************!*\
  !*** ./src/app/body/body.component.ts ***!
  \****************************************/
/*! exports provided: BodyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyComponent", function() { return BodyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beranda_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beranda.service */ "./src/app/beranda.service.ts");



var BodyComponent = /** @class */ (function () {
    function BodyComponent(_berandaService) {
        this._berandaService = _berandaService;
        this.displayable = true;
        this.galleries = [];
        this.statistiks = [];
        this.mitras = [];
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.galleries = this._berandaService.getGallery();
        this.statistiks = this._berandaService.getStatistik();
        this.mitras = this._berandaService.getMitra();
    };
    BodyComponent.prototype.onClick = function (value) {
        this.quotes = value;
    };
    BodyComponent.prototype.onClick_gallery = function (value) {
    };
    BodyComponent.prototype.ngAfterViewInit = function () {
        $('.materialboxed').materialbox();
        $('.carousel').carousel({
            padding: 100,
            dist: 0,
            indicators: true,
        });
        $('.modal').modal({
            opacity: 0.8,
            dismissible: false,
            preventScrolling: false,
            endingTop: '15%'
        });
    };
    BodyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-body',
            template: __webpack_require__(/*! ./body.component.html */ "./src/app/body/body.component.html"),
            styles: [__webpack_require__(/*! ./body.component.css */ "./src/app/body/body.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_beranda_service__WEBPACK_IMPORTED_MODULE_2__["BerandaService"]])
    ], BodyComponent);
    return BodyComponent;
}());



/***/ }),

/***/ "./src/app/footer.service.ts":
/*!***********************************!*\
  !*** ./src/app/footer.service.ts ***!
  \***********************************/
/*! exports provided: FooterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterService", function() { return FooterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterService = /** @class */ (function () {
    function FooterService() {
        this.visibility = true;
    }
    FooterService.prototype.hide = function () { this.visibility = false; };
    FooterService.prototype.show = function () { this.visibility = true; };
    FooterService.prototype.toggle = function () { this.visibility = !this.visibility; };
    FooterService.prototype.doSomething = function () {
    };
    FooterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterService);
    return FooterService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer *ngIf=\"foot.visibility\">\n    <div id=\"foot\" style=\"padding-bottom:30px\"class=\"row footer-canvas  teal darken-4\">\n    <br><br>\n    <div class=\"container\">\n      <div class=\"col s12 m12 l4 xl4\" id=\"footer-panel\">\n        <h4 id=\"bawahH4\" class=\"center\">Alamat</h4>\n        <h6 id=\"bawahH6\" class=\"center\">\n        Jalan Veteran, Ketawanggede, Lowokwaru, Ketawanggede,\n        Kec. Lowokwaru, Kota Malang, Jawa Timur 65145\n        </h6>\n      </div>\n      <div class=\"col s12 m12 l4 xl4\" id=\"footer-panel\">\n        <h4 id=\"bawahH4\" class=\"center\">Pusat Informasi</h4>\n        <h6 id=\"bawahH6\" class=\"center\">Sms/WA   : 085954615788<br>\n           Gmail   : tanampahala17@gmail.com<br>\n           Berdiri :  27 November 2017</h6>\n      </div>\n      <div class=\"col s12 m12 l4 xl4\" id=\"footer-panel\">\n        <h4 id=\"bawahH4\" class=\"center\">Media Sosial</h4>\n        <table class=\"borderless social-media\">\n          <tr><td><a href=\"http://facebook.com\" target=\"_blank\"><img class=\"img-responsive sosmed\" width=\"35\" height=\"35\" src=\"../../assets/website/v2/facebook.svg\" id=\"sosmed-facebook\"></a></td>\n            <td><a href=\"http://instagram.com/tanampahala\" target=\"_blank\"><img class=\"img-responsive sosmed\" width=\"35\" height=\"35\" src=\"../../assets/website/v2/instagram.svg\" id=\"sosmed-instagram\"></a></td>\n            <td><a href=\"http://line.me/ti/p/~@gog3912b\" target=\"_blank\"><img class=\"img-responsive sosmed\" width=\"35\" height=\"35\" src=\"../../assets/website/v2/line.svg\" id=\"sosmed-line\"></a></td>\n            <td><a href=\"https://api.whatsapp.com/send?phone=6285954615788\" target=\"_blank\"><img class=\"img-responsive sosmed\" width=\"35\" height=\"35\" src=\"../../assets/website/v2/whatsapp.svg\" id=\"sosmed-wa\"></a></td>\n          </tr>\n        </table>\n      </div>\n    </div>\n    <br><br>\n    </div>\n    \n    <div class=\"footer-copyright teal darken-4\">\n      <div style=\"text-align:center;color:white;\" class=\"container\">\n          Copyright &copy; Tanam Pahala 2019\n        </div>\n          </div>\n  </footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _footer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../footer.service */ "./src/app/footer.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(foot) {
        this.foot = foot;
    }
    FooterComponent.prototype.ngOnInit = function () {
        $('.materialboxed').materialbox();
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_footer_service__WEBPACK_IMPORTED_MODULE_2__["FooterService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/head/head.component.css":
/*!*****************************************!*\
  !*** ./src/app/head/head.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWQvaGVhZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/head/head.component.html":
/*!******************************************!*\
  !*** ./src/app/head/head.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<head>\n   \n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\n  <!-- FONT -->\n  <link href=\"https://fonts.googleapis.com/css?family=K2D|Noto+Serif+KR:400,900|Ubuntu\" rel=\"stylesheet\">\n\n  <!-- FontAwesome -->\n  <link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.5.0/css/all.css\" integrity=\"sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU\" crossorigin=\"anonymous\">\n  \n  <!-- Material Icons-->\n  <link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\" rel=\"stylesheet\">\n  \n</head>"

/***/ }),

/***/ "./src/app/head/head.component.ts":
/*!****************************************!*\
  !*** ./src/app/head/head.component.ts ***!
  \****************************************/
/*! exports provided: HeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadComponent", function() { return HeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadComponent = /** @class */ (function () {
    function HeadComponent() {
    }
    HeadComponent.prototype.ngOnInit = function () {
    };
    HeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-head',
            template: __webpack_require__(/*! ./head.component.html */ "./src/app/head/head.component.html"),
            styles: [__webpack_require__(/*! ./head.component.css */ "./src/app/head/head.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeadComponent);
    return HeadComponent;
}());



/***/ }),

/***/ "./src/app/navbar.service.ts":
/*!***********************************!*\
  !*** ./src/app/navbar.service.ts ***!
  \***********************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visibility = true;
    }
    NavbarService.prototype.hide = function () { this.visibility = false; };
    NavbarService.prototype.show = function () { this.visibility = true; };
    NavbarService.prototype.toggle = function () { this.visibility = !this.visibility; };
    NavbarService.prototype.doSomething = function () {
    };
    NavbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navigation/navigation.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--NAVBAR-->\n<body>\n<div *ngIf=\"nav.visibility\" class=\"navbar-fixed\" >\n  <nav class=\"nav-extended\">\n    <div class=\"nav-wrapper white\">\n    <div class=\"container\">\n      <a class=\"brand-logo\" href=\"index.html\"><img style=\"padding-top:5px;\" height=\"45px\"class=\"img-responsive\" src=\"../assets/logo1.png\" alt=\"\"></a>\n      <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i style=\"color:rgb(16, 74, 48);\" class=\"material-icons\">menu</i></a>\n      <ul id=\"nav-mobile\" class=\"right hide-on-med-and-down\">\n        <li routerLink=\"/beranda\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color: rgb(16, 74, 48);\">Beranda</a></li>\n        <li routerLink=\"/program\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color: rgb(16, 74, 48);\">Program</a></li>\n        <li routerLink=\"/tentang\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color: rgb(16, 74, 48);\">Tentang Kami</a></li>\n        <li routerLink=\"/anggota\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color: rgb(16, 74, 48);\">Anggota</a></li>\n      </ul>\n    </div>\n    </div>\n  </nav>\n</div>\n  \n<div *ngIf=\"nav.visibility\" style=\"color:rgb(16, 74, 48)\">\n  <ul class=\"sidenav\" style=\"margin:0px;padding-top:7px;padding-right:10px;padding-left:10px\"  id=\"mobile-demo\">\t\n    \n    <!-- <hr color=\"rgb(16, 74, 48)\"> -->\n    <h6 class=\"center subjudul\"> Menu</h6>\n    <hr>\n    \n    <li routerLink=\"/beranda\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color:rgb(16, 74, 48)\"><i style=\"color:rgb(16, 74, 48)\" class=\"fas fa-home\"></i>Beranda</a></li>\n    <li routerLink=\"/program\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color:rgb(16, 74, 48)\"><i style=\"color:rgb(16, 74, 48)\"  class=\"fas fa-project-diagram\"></i>Program</a></li>\n    <li routerLink=\"/tentang\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color:rgb(16, 74, 48)\"><i style=\"color:rgb(16, 74, 48)\"  class=\"fas fa-info\"></i>Tentang Kami</a></li>\n    <li routerLink=\"/anggota\" routerLinkActive=\"active green light-green lighten-5\"><a style=\"color:rgb(16, 74, 48)\"><i style=\"color:rgb(16, 74, 48)\"  class=\"fas fa-users\"></i>Anggota</a></li>\n    \n    <br>\n    <h6 class=\"center subjudul\"> Official Accounts</h6>\n    <hr>\n    \n    <li><a style=\"color:rgb(16, 74, 48)\" href=\"https://api.whatsapp.com/send?phone=6285954615788\" target=\"_blank\"><i style=\"color:rgb(16, 74, 48)\" class=\"fab fa-whatsapp-square\"></i> WhatsApp</a></li>\n    <li><a style=\"color:rgb(16, 74, 48)\" href=\"http://line.me/ti/p/~@gog3912b\" target=\"_blank\"><i style=\"color:rgb(16, 74, 48)\"  class=\"fab fa-line\"></i> Line</a></li>\n    <li><a style=\"color:rgb(16, 74, 48)\" href=\"http://instagram.com/tanampahala\" target=\"_blank\"><i style=\"color:rgb(16, 74, 48)\"  class=\"fab fa-instagram\"></i> Instagram</a></li>\n    <li><a style=\"color:rgb(16, 74, 48)\" href=\"#\" target=\"_blank\"><i style=\"color:rgb(16, 74, 48)\"  class=\"fab fa-facebook\"></i> Facebook</a></li>\n  </ul>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar.service */ "./src/app/navbar.service.ts");



var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(nav) {
        this.nav = nav;
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        $('.sidenav').sidenav();
    };
    NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/navigation/navigation.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "            body{\r\n                background: rgb(16, 74, 48);\r\n                color:#fff;\r\n                font-family: 'Ubuntu';\r\n                max-height:700px;\r\n                overflow: hidden;\r\n            }\r\n            .c{\r\n                text-align: center;\r\n                display: block;\r\n                position: relative;\r\n                width:80%;\r\n                margin:100px auto;\r\n            }\r\n            ._404{\r\n                font-size: 220px;\r\n                position: relative;\r\n                display: inline-block;\r\n                z-index: 2;\r\n                height: 250px;\r\n                letter-spacing: 15px;\r\n            }\r\n            ._1{\r\n                text-align:center;\r\n                display:block;\r\n                position:relative;\r\n                letter-spacing: 12px;\r\n                font-size: 4em;\r\n                line-height: 80%;\r\n            }\r\n            ._2{\r\n                text-align:center;\r\n                display:block;\r\n                position: relative;\r\n                font-size: 20px;\r\n            }\r\n            .text{\r\n                font-size: 70px;\r\n                text-align: center;\r\n                position: relative;\r\n                display: inline-block;\r\n                margin: 19px 0px 0px 0px;\r\n                /* top: 256.301px; */\r\n                z-index: 3;\r\n                width: 100%;\r\n                line-height: 1.2em;\r\n                display: inline-block;\r\n            }\r\n            .btn{\r\n                background-color: rgb( 255, 255, 255 );\r\n                position: relative;\r\n                display: inline-block;\r\n                width: 358px;\r\n                padding: 5px;\r\n                z-index: 5;\r\n                font-size: 25px;\r\n                margin:0 auto;\r\n                color:rgb(16, 74, 48);\r\n                text-decoration: none;\r\n                margin-right: 10px\r\n            }\r\n            .right{\r\n                float:right;\r\n                width:60%;\r\n            }\r\n            hr{\r\n                padding: 0;\r\n                border: none;\r\n                border-top: 5px solid #fff;\r\n                color: #fff;\r\n                text-align: center;\r\n                margin: 0px auto;\r\n                width: 420px;\r\n                height:10px;\r\n                z-index: -10;\r\n            }\r\n            hr:after {\r\n                content: \"\\2022\";\r\n                display: inline-block;\r\n                position: relative;\r\n                top: -0.75em;\r\n                font-size: 2em;\r\n                padding: 0 0.2em;\r\n                background: rgb(16, 74, 48);\r\n            }\r\n            .cloud {\r\n                width: 350px; height: 120px;\r\n\r\n                background: #FFF;\r\n                background: linear-gradient(to bottom, #FFF 100%);\r\n                background: -o-linear-gradient(to bottom, #FFF 100%);\r\n\r\n                border-radius: 100px;\r\n                -webkit-border-radius: 100px;\r\n                -moz-border-radius: 100px;\r\n\r\n                position: absolute;\r\n                margin: 120px auto 20px;\r\n                z-index:-1;\r\n                transition: ease 1s;\r\n            }\r\n            .cloud:after, .cloud:before {\r\n                content: '';\r\n                position: absolute;\r\n                background: #FFF;\r\n                z-index: -1\r\n            }\r\n            .cloud:after {\r\n                width: 100px; height: 100px;\r\n                top: -50px; left: 50px;\r\n\r\n                border-radius: 100px;\r\n                -webkit-border-radius: 100px;\r\n                -moz-border-radius: 100px;\r\n            }\r\n            .cloud:before {\r\n                width: 180px; height: 180px;\r\n                top: -90px; right: 50px;\r\n\r\n                border-radius: 200px;\r\n                -webkit-border-radius: 200px;\r\n                -moz-border-radius: 200px;\r\n            }\r\n            .x1 {\r\n                top:-50px;\r\n                left:100px;\r\n                -webkit-transform: scale(0.3);\r\n                transform: scale(0.3);\r\n                opacity: 0.9;\r\n                -webkit-animation: moveclouds 15s linear infinite;\r\n                -moz-animation: moveclouds 15s linear infinite;\r\n                -o-animation: moveclouds 15s linear infinite;\r\n            }\r\n            .x1_5{\r\n                top:-80px;\r\n                left:250px;\r\n                -webkit-transform: scale(0.3);\r\n                transform: scale(0.3);\r\n                -webkit-animation: moveclouds 17s linear infinite;\r\n                -moz-animation: moveclouds 17s linear infinite;\r\n                -o-animation: moveclouds 17s linear infinite; \r\n            }\r\n            .x2 {\r\n                left: 250px;\r\n                top:30px;\r\n                -webkit-transform: scale(0.6);\r\n                transform: scale(0.6);\r\n                opacity: 0.6; \r\n                -webkit-animation: moveclouds 25s linear infinite;\r\n                -moz-animation: moveclouds 25s linear infinite;\r\n                -o-animation: moveclouds 25s linear infinite;\r\n            }\r\n            .x3 {\r\n                left: 250px; bottom: -70px;\r\n\r\n                -webkit-transform: scale(0.6);\r\n                transform: scale(0.6);\r\n                opacity: 0.8; \r\n\r\n                -webkit-animation: moveclouds 25s linear infinite;\r\n                -moz-animation: moveclouds 25s linear infinite;\r\n                -o-animation: moveclouds 25s linear infinite;\r\n            }\r\n            .x4 {\r\n                left: 470px; botttom: 20px;\r\n\r\n                -webkit-transform: scale(0.75);\r\n                transform: scale(0.75);\r\n                opacity: 0.75;\r\n\r\n                -webkit-animation: moveclouds 18s linear infinite;\r\n                -moz-animation: moveclouds 18s linear infinite;\r\n                -o-animation: moveclouds 18s linear infinite;\r\n            }\r\n            .x5 {\r\n                left: 200px; top: 300px;\r\n\r\n                -webkit-transform: scale(0.5);\r\n                transform: scale(0.5);\r\n                opacity: 0.8; \r\n\r\n                -webkit-animation: moveclouds 20s linear infinite;\r\n                -moz-animation: moveclouds 20s linear infinite;\r\n                -o-animation: moveclouds 20s linear infinite;\r\n            }\r\n            @-webkit-keyframes moveclouds {\r\n                0% {margin-left: 1000px;}\r\n                100% {margin-left: -1000px;}\r\n            }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiWUFBWTtnQkFDSSwyQkFBMkI7Z0JBQzNCLFVBQVU7Z0JBQ1YscUJBQXFCO2dCQUNyQixnQkFBZ0I7Z0JBQ2hCLGdCQUFnQjtZQUNwQjtZQUNBO2dCQUNJLGtCQUFrQjtnQkFDbEIsY0FBYztnQkFDZCxrQkFBa0I7Z0JBQ2xCLFNBQVM7Z0JBQ1QsaUJBQWlCO1lBQ3JCO1lBQ0E7Z0JBQ0ksZ0JBQWdCO2dCQUNoQixrQkFBa0I7Z0JBQ2xCLHFCQUFxQjtnQkFDckIsVUFBVTtnQkFDVixhQUFhO2dCQUNiLG9CQUFvQjtZQUN4QjtZQUNBO2dCQUNJLGlCQUFpQjtnQkFDakIsYUFBYTtnQkFDYixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEIsY0FBYztnQkFDZCxnQkFBZ0I7WUFDcEI7WUFDQTtnQkFDSSxpQkFBaUI7Z0JBQ2pCLGFBQWE7Z0JBQ2Isa0JBQWtCO2dCQUNsQixlQUFlO1lBQ25CO1lBQ0E7Z0JBQ0ksZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLGtCQUFrQjtnQkFDbEIscUJBQXFCO2dCQUNyQix3QkFBd0I7Z0JBQ3hCLG9CQUFvQjtnQkFDcEIsVUFBVTtnQkFDVixXQUFXO2dCQUNYLGtCQUFrQjtnQkFDbEIscUJBQXFCO1lBQ3pCO1lBR0E7Z0JBQ0ksc0NBQXNDO2dCQUN0QyxrQkFBa0I7Z0JBQ2xCLHFCQUFxQjtnQkFDckIsWUFBWTtnQkFDWixZQUFZO2dCQUNaLFVBQVU7Z0JBQ1YsZUFBZTtnQkFDZixhQUFhO2dCQUNiLHFCQUFxQjtnQkFDckIscUJBQXFCO2dCQUNyQjtZQUNKO1lBQ0E7Z0JBQ0ksV0FBVztnQkFDWCxTQUFTO1lBQ2I7WUFFQTtnQkFDSSxVQUFVO2dCQUNWLFlBQVk7Z0JBQ1osMEJBQTBCO2dCQUMxQixXQUFXO2dCQUNYLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQixZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsWUFBWTtZQUNoQjtZQUVBO2dCQUNJLGdCQUFnQjtnQkFDaEIscUJBQXFCO2dCQUNyQixrQkFBa0I7Z0JBQ2xCLFlBQVk7Z0JBQ1osY0FBYztnQkFDZCxnQkFBZ0I7Z0JBQ2hCLDJCQUEyQjtZQUMvQjtZQUVBO2dCQUNJLFlBQVksRUFBRSxhQUFhOztnQkFFM0IsZ0JBQWdCO2dCQUNoQixpREFBaUQ7Z0JBSWpELG9EQUFvRDs7Z0JBRXBELG9CQUFvQjtnQkFDcEIsNEJBQTRCO2dCQUM1Qix5QkFBeUI7O2dCQUV6QixrQkFBa0I7Z0JBQ2xCLHVCQUF1QjtnQkFDdkIsVUFBVTtnQkFDVixtQkFBbUI7WUFDdkI7WUFFQTtnQkFDSSxXQUFXO2dCQUNYLGtCQUFrQjtnQkFDbEIsZ0JBQWdCO2dCQUNoQjtZQUNKO1lBRUE7Z0JBQ0ksWUFBWSxFQUFFLGFBQWE7Z0JBQzNCLFVBQVUsRUFBRSxVQUFVOztnQkFFdEIsb0JBQW9CO2dCQUNwQiw0QkFBNEI7Z0JBQzVCLHlCQUF5QjtZQUM3QjtZQUVBO2dCQUNJLFlBQVksRUFBRSxhQUFhO2dCQUMzQixVQUFVLEVBQUUsV0FBVzs7Z0JBRXZCLG9CQUFvQjtnQkFDcEIsNEJBQTRCO2dCQUM1Qix5QkFBeUI7WUFDN0I7WUFFQTtnQkFDSSxTQUFTO2dCQUNULFVBQVU7Z0JBQ1YsNkJBQTZCO2dCQUU3QixxQkFBcUI7Z0JBQ3JCLFlBQVk7Z0JBQ1osaURBQWlEO2dCQUNqRCw4Q0FBOEM7Z0JBQzlDLDRDQUE0QztZQUNoRDtZQUVBO2dCQUNJLFNBQVM7Z0JBQ1QsVUFBVTtnQkFDViw2QkFBNkI7Z0JBRTdCLHFCQUFxQjtnQkFDckIsaURBQWlEO2dCQUNqRCw4Q0FBOEM7Z0JBQzlDLDRDQUE0QztZQUNoRDtZQUVBO2dCQUNJLFdBQVc7Z0JBQ1gsUUFBUTtnQkFDUiw2QkFBNkI7Z0JBRTdCLHFCQUFxQjtnQkFDckIsWUFBWTtnQkFDWixpREFBaUQ7Z0JBQ2pELDhDQUE4QztnQkFDOUMsNENBQTRDO1lBQ2hEO1lBRUE7Z0JBQ0ksV0FBVyxFQUFFLGFBQWE7O2dCQUUxQiw2QkFBNkI7Z0JBRTdCLHFCQUFxQjtnQkFDckIsWUFBWTs7Z0JBRVosaURBQWlEO2dCQUNqRCw4Q0FBOEM7Z0JBQzlDLDRDQUE0QztZQUNoRDtZQUVBO2dCQUNJLFdBQVcsRUFBRSxhQUFhOztnQkFFMUIsOEJBQThCO2dCQUU5QixzQkFBc0I7Z0JBQ3RCLGFBQWE7O2dCQUViLGlEQUFpRDtnQkFDakQsOENBQThDO2dCQUM5Qyw0Q0FBNEM7WUFDaEQ7WUFFQTtnQkFDSSxXQUFXLEVBQUUsVUFBVTs7Z0JBRXZCLDZCQUE2QjtnQkFFN0IscUJBQXFCO2dCQUNyQixZQUFZOztnQkFFWixpREFBaUQ7Z0JBQ2pELDhDQUE4QztnQkFDOUMsNENBQTRDO1lBQ2hEO1lBRUE7Z0JBQ0ksSUFBSSxtQkFBbUIsQ0FBQztnQkFDeEIsTUFBTSxvQkFBb0IsQ0FBQztZQUMvQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgICAgICAgICBib2R5e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDE2LCA3NCwgNDgpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVWJ1bnR1JztcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6NzAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5je1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo4MCU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MTAwcHggYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuXzQwNHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5fMXtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpibG9jaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLl8ye1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50ZXh0e1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxOXB4IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgLyogdG9wOiAyNTYuMzAxcHg7ICovXHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yZW07XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIC5idG57XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoIDI1NSwgMjU1LCAyNTUgKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzNThweDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6cmdiKDE2LCA3NCwgNDgpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJpZ2h0e1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo2MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhye1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwcHg7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhyOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFwyMDIyXCI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0wLjc1ZW07XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC4yZW07XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTYsIDc0LCA0OCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5jbG91ZCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7IGhlaWdodDogMTIwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkYgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkYgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkYgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0ZGRiAxMDAlKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNGRkYgMTAwJSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDEyMHB4IGF1dG8gMjBweDtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6LTE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBlYXNlIDFzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2xvdWQ6YWZ0ZXIsIC5jbG91ZDpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogLTFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNsb3VkOmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDsgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTUwcHg7IGxlZnQ6IDUwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNsb3VkOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7IGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC05MHB4OyByaWdodDogNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMjAwcHg7XHJcbiAgICAgICAgICAgICAgICAtbW96LWJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAueDEge1xyXG4gICAgICAgICAgICAgICAgdG9wOi01MHB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDoxMDBweDtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xyXG4gICAgICAgICAgICAgICAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDAuMyk7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMyk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAxNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb246IG1vdmVjbG91ZHMgMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyAxNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAueDFfNXtcclxuICAgICAgICAgICAgICAgIHRvcDotODBweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6MjUwcHg7XHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC4zKTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjMpO1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVjbG91ZHMgMTdzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDE3cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb246IG1vdmVjbG91ZHMgMTdzIGxpbmVhciBpbmZpbml0ZTsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC54MiB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgIHRvcDozMHB4O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjsgXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb246IG1vdmVjbG91ZHMgMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAueDMge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMjUwcHg7IGJvdHRvbTogLTcwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNik7XHJcbiAgICAgICAgICAgICAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODsgXHJcblxyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IG1vdmVjbG91ZHMgMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDI1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb246IG1vdmVjbG91ZHMgMjVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLng0IHtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDQ3MHB4OyBib3R0dG9tOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC43NSk7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc1O1xyXG5cclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDE4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICAtbW96LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAxOHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgLW8tYW5pbWF0aW9uOiBtb3ZlY2xvdWRzIDE4cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC54NSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAyMDBweDsgdG9wOiAzMDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICAgICAgICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44OyBcclxuXHJcbiAgICAgICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgLW1vei1hbmltYXRpb246IG1vdmVjbG91ZHMgMjBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogbW92ZWNsb3VkcyAyMHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbW92ZWNsb3VkcyB7XHJcbiAgICAgICAgICAgICAgICAwJSB7bWFyZ2luLWxlZnQ6IDEwMDBweDt9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHttYXJnaW4tbGVmdDogLTEwMDBweDt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQC1tb3ota2V5ZnJhbWVzIG1vdmVjbG91ZHMge1xyXG4gICAgICAgICAgICAgICAgMCUge21hcmdpbi1sZWZ0OiAxMDAwcHg7fVxyXG4gICAgICAgICAgICAgICAgMTAwJSB7bWFyZ2luLWxlZnQ6IC0xMDAwcHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEAtby1rZXlmcmFtZXMgbW92ZWNsb3VkcyB7XHJcbiAgICAgICAgICAgICAgICAwJSB7bWFyZ2luLWxlZnQ6IDEwMDBweDt9XHJcbiAgICAgICAgICAgICAgICAxMDAlIHttYXJnaW4tbGVmdDogLTEwMDBweDt9XHJcbiAgICAgICAgICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div id=\"clouds\">\n  <div class=\"cloud x1\"></div>\n  <div class=\"cloud x1_5\"></div>\n  <div class=\"cloud x2\"></div>\n  <div class=\"cloud x3\"></div>\n  <div class=\"cloud x4\"></div>\n  <div class=\"cloud x5\"></div>\n</div>\n<div class='c'>\n  <div class='_404'>404</div>\n  <hr>\n  <div class='_1'>HALAMAN INI</div>\n  <div class='_2'>TIDAK DITEMUKAN</div>\n  <br>\n  <a class='btn' href='#'>Kembali ke Beranda</a>\n</div>\n\n</body>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navbar.service */ "./src/app/navbar.service.ts");
/* harmony import */ var _footer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer.service */ "./src/app/footer.service.ts");




var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(nav, foot) {
        this.nav = nav;
        this.foot = foot;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.nav.hide();
        this.foot.hide();
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"],
            _footer_service__WEBPACK_IMPORTED_MODULE_3__["FooterService"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/program.service.ts":
/*!************************************!*\
  !*** ./src/app/program.service.ts ***!
  \************************************/
/*! exports provided: ProgramService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramService", function() { return ProgramService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgramService = /** @class */ (function () {
    function ProgramService() {
    }
    ProgramService.prototype.getDokumentasi = function () {
        return [
            { "img": "../../assets/baginasi.jpg", "judul": "Kegiatan Bagi-Bagi Makanan", "deskripsi": "Salah satu realisasi dari program unggulan Tanam Pahala adalah Program Bagi-Bagi Makanan yang kita bagikan kepada orang-orang kurang beruntung ditempat-tempat tertentu. Mudah-mudahan semua Sahabat Tanam Pahala mendapatkan balasan dari apa yang didonasikan." },
            { "img": "../../assets/bagitakjil.jpg", "judul": "Kegiatan Bagi Takjil", "deskripsi": "Bagi Takjil merupakan salah satu dari sekian banyak bentuk kegiatan sosial yang Tanam Pahala laksanakan. Berbagai bentuk kegiatan yang berbau sosial juga akan dilaksanakan untuk menyambut bulan Ramadhan selain kegiatan bagi takjil ini." },
            { "img": "../../assets/ACT.jpg", "judul": "Bersama Membantu Sesama", "deskripsi": "Hasil donasi dari semua sahabat Tanam Pahala akan disalurkan untuk kegiatan sosial dan kegiatan peduli sesama. Semisal untuk membantu saudara-saudara kita yang sedang mendapatkan musibah. Tanam Pahala akan bergerak cepat berkolaborasi dengan organisasi berbasis sosial lainnya untuk memberikan bantuan." },
            { "img": "../../assets/Dok-botol2.jpg", "judul": "Donasi dari Sahabat Tanam Pahala", "deskripsi": "Salah satu dari sekian banyak Sahabat Tanam Pahala yang mendonasikan sampahnya dan mulai beramal. Untuk Sahabat Tanam Pahala bisa mendonasikan sampah berupa botol, kertas, kardus, dan pakaian yang sudah tidak terpakai. Untuk opsi lain bagi Sahabat Tanam Pahala yang tidak memiliki sampah seperti yang disebutkan juga bisa berdonasi dalam bentuk uang tunai langsung." }
        ];
    };
    ProgramService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgramService);
    return ProgramService;
}());



/***/ }),

/***/ "./src/app/program/program.component.css":
/*!***********************************************!*\
  !*** ./src/app/program/program.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2dyYW0vcHJvZ3JhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/program/program.component.html":
/*!************************************************!*\
  !*** ./src/app/program/program.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Program Tanam Pahala</title>\n<body>\n\t<div class=\"row\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"col s12 m12 l12 xl16\">\n\t\t\t\t<a class=\"\" href=\"#\"><i class=\"material-icons\" style=\"color:#004d40; font-size:36px; padding-top:10px\">assignment</i><b id=\"prr\">Program Unggulan</b></a>\n\t\t\t\t<p id=\"textp\">Program-Program unggulan tanam pahala yang akan membantu memfasilitasi sahabat tanam pahala untuk beramal dan investasi. Sesuatu yang sudah biasa kita semua anggap tidak berharga yaitu sampah dapat kita putar menjadi sesuatu yang sangat bernilai. Barang yang dapat didonasikan dapat berupa sampah plastik, sampah kertas, sampah kardus maupun dalam bentuk baju bekas.</p>\n\t\t\t\t<div><img class=\"responsive-img\" src=\"../../assets/distribusi.png\" style=\"margin-top:15px;margin-bottom:50px;\"></div>\n\t\t\t</div><br>\n\t\t\t<br>\n\t\t\t<div class=\"col s12 m12 l4 xl4\" style=\"margin-bottom:50px;\">\n\t\t\t\t<div id=\"imgg\"><img src=\"../../assets/icon_sampah_pahala.png\"></div>\n\t\t\t\t<h3 class=\"center\" id=\"prrr\">Program<br>\n\t\t\t\tSampah Amal</h3>\n\t\t\t\t<p id=\"textp\">Sampah Amal merupakan program komunitas Tanam Pahala yang memanfaatkan sampah daur ulang dan baju bekas untuk diinvestasikan dalam bentuk usaha yang diorientasikan pada berbagai kegiatan sosial.</p>\n\t\t\t</div>\n\t\t\t<div class=\"col s12 m12 l4 xl4\" style=\"margin-bottom:50px;\">\n\t\t\t\t<div id=\"imgg\"><img src=\"../../assets/koin.png\"></div>\n\t\t\t\t<h3 class=\"center\" id=\"prrr\">Program<br>\n\t\t\t\tCelengan Amal</h3>\n\t\t\t\t<p id=\"textp\">Untuk teman-teman yang tidak memiliki sampah botol atau kertas namun sangat ingin berkolaborasi bersama untuk berbagi, bisa menggunakan uang receh sebagai donasi. Seluruh donasi yang teman-teman berikan akan kami investasikan dan keuntungannya akan diorientasikan untuk umat, terkhusus dibidang sosial.</p>\n\t\t\t</div>\n\t\t\t<div class=\"col s12 m12 l4 xl4\" style=\"margin-bottom:50px;\">\n\t\t\t\t<div id=\"imgg\"><img src=\"../../assets/koin.png\"></div>\n\t\t\t\t<h3 class=\"center\" id=\"prrr\">Realisasi<br>\n\t\t\t\tProgram</h3>\n\t\t\t\t<p id=\"textp\">Hasil dari donasi semua Sahabat Tanam Pahala akan di realisasikan dalam bentuk kegiatan kemanusiaan diantaranya pembagian takjil saat bulan Ramadhan, buka bersama teman-teman kita yang kurang beruntung, sosialisasi keberbagai sekolah dipedesaan, sumbangan kepada keluarga kita baik dalam lingkup Nasional maupun Internasional.</p>\n\t\t\t</div>\n\t\t\t<div class=\"col s12 m12 l12 xl12\">\n\t\t\t\t<a class=\"\" href=\"#\"><i class=\"material-icons\" style=\"color:#004d40; font-size:36px; margin-top:50px\">folder_open</i><b id=\"prr\">Dokumentasi Program</b></a>\n\t\t\t</div>\n\t\t</div>\n\t</div><br>\n\t<!-- Content Dokumentasi-->\n\n\t<div *ngFor=\"let dokumentasi of dokumentasis\">\n\t\t<!-- Content Dokumentasi 1-->\n\t\t<div class=\"row\" style=\"margin-bottom:30px;\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"col s12 m12 l3 xl3\">\n\t\t\t\t\t<img src=\"{{dokumentasi.img}}\" \n\t\t\t\t\tstyle=\"align:left;width:150px;height:150px;border-radius:2%\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col s12 m12 l9 xl9\">\n\t\t\t\t\t<h5 id=\"prrr\">{{dokumentasi.judul}}</h5>\n\t\t\t\t\t<p id=\"textp\">{{dokumentasi.deskripsi}}</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\t<br>\n\t<!-- Manfaat-->\n\t<div class=\"row\">\n\t\t<div class=\"container\">\n\t\t\t<a class=\"\" href=\"#\"><i class=\"material-icons\" style=\"margin-top:30px;color:rgb(16, 74, 48); font-size:36px\">check_circle</i><b id=\"prr\">Manfaat yang Didapatkan</b></a>\n\t\t\t<p id=\"textp\">Banyak manfaat yang kita dapatkan jika kita ikut aktif berpartisipasi dalam Program Tanam Pahala diantaranya kita turut melestarikan lingkungan dari sampah yang kita donasikan , menumbuhkan kepekaan sosial, Amal Jariyah, dan mendukung kegiatan sosial. Kegiatan sosial diantaranya mendukung kegiatan buka puasa, berbagi nasi bungkus, membantu pasien yang kurang mampu. Untuk nominal dan kuantitasnya Sahabat Tanam Pahala tidak perlu khawatir, sekecil apapun pemberian dari Sahabat Tanam Pahala pasti akan sangat bermanfaat bagi sesama. Jadi, mari bersama Tanam Pahala mewujudkan masyarakat yang peduli sesama.</p><br>\n\t\t\t<p class=\"center\" id=\"khh\">TUHAN<br>\n\t\t\tSering kali memberesi urusan kita<br>\n\t\t\tDisaat kita memberesi urusan orang lain</p>\n\t\t\t<p class=\"center\" id=\"kh\">Dr. KH. Achmad Hasyim Muzadi</p>\n\t\t</div>\n\t</div><!-- /CONTENT -->\n</body>"

/***/ }),

/***/ "./src/app/program/program.component.ts":
/*!**********************************************!*\
  !*** ./src/app/program/program.component.ts ***!
  \**********************************************/
/*! exports provided: ProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramComponent", function() { return ProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _program_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../program.service */ "./src/app/program.service.ts");



var ProgramComponent = /** @class */ (function () {
    function ProgramComponent(_programService) {
        this._programService = _programService;
        this.dokumentasis = [];
    }
    ProgramComponent.prototype.ngOnInit = function () {
        this.dokumentasis = this._programService.getDokumentasi();
    };
    ProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-program',
            template: __webpack_require__(/*! ./program.component.html */ "./src/app/program/program.component.html"),
            styles: [__webpack_require__(/*! ./program.component.css */ "./src/app/program/program.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_program_service__WEBPACK_IMPORTED_MODULE_2__["ProgramService"]])
    ], ProgramComponent);
    return ProgramComponent;
}());



/***/ }),

/***/ "./src/app/tentang-kami/tentang-kami.component.css":
/*!*********************************************************!*\
  !*** ./src/app/tentang-kami/tentang-kami.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbnRhbmcta2FtaS90ZW50YW5nLWthbWkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tentang-kami/tentang-kami.component.html":
/*!**********************************************************!*\
  !*** ./src/app/tentang-kami/tentang-kami.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<title>Tentang Tanam Pahala</title>\n<body>\n\t<br>\n\t<div class=\"row\">\n\t\t<div class=\"container s12 m12 l12 xl16\">\n\t\t\t<div class=\"content\">\n\t\t\t\t<div id=\"judul\">\n\t\t\t\t\t<a class=\"\" href=\"#\"><i class=\"material-icons\" style=\"color:#004d40; font-size:36px; padding-top:10px\">turned_in_not</i><b id=\"prr\">Tentang Tanam Pahala</b></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col s12 m12 l12 xl12\" id=\"about-image\"><img src=\"../../assets/logotp.png\"></div><!-- gg ->\n            <div id=\"gamar\">\n                <p align=\"center\">\n                    <img class=\"responsive-img\"style=\"text-align:center;height:600px;widht:1140px;padding:20px\" src=\"asset/logotp.png\">\n                </p>\n            </div>\n            <!== gg-->\n\t\t\t\t<p id=\"textp\">Tanam Pahala merupakan Starategi Pengelolaan Sampah Berbasis Sociopreneur Dengan Merangkul Pemuda Sebagai Solusi Untuk Pemecahan Permasalahan Lingkungan di Indonesia.</p>\n\t\t\t\t<p id=\"textp\">Proyek sosial tanam pahala merupakan proyek berbasis komunitas yang memiliki target utama yaitu mahasiwa yang ada di seluruh Indonesia dengan program unggulan yakni sampah amal. Sampah amal merupakan program komunitas tanam pahala yang memanfaatkan sampah anorganik seperti sampah botol dan gelas plastik, kertas, kardus dan baju bekas dari mahasiswa kemudian diinvestasikan dalam bentuk usaha yang keuntungannya diorientasikan ke berbagai kegiatan sosial.</p>\n\t\t\t\t<p id=\"textp\">Dengan demikian maka kebermanfaatan dari penyumbang akan berlipat ganda dan memiliki proyeksi jangka panjang karena keuntungan akan terus diputar atau dapat disebut sebagai program amal jariyah selama proyek ini terus berjalan.</p><!-- /Konten Utama-->\n\t\t\t\t<!-- Container Visi Misi-->\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<div id=\"visimisi\">\n\t\t\t\t\t<p id=\"prr\">VISI</p>\n\t\t\t\t\t<p id=\"textp\">Komunitas berskala nasional yang merangkul seluruh lapisan masyarakat menggunakan pendekatan investasi amal dalam upaya edukasi publik pembentukan karakter sociopreneurship dan peduli lingkungan.</p>\n\t\t\t\t\t<p id=\"prr\">MISI</p>\n\t\t\t\t\t<div id=\"textp\">\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t\t<ol>\n\t\t\t\t\t\t\t<li>Menjalin kemitraan dengan berbagai pihak atau institusi negara dan komuntas berbasil sosial lainnya</li>\n\t\t\t\t\t\t\t<li>Menjalin kemitraan dengan berbagai pihak atau instansi penghasil sampah</li>\n\t\t\t\t\t\t\t<li>Membentuk karakter sociopreneurship dalam lingkungan masyarakat</li>\n\t\t\t\t\t\t\t<li>Menjalin kemitraan bisnis dengan unit-unit usaha</li>\n\t\t\t\t\t\t\t<li>Membuka lapangan pekerjaan baru dan mengurangi angka pengangguran</li>\n\t\t\t\t\t\t</ol>\n\t\t\t\t\t\t<p></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div><br>\n\t\t\t\t<br>\n\t\t\t\t<div id=\"ourculture\">\n\t\t\t\t\t<p id=\"prr\">BUDAYA KAMI</p>\n\t\t\t\t\t<h4><strong>IKHLAS</strong></h4>\n\t\t\t\t\t<p id=\"textp\">Ikhlas, maksudnya penerapan dalam bekerja dan mengabdi untuk umat. Iklhas merupakan hal utama yang selalu kami pegang dan kami terapkan, karena semua yang dimulai dari ikhlas akan berjalan dengan baik.</p>\n\t\t\t\t\t<h4>TEKUN</h4>\n\t\t\t\t\t<p id=\"textp\">Semangat dalam menjalankan setiap program komunitas, semua yang sudah dimulai akan selalu kami perjuangkan dengan rasa syukur dan semangat.</p>\n\t\t\t\t\t<h4>OPTIMIS</h4>\n\t\t\t\t\t<p id=\"textp\">Berpikir positif kedepan dalam menghadapi segala medan permasalahan, dan menangani permasalahan dengan rasa tanggung jawab yang besar.</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div><!-- Container Visi Misi-->\n</body>"

/***/ }),

/***/ "./src/app/tentang-kami/tentang-kami.component.ts":
/*!********************************************************!*\
  !*** ./src/app/tentang-kami/tentang-kami.component.ts ***!
  \********************************************************/
/*! exports provided: TentangKamiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TentangKamiComponent", function() { return TentangKamiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TentangKamiComponent = /** @class */ (function () {
    function TentangKamiComponent() {
    }
    TentangKamiComponent.prototype.ngOnInit = function () {
    };
    TentangKamiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tentang-kami',
            template: __webpack_require__(/*! ./tentang-kami.component.html */ "./src/app/tentang-kami/tentang-kami.component.html"),
            styles: [__webpack_require__(/*! ./tentang-kami.component.css */ "./src/app/tentang-kami/tentang-kami.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TentangKamiComponent);
    return TentangKamiComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Galang\WebstormProjects\TanamPahala_Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map