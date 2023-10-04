import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UsuarioPais() {
  const { pais } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get(`https://randomuser.me/api/?nat=${pais}`)
      .then(response => {
        if (response.data.results.length > 0) {
          setUser(response.data.results[0]);
        }
      })
      .catch(error => {
        console.error('Error fetching user by country:', error);
      });
  }, [pais]);

  if (!user) {
    return <p>No se encontró un usuario para este país.</p>;
  }

  return (
    <div>
      <h2>Ver Usuario por País</h2>
      <img src={user.picture.thumbnail} alt={user.name.first} />
      <p>Name: {user.name.first} {user.name.last}</p>
      <p>Email: {user.email}</p>
      <p>Country: {user.location.country}</p>
    </div>
  );
}

export default UsuarioPais;
