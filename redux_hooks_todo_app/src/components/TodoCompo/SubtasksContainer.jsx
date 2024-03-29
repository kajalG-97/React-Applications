import Box from '@mui/material/Box';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';

export const SubtasksContainer = ({ tasks }) => {


    const navigate = useNavigate();

    const [checked, setChecked] = React.useState(false);

    const handleChangeSubtasks = (event) => {
        setChecked(event.target.checked);
        e.preventDefault();
        dispatch(updateTodoListData(data, event.target.id, toast, navigate));
    };

    // const handleChangeSubtasks = (e) => {
    //     let { checked } = e.target;
    //     if (e.target.value === "subtaskStatus") {
    //         setSubToggleStatus({ ...tasks, subtasks: [...tasks.subtasks, { ...subtasks, subtaskStatus: checked }] })
    //     }
    // }


    return (
        <Box>

            {tasks.map((e) => {
                return <Box sx={{ borderRadius: 2, p: 2, width: "80%", m: 2, bgcolor: "#eeeeee" }} key={e.id}>


                    <h3 style={{ pl: 4, pt: 2, textAlign: "left" }}>{e.title}</h3>

                    <Box sx={{ height: "38px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>

                        <Box sx={[{ borderRadius: 1, border: "2px solid #a8b2b7", bgcolor: "#d6dde0", width: "130px" }]}>
                            {e.tags.Personal && "Personal"}{" "}{e.tags.Official && "Official"} {e.tags.Others && "Others"}
                        </Box>

                        <h4 style={{ color: "grey" }}>{e.date}</h4>

                    </Box>

                    <Box sx={{ border: 0, lineHeight: "0px" }}>

                        <h4 style={{}}>description  : {e.description}</h4></Box>

                    <Box sx={{ border: 0 }}>
                        {e.subtasks.map((sub) => {
                            return <Box sx={{ display: 'flex', alignItems: "center", justifyContent: "space-around" }}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={checked}
                                            />
                                        }
                                        id={ sub.id} value="subtaskStatus"
                                        onChange={handleChangeSubtasks}
                                    /></FormGroup>
                                <h3> {sub.text}</h3>
                            </Box>
                        })}
                    </Box>
                    <Box >
                        <Fab sx={{ ml: 26, width: "14%", height: "9%" }} color="secondary" aria-label="edit">
                            <EditIcon onClick={() => navigate(`/todos/${e.id}`)} sx={{ width: "60%" }} />
                        </Fab>
                    </Box>
                </Box>
            })}

        </Box>
    )
}