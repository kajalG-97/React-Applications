import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { getTodoData } from '../../../redux/todo/todoHomeAction';


export const TagStacks = () => {

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
        <Box>
            <br />
            <Button sx={[{ border: "2px solid #81d4fa", bgcolor: "#b3e5fc", width: "130px", m: 1, ml: 3 }]}>All : {todoList.length}</Button>
            <br />
            <Button sx={[{ border: "2px solid #81c784", bgcolor: "#a5d6a7", width: "130px", m: 1, ml: 3 }]}>Personal : {todoList.filter((item) => item.tags.Personal).length}</Button>
            <br />
            <Button sx={[{ border: "2px solid #b39ddb", bgcolor: "#d1c4e9", width: "130px", m: 1, ml: 3 }]}>Official : {todoList.filter((item) => item.tags.Official).length}</Button>
            <br />
            <Button sx={[{ border: "2px solid #fcac35", bgcolor: "#ffcc80", width: "130px", m: 1, ml: 3 }]}>Others : {todoList.filter((item) => item.tags.Others).length}</Button>
            <br />
            <br />
            <br />
        </Box>
    )
}