import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex items-center justify-center m-24 flex-col">
      <h1 className="text-3xl m-5">Homepage</h1>
      <Link to={"/usuarios"} className="m-5 bg-cyan-900	p-5 rounded-xl text-white hover:bg-cyan-700">Ver Usuarios </Link>
      <Link to={"#"} className="m-5 bg-cyan-900 p-5 rounded-xl text-white hover:bg-cyan-700">Ver Usuarios por pais</Link>
    </div>
  );
};

export default Homepage;
