import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <Link className="link" to="/usuarios">
        Ver usuarios
      </Link>
      <Link className="link" to="/usuarios/br">
        Ver usuarios por pais
      </Link>
    </div>
  );
}

export default App;
