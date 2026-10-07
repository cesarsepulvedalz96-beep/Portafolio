import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { certificates } from "../data/certificates";
import "../styles/certificates.css";

const text = {
  es: {
    title: "Certificados y cursos",
    subtitle: "Aprendizaje continuo, paso a paso.",
    list: "Cursos completados",
    select: "Selecciona un certificado",
    close: "Cerrar certificados",
    open: "Abrir PDF original",
    preview: "Certificado de",
    completed: "Completado el",
    total: "certificados",
  },
  en: {
    title: "Certificates and courses",
    subtitle: "Continuous learning, one step at a time.",
    list: "Completed courses",
    select: "Select a certificate",
    close: "Close certificates",
    open: "Open original PDF",
    preview: "Certificate for",
    completed: "Completed on",
    total: "certificates",
  },
};

export default function CertificatesModal({ language, onClose }) {
  const dialogRef = useRef(null);
  const [selectedId, setSelectedId] = useState(certificates[0].id);
  const active = certificates.find((certificate) => certificate.id === selectedId);
  const t = text[language];
  const base = `${import.meta.env.BASE_URL}certificates/${active.id}`;
  const date = new Intl.DateTimeFormat(language === "es" ? "es-CL" : "en-US", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${active.date}T12:00:00Z`));

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const bodyOverflow = document.body.style.overflow;
    const htmlOverflow = document.documentElement.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = bodyOverflow;
      document.documentElement.style.overflow = htmlOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) {
        previousFocus.focus({ preventScroll: true });
      }
    };
  }, []);

  return createPortal(
    <dialog
      ref={dialogRef}
      className="certificates-dialog"
      aria-labelledby="certificates-title"
      aria-describedby="certificates-subtitle"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right ||
            event.clientY < rect.top || event.clientY > rect.bottom) onClose();
      }}
      onWheel={(event) => event.stopPropagation()}
    >
      <header className="certificates-header">
        <span className="certificates-emblem"><FaAward aria-hidden="true" /></span>
        <div>
          <h2 id="certificates-title">{t.title}</h2>
          <p id="certificates-subtitle">{t.subtitle}</p>
        </div>
        <button type="button" className="certificates-close" onClick={onClose} aria-label={t.close}>
          <FaTimes aria-hidden="true" />
        </button>
      </header>

      <div className="certificates-layout">
        <nav className="certificates-sidebar" aria-label={t.list}>
          <p className="certificates-count">{certificates.length} {t.total}</p>
          <ul className="certificates-list">
            {certificates.map((certificate) => (
              <li key={certificate.id}>
                <button
                  type="button"
                  className="certificate-choice"
                  aria-current={selectedId === certificate.id ? "true" : undefined}
                  onClick={() => setSelectedId(certificate.id)}
                  aria-controls="certificate-viewer"
                >
                  <FaAward aria-hidden="true" />
                  <span>
                    <strong>{certificate.title[language]}</strong>
                    <small>{certificate.issuer} · {certificate.date.slice(0, 4)}</small>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="certificates-mobile-select">
          <label htmlFor="certificate-select">{t.select}</label>
          <select id="certificate-select" value={selectedId} onChange={(event) => setSelectedId(event.target.value)}>
            {certificates.map((certificate) => (
              <option key={certificate.id} value={certificate.id}>{certificate.title[language]}</option>
            ))}
          </select>
        </div>

        <div id="certificate-viewer" className="certificate-viewer">
          <div className="certificate-info" aria-live="polite" aria-atomic="true">
            <p className="certificate-issuer">{active.issuer}</p>
            <h3>{active.title[language]}</h3>
            <p>{t.completed} <time dateTime={active.date}>{date}</time></p>
          </div>
          <div className="certificate-preview">
            <img key={active.id} src={`${base}.webp`} alt={`${t.preview} ${active.title[language]}`} />
          </div>
          <footer className="certificate-footer">
            <a className="button is-primary" href={`${base}.pdf`} target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt aria-hidden="true" />
              {t.open}
            </a>
          </footer>
        </div>
      </div>
    </dialog>,
    document.body,
  );
}
