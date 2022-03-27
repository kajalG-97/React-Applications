import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const TodoDetails = () => {
    const { id } = useParams();

    const ID = id.split(":")[1];

    console.log(ID);
    const [data, SetData] = useState([])
    const [stat,Setstat] = useState(false)
    // console.log('id', id);
    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        axios.get(`http://localhost:4234/todos?id=${ID}`).then(({ data }) => {
            SetData(data)
        });
    }
    const handleDelete = (id) => {
        console.log('handleDelete', id);
        axios.delete(`http://localhost:4234/todos/${id}`).then(() => getTodos());

    }
    return (<div>
        {data.map((el, i) => {
            {console.log(el.status)}
            return <div key={i}>
                <h1>{el.title}</h1>
                <h1>{stat?"completed":"pending" }</h1>
                <button onClick={() => {
                    // { el.status ? el.status = false : el.status = true }
                    Setstat(!stat)
                }}>{ stat?"re-take":"complete"}</button>

                <button onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
        })}

    </div>
    )
}