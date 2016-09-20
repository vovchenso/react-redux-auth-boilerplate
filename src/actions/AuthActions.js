import { push } from 'react-router-redux';

import { LOGOUT } from '../constants/actions/AuthActionTypes';
import * as API from "../api/auth";


export const login = data => dispatch => dispatch(API.login(data));

export const register = data => dispatch => dispatch(API.register(data));

export const forgot = data => dispatch => dispatch(API.forgot(data));

export const recover = data => dispatch => dispatch(API.recover(data));

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    });

    dispatch(push('/login'));
};