import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  // Inicializar AOS
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validación del email
    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (value && !emailPattern.test(value)) {
        e.target.setCustomValidity(
          "Correo inválido. Verifica que tenga @ y no use caracteres extraños.",
        );
      } else {
        e.target.setCustomValidity("");
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    // Validación del email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert("Correo inválido. Verifica que esté escrito correctamente.");
      return;
    }

    // Simular envío
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccessModal(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 2000);
  };

  return (
    <section
      id="contacto"
      className="section contact-section"
      style={{ color: "#fff", paddingTop: "100px" }}
    >
      <div className="container is-max-desktop">
        <h2 className="title is-2 has-text-centered mb-6" data-aos="fade-up">
          Contacto
        </h2>

        <div className="columns is-centered">
          <div className="column is-8">
            {/* Cuadro del formulario con animación AOS y hover */}
            <div
              className="box"
              data-aos="zoom-in"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                borderRadius: "16px",
                padding: "30px",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Nombre *</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Tu nombre"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Email *</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Tu correo electrónico"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Asunto *</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder="Asunto del mensaje"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">Mensaje *</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="Escribe tu mensaje"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      style={{ minHeight: "150px" }}
                    ></textarea>
                  </div>
                </div>

                <div className="field is-grouped is-justify-content-center">
                  <div className="control">
                    <button
                      type="submit"
                      className={`button is-primary ${loading ? "is-loading" : ""}`}
                    >
                      {loading ? "Enviando..." : "Enviar"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de éxito */}
      {successModal && (
        <div
          className="modal is-active"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="modal-background"
            onClick={() => setSuccessModal(false)}
            style={{ backgroundColor: "rgba(0,0,0,0.8)" }}
          ></div>
          <div
            className="modal-content box"
            style={{
              maxWidth: "500px",
              textAlign: "center",
              borderRadius: "16px",
              padding: "24px",
              backgroundColor: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            <h3 className="title is-4">¡Muchas gracias!</h3>
            <p>
              Hemos recibido tu mensaje y nos pondremos en contacto contigo
              pronto.
            </p>
            <button
              className="button is-primary mt-4"
              onClick={() => setSuccessModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
