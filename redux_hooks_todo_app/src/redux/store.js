import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import thunk from "redux-thunk";
import { registerReducer } from "./register/registerReducer";
import { todoHomeReducer } from "./todo/todoHomeReducer";


const rootReducer = combineReducers({
    auth: AuthReducer,
    register: registerReducer,
    todo: todoHomeReducer
});


export const store = createStore(rootReducer, applyMiddleware(thunk));