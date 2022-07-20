import React from "react";
//Route
import { useHistory } from "react-router-dom";
//ui
import "./desktop-navbar.css";

export default function DesktopNavbar() {
  const history = useHistory();

  const goToPage = (page) => {
    history.push(page);
  };

  return (
    <div className="desktop-navbar-container">
      <div className="desktop-logo">
        <span onClick={() => goToPage("/")}>LEONEL DEVELOPER</span>
      </div>

      <div className="desktop-options">
        <span onClick={() => goToPage("/")}>Inicio</span>

        <span onClick={() => goToPage("/about-me")}>Perfil</span>

        <span onClick={() => goToPage("/skills")}>Habilidades</span>

        <span onClick={() => goToPage("/projects")}>Proyectos</span>

        <span onClick={() => goToPage("/contact")}>Contacto</span>
      </div>
    </div>
  );
}
