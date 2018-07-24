(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _views_error_error_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/error/error.routes */ "./src/app/views/error/error.routes.ts");
/* harmony import */ var _views_auth_auth_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/auth/auth.routes */ "./src/app/views/auth/auth.routes.ts");
/* harmony import */ var _views_main_main_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/main.routes */ "./src/app/views/main/main.routes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = _views_auth_auth_routes__WEBPACK_IMPORTED_MODULE_3__["AUTH_ROUTES"].concat(_views_main_main_routes__WEBPACK_IMPORTED_MODULE_4__["MAIN_ROUTES"], _views_error_error_routes__WEBPACK_IMPORTED_MODULE_2__["ERROR_ROUTES"]);
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<ui-snackbar-container></ui-snackbar-container>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _views_error_error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/error/error.module */ "./src/app/views/error/error.module.ts");
/* harmony import */ var _views_main_main_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/main/main.module */ "./src/app/views/main/main.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/auth/auth.module */ "./src/app/views/auth/auth.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]
            ],
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _views_error_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"],
                _views_main_main_module__WEBPACK_IMPORTED_MODULE_4__["MainModule"],
                _views_auth_auth_module__WEBPACK_IMPORTED_MODULE_6__["AuthModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/api/api-response.ts":
/*!******************************************!*\
  !*** ./src/app/core/api/api-response.ts ***!
  \******************************************/
/*! exports provided: ApiReponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiReponse", function() { return ApiReponse; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");



var ApiReponse = /** @class */ (function () {
    function ApiReponse() {
    }
    ApiReponse.extractData = function (res, callback, cleanResult) {
        if (!callback) {
            return;
        }
        if (cleanResult) {
            callback(res);
        }
        if (res.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpEventType"].Response && !cleanResult) {
            callback(res.body);
        }
    };
    ApiReponse.handleError = function (res, callback, cleanError) {
        if (callback) {
            callback(res);
        }
        if (cleanError) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(res);
        }
        switch (res.status) {
            case 0:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: "Um de nossos servi\u00E7os est\u00E1 fora do ar e n\u00E3o foi poss\u00EDvel processar sua requisi\u00E7\u00E3o. Tente novamente mais tarde.",
                    actionText: 'OK',
                    action: function (close) { return close(); },
                    duration: 1000
                });
                break;
            case 400:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: "Requisi\u00E7\u00E3o inv\u00E1lida. Verifique as informa\u00E7\u00F5es fornecidas.",
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                break;
            case 409:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: res.error.message,
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                break;
            case 500:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: "Ocorreu um erro interno. J\u00E1 fomos informados do erro. Tente novamente mais tarde.",
                    actionText: 'OK',
                    action: function (close) { return close(); },
                    duration: 1000
                });
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(res);
    };
    return ApiReponse;
}());



/***/ }),

/***/ "./src/app/core/api/api.service.ts":
/*!*****************************************!*\
  !*** ./src/app/core/api/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _api_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api-response */ "./src/app/core/api/api-response.ts");
