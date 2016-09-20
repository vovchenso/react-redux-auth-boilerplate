import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Root from './components/Root';
import configureStore from './configureStore';

/** load styles **/
import './styles';

const initialState = {};

/** Create store **/
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

/** Run application **/
ReactDOM.render(
    <Root store={ store } history={ history } />,
    document.getElementById('root')
);
