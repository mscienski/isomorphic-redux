import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from 'routes';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import promiseMiddleware from 'lib/promiseMiddleware';
import {Provider} from 'react-redux';
import * as reducers from 'reducers';

let initialState = window.__INITIAL_STATE__;

const reducer = combineReducers(reducers);
const finalCreateStore = compose(
    applyMiddleware(promiseMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = finalCreateStore(reducer, initialState);

render(
    <Provider store={store}>
        <Router children={routes} history={browserHistory}></Router>
    </Provider>,
    document.getElementById('react-view')
);
