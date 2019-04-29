import React from 'react';
import '../../assets/styles/login.scss';

const UsernameField = () => {
    return (
        <div className="wrap-input100 validate-input">
          <span className="label-input100">Username</span> 
          <input className="input100" type="text" name="name" placeholder="Username..." required></input>
          <span className="focus-input100"></span>
        </div>
    )
}

export default UsernameField;
