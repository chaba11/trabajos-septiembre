import { useEffect, useState } from "react";

const User = () => {
  const [userData, setUserData] = useState();

  useEffect(() => {
    async function getUser() {
      const userDataRes = await fetch("https://randomuser.me/api/?results=3");
      const data = await userDataRes.json();
      setUserData(data);
    }
    getUser();
  }, [userData]);

  return (
    <>
      <p>{userData.results.name}</p>
    </>
  );
};

export { User };
