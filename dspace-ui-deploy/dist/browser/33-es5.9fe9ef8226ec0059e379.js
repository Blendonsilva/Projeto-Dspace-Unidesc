!function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,i=r(t);if(e){var u=r(this).constructor;n=Reflect.construct(i,arguments,u)}else n=i.apply(this,arguments);return o(this,n)}}function o(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{T7dB:function(t,e,n){"use strict";n.r(e),n.d(e,"LogoutPageComponent",(function(){return c}));var o=n("fXoL"),r=n("845l"),u=n("sYmb"),c=function(){var t=function t(){i(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-logout-page"]],decls:17,vars:3,consts:[[1,"container","w-100","h-100"],[1,"text-center","mt-5","row","justify-content-md-center"],[1,"mx-auto"],["src","assets/images/dspace-logo.png",1,"mb-4","login-logo"],[1,"h3","mb-0","font-weight-normal"]],template:function(t,e){1&t&&(o["\u0275\u0275elementStart"](0,"div",0),o["\u0275\u0275text"](1,"\n  "),o["\u0275\u0275elementStart"](2,"div",1),o["\u0275\u0275text"](3,"\n    "),o["\u0275\u0275elementStart"](4,"div",2),o["\u0275\u0275text"](5,"\n      "),o["\u0275\u0275element"](6,"img",3),o["\u0275\u0275text"](7,"\n      "),o["\u0275\u0275elementStart"](8,"h1",4),o["\u0275\u0275text"](9),o["\u0275\u0275pipe"](10,"translate"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](11,"\n      "),o["\u0275\u0275element"](12,"ds-log-out"),o["\u0275\u0275text"](13,"\n    "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](14,"\n  "),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](15,"\n"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](16,"\n")),2&t&&(o["\u0275\u0275advance"](9),o["\u0275\u0275textInterpolate"](o["\u0275\u0275pipeBind1"](10,1,"logout.form.header")))},directives:[r.a],pipes:[u.d],styles:[".login-logo[_ngcontent-%COMP%]{height:var(--ds-login-logo-height);width:var(--ds-login-logo-width)}"]}),t}()},VLQg:function(t,e,n){var o={"./custom/app/logout-page/logout-page.component":["iLco",64]};function r(t){if(!n.o(o,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=o[t],r=e[0];return n.e(e[1]).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id="VLQg",t.exports=r},vCQO:function(o,r,u){"use strict";u.r(r),u.d(r,"LogoutPageModule",(function(){return b}));var c=u("ofXK"),a=u("fXoL"),f=u("PCNd"),l=(u("T7dB"),u("tyNb")),p=u("tPZA"),s=u("JTKQ");function d(t,e){}var m,g,h,y=((m=function(o){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}(l,o);var r,c,a,f=n(l);function l(){return i(this,l),f.apply(this,arguments)}return r=l,(c=[{key:"getComponentName",value:function(){return"LogoutPageComponent"}},{key:"importThemedComponent",value:function(t){return u("VLQg")("./".concat(t,"/app/logout-page/logout-page.component"))}},{key:"importUnthemedComponent",value:function(){return Promise.resolve().then(u.bind(null,"T7dB"))}}])&&t(r.prototype,c),a&&t(r,a),l}(s.a)).\u0275fac=function(t){return v(t||m)},m.\u0275cmp=a["\u0275\u0275defineComponent"]({type:m,selectors:[["ds-themed-logout-page"]],features:[a["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(t,e){1&t&&(a["\u0275\u0275template"](0,d,0,0,"ng-template",null,0,a["\u0275\u0275templateRefExtractor"]),a["\u0275\u0275text"](2,"\n"))},encapsulation:2}),m),v=a["\u0275\u0275getInheritedFactory"](y),w=((h=function t(){i(this,t)}).\u0275fac=function(t){return new(t||h)},h.\u0275mod=a["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[l.l.forChild([{canActivate:[p.a],path:"",component:y,data:{title:"logout.title"}}])]]}),h),b=((g=function t(){i(this,t)}).\u0275fac=function(t){return new(t||g)},g.\u0275mod=a["\u0275\u0275defineNgModule"]({type:g}),g.\u0275inj=a["\u0275\u0275defineInjector"]({imports:[[w,c.c,f.a]]}),g)}}])}();
//# sourceMappingURL=33-es5.9fe9ef8226ec0059e379.js.map