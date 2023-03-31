import React, { useRef } from 'react';
import Email1 from '../components/Email1';
import LabelMail from '../components/LabelMail';
import LabelPass from '../components/LabelPass';
import Password from '../components/Password';
import '../styles/Login1.scss';

const Login1 = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        }
        console.log(data);
    }

    return (
        <div className="Login1">
            <div className="Login1-container">
            <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

            <form action="/" className="form" ref={form}>
                
                <LabelMail />
                <Email1 name={Email1.name} />

                <LabelPass />
                <Password name={Password.name} />

                <button onClick={handleSubmit} className="primary-button login-button" >Log in </button>
                <a href="/">Forgot my password</a>
            </form>

            <button className="secondary-button signup-button">Sign up</button>
            </div>
        </div>

    );
}

export default Login1; 
