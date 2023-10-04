// UserList.tsx - Componente para la visualización de usuarios generales
import React, { useEffect, useState } from "react";

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    // Llama a la API para obtener los usuarios generales
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

  return (
    <div>
      <h2>Ver usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.picture.large} alt={user.name.first} />
            <p>Nombre: {user.name.first}</p>
            <p>Email: {user.email}</p>
            <p>País: {user.location.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
