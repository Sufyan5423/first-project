import React from 'react'

function About() {
  return (
    <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='text-[3vw] text-1xl leading-[3.5vw] tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dicta maxime id? Numquam, nobis velit? Aut nobis explicabo ipsam eum!</h1>
    <div className='w-full flex gap-5 border-t-[1px] mt-20 border-[#a1b562]'>
    <div className='w-1/2'>
    <h1 className='text-7xl'>Our Approach</h1>
    <button className='flex uppercase gap-10 items-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
      <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
    </button>
    </div>
    <div className='w-1/2 h-[70vh] mt-4 rounded-[10px] bg-[#879e35]'></div>
    </div>
    </div>
  )
}

export default About