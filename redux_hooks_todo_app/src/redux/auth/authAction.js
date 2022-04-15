import axios from "axios";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGIN_LODING = 'LOGIN_LODING';

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });

export const loginSuccessData = (data,toast ,navigate ) => (dispatch) => {

    dispatch(loginLoding());
    axios.post("http://localhost:8800/login", data).then(({ data }) => {
        dispatch(loginSuccess(data))
        toast.success("Logged in Successfully", {
            position: "top-center",
        });
        setTimeout(() => { navigate("/todoHome"); }, 3000)
    }).catch((err) => {
        dispatch(loginError())
        toast.error("Please check your email or password", {
            position: "top-center",
        });
    });

}