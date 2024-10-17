import React from 'react'
import { Button } from '../components/common/button'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='font-Onest'>
        <div className='flex justify-center mt-20'>
            <img src="/404.png" alt="" />
        </div>
        <div className='text-center text-4xl font-bold'>
            Page Not Found!
        </div>
        <div className='flex justify-center mt-20'>
            <Link to="/" ><Button >Back To Home</Button></Link>
        </div>
    </div>
  )
}

export default Error