!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&o(t,e)}function o(t,e){return(o=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=a(t);if(e){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return c(this,n)}}function c(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{f6n5:function(e,o,c){"use strict";c.r(o),c.d(o,"LookupIdModule",(function(){return R}));var a,u,s=c("fXoL"),f=c("ofXK"),p=c("PCNd"),d=c("B/au"),l=c("lJxs"),h=c("vkgz"),m=c("J3qs"),y=c("h5qW"),v=c("1QIV"),b=c("Xioo"),j=c("X/78"),k=c("7vy/"),O=c("l7P3"),w=c("mycY"),E=c("uLZQ"),I=c("lI3o"),g=c("tk/3"),x=c("42gE"),P=c("tyNb"),T=((u=function(e){r(c,e);var o=i(c);function c(e,n,r,i,a,u,s,f,p){var d;return t(this,c),(d=o.call(this)).requestService=e,d.rdbService=n,d.store=r,d.objectCache=i,d.halService=a,d.notificationsService=u,d.http=s,d.comparator=f,d.router=p,d.linkPath="pid",d.uuidEndpoint="dso",d}return n(c,[{key:"setLinkPath",value:function(t){t===d.h.UUID&&(this.linkPath=this.uuidEndpoint)}},{key:"getIDHref",value:function(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];return this.buildHrefFromFindOptions.apply(this,[t.replace(/\{\?id\}/,"?id=".concat(e)).replace(/\{\?uuid\}/,"?uuid=".concat(e)),{},[]].concat(r))}},{key:"findByIdAndIDType",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d.h.UUID;return this.setLinkPath(n),this.findById(t).pipe(Object(v.g)(),Object(h.a)((function(t){if(t.hasSucceeded){var n=t.payload,r=n.uuid;if(Object(m.b)(r)){var o=e.getEndpointFromDSOType(t.payload.type);n.type.startsWith("item")?o=Object(b.h)(n):Object(m.b)(o)&&(o+="/"+r),Object(m.b)(o)&&e.router.navigate([o])}}})))}},{key:"getEndpointFromDSOType",value:function(t){return t.startsWith("item")?"items":t.startsWith("community")?"communities":t.startsWith("collection")?"collections":""}}]),c}(y.a)).\u0275fac=function(t){return new(t||u)(s["\u0275\u0275inject"](j.a),s["\u0275\u0275inject"](k.a),s["\u0275\u0275inject"](O.i),s["\u0275\u0275inject"](w.a),s["\u0275\u0275inject"](E.a),s["\u0275\u0275inject"](I.a),s["\u0275\u0275inject"](g.b),s["\u0275\u0275inject"](x.a),s["\u0275\u0275inject"](P.h))},u.\u0275prov=s["\u0275\u0275defineInjectable"]({token:u,factory:u.\u0275fac}),u),D=((a=function(){function e(n){t(this,e),this.dsoService=n}return n(e,[{key:"canActivate",value:function(t,e){var n=this.getLookupParams(t);return this.dsoService.findByIdAndIDType(n.id,n.type).pipe(Object(l.a)((function(t){return t.hasFailed})))}},{key:"getLookupParams",value:function(t){var e,n,r=t.params.idType;return r!==d.h.HANDLE&&r!==d.h.UUID?(e=d.h.HANDLE,n="hdl:".concat(t.params.idType,"/").concat(t.params.id)):t.params.idType===d.h.HANDLE?(e=d.h.HANDLE,n="hdl:"+t.params.id):(e=d.h.UUID,n=t.params.id),{type:e,id:n}}}]),e}()).\u0275fac=function(t){return new(t||a)(s["\u0275\u0275inject"](T))},a.\u0275prov=s["\u0275\u0275defineInjectable"]({token:a,factory:a.\u0275fac}),a),S=c("JTKQ");function N(t,e){}var L,C,B=((L=function(e){r(a,e);var o=i(a);function a(){return t(this,a),o.apply(this,arguments)}return n(a,[{key:"getComponentName",value:function(){return"ObjectNotFoundComponent"}},{key:"importThemedComponent",value:function(t){return c("rPnB")("./".concat(t,"/app/lookup-by-id/objectnotfound/objectnotfound.component"))}},{key:"importUnthemedComponent",value:function(){return Promise.resolve().then(c.bind(null,"lME7"))}}]),a}(S.a)).\u0275fac=function(t){return U(t||L)},L.\u0275cmp=s["\u0275\u0275defineComponent"]({type:L,selectors:[["ds-themed-objnotfound"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(t,e){1&t&&(s["\u0275\u0275template"](0,N,0,0,"ng-template",null,0,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275text"](2,"\n"))},encapsulation:2}),L),U=s["\u0275\u0275getInheritedFactory"](B),F=((C=function e(){t(this,e)}).\u0275fac=function(t){return new(t||C)},C.\u0275mod=s["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[D],imports:[[P.l.forChild([{matcher:_,canActivate:[D],component:B}])]]}),C);function _(t){var e=t[0].path,n=t.slice(1).map((function(t){return t.path})).join("/");return Object(m.e)(e)&&Object(m.e)(n)?{consumed:t,posParams:{idType:new P.o(e,{}),id:new P.o(n,{})}}:null}c("lME7");var A,R=((A=function e(){t(this,e)}).\u0275fac=function(t){return new(t||A)},A.\u0275mod=s["\u0275\u0275defineNgModule"]({type:A}),A.\u0275inj=s["\u0275\u0275defineInjector"]({providers:[T],imports:[[F,f.c,p.a]]}),A)},lME7:function(e,r,o){"use strict";o.r(r),o.d(r,"ObjectNotFoundComponent",(function(){return u}));var i=o("fXoL"),c=o("tyNb"),a=o("sYmb"),u=function(){var e=function(){function e(n){var r=this;t(this,e),this.route=n,n.params.subscribe((function(t){r.idType=t.idType,r.id=t.id}))}return n(e,[{key:"ngOnInit",value:function(){this.missingItem=this.idType.startsWith("handle")||this.idType.startsWith("uuid")?this.idType+": "+this.id:"handle: "+this.idType+"/"+this.id}}]),e}();return e.\u0275fac=function(t){return new(t||e)(i["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=i["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-objnotfound"]],decls:21,vars:7,consts:[[1,"object-not-found","container"],[1,"text-center"],["routerLink","/home",1,"btn","btn-primary"]],template:function(t,e){1&t&&(i["\u0275\u0275elementStart"](0,"div",0),i["\u0275\u0275text"](1,"\n  "),i["\u0275\u0275elementStart"](2,"h1"),i["\u0275\u0275text"](3),i["\u0275\u0275pipe"](4,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](5,"\n  "),i["\u0275\u0275elementStart"](6,"h2"),i["\u0275\u0275elementStart"](7,"small"),i["\u0275\u0275elementStart"](8,"em"),i["\u0275\u0275text"](9),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](10,"\n  "),i["\u0275\u0275element"](11,"br"),i["\u0275\u0275text"](12,"\n  "),i["\u0275\u0275elementStart"](13,"p",1),i["\u0275\u0275text"](14,"\n    "),i["\u0275\u0275elementStart"](15,"a",2),i["\u0275\u0275text"](16),i["\u0275\u0275pipe"](17,"translate"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](18,"\n  "),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](19,"\n"),i["\u0275\u0275elementEnd"](),i["\u0275\u0275text"](20,"\n")),2&t&&(i["\u0275\u0275advance"](3),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](4,3,"error.identifier")),i["\u0275\u0275advance"](6),i["\u0275\u0275textInterpolate"](e.missingItem),i["\u0275\u0275advance"](7),i["\u0275\u0275textInterpolate"](i["\u0275\u0275pipeBind1"](17,5,"404.link.home-page")))},directives:[c.k],pipes:[a.d],styles:[""]}),e}()},rPnB:function(t,e,n){var r={"./custom/app/lookup-by-id/objectnotfound/objectnotfound.component":["RrNC",65]};function o(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],o=e[0];return n.e(e[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="rPnB",t.exports=o}}])}();
//# sourceMappingURL=13-es5.60e38f55fcd571a1c5ce.js.map