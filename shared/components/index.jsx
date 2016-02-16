import React from 'react';

const AppView = ({children}) => (
    <div id="app-view">
        <h1>Todos</h1>

        <hr />

        {children}
    </div>
);

export default AppView;
