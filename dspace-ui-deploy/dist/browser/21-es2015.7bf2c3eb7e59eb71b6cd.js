(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"/RQ2":function(e,t,n){var r={"./custom/app/forgot-password/forgot-password-email/forgot-email.component":["6KPR",51]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="/RQ2",e.exports=o},"8jtY":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("WL0R");const o={RESOLVED:Object(r.a)("dspace/resolver/RESOLVED")};class i{constructor(e,t){this.type=o.RESOLVED,this.payload={url:e,dso:t}}}},JgOp:function(e,t,n){"use strict";n.r(t),n.d(t,"ForgotPasswordModule",(function(){return w}));var r=n("fXoL"),o=n("ofXK"),i=n("PCNd"),s=(n("bg75"),n("tyNb")),a=n("z3/6"),c=n("pY/b"),d=n("JTKQ");function l(e,t){}let p=(()=>{class e extends d.a{getComponentName(){return"ForgotPasswordFormComponent"}importThemedComponent(e){return n("Jjgi")(`./${e}/app/forgot-password/forgot-password-form/forgot-password-form.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(null,"uqR5"))}}return e.\u0275fac=function(t){return u(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-themed-forgot-password-form"]],features:[r["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,l,0,0,"ng-template",null,0,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275text"](2,"\n"))},encapsulation:2}),e})();const u=r["\u0275\u0275getInheritedFactory"](p);function m(e,t){}let f=(()=>{class e extends d.a{getComponentName(){return"ForgotEmailComponent"}importThemedComponent(e){return n("/RQ2")(`./${e}/app/forgot-password/forgot-password-email/forgot-email.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(null,"bg75"))}}return e.\u0275fac=function(t){return h(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-themed-forgot-email"]],features:[r["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(r["\u0275\u0275template"](0,m,0,0,"ng-template",null,0,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275text"](2,"\n"))},encapsulation:2}),e})();const h=r["\u0275\u0275getInheritedFactory"](f);let v=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[c.a,a.a],imports:[[s.l.forChild([{path:"",component:f,data:{title:"forgot-password.title"}},{path:":token",component:p,resolve:{registration:c.a}}])]]}),e})();var b=n("a7RS"),g=(n("uqR5"),n("GVwY"));let w=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=r["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[],imports:[[o.c,i.a,v,b.a,g.ProfilePageModule]]}),e})()},Jjgi:function(e,t,n){var r={"./custom/app/forgot-password/forgot-password-form/forgot-password-form.component":["k2Tu",52]};function o(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return n.e(t[1]).then((function(){return n(o)}))}o.keys=function(){return Object.keys(r)},o.id="Jjgi",e.exports=o},Ssd4:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n("fXoL"),o=n("B/au"),i=n("pLZG"),s=n("lJxs"),a=n("cBqT"),c=n("32Ea"),d=n("J3qs"),l=n("zBnI"),p=n("1QIV"),u=n("Kvit");let m=(()=>{class e{parse(e,t){const n=t.payload,r=Object.assign(new l.a,n);return new u.c(t.statusCode,void 0,r)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var f=n("X/78"),h=n("7vy/"),v=n("uLZQ");let b=(()=>{class e{constructor(e,t,n){this.requestService=e,this.rdbService=t,this.halService=n,this.linkPath="registrations",this.searchByTokenPath="/search/findByToken?token="}getRegistrationEndpoint(){return this.halService.getEndpoint(this.linkPath)}getTokenSearchEndpoint(e){return this.halService.getEndpoint(this.linkPath).pipe(Object(i.a)(e=>Object(d.e)(e)),Object(s.a)(t=>`${t}${this.searchByTokenPath}${e}`))}registerEmail(e){const t=new l.a;t.email=e;const n=this.requestService.generateRequestId();return this.getRegistrationEndpoint().pipe(Object(a.a)(e=>Object(d.b)(e)),Object(s.a)(e=>{const r=new o.l(n,e,t);this.requestService.send(r)})).subscribe(),this.rdbService.buildFromRequestUUID(n).pipe(Object(p.g)())}searchByToken(e){const t=this.requestService.generateRequestId(),n=this.getTokenSearchEndpoint(e).pipe(Object(a.a)(e=>Object(d.b)(e)));return n.subscribe(e=>{const n=new o.g(t,e);Object.assign(n,{getResponseParser:()=>m}),this.requestService.send(n,!0)}),this.rdbService.buildSingle(n).pipe(Object(c.a)(e=>e.isStale),Object(p.i)(),Object(s.a)(t=>Object.assign(new l.a,{email:t.payload.email,token:e,user:t.payload.user})))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](f.a),r["\u0275\u0275inject"](h.a),r["\u0275\u0275inject"](v.a))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},bg75:function(e,t,n){"use strict";n.r(t),n.d(t,"ForgotEmailComponent",(function(){return i}));var r=n("fXoL"),o=n("g1Lb");let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-forgot-email"]],decls:2,vars:1,consts:[[3,"MESSAGE_PREFIX"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"ds-register-email-form",0),r["\u0275\u0275text"](1,"\n"),r["\u0275\u0275elementEnd"]()),2&e&&r["\u0275\u0275property"]("MESSAGE_PREFIX","forgot-email.form")},directives:[o.a],styles:[""]}),e})()},kGaT:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var r=n("fXoL"),o=n("84Zn"),i=n("1QIV"),s=n("8jtY"),a=n("iqTE"),c=n("l7P3"),d=n("tyNb");const l=[Object(o.a)("owningCollection",{},Object(o.a)("parentCommunity",{},Object(o.a)("parentCommunity"))),Object(o.a)("relationships"),Object(o.a)("version",{},Object(o.a)("versionhistory")),Object(o.a)("thumbnail")];let p=(()=>{class e{constructor(e,t,n){this.itemService=e,this.store=t,this.router=n}resolve(e,t){const n=this.itemService.findById(e.params.id,!0,!1,...l).pipe(Object(i.g)());return n.subscribe(e=>{this.store.dispatch(new s.a(t.url,e.payload))}),n}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](a.a),r["\u0275\u0275inject"](c.i),r["\u0275\u0275inject"](d.h))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()},uqR5:function(e,t,n){"use strict";n.r(t),n.d(t,"ForgotPasswordFormComponent",(function(){return f}));var r=n("fXoL"),o=n("lJxs"),i=n("sIb/"),s=n("1QIV"),a=n("wLgS"),c=n("sYmb"),d=n("lI3o"),l=n("l7P3"),p=n("tyNb"),u=n("JKx6"),m=n("ofXK");let f=(()=>{class e{constructor(e,t,n,r,o,i){this.ePersonDataService=e,this.translateService=t,this.notificationsService=n,this.store=r,this.router=o,this.route=i,this.isInValid=!0,this.NOTIFICATIONS_PREFIX="forgot-password.form.notification"}ngOnInit(){this.registration$=this.route.data.pipe(Object(o.a)(e=>e.registration)),this.registration$.subscribe(e=>{this.email=e.email,this.token=e.token,this.user=e.user})}setInValid(e){this.isInValid=e}setPasswordValue(e){this.password=e}submit(){this.isInValid||this.ePersonDataService.patchPasswordWithToken(this.user,this.token,this.password).pipe(Object(s.g)()).subscribe(e=>{e.hasSucceeded?(this.notificationsService.success(this.translateService.instant(this.NOTIFICATIONS_PREFIX+".success.title"),this.translateService.instant(this.NOTIFICATIONS_PREFIX+".success.content")),this.store.dispatch(new i.c(this.email,this.password)),this.router.navigate(["/home"])):this.notificationsService.error(this.translateService.instant(this.NOTIFICATIONS_PREFIX+".error.title"),e.errorMessage)})}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](a.a),r["\u0275\u0275directiveInject"](c.e),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](l.i),r["\u0275\u0275directiveInject"](p.h),r["\u0275\u0275directiveInject"](p.a))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-forgot-password-form"]],decls:51,vars:21,consts:[[1,"container"],[1,"mb-4"],[1,"card","mb-4"],[1,"card-header"],[1,"card-body"],[1,"row"],[1,"col-12"],["for","email",1,"font-weight-bold"],["id","email"],[3,"passwordCanBeEmpty","FORM_PREFIX","isInvalid","passwordValue"],[1,"btn","btn-default","btn-primary",3,"disabled","click"]],template:function(e,t){1&e&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275elementStart"](2,"h3",1),r["\u0275\u0275text"](3),r["\u0275\u0275pipe"](4,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](5,"\n    "),r["\u0275\u0275elementStart"](6,"div",2),r["\u0275\u0275text"](7,"\n        "),r["\u0275\u0275elementStart"](8,"div",3),r["\u0275\u0275text"](9),r["\u0275\u0275pipe"](10,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](11,"\n        "),r["\u0275\u0275elementStart"](12,"div",4),r["\u0275\u0275text"](13,"\n            "),r["\u0275\u0275elementStart"](14,"div",5),r["\u0275\u0275text"](15,"\n                "),r["\u0275\u0275elementStart"](16,"div",6),r["\u0275\u0275text"](17,"\n                    "),r["\u0275\u0275elementStart"](18,"label",7),r["\u0275\u0275text"](19),r["\u0275\u0275pipe"](20,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](21,"\n                    "),r["\u0275\u0275elementStart"](22,"span",8),r["\u0275\u0275text"](23),r["\u0275\u0275pipe"](24,"async"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](25,"\n            "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](26,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](27,"\n    "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](28,"\n\n    "),r["\u0275\u0275elementStart"](29,"div",2),r["\u0275\u0275text"](30,"\n        "),r["\u0275\u0275elementStart"](31,"div",3),r["\u0275\u0275text"](32),r["\u0275\u0275pipe"](33,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](34,"\n        "),r["\u0275\u0275elementStart"](35,"div",4),r["\u0275\u0275text"](36,"\n\n            "),r["\u0275\u0275elementStart"](37,"ds-profile-page-security-form",9),r["\u0275\u0275listener"]("isInvalid",(function(e){return t.setInValid(e)}))("passwordValue",(function(e){return t.setPasswordValue(e)})),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](38,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](39,"\n    "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](40,"\n\n    "),r["\u0275\u0275elementStart"](41,"div",5),r["\u0275\u0275text"](42,"\n        "),r["\u0275\u0275elementStart"](43,"div",6),r["\u0275\u0275text"](44,"\n            "),r["\u0275\u0275elementStart"](45,"button",10),r["\u0275\u0275listener"]("click",(function(){return t.submit()})),r["\u0275\u0275text"](46),r["\u0275\u0275pipe"](47,"translate"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](48,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](49,"\n    "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](50,"\n"),r["\u0275\u0275elementEnd"]()),2&e&&(r["\u0275\u0275advance"](3),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](4,9,"forgot-password.form.head")),r["\u0275\u0275advance"](6),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](10,11,"forgot-password.form.identification.header")),r["\u0275\u0275advance"](10),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](20,13,"forgot-password.form.identification.email")),r["\u0275\u0275advance"](4),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](24,15,t.registration$).email),r["\u0275\u0275advance"](9),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](33,17,"forgot-password.form.card.security")),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("passwordCanBeEmpty",!1)("FORM_PREFIX","forgot-password.form."),r["\u0275\u0275advance"](8),r["\u0275\u0275property"]("disabled",t.isInValid),r["\u0275\u0275advance"](1),r["\u0275\u0275textInterpolate"](r["\u0275\u0275pipeBind1"](47,19,"forgot-password.form.submit")))},directives:[u.a],pipes:[c.d,m.b],styles:[""]}),e})()},"z3/6":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("fXoL"),o=n("lJxs"),i=n("J3qs"),s=n("Xioo"),a=n("kGaT"),c=n("iqTE"),d=n("l7P3"),l=n("tyNb");let p=(()=>{class e extends a.b{constructor(e,t,n){super(e,t,n),this.itemService=e,this.store=t,this.router=n}resolve(e,t){return super.resolve(e,t).pipe(Object(o.a)(e=>{if(e.hasSucceeded&&Object(i.b)(e.payload)){const n=Object(s.h)(e.payload),r=t.url;if(!r.startsWith(n)){const t=e.payload.uuid,o=r.substring(r.indexOf(t)+t.length,r.length);this.router.navigateByUrl(n+o)}}return e}))}}return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275inject"](c.a),r["\u0275\u0275inject"](d.i),r["\u0275\u0275inject"](l.h))},e.\u0275prov=r["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()}}]);
//# sourceMappingURL=21-es2015.7bf2c3eb7e59eb71b6cd.js.map