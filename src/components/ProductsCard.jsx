import React, { useContext, useState } from 'react'
import context from '../context/Context'
import { Link } from 'react-router-dom';

const ProductsCard = () => {
    const { products, setViewProduct } = useContext(context);
    return (
        <>
            <section className="item-section">
                <div className="item-product-container">
                    <div className="item-product-cards">
                        {
                            products.map(product => {
                                return (
                                    <Link to={"/view"} className="home-product-card" key={product.id} onClick={() => setViewProduct([product])}>
                                        <img src={product.img} alt={product.id} />
                                        <div className="home-product-details">
                                            <h5>{product.title}</h5>
                                            <span>{product.type}</span>
                                            <p>{product.newPrize}</p>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>


        </>
    )
}

export default ProductsCard
