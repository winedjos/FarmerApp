"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var Registration_1 = require("../../actions/Registration");
var initialRegData = {
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    regInput: {
        userName: "",
        password: "",
        mobileNumber: "",
        email: "",
    },
    isFormSubmit: false,
};
var regData = function (state, action) {
    if (state === void 0) { state = initialRegData; }
    switch (action.type) {
        case Registration_1.STORE_REG_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, regInput: action.input });
        case Registration_1.STORE_REG_COMPLETED:
            return __assign(__assign({}, state), { isFormSubmit: true, status: action.payload, loginInput: action.input, userDetail: action.payload.userDetail });
        case Registration_1.STORE_REG_FAILED:
            return __assign({}, state);
        default:
            return state;
    }
};
exports.default = regData;
//# sourceMappingURL=Registration.js.map