import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import ClientReviews from '../ClientReviews/ClientReviews';
import Footer from '../Footer/Footer';
import HelpCenter from '../HelpCenter/HelpCenter';
import OurGoodwill from '../OurGoodwill/OurGoodwill';
import QuestionArea from '../QuestionArea/QuestionArea';
import SearchInventory from '../SearchInventory/SearchInventory';
import Services from '../Services/Services';
import TopBanner from '../TopBanner/TopBanner';
import WellcomeArea from '../WellcomeArea/WellcomeArea';

const Home = () => {
    return (
        <div>
            <Navigation />
            <TopBanner />
            <SearchInventory />
            <Services />
            <HelpCenter />
            <OurGoodwill />
            <ClientReviews />
            <WellcomeArea />
            <QuestionArea />
            <Footer />
        </div>
    );
};

export default Home;