/* harmony import */ var _utils_user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API;
var OPTIONS;
var DEFAULT_HEADERS = {
    'Content-Type': 'application/json'
};
var ApiService = /** @class */ (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    /**
     * Atribui o valor dos métodos e dos headers no serviço
     * @param methods {object} - Métodos retornados da API
     * @param options {object} - Opções do menu
     * @return {void}
    **/
    ApiService.prototype.set = function (methods, options) {
        API = methods;
        OPTIONS = options;
    };
    /**
     * Configura uma requisão através dos métodos retornados da API
     * @param api {string} - API que será chamada
     * @param funcionalidade {string} - Funcionalidade que será chamada
     * @param metodo {string} - Método que será chamado
     * @param options {object} - Opções adicionais para requisição
     * @return Function
     **/
    ApiService.prototype.prep = function (api, funcionalidade, metodo, options) {
        if (options === void 0) { options = {}; }
        if (api && !funcionalidade) {
            return API[api];
        }
        if (api && funcionalidade && !metodo) {
            return API[api][funcionalidade];
        }
        var method = API[api][funcionalidade][metodo];
        if (method) {
            // Retornando todas as APIs que tem url
            var option = OPTIONS.filter(function (item) {
                return item.url ? item.url.replace('/', '') : item.url === location.pathname.replace('/', '');
            });
            var idOption_1 = '';
            // Encontrando a opção da página atual
            option.map(function (item) {
                if (location.pathname.substring(1).indexOf(item.url.substring(1)) !== -1) {
                    idOption_1 = item.id;
                }
            });
            options.headers = __assign({}, DEFAULT_HEADERS, options.headers, {
                'Option': idOption_1,
                'Authentication': _utils_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"].getToken()
            });
            return {
                call: this.request(method.method, method.url, options)
            };
        }
        throw { message: 'Método não encontrado' };
    };
    /**
     * Configura um requisição HTTP
     * @param method {string} - Tipo da requisição
     * @param url {string} - Url da API que será chamada
     * @param options {object} - Opções adicionais para requisição
     * Os parâmetros tipos reais dos parâmetros podem ser encontrados no arquivo irmão(api-request.ts)
     * @return function
     **/
    ApiService.prototype.http = function (method, url, options) {
        if (options === void 0) { options = {}; }
        return {
            call: this.request(method, url, options)
        };
    };
    /**
     * Efetua a requisição em uma API
     * @param method {string} - Tipo da requisição
     * @param url {string} - Url da API que será chamada
     * @param options {object} - Opções adicionais para requisição
     * @return function
     **/
    ApiService.prototype.request = function (method, url, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return function (data) {
            if (data) {
                var paramsFormatted = _this.formatParams(url, data);
                url = paramsFormatted.url;
                var methodFormatted = method.toUpperCase();
                if (methodFormatted === 'GET' || methodFormatted === 'DELETE') {
                    options.params = paramsFormatted.leftover;
                }
                else {
                    options.body = paramsFormatted.leftover;
                }
            }
            // url = url.replace('7.37', '10.203');
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({
                fromObject: options.params
            });
            var headers = __assign({}, DEFAULT_HEADERS, options.headers);
            var httpOptions = {};
            Object.assign(httpOptions, options);
            httpOptions.headers = _this.generateHeaders(headers);
            httpOptions.params = params;
            var request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"](method, url, httpOptions.body, httpOptions);
            return {
                subscribe: function (next, error, complete) {
                    return _this._http
                        .request(request)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return _api_response__WEBPACK_IMPORTED_MODULE_3__["ApiReponse"].extractData(res, next, options.cleanResult); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (res) { return _api_response__WEBPACK_IMPORTED_MODULE_3__["ApiReponse"].handleError(res, error, options.cleanError); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(complete))
                        .subscribe();
                }
            };
        };
    };
    /**
     * Constroi os Headers de uma requisição
     * @param headers {object} - Headers a serem incluidos na requisição
     * @return {HttpHeaders}
     **/
    ApiService.prototype.generateHeaders = function (headers) {
        var newHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        Object.keys(headers).map(function (key) {
            newHeaders = newHeaders.set(key, headers[key]);
        });
        return newHeaders;
    };
    /**
     * Insere os parâmetros na url e retornando a url final e o restante dos valores
     * @param url {string} - Url a ser formatada
     * @param params - Parâmetros, Query Strings e Body da requisição
     * @return {object}
     **/
    ApiService.prototype.formatParams = function (url, params) {
        var data = Object.assign({}, params);
        url = url.split('/');
        Object.keys(data).forEach(function (key) {
            var indexOf = url.indexOf(":" + key);
            if (indexOf !== -1) {
                url[indexOf] = data[key];
                delete data[key];
            }
        });
        return {
            url: url.join('/'),
            leftover: data
        };
    };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/core/utils/user/user.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/utils/user/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var user = {};
var token;
var menu;
var COOKIE_NAME = {
    authentication: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SYSTEM_PREFIX + "Authentication",
    keepConnect: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].SYSTEM_PREFIX + "KeepConnect"
};
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.get = function () {
        return {
            user: user,
            token: token
        };
    };
    UserService.getUser = function () {
        return user;
    };
    UserService.setUser = function (newUser) {
        user = newUser;
    };
    UserService.setMenu = function (newMenu) {
        menu = newMenu;
    };
    UserService.getMenu = function () {
        return menu;
    };
    UserService.getToken = function () {
        return ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].get(COOKIE_NAME.authentication);
    };
    UserService.setToken = function (newToken, keepConnect) {
        token = newToken;
        this.setCookie(token, keepConnect);
    };
    UserService.getCookie = function () {
        return {
            authentication: ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].get(COOKIE_NAME.authentication),
            keepConnect: ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].get(COOKIE_NAME.keepConnect)
        };
    };
    UserService.setCookie = function (token, keepConnect) {
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].set(COOKIE_NAME.keepConnect, keepConnect, keepConnect ? 365 : null, '/');
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].set(COOKIE_NAME.authentication, token, keepConnect ? 365 : null, '/');
    };
    UserService.remove = function () {
        user = null;
        token = null;
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].delete(COOKIE_NAME.keepConnect);
        ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiCookie"].delete(COOKIE_NAME.authentication);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared.module.ts":
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _views_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/auth/guard/auth.guard */ "./src/app/views/auth/guard/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            exports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["SMNUIModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"]
            ],
            providers: [ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"], _core_api_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _views_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]],
            bootstrap: []
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/views/auth/auth.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.module.ts ***!
  \*******************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.module */ "./src/app/views/auth/login/login.module.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_1__["LoginModule"]
            ],
            exports: [],
            declarations: [],
            providers: [],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/views/auth/auth.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.routes.ts ***!
  \*******************************************/
/*! exports provided: AUTH_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_ROUTES", function() { return AUTH_ROUTES; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/views/auth/login/login.component.ts");

var AUTH_ROUTES = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] }
];


/***/ }),

