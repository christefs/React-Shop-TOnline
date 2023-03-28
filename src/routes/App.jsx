import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../containers/Layout';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import NewPassword from '../pages/NewPassword';
import EmailSent from '../pages/EmailSent';
import Login1 from '../pages/Login1';
import CreateAccount from '../pages/CreateAccount';
import MyAccount from '../pages/MyAccount';
import Checkout from '../pages/Checkout';
import Orders from '../pages/Orders';

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
                    
                    <Route exact path="/new-password" element={<NewPassword />} />
                    <Route exact path="/email-sent" element={<EmailSent />} />
                    <Route exact path="/login-user" element={<Login1 />} />
                    <Route exact path="/create-account" element={<CreateAccount />} />
                    <Route exact path="/my-account" element={<MyAccount />} />
                    <Route exact path="/checkout" element={<Checkout />} />
                    <Route exact path="/orders" element={<Orders />} />

                    <Route path="*" element={<NotFound />} />
                    

                </Routes>
            </Layout>        
        </BrowserRouter>
    );
}

export default App;