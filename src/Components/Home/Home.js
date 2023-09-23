import React from "react";

import { Nav } from "../NavBar/Nav";
import { HeroSection } from "../HeroSection/HeroSection";
import { Highlights } from "../Highlights/Highlights";
import { Testimonials } from "../Testimonials/Testimonials";
import { About } from "../AboutSection/About";
import "./Home.css";
function Home() {
  return (
    <>
      <Nav />
      <HeroSection />
      <Highlights />
      <Testimonials />
      <About />
    </>
  );
}

export { Home };
