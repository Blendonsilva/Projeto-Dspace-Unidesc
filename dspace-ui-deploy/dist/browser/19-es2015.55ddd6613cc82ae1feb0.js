(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{A0IO:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("fXoL"),i=n("J3qs"),a=n("q5u1"),o=n("tv3Y");let s=(()=>{class t{constructor(t){this.breadcrumbService=t}resolve(t,e){const n=t.data.breadcrumbKey;if(Object(i.a)(n))throw new Error('You provided an i18nBreadcrumbResolver for url "'+t.url+"\" but no breadcrumbKey in the route's data");const r=Object(a.b)(t);return{provider:this.breadcrumbService,key:n,url:r}}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](o.a))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},Ab81:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return s})),n.d(e,"c",(function(){return p}));var r=n("J3qs"),i=n("fXoL"),a=function(t){return t.Title="title",t.Metadata="text",t.Date="date",t}({});const o=a.Metadata,s=new i.InjectionToken("getComponentByBrowseByType",{providedIn:"root",factory:()=>l}),c=new Map;function p(t){return function(e){if(!Object(r.a)(c.get(t)))throw new Error(`There can't be more than one component to render Browse-By of type "${t}"`);c.set(t,e)}}function l(t){const e=c.get(t);return Object(r.a)(e)&&c.get(o),e}},GCaJ:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var r=n("zr/d"),i=n("LRne"),a=n("84Zn"),o=n("cBqT"),s=n("eIep"),c=n("lJxs"),p=n("J3qs"),l=n("fXoL"),d=n("TVZh"),u=n("sfEo"),m=n("C765");let b=(()=>{class t{constructor(t,e){this.linkService=t,this.dsoNameService=e}getBreadcrumbs(t,e){const n=this.dsoNameService.getName(t),l=new r.a(n,e),u=t.getParentLinkKey();return this.linkService.resolveLink(t,Object(a.a)(u))[u].pipe(Object(o.a)(t=>t.hasSucceeded||204===t.statusCode),Object(s.a)(t=>{if(Object(p.b)(t.payload)){const e=t.payload;return this.getBreadcrumbs(e,Object(d.r)(e))}return Object(i.a)([])}),Object(c.a)(t=>[...t,l]))}}return t.\u0275fac=function(e){return new(e||t)(l["\u0275\u0275inject"](u.a),l["\u0275\u0275inject"](m.a))},t.\u0275prov=l["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},GQl8:function(t,e,n){"use strict";n.r(e),n.d(e,"BrowseBySwitcherComponent",(function(){return p}));var r=n("fXoL"),i=n("lJxs"),a=n("Ab81"),o=n("tyNb"),s=n("ofXK");function c(t,e){1&t&&r["\u0275\u0275elementContainer"](0)}let p=(()=>{class t{constructor(t,e){this.route=t,this.getComponentByBrowseByType=e}ngOnInit(){this.browseByComponent=this.route.data.pipe(Object(i.a)(t=>this.getComponentByBrowseByType(t.browseDefinition.dataType)))}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](o.a),r["\u0275\u0275directiveInject"](a.a))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-browse-by-switcher"]],decls:3,vars:3,consts:[[4,"ngComponentOutlet"]],template:function(t,e){1&t&&(r["\u0275\u0275template"](0,c,1,0,"ng-container",0),r["\u0275\u0275pipe"](1,"async"),r["\u0275\u0275text"](2,"\n")),2&t&&r["\u0275\u0275property"]("ngComponentOutlet",r["\u0275\u0275pipeBind1"](1,1,e.browseByComponent))},directives:[s.n],pipes:[s.b],encapsulation:2}),t})()},SuJu:function(t,e,n){var r={"./custom/app/browse-by/browse-by-switcher/browse-by-switcher.component":["O20E",45]};function i(t){if(!n.o(r,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=r[t],i=e[0];return n.e(e[1]).then((function(){return n(i)}))}i.keys=function(){return Object.keys(r)},i.id="SuJu",t.exports=i},mOAm:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return o}));var r=n("zZO8"),i=n("TVZh");const a="groups";function o(t){return new r.a(Object(i.m)(),a,t).toString()}},tv3Y:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("zr/d"),i=n("LRne"),a=n("fXoL");let o=(()=>{class t{getBreadcrumbs(t,e){return Object(i.a)([new r.a(t+".breadcrumbs",e)])}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=a["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},wV46:function(t,e,n){"use strict";n.r(e),n.d(e,"BrowseByPageModule",(function(){return It}));var r=n("fXoL"),i=n("tyNb"),a=n("J3qs"),o=n("eIep"),s=n("lJxs"),c=n("1QIV"),p=n("LRne"),l=n("/O7Z"),d=n("sYmb"),u=n("TbWU");let m=(()=>{class t{constructor(t,e,n){this.dsoService=t,this.translate=e,this.browseDefinitionService=n}canActivate(t,e){const n=t.data.title,r=t.params.id||t.queryParams.id||t.data.id;let i;i=Object(a.a)(t.data.browseDefinition)&&Object(a.b)(r)?this.browseDefinitionService.findById(r).pipe(Object(c.j)()):Object(p.a)(t.data.browseDefinition);const l=t.queryParams.scope,d=t.queryParams.value,u=this.translate.instant("browse.metadata."+r);return i.pipe(Object(o.a)(e=>Object(a.b)(l)?this.dsoService.findById(l).pipe(Object(c.i)()).pipe(Object(s.a)(i=>(t.data=this.createData(n,r,e,i.payload.name,u,d,t),!0))):(t.data=this.createData(n,r,e,"",u,d,t),Object(p.a)(!0))))}createData(t,e,n,r,i,o,s){return Object.assign({},s.data,{title:t,id:e,browseDefinition:n,collection:r,field:i,value:Object(a.b)(o)?`"${o}"`:""})}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](l.a),r["\u0275\u0275inject"](d.e),r["\u0275\u0275inject"](u.a))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})();var b=n("TVZh"),h=n("GCaJ");let f=(()=>{class t{constructor(t,e){this.breadcrumbService=t,this.dataService=e}resolve(t,e){const n=t.queryParams.scope;if(Object(a.b)(n))return this.dataService.findById(n).pipe(Object(c.i)(),Object(c.o)(),Object(s.a)(t=>({provider:this.breadcrumbService,key:t,url:Object(b.r)(t)})))}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](h.a),r["\u0275\u0275inject"](l.a))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})();var g=n("A0IO"),y=n("tv3Y");let v=(()=>{class t extends g.a{constructor(t){super(t),this.breadcrumbService=t}resolve(t,e){return t.data=Object.assign({},t.data,{breadcrumbKey:t.data.breadcrumbKey+"."+t.params.id}),super.resolve(t,e)}}return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275inject"](y.a))},t.\u0275prov=r["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})();var x=n("JTKQ");function w(t,e){}let I=(()=>{class t extends x.a{getComponentName(){return"BrowseBySwitcherComponent"}importThemedComponent(t){return n("SuJu")(`./${t}/app/browse-by/browse-by-switcher/browse-by-switcher.component`)}importUnthemedComponent(){return Promise.resolve().then(n.bind(null,"GQl8"))}}return t.\u0275fac=function(e){return S(e||t)},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-themed-browse-by-switcher"]],features:[r["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function(t,e){1&t&&(r["\u0275\u0275template"](0,w,0,0,"ng-template",null,0,r["\u0275\u0275templateRefExtractor"]),r["\u0275\u0275text"](2,"\n"))},encapsulation:2}),t})();const S=r["\u0275\u0275getInheritedFactory"](I);let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[v,f],imports:[[i.l.forChild([{path:"",resolve:{breadcrumb:f},children:[{path:":id",component:I,canActivate:[m],resolve:{breadcrumb:v},data:{title:"browse.title",breadcrumbKey:"browse.metadata"}}]}])]]}),t})();var j=n("ofXK"),O=n("mrSG"),B=n("itXk"),E=n("7DXY"),$=n("qc8P"),P=n("hzQF");class T{constructor(t,e,n,r,i){this.metadataDefinition=t,this.pagination=e,this.sort=n,this.startsWith=r,this.scope=i}}var W=n("QG5s"),V=n("Ab81"),D=n("MFUF"),A=n("O/5o"),N=n("yj7I"),F=n("0qNx"),k=n("/I7b"),M=n("RD8h"),q=n("MTb2"),L=n("Frqi");function H(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275elementStart"](2,"header",7),r["\u0275\u0275text"](3,"\n        "),r["\u0275\u0275text"](4,"\n        "),r["\u0275\u0275elementStart"](5,"ds-comcol-page-header",8),r["\u0275\u0275text"](6,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](7,"\n        "),r["\u0275\u0275text"](8,"\n        "),r["\u0275\u0275elementStart"](9,"ds-comcol-page-handle",9),r["\u0275\u0275text"](10,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](11,"\n        "),r["\u0275\u0275text"](12,"\n        "),r["\u0275\u0275elementStart"](13,"ds-comcol-page-content",10),r["\u0275\u0275text"](14,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](15,"\n        "),r["\u0275\u0275text"](16,"\n        "),r["\u0275\u0275elementStart"](17,"ds-comcol-page-content",11),r["\u0275\u0275text"](18,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](19,"\n      "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](20,"\n      "),r["\u0275\u0275text"](21,"\n      "),r["\u0275\u0275element"](22,"ds-comcol-page-browse-by",12),r["\u0275\u0275text"](23,"\n      "),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngIf;r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("name",t.name),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.handle)("title",t.type+".page.handle"),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.introductoryText)("hasInnerHtml",!0),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.sidebarText)("hasInnerHtml",!0)("title","community.page.news"),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("id",t.id)("contentType",t.type)}}function J(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,H,24,10,"ng-container",6),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",null==t?null:t.payload)}}const K=function(t,e,n){return{collection:t,field:e,value:n}};function Y(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"ds-browse-by",13),r["\u0275\u0275listener"]("prev",(function(){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().goPrev()}))("next",(function(){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().goNext()})),r["\u0275\u0275pipe"](1,"translate"),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275pipe"](3,"translate"),r["\u0275\u0275pipe"](4,"async"),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275pipe"](6,"async"),r["\u0275\u0275text"](7,"\n    "),r["\u0275\u0275elementEnd"]()}if(2&t){const t=r["\u0275\u0275nextContext"]();let e=null,n=null;r["\u0275\u0275propertyInterpolate"]("title",r["\u0275\u0275pipeBind2"](1,8,"browse.title",r["\u0275\u0275pureFunction3"](21,K,(null==(e=r["\u0275\u0275pipeBind1"](2,11,t.parent$))||null==e.payload?null:e.payload.name)||"",r["\u0275\u0275pipeBind1"](3,13,"browse.metadata."+t.browseId),t.value?'"'+t.value+'"':""))),r["\u0275\u0275propertyInterpolate"]("parentname",(null==(n=r["\u0275\u0275pipeBind1"](4,15,t.parent$))||null==n.payload?null:n.payload.name)||""),r["\u0275\u0275property"]("objects$",void 0!==t.items$?t.items$:t.browseEntries$)("paginationConfig",r["\u0275\u0275pipeBind1"](5,17,t.currentPagination$))("sortConfig",r["\u0275\u0275pipeBind1"](6,19,t.currentSort$))("type",t.startsWithType)("startsWithOptions",t.startsWithOptions)("enableArrows",!0)}}function R(t,e){1&t&&(r["\u0275\u0275element"](0,"ds-loading",14),r["\u0275\u0275pipe"](1,"translate")),2&t&&r["\u0275\u0275propertyInterpolate"]("message",r["\u0275\u0275pipeBind1"](1,1,"loading.browse-by-page"))}function X(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"footer",16),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275elementStart"](2,"div"),r["\u0275\u0275text"](3,"\n\n      "),r["\u0275\u0275text"](4,"\n      "),r["\u0275\u0275elementStart"](5,"ds-comcol-page-content",10),r["\u0275\u0275text"](6,"\n      "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](7,"\n    "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](8,"\n  "),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]().ngIf;r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("content",t.copyrightText)("hasInnerHtml",!0)}}function G(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n  "),r["\u0275\u0275template"](2,X,9,2,"footer",15),r["\u0275\u0275text"](3,"\n"),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngIf;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.copyrightText)}}function Q(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,G,4,1,"ng-container",6),r["\u0275\u0275text"](3,"\n"),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",null==t?null:t.payload)}}let U=(()=>{let t=class{constructor(t,e,n,r,i){this.route=t,this.browseService=e,this.dsoService=n,this.paginationService=r,this.router=i,this.paginationConfig=Object.assign(new E.a,{id:"bbm",currentPage:1,pageSize:20}),this.subs=[],this.defaultBrowseId="author",this.browseId=this.defaultBrowseId,this.startsWithType=W.a.text,this.value=""}ngOnInit(){const t=new $.b("default",$.a.ASC);this.updatePage(new T(this.defaultBrowseId,this.paginationConfig,t)),this.currentPagination$=this.paginationService.getCurrentPagination(this.paginationConfig.id,this.paginationConfig),this.currentSort$=this.paginationService.getCurrentSort(this.paginationConfig.id,t),this.subs.push(Object(B.a)([this.route.params,this.route.queryParams,this.currentPagination$,this.currentSort$]).pipe(Object(s.a)(([t,e,n,r])=>[Object.assign({},t,e),n,r])).subscribe(([t,e,n])=>{this.browseId=t.id||this.defaultBrowseId,this.authority=t.authority,this.value=+t.value||t.value||"",this.startsWith=+t.startsWith||t.startsWith;const r=Z(t,e,n,this.browseId);Object(a.e)(this.value)?this.updatePageWithItems(r,this.value,this.authority):this.updatePage(r),this.updateParent(t.scope)})),this.updateStartsWithTextOptions()}updateStartsWithTextOptions(){this.startsWithOptions=["0-9",..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")]}updatePage(t){this.browseEntries$=this.browseService.getBrowseEntriesFor(t),this.items$=void 0}updatePageWithItems(t,e,n){this.items$=this.browseService.getBrowseItemsFor(e,n,t)}updateParent(t){Object(a.b)(t)&&(this.parent$=this.dsoService.findById(t).pipe(Object(c.i)()))}goPrev(){this.items$?this.items$.pipe(Object(c.i)()).subscribe(t=>{this.items$=this.browseService.getPrevBrowseItems(t)}):this.browseEntries$&&this.browseEntries$.pipe(Object(c.i)()).subscribe(t=>{this.browseEntries$=this.browseService.getPrevBrowseEntries(t)})}goNext(){this.items$?this.items$.pipe(Object(c.i)()).subscribe(t=>{this.items$=this.browseService.getNextBrowseItems(t)}):this.browseEntries$&&this.browseEntries$.pipe(Object(c.i)()).subscribe(t=>{this.browseEntries$=this.browseService.getNextBrowseEntries(t)})}ngOnDestroy(){this.subs.filter(t=>Object(a.b)(t)).forEach(t=>t.unsubscribe()),this.paginationService.clearPagination(this.paginationConfig.id)}};return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](P.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](D.a),r["\u0275\u0275directiveInject"](i.h))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-browse-by-metadata-page"]],decls:19,vars:8,consts:[[1,"container"],[4,"ngVar"],[1,"comcol-page-browse-section"],[1,"browse-by-metadata","w-100"],["class","col-xs-12 w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","enableArrows","prev","next",4,"ngIf"],[3,"message",4,"ngIf"],[4,"ngIf"],[1,"comcol-header","border-bottom","mb-4","pb-4"],[3,"name"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[3,"id","contentType"],[1,"col-xs-12","w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","enableArrows","prev","next"],[3,"message"],["class","border-top my-5 pt-4",4,"ngIf"],[1,"border-top","my-5","pt-4"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,J,3,1,"ng-container",1),r["\u0275\u0275pipe"](3,"async"),r["\u0275\u0275text"](4,"\n\n    "),r["\u0275\u0275elementStart"](5,"section",2),r["\u0275\u0275text"](6,"\n    "),r["\u0275\u0275elementStart"](7,"div",3),r["\u0275\u0275text"](8,"\n    "),r["\u0275\u0275template"](9,Y,8,25,"ds-browse-by",4),r["\u0275\u0275text"](10,"\n    "),r["\u0275\u0275template"](11,R,2,3,"ds-loading",5),r["\u0275\u0275text"](12,"\n  "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](13,"\n  "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](14,"\n  "),r["\u0275\u0275template"](15,Q,4,1,"ng-container",1),r["\u0275\u0275pipe"](16,"async"),r["\u0275\u0275text"](17,"\n"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](18,"\n")),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](3,4,e.parent$)),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngIf",e.startsWithOptions),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!e.startsWithOptions),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](16,6,e.parent$)))},directives:[A.a,j.p,N.a,F.a,k.a,M.a,q.a,L.a],pipes:[j.b,d.d],styles:[""]}),t=Object(O.b)([Object(V.c)(V.b.Metadata)],t),t})();function Z(t,e,n,r){return new T(r,e,n,+t.startsWith||t.startsWith,t.scope)}function z(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275elementStart"](2,"header",7),r["\u0275\u0275text"](3,"\n        "),r["\u0275\u0275text"](4,"\n        "),r["\u0275\u0275elementStart"](5,"ds-comcol-page-header",8),r["\u0275\u0275text"](6,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](7,"\n        "),r["\u0275\u0275text"](8,"\n        "),r["\u0275\u0275elementStart"](9,"ds-comcol-page-handle",9),r["\u0275\u0275text"](10,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](11,"\n        "),r["\u0275\u0275text"](12,"\n        "),r["\u0275\u0275elementStart"](13,"ds-comcol-page-content",10),r["\u0275\u0275text"](14,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](15,"\n        "),r["\u0275\u0275text"](16,"\n        "),r["\u0275\u0275elementStart"](17,"ds-comcol-page-content",11),r["\u0275\u0275text"](18,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](19,"\n      "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](20,"\n      "),r["\u0275\u0275text"](21,"\n      "),r["\u0275\u0275element"](22,"ds-comcol-page-browse-by",12),r["\u0275\u0275text"](23,"\n      "),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngIf;r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("name",t.name),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.handle)("title",t.type+".page.handle"),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.introductoryText)("hasInnerHtml",!0),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.sidebarText)("hasInnerHtml",!0)("title","community.page.news"),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("id",t.id)("contentType",t.type)}}function _(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,z,24,10,"ng-container",6),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",null==t?null:t.payload)}}const tt=function(t,e,n){return{collection:t,field:e,value:n}};function et(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"ds-browse-by",13),r["\u0275\u0275listener"]("prev",(function(){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().goPrev()}))("next",(function(){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().goNext()})),r["\u0275\u0275pipe"](1,"translate"),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275pipe"](3,"translate"),r["\u0275\u0275pipe"](4,"async"),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275pipe"](6,"async"),r["\u0275\u0275text"](7,"\n    "),r["\u0275\u0275elementEnd"]()}if(2&t){const t=r["\u0275\u0275nextContext"]();let e=null,n=null;r["\u0275\u0275propertyInterpolate"]("title",r["\u0275\u0275pipeBind2"](1,8,"browse.title",r["\u0275\u0275pureFunction3"](21,tt,(null==(e=r["\u0275\u0275pipeBind1"](2,11,t.parent$))||null==e.payload?null:e.payload.name)||"",r["\u0275\u0275pipeBind1"](3,13,"browse.metadata."+t.browseId),t.value?'"'+t.value+'"':""))),r["\u0275\u0275propertyInterpolate"]("parentname",(null==(n=r["\u0275\u0275pipeBind1"](4,15,t.parent$))||null==n.payload?null:n.payload.name)||""),r["\u0275\u0275property"]("objects$",void 0!==t.items$?t.items$:t.browseEntries$)("paginationConfig",r["\u0275\u0275pipeBind1"](5,17,t.currentPagination$))("sortConfig",r["\u0275\u0275pipeBind1"](6,19,t.currentSort$))("type",t.startsWithType)("startsWithOptions",t.startsWithOptions)("enableArrows",!0)}}function nt(t,e){1&t&&(r["\u0275\u0275element"](0,"ds-loading",14),r["\u0275\u0275pipe"](1,"translate")),2&t&&r["\u0275\u0275propertyInterpolate"]("message",r["\u0275\u0275pipeBind1"](1,1,"loading.browse-by-page"))}function rt(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"footer",16),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275elementStart"](2,"div"),r["\u0275\u0275text"](3,"\n\n      "),r["\u0275\u0275text"](4,"\n      "),r["\u0275\u0275elementStart"](5,"ds-comcol-page-content",10),r["\u0275\u0275text"](6,"\n      "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](7,"\n    "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](8,"\n  "),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]().ngIf;r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("content",t.copyrightText)("hasInnerHtml",!0)}}function it(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n  "),r["\u0275\u0275template"](2,rt,9,2,"footer",15),r["\u0275\u0275text"](3,"\n"),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngIf;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.copyrightText)}}function at(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,it,4,1,"ng-container",6),r["\u0275\u0275text"](3,"\n"),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",null==t?null:t.payload)}}let ot=(()=>{let t=class extends U{constructor(t,e,n,r,i){super(t,e,n,r,i),this.route=t,this.browseService=e,this.dsoService=n,this.paginationService=r,this.router=i}ngOnInit(){const t=new $.b("dc.title",$.a.ASC);this.updatePage(new T(this.defaultBrowseId,this.paginationConfig,t)),this.currentPagination$=this.paginationService.getCurrentPagination(this.paginationConfig.id,this.paginationConfig),this.currentSort$=this.paginationService.getCurrentSort(this.paginationConfig.id,t),this.subs.push(Object(B.a)([this.route.params,this.route.queryParams,this.currentPagination$,this.currentSort$]).pipe(Object(s.a)(([t,e,n,r])=>[Object.assign({},t,e),n,r])).subscribe(([t,e,n])=>{this.browseId=t.id||this.defaultBrowseId,this.updatePageWithItems(Z(t,e,n,this.browseId),void 0,void 0),this.updateParent(t.scope)})),this.updateStartsWithTextOptions()}ngOnDestroy(){this.subs.filter(t=>Object(a.b)(t)).forEach(t=>t.unsubscribe())}};return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](P.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](D.a),r["\u0275\u0275directiveInject"](i.h))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-browse-by-title-page"]],features:[r["\u0275\u0275InheritDefinitionFeature"]],decls:19,vars:8,consts:[[1,"container"],[4,"ngVar"],[1,"comcol-page-browse-section"],[1,"browse-by-metadata","w-100"],["class","col-xs-12 w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","enableArrows","prev","next",4,"ngIf"],[3,"message",4,"ngIf"],[4,"ngIf"],[1,"comcol-header","border-bottom","mb-4","pb-4"],[3,"name"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[3,"id","contentType"],[1,"col-xs-12","w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","enableArrows","prev","next"],[3,"message"],["class","border-top my-5 pt-4",4,"ngIf"],[1,"border-top","my-5","pt-4"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,_,3,1,"ng-container",1),r["\u0275\u0275pipe"](3,"async"),r["\u0275\u0275text"](4,"\n\n    "),r["\u0275\u0275elementStart"](5,"section",2),r["\u0275\u0275text"](6,"\n    "),r["\u0275\u0275elementStart"](7,"div",3),r["\u0275\u0275text"](8,"\n    "),r["\u0275\u0275template"](9,et,8,25,"ds-browse-by",4),r["\u0275\u0275text"](10,"\n    "),r["\u0275\u0275template"](11,nt,2,3,"ds-loading",5),r["\u0275\u0275text"](12,"\n  "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](13,"\n  "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](14,"\n  "),r["\u0275\u0275template"](15,at,4,1,"ng-container",1),r["\u0275\u0275pipe"](16,"async"),r["\u0275\u0275text"](17,"\n"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](18,"\n")),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](3,4,e.parent$)),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngIf",e.startsWithOptions),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!e.startsWithOptions),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](16,6,e.parent$)))},directives:[A.a,j.p,N.a,F.a,k.a,M.a,q.a,L.a],pipes:[j.b,d.d],styles:[""]}),t=Object(O.b)([Object(V.c)(V.b.Title)],t),t})();var st=n("PCNd"),ct=n("AytR");function pt(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275elementStart"](2,"header",7),r["\u0275\u0275text"](3,"\n        "),r["\u0275\u0275text"](4,"\n        "),r["\u0275\u0275elementStart"](5,"ds-comcol-page-header",8),r["\u0275\u0275text"](6,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](7,"\n        "),r["\u0275\u0275text"](8,"\n        "),r["\u0275\u0275elementStart"](9,"ds-comcol-page-handle",9),r["\u0275\u0275text"](10,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](11,"\n        "),r["\u0275\u0275text"](12,"\n        "),r["\u0275\u0275elementStart"](13,"ds-comcol-page-content",10),r["\u0275\u0275text"](14,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](15,"\n        "),r["\u0275\u0275text"](16,"\n        "),r["\u0275\u0275elementStart"](17,"ds-comcol-page-content",11),r["\u0275\u0275text"](18,"\n        "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](19,"\n      "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](20,"\n      "),r["\u0275\u0275text"](21,"\n      "),r["\u0275\u0275element"](22,"ds-comcol-page-browse-by",12),r["\u0275\u0275text"](23,"\n      "),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngIf;r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("name",t.name),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.handle)("title",t.type+".page.handle"),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.introductoryText)("hasInnerHtml",!0),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("content",t.sidebarText)("hasInnerHtml",!0)("title","community.page.news"),r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("id",t.id)("contentType",t.type)}}function lt(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,pt,24,10,"ng-container",6),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",null==t?null:t.payload)}}const dt=function(t,e,n){return{collection:t,field:e,value:n}};function ut(t,e){if(1&t){const t=r["\u0275\u0275getCurrentView"]();r["\u0275\u0275elementStart"](0,"ds-browse-by",13),r["\u0275\u0275listener"]("prev",(function(){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().goPrev()}))("next",(function(){return r["\u0275\u0275restoreView"](t),r["\u0275\u0275nextContext"]().goNext()})),r["\u0275\u0275pipe"](1,"translate"),r["\u0275\u0275pipe"](2,"async"),r["\u0275\u0275pipe"](3,"translate"),r["\u0275\u0275pipe"](4,"async"),r["\u0275\u0275pipe"](5,"async"),r["\u0275\u0275pipe"](6,"async"),r["\u0275\u0275text"](7,"\n    "),r["\u0275\u0275elementEnd"]()}if(2&t){const t=r["\u0275\u0275nextContext"]();let e=null,n=null;r["\u0275\u0275propertyInterpolate"]("title",r["\u0275\u0275pipeBind2"](1,8,"browse.title",r["\u0275\u0275pureFunction3"](21,dt,(null==(e=r["\u0275\u0275pipeBind1"](2,11,t.parent$))||null==e.payload?null:e.payload.name)||"",r["\u0275\u0275pipeBind1"](3,13,"browse.metadata."+t.browseId),t.value?'"'+t.value+'"':""))),r["\u0275\u0275propertyInterpolate"]("parentname",(null==(n=r["\u0275\u0275pipeBind1"](4,15,t.parent$))||null==n.payload?null:n.payload.name)||""),r["\u0275\u0275property"]("objects$",void 0!==t.items$?t.items$:t.browseEntries$)("paginationConfig",r["\u0275\u0275pipeBind1"](5,17,t.currentPagination$))("sortConfig",r["\u0275\u0275pipeBind1"](6,19,t.currentSort$))("type",t.startsWithType)("startsWithOptions",t.startsWithOptions)("enableArrows",!0)}}function mt(t,e){1&t&&(r["\u0275\u0275element"](0,"ds-loading",14),r["\u0275\u0275pipe"](1,"translate")),2&t&&r["\u0275\u0275propertyInterpolate"]("message",r["\u0275\u0275pipeBind1"](1,1,"loading.browse-by-page"))}function bt(t,e){if(1&t&&(r["\u0275\u0275elementStart"](0,"footer",16),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275elementStart"](2,"div"),r["\u0275\u0275text"](3,"\n\n      "),r["\u0275\u0275text"](4,"\n      "),r["\u0275\u0275elementStart"](5,"ds-comcol-page-content",10),r["\u0275\u0275text"](6,"\n      "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](7,"\n    "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](8,"\n  "),r["\u0275\u0275elementEnd"]()),2&t){const t=r["\u0275\u0275nextContext"]().ngIf;r["\u0275\u0275advance"](5),r["\u0275\u0275property"]("content",t.copyrightText)("hasInnerHtml",!0)}}function ht(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n  "),r["\u0275\u0275template"](2,bt,9,2,"footer",15),r["\u0275\u0275text"](3,"\n"),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngIf;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",t.copyrightText)}}function ft(t,e){if(1&t&&(r["\u0275\u0275elementContainerStart"](0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,ht,4,1,"ng-container",6),r["\u0275\u0275text"](3,"\n"),r["\u0275\u0275elementContainerEnd"]()),2&t){const t=e.ngVar;r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",null==t?null:t.payload)}}let gt=(()=>{let t=class extends U{constructor(t,e,n,r,i,a){super(t,e,n,i,r),this.route=t,this.browseService=e,this.dsoService=n,this.router=r,this.paginationService=i,this.cdRef=a,this.defaultMetadataKeys=["dc.date.issued"]}ngOnInit(){const t=new $.b("default",$.a.ASC);this.startsWithType=W.a.date,this.updatePage(new T(this.defaultBrowseId,this.paginationConfig,t)),this.currentPagination$=this.paginationService.getCurrentPagination(this.paginationConfig.id,this.paginationConfig),this.currentSort$=this.paginationService.getCurrentSort(this.paginationConfig.id,t),this.subs.push(Object(B.a)([this.route.params,this.route.queryParams,this.route.data,this.currentPagination$,this.currentSort$]).pipe(Object(s.a)(([t,e,n,r,i])=>[Object.assign({},t,e,n),r,i])).subscribe(([t,e,n])=>{const r=t.browseDefinition?t.browseDefinition.metadataKeys:this.defaultMetadataKeys;this.browseId=t.id||this.defaultBrowseId,this.startsWith=+t.startsWith||t.startsWith;const i=Z(t,e,n,this.browseId);this.updatePageWithItems(i,this.value,void 0),this.updateParent(t.scope),this.updateStartsWithOptions(this.browseId,r,t.scope)}))}updateStartsWithOptions(t,e,n){this.subs.push(this.browseService.getFirstItemFor(t,n).subscribe(t=>{let n=ct.a.browseBy.defaultLowerLimit;if(Object(a.b)(t.payload)){const r=t.payload.firstMetadataValue(e);Object(a.b)(r)&&(n=new Date(r).getUTCFullYear())}const r=[],i=(new Date).getUTCFullYear(),o=5*Math.floor((i-ct.a.browseBy.oneYearLimit)/5),s=10*Math.floor((i-ct.a.browseBy.fiveYearLimit)/10);n-=n<=s?10:n<=o?5:1;let c=i;for(;c>n;)r.push(c),c<=s?c-=10:c<=o?c-=5:c--;Object(a.e)(r)&&(this.startsWithOptions=r,this.cdRef.detectChanges())}))}};return t.\u0275fac=function(e){return new(e||t)(r["\u0275\u0275directiveInject"](i.a),r["\u0275\u0275directiveInject"](P.a),r["\u0275\u0275directiveInject"](l.a),r["\u0275\u0275directiveInject"](i.h),r["\u0275\u0275directiveInject"](D.a),r["\u0275\u0275directiveInject"](r.ChangeDetectorRef))},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ds-browse-by-date-page"]],features:[r["\u0275\u0275InheritDefinitionFeature"]],decls:19,vars:8,consts:[[1,"container"],[4,"ngVar"],[1,"comcol-page-browse-section"],[1,"browse-by-metadata","w-100"],["class","col-xs-12 w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","enableArrows","prev","next",4,"ngIf"],[3,"message",4,"ngIf"],[4,"ngIf"],[1,"comcol-header","border-bottom","mb-4","pb-4"],[3,"name"],[3,"content","title"],[3,"content","hasInnerHtml"],[3,"content","hasInnerHtml","title"],[3,"id","contentType"],[1,"col-xs-12","w-100",3,"title","parentname","objects$","paginationConfig","sortConfig","type","startsWithOptions","enableArrows","prev","next"],[3,"message"],["class","border-top my-5 pt-4",4,"ngIf"],[1,"border-top","my-5","pt-4"]],template:function(t,e){1&t&&(r["\u0275\u0275elementStart"](0,"div",0),r["\u0275\u0275text"](1,"\n    "),r["\u0275\u0275template"](2,lt,3,1,"ng-container",1),r["\u0275\u0275pipe"](3,"async"),r["\u0275\u0275text"](4,"\n\n    "),r["\u0275\u0275elementStart"](5,"section",2),r["\u0275\u0275text"](6,"\n    "),r["\u0275\u0275elementStart"](7,"div",3),r["\u0275\u0275text"](8,"\n    "),r["\u0275\u0275template"](9,ut,8,25,"ds-browse-by",4),r["\u0275\u0275text"](10,"\n    "),r["\u0275\u0275template"](11,mt,2,3,"ds-loading",5),r["\u0275\u0275text"](12,"\n  "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](13,"\n  "),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](14,"\n  "),r["\u0275\u0275template"](15,ft,4,1,"ng-container",1),r["\u0275\u0275pipe"](16,"async"),r["\u0275\u0275text"](17,"\n"),r["\u0275\u0275elementEnd"](),r["\u0275\u0275text"](18,"\n")),2&t&&(r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](3,4,e.parent$)),r["\u0275\u0275advance"](7),r["\u0275\u0275property"]("ngIf",e.startsWithOptions),r["\u0275\u0275advance"](2),r["\u0275\u0275property"]("ngIf",!e.startsWithOptions),r["\u0275\u0275advance"](4),r["\u0275\u0275property"]("ngVar",r["\u0275\u0275pipeBind1"](16,6,e.parent$)))},directives:[A.a,j.p,N.a,F.a,k.a,M.a,q.a,L.a],pipes:[j.b,d.d],styles:[""]}),t=Object(O.b)([Object(V.c)(V.b.Date)],t),t})();n("GQl8");var yt=n("fY2w");const vt=[ot,U,gt];let xt=(()=>{class t{static withEntryComponents(){return{ngModule:st.a,providers:vt.map(t=>({provide:t}))}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({imports:[[j.c,yt.a,st.a]]}),t})();var wt=n("iqTE");let It=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=r["\u0275\u0275defineInjector"]({providers:[wt.a,P.a,m],imports:[[C,xt.withEntryComponents()]]}),t})()},"zr/d":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));class r{constructor(t,e){this.text=t,this.url=e}}}}]);
//# sourceMappingURL=19-es2015.55ddd6613cc82ae1feb0.js.map