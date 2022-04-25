import { GET_TODO, TODO_ERROR, TODO_LIST, TODO_LODING, UPDATE_TODO } from "./todoHomeAction"

const initialState = {
   
    todoList: [],
    loding: false,
    error: false,

}

export const todoHomeReducer = (store = initialState, { type, payload }) => {

    switch (type) {
        case TODO_LIST: return { ...store, list: payload, loding: false, error: false }

        case TODO_LODING: return { ...store, loding: true }

        case TODO_ERROR: return { ...store, loding: false, error: true }

        case GET_TODO: return { ...store, loding: false, error: false, todoList: payload }

        case UPDATE_TODO: return { ...store,loding: false, error: false, updateList: payload }

        default: return store;
    }
}