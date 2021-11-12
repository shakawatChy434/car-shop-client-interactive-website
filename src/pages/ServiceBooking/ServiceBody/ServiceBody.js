import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import ServiceBooking from '../ServiceBooking';

const ServiceBody = () => {
    return (
        <div>
            <Navigation />
            <ServiceBooking />
            <Footer />
        </div>
    );
};

export default ServiceBody;