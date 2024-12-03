import React from 'react'
import Hero from '@/components/Home/hero'
import Spotlight from '@/components/Home/Spotlight'
import Departments from '@/components/Home/Departments'
import Footer from '@/components/Home/Footer'


const HomePage = () => {
  return (
    <>
        <Hero />
        <Spotlight />
        <Departments />
        <Footer />
    </>
  )
}

export default HomePage