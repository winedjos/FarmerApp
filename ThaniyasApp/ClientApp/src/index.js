"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App_1 = require("./App");
var serviceWorker = require("./serviceWorker");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var history_1 = require("history");
var store_1 = require("./store");
var history = history_1.createBrowserHistory();
ReactDOM.render(React.createElement(react_redux_1.Provider, { store: store_1.default },
    React.createElement(react_router_1.Router, { history: history },
        React.createElement(App_1.default, null))), document.getElementById('root'));
serviceWorker.unregister();
//# sourceMappingURL=index.js.map