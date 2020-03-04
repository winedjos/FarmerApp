"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
//import './Reg.scss';
var Header_1 = require("../../common/Header");
var Report = function () {
    //<img src="assets/share.png" height="75" width="75"></img>
    return (React.createElement(react_1.IonPage, null,
        React.createElement(Header_1.default, null),
        React.createElement(react_1.IonContent, { className: ".reg-login" },
            React.createElement("div", { className: "bg-image" },
                React.createElement("div", { className: "reg-head" },
                    React.createElement("h1", null, "Report")),
                React.createElement("form", { className: "form" },
                    React.createElement("button", { className: "view-btn" }, " View "),
                    React.createElement("img", { src: "assets/share.png", className: "share-icon" }),
                    React.createElement("table", { className: "table" },
                        React.createElement("tr", null,
                            React.createElement("th", null, "SNO"),
                            React.createElement("th", null, "Date"),
                            React.createElement("th", null, "Description"),
                            React.createElement("th", null, "Expenses"))))))));
};
exports.default = Report;
//# sourceMappingURL=Report.js.map