import Nokia1100 from './img/extras/Productos/Nokia 1100.jpeg';
import Iphone13 from './img/extras/Productos/Iphone 13.jpeg';
import SamsungS21 from './img/extras/Productos/Samsung S21.jpeg';


const products = [
    {
        id: '1',
        name: 'Iphone 12',
        price: 1000,
        category: 'celular',
        img: {Iphone13},
        stcok: 25,
        description: 'Descripción de Iphone 12'
    },
    {
        id: '2',
        name: 'Samsung S21',
        price: 1500,
        category: 'celular',
        img: {SamsungS21},
        stcok: 10,
        description: 'Descripción de Samsung S21'
    },
    {
        id: '3',
        name: 'Nokia 1100',
        price: 500,
        category: 'celular',
        img: {Nokia1100},
        stcok: 300,
        description: 'Descripción de Nokia 1100'
    },
]

export const getProducts = () => {
    return new Promise ((resolve)=> {
        setTimeout(()=>{
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=> {
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}