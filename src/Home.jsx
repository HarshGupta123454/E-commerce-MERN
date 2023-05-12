import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Featureproduct from './components/Featureproduct'
export default function Home() {
  return (
    <>
    <HeroSection data="ecommerce"/>
    <Featureproduct/>
    <Services/>
    <Trusted/>
    </>
  )
}
