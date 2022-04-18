import Box from '@mui/material/Box';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTodoData } from '../../redux/todo/todoHomeAction';
import { useEffect } from "react"
import { SubtasksContainer } from './SubtasksContainer';


export const TasksContainer = ({ tasks, bgcolor, border, title }) => {
    console.log('tasks', tasks);

    return (
        <Box>
            <Box bgcolor={bgcolor} border={border}>
                <h3 style={{ textAlign: "center", lineHeight: "0.5" }}>{title}</h3>
            </Box>
            <SubtasksContainer />


        </Box>
    )
}