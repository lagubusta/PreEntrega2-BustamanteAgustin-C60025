import './CartWidget.css';
import carrito from '../../img/extras/carrito.png';
import ItemCount from '../ItemCount/ItemCount';

function CartWidget () {
    return (
        <>
        <img src={carrito} alt="carrito de compras"/> 
        </>
    )
}

export default CartWidget;