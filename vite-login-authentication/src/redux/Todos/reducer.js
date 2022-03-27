import { GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING } from "./action";
const initState = {
    todo: [],
    load: false,
    error: false
}

export const todoReducer = (store = initState, { type, payload }) => {
    console.log('store', store);
    switch (type) {
        case GET_TODO:
            return { todo: payload, load: false }

        case GET_TODO_LOADING: return { load: true }

        case GET_TODO_ERROR: return { error: true, load: false }

        default: return store;
    };
}