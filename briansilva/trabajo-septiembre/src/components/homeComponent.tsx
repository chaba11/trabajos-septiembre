import { Link } from "react-router-dom";
import "./stylehome.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/usuarios">
        <button>Ver Usuarios</button>
      </Link>
      <Link to="/usuarios/:">
        <button>Ver Usuarios por país</button>
      </Link>
    </div>
  );
};

export { Home };
