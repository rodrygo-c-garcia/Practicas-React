import React from "react";
import "../hojas-estilo/BotonClear.css";

const BotonClear = (props) => (
  <button className="boton-clear" onClick={() => props.manejarClick()}>
    {props.children}
  </button>
);

export default BotonClear;
