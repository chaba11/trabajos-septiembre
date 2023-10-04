import { useState, useEffect } from "react";
import "./style.css";
import { useParams } from "react-router-dom";

type User = {
  results: {
    picture: {
      large: string;
    };
    name: {
      first: string;
    };
    email: string;
    nat: string;
  }[];
};

const UsersPais = () => {
  const { pais } = useParams<{ pais: string }>();
  const [user, setUser] = useState<User>();
  useEffect(() => {
    async function obtenerUsers() {
      const res = await fetch(`https://randomuser.me/api/?nat=${pais}`);
      const datos = await res.json();
      setUser(datos);
      localStorage.setItem("users", JSON.stringify(datos));
    }
    obtenerUsers();
  }, []);
  const usuario = user?.results.map((user) => {
    return (
      <div className="content-usuario" key={user.email}>
        <img src={user.picture.large} alt={user.name.first} />
        <div className="text">
          <p>{user.name.first}</p>
          <p>{user.email}</p>
          <p>{user.nat}</p>
        </div>
      </div>
    );
  });
  return <>{usuario}</>;
};

export { UsersPais };
