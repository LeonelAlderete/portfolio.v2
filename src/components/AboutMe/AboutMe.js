import React from "react";
//ui
import "./aboutme-animation.css";
import "./aboutme.css";
import "./aboutme-photo.css";
import "./aboutme-description.css";
import profilePhoto from "../../assets/images/profile-photo.png";

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="photo-container">
        <img src={profilePhoto} alt="" />
      </div>

      <div className="description-container">
        <div className="description-info">
          <h1>Sobre mi...</h1>

          <p>
            Me considero un aficionado por la tecnología, ya que disfruto
            programar como hobby y profesión. Mi viaje como programador comenzó
            en 2019, cuando comencé la Tecnicatura en Desarrollo de Software en
            la Universidad Provincial de Ezeiza, desde entonces me he
            concentrado en mejorar y aprender nuevas habilidades que me ayuden
            en mi carrera profesional.
          </p>
        </div>
      </div>
    </div>
  );
}
