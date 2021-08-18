import { combineReducers } from "redux";
import alertReducer from "./alert"
import authReducer from "./authentification"

export const rootReducer = combineReducers({
   
    authReducer,
    alertReducer
})