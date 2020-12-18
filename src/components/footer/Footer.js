import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__logo">Wild Plants</h3>

      <div className="footer-wrapper">
        <div className="footer__addr">
          <h4 className="footer-contact">Contact</h4>

          <address>
            134 Christmas Pie 
            <br />
            Avenue, Denver, 
            <br />
            Colorado USA
            <br />
            <button className="footer__btn" href="mailto:example@wild-plants.com">
              Email Us
            </button>
          </address>
        </div>

        <ul className="footer__nav">
          <div className="nav__item">
            <h4 className="nav__title">
              We're on GitHub{" "}
              {/* <a href="https://github.com">
                <FontAwesomeIcon
                  classNameName="nav-github"
                  icon={faGithub}
                  size="2x"
                />
              </a> */}
            </h4>

            <ul className="nav__ul__github">
              
              <li>
                <a 
                  href="https://github.com/naomi-carey" 
                  target="_blank" 
                  rel="noreferrer"> 
                  Alfred Castillo
                </a>
              </li>

              <li>
                <a 
                  href="https://github.com/naomi-carey" 
                  target="_blank" 
                  rel="noreferrer"> 
                  Jean-Loup Cayuela
                </a>
              </li>

              <li>
                <a 
                  href="https://github.com/naomi-carey" 
                  target="_blank" 
                  rel="noreferrer"> 
                  Naomi Carey
                </a>
              </li>

              <li>
                <a 
                  href="https://github.com/naomi-carey" 
                  target="_blank" 
                  rel="noreferrer"> 
                  Mancini Roberta
                </a>
              </li>

              <li>
                <a 
                  href="https://github.com/naomi-carey" 
                  target="_blank" 
                  rel="noreferrer"> 
                  Ioan Lungu Tranole
                </a>
              </li>
              
            </ul>
          </div>

          <li className="nav__item nav__item--extra">
            <h4 className="footer-contact">Explore</h4>

            <ul className="nav__ul nav__ul--extra">
              <li>
                <a href="#">Edible Plants</a>
              </li>

              <li>
                <a href="#">Non Edible Plants</a>
              </li>

              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </li>

          <div className="nav__item">
            <h4 className="nav__title">About</h4>

            <ul className="nav__ul">
              <li>
                <a href="#">Our Story</a>
              </li>

              <li>
                <a href="#">Our Mission</a>
              </li>

              <li>
                <a href="#">Our Values</a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
      

      <div className="legal">
        <p>Copyright © 2020 Wild Plants Inc.</p>

        <div className="legal__links"></div>
      </div>
    </footer>
  );
};

export default Footer;
