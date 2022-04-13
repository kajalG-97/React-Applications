import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { loginError, loginLoding, loginSuccess, loginSuccessData } from '../redux/auth/authAction';

export const Login = () => {
    const dispatch = useDispatch();
    const { loding, error } = useSelector((store) => store.auth);

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
        dispatch(loginSuccessData(data,navigate));
    }
    const { email, password } = data;
    return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
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

            <Button onClick={handleSubmit} type="submit" sx={[{ width: "50%", bgcolor: "#000000", mt: 2, m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Login</Button>

        </Box>
    )
}