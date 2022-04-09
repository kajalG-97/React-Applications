import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { RegistrationContext } from './RegistrationContext';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const RegistrationOne = () => {
    const navigate = useNavigate();
    const { name, age, DOB, handleChange } = React.useContext(RegistrationContext);
    return (
        <Box component="form" sx={{ m: 2, width: "300px", display: "inline-block" }} >

            <TextField
                id="name"
                label="Name"
                value={name}
                onChange={(e) => { handleChange(e) }}
                required
                sx={{ mt: 3 ,width:"90%"}}
            />
            <TextField
                id="age"
                label="Age"
                value={age}
                onChange={handleChange}
                required
                sx={{ mt: 3 ,width:"90%"}}
            />
            <TextField
                type="date"
                id="DOB"
                value={DOB}
                onChange={handleChange}
                required
                sx={{ mt: 3 ,width:"90%"}}
            />

            <Button disabled={!name || !age || !DOB} onClick={() => navigate("/registration/two")} type="submit" sx={[{mt:2, bgcolor: "#000000", m: 1,width:"50%", color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Next</Button>

        </Box>
    );
}

