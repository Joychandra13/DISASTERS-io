
import React from 'react'
import Search from './searchincident'
import {Button} from './button'

function HeroSection() {
  return (
    <div>
      <div className='bg-[#E4E4E780]'>
      <div className='container md:flex md:mx-auto justify-between ms-[20%] items-center pt-[32px] pb-[23px] sm:p-3'>
      <div className='pb-[13px] md:p-0'>
        <p className='text-secondary'>Welcome back</p>
        <h1 className='text-[26px] font-bold font-Onest'>Dashboard</h1>
      </div>
      <div className='md:flex gap-3  items-center'>
         <Search/>
        <Button className=' mt-3 md:mt-0 '>Cypher AI</Button>
      </div>
      </div>
      </div>
    </div>
  )
}

export default HeroSection;
