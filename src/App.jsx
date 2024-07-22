import React from 'react'
import Home from './Home/Home';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Course from './components/Course';
import Courses from './Courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Router>
      <Routes>
      <Route path='/' Component={Home}></Route>
      <Route path='/course' Component={Courses}></Route>
      <Route path='/signup' Component={Signup}></Route>
      <Route path='/contact' Component={Contact}></Route>
      <Route path='/about' Component={About}></Route>
      </Routes>
    </Router>
    </div>
    </>
  )
}

export default App