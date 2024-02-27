import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <section className="main-navbar">
        <div className="custom-container">
          <nav class="navbar navbar-expand-xl p-0">
            <a class="navbar-brand" href="/"><img src="\logo.svg" alt="img" className="img-fluid" /></a>
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
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">HOME</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Testnet</a>
                  </li>
                  <li class="nav-item">
                    <a href="https://faucet.elosys.io" target="_blank" class="nav-link">Faucet</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Leaderboard</a>
                  </li>
                </ul>
                <div className="main-btn">
                  <a href="https://zealy.io/c/elosys" className="black-btn" target="_blank">Join Zealy</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Navbar;
