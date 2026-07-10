import { useEffect, useState } from "react";
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
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiKotlin,
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
  tailwindcss: <SiTailwindcss />,
  nextjs: <SiNextdotjs />,
  nestjs: <SiNestjs />,
  typescript: <SiTypescript />,
  kotlin: <SiKotlin />,
};

const projectsData = [
  {
    title: {
      es: "LOTICKET - Sistema de Gestion de Tickets",
      en: "LOTICKET - Ticket Management System",
    },
    subtitle: {
      es: "Plataforma web para la administracion y seguimiento de incidencias con roles de usuario",
      en: "Web platform for managing and tracking incidents with user roles",
    },
    images: [
      `${import.meta.env.BASE_URL}images/imagesLoT/par-1.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-2.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-3.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-4.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-5.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-6.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-7.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-8.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-9.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-10.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-11.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-12.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-13.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-14.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-15.webp`,
      `${import.meta.env.BASE_URL}images/imagesLoT/par-16.webp`,
    ],
    description: {
      es: "Sistema de gestion de tickets que permite registrar, administrar y dar seguimiento a incidencias mediante roles diferenciados: cliente, empresa y administrador.",
      en: "Ticket management system for registering, managing, and tracking incidents through differentiated roles: client, company, and administrator.",
    },
    technologies: ["Python", "MySQL", "Django", "HTML", "CSS", "XAMPP"],
    github: "https://github.com/cesarsepulvedalz96-beep/Ticket",
  },
  {
    title: "Web POWERFULL",
    subtitle: {
      es: "Plataforma web de gestion y suscripcion de planes fitness para gym",
      en: "Web platform for managing and subscribing to gym fitness plans",
    },
    images: [
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-1.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-2.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-3.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-4.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-5.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-6.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-7.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-8.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-9.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-10.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-11.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-12.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-13.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-14.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-15.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-16.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-17.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-18.webp`,
      `${import.meta.env.BASE_URL}images/imagesPOWER/part-19.webp`,
    ],
    description: {
      es: "Plataforma web desarrollada en React que permite seleccionar planes de gimnasio, personalizar servicios adicionales y realizar pagos simulados mediante integracion con Webpay.",
      en: "React web platform that lets users choose gym plans, customize additional services, and perform simulated payments through a Webpay integration.",
    },
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
    github: "https://github.com/cesarsepulvedalz96-beep/Powerfull-gym",
  },
  {
    title: "KINOANALYTICA",
    subtitle: {
      es: "Motor de analisis probabilistico para loterias.",
      en: "Probabilistic analysis engine for lottery games.",
    },
    images: [
      `${import.meta.env.BASE_URL}images/imagesKino/part-1.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-2.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-3.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-4.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-5.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-6.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-7.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-8.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-9.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-10.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-11.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-12.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-13.webp`,
      `${import.meta.env.BASE_URL}images/imagesKino/part-14.webp`,
    ],
    description: {
      es: "Aplicacion web que integra analisis estadistico, simulaciones Monte Carlo y aprendizaje basado en resultados reales para optimizar jugadas y evaluar desempeno estrategico.",
      en: "Web application that integrates statistical analysis, Monte Carlo simulations, and learning from real results to optimize plays and evaluate strategic performance.",
    },
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
    github: "https://github.com/cesarsepulvedalz96-beep/KinoAnalytica",
  },
  {
    title: {es: "Pagina de ServiFrio", en: "ServiFrio Website"},
    subtitle: {
      es: "Sitio web corporativo para servicios de climatización y refrigeración.",
      en: "Corporate website for air conditioning and refrigeration services.",
    },
    images: [
      `${import.meta.env.BASE_URL}images/imagesServi/part-1.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-2.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-3.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-4.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-5.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-6.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-7.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-8.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-9.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-10.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-11.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-12.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-13.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-14.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-15.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-16.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-17.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-18.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-19.webp`,
      `${import.meta.env.BASE_URL}images/imagesServi/part-20.webp`,
    ],
    description: {
      es: "Sitio web desarrollado para ServiFrio, empresa especializada en instalación, mantención y reparación de equipos de aire acondicionado y refrigeración. La plataforma presenta los servicios ofrecidos, información de contacto y una experiencia moderna orientada a facilitar la comunicación con los clientes.",
      en: "Website developed for ServiFrio, a company specialized in air conditioning and refrigeration installation, maintenance, and repair services. The platform showcases the company's services, contact information, and provides a modern user experience designed to improve customer communication.",
    },
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "React",
      "Vite",
      "tailwindcss",
    ],
    github: "https://github.com/cesarsepulvedalz96-beep/ServiFrio_Web",
  },

];

const PROJECTS_PER_PAGE = 2;

const projectsText = {
  es: {
    title: "Proyectos",
    intro:
      "Estos proyectos reflejan mi proceso de aprendizaje y crecimiento como desarrollador. Cada uno representa un desafio que me ayudo a mejorar y fortalecer mis habilidades tanto tecnicas como profesionales.",
    openGallery: "Ver galeria",
    galleryLabel: "Abrir galeria de",
    showDetails: "Ver detalles",
    hideDetails: "Ocultar detalles",
    github: "Ver en GitHub",
    previous: "Ver proyectos anteriores",
    next: "Ver mas proyectos",
    page: "Ver pagina",
    pageSuffix: "de proyectos",
  },
  en: {
    title: "Projects",
    intro:
      "These projects reflect my learning process and growth as a developer. Each one represents a challenge that helped me improve and strengthen both my technical and professional skills.",
    openGallery: "View gallery",
    galleryLabel: "Open gallery for",
    showDetails: "View details",
    hideDetails: "Hide details",
    github: "View on GitHub",
    previous: "View previous projects",
    next: "View more projects",
    page: "View page",
    pageSuffix: "of projects",
  },
};

const localized = (value, language) =>
  typeof value === "string" ? value : value[language];

export default function Projects({ language }) {
  const [imageIndices, setImageIndices] = useState({});
  const [expanded, setExpanded] = useState(new Set());
  const [modalProject, setModalProject] = useState(null);
  const [modalImageIdx, setModalImageIdx] = useState(0);
  const [projectPage, setProjectPage] = useState(0);
  const t = projectsText[language];

  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndices((prev) => {
        const next = { ...prev };
        projectsData.forEach((project, index) => {
          next[index] = ((next[index] ?? 0) + 1) % project.images.length;
        });
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleExpanded = (idx) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      next.has(idx) ? next.delete(idx) : next.add(idx);
      return next;
    });
  };

  const openModal = (idx) => {
    setModalProject(idx);
    setModalImageIdx(imageIndices[idx] ?? 0);
  };

  const closeModal = () => setModalProject(null);
  const activeModal = modalProject !== null ? projectsData[modalProject] : null;
  const totalProjectPages = Math.ceil(projectsData.length / PROJECTS_PER_PAGE);
  const firstVisibleProject = projectPage * PROJECTS_PER_PAGE;
  const visibleProjects = projectsData.slice(
    firstVisibleProject,
    firstVisibleProject + PROJECTS_PER_PAGE,
  );

  const goToProjectPage = (page) => {
    setProjectPage(page);
  };

  const prevProjectPage = () => {
    setProjectPage(
      (prev) => (prev - 1 + totalProjectPages) % totalProjectPages,
    );
  };

  const nextProjectPage = () => {
    setProjectPage((prev) => (prev + 1) % totalProjectPages);
  };

  const prevModalImage = () => {
    setModalImageIdx(
      (prev) =>
        (prev - 1 + activeModal.images.length) % activeModal.images.length,
    );
  };

  const nextModalImage = () => {
    setModalImageIdx((prev) => (prev + 1) % activeModal.images.length);
  };

  return (
    <section id="proyectos" className="section projects-section">
      <div className="container is-max-widescreen">
        <h2 className="title is-2 has-text-centered mb-2" data-aos="fade-up">
          {t.title}
        </h2>
        <p
          className="mb-6 text-blanco has-text-centered is-size-5 projects-intro"
          data-aos="fade-up"
        >
          {t.intro}
        </p>

        <div className="projects-list">
          {visibleProjects.map((project, localIdx) => {
            const idx = firstVisibleProject + localIdx;

            return (
              <article
                key={localized(project.title, "es")}
                className="project-card"
                data-aos="fade-up"
              >
                <div className="project-card-main">
                  <button
                    type="button"
                    className="project-card-image"
                    onClick={() => openModal(idx)}
                    aria-label={`${t.galleryLabel} ${localized(project.title, language)}`}
                  >
                    <img
                      src={project.images[imageIndices[idx] ?? 0]}
                      alt={localized(project.title, language)}
                    />
                    <span className="project-image-overlay">
                      {t.openGallery}
                    </span>
                  </button>

                  <div className="project-card-content">
                    <span className="project-counter">
                      {String(idx + 1).padStart(2, "0")} /{" "}
                      {String(projectsData.length).padStart(2, "0")}
                    </span>
                    <div className="spotlight-divider" />
                    <h3 className="project-card-title">
                      {localized(project.title, language)}
                    </h3>
                    <p className="project-card-subtitle">
                      {localized(project.subtitle, language)}
                    </p>

                    <div className="project-card-actions">
                      <button
                        className="button is-primary is-small"
                        type="button"
                        onClick={() => toggleExpanded(idx)}
                      >
                        {expanded.has(idx) ? t.hideDetails : t.showDetails}
                      </button>
                    </div>

                    <div
                      className={`project-card-details ${expanded.has(idx) ? "open" : ""}`}
                    >
                      <div>
                        <p className="project-card-description">
                          {localized(project.description, language)}
                        </p>
                        <div className="tags mb-3">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`tag tech-tag ${tech.toLowerCase().replace(/\./g, "")}`}
                            >
                              <span className="tech-tag-icon">
                                {techIcons[tech]}
                              </span>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button is-primary is-small"
                        >
                          {t.github}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {totalProjectPages > 1 && (
          <div
            className="projects-pager"
            aria-label={
              language === "es"
                ? "Navegacion de proyectos"
                : "Project navigation"
            }
          >
            <button
              type="button"
              className="projects-pager-arrow"
              onClick={prevProjectPage}
              aria-label={t.previous}
            >
              &#10094;
            </button>

            <div className="projects-pager-dots">
              {Array.from({ length: totalProjectPages }, (_, page) => (
                <button
                  key={page}
                  type="button"
                  className={`projects-pager-dot ${projectPage === page ? "active" : ""}`}
                  onClick={() => goToProjectPage(page)}
                  aria-label={`${t.page} ${page + 1} ${t.pageSuffix}`}
                />
              ))}
            </div>

            <button
              type="button"
              className="projects-pager-arrow"
              onClick={nextProjectPage}
              aria-label={t.next}
            >
              &#10095;
            </button>
          </div>
        )}
      </div>

      {modalProject !== null && activeModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal} />
          <div className="modal-content project-modal">
            <img
              src={activeModal.images[modalImageIdx]}
              alt={localized(activeModal.title, language)}
              className="project-modal-image"
            />
            <button
              className="modal-arrow left"
              type="button"
              onClick={prevModalImage}
            >
              &#10094;
            </button>
            <button
              className="modal-arrow right"
              type="button"
              onClick={nextModalImage}
            >
              &#10095;
            </button>
          </div>
          <button
            className="modal-close is-large"
            type="button"
            aria-label="close"
            onClick={closeModal}
          />
        </div>
      )}
    </section>
  );
}
