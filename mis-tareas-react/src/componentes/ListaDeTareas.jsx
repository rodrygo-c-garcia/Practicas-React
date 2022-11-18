import React, { useState } from "react";
import "../estilos-css/ListaDeTareas.css";
import Tarea from "./Tarea";
import TareaFormulario from "./TareaFormulario";

function ListaDeTareas() {
  // HOOK
  const [tareas, setTareas] = useState([]);

  const addTarea = (tarea) => {
    // Si la cadena no este vacia

    console.log(tarea);

    if (tarea.texto.trim()) {
      // trim() -> quita espacios del principio y final
      tareas.texto = tarea.texto.trim();
      // agregamos al principio la tarea nueva a nuestra lista
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  };

  const deleteTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const tareaCompletada = (id) => {
    const tareasActualizadas = tareas.map((tarea) => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });

    setTareas(tareasActualizadas);
  };

  return (
    <>
      <TareaFormulario onSubmit={addTarea} />

      <div className="tareas-lista-contenedor">
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            eliminarTarea={deleteTarea}
            completarTarea={tareaCompletada}
          />
        ))}
      </div>
    </>
  );
}
export default ListaDeTareas;
