import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Auth } from "../redux/IsAuth/action";

export const Login = () => {

    const dispatch = useDispatch();

    const authentication = useSelector((store) => store.auth.auth);

    console.log('authications', authentication);

    const Navigate = useNavigate();
    
    const addData = () => {
        axios.post("https://reqres.in/api/login", {
            "email": "eve.holt@reqres.in",
            "password": "cityslicka",

        }).then(({ data }) => localStorage.setItem("token", JSON.stringify(data.token)));
    }
   
    return (
        <form>
            <input type="email" placeholder="enter email" required />
            <br />
            <input type="password" placeholder="password" required />
            <button onClick={(e) => {
                e.preventDefault();
                addData();
                dispatch(Auth(!authentication));
                localStorage.setItem("condition", true);
                return Navigate("/")
            }}>{!authentication?"Login":"Logout"}</button>
        </form>
    )
}