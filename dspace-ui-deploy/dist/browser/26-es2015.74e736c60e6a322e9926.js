(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{A0IO:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("fXoL"),o=n("J3qs"),i=n("q5u1"),a=n("tv3Y");let s=(()=>{class e{constructor(e){this.breadcrumbService=e}resolve(e,t){const n=e.data.breadcrumbKey;if(Object(o.a)(n))throw new Error('You provided an i18nBreadcrumbResolver for url "'+e.url+"\" but no breadcrumbKey in the route's data");const r=Object(i.b)(e);return{provider:this.breadcrumbService,key:n,url:r}}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](a.a))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},or6x:function(e,t,n){var r={"./custom/app/login-page/login-page.component":["ammI",63]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="or6x",e.exports=o},"pT+O":function(e,t,n){"use strict";n.r(t),n.d(t,"LoginPageComponent",(function(){return g}));var r=n("fXoL"),o=n("itXk"),i=n("pLZG"),a=n("IzEk"),s=n("sIb/"),c=n("J3qs"),u=n("ZJ7A"),d=n("2NI3"),l=n("tyNb"),p=n("l7P3"),m=n("ttM+"),f=n("sYmb");let g=(()=>{class e{constructor(e,t){this.route=e,this.store=t}ngOnInit(){const e=this.route.queryParams,t=this.store.select(d.h);this.sub=Object(o.a)(e,t).pipe(Object(i.a)(([e,t])=>Object(c.e)(e.token)||Object(c.e)(e.expired)),Object(a.a)(1)).subscribe(([e,t])=>{const n=e.token;let r;t?Object(c.e)(n)&&(r=new u.a(n),this.store.dispatch(new s.h(r))):Object(c.e)(n)?(r=new u.a(n),this.store.dispatch(new s.d(r))):Object(c.e)(e.expired)&&this.store.dispatch(new s.a("auth.messages.expired"))})}ngOnDestroy(){Object(c.b)(this.sub)&&this.sub.unsubscribe(),this.store.dispatch(new s.s)}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](p.i))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-login-page"]],decls:18,vars:7,consts:[[1,"container","w-100","h-100"],[1,"text-center","mt-5","row","justify-content-center"],["src","assets/images/dspace-logo.png",1,"mb-4","login-logo",3,"alt"],[1,"h3","mb-0","font-weight-normal"],[3,"isStandalonePage"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275text"](1,"\n  "),r["\u0275\u0275elementStart"](2,"div",1),r["\u0275\u0275text"](3,"\n    "),r["\u0275\u0275elementStart"](4,"div"),r["\u0275\u0275text"](5,"\n      "),r["\u0275\u0275element"](6,"img",2),r["\u0275\u0275pipe"](7,"translate"),r["\u0275\u0275text"](8,"\n      "),r["\u0275\u0275elementStart"](9,"h1",3),r["\u0275\u0275text"](10),r["\u0275\u0275pipe"](11,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](12,"\n      "),r["\u0275\u0275element"](13,"ds-log-in",4),r["\u0275\u0275text"](14,"\n    "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](15,"\n  "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](16,"\n"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](17,"\n")),2&e&&(r["\u0275\u0275advance"](6),r["\u0275\u0275propertyInterpolate"]("alt",r["\u0275\u0275pipeBind1"](7,3,"repository.image.logo")),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](11,5,"login.form.header")),r["\u0275\u0275advance"](3),r["\u0275\u0275property"]("isStandalonePage",!0))},directives:[m.a],pipes:[f.d],styles:[".login-logo[_ngcontent-%COMP%]{height:var(--ds-login-logo-height);width:var(--ds-login-logo-width)}"]}),e})()},tv3Y:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("zr/d"),o=n("LRne"),i=n("fXoL");let a=(()=>{class e{getBreadcrumbs(e,t){return Object(o.a)([new r.a(e+".breadcrumbs",t)])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=i["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},x2uj:function(e,t,n){"use strict";n.r(t),n.d(t,"LoginPageModule",(function(){return f}));var r=n("ofXK"),o=n("fXoL"),i=n("PCNd"),a=(n("pT+O"),n("tyNb")),s=n("A0IO"),c=n("tv3Y"),u=n("JTKQ");function d(e,t){}let l=(()=>{class e extends u.a{getComponentName(){return"LoginPageComponent"}importThemedComponent(e){return n("or6x")(`./${e}/app/login-page/login-page.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(null,"pT+O"))}}return e.\u0275fac=function(t){return p(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-themed-login-page"]],features:[o["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(o["\u0275\u0275template"](0,d,0,0,"ng-template",null,0,o["\u0275\u0275templateRefExtractor"]),o["\u0275\u0275text"](2,"\n"))},encapsulation:2}),e})();const p=o["\u0275\u0275getInheritedFactory"](l);let m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({providers:[s.a,c.a],imports:[[a.l.forChild([{path:"",pathMatch:"full",component:l,resolve:{breadcrumb:s.a},data:{breadcrumbKey:"login",title:"login.title"}}])]]}),e})(),f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({imports:[[m,r.c,i.a]]}),e})()},"zr/d":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));class r{constructor(e,t){this.text=e,this.url=t}}}}]);
//# sourceMappingURL=26-es2015.74e736c60e6a322e9926.js.map