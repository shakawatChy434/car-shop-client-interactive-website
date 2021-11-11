import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Products from '../Products/Products';

const ProductCollection = () => {
    return (
        <div>
            <Navigation />
            <Products />
            <Footer />
        </div>
    );
};

export default ProductCollection;