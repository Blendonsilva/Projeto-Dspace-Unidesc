exports.ids=[23],exports.modules={f6n5:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LookupIdModule",(function(){return LookupIdModule}));var core=__webpack_require__("fXoL"),common=__webpack_require__("ofXK"),shared_module=__webpack_require__("PCNd"),request_models=__webpack_require__("B/au"),map=__webpack_require__("lJxs"),tap=__webpack_require__("vkgz"),empty_util=__webpack_require__("J3qs"),notifications_service=__webpack_require__("lI3o"),remote_data_build_service=__webpack_require__("7vy/"),object_cache_service=__webpack_require__("mycY"),hal_endpoint_service=__webpack_require__("uLZQ"),data_service=__webpack_require__("h5qW"),dso_change_analyzer_service=__webpack_require__("42gE"),request_service=__webpack_require__("X/78"),operators=__webpack_require__("1QIV"),item_page_routing_paths=__webpack_require__("Xioo"),ngrx_store=__webpack_require__("l7P3"),http=__webpack_require__("tk/3"),router=__webpack_require__("tyNb");class dso_redirect_data_service_DsoRedirectDataService extends data_service.a{constructor(requestService,rdbService,store,objectCache,halService,notificationsService,http,comparator,router){super(),this.requestService=requestService,this.rdbService=rdbService,this.store=store,this.objectCache=objectCache,this.halService=halService,this.notificationsService=notificationsService,this.http=http,this.comparator=comparator,this.router=router,this.linkPath="pid",this.uuidEndpoint="dso"}setLinkPath(identifierType){identifierType===request_models.h.UUID&&(this.linkPath=this.uuidEndpoint)}getIDHref(endpoint,resourceID,...linksToFollow){return this.buildHrefFromFindOptions(endpoint.replace(/\{\?id\}/,`?id=${resourceID}`).replace(/\{\?uuid\}/,`?uuid=${resourceID}`),{},[],...linksToFollow)}findByIdAndIDType(id,identifierType=request_models.h.UUID){return this.setLinkPath(identifierType),this.findById(id).pipe(Object(operators.g)(),Object(tap.a)((response=>{if(response.hasSucceeded){const dso=response.payload,uuid=dso.uuid;if(Object(empty_util.b)(uuid)){let newRoute=this.getEndpointFromDSOType(response.payload.type);dso.type.startsWith("item")?newRoute=Object(item_page_routing_paths.h)(dso):Object(empty_util.b)(newRoute)&&(newRoute+="/"+uuid),Object(empty_util.b)(newRoute)&&this.router.navigate([newRoute])}}})))}getEndpointFromDSOType(dsoType){return dsoType.startsWith("item")?"items":dsoType.startsWith("community")?"communities":dsoType.startsWith("collection")?"collections":""}}dso_redirect_data_service_DsoRedirectDataService.\u0275fac=function DsoRedirectDataService_Factory(t){return new(t||dso_redirect_data_service_DsoRedirectDataService)(core["\u0275\u0275inject"](request_service.a),core["\u0275\u0275inject"](remote_data_build_service.a),core["\u0275\u0275inject"](ngrx_store.i),core["\u0275\u0275inject"](object_cache_service.a),core["\u0275\u0275inject"](hal_endpoint_service.a),core["\u0275\u0275inject"](notifications_service.a),core["\u0275\u0275inject"](http.c),core["\u0275\u0275inject"](dso_change_analyzer_service.a),core["\u0275\u0275inject"](router.g))},dso_redirect_data_service_DsoRedirectDataService.\u0275prov=core["\u0275\u0275defineInjectable"]({token:dso_redirect_data_service_DsoRedirectDataService,factory:dso_redirect_data_service_DsoRedirectDataService.\u0275fac});class lookup_guard_LookupGuard{constructor(dsoService){this.dsoService=dsoService}canActivate(route,state){const params=this.getLookupParams(route);return this.dsoService.findByIdAndIDType(params.id,params.type).pipe(Object(map.a)((response=>response.hasFailed)))}getLookupParams(route){let type,id;const idType=route.params.idType;if(idType!==request_models.h.HANDLE&&idType!==request_models.h.UUID){type=request_models.h.HANDLE;id=`hdl:${route.params.idType}/${route.params.id}`}else route.params.idType===request_models.h.HANDLE?(type=request_models.h.HANDLE,id="hdl:"+route.params.id):(type=request_models.h.UUID,id=route.params.id);return{type:type,id:id}}}lookup_guard_LookupGuard.\u0275fac=function LookupGuard_Factory(t){return new(t||lookup_guard_LookupGuard)(core["\u0275\u0275inject"](dso_redirect_data_service_DsoRedirectDataService))},lookup_guard_LookupGuard.\u0275prov=core["\u0275\u0275defineInjectable"]({token:lookup_guard_LookupGuard,factory:lookup_guard_LookupGuard.\u0275fac});var themed_component=__webpack_require__("JTKQ");function ThemedObjectNotFoundComponent_ng_template_0_Template(rf,ctx){}class themed_objectnotfound_component_ThemedObjectNotFoundComponent extends themed_component.a{getComponentName(){return"ObjectNotFoundComponent"}importThemedComponent(themeName){return __webpack_require__("rPnB")(`./${themeName}/app/lookup-by-id/objectnotfound/objectnotfound.component`)}importUnthemedComponent(){return Promise.resolve().then(__webpack_require__.bind(null,"lME7"))}}themed_objectnotfound_component_ThemedObjectNotFoundComponent.\u0275fac=function ThemedObjectNotFoundComponent_Factory(t){return \u0275ThemedObjectNotFoundComponent_BaseFactory(t||themed_objectnotfound_component_ThemedObjectNotFoundComponent)},themed_objectnotfound_component_ThemedObjectNotFoundComponent.\u0275cmp=core["\u0275\u0275defineComponent"]({type:themed_objectnotfound_component_ThemedObjectNotFoundComponent,selectors:[["ds-themed-objnotfound"]],features:[core["\u0275\u0275InheritDefinitionFeature"]],decls:3,vars:0,consts:[["vcr",""]],template:function ThemedObjectNotFoundComponent_Template(rf,ctx){1&rf&&(core["\u0275\u0275template"](0,ThemedObjectNotFoundComponent_ng_template_0_Template,0,0,"ng-template",null,0,core["\u0275\u0275templateRefExtractor"]),core["\u0275\u0275text"](2,"\n"))},encapsulation:2});const \u0275ThemedObjectNotFoundComponent_BaseFactory=core["\u0275\u0275getInheritedFactory"](themed_objectnotfound_component_ThemedObjectNotFoundComponent);class LookupRoutingModule{}function urlMatcher(url){const idType=url[0].path,id=url.slice(1).map((us=>us.path)).join("/");return Object(empty_util.e)(idType)&&Object(empty_util.e)(id)?{consumed:url,posParams:{idType:new router.n(idType,{}),id:new router.n(id,{})}}:null}LookupRoutingModule.\u0275fac=function LookupRoutingModule_Factory(t){return new(t||LookupRoutingModule)},LookupRoutingModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:LookupRoutingModule}),LookupRoutingModule.\u0275inj=core["\u0275\u0275defineInjector"]({providers:[lookup_guard_LookupGuard],imports:[[router.k.forChild([{matcher:urlMatcher,canActivate:[lookup_guard_LookupGuard],component:themed_objectnotfound_component_ThemedObjectNotFoundComponent}])]]});__webpack_require__("lME7");class LookupIdModule{}LookupIdModule.\u0275fac=function LookupIdModule_Factory(t){return new(t||LookupIdModule)},LookupIdModule.\u0275mod=core["\u0275\u0275defineNgModule"]({type:LookupIdModule}),LookupIdModule.\u0275inj=core["\u0275\u0275defineInjector"]({providers:[dso_redirect_data_service_DsoRedirectDataService],imports:[[LookupRoutingModule,common.CommonModule,shared_module.a]]})},lME7:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ObjectNotFoundComponent",(function(){return ObjectNotFoundComponent}));var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("fXoL"),_angular_router__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("tyNb"),_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("sYmb");class ObjectNotFoundComponent{constructor(route){this.route=route,route.params.subscribe((params=>{this.idType=params.idType,this.id=params.id}))}ngOnInit(){this.idType.startsWith("handle")||this.idType.startsWith("uuid")?this.missingItem=this.idType+": "+this.id:this.missingItem="handle: "+this.idType+"/"+this.id}}ObjectNotFoundComponent.\u0275fac=function ObjectNotFoundComponent_Factory(t){return new(t||ObjectNotFoundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.a))},ObjectNotFoundComponent.\u0275cmp=_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275defineComponent"]({type:ObjectNotFoundComponent,selectors:[["ds-objnotfound"]],decls:21,vars:7,consts:[[1,"object-not-found","container"],[1,"text-center"],["routerLink","/home",1,"btn","btn-primary"]],template:function ObjectNotFoundComponent_Template(rf,ctx){1&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](0,"div",0),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](1,"\n  "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](2,"h1"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](3),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275pipe"](4,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](5,"\n  "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](6,"h2"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](7,"small"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](8,"em"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](9),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](10,"\n  "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275element"](11,"br"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](12,"\n  "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](13,"p",1),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](14,"\n    "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementStart"](15,"a",2),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](16),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275pipe"](17,"translate"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](18,"\n  "),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](19,"\n"),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275elementEnd"](),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275text"](20,"\n")),2&rf&&(_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](3),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275pipeBind1"](4,3,"error.identifier")),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](6),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275textInterpolate"](ctx.missingItem),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275advance"](7),_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["\u0275\u0275pipeBind1"](17,5,"404.link.home-page")))},directives:[_angular_router__WEBPACK_IMPORTED_MODULE_1__.j],pipes:[_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.d],styles:[""]})},rPnB:function(module,exports,__webpack_require__){var map={"./custom/app/lookup-by-id/objectnotfound/objectnotfound.component":["RrNC",55]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return __webpack_require__.e(ids[1]).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function webpackAsyncContextKeys(){return Object.keys(map)},webpackAsyncContext.id="rPnB",module.exports=webpackAsyncContext}};