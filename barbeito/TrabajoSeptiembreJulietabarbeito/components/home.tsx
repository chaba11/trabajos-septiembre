import usuarios from "./usuarios";
import { Link } from "react-router-dom";
import usuariosPais from "./usuariosPais";

export default function Inicio(){
    return(
     <Link to={usuarios}> Usuarios </Link>
    <Link to={usuariosPais}> Usuarios dentro de los Paises</Link></>
    );
}
