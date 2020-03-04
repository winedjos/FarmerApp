"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
require("./Reg.scss");
var Header_1 = require("../../common/Header");
var Registration_1 = require("../../../store/actions/Registration");
var react_redux_1 = require("react-redux");
var Registration = function (_a) {
    //const [formSubmit, setformSubmit] = useState(false);
    //React.useEffect(() => {
    //  setformSubmit(false);
    //}, []);
    var dispatch = _a.dispatch, regData = _a.regData;
    var onHandleSubmit = function () {
        dispatch(Registration_1.storeRegData(regData.regInput));
    };
    var handleNameChange = function (event) {
        regData.regInput.name = event.target.value;
    };
    var handleMobileNumberChange = function (event) {
        regData.regInput.mobileNumber = event.target.value;
    };
    var handleEmailChange = function (event) {
        regData.regInput.email = event.target.value;
    };
    //const handleSumbit = () => {
    //  window.location.href = "/homes";
    //}
    return (React.createElement(react_1.IonPage, null,
        React.createElement(Header_1.default, null),
        React.createElement(react_1.IonContent, { className: ".reg-login" },
            React.createElement("div", { className: "bg-image" },
                React.createElement("div", { className: "reg-head" },
                    React.createElement("h1", null, "Registration")),
                React.createElement("form", { className: "form" },
                    React.createElement(react_1.IonRow, null,
                        React.createElement(react_1.IonCol, null,
                            React.createElement(react_1.IonText, { className: "reg-fields" },
                                "Name ",
                                React.createElement("input", { type: "text", placeholder: "Peter", className: "input-text", onChange: handleNameChange, required: true }),
                                "Mobile Number ",
                                React.createElement("input", { type: "text", placeholder: "12345 67890", className: "input-text", onChange: handleMobileNumberChange, required: true }),
                                "Email ",
                                React.createElement("input", { type: "text", placeholder: "peter@gmailx.com", className: "input-text", onChange: handleEmailChange, required: true }))))))),
        React.createElement(react_1.IonFooter, { className: "footcolor" },
            React.createElement("button", { className: "reg-btn", onClick: onHandleSubmit }, " Submit "))));
};
var mapStateToProps = function (state) {
    var regData = state.regData;
    return {
        regData: regData
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Registration);
//# sourceMappingURL=Registration.js.map