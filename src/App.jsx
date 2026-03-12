import { useEffect } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      {/* FONDO ANIMADO – SIEMPRE PRIMERO */}
      <AnimatedBackground />

      {/* CONTENIDO */}
      <div className="app-container">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
