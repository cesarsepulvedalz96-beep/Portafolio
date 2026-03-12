import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bulma/css/bulma.min.css";
import "aos/dist/aos.css";
import "./styles/custom.css";
import "./styles/island-menu.css";
import "./styles/technologies.css";
import "./styles/project.css";
import "./styles/contact.css";
import "./styles/icons.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
