import React from "react";
import "../estilos-css/Contador.css";

function Contador({ valor }) {
  return (
    <div className="contador">
      <h1> {valor}</h1>
    </div>
  );
}

export default Contador;
