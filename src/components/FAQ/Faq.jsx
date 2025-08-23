import React from 'react';

const Faq = () => {
  return (
    <section className="py-16 px-4 md:px-12 ">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-primary mb-4">FAQ</h2>
        <p className="text-gray-600">
          Have questions? We’ve got answers. Browse through our most commonly asked questions below.
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        
        <div className="collapse collapse-arrow bg-base-100 border border-gray-200">
          <input type="radio" name="faq-accordion" defaultChecked />
          <div className="collapse-title font-semibold text-primary">
            What is included in the subscription box?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Each month, you’ll receive a curated selection of 4–6 premium products tailored to your interests.
          </div>
        </div>

     
        <div className="collapse collapse-arrow bg-base-100 border border-gray-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-primary">
            Can I cancel my subscription anytime?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Yes! You can pause or cancel your subscription at any time through your account dashboard.
          </div>
        </div>

        
        <div className="collapse collapse-arrow bg-base-100 border border-gray-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-primary">
            When will I be billed?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Billing occurs on the 1st of each month, and boxes are shipped between the 5th and 10th.
          </div>
        </div>

        <div className="collapse collapse-arrow bg-base-100 border border-gray-200">
          <input type="radio" name="faq-accordion" />
          <div className="collapse-title font-semibold text-primary">
            Do you ship internationally?
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Currently, we ship within the United States and Canada. International shipping is coming soon!
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
