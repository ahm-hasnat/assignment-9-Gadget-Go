import React from 'react';

import Slider from '../../components/Header/Slider';
import Subscriptions from '../../components/Subscriptions/Subscriptions';
import HappyCustomer from '../../components/Customer/HappyCustomer';
import Faq from '../../components/FAQ/Faq';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>GadgetGo-home</title>
            </Helmet>
            <Slider></Slider>
            <Subscriptions></Subscriptions>
            <HappyCustomer></HappyCustomer>
            <Faq></Faq>
        </div>
    );
};

export default Home;