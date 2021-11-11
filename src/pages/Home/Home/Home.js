import React from 'react';
import ClientReviews from '../ClientReviews/ClientReviews';
import Footer from '../Footer/Footer';
import HelpCenter from '../HelpCenter/HelpCenter';
import OurGoodwill from '../OurGoodwill/OurGoodwill';
import QuestionArea from '../QuestionArea/QuestionArea';
import TopBanner from '../TopBanner/TopBanner';
import WellcomeArea from '../WellcomeArea/WellcomeArea';

const Home = () => {
    return (
        <div>
            <TopBanner />
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