import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPython,
  FaJs,
  FaReact,
  FaAngular,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNodeJs,
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
  SiVite,
  SiReactrouter,
  SiExpress,
  SiChartdotjs,
  SiPandas,
  SiFlask,
  SiSqlite,
} from "react-icons/si";

const techData = [
  {
    category: "Lenguajes",
    items: [
      {
        name: "Python",
        description:
          "Lenguaje versátil usado en backend, scripting, automatización, ciencia de datos y desarrollo de aplicaciones web con frameworks como Django o Flask.",
        logo: (
          <span className="tech-icon python">
            <FaPython />
          </span>
        ),
      },
      {
        name: "JavaScript",
        description:
          "Lenguaje principal para frontend y backend (Node.js). Fundamental para web interactiva y aplicaciones dinámicas.",
        logo: (
          <span className="tech-icon javascript">
            {" "}
            <FaJs />{" "}
          </span>
        ),
      },
      {
        name: "Pandas",
        description:
          "Librería de Python para análisis y manipulación de datos estructurados con DataFrames.",
        logo: (
          <span className="tech-icon pandas">
            <SiPandas />
          </span>
        ),
      },
    ],
  },
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        description:
          "Librería para construir interfaces dinámicas y componentes reutilizables.",
        logo: (
          <span className="tech-icon react">
            {" "}
            <FaReact />{" "}
          </span>
        ),
      },
      {
        name: "Angular",
        description: "Framework completo para aplicaciones de gran escala.",
        logo: (
          <span className="tech-icon angular">
            <FaAngular />
          </span>
        ),
      },
      {
        name: "HTML",
        description:
          "Lenguaje de marcado que define la estructura de las páginas web.",
        logo: (
          <span className="tech-icon html">
            <FaHtml5 />
          </span>
        ),
      },
      {
        name: "CSS",
        description: "Lenguaje de estilos que define la apariencia visual.",
        logo: (
          <span className="tech-icon css">
            <FaCss3Alt />
          </span>
        ),
      },
      {
        name: "Bulma",
        description: "Framework CSS para interfaces limpias y responsivas.",
        logo: (
          <span className="tech-icon bulma">
            <SiBulma />
          </span>
        ),
      },
      {
        name: "Bootstrap",
        description: "Framework CSS popular para diseño rápido.",
        logo: (
          <span className="tech-icon bootstrap">
            <FaBootstrap />
          </span>
        ),
      },
      {
        name: "Vite",
        description:
          "Herramienta moderna de desarrollo y build para aplicaciones React con recarga ultra rápida.",
        logo: (
          <span className="tech-icon vite">
            <SiVite />
          </span>
        ),
      },
      {
        name: "React Router",
        description: "Manejo de navegación y rutas en aplicaciones SPA.",
        logo: (
          <span className="tech-icon react-router">
            <SiReactrouter />
          </span>
        ),
      },
      {
        name: "Chart.js",
        description:
          "Librería para crear gráficos interactivos y visualizaciones de datos en aplicaciones web.",
        logo: (
          <span className="tech-icon chartjs">
            <SiChartdotjs />
          </span>
        ),
      },
    ],
  },
  {
    category: "Backend",
    items: [
      {
        name: "Django",
        description: "Framework robusto en Python con ORM y admin integrado.",
        logo: (
          <span className="tech-icon django">
            <SiDjango />
          </span>
        ),
      },
      {
        name: "Node.js",
        description: "Plataforma de backend ligera con JavaScript.",
        logo: (
          <span className="tech-icon nodejs">
            <FaNodeJs />
          </span>
        ),
      },
      {
        name: "Express.js",
        description: "Framework para crear APIs REST en Node.js.",
        logo: (
          <span className="tech-icon express">
            <SiExpress />
          </span>
        ),
      },
      {
        name: "Flask",
        description:
          "Microframework de Python para construir APIs y aplicaciones web ligeras.",
        logo: (
          <span className="tech-icon flask">
            <SiFlask />
          </span>
        ),
      },
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      {
        name: "MySQL",
        description: "Base de datos relacional ampliamente usada.",
        logo: (
          <span className="tech-icon mysql">
            <SiMysql />
          </span>
        ),
      },
      {
        name: "Oracle",
        description: "Base de datos empresarial de alto rendimiento.",
        logo: (
          <span className="tech-icon postgresql">
            <SiOracle />
          </span>
        ),
      },
      {
        name: "MongoDB",
        description: "Base de datos NoSQL flexible y escalable.",
        logo: (
          <span className="tech-icon mongodb">
            <SiMongodb />
          </span>
        ),
      },
      {
        name: "PostgreSQL",
        description: "Base de datos relacional avanzada.",
        logo: (
          <span className="tech-icon oracle">
            <SiPostgresql />
          </span>
        ),
      },
      {
        name: "SQLite",
        description:
          "Base de datos relacional embebida, ideal para aplicaciones ligeras y prototipos.",
        logo: (
          <span className="tech-icon sqlite">
            <SiSqlite />
          </span>
        ),
      },
    ],
  },
  {
    category: "Infraestructura y DevOps",
    items: [
      {
        name: "GitLab",
        description: "Control de versiones y CI/CD.",
        logo: (
          <span className="tech-icon gitlab">
            <FaGitlab />
          </span>
        ),
      },
      {
        name: "Docker",
        description: "Contenedores para entornos consistentes.",
        logo: (
          <span className="tech-icon docker">
            <FaDocker />
          </span>
        ),
      },
      {
        name: "AWS",
        description: "Servicios en la nube escalables.",
        logo: (
          <span className="tech-icon aws">
            <FaAws />
          </span>
        ),
      },
      {
        name: "XAMPP",
        description:
          "Entorno de desarrollo local para aplicaciones web (Apache y MySQL).",
        logo: (
          <span className="tech-icon xampp">
            <FaServer />
          </span>
        ),
      },
    ],
  },
];

export default function Technologies() {
  const [activeTab, setActiveTab] = useState(0);
  const [openTech, setOpenTech] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="tecnologias" className="section technologies-section">
      <div className="container is-max-desktop">
        <h2 className="title is-2 has-text-centered mb-6" data-aos="fade-up">
          Tecnologías
        </h2>
        <p className="mb-4 text-blanco has-text-centered">
          Estas son las tecnologías que he utilizado y aprendido tanto a nivel
          académico como en proyectos personales, fortaleciendo mis habilidades
          en el desarrollo Full Stack.
        </p>

        {/* Tabs */}
        <div className="categories-island">
          {techData.map((category, idx) => (
            <button
              key={idx}
              className={`category-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
            >
              <a>{category.category}</a>
            </button>
          ))}
        </div>

        {/* Grid de iconos tipo app */}
        <div className="columns is-multiline is-variable is-5 is-centered">
          {techData[activeTab].items.map((tech, tid) => (
            <div
              key={tid}
              className="column is-2 tech-column"
              data-aos="zoom-in"
            >
              <div
                className={`tech-box ${openTech === tech.name ? "open" : ""}`}
                onClick={() =>
                  setOpenTech(openTech === tech.name ? null : tech.name)
                }
              >
                <span className="tech-icon">{tech.logo}</span>
                <span className="tech-tooltip">{tech.name}</span>

                {openTech === tech.name && (
                  <div className="tech-description">{tech.description}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
