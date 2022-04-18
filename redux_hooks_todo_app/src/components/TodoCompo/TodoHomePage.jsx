import { useSelector } from "react-redux"
import { CreateTodos } from "./createTodo";
import { SideBar } from "./sidebar/SideBar";
import * as React from 'react';
import Box from '@mui/material/Box';
import { TodoItemMap } from "./TodoItemMap"

export const TodoHomePage = () => {
    const { loding, error } = useSelector((store) => store.todo);

    // return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
        return (
        <Box sx={{ mb: 4, display: 'flex', gap: "20px" }}>
            <SideBar />
            <TodoItemMap />
        </Box>
    )
}