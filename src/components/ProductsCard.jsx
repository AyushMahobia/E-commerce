import React, { useContext } from 'react'
import context from '../context/Context'

const ProductsCard = () => {
    const { products } = useContext(context);
    return (
        <>
            <section className="item-section">
                <div className="item-product-container">
                    <div className="item-product-cards">
                        {
                            products.map(product => {
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

export default ProductsCard
