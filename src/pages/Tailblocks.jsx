import React from 'react'
import ComponenteTailblock from "../components/ComponenteTailblock";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Statisc from "../components/Statisc";
import Step from "../components/Step";
import Testimonials from "../components/Testimonials";

const Tailblocks = () => {
  return (
    <>
        <ComponenteTailblock />
        <Hero />
        <Statisc />
        <Step />
        <Testimonials />
        <Footer />
    </>
  )
}

export default Tailblocks