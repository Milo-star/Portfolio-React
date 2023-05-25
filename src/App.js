import React from 'react';
import { FaMoon } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import img from './images/dev-ed-wave.png'
import bitmoji from './images/bitmoji.png'
import design from './images/design.png'
import code from './images/code.png'
import web1 from './images/web1.png'
import web2 from './images/web2.png'
import web3 from './images/web3.png'
import web4 from './images/web4.png'
import web5 from './images/web5.png'
import web6 from './images/web6.png'

const App = () => {
  return (
    <main className="bg-white px-10 md:px-20 lg:px-40">
      <section className="min-h-screen">
        <nav className="py-10 flex justify-end">
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
          <div className='flex justify-center'>
            <img src={bitmoji}/>
          </div>
          <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Bonnet Milo</h2>
          <h3 className='text-2xl py-2 md:text-3xl'>Developer Full-stack.</h3>
          <p className='text-md py-5 leading-8 text-gray-800 md:text-xl'>Young 19-year-old developer coming out of training at <span className='text-teal-500'>BeCode</span> for 7 months. I present to you my portfolio with my different projects available! I'm starting my internship at <span className='text-teal-500'>Agency Digital</span> as a Fullstack developer</p>
        </div>

        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <a href='https://github.com/Milo-star'>
            <AiFillGithub className='cursor-pointer mb-3'/>
          </a>

          <a href='https://www.linkedin.com/in/milo-bonnet/'>
            <AiFillLinkedin className='cursor-pointer mb-3'/>
          </a>

          <a href='https://twitter.com/el_miloow'>
            <AiFillTwitterCircle className='cursor-pointer mb-3'/>
          </a>
        </div>


        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden'>
          <img src={img} alt="logo"  layout="fill" objectFit="cover"/>
       </div>
      </section>

      <section>
        <div className='mt-10'>
          <h3 className='text-3xl py-1'>Service I offer</h3>
          <p className='text-md py-Z leading-8 text-gray-80'>Since the beginning of my journey I learned to work remotely, I also learned to do design, group work</p>
        </div>

        <div>
          <div className='text-center shadow-2xl p-10 rounded-xl my-10'>
            <div className='flex justify-center'>
              <img src={design} alt="logo" width={100} height={100}/>
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
            <p className='py-2'>Creating elegant designs suited for your needs design theory</p>
            <h4 className='py-4 text-teal-600'>Design tools I use</h4>
            <p className='text-gray-800 py-1'>Figma</p>
            <p className='text-gray-800 py-1'>Canva</p>
          </div>

          <div className='text-center shadow-2xl p-10 rounded-xl my-10'>
            <div className='flex justify-center'>
              <img src={code} alt="logo" width={100} height={100}/>
            </div>
            <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful coding</h3>
            <p className='py-2'>I provide clear, readable and above all quality code!</p>
            <h4 className='py-4 text-teal-600'>The technologies I use</h4>
            <p className='text-gray-800 py-1'>React</p>
            <p className='text-gray-800 py-1'>Vue.js</p>
            <p className='text-gray-800 py-1'>Laravel</p>
            <p className='text-gray-800 py-1'>Tailwind</p>
          </div>
        </div>
      </section>

      <section>
        <div>
          <h3 className='text-3xl py-1'>Portfolio</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>Here are some projects that I realized with heart whether <span className='text-teal-500'>personal</span> or <span className='text-teal-500'>professional</span></p>
        </div>

        <div>
          <div>
            <img src={web1} alt="logo" />
          </div>

          <div>
            <img src={web2} alt="logo" />
          </div>

          <div>
            <img src={web3} alt="logo" />
          </div>

          <div>
            <img src={web4} alt="logo" />
          </div>

          <div>
            <img src={web5} alt="logo" />
          </div>

          <div>
            <img src={web6} alt="logo" />
          </div>
        </div>
      </section>
    </main>

  );
};

export default App;
