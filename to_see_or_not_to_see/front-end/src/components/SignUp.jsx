import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { loginError, loginLoding, loginSuccess } from '../redux/auth/authAction';

export const SignUp = () => {

    const [data, setData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData({
            ...data,
            [id]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:8800/register", data).then(({ data }) => console.log(data));
    }
    const { firstName, lastName, email, password } = data;
    return (
        <Box component="form" sx={{ m: 2, width: "300px", display: "inline-block" }} >

            <TextField
                id="firstName"
                label="firstName"
                value={firstName}
                onChange={(e) => { handleChange(e) }}
                required
                sx={{ mt: 3, width: "90%" }}
            />
            <TextField
                id="lastName"
                label="lastName"
                value={lastName}
                onChange={handleChange}
                required
                sx={{ mt: 3, width: "90%" }}
            />
            <TextField
                label="email"
                id="email"
                value={email}
                onChange={handleChange}
                required
                sx={{ mt: 3, width: "90%" }}
            />

            <TextField
                label="password"
                id="password"
                value={password}
                onChange={handleChange}
                required
                sx={{ mt: 3, width: "90%" }}
            />

            <Button onClick={handleSubmit} type="submit" sx={[{ width: "50%", bgcolor: "#000000", mt: 2, m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>SignUp</Button>

        </Box>
    )
}