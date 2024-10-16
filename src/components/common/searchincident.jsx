import React from 'react'

function Search() {
  return (
    <div>
      <div className='md:flex items-center gap-3'>
        <div className='w-[190px] h-[42px] bg-white border-[#E4E4E7] rounded-[6px] '>
          <div className='flex items-center mt-2 ps-2'>
            <img src="/Frame.png" alt="" />
            <h1 className='text-secondary'>Search incident</h1>
            </div>
        </div>
        <div className='w-[190px] h-[42px] bg-white border-[#E4E4E7] rounded-[6px] mt-3 md:mt-0'>
            <h1 className='text-secondary mt-2 ps-2'>Sort By: Date modified</h1>
        </div>
        </div>
      </div>
  )
}

export default Search