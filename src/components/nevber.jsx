import React, { useState } from 'react';
// import { nevItems } from './lib/data'
import { Link } from 'react-router-dom';
import './nav.css'


export const Nev = ()=> {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 return (
    <div>
        <nav className='bg-[#E4E4E780] py-[25px] overflow-hidden font-Onest'>
            <div className='container md:mx-auto ms-[20%] md:flex justify-between items-center'>
                <img src="/logo1.png" alt="logo" className='w-[131px] h-[36px]'/>

                <div>
                  <ul className="hidden lg:flex justify-center items-center gap-3 xl:gap-[35px]">
                    <li className='nav-link'><Link to="/">Dashboard</Link></li>
                    <li className='nav-link'><Link to="Incidents">Incidents</Link></li>
                    <li className='nav-link'><Link to="Locations">Locations</Link></li>
                    <li className='nav-link'><Link to="Activities">Activities</Link></li>
                    <li className='nav-link'><Link to="Documents">Documents</Link></li>
                    <li className='nav-link'><Link to="CypherAI">Cypher AI</Link></li>
                  </ul>
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
                 <ul className="flex flex-col p-4 gap-3 xl:gap-[35px]">
                    <li className='mobil-nav-link'><Link to="/">Dashboard</Link></li>
                    <li className='mobil-nav-link'><Link to="Incidents">Incidents</Link></li>
                    <li className='mobil-nav-link'><Link to="Locations">Locations</Link></li>
                    <li className='mobil-nav-link'><Link to="Activities">Activities</Link></li>
                    <li className='mobil-nav-link'><Link to="Documents">Documents</Link></li>
                    <li className='mobil-nav-link'><Link to="CypherAI">Cypher AI</Link></li>
                  </ul>
        </div>
      )}

        <div className='border-b border-[#E4E4E7]'></div>
    </div>
  );
};