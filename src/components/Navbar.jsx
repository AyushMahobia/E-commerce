import React, { useState } from 'react'
import '../Styles/navbar.css'
import logo from '/images/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [togglemenu, setToggleMenu] = useState(true)
    const handleMenu = () => {
        setToggleMenu(!togglemenu)
    }
    return (
        <>

            <div className="navbar toggle-hidden-visible" style={{ overflow: togglemenu ? "hidden" : "visible" }}>
                <div className="nav-logo">
                    <Link to={"/"}><img src={logo} alt="/" /></Link>
                </div>

                <div className="mobile-view" style={{ transform: togglemenu ? "translateX(100%)" : "translateX(0)" }}>
                    <span className="material-symbols-outlined menu" onClick={handleMenu}>
                        arrow_back
                    </span>
                    <ul className="navigation-product navigation">
                        <li><Link to={"/everything"} className="nav-link mobile-link">Everything</Link></li>
                        <li><Link to={"/"} className="nav-link mobile-link">Women</Link></li>
                        <li><Link to={"/"} className="nav-link mobile-link">Men</Link></li>
                        <li><Link to={"/"} className="nav-link mobile-link">Accessories</Link></li>
                    </ul>

                    <ul className="navigation-other navigation">
                        <div className="nav-page">
                            <li><Link to={"/"} className="nav-link mobile-link">About</Link></li>
                            <li><Link to={"/"} className="nav-link mobile-link">Contact Us</Link></li>
                        </div>
                    </ul>

                </div>

                <div className="nav-icon" onClick={handleMenu}>
                    <div className="nav-shop">
                        <span><Link to={"/"} className="nav-link prize">$0.00</Link></span>
                        <span><Link to={"/"} className="nav-link"><span className="material-symbols-outlined">
                            shopping_cart_checkout
                        </span></Link></span>
                        <span><Link to={"/"} className="nav-link"><span className="material-symbols-outlined person">
                            person
                        </span></Link></span>
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
