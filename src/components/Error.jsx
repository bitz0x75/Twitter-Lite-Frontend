import React from 'react';
import '../assets/styles/error.scss';

const ErrorField = () => {
    return (
        <div className="error-wrapper">
            <div className="box">
                <h1 className="error-h1">500</h1>
                    <p className="error-p">Sorry, it's me, not you.</p>
                    <p className="error-p">&#58;&#40;</p>
                    <p className="error-p"><a href="/">Let me try again!</a></p>
            </div>
        </div>
    )
}

export default ErrorField;
