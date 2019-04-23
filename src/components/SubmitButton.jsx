import React from 'react';
import '../assets/styles/login.scss';

const SubmitButton = (props) => {
    return (
        <div className="container-login100-form-btn">
        <div className="wrap-login100-form-btn">
            <div className="login100-form-bgbtn"></div>
            <button className="login100-form-btn">
                { props.button_label }
            </button>
        </div>
    </div>
    )
}

export default SubmitButton;
