import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'
import { FormikLoginForm, FormikSignupForm } from './components/SignupLoginForm';

import LandingPage from "./components/LandingPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Switch>
     
        <PrivateRoute path="/home" component={Home} />
          
        <Route exact path='/' component={FormikLoginForm} />
        <Route path='/signup' component={FormikSignupForm} />

      </Switch>
    </div>
  );
}

export default App;
