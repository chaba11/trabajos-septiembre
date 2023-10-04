import { Link } from 'react-router-dom';
import './App.css'
function pais() {
  return (

    <div>
      <h1> Ver usuarios por pais</h1>
      <Link to={'/usuarios'}></Link>
      <Link to={'/usuarios/us'}>no se que pais es xd</Link>
      <Link to={'/usuarios/es'}>usuarios de ESPAÑA</Link>
      <Link to={'/usuarios/br'}>usuarios de BRASIL</Link>
    </div> 
  )
}

export default pais
