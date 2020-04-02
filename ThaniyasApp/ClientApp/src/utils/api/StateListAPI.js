"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Http_1 = require("../Http");
var StateListAPI = /** @class */ (function () {
    function StateListAPI() {
    }
    StateListAPI.getStateList = function () {
        return Http_1.Http.axios().get('/api/StateList/get-StateList')
            .catch(function (e) {
            return e.response;
        });
    };
    return StateListAPI;
}());
exports.StateListAPI = StateListAPI;
//# sourceMappingURL=StateListAPI.js.map