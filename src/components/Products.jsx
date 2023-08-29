import React, { useContext } from 'react'
import context from '../context/Context'

const Products = () => {
    const { products, addToCart } = useContext(context);

    return (
        <>
            {products.map((product) => {
                return (<div key={product.id}>
                    <img src={product.img} alt={product.title} />
                    <h1>{product.title}</h1>
                    <p>{product.prize}</p>
                    <button onClick={() => { addToCart(product) }}>ADD TO CART</button>
                </div>)
            })}
        </>
    )
}

export default Products
