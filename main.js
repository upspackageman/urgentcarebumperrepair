(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+zU0":
/*!**************************************************!*\
  !*** ./src/app/insurance/insurance.component.ts ***!
  \**************************************************/
/*! exports provided: InsuranceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsuranceComponent", function() { return InsuranceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");



const _c0 = function () { return ["/estimate"]; };
const _c1 = function () { return ["/service"]; };
class InsuranceComponent {
    constructor() {
        this.config = {
            effect: 'coverflow',
            slidesPerView: 'auto',
            init: true,
            loop: false,
            grabCursor: true,
            coverflowEffect: {
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    }
    // tslint:disable-next-line: typedef
    toHeader() {
        document.getElementById('header').scrollIntoView();
    }
    ngOnInit() {
    }
}
InsuranceComponent.ɵfac = function InsuranceComponent_Factory(t) { return new (t || InsuranceComponent)(); };
InsuranceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InsuranceComponent, selectors: [["app-insurance"]], decls: 154, vars: 16, consts: [[1, "captionInsuranceHeader", "mt-5", 2, "background-color", "rgb(147, 154, 163)"], [1, "overlay"], [1, "landing-text"], [1, "landing-text-inner"], [1, "title"], [1, "text-white", "ml-3", "mr-3"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "alt", 3, "routerLink"], ["id", "view-work", 1, "btn", "mb-5", 3, "click"], ["id", "insurance", 1, "images"], ["id", "header"], [1, "caption"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/claim2/1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/claim2/2.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n          url('assets/images/claim2/2.jpg')", "background-size", "cover"], [1, "pt-5"], [1, "final"], [2, "font-size", "22.5px"], [1, "swiper-pagination", "swiper-pagination-white"], [1, "swiper-button-next"], [1, "swiper-button-prev"], [1, "caption1"], ["src", "assets/images/logo2.png", 1, "categoryLogo"], ["src", "assets/images/claim1/1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/claim1/2.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/claim1/3.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/claim1/4.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/claim1/5.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n          url('assets/images/claim1/5.jpg')", "background-size", "cover"], ["src", "assets/images/Insurance/07_Jetta/IMG_1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_2.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_3.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_4.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_5.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_6.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_7.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_8.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_9.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_11.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_12.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_13.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_14.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_15.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_16.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/07_Jetta/IMG_17.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n          url('assets/images/Insurance/07_Jetta/IMG_17.jpg')", "background-size", "cover"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_2.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_3.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_4.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_5.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_6.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_7.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Insurance/06_BMW_530i/IMG_8.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n          url('assets/images/Insurance/06_BMW_530i/IMG_8.jpg')", "background-size", "cover"], [1, "captionBottom"], [1, "theButton"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", 3, "routerLink"]], template: function InsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Insurance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "A lot of the time, the damage on your car is to be paid for by an insurance company, whether it was your accident or done by you by not fault of your own.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "UCBR works with ALL car insurance carriers and companies. We also honestly advise you whether it is best to move ahead with your claim or not; with a no obligation quote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Please contact us to furher advise you in your decision to file a claim or not. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "We'll take it from there so that you don't have to hassle with it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Get A Free Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InsuranceComponent_Template_a_click_20_listener() { return ctx.toHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " View Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Our Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](128, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](134, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "img", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "span", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Return To Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n.captionInsuranceHeader[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  background-image: url(/assets/images/car/166.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]{\r\n  background: rgba(192, 26, 43, 0.4);\r\n  border: 1px #fff solid !important;\r\n  color: #fff !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]:hover{\r\n  border: 1px #c01a2b solid !important;\r\n}\r\n\r\n.overlay-last[_ngcontent-%COMP%]{\r\n  height:inherit;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.final[_ngcontent-%COMP%]{\r\n  font-size: 80px;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.final-image[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n}\r\n\r\n@keyframes fill-images{\r\n\r\n\t0%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/271.jpg\");\r\n    background-position: 0% 100%;\r\n\t}\r\n\r\n\t10%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n\r\n\t}\r\n\r\n\t20%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/267.jpg\");\r\n\t}\r\n\r\n\t30%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/270.jpg\");\r\n\t}\r\n\t40%{\r\n\t\tbackground-image:url(\"/assets/images/porsche - Copy/155.jpg\");\r\n\t}\r\n  50%{\r\n\t\tbackground-image:url(\"/assets/images/process/11.jpg\");\r\n\r\n\t}\r\n\t60%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    background-position: 100% 0%;\r\n\t}\r\n\t70%{\r\n\t\tbackground-image:url(\"/assets/images/97_carrera/44.jpg\");\r\n  }\r\n  75%{\r\n    background-image:url(\"/assets/images/97_carrera/45.jpg\");\r\n  }\r\n\t80%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/079.jpg\");\r\n\r\n\t}\r\n\t90%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/080.jpg\");\r\n\t}\r\n\t100%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/082.jpg\");\r\n\t}\r\n}\r\n\r\n.process-landing-text[_ngcontent-%COMP%]\r\n{\r\n  padding-top:12%;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n  background-size: cover;\r\n}\r\n\r\n.categoryLogo[_ngcontent-%COMP%]{\r\n\r\n  width:320px;\r\n  height:80px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding:0%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.captionBottom[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  padding: 0px;\r\n  color: rgb(256, 256, 256);\r\n  text-align: center;\r\n  background: #333;\r\n}\r\n\r\n.captionImages[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n\r\n.caption1[_ngcontent-%COMP%]{\r\n  height:100px;\r\n  color:rgb(256, 256, 256);\r\n  background: #c3c3c1;\r\n   background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n\r\n\r\n}\r\n\r\n.landing-text-inner[_ngcontent-%COMP%]{\r\n  padding-top:12%;\r\n}\r\n\r\n.text-white[_ngcontent-%COMP%] {\r\n  color: #fff!important;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 2.9rem;\r\n  text-transform: uppercase;\r\n  color:#fff;\r\n  margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  transition: opacity 1s ease-in;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  background: #333;\r\n  color: #fff;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-left: dotted 1px #fff;\r\n  border-right: dotted 1px #fff;\r\n  display: inline-block;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n\tpadding: 0.5rem 2rem;\r\n\tborder: 1px #ccc solid;\r\n\tdisplay: inline-block;\r\n\tmargin: 2rem 0 0;\r\n\tborder-radius: 50px;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\ttransition: background 500ms ease;\r\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: calc(var(--swiper-navigation-size)/ 44 * 27);\r\n  height: var(--swiper-navigation-size);\r\n  margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.swiper-pagination-white[_ngcontent-%COMP%] {\r\n  --swiper-pagination-color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n\r\n  .captionInsuranceHeader[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n  .caption[_ngcontent-%COMP%] {\r\n    height:350px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-size:cover;\r\n  }\r\n\r\n  .overlay-last[_ngcontent-%COMP%]{\r\n    height:inherit;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]{\r\n    font-size: 47px;\r\n  }\r\n\r\n  .final-image[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n  }\r\n\r\n  .caption1[_ngcontent-%COMP%]{\r\n    height:70px;\r\n    color:rgb(256, 256, 256);\r\n    background: #c3c3c1;\r\n    background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n  }\r\n\r\n   .captionImages[_ngcontent-%COMP%]{\r\n     height:350px;\r\n   }\r\n   .categoryLogo[_ngcontent-%COMP%]{\r\n    width:224px;\r\n    height:56px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding:0%;\r\n   }\r\n}\r\n\r\n@media screen and (max-width:321px){\r\n\r\n  .captionInsuranceHeader[_ngcontent-%COMP%] {\r\n    height: 800px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:800px;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluc3VyYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUF1RTs7QUFFdkU7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpREFBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0NBRUM7RUFDQyw0REFBNEQ7SUFDMUQsNEJBQTRCO0NBQy9COztDQUVBO0lBQ0csMERBQTBEOztDQUU3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDtDQUNBO0VBQ0MsNkRBQTZEO0NBQzlEO0VBQ0M7RUFDQSxxREFBcUQ7O0NBRXREO0NBQ0E7SUFDRywwREFBMEQ7SUFDMUQsNEJBQTRCO0NBQy9CO0NBQ0E7RUFDQyx3REFBd0Q7RUFDeEQ7RUFDQTtJQUNFLHdEQUF3RDtFQUMxRDtDQUNEO0VBQ0Msd0RBQXdEOztDQUV6RDtDQUNBO0VBQ0Msd0RBQXdEO0NBQ3pEO0NBQ0E7RUFDQyx3REFBd0Q7Q0FDekQ7QUFDRDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0hBQStIO0VBQy9ILHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQkFBbUI7R0FLbEIsK0RBQStEOzs7QUFHbEU7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQztxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlDQUFpQztDQUNqQyw2Q0FBNkM7QUFDOUM7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbURBQW1EO0VBQ25ELHFDQUFxQztFQUNyQyx1REFBdUQ7RUFDdkQsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2QjtBQUMvQjs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQztFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsY0FBYztJQUNkLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUtuQiwrREFBK0Q7RUFDakU7O0dBRUM7S0FDRSxZQUFZO0dBQ2Q7R0FDQTtJQUNDLFdBQVc7SUFDWCxXQUFXO0lBQ1gsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtHQUNYO0FBQ0g7O0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osb0NBQW9DO0VBQ3RDOztBQUVGIiwiZmlsZSI6Imluc3VyYW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkJyk7XHJcblxyXG4uY2FwdGlvbkluc3VyYW5jZUhlYWRlciB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jYXIvMTY2LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4ub3ZlcmxheXtcclxuICBoZWlnaHQ6NjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uYWx0e1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAyNiwgNDMsIDAuNCk7XHJcbiAgYm9yZGVyOiAxcHggI2ZmZiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcbi5hbHQ6aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggI2MwMWEyYiBzb2xpZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3ZlcmxheS1sYXN0e1xyXG4gIGhlaWdodDppbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxufVxyXG5cclxuLmZpbmFse1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLmZpbmFsLWltYWdle1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbC1pbWFnZXN7XHJcblxyXG5cdDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI3MS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAxMDAlO1xyXG5cdH1cclxuXHJcblx0MTAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9DYXIxIC0gQ29weS8wODkuanBnXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cdDIwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvbGV4dXMxIC0gQ29weS8yNjcuanBnXCIpO1xyXG5cdH1cclxuXHJcblx0MzAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI3MC5qcGdcIik7XHJcblx0fVxyXG5cdDQwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvcG9yc2NoZSAtIENvcHkvMTU1LmpwZ1wiKTtcclxuXHR9XHJcbiAgNTAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wcm9jZXNzLzExLmpwZ1wiKTtcclxuXHJcblx0fVxyXG5cdDYwJXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvQ2FyMSAtIENvcHkvMDg5LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMCU7XHJcblx0fVxyXG5cdDcwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvOTdfY2FycmVyYS80NC5qcGdcIik7XHJcbiAgfVxyXG4gIDc1JXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvOTdfY2FycmVyYS80NS5qcGdcIik7XHJcbiAgfVxyXG5cdDgwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvTTQgLSBDb3B5LzA3OS5qcGdcIik7XHJcblxyXG5cdH1cclxuXHQ5MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL000IC0gQ29weS8wODAuanBnXCIpO1xyXG5cdH1cclxuXHQxMDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9NNCAtIENvcHkvMDgyLmpwZ1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbi5wcm9jZXNzLWxhbmRpbmctdGV4dFxyXG57XHJcbiAgcGFkZGluZy10b3A6MTIlO1xyXG59XHJcblxyXG4uY2FwdGlvbiB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpLCByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpKSx1cmwoL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhdGVnb3J5TG9nb3tcclxuXHJcbiAgd2lkdGg6MzIwcHg7XHJcbiAgaGVpZ2h0OjgwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6MCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXB0aW9uQm90dG9tIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBjb2xvcjogcmdiKDI1NiwgMjU2LCAyNTYpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcblxyXG4uY2FwdGlvbkltYWdlcyB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmNhcHRpb24xe1xyXG4gIGhlaWdodDoxMDBweDtcclxuICBjb2xvcjpyZ2IoMjU2LCAyNTYsIDI1Nik7XHJcbiAgYmFja2dyb3VuZDogI2MzYzNjMTtcclxuICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbih0byByaWdodCksICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZmZmZmYpLCB0bygjYzNjM2MxKSk7XHJcbiAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcblxyXG5cclxufVxyXG5cclxuLmxhbmRpbmctdGV4dC1pbm5lcntcclxuICBwYWRkaW5nLXRvcDoxMiU7XHJcbn1cclxuXHJcbi50ZXh0LXdoaXRlIHtcclxuICBjb2xvcjogI2ZmZiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmg2IHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgYm94LXNoYWRvdzogMzBweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAtMzBweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2hlYWRlciBoMiB7XHJcbiAgYm9yZGVyLWxlZnQ6IGRvdHRlZCAxcHggI2ZmZjtcclxuICBib3JkZXItcmlnaHQ6IGRvdHRlZCAxcHggI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG5cdGJvcmRlcjogMXB4ICNjY2Mgc29saWQ7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjogMnJlbSAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0dHJhbnNpdGlvbjogYmFja2dyb3VuZCA1MDBtcyBlYXNlO1xyXG5cdGJveC1zaGFkb3c6IDEwcHggMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjM3KTtcclxufVxyXG4uYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gIGNvbG9yOiAjYzAxYTJiICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLW5leHQsIC5zd2lwZXItYnV0dG9uLXByZXYge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICB3aWR0aDogY2FsYyh2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKS8gNDQgKiAyNyk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1zd2lwZXItbmF2aWdhdGlvbi1zaXplKTtcclxuICBtYXJnaW4tdG9wOiBjYWxjKC0xICogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDIpO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY29sb3I6ICNhZTE4MjY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi13aGl0ZSB7XHJcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogI2FlMTgyNjtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG5cclxuICAuY2FwdGlvbkluc3VyYW5jZUhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDYwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcbiAgLmNhcHRpb24ge1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktbGFzdHtcclxuICAgIGhlaWdodDppbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIH1cclxuXHJcbiAgLmZpbmFse1xyXG4gICAgZm9udC1zaXplOiA0N3B4O1xyXG4gIH1cclxuXHJcbiAgLmZpbmFsLWltYWdle1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICB9XHJcblxyXG4gIC5jYXB0aW9uMXtcclxuICAgIGhlaWdodDo3MHB4O1xyXG4gICAgY29sb3I6cmdiKDI1NiwgMjU2LCAyNTYpO1xyXG4gICAgYmFja2dyb3VuZDogI2MzYzNjMTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24odG8gcmlnaHQpLCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI2ZmZmZmZiksIHRvKCNjM2MzYzEpKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICB9XHJcblxyXG4gICAuY2FwdGlvbkltYWdlc3tcclxuICAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgIH1cclxuICAgLmNhdGVnb3J5TG9nb3tcclxuICAgIHdpZHRoOjIyNHB4O1xyXG4gICAgaGVpZ2h0OjU2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZzowJTtcclxuICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMXB4KXtcclxuXHJcbiAgLmNhcHRpb25JbnN1cmFuY2VIZWFkZXIge1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jYXIvMTY2LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gICAgYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAub3ZlcmxheXtcclxuICAgIGhlaWdodDo4MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Program Files (x86)\Ampps\www\src5\urgentcarebumperrepair\urgentcarebumperrepair\src\main.ts */"zUnb");


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/service"]; };
class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 30, vars: 2, consts: [[1, "static-slider10", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(assets/images/about3.jpg)", "background-size", "cover"], [1, "container", 2, "margin-top", "4%"], [1, "row", "justify-content-center"], [1, "col-md-8", "align-self-center", "text-center", "mt-5", "mb-5"], [1, "my-3", "title", "text-white", "text-uppercase", "mt-5"], [1, "text-white", "font-weight-normal", "op-8", "mb-3"], ["href", "mailto:estimate@urgentcarebumperrepair.com?subject=Estimate from Urgent Care Bumper Repair", 1, "contact"], [1, "contact1"], ["href", "sms:17609949400", 1, "contact"], ["href", "tel:17609949400", 1, "contact"], ["routerLinkActive", "router-link-active", 1, "btn", "btn-outline-light", "rounded-pill", "btn-md", 3, "routerLink"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Welcome");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Welcome and thank you for visiting my company website! My name is Jared and I'm the Owner, Operator and Paint Specialist of URGENT CARE BUMPER REPAIR. I began my professional career as a partner in a bumper repair company that pioneered the industry of mobile auto body and paint back in 2001, before forming my own company, URGENT CARE BUMPER REPAIR in 2004. When you call URGENT CARE BUMPER REPAIR, I personally answer the phone and I personally do all of the repairs on your vehicle. It is revolutionary to bring the QUALITY of a body shop repair at a VALUE of nearly HALF the cost and the CONVENIENCE of the work completed at your home or place of business in a matter of hours versus days at a shop! I am proud to say that I was one of the first to bring this service to San Diego and have built a reputation through professionalism and many satisfied clients. I have twenty plus years of professional experience and almost all of my business comes by way of referrals. That is the best compliment I can ever receive, the confidence that my clients have to refer their friends, family and colleagues to me. I am located in North San Diego County, which makes it easy to service my clients in North County, and surrounding areas. I have worked on everything from touching up mirrors to blending bumpers, to replacing fenders to collision work. I work on all makes and models. I have even worked on cutting-edge prototypes, boats and motorcycles. One specialty of mine to note is perfecting your lease return vehicle to help save you money instead of putting it into the pocket of the dealer. Using my service also helps insure the quick sale of your car by putting it in \u201Cjust like new\u201D condition for the buyer to notice. And let\u2019s say that you are just like me and love your car and want to keep it forever, looking pristine in your driveway. Call me for any imperfections that you want eliminated. Cars are my passion and I respect every single one that I am trusted to work on. You might be asking yourself, \u201CWhy do I choose URGENT CARE BUMPER REPAIR instead of any other company out there?\u201D Well, I\u2019m so glad you asked. I understand how frustrating it can be to schedule work on your car, and the convenience of my service will make a huge difference for you. I work with you and your insurance company (if they are involved) and get the job done quickly, and most importantly, looking great. The craftsmanship that I put into your repair is unparalleled by others. I take pride in my work and I will go out of my way to give you the best repair you are going to find. I give you a lifetime warranty on the craftsmanship of the repair for as long as you own your car. It\u2019s very easy to get your FREE ONLINE OR PHONE ESTIMATE, simply text or call just snap a couple of photos of your damage with your phone and email or text your make, model and year to me at by clicking the links below: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "estimate@urgentcarebumperrepair.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Text:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " 760-994-9400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " along with your name, phone number and best time to call. I\u2019ll always get back to you within the business day, usually within a few minutes. Now that you know a little about me, some questions may have come up. For your individual concerns, feel free to call me any time at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " 760-994-9400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " or toll free at 888-9-URGENT. I also have a lot of colleagues in the industry that I refer work to in the fields of windshield replacement/repair, paintless dent removal, clear bra, wheel and rim repair, detailing and mechanics. Feel free to contact me by email for a referral! Now and always, THANK YOU FOR YOUR BUSINESS! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Checkout out our services!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n.static-slider10[_ngcontent-%COMP%] {\r\n\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  text-shadow: 8px 8px 6px #000;\r\n\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n  font-weight: 500;\r\n    font-size: 2.9rem;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    margin: 0;\r\n}\r\n\r\nspan.contact1[_ngcontent-%COMP%]{\r\n  color: #d10909;\r\n  text-shadow: 1px 1px 2.1px #fff;\r\n  font-size: 1.25rem;\r\n\r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n  -webkit-text-decoration-color: #d10909;\r\n          text-decoration-color: #d10909;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 1100px;\r\n  margin: auto;\r\n  display: block;\r\n  transition: opacity 1s ease-in;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFOztBQUV2RTs7RUFFRSwyQ0FBMkM7RUFDM0MsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLGdCQUFnQjtJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLFNBQVM7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCwrQkFBK0I7RUFDL0Isa0JBQWtCOzs7QUFHcEI7O0FBRUE7RUFDRSxzQ0FBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQztxQ0FDbUM7QUFDckMiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCcpO1xyXG5cclxuLnN0YXRpYy1zbGlkZXIxMCB7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcblxyXG59XHJcblxyXG5oMXtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbnNwYW4uY29udGFjdDF7XHJcbiAgY29sb3I6ICNkMTA5MDk7XHJcbiAgdGV4dC1zaGFkb3c6IDFweCAxcHggMi4xcHggI2ZmZjtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcblxyXG5cclxufVxyXG5cclxuYXtcclxuICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICNkMTA5MDk7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBib3gtc2hhZG93OiAzMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgIC0zMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");



const _c0 = function () { return ["/estimate"]; };
const _c1 = function () { return ["/bumperrepair"]; };
const _c2 = function () { return ["/bumperreplacement"]; };
const _c3 = function () { return ["/leasereturn"]; };
const _c4 = function () { return ["/insurance"]; };
const _c5 = function () { return ["/process"]; };
class HomeComponent {
    constructor() {
        this.sms = 'Make:%0A%0AModel:%0A%0AYear:%0A%0A[Close up image of the damage.]' + '%0A[Full shot of the vehicle and damage.]';
        this.config = {
            effect: 'coverflow',
            slidesPerView: 'auto',
            init: true,
            loop: true,
            grabCursor: true,
            coverflowEffect: {
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
    }
    ngOnInit() {
    }
    toServices() {
        document.getElementById('services').scrollIntoView();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 168, vars: 26, consts: [[1, "main"], [1, "captionHeader", 2, "background-color", "rgb(255,255,255)"], [1, "overlay"], [1, "menu", "ml-3", "mr-3", "mt-5", "mobile"], [1, "mt-3"], [1, "ml-3", "mr-3", "mt-3", "subtitle"], [1, "landing-text-inner", "mt-5"], ["routerLinkActive", "router-link-active", 1, "btn", "alt", "route", 3, "href"], [1, "fas", "fa-comment-alt", "icon"], [1, "landing-text-inner", "mt-1"], ["href", "tel:17609949400", "routerLinkActive", "router-link-active", 1, "btn", "alt", "route"], [1, "fas", "fa-phone", "icon"], ["routerLinkActive", "router-link-active", 1, "btn", "alt", "route", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "btn", "alt", "route", 3, "click"], [1, "desktop", "menu", "ml-3", "mr-3", "mt-5"], ["routerLinkActive", "router-link-active", 1, "btn", "route", 3, "routerLink"], [1, "landing-text-inner"], [1, "landing-text-inner", "pb-5"], [1, "images"], ["id", "header"], [1, "caption"], [1, "overlay-testimonial"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper", "mt-5"], [1, "swiper-slide"], [1, "text", "ml-3", "mr-3"], ["src", "assets/images/Testimonials/stephen_alter.jpg", "alt", "wrapkit", 1, "testimonialImage"], [1, "author"], ["src", "assets/images/Testimonials/keith_jones.jpg", "alt", "wrapkit", 1, "testimonialImage"], ["src", "assets/images/Testimonials/vicky_guillen.jpg", "alt", "wrapkit", 1, "testimonialImage"], ["src", "assets/images/Testimonials/steve_shanahan.jpg", "alt", "wrapkit", 1, "testimonialImage"], [1, "swiper-pagination", "process-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "swipeColor"], ["id", "services", 1, "mobile"], [1, "captionServiceHeader", 2, "background-color", "rgb(147, 154, 163)"], [1, "service-overlay"], [1, "landing-text"], [1, "service-landing-text-inner"], [1, "title"], [1, "text-white"], [1, "service-caption", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('assets/images/Car1/098.jpg')", "text-shadow", "8px 8px 6px #000"], [2, "padding-top", "13%"], ["routerLinkActive", "router-link-active", 1, "btn-service", 3, "routerLink"], [1, "service-caption", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('assets/images/car3/190.jpg')", "text-shadow", "8px 8px 6px #000"], [1, ""], [2, "padding-top", "10%"], ["routerLinkActive", "router-link-active", 1, "btn-service", "mb-5", 3, "routerLink"], [1, "service-caption", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('assets/images/lexus1/270.jpg')", "text-shadow", "8px 8px 6px #000"], [1, "service-caption", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('assets/images/car/165.jpg')", "text-shadow", "8px 8px 6px #000"], [1, "service-caption", 2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url('assets/images/process/10.jpg')", "text-shadow", "8px 8px 6px #000"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "20 years of experience. Owner operated. We specialize in mobile bumper repair and bumper replacements or in house. all auto makes and models. We can come to you or you can come to us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Free Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_18_listener() { return ctx.toServices(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "20 years of experience. Owner operated. We specialize in mobile bumper repair and bumper replacements or in house. all auto makes and models. We can come to you or you can come to us. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Free Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Bumper Repair ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Bumper Replacement ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Lease Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Insurance ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Process ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Jared came highly recommended to me by my colleague, Steve. I needed him to repair my Porsche 911 that I don't trust to just anyone. Jared is meticulous when it comes to his craftsmanship on the repairs he does. He did a really great job and in a small amount of time. He also went out of his way to shuttle me from my home to work and back again, which was really helpful and made it easy on me. A few months after the repair, I had a second incident where the car rear got scuffed, I didn't hesitate to give Jared a call. He made it look better than new!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "- Stephen Alter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Ace Parking has been using Urgent Care Bumper Repair for 7 or more years for our own customers. Its inevitable to have our self-parking customers get a scuff or scrape or two and we always refer them to Jared. Urgent Care Bumper Repair comes out to our lots and fixes the car on the spot, so it has been a win-win situation for all involved. Well, it wasn't too long before I had my own need for repair on my BMW M5. As the Owner of Ace, I always heard wonderful feedback about the work Jared did for our customers....");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "- Keith Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Jared fixed the damage on my jeep a couple of different times. I have had a couple accidents, but been very luck to know someone like Jared to call on when one happens. He comes out to my house in Encinitas, takes just a couple of hours and my jeep looks as good as new when he is done. Its great to have his help, all I have to do is call him and I don't worry about it after that. He is so helpful, handling calls between insurance companies and dealers for parts, so that I don't have to... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "- Vicky Guillen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "q");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "The quality of the job Jared did on my Audi is remarkable. He really paid attention to details and treated it like it was his own car. Its like the damage never happened. There are a lot of places out there to choose from, but this is the only guy I call because I have seen his work and he really knows what he is doing. Its so convenient too, He came to my home and in a few of hours it was beautifully done. I was so impressed that I referred him to repair my boss' Porsche and he did an awesome job on that too.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "- Steve Shanahan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, " The craftsmanship that I put into your repair is unparalleled by others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "I take pride in my work and I will go out of my way to give you the best repair you are going to find. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Urgent Care Bumper Repair\u2019s expertise is in restoring your damaged bumper to as it was new.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Bumper Replacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Bumper Replacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Urgent Care Bumper Repair brings 20 years of experience in the field, and guarantees the best possible results when replacing the bumper on your car. You will think it came out of the factory like that!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Lease Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Lease Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "I will work with you to receive approval and repair damages prior to turning in your leased vehicle, so you can be worry free. Let me restore your vehicle to a finished state and help you avoid the costly return repair charges.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Insurance Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Insurance Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "UCBR works with ALL car insurance carriers and companies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Your satisfaction is guaranteed by a lifetime warranty (as long as you own the car).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "a", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "sms:17609949400?body=", ctx.sms, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c5));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 2.9rem;\r\n  text-transform: uppercase;\r\n  color:#fff;\r\n  margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-left: dotted 1px #fff;\r\n  border-right: dotted 1px #fff;\r\n  display: inline-block;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  transition: opacity 1s ease-in;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.5),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.5);\r\n}\r\n\r\n.menu[_ngcontent-%COMP%] {\r\n  padding-top: 11%;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%]{\r\n  font-size: 1.62em;\r\n\r\n}\r\n\r\n.testimonialImage[_ngcontent-%COMP%] {\r\n  width: 70px;\r\n  border-radius: 50%;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n}\r\n\r\n.mobile[_ngcontent-%COMP%]{\r\n  display: none !important;\r\n}\r\n\r\n.desktop[_ngcontent-%COMP%]{\r\n  display: inline-block !important;\r\n}\r\n\r\nq[_ngcontent-%COMP%]{\r\n\tpadding:5%;\r\n}\r\n\r\n.text[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.23rem;\r\n  \r\n  color: #fff;\r\n  text-shadow: 8px 8px 6px #000;\r\n  margin: 0;\r\n}\r\n\r\n.author[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  text-shadow: 8px 8px 6px #000;\r\n  font-size: 1.2em;\r\n}\r\n\r\nimg.imageLogo[_ngcontent-%COMP%]{\r\n\twidth:240px;\r\n\theight:54px;\r\n}\r\n\r\n.service-caption[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n  background-size: cover;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  height:600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image: url('/assets/images/home/background.jpg');\r\n\tbackground-size:cover;\r\n }\r\n\r\n.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 70%;\r\n  width: calc(var(--swiper-navigation-size)/ 44 * 27);\r\n  height: var(--swiper-navigation-size);\r\n  margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #fff;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.captionHeader[_ngcontent-%COMP%] {\r\n\theight:880px;\r\n\ttext-align: center;\r\n\tvertical-align: text-top;\r\n\tbackground-image:url(\"/assets/images/car/166.jpg\");\r\n  background-repeat: no-repeat;background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  -webkit-transition: opacity 1s ease-in-out;\r\n  -moz-transition: opacity 1s ease-in-out;\r\n  -o-transition: opacity 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n  animation: gradient 30s;\r\n  animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n }\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  background: #333;\r\n  color: #fff;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]{\r\n  background: rgba(192, 26, 43, 0.4);\r\n  border: 1px #fff solid !important;\r\n  color: #fff !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]:hover{\r\n  border: 1px #c01a2b solid !important;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  border: 1px #ccc solid;\r\n  width: 80%;\r\n  border-radius: 12px;\r\n  color: #fff;\r\n  padding: 20px;\r\n  text-align: center;\r\n  font-weight: 400 !important;\r\n  font-size: 1.25rem !important;\r\n  display: inline-block;\r\n  font-size: 16px;\r\n  margin: 4px 2px;\r\n  transition: background 500ms ease;\r\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover{\r\n  background: #f4f4f4;\r\n  color: red !important;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]{\r\n  height:880px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.overlay-testimonial[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.captionServiceHeader[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  background-image: url(\"/assets/images/car/166.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  animation: fill-images 30s;\r\n  -webkit-animation: fill-images 30s;\r\n  -moz-animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.service-landing-text-inner[_ngcontent-%COMP%] {\r\n  padding-top: 19%;\r\n}\r\n\r\n.btn-service[_ngcontent-%COMP%] {\r\n\tpadding: 0.5rem 2rem;\r\n\tborder: 1px #ccc solid;\r\n\tdisplay: inline-block;\r\n\tmargin: 2rem 0 0;\r\n\tborder-radius: 50px;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\ttransition: background 500ms ease;\r\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n  }\r\n\r\n.btn-service[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b;\r\n}\r\n\r\n.service-overlay[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n@keyframes fadeIn {\r\n  0% {opacity: 0;}\r\n  100% {opacity: 1;}\r\n}\r\n\r\n@keyframes fadeOut {\r\n  100% {opacity: 1;}\r\n  0% {opacity: 0;}\r\n}\r\n\r\n@keyframes fill-images{\r\n\r\n\t0%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/271.jpg\");\r\n    background-position: 0% 100%;\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\t}\r\n\r\n\t10%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\r\n\t}\r\n\r\n\t20%{\r\n    background-image:url(\"/assets/images/lexus1 - Copy/267.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\t}\r\n\r\n\t30%{\r\n    background-image:url(\"/assets/images/lexus1 - Copy/270.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\t}\r\n\t40%{\r\n    background-image:url(\"/assets/images/porsche - Copy/155.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\t}\r\n  50%{\r\n    background-image:url(\"/assets/images/process/11.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\r\n\t}\r\n\t60%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    background-position: 100% 0%;\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\t}\r\n\t70%{\r\n    background-image:url(\"/assets/images/97_carrera/44.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n  }\r\n  75%{\r\n    background-image:url(\"/assets/images/97_carrera/45.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n  }\r\n\t80%{\r\n    background-image:url(\"/assets/images/M4 - Copy/079.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\r\n\t}\r\n\t90%{\r\n    background-image:url(\"/assets/images/M4 - Copy/080.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\t}\r\n\t100%{\r\n    background-image:url(\"/assets/images/M4 - Copy/082.jpg\");\r\n    animation-name: fadeIn;\r\n    animation-name: fadeOut;\r\n    -webkit-animation-name: fadeIn;\r\n    -webkit-animation-name: fadeOut;\r\n\t}\r\n}\r\n\r\n@media screen and (max-width: 900px){\r\n  .captionHeader[_ngcontent-%COMP%] {\r\n    background-size: cover;\r\n  }\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:880px;\r\n    background: rgba(0, 0, 0, 0.3);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 830px){\r\n  .desktop[_ngcontent-%COMP%]{\r\n    display: none !important;\r\n  }\r\n\r\n  .mobile[_ngcontent-%COMP%]{\r\n    display: inline-block !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n\r\n  .captionHeader[_ngcontent-%COMP%] {\r\n    height:1000px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image:url(\"/assets/images/car/166.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n   }\r\n\r\n   .shadow[_ngcontent-%COMP%] {\r\n    filter: drop-shadow( 4px 4px 3px rgba(0, 0, 0, .7));\r\n  }\r\n\r\n\r\n   .mobile[_ngcontent-%COMP%]{\r\n    display: inline-block !important;\r\n  }\r\n\r\n\r\n  .desktop[_ngcontent-%COMP%]{\r\n    display: none !important;\r\n  }\r\n\r\n   .subtitle[_ngcontent-%COMP%]{\r\n      font-size:23px !important;\r\n  }\r\n\r\n   .caption[_ngcontent-%COMP%] {\r\n    height:620px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-image: url('/assets/images/home/background.jpg');\r\n    background-size:cover;\r\n   }\r\n\r\n   .overlay[_ngcontent-%COMP%]{\r\n      height:1000px;\r\n      background: rgba(0, 0, 0, 0.4);\r\n    }\r\n\r\n    .overlay-testimonial[_ngcontent-%COMP%]{\r\n      height:620px;\r\n      background: rgba(0, 0, 0, 0.4);\r\n    }\r\n\r\n    .captionServiceHeader[_ngcontent-%COMP%] {\r\n      height: 400px;\r\n      text-align: center;\r\n      vertical-align: text-top;\r\n      background-image: url(/assets/images/car/166.jpg);\r\n      background-repeat: no-repeat;\r\n      background-size: 100% 100%;\r\n      text-shadow: 8px 8px 6px #000;\r\n    }\r\n\r\n    .service-caption[_ngcontent-%COMP%] {\r\n      height: 375px;\r\n      padding: 0px;\r\n      text-align: center;\r\n      background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n      background-size: cover;\r\n    }\r\n\r\n    .service-overlay[_ngcontent-%COMP%]{\r\n      height:620px;\r\n      background: rgba(0, 0, 0, 0.4);\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 321px){\r\n\r\n  .captionHeader[_ngcontent-%COMP%] {\r\n    height:970px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image:url(\"/assets/images/car/166.jpg\");\r\n    background-repeat: no-repeat;background-size: 100% 970px;\r\n    text-shadow: 8px 8px 6px #000;\r\n   }\r\n   .overlay-testimonial[_ngcontent-%COMP%]{\r\n    height:720px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n  .caption[_ngcontent-%COMP%] {\r\n    height:700px !important;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-size:cover;\r\n  }\r\n\r\n  .swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n        top:80%;\r\n  }\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:970px;\r\n    background: rgba(0, 0, 0, 0.3);\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 380px){\r\n  .caption[_ngcontent-%COMP%] {\r\n    height:720px !important;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-size:cover;\r\n   }\r\n\r\n   .overlay[_ngcontent-%COMP%]{\r\n\r\n    height:1000px;\r\n    background: rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n  .overlay-testimonial[_ngcontent-%COMP%]{\r\n    height:720px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n   .swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n    top:80%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 281px){\r\n  .captionHeader[_ngcontent-%COMP%] {\r\n    height:1100px;\r\n    width:100%;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image:url(\"/assets/images/car/166.jpg\");\r\n    background-repeat: no-repeat;background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n  }\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:1100px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n  .overlay-testimonial[_ngcontent-%COMP%]{\r\n    height:800px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n  main[_ngcontent-%COMP%] {\r\n     width: 281px;;\r\n   }\r\n   .caption[_ngcontent-%COMP%] {\r\n    height:800px !important;\r\n   }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBdUU7O0FBRXZFO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0MsV0FBVztBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osY0FBYztFQUNkLDJDQUEyQztFQUMzQyw4QkFBOEI7RUFDOUI7cUNBQ21DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCOztBQUVuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUdBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixnQ0FBZ0M7RUFDaEMsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLGdCQUFnQjtBQUNsQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQiwrSEFBK0g7RUFDL0gsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkRBQTJEO0NBQzVELHFCQUFxQjtDQUNyQjs7QUFFQTtFQUNDLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbURBQW1EO0VBQ25ELHFDQUFxQztFQUNyQyx1REFBdUQ7RUFDdkQsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVDO0NBQ0EsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQix3QkFBd0I7Q0FDeEIsa0RBQWtEO0VBQ2pELDRCQUE0QixDQUFDLDBCQUEwQjtFQUN2RCw2QkFBNkI7RUFDN0IsMENBQTBDO0VBQzFDLHVDQUF1QztFQUN2QyxxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLHVCQUF1QjtFQUN2QiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLG1DQUFtQztDQUNwQzs7QUFFQTtFQUNDLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDO0VBQ2pDLDZDQUE2QztBQUMvQzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLG1EQUFtRDtFQUNuRCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLCtCQUErQjtFQUMvQiwyQ0FBMkM7RUFDM0MsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlDQUFpQztDQUNqQyw2Q0FBNkM7RUFDNUM7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBT0E7RUFDRSxJQUFJLFVBQVUsQ0FBQztFQUNmLE1BQU0sVUFBVSxDQUFDO0FBQ25COztBQU9BO0VBQ0UsTUFBTSxVQUFVLENBQUM7RUFDakIsSUFBSSxVQUFVLENBQUM7QUFDakI7O0FBSUM7O0NBRUE7RUFDQyw0REFBNEQ7SUFDMUQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLCtCQUErQjtDQUNsQzs7Q0FFQTtJQUNHLDBEQUEwRDtJQUMxRCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrQkFBK0I7O0NBRWxDOztDQUVBO0lBQ0csNERBQTREO0lBQzVELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLCtCQUErQjtDQUNsQzs7Q0FFQTtJQUNHLDREQUE0RDtJQUM1RCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrQkFBK0I7Q0FDbEM7Q0FDQTtJQUNHLDZEQUE2RDtJQUM3RCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrQkFBK0I7Q0FDbEM7RUFDQztJQUNFLHFEQUFxRDtJQUNyRCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrQkFBK0I7O0NBRWxDO0NBQ0E7SUFDRywwREFBMEQ7SUFDMUQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLCtCQUErQjtDQUNsQztDQUNBO0lBQ0csd0RBQXdEO0lBQ3hELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLCtCQUErQjtFQUNqQztFQUNBO0lBQ0Usd0RBQXdEO0lBQ3hELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLCtCQUErQjtFQUNqQztDQUNEO0lBQ0csd0RBQXdEO0lBQ3hELHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsOEJBQThCO0lBQzlCLCtCQUErQjs7Q0FFbEM7Q0FDQTtJQUNHLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrQkFBK0I7Q0FDbEM7Q0FDQTtJQUNHLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QiwrQkFBK0I7Q0FDbEM7QUFDRDs7QUFPQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGdDQUFnQztFQUNsQztBQUNGOztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsa0RBQWtEO0lBQ2xELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNkJBQTZCO0dBQzlCOztHQUVBO0lBRUMsbURBQW1EO0VBQ3JEOzs7R0FHQztJQUNDLGdDQUFnQztFQUNsQzs7O0VBR0E7SUFDRSx3QkFBd0I7RUFDMUI7O0dBRUM7TUFDRyx5QkFBeUI7RUFDN0I7O0dBRUM7SUFDQyxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QscUJBQXFCO0dBQ3RCOztHQUVBO01BQ0csYUFBYTtNQUNiLDhCQUE4QjtJQUNoQzs7SUFFQTtNQUNFLFlBQVk7TUFDWiw4QkFBOEI7SUFDaEM7O0lBRUE7TUFDRSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLHdCQUF3QjtNQUN4QixpREFBaUQ7TUFDakQsNEJBQTRCO01BQzVCLDBCQUEwQjtNQUMxQiw2QkFBNkI7SUFDL0I7O0lBRUE7TUFDRSxhQUFhO01BQ2IsWUFBWTtNQUNaLGtCQUFrQjtNQUNsQiwrSEFBK0g7TUFDL0gsc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsWUFBWTtNQUNaLDhCQUE4QjtJQUNoQztBQUNKOztBQUVBOztFQUVFO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsa0RBQWtEO0lBQ2xELDRCQUE0QixDQUFDLDJCQUEyQjtJQUN4RCw2QkFBNkI7R0FDOUI7R0FDQTtJQUNDLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7RUFDdkI7O0VBRUE7UUFDTSxPQUFPO0VBQ2I7RUFDQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIscUJBQXFCO0dBQ3RCOztHQUVBOztJQUVDLGFBQWE7SUFDYiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0VBQ2hDOztHQUVDO0lBQ0MsT0FBTztFQUNUO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixrREFBa0Q7SUFDbEQsNEJBQTRCLENBQUMsc0JBQXNCO0lBQ25ELDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztFQUNBO0tBQ0csWUFBWTtHQUNkO0dBQ0E7SUFDQyx1QkFBdUI7R0FDeEI7QUFDSCIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQnKTtcclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNoZWFkZXIgaDIge1xyXG4gIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG5oNiB7XHJcblx0Y29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gIGJveC1zaGFkb3c6IDMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjUpLFxyXG4gICAgLTMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG59XHJcblxyXG4ubWVudSB7XHJcbiAgcGFkZGluZy10b3A6IDExJTtcclxufVxyXG5cclxuLmljb257XHJcbiAgZm9udC1zaXplOiAxLjYyZW07XHJcblxyXG59XHJcblxyXG4udGVzdGltb25pYWxJbWFnZSB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbn1cclxuXHJcbi5tb2JpbGV7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmRlc2t0b3B7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnF7XHJcblx0cGFkZGluZzo1JTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxLjIzcmVtO1xyXG4gIC8qIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmF1dGhvciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG5cclxuaW1nLmltYWdlTG9nb3tcclxuXHR3aWR0aDoyNDBweDtcclxuXHRoZWlnaHQ6NTRweDtcclxufVxyXG5cclxuLnNlcnZpY2UtY2FwdGlvbiB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpLCByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpKSx1cmwoL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIGhlaWdodDo2MDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLmpwZycpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuIH1cclxuXHJcbiAuc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA3MCU7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDQ0ICogMjcpO1xyXG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpLyAyKTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4gLmNhcHRpb25IZWFkZXIge1xyXG5cdGhlaWdodDo4ODBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0dmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2FyLzE2Ni5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW4tb3V0O1xyXG4gIC1vLXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOiBncmFkaWVudCAzMHM7XHJcbiAgYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuIH1cclxuXHJcbiAjaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5hbHR7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDI2LCA0MywgMC40KTtcclxuICBib3JkZXI6IDFweCAjZmZmIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLmFsdDpob3ZlcntcclxuICBib3JkZXI6IDFweCAjYzAxYTJiIHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlcjogMXB4ICNjY2Mgc29saWQ7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbjogNHB4IDJweDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDUwMG1zIGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMTBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xyXG59XHJcblxyXG4uYnRuOmhvdmVye1xyXG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3ZlcmxheXtcclxuICBoZWlnaHQ6ODgwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ub3ZlcmxheS10ZXN0aW1vbmlhbHtcclxuICBoZWlnaHQ6NjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4uY2FwdGlvblNlcnZpY2VIZWFkZXIge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYXIvMTY2LmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gIGFuaW1hdGlvbjogZmlsbC1pbWFnZXMgMzBzO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgLW1vei1hbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4uc2VydmljZS1sYW5kaW5nLXRleHQtaW5uZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxOSU7XHJcbn1cclxuXHJcbi5idG4tc2VydmljZSB7XHJcblx0cGFkZGluZzogMC41cmVtIDJyZW07XHJcblx0Ym9yZGVyOiAxcHggI2NjYyBzb2xpZDtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luOiAycmVtIDAgMDtcclxuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHR0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDUwMG1zIGVhc2U7XHJcblx0Ym94LXNoYWRvdzogMTBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMzcpO1xyXG4gIH1cclxuXHJcbi5idG4tc2VydmljZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBjb2xvcjogI2MwMWEyYjtcclxufVxyXG5cclxuLnNlcnZpY2Utb3ZlcmxheXtcclxuICBoZWlnaHQ6NjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7b3BhY2l0eTogMDt9XHJcbiAgMTAwJSB7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAwJSB7b3BhY2l0eTogMDt9XHJcbiAgMTAwJSB7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlT3V0IHtcclxuICAxMDAlIHtvcGFjaXR5OiAxO31cclxuICAwJSB7b3BhY2l0eTogMDt9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmFkZU91dCB7XHJcbiAgMTAwJSB7b3BhY2l0eTogMTt9XHJcbiAgMCUge29wYWNpdHk6IDA7fVxyXG59XHJcblxyXG5cclxuXHJcbiBAa2V5ZnJhbWVzIGZpbGwtaW1hZ2Vze1xyXG5cclxuXHQwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvbGV4dXMxIC0gQ29weS8yNzEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCUgMTAwJTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcblx0fVxyXG5cclxuXHQxMCV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL0NhcjEgLSBDb3B5LzA4OS5qcGdcIik7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG5cclxuXHR9XHJcblxyXG5cdDIwJXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvbGV4dXMxIC0gQ29weS8yNjcuanBnXCIpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuXHR9XHJcblxyXG5cdDMwJXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvbGV4dXMxIC0gQ29weS8yNzAuanBnXCIpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuXHR9XHJcblx0NDAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wb3JzY2hlIC0gQ29weS8xNTUuanBnXCIpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuXHR9XHJcbiAgNTAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wcm9jZXNzLzExLmpwZ1wiKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcblxyXG5cdH1cclxuXHQ2MCV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL0NhcjEgLSBDb3B5LzA4OS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDAlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuXHR9XHJcblx0NzAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy85N19jYXJyZXJhLzQ0LmpwZ1wiKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcbiAgfVxyXG4gIDc1JXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvOTdfY2FycmVyYS80NS5qcGdcIik7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG4gIH1cclxuXHQ4MCV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL000IC0gQ29weS8wNzkuanBnXCIpO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuXHJcblx0fVxyXG5cdDkwJXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvTTQgLSBDb3B5LzA4MC5qcGdcIik7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0O1xyXG5cdH1cclxuXHQxMDAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9NNCAtIENvcHkvMDgyLmpwZ1wiKTtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XHJcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KXtcclxuICAuY2FwdGlvbkhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuICAub3ZlcmxheXtcclxuICAgIGhlaWdodDo4ODBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzMHB4KXtcclxuICAuZGVza3RvcHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tb2JpbGV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuXHJcbiAgLmNhcHRpb25IZWFkZXIge1xyXG4gICAgaGVpZ2h0OjEwMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvY2FyLzE2Ni5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gICB9XHJcblxyXG4gICAuc2hhZG93IHtcclxuICAgIC13ZWJraXQtZmlsdGVyOiBkcm9wLXNoYWRvdyggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAuNykpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdyggNHB4IDRweCAzcHggcmdiYSgwLCAwLCAwLCAuNykpO1xyXG4gIH1cclxuXHJcblxyXG4gICAubW9iaWxle1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmRlc2t0b3B7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAgLnN1YnRpdGxle1xyXG4gICAgICBmb250LXNpemU6MjNweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgIC5jYXB0aW9uIHtcclxuICAgIGhlaWdodDo2MjBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICB9XHJcblxyXG4gICAub3ZlcmxheXtcclxuICAgICAgaGVpZ2h0OjEwMDBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdmVybGF5LXRlc3RpbW9uaWFse1xyXG4gICAgICBoZWlnaHQ6NjIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FwdGlvblNlcnZpY2VIZWFkZXIge1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZXJ2aWNlLWNhcHRpb24ge1xyXG4gICAgICBoZWlnaHQ6IDM3NXB4O1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCksIHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCkpLHVybCgvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQuanBnKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc2VydmljZS1vdmVybGF5e1xyXG4gICAgICBoZWlnaHQ6NjIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIxcHgpe1xyXG5cclxuICAuY2FwdGlvbkhlYWRlciB7XHJcbiAgICBoZWlnaHQ6OTcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtiYWNrZ3JvdW5kLXNpemU6IDEwMCUgOTcwcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICAgfVxyXG4gICAub3ZlcmxheS10ZXN0aW1vbmlhbHtcclxuICAgIGhlaWdodDo3MjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcblxyXG4gIC5jYXB0aW9uIHtcclxuICAgIGhlaWdodDo3MDBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgICAgICAgdG9wOjgwJTtcclxuICB9XHJcbiAgLm92ZXJsYXl7XHJcbiAgICBoZWlnaHQ6OTcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzgwcHgpe1xyXG4gIC5jYXB0aW9uIHtcclxuICAgIGhlaWdodDo3MjBweCAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICB9XHJcblxyXG4gICAub3ZlcmxheXtcclxuXHJcbiAgICBoZWlnaHQ6MTAwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXktdGVzdGltb25pYWx7XHJcbiAgICBoZWlnaHQ6NzIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG5cclxuICAgLnN3aXBlci1idXR0b24tbmV4dCwgLnN3aXBlci1idXR0b24tcHJldiB7XHJcbiAgICB0b3A6ODAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjgxcHgpe1xyXG4gIC5jYXB0aW9uSGVhZGVyIHtcclxuICAgIGhlaWdodDoxMTAwcHg7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9jYXIvMTY2LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gIH1cclxuICAub3ZlcmxheXtcclxuICAgIGhlaWdodDoxMTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG4gIC5vdmVybGF5LXRlc3RpbW9uaWFse1xyXG4gICAgaGVpZ2h0OjgwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuICBtYWluIHtcclxuICAgICB3aWR0aDogMjgxcHg7O1xyXG4gICB9XHJcbiAgIC5jYXB0aW9uIHtcclxuICAgIGhlaWdodDo4MDBweCAhaW1wb3J0YW50O1xyXG4gICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiUrl: 'http://192.168.0.2/src5/API/'
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

/***/ "CCp/":
/*!******************************************************!*\
  !*** ./src/app/leasereturn/leasereturn.component.ts ***!
  \******************************************************/
/*! exports provided: LeasereturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeasereturnComponent", function() { return LeasereturnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");



const _c0 = function () { return ["/estimate"]; };
const _c1 = function () { return ["/service"]; };
class LeasereturnComponent {
    constructor() {
        this.config = {
            effect: 'coverflow',
            slidesPerView: 'auto',
            init: true,
            loop: false,
            coverflowEffect: {
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                grabCursor: true,
                slideShadows: false
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    }
    // tslint:disable-next-line: typedef
    toHeader() {
        document.getElementById('header').scrollIntoView();
    }
    ngOnInit() {
    }
}
LeasereturnComponent.ɵfac = function LeasereturnComponent_Factory(t) { return new (t || LeasereturnComponent)(); };
LeasereturnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LeasereturnComponent, selectors: [["app-leasereturn"]], decls: 90, vars: 7, consts: [[1, "captionBumperreplacement", "mt-5", 2, "background-color", "rgb(147, 154, 163)"], [1, "overlay"], [1, "bumperreplace-landing-text"], [1, "bumperreplace-landing-text-inner"], [1, "title", "mb-3"], [1, "ml-3", "mr-3"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "alt", 3, "routerLink"], ["id", "view-work", 1, "btn", "mb-5", 3, "click"], ["id", "bumperreplacement", 1, "images"], ["id", "header"], [1, "caption"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/lexus1/246.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/247.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/248.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/249.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/250.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/251.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/252.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/253.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/254.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/255.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/256.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/257.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/258.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/259.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/260.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/261.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/262.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/263.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/264.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/265.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/266.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/267.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/268.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/269.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/270.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/271.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/lexus1/272.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n              url('assets/images/lexus1/272.jpg')", "background-size", "cover"], [1, "pt-5"], [1, "final"], [2, "font-size", "20px"], [1, "swiper-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "swipeColor"], [1, "captionBottom"], [1, "theButton"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "route", 3, "routerLink"]], template: function LeasereturnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lease Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Urgent Care Bumper Repair offers only the highest level of excellence, whether you\u2019re looking for something minor or major to be done to your vehicle. With over 20 years of experience, I have seen it all and handled it all! I am dedicated to exceeding even your highest expectations, which will allow you to rest easy, knowing that the job is being done correctly and thoroughly the first time. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Get A Free Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LeasereturnComponent_Template_a_click_12_listener() { return ctx.toHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h1", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Return To Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n.captionBumperreplacement[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  background-image: url(/assets/images/car/166.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.overlay-last[_ngcontent-%COMP%]{\r\n  height:inherit;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]{\r\n  background: rgba(192, 26, 43, 0.4);\r\n  border: 1px #fff solid !important;\r\n  color: #fff !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]:hover{\r\n  border: 1px #c01a2b solid !important;\r\n}\r\n\r\n.final[_ngcontent-%COMP%]{\r\n  font-size: 80px;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.final-image[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n}\r\n\r\n@keyframes fill-images{\r\n\r\n\t0%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/271.jpg\");\r\n    background-position: 0% 100%;\r\n\t}\r\n\r\n\t10%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n\r\n\t}\r\n\r\n\t20%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/267.jpg\");\r\n\t}\r\n\r\n\t30%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/270.jpg\");\r\n\t}\r\n\t40%{\r\n\t\tbackground-image:url(\"/assets/images/porsche - Copy/155.jpg\");\r\n\t}\r\n  50%{\r\n\t\tbackground-image:url(\"/assets/images/process/11.jpg\");\r\n\r\n\t}\r\n\t60%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    background-position: 100% 0%;\r\n\t}\r\n\t70%{\r\n\t\tbackground-image:url(\"/assets/images/97_carrera/44.jpg\");\r\n  }\r\n  75%{\r\n    background-image:url(\"/assets/images/97_carrera/45.jpg\");\r\n  }\r\n\t80%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/079.jpg\");\r\n\r\n\t}\r\n\t90%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/080.jpg\");\r\n\t}\r\n\t100%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/082.jpg\");\r\n\t}\r\n}\r\n\r\n.bumperreplace-landing-text[_ngcontent-%COMP%] {\r\n  padding-top: 20%;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n  background-size: cover;\r\n}\r\n\r\n.categoryLogo[_ngcontent-%COMP%]{\r\n\r\n  width:320px;\r\n  height:80px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding:0%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.captionBottom[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  padding: 0px;\r\n  color: rgb(256, 256, 256);\r\n  text-align: center;\r\n  background: #333;\r\n}\r\n\r\n.captionImages[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n\r\n.caption1[_ngcontent-%COMP%]{\r\n  height:100px;\r\n  color:rgb(256, 256, 256);\r\n  background: #c3c3c1;\r\n   background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n}\r\n\r\n.bumperreplacement-landing-text[_ngcontent-%COMP%] {\r\n  padding-top: 20%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 2.9rem;\r\n  text-transform: uppercase;\r\n  color:#fff;\r\n  margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  transition: opacity 1s ease-in;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  background: #333;\r\n  color: #fff;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-left: dotted 1px #fff;\r\n  border-right: dotted 1px #fff;\r\n  display: inline-block;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n\tpadding: 0.5rem 2rem;\r\n\tborder: 1px #ccc solid;\r\n\tdisplay: inline-block;\r\n\tmargin: 2rem 0 0;\r\n\tborder-radius: 50px;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\ttransition: background 500ms ease;\r\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b !important;\r\n}\r\n\r\n.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: calc(var(--swiper-navigation-size)/ 44 * 27);\r\n  height: var(--swiper-navigation-size);\r\n  margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.swiper-pagination-white[_ngcontent-%COMP%] {\r\n  --swiper-pagination-color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n\r\n  .captionBumperreplacement[_ngcontent-%COMP%] {\r\n    height: 600px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n  .caption[_ngcontent-%COMP%] {\r\n    height:350px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-size:cover;\r\n    background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n  }\r\n\r\n   .caption1[_ngcontent-%COMP%]{\r\n     height:70px;\r\n     color:rgb(256, 256, 256);\r\n     background: #c3c3c1;\r\n     background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n   }\r\n\r\n  .overlay-last[_ngcontent-%COMP%]{\r\n    height:inherit;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]{\r\n    font-size: 47px;\r\n  }\r\n\r\n  .final-image[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n  }\r\n\r\n   .overlay[_ngcontent-%COMP%]{\r\n    height:600px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n   .captionImages[_ngcontent-%COMP%]{\r\n     height:350px;\r\n   }\r\n   .categoryLogo[_ngcontent-%COMP%]{\r\n\r\n    width:224px;\r\n    height:56px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding:0%;\r\n   }\r\n}\r\n\r\n@media screen and (max-width: 281px){\r\n\r\n  .captionBumperreplacement[_ngcontent-%COMP%] {\r\n    height: 650px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:650px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlYXNlcmV0dXJuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFOztBQUV2RTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlEQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7Q0FFQztFQUNDLDREQUE0RDtJQUMxRCw0QkFBNEI7Q0FDL0I7O0NBRUE7SUFDRywwREFBMEQ7O0NBRTdEOztDQUVBO0VBQ0MsNERBQTREO0NBQzdEOztDQUVBO0VBQ0MsNERBQTREO0NBQzdEO0NBQ0E7RUFDQyw2REFBNkQ7Q0FDOUQ7RUFDQztFQUNBLHFEQUFxRDs7Q0FFdEQ7Q0FDQTtJQUNHLDBEQUEwRDtJQUMxRCw0QkFBNEI7Q0FDL0I7Q0FDQTtFQUNDLHdEQUF3RDtFQUN4RDtFQUNBO0lBQ0Usd0RBQXdEO0VBQzFEO0NBQ0Q7RUFDQyx3REFBd0Q7O0NBRXpEO0NBQ0E7RUFDQyx3REFBd0Q7Q0FDekQ7Q0FDQTtFQUNDLHdEQUF3RDtDQUN6RDtBQUNEOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0hBQStIO0VBQy9ILHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQkFBbUI7R0FLbEIsK0RBQStEO0FBQ2xFOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQztxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlDQUFpQztDQUNqQyw2Q0FBNkM7RUFDNUM7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtREFBbUQ7RUFDbkQscUNBQXFDO0VBQ3JDLHVEQUF1RDtFQUN2RCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0FBQy9COztBQUdBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaURBQWlEO0lBQ2pELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0hBQStIO0VBQ2pJOztHQUVDO0tBQ0UsV0FBVztLQUNYLHdCQUF3QjtLQUN4QixtQkFBbUI7S0FLbkIsK0RBQStEO0dBQ2pFOztFQUVEO0lBQ0UsY0FBYztJQUNkLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0dBRUM7SUFDQyxZQUFZO0lBQ1osOEJBQThCO0VBQ2hDOztHQUVDO0tBQ0UsWUFBWTtHQUNkO0dBQ0E7O0lBRUMsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0dBQ1g7QUFDSDs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0FBRUYiLCJmaWxlIjoibGVhc2VyZXR1cm4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCcpO1xyXG5cclxuLmNhcHRpb25CdW1wZXJyZXBsYWNlbWVudCB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jYXIvMTY2LmpwZyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xyXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG59XHJcblxyXG4ub3ZlcmxheXtcclxuICBoZWlnaHQ6NjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG4ub3ZlcmxheS1sYXN0e1xyXG4gIGhlaWdodDppbmhlcml0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxufVxyXG5cclxuLmFsdHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE5MiwgMjYsIDQzLCAwLjQpO1xyXG4gIGJvcmRlcjogMXB4ICNmZmYgc29saWQgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4uYWx0OmhvdmVye1xyXG4gIGJvcmRlcjogMXB4ICNjMDFhMmIgc29saWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZpbmFse1xyXG4gIGZvbnQtc2l6ZTogODBweDtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLmZpbmFsLWltYWdle1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbC1pbWFnZXN7XHJcblxyXG5cdDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI3MS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAxMDAlO1xyXG5cdH1cclxuXHJcblx0MTAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9DYXIxIC0gQ29weS8wODkuanBnXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cdDIwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvbGV4dXMxIC0gQ29weS8yNjcuanBnXCIpO1xyXG5cdH1cclxuXHJcblx0MzAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI3MC5qcGdcIik7XHJcblx0fVxyXG5cdDQwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvcG9yc2NoZSAtIENvcHkvMTU1LmpwZ1wiKTtcclxuXHR9XHJcbiAgNTAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wcm9jZXNzLzExLmpwZ1wiKTtcclxuXHJcblx0fVxyXG5cdDYwJXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvQ2FyMSAtIENvcHkvMDg5LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMCU7XHJcblx0fVxyXG5cdDcwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvOTdfY2FycmVyYS80NC5qcGdcIik7XHJcbiAgfVxyXG4gIDc1JXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvOTdfY2FycmVyYS80NS5qcGdcIik7XHJcbiAgfVxyXG5cdDgwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvTTQgLSBDb3B5LzA3OS5qcGdcIik7XHJcblxyXG5cdH1cclxuXHQ5MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL000IC0gQ29weS8wODAuanBnXCIpO1xyXG5cdH1cclxuXHQxMDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9NNCAtIENvcHkvMDgyLmpwZ1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbi5idW1wZXJyZXBsYWNlLWxhbmRpbmctdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDIwJTtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTYsIDI1NiwgMjU2LCAwLjc4KSwgcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjc4KSksdXJsKC9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC5qcGcpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbi5jYXRlZ29yeUxvZ297XHJcblxyXG4gIHdpZHRoOjMyMHB4O1xyXG4gIGhlaWdodDo4MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nOjAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FwdGlvbkJvdHRvbSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgY29sb3I6IHJnYigyNTYsIDI1NiwgMjU2KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxufVxyXG5cclxuLmNhcHRpb25JbWFnZXMge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uMXtcclxuICBoZWlnaHQ6MTAwcHg7XHJcbiAgY29sb3I6cmdiKDI1NiwgMjU2LCAyNTYpO1xyXG4gIGJhY2tncm91bmQ6ICNjM2MzYzE7XHJcbiAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24odG8gcmlnaHQpLCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjZmZmZmZmKSwgdG8oI2MzYzNjMSkpO1xyXG4gICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG59XHJcblxyXG4uYnVtcGVycmVwbGFjZW1lbnQtbGFuZGluZy10ZXh0IHtcclxuICBwYWRkaW5nLXRvcDogMjAlO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIuOXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG4gICAgLTMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNoZWFkZXIgaDIge1xyXG4gIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuXHRib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW46IDJyZW0gMCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQgNTAwbXMgZWFzZTtcclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgfVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBjb2xvcjogI2MwMWEyYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDQ0ICogMjcpO1xyXG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpLyAyKTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjYWUxODI2O1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xyXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICNhZTE4MjY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcblxyXG4gIC5jYXB0aW9uQnVtcGVycmVwbGFjZW1lbnQge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jYXIvMTY2LmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gICAgYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5jYXB0aW9uIHtcclxuICAgIGhlaWdodDozNTBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpLCByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpKSx1cmwoL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLmpwZyk7XHJcbiAgfVxyXG5cclxuICAgLmNhcHRpb24xe1xyXG4gICAgIGhlaWdodDo3MHB4O1xyXG4gICAgIGNvbG9yOnJnYigyNTYsIDI1NiwgMjU2KTtcclxuICAgICBiYWNrZ3JvdW5kOiAjYzNjM2MxO1xyXG4gICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24odG8gcmlnaHQpLCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZmZmZmYpLCB0bygjYzNjM2MxKSk7XHJcbiAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgIH1cclxuXHJcbiAgLm92ZXJsYXktbGFzdHtcclxuICAgIGhlaWdodDppbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xyXG4gIH1cclxuXHJcbiAgLmZpbmFse1xyXG4gICAgZm9udC1zaXplOiA0N3B4O1xyXG4gIH1cclxuXHJcbiAgLmZpbmFsLWltYWdle1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICB9XHJcblxyXG4gICAub3ZlcmxheXtcclxuICAgIGhlaWdodDo2MDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcblxyXG4gICAuY2FwdGlvbkltYWdlc3tcclxuICAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgIH1cclxuICAgLmNhdGVnb3J5TG9nb3tcclxuXHJcbiAgICB3aWR0aDoyMjRweDtcclxuICAgIGhlaWdodDo1NnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6MCU7XHJcbiAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMjgxcHgpe1xyXG5cclxuICAuY2FwdGlvbkJ1bXBlcnJlcGxhY2VtZW50IHtcclxuICAgIGhlaWdodDogNjUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2FyLzE2Ni5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICAgIGFuaW1hdGlvbjogZmlsbC1pbWFnZXMgMzBzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXl7XHJcbiAgICBoZWlnaHQ6NjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "FQCQ":
/*!********************************************************!*\
  !*** ./src/app/bumperrepair/bumperrepair.component.ts ***!
  \********************************************************/
/*! exports provided: BumperrepairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BumperrepairComponent", function() { return BumperrepairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");



const _c0 = function () { return ["/estimate"]; };
const _c1 = function () { return ["/service"]; };
class BumperrepairComponent {
    constructor() {
        this.config = {
            effect: 'coverflow',
            slidesPerView: 'auto',
            grabCursor: true,
            init: true,
            loop: false,
            coverflowEffect: {
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
    }
    // tslint:disable-next-line: typedef
    toHeader() {
        document.getElementById('header').scrollIntoView();
    }
    ngOnInit() {
    }
}
BumperrepairComponent.ɵfac = function BumperrepairComponent_Factory(t) { return new (t || BumperrepairComponent)(); };
BumperrepairComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BumperrepairComponent, selectors: [["app-bumperrepair"]], decls: 253, vars: 19, consts: [[1, "captionBumperRepairHeader", "mt-5", 2, "background-color", "rgb(0,0,0)"], [1, "overlay"], [1, "bumper-landing-text"], [1, "bumper-landing-text-inner"], [1, "title"], [1, "text-white", "ml-3", "mr-3"], [1, "text-white"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "alt", 3, "routerLink"], ["id", "view-work", 1, "btn", 3, "click"], ["id", "bumperrepair", 1, "images"], ["id", "header"], [1, "caption"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/M4/069.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/070.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/071.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/072.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/073.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/074.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/075.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/076.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/077.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/078.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/079.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/080.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/M4/081.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/M4/081.jpg')", "background-size", "cover"], [1, "pt-5"], [1, "final"], [2, "font-size", "20px"], [1, "swiper-pagination", "M4-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "M4-swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "M4-swiper-button-next", "swipeColor"], [1, "caption1"], ["src", "assets/images/logo2.png", 1, "categoryLogo"], ["src", "assets/images/Car1/082.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/083.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/084.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/085.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/086.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/087.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/088.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/091.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/092.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/093.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/094.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/095.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/096.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/097.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Car1/098.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/Car1/098.jpg')"], [1, "swiper-pagination", "car1-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "car1-swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "car1-swiper-button-next", "swipeColor"], ["src", "assets/images/Aptera/IMG_1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_2.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_3.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_4.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_5.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_6.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_7.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_8.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_9.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_10.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_11.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_12.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_13.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_14.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_15.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_16.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_17.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_18.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_19.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_20.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_21.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_22.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_23.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_24.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_25.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_26.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_27.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_28.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/Aptera/IMG_29.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/Aptera/IMG_29.jpg')", "background-size", "cover"], [1, "swiper-pagination", "aptera-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "aptera-swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "aptera-swiper-button-next", "swipeColor"], ["src", "assets/images/porsche/150.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/porsche/151.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/porsche/152.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/porsche/153.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/porsche/154.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/porsche/155.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/porsche/155.jpg')"], [1, "swiper-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "porsche-swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "porsche-swiper-button-next", "swipeColor"], ["src", "assets/images/suv/1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/3.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/4.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/5.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/6.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/7.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/8.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/9.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/10.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/11.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/suv/12.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/suv/12.jpg')", "background-size", "cover"], [1, "captionBottom"], [1, "theButton"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", 3, "routerLink"]], template: function BumperrepairComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Not all plastic bumpers need to be replaced; they can often be repaired to factory finish in our cost-efficient, quick and durable process.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Urgent Care Bumper Repair\u2019s expertise is in restoring your damaged bumper to as it was new. If necessary, we can replace your parts whether they require paint to match the vehicle or a part that does not require any paint. If your new part does require paint, we have the ability to collect a color sample and color code along with the deposit for the part. Once painted, we will bring it to you or you can come to us for installation which takes one to two hours. Which gives you the ability to use your vehile while the part is being painted. No need to leave your vehicle at a shop for any reason (NO RENTAL CAR NEEDED). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Get A Free Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BumperrepairComponent_Template_a_click_17_listener() { return ctx.toHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " View Our Gallery ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Our Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "img", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "img", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "img", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "img", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "img", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "img", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "img", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](181, "div", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "img", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](197, "img", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](199, "img", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](208, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](210, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](212, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](217, "img", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "img", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](223, "img", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "img", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "img", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](229, "img", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "img", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "img", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](235, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "img", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "h1", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](245, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](246, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](248, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "a", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Return To Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n.captionBumperRepairHeader[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  background-image: url(/assets/images/car/166.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.overlay-last[_ngcontent-%COMP%]{\r\n  height:inherit;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image:linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)), url(/assets/images/home/background.jpg);\r\n  background-size: cover;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]{\r\n  background: rgba(192, 26, 43, 0.4);\r\n  border: 1px #fff solid !important;\r\n  color: #fff !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]:hover{\r\n  border: 1px #c01a2b solid !important;\r\n}\r\n\r\n.final[_ngcontent-%COMP%]{\r\n  font-size: 80px;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.final-image[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n}\r\n\r\n.categoryLogo[_ngcontent-%COMP%]{\r\n  width:320px;\r\n  height:80px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding:0%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.captionBottom[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  padding: 0px;\r\n  color: rgb(256, 256, 256);\r\n  text-align: center;\r\n  background: #333;\r\n}\r\n\r\n.captionImages[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n\r\n.caption1[_ngcontent-%COMP%]{\r\n  height:100px;\r\n  color:rgb(256, 256, 256);\r\n  background: #c3c3c1;\r\n  background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n}\r\n\r\n@keyframes fill-images{\r\n\r\n  0%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/271.jpg\");\r\n    background-position: 0% 100%;\r\n\t}\r\n\r\n\t10%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n\r\n\t}\r\n\r\n\t20%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/267.jpg\");\r\n\t}\r\n\r\n\t30%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/270.jpg\");\r\n\t}\r\n\t40%{\r\n\t\tbackground-image:url(\"/assets/images/porsche - Copy/155.jpg\");\r\n\t}\r\n  50%{\r\n\t\tbackground-image:url(\"/assets/images/process/11.jpg\");\r\n\r\n\t}\r\n\t60%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    background-position: 100% 0%;\r\n\t}\r\n\t70%{\r\n\t\tbackground-image:url(\"/assets/images/97_carrera/44.jpg\");\r\n  }\r\n  75%{\r\n    background-image:url(\"/assets/images/97_carrera/45.jpg\");\r\n  }\r\n\t80%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/079.jpg\");\r\n\r\n\t}\r\n\t90%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/080.jpg\");\r\n\t}\r\n\t100%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/082.jpg\");\r\n\t}\r\n}\r\n\r\n.bumper-landing-text[_ngcontent-%COMP%] {\r\n  padding-top: 20%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 2.9rem;\r\n  text-transform: uppercase;\r\n  color:#fff;\r\n  margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  transition: opacity 1s ease-in;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  background: #333;\r\n  color: #fff;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-left: dotted 1px #fff;\r\n  border-right: dotted 1px #fff;\r\n  display: inline-block;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n\tpadding: 0.5rem 2rem;\r\n\tborder: 1px #ccc solid;\r\n\tdisplay: inline-block;\r\n\tmargin: 2rem 0 0;\r\n\tborder-radius: 50px;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\ttransition: background 500ms ease;\r\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b !important;\r\n}\r\n\r\n.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: calc(var(--swiper-navigation-size)/ 44 * 27);\r\n  height: var(--swiper-navigation-size);\r\n  margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.swiper-pagination-white[_ngcontent-%COMP%] {\r\n  --swiper-pagination-color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n@media screen and (max-width:321px){\r\n\r\n  .captionBumperreplacement[_ngcontent-%COMP%] {\r\n    height: 800px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:800px;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n\r\n  .captionBumperRepairHeader[_ngcontent-%COMP%] {\r\n    height: 800px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:800px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n  .caption[_ngcontent-%COMP%] {\r\n    height:350px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n    background-size:cover;\r\n\r\n  }\r\n\r\n   .caption1[_ngcontent-%COMP%]{\r\n    height:70px;\r\n    color:rgb(256, 256, 256);\r\n    background: #c3c3c1;\r\n    background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]{\r\n    font-size: 47px;\r\n  }\r\n\r\n  .final-image[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n  }\r\n\r\n  .captionImages[_ngcontent-%COMP%]{\r\n    height:350px;\r\n  }\r\n  .categoryLogo[_ngcontent-%COMP%]{\r\n   width:224px;\r\n   height:56px;\r\n   display: block;\r\n     margin-left: auto;\r\n     margin-right: auto;\r\n     padding:0%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n  .captionBumperRepairHeader[_ngcontent-%COMP%] {\r\n    height: 910px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:910px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bXBlcnJlcGFpci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUF1RTs7QUFFdkU7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixpREFBaUQ7RUFDakQsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLCtIQUErSDtFQUMvSCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUtuQiwrREFBK0Q7QUFDakU7O0FBRUE7O0VBRUU7RUFDQSw0REFBNEQ7SUFDMUQsNEJBQTRCO0NBQy9COztDQUVBO0lBQ0csMERBQTBEOztDQUU3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDtDQUNBO0VBQ0MsNkRBQTZEO0NBQzlEO0VBQ0M7RUFDQSxxREFBcUQ7O0NBRXREO0NBQ0E7SUFDRywwREFBMEQ7SUFDMUQsNEJBQTRCO0NBQy9CO0NBQ0E7RUFDQyx3REFBd0Q7RUFDeEQ7RUFDQTtJQUNFLHdEQUF3RDtFQUMxRDtDQUNEO0VBQ0Msd0RBQXdEOztDQUV6RDtDQUNBO0VBQ0Msd0RBQXdEO0NBQ3pEO0NBQ0E7RUFDQyx3REFBd0Q7Q0FDekQ7QUFDRDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQztxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlDQUFpQztDQUNqQyw2Q0FBNkM7RUFDNUM7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixtREFBbUQ7RUFDbkQscUNBQXFDO0VBQ3JDLHVEQUF1RDtFQUN2RCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsNkJBQTZCO0FBQy9COztBQUVBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaURBQWlEO0lBQ2pELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0UsWUFBWTtJQUNaLG9DQUFvQztFQUN0Qzs7QUFFRjs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiwrSEFBK0g7SUFDL0gscUJBQXFCOztFQUV2Qjs7R0FFQztJQUNDLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBS25CLCtEQUErRDtFQUNqRTs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtHQUNDLFdBQVc7R0FDWCxXQUFXO0dBQ1gsY0FBYztLQUNaLGlCQUFpQjtLQUNqQixrQkFBa0I7S0FDbEIsVUFBVTtFQUNiO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7QUFDRiIsImZpbGUiOiJidW1wZXJyZXBhaXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCcpO1xyXG5cclxuLmNhcHRpb25CdW1wZXJSZXBhaXJIZWFkZXIge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2FyLzE2Ni5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgaGVpZ2h0OjYwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm92ZXJsYXktbGFzdHtcclxuICBoZWlnaHQ6aW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgyNTYsIDI1NiwgMjU2LCAwLjc4KSwgcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjc4KSksIHVybCgvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5oNiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5hbHR7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDI2LCA0MywgMC40KTtcclxuICBib3JkZXI6IDFweCAjZmZmIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLmFsdDpob3ZlcntcclxuICBib3JkZXI6IDFweCAjYzAxYTJiIHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maW5hbHtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcbi5maW5hbC1pbWFnZXtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG4uY2F0ZWdvcnlMb2dve1xyXG4gIHdpZHRoOjMyMHB4O1xyXG4gIGhlaWdodDo4MHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBwYWRkaW5nOjAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2FwdGlvbkJvdHRvbSB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgY29sb3I6IHJnYigyNTYsIDI1NiwgMjU2KTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxufVxyXG5cclxuLmNhcHRpb25JbWFnZXMge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5jYXB0aW9uMXtcclxuICBoZWlnaHQ6MTAwcHg7XHJcbiAgY29sb3I6cmdiKDI1NiwgMjU2LCAyNTYpO1xyXG4gIGJhY2tncm91bmQ6ICNjM2MzYzE7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbih0byByaWdodCksICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI2ZmZmZmZiksIHRvKCNjM2MzYzEpKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmaWxsLWltYWdlc3tcclxuXHJcbiAgMCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2xleHVzMSAtIENvcHkvMjcxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDEwMCU7XHJcblx0fVxyXG5cclxuXHQxMCV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL0NhcjEgLSBDb3B5LzA4OS5qcGdcIik7XHJcblxyXG5cdH1cclxuXHJcblx0MjAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI2Ny5qcGdcIik7XHJcblx0fVxyXG5cclxuXHQzMCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2xleHVzMSAtIENvcHkvMjcwLmpwZ1wiKTtcclxuXHR9XHJcblx0NDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wb3JzY2hlIC0gQ29weS8xNTUuanBnXCIpO1xyXG5cdH1cclxuICA1MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2Nlc3MvMTEuanBnXCIpO1xyXG5cclxuXHR9XHJcblx0NjAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9DYXIxIC0gQ29weS8wODkuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwJTtcclxuXHR9XHJcblx0NzAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy85N19jYXJyZXJhLzQ0LmpwZ1wiKTtcclxuICB9XHJcbiAgNzUle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy85N19jYXJyZXJhLzQ1LmpwZ1wiKTtcclxuICB9XHJcblx0ODAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9NNCAtIENvcHkvMDc5LmpwZ1wiKTtcclxuXHJcblx0fVxyXG5cdDkwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvTTQgLSBDb3B5LzA4MC5qcGdcIik7XHJcblx0fVxyXG5cdDEwMCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL000IC0gQ29weS8wODIuanBnXCIpO1xyXG5cdH1cclxufVxyXG5cclxuLmJ1bXBlci1sYW5kaW5nLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAyMCU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMi45cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG4gICAgLTMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNoZWFkZXIgaDIge1xyXG4gIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuXHRib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW46IDJyZW0gMCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQgNTAwbXMgZWFzZTtcclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgfVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBjb2xvcjogI2MwMWEyYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDQ0ICogMjcpO1xyXG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpLyAyKTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjYWUxODI2O1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xyXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICNhZTE4MjY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6MzIxcHgpe1xyXG5cclxuICAuY2FwdGlvbkJ1bXBlcnJlcGxhY2VtZW50IHtcclxuICAgIGhlaWdodDogODAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2FyLzE2Ni5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICAgIGFuaW1hdGlvbjogZmlsbC1pbWFnZXMgMzBzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXl7XHJcbiAgICBoZWlnaHQ6ODAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG5cclxuICAuY2FwdGlvbkJ1bXBlclJlcGFpckhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5e1xyXG4gICAgaGVpZ2h0OjgwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuXHJcbiAgLmNhcHRpb24ge1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCksIHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCkpLHVybCgvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuXHJcbiAgfVxyXG5cclxuICAgLmNhcHRpb24xe1xyXG4gICAgaGVpZ2h0OjcwcHg7XHJcbiAgICBjb2xvcjpyZ2IoMjU2LCAyNTYsIDI1Nik7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzNjM2MxO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbih0byByaWdodCksICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjZmZmZmZmKSwgdG8oI2MzYzNjMSkpO1xyXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gIH1cclxuXHJcbiAgLmZpbmFse1xyXG4gICAgZm9udC1zaXplOiA0N3B4O1xyXG4gIH1cclxuXHJcbiAgLmZpbmFsLWltYWdle1xyXG4gICAgaGVpZ2h0OiAzNTBweDtcclxuICB9XHJcblxyXG4gIC5jYXB0aW9uSW1hZ2Vze1xyXG4gICAgaGVpZ2h0OjM1MHB4O1xyXG4gIH1cclxuICAuY2F0ZWdvcnlMb2dve1xyXG4gICB3aWR0aDoyMjRweDtcclxuICAgaGVpZ2h0OjU2cHg7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICBwYWRkaW5nOjAlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAuY2FwdGlvbkJ1bXBlclJlcGFpckhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDkxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5e1xyXG4gICAgaGVpZ2h0OjkxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Igr9":
/*!************************************************!*\
  !*** ./src/app/estimate/estimate.component.ts ***!
  \************************************************/
/*! exports provided: EstimateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EstimateComponent", function() { return EstimateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contact/contact.component */ "bzTf");


class EstimateComponent {
    constructor() {
        this.body = `Make:%0A%0AModel:%0A%0AYear:%0A%0APhone#:%0A%0A Send a close up image of the damage and a full shot of the vehicle and damage.`;
        this.sms = 'Make:%0A%0AModel:%0A%0AYear:%0A%0A[Close up image of the damage.]' + '%0A[Full shot of the vehicle and damage.]';
    }
    ngOnInit() {
    }
}
EstimateComponent.ɵfac = function EstimateComponent_Factory(t) { return new (t || EstimateComponent)(); };
EstimateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EstimateComponent, selectors: [["app-estimate"]], decls: 38, vars: 1, consts: [[2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(assets/images/about3.jpg)", "background-size", "cover"], [1, "py-5", "banner5"], [1, "container", "mt-5"], [1, "row", "justify-content-center", "mt-5"], [1, "col-lg-6", "col-md-7", "text-center", "text-white", "font-weight-normal", "op-8", "mt-5"], [1, "text-white", "font-weight-normal", "op-8"], [2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))"], ["src", "assets/images/estimate/238a.png", "alt", "...", 1, "captionImages", 2, "border-style", "inset", "height", "100%", "border-radius", "3px", "border-width", "20px", "border-color", "rgba(98, 83, 70, 0.32)", "width", "100%", "background-size", "cover"], [1, "desktop"], ["src", "assets/images/estimate/207a.jpg", "alt", "...", 1, "captionImages", 2, "border-style", "inset", "border-radius", "3px", "border-width", "20px", "border-color", "rgba(98, 83, 70, 0.32)", "width", "100%", "height", "460px"], ["src", "assets/images/estimate/207.jpg", "alt", "...", 1, "captionImages", 2, "border-style", "inset", "border-radius", "3px", "border-width", "20px", "border-color", "rgba(98, 83, 70, 0.32)", "width", "100%", "height", "460px"], [1, "theButton"], [1, "msg"], ["id", "view-work", 1, "btn", "alt", "mt-0", 3, "href"], [1, "far", "fa-comment-dots", "est"]], template: function EstimateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Would you like a free estimate?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "It\u2019s very easy to get your FREE ESTIMATE.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Just snap a couple of photos of your damage with your digital camera or smart phone.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close up image of the damage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Full shot of the vehicle and damage.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Provide me your make, model and year.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "I\u2019ll always get back to you within the business day, usually within a few hours.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-contact-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("href", "sms:17609949400?body=", ctx.sms, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_1__["ContactComponent"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n.banner5[_ngcontent-%COMP%] {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  color: #8d97ad;\r\n  font-weight: 300;\r\n\tbackground-size: cover;\r\n  background-attachment: fixed;\r\n  background-position: left center;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  transition: opacity 1s ease-in;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.banner5[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .banner5[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .banner5[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .banner5[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .banner5[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .banner5[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\r\n  color: #3e4555;\r\n}\r\n\r\n.banner5[_ngcontent-%COMP%]   .text-box[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n}\r\n\r\n.banner5[_ngcontent-%COMP%]   .input-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  top: 11px;\r\n  right: 31px;\r\n}\r\n\r\n.captionImages[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n\r\n.banner5[_ngcontent-%COMP%]   .btn-danger-gradiant[_ngcontent-%COMP%] {\r\n  background: #ff4d7e;\r\n  background: linear-gradient(to right, #ff4d7e 0%, #ff6a5b 100%);\r\n}\r\n\r\n.banner5[_ngcontent-%COMP%]   .btn-danger-gradiant[_ngcontent-%COMP%]:hover {\r\n  background: #ff6a5b;\r\n  background: linear-gradient(to right, #ff6a5b 0%, #ff4d7e 100%);\r\n}\r\n\r\n.banner5[_ngcontent-%COMP%]   .btn-md[_ngcontent-%COMP%] {\r\n    padding: 15px 45px;\r\n    font-size: 16px;\r\n}\r\n\r\n.op-8[_ngcontent-%COMP%]{\r\n\ttext-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.est[_ngcontent-%COMP%]{\r\n  font-size: 3em !important; \r\n  font-weight:50;\r\n}\r\n\r\n.msg[_ngcontent-%COMP%]{\r\n\r\n  font-weight: 400!important;\r\n  font-size: 20px;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]{\r\n  background: rgba(192, 26, 43, 0.4);\r\n  border: 1px #fff solid !important;\r\n  color: #fff !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]:hover{\r\n  border: 1px #c01a2b solid !important;\r\n  color:#c01a2b !important;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  padding: 0.5rem 2rem;\r\n  border: 1px #ccc solid;\r\n  display: inline-block;\r\n  margin: 2rem 0 0;\r\n  border-radius: 50px;\r\n  text-decoration: none;\r\n  color: #fff;\r\n  transition: background 500ms ease;\r\n  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b;\r\n}\r\n\r\n@media screen and (min-width: 850px){\r\n  .desktop[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 414px){\r\n  .captionImages[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px){\r\n  .captionImages[_ngcontent-%COMP%] {\r\n    height: 500px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVzdGltYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFOztBQUV2RTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsZ0JBQWdCO0NBQ2pCLHNCQUFzQjtFQUNyQiw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsMkNBQTJDO0VBQzNDLDhCQUE4QjtFQUM5QjtxQ0FDbUM7QUFDckM7O0FBR0E7Ozs7OztFQU1FLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0VBS25CLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLG1CQUFtQjtFQUtuQiwrREFBK0Q7QUFDakU7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtDQUNDLDZCQUE2QjtBQUM5Qjs7QUFFQTtFQUNFLHlCQUF5QixFQUFFLHlCQUF5QjtFQUNwRCxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxpQ0FBaUM7RUFDakMsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7RUFDZjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0YiLCJmaWxlIjoiZXN0aW1hdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCcpO1xyXG5cclxuLmJhbm5lcjUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzhkOTdhZDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgYm94LXNoYWRvdzogMzBweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAtMzBweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcblxyXG4uYmFubmVyNSBoMSxcclxuLmJhbm5lcjUgaDIsXHJcbi5iYW5uZXI1IGgzLFxyXG4uYmFubmVyNSBoNCxcclxuLmJhbm5lcjUgaDUsXHJcbi5iYW5uZXI1IGg2IHtcclxuICBjb2xvcjogIzNlNDU1NTtcclxufVxyXG5cclxuLmJhbm5lcjUgLnRleHQtYm94IHtcclxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbn1cclxuXHJcbi5iYW5uZXI1IC5pbnB1dC1pY29uIGkge1xyXG4gIHRvcDogMTFweDtcclxuICByaWdodDogMzFweDtcclxufVxyXG5cclxuLmNhcHRpb25JbWFnZXMge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbn1cclxuXHJcbi5iYW5uZXI1IC5idG4tZGFuZ2VyLWdyYWRpYW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZmY0ZDdlO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24odG8gcmlnaHQpLCAjZmY0ZDdlIDAlLCAjZmY2YTViIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZjRkN2UpLCB0bygjZmY2YTViKSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmNGQ3ZSAwJSwgI2ZmNmE1YiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmNGQ3ZSAwJSwgI2ZmNmE1YiAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjRkN2UgMCUsICNmZjZhNWIgMTAwJSk7XHJcbn1cclxuXHJcbi5iYW5uZXI1IC5idG4tZGFuZ2VyLWdyYWRpYW50OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY2YTViO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZ2FjeS1kaXJlY3Rpb24odG8gcmlnaHQpLCAjZmY2YTViIDAlLCAjZmY0ZDdlIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZjZhNWIpLCB0bygjZmY0ZDdlKSk7XHJcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmNmE1YiAwJSwgI2ZmNGQ3ZSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtby1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmNmE1YiAwJSwgI2ZmNGQ3ZSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZjZhNWIgMCUsICNmZjRkN2UgMTAwJSk7XHJcbn1cclxuXHJcbi5iYW5uZXI1IC5idG4tbWQge1xyXG4gICAgcGFkZGluZzogMTVweCA0NXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ub3AtOHtcclxuXHR0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLmVzdHtcclxuICBmb250LXNpemU6IDNlbSAhaW1wb3J0YW50OyAvKnNpemUgd2hhdGV2ZXIgeW91IGxpa2UqL1xyXG4gIGZvbnQtd2VpZ2h0OjUwO1xyXG59XHJcblxyXG4ubXNne1xyXG5cclxuICBmb250LXdlaWdodDogNDAwIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcbi5hbHR7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDI2LCA0MywgMC40KTtcclxuICBib3JkZXI6IDFweCAjZmZmIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLmFsdDpob3ZlcntcclxuICBib3JkZXI6IDFweCAjYzAxYTJiIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6I2MwMWEyYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuICBib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW46IDJyZW0gMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgNTAwbXMgZWFzZTtcclxuICBib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbn1cclxuXHJcbi5idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XHJcbiAgY29sb3I6ICNjMDFhMmI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDg1MHB4KXtcclxuICAuZGVza3RvcHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCl7XHJcbiAgLmNhcHRpb25JbWFnZXMge1xyXG4gICAgaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAuY2FwdGlvbkltYWdlcyB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ "MzDm":
/*!**********************************************!*\
  !*** ./src/app/service/service.component.ts ***!
  \**********************************************/
/*! exports provided: ServiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceComponent", function() { return ServiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return ["/bumperrepair"]; };
const _c1 = function () { return ["/bumperreplacement"]; };
const _c2 = function () { return ["/leasereturn"]; };
const _c3 = function () { return ["/insurance"]; };
const _c4 = function () { return ["/process"]; };
class ServiceComponent {
    constructor() { }
    toHeader() {
        document.getElementById('header').scrollIntoView();
    }
    ngOnInit() {
    }
}
ServiceComponent.ɵfac = function ServiceComponent_Factory(t) { return new (t || ServiceComponent)(); };
ServiceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ServiceComponent, selectors: [["app-service"]], decls: 78, vars: 10, consts: [[1, "captionServiceHeader", "mt-5", 2, "background-color", "rgb(147, 154, 163)"], [1, "service-overlay"], [1, "landing-text"], [1, "service-landing-text-inner"], [1, "title"], [1, "text-white"], [1, "btn", "mb-5", "view-work", 3, "click"], ["id", "service", 1, "images"], ["id", "header"], [1, "caption", 2, "background-image", "url('assets/images/Car1/098.jpg')", "text-shadow", "8px 8px 6px #000"], [1, "overlay"], [2, "padding-top", "19%"], ["routerLinkActive", "router-link-active", 1, "btn", 3, "routerLink"], [1, "caption", 2, "background-image", "url('assets/images/car3/190.jpg')", "text-shadow", "8px 8px 6px #000"], [2, "padding-top", "13%"], ["routerLinkActive", "router-link-active", 1, "btn", "mb-5", 3, "routerLink"], [1, "caption", 2, "background-image", "url('assets/images/lexus1/270.jpg')", "text-shadow", "8px 8px 6px #000"], [1, "caption", 2, "background-image", "url('assets/images/car/165.jpg')", "text-shadow", "8px 8px 6px #000"], [1, "caption", 2, "background-image", "url('assets/images/process/10.jpg')", "text-shadow", "8px 8px 6px #000"]], template: function ServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " The craftsmanship that I put into your repair is unparalleled by others. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "I take pride in my work and I will go out of my way to give you the best repair you are going to find. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ServiceComponent_Template_a_click_12_listener() { return ctx.toHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View Our Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Urgent Care Bumper Repair\u2019s expertise is in restoring your damaged bumper to as it was new.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Bumper Replacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Urgent Care Bumper Repair brings 20 years of experience in the field, and guarantees the best possible results when replacing the bumper on your car. You will think it came out of the factory like that!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Bumper Replacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Lease Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "I will work with you to receive approval and repair damages prior to turning in your leased vehicle, so you can be worry free. Let me restore your vehicle to a finished state and help you avoid the costly return repair charges.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Lease Return");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Insurance Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "UCBR works with ALL car insurance carriers and companies.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Insurance Claims");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Your satisfaction is guaranteed by a lifetime warranty (as long as you own the car).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Check Out Our Gallery Of Work! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n.captionServiceHeader[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  background-image: url(\"/assets/images/car/166.jpg\");\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n}\r\n@keyframes fill-images{\r\n\r\n\t0%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/271.jpg\");\r\n    background-position: 0% 100%;\r\n\t}\r\n\r\n\t10%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n\r\n\t}\r\n\r\n\t20%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/267.jpg\");\r\n\t}\r\n\r\n\t30%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/270.jpg\");\r\n\t}\r\n\t40%{\r\n\t\tbackground-image:url(\"/assets/images/porsche - Copy/155.jpg\");\r\n\t}\r\n  50%{\r\n\t\tbackground-image:url(\"/assets/images/process/11.jpg\");\r\n\r\n\t}\r\n\t60%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    background-position: 100% 0%;\r\n\t}\r\n\t70%{\r\n\t\tbackground-image:url(\"/assets/images/97_carrera/44.jpg\");\r\n  }\r\n  75%{\r\n    background-image:url(\"/assets/images/97_carrera/45.jpg\");\r\n  }\r\n\t80%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/079.jpg\");\r\n\r\n\t}\r\n\t90%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/080.jpg\");\r\n\t}\r\n\t100%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/082.jpg\");\r\n\t}\r\n}\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 2.9rem;\r\n  text-transform: uppercase;\r\n  color:#fff;\r\n  margin: 0;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n#header[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  background: #333;\r\n  color: #fff;\r\n}\r\nh6[_ngcontent-%COMP%] {\r\n\tcolor: #fff;\r\n}\r\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-left: dotted 1px #fff;\r\n  border-right: dotted 1px #fff;\r\n  display: inline-block;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n.caption[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n  background-size: cover;\r\n}\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  transition: opacity 1s ease-in;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\r\n.service-landing-text-inner[_ngcontent-%COMP%] {\r\n  padding-top: 19%;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n\tpadding: 0.5rem 2rem;\r\n\tborder: 1px #ccc solid;\r\n\tdisplay: inline-block;\r\n\tmargin: 2rem 0 0;\r\n\tborder-radius: 50px;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\ttransition: background 500ms ease;\r\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n  }\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b;\r\n}\r\n.overlay[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n.service-overlay[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n@media screen and (max-width: 500px){\r\n\r\n  .captionServiceHeader[_ngcontent-%COMP%] {\r\n    height: 400px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .service-overlay[_ngcontent-%COMP%]{\r\n    height:400px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n\r\n  .caption[_ngcontent-%COMP%] {\r\n    height: 375px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-size: cover;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:375px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBdUU7QUFDdkU7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixtREFBbUQ7RUFDbkQsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLDJDQUEyQztFQUMzQyxtQ0FBbUM7QUFDckM7QUFFQTs7Q0FFQztFQUNDLDREQUE0RDtJQUMxRCw0QkFBNEI7Q0FDL0I7O0NBRUE7SUFDRywwREFBMEQ7O0NBRTdEOztDQUVBO0VBQ0MsNERBQTREO0NBQzdEOztDQUVBO0VBQ0MsNERBQTREO0NBQzdEO0NBQ0E7RUFDQyw2REFBNkQ7Q0FDOUQ7RUFDQztFQUNBLHFEQUFxRDs7Q0FFdEQ7Q0FDQTtJQUNHLDBEQUEwRDtJQUMxRCw0QkFBNEI7Q0FDL0I7Q0FDQTtFQUNDLHdEQUF3RDtFQUN4RDtFQUNBO0lBQ0Usd0RBQXdEO0VBQzFEO0NBQ0Q7RUFDQyx3REFBd0Q7O0NBRXpEO0NBQ0E7RUFDQyx3REFBd0Q7Q0FDekQ7Q0FDQTtFQUNDLHdEQUF3RDtDQUN6RDtBQUNEO0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixXQUFXO0VBQ1gsU0FBUztBQUNYO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7QUFFQTtDQUNDLFdBQVc7QUFDWjtBQUdBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0hBQStIO0VBQy9ILHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixjQUFjO0VBQ2QsOEJBQThCO0VBQzlCLDJDQUEyQztFQUMzQztxQ0FDbUM7QUFDckM7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0NBQ0Msb0JBQW9CO0NBQ3BCLHNCQUFzQjtDQUN0QixxQkFBcUI7Q0FDckIsZ0JBQWdCO0NBQ2hCLG1CQUFtQjtDQUNuQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLGlDQUFpQztDQUNqQyw2Q0FBNkM7RUFDNUM7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDO0FBRUE7RUFDRSxZQUFZO0VBQ1osOEJBQThCO0FBQ2hDO0FBRUE7O0VBRUU7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQsNEJBQTRCO0lBQzVCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0VBQ2hDOzs7RUFHQTtJQUNFLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0FBRUYiLCJmaWxlIjoic2VydmljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkJyk7XHJcbi5jYXB0aW9uU2VydmljZUhlYWRlciB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmaWxsLWltYWdlc3tcclxuXHJcblx0MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2xleHVzMSAtIENvcHkvMjcxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDEwMCU7XHJcblx0fVxyXG5cclxuXHQxMCV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL0NhcjEgLSBDb3B5LzA4OS5qcGdcIik7XHJcblxyXG5cdH1cclxuXHJcblx0MjAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI2Ny5qcGdcIik7XHJcblx0fVxyXG5cclxuXHQzMCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2xleHVzMSAtIENvcHkvMjcwLmpwZ1wiKTtcclxuXHR9XHJcblx0NDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wb3JzY2hlIC0gQ29weS8xNTUuanBnXCIpO1xyXG5cdH1cclxuICA1MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2Nlc3MvMTEuanBnXCIpO1xyXG5cclxuXHR9XHJcblx0NjAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9DYXIxIC0gQ29weS8wODkuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwJTtcclxuXHR9XHJcblx0NzAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy85N19jYXJyZXJhLzQ0LmpwZ1wiKTtcclxuICB9XHJcbiAgNzUle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy85N19jYXJyZXJhLzQ1LmpwZ1wiKTtcclxuICB9XHJcblx0ODAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9NNCAtIENvcHkvMDc5LmpwZ1wiKTtcclxuXHJcblx0fVxyXG5cdDkwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvTTQgLSBDb3B5LzA4MC5qcGdcIik7XHJcblx0fVxyXG5cdDEwMCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL000IC0gQ29weS8wODIuanBnXCIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5oMSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIuOXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiNoZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuaDYge1xyXG5cdGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuI2hlYWRlciBoMiB7XHJcbiAgYm9yZGVyLWxlZnQ6IGRvdHRlZCAxcHggI2ZmZjtcclxuICBib3JkZXItcmlnaHQ6IGRvdHRlZCAxcHggI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCksIHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCkpLHVybCgvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG5tYWluIHtcclxuICBtYXgtd2lkdGg6IDkwMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcclxuICBib3gtc2hhZG93OiAzMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4zKSxcclxuICAgIC0zMHB4IDBweCA0MHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnNlcnZpY2UtbGFuZGluZy10ZXh0LWlubmVyIHtcclxuICBwYWRkaW5nLXRvcDogMTklO1xyXG59XHJcblxyXG4uYnRuIHtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuXHRib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW46IDJyZW0gMCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQgNTAwbXMgZWFzZTtcclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgfVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBjb2xvcjogI2MwMWEyYjtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgaGVpZ2h0OjYwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLnNlcnZpY2Utb3ZlcmxheXtcclxuICBoZWlnaHQ6NjAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCl7XHJcblxyXG4gIC5jYXB0aW9uU2VydmljZUhlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gICAgYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWltYWdlIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICAuc2VydmljZS1vdmVybGF5e1xyXG4gICAgaGVpZ2h0OjQwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5jYXB0aW9uIHtcclxuICAgIGhlaWdodDogMzc1cHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXl7XHJcbiAgICBoZWlnaHQ6Mzc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'urgentcarebumperrepair';
    }
    onActivate(event) {
        window.scroll(0, 0);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[2, "background-image", "linear-gradient(rgba(238, 238, 238, 0.925), rgba(238, 238, 238, 0.925)),url(/../assets/images/home/background.jpg)", "background-size", "cover"], [3, "activate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activate", function AppComponent_Template_router_outlet_activate_2_listener($event) { return ctx.onActivate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "+Cnu");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _bumperrepair_bumperrepair_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bumperrepair/bumperrepair.component */ "FQCQ");
/* harmony import */ var _bumperreplacement_bumperreplacement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bumperreplacement/bumperreplacement.component */ "zzz5");
/* harmony import */ var _estimate_estimate_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./estimate/estimate.component */ "Igr9");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./insurance/insurance.component */ "+zU0");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _process_process_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./process/process.component */ "nZye");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _leasereturn_leasereturn_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./leasereturn/leasereturn.component */ "CCp/");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "fXoL");





























const DEFAULT_SWIPER_CONFIG = {
    direction: 'horizontal',
    threshold: -10,
    spaceBetween: 5,
    slidesPerView: 1,
    centeredSlides: true
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SWIPER_CONFIG"], { LocationStrategy: _angular_common__WEBPACK_IMPORTED_MODULE_6__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_6__["HashLocationStrategy"] }],
            useValue: DEFAULT_SWIPER_CONFIG
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseModule"].forRoot(),
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _bumperrepair_bumperrepair_component__WEBPACK_IMPORTED_MODULE_12__["BumperrepairComponent"],
        _bumperreplacement_bumperreplacement_component__WEBPACK_IMPORTED_MODULE_13__["BumperreplacementComponent"],
        _estimate_estimate_component__WEBPACK_IMPORTED_MODULE_14__["EstimateComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"],
        _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_17__["InsuranceComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_18__["NavbarComponent"],
        _process_process_component__WEBPACK_IMPORTED_MODULE_19__["ProcessComponent"],
        _service_service_component__WEBPACK_IMPORTED_MODULE_20__["ServiceComponent"],
        _leasereturn_leasereturn_component__WEBPACK_IMPORTED_MODULE_21__["LeasereturnComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_1__["CollapseModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__["BsDropdownModule"]] }); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/contact.service */ "gByZ");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







function ContactComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Proper email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Proper number is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drag and drop a file or select add Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r4.imageName1);
} }
function ContactComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Please use JPG, PNG, JPEG format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r5.imageName1, " is not a valid format.");
} }
function ContactComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Add Image.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Please use JPG, PNG, JPEG format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Drag and drop a file or select add Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r8.imageName2);
} }
function ContactComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " {{imageName2} is not a valid format.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Please use JPG, PNG, JPEG format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Add Image. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Please use JPG, PNG, JPEG format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_ng_template_30_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_ng_template_30_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Thank You! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "I will get back to you within the business day. Or, within a few hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_ng_template_30_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ContactComponent_ng_template_32_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_ng_template_32_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r18.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h5", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Thank You! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "I will get back to you within the business day. Or, within a few hours.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_ng_template_32_Template_a_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(contactService, formBuilder, modalService, router) {
        this.contactService = contactService;
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.router = router;
        this.config = {
            backdrop: true,
            animated: true,
            ignoreBackdropClick: true
        };
        this.title = 'nodeMailerApp';
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.phonePattern = "^(\\+\\d{1,3}( )?)?((\\(\\d{1,3}\\))|\\d{1,3})[- .]?\\d{3,4}[- .]?\\d{4}$";
        this.image1 = null;
        this.image2 = null;
        this.isvalid_1 = true;
        this.isvalid_2 = true;
        this.imagePresent_1 = true;
        this.imagePresent_2 = true;
        this.isImageUploaded1 = false;
        this.isImageUploaded2 = false;
    }
    ngOnInit() {
        this.nodeMailerForm = this.formBuilder.group({
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.emailPattern)]],
            name: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern(this.phonePattern)]],
            make: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            model: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            year: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]]
        });
    }
    get email() {
        return this.nodeMailerForm.get('email');
    }
    get phone() {
        return this.nodeMailerForm.get('phone');
    }
    image_1(event) {
        var index = event.target.files[0].name;
        index = index.split('.');
        index = index[1];
        if (index == 'jpg' || index == 'png' || index == 'jpeg') {
            this.image1 = event.target.files[0];
            this.imageType1 = event.target.files[0].type;
            this.imageName1 = event.target.files[0].name;
            this.imageSize1 = event.target.files[0].size;
            this.imagePath1 = event.target.files[0].webkitRelativePath;
            this.isvalid_1 = true;
            this.isImageUploaded1 = true;
        }
        else {
            this.isvalid_1 = false;
            this.imageName1 = event.target.files[0].name;
        }
    }
    image_2(event) {
        var index = event.target.files[0].name;
        index = index.split('.');
        index = index[1];
        if (index == 'jpg' || index == 'png' || index == 'jpeg') {
            this.image2 = event.target.files[0];
            this.imageType2 = event.target.files[0].type;
            this.imageName2 = event.target.files[0].name;
            this.imageSize2 = event.target.files[0].size;
            this.imagePath2 = event.target.files[0].webkitRelativePath;
            this.isvalid_2 = true;
            this.isImageUploaded2 = true;
        }
        else {
            this.isvalid_2 = false;
            this.imageName2 = event.target.files[0].name;
        }
    }
    onSubmit(template) {
        var index1 = this.image1;
        var index2 = this.image2;
        if (this.image1 != null) {
            index1 = index1.name.split('.');
            console.log(index1);
            index1 = index1[1];
            console.log(index1);
        }
        if (this.image2 != null) {
            var index2 = index2.name.split('.');
            index2 = index2[1];
        }
        if ((index1 == 'jpg' || index1 == 'png' || index1 == 'jpeg' || index1 == null) && (index2 == 'jpg' || index2 == 'png' || index2 == 'jpeg' || index2 == null)) {
            let email = this.nodeMailerForm.value.email;
            let name = this.nodeMailerForm.value.name;
            let phone = this.nodeMailerForm.value.phone;
            let make = this.nodeMailerForm.value.make;
            let model = this.nodeMailerForm.value.model;
            let year = this.nodeMailerForm.value.year;
            let reqObj = {
                email: email,
                name: name,
                phone: phone,
                make: make,
                model: model,
                year: year
            };
            if (index1 == null && index2 == null) {
                this.imagePresent_1 = false;
                this.imagePresent_2 = false;
            }
            if (index1 == null && index2 != null) {
                this.imagePresent_1 = false;
                this.imagePresent_2 = true;
            }
            if (index1 != null && index2 == null) {
                this.imagePresent_2 = false;
                this.imagePresent_1 = true;
            }
            else {
                let formData = new FormData();
                formData.append('reqObj', JSON.stringify(reqObj));
                formData.append('file1', this.image1, this.image1.name);
                formData.append('file2', this.image2, this.image2.name);
                this.contactService.sendMessage(formData).subscribe(data => {
                    //console.log(this.image1);
                });
                this.modalRef = this.modalService.show(template, this.config);
            }
        }
        else {
            console.log(this.image1);
            console.log(this.image2);
            console.log("Invalid Format");
        }
    }
    close() {
        this.modalRef.hide();
        this.router.navigate(['home']);
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact-form"]], decls: 34, vars: 11, consts: [[2, "background-image", "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15))"], [1, "text-white", "font-weight-normal", "op-8", "pt-5"], [1, "p-3", 3, "formGroup"], ["name", "name", "type", "text", "formControlName", "name", "placeholder", "Name", 1, "feedback-input"], ["name", ""], ["name", "email", "formControlName", "email", "type", "email", "placeholder", "Email", 1, "feedback-input"], ["class", "alert alert-warning error", 4, "ngIf"], ["name", "phone", "type", "text", "formControlName", "phone", "placeholder", "(000)000-0000", 1, "feedback-input"], ["name", "make", "type", "text", "formControlName", "make", "placeholder", "Make", 1, "feedback-input"], ["name", "model", "type", "text", "formControlName", "model", "placeholder", "Model", 1, "feedback-input"], ["name", "text", "type", "text", "formControlName", "year", "placeholder", "Year (YYYY)", 1, "feedback-input"], [1, "file-upload", "mb-3"], [1, "image-upload-wrap"], ["name", "image1", "type", "file", "accept", "image/*", "capture", "camera", 1, "file-upload-input", 3, "change"], [1, "drag-text"], [4, "ngIf"], ["class", "upload-success", 4, "ngIf"], ["name", "image2", "type", "file", "accept", "image/*", "capture", "camera", 1, "file-upload-input", 3, "change"], ["type", "submit", "value", "SUBMIT", 3, "click"], ["template", ""], ["imagesMissing", ""], [1, "alert", "alert-warning", "error"], [1, "desktop"], [1, "fas", "fa-camera", "alt"], [1, "upload-success"], [1, "far", "fa-check-circle", "alt-check"], [1, "thank-you"], [1, "modal-header", "header-accepted"], ["src", "assets/images/logo2.png", 1, "imageLogo"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [2, "background", "linear-gradient(315deg, #000000 0%, #7f8c8d 74%)"], ["src", "assets/images/estimate/238a.png", "alt", "...", 1, "captionImages", 2, "border-style", "inset", "height", "100%", "border-radius", "0px", "border-width", "12px", "border-color", "rgba(223, 207, 207, 0.904)", "width", "100%", "background-size", "cover"], [1, "font-weight-heavy", "accepted"], [1, "buttons"], [1, "btn", "alt1", 3, "click"], [2, "font-size", "3em"], [1, "fas", "fa-home", "est"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Free Estimate Form");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ContactComponent_div_7_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ContactComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactComponent_Template_input_change_15_listener($event) { return ctx.image_1($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ContactComponent_div_17_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ContactComponent_div_18_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, ContactComponent_div_19_Template, 4, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, ContactComponent_div_20_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ContactComponent_Template_input_change_23_listener($event) { return ctx.image_2($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ContactComponent_div_25_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, ContactComponent_div_26_Template, 4, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, ContactComponent_div_27_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, ContactComponent_div_28_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactComponent_Template_input_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21); const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](31); return ctx.onSubmit(_r11); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ContactComponent_ng_template_30_Template, 18, 0, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, ContactComponent_ng_template_32_Template, 18, 0, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.nodeMailerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.email.invalid && ctx.email.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.phone.invalid && ctx.phone.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isImageUploaded1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageUploaded1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isvalid_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.imagePresent_1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isImageUploaded2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isImageUploaded2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isvalid_2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.imagePresent_2);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);\r\n\r\nbody[_ngcontent-%COMP%] { background:rgb(30,30,40); }\r\n\r\nform[_ngcontent-%COMP%] { max-width:420px; margin:50px auto; }\r\n\r\n[_ngcontent-%COMP%]::placeholder { \r\n  color: white;\r\n  opacity: 1; \r\n}\r\n\r\n.feedback-input[_ngcontent-%COMP%] {\r\n  color: #ffffff;\r\n  font-family: Helvetica, Arial, sans-serif;\r\n  font-weight:500;\r\n  font-size: 18px;\r\n  border-radius: 5px;\r\n  line-height: 22px;\r\n  background-color: transparent;\r\n  border:2px inset #ae1826;\r\n  transition: all 0.3s;\r\n  padding: 13px;\r\n  margin-bottom: 15px;\r\n  width:100%;\r\n  box-sizing: border-box;\r\n  background-color: rgba(255,255,255,.25);\r\n  outline:0;\r\n}\r\n\r\n.feedback-input[_ngcontent-%COMP%]:focus {\r\n  border:2px solid #CC4949;\r\n\r\n}\r\n\r\n.landing-text-inner[_ngcontent-%COMP%] {\r\n  background-color: #CC4949;\r\n}\r\n\r\n.buttons[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n  justify-content: center;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n\r\n.alt1[_ngcontent-%COMP%]{\r\n  background:  rgba(104, 92, 92, 0.25);\r\n  border: 1px #c01a2b solid;\r\n  color: #c01a2b !important;\r\n  text-shadow: 2px 2px 3px #000;\r\n}\r\n\r\n.alt1[_ngcontent-%COMP%]:hover{\r\n  border: 1px #c01a2b solid !important;\r\n  background: rgba(192, 26, 43, 1);\r\n  color: #fff !important;\r\n}\r\n\r\n.btn-3[_ngcontent-%COMP%] {\r\n  border: 1px solid;\r\n  box-shadow: inset 0 0 20px rgba(204, 0, 0);\r\n  outline: 1px solid;\r\n  background: opacity 0;\r\n  text-shadow: 2px 2px 2px rgb(66, 61, 61);\r\n  font-weight: 900;\r\n  font-size:1.7em;\r\n  color:#ae1826;\r\n  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);\r\n}\r\n\r\n.btn-3[_ngcontent-%COMP%]:hover {\r\n  border: 1px solid;\r\n  box-shadow: inset 0 0 20px rgba(204, 0, 0, .5), 0 0 20px rgba(204, 0, 0, .2);\r\n  outline-color: rgba(204, 0, 0, .5);\r\n  text-shadow: 1px 1px 2px #427388;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n   margin: auto;\r\n   display: block;\r\n   font-family: 'Roboto Condensed', sans-serif;\r\n   transition: opacity 1s ease-in;\r\n   background:none;\r\n   box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n     -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n }\r\n\r\n.error[_ngcontent-%COMP%]{\r\n   background-color: rgba(174,24,38, .8) !important;\r\n   color:#ffffff !important;\r\n   box-shadow: 30px 0px 40px rgba(255, 255, 255, 0.6),\r\n     -30px 0px 40px rgba(255, 255, 255, 0.6)!important;\r\n     border:none !important;\r\n     text-shadow: 8px 8px 6px #000;\r\n }\r\n\r\n.op-8[_ngcontent-%COMP%]{\r\n  text-shadow: 8px 8px 6px #000;\r\n  margin-left:25%;\r\n  font-size:60px;\r\n}\r\n\r\n.accepted[_ngcontent-%COMP%]{\r\n\r\n  text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);\r\n  color:#000;\r\n\r\n}\r\n\r\n.close[_ngcontent-%COMP%] {\r\n  color: #ae1826;\r\n}\r\n\r\n.header-accepted[_ngcontent-%COMP%]{\r\n  border-bottom: 1px inset #ae1826 !important;\r\n}\r\n\r\ntextarea[_ngcontent-%COMP%] {\r\n  height: 150px;\r\n  line-height: 150%;\r\n  resize:vertical;\r\n}\r\n\r\n[type=\"submit\"][_ngcontent-%COMP%] {\r\n  font-family: 'Montserrat', Arial, Helvetica, sans-serif;\r\n  width: 100%;\r\n  background:#ae1826;\r\n  border-radius:0px;\r\n  border:0;\r\n  cursor:pointer;\r\n  color:white;\r\n  font-size:24px;\r\n  padding-top:10px;\r\n  padding-bottom:10px;\r\n  transition: all 0.3s;\r\n  margin-top:-4px;\r\n  font-weight:700;\r\n  text-shadow: 0px 1px 0px rgba(189, 189, 189, 0.65);\r\n  border:3px outset #ae1826;\r\n}\r\n\r\n[type=\"submit\"][_ngcontent-%COMP%]:hover { background:#ae1826; text-shadow: none; border:3px inset #ae1826;}\r\n\r\n.file-upload[_ngcontent-%COMP%] {\r\n  background-color: rgba(255,255,255,.25);\r\n  width: 100%;\r\n  margin: 0 auto;\r\n  padding: 20px;\r\n  border:3px inset #ae1826;\r\n\r\n}\r\n\r\n.file-upload[_ngcontent-%COMP%]:hover{\r\n  transition: all .5s ease;\r\n\r\n}\r\n\r\n.file-upload-btn[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  margin: 0;\r\n  color: #fff;\r\n  background: #ae1826;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  border-bottom: 4px solid #500910;\r\n  transition: all .2s ease;\r\n  outline: none;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n\r\n.file-upload-btn[_ngcontent-%COMP%]:hover {\r\n  background: #ffffff;\r\n  color: #ae1826;\r\n  transition: all .2s ease;\r\n  text-shadow: 8px 8px 6px #000;\r\n  cursor: pointer;\r\n}\r\n\r\n.file-upload-btn[_ngcontent-%COMP%]:active {\r\n  border: 0;\r\n  transition: all .2s ease;\r\n}\r\n\r\n.file-upload-content[_ngcontent-%COMP%] {\r\n  display: none;\r\n  text-align: center;\r\n}\r\n\r\n.file-upload-input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  margin: 0;\r\n  padding: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  outline: none;\r\n  opacity: 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.image-upload-wrap[_ngcontent-%COMP%] {\r\n  margin-top: 20px;\r\n  border: 4px inset #ae1826;\r\n  position: relative;\r\n}\r\n\r\n.image-dropping[_ngcontent-%COMP%], .image-upload-wrap[_ngcontent-%COMP%]:hover {\r\n  transition: .5s ease;\r\n  background-color: rgba(174,24,38, .8);\r\n  border: 4px inset #ae1826;\r\n  color: #ae1826 !important;\r\n\r\n}\r\n\r\n.image-title-wrap[_ngcontent-%COMP%] {\r\n  padding: 0 15px 15px 15px;\r\n  color: #222;\r\n}\r\n\r\n.imageLogo[_ngcontent-%COMP%]{\r\n  width:240px;\r\n  height:54px;\r\n  }\r\n\r\n.drag-text[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.drag-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-weight: 100;\r\n  text-transform: uppercase;\r\n  color: #ffffff;\r\n  text-shadow: 8px 8px 6px #000;\r\n  padding: 60px 0;\r\n}\r\n\r\n.alt-check[_ngcontent-%COMP%]{\r\n  font-size: 10em !important;\r\n}\r\n\r\n.upload-success[_ngcontent-%COMP%]{\r\n  padding-top:3%;\r\n  height: 250px;\r\n  color:#fff;\r\n  background: rgba(174,24,38,0.1);\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.thank-you[_ngcontent-%COMP%]{\r\n background-image:\r\n linear-gradient(235deg, hsl(0,0%,78%)  0%,\r\n hsl(0,0%,90%) 47%,\r\n rgba(255, 247, 247, 0.904) 53%,\r\n rgb(255, 255, 255)100%);\r\n\r\n}\r\n\r\n.file-upload-image[_ngcontent-%COMP%] {\r\n  max-height: 200px;\r\n  max-width: 200px;\r\n  margin: auto;\r\n  padding: 20px;\r\n}\r\n\r\n.remove-image[_ngcontent-%COMP%] {\r\n  width: 200px;\r\n  margin: 0;\r\n  color: #fff;\r\n  background: #cd4535;\r\n  border: none;\r\n  padding: 10px;\r\n  border-radius: 4px;\r\n  border-bottom: 4px solid #b02818;\r\n  transition: all .2s ease;\r\n  outline: none;\r\n  text-transform: uppercase;\r\n  font-weight: 700;\r\n}\r\n\r\n.remove-image[_ngcontent-%COMP%]:hover {\r\n  background: #c13b2a;\r\n  color: #ffffff;\r\n  transition: all .2s ease;\r\n  cursor: pointer;\r\n}\r\n\r\n.remove-image[_ngcontent-%COMP%]:active {\r\n  border: 0;\r\n  transition: all .2s ease;\r\n}\r\n\r\n@media screen and (min-width: 850px){\r\n\r\n  .fa-camera[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 849px){\r\n  .desktop[_ngcontent-%COMP%]{\r\n    display: none;\r\n  }\r\n\r\n  .fa-camera[_ngcontent-%COMP%]{\r\n    font-size: 10em;\r\n  }\r\n\r\n  .alt[_ngcontent-%COMP%]{\r\n    line-height: 1.65;\r\n    color:#f2f2f2;\r\n    text-shadow: 8px 8px 6px #000;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBdUU7O0FBRXZFLE9BQU8sd0JBQXdCLEVBQUU7O0FBQ2pDLE9BQU8sZUFBZSxFQUFFLGdCQUFnQixFQUFFOztBQUUxQyxnQkFBZ0IseUNBQXlDO0VBQ3ZELFlBQVk7RUFDWixVQUFVLEVBQUUsWUFBWTtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0Qix1Q0FBdUM7RUFDdkMsU0FBUztBQUNYOztBQUVBO0VBQ0Usd0JBQXdCOztBQUUxQjs7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGdDQUFnQztFQUNoQyxzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSxpQkFBaUI7RUFDakIsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHFEQUFxRDtBQUN2RDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw0RUFBNEU7RUFDNUUsa0NBQWtDO0VBQ2xDLGdDQUFnQztBQUNsQzs7QUFDQTtHQUNHLFlBQVk7R0FDWixjQUFjO0dBQ2QsMkNBQTJDO0dBQzNDLDhCQUE4QjtHQUM5QixlQUFlO0dBQ2Y7c0NBQ21DO0NBQ3JDOztBQUVBO0dBQ0UsZ0RBQWdEO0dBQ2hELHdCQUF3QjtHQUN4QjtzREFDbUQ7S0FDakQsc0JBQXNCO0tBQ3RCLDZCQUE2QjtDQUNqQzs7QUFHRDtFQUNFLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxnREFBZ0Q7RUFDaEQsVUFBVTs7QUFFWjs7QUFHQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQ0FBMkM7QUFDN0M7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx1REFBdUQ7RUFDdkQsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsUUFBUTtFQUNSLGNBQWM7RUFDZCxXQUFXO0VBQ1gsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixlQUFlO0VBQ2Ysa0RBQWtEO0VBQ2xELHlCQUF5QjtBQUMzQjs7QUFHQSx3QkFBd0Isa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsd0JBQXdCLENBQUM7O0FBR3hGO0VBQ0UsdUNBQXVDO0VBQ3ZDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHdCQUF3Qjs7QUFFMUI7O0FBRUE7RUFDRSx3QkFBd0I7O0FBRTFCOztBQUdBO0VBQ0UsV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxvQkFBb0I7RUFDcEIscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6Qix5QkFBeUI7O0FBRTNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1g7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsVUFBVTtFQUNWLCtCQUErQjtFQUMvQiw2QkFBNkI7QUFDL0I7O0FBRUE7Q0FDQzs7Ozt3QkFJdUI7O0FBRXhCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsU0FBUztFQUNULHdCQUF3QjtBQUMxQjs7QUFLQTs7RUFFRTtJQUNFLGFBQWE7RUFDZjs7QUFFRjs7QUFHQTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsNkJBQTZCO0VBQy9CO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1vbnRzZXJyYXQ6NDAwLDcwMCk7XHJcblxyXG5ib2R5IHsgYmFja2dyb3VuZDpyZ2IoMzAsMzAsNDApOyB9XHJcbmZvcm0geyBtYXgtd2lkdGg6NDIwcHg7IG1hcmdpbjo1MHB4IGF1dG87IH1cclxuXHJcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICBjb2xvcjogd2hpdGU7XHJcbiAgb3BhY2l0eTogMTsgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG4uZmVlZGJhY2staW5wdXQge1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OjUwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjoycHggaW5zZXQgI2FlMTgyNjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjI1KTtcclxuICBvdXRsaW5lOjA7XHJcbn1cclxuXHJcbi5mZWVkYmFjay1pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCAjQ0M0OTQ5O1xyXG5cclxufVxyXG4ubGFuZGluZy10ZXh0LWlubmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0M0OTQ5O1xyXG59XHJcbi5idXR0b25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFsdDF7XHJcbiAgYmFja2dyb3VuZDogIHJnYmEoMTA0LCA5MiwgOTIsIDAuMjUpO1xyXG4gIGJvcmRlcjogMXB4ICNjMDFhMmIgc29saWQ7XHJcbiAgY29sb3I6ICNjMDFhMmIgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAzcHggIzAwMDtcclxufVxyXG5cclxuLmFsdDE6aG92ZXJ7XHJcbiAgYm9yZGVyOiAxcHggI2MwMWEyYiBzb2xpZCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTkyLCAyNiwgNDMsIDEpO1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuLmJ0bi0zIHtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMjBweCByZ2JhKDIwNCwgMCwgMCk7XHJcbiAgb3V0bGluZTogMXB4IHNvbGlkO1xyXG4gIGJhY2tncm91bmQ6IG9wYWNpdHkgMDtcclxuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggcmdiKDY2LCA2MSwgNjEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgZm9udC1zaXplOjEuN2VtO1xyXG4gIGNvbG9yOiNhZTE4MjY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDEyNTBtcyBjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSk7XHJcbn1cclxuXHJcbi5idG4tMzpob3ZlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDIwcHggcmdiYSgyMDQsIDAsIDAsIC41KSwgMCAwIDIwcHggcmdiYSgyMDQsIDAsIDAsIC4yKTtcclxuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDIwNCwgMCwgMCwgLjUpO1xyXG4gIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCAjNDI3Mzg4O1xyXG59XHJcbm1haW4ge1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UtaW47XHJcbiAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgYm94LXNoYWRvdzogMzBweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAgLTMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gfVxyXG5cclxuIC5lcnJvcntcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzQsMjQsMzgsIC44KSAhaW1wb3J0YW50O1xyXG4gICBjb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgIGJveC1zaGFkb3c6IDMwcHggMHB4IDQwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpLFxyXG4gICAgIC0zMHB4IDBweCA0MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KSFpbXBvcnRhbnQ7XHJcbiAgICAgYm9yZGVyOm5vbmUgIWltcG9ydGFudDtcclxuICAgICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuIH1cclxuXHJcblxyXG4ub3AtOHtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICBtYXJnaW4tbGVmdDoyNSU7XHJcbiAgZm9udC1zaXplOjYwcHg7XHJcbn1cclxuXHJcbi5hY2NlcHRlZHtcclxuXHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gIGNvbG9yOiMwMDA7XHJcblxyXG59XHJcblxyXG5cclxuLmNsb3NlIHtcclxuICBjb2xvcjogI2FlMTgyNjtcclxufVxyXG5cclxuLmhlYWRlci1hY2NlcHRlZHtcclxuICBib3JkZXItYm90dG9tOiAxcHggaW5zZXQgI2FlMTgyNiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBsaW5lLWhlaWdodDogMTUwJTtcclxuICByZXNpemU6dmVydGljYWw7XHJcbn1cclxuXHJcblt0eXBlPVwic3VibWl0XCJdIHtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6I2FlMTgyNjtcclxuICBib3JkZXItcmFkaXVzOjBweDtcclxuICBib3JkZXI6MDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBmb250LXNpemU6MjRweDtcclxuICBwYWRkaW5nLXRvcDoxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOjEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgbWFyZ2luLXRvcDotNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgxODksIDE4OSwgMTg5LCAwLjY1KTtcclxuICBib3JkZXI6M3B4IG91dHNldCAjYWUxODI2O1xyXG59XHJcblxyXG5cclxuW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIgeyBiYWNrZ3JvdW5kOiNhZTE4MjY7IHRleHQtc2hhZG93OiBub25lOyBib3JkZXI6M3B4IGluc2V0ICNhZTE4MjY7fVxyXG5cclxuXHJcbi5maWxlLXVwbG9hZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuMjUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOjNweCBpbnNldCAjYWUxODI2O1xyXG5cclxufVxyXG5cclxuLmZpbGUtdXBsb2FkOmhvdmVye1xyXG4gIHRyYW5zaXRpb246IGFsbCAuNXMgZWFzZTtcclxuXHJcbn1cclxuXHJcblxyXG4uZmlsZS11cGxvYWQtYnRuIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2FlMTgyNjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICM1MDA5MTA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZmlsZS11cGxvYWQtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGNvbG9yOiAjYWUxODI2O1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1idG46YWN0aXZlIHtcclxuICBib3JkZXI6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG59XHJcblxyXG4uZmlsZS11cGxvYWQtY29udGVudCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1pbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uaW1hZ2UtdXBsb2FkLXdyYXAge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyOiA0cHggaW5zZXQgI2FlMTgyNjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pbWFnZS1kcm9wcGluZyxcclxuLmltYWdlLXVwbG9hZC13cmFwOmhvdmVyIHtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NCwyNCwzOCwgLjgpO1xyXG4gIGJvcmRlcjogNHB4IGluc2V0ICNhZTE4MjY7XHJcbiAgY29sb3I6ICNhZTE4MjYgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5pbWFnZS10aXRsZS13cmFwIHtcclxuICBwYWRkaW5nOiAwIDE1cHggMTVweCAxNXB4O1xyXG4gIGNvbG9yOiAjMjIyO1xyXG59XHJcblxyXG4uaW1hZ2VMb2dve1xyXG4gIHdpZHRoOjI0MHB4O1xyXG4gIGhlaWdodDo1NHB4O1xyXG4gIH1cclxuXHJcbi5kcmFnLXRleHQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRyYWctdGV4dCBoMyB7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLmFsdC1jaGVja3tcclxuICBmb250LXNpemU6IDEwZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLnVwbG9hZC1zdWNjZXNze1xyXG4gIHBhZGRpbmctdG9wOjMlO1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE3NCwyNCwzOCwwLjEpO1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4udGhhbmsteW91e1xyXG4gYmFja2dyb3VuZC1pbWFnZTpcclxuIGxpbmVhci1ncmFkaWVudCgyMzVkZWcsIGhzbCgwLDAlLDc4JSkgIDAlLFxyXG4gaHNsKDAsMCUsOTAlKSA0NyUsXHJcbiByZ2JhKDI1NSwgMjQ3LCAyNDcsIDAuOTA0KSA1MyUsXHJcbiByZ2IoMjU1LCAyNTUsIDI1NSkxMDAlKTtcclxuXHJcbn1cclxuXHJcblxyXG4uZmlsZS11cGxvYWQtaW1hZ2Uge1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbi5yZW1vdmUtaW1hZ2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogI2NkNDUzNTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICNiMDI4MTg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucmVtb3ZlLWltYWdlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjYzEzYjJhO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5yZW1vdmUtaW1hZ2U6YWN0aXZlIHtcclxuICBib3JkZXI6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4NTBweCl7XHJcblxyXG4gIC5mYS1jYW1lcmF7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NDlweCl7XHJcbiAgLmRlc2t0b3B7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZhLWNhbWVyYXtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICB9XHJcblxyXG4gIC5hbHR7XHJcbiAgICBsaW5lLWhlaWdodDogMS42NTtcclxuICAgIGNvbG9yOiNmMmYyZjI7XHJcbiAgICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 41, vars: 0, consts: [["id", "site-footer"], ["itemscope", "", "itemtype", "http://schema.org/LocalBusiness"], ["id", "footerPaint", "src", "assets/images/footer/paint_companies_logos.png", 1, "img-fluid"], ["href", "mailto:estimate@urgentcarebumperrepair.com?subject=Estimate from Urgent Care Bumper Repair"], [1, "far", "fa-envelope"], [2, "margin-right", ".5em"], [1, "contact"], ["href", "tel:18889874368"], [1, "fas", "fa-phone-alt"], ["itemprop", "telephone", 1, "contact"], ["href", "tel:17609949400"], ["href", "sms:17609949400"], [1, "fas", "fa-sms"], ["href", "https://www.facebook.com/109350284023723/posts/109392564019495/", "target", "_blank"], [1, "fab", "fa-facebook-square"], [2, "margin-right", "1.25em"], ["href", "https://www.yelp.com/biz/urgent-care-bumper-repair-oceanside?utm_campaign=www_business_share_popup&utm_medium=copy_link&utm_source=(direct)", "target", "_blank"], [1, "fab", "fa-yelp"], ["href", "https://g.co/kgs/3WXYdw", "target", "_blank"], [1, "fab", "fa-google"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "estimate@urgentcarebumperrepair.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "1-888-9-URGENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "760-994-9400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "760-994-9400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n#footerDiv[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: 500;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 2rem 1rem;\r\n  margin: auto;\r\n  color: #333;\r\n  align-content: center;\r\n}\r\n\r\nfooter[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n  font-size: 3rem;\r\n  margin-bottom: 0;\r\n}\r\n\r\n#footerPaint[_ngcontent-%COMP%]{\r\n\theight:40px;\r\n\twidth:400px;\r\n\tdisplay: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n\r\n}\r\n\r\nspan.contact[_ngcontent-%COMP%]{\r\n\tbackground: -webkit-linear-gradient(left,#ae1826 0%, #4b3026 50%, #7a7f80 100%);\r\n  -webkit-background-clip: text;\r\n          background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: bold;\r\n  }\r\n\r\n.fa-facebook-square[_ngcontent-%COMP%]{\r\n    background: #3c5a98;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n\r\n\r\n  }\r\n\r\n.fa-yelp[_ngcontent-%COMP%]{\r\n    background: #d32323;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent;\r\n\r\n\r\n  }\r\n\r\n.fa-google[_ngcontent-%COMP%]{\r\n    background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;\r\n    -webkit-background-clip: text;\r\n    background-clip: text;\r\n    color: transparent;\r\n    -webkit-text-fill-color: transparent;\r\n    \r\n  }\r\n\r\n.fab[_ngcontent-%COMP%]{\r\n      font-size: 2em !important; \r\n  }\r\n\r\n.fas[_ngcontent-%COMP%]{\r\n    font-size: 1.4em !important;\r\n    color:#c01a2b;\r\n    text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);\r\n  }\r\n\r\n.far[_ngcontent-%COMP%]{\r\n    font-size: 1.4em !important;\r\n    color:#c01a2b;\r\n    text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n\r\n    -webkit-text-decoration-color: #c01a2b;\r\n\r\n            text-decoration-color: #c01a2b;\r\n    text-decoration: none;\r\n    text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);\r\n\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUF1RTs7QUFFdkU7RUFDRSxrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGdCQUFnQjtBQUNsQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0NBQ0MsV0FBVztDQUNYLFdBQVc7Q0FDWCxjQUFjO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjs7QUFFdEI7O0FBRUE7Q0FDQywrRUFBK0U7RUFDOUUsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMscUNBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isb0NBQW9DOzs7RUFHdEM7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLG9DQUFvQzs7O0VBR3RDOztBQUVBO0lBQ0UsZ0pBQWdKO0lBQ2hKLDZCQUE2QjtJQUM3QixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG9DQUFvQzs7RUFFdEM7O0FBRUE7TUFDSSx5QkFBeUIsRUFBRSx5QkFBeUI7RUFDeEQ7O0FBRUE7SUFDRSwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLGdEQUFnRDtFQUNsRDs7QUFFQTtJQUNFLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsZ0RBQWdEO0VBQ2xEOztBQUVBOztJQUVFLHNDQUE4Qjs7WUFBOUIsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixnREFBZ0Q7O0VBRWxEIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkJyk7XHJcblxyXG4jZm9vdGVyRGl2e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuXHJcbmZvb3RlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5mb290ZXIgaDMge1xyXG4gIGZvbnQtc2l6ZTogM3JlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4jZm9vdGVyUGFpbnR7XHJcblx0aGVpZ2h0OjQwcHg7XHJcblx0d2lkdGg6NDAwcHg7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuXHJcbn1cclxuXHJcbnNwYW4uY29udGFjdHtcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCNhZTE4MjYgMCUsICM0YjMwMjYgNTAlLCAjN2E3ZjgwIDEwMCUpO1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLmZhLWZhY2Vib29rLXNxdWFyZXtcclxuICAgIGJhY2tncm91bmQ6ICMzYzVhOTg7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgLmZhLXllbHB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDMyMzIzO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG5cclxuICB9XHJcblxyXG4gIC5mYS1nb29nbGV7XHJcbiAgICBiYWNrZ3JvdW5kOiBjb25pYy1ncmFkaWVudChmcm9tIC00NWRlZywgI2VhNDMzNSAxMTBkZWcsICM0Mjg1ZjQgOTBkZWcgMTgwZGVnLCAjMzRhODUzIDE4MGRlZyAyNzBkZWcsICNmYmJjMDUgMjcwZGVnKSA3MyUgNTUlLzE1MCUgMTUwJSBuby1yZXBlYXQ7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLmZhYntcclxuICAgICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDsgLypzaXplIHdoYXRldmVyIHlvdSBsaWtlKi9cclxuICB9XHJcblxyXG4gIC5mYXN7XHJcbiAgICBmb250LXNpemU6IDEuNGVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojYzAxYTJiO1xyXG4gICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG4gIH1cclxuXHJcbiAgLmZhcntcclxuICAgIGZvbnQtc2l6ZTogMS40ZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNjMDFhMmI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDFweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAuNSk7XHJcbiAgfVxyXG5cclxuICBhOmhvdmVye1xyXG5cclxuICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogI2MwMWEyYjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuXHJcbiAgfVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ "gByZ":
/*!**********************************************!*\
  !*** ./src/app/_services/contact.service.ts ***!
  \**********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class ContactService {
    constructor(http) {
        this.http = http;
        this.API_SERVER = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiUrl;
    }
    sendMessage(data) {
        console.log(data);
        return this.http.post(this.API_SERVER + 'email.php', data, { responseType: 'text', observe: 'events' });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




const _c0 = function () { return ["/home"]; };
const _c1 = function () { return ["/service"]; };
const _c2 = function () { return ["/estimate"]; };
const _c3 = function () { return ["/about"]; };
function NavbarComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "(current)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Estimates");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "About");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c3));
} }
class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{ provide: ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownConfig"], useValue: { isAnimated: true, autoClose: true } }])], decls: 17, vars: 10, consts: [["dropdown", "", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "shadow", "p-3", "mb-5", "rounded-0", "fixed-top"], ["routerLinkActive", "router-link-active", 1, "route", 3, "routerLink"], ["src", "assets/images/logo2.png", "alt", "logo", 1, "imageLogo"], ["dropdownToggle", "", "type", "button", "data-target", "#navbarNavAltMarkup", "aria-controls", "navbarNavAltMarkup", "aria-expanded", "true", "aria-label", "Toggle navigation", 1, "navbar-toggler", "shadow"], [1, "navbar-toggler-icon"], [1, "navbar-nav", "ml-auto", "fullHeader"], ["routerLinkActive", "router-link-active", 1, "nav-item", "nav-link", "active", "linkService", 3, "routerLink"], [1, "sr-only"], ["routerLinkActive", "router-link-active", 1, "nav-item", "nav-link", "linkService", 3, "routerLink"], ["class", "collapse navbar-collapse", "id", "navbarNavAltMarkup", 4, "dropdownMenu"], ["id", "navbarNavAltMarkup", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["routerLinkActive", "router-link-active", 1, "nav-item", "ml-auto", "mr-3", "nav-link", "active", "linkService", 3, "routerLink"], ["routerLinkActive", "router-link-active", 1, "nav-item", "ml-auto", "mr-3", "nav-link", "linkService", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Estimates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, NavbarComponent_div_16_Template, 12, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c3));
    } }, directives: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownToggleDirective"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_0__["BsDropdownMenuDirective"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\nimg.imageLogo[_ngcontent-%COMP%]{\r\nwidth:240px;\r\nheight:54px;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%]{\r\n  background: #f9fcff;\r\n  background-image:\r\n\r\n\r\n    linear-gradient(235deg, hsl(0,0%,78%)  0%,\r\n    hsl(0,0%,90%) 47%,\r\n    rgba(255, 247, 247, 0.904) 53%,\r\n    rgb(255, 255, 255)100%);\r\n\r\n}\r\n\r\n.linkService[_ngcontent-%COMP%] {\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  font-weight:700;\r\n  color:#000 !important;\r\n  text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);\r\n}\r\n\r\n.navbar-toggler[_ngcontent-%COMP%] {\r\n  padding: .25rem .75rem;\r\n  font-size: 1.25rem;\r\n  line-height: 1;\r\n  background-color: transparent;\r\n  border: 1.3px solid rgba(0,0,0,.6);\r\n\r\n  border-radius: 0.0rem !important;\r\n}\r\n\r\n.linkService[_ngcontent-%COMP%]:hover{\r\n  color: #c01a2b !important;\r\n  text-shadow: 0px 1px 0px rgba(255, 255, 255, .5);\r\n\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%]:hover {\r\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(192, 26, 43, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\");\r\n}\r\n\r\n.collapse[_ngcontent-%COMP%] {\r\n  transition: all 0.3s ease-in-out;\r\n\r\n\r\n}\r\n\r\n.collapse.in[_ngcontent-%COMP%] {\r\n  transition: all 0.3s ease-in-out;\r\n  max-height: 9999px; \r\n}\r\n\r\n@media screen and (max-width: 990px){\r\n  .fullHeader[_ngcontent-%COMP%]{\r\n    display: none !important;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 321px){\r\n  img.imageLogo[_ngcontent-%COMP%]{\r\n    width:216px;\r\n    height:49px;\r\n    }\r\n}\r\n\r\n@media (max-width: 576px){\r\n  ul.collapse[_ngcontent-%COMP%]{\r\n     display:none !important;\r\n  }\r\n}\r\n\r\n@media (min-width: 576px){\r\n  ul.full[_ngcontent-%COMP%]{\r\n     display:none !important;\r\n  }\r\n}\r\n\r\n@media (max-width: 281px){\r\n  img.imageLogo[_ngcontent-%COMP%]{\r\n    width:200px;\r\n    height:40px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHVFQUF1RTs7QUFFdkU7QUFDQSxXQUFXO0FBQ1gsV0FBVztBQUNYOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25COzs7Ozs7MkJBTXlCOztBQUUzQjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixrQ0FBa0M7O0VBRWxDLGdDQUFnQztBQUNsQzs7QUFJQTtFQUNFLHlCQUF5QjtFQUN6QixnREFBZ0Q7O0FBRWxEOztBQUlBO0VBQ0UsbVFBQW1RO0FBQ3JROztBQUVBO0VBQ0UsdVFBQXVRO0FBQ3pROztBQUVBO0VBS0UsZ0NBQWdDOzs7QUFHbEM7O0FBRUE7RUFLSSxnQ0FBZ0M7RUFDbEMsa0JBQWtCLEVBQUUsa0VBQWtFO0FBQ3hGOztBQUdBO0VBQ0U7SUFDRSx3QkFBd0I7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFdBQVc7SUFDWDtBQUNKOztBQUVBO0VBQ0U7S0FDRyx1QkFBdUI7RUFDMUI7QUFDRjs7QUFFQTtFQUNFO0tBQ0csdUJBQXVCO0VBQzFCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1g7QUFDSiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCcpO1xyXG5cclxuaW1nLmltYWdlTG9nb3tcclxud2lkdGg6MjQwcHg7XHJcbmhlaWdodDo1NHB4O1xyXG59XHJcblxyXG4ubmF2YmFye1xyXG4gIGJhY2tncm91bmQ6ICNmOWZjZmY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTpcclxuXHJcblxyXG4gICAgbGluZWFyLWdyYWRpZW50KDIzNWRlZywgaHNsKDAsMCUsNzglKSAgMCUsXHJcbiAgICBoc2woMCwwJSw5MCUpIDQ3JSxcclxuICAgIHJnYmEoMjU1LCAyNDcsIDI0NywgMC45MDQpIDUzJSxcclxuICAgIHJnYigyNTUsIDI1NSwgMjU1KTEwMCUpO1xyXG5cclxufVxyXG5cclxuLmxpbmtTZXJ2aWNlIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1zaGFkb3c6IDBweCAxcHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjUpO1xyXG59XHJcblxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIHBhZGRpbmc6IC4yNXJlbSAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMS4zcHggc29saWQgcmdiYSgwLDAsMCwuNik7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDAuMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuXHJcbi5saW5rU2VydmljZTpob3ZlcntcclxuICBjb2xvcjogI2MwMWEyYiAhaW1wb3J0YW50O1xyXG4gIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC41KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0Nzdmcgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBzdHJva2U9J3JnYmEoMCwgMCwgMCwgMSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlci1pY29uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB2aWV3Qm94PScwIDAgMzIgMzInIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIHN0cm9rZT0ncmdiYSgxOTIsIDI2LCA0MywgMSknIHN0cm9rZS13aWR0aD0nMicgc3Ryb2tlLWxpbmVjYXA9J3JvdW5kJyBzdHJva2UtbWl0ZXJsaW1pdD0nMTAnIGQ9J000IDhoMjRNNCAxNmgyNE00IDI0aDI0Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4uY29sbGFwc2Uge1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcblxyXG5cclxufVxyXG5cclxuLmNvbGxhcHNlLmluIHtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgbWF4LWhlaWdodDogOTk5OXB4OyAvKmFueSBudW1iZXIgd2hpY2ggaXMgbGFnZXIgdGhhbiBhIGhlaWdodCBvZiBhbnkgb2YgeW91ciBlbGVtZW50cyovXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTBweCl7XHJcbiAgLmZ1bGxIZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjFweCl7XHJcbiAgaW1nLmltYWdlTG9nb3tcclxuICAgIHdpZHRoOjIxNnB4O1xyXG4gICAgaGVpZ2h0OjQ5cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCl7XHJcbiAgdWwuY29sbGFwc2V7XHJcbiAgICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpe1xyXG4gIHVsLmZ1bGx7XHJcbiAgICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMjgxcHgpe1xyXG4gIGltZy5pbWFnZUxvZ297XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgIGhlaWdodDo0MHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "nZye":
/*!**********************************************!*\
  !*** ./src/app/process/process.component.ts ***!
  \**********************************************/
