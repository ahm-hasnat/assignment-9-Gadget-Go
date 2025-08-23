import React from 'react';

import Slider from '../../components/Header/Slider';
import Subscriptions from '../../components/Subscriptions/Subscriptions';
import HappyCustomer from '../../components/Customer/HappyCustomer';
import Faq from '../../components/FAQ/Faq';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Subscriptions></Subscriptions>
            <HappyCustomer></HappyCustomer>
            <Faq></Faq>
        </div>
    );
};

export default Home;