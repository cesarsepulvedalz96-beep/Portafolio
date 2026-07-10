import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGitlab,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaPython,
  FaReact,
  FaServer,
} from "react-icons/fa";
import {
  SiBulma,
  SiChartdotjs,
  SiDjango,
  SiExpress,
  SiFlask,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPandas,
  SiPostgresql,
  SiReactrouter,
  SiSqlite,
  SiVite,
  SiTailwindcss,
  SiNextdotjs,
  SiNestjs,
  SiTypescript,
  SiKotlin,
} from "react-icons/si";

const techData = [
  {
    category: { es: "Lenguajes", en: "Languages" },
    items: [
      {
        name: "Python",
        description: {
          es: "Lenguaje versatil usado en backend, scripting, automatizacion, ciencia de datos y desarrollo de aplicaciones web con frameworks como Django o Flask.",
          en: "Versatile language used in backend development, scripting, automation, data science, and web applications with frameworks like Django or Flask.",
        },
        logo: <span className="tech-icon python"><FaPython /></span>,
      },
      {
        name: "JavaScript",
        description: {
          es: "Lenguaje principal para frontend y backend con Node.js. Fundamental para web interactiva y aplicaciones dinamicas.",
          en: "Core language for frontend and backend with Node.js. Essential for interactive websites and dynamic applications.",
        },
        logo: <span className="tech-icon javascript"><FaJs /></span>,
      },
      {
        name: "TypeScript",
        description: {
          es: "Superset de JavaScript que añade tipado estatico y mejora la escalabilidad y mantenibilidad del codigo.",
          en: "Superset of JavaScript that adds static typing and improves scalability and maintainability of code.",
        },
        logo: <span className="tech-icon typescript"><FaJs /></span>,
      },
      {
        name: "Kotlin",
        description: {
          es: "Lenguaje moderno para desarrollo multiplataforma con soporte para Android y backend.",
          en: "Modern language for multi-platform development with support for Android and backend.",
        },
        logo: <span className="tech-icon kotlin"><SiKotlin /></span>,
      }
    ],
  },
  {
    category: { es: "Frontend", en: "Frontend" },
    items: [
      {
        name: "React",
        description: {
          es: "Libreria para construir interfaces dinamicas y componentes reutilizables.",
          en: "Library for building dynamic interfaces and reusable components.",
        },
        logo: <span className="tech-icon react"><FaReact /></span>,
      },
      {
        name: "Angular",
        description: {
          es: "Framework completo para aplicaciones de gran escala.",
          en: "Full framework for large-scale applications.",
        },
        logo: <span className="tech-icon angular"><FaAngular /></span>,
      },
      {
        name: "HTML",
        description: {
          es: "Lenguaje de marcado que define la estructura de las paginas web.",
          en: "Markup language that defines the structure of web pages.",
        },
        logo: <span className="tech-icon html"><FaHtml5 /></span>,
      },
      {
        name: "CSS",
        description: {
          es: "Lenguaje de estilos que define la apariencia visual.",
          en: "Stylesheet language that defines visual appearance.",
        },
        logo: <span className="tech-icon css"><FaCss3Alt /></span>,
      },
      {
        name: "Bulma",
        description: {
          es: "Framework CSS para interfaces limpias y responsivas.",
          en: "CSS framework for clean and responsive interfaces.",
        },
        logo: <span className="tech-icon bulma"><SiBulma /></span>,
      },
      {
        name: "Bootstrap",
        description: {
          es: "Framework CSS popular para diseno rapido.",
          en: "Popular CSS framework for fast interface design.",
        },
        logo: <span className="tech-icon bootstrap"><FaBootstrap /></span>,
      },
      {
        name: "Vite",
        description: {
          es: "Herramienta moderna de desarrollo y build para aplicaciones React con recarga rapida.",
          en: "Modern development and build tool for React apps with fast reloads.",
        },
        logo: <span className="tech-icon vite"><SiVite /></span>,
      },
      {
        name: "React Router",
        description: {
          es: "Manejo de navegacion y rutas en aplicaciones SPA.",
          en: "Navigation and routing management for SPA applications.",
        },
        logo: <span className="tech-icon react-router"><SiReactrouter /></span>,
      },
      {
        name: "Chart.js",
        description: {
          es: "Libreria para crear graficos interactivos y visualizaciones de datos en aplicaciones web.",
          en: "Library for creating interactive charts and data visualizations in web applications.",
        },
        logo: <span className="tech-icon chartjs"><SiChartdotjs /></span>,
      },
      {
        name: "Tailwind CSS",
        description: {
          es: "Framework CSS utilitario para un diseño rápido y personalizable.",
          en: "Utility-first CSS framework for fast and customizable design.",
        },
        logo: <span className="tech-icon tailwindcss"><SiTailwindcss /></span>,
      },
      {
        name: "Next.js",
        description: {
          es: "Framework de React para aplicaciones web de alto rendimiento.",
          en: "React framework for high-performance web applications.",
        },
        logo: <span className="tech-icon nextjs"><SiNextdotjs /></span>,
      },
    ],
  },
  {
    category: { es: "Backend", en: "Backend" },
    items: [
      {
        name: "Django",
        description: {
          es: "Framework robusto en Python con ORM y panel de administracion integrado.",
          en: "Robust Python framework with ORM and built-in admin panel.",
        },
        logo: <span className="tech-icon django"><SiDjango /></span>,
      },
      {
        name: "Node.js",
        description: {
          es: "Plataforma de backend ligera basada en JavaScript.",
          en: "Lightweight backend platform based on JavaScript.",
        },
        logo: <span className="tech-icon nodejs"><FaNodeJs /></span>,
      },
      {
        name: "Express.js",
        description: {
          es: "Framework para crear APIs REST en Node.js.",
          en: "Framework for building REST APIs in Node.js.",
        },
        logo: <span className="tech-icon express"><SiExpress /></span>,
      },
      {
        name: "Flask",
        description: {
          es: "Microframework de Python para construir APIs y aplicaciones web ligeras.",
          en: "Python microframework for building APIs and lightweight web applications.",
        },
        logo: <span className="tech-icon flask"><SiFlask /></span>,
      },
      {
        name: "NestJS",
        description: {
          es: "Framework de TypeScript para construir aplicaciones del lado del servidor escalables.",
          en: "TypeScript framework for building scalable server-side applications.",
        },
        logo: <span className="tech-icon nestjs"><SiNestjs /></span>,
      },
    ],},
  {
    category: { es: "Bases de Datos", en: "Databases" },
    items: [
      {
        name: "MySQL",
        description: {
          es: "Base de datos relacional ampliamente usada.",
          en: "Widely used relational database.",
        },
        logo: <span className="tech-icon mysql"><SiMysql /></span>,
      },
      {
        name: "Oracle",
        description: {
          es: "Base de datos empresarial de alto rendimiento.",
          en: "High-performance enterprise database.",
        },
        logo: <span className="tech-icon postgresql"><SiOracle /></span>,
      },
      {
        name: "MongoDB",
        description: {
          es: "Base de datos NoSQL flexible y escalable.",
          en: "Flexible and scalable NoSQL database.",
        },
        logo: <span className="tech-icon mongodb"><SiMongodb /></span>,
      },
      {
        name: "PostgreSQL",
        description: {
          es: "Base de datos relacional avanzada.",
          en: "Advanced relational database.",
        },
        logo: <span className="tech-icon oracle"><SiPostgresql /></span>,
      },
      {
        name: "SQLite",
        description: {
          es: "Base de datos relacional embebida, ideal para aplicaciones ligeras y prototipos.",
          en: "Embedded relational database, ideal for lightweight apps and prototypes.",
        },
        logo: <span className="tech-icon sqlite"><SiSqlite /></span>,
      },
    ],
  },
  {
    category: { es: "Infraestructura y DevOps", en: "Infrastructure and DevOps" },
    items: [
      {
        name: "GitLab",
        description: {
          es: "Control de versiones y CI/CD.",
          en: "Version control and CI/CD.",
        },
        logo: <span className="tech-icon gitlab"><FaGitlab /></span>,
      },
      {
        name: "Docker",
        description: {
          es: "Contenedores para entornos consistentes.",
          en: "Containers for consistent environments.",
        },
        logo: <span className="tech-icon docker"><FaDocker /></span>,
      },
      {
        name: "AWS",
        description: {
          es: "Servicios en la nube escalables.",
          en: "Scalable cloud services.",
        },
        logo: <span className="tech-icon aws"><FaAws /></span>,
      },
      {
        name: "XAMPP",
        description: {
          es: "Entorno de desarrollo local para aplicaciones web con Apache y MySQL.",
          en: "Local development environment for web apps with Apache and MySQL.",
        },
        logo: <span className="tech-icon xampp"><FaServer /></span>,
      },
    ],
  },
];

