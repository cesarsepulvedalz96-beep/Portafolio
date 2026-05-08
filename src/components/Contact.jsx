import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCat, FaCoffee, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/c%C3%A9sar-sep%C3%BAlveda-71b8b3365",
    icon: <FaLinkedinIn />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: <FaInstagram />,
  },
  {
    label: "GitHub",
    href: "https://github.com/cesarsepulvedalz96-beep",
    icon: <FaGithub />,
  },
];

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
const enableGoogleRecaptcha = import.meta.env.VITE_ENABLE_RECAPTCHA === "true";
const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || "cesar.trunks@gmail.com";

const contactText = {
  es: {
    title: "Contacto",
    name: "Nombre *",
    namePlaceholder: "Tu nombre",
    email: "Email *",
    emailPlaceholder: "Tu correo electronico",
    subject: "Asunto *",
    subjectPlaceholder: "Asunto del mensaje",
    message: "Mensaje *",
    messagePlaceholder: "Escribe tu mensaje",
    invalidEmail: "Correo invalido. Verifica que tenga @ y no use caracteres extranos.",
    requiredAlert: "Por favor, completa todos los campos obligatorios.",
    invalidEmailAlert: "Correo invalido. Verifica que este escrito correctamente.",
    recaptchaAlert: "Completa la verificacion de Google reCAPTCHA antes de enviar.",
    robotAlert: "Confirma que no eres un robot antes de enviar.",
    robot: "No soy un robot *",
    sending: "Preparando envio...",
    send: "Enviar",
    feedbackTitle: "Tu comentario me ayuda para mejorar mi portafolio",
    feedbackShow: "Dejar comentario",
    feedbackSkip: "Omitir",
    feedbackSend: "Enviar con comentario",
    liked: "Que aspectos te gustaron?",
    likedPlaceholder: "Cuentame que te gusto del portafolio",
    improve: "Que podria mejorar?",
    improvePlaceholder: "Ideas, detalles visuales o cosas que cambiarias",
    social: "Tambien me puedes encontrar aqui",
    successTitle: "Muchas gracias!",
    successText: "Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.",
    close: "Cerrar",
    mailCommentTitle: "Comentario opcional sobre el portafolio",
    mailLiked: "Aspectos que le gustaron",
    mailImprove: "Aspectos que podria mejorar",
    notIndicated: "No indicado",
  },
  en: {
    title: "Contact",
    name: "Name *",
    namePlaceholder: "Your name",
    email: "Email *",
    emailPlaceholder: "Your email",
    subject: "Subject *",
    subjectPlaceholder: "Message subject",
    message: "Message *",
    messagePlaceholder: "Write your message",
    invalidEmail: "Invalid email. Make sure it includes @ and no unusual characters.",
    requiredAlert: "Please complete all required fields.",
    invalidEmailAlert: "Invalid email. Make sure it is written correctly.",
    recaptchaAlert: "Complete the Google reCAPTCHA verification before sending.",
    robotAlert: "Confirm that you are not a robot before sending.",
    robot: "I am not a robot *",
    sending: "Preparing delivery...",
    send: "Send",
    feedbackTitle: "Your comment helps me improve my portfolio",
    feedbackShow: "Leave feedback",
    feedbackSkip: "Skip",
    feedbackSend: "Send with feedback",
    liked: "What aspects did you like?",
    likedPlaceholder: "Tell me what you liked about the portfolio",
    improve: "What could I improve?",
    improvePlaceholder: "Ideas, visual details, or things you would change",
    social: "You can also find me here",
    successTitle: "Thank you!",
    successText: "We received your message and will contact you soon.",
    close: "Close",
    mailCommentTitle: "Optional portfolio feedback",
    mailLiked: "Aspects they liked",
    mailImprove: "Aspects I could improve",
    notIndicated: "Not indicated",
  },
};

