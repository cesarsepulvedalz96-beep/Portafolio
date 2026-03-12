import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaReact,
  FaJs,
  FaPython,
  FaNodeJs,
  FaBootstrap,
  FaDocker,
  FaAws,
  FaGitlab,
  FaServer,
} from "react-icons/fa";
import {
  SiDjango,
  SiBulma,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiOracle,
  SiHtml5,
  SiCss3,
  SiVite,
  SiReactrouter,
  SiExpress,
  SiChartdotjs,
  SiPandas,
  SiFlask,
  SiSqlite,
} from "react-icons/si";

const techIcons = {
  React: <FaReact />,
  JavaScript: <FaJs />,
  Python: <FaPython />,
  Nodejs: <FaNodeJs />,
  Django: <SiDjango />,
  Bulma: <SiBulma />,
  Bootstrap: <FaBootstrap />,
  MySQL: <SiMysql />,
  PostgreSQL: <SiPostgresql />,
  MongoDB: <SiMongodb />,
  Oracle: <SiOracle />,
  Docker: <FaDocker />,
  AWS: <FaAws />,
  GitLab: <FaGitlab />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  XAMPP: <FaServer />,
  "Express.js": <SiExpress />,
  Vite: <SiVite />,
  Reactrouter: <SiReactrouter />,
  "Chart.js": <SiChartdotjs />,
  Pandas: <SiPandas />,
  Flask: <SiFlask />,
  SQLite: <SiSqlite />,
};

const projectsData = [
  {
    title: "LOTICKET – Sistema de Gestión de Tickets",
    subtitle:
      "Plataforma web para la administración y seguimiento de incidencias con roles de usuario",
    images: [
      "/images/imagesLoT/par-1.png",
      "/images/imagesLoT/par-2.png",
      "/images/imagesLoT/par-3.png",
      "/images/imagesLoT/par-4.png",
      "/images/imagesLoT/par-5.png",
      "/images/imagesLoT/par-6.png",
      "/images/imagesLoT/par-7.png",
      "/images/imagesLoT/par-8.png",
      "/images/imagesLoT/par-9.png",
      "/images/imagesLoT/par-10.png",
      "/images/imagesLoT/par-11.png",
      "/images/imagesLoT/par-12.png",
      "/images/imagesLoT/par-13.png",
      "/images/imagesLoT/par-14.png",
      "/images/imagesLoT/par-15.png",
      "/images/imagesLoT/par-16.png",
    ],
    description:
      "LOTICKET es un sistema de gestión de tickets que permite registrar, administrar y dar seguimiento a incidencias mediante roles diferenciados: cliente, empresa y administrador.",
    technologies: ["Python", "MySQL", "Django", "HTML", "CSS", "XAMPP"],
    github: "https://github.com/cesarsep/portfolio" /*AGREGAR LINK */,
  },
  {
    title: "Web POWERFULL",
    subtitle:
      "Plataforma web de gestión y suscripción de planes fitness para gym",
    images: [
      "/images/imagesPOWER/part-1.png",
      "/images/imagesPOWER/part-2.png",
      "/images/imagesPOWER/part-3.png",
      "/images/imagesPOWER/part-4.png",
      "/images/imagesPOWER/part-5.png",
      "/images/imagesPOWER/part-6.png",
      "/images/imagesPOWER/part-7.png",
      "/images/imagesPOWER/part-8.png",
      "/images/imagesPOWER/part-9.png",
      "/images/imagesPOWER/part-10.png",
      "/images/imagesPOWER/part-11.png",
      "/images/imagesPOWER/part-12.png",
      "/images/imagesPOWER/part-13.png",
      "/images/imagesPOWER/part-14.png",
      "/images/imagesPOWER/part-15.png",
      "/images/imagesPOWER/part-16.png",
      "/images/imagesPOWER/part-17.png",
      "/images/imagesPOWER/part-18.png",
      "/images/imagesPOWER/part-19.png",
    ],
    description:
      "Plataforma web desarrollada en React que permite seleccionar planes de gimnasio, personalizar servicios adicionales y realizar pagos simulados mediante integración con Webpay.",
    technologies: [
      "React",
      "Nodejs",
      "JavaScript",
      "Bulma",
      "CSS",
      "HTML",
      "Express.js",
      "Reactrouter",
      "Vite",
    ],
    github: "https://github.com/cesarsep/web-gym",
  },
  {
    title: "KINOANALYTICA",
    subtitle: "Motor de análisis probabilístico para loterías.",
    images: [
      "/images/imagesKino/part-1.png",
      "/images/imagesKino/part-2.png",
      "/images/imagesKino/part-3.png",
      "/images/imagesKino/part-4.png",
      "/images/imagesKino/part-5.png",
      "/images/imagesKino/part-6.png",
      "/images/imagesKino/part-7.png",
      "/images/imagesKino/part-8.png",
      "/images/imagesKino/part-9.png",
      "/images/imagesKino/part-10.png",
      "/images/imagesKino/part-11.png",
      "/images/imagesKino/part-12.png",
      "/images/imagesKino/part-13.png",
      "/images/imagesKino/part-14.png",
    ],
    description:
      "Aplicación web que integra análisis estadístico, simulaciones Monte Carlo y aprendizaje basado en resultados reales para optimizar jugadas y evaluar desempeño estratégico.",
    technologies: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "Pandas",
      "SQLite",
      "Chart.js",
      "Flask",
    ],
    github: "https://github.com/cesarsep/ecommerce",
  },
  {
    title: "Blog Personal",
    subtitle: "Plataforma de artículos",
    images: ["/images/blog1.png", "/images/blog2.png"],
    description: "Blog desarrollado con Django y PostgreSQL.",
    technologies: ["Django", "PostgreSQL"],
    github: "https://github.com/cesarsep/blog",
  },
];

