import React from 'react';
import { FormikLoginForm, FormikSignupForm } from './SignupLoginForm';
import { Route } from 'react-router-dom';

const LandingPage = () => {
    return(
        <div className='pagebox'>
            <Route exact path='/' component={FormikLoginForm} />
            <Route path='/signup' component={FormikSignupForm} />
            
        </div>
    )
}

export default LandingPage