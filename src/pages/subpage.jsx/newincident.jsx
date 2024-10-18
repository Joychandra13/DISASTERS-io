import React from 'react'
import { NewIncidentCard } from '../../components/common/card'
import { Button } from '../../components/common/button'

function NewIncident() {
  return (
    <div className='font-Onest overflow-hidden'>
        <div className='text-center mt-[85px]'>
            <h1 className='text-[32px] font-bold text-primary'>Let’s get started</h1>
            <p className='text-base text-secondary mt-[14px] px-3'>
                Lorem ipsum dolar sit general sac mascho werhoLorem ipsum <br />dolar sit general sac mascho werhoLorem ipsum dolar sit gene
            </p>
            <img className='mx-auto py-[33px] px-3' src="/linesubpage.png" alt="" />
        </div>
        <NewIncidentCard/>
        <div className='flex justify-center items-center'>
        <Button className="mt-[85px] mb-[85px]">Get started</Button>
        </div>

    </div>
  )
}

export default NewIncident