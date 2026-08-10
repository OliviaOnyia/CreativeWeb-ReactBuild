import { useState } from 'react'

import React from 'react'
import {Route, Routes} from 'react-router-dom'

//components 
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import Home from './components/Home.jsx'
import Footer from './components/Footer.jsx'
import Contact from './components/Contact.jsx'

//styles 

import "./styles/Web.css"

function App () {
    const [count, setCount] = useState(0)

    return (
        <>

 
      <Navbar />
      <Header />
        
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} /> 
          {/* <Route path="/technical-projects" element={<TechnicalProjects />} />
          <Route path="/3d-projects" element={<ThreeDProjects />} />
          <Route path="/composer-projects" element={<ComposerProjects />} /> */}

        </Routes>
      </main>

   
      <Footer /> 
  

    </>
  );
}

export default App;