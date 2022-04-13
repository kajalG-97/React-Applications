import { LOGIN_ERROR, LOGIN_LODING, LOGIN_SUCCESS } from "./authAction";

const initialState = {
    isAuthenticated: false,
    token: "",
    loding: false,
    error: false
}
export const AuthReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case LOGIN_LODING: return { ...store, loding: true };

        case LOGIN_ERROR: return { ...store, loding: false, error: true };

        case LOGIN_SUCCESS: return { loding: false, error: false, isAuthenticated: true, token: payload };
    
        default: return store;
    }
}