import React from 'react'
import ComponenteTailblock from "./ComponenteTailblock";
import Footer from "./Footer";
import Hero from "./Hero";
import Statisc from "./Statisc";
import Step from "./Step";
import Testimonials from "./Testimonials";

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