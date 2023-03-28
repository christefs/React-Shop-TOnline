import React from 'react';
import LabelPass from '../components/LabelPass';
import Password from '../components/Password';

//import Form1 from '../containers/Form1';

import '../styles/NewPassword.scss';

const NewPassword = () => {
    return (        
        <div className="NewPassword">
            <div className="NewPassword-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="NewPassword-logo" />        
                <h1 className="NewPassword-title">Create a new password</h1>
                <p className="NewPassword-subtitle">Enter a new passwrd for yue account</p>
                <form action="/" className="NewPassword-form">
                    <LabelPass />
                    <Password />
                    <LabelPass />
                    <Password />                    
                    <input type="submit" value="Confirm" className="NPass-primary-button NPass-login-button" />
                </form>
            </div>    
        </div>
    );
}

export default NewPassword;
