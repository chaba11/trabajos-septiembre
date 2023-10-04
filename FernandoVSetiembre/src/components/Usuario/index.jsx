import { useState, useEffect } from "react";
import "./Usuario.css";

const Usuario = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=3")
      .then((response) => response.json())
      .then((data) => setUsers(data.results));
  }, []);

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

export default Usuario;
