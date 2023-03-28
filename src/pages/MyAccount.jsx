import React from 'react';
import Form2 from '../containers/Form2';
import '../styles/MyAccount.scss';

const MyAccount = () => {
    return (
        <div className="MyAccount-login">
            <div className="MyAccount-form-container">
                <h1 className="MyAccount-title">My account</h1>

                <form action="/" className="MyAccount-form">
                    <Form2 />
                   
                    <input type="submit" value="Edit" className="MyAccount-secondary-button MyAccount-login-button" />
                </form>
            </div>
        </div>

    );
}

export default MyAccount;