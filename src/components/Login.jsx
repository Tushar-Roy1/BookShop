import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  
  return (
    <div className=' dark:bg-slate-700 dark:text-black'>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box  dark:bg-slate-700 dark:text-white">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
            
            <h3 className="font-bold text-lg text-center">Login</h3>
            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br />
              <input type="email" name='email' placeholder='Enter your email' 
                className='w-80 px-3 border rounded-md outline-none py-1 grow  dark:bg-slate-900 dark:text-white dark:border-white'
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br />
              <input type="password" name='password' placeholder='Enter your password' 
                className='w-80 px-3 border rounded-md outline-none py-1 grow  dark:bg-slate-900 dark:text-white dark:border-white'
                {...register("password", { required: true })} />
                <br />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button type="submit" className='bg-pink-600 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-300'>Login</button>
              <p>Not registered? <Link to="/signup" className='text-blue-500 underline'>signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
