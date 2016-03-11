import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from 'containers/index';
import Home from  'containers/Home';

export default(
    <Route name="app" component={App} path="/">
        <IndexRoute component={Home} />
    </Route>
);
