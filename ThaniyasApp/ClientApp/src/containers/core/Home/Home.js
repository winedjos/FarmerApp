"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("@ionic/react");
var React = require("react");
//import './Reg.scss';
var Header_1 = require("../../common/Header");
var Home = /** @class */ (function (_super) {
    __extends(Home, _super);
    function Home() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //constructor(props:any) {
    //  super(props);
    //  this.state = {
    //    dropdownOpen: false,
    //    dropdownUsersOpen: false,
    //    dropdownLogoutOpen: false,
    //    islocalTimerStart: false,
    //    isTimeOutCalled: false,
    //    CHECK_INTERVAL: 60000,  
    //  };  
    //}
    //select() {
    //  window.localStorage.setItem('AUTHDATA', "");
    //  window.location.href = "/login";
    //}
    //initInterval() {
    //  setInterval(() => {
    //    this.check();
    //  }, this.state.CHECK_INTERVAL);
    //}
    //check() {
    //  const loggedInString = localStorage.getItem('AUTHDATA');
    //  if (loggedInString) {
    //    const loggedInData = JSON.parse(loggedInString);
    //    Http.axios().get('/Account/CheckIsCurrentUserValid?userName=' + this.props.userName)
    //      .then((e) => {
    //        var results = e.data;
    //        if (results.status.statusValue === true) {
    //          if (this.state.isTimeOutCalled === true && this.state.islocalTimerStart === false) {
    //            this.setState({ islocalTimerStart: true });
    //            this.initInterval();
    //          }
    //        }
    //        else {
    //          window.location.href = "/login";
    //        }
    //      })
    //  }
    //}
    // <IonImg src="assets/naturaldrawing.jpg" ></IonImg>  
    Home.prototype.render = function () {
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
    return Home;
}(React.Component));
exports.default = Home;
//# sourceMappingURL=Home.js.map