/***/ "./src/app/views/auth/guard/auth.guard.ts":
/*!************************************************!*\
  !*** ./src/app/views/auth/guard/auth.guard.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, api) {
        this.router = router;
        this.api = api;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var usuario = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getUser();
        if (usuario.id) {
            return true;
        }
        else {
            return this.remakeLogin();
        }
    };
    AuthGuard.prototype.remakeLogin = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var cookies = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getCookie();
            if (cookies.authentication) {
                var headers = {
                    'Content-Type': 'application/json',
                    'Authentication': cookies.authentication
                };
                _this.api
                    .http('GET', _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].AUTH_API + "/login/refazer", { headers: headers })
                    .call()
                    .subscribe(function (res) {
                    var content = res.content;
                    _this.api.set(content.api, content.opcoes);
                    _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].setToken(content.token, !!cookies.keepConnect);
                    _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].setMenu(content.opcoes);
                    _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].setUser(content.user);
                    resolve(true);
                }, function (res) {
                    _this.handleError(res);
                    resolve(false);
                });
            }
            else {
                _this.handleError({ status: 401 });
                resolve(false);
            }
        });
    };
    AuthGuard.prototype.handleError = function (res) {
        switch (res.status) {
            case 401:
                var text = void 0;
                switch (res.executionCode) {
                    case 2:
                        text = 'Parece que sua senha está incorreta, tente refazer o login';
                        break;
                    case 3:
                        text = 'Seu usuário está bloqueado';
                        break;
                    case 4:
                        text = 'Sua senha expirou, tente refazer o login';
                        break;
                    case 5:
                        text = 'Você está bloqueado à acessar neste horário';
                        break;
                    default:
                        text = 'Seu login expirou. Refaça o login novamente';
                        break;
                }
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: text,
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                this.router.navigate(['/login']);
                break;
            case 403:
                this.router.navigate(['/forbidden']);
                break;
            case 404:
                ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                    text: 'Não conseguimos encontrar seu usuário, tente refazer o login',
                    actionText: 'OK',
                    action: function (close) { return close(); }
                });
                this.router.navigate(['/login']);
                break;
        }
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _core_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/views/auth/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"core\">\r\n    <div class=\"logo\">\r\n        <!-- <img src=\"assets/images/logotipo-transparente.png\" alt=\"Cronos logo\" title=\"Cronos logo\" style=\"margin-left: -16px\"> -->\r\n    </div>\r\n    <ui-card>\r\n        <div class=\"ui-progress accent\" [class.hide]=\"!loading\">\r\n            <div class=\"indeterminate\"></div>\r\n        </div>\r\n        <ui-tabs-pages #tabsPages>\r\n            <div class=\"page pre-info\">\r\n                <form #preLoginForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"getInfo(preLoginForm, preLogin)\">\r\n                    <ui-card-title>Inicie sua sessão</ui-card-title>\r\n                    <ui-card-content>\r\n                        <ui-input-container>\r\n                            <input [type]=\"authByEmail ? 'email' : 'text'\"\r\n                                   name=\"usuario\"\r\n                                   [(ngModel)]=\"preLogin.usuario\"\r\n                                   uiInput\r\n                                   required\r\n                                   #preLoginUsuario=\"ngModel\"\r\n                                   [pattern]=\"authByEmail ? '[a-z0-9!#$%&\\'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\\\\.[a-z0-9-]+)*' : null\"\r\n                                   id=\"pre-login-usuario\"\r\n                                   class=\"accent\"\r\n                                   autofocus>\r\n                            <label for=\"pre-login-usuario\">{{authByEmail ? 'E-mail' : 'Usuário'}}</label>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"preLoginUsuario.errors && preLoginUsuario.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!preLoginUsuario.pristine && !preLoginUsuario.errors.required\">\r\n                                        Use seu {{authByEmail ? 'e-mail' : 'nome de usuário'}}\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!preLoginUsuario.errors.pattern\">\r\n                                        Use um e-mail válido\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!preLoginUsuario.errors.notFound\">\r\n                                        Este {{authByEmail ? 'e-mail' : 'nome de usuário'}} não existe\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                    </ui-card-content>\r\n                    <div class=\"ui-button-container cover\">\r\n                        <button class=\"ui-button accent full\" uiRipple>Próximo</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n            <div class=\"page\">\r\n                <form #loginForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"login(loginForm, info)\">\r\n                    <fieldset>\r\n                        <ui-toolbar class=\"flat\">\r\n                            <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"backToLogin()\">\r\n                                <i class=\"material-icons\">arrow_back</i>\r\n                            </button>\r\n                        </ui-toolbar>\r\n                        <ul class=\"ui-list no-active\" [class.multi-line]=\"authByEmail\" style=\"padding: 0\">\r\n                            <li>\r\n                                <div class=\"avatar\"\r\n                                     [ngStyle]=\"{'background-image': info.imagem ? 'url(' + info.imagem + ')' : '',\r\n                                                 'background-color': info.imagem ? 'white' : info.cor,\r\n                                                 'color': isBright(info.cor) ? 'black': 'white'}\">\r\n                                    <span *ngIf=\"info && !info.imagem && info.nome\">{{info.nome.charAt(0)}}</span>\r\n                                </div>\r\n                                <div class=\"primary\" *ngIf=\"!authByEmail\">{{info.nome}}</div>\r\n                                <div class=\"lines\" *ngIf=\"authByEmail\">\r\n                                    <div class=\"primary\">{{info.nome}}</div>\r\n                                    <div class=\"secondary\">{{info.email}}</div>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <ui-card-content>\r\n                            <ui-input-container>\r\n                                <input [type]=\"typeText ? 'text' : 'password'\"\r\n                                       [(ngModel)]=\"info.senha\"\r\n                                       uiInput\r\n                                       required\r\n                                       name=\"senha\"\r\n                                       #loginSenha=\"ngModel\"\r\n                                       id=\"login-senha\"\r\n                                       class=\"accent\">\r\n                                <label>Senha</label>\r\n                                <div class=\"suffix ui-button flat icon\" (click)=\"typeText = !typeText\" uiRipple>\r\n                                    <i class=\"material-icons light\">{{typeText ? 'visibility_off' : 'visibility'}}</i>\r\n                                </div>\r\n                                <div class=\"ui-messages\">\r\n                                    <div *ngIf=\"loginSenha.errors && loginSenha.dirty\">\r\n                                        <div class=\"ui-message error\" [hidden]=\"!loginSenha.pristine && !loginSenha.errors.required\">\r\n                                            Insira uma senha\r\n                                        </div>\r\n                                        <div class=\"ui-message error\" [hidden]=\"!loginSenha.errors.wrongPassword\">\r\n                                            Senha incorreta\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"ui-message counter\">\r\n                                        Esqueci minha senha\r\n                                    </div>\r\n                                </div>\r\n                            </ui-input-container>\r\n                            <ui-option class=\"primary\" style=\"margin-top: 16px\">\r\n                                <input type=\"checkbox\"\r\n                                       [checked]=\"info.matenhaConectado\"\r\n                                       (change)=\"info.matenhaConectado = $event.target.checked\">\r\n                                <span>Manter conectado</span>\r\n                            </ui-option>\r\n                        </ui-card-content>\r\n                        <div class=\"ui-button-container cover\">\r\n                            <button class=\"ui-button accent full\" uiRipple>Login</button>\r\n                        </div>\r\n                    </fieldset>\r\n                </form>\r\n            </div>\r\n            <div class=\"page bloqueado\">\r\n                <ui-toolbar class=\"flat\">\r\n                    <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"tabsPages.pagesGoToPage(1)\">\r\n                        <i class=\"material-icons\">arrow_back</i>\r\n                    </button>\r\n                </ui-toolbar>\r\n                <ui-card-content>\r\n                    <div>{{info.nome}}, seu usuário está bloqueado.</div>\r\n                </ui-card-content>\r\n            </div>\r\n            <div class=\"page bloqueado-por-horario\">\r\n                <ui-toolbar class=\"flat\">\r\n                    <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"tabsPages.pagesGoToPage(1)\">\r\n                        <i class=\"material-icons\">arrow_back</i>\r\n                    </button>\r\n                </ui-toolbar>\r\n                <ui-card-content>\r\n                    <div>{{info.nome}}, você está bloqueado à acessar neste horário.</div>\r\n                </ui-card-content>\r\n            </div>\r\n            <div class=\"page senha-expirada\">\r\n                <ui-toolbar class=\"flat\">\r\n                    <button class=\"ui-button flat icon\" type=\"button\" uiRipple (click)=\"tabsPages.pagesGoToPage(1)\">\r\n                        <i class=\"material-icons\">arrow_back</i>\r\n                    </button>\r\n                </ui-toolbar>\r\n                <form #senhaExpiradaForm=\"ngForm\" class=\"ui-validate on-submit on-dirty\" (submit)=\"redefinirSenha(senhaExpiradaForm, senhaExpirada)\">\r\n                    <ui-card-content>\r\n                        <div class=\"info-text secondary-text\">{{senhaExpirada.nome}}, por motivos de segurança expiramos sua senha. Por favor crie uma nova.</div>\r\n                        <ui-input-container>\r\n                            <input [type]=\"senhaExpirada.typeTextSenhaAntiga ? 'text' : 'password'\"\r\n                                   [(ngModel)]=\"senhaExpirada.senha\"\r\n                                   uiInput\r\n                                   required\r\n                                   name=\"senhaAntiga\"\r\n                                   #senhaExpiradaAntiga=\"ngModel\"\r\n                                   id=\"senha-antiga\"\r\n                                   class=\"accent\">\r\n                            <label>Senha antiga</label>\r\n                            <div class=\"suffix ui-button flat icon\" (click)=\"senhaExpirada.typeTextSenhaAntiga = !senhaExpirada.typeTextSenhaAntiga\" uiRipple>\r\n                                <i class=\"material-icons light\">{{senhaExpirada.typeTextSenhaAntiga ? 'visibility_off' : 'visibility'}}</i>\r\n                            </div>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"senhaExpiradaAntiga.errors && senhaExpiradaAntiga.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaAntiga.pristine && !senhaExpiradaAntiga.errors.required\">\r\n                                        Insira uma senha\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaAntiga.errors.wrongPassword\">\r\n                                        Senha incorreta\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <input [type]=\"senhaExpirada.typeTextNovaSenha ? 'text' : 'password'\"\r\n                                   [(ngModel)]=\"senhaExpirada.novaSenha\"\r\n                                   uiInput\r\n                                   required\r\n                                   name=\"novaSenha\"\r\n                                   #senhaExpiradaNovaSenha=\"ngModel\"\r\n                                   (ngModelChange)=\"validarSenhasDivergentes(senhaExpiradaForm)\"\r\n                                   id=\"nova-senha\"\r\n                                   class=\"accent\">\r\n                            <label>Nova senha</label>\r\n                            <div class=\"suffix ui-button flat icon\" (click)=\"senhaExpirada.typeTextNovaSenha = !senhaExpirada.typeTextNovaSenha\" uiRipple>\r\n                                <i class=\"material-icons light\">{{senhaExpirada.typeTextNovaSenha ? 'visibility_off' : 'visibility'}}</i>\r\n                            </div>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"senhaExpiradaNovaSenha.errors && senhaExpiradaNovaSenha.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaNovaSenha.pristine && !senhaExpiradaNovaSenha.errors.required\">\r\n                                        Insira uma senha\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                        <ui-input-container>\r\n                            <input [type]=\"senhaExpirada.typeTextConfirmacaoNovaSenha ? 'text' : 'password'\"\r\n                                   [(ngModel)]=\"senhaExpirada.confirmacaoNovaSenha\"\r\n                                   uiInput\r\n                                   required\r\n                                   name=\"confirmacaoSenha\"\r\n                                   #senhaExpiradaConfirmacaoNovaSenha=\"ngModel\"\r\n                                   (ngModelChange)=\"validarSenhasDivergentes(senhaExpiradaForm)\"\r\n                                   id=\"confirmacao-nova-senha\"\r\n                                   class=\"accent\">\r\n                            <label>Confirmação de senha</label>\r\n                            <div class=\"suffix ui-button flat icon\" (click)=\"senhaExpirada.typeTextConfirmacaoNovaSenha = !senhaExpirada.typeTextConfirmacaoNovaSenha\" uiRipple>\r\n                                <i class=\"material-icons light\">{{senhaExpirada.typeTextConfirmacaoNovaSenha ? 'visibility_off' : 'visibility'}}</i>\r\n                            </div>\r\n                            <div class=\"ui-messages\">\r\n                                <div *ngIf=\"senhaExpiradaConfirmacaoNovaSenha.errors && senhaExpiradaConfirmacaoNovaSenha.dirty\">\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaConfirmacaoNovaSenha.pristine && !senhaExpiradaConfirmacaoNovaSenha.errors.required\">\r\n                                        Insira uma senha\r\n                                    </div>\r\n                                    <div class=\"ui-message error\" [hidden]=\"!senhaExpiradaConfirmacaoNovaSenha.errors.notEqual\">\r\n                                        As senhas não conferem\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ui-input-container>\r\n                    </ui-card-content>\r\n                    <div class=\"ui-button-container cover\">\r\n                        <button class=\"ui-button accent full\" uiRipple>Redefinir senha</button>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </ui-tabs-pages>\r\n    </ui-card>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/views/auth/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* https://material.io/guidelines/motion/duration-easing.html#duration-easing-natural-easing-curves */\n/* Inspired by https://github.com/nilskaspersson/Google-Material-UI-Color-Palette */\n/* https://material.io/guidelines/resources/shadows.html */\n/deep/ app-root, :host {\n  height: 100%; }\n:host {\n  background: url(\"/assets/images/login-background.jpg\") center;\n  background-size: cover;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n:host > .core {\n    max-width: 420px;\n    width: 100%; }\n:host > .core .logo {\n      width: 280px; }\n:host > .core ui-card {\n      position: relative;\n      overflow: hidden; }\n:host > .core ui-card .ui-progress {\n        position: absolute; }\n:host > .core ui-card ui-card-title {\n        font-size: 18px;\n        padding: 32px 32px 0; }\n:host > .core ui-card .ui-list li {\n        padding: 0 24px; }\n:host > .core ui-card ui-card-content {\n        padding: 32px; }\n:host > .core ui-card .ui-button-container {\n        padding: 0 32px 32px; }\n:host > .core ui-card .senha-expirada ui-card-content, :host > .core ui-card .bloqueado ui-card-content, :host > .core ui-card .bloqueado-por-horario ui-card-content {\n        padding-top: 16px; }\n:host > .core ui-card .senha-expirada .info-text, :host > .core ui-card .bloqueado .info-text, :host > .core ui-card .bloqueado-por-horario .info-text {\n        margin-bottom: 24px; }\n"

/***/ }),

