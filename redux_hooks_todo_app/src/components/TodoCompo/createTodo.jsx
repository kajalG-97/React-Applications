import { SideBar } from "./sidebar/SideBar"
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { todoListData } from "../../redux/todo/todoHomeAction";
import { ToastContainer, toast } from "react-toastify";
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { v4 as uuidv4 } from 'uuid';

export const CreateTodos = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { loding, error } = useSelector((store) => store.todo);

    const [data, setData] = React.useState({
        title: "",
        description: "",
        subtasks: [],
        status: "",
        tags: { Official: false, Personal: false, Others: false },
        date: ""
    });
    const [txt, setTxt] = React.useState({

        text: "",
        subtaskStatus: false
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(
            {
                ...data,
                [id]: value
            }
        )
    };

    const handleRadio = (event) => {
        setData({ ...data, status: event.target.value })
    }

    const handleTasks = (e) => {
        let { checked } = e.target;
        if (e.target.value === "official") {
            console.log('checked', checked);

            setData({ ...data, tags: { ...data.tags, Official: checked } })
        }
        if (e.target.value === "personal") {
            console.log('e', e);
            setData({ ...data, tags: { ...data.tags, Personal: checked } })
        }
        if (e.target.value === "others") {
            console.log('e', e);
            setData({ ...data, tags: { ...data.tags, Others: checked } })
        }

    }

   

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(todoListData(data, toast, navigate));
        console.log('datain', data);
    }

    const { title, description, status, date } = data;
    // return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
    return (
        <Box component="form" sx={{ mb: 4, display: 'flex', gap: "20px" }}>
            <SideBar />
            <Box sx={{ display: "flex", width: "73%", ml: 4, mt: 4, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>

                <Box sx={{ width: "35%" }}>
                    <TextField
                        label="Title"
                        id="title"
                        value={title}
                        onChange={handleChange}
                        required
                        sx={{ mt: 3, width: "90%" }}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        maxRows={4}
                        value={description}
                        onChange={handleChange}
                        sx={{ mt: 3, width: "90%" }}
                    />
                    <br />
                    <Box sx={{ display: "flex", justifyContent: "space-around", m: "auto", mt: 5, width: "90%" }}>
                        <Box >
                            <RadioGroup>
                                <FormControlLabel onChange={handleRadio} id="Todo" value="Todo" control={<Radio />} label="Todo" />
                                <FormControlLabel onChange={handleRadio} id="InProgress" value="InProgress" control={<Radio />} label="InProgress" />
                                <FormControlLabel onChange={handleRadio} id="Done" value="Done" control={<Radio />} label="Done" />
                            </RadioGroup>

                        </Box>
                        <Box >
                            <label>Tags</label>
                            <br />
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        />
                                    }
                                    id="official" value="official"
                                    label="Official"
                                    onChange={(e) => handleTasks(e)}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox id="personal" value="personal" />
                                    }
                                    type="checkbox"
                                    label="Personal"
                                    onChange={(e) => handleTasks(e)}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox id="others" value="others" />
                                    }
                                    onChange={(e) => handleTasks(e)}
                                    label="Others"
                                />
                            </FormGroup>
                            <br />

                        </Box>
                    </Box>


                </Box>
                <Box sx={{ width: "45%" }}>
                    <TextField
                        label="Add Subtask Here"
                        id="add"
                        onChange={(e) => setTxt({ ...txt, text: e.target.value, subtaskStatus: false, id: uuidv4() })}
                        required
                        sx={{ mt: 3, width: "70%" }}
                    />
                    <Button sx={[{ mt: 2, bgcolor: "#000000", m: 1, width: "50%", color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]} onClick={() => {
                        data.subtasks.push(txt);
                    }}>ADD</Button>

                    {data.subtasks.map((e, i) => {
                        return <Box sx={{ display: 'flex', width: "90%", m: 2, pl: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} key={i}>
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                        />
                                    }
                                    id="subtaskStatus" value="subtaskStatus"
                                    onChange={(e) => handleChangeSubtasks(e)}
                                /></FormGroup>
                            <h2>{e.text}</h2>
                            {console.log('text', e.text)}
                            <IconButton aria-label="delete" size="large">
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                        </Box>
                    })}
                </Box>
                <Box sx={{ width: "30%" }}>
                    <TextField
                        label="Date"
                        id="date"
                        type="date"
                        value={date}
                        onChange={handleChange}
                        required
                        sx={{ mt: 3, width: "70%" }}
                    />

                    <Button onClick={handleSubmit} sx={[{ border: "2px solid #81d4fa", bgcolor: "#b3e5fc", m: 4, ml: 3 }]}>Create a new Task</Button>
                </Box>

            </Box>
        </Box>
    )
}