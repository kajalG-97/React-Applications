import { combineReducers } from "redux";
import { applyMiddleware } from "redux";
import { createStore } from "redux";
import { AuthReducer } from "./auth/authReducer";
import { restaurantReducer } from "./restaurant/RestaurantReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    auth: AuthReducer,
    restaurant: restaurantReducer
});


export const store = createStore(rootReducer,applyMiddleware(thunk));