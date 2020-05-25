"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var Registration_1 = require("./Registration/Registration");
var Harvestings_1 = require("./Harvestings/Harvestings");
var WeedRemove_1 = require("./WeedRemove/WeedRemove");
var Seedings_1 = require("./Seedings/Seedings");
var Sales_1 = require("./Sales/Sales");
var Plowing_1 = require("./Plowings/Plowing");
var PestControl_1 = require("./PestControl/PestControl");
var PartitionLand_1 = require("./PartitionLand/PartitionLand");
var LandDetail_1 = require("./LandDetail/LandDetail");
var SateList_1 = require("./StateList/SateList");
var Login_1 = require("./Login/Login");
var reducers = redux_1.combineReducers({
    regData: Registration_1.default,
    harvestData: Harvestings_1.default,
    weedRemoveData: WeedRemove_1.default,
    seedData: Seedings_1.default,
    saleData: Sales_1.default,
    plowingData: Plowing_1.default,
    pestControlData: PestControl_1.default,
    PartitionLandData: PartitionLand_1.default,
    LandDetailData: LandDetail_1.default,
    loginData: Login_1.default,
    stateListData: SateList_1.default
});
exports.default = reducers;
//# sourceMappingURL=index.js.map