export default function Footer({ language }) {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          {language === "es"
            ? "© 2026 Cesar Sepulveda. Todos los derechos reservados."
            : "© 2026 Cesar Sepulveda. All rights reserved."}
        </p>
      </div>
    </footer>
  );
}
