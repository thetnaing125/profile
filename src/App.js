import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import Man from "./img/man.png";

import Design from '../src/img/design.png';
import Code from '../src/img/code.png';
import Consulting from '../src/img/consulting.png';
import Web1 from '../src/img/web1.png';
import Web2 from '../src/img/web2.png';
import Web3 from '../src/img/web3.png';
import Web4 from '../src/img/web4.png';
import Web5 from '../src/img/web5.png';
import Web6 from '../src/img/web6.png';
import { useState } from 'react';


export default function Home(){
  const [darkMode, setDarkMode] = useState(false);
  return(
    <div className={darkMode ? "dark" : ""}>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl text-teal-500 font-bold'>Developer</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() =>setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#/">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Mr Thet Naing</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Web Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 max-w-lg mx-auto dark:text-white'>Freelancer providing services for programming and design content needs.Join me down below and let's get cracking</p>
          </div>

          <div className='text-5xl flex justify-center gap-16 text-gray-600 dark:text-white'>
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillYoutube/>
          </div>
          
          <div className='dark:bg-red-600 relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
          <img className='w-48 mx-auto mt-5' src={Man} alt='/' layout="fill" objectFit="cover"/>
          </div>
        
        </section>

      <section>
          <div>
            <h3 className='text-3xl py-1 text-teal-500 font-bold dark:text-white'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>Since the beginning of my journey as a freelance developer, I've done remote work for
          <span className='text-teal-500 font-bold dark:text-red-600'> agencies</span> consulted for <span className='text-teal-500 font-bold dark:text-red-600'>startup</span> and collaborated with talanted people to create digital products for both business and consumer use.
          </p>

          <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
            I offer from a wide range of services, including brand design, programming and teaching.
          </p>
          </div>

          <div className='lg:flex gap-10'>
              <div className='text-center dark:bg-white shadow-lg p-10 rounded-xl my-10'>
                  <img className='mx-auto' src={Design} alt='/' width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p className=''>
                    Creating elegant designs suited for your need design theory
                  </p>
                  <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                  <p className='text-gray-800 py-1'>Photoshop</p>
                  <p className='text-gray-800 py-1'>Illustrator</p>
                  <p className='text-gray-800 py-1'>Figma</p>
              </div>

              <div className='text-center dark:bg-white shadow-lg p-10 rounded-xl my-10'>
                  <img className='mx-auto' src={Code} alt='/' width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p>
                    Creating elegant designs suited for your need design theory
                  </p>
                  <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                  <p className='text-gray-800 py-1'>Photoshop</p>
                  <p className='text-gray-800 py-1'>Illustrator</p>
                  <p className='text-gray-800 py-1'>Figma</p>
              </div>

              <div className='text-center dark:bg-white shadow-lg p-10 rounded-xl my-10'>
                  <img className='mx-auto' src={Consulting} alt='/' width={100} height={100}/>
                  <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
                  <p>
                    Creating elegant designs suited for your need design theory
                  </p>
                  <h4 className='py-4 text-teal-600'>Design tools I use</h4>
                  <p className='text-gray-800 py-1'>Photoshop</p>
                  <p className='text-gray-800 py-1'>Illustrator</p>
                  <p className='text-gray-800 py-1'>Figma</p>
              </div>
          </div>
      </section>

      <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              Since the beginning of my journey as a freelance designer and developer, I've done remote work for
              <span className='text-teal-500 font-bold dark:text-red-600'> agencies</span> consulted for <span className='text-teal-500 font-bold dark:text-red-600'>startup</span>and collaborated with talanted people to create digital products for both business and consumer use.
            </p>

            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              I offer from a wide range of services,including brand programming and teaching.
            </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-warp'>
            <div className='basis-1/3 flex-1'>
              <img src={Web1} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" alt='/'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <img src={Web2} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" alt='/'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <img src={Web3} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" alt='/'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <img src={Web4} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" alt='/'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <img src={Web5} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" alt='/'/>
            </div>

            <div className='basis-1/3 flex-1'>
              <img src={Web6} className='rounded-lg object-cover' width={'100%'} height={'100%'} layout="responsive" alt='/'/>
            </div>
          </div>
      </section>
      <footer className='mt-20 h-10 flex justify-center items-center'>
        <h1 className='text-2xl text-center text-black dark:text-white'>2022-2023 &copy; copyright research by <span className='dark:text-red-600'>TN</span></h1>
      </footer>
      </main>
    </div>
  );
}

