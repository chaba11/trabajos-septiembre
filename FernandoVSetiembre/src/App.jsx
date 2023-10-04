import "./App.css";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="links">
      <Link to={`/usuarios`}>Ver Usuarios</Link>
      <Link to={`/usuarios/us`}>Ver Usuarios por Pais</Link>
    </div>
  );
};

export default App;
