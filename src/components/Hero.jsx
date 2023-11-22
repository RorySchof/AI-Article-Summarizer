import React from 'react';
import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between w-full mb-10 pt-3 items-center'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain' />
        <button type='button' onClick={() => window.open('https://www.github.com')}
className='bg-black text-white px-1 py-0.5 rounded-md'        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>

        Summarize Articles With <br 
        />
        <span className='orange_gradient'>
OpenAI GPT-4
        </span>
      </h1>

      <h2 className='desc'>
      Simplify your reading with an open-source article summarizer
      that transforms lengthy articles into clear and concise summaries.

      </h2>

    </header>
  );
};

export default Hero;
