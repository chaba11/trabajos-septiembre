import React from "react";
import { useState, useEffect } from "react";

function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map(
          user,
          index
        )(
          <li>
            <p>Nombre: {user.name} </p>
            <p>Email: {user.email}</p>
            <p>Pais: {user.country}</p>
            <img src={user.photo} alt="perfil" />
          </li>
        )}
      </ul>
    </div>
  );
}

export default Usuarios;
