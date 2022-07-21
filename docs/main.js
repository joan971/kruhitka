"use strict";
(self["webpackChunkngshop"] = self["webpackChunkngshop"] || []).push([["main"],{

/***/ 9576:
/*!**********************************************!*\
  !*** ./apps/ngshop/src/app/app.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _redbits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/users */ 2852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/header/header.component */ 2017);
/* harmony import */ var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/messages/messages.component */ 8619);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/footer/footer.component */ 4628);







class AppComponent {
    constructor(usersService) {
        this.usersService = usersService;
        this.title = 'ngshop';
    }
    ngOnInit() {
        this.usersService.initAppSession();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_redbits_users__WEBPACK_IMPORTED_MODULE_0__.UsersService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["eshop-root"]], decls: 5, vars: 0, consts: [[1, "container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "eshop-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "eshop-messages");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "eshop-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_2__.MessagesComponent, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent], encapsulation: 2 });


/***/ }),

/***/ 4748:
/*!*******************************************!*\
  !*** ./apps/ngshop/src/app/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _libs_orders_src_lib_orders_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../libs/orders/src/lib/orders.module */ 6108);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 9576);
/* harmony import */ var _nx_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nx-welcome.component */ 6553);
/* harmony import */ var _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home-page/home-page.component */ 7721);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/header/header.component */ 2017);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/footer/footer.component */ 4628);
/* harmony import */ var _redbits_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @redbits/ui */ 9142);
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/accordion */ 5456);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/nav/nav.component */ 5721);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/messages/messages.component */ 8619);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var _redbits_products__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @redbits/products */ 3142);
/* harmony import */ var _redbits_users__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @redbits/users */ 2852);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-stripe */ 1809);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);


























const routes = [
    { path: '', component: _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent },
];
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [
        primeng_api__WEBPACK_IMPORTED_MODULE_12__.MessageService,
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS, useClass: _redbits_users__WEBPACK_IMPORTED_MODULE_10__.JwtInterceptor, multi: true }
    ], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _redbits_products__WEBPACK_IMPORTED_MODULE_9__.ProductsModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forRoot(routes),
            _redbits_ui__WEBPACK_IMPORTED_MODULE_6__.UiModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            primeng_accordion__WEBPACK_IMPORTED_MODULE_17__.AccordionModule,
            _libs_orders_src_lib_orders_module__WEBPACK_IMPORTED_MODULE_0__.OrdersModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_18__.ToastModule,
            _redbits_users__WEBPACK_IMPORTED_MODULE_10__.UsersModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreModule.forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsModule.forRoot([]),
            ngx_stripe__WEBPACK_IMPORTED_MODULE_21__.NgxStripeModule.forRoot('pk_test_51IUDnGKAfI2qPdhfXRsBJan4VHKdsG6Ej73au6i5GSC8hODDZJvNIhPxKoX7GJng1QwVsRhYZDCPkjEQ3AcrXAfN00p0ww86kB'),
            //NgbModule
            //NgModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _nx_welcome_component__WEBPACK_IMPORTED_MODULE_2__.NxWelcomeComponent, _pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__.HomePageComponent,
        _shared_header_header_component__WEBPACK_IMPORTED_MODULE_4__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__.NavComponent, _shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _redbits_products__WEBPACK_IMPORTED_MODULE_9__.ProductsModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule, _redbits_ui__WEBPACK_IMPORTED_MODULE_6__.UiModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
        primeng_accordion__WEBPACK_IMPORTED_MODULE_17__.AccordionModule,
        _libs_orders_src_lib_orders_module__WEBPACK_IMPORTED_MODULE_0__.OrdersModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_18__.ToastModule,
        _redbits_users__WEBPACK_IMPORTED_MODULE_10__.UsersModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_19__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_20__.EffectsRootModule, ngx_stripe__WEBPACK_IMPORTED_MODULE_21__.NgxStripeModule], exports: [_shared_messages_messages_component__WEBPACK_IMPORTED_MODULE_8__.MessagesComponent] }); })();


/***/ }),

/***/ 6553:
/*!*****************************************************!*\
  !*** ./apps/ngshop/src/app/nx-welcome.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NxWelcomeComponent": () => (/* binding */ NxWelcomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

/* eslint-disable */
class NxWelcomeComponent {
    constructor() { }
    ngOnInit() { }
}
NxWelcomeComponent.ɵfac = function NxWelcomeComponent_Factory(t) { return new (t || NxWelcomeComponent)(); };
NxWelcomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NxWelcomeComponent, selectors: [["redbits-nx-welcome"]], decls: 0, vars: 0, template: function NxWelcomeComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 7721:
/*!********************************************************************!*\
  !*** ./apps/ngshop/src/app/pages/home-page/home-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageComponent": () => (/* binding */ HomePageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _libs_ui_src_lib_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../libs/ui/src/lib/banner/banner.component */ 4794);
/* harmony import */ var _libs_products_src_lib_components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/products/src/lib/components/categories-banner/categories-banner.component */ 5934);
/* harmony import */ var _libs_products_src_lib_components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../libs/products/src/lib/components/featured-products/featured-products.component */ 6633);




class HomePageComponent {
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["eshop-home-page"]], decls: 3, vars: 0, template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ui-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "products-categories-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "products-featured-products");
    } }, directives: [_libs_ui_src_lib_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent, _libs_products_src_lib_components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesBannerComponent, _libs_products_src_lib_components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_2__.FeaturedProductsComponent], encapsulation: 2 });


/***/ }),

/***/ 4628:
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/footer/footer.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["eshop-footer"]], decls: 73, vars: 0, consts: [[1, "payment"], [1, "col-3", "col-offset-9"], ["src", "assets/images/american.png", "alt", ""], ["src", "assets/images/visa.png", "alt", ""], [1, "container"], [1, "row"], [1, "footer-col"], ["href", "#"], [1, "social-links"], ["href", "https://www.facebook.com/"], [1, "pi", "pi-facebook"], ["href", "https://www.twitter.com/"], [1, "pi", "pi-twitter"], ["href", "https://www.instagram.com/"], [1, "pi", "pi-instagram"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Payment Accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Our services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Privacy policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Affiliate program");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "get help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "FAQ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Returns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Order status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Payment options");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "online shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Wings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Crown");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Hair hoop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Hair clips");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "follow us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "All rights reserved. KruhitkaLove \u00A9, Ukraine 2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 2017:
/*!***************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/header/header.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../nav/nav.component */ 5721);
/* harmony import */ var _libs_products_src_lib_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/products/src/lib/components/products-search/products-search.component */ 4549);




class HeaderComponent {
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["eshop-header"]], decls: 10, vars: 0, consts: [[1, "grid", "p-3"], [1, "col-2"], ["routerLink", "/", 1, "logo"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "col-5", "p-5"], [1, "col-3", "p-4"], [1, "col-1", "p-5"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "eshop-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "product-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _libs_products_src_lib_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_1__.ProductsSearchComponent], encapsulation: 2 });


/***/ }),

/***/ 8619:
/*!*******************************************************************!*\
  !*** ./apps/ngshop/src/app/shared/messages/messages.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent)
/* harmony export */ });
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ 1122);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/toast */ 2802);






class MessagesComponent {
    constructor(messageService, cartService) {
        this.messageService = messageService;
        this.cartService = cartService;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(() => {
            this.messageService.add({
                severity: 'success',
                summary: 'Success',
                detail: 'Cart Updated!'
            });
        });
    }
}
MessagesComponent.ɵfac = function MessagesComponent_Factory(t) { return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_2__.MessageService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
MessagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MessagesComponent, selectors: [["eshop-messages"]], decls: 1, vars: 0, template: function MessagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-toast");
    } }, directives: [primeng_toast__WEBPACK_IMPORTED_MODULE_3__.Toast], encapsulation: 2 });


/***/ }),

/***/ 5721:
/*!*********************************************************!*\
  !*** ./apps/ngshop/src/app/shared/nav/nav.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _redbits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/users */ 2852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _libs_orders_src_lib_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../libs/orders/src/lib/components/cart-icon/cart-icon.component */ 1278);







function NavComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 11);
} }
function NavComponent_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavComponent_a_15_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.logoutUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        // eslint-disable-next-line @typescript-eslint/no-inferrable-types
        this.isLogging = false;
    }
    logoutUser() {
        this.isLogging = true;
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_users__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["eshop-nav"]], decls: 17, vars: 2, consts: [[1, "nav"], ["type", "checkbox", "id", "nav-check"], [1, "nav-btn"], ["for", "nav-check"], [1, "nav-links"], ["routerLink", "/"], ["routerLink", "/products"], ["routerLink", "/about"], ["class", "pi pi-user p-text-secondary", "style", "font-size: 1.5em; padding-left: 10px; cursor:pointer", "routerLink", "/login", 4, "ngIf"], ["class", "logout", 4, "ngIf"], [2, "padding-left", "10px", "cursor", "pointer"], ["routerLink", "/login", 1, "pi", "pi-user", "p-text-secondary", 2, "font-size", "1.5em", "padding-left", "10px", "cursor", "pointer"], [1, "logout"], [1, "pi", "pi-sign-out", 2, "font-size", "1.5em", "cursor", "pointer", "color", "#6C757D", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, NavComponent_i_14_Template, 1, 0, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, NavComponent_a_15_Template, 2, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "orders-cart-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLogging);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLogging);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _libs_orders_src_lib_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent], encapsulation: 2 });


/***/ }),

