import { Link } from "react-router-dom";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const Navbar = () => {
    return (
        <>
            <Link to="/"><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Home</Button></Link>
            <Link to="registration/one"><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Form_1</Button></Link>
            <Link to="registration/two"><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Form_2</Button></Link>

            <Link to="users"><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Users</Button></Link>
        </>


    )
}