/***/ "./src/app/views/auth/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/api/api.service */ "./src/app/core/api/api.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(titleService, router, element, api) {
        this.titleService = titleService;
        this.router = router;
        this.element = element;
        this.api = api;
        this.preLogin = {};
        this.info = {
            matenhaConectado: true
        };
        this.senhaExpirada = {};
        this.authByEmail = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_BY_EMAIL;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.headers = { 'Content-Type': 'application/json' };
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.titleService.setTitle('Cronos - Login');
    };
    LoginComponent.prototype.isBright = function (color) {
        return ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiColor"].isBright(color);
    };
    LoginComponent.prototype.getInfo = function (form, info) {
        var _this = this;
        console.log(info);
        if (form.invalid || this.loading) {
            form.controls.usuario.markAsTouched();
            form.controls.usuario.markAsDirty();
            this.focusElement('#pre-login-usuario');
            return;
        }
        this.loading = true;
        this.api
            .http('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_API + "/login/dados", { headers: this.headers })
            .call({ login: info.usuario })
            .subscribe(function (res) {
            res.content.user = Object.assign(res.content.user, {
                usuario: info.usuario,
                matenhaConectado: true
            });
            _this.info = res.content.user;
            _this.tabsPages.pagesGoToPage(2);
            _this.focusElement('#login-senha', true);
            _this.loginForm.reset();
        }, function (res) {
            switch (res._status) {
                case 404:
                    form.controls.usuario.setErrors({ notFound: true });
                    break;
            }
        }, function () {
            _this.loading = false;
        });
    };
    LoginComponent.prototype.login = function (form, info) {
        var _this = this;
        var elementPassword = this.element.nativeElement.querySelector('#login-senha');
        if (form.invalid || this.loading) {
            form.controls.senha.markAsTouched();
            form.controls.senha.markAsDirty();
            elementPassword.focus();
            return;
        }
        this.loading = true;
        this.api
            .http('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_API + "/login", { headers: this.headers })
            .call({ login: info.usuario, senha: info.senha })
            .subscribe(function (res) {
            var content = res.content;
            _this.api.set(content.api, content.opcoes);
            _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"].setToken(content.token, info.matenhaConectado);
            _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"].setMenu(content.opcoes);
            _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"].setUser(content.user);
            _this.router.navigate(['/']);
        }, function (res) {
            switch (res.status) {
                case 401:
                    switch (res.error.executionCode) {
                        case 2:
                            form.controls.senha.setErrors({ wrongPassword: true });
                            elementPassword.focus();
                            break;
                        case 3:
                            _this.tabsPages.pagesGoToPage(3);
                            form.reset();
                            break;
                        case 4:
                            _this.senhaExpirada = Object.assign({}, info);
                            delete _this.senhaExpirada.senha;
                            _this.focusElement('#senha-antiga', true);
                            _this.tabsPages.pagesGoToPage(5);
                            form.reset();
                            break;
                        case 5:
                            _this.tabsPages.pagesGoToPage(4);
                            form.reset();
                            break;
                    }
                    break;
            }
        }, function () {
            _this.loading = false;
        });
    };
    LoginComponent.prototype.redefinirSenha = function (form, info) {
        var _this = this;
        if (form.invalid || this.loading) {
            ['senhaAntiga', 'novaSenha', 'confirmacaoSenha'].forEach(function (field) {
                form.controls[field].markAsTouched();
                form.controls[field].markAsDirty();
            });
            this.element.nativeElement.querySelector('.senha-expirada input.ng-invalid').focus();
            return;
        }
        this.loading = true;
        this.api
            .http('POST', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].AUTH_API + "/login/alterar-senha", { headers: this.headers })
            .call({
            login: info.usuario,
            senha: info.senha,
            novaSenha: info.novaSenha,
            confirmacaoNovaSenha: info.confirmacaoNovaSenha,
        })
            .subscribe(function (res) {
            _this.tabsPages.pagesGoToPage(2);
            setTimeout(function () {
                _this.senhaExpirada = {};
                form.reset();
            }, 280);
        }, function (res) {
            switch (res._status) {
                case 400:
                    _this.validarSenhasDivergentes(form);
                    break;
                case 401:
                    form.controls.senhaAntiga.setErrors({ wrongPassword: true });
                    _this.focusElement('#senha-antiga');
                    break;
                case 404:
                    ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiSnackbar"].show({
                        text: 'Não conseguimos encontrar seu usuário',
                        actionText: 'Refazer login',
                        action: function (close) {
                            _this.tabsPages.pagesGoToPage(1);
                            form.reset();
                            close();
                        }
                    });
                    break;
            }
        }, function () {
            _this.loading = false;
        });
    };
    LoginComponent.prototype.validarSenhasDivergentes = function (form) {
        if (this.senhaExpirada.novaSenha !== this.senhaExpirada.confirmacaoNovaSenha) {
            setTimeout(function () { return form.controls.confirmacaoSenha.setErrors({ notEqual: true }); });
        }
    };
    LoginComponent.prototype.focusElement = function (selector, withDelay) {
        var _this = this;
        setTimeout(function () {
            _this.element.nativeElement.querySelector(selector).focus();
        }, withDelay ? 280 : 0);
    };
    LoginComponent.prototype.backToLogin = function () {
        this.tabsPages.pagesGoToPage(1);
        this.focusElement('#pre-login-usuario');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('tabsPages'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "tabsPages", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loginForm'),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "loginForm", void 0);
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _core_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/auth/login/login.module.ts":
/*!**************************************************!*\
  !*** ./src/app/views/auth/login/login.module.ts ***!
  \**************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/views/auth/login/login.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/views/error/error.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/error/error.module.ts ***!
  \*********************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found/not-found.module */ "./src/app/views/error/not-found/not-found.module.ts");
/* harmony import */ var _internal_internal_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./internal/internal.module */ "./src/app/views/error/internal/internal.module.ts");
/* harmony import */ var _forbidden_forbidden_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forbidden/forbidden.module */ "./src/app/views/error/forbidden/forbidden.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ErrorModule = /** @class */ (function () {
    function ErrorModule() {
    }
    ErrorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _not_found_not_found_module__WEBPACK_IMPORTED_MODULE_1__["NotFoundModule"],
                _internal_internal_module__WEBPACK_IMPORTED_MODULE_2__["InternalModule"],
                _forbidden_forbidden_module__WEBPACK_IMPORTED_MODULE_3__["ForbiddenModule"]
            ],
            exports: [],
            declarations: [],
            providers: [],
        })
    ], ErrorModule);
    return ErrorModule;
}());



/***/ }),

/***/ "./src/app/views/error/error.routes.ts":
/*!*********************************************!*\
  !*** ./src/app/views/error/error.routes.ts ***!
  \*********************************************/
/*! exports provided: ERROR_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERROR_ROUTES", function() { return ERROR_ROUTES; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/views/error/not-found/not-found.component.ts");
/* harmony import */ var _internal_internal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal/internal.component */ "./src/app/views/error/internal/internal.component.ts");
/* harmony import */ var _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forbidden/forbidden.component */ "./src/app/views/error/forbidden/forbidden.component.ts");



var ERROR_ROUTES = [
    { path: 'internal', component: _internal_internal_component__WEBPACK_IMPORTED_MODULE_1__["InternalComponent"] },
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"] },
    { path: 'forbidden', component: _forbidden_forbidden_component__WEBPACK_IMPORTED_MODULE_2__["ForbiddenComponent"] },
    { path: '**', redirectTo: 'not-found' }
];


/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Forbidden error</p>\r\n"

/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.component.ts ***!
  \**************************************************************/
/*! exports provided: ForbiddenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenComponent", function() { return ForbiddenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ForbiddenComponent = /** @class */ (function () {
    function ForbiddenComponent() {
    }
    ForbiddenComponent.prototype.ngOnInit = function () {
    };
    ForbiddenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forbidden',
            template: __webpack_require__(/*! ./forbidden.component.html */ "./src/app/views/error/forbidden/forbidden.component.html"),
            styles: [__webpack_require__(/*! ./forbidden.component.scss */ "./src/app/views/error/forbidden/forbidden.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ForbiddenComponent);
    return ForbiddenComponent;
}());



/***/ }),

/***/ "./src/app/views/error/forbidden/forbidden.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/error/forbidden/forbidden.module.ts ***!
  \***********************************************************/
/*! exports provided: ForbiddenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForbiddenModule", function() { return ForbiddenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _forbidden_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forbidden.component */ "./src/app/views/error/forbidden/forbidden.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForbiddenModule = /** @class */ (function () {
    function ForbiddenModule() {
    }
    ForbiddenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_forbidden_component__WEBPACK_IMPORTED_MODULE_1__["ForbiddenComponent"]],
            providers: [],
        })
    ], ForbiddenModule);
    return ForbiddenModule;
}());



/***/ }),

/***/ "./src/app/views/error/internal/internal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/views/error/internal/internal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Internal error</p>\r\n"

/***/ }),

/***/ "./src/app/views/error/internal/internal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/views/error/internal/internal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/internal/internal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/views/error/internal/internal.component.ts ***!
  \************************************************************/
/*! exports provided: InternalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalComponent", function() { return InternalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternalComponent = /** @class */ (function () {
    function InternalComponent() {
    }
    InternalComponent.prototype.ngOnInit = function () {
    };
    InternalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-internal',
            template: __webpack_require__(/*! ./internal.component.html */ "./src/app/views/error/internal/internal.component.html"),
            styles: [__webpack_require__(/*! ./internal.component.scss */ "./src/app/views/error/internal/internal.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InternalComponent);
    return InternalComponent;
}());



/***/ }),

