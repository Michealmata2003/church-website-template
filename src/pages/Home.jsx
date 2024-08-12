import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import HeroAbout from '../components/heroAbout/HeroAbout'
import HeroBlogs from '../components/heroBlogs/HeroBlogs'
import Connected from '../components/stayConnected/Connected'
import Sermon from '../components/sermons/Sermon'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroAbout />
      <Connected />
      {/* <HeroBlogs /> */}
      <Sermon />
      <Footer />
    </div>
  )
}

export default Home