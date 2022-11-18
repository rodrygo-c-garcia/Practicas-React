import "./App.css";
import freeCodeCampLogo from "./img/freecodecamp-logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import { useState } from "react";

function App() {
  const [numClics, setNumClics] = useState(0);

  const manejarClick = () => setNumClics(numClics + 1);

  const reiniciarClick = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="logo-freecodecamp-container">
        <img
          className="freecodecamp-logo"
          src={freeCodeCampLogo}
          alt="freecodecamp"
        />
      </div>
      <div className="container-principal">
        <Contador valor={numClics} />

        <Boton text="Clics" esBotonClick={true} manejarClick={manejarClick} />

        <Boton
          text="Reiniciar"
          esBotonClick={false}
          manejarClick={reiniciarClick}
        />
      </div>
    </div>
  );
}

export default App;
