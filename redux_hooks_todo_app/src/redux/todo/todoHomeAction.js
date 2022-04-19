import axios from "axios";

export const TODO_LIST = 'TODO_LIST';

export const TODO_ERROR = 'TODO_ERROR';

export const TODO_LODING = 'TODO_LODING';

export const GET_TODO = 'GET_TODO';

export const UPDATE_TODO = 'UPDATE_TODO';

export const todoLoding = () => ({ type: TODO_LODING });

export const todoError = () => ({ type: TODO_ERROR });

export const todoList = (payload) => ({ type: TODO_LIST, payload });

export const getTodoList = (payload) => ({ type: GET_TODO, payload });

export const updateTodoList = (payload) => ({ type: UPDATE_TODO, payload });

export const todoListData = (data, toast, navigate) => (dispatch) => {
    dispatch(todoLoding());

    axios.post("http://localhost:8888/todos", data).then(({ data }) => {
        dispatch(todoList(data))
        toast.success("Todo Added!", {
            position: "top-center",
        });
        setTimeout(() => { navigate("/todoHome"); }, 1000)
    }).catch((err) => {
        dispatch(todoError())
        toast.error("Try again!", {
            position: "top-center",
        });
    });
}

export const getTodoData = () => (dispatch) => {
    dispatch(todoLoding());
    axios.get("http://localhost:8888/todos").then(({ data }) => dispatch(getTodoList(data)))
        .catch((err) => dispatch(todoError()));
}

export const updateTodoListData = (data, id,toast, navigate) => (dispatch) => {
    dispatch(todoLoding());

    axios.patch(`http://localhost:8888/todos/${id}`, data).then(({ data }) => {
        dispatch(updateTodoList(data))
        toast.success("Todo Added!", {
            position: "top-center",
        });
        setTimeout(() => { navigate("/todoHome"); }, 1000)
    }).catch((err) => {
        dispatch(todoError())
        toast.error("Try again!", {
            position: "top-center",
        });
    });
}
