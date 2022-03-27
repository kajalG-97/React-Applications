import { applyMiddleware } from "redux";
import { combineReducers } from "redux";
import { createStore } from "redux";
import thunk from 'redux-thunk';
import { todoReducer } from "../redux/Todos/reducer";
import { authReducer } from "./IsAuth/reducer";

const rootReducer = combineReducers({

    todo: todoReducer,
    auth:authReducer,
});



export const store = createStore(rootReducer,
    applyMiddleware(thunk)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log('store.getState', store.getState());
