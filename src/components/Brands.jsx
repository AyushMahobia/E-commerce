import React from 'react'
import brandOne from "/images/brands/brandOne.png"
import brandTwo from "/images/brands/brandTwo.png"
import brandThree from "/images/brands/brandThree.png"
import brandFour from "/images/brands/brandFour.png"
const Brands = () => {
    return (
        <>
            <div className="container-brand">
                <div className="brands">
                    <div className="brand-img">
                        <img src={brandOne} alt="brandOne" className="brand-img" />
                    </div>
                    <div className="brand-img">
                        <img src={brandTwo} alt="brandTwo" className="brand-img" />
                    </div>
                    <div className="brand-img">
                        <img src={brandThree} alt="brandThree" className="brand-img" />
                    </div>
                    <div className="brand-img">
                        <img src={brandFour} alt="brandFour" className="brand-img" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Brands
