import React from 'react'
import { Button } from '../components/common/button'
import Search from '../components/common/searchincident'

function Locations() {
  return (
    <div>
        <div className='bg-[#E4E4E780]'>
           <div className='container md:flex md:mx-auto justify-between ms-[20%] items-center pt-[32px] pb-[23px] sm:p-3'>
                <div className='pb-[13px] md:p-0'>
                   <p className='text-secondary'>Incidents - DR-4699 March 2023 Severe Storms </p>
                   <div className='flex items-center gap-6'>
                    <img src="/fi_15330449.png" alt="" className='w-6 h-6'/>
                    <h1 className='text-[26px] font-bold font-Onest'>DR-4699 March 2023 Severe Storms</h1>
                   </div>
                </div>
                <div className='md:flex gap-3  items-center'>
                    <Search/>
                <Button className=' mt-3 md:mt-0 '>+ New Incident</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations