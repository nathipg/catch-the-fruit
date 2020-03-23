import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Start from './containers/Start/Start';
import Select from './containers/Select/Select';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/select-fruit" component={Select} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
