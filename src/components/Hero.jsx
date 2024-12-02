import React from 'react';
import RotatingText from './RotatingText';

const Hero = () => {
  return (
    <section className="bg-black text-white pt-24 pb-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
        {/* Left Content */}
        <div className="lg:w-2/3 text-center">
          <RotatingText />
          <p className="text-lg text-gray-400 mb-8 mt-4">
            Play with Challenger players and start winning in less than 2 minutes.
          </p>
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg text-lg">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;