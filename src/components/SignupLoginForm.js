import React, { useState } from "react";
import { withFormik, Form, Field } from "formik";
import * as yup from "yup";
import axios from "axios";
import { axiosWithAuth } from "./axiosWithAuth";
import { Link, Redirect } from "react-router-dom";
import { Icon } from "semantic-ui-react";

const LoginForm = () => {
  return (
    <div className="login-form">
      <div className="form-style">
        <h2>LOG IN</h2>
        <Form>
          <span className='fields'><label>
          <Icon name="user" /> <span className='textlabel'>Username:</span>
          <Field type="text" name="username" />
          </label></span>
          <span className='fields'><label>
          <Icon name="lock" /> <span className='textlabel'>Password:</span>
          <Field type="password" name="password" />
          </label></span>
          <button type="submit" className="login">
            Log In
          </button>
        </Form>
        <p>
          Not a user? Sign up for a free account <Link to="/signup">here</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },
  //============Validation Schema==========
  //============End Validation Schema======

  handleSubmit(values, { props }) {
    console.log("I'm values", values);
    axiosWithAuth()
      .post(
        "https://cardorganizer.herokuapp.com/api/login",
        `grant_type=password&username=${values.username}&password=${values.password}`,
        // OAuth2 requires headers to be set this way manually and must be set on login.
        {
          headers: {
            Authorization: "Basic b3JnYW5pemVyLWlkOm9yZ2FuaXplci1zZWNyZXQ=",
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
      )

      .then(res => {
        //   this is the token, need to figure out how we want to pass this around
        localStorage.setItem("token", res.data.access_token);

        console.log("values after call", values);
      })
      .then(res => {
        console.log("2nd then fired");
        axiosWithAuth()
          .get(
            `https://cardorganizer.herokuapp.com/api/users/name/${values.username}`
          )
          .then(res => {
            console.log("response", res );
            localStorage.setItem("USERID", res.data.userid);
            // localStorage.setItem("USERID", )
            props.history.push("/home");
          });
      })

      .catch(err => {
        console.log("login error in id call", err);
      })
      .catch(err => {
        console.error("login error", err);
      });
  }
})(LoginForm);

const SignupForm = () => {
  return (
    <div className="login-form">
              <div className='form-style'><h2>SIGN UP</h2>
              
              <Form>
              <span className='fields'><label>
              <span className='textlabel'>Email:</span>
              <Field type="email" name="email" />
              </label></span>
              <span className='fields'><label>
              <span className='textlabel'>Username:</span>
              <Field type="text" name="username" />
              </label></span>
              <span className='fields'><label>
              <span className='textlabel'>Password:</span>
              <Field type="password" name="password" />
              </label></span>
              <span className='fields'><label>
              <span className='textlabel'>Confirm Password:</span>
              <Field type="password" name="passwordConfirmation" />
              </label></span>
              <button type="submit" className="login">
              Sign Up
              </button>
              <p>
                Already a Member? Login <Link to="/">here</Link>.
              </p>
              </Form></div>
    </div>
  );
};

export const FormikSignupForm = withFormik({
  mapPropsToValues({ email, username, password }) {
    return {
      email: email || "",
      username: username || "",
      password: password || ""
    };
  },
  //============Validation Schema==========
  //============End Validation Schema======
  handleSubmit(values, { props }) {
    axios
      .post("https://cardorganizer.herokuapp.com/api/newuser", values)
      .then(res => {
        console.log(res);
        props.history.push("/");
      })
      .catch(err => {
        console.log("submit error", err);
      });
  }
})(SignupForm);
