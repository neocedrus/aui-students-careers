import React from 'react'
import Hero from '@/components/home/hero'
import Spotlight from '@/components/home/Spotlight'
import Departments from '@/components/home/Departments'
import Footer from '@/components/home/Footer'


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