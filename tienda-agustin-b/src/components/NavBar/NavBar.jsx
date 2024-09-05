import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';


function NavBar() {
  return (
    <>
      <nav className='NavBar'>
        <Link to='/'>
          <h3 className='titulo-Eco'>Ecommerce</h3>
        </Link>
        <div className='Categorys'>
          
          <NavLink to={`/category/celular`} className={({ isActive }) => isActive ? 'AtiveOption' : 'Option'}>Celular</NavLink>
          <NavLink to={`/category/tablet`} className={({ isActive }) => isActive ? 'AtiveOption' : 'Option'}>Tablet</NavLink>
          <NavLink to={`/category/notebook`} className={({ isActive }) => isActive ? 'AtiveOption' : 'Option'}>NoteBook</NavLink>
        </div>
        <CartWidget />
      </nav>
    </>
  )
}

export default NavBar;