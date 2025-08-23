import React from 'react';

const Customers = [
  {
    id: 1,
    name: 'Emily',
    image: 'https://i.pravatar.cc/150?img=5',
    text: '“ Absolutely love the surprise in every box. Excellent  quality and delivery! ”',
  },
  {
    id: 2,
    name: 'James',
    image: 'https://i.pravatar.cc/150?img=8',
    text: '“ Top-notch service and great value for money. Highly recommend MyBox! ”',
  },
  {
    id: 3,
    name: 'Sophia',
    image: 'https://i.pravatar.cc/150?img=9',
    text: '“ The unboxing experience is always fun. Beautifully curated items! ”',
  },
];

const HappyCustomer = () => {
  return (
    <section className=" py-16 px-4 md:px-12 mt-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-primary">Our Happy Customers</h1>
        <p className="text- mt-2 text-sm md:text-base text-gray-600">
          See what our subscribers have to say about their MyBox experience.
        </p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-3 
      gap-8 max-w-7xl mx-auto">
        {Customers.map((customer) => (
          <div
            key={customer.id}
            className="card shadow-2xl bg-white text-primary p-6 rounded-xl text-center space-y-4"
          >
           
            <img
              src={customer.image}
              alt={customer.name}
              className="w-24 h-24 rounded-full mx-auto border-4 border-purple-300"
            />

           
            <div className="text-2xl font-extrabold text-primary">
              {customer.text}
            </div>

           
            <p className="text-gray-600 text-lg">-{customer.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HappyCustomer;
