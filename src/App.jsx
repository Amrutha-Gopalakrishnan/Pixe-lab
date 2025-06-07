import React from 'react'
import './index.css'
  import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Hero from './Hero'
import About from './About'
import Stats from './Stats'
import Services from './Services'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'
import Footer from './Footer';

const App = () => {


useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
    <div>
     <Hero />
     <About />
     <Stats />
     <Services />
     <Projects />
     <Blog />
     <Contact />
     <Footer />
    </div>
  )
}

export default App
