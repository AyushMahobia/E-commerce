import React from 'react'
import { productsAcc, productsBoy, productsGirl, originalProduct } from "../constant/products"
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import { AnimatePresence } from "framer-motion"
const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path={'/'} element={<Home />} />
                <Route path={'/everything'} element={<Products products={originalProduct} />} />
                <Route path={'/women'} element={<Products products={productsGirl} />} />
                <Route path={'/men'} element={<Products products={productsBoy} />} />
                <Route path={'/accessories'} element={<Products products={productsAcc} />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes
