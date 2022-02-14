import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaWhatsapp,
  FaDribbble,
} from "react-icons/fa";

const headerData = {
  name: "MD. Sajjad",
  designation: "Web Developer",
  imageThumb: "/images/logo.png",
  social: {
    github: "https://github.com/sajjadbhuiyan",
    linkedin: "https://www.linkedin.com/in/md-sajjad-bhuiyan-taki/",
    facebook: "https://www.facebook.com/profile.php?id=100016734583853",
    whatsapp: "https://wa.me/8801613922248",
    dribbble: "https://dribbble.com/",
  },
};

function Header({ toggleHeader, toggleHandler }) {
  return (
    <>
      <div
        className={
          toggleHeader
            ? "mobile-header py-2 px-3 mt-4 push"
            : "mobile-header py-2 px-3 mt-4"
        }
      >
        <button className="menu-icon mr-2" onClick={toggleHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Link to="/multipage" className="logo">
          <img src={headerData.imageThumb} alt={headerData.name} />
        </Link>
        <Link to="/" className="site-title dot ml-2">
          {headerData.name}
        </Link>
      </div>

      <header
        className={
          toggleHeader
            ? "left float-left shadow-dark open"
            : "left float-left shadow-dark"
        }
      >
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={toggleHandler}
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <div className="header-inner d-flex align-items-start flex-column">
          <Link to="/">
            <img src={headerData.imageThumb} alt={headerData.name} />
          </Link>
          <Link to="/" className="site-title dot mt-3">
            {headerData.name}
          </Link>

          <span className="site-slogan">{headerData.designation}</span>

          <nav>
            <ul className="vertical-menu scrollspy">
              <li>
                <Link to="/">
                  <i className="icon-home"></i>Home
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <i className="icon-user"></i>About
                </Link>
              </li>
              <li>
                <Link to="/services">
                  <i className="icon-bulb"></i>Services
                </Link>
              </li>
              <li>
                <Link to="/resume">
                  <i className="icon-graduation"></i>Experience
                </Link>
              </li>
              <li>
                <Link to="/works">
                  <i className="icon-grid"></i>Works
                </Link>
              </li>
              <li>
                <Link to="/bloglist">
                  <i className="icon-pencil"></i>Blog
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <i className="icon-phone"></i>Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="footer mt-auto">
            <ul className="social-icons list-inline">
              {!headerData.social.github ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.github}>
                    <FaGithub/>
                  </a>
                </li>
              )}
              {!headerData.social.linkedin ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.linkedin}>
                    <FaLinkedin />
                  </a>
                </li>
              )}
              {!headerData.social.facebook ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.facebook}>
                  <FaFacebookF />
                  </a>
                </li>
              )}
              {!headerData.social.whatsapp ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.whatsapp}>
                    <FaWhatsapp />
                  </a>
                </li>
              )}
              {!headerData.social.dribbble ? null : (
                <li className="list-inline-item">
                  <a href={headerData.social.dribbble}>
                    <FaDribbble />
                  </a>
                </li>
              )}
            </ul>

            <span className="copyright">
              &copy; {new Date().getFullYear()} MD. Sajjad Bhuiyan Taki
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
