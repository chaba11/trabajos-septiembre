import React from "react";
import { useState, useEffect } from "react";

function UsuarioPais() {
    const { pais } = useParams();
    const [user, setUsers] = useState(null);

    useEffect(() => {
        fetch("https://randomuser.me/api/?results=3")
          .then((response) => response.json())
          .then((data) =>
          
          const sacarUsers ={
            name: '$(result.name.first} ${result.name.latest}',
            email: result.email,
            country: result.location.country,
            photo: result.picture.large,
          };

          setUsers(sacarUsers);
          )
      });


      return(
        <div>
            <h1>Usuario por Pais ({pais})</h1>
            <div>
                <p>Nombre: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Pais: {user.country}</p>
                <img src={user.photo} alt="perfil" />            </div>
        </div>
      );
}

export default UsuarioPais;