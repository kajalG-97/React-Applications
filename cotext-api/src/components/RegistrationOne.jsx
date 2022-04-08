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
        <Box component="form" sx={{ m: 2, width: "300px", border: 1, display: "inline-block" }} >

            <TextField
                id="name"
                label="Name"
                value={name}
                onChange={(e) => { handleChange(e) }}
                required

            />
            <TextField
                id="age"
                label="Age"
                value={age}
                onChange={handleChange}
                required
            />
            <TextField
                type="date"
                id="DOB"
                value={DOB}
                onChange={handleChange}
                required
            />

            <Button onClick={() => navigate("registration/two")} type="submit" sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Next</Button>

        </Box>
    );
}

