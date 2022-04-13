import { TODO_ERROR, TODO_LIST, TODO_LODING } from "./todoHomeAction"

const initialState = {
    list: [],
    loding: false,
    error: false
}

export const todoHomeReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case TODO_LIST: return { ...store, list:payload ,loding: false,err: false}
        
        case TODO_LODING: return { ...store, loding: true }
        
        case TODO_ERROR: return { ...store, loading: false, error: true }
        
        default: return store;
    }
}