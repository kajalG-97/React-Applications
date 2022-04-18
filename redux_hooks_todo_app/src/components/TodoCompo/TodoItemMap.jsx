import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { getTodoData } from "../../redux/todo/todoHomeAction";
import Box from '@mui/material/Box';
import * as React from 'react';
import { SubtasksContainer } from "./SubtasksContainer";
import { TasksContainer } from "./TaskContainer";

export const TodoItemMap = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { todoList } = useSelector((store) => store.todo);
    console.log('todoList', todoList);


    useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        dispatch(getTodoData());
    }
    return (

        <Box sx={{ display: "flex", width: "73%", ml: 4, mt: 4, gap: "20px" }}>
            <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", flex: 1 }}>
                <TasksContainer
                    tasks={todoList.filter((item) => item.status === "Todo")}
                    bgcolor="#a5d6a7"
                    border="2px solid #81c784"
                    title="Todos"
                />
            </Box>
            <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", flex: 1 }}>
                <TasksContainer
                    tasks={todoList.filter((item) => item.status === "InProgress")}
                    bgcolor="#a6a5d6"
                    border="2px solid #ba81c7"
                    title="In Progress"
                />
            </Box>
            <Box sx={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", flex: 1 }}>
                <TasksContainer
                    tasks={todoList.filter((item) => item.status === "Done")}
                    bgcolor="#a5d3d6"
                    border="2px solid #81b2c7"
                    title="Done"
                /></Box>
        </Box>
    )
}