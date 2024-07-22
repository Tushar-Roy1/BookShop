import React from 'react'
import Cards from './Cards'
import list from '../../public/list.json';
import {Link} from 'react-router-dom'

const Course = () => {
  return (
    <>
    <div className='max-w-screen-2xl container md:px-20  dark:bg-slate-900 dark:text-white'>
      <div className='mt-16 p-2 items-center justify-center text-center  dark:bg-slate-900 dark:text-white'>
      <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to have you {""}<span className='text-pink-500'>here:)</span></h1>
      <p className='mt-10'>Grab our free books now and explore endless stories, knowledge, and adventures. Don't miss out!</p>
       <Link to="/">
      <button className='bg-pink-600  mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-800 duration-300'>Back</button>
      </Link>
      </div>
      <div className='mt-12 grid grid-cols- md:grid-cols-3'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item}/>
          ))
        }
      </div>
    </div>
    </>
  )
}

export default Course