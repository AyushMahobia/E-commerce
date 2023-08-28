import React from 'react'
import logoOne from '/images/logo.png'
import '../Styles/footer.css'
const Footer = () => {
    return (
        <>
            <section className="footer-section">
                <div className="footer-grid">
                    <div className="footer-one">
                        <img src={logoOne} alt="/" className='footer-logo' />
                        <h5>The best look anytime, anywhere.</h5>
                    </div>
                    <div className="footer-two">
                        <h6>For Her</h6>
                        <ul>
                            <li><a href="#" className="footer-link">Women Jeans</a></li>
                            <li><a href="#" className="footer-link">Tops and Shirts</a></li>
                            <li><a href="#" className="footer-link">Women Jackets</a></li>
                            <li><a href="#" className="footer-link">Heels and Flats</a></li>
                            <li><a href="#" className="footer-link">Women Accessories</a></li>
                        </ul>
                    </div>
                    <div className="footer-three">
                        <h6>For Him</h6>
                        <ul>
                            <li><a href="#" className="footer-link">Men Jeans</a></li>
                            <li><a href="#" className="footer-link">Men Shirts</a></li>
                            <li><a href="#" className="footer-link">Men Shoes</a></li>
                            <li><a href="#" className="footer-link">Men Accessories</a></li>
                            <li><a href="#" className="footer-link">Men Jackets</a></li>
                        </ul>
                    </div>
                    <div className="footer-four">
                        <h6>Subscribe</h6>
                        <form>
                            <input type="email" name="email" id="email" className='footer-input' placeholder='Your email address' />
                            <button className="submit-btn" type='submit'>Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer
