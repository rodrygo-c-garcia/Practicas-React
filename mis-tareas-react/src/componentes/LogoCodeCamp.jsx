import React from "react";
import logoCode from "../img/freecodecamp-logo.png";
import "../estilos-css/LogoCodeCamp.css";

const LogoCodeCamp = () => (
  <div className="contenedor-logo">
    <img className="logo-codecamp" src={logoCode} alt="" />
  </div>
);

export default LogoCodeCamp;
