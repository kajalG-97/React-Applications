import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';

export const Navbar = () => {
    return (
        <div>
            <Link to={"/signup"}><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>SignUp</Button></Link>
            <Link to={"/login"}><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Login</Button></Link>
            <Link to={"/get-restaurants"}><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Restaurant</Button></Link>
        </div>
    )
}