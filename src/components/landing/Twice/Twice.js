import React from 'react'
import "./twice.scss"

const Twice = () => {
    return (
        <>
            <section className="twice-section">
                <img src="\assets\shadows\private-mid-bottom.svg" alt="img" className='img-fluid private-mid-bottom' />
                <div className="custom-container">
                    <div className="parent">
                        <div className="left-side">
                            <div className="main-content">
                                <h6>A <span>private</span>, <span>scalable</span>,
                                    and <span>open source</span>
                                    infrastructure layer</h6>
                                <p>Elosys is a L1, PoW, public blockchain that leverage zkSNARKs in order to make the privacy compliant with new centralized laws and rules.</p>
                                <a href="docs.elosys.io" className='green-btn' target='_blank'>Learn more</a>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="wrapper-img">
                                <img src="\assets\icons\private-main.svg" alt="img" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="twice-section reverse-twice">
                <img src="\assets\shadows\earn-top-left.svg" alt="img" className='img-fluid earn-top-left' />
                <div className="custom-container">
                    <div className="parent">
                        <div className="right-content">
                            <div className="wrapper-img">
                                <img src="\assets\icons\earn-main.svg" alt="img" className='img-fluid' />
                            </div>
                        </div>
                        <div className="left-side">
                            <div className="main-content">
                                <h6>Earn <span>End-User</span> Rewards</h6>
                                <p>Elosys a blockchain of people, even from the testnet. Everyone will get free faucets and you can put them to work, earning points, climbing leaderboard and finally claim your rewards.</p>
                                <ul>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                        <circle cx="5" cy="5.94434" r="5" fill="#61D290" />
                                    </svg>USDT/ETH Rewards</li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                        <circle cx="5" cy="5.94434" r="5" fill="#61D290" />
                                    </svg>Dedicated to our community</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="twice-section">
                <img src="\assets\shadows\earn-top-left.svg" alt="img" className='img-fluid earn-top-left' />
                <div className="custom-container">
                    <div className="parent">
                        <div className="left-side">
                            <div className="main-content">
                                <h6>Earn <span>Node-Runner</span> Rewards</h6>
                                <p>Decentralized networks cannot operate without node-runners. Knowing this, we would like to show our appreciation through the node-runner award program. </p>
                                <ul>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                        <circle cx="5" cy="5.94434" r="5" fill="#61D290" />
                                    </svg>ELO Rewards</li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                        <circle cx="5" cy="5.94434" r="5" fill="#61D290" />
                                    </svg>Dedicated to our partners</li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-content">
                            <div className="wrapper-img">
                                <img src="\assets\icons\earn-noderunner.svg" alt="img" className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="twice-section reverse-twice">
                <img src="\assets\shadows\earn-top-left.svg" alt="img" className='img-fluid earn-top-left' />
                <img src="\assets\shadows\squash-bottom-right.svg" alt="img" className='img-fluid squash-bottom-right' />
                <div className="custom-container">
                    <div className="parent">
                        <div className="right-content">
                            <div className="wrapper-img">
                                <img src="\assets\icons\squash-main.svg" alt="img" className='img-fluid' />
                            </div>
                        </div>
                        <div className="left-side">
                            <div className="main-content">
                                <h6>Squash Errors
                                    With
                                    Our <span>Bug Bounty</span></h6>
                                <p>For those of you that have nerves of steel, we offer an exciting Bug Bounty program that will allow you to explore our protocol and help us find the weak links in the network.</p>
                                <ul>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                        <circle cx="5" cy="5.94434" r="5" fill="#61D290" />
                                    </svg>Reward pool TBA</li>
                                    <li><svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                        <circle cx="5" cy="5.94434" r="5" fill="#61D290" />
                                    </svg>The severity of the bug will determine the size of the prizes</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Twice
