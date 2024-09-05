import Item from '../Item/Item';
import ItemCount from '../ItemCount/ItemCount';


const ItemList = ({products}) => {
    return(
        <div className='ListGroup'>
            {products.map(prod => <Item key= {prod.id} {...prod} />)}
            
        </div>
    )
}
export default ItemList;