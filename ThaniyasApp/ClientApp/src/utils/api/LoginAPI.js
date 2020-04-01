"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var LoginAPI = /** @class */ (function () {
    function LoginAPI() {
    }
    //const axios = require('axios');
    LoginAPI.fetchLoginData = function (input) {
        var obj = JSON.stringify(input);
        return Http_1.HttpLocal.axios().post('/Login/GetUserbyLogin', obj, { headers: { 'Content-Type': 'application/json' } })
            .catch(function (e) {
            return e.response;
        });
    };
    LoginAPI.fetchLogOut = function () {
        return Http_1.HttpLocal.axios().get('/Login/SignOutbyClient')
            .catch(function (e) {
            return e.response;
        });
    };
    LoginAPI.fetchCheckLoggedUser = function (userName) {
        return Http_1.HttpLocal.axios().get('/Login/CheckIsCurrentUserValid?userName=' + userName)
            .catch(function (e) {
            return e.response;
        });
    };
    return LoginAPI;
}());
exports.LoginAPI = LoginAPI;
//# sourceMappingURL=LoginAPI.js.map