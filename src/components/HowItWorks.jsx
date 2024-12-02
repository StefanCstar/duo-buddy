import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Choose your service',
    description: 'Pick your desired League of Legends service.',
  },
  {
    number: '02',
    title: 'Secure Checkout',
    description:
      'We accept all major credit cards, Google Pay, Apple Pay, Crypto, and more.',
  },
  {
    number: '03',
    title: 'Order Completed!',
    description:
      "You're all set! Play and start winning with your new teammate.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-black text-white py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4 animate-fadeIn">
            How Does It Work?
          </h2>
          {/* Gradient Divider */}
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-opacity-10 rounded-lg p-8 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-[0_4px_20px_rgba(128,90,213,0.5)] shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:bg-opacity-20 backdrop-blur-md animate-floating"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
              }}
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 right-0 transform translate-x-1/2 hidden md:block">
                  <div className="w-12 h-1 bg-purple-500"></div>
                </div>
              )}

              {/* Step Number */}
              <div className="text-purple-500 text-4xl font-bold mb-4">
                {step.number}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>

              {/* Description */}
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;