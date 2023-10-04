import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function VerUsuarioPorPais() {
  const { pais } = useParams(); 
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    // HTTP solicitud
    fetch("https://randomuser.me/api/?nat=${pais}")
      .then(response => response.json())
      .then(data => {
        const usuarioData = data.results[0];
        setUsuario(usuarioData);
      })
      .catch(error => {
        console.error("Error al obtener usuario por país:", error);
      });
  }, [pais]);

  return (
    <div>
      <h2>Usuario de {pais.toUpperCase()}</h2>
      {usuario ? (
        <div>
            <p>Nombre: {usuario.name.primerNombre} {usuario.name.apellido}</p>
            <p>Correo electrónico: {usuario.email}</p>
            <p>País: {usuario.location.pais}</p>
            <img src={usuario.foto} alt="Foto de perfil" />
        </div>
      ) : (
      )}
    </div>
  );
}

export default VerUsuarioPorPais;
