import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

const Home = () => (
  <div>
    <h2>¡Bienvenido a la página de inicio!</h2>
  </div>
);

const Usuarios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=3')
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error('Error al cargar datos de usuarios:', error));
  }, []);

  return (
    <div>
      <h2>Listado de Usuarios</h2>
<ul>
{users.map((user, index) => (
  <li key={index}>
    <img src={user.picture.thumbnail} alt={`Usuario ${index}`} />
    {user.name.first} {user.name.last}
  </li>
))}
</ul>
</div>
);
};


const UsuarioPais = () => (
<div>
<h2>Detalles del Usuario por País</h2>
{}
</div>
);

function App() {
return (
<Router>
<div className="App">
<nav>
<ul>
  <li>
    <Link to="/">Inicio</Link>
  </li>
  <li>
    <Link to="/usuarios">Usuarios</Link>
  </li>
  <li>
    <Link to="/usuario-pais">Usuario País</Link>
  </li>
</ul>
</nav>

<hr />


<Route exact path="/" component={Home} />
<Route path="/usuarios" component={Usuarios} />
<Route path="/usuario-pais" component={UsuarioPais} />
</div>
</Router>
);
}

export default App;