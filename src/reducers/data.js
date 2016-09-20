import * as DataActions from "../constants/actions/DataActionTypes";


export default function data(state = {}, action) {

    switch (action.type) {

        case DataActions.FETCH_DATAS_REQUEST:
            return state;

        case DataActions.FETCH_DATAS_SUCCESS:
            return state;

        case DataActions.FETCH_DATAS_FAILURE:
            return state;

        default:
            return state;
    }

};