import React from 'react';
import Form1 from '../containers/Form1';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="Account">
            <div className="Account-container">
                <h1 className="Account-title">My account</h1>
            
                <form action="/" className="Account-form">
                    
                    <Form1 />
            
                    <input type="submit" value="Create" className="Account-primary-button Account-login-button" />
                </form>
            </div>
        </div>

    );
}

export default CreateAccount;