import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div>
        <nav>
          <ul>
            <li className='appList'>
              <Link to="/usuarios">Ver usuarios</Link>
            </li>
            <li className='appList'>
              <h3>Ver usuario por país</h3>
              <ul>
                <li>
                  <Link to="/usuarios/es">Usuario-ES</Link>
                </li>
                <li>
                  <Link to="/usuarios/br">Usuario-BR</Link>
                </li>
                <li>
                  <Link to="/usuarios/us">Usuario-US</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default App;
