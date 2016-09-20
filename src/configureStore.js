import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import api from './middleware/api';


const configureStore = (initialState = {}, history) => {
    const middlewares = [thunk, api, routerMiddleware(history)];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;
