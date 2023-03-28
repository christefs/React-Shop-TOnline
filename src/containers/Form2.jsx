import React from 'react';
import LabelName from '../components/LabelName';
import Name2MyAccount from '../components/Name2MyAccount';
import LabelMail from '../components/LabelMail';
import Email2MyAccount from '../components/Email2MyAccount';
import LabelPass from '../components/LabelPass';
import Password2MyAccount from '../components/Password2MyAccount';

const Form2 = () => {
    return (
        <div>
            <LabelName />
            <Name2MyAccount />
            <LabelMail />
            <Email2MyAccount />
            <LabelPass />
            <Password2MyAccount />
        </div>

    );
}

export default Form2;