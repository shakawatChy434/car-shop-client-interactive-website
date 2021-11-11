import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Login from '../Login/Login';

const LoginCollection = () => {
    return (
        <div>
            <Navigation />
            <Login />
            <Footer />
        </div>
    );
};

export default LoginCollection;