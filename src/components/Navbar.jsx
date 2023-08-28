import React, { useState } from 'react'
import '../Styles/navbar.css'
import logo from '/images/logo.png'

const Navbar = () => {
    const [togglemenu, setToggleMenu] = useState(true)
    const handleMenu = () => {
        setToggleMenu(!togglemenu)
    }
    return (
        <>

            <div className="navbar toggle-hidden-visible" style={{ overflow: togglemenu ? "hidden" : "visible" }}>
                <div className="nav-logo">
                    <img src={logo} alt="/" />
                </div>

                <div className="mobile-view" style={{ transform: togglemenu ? "translateX(100%)" : "translateX(0)" }}>
                    <span className="material-symbols-outlined menu" onClick={handleMenu}>
                        arrow_back
                    </span>
                    <ul className="navigation-product navigation">
                        <li><a href="/" className="nav-link mobile-link">Everything</a></li>
                        <li><a href="/" className="nav-link mobile-link">Women</a></li>
                        <li><a href="/" className="nav-link mobile-link">Men</a></li>
                        <li><a href="/" className="nav-link mobile-link">Accessories</a></li>
                    </ul>

                    <ul className="navigation-other navigation">
                        <div className="nav-page">
                            <li><a href="/" className="nav-link mobile-link">About</a></li>
                            <li><a href="/" className="nav-link mobile-link">Contact Us</a></li>
                        </div>
                    </ul>

                </div>

                <div className="nav-icon" onClick={handleMenu}>
                    <div className="nav-shop">
                        <span><a href="/" className="nav-link prize">$0.00</a></span>
                        <span><a href="/" className="nav-link"><span className="material-symbols-outlined">
                            shopping_cart_checkout
                        </span></a></span>
                        <span><a href="/" className="nav-link"><span className="material-symbols-outlined person">
                            person
                        </span></a></span>
                    </div>
                    <div className="menu-btn menu">
                        <span className="material-symbols-outlined" onClick={handleMenu}>
                            menu
                        </span>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar
