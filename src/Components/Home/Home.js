import React from "react";
import { HeroSection } from "../HeroSection/HeroSection";
import { Highlights } from "../Highlights/Highlights";
import { Testimonials } from "../Testimonials/Testimonials";
import { About } from "../AboutSection/About";
import { Footer } from "../Footer/Footer";
import "./Home.css";
function Home() {
  return (
    <>
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export { Home };
