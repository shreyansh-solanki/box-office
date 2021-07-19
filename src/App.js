import React from 'react';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <Switch>
            <Route exact path="/">
                This is home page
            </Route>
            <Route exact path="/start">
                This is start page
            </Route>
            <Route>This is 404 page</Route>
        </Switch>
    );
}

export default App;
