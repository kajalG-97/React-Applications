import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, useNavigate } from "react-router-dom";
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

export const HomeNav = () => {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <HomeIcon onClick={()=> navigate("/")} sx={{ mr: 2 }} fontSize="large"/>
                    <Typography variant="h6" component="div" sx={{ mr: 2, flexGrow: 1, display: "flex", justifyContent: "space-between" }}>
                      ToDo 
                    </Typography>
                    <Link to={"/SignIn"}><Button sx={{ m: 1, color: "#f2f2ff" }} color="inherit">Login</Button></Link>
                    <Link to={"/SignUp"}><Button sx={{ m: 1, color: "#f2f2ff" }} color="inherit">Register</Button></Link>
                    
                </Toolbar>

            </AppBar>
        </Box>
    )
}