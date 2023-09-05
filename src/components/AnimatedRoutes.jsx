import React, { useContext } from 'react'
import { productsAcc, productsBoy, productsGirl, originalProduct } from "../constant/products"
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import { AnimatePresence } from "framer-motion"
import ViewProduct from './ViewProduct'
import CartItems from './CartItems'
import context from '../context/Context'
const AnimatedRoutes = () => {
    const location = useLocation();

    const { viewProduct } = useContext(context);
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/everything'} element={<Products />} />
                <Route path={'/women'} element={<Products />} />
                <Route path={'/men'} element={<Products />} />
                <Route path={'/accessories'} element={<Products />} />
                <Route path={'/view'} element={<ViewProduct products={viewProduct} />} />
                <Route path={'/cartItems'} element={<CartItems />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes
