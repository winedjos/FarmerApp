"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var API_URL = "";
var Local_URL = "";
if (process.env.REACT_APP_API_URL) {
    API_URL = process.env.REACT_APP_API_URL;
}
if (process.env.REACT_APP_Local_URL) {
    Local_URL = process.env.REACT_APP_Local_URL;
}
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.axios = function () {
        return axios_1.default.create({
            baseURL: API_URL
        });
    };
    return Http;
}());
exports.Http = Http;
var HttpLocal = /** @class */ (function () {
    function HttpLocal() {
    }
    HttpLocal.axios = function () {
        return axios_1.default.create({
            baseURL: Local_URL
        });
    };
    return HttpLocal;
}());
exports.HttpLocal = HttpLocal;
//# sourceMappingURL=Http.js.map