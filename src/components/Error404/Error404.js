import React from "react";
//rutas
import { useHistory } from "react-router-dom";
//ui
import "./error404.css";
import { BiError } from "react-icons/bi";

export default function Error404() {
  const history = useHistory();

  return (
    <div className="error404-container">
      <div className="error404-info">
        <div className="icon">
          <BiError size={100} />
        </div>

        <div className="description">
          <span>
            {`El enlace al que intenta ingresar esta roto o no existe. `}
          </span>

          <span className="redirect" onClick={() => history.push("/")}>
            Ir a la pagina principal.
          </span>
        </div>
      </div>
    </div>
  );
}
