"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var RegistrationAPI = /** @class */ (function () {
    function RegistrationAPI() {
    }
    RegistrationAPI.storeRegistration = function (input) {
        var obj = JSON.stringify(input);
        var tObj = JSON.parse(obj);
        var url = '/api/Users/add-user';
        if (input.id && input.id !== 0) {
            // url = '/api/Harvesting/add-Harvestings/' + input.id + "?";
            return Http_1.Http.axios().post(url, obj, {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Headers": "*"
                }
            })
                .then(function (response) {
                return response;
            }).catch(function (e) {
                console.log("Error in post" + e);
                return e.response;
            });
        }
        else {
            return Http_1.Http.axios().post(url, tObj)
                .catch(function (e) {
                return e.response;
            });
        }
    };
    return RegistrationAPI;
}());
exports.RegistrationAPI = RegistrationAPI;
//# sourceMappingURL=RegistrationAPI.js.map