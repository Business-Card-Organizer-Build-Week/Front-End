import React from 'react';
import { SignupLoginForm } from './SignupLoginForm';

const LandingPage = () => {
    return(
        <div className='pagebox'>
            <SignupLoginForm />
            <button className='login'>Log In</button>
            <button className='login'>Sign Up</button>
        </div>
    )
}

export default LandingPage