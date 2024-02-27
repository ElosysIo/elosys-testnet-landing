import React from 'react'
import "./interested.scss"

const Interested = () => {
    return (
        <>
            <section className="interested">
                <img src="\assets\shadows\lastone-bg.svg" alt="img" className='img-fluid lastone-bg' />
                <div className="custom-container">
                    <div className="left-content">
                        <h6>Are you interested?</h6>
                        <p>Get more faucets and grow your chance to earn rewards by participating on Zealy Sprint.</p>
                        <a href="https://zealy.io/c/elosys" target='_blank'>Join zealy</a>
                    </div>
                    <div className="right-content">
                        <div className="wrapper-img">
                            <img src="\assets\icons\interested-main.svg" alt="img" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Interested
