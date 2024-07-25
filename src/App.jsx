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
      <Route path='/' element={<Home/>}></Route>
      <Route path='/course' element={<Courses/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      </Routes>
    </Router>
    </div>
    <div>

    </div>
    </>
  )
}

export default App