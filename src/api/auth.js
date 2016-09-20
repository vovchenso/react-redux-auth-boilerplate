import * as AuthActions from '../constants/actions/AuthActionTypes';
import { API_USER_LOGIN, API_USER_SIGNUP, API_USER_FORGOT, API_USER_RECOVER } from '../configs/api';
import { CALL_API } from '../middleware/api';
import * as Methods from '../constants/Methods';


export const login = data => ({
    [CALL_API]: {
        method: Methods.POST,
        endpoint: API_USER_LOGIN,
        body: data,
        types: [
            AuthActions.LOGIN_REQUEST,
            AuthActions.LOGIN_SUCCESS,
            AuthActions.LOGIN_FAILURE
        ]
    }
});

export const register = data => ({
    [CALL_API]: {
        method: Methods.POST,
        endpoint: API_USER_SIGNUP,
        body: data,
        types: [
            AuthActions.SIGNUP_REQUEST,
            AuthActions.SIGNUP_SUCCESS,
            AuthActions.SIGNUP_FAILURE
        ]
    }
});

export const forgot = data => ({
    [CALL_API]: {
        method: Methods.POST,
        endpoint: API_USER_FORGOT,
        body: data,
        types: [
            AuthActions.FORGOT_REQUEST,
            AuthActions.FORGOT_SUCCESS,
            AuthActions.FORGOT_FAILURE
        ]
    }
});

export const recover = data => ({
    [CALL_API]: {
        method: Methods.POST,
        endpoint: API_USER_RECOVER,
        body: data,
        types: [
            AuthActions.RECOVER_REQUEST,
            AuthActions.RECOVER_SUCCESS,
            AuthActions.RECOVER_FAILURE
        ]
    }
});
