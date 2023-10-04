import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Usuarios from './components/Usuarios';
import UsuarioPais from './components/UsuarioPais';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/usuarios">Usuarios</Link>
            </li>
            <li>
              <Link to="/usuarios/es">Usuario Es</Link>
            </li>
            <li>
              <Link to="/usuarios/br">Usuario Br</Link>
            </li>
            <li>
              <Link to="/usuarios/us">Usuario Us</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/usuarios" exact component={Usuarios} />
          <Route path="/usuarios/:pais" component={UsuarioPais} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
