import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import VerUsuarios from './VerUsuarios';
import VerUsuariosPorPais from './VerUsuariosPorPais';
import VerUsuarioPorPais from './VerUsuarioPorPais';


function AppRouter() {
  return (
    <Router>
      <div>
            <ul>
              <li>
                <Link to="/ver-usuarios">Ver Usuarios</Link>
              </li>
              <li>
                <Link to="/ver-usuarios-por-pais">Ver Usuarios por País</Link>
                <Link to="/usuarios/es">Ver Usuario ES</Link>
                <Link to="/usuarios/br">Ver Usuario BR</Link>
                <Link to="/usuarios/us">Ver Usuario US</Link>
              </li>
            </ul>
            
            <Route>
              <Route path="/ver-usuarios">
                <VerUsuarios />
              </Route>
              <Route path="/ver-usuarios-por-pais">
                <VerUsuariosPorPais />
              </Route>
              <Route path="/usuarios/:pais">
                <VerUsuarioPorPais />
              </Route>
            </Route>
      </div>
    </Router>
  );
}

export default AppRouter;
