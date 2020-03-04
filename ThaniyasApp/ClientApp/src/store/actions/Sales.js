"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORE_SALES_STARTED = "STORE_SALES_STARTED";
exports.STORE_SALES_COMPLETED = "STORE_SALES_COMPLETED";
exports.STORE_SALES_FAILED = "STORE_SALES_FAILED";
exports.GET_SALES_STARTED = "GET_SALES_STARTED";
exports.GET_SALES_COMPLETED = "GET_SALES_COMPLETED";
exports.GET_SALES_FAILED = "GET_SALES_FAILED";
//export const SAVE_PARTITIONLAND_STARTED = "SAVE_PARTITIONLAND_STARTED";
//export const SAVE_PARTITIONLAND_COMPLETED = "SAVE_PARTITIONLAND_COMPLETED";
//export const SAVE_PARTITIONLAND_FAILED = "SAVE_PARTITIONLAND_FAILED";
exports.DELETE_SALES_STARTED = "DELETE_SALES_STARTED";
exports.DELETE_SALES_COMPLETED = "DELETE_SALES_COMPLETED";
exports.DELETE_SALES_FAILED = "DELETE_SALES_FAILED";
exports.GET_SALESBYID_STARTED = "GET_SALESBYID_STARTED";
exports.GET_SALESBYID_COMPLETED = "GET_SALESBYID_COMPLETED";
exports.GET_SALESBYID_FAILED = "GET_SALESBYID_FAILED";
exports.storeSaleData = function (salesInput) {
    return {
        type: exports.STORE_SALES_STARTED,
        input: salesInput
    };
};
exports.getSaleList = function () {
    return {
        type: exports.GET_SALES_STARTED,
    };
};
exports.getSaleById = function (id) {
    return {
        type: exports.GET_SALESBYID_STARTED,
        id: id
    };
};
//export const savePartitionLand = (input: any) => {
//  return {
//    type: SAVE_PARTITIONLAND_STARTED,
//    //payload: status,
//    input: input
//  };
//};
exports.deleteSale = function (id) {
    return {
        type: exports.DELETE_SALES_STARTED,
        id: id
    };
};
//# sourceMappingURL=Sales.js.map