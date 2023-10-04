// src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Usuarios from "./Usuario";
import UsuarioPais from "./UsuarioPais";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>

      <Link to="/usuarios">Ver Usuarios</Link>
      <br />
      <Link to="/usuarios/es">Ver usuario por pais (es)</Link>
      <br />
      <Link to="/usuarios/br">Ver usuario por pais (br)</Link>
      <br />
      <Link to="/usuarios/us">Ver usuario por pais (br)</Link>
    </div>
  );
}

export default Home;
