import React from 'react'
import { others } from "../constant/other"
const Other = () => {
    return (
        <>
            <section className="other-section">
                <div className="other-grid">
                    {
                        others.map(other => {
                            return (
                                <div className="other-details" key={other.heading}>
                                    <img src={other.img} alt={other.heading} />
                                    <h5>{other.heading}</h5>
                                    <p>{other.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Other
