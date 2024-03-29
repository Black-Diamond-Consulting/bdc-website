import hero from '../assets/hero-bg.png';
import { useState, useEffect } from 'react';

const texts = {
  id1: 'REINVENT YOUR BUSINESS',
  id2: 'Leverage our analytics solutions and text expertise',
  id3: "LET'S TALK"
};

export const Hero = () => {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);

  const words = texts.id1;

  useEffect(() => {
    const timer = setTimeout(() => {
      setText(words.substring(0, index + 1));
      setIndex(index + 1);
    }, 100);

    if (index === words.length) {
      clearTimeout(timer)
    }

    return () => clearTimeout(timer);
  }, [index, words]);

  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-screen flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <p className='text-white text-7xl font-bold py-2 px-5 z-10'>{text}</p>
        <p className='text-white font-bold p-4 text-xl z-10 mb-5'>{texts.id2}</p>
        <button className='bg-orange-600 hover:bg-orange-800 text-white py-2 px-4 rounded relative z-10'>{texts.id3}</button>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}
