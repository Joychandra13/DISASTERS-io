import React from 'react'


export const Nev = ()=> {
  return (
    <div>
        <nav className='bg-[#E4E4E780] py-[25px]'>
            <div className='container mx-auto flex justify-between items-center'>
                <img src="/logo1.png" alt="logo" className='w-[131px] h-[36px]'/>

                <div className="hidden lg:flex justify-center items-center gap-3 xl:gap-[35px]">
                    {nevItems.map(({ href, label }, i) => (
                    <a href={href} key={i}>
                    <p className="text-accent text-sm text-secondary font-normal hover:text-primary hover:font-bold active:underline transition-colors duration-150">
                        {label}
                    </p>
                    </a>
                    ))}
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
        </nav>
        <div className='border-b border-[#E4E4E7]'></div>
    </div>
  )
}



const nevItems = [
    {
      label: "Dashboard",
      href: "/",
    },
    {
      label: "Incidents",
      href: "/",
    },
    {
      label: "Locations",
      href: "/",
    },
    {
      label: "Activities",
      href: "/",
    },
    {
      label: "Documents",
      href: "/",
    },
    {
        label: "Cypher AI",
        href: "/",
      },
  ];