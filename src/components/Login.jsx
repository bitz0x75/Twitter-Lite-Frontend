import React from "react";
import '../assets/styles/login.scss';
import '../assets/styles/util.scss';
import LoginForm from './LoginForm';
import SignupForm from "./SignupForm";

 const Login = (props) => {
     return (
        <div 
            className="login-body">
            <div className="limiter">
            <div className="container-login100">
            <div className="login100-more"></div>
            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
            <form className="login100-form validate-form">
            <span className="login100-form-title p-b-59">Twitter-Lite</span>
            { props.location.pathname === '/' ? <LoginForm /> : <SignupForm />}
            </form>
            </div>
            </div>
            </div>
        </div>
     )
 }

export default Login;

