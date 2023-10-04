import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/User">Usuario</Link>
        </li>
        <li>
          <Link to="/user/es">Ver es</Link>
        </li>
        <li>
          <Link to="/user/br">Ver br</Link>
        </li>
        <li>
          <Link to="/user/us">Ver us</Link>
        </li>
      </ul>
    </>
  );
};
export { Home };
