import React from 'react';
import LabelName from '../components/LabelName';
import Name1 from '../components/Name1';
import LabelMail from '../components/LabelMail';
import Email1 from '../components/Email1';
import LabelPass from '../components/LabelPass';
import Password from '../components/Password';
import '../styles/Form1.scss';

const Form1 = () => {
    return (
        <div>
            <LabelName />
            <Name1 />
            <LabelMail />
            <Email1 />
            <LabelPass />
            <Password />
        </div>
    );
}

export default Form1;