import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

import Start from './containers/Start/Start';

function App() {
  return (
      <Router>
          <Switch>
              <Route exact path="/" component={Start} />
              <Redirect to="/" />
          </Switch>
      </Router>
  );
}

export default App;
