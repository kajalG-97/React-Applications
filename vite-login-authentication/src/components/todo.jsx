import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, Error, Loading } from "../redux/Todos/action";
import { store } from "../redux/store";
import { Link } from "react-router-dom";

export const Todo = () => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    console.log('getState', store.getState());

    const { todo, load, error } = useSelector((store) => store.todo);
    console.log('todos', todo);
    useEffect(() => {
        getTodos();
    }, []);
    const getTodos = () => {

        dispatch(Loading());
        axios.get("http://localhost:4234/todos").then(({ data }) => {
            dispatch(addTodo(data));
        }).catch(() => dispatch(Error()));
    }
    const postData = () => {
        axios.post("http://localhost:4234/todos", {
            title: text,
            status: false,
        }).then(() => getTodos());
    }

    // const handleDelete = (id) => {
    //     console.log('handleDelete', id);
    //     axios.delete(`http://localhost:4234/todos/${id}`).then(() => getTodos());

    // }
    return load ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="loading..." /> : error ? <img src="	https://c.tenor.com/eDchk3srtycAAAAj/piffle-error.gif" alt="error" /> : (
        <div>
            <input type="text" placeholder="enter task" onChange={(e) => setText(e.target.value)} />
            <button onClick={() => {
                // store.dispatch({ type: "ADD_COUNT", payload: 1 });
                // dispatch(addTodo(text));
                postData();
            }}>Add todo</button>


            {todo.map((e, i) => (
                <Link key={i} to={`/todo/:${e.id}`}>

                    <div >{e.title} </div>
                    <br />
                    {/* <button onClick={() => handleDelete(e.id)}>Delete</button> */}
                </Link>
            ))}
        </div>
    );
}