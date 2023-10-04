import React, { useEffect, useState } from "react";

export default async function Usuarios() {
  const gamesIds = [0, 1, 2];

  const promises = gamesIds.map((id) =>
    fetch(`https://randomuser.me/api/?results=3`, {
      method: "GET",
    })
  );

  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((response) => response.json()));

  return (
    <div>
      <h2>Usuarios</h2>
      <ul>
        {data.map((userData, index) => (
          <li key={index}>{userData.results[0].name.first}</li>
        ))}
      </ul>
    </div>
  );
}
