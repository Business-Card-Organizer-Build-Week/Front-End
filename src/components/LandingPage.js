import React from 'react';
import { FormikLoginForm, FormikSignupForm } from './SignupLoginForm';
import { Route, Link } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className='pagebox'>
            <Route exact path='/' component={FormikLoginForm} />
            <Route path='/signup' component={FormikSignupForm} />
            {/* 
            Make these Links instead
            <button className='login'>Log In</button>
            <button className='login'>Sign Up</button> */}
        </div>
    )
}

export default LandingPage