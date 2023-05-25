import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const App = () => {
  return (
    <main className="bg-white px-10 ">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-xl'>Milo</h1>
          <ul className='flex items-center'>
            <li>
              <FaMoon className='cursor-pointer text-xl'/>
            </li>
            <li>
              <a href='#' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-5'>Resume</a>
            </li>
          </ul>
        </nav>

        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-teal-600 font-medium'>Bonnet Milo</h2>
          <h3 className='text-2xl py-2'>Developer Full-stack.</h3>
          <p className='text-md py-5 leading-8 text-gray-800'>Freelancer providing services for programming and needs. Join me down below let's get cracking!</p>
        </div>

        <div className='text-5xl text-gray-600'>
          <AiFillTwitterCircle className='cursor-pointer mb-3'/>
          <AiFillGithub className='cursor-pointer mb-3'/>
          <AiFillLinkedin className='cursor-pointer mb-3'/>
        </div>
      
      </section>
    </main>

  );
};

export default App;
