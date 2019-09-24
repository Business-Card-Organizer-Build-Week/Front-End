import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <Switch>< Route exact to='/' component={LandingPage} />
      <Route to='/home' component={Home} /></Switch>
    </div>
  );
}

export default App;
