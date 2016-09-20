import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Redirect } from 'react-router';

/** Layouts **/
import Auth from "../components/Layout/Auth";
import Main from "../components/Layout/Main";

/** Pages **/
import Login from '../containers/Login';
import Registration from '../containers/Registration';
import ForgotPassword from '../containers/ForgotPassword';
import RecoverPassword from '../containers/RecoverPassword';
import Dashboard from '../containers/Dashboard';
import Users from '../containers/Users';
import UserCreate from '../containers/UserCreate';
import UserEdit from '../containers/UserEdit';
import Data from '../containers/Data';
import DataCreate from '../containers/DataCreate';
import DataEdit from '../containers/DataEdit';


const Routers = ({ store, history }) => {

    const loadCustomer = (callback) => {
        callback();
    };

    const initialCheck = (nextState, replace, callback) => {
        const { auth } = store.getState();

        if (!auth.authenticated) {
            replace({
                pathname: '/login'
            });
        }

        return loadCustomer(callback);
    };

    const redirectAuth = (nextState, replace, callback) => {
        const { auth } = store.getState();

        if (auth.authenticated) {
            replace({
                pathname: '/',
                state: {
                    active: 'dashboard'
                }
            });
        }

        callback();
    };

    return (

        <Router history={ history }>

            <Route path="/" component={ Main } onEnter={ initialCheck } >

                <IndexRoute component={ Dashboard }/>
                <Redirect from="dashboard" to="/"/>

                <Route path="users" component={ Users }>
                    <Route path="create" component={ UserCreate }/>
                    <Route path="edit/:userId" component={ UserEdit }/>
                </Route>

                <Route path="data" component={ Data }>
                    <Route path="create" component={ DataCreate }/>
                    <Route path="edit/:dataId" component={ DataEdit }/>
                </Route>

            </Route>

            <Route path="/login" component={ Auth } onEnter={ redirectAuth }>

                <IndexRoute component={ Login }/>

                <Route path="registration" component={ Registration }/>
                <Route path="forgot" component={ ForgotPassword }/>
                <Route path="recover" component={ RecoverPassword }/>

            </Route>

        </Router>

    );

};

Routers.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Routers;
