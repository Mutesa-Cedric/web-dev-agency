import ContactUs from "../components/home/ContactUs";
import Hero from "../components/home/Hero";
import Portfolio from "../components/home/Portfolio";
import Testimonials from "../components/home/Testimonials";
import WhatWeOffer from "../components/home/WhatWeOffer";
import WhyChooseUs from "../components/home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      <WhyChooseUs />
      <Portfolio />
      <Testimonials />
      <ContactUs />
    </>
  )
}
