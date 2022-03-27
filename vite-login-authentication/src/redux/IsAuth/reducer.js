import { IsAuth } from "./action"
const initialState = {
    auth: JSON.parse(localStorage.getItem("condition")) || false
}
export const authReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case IsAuth: return { auth: payload }
        default: return store;

    }
}