/***/ 7581:
/*!*****************************************************!*\
  !*** ./apps/ngshop/src/environments/environment.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4478:
/*!*********************************!*\
  !*** ./apps/ngshop/src/main.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4748);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 7581);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch((err) => console.error(err));


/***/ }),

/***/ 3629:
/*!*************************************!*\
  !*** ./environments/environment.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiURL: 'https://kruhitka-backend.herokuapp.com/api/v1/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 583:
/*!**********************************!*\
  !*** ./libs/orders/src/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersModule": () => (/* reexport safe */ _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__.OrdersModule),
/* harmony export */   "ordersRoutes": () => (/* reexport safe */ _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__.ordersRoutes),
/* harmony export */   "Order": () => (/* reexport safe */ _lib_model_order__WEBPACK_IMPORTED_MODULE_1__.Order),
/* harmony export */   "OrderItem": () => (/* reexport safe */ _lib_model_order_item__WEBPACK_IMPORTED_MODULE_2__.OrderItem),
/* harmony export */   "OrdersService": () => (/* reexport safe */ _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__.OrdersService),
/* harmony export */   "CART_KEY": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CART_KEY),
/* harmony export */   "CartService": () => (/* reexport safe */ _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService),
/* harmony export */   "Cart": () => (/* reexport safe */ _lib_model_cart__WEBPACK_IMPORTED_MODULE_5__.Cart),
/* harmony export */   "CartItem": () => (/* reexport safe */ _lib_model_cart__WEBPACK_IMPORTED_MODULE_5__.CartItem),
/* harmony export */   "CartItemDetailed": () => (/* reexport safe */ _lib_model_cart__WEBPACK_IMPORTED_MODULE_5__.CartItemDetailed)
/* harmony export */ });
/* harmony import */ var _lib_orders_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/orders.module */ 6108);
/* harmony import */ var _lib_model_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/order */ 169);
/* harmony import */ var _lib_model_order_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/model/order-item */ 8536);
/* harmony import */ var _lib_services_orders_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/services/orders.service */ 8531);
/* harmony import */ var _lib_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/services/cart.service */ 4296);
/* harmony import */ var _lib_model_cart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/model/cart */ 3533);








/***/ }),

/***/ 1278:
/*!*************************************************************************!*\
  !*** ./libs/orders/src/lib/components/cart-icon/cart-icon.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartIconComponent": () => (/* binding */ CartIconComponent)
/* harmony export */ });
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/badge */ 3758);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





class CartIconComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.cartCount = 0;
    }
    ngOnInit() {
        this.cartService.cart$.subscribe(cart => {
            var _a, _b;
            console.log(cart);
            this.cartCount = (_b = (_a = cart === null || cart === void 0 ? void 0 : cart.items) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
        });
    }
}
CartIconComponent.ɵfac = function CartIconComponent_Factory(t) { return new (t || CartIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CartIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartIconComponent, selectors: [["orders-cart-icon"]], decls: 1, vars: 1, consts: [["pBadge", "", "severity", "info", "routerLink", "/cart", 1, "pi", "pi-shopping-cart", "mr-4", "p-text-secondary", 2, "font-size", "1.5em", 3, "value"]], template: function CartIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx.cartCount);
    } }, directives: [primeng_badge__WEBPACK_IMPORTED_MODULE_2__.BadgeDirective, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 9954:
/*!*********************************************************************************!*\
  !*** ./libs/orders/src/lib/components/order-summary/order-summary.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSummaryComponent": () => (/* binding */ OrderSummaryComponent)
/* harmony export */ });
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9295);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4633);








function OrderSummaryComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function OrderSummaryComponent_div_21_Template_p_button_onClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.navigateToCheckout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class OrderSummaryComponent {
    constructor(cartService, ordersService, router) {
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.router = router;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
        this.isCheckout = false;
        this.router.url.includes('checkout') ? this.isCheckout = true : this.isCheckout = false;
    }
    ngOnInit() {
        this._getOrderSummary();
    }
    ngOnDestroy() {
        this.endSubs$.next('any');
        this.endSubs$.complete();
    }
    _getOrderSummary() {
        this.cartService.cart$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((cart) => {
            this.totalPrice = 0;
            if (cart) {
                cart.items.map((item) => {
                    this.ordersService
                        .getProduct(item.productId)
                        .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.take)(1))
                        .subscribe((product) => {
                        this.totalPrice += product.price * item.quantity;
                    });
                });
            }
        });
    }
    navigateToCheckout() {
        this.router.navigate(['/checkout']);
    }
}
OrderSummaryComponent.ɵfac = function OrderSummaryComponent_Factory(t) { return new (t || OrderSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
OrderSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderSummaryComponent, selectors: [["orders-order-summary"]], decls: 22, vars: 7, consts: [[1, "order-summary"], [1, "summary-price"], [1, "free"], [1, "to-checkout"], ["class", "checkout-button", 4, "ngIf"], [1, "checkout-button"], ["label", "Checkout", 3, "onClick"]], template: function OrderSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Order Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Items Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Packing & Shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Free");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Total Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, OrderSummaryComponent_div_21_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 3, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 5, ctx.totalPrice));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isCheckout);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 3533:
/*!*******************************************!*\
  !*** ./libs/orders/src/lib/model/cart.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart),
/* harmony export */   "CartItem": () => (/* binding */ CartItem),
/* harmony export */   "CartItemDetailed": () => (/* binding */ CartItemDetailed)
/* harmony export */ });
class Cart {
}
class CartItem {
}
class CartItemDetailed {
}


/***/ }),

/***/ 8536:
/*!*************************************************!*\
  !*** ./libs/orders/src/lib/model/order-item.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderItem": () => (/* binding */ OrderItem)
/* harmony export */ });
class OrderItem {
}


/***/ }),

/***/ 169:
/*!********************************************!*\
  !*** ./libs/orders/src/lib/model/order.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Order": () => (/* binding */ Order)
/* harmony export */ });
class Order {
}


/***/ }),

/***/ 6108:
/*!**********************************************!*\
  !*** ./libs/orders/src/lib/orders.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ordersRoutes": () => (/* binding */ ordersRoutes),
/* harmony export */   "OrdersModule": () => (/* binding */ OrdersModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/cart.service */ 4296);
/* harmony import */ var _components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/cart-icon/cart-icon.component */ 1278);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/badge */ 3758);
/* harmony import */ var _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/cart-page/cart-page.component */ 7275);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/inputnumber */ 5722);
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ 9954);
/* harmony import */ var _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/checkout-page/checkout-page.component */ 9714);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/thank-you/thank-you.component */ 213);
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ 6233);
/* harmony import */ var _redbits_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redbits/users */ 2852);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
























const ordersRoutes = [
    {
        path: 'cart',
        component: _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent
    },
    {
        path: 'checkout',
        canActivate: [_redbits_users__WEBPACK_IMPORTED_MODULE_7__.AuthGuard],
        component: _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent
    },
    {
        path: 'success',
        component: _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent
    },
    {
        path: 'about',
        component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__.AboutUsComponent
    }
];
class OrdersModule {
    constructor(cartService) {
        cartService.initCartLocalStorage();
    }
}
OrdersModule.ɵfac = function OrdersModule_Factory(t) { return new (t || OrdersModule)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
OrdersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: OrdersModule });
OrdersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            primeng_badge__WEBPACK_IMPORTED_MODULE_10__.BadgeModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(ordersRoutes),
            primeng_card__WEBPACK_IMPORTED_MODULE_12__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
            primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__.InputNumberModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](OrdersModule, { declarations: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent,
        _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent,
        _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent,
        _pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent,
        _pages_thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_5__.ThankYouComponent,
        _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__.AboutUsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_10__.BadgeModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, primeng_card__WEBPACK_IMPORTED_MODULE_12__.CardModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputTextModule,
        primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__.InputNumberModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_16__.ButtonModule], exports: [_components_cart_icon_cart_icon_component__WEBPACK_IMPORTED_MODULE_1__.CartIconComponent,
        _pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_pages_cart_page_cart_page_component__WEBPACK_IMPORTED_MODULE_2__.CartPageComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_15__.InputNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe]);
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_pages_checkout_page_checkout_page_component__WEBPACK_IMPORTED_MODULE_4__.CheckoutPageComponent, [primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_3__.OrderSummaryComponent], []);


/***/ }),

/***/ 6233:
/*!******************************************************************!*\
  !*** ./libs/orders/src/lib/pages/about-us/about-us.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutUsComponent": () => (/* binding */ AboutUsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AboutUsComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["orders-about-us"]], decls: 11, vars: 0, consts: [[1, "about-page"], [1, "grid"], [1, "col-12", "md:col-3"], ["src", "assets/images/teamPic.jpg", "alt", "", 1, "img-about"], [1, "col-12", "md:col-9", "md:text-center"], [1, "about"], [1, "odessa"], ["src", "assets/images/odessa.PNG", "alt", "", 1, "odessa", 2, "width", "800px"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Juliia and Nataliia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "We are grateful to everyone who makes an order now, your support is very important to us and our country. Making your order, we feel that someone in the world becomes happy and this raises confidence that there will be peace in the world Part of the money from orders will go to help the children of our country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ 7275:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/cart-page/cart-page.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartPageComponent": () => (/* binding */ CartPageComponent)
/* harmony export */ });
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);






function CartPageComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CartPageComponent_div_11_Template_p_button_onClick_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.deleteCartItem(cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p-inputNumber", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CartPageComponent_div_11_Template_p_inputNumber_ngModelChange_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; return cartItem_r1.quantity = $event; })("onInput", function CartPageComponent_div_11_Template_p_inputNumber_onInput_14_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const cartItem_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.updateCartItemQuantity($event, cartItem_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Subtotal : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](19, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cartItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", cartItem_r1.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("alt", cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](cartItem_r1.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 10, cartItem_r1.product.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showButtons", true)("inputId", cartItem_r1.product.id)("min", 1)("max", 10)("ngModel", cartItem_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](19, 12, cartItem_r1.product.price * cartItem_r1.quantity));
} }
class CartPageComponent {
    constructor(router, cartService, ordersService) {
        this.router = router;
        this.cartService = cartService;
        this.ordersService = ordersService;
        this.cartItemsDetailed = [];
        this.cartCount = 0;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this._getCartDetails();
    }
    ngOnDestroy() {
        this.endSubs$.next('any');
        this.endSubs$.complete();
    }
    _getCartDetails() {
        this.cartService.cart$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe(respCart => {
            var _a, _b;
            this.cartItemsDetailed = [];
            this.cartCount = (_b = (_a = respCart === null || respCart === void 0 ? void 0 : respCart.items) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
            respCart.items.forEach(cartItem => {
                this.ordersService.getProduct(cartItem.productId).subscribe((respProduct) => {
                    this.cartItemsDetailed.push({
                        product: respProduct,
                        quantity: cartItem.quantity
                    });
                });
            });
        });
    }
    backToShop() {
        this.router.navigate(['/products']);
    }
    deleteCartItem(cartItem) {
        this.cartService.deleteCartItem(cartItem.product.id);
    }
    updateCartItemQuantity(event, cartItem) {
        this.cartService.setCartItem({
            productId: cartItem.product.id,
            quantity: event.value
        }, true);
    }
}
CartPageComponent.ɵfac = function CartPageComponent_Factory(t) { return new (t || CartPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersService)); };
CartPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CartPageComponent, selectors: [["orders-cart-page"]], decls: 14, vars: 2, consts: [[1, "cart-page"], [1, "grid"], [1, "col-8"], ["styleClass", "ml-5 mb-5", "label", "Continue shopping", "icon", "pi pi-arrow-left", 3, "onClick"], [1, "cart-shipping", "m-5"], ["class", "cart-item m-5", "style", "max-width:100%; height: 200px;", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "cart-item", "m-5", 2, "max-width", "100%", "height", "200px"], [1, "col-2", "cart-item-image"], [2, "width", "150px", "height", "150px", 3, "src"], [1, "col-5"], [1, "cart-item-name", 2, "text-align", "center"], [1, "col-3", "cart-item-price"], [1, "col-2", "cart-item-remove", 2, "text-align", "end", "padding-right", "15px"], ["icon", "pi pi-trash", 3, "onClick"], [1, "col-12"], [1, "field", "cart-item-quantity", 2, "text-align", "end", "margin-top", "-200px"], ["mode", "decimal", 3, "showButtons", "inputId", "min", "max", "ngModel", "ngModelChange", "onInput"], [1, "cart-item-subtotal", 2, "text-align", "end"], [1, "cart-item-subtotal-value"]], template: function CartPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onClick", function CartPageComponent_Template_p_button_onClick_4_listener() { return ctx.backToShop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Shipping after the payment, Delivery time : 1 to 4 working days ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CartPageComponent_div_11_Template, 20, 14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" My cart : ", ctx.cartCount, " Item(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.cartItemsDetailed);
    } }, encapsulation: 2 });


/***/ }),

/***/ 9714:
/*!****************************************************************************!*\
  !*** ./libs/orders/src/lib/pages/checkout-page/checkout-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutPageComponent": () => (/* binding */ CheckoutPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var _redbits_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redbits/users */ 2852);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-stripe */ 1809);












function CheckoutPageComponent_small_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Name is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_14_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutPageComponent_small_14_span_1_Template, 2, 0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.form.controls.email.errors.required);
} }
function CheckoutPageComponent_small_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Phone is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Street is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Zip Code is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "City is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function CheckoutPageComponent_small_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Country is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class CheckoutPageComponent {
    constructor(router, formBuilder, usersService, cartService, stripeService, ordersService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.usersService = usersService;
        this.cartService = cartService;
        this.stripeService = stripeService;
        this.ordersService = ordersService;
        this.isSubmitted = false;
        this.editmode = false;
        this.orderItems = [];
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    }
    ngOnInit() {
        this._initCheckoutForm();
        this._getCartItems();
        this._autoFillUserData();
    }
    ngOnDestroy() {
        this.unsubscribe$.next('any');
        this.unsubscribe$.complete();
    }
    _initCheckoutForm() {
        this.checkoutFormGroup = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            apartment: [''],
            zip: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
    }
    _autoFillUserData() {
        this.usersService.observeCurrentUser().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.unsubscribe$)).subscribe((user) => {
            if (user) {
                this.userId = user.id;
                this.checkoutForm.name.setValue(user.name);
                this.checkoutForm.email.setValue(user.email);
                this.checkoutForm.phone.setValue(user.phone);
                this.checkoutForm.city.setValue(user.city);
                this.checkoutForm.street.setValue(user.street);
                this.checkoutForm.country.setValue(user.country);
                this.checkoutForm.zip.setValue(user.zip);
                this.checkoutForm.apartment.setValue(user.apartment);
            }
        });
    }
    _getCartItems() {
        const cart = this.cartService.getCart();
        this.orderItems = cart.items.map(item => {
            return {
                product: item.productId,
                quantity: item.quantity,
            };
        });
    }
    get checkoutForm() {
        return this.checkoutFormGroup.controls;
    }
    backToCart() {
        this.router.navigate(['/cart']);
    }
    placeOrder() {
        this.isSubmitted = true;
        if (this.checkoutFormGroup.invalid) {
            return;
        }
        const order = {
            orderItems: this.orderItems,
            shippingAddress1: this.checkoutForm.street.value,
            shippingAddress2: this.checkoutForm.apartment.value,
            city: this.checkoutForm.city.value,
            zip: this.checkoutForm.zip.value,
            country: this.checkoutForm.country.value,
            phone: this.checkoutForm.phone.value,
            status: 0,
            user: this.userId,
            dateOrdered: `${Date.now()}`
        };
        this.ordersService.cacheOrderData(order);
        this.ordersService.createCheckoutSession(this.orderItems).subscribe((error) => {
            if (error) {
                console.log('Error in redirect to payment');
            }
        });
    }
}
CheckoutPageComponent.ɵfac = function CheckoutPageComponent_Factory(t) { return new (t || CheckoutPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_users__WEBPACK_IMPORTED_MODULE_1__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_7__.StripeService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersService)); };
CheckoutPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckoutPageComponent, selectors: [["orders-checkout-page"]], decls: 42, vars: 8, consts: [[1, "checkout-page"], ["styleClass", "ml-5 mb-5", "label", "Back to cart", "icon", "pi pi-arrow-left", 3, "click"], [1, "grid", "checkout-form"], [1, "checkoutForm", "col-8"], [3, "formGroup"], [1, "p-fluid", "formgrid", "grid"], [1, "field", "col-12", "md:col-6", "mt-5"], [1, "p-inputgroup"], ["formControlName", "name", "type", "text", "pInputText", "", "placeholder", "Name"], ["class", "p-error", 4, "ngIf"], ["formControlName", "email", "type", "text", "pInputText", "", "placeholder", "Email"], [1, "field", "col-12", "md:col-4", "mt-5"], ["formControlName", "phone", "type", "text", "pInputText", "", "placeholder", "Phone"], [1, "field", "col-12", "md:col-12", "mt-5"], ["formControlName", "street", "type", "text", "pInputText", "", "placeholder", "Street"], ["formControlName", "apartment", "type", "text", "pInputText", "", "placeholder", "Apartment"], ["formControlName", "zip", "type", "text", "pInputText", "", "placeholder", "Zip Code"], ["formControlName", "city", "type", "text", "pInputText", "", "placeholder", "City"], ["formControlName", "country", "type", "text", "pInputText", "", "placeholder", "Country"], [1, "col-4"], [1, "checkout-button", "mt-5"], ["label", "Place-Order", 3, "click"], [1, "p-error"], [4, "ngIf"]], template: function CheckoutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p-button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutPageComponent_Template_p_button_click_2_listener() { return ctx.backToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, CheckoutPageComponent_small_10_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, CheckoutPageComponent_small_14_Template, 3, 1, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, CheckoutPageComponent_small_18_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CheckoutPageComponent_small_22_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, CheckoutPageComponent_small_29_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, CheckoutPageComponent_small_33_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, CheckoutPageComponent_small_37_Template, 2, 0, "small", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "orders-order-summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "p-button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutPageComponent_Template_p_button_click_41_listener() { return ctx.placeOrder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.checkoutFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.name.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.phone.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.street.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.zip.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.city.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.checkoutForm.country.invalid && ctx.isSubmitted);
    } }, encapsulation: 2 });


