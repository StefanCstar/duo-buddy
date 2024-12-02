import React, { useState } from 'react';
import {
  FaBolt,
  FaUserFriends,
  FaUsers,
  FaArrowRight,
  FaInfoCircle,
  FaSmile,
  FaGamepad,
} from 'react-icons/fa';

const Services = () => {
  const [selectedTier, setSelectedTier] = useState('Ultra Duo');
  const [numberOfGames, setNumberOfGames] = useState(1); // Default value is set to 1

  const rankUpTiers = [
    {
      title: 'Ultra Duo Win Boost',
      description: 'Rank up with a Grandmaster+ player and Win Guaranteed',
      price: 14.99,
      icon: <FaBolt className="text-white text-2xl" />,
    },
    {
      title: 'Ultra Duo',
      description: 'Play with a Grandmaster+ player',
      price: 7.99,
      icon: <FaUserFriends className="text-white text-2xl" />,
      badge: 'Most Popular',
    },
    {
      title: 'Pro Duo',
      description: 'Play with a Master+ player',
      price: 4.99,
      icon: <FaUsers className="text-white text-2xl" />,
    },
  ];

  const socialTiers = [
    {
      title: 'Friend',
      description: 'Meet with new people for a fun-filled experience',
      price: 3.49,
      icon: <FaSmile className="text-white text-2xl" />,
    },
    {
      title: 'ARAM',
      description: 'Play a fun ARAM with our pro teammates',
      price: 3.49,
      icon: <FaGamepad className="text-white text-2xl" />, // Changed to FaGamepad
    },
  ];

  const allTiers = [...rankUpTiers, ...socialTiers];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Rank Up Section */}
        <div className="mb-4">
          <div className="flex items-center">
            <h2 className="text-lg font-semibold text-gray-300">Rank Up</h2>
            <div className="relative ml-2 group">
              <FaInfoCircle className="text-gray-400 hover:text-white cursor-pointer group-hover:text-purple-500" />
              <div className="absolute left-6 top-0 w-64 bg-gray-800 text-sm text-gray-300 p-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                Play with a pro teammate across all game modes, including Ranked, Unranked, Flex, and any mode you want!
              </div>
            </div>
          </div>
        </div>

        {/* Tiers Section */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Rank Up Tiers */}
          <div className="md:w-2/3">
            <ul className="space-y-4">
              {rankUpTiers.map((tier, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedTier(tier.title)}
                  className={`p-4 rounded-lg cursor-pointer flex items-center justify-between transform transition-transform duration-300 ${
                    selectedTier === tier.title
                      ? 'bg-gradient-to-r from-purple-600 to-purple-400 border-2 border-purple-300 scale-105 shadow-lg'
                      : 'bg-black bg-opacity-10 hover:bg-purple-800 hover:bg-opacity-30'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-purple-500 rounded-full">
                      {tier.icon}
                    </div>
                    <div>
                      {tier.badge && (
                        <span className="inline-block bg-purple-600 text-white px-2 py-1 rounded text-xs mb-2">
                          {tier.badge}
                        </span>
                      )}
                      <h3 className="text-lg font-bold text-gray-200">{tier.title}</h3>
                      <p className="text-sm text-gray-400">{tier.description}</p>
                      <a href="#details" className="text-sm text-purple-300 underline">
                        See details
                      </a>
                    </div>
                  </div>
                  <p className="text-lg font-extrabold text-white">€{tier.price} / game</p>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-gray-700 mt-6"></div>

            {/* Social Tiers */}
            <div className="mt-6">
              <div className="flex items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-300">Social</h2>
                <div className="relative ml-2 group">
                  <FaInfoCircle className="text-gray-400 hover:text-white cursor-pointer group-hover:text-purple-500" />
                  <div className="absolute left-6 top-0 w-64 bg-gray-800 text-sm text-gray-300 p-3 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
                    Play fun modes with friends and meet new people!
                  </div>
                </div>
              </div>
              <ul className="space-y-4">
                {socialTiers.map((tier, index) => (
                  <li
                    key={index}
                    onClick={() => setSelectedTier(tier.title)}
                    className={`p-4 rounded-lg cursor-pointer flex items-center justify-between transform transition-transform duration-300 ${
                      selectedTier === tier.title
                        ? 'bg-gradient-to-r from-purple-600 to-purple-400 border-2 border-purple-300 scale-105 shadow-lg'
                        : 'bg-black bg-opacity-10 hover:bg-purple-800 hover:bg-opacity-30'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-purple-500 rounded-full">
                        {tier.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-200">{tier.title}</h3>
                        <p className="text-sm text-gray-400">{tier.description}</p>
                        <a href="#details" className="text-sm text-purple-300 underline">
                          See details
                        </a>
                      </div>
                    </div>
                    <p className="text-lg font-extrabold text-white">€{tier.price} / game</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Find Teammate Section */}
          <div className="md:w-1/3 bg-black bg-opacity-10 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-6 text-gray-200">Find Teammate</h2>
            <div className="space-y-4 flex-1">
              <div>
                <label className="block text-gray-400 mb-2">Number of Games</label>
                <input
                  type="number"
                  min="1"
                  value={numberOfGames}
                  onChange={(e) => setNumberOfGames(e.target.value)}
                  className="w-full p-2 rounded bg-gray-700 text-white"
                  placeholder="Enter games"
                />
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="text-gray-400">Total:</span>
                <span className="font-bold text-purple-500">
                  €{(numberOfGames * allTiers.find((tier) => tier.title === selectedTier).price).toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-lg text-lg transition-transform transform hover:scale-105 flex items-center justify-center">
                <span className="mr-2">Buy Now</span>
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;