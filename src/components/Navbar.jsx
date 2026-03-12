import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBrain,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

export default function IslandMenu() {
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const handleScroll = () => {
      const sections = items.map((item) => document.getElementById(item.id));

      const scrollPosition = window.scrollY + 200;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActive(items[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { id: "inicio", icon: <FaHome />, label: "Inicio", class: "home" },
    { id: "sobre-mi", icon: <FaUser />, label: "Sobre mí", class: "about" },
    {
      id: "tecnologias",
      icon: <FaBrain />,
      label: "Tecnologías",
      class: "tech",
    },
    {
      id: "proyectos",
      icon: <FaBriefcase />,
      label: "Proyectos",
      class: "projects",
    },
    {
      id: "contacto",
      icon: <FaEnvelope />,
      label: "Contacto",
      class: "contact",
    },
  ];

  const goTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="island-menu">
      {items.map((item) => (
        <button
          key={item.id}
          className={`island-item ${item.class} ${active === item.id ? "active" : ""}`}
          onClick={() => goTo(item.id)}
        >
          <span className="island-icon">{item.icon}</span>
          <span className="island-label">{item.label}</span>
        </button>
      ))}
    </nav>
  );
}
