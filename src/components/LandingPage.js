import React from 'react';
import { FormikLoginForm } from './SignupLoginForm';

const LandingPage = () => {
    return(
        <div className='pagebox'>
            <FormikLoginForm />
            {/* 
            Make these Links instead
            <button className='login'>Log In</button>
            <button className='login'>Sign Up</button> */}
        </div>
    )
}

export default LandingPage