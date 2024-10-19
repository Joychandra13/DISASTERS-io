import React from 'react'
import { Button } from '../components/common/button'
import Search from '../components/common/searchincident'
import { ActivitiesCard, DocumentsCard, LocationsCard } from '../components/common/card'
import { SmText } from '../components/common/smtext'

function Locations() {
  return (
    <div className='p-5 md:p-0 font-Onest'>
        <div className='bg-[#E4E4E780] overflow-hidden p-5 md:p-0 border rounded-md md:border-none md:rounded-none font-Onest'>
           <div className='container md:flex md:mx-auto justify-between items-center pt-[32px] pb-[24px] sm:p-3'>
                <div className='pb-[13px] md:p-0'>
                   <SmText>Incidents - DR-4699 March 2023 Severe Storms </SmText>
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
        <div className=' grid grid-cols-12 container mx-auto mb-[80px]'>
            <div className='md:col-span-6 col-span-12 mx-auto md:mx-0'>
            <div className='flex items-center gap-3 mt-10'>
                <img src="/11.png" alt="" />
                <div>
                    <SmText>Location</SmText>
                    <h1 className='text-xl text-primary font-bold'>Tulare County,  Los Angles, CA 23415</h1>
                </div>
            </div>
            <div className='flex items-center gap-3 mt-11'>
                <img src="/10.png" alt="" />
                <div>
                    <SmText>Approx. Cost:</SmText>
                    <h1 className='text-xl text-primary font-bold'>$60,607,456.00</h1>
                </div>
            </div>
            <hr className='my-[40px]' />
            <div>
                <SmText className='text-primary font-bold'>Description</SmText>
                <SmText>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</SmText>
            </div>
            <hr className='my-[40px]' />
            <div>
                <div className='flex justify-between'>
                    <SmText className='text-primary font-bold'>Locations</SmText>
                    <SmText><u>See all</u></SmText>
                </div>
                <LocationsCard/>
            </div>
            <hr className='my-[40px]' />
            <div>
                <div className='flex justify-between'>
                    <SmText className='text-primary font-bold'>Activities</SmText>
                    <SmText><u>See all</u></SmText>
                </div>
                <ActivitiesCard/>
            </div>
            <div>
            <hr className='my-[40px]' />
                <div className='flex justify-between'>
                    <SmText className='text-primary font-bold'>Documents</SmText>
                    <SmText><u>See all</u></SmText>
                </div>
                <DocumentsCard/>
            </div>
            </div>


            <div className='md:col-span-6 col-span-12'>
                <div className='md:ms-[94px] mt-[40px]  mx-auto md:mx-0'>
                    <SmText className='mb-[20px]'>Incident Map</SmText>
                    <img className='md:w-[526px] md:h-[503px] right-0' src="/map.png" alt="" />
                    <SmText className='mt-[20px]'>Start 19.1232, -118.233     End 19.3245, -119.2323</SmText>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Locations