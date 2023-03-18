import React from 'react';
import Email1 from '../components/Email1';
import LabelMail from '../components/LabelMail';
import LabelPass from '../components/LabelPass';
import Password from '../components/Password';
import '../styles/Login1.scss';

const Login1 = () => {
    return (
        <div className="login">
            <div className="form-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

            <form action="/" className="form">
                
                <LabelMail />
                <Email1 />

                <LabelPass />
                <Password />

                <input type="submit" value="Log in" className="primary-button login-button" />
                <a href="/">Forgot my password</a>
            </form>

            <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>

    );
}

export default Login1; 
