import React from 'react';
import './footer.scss';
const Footer = () => {
    return (
        <>
            <section className="main-footer">
                <div className="custom-container">
                        <div className="parent">
                            <div className="left-side">
                                <h6><span>Elosys</span> Testnet Q1 - 2024</h6>
                            </div>
                            <div className="right-side">
                                <a href="www.elosys.io" target='_blank'>Website</a>
                                <a href="twitter.com/ElosysIo" target='_blank'>Twitter</a>
                                <a href="discord.gg/elosysio" target='_blank'>Discord</a>
                                <a href="t.me/Elosys_io" target='_blank'>Telegram</a>
                            </div>
                        </div>
                </div>
            </section>
         

        </>
    )
}

export default Footer;
