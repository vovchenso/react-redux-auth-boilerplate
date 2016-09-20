import * as AuthActions from "../constants/actions/AuthActionTypes";
import Storage from "../utils/storage";
import { AUTH_KEY } from "../configs/common";


export default function auth(state = {
    authenticated: !!Storage.get(AUTH_KEY)
}, action) {

    switch(action.type) {

        case AuthActions.LOGIN_REQUEST:
            return {
                authenticated: false
            };

        case AuthActions.LOGIN_FAILURE:
            return {
                authenticated: false,
                errorMessage: action.error
            };

        case AuthActions.LOGIN_SUCCESS:
            Storage.set(AUTH_KEY, action.token);

            return {
                authenticated: true
            };

        case AuthActions.LOGOUT:
            Storage.remove(AUTH_KEY);

            return {
                authenticated: false
            };

        default:
            return state;
    }

};