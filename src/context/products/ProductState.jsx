import React, { useState } from 'react';
import Context from '../Context';

const originalProduct = [{
    id: 123,
    photo: "abc",
    title: "Lipstick",
    prize: "900$",
    star: 3,
    tag: "female",
    quantity: 0
}, {
    id: 321,
    photo: "abc",
    title: "Nike Bag",
    prize: "1500$",
    star: 3,
    tag: "accesories",
    quantity: 0
}, {
    id: 213,
    photo: "abc",
    title: "Shorts",
    prize: "600$",
    star: 3,
    tag: "female",
    quantity: 0
}, {
    id: 312,
    photo: "abc",
    title: "Watch",
    prize: "400$",
    star: 3,
    tag: "accesories",
    quantity: 0
}, {
    id: 567,
    photo: "abc",
    title: "Barcletes",
    prize: "300$",
    star: 3,
    tag: "accesories",
    quantity: 0
}, {
    id: 765,
    photo: "abc",
    title: "T-Shirt",
    prize: "100$",
    star: 3,
    tag: "boy",
    quantity: 0
}, {
    id: 657,
    photo: "abc",
    title: "Glasses",
    prize: "600$",
    star: 3,
    tag: "boy",
    quantity: 0
}]

const ProductState = (props) => {

    const [products, setProducts] = useState(originalProduct)

    const filteredProducts = (tag) => {
        const filProducts = originalProduct.filter((product) => {
            if (tag === "") {
                return product
            }
            return (product.tag === tag);
        })
        setProducts(filProducts);
    }

    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
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
    };
    return (
        <Context.Provider value={{ products, filteredProducts, cartItems, addToCart }}>
            {props.children}
        </Context.Provider>
    )
}

export default ProductState
