import React from 'react'
import "./testnet.scss"

const Testnet = () => {
    return (
        <>
            <section className="main-testnet">
                <img src="\assets\shadows\whydose-top-right.svg" alt="img" className='img-fluid whydose-top-right' />
                <img src="\assets\shadows\whydoes-mid-bottom.svg" alt="img" className='img-fluid whydoes-mid-bottom' />
                <div className="custom-container">
                    <div className="main-heading">
                        <h6>Why does Elosys
                            need a testnet?</h6>
                        <p>Testnet is an integral component of our developmental journey. Initially, fresh functionalities undergo deployment within Elosys's internal devnet. Subsequently, they transition to the testnet, enabling us to collectively assess various solutions alongside our community.</p>
                    </div>
                    <div className="bottom-content">
                        <div className="parent-cards">
                            <div className="single-card">
                                <img src="\assets\icons\enduser.svg" alt="img" className='img-fluid' />
                                <h6>End-user Rewards</h6>
                                <p>Put your faucet coins to work; complete quests, earn points and claim your rewards.</p>
                            </div>
                            <div className="single-card">
                                <img src="\assets\icons\node.svg" alt="img" className='img-fluid' />
                                <h6>Node-Runner Rewards</h6>
                                <p>Node-runners are crucial for building decentralized networks, which is why we want to offer rewards for running
                                    a node on Elosys.</p>
                            </div>
                            <div className="single-card">
                                <img src="\assets\icons\bugbounty.svg" alt="img" className='img-fluid' />
                                <h6>Bug Bounty</h6>
                                <p>We can't build a better blockchain without you. Help us catch the bugs before they catch us.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Testnet
