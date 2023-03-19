import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import RecoveryPassword from '../containers/RecoveryPassword';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import NewPassword from '../pages/NewPassword';
import EmailSent from '../pages/EmailSent';
import Login1 from '../pages/Login1';
import CreateAccount from '../pages/CreateAccount';

import NewPasswPlatzi from '../pages/NewPasswPlatzi';

import '../styles/global.css';

const App = () => {
    return (
        //<h1>Hola mundo, bienvenidos al curso práctico de React!</h1>
/*        
        <Layout>
            <Login />
            <RecoveryPassword />
        </Layout>
*/
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route exact path="/recovery-password" element={<RecoveryPassword />} />
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/email-sent" element={<EmailSent />} />
                    <Route exact path="/login-user" element={<Login1 />} />
                    <Route exact path="/create-account" element={<CreateAccount />} />

                    <Route exact path="/new-passw-platzi" element={<NewPasswPlatzi />} />
                    <Route path="*" element={<NotFound />} />
                    

                </Routes>
            </Layout>        
        </BrowserRouter>
    );
}

export default App;