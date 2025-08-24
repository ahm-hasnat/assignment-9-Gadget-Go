import React, { useEffect, useState } from 'react';
import SubscriptionCard from '../SubscriptionCard/SubscriptionCard';

const Subscriptions = () => {
     const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => setSubscriptions(data))
      
  }, []);
    return (
        <div className='mt-20 w-[85%] mx-auto'>
            <h1 className='text-4xl font-bold text-center'> Featured Subscriptions</h1>
            <p className='text-sm text-center mt-4 mb-12 text-gray-600'>Explore our top tech subscription boxes curated for enthusiasts and professionals alike.</p>

      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
        {subscriptions.map(data => (
         <SubscriptionCard data={data} key={data.id}></SubscriptionCard>
        ))}
      </div>
        </div>
    );
};

export default Subscriptions;