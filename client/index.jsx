import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from 'routes';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from 'reducers';

const history = createBrowserHistory();

let initialState = JSON.parse(window.__INITIAL_STATE__);

const reducer = combineReducers(reducers);
const store = createStore(reducer, initialState);

render(
    <Provider store={store}>
        <Router children={routes} history={history} />
    </Provider>,
    document.getElementById('react-view')
);
