import { GET_TODO, TODO_ERROR, TODO_LIST, TODO_LODING } from "./todoHomeAction"

const initialState = {
    list: [],
    todoList: [],
    loding: false,
    error: false
}

export const todoHomeReducer = (store = initialState, { type, payload }) => {
    switch (type) {
        case TODO_LIST: return { ...store, list: payload, loding: false, error: false }

        case TODO_LODING: return { ...store, loding: true }

        case TODO_ERROR: return { ...store, loading: false, error: true }

        case GET_TODO: return { ...store, loading: false, error: false, todoList: payload }

        default: return store;
    }
}