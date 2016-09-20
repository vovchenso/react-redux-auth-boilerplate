import * as UserActions from "../constants/actions/UserActionTypes";


export default function users(state = {}, action) {

    switch (action.type) {

        case UserActions.FETCH_USERS_REQUEST:
            return state;

        case UserActions.FETCH_USERS_SUCCESS:
            return state;

        case UserActions.FETCH_USERS_FAILURE:
            return state;

        default:
            return state;
    }

};