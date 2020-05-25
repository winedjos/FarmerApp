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
var LandDetail_1 = require("../../actions/LandDetail");
var initialLandDetailData = {
    Landitems: [],
    LandItem: {},
    status: {
        statusCode: 300,
        statusDisplay: "",
        statusValue: true,
    },
    landDetailInput: {
        ID: 0,
        StateId: 0,
        city: "",
        village: "",
        pattaNumber: "",
        areaSize: "",
        name: "",
    },
    isFormSubmit: true,
};
var LandDetailData = function (state, action) {
    if (state === void 0) { state = initialLandDetailData; }
    switch (action.type) {
        case LandDetail_1.STORE_LANDDETAIL_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: true, landDetailInput: action.input });
        case LandDetail_1.STORE_LANDDETAIL_COMPLETED:
            return __assign(__assign({}, state), { isFormSubmit: false });
        case LandDetail_1.STORE_LANDDETAIL_FAILED:
            return __assign(__assign({}, state), { isFormSubmit: true });
        case LandDetail_1.GET_LANDDETAIL_STARTED:
            return __assign({}, state);
        case LandDetail_1.GET_LANDDETAIL_COMPLETED:
            return __assign(__assign({}, state), { Landitems: action.payload });
        case LandDetail_1.GET_LANDDETAIL_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case LandDetail_1.DELETE_LANDDETAIL_STARTED:
            return __assign(__assign({}, state), { isFormSubmit: false, partitionLandInput: action.input });
        case LandDetail_1.DELETE_LANDDETAIL_COMPLETED:
            var LandList = state.Landitems;
            if (action.input.id != 0) {
                var index = LandList.findIndex(function (Land) { return Land.id === action.input.id; });
                LandList.splice(index, 1);
            }
            ;
            return __assign(__assign({}, state), { isFormSubmit: true, LandInput: action.input, LandList: LandList });
        case LandDetail_1.DELETE_LANDDETAIL_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        case LandDetail_1.GET_LANDDETAILBYID_STARTED:
            return __assign(__assign({}, state), { LandInput: action.payload });
        case LandDetail_1.GET_LANDDETAIBYID_COMPLETED:
            return __assign(__assign({}, state), { LandItem: action.payload });
        case LandDetail_1.GET_LANDDETAILBYID_FAILED:
            return __assign(__assign({}, state), { error: action.error });
        default:
            return state;
    }
};
exports.default = LandDetailData;
//# sourceMappingURL=LandDetail.js.map