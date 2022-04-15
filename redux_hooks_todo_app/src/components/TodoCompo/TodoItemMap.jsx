import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export const TodoItemMap = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { list } = useSelector((store) => store.todo);
    console.log('list', list);

    return (
        <div>
            <p>dfghjk</p>
        </div>
    )
}