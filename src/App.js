import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import {
  FormikLoginForm,
  FormikSignupForm
} from "./components/SignupLoginForm";
import Home from "./components/Home";
import MyCard from "./components/MyCard";
import { FormikEditForm } from "./components/EditCardForm";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" component={Home} />
        <Route exact path="/" component={FormikLoginForm} />
        <Route path="/signup" component={FormikSignupForm} />
        <Route path="/editform" component={FormikEditForm} />
      </Switch>
    </div>
  );
}

export default App;
