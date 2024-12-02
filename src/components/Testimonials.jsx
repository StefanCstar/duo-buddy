import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Alex',
    location: 'United Kingdom',
    text: 'Playing with a Grandmaster teammate was an eye-opener! I learned new strategies and boosted my rank effortlessly.',
  },
  {
    name: 'Bella',
    location: 'Germany',
    text: 'My booster was super friendly and helpful. Not only did we win every game, but I also learned jungle pathing techniques!',
  },
  {
    name: 'Chris',
    location: 'United States',
    text: 'I never knew climbing the ladder could be this fun! My booster was incredibly skilled and gave me valuable tips.',
  },
  {
    name: 'Diana',
    location: 'Canada',
    text: 'The experience was seamless. My teammate carried me to a new rank, but more importantly, I feel like a better player now.',
  },
  {
    name: 'Ethan',
    location: 'Australia',
    text: 'Playing with a professional booster felt like magic. Their insights on game mechanics were game-changing!',
  },
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000); // 4 seconds for each review
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Left Column */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-xl font-semibold text-gray-400 mb-4">Reviews</h2>
          <h1 className="text-4xl font-bold mb-6 leading-tight">
            More than <span className="text-purple-500">30,000+</span> gamers <br />
            Trust <span className="text-purple-500">duobuddy.com</span>
          </h1>
          <p className="text-gray-300">
            Hear from our happy players who climbed ranks, learned advanced gameplay techniques, and had fun with our skilled teammates.
          </p>
        </div>

        {/* Right Column - Testimonials Carousel */}
        <div className="md:w-1/2 relative">
          <div className="relative overflow-hidden h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute top-0 left-0 w-full flex items-center justify-center transform transition-all duration-1000 ${
                  currentIndex === index ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-90 z-0'
                }`}
              >
                <div
                  className="p-6 rounded-lg mx-4 text-center transform hover:scale-105 transition-transform duration-500"
                  style={{
                    width: '90%',
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 0 20px rgba(128, 0, 255, 0.6)', // Slight purple glow
                    background: 'transparent', // No background
                  }}
                >
                  <div className="flex flex-col items-center">
                    {/* Avatar with Initials */}
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-purple-500 text-white text-lg font-bold mb-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-gray-400">{testimonial.location}</p>
                  </div>
                  <p className="mt-4 text-gray-200 text-sm">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;