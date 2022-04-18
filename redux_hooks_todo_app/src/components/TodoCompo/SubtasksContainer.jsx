import Box from '@mui/material/Box';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getTodoData } from '../../redux/todo/todoHomeAction';
import { useEffect } from "react"
import { TasksContainer } from './TaskContainer';

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export const SubtasksContainer = () => {


    const navigate = useNavigate();

    const dispatch = useDispatch();

    const { todoList } = useSelector((store) => store.todo);
    console.log('todoList', todoList);


    const [data, setData] = React.useState({

        subtasks: [],
    });
    const [txt, setTxt] = React.useState({

        text: "",
        subtaskStatus: false
    })


    React.useEffect(() => {
        getData();
    }, []);


    const getData = () => {
        dispatch(getTodoData());
    }

    const handleChangeSubtasks = (e) => {
        let { checked } = e.target;
        if (e.target.value === "subtaskStatus") {
            setTxt({ ...data, subtasks: [...data.subtasks, { ...txt, subtaskStatus: checked }] })
        }
    }

    return (
        <Box>

            {todoList.map((e) => {
                return <Box sx={{ borderRadius: 2, p: 2, width: "80%", m: 2, bgcolor: "#eee6ef" }} key={e.id}>


                    <h3 style={{ pl: 4, pt: 2, textAlign: "left" }}>Task</h3>

                    <Box sx={{ height: "38px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>

                        <Box sx={[{ borderRadius: 1, border: "2px solid #a8b2b7", bgcolor: "#d6dde0", width: "130px" }]}>{e.status}</Box>

                        <h4 style={{ color: "grey" }}>{e.date}</h4>

                    </Box>

                    <Box sx={{ border: 0, lineHeight: "0px" }}>

                        <h4 style={{}}>description  : {e.description}</h4></Box>

                    <Box sx={{ border: 0 }}>
                        {e.subtasks.map((sub) => {
                            return <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                            />
                                        }
                                        id="subtaskStatus" value="subtaskStatus"
                                        onChange={(e) => handleChangeSubtasks(e)}
                                    /></FormGroup>
                                <h3> {sub.text}</h3>
                            </Box>
                        })}
                    </Box>
                    <Box >
                        <Fab sx={{ ml: 26, width: "14%", height: "9%" }} color="secondary" aria-label="edit">
                            <EditIcon onClick={() => navigate("/editTodos")} sx={{ width: "60%" }} />
                        </Fab>
                    </Box>
                </Box>
            })}

        </Box>
    )
}