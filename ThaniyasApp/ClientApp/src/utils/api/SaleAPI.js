"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var SaleAPI = /** @class */ (function () {
    function SaleAPI() {
    }
    SaleAPI.addSale = function (input) {
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/Sale/add-Sale';
        return Http_1.Http.axios().post(url, tObj)
            .catch(function (e) {
            return e.response;
        });
    };
    SaleAPI.getSaleList = function () {
        return Http_1.Http.axios().get('/api/Sale/sale-list')
            .catch(function (e) {
            return e.response;
        });
    };
    SaleAPI.getSaleByIdList = function (id) {
        return Http_1.Http.axios().get('/api/Sale/get-Sale/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    SaleAPI.deleteSale = function (id) {
        return Http_1.Http.axios().delete('/api/Sale/delete-Sale/' + id)
            .catch(function (e) {
            return e.response;
        });
    };
    return SaleAPI;
}());
exports.SaleAPI = SaleAPI;
//# sourceMappingURL=SaleAPI.js.map