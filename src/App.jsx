import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './pages/Home';
import Home from '../src/pages/Home';
import Choir from '../src/pages/Choir';
import About from '../src/pages/About';
import Contact from '../src/pages/Contact';
import Blogs from '../src/pages/Blogs';
import Sermons from '../src/pages/Sermons';
import './App.css';


function App() {

  return (
    <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />} />
      <Route path='/blogs' element={<Blogs />} />
      <Route path='/sermons' element={<Sermons />} />
      <Route path='/choir' element={<Choir />} />
      <Route path='/contact' element={<Contact />} /> 
    </Routes>
  </Router>
  )
}

export default App
