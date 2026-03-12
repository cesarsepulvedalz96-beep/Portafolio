import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUserAstronaut } from "react-icons/fa";

export default function About() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="sobre-mi" className="section about-section">
      <div className="container is-max-desktop">
        <div className="columns is-vcentered">
          {/* ICONO / LOGO A LA IZQUIERDA */}
          <div className="column is-6 has-text-centered" data-aos="fade-right">
            <FaUserAstronaut className="about-icon floating" />
          </div>

          {/* TEXTO A LA DERECHA */}
          <div className="column is-6" data-aos="fade-left">
            <h3 className="title text-blanco is-3">Sobre mí</h3>

            <p className="mb-4 text-blanco">
              Soy desarrollador Full Stack apasionado por convertir ideas en
              soluciones digitales que realmente funcionen. Me gusta construir
              aplicaciones web desde cero, comprendiendo tanto la experiencia
              del usuario como la lógica que hace que todo funcione por dentro.
              {expanded && (
                <>
                  {" "}
                  Me motiva aprender constantemente y enfrentar nuevos retos que
                  me permitan crecer tanto técnica como profesionalmente. Creo
                  en el trabajo en equipo, en la comunicación clara y en el
                  aprendizaje continuo como pilares fundamentales para
                  desarrollarme dentro del mundo del desarrollo. Actualmente
                  busco oportunidades donde pueda aportar valor, seguir
                  perfeccionando mis habilidades y asumir nuevos desafíos.
                </>
              )}
            </p>

            <button
              className="button is-primary"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Leer menos" : "Leer más"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