/*! exports provided: ProcessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessComponent", function() { return ProcessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");



const _c0 = function () { return ["/estimate"]; };
const _c1 = function () { return ["/service"]; };
class ProcessComponent {
    constructor() {
        this.config = {
            effect: 'coverflow',
            slidesPerView: 'auto',
            init: true,
            loop: false,
            grabCursor: true,
            coverflowEffect: {
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        };
    }
    toHeader() {
        document.getElementById('header').scrollIntoView();
    }
    ngOnInit() {
    }
}
ProcessComponent.ɵfac = function ProcessComponent_Factory(t) { return new (t || ProcessComponent)(); };
ProcessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProcessComponent, selectors: [["app-process"]], decls: 78, vars: 7, consts: [[1, "captionProcessHeader", "mt-5", 2, "background-color", "rgb(147, 154, 163)"], [1, "overlay"], [1, "process-landing-text"], [1, "landing-text-inner", "mt-5"], [1, "title"], [1, "text-white", "ml-3", "mr-3"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "alt", 3, "routerLink"], ["id", "view-work", 1, "btn", 3, "click"], ["id", "process", 1, "images"], ["id", "header"], [1, "caption"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/process/0.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/2.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/3.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/4.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/5.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/6.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/7.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/8.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/9.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/10.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/process/11.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n            url('assets/images/process/11.jpg')", "background-size", "cover"], [1, "pt-5"], [1, "final"], [2, "font-size", "22.5px"], [1, "swiper-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "swipeColor"], [1, "captionBottom"], [1, "theButton"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "route", 3, "routerLink"]], template: function ProcessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The damaged area is designated and sectioned off by masking the rest of the car with tape and paper;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "The repair starts with reshaping and sanding down the damaged area;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Depending on the amount of damage and its severity, polyurethane filler is added, if needed, to smooth out the surface;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "The area is then sanded to return the part to its original shape and integrity;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2-3 layers of a primer/surfacer is applied;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "An infrared curing lamp is used to properly heat and cure the primer, then the primer is sanded, a final preparation of the surface is done;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Next, the paint code is retrieved directly from your vehicle and used to achieve your car\u2019s color match;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Then between 5-12 coats of paint are applied to the repair, depending on the color;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Once I feel the paint is dry enough, I remove the masking etc. for the paint to cure and inspect the final result for quality;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Work area is cleaned up respectfully;");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "All our refinishing services carry a lifetime cratftmanship warranty; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Get A Free Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProcessComponent_Template_a_click_32_listener() { return ctx.toHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " View Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "View Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h1", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Return To Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n.captionProcessHeader[_ngcontent-%COMP%] {\r\n  height: 775px;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  background-image: url(/assets/images/car/166.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]{\r\n  background: rgba(192, 26, 43, 0.4);\r\n  border: 1px #fff solid !important;\r\n  color: #fff !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]{\r\n  height:775px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.overlay-last[_ngcontent-%COMP%]{\r\n  height:inherit;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.final[_ngcontent-%COMP%]{\r\n  font-size: 80px;\r\n  color: #fff;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.final-image[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.1rem;\r\n}\r\n\r\n@keyframes fill-images{\r\n\r\n\t0%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/271.jpg\");\r\n    background-position: 0% 100%;\r\n\t}\r\n\r\n\t10%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n\r\n\t}\r\n\r\n\t20%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/267.jpg\");\r\n\t}\r\n\r\n\t30%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/270.jpg\");\r\n\t}\r\n\t40%{\r\n\t\tbackground-image:url(\"/assets/images/porsche - Copy/155.jpg\");\r\n\t}\r\n  50%{\r\n\t\tbackground-image:url(\"/assets/images/process/11.jpg\");\r\n\r\n\t}\r\n\t60%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    background-position: 100% 0%;\r\n\t}\r\n\t70%{\r\n\t\tbackground-image:url(\"/assets/images/97_carrera/44.jpg\");\r\n  }\r\n  75%{\r\n    background-image:url(\"/assets/images/97_carrera/45.jpg\");\r\n  }\r\n\t80%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/079.jpg\");\r\n\r\n\t}\r\n\t90%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/080.jpg\");\r\n\t}\r\n\t100%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/082.jpg\");\r\n\t}\r\n}\r\n\r\n.process-landing-text[_ngcontent-%COMP%]\r\n{\r\n  padding-top:12%;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n  background-size: cover;\r\n}\r\n\r\n.categoryLogo[_ngcontent-%COMP%]{\r\n\r\n  width:320px;\r\n  height:80px;\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  padding:0%;\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.captionBottom[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  padding: 0px;\r\n  color: rgb(256, 256, 256);\r\n  text-align: center;\r\n  background: #333;\r\n}\r\n\r\n.captionImages[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n\r\n.caption1[_ngcontent-%COMP%]{\r\n  height:100px;\r\n  color:rgb(256, 256, 256);\r\n  background: #c3c3c1;\r\n  background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 2.9rem;\r\n  text-transform: uppercase;\r\n  color:#fff;\r\n  margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  transition: opacity 1s ease-in;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  background: #333;\r\n  color: #fff;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-left: dotted 1px #fff;\r\n  border-right: dotted 1px #fff;\r\n  display: inline-block;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n\tpadding: 0.5rem 2rem;\r\n\tborder: 1px #ccc solid;\r\n\tdisplay: inline-block;\r\n\tmargin: 2rem 0 0;\r\n\tborder-radius: 50px;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n  transition: background 500ms ease;\r\n\r\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: calc(var(--swiper-navigation-size)/ 44 * 27);\r\n  height: var(--swiper-navigation-size);\r\n  margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.swiper-pagination-white[_ngcontent-%COMP%] {\r\n  --swiper-pagination-color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n  .caption[_ngcontent-%COMP%] {\r\n    height:350px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-size:cover;\r\n\r\n   }\r\n\r\n   .captionProcessHeader[_ngcontent-%COMP%] {\r\n    height: 1000px !important;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:1000px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n  .overlay-last[_ngcontent-%COMP%]{\r\n    height:inherit;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]{\r\n    font-size: 47px;\r\n  }\r\n\r\n  .final-image[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n  }\r\n\r\n  .caption1[_ngcontent-%COMP%]{\r\n    height:70px;\r\n    color:rgb(256, 256, 256);\r\n    background: #c3c3c1;\r\n    background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n  }\r\n\r\n  .captionImages[_ngcontent-%COMP%]{\r\n    height:350px;\r\n  }\r\n\r\n  .categoryLogo[_ngcontent-%COMP%]{\r\n    width:224px;\r\n    height:56px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding:0%;\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width:321px){\r\n\r\n  .captionProcessHeader[_ngcontent-%COMP%] {\r\n    height: 1050px !important;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:1050px;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 281px){\r\n\r\n  .captionProcessHeader[_ngcontent-%COMP%] {\r\n    height: 1100px !important;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:1100px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBdUU7O0FBRXZFO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsaURBQWlEO0VBQ2pELDRCQUE0QjtFQUM1QiwwQkFBMEI7RUFDMUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtFQUMxQiwyQ0FBMkM7RUFDM0MsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsWUFBWTtFQUNaLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7O0NBRUM7RUFDQyw0REFBNEQ7SUFDMUQsNEJBQTRCO0NBQy9COztDQUVBO0lBQ0csMERBQTBEOztDQUU3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDtDQUNBO0VBQ0MsNkRBQTZEO0NBQzlEO0VBQ0M7RUFDQSxxREFBcUQ7O0NBRXREO0NBQ0E7SUFDRywwREFBMEQ7SUFDMUQsNEJBQTRCO0NBQy9CO0NBQ0E7RUFDQyx3REFBd0Q7RUFDeEQ7RUFDQTtJQUNFLHdEQUF3RDtFQUMxRDtDQUNEO0VBQ0Msd0RBQXdEOztDQUV6RDtDQUNBO0VBQ0Msd0RBQXdEO0NBQ3pEO0NBQ0E7RUFDQyx3REFBd0Q7Q0FDekQ7QUFDRDs7QUFFQTs7RUFFRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsK0hBQStIO0VBQy9ILHNCQUFzQjtBQUN4Qjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFLbkIsK0RBQStEO0FBQ2pFOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDO3FDQUNtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixXQUFXO0VBQ1YsaUNBQWlDOztDQUVsQyw2Q0FBNkM7RUFDNUM7O0FBRUY7RUFDRSxtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsbURBQW1EO0VBQ25ELHFDQUFxQztFQUNyQyx1REFBdUQ7RUFDdkQsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDZCQUE2Qjs7QUFFL0I7O0FBR0E7RUFDRTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHFCQUFxQjs7R0FFdEI7O0dBRUE7SUFDQyx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsY0FBYztJQUNkLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUtuQiwrREFBK0Q7RUFDakU7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7QUFFRjs7QUFFQTs7RUFFRTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixvQ0FBb0M7RUFDdEM7O0FBRUY7O0FBRUE7O0VBRUU7SUFDRSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztBQUVGIiwiZmlsZSI6InByb2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZCcpO1xyXG5cclxuLmNhcHRpb25Qcm9jZXNzSGVhZGVyIHtcclxuICBoZWlnaHQ6IDc3NXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG4gIGFuaW1hdGlvbjogZmlsbC1pbWFnZXMgMzBzO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbi5hbHR7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDI2LCA0MywgMC40KTtcclxuICBib3JkZXI6IDFweCAjZmZmIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgaGVpZ2h0Ojc3NXB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm92ZXJsYXktbGFzdHtcclxuICBoZWlnaHQ6aW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5maW5hbHtcclxuICBmb250LXNpemU6IDgwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbn1cclxuXHJcbi5maW5hbC1pbWFnZXtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcblxyXG5oNiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZmlsbC1pbWFnZXN7XHJcblxyXG5cdDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI3MS5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwJSAxMDAlO1xyXG5cdH1cclxuXHJcblx0MTAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9DYXIxIC0gQ29weS8wODkuanBnXCIpO1xyXG5cclxuXHR9XHJcblxyXG5cdDIwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvbGV4dXMxIC0gQ29weS8yNjcuanBnXCIpO1xyXG5cdH1cclxuXHJcblx0MzAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI3MC5qcGdcIik7XHJcblx0fVxyXG5cdDQwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvcG9yc2NoZSAtIENvcHkvMTU1LmpwZ1wiKTtcclxuXHR9XHJcbiAgNTAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wcm9jZXNzLzExLmpwZ1wiKTtcclxuXHJcblx0fVxyXG5cdDYwJXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvQ2FyMSAtIENvcHkvMDg5LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMCU7XHJcblx0fVxyXG5cdDcwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvOTdfY2FycmVyYS80NC5qcGdcIik7XHJcbiAgfVxyXG4gIDc1JXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvOTdfY2FycmVyYS80NS5qcGdcIik7XHJcbiAgfVxyXG5cdDgwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvTTQgLSBDb3B5LzA3OS5qcGdcIik7XHJcblxyXG5cdH1cclxuXHQ5MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL000IC0gQ29weS8wODAuanBnXCIpO1xyXG5cdH1cclxuXHQxMDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9NNCAtIENvcHkvMDgyLmpwZ1wiKTtcclxuXHR9XHJcbn1cclxuXHJcbi5wcm9jZXNzLWxhbmRpbmctdGV4dFxyXG57XHJcbiAgcGFkZGluZy10b3A6MTIlO1xyXG59XHJcblxyXG4uY2FwdGlvbiB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpLCByZ2JhKDI1NiwgMjU2LCAyNTYsIDAuNzgpKSx1cmwoL2Fzc2V0cy9pbWFnZXMvaG9tZS9iYWNrZ3JvdW5kLmpwZyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmNhdGVnb3J5TG9nb3tcclxuXHJcbiAgd2lkdGg6MzIwcHg7XHJcbiAgaGVpZ2h0OjgwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6MCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXB0aW9uQm90dG9tIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBjb2xvcjogcmdiKDI1NiwgMjU2LCAyNTYpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcblxyXG4uY2FwdGlvbkltYWdlcyB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmNhcHRpb24xe1xyXG4gIGhlaWdodDoxMDBweDtcclxuICBjb2xvcjpyZ2IoMjU2LCAyNTYsIDI1Nik7XHJcbiAgYmFja2dyb3VuZDogI2MzYzNjMTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKHRvIHJpZ2h0KSwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIHJpZ2h0IHRvcCwgZnJvbSgjZmZmZmZmKSwgdG8oI2MzYzNjMSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG59XHJcblxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjojZmZmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxubWFpbiB7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLWluO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcbiAgYm94LXNoYWRvdzogMzBweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyksXHJcbiAgICAtMzBweCAwcHggNDBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbiNoZWFkZXIge1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogIzMzMztcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuI2hlYWRlciBoMiB7XHJcbiAgYm9yZGVyLWxlZnQ6IGRvdHRlZCAxcHggI2ZmZjtcclxuICBib3JkZXItcmlnaHQ6IGRvdHRlZCAxcHggI2ZmZjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG5cdHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG5cdGJvcmRlcjogMXB4ICNjY2Mgc29saWQ7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdG1hcmdpbjogMnJlbSAwIDA7XHJcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCA1MDBtcyBlYXNlO1xyXG5cclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgfVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBjb2xvcjogI2MwMWEyYiAhaW1wb3J0YW50O1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDQ0ICogMjcpO1xyXG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpLyAyKTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjYWUxODI2O1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xyXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICNhZTE4MjY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gIC5jYXB0aW9uIHtcclxuICAgIGhlaWdodDozNTBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTpjb3ZlcjtcclxuXHJcbiAgIH1cclxuXHJcbiAgIC5jYXB0aW9uUHJvY2Vzc0hlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwMDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5e1xyXG4gICAgaGVpZ2h0OjEwMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWxhc3R7XHJcbiAgICBoZWlnaHQ6aW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICB9XHJcblxyXG4gIC5maW5hbHtcclxuICAgIGZvbnQtc2l6ZTogNDdweDtcclxuICB9XHJcblxyXG4gIC5maW5hbC1pbWFnZXtcclxuICAgIGhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FwdGlvbjF7XHJcbiAgICBoZWlnaHQ6NzBweDtcclxuICAgIGNvbG9yOnJnYigyNTYsIDI1NiwgMjU2KTtcclxuICAgIGJhY2tncm91bmQ6ICNjM2MzYzE7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKHRvIHJpZ2h0KSwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZmZmZmYpLCB0bygjYzNjM2MxKSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgfVxyXG5cclxuICAuY2FwdGlvbkltYWdlc3tcclxuICAgIGhlaWdodDozNTBweDtcclxuICB9XHJcblxyXG4gIC5jYXRlZ29yeUxvZ297XHJcbiAgICB3aWR0aDoyMjRweDtcclxuICAgIGhlaWdodDo1NnB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6MCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDozMjFweCl7XHJcblxyXG4gIC5jYXB0aW9uUHJvY2Vzc0hlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDEwNTBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5e1xyXG4gICAgaGVpZ2h0OjEwNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODFweCl7XHJcblxyXG4gIC5jYXB0aW9uUHJvY2Vzc0hlYWRlciB7XHJcbiAgICBoZWlnaHQ6IDExMDBweCAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5e1xyXG4gICAgaGVpZ2h0OjExMDBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _bumperreplacement_bumperreplacement_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bumperreplacement/bumperreplacement.component */ "zzz5");
/* harmony import */ var _service_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/service.component */ "MzDm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _estimate_estimate_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./estimate/estimate.component */ "Igr9");
/* harmony import */ var _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./insurance/insurance.component */ "+zU0");
/* harmony import */ var _process_process_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./process/process.component */ "nZye");
/* harmony import */ var _bumperrepair_bumperrepair_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bumperrepair/bumperrepair.component */ "FQCQ");
/* harmony import */ var _leasereturn_leasereturn_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./leasereturn/leasereturn.component */ "CCp/");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'leasereturn', component: _leasereturn_leasereturn_component__WEBPACK_IMPORTED_MODULE_9__["LeasereturnComponent"] },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"] },
    { path: 'service', component: _service_service_component__WEBPACK_IMPORTED_MODULE_1__["ServiceComponent"] },
    { path: 'estimate', component: _estimate_estimate_component__WEBPACK_IMPORTED_MODULE_5__["EstimateComponent"] },
    { path: 'insurance', component: _insurance_insurance_component__WEBPACK_IMPORTED_MODULE_6__["InsuranceComponent"] },
    { path: 'services', component: _service_service_component__WEBPACK_IMPORTED_MODULE_1__["ServiceComponent"] },
    { path: 'process', component: _process_process_component__WEBPACK_IMPORTED_MODULE_7__["ProcessComponent"] },
    { path: 'bumperrepair', component: _bumperrepair_bumperrepair_component__WEBPACK_IMPORTED_MODULE_8__["BumperrepairComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
    { path: 'bumperreplacement', component: _bumperreplacement_bumperreplacement_component__WEBPACK_IMPORTED_MODULE_0__["BumperreplacementComponent"] },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ }),

/***/ "zzz5":
/*!******************************************************************!*\
  !*** ./src/app/bumperreplacement/bumperreplacement.component.ts ***!
  \******************************************************************/
/*! exports provided: BumperreplacementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BumperreplacementComponent", function() { return BumperreplacementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "nhfI");



const _c0 = function () { return ["/estimate"]; };
const _c1 = function () { return ["/service"]; };
class BumperreplacementComponent {
    constructor() {
        this.config = {
            effect: 'coverflow',
            slidesPerView: 'auto',
            init: true,
            loop: false,
            coverflowEffect: {
                rotate: 100,
                stretch: 0,
                depth: 100,
                modifier: 1,
                grabCursor: true,
                slideShadows: false,
            },
            pagination: {
                el: '.swiper-pagination',
                dynamicBullets: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        };
    }
    // tslint:disable-next-line: typedef
    toHeader() {
        document.getElementById('header').scrollIntoView();
    }
    ngOnInit() {
    }
}
BumperreplacementComponent.ɵfac = function BumperreplacementComponent_Factory(t) { return new (t || BumperreplacementComponent)(); };
BumperreplacementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BumperreplacementComponent, selectors: [["app-bumperreplacement"]], decls: 108, vars: 16, consts: [[1, "captionBumperreplacement", "mt-5", 2, "background-color", "rgb(147, 154, 163)"], [1, "overlay"], [1, "bumperreplace-landing-text"], [1, "bumperreplace-landing-text-inner"], [1, "title", "mb-3"], [1, "ml-3", "mr-3"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "alt", 3, "routerLink"], ["id", "view-work", 1, "btn", "mb-5", 3, "click"], ["id", "bumperreplacement", 1, "images"], ["id", "header"], [1, "caption"], [1, "swiper-container", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/images/car3/174.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/car3/186.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/car3/187.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/car3/190.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n            url('assets/images/car3/190.jpg')", "background-size", "cover"], [1, "pt-5"], [1, "final"], [2, "font-size", "20px"], [1, "swiper-pagination", "swiper-pagination-white"], [1, "swiper-button-prev", "swipeColor"], [1, "swiper-button-next", "swipeColor"], [1, "caption1"], ["src", "assets/images/logo2.png", 1, "categoryLogo"], ["src", "assets/images/BMW/IMG_1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/BMW/IMG_2.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/BMW/IMG_2.jpg')", "background-size", "cover"], ["src", "assets/images/bumper2/1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/bumper2/2.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/bumper2/3.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/bumper2/3.jpg')", "background-size", "cover"], ["src", "assets/images/bumper/1.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/bumper/2.jpg", "alt", "...", 1, "captionImages"], ["src", "assets/images/bumper/3.jpg", "alt", "...", 1, "captionImages"], [1, "final-image", 2, "background-image", "linear-gradient(to bottom, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)),\n        url('assets/images/bumper/3.jpg')", "background-size", "cover"], [1, "captionBottom"], [1, "theButton"], ["routerLinkActive", "router-link-active", "id", "view-work", 1, "btn", "route", 3, "routerLink"]], template: function BumperreplacementComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Bumper Replacement");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We can replace your parts whether they require paint to match the vehicle or a part that does not require any paint. If your new part does require paint, we have the ability to collect a color sample and color code along with the deposit for the part. Once painted, we will bring it to you or you can come to us for installation which takes one to two hours. Which gives you the ability to use your vehile while the part is being painted. No need to leave your vehicle at a shop for any reason (NO RENTAL CAR NEEDED). Urgent Care Bumper Repair Brings 20 Years Of Experience In The Field, And Guarantees The Best Possible Results When Replacing The Bumper On Your Car. You Will Think It Came Out Of The Factory Like That! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Get A Free Estimate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BumperreplacementComponent_Template_a_click_12_listener() { return ctx.toHeader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View Work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "View Gallery");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h1", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Urgent Care Bumper Repair");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Get A Free Estimate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, " Return To Services ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"]], styles: ["@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');\r\n\r\n.captionBumperreplacement[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  text-align: center;\r\n  vertical-align: text-top;\r\n  background-image: url(/assets/images/car/166.jpg);\r\n  background-repeat: no-repeat;\r\n  background-size: 100% 100%;\r\n  text-shadow: 8px 8px 6px #000;\r\n  animation: fill-images 30s;\r\n  transition: background-image 1s ease-in-out;\r\n  animation-iteration-count: infinite;\r\n}\r\n\r\n.overlay[_ngcontent-%COMP%]{\r\n  height:600px;\r\n  background: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.overlay-last[_ngcontent-%COMP%]{\r\n  height:inherit;\r\n  background-color: rgba(0, 0, 0, 0.9);\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]{\r\n  background: rgba(192, 26, 43, 0.4);\r\n  border: 1px #fff solid !important;\r\n  color: #fff !important;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.alt[_ngcontent-%COMP%]:hover{\r\n  border: 1px #c01a2b solid !important;\r\n\r\n}\r\n\r\n.final[_ngcontent-%COMP%]{\r\n  font-size: 80px;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.final-image[_ngcontent-%COMP%]{\r\n  height: 600px;\r\n}\r\n\r\n@keyframes fill-images{\r\n\r\n\t0%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/271.jpg\");\r\n    background-position: 0% 100%;\r\n\t}\r\n\r\n\t10%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n\r\n\t}\r\n\r\n\t20%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/267.jpg\");\r\n\t}\r\n\r\n\t30%{\r\n\t\tbackground-image:url(\"/assets/images/lexus1 - Copy/270.jpg\");\r\n\t}\r\n\t40%{\r\n\t\tbackground-image:url(\"/assets/images/porsche - Copy/155.jpg\");\r\n\t}\r\n  50%{\r\n\t\tbackground-image:url(\"/assets/images/process/11.jpg\");\r\n\r\n\t}\r\n\t60%{\r\n    background-image:url(\"/assets/images/Car1 - Copy/089.jpg\");\r\n    background-position: 100% 0%;\r\n\t}\r\n\t70%{\r\n\t\tbackground-image:url(\"/assets/images/97_carrera/44.jpg\");\r\n  }\r\n  75%{\r\n    background-image:url(\"/assets/images/97_carrera/45.jpg\");\r\n  }\r\n\t80%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/079.jpg\");\r\n\r\n\t}\r\n\t90%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/080.jpg\");\r\n\t}\r\n\t100%{\r\n\t\tbackground-image:url(\"/assets/images/M4 - Copy/082.jpg\");\r\n\t}\r\n}\r\n\r\n.bumperreplace-landing-text[_ngcontent-%COMP%] {\r\n  padding-top: 20%;\r\n}\r\n\r\n.caption[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n  padding: 0px;\r\n  text-align: center;\r\n  background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n  background-size: cover;\r\n}\r\n\r\n.categoryLogo[_ngcontent-%COMP%]{\r\n\r\n  width:320px;\r\n  height:80px;\r\n display: block;\r\n margin-left: auto;\r\n margin-right: auto;\r\n padding:0%;\r\n\r\n\r\n}\r\n\r\nimg[_ngcontent-%COMP%] {\r\n  display: block;\r\n  width: 100%;\r\n}\r\n\r\n.captionBottom[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  padding: 0px;\r\n  color: rgb(256, 256, 256);\r\n  text-align: center;\r\n  background: #333;\r\n}\r\n\r\n.captionImages[_ngcontent-%COMP%] {\r\n  height: 600px;\r\n}\r\n\r\n.caption1[_ngcontent-%COMP%]{\r\n  height:100px;\r\n  color:rgb(256, 256, 256);\r\n  background: #c3c3c1;\r\n   background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n\r\n\r\n}\r\n\r\n.bumperreplacement-landing-text[_ngcontent-%COMP%] {\r\n  padding-top: 20%;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n  font-size: 2.9rem;\r\n  text-transform: uppercase;\r\n  color:#fff;\r\n  margin: 0;\r\n}\r\n\r\nh2[_ngcontent-%COMP%] {\r\n  font-weight: 400;\r\n  font-size: 1.25rem;\r\n  text-transform: capitalize;\r\n  color: #fff;\r\n  margin: 0;\r\n}\r\n\r\nh6[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nmain[_ngcontent-%COMP%] {\r\n  max-width: 900px;\r\n  margin: auto;\r\n  display: block;\r\n  transition: opacity 1s ease-in;\r\n  font-family: 'Roboto Condensed', sans-serif;\r\n  box-shadow: 30px 0px 40px rgba(0, 0, 0, 0.3),\r\n    -30px 0px 40px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n#header[_ngcontent-%COMP%] {\r\n  padding: 1.5rem;\r\n  text-align: center;\r\n  background: #333;\r\n  color: #fff;\r\n}\r\n\r\n#header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\r\n  border-left: dotted 1px #fff;\r\n  border-right: dotted 1px #fff;\r\n  display: inline-block;\r\n  padding-right: 1rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n\tpadding: 0.5rem 2rem;\r\n\tborder: 1px #ccc solid;\r\n\tdisplay: inline-block;\r\n\tmargin: 1rem 0 0;\r\n\tborder-radius: 50px;\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\ttransition: background 500ms ease;\r\n\tbox-shadow: 10px 10px 5px rgba(0, 0, 0, 0.37);\r\n  }\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background: #f4f4f4;\r\n  color: #c01a2b !important;\r\n}\r\n\r\n.swiper-button-next[_ngcontent-%COMP%], .swiper-button-prev[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  width: calc(var(--swiper-navigation-size)/ 44 * 27);\r\n  height: var(--swiper-navigation-size);\r\n  margin-top: calc(-1 * var(--swiper-navigation-size)/ 2);\r\n  z-index: 10;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n}\r\n\r\n.swiper-pagination-white[_ngcontent-%COMP%] {\r\n  --swiper-pagination-color: #ae1826;\r\n  text-shadow: 8px 8px 6px #000;\r\n\r\n}\r\n\r\n@media screen and (max-width: 500px){\r\n\r\n  .captionBumperreplacement[_ngcontent-%COMP%] {\r\n    height: 700px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n  .caption[_ngcontent-%COMP%] {\r\n    height:350px;\r\n    padding: 0px;\r\n    text-align: center;\r\n    background-size:cover;\r\n    background-image: linear-gradient(rgba(256, 256, 256, 0.78), rgba(256, 256, 256, 0.78)),url(/assets/images/home/background.jpg);\r\n\r\n   }\r\n\r\n   .overlay[_ngcontent-%COMP%]{\r\n    height:700px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n   .caption1[_ngcontent-%COMP%]{\r\n     height:70px;\r\n     color:rgb(256, 256, 256);\r\n     background: #c3c3c1;\r\n      background: linear-gradient(to right, #ffffff 0%, #c3c3c1 100%);\r\n\r\n\r\n   }\r\n\r\n   .overlay-last[_ngcontent-%COMP%]{\r\n    height:inherit;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n  }\r\n\r\n  .final[_ngcontent-%COMP%]{\r\n    font-size: 47px;\r\n  }\r\n\r\n  .final-image[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n  }\r\n\r\n   .captionImages[_ngcontent-%COMP%]{\r\n     height:350px;\r\n   }\r\n   .categoryLogo[_ngcontent-%COMP%]{\r\n\r\n    width:224px;\r\n    height:56px;\r\n    display: block;\r\n      margin-left: auto;\r\n      margin-right: auto;\r\n      padding:0%;\r\n\r\n\r\n   }\r\n\r\n}\r\n\r\n@media screen and (max-width:321px){\r\n\r\n  .captionBumperreplacement[_ngcontent-%COMP%] {\r\n    height: 800px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:800px;\r\n    background-color: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\r\n\r\n@media screen and (max-width: 281px){\r\n\r\n  .captionBumperreplacement[_ngcontent-%COMP%] {\r\n    height:900px;\r\n    text-align: center;\r\n    vertical-align: text-top;\r\n    background-image: url(/assets/images/car/166.jpg);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    text-shadow: 8px 8px 6px #000;\r\n    animation: fill-images 30s;\r\n    transition: background-image 1s ease-in-out;\r\n    animation-iteration-count: infinite;\r\n  }\r\n\r\n  .overlay-last[_ngcontent-%COMP%]{\r\n    height:inherit;\r\n    background-color: rgba(0, 0, 0, 0.9);\r\n  }\r\n\r\n\r\n  .final[_ngcontent-%COMP%]{\r\n    font-size: 47px;\r\n  }\r\n\r\n  .final-image[_ngcontent-%COMP%]{\r\n    height: 350px;\r\n  }\r\n\r\n  .overlay[_ngcontent-%COMP%]{\r\n    height:1100px;\r\n    background: rgba(0, 0, 0, 0.4);\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1bXBlcnJlcGxhY2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFOztBQUV2RTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLGlEQUFpRDtFQUNqRCw0QkFBNEI7RUFDNUIsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIsMkNBQTJDO0VBQzNDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlDQUFpQztFQUNqQyxzQkFBc0I7RUFDdEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0Usb0NBQW9DOztBQUV0Qzs7QUFFQTtFQUNFLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0NBRUM7RUFDQyw0REFBNEQ7SUFDMUQsNEJBQTRCO0NBQy9COztDQUVBO0lBQ0csMERBQTBEOztDQUU3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDs7Q0FFQTtFQUNDLDREQUE0RDtDQUM3RDtDQUNBO0VBQ0MsNkRBQTZEO0NBQzlEO0VBQ0M7RUFDQSxxREFBcUQ7O0NBRXREO0NBQ0E7SUFDRywwREFBMEQ7SUFDMUQsNEJBQTRCO0NBQy9CO0NBQ0E7RUFDQyx3REFBd0Q7RUFDeEQ7RUFDQTtJQUNFLHdEQUF3RDtFQUMxRDtDQUNEO0VBQ0Msd0RBQXdEOztDQUV6RDtDQUNBO0VBQ0Msd0RBQXdEO0NBQ3pEO0NBQ0E7RUFDQyx3REFBd0Q7Q0FDekQ7QUFDRDs7QUFJQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLCtIQUErSDtFQUMvSCxzQkFBc0I7QUFDeEI7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7Q0FDWixjQUFjO0NBQ2QsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixVQUFVOzs7QUFHWDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixtQkFBbUI7R0FLbEIsK0RBQStEOzs7QUFHbEU7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsV0FBVztFQUNYLFNBQVM7QUFDWDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsMkNBQTJDO0VBQzNDO3FDQUNtQztBQUNyQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7Q0FDQyxvQkFBb0I7Q0FDcEIsc0JBQXNCO0NBQ3RCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLHFCQUFxQjtDQUNyQixXQUFXO0NBQ1gsaUNBQWlDO0NBQ2pDLDZDQUE2QztFQUM1Qzs7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLG1EQUFtRDtFQUNuRCxxQ0FBcUM7RUFDckMsdURBQXVEO0VBQ3ZELFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyw2QkFBNkI7O0FBRS9COztBQUdBOztFQUVFO0lBQ0UsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsaURBQWlEO0lBQ2pELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLDBCQUEwQjtJQUMxQiwyQ0FBMkM7SUFDM0MsbUNBQW1DO0VBQ3JDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsK0hBQStIOztHQUVoSTs7R0FFQTtJQUNDLFlBQVk7SUFDWiw4QkFBOEI7RUFDaEM7O0dBRUM7S0FDRSxXQUFXO0tBQ1gsd0JBQXdCO0tBQ3hCLG1CQUFtQjtNQUtsQiwrREFBK0Q7OztHQUdsRTs7R0FFQTtJQUNDLGNBQWM7SUFDZCxvQ0FBb0M7RUFDdEM7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztHQUVDO0tBQ0UsWUFBWTtHQUNkO0dBQ0E7O0lBRUMsV0FBVztJQUNYLFdBQVc7SUFDWCxjQUFjO01BQ1osaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixVQUFVOzs7R0FHYjs7QUFFSDs7QUFFQTs7RUFFRTtJQUNFLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsd0JBQXdCO0lBQ3hCLGlEQUFpRDtJQUNqRCw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkNBQTJDO0lBQzNDLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLFlBQVk7SUFDWixvQ0FBb0M7RUFDdEM7O0FBRUY7O0FBR0E7O0VBRUU7SUFDRSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpREFBaUQ7SUFDakQsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLDJDQUEyQztJQUMzQyxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsb0NBQW9DO0VBQ3RDOzs7RUFHQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0VBQ2hDOztBQUVGIiwiZmlsZSI6ImJ1bXBlcnJlcGxhY2VtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQnKTtcclxuXHJcbi5jYXB0aW9uQnVtcGVycmVwbGFjZW1lbnQge1xyXG4gIGhlaWdodDogNjAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2FyLzE2Ni5qcGcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgYW5pbWF0aW9uOiBmaWxsLWltYWdlcyAzMHM7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLm92ZXJsYXl7XHJcbiAgaGVpZ2h0OjYwMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcclxufVxyXG5cclxuLm92ZXJsYXktbGFzdHtcclxuICBoZWlnaHQ6aW5oZXJpdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbn1cclxuXHJcbi5hbHR7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgxOTIsIDI2LCA0MywgMC40KTtcclxuICBib3JkZXI6IDFweCAjZmZmIHNvbGlkICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxufVxyXG5cclxuLmFsdDpob3ZlcntcclxuICBib3JkZXI6IDFweCAjYzAxYTJiIHNvbGlkICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZmluYWx7XHJcbiAgZm9udC1zaXplOiA4MHB4O1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4uZmluYWwtaW1hZ2V7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuQGtleWZyYW1lcyBmaWxsLWltYWdlc3tcclxuXHJcblx0MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2xleHVzMSAtIENvcHkvMjcxLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAlIDEwMCU7XHJcblx0fVxyXG5cclxuXHQxMCV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL0NhcjEgLSBDb3B5LzA4OS5qcGdcIik7XHJcblxyXG5cdH1cclxuXHJcblx0MjAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9sZXh1czEgLSBDb3B5LzI2Ny5qcGdcIik7XHJcblx0fVxyXG5cclxuXHQzMCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL2xleHVzMSAtIENvcHkvMjcwLmpwZ1wiKTtcclxuXHR9XHJcblx0NDAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9wb3JzY2hlIC0gQ29weS8xNTUuanBnXCIpO1xyXG5cdH1cclxuICA1MCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL3Byb2Nlc3MvMTEuanBnXCIpO1xyXG5cclxuXHR9XHJcblx0NjAle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9DYXIxIC0gQ29weS8wODkuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwJTtcclxuXHR9XHJcblx0NzAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy85N19jYXJyZXJhLzQ0LmpwZ1wiKTtcclxuICB9XHJcbiAgNzUle1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy85N19jYXJyZXJhLzQ1LmpwZ1wiKTtcclxuICB9XHJcblx0ODAle1xyXG5cdFx0YmFja2dyb3VuZC1pbWFnZTp1cmwoXCIvYXNzZXRzL2ltYWdlcy9NNCAtIENvcHkvMDc5LmpwZ1wiKTtcclxuXHJcblx0fVxyXG5cdDkwJXtcclxuXHRcdGJhY2tncm91bmQtaW1hZ2U6dXJsKFwiL2Fzc2V0cy9pbWFnZXMvTTQgLSBDb3B5LzA4MC5qcGdcIik7XHJcblx0fVxyXG5cdDEwMCV7XHJcblx0XHRiYWNrZ3JvdW5kLWltYWdlOnVybChcIi9hc3NldHMvaW1hZ2VzL000IC0gQ29weS8wODIuanBnXCIpO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG4uYnVtcGVycmVwbGFjZS1sYW5kaW5nLXRleHQge1xyXG4gIHBhZGRpbmctdG9wOiAyMCU7XHJcbn1cclxuXHJcbi5jYXB0aW9uIHtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCksIHJnYmEoMjU2LCAyNTYsIDI1NiwgMC43OCkpLHVybCgvYXNzZXRzL2ltYWdlcy9ob21lL2JhY2tncm91bmQuanBnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uY2F0ZWdvcnlMb2dve1xyXG5cclxuICB3aWR0aDozMjBweDtcclxuICBoZWlnaHQ6ODBweDtcclxuIGRpc3BsYXk6IGJsb2NrO1xyXG4gbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiBwYWRkaW5nOjAlO1xyXG5cclxuXHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXB0aW9uQm90dG9tIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBjb2xvcjogcmdiKDI1NiwgMjU2LCAyNTYpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG59XHJcblxyXG4uY2FwdGlvbkltYWdlcyB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxufVxyXG5cclxuLmNhcHRpb24xe1xyXG4gIGhlaWdodDoxMDBweDtcclxuICBjb2xvcjpyZ2IoMjU2LCAyNTYsIDI1Nik7XHJcbiAgYmFja2dyb3VuZDogI2MzYzNjMTtcclxuICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVnYWN5LWRpcmVjdGlvbih0byByaWdodCksICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgcmlnaHQgdG9wLCBmcm9tKCNmZmZmZmYpLCB0bygjYzNjM2MxKSk7XHJcbiAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZmZmZmIDAlLCAjYzNjM2MxIDEwMCUpO1xyXG4gICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcblxyXG5cclxufVxyXG5cclxuLmJ1bXBlcnJlcGxhY2VtZW50LWxhbmRpbmctdGV4dCB7XHJcbiAgcGFkZGluZy10b3A6IDIwJTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAyLjlyZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjojZmZmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuaDIge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5oNiB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbm1haW4ge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZS1pbjtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gIGJveC1zaGFkb3c6IDMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpLFxyXG4gICAgLTMwcHggMHB4IDQwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4jaGVhZGVyIHtcclxuICBwYWRkaW5nOiAxLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6ICMzMzM7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiNoZWFkZXIgaDIge1xyXG4gIGJvcmRlci1sZWZ0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgYm9yZGVyLXJpZ2h0OiBkb3R0ZWQgMXB4ICNmZmY7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4uYnRuIHtcclxuXHRwYWRkaW5nOiAwLjVyZW0gMnJlbTtcclxuXHRib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRtYXJnaW46IDFyZW0gMCAwO1xyXG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdHRyYW5zaXRpb246IGJhY2tncm91bmQgNTAwbXMgZWFzZTtcclxuXHRib3gtc2hhZG93OiAxMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zNyk7XHJcbiAgfVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y0ZjRmNDtcclxuICBjb2xvcjogI2MwMWEyYiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSkvIDQ0ICogMjcpO1xyXG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XHJcbiAgbWFyZ2luLXRvcDogY2FsYygtMSAqIHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpLyAyKTtcclxuICB6LWluZGV4OiAxMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGNvbG9yOiAjYWUxODI2O1xyXG4gIHRleHQtc2hhZG93OiA4cHggOHB4IDZweCAjMDAwO1xyXG59XHJcblxyXG4uc3dpcGVyLXBhZ2luYXRpb24td2hpdGUge1xyXG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICNhZTE4MjY7XHJcbiAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcblxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpe1xyXG5cclxuICAuY2FwdGlvbkJ1bXBlcnJlcGxhY2VtZW50IHtcclxuICAgIGhlaWdodDogNzAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC10b3A7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY2FyLzE2Ni5qcGcpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogOHB4IDhweCA2cHggIzAwMDtcclxuICAgIGFuaW1hdGlvbjogZmlsbC1pbWFnZXMgMzBzO1xyXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1pbWFnZSAxcyBlYXNlLWluLW91dDtcclxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xyXG4gIH1cclxuICAuY2FwdGlvbiB7XHJcbiAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTYsIDI1NiwgMjU2LCAwLjc4KSwgcmdiYSgyNTYsIDI1NiwgMjU2LCAwLjc4KSksdXJsKC9hc3NldHMvaW1hZ2VzL2hvbWUvYmFja2dyb3VuZC5qcGcpO1xyXG5cclxuICAgfVxyXG5cclxuICAgLm92ZXJsYXl7XHJcbiAgICBoZWlnaHQ6NzAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgfVxyXG5cclxuICAgLmNhcHRpb24xe1xyXG4gICAgIGhlaWdodDo3MHB4O1xyXG4gICAgIGNvbG9yOnJnYigyNTYsIDI1NiwgMjU2KTtcclxuICAgICBiYWNrZ3JvdW5kOiAjYzNjM2MxO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWdhY3ktZGlyZWN0aW9uKHRvIHJpZ2h0KSwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCByaWdodCB0b3AsIGZyb20oI2ZmZmZmZiksIHRvKCNjM2MzYzEpKTtcclxuICAgICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuICAgICAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KGxlZnQsICNmZmZmZmYgMCUsICNjM2MzYzEgMTAwJSk7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiAwJSwgI2MzYzNjMSAxMDAlKTtcclxuXHJcblxyXG4gICB9XHJcblxyXG4gICAub3ZlcmxheS1sYXN0e1xyXG4gICAgaGVpZ2h0OmluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XHJcbiAgfVxyXG5cclxuICAuZmluYWx7XHJcbiAgICBmb250LXNpemU6IDQ3cHg7XHJcbiAgfVxyXG5cclxuICAuZmluYWwtaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuXHJcbiAgIC5jYXB0aW9uSW1hZ2Vze1xyXG4gICAgIGhlaWdodDozNTBweDtcclxuICAgfVxyXG4gICAuY2F0ZWdvcnlMb2dve1xyXG5cclxuICAgIHdpZHRoOjIyNHB4O1xyXG4gICAgaGVpZ2h0OjU2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgcGFkZGluZzowJTtcclxuXHJcblxyXG4gICB9XHJcblxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjMyMXB4KXtcclxuXHJcbiAgLmNhcHRpb25CdW1wZXJyZXBsYWNlbWVudCB7XHJcbiAgICBoZWlnaHQ6IDgwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5e1xyXG4gICAgaGVpZ2h0OjgwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAyODFweCl7XHJcblxyXG4gIC5jYXB0aW9uQnVtcGVycmVwbGFjZW1lbnQge1xyXG4gICAgaGVpZ2h0OjkwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRleHQtdG9wO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2Nhci8xNjYuanBnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1zaGFkb3c6IDhweCA4cHggNnB4ICMwMDA7XHJcbiAgICBhbmltYXRpb246IGZpbGwtaW1hZ2VzIDMwcztcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtaW1hZ2UgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWxhc3R7XHJcbiAgICBoZWlnaHQ6aW5oZXJpdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcclxuICB9XHJcblxyXG5cclxuICAuZmluYWx7XHJcbiAgICBmb250LXNpemU6IDQ3cHg7XHJcbiAgfVxyXG5cclxuICAuZmluYWwtaW1hZ2V7XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH1cclxuXHJcbiAgLm92ZXJsYXl7XHJcbiAgICBoZWlnaHQ6MTEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjQpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19 */"] });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map