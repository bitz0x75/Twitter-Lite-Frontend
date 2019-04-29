import React from "react";
import '../assets/styles/login.scss';
import UsernameField from '../components/InputFields/username';
import EmailField from '../components/InputFields/email';
import PasswordField from '../components/InputFields/password';
import SubmitButton from '../components/SubmitButton';
import { Link } from 'react-router-dom';

 const SignupForm = (props) => {
    return (
        <div className="form-div"> 
        <UsernameField />
        <EmailField />
        <PasswordField label="Password" name="password"/>
        <PasswordField label="Confirm Password" name="confirm password"/>
        <p className="error-message">{props.passError}</p>
        <SubmitButton button_label="Create an Account"/>
        <p className="signup-text">Already have an account? <Link to="/">Login</Link></p>
      </div>
    )
}

export default SignupForm;
