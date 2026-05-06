import React from "react";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout//Navbar";
import Hero from "../features/home/Hero";
import Projects from "../features/home/Projects";
import Skills from "../features/home/Skills";
import About from "@/features/home/About";
import Experience from "@/features/home/Experience";
import Contact from "@/features/home/Contact";


export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
