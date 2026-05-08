import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const SECTION_IDS = ["inicio", "sobre-mi", "tecnologias", "proyectos", "contacto"];

export default function App() {
  const isScrolling = useRef(false);
  const snappedIndex = useRef(0);
  const [language, setLanguage] = useState("es");
  const toggleLanguage = () => setLanguage((current) => (current === "es" ? "en" : "es"));

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    let resizeTimer;
    const refreshLayout = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        AOS.refreshHard();
      }, 160);
    };

    window.addEventListener("resize", refreshLayout);
    window.addEventListener("orientationchange", refreshLayout);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", refreshLayout);
      window.removeEventListener("orientationchange", refreshLayout);
    };
  }, []);

  useEffect(() => {
    const getCurrentIndex = () => {
      const viewportMiddle = window.innerHeight / 2;
      let current = 0;

      SECTION_IDS.forEach((id, index) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportMiddle && rect.bottom >= viewportMiddle) {
          current = index;
        }
      });

      return current;
    };

    const handleWheel = (e) => {
      if (window.matchMedia("(max-width: 768px), (pointer: coarse)").matches) {
        return;
      }

      if (isScrolling.current) {
        e.preventDefault();
        return;
      }

      const index = getCurrentIndex();
      const currentSection = document.getElementById(SECTION_IDS[index]);

      if (currentSection) {
        const rect = currentSection.getBoundingClientRect();
        const isTallerThanViewport = rect.height > window.innerHeight + 32;
        const atSectionTop = rect.top >= -16;
        const atSectionBottom = rect.bottom <= window.innerHeight + 16;

        if (isTallerThanViewport) {
          if (e.deltaY > 0 && !atSectionBottom) return;
          if (e.deltaY < 0 && !atSectionTop) return;
        }
      }

      const next = e.deltaY > 0 ? index + 1 : index - 1;
      if (next < 0 || next >= SECTION_IDS.length) return;

      e.preventDefault();
      isScrolling.current = true;
      snappedIndex.current = next;
      document.getElementById(SECTION_IDS[next])?.scrollIntoView({ behavior: "smooth" });

      window.setTimeout(() => {
        isScrolling.current = false;
      }, 760);
    };

    const syncSnappedIndex = () => {
      if (!isScrolling.current) {
        snappedIndex.current = getCurrentIndex();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", syncSnappedIndex, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", syncSnappedIndex);
    };
  }, []);

  return (
    <>
      <div className="app-container">
        <Navbar language={language} onToggleLanguage={toggleLanguage} />
        <Hero language={language} />
        <About language={language} />
        <Technologies language={language} />
        <Projects language={language} />
        <Contact language={language} />
        <Footer language={language} />
      </div>
    </>
  );
}
