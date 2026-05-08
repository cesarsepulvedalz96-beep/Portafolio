import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCoffee } from "react-icons/fa";

const heroText = {
  es: {
    role: "DESARROLLADOR FULL STACK",
    title: "Hola, mi nombre es Cesar Sepulveda",
    intro: "Soy Analista Programador con enfoque en desarrollo Full Stack y aprendizaje constante. Me considero autodidacta, curioso y comprometido con mejorar cada dia, tanto en lo tecnico como en lo profesional.",
    projects: "Ver mis proyectos",
    download: "Descargar CV",
    loading: "Preparando cafe...",
    alt: "Retrato de Cesar Sepulveda",
  },
  en: {
    role: "FULL STACK DEVELOPER",
    title: "Hi, my name is Cesar Sepulveda",
    intro: "I am a Programming Analyst focused on Full Stack development and continuous learning. I consider myself self-taught, curious, and committed to improving every day, both technically and professionally.",
    projects: "View my projects",
    download: "Download CV",
    loading: "Preparing coffee...",
    alt: "Portrait of Cesar Sepulveda",
  },
};

export default function Hero({ language }) {
  const [isDownloadingCv, setIsDownloadingCv] = useState(false);
  const t = heroText[language];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const handleCvDownload = (event) => {
    event.preventDefault();

    if (isDownloadingCv) return;

    setIsDownloadingCv(true);

    window.setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/cv/cesar-cv.pdf";
      link.download = "Cesar_Sepulveda_CV.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setIsDownloadingCv(false);
    }, 900);
  };

  const scrollToProjects = () => {
    const target = document.getElementById("proyectos");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="section hero-section">
      <div className="container is-max-desktop">
        <div className="columns is-vcentered">
          <div className="column is-6" data-aos="fade-right">
            <p className="is-uppercase text-blanco mb-2 is-size-6">
              {t.role}
            </p>

            <h1 className="title text-verde-azulado is-1">
              {t.title} <br />
            </h1>

            <p className="subtitle text-blanco is-4 mt-4">
              {t.intro}
            </p>

            <div className="buttons mt-5">
              <button
                className="button is-primary"
                onClick={scrollToProjects}
              >
                {t.projects}
              </button>
              <a
                href="/cv/cesar-cv.pdf"
                download="Cesar_Sepulveda_CV.pdf"
                className={`button is-primary cv-download-button ${isDownloadingCv ? "is-loading-cv" : ""}`}
                onClick={handleCvDownload}
                aria-busy={isDownloadingCv}
              >
                {isDownloadingCv && <FaCoffee className="cv-download-icon" />}
                <span>{isDownloadingCv ? t.loading : t.download}</span>
              </a>
            </div>
          </div>

          <div className="column is-6 has-text-centered" data-aos="fade-left">
            <div className="hero-profile-frame">
              <img
                className="hero-profile-image"
                src="/images/hero-profile.png"
                alt={t.alt}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
