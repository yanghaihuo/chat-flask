import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Channels from './components/channels/Channels';


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/channels" component={Channels} />
      </Switch>
    </Router>
  );
}

export default App;
