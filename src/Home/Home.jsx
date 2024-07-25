import React from 'react'
import Navbar from '../components/Navbar';
import Freebook from '../components/Freebook'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
const Home = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar />
    <Banner/>
    <Footer/>
    </div>
    </>
  )
}

export default Home