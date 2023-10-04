import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./UsuarioPais.css";

const UsuarioPais = () => {
  const [users, setUsers] = useState();

  const { pais } = useParams();

  useEffect(() => {
    fetch(`https://randomuser.me/api/?nat=${pais}`)
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);
  console.log(users);

  return (
    <div>
      {users?.map((u) => (
        <>
          <p>{u.name.first}</p>
          <img src={u.picture.thumbnail} />
          <p>{u.email}</p>
          <p>{u.location.country}</p>
        </>
      ))}
    </div>
  );
};

export default UsuarioPais;
