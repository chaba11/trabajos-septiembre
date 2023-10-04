import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UsuarioPais() {
  const { pais } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await fetch(`https://randomuser.me/api/?nat=${pais}`);
        const data = await response.json();
        setUser(data.results[0]);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }

    fetchUser();
  }, [pais]);

  return (
    <div>
      <h2>Ver usuario por país</h2>
      {user && (
        <div>
          <img className='usersImg' src={user.picture.thumbnail} alt="Avatar" />
          <p>Nombre: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>País: {user.location.country}</p>
        </div>
      )}
    </div>
  );
}

export default UsuarioPais;
