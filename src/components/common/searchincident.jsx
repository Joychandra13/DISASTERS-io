import React from 'react'

function Search() {
  return (
    <div className='font-Onest'>
      <div className='md:flex md:items-center gap-3'>
        <div className="relative w-[190px] h-[42px] rounded-[6px] ">
          <img
            src="/Frame.png"
            alt="Search Icon"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
          <input
            type="text"
            placeholder="Search incident"
            className="w-full px-4 py-2 ps-10 text-sm border-[#E4E4E7] bg-white rounded-[6px] focus:outline-none"
          />
        </div>
        <div className="relative w-[190px] h-[42px] rounded-[6px] ">
          <input
            type="text"
            placeholder="Sort By: Date modified"
            className="w-full px-4 py-2 text- text-sm border-[#E4E4E7] bg-white rounded-[6px] focus:outline-none"
          />
        </div>
        </div>
      </div>
  )
}

export default Search