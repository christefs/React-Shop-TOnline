import React from 'react';
import LabelPass from '../components/LabelPass';
import Password from '../components/Password';
//import Form1 from '../containers/Form1';

import '../styles/NewPassword.scss';

const NewPassword = () => {
    return (        
        <div className="NewPassword">
            <div className="NewPassword-container">
                <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />        
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new passwrd for yue account</p>
                <form action="/" className="form">
                    <LabelPass />
                    <Password />
                    <LabelPass />
                    <Password />                    
                    <input type="submit" value="Confirm" className="primary-button login-button" />
                </form>
            </div>    
        </div>
    );
}

export default NewPassword;