/***/ }),

/***/ 213:
/*!********************************************************************!*\
  !*** ./libs/orders/src/lib/pages/thank-you/thank-you.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThankYouComponent": () => (/* binding */ ThankYouComponent)
/* harmony export */ });
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);





class ThankYouComponent {
    constructor(orderService, cartService) {
        this.orderService = orderService;
        this.cartService = cartService;
    }
    ngOnInit() {
        const orderData = this.orderService.getCachedOrderData();
        this.orderService.createOrder(orderData).subscribe(() => {
            this.cartService.emptyCart();
            this.orderService.removeCachedOrderData();
        });
    }
}
ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) { return new (t || ThankYouComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.OrdersService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
ThankYouComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ThankYouComponent, selectors: [["orders-thank-you"]], decls: 7, vars: 0, consts: [[1, "checkout-page"], [1, "thankyou-page"], [1, "mb-8"], ["styleClass", "mb-8", "label", "Back to shop", "routerLink", "/"]], template: function ThankYouComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Thank you for Shopping with us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "We have received your order and it will be delivered to your address.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "p-button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [primeng_button__WEBPACK_IMPORTED_MODULE_2__.Button, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 4296:
/*!******************************************************!*\
  !*** ./libs/orders/src/lib/services/cart.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CART_KEY": () => (/* binding */ CART_KEY),
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


const CART_KEY = "cart";
class CartService {
    constructor() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getCart());
    }
    initCartLocalStorage() {
        const cart = this.getCart();
        if (!cart) {
            const initialCart = {
                items: [],
            };
            const initialCartJson = JSON.stringify(initialCart);
            localStorage.setItem(CART_KEY, initialCartJson);
        }
    }
    getCart() {
        const cartJsonString = localStorage.getItem(CART_KEY);
        const cart = JSON.parse(cartJsonString);
        return cart;
    }
    emptyCart() {
        const intialCart = {
            items: []
        };
        const intialCartJson = JSON.stringify(intialCart);
        localStorage.setItem(CART_KEY, intialCartJson);
        this.cart$.next(intialCart);
    }
    setCartItem(cartItem, updateCartItem) {
        const cart = this.getCart();
        const cartItemExist = cart.items.find((item) => item.productId === cartItem.productId);
        if (cartItemExist) {
            cart.items.map(item => {
                if (item.productId === cartItem.productId) {
                    if (updateCartItem) {
                        item.quantity = cartItem.quantity;
                    }
                    else {
                        item.quantity = item.quantity + cartItem.quantity;
                    }
                    return item;
                }
            });
        }
        else {
            cart.items.push(cartItem);
        }
        const cartJson = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJson);
        this.cart$.next(cart);
        return cart;
    }
    deleteCartItem(productId) {
        const cart = this.getCart();
        const newCart = cart.items.filter(item => item.productId !== productId);
        cart.items = newCart;
        const cartJsonString = JSON.stringify(cart);
        localStorage.setItem(CART_KEY, cartJsonString);
        this.cart$.next(cart);
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8531:
/*!********************************************************!*\
  !*** ./libs/orders/src/lib/services/orders.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrdersService": () => (/* binding */ OrdersService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 3629);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2673);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-stripe */ 1809);







class OrdersService {
    constructor(http, stripeService) {
        this.http = http;
        this.stripeService = stripeService;
        this.apiURLOrders = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'orders';
        this.apiURLProducts = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'products';
    }
    getOrders() {
        return this.http.get(this.apiURLOrders);
    }
    getOrder(orderId) {
        return this.http.get(`${this.apiURLOrders}/${orderId}`);
    }
    createOrder(order) {
        return this.http.post(this.apiURLOrders, order);
    }
    updateOrder(orderStatus, orderId) {
        return this.http.put(`${this.apiURLOrders}/${orderId}`, orderStatus);
    }
    deleteOrder(orderId) {
        return this.http.delete(`${this.apiURLOrders}/${orderId}`);
    }
    getOrdersCount() {
        return this.http
            .get(`${this.apiURLOrders}/get/count`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((objectValue) => objectValue.orderCount));
    }
    getTotalSales() {
        return this.http
            .get(`${this.apiURLOrders}/get/totalsales`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)((objectValue) => objectValue.totalsales));
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    createCheckoutSession(orderItem) {
        return this.http.post(`${this.apiURLOrders}/create-checkout-session`, orderItem).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.switchMap)((session) => {
            return this.stripeService.redirectToCheckout({ sessionId: session.id });
        }));
    }
    cacheOrderData(order) {
        localStorage.setItem('orderData', JSON.stringify(order));
    }
    getCachedOrderData() {
        return JSON.parse(localStorage.getItem('orderData'));
    }
    removeCachedOrderData() {
        localStorage.removeItem('orderData');
    }
}
OrdersService.ɵfac = function OrdersService_Factory(t) { return new (t || OrdersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_5__.StripeService)); };
OrdersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: OrdersService, factory: OrdersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3142:
/*!************************************!*\
  !*** ./libs/products/src/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* reexport safe */ _lib_products_module__WEBPACK_IMPORTED_MODULE_0__.ProductsModule),
/* harmony export */   "CategoriesService": () => (/* reexport safe */ _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__.CategoriesService),
/* harmony export */   "ProductsService": () => (/* reexport safe */ _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__.ProductsService),
/* harmony export */   "Category": () => (/* reexport safe */ _lib_models_category__WEBPACK_IMPORTED_MODULE_3__.Category),
/* harmony export */   "Product": () => (/* reexport safe */ _lib_models_product__WEBPACK_IMPORTED_MODULE_4__.Product)
/* harmony export */ });
/* harmony import */ var _lib_products_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/products.module */ 7125);
/* harmony import */ var _lib_services_categories_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services/categories.service */ 370);
/* harmony import */ var _lib_services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/services/products.service */ 3884);
/* harmony import */ var _lib_models_category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/category */ 8765);
/* harmony import */ var _lib_models_product__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/product */ 2211);







/***/ }),

/***/ 5934:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/categories-banner/categories-banner.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesBannerComponent": () => (/* binding */ CategoriesBannerComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/categories.service */ 370);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






function CategoriesBannerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", "/category/" + category_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](category_r1.name);
} }
class CategoriesBannerComponent {
    constructor(categoriesService) {
        this.categoriesService = categoriesService;
        this.categories = [];
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnInit() {
        this.categoriesService.getCategories().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((categories) => {
            this.categories = categories;
        });
    }
    ngOnDestroy() {
        this.endSubs$.next('any');
        this.endSubs$.complete();
    }
}
CategoriesBannerComponent.ɵfac = function CategoriesBannerComponent_Factory(t) { return new (t || CategoriesBannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService)); };
CategoriesBannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CategoriesBannerComponent, selectors: [["products-categories-banner"]], decls: 5, vars: 1, consts: [[1, "categories-banner", "mt-8"], [1, "grid"], ["class", "col-12 md:col-3 sm:col-6", 4, "ngFor", "ngForOf"], [1, "col-12", "md:col-3", "sm:col-6"], [1, "category", 3, "routerLink"], [1, "category-icon"], [1, "category-name"]], template: function CategoriesBannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Categories");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CategoriesBannerComponent_div_4_Template, 6, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], encapsulation: 2 });


/***/ }),

/***/ 6633:
/*!*******************************************************************************************!*\
  !*** ./libs/products/src/lib/components/featured-products/featured-products.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturedProductsComponent": () => (/* binding */ FeaturedProductsComponent)
/* harmony export */ });
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ 228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8951);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/products.service */ 3884);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);





function FeaturedProductsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "products-product-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("product", product_r1);
} }
class FeaturedProductsComponent {
    constructor(prodService) {
        this.prodService = prodService;
        this.products = [];
        this.endSubs$ = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    ngOnDestroy() {
        this.endSubs$.next;
        this.endSubs$.complete;
    }
    ngOnInit() {
        this._getFeaturedProducts();
    }
    _getFeaturedProducts() {
        this.prodService.getFeaturedProducts(4).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.endSubs$)).subscribe((products) => {
            this.products = products;
        });
    }
}
FeaturedProductsComponent.ɵfac = function FeaturedProductsComponent_Factory(t) { return new (t || FeaturedProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService)); };
FeaturedProductsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeaturedProductsComponent, selectors: [["products-featured-products"]], decls: 5, vars: 1, consts: [[1, "featured-products"], [1, "grid"], ["class", "col-12 md:col-3 sm:col-6", 4, "ngFor", "ngForOf"], [1, "col-12", "md:col-3", "sm:col-6"], [3, "product"]], template: function FeaturedProductsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Featured Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, FeaturedProductsComponent_div_4_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, encapsulation: 2 });


/***/ }),

/***/ 4493:
/*!*********************************************************************************!*\
  !*** ./libs/products/src/lib/components/product-item/product-item.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductItemComponent": () => (/* binding */ ProductItemComponent)
/* harmony export */ });
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var _redbits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redbits/products */ 3142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);







class ProductItemComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.product = _redbits_products__WEBPACK_IMPORTED_MODULE_1__.Product;
    }
    ngOnInit() {
    }
    addProductToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: 1
        };
        this.cartService.setCartItem(cartItem);
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
ProductItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["products-product-item"]], inputs: { product: "product" }, decls: 12, vars: 6, consts: [[1, "product-item"], [1, "product-item-wrapper"], [1, "card"], [1, "img"], ["width", "240", "alt", "", 1, "images", 3, "routerLink", "src"], [1, "info"], ["label", "Add to cart", "icon", "pi pi-shopping-cart", "iconPos", "right", "styleClass", "add-to-card mt-4 banner-button p-button-rounded p-button-primary", 3, "onClick"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ProductItemComponent_Template_p_button_onClick_11_listener() { return ctx.addProductToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", "/products/" + ctx.product.id)("src", ctx.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 4, ctx.product.price));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, primeng_button__WEBPACK_IMPORTED_MODULE_4__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 4549:
/*!***************************************************************************************!*\
  !*** ./libs/products/src/lib/components/products-search/products-search.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsSearchComponent": () => (/* binding */ ProductsSearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ProductsSearchComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductsSearchComponent.ɵfac = function ProductsSearchComponent_Factory(t) { return new (t || ProductsSearchComponent)(); };
ProductsSearchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductsSearchComponent, selectors: [["product-search"]], decls: 0, vars: 0, template: function ProductsSearchComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 8765:
/*!**************************************************!*\
  !*** ./libs/products/src/lib/models/category.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Category": () => (/* binding */ Category)
/* harmony export */ });
class Category {
}


/***/ }),

/***/ 2211:
/*!*************************************************!*\
  !*** ./libs/products/src/lib/models/product.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Product": () => (/* binding */ Product)
/* harmony export */ });
class Product {
}


/***/ }),

/***/ 9320:
/*!****************************************************************************!*\
  !*** ./libs/products/src/lib/pages/product-page/product-page.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductPageComponent": () => (/* binding */ ProductPageComponent)
/* harmony export */ });
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var _redbits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redbits/products */ 3142);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 8951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/rating */ 8887);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/inputnumber */ 5722);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/button */ 4633);













function ProductPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p-rating", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_div_0_Template_p_rating_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r1.product.rating = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p-inputNumber", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductPageComponent_div_0_Template_p_inputNumber_ngModelChange_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r3.quantity = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "p-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "p-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function ProductPageComponent_div_0_Template_p_button_onClick_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.addProductToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx_r0.product.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.product.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r0.product.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.product.rating)("cancel", false)("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 12, ctx_r0.product.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.quantity)("showButtons", true)("min", 1)("max", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r0.product.richDescription, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
class ProductPageComponent {
    constructor(prodService, route, cartService) {
        this.prodService = prodService;
        this.route = route;
        this.cartService = cartService;
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.quantity = 1;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['productid']) {
                this._getProduct(params['productid']);
            }
        });
    }
    ngOnDestroy() {
        this.endSubs$.next('any');
        this.endSubs$.complete();
    }
    addProductToCart() {
        const cartItem = {
            productId: this.product.id,
            quantity: this.quantity
        };
        this.cartService.setCartItem(cartItem);
    }
    _getProduct(id) {
        this.prodService.getProduct(id).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.endSubs$)).subscribe(resProd => {
            this.product = resProd;
        });
    }
}
ProductPageComponent.ɵfac = function ProductPageComponent_Factory(t) { return new (t || ProductPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_products__WEBPACK_IMPORTED_MODULE_1__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_orders__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
ProductPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductPageComponent, selectors: [["products-product-page"]], decls: 1, vars: 1, consts: [["class", "product-page", 4, "ngIf"], [1, "product-page"], [1, "grid"], [1, "col-12", "md:col-6"], [1, "img-about", 2, "width", "500px", "height", "320px", "display", "grid", "margin", "0 auto", "border-radius", "15px", 3, "src"], [1, "col-12", "md:col-6", "product"], [1, "product-name"], [1, "product-desc"], [1, "product-rating"], [3, "ngModel", "cancel", "disabled", "ngModelChange"], [1, "product-price"], [1, "product-quantity"], [1, "field", "col-12", "md:col-3", "p-0"], ["for", "quantity"], ["mode", "decimal", "inputId", "quantity", 3, "ngModel", "showButtons", "min", "max", "ngModelChange"], [1, "product-action"], ["label", "Buy now", "iconPos", "right", "styleClass", "mr-2 banner-button  p-button-rounded p-button-primary "], ["label", "Add to cart", "iconPos", "right", "styleClass", "add-to-card  banner-button  p-button-rounded p-button-primary ", 3, "onClick"], [1, "grid", "product-rich-desc"], [1, "col-12"], [3, "innerHTML"]], template: function ProductPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, ProductPageComponent_div_0_Template, 25, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.product);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_rating__WEBPACK_IMPORTED_MODULE_7__.Rating, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_9__.InputNumber, primeng_button__WEBPACK_IMPORTED_MODULE_10__.Button], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CurrencyPipe], encapsulation: 2 });


/***/ }),

/***/ 5739:
/*!******************************************************************************!*\
  !*** ./libs/products/src/lib/pages/products-list/products-list.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsListComponent": () => (/* binding */ ProductsListComponent)
/* harmony export */ });
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/products.service */ 3884);
/* harmony import */ var _redbits_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @redbits/products */ 3142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);







function ProductsListComponent_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p-checkbox", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_ngModelChange_1_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const category_r3 = restoredCtx.$implicit; return category_r3.checked = $event; })("onChange", function ProductsListComponent_div_2_div_3_Template_p_checkbox_onChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r6.categoryFilter(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", category_r3.checked)("binary", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("for", category_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](category_r3.name);
} }
function ProductsListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, ProductsListComponent_div_2_div_3_Template, 4, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.categories);
} }
function ProductsListComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "products-product-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("product", product_r8);
} }
function ProductsListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ProductsListComponent_div_4_div_1_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.products);
} }
class ProductsListComponent {
    constructor(prodService, catService, route) {
        this.prodService = prodService;
        this.catService = catService;
        this.route = route;
        this.products = [];
        this.categories = [];
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            params['categoryid'] ? this._getProducts([params['categoryid']]) : this._getProducts();
            params['categoryid'] ? (this.isCategoryPage = true) : (this.isCategoryPage = false);
        });
        this._getCategories();
    }
    _getProducts(categoriesFilter) {
        this.prodService.getProducts(categoriesFilter).subscribe((product) => {
            this.products = product;
        });
    }
    _getCategories() {
        this.catService.getCategories().subscribe((category) => {
            this.categories = category;
        });
    }
    categoryFilter() {
        const selectedCategories = this.categories.filter((category) => category.checked).map((category) => category.id);
        this._getProducts(selectedCategories);
    }
}
ProductsListComponent.ɵfac = function ProductsListComponent_Factory(t) { return new (t || ProductsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_0__.ProductsService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_redbits_products__WEBPACK_IMPORTED_MODULE_1__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute)); };
ProductsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ProductsListComponent, selectors: [["products-list"]], decls: 5, vars: 2, consts: [[1, "products-page"], [1, "grid"], ["class", "col-12 ", 4, "ngIf"], [1, "col-12"], ["class", "grid", 4, "ngIf"], [1, "filter"], ["class", "field-checkbox", 4, "ngFor", "ngForOf"], [1, "field-checkbox"], ["inputId", "category.id", 3, "ngModel", "binary", "ngModelChange", "onChange"], [3, "for"], ["class", "col-12 md:col-3 sm:col-6", 4, "ngFor", "ngForOf"], [1, "col-12", "md:col-3", "sm:col-6"], [3, "product"]], template: function ProductsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ProductsListComponent_div_2_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ProductsListComponent_div_4_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isCategoryPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.products);
    } }, encapsulation: 2 });


/***/ }),

/***/ 7125:
/*!**************************************************!*\
  !*** ./libs/products/src/lib/products.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsModule": () => (/* binding */ ProductsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/products-search/products-search.component */ 4549);
/* harmony import */ var _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/categories-banner/categories-banner.component */ 5934);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _redbits_orders__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redbits/orders */ 583);
/* harmony import */ var _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/product-item/product-item.component */ 4493);
/* harmony import */ var _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/featured-products/featured-products.component */ 6633);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/products-list/products-list.component */ 5739);
/* harmony import */ var primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/checkbox */ 8271);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/product-page/product-page.component */ 9320);
/* harmony import */ var primeng_rating__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/rating */ 8887);
/* harmony import */ var primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/inputnumber */ 5722);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var _redbits_ui__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @redbits/ui */ 9142);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);





















