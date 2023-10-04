import React from "react";
import "../userCard/styles.css";

export const UserCard = ({ img, name, email, country }) => {
  return (
    <div className="container">
      <img src={img} alt="user image" />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Contry: {country}</p>
    </div>
  );
};
