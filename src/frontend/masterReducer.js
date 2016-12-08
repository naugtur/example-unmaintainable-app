import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux"
import listReducer from "./list/listReducer"
import userReducer from "./user/userReducer"

export default combineReducers({
    routing: routerReducer,
    user: userReducer,
    list: listReducer
});