export default function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: "", email: "", subject: "", message: "",
  });
  const [notRobot, setNotRobot] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [botTrap, setBotTrap] = useState("");
  const [loading, setLoading] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [feedbackPromptOpen, setFeedbackPromptOpen] = useState(false);
  const [feedbackData, setFeedbackData] = useState({
    liked: "", improve: "",
  });
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);
  const t = contactText[language];

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic" });
  }, []);

  useEffect(() => {
    if (!enableGoogleRecaptcha || !recaptchaSiteKey) return;

    const renderRecaptcha = () => {
      if (!recaptchaRef.current || !window.grecaptcha || recaptchaWidgetId.current !== null) {
        return;
      }

      recaptchaWidgetId.current = window.grecaptcha.render(recaptchaRef.current, {
        sitekey: recaptchaSiteKey,
        theme: "dark",
        callback: (token) => setRecaptchaToken(token),
        "expired-callback": () => setRecaptchaToken(""),
        "error-callback": () => setRecaptchaToken(""),
      });
    };

    const existingScript = document.getElementById("google-recaptcha-script");
    if (existingScript) {
      existingScript.addEventListener("load", renderRecaptcha);
      renderRecaptcha();
      return () => existingScript.removeEventListener("load", renderRecaptcha);
    }

    const script = document.createElement("script");
    script.id = "google-recaptcha-script";
    script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.addEventListener("load", renderRecaptcha);
    document.body.appendChild(script);

    return () => script.removeEventListener("load", renderRecaptcha);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      e.target.setCustomValidity(
        value && !emailPattern.test(value)
          ? t.invalidEmail
          : ""
      );
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleFeedbackChange = (e) => {
    const { name, value } = e.target;
    setFeedbackData({ ...feedbackData, [name]: value });
  };

  const resetFormState = () => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setFeedbackData({ liked: "", improve: "" });
    setFeedbackPromptOpen(false);
    setNotRobot(false);
    setRecaptchaToken("");
    if (enableGoogleRecaptcha && window.grecaptcha && recaptchaWidgetId.current !== null) {
      window.grecaptcha.reset(recaptchaWidgetId.current);
    }
    setBotTrap("");
  };

  const sendMail = (includeFeedback = true) => {
    setLoading(true);
    setTimeout(() => {
      const selectedFeedback = includeFeedback
        ? feedbackData
        : { liked: "", improve: "" };
      const subject = encodeURIComponent(formData.subject);
      const body = encodeURIComponent(
        `${t.name.replace(" *", "")}: ${formData.name}\nEmail: ${formData.email}\n\n${t.message.replace(" *", "")}:\n${formData.message}\n\n${t.mailCommentTitle}:\n${t.mailLiked}:\n${selectedFeedback.liked || t.notIndicated}\n\n${t.mailImprove}:\n${selectedFeedback.improve || t.notIndicated}`
      );

      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      setLoading(false);
      setSuccessModal(true);
      resetFormState();
    }, 700);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (botTrap) return;

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert(t.requiredAlert);
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(formData.email)) {
      alert(t.invalidEmailAlert);
      return;
    }

    if (enableGoogleRecaptcha && !recaptchaToken) {
      alert(t.recaptchaAlert);
      return;
    }

    if (!enableGoogleRecaptcha && !notRobot) {
      alert(t.robotAlert);
      return;
    }

    setFeedbackPromptOpen(true);
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="container is-max-desktop">
        <h2 className="title is-2 has-text-centered mb-6" data-aos="fade-up">
          {t.title}
        </h2>

        <div className="columns is-centered">
          <div className="column is-8">
            <div className="contact-box" data-aos="zoom-in">
              <form onSubmit={handleSubmit}>
                <input
                  className="contact-honeypot"
                  type="text"
                  name="company"
                  tabIndex="-1"
                  autoComplete="off"
                  value={botTrap}
                  onChange={(event) => setBotTrap(event.target.value)}
                  aria-hidden="true"
                />

                <div className="field">
                  <label className="label">{t.name}</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder={t.namePlaceholder}
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">{t.email}</label>
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder={t.emailPlaceholder}
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">{t.subject}</label>
                  <div className="control">
                    <input
                      className="input"
                      type="text"
                      placeholder={t.subjectPlaceholder}
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="label">{t.message}</label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder={t.messagePlaceholder}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="field">
                  {enableGoogleRecaptcha && recaptchaSiteKey ? (
                    <div className="contact-recaptcha">
                      <div ref={recaptchaRef} />
                    </div>
                  ) : (
                    <label className="contact-security-check">
                      <input
                        type="checkbox"
                        checked={notRobot}
                        onChange={(event) => setNotRobot(event.target.checked)}
                        required
                      />
                      <span className="contact-security-box" />
                      <span>{t.robot}</span>
                    </label>
                  )}
                </div>

                <div className="field is-grouped is-justify-content-center">
                  <div className="control">
                    <button
                      type="submit"
                      className={`button is-primary contact-send-button ${loading ? "is-sending" : ""}`}
                      disabled={loading}
                      aria-busy={loading}
                    >
                      {loading && <FaCoffee className="contact-send-icon" />}
                      <span>{loading ? t.sending : t.send}</span>
                    </button>
                  </div>
                </div>
              </form>

              <div className="contact-social" data-aos="fade-up">
                <p className="contact-social-title">
                  {t.social}
                </p>
                <div className="contact-social-links">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-social-link"
                      aria-label={link.label}
                    >
                      <span className="contact-social-icon">{link.icon}</span>
                      <span>{link.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {feedbackPromptOpen && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setFeedbackPromptOpen(false)} />
          <div className="contact-feedback-modal modal-content box">
            <h3 className="title is-4">{t.feedbackTitle}</h3>

            <div className="field">
              <label className="label">{t.liked}</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder={t.likedPlaceholder}
                  name="liked"
                  value={feedbackData.liked}
                  onChange={handleFeedbackChange}
                />
              </div>
            </div>

            <div className="field">
              <label className="label">{t.improve}</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder={t.improvePlaceholder}
                  name="improve"
                  value={feedbackData.improve}
                  onChange={handleFeedbackChange}
                />
              </div>
            </div>

            <div className="contact-feedback-modal-actions">
              <button
                className="button is-primary"
                type="button"
                onClick={() => sendMail(false)}
                disabled={loading}
              >
                {t.feedbackSkip}
              </button>
              <button
                className={`button is-primary contact-send-button ${loading ? "is-sending" : ""}`}
                type="button"
                onClick={() => sendMail(true)}
                disabled={loading}
                aria-busy={loading}
              >
                {loading && <FaCoffee className="contact-send-icon" />}
                <span>{loading ? t.sending : t.feedbackSend}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {successModal && (
        <div className="modal is-active">
          <div className="modal-background" onClick={() => setSuccessModal(false)} />
          <div className="contact-success modal-content box">
            <h3 className="title is-4">{t.successTitle}</h3>
            <p className="text-blanco">
              {t.successText}
            </p>
            <button
              className="button is-primary mt-4 contact-success-close"
              onClick={() => setSuccessModal(false)}
            >
              <FaCat className="contact-success-close-icon" />
              <span>{t.close}</span>
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
