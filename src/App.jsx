// import React from 'react';
import TypingEffect from './TypingEffect';

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center font-serif gap-10 min-h-screen bg-gradient-to-r from-[#4DA8A8] to-[#D6EAEA]">
      <h1 className="text-5xl lg:text-7xl font-bold justify-center items-center flex">
        Coming Soon
      </h1>
      <TypingEffect />
    </div>
  );
};

export default App;
