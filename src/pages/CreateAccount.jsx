import React from 'react';
import LabelName from '../components/LabelName';
import Name1 from '../components/Name1';
import LabelMail from '../components/LabelMail';
import Email1 from '../components/Email1';
import LabelPass from '../components/LabelPass';
import Password from '../components/Password';
import '../styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
        <div className="Account">
            <div className="Account-container">
                <h1 className="Account-title">My account</h1>
            
                <form action="/" className="Account-form">
                    <div>
                        <LabelName />
                        <Name1 />
                        <LabelMail />
                        <Email1 />
                        <LabelPass />
                        <Password />
                    
                    </div>
            
                    <input type="submit" value="Create" className="Account-primary-button Account-login-button" />
                </form>
            </div>
        </div>

    );
}

export default CreateAccount;