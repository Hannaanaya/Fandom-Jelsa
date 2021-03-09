import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Body from '../page/Body';

function App() {
    return (
        <BrowserRouter>
        <Switch>
            <Route component={Body} />
        </Switch>
        </BrowserRouter>
    )
};

export default App;