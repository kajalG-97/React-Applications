import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

import { SideBar } from './sidebar/SideBar';
import { getTodoData } from '../../redux/todo/todoHomeAction';


export const TodoSummery = () => {

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
        <Box sx={{ mb: 4, display: 'flex', gap: "40px" }}>
            <SideBar />
            <Box sx={{ m: 4 }}>
                <br />
                <Button sx={[{ border: "2px solid #81d4fa", bgcolor: "#b3e5fc", width: "220px", m: 1, ml: 3 }]}>All : {todoList.length}</Button>
                <br />
                <Button sx={[{ border: "2px solid #81c784", bgcolor: "#a5d6a7", width: "220px", m: 1, ml: 3 }]}>Todo : {todoList.filter((item) => item.status === "Todo").length}</Button>
                <br />
                <Button sx={[{ border: "2px solid #b39ddb", bgcolor: "#d1c4e9", width: "220px", m: 1, ml: 3 }]}>In Progress : {todoList.filter((item) => item.status === "InProgress").length}</Button>
                <br />
                <Button sx={[{ border: "2px solid #fcac35", bgcolor: "#ffcc80", width: "220px", m: 1, ml: 3 }]}>Done : {todoList.filter((item) => item.status.Done === "Done").length}</Button>
                <br />
                <br />
                <br />
            </Box>

        </Box>
    )
}