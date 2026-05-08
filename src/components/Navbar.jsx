import { useEffect, useState } from "react";
import {
  FaBrain,
  FaBriefcase,
  FaEnvelope,
  FaGlobeAmericas,
  FaHome,
  FaUser,
} from "react-icons/fa";

const items = [
  {
    id: "inicio",
    icon: <FaHome />,
    label: { es: "Inicio", en: "Home" },
    class: "home",
  },
  {
    id: "sobre-mi",
    icon: <FaUser />,
    label: { es: "Sobre mi", en: "About" },
    class: "about",
  },
  {
    id: "tecnologias",
    icon: <FaBrain />,
    label: { es: "Tecnologias", en: "Technologies" },
    class: "tech",
  },
  {
    id: "proyectos",
    icon: <FaBriefcase />,
    label: { es: "Proyectos", en: "Projects" },
    class: "projects",
  },
  {
    id: "contacto",
    icon: <FaEnvelope />,
    label: { es: "Contacto", en: "Contact" },
    class: "contact",
  },
];

export default function IslandMenu({ language, onToggleLanguage }) {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    let resizeTimer;

    const handleScroll = () => {
      const sections = items.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let current = items[0].id;

      sections.forEach((section, index) => {
        if (!section) return;

        const offsetTop = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          current = items[index].id;
        }
      });

      setActive(current);
    };

    const handleResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        handleScroll();
      }, 120);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);
    handleScroll();

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  const goTo = (id) => {
    setActive(id);
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="island-menu">
      {items.map((item) => (
        <button
          key={item.id}
          className={`island-item ${item.class} ${active === item.id ? "active" : ""}`}
          onClick={() => goTo(item.id)}
          type="button"
        >
          <span className="island-icon">{item.icon}</span>
          <span className="island-label">{item.label[language]}</span>
        </button>
      ))}
      <button
        className="island-item language"
        onClick={onToggleLanguage}
        type="button"
        aria-label={language === "es" ? "Cambiar a ingles" : "Switch to Spanish"}
      >
        <span className="island-icon"><FaGlobeAmericas /></span>
        <span className="island-language-code">{language === "es" ? "EN" : "ES"}</span>
        <span className="island-label">{language === "es" ? "English" : "Espanol"}</span>
      </button>
    </nav>
  );
}
