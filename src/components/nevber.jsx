import React, { useState } from 'react';
// import { nevItems } from './lib/data'
import { NavLink, Link } from 'react-router-dom';
import './nav.css'


export const Nev = ()=> {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 return (
    <div>
        <nav className='bg-[#E4E4E780] md:py-[25px] overflow-hidden font-Onest p-6 md:p-0'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link to="/"><img src="/logo1.png" alt="logo" className='w-[131px] h-[36px]'/></Link>

                <div>
                  <ul className="hidden lg:flex justify-center items-center gap-3 xl:gap-[35px]">
                    <li className='nav-link'><NavLink to="/">Dashboard</NavLink></li>
                    <li className='nav-link'><NavLink to="/Incidents">Incidents</NavLink></li>
                    <li className='nav-link'><NavLink to="/Locations">Locations</NavLink></li>
                    <li className='nav-link'><NavLink to="/Activities">Activities</NavLink></li>
                    <li className='nav-link'><NavLink to="/Documents">Documents</NavLink></li>
                    <li className='nav-link'><NavLink to="/CypherAI">Cypher AI</NavLink></li>
                  </ul>
                </div>
                
<div className='flex gap-3'>
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
                    <li className='nav-link'><NavLink to="/">Dashboard</NavLink></li>
                    <li className='nav-link'><NavLink to="/Incidents">Incidents</NavLink></li>
                    <li className='nav-link'><NavLink to="/Locations">Locations</NavLink></li>
                    <li className='nav-link'><NavLink to="/Activities">Activities</NavLink></li>
                    <li className='nav-link'><NavLink to="/Documents">Documents</NavLink></li>
                    <li className='nav-link'><NavLink to="/CypherAI">Cypher AI</NavLink></li>
                  </ul>
        </div>
      )}

        <div className='border-b border-[#E4E4E7]'></div>
    </div>
  );
};