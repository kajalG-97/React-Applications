import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { loginError, loginLoding, loginSuccess } from '../redux/auth/authAction';

export const Login = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const [data, setData] = React.useState({
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
        dispatch(loginLoding());
        axios.post("http://localhost:8800/login", data).then(({ data }) => dispatch(loginSuccess(data.token))).catch(() => dispatch(loginError()));
    }
    const {  email, password } = data;
    return (
        <Box component="form" sx={{ m: 2, width: "300px", display: "inline-block" }} >

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