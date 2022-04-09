import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { RegistrationContext } from './RegistrationContext';
import { TextField } from '@mui/material';
import { useNavigate ,Navigate} from 'react-router-dom';

export const RegistrationTwo = () => {
      
    const navigate = useNavigate();

    const { name, age, DOB,state,pincode,address,handleSubmit, handleChange } = React.useContext(RegistrationContext);
    if (!name || !age || !DOB) {
        return (
            <>
                <Navigate to={"/registration/one"} />
            </>
        ) 
    }
    const combineFun = () => {
        handleSubmit()
        navigate("/users")
    }
   
    return (
        <Box component="form" sx={{ m: 2, width: "300px", display: "inline-block" }} >

            <TextField
                id="state"
                label="State"
                value={state}
                onChange={(e) => { handleChange(e) }}
                required
                sx={{ mt: 3, width: "90%" }}
            />
            <TextField
                id="pincode"
                label="Pincode"
                value={pincode}
                onChange={handleChange}
                required
                sx={{ mt: 3, width: "90%" }}
            />
            <TextField
                label="Address"
                id="address"
                value={address}
                onChange={handleChange}
                required
                sx={{ mt: 3, width: "90%" }}
            />

            <Button onClick={() => combineFun()} type="submit" sx={[{ width: "50%",bgcolor: "#000000",mt:2, m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Next</Button>

        </Box>
    );
}

