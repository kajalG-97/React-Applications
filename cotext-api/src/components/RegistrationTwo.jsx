import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { RegistrationContext } from './RegistrationContext';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const RegistrationTwo = () => {
    const navigate = useNavigate();
    const { name, age, DOB,state,pincode,address,handleSubmit, handleChange } = React.useContext(RegistrationContext);
    return (
        <Box component="form" sx={{ m: 2, width: "300px", border: 1, display: "inline-block" }} >

            <TextField
                id="state"
                label="State"
                value={state}
                onChange={(e) => { handleChange(e) }}
                required
            />
            <TextField
                id="pincode"
                label="Pincode"
                value={pincode}
                onChange={handleChange}
                required
            />
            <TextField
                label="Address"
                id="address"
                value={address}
                onChange={handleChange}
                required
            />

            <Button onClick={handleSubmit} type="submit" sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Next</Button>

        </Box>
    );
}

