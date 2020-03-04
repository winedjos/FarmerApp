"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var PlowingAPI = /** @class */ (function () {
    function PlowingAPI() {
    }
    PlowingAPI.addPlowing = function (input) {
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/Plowing/add-Plowing';
        return Http_1.Http.axios().post(url, tObj)
            .catch(function (e) {
            return e.response;
        });
    };
    PlowingAPI.getPlowinglList = function () {
        return Http_1.Http.axios().get('/api/Plowing/plowing-list')
            .catch(function (e) {
            return e.response;
        });
    };
    PlowingAPI.getPlowinglByIdList = function (id) {
        return Http_1.Http.axios().get('/api/Plowing/get-Plowing/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    PlowingAPI.deletePlowing = function (id) {
        return Http_1.Http.axios().delete('/api/Plowing/delete-Plowing/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return PlowingAPI;
}());
exports.PlowingAPI = PlowingAPI;
//# sourceMappingURL=PlowingAPI.js.map