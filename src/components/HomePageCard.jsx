import React from 'react'
import { home_page_card } from '../constant/home-page-card'
const HomePageCard = () => {
    return (
        <>
            <section className='home-page-card-section'>
                <div className='home-page-cards'>
                    {
                        home_page_card.map((card, ind) => {
                            return (
                                <div className={`home-page-card card-${ind}`} key={ind}>
                                    <img src={card.image} alt={`card_img${ind}`} className={`card-img${ind}`} />
                                    <div className="home-page-card-details"  >
                                        <h4>{card.heading}</h4>
                                        <p>{card.text}</p>
                                        <button className='card-btn'>Shop Now</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}

export default HomePageCard
