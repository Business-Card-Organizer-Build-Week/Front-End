import React, { useState } from 'react';
import { withFormik, Form, Field, value } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { Link } from 'react-router-dom';

 const LoginForm = () => {
    return(
        <div className='login-form'>
            <Form>
                <label>
                    Username:
                    <Field type='text'
                            name='username'/>
                </label>
                <label>
                    Password:
                    <Field type='password'
                            name='password'/>

                </label>
                <button className='login'>Log In</button>
            </Form>
            <p>Not a user? Sign up for a free account <Link to='/signup'>here</Link> </p>

            </div>
    )
}

export const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || "",
            password: password || ""
        };
    },
    //============Validation Schema==========
    //============End Validation Schema======
    handleSubmit(values){
        axios.post('', values)
    }
})(LoginForm);

const SignupForm = () => {
    return(
        <div className='signup-form'>
            <Form>
                <label>
                    Email:
                    <Field type='email'
                           name='email'/>

                </label>
                <label>
                    Username:
                    <Field type='text'
                            name='username'/>
                </label>
                <label>
                    Password:
                    <Field type='password'
                            name='password'/>

                </label>
                <label>
                    Confirm Password:
                    <Field type='password'
                            name='password'/>

                </label>
                <button className='login'>Sign Up</button>
                Already a Member? Login <Link to='/'>here</Link>.
            </Form>
            </div>
    )
}

export const FormikSignupForm = withFormik({
    mapPropsToValues({ email, username, password }){
        return {
            email: email || "",
            username: username || "",
            password: password || ""
        };
    },
    //============Validation Schema==========
    //============End Validation Schema======
    handleSubmit(values){
      
    }
})(SignupForm);


