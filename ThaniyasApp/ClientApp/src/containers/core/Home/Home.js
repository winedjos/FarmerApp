"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
//import './Reg.scss';
var Header_1 = require("../../common/Header");
var Home = function () {
    // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
    return (React.createElement(react_1.IonPage, null,
        React.createElement(Header_1.default, null),
        React.createElement(react_1.IonContent, { className: ".reg-login" },
            React.createElement("div", { className: "bg-image" },
                React.createElement("div", { className: "reg-head" },
                    React.createElement("h1", null, "Home Page")),
                React.createElement("form", { className: "form" },
                    React.createElement(react_1.IonRow, null,
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "manageLands" },
                                React.createElement("img", { src: "assets/ManageLand.png", height: "75", width: "75" }),
                                "Manage Land")),
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "managePartitions" },
                                React.createElement("img", { src: "assets/ManagePartition.png", height: "75", width: "75" }),
                                "Manage Partition")),
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "plowings" },
                                React.createElement("img", { src: "assets/Plowing.png", height: "75", width: "75" }),
                                "Plowing"))),
                    React.createElement(react_1.IonRow, null,
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "seedings" },
                                React.createElement("img", { src: "assets/Seeding.png", height: "75", width: "75" }),
                                "Seeding")),
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "pestControls" },
                                React.createElement("img", { src: "assets/PestControl.png", height: "75", width: "75" }),
                                "Pest Control")),
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "weedRemoves" },
                                React.createElement("img", { src: "assets/WeedRemove.png", height: "75", width: "75" }),
                                "Weed Remove"))),
                    React.createElement(react_1.IonRow, null,
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "harvestings" },
                                React.createElement("img", { src: "assets/Harvesting.png", height: "75", width: "75" }),
                                "Harvesting")),
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "sales" },
                                React.createElement("img", { src: "assets/Sale.png", height: "75", width: "75" }),
                                "Sale")),
                        React.createElement(react_1.IonCol, { className: "h-img" },
                            React.createElement("a", { href: "reports" },
                                React.createElement("img", { src: "assets/Report.png", height: "75", width: "75" }),
                                "Report"))))))));
};
exports.default = Home;
//# sourceMappingURL=Home.js.map