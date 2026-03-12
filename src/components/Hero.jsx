import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaLaptopCode } from "react-icons/fa";

export default function Hero() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section id="inicio" className="section hero-section">
      <div className="container is-max-desktop">
        <div className="columns is-vcentered">
          {/* TEXTO */}
          <div className="column is-6" data-aos="fade-right">
            <p className="is-uppercase text-blanco mb-2">
              DESARROLLADOR FULL STACK
            </p>

            <h1 className="title text-verde-azulado is-1">
              Hola, mi nombre es César Sepúlveda <br />
            </h1>

            <p className="subtitle text-blanco is-5 mt-4">
              Soy Analista Programador con enfoque en desarrollo Full Stack y
              aprendizaje constante. Me considero autodidacta, curioso y
              comprometido con mejorar cada día, tanto en lo técnico como en lo
              profesional..
            </p>

            <button
              className="button is-primary mt-5"
              onClick={() =>
                document
                  .getElementById("proyectos")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Ver mis proyectos
            </button>
          </div>

          {/* LOGO */}
          <div className="column is-6 has-text-centered" data-aos="fade-left">
            <FaLaptopCode className="hero-icon" />
          </div>
        </div>
      </div>
    </section>
  );
}
