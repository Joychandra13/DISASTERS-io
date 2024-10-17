import React from 'react'
import Search from '../components/common/searchincident'
import { Button } from '../components/common/button'
import { Card } from '../components/common/card'
import { Link } from 'react-router-dom';
function Incidents() {

  return (
    <div>
      <div className='bg-[#E4E4E780]'>
      <div className='container md:flex md:mx-auto justify-between ms-[20%] items-center pt-[32px] pb-[23px] sm:p-3'>
      <div className='pb-[13px] md:p-0'>
        <p className='text-secondary'>Home - Incidents</p>
        <h1 className='text-[26px] font-bold font-Onest'>Incidents</h1>
      </div>
      <div className='md:flex gap-3  items-center'>
         <Search/>
         <Link to="/NewIncident"><Button className=' mt-3 md:mt-0 '>+ New Incident</Button></Link>
      </div>
      </div>
      </div>
      <Card/>
    </div>
  )
}

export default Incidents