const routes = [
    {
        path: 'products',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
    },
    {
        path: 'category/:categoryid',
        component: _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
    },
    {
        path: 'products/:productid',
        component: _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent,
    }
];
class ProductsModule {
}
ProductsModule.ɵfac = function ProductsModule_Factory(t) { return new (t || ProductsModule)(); };
ProductsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: ProductsModule });
ProductsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _redbits_orders__WEBPACK_IMPORTED_MODULE_2__.OrdersModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumberModule, _redbits_ui__WEBPACK_IMPORTED_MODULE_7__.UiModule, primeng_card__WEBPACK_IMPORTED_MODULE_12__.CardModule, primeng_rating__WEBPACK_IMPORTED_MODULE_13__.RatingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule.forChild(routes)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](ProductsModule, { declarations: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_0__.ProductsSearchComponent,
        _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesBannerComponent,
        _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductItemComponent,
        _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent,
        _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent,
        _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _redbits_orders__WEBPACK_IMPORTED_MODULE_2__.OrdersModule, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.CheckboxModule, primeng_inputnumber__WEBPACK_IMPORTED_MODULE_11__.InputNumberModule, _redbits_ui__WEBPACK_IMPORTED_MODULE_7__.UiModule, primeng_card__WEBPACK_IMPORTED_MODULE_12__.CardModule, primeng_rating__WEBPACK_IMPORTED_MODULE_13__.RatingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule, primeng_button__WEBPACK_IMPORTED_MODULE_15__.ButtonModule, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterModule], exports: [_components_products_search_products_search_component__WEBPACK_IMPORTED_MODULE_0__.ProductsSearchComponent, _components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent, _components_categories_banner_categories_banner_component__WEBPACK_IMPORTED_MODULE_1__.CategoriesBannerComponent, _pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent, _pages_product_page_product_page_component__WEBPACK_IMPORTED_MODULE_6__.ProductPageComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_components_featured_products_featured_products_component__WEBPACK_IMPORTED_MODULE_4__.FeaturedProductsComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductItemComponent], []);
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_pages_products_list_products_list_component__WEBPACK_IMPORTED_MODULE_5__.ProductsListComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, primeng_checkbox__WEBPACK_IMPORTED_MODULE_10__.Checkbox, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _components_product_item_product_item_component__WEBPACK_IMPORTED_MODULE_3__.ProductItemComponent], []);


/***/ }),

/***/ 370:
/*!**************************************************************!*\
  !*** ./libs/products/src/lib/services/categories.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": () => (/* binding */ CategoriesService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 3629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8784);




class CategoriesService {
    constructor(http) {
        this.http = http;
        this.apiURLCategories = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'categories';
    }
    getCategories() {
        return this.http.get(this.apiURLCategories);
    }
    getCategory(categoryId) {
        return this.http.get(`${this.apiURLCategories}/${categoryId}`);
    }
    createCategory(category) {
        return this.http.post(this.apiURLCategories, category);
    }
    updateCategory(category) {
        return this.http.put(`${this.apiURLCategories}/${category.id}`, category);
    }
    deleteCategory(categoryId) {
        return this.http.delete(`${this.apiURLCategories}/${categoryId}`);
    }
}
CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3884:
/*!************************************************************!*\
  !*** ./libs/products/src/lib/services/products.service.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductsService": () => (/* binding */ ProductsService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../environments/environment */ 3629);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ProductsService {
    constructor(http) {
        this.http = http;
        this.apiURLProducts = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'products';
    }
    getProductsSmall() {
        throw new Error('Method not implemented.');
    }
    getCarsSmall() {
        throw new Error('Method not implemented.');
    }
    getProducts(categoriesFilter) {
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        if (categoriesFilter) {
            params = params.append('categories', categoriesFilter.join(','));
            console.log(params);
        }
        return this.http.get(this.apiURLProducts, { params: params });
    }
    createProduct(productData) {
        return this.http.post(this.apiURLProducts, productData);
    }
    getProduct(productId) {
        return this.http.get(`${this.apiURLProducts}/${productId}`);
    }
    updateProduct(productData, productid) {
        return this.http.put(`${this.apiURLProducts}/${productid}`, productData);
    }
    deleteProduct(productId) {
        return this.http.delete(`${this.apiURLProducts}/${productId}`);
    }
    getProductsCount() {
        return this.http
            .get(`${this.apiURLProducts}/get/count`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((objectValue) => objectValue.productCount));
    }
    getFeaturedProducts(count) {
        return this.http.get(`${this.apiURLProducts}/get/featured/${count}`);
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ProductsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9142:
/*!******************************!*\
  !*** ./libs/ui/src/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* reexport safe */ _lib_ui__WEBPACK_IMPORTED_MODULE_0__.ui),
/* harmony export */   "UiModule": () => (/* reexport safe */ _lib_ui_module__WEBPACK_IMPORTED_MODULE_1__.UiModule)
/* harmony export */ });
/* harmony import */ var _lib_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ui */ 7662);
/* harmony import */ var _lib_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ui.module */ 6546);




/***/ }),

/***/ 4794:
/*!****************************************************!*\
  !*** ./libs/ui/src/lib/banner/banner.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["ui-banner"]], decls: 11, vars: 0, consts: [[1, "banner"], [1, "grid"], [1, "col-12", "md:col-8", "banner-text", "text-center", "animate__animated", "animate__slideInLeft", "text-center"], [1, "col-12", "md:col-4", "banner-image", "animate__animated", "animate__zoomIn", "text-center"], ["src", "assets/images/cuti.jpg", "alt", "", "width", "350", "height", "340", 1, "baby"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "KruhitkaLove \u00A9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Handmades for children");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Let's Make Your Hapiness Together!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  height: 350px;\n  width: 100%;\n  border-radius: 15px;\n}\n.banner-text[_ngcontent-%COMP%] {\n  margin-top: 50px;\n}\n.banner-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 4em;\n  font-weight: 400;\n}\n.banner-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 3em;\n  font-weight: 300;\n}\n.banner-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 1.3em;\n}\n.banner[_ngcontent-%COMP%]   .baby[_ngcontent-%COMP%] {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFDRjtBQUNFO0VBQ0UsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNOO0FBRUk7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQU47QUFFSTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUlBO0VBQ0UsbUJBQUE7QUFGRiIsImZpbGUiOiJiYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFubmVye1xyXG4gIGhlaWdodDogMzUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgJi10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuXHJcbiAgICBoMXtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6ICA0ZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDJ7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgZm9udC1zaXplOiAzZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBcclxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgIH1cclxuICB9XHJcbi5iYWJ5e1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 9861:
/*!****************************************************!*\
  !*** ./libs/ui/src/lib/slider/slider.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SliderComponent": () => (/* binding */ SliderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SliderComponent {
    constructor() { }
    ngOnInit() {
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(); };
SliderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["slider"]], decls: 2, vars: 0, template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "slider works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzbGlkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8698:
/*!************************************************************!*\
  !*** ./libs/ui/src/lib/ui-gallery/ui-gallery.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiGalleryComponent": () => (/* binding */ UiGalleryComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class UiGalleryComponent {
    constructor() {
        this.endSubs$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.endSubs$.next('any');
        this.endSubs$.complete();
    }
}
UiGalleryComponent.ɵfac = function UiGalleryComponent_Factory(t) { return new (t || UiGalleryComponent)(); };
UiGalleryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UiGalleryComponent, selectors: [["ui-gallery"]], decls: 2, vars: 0, template: function UiGalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ui-gallery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1aS1nYWxsZXJ5LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6546:
/*!**************************************!*\
  !*** ./libs/ui/src/lib/ui.module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UiModule": () => (/* binding */ UiModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banner/banner.component */ 4794);
/* harmony import */ var _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider/slider.component */ 9861);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var primeng_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/carousel */ 87);
/* harmony import */ var _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui-gallery/ui-gallery.component */ 8698);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class UiModule {
}
UiModule.ɵfac = function UiModule_Factory(t) { return new (t || UiModule)(); };
UiModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: UiModule });
UiModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_5__.CarouselModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](UiModule, { declarations: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent,
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__.SliderComponent,
        _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_2__.UiGalleryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, primeng_carousel__WEBPACK_IMPORTED_MODULE_5__.CarouselModule, primeng_button__WEBPACK_IMPORTED_MODULE_6__.ButtonModule], exports: [_banner_banner_component__WEBPACK_IMPORTED_MODULE_0__.BannerComponent,
        _slider_slider_component__WEBPACK_IMPORTED_MODULE_1__.SliderComponent,
        _ui_gallery_ui_gallery_component__WEBPACK_IMPORTED_MODULE_2__.UiGalleryComponent] }); })();


/***/ }),

/***/ 7662:
/*!*******************************!*\
  !*** ./libs/ui/src/lib/ui.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
function ui() {
    return 'ui';
}


/***/ }),

/***/ 2852:
/*!*********************************!*\
  !*** ./libs/users/src/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersFacade": () => (/* reexport safe */ _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_0__.UsersFacade),
/* harmony export */   "getUser": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUser),
/* harmony export */   "getUserIsAuth": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUserIsAuth),
/* harmony export */   "getUsersState": () => (/* reexport safe */ _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__.getUsersState),
/* harmony export */   "USERS_FEATURE_KEY": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_3__.USERS_FEATURE_KEY),
/* harmony export */   "initialUsersState": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_3__.initialUsersState),
/* harmony export */   "reducer": () => (/* reexport safe */ _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_3__.reducer),
/* harmony export */   "buildUserSession": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_4__.buildUserSession),
/* harmony export */   "buildUserSessionFailed": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_4__.buildUserSessionFailed),
/* harmony export */   "buildUserSessionSuccess": () => (/* reexport safe */ _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_4__.buildUserSessionSuccess),
/* harmony export */   "UsersModule": () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_5__.UsersModule),
/* harmony export */   "usersRoutes": () => (/* reexport safe */ _lib_users_module__WEBPACK_IMPORTED_MODULE_5__.usersRoutes),
/* harmony export */   "UsersService": () => (/* reexport safe */ _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService),
/* harmony export */   "User": () => (/* reexport safe */ _lib_models_users__WEBPACK_IMPORTED_MODULE_7__.User),
/* harmony export */   "AuthGuard": () => (/* reexport safe */ _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__.AuthGuard),
/* harmony export */   "JwtInterceptor": () => (/* reexport safe */ _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__.JwtInterceptor),
/* harmony export */   "AuthService": () => (/* reexport safe */ _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__.AuthService)
/* harmony export */ });
/* harmony import */ var _lib_state_users_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/state/users.facade */ 2964);
/* harmony import */ var _lib_state_users_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/state/users.models */ 8208);
/* harmony import */ var _lib_state_users_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/state/users.selectors */ 2891);
/* harmony import */ var _lib_state_users_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/state/users.reducer */ 8026);
/* harmony import */ var _lib_state_users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/state/users.actions */ 6173);
/* harmony import */ var _lib_users_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/users.module */ 9965);
/* harmony import */ var _lib_services_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/services/users.service */ 4885);
/* harmony import */ var _lib_models_users__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/models/users */ 6441);
/* harmony import */ var _lib_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/services/auth-guard.service */ 9721);
/* harmony import */ var _lib_services_jwt_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/services/jwt.interceptor */ 5665);
/* harmony import */ var _lib_services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/services/auth.service */ 4414);













/***/ }),

/***/ 6441:
/*!********************************************!*\
  !*** ./libs/users/src/lib/models/users.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 1648:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/pages/login/login.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/localstorage.service */ 4605);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ 4414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/button */ 4633);












function LoginComponent_small_17_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is invalid.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, LoginComponent_small_17_span_1_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, LoginComponent_small_17_span_2_Template, 2, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.loginForm.email.errors.email);
} }
function LoginComponent_small_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function LoginComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "small", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r2.authMessage);
} }
class LoginComponent {
    constructor(formBuilder, auth, router, localstorage) {
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.router = router;
        this.localstorage = localstorage;
        this.loginFormGroup = _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup;
        this.isSubmitted = false;
        this.authError = false;
        this.authMessage = "Email or password are wrong!";
    }
    ngOnInit() {
        this._initLoginForm();
    }
    _initLoginForm() {
        this.loginFormGroup = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
        });
    }
    onSubmit() {
        this.isSubmitted = true;
        if (this.loginFormGroup.invalid)
            return;
        this.auth.login(this.loginForm.email.value, this.loginForm.password.value).subscribe((user) => {
            this.authError = false;
            this.localstorage.setItem(user.token);
            this.router.navigate(['/']).then(() => {
                window.location.reload();
            });
        }, (err) => {
            console.log(err);
            this.authError = true;
            if (err.status !== 400) {
                this.authMessage = "Error in the server, please try again later.";
            }
        });
    }
    get loginForm() {
        return this.loginFormGroup.controls;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["users-login"]], decls: 27, vars: 4, consts: [[1, "login-register"], [1, "login-register-panel"], [1, "grid"], [1, "col-6"], ["src", "assets/images/login.jpg", 2, "margin", "0", "width", "300px", "height", "121%"], [1, "col-6", "p-5"], [3, "formGroup"], [1, "grid", "mt-6"], [1, "col-12"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "formControlName", "email", "pInputText", "", "placeholder", "Email"], ["class", "p-error", 4, "ngIf"], [1, "pi", "pi-lock"], ["type", "password", "formControlName", "password", "pInputText", "", "placeholder", "Password"], ["label", "Submit", "styleClass", "full-btn", 3, "onClick"], ["class", "col-12", 4, "ngIf"], [1, "p-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Welcome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 3, 2, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, LoginComponent_small_23_Template, 2, 0, "small", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("onClick", function LoginComponent_Template_p_button_onClick_25_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, LoginComponent_div_26_Template, 3, 1, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginFormGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loginForm.email.invalid && ctx.isSubmitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.authError);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, primeng_inputtext__WEBPACK_IMPORTED_MODULE_5__.InputText, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, primeng_button__WEBPACK_IMPORTED_MODULE_7__.Button], encapsulation: 2 });


/***/ }),

/***/ 9639:
/*!*************************************************************************!*\
  !*** ./libs/users/src/lib/pages/registration/registration.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);




class RegistrationComponent {
    constructor(location, route) {
        this.location = location;
        this.route = route;
        this.form = _angular_forms__WEBPACK_IMPORTED_MODULE_0__.FormGroup;
        this.isSubmitted = false;
        this.editmode = false;
    }
    ngOnInit() {
    }
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) { return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute)); };
RegistrationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RegistrationComponent, selectors: [["users-registration"]], decls: 2, vars: 0, template: function RegistrationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "reererrr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["button[_ngcontent-%COMP%]:active {\r\n  color: #666;\r\n  box-shadow: inset 4px 4px 12px #c5c5c5,\r\n              inset -4px -4px 12px #ffffff;\r\n }\r\n\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  color: #ffffff;\r\n  padding: 0.6em 3em;\r\n  font-size: 15px;\r\n  border-radius: 0.2em;\r\n  background: #2196F3;\r\n  border: 1px solid #e8e8e8;\r\n  transition: all .3s;\r\n  cursor: pointer;\r\n\r\n\r\n}\r\n\r\n\r\n.registrationForm[_ngcontent-%COMP%]{\r\n  background: #ffff;\r\n  height: 100%;\r\n  border: 1px solid var(--surface-300);\r\n  border-radius: 15px;\r\n\r\n\r\n}\r\n\r\n\r\n.checkout-button[_ngcontent-%COMP%] {\r\n  button {\r\n    width: 100%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztFQUNDLFdBQVc7RUFDWDswQ0FDd0M7Q0FDekM7OztBQUdEO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGVBQWU7OztBQUdqQjs7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQkFBbUI7OztBQUdyQjs7O0FBQ0E7RUFDRTtJQUNFLFdBQVc7RUFDYjtBQUNGIiwiZmlsZSI6InJlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiBidXR0b246YWN0aXZlIHtcclxuICBjb2xvcjogIzY2NjtcclxuICBib3gtc2hhZG93OiBpbnNldCA0cHggNHB4IDEycHggI2M1YzVjNSxcclxuICAgICAgICAgICAgICBpbnNldCAtNHB4IC00cHggMTJweCAjZmZmZmZmO1xyXG4gfVxyXG5cclxuXHJcbmJ1dHRvbntcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAwLjZlbSAzZW07XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMmVtO1xyXG4gIGJhY2tncm91bmQ6ICMyMTk2RjM7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcblxyXG59XHJcbi5yZWdpc3RyYXRpb25Gb3Jte1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLTMwMCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcblxyXG59XHJcbi5jaGVja291dC1idXR0b24ge1xyXG4gIGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 9721:
/*!***********************************************************!*\
  !*** ./libs/users/src/lib/services/auth-guard.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ 4605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





class AuthGuard {
    constructor(router, localStorageToken) {
        this.router = router;
        this.localStorageToken = localStorageToken;
    }
    canActivate(route, state) {
        const token = this.localStorageToken.getItem();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode.isAdmin && !this._tokenExpired(tokenDecode.exp))
                return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4414:
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/services/auth.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthService": () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localstorage.service */ 4605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);








class AuthService {
    constructor(http, token, router) {
        this.http = http;
        this.token = token;
        this.router = router;
        this.apiURLUsers = _env_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiURL + 'users';
    }
    // method pour le log in au dashboard
    login(email, password) {
        return this.http.post(`${this.apiURLUsers}/login`, { email, password });
    }
    // method pour le log out au dashboard
    logout() {
        this.token.removeItem();
        this.router.navigate(['/login']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
AuthService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5665:
/*!********************************************************!*\
  !*** ./libs/users/src/lib/services/jwt.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JwtInterceptor": () => (/* binding */ JwtInterceptor)
/* harmony export */ });
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localstorage.service */ 4605);
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @env/environment */ 3629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class JwtInterceptor {
    constructor(LocalstorageToken) {
        this.LocalstorageToken = LocalstorageToken;
    }
    intercept(request, next) {
        const token = this.LocalstorageToken.getItem();
        const isAPIUrl = request.url.startsWith(_env_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL);
        if (token && isAPIUrl) {
            request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token}`
                }
            });
        }
        return next.handle(request);
    }
}
JwtInterceptor.ɵfac = function JwtInterceptor_Factory(t) { return new (t || JwtInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_localstorage_service__WEBPACK_IMPORTED_MODULE_0__.LocalstorageService)); };
JwtInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: JwtInterceptor, factory: JwtInterceptor.ɵfac });


/***/ }),

/***/ 4605:
/*!*************************************************************!*\
  !*** ./libs/users/src/lib/services/localstorage.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocalstorageService": () => (/* binding */ LocalstorageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const TOKEN = 'jwtToken';
class LocalstorageService {
    constructor() { }
    setItem(data) {
        localStorage.setItem(TOKEN, data);
    }
    getItem() {
        return localStorage.getItem(TOKEN);
    }
    removeItem() {
        localStorage.removeItem(TOKEN);
    }
    isValidToken() {
        const token = this.getItem();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            return !this._tokenExpired(tokenDecode.exp);
        }
        else {
            return false;
        }
    }
    getUserIdFromToken() {
        const token = this.getItem();
        if (token) {
            const tokenDecode = JSON.parse(atob(token.split('.')[1]));
            if (tokenDecode) {
                return tokenDecode.userId;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    }
    _tokenExpired(expiration) {
        return Math.floor(new Date().getTime() / 1000) >= expiration;
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4885:
/*!******************************************************!*\
  !*** ./libs/users/src/lib/services/users.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersService": () => (/* binding */ UsersService)
/* harmony export */ });
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../state/users.facade */ 2964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ 3629);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);







class UsersService {
    constructor(http, usersFacade) {
        this.http = http;
        this.usersFacade = usersFacade;
        this.apiURLUsers = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiURL + 'users';
    }
    getUsers() {
        return this.http.get(this.apiURLUsers);
    }
    getUser(userId) {
        return this.http.get(`${this.apiURLUsers}/${userId}`);
    }
    createUser(user) {
        return this.http.post(this.apiURLUsers, user);
    }
    updateUser(user) {
        return this.http.put(`${this.apiURLUsers}/${user.id}`, user);
    }
    deleteUser(userId) {
        return this.http.delete(`${this.apiURLUsers}/${userId}`);
    }
    getUsersCount() {
        return this.http
            .get(`${this.apiURLUsers}/get/count`)
            .pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)((objectValue) => objectValue.userCount));
    }
    initAppSession() {
        this.usersFacade.buildUserSession();
    }
    observeCurrentUser() {
        return this.usersFacade.currentUser$;
    }
    isCurrentUserIsAuth() {
        return this.usersFacade.isAuthenticated$;
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_state_users_facade__WEBPACK_IMPORTED_MODULE_0__.UsersFacade)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6173:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildUserSession": () => (/* binding */ buildUserSession),
/* harmony export */   "buildUserSessionSuccess": () => (/* binding */ buildUserSessionSuccess),
/* harmony export */   "buildUserSessionFailed": () => (/* binding */ buildUserSessionFailed)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 5585);

const buildUserSession = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session');
//export const init = createAction('[Users Page] Init');
const buildUserSessionSuccess = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session Success', (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.props)());
const buildUserSessionFailed = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createAction)('[Users] Build User Session Failed');


/***/ }),

/***/ 7037:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersEffects": () => (/* binding */ UsersEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _redbits_users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @redbits/users */ 2852);
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/internal/observable/of */ 745);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3853);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/localstorage.service */ 4605);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.actions */ 6173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);










class UsersEffects {
    constructor(actions$, localstorageService, usersService) {
        this.actions$ = actions$;
        this.localstorageService = localstorageService;
        this.usersService = usersService;
        this.buildUserSession$ = (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.createEffect)(() => this.actions$.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.ofType)(_users_actions__WEBPACK_IMPORTED_MODULE_2__.buildUserSession), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.concatMap)(() => {
            if (this.localstorageService.isValidToken()) {
                const userId = this.localstorageService.getUserIdFromToken();
                if (userId) {
                    return this.usersService.getUser(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((user) => {
                        return _users_actions__WEBPACK_IMPORTED_MODULE_2__.buildUserSessionSuccess({ user: user });
                    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(() => (0,rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_2__.buildUserSessionFailed())));
                }
                else {
                    return (0,rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_2__.buildUserSessionFailed());
                }
            }
            else {
                return (0,rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_7__.of)(_users_actions__WEBPACK_IMPORTED_MODULE_2__.buildUserSessionFailed());
            }
        })));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_localstorage_service__WEBPACK_IMPORTED_MODULE_1__.LocalstorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_redbits_users__WEBPACK_IMPORTED_MODULE_0__.UsersService)); };
UsersEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });


/***/ }),

/***/ 2964:
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.facade.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersFacade": () => (/* binding */ UsersFacade)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 6173);
/* harmony import */ var _users_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.selectors */ 2891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class UsersFacade {
    constructor(store) {
        this.store = store;
        // /**
        //  * Combine pieces of state using createSelector,
        //  * and expose them as observables through the facade.
        //  */
        // loaded$ = this.store.pipe(select(UsersSelectors.getUsersLoaded));
        // allUsers$ = this.store.pipe(select(UsersSelectors.getAllUsers));
        // selectedUsers$ = this.store.pipe(select(UsersSelectors.getSelected));
        this.currentUser$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_users_selectors__WEBPACK_IMPORTED_MODULE_1__.getUser));
        this.isAuthenticated$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.select)(_users_selectors__WEBPACK_IMPORTED_MODULE_1__.getUserIsAuth));
    }
    buildUserSession() {
        this.store.dispatch(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession());
    }
}
UsersFacade.ɵfac = function UsersFacade_Factory(t) { return new (t || UsersFacade)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__.Store)); };
UsersFacade.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UsersFacade, factory: UsersFacade.ɵfac });


/***/ }),

/***/ 8208:
/*!**************************************************!*\
  !*** ./libs/users/src/lib/state/users.models.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 8026:
/*!***************************************************!*\
  !*** ./libs/users/src/lib/state/users.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "USERS_FEATURE_KEY": () => (/* binding */ USERS_FEATURE_KEY),
/* harmony export */   "initialUsersState": () => (/* binding */ initialUsersState),
/* harmony export */   "reducer": () => (/* binding */ reducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.actions */ 6173);
//import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';


//import { UsersEntity } from './users.models';
const USERS_FEATURE_KEY = 'users';
const initialUsersState = {
    user: null,
    isAuthenticated: false,
};
// export const usersAdapter: EntityAdapter<UsersEntity> =
//   createEntityAdapter<UsersEntity>();
// export const initialState: State = usersAdapter.getInitialState({
//   // set initial required properties
//   loaded: false,
// });
const usersReducer = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createReducer)(initialUsersState, (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSession, (state) => (Object.assign({}, state))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionSuccess, (state, action) => (Object.assign(Object.assign({}, state), { user: action.user, isAuthenticated: true }))), (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.on)(_users_actions__WEBPACK_IMPORTED_MODULE_0__.buildUserSessionFailed, (state) => (Object.assign(Object.assign({}, state), { user: null, isAuthenticated: false }))));
// const usersReducer = createReducer(
//   initialState,
//   on(UsersActions.init, (state) => ({ ...state, loaded: false, error: null })),
//   on(UsersActions.loadUsersSuccess, (state, { users }) =>
//     usersAdapter.setAll(users, { ...state, loaded: true })
//   ),
//   on(UsersActions.loadUsersFailure, (state, { error }) => ({ ...state, error }))
// );
function reducer(state, action) {
    return usersReducer(state, action);
}


/***/ }),

/***/ 2891:
/*!*****************************************************!*\
  !*** ./libs/users/src/lib/state/users.selectors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUsersState": () => (/* binding */ getUsersState),
/* harmony export */   "getUser": () => (/* binding */ getUser),
/* harmony export */   "getUserIsAuth": () => (/* binding */ getUserIsAuth)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _users_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users.reducer */ 8026);


// Lookup the 'Users' feature state managed by NgRx
const getUsersState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createFeatureSelector)(_users_reducer__WEBPACK_IMPORTED_MODULE_0__.USERS_FEATURE_KEY);
const getUser = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getUsersState, (state) => state.user);
const getUserIsAuth = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.createSelector)(getUsersState, (state) => state.isAuthenticated);
// const { selectAll, selectEntities } = usersAdapter.getSelectors();
// export const getUsersLoaded = createSelector(
//   getUsersState,
//   (state: State) => state.loaded
// );
// export const getUsersError = createSelector(
//   getUsersState,
//   (state: State) => state.error
// );
// export const getAllUsers = createSelector(getUsersState, (state: State) =>
//   selectAll(state)
// );
// export const getUsersEntities = createSelector(getUsersState, (state: State) =>
//   selectEntities(state)
// );
// export const getSelectedId = createSelector(
//   getUsersState,
//   (state: State) => state.selectedId
// );
// export const getSelected = createSelector(
//   getUsersEntities,
//   getSelectedId,
//   (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
// );


/***/ }),

/***/ 9965:
/*!********************************************!*\
  !*** ./libs/users/src/lib/users.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "usersRoutes": () => (/* binding */ usersRoutes),
/* harmony export */   "UsersModule": () => (/* binding */ UsersModule)
/* harmony export */ });
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/card */ 6480);
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/toast */ 2802);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/login/login.component */ 1648);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/inputtext */ 5583);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 4633);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/store */ 5585);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngrx/effects */ 369);
/* harmony import */ var _state_users_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state/users.reducer */ 8026);
/* harmony import */ var _state_users_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state/users.effects */ 7037);
/* harmony import */ var _state_users_facade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/users.facade */ 2964);
/* harmony import */ var _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/registration/registration.component */ 9639);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);


















const usersRoutes = [
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent,
    },
    {
        path: 'registration',
        component: _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__.RegistrationComponent,
    },
];
class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_state_users_facade__WEBPACK_IMPORTED_MODULE_3__.UsersFacade], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(usersRoutes),
            primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreModule.forFeature(_state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.USERS_FEATURE_KEY, _state_users_reducer__WEBPACK_IMPORTED_MODULE_1__.reducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsModule.forFeature([_state_users_effects__WEBPACK_IMPORTED_MODULE_2__.UsersEffects]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _pages_registration_registration_component__WEBPACK_IMPORTED_MODULE_4__.RegistrationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, primeng_button__WEBPACK_IMPORTED_MODULE_8__.ButtonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        primeng_toast__WEBPACK_IMPORTED_MODULE_10__.ToastModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_11__.CardModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_12__.InputTextModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_13__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_14__.EffectsFeatureModule] }); })();


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4478)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map