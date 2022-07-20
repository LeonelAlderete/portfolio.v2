import React from "react";
//ui
import "./presentation-animation.css";
import "./presentation.css";
import "./presentation-welcome.css";
import "./presentation-avatar.css";
import avatar from "../../assets/images/avatar.png";

export default function Presentation() {
  return (
    <div className="presentation-container">
      <div className="welcome-container">
        <div className="welcome-info">
          <h2>HOLA &#128075; SOY</h2>

          <h1>LEONEL</h1>
          <h1>ALDERETE</h1>

          <h2 className="title">DESARROLLADOR FRONT END</h2>

          <p>Me desempeño en el desarrollo de aplicaciones web y móviles.</p>
        </div>
      </div>

      <div className="avatar-container">
        <img src={avatar} alt="" />
      </div>
    </div>
  );
}
