import { useDispatch, useSelector } from "react-redux"
import { Profile } from "./Profile";
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { logoutUser } from "../../../redux/auth/authAction";
import { TagStacks } from "./TagStacks";
import { Navigate } from "react-router-dom";

export const SideBar = () => {

    const { loding, error, isAuthenticated } = useSelector((store) => store.auth);
    const dispatch = useDispatch();

    if (!isAuthenticated) {
        return <Navigate to={"/"} />
    }

    return loding ? <img src="https://miro.medium.com/max/1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" /> : error ? <img src="https://cdn.dribbble.com/users/2469324/screenshots/6538803/comp_3.gif" alt="Oops something went wrong" /> : (
        <Box sx={{ width: "20%", mt: 4, ml: 2, boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}>
            <Profile />
            <hr />
            <TagStacks />
            <hr />
            <Button onClick={() => dispatch(logoutUser())}>Logout</Button>
            <br />

        </Box>
    )
}