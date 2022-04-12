export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const LOGIN_ERROR = 'LOGIN_ERROR';

export const LOGIN_LODING = 'LOGIN_LODING';

export const loginLoding = () => ({ type: LOGIN_LODING });

export const loginError = () => ({ type: LOGIN_ERROR });

export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });