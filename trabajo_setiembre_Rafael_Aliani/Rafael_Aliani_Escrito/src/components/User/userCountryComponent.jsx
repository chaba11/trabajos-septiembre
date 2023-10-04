import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserCountry = () => {
  const [user, setUser] = useState({});

  const { country } = useParams();

  useEffect(() => {
    async function getUserCountry() {
      const response = await fetch(`https://randomuser.me/api/?nat=${country}`);
      const usersData = await response.json();
      setUser(usersData);
    }

    getUserCountry();
  }, []);

  return (
    <>
      {user.results &&
        user.results.map((u) => (
          <>
            <h1>{u.location.country}</h1>
            <img src={u.picture.medium} />
            <p>Nombre: {u.name.first}</p>
            <p>Email: {u.email}</p>
          </>
        ))}
    </>
  );
};

export { UserCountry };
