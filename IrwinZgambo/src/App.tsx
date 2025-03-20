import React from 'react';
import './index.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Work from './components/work/Work';
import Business from './components/business/Business';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import Portfolio from './components/portfolio/Portfolio';



function App() {
 

  return (
  <> 
  <Header/>
  <main className='main'>
  <Home/> 
  <About/>
  <Skills/>
  <Work/>
  <Business/>
  <Qualification/>
  <Contact/>
  {/*<Portfolio/>*/}
 
  </main>
  <Footer/>
  <ScrollUp/>
  </>
  )
}

export default App
