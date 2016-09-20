import * as NavActions from "../constants/actions/NavActionTypes";

export default function nav(state = {
    active: 'dashboard'
}, action) {

    switch(action.type) {

        case NavActions.NAV_MENU:
            return {
                active: action.active
            };

        default:
            return state;
    }

};