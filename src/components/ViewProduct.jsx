import React, { useState } from 'react'
import Other from "../components/Other"
import Sales from './Sales'
import Footer from './Footer'
const ViewProduct = ({ products }) => {
    const [quantity, setQuantity] = useState(0)
    const handleChange = (e) => {
        let temp = e.target.value;
        // console.log(temp)
        temp <= 0 ? setQuantity(0) : setQuantity(temp);
    }
    return (
        <>
            <section className="view-product-section">
                {
                    products.map(product => {
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
            </section >
            <Other />
            <Sales />
            <Footer />
        </>
    )
}

export default ViewProduct
