!function(){function e(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&t(e,n)}function t(e,n){return(t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,n)}function n(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=i(e);if(t){var c=i(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return r(this,n)}}function r(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"/kFS":function(e,t,n){var r={"./custom/app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component":["xshI",81]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id="/kFS",e.exports=i},"09O+":function(t,r,i){"use strict";i.r(r),i.d(r,"WorkflowItemsEditPageModule",(function(){return M}));var c,u=i("ofXK"),f=i("fXoL"),l=i("PCNd"),s=i("tyNb"),p=i("tPZA"),d=i("84Zn"),m=i("1QIV"),v=i("RMbB"),w=((c=function(){function e(t){o(this,e),this.workflowItemService=t}return a(e,[{key:"resolve",value:function(e,t){return this.workflowItemService.findById(e.params.id,!0,!1,Object(d.a)("item")).pipe(Object(m.g)())}}]),e}()).\u0275fac=function(e){return new(e||c)(f["\u0275\u0275inject"](v.a))},c.\u0275prov=f["\u0275\u0275defineInjectable"]({token:c,factory:c.\u0275fac}),c),b=i("jgSD"),y=i("YoQ9"),k=i("JTKQ");function h(e,t){}var I,j=((I=function(t){e(c,t);var r=n(c);function c(){return o(this,c),r.apply(this,arguments)}return a(c,[{key:"getComponentName",value:function(){return"WorkflowItemDeleteComponent"}},{key:"importThemedComponent",value:function(e){return i("/kFS")("./".concat(e,"/app/workflowitems-edit-page/workflow-item-delete/workflow-item-delete.component"))}},{key:"importUnthemedComponent",value:function(){return Promise.resolve().then(i.bind(null,"Lzy0"))}}]),c}(k.a)).\u0275fac=function(e){return g(e||I)},I.\u0275cmp=f["\u0275\u0275defineComponent"]({type:I,selectors:[["ds-themed-workflow-item-delete"]],features:[f["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(f["\u0275\u0275template"](0,h,0,0,"ng-template",null,0,f["\u0275\u0275templateRefExtractor"]),f["\u0275\u0275text"](2,"\n"))},encapsulation:2}),I),g=f["\u0275\u0275getInheritedFactory"](j);function x(e,t){}var S,O,C,B,E=((S=function(t){e(c,t);var r=n(c);function c(){return o(this,c),r.apply(this,arguments)}return a(c,[{key:"getComponentName",value:function(){return"WorkflowItemSendBackComponent"}},{key:"importThemedComponent",value:function(e){return i("2YUx")("./".concat(e,"/app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component"))}},{key:"importUnthemedComponent",value:function(){return Promise.resolve().then(i.bind(null,"jqBZ"))}}]),c}(k.a)).\u0275fac=function(e){return P(e||S)},S.\u0275cmp=f["\u0275\u0275defineComponent"]({type:S,selectors:[["ds-themed-workflow-item-send-back"]],features:[f["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(e,t){1&e&&(f["\u0275\u0275template"](0,x,0,0,"ng-template",null,0,f["\u0275\u0275templateRefExtractor"]),f["\u0275\u0275text"](2,"\n"))},encapsulation:2}),S),P=f["\u0275\u0275getInheritedFactory"](E),V=i("A0IO"),R=i("eIep"),N=i("l7P3"),D=((O=function(){function e(t,n){o(this,e),this.workflowItemService=t,this.store=n}return a(e,[{key:"resolve",value:function(e,t){return this.workflowItemService.findById(e.params.id,!0,!1,Object(d.a)("item")).pipe(Object(m.g)(),Object(R.a)((function(e){return e.payload.item})),Object(m.g)())}}]),e}()).\u0275fac=function(e){return new(e||O)(f["\u0275\u0275inject"](v.a),f["\u0275\u0275inject"](N.i))},O.\u0275prov=f["\u0275\u0275defineInjectable"]({token:O,factory:O.\u0275fac}),O),T=i("Nh4g"),_=((C=function e(){o(this,e)}).\u0275fac=function(e){return new(e||C)},C.\u0275mod=f["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=f["\u0275\u0275defineInjector"]({providers:[w,D],imports:[[s.l.forChild([{path:":id",resolve:{wfi:w},children:[{canActivate:[p.a],path:b.b,component:y.a,resolve:{breadcrumb:V.a},data:{title:"workflow-item.edit.title",breadcrumbKey:"workflow-item.edit"}},{canActivate:[p.a],path:b.d,component:T.a,resolve:{dso:D,breadcrumb:V.a},data:{title:"workflow-item.view.title",breadcrumbKey:"workflow-item.view"}},{canActivate:[p.a],path:b.a,component:j,resolve:{breadcrumb:V.a},data:{title:"workflow-item.delete.title",breadcrumbKey:"workflow-item.edit"}},{canActivate:[p.a],path:b.c,component:E,resolve:{breadcrumb:V.a},data:{title:"workflow-item.send-back.title",breadcrumbKey:"workflow-item.edit"}}]}])]]}),C),q=i("c3nT"),F=(i("Lzy0"),i("jqBZ"),i("9i+i")),U=i("Bfzi"),M=((B=function e(){o(this,e)}).\u0275fac=function(e){return new(e||B)},B.\u0275mod=f["\u0275\u0275defineNgModule"]({type:B}),B.\u0275inj=f["\u0275\u0275defineInjector"]({imports:[[_,u.c,l.a,q.a,F.a,U.ItemPageModule]]}),B)},"2YUx":function(e,t,n){var r={"./custom/app/workflowitems-edit-page/workflow-item-send-back/workflow-item-send-back.component":["Oc6R",82]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return n.e(t[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id="2YUx",e.exports=i},"5Yl3":function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var r=n("fXoL"),i=n("lJxs"),c=n("eIep"),u=n("IzEk"),f=n("1QIV"),l=n("J3qs"),s=n("tyNb"),p=n("RMbB"),d=n("ppE2"),m=n("lI3o"),v=n("sYmb"),w=function(){var e=function(){function e(t,n,r,i,c,a){o(this,e),this.route=t,this.workflowItemService=n,this.router=r,this.routeService=i,this.notificationsService=c,this.translationService=a}return a(e,[{key:"ngOnInit",value:function(){this.type=this.getType(),this.wfi$=this.route.data.pipe(Object(i.a)((function(e){return e.wfi})),Object(f.o)()),this.item$=this.wfi$.pipe(Object(c.a)((function(e){return e.item.pipe(Object(f.c)(),Object(f.o)())})))}},{key:"performAction",value:function(){var e=this;this.wfi$.pipe(Object(u.a)(1),Object(c.a)((function(t){return e.sendRequest(t.id)}))).subscribe((function(t){if(t){var n=e.translationService.get("workflow-item."+e.type+".notification.success.title"),r=e.translationService.get("workflow-item."+e.type+".notification.success.content");e.notificationsService.success(n,r)}else{var i=e.translationService.get("workflow-item."+e.type+".notification.error.title"),o=e.translationService.get("workflow-item."+e.type+".notification.error.content");e.notificationsService.error(i,o)}e.previousPage()}))}},{key:"previousPage",value:function(){var e=this;this.routeService.getPreviousUrl().pipe(Object(u.a)(1)).subscribe((function(t){Object(l.d)(t)&&(t="/mydspace"),e.router.navigateByUrl(t)}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r["\u0275\u0275directiveInject"](s.a),r["\u0275\u0275directiveInject"](p.a),r["\u0275\u0275directiveInject"](s.h),r["\u0275\u0275directiveInject"](d.a),r["\u0275\u0275directiveInject"](m.a),r["\u0275\u0275directiveInject"](v.e))},e.\u0275cmp=r["\u0275\u0275defineComponent"]({type:e,selectors:[["ds-workflowitem-action-page"]],decls:0,vars:0,template:function(e,t){},encapsulation:2}),e}()},Lzy0:function(t,r,i){"use strict";i.r(r),i.d(r,"WorkflowItemDeleteComponent",(function(){return j}));var c=i("fXoL"),u=i("5Yl3"),f=i("lJxs"),l=i("1QIV"),s=i("tyNb"),p=i("RMbB"),d=i("ppE2"),m=i("lI3o"),v=i("sYmb"),w=i("X/78"),b=i("O/5o"),y=i("ofXK"),k=i("aCx6");function h(e,t){if(1&e&&c["\u0275\u0275element"](0,"ds-modify-item-overview",5),2&e){var n=c["\u0275\u0275nextContext"]().ngVar;c["\u0275\u0275property"]("item",n)}}function I(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",1),c["\u0275\u0275text"](1,"\n    "),c["\u0275\u0275elementStart"](2,"h2"),c["\u0275\u0275text"](3),c["\u0275\u0275pipe"](4,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5,"\n    "),c["\u0275\u0275template"](6,h,1,1,"ds-modify-item-overview",2),c["\u0275\u0275text"](7,"\n    "),c["\u0275\u0275elementStart"](8,"button",3),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().previousPage()})),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](11,"\n    "),c["\u0275\u0275elementStart"](12,"button",4),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().performAction()})),c["\u0275\u0275text"](13),c["\u0275\u0275pipe"](14,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](15,"\n"),c["\u0275\u0275elementEnd"]()}if(2&e){var r=t.ngVar,i=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](4,4,"workflow-item."+i.type+".header")),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",r),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](10,6,"workflow-item."+i.type+".button.cancel")),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](14,8,"workflow-item."+i.type+".button.confirm"))}}var j=function(){var t=function(t){e(i,t);var r=n(i);function i(e,t,n,c,a,u,f){var l;return o(this,i),(l=r.call(this,e,t,n,c,a,u)).route=e,l.workflowItemService=t,l.router=n,l.routeService=c,l.notificationsService=a,l.translationService=u,l.requestService=f,l}return a(i,[{key:"getType",value:function(){return"delete"}},{key:"sendRequest",value:function(e){return this.requestService.removeByHrefSubstring("/discover"),this.workflowItemService.delete(e).pipe(Object(l.g)(),Object(f.a)((function(e){return e.hasSucceeded})))}}]),i}(u.a);return t.\u0275fac=function(e){return new(e||t)(c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](p.a),c["\u0275\u0275directiveInject"](s.h),c["\u0275\u0275directiveInject"](d.a),c["\u0275\u0275directiveInject"](m.a),c["\u0275\u0275directiveInject"](v.e),c["\u0275\u0275directiveInject"](w.a))},t.\u0275cmp=c["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-workflow-item-delete"]],features:[c["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[3,"item",4,"ngIf"],[1,"btn","btn-default",3,"click"],[1,"btn","btn-danger",3,"click"],[3,"item"]],template:function(e,t){1&e&&(c["\u0275\u0275template"](0,I,16,10,"div",0),c["\u0275\u0275pipe"](1,"async"),c["\u0275\u0275text"](2,"\n")),2&e&&c["\u0275\u0275property"]("ngVar",c["\u0275\u0275pipeBind1"](1,1,t.item$))},directives:[b.a,y.p,k.a],pipes:[y.b,v.d],encapsulation:2}),t}()},jqBZ:function(t,r,i){"use strict";i.r(r),i.d(r,"WorkflowItemSendBackComponent",(function(){return h}));var c=i("fXoL"),u=i("5Yl3"),f=i("tyNb"),l=i("RMbB"),s=i("ppE2"),p=i("lI3o"),d=i("sYmb"),m=i("X/78"),v=i("O/5o"),w=i("ofXK"),b=i("aCx6");function y(e,t){if(1&e&&c["\u0275\u0275element"](0,"ds-modify-item-overview",5),2&e){var n=c["\u0275\u0275nextContext"]().ngVar;c["\u0275\u0275property"]("item",n)}}function k(e,t){if(1&e){var n=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"div",1),c["\u0275\u0275text"](1,"\n    "),c["\u0275\u0275elementStart"](2,"h2"),c["\u0275\u0275text"](3),c["\u0275\u0275pipe"](4,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](5,"\n    "),c["\u0275\u0275template"](6,y,1,1,"ds-modify-item-overview",2),c["\u0275\u0275text"](7,"\n    "),c["\u0275\u0275elementStart"](8,"button",3),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().previousPage()})),c["\u0275\u0275text"](9),c["\u0275\u0275pipe"](10,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](11,"\n    "),c["\u0275\u0275elementStart"](12,"button",4),c["\u0275\u0275listener"]("click",(function(){return c["\u0275\u0275restoreView"](n),c["\u0275\u0275nextContext"]().performAction()})),c["\u0275\u0275text"](13),c["\u0275\u0275pipe"](14,"translate"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](15,"\n"),c["\u0275\u0275elementEnd"]()}if(2&e){var r=t.ngVar,i=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](4,4,"workflow-item."+i.type+".header")),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("ngIf",r),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](10,6,"workflow-item."+i.type+".button.cancel")),c["\u0275\u0275advance"](4),c["\u0275\u0275textInterpolate"](c["\u0275\u0275pipeBind1"](14,8,"workflow-item."+i.type+".button.confirm"))}}var h=function(){var t=function(t){e(i,t);var r=n(i);function i(e,t,n,c,a,u,f){var l;return o(this,i),(l=r.call(this,e,t,n,c,a,u)).route=e,l.workflowItemService=t,l.router=n,l.routeService=c,l.notificationsService=a,l.translationService=u,l.requestService=f,l}return a(i,[{key:"getType",value:function(){return"send-back"}},{key:"sendRequest",value:function(e){return this.requestService.removeByHrefSubstring("/discover"),this.workflowItemService.sendBack(e)}}]),i}(u.a);return t.\u0275fac=function(e){return new(e||t)(c["\u0275\u0275directiveInject"](f.a),c["\u0275\u0275directiveInject"](l.a),c["\u0275\u0275directiveInject"](f.h),c["\u0275\u0275directiveInject"](s.a),c["\u0275\u0275directiveInject"](p.a),c["\u0275\u0275directiveInject"](d.e),c["\u0275\u0275directiveInject"](m.a))},t.\u0275cmp=c["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-workflow-item-send-back"]],features:[c["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:3,consts:[["class","container",4,"ngVar"],[1,"container"],[3,"item",4,"ngIf"],[1,"btn","btn-default",3,"click"],[1,"btn","btn-danger",3,"click"],[3,"item"]],template:function(e,t){1&e&&(c["\u0275\u0275template"](0,k,16,10,"div",0),c["\u0275\u0275pipe"](1,"async"),c["\u0275\u0275text"](2,"\n")),2&e&&c["\u0275\u0275property"]("ngVar",c["\u0275\u0275pipeBind1"](1,1,t.item$))},directives:[v.a,w.p,b.a],pipes:[w.b,d.d],encapsulation:2}),t}()}}])}();
//# sourceMappingURL=28-es5.2b1c2912cc1f8c4f93c7.js.map