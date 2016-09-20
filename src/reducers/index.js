import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import nav from './nav';
import auth from './auth';
import users from './users';
import data from './data';


const rootReducer = combineReducers({
    nav,
    auth,
    users,
    data,
    routing
});

export default rootReducer;