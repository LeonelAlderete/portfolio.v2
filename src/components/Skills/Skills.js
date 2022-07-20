import React from "react";
//ui
import "./skills-animation.css";
import "./skills.css";
import "./skills-title.css";
import "./skills-cards.css";
import { AiFillAndroid, AiOutlineHtml5 } from "react-icons/ai";
import { DiReact, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiIos } from "react-icons/si";
//Utils
import skillsData from "../../utils/skillsData";

export default function Skills() {
  const setCardClass = (index) => {
    //El indice se usa en las animaciones
    if (index === 0) {
      return "card item1";
    } else if (index === 1) {
      return "card item2";
    } else if (index === 2) {
      return "card item3";
    }
  };

  return (
    <div className="skills-container">
      <div className="title">
        <h2>¿Que puedo hacer?</h2>
      </div>

      <div className="cards-list">
        {skillsData.map((item, index) => (
          <div className={setCardClass(index)} key={index}>
            {/* Titutlo */}
            <h4>{item.title}</h4>

            {/* Iconos */}
            {item.title === "PAGINAS ESTATICAS" && (
              <div className="icons">
                <AiOutlineHtml5 className="html-icon icon" />
                <DiCss3 className="css-icon icon" />
                <DiJavascript1 className="js-icon icon" />
              </div>
            )}

            {item.title === "APLICACIONES WEB" && (
              <div className="icons">
                <DiReact className="reactjs-icon icon" />
              </div>
            )}

            {item.title === "APLICACIONES ANDROID - IOS" && (
              <div className="icons">
                <AiFillAndroid className="android-icon icon" />
                <SiIos className="ios-icon icon" />
              </div>
            )}

            {/* Descripcion */}
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
