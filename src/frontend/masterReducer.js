import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux"
import listReducer from "./list/listReducer"

export default combineReducers({
    routing: routerReducer,
    list: listReducer
});
