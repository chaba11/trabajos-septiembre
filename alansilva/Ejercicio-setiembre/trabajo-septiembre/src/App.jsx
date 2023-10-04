import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home";
import Usuarios from "./components/Usuarios";
import UsuarioPais from "./components/UsuarioPais";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/usuarios">Ver Usuarios</Link>
            </li>
            <li>
              <Link to="/usuarios/es">Usuario por País (ES)</Link>
            </li>
            <li>
              <Link to="/usuarios/br">Usuario por País (BR)</Link>
            </li>
            <li>
              <Link to="/usuarios/us">Usuario por País (US)</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/usuarios" exact component={Usuarios} />
          <Route path="/usuarios/:pais" component={UsuarioPais} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
