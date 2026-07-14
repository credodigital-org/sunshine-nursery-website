import React from "react";
import Hero from "../sections/Hero";
import Programs from "../sections/Programs";
import WhyChooseUs from "../sections/WhyChooseUs";
import About from "../sections/About";
import Moments from "../sections/Moments";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <WhyChooseUs />
      <About />
      <Moments />
      <Testimonials />
      <CTA />
    </>
  );
}