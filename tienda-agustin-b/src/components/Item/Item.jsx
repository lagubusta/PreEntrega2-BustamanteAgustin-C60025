import './Item.css'
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock }) => {

    return (
        <div className='contenedor-CardItem'>
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="Info">
                    ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
                <ItemCount></ItemCount>
                <footer className="ItemFooter">
                    <Link to= {`/item/${id}`} className='Option'>Ver Detalle </Link>              
                </footer>
            </section>
        </article>
        </div>
    )
}


export default Item;