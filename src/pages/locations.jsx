import React from 'react'
import { Button } from '../components/common/button'
import Search from '../components/common/searchincident'

function Locations() {
  return (
    <div>
        <div className='bg-[#E4E4E780] overflow-hidden font-Onest'>
           <div className='container md:flex md:mx-auto justify-between ms-[20%] items-center pt-[32px] pb-[23px] sm:p-3'>
                <div className='pb-[13px] md:p-0'>
                   <p className='text-secondary'>Incidents - DR-4699 March 2023 Severe Storms </p>
                   <div className='flex items-center gap-6'>
                    <img src="/fi_15330449.png" alt="" className='w-6 h-6'/>
                    <h1 className='md:text-[26px] text-lg font-bold font-Onest'>DR-4699 March 2023 Severe Storms</h1>
                   </div>
                </div>
                <div className='md:flex gap-3  items-center'>
                    <Search/>
                <Button className=' mt-3 md:mt-0 '>+ New Incident</Button>
                </div>
            </div>
        </div>
        <div className=' grid grid-cols-12 container mx-auto'>
            <div className='md:col-span-6 col-span-12 mx-auto md:mx-0'>
            <div className='flex items-center gap-3 mt-10'>
                <img src="/11.png" alt="" />
                <div>
                    <p className='text-secondary text-sm'>Location</p>
                    <h1 className='text-xl text-primary font-bold'>Tulare County,  Los Angles, CA 23415</h1>
                </div>
            </div>
            <div className='flex items-center gap-3 mt-11'>
                <img src="/10.png" alt="" />
                <div>
                    <p className='text-secondary text-sm'>Approx. Cost:</p>
                    <h1 className='text-xl text-primary font-bold'>$60,607,456.00</h1>
                </div>
            </div>
            <hr className='my-[40px]' />
            <div>
                <p className='text-sm text-primary font-bold'>Description</p>
                <p className='text-sm text-secondary'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
            </div>
            <hr className='my-[40px]' />
            </div>
            <div className='md:col-span-6 col-span-12'>
                <div className='md:ms-[94px] mt-[40px]  mx-auto md:mx-0'>
                    <p className='text-sm text-secondary mb-[20px]'>Incident Map</p>
                    <img className='md:w-[526px] md:h-[503px] right-0' src="/map.png" alt="" />
                    <p className='text-sm text-secondary mt-[20px]'>Start 19.1232, -118.233     End 19.3245, -119.2323</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations