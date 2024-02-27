import { Link, useLocation } from "react-router-dom";
import "./fauect.scss";
import Form from 'react-bootstrap/Form';

const Fauect = () => {
  const { hash } = useLocation();
  const isActive = (iHash) => hash === iHash;
  return (
    <>
      <section className="main-navbar navbgshadow">
        <div className="custom-container">
          <nav class="navbar navbar-expand-xl p-0">
          <div className="twice-btnsss">
              <Link class="navbar-brand" to="/"><img src="\logo.svg" alt="img" className="img-fluid " /></Link>
              <a href="#" className="green-btnnew m-0">Faucet</a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g clip-path="url(#clip0_48_777)">
                  <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_48_777">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <div className="mobile-set-bg">
                {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <HashLink to="#" style={
                      isActive("")
                        ? {
                          color: "#61D290"
                        }
                        : {}} class="nav-link" >Home</HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink to="#about" class="nav-link" style={
                      isActive("#about")
                        ? {
                          color: "#61D290"
                        }
                        : {}}>About</HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink to="#partner" class="nav-link" style={
                      isActive("#partner")
                        ? {
                          color: "#61D290"
                        }
                        : {}}>Features</HashLink>
                  </li>
                  <li class="nav-item">
                    <HashLink to="#faqs" class="nav-link" style={
                      isActive("#faqs")
                        ? {
                          color: "#61D290"
                        }
                        : {}}>FAQs</HashLink>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Join</a>
                  </li>
                </ul> */}
                <div className="social-links">
                  <a href="twitter.com/ElosysIo" target="_blank"><img src="\assets\main-landing\socials\twitter.svg" alt="img" className="img-fluid" /></a>
                  <a href="#" target="_blank"><img src="\assets\main-landing\socials\medium.svg" alt="img" className="img-fluid" /></a>
                  <a href="discord.gg/elosysio" target="_blank"><img src="\assets\main-landing\socials\discord.svg" alt="img" className="img-fluid" /></a>
                  <a href="#" target="_blank"><img src="\assets\main-landing\socials\insta.svg" alt="img" className="img-fluid" /></a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>


      <section className="main-banner" id="banner">
        <img src="\assets\shadows\banner-bg2.png" alt="img" className="img-fluid banner-bg" />
        <div className="custom-container">
          <div className="main-content main-content_new  ">
            <h6 className="m-0">Fund Your Testnet Wallet</h6>


            <Form>
              <Form.Group className="inputgrpouterdiv" controlId="exampleForm.ControlInput1">
                <Form.Label>Wallet Address</Form.Label>
                <Form.Control className="conrtadrs" type="email" placeholder="0xcf55B7aBC6654B818e49D3031B0330ECcD110511" readOnly />
                <svg className="crospics" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19.2 6.40014L6.4001 19.2C5.96277 19.6373 5.23744 19.6373 4.80011 19.2C4.36279 18.7627 4.36279 18.0374 4.80011 17.6L17.6 4.80016C18.0373 4.36283 18.7626 4.36283 19.2 4.80016C19.6373 5.23749 19.6373 5.96281 19.2 6.40014Z" fill="white" />
                  <path d="M19.2 19.1998C18.7626 19.6372 18.0373 19.6372 17.6 19.1998L4.80011 6.39997C4.36279 5.96264 4.36279 5.23731 4.80011 4.79998C5.23744 4.36265 5.96277 4.36265 6.4001 4.79998L19.2 17.5999C19.6373 18.0372 19.6373 18.7625 19.2 19.1998Z" fill="white" />
                </svg>

              </Form.Group>

            </Form>
            <div className="wrngparaot ">
              <h5 className="paratopgh">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.99996 1.04171C5.05829 1.04171 1.04163 5.05838 1.04163 10C1.04163 14.9417 5.05829 18.9584 9.99996 18.9584C14.9416 18.9584 18.9583 14.9417 18.9583 10C18.9583 5.05838 14.9416 1.04171 9.99996 1.04171ZM9.99996 17.7084C5.74996 17.7084 2.29163 14.25 2.29163 10C2.29163 5.75004 5.74996 2.29171 9.99996 2.29171C14.25 2.29171 17.7083 5.75004 17.7083 10C17.7083 14.25 14.25 17.7084 9.99996 17.7084Z" fill="#D66865" />
                  <path d="M10 8.54171C9.65833 8.54171 9.375 8.82504 9.375 9.16671V13.3334C9.375 13.675 9.65833 13.9584 10 13.9584C10.3417 13.9584 10.625 13.675 10.625 13.3334V9.16671C10.625 8.82504 10.3417 8.54171 10 8.54171Z" fill="#D66865" />
                  <path d="M9.99996 5.83335C9.89163 5.83335 9.78329 5.85835 9.68329 5.90002C9.58329 5.94168 9.49163 6.00002 9.40829 6.07502C9.33329 6.15835 9.27496 6.24168 9.23329 6.35002C9.19163 6.45002 9.16663 6.55835 9.16663 6.66668C9.16663 6.77502 9.19163 6.88335 9.23329 6.98335C9.27496 7.08335 9.33329 7.17502 9.40829 7.25835C9.49163 7.33335 9.58329 7.39168 9.68329 7.43335C9.88329 7.51668 10.1166 7.51668 10.3166 7.43335C10.4166 7.39168 10.5083 7.33335 10.5916 7.25835C10.6666 7.17502 10.725 7.08335 10.7666 6.98335C10.8083 6.88335 10.8333 6.77502 10.8333 6.66668C10.8333 6.55835 10.8083 6.45002 10.7666 6.35002C10.725 6.24168 10.6666 6.15835 10.5916 6.07502C10.5083 6.00002 10.4166 5.94168 10.3166 5.90002C10.2166 5.85835 10.1083 5.83335 9.99996 5.83335Z" fill="#D66865" />
                </svg> Wallet Grey-listed for 8 hours

              </h5>
              <h5 className="inersecpara">
                To ensure a sufficient balance for all users, the Faucet is set to dispense testnet tokens every 8 hours. Please retry in 8 hours.

              </h5>
            </div>
            <div className="wrngparaot_green">
              <h5 className="paratopgh_green">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10.0001 18.9583C5.05841 18.9583 1.04175 14.9416 1.04175 9.99996C1.04175 5.05829 5.05841 1.04163 10.0001 1.04163C14.9417 1.04163 18.9584 5.05829 18.9584 9.99996C18.9584 14.9416 14.9417 18.9583 10.0001 18.9583ZM10.0001 2.29163C5.75008 2.29163 2.29175 5.74996 2.29175 9.99996C2.29175 14.25 5.75008 17.7083 10.0001 17.7083C14.2501 17.7083 17.7084 14.25 17.7084 9.99996C17.7084 5.74996 14.2501 2.29163 10.0001 2.29163Z" fill="#61D290" />
                  <path d="M8.8167 12.9833C8.65003 12.9833 8.4917 12.9166 8.37503 12.8L6.0167 10.4416C5.77503 10.2 5.77503 9.79996 6.0167 9.55829C6.25837 9.31663 6.65837 9.31663 6.90003 9.55829L8.8167 11.475L13.1 7.19163C13.3417 6.94996 13.7417 6.94996 13.9834 7.19163C14.225 7.43329 14.225 7.83329 13.9834 8.07496L9.25837 12.8C9.1417 12.9166 8.98337 12.9833 8.8167 12.9833Z" fill="#61D290" />
                </svg> Wallet Grey-listed for 8 hours

              </h5>
              <h5 className="inersecpara_green">
                To ensure a sufficient balance for all users, the Faucet is set to dispense testnet tokens every 8 hours. Please retry in 8 hours.

              </h5>
            </div>
            <button className="green-btnss disable" >
              drip tokens (Coming Soon)

            </button>
          </div>
        </div>
      </section>
      <section className="main-footers">
        <div className="custom-container">
          <div class="  mainfoterouterdiv">
            <div className="twice-btnsss">
              <Link class="navbar-brand" to="/"><img src="\logo.svg" alt="img" className="img-fluid " /></Link>
              <a href="#" className="green-btnnew m-0">Faucet</a>
            </div>
            <div class=" endtectsff" >
              <p className="inersecpara_footer">
                © 2024 Elosys, All Rights Reserved<span>|</span>Terms & Conditions<span>|</span>DOCs
              </p>
            </div>
          </div>
        </div>
      </section>





    </>
  )
}

export default Fauect
