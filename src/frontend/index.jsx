import React from "react";
import ReactDOM from "react-dom"
import {Router, Route, hashHistory} from "react-router"

import {Provider} from "react-redux";
import {syncHistoryWithStore} from "react-router-redux"

import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import promiseMiddleware from "redux-promise-middleware";

import masterReducer from "./masterReducer";
import List from "./list/list.jsx";
// import User from "./user/user.jsx";
//
import listAction from "./list/listAction";
// import userAction from "./user/userAction";

const middleware = [promiseMiddleware(), logger()];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
const store = createStoreWithMiddleware(masterReducer);
const enhancedHistory = syncHistoryWithStore(hashHistory, store)


ReactDOM.render(
    <Provider store={store}>
    <Router history={enhancedHistory}>
        <Route path="/" component={List} />
    </Router>
</Provider>, document.querySelector(".main"))


store.dispatch(listAction())
