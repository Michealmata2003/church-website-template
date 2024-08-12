import React from 'react';
import Navbar from '../components/navbar/Navbar'
import Index from '../components/about/AboutHero/Index';
import AboutWelcome from '../components/about/welcome/AboutWelcome';
import Mission from '../components/about/mission/Mission';
import Footer from '../components/footer/Footer'
import Committee from '../components/about/committee/Committee';


const About = () => {
  return (
    <div>
      <Navbar />
      <Index />
      {/* <AboutWelcome /> */}
      <Mission />
      <Committee />
      <Footer />
    </div>
  )
}

export default About