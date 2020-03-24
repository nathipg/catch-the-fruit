import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Start from './containers/Start/Start';
import Select from './containers/Select/Select';
import Game from './containers/Game/Game';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Start} />
                <Route exact path="/select-fruit" component={Select} />
                <Route path="/game" component={Game} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
