import { useState, useEffect } from "react";
import { getProducts, getProductsCategory } from '../../asyncMock';
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams;


    useEffect(() => {
        const asyncFunc = categoryId ? getProductsCategory : getProducts

        asyncFunc(categoryId)
            .then(response => {
                setProducts(response)
            })

            .catch(error => {
                console.error(error)
            })
    }, [])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}></ItemList>
        </div>
    )
}

export default ItemListContainer;