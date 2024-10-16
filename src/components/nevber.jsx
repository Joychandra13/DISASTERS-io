import React, { useState } from 'react';
import { nevItems } from './lib/data'

export const Nev = ()=> {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 return (
    <div>
        <nav className='bg-[#E4E4E780] py-[25px]'>
            <div className='container md:mx-auto ms-[20%] md:flex justify-between items-center'>
                <img src="/logo1.png" alt="logo" className='w-[131px] h-[36px]'/>

                <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-[35px]">
                    {nevItems.map(({ href, label }, i) => (
                    <a href={href} key={i}>
                    <p className="text-accent text-sm text-secondary font-normal hover:text-primary hover:font-bold active:underline transition-colors duration-150">
                        {label}
                    </p>
                    </a>
                    ))}
                </div>
<div className='flex gap-3 mt-3'>
      {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg className="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

                <div className='flex items-center'>
                    <img className='w-[40px] h-[40px]' src="/2.png" alt="" />
                    <img className='w-[40px] h-[40px]' src="/3.png" alt="" />
                    <div>
                        <h1 className='text-[16px] text-secondary font-bold'>Usman Zafar</h1>
                        <p className='text-sm text-secondary '>usmanzafar@gmail.com</p>
                    </div>
                </div>
            </div>
   </div>
        </nav>

        {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <div className="flex flex-col p-4">
            {nevItems.map(({ href, label }, i) => (
              <a href={href} key={i} onClick={() => setIsOpen(false)}>
                <p className="text-accent text-sm text-secondary font-normal hover:text-primary hover:font-bold transition-colors duration-150">
                  {label}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

        <div className='border-b border-[#E4E4E7]'></div>
    </div>
  );
};