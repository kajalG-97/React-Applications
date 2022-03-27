export const GET_TODO = "GET_TODO";

export const GET_TODO_LOADING = "GET_TODO_LOADING";

export const GET_TODO_ERROR = "GET_TODO_ERROR";

export const addTodo = (todo) => ({ type: GET_TODO, payload: todo });

export const Loading = () => ({ type: GET_TODO_LOADING });

export const Error = () => ({ type: GET_TODO_ERROR });

