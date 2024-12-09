import * as React from 'react'
import { Routes, Route } from 'react-router-dom';

import '../src/index.css'

// pages
import Navbar1 from './Components/Layouts/Navbar1.jsx';
import Footer from './Components/Layouts/Footer.jsx';
import Hero from './Components/Pages/Hero/hero.jsx';
import Event from './Components/Pages/Event/Event.jsx';
import A_propos from './Components/Pages/apropos/A_propos.jsx';
import Contact from './Components/Pages/contact/contact.jsx';


function App() {

  return (
    <>

      <Navbar1/>

      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/hero' element={<Hero />} />
        <Route  path='/event' element= {<Event/>} />
        <Route  path='/a_propos' element= {<A_propos/>} />
        <Route  path='/contact' element= {<Contact/>} />
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App
