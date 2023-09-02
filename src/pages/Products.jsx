import React from 'react'
import "../Styles/products.css"
import { motion } from "framer-motion"
import ProductsCard from '../components/ProductsCard'
import SideFilter from '../components/SideFilter'
const Products = () => {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}

            className='product-section'
        >
            <div className='product-container'>
                <div className="product-grid">
                    <div className='product-two'>
                        <ProductsCard />
                    </div>
                    <div className='product-one'>
                        <SideFilter />
                    </div>

                </div>

            </div>
        </motion.div>
    )
}

export default Products
