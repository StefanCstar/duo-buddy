import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const RotatingText = () => {
  return (
    <div>
      <h1 className="text-2xl lg:text-4xl font-bold text-white">
        Hire{' '}
        <span className="text-purple-500">
          <Typewriter
            words={['a pro teammate','a challenger player', 'a DuoBuddy!']}
            loop={true}
            cursor
            cursorStyle="_" // Underscore cursor
            typeSpeed={125} // 2 seconds typing time (125ms per character for ~16 characters)
            deleteSpeed={125} // 2 seconds deleting time (125ms per character for ~16 characters)
            delaySpeed={2000} // 2-second pause after typing each phrase
          />
        </span>
      </h1>
    </div>
  );
};

export default RotatingText;