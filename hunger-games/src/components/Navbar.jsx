import { Link } from "react-router-dom";
import * as React from 'react';
import Button from '@mui/material/Button';

export const Navbar = () => {
    return (
        <div>
            <Link to="/"><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>Home</Button></Link>
            <Link to="/addRestaurant"><Button sx={[{ bgcolor: "#000000", m: 1, color: "#f2f2ff" }, () => ({ '&:hover': { color: 'black' } })]}>AddRestaurant</Button></Link>
            
        </div>
    )
}