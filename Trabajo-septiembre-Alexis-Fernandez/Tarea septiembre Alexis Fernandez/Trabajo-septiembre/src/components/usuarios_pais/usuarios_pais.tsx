// UserByCountry.tsx - Componente para la visualización de usuarios por país
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Params {
  country: string;
}

const UserByCountry: React.FC = () => {
  const { country } = useParams<Params>();
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    // Llama a la API para obtener un usuario por país
    fetch(`https://randomuser.me/api/?nat=${country}`)
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, [country]);

  return (
    <div>
      <h2>Ver usuario por país</h2>
      {user ? (
        <div>
          <img src={user.picture.large} alt={user.name.first} />
          <p>Nombre: {user.name.first}</p>
          <p>Email: {user.email}</p>
          <p>País: {user.location.country}</p>
        </div>
      ) : (
        <p>No se encontró ningún usuario para el país {country}.</p>
      )}
    </div>
  );
};

export default UserByCountry;
