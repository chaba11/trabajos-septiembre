import { Link } from "react-router-dom"

const Header = () => {
  return (
	<header className="flex bg-cyan-500  p-5">
		<Link to={"/"} className="text-white">Volver</Link>
	</header>
  )
}

export default Header
