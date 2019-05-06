import React from 'react';
import '../../assets/styles/login.scss';

const EmailField = () => {
    return (
        <div className="wrap-input100 validate-input">
            <span className="label-input100">Email</span> 
            <input className="input100" type="email" name="email" placeholder="Email addess..." required></input>
            <span className="focus-input100"></span>
        </div>
    )
}

export default EmailField;
