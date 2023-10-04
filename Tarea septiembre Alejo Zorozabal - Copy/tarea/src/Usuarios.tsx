import React, { useState, useEffect } from 'react';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {

    fetch('https://randomuser.me/api/?results=3')
      .then((response) => response.json())
      .then((data) => setUsuarios(data.results))
      .catch((error) => console.error('Error al cargar datos de usuarios:', error));
  }, []);

  return (
    <div>
      <h2>Lista Usuarios</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <li key={index}>
            <img src={usuario.picture.thumbnail} alt={`Usuario ${index}`} />
            {usuario.name.first} {usuario.name.last}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Usuarios;