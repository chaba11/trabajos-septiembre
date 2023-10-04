import React, { useEffect, useState } from "react";

function VerUsuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    //solicitud HTTP 
    fetch("https://randomuser.me/api/?results=3")
    .then(response => response.json())
    .then(data => {
    const usuariosData = data.results;
    setUsuarios(usuariosData);
  })
  .catch(error => {
    console.error("Error, no se pudo obtener los usuarios:", error);
      });
  }, []);

  return (
    <div>
      <h2 >Usuarios</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <p>Nombre: {usuario.name.primerNombre} {usuario.name.apellido}</p>
            <p>Correo electrónico: {usuario.email}</p>
            <p>País: {usuario.location.pais}</p>
            <img src={usuario.foto} alt="Foto de perfil" />

          </li>
        ))}
      </ul>
    </div>
  );
}

export default VerUsuarios;