import React from 'react';

const buddies = [
  { id: 1, name: 'ShadowFury', languages: 'EN / DE', initials: 'SF' },
  { id: 2, name: 'BlazeStorm', languages: 'FR / EN', initials: 'BS' },
  { id: 3, name: 'MysticWolf', languages: 'ES / EN', initials: 'MW' },
  { id: 4, name: 'IronHeart', languages: 'EN / IT', initials: 'IH' },
  { id: 5, name: 'FrostBlade', languages: 'EN / RU', initials: 'FB' },
];

const MeetBuddies = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-purple-500">Meet Our Amazing Buddies</h2>
          <p className="text-gray-400 mt-2">
            Get to know some of the top players who can help you climb the ranks.
          </p>
        </div>

        {/* Buddies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {buddies.map((buddy) => (
            <div
              key={buddy.id}
              className="relative rounded-lg p-4 flex flex-col items-center text-center transform hover:scale-105 transition-transform shadow-lg hover:shadow-purple-500/50"
              style={{
                boxShadow: '0 0 15px rgba(128, 0, 255, 0.4)', // Purple glow effect
                background: 'rgba(128, 0, 255, 0.1)', // Subtle purple background glow
              }}
            >
              {/* Placeholder Avatar */}
              <div className="w-20 h-20 flex items-center justify-center bg-purple-500 text-white font-bold text-2xl rounded-full shadow-md mb-4">
                {buddy.initials}
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-gray-200">{buddy.name}</h3>

              {/* Languages */}
              <p className="text-sm text-gray-400">{buddy.languages}</p>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <button className="px-6 py-2 bg-transparent border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded-lg transition-colors">
            Show All Buddies
          </button>
        </div>
      </div>
    </section>
  );
};

export default MeetBuddies;