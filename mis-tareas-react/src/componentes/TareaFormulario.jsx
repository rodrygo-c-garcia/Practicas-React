import React, { useState } from "react";
import "../estilos-css/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    // extraemos el valor del input
    setInput(e.target.value);
  };

  const manejarEnvio = (e) => {
    // evitamos que la pagina se recargue
    e.preventDefault();

    const tareaNueva = {
      // generamos el id unico con uuid
      id: uuidv4(),
      texto: input,
      completada: false,
    };

    // enviamos la tarea a nuestro componente Lista de Tareas
    props.onSubmit(tareaNueva);
  };

  return (
    <form
      className="tarea-formulario"
      // los datos en la funcion es lo que se va a enviar en el formulario
      onSubmit={manejarEnvio}
    >
      <input
        className="tarea-input form-input 
                    block w-full rounded-lg leading-none focus:outline-none placeholder-white/50 
                    [ transition-colors duration-200 ] 
                    [ py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 pl-12 ] 
                    [ bg-black/20 focus:bg-black/25 ] 
                    [ text-[#333] focus:text-white ]"
        type="text"
        placeholder="Escribe una Tarea"
        name="texto"
        // Escucha el formulario
        onChange={manejarCambio}
      />
      <button
        className="tarea-button form-input w-full rounded-lg font-bold text-white focus:outline-none
                  [ p-3 md:p-4 lg:p-4 ] 
                  [ transition-colors duration-500 ] 
                  [ bg-blue-800 hover:bg-blue-700 ]"
      >
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;
