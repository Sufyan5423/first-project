import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen bg-zinc-900 flex items-center px-32 gap-5'>
        <div className='cardcontainer h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>&copy; 2019-2020</button>
        </div>
        </div>

        <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
        <div className='card relative rounded-xl w-full h-full bg-[#000000] flex items-center justify-center'>
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-10'>Rating 5.0 on Clutch</button>

        </div>
        <div className='card relative rounded-xl w-full h-full bg-[#000000] flex items-center justify-center'>
            <img className='pb-4' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute px-3 py-[-0] rounded-full border-2 left-5 bottom-5 text-sm '>Bussiness Bootcamp Alumini</button>

        </div>

        
        </div>
    </div>
  )
}

export default Cards