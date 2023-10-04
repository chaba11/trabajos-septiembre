import React from "react";


export default function Usuarios(){

const Usuarioss =() => {
    const [ equipo, setEquipo] = React.useState([])

    React.useEffect (() => {
        obtenerDatos()
    },[])
 
    const obtenerDatos= async () => {
        const Data= await fetch ("https://randomuser.me/api/?results=3")
        const users= await Data.json ()
        setEquipo(users)
    }
   return (
        <div>
            <h1>Usuarios</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li>  {item.picture} {item.name} - {item.email} - {item.pais} </li>
                    ) )
                }
            </ul>
        </div>
    );
  }
