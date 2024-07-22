import React from 'react';
import banner from '../../public/Banner.png'

const Banner = () => {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16  dark:bg-slate-900 dark:text-white'>
        <div className='w-full md:w-1/2 mt-12 md:mt-30 md:order-1'>
        <div className='space-y-8'>
        <h1 className='text-4xl font-bold'>Hello,Welcome Here To Learn Something{""}<span className='text-pink-500'>New Everyday!!!</span></h1>
        <p className='text-xl font-semibold'>Reading books expands our minds, enriches our vocabulary, fosters empathy, and transports us to diverse worlds and experiences.</p>
        <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
        </div >
        <div className='md: flex justify-center mb-2 mt-2'>
        <button className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-800 duration-300 cursor-pointer ">Submit</button>
        </div>
        </div>
        <div className='w-full md:w-1/2 md:flex justify-center  md:mr-8 order-1 mt-6'>
  <div className="h-92 w-92 order-2 mb-14 ml-9 md:flex justify-center items-center  md:pr-5 rounded-md">
    <img src={banner} alt='' className="h-full w-full object-fill rounded-md" />
  </div>
</div>


    </div>
    </>
  )
}

export default Banner