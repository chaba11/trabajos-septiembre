import { useEffect, useState } from 'react';

function Usuarios() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch('https://randomuser.me/api/?results=3');
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Ver usuarios</h2>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img className='usersImg' src={user.picture.thumbnail} alt="Avatar" />
            <p>Nombre: {user.name.first} {user.name.last}</p>
            <p>Email: {user.email}</p>
            <p>País: {user.location.country}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Usuarios;
