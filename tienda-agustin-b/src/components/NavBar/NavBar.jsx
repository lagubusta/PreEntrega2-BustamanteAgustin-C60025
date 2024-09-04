import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  return (
    <>
      <nav className='navBar'>
        <button>Inicio</button>
        <button>Productos</button>
        <button>Detalle</button>
      </nav>
      <CartWidget></CartWidget>
    </>
  )
}

export default NavBar;