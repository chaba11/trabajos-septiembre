import "./style.css";
import { useEffect, useState } from "react";

interface User {
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
}

const Users = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    async function obtenerUsers() {
      const res = await fetch("https://randomuser.me/api/?results=3");
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
  return <div className="content">{usuario}</div>;
};

export { Users };
