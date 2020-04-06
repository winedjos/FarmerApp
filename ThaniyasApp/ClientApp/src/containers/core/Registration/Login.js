"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
require("./Reg.scss");
var react_redux_1 = require("react-redux");
var Login_1 = require("../../../store/actions/Login");
var Login = function (_a) {
    var dispatch = _a.dispatch, loginData = _a.loginData;
    var onHandleSubmit = function (e) {
        e.preventDefault();
        dispatch(Login_1.fetchLoginData(loginData.loginInput));
    };
    var handleUserNameChange = function (event) {
        loginData.loginInput.userName = event.target.value;
    };
    var handlePWDChange = function (event) {
        loginData.loginInput.password = event.target.value;
    };
    var isShowError = false;
    var loggedInString = localStorage.getItem('AUTHDATA');
    if (loggedInString) {
        var loggedInData = JSON.parse(loggedInString);
        if (loggedInData) {
            if (loggedInData.status.statusValue) {
                window.location.href = "/home";
            }
        }
    }
    if (loginData && loginData.isFormSubmit && loginData.action.status.statusValue) {
        isShowError = false;
        window.localStorage.setItem('AUTHDATA', JSON.stringify(loginData));
        window.location.href = "/home";
    }
    else if (loginData && loginData.isFormSubmit && !loginData.status.statusValue) {
        isShowError = true;
        window.localStorage.setItem('AUTHDATA', "");
    }
    return (React.createElement(react_1.IonPage, null,
        React.createElement(react_1.IonContent, { className: "reg-login" },
            React.createElement("div", { className: "bg-image" },
                React.createElement("div", { className: "reg-head" },
                    React.createElement("h1", null, "Login")),
                React.createElement("form", { className: "form" },
                    React.createElement(react_1.IonRow, null,
                        React.createElement(react_1.IonCol, null,
                            React.createElement(react_1.IonText, { className: "reg-fields" },
                                "User Name ",
                                React.createElement("input", { type: "text", placeholder: "User Name", onChange: handleUserNameChange, className: "input-text", required: true }),
                                "Password ",
                                React.createElement("input", { type: "password", placeholder: "Password", onChange: handlePWDChange, className: "input-text", required: true }),
                                React.createElement("button", { className: "reg-btn" }, " Login ")))),
                    isShowError && (React.createElement("span", null, loginData.action.status.statusDisplay))))),
        React.createElement(react_1.IonFooter, { className: "footcolor" },
            React.createElement("button", { className: "reg-btn", onClick: onHandleSubmit }, " Login "))));
};
var mapStateToProps = function (state) {
    var loginData = state.loginData;
    return {
        loginData: loginData
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Login);
//# sourceMappingURL=Login.js.map