const technologiesText = {
  es: {
    title: "Tecnologias",
    intro: "Estas son las tecnologias que he utilizado y aprendido tanto a nivel academico como en proyectos personales, fortaleciendo mis habilidades en el desarrollo Full Stack.",
  },
  en: {
    title: "Technologies",
    intro: "These are the technologies I have used and learned both academically and through personal projects, strengthening my Full Stack development skills.",
  },
};

export default function Technologies({ language }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openTech, setOpenTech] = useState(null);
  const t = technologiesText[language];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="tecnologias" className="section technologies-section">
      <div className="container is-max-desktop">
        <h2 className="title is-2 has-text-centered mb-6" data-aos="fade-up">
          {t.title}
        </h2>
        <p className="mb-4 text-blanco has-text-centered is-size-5">
          {t.intro}
        </p>

        <div className="categories-island">
          {techData.map((category, idx) => (
            <button
              key={category.category.es}
              className={`category-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
              type="button"
            >
              <a>{category.category[language]}</a>
            </button>
          ))}
        </div>

        <div className="columns is-multiline is-variable is-5 is-centered">
          {techData[activeTab].items.map((tech, tid) => (
            <div
              key={tech.name}
              className="column is-2 tech-column"
              data-aos="zoom-in"
            >
              <div
                className={`tech-box ${openTech === tech.name ? "open" : ""} ${openTech !== tech.name ? "hint-pulse" : ""}`}
                style={{ "--pulse-delay": `${tid * 0.24}s` }}
                onClick={() =>
                  setOpenTech(openTech === tech.name ? null : tech.name)
                }
              >
                <span className="tech-icon">{tech.logo}</span>
                <span className="tech-tooltip">{tech.name}</span>

                {openTech === tech.name && (
                  <div className="tech-description">{tech.description[language]}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
