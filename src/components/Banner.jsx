import React, { useState } from 'react';
import banner from '../../public/Banner.png';
import axios from 'axios';
import Freebook from './Freebook';

const Banner = () => {
  const [search, setSearch] = useState("");
  const [bookdata,setBookData]=useState([])
  const apiKey = 'AIzaSyAIQ1kBgChMgq8bq4XAbLmgSvmGE0cUEwE';
  const fetchBooks = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=${apiKey}`)
      .then(res => {
        // Ensure setBookData is a function
        if (typeof setBookData === 'function') {
          setBookData(res.data.items);
        } else {
          console.error('setBookData is not a function');
        }
      })
      .catch(err => console.log(err));
  };

  const searchBook = (evt) => {
    if (evt.type === "keypress" && evt.key === "Enter") {
      fetchBooks();
    } else if (evt.type === "click") {
      fetchBooks();
    }
  };

  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-16 dark:bg-slate-900 dark:text-white'>
      <div className='w-full md:w-1/2 mt-12 md:mt-30 md:order-1'>
        <div className='space-y-8'>
          <h1 className='text-4xl font-bold'>Hello, Welcome Here To Learn Something{""}<span className='text-pink-500'>New Everyday!!!</span></h1>
          <p className='text-xl font-semibold'>Reading books expands our minds, enriches our vocabulary, fosters empathy, and transports us to diverse worlds and experiences.</p>
          <label className="input input-bordered flex items-center gap-2 dark:bg-slate-900 dark:text-white dark:border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
            <input type="text" className="grow" placeholder="Search Books"
              value={search} onChange={(e) => setSearch(e.target.value)}
              onKeyPress={searchBook} />
          </label>
        </div>
        <div className='md:flex justify-center mb-2 mt-2'>
          <button className="bg-pink-500 text-white px-3 py-2 rounded-md hover:bg-pink-800 duration-300 cursor-pointer" onClick={searchBook}>Search</button>
        </div>
      </div>
      <div className='w-full md:w-1/2 md:flex justify-center md:mr-8 order-1 mt-6'>
        <div className="h-92 w-92 order-2 mb-14 ml-9 md:flex justify-center items-center pr-6 md:pr-5">
          <img src={banner} alt='' className="h-full w-full object-cover rounded-md" />
        </div>
      </div>
    </div>
    <div>
    <Freebook books={bookdata}/>
    </div>
    </>
    
  );
};


export default Banner;

