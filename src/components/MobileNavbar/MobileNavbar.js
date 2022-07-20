import React from "react";
//Route
import { useHistory } from "react-router-dom";
//ui
import "./mobile-navbar.css";
import { BiBrain } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { HiOutlineUser } from "react-icons/hi";
import { RiHome2Line, RiPencilRuler2Line } from "react-icons/ri";
//Constantes
const ICON_SIZE = 35;

export default function MobileNavBar() {
  const history = useHistory();

  const goToPage = (page) => {
    history.push(page);
  };

  const setClass = (path) => {
    if (history.location.pathname === path) {
      return "icon is-active";
    } else {
      return "icon";
    }
  };

  return (
    <div className="mobile-navbar-container">
      <div className="mobile-options">
        <RiHome2Line
          className={setClass("/")}
          color="#8700bd"
          size={ICON_SIZE}
          onClick={() => goToPage("/")}
        />

        <HiOutlineUser
          className={setClass("/about-me")}
          color="#8700bd"
          size={ICON_SIZE}
          onClick={() => goToPage("/about-me")}
        />

        <BiBrain
          className={setClass("/skills")}
          color="#8700bd"
          size={ICON_SIZE}
          onClick={() => goToPage("/skills")}
        />

        <RiPencilRuler2Line
          className={setClass("/projects")}
          color="#8700bd"
          size={ICON_SIZE}
          onClick={() => goToPage("/projects")}
        />

        <FiMail
          className={setClass("/contact")}
          color="#8700bd"
          size={ICON_SIZE}
          onClick={() => goToPage("/contact")}
        />
      </div>
    </div>
  );
}
