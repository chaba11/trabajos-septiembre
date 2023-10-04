import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <Link to="/usuarios">Ver Usuarios</Link>
      <br />
      <Link to="/usuarios/es">Ver Usuario de España</Link>
      <br />
      <Link to="/usuarios/br">Ver Usuario de Brasil</Link>
      <br />
      <Link to="/usuarios/us">Ver Usuario de Estados Unidos</Link>
    </div>
  );
}

export default Home;
