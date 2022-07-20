import React, { useState } from "react";
//ui
import "./contact-animation.css";
import "./contact.css";
import "./contact-description.css";
import "./contact-form.css";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault();
    const mailData = document.querySelector("#mailto");

    mailData.setAttribute(
      "href",
      `mailto:leonel.alderete1994@gmail.com?subject=${name}&body=${message}`
    );

    mailData.click();
  };

  return (
    <div className="contact-container">
      <div className="description-container">
        <div className="description-data">
          <div className="title">
            <h1>CONTACTO</h1>
          </div>

          <div className="description">
            <h3>¿Quieres contactarme?</h3>

            <p>
              Puedes enviarme un mensaje a traves de las siguientes plataformas:
            </p>
          </div>

          <div className="icon-container">
            {/* GitHub */}
            <a
              href="https://github.com/LeonelAlderete"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="github">
                <AiFillGithub className="page-icon" />

                <span>GitHub</span>
              </div>
            </a>

            {/* Linkedin */}
            <a
              href="https://www.linkedin.com/in/leonel-alderete/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="linkedin">
                <AiFillLinkedin className="page-icon" />

                <span>Linkedin</span>
              </div>
            </a>
          </div>

          <div className="mail">
            <p>Tambien puedes enviarme un mail:</p>

            <span>leonel.alderete1994@gmail.com</span>

            <a
              id="mailto"
              href="mailto:leonel.alderete1994@gmail.com"
              style={{ display: "none", opacity: "0%" }}
            >
              " "
            </a>
          </div>
        </div>
      </div>

      <div className="form-container">
        <div className="form-inputs">
          <form onSubmit={onSubmitForm}>
            <div className="input">
              <label>NOMBRE</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="input">
              <label>EMAIL</label>
              <input type="text" />
            </div>

            <div className="input">
              <label>MENSAJE</label>
              <textarea
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <button className="button">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
}
