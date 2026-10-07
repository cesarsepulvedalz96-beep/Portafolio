import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaAward, FaBook, FaBookOpen } from "react-icons/fa";
import CertificatesModal from "./CertificatesModal";

const aboutText = {
  es: {
    title: "Sobre mi",
    first:
      "Soy desarrollador Full Stack apasionado por convertir ideas en soluciones digitales que realmente funcionen. Me gusta construir aplicaciones web desde cero, comprendiendo tanto la experiencia del usuario como la logica que hace que todo funcione por dentro.",
    more: "Me motiva aprender constantemente y enfrentar nuevos retos que me permitan crecer tanto tecnica como profesionalmente. Creo en el trabajo en equipo, en la comunicacion clara y en el aprendizaje continuo como pilares fundamentales para desarrollarme dentro del mundo del desarrollo.",
    current:
      "Actualmente busco oportunidades donde pueda aportar valor, seguir perfeccionando mis habilidades y asumir nuevos desafios.",
    readMore: "Leer mas",
    readLess: "Leer menos",
    certificates: "Certificados y cursos",
    alt: "Ilustracion de Cesar Sepulveda con cafe",
  },
  en: {
    title: "About me",
    first:
      "I am a Full Stack developer passionate about turning ideas into digital solutions that actually work. I enjoy building web applications from scratch, understanding both the user experience and the logic that makes everything work behind the scenes.",
    more: "I am motivated by constant learning and new challenges that help me grow both technically and professionally. I believe teamwork, clear communication, and continuous learning are key pillars for growing in software development.",
    current:
      "I am currently looking for opportunities where I can add value, keep improving my skills, and take on new challenges.",
    readMore: "Read more",
    readLess: "Read less",
    certificates: "Certificates and courses",
    alt: "Illustration of Cesar Sepulveda with coffee",
  },
};

export default function About({ language }) {
  const [expanded, setExpanded] = useState(false);
  const [certificatesOpen, setCertificatesOpen] = useState(false);
  const t = aboutText[language];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="sobre-mi" className="section about-section">
      <div className="container is-max-desktop">
        <div className="columns is-vcentered">
          <div className="column is-6 has-text-centered" data-aos="fade-right">
            <div className="about-profile-frame floating">
              <img
                className="about-profile-image"
                src={`${import.meta.env.BASE_URL}images/about-profile.webp`}
                alt={t.alt}
              />
            </div>
          </div>

          <div className="column is-6" data-aos="fade-left">
            <h3 className="title text-blanco is-2">{t.title}</h3>

            <p className="mb-4 text-blanco is-size-5">
              {t.first}
              {expanded && (
                <>
                  {" "}
                  <br></br>
                  {t.more}
                  <br></br> {t.current}
                </>
              )}
            </p>

            <div className="about-actions">
              <button
                className="button is-primary about-read-button"
                onClick={() => setExpanded(!expanded)}
                type="button"
                aria-expanded={expanded}
              >
                {expanded ? (
                  <FaBookOpen className="about-read-icon is-open" />
                ) : (
                  <FaBook className="about-read-icon" />
                )}
                <span>{expanded ? t.readLess : t.readMore}</span>
              </button>
              {expanded && (
                <button
                  className="button is-primary about-certificates-button"
                  type="button"
                  aria-haspopup="dialog"
                  onClick={() => setCertificatesOpen(true)}
                >
                  <FaAward aria-hidden="true" />
                  <span>{t.certificates}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {certificatesOpen && (
        <CertificatesModal language={language} onClose={() => setCertificatesOpen(false)} />
      )}
    </section>
  );
}
