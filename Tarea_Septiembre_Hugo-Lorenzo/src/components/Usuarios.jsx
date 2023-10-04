import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://randomuser.me/api/?results=3')
      .then(response => {
        setUsers(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h2>Ver Usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.picture.thumbnail} alt={user.name.first} />
            <p>Name: {user.name.first} {user.name.last}</p>
            <p>Email: {user.email}</p>
            <p>Country: {user.location.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
