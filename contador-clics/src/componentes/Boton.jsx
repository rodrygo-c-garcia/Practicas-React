import React from "react";
import "../estilos-css/Boton.css";

function Boton({ text, esBotonClick, manejarClick }) {
  return (
    <button
      className={esBotonClick ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClick}
    >
      {text}
    </button>
  );
}

export default Boton;
