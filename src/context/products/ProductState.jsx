import React, { useState } from 'react';
import Context from '../Context';
import { originalProduct } from '../../constant/products';

const ProductState = (props) => {

    const [products, setProducts] = useState(originalProduct)

    const filteredProducts = (type) => {
        const filProducts = originalProduct.filter((product) => {
            if (type === "everything") {
                return product
            }
            return (product.type === type);
        })
        setProducts(filProducts);
    }

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        // console.log(product)
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
            // If the item is already in the cart, update its quantity
            const updatedItems = cartItems.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItems(updatedItems);
        } else {
            // If the item is not in the cart, add it
            const newItem = { ...product, quantity: 1 };
            setCartItems([...cartItems, newItem]);
        }
        // console.log(cartItems)
    };

    const [viewProduct, setViewProduct] = useState([]);
    return (
        <Context.Provider value={{ products, filteredProducts, cartItems, addToCart, viewProduct, setViewProduct }}>
            {props.children}
        </Context.Provider>
    )
}

export default ProductState
