import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    async function getUser() {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const userDatas = await response.json();
      setUserData(userDatas.results);
    }

    getUser();
  }, []);

  return (
    <>
      <ul>
        {userData.map((user, index) => (
          <li key={index}>
            <img src={user.picture.medium} />
            <p>Nombre: {user.name.first}</p>
            <p>Email: {user.email}</p>
            <p>País: {user.location.country}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export { User };
