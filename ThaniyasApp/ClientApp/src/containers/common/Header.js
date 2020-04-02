"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
var react_router_1 = require("react-router");
var Http_1 = require("../../utils/Http");
var Header = function (_a) {
    var history = _a.history;
    // const BrowserHistory = require('react-router/lib/BrowserHistory').default;
    // onClick = { BrowserHistory.goBack }
    var clickLogout = function () {
        //this.props.login.dispatch(fetchLogout());
        Http_1.HttpLocal.axios().get('/Login/SignOutbyClient')
            .then(function (e) {
            var results = e.data;
            window.localStorage.setItem('AUTHDATA', "");
            window.location.href = "/login";
        })
            .catch(function (e) {
        });
    };
    return (React.createElement(react_1.IonHeader, { className: "headcolor" },
        React.createElement("img", { src: "assets/backarrow.png", height: "20", onClick: history.goBack, className: "arrow" }),
        React.createElement("img", { src: "assets/Logocropped.png", height: "40", className: "logo" }),
        React.createElement("img", { src: "assets/searchicon.png", height: "20", className: "search" }),
        React.createElement(react_1.IonSelect, { placeholder: "Language", className: "drop" },
            React.createElement(react_1.IonSelectOption, { value: "english", selected: true }, "English"),
            React.createElement(react_1.IonSelectOption, { value: "tamil" }, "Tamil")),
        React.createElement("button", { onClick: clickLogout, className: "Logout" }, " Logout ")));
};
//const mapStateToProps = (state: any) => {
//  const { loginData } = state;
//  return {
//    loginData
//  };
//};
var Child = react_router_1.withRouter(Header);
exports.default = Child;
//# sourceMappingURL=Header.js.map