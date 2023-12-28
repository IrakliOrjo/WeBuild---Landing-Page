import React from 'react'

const HouseArticle = () => {
  return (
    <div className='h-screen  px-[20rem] py-[10rem] bg-white'>
        <div className=' flex mb-20'>
            <div className='mt-[10rem] '>
                <p className='italic text-[1.2rem] text-blue-600'>Modern Architecture</p>
                <p className='font-bold  text-sky-950 text-[3rem]'>INTRODUCING A NEW RESIDENCE</p>
                <div className='flex'>
                <div className='w-[5rem] mr-6 mt-4 h-0 border'></div>
                <p className='text-[.9rem] mb-3 leading-8 w-[25rem]'>Each apartment has been 
                    individually designed to maximize space and light. Smart Home Technology installed as standard in each apartment putting you in total control of your home at the touch of a button from wherever you might be.
                </p>
                </div>
                <button className='text-blue-700 ml-[6.4rem]'>
                    Read More
                </button>
            </div>
            <div>
                <img className='w-[500px] h-[640px]' src={'/hha.jpg'} />
            </div>
        </div>
        <div className='flex mb-11 justify-evenly py-4 bg-slate-900'>
            <div className='border-r w-[17rem] py-4 pl-2'>
                <p className='text-[2.7rem] font-bold text-cyan-500'>136</p>
                <p className='text-[.9rem] text-white italic'>Luxe Apartments</p>
            </div>
            <div className='border-r w-[17rem] py-4 pl-2'>
                <p className='text-[2.7rem] font-bold text-cyan-500'>355</p>
                <p className='text-[.9rem] text-white italic'>Bedrooms</p>
            </div>
            <div className='border-r w-[17rem] py-4 pl-2'>
                <p className='text-[2.7rem] font-bold text-cyan-500'>1367</p>
                <p className='text-[.9rem] text-white italic'>Square Meters</p>
            </div>
            <div className='w-[17rem] py-4 pl-2'>
                <p className='text-[2.7rem] font-bold text-cyan-500'>843</p>
                <p className='text-[.9rem] text-white italic'>Happy Customers</p>
            </div>
        </div>
    </div>
  )
}

export default HouseArticle