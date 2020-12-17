import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">Wild Plants</h1>

        <h2 className="footer-contact">Contact</h2>

        <address>
          134 Christmas Pie Avenue
          <br />
          Denver, Colorado USA
          <br />
          <a className="footer__btn" href="mailto:example@wild-plants.com">
            Email Us
          </a>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">
            We're on GitHub{" "}
            <a href="https://github.com">
              <FontAwesomeIcon
                classNameName="nav-github"
                icon={faGithub}
                size="2x"
              />
            </a>
          </h2>

          <ul className="nav__ul">
            <li>
              {/* <a href="https://github.com">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a> */}
            </li>

            <li>
              <a href="https://github.com/naomi-carey"> Alfred Castillo</a>
            </li>

            <li>
              <a href="https://github.com/naomi-carey"> Jean-Loup Cayuela</a>
            </li>
            <li>
              <a href="https://github.com/naomi-carey"> Naomi Carey</a>
            </li>
            <li>
              <a href="https://github.com/naomi-carey"> Teiko Mancini</a>
            </li>
            <li>
              <a href="https://github.com/naomi-carey"> Ioan Lungu Tranole</a>
            </li>
          </ul>
        </li>

        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Explore</h2>

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

        <li className="nav__item">
          <h2 className="nav__title">About</h2>

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
        </li>
      </ul>

      <div className="legal">
        <p>Wild Plants Inc.</p>

        <div className="legal__links"></div>
      </div>
    </footer>
  );
};

export default Footer;
