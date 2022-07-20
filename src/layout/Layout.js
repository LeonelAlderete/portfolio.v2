import React from "react";
//Componentes
import DesktopNavbar from "../components/DesktopNavbar";
import MobileNavBar from "../components/MobileNavbar";

export default function Layout(props) {
  const { children } = props;
  return (
    <>
      <DesktopNavbar />

      <MobileNavBar />

      {children}
    </>
  );
}
