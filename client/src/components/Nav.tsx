
import { Link } from 'react-router-dom';
import "../index.css"

export const Nav = () => {


  return (
    <nav className='Bnav'>
              <ul className='Bcontainer'>
                <li>
                  <Link to="/">Inicio </Link>
                </li>
                <li>
                  <Link to="/signup">Registro</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contactos</Link>
                </li>
                <li>
                  <Link to="/Login">Ingreso</Link>
                </li>
              </ul>


    </nav>
  )
}

export default Nav;