/***/ "./src/app/views/error/internal/internal.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/error/internal/internal.module.ts ***!
  \*********************************************************/
/*! exports provided: InternalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternalModule", function() { return InternalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _internal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./internal.component */ "./src/app/views/error/internal/internal.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InternalModule = /** @class */ (function () {
    function InternalModule() {
    }
    InternalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_internal_component__WEBPACK_IMPORTED_MODULE_1__["InternalComponent"]],
            providers: [],
        })
    ], InternalModule);
    return InternalModule;
}());



/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.html":
/*!****************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Error 404</p>\r\n"

/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/error/not-found/not-found.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.component.ts ***!
  \**************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/views/error/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/views/error/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/views/error/not-found/not-found.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/error/not-found/not-found.module.ts ***!
  \***********************************************************/
/*! exports provided: NotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundModule", function() { return NotFoundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./not-found.component */ "./src/app/views/error/not-found/not-found.component.ts");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotFoundModule = /** @class */ (function () {
    function NotFoundModule() {
    }
    NotFoundModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            exports: [],
            declarations: [_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]],
            providers: [],
        })
    ], NotFoundModule);
    return NotFoundModule;
}());



/***/ }),

/***/ "./src/app/views/main/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/main/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/main/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/main/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(titleService, toolbarService) {
        this.titleService = titleService;
        this.toolbarService = toolbarService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Home');
        this.toolbarService.set('MedSafe - Home');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/main/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/views/main/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_1__["UiToolbarService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/main/home/home.module.ts":
/*!************************************************!*\
  !*** ./src/app/views/main/home/home.module.ts ***!
  \************************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/views/main/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            exports: [],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]],
            providers: [],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/views/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ui-toolbar class=\"fixed flat elevate-on-scroll primary elevate-on-s960\" id=\"app-header\">\r\n    <button (click)=\"menuOpen = true\" class=\"ui-button flat icon\" uiRipple>\r\n        <i class=\"material-icons\">menu</i>\r\n    </button>\r\n    <!-- <div class=\"logo\">\r\n        <img src=\"assets/images/logotipo-negativo.png\" alt=\"Cronos logo\" title=\"Cronos logo\">\r\n    </div> -->\r\n    <span class=\"title\">{{title}}</span>\r\n    <div class=\"align-right\">\r\n        <!-- <button class=\"ui-button flat icon\" uiRipple>\r\n            <i class=\"material-icons\">notifications</i>\r\n            <span class=\"badge\">2</span>\r\n        </button> -->\r\n        <div class=\"avatar\"\r\n             [uiMenuTrigger]=\"menuUser\"\r\n             menu-align=\"right\"\r\n             theme-class=\"menu-user\"\r\n             [ngStyle]=\"{'background-image': user.imagem ? 'url(' + user.imagem + ')' : '',\r\n                         'background-color': user.imagem ? 'white' : user.cor,\r\n                         'color': isBright(user.cor) ? 'black': 'white'}\">\r\n            <span *ngIf=\"user && !user.imagem && user.nome\">{{user.nome.charAt(0)}}</span>\r\n        </div>\r\n    </div>\r\n</ui-toolbar>\r\n\r\n<!-- Add class 'persistent' para deixar o menu persistente, deve também descomentar o código no main.component -->\r\n<ui-nav-drawer [(open)]=\"menuOpen\">\r\n    <ui-toolbar class=\"flat\">\r\n        <button (click)=\"menuOpen = false\" class=\"ui-button flat icon\" uiRipple>\r\n            <i class=\"material-icons\">menu</i>\r\n        </button>\r\n        <div class=\"logo\">\r\n            <!-- <img src=\"assets/images/logotipo-menu.png\" alt=\"Cronos logo\" title=\"Cronos logo\"> -->\r\n        </div>\r\n    </ui-toolbar>\r\n    <div class=\"ui-nav-drawer-overflow\">\r\n        <div class=\"ui-list\">\r\n            <a class=\"ui-list-item\" uiRipple routerLink=\"/\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">Home</a>\r\n        </div>\r\n        <ui-list [list]=\"menu\" [item-model]=\"menuConfig\"></ui-list>\r\n    </div>\r\n</ui-nav-drawer>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<ui-menu #menuUser>\r\n    <header>\r\n        <div class=\"avatar\"\r\n             menu-align=\"right\"\r\n             [ngStyle]=\"{'background-image': user.imagem ? 'url(' + user.imagem + ')' : '',\r\n                         'background-color': user.imagem ? 'white' : user.cor,\r\n                         'color': isBright(user.cor) ? 'black': 'white'}\">\r\n            <span *ngIf=\"!user.imagem\">{{user.nome?.charAt(0)}}</span>\r\n        </div>\r\n        <div class=\"primary-text\">{{user.nome}}</div>\r\n    </header>\r\n    <div class=\"ui-menu-content size-3x\">\r\n        <div class=\"ui-menu-item\" uiRipple (click)=\"logoff()\">\r\n            Sair\r\n        </div>\r\n    </div>\r\n</ui-menu>\r\n\r\n"

/***/ }),

