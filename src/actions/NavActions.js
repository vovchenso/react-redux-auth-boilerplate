import * as NavActions from "../constants/actions/NavActionTypes";

export const menu = (active) => (dispatch) => {
    dispatch({
        type: NavActions.NAV_MENU,
        active
    });
};
