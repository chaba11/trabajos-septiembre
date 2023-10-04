import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { UserCard } from "../userCard/UserCard";

import "./styles.css";

export const CountryUsers = () => {
  const [users, setUsers] = useState([]);

  const routeParams = useParams();
  const pais = routeParams.pais;

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(`https://randomuser.me/api/?nat=${pais}`);

      setUsers(res.data.results);
    };

    getUsers();
  }, []);

  return (
    <div className="countryUsersContainer">
      {users.map((e) => (
        <UserCard
          key={e.email}
          img={e.picture.medium}
          name={e.name.first}
          email={e.email}
          country={e.location.country}
        />
      ))}
    </div>
  );
};
