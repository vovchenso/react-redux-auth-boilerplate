import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import Routers from './Routers';

const Root = ({ store, history }) => (

    <Provider store={ store }>
        <Routers store={ store } history={ history } />
    </Provider>

);

Root.propTypes = {
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Root;
