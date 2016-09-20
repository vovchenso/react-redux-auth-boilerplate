import React, {  PropTypes} from 'react';
import { Link } from 'react-router';


const Nav = ({ active }) => (
    <div>

        <Link to={{
            pathname: "/dashboard",
            state: {active: "dashboard"}
        }}>Dashboard</Link>

        <Link to={{
            pathname: "/users",
            state: {active: "users"}
        }}>Users</Link>

        <Link to={{
            pathname: "/data",
            state: {active: "data"}
        }}>Data</Link>

    </div>
);

Nav.PropTypes = {
    active: PropTypes.string
};

Nav.DefaultTypes = {
    active: 'dashboard'
};

export default Nav;
