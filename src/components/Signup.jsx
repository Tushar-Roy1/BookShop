import React from 'react'
import Login from './Login';
import { useForm } from "react-hook-form"

import {Link} from 'react-router-dom'
const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => console.log(data)
  return (
    <>
   <div className='flex h-screen items-center justify-center '>
  <div className="border-[2px] shadow-md p-5 rounded-md modal-box  dark:bg-slate-700 dark:text-white">
    <form onSubmit={handleSubmit(onSubmit)} method='dialog' className=''>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg text-center">Signup</h3>
    <div className='mt-4 space-y-2'>
    <span>Name</span>
    <br />
    <input type="text" placeholder='Enter your name' 
    className='w-80 px-3 border rounded-md outline-none py-1 grow  dark:bg-slate-900 dark:text-white dark:border-white'
    {...register("name", { required: true })} />
    <br />
    {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='mt-4 space-y-2'>
    <span>Email</span>
    <br />
    <input type="email" placeholder='Enter your email' 
    className='w-80 px-3 border rounded-md outline-none py-1 grow  dark:bg-slate-900 dark:text-white dark:border-white'
    {...register("email", { required: true })}
     />
     
     <br />
     {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='mt-4 space-y-2'>
    <span>Password</span>
    <br />
    <input type="password" placeholder='Enter your password' 
    className='w-80 px-3 border rounded-md outline-none py-1 grow  dark:bg-slate-900 dark:text-white dark:border-white'
    {...register("password", { required: true })} />
    <br />
    {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
   </div>
   <div className='flex justify-around mt-4'>
    <button className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-300'>Signup</button>
    <p>Have account?<button className='text-blue-500 underline'
     onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>{""}
     <Login/>
      
    </p>
    
   </div>
   </form>
  </div>
  
  </div>
    </>
  )
}

export default Signup