import axios from "axios";

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';

export const REGISTER_ERROR = 'REGISTER_ERROR';

export const REGISTER_LODING = 'REGISTER_LODING';

export const registerLoding = () => ({ type: REGISTER_LODING });

export const registerError = () => ({ type: REGISTER_ERROR });

export const registerSuccess = (payload) => ({ type: REGISTER_SUCCESS, payload });

export const registerSuccessData = (data, navigate, toast) => (dispatch) => {

    dispatch(registerLoding());
    axios.post("http://localhost:8800/register", data).then(({ data }) => {
        dispatch(registerSuccess(data.token))
        toast.success("Registration Successfull!", {
            position: "top-center",
        });
        setTimeout(() => { navigate("/SignIn"); }, 3000)
    }).catch((err) => {
        dispatch(registerError())
        toast.error("Please check your email or password", {
            position: "top-center",
        });
    });

}