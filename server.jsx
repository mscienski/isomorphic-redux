import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {RouterContext, match, browserHistory} from 'react-router';
import routes from 'routes';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import * as reducers from 'reducers';

const app = express();

app.use((req, res) => {
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);

    match({routes, location: req.url}, (err, redirectLocation, renderProps) => {
        if (err) {
            console.error(err);
            return res.status(500).end('Internal server error');
        }

        if (!renderProps) {
            return res.status(404).end('Not found');
        }

        const InitialComponent = (
            <Provider store={store}>
                <RouterContext {...renderProps} />
            </Provider>
        );

        const initialState = JSON.stringify(store.getState());

        const componentHTML = renderToString(InitialComponent);

        const HTML = `
            <!doctype html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Isomorphic Redux Demo</title>
                    <script type="application/javascript">
                        window.__INITIAL_STATE__ = ${initialState};
                    </script>
                </head>
                <body>
                    <div id="react-view">${componentHTML}</div>
                    <script type="application/javascript" src="/bundle.js"></script>
                </body>
            </html>
        `;

        res.end(HTML);
    });
});

export default app;
