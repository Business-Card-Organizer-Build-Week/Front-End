import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <exact Route to='/' component={LandingPage} />
      <Route to='/home' component={Home} />
    </div>
  );
}

export default App;
