import fetch from 'isomorphic-fetch';

import { AUTH_KEY } from "../configs/common";
import { API_ROOT } from "../configs/api";
import Storage from "../utils/storage";
import { logout } from "../actions/AuthActions";


const callApi = (method, endpoint, body = null) => {

    const token = Storage.get(AUTH_KEY) || null;
    const config = { method };

    if (token) {
        config.headers = {
            'Authorization': `Bearer ${token}`
        };
    }

    if (null !== body) {
        config.body = JSON.stringify(body);
    }

    return fetch(API_ROOT + endpoint, config)

        .then(response =>
            response.json()
                .then(json => ({ json, response }))
        )

        .then(({ json, response }) =>
            response.ok
                ? json.data
                : Promise.reject(json)
        );
};


const checkAuth = (data, dispatch) => {
    if (data.meta && data.meta.code == 401) {
        dispatch(logout());
        return false;
    }

    return true;
};


/** Symbol to perform API requests **/
export const CALL_API = Symbol('Call API');


/** Middleware **/
export default store => next => action => {

    const callAPI = action[CALL_API];

    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    const { method, endpoint, types, body } = callAPI;
    const [ requestType, successType, errorType ] = types;

    next({
        type: requestType
    });

    return callApi(method, endpoint, body)
        .then(
            response =>
                next({
                    type: successType,
                    response
                }),

            data =>
                checkAuth(data, store.dispatch) &&
                    next({
                        type: errorType,
                        error: data.error || data
                    })

        )
};