/***/ "./src/app/views/main/main.component.scss":
/*!************************************************!*\
  !*** ./src/app/views/main/main.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host > /deep/ ui-nav-drawer ui-list .ui-list {\n  padding: 0; }\n\n:host > ui-toolbar .avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  margin: 12px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n/deep/ .menu-user header {\n  display: flex;\n  align-items: center; }\n\n/deep/ .menu-user .avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-position: center;\n  background-size: cover;\n  margin: 12px;\n  cursor: default;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n"

/***/ }),

/***/ "./src/app/views/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-smn-ui */ "./node_modules/ng-smn-ui/esm5/ng-smn-ui.js");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = /** @class */ (function () {
    function MainComponent(titleService, toolbarService, router) {
        var _this = this;
        this.titleService = titleService;
        this.toolbarService = toolbarService;
        this.router = router;
        toolbarService.change.subscribe(function (title) {
            _this.title = title;
        });
        this.menuConfig = {
            id: '_id',
            parentId: 'idMae',
            url: 'url',
            name: 'nome'
        };
        this.menu = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getMenu();
        this.user = _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].getUser();
    }
    MainComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('UnifaSystem');
        this.toolbarService.set('');
        this.menuOpen = false;
        this.toolbarService.registerMainToolbar(document.getElementById('app-header'));
        /**
         * Descomentar o código para deixar o menu persistente
         * const isNavDrawerPersistent = UiCookie.get('NavDrawerPersistent') === 'true';
         * if (isNavDrawerPersistent) {
         *      this.menuOpen = true;
         * }
         * */
    };
    MainComponent.prototype.ngAfterViewInit = function () {
    };
    MainComponent.prototype.isBright = function (color) {
        return ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiColor"].isBright(color);
    };
    MainComponent.prototype.logoff = function () {
        _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"].remove();
        this.router.navigate(['/login']);
    };
    MainComponent.prototype.getMenu = function () {
        return [
            {
                id: 1,
                parentId: null,
                url: '/disciplina',
                name: 'Disciplinas'
            },
            {
                id: 2,
                parentId: null,
                url: '/curso',
                name: 'Cursos'
            },
            {
                id: 3,
                parentId: null,
                url: '/professor',
                name: 'Professores'
            },
            {
                id: 4,
                parentId: null,
                url: '/aluno',
                name: 'Alunos'
            },
        ];
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/views/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/views/main/main.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            ng_smn_ui__WEBPACK_IMPORTED_MODULE_2__["UiToolbarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/views/main/main.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/main/main.module.ts ***!
  \*******************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared.module */ "./src/app/shared.module.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/utils/user/user.service */ "./src/app/core/utils/user/user.service.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "./src/app/views/main/home/home.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"]
            ],
            exports: [],
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]],
            providers: [_core_utils_user_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]],
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/views/main/main.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/views/main/main.routes.ts ***!
  \*******************************************/
/*! exports provided: MAIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component */ "./src/app/views/main/main.component.ts");
/* harmony import */ var _auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/guard/auth.guard */ "./src/app/views/auth/guard/auth.guard.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/views/main/home/home.component.ts");



var MAIN_ROUTES = [{
        path: '',
        component: _main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
        canActivate: [_auth_guard_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"]],
        children: [
            { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
        ]
    }];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // Sistema
    SYSTEM_PREFIX: 'medsafe',
    // SMN Auth
    AUTH_API: 'http://localhost:4200',
    AUTH_BY_EMAIL: true // O sistema faz o login atráves do e-mail
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\guilh\Desktop\Repositorio\MedSafe\medsafe-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map