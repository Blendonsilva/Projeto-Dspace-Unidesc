!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=o(e);if(t){var a=o(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{LihY:function(r,o,i){"use strict";i.r(o),i.d(o,"RootComponent",(function(){return S}));var a=i("fXoL"),c=i("+RhQ"),s=i("GYVE"),u=i("ofXK"),d=i("1o08"),p=i("6/HU"),l=i("r5L5"),f=i("St2Y"),m=i("tyNb"),h=i("mk/+"),y=i("Frqi");function v(e,t){1&e&&(a["\u0275\u0275elementStart"](0,"div",7),a["\u0275\u0275text"](1,"\n        "),a["\u0275\u0275element"](2,"ds-loading",8),a["\u0275\u0275text"](3,"\n      "),a["\u0275\u0275elementEnd"]()),2&e&&(a["\u0275\u0275advance"](2),a["\u0275\u0275property"]("showMessage",!1))}var x=function(e,t){return{collapsedSidebarWidth:e,totalSidebarWidth:t}},b=function(e,t){return{value:e,params:t}};function w(e,t){if(1&e&&(a["\u0275\u0275elementStart"](0,"div",2),a["\u0275\u0275text"](1,"\n  "),a["\u0275\u0275element"](2,"ds-admin-sidebar"),a["\u0275\u0275text"](3,"\n  "),a["\u0275\u0275elementStart"](4,"div",3),a["\u0275\u0275pipe"](5,"async"),a["\u0275\u0275pipe"](6,"async"),a["\u0275\u0275pipe"](7,"async"),a["\u0275\u0275pipe"](8,"async"),a["\u0275\u0275text"](9,"\n    "),a["\u0275\u0275element"](10,"ds-themed-header-navbar-wrapper"),a["\u0275\u0275text"](11,"\n\n    "),a["\u0275\u0275elementStart"](12,"ds-notifications-board",4),a["\u0275\u0275text"](13,"\n    "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](14,"\n    "),a["\u0275\u0275elementStart"](15,"main",5),a["\u0275\u0275text"](16,"\n      "),a["\u0275\u0275element"](17,"ds-themed-breadcrumbs"),a["\u0275\u0275text"](18,"\n\n      "),a["\u0275\u0275template"](19,v,4,1,"div",6),a["\u0275\u0275text"](20,"\n      "),a["\u0275\u0275elementStart"](21,"div"),a["\u0275\u0275text"](22,"\n        "),a["\u0275\u0275element"](23,"router-outlet"),a["\u0275\u0275text"](24,"\n      "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](25,"\n    "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](26,"\n\n    "),a["\u0275\u0275element"](27,"ds-themed-footer"),a["\u0275\u0275text"](28,"\n  "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](29,"\n"),a["\u0275\u0275elementEnd"]()),2&e){var n=a["\u0275\u0275nextContext"]();a["\u0275\u0275advance"](4),a["\u0275\u0275property"]("@slideSidebarPadding",a["\u0275\u0275pureFunction2"](16,b,a["\u0275\u0275pipeBind1"](5,5,n.sidebarVisible)?a["\u0275\u0275pipeBind1"](6,7,n.slideSidebarOver)?"shown":"expanded":"hidden",a["\u0275\u0275pureFunction2"](13,x,a["\u0275\u0275pipeBind1"](7,9,n.collapsedSidebarWidth),a["\u0275\u0275pipeBind1"](8,11,n.totalSidebarWidth)))),a["\u0275\u0275advance"](8),a["\u0275\u0275property"]("options",n.notificationOptions),a["\u0275\u0275advance"](7),a["\u0275\u0275property"]("ngIf",n.shouldShowRouteLoader),a["\u0275\u0275advance"](2),a["\u0275\u0275classProp"]("d-none",n.shouldShowRouteLoader)}}function g(e,t){1&e&&(a["\u0275\u0275text"](0,"\n  "),a["\u0275\u0275elementStart"](1,"div",9),a["\u0275\u0275text"](2,"\n    "),a["\u0275\u0275element"](3,"ds-loading",8),a["\u0275\u0275text"](4,"\n  "),a["\u0275\u0275elementEnd"](),a["\u0275\u0275text"](5,"\n")),2&e&&(a["\u0275\u0275advance"](3),a["\u0275\u0275property"]("showMessage",!1))}var S=function(){var r=function(r){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}(i,r);var o=n(i);function i(){return e(this,i),o.apply(this,arguments)}return i}(s.RootComponent);return r.\u0275fac=function(e){return E(e||r)},r.\u0275cmp=a["\u0275\u0275defineComponent"]({type:r,selectors:[["ds-root"]],features:[a["\u0275\u0275InheritDefinitionFeature"]],decls:5,vars:2,consts:[["class","outer-wrapper",4,"ngIf","ngIfElse"],["fullScreenLoader",""],[1,"outer-wrapper"],[1,"inner-wrapper"],[3,"options"],[1,"main-content"],["class","container d-flex justify-content-center align-items-center h-100",4,"ngIf"],[1,"container","d-flex","justify-content-center","align-items-center","h-100"],[3,"showMessage"],[1,"ds-full-screen-loader"]],template:function(e,t){if(1&e&&(a["\u0275\u0275template"](0,w,30,19,"div",0),a["\u0275\u0275text"](1,"\n"),a["\u0275\u0275template"](2,g,6,1,"ng-template",null,1,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275text"](4,"\n")),2&e){var n=a["\u0275\u0275reference"](3);a["\u0275\u0275property"]("ngIf",!t.shouldShowFullscreenLoader)("ngIfElse",n)}},directives:[u.p,d.a,p.a,l.a,f.a,m.m,h.a,y.a],pipes:[u.b],styles:[""],data:{animation:[c.f]}}),r}(),E=a["\u0275\u0275getInheritedFactory"](S)}}])}();
//# sourceMappingURL=71-es5.53d79cd7623d48968ed3.js.map