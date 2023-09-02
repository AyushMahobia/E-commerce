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
                <Route path={'/everything'} element={<Products />} />
                <Route path={'/women'} element={<Products />} />
                <Route path={'/men'} element={<Products />} />
                <Route path={'/accessories'} element={<Products />} />
            </Routes>
        </AnimatePresence>

    )
}

export default AnimatedRoutes
