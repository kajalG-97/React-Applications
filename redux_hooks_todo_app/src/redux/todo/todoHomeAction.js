import axios from "axios";

export const TODO_LIST = 'TODO_LIST';

export const TODO_ERROR = 'TODO_ERROR';

export const TODO_LODING = 'TODO_LODING';

export const todoLoding = () => ({ type: TODO_LODING });

export const todoError = () => ({ type: TODO_ERROR });

export const todoList = (payload) => ({ type: TODO_LIST, payload });

export const todoListData = (data, toast, navigate) => (dispatch) => {
    dispatch(todoLoding());
    
    axios.post("http://localhost:8888/todos", data).then(({ data }) => {
        dispatch(todoList(data))
        toast.success("Todo Added!", {
            position: "top-center",
        });
    setTimeout(() => { navigate("/todoHome"); }, 1000)
}).catch ((err) => {
    dispatch(todoError())
    toast.error("Try again!", {
        position: "top-center",
    });
});
}
