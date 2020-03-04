"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
var Header = function () {
    return (React.createElement(react_1.IonHeader, { className: "headcolor" },
        React.createElement("a", { href: "/homes" },
            React.createElement("img", { src: "assets/backarrow.png", height: "20", className: "arrow" })),
        React.createElement("img", { src: "assets/Logocropped.png", height: "40", className: "logo" }),
        React.createElement("img", { src: "assets/searchicon.png", height: "20", className: "search" }),
        React.createElement(react_1.IonSelect, { placeholder: "Language", className: "drop" },
            React.createElement(react_1.IonSelectOption, { value: "english", selected: true }, "English"),
            React.createElement(react_1.IonSelectOption, { value: "tamil" }, "Tamil"))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map