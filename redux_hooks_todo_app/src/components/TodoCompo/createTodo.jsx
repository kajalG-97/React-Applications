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

export const CreateTodos = () => {

    const [data, setData] = React.useState({
        title: "",
        description: "",
        subtasks: [],
        status: "",
        tags: { Official: false, Personal: false, Others: false },
        date: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData(
            {
                ...data,
                [id]: value
            }
        )
    };
    const [text, setText] = React.useState("");

    const postData = () => {
        axios.post("http://localhost:3333/todos", {
            title: text,
            status: false,
        }).then((res) => console.log(res.data));
    }
    const { title, description, status, date } = data;
    return (
        <Box sx={{ display: 'flex', gap: "20px" }}>
            <SideBar />
            <Box sx={{ display: "flex", width: "73%", ml: 4, mt: 4, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>

                <Box sx={{ border: 1 }}>
                    <TextField
                        label="Title"
                        id="title"
                        value={title}
                        onChange={handleChange}
                        required
                        sx={{ mt: 3, width: "60%" }}
                    />
                    <TextField
                        id="description"
                        label="Description"
                        multiline
                        maxRows={4}
                        value={description}
                        onChange={handleChange}
                        sx={{ mt: 3, width: "60%" }}
                    />
                    <Box sx={{ display: "flex", justifyContent: "space-around", mt: 2 }}>
                        <Box >
                            <RadioGroup>
                                <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
                                <FormControlLabel value="InProgress" control={<Radio />} label="InProgress" />
                                <FormControlLabel value="Done" control={<Radio />} label="Done" />
                            </RadioGroup>

                        </Box>
                        <Box >
                            <label>Tags</label>
                            <br />
                            <FormGroup>
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={handleChange} id="official" value="official" />
                                    }
                                    label="Official"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={handleChange} id="personal" value="personal" />
                                    }
                                    label="Personal"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox onChange={handleChange} id="others" value="others" />
                                    }
                                    label="Others"
                                />
                            </FormGroup>
                            <br />

                        </Box>
                    </Box>


                </Box>
                <Box sx={{ border: 1 }}>
                    <TextField
                        label="Add Todo Here"
                        id="add"
                        onChange={(e) => setText(e.target.value)}
                        required
                        sx={{ mt: 3, width: "70%" }}
                    />
                    <Button onClick={() => { postData() }}>ADD</Button>

                </Box>
                <Box sx={{ border: 1 }}>
                    <TextField
                        label="date"
                        id="date"
                        value={date}
                        onChange={handleChange}
                        required
                        sx={{ mt: 3, width: "70%" }}
                    />
                </Box>

            </Box>

        </Box>
    )
}