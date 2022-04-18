import axios from "axios";

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGIN_LODING = 'LOGIN_LODING';

export const LOGOUT = 'LOGOUT';

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });

export const logoutUser = () => ({ type: LOGOUT})

export const loginSuccessData = (data,toast ,navigate ) => (dispatch) => {

    dispatch(loginLoding());
    axios.post("https://grubhub-backend-clone.herokuapp.com/login", data).then(({ data }) => {
        dispatch(loginSuccess(data))
        toast.success("Logged in Successfully", {
            position: "top-center",
        });
        setTimeout(() => { navigate("/todoHome"); }, 3000)
    }).catch((err) => {
        console.log('err', err.massage);
        dispatch(loginError())
        toast.error("Please check your email or password", {
            position: "top-center",
        });
    });

}