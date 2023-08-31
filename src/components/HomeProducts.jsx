import React from 'react'
import { productsAcc } from '../constant/products'
const HomeProducts = () => {
    return (
        <>
            <section className="home-product-section">
                <div className="home-product-container">
                    <h2>Featured Products</h2>
                    <div className="home-product-cards">
                        {
                            productsAcc.map(product => {
                                return (
                                    <div className="home-product-card" key={product.id}>
                                        <img src={product.img} alt={product.id} />
                                        <div className="home-product-details">
                                            <h5>{product.title}</h5>
                                            <span>{product.type}</span>
                                            <p>{product.newPrize}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeProducts
