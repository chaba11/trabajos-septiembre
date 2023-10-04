import React, { useState, useEffect } from "react";
import axios from "axios";
import { UserCard } from "../userCard/UserCard";
import "./styles.css";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=3");

      setUsers(res.data.results);
    };

    getUsers();
  }, []);

  return (
    <div className="usersContainer">
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
