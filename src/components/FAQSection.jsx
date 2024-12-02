import React, { useState } from 'react';

const FAQs = [
  {
    question: 'What if I lose my game?',
    answer: 'If you lose a game, our team will compensate by playing additional games to meet the service requirements.',
  },
  {
    question: 'Why does pricing vary?',
    answer: 'Pricing depends on your current rank, desired rank, and the mode of gameplay.',
  },
  {
    question: 'Where to enter my League of Legends rank?',
    answer: 'You can provide your current rank during the checkout process or in the order notes.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept credit cards, PayPal, and cryptocurrency for secure and fast transactions.',
  },
  {
    question: 'What if I am not happy with my teammate?',
    answer: 'You can contact support and request a change of teammate or a refund based on our policy.',
  },
  {
    question: 'What is League of Legends Duo Elo Boosting?',
    answer: 'It is a service where you play with a high-skilled booster to increase your rank.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Left Side: Question Mark */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative flex flex-col items-center">
            <div className="text-[140px] font-bold text-purple-500 mb-4 animate-bounce">
              ?
            </div>
            <div className="flex justify-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="w-3 h-3 bg-purple-500 rounded-full mx-1"
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side: FAQs */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left">
            Frequently Asked <span className="text-purple-500">Questions</span>
          </h2>
          <div
            className="space-y-4 max-h-[500px] overflow-y-auto custom-scrollbar"
            style={{
              scrollbarWidth: 'none', // Firefox
              msOverflowStyle: 'none', // IE 10+
            }}
          >
            {FAQs.map((faq, index) => (
              <div
                key={index}
                className="transition-all duration-300 ease-in-out border-b border-gray-600"
              >
                <button
                  className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-200 py-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▲
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    activeIndex === index ? 'max-h-[120px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="mt-4 text-gray-400 text-sm">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;