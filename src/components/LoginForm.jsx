import React from "react";
import '../assets/styles/login.scss';
import EmailField from '../components/InputFields/email';
import PasswordField from '../components/InputFields/password';
import SubmitButton from '../components/SubmitButton';
import { Link } from 'react-router-dom';

const LoginForm = (props) => {
    return (
		<div className="form-div">
        <EmailField />
        <PasswordField label="Password" name="password"/>
        <p className="error-message">{props.error}</p>
        <SubmitButton button_label="Login"/>
        <p className="signup-text">No account? <Link to="/signup">Signup</Link></p>
		</div>
    )
}


export default LoginForm;

