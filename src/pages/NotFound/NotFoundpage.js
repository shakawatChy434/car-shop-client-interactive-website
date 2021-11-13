import React from 'react';
import Footer from '../Home/Footer/Footer';
import Navigation from '../Shared/Navigation/Navigation';
import NotFound from './NotFound';


const NotFoundpage = () => {
    return (
        <div>
            <Navigation />
            <NotFound />
            <Footer />
        </div>
    );
};

export default NotFoundpage;