export default function Projects() {
  const [openProject, setOpenProject] = useState(null);

  const [currentImage, setCurrentImage] = useState({});
  const [modalProjectIdx, setModalProjectIdx] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  // Autoplay imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const updated = { ...prev };
        projectsData.forEach((project, idx) => {
          const total = project.images.length;
          updated[idx] = ((updated[idx] || 0) + 1) % total;
        });
        return updated;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Modal funciones
  const openModal = (idx) => setModalProjectIdx(idx);
  const closeModal = () => setModalProjectIdx(null);

  const prevImage = () => {
    if (modalProjectIdx === null) return;
    setCurrentImage((prev) => {
      const updated = { ...prev };
      const total = projectsData[modalProjectIdx].images.length;
      updated[modalProjectIdx] =
        ((updated[modalProjectIdx] || 0) - 1 + total) % total;
      return updated;
    });
  };

  const nextImage = () => {
    if (modalProjectIdx === null) return;
    setCurrentImage((prev) => {
      const updated = { ...prev };
      const total = projectsData[modalProjectIdx].images.length;
      updated[modalProjectIdx] = ((updated[modalProjectIdx] || 0) + 1) % total;
      return updated;
    });
  };

  return (
    <section id="proyectos" className="section projects-section">
      <div className="container is-max-desktop">
        <h2 className="title is-2 has-text-centered mb-6" data-aos="fade-up">
          Proyectos
        </h2>
        <p className="mb-4 text-blanco has-text-centered">
          Estos proyectos reflejan mi proceso de aprendizaje y crecimiento como
          desarrollador. Cada uno representa un desafío que me ayudó a mejorar y
          fortalecer mis habilidades tanto técnicas como profesionales.
        </p>

        <div className="columns is-multiline">
          {projectsData.map((project, idx) => (
            <div key={idx} className="column is-4" data-aos="zoom-in">
              <div className="project-card">
                <figure
                  className="image is-4by3 mb-4 project-image"
                  onClick={() => openModal(idx)}
                >
                  <img
                    src={project.images[currentImage[idx] || 0]}
                    alt={project.title}
                  />
                </figure>

                <h3 className="title is-4">{project.title}</h3>
                <p className="subtitle is-6">{project.subtitle}</p>

                <div className="tags mb-3">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className={`tag tech-tag ${tech
                        .toLowerCase()
                        .replace(".", "")}`}
                    >
                      <span className="tech-tag-icon">{techIcons[tech]}</span>
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  className="button is-small is-primary"
                  onClick={() =>
                    setOpenProject(openProject === idx ? null : idx)
                  }
                >
                  {openProject === idx ? "Cerrar detalles" : "Más detalles"}
                </button>

                {openProject === idx && (
                  <div className="project-details mt-3">
                    <p className="mb-3">{project.description}</p>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button is-link is-small"
                    >
                      Ver en GitHub
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL CON FLECHAS */}
      {modalProjectIdx !== null && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal} />
          <div className="modal-content project-modal">
            <img
              src={
                projectsData[modalProjectIdx].images[
                  currentImage[modalProjectIdx] || 0
                ]
              }
              alt="Proyecto"
              className="project-modal-image"
            />

            {/* FLECHAS */}
            <button className="modal-arrow left" onClick={prevImage}>
              &#10094;
            </button>
            <button className="modal-arrow right" onClick={nextImage}>
              &#10095;
            </button>
          </div>
          <button
            className="modal-close is-large"
            aria-label="close"
            onClick={closeModal}
          />
        </div>
      )}
    </section>
  );
}
