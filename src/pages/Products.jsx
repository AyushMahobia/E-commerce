import React, { useState } from 'react'
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

            {/* <section className={`view-product-section ${show && "active-view-section"}`}>
                <h2 onClick={() => setShow(!show)}>X</h2>
                {
                    viewProduct.map(product => {
                        return (
                            <div key={product.id} className='view-product-details'>
                                <div className="view-img">
                                    <img src={product.img} alt={product.title} />
                                </div>
                                <div className="view-description">
                                    <span>{product.type}</span>
                                    <h3>{product.title}</h3>
                                    <p className="view-prize">{product.newPrize}</p>
                                    <p>{product.description}</p>
                                    <div className="cart-btn">
                                        <form >
                                            <input type="number" onChange={handleChange} value={quantity} />
                                            <button type="submit">Add to cart</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </section> */}
        </motion.div>
    )
}

export default Products
