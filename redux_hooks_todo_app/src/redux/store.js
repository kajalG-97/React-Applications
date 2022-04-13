import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    auth: AuthReducer,
   
});


export const store = createStore(rootReducer,applyMiddleware(thunk));