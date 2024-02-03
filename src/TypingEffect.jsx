import { useEffect } from 'react';
import Typed from 'typed.js';

const TypingEffect = () => {
  useEffect(() => {
    const options = {
      strings: ['AGOLBACH', 'Integrated Charity Organization'],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true,
    };

    const typed = new Typed('#typed-element', options);

    // Clean up the Typed instance when the component unmounts
    return () => {
      typed.destroy();
    };
  }, []);

  return <span id="typed-element" className="text-3xl lg:text-5xl text-center font-bold justify-center items-center flex"></span>;
};

export default TypingEffect;
