import React from 'react';
import {
  FaBolt,
  FaLock,
  FaClock,
  FaWallet,
  FaStar,
  FaUsers,
  FaBrain,
  FaHeadset,
} from 'react-icons/fa';

const benefits = [
  {
    title: 'Rank up Fast',
    description: 'Achieve higher ranks quickly with the help of a professional teammate.',
    icon: <FaBolt />,
  },
  {
    title: 'Safe & Secure',
    description: 'Play with trusted teammates. No cheats, no hacks, just pure skill.',
    icon: <FaLock />,
  },
  {
    title: 'Instant Start',
    description: 'Jump straight into action as soon as your payment is complete.',
    icon: <FaClock />,
  },
  {
    title: '5% Cashback',
    description: 'Earn cashback on every order after 50$ spent.',
    icon: <FaWallet />,
  },
  {
    title: 'Elite Teammates',
    description: 'Partner with the top 0.01% players from the ranked leaderboard.',
    icon: <FaStar />,
  },
  {
    title: 'Learn & Improve',
    description: 'Gain insights and strategies directly from your skilled teammates.',
    icon: <FaBrain />,
  },
  {
    title: 'Building Champions',
    description: 'We ensure our teammates have the best terms to deliver outstanding performance.',
    icon: <FaUsers />,
  },
  {
    title: '24/7 Assistance',
    description: 'Our team is here round the clock to assist you with any queries or issues.',
    icon: <FaHeadset />,
  },
];

const Benefits = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
            Benefits Tailored for <span className="text-purple-500">Our Buddies</span>
          </h2>
        </div>

        {/* Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-black bg-opacity-10 rounded-lg shadow-md hover:shadow-purple-500/50 transform transition-transform duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center text-purple-500 text-3xl mb-4 transition-colors duration-300 hover:text-purple-400">
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-2 text-gray-200">{benefit.title}</h3>

              {/* Description */}
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;