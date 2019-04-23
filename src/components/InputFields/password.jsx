import React from 'react';
import '../../assets/styles/login.scss';

const PasswordField = (props) => {
    return (
        <div className="wrap-input100 validate-input">
            <span className="label-input100">{props.label}</span> 
            <input className="input100" type="password" name="password" placeholder="Password..." required></input>
            <span className="focus-input100"></span>
        </div>
    )
}

export default PasswordField;
