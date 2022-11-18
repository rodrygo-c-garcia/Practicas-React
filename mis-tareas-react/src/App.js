import "./App.css";
import ListaDeTareas from "./componentes/ListaDeTareas";
import LogoCodeCamp from "./componentes/LogoCodeCamp";

function App() {
  return (
    <div className="App">
      <LogoCodeCamp />
      <div className="tareas-lista-principal">
        <h1 className="mb-6 uppercase font-bold [ text-xl md:text-2xl lg:text-2xl ]">
          Mis Tareas
        </h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
