// In Course Component
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Cards from './Cards';
import axios from 'axios';
import banner from '../../public/Banner.png';

const Course = () => {
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

  const location = useLocation();
  const books = location.state?.books || [];

  return (
    <>
      <div className='max-w-screen-2xl container md:px-20 dark:bg-slate-900 dark:text-white'>
        <div className='mt-16 p-2 items-center justify-center text-center dark:bg-slate-900 dark:text-white'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We're delighted to have you <span className='text-pink-500'>here :)</span>
          </h1>
          <p className='mt-10'>
            Grab our free books now and explore endless stories, knowledge, and adventures. Don't miss out!
          </p>
        </div>
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
            <input type="text" className="grow" placeholder="Search Courses"
            value={search} onChange={(e) => setSearch(e.target.value)}
            onKeyPress={searchBook} />
          </label>
        <div className='mt-12 grid grid-cols-4 md:grid-cols-3'>
          
           {bookdata.map((book, index) => (
            <Cards
                key={index}
                image={book.volumeInfo.imageLinks?.thumbnail || {banner}}
                name={book.volumeInfo.title}
                price={book.saleInfo.listPrice?.amount || 'Free'}
            />
        ))}
          
        </div>
      </div>
    </>
  );
};

export default Course;
