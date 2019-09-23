import React, { useState } from 'react';
import { withFormik, Form, Field } from 'formik';

export const SignupLoginForm = () => {
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
            </div>
    )
}

export const FormikLoginForm = withFormik({
    mapPropsToValues({ username, password }){
        return {
            username: username || "",
            password: password || ""
        };
    }
})(SignupLoginForm);

