"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
var react_router_1 = require("react-router");
var Footer = function (_a) {
    var history = _a.history;
    return (React.createElement(react_1.IonFooter, { className: "md footer-md hydrated" },
        React.createElement("div", null,
            React.createElement("button", { className: "cancel-btn", onClick: history.goBack }, " CANCEL "))));
};
var Child = react_router_1.withRouter(Footer);
exports.default = Child;
//# sourceMappingURL=